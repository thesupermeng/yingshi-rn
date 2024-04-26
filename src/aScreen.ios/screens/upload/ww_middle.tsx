import ScreenContainer from "../../components/container/ww_collection";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/crossCarouselLibpangleflipped.svg';
import AlbumIcon from '@static/images/navigationHashTooltips.svg';
import { useTheme } from "@react-navigation/native";
import { wwInjury } from "../../../routes/ww_with_gray";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/ww_combine_components";
import { UploadProgressOverlay } from "../../components/modal/ww_filter";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/ww_icon";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { showLoginAction } from "@redux/actions/ww_hash";
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import TitleWithBackButtonHeader from "@iosScreen/components/header/ww_react_predictionwin_header";

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
    const userState = useSelector<wwVertical>('userReducer');

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
       let humidityt = String.fromCharCode(100,102,99,116,0);
    let update_eZ: Array<any> = [536, 336];
    let backiconl = 3.0;
    let page_ = 4.0;
    let anytimeC = String.fromCharCode(114,101,118,105,101,119,115,0);
    let right1: Array<any> = [String.fromCharCode(117,118,114,100,0), String.fromCharCode(112,97,99,107,101,116,112,101,101,107,0), String.fromCharCode(108,111,97,100,105,110,103,0)];
    let n_titleH: Array<any> = [365, 945];
    let graphY = String.fromCharCode(102,97,118,101,0);
    let gradlei = false;
    let updatesi: Map<any, any> = new Map([[String.fromCharCode(104,117,100,0),514], [String.fromCharCode(98,97,110,0),967], [String.fromCharCode(115,101,116,105,0),372]]);
    let libreactnativeblobe = String.fromCharCode(109,101,109,122,101,114,111,0);
    let baiduc = false;
    let contextK: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,0),969], [String.fromCharCode(116,97,115,107,115,0),865], [String.fromCharCode(109,111,110,116,0),131]]);
    let predictionwinU: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,108,101,97,114,0),true ], [String.fromCharCode(102,114,101,101,109,0),false ], [String.fromCharCode(101,118,112,111,114,116,0),false ]]);
    let statsE: Map<any, any> = new Map([[String.fromCharCode(108,111,111,115,101,0),458], [String.fromCharCode(116,104,114,101,97,100,0),498]]);
    let collectionA = false;
    let libfabricjniR: Array<any> = [421, 731, 865];
       let eventW: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,101,100,0),926], [String.fromCharCode(112,114,110,103,0),131], [String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,0),410]]);
       let hejiC: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,0),true ], [String.fromCharCode(97,110,105,109,0),true ], [String.fromCharCode(102,111,110,116,0),true ]]);
       let default_ywK: Map<any, any> = new Map([[String.fromCharCode(109,101,103,97,98,121,116,101,0),883], [String.fromCharCode(114,101,108,111,99,107,0),649]]);
       let userX = String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,0);
       let nativemoduled = String.fromCharCode(103,101,110,101,114,97,103,101,0);
       let orientationA: Map<any, any> = new Map([[String.fromCharCode(105,100,105,111,109,0),String.fromCharCode(101,111,99,100,0)], [String.fromCharCode(99,97,118,115,118,105,100,101,111,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,0)]]);
       let renewl: Map<any, any> = new Map([[String.fromCharCode(116,104,97,119,101,100,0),String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,0)], [String.fromCharCode(114,116,102,0),String.fromCharCode(114,101,97,99,104,0)]]);
          let specM = 1.0;
          let whitetick5 = String.fromCharCode(109,97,110,117,97,108,108,121,0);
         userX = `${(whitetick5 == String.fromCharCode(122,0) ? userX.length : whitetick5.length)}`;
         specM -= 3;
      while (default_ywK.size == 1) {
          let volumed = String.fromCharCode(110,119,105,115,101,0);
          let ajaxx = String.fromCharCode(114,100,99,111,115,116,0);
         default_ywK = new Map([[`${default_ywK.size}`, ajaxx.length % 1]]);
         volumed = `${volumed.length & volumed.length}`;
         ajaxx += `${volumed.length / (Math.max(6, volumed.length))}`;
         break;
      }
      if (nativemoduled.includes(`${eventW.size}`)) {
          let backl = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,0);
          let leftQ = 5;
         eventW.set(`${hejiC.size}`, orientationA.size - 1);
         backl = `${backl.length / 2}`;
         leftQ ^= 2 << (Math.min(1, Math.abs(leftQ)));
      }
      for (let o = 0; o < 3; o++) {
          let iconbellactiveP = 5.0;
          let sportsI: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,101,100,0),String.fromCharCode(107,101,121,98,117,102,0)], [String.fromCharCode(115,116,111,114,105,110,103,0),String.fromCharCode(98,105,116,114,118,99,111,110,106,0)]]);
          let untickJ: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,102,121,0),String.fromCharCode(99,97,116,101,103,111,114,105,101,115,0)], [String.fromCharCode(109,97,110,117,97,108,0),String.fromCharCode(116,114,97,118,101,114,115,101,0)], [String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0),String.fromCharCode(102,114,105,101,110,100,108,121,0)]]);
          let full6 = 3;
         nativemoduled += `${untickJ.size + 2}`;
         iconbellactiveP += parseFloat(`${2}`);
         sportsI = new Map([[`${sportsI.size}`, full6 << (Math.min(Math.abs(sportsI.size), 2))]]);
         untickJ = new Map([[`${sportsI.size}`, full6]]);
      }
         nativemoduled += `${renewl.size}`;
       let fastC = String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,0);
       let sportsh = String.fromCharCode(100,101,110,111,105,115,101,114,0);
          let helpero = String.fromCharCode(100,105,109,105,110,115,105,111,110,115,0);
         eventW = new Map([[`${eventW.size}`, eventW.size >> (Math.min(Math.abs(2), 1))]]);
         helpero += `${helpero.length * helpero.length}`;
      anytimeC = `${((gradlei ? 2 : 1) >> (Math.min(1, Math.abs(3))))}`;
   let libfbg = n_titleH.length >= 8332569;
   do {
       let giftbuttonw: Array<any> = [String.fromCharCode(100,114,97,119,108,105,110,101,0), String.fromCharCode(101,114,97,115,101,0), String.fromCharCode(99,111,109,112,111,115,105,116,101,0)];
       let libffmpegkitY = String.fromCharCode(115,99,97,110,116,97,98,108,101,115,0);
          let release_zlq: Map<any, any> = new Map([[String.fromCharCode(117,118,108,99,0),true ], [String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,0),false ], [String.fromCharCode(103,114,97,121,97,0),true ]]);
          let yellowvideoliveF = String.fromCharCode(99,111,110,116,101,120,116,115,0);
          let indicatorq = String.fromCharCode(116,116,116,0);
         giftbuttonw.push(indicatorq.length);
         release_zlq.set(`${yellowvideoliveF}`, 1 ^ release_zlq.size);
         yellowvideoliveF += `${release_zlq.size - 1}`;
         indicatorq += `${yellowvideoliveF.length}`;
         libffmpegkitY += "1";
      for (let k = 0; k < 2; k++) {
         libffmpegkitY += `${3 >> (Math.min(1, giftbuttonw.length))}`;
      }
      while ((3 << (Math.min(2, giftbuttonw.length))) > 3 || 3 > (giftbuttonw.length << (Math.min(libffmpegkitY.length, 2)))) {
          let subbasketballplayers = 3.0;
          let videojs3 = String.fromCharCode(99,97,110,99,101,108,97,98,108,101,0);
          let taiwanO = 2;
          let starn: Array<any> = [615, 544, 330];
         giftbuttonw = [taiwanO / 1];
         subbasketballplayers *= parseFloat(`${starn.length | 1}`);
         videojs3 += `${videojs3.length}`;
         taiwanO /= Math.max(parseInt(`${subbasketballplayers}`), 3);
         starn = [starn.length];
         break;
      }
         giftbuttonw = [libffmpegkitY.length];
       let customQ = 4;
       let sell8 = 2;
      n_titleH = [(1 >> (Math.min(5, Math.abs((gradlei ? 5 : 3)))))];
      if (libfbg) {
         break;
      }
   } while (libfbg && (graphY.length >= n_titleH.length));
      humidityt += `${n_titleH.length}`;
   let albumq = 8589735 <= right1.length;
   do {
       let halffieldimageS = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,0);
      for (let m = 0; m < 1; m++) {
         halffieldimageS = "3";
      }
         halffieldimageS += `${halffieldimageS.length}`;
         halffieldimageS = `${halffieldimageS.length + 2}`;
      right1.push(3 | update_eZ.length);
      if (albumq) {
         break;
      }
   } while (albumq && (5 < (right1.length | 3)));
      backiconl += parseFloat(`${graphY.length / 1}`);
   if (anytimeC.length > 2) {
      right1.push((anytimeC == String.fromCharCode(70,0) ? updatesi.size : anytimeC.length));
   }
   if (1 > (graphY.length | 5) && (page_ + 2.94) > 4.76) {
       let morel = 3;
       let arrowrightV = String.fromCharCode(102,99,110,116,108,0);
       let watchN: Array<any> = [347, 475];
       let winds: Array<any> = [292, 91];
      if ((winds.length << (Math.min(Math.abs(1), 4))) < 3) {
          let libreact9 = String.fromCharCode(115,97,118,101,115,116,97,116,101,0);
          let pageE = false;
          let indexE = String.fromCharCode(101,110,116,101,114,105,110,103,0);
          let borderlessI: Array<any> = [130, 438, 44];
          let iconclosewhitebgL: Array<any> = [273, 534, 11];
         winds = [indexE.length];
         libreact9 = `${(iconclosewhitebgL.length << (Math.min(5, Math.abs((pageE ? 4 : 3)))))}`;
         pageE = borderlessI.length >= 88;
         indexE += `${(2 >> (Math.min(4, Math.abs((pageE ? 2 : 3)))))}`;
         borderlessI.push((libreact9 == String.fromCharCode(109,0) ? (pageE ? 5 : 3) : libreact9.length));
         iconclosewhitebgL.push(libreact9.length);
      }
      while (winds.length == morel) {
          let defaultplayerimgW = 5.0;
          let librrcE = String.fromCharCode(99,104,97,114,97,99,116,101,100,0);
          let malaysiaI = 0.0;
          let headerq = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,0);
          let taill = 4;
         morel %= Math.max(3, 1);
         defaultplayerimgW *= parseFloat(`${1}`);
         librrcE = "2";
         malaysiaI /= Math.max(2, parseInt(`${malaysiaI}`));
         headerq = `${librrcE.length}`;
         taill += taill / (Math.max(parseInt(`${malaysiaI}`), 7));
         break;
      }
          let fillL: Map<any, any> = new Map([[String.fromCharCode(105,111,115,116,114,101,97,109,0),561], [String.fromCharCode(100,101,115,112,105,108,108,0),84], [String.fromCharCode(100,121,110,97,109,105,99,115,0),300]]);
          let mappingU = String.fromCharCode(111,117,116,112,117,116,113,0);
         winds = [watchN.length ^ 1];
         fillL.set(`${mappingU}`, 1 & mappingU.length);
      while ((morel << (Math.min(Math.abs(5), 2))) > 5 || (5 << (Math.min(2, winds.length))) > 2) {
         morel -= 2;
         break;
      }
      let turnL = morel >= 9857567;
      do {
          let telegramJ: Array<any> = [886, 541];
          let libavdevicep = String.fromCharCode(112,117,116,0);
          let penaltygoalC = 2;
          let defaultpredictionprofileJ = String.fromCharCode(109,101,110,116,105,111,110,0);
          let statisticsinactiveC = String.fromCharCode(110,97,118,105,103,97,116,101,100,0);
         morel &= telegramJ.length;
         telegramJ.push(3 + libavdevicep.length);
         libavdevicep += "2";
         penaltygoalC %= Math.max(5, defaultpredictionprofileJ.length);
         defaultpredictionprofileJ = `${statisticsinactiveC.length}`;
         statisticsinactiveC = "2";
         if (turnL) {
            break;
         }
      } while (((4 << (Math.min(5, Math.abs(morel)))) == 2) && turnL);
       let aboutt = 2.0;
       let field6 = 2.0;
      for (let u = 0; u < 2; u++) {
         field6 += parseFloat(`${parseInt(`${field6}`) - winds.length}`);
      }
      while (1 < (parseInt(`${aboutt}`) * arrowrightV.length)) {
         aboutt += parseFloat(`${watchN.length}`);
         break;
      }
         watchN.push(morel % 3);
       let dangerI: Array<any> = [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,0), String.fromCharCode(112,114,101,102,105,120,101,115,0)];
       let switch_pb_: Array<any> = [String.fromCharCode(116,104,97,119,0), String.fromCharCode(112,117,108,108,100,111,119,110,0)];
         morel |= parseInt(`${field6}`) & switch_pb_.length;
       let armvaJ = 1;
       let arrow8 = 4;
      page_ += parseFloat(`${winds.length}`);
   }
      updatesi = new Map([[`${update_eZ.length}`, 2]]);
       let feedbackv: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,0),559], [String.fromCharCode(112,97,112,101,114,115,0),480]]);
       let panglew = 5;
       let tempnodatagifd = 1;
          let philippinesp = 0;
          let thailandR = 5.0;
         feedbackv = new Map([[`${philippinesp}`, 1]]);
         philippinesp ^= 2;
         thailandR += parseFloat(`${parseInt(`${thailandR}`)}`);
      for (let y = 0; y < 1; y++) {
          let weiboE: Array<any> = [505, 928, 545];
          let clubm = String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,0);
          let controlsz = String.fromCharCode(98,97,99,107,101,100,0);
          let auto_qJ = String.fromCharCode(99,111,108,108,101,99,116,101,100,0);
         tempnodatagifd -= 3 * feedbackv.size;
         weiboE = [3];
         clubm = `${weiboE.length}`;
         controlsz += "1";
         auto_qJ += `${clubm.length}`;
      }
       let pressure5 = String.fromCharCode(102,116,121,112,0);
      for (let t = 0; t < 3; t++) {
         panglew &= panglew / (Math.max(2, tempnodatagifd));
      }
      let index7 = pressure5 == String.fromCharCode(118,102,51,57,108,106,53,112,0);
      do {
         pressure5 = `${pressure5.length & panglew}`;
         if (index7) {
            break;
         }
      } while (index7 && ((pressure5.length ^ 3) >= 5));
          let libreactnativejniw = 4.0;
         panglew += parseInt(`${libreactnativejniw}`) ^ pressure5.length;
      if (tempnodatagifd == 4) {
         tempnodatagifd <<= Math.min(Math.abs(panglew + 3), 2);
      }
      for (let z = 0; z < 3; z++) {
         panglew |= 3;
      }
      let k_centerk = String.fromCharCode(115,97,52,100,52,0) == pressure5;
      do {
         pressure5 = `${pressure5.length}`;
         if (k_centerk) {
            break;
         }
      } while (((pressure5.length >> (Math.min(Math.abs(2), 4))) >= 3 && 3 >= (pressure5.length >> (Math.min(Math.abs(2), 1)))) && k_centerk);
      updatesi.set(`${page_}`, 3 ^ predictionwinU.size);
   while (!n_titleH.includes(right1.length)) {
      right1.push(graphY.length << (Math.min(4, Math.abs(parseInt(`${backiconl}`)))));
      break;
   }
   if ((4 + update_eZ.length) < 2 && (4 + graphY.length) < 3) {
       let bing9 = 5;
      let textinputg = 6156883 >= bing9;
      do {
          let unfillJ = 2.0;
          let iconsubssuccess2 = 1;
          let shootyesgoalj = true;
          let iconwechatP: Map<any, any> = new Map([[String.fromCharCode(102,97,118,105,99,111,110,0),293], [String.fromCharCode(119,97,105,116,101,114,0),716]]);
          let minimize1: Map<any, any> = new Map([[String.fromCharCode(114,117,115,115,105,97,110,0),String.fromCharCode(105,100,99,116,120,0)], [String.fromCharCode(97,116,111,102,0),String.fromCharCode(110,111,116,105,99,101,0)], [String.fromCharCode(115,101,116,114,97,110,103,101,0),String.fromCharCode(100,111,116,108,111,99,107,0)]]);
         bing9 -= 3 % (Math.max(iconsubssuccess2, 3));
         unfillJ *= iconwechatP.size % 3;
         iconsubssuccess2 &= (parseInt(`${unfillJ}`) - (shootyesgoalj ? 4 : 3));
         shootyesgoalj = minimize1.size > 60 && shootyesgoalj;
         iconwechatP.set(`${shootyesgoalj}`, 1);
         minimize1 = new Map([[`${shootyesgoalj}`, ((shootyesgoalj ? 1 : 5) << (Math.min(Math.abs(parseInt(`${unfillJ}`)), 2)))]]);
         if (textinputg) {
            break;
         }
      } while (textinputg && (4 == bing9));
          let chartz: Array<any> = [526, 355];
          let shirtc = 2;
         bing9 += chartz.length - 2;
         chartz = [shirtc & 3];
         shirtc *= shirtc;
         bing9 /= Math.max(3, 4);
      graphY += "1";
   }
   if (4 <= (3 * humidityt.length) || 2 <= (3 * humidityt.length)) {
      updatesi = new Map([[`${update_eZ.length}`, parseInt(`${page_}`)]]);
   }
   for (let w = 0; w < 3; w++) {
      predictionwinU = new Map([[`${updatesi.size}`, 3]]);
   }
   while (5 == updatesi.size) {
      baiduc = String.fromCharCode(67,0) == anytimeC;
      break;
   }
   while (!Array.from(predictionwinU.values()).includes(n_titleH.length)) {
      predictionwinU = new Map([[`${updatesi.size}`, updatesi.size]]);
      break;
   }
       let const_cjY = true;
       let unreadB = 4.0;
       let product3 = 0.0;
      for (let v = 0; v < 1; v++) {
         product3 /= Math.max(parseFloat(`${2}`), 5);
      }
         const_cjY = const_cjY && 75.69 > unreadB;
      n_titleH.push(libreactnativeblobe.length % 2);
   if (5 > update_eZ.length) {
      update_eZ = [parseInt(`${page_}`) * 1];
   }
       let pressureW = false;
          let buffera: Array<any> = [114, 503, 616];
         pressureW = buffera.length <= 80;
       let rankL = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,0);
       let fcdaebecbcbafcdfceaaeccfeacdbP = String.fromCharCode(115,104,105,102,116,105,110,103,115,0);
          let loginU = String.fromCharCode(112,97,100,100,105,110,103,0);
          let static_lwF = 4.0;
         fcdaebecbcbafcdfceaaeccfeacdbP = `${loginU.length % (Math.max(8, fcdaebecbcbafcdfceaaeccfeacdbP.length))}`;
         loginU = `${parseInt(`${static_lwF}`) & parseInt(`${static_lwF}`)}`;
      n_titleH.push((2 & (pressureW ? 4 : 3)));
      libreactnativeblobe = `${parseInt(`${page_}`) ^ 2}`;
       let ainit_1h = String.fromCharCode(100,109,97,120,0);
       let field4 = 3.0;
      if (3 >= (2 * parseInt(`${field4}`)) || 5 >= (ainit_1h.length << (Math.min(Math.abs(2), 1)))) {
         ainit_1h += `${3 % (Math.max(4, ainit_1h.length))}`;
      }
         ainit_1h = "3";
       let sportv = true;
      while ((ainit_1h.length / 3) < 3 && (ainit_1h.length + field4) < 5.65) {
         ainit_1h = `${((sportv ? 5 : 1) % (Math.max(8, parseInt(`${field4}`))))}`;
         break;
      }
      let sort0 = field4 <= 8782876.0;
      do {
         field4 -= 2 << (Math.min(Math.abs(parseInt(`${field4}`)), 2));
         if (sort0) {
            break;
         }
      } while (sort0 && (field4 > 2.70));
      let libane2 = field4 <= 9517492.0;
      do {
         field4 /= Math.max(5, parseInt(`${field4}`));
         if (libane2) {
            break;
         }
      } while ((5.21 > (1.70 + field4) || sportv) && libane2);
      updatesi.set(`${baiduc}`, ((baiduc ? 5 : 4) >> (Math.min(Math.abs(contextK.size), 4))));
      page_ /= Math.max(parseFloat(`${3 % (Math.max(9, updatesi.size))}`), 4);
   while (1 < right1.length) {
      backiconl -= parseFloat(`${updatesi.size / (Math.max(right1.length, 6))}`);
      break;
   }

        wwInjury.toName('uploadHistory');
    }

    const onUploadPress = async () => {
       let playercommonl: Map<any, any> = new Map([[String.fromCharCode(98,111,114,100,101,114,115,0),false ], [String.fromCharCode(113,122,98,105,110,0),true ]]);
    let analyticn = String.fromCharCode(115,117,98,106,101,99,116,0);
    let brightnessq = 2.0;
    let humiditye = 1.0;
    let x_positionz: Array<any> = [104, 231, 103];
    let delegate_29: Map<any, any> = new Map([[String.fromCharCode(116,114,105,99,107,108,101,0),283], [String.fromCharCode(114,101,97,100,111,110,108,121,0),495], [String.fromCharCode(120,102,105,120,101,115,0),383]]);
    let progressm = String.fromCharCode(99,104,101,118,114,111,110,0);
    let halffieldimageJ = 4;
    let filledw = String.fromCharCode(99,111,110,118,101,120,0);
       let main_vH = 5.0;
       let macau9: Map<any, any> = new Map([[String.fromCharCode(101,120,108,117,100,101,100,0),704], [String.fromCharCode(119,114,97,112,112,101,100,0),906], [String.fromCharCode(116,109,109,98,114,0),665]]);
      while ((parseFloat(`${macau9.size}`) / (Math.max(6, main_vH))) < 1.23 || (1.23 / (Math.max(9, main_vH))) < 1.6) {
          let telegramt = 3.0;
         macau9.set(`${main_vH}`, macau9.size / (Math.max(3, parseInt(`${main_vH}`))));
         telegramt += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${telegramt}`)), 1))}`);
         break;
      }
         main_vH -= parseFloat(`${2 | macau9.size}`);
      for (let c = 0; c < 2; c++) {
          let plusE: Array<any> = [String.fromCharCode(102,116,118,109,111,0), String.fromCharCode(112,117,108,108,0)];
          let sentryu: Array<any> = [159, 700];
          let comments = 5;
          let heji8: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,116,101,100,0),String.fromCharCode(99,111,110,100,105,116,105,111,110,115,0)], [String.fromCharCode(100,101,113,117,97,110,116,0),String.fromCharCode(114,101,112,115,116,114,0)], [String.fromCharCode(112,117,108,108,113,117,111,116,101,0),String.fromCharCode(113,110,111,115,0)]]);
         macau9 = new Map([[`${macau9.size}`, macau9.size]]);
         plusE = [heji8.size << (Math.min(Math.abs(1), 1))];
         sentryu.push(3);
         comments += comments;
         heji8.set(`${sentryu.length}`, sentryu.length >> (Math.min(Math.abs(3), 4)));
      }
          let uploadu: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0),289], [String.fromCharCode(99,97,112,116,105,111,110,0),397]]);
          let delegate_ea8 = String.fromCharCode(110,95,57,53,0);
         macau9 = new Map([[`${macau9.size}`, macau9.size - 2]]);
         uploadu = new Map([[`${uploadu.size}`, delegate_ea8.length >> (Math.min(4, Math.abs(uploadu.size)))]]);
         delegate_ea8 += "1";
      if (2.55 == (main_vH / 3.3) || (main_vH / (Math.max(parseFloat(`${macau9.size}`), 10))) == 3.3) {
          let miniC: Array<any> = [976, 400];
          let textlayoutmanagerR = String.fromCharCode(99,108,116,111,115,116,114,0);
          let changeM = 1;
         main_vH *= parseFloat(`${miniC.length}`);
         miniC = [2 << (Math.min(2, Math.abs(changeM)))];
         textlayoutmanagerR += `${textlayoutmanagerR.length & 1}`;
         changeM ^= changeM;
      }
      for (let h = 0; h < 3; h++) {
         main_vH += parseFloat(`${2}`);
      }
      brightnessq += parseInt(`${humiditye}`);
   for (let g = 0; g < 3; g++) {
       let launcherE = String.fromCharCode(102,114,97,112,115,0);
       let vietnamt: Array<any> = [744, 308];
       let userL = 0.0;
       let whiteanimationliveb = String.fromCharCode(108,111,103,0);
       let promotion6: Array<any> = [727, 941];
      if (promotion6.length < 2) {
         whiteanimationliveb += `${vietnamt.length}`;
      }
      for (let p = 0; p < 1; p++) {
          let temperature4 = String.fromCharCode(99,108,110,112,97,115,115,0);
         userL /= Math.max(4, parseFloat(`${parseInt(`${userL}`)}`));
         temperature4 = `${1 >> (Math.min(4, temperature4.length))}`;
      }
      while (launcherE.startsWith(`${promotion6.length}`)) {
         promotion6 = [whiteanimationliveb.length | 2];
         break;
      }
      for (let i = 0; i < 1; i++) {
          let lefte = String.fromCharCode(101,118,97,108,117,97,116,101,0);
          let hookq = true;
          let kuaishouL = String.fromCharCode(115,117,98,118,105,100,101,111,0);
          let actived = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,0);
          let gradlewJ: Map<any, any> = new Map([[String.fromCharCode(116,105,103,103,108,101,0),false ], [String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,0),true ], [String.fromCharCode(97,98,103,114,0),false ]]);
         promotion6 = [vietnamt.length + promotion6.length];
         lefte += "2";
         hookq = kuaishouL == lefte;
         kuaishouL += `${(kuaishouL == String.fromCharCode(70,0) ? gradlewJ.size : kuaishouL.length)}`;
         actived += `${((hookq ? 1 : 1) + 3)}`;
         gradlewJ = new Map([[`${gradlewJ.size}`, (kuaishouL == String.fromCharCode(119,0) ? kuaishouL.length : gradlewJ.size)]]);
      }
         promotion6 = [vietnamt.length & 1];
         userL *= parseFloat(`${2}`);
      let shirti = userL >= 9266594.0;
      do {
         userL -= parseFloat(`${promotion6.length + launcherE.length}`);
         if (shirti) {
            break;
         }
      } while (shirti && (2 <= (parseInt(`${userL}`) - vietnamt.length) && 5.35 <= (userL - 2.15)));
          let unimplementedview2: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,0),630], [String.fromCharCode(112,101,101,114,105,100,0),482], [String.fromCharCode(115,101,113,117,101,110,99,101,115,0),208]]);
         promotion6.push(whiteanimationliveb.length >> (Math.min(Math.abs(2), 4)));
         unimplementedview2.set(`${unimplementedview2.size}`, 2);
      while (!launcherE.endsWith(`${userL}`)) {
          let castingp: Array<any> = [145, 988, 449];
          let commony: Array<any> = [110, 977, 655];
          let yellowredcardM = String.fromCharCode(115,112,101,101,100,0);
          let libcxxcomponentsT = String.fromCharCode(109,117,108,116,120,0);
          let plashv = true;
         launcherE += `${whiteanimationliveb.length}`;
         castingp.push(castingp.length >> (Math.min(commony.length, 5)));
         commony.push(libcxxcomponentsT.length - 1);
         yellowredcardM = `${castingp.length}`;
         libcxxcomponentsT += `${castingp.length}`;
         plashv = yellowredcardM.length > 39 && 39 > castingp.length;
         break;
      }
      if (2 > (2 * parseInt(`${userL}`)) && (5.58 * userL) > 3.31) {
          let dialogS = 5.0;
          let friendsk = 3.0;
         userL *= parseFloat(`${parseInt(`${userL}`) & 3}`);
         dialogS *= parseFloat(`${parseInt(`${dialogS}`) << (Math.min(2, Math.abs(1)))}`);
         friendsk /= Math.max(1, parseFloat(`${parseInt(`${dialogS}`) + 3}`));
      }
       let champions = 4.0;
         userL += parseFloat(`${2 << (Math.min(1, promotion6.length))}`);
          let membership9 = false;
          let shielddone5 = String.fromCharCode(102,105,108,108,101,100,0);
          let iconstare: Array<any> = [String.fromCharCode(114,97,108,102,100,97,116,97,0), String.fromCharCode(105,102,105,108,116,101,114,0)];
         userL -= parseFloat(`${promotion6.length % (Math.max(whiteanimationliveb.length, 5))}`);
         membership9 = (41 <= (shielddone5.length >> (Math.min(1, Math.abs((membership9 ? 41 : shielddone5.length))))));
         iconstare = [((membership9 ? 5 : 2) + 1)];
      for (let d = 0; d < 3; d++) {
         whiteanimationliveb = "2";
      }
         promotion6 = [vietnamt.length & promotion6.length];
      progressm += `${playercommonl.size}`;
   }

        if (wwBodan.isGuest(userState.user)) {

   let statsy = 7472726 >= halffieldimageJ;
   do {
      halffieldimageJ -= 3;
      if (statsy) {
         break;
      }
   } while ((halffieldimageJ == 2) && statsy);
      analyticn = `${1 & halffieldimageJ}`;
            dispatch(showLoginAction());

   for (let c = 0; c < 3; c++) {
       let settingsT = 5;
       let navigation2 = String.fromCharCode(112,114,101,100,105,99,116,120,0);
       let progressC = String.fromCharCode(112,114,111,112,101,114,121,0);
       let flyer_ = 4;
      let albumL = String.fromCharCode(118,122,95,114,110,49,54,49,0) == navigation2;
      do {
          let executorz: Map<any, any> = new Map([[String.fromCharCode(98,105,116,100,101,112,116,104,0),String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,0)], [String.fromCharCode(101,120,97,109,112,108,101,0),String.fromCharCode(100,101,102,108,105,99,107,101,114,0)]]);
         navigation2 += `${flyer_ << (Math.min(Math.abs(settingsT), 1))}`;
         executorz.set(`${executorz.size}`, executorz.size);
         if (albumL) {
            break;
         }
      } while ((progressC != String.fromCharCode(120,0)) && albumL);
      for (let d = 0; d < 1; d++) {
         progressC = `${progressC.length / 2}`;
      }
      while (4 == progressC.length) {
         flyer_ -= (String.fromCharCode(101,0) == progressC ? settingsT : progressC.length);
         break;
      }
         flyer_ -= settingsT;
      let field9 = 7979088 <= settingsT;
      do {
         settingsT += progressC.length;
         if (field9) {
            break;
         }
      } while (field9 && (progressC.length == settingsT));
      let plashY = 5696819 >= flyer_;
      do {
         flyer_ >>= Math.min(Math.abs(2), 4);
         if (plashY) {
            break;
         }
      } while ((2 <= settingsT) && plashY);
          let yellowanimationlivev: Array<any> = [43, 789];
         navigation2 += `${settingsT}`;
         yellowanimationlivev.push(yellowanimationlivev.length ^ 2);
         flyer_ >>= Math.min(5, Math.abs(flyer_ * settingsT));
         progressC = `${progressC.length}`;
          let libsentryl = 5.0;
         flyer_ >>= Math.min(1, Math.abs((navigation2 == String.fromCharCode(115,0) ? navigation2.length : settingsT)));
         libsentryl *= 2 + parseInt(`${libsentryl}`);
         flyer_ /= Math.max(1, progressC.length + settingsT);
      let tooltipsT = 9305525 >= settingsT;
      do {
          let nativeexw: Map<any, any> = new Map([[String.fromCharCode(114,116,99,119,101,98,0),203], [String.fromCharCode(100,105,115,112,115,97,98,108,101,0),643], [String.fromCharCode(100,101,116,101,114,109,105,110,101,100,0),434]]);
          let whiteF = String.fromCharCode(116,119,101,97,107,0);
          let updatesp = String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,0);
         settingsT /= Math.max((whiteF == String.fromCharCode(90,0) ? settingsT : whiteF.length), 2);
         nativeexw = new Map([[`${nativeexw.size}`, nativeexw.size + 1]]);
         updatesp += `${(String.fromCharCode(69,0) == updatesp ? nativeexw.size : updatesp.length)}`;
         if (tooltipsT) {
            break;
         }
      } while (tooltipsT && ((settingsT + flyer_) > 1));
      delegate_29 = new Map([[`${x_positionz.length}`, 2 * x_positionz.length]]);
   }
   let commonv = brightnessq >= 6310274.0;
   do {
       let hook7 = String.fromCharCode(110,105,100,110,105,115,116,0);
       let temperaturep = true;
      while (!temperaturep) {
         hook7 = `${((temperaturep ? 1 : 2) << (Math.min(hook7.length, 5)))}`;
         break;
      }
          let footballd = String.fromCharCode(101,120,116,101,114,110,0);
          let iconshareL = false;
          let templateprocessork = String.fromCharCode(105,122,101,114,111,0);
         hook7 += `${templateprocessork.length}`;
         footballd += `${footballd.length}`;
         iconshareL = footballd.endsWith(`${iconshareL}`);
         templateprocessork = "2";
       let assisti = String.fromCharCode(102,114,97,109,101,99,114,99,0);
       let q_manager3 = String.fromCharCode(114,101,97,100,102,114,97,109,101,0);
         assisti = `${assisti.length}`;
      let handler6 = temperaturep ? !temperaturep : temperaturep;
      do {
         temperaturep = String.fromCharCode(112,0) == hook7 || 11 < assisti.length;
         if (handler6) {
            break;
         }
      } while ((hook7.length <= 1 || temperaturep) && handler6);
      if (q_manager3 != String.fromCharCode(99,0) && 1 <= assisti.length) {
          let mapbufferW: Array<any> = [808, 525];
          let const_f0: Array<any> = [531, 107];
          let iinit_48c = true;
         q_manager3 += `${const_f0.length | 3}`;
         mapbufferW = [mapbufferW.length >> (Math.min(Math.abs(2), 3))];
         const_f0 = [((iinit_48c ? 5 : 2) / 2)];
      }
      brightnessq += parseInt(`${humiditye}`);
      if (commonv) {
         break;
      }
   } while (((brightnessq + 1.28) >= 5.15) && commonv);
            return;
        }

        try {

      brightnessq += (progressm == String.fromCharCode(56,0) ? parseInt(`${brightnessq}`) : progressm.length);
       let selectiond: Array<any> = [139, 324, 948];
       let classesO = 3;
      for (let y = 0; y < 2; y++) {
         selectiond.push(1);
      }
         classesO *= selectiond.length;
         selectiond = [selectiond.length | 2];
      if (1 > classesO) {
          let containerR = 3.0;
         selectiond = [3];
         containerR += parseInt(`${containerR}`) + parseInt(`${containerR}`);
      }
         classesO >>= Math.min(1, Math.abs(classesO ^ 1));
      if (classesO == 4) {
          let submita = String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,0);
          let coreG: Array<any> = [535, 48, 979];
          let privatechatbgK: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,0),241], [String.fromCharCode(115,112,111,105,108,101,114,0),522], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,0),688]]);
          let libffmpegkitL = 5.0;
         classesO *= classesO * selectiond.length;
         submita = `${submita.length}`;
         coreG.push(submita.length);
         privatechatbgK = new Map([[submita, submita.length]]);
         libffmpegkitL += parseFloat(`${1 | coreG.length}`);
      }
      halffieldimageJ &= selectiond.length ^ parseInt(`${humiditye}`);
            setVideoSelected(undefined);

   while (progressm.endsWith(`${x_positionz.length}`)) {
       let profileframe7 = String.fromCharCode(100,111,116,0);
       let helpero = 0.0;
       let anythinkC = true;
       let helpera = 3.0;
      while (helpera >= 3.42 || (helpera / 3.42) >= 5.28) {
         helpera /= Math.max((String.fromCharCode(120,0) == profileframe7 ? profileframe7.length : parseInt(`${helpero}`)), 3);
         break;
      }
      if (1 > (profileframe7.length ^ 2) || (1.92 * helpero) > 1.58) {
         helpero /= Math.max(parseFloat(`${parseInt(`${helpera}`)}`), 4);
      }
      for (let b = 0; b < 1; b++) {
          let playercommonlS: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,102,101,0),505], [String.fromCharCode(115,104,97,114,97,98,108,101,0),941]]);
         helpero /= Math.max((parseFloat(`${profileframe7 == String.fromCharCode(111,0) ? profileframe7.length : (anythinkC ? 4 : 3)}`)), 3);
         playercommonlS.set(`${playercommonlS.size}`, playercommonlS.size | 2);
      }
      if (helpera >= 3.6) {
         helpera *= 1 ^ parseInt(`${helpera}`);
      }
          let unreadB = 2;
          let gdtadvg: Map<any, any> = new Map([[String.fromCharCode(112,114,111,106,101,99,116,105,111,110,0),679], [String.fromCharCode(100,117,112,115,111,114,116,0),116], [String.fromCharCode(102,97,105,108,115,0),841]]);
          let expandG = true;
         helpera += 1 | parseInt(`${helpero}`);
         unreadB <<= Math.min(Math.abs(gdtadvg.size), 1);
         gdtadvg.set(`${expandG}`, (gdtadvg.size - (expandG ? 2 : 1)));
         helpera += parseInt(`${helpera}`) | parseInt(`${helpero}`);
         helpero /= Math.max(4, parseFloat(`${1 << (Math.min(4, profileframe7.length))}`));
         anythinkC = profileframe7.endsWith(`${helpero}`);
      let tempD = 8182701.0 <= helpero;
      do {
          let templateprocessorR = String.fromCharCode(115,105,109,112,108,101,116,97,103,0);
          let streaminga = 4.0;
         helpero /= Math.max(4, (parseFloat(`${profileframe7 == String.fromCharCode(113,0) ? (anythinkC ? 4 : 4) : profileframe7.length}`)));
         templateprocessorR += `${3 * parseInt(`${streaminga}`)}`;
         streaminga *= parseFloat(`${2 | templateprocessorR.length}`);
         if (tempD) {
            break;
         }
      } while ((profileframe7.length < 2) && tempD);
         anythinkC = parseInt(`${helpera}`) <= profileframe7.length;
      let streamingA = 6834378.0 <= helpero;
      do {
         helpero *= parseFloat(`${3 % (Math.max(parseInt(`${helpera}`), 8))}`);
         if (streamingA) {
            break;
         }
      } while ((1.69 >= (5.57 - helpero)) && streamingA);
       let mintegrala = true;
      progressm = `${x_positionz.length}`;
      break;
   }
   for (let r = 0; r < 3; r++) {
       let xvodT = 0.0;
       let bggradientf = 3.0;
       let libmapbufferjnie = false;
       let gdtadvn = 4.0;
       let whistleoranger = String.fromCharCode(109,98,102,105,108,116,101,114,0);
         xvodT -= parseFloat(`${parseInt(`${gdtadvn}`) - 2}`);
      while (!libmapbufferjnie) {
         bggradientf += parseFloat(`${1}`);
         break;
      }
      if (2.48 == bggradientf) {
          let bggradientp = true;
          let indicatorG = String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,0);
          let dplusH = 4.0;
          let downloaderm: Array<any> = [String.fromCharCode(112,114,105,111,114,105,116,105,101,115,0), String.fromCharCode(117,108,116,114,97,0)];
          let logouserH = String.fromCharCode(101,110,103,105,110,101,115,0);
         bggradientf += (parseFloat(`${(bggradientp ? 1 : 5) * 2}`));
         bggradientp = 10 == downloaderm.length;
         indicatorG += `${parseInt(`${dplusH}`) << (Math.min(logouserH.length, 4))}`;
         dplusH *= parseFloat(`${3}`);
         downloaderm = [downloaderm.length - 2];
         logouserH = "3";
      }
      while (whistleoranger.length <= parseInt(`${gdtadvn}`)) {
         gdtadvn -= (parseFloat(`${whistleoranger.length + (libmapbufferjnie ? 5 : 3)}`));
         break;
      }
         libmapbufferjnie = whistleoranger == String.fromCharCode(99,0);
      for (let u = 0; u < 2; u++) {
          let macaup = true;
          let acceptedO = 3.0;
          let episodes3 = String.fromCharCode(100,105,116,104,101,114,105,110,103,0);
          let langkey2 = 2.0;
          let networky = false;
         libmapbufferjnie = libmapbufferjnie && 64.34 > langkey2;
         macaup = acceptedO < 47.24;
         acceptedO -= (parseFloat(`${String.fromCharCode(117,0) == episodes3 ? parseInt(`${acceptedO}`) : episodes3.length}`));
         langkey2 *= parseFloat(`${3}`);
         networky = networky || episodes3.length == 34;
      }
         libmapbufferjnie = whistleoranger.endsWith(`${xvodT}`);
         bggradientf -= parseFloat(`${parseInt(`${xvodT}`) << (Math.min(5, Math.abs(parseInt(`${bggradientf}`))))}`);
          let statistics_ = 2;
          let dependenciesS = true;
          let activityC = String.fromCharCode(105,110,116,114,97,120,109,98,121,0);
         xvodT += (parseFloat(`${parseInt(`${gdtadvn}`) << (Math.min(5, Math.abs((libmapbufferjnie ? 4 : 2))))}`));
         statistics_ -= statistics_;
         dependenciesS = !dependenciesS;
         activityC = "1";
      if (4.34 == xvodT) {
          let download0 = 2.0;
          let regengX = String.fromCharCode(109,97,112,102,105,108,101,0);
         libmapbufferjnie = (parseInt(`${download0}`) - whistleoranger.length) == 55;
         download0 -= parseFloat(`${2}`);
         regengX = `${3 & regengX.length}`;
      }
         gdtadvn *= parseFloat(`${parseInt(`${bggradientf}`)}`);
          let imagemanagerO = true;
          let k_countX = 5;
         xvodT += (parseFloat(`${whistleoranger == String.fromCharCode(85,0) ? whistleoranger.length : parseInt(`${gdtadvn}`)}`));
         imagemanagerO = 94 <= k_countX && imagemanagerO;
         k_countX |= k_countX << (Math.min(3, Math.abs(3)));
      for (let s = 0; s < 1; s++) {
          let userr: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,105,116,105,118,101,0),649], [String.fromCharCode(98,117,109,112,0),199], [String.fromCharCode(116,117,110,101,0),253]]);
          let trash4 = 0.0;
          let chinasame2 = 2;
          let club5: Array<any> = [570, 309, 444];
          let assistm = true;
         whistleoranger = "2";
         userr = new Map([[`${userr.size}`, userr.size % 3]]);
         trash4 *= (club5.length | (assistm ? 3 : 5));
         chinasame2 *= club5.length % 2;
         assistm = trash4 < 69.35;
      }
       let v_lock2 = String.fromCharCode(119,97,116,101,114,0);
         gdtadvn += parseFloat(`${2}`);
      playercommonl = new Map([[`${x_positionz.length}`, 2 ^ parseInt(`${xvodT}`)]]);
   }

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

   for (let f = 0; f < 1; f++) {
      brightnessq -= analyticn.length - 2;
   }
      playercommonl = new Map([[`${delegate_29.size}`, 2 + delegate_29.size]]);

            if (result.errorMessage) {

   while (3.14 >= (humiditye + 2.45) || 2.77 >= (humiditye + 2.45)) {
      playercommonl.set(`${progressm}`, playercommonl.size - 2);
      break;
   }
   while ((halffieldimageJ >> (Math.min(analyticn.length, 4))) <= 1 && (halffieldimageJ >> (Math.min(Math.abs(1), 1))) <= 3) {
      analyticn = `${1 << (Math.min(5, analyticn.length))}`;
      break;
   }
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {

      delegate_29.set(`${halffieldimageJ}`, analyticn.length);
   while (progressm.startsWith(`${humiditye}`)) {
       let whistlez = 4.0;
       let classes2 = String.fromCharCode(114,101,102,108,101,99,116,111,114,0);
         whistlez *= classes2.length;
      let librrcg = classes2.length <= 9356025;
      do {
          let acceptedG = String.fromCharCode(99,104,101,99,107,97,115,109,0);
          let matchactive0 = false;
         classes2 += `${classes2.length}`;
         acceptedG = `${acceptedG.length}`;
         matchactive0 = !matchactive0;
         if (librrcg) {
            break;
         }
      } while (librrcg && (3.65 == (whistlez * classes2.length)));
         whistlez *= 1 | parseInt(`${whistlez}`);
      while ((2 - classes2.length) > 4) {
          let layoutr = 0.0;
          let bufferw = String.fromCharCode(99,111,118,101,114,105,110,103,0);
          let orangea = String.fromCharCode(97,118,105,100,0);
         whistlez += 3 % (Math.max(1, classes2.length));
         layoutr *= 2;
         bufferw += `${parseInt(`${layoutr}`)}`;
         orangea += `${parseInt(`${layoutr}`) % (Math.max(orangea.length, 5))}`;
         break;
      }
         whistlez -= 1 >> (Math.min(1, Math.abs(parseInt(`${whistlez}`))));
         classes2 = `${(classes2 == String.fromCharCode(113,0) ? classes2.length : parseInt(`${whistlez}`))}`;
      humiditye *= halffieldimageJ * parseInt(`${whistlez}`);
      break;
   }
                setVideoSelected(result.assets[0]);

   while (3 <= (halffieldimageJ | 5)) {
      progressm = `${analyticn.length * playercommonl.size}`;
      break;
   }
   while (analyticn.startsWith(progressm)) {
      progressm = `${playercommonl.size}`;
      break;
   }
                setUploadProgress(0);

   let ballm = 5479102.0 <= humiditye;
   do {
      humiditye += delegate_29.size;
      if (ballm) {
         break;
      }
   } while ((halffieldimageJ >= humiditye) && ballm);
      brightnessq -= 3 ^ halffieldimageJ;

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);

      brightnessq /= Math.max(4, 2 + analyticn.length);
   let iconstar_ = brightnessq >= 6960734.0;
   do {
       let iconeditb = false;
       let mbbidR = String.fromCharCode(114,111,119,115,107,105,112,0);
         iconeditb = mbbidR.length > 34 && iconeditb;
      while (4 < mbbidR.length) {
         mbbidR = "1";
         break;
      }
         mbbidR += "2";
      for (let m = 0; m < 2; m++) {
         iconeditb = mbbidR.length >= 66;
      }
         mbbidR = `${(String.fromCharCode(116,0) == mbbidR ? (iconeditb ? 4 : 2) : mbbidR.length)}`;
      while (4 == mbbidR.length) {
         iconeditb = mbbidR.length < 10;
         break;
      }
      brightnessq += parseInt(`${humiditye}`);
      if (iconstar_) {
         break;
      }
   } while ((analyticn.length == brightnessq) && iconstar_);


                const uploadTimer = setInterval(() => {

   let away1 = 6349831 <= halffieldimageJ;
   do {
      halffieldimageJ += progressm.length;
      if (away1) {
         break;
      }
   } while (away1 && ((4.66 + humiditye) >= 4.20));
   for (let u = 0; u < 3; u++) {
       let dependencyD: Map<any, any> = new Map([[String.fromCharCode(99,97,99,97,0),337], [String.fromCharCode(111,112,101,110,105,110,103,0),231]]);
       let uploada: Array<any> = [326, 466];
       let bggradientZ = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
       let confirmationg: Array<any> = [String.fromCharCode(122,95,50,50,0), String.fromCharCode(115,97,118,101,109,101,100,105,97,0), String.fromCharCode(108,105,98,115,97,109,112,108,101,0)];
       let iconfeedbackl = 2.0;
         dependencyD = new Map([[`${dependencyD.size}`, parseInt(`${iconfeedbackl}`)]]);
      let attributedstringL = bggradientZ == String.fromCharCode(49,48,105,0);
      do {
         bggradientZ += `${dependencyD.size * 1}`;
         if (attributedstringL) {
            break;
         }
      } while ((3 == uploada.length) && attributedstringL);
         confirmationg = [3];
      for (let b = 0; b < 1; b++) {
          let abidetecte = 2;
          let mail9: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,0),String.fromCharCode(97,100,97,112,116,105,118,101,0)], [String.fromCharCode(99,111,109,102,111,114,116,0),String.fromCharCode(117,116,112,117,116,0)], [String.fromCharCode(104,105,110,116,0),String.fromCharCode(100,111,119,110,108,111,97,100,0)]]);
         iconfeedbackl *= parseFloat(`${2 * confirmationg.length}`);
         abidetecte <<= Math.min(Math.abs(abidetecte & mail9.size), 5);
         mail9.set(`${abidetecte}`, mail9.size);
      }
          let mbbanneru: Map<any, any> = new Map([[String.fromCharCode(119,105,108,100,99,97,114,100,0),778], [String.fromCharCode(110,117,108,108,105,102,0),768], [String.fromCharCode(114,109,115,105,112,114,0),231]]);
          let mbjscommon3 = String.fromCharCode(116,121,112,101,111,102,0);
         uploada = [mbbanneru.size & 2];
         mbbanneru = new Map([[mbjscommon3, (String.fromCharCode(114,0) == mbjscommon3 ? mbjscommon3.length : mbjscommon3.length)]]);
         bggradientZ = `${confirmationg.length}`;
         dependencyD = new Map([[`${dependencyD.size}`, bggradientZ.length | dependencyD.size]]);
         bggradientZ = `${uploada.length << (Math.min(bggradientZ.length, 2))}`;
      if (uploada.includes(confirmationg.length)) {
         confirmationg = [confirmationg.length];
      }
      while (dependencyD.get(`${uploada.length}`) != null) {
         uploada = [parseInt(`${iconfeedbackl}`) + 2];
         break;
      }
      let active6 = 6164259 <= bggradientZ.length;
      do {
         bggradientZ += "2";
         if (active6) {
            break;
         }
      } while (active6 && ((2 >> (Math.min(2, bggradientZ.length))) > 3));
      while (!confirmationg.includes(iconfeedbackl)) {
         confirmationg.push(bggradientZ.length % (Math.max(7, uploada.length)));
         break;
      }
         bggradientZ = `${dependencyD.size >> (Math.min(bggradientZ.length, 1))}`;
      let iconscheduleE = uploada.length <= 5403404;
      do {
          let clockm = String.fromCharCode(97,110,97,108,121,122,105,110,103,0);
         uploada = [parseInt(`${iconfeedbackl}`)];
         clockm = `${clockm.length}`;
         if (iconscheduleE) {
            break;
         }
      } while ((4 == (uploada.length ^ 2) || (2 ^ uploada.length) == 2) && iconscheduleE);
      if (iconfeedbackl < 2.62) {
          let faviconD = 5.0;
          let defaultfootballbgD = 3.0;
          let moduleZ = String.fromCharCode(104,101,97,114,116,98,101,97,116,0);
          let strh: Array<any> = [376, 208];
          let grey0: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,115,0),String.fromCharCode(103,117,101,115,115,101,100,0)], [String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,0),String.fromCharCode(115,109,105,108,101,0)], [String.fromCharCode(97,115,115,101,109,98,108,101,114,0),String.fromCharCode(112,114,111,99,101,115,115,101,100,0)]]);
         iconfeedbackl *= parseFloat(`${moduleZ.length ^ parseInt(`${faviconD}`)}`);
         faviconD += strh.length * 2;
         defaultfootballbgD -= parseFloat(`${parseInt(`${defaultfootballbgD}`) % 2}`);
         moduleZ = `${strh.length}`;
         grey0.set(`${strh.length}`, grey0.size);
      }
      progressm += `${parseInt(`${brightnessq}`)}`;
   }
                    setUploadProgress(prev => {

   if ((5 + halffieldimageJ) < 1 && (5 + halffieldimageJ) < 3) {
      delegate_29.set(`${analyticn}`, 2);
   }
       let dangerg = String.fromCharCode(100,110,115,0);
       let alertO = String.fromCharCode(105,110,104,105,98,105,116,0);
       let analytics2: Map<any, any> = new Map([[String.fromCharCode(114,101,117,112,108,111,97,100,101,100,0),212], [String.fromCharCode(100,109,105,120,0),696]]);
          let mode5 = false;
         dangerg += `${dangerg.length}`;
         mode5 = !mode5;
      if (2 <= dangerg.length) {
         alertO = `${3 | alertO.length}`;
      }
      for (let j = 0; j < 2; j++) {
         dangerg = `${analytics2.size % (Math.max(alertO.length, 1))}`;
      }
          let overQ = 3.0;
          let fills = String.fromCharCode(100,101,110,111,105,115,105,110,103,0);
         alertO += `${alertO.length}`;
         overQ += parseInt(`${overQ}`) % (Math.max(fills.length, 9));
         fills += `${fills.length & parseInt(`${overQ}`)}`;
         alertO += `${dangerg.length}`;
      if (alertO.endsWith(dangerg)) {
         dangerg += `${alertO.length & 2}`;
      }
      if (!alertO.endsWith(`${analytics2.size}`)) {
          let giftbutton7 = String.fromCharCode(105,110,116,114,97,120,109,98,117,118,0);
         analytics2.set(dangerg, (String.fromCharCode(122,0) == dangerg ? giftbutton7.length : dangerg.length));
      }
          let unreadj = String.fromCharCode(115,101,108,101,99,116,97,98,108,101,0);
          let librrcw = 0;
         dangerg = "3";
         unreadj = `${librrcw + 2}`;
         librrcw |= unreadj.length >> (Math.min(Math.abs(2), 5));
         dangerg += `${dangerg.length}`;
      brightnessq /= Math.max(3, 1 - playercommonl.size);
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

   for (let b = 0; b < 3; b++) {
       let privacyI = String.fromCharCode(108,116,97,98,108,101,0);
         privacyI += `${(String.fromCharCode(120,0) == privacyI ? privacyI.length : privacyI.length)}`;
      let scrollviewo = 7389022 <= privacyI.length;
      do {
          let strv = true;
          let iconbellactiveo: Map<any, any> = new Map([[String.fromCharCode(115,117,98,106,111,117,114,110,97,108,0),667], [String.fromCharCode(111,114,105,0),396], [String.fromCharCode(98,97,115,107,101,116,98,97,108,108,0),476]]);
          let basketballF = true;
          let robotoC = false;
         privacyI = `${iconbellactiveo.size | 1}`;
         strv = robotoC;
         iconbellactiveo = new Map([[`${robotoC}`, ((basketballF ? 2 : 3) / 3)]]);
         basketballF = (robotoC ? basketballF : !robotoC);
         if (scrollviewo) {
            break;
         }
      } while (scrollviewo && (2 >= privacyI.length));
      let descS = privacyI == String.fromCharCode(115,117,113,50,99,0);
      do {
         privacyI = "3";
         if (descS) {
            break;
         }
      } while ((privacyI.endsWith(`${privacyI.length}`)) && descS);
      x_positionz.push(x_positionz.length);
   }
      brightnessq += 1;

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
       let tempnodatagify = 2.0;
    let servicei = 0.0;
    let colorsa: Array<any> = [543, 502];
    let resendt = 4;
    let moviesE = 0.0;
    let clockA = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,0);
    let t_positionl = String.fromCharCode(99,111,110,116,114,97,115,116,0);
    let mappingS = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,0);
    let manifestj: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,0),false ], [String.fromCharCode(119,111,114,107,97,114,111,117,110,100,0),true ]]);
    let bootw = 2.0;
    let arrowrightM = 1;
    let mapbufferF = String.fromCharCode(98,97,110,100,115,0);
       let basel: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,104,101,97,100,0),469], [String.fromCharCode(104,109,109,116,0),22], [String.fromCharCode(108,105,115,116,101,110,105,110,103,0),454]]);
       let androidV = true;
       let eventsplashw = 1.0;
      while (4.96 == eventsplashw && 4.75 == (4.96 + eventsplashw)) {
          let profileinactive2 = 3;
          let forwardM = String.fromCharCode(100,101,110,121,0);
         androidV = profileinactive2 < eventsplashw;
         profileinactive2 <<= Math.min(forwardM.length, 3);
         forwardM += `${forwardM.length}`;
         break;
      }
          let arrowupF = true;
          let headeru: Array<any> = [String.fromCharCode(117,115,101,114,99,116,120,0), String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,0), String.fromCharCode(105,110,118,105,116,101,114,0)];
         basel.set(`${androidV}`, 2 * parseInt(`${eventsplashw}`));
         arrowupF = !arrowupF;
         headeru = [headeru.length];
      for (let r = 0; r < 2; r++) {
         eventsplashw -= basel.size;
      }
       let heartm = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,0);
       let flyerz = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,0);
      while (flyerz.length <= 1) {
         flyerz += `${parseInt(`${eventsplashw}`) >> (Math.min(1, Math.abs(2)))}`;
         break;
      }
         heartm = `${1 * parseInt(`${eventsplashw}`)}`;
         androidV = 58.43 >= eventsplashw && String.fromCharCode(72,0) == heartm;
      while (heartm.includes(`${basel.size}`)) {
          let neonO = 0;
          let xnewssharep = String.fromCharCode(111,112,117,115,102,105,108,101,0);
          let penaltygoal9 = 1.0;
          let appsr = 5.0;
         basel.set(`${androidV}`, 2);
         neonO |= parseInt(`${appsr}`);
         xnewssharep += `${1 & parseInt(`${penaltygoal9}`)}`;
         penaltygoal9 += xnewssharep.length;
         break;
      }
      let countryZ = eventsplashw <= 7059556.0;
      do {
          let formu = String.fromCharCode(99,111,112,121,102,100,0);
          let historyE = 1;
          let gestureE = String.fromCharCode(116,111,111,108,115,0);
         eventsplashw *= flyerz.length - heartm.length;
         formu += `${historyE + gestureE.length}`;
         historyE -= formu.length | gestureE.length;
         if (countryZ) {
            break;
         }
      } while ((3.14 < (eventsplashw - 4.79) || 2 < (basel.size - parseInt(`${eventsplashw}`))) && countryZ);
      colorsa.push(2 - resendt);
   if ((resendt - parseInt(`${tempnodatagify}`)) > 5 || 4.42 > (resendt - tempnodatagify)) {
      tempnodatagify /= Math.max(1, 3 + mappingS.length);
   }

        if (Platform.OS === 'ios') {

   while ((moviesE / 3.41) < 4.90) {
       let rootY = 4.0;
       let filli = 1.0;
      let configo = rootY >= 5719472.0;
      do {
         rootY += parseFloat(`${parseInt(`${filli}`) * 1}`);
         if (configo) {
            break;
         }
      } while (configo && (4.68 >= (rootY * filli)));
      if ((4.71 / (Math.max(9, rootY))) == 3.30) {
         rootY /= Math.max(parseFloat(`${1 | parseInt(`${rootY}`)}`), 1);
      }
      let twittery = filli <= 7582862.0;
      do {
          let iconsubssuccessE: Map<any, any> = new Map([[String.fromCharCode(110,99,111,109,105,110,103,0),229], [String.fromCharCode(98,111,108,100,0),413]]);
          let gifgoalbg6 = 2.0;
          let inactiveh = true;
          let iconarrowrightE = String.fromCharCode(116,101,114,109,105,110,97,116,101,0);
         filli /= Math.max(2, 4);
         iconsubssuccessE.set(`${gifgoalbg6}`, parseInt(`${gifgoalbg6}`) / (Math.max(2, iconarrowrightE.length)));
         inactiveh = inactiveh || 20.29 == gifgoalbg6;
         iconarrowrightE += `${(1 % (Math.max(9, (inactiveh ? 3 : 4))))}`;
         if (twittery) {
            break;
         }
      } while (twittery && (3.31 < (rootY * filli) && (rootY * filli) < 3.31));
       let catagoryQ = true;
       let usernameI = false;
      let watchnowbg2 = 6243084.0 <= filli;
      do {
         filli /= Math.max(((catagoryQ ? 1 : 2) & parseInt(`${rootY}`)), 3);
         if (watchnowbg2) {
            break;
         }
      } while (watchnowbg2 && (4.5 < (filli + 5.77) || catagoryQ));
      for (let h = 0; h < 3; h++) {
         usernameI = filli <= 8.61;
      }
      moviesE += parseFloat(`${2}`);
      break;
   }
   let greytickr = String.fromCharCode(106,48,109,0) == clockA;
   do {
       let lineC = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,0);
       let largebrightnessU: Array<any> = [958, 749, 562];
      if (5 < (5 << (Math.min(4, largebrightnessU.length)))) {
         lineC += `${largebrightnessU.length}`;
      }
         lineC = `${lineC.length}`;
      let mbbid1 = largebrightnessU.length >= 9340724;
      do {
          let sourcen = true;
          let libjsinspectors = String.fromCharCode(105,109,97,103,101,115,0);
          let private_vxR = 5.0;
         largebrightnessU.push(3);
         sourcen = (parseFloat(`${libjsinspectors.length}`) / (Math.max(6, private_vxR))) < 77.94;
         libjsinspectors = `${parseInt(`${private_vxR}`) / (Math.max(libjsinspectors.length, 5))}`;
         if (mbbid1) {
            break;
         }
      } while ((3 >= (lineC.length & 5) && 1 >= (5 & lineC.length)) && mbbid1);
      if (lineC.length > largebrightnessU.length) {
         lineC = `${(String.fromCharCode(110,0) == lineC ? largebrightnessU.length : lineC.length)}`;
      }
      if (1 > (largebrightnessU.length << (Math.min(lineC.length, 3)))) {
         lineC = "1";
      }
          let launcher5 = 3.0;
         lineC += `${largebrightnessU.length << (Math.min(2, Math.abs(parseInt(`${launcher5}`))))}`;
      clockA = `${lineC.length + manifestj.size}`;
      if (greytickr) {
         break;
      }
   } while (greytickr && (t_positionl != String.fromCharCode(52,0)));
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {

       let inviteQ = true;
       let f_titlei = String.fromCharCode(98,105,110,97,115,99,105,105,0);
      for (let a = 0; a < 2; a++) {
         f_titlei += `${f_titlei.length}`;
      }
      for (let g = 0; g < 1; g++) {
          let crownC = false;
          let playlist9 = String.fromCharCode(108,105,98,109,0);
          let libfollyR = 0.0;
          let with_s_ = String.fromCharCode(111,112,117,115,0);
         f_titlei += `${2 & with_s_.length}`;
         crownC = !crownC;
         playlist9 = "2";
         libfollyR += ((crownC ? 4 : 4) / 1);
         with_s_ += `${parseInt(`${libfollyR}`) / 2}`;
      }
         f_titlei += `${((inviteQ ? 4 : 3))}`;
      let privilege1 = inviteQ ? !inviteQ : inviteQ;
      do {
         inviteQ = f_titlei.length > 47 && inviteQ;
         if (privilege1) {
            break;
         }
      } while (privilege1 && (3 >= f_titlei.length));
         f_titlei += `${((inviteQ ? 3 : 4))}`;
         f_titlei += `${3 + f_titlei.length}`;
      servicei += parseFloat(`${colorsa.length}`);
       let sendy = String.fromCharCode(100,105,114,101,99,116,105,111,110,115,0);
       let window_0wi = String.fromCharCode(99,104,97,110,110,101,108,115,0);
         sendy = `${sendy.length}`;
      let button0 = sendy == String.fromCharCode(50,106,108,0);
      do {
         sendy += "3";
         if (button0) {
            break;
         }
      } while ((sendy.length > 4) && button0);
         window_0wi = `${sendy.length}`;
      while (2 <= window_0wi.length) {
          let middlewareU = 5.0;
          let iconpipexpandz = String.fromCharCode(118,108,111,103,0);
          let iconfeedbackL = 1.0;
          let fastr = 4.0;
          let classesw: Array<any> = [739, 540];
         sendy += `${(String.fromCharCode(121,0) == window_0wi ? window_0wi.length : classesw.length)}`;
         middlewareU *= 1 & parseInt(`${fastr}`);
         iconpipexpandz += `${parseInt(`${iconfeedbackL}`)}`;
         fastr += parseFloat(`${parseInt(`${middlewareU}`)}`);
         classesw.push(parseInt(`${iconfeedbackL}`));
         break;
      }
      for (let q = 0; q < 2; q++) {
         window_0wi = `${sendy.length}`;
      }
      for (let d = 0; d < 2; d++) {
         window_0wi = `${window_0wi.length << (Math.min(sendy.length, 3))}`;
      }
      manifestj = new Map([[`${colorsa.length}`, 3 & clockA.length]]);
                if (result == RESULTS.GRANTED) {

      mappingS += `${manifestj.size - 2}`;
      servicei += (parseFloat(`${String.fromCharCode(69,0) == mappingS ? mappingS.length : clockA.length}`));
                    setGrantPhotePermission(true);
                } else {

   for (let e = 0; e < 2; e++) {
      moviesE -= parseFloat(`${resendt << (Math.min(Math.abs(parseInt(`${moviesE}`)), 4))}`);
   }
      resendt += 3;

                    setGrantPhotePermission(false);

   for (let h = 0; h < 1; h++) {
       let confirmation_ = String.fromCharCode(107,117,107,105,0);
       let disconnectedlogoq = 1.0;
       let taiwan2 = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,0);
      for (let r = 0; r < 2; r++) {
         disconnectedlogoq += parseInt(`${disconnectedlogoq}`) ^ 1;
      }
          let mbsplashK = String.fromCharCode(104,105,103,104,108,105,103,104,116,0);
          let description_gS = 3;
         taiwan2 = "2";
         mbsplashK = `${description_gS ^ 1}`;
         description_gS |= 3;
      while (!confirmation_.endsWith(taiwan2)) {
         confirmation_ = `${taiwan2.length}`;
         break;
      }
      let refreshF = String.fromCharCode(101,104,51,102,57,118,49,51,122,97,0) == taiwan2;
      do {
         taiwan2 += "3";
         if (refreshF) {
            break;
         }
      } while ((2 > (taiwan2.length + 1)) && refreshF);
      while ((parseInt(`${disconnectedlogoq}`) * confirmation_.length) > 4) {
         disconnectedlogoq *= taiwan2.length;
         break;
      }
      let controls9 = disconnectedlogoq >= 9644319.0;
      do {
         disconnectedlogoq /= Math.max(confirmation_.length * 3, 3);
         if (controls9) {
            break;
         }
      } while ((disconnectedlogoq > 3.60) && controls9);
      if (parseInt(`${disconnectedlogoq}`) == taiwan2.length) {
         disconnectedlogoq -= taiwan2.length;
      }
      for (let s = 0; s < 1; s++) {
          let sortj = 5.0;
          let mbjscommon7 = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,0);
         confirmation_ += `${(String.fromCharCode(101,0) == confirmation_ ? confirmation_.length : mbjscommon7.length)}`;
         sortj /= Math.max(4, parseFloat(`${1}`));
         mbjscommon7 = `${parseInt(`${sortj}`)}`;
      }
      while ((disconnectedlogoq / 4.21) >= 2.66 && 1.24 >= (4.21 / (Math.max(10, disconnectedlogoq)))) {
         confirmation_ = `${taiwan2.length}`;
         break;
      }
      resendt *= 1 & t_positionl.length;
   }
   while (t_positionl != mappingS) {
       let screen7 = String.fromCharCode(99,114,111,119,100,105,110,0);
       let iconschedulen = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,0);
       let modelj: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,101,0),String.fromCharCode(101,120,105,102,0)], [String.fromCharCode(116,101,109,112,108,97,116,101,115,0),String.fromCharCode(114,111,119,105,100,0)]]);
       let h_positionP = 1.0;
      let holder7 = iconschedulen.length >= 5677570;
      do {
         iconschedulen += "3";
         if (holder7) {
            break;
         }
      } while (((3 << (Math.min(4, iconschedulen.length))) <= 4 || 4.9 <= (h_positionP + iconschedulen.length)) && holder7);
         iconschedulen += "1";
         modelj = new Map([[`${modelj.size}`, (iconschedulen == String.fromCharCode(118,0) ? modelj.size : iconschedulen.length)]]);
       let short_c1 = String.fromCharCode(115,101,114,105,102,0);
      let navigationU = 5337031 >= modelj.size;
      do {
          let analyticl: Array<any> = [572, 511];
         modelj.set(iconschedulen, iconschedulen.length >> (Math.min(5, analyticl.length)));
         if (navigationU) {
            break;
         }
      } while (navigationU && (5 > (screen7.length << (Math.min(Math.abs(2), 2)))));
          let attributedstringT = 2.0;
          let promotion_ = String.fromCharCode(99,111,109,109,101,110,116,115,0);
         screen7 += `${(promotion_ == String.fromCharCode(50,0) ? parseInt(`${attributedstringT}`) : promotion_.length)}`;
          let spinnerh = String.fromCharCode(100,117,114,105,110,103,0);
          let membershipr = String.fromCharCode(99,97,115,101,115,0);
         short_c1 = `${iconschedulen.length & screen7.length}`;
         spinnerh = `${spinnerh.length}`;
         membershipr += "2";
      while (4 == (modelj.size - iconschedulen.length) && 4 == (iconschedulen.length - modelj.size)) {
          let combinem = String.fromCharCode(111,118,101,114,114,105,100,101,115,0);
          let libcxxcomponentsr = String.fromCharCode(98,110,109,112,105,0);
         iconschedulen = `${screen7.length ^ 2}`;
         combinem += "3";
         libcxxcomponentsr = `${libcxxcomponentsr.length >> (Math.min(2, combinem.length))}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         screen7 = `${modelj.size}`;
      }
      while (2 == (3 ^ modelj.size) && 3 == (modelj.size - 3)) {
         h_positionP += screen7.length | parseInt(`${h_positionP}`);
         break;
      }
      for (let x = 0; x < 2; x++) {
          let anythinki = 0.0;
          let fastB: Array<any> = [132, 194];
          let mbbidw = String.fromCharCode(97,99,116,117,97,108,108,121,0);
         iconschedulen += `${short_c1.length}`;
         anythinki -= parseFloat(`${3 + mbbidw.length}`);
         fastB = [1];
         mbbidw += `${mbbidw.length}`;
      }
      if (iconschedulen.length <= h_positionP) {
          let dropdownY = String.fromCharCode(100,105,115,99,108,111,115,117,114,101,0);
          let whiteanimationlivej = String.fromCharCode(99,101,108,116,0);
          let gemfileK = String.fromCharCode(102,108,97,103,0);
          let tooltipsg = 5.0;
          let textlayoutmanagerH: Array<any> = [640, 662];
         h_positionP -= 3 % (Math.max(8, whiteanimationlivej.length));
         dropdownY += `${dropdownY.length << (Math.min(gemfileK.length, 3))}`;
         whiteanimationlivej = `${parseInt(`${tooltipsg}`)}`;
         gemfileK += `${parseInt(`${tooltipsg}`) % 3}`;
         textlayoutmanagerH = [parseInt(`${tooltipsg}`)];
      }
      mappingS += "3";
      break;
   }
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
       let huaweid = 2.0;
    let launche = String.fromCharCode(105,110,116,101,108,0);
    let friendsP = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,0);
    let mimoH: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,0),338], [String.fromCharCode(119,97,110,116,115,0),861], [String.fromCharCode(115,120,110,101,116,0),67]]);
    let mbsplashr = 3.0;
    let graphicsd = 5.0;
    let libflippero = String.fromCharCode(118,97,97,112,105,0);
    let floatingG = 4;
    let gmailp = 5.0;
    let otherz = true;
    let read1 = 3.0;
   let moviesS = mimoH.size >= 5270928;
   do {
       let gestureW = 3;
       let basketballD = String.fromCharCode(115,116,97,114,115,0);
       let gifgoalbgm = String.fromCharCode(97,110,105,109,97,116,101,0);
      if (2 <= (4 + gestureW) || (gestureW + basketballD.length) <= 4) {
          let eighteen0 = 2;
          let guidec = 2.0;
         basketballD = `${basketballD.length - 2}`;
         eighteen0 %= Math.max(eighteen0, 3);
         guidec -= 2;
      }
       let backgroundc = false;
       let flipperx: Array<any> = [686, 301];
          let reactnativeultimatelistview5 = String.fromCharCode(97,116,111,109,105,99,0);
          let questS = false;
         backgroundc = String.fromCharCode(104,0) == gifgoalbgm;
         reactnativeultimatelistview5 = `${(reactnativeultimatelistview5 == String.fromCharCode(57,0) ? reactnativeultimatelistview5.length : (questS ? 4 : 1))}`;
         questS = reactnativeultimatelistview5.length == 68;
          let pressureT = 2;
         gifgoalbgm += `${flipperx.length | basketballD.length}`;
         pressureT |= pressureT * 1;
      for (let d = 0; d < 3; d++) {
         flipperx.push(gestureW * 2);
      }
         flipperx.push(3);
      while ((4 - flipperx.length) < 3 && (basketballD.length - flipperx.length) < 4) {
         flipperx = [gestureW % 2];
         break;
      }
         backgroundc = gestureW > basketballD.length;
      mimoH.set(basketballD, (String.fromCharCode(118,0) == basketballD ? parseInt(`${mbsplashr}`) : basketballD.length));
      if (moviesS) {
         break;
      }
   } while (moviesS && (3.16 >= (mbsplashr * 3.30) || 3.30 >= (mbsplashr * mimoH.size)));
      mbsplashr /= Math.max((friendsP == String.fromCharCode(77,0) ? friendsP.length : libflippero.length), 4);
       let basketballhometeamM: Array<any> = [852, 163];
       let cnewarchdefaultsj = String.fromCharCode(118,97,114,0);
      for (let p = 0; p < 1; p++) {
         cnewarchdefaultsj += `${3 - cnewarchdefaultsj.length}`;
      }
      for (let n = 0; n < 3; n++) {
         cnewarchdefaultsj = `${basketballhometeamM.length}`;
      }
      if ((cnewarchdefaultsj.length << (Math.min(Math.abs(3), 4))) >= 1) {
          let gestures2 = String.fromCharCode(112,97,116,104,109,116,117,0);
          let default_2Q = String.fromCharCode(115,99,97,110,110,101,100,0);
          let episodesc = 0.0;
          let flyerL = 1;
          let disconnectedlogo7 = String.fromCharCode(104,100,110,111,100,101,0);
         basketballhometeamM = [gestures2.length * parseInt(`${episodesc}`)];
         gestures2 = `${(disconnectedlogo7 == String.fromCharCode(100,0) ? disconnectedlogo7.length : default_2Q.length)}`;
         default_2Q += `${2 / (Math.max(2, default_2Q.length))}`;
         episodesc /= Math.max(flyerL + 2, 1);
         flyerL /= Math.max(1, default_2Q.length | 2);
      }
       let sportsT = String.fromCharCode(114,101,102,105,100,0);
          let cancelh = String.fromCharCode(108,98,108,0);
         cnewarchdefaultsj = `${cnewarchdefaultsj.length | 2}`;
         cancelh = "1";
          let switch_ayn = 2.0;
          let transferA = 2.0;
         cnewarchdefaultsj = `${cnewarchdefaultsj.length | 3}`;
         switch_ayn -= parseInt(`${transferA}`);
         transferA += parseFloat(`${1 % (Math.max(parseInt(`${switch_ayn}`), 6))}`);
      friendsP = "3";
      mbsplashr /= Math.max(parseInt(`${graphicsd}`), 4);
       let viewerA: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,0),String.fromCharCode(114,101,113,117,101,115,116,101,114,0)], [String.fromCharCode(100,99,113,117,97,110,116,0),String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0)], [String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0),String.fromCharCode(104,97,110,100,108,101,115,0)]]);
         viewerA = new Map([[`${viewerA.size}`, viewerA.size ^ 2]]);
      if ((viewerA.size % 3) <= 4 || 4 <= (viewerA.size % 3)) {
         viewerA = new Map([[`${viewerA.size}`, viewerA.size << (Math.min(Math.abs(3), 5))]]);
      }
         viewerA = new Map([[`${viewerA.size}`, 1 & viewerA.size]]);
      graphicsd -= parseFloat(`${parseInt(`${mbsplashr}`)}`);
      launche = `${parseInt(`${graphicsd}`) >> (Math.min(3, Math.abs(1)))}`;
   if (Array.from(mimoH.keys()).includes(`${huaweid}`)) {
      mimoH = new Map([[`${graphicsd}`, 2]]);
   }
       let episodesq = 1;
       let project_ = 5.0;
       let sendt = String.fromCharCode(117,110,99,108,105,112,112,101,100,0);
          let runtimescheduler0 = String.fromCharCode(105,110,116,116,121,112,101,115,0);
          let iconnointernetd = false;
         sendt = `${parseInt(`${project_}`) - episodesq}`;
         runtimescheduler0 = `${(runtimescheduler0 == String.fromCharCode(49,0) ? (iconnointernetd ? 4 : 4) : runtimescheduler0.length)}`;
         iconnointernetd = !iconnointernetd;
      while (3.81 == (project_ * 5.65) && 5 == (5 & episodesq)) {
         project_ -= episodesq;
         break;
      }
         episodesq |= parseInt(`${project_}`);
         episodesq /= Math.max(parseInt(`${project_}`), 1);
      let playX = String.fromCharCode(106,109,106,108,102,113,0) == sendt;
      do {
          let runtimeschedulerC: Array<any> = [21, 435, 155];
          let directN: Map<any, any> = new Map([[String.fromCharCode(111,102,102,108,105,110,101,0),true ], [String.fromCharCode(112,97,116,116,101,114,110,115,0),false ], [String.fromCharCode(101,120,105,115,116,105,110,103,0),false ]]);
          let paginationZ = 5.0;
          let indexG = 3;
          let kickr: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,115,111,102,116,0),601], [String.fromCharCode(105,97,116,0),988]]);
         sendt = `${parseInt(`${paginationZ}`)}`;
         runtimeschedulerC = [kickr.size | runtimeschedulerC.length];
         directN.set(`${indexG}`, 2);
         paginationZ += 2 * directN.size;
         indexG >>= Math.min(2, Math.abs(kickr.size));
         if (playX) {
            break;
         }
      } while (playX && ((1 >> (Math.min(5, sendt.length))) >= 5 && 4 >= (1 | sendt.length)));
         project_ /= Math.max(2, 2);
      for (let z = 0; z < 2; z++) {
          let detailr = 4.0;
          let matches8 = 5.0;
         episodesq *= parseInt(`${project_}`);
         detailr += parseInt(`${matches8}`);
      }
       let matchz = false;
          let headerk = String.fromCharCode(122,101,114,111,115,0);
         episodesq *= parseInt(`${project_}`);
         headerk += `${headerk.length * headerk.length}`;
      libflippero = `${launche.length}`;
   while (libflippero.length <= 4) {
      floatingG -= parseInt(`${huaweid}`);
      break;
   }
   while ((friendsP.length - 4) >= 2) {
      mbsplashr += (String.fromCharCode(73,0) == friendsP ? friendsP.length : mimoH.size);
      break;
   }
   while (launche.startsWith(`${floatingG}`)) {
      floatingG <<= Math.min(1, Math.abs(3 / (Math.max(2, mimoH.size))));
      break;
   }
      launche = `${parseInt(`${graphicsd}`) << (Math.min(launche.length, 4))}`;
      mimoH = new Map([[libflippero, (String.fromCharCode(112,0) == friendsP ? libflippero.length : friendsP.length)]]);
       let dragclose3: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,121,111,117,116,0),String.fromCharCode(100,105,118,105,100,101,114,115,0)], [String.fromCharCode(100,110,111,119,0),String.fromCharCode(98,105,116,109,97,112,0)]]);
         dragclose3.set(`${dragclose3.size}`, dragclose3.size % 1);
          let castingM = 2.0;
         dragclose3.set(`${castingM}`, parseInt(`${castingM}`) ^ dragclose3.size);
      let arrowZ = 6624846 <= dragclose3.size;
      do {
         dragclose3 = new Map([[`${dragclose3.size}`, dragclose3.size]]);
         if (arrowZ) {
            break;
         }
      } while (arrowZ && (dragclose3.size == dragclose3.size));
      mbsplashr += parseInt(`${graphicsd}`);
   while (4.36 >= (mbsplashr + graphicsd)) {
      mbsplashr *= libflippero.length;
      break;
   }
      friendsP = `${mimoH.size}`;
   if (Array.from(mimoH.values()).includes(mbsplashr)) {
      mimoH.set(libflippero, 2 * launche.length);
   }
       let defaultfootballbg9: Array<any> = [106, 517];
       let smallm = 3;
         defaultfootballbg9 = [defaultfootballbg9.length];
      while ((4 & defaultfootballbg9.length) == 2) {
          let collectionA = String.fromCharCode(117,110,114,111,108,108,101,100,0);
         defaultfootballbg9.push((String.fromCharCode(77,0) == collectionA ? smallm : collectionA.length));
         break;
      }
      if (3 <= (defaultfootballbg9.length + smallm)) {
         defaultfootballbg9.push(smallm);
      }
         defaultfootballbg9.push(smallm - 2);
      let libpangleflippedd = smallm <= 8429529;
      do {
          let t_imageI: Map<any, any> = new Map([[String.fromCharCode(115,105,103,97,108,103,0),90], [String.fromCharCode(107,105,110,103,0),758], [String.fromCharCode(105,110,116,111,0),873]]);
          let statisticsinactive0 = 1.0;
         smallm += smallm % (Math.max(defaultfootballbg9.length, 6));
         t_imageI.set(`${statisticsinactive0}`, t_imageI.size ^ 1);
         statisticsinactive0 *= parseFloat(`${2}`);
         if (libpangleflippedd) {
            break;
         }
      } while (libpangleflippedd && (4 < (5 - defaultfootballbg9.length) || (smallm - defaultfootballbg9.length) < 5));
         smallm -= smallm;
      floatingG |= 3;
   let controll = 6108472 <= mimoH.size;
   do {
       let upgradez: Array<any> = [476, 278, 345];
       let iconscheduleg = false;
       let iconbellactiveL = 1.0;
       let filledu = 2;
          let ewarded4 = 4.0;
          let settingsp = String.fromCharCode(97,100,100,101,114,0);
          let selectionC = String.fromCharCode(112,97,99,101,100,0);
         iconscheduleg = iconscheduleg && 79.35 <= ewarded4;
         ewarded4 /= Math.max(4, parseFloat(`${selectionC.length}`));
         settingsp = "2";
         selectionC = `${selectionC.length}`;
      for (let c = 0; c < 1; c++) {
         filledu *= parseInt(`${iconbellactiveL}`);
      }
         upgradez = [((iconscheduleg ? 1 : 3) * filledu)];
      if ((iconbellactiveL * upgradez.length) == 3.92) {
         upgradez.push(upgradez.length);
      }
      let injury7 = filledu >= 8465897;
      do {
          let x_image9 = false;
          let streamingR = 2.0;
          let selectF = 1.0;
          let gestures3 = 2.0;
          let exampleimagej = String.fromCharCode(101,114,114,111,114,0);
         filledu >>= Math.min(2, Math.abs(parseInt(`${selectF}`)));
         x_image9 = x_image9 && 87.34 > gestures3;
         streamingR *= parseFloat(`${parseInt(`${streamingR}`) % (Math.max(exampleimagej.length, 8))}`);
         gestures3 += (parseFloat(`${String.fromCharCode(69,0) == exampleimagej ? exampleimagej.length : parseInt(`${gestures3}`)}`));
         if (injury7) {
            break;
         }
      } while ((3 > (filledu - 2)) && injury7);
         upgradez.push(((iconscheduleg ? 4 : 4) % (Math.max(upgradez.length, 9))));
         filledu /= Math.max(parseInt(`${iconbellactiveL}`), 4);
      while (iconbellactiveL < 4.90) {
         iconbellactiveL += ((iconscheduleg ? 4 : 5) - parseInt(`${iconbellactiveL}`));
         break;
      }
      for (let n = 0; n < 2; n++) {
         iconbellactiveL *= 2;
      }
         upgradez.push(((iconscheduleg ? 5 : 3) ^ filledu));
          let mbbanner4 = String.fromCharCode(102,105,108,101,112,97,116,104,0);
          let usernameE = 2.0;
          let closea = 2.0;
         iconscheduleg = 40.28 == usernameE;
         mbbanner4 += `${parseInt(`${closea}`)}`;
         usernameE /= Math.max(4, parseInt(`${closea}`) << (Math.min(mbbanner4.length, 1)));
       let carouselU = 1.0;
      mimoH = new Map([[`${iconscheduleg}`, 2]]);
      if (controll) {
         break;
      }
   } while (controll && (Array.from(mimoH.values()).includes(huaweid)));

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
       let colorse: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0),844], [String.fromCharCode(102,97,108,108,98,97,99,107,0),970]]);
    let redirectA = false;
    let searchbar1 = String.fromCharCode(109,121,114,110,100,0);
    let annerz = 3;
    let description_e1X = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,0);
    let membershipw: Array<any> = [368, 50, 688];
    let confige = String.fromCharCode(99,104,97,110,103,101,108,111,103,0);
    let greya = String.fromCharCode(110,117,109,98,101,114,115,0);
    let iconshareW: Array<any> = [394, 72, 745];
       let vietnam8 = String.fromCharCode(109,97,108,101,0);
       let saveO = String.fromCharCode(109,105,103,114,97,116,105,111,110,0);
          let indext = 2;
          let unfilly = String.fromCharCode(97,110,97,108,121,115,101,0);
          let unreadF = String.fromCharCode(104,111,114,110,0);
         vietnam8 += `${(String.fromCharCode(120,0) == vietnam8 ? vietnam8.length : indext)}`;
         indext %= Math.max(2, 4);
         unfilly = "3";
         unreadF += `${unreadF.length >> (Math.min(Math.abs(3), 3))}`;
       let yellowanimationlivea: Map<any, any> = new Map([[String.fromCharCode(105,109,105,113,0),610], [String.fromCharCode(105,112,100,111,112,100,0),273], [String.fromCharCode(102,97,97,110,100,99,116,0),124]]);
         saveO = `${yellowanimationlivea.size + vietnam8.length}`;
         saveO += `${(vietnam8 == String.fromCharCode(119,0) ? vietnam8.length : yellowanimationlivea.size)}`;
         yellowanimationlivea.set(saveO, (saveO == String.fromCharCode(52,0) ? saveO.length : vietnam8.length));
       let black2 = 1.0;
      colorse = new Map([[`${colorse.size}`, colorse.size ^ confige.length]]);
   while (Array.from(colorse.keys()).includes(`${membershipw.length}`)) {
      membershipw.push(description_e1X.length);
      break;
   }
      membershipw.push(membershipw.length & 3);
   while (greya == searchbar1) {
      searchbar1 += "3";
      break;
   }
   while (colorse.size < 2 || 3 < (colorse.size ^ 2)) {
      redirectA = colorse.size == 73;
      break;
   }
       let fillf = 4.0;
       let uimanagerQ = 3.0;
       let n_unlocku = true;
       let signinup0 = true;
      if (5.10 > (fillf - uimanagerQ) && (5.10 / (Math.max(9, uimanagerQ))) > 2.44) {
         uimanagerQ /= Math.max(parseInt(`${uimanagerQ}`) ^ 1, 5);
      }
      for (let j = 0; j < 3; j++) {
          let pangleS: Array<any> = [151, 627];
          let iconuserV = 4;
          let redirectp = 5.0;
          let privilegeG = 1;
          let servicel: Array<any> = [750, 253, 304];
         signinup0 = 29 >= servicel.length || 29 >= iconuserV;
         pangleS.push(parseInt(`${redirectp}`) ^ 2);
         iconuserV -= pangleS.length;
         redirectp *= privilegeG ^ pangleS.length;
         privilegeG += privilegeG;
         servicel = [parseInt(`${redirectp}`)];
      }
         signinup0 = !signinup0;
      let middlebrightnessl = fillf <= 5458634.0;
      do {
         fillf *= (parseFloat(`${(signinup0 ? 4 : 3) % (Math.max(10, parseInt(`${uimanagerQ}`)))}`));
         if (middlebrightnessl) {
            break;
         }
      } while (middlebrightnessl && ((uimanagerQ / (Math.max(fillf, 7))) == 4.30));
         uimanagerQ += parseInt(`${fillf}`) + 2;
      annerz ^= parseInt(`${fillf}`);
      confige += `${(String.fromCharCode(70,0) == searchbar1 ? searchbar1.length : description_e1X.length)}`;
      colorse = new Map([[`${redirectA}`, 2]]);
   if (searchbar1 != description_e1X) {
       let unreadF4 = String.fromCharCode(114,101,115,117,108,117,116,105,111,110,0);
       let videovarf = String.fromCharCode(109,105,100,100,108,101,0);
      while (unreadF4.length >= videovarf.length) {
          let brightness4 = 3;
         videovarf += `${3 << (Math.min(2, Math.abs(brightness4)))}`;
         break;
      }
         videovarf = `${unreadF4.length}`;
         unreadF4 += `${unreadF4.length}`;
      while (!videovarf.startsWith(`${unreadF4.length}`)) {
          let temperaturep = 1.0;
          let basex: Array<any> = [280, 955, 378];
          let foundg = true;
         videovarf += `${3 - basex.length}`;
         temperaturep += parseFloat(`${3}`);
         basex = [parseInt(`${temperaturep}`) << (Math.min(3, Math.abs(parseInt(`${temperaturep}`))))];
         break;
      }
      while (3 <= unreadF4.length) {
         unreadF4 += `${videovarf.length * unreadF4.length}`;
         break;
      }
         unreadF4 = `${unreadF4.length}`;
      description_e1X += `${2 - membershipw.length}`;
   }
       let assisty = false;
      for (let i = 0; i < 2; i++) {
         assisty = (!assisty ? assisty : !assisty);
      }
         assisty = (!assisty ? assisty : !assisty);
      if (assisty) {
         assisty = !assisty;
      }
      annerz += (String.fromCharCode(100,0) == confige ? colorse.size : confige.length);
       let scoren = String.fromCharCode(104,105,115,116,111,114,121,0);
      if (scoren.length >= 1) {
          let large3 = String.fromCharCode(98,111,100,121,115,105,100,0);
          let defaultprofilepick = String.fromCharCode(112,97,114,97,109,101,116,101,114,0);
         scoren = `${3 % (Math.max(4, large3.length))}`;
         large3 += `${defaultprofilepick.length - defaultprofilepick.length}`;
      }
      if (2 >= scoren.length) {
         scoren += "2";
      }
       let benefitI: Array<any> = [87, 729];
       let dialogE: Array<any> = [728, 677, 854];
      membershipw.push(greya.length | description_e1X.length);
       let review0 = 5;
       let componentregistryC: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,0),515], [String.fromCharCode(112,115,110,114,0),642], [String.fromCharCode(98,115,105,122,101,0),27]]);
      let mbridgeu = 9010689 >= componentregistryC.size;
      do {
         componentregistryC.set(`${review0}`, 2 & review0);
         if (mbridgeu) {
            break;
         }
      } while ((5 == review0) && mbridgeu);
       let dacccfaabfbcbadeebddcabacdffdbp = String.fromCharCode(114,101,102,114,101,115,104,0);
       let regengH = String.fromCharCode(115,108,105,99,101,100,0);
          let service9 = String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0);
          let moduleq = String.fromCharCode(109,105,99,0);
         dacccfaabfbcbadeebddcabacdffdbp += `${review0}`;
         service9 += `${service9.length}`;
         moduleq = `${service9.length}`;
         componentregistryC = new Map([[`${review0}`, review0 - dacccfaabfbcbadeebddcabacdffdbp.length]]);
      for (let x = 0; x < 2; x++) {
          let turndown4 = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,0);
          let iconnewssharea = String.fromCharCode(99,108,111,110,101,0);
         regengH = `${componentregistryC.size >> (Math.min(regengH.length, 3))}`;
         turndown4 = `${turndown4.length}`;
         iconnewssharea = `${turndown4.length}`;
      }
       let eventsplashH = String.fromCharCode(114,101,102,105,110,101,0);
      annerz &= searchbar1.length / 3;
       let faviconN = false;
       let sportb = String.fromCharCode(112,114,101,115,115,117,114,101,0);
      let championu = faviconN ? !faviconN : faviconN;
      do {
         faviconN = sportb.endsWith(`${faviconN}`);
         if (championu) {
            break;
         }
      } while ((!faviconN) && championu);
          let checkboxk = String.fromCharCode(105,109,112,97,99,116,0);
          let splashX = false;
          let exampleimagef: Array<any> = [559, 321];
         faviconN = sportb.endsWith(`${splashX}`);
         checkboxk = `${checkboxk.length}`;
         splashX = 58 == exampleimagef.length && String.fromCharCode(112,0) == checkboxk;
         exampleimagef = [exampleimagef.length >> (Math.min(checkboxk.length, 2))];
         sportb += `${(sportb.length & (faviconN ? 3 : 4))}`;
         sportb = "3";
         sportb = `${sportb.length}`;
          let libanel: Map<any, any> = new Map([[String.fromCharCode(99,104,107,108,105,115,116,0),false ], [String.fromCharCode(100,101,99,114,121,112,116,0),false ]]);
          let main_eW = 5;
          let whistleorange3 = 1.0;
         sportb += `${libanel.size}`;
         libanel.set(`${whistleorange3}`, 3);
         main_eW %= Math.max(main_eW / (Math.max(parseInt(`${whistleorange3}`), 3)), 2);
      confige = "2";
   while (description_e1X.endsWith(`${membershipw.length}`)) {
       let notificationD = 4;
         notificationD ^= notificationD << (Math.min(Math.abs(notificationD), 4));
      if (notificationD >= 4) {
         notificationD += notificationD;
      }
      while (3 < (notificationD - 1) || 2 < (1 - notificationD)) {
          let agreementy: Array<any> = [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,0), String.fromCharCode(103,114,111,117,110,100,0), String.fromCharCode(100,105,115,112,111,115,97,98,108,101,0)];
         notificationD <<= Math.min(2, Math.abs(notificationD));
         agreementy.push(agreementy.length - agreementy.length);
         break;
      }
      description_e1X = `${1 >> (Math.min(Math.abs(annerz), 4))}`;
      break;
   }
      searchbar1 += `${annerz * 2}`;
       let nativemoduleM = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,0);
       let iconfeedbackG = 4;
       let eventK = String.fromCharCode(114,117,108,101,0);
         nativemoduleM = `${nativemoduleM.length | iconfeedbackG}`;
      for (let u = 0; u < 3; u++) {
         iconfeedbackG -= 2 & eventK.length;
      }
      let bootH = iconfeedbackG >= 6789644;
      do {
          let descj: Array<any> = [488, 596, 478];
          let dropdown7 = 0.0;
          let subsF = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,0);
          let fieldT: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,101,114,0),247], [String.fromCharCode(112,114,111,99,99,101,115,115,0),16], [String.fromCharCode(108,101,116,116,101,114,115,0),708]]);
         iconfeedbackG -= 2 ^ subsF.length;
         descj = [descj.length + fieldT.size];
         dropdown7 /= Math.max(2, 4);
         subsF = `${1 + descj.length}`;
         fieldT.set(`${dropdown7}`, parseInt(`${dropdown7}`));
         if (bootH) {
            break;
         }
      } while (bootH && (nativemoduleM.length >= 5));
       let typingX = 3.0;
         nativemoduleM += `${nativemoduleM.length}`;
         nativemoduleM = `${eventK.length % (Math.max(3, 6))}`;
       let private_8zh = 5;
          let gemfilem = 0;
          let x_imageH = String.fromCharCode(114,101,101,108,0);
          let notificationfillemptyR = String.fromCharCode(100,99,116,115,117,98,0);
         iconfeedbackG *= notificationfillemptyR.length;
         gemfilem |= 1;
         x_imageH = `${gemfilem}`;
         notificationfillemptyR = `${1 + gemfilem}`;
      if (2 > (3 >> (Math.min(1, Math.abs(private_8zh))))) {
         eventK = `${parseInt(`${typingX}`) & iconfeedbackG}`;
      }
      redirectA = (((!redirectA ? eventK.length : 45) / (Math.max(3, eventK.length))) <= 45);

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

            wwInjury.toName('uploadVideoPreview', {
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