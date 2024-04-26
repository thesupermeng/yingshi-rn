import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Platform
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { wawaXvodNeon, wawaWeatherModal } from "@type/wawa_gradlew";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/customOrangeclock.svg'
import DlIcon from "@static/images/iconcloseInouttargetyellow.svg";
import VipIcon from "@static/images/privatechatbgMinimizeRelated.svg"
import FinishIcon from "@static/images/encryptBellreminder.svg";
import { KVCarouselSort, wawaModalEpisode } from "@type/wawa_emojiheart_alert";
import { useAppSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/wawa_iconpointscore";

const throttledToast = debounce((msg: string) => {
  wawaNewarchdefaults.showToast(msg)
}, 1000)


interface wawaAwayShow {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: wawaXvodNeon;
  handleClose: any;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
}
function SelectDownloadComponent({
  vodId,
  isVip,
  source,
  screen,
  episodes,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: wawaAwayShow) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const windowWidth = screen === 'landscape' ? Dimensions.get('window').width / 2 : Dimensions.get('window').width;
  const width = windowWidth - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height / 2 * (screen === 'landscape' ? 0.8 : 0.55);
  const childWidth = (width - gapSize) / itemPerRow;
  const [episodeHeight, setHeight] = useState(0);
  const [episodeWidth, setWidth] = useState(0);
  const navigation = useNavigation();
  const downloadVideoReducer: wawaModalEpisode = useAppSelector(
    ({ downloadVideoReducer }: wawaIconsubssuccess) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let otherv = String.fromCharCode(114,103,98,116,111,98,103,114,0);
    let assets0 = String.fromCharCode(107,105,116,116,121,0);
    let const_kz = false;
    let humidity3 = String.fromCharCode(97,116,116,101,109,112,116,0);
    let dragU = String.fromCharCode(114,105,110,103,105,110,103,0);
    let login0: Array<any> = [4, 441];
    let link8: Array<any> = [522, 867];
    let defaultpredictionprofiler = 5.0;
    let bdxadsdkw = false;
    let iconlogoutj = 1.0;
    let mbridge5: Array<any> = [950, 197];
    let ballt: Array<any> = [326, 419];
    let tickA = 0.0;
   for (let h = 0; h < 1; h++) {
      otherv += "3";
   }
   let xadsdkK = const_kz ? !const_kz : const_kz;
   do {
      const_kz = login0.includes(const_kz);
      if (xadsdkK) {
         break;
      }
   } while (xadsdkK && (const_kz));
   for (let p = 0; p < 3; p++) {
      otherv = `${(1 * (bdxadsdkw ? 5 : 2))}`;
   }
   for (let s = 0; s < 2; s++) {
      assets0 = `${(String.fromCharCode(95,0) == otherv ? otherv.length : parseInt(`${defaultpredictionprofiler}`))}`;
   }
   for (let f = 0; f < 1; f++) {
      assets0 += `${(dragU.length ^ (bdxadsdkw ? 5 : 5))}`;
   }
       let wifirouterK = true;
       let zhengpianK = String.fromCharCode(103,101,111,107,101,121,0);
       let frame_cdT = 5.0;
      if (1 > zhengpianK.length) {
         wifirouterK = !wifirouterK;
      }
      if ((5.14 * frame_cdT) >= 3.55) {
         frame_cdT /= Math.max(1, parseFloat(`${parseInt(`${frame_cdT}`) % 3}`));
      }
         zhengpianK = `${parseInt(`${frame_cdT}`) & 1}`;
      while (!wifirouterK) {
          let giftz = false;
          let windl = 0.0;
          let backiconW = String.fromCharCode(97,117,116,111,102,105,108,108,0);
          let penaltyshootnogoalS = String.fromCharCode(111,110,115,101,116,0);
          let modityM = String.fromCharCode(115,105,110,103,117,108,97,114,0);
         zhengpianK = `${((wifirouterK ? 5 : 5) + 2)}`;
         giftz = backiconW == String.fromCharCode(122,0);
         windl += modityM.length;
         backiconW = `${backiconW.length & 3}`;
         penaltyshootnogoalS += `${(parseInt(`${windl}`) >> (Math.min(5, Math.abs((giftz ? 2 : 4)))))}`;
         modityM += `${backiconW.length * 1}`;
         break;
      }
         zhengpianK += `${1 * zhengpianK.length}`;
      for (let p = 0; p < 1; p++) {
          let editO: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,0),false ], [String.fromCharCode(116,114,97,99,101,0),true ]]);
         wifirouterK = zhengpianK.length > 42;
         editO.set(`${editO.size}`, 1);
      }
         frame_cdT -= parseFloat(`${zhengpianK.length}`);
       let arrowrightwithtails: Map<any, any> = new Map([[String.fromCharCode(115,97,108,116,108,101,110,0),962], [String.fromCharCode(99,111,109,112,97,114,97,116,111,114,0),595], [String.fromCharCode(101,115,99,97,112,105,110,103,0),46]]);
         wifirouterK = 58.77 >= frame_cdT;
      defaultpredictionprofiler *= assets0.length;
   while ((otherv.length * defaultpredictionprofiler) > 1.59 && (defaultpredictionprofiler * otherv.length) > 1.59) {
      otherv += `${assets0.length / (Math.max(3, 9))}`;
      break;
   }
   for (let i = 0; i < 3; i++) {
       let catagoryk = 3.0;
       let update_w29 = 2;
      if ((1.65 * catagoryk) >= 1.66 && (update_w29 | 3) >= 5) {
          let subtextE = 3;
         catagoryk /= Math.max(4, 3);
         subtextE ^= subtextE;
      }
      let chatbotphotof = 5105603.0 >= catagoryk;
      do {
          let backiconmaskk = String.fromCharCode(114,101,100,117,99,101,0);
         catagoryk -= update_w29 % (Math.max(parseInt(`${catagoryk}`), 6));
         backiconmaskk = "1";
         if (chatbotphotof) {
            break;
         }
      } while ((2 < (update_w29 ^ 5)) && chatbotphotof);
         update_w29 |= 1 + parseInt(`${catagoryk}`);
         catagoryk += update_w29;
      if (5.17 < (catagoryk - update_w29) && (5.17 - catagoryk) < 4.76) {
         update_w29 -= parseInt(`${catagoryk}`);
      }
         update_w29 /= Math.max(5, update_w29);
      bdxadsdkw = catagoryk >= 64.97;
   }
   for (let y = 0; y < 2; y++) {
       let iconbellM = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,0);
       let homeplayerH = String.fromCharCode(108,101,97,107,0);
       let libswresamplen: Map<any, any> = new Map([[String.fromCharCode(104,100,108,114,0),914], [String.fromCharCode(97,114,99,104,105,118,105,110,103,0),597], [String.fromCharCode(115,116,114,105,100,101,98,0),537]]);
       let uimanagerI = String.fromCharCode(103,101,110,101,114,97,103,101,0);
         iconbellM = `${homeplayerH.length << (Math.min(Math.abs(1), 2))}`;
      if (homeplayerH.length == uimanagerI.length) {
         homeplayerH += `${(iconbellM == String.fromCharCode(107,0) ? homeplayerH.length : iconbellM.length)}`;
      }
      for (let b = 0; b < 1; b++) {
         iconbellM = `${homeplayerH.length << (Math.min(4, Math.abs(libswresamplen.size)))}`;
      }
      if (2 > homeplayerH.length) {
          let time_0o = 1.0;
          let profilepicr = 0;
          let robotoN = 0.0;
          let a_centero = 3.0;
         homeplayerH += `${parseInt(`${time_0o}`) ^ 2}`;
         time_0o /= Math.max(3, parseFloat(`${profilepicr ^ parseInt(`${robotoN}`)}`));
         profilepicr ^= parseInt(`${robotoN}`);
         a_centero /= Math.max(parseFloat(`${parseInt(`${robotoN}`) << (Math.min(2, Math.abs(profilepicr)))}`), 1);
      }
      if (homeplayerH.length > iconbellM.length) {
         iconbellM += `${3 << (Math.min(1, homeplayerH.length))}`;
      }
         homeplayerH = `${uimanagerI.length + iconbellM.length}`;
       let gesturesn = true;
       let codeS = true;
      let thumbnailZ = 7569340 <= libswresamplen.size;
      do {
         libswresamplen.set(`${gesturesn}`, uimanagerI.length);
         if (thumbnailZ) {
            break;
         }
      } while (thumbnailZ && (2 > (5 ^ iconbellM.length)));
          let pushK: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,115,0),false ], [String.fromCharCode(112,101,117,107,101,114,0),false ]]);
          let icondefaultthumbnail7 = String.fromCharCode(119,97,116,99,104,101,115,0);
          let sportsj = String.fromCharCode(114,111,117,110,100,0);
         iconbellM = `${(sportsj.length * (codeS ? 4 : 2))}`;
         pushK.set(`${icondefaultthumbnail7}`, pushK.size);
         icondefaultthumbnail7 += `${icondefaultthumbnail7.length}`;
         sportsj = `${icondefaultthumbnail7.length}`;
         gesturesn = (homeplayerH.length | libswresamplen.size) <= 81;
         libswresamplen = new Map([[`${libswresamplen.size}`, libswresamplen.size]]);
         iconbellM += "3";
      mbridge5.push(libswresamplen.size / 3);
   }
      link8.push(parseInt(`${iconlogoutj}`) - 2);
   if ((4 >> (Math.min(4, link8.length))) == 2 && 4 == (link8.length >> (Math.min(1, mbridge5.length)))) {
      mbridge5.push(mbridge5.length);
   }
      humidity3 = `${parseInt(`${defaultpredictionprofiler}`) + 1}`;
   if (const_kz) {
      otherv = `${link8.length | 2}`;
   }
      iconlogoutj -= (parseFloat(`${(bdxadsdkw ? 5 : 3) * parseInt(`${iconlogoutj}`)}`));
   if (assets0.length >= 5) {
      const_kz = assets0.length <= 46 && link8.length <= 46;
   }
      mbridge5.push(((bdxadsdkw ? 1 : 3) - otherv.length));
      dragU = "1";
   while (otherv.length < 4) {
       let matchdetailbgb = false;
      let basketballtrophys = matchdetailbgb ? !matchdetailbgb : matchdetailbgb;
      do {
          let middlewareQ: Array<any> = [String.fromCharCode(119,104,101,101,108,0), String.fromCharCode(100,111,119,110,119,97,114,100,0), String.fromCharCode(97,112,112,101,97,114,101,100,0)];
         matchdetailbgb = (((matchdetailbgb ? 70 : middlewareQ.length) << (Math.min(middlewareQ.length, 4))) <= 70);
         if (basketballtrophys) {
            break;
         }
      } while ((!matchdetailbgb || !matchdetailbgb) && basketballtrophys);
      for (let c = 0; c < 1; c++) {
          let pauseh: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,101,0),450], [String.fromCharCode(108,115,98,115,0),867]]);
          let imagenomoredataX = String.fromCharCode(99,111,115,116,105,0);
         matchdetailbgb = imagenomoredataX.length >= 91 || matchdetailbgb;
         pauseh = new Map([[`${pauseh.size}`, 3 ^ pauseh.size]]);
         imagenomoredataX += `${pauseh.size | pauseh.size}`;
      }
         matchdetailbgb = (!matchdetailbgb ? matchdetailbgb : !matchdetailbgb);
      humidity3 += `${parseInt(`${iconlogoutj}`) & 2}`;
      break;
   }
   while (!dragU.includes(otherv)) {
      dragU += `${((const_kz ? 2 : 5) + ballt.length)}`;
      break;
   }
      assets0 = `${((const_kz ? 2 : 4) % 3)}`;
       let circlel = String.fromCharCode(112,114,105,109,101,114,0);
       let private_ua = 4.0;
       let brightnessS = 4;
      if ((private_ua * brightnessS) == 3.68) {
         brightnessS ^= 3;
      }
         private_ua /= Math.max(parseInt(`${private_ua}`) >> (Math.min(5, Math.abs(brightnessS))), 2);
      while ((brightnessS + private_ua) == 1.69 || (brightnessS | 3) == 5) {
          let layoutl = 2.0;
          let clockJ = 2;
          let downarrowJ: Array<any> = [String.fromCharCode(109,117,108,116,105,0), String.fromCharCode(102,105,108,108,112,0)];
         private_ua /= Math.max(4, 2);
         layoutl *= 1 ^ downarrowJ.length;
         clockJ <<= Math.min(Math.abs(3 >> (Math.min(Math.abs(clockJ), 2))), 5);
         downarrowJ.push(parseInt(`${layoutl}`) & downarrowJ.length);
         break;
      }
         brightnessS |= parseInt(`${private_ua}`) + brightnessS;
         private_ua *= brightnessS | 2;
      while (1 >= (circlel.length >> (Math.min(3, Math.abs(brightnessS)))) || 1 >= (brightnessS >> (Math.min(circlel.length, 1)))) {
          let with_8l = 2.0;
          let gradlewq: Array<any> = [53, 340, 924];
          let schedulerk = String.fromCharCode(100,101,102,105,110,101,115,0);
          let iconuserz = 1.0;
          let mbbid7 = String.fromCharCode(108,111,116,115,0);
         brightnessS += 3;
         with_8l -= parseInt(`${with_8l}`);
         gradlewq.push((schedulerk == String.fromCharCode(83,0) ? schedulerk.length : gradlewq.length));
         iconuserz += parseFloat(`${gradlewq.length / (Math.max(2, parseInt(`${with_8l}`)))}`);
         mbbid7 = `${parseInt(`${iconuserz}`) + mbbid7.length}`;
         break;
      }
       let basek: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,105,110,103,0),65], [String.fromCharCode(116,105,109,101,99,111,100,101,115,0),126]]);
       let heartT: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,97,115,0),849], [String.fromCharCode(99,111,109,112,108,101,120,105,116,121,0),918], [String.fromCharCode(112,100,102,0),84]]);
         private_ua /= Math.max(2, 2);
      for (let r = 0; r < 2; r++) {
         private_ua -= 1 / (Math.max(6, circlel.length));
      }
      otherv += `${1 + login0.length}`;
      const_kz = (assets0.length & otherv.length) <= 85;
   let subbasketballplayerQ = otherv.length >= 5672857;
   do {
       let sourceF: Map<any, any> = new Map([[String.fromCharCode(115,105,110,113,105,0),String.fromCharCode(109,99,100,101,99,0)], [String.fromCharCode(116,97,100,100,0),String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,0)]]);
       let dycreatoro: Array<any> = [924, 580];
       let floatingb = String.fromCharCode(116,97,112,0);
       let basketballX = 3.0;
      while (sourceF.get(`${dycreatoro.length}`) == null) {
          let minit_eS = 3.0;
          let refreshZ = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,0);
          let thumbnailm = 3;
          let notification_ = String.fromCharCode(111,116,111,105,0);
         sourceF = new Map([[`${sourceF.size}`, floatingb.length / (Math.max(1, 5))]]);
         minit_eS += refreshZ.length;
         refreshZ = "1";
         thumbnailm *= thumbnailm;
         notification_ += `${(String.fromCharCode(57,0) == refreshZ ? refreshZ.length : notification_.length)}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
          let baiduadsl = 2.0;
         floatingb += `${floatingb.length}`;
         baiduadsl -= parseFloat(`${parseInt(`${baiduadsl}`) << (Math.min(2, Math.abs(parseInt(`${baiduadsl}`))))}`);
      }
         dycreatoro = [dycreatoro.length - 2];
         sourceF.set(`${dycreatoro.length}`, sourceF.size | 2);
         floatingb += `${dycreatoro.length}`;
      while (sourceF.get(`${basketballX}`) != null) {
         basketballX /= Math.max(2 ^ dycreatoro.length, 4);
         break;
      }
      let libswscale9 = basketballX <= 6717726.0;
      do {
          let iconfeedbackO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,111,108,117,116,101,0),true ], [String.fromCharCode(117,110,114,101,103,105,115,116,101,114,0),true ]]);
         basketballX *= (String.fromCharCode(118,0) == floatingb ? floatingb.length : dycreatoro.length);
         iconfeedbackO.set(`${iconfeedbackO.size}`, iconfeedbackO.size / (Math.max(4, iconfeedbackO.size)));
         if (libswscale9) {
            break;
         }
      } while (libswscale9 && (sourceF.get(`${basketballX}`) != null));
      if ((3.24 - basketballX) > 2.27 || 3.24 > (basketballX - dycreatoro.length)) {
         dycreatoro = [dycreatoro.length];
      }
         sourceF = new Map([[`${sourceF.size}`, dycreatoro.length - sourceF.size]]);
       let nterstitiale = String.fromCharCode(115,111,108,117,116,105,111,110,0);
       let imagenomoredataE = String.fromCharCode(117,110,105,116,115,0);
      if (!imagenomoredataE.includes(`${nterstitiale.length}`)) {
         nterstitiale = `${1 % (Math.max(4, dycreatoro.length))}`;
      }
      if (3 <= (3 % (Math.max(10, sourceF.size))) && (3 % (Math.max(3, sourceF.size))) <= 2) {
         nterstitiale += `${sourceF.size + floatingb.length}`;
      }
      otherv = "1";
      if (subbasketballplayerQ) {
         break;
      }
   } while (subbasketballplayerQ && (1 == (otherv.length % 2)));
   if ((assets0.length | login0.length) == 2 && 3 == (assets0.length | 2)) {
       let iconuserJ = false;
       let casting9 = 3.0;
       let subbasketballplayerN = 0;
       let unimplementedviewV = true;
      if (iconuserJ) {
         iconuserJ = !iconuserJ;
      }
         unimplementedviewV = 65.48 <= casting9 && iconuserJ;
       let xvod5 = String.fromCharCode(108,97,122,105,108,121,0);
       let applep = String.fromCharCode(99,111,109,112,114,101,115,115,101,100,0);
         iconuserJ = applep.length < 29;
          let showmoreU: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,115,0),914], [String.fromCharCode(105,110,116,101,103,101,114,105,102,121,0),652], [String.fromCharCode(102,114,97,103,109,101,110,116,115,0),400]]);
          let headerm = true;
         subbasketballplayerN <<= Math.min(4, Math.abs(1 + subbasketballplayerN));
         showmoreU.set(`${headerm}`, showmoreU.size % 1);
         casting9 /= Math.max(3, applep.length / 2);
         casting9 += 3 ^ parseInt(`${casting9}`);
      if (xvod5 == applep) {
         applep += `${3 | parseInt(`${casting9}`)}`;
      }
      if (xvod5.length < 5) {
         xvod5 = `${3 | xvod5.length}`;
      }
      for (let w = 0; w < 3; w++) {
         subbasketballplayerN ^= ((unimplementedviewV ? 3 : 5));
      }
      let greenarrowupY = casting9 <= 7099867.0;
      do {
          let taiwanx = String.fromCharCode(115,101,116,115,104,97,114,101,0);
          let libavfilter_ = false;
          let libreactnativeblobI = 5.0;
          let iconpipexpandK = 4;
          let qaagj = String.fromCharCode(115,104,111,119,119,97,118,101,115,0);
         casting9 *= taiwanx.length << (Math.min(2, xvod5.length));
         taiwanx = `${(qaagj == String.fromCharCode(52,0) ? qaagj.length : (libavfilter_ ? 1 : 5))}`;
         libavfilter_ = 59 <= iconpipexpandK && libavfilter_;
         libreactnativeblobI /= Math.max(1, ((libavfilter_ ? 4 : 3) & iconpipexpandK));
         if (greenarrowupY) {
            break;
         }
      } while (greenarrowupY && (!iconuserJ));
      for (let x = 0; x < 2; x++) {
          let showi: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,101,116,0),464], [String.fromCharCode(97,108,115,111,0),543]]);
          let loadingy = String.fromCharCode(116,114,97,105,108,0);
         iconuserJ = !iconuserJ;
         showi = new Map([[`${showi.size}`, loadingy.length & 3]]);
         loadingy = `${showi.size | loadingy.length}`;
      }
      assets0 += `${3 | subbasketballplayerN}`;
   }
      bdxadsdkw = dragU.length < 11;
   while ((1 | login0.length) <= 5) {
      login0.push(link8.length);
      break;
   }
       let theme2 = String.fromCharCode(99,97,109,101,108,0);
       let sendY = false;
       let lessA = String.fromCharCode(100,105,103,105,116,0);
          let basketballtrophyO = String.fromCharCode(108,97,117,110,99,104,101,115,0);
          let dacccfaabfbcbadeebddcabacdffdbN: Map<any, any> = new Map([[String.fromCharCode(99,108,117,116,0),405], [String.fromCharCode(104,105,116,0),652]]);
         lessA = `${((sendY ? 5 : 5) << (Math.min(Math.abs(3), 1)))}`;
         basketballtrophyO += `${dacccfaabfbcbadeebddcabacdffdbN.size - 3}`;
         dacccfaabfbcbadeebddcabacdffdbN.set(`${basketballtrophyO}`, 2 << (Math.min(2, Math.abs(dacccfaabfbcbadeebddcabacdffdbN.size))));
         sendY = lessA.endsWith(`${sendY}`);
      while (1 <= lessA.length || !sendY) {
         sendY = lessA.length == 61 && !sendY;
         break;
      }
       let reactnativeratingsU = String.fromCharCode(117,110,115,97,118,101,100,0);
       let yingB = String.fromCharCode(115,116,101,112,115,105,122,101,0);
         lessA = `${((sendY ? 3 : 1))}`;
         theme2 += "2";
         theme2 = `${(reactnativeratingsU == String.fromCharCode(76,0) ? reactnativeratingsU.length : (sendY ? 4 : 4))}`;
          let foregroundX = 2.0;
          let libavutilK = 1.0;
         lessA = `${((sendY ? 4 : 4) - yingB.length)}`;
         foregroundX /= Math.max(2, parseInt(`${foregroundX}`) + 2);
         libavutilK *= parseFloat(`${3}`);
          let d_manager7 = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,0);
          let controls8 = String.fromCharCode(116,114,117,110,107,0);
         yingB += `${yingB.length}`;
         d_manager7 = `${(String.fromCharCode(85,0) == d_manager7 ? d_manager7.length : controls8.length)}`;
         controls8 += `${d_manager7.length % (Math.max(5, controls8.length))}`;
      humidity3 = `${lessA.length}`;
      dragU += `${login0.length ^ 1}`;
       let libreactR = 4;
       let pager: Map<any, any> = new Map([[String.fromCharCode(100,111,110,110,97,0),false ], [String.fromCharCode(111,110,101,0),true ]]);
         pager = new Map([[`${pager.size}`, pager.size]]);
         pager = new Map([[`${pager.size}`, pager.size]]);
         pager.set(`${libreactR}`, 1 ^ pager.size);
      let reacts = 8443327 <= pager.size;
      do {
         pager = new Map([[`${pager.size}`, pager.size]]);
         if (reacts) {
            break;
         }
      } while ((libreactR >= pager.size) && reacts);
         pager.set(`${libreactR}`, libreactR / (Math.max(3, 6)));
      if (pager.size > 2) {
          let disconnectedr: Map<any, any> = new Map([[String.fromCharCode(112,114,111,114,101,115,100,101,99,0),577], [String.fromCharCode(115,116,111,112,112,101,100,0),226]]);
          let kuaishoue = 4.0;
          let sentryD = String.fromCharCode(100,105,114,101,99,116,0);
         pager.set(`${libreactR}`, pager.size);
         disconnectedr.set(`${sentryD}`, 3 << (Math.min(3, sentryD.length)));
         kuaishoue /= Math.max(1, (parseFloat(`${sentryD == String.fromCharCode(120,0) ? sentryD.length : parseInt(`${kuaishoue}`)}`)));
      }
      const_kz = otherv == String.fromCharCode(90,0) || 69 <= link8.length;
   let orangetickH = 7972263 >= login0.length;
   do {
      login0 = [(assets0 == String.fromCharCode(55,0) ? mbridge5.length : assets0.length)];
      if (orangetickH) {
         break;
      }
   } while ((5 >= (5 + humidity3.length) && 5 >= (login0.length + humidity3.length)) && orangetickH);
   let dependencyL = String.fromCharCode(104,107,57,0) == dragU;
   do {
      dragU += `${mbridge5.length << (Math.min(Math.abs(3), 4))}`;
      if (dependencyL) {
         break;
      }
   } while ((2 <= (mbridge5.length ^ 1) || 1 <= (dragU.length ^ 1)) && dependencyL);
      dragU += `${parseInt(`${defaultpredictionprofiler}`) * 2}`;
   if ((mbridge5.length & 1) >= 4) {
      mbridge5.push(((const_kz ? 4 : 4) & 1));
   }
   for (let q = 0; q < 2; q++) {
       let assets6: Map<any, any> = new Map([[String.fromCharCode(105,109,112,117,108,115,101,0),String.fromCharCode(114,101,106,101,99,116,0)], [String.fromCharCode(100,101,115,116,114,111,121,105,110,103,0),String.fromCharCode(119,114,105,116,101,111,117,116,0)]]);
       let taiwanY = String.fromCharCode(110,111,109,105,110,97,116,111,114,115,0);
       let iconarrowleftM = 4.0;
       let rnewarchdefaultsR: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,105,122,101,100,0),true ], [String.fromCharCode(99,101,110,116,114,111,105,100,115,0),true ], [String.fromCharCode(101,116,104,114,101,97,100,0),true ]]);
       let libavdeviceu = false;
      while ((assets6.size << (Math.min(Math.abs(1), 2))) < 4) {
          let qaagB = 4;
          let sportsb = String.fromCharCode(120,111,114,101,100,0);
          let entryW = 4;
          let anythinkz = 0;
         assets6 = new Map([[`${libavdeviceu}`, sportsb.length]]);
         qaagB ^= entryW;
         sportsb += `${anythinkz - 3}`;
         anythinkz ^= entryW;
         break;
      }
      while (taiwanY.length <= iconarrowleftM) {
         taiwanY += `${taiwanY.length}`;
         break;
      }
       let mimoH = false;
       let auto_su = true;
          let bannerd: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,105,116,117,116,101,0),true ], [String.fromCharCode(99,112,117,102,108,97,103,115,0),true ], [String.fromCharCode(98,111,117,110,100,101,100,0),false ]]);
          let homeinactiveF = false;
          let analyticN = 3;
         auto_su = 3 > analyticN;
         bannerd.set(`${homeinactiveF}`, bannerd.size ^ 2);
         analyticN -= ((homeinactiveF ? 4 : 3) ^ bannerd.size);
         mimoH = mimoH || iconarrowleftM > 38.3;
      while (iconarrowleftM >= 2.20) {
         iconarrowleftM /= Math.max(3, 2 & parseInt(`${iconarrowleftM}`));
         break;
      }
      if (auto_su) {
         assets6 = new Map([[`${iconarrowleftM}`, ((auto_su ? 3 : 4) & parseInt(`${iconarrowleftM}`))]]);
      }
          let rendery = String.fromCharCode(102,97,105,108,115,0);
          let const_aI = 3;
         assets6.set(taiwanY, 3 + taiwanY.length);
         rendery += `${const_aI >> (Math.min(rendery.length, 2))}`;
         const_aI |= 2;
      if (!libavdeviceu && 1.55 == (2.66 - iconarrowleftM)) {
         iconarrowleftM -= 1;
      }
      while ((4 ^ assets6.size) == 4) {
          let defaultlogoK = 1.0;
         auto_su = iconarrowleftM < 15.0;
         defaultlogoK *= 2 + parseInt(`${defaultlogoK}`);
         break;
      }
      while (!mimoH) {
          let libfabricjniJ = String.fromCharCode(115,101,101,107,105,110,103,0);
          let imagenetworkerrY = String.fromCharCode(118,103,108,111,98,97,108,0);
          let editg: Array<any> = [291, 664];
         mimoH = !mimoH;
         libfabricjniJ += `${2 * editg.length}`;
         imagenetworkerrY = "3";
         editg = [editg.length];
         break;
      }
         libavdeviceu = !taiwanY.endsWith(`${auto_su}`);
      for (let t = 0; t < 3; t++) {
         rnewarchdefaultsR.set(`${taiwanY}`, taiwanY.length | assets6.size);
      }
         rnewarchdefaultsR.set(taiwanY, taiwanY.length);
      for (let u = 0; u < 2; u++) {
         assets6 = new Map([[`${auto_su}`, 1]]);
      }
      iconlogoutj /= Math.max(2, parseFloat(`${parseInt(`${iconarrowleftM}`)}`));
   }
      ballt = [login0.length];
      otherv = `${1 & parseInt(`${defaultpredictionprofiler}`)}`;
   while ((4 + assets0.length) >= 3 || 4 >= (ballt.length + assets0.length)) {
      assets0 += `${mbridge5.length}`;
      break;
   }
   while (3 == otherv.length) {
      otherv = `${(String.fromCharCode(76,0) == otherv ? otherv.length : parseInt(`${defaultpredictionprofiler}`))}`;
      break;
   }
      tickA /= Math.max(parseInt(`${iconlogoutj}`) & 3, 1);
   let bufferT = ballt.length >= 9287082;
   do {
      ballt = [parseInt(`${defaultpredictionprofiler}`)];
      if (bufferT) {
         break;
      }
   } while ((2 == (ballt.length % 2) || 2 == (ballt.length % (Math.max(assets0.length, 6)))) && bufferT);
      login0 = [((bdxadsdkw ? 5 : 1) << (Math.min(Math.abs(parseInt(`${defaultpredictionprofiler}`)), 4)))];
      bdxadsdkw = mbridge5.includes(bdxadsdkw);
      dragU = `${(String.fromCharCode(79,0) == assets0 ? assets0.length : login0.length)}`;
      mbridge5 = [assets0.length];
   if (2 >= (ballt.length % 3)) {
      otherv = `${((bdxadsdkw ? 3 : 1) + parseInt(`${iconlogoutj}`))}`;
   }
   let emojiN = 7185533.0 >= tickA;
   do {
      tickA += parseInt(`${defaultpredictionprofiler}`) << (Math.min(link8.length, 3));
      if (emojiN) {
         break;
      }
   } while (emojiN && ((defaultpredictionprofiler / (Math.max(2.6, 1))) == 2.53 && 5.49 == (tickA - 2.6)));
      otherv += `${humidity3.length ^ 1}`;
      bdxadsdkw = humidity3.length == 56;
      bdxadsdkw = ((login0.length >> (Math.min(3, Math.abs((!bdxadsdkw ? login0.length : 48))))) <= 48);
 setIosCustomToastIsVisible(true) }, 1000)

  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );

  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );

  const displayEpisodes = useMemo(() => {
       let controlsD = false;
    let videoq = false;
    let huaweiE = 4.0;
    let humidityw = String.fromCharCode(115,101,114,118,101,114,0);
    let imageactionliveG = true;
    let iconwechat5 = 5.0;
    let libjsiI = String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,0);
    let playershirtI = 3;
    let iconbellg = String.fromCharCode(115,108,111,112,101,0);
    let floatingj = false;
    let muted5 = false;
   for (let x = 0; x < 2; x++) {
      humidityw += `${((videoq ? 3 : 4) - 2)}`;
   }
   if (videoq) {
      humidityw += `${(parseInt(`${iconwechat5}`) >> (Math.min(5, Math.abs((videoq ? 4 : 3)))))}`;
   }
   let moviesP = iconwechat5 <= 5643971.0;
   do {
      iconwechat5 *= (parseFloat(`${String.fromCharCode(100,0) == libjsiI ? libjsiI.length : (imageactionliveG ? 3 : 4)}`));
      if (moviesP) {
         break;
      }
   } while (moviesP && (3 > (parseInt(`${iconwechat5}`) + libjsiI.length) && (3 - libjsiI.length) > 4));
   for (let q = 0; q < 2; q++) {
      videoq = 28.4 == iconwechat5;
   }
   let downloadedV = 8553204.0 <= iconwechat5;
   do {
      iconwechat5 *= parseFloat(`${libjsiI.length}`);
      if (downloadedV) {
         break;
      }
   } while (downloadedV && (5.54 > huaweiE));

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   let latnY = 6098646.0 >= huaweiE;
   do {
      huaweiE -= libjsiI.length ^ parseInt(`${iconwechat5}`);
      if (latnY) {
         break;
      }
   } while ((controlsD) && latnY);
   let promotionO = iconwechat5 >= 6622456.0;
   do {
      iconwechat5 *= parseFloat(`${2 | playershirtI}`);
      if (promotionO) {
         break;
      }
   } while ((4.0 <= (iconwechat5 - 3.93) || 2.30 <= (iconwechat5 - 3.93)) && promotionO);
       let crown_ = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,0);
       let closeZ = String.fromCharCode(111,102,102,105,99,105,97,108,0);
      for (let j = 0; j < 2; j++) {
         closeZ = `${crown_.length}`;
      }
         closeZ = `${closeZ.length % (Math.max(6, crown_.length))}`;
      while (crown_ == closeZ) {
          let greenG: Array<any> = [734, 329, 500];
          let launcher4 = String.fromCharCode(108,105,98,99,101,108,116,0);
         closeZ = "3";
         greenG = [(String.fromCharCode(69,0) == launcher4 ? launcher4.length : greenG.length)];
         break;
      }
      while (crown_.length <= closeZ.length) {
         closeZ = `${(String.fromCharCode(54,0) == closeZ ? crown_.length : closeZ.length)}`;
         break;
      }
      let matchdetailbgd = String.fromCharCode(113,100,98,54,48,48,106,56,0) == closeZ;
      do {
         closeZ = `${closeZ.length}`;
         if (matchdetailbgd) {
            break;
         }
      } while ((crown_ != String.fromCharCode(119,0) && closeZ != String.fromCharCode(52,0)) && matchdetailbgd);
          let weatherK: Array<any> = [493, 613, 280];
         closeZ += `${closeZ.length + 3}`;
         weatherK.push(weatherK.length >> (Math.min(2, weatherK.length)));
      huaweiE += (playershirtI % (Math.max(5, (controlsD ? 2 : 1))));
      humidityw += `${parseInt(`${iconwechat5}`) % 1}`;
   let iconcloseG = humidityw.length <= 8529974;
   do {
      humidityw = `${(libjsiI == String.fromCharCode(87,0) ? parseInt(`${huaweiE}`) : libjsiI.length)}`;
      if (iconcloseG) {
         break;
      }
   } while ((2 >= (2 * humidityw.length) && (huaweiE - humidityw.length) >= 4.46) && iconcloseG);

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let recommendationi = 0;
    let debugH = 2.0;
    let darkf: Map<any, any> = new Map([[String.fromCharCode(97,97,99,101,110,99,0),String.fromCharCode(105,110,100,101,111,100,97,116,97,0)], [String.fromCharCode(108,115,112,114,0),String.fromCharCode(112,111,108,121,115,116,97,114,0)]]);
    let iconrightorange5 = true;
    let iconqqI = String.fromCharCode(97,112,97,99,107,101,116,0);
    let homeplayerB = String.fromCharCode(103,115,116,114,105,110,103,0);
    let stringsA = String.fromCharCode(98,117,99,107,101,116,115,0);
    let anytimeq = true;
       let combinedH = String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,0);
       let album3 = 1.0;
         album3 *= parseInt(`${album3}`) - 2;
         album3 -= parseInt(`${album3}`) * combinedH.length;
      for (let v = 0; v < 2; v++) {
          let modulesf = String.fromCharCode(111,110,101,99,104,0);
          let darkR = String.fromCharCode(104,97,100,97,109,97,114,100,120,0);
          let bottom2 = 3.0;
         combinedH += `${(String.fromCharCode(78,0) == combinedH ? combinedH.length : parseInt(`${album3}`))}`;
         modulesf = `${darkR.length + parseInt(`${bottom2}`)}`;
         darkR += `${(modulesf == String.fromCharCode(106,0) ? modulesf.length : parseInt(`${bottom2}`))}`;
      }
          let nalyticsk = 1.0;
          let neonz = String.fromCharCode(109,101,116,104,111,100,0);
         album3 -= 3;
         nalyticsk /= Math.max(parseFloat(`${neonz.length / (Math.max(1, 7))}`), 2);
         neonz = `${neonz.length}`;
         combinedH = `${parseInt(`${album3}`) ^ 3}`;
         combinedH = `${(combinedH == String.fromCharCode(81,0) ? parseInt(`${album3}`) : combinedH.length)}`;
      recommendationi >>= Math.min(3, Math.abs(darkf.size - 2));
      homeplayerB = `${(parseInt(`${debugH}`) / (Math.max(2, (iconrightorange5 ? 5 : 2))))}`;
      iconrightorange5 = String.fromCharCode(115,0) == iconqqI;
       let imageactionliveC = 3;
       let promotion1: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,105,101,110,116,115,0),228], [String.fromCharCode(117,115,101,114,110,97,109,101,0),978]]);
         imageactionliveC /= Math.max(1, 3);
      if ((imageactionliveC & promotion1.size) >= 2 || (promotion1.size & imageactionliveC) >= 2) {
         promotion1.set(`${imageactionliveC}`, imageactionliveC | promotion1.size);
      }
         imageactionliveC ^= 3;
      while (promotion1.size >= 2) {
         imageactionliveC >>= Math.min(1, Math.abs(promotion1.size >> (Math.min(Math.abs(2), 1))));
         break;
      }
      while (2 <= (1 | promotion1.size)) {
          let single2 = 4.0;
          let castm = String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,0);
          let models0 = String.fromCharCode(115,117,109,100,105,102,102,0);
         promotion1 = new Map([[models0, 3]]);
         single2 -= parseFloat(`${castm.length}`);
         castm += `${castm.length}`;
         models0 = `${2 - castm.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
          let penalty1: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,111,110,101,100,0),968], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,0),413], [String.fromCharCode(117,110,115,101,116,0),100]]);
          let placeholderb: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,0),152], [String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,0),278], [String.fromCharCode(115,117,112,112,111,114,116,115,0),788]]);
          let saveu = String.fromCharCode(122,95,52,50,95,100,116,115,109,0);
         promotion1.set(saveu, 2);
         penalty1.set(`${penalty1.size}`, penalty1.size);
         placeholderb.set(`${penalty1.size}`, penalty1.size & placeholderb.size);
         saveu += `${2 / (Math.max(6, placeholderb.size))}`;
      }
      homeplayerB += `${(stringsA == String.fromCharCode(102,0) ? stringsA.length : iconqqI.length)}`;
   if (homeplayerB.length >= 1) {
       let aboutm = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,0);
       let reactnativeultimatelistviewS: Map<any, any> = new Map([[String.fromCharCode(111,108,100,108,105,115,116,0),900], [String.fromCharCode(121,117,118,103,98,114,112,0),956]]);
       let redirecte: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,118,97,108,0),135], [String.fromCharCode(98,117,105,108,100,115,0),432], [String.fromCharCode(109,99,111,109,112,0),27]]);
       let time_5yU = 5.0;
       let minimize1 = 0.0;
      if (2 == aboutm.length) {
         reactnativeultimatelistviewS = new Map([[aboutm, 2 & aboutm.length]]);
      }
      for (let t = 0; t < 2; t++) {
         redirecte = new Map([[`${reactnativeultimatelistviewS.size}`, 1 % (Math.max(2, parseInt(`${minimize1}`)))]]);
      }
         aboutm = `${redirecte.size ^ 2}`;
      while (reactnativeultimatelistviewS.size > 1) {
         reactnativeultimatelistviewS.set(`${minimize1}`, 2 ^ parseInt(`${minimize1}`));
         break;
      }
      let combinedq = aboutm == String.fromCharCode(106,95,102,48,115,106,99,0);
      do {
         aboutm += `${3 - redirecte.size}`;
         if (combinedq) {
            break;
         }
      } while (combinedq && ((reactnativeultimatelistviewS.size << (Math.min(aboutm.length, 2))) < 4));
      if (1 > aboutm.length) {
         time_5yU *= aboutm.length << (Math.min(Math.abs(3), 5));
      }
         aboutm = `${aboutm.length}`;
       let descw = 3.0;
       let window_qcr = String.fromCharCode(104,119,99,97,112,0);
       let imagewatchliveI = String.fromCharCode(99,115,99,104,101,109,101,0);
      let baselineC = window_qcr == String.fromCharCode(116,51,51,49,95,105,121,102,0);
      do {
         window_qcr += `${redirecte.size - 1}`;
         if (baselineC) {
            break;
         }
      } while (baselineC && (3 == window_qcr.length));
      if (3 < (4 | redirecte.size) || (redirecte.size / (Math.max(8, parseInt(`${minimize1}`)))) < 4) {
         redirecte.set(`${time_5yU}`, 3 + parseInt(`${time_5yU}`));
      }
         aboutm = "2";
      if (time_5yU >= minimize1) {
         time_5yU -= 3 & parseInt(`${minimize1}`);
      }
      if (2 <= (reactnativeultimatelistviewS.size * 5) && (reactnativeultimatelistviewS.size * 5) <= 1) {
         reactnativeultimatelistviewS = new Map([[aboutm, aboutm.length]]);
      }
      while (Array.from(reactnativeultimatelistviewS.keys()).includes(`${minimize1}`)) {
         minimize1 += (String.fromCharCode(82,0) == aboutm ? aboutm.length : parseInt(`${minimize1}`));
         break;
      }
      homeplayerB += `${(darkf.size - (iconrightorange5 ? 2 : 5))}`;
   }
   while (3 > (1 | darkf.size)) {
      darkf.set(`${recommendationi}`, recommendationi);
      break;
   }
   let redgoal8 = 7756705 <= iconqqI.length;
   do {
      iconqqI = `${parseInt(`${debugH}`) - stringsA.length}`;
      if (redgoal8) {
         break;
      }
   } while (redgoal8 && (5.57 <= debugH));

    const epHeight = e.nativeEvent.layout.height;

       let arrowrightwithtail3 = String.fromCharCode(99,101,110,116,101,114,105,110,103,0);
      if (!arrowrightwithtail3.includes(arrowrightwithtail3)) {
         arrowrightwithtail3 += `${arrowrightwithtail3.length + arrowrightwithtail3.length}`;
      }
      for (let g = 0; g < 3; g++) {
         arrowrightwithtail3 = `${arrowrightwithtail3.length & 2}`;
      }
      let unreadP = arrowrightwithtail3.length >= 7102357;
      do {
         arrowrightwithtail3 += `${2 / (Math.max(4, arrowrightwithtail3.length))}`;
         if (unreadP) {
            break;
         }
      } while ((arrowrightwithtail3.length < arrowrightwithtail3.length) && unreadP);
      stringsA += `${recommendationi}`;
      darkf = new Map([[`${debugH}`, stringsA.length]]);
   if ((darkf.size - 5) == 3 && darkf.size == 5) {
      iconrightorange5 = homeplayerB.length >= 59 && !iconrightorange5;
   }
      darkf = new Map([[`${darkf.size}`, 3]]);
      stringsA = `${homeplayerB.length}`;
   for (let s = 0; s < 3; s++) {
      iconqqI = `${homeplayerB.length - 1}`;
   }
   if (4 <= iconqqI.length) {
      iconrightorange5 = recommendationi >= 80;
   }
    const epWidth = e.nativeEvent.layout.width;

   for (let p = 0; p < 1; p++) {
       let dicez = 1.0;
       let controlsD = 4;
       let bellreminderH: Map<any, any> = new Map([[String.fromCharCode(101,99,104,111,0),476], [String.fromCharCode(99,114,108,105,115,115,117,101,114,0),664]]);
       let iconarrowleftR = false;
       let greytickI = String.fromCharCode(112,114,101,112,97,114,101,0);
      while (3 > controlsD) {
         bellreminderH = new Map([[`${iconarrowleftR}`, controlsD]]);
         break;
      }
         controlsD /= Math.max(3, controlsD);
          let upgradex: Array<any> = [927, 922];
          let philippinesI: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,99,101,114,0),String.fromCharCode(105,102,97,99,116,111,114,0)], [String.fromCharCode(103,114,97,100,102,117,110,0),String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,0)]]);
         bellreminderH.set(`${upgradex.length}`, philippinesI.size + 3);
      if ((4 ^ controlsD) > 5 && (4 * controlsD) > 2) {
         controlsD -= controlsD * 3;
      }
      if ((controlsD - 5) > 5 && iconarrowleftR) {
          let sharemodalo = String.fromCharCode(115,109,97,108,108,101,115,116,0);
          let editk: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,97,99,116,101,114,115,0),false ], [String.fromCharCode(114,103,98,121,117,118,0),true ]]);
          let nativeF: Map<any, any> = new Map([[String.fromCharCode(115,101,109,97,110,116,105,99,115,0),String.fromCharCode(113,115,118,115,99,97,108,101,0)], [String.fromCharCode(97,115,115,101,114,116,105,111,110,0),String.fromCharCode(98,111,111,116,104,0)], [String.fromCharCode(114,101,100,115,112,97,114,107,0),String.fromCharCode(106,111,98,0)]]);
          let awayplayerh = String.fromCharCode(117,117,105,100,0);
          let subtextL: Array<any> = [344, 829, 431];
         controlsD ^= nativeF.size % (Math.max(4, awayplayerh.length));
         sharemodalo += "2";
         editk.set(sharemodalo, sharemodalo.length);
         nativeF.set(sharemodalo, sharemodalo.length);
         awayplayerh = `${(sharemodalo == String.fromCharCode(80,0) ? sharemodalo.length : subtextL.length)}`;
         subtextL.push(editk.size & 2);
      }
      while (5 <= controlsD) {
         controlsD *= (String.fromCharCode(100,0) == greytickI ? greytickI.length : bellreminderH.size);
         break;
      }
      while (4.31 == (parseFloat(`${controlsD}`) / (Math.max(dicez, 2))) && 4.31 == (parseFloat(`${controlsD}`) / (Math.max(1, dicez)))) {
         dicez -= (parseFloat(`${(iconarrowleftR ? 1 : 1) / (Math.max(controlsD, 10))}`));
         break;
      }
         greytickI += `${(1 & (iconarrowleftR ? 2 : 5))}`;
         controlsD -= 2 / (Math.max(8, bellreminderH.size));
      for (let g = 0; g < 1; g++) {
         bellreminderH = new Map([[`${bellreminderH.size}`, bellreminderH.size]]);
      }
         bellreminderH = new Map([[`${dicez}`, 2]]);
         iconarrowleftR = greytickI.length >= 88;
         greytickI += `${greytickI.length % 3}`;
       let listH = 3.0;
       let specP = 3.0;
      if (1 >= (controlsD ^ bellreminderH.size) && 2 >= (controlsD ^ 1)) {
         controlsD += parseInt(`${dicez}`) & greytickI.length;
      }
      homeplayerB = `${((iconarrowleftR ? 4 : 2) / (Math.max(bellreminderH.size, 4)))}`;
   }
   for (let c = 0; c < 1; c++) {
      iconrightorange5 = 18 == iconqqI.length;
   }
      iconqqI = `${(homeplayerB == String.fromCharCode(87,0) ? homeplayerB.length : parseInt(`${debugH}`))}`;
   if (3.46 < (2.8 + debugH) || 5 < (4 >> (Math.min(3, iconqqI.length)))) {
      debugH -= iconqqI.length;
   }
   for (let j = 0; j < 1; j++) {
       let overL = 3.0;
       let long_e5: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,100,101,108,101,116,101,0),684], [String.fromCharCode(97,99,116,105,118,101,0),773]]);
       let plashN = false;
      for (let v = 0; v < 3; v++) {
         plashN = !plashN;
      }
       let saveD = false;
       let iconwatchnow1 = true;
       let less1: Array<any> = [726, 531, 107];
       let emojiheartb: Array<any> = [56, 694, 224];
         overL /= Math.max(1, (parseFloat(`${(plashN ? 2 : 1)}`)));
          let liveendmodallogod = String.fromCharCode(102,111,114,103,101,116,0);
          let rightC = String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,0);
          let jingdong8: Array<any> = [String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,0), String.fromCharCode(116,111,111,108,98,111,120,0)];
         overL -= parseFloat(`${jingdong8.length - rightC.length}`);
         liveendmodallogod = `${liveendmodallogod.length}`;
         rightC += `${liveendmodallogod.length}`;
         saveD = !plashN;
          let iconviewerN = 2.0;
         less1.push(3);
         iconviewerN /= Math.max(3, parseFloat(`${1 & parseInt(`${iconviewerN}`)}`));
         iconwatchnow1 = 31 >= long_e5.size && 31 >= emojiheartb.length;
          let iconwatchB: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,115,0),408], [String.fromCharCode(112,97,114,97,108,108,97,120,0),397]]);
          let productP = String.fromCharCode(114,103,98,116,111,121,118,0);
         less1.push(((iconwatchnow1 ? 3 : 2) % (Math.max(long_e5.size, 9))));
         iconwatchB = new Map([[`${iconwatchB.size}`, iconwatchB.size >> (Math.min(productP.length, 1))]]);
         productP = `${iconwatchB.size % (Math.max(2, productP.length))}`;
      debugH -= 2 | homeplayerB.length;
   }
   if (homeplayerB.length > 4) {
      iconqqI += `${(String.fromCharCode(86,0) == iconqqI ? recommendationi : iconqqI.length)}`;
   }
   while ((stringsA.length ^ 4) <= 3) {
      stringsA = `${(String.fromCharCode(80,0) == iconqqI ? iconqqI.length : recommendationi)}`;
      break;
   }
    setHeight(epHeight);

   if (3 <= homeplayerB.length) {
       let previewv: Array<any> = [String.fromCharCode(97,116,116,114,98,117,116,101,0), String.fromCharCode(99,111,118,101,114,115,0), String.fromCharCode(112,105,120,101,108,115,0)];
         previewv = [previewv.length];
       let homei = String.fromCharCode(101,118,98,117,102,102,101,114,0);
       let runtimep = String.fromCharCode(110,112,111,105,110,116,115,0);
         previewv = [runtimep.length % (Math.max(1, 7))];
      debugH /= Math.max(4, parseInt(`${debugH}`));
   }
   let middlewareg = 5689949 >= iconqqI.length;
   do {
      iconqqI = `${darkf.size / (Math.max(homeplayerB.length, 6))}`;
      if (middlewareg) {
         break;
      }
   } while (middlewareg && (4 < (iconqqI.length - 3) || (iconqqI.length - recommendationi) < 3));
      recommendationi &= ((iconrightorange5 ? 4 : 1) & darkf.size);
   for (let b = 0; b < 3; b++) {
      stringsA += "3";
   }
       let shielddoned = String.fromCharCode(116,111,117,99,104,101,115,0);
       let livesharep: Array<any> = [978, 125, 872];
       let eyeclosex = String.fromCharCode(110,101,105,103,104,98,111,114,0);
       let sendM = 1.0;
       let grey_ = 5.0;
      while (1 >= (parseInt(`${sendM}`) / (Math.max(shielddoned.length, 2))) && (sendM / (Math.max(9, shielddoned.length))) >= 3.58) {
         sendM += shielddoned.length << (Math.min(5, eyeclosex.length));
         break;
      }
      while (eyeclosex.length <= shielddoned.length) {
          let libreanimatedn = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,0);
         eyeclosex += `${(libreanimatedn == String.fromCharCode(72,0) ? parseInt(`${grey_}`) : libreanimatedn.length)}`;
         break;
      }
         livesharep = [eyeclosex.length % 2];
         livesharep.push(shielddoned.length);
      if (!shielddoned.startsWith(`${eyeclosex.length}`)) {
         eyeclosex = `${(String.fromCharCode(107,0) == eyeclosex ? parseInt(`${sendM}`) : eyeclosex.length)}`;
      }
      for (let q = 0; q < 2; q++) {
          let penaltygoalh: Array<any> = [571, 127, 253];
          let event6 = String.fromCharCode(112,114,105,111,0);
         sendM *= penaltygoalh.length ^ parseInt(`${grey_}`);
         penaltygoalh.push((event6 == String.fromCharCode(108,0) ? event6.length : event6.length));
      }
      for (let f = 0; f < 2; f++) {
          let showmore9 = String.fromCharCode(98,115,111,108,117,116,101,0);
          let settingo: Array<any> = [String.fromCharCode(97,99,117,116,111,102,102,0), String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0), String.fromCharCode(102,105,108,108,115,0)];
          let homeactivej = String.fromCharCode(114,97,98,98,105,116,0);
          let resendO: Array<any> = [887, 105, 362];
          let text5: Map<any, any> = new Map([[String.fromCharCode(108,97,117,110,99,104,101,100,0),true ], [String.fromCharCode(100,101,116,101,99,116,111,114,0),false ], [String.fromCharCode(110,97,109,101,115,0),true ]]);
         livesharep = [1 - resendO.length];
         showmore9 += `${3 - homeactivej.length}`;
         settingo = [2 >> (Math.min(1, settingo.length))];
         homeactivej = `${(homeactivej == String.fromCharCode(116,0) ? homeactivej.length : text5.size)}`;
         resendO = [3 << (Math.min(2, homeactivej.length))];
         text5.set(homeactivej, homeactivej.length);
      }
      if ((eyeclosex.length >> (Math.min(Math.abs(3), 2))) >= 5) {
          let bellreminderx: Array<any> = [String.fromCharCode(100,111,119,110,108,101,102,116,0), String.fromCharCode(114,101,99,117,114,115,105,118,101,0)];
          let detailsH = String.fromCharCode(109,98,118,115,0);
          let reminderb = String.fromCharCode(115,99,104,101,100,117,108,101,0);
          let umengq = 2.0;
          let tumbnaile = String.fromCharCode(105,110,116,108,0);
         eyeclosex = `${bellreminderx.length | 2}`;
         bellreminderx = [2 / (Math.max(8, tumbnaile.length))];
         detailsH = `${3 - reminderb.length}`;
         reminderb += `${(String.fromCharCode(103,0) == detailsH ? reminderb.length : detailsH.length)}`;
         umengq *= detailsH.length % (Math.max(2, parseInt(`${umengq}`)));
         tumbnaile += `${parseInt(`${umengq}`) + tumbnaile.length}`;
      }
      recommendationi += 2;
      iconqqI = "1";
      iconrightorange5 = darkf.size <= 16 || !iconrightorange5;
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let iconwatchnowr: Map<any, any> = new Map([[String.fromCharCode(99,97,116,97,112,117,108,116,0),407], [String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,0),694]]);
    let airbnbstar0 = 4.0;
    let iconfeedbackb = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,0);
    let defaultbasketballbgs = 3.0;
    let largeL = String.fromCharCode(115,97,110,105,116,105,122,101,114,0);
    let splashd = String.fromCharCode(110,115,116,97,110,116,0);
    let package_cuE = 4.0;
    let watchnowbgJ = 0.0;
    let nexti = 5.0;
    let debugb = 0.0;
    let orangedownarrowd = String.fromCharCode(100,97,121,0);
    let baidui = String.fromCharCode(100,105,97,108,108,105,110,103,0);
    let predictionbannersharedL = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,0);
    let splashdG = false;
    let gmailu = true;
    let shrinkC = 3.0;
      watchnowbgJ += 3 | iconwatchnowr.size;

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

   for (let c = 0; c < 3; c++) {
       let productg = 0.0;
       let play3 = String.fromCharCode(99,111,108,115,112,97,110,0);
       let register_4o4 = false;
       let suboutX: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0),true ], [String.fromCharCode(109,111,100,101,120,112,0),false ]]);
       let subbasketballplayerA: Array<any> = [187, 387, 598];
      while (5 == (1 - suboutX.size) || 5 == (1 - subbasketballplayerA.length)) {
          let statst = String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,0);
          let favoriteM = String.fromCharCode(115,111,117,110,100,115,0);
          let predictionwinm: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,99,114,105,112,116,0),false ], [String.fromCharCode(114,111,111,116,0),true ]]);
         suboutX.set(`${register_4o4}`, ((register_4o4 ? 4 : 4) >> (Math.min(Math.abs(3), 1))));
         statst = `${statst.length | predictionwinm.size}`;
         favoriteM = `${statst.length | favoriteM.length}`;
         predictionwinm = new Map([[`${predictionwinm.size}`, predictionwinm.size % (Math.max(3, 3))]]);
         break;
      }
         play3 += `${play3.length << (Math.min(1, Math.abs(parseInt(`${productg}`))))}`;
      while (suboutX.size < subbasketballplayerA.length) {
         subbasketballplayerA = [subbasketballplayerA.length];
         break;
      }
      while (suboutX.get(`${subbasketballplayerA.length}`) != null) {
          let selectedF: Array<any> = [382, 590, 140];
         subbasketballplayerA.push(selectedF.length);
         break;
      }
         play3 = `${parseInt(`${productg}`)}`;
       let fastT = String.fromCharCode(112,97,114,0);
       let chinasamec = String.fromCharCode(99,111,108,111,114,107,101,121,0);
       let libfabricjniy = 0.0;
      let latns = play3 == String.fromCharCode(52,97,50,106,102,111,114,57,103,0);
      do {
         play3 = `${subbasketballplayerA.length}`;
         if (latns) {
            break;
         }
      } while (((subbasketballplayerA.length + 2) <= 3) && latns);
          let hejie = false;
          let modelsG = String.fromCharCode(110,108,109,101,97,110,115,0);
          let dycreatorA = true;
         fastT += `${((hejie ? 2 : 5))}`;
         hejie = modelsG.length >= 42;
         modelsG = `${(modelsG.length >> (Math.min(2, Math.abs((dycreatorA ? 2 : 3)))))}`;
         dycreatorA = modelsG.includes(`${dycreatorA}`);
       let collectionf = String.fromCharCode(114,101,112,114,101,112,97,114,101,0);
       let chatbotphotoq = String.fromCharCode(112,111,119,101,114,102,117,108,0);
         suboutX.set(collectionf, collectionf.length >> (Math.min(4, subbasketballplayerA.length)));
       let layoutn: Array<any> = [48, 744, 900];
         chinasamec = `${chinasamec.length / (Math.max(2, 9))}`;
      let tempi = String.fromCharCode(110,109,112,117,114,120,100,107,122,0) == collectionf;
      do {
         collectionf += `${chinasamec.length * play3.length}`;
         if (tempi) {
            break;
         }
      } while ((collectionf != String.fromCharCode(70,0) && fastT.length < 3) && tempi);
      if (!chatbotphotoq.startsWith(`${collectionf.length}`)) {
          let statisticst = true;
         collectionf = `${suboutX.size}`;
         statisticst = !statisticst;
      }
      largeL += `${(3 - (register_4o4 ? 1 : 1))}`;
   }

    if (!vodInfo) {

   let favoriteA = iconwatchnowr.size >= 7538117;
   do {
       let screenc = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,0);
       let rankG = 3;
      let libavcodec5 = String.fromCharCode(51,103,111,115,53,120,107,54,111,105,0) == screenc;
      do {
         screenc += `${rankG ^ 2}`;
         if (libavcodec5) {
            break;
         }
      } while (((rankG >> (Math.min(Math.abs(1), 4))) > 3 && (screenc.length >> (Math.min(Math.abs(1), 5))) > 1) && libavcodec5);
          let fastH = false;
          let setting3 = String.fromCharCode(109,111,116,105,111,110,0);
         rankG &= 2 & rankG;
         fastH = (((!fastH ? 58 : setting3.length) ^ setting3.length) > 58);
      iconwatchnowr = new Map([[`${package_cuE}`, 1]]);
      if (favoriteA) {
         break;
      }
   } while (((parseInt(`${airbnbstar0}`) - iconwatchnowr.size) >= 5) && favoriteA);
      return displayEpisodes as wawaWeatherModal[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && !vodInfo.vodIsAdult ?
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid && episode.vodSourceId === source
        )
        :
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid
        )

      if (vodInfo && episodeInfo) {

      defaultbasketballbgs += 1;
        const isDownloading = episodeInfo.status === KVCarouselSort.KVIconchatsend;

      splashd = `${largeL.length % 3}`;
        const isDownloaded = episodeInfo.status === KVCarouselSort.KVImagesPlaceholder;

      airbnbstar0 -= parseFloat(`${parseInt(`${package_cuE}`) ^ iconwatchnowr.size}`);

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as wawaWeatherModal;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as wawaWeatherModal;
    });
  }, [displayEpisodes, downloadVideoReducer.downloads, vodId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCurrentIndex(index)}
      >
        <Text
          style={{
            textAlign: "center",
            ...textVariants.header,
            color: index === currentIndex ? colors.text : colors.muted,
            fontSize: index === currentIndex ? 18 : 15,
          }}
        >
          {`${item}集`}
        </Text>
      </TouchableOpacity>
    );
  }, [ranges])

  useEffect(() => {
    if (iosCustomToastIsVisible) {
      setTimeout(() => {
        setIosCustomToastIsVisible(false)
      }, 2000);
    }
  }, [iosCustomToastIsVisible])

  return (
    <>
      {iosCustomToastIsVisible && screen === 'landscape' && Platform.OS === 'ios' && <View style={{
        opacity: 0.8,
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '-50%',
        padding: 8,
        borderRadius: 4
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {iosCustomToastText}
        </Text>
      </View>}
      {screen === 'potrait' && (
        <View
          style={{
            ...styles.header, marginHorizontal: 30,
          }}>
          <Text
            style={[
              styles.title,
              textVariants.header
            ]}>
            下载
          </Text>
        </View>
      )}

      <FlatList
        horizontal
        data={ranges}
        renderItem={renderItem}
      />

      {displayEpisodesWithStatus && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 15,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
            nestedScrollEnabled={true}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  if (!isVip) {
                    handleClose();
                    setShowAdOverlay(true);
                  } else {
                    if (downloadVideoReducer.queue.length + downloadVideoReducer.currentDownloading.length >= DOWNLOAD_FEATURE_MAX_QUEUE) {
                      setIosCustomToastText('最多同时下载10个视频，请稍后继续')
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else wawaNewarchdefaults.showToast('最多同时下载10个视频，请稍后继续')
                    } else {
                      setIosCustomToastText('已加入下载队列，请查看‘我的下载’')
                      onDownload(ep.nid);
                      
                      //   content: <Text style={{color: 'white', top:-100, backgroundColor: '#00000080', padding: 5}}>'已加入下载队列，请查看‘我的下载’'</Text>, 
                      
                      
                      
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else throttledToast('已加入下载队列，请查看‘我的下载’')
                    }
                  }
                }}
                disabled={ep.isDownloaded || ep.isDownloading}
              >
                <View
                  style={{
                    backgroundColor: colors.search,
                    padding: spacing.s,
                    minWidth: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                    position: "relative",
                  }}
                  onLayout={episodeHeight === 0 || episodeWidth === 0 ? handleContainerLayout : undefined}
                >
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? colors.primary : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: episodeWidth,
                      borderRadius: 8,
                    }}>
                    </Animated.View>
                  )}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color: colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>

                  {ep.isDownloading && (
                    <DlIcon
                      style={{
                        position: "absolute",
                        right: -8,
                        top: -5
                      }}
                    />
                  )}

                  {ep.isDownloaded && (
                    <View style={{
                      ...styles.legend,
                      backgroundColor: colors.primary + '29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <FinishIcon
                        width={10}
                        height={10}
                        color={colors.success}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
                        color={colors.yellow}
                        width={14}
                        height={14}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {isVip ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                onPressToDownload();
              }}
            >
              <DownloadIcon width={24} height={24} />
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: colors.muted,
                  paddingBottom: 3,
                }}
              >
                我的下载
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                handleClose();
                setShowAdOverlay(true);
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: !isVip ? colors.selected : colors.muted,
                }}
              >
                下载功能仅对VIP会员开放
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

export default memo(SelectDownloadComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
