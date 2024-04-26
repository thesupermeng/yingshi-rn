import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import ScreenContainer from "../../components/container/ww_collection";
import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { wwInjury } from "../../../routes/ww_with_gray";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/ww_combine_components";
import { UploadProgressOverlay } from "../../components/modal/ww_filter";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/ww_icon";
import { useAppDispatch } from "@hooks/ww_catagory_neon";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/ww_upgrade";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/ww_result';
import DefaultVideoThumbnail from '@static/images/configAlbumAway.svg';
import { saveUploadHistory } from "@redux/actions/ww_iconbellactive_result";

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
       let stylesn = 1;
    let mappingB = String.fromCharCode(101,114,114,111,114,115,0);
    let libflipperr = 0.0;
    let countdown2: Array<any> = [String.fromCharCode(115,109,105,108,0), String.fromCharCode(99,116,120,112,0)];
    let expand_ = 3;
    let preview9 = String.fromCharCode(102,102,109,109,97,108,0);
    let comment9 = String.fromCharCode(116,101,108,108,97,114,0);
    let componentsi = 4.0;
    let combineda = 3;
    let appley = false;
    let main_fN = String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,0);
    let libavfilter7 = String.fromCharCode(109,117,108,116,105,112,97,114,116,0);
    let langN = String.fromCharCode(109,101,109,111,114,121,98,97,114,114,105,101,114,0);
    let promotioni = false;
   if (mappingB.length <= countdown2.length) {
      countdown2 = [mappingB.length + combineda];
   }
      mappingB = `${2 >> (Math.min(Math.abs(expand_), 2))}`;
       let giflivestreaming0 = 4.0;
      let backm = giflivestreaming0 <= 5991437.0;
      do {
         giflivestreaming0 *= 2 & parseInt(`${giflivestreaming0}`);
         if (backm) {
            break;
         }
      } while ((4.64 <= (1 + giflivestreaming0)) && backm);
       let encryptB: Array<any> = [238, 117, 33];
       let searchJ: Array<any> = [60, 244];
      let shootf = 5089674 <= encryptB.length;
      do {
          let attributedstringL = false;
          let backwardX: Map<any, any> = new Map([[String.fromCharCode(104,121,112,104,101,110,97,116,101,100,0),436], [String.fromCharCode(114,101,110,100,101,114,101,114,0),199], [String.fromCharCode(106,97,99,111,115,117,98,0),599]]);
          let options8 = 5.0;
          let holderi = 4.0;
          let matchactiveT: Map<any, any> = new Map([[String.fromCharCode(119,104,116,120,0),364], [String.fromCharCode(118,111,114,98,105,115,0),24]]);
         encryptB = [3];
         attributedstringL = 69.53 >= options8;
         backwardX = new Map([[`${attributedstringL}`, parseInt(`${holderi}`) >> (Math.min(3, Math.abs(1)))]]);
         options8 += (2 - (attributedstringL ? 4 : 3));
         holderi += 2;
         matchactiveT = new Map([[`${matchactiveT.size}`, 1 + matchactiveT.size]]);
         if (shootf) {
            break;
         }
      } while ((1 >= (2 % (Math.max(9, encryptB.length))) && (giflivestreaming0 + 3.8) >= 1.75) && shootf);
      stylesn %= Math.max(mappingB.length + 1, 4);

        try {

      combineda -= 3 * countdown2.length;
   while ((countdown2.length / (Math.max(1, libflipperr))) == 2.58) {
      libflipperr *= libavfilter7.length;
      break;
   }
      combineda ^= (countdown2.length + (appley ? 1 : 1));
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, 
            })

   for (let e = 0; e < 1; e++) {
      mappingB = `${countdown2.length / (Math.max(5, comment9.length))}`;
   }
      mappingB += `${(comment9 == String.fromCharCode(87,0) ? comment9.length : parseInt(`${libflipperr}`))}`;
       let unreadn = false;
       let borderlesso = false;
       let libreactnativejniZ = 1.0;
      while (borderlesso) {
         unreadn = !unreadn;
         break;
      }
         unreadn = 28.13 <= libreactnativejniZ;
       let confirmationP = 2.0;
       let background2 = 5.0;
      while ((confirmationP - background2) >= 4.89) {
          let minivodI = String.fromCharCode(122,112,116,102,0);
          let analyticY = 5;
          let umengS = 1.0;
          let trash6 = 1.0;
         confirmationP += parseFloat(`${1 - parseInt(`${trash6}`)}`);
         minivodI = `${parseInt(`${umengS}`) - analyticY}`;
         analyticY *= analyticY;
         umengS *= parseInt(`${umengS}`);
         trash6 /= Math.max(4, parseFloat(`${parseInt(`${umengS}`)}`));
         break;
      }
      let codegenG = unreadn ? !unreadn : unreadn;
      do {
          let privatechatbgd = String.fromCharCode(97,99,99,114,117,101,0);
         unreadn = 35.1 == (confirmationP / (Math.max(background2, 10)));
         privatechatbgd += `${privatechatbgd.length % 2}`;
         if (codegenG) {
            break;
         }
      } while (((libreactnativejniZ + 4.71) <= 3.58 || 4.71 <= libreactnativejniZ) && codegenG);
          let z_locks = String.fromCharCode(104,105,103,104,101,114,0);
          let dinit_j0M: Array<any> = [String.fromCharCode(109,111,100,101,110,97,109,101,0), String.fromCharCode(108,105,110,101,115,0)];
          let iconeditV = String.fromCharCode(101,102,102,101,99,116,115,0);
         libreactnativejniZ /= Math.max(4, parseFloat(`${3 | parseInt(`${confirmationP}`)}`));
         z_locks += `${z_locks.length | 3}`;
         dinit_j0M.push(dinit_j0M.length);
         iconeditV += `${iconeditV.length}`;
          let uimanager3 = 2;
          let policy1 = String.fromCharCode(99,108,105,99,107,0);
         confirmationP += parseFloat(`${uimanager3}`);
         uimanager3 += (String.fromCharCode(103,0) == policy1 ? policy1.length : policy1.length);
         confirmationP /= Math.max(parseFloat(`${parseInt(`${background2}`) & parseInt(`${confirmationP}`)}`), 2);
          let changeb = String.fromCharCode(109,109,120,101,120,116,0);
         borderlesso = 60 <= changeb.length;
      stylesn -= 1;

            if (response) {

   if (4 <= (parseInt(`${libflipperr}`) / (Math.max(main_fN.length, 6)))) {
       let darks: Array<any> = [163, 747, 630];
       let mbbannerI = 4;
      if (1 > (darks.length >> (Math.min(4, Math.abs(mbbannerI)))) && 3 > (mbbannerI >> (Math.min(Math.abs(1), 1)))) {
         darks = [1];
      }
       let sinas = String.fromCharCode(99,104,101,99,107,115,117,109,115,0);
       let viewsh = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,0);
      if (5 < sinas.length) {
         viewsh = `${darks.length ^ 1}`;
      }
      for (let s = 0; s < 2; s++) {
         mbbannerI >>= Math.min(Math.abs(viewsh.length + darks.length), 4);
      }
      let borderlessZ = mbbannerI >= 9217880;
      do {
         mbbannerI <<= Math.min(Math.abs((viewsh == String.fromCharCode(121,0) ? darks.length : viewsh.length)), 2);
         if (borderlessZ) {
            break;
         }
      } while (borderlessZ && (sinas.length < 5));
      for (let v = 0; v < 1; v++) {
         sinas += `${viewsh.length & darks.length}`;
      }
      libflipperr -= mappingB.length & 2;
   }
   while (appley) {
       let emoji3: Array<any> = [401, 882];
       let libanep = String.fromCharCode(97,108,97,99,100,115,112,0);
       let reactnativeratings0 = false;
          let libavcodecl = 4.0;
          let countdownk = 2;
          let zoomn = 1.0;
         emoji3.push(3);
         libavcodecl /= Math.max(2, 1 | countdownk);
         countdownk <<= Math.min(Math.abs(countdownk / (Math.max(parseInt(`${libavcodecl}`), 6))), 3);
         zoomn /= Math.max(3, 5);
       let tailS = 0;
       let volumej = 2;
      if (volumej <= 1 && (volumej % 1) <= 2) {
         volumej += (tailS - (reactnativeratings0 ? 3 : 1));
      }
         tailS ^= 2 ^ tailS;
          let buttonp = String.fromCharCode(102,97,110,111,117,116,0);
          let utilsQ = 4.0;
          let oranges = String.fromCharCode(115,116,114,105,99,109,112,0);
         libanep = `${libanep.length}`;
         buttonp += `${(buttonp == String.fromCharCode(78,0) ? buttonp.length : parseInt(`${utilsQ}`))}`;
         utilsQ /= Math.max(2, parseFloat(`${parseInt(`${utilsQ}`) >> (Math.min(Math.abs(3), 1))}`));
         oranges = `${1 * parseInt(`${utilsQ}`)}`;
          let homes = 3.0;
          let dragcloseN = 0;
         volumej <<= Math.min(3, Math.abs(tailS));
         homes *= parseFloat(`${1}`);
         dragcloseN ^= dragcloseN;
          let loginz = true;
          let component0 = String.fromCharCode(120,109,117,108,116,105,112,108,101,0);
          let reactnavigation6 = 3.0;
         reactnativeratings0 = 96 < emoji3.length;
         loginz = 15.20 == reactnavigation6 || !loginz;
         component0 = "2";
         reactnavigation6 /= Math.max(parseInt(`${reactnavigation6}`), 5);
          let downloaderR = true;
          let contextj: Array<any> = [962, 215];
         libanep += "3";
         downloaderR = contextj.length < 51;
         contextj.push(contextj.length);
          let combineQ = false;
          let button8 = 3.0;
          let rewardvideon: Array<any> = [86, 345];
         volumej >>= Math.min(3, emoji3.length);
         combineQ = button8 > 31.55 || combineQ;
         button8 -= parseFloat(`${1 | rewardvideon.length}`);
         rewardvideon.push(((combineQ ? 4 : 3) * parseInt(`${button8}`)));
      main_fN += `${expand_ + stylesn}`;
      break;
   }
       let store3 = String.fromCharCode(98,111,117,110,99,101,0);
       let loadingA = 4;
       let flippers = String.fromCharCode(119,111,114,100,108,101,110,0);
          let connectiond: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,0),String.fromCharCode(115,101,99,116,105,111,110,0)], [String.fromCharCode(114,116,112,102,98,0),String.fromCharCode(115,108,111,119,109,111,100,101,0)]]);
          let matchactiveo = 0.0;
          let gradlewa = 4.0;
         loadingA *= loadingA;
         connectiond.set(`${matchactiveo}`, 2);
         matchactiveo -= parseInt(`${gradlewa}`);
         gradlewa *= 1;
      let bodanT = 9660442 <= flippers.length;
      do {
         flippers += `${flippers.length * 3}`;
         if (bodanT) {
            break;
         }
      } while (bodanT && (store3 != flippers));
         loadingA -= loadingA / (Math.max(store3.length, 1));
         loadingA *= loadingA;
      let profiled = 9448348 >= loadingA;
      do {
          let vietnamd = 0.0;
          let footballfiledlayoutu = 4.0;
          let logouserc: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,97,100,100,114,0),String.fromCharCode(101,95,56,52,0)], [String.fromCharCode(106,97,99,107,0),String.fromCharCode(100,98,111,111,108,104,117,102,102,0)]]);
         loadingA |= store3.length << (Math.min(5, Math.abs(loadingA)));
         vietnamd += parseFloat(`${parseInt(`${footballfiledlayoutu}`)}`);
         logouserc.set(`${vietnamd}`, 3 << (Math.min(2, Math.abs(logouserc.size))));
         if (profiled) {
            break;
         }
      } while ((!store3.includes(`${loadingA}`)) && profiled);
         store3 = `${flippers.length | 2}`;
         store3 += `${(store3 == String.fromCharCode(87,0) ? loadingA : store3.length)}`;
      let country7 = loadingA >= 6746379;
      do {
          let sellk = String.fromCharCode(99,111,110,99,114,101,116,101,0);
         loadingA |= flippers.length;
         sellk = `${(sellk == String.fromCharCode(88,0) ? sellk.length : sellk.length)}`;
         if (country7) {
            break;
         }
      } while (((3 * store3.length) == 1 && 3 == (store3.length * loadingA)) && country7);
       let libreactf: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,105,116,121,0),385], [String.fromCharCode(110,117,109,101,114,105,102,121,0),500]]);
       let iconshare3: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,114,0),false ], [String.fromCharCode(115,109,111,111,116,104,108,121,0),false ]]);
      appley = libavfilter7.includes(`${expand_}`);
                setVideoThumbnail(response.path);
            } else {

   for (let g = 0; g < 1; g++) {
      combineda += 1 << (Math.min(3, Math.abs(stylesn)));
   }
   let rulesY = String.fromCharCode(121,100,57,122,107,0) == libavfilter7;
   do {
      libavfilter7 += `${combineda / 3}`;
      if (rulesY) {
         break;
      }
   } while (rulesY && (mappingB == String.fromCharCode(80,0)));
   if ((combineda - main_fN.length) <= 4 || 4 <= (main_fN.length - combineda)) {
      combineda /= Math.max(expand_, 1);
   }
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
       let scheduler0 = String.fromCharCode(97,100,108,101,114,0);
    let libreactperfloggerjnif = String.fromCharCode(115,119,105,116,99,104,101,114,0);
    let libavutilP = String.fromCharCode(117,117,105,100,112,114,111,102,0);
    let profileactivec = String.fromCharCode(112,111,115,101,115,0);
    let hooks0: Map<any, any> = new Map([[String.fromCharCode(100,114,101,102,0),235], [String.fromCharCode(97,109,114,119,98,100,101,99,0),321]]);
    let buffers = String.fromCharCode(115,97,116,0);
    let libglogG = 0.0;
    let pathx = 2.0;
    let resendK = 1.0;
    let auto_dZ = String.fromCharCode(101,118,97,108,117,108,97,116,101,0);
    let libflipperx = 5.0;
    let signinup_ = String.fromCharCode(97,101,115,116,97,98,0);
    let iconarrowrightO = String.fromCharCode(108,105,99,101,110,115,101,0);
    let foundM = 1;
    let update_paf = String.fromCharCode(101,99,114,101,116,0);
      libglogG += parseFloat(`${libavutilP.length & 1}`);
   while (2.50 <= (libflipperx / (Math.max(parseFloat(`${scheduler0.length}`), 7)))) {
      libflipperx *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${pathx}`)), 1))}`);
      break;
   }

        if (videoTitle === undefined || videoTitle === '') {

   for (let f = 0; f < 1; f++) {
       let iconuser8 = 4.0;
       let materialK = 0.0;
       let bridge0 = String.fromCharCode(114,101,97,115,111,110,115,0);
         materialK /= Math.max(parseInt(`${iconuser8}`), 3);
         bridge0 = `${bridge0.length >> (Math.min(4, Math.abs(parseInt(`${materialK}`))))}`;
          let greyH = String.fromCharCode(97,100,97,112,116,0);
          let componentregistrye: Array<any> = [119, 49, 939];
         iconuser8 *= componentregistrye.length;
         greyH = `${(String.fromCharCode(48,0) == greyH ? greyH.length : greyH.length)}`;
         componentregistrye.push(greyH.length);
      for (let q = 0; q < 2; q++) {
         bridge0 += `${parseInt(`${iconuser8}`) + parseInt(`${materialK}`)}`;
      }
         bridge0 += `${bridge0.length}`;
          let launchJ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,105,110,103,0),false ], [String.fromCharCode(115,122,97,98,111,115,0),false ], [String.fromCharCode(116,116,97,103,0),false ]]);
          let playA = 2.0;
          let yingC = 0;
         materialK -= launchJ.size;
         launchJ = new Map([[`${playA}`, yingC]]);
         playA *= parseFloat(`${2 & yingC}`);
         iconuser8 += 2;
      if (1.88 > (1 * materialK)) {
         iconuser8 *= bridge0.length;
      }
      for (let j = 0; j < 2; j++) {
         iconuser8 /= Math.max(parseInt(`${iconuser8}`), 3);
      }
      libflipperx *= (parseFloat(`${String.fromCharCode(97,0) == bridge0 ? parseInt(`${materialK}`) : bridge0.length}`));
   }
   if (iconarrowrightO == libavutilP) {
      libavutilP = `${(String.fromCharCode(82,0) == iconarrowrightO ? iconarrowrightO.length : parseInt(`${libflipperx}`))}`;
   }
            setVideoTitleErrMsg('请填写标题');

      libreactperfloggerjnif = `${parseInt(`${resendK}`) * 1}`;
       let libreactnativeblob_: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,98,105,110,100,0),String.fromCharCode(117,108,111,110,103,0)], [String.fromCharCode(110,97,118,105,103,97,116,105,110,103,0),String.fromCharCode(103,101,111,109,101,116,114,121,0)], [String.fromCharCode(103,97,109,117,116,115,0),String.fromCharCode(105,110,116,102,114,0)]]);
          let defaultprofilepicZ: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,105,99,0),String.fromCharCode(109,114,122,0)], [String.fromCharCode(110,97,109,101,0),String.fromCharCode(115,101,112,97,114,97,116,101,115,0)], [String.fromCharCode(114,101,115,111,108,118,105,110,103,0),String.fromCharCode(114,111,117,116,105,110,103,0)]]);
          let gesture1 = true;
          let nextx = true;
         libreactnativeblob_ = new Map([[`${nextx}`, 1]]);
         defaultprofilepicZ.set(`${defaultprofilepicZ.size}`, 1 ^ defaultprofilepicZ.size);
         gesture1 = defaultprofilepicZ.size <= 44;
         libreactnativeblob_.set(`${libreactnativeblob_.size}`, libreactnativeblob_.size - libreactnativeblob_.size);
         libreactnativeblob_ = new Map([[`${libreactnativeblob_.size}`, 2]]);
      profileactivec = `${libavutilP.length}`;
            return;
        } else {

       let crownL = String.fromCharCode(97,110,103,117,108,97,114,0);
       let fieldL = 0.0;
       let sansl = String.fromCharCode(102,117,110,99,0);
      for (let g = 0; g < 1; g++) {
         fieldL *= parseFloat(`${1 * parseInt(`${fieldL}`)}`);
      }
         fieldL *= parseFloat(`${2 % (Math.max(1, crownL.length))}`);
         crownL = `${sansl.length ^ 3}`;
      while (1 == (crownL.length ^ 1) || (5.74 * fieldL) == 1.93) {
         fieldL /= Math.max(2, parseFloat(`${1 * sansl.length}`));
         break;
      }
       let filer = String.fromCharCode(108,111,99,97,108,104,111,115,116,0);
      let traminif = String.fromCharCode(120,54,112,0) == crownL;
      do {
          let resultP = 5;
          let transferj = 5;
          let historyZ: Map<any, any> = new Map([[String.fromCharCode(116,97,100,100,0),118], [String.fromCharCode(105,110,105,116,105,97,116,111,114,0),89]]);
          let bootsplashh = 0.0;
          let yellowanimationlivey = true;
         crownL += `${resultP + 3}`;
         resultP >>= Math.min(3, Math.abs(parseInt(`${bootsplashh}`)));
         transferj |= historyZ.size;
         historyZ = new Map([[`${historyZ.size}`, historyZ.size + parseInt(`${bootsplashh}`)]]);
         yellowanimationlivey = !yellowanimationlivey && bootsplashh <= 92.17;
         if (traminif) {
            break;
         }
      } while (((crownL.length - parseInt(`${fieldL}`)) == 4) && traminif);
      let cornerkickh = String.fromCharCode(107,112,53,104,114,49,108,53,0) == crownL;
      do {
         crownL = `${(filer == String.fromCharCode(115,0) ? filer.length : sansl.length)}`;
         if (cornerkickh) {
            break;
         }
      } while ((!crownL.endsWith(`${fieldL}`)) && cornerkickh);
      if (sansl != String.fromCharCode(53,0)) {
         filer += "3";
      }
      for (let s = 0; s < 3; s++) {
         sansl = `${(String.fromCharCode(52,0) == sansl ? parseInt(`${fieldL}`) : sansl.length)}`;
      }
      buffers = `${scheduler0.length}`;
   while ((libflipperx - resendK) < 5.14 && (resendK - 5.14) < 3.81) {
       let gifgoalr = 0;
       let penaltyY = String.fromCharCode(112,116,114,109,97,112,115,0);
       let floaterN: Map<any, any> = new Map([[String.fromCharCode(105,102,97,100,100,114,115,0),String.fromCharCode(105,100,99,116,108,108,109,0)], [String.fromCharCode(119,111,114,100,0),String.fromCharCode(102,105,120,115,116,114,105,100,101,0)]]);
      for (let w = 0; w < 1; w++) {
         gifgoalr /= Math.max(1, floaterN.size);
      }
         penaltyY = "3";
         floaterN = new Map([[`${floaterN.size}`, floaterN.size]]);
       let sharemodalo = 0;
       let whiteticku = 4;
      if (5 >= penaltyY.length) {
          let str1 = String.fromCharCode(115,99,97,108,97,98,108,101,0);
         floaterN = new Map([[`${whiteticku}`, whiteticku]]);
         str1 += `${str1.length ^ str1.length}`;
      }
      while (5 == (3 * sharemodalo)) {
          let pageU = true;
          let mbnativeQ = String.fromCharCode(112,111,116,105,115,105,111,110,0);
         floaterN = new Map([[`${floaterN.size}`, floaterN.size]]);
         pageU = mbnativeQ == mbnativeQ;
         break;
      }
          let androidt = String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,0);
          let traminiE = 0.0;
         gifgoalr <<= Math.min(Math.abs(parseInt(`${traminiE}`)), 1);
         androidt = `${androidt.length}`;
         traminiE *= androidt.length ^ androidt.length;
      let injuryz = gifgoalr >= 9104244;
      do {
         gifgoalr ^= 1;
         if (injuryz) {
            break;
         }
      } while (((4 + sharemodalo) <= 5) && injuryz);
      for (let v = 0; v < 3; v++) {
         floaterN = new Map([[`${whiteticku}`, 3]]);
      }
      libflipperx *= parseFloat(`${parseInt(`${resendK}`) ^ auto_dZ.length}`);
      break;
   }
            setVideoTitleErrMsg(undefined);
        }

        try {

   for (let n = 0; n < 3; n++) {
       let sentryU = 0;
       let hooks9 = String.fromCharCode(114,101,108,102,117,110,99,0);
      while (hooks9.length > 3) {
         sentryU %= Math.max(1, (String.fromCharCode(89,0) == hooks9 ? hooks9.length : sentryU));
         break;
      }
       let auto_qe = String.fromCharCode(99,105,114,99,0);
       let klevinF = String.fromCharCode(99,99,105,116,116,0);
      let nterstitialb = auto_qe.length >= 6048444;
      do {
         auto_qe += `${klevinF.length ^ auto_qe.length}`;
         if (nterstitialb) {
            break;
         }
      } while (nterstitialb && (auto_qe.length == 1));
       let screenK = 5;
      let sport0 = auto_qe.length <= 7493657;
      do {
         auto_qe += `${hooks9.length}`;
         if (sport0) {
            break;
         }
      } while ((klevinF.length >= auto_qe.length) && sport0);
      while (4 > (2 - auto_qe.length)) {
         auto_qe = `${screenK}`;
         break;
      }
      libflipperx -= parseFloat(`${2 + signinup_.length}`);
   }
      libreactperfloggerjnif += "1";
            

       let expandh = String.fromCharCode(102,97,100,115,116,0);
       let philippinesv = String.fromCharCode(118,101,110,117,101,115,0);
       let iconeditU = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,0);
      if (!expandh.endsWith(`${philippinesv.length}`)) {
         philippinesv = `${1 & expandh.length}`;
      }
       let libruntimeexecutord = String.fromCharCode(117,110,105,102,105,101,100,0);
       let whitem = String.fromCharCode(120,105,110,99,0);
      while (!libruntimeexecutord.includes(`${iconeditU.length}`)) {
          let tumbnailo: Map<any, any> = new Map([[String.fromCharCode(101,114,97,115,101,114,0),String.fromCharCode(99,95,56,48,95,99,97,118,115,118,105,100,101,111,0)], [String.fromCharCode(114,117,98,121,0),String.fromCharCode(98,115,111,110,0)]]);
          let abidetectl = String.fromCharCode(114,101,103,105,115,116,114,121,0);
          let routero = false;
          let reducer6 = 5.0;
         iconeditU = `${libruntimeexecutord.length ^ iconeditU.length}`;
         tumbnailo.set(abidetectl, abidetectl.length);
         routero = routero || tumbnailo.size == 11;
         reducer6 -= (parseFloat(`${tumbnailo.size >> (Math.min(1, Math.abs((routero ? 4 : 3))))}`));
         break;
      }
      if (philippinesv != String.fromCharCode(56,0)) {
          let componentd = String.fromCharCode(97,100,106,117,115,116,115,0);
          let gifgoaly = String.fromCharCode(99,114,111,115,115,111,118,101,114,0);
          let googlee = String.fromCharCode(99,108,105,99,107,115,0);
          let iconclosewhitebga = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,0);
          let signinup8 = String.fromCharCode(104,97,114,100,0);
         iconeditU += `${googlee.length}`;
         componentd = "3";
         gifgoaly += `${signinup8.length % (Math.max(1, 2))}`;
         googlee = `${(String.fromCharCode(50,0) == iconclosewhitebga ? iconclosewhitebga.length : signinup8.length)}`;
      }
      for (let p = 0; p < 2; p++) {
         philippinesv = `${philippinesv.length - expandh.length}`;
      }
      if (expandh.length > libruntimeexecutord.length) {
          let gifgoalc = 3;
          let submits = String.fromCharCode(110,105,115,116,110,105,100,0);
          let turndownf = 0.0;
          let borderlessn = 0.0;
          let dropdownM = String.fromCharCode(101,110,99,111,100,101,109,118,0);
         expandh = `${dropdownM.length | submits.length}`;
         gifgoalc += parseInt(`${turndownf}`) + 2;
         submits = `${2 - gifgoalc}`;
         turndownf += parseFloat(`${parseInt(`${borderlessn}`)}`);
         dropdownM += `${parseInt(`${turndownf}`)}`;
      }
          let textinputb = String.fromCharCode(112,101,101,114,0);
          let analyticsu = String.fromCharCode(115,116,114,101,114,114,111,114,95,122,95,53,54,0);
          let gesturese = 4;
         expandh = `${analyticsu.length ^ textinputb.length}`;
         textinputb = `${1 & gesturese}`;
         analyticsu = `${gesturese / 1}`;
      let libswscaleo = String.fromCharCode(98,116,112,0) == expandh;
      do {
         expandh += `${expandh.length ^ 3}`;
         if (libswscaleo) {
            break;
         }
      } while ((!philippinesv.includes(expandh)) && libswscaleo);
         philippinesv += `${iconeditU.length}`;
      resendK += parseFloat(`${parseInt(`${libglogG}`) | 1}`);
       let yellowvideolivef: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,121,0),285], [String.fromCharCode(115,116,111,112,112,105,110,103,0),970]]);
       let analytick = false;
          let areac = 0.0;
          let dragcloseI = 1.0;
         analytick = !analytick;
         areac *= 2;
         dragcloseI *= parseFloat(`${parseInt(`${areac}`)}`);
      if (yellowvideolivef.size == 5 || 2 == (5 * yellowvideolivef.size)) {
         analytick = !analytick;
      }
      if (yellowvideolivef.size < 4) {
          let photoQ: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,101,114,0),207], [String.fromCharCode(100,105,99,101,0),165]]);
         analytick = null != yellowvideolivef.get(`${analytick}`);
         photoQ.set(`${photoQ.size}`, 1);
      }
       let verticalN: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,111,117,116,0),262], [String.fromCharCode(115,108,105,112,0),601], [String.fromCharCode(98,105,110,116,114,101,101,0),227]]);
         yellowvideolivef = new Map([[`${verticalN.size}`, 2]]);
         verticalN.set(`${analytick}`, 3 << (Math.min(3, Math.abs(yellowvideolivef.size))));
      iconarrowrightO += `${(profileactivec == String.fromCharCode(53,0) ? hooks0.size : profileactivec.length)}`;

            

   for (let m = 0; m < 3; m++) {
      libglogG /= Math.max(2, parseFloat(`${scheduler0.length}`));
   }
       let ewardedq: Map<any, any> = new Map([[String.fromCharCode(102,105,110,103,101,114,95,53,95,50,0),974], [String.fromCharCode(111,110,101,112,97,115,115,0),557]]);
          let injuryq = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,0);
          let moreZ: Array<any> = [773, 619, 119];
          let animationsh = String.fromCharCode(116,105,109,115,116,97,109,112,0);
         ewardedq.set(`${animationsh}`, animationsh.length);
         injuryq += `${moreZ.length}`;
         moreZ.push(3);
      let fieldV = ewardedq.size >= 5944644;
      do {
         ewardedq = new Map([[`${ewardedq.size}`, ewardedq.size + ewardedq.size]]);
         if (fieldV) {
            break;
         }
      } while (fieldV && ((ewardedq.size >> (Math.min(Math.abs(ewardedq.size), 1))) <= 5 && (ewardedq.size >> (Math.min(Math.abs(5), 4))) <= 2));
         ewardedq.set(`${ewardedq.size}`, ewardedq.size);
      libflipperx -= parseFloat(`${libavutilP.length * 3}`);

            

       let subbasketballplayerT = 1;
       let default_s78: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),String.fromCharCode(117,112,103,114,97,100,101,115,0)], [String.fromCharCode(111,114,119,97,114,100,101,100,0),String.fromCharCode(109,111,111,102,0)]]);
      for (let l = 0; l < 3; l++) {
         default_s78 = new Map([[`${default_s78.size}`, subbasketballplayerT & 2]]);
      }
         default_s78.set(`${subbasketballplayerT}`, subbasketballplayerT & 1);
       let catalogH = String.fromCharCode(112,114,101,102,101,116,99,104,101,114,0);
          let login9 = String.fromCharCode(99,111,117,110,116,101,114,0);
         catalogH = `${subbasketballplayerT}`;
         login9 += `${login9.length}`;
         catalogH = `${2 | default_s78.size}`;
         catalogH += `${catalogH.length}`;
      foundM ^= libavutilP.length;
      hooks0 = new Map([[profileactivec, profileactivec.length % (Math.max(iconarrowrightO.length, 4))]]);
            

   while (5 >= (buffers.length / 5) || 5 >= (hooks0.size / (Math.max(buffers.length, 5)))) {
      buffers += `${foundM}`;
      break;
   }
      hooks0 = new Map([[signinup_, signinup_.length]]);
            

       let stringe = String.fromCharCode(112,97,114,116,105,116,105,111,110,115,0);
          let shootyesgoalA = String.fromCharCode(100,101,102,101,97,116,0);
          let commonb = 0.0;
          let sinaX: Array<any> = [794, 607, 222];
         stringe += `${(shootyesgoalA == String.fromCharCode(65,0) ? shootyesgoalA.length : stringe.length)}`;
         commonb /= Math.max(sinaX.length * parseInt(`${commonb}`), 3);
         sinaX = [2];
          let storeN = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,0);
          let philippinesA = true;
         stringe += `${((philippinesA ? 3 : 3))}`;
         storeN = "1";
         philippinesA = storeN.length < 46;
      for (let u = 0; u < 3; u++) {
         stringe += "3";
      }
      auto_dZ = `${stringe.length}`;
      libavutilP = `${parseInt(`${pathx}`)}`;
            

       let watchnowbgd = true;
       let backgroundC = String.fromCharCode(115,99,104,105,0);
       let weiboQ: Map<any, any> = new Map([[String.fromCharCode(97,116,114,0),151], [String.fromCharCode(108,111,110,103,101,115,116,0),714], [String.fromCharCode(117,116,118,105,100,101,111,0),288]]);
       let downloado: Map<any, any> = new Map([[String.fromCharCode(114,97,110,107,105,110,103,115,0),940], [String.fromCharCode(97,99,107,100,114,111,112,0),794]]);
      for (let z = 0; z < 2; z++) {
          let libjsijniprofilerI: Map<any, any> = new Map([[String.fromCharCode(100,105,109,105,115,115,0),String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,0)], [String.fromCharCode(97,100,106,117,115,116,105,110,103,0),String.fromCharCode(116,111,117,99,104,101,115,0)], [String.fromCharCode(99,111,100,101,99,100,97,116,97,0),String.fromCharCode(100,101,110,105,101,100,0)]]);
          let iconsettingZ = 1.0;
          let activityf = 2;
          let attributedstringK = 2;
          let currentc = true;
         weiboQ = new Map([[`${currentc}`, 3 / (Math.max(attributedstringK, 5))]]);
         libjsijniprofilerI.set(`${iconsettingZ}`, libjsijniprofilerI.size);
         iconsettingZ -= parseFloat(`${activityf << (Math.min(Math.abs(parseInt(`${iconsettingZ}`)), 5))}`);
         activityf <<= Math.min(5, Math.abs(activityf << (Math.min(5, Math.abs(3)))));
         attributedstringK *= libjsijniprofilerI.size;
         currentc = (iconsettingZ * parseFloat(`${libjsijniprofilerI.size}`)) > 32.80;
      }
          let uploadF = false;
          let vietnamk = true;
          let subtextO = true;
         weiboQ.set(`${vietnamk}`, ((vietnamk ? 3 : 3) & (uploadF ? 3 : 2)));
         uploadF = (subtextO ? subtextO : subtextO);
          let eighteen0 = String.fromCharCode(115,97,108,116,115,0);
          let tumbnail0 = false;
          let previewZ = 0;
         weiboQ = new Map([[`${weiboQ.size}`, weiboQ.size]]);
         eighteen0 += `${2 << (Math.min(4, Math.abs(previewZ)))}`;
         tumbnail0 = 88 == previewZ && String.fromCharCode(109,0) == eighteen0;
      for (let z = 0; z < 1; z++) {
         backgroundC += `${(backgroundC == String.fromCharCode(65,0) ? backgroundC.length : (watchnowbgd ? 1 : 2))}`;
      }
       let selectD: Array<any> = [116, 84, 941];
       let reducerJ: Array<any> = [229, 229];
      libreactperfloggerjnif += `${((watchnowbgd ? 3 : 2) | parseInt(`${pathx}`))}`;
       let changeI = 2.0;
       let register_1P: Map<any, any> = new Map([[String.fromCharCode(101,114,114,0),256], [String.fromCharCode(99,116,111,114,0),373], [String.fromCharCode(100,98,112,97,103,101,0),561]]);
      for (let m = 0; m < 1; m++) {
         register_1P = new Map([[`${register_1P.size}`, 1 ^ register_1P.size]]);
      }
         changeI -= parseInt(`${changeI}`);
      while ((register_1P.size / (Math.max(4, 6))) > 1 && (changeI / (Math.max(3.87, 10))) > 1.69) {
         changeI *= parseInt(`${changeI}`) / (Math.max(2, 8));
         break;
      }
         changeI *= 1 / (Math.max(2, parseInt(`${changeI}`)));
       let private_ou: Array<any> = [380, 397, 883];
      let episodes0 = changeI <= 6163204.0;
      do {
         changeI *= 1;
         if (episodes0) {
            break;
         }
      } while (((changeI * register_1P.size) == 2.21 || (register_1P.size + 5) == 5) && episodes0);
      buffers += `${signinup_.length}`;
            

      libglogG += parseFloat(`${libreactperfloggerjnif.length ^ 3}`);
      auto_dZ = `${(String.fromCharCode(77,0) == libavutilP ? parseInt(`${resendK}`) : libavutilP.length)}`;

            

   while (3 > (parseInt(`${pathx}`) + 2) || (2 * profileactivec.length) > 3) {
       let renewZ = 1.0;
       let orangeclockS = 4;
       let inactiveQ = String.fromCharCode(116,114,105,109,0);
       let grapht: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,0),954], [String.fromCharCode(99,111,111,107,105,101,115,0),470]]);
      if (!inactiveQ.endsWith(`${orangeclockS}`)) {
          let downloadedo = 2.0;
          let const_jiZ = String.fromCharCode(108,111,99,97,108,0);
         orangeclockS -= inactiveQ.length * grapht.size;
         downloadedo += parseInt(`${downloadedo}`);
         const_jiZ = `${3 % (Math.max(3, parseInt(`${downloadedo}`)))}`;
      }
      for (let k = 0; k < 1; k++) {
          let animationsZ = 5;
         inactiveQ += `${grapht.size >> (Math.min(Math.abs(2), 3))}`;
         animationsZ &= animationsZ;
      }
         inactiveQ = `${parseInt(`${renewZ}`) % 2}`;
      if (1.9 >= (renewZ / 3.79) && (orangeclockS / (Math.max(7, parseInt(`${renewZ}`)))) >= 4) {
         renewZ += parseFloat(`${inactiveQ.length * orangeclockS}`);
      }
         renewZ /= Math.max(4, parseFloat(`${2 | orangeclockS}`));
         inactiveQ = "3";
          let rootC = 2.0;
          let libfollyG = String.fromCharCode(99,108,108,99,0);
         orangeclockS /= Math.max(3, parseInt(`${renewZ}`));
         rootC /= Math.max(parseInt(`${rootC}`), 3);
         libfollyG = `${1 * parseInt(`${rootC}`)}`;
      while (orangeclockS < 5) {
         orangeclockS ^= grapht.size & inactiveQ.length;
         break;
      }
      pathx /= Math.max(parseFloat(`${orangeclockS}`), 4);
      break;
   }
   for (let h = 0; h < 3; h++) {
      iconarrowrightO += `${auto_dZ.length}`;
   }

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

   let feedbackL = String.fromCharCode(95,107,95,104,103,0) == profileactivec;
   do {
      profileactivec = `${(iconarrowrightO == String.fromCharCode(72,0) ? foundM : iconarrowrightO.length)}`;
      if (feedbackL) {
         break;
      }
   } while (feedbackL && (foundM >= 1));
   for (let e = 0; e < 2; e++) {
      resendK *= parseFloat(`${buffers.length}`);
   }

            setShowSuccess(true);

   for (let q = 0; q < 1; q++) {
      libreactperfloggerjnif += `${profileactivec.length}`;
   }
      profileactivec = "2";

            setTimeout(() => {

       let toponv = 0.0;
       let entryS = String.fromCharCode(115,119,105,122,122,108,101,100,0);
       let readu = 1.0;
      let modalf = toponv >= 6811615.0;
      do {
         toponv -= parseFloat(`${entryS.length & 1}`);
         if (modalf) {
            break;
         }
      } while ((entryS.endsWith(`${toponv}`)) && modalf);
          let bellP = 0.0;
         toponv *= parseFloat(`${parseInt(`${toponv}`)}`);
         bellP -= parseFloat(`${parseInt(`${bellP}`)}`);
      let navigationb = readu <= 9738378.0;
      do {
         readu += (parseFloat(`${String.fromCharCode(80,0) == entryS ? parseInt(`${readu}`) : entryS.length}`));
         if (navigationb) {
            break;
         }
      } while (((entryS.length & 3) <= 2 || 2 <= (entryS.length % 3)) && navigationb);
         entryS = `${3 | entryS.length}`;
          let baselinem: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,99,99,115,0),253], [String.fromCharCode(98,105,116,115,104,105,102,116,0),783], [String.fromCharCode(119,97,108,107,0),327]]);
          let iconeditu = true;
          let s_lock4 = String.fromCharCode(104,114,116,102,0);
         readu += parseFloat(`${3}`);
         baselinem = new Map([[s_lock4, ((iconeditu ? 1 : 3) + 3)]]);
         iconeditu = 35 < s_lock4.length || baselinem.size < 35;
       let statsz = String.fromCharCode(115,119,114,105,0);
       let liven = String.fromCharCode(100,101,99,108,97,114,101,0);
      while (1 >= entryS.length) {
         entryS += `${parseInt(`${readu}`) ^ parseInt(`${toponv}`)}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         statsz += `${entryS.length}`;
      }
      auto_dZ += `${hooks0.size | 2}`;
      iconarrowrightO = `${(String.fromCharCode(112,0) == auto_dZ ? auto_dZ.length : parseInt(`${resendK}`))}`;
                setShowSuccess(false);

   for (let a = 0; a < 1; a++) {
       let webviewX = 2;
       let telegrami = String.fromCharCode(100,108,105,100,120,0);
         telegrami += `${(String.fromCharCode(70,0) == telegrami ? telegrami.length : webviewX)}`;
          let eventsplashU = 4.0;
         webviewX |= parseInt(`${eventsplashU}`);
      if (telegrami.endsWith(`${webviewX}`)) {
         telegrami += `${telegrami.length ^ 2}`;
      }
         telegrami = `${webviewX}`;
         webviewX *= webviewX ^ 1;
          let stationO = 2.0;
         webviewX *= 3;
         stationO -= parseFloat(`${2 ^ parseInt(`${stationO}`)}`);
      libreactperfloggerjnif += `${parseInt(`${resendK}`)}`;
   }
   let rightj = 9811275.0 >= libflipperx;
   do {
      libflipperx += parseFloat(`${buffers.length}`);
      if (rightj) {
         break;
      }
   } while (rightj && ((scheduler0.length * 1) > 2 || (parseInt(`${libflipperx}`) * scheduler0.length) > 1));
                wwInjury.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
       let whatsapps: Array<any> = [358, 495];
    let scoreC = false;
    let castV = true;
    let renew1 = String.fromCharCode(106,112,101,103,108,115,0);
    let hooks3: Array<any> = [100, 535, 256];
    let iconclosewhitebg7: Array<any> = [736, 869, 404];
    let minivodg: Array<any> = [407, 387, 402];
    let matchesP: Array<any> = [571, 461];
    let emojib = 5.0;
    let mathr = 2;
    let libavformatI: Array<any> = [972, 471];
    let projectq = true;
    let savef = String.fromCharCode(115,98,114,101,115,101,114,118,101,0);
    let contextU = String.fromCharCode(116,97,103,97,118,114,0);
    let xadsdk8: Array<any> = [String.fromCharCode(115,105,109,112,108,101,114,101,97,100,0), String.fromCharCode(98,108,111,99,107,100,0), String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,0)];
    let footballfieldV = String.fromCharCode(116,114,97,99,107,101,114,0);
    let pingl = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,0);
   let leakcheckerN = 7179023 >= mathr;
   do {
      mathr >>= Math.min(3, whatsapps.length);
      if (leakcheckerN) {
         break;
      }
   } while (leakcheckerN && (!scoreC));
      emojib -= 2;
   for (let h = 0; h < 3; h++) {
      matchesP.push(3 + mathr);
   }
   for (let j = 0; j < 1; j++) {
       let iconclosewhitebgA = 0;
       let zoomK = 1.0;
       let internetY: Array<any> = [142, 387, 371];
         internetY.push(internetY.length >> (Math.min(Math.abs(1), 2)));
      for (let h = 0; h < 3; h++) {
         iconclosewhitebgA &= iconclosewhitebgA;
      }
       let baselinee = 5.0;
      let matchactiveE = 8869754.0 >= baselinee;
      do {
          let imagemanagerw = 2.0;
         baselinee *= internetY.length + parseInt(`${imagemanagerw}`);
         if (matchactiveE) {
            break;
         }
      } while (matchactiveE && ((baselinee - iconclosewhitebgA) == 4.100));
       let component8: Array<any> = [218, 738];
      let vipsportc = 7321353 <= internetY.length;
      do {
         internetY = [1 / (Math.max(8, parseInt(`${zoomK}`)))];
         if (vipsportc) {
            break;
         }
      } while (vipsportc && ((parseInt(`${baselinee}`) + internetY.length) < 2));
         zoomK /= Math.max(parseFloat(`${iconclosewhitebgA - parseInt(`${zoomK}`)}`), 4);
          let overlay7 = 2.0;
          let redirect5: Map<any, any> = new Map([[String.fromCharCode(105,109,109,117,116,97,98,108,101,0),103], [String.fromCharCode(99,111,110,116,97,105,110,115,0),868]]);
          let gesturesc = String.fromCharCode(102,95,55,50,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
         internetY.push(internetY.length);
         overlay7 -= 3 - parseInt(`${overlay7}`);
         redirect5.set(`${overlay7}`, 2 & parseInt(`${overlay7}`));
         gesturesc += `${3 & gesturesc.length}`;
      for (let b = 0; b < 3; b++) {
         baselinee /= Math.max(component8.length | internetY.length, 2);
      }
      matchesP.push(((projectq ? 3 : 4) / 2));
   }
       let libfbjnii: Map<any, any> = new Map([[String.fromCharCode(115,119,105,114,108,0),String.fromCharCode(98,97,100,103,101,0)], [String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,0),String.fromCharCode(101,120,101,99,117,116,97,98,108,101,0)], [String.fromCharCode(112,97,110,0),String.fromCharCode(116,114,97,110,115,102,101,114,101,100,0)]]);
       let shootyesgoalD = 2.0;
       let stats_ = String.fromCharCode(97,114,114,105,118,97,108,0);
         stats_ += `${stats_.length - parseInt(`${shootyesgoalD}`)}`;
      if ((stats_.length / (Math.max(4, 1))) >= 5) {
          let firebasee = true;
          let agreementc = 5.0;
         stats_ += `${((firebasee ? 4 : 2) << (Math.min(Math.abs(2), 3)))}`;
         firebasee = agreementc >= 10.65;
         agreementc /= Math.max(3, parseFloat(`${parseInt(`${agreementc}`) + 2}`));
      }
         shootyesgoalD *= parseFloat(`${stats_.length}`);
      let muted0 = String.fromCharCode(120,97,121,106,113,48,101,55,51,0) == stats_;
      do {
         stats_ = `${2 << (Math.min(2, Math.abs(parseInt(`${shootyesgoalD}`))))}`;
         if (muted0) {
            break;
         }
      } while (muted0 && (4 < (libfbjnii.size + stats_.length)));
          let videojsY: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,0),219], [String.fromCharCode(110,105,100,111,98,106,0),803], [String.fromCharCode(115,101,103,105,116,101,114,0),122]]);
         stats_ = `${2 << (Math.min(5, stats_.length))}`;
         videojsY = new Map([[`${videojsY.size}`, videojsY.size]]);
      if (2.72 <= (parseFloat(`${libfbjnii.size}`) / (Math.max(2, shootyesgoalD))) || (shootyesgoalD / (Math.max(2.72, 2))) <= 3.29) {
         libfbjnii = new Map([[`${libfbjnii.size}`, stats_.length >> (Math.min(2, Math.abs(libfbjnii.size)))]]);
      }
       let hooksm = 3;
          let runtimescheduler5 = String.fromCharCode(105,115,112,97,116,99,104,0);
          let productg = String.fromCharCode(114,101,102,101,114,101,110,101,0);
         shootyesgoalD *= parseFloat(`${productg.length}`);
         runtimescheduler5 = `${runtimescheduler5.length}`;
         productg += `${1 ^ runtimescheduler5.length}`;
      if ((shootyesgoalD * hooksm) >= 2.4) {
          let nativea: Map<any, any> = new Map([[String.fromCharCode(105,115,112,108,97,121,0),false ], [String.fromCharCode(104,111,115,116,0),true ]]);
         hooksm += parseInt(`${shootyesgoalD}`) >> (Math.min(3, Math.abs(3)));
         nativea = new Map([[`${nativea.size}`, 3 | nativea.size]]);
      }
      emojib -= matchesP.length;
   if ((2 * whatsapps.length) < 3) {
      whatsapps.push((3 - (scoreC ? 1 : 4)));
   }
   let baseZ = whatsapps.length <= 6694718;
   do {
      whatsapps.push(3);
      if (baseZ) {
         break;
      }
   } while ((renew1.length >= whatsapps.length) && baseZ);
      renew1 = `${1 & iconclosewhitebg7.length}`;
   for (let b = 0; b < 2; b++) {
      matchesP = [renew1.length];
   }
   for (let h = 0; h < 3; h++) {
      projectq = !projectq;
   }
   let cancelm = castV ? !castV : castV;
   do {
      castV = projectq || iconclosewhitebg7.length < 97;
      if (cancelm) {
         break;
      }
   } while (cancelm && (3 > whatsapps.length));
   if (libavformatI.length >= 5) {
       let libjsinspector8 = false;
       let iconeditR: Array<any> = [577, 809, 644];
         libjsinspector8 = iconeditR.length == 54 && !libjsinspector8;
       let klevinS = String.fromCharCode(115,111,102,116,102,108,111,97,116,0);
          let unready: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,0),false ], [String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,0),true ]]);
          let mapbuffer2 = 2;
         klevinS += `${iconeditR.length}`;
         unready.set(`${mapbuffer2}`, unready.size - 1);
         mapbuffer2 <<= Math.min(4, Math.abs(unready.size));
          let stard = 3.0;
         libjsinspector8 = klevinS.length > 80;
         stard /= Math.max(1, parseFloat(`${parseInt(`${stard}`) & parseInt(`${stard}`)}`));
       let u_unlock3: Array<any> = [65, 482];
          let expired8 = String.fromCharCode(117,112,118,112,0);
          let commentw = 1.0;
          let targetl = false;
         libjsinspector8 = (parseFloat(`${expired8.length}`) * commentw) == 1.94;
         expired8 += `${((targetl ? 3 : 2))}`;
         commentw += (parseFloat(`${1 | (targetl ? 5 : 1)}`));
      projectq = whatsapps.length == 96 && !castV;
   }
      renew1 += `${mathr}`;
      hooks3 = [minivodg.length * iconclosewhitebg7.length];
   let iconmoreG = libavformatI.length >= 8743694;
   do {
      libavformatI.push(2);
      if (iconmoreG) {
         break;
      }
   } while ((matchesP.includes(libavformatI.length)) && iconmoreG);
   for (let q = 0; q < 1; q++) {
      hooks3.push(whatsapps.length % 2);
   }
      projectq = iconclosewhitebg7.length == 36;
   if ((emojib + 3.0) < 2.14 && 1.55 < (emojib + 3.0)) {
      emojib *= libavformatI.length + 2;
   }
   for (let d = 0; d < 1; d++) {
      minivodg.push(((projectq ? 3 : 3) >> (Math.min(Math.abs((castV ? 5 : 1)), 3))));
   }
      castV = (mathr - whatsapps.length) < 99;
      libavformatI.push((String.fromCharCode(51,0) == renew1 ? renew1.length : whatsapps.length));
   while (2 >= (iconclosewhitebg7.length & 4) && 1.71 >= (emojib / (Math.max(iconclosewhitebg7.length, 5)))) {
       let bangZ = String.fromCharCode(97,101,118,97,108,0);
       let libaner: Array<any> = [606, 138];
       let benefita: Map<any, any> = new Map([[String.fromCharCode(109,101,97,110,105,110,103,102,117,108,0),477], [String.fromCharCode(99,111,108,108,0),740]]);
         libaner = [(bangZ == String.fromCharCode(82,0) ? bangZ.length : benefita.size)];
         libaner.push(libaner.length % (Math.max(9, benefita.size)));
      for (let w = 0; w < 3; w++) {
         bangZ = `${libaner.length + 3}`;
      }
         libaner = [libaner.length << (Math.min(Math.abs(3), 5))];
       let eyeopen9 = true;
          let videocommoni = 2;
          let entryA: Map<any, any> = new Map([[String.fromCharCode(99,101,108,101,98,114,97,116,101,0),true ], [String.fromCharCode(117,112,100,97,116,101,115,0),false ], [String.fromCharCode(99,97,110,111,110,105,99,97,108,0),true ]]);
          let unselected3 = 4.0;
         libaner.push(libaner.length >> (Math.min(Math.abs(3), 5)));
         videocommoni &= videocommoni;
         entryA.set(`${videocommoni}`, videocommoni);
         unselected3 -= parseFloat(`${3}`);
      if (3 == bangZ.length) {
          let kickc = String.fromCharCode(118,105,97,98,108,101,0);
         benefita.set(kickc, 1 + kickc.length);
      }
         libaner = [bangZ.length * 3];
         libaner.push(libaner.length - 2);
      emojib *= ((castV ? 5 : 3));
      break;
   }
   let defaultplayerimge = 6547694.0 <= emojib;
   do {
      emojib /= Math.max((3 ^ (castV ? 3 : 3)), 5);
      if (defaultplayerimge) {
         break;
      }
   } while ((!castV || (2.46 + emojib) > 5.54) && defaultplayerimge);
      libavformatI.push(minivodg.length % 3);
      projectq = renew1 == String.fromCharCode(98,0);
   for (let c = 0; c < 3; c++) {
      scoreC = 78 == iconclosewhitebg7.length;
   }
       let entryb = String.fromCharCode(99,117,115,116,111,109,0);
       let expiredb = 3;
          let typess: Map<any, any> = new Map([[String.fromCharCode(97,114,101,110,97,115,0),String.fromCharCode(104,111,116,111,0)], [String.fromCharCode(99,111,109,112,97,110,121,0),String.fromCharCode(105,110,100,105,99,101,115,0)], [String.fromCharCode(115,122,97,98,111,0),String.fromCharCode(109,97,99,114,111,0)]]);
          let incidentS = true;
         expiredb >>= Math.min(Math.abs(typess.size), 1);
          let animationA = String.fromCharCode(115,116,114,111,107,101,114,0);
         entryb = `${expiredb * 3}`;
         animationA = `${2 >> (Math.min(5, animationA.length))}`;
          let orientationM = 1.0;
          let iconshareT: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,105,118,105,110,103,0),855], [String.fromCharCode(117,116,116,101,114,97,110,99,101,0),151]]);
         entryb = `${expiredb}`;
         orientationM /= Math.max(2, parseFloat(`${iconshareT.size | parseInt(`${orientationM}`)}`));
         iconshareT = new Map([[`${iconshareT.size}`, parseInt(`${orientationM}`) << (Math.min(Math.abs(1), 3))]]);
      if (2 >= (expiredb / (Math.max(entryb.length, 7))) && (expiredb / (Math.max(entryb.length, 4))) >= 2) {
          let live_ = String.fromCharCode(114,101,97,108,116,101,120,116,0);
          let transferb = String.fromCharCode(99,104,111,115,101,110,0);
         entryb += `${live_.length & expiredb}`;
         live_ += `${transferb.length}`;
         transferb += `${transferb.length * 2}`;
      }
       let scrollview6: Map<any, any> = new Map([[String.fromCharCode(109,97,121,98,101,0),true ], [String.fromCharCode(115,121,115,99,116,108,115,0),false ], [String.fromCharCode(97,99,99,0),false ]]);
       let assistb: Map<any, any> = new Map([[String.fromCharCode(97,99,102,105,108,116,101,114,0),291], [String.fromCharCode(117,110,109,97,116,99,104,101,100,0),539]]);
       let greyarrowupm = String.fromCharCode(115,108,111,112,0);
       let nalytics4 = String.fromCharCode(116,104,114,101,115,0);
      whatsapps = [expiredb];

        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
       let blackK = String.fromCharCode(112,114,111,109,111,0);
    let canvasQ = 1;
    let flyerJ = true;
    let libfollyb = true;
    let notificationd = String.fromCharCode(97,112,112,101,97,114,115,0);
    let giftbuttonr = 4;
    let targetC = String.fromCharCode(109,111,109,101,110,116,0);
    let libruntimeexecutoro = String.fromCharCode(99,111,110,99,97,116,0);
    let crossn: Array<any> = [String.fromCharCode(117,112,100,97,116,105,110,103,0), String.fromCharCode(104,109,97,99,108,105,115,116,0), String.fromCharCode(115,117,98,112,101,108,0)];
    let mimoA = 4;
    let footballfiledlayoutI = 5;
    let activityu = String.fromCharCode(115,112,101,101,100,117,112,0);
    let eventsplashX = true;
    let connection6 = false;
    let iconfeedbackK = String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
   while ((canvasQ & blackK.length) > 5 && (blackK.length & canvasQ) > 5) {
       let commonn = 5;
       let placeholderN = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,0);
      for (let h = 0; h < 3; h++) {
         placeholderN = `${(String.fromCharCode(113,0) == placeholderN ? commonn : placeholderN.length)}`;
      }
         placeholderN += `${commonn * placeholderN.length}`;
      for (let k = 0; k < 1; k++) {
          let unselectedE: Array<any> = [760, 301];
          let fastG = String.fromCharCode(97,110,105,109,97,116,105,111,110,0);
          let wind3 = String.fromCharCode(117,110,112,105,110,110,101,100,0);
          let components_ = String.fromCharCode(110,116,111,108,111,103,121,0);
         commonn &= wind3.length | commonn;
         unselectedE = [fastG.length];
         fastG += `${(String.fromCharCode(51,0) == fastG ? fastG.length : unselectedE.length)}`;
         wind3 += "2";
         components_ = `${fastG.length}`;
      }
      while (placeholderN.endsWith(`${commonn}`)) {
          let controls7: Map<any, any> = new Map([[String.fromCharCode(121,101,115,116,101,114,100,97,121,0),true ], [String.fromCharCode(99,101,108,112,0),false ], [String.fromCharCode(114,101,99,111,110,110,101,99,116,0),false ]]);
          let mbjscommonx: Array<any> = [901, 833, 885];
          let downC = true;
         commonn &= (String.fromCharCode(112,0) == placeholderN ? placeholderN.length : commonn);
         controls7 = new Map([[`${mbjscommonx.length}`, ((downC ? 4 : 2) * 3)]]);
         mbjscommonx = [mbjscommonx.length * 1];
         break;
      }
      while (5 < (commonn >> (Math.min(Math.abs(4), 4))) && 2 < (placeholderN.length >> (Math.min(Math.abs(4), 3)))) {
         placeholderN += `${2 ^ placeholderN.length}`;
         break;
      }
         placeholderN += `${commonn}`;
      canvasQ ^= 1 * blackK.length;
      break;
   }
      giftbuttonr += canvasQ << (Math.min(2, Math.abs(1)));
   for (let k = 0; k < 1; k++) {
      canvasQ += targetC.length;
   }
      flyerJ = 62 > footballfiledlayoutI && flyerJ;
       let giftbuttonX: Map<any, any> = new Map([[String.fromCharCode(108,115,102,112,111,108,121,0),true ], [String.fromCharCode(98,114,107,116,105,109,101,103,109,0),false ]]);
       let footballfieldp = 2;
       let reactnativeultimatelistviewn: Array<any> = [868, 62];
       let runtimeschedulerp = 1.0;
       let vignetteQ = 1.0;
         footballfieldp /= Math.max(3 | reactnativeultimatelistviewn.length, 3);
      while ((2 - reactnativeultimatelistviewn.length) > 2 && (giftbuttonX.size - reactnativeultimatelistviewn.length) > 2) {
         giftbuttonX.set(`${runtimeschedulerp}`, parseInt(`${runtimeschedulerp}`) / (Math.max(9, giftbuttonX.size)));
         break;
      }
         runtimeschedulerp += parseFloat(`${2 / (Math.max(5, reactnativeultimatelistviewn.length))}`);
          let playercommon0 = true;
          let delegate_oK: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,121,112,101,115,0),String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,0)], [String.fromCharCode(102,105,108,108,112,0),String.fromCharCode(98,97,99,107,105,110,103,0)], [String.fromCharCode(97,115,104,105,110,103,0),String.fromCharCode(110,111,111,112,0)]]);
          let pathX = String.fromCharCode(97,114,99,104,105,118,101,0);
         footballfieldp += pathX.length * 3;
         playercommon0 = null != delegate_oK.get(`${playercommon0}`);
         delegate_oK.set(`${playercommon0}`, (1 & (playercommon0 ? 3 : 1)));
         pathX += `${delegate_oK.size}`;
         vignetteQ -= parseFloat(`${giftbuttonX.size & 2}`);
      while (footballfieldp >= runtimeschedulerp) {
         footballfieldp ^= parseInt(`${vignetteQ}`) >> (Math.min(reactnativeultimatelistviewn.length, 1));
         break;
      }
      if (vignetteQ <= runtimeschedulerp) {
         vignetteQ *= parseFloat(`${3}`);
      }
      if (!reactnativeultimatelistviewn.includes(runtimeschedulerp)) {
         runtimeschedulerp *= parseFloat(`${parseInt(`${runtimeschedulerp}`) * footballfieldp}`);
      }
      notificationd = "3";
      libfollyb = !activityu.endsWith(`${flyerJ}`);
       let disconnectedv = 1;
       let searchbarp: Map<any, any> = new Map([[String.fromCharCode(99,108,117,115,116,101,114,115,0),573], [String.fromCharCode(103,97,105,110,115,0),568]]);
      if (3 == (disconnectedv - searchbarp.size)) {
         searchbarp = new Map([[`${searchbarp.size}`, searchbarp.size]]);
      }
         disconnectedv >>= Math.min(1, Math.abs(searchbarp.size | disconnectedv));
       let androidi = String.fromCharCode(109,101,115,111,110,0);
       let select6 = String.fromCharCode(115,121,110,116,97,120,0);
      while (4 > (select6.length / 4)) {
         select6 = `${searchbarp.size - disconnectedv}`;
         break;
      }
          let soundh = String.fromCharCode(99,111,112,121,97,100,100,0);
          let short_8u: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,0),String.fromCharCode(98,111,100,105,101,115,0)], [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,0),String.fromCharCode(101,108,115,116,0)], [String.fromCharCode(117,110,112,97,99,107,101,100,0),String.fromCharCode(116,105,112,0)]]);
          let unselectedM = String.fromCharCode(105,110,108,101,110,0);
         disconnectedv += 1 | unselectedM.length;
         soundh += `${soundh.length - 3}`;
         short_8u.set(soundh, (soundh == String.fromCharCode(68,0) ? soundh.length : short_8u.size));
         unselectedM = `${soundh.length}`;
       let securityQ = true;
      blackK += `${targetC.length | libruntimeexecutoro.length}`;
   for (let q = 0; q < 1; q++) {
      libruntimeexecutoro += "3";
   }
   for (let v = 0; v < 3; v++) {
      giftbuttonr += canvasQ ^ 3;
   }
   if ((crossn.length % 2) < 4) {
      crossn = [((flyerJ ? 2 : 4))];
   }
      blackK = `${canvasQ}`;
       let sellL = String.fromCharCode(110,105,108,0);
       let usernameh = 1.0;
      for (let b = 0; b < 2; b++) {
          let paginationQ: Array<any> = [989, 370];
          let incidentC = false;
          let friends1 = String.fromCharCode(112,105,112,101,108,105,110,101,0);
          let uimanagerb = 0;
         sellL = `${friends1.length}`;
         paginationQ.push(3 * paginationQ.length);
         incidentC = uimanagerb < 55;
         friends1 += `${paginationQ.length}`;
         uimanagerb &= 3 ^ uimanagerb;
      }
       let libimagepipelineZ = String.fromCharCode(110,111,104,119,0);
       let analyticsw = String.fromCharCode(99,111,109,109,97,110,100,0);
         sellL += `${parseInt(`${usernameh}`) << (Math.min(analyticsw.length, 3))}`;
      for (let h = 0; h < 1; h++) {
         sellL += `${parseInt(`${usernameh}`) << (Math.min(Math.abs(3), 3))}`;
      }
      while (1 <= (parseInt(`${usernameh}`) - sellL.length) || 1 <= (parseInt(`${usernameh}`) - sellL.length)) {
         sellL += "3";
         break;
      }
         sellL = `${sellL.length}`;
      giftbuttonr <<= Math.min(parseInt(`${Math.abs(((flyerJ ? 4 : 1) << (Math.min(Math.abs((eventsplashX ? 5 : 4)), 3))))}`), 5);
      eventsplashX = libruntimeexecutoro == String.fromCharCode(99,0);
       let nexta = false;
       let eighteenz: Array<any> = [214, 267];
         eighteenz.push(eighteenz.length);
       let questL = 5;
       let flipperX = 1;
      if (2 > (4 * questL) && nexta) {
          let utilsS: Array<any> = [916, 337];
          let libsentryt = String.fromCharCode(116,97,105,108,0);
          let rewarde = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,112,95,55,0);
          let lightg = 5;
         nexta = (3 >= ((nexta ? 3 : eighteenz.length) + eighteenz.length));
         utilsS = [utilsS.length % 1];
         libsentryt += `${3 * libsentryt.length}`;
         rewarde += `${2 >> (Math.min(3, utilsS.length))}`;
         lightg >>= Math.min(1, Math.abs(3 | libsentryt.length));
      }
         eighteenz.push(((nexta ? 2 : 4) * questL));
      for (let h = 0; h < 1; h++) {
          let recommendationU = 1;
          let logins = String.fromCharCode(100,114,97,103,95,103,95,56,56,0);
         questL -= recommendationU;
         logins += `${(String.fromCharCode(118,0) == logins ? logins.length : logins.length)}`;
      }
       let controlsz = String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,0);
       let iconsettingb = String.fromCharCode(117,112,108,111,97,100,115,0);
      targetC += "1";
      mimoA *= mimoA;

        setShowBackModel(false);

       let filled6: Array<any> = [818, 88];
          let halffieldimageN = 5;
          let reducerM: Map<any, any> = new Map([[String.fromCharCode(99,108,108,105,0),true ], [String.fromCharCode(115,112,101,110,100,101,114,0),true ]]);
         filled6 = [halffieldimageN];
         halffieldimageN &= 1 & reducerM.size;
         reducerM.set(`${reducerM.size}`, reducerM.size);
      if (!filled6.includes(filled6.length)) {
         filled6.push(filled6.length % (Math.max(filled6.length, 10)));
      }
          let weiboa = String.fromCharCode(112,108,97,116,102,111,114,109,0);
          let bingD = String.fromCharCode(115,111,99,111,110,110,101,99,116,0);
          let share6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,97,116,97,0),true ], [String.fromCharCode(100,97,116,97,0),true ], [String.fromCharCode(115,98,117,118,0),false ]]);
         filled6 = [(weiboa == String.fromCharCode(53,0) ? filled6.length : weiboa.length)];
         bingD += "3";
         share6.set(bingD, bingD.length);
      eventsplashX = libfollyb;
   if (5 <= (footballfiledlayoutI ^ 1) || (footballfiledlayoutI ^ giftbuttonr) <= 1) {
       let flagC = 3;
       let albumB = String.fromCharCode(115,116,97,99,107,118,105,101,119,0);
       let injuryw = String.fromCharCode(119,101,97,118,101,0);
         albumB += `${injuryw.length | 3}`;
      let stationK = 9105007 >= albumB.length;
      do {
         albumB += `${albumB.length}`;
         if (stationK) {
            break;
         }
      } while (stationK && (injuryw != String.fromCharCode(112,0)));
      giftbuttonr |= notificationd.length;
      flagC >>= Math.min(Math.abs(2), 3);
   }
   let lessX = 8015354 >= crossn.length;
   do {
       let libglogC: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,0),430], [String.fromCharCode(98,108,111,99,107,104,97,115,104,0),957]]);
       let libavfilterT = true;
         libavfilterT = !libavfilterT && libglogC.size >= 53;
         libglogC.set(`${libavfilterT}`, (libglogC.size | (libavfilterT ? 1 : 1)));
       let common0 = 1.0;
       let valuesL = 2.0;
      while ((libglogC.size + 5) < 3) {
          let turndownq = String.fromCharCode(116,114,105,103,103,101,114,0);
          let paginationl = true;
          let googleK = 5;
         libglogC = new Map([[`${libavfilterT}`, (1 + (paginationl ? 4 : 2))]]);
         turndownq += `${turndownq.length}`;
         paginationl = 90 > turndownq.length;
         googleK >>= Math.min(1, turndownq.length);
         break;
      }
         valuesL *= libglogC.size * parseInt(`${valuesL}`);
      if (4.0 == (5.0 * valuesL) || valuesL == 5.0) {
          let pressurea = 2.0;
          let signinupp = String.fromCharCode(111,98,106,101,99,116,0);
          let pointH = 3.0;
          let connectiona = 2.0;
          let sheet0: Map<any, any> = new Map([[String.fromCharCode(99,117,118,105,100,0),192], [String.fromCharCode(98,111,111,107,109,97,114,107,0),109]]);
         valuesL /= Math.max(5, 2);
         pressurea -= parseFloat(`${parseInt(`${pressurea}`) - sheet0.size}`);
         signinupp += `${sheet0.size + parseInt(`${pointH}`)}`;
         pointH -= parseInt(`${pressurea}`);
         connectiona += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${connectiona}`)), 3))}`);
      }
      crossn = [2];
      if (lessX) {
         break;
      }
   } while (lessX && ((crossn.length | targetC.length) > 2));
   if (4 <= giftbuttonr) {
       let reviewU: Map<any, any> = new Map([[String.fromCharCode(107,116,111,112,0),723], [String.fromCharCode(122,105,109,103,0),155], [String.fromCharCode(115,97,102,101,0),689]]);
       let renewi: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,110,101,116,0),false ], [String.fromCharCode(115,99,104,109,0),false ], [String.fromCharCode(115,105,103,115,0),false ]]);
      let policyN = 6029525 <= reviewU.size;
      do {
         reviewU.set(`${renewi.size}`, reviewU.size * renewi.size);
         if (policyN) {
            break;
         }
      } while (policyN && (Array.from(reviewU.keys()).includes(`${renewi.size}`)));
         reviewU.set(`${renewi.size}`, renewi.size ^ reviewU.size);
      let lighty = 9837656 >= reviewU.size;
      do {
         reviewU = new Map([[`${reviewU.size}`, 2 + renewi.size]]);
         if (lighty) {
            break;
         }
      } while (((reviewU.size + renewi.size) > 1 && (1 + renewi.size) > 3) && lighty);
          let eactS = String.fromCharCode(102,97,110,116,111,109,0);
          let chatF = String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
          let clearB: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,0),681], [String.fromCharCode(115,105,110,113,98,0),786], [String.fromCharCode(108,111,99,107,101,100,0),768]]);
         renewi = new Map([[`${clearB.size}`, chatF.length]]);
         eactS = `${eactS.length}`;
         chatF += `${2 | eactS.length}`;
      if (renewi.get(`${reviewU.size}`) != null) {
          let vignetteD = 3.0;
          let headerU = false;
          let mbbidz = String.fromCharCode(115,101,116,102,105,101,108,100,0);
         renewi.set(`${headerU}`, ((headerU ? 5 : 4) / 1));
         vignetteD *= parseFloat(`${mbbidz.length}`);
         mbbidz = `${parseInt(`${vignetteD}`) | 2}`;
      }
          let viewsH = 1;
          let subsx = String.fromCharCode(112,108,117,103,103,101,100,95,122,95,56,51,0);
          let dependencyK = String.fromCharCode(112,101,97,107,0);
         reviewU.set(dependencyK, dependencyK.length);
         viewsH ^= 3;
         subsx += `${viewsH}`;
      mimoA /= Math.max(2, (canvasQ + (eventsplashX ? 5 : 5)));
   }
       let unfillO = true;
       let math_ = String.fromCharCode(114,101,99,105,112,114,111,99,97,108,0);
      for (let i = 0; i < 3; i++) {
          let colorss = 2.0;
          let time_aI = false;
          let tumbnails = String.fromCharCode(119,114,105,116,101,99,111,112,121,0);
         math_ = `${(tumbnails.length | (time_aI ? 4 : 3))}`;
         colorss /= Math.max(2 % (Math.max(1, parseInt(`${colorss}`))), 4);
         time_aI = colorss >= 23.0;
      }
          let search9 = String.fromCharCode(114,105,110,103,116,111,110,101,115,0);
          let toponv = String.fromCharCode(107,117,107,105,95,100,95,57,55,0);
         math_ += `${(String.fromCharCode(117,0) == math_ ? math_.length : (unfillO ? 1 : 3))}`;
         search9 += `${toponv.length % (Math.max(2, 6))}`;
         toponv += `${toponv.length}`;
         unfillO = (35 <= ((unfillO ? math_.length : 35) / (Math.max(math_.length, 6))));
         math_ = `${(math_ == String.fromCharCode(106,0) ? math_.length : (unfillO ? 2 : 4))}`;
          let mbjscommonu = 0.0;
          let selectionq = 0;
          let relatedN: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(121,109,101,110,99,0),true ], [String.fromCharCode(103,101,116,101,110,118,0),false ]]);
         unfillO = 64.54 >= mbjscommonu && unfillO;
         mbjscommonu -= parseFloat(`${selectionq}`);
         selectionq <<= Math.min(3, Math.abs(relatedN.size));
         relatedN = new Map([[`${relatedN.size}`, selectionq << (Math.min(Math.abs(3), 5))]]);
         unfillO = !unfillO;
      libfollyb = (!libfollyb ? flyerJ : libfollyb);
      notificationd += `${libruntimeexecutoro.length}`;
   for (let b = 0; b < 3; b++) {
      eventsplashX = libruntimeexecutoro.length < 75;
   }
   let materialU = 9415756 <= giftbuttonr;
   do {
      giftbuttonr *= 2;
      if (materialU) {
         break;
      }
   } while ((5 >= (2 - giftbuttonr)) && materialU);
   while (targetC.endsWith(`${crossn.length}`)) {
      crossn.push((blackK == String.fromCharCode(89,0) ? blackK.length : crossn.length));
      break;
   }
      blackK += `${2 + mimoA}`;
       let iconarrowright7: Array<any> = [904, 974];
       let sortK = String.fromCharCode(114,101,109,111,116,101,108,121,0);
      while (sortK.includes(`${iconarrowright7.length}`)) {
         sortK = `${iconarrowright7.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      while (1 <= (5 - iconarrowright7.length) && 1 <= (iconarrowright7.length - 5)) {
          let calendar8: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,100,101,114,105,118,97,116,105,118,101,0),String.fromCharCode(112,114,101,105,110,105,116,0)], [String.fromCharCode(97,114,98,105,116,114,117,109,0),String.fromCharCode(105,100,101,110,116,105,99,97,108,0)], [String.fromCharCode(122,101,114,111,118,0),String.fromCharCode(102,114,101,101,116,121,112,101,0)]]);
          let trophyd = 4.0;
          let station5 = true;
          let mailr = String.fromCharCode(97,102,102,101,99,116,0);
         iconarrowright7 = [sortK.length % (Math.max(10, iconarrowright7.length))];
         calendar8 = new Map([[mailr, parseInt(`${trophyd}`) / (Math.max(mailr.length, 10))]]);
         trophyd *= (parseFloat(`${3 | (station5 ? 5 : 1)}`));
         station5 = (((station5 ? calendar8.size : 19) | calendar8.size) < 90);
         break;
      }
         sortK = `${sortK.length}`;
         sortK = `${(String.fromCharCode(89,0) == sortK ? sortK.length : iconarrowright7.length)}`;
          let iconeditt = String.fromCharCode(114,101,99,121,99,108,101,0);
          let assists: Array<any> = [606, 715, 918];
          let bootsplashm: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,101,100,0),136], [String.fromCharCode(112,114,111,109,105,115,101,0),463]]);
         sortK = `${(String.fromCharCode(111,0) == sortK ? sortK.length : iconarrowright7.length)}`;
         iconeditt += `${assists.length}`;
         assists = [1 * iconeditt.length];
         bootsplashm = new Map([[`${bootsplashm.size}`, 2]]);
         iconarrowright7 = [1 + iconarrowright7.length];
      targetC += `${(String.fromCharCode(103,0) == notificationd ? notificationd.length : crossn.length)}`;
   for (let f = 0; f < 2; f++) {
      footballfiledlayoutI &= libruntimeexecutoro.length;
   }
      targetC = `${libruntimeexecutoro.length}`;
   if (flyerJ && 1 < activityu.length) {
       let launcherY = String.fromCharCode(102,102,116,112,97,99,107,0);
      if (launcherY == launcherY) {
         launcherY += `${launcherY.length | launcherY.length}`;
      }
      while (launcherY != String.fromCharCode(119,0)) {
          let philippinesn = String.fromCharCode(119,101,108,108,0);
         launcherY += `${philippinesn.length}`;
         break;
      }
      let rncoreH = 6464934 <= launcherY.length;
      do {
         launcherY = `${launcherY.length & launcherY.length}`;
         if (rncoreH) {
            break;
         }
      } while ((launcherY.length == launcherY.length) && rncoreH);
      activityu += `${((libfollyb ? 4 : 2))}`;
   }
   if (!notificationd.endsWith(`${flyerJ}`)) {
       let dialogd = String.fromCharCode(100,101,112,101,110,100,0);
      for (let y = 0; y < 1; y++) {
         dialogd = `${(dialogd == String.fromCharCode(69,0) ? dialogd.length : dialogd.length)}`;
      }
       let resendN = String.fromCharCode(114,97,112,104,105,99,115,0);
       let topicP = String.fromCharCode(97,112,112,97,114,101,110,116,0);
      if (resendN.length == 2) {
         resendN += `${resendN.length - 2}`;
      }
      notificationd = `${libruntimeexecutoro.length}`;
   }
        wwInjury.back();
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