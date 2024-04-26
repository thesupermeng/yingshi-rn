import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/pushFiled.svg';
import AlbumIcon from '@static/images/cancelActivity.svg';
import { useTheme } from "@react-navigation/native";
import { wawaLayout } from "../../../routes/wawa_playlist_casting";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/wawa_main_collection";
import { UploadProgressOverlay } from "../../components/modal/wawa_tempnodatagif_expired";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/wawa_iconpointscore";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { showLoginAction } from "@redux/actions/wawa_related";
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import TitleWithBackButtonHeader from "@iosScreen/components/header/wawa_matchinactive_header";

export const UploadVideo = ({ navigation }: BottomTabScreenProps<any>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors, dark } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), [colors]);

    const [isGrantPhotePermission, setGrantPhotePermission] = useState(false);
    const [videoSelected, setVideoSelected] = useState<Asset>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();
    const userState = useSelector<wawaPhoneControls>('userReducer');

    useEffect(() => {
        if (Platform.OS === 'ios') {
            check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                if (result == RESULTS.GRANTED) {
                    setGrantPhotePermission(true);
                } else {
                    
                    onRequestPermissiobPress();
                }
            });
        }
    }, []);

    const onCheckHistoryPress = () => {
       let libflipperj: Array<any> = [111, 36, 89];
    let libmapbufferjniJ: Array<any> = [723, 891];
    let googlex = 3.0;
    let lessz = true;
    let weatherF = String.fromCharCode(106,95,54,50,95,100,101,115,99,114,105,112,116,105,111,110,0);
    let playlist8 = String.fromCharCode(115,117,98,112,97,99,107,101,116,95,112,95,57,57,0);
    let videobufferloadings = String.fromCharCode(118,95,56,49,95,116,114,105,101,0);
    let chinasameR = String.fromCharCode(103,95,53,50,95,99,114,101,97,116,105,110,103,0);
   while (weatherF.endsWith(videobufferloadings)) {
      weatherF = `${((lessz ? 2 : 4))}`;
      break;
   }
   let videojs4 = lessz ? !lessz : lessz;
   do {
       let whistleoranged = String.fromCharCode(119,101,114,101,95,52,95,50,48,0);
       let mergerV = 0.0;
       let iconwechatd = String.fromCharCode(122,95,57,50,95,111,108,100,110,101,119,0);
      let reactnativeratingsu = whistleoranged == String.fromCharCode(103,105,98,51,104,100,107,117,0);
      do {
         whistleoranged = `${iconwechatd.length << (Math.min(Math.abs(2), 4))}`;
         if (reactnativeratingsu) {
            break;
         }
      } while (((parseInt(`${mergerV}`) + 2) <= 3 && 4 <= (2 << (Math.min(4, whistleoranged.length)))) && reactnativeratingsu);
         iconwechatd += `${whistleoranged.length}`;
      let iconpipexpandT = 7609444.0 <= mergerV;
      do {
         mergerV /= Math.max(parseFloat(`${1}`), 1);
         if (iconpipexpandT) {
            break;
         }
      } while (iconpipexpandT && ((parseInt(`${mergerV}`) * iconwechatd.length) < 1));
      if (iconwechatd.includes(`${mergerV}`)) {
         mergerV *= parseFloat(`${whistleoranged.length}`);
      }
          let pushX: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,110,95,52,95,53,57,0),520], [String.fromCharCode(108,111,103,105,99,97,108,95,57,95,50,54,0),758]]);
          let scorepopsoundS = String.fromCharCode(116,114,117,115,116,101,100,95,120,95,56,50,0);
          let kinit_l1 = 2.0;
         whistleoranged += `${scorepopsoundS.length}`;
         pushX = new Map([[`${pushX.size}`, 1]]);
         scorepopsoundS += `${3 & parseInt(`${kinit_l1}`)}`;
         kinit_l1 += 1;
         whistleoranged = `${iconwechatd.length * 2}`;
      while ((3 * whistleoranged.length) >= 2) {
         whistleoranged = "3";
         break;
      }
          let styles4: Array<any> = [267, 747];
          let clockv = false;
          let middlebrightnessS: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,115,95,112,95,50,50,0),554], [String.fromCharCode(103,95,54,57,95,115,109,111,111,116,104,101,110,0),471]]);
         iconwechatd += `${((clockv ? 2 : 3) >> (Math.min(styles4.length, 4)))}`;
         styles4.push(middlebrightnessS.size | 3);
         clockv = 66 > middlebrightnessS.size;
      let unread1 = 9582463.0 <= mergerV;
      do {
         mergerV += parseFloat(`${2 % (Math.max(10, parseInt(`${mergerV}`)))}`);
         if (unread1) {
            break;
         }
      } while (((1 * iconwechatd.length) >= 5 && 4.29 >= (mergerV * parseFloat(`${iconwechatd.length}`))) && unread1);
      lessz = !lessz;
      if (videojs4) {
         break;
      }
   } while ((!lessz) && videojs4);
       let trophyL = 1;
       let acceptedE = String.fromCharCode(101,95,55,49,95,101,114,114,109,115,103,0);
      let soundE = 5823952 >= trophyL;
      do {
          let iconsettingX = String.fromCharCode(110,95,56,55,95,98,105,100,105,114,0);
          let statisticsY = 1;
          let libavfilterU = String.fromCharCode(115,95,49,57,95,100,97,116,97,108,0);
          let whatsappk = String.fromCharCode(105,110,116,101,114,110,97,108,95,114,95,50,49,0);
          let iconarrowrightwhiteb = String.fromCharCode(116,95,54,55,95,106,101,114,114,111,114,0);
         trophyL <<= Math.min(Math.abs(3), 3);
         iconsettingX += `${3 << (Math.min(5, Math.abs(statisticsY)))}`;
         statisticsY &= statisticsY;
         libavfilterU += `${whatsappk.length ^ iconarrowrightwhiteb.length}`;
         whatsappk = `${(String.fromCharCode(119,0) == iconsettingX ? iconsettingX.length : statisticsY)}`;
         iconarrowrightwhiteb = `${iconsettingX.length + 2}`;
         if (soundE) {
            break;
         }
      } while (soundE && (acceptedE.endsWith(`${trophyL}`)));
         trophyL %= Math.max(4, trophyL % (Math.max(acceptedE.length, 8)));
      let reducerv = acceptedE == String.fromCharCode(101,116,118,114,53,107,107,122,0);
      do {
          let predictionG: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,97,98,108,101,95,99,95,51,48,0),334], [String.fromCharCode(116,95,54,55,95,101,110,99,111,100,101,114,0),518]]);
          let orangeV = 5.0;
          let actionV = false;
         acceptedE = `${3 << (Math.min(Math.abs(parseInt(`${orangeV}`)), 1))}`;
         predictionG = new Map([[`${predictionG.size}`, ((actionV ? 1 : 4) | predictionG.size)]]);
         orangeV *= (parseFloat(`${(actionV ? 3 : 5) ^ predictionG.size}`));
         if (reducerv) {
            break;
         }
      } while (((trophyL % (Math.max(acceptedE.length, 7))) >= 1 || 5 >= (1 % (Math.max(5, acceptedE.length)))) && reducerv);
      if (trophyL >= 3) {
         trophyL /= Math.max(acceptedE.length & 1, 4);
      }
          let iconqqT: Array<any> = [677, 513];
         acceptedE = `${acceptedE.length}`;
         iconqqT.push(2 + iconqqT.length);
         acceptedE += `${trophyL >> (Math.min(acceptedE.length, 1))}`;
      lessz = 87 <= acceptedE.length;
   for (let x = 0; x < 3; x++) {
      weatherF += `${1 + weatherF.length}`;
   }
   while (libflipperj.length < weatherF.length) {
       let libavcodecz: Array<any> = [281, 710, 822];
       let bannerk = true;
       let stylesz = 0.0;
       let emptyB: Map<any, any> = new Map([[String.fromCharCode(108,101,102,116,109,111,115,116,95,54,95,56,54,0),35], [String.fromCharCode(116,121,111,101,95,116,95,57,51,0),36]]);
         libavcodecz = [1];
      for (let d = 0; d < 1; d++) {
         stylesz *= parseFloat(`${2}`);
      }
         bannerk = libavcodecz.includes(bannerk);
      for (let b = 0; b < 3; b++) {
          let inviteL = true;
         libavcodecz = [emptyB.size];
         inviteL = inviteL && !inviteL;
      }
         libavcodecz = [3];
      let awayteamfieldF = emptyB.size >= 8652186;
      do {
         emptyB = new Map([[`${emptyB.size}`, emptyB.size / (Math.max(2, 10))]]);
         if (awayteamfieldF) {
            break;
         }
      } while (((libavcodecz.length / (Math.max(emptyB.size, 6))) >= 5) && awayteamfieldF);
      for (let e = 0; e < 1; e++) {
         bannerk = (parseFloat(`${emptyB.size}`) + stylesz) > 39.57;
      }
      if (1.79 <= stylesz) {
         stylesz *= parseFloat(`${3 % (Math.max(4, libavcodecz.length))}`);
      }
         stylesz += parseFloat(`${1}`);
          let middleO: Map<any, any> = new Map([[String.fromCharCode(99,95,54,95,119,114,105,116,101,99,104,101,99,107,0),139], [String.fromCharCode(117,97,110,95,115,95,54,55,0),656], [String.fromCharCode(116,95,49,49,95,114,101,110,116,97,108,0),306]]);
         libavcodecz = [middleO.size >> (Math.min(Math.abs(2), 4))];
      if (3.36 <= (parseFloat(`${libavcodecz.length}`) * stylesz)) {
          let loginS = 1.0;
          let club9 = 0.0;
          let incidenta = 1;
          let libreactnativebloby = 2;
          let iconplayH = String.fromCharCode(111,112,116,105,109,105,122,101,114,95,57,95,57,54,0);
         libavcodecz = [parseInt(`${club9}`) | 3];
         loginS *= parseFloat(`${3 - incidenta}`);
         club9 += parseFloat(`${libreactnativebloby}`);
         incidenta %= Math.max((iconplayH == String.fromCharCode(97,0) ? libreactnativebloby : iconplayH.length), 3);
      }
      let carousela = emptyB.size <= 5104433;
      do {
          let danger3 = String.fromCharCode(99,95,52,51,95,112,114,101,97,109,98,108,101,0);
         emptyB = new Map([[`${bannerk}`, (2 * (bannerk ? 2 : 2))]]);
         danger3 += `${danger3.length - 1}`;
         if (carousela) {
            break;
         }
      } while ((libavcodecz.length <= emptyB.size) && carousela);
      libflipperj.push(libflipperj.length * libmapbufferjniJ.length);
      break;
   }
      lessz = (libflipperj.length * libmapbufferjniJ.length) <= 11;
   let backiconz = 9461635.0 <= googlex;
   do {
      googlex -= 3;
      if (backiconz) {
         break;
      }
   } while (backiconz && ((3 - playlist8.length) <= 5 && (playlist8.length + parseInt(`${googlex}`)) <= 3));
   if (!lessz) {
      lessz = !lessz;
   }
      weatherF += `${(1 + (lessz ? 2 : 4))}`;
      playlist8 += `${libmapbufferjniJ.length >> (Math.min(Math.abs(2), 3))}`;
   for (let o = 0; o < 1; o++) {
       let context8: Array<any> = [815, 891];
       let showl = 1.0;
       let inouttargetyellow4 = 0;
       let stepR = true;
       let fcdaebecbcbafcdfceaaeccfeacdbF: Array<any> = [73, 1000, 837];
      let floatingO = context8.length >= 9136922;
      do {
         context8 = [inouttargetyellow4 * 2];
         if (floatingO) {
            break;
         }
      } while (floatingO && (!stepR));
         stepR = fcdaebecbcbafcdfceaaeccfeacdbF.includes(stepR);
       let fills = 1.0;
      if (context8.includes(showl)) {
         showl += parseFloat(`${parseInt(`${showl}`)}`);
      }
       let green1: Array<any> = [465, 695];
       let icontransferclubb: Array<any> = [979, 981, 853];
       let iconshareD: Array<any> = [String.fromCharCode(99,111,100,101,100,95,103,95,55,50,0), String.fromCharCode(100,95,49,51,95,111,114,100,101,114,115,0)];
         stepR = (parseFloat(`${icontransferclubb.length}`) + showl) >= 63.85;
      while (2 <= (inouttargetyellow4 ^ 2) || inouttargetyellow4 <= 2) {
         inouttargetyellow4 /= Math.max(5, parseInt(`${fills}`) ^ 1);
         break;
      }
         showl += parseFloat(`${parseInt(`${showl}`) - 1}`);
         fills -= ((stepR ? 4 : 4) % (Math.max(fcdaebecbcbafcdfceaaeccfeacdbF.length, 10)));
         stepR = context8.includes(fcdaebecbcbafcdfceaaeccfeacdbF[fcdaebecbcbafcdfceaaeccfeacdbF.length - 1]);
         context8.push(inouttargetyellow4);
         fcdaebecbcbafcdfceaaeccfeacdbF.push(3);
      while (2.16 <= (parseFloat(`${inouttargetyellow4}`) * showl) && 5.35 <= (showl * 2.16)) {
          let sharemodal6 = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,49,95,53,0);
          let smallorangemanc = 5.0;
         showl += parseFloat(`${1 - context8.length}`);
         sharemodal6 = `${(String.fromCharCode(114,0) == sharemodal6 ? sharemodal6.length : parseInt(`${smallorangemanc}`))}`;
         smallorangemanc *= parseFloat(`${2}`);
         break;
      }
         stepR = (showl / (Math.max(parseFloat(`${green1.length}`), 8))) > 91.55;
      videobufferloadings += "3";
   }
   for (let q = 0; q < 1; q++) {
       let plays: Array<any> = [801, 840, 45];
      let bangC = plays.length >= 5807627;
      do {
         plays = [plays.length % 3];
         if (bangC) {
            break;
         }
      } while (bangC && ((plays.length - plays.length) < 3 || 3 < (plays.length - plays.length)));
      for (let t = 0; t < 2; t++) {
         plays = [plays.length & 1];
      }
      let orangetickt = 7194191 >= plays.length;
      do {
         plays.push(2 * plays.length);
         if (orangetickt) {
            break;
         }
      } while (orangetickt && (5 > (plays.length * plays.length)));
      playlist8 += `${(videobufferloadings == String.fromCharCode(118,0) ? libflipperj.length : videobufferloadings.length)}`;
   }
      lessz = videobufferloadings.includes(`${lessz}`);
      weatherF = `${3 >> (Math.min(3, weatherF.length))}`;
   while (videobufferloadings.startsWith(`${googlex}`)) {
      videobufferloadings = `${((lessz ? 2 : 1) << (Math.min(Math.abs(2), 4)))}`;
      break;
   }
   while (!weatherF.includes(playlist8)) {
      playlist8 += `${(String.fromCharCode(84,0) == videobufferloadings ? videobufferloadings.length : parseInt(`${googlex}`))}`;
      break;
   }
   let gmail1 = libmapbufferjniJ.length >= 5278140;
   do {
      libmapbufferjniJ = [playlist8.length];
      if (gmail1) {
         break;
      }
   } while (gmail1 && (libmapbufferjniJ.length > 1 && (1 & libmapbufferjniJ.length) > 5));
       let condensed5 = String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,104,95,57,50,0);
       let fastf = String.fromCharCode(98,95,51,50,95,108,105,98,119,101,98,112,0);
       let smallsoundW = true;
      for (let z = 0; z < 3; z++) {
         fastf += `${(String.fromCharCode(88,0) == fastf ? (smallsoundW ? 3 : 1) : fastf.length)}`;
      }
       let codeV = true;
       let connectionC = false;
         smallsoundW = fastf.startsWith(`${smallsoundW}`);
      if (smallsoundW) {
          let libffmpegkitr: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,95,48,95,57,51,0),138], [String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,107,95,57,52,0),955]]);
          let iconmoreI: Map<any, any> = new Map([[String.fromCharCode(109,105,110,102,95,55,95,51,54,0),668], [String.fromCharCode(105,95,53,51,95,112,116,111,110,0),747]]);
          let langs = 5;
         smallsoundW = 31 <= libffmpegkitr.size && iconmoreI.size <= 31;
         libffmpegkitr = new Map([[`${langs}`, 2]]);
         iconmoreI = new Map([[`${langs}`, langs]]);
      }
       let iconclosewhite_ = 5;
      for (let d = 0; d < 1; d++) {
          let smallbrightnessD: Map<any, any> = new Map([[String.fromCharCode(119,120,109,109,116,101,115,116,95,110,95,55,48,0),724], [String.fromCharCode(99,117,114,116,97,105,110,115,95,100,95,53,57,0),496]]);
          let orangeclockC: Array<any> = [931, 788, 422];
         fastf = `${((codeV ? 1 : 1))}`;
         smallbrightnessD = new Map([[`${smallbrightnessD.size}`, 2 << (Math.min(4, Math.abs(smallbrightnessD.size)))]]);
         orangeclockC.push(orangeclockC.length);
      }
      for (let w = 0; w < 1; w++) {
         smallsoundW = !codeV;
      }
      for (let f = 0; f < 1; f++) {
         condensed5 = `${(condensed5.length ^ (smallsoundW ? 5 : 4))}`;
      }
          let questiconL: Array<any> = [861, 269, 24];
          let macau6: Array<any> = [720, 282];
         connectionC = 2 > macau6.length;
         questiconL.push(questiconL.length % (Math.max(1, 4)));
         macau6.push(1 << (Math.min(1, questiconL.length)));
      libmapbufferjniJ.push(((smallsoundW ? 5 : 4) + 1));

        wawaLayout.toName('uploadHistory');
    }

    const onUploadPress = async () => {
       let dicelogoY: Array<any> = [649, 154, 535];
    let taiwanw: Map<any, any> = new Map([[String.fromCharCode(110,95,49,48,95,98,117,102,102,101,114,105,110,103,0),443], [String.fromCharCode(105,109,112,111,114,116,101,114,115,95,97,95,52,51,0),16], [String.fromCharCode(101,95,54,50,95,100,101,97,100,108,105,110,101,0),655]]);
    let orientationh = 4.0;
    let statisticsB: Array<any> = [692, 792];
    let yellowcirclebgk = true;
    let mailB = 2.0;
    let shrinkK = 5.0;
    let matchinactiveS = String.fromCharCode(101,95,51,54,95,110,97,117,116,105,99,97,108,0);
    let overO: Array<any> = [String.fromCharCode(114,101,99,112,95,106,95,56,0), String.fromCharCode(98,97,115,101,112,111,105,110,116,95,122,95,53,51,0), String.fromCharCode(114,95,51,50,95,100,105,99,101,0)];
    let main_rh = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,56,95,53,49,0);
    let screen3: Map<any, any> = new Map([[String.fromCharCode(97,118,105,111,95,111,95,50,48,0),String.fromCharCode(101,95,57,50,95,116,121,112,101,110,97,109,101,0)], [String.fromCharCode(117,108,108,115,99,114,101,101,110,95,119,95,51,56,0),String.fromCharCode(104,95,52,53,95,105,100,108,101,0)]]);
    let graphs = String.fromCharCode(108,105,98,121,117,118,95,106,95,54,55,0);
    let graphicsI: Map<any, any> = new Map([[String.fromCharCode(108,95,54,52,95,98,108,111,99,107,105,101,115,0),String.fromCharCode(110,95,49,53,95,101,110,99,111,100,101,114,0)], [String.fromCharCode(101,95,54,50,95,99,114,108,115,0),String.fromCharCode(100,101,102,105,110,101,115,95,117,95,50,55,0)]]);
       let chart7 = String.fromCharCode(117,112,100,97,116,101,100,95,114,95,48,0);
       let imagewatchlivee = String.fromCharCode(107,95,56,51,95,104,117,100,0);
          let favicon9 = false;
         chart7 += `${3 + chart7.length}`;
      if (1 <= imagewatchlivee.length) {
         chart7 = `${chart7.length | imagewatchlivee.length}`;
      }
         chart7 += "1";
      while (chart7 != String.fromCharCode(105,0) || 3 < imagewatchlivee.length) {
          let backwhiteB: Map<any, any> = new Map([[String.fromCharCode(100,95,53,52,95,100,105,97,103,110,111,115,116,105,99,0),969], [String.fromCharCode(120,95,57,55,95,112,114,111,103,114,101,115,105,118,101,0),309], [String.fromCharCode(116,114,97,110,115,95,105,95,52,56,0),511]]);
          let updates1 = 1.0;
          let unfillV = 0.0;
          let signinupW = String.fromCharCode(110,95,50,54,95,99,104,97,110,103,101,114,0);
          let productp = String.fromCharCode(112,114,117,110,105,110,103,95,110,95,50,57,0);
         chart7 += `${(String.fromCharCode(70,0) == productp ? parseInt(`${updates1}`) : productp.length)}`;
         backwhiteB.set(`${unfillV}`, backwhiteB.size << (Math.min(1, Math.abs(parseInt(`${unfillV}`)))));
         updates1 += signinupW.length;
         signinupW += `${1 >> (Math.min(4, Math.abs(parseInt(`${unfillV}`))))}`;
         break;
      }
      let profileactiveo = imagewatchlivee == String.fromCharCode(103,101,118,118,0);
      do {
          let watchnowbgb: Map<any, any> = new Map([[String.fromCharCode(118,105,98,114,97,110,99,101,95,112,95,53,54,0),381], [String.fromCharCode(115,112,111,116,108,105,103,104,116,95,115,95,57,57,0),280]]);
          let airbnbstarN = String.fromCharCode(119,95,55,55,95,115,117,98,99,111,101,102,115,0);
         imagewatchlivee += "2";
         watchnowbgb.set(airbnbstarN, 2);
         airbnbstarN = `${watchnowbgb.size / (Math.max(airbnbstarN.length, 3))}`;
         if (profileactiveo) {
            break;
         }
      } while (profileactiveo && (!chart7.endsWith(`${imagewatchlivee.length}`)));
         imagewatchlivee += `${chart7.length}`;
      dicelogoY.push(chart7.length / (Math.max(2, taiwanw.size)));
   let xadsdkC = dicelogoY.length <= 4999984;
   do {
      dicelogoY.push(1 * parseInt(`${mailB}`));
      if (xadsdkC) {
         break;
      }
   } while ((1 >= (dicelogoY.length + 3)) && xadsdkC);

        if (wawaLibglog.isGuest(userState.user)) {

   let delegate_v6v = 6930119 <= statisticsB.length;
   do {
      statisticsB = [statisticsB.length * 2];
      if (delegate_v6v) {
         break;
      }
   } while (((statisticsB.length ^ dicelogoY.length) <= 4 && 4 <= (statisticsB.length ^ dicelogoY.length)) && delegate_v6v);
      shrinkK -= 2;
            dispatch(showLoginAction());

       let dangerz = 2.0;
       let backiconp = true;
      if ((2.47 + dangerz) > 2.1 && dangerz > 2.47) {
          let reddownarrowZ = 5.0;
          let analyticsA = String.fromCharCode(101,95,50,52,95,114,101,109,111,118,97,98,108,101,0);
          let greytickc = String.fromCharCode(122,95,56,48,95,115,112,101,97,107,101,114,115,0);
         dangerz -= (greytickc == String.fromCharCode(75,0) ? greytickc.length : parseInt(`${dangerz}`));
         reddownarrowZ -= parseFloat(`${3 << (Math.min(1, analyticsA.length))}`);
         analyticsA += `${analyticsA.length}`;
      }
      while (backiconp) {
         dangerz -= 3 / (Math.max(parseInt(`${dangerz}`), 2));
         break;
      }
       let iconbellactivew = 2;
       let defaultplayerimgN = 1;
      if ((4 + defaultplayerimgN) >= 5) {
         backiconp = 46 > iconbellactivew;
      }
       let greytickJ = String.fromCharCode(111,95,56,53,95,101,120,101,99,117,116,111,114,0);
       let l_hashV = String.fromCharCode(112,102,102,102,116,95,53,95,50,0);
      if (4 <= iconbellactivew) {
         backiconp = l_hashV.length <= greytickJ.length;
      }
      matchinactiveS += "2";
      statisticsB.push(parseInt(`${mailB}`));
            return;
        }

        try {

      mailB *= parseFloat(`${taiwanw.size % (Math.max(3, 6))}`);
   while (shrinkK < 1.91) {
      shrinkK += screen3.size;
      break;
   }
            setVideoSelected(undefined);

       let webviewq = 3;
       let gradlewx = String.fromCharCode(102,119,114,105,116,101,95,56,95,49,0);
       let topon9 = String.fromCharCode(114,111,98,117,115,116,95,102,95,56,51,0);
      let diceb = String.fromCharCode(55,101,122,113,122,0) == topon9;
      do {
         topon9 += `${webviewq}`;
         if (diceb) {
            break;
         }
      } while ((topon9.length >= 3) && diceb);
      let imagenetworkerrp = webviewq >= 9168898;
      do {
         webviewq *= (topon9 == String.fromCharCode(53,0) ? gradlewx.length : topon9.length);
         if (imagenetworkerrp) {
            break;
         }
      } while ((5 >= (webviewq / (Math.max(gradlewx.length, 1))) && (webviewq / 5) >= 1) && imagenetworkerrp);
      let giftbutton6 = 8898160 >= topon9.length;
      do {
         topon9 += `${topon9.length}`;
         if (giftbutton6) {
            break;
         }
      } while ((gradlewx == String.fromCharCode(79,0) || 3 > topon9.length) && giftbutton6);
      let castingY = 6929442 <= gradlewx.length;
      do {
         gradlewx += `${(String.fromCharCode(86,0) == topon9 ? topon9.length : gradlewx.length)}`;
         if (castingY) {
            break;
         }
      } while (castingY && (!gradlewx.endsWith(`${topon9.length}`)));
      if (gradlewx.endsWith(`${webviewq}`)) {
         gradlewx += `${webviewq >> (Math.min(Math.abs(1), 3))}`;
      }
      let shareH = webviewq >= 9898080;
      do {
         webviewq |= 2 - webviewq;
         if (shareH) {
            break;
         }
      } while (((webviewq & gradlewx.length) < 2 && (gradlewx.length & webviewq) < 2) && shareH);
         gradlewx = `${(gradlewx == String.fromCharCode(121,0) ? gradlewx.length : webviewq)}`;
       let shielddonev = 5.0;
       let selectedH = 3.0;
          let defaultpredictionprofile0 = true;
          let langq = 5;
         shielddonev /= Math.max(5, (parseFloat(`${String.fromCharCode(74,0) == gradlewx ? gradlewx.length : langq}`)));
         defaultpredictionprofile0 = !defaultpredictionprofile0;
         langq *= 3;
      mailB -= parseFloat(`${parseInt(`${shrinkK}`)}`);
   for (let m = 0; m < 3; m++) {
       let componentC = 5.0;
       let libswresamplen: Array<any> = [String.fromCharCode(119,95,50,52,95,111,117,116,98,111,120,0), String.fromCharCode(98,95,53,56,95,99,111,110,110,101,99,116,105,111,110,99,98,0)];
       let libruntimeexecutorv = 5.0;
          let imagewatchliveu = String.fromCharCode(102,111,114,95,116,95,56,53,0);
          let iconlogout4 = String.fromCharCode(110,95,51,51,95,102,100,99,116,0);
          let sortd: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,95,52,95,53,56,0),512], [String.fromCharCode(116,95,51,53,95,105,110,118,111,107,101,0),226], [String.fromCharCode(100,95,49,95,100,101,99,111,100,101,114,105,110,105,116,0),465]]);
         libswresamplen.push(parseInt(`${componentC}`) * libswresamplen.length);
         imagewatchliveu += `${iconlogout4.length}`;
         iconlogout4 = "2";
         sortd = new Map([[imagewatchliveu, iconlogout4.length / 1]]);
         componentC -= parseFloat(`${parseInt(`${componentC}`) ^ 3}`);
          let imageactionliveY = 5.0;
          let listE = String.fromCharCode(107,95,52,52,95,105,115,116,111,103,114,97,109,0);
          let iconarrowrightwhitel = String.fromCharCode(115,111,117,114,99,101,105,100,95,49,95,54,51,0);
         libswresamplen.push(1);
         imageactionliveY -= parseFloat(`${2}`);
         listE = `${(String.fromCharCode(111,0) == iconarrowrightwhitel ? iconarrowrightwhitel.length : parseInt(`${imageactionliveY}`))}`;
      while (componentC > parseFloat(`${libswresamplen.length}`)) {
          let iconstar_: Array<any> = [22, 738];
          let crownu = false;
          let nativemodulef: Array<any> = [604, 107, 189];
         componentC += (parseFloat(`${(crownu ? 5 : 1) ^ parseInt(`${componentC}`)}`));
         iconstar_.push(3 & iconstar_.length);
         crownu = nativemodulef.length == iconstar_.length;
         nativemodulef = [iconstar_.length];
         break;
      }
         componentC -= parseFloat(`${1 | parseInt(`${componentC}`)}`);
      let vietnamz = 9453812 <= libswresamplen.length;
      do {
          let acceptedU = 5.0;
          let xvodp = String.fromCharCode(116,97,115,107,115,95,51,95,56,57,0);
          let graphD = String.fromCharCode(112,111,115,116,112,111,110,101,95,112,95,55,51,0);
          let condensedw: Map<any, any> = new Map([[String.fromCharCode(97,95,55,54,95,97,100,100,102,0),908], [String.fromCharCode(99,95,55,54,95,119,114,105,116,101,99,108,101,97,114,0),379]]);
          let materialj = false;
         libswresamplen = [condensedw.size / 3];
         acceptedU += (parseFloat(`${parseInt(`${acceptedU}`) | (materialj ? 4 : 3)}`));
         xvodp = `${((materialj ? 3 : 4) & xvodp.length)}`;
         graphD = "2";
         condensedw = new Map([[`${acceptedU}`, 3]]);
         if (vietnamz) {
            break;
         }
      } while ((2 == (libswresamplen.length * parseInt(`${componentC}`))) && vietnamz);
       let interneth: Array<any> = [633, 660, 895];
       let alertb = 5;
         libruntimeexecutorv *= parseFloat(`${parseInt(`${componentC}`) ^ interneth.length}`);
      dicelogoY = [taiwanw.size * parseInt(`${shrinkK}`)];
   }

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

   let statsP = 6392383.0 >= orientationh;
   do {
      orientationh /= Math.max(matchinactiveS.length % 1, 3);
      if (statsP) {
         break;
      }
   } while (statsP && (overO.length > orientationh));
   let selectedq = yellowcirclebgk ? !yellowcirclebgk : yellowcirclebgk;
   do {
      yellowcirclebgk = taiwanw.size < 97;
      if (selectedq) {
         break;
      }
   } while (selectedq && (!yellowcirclebgk));

            if (result.errorMessage) {

   while (4 >= (statisticsB.length | 1) && 3 >= (1 | statisticsB.length)) {
       let greytickd = false;
          let loadingspinnerb = 4.0;
         greytickd = 12.25 > loadingspinnerb && !greytickd;
      if (greytickd) {
          let descT = String.fromCharCode(112,114,101,100,105,99,97,116,101,95,100,95,56,56,0);
          let footballtrophyw = String.fromCharCode(116,97,112,116,105,99,95,52,95,49,53,0);
          let debugW = 0;
          let baselineO = String.fromCharCode(115,95,49,51,95,114,97,110,100,0);
          let league_ = String.fromCharCode(105,110,100,105,99,116,111,114,95,119,95,52,50,0);
         greytickd = league_.length >= 47 || greytickd;
         descT += `${baselineO.length + footballtrophyw.length}`;
         footballtrophyw += "2";
         debugW += debugW;
         baselineO = `${descT.length / 1}`;
         league_ = "3";
      }
         greytickd = (greytickd ? !greytickd : !greytickd);
      main_rh += "2";
      break;
   }
      statisticsB = [1];
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {

       let predictionbannershareds = 5.0;
       let hoverR = false;
       let speca = true;
          let indicatorr = 3.0;
          let unselectedj = 2;
         speca = !hoverR && unselectedj < 68;
         indicatorr += parseInt(`${indicatorr}`);
         unselectedj &= 2;
      for (let s = 0; s < 2; s++) {
          let sharewhiteo = 5.0;
          let suboutS: Array<any> = [62, 774, 68];
          let moduleV = true;
          let stationsP = String.fromCharCode(102,95,49,48,95,110,97,108,117,0);
          let constantsl: Array<any> = [403, 838];
         hoverR = (63 <= ((hoverR ? suboutS.length : 63) ^ suboutS.length));
         sharewhiteo -= (parseFloat(`${(moduleV ? 1 : 4) << (Math.min(Math.abs(2), 4))}`));
         moduleV = String.fromCharCode(100,0) == stationsP;
         stationsP = `${(String.fromCharCode(97,0) == stationsP ? constantsl.length : stationsP.length)}`;
         constantsl.push(stationsP.length | constantsl.length);
      }
         predictionbannershareds *= 2 | parseInt(`${predictionbannershareds}`);
      let eactK = speca ? !speca : speca;
      do {
         speca = predictionbannershareds < 71.19;
         if (eactK) {
            break;
         }
      } while (eactK && (4.89 < predictionbannershareds));
         predictionbannershareds += ((hoverR ? 4 : 3) & parseInt(`${predictionbannershareds}`));
         hoverR = (hoverR ? !speca : !hoverR);
         predictionbannershareds *= 1 | parseInt(`${predictionbannershareds}`);
         speca = (!speca ? hoverR : speca);
      while ((predictionbannershareds / (Math.max(4.68, 6))) > 2.28) {
          let firebasel = 2.0;
         predictionbannershareds += parseInt(`${firebasel}`) | 1;
         break;
      }
      mailB += parseFloat(`${dicelogoY.length}`);
       let time_tU = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,111,95,53,50,0);
      while (time_tU == String.fromCharCode(109,0) && time_tU == String.fromCharCode(112,0)) {
         time_tU += `${time_tU.length >> (Math.min(4, time_tU.length))}`;
         break;
      }
       let libhermesv = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,107,95,55,56,0);
       let emptyN = String.fromCharCode(100,95,55,54,95,97,108,108,111,119,115,0);
          let single1 = false;
          let profileinactiveW = false;
         time_tU += `${((single1 ? 2 : 3))}`;
         single1 = !profileinactiveW && !profileinactiveW;
      taiwanw.set(`${yellowcirclebgk}`, ((yellowcirclebgk ? 4 : 1) & statisticsB.length));
                setVideoSelected(result.assets[0]);

   if ((mailB * 3.69) > 4.81 && 3.49 > (3.69 * mailB)) {
      statisticsB.push(2 * main_rh.length);
   }
      shrinkK += main_rh.length;
                setUploadProgress(0);

      shrinkK += parseInt(`${shrinkK}`) | screen3.size;
   if (2.6 < (mailB * 2.99)) {
      yellowcirclebgk = main_rh.length >= 56;
   }

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);

      taiwanw = new Map([[`${mailB}`, parseInt(`${mailB}`)]]);
   while ((5 * taiwanw.size) <= 1 && (taiwanw.size * parseInt(`${shrinkK}`)) <= 5) {
       let modelsK = 3.0;
       let expande = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,49,95,54,57,0);
       let logoutV = 4;
       let auto_xhW = String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,121,95,55,48,0);
      if (expande.endsWith(auto_xhW)) {
         auto_xhW += `${expande.length}`;
      }
         expande += `${logoutV}`;
         logoutV <<= Math.min(Math.abs(3), 3);
      while (1 >= expande.length) {
         modelsK /= Math.max(2, parseFloat(`${auto_xhW.length - 1}`));
         break;
      }
      let baiduf = 9150475.0 <= modelsK;
      do {
         modelsK -= parseFloat(`${parseInt(`${modelsK}`) % 2}`);
         if (baiduf) {
            break;
         }
      } while ((modelsK <= 5.63) && baiduf);
         modelsK -= parseFloat(`${parseInt(`${modelsK}`)}`);
       let whitebelle = String.fromCharCode(119,95,54,51,95,104,97,108,116,0);
         expande += `${expande.length}`;
      while (whitebelle.endsWith(`${logoutV}`)) {
         logoutV /= Math.max(expande.length | auto_xhW.length, 1);
         break;
      }
      if (3.98 < (modelsK * parseFloat(`${expande.length}`)) || (modelsK * 3.98) < 5.11) {
         modelsK -= parseFloat(`${3}`);
      }
      for (let z = 0; z < 1; z++) {
         expande += "1";
      }
         expande = `${whitebelle.length | 1}`;
      taiwanw.set(`${dicelogoY.length}`, screen3.size << (Math.min(Math.abs(3), 2)));
      break;
   }


                const uploadTimer = setInterval(() => {

   if (main_rh.length >= 4) {
       let megaphoneh = String.fromCharCode(119,111,114,107,95,104,95,56,51,0);
       let singleL = 0.0;
       let catalogl: Map<any, any> = new Map([[String.fromCharCode(100,101,102,115,95,50,95,56,55,0),String.fromCharCode(120,95,56,48,95,103,97,112,108,101,115,115,0)], [String.fromCharCode(118,112,120,100,101,99,95,121,95,56,52,0),String.fromCharCode(101,95,55,57,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0)], [String.fromCharCode(117,110,109,105,120,95,102,95,52,54,0),String.fromCharCode(121,95,55,52,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0)]]);
       let textx = 1;
       let castingG = 1.0;
          let gradlew1 = String.fromCharCode(111,112,99,111,100,101,115,95,114,95,53,50,0);
          let configureb: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,101,110,117,109,101,114,97,116,101,0),786], [String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,54,95,54,56,0),503], [String.fromCharCode(111,117,116,108,105,110,107,95,57,95,55,56,0),980]]);
         textx -= configureb.size;
         gradlew1 += `${gradlew1.length ^ 1}`;
         configureb.set(gradlew1, (String.fromCharCode(122,0) == gradlew1 ? gradlew1.length : gradlew1.length));
         singleL -= parseFloat(`${catalogl.size / 2}`);
      if (5.94 > (2.90 * singleL) || (megaphoneh.length ^ 3) > 3) {
          let fullm: Map<any, any> = new Map([[String.fromCharCode(97,114,105,98,95,104,95,54,51,0),759], [String.fromCharCode(109,95,51,48,95,108,111,103,103,101,114,115,0),643]]);
         megaphoneh += `${parseInt(`${castingG}`)}`;
         fullm = new Map([[`${fullm.size}`, fullm.size << (Math.min(Math.abs(1), 5))]]);
      }
          let policy4 = String.fromCharCode(97,95,54,56,95,115,109,111,111,116,104,0);
          let panglel = String.fromCharCode(120,95,50,51,95,112,114,111,98,108,101,109,115,0);
          let penaltymatchicony: Array<any> = [942, 546];
         singleL /= Math.max(parseFloat(`${textx << (Math.min(Math.abs(parseInt(`${singleL}`)), 2))}`), 1);
         policy4 += `${policy4.length + 3}`;
         panglel = `${panglel.length}`;
         penaltymatchicony.push(policy4.length * panglel.length);
      for (let a = 0; a < 2; a++) {
         castingG += (parseFloat(`${String.fromCharCode(82,0) == megaphoneh ? megaphoneh.length : parseInt(`${singleL}`)}`));
      }
      while (5.27 > (singleL * 2.21)) {
         singleL *= parseFloat(`${parseInt(`${singleL}`)}`);
         break;
      }
         catalogl.set(`${castingG}`, 3);
       let telegramb = 1;
       let subbasketballplayer4 = 3;
         megaphoneh += `${(String.fromCharCode(106,0) == megaphoneh ? parseInt(`${singleL}`) : megaphoneh.length)}`;
      let yellowscoreballI = 6997263 >= telegramb;
      do {
          let bell1 = 4;
          let bottomr: Array<any> = [147, 376];
         telegramb >>= Math.min(bottomr.length, 5);
         bell1 ^= bell1 % 3;
         bottomr.push(bell1 * 2);
         if (yellowscoreballI) {
            break;
         }
      } while (yellowscoreballI && (1 <= (megaphoneh.length | telegramb) || (telegramb | megaphoneh.length) <= 1));
       let penaltyx = String.fromCharCode(122,95,52,57,0);
      for (let y = 0; y < 2; y++) {
         penaltyx = `${textx * 2}`;
      }
      while (4 <= (2 << (Math.min(4, Math.abs(telegramb)))) && (telegramb << (Math.min(Math.abs(2), 2))) <= 3) {
         telegramb &= textx;
         break;
      }
      let stylesL = 5658697 <= textx;
      do {
         textx <<= Math.min(Math.abs(catalogl.size ^ 3), 4);
         if (stylesL) {
            break;
         }
      } while (((castingG * 5.50) > 1.7 || 5.50 > (parseFloat(`${textx}`) * castingG)) && stylesL);
          let anythinkC = 1.0;
          let graphl = false;
          let trashO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,56,95,54,52,0),71], [String.fromCharCode(111,95,56,48,95,116,101,97,114,100,111,119,110,0),188], [String.fromCharCode(105,95,54,52,95,105,110,116,101,114,105,116,101,109,0),232]]);
         catalogl.set(`${singleL}`, parseInt(`${castingG}`) * parseInt(`${singleL}`));
         anythinkC *= 1 / (Math.max(parseInt(`${anythinkC}`), 3));
         graphl = trashO.size >= 97 && 85.26 >= anythinkC;
         trashO = new Map([[`${anythinkC}`, parseInt(`${anythinkC}`) ^ 1]]);
      main_rh += `${parseInt(`${singleL}`) - parseInt(`${shrinkK}`)}`;
   }
   if (main_rh.includes(`${overO.length}`)) {
       let interstitialw = 3.0;
       let tailW = 4;
       let latnh = 3.0;
      if ((latnh + 3.62) >= 3.77 || (tailW >> (Math.min(Math.abs(4), 4))) >= 1) {
         tailW /= Math.max(1, tailW / 3);
      }
      for (let q = 0; q < 1; q++) {
          let largesoundP = 1.0;
         tailW *= 1;
         largesoundP /= Math.max(3, parseInt(`${largesoundP}`));
      }
      while (4 > (3 % (Math.max(5, tailW))) && (tailW % 3) > 3) {
         tailW ^= tailW + 2;
         break;
      }
         latnh *= 1 & parseInt(`${interstitialw}`);
          let icondownimgj = String.fromCharCode(111,118,101,114,119,114,105,116,101,95,114,95,54,57,0);
         tailW /= Math.max(parseInt(`${interstitialw}`), 2);
         icondownimgj = `${icondownimgj.length}`;
      while (latnh == 5.13) {
         tailW >>= Math.min(3, Math.abs(parseInt(`${interstitialw}`)));
         break;
      }
      let regengG = 6852954.0 >= latnh;
      do {
         latnh += tailW;
         if (regengG) {
            break;
         }
      } while (regengG && ((interstitialw + 2) > 3.43));
         interstitialw -= parseFloat(`${parseInt(`${interstitialw}`)}`);
       let hongkong5 = 1;
      overO.push(1);
   }
                    setUploadProgress(prev => {

   for (let u = 0; u < 2; u++) {
       let leagueQ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,50,95,115,116,97,99,107,101,100,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,110,95,57,0)], [String.fromCharCode(119,95,54,49,95,109,105,114,114,111,114,101,100,0),String.fromCharCode(116,97,112,102,105,108,116,101,114,95,118,95,56,53,0)]]);
       let defaultprofilepick = false;
       let crossm = String.fromCharCode(102,95,54,48,95,111,117,116,0);
         leagueQ = new Map([[`${leagueQ.size}`, 2]]);
      while (5 == crossm.length) {
          let memberP = false;
          let castf = String.fromCharCode(102,95,55,56,95,119,102,100,105,102,0);
          let renderK: Array<any> = [String.fromCharCode(100,95,54,50,95,108,111,99,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(109,112,100,98,95,106,95,57,0)];
         crossm += "2";
         memberP = castf.length >= 95;
         castf += `${renderK.length - 1}`;
         renderK = [1];
         break;
      }
          let sportm: Map<any, any> = new Map([[String.fromCharCode(109,117,120,101,114,115,95,117,95,53,57,0),false ], [String.fromCharCode(99,97,114,101,102,117,108,108,121,95,49,95,57,0),false ]]);
          let containerO: Array<any> = [719, 311, 274];
          let gemfile7 = 5.0;
         crossm = `${((defaultprofilepick ? 2 : 4) + 2)}`;
         sportm.set(`${containerO.length}`, 3 - containerO.length);
         gemfile7 -= parseFloat(`${parseInt(`${gemfile7}`)}`);
         defaultprofilepick = crossm.length < 99 || 99 < leagueQ.size;
          let zoomn: Map<any, any> = new Map([[String.fromCharCode(109,95,50,54,95,102,105,110,103,101,114,112,114,105,110,116,115,0),671], [String.fromCharCode(116,114,117,101,95,122,95,53,53,0),801], [String.fromCharCode(122,95,55,53,0),278]]);
          let mailZ: Array<any> = [517, 65];
         crossm = `${1 % (Math.max(9, zoomn.size))}`;
         zoomn.set(`${mailZ.length}`, 2);
         mailZ.push(mailZ.length + 3);
         defaultprofilepick = !defaultprofilepick;
         crossm += `${(crossm == String.fromCharCode(55,0) ? crossm.length : (defaultprofilepick ? 2 : 2))}`;
         defaultprofilepick = crossm.includes(`${defaultprofilepick}`);
         leagueQ = new Map([[crossm, crossm.length % 1]]);
      overO = [overO.length | 3];
   }
   for (let p = 0; p < 1; p++) {
      overO = [dicelogoY.length];
   }
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

   let nextX = 8008290 <= overO.length;
   do {
      overO = [main_rh.length];
      if (nextX) {
         break;
      }
   } while (nextX && (!Array.from(taiwanw.values()).includes(overO.length)));
   for (let r = 0; r < 1; r++) {
      orientationh += parseInt(`${mailB}`);
   }

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
       let contextW = 4.0;
    let castingk = 0.0;
    let bufferZ = String.fromCharCode(99,95,52,50,95,100,101,98,108,111,99,107,105,110,103,0);
    let dialog_ = 0.0;
    let singaporeJ = String.fromCharCode(101,95,53,48,95,103,114,97,100,105,101,110,116,115,0);
    let suboutN: Map<any, any> = new Map([[String.fromCharCode(118,95,57,50,95,100,97,116,97,99,101,110,116,101,114,0),985], [String.fromCharCode(121,95,53,50,95,115,104,97,114,105,110,103,0),244]]);
    let whitebellu = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,120,95,57,50,0);
    let private_iT = false;
    let teamdetailsbgz: Map<any, any> = new Map([[String.fromCharCode(112,110,103,95,116,95,54,50,0),327], [String.fromCharCode(115,95,51,95,114,101,105,115,115,117,101,0),40], [String.fromCharCode(116,111,117,112,112,101,114,95,103,95,56,55,0),183]]);
    let libpangleflippedE = String.fromCharCode(111,95,52,50,95,117,110,115,101,101,110,0);
      singaporeJ += `${(String.fromCharCode(67,0) == bufferZ ? (private_iT ? 2 : 2) : bufferZ.length)}`;
      private_iT = castingk <= whitebellu.length;

        if (Platform.OS === 'ios') {

   for (let w = 0; w < 1; w++) {
       let currenta: Array<any> = [56, 485, 257];
       let mutedn = String.fromCharCode(111,95,51,57,95,97,117,116,111,109,97,116,105,99,0);
       let smallbrightnessz = String.fromCharCode(117,95,50,51,95,105,110,100,105,99,105,101,115,0);
       let templateprocessori: Map<any, any> = new Map([[String.fromCharCode(98,95,54,54,95,98,105,110,107,97,117,100,105,111,0),110], [String.fromCharCode(99,111,109,109,111,110,95,103,95,54,54,0),510]]);
       let expiredN = 2.0;
      for (let d = 0; d < 3; d++) {
         expiredN += templateprocessori.size | smallbrightnessz.length;
      }
         smallbrightnessz += `${smallbrightnessz.length}`;
          let icondefaultthumbnailL: Array<any> = [710, 925];
          let moret = 3.0;
          let gifgoalbgM = 5.0;
         currenta.push(smallbrightnessz.length >> (Math.min(Math.abs(3), 4)));
         icondefaultthumbnailL.push(parseInt(`${gifgoalbgM}`) + 3);
         moret -= parseFloat(`${2}`);
         gifgoalbgM -= parseInt(`${moret}`) | icondefaultthumbnailL.length;
       let mbjscommonR = 3.0;
      while (mutedn == String.fromCharCode(104,0) || 5 >= smallbrightnessz.length) {
          let selectH = 5;
          let taiwanQ = 0;
          let anytimeP = true;
          let streamingL = String.fromCharCode(120,95,50,49,95,116,101,120,116,102,105,108,101,0);
         mutedn += `${parseInt(`${mbjscommonR}`)}`;
         selectH &= 1 << (Math.min(Math.abs(taiwanQ), 1));
         taiwanQ >>= Math.min(Math.abs(streamingL.length << (Math.min(Math.abs(1), 4))), 3);
         anytimeP = taiwanQ < streamingL.length;
         break;
      }
         mbjscommonR *= parseInt(`${mbjscommonR}`) | 2;
       let shirtv: Map<any, any> = new Map([[String.fromCharCode(116,105,110,105,116,95,110,95,55,49,0),647], [String.fromCharCode(102,116,97,98,95,111,95,57,53,0),174], [String.fromCharCode(107,95,49,48,48,95,100,97,115,104,101,110,99,0),934]]);
      let runtimeschedulerw = 5531331 >= templateprocessori.size;
      do {
          let basketballmatchdetailbgt = String.fromCharCode(100,101,109,111,116,101,95,55,95,51,49,0);
          let elementsx = 4.0;
          let eyeclosep = String.fromCharCode(119,95,50,48,95,117,110,109,105,110,105,109,105,122,101,0);
         templateprocessori.set(`${mbjscommonR}`, currenta.length);
         basketballmatchdetailbgt += `${basketballmatchdetailbgt.length % 1}`;
         elementsx += parseFloat(`${parseInt(`${elementsx}`) + eyeclosep.length}`);
         eyeclosep += `${parseInt(`${elementsx}`)}`;
         if (runtimeschedulerw) {
            break;
         }
      } while (runtimeschedulerw && (!Array.from(templateprocessori.keys()).includes(`${shirtv.size}`)));
      if ((3.8 / (Math.max(5, mbjscommonR))) == 1.84 && 3.8 == (mbjscommonR / (Math.max(shirtv.size, 1)))) {
         shirtv.set(smallbrightnessz, 2 >> (Math.min(1, smallbrightnessz.length)));
      }
      for (let r = 0; r < 2; r++) {
          let libswresamplel = true;
          let ajaxN = String.fromCharCode(107,95,51,95,108,111,99,97,108,101,115,0);
          let renewQ: Map<any, any> = new Map([[String.fromCharCode(98,98,111,120,95,118,95,56,0),String.fromCharCode(104,95,54,52,95,115,117,112,101,114,115,101,116,0)], [String.fromCharCode(121,95,51,56,95,109,97,99,114,111,98,108,111,99,107,0),String.fromCharCode(113,95,57,53,95,115,101,114,118,101,114,115,0)], [String.fromCharCode(113,95,51,48,95,119,101,105,103,104,116,0),String.fromCharCode(98,97,122,101,108,95,101,95,50,57,0)]]);
          let package_ff1 = String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,95,54,95,57,57,0);
         shirtv = new Map([[`${renewQ.size}`, 3]]);
         libswresamplel = ajaxN.length > 55 && libswresamplel;
         ajaxN += "3";
         renewQ = new Map([[package_ff1, (ajaxN == String.fromCharCode(65,0) ? package_ff1.length : ajaxN.length)]]);
      }
         currenta = [1];
         expiredN /= Math.max(shirtv.size ^ parseInt(`${mbjscommonR}`), 5);
       let modulesV = String.fromCharCode(122,95,49,53,95,101,118,105,99,101,0);
          let langkeyW = String.fromCharCode(99,95,54,55,95,118,114,108,101,0);
          let modelZ = 3.0;
         templateprocessori.set(`${langkeyW}`, 1);
         langkeyW = `${parseInt(`${modelZ}`) / 3}`;
         modelZ /= Math.max(parseFloat(`${parseInt(`${modelZ}`)}`), 1);
      for (let g = 0; g < 3; g++) {
         expiredN *= smallbrightnessz.length;
      }
      dialog_ *= 3 * smallbrightnessz.length;
   }
   if (2 == (whitebellu.length * parseInt(`${dialog_}`)) && 1.25 == (5.43 * dialog_)) {
       let text1 = String.fromCharCode(118,99,120,112,114,111,106,95,106,95,52,57,0);
       let circlee = false;
      for (let f = 0; f < 2; f++) {
         text1 += `${((circlee ? 1 : 4))}`;
      }
         text1 += `${((circlee ? 4 : 2))}`;
      dialog_ /= Math.max(1, parseInt(`${dialog_}`));
   }
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {

       let redirectI = 5.0;
         redirectI *= parseFloat(`${parseInt(`${redirectI}`)}`);
       let config5: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0),720], [String.fromCharCode(110,101,116,101,113,95,101,95,54,53,0),820]]);
       let whitesmalltickm: Map<any, any> = new Map([[String.fromCharCode(98,105,103,110,117,109,95,120,95,53,49,0),68], [String.fromCharCode(109,114,122,95,108,95,49,51,0),94], [String.fromCharCode(108,97,117,110,99,104,105,110,103,95,118,95,51,53,0),301]]);
         config5 = new Map([[`${config5.size}`, 1 >> (Math.min(5, Math.abs(config5.size)))]]);
      bufferZ = `${parseInt(`${dialog_}`) * 1}`;
   if (4 >= (suboutN.size ^ 4) && 1 >= (4 ^ whitebellu.length)) {
      suboutN = new Map([[singaporeJ, singaporeJ.length]]);
   }
                if (result == RESULTS.GRANTED) {

       let langkey1: Array<any> = [String.fromCharCode(97,95,50,56,95,115,104,97,108,108,0), String.fromCharCode(122,95,50,56,95,115,99,114,111,108,108,0)];
         langkey1 = [1 >> (Math.min(5, langkey1.length))];
      if ((2 << (Math.min(3, langkey1.length))) <= 1) {
         langkey1 = [langkey1.length];
      }
      for (let u = 0; u < 3; u++) {
         langkey1.push(1);
      }
      castingk *= parseInt(`${dialog_}`) & 2;
   while (singaporeJ.length > parseInt(`${castingk}`)) {
      singaporeJ = `${(whitebellu == String.fromCharCode(78,0) ? bufferZ.length : whitebellu.length)}`;
      break;
   }
                    setGrantPhotePermission(true);
                } else {

      teamdetailsbgz.set(`${private_iT}`, ((private_iT ? 4 : 4) * 1));
   let disconnectedt = 5344185 >= singaporeJ.length;
   do {
      singaporeJ += `${3 & suboutN.size}`;
      if (disconnectedt) {
         break;
      }
   } while ((4 == (3 & singaporeJ.length) && (parseInt(`${contextW}`) - 3) == 5) && disconnectedt);

                    setGrantPhotePermission(false);

   while ((1 - suboutN.size) <= 5 && (1 + suboutN.size) <= 2) {
       let whitevideoliveV = String.fromCharCode(97,112,112,101,110,100,101,100,95,57,95,56,56,0);
       let acceptedb = String.fromCharCode(122,95,52,51,95,109,97,105,110,100,98,0);
         acceptedb = `${acceptedb.length}`;
         acceptedb += `${2 & acceptedb.length}`;
      let libavutilT = whitevideoliveV == String.fromCharCode(102,108,107,50,51,118,103,57,52,0);
      do {
          let inactivem = 2.0;
          let shirtQ: Array<any> = [478, 383, 882];
          let liveB = 2.0;
          let splash1: Map<any, any> = new Map([[String.fromCharCode(122,95,50,50,95,104,97,110,100,101,114,0),String.fromCharCode(122,95,50,51,95,103,101,116,120,118,97,114,0)], [String.fromCharCode(116,95,52,48,95,114,97,116,105,110,103,0),String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,95,50,95,51,57,0)], [String.fromCharCode(118,97,114,116,105,109,101,95,121,95,55,56,0),String.fromCharCode(117,110,97,118,97,105,98,108,101,95,117,95,51,49,0)]]);
         whitevideoliveV += `${shirtQ.length}`;
         inactivem += parseInt(`${liveB}`);
         shirtQ = [1];
         liveB += parseInt(`${liveB}`);
         splash1.set(`${inactivem}`, parseInt(`${inactivem}`));
         if (libavutilT) {
            break;
         }
      } while ((whitevideoliveV.length >= acceptedb.length) && libavutilT);
         whitevideoliveV = `${acceptedb.length}`;
         whitevideoliveV = `${acceptedb.length % (Math.max(9, whitevideoliveV.length))}`;
      for (let w = 0; w < 3; w++) {
         whitevideoliveV += `${(acceptedb == String.fromCharCode(82,0) ? whitevideoliveV.length : acceptedb.length)}`;
      }
      suboutN.set(`${private_iT}`, ((private_iT ? 4 : 3)));
      break;
   }
      bufferZ = `${parseInt(`${dialog_}`)}`;
                    Alert.alert(
                        '需要权限',
                        '要启用此功能，请在设置中授予权限。',
                        [
                            { text: '取消', onPress: () => console.log('取消按下'), style: 'cancel' },
                            { text: '打开设置', onPress: () => Linking.openSettings() }
                        ],
                        { cancelable: false }
                    );

                }
            });
        }
    }

    const GrantedBody = useCallback(() => {
       let modulesM = 1;
    let typingloadingk: Map<any, any> = new Map([[String.fromCharCode(108,95,57,53,95,115,116,101,108,108,97,114,0),419], [String.fromCharCode(112,107,116,99,112,121,95,109,95,49,51,0),43]]);
    let benefit7 = String.fromCharCode(99,108,97,115,115,105,102,115,95,112,95,50,54,0);
    let tailO = true;
    let icono = String.fromCharCode(105,110,115,101,114,116,115,95,110,95,57,49,0);
    let icontransfercluby = String.fromCharCode(104,97,100,97,109,97,114,100,95,57,95,54,57,0);
    let more3 = 3.0;
    let gemfilea = String.fromCharCode(97,95,54,52,95,114,101,97,115,115,101,109,98,108,121,0);
    let libreactnativeblobv: Array<any> = [766, 707, 193];
    let sharewhite9 = true;
    let adultH: Array<any> = [224, 732];
    let episodel = String.fromCharCode(119,95,55,52,95,100,101,116,101,114,109,105,110,101,0);
    let cancelT = 0;
    let servicef: Map<any, any> = new Map([[String.fromCharCode(112,104,114,97,115,101,95,113,95,48,0),String.fromCharCode(120,119,109,97,95,53,95,48,0)], [String.fromCharCode(117,95,56,95,115,105,103,112,97,115,115,0),String.fromCharCode(97,95,51,56,95,100,105,115,99,117,115,115,0)]]);
      icono = "1";
      benefit7 += "2";
   let eyeopenR = modulesM >= 6531880;
   do {
       let bingm = true;
       let description_zF = String.fromCharCode(102,95,55,50,95,110,111,109,105,110,97,116,101,0);
       let apple4 = String.fromCharCode(108,95,52,52,95,115,116,111,114,101,120,0);
       let rulesP = String.fromCharCode(108,111,103,95,111,95,55,52,0);
       let lessG = String.fromCharCode(99,95,57,95,114,101,99,118,102,114,111,109,0);
       let sina1 = 5.0;
         description_zF += `${2 + parseInt(`${sina1}`)}`;
          let stringsh = 5;
          let libcrashsdk0 = String.fromCharCode(102,97,105,108,117,114,101,115,95,99,95,52,56,0);
         description_zF = `${(rulesP == String.fromCharCode(106,0) ? rulesP.length : libcrashsdk0.length)}`;
         stringsh <<= Math.min(Math.abs(2 >> (Math.min(2, Math.abs(stringsh)))), 5);
         libcrashsdk0 += `${stringsh}`;
      if (apple4.includes(`${description_zF.length}`)) {
         apple4 = `${(description_zF == String.fromCharCode(97,0) ? parseInt(`${sina1}`) : description_zF.length)}`;
      }
      modulesM |= 2;
      bingm = !bingm;
      if (eyeopenR) {
         break;
      }
   } while ((typingloadingk.get(`${modulesM}`) != null) && eyeopenR);
   while (gemfilea.length < benefit7.length) {
      benefit7 += `${((tailO ? 3 : 4))}`;
      break;
   }
   if (3 <= icono.length) {
      gemfilea += `${icono.length}`;
   }
   while (!benefit7.includes(`${adultH.length}`)) {
       let iconarrowrightwhitej = 1.0;
       let relatedz = true;
       let gesturesT = 3;
         gesturesT |= ((relatedz ? 3 : 5) ^ parseInt(`${iconarrowrightwhitej}`));
      for (let a = 0; a < 3; a++) {
         gesturesT &= gesturesT + 1;
      }
      for (let r = 0; r < 3; r++) {
         iconarrowrightwhitej -= (parseFloat(`${parseInt(`${iconarrowrightwhitej}`) | (relatedz ? 3 : 5)}`));
      }
      while (!relatedz && (iconarrowrightwhitej / 5.52) < 5.99) {
         relatedz = 56.68 < iconarrowrightwhitej || !relatedz;
         break;
      }
         relatedz = iconarrowrightwhitej >= 71.31;
      let halfY = relatedz ? !relatedz : relatedz;
      do {
         relatedz = relatedz || gesturesT < 1;
         if (halfY) {
            break;
         }
      } while ((relatedz) && halfY);
         relatedz = 45 > gesturesT || relatedz;
          let shirtr = String.fromCharCode(112,95,52,95,98,101,110,101,97,116,104,0);
          let iconarrowrightwhitem = 0;
          let klevinw = true;
         relatedz = klevinw;
         shirtr = `${shirtr.length}`;
         iconarrowrightwhitem /= Math.max(1, shirtr.length | 2);
          let libreanimatedE = true;
          let whitebellb = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,106,95,50,56,0);
          let iconclosewhitebg7 = 1.0;
         iconarrowrightwhitej *= (parseFloat(`${parseInt(`${iconarrowrightwhitej}`) ^ (relatedz ? 3 : 2)}`));
         libreanimatedE = !libreanimatedE;
         whitebellb = `${parseInt(`${iconclosewhitebg7}`)}`;
         iconclosewhitebg7 -= ((libreanimatedE ? 1 : 2));
      adultH = [adultH.length & gemfilea.length];
      break;
   }
      adultH = [((tailO ? 1 : 5))];
   while (1 >= (3 & icono.length)) {
      typingloadingk.set(gemfilea, (gemfilea == String.fromCharCode(113,0) ? benefit7.length : gemfilea.length));
      break;
   }
       let termsJ = String.fromCharCode(111,95,55,57,95,102,111,108,108,111,119,115,0);
       let routerp = String.fromCharCode(102,111,111,95,108,95,54,50,0);
         routerp += `${routerp.length * 3}`;
      while (5 < termsJ.length) {
         termsJ += `${termsJ.length & routerp.length}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         termsJ = `${2 * termsJ.length}`;
      }
          let textlayoutmanager3 = String.fromCharCode(101,120,97,109,112,108,101,95,99,95,52,51,0);
          let data2 = 2.0;
         termsJ += `${routerp.length ^ textlayoutmanager3.length}`;
         textlayoutmanager3 = `${parseInt(`${data2}`)}`;
          let page_ = String.fromCharCode(116,101,115,115,101,108,97,116,101,95,50,95,50,55,0);
         routerp += `${page_.length}`;
      let suggestionU = routerp == String.fromCharCode(103,121,118,49,0);
      do {
          let colorsJ = String.fromCharCode(105,100,108,105,115,116,95,122,95,51,57,0);
          let controlsk = 1.0;
          let codeY = String.fromCharCode(102,95,56,56,95,100,114,97,119,105,110,103,0);
         routerp += "3";
         colorsJ = "1";
         controlsk -= (String.fromCharCode(119,0) == codeY ? parseInt(`${controlsk}`) : codeY.length);
         if (suggestionU) {
            break;
         }
      } while (suggestionU && (routerp.includes(`${termsJ.length}`)));
      icontransfercluby = `${((tailO ? 5 : 2))}`;
      more3 *= libreactnativeblobv.length;
       let chatroombackgroundB = true;
       let basketballiconD = true;
       let flyerl: Array<any> = [811, 479];
      while (basketballiconD) {
          let promotion3 = String.fromCharCode(119,95,53,95,114,101,115,101,97,114,99,104,0);
         basketballiconD = promotion3.length == 88 && basketballiconD;
         break;
      }
       let scorepopsoundi = String.fromCharCode(108,111,103,111,115,95,52,95,55,48,0);
      while (2 >= flyerl.length && (2 & flyerl.length) >= 5) {
         flyerl = [((basketballiconD ? 1 : 1) >> (Math.min(4, Math.abs((chatroombackgroundB ? 3 : 3)))))];
         break;
      }
          let shootnogoalm = 2.0;
         basketballiconD = 47.79 == shootnogoalm;
      for (let b = 0; b < 3; b++) {
          let whitebells = 5.0;
         flyerl = [3];
         whitebells *= parseInt(`${whitebells}`);
      }
      let bellreminderK = scorepopsoundi.length <= 8137075;
      do {
         scorepopsoundi += `${((chatroombackgroundB ? 4 : 2) * 2)}`;
         if (bellreminderK) {
            break;
         }
      } while (((flyerl.length * 2) <= 5 && 4 <= (flyerl.length * 2)) && bellreminderK);
       let nativeex2 = 1.0;
      for (let u = 0; u < 1; u++) {
         chatroombackgroundB = basketballiconD && chatroombackgroundB;
      }
         flyerl = [parseInt(`${nativeex2}`) & 1];
      adultH.push(typingloadingk.size);
   let q_managerm = benefit7.length >= 7422274;
   do {
       let castingq = String.fromCharCode(101,110,117,109,115,95,119,95,52,49,0);
       let backwhite2: Array<any> = [570, 311];
       let directA = 5.0;
      let airbnbstarselectedW = directA >= 6531758.0;
      do {
         directA *= parseFloat(`${castingq.length - parseInt(`${directA}`)}`);
         if (airbnbstarselectedW) {
            break;
         }
      } while (airbnbstarselectedW && (1 > (backwhite2.length << (Math.min(Math.abs(5), 5))) || (5 & backwhite2.length) > 2));
       let teami = String.fromCharCode(110,111,101,120,112,95,52,95,52,48,0);
         teami = "2";
      for (let j = 0; j < 2; j++) {
          let qaagE = 1.0;
          let successu: Array<any> = [500, 917, 641];
          let switch_4t = String.fromCharCode(97,95,54,56,95,100,111,110,101,0);
          let arrowrightwithtaily = String.fromCharCode(121,95,52,55,95,105,110,100,105,110,103,0);
         castingq = "1";
         qaagE += parseFloat(`${2}`);
         successu.push(3);
         switch_4t += `${(String.fromCharCode(104,0) == arrowrightwithtaily ? parseInt(`${qaagE}`) : arrowrightwithtaily.length)}`;
      }
      while (teami.startsWith(`${backwhite2.length}`)) {
         teami = `${backwhite2.length}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         teami = `${backwhite2.length | castingq.length}`;
      }
       let found3: Array<any> = [129, 406];
       let taiwanf: Array<any> = [383, 118];
          let homeiconO = 4;
         backwhite2.push(1);
         homeiconO /= Math.max(homeiconO, 2);
      while ((backwhite2.length * taiwanf.length) < 4) {
         taiwanf.push(backwhite2.length ^ 2);
         break;
      }
      benefit7 += `${adultH.length / (Math.max(1, 3))}`;
      if (q_managerm) {
         break;
      }
   } while (q_managerm && (benefit7.includes(`${adultH.length}`)));
      more3 -= libreactnativeblobv.length;
   let controln = 6833187 >= adultH.length;
   do {
       let pageT = String.fromCharCode(114,102,102,116,105,95,116,95,55,55,0);
       let nbatrophyV = String.fromCharCode(97,95,50,49,95,103,119,103,116,0);
       let abidetectD = 3.0;
       let redcirclebgb: Array<any> = [120, 903];
         redcirclebgb.push(redcirclebgb.length);
      while ((4 << (Math.min(2, pageT.length))) == 3) {
         abidetectD -= parseFloat(`${3}`);
         break;
      }
      for (let r = 0; r < 2; r++) {
         nbatrophyV += `${pageT.length}`;
      }
          let minimize6: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,95,114,101,118,105,101,119,0),String.fromCharCode(108,95,50,50,95,112,111,115,116,105,110,103,0)], [String.fromCharCode(99,95,56,53,95,99,111,108,117,109,115,0),String.fromCharCode(100,113,99,111,101,102,102,95,108,95,49,53,0)], [String.fromCharCode(106,112,101,103,95,106,95,53,49,0),String.fromCharCode(112,97,105,110,116,105,110,103,95,112,95,55,56,0)]]);
          let reminder1 = 4;
         abidetectD -= parseFloat(`${3 - minimize6.size}`);
         minimize6.set(`${reminder1}`, reminder1 ^ 3);
      for (let k = 0; k < 2; k++) {
          let path2 = 3;
          let temperaturev = String.fromCharCode(113,95,57,52,95,112,101,114,99,101,110,116,105,108,101,0);
          let sendn: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,101,120,105,115,116,101,110,99,101,0),678], [String.fromCharCode(110,95,56,54,95,99,115,99,104,101,109,101,0),485]]);
          let i_positionw = 3;
          let signinupb = String.fromCharCode(97,95,51,57,95,116,114,97,112,0);
         abidetectD *= parseFloat(`${i_positionw}`);
         path2 += (String.fromCharCode(102,0) == signinupb ? signinupb.length : sendn.size);
         temperaturev = `${path2}`;
         sendn.set(`${temperaturev}`, temperaturev.length);
         i_positionw %= Math.max(3, temperaturev.length);
      }
      if (parseFloat(`${nbatrophyV.length}`) == abidetectD) {
          let tempnodataP: Array<any> = [String.fromCharCode(121,111,102,102,115,101,116,95,119,95,54,52,0), String.fromCharCode(103,95,51,48,95,103,97,116,104,101,114,0), String.fromCharCode(102,114,101,101,116,121,112,101,95,49,95,50,57,0)];
         abidetectD -= parseFloat(`${1 & parseInt(`${abidetectD}`)}`);
         tempnodataP = [1];
      }
      while (3.45 < (4.86 * abidetectD)) {
          let liveH = String.fromCharCode(115,116,114,108,95,51,95,50,53,0);
          let predictionbannerR = true;
          let halffieldimageV = false;
          let condensedC = true;
          let homeactivez = String.fromCharCode(113,95,53,57,95,115,109,105,108,0);
         redcirclebgb = [liveH.length - 1];
         liveH = `${((condensedC ? 5 : 4) / 2)}`;
         predictionbannerR = !predictionbannerR;
         halffieldimageV = homeactivez.length >= 85;
         condensedC = (halffieldimageV ? !predictionbannerR : halffieldimageV);
         homeactivez = `${((predictionbannerR ? 3 : 5) * (halffieldimageV ? 3 : 1))}`;
         break;
      }
         pageT += `${pageT.length - 1}`;
      if ((abidetectD - 3.56) < 3.83 && (redcirclebgb.length * 1) < 3) {
         redcirclebgb = [parseInt(`${abidetectD}`) / (Math.max(3, redcirclebgb.length))];
      }
         pageT += `${parseInt(`${abidetectD}`) >> (Math.min(Math.abs(3), 5))}`;
       let flipperR = String.fromCharCode(119,95,50,55,95,101,109,117,108,97,116,101,0);
      let other5 = flipperR == String.fromCharCode(51,48,117,0);
      do {
         flipperR += `${flipperR.length + nbatrophyV.length}`;
         if (other5) {
            break;
         }
      } while ((nbatrophyV != flipperR) && other5);
      adultH = [((sharewhite9 ? 4 : 3) + 1)];
      if (controln) {
         break;
      }
   } while (controln && (3 == (adultH.length + icontransfercluby.length) || 3 == (icontransfercluby.length + adultH.length)));
       let final_x0w: Array<any> = [213, 618, 928];
       let container8 = String.fromCharCode(108,111,103,102,117,110,99,95,121,95,57,50,0);
       let umengU = 0;
         final_x0w.push(umengU);
         container8 = `${final_x0w.length}`;
         container8 += `${umengU}`;
         final_x0w.push(1 + container8.length);
          let handlerV = String.fromCharCode(97,116,116,101,109,112,116,101,100,95,97,95,49,55,0);
         final_x0w = [umengU];
         handlerV += `${handlerV.length | handlerV.length}`;
         container8 += `${final_x0w.length}`;
         final_x0w.push(container8.length & umengU);
       let carouselz = String.fromCharCode(112,117,115,104,105,110,103,95,52,95,56,57,0);
       let imageactionliveg = String.fromCharCode(113,95,52,50,0);
       let static_lM = String.fromCharCode(99,95,54,50,95,115,101,116,105,0);
       let attributedstringW = String.fromCharCode(112,108,97,110,97,114,120,95,116,95,50,48,0);
      adultH.push(2 & cancelT);
      cancelT *= (String.fromCharCode(100,0) == benefit7 ? (tailO ? 3 : 2) : benefit7.length);
   if (icono.length < 4) {
      icono += `${benefit7.length & typingloadingk.size}`;
   }
   for (let x = 0; x < 1; x++) {
      icontransfercluby = `${cancelT}`;
   }
   while (!gemfilea.includes(`${libreactnativeblobv.length}`)) {
      libreactnativeblobv = [libreactnativeblobv.length / (Math.max(6, icono.length))];
      break;
   }
   for (let w = 0; w < 2; w++) {
      sharewhite9 = icono.length < 54;
   }
       let analytics0: Array<any> = [String.fromCharCode(113,95,53,54,95,99,108,111,115,105,110,103,0), String.fromCharCode(120,95,52,95,105,110,99,114,101,109,101,110,116,97,108,0)];
          let componentsi: Array<any> = [811, 118, 448];
          let commentl = 2.0;
         analytics0 = [parseInt(`${commentl}`) * componentsi.length];
      if ((analytics0.length ^ analytics0.length) <= 1 || (1 ^ analytics0.length) <= 2) {
         analytics0 = [analytics0.length << (Math.min(Math.abs(2), 5))];
      }
      let iconpointscoreN = analytics0.length <= 5640482;
      do {
          let refreshborderless9 = 5;
          let upload8 = false;
          let sportR = String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,99,95,49,53,0);
         analytics0.push(((upload8 ? 3 : 1)));
         refreshborderless9 &= refreshborderless9 / (Math.max(sportR.length, 2));
         upload8 = String.fromCharCode(51,0) == sportR;
         if (iconpointscoreN) {
            break;
         }
      } while (iconpointscoreN && (2 <= (analytics0.length / (Math.max(3, analytics0.length))) || (2 / (Math.max(5, analytics0.length))) <= 5));
      adultH.push(((sharewhite9 ? 3 : 4) - 3));
   for (let y = 0; y < 3; y++) {
       let anner4 = String.fromCharCode(103,95,53,49,95,108,97,116,0);
         anner4 = "3";
      for (let m = 0; m < 2; m++) {
          let awayteamfieldf = String.fromCharCode(97,116,114,97,99,112,95,106,95,51,53,0);
          let collectionz = false;
          let yellowvideoliveK: Map<any, any> = new Map([[String.fromCharCode(115,95,50,54,95,118,105,100,101,111,104,100,114,0),String.fromCharCode(105,95,50,57,95,110,101,116,101,113,0)], [String.fromCharCode(114,95,52,53,0),String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,56,95,56,57,0)], [String.fromCharCode(99,111,111,108,100,111,119,110,95,113,95,54,57,0),String.fromCharCode(106,95,53,55,95,119,105,116,104,0)]]);
          let private_m4h = false;
          let shareblackV = 1.0;
         anner4 = `${anner4.length}`;
         awayteamfieldf = `${parseInt(`${shareblackV}`)}`;
         collectionz = !collectionz || yellowvideoliveK.size <= 71;
         yellowvideoliveK = new Map([[`${yellowvideoliveK.size}`, 2]]);
         private_m4h = (((collectionz ? 58 : awayteamfieldf.length) / (Math.max(awayteamfieldf.length, 10))) < 58);
         shareblackV *= 2 - yellowvideoliveK.size;
      }
       let overlaya = false;
      typingloadingk = new Map([[`${libreactnativeblobv.length}`, 2 - modulesM]]);
   }
      benefit7 += `${cancelT}`;
   for (let d = 0; d < 1; d++) {
       let showmorea = String.fromCharCode(117,95,51,95,115,118,97,103,0);
       let componentregistryH = 2.0;
       let rewindU = String.fromCharCode(100,101,99,108,97,114,101,100,95,54,95,53,54,0);
      let anytimeM = showmorea == String.fromCharCode(108,121,103,106,50,106,103,0);
      do {
          let loadingk = String.fromCharCode(115,95,56,51,95,99,111,109,112,108,101,109,101,110,116,0);
          let libmapbufferjniV = false;
          let watchnowbg_ = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,119,95,57,53,0);
          let whistlec = String.fromCharCode(115,121,115,116,101,109,95,104,95,57,49,0);
          let package_aH = false;
         showmorea = "3";
         loadingk += `${loadingk.length & 1}`;
         libmapbufferjniV = !watchnowbg_.endsWith(`${libmapbufferjniV}`);
         watchnowbg_ += `${watchnowbg_.length * whistlec.length}`;
         whistlec += `${whistlec.length}`;
         package_aH = (69 >= ((package_aH ? 69 : whistlec.length) | whistlec.length));
         if (anytimeM) {
            break;
         }
      } while (((componentregistryH / (Math.max(10, showmorea.length))) >= 3.38) && anytimeM);
      for (let h = 0; h < 1; h++) {
         componentregistryH -= 2 >> (Math.min(1, Math.abs(parseInt(`${componentregistryH}`))));
      }
      if ((showmorea.length - componentregistryH) >= 1.54) {
         componentregistryH /= Math.max((String.fromCharCode(55,0) == rewindU ? rewindU.length : parseInt(`${componentregistryH}`)), 4);
      }
         componentregistryH += 2 / (Math.max(9, showmorea.length));
       let overlayo = false;
      while (rewindU.includes(`${componentregistryH}`)) {
         componentregistryH -= (3 * (overlayo ? 3 : 3));
         break;
      }
         overlayo = rewindU.length >= 91;
          let libavfilteri: Array<any> = [String.fromCharCode(112,105,110,110,101,114,95,103,95,49,52,0), String.fromCharCode(120,95,56,50,95,103,97,116,101,100,0), String.fromCharCode(110,95,49,53,95,109,117,116,101,0)];
         rewindU = `${showmorea.length}`;
         libavfilteri.push(libavfilteri.length);
      let v_imageb = rewindU == String.fromCharCode(105,99,108,97,122,106,102,95,0);
      do {
          let e_image2: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,105,111,110,95,54,95,50,51,0),970], [String.fromCharCode(113,95,49,49,95,114,97,108,102,100,97,116,97,0),269], [String.fromCharCode(103,95,52,53,95,105,115,111,108,97,116,101,0),917]]);
         rewindU = `${e_image2.size}`;
         if (v_imageb) {
            break;
         }
      } while (v_imageb && (showmorea.length > 4));
      icono = `${parseInt(`${componentregistryH}`) | gemfilea.length}`;
   }
   for (let m = 0; m < 2; m++) {
      libreactnativeblobv.push(cancelT % (Math.max(icontransfercluby.length, 10)));
   }
       let questg = true;
       let gemfileR: Array<any> = [756, 935, 99];
      let ballR = questg ? !questg : questg;
      do {
         questg = gemfileR.length >= 67;
         if (ballR) {
            break;
         }
      } while (ballR && (4 > gemfileR.length));
         questg = gemfileR.includes(questg);
         questg = gemfileR.includes(questg);
         questg = gemfileR.includes(questg);
         gemfileR.push(1 ^ gemfileR.length);
          let teamdetailsbgZ: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,110,100,101,114,95,115,95,50,57,0),587], [String.fromCharCode(105,95,50,49,95,107,105,116,0),95], [String.fromCharCode(105,95,57,48,95,116,101,108,108,0),544]]);
         gemfileR.push(teamdetailsbgZ.size);
      more3 /= Math.max(modulesM, 1);

        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AddIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                点击上传视频
            </Text>
            {/* <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
                width: '70%',
            }}>
                暂无视频，您可以上传本地视频至随心看
            </Text> */}

            <TouchableOpacity onPress={onUploadPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>上传视频</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors, userState]);

    const UngrantedBody = useCallback(() => {
       let hinit_cc = false;
    let closeq = String.fromCharCode(102,105,108,101,116,105,109,101,95,122,95,55,53,0);
    let largeV: Map<any, any> = new Map([[String.fromCharCode(101,95,50,49,95,99,104,97,114,116,0),175], [String.fromCharCode(116,101,115,115,101,108,97,116,101,95,105,95,52,49,0),75], [String.fromCharCode(108,95,52,49,95,97,108,105,118,101,0),183]]);
    let popupO = 0.0;
    let flippery = 2;
    let appsh = String.fromCharCode(105,95,51,52,95,98,97,99,107,103,114,117,110,100,0);
    let champion1: Map<any, any> = new Map([[String.fromCharCode(109,95,57,51,95,97,114,116,105,115,116,0),627], [String.fromCharCode(110,117,108,108,105,102,95,52,95,56,56,0),413], [String.fromCharCode(111,95,49,48,95,99,111,101,102,102,105,99,105,101,110,116,115,0),844]]);
    let iconfeedbackc: Array<any> = [758, 750, 943];
    let storev = 4.0;
    let typingn = String.fromCharCode(100,95,57,50,95,115,104,117,116,100,111,119,110,97,99,107,0);
    let scoreL: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,95,107,95,55,0),584], [String.fromCharCode(112,95,49,50,0),427]]);
    let templateprocessorm = String.fromCharCode(120,95,50,55,95,116,97,114,103,97,0);
    let release_3e4 = 0.0;
    let othermatchdetailbgp = 0.0;
    let halfN = 3;
    let iconmegaphoneD = 5.0;
      largeV.set(`${flippery}`, champion1.size << (Math.min(Math.abs(1), 5)));
      scoreL.set(typingn, largeV.size & typingn.length);
      champion1.set(`${appsh}`, (appsh == String.fromCharCode(55,0) ? appsh.length : largeV.size));
   while ((closeq.length + 2) < 4 && (2 + scoreL.size) < 4) {
      closeq = "3";
      break;
   }
      typingn = "3";
      storev *= (appsh == String.fromCharCode(106,0) ? appsh.length : champion1.size);
   if ((4 % (Math.max(6, largeV.size))) == 1) {
       let mountingY = 5.0;
       let with_oa = String.fromCharCode(108,95,49,50,0);
       let verticalQ = 5.0;
       let downY = String.fromCharCode(115,101,115,115,105,111,110,115,95,101,95,48,0);
       let predictionwinA = 4;
          let component4 = String.fromCharCode(120,95,50,52,95,121,101,97,114,0);
         with_oa = `${with_oa.length ^ parseInt(`${verticalQ}`)}`;
         component4 = `${component4.length & component4.length}`;
         mountingY += 3 - predictionwinA;
       let roomZ = String.fromCharCode(116,95,51,53,95,104,112,101,108,100,115,112,0);
         predictionwinA -= 3;
          let assistG = 0.0;
          let othermatchdetailbgM = 0.0;
          let iconnointernete: Map<any, any> = new Map([[String.fromCharCode(99,95,51,56,95,101,105,103,104,116,0),String.fromCharCode(104,95,57,49,95,100,101,99,111,109,112,97,110,100,0)], [String.fromCharCode(110,111,110,101,95,120,95,57,57,0),String.fromCharCode(107,95,52,57,95,99,111,101,102,102,115,0)]]);
         mountingY -= downY.length & with_oa.length;
         assistG -= parseFloat(`${parseInt(`${assistG}`)}`);
         othermatchdetailbgM -= parseFloat(`${parseInt(`${assistG}`)}`);
         iconnointernete.set(`${othermatchdetailbgM}`, iconnointernete.size);
         with_oa += `${parseInt(`${mountingY}`)}`;
       let shootyesgoalw = String.fromCharCode(115,115,108,114,111,111,116,115,95,110,95,53,53,0);
       let textinputH = 1.0;
       let layoutd = 1.0;
      if (shootyesgoalw.endsWith(`${textinputH}`)) {
         textinputH -= parseFloat(`${parseInt(`${verticalQ}`) >> (Math.min(3, Math.abs(parseInt(`${mountingY}`))))}`);
      }
       let showV = String.fromCharCode(106,95,54,95,101,110,116,105,114,101,108,121,0);
       let predictionlossd = String.fromCharCode(98,95,50,48,95,99,108,101,97,114,101,100,0);
         predictionwinA |= shootyesgoalw.length;
      while (1.74 > (1.65 + layoutd) || 3.5 > (1.65 + mountingY)) {
         layoutd -= parseFloat(`${parseInt(`${mountingY}`)}`);
         break;
      }
         layoutd /= Math.max(4, parseFloat(`${3}`));
      for (let a = 0; a < 1; a++) {
         layoutd += parseFloat(`${parseInt(`${layoutd}`) >> (Math.min(predictionlossd.length, 3))}`);
      }
      if ((verticalQ / 4.18) > 3.56) {
         verticalQ -= parseFloat(`${parseInt(`${layoutd}`)}`);
      }
      champion1 = new Map([[typingn, typingn.length]]);
   }
   for (let o = 0; o < 3; o++) {
      closeq += "3";
   }
      scoreL.set(appsh, (String.fromCharCode(84,0) == appsh ? appsh.length : scoreL.size));
      flippery ^= parseInt(`${popupO}`);
   for (let f = 0; f < 1; f++) {
      champion1 = new Map([[`${iconfeedbackc.length}`, parseInt(`${storev}`)]]);
   }
   for (let t = 0; t < 2; t++) {
       let whiteanimationliveQ = 5.0;
       let penaltymatchicong: Array<any> = [String.fromCharCode(105,95,51,56,95,110,105,100,99,98,98,0), String.fromCharCode(115,97,108,115,97,95,107,95,55,54,0)];
       let homeiconO = String.fromCharCode(116,111,111,108,115,95,111,95,56,57,0);
          let spinnera = true;
          let dataD: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,114,99,118,100,0),482], [String.fromCharCode(122,95,52,56,95,119,101,108,99,104,0),178], [String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,113,95,53,52,0),171]]);
         whiteanimationliveQ -= dataD.size ^ penaltymatchicong.length;
         spinnera = !spinnera && spinnera;
         dataD = new Map([[`${spinnera}`, ((spinnera ? 4 : 2) << (Math.min(Math.abs((spinnera ? 4 : 2)), 2)))]]);
         homeiconO += `${homeiconO.length}`;
      let control0 = whiteanimationliveQ >= 5328624.0;
      do {
         whiteanimationliveQ -= penaltymatchicong.length << (Math.min(Math.abs(3), 1));
         if (control0) {
            break;
         }
      } while (control0 && (whiteanimationliveQ > homeiconO.length));
      for (let l = 0; l < 2; l++) {
          let morea = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,52,95,57,0);
          let darkN = 3.0;
          let termsJ = 5;
          let searchbar0 = String.fromCharCode(120,95,53,51,95,99,111,110,118,101,120,0);
          let rocketU: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,115,116,97,114,114,101,100,0),String.fromCharCode(115,95,50,50,95,101,103,111,108,111,109,98,0)], [String.fromCharCode(110,99,114,121,112,116,105,111,110,95,117,95,52,50,0),String.fromCharCode(110,95,52,50,95,111,114,105,0)], [String.fromCharCode(104,95,49,51,95,116,115,120,0),String.fromCharCode(118,115,101,114,118,105,99,101,95,108,95,50,50,0)]]);
         penaltymatchicong.push(rocketU.size);
         morea += "2";
         darkN += parseFloat(`${parseInt(`${darkN}`) ^ searchbar0.length}`);
         termsJ ^= 3 + morea.length;
         searchbar0 += `${morea.length * parseInt(`${darkN}`)}`;
         rocketU.set(`${termsJ}`, parseInt(`${darkN}`) << (Math.min(2, Math.abs(2))));
      }
      if (homeiconO.startsWith(`${penaltymatchicong.length}`)) {
          let fileH = 3;
          let nterstitiald = String.fromCharCode(114,95,52,48,95,114,101,97,114,114,97,110,103,101,0);
          let score9 = 3.0;
          let anytimeJ = String.fromCharCode(98,95,57,48,95,104,97,110,100,108,101,0);
         homeiconO = `${parseInt(`${whiteanimationliveQ}`) ^ 1}`;
         fileH &= (anytimeJ == String.fromCharCode(79,0) ? parseInt(`${score9}`) : anytimeJ.length);
         nterstitiald = `${nterstitiald.length}`;
         score9 /= Math.max(3, parseFloat(`${parseInt(`${score9}`) << (Math.min(3, Math.abs(3)))}`));
      }
      popupO *= parseInt(`${storev}`) / 2;
   }
      flippery %= Math.max(2, 1);
      typingn = `${iconfeedbackc.length % 3}`;
   let uploadU = hinit_cc ? !hinit_cc : hinit_cc;
   do {
       let footballfiledlayoutm = 1.0;
       let resendK = 4.0;
       let progressa: Array<any> = [144, 512];
       let arrowright4: Array<any> = [String.fromCharCode(112,115,97,95,119,95,54,53,0), String.fromCharCode(97,115,112,101,99,116,95,118,95,53,53,0), String.fromCharCode(99,116,105,109,101,95,119,95,52,49,0)];
       let watchnowbgn = 0.0;
      let albums = arrowright4.length <= 7097502;
      do {
         arrowright4.push(parseInt(`${watchnowbgn}`) % (Math.max(1, parseInt(`${resendK}`))));
         if (albums) {
            break;
         }
      } while ((arrowright4.length >= progressa.length) && albums);
         arrowright4 = [parseInt(`${resendK}`) ^ 2];
      while ((progressa.length << (Math.min(5, arrowright4.length))) == 4) {
          let previewX = 2.0;
          let stringsP = 5;
          let dragcloseX = false;
         arrowright4 = [parseInt(`${footballfiledlayoutm}`)];
         previewX /= Math.max((stringsP & (dragcloseX ? 1 : 4)), 1);
         stringsP |= stringsP;
         dragcloseX = 92 > stringsP;
         break;
      }
       let c_managerv: Map<any, any> = new Map([[String.fromCharCode(101,114,114,109,115,103,95,106,95,51,53,0),true ], [String.fromCharCode(102,95,51,95,112,114,101,118,105,101,119,101,100,0),false ]]);
       let sendZ: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,114,97,100,105,117,115,0),522], [String.fromCharCode(111,114,105,103,105,110,115,95,104,95,56,48,0),307]]);
      for (let y = 0; y < 1; y++) {
          let basketballhometeam6 = String.fromCharCode(98,116,110,99,108,105,99,107,95,120,95,49,55,0);
          let xadsdkU: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,117,116,95,114,95,55,54,0),320], [String.fromCharCode(99,117,101,115,95,110,95,56,55,0),57]]);
         sendZ = new Map([[`${sendZ.size}`, parseInt(`${footballfiledlayoutm}`) % 3]]);
         basketballhometeam6 += "3";
         xadsdkU = new Map([[`${xadsdkU.size}`, 2 << (Math.min(3, Math.abs(xadsdkU.size)))]]);
      }
          let arrowupr = 2.0;
          let homeplayerZ: Map<any, any> = new Map([[String.fromCharCode(108,95,57,49,95,112,117,108,108,100,111,119,110,0),299], [String.fromCharCode(97,95,50,50,95,104,114,101,97,100,0),950]]);
          let owngoal_ = String.fromCharCode(103,95,56,57,95,117,108,97,119,0);
         arrowright4 = [3 - sendZ.size];
         arrowupr += (parseFloat(`${owngoal_ == String.fromCharCode(74,0) ? parseInt(`${arrowupr}`) : owngoal_.length}`));
         homeplayerZ = new Map([[`${homeplayerZ.size}`, parseInt(`${arrowupr}`) | homeplayerZ.size]]);
      if (4.46 < resendK) {
         resendK /= Math.max(parseFloat(`${parseInt(`${footballfiledlayoutm}`)}`), 1);
      }
      if (watchnowbgn <= 5.19) {
          let anytimem = 3;
          let leaguedetailsbg9 = String.fromCharCode(118,95,56,54,95,114,101,99,111,114,100,97,98,108,101,0);
          let iconfeedbackQ = 3;
          let largeE: Map<any, any> = new Map([[String.fromCharCode(115,109,105,120,95,114,95,49,0),314], [String.fromCharCode(105,95,55,51,95,99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0),491]]);
          let libpangleflippedx = 2;
         resendK /= Math.max(parseFloat(`${c_managerv.size}`), 5);
         anytimem *= iconfeedbackQ;
         leaguedetailsbg9 += `${anytimem + 1}`;
         iconfeedbackQ -= (leaguedetailsbg9 == String.fromCharCode(84,0) ? leaguedetailsbg9.length : anytimem);
         largeE = new Map([[leaguedetailsbg9, 3]]);
         libpangleflippedx /= Math.max(3, 3);
      }
      let penaltyshootb = watchnowbgn <= 8702812.0;
      do {
          let referrerm: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,97,116,116,114,95,102,95,57,54,0),String.fromCharCode(115,119,102,104,97,115,104,95,98,95,54,50,0)], [String.fromCharCode(119,114,105,116,97,98,108,101,95,108,95,57,53,0),String.fromCharCode(115,117,98,114,97,110,103,101,115,95,121,95,52,49,0)], [String.fromCharCode(118,95,51,52,95,117,109,111,116,105,111,110,0),String.fromCharCode(117,95,54,48,95,99,104,101,99,107,0)]]);
          let sportM = true;
         watchnowbgn += arrowright4.length;
         referrerm = new Map([[`${referrerm.size}`, ((sportM ? 3 : 2) * 3)]]);
         sportM = (((!sportM ? referrerm.size : 71) & referrerm.size) < 25);
         if (penaltyshootb) {
            break;
         }
      } while (((footballfiledlayoutm / (Math.max(watchnowbgn, 2))) > 2.36 || (footballfiledlayoutm / (Math.max(watchnowbgn, 3))) > 2.36) && penaltyshootb);
      while (watchnowbgn >= resendK) {
         watchnowbgn -= parseInt(`${footballfiledlayoutm}`);
         break;
      }
          let roboto1 = String.fromCharCode(116,95,57,50,95,113,112,101,108,100,115,112,0);
         arrowright4.push(c_managerv.size);
         roboto1 = `${roboto1.length}`;
         watchnowbgn *= 3;
          let suboutm = String.fromCharCode(118,95,51,54,95,103,101,110,115,0);
          let successa = true;
         watchnowbgn *= progressa.length;
         suboutm += `${(1 - (successa ? 1 : 3))}`;
         successa = !successa;
      while (Array.from(c_managerv.keys()).includes(`${sendZ.size}`)) {
          let iconmegaphoneF = String.fromCharCode(99,109,97,115,107,95,53,95,50,55,0);
          let latn7 = 5;
          let configW = String.fromCharCode(108,115,112,112,111,108,121,95,98,95,56,57,0);
          let stationp = 0;
          let sellM: Map<any, any> = new Map([[String.fromCharCode(102,111,114,99,101,100,95,97,95,53,0),761], [String.fromCharCode(106,95,55,57,95,101,110,99,105,114,99,108,101,100,0),399], [String.fromCharCode(121,95,49,54,95,115,117,98,120,0),27]]);
         c_managerv.set(`${footballfiledlayoutm}`, progressa.length);
         iconmegaphoneF += `${iconmegaphoneF.length}`;
         latn7 %= Math.max(1, (configW == String.fromCharCode(74,0) ? stationp : configW.length));
         stationp ^= stationp % (Math.max(sellM.size, 9));
         sellM = new Map([[`${sellM.size}`, sellM.size]]);
         break;
      }
         progressa.push(parseInt(`${watchnowbgn}`) ^ 3);
      hinit_cc = (scoreL.size - watchnowbgn) >= 50.64;
      if (uploadU) {
         break;
      }
   } while ((2 >= (4 / (Math.max(9, champion1.size))) && champion1.size >= 4) && uploadU);
   if (3 <= (iconfeedbackc.length % (Math.max(3, champion1.size)))) {
      iconfeedbackc = [(String.fromCharCode(100,0) == typingn ? typingn.length : largeV.size)];
   }
   if (!hinit_cc) {
      hinit_cc = (parseInt(`${popupO}`) / (Math.max(champion1.size, 7))) <= 48;
   }
   if (templateprocessorm.length >= 1) {
      hinit_cc = scoreL.get(`${storev}`) == null;
   }
      flippery /= Math.max(4, 2);
      templateprocessorm += "2";
      largeV.set(typingn, 1);
      closeq = `${appsh.length}`;
   while ((templateprocessorm.length % 3) <= 4) {
      templateprocessorm = `${closeq.length + 1}`;
      break;
   }
      hinit_cc = (largeV.size * storev) == 55.32;

        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AlbumIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                相册访问权限
            </Text>
            <Text style={{
                ...textVariants.subBody,
                marginBottom: 26,
                textAlign: 'center',
                width: '70%',
            }}>
                您还没有开启相册权限，开启后就能访问相册里的视频或上传视频
            </Text>

            <TouchableOpacity onPress={onRequestPermissiobPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>允许访问相册</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors]);

    useEffect(() => {
        if (uploadProgress !== undefined && uploadProgress >= 100) {
            clearInterval(progressTimer);

            setUploadProgress(undefined);
            setProgressTimer(undefined);

            wawaLayout.toName('uploadVideoPreview', {
                params: {
                    assets: videoSelected,
                },
            });

            

            
            

            
            
            
            
            
            
        }
    }, [uploadProgress]);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader
                title="上传视频"
                right={
                    <TouchableOpacity onPress={onCheckHistoryPress}>
                        <Text style={{ color: colors.text }}>
                            查看记录
                        </Text>
                    </TouchableOpacity>
                }
            />

            {isGrantPhotePermission
                ? <GrantedBody />
                : <UngrantedBody />
            }

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                    backgroundColor={'#ffffffaa'}
                />
            }

            {/* {showSuccess &&
                <UploadResultOverlay

                />
            } */}
        </ScreenContainer>
    );
}

const createStyles = ({ colors }: any) => StyleSheet.create({
    titleTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        paddingRight: 0,
        zIndex: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: colors.text,
        fontSize: 20,
    },
});