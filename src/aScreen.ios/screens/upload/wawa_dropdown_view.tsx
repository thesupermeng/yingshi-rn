import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { wawaLayout } from "../../../routes/wawa_playlist_casting";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/wawa_main_collection";
import { UploadProgressOverlay } from "../../components/modal/wawa_tempnodatagif_expired";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/wawa_iconpointscore";
import { useAppDispatch } from "@hooks/wawa_root";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/wawa_iconedit";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import DefaultVideoThumbnail from '@static/images/listPressureLivenodatabgimg.svg';
import { saveUploadHistory } from "@redux/actions/wawa_unfill_iconclosewhite";

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
       let backicone = String.fromCharCode(112,95,55,95,98,101,116,97,0);
    let telegramb: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,112,97,100,100,101,100,0),true ], [String.fromCharCode(112,95,56,49,95,100,115,99,112,0),true ]]);
    let utils6 = false;
    let renew1: Array<any> = [276, 727, 77];
    let maill: Array<any> = [652, 450];
    let grey9 = 5;
    let trophyV = 0;
    let windV = String.fromCharCode(104,95,54,55,95,104,119,99,111,110,116,101,120,116,0);
   let codegenH = trophyV >= 6530349;
   do {
      trophyV &= grey9;
      if (codegenH) {
         break;
      }
   } while (((5 & maill.length) == 5 || (maill.length & trophyV) == 5) && codegenH);
   for (let n = 0; n < 3; n++) {
      trophyV <<= Math.min(5, Math.abs(telegramb.size - maill.length));
   }
      telegramb = new Map([[`${maill.length}`, 2]]);

        try {

      grey9 >>= Math.min(3, Math.abs(grey9 ^ trophyV));
   while (!utils6 && (maill.length & 2) == 5) {
      maill.push(backicone.length / 2);
      break;
   }
   let mappingW = 9214858 <= telegramb.size;
   do {
      telegramb = new Map([[`${renew1.length}`, backicone.length & renew1.length]]);
      if (mappingW) {
         break;
      }
   } while (mappingW && (utils6));
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, 
            })

   let goallogoC = trophyV >= 5568669;
   do {
       let topicB = 3.0;
       let ncopy_vn = 5.0;
      while (2.6 == (4 - topicB)) {
          let otherp = String.fromCharCode(113,117,97,108,105,102,121,95,122,95,57,48,0);
         ncopy_vn /= Math.max(3, parseFloat(`${parseInt(`${ncopy_vn}`)}`));
         otherp = `${otherp.length - otherp.length}`;
         break;
      }
          let progresse = 2;
          let memberh = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,102,95,50,48,0);
          let a_lockR = String.fromCharCode(105,95,57,50,95,108,105,98,120,109,108,0);
         ncopy_vn -= parseFloat(`${progresse << (Math.min(Math.abs(2), 2))}`);
         progresse <<= Math.min(2, Math.abs(1));
         memberh += `${memberh.length << (Math.min(a_lockR.length, 1))}`;
         a_lockR += `${1 - a_lockR.length}`;
         ncopy_vn /= Math.max(parseFloat(`${3}`), 4);
       let description_pvr = String.fromCharCode(115,104,111,119,95,53,95,51,49,0);
      while (!description_pvr.includes(`${topicB}`)) {
         description_pvr += `${parseInt(`${topicB}`) >> (Math.min(3, Math.abs(1)))}`;
         break;
      }
       let gemfiler = true;
      trophyV /= Math.max(3, parseInt(`${ncopy_vn}`));
      if (goallogoC) {
         break;
      }
   } while ((utils6 || 3 == (4 >> (Math.min(4, Math.abs(trophyV))))) && goallogoC);
       let iconcurrentmatch9 = String.fromCharCode(120,95,49,54,95,97,115,116,114,111,110,111,109,105,99,97,108,0);
       let updatesp = 4.0;
       let pnewinterstitialB: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,112,114,111,112,111,115,101,0),130], [String.fromCharCode(110,101,120,116,108,95,101,95,51,54,0),510], [String.fromCharCode(100,95,53,52,95,98,97,115,101,100,0),535]]);
      while ((updatesp * 2.71) <= 1.53 && (pnewinterstitialB.size * parseInt(`${updatesp}`)) <= 2) {
          let selectionW = 2;
          let ajaxf = String.fromCharCode(111,95,54,49,95,102,114,97,103,109,101,110,116,115,0);
          let episodeg = 5.0;
         updatesp /= Math.max(3, parseFloat(`${parseInt(`${updatesp}`)}`));
         selectionW *= ajaxf.length;
         ajaxf += `${parseInt(`${episodeg}`)}`;
         episodeg *= 3;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let textinputH = 4.0;
          let notificationfillemptyR: Array<any> = [646, 738];
          let jingdongq: Map<any, any> = new Map([[String.fromCharCode(116,111,100,97,121,115,95,54,95,54,0),false ], [String.fromCharCode(117,116,102,116,111,95,57,95,55,54,0),true ], [String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,107,95,55,57,0),true ]]);
         iconcurrentmatch9 = `${iconcurrentmatch9.length * 2}`;
         textinputH /= Math.max(2, parseFloat(`${1}`));
         notificationfillemptyR = [parseInt(`${textinputH}`)];
         jingdongq = new Map([[`${jingdongq.size}`, jingdongq.size ^ notificationfillemptyR.length]]);
      }
      if (pnewinterstitialB.get(`${updatesp}`) != null) {
         pnewinterstitialB = new Map([[`${pnewinterstitialB.size}`, (String.fromCharCode(118,0) == iconcurrentmatch9 ? pnewinterstitialB.size : iconcurrentmatch9.length)]]);
      }
         pnewinterstitialB.set(`${updatesp}`, parseInt(`${updatesp}`) + pnewinterstitialB.size);
      for (let q = 0; q < 2; q++) {
          let sliderg: Array<any> = [391, 440, 942];
         updatesp -= parseFloat(`${sliderg.length >> (Math.min(Math.abs(1), 1))}`);
      }
      if ((pnewinterstitialB.size | iconcurrentmatch9.length) <= 1) {
          let serviceu: Map<any, any> = new Map([[String.fromCharCode(115,105,110,116,105,95,102,95,53,52,0),629], [String.fromCharCode(115,104,105,102,116,101,100,95,53,95,55,54,0),305], [String.fromCharCode(102,114,111,109,95,109,95,52,56,0),310]]);
          let spinner2: Array<any> = [String.fromCharCode(109,95,53,95,104,105,116,0), String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,106,95,55,49,0), String.fromCharCode(110,95,55,55,95,100,101,108,101,103,97,116,101,0)];
          let predictionbuttonM = 1.0;
         pnewinterstitialB = new Map([[`${serviceu.size}`, 3 | serviceu.size]]);
         spinner2 = [parseInt(`${predictionbuttonM}`)];
         predictionbuttonM += parseFloat(`${spinner2.length << (Math.min(Math.abs(1), 2))}`);
      }
      while ((iconcurrentmatch9.length - 1) == 3) {
         iconcurrentmatch9 = `${2 << (Math.min(2, Math.abs(parseInt(`${updatesp}`))))}`;
         break;
      }
      let morea = iconcurrentmatch9.length >= 9803052;
      do {
         iconcurrentmatch9 += `${pnewinterstitialB.size ^ iconcurrentmatch9.length}`;
         if (morea) {
            break;
         }
      } while ((updatesp == parseFloat(`${iconcurrentmatch9.length}`)) && morea);
          let googleI = 3.0;
          let imagenetworkerrg = 2;
         updatesp *= parseFloat(`${parseInt(`${googleI}`) << (Math.min(Math.abs(2), 4))}`);
         googleI -= parseFloat(`${imagenetworkerrg % (Math.max(imagenetworkerrg, 8))}`);
      renew1.push(3);
   if (Array.from(telegramb.values()).includes(trophyV)) {
      trophyV *= 3;
   }

            if (response) {

      backicone = `${((utils6 ? 2 : 2) / (Math.max(trophyV, 2)))}`;
      trophyV *= telegramb.size ^ maill.length;
       let turne = 5;
       let updatesE = false;
       let defaultpredictionprofileK = 3;
       let topon6: Array<any> = [151, 250, 447];
       let baiduadsS: Array<any> = [String.fromCharCode(119,95,57,56,95,119,111,114,107,115,0), String.fromCharCode(106,95,49,52,95,114,101,99,111,110,110,101,99,116,105,110,103,0)];
      if ((4 - turne) >= 5 || updatesE) {
          let anythink1 = 5.0;
          let chatk: Array<any> = [52, 92, 483];
         updatesE = anythink1 < parseFloat(`${chatk.length}`);
      }
          let verticall = String.fromCharCode(118,114,101,112,95,116,95,53,56,0);
          let module1: Array<any> = [String.fromCharCode(114,111,108,108,105,110,103,95,56,95,55,0), String.fromCharCode(112,95,57,48,95,114,101,99,111,110,105,110,116,114,97,120,0), String.fromCharCode(108,111,103,102,110,95,121,95,53,53,0)];
         topon6 = [baiduadsS.length >> (Math.min(topon6.length, 2))];
         verticall = `${verticall.length}`;
         module1.push(3);
          let penaltygoal3 = 5.0;
          let turndownm = 3.0;
          let clockp: Array<any> = [567, 471];
         baiduadsS = [1 / (Math.max(parseInt(`${turndownm}`), 5))];
         penaltygoal3 *= clockp.length | parseInt(`${penaltygoal3}`);
         turndownm -= parseInt(`${penaltygoal3}`) ^ clockp.length;
         turne &= defaultpredictionprofileK;
       let condensedf = String.fromCharCode(112,114,105,118,95,57,95,54,51,0);
       let selln = String.fromCharCode(110,100,101,102,95,98,95,56,48,0);
      for (let g = 0; g < 3; g++) {
         condensedf += `${selln.length + 1}`;
      }
      while (condensedf == String.fromCharCode(56,0) || selln.length >= 5) {
         selln += "3";
         break;
      }
         topon6.push(selln.length / (Math.max(1, baiduadsS.length)));
      renew1.push(3 & telegramb.size);
                setVideoThumbnail(response.path);
            } else {

       let bgvipxvods: Array<any> = [881, 485];
       let baidu_ = 3.0;
       let singleA = 1.0;
      if (3.22 <= baidu_) {
         baidu_ -= parseInt(`${baidu_}`);
      }
      for (let f = 0; f < 1; f++) {
         bgvipxvods = [parseInt(`${baidu_}`)];
      }
         bgvipxvods = [parseInt(`${singleA}`) ^ parseInt(`${baidu_}`)];
       let calendarG = 5;
       let yellowanimationliveP = 1;
         baidu_ /= Math.max(1 - parseInt(`${singleA}`), 1);
      while (4 < (calendarG & 3)) {
         baidu_ -= calendarG;
         break;
      }
      while ((yellowanimationliveP >> (Math.min(Math.abs(4), 4))) < 1 || (yellowanimationliveP / (Math.max(4, parseInt(`${singleA}`)))) < 4) {
         yellowanimationliveP %= Math.max(1, parseInt(`${singleA}`) / (Math.max(bgvipxvods.length, 6)));
         break;
      }
      for (let c = 0; c < 3; c++) {
         baidu_ /= Math.max(yellowanimationliveP + 3, 3);
      }
       let shrinke: Array<any> = [747, 342];
      trophyV &= 1 & parseInt(`${singleA}`);
       let temperaturex = 5.0;
       let matches3 = 0.0;
       let videoc: Array<any> = [348, 636];
      for (let l = 0; l < 2; l++) {
         videoc = [1 >> (Math.min(Math.abs(parseInt(`${matches3}`)), 1))];
      }
      let emojiheart8 = 7033038.0 <= matches3;
      do {
         matches3 *= parseInt(`${temperaturex}`);
         if (emojiheart8) {
            break;
         }
      } while (emojiheart8 && ((matches3 / (Math.max(videoc.length, 5))) < 4.35));
         matches3 -= parseInt(`${matches3}`) | parseInt(`${temperaturex}`);
      while (1.96 == (4.12 * temperaturex) || (5 / (Math.max(6, videoc.length))) == 1) {
         videoc = [2];
         break;
      }
      for (let o = 0; o < 3; o++) {
         matches3 /= Math.max(videoc.length << (Math.min(1, Math.abs(parseInt(`${matches3}`)))), 4);
      }
      if ((videoc.length - 1) >= 4) {
          let thumbnaild = String.fromCharCode(119,105,108,100,99,97,114,100,95,108,95,49,51,0);
          let photo0 = String.fromCharCode(97,114,114,111,119,95,56,95,55,53,0);
          let homeinactiveu = 0;
         matches3 += (photo0 == String.fromCharCode(89,0) ? homeinactiveu : photo0.length);
         thumbnaild = `${(String.fromCharCode(84,0) == thumbnaild ? thumbnaild.length : thumbnaild.length)}`;
      }
      if (2 > (1 & videoc.length)) {
         matches3 /= Math.max(1, videoc.length & parseInt(`${matches3}`));
      }
       let gesturesG = 5.0;
       let mimoP = 4.0;
         gesturesG /= Math.max(5, videoc.length | 3);
      windV = `${grey9}`;
   while (utils6) {
      telegramb.set(`${utils6}`, 3 % (Math.max(7, renew1.length)));
      break;
   }
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
       let defaultprofilepicc = String.fromCharCode(100,101,118,105,99,101,95,51,95,57,55,0);
    let dependencyl = true;
    let penalty6 = String.fromCharCode(103,95,57,53,95,113,115,118,118,112,112,0);
    let arrow5 = 5.0;
    let eyeopenh = 3.0;
    let predictionm = 4.0;
    let iconqqQ = String.fromCharCode(115,101,99,117,114,105,116,121,95,56,95,52,52,0);
    let codegens: Array<any> = [406, 906];
    let airbnbstara = String.fromCharCode(103,97,116,105,110,103,95,52,95,48,0);
    let klevin6 = 0;
    let libavcodecS = 4.0;
    let savel = false;
    let phoneshare9 = true;
    let sideM = true;
    let liveb = 5;
    let appleb = 0;
    let detail4: Map<any, any> = new Map([[String.fromCharCode(109,95,55,53,95,119,105,100,101,115,99,114,101,101,110,0),756], [String.fromCharCode(99,111,108,111,114,115,95,121,95,52,48,0),577]]);
      penalty6 += `${parseInt(`${libavcodecS}`) + 2}`;
   if (2.14 > (5 - eyeopenh)) {
      predictionm *= defaultprofilepicc.length;
   }

        if (videoTitle === undefined || videoTitle === '') {

   if (eyeopenh < 2.65) {
      dependencyl = (defaultprofilepicc.length / (Math.max(5, eyeopenh))) >= 62.95;
   }
      codegens = [klevin6];
            setVideoTitleErrMsg('请填写标题');

   let middlebrightness0 = eyeopenh >= 8119956.0;
   do {
      eyeopenh *= 1;
      if (middlebrightness0) {
         break;
      }
   } while ((1 < iconqqQ.length) && middlebrightness0);
      airbnbstara = `${penalty6.length * 1}`;
            return;
        } else {

   while (1.61 <= (4 * predictionm)) {
      arrow5 += 3 >> (Math.min(Math.abs(klevin6), 2));
      break;
   }
       let filledk = 2.0;
       let fieldM: Map<any, any> = new Map([[String.fromCharCode(121,95,57,54,95,114,101,100,117,99,101,0),621], [String.fromCharCode(104,95,56,54,0),607], [String.fromCharCode(97,112,112,101,97,114,105,110,103,95,121,95,56,0),57]]);
       let untick0 = String.fromCharCode(110,95,51,95,110,117,109,101,114,111,0);
      let green2 = String.fromCharCode(100,109,56,120,100,0) == untick0;
      do {
         untick0 = `${(untick0 == String.fromCharCode(122,0) ? fieldM.size : untick0.length)}`;
         if (green2) {
            break;
         }
      } while ((2.47 > (filledk + untick0.length)) && green2);
         filledk += parseInt(`${filledk}`);
      if (4.51 < (filledk / 5.88)) {
         untick0 += `${parseInt(`${filledk}`) - 2}`;
      }
          let liblogger2 = String.fromCharCode(103,114,97,100,102,117,110,95,52,95,50,54,0);
          let inouttargetredf = 4.0;
         fieldM = new Map([[`${fieldM.size}`, parseInt(`${filledk}`)]]);
         liblogger2 += `${1 % (Math.max(6, parseInt(`${inouttargetredf}`)))}`;
         inouttargetredf += 2;
       let attributedstringp = 1.0;
       let chinay = 3.0;
      if ((1 - fieldM.size) >= 2) {
         fieldM = new Map([[`${fieldM.size}`, 1 ^ fieldM.size]]);
      }
         chinay *= fieldM.size >> (Math.min(Math.abs(1), 3));
      while (attributedstringp < 4.47) {
         attributedstringp *= (untick0 == String.fromCharCode(73,0) ? untick0.length : parseInt(`${attributedstringp}`));
         break;
      }
          let castx = String.fromCharCode(97,117,103,109,101,110,116,95,120,95,52,50,0);
          let iconarrowrightoranger = true;
          let binddatas3 = String.fromCharCode(115,110,97,112,95,56,95,53,48,0);
         attributedstringp /= Math.max(fieldM.size << (Math.min(5, Math.abs(parseInt(`${filledk}`)))), 4);
         castx += `${binddatas3.length + 1}`;
         iconarrowrightoranger = binddatas3.length < 93;
      libavcodecS *= parseFloat(`${codegens.length << (Math.min(Math.abs(3), 4))}`);
            setVideoTitleErrMsg(undefined);
        }

        try {

      klevin6 %= Math.max(2, 2 % (Math.max(parseInt(`${libavcodecS}`), 4)));
      iconqqQ = `${penalty6.length - 3}`;
            

      libavcodecS *= parseFloat(`${parseInt(`${arrow5}`) ^ codegens.length}`);
   let templateprocessor0 = savel ? !savel : savel;
   do {
       let arrowdown0 = 1.0;
         arrowdown0 *= parseFloat(`${parseInt(`${arrowdown0}`) & parseInt(`${arrowdown0}`)}`);
      let iconnewsshareJ = arrowdown0 <= 6675371.0;
      do {
         arrowdown0 /= Math.max(parseFloat(`${3}`), 4);
         if (iconnewsshareJ) {
            break;
         }
      } while ((1.68 == (arrowdown0 * 5)) && iconnewsshareJ);
          let empty5 = false;
         arrowdown0 *= parseFloat(`${1 * parseInt(`${arrowdown0}`)}`);
         empty5 = empty5 || empty5;
      savel = !dependencyl;
      if (templateprocessor0) {
         break;
      }
   } while (templateprocessor0 && (savel));

            

   while (3 > codegens.length && 2 > (3 * codegens.length)) {
       let mintegrale = String.fromCharCode(99,95,49,49,95,119,97,108,108,0);
       let subout1 = String.fromCharCode(98,95,50,57,95,97,99,99,101,115,115,0);
       let detailB = false;
       let jingdongx = String.fromCharCode(108,105,98,99,101,108,116,95,108,95,54,54,0);
         detailB = subout1 == String.fromCharCode(83,0);
       let apples: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,97,95,53,57,0),String.fromCharCode(115,116,98,108,95,108,95,55,0)], [String.fromCharCode(112,115,110,114,120,95,110,95,49,48,48,0),String.fromCharCode(116,121,112,101,95,50,95,50,50,0)], [String.fromCharCode(115,101,99,116,105,111,110,95,121,95,52,51,0),String.fromCharCode(117,95,53,49,95,103,97,109,109,97,0)]]);
          let back1 = String.fromCharCode(119,95,56,48,95,97,118,103,98,108,117,114,0);
          let smallsounds = String.fromCharCode(114,112,99,103,101,110,95,116,95,53,0);
         jingdongx = `${subout1.length >> (Math.min(Math.abs(2), 5))}`;
         back1 += `${smallsounds.length}`;
         smallsounds += `${back1.length % (Math.max(1, 7))}`;
         detailB = 16 >= jingdongx.length;
         subout1 = `${subout1.length}`;
      for (let l = 0; l < 1; l++) {
         jingdongx = `${subout1.length - apples.size}`;
      }
          let gesturesD = 1.0;
          let previewp: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,116,97,112,116,0),964], [String.fromCharCode(101,95,54,51,95,114,101,97,114,0),446], [String.fromCharCode(103,95,51,51,95,111,99,117,109,101,110,116,0),704]]);
          let pangleW = String.fromCharCode(104,95,51,57,95,102,105,116,116,105,110,103,0);
         subout1 += "3";
         gesturesD -= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${gesturesD}`))))}`);
         previewp.set(`${gesturesD}`, parseInt(`${gesturesD}`) / 1);
         pangleW = `${pangleW.length % (Math.max(2, 1))}`;
       let combinea = false;
       let mathz = false;
      let ajaxI = apples.size >= 9235174;
      do {
         apples.set(`${jingdongx}`, jingdongx.length + 2);
         if (ajaxI) {
            break;
         }
      } while (ajaxI && (!combinea));
       let constantss: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,95,49,95,55,48,0),String.fromCharCode(116,114,117,110,95,49,95,51,57,0)], [String.fromCharCode(97,118,99,111,100,101,99,114,101,115,95,119,95,49,53,0),String.fromCharCode(99,97,115,104,116,97,103,95,111,95,53,56,0)], [String.fromCharCode(99,111,111,114,100,95,119,95,49,48,48,0),String.fromCharCode(98,108,101,110,100,95,105,95,48,0)]]);
          let iconnewssharem = 4;
         mathz = !mathz || combinea;
         iconnewssharem ^= 1 | iconnewssharem;
      if (!detailB) {
          let humidity_ = 0.0;
          let footballT = String.fromCharCode(98,95,50,53,95,99,104,114,111,110,111,0);
          let const_6_ = 1.0;
         detailB = 55 >= constantss.size;
         humidity_ *= parseFloat(`${parseInt(`${const_6_}`) * parseInt(`${humidity_}`)}`);
         footballT += `${parseInt(`${humidity_}`)}`;
         const_6_ *= parseFloat(`${parseInt(`${humidity_}`) | footballT.length}`);
      }
      phoneshare9 = mintegrale.endsWith(`${eyeopenh}`);
      break;
   }
   let loginsuccess3 = savel ? !savel : savel;
   do {
       let clubw = String.fromCharCode(109,117,115,105,99,95,110,95,54,49,0);
       let distb: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,95,97,121,111,117,116,0),false ], [String.fromCharCode(103,95,54,56,95,109,111,110,107,101,121,115,97,117,100,105,111,0),false ], [String.fromCharCode(112,95,53,49,95,115,116,97,116,115,0),true ]]);
         distb.set(`${clubw}`, distb.size);
       let shrinkZ = 1.0;
       let unselectedc = 2.0;
         clubw = `${2 | distb.size}`;
          let selectedb = String.fromCharCode(99,97,115,99,97,100,101,100,95,110,95,50,49,0);
          let orangedownarrow7 = 5.0;
         unselectedc += parseFloat(`${clubw.length + parseInt(`${orangedownarrow7}`)}`);
         selectedb += `${selectedb.length}`;
         orangedownarrow7 *= (parseFloat(`${String.fromCharCode(115,0) == selectedb ? selectedb.length : selectedb.length}`));
       let uploadT = 5.0;
         shrinkZ += parseFloat(`${parseInt(`${unselectedc}`)}`);
      savel = 23 >= iconqqQ.length;
      if (loginsuccess3) {
         break;
      }
   } while ((phoneshare9) && loginsuccess3);

            

   for (let u = 0; u < 1; u++) {
       let complete1 = String.fromCharCode(102,95,55,48,95,115,117,109,120,0);
       let tempd: Array<any> = [319, 369, 560];
       let fasto = String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,104,95,54,50,0);
       let ewardedm: Map<any, any> = new Map([[String.fromCharCode(118,95,55,52,95,101,120,116,114,97,112,111,108,97,116,101,0),String.fromCharCode(121,95,49,52,95,100,97,116,97,104,97,115,104,0)], [String.fromCharCode(100,95,51,95,114,101,103,105,115,116,114,97,114,0),String.fromCharCode(108,97,121,101,114,115,95,111,95,51,48,0)]]);
      let qaagL = String.fromCharCode(106,103,122,57,0) == complete1;
      do {
          let rewardU: Array<any> = [String.fromCharCode(97,108,112,97,95,106,95,49,55,0), String.fromCharCode(97,95,56,51,95,99,111,110,116,97,105,110,101,114,115,0)];
          let launcherA: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,95,121,95,51,52,0),true ], [String.fromCharCode(111,95,56,50,95,109,97,108,108,111,99,0),true ], [String.fromCharCode(116,95,53,52,95,115,111,108,118,101,114,0),false ]]);
          let awayT = 0;
          let libswscaleu = 1;
         complete1 = `${fasto.length / 2}`;
         rewardU = [1 >> (Math.min(2, rewardU.length))];
         launcherA.set(`${awayT}`, 2 << (Math.min(4, Math.abs(libswscaleu))));
         awayT &= libswscaleu;
         if (qaagL) {
            break;
         }
      } while ((complete1.length < tempd.length) && qaagL);
         ewardedm.set(complete1, 2);
         complete1 = `${tempd.length}`;
      for (let c = 0; c < 3; c++) {
          let update_fG = 5.0;
          let snewinterstitialC: Array<any> = [51, 689, 856];
          let clear3: Array<any> = [190, 207, 93];
          let configE = String.fromCharCode(115,97,108,116,115,95,53,95,57,56,0);
         ewardedm.set(fasto, fasto.length);
         update_fG *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${update_fG}`)), 3))}`);
         snewinterstitialC = [clear3.length ^ snewinterstitialC.length];
         clear3.push(1);
         configE = "3";
      }
          let assistb = 5.0;
          let philippines9 = String.fromCharCode(116,95,51,53,95,114,105,112,101,109,100,0);
         ewardedm = new Map([[`${ewardedm.size}`, 2 - philippines9.length]]);
         assistb -= parseFloat(`${3 * parseInt(`${assistb}`)}`);
         philippines9 += `${parseInt(`${assistb}`) - parseInt(`${assistb}`)}`;
      if (complete1 == String.fromCharCode(109,0) && fasto != String.fromCharCode(80,0)) {
         fasto = `${tempd.length}`;
      }
       let homeloadingp: Array<any> = [String.fromCharCode(111,95,54,54,95,116,105,109,101,111,117,116,0), String.fromCharCode(109,95,49,48,48,95,100,111,103,115,0)];
       let fill7: Array<any> = [688, 615];
         complete1 = `${ewardedm.size / (Math.max(3, 6))}`;
       let neonZ = false;
      if (3 <= (5 * tempd.length)) {
         fasto += `${tempd.length}`;
      }
          let reward6 = true;
         ewardedm = new Map([[`${ewardedm.size}`, tempd.length - ewardedm.size]]);
         reward6 = (reward6 ? reward6 : reward6);
      if (complete1.length >= 1 && neonZ) {
         complete1 += `${3 << (Math.min(5, fill7.length))}`;
      }
      sideM = !dependencyl && 81 < klevin6;
   }
      arrow5 /= Math.max(((sideM ? 3 : 3) % (Math.max(penalty6.length, 3))), 3);
            

       let episodes2 = 2.0;
       let profileframeo = String.fromCharCode(103,111,108,100,101,110,95,53,95,57,49,0);
       let libfabricjni7 = true;
      while ((2.34 - episodes2) == 4.0 || 2.34 == episodes2) {
         episodes2 -= 2 % (Math.max(7, profileframeo.length));
         break;
      }
      while (3.35 > (4.13 / (Math.max(1, episodes2))) && episodes2 > 4.13) {
         libfabricjni7 = !profileframeo.startsWith(`${episodes2}`);
         break;
      }
       let hooksB = String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,95,117,95,51,56,0);
      if (!libfabricjni7 || 3 > hooksB.length) {
         libfabricjni7 = hooksB.length <= 49;
      }
         libfabricjni7 = !libfabricjni7;
         profileframeo += `${((libfabricjni7 ? 2 : 3) / (Math.max(3, hooksB.length)))}`;
      for (let y = 0; y < 3; y++) {
         libfabricjni7 = hooksB.length == 24;
      }
         libfabricjni7 = String.fromCharCode(117,0) == profileframeo && 81 <= hooksB.length;
         libfabricjni7 = profileframeo.length <= 74;
      liveb &= parseInt(`${episodes2}`);
      klevin6 &= 1;
            

       let r_viewg = false;
       let tnewsshare9 = 4;
       let shrinkg = 2;
      while (1 > shrinkg) {
          let profilepick = String.fromCharCode(111,95,55,52,95,111,117,116,108,105,110,107,0);
          let dicel = 5;
          let neonh = 4;
         tnewsshare9 >>= Math.min(2, Math.abs(dicel));
         profilepick = `${neonh & 1}`;
         neonh |= 3 % (Math.max(3, profilepick.length));
         break;
      }
      for (let b = 0; b < 2; b++) {
         shrinkg *= tnewsshare9 / (Math.max(shrinkg, 10));
      }
         r_viewg = shrinkg == tnewsshare9;
          let telegramc = 3.0;
          let previewt: Array<any> = [String.fromCharCode(110,95,49,57,95,100,101,115,99,114,105,112,116,105,111,110,115,0), String.fromCharCode(119,97,108,108,95,111,95,56,56,0), String.fromCharCode(120,95,48,95,115,117,98,116,121,112,101,0)];
          let championV = true;
         shrinkg ^= shrinkg / 2;
         telegramc -= previewt.length;
         previewt = [(previewt.length << (Math.min(5, Math.abs((championV ? 3 : 2)))))];
         championV = !championV && previewt.length <= 4;
      while (1 > (2 % (Math.max(6, tnewsshare9))) && r_viewg) {
          let iconcloseB: Array<any> = [String.fromCharCode(99,95,52,0), String.fromCharCode(98,117,102,95,122,95,57,52,0)];
          let profileinactiveh: Array<any> = [261, 755, 72];
          let orangeC = String.fromCharCode(115,116,114,105,107,101,95,118,95,54,50,0);
          let whitetickl = 4.0;
          let gdtadvw = 3.0;
         tnewsshare9 /= Math.max(3 * profileinactiveh.length, 4);
         iconcloseB.push(orangeC.length - 3);
         profileinactiveh = [3 - orangeC.length];
         whitetickl += iconcloseB.length - 1;
         gdtadvw *= parseFloat(`${parseInt(`${whitetickl}`)}`);
         break;
      }
      for (let d = 0; d < 1; d++) {
         r_viewg = tnewsshare9 > shrinkg;
      }
         shrinkg %= Math.max(3, ((r_viewg ? 4 : 4) / (Math.max(tnewsshare9, 1))));
      while (r_viewg) {
          let launchv: Array<any> = [312, 947, 12];
          let reminderG = String.fromCharCode(103,117,105,100,101,115,95,56,95,53,49,0);
          let airbnbstarselecteda = 5.0;
         r_viewg = !r_viewg;
         launchv.push(3 >> (Math.min(1, reminderG.length)));
         reminderG += `${parseInt(`${airbnbstarselecteda}`) - 1}`;
         airbnbstarselecteda += (reminderG == String.fromCharCode(106,0) ? reminderG.length : parseInt(`${airbnbstarselecteda}`));
         break;
      }
          let playlistl = 3.0;
          let layout5 = String.fromCharCode(114,95,50,54,95,112,101,111,112,108,101,0);
         shrinkg <<= Math.min(5, parseInt(`${Math.abs(((r_viewg ? 1 : 1) % (Math.max(2, parseInt(`${playlistl}`)))))}`));
         playlistl *= layout5.length;
         layout5 += "3";
      liveb /= Math.max(3, 4);
      eyeopenh -= 3;
            

      airbnbstara += `${(parseInt(`${eyeopenh}`) * (dependencyl ? 4 : 3))}`;
   if ((liveb << (Math.min(Math.abs(2), 2))) == 4) {
      liveb &= 2 / (Math.max(parseInt(`${predictionm}`), 7));
   }
            

   if (!savel) {
       let vietnamD = String.fromCharCode(114,95,51,95,115,104,111,116,0);
         vietnamD = `${(vietnamD == String.fromCharCode(113,0) ? vietnamD.length : vietnamD.length)}`;
       let submits = 3.0;
       let connectionA = 5.0;
         vietnamD += `${parseInt(`${submits}`) ^ 2}`;
      savel = (codegens.length + penalty6.length) <= 53;
   }
   let loginsuccess3N = 7196272.0 >= predictionm;
   do {
      predictionm += 3 * parseInt(`${arrow5}`);
      if (loginsuccess3N) {
         break;
      }
   } while (loginsuccess3N && (1.6 <= (eyeopenh / (Math.max(1, predictionm))) && (predictionm / 1.6) <= 2.78));

            

      liveb |= 3;
      eyeopenh /= Math.max(5, iconqqQ.length);

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

       let clearH = true;
       let dataJ = String.fromCharCode(114,101,112,111,114,116,115,95,105,95,55,57,0);
       let package_s91 = String.fromCharCode(116,114,101,120,95,116,95,54,55,0);
      for (let t = 0; t < 3; t++) {
          let n_animationI = 3;
          let scheduler3 = 0;
         dataJ = "2";
         n_animationI += scheduler3 % (Math.max(n_animationI, 10));
         scheduler3 += scheduler3 << (Math.min(Math.abs(n_animationI), 4));
      }
      if (!clearH) {
         clearH = package_s91.startsWith(`${clearH}`);
      }
      for (let g = 0; g < 2; g++) {
         package_s91 += "1";
      }
         dataJ += `${(package_s91 == String.fromCharCode(68,0) ? package_s91.length : dataJ.length)}`;
       let libreactnativeblobZ = String.fromCharCode(104,95,55,49,95,116,111,107,101,110,110,102,116,116,120,0);
       let sharemodalJ = String.fromCharCode(116,106,117,116,105,108,95,116,95,51,48,0);
         libreactnativeblobZ += `${dataJ.length}`;
      let shareblackJ = package_s91.length <= 9787431;
      do {
         package_s91 += `${((clearH ? 5 : 4))}`;
         if (shareblackJ) {
            break;
         }
      } while (shareblackJ && (dataJ.endsWith(package_s91)));
          let phoneshare1 = 1.0;
         clearH = 58.69 == phoneshare1 && String.fromCharCode(84,0) == sharemodalJ;
      if (2 <= dataJ.length) {
         dataJ = "3";
      }
      liveb &= airbnbstara.length / (Math.max(2, liveb));
      libavcodecS -= parseFloat(`${defaultprofilepicc.length / 3}`);

            setShowSuccess(true);

   for (let v = 0; v < 2; v++) {
      savel = arrow5 <= 43.58 || sideM;
   }
   for (let e = 0; e < 2; e++) {
      airbnbstara += `${(parseInt(`${libavcodecS}`) << (Math.min(1, Math.abs((dependencyl ? 3 : 2)))))}`;
   }

            setTimeout(() => {

   while ((codegens.length + parseInt(`${arrow5}`)) < 4 && (codegens.length + arrow5) < 1.34) {
       let basketballplayerplaceholderP = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,57,95,57,56,0);
          let linee = 2.0;
         basketballplayerplaceholderP = `${2 | parseInt(`${linee}`)}`;
      while (basketballplayerplaceholderP.startsWith(basketballplayerplaceholderP)) {
          let full3: Array<any> = [String.fromCharCode(101,108,108,105,112,115,101,95,54,95,56,48,0), String.fromCharCode(113,95,51,53,95,110,111,110,115,101,99,117,114,101,0)];
          let next1 = 5;
         basketballplayerplaceholderP = `${full3.length - basketballplayerplaceholderP.length}`;
         full3.push(next1 * 1);
         next1 |= 3 | next1;
         break;
      }
       let megaphoneO = 1.0;
       let libfbp = 0.0;
      arrow5 /= Math.max(2, ((savel ? 4 : 5) ^ 3));
      break;
   }
   if (1 > penalty6.length) {
       let giftbuttonB = true;
       let middlewareW: Map<any, any> = new Map([[String.fromCharCode(102,95,51,53,95,117,114,97,110,100,111,109,0),String.fromCharCode(99,102,109,116,95,115,95,50,56,0)], [String.fromCharCode(107,101,121,115,116,111,114,101,95,120,95,57,54,0),String.fromCharCode(97,109,102,101,110,99,95,103,95,54,53,0)], [String.fromCharCode(106,95,56,53,95,105,109,112,0),String.fromCharCode(114,101,110,111,114,109,101,95,50,95,56,52,0)]]);
       let profilepico = 0.0;
       let minix = false;
       let room1 = 4;
         profilepico -= parseFloat(`${middlewareW.size | parseInt(`${profilepico}`)}`);
      if (giftbuttonB) {
         middlewareW.set(`${minix}`, (parseInt(`${profilepico}`) * (minix ? 1 : 1)));
      }
      while (!minix) {
         minix = (!giftbuttonB ? minix : !giftbuttonB);
         break;
      }
       let logoutD = String.fromCharCode(109,117,116,101,120,95,98,95,54,56,0);
       let sellh = String.fromCharCode(101,114,97,115,101,95,100,95,57,54,0);
         middlewareW = new Map([[`${middlewareW.size}`, middlewareW.size * 3]]);
       let componentsF = 3.0;
      for (let v = 0; v < 1; v++) {
         sellh += `${parseInt(`${componentsF}`) ^ 2}`;
      }
       let unselectedF = false;
      if (2 == (middlewareW.size | 2) && !giftbuttonB) {
         giftbuttonB = componentsF == middlewareW.size;
      }
      let penaltyh = giftbuttonB ? !giftbuttonB : giftbuttonB;
      do {
         giftbuttonB = 99.0 > profilepico || !minix;
         if (penaltyh) {
            break;
         }
      } while (((profilepico / 1.27) == 4.90) && penaltyh);
      if (4 > (room1 << (Math.min(Math.abs(2), 4))) || 2 > room1) {
         room1 |= ((unselectedF ? 1 : 5) / (Math.max(2, parseInt(`${componentsF}`))));
      }
       let othermatchdetailbgz = 5;
       let classesS = 5;
      let mounting2 = profilepico >= 9492186.0;
      do {
         profilepico *= (parseFloat(`${(unselectedF ? 5 : 1) >> (Math.min(4, Math.abs((giftbuttonB ? 3 : 1))))}`));
         if (mounting2) {
            break;
         }
      } while (((middlewareW.size - parseInt(`${profilepico}`)) >= 5 && (5 - middlewareW.size) >= 5) && mounting2);
          let catagory4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,111,117,115,95,115,95,57,54,0),457], [String.fromCharCode(102,95,49,57,95,100,101,116,101,114,109,105,110,101,0),999]]);
          let screene = String.fromCharCode(116,95,57,48,95,98,121,116,101,115,104,117,109,97,110,0);
         unselectedF = (!minix ? !unselectedF : !minix);
         catagory4.set(screene, 3);
         screene = `${screene.length}`;
          let largebrightness1 = String.fromCharCode(111,99,97,116,105,111,110,95,55,95,56,53,0);
          let librrcz = false;
         minix = giftbuttonB || librrcz;
         largebrightness1 = `${(largebrightness1 == String.fromCharCode(55,0) ? largebrightness1.length : largebrightness1.length)}`;
         librrcz = largebrightness1.length == largebrightness1.length;
      predictionm *= (1 ^ (giftbuttonB ? 5 : 2));
   }
                setShowSuccess(false);

   if (2 >= (airbnbstara.length & 3) || 3 >= (parseInt(`${eyeopenh}`) / 3)) {
      eyeopenh *= parseInt(`${eyeopenh}`) * airbnbstara.length;
   }
   while (arrow5 >= 4.85) {
      arrow5 += parseInt(`${eyeopenh}`) * parseInt(`${arrow5}`);
      break;
   }
                wawaLayout.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
       let googleQ = true;
    let const_j_9 = 3.0;
    let club2 = true;
    let iconorientation8 = String.fromCharCode(112,95,54,55,95,98,105,111,109,101,116,114,121,0);
    let iconchatsendT = String.fromCharCode(120,95,57,50,95,112,114,105,110,116,101,114,0);
    let whistleorange2 = false;
    let iconarrowleftq: Array<any> = [129, 787, 743];
    let usernameI = String.fromCharCode(114,95,53,56,95,97,108,108,111,99,97,116,101,0);
    let sharemodalK = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,106,95,54,53,0);
    let privacy3 = String.fromCharCode(108,95,50,50,95,102,108,97,99,100,115,112,0);
    let awayteamfieldI = 5.0;
    let floatingV = String.fromCharCode(107,95,56,53,95,97,117,116,111,100,101,116,101,99,116,111,114,0);
   let libpangleflippedu = String.fromCharCode(109,111,116,0) == iconchatsendT;
   do {
      iconchatsendT = `${((whistleorange2 ? 2 : 4) * 2)}`;
      if (libpangleflippedu) {
         break;
      }
   } while ((!whistleorange2 || iconchatsendT.length >= 5) && libpangleflippedu);
      iconchatsendT = `${2 ^ iconarrowleftq.length}`;
   let foregroundn = 6903657.0 <= const_j_9;
   do {
      const_j_9 /= Math.max(1, 2 ^ parseInt(`${const_j_9}`));
      if (foregroundn) {
         break;
      }
   } while (foregroundn && (4.88 < (const_j_9 * 5.69)));
      club2 = 88 == iconorientation8.length;
       let panglet = 3;
         panglet <<= Math.min(5, Math.abs(1));
      for (let l = 0; l < 2; l++) {
         panglet -= panglet;
      }
      while (5 >= (panglet + 3) && 3 >= (panglet + panglet)) {
         panglet -= 3;
         break;
      }
      iconarrowleftq = [(parseInt(`${const_j_9}`) - (club2 ? 3 : 1))];
   while (sharemodalK.length > 3) {
      club2 = (!googleQ ? !whistleorange2 : googleQ);
      break;
   }
   while (sharemodalK.startsWith(`${usernameI.length}`)) {
       let x_center4 = String.fromCharCode(98,95,53,52,95,101,110,99,111,100,97,98,108,101,115,0);
       let eventsplashW: Array<any> = [42, 736];
      if ((1 * eventsplashW.length) < 4) {
         x_center4 += `${eventsplashW.length - x_center4.length}`;
      }
         eventsplashW = [3 + x_center4.length];
          let attributedstring_ = String.fromCharCode(112,114,111,99,101,115,115,101,100,95,106,95,56,50,0);
          let mimoD = 3.0;
          let basketballmatchdetailbg3 = String.fromCharCode(107,95,50,51,95,115,117,98,118,105,101,119,0);
         eventsplashW = [(String.fromCharCode(101,0) == attributedstring_ ? eventsplashW.length : attributedstring_.length)];
         mimoD /= Math.max(parseFloat(`${1}`), 3);
         basketballmatchdetailbg3 = `${basketballmatchdetailbg3.length + parseInt(`${mimoD}`)}`;
         x_center4 += `${eventsplashW.length}`;
      let pauseX = eventsplashW.length >= 7989306;
      do {
         eventsplashW.push(eventsplashW.length % 2);
         if (pauseX) {
            break;
         }
      } while ((3 == (eventsplashW.length & x_center4.length) || (eventsplashW.length & x_center4.length) == 3) && pauseX);
         x_center4 = `${eventsplashW.length ^ 2}`;
      sharemodalK = `${eventsplashW.length}`;
      break;
   }
      iconorientation8 = `${(String.fromCharCode(95,0) == sharemodalK ? (googleQ ? 2 : 5) : sharemodalK.length)}`;
      sharemodalK += `${(String.fromCharCode(119,0) == iconorientation8 ? iconorientation8.length : privacy3.length)}`;
      privacy3 += "2";
      usernameI = "2";
   let trashI = iconchatsendT == String.fromCharCode(115,119,50,51,0);
   do {
      iconchatsendT += `${privacy3.length}`;
      if (trashI) {
         break;
      }
   } while (trashI && (4 <= (iconarrowleftq.length - iconchatsendT.length) || (4 - iconarrowleftq.length) <= 3));
      iconchatsendT = `${((whistleorange2 ? 5 : 2) - parseInt(`${const_j_9}`))}`;
   if ((iconarrowleftq.length - privacy3.length) >= 2) {
      privacy3 += "3";
   }
       let main_ky: Array<any> = [337, 53];
       let libhermesa = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,101,95,57,48,0);
       let progress9 = 3.0;
          let iconstarn: Array<any> = [328, 92, 458];
          let m_titleT = 3;
          let libfbH = String.fromCharCode(120,95,57,53,95,114,103,98,121,117,118,0);
         main_ky = [3 + libfbH.length];
         iconstarn.push(iconstarn.length);
         m_titleT /= Math.max(1 / (Math.max(7, m_titleT)), 4);
         libfbH = "1";
       let frame_6qV = true;
      if (!main_ky.includes(progress9)) {
          let favicona = String.fromCharCode(115,95,49,49,95,99,111,112,121,100,97,116,97,0);
          let orangeclock4: Array<any> = [790, 132, 887];
          let long_8uk = false;
          let chatroombackgroundn = 4.0;
         main_ky.push(1 ^ parseInt(`${progress9}`));
         favicona += `${(parseInt(`${chatroombackgroundn}`) + (long_8uk ? 5 : 4))}`;
         orangeclock4 = [orangeclock4.length >> (Math.min(3, Math.abs(parseInt(`${chatroombackgroundn}`))))];
         long_8uk = (orangeclock4.length ^ favicona.length) <= 41;
      }
      while (frame_6qV) {
         main_ky.push(2);
         break;
      }
      while (2.2 < progress9) {
         frame_6qV = 82.91 <= progress9 || !frame_6qV;
         break;
      }
         frame_6qV = libhermesa.length == 88;
         main_ky.push((libhermesa == String.fromCharCode(81,0) ? libhermesa.length : parseInt(`${progress9}`)));
      if (2 == (1 & main_ky.length)) {
         libhermesa = `${main_ky.length % 1}`;
      }
         frame_6qV = (progress9 - parseFloat(`${main_ky.length}`)) == 29.57;
      const_j_9 += main_ky.length;
   for (let j = 0; j < 1; j++) {
       let giftbuttonY = 1.0;
       let iconsharefriendsY: Array<any> = [233, 46];
         iconsharefriendsY = [1 + parseInt(`${giftbuttonY}`)];
       let iconqqG = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,105,95,51,53,0);
      while (iconsharefriendsY.length <= 4) {
         iconsharefriendsY = [2 - iconqqG.length];
         break;
      }
      if (parseInt(`${giftbuttonY}`) > iconsharefriendsY.length) {
          let nalyticsf: Array<any> = [377, 816];
          let yellowscoreballZ = true;
          let unread3: Array<any> = [422, 518, 538];
          let modalN = String.fromCharCode(102,95,50,56,95,100,101,112,101,110,100,115,0);
          let agreementA = 0;
         iconsharefriendsY = [(String.fromCharCode(121,0) == iconqqG ? iconqqG.length : unread3.length)];
         nalyticsf = [agreementA];
         yellowscoreballZ = agreementA >= modalN.length;
         unread3.push((modalN == String.fromCharCode(50,0) ? modalN.length : (yellowscoreballZ ? 2 : 4)));
      }
         giftbuttonY /= Math.max(3, parseFloat(`${2 | iconsharefriendsY.length}`));
       let attributedstrings = 1.0;
       let episodeg = 5.0;
      usernameI += `${(String.fromCharCode(72,0) == usernameI ? usernameI.length : sharemodalK.length)}`;
   }
   for (let u = 0; u < 2; u++) {
      awayteamfieldI /= Math.max(2, iconorientation8.length << (Math.min(Math.abs(1), 3)));
   }
   for (let q = 0; q < 2; q++) {
      iconarrowleftq = [(1 - (googleQ ? 3 : 4))];
   }
      whistleorange2 = usernameI == String.fromCharCode(110,0) || const_j_9 >= 92.43;
      club2 = 96 == iconorientation8.length;
       let giftbuttono: Array<any> = [445, 619];
       let plusw = String.fromCharCode(112,114,101,100,120,95,57,95,49,50,0);
       let specL = 4.0;
      while (plusw.startsWith(`${specL}`)) {
         plusw = "2";
         break;
      }
      if (1 >= (plusw.length | 3) && 2.26 >= (specL / 3.49)) {
          let dragY = String.fromCharCode(111,95,51,52,95,112,111,115,116,112,114,111,99,101,115,115,0);
          let chart7 = String.fromCharCode(115,95,53,54,95,115,109,115,0);
          let strD = true;
          let indexK = 4.0;
          let chinasameX: Array<any> = [155, 248, 602];
         plusw = "1";
         dragY = `${((strD ? 1 : 3) | chinasameX.length)}`;
         chart7 = `${(chart7 == String.fromCharCode(106,0) ? chinasameX.length : chart7.length)}`;
         strD = (parseInt(`${indexK}`) - chinasameX.length) < 21;
         indexK += dragY.length;
      }
      if (4.34 < (1.62 / (Math.max(3, specL))) && 2.64 < (specL / 1.62)) {
         specL *= parseFloat(`${parseInt(`${specL}`)}`);
      }
         giftbuttono.push(1);
         specL /= Math.max(parseFloat(`${parseInt(`${specL}`) / (Math.max(3, 6))}`), 2);
      if (!plusw.endsWith(`${specL}`)) {
          let libhermesq = 3.0;
          let whiteanimationlivex = 1.0;
         specL += (parseFloat(`${plusw == String.fromCharCode(87,0) ? plusw.length : parseInt(`${whiteanimationlivex}`)}`));
         libhermesq /= Math.max(parseInt(`${libhermesq}`), 3);
         whiteanimationlivex -= 2;
      }
       let type_dH = 1;
         specL *= parseFloat(`${type_dH / (Math.max(parseInt(`${specL}`), 7))}`);
          let disconnecteds: Array<any> = [848, 869, 895];
          let bufferL: Array<any> = [693, 16, 776];
          let phonesharek = String.fromCharCode(101,99,114,101,100,95,57,95,51,57,0);
         specL += parseFloat(`${type_dH + giftbuttono.length}`);
         disconnecteds = [1];
         bufferL.push(2);
         phonesharek += "3";
      const_j_9 /= Math.max(3, parseInt(`${awayteamfieldI}`) % 3);
   let brightnessk = privacy3 == String.fromCharCode(120,122,119,116,56,121,117,107,0);
   do {
      privacy3 += `${(privacy3 == String.fromCharCode(81,0) ? (googleQ ? 1 : 2) : privacy3.length)}`;
      if (brightnessk) {
         break;
      }
   } while (brightnessk && (privacy3 != String.fromCharCode(119,0) || usernameI != String.fromCharCode(121,0)));
   while (2 > sharemodalK.length) {
      sharemodalK = `${(1 & (googleQ ? 2 : 1))}`;
      break;
   }

        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
       let gemfileQ = 5.0;
    let elementsA: Array<any> = [968, 278, 615];
    let iconarrowrightwhite7 = 3.0;
    let mbbid5 = String.fromCharCode(121,95,56,50,95,118,97,114,105,97,110,99,101,115,0);
    let pushy = 5.0;
    let starq = 4.0;
    let guide9 = 1;
    let frame_0a = 4;
    let huaweiq: Map<any, any> = new Map([[String.fromCharCode(110,101,116,119,111,114,107,115,95,55,95,52,48,0),324], [String.fromCharCode(119,114,97,112,112,105,110,103,95,122,95,51,50,0),658], [String.fromCharCode(108,95,56,54,95,102,114,97,109,101,98,117,102,102,101,114,115,0),760]]);
    let modityr = 2.0;
    let referrer_ = 0.0;
       let progressH: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,99,117,114,118,101,115,0),false ], [String.fromCharCode(99,95,54,54,95,111,117,116,108,105,110,107,0),true ]]);
      while ((progressH.size >> (Math.min(Math.abs(progressH.size), 3))) <= 2 || 2 <= (progressH.size >> (Math.min(5, Math.abs(progressH.size))))) {
         progressH.set(`${progressH.size}`, progressH.size % 3);
         break;
      }
          let carouselG = String.fromCharCode(112,116,104,114,101,97,100,95,56,95,52,56,0);
         progressH = new Map([[`${progressH.size}`, 1 << (Math.min(2, Math.abs(progressH.size)))]]);
         carouselG = `${carouselG.length}`;
      if (5 <= (progressH.size % (Math.max(6, progressH.size)))) {
          let shareb: Array<any> = [660, 327, 900];
         progressH.set(`${shareb.length}`, shareb.length / 3);
      }
      guide9 /= Math.max(huaweiq.size + 1, 4);
      pushy /= Math.max(parseFloat(`${parseInt(`${starq}`)}`), 5);
   for (let w = 0; w < 2; w++) {
      gemfileQ += huaweiq.size;
   }
   if ((mbbid5.length | 1) < 3) {
       let collectionZ = true;
         collectionZ = (collectionZ ? !collectionZ : collectionZ);
         collectionZ = !collectionZ;
          let dropdownM = 3;
          let umengi = 1;
         collectionZ = 61 == dropdownM;
         dropdownM ^= 2 | umengi;
         umengi += 2;
      mbbid5 += "3 + guide9";
   }
       let libavutili: Map<any, any> = new Map([[String.fromCharCode(111,95,52,95,116,101,109,112,111,114,97,114,105,108,121,0),true ], [String.fromCharCode(115,101,103,117,101,95,114,95,53,49,0),false ], [String.fromCharCode(118,112,111,105,110,116,95,98,95,55,56,0),true ]]);
      for (let n = 0; n < 2; n++) {
          let floating1: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,101,100,95,49,95,52,56,0),String.fromCharCode(113,95,55,49,95,115,99,111,112,101,100,0)], [String.fromCharCode(98,95,52,50,95,109,97,107,101,116,97,114,98,97,108,108,0),String.fromCharCode(111,95,56,56,95,112,111,115,116,102,105,120,0)], [String.fromCharCode(114,101,119,114,105,116,116,101,110,95,109,95,50,54,0),String.fromCharCode(117,95,52,49,95,97,98,115,120,0)]]);
          let chinasamey = 1;
          let i_imageI = String.fromCharCode(104,95,53,49,95,99,111,110,115,116,114,97,105,110,0);
          let controlK = String.fromCharCode(104,111,117,114,115,95,110,95,56,55,0);
          let chatbotphotot = 3.0;
         libavutili.set(`${chatbotphotot}`, 3 ^ i_imageI.length);
         floating1.set(`${chinasamey}`, chinasamey - 3);
         i_imageI += `${(controlK == String.fromCharCode(89,0) ? chinasamey : controlK.length)}`;
         chatbotphotot *= parseFloat(`${chinasamey}`);
      }
      while (Array.from(libavutili.keys()).includes(`${libavutili.size}`)) {
         libavutili.set(`${libavutili.size}`, libavutili.size);
         break;
      }
       let chatroombackground4 = String.fromCharCode(109,95,56,54,95,117,110,103,114,111,117,112,0);
      elementsA = [3 - parseInt(`${starq}`)];
      pushy /= Math.max(5, parseFloat(`${huaweiq.size}`));
       let interstitialw = String.fromCharCode(107,95,48,95,103,117,101,115,115,101,100,0);
       let calendarZ = 4.0;
         calendarZ *= parseFloat(`${parseInt(`${calendarZ}`)}`);
      while (3.52 < (5.45 + calendarZ)) {
          let orangeuparrow0 = String.fromCharCode(97,101,99,109,95,111,95,54,56,0);
          let popupc = String.fromCharCode(98,95,56,57,95,114,101,97,100,0);
          let sortN = String.fromCharCode(113,95,52,49,95,102,119,104,116,0);
         interstitialw = `${(String.fromCharCode(84,0) == orangeuparrow0 ? orangeuparrow0.length : interstitialw.length)}`;
         popupc = `${sortN.length}`;
         sortN += `${sortN.length & popupc.length}`;
         break;
      }
         interstitialw += `${(interstitialw == String.fromCharCode(69,0) ? interstitialw.length : parseInt(`${calendarZ}`))}`;
         calendarZ += parseFloat(`${3}`);
      let questiconc = interstitialw == String.fromCharCode(95,56,104,110,122,113,100,100,116,103,0);
      do {
         interstitialw = "3";
         if (questiconc) {
            break;
         }
      } while ((4 == interstitialw.length) && questiconc);
      if (interstitialw.includes(`${calendarZ}`)) {
         calendarZ += parseFloat(`${interstitialw.length * parseInt(`${calendarZ}`)}`);
      }
      guide9 %= Math.max(4, parseInt(`${pushy}`));
       let basketballtrophy1 = false;
       let reactnativejsZ = 0.0;
       let plus5: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,121,120,95,55,95,49,53,0),597], [String.fromCharCode(117,114,105,95,116,95,52,51,0),838]]);
          let appleU: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,95,112,114,111,112,111,115,101,0),String.fromCharCode(100,105,109,115,95,115,95,52,53,0)], [String.fromCharCode(117,95,49,52,95,97,117,100,105,111,103,101,110,0),String.fromCharCode(99,95,52,54,95,104,97,114,100,119,97,114,101,0)], [String.fromCharCode(115,116,97,99,107,101,100,95,49,95,49,52,0),String.fromCharCode(108,95,56,95,112,114,101,101,109,112,116,105,118,101,0)]]);
         reactnativejsZ *= parseFloat(`${2 & plus5.size}`);
         appleU = new Map([[`${appleU.size}`, 3 & appleU.size]]);
      let switch_luC = basketballtrophy1 ? !basketballtrophy1 : basketballtrophy1;
      do {
         basketballtrophy1 = (parseFloat(`${plus5.size}`) + reactnativejsZ) < 25.13;
         if (switch_luC) {
            break;
         }
      } while ((basketballtrophy1 || (1 + plus5.size) <= 1) && switch_luC);
         reactnativejsZ /= Math.max(4, parseFloat(`${plus5.size}`));
      let gesturei = reactnativejsZ <= 5160003.0;
      do {
         reactnativejsZ -= parseFloat(`${parseInt(`${reactnativejsZ}`) * plus5.size}`);
         if (gesturei) {
            break;
         }
      } while ((2.17 >= (1.43 + reactnativejsZ) && 2.38 >= (reactnativejsZ + 1.43)) && gesturei);
      if (basketballtrophy1 || 5.100 < (reactnativejsZ + 3.46)) {
          let nexto = String.fromCharCode(120,95,51,51,95,98,108,101,101,100,0);
          let iconnewsshareN: Map<any, any> = new Map([[String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,95,53,95,57,48,0),false ], [String.fromCharCode(98,105,97,115,95,54,95,49,51,0),true ]]);
         reactnativejsZ /= Math.max(parseFloat(`${parseInt(`${reactnativejsZ}`) - 2}`), 2);
         nexto = `${(nexto == String.fromCharCode(106,0) ? iconnewsshareN.size : nexto.length)}`;
         iconnewsshareN = new Map([[`${iconnewsshareN.size}`, (nexto == String.fromCharCode(103,0) ? iconnewsshareN.size : nexto.length)]]);
      }
       let nalyticsD: Array<any> = [String.fromCharCode(107,95,51,56,95,117,110,105,110,115,116,97,108,108,0), String.fromCharCode(102,114,101,113,98,97,114,107,95,57,95,51,49,0), String.fromCharCode(98,105,111,95,98,95,49,48,0)];
       let predictionarrowv: Array<any> = [195, 612];
      let chartw = 6822275 <= plus5.size;
      do {
          let incidentr = String.fromCharCode(108,95,55,48,95,112,116,115,0);
          let shielddoneX: Array<any> = [949, 649, 470];
          let notificationR = String.fromCharCode(114,101,99,111,109,109,101,110,100,95,50,95,52,49,0);
          let downloadingn = String.fromCharCode(122,95,52,48,95,102,108,111,97,116,105,110,103,0);
          let xadsdkS = true;
         plus5 = new Map([[`${predictionarrowv.length}`, predictionarrowv.length & downloadingn.length]]);
         incidentr += `${shielddoneX.length}`;
         shielddoneX.push(shielddoneX.length % (Math.max(5, incidentr.length)));
         notificationR = `${notificationR.length}`;
         downloadingn = `${((xadsdkS ? 4 : 4))}`;
         xadsdkS = incidentr.length < notificationR.length;
         if (chartw) {
            break;
         }
      } while ((Array.from(plus5.values()).includes(nalyticsD.length)) && chartw);
          let iconbackwhitey = 5;
         basketballtrophy1 = nalyticsD.includes(reactnativejsZ);
         iconbackwhitey += iconbackwhitey >> (Math.min(Math.abs(1), 1));
          let resultY = 3.0;
          let sansw = false;
         nalyticsD = [nalyticsD.length - plus5.size];
         resultY /= Math.max(3, ((sansw ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${resultY}`)), 5))));
         sansw = resultY >= 54.59 || !sansw;
      frame_0a %= Math.max(3, parseInt(`${starq}`));
   if (3 == (3 + mbbid5.length)) {
       let flipperP = String.fromCharCode(113,95,55,48,95,104,101,97,114,116,115,0);
       let faviconJ = 0;
      let viewsw = 8680496 >= flipperP.length;
      do {
         flipperP = `${faviconJ}`;
         if (viewsw) {
            break;
         }
      } while (((flipperP.length - faviconJ) >= 2) && viewsw);
       let homeicono = 4.0;
         homeicono -= parseFloat(`${3}`);
          let giftbuttoni: Array<any> = [59, 490];
         homeicono *= parseFloat(`${3 >> (Math.min(2, flipperP.length))}`);
         giftbuttoni = [1];
         faviconJ -= flipperP.length;
      while ((faviconJ << (Math.min(flipperP.length, 1))) < 2 && 2 < (flipperP.length << (Math.min(1, Math.abs(faviconJ))))) {
         flipperP += `${3 << (Math.min(3, flipperP.length))}`;
         break;
      }
      frame_0a &= 1;
   }
      frame_0a *= parseInt(`${pushy}`) << (Math.min(3, Math.abs(1)));
   let membership6 = huaweiq.size >= 6695032;
   do {
      huaweiq = new Map([[`${guide9}`, 2 + parseInt(`${gemfileQ}`)]]);
      if (membership6) {
         break;
      }
   } while (membership6 && (!Array.from(huaweiq.values()).includes(iconarrowrightwhite7)));
      starq *= parseFloat(`${2}`);
      pushy += parseFloat(`${2}`);
   if ((parseInt(`${gemfileQ}`) + mbbid5.length) <= 3 || 2.53 <= (gemfileQ + 3.21)) {
      gemfileQ /= Math.max(5, parseInt(`${iconarrowrightwhite7}`) - 2);
   }
   if ((pushy + 5.62) <= 1.7 && 3.27 <= (pushy + 5.62)) {
      pushy += parseFloat(`${parseInt(`${pushy}`)}`);
   }

        setShowBackModel(false);

   while (5.48 >= gemfileQ) {
       let countryj: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,49,95,57,51,0),912], [String.fromCharCode(98,95,52,52,95,99,118,116,121,117,118,116,111,0),576], [String.fromCharCode(107,95,57,53,95,105,110,115,116,114,117,99,116,105,111,110,115,0),565]]);
       let splashq = true;
       let closeN = 1.0;
          let goallogow = true;
         countryj = new Map([[`${countryj.size}`, countryj.size]]);
         goallogow = !goallogow;
          let libfbjniB: Map<any, any> = new Map([[String.fromCharCode(112,97,115,99,97,108,95,53,95,49,49,0),String.fromCharCode(116,95,49,48,48,95,102,111,114,99,105,110,103,0)], [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,52,95,52,51,0),String.fromCharCode(100,110,120,104,100,95,122,95,55,55,0)]]);
          let mutedR = String.fromCharCode(105,112,102,115,95,122,95,51,54,0);
         splashq = closeN < 73.99 || !splashq;
         libfbjniB = new Map([[`${libfbjniB.size}`, libfbjniB.size]]);
         mutedR = `${mutedR.length + 3}`;
          let coreW = 3;
          let bodanl: Array<any> = [69, 213];
         splashq = coreW == 87 || 72.45 == closeN;
         coreW /= Math.max(3, 3);
         bodanl = [3 & bodanl.length];
         countryj.set(`${closeN}`, parseInt(`${closeN}`) % 2);
      let progressd = splashq ? !splashq : splashq;
      do {
         splashq = countryj.size == 68;
         if (progressd) {
            break;
         }
      } while ((!splashq && 3 >= (3 - countryj.size)) && progressd);
      iconarrowrightwhite7 -= parseInt(`${modityr}`) + 3;
      break;
   }
      pushy *= parseFloat(`${parseInt(`${gemfileQ}`) * 3}`);
      guide9 ^= parseInt(`${pushy}`) << (Math.min(Math.abs(parseInt(`${iconarrowrightwhite7}`)), 5));
      iconarrowrightwhite7 += elementsA.length;
   while (1.38 >= (gemfileQ - 5.15)) {
      gemfileQ *= elementsA.length;
      break;
   }
      pushy -= parseFloat(`${parseInt(`${iconarrowrightwhite7}`) << (Math.min(1, Math.abs(2)))}`);
   while (2 == (parseInt(`${modityr}`) - huaweiq.size) && (modityr - huaweiq.size) == 1.25) {
       let privilegeJ = String.fromCharCode(121,95,53,48,95,99,111,109,98,101,100,0);
       let cornershootO = String.fromCharCode(106,95,52,54,95,101,110,117,109,101,114,97,116,111,114,0);
       let smallbrightnessU: Map<any, any> = new Map([[String.fromCharCode(97,110,103,114,121,95,56,95,54,57,0),String.fromCharCode(106,95,55,56,95,114,101,99,111,109,98,105,110,101,0)], [String.fromCharCode(105,110,112,117,116,115,95,111,95,56,57,0),String.fromCharCode(111,95,49,48,48,95,103,101,111,107,101,121,0)]]);
          let libcxxcomponentsE: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,95,99,111,109,112,105,108,101,0),85], [String.fromCharCode(121,95,49,48,95,112,97,103,101,110,117,109,98,101,114,0),535], [String.fromCharCode(106,95,51,48,95,112,111,112,112,101,100,0),387]]);
         cornershootO = `${(privilegeJ == String.fromCharCode(49,0) ? smallbrightnessU.size : privilegeJ.length)}`;
         libcxxcomponentsE.set(`${libcxxcomponentsE.size}`, libcxxcomponentsE.size * 1);
         cornershootO = `${(String.fromCharCode(116,0) == privilegeJ ? smallbrightnessU.size : privilegeJ.length)}`;
      let whistlev = smallbrightnessU.size <= 6327130;
      do {
          let backwhiteh = 1;
          let release_pke = 5;
         smallbrightnessU.set(privilegeJ, privilegeJ.length);
         backwhiteh *= release_pke;
         release_pke &= backwhiteh + 1;
         if (whistlev) {
            break;
         }
      } while (whistlev && ((2 + smallbrightnessU.size) >= 1));
          let dependenciesp = 1;
         cornershootO = "2";
         dependenciesp &= dependenciesp / (Math.max(2, 5));
          let crossA: Array<any> = [775, 778, 378];
          let configureV = String.fromCharCode(109,111,118,101,100,95,50,95,49,55,0);
         cornershootO += `${(String.fromCharCode(103,0) == configureV ? configureV.length : cornershootO.length)}`;
         crossA.push(crossA.length);
      let configH = cornershootO == String.fromCharCode(107,115,101,99,100,52,0);
      do {
         cornershootO += `${smallbrightnessU.size ^ cornershootO.length}`;
         if (configH) {
            break;
         }
      } while ((!cornershootO.includes(`${smallbrightnessU.size}`)) && configH);
          let buttonU = 0;
         smallbrightnessU.set(`${cornershootO}`, (String.fromCharCode(100,0) == cornershootO ? smallbrightnessU.size : cornershootO.length));
         buttonU -= buttonU + buttonU;
      for (let j = 0; j < 1; j++) {
          let mailU = false;
          let short_kaq: Array<any> = [559, 437];
          let storem = false;
          let sendx = String.fromCharCode(113,95,56,50,95,102,97,100,101,0);
         smallbrightnessU = new Map([[`${smallbrightnessU.size}`, 3]]);
         mailU = (short_kaq.length % (Math.max(sendx.length, 7))) > 28;
         short_kaq = [((mailU ? 5 : 5) | 3)];
         storem = short_kaq.length > 91 || !mailU;
         sendx = "3";
      }
         smallbrightnessU = new Map([[`${smallbrightnessU.size}`, smallbrightnessU.size]]);
      modityr += mbbid5.length;
      break;
   }
      iconarrowrightwhite7 -= 2 - elementsA.length;
       let libavutilw = 1;
      for (let p = 0; p < 2; p++) {
         libavutilw |= libavutilw;
      }
      let mbbanner5 = 5855735 <= libavutilw;
      do {
         libavutilw *= 2;
         if (mbbanner5) {
            break;
         }
      } while (mbbanner5 && (3 < (libavutilw % (Math.max(6, libavutilw)))));
       let handlerv = String.fromCharCode(100,101,116,95,116,95,54,48,0);
       let langn = String.fromCharCode(117,95,52,51,95,115,109,97,108,108,101,114,0);
      mbbid5 = `${guide9}`;
   if (2.64 > (modityr / (Math.max(5.32, 6))) && (modityr / (Math.max(huaweiq.size, 10))) > 5.32) {
      modityr -= parseInt(`${starq}`) << (Math.min(1, Math.abs(frame_0a)));
   }
      modityr += frame_0a;
   while (4 < (guide9 / 2) || 1 < (guide9 / 2)) {
      guide9 /= Math.max(3, 1);
      break;
   }
   if (pushy >= iconarrowrightwhite7) {
      iconarrowrightwhite7 += parseInt(`${gemfileQ}`);
   }
      huaweiq = new Map([[`${pushy}`, parseInt(`${pushy}`) * 3]]);
   while (3 <= (frame_0a - 4) && 2.62 <= (gemfileQ - 5.96)) {
      gemfileQ -= 3;
      break;
   }
        wawaLayout.back();
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