import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import ScreenContainer from "../../components/container/mayi_save";
import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { mayi_TrashBootsplash } from "../../../routes/mayi_topon";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/mayi_champion";
import { UploadProgressOverlay } from "../../components/modal/mayi_launcher";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/mayi_middleware_apps";
import { useAppDispatch } from "@hooks/mayi_redirect";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/mayi_small_catalog";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/mayi_slider';
import DefaultVideoThumbnail from '@static/images/dropdownTail.svg';
import { saveUploadHistory } from "@redux/actions/mayi_whitetick";

export const UploadVideoPreview = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadVideoPreview'>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors, textVariants }), [colors, textVariants]);
    const [uploadAssets, _] = useState(route.params.assets);

    const [showBackModel, setShowBackModel] = useState(false);

    const [videoTitle, setVideoTitle] = useState('');
    const [videoTitleErrMsg, setVideoTitleErrMsg] = useState<string>();
    const [videoThumbnail, setVideoThumbnail] = useState<string>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        generateThumbnail();
    }, [uploadAssets]);

    const generateThumbnail = async () => {
       let reddownarrowk: Map<any, any> = new Map([[String.fromCharCode(102,95,50,95,100,105,115,99,108,111,115,117,114,101,0),715], [String.fromCharCode(114,101,99,101,105,118,101,114,0),437], [String.fromCharCode(116,95,53,50,95,115,117,112,112,114,101,115,115,105,110,103,0),519]]);
    let phone3 = String.fromCharCode(99,111,110,102,105,110,101,100,95,56,95,55,0);
    let stationc = 0.0;
    let watchM = true;
    let register_in = 5.0;
    let templateprocessorD = String.fromCharCode(97,100,97,112,116,101,100,0);
    let macaud = true;
    let confirmation6 = 2.0;
    let stations1: Array<any> = [437, 548];
    let agreementg = 5;
    let projectc = String.fromCharCode(114,101,118,105,101,119,115,95,111,95,54,57,0);
    let productK = String.fromCharCode(116,101,120,116,98,101,95,115,95,56,56,0);
    let checkboxW = 4.0;
      templateprocessorD += `${((macaud ? 2 : 5) / (Math.max(reddownarrowk.size, 4)))}`;
   let reactV = watchM ? !watchM : watchM;
   do {
      watchM = !macaud;
      if (reactV) {
         break;
      }
   } while (reactV && (3 <= (reddownarrowk.size / (Math.max(4, 9)))));
   let calendarS = reddownarrowk.size <= 7692992;
   do {
      reddownarrowk.set(`${confirmation6}`, parseInt(`${register_in}`) + parseInt(`${confirmation6}`));
      if (calendarS) {
         break;
      }
   } while (calendarS && (reddownarrowk.get(`${agreementg}`) == null));
   let whiteanimationlive6 = String.fromCharCode(103,51,101,103,98,112,56,95,111,120,0) == phone3;
   do {
      phone3 += `${((macaud ? 2 : 3) ^ parseInt(`${stationc}`))}`;
      if (whiteanimationlive6) {
         break;
      }
   } while ((macaud) && whiteanimationlive6);

        try {

      watchM = agreementg >= 13;
       let colors9 = 1;
       let attributedstringM = 2.0;
       let goallogop = String.fromCharCode(118,95,54,50,95,109,111,117,115,101,0);
       let sigmobP = String.fromCharCode(103,114,111,117,112,115,0);
      while ((sigmobP.length >> (Math.min(3, Math.abs(colors9)))) >= 5) {
          let whiteanimationlive3 = 5.0;
          let arrow3 = 4.0;
          let libfbjni2 = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
          let episodei = 2.0;
          let viewer1 = String.fromCharCode(105,103,110,111,114,101,115,0);
         colors9 -= 3;
         whiteanimationlive3 *= parseFloat(`${parseInt(`${episodei}`)}`);
         arrow3 /= Math.max((String.fromCharCode(68,0) == viewer1 ? viewer1.length : parseInt(`${whiteanimationlive3}`)), 4);
         libfbjni2 = `${libfbjni2.length}`;
         episodei += parseInt(`${arrow3}`);
         break;
      }
      while ((1 / (Math.max(3, colors9))) >= 4 || (colors9 / 1) >= 4) {
         colors9 *= parseInt(`${attributedstringM}`);
         break;
      }
          let textlayoutmanagerH = String.fromCharCode(111,112,101,110,103,108,0);
          let combine3 = 4;
          let z_positionq = 1;
         colors9 -= combine3;
         textlayoutmanagerH = `${textlayoutmanagerH.length}`;
         combine3 &= z_positionq - 2;
         z_positionq &= textlayoutmanagerH.length;
      for (let v = 0; v < 1; v++) {
         sigmobP = `${(String.fromCharCode(50,0) == sigmobP ? sigmobP.length : colors9)}`;
      }
      while (3 <= (parseInt(`${attributedstringM}`) - goallogop.length)) {
         attributedstringM /= Math.max(colors9, 1);
         break;
      }
      while (!goallogop.includes(sigmobP)) {
          let gesturesV = 2.0;
          let libswresampleg: Array<any> = [294, 55, 437];
          let icontransferclubl: Array<any> = [515, 79, 775];
         goallogop = `${sigmobP.length}`;
         gesturesV *= parseInt(`${gesturesV}`) * libswresampleg.length;
         libswresampleg.push(2);
         icontransferclubl = [libswresampleg.length];
         break;
      }
          let xvodQ: Map<any, any> = new Map([[String.fromCharCode(111,95,56,95,102,116,101,108,108,0),545], [String.fromCharCode(100,101,112,0),782], [String.fromCharCode(112,114,111,100,0),775]]);
         colors9 |= (String.fromCharCode(82,0) == goallogop ? parseInt(`${attributedstringM}`) : goallogop.length);
         xvodQ = new Map([[`${xvodQ.size}`, xvodQ.size]]);
      for (let d = 0; d < 1; d++) {
          let statisticsinactive8 = String.fromCharCode(111,117,116,112,117,116,115,95,115,95,54,56,0);
          let auto_j1d: Array<any> = [376, 967];
          let y_lockI: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,111,112,101,114,97,116,111,114,0),false ], [String.fromCharCode(115,117,98,118,97,108,117,101,0),true ]]);
         goallogop = `${(goallogop == String.fromCharCode(122,0) ? sigmobP.length : goallogop.length)}`;
         statisticsinactive8 += `${2 - statisticsinactive8.length}`;
         auto_j1d = [3 * y_lockI.size];
         y_lockI.set(statisticsinactive8, statisticsinactive8.length | auto_j1d.length);
      }
      watchM = templateprocessorD.length <= register_in;
   if (3 > (agreementg + 1)) {
      watchM = (phone3.length + register_in) >= 4.42;
   }
   for (let v = 0; v < 1; v++) {
      confirmation6 *= 1 * agreementg;
   }
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, 
            })

      macaud = register_in >= 36.61 && String.fromCharCode(53,0) == phone3;
      templateprocessorD += `${(parseInt(`${stationc}`) / (Math.max(9, (watchM ? 2 : 3))))}`;
   if (macaud) {
      macaud = agreementg > 36 || macaud;
   }
       let smallorangemanB: Array<any> = [String.fromCharCode(116,115,101,113,95,116,95,56,50,0), String.fromCharCode(104,116,109,108,109,97,114,107,117,112,0), String.fromCharCode(105,108,108,105,113,97,0)];
      while (smallorangemanB.length <= 3) {
          let penaltymatchiconW = 2.0;
          let footballfieldi = String.fromCharCode(101,95,49,48,95,115,107,101,119,101,100,0);
         smallorangemanB.push(3 ^ smallorangemanB.length);
         penaltymatchiconW /= Math.max((parseFloat(`${footballfieldi == String.fromCharCode(57,0) ? footballfieldi.length : parseInt(`${penaltymatchiconW}`)}`)), 4);
         break;
      }
      if (!smallorangemanB.includes(smallorangemanB.length)) {
         smallorangemanB = [smallorangemanB.length];
      }
         smallorangemanB.push(3 + smallorangemanB.length);
      confirmation6 -= 3;

            if (response) {

   for (let h = 0; h < 2; h++) {
      confirmation6 += templateprocessorD.length & reddownarrowk.size;
   }
      register_in += phone3.length ^ parseInt(`${stationc}`);
   for (let n = 0; n < 3; n++) {
       let producta = String.fromCharCode(118,111,116,101,100,95,54,95,57,56,0);
       let iconadslinkY = String.fromCharCode(111,100,100,97,118,103,95,50,95,52,50,0);
      let bootsplashh = producta == String.fromCharCode(97,50,105,50,52,115,107,105,0);
      do {
         producta += "2";
         if (bootsplashh) {
            break;
         }
      } while ((iconadslinkY == String.fromCharCode(66,0) || producta != String.fromCharCode(114,0)) && bootsplashh);
      if (iconadslinkY.startsWith(`${producta.length}`)) {
         producta = "2";
      }
      for (let p = 0; p < 3; p++) {
         iconadslinkY = `${producta.length << (Math.min(4, iconadslinkY.length))}`;
      }
      if (producta == String.fromCharCode(71,0)) {
         iconadslinkY = `${producta.length}`;
      }
      while (producta.length >= iconadslinkY.length) {
          let libswresampleD = 3;
          let macaum = 3;
          let whitevideolivev = String.fromCharCode(121,95,54,51,95,108,111,99,107,115,0);
         producta = `${macaum}`;
         libswresampleD /= Math.max(1, (whitevideolivev == String.fromCharCode(80,0) ? libswresampleD : whitevideolivev.length));
         macaum ^= (whitevideolivev == String.fromCharCode(116,0) ? libswresampleD : whitevideolivev.length);
         break;
      }
          let g_positiont = String.fromCharCode(104,95,52,51,95,115,104,97,114,101,100,0);
          let previewJ = 5.0;
          let whitetickt: Map<any, any> = new Map([[String.fromCharCode(105,116,97,108,105,97,110,95,120,95,49,55,0),242], [String.fromCharCode(106,95,57,95,98,97,99,107,117,112,0),991], [String.fromCharCode(115,95,49,51,95,117,112,108,111,97,100,97,98,108,101,0),541]]);
         producta = `${3 & parseInt(`${previewJ}`)}`;
         g_positiont = `${g_positiont.length + whitetickt.size}`;
         previewJ -= whitetickt.size << (Math.min(g_positiont.length, 5));
      agreementg ^= agreementg / (Math.max(parseInt(`${confirmation6}`), 6));
   }
   for (let o = 0; o < 3; o++) {
      phone3 += "3";
   }
                setVideoThumbnail(response.path);
            } else {

      watchM = 8 < templateprocessorD.length;
   if (1.45 > confirmation6) {
      watchM = (reddownarrowk.size * register_in) <= 17.28;
   }
       let t_managerZ = String.fromCharCode(109,118,101,99,95,114,95,51,53,0);
         t_managerZ = "1";
      while (5 >= t_managerZ.length) {
          let unreadF = 3;
          let read0: Array<any> = [193, 126, 499];
          let libcrashsdk5 = false;
          let videocommonW = 5.0;
         t_managerZ = `${read0.length}`;
         unreadF ^= ((libcrashsdk5 ? 5 : 1) | unreadF);
         read0 = [parseInt(`${videocommonW}`) | 1];
         libcrashsdk5 = 69 < unreadF;
         videocommonW /= Math.max(3, parseFloat(`${3 << (Math.min(Math.abs(unreadF), 5))}`));
         break;
      }
         t_managerZ += `${1 - t_managerZ.length}`;
      register_in /= Math.max((parseInt(`${register_in}`) << (Math.min(4, Math.abs((watchM ? 4 : 1))))), 4);
   let ecopy_m3Z = stations1.length >= 5983386;
   do {
      stations1.push(1);
      if (ecopy_m3Z) {
         break;
      }
   } while (ecopy_m3Z && (!projectc.startsWith(`${stations1.length}`)));
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
       let readV = String.fromCharCode(104,95,55,50,95,115,107,101,119,0);
    let muted6 = 4;
    let membershipt: Array<any> = [298, 354];
    let whitew = 5;
    let nendj: Map<any, any> = new Map([[String.fromCharCode(99,108,105,99,107,0),false ], [String.fromCharCode(106,114,110,108,0),false ]]);
    let logox: Array<any> = [108, 268, 705];
    let ballX = 4.0;
    let phoneshareG = String.fromCharCode(119,95,54,52,95,117,112,116,105,109,101,0);
    let catagoryW: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,101,100,0),9], [String.fromCharCode(99,95,51,55,95,97,99,107,115,0),707], [String.fromCharCode(101,95,50,48,95,99,111,112,121,99,111,111,107,101,114,0),33]]);
    let videojs8 = String.fromCharCode(103,95,55,52,95,113,117,97,114,116,122,0);
    let incidentQ = String.fromCharCode(104,105,110,116,115,95,121,95,52,53,0);
    let stylesn = 2.0;
    let friendsi = String.fromCharCode(114,95,50,52,95,114,101,115,112,111,110,100,115,0);
    let scorepopsoundG = 2.0;
    let k_hashc = true;
   let questz = membershipt.length <= 8957264;
   do {
       let delegate_t4i: Array<any> = [504, 514, 193];
       let sendL = 4.0;
       let circleB = 5;
      if ((parseFloat(`${delegate_t4i.length}`) + sendL) >= 5.47) {
          let indexo: Array<any> = [747, 28, 585];
          let profileb: Map<any, any> = new Map([[String.fromCharCode(122,112,98,105,113,117,97,100,115,95,98,95,53,57,0),222], [String.fromCharCode(103,114,111,119,116,104,0),131]]);
          let iconstar_ = String.fromCharCode(98,111,117,110,99,105,110,101,115,115,0);
          let bodanA = String.fromCharCode(102,97,105,108,105,110,103,95,116,95,54,0);
         sendL -= parseFloat(`${1}`);
         indexo.push(1);
         profileb = new Map([[`${profileb.size}`, 2 - indexo.length]]);
         iconstar_ = `${(String.fromCharCode(70,0) == bodanA ? bodanA.length : indexo.length)}`;
      }
          let placeholder2: Array<any> = [568, 669, 810];
          let greyy = 3;
         sendL += parseFloat(`${circleB & delegate_t4i.length}`);
         placeholder2.push(1 % (Math.max(10, greyy)));
         greyy &= 1;
         circleB >>= Math.min(Math.abs(delegate_t4i.length << (Math.min(Math.abs(3), 1))), 5);
       let untickg = false;
          let dplus4: Map<any, any> = new Map([[String.fromCharCode(118,97,114,119,105,100,116,104,95,99,95,55,51,0),76], [String.fromCharCode(113,99,101,108,112,0),5]]);
          let collectionO = true;
         circleB &= 3;
         dplus4.set(`${collectionO}`, dplus4.size & 1);
      for (let a = 0; a < 2; a++) {
         delegate_t4i = [delegate_t4i.length];
      }
         untickg = 10.40 == sendL && 99 == circleB;
      for (let w = 0; w < 3; w++) {
          let related9 = String.fromCharCode(98,105,116,97,108,108,111,99,95,49,95,57,51,0);
          let backwhite9 = String.fromCharCode(100,121,110,97,109,105,99,95,115,95,57,54,0);
          let main_gk = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,0);
          let combined0 = true;
         untickg = backwhite9.length >= 84;
         related9 = `${((combined0 ? 3 : 1) * 1)}`;
         backwhite9 += "3";
         main_gk = `${3 + main_gk.length}`;
      }
         untickg = 52 <= circleB && untickg;
      membershipt = [membershipt.length + nendj.size];
      if (questz) {
         break;
      }
   } while (((2 >> (Math.min(3, membershipt.length))) > 1 || (2 >> (Math.min(1, incidentQ.length))) > 1) && questz);
   let sharewhiteh = incidentQ.length <= 8935058;
   do {
       let gifgoalbg5: Array<any> = [45, 561];
       let iconuserk = 5;
      while (3 > (iconuserk - gifgoalbg5.length) && (iconuserk - 3) > 4) {
         iconuserk += gifgoalbg5.length;
         break;
      }
         gifgoalbg5.push(gifgoalbg5.length);
      while (5 > gifgoalbg5.length) {
         iconuserk <<= Math.min(5, Math.abs(gifgoalbg5.length / 1));
         break;
      }
         gifgoalbg5 = [iconuserk << (Math.min(gifgoalbg5.length, 4))];
         gifgoalbg5 = [iconuserk * gifgoalbg5.length];
         iconuserk -= iconuserk ^ 2;
      incidentQ += `${videojs8.length}`;
      if (sharewhiteh) {
         break;
      }
   } while (sharewhiteh && (incidentQ.length > phoneshareG.length));

        if (videoTitle === undefined || videoTitle === '') {

      catagoryW = new Map([[`${logox.length}`, 2]]);
   let trashB = readV.length >= 4967032;
   do {
       let footballF: Map<any, any> = new Map([[String.fromCharCode(117,110,105,116,116,101,115,116,0),229], [String.fromCharCode(115,97,108,116,101,100,0),237], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,0),735]]);
       let graphicsG = 1.0;
       let profileactiveE = String.fromCharCode(99,104,111,109,112,0);
       let moone = 3;
       let rocketl: Array<any> = [647, 334, 781];
       let predictiondefault_ = 5;
       let expandf = 0;
      let indexu = predictiondefault_ <= 9075026;
      do {
         predictiondefault_ ^= parseInt(`${graphicsG}`) << (Math.min(Math.abs(3), 4));
         if (indexu) {
            break;
         }
      } while (indexu && (!Array.from(footballF.keys()).includes(`${predictiondefault_}`)));
      if (Array.from(footballF.values()).includes(expandf)) {
         footballF = new Map([[`${rocketl.length}`, expandf / (Math.max(rocketl.length, 8))]]);
      }
      if (profileactiveE.endsWith(`${graphicsG}`)) {
          let modalc = 3.0;
         graphicsG += parseFloat(`${predictiondefault_}`);
         modalc -= parseFloat(`${parseInt(`${modalc}`)}`);
      }
      let borderlessS = 5333206 <= rocketl.length;
      do {
          let libruntimeexecutorx = 5.0;
          let baselineo: Map<any, any> = new Map([[String.fromCharCode(116,101,97,109,115,0),true ], [String.fromCharCode(114,101,97,99,116,105,111,110,0),true ]]);
          let nendt = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,0);
          let updatesx = String.fromCharCode(109,117,114,109,117,114,0);
         rocketl = [footballF.size];
         libruntimeexecutorx *= parseFloat(`${nendt.length & baselineo.size}`);
         baselineo = new Map([[nendt, nendt.length & updatesx.length]]);
         updatesx += `${parseInt(`${libruntimeexecutorx}`) + nendt.length}`;
         if (borderlessS) {
            break;
         }
      } while (borderlessS && (rocketl.length <= 5));
         expandf -= 3 ^ expandf;
      if ((predictiondefault_ + rocketl.length) >= 4) {
         rocketl.push(expandf);
      }
         moone &= parseInt(`${graphicsG}`) % 3;
          let libjsijniprofilerT: Map<any, any> = new Map([[String.fromCharCode(112,97,99,105,110,103,0),435], [String.fromCharCode(109,101,108,116,95,103,95,53,51,0),275]]);
          let componentregistryw = false;
          let rncoreM: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,105,116,116,101,100,95,116,95,51,56,0),56], [String.fromCharCode(108,122,109,97,0),101], [String.fromCharCode(100,101,102,97,117,108,95,114,95,56,51,0),651]]);
         predictiondefault_ /= Math.max(5, predictiondefault_ | rncoreM.size);
         libjsijniprofilerT.set(`${componentregistryw}`, ((componentregistryw ? 1 : 2) + 1));
         rncoreM = new Map([[`${libjsijniprofilerT.size}`, libjsijniprofilerT.size & 2]]);
         expandf %= Math.max(1, 2 - predictiondefault_);
          let incidentQb = 0;
          let valuesc = 2.0;
         predictiondefault_ /= Math.max(1, 3);
         incidentQb *= incidentQb * 1;
         valuesc /= Math.max(2, parseFloat(`${incidentQb}`));
      if (2 < (rocketl.length ^ footballF.size) || 1 < (2 ^ rocketl.length)) {
          let suggestionl = String.fromCharCode(116,109,99,100,0);
          let gradle7: Array<any> = [507, 834];
         rocketl.push(rocketl.length);
         suggestionl = "2";
         gradle7 = [gradle7.length % (Math.max(3, 5))];
      }
      let grayC = footballF.size <= 7472475;
      do {
         footballF.set(`${expandf}`, 2);
         if (grayC) {
            break;
         }
      } while (grayC && (footballF.get(`${predictiondefault_}`) != null));
      for (let j = 0; j < 3; j++) {
          let policyw: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,0),false ], [String.fromCharCode(100,105,102,102,105,110,103,0),false ]]);
         predictiondefault_ ^= policyw.size;
      }
         expandf &= 2;
      readV = "1";
      if (trashB) {
         break;
      }
   } while ((catagoryW.size < readV.length) && trashB);
            setVideoTitleErrMsg('请填写标题');

      phoneshareG += `${3 % (Math.max(2, readV.length))}`;
      catagoryW = new Map([[readV, muted6]]);
            return;
        } else {

      muted6 += 3 << (Math.min(Math.abs(parseInt(`${ballX}`)), 2));
      membershipt = [3];
            setVideoTitleErrMsg(undefined);
        }

        try {

   for (let h = 0; h < 3; h++) {
      stylesn *= parseFloat(`${incidentQ.length}`);
   }
       let nbatrophye = 2.0;
       let delegate_2_W = 1;
          let airbnbstary = String.fromCharCode(117,95,57,54,95,115,100,101,115,0);
          let textlayoutmanagerP = String.fromCharCode(112,97,115,115,119,111,114,100,95,109,95,56,52,0);
         nbatrophye -= 3 << (Math.min(2, textlayoutmanagerP.length));
         airbnbstary = `${(airbnbstary == String.fromCharCode(86,0) ? airbnbstary.length : airbnbstary.length)}`;
         textlayoutmanagerP += "2";
      for (let d = 0; d < 2; d++) {
         nbatrophye -= parseInt(`${nbatrophye}`);
      }
      if (delegate_2_W <= nbatrophye) {
         delegate_2_W *= 2;
      }
         nbatrophye -= parseInt(`${nbatrophye}`);
          let corneru = String.fromCharCode(105,95,57,51,95,97,101,97,100,0);
         nbatrophye += delegate_2_W;
         corneru += `${(String.fromCharCode(57,0) == corneru ? corneru.length : corneru.length)}`;
      let loadingw = delegate_2_W >= 7421483;
      do {
         delegate_2_W += delegate_2_W / (Math.max(5, parseInt(`${nbatrophye}`)));
         if (loadingw) {
            break;
         }
      } while (loadingw && ((nbatrophye - delegate_2_W) < 1.86 || (1.86 - nbatrophye) < 4.27));
      membershipt.push(nendj.size);
            

      readV = `${whitew}`;
   let predictionbannert = catagoryW.size >= 8382503;
   do {
      catagoryW.set(`${muted6}`, 3);
      if (predictionbannert) {
         break;
      }
   } while ((Array.from(catagoryW.values()).includes(logox.length)) && predictionbannert);

            

   if (phoneshareG == friendsi) {
       let fasts = 2;
       let greyarrowupz: Map<any, any> = new Map([[String.fromCharCode(108,97,99,105,110,103,0),930], [String.fromCharCode(109,111,100,105,102,105,101,114,115,0),131], [String.fromCharCode(98,97,110,100,105,110,103,95,119,95,55,0),890]]);
       let playlist4 = String.fromCharCode(107,95,54,50,95,116,105,109,101,115,99,97,108,101,0);
       let leagueG = false;
         playlist4 = `${((leagueG ? 4 : 1) + greyarrowupz.size)}`;
         leagueG = greyarrowupz.get(`${leagueG}`) != null;
         greyarrowupz = new Map([[playlist4, playlist4.length]]);
      let k_playerQ = 8380584 >= playlist4.length;
      do {
         playlist4 += `${greyarrowupz.size * 2}`;
         if (k_playerQ) {
            break;
         }
      } while (((4 % (Math.max(9, fasts))) < 1 || (fasts % (Math.max(playlist4.length, 3))) < 4) && k_playerQ);
      if ((1 | greyarrowupz.size) == 5) {
          let winda: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,109,97,105,110,104,101,97,100,101,114,0),false ], [String.fromCharCode(109,97,106,95,109,95,51,52,0),true ], [String.fromCharCode(115,109,101,97,114,0),false ]]);
          let knewsx = 0.0;
          let description_4fV = 3.0;
          let completeQ = String.fromCharCode(116,104,117,110,107,0);
         playlist4 += `${greyarrowupz.size}`;
         winda = new Map([[`${winda.size}`, 2 >> (Math.min(1, Math.abs(winda.size)))]]);
         knewsx += parseFloat(`${winda.size / 3}`);
         description_4fV /= Math.max(1, parseFloat(`${completeQ.length}`));
         completeQ += "3";
      }
         fasts -= ((leagueG ? 1 : 4));
      let smallp = String.fromCharCode(57,107,55,48,53,120,48,0) == playlist4;
      do {
          let chartT = String.fromCharCode(99,111,110,102,108,105,99,116,115,0);
          let calendarV = 0;
         playlist4 = "2";
         chartT += `${calendarV}`;
         calendarV /= Math.max(3, chartT.length + calendarV);
         if (smallp) {
            break;
         }
      } while (smallp && ((playlist4.length << (Math.min(1, Math.abs(fasts)))) >= 1));
         leagueG = 90 >= greyarrowupz.size || fasts >= 90;
         leagueG = greyarrowupz.size == 40 && !leagueG;
      while ((3 + fasts) <= 1 || 3 <= (fasts + 3)) {
          let bgvipsportY: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,115,95,113,95,57,50,0),false ], [String.fromCharCode(97,98,111,117,116,115,0),true ], [String.fromCharCode(115,111,114,116,0),false ]]);
          let penaltyshootnogoalo = String.fromCharCode(120,102,111,114,109,0);
          let runtime4 = 3.0;
          let bottomj: Array<any> = [526, 614];
          let championN = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,0);
         playlist4 += `${(fasts / (Math.max(4, (leagueG ? 3 : 1))))}`;
         bgvipsportY.set(championN, 3 ^ championN.length);
         penaltyshootnogoalo = `${parseInt(`${runtime4}`) | 2}`;
         runtime4 /= Math.max(bottomj.length / (Math.max(6, penaltyshootnogoalo.length)), 2);
         bottomj.push(championN.length >> (Math.min(penaltyshootnogoalo.length, 4)));
         break;
      }
      while (leagueG) {
          let optionsU = 5.0;
          let sharewhitev = false;
          let stationsN = 4.0;
          let forwardD = false;
          let notificationp = 1.0;
         playlist4 += `${(playlist4 == String.fromCharCode(65,0) ? greyarrowupz.size : playlist4.length)}`;
         optionsU -= 3;
         sharewhitev = !sharewhitev;
         stationsN += (parseFloat(`${parseInt(`${stationsN}`) - (sharewhitev ? 2 : 2)}`));
         forwardD = optionsU > 39.32;
         notificationp /= Math.max((parseInt(`${notificationp}`) << (Math.min(3, Math.abs((sharewhitev ? 3 : 4))))), 5);
         break;
      }
      if (5 == (greyarrowupz.size | 1) || greyarrowupz.size == 1) {
          let anytimeQ: Map<any, any> = new Map([[String.fromCharCode(108,95,49,55,95,100,108,116,97,0),String.fromCharCode(101,95,52,55,95,109,111,122,97,114,116,0)], [String.fromCharCode(115,95,49,95,113,117,97,100,116,114,101,101,0),String.fromCharCode(121,95,55,55,95,115,105,110,100,101,120,0)]]);
          let basketballplayerplaceholder0 = 2.0;
          let condensedv = true;
          let pangleC = false;
          let mailf = String.fromCharCode(103,95,55,95,108,97,98,101,108,110,115,0);
         greyarrowupz.set(mailf, ((condensedv ? 3 : 5)));
         anytimeQ = new Map([[`${basketballplayerplaceholder0}`, parseInt(`${basketballplayerplaceholder0}`) - 1]]);
         condensedv = (anytimeQ.size / (Math.max(7, parseInt(`${basketballplayerplaceholder0}`)))) == 98;
         pangleC = !pangleC && basketballplayerplaceholder0 > 66.17;
         mailf += `${anytimeQ.size}`;
      }
      friendsi = `${incidentQ.length & 1}`;
   }
   while (catagoryW.size > 2) {
      catagoryW.set(`${whitew}`, whitew);
      break;
   }

            

      nendj = new Map([[videojs8, 2 & videojs8.length]]);
   let mbnativeC = phoneshareG.length <= 6473691;
   do {
      phoneshareG += `${videojs8.length + 1}`;
      if (mbnativeC) {
         break;
      }
   } while (mbnativeC && ((phoneshareG.length & 5) < 4 && 5.85 < (ballX / (Math.max(5, parseFloat(`${phoneshareG.length}`))))));
            

   for (let j = 0; j < 1; j++) {
       let redirectR = 3;
       let basketballtrophyB = 2.0;
       let buildk = 3;
       let libsentryl = 1.0;
         redirectR ^= parseInt(`${libsentryl}`);
      while ((basketballtrophyB + 4.10) < 1.13 && 4 < (1 & buildk)) {
         basketballtrophyB /= Math.max(5, parseInt(`${basketballtrophyB}`) ^ 3);
         break;
      }
         basketballtrophyB *= redirectR;
      if (5 >= (buildk << (Math.min(Math.abs(2), 1)))) {
         libsentryl += parseFloat(`${buildk | parseInt(`${libsentryl}`)}`);
      }
         libsentryl -= parseFloat(`${2}`);
      for (let a = 0; a < 1; a++) {
         redirectR -= 1;
      }
      let predictionbannersharedX = basketballtrophyB <= 5846224.0;
      do {
         basketballtrophyB *= parseInt(`${libsentryl}`) & parseInt(`${basketballtrophyB}`);
         if (predictionbannersharedX) {
            break;
         }
      } while (predictionbannersharedX && ((redirectR << (Math.min(Math.abs(3), 3))) <= 1));
         basketballtrophyB /= Math.max(3, 1 ^ parseInt(`${libsentryl}`));
      while (3.23 == (basketballtrophyB * buildk)) {
         buildk ^= 2 | parseInt(`${libsentryl}`);
         break;
      }
      while (5.64 <= (buildk - basketballtrophyB)) {
         buildk ^= parseInt(`${libsentryl}`) | 2;
         break;
      }
      let whitetickC = buildk >= 9510161;
      do {
         buildk &= parseInt(`${basketballtrophyB}`);
         if (whitetickC) {
            break;
         }
      } while (whitetickC && (basketballtrophyB == buildk));
      if ((redirectR & 1) >= 2 && (1 >> (Math.min(2, Math.abs(redirectR)))) >= 1) {
          let iconcalendarA: Array<any> = [847, 80, 923];
         redirectR ^= buildk;
         iconcalendarA.push(iconcalendarA.length);
      }
      stylesn += parseFloat(`${phoneshareG.length}`);
   }
   for (let y = 0; y < 1; y++) {
      readV += `${incidentQ.length | nendj.size}`;
   }
            

      phoneshareG = `${2 | incidentQ.length}`;
      nendj.set(friendsi, (String.fromCharCode(49,0) == friendsi ? phoneshareG.length : friendsi.length));
            

       let dataY = String.fromCharCode(118,99,111,109,98,105,110,101,95,111,95,54,50,0);
       let carousely = 3.0;
      for (let k = 0; k < 3; k++) {
          let predictionarrowo = 5;
         carousely /= Math.max((parseFloat(`${dataY == String.fromCharCode(101,0) ? dataY.length : predictionarrowo}`)), 1);
      }
         dataY = `${parseInt(`${carousely}`)}`;
      for (let r = 0; r < 3; r++) {
         dataY = `${3 * dataY.length}`;
      }
          let klevinH = 0.0;
         carousely += (parseFloat(`${dataY == String.fromCharCode(48,0) ? parseInt(`${klevinH}`) : dataY.length}`));
         carousely *= parseFloat(`${dataY.length + parseInt(`${carousely}`)}`);
         carousely -= parseFloat(`${2}`);
      friendsi = `${catagoryW.size - parseInt(`${carousely}`)}`;
   let reportL = 9599542 <= whitew;
   do {
      whitew += nendj.size ^ whitew;
      if (reportL) {
         break;
      }
   } while (reportL && (muted6 < whitew));
            

   let path6 = 9753460 <= catagoryW.size;
   do {
      catagoryW = new Map([[`${nendj.size}`, catagoryW.size - nendj.size]]);
      if (path6) {
         break;
      }
   } while (path6 && (1 >= (catagoryW.size * 3) || (3 * catagoryW.size) >= 5));
   if ((readV.length << (Math.min(Math.abs(5), 1))) <= 4 && (readV.length + 5) <= 2) {
      readV = `${parseInt(`${stylesn}`)}`;
   }

            

   let backk = whitew <= 6846604;
   do {
       let libavfilteri = 4.0;
       let renewm = String.fromCharCode(105,110,116,101,114,105,111,114,0);
         renewm += "3";
         libavfilteri /= Math.max(1, 1);
      if (renewm.endsWith(`${libavfilteri}`)) {
          let s_positionw: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,115,105,122,101,0),461], [String.fromCharCode(115,104,111,116,95,109,95,53,0),457], [String.fromCharCode(100,108,105,100,120,0),884]]);
          let sorth = 3.0;
         libavfilteri += renewm.length;
         s_positionw = new Map([[`${s_positionw.size}`, s_positionw.size << (Math.min(Math.abs(2), 3))]]);
         sorth -= parseInt(`${sorth}`) ^ 2;
      }
      let libimagepipelinex = 7830177 >= renewm.length;
      do {
         renewm += `${renewm.length % 2}`;
         if (libimagepipelinex) {
            break;
         }
      } while ((5.55 == (5.89 * libavfilteri) && 4 == (parseInt(`${libavfilteri}`) * renewm.length)) && libimagepipelinex);
      let nterstitiale = String.fromCharCode(104,101,116,52,56,115,111,0) == renewm;
      do {
          let stare = String.fromCharCode(120,95,49,51,95,115,99,114,97,116,99,104,0);
          let networkc = String.fromCharCode(110,101,116,101,113,0);
         renewm += `${2 | parseInt(`${libavfilteri}`)}`;
         stare = `${(String.fromCharCode(88,0) == stare ? stare.length : networkc.length)}`;
         networkc += `${networkc.length}`;
         if (nterstitiale) {
            break;
         }
      } while ((!renewm.endsWith(`${libavfilteri}`)) && nterstitiale);
      for (let u = 0; u < 1; u++) {
         renewm = `${3 ^ parseInt(`${libavfilteri}`)}`;
      }
      whitew /= Math.max(4, (String.fromCharCode(107,0) == friendsi ? parseInt(`${libavfilteri}`) : friendsi.length));
      if (backk) {
         break;
      }
   } while (((5 & whitew) == 1) && backk);
       let iconscheduleJ = 2.0;
       let cornershoot_ = String.fromCharCode(104,95,57,49,95,101,122,111,115,0);
       let formM: Map<any, any> = new Map([[String.fromCharCode(109,111,118,105,101,0),String.fromCharCode(100,111,110,101,0)], [String.fromCharCode(119,95,57,56,95,116,121,112,101,0),String.fromCharCode(111,110,101,105,110,99,104,0)]]);
      let libimagepipelineS = String.fromCharCode(48,105,104,119,50,121,0) == cornershoot_;
      do {
         cornershoot_ = `${formM.size}`;
         if (libimagepipelineS) {
            break;
         }
      } while ((!cornershoot_.endsWith(`${formM.size}`)) && libimagepipelineS);
         cornershoot_ = `${formM.size << (Math.min(Math.abs(2), 3))}`;
         formM = new Map([[`${formM.size}`, 3 ^ cornershoot_.length]]);
          let libbufferr = false;
         cornershoot_ += `${((libbufferr ? 1 : 2) >> (Math.min(Math.abs(3), 4)))}`;
      for (let n = 0; n < 3; n++) {
         cornershoot_ = `${cornershoot_.length}`;
      }
         formM.set(cornershoot_, (cornershoot_ == String.fromCharCode(109,0) ? cornershoot_.length : formM.size));
      for (let i = 0; i < 3; i++) {
          let whistleorange0 = true;
         formM = new Map([[`${formM.size}`, 1 >> (Math.min(5, cornershoot_.length))]]);
         whistleorange0 = !whistleorange0;
      }
         cornershoot_ += "3";
         iconscheduleJ *= cornershoot_.length * formM.size;
      incidentQ = `${nendj.size ^ parseInt(`${stylesn}`)}`;

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

   for (let w = 0; w < 1; w++) {
      incidentQ += `${readV.length}`;
   }
      muted6 %= Math.max(parseInt(`${scorepopsoundG}`), 3);

            setShowSuccess(true);

      stylesn += parseFloat(`${parseInt(`${stylesn}`) * parseInt(`${scorepopsoundG}`)}`);
   for (let q = 0; q < 3; q++) {
      scorepopsoundG *= membershipt.length;
   }

            setTimeout(() => {

       let goallogo7 = 0;
       let routerE = String.fromCharCode(117,95,53,49,95,97,118,97,116,97,114,0);
      let homeinactiveK = goallogo7 >= 6198327;
      do {
         goallogo7 /= Math.max(2, 5);
         if (homeinactiveK) {
            break;
         }
      } while (homeinactiveK && (goallogo7 >= 4));
      while (goallogo7 <= 1) {
         goallogo7 <<= Math.min(Math.abs(goallogo7 % 1), 1);
         break;
      }
         goallogo7 <<= Math.min(1, Math.abs((String.fromCharCode(84,0) == routerE ? goallogo7 : routerE.length)));
      while (1 <= (goallogo7 % 3) && (goallogo7 % (Math.max(routerE.length, 4))) <= 3) {
         routerE = `${goallogo7}`;
         break;
      }
       let promotionP = true;
      let icontransferclubM = 9136140 <= goallogo7;
      do {
          let matchdetailbgU = false;
          let sharewhiteI = 5.0;
          let reactnativeultimatelistview0 = 1.0;
          let telemetryX: Array<any> = [257, 442, 41];
         goallogo7 <<= Math.min(2, parseInt(`${Math.abs(((promotionP ? 2 : 2) << (Math.min(1, Math.abs(2)))))}`));
         matchdetailbgU = reactnativeultimatelistview0 <= 36.42;
         sharewhiteI *= parseFloat(`${telemetryX.length}`);
         reactnativeultimatelistview0 += parseFloat(`${parseInt(`${sharewhiteI}`) % 3}`);
         telemetryX = [telemetryX.length];
         if (icontransferclubM) {
            break;
         }
      } while (icontransferclubM && (5 == (1 + goallogo7) || (routerE.length + 1) == 4));
      whitew <<= Math.min(routerE.length, 2);
   let single4 = 6169816 >= whitew;
   do {
      whitew /= Math.max(1, muted6);
      if (single4) {
         break;
      }
   } while (single4 && (4.12 < stylesn));
                setShowSuccess(false);

      logox.push(readV.length << (Math.min(5, membershipt.length)));
   let stepQ = String.fromCharCode(106,98,106,50,109,99,95,95,0) == videojs8;
   do {
      videojs8 += "2";
      if (stepQ) {
         break;
      }
   } while (stepQ && (parseFloat(`${videojs8.length}`) < ballX));
                mayi_TrashBootsplash.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
       let philippines0 = true;
    let modulesL: Array<any> = [470, 698, 799];
    let thumbnaili = String.fromCharCode(115,115,101,116,95,53,95,55,56,0);
    let x_view6 = false;
    let executorf = 4.0;
    let iconG = String.fromCharCode(112,102,105,108,116,101,114,0);
    let armva6: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,0),String.fromCharCode(98,117,115,0)], [String.fromCharCode(112,114,111,109,112,116,101,100,0),String.fromCharCode(115,97,118,105,110,103,115,95,120,95,50,55,0)]]);
    let targetn = 4.0;
    let icondefaultthumbnailB: Array<any> = [393, 784, 50];
    let faviconG: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,105,110,103,0),true ], [String.fromCharCode(108,95,48,95,104,121,115,99,97,108,101,0),true ]]);
    let statisticsj = true;
    let graphE = 4;
    let stationsC = String.fromCharCode(113,110,111,115,0);
    let macaun: Map<any, any> = new Map([[String.fromCharCode(115,101,103,116,114,101,101,0),true ], [String.fromCharCode(100,101,115,99,101,110,116,95,55,95,54,52,0),false ]]);
    let checkbox9 = String.fromCharCode(120,95,49,52,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
      graphE |= icondefaultthumbnailB.length;
   while (executorf == 1.3) {
      executorf *= parseFloat(`${iconG.length ^ 1}`);
      break;
   }
   for (let j = 0; j < 2; j++) {
      executorf += (parseFloat(`${(statisticsj ? 5 : 5) << (Math.min(Math.abs(graphE), 2))}`));
   }
      faviconG.set(`${targetn}`, ((statisticsj ? 4 : 5) & parseInt(`${targetn}`)));
      graphE >>= Math.min(Math.abs(parseInt(`${targetn}`) + 3), 3);
      graphE >>= Math.min(5, Math.abs(((x_view6 ? 4 : 2) * faviconG.size)));
       let halfK = 1.0;
       let redirect5 = true;
       let action9 = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,97,95,56,52,0);
         redirect5 = action9.length > 70;
      while ((halfK + 3.36) == 3.90) {
         action9 += `${((redirect5 ? 4 : 1) << (Math.min(Math.abs(parseInt(`${halfK}`)), 2)))}`;
         break;
      }
      if (action9.includes(`${redirect5}`)) {
          let mutedE: Map<any, any> = new Map([[String.fromCharCode(108,111,111,107,117,112,0),false ], [String.fromCharCode(97,112,105,0),true ]]);
          let overj = 5.0;
         redirect5 = action9.length > mutedE.size;
         mutedE.set(`${overj}`, parseInt(`${overj}`));
      }
      for (let h = 0; h < 3; h++) {
         redirect5 = action9.length == 2;
      }
      while (!redirect5) {
         redirect5 = halfK == action9.length;
         break;
      }
          let main_ln = 5.0;
          let resendC = String.fromCharCode(99,108,97,115,115,0);
          let canvas9 = 0.0;
         halfK += 2 | parseInt(`${halfK}`);
         main_ln += parseInt(`${canvas9}`);
         resendC += `${parseInt(`${canvas9}`) % (Math.max(9, resendC.length))}`;
      let iconnewssharen = 6653317.0 >= halfK;
      do {
         halfK -= 3 & parseInt(`${halfK}`);
         if (iconnewssharen) {
            break;
         }
      } while (iconnewssharen && (redirect5));
         action9 = `${action9.length}`;
         action9 += `${action9.length}`;
      graphE &= 3;
   let contexty = 8753524.0 <= targetn;
   do {
      targetn /= Math.max(parseFloat(`${parseInt(`${executorf}`) | 3}`), 5);
      if (contexty) {
         break;
      }
   } while (contexty && ((icondefaultthumbnailB.length * parseInt(`${targetn}`)) <= 3));
      executorf -= parseFloat(`${2 + armva6.size}`);
      philippines0 = targetn >= 38.72;
   for (let h = 0; h < 1; h++) {
       let casting0: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,122,95,53,56,0),739], [String.fromCharCode(107,101,101,112,97,108,105,118,101,95,97,95,56,52,0),895], [String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,0),860]]);
       let iconqq8 = String.fromCharCode(110,95,54,55,95,111,98,106,0);
       let arrowrightwithtailE = 2.0;
       let cricketd = 1.0;
       let o_titlev = String.fromCharCode(114,100,106,112,103,99,111,109,0);
      for (let c = 0; c < 3; c++) {
          let splash3: Map<any, any> = new Map([[String.fromCharCode(105,100,97,116,0),244], [String.fromCharCode(112,97,115,115,101,100,0),168]]);
          let telegramJ = String.fromCharCode(103,95,52,52,95,97,115,99,98,110,0);
          let redirectx: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,115,116,99,98,0),String.fromCharCode(116,105,108,101,115,0)], [String.fromCharCode(116,95,57,95,112,111,115,101,0),String.fromCharCode(100,115,112,114,95,102,95,49,51,0)], [String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,0),String.fromCharCode(104,119,97,99,99,101,108,115,95,119,95,52,54,0)]]);
         casting0 = new Map([[`${redirectx.size}`, redirectx.size]]);
         splash3 = new Map([[`${splash3.size}`, splash3.size << (Math.min(telegramJ.length, 4))]]);
         telegramJ = "1";
      }
          let annerL = String.fromCharCode(115,116,114,105,100,105,110,103,95,112,95,53,50,0);
         cricketd -= iconqq8.length;
         annerL += `${annerL.length}`;
      let libreanimated1 = arrowrightwithtailE >= 9559980.0;
      do {
         arrowrightwithtailE += 3 | parseInt(`${cricketd}`);
         if (libreanimated1) {
            break;
         }
      } while (libreanimated1 && (4.38 > (arrowrightwithtailE + 3.74) && (arrowrightwithtailE * cricketd) > 3.74));
      for (let g = 0; g < 2; g++) {
          let large6: Array<any> = [String.fromCharCode(118,97,114,120,104,0), String.fromCharCode(97,117,103,109,101,110,116,101,100,0)];
          let stepT = 3;
          let stationsr: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,108,97,118,102,117,116,105,108,115,0),String.fromCharCode(118,101,110,100,111,114,0)], [String.fromCharCode(107,110,111,119,110,0),String.fromCharCode(119,95,50,57,95,99,117,114,114,101,110,116,0)]]);
          let imagenetworkerrp = String.fromCharCode(97,115,112,101,99,116,115,0);
          let lineo = 4;
         casting0.set(o_titlev, parseInt(`${cricketd}`));
         large6.push(lineo);
         stepT *= large6.length + stepT;
         stationsr = new Map([[`${large6.length}`, large6.length | imagenetworkerrp.length]]);
         imagenetworkerrp += `${stationsr.size}`;
         lineo += 3 + lineo;
      }
      while (o_titlev.startsWith(`${iconqq8.length}`)) {
         o_titlev += `${iconqq8.length}`;
         break;
      }
         iconqq8 += `${parseInt(`${arrowrightwithtailE}`)}`;
      let updates7 = String.fromCharCode(51,54,57,50,54,109,105,0) == o_titlev;
      do {
          let robotoH: Map<any, any> = new Map([[String.fromCharCode(104,95,56,54,95,116,101,120,116,117,114,101,0),String.fromCharCode(116,114,105,103,103,101,114,95,116,95,53,50,0)], [String.fromCharCode(99,101,108,108,97,117,116,111,0),String.fromCharCode(116,105,109,101,99,111,100,101,115,0)]]);
          let launcherk: Array<any> = [String.fromCharCode(110,95,53,95,112,97,103,101,115,101,101,107,0), String.fromCharCode(101,120,116,114,99,0)];
          let pagination2: Array<any> = [541, 314, 350];
          let trashg = 3.0;
          let other_ = 3;
         o_titlev += `${pagination2.length}`;
         robotoH.set(`${launcherk.length}`, launcherk.length);
         pagination2.push(parseInt(`${trashg}`) ^ launcherk.length);
         trashg *= parseFloat(`${other_}`);
         other_ >>= Math.min(3, Math.abs(launcherk.length & other_));
         if (updates7) {
            break;
         }
      } while (updates7 && (iconqq8.length >= o_titlev.length));
      for (let s = 0; s < 2; s++) {
         cricketd -= 3 | parseInt(`${arrowrightwithtailE}`);
      }
       let helpero = String.fromCharCode(105,103,104,108,105,103,104,116,115,0);
         helpero += `${(String.fromCharCode(105,0) == iconqq8 ? casting0.size : iconqq8.length)}`;
       let sinaA = 1.0;
       let stepd = 3.0;
       let binddatasP = String.fromCharCode(112,114,115,99,116,112,0);
       let tailT = String.fromCharCode(100,97,116,97,108,0);
      let whatsappL = helpero.length >= 8898324;
      do {
         helpero = `${parseInt(`${cricketd}`) % 1}`;
         if (whatsappL) {
            break;
         }
      } while (whatsappL && (!o_titlev.includes(`${helpero.length}`)));
      while (!Array.from(casting0.keys()).includes(`${stepd}`)) {
         casting0.set(tailT, 1);
         break;
      }
         binddatasP = `${tailT.length << (Math.min(Math.abs(1), 5))}`;
      philippines0 = x_view6;
   }
      graphE |= faviconG.size;
   if ((faviconG.size | 4) >= 3 || faviconG.size >= 4) {
      statisticsj = faviconG.size > 39;
   }
       let black4 = String.fromCharCode(100,97,116,97,100,105,114,0);
         black4 += `${black4.length / (Math.max(9, black4.length))}`;
      let gifgoalbg5 = black4 == String.fromCharCode(121,105,116,105,111,121,120,110,0);
      do {
          let customC: Array<any> = [283, 650];
          let link7 = String.fromCharCode(103,95,54,50,95,115,116,114,105,110,103,101,110,99,111,100,101,0);
          let modal3 = 2;
          let phone3 = String.fromCharCode(112,102,114,97,109,101,0);
          let mbnativeadvancedt = 3.0;
         black4 += `${link7.length}`;
         customC = [phone3.length];
         link7 += `${parseInt(`${mbnativeadvancedt}`)}`;
         modal3 *= parseInt(`${mbnativeadvancedt}`) << (Math.min(1, Math.abs(modal3)));
         phone3 = `${modal3}`;
         if (gifgoalbg5) {
            break;
         }
      } while (gifgoalbg5 && (black4 != black4));
         black4 += `${black4.length}`;
      armva6.set(`${x_view6}`, (3 | (x_view6 ? 1 : 4)));
   for (let y = 0; y < 3; y++) {
      modulesL.push(icondefaultthumbnailB.length & thumbnaili.length);
   }
   if (4 > faviconG.size) {
      faviconG = new Map([[`${armva6.size}`, armva6.size]]);
   }
   let volumez = thumbnaili == String.fromCharCode(118,52,121,48,113,122,56,120,112,0);
   do {
      thumbnaili += `${parseInt(`${executorf}`)}`;
      if (volumez) {
         break;
      }
   } while (((1 ^ thumbnaili.length) < 5 || 5 < (1 - parseInt(`${targetn}`))) && volumez);
      faviconG = new Map([[`${modulesL.length}`, 1 / (Math.max(5, modulesL.length))]]);
   for (let m = 0; m < 1; m++) {
      executorf -= parseFloat(`${parseInt(`${targetn}`) + parseInt(`${executorf}`)}`);
   }
      graphE *= (stationsC == String.fromCharCode(103,0) ? iconG.length : stationsC.length);
      graphE ^= ((statisticsj ? 1 : 1));
   for (let y = 0; y < 1; y++) {
      graphE %= Math.max((graphE * (statisticsj ? 2 : 1)), 1);
   }
   let imagenetworkerrK = 5037569 >= armva6.size;
   do {
      armva6 = new Map([[`${modulesL.length}`, 2 & modulesL.length]]);
      if (imagenetworkerrK) {
         break;
      }
   } while (imagenetworkerrK && (5 < (1 >> (Math.min(2, Math.abs(armva6.size))))));
      iconG = `${parseInt(`${targetn}`) ^ 1}`;
      philippines0 = macaun.size > iconG.length;

        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
       let chart6 = 5.0;
    let sigmobg = String.fromCharCode(101,95,49,53,95,116,114,105,103,103,101,114,0);
    let detailss = 0.0;
    let downD = 0.0;
    let philippinesq = false;
    let shootyesgoalr = String.fromCharCode(102,95,57,54,95,97,97,117,100,105,111,0);
    let casting0 = String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,0);
    let cornershootn = 1.0;
    let rewardx = true;
    let predictionbanneri = String.fromCharCode(102,105,108,108,105,110,103,0);
       let upload8 = false;
      for (let o = 0; o < 1; o++) {
         upload8 = (upload8 ? !upload8 : upload8);
      }
          let telegramd = 4;
          let iconlogout3 = false;
         upload8 = telegramd > 97;
         telegramd *= ((iconlogout3 ? 5 : 4));
         upload8 = (!upload8 ? upload8 : !upload8);
      chart6 -= parseFloat(`${parseInt(`${detailss}`) ^ 1}`);
   if ((cornershootn * 4.95) < 5.5 || 2.95 < (cornershootn * 4.95)) {
      downD += casting0.length;
   }
   if (5 < (casting0.length * parseInt(`${detailss}`))) {
      casting0 = "1";
   }
      downD -= 2 >> (Math.min(Math.abs(parseInt(`${chart6}`)), 5));
       let constantsv = String.fromCharCode(118,95,55,49,95,114,97,110,100,111,109,110,101,115,115,0);
      let rightN = String.fromCharCode(104,55,115,51,109,112,101,0) == constantsv;
      do {
          let stationsN = 4.0;
         constantsv = `${parseInt(`${stationsN}`)}`;
         if (rightN) {
            break;
         }
      } while ((!constantsv.endsWith(`${constantsv.length}`)) && rightN);
      while (!constantsv.includes(`${constantsv.length}`)) {
          let signinupv = false;
         constantsv = "3";
         break;
      }
          let dropdownj = String.fromCharCode(110,111,110,110,117,108,108,0);
          let icondefaultthumbnailP = String.fromCharCode(117,95,54,53,95,116,112,101,108,100,115,112,0);
         constantsv = `${(String.fromCharCode(111,0) == constantsv ? constantsv.length : dropdownj.length)}`;
         dropdownj += `${icondefaultthumbnailP.length & 1}`;
         icondefaultthumbnailP = `${icondefaultthumbnailP.length}`;
      casting0 = `${((philippinesq ? 5 : 1) * parseInt(`${cornershootn}`))}`;
   if (detailss == cornershootn) {
       let reducerE = 3;
       let scorew = false;
       let bgvipxvodS = String.fromCharCode(120,95,50,49,95,113,99,97,110,0);
       let clearJ = 5;
       let hejih: Map<any, any> = new Map([[String.fromCharCode(99,95,54,53,95,100,105,114,101,99,116,111,114,105,101,115,0),true ], [String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,0),true ], [String.fromCharCode(112,114,111,118,105,115,105,111,110,95,113,95,56,56,0),false ]]);
      while (3 >= reducerE) {
         reducerE >>= Math.min(Math.abs(2 - bgvipxvodS.length), 3);
         break;
      }
      if (4 == reducerE) {
         scorew = 71 > clearJ;
      }
         reducerE *= 2 + bgvipxvodS.length;
          let scorez = 4.0;
          let bootp = String.fromCharCode(112,111,112,117,112,0);
         scorew = reducerE < 74;
         scorez /= Math.max(4, 2);
         bootp = `${1 % (Math.max(8, parseInt(`${scorez}`)))}`;
         bgvipxvodS = "1";
      let predictionbuttony = scorew ? !scorew : scorew;
      do {
          let yellowscoreballp = 0.0;
          let yellowy = false;
          let gifgoalT = false;
          let settingu = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,0);
          let colorsJ = String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,108,95,56,48,0);
         scorew = !colorsJ.startsWith(`${scorew}`);
         yellowscoreballp /= Math.max(2 << (Math.min(Math.abs(parseInt(`${yellowscoreballp}`)), 2)), 4);
         yellowy = settingu.length > 20;
         gifgoalT = yellowscoreballp == 44.22 || !yellowy;
         settingu = `${1 + settingu.length}`;
         colorsJ = `${(parseInt(`${yellowscoreballp}`) & (gifgoalT ? 1 : 3))}`;
         if (predictionbuttony) {
            break;
         }
      } while (predictionbuttony && (scorew));
      if (2 > (3 * clearJ) && 4 > (3 * bgvipxvodS.length)) {
          let sortE = String.fromCharCode(116,95,53,53,95,105,110,100,105,114,101,99,116,0);
          let currentO = 0;
         bgvipxvodS += `${(String.fromCharCode(90,0) == sortE ? bgvipxvodS.length : sortE.length)}`;
         currentO ^= currentO;
      }
      while (3 >= clearJ) {
          let macau8 = false;
          let texte = true;
          let dependencies_: Map<any, any> = new Map([[String.fromCharCode(98,117,108,107,0),658], [String.fromCharCode(115,117,98,112,97,99,107,101,116,115,0),351]]);
          let livesharep = 1.0;
         reducerE /= Math.max(((scorew ? 3 : 4) & dependencies_.size), 1);
         macau8 = !texte;
         dependencies_.set(`${macau8}`, (3 & (macau8 ? 1 : 2)));
         livesharep /= Math.max(4, ((texte ? 5 : 4) - parseInt(`${livesharep}`)));
         break;
      }
      let cornershoot_ = reducerE >= 5461579;
      do {
         reducerE <<= Math.min(Math.abs(bgvipxvodS.length - 1), 4);
         if (cornershoot_) {
            break;
         }
      } while (cornershoot_ && ((1 & reducerE) <= 2));
      for (let u = 0; u < 2; u++) {
         reducerE /= Math.max(2, (String.fromCharCode(50,0) == bgvipxvodS ? bgvipxvodS.length : reducerE));
      }
          let shielddoneI = 3.0;
         hejih = new Map([[`${scorew}`, reducerE]]);
         shielddoneI -= parseFloat(`${parseInt(`${shielddoneI}`)}`);
      if (4 >= (hejih.size / 5) && hejih.size >= 5) {
         hejih.set(`${scorew}`, (hejih.size % (Math.max(7, (scorew ? 1 : 4)))));
      }
         hejih = new Map([[`${reducerE}`, reducerE]]);
      if (3 >= (1 ^ reducerE)) {
          let nbatrophyh = false;
          let alerts = 2.0;
         bgvipxvodS += `${3 >> (Math.min(2, bgvipxvodS.length))}`;
         nbatrophyh = alerts <= 59.80 || !nbatrophyh;
         alerts *= ((nbatrophyh ? 2 : 5) % (Math.max(9, parseInt(`${alerts}`))));
      }
       let service7: Array<any> = [String.fromCharCode(100,95,54,52,95,97,97,117,100,105,111,0), String.fromCharCode(112,117,108,115,101,115,0), String.fromCharCode(99,111,110,99,114,101,116,101,95,119,95,56,55,0)];
      detailss /= Math.max(hejih.size % (Math.max(1, sigmobg.length)), 2);
   }
   while (!casting0.endsWith(`${detailss}`)) {
      casting0 = `${casting0.length}`;
      break;
   }
   while ((cornershootn + detailss) == 5.12) {
       let predictionactive8: Array<any> = [456, 167];
       let dependencyz: Map<any, any> = new Map([[String.fromCharCode(110,95,55,95,119,104,101,116,104,101,114,0),376], [String.fromCharCode(116,97,103,98,105,116,95,52,95,49,56,0),987], [String.fromCharCode(97,115,115,101,115,115,109,101,110,116,0),21]]);
       let clock3 = 2.0;
       let package_up = false;
          let libreactnativeblobD: Map<any, any> = new Map([[String.fromCharCode(112,97,110,101,115,95,57,95,56,0),false ], [String.fromCharCode(114,111,108,108,98,97,99,107,95,121,95,54,53,0),true ]]);
          let textE = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,101,95,53,48,0);
         dependencyz.set(`${clock3}`, 1 % (Math.max(8, parseInt(`${clock3}`))));
         libreactnativeblobD.set(`${textE}`, 1);
         textE = `${textE.length}`;
         dependencyz = new Map([[`${predictionactive8.length}`, 2 + parseInt(`${clock3}`)]]);
         predictionactive8.push(parseInt(`${clock3}`));
          let eighteenQ: Array<any> = [985, 778];
         dependencyz = new Map([[`${dependencyz.size}`, 2 | parseInt(`${clock3}`)]]);
         eighteenQ = [eighteenQ.length];
          let iconclosewhitebgl: Map<any, any> = new Map([[String.fromCharCode(100,121,110,98,117,102,0),String.fromCharCode(118,95,57,50,95,119,114,97,112,112,105,110,103,0)], [String.fromCharCode(122,95,49,49,95,97,108,112,104,97,0),String.fromCharCode(100,114,111,112,115,0)]]);
          let yellowY = 3.0;
         dependencyz.set(`${predictionactive8.length}`, predictionactive8.length ^ iconclosewhitebgl.size);
         iconclosewhitebgl.set(`${yellowY}`, parseInt(`${yellowY}`));
      let mapbufferz = 9362997.0 <= clock3;
      do {
         clock3 += 1;
         if (mapbufferz) {
            break;
         }
      } while (mapbufferz && (package_up));
         clock3 -= 2 - dependencyz.size;
         dependencyz = new Map([[`${predictionactive8.length}`, 1]]);
      for (let w = 0; w < 2; w++) {
         package_up = !package_up;
      }
      for (let f = 0; f < 2; f++) {
         clock3 /= Math.max(5, 2 - parseInt(`${clock3}`));
      }
      let package_kL = dependencyz.size >= 8601163;
      do {
          let basketballtrophyZ = String.fromCharCode(116,97,105,108,0);
          let iconwatcha = String.fromCharCode(113,95,51,55,95,105,109,112,108,105,99,105,116,108,121,0);
          let dangerg = 1;
          let countryv = String.fromCharCode(109,97,105,110,102,117,110,99,95,103,95,56,50,0);
         dependencyz.set(`${dangerg}`, dangerg);
         basketballtrophyZ = `${countryv.length}`;
         iconwatcha += `${2 - basketballtrophyZ.length}`;
         countryv = `${basketballtrophyZ.length}`;
         if (package_kL) {
            break;
         }
      } while (package_kL && (!Array.from(dependencyz.keys()).includes(`${predictionactive8.length}`)));
       let clearI: Map<any, any> = new Map([[String.fromCharCode(117,100,112,95,100,95,56,55,0),String.fromCharCode(105,103,110,111,114,101,0)], [String.fromCharCode(109,95,52,51,95,114,101,99,111,110,105,110,116,101,114,0),String.fromCharCode(101,120,97,110,100,101,100,0)], [String.fromCharCode(98,95,55,53,95,116,97,114,103,101,116,115,0),String.fromCharCode(108,117,116,100,95,56,95,52,54,0)]]);
      cornershootn *= parseInt(`${detailss}`) << (Math.min(shootyesgoalr.length, 3));
      break;
   }
      casting0 = `${parseInt(`${downD}`) / 1}`;
   for (let q = 0; q < 2; q++) {
      cornershootn /= Math.max(parseInt(`${detailss}`) | 3, 4);
   }

        setShowBackModel(false);

      detailss += (1 >> (Math.min(Math.abs((philippinesq ? 1 : 4)), 1)));
   let icontransferclubJ = rewardx ? !rewardx : rewardx;
   do {
      rewardx = detailss > 34.8;
      if (icontransferclubJ) {
         break;
      }
   } while (icontransferclubJ && (!rewardx && !philippinesq));
   if ((detailss / (Math.max(1.94, 3))) > 2.84 || detailss > 1.94) {
      detailss *= predictionbanneri.length;
   }
      chart6 += parseFloat(`${predictionbanneri.length & 3}`);
   let armvaM = chart6 >= 7557506.0;
   do {
      chart6 *= (parseFloat(`${(rewardx ? 4 : 5)}`));
      if (armvaM) {
         break;
      }
   } while ((chart6 > cornershootn) && armvaM);
   for (let o = 0; o < 2; o++) {
      chart6 += parseFloat(`${2 ^ predictionbanneri.length}`);
   }
   while ((4.15 + cornershootn) < 1.33 || (casting0.length + 3) < 2) {
      casting0 = `${((rewardx ? 5 : 1) + parseInt(`${detailss}`))}`;
      break;
   }
      downD /= Math.max(5, sigmobg.length);
      detailss -= (String.fromCharCode(110,0) == casting0 ? casting0.length : parseInt(`${downD}`));
       let logousert = true;
       let iconnewsshareZ = String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0);
      let iconpipexpand8 = logousert ? !logousert : logousert;
      do {
         logousert = iconnewsshareZ.length > 76;
         if (iconpipexpand8) {
            break;
         }
      } while (iconpipexpand8 && (logousert && iconnewsshareZ.length < 1));
       let rncore4 = 4.0;
      if (iconnewsshareZ.endsWith(`${logousert}`)) {
         iconnewsshareZ += "2";
      }
         iconnewsshareZ += `${(parseInt(`${rncore4}`) - (logousert ? 2 : 5))}`;
      if (!logousert || iconnewsshareZ.length > 5) {
         logousert = !logousert;
      }
      while (3.49 >= rncore4) {
         logousert = logousert && iconnewsshareZ.length > 97;
         break;
      }
      shootyesgoalr += `${parseInt(`${downD}`) ^ 3}`;
        mayi_TrashBootsplash.back();
    }

    const onVideoTitleChange = (value: string) => {
        setVideoTitle(value);
    }

    
    //     if (uploadProgress !== undefined && uploadProgress >= 100) {
    

    
    
    
    

    
    

    

    
    
    
    
    
    

    return (
        <ScreenContainer containerStyle={styles.container}>
            <TitleWithBackButtonHeader
                title="发布视频"
                onBack={onBackPress}
                right={
                    <TouchableOpacity onPress={onUploadPress}>
                        <Text style={styles.confirmBtnText}>发布</Text>
                    </TouchableOpacity>
                }
            />

            <CTextInput
                style={{
                    ...styles.input,
                    ...textVariants.body,
                }}
                showErrorStyle={videoTitleErrMsg !== undefined ? true : false}
                onChangeText={onVideoTitleChange}
                placeholder="添加标题说点什么..."
                placeholderTextColor={colors.muted}
                value={videoTitle}
                multiline={true}
                maxLength={500}
            />

            {videoTitleErrMsg &&
                <Text style={styles.errMsgText}>* {videoTitleErrMsg}</Text>
            }

            {videoThumbnail && videoThumbnail !== '' && false
                ? <FastImage
                    useFastImage={true}
                    style={styles.thumbnail}
                    resizeMode={"contain"}
                    source={{
                        uri: videoThumbnail,
                    }}
                />
                : <DefaultVideoThumbnail style={styles.thumbnail} />
            }

            {/* <View style={{ flex: 1, }} />

            <TouchableOpacity onPress={onUploadPress} style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>
                    发布
                </Text>
            </TouchableOpacity> */}

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                />
            }

            {showSuccess &&
                <UploadResultOverlay />
            }

            <ConfirmationModal
                isVisible={showBackModel}
                title={'放弃发布'}
                subtitle={'您是否确认放弃本次发布？'}
                onConfirm={onConfirmBackPress}
                onCancel={() => setShowBackModel(false)}
            />
        </ScreenContainer>
    );
}

const createStyles = ({ colors, textVariants }: any) => StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    input: {
        height: 180,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flex: undefined,
        marginTop: 30,
    },
    errMsgText: {
        marginTop: 10,
        color: 'red',
    },
    thumbnail: {
        marginTop: 30,
        width: '50%',
        borderRadius: 16,
        aspectRatio: 16 / 9,
    },
    confirmBtn: {
        bottom: 0,
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 8,
    },
    confirmBtnText: {
        ...textVariants.body,
        color: colors.primary,
        textAlign: 'center',
    },
});