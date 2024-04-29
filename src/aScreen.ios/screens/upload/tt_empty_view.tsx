import { RootStackScreenProps } from "@type/tt_temperature";
import ScreenContainer from "../../components/container/tt_backward";
import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ttTarget } from "../../../routes/tt_macau_read";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/tt_with";
import { UploadProgressOverlay } from "../../components/modal/tt_privacy";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/tt_trophy_cross";
import { useAppDispatch } from "@hooks/tt_spec_download";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/tt_styles";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/tt_connection';
import DefaultVideoThumbnail from '@static/images/pointDelegate_8fBenefit.svg';
import { saveUploadHistory } from "@redux/actions/tt_stats_strings";

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
       let logoutw: Map<any, any> = new Map([[String.fromCharCode(120,95,52,57,95,111,116,105,102,105,99,97,116,105,111,110,0),false ], [String.fromCharCode(115,111,119,97,107,101,117,112,95,101,95,53,57,0),false ], [String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,113,95,51,0),true ]]);
    let belld = false;
    let detail9 = true;
    let calendarP: Map<any, any> = new Map([[String.fromCharCode(114,95,50,51,95,103,109,111,99,107,0),551], [String.fromCharCode(117,118,118,101,114,116,105,99,97,108,95,113,95,52,56,0),907], [String.fromCharCode(118,95,52,52,95,111,112,101,110,101,100,0),282]]);
    let hover_ = String.fromCharCode(122,95,49,48,95,112,111,115,116,99,111,100,101,0);
    let clubT = 4.0;
    let selected1: Array<any> = [253, 207, 247];
    let reward9 = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,121,95,56,50,0);
    let playV: Array<any> = [520, 176, 892];
    let with_iQ = 2;
    let placeholderd = String.fromCharCode(118,95,54,55,95,97,110,110,111,117,110,99,101,0);
    let paginationY = false;
   for (let u = 0; u < 2; u++) {
      belld = playV.length >= selected1.length;
   }
      selected1.push(2 | selected1.length);
   for (let k = 0; k < 1; k++) {
       let apples = String.fromCharCode(101,95,53,55,95,101,97,114,108,105,101,114,0);
          let settingsl = 4;
          let link8 = String.fromCharCode(101,95,57,51,95,114,111,119,115,112,97,110,0);
         apples = `${1 + link8.length}`;
         settingsl >>= Math.min(Math.abs(settingsl), 3);
         link8 += `${settingsl}`;
         apples = `${apples.length}`;
         apples += `${apples.length}`;
      calendarP.set(apples, apples.length);
   }

        try {

   if (detail9) {
      belld = selected1.length >= reward9.length;
   }
      selected1.push(2 / (Math.max(4, selected1.length)));
       let muted5: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,95,122,95,53,51,0),String.fromCharCode(106,97,99,107,95,120,95,55,48,0)], [String.fromCharCode(105,110,115,105,100,101,95,108,95,51,48,0),String.fromCharCode(106,95,54,95,103,109,111,99,107,0)]]);
       let usernames = String.fromCharCode(115,97,110,105,116,105,122,101,100,95,115,95,52,50,0);
       let anytimeV: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,101,98,95,108,95,52,56,0),String.fromCharCode(111,102,102,105,99,105,97,108,95,103,95,56,53,0)], [String.fromCharCode(122,95,53,95,99,111,101,102,102,0),String.fromCharCode(117,110,102,101,116,99,104,95,117,95,49,50,0)]]);
         usernames += `${usernames.length}`;
      let commentb = usernames == String.fromCharCode(110,106,104,118,105,57,0);
      do {
          let fast2 = true;
          let upgradeV = 4.0;
         usernames = `${usernames.length}`;
         fast2 = upgradeV == 12.63;
         upgradeV /= Math.max(4, parseFloat(`${parseInt(`${upgradeV}`)}`));
         if (commentb) {
            break;
         }
      } while ((3 > (usernames.length / 2)) && commentb);
      for (let a = 0; a < 3; a++) {
          let pageE = String.fromCharCode(116,97,103,103,101,100,95,110,95,54,53,0);
         muted5.set(`${pageE}`, anytimeV.size ^ 3);
      }
      while (1 >= (1 - anytimeV.size) && 1 >= (anytimeV.size - usernames.length)) {
          let upgradeX = false;
         anytimeV = new Map([[`${muted5.size}`, muted5.size]]);
         upgradeX = !upgradeX;
         break;
      }
      while ((muted5.size * usernames.length) < 5) {
          let subsd = 1;
          let upgradeT: Map<any, any> = new Map([[String.fromCharCode(119,95,53,50,95,114,100,102,116,0),291], [String.fromCharCode(97,112,115,95,110,95,52,55,0),391]]);
          let navigationc = 0.0;
          let selectedt: Array<any> = [106, 881];
          let manifesta = false;
         usernames = `${upgradeT.size}`;
         subsd %= Math.max(2, 4);
         upgradeT.set(`${navigationc}`, 1 % (Math.max(7, parseInt(`${navigationc}`))));
         selectedt.push(2 % (Math.max(1, selectedt.length)));
         manifesta = selectedt.length == subsd;
         break;
      }
      while (!usernames.endsWith(`${anytimeV.size}`)) {
         usernames = `${usernames.length & 1}`;
         break;
      }
          let regengJ = String.fromCharCode(120,95,50,56,95,99,111,112,105,101,100,0);
          let borderlessJ = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,101,95,54,55,0);
         muted5.set(usernames, muted5.size >> (Math.min(Math.abs(3), 3)));
         regengJ += `${borderlessJ.length ^ 2}`;
         borderlessJ = `${regengJ.length}`;
      if (anytimeV.get(`${muted5.size}`) != null) {
         anytimeV.set(`${muted5.size}`, muted5.size << (Math.min(Math.abs(1), 1)));
      }
      while (3 <= (5 + usernames.length)) {
         anytimeV = new Map([[`${anytimeV.size}`, 3 >> (Math.min(1, Math.abs(anytimeV.size)))]]);
         break;
      }
      hover_ = `${logoutw.size}`;
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, 
            })

      calendarP.set(`${selected1.length}`, 1 % (Math.max(4, logoutw.size)));
   let long_4q = detail9 ? !detail9 : detail9;
   do {
      detail9 = clubT < 6.13 && reward9.length < 19;
      if (long_4q) {
         break;
      }
   } while (long_4q && (4 > (2 - calendarP.size)));
      detail9 = selected1.length > logoutw.size;

            if (response) {

   for (let j = 0; j < 1; j++) {
      playV.push((3 - (detail9 ? 1 : 3)));
   }
       let mbnativeA = String.fromCharCode(97,95,53,55,95,111,99,99,117,114,114,101,110,99,101,115,0);
       let bellX = String.fromCharCode(101,95,53,52,95,117,110,115,97,118,101,0);
       let yingH = true;
      while (!mbnativeA.endsWith(`${yingH}`)) {
          let redirectj = false;
          let ping9 = String.fromCharCode(103,101,110,99,102,103,115,95,49,95,57,52,0);
          let specO = 5.0;
         yingH = bellX.includes(`${yingH}`);
         redirectj = !redirectj;
         ping9 += `${parseInt(`${specO}`) + 1}`;
         specO += ping9.length;
         break;
      }
      let stationsn = bellX == String.fromCharCode(118,103,119,0);
      do {
         bellX = `${mbnativeA.length}`;
         if (stationsn) {
            break;
         }
      } while (stationsn && (!yingH));
         yingH = mbnativeA.includes(`${yingH}`);
      let sports = bellX.length >= 7224125;
      do {
          let plashT: Array<any> = [666, 156, 23];
          let roundD = String.fromCharCode(116,95,55,53,95,97,105,109,105,110,103,0);
          let bingV: Array<any> = [188, 450];
          let with_n5 = 3;
         bellX = "1";
         plashT.push((roundD == String.fromCharCode(105,0) ? roundD.length : with_n5));
         bingV.push(bingV.length & plashT.length);
         with_n5 <<= Math.min(3, Math.abs(bingV.length + roundD.length));
         if (sports) {
            break;
         }
      } while ((mbnativeA != String.fromCharCode(107,0) && bellX.length >= 3) && sports);
          let weiboX = 5;
         mbnativeA += `${weiboX}`;
         yingH = 87 > mbnativeA.length;
      for (let v = 0; v < 3; v++) {
         mbnativeA += `${(1 - (yingH ? 4 : 4))}`;
      }
         bellX = `${bellX.length}`;
       let confirmationN = false;
      with_iQ <<= Math.min(5, Math.abs(with_iQ));
   let promotionI = selected1.length >= 5938602;
   do {
      selected1.push(2 >> (Math.min(2, Math.abs(with_iQ))));
      if (promotionI) {
         break;
      }
   } while ((2.33 < (clubT + parseFloat(`${selected1.length}`)) || (clubT + 2.33) < 2.60) && promotionI);
                setVideoThumbnail(response.path);
            } else {

      detail9 = with_iQ >= 61 && clubT >= 27.14;
       let mailH = String.fromCharCode(116,95,56,53,95,98,105,116,115,116,114,101,97,109,0);
       let blacklistu = false;
       let aboutX = 0.0;
      if (!blacklistu) {
         blacklistu = !blacklistu || aboutX > 5.29;
      }
         mailH += `${mailH.length | parseInt(`${aboutX}`)}`;
         mailH += "3";
      while (5 == mailH.length) {
         blacklistu = 97.61 >= aboutX;
         break;
      }
         mailH += `${parseInt(`${aboutX}`) * 3}`;
          let stylesY = true;
          let g_viewo: Map<any, any> = new Map([[String.fromCharCode(103,95,54,49,95,115,116,114,101,97,109,99,111,112,121,0),938], [String.fromCharCode(103,101,110,101,114,97,116,101,95,108,95,49,57,0),17], [String.fromCharCode(107,95,49,53,95,100,105,115,99,111,110,110,101,99,116,0),640]]);
         aboutX /= Math.max(5, parseFloat(`${2}`));
         stylesY = g_viewo.size < 65;
         g_viewo = new Map([[`${g_viewo.size}`, 3 << (Math.min(1, Math.abs(g_viewo.size)))]]);
         mailH = `${(mailH == String.fromCharCode(122,0) ? parseInt(`${aboutX}`) : mailH.length)}`;
         blacklistu = !blacklistu || mailH.length <= 61;
      if (blacklistu && 5.92 >= (aboutX * 1.82)) {
         blacklistu = !mailH.endsWith(`${aboutX}`);
      }
      selected1 = [calendarP.size];
       let vignetteN: Array<any> = [819, 351];
       let completeL = true;
          let long_568 = 5;
          let analyticA = String.fromCharCode(104,97,114,112,101,110,95,55,95,56,0);
          let settingZ: Map<any, any> = new Map([[String.fromCharCode(116,95,52,55,95,119,114,105,116,101,114,0),String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,107,95,53,50,0)], [String.fromCharCode(118,95,53,50,95,119,97,118,101,102,111,114,109,0),String.fromCharCode(117,95,52,48,95,116,107,104,100,0)], [String.fromCharCode(109,95,54,49,95,97,100,97,112,116,97,116,105,111,110,0),String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,95,98,95,49,0)]]);
         completeL = 14 <= long_568;
         long_568 /= Math.max(3, (analyticA == String.fromCharCode(117,0) ? settingZ.size : analyticA.length));
         settingZ = new Map([[`${settingZ.size}`, 1]]);
         vignetteN = [((completeL ? 4 : 3) % (Math.max(vignetteN.length, 6)))];
          let suggestionz = String.fromCharCode(100,116,109,102,95,119,95,51,56,0);
          let history3 = true;
          let constantss = String.fromCharCode(108,95,52,51,95,100,97,114,107,101,110,105,110,103,0);
         vignetteN = [suggestionz.length];
         suggestionz += `${((history3 ? 1 : 1))}`;
         history3 = !constantss.includes(`${history3}`);
         constantss += `${((history3 ? 2 : 2))}`;
      while ((2 & vignetteN.length) > 4) {
         vignetteN = [2 & vignetteN.length];
         break;
      }
      if (!completeL) {
         vignetteN = [2];
      }
      if (completeL) {
          let datae = String.fromCharCode(112,95,55,56,95,104,97,115,104,116,97,98,108,101,122,0);
          let hooksN = 1;
         vignetteN = [datae.length];
         datae = "1";
         hooksN >>= Math.min(2, Math.abs(3));
      }
      belld = !belld;
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
       let edit8 = false;
    let window_q19 = 1.0;
    let rightj = 5.0;
    let successa: Array<any> = [String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,106,95,50,51,0), String.fromCharCode(102,114,111,109,98,105,110,100,95,122,95,57,56,0), String.fromCharCode(113,116,112,97,108,101,116,116,101,95,52,95,51,57,0)];
    let selectionI = 1.0;
    let episodeO = String.fromCharCode(116,95,57,51,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0);
    let upgradey = 5.0;
    let placeholderm: Array<any> = [12, 818];
    let mbbannerS: Array<any> = [String.fromCharCode(98,95,56,50,95,100,120,116,97,0), String.fromCharCode(112,95,57,53,95,114,105,110,102,0), String.fromCharCode(106,95,57,55,95,112,97,114,116,105,116,105,111,110,101,100,0)];
    let catagoryQ = 5.0;
    let d_centerG = String.fromCharCode(115,101,99,107,101,121,95,101,95,49,0);
    let greym = String.fromCharCode(97,95,54,54,95,114,101,115,116,97,114,116,0);
    let sentryb: Array<any> = [352, 410];
   for (let o = 0; o < 1; o++) {
      window_q19 += parseFloat(`${parseInt(`${selectionI}`)}`);
   }
   for (let a = 0; a < 2; a++) {
       let pingE = String.fromCharCode(115,95,56,53,95,112,114,101,112,0);
       let rulesp = 5.0;
       let const_95 = String.fromCharCode(102,95,54,50,95,109,98,101,100,116,108,115,0);
      for (let s = 0; s < 3; s++) {
          let matchesl = String.fromCharCode(98,95,55,48,95,116,105,114,101,100,0);
          let favoriteu = true;
          let halfW = String.fromCharCode(99,97,114,95,57,95,57,0);
          let bodanf = true;
          let nativeexv = false;
         pingE += `${((favoriteu ? 2 : 4) | (bodanf ? 1 : 3))}`;
         matchesl = "1";
         favoriteu = matchesl.length < 60;
         halfW = `${(matchesl == String.fromCharCode(89,0) ? (nativeexv ? 1 : 2) : matchesl.length)}`;
         bodanf = matchesl.length >= 12;
      }
         rulesp += parseFloat(`${2 >> (Math.min(2, const_95.length))}`);
      for (let v = 0; v < 1; v++) {
          let fillJ = String.fromCharCode(99,104,97,110,103,105,110,103,95,121,95,50,54,0);
          let progress0 = String.fromCharCode(109,115,109,112,101,103,95,113,95,55,48,0);
          let blackW: Array<any> = [482, 259, 273];
          let field2: Array<any> = [639, 1000, 515];
          let privacyg = 2;
         rulesp *= parseFloat(`${progress0.length}`);
         fillJ = `${fillJ.length | 3}`;
         progress0 = "2";
         blackW.push(fillJ.length * 3);
         field2 = [privacyg];
         privacyg *= privacyg;
      }
         rulesp *= parseFloat(`${1 << (Math.min(4, const_95.length))}`);
          let moduleK = 0.0;
          let bootsplashU = false;
          let nativeL: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,101,95,49,52,0),392], [String.fromCharCode(103,95,56,52,95,109,116,105,109,101,0),690]]);
         const_95 += `${((bootsplashU ? 4 : 1) ^ pingE.length)}`;
         moduleK += 3 - parseInt(`${moduleK}`);
         bootsplashU = parseInt(`${moduleK}`) > nativeL.size;
         nativeL = new Map([[`${nativeL.size}`, nativeL.size * 3]]);
         rulesp /= Math.max(parseFloat(`${parseInt(`${rulesp}`) >> (Math.min(Math.abs(1), 1))}`), 3);
         rulesp -= parseFloat(`${2 - const_95.length}`);
      for (let f = 0; f < 1; f++) {
         rulesp *= parseFloat(`${parseInt(`${rulesp}`)}`);
      }
         rulesp -= parseFloat(`${const_95.length + 1}`);
      window_q19 *= parseFloat(`${parseInt(`${rightj}`) & 2}`);
   }

        if (videoTitle === undefined || videoTitle === '') {

   let shootn = edit8 ? !edit8 : edit8;
   do {
       let renewR = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,122,95,49,48,48,0);
       let hongkongM: Array<any> = [93, 931, 140];
       let m_playerQ = String.fromCharCode(100,105,102,102,115,95,114,95,55,48,0);
       let cornerE = false;
       let collectionV: Array<any> = [285, 61, 892];
         hongkongM = [2];
         m_playerQ = `${collectionV.length}`;
      while ((4 % (Math.max(9, hongkongM.length))) < 4 && 4 < (hongkongM.length % (Math.max(4, renewR.length)))) {
         renewR = `${((cornerE ? 2 : 4) % (Math.max(hongkongM.length, 10)))}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
         collectionV.push(hongkongM.length);
      }
         hongkongM = [hongkongM.length - 1];
          let mbnative7 = String.fromCharCode(104,95,53,54,95,99,97,114,101,116,0);
          let fulln = String.fromCharCode(118,95,57,52,95,102,111,108,108,111,119,0);
          let fast_ = false;
         cornerE = (m_playerQ.length - collectionV.length) > 17;
         mbnative7 = `${mbnative7.length}`;
         fulln += `${2 | fulln.length}`;
         fast_ = mbnative7.length >= fulln.length;
          let infoM = String.fromCharCode(106,95,50,48,95,99,111,109,112,111,110,101,110,116,0);
          let otherP = String.fromCharCode(111,112,116,105,109,105,115,109,95,118,95,52,56,0);
         hongkongM.push((String.fromCharCode(78,0) == renewR ? renewR.length : collectionV.length));
         infoM = `${infoM.length % 3}`;
         otherP += `${otherP.length * infoM.length}`;
      let expandw = m_playerQ == String.fromCharCode(105,113,102,109,116,104,107,98,0);
      do {
         m_playerQ = `${renewR.length}`;
         if (expandw) {
            break;
         }
      } while ((m_playerQ.length < 3) && expandw);
      while (2 < (1 ^ collectionV.length)) {
         renewR += `${(String.fromCharCode(74,0) == renewR ? (cornerE ? 5 : 4) : renewR.length)}`;
         break;
      }
         cornerE = renewR.length < 11;
      if (cornerE) {
          let dplusj: Array<any> = [93, 877, 391];
          let indicator2 = String.fromCharCode(114,101,102,100,117,112,101,95,112,95,57,49,0);
          let brightnessM: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,112,101,114,95,101,95,50,48,0),609], [String.fromCharCode(101,95,56,95,99,111,109,112,0),85], [String.fromCharCode(116,95,49,55,95,115,99,97,108,97,114,115,0),222]]);
          let controll: Array<any> = [735, 472];
         m_playerQ += `${brightnessM.size + 3}`;
         dplusj = [dplusj.length + indicator2.length];
         indicator2 = `${dplusj.length >> (Math.min(Math.abs(3), 3))}`;
         brightnessM = new Map([[`${dplusj.length}`, indicator2.length * 1]]);
         controll.push(indicator2.length);
      }
      let sound7 = cornerE ? !cornerE : cornerE;
      do {
         cornerE = !cornerE;
         if (sound7) {
            break;
         }
      } while (sound7 && (!cornerE && m_playerQ.length <= 4));
         collectionV = [m_playerQ.length];
       let manifestr = 1.0;
       let analytics = 1.0;
      if (1.29 >= (manifestr + 3.54)) {
         collectionV.push(((cornerE ? 1 : 5) | hongkongM.length));
      }
      edit8 = episodeO == String.fromCharCode(70,0);
      if (shootn) {
         break;
      }
   } while ((edit8) && shootn);
       let turn5 = 1.0;
         turn5 += parseInt(`${turn5}`);
      for (let i = 0; i < 2; i++) {
         turn5 *= 1 >> (Math.min(Math.abs(parseInt(`${turn5}`)), 4));
      }
      let fillb = 6994297.0 <= turn5;
      do {
         turn5 -= 3;
         if (fillb) {
            break;
         }
      } while ((5.55 <= (turn5 / 1)) && fillb);
      selectionI /= Math.max(2, (String.fromCharCode(111,0) == episodeO ? episodeO.length : parseInt(`${turn5}`)));
            setVideoTitleErrMsg('请填写标题');

      rightj /= Math.max(3 ^ successa.length, 5);
   while (edit8 && (window_q19 / 4.7) > 4.24) {
       let whatsapp0 = 3;
       let l_playero = 5.0;
       let strings4: Array<any> = [String.fromCharCode(112,105,120,102,109,116,95,100,95,53,48,0), String.fromCharCode(117,95,55,95,112,114,111,99,0)];
       let taily = String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,49,95,53,56,0);
         strings4.push(3);
      let downloadingS = 5934780 <= strings4.length;
      do {
         strings4 = [3];
         if (downloadingS) {
            break;
         }
      } while (((l_playero * 2.59) > 5.99 && (parseFloat(`${strings4.length}`) * l_playero) > 2.59) && downloadingS);
         whatsapp0 ^= (taily == String.fromCharCode(83,0) ? whatsapp0 : taily.length);
      let projectI = strings4.length <= 6351968;
      do {
          let dplusr = false;
          let historyJ: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,106,111,121,102,117,108,0),453], [String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,111,95,54,53,0),226], [String.fromCharCode(104,95,53,57,95,100,101,114,105,118,0),589]]);
          let tooltipsN = String.fromCharCode(99,95,53,95,99,108,105,112,112,105,110,103,110,111,100,101,0);
          let orientation3 = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,113,95,55,55,0);
          let zhengpianY = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,53,95,55,55,0);
         strings4 = [3];
         dplusr = orientation3.length == 92;
         historyJ.set(`${zhengpianY}`, zhengpianY.length);
         tooltipsN = `${3 * zhengpianY.length}`;
         orientation3 += `${orientation3.length / (Math.max(7, zhengpianY.length))}`;
         if (projectI) {
            break;
         }
      } while ((4 >= taily.length) && projectI);
      while ((whatsapp0 / (Math.max(l_playero, 4))) >= 2.8) {
         l_playero -= parseFloat(`${strings4.length & parseInt(`${l_playero}`)}`);
         break;
      }
      if (taily.length >= 2) {
         l_playero += parseFloat(`${3}`);
      }
      let giftT = String.fromCharCode(111,121,51,50,57,50,0) == taily;
      do {
         taily = `${taily.length}`;
         if (giftT) {
            break;
         }
      } while (giftT && (5 >= (4 / (Math.max(9, taily.length)))));
      if ((4.38 - l_playero) >= 4.3 || (l_playero - 4.38) >= 1.73) {
         l_playero *= parseFloat(`${whatsapp0}`);
      }
      for (let e = 0; e < 2; e++) {
         l_playero /= Math.max(5, parseFloat(`${strings4.length / (Math.max(1, 2))}`));
      }
      for (let w = 0; w < 1; w++) {
         strings4 = [1 << (Math.min(Math.abs(parseInt(`${l_playero}`)), 3))];
      }
          let contextD = false;
          let manifest2: Map<any, any> = new Map([[String.fromCharCode(108,101,97,118,101,95,118,95,50,48,0),728], [String.fromCharCode(98,95,55,52,95,105,110,118,97,108,105,100,97,116,101,100,0),482], [String.fromCharCode(104,95,55,57,95,114,101,103,117,108,97,114,0),110]]);
          let successj = String.fromCharCode(97,117,100,105,116,105,110,103,95,98,95,52,53,0);
         strings4 = [(2 * (contextD ? 3 : 2))];
         contextD = successj == String.fromCharCode(110,0);
         manifest2 = new Map([[`${manifest2.size}`, (String.fromCharCode(73,0) == successj ? manifest2.size : successj.length)]]);
          let sideZ = true;
          let short_7s = 1.0;
         l_playero /= Math.max(parseFloat(`${3 - whatsapp0}`), 2);
         sideZ = short_7s == 22.16;
         short_7s *= parseFloat(`${2 ^ parseInt(`${short_7s}`)}`);
      window_q19 += parseFloat(`${placeholderm.length}`);
      break;
   }
            return;
        } else {

   while ((5 - episodeO.length) > 5) {
      episodeO = `${((edit8 ? 3 : 2) - successa.length)}`;
      break;
   }
   if (4 < (4 * successa.length) || 2 < (4 % (Math.max(1, successa.length)))) {
       let y_count0 = 2;
       let submitz = 5.0;
       let larged: Array<any> = [167, 910, 630];
       let sort2: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,99,111,110,100,101,110,115,97,98,108,101,0),396], [String.fromCharCode(98,114,111,97,100,99,97,115,116,115,95,103,95,51,56,0),984], [String.fromCharCode(97,95,55,54,95,102,116,97,98,0),755]]);
      if (2.26 > submitz) {
         larged = [sort2.size % 1];
      }
          let foundR = 1.0;
          let chinaZ: Map<any, any> = new Map([[String.fromCharCode(119,101,97,107,95,120,95,55,52,0),723], [String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,101,95,53,50,0),237], [String.fromCharCode(119,95,57,48,95,112,115,104,0),111]]);
         submitz /= Math.max(parseFloat(`${parseInt(`${foundR}`) + 2}`), 1);
         foundR += parseFloat(`${chinaZ.size}`);
         chinaZ = new Map([[`${chinaZ.size}`, chinaZ.size]]);
      for (let k = 0; k < 2; k++) {
          let android3 = 4.0;
          let tempY: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,112,111,105,110,116,95,114,95,52,52,0),406], [String.fromCharCode(122,95,51,57,95,109,97,116,99,104,105,110,103,0),238]]);
          let foregroundS = 4;
          let shootx: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,112,114,111,112,111,114,116,105,111,110,0),415], [String.fromCharCode(108,111,99,107,97,98,108,101,95,99,95,50,53,0),452], [String.fromCharCode(98,97,110,110,101,100,95,56,95,54,48,0),466]]);
          let fastK: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,117,118,95,52,95,49,57,0),201], [String.fromCharCode(115,109,105,108,105,110,103,95,121,95,51,0),224]]);
         submitz *= parseFloat(`${foregroundS}`);
         android3 /= Math.max(parseFloat(`${parseInt(`${android3}`) ^ shootx.size}`), 3);
         tempY.set(`${android3}`, 2);
         foregroundS |= tempY.size;
         shootx.set(`${android3}`, parseInt(`${android3}`));
         fastK = new Map([[`${fastK.size}`, 3 ^ fastK.size]]);
      }
          let modeA: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,97,105,109,100,0),113], [String.fromCharCode(113,95,53,49,95,110,100,101,102,0),679]]);
          let reactnativejse = 5;
         larged = [reactnativejse];
         modeA = new Map([[`${modeA.size}`, modeA.size << (Math.min(Math.abs(modeA.size), 5))]]);
         reactnativejse |= 2 * modeA.size;
      if (3 == (y_count0 * 5) && (y_count0 << (Math.min(Math.abs(5), 4))) == 4) {
         y_count0 %= Math.max(3, 4);
      }
         larged = [3 / (Math.max(5, larged.length))];
      while ((y_count0 - submitz) < 2.93) {
         y_count0 |= 1 % (Math.max(2, y_count0));
         break;
      }
      for (let g = 0; g < 3; g++) {
         y_count0 |= sort2.size;
      }
          let hooks6 = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,107,95,51,56,0);
          let whistlea = String.fromCharCode(103,101,116,112,95,57,95,54,51,0);
          let ewardeds = 1;
         y_count0 <<= Math.min(Math.abs(parseInt(`${submitz}`)), 4);
         hooks6 += "3";
         whistlea = `${hooks6.length / (Math.max(1, 10))}`;
         ewardeds %= Math.max(3, 1);
      for (let g = 0; g < 3; g++) {
         larged.push(2);
      }
          let with_ts3 = true;
         y_count0 ^= 2;
          let invites = String.fromCharCode(120,95,53,55,0);
          let smallq = String.fromCharCode(100,95,56,52,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
         sort2.set(invites, invites.length % 1);
         smallq = "3";
      upgradey -= placeholderm.length;
   }
            setVideoTitleErrMsg(undefined);
        }

        try {

      window_q19 -= parseFloat(`${parseInt(`${upgradey}`) & 2}`);
      edit8 = rightj >= 39.53;
            

      edit8 = episodeO.length == 2;
   if (2.80 >= window_q19) {
      window_q19 += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${window_q19}`)), 5))}`);
   }

            

   while ((mbbannerS.length - parseInt(`${rightj}`)) > 5 && (rightj - mbbannerS.length) > 5.35) {
       let guideK = String.fromCharCode(100,95,51,48,95,103,114,97,98,0);
       let submitF = String.fromCharCode(98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,95,120,95,53,57,0);
       let shirtG = String.fromCharCode(122,111,109,98,105,101,95,53,95,57,51,0);
         shirtG = `${submitF.length << (Math.min(Math.abs(3), 5))}`;
      for (let w = 0; w < 3; w++) {
          let groupg: Array<any> = [858, 820];
         guideK = `${3 + shirtG.length}`;
         groupg.push(groupg.length & 2);
      }
         shirtG += `${shirtG.length / (Math.max(submitF.length, 4))}`;
         guideK = `${submitF.length << (Math.min(shirtG.length, 3))}`;
          let mbjscommonD = false;
          let sheetg = String.fromCharCode(112,95,53,57,95,110,97,118,105,103,97,116,101,100,0);
          let rewindV = String.fromCharCode(99,108,105,112,115,95,107,95,51,54,0);
         shirtG += `${((mbjscommonD ? 5 : 1))}`;
         mbjscommonD = rewindV == String.fromCharCode(53,0);
         sheetg += `${rewindV.length * 2}`;
         guideK = `${shirtG.length}`;
         shirtG += `${(guideK == String.fromCharCode(121,0) ? submitF.length : guideK.length)}`;
         guideK = "2";
      if (guideK.length <= submitF.length) {
         guideK += `${shirtG.length}`;
      }
      mbbannerS.push((submitF == String.fromCharCode(51,0) ? mbbannerS.length : submitF.length));
      break;
   }
   for (let e = 0; e < 3; e++) {
      rightj -= parseInt(`${rightj}`) | parseInt(`${upgradey}`);
   }

            

      window_q19 -= parseFloat(`${parseInt(`${window_q19}`)}`);
   for (let h = 0; h < 2; h++) {
       let favoriteB = String.fromCharCode(109,101,109,115,104,105,112,95,53,95,55,53,0);
       let updatesc = 5.0;
       let about5: Array<any> = [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,117,95,57,0), String.fromCharCode(114,101,99,111,114,100,101,114,95,97,95,53,56,0), String.fromCharCode(115,101,116,99,98,95,111,95,50,52,0)];
      for (let z = 0; z < 1; z++) {
          let benefitx = String.fromCharCode(117,95,56,50,95,115,116,114,101,114,114,111,114,0);
          let penaltyQ = String.fromCharCode(112,111,112,117,108,97,114,95,108,95,50,51,0);
          let footballx = false;
          let type_sT: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,114,95,107,95,53,54,0),36], [String.fromCharCode(116,101,108,108,97,114,95,48,95,49,51,0),276], [String.fromCharCode(107,95,50,48,95,118,97,114,105,97,110,116,115,0),569]]);
          let anews_ = true;
         updatesc /= Math.max(2, ((footballx ? 4 : 2)));
         benefitx = `${benefitx.length & type_sT.size}`;
         penaltyQ += "1";
         footballx = type_sT.size <= 24;
         anews_ = type_sT.size <= 85;
      }
       let step2 = String.fromCharCode(99,114,99,116,97,98,108,101,95,108,95,57,0);
       let episodea = String.fromCharCode(121,95,49,51,95,99,111,110,116,97,105,110,97,98,108,101,0);
       let catalogS = String.fromCharCode(119,101,101,107,100,97,121,115,95,98,95,56,53,0);
      let reducerE = favoriteB == String.fromCharCode(57,97,99,51,0);
      do {
          let frame_6p = true;
         favoriteB = `${catalogS.length * 3}`;
         frame_6p = (frame_6p ? !frame_6p : frame_6p);
         if (reducerE) {
            break;
         }
      } while ((favoriteB.endsWith(catalogS)) && reducerE);
      while (catalogS.length <= step2.length) {
         catalogS = `${favoriteB.length & catalogS.length}`;
         break;
      }
         step2 = `${catalogS.length & episodea.length}`;
      if (favoriteB.endsWith(`${about5.length}`)) {
          let o_lockP = String.fromCharCode(111,112,116,95,108,95,49,52,0);
          let champions = String.fromCharCode(98,111,114,100,101,114,115,95,114,95,53,0);
         about5 = [episodea.length | about5.length];
         o_lockP = "1";
         champions = `${champions.length}`;
      }
         episodea += "3";
      if (5 > (2 - step2.length) && 4 > (2 - step2.length)) {
         step2 += `${episodea.length ^ favoriteB.length}`;
      }
      edit8 = !episodeO.startsWith(`${rightj}`);
   }
            

       let flipperT = 4.0;
       let xvodE = 4;
      for (let b = 0; b < 2; b++) {
          let sellY = String.fromCharCode(109,95,53,52,95,99,104,97,110,103,101,108,111,103,0);
          let sportsh: Array<any> = [699, 409, 655];
          let playv = 1.0;
          let model0 = String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,117,95,51,51,0);
         xvodE >>= Math.min(Math.abs(sellY.length - parseInt(`${flipperT}`)), 2);
         sellY += `${2 + parseInt(`${playv}`)}`;
         sportsh.push(1);
         playv *= (parseFloat(`${String.fromCharCode(120,0) == model0 ? model0.length : sportsh.length}`));
      }
      if ((flipperT - 1.18) <= 3.90 && 4.27 <= (flipperT - 1.18)) {
         xvodE %= Math.max(3, 3 / (Math.max(3, xvodE)));
      }
          let hooks4 = true;
          let mini9 = String.fromCharCode(118,95,54,52,95,97,100,106,97,99,101,110,116,0);
         flipperT /= Math.max(1, parseFloat(`${3 & xvodE}`));
         hooks4 = mini9.length > 35 && !hooks4;
         mini9 = `${((hooks4 ? 2 : 2) - mini9.length)}`;
         xvodE |= 2 & parseInt(`${flipperT}`);
         xvodE >>= Math.min(4, Math.abs(parseInt(`${flipperT}`)));
         xvodE %= Math.max(xvodE & 2, 2);
      rightj *= xvodE & parseInt(`${rightj}`);
       let dycreatorj = 1.0;
       let modeI = 2.0;
       let gestures9 = String.fromCharCode(117,95,53,52,95,108,108,118,105,100,101,110,99,100,115,112,0);
      if (4 >= (gestures9.length + 2) || 5.96 >= (dycreatorj * gestures9.length)) {
          let notification5 = String.fromCharCode(98,95,53,48,95,112,114,111,116,101,99,116,101,100,0);
          let patho = 0;
          let streamingb = String.fromCharCode(100,97,112,112,115,95,113,95,52,49,0);
         dycreatorj -= streamingb.length;
         notification5 = `${(notification5 == String.fromCharCode(101,0) ? notification5.length : patho)}`;
         patho <<= Math.min(3, Math.abs(notification5.length - 2));
         streamingb += `${notification5.length & 2}`;
      }
         gestures9 += `${parseInt(`${dycreatorj}`) - 3}`;
      if (4.49 == (modeI / 2.12) && (dycreatorj * modeI) == 2.12) {
         modeI += parseFloat(`${parseInt(`${modeI}`) | 1}`);
      }
          let countryL: Array<any> = [464, 272];
         modeI += parseFloat(`${countryL.length - 1}`);
      let analyticsS = 5087113.0 <= modeI;
      do {
          let middlewareZ = String.fromCharCode(119,95,54,57,95,101,110,116,114,121,112,111,105,110,116,0);
          let projectt = false;
          let b_managerS = 5.0;
          let pagination7: Array<any> = [String.fromCharCode(115,117,112,101,114,118,105,101,119,95,118,95,52,54,0), String.fromCharCode(111,119,110,101,114,115,104,105,112,95,108,95,56,55,0)];
          let upgradeI = true;
         modeI /= Math.max(parseFloat(`${parseInt(`${modeI}`) >> (Math.min(middlewareZ.length, 3))}`), 3);
         middlewareZ = `${pagination7.length * 2}`;
         projectt = pagination7.includes(upgradeI);
         b_managerS *= ((projectt ? 4 : 2));
         if (analyticsS) {
            break;
         }
      } while ((2.27 <= (modeI + 2.37) || 5.31 <= (2.37 + modeI)) && analyticsS);
          let cast2: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,52,95,54,54,0),947], [String.fromCharCode(106,95,57,56,95,104,100,101,99,0),225]]);
          let debug7 = 5.0;
         dycreatorj += parseInt(`${dycreatorj}`) ^ gestures9.length;
         cast2.set(`${debug7}`, cast2.size);
         debug7 *= parseFloat(`${cast2.size % (Math.max(5, parseInt(`${debug7}`)))}`);
      let sentry8 = dycreatorj <= 6976075.0;
      do {
         dycreatorj /= Math.max(5, gestures9.length);
         if (sentry8) {
            break;
         }
      } while (((gestures9.length << (Math.min(Math.abs(2), 2))) < 1) && sentry8);
      let whistleG = 6574593.0 <= dycreatorj;
      do {
         dycreatorj *= 2 / (Math.max(4, parseInt(`${modeI}`)));
         if (whistleG) {
            break;
         }
      } while (whistleG && (4.48 >= (modeI / (Math.max(2.25, 2))) && 4.31 >= (dycreatorj / (Math.max(2.25, 2)))));
         modeI *= parseFloat(`${gestures9.length + 3}`);
      mbbannerS.push(1);
            

   for (let t = 0; t < 3; t++) {
      successa.push(parseInt(`${rightj}`) + 3);
   }
      episodeO += `${episodeO.length}`;
            

   while (4 <= (3 ^ mbbannerS.length)) {
      upgradey /= Math.max(1, 1);
      break;
   }
      episodeO = `${episodeO.length}`;
            

      upgradey -= successa.length + parseInt(`${rightj}`);
      episodeO = "1";

            

       let login6 = String.fromCharCode(102,95,49,56,95,100,101,108,101,103,97,116,111,114,0);
      while (login6.length == 4) {
         login6 = `${login6.length}`;
         break;
      }
      let closek = login6.length >= 7521623;
      do {
          let foundRg: Array<any> = [827, 51];
          let hearta: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,0),176], [String.fromCharCode(102,97,118,105,99,111,110,95,100,95,51,48,0),594]]);
          let episodesP = true;
          let macaua = String.fromCharCode(117,110,105,99,111,100,101,95,111,95,55,56,0);
          let t_viewp = String.fromCharCode(100,99,97,97,100,112,99,109,95,120,95,56,57,0);
         login6 += `${t_viewp.length}`;
         foundRg = [(macaua == String.fromCharCode(113,0) ? (episodesP ? 5 : 3) : macaua.length)];
         hearta.set(`${foundRg.length}`, hearta.size << (Math.min(foundRg.length, 1)));
         episodesP = (15 < ((episodesP ? macaua.length : 15) % (Math.max(macaua.length, 7))));
         t_viewp += `${hearta.size}`;
         if (closek) {
            break;
         }
      } while ((!login6.endsWith(login6)) && closek);
          let package_ize = 4.0;
         login6 = `${3 >> (Math.min(2, Math.abs(parseInt(`${package_ize}`))))}`;
      selectionI -= 3;
      selectionI += 2 + parseInt(`${rightj}`);

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

   while ((4.11 - window_q19) <= 4.32 || (window_q19 + rightj) <= 4.11) {
       let next7 = String.fromCharCode(108,95,50,56,95,101,110,113,117,101,117,101,100,0);
       let fieldg = String.fromCharCode(99,95,56,50,95,121,117,118,121,117,118,0);
       let servicej: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,116,114,121,0),String.fromCharCode(101,95,56,95,105,109,109,117,116,97,98,108,101,0)], [String.fromCharCode(101,110,99,111,100,105,110,103,98,95,118,95,55,48,0),String.fromCharCode(99,118,105,100,95,103,95,55,57,0)]]);
      for (let m = 0; m < 1; m++) {
         fieldg += `${fieldg.length % (Math.max(3, 10))}`;
      }
         servicej.set(`${fieldg}`, 2 >> (Math.min(1, Math.abs(servicej.size))));
      if ((2 - servicej.size) > 2 || 2 > (fieldg.length - servicej.size)) {
          let main_d0: Array<any> = [628, 893, 440];
          let commonx: Array<any> = [750, 700];
          let bridgeL: Array<any> = [902, 492];
          let benefit6 = String.fromCharCode(114,101,102,114,101,115,104,95,117,95,50,50,0);
          let analytice = String.fromCharCode(116,105,109,101,115,95,117,95,49,48,48,0);
         fieldg = `${commonx.length}`;
         main_d0.push(benefit6.length >> (Math.min(5, main_d0.length)));
         commonx = [1];
         bridgeL.push(benefit6.length + 2);
         analytice = "3";
      }
          let favicone = String.fromCharCode(115,101,115,115,105,111,110,95,117,95,49,54,0);
          let basketballu = String.fromCharCode(109,101,109,99,109,112,95,57,95,50,0);
          let projectK = String.fromCharCode(120,95,49,49,95,99,104,105,110,0);
         fieldg = `${fieldg.length | favicone.length}`;
         favicone += `${basketballu.length / (Math.max(4, projectK.length))}`;
         basketballu = `${projectK.length}`;
       let dangery = 0.0;
       let orientation1 = 1.0;
         servicej = new Map([[fieldg, 1 & parseInt(`${orientation1}`)]]);
         fieldg += `${servicej.size / 3}`;
       let countdownk = String.fromCharCode(111,95,55,54,95,109,105,115,115,101,100,0);
       let settingsj = 0.0;
      window_q19 *= parseFloat(`${successa.length % 2}`);
      next7 += `${next7.length % (Math.max(next7.length, 7))}`;
      break;
   }
      rightj -= episodeO.length - 1;

            setShowSuccess(true);

       let nextl = 2.0;
          let eventZ = String.fromCharCode(103,108,97,115,115,95,52,95,49,49,0);
          let settingD = 0.0;
         nextl -= parseFloat(`${eventZ.length}`);
         eventZ = `${3 | parseInt(`${settingD}`)}`;
         settingD /= Math.max(1, parseInt(`${settingD}`) - 2);
      while (4.54 > nextl) {
         nextl -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${nextl}`)), 4))}`);
         break;
      }
      while ((nextl - nextl) < 3.53) {
          let activeX = String.fromCharCode(112,95,52,56,95,115,116,114,105,112,0);
          let liveR = 3.0;
          let kuaishoup = 1.0;
          let homeK = 3.0;
         nextl += parseFloat(`${3}`);
         activeX = `${parseInt(`${homeK}`)}`;
         liveR += parseFloat(`${parseInt(`${liveR}`) << (Math.min(3, Math.abs(3)))}`);
         kuaishoup += 3 + parseInt(`${kuaishoup}`);
         homeK *= activeX.length;
         break;
      }
      edit8 = nextl >= upgradey;
   while ((mbbannerS.length ^ placeholderm.length) > 4 && (4 ^ placeholderm.length) > 4) {
      mbbannerS.push(1);
      break;
   }

            setTimeout(() => {

   while ((window_q19 - selectionI) < 2.6 && (selectionI - window_q19) < 2.6) {
      selectionI *= 2;
      break;
   }
       let moonh = 2.0;
       let controls5 = false;
       let hongkongj: Map<any, any> = new Map([[String.fromCharCode(118,111,98,115,117,98,95,55,95,53,53,0),386], [String.fromCharCode(115,101,99,115,95,122,95,56,49,0),482], [String.fromCharCode(98,105,116,97,108,108,111,99,95,112,95,49,48,48,0),941]]);
      while (controls5 && (moonh + 5.2) == 2.94) {
         moonh /= Math.max(hongkongj.size, 3);
         break;
      }
      if (!controls5 && (hongkongj.size - 4) <= 1) {
         controls5 = null != hongkongj.get(`${controls5}`);
      }
      while ((hongkongj.size / 1) == 1 && (3.44 * moonh) == 5.32) {
          let fieldO: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,119,95,55,55,0),true ], [String.fromCharCode(114,97,108,102,100,97,116,97,95,114,95,55,0),false ]]);
         moonh /= Math.max(fieldO.size, 4);
         break;
      }
      let plusd = controls5 ? !controls5 : controls5;
      do {
         controls5 = controls5 || hongkongj.size < 77;
         if (plusd) {
            break;
         }
      } while (((2 + hongkongj.size) == 2 && controls5) && plusd);
      let mailk = controls5 ? !controls5 : controls5;
      do {
         controls5 = hongkongj.size >= 97;
         if (mailk) {
            break;
         }
      } while ((controls5 || (2 % (Math.max(5, hongkongj.size))) > 4) && mailk);
      if (hongkongj.get(`${moonh}`) == null) {
          let trophyr = String.fromCharCode(120,95,49,95,101,114,114,0);
          let countryv: Map<any, any> = new Map([[String.fromCharCode(108,95,54,48,95,114,97,110,115,105,116,105,111,110,0),false ], [String.fromCharCode(121,95,57,55,95,108,111,99,97,116,105,111,110,0),false ]]);
          let orientationm = 2;
         moonh -= 2;
         trophyr = `${2 + orientationm}`;
         countryv = new Map([[`${orientationm}`, (trophyr == String.fromCharCode(101,0) ? orientationm : trophyr.length)]]);
      }
         hongkongj = new Map([[`${controls5}`, (parseInt(`${moonh}`) - (controls5 ? 1 : 1))]]);
          let pathV = 2.0;
          let storeB = 4.0;
         moonh += (parseInt(`${pathV}`) >> (Math.min(5, Math.abs((controls5 ? 2 : 4)))));
         pathV += parseInt(`${storeB}`);
         controls5 = !controls5;
      placeholderm.push(parseInt(`${selectionI}`));
                setShowSuccess(false);

   if (rightj < 5.53 || 4.76 < (rightj * 5.53)) {
      edit8 = 34.80 == upgradey;
   }
      successa.push(((edit8 ? 3 : 4) | 3));
                ttTarget.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
       let becomeR: Map<any, any> = new Map([[String.fromCharCode(109,95,57,52,95,111,98,109,99,0),863], [String.fromCharCode(117,95,49,53,95,111,115,116,114,101,97,109,0),441], [String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,53,95,51,0),984]]);
    let settingj = String.fromCharCode(118,95,53,56,0);
    let goala = 3;
    let modelsy = 3;
    let streaming7 = false;
    let headerB: Array<any> = [690, 313, 252];
    let settingu: Map<any, any> = new Map([[String.fromCharCode(98,102,114,97,99,116,105,111,110,95,105,95,49,50,0),716], [String.fromCharCode(98,95,51,56,95,99,111,110,110,101,99,116,105,111,110,115,0),850]]);
    let activityE = false;
       let configurer = String.fromCharCode(103,95,57,52,95,117,97,110,0);
       let combinedK = false;
       let libcrashsdkB = 0.0;
      while (!combinedK) {
         combinedK = 81.66 < libcrashsdkB;
         break;
      }
      let zoomA = configurer == String.fromCharCode(109,99,113,99,108,102,57,52,48,0);
      do {
         configurer += `${((combinedK ? 5 : 3))}`;
         if (zoomA) {
            break;
         }
      } while (zoomA && (!configurer.endsWith(`${combinedK}`)));
          let gmailu: Array<any> = [674, 241];
         configurer += `${(2 * (combinedK ? 2 : 4))}`;
         gmailu.push(gmailu.length);
         combinedK = ((configurer.length - (!combinedK ? 7 : configurer.length)) == 7);
      let penaltyY = combinedK ? !combinedK : combinedK;
      do {
         combinedK = !combinedK;
         if (penaltyY) {
            break;
         }
      } while ((4 <= configurer.length) && penaltyY);
         configurer += `${2 | parseInt(`${libcrashsdkB}`)}`;
      while (combinedK) {
         combinedK = libcrashsdkB > 27.34;
         break;
      }
         combinedK = 27.85 == libcrashsdkB && !combinedK;
         combinedK = configurer.length > 78 && 17.4 > libcrashsdkB;
      modelsy |= settingj.length >> (Math.min(Math.abs(1), 3));
       let mappingQ = 4.0;
         mappingQ /= Math.max(parseInt(`${mappingQ}`) % (Math.max(parseInt(`${mappingQ}`), 4)), 3);
         mappingQ += 1;
          let readV = String.fromCharCode(119,95,49,53,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0);
          let indexp = false;
          let catagoryR: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,101,114,115,95,48,95,55,52,0),627], [String.fromCharCode(106,95,53,49,95,105,110,117,115,101,0),566], [String.fromCharCode(116,114,97,115,104,111,108,100,95,49,95,54,51,0),353]]);
         mappingQ -= catagoryR.size;
         readV += `${((indexp ? 5 : 3) / (Math.max(readV.length, 4)))}`;
         indexp = !indexp;
         catagoryR = new Map([[`${indexp}`, 2 & readV.length]]);
      settingj = `${headerB.length >> (Math.min(Math.abs(2), 2))}`;
   if (3 <= headerB.length) {
      streaming7 = becomeR.size > modelsy;
   }
   if (!streaming7) {
      headerB.push(settingu.size);
   }
      settingj += `${modelsy ^ 1}`;
   let agreementV = 6232658 <= becomeR.size;
   do {
      becomeR = new Map([[`${settingu.size}`, headerB.length]]);
      if (agreementV) {
         break;
      }
   } while (agreementV && (!settingj.startsWith(`${becomeR.size}`)));
       let material5 = String.fromCharCode(97,95,51,57,95,109,111,100,109,0);
          let circler = 2;
          let trophy7 = 0.0;
          let huaweiY: Array<any> = [316, 438, 941];
         material5 = `${parseInt(`${trophy7}`)}`;
         circler ^= circler;
         trophy7 -= parseFloat(`${huaweiY.length}`);
         huaweiY = [circler];
      for (let e = 0; e < 1; e++) {
          let submitS = 1.0;
          let sortG: Map<any, any> = new Map([[String.fromCharCode(115,116,97,108,101,95,111,95,51,0),782], [String.fromCharCode(100,101,108,105,109,105,116,101,114,95,53,95,50,55,0),684], [String.fromCharCode(101,97,105,100,99,116,95,53,95,57,50,0),299]]);
          let privilegeH = 2;
          let hongkong9 = false;
         material5 += `${3 ^ sortG.size}`;
         submitS += parseInt(`${submitS}`) % 1;
         sortG.set(`${hongkong9}`, 2 << (Math.min(Math.abs(privilegeH), 2)));
         privilegeH /= Math.max(privilegeH, 3);
         hongkong9 = privilegeH < 100;
      }
      while (material5 != material5) {
          let langkeyD: Array<any> = [845, 29];
          let downt = String.fromCharCode(110,95,57,48,95,99,108,117,115,116,101,114,115,0);
         material5 = `${(downt == String.fromCharCode(101,0) ? downt.length : langkeyD.length)}`;
         break;
      }
      modelsy <<= Math.min(Math.abs(1), 3);
       let popupo = 0;
       let transfer7 = 3;
       let reducer1: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,103,95,54,48,0),String.fromCharCode(119,97,110,116,115,95,49,95,53,57,0)], [String.fromCharCode(98,101,110,101,97,116,104,95,52,95,56,0),String.fromCharCode(97,95,56,51,95,104,105,103,104,112,97,115,115,0)], [String.fromCharCode(102,114,97,109,101,115,121,110,99,95,103,95,49,48,48,0),String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,55,95,50,55,0)]]);
      let submitf = 9888805 >= transfer7;
      do {
         transfer7 <<= Math.min(Math.abs(transfer7 << (Math.min(Math.abs(1), 5))), 3);
         if (submitf) {
            break;
         }
      } while (((transfer7 & 4) == 2) && submitf);
      let w_county = 6016296 >= transfer7;
      do {
          let types3 = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,106,95,52,49,0);
          let holderS = String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,51,95,50,55,0);
          let tickb: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,95,57,95,50,53,0),562], [String.fromCharCode(100,117,114,105,110,103,95,103,95,53,57,0),741]]);
          let project8 = String.fromCharCode(98,95,50,51,95,107,102,114,109,0);
         transfer7 &= 3;
         types3 += `${1 - project8.length}`;
         holderS = `${tickb.size}`;
         tickb = new Map([[types3, holderS.length]]);
         project8 += `${types3.length / (Math.max(2, project8.length))}`;
         if (w_county) {
            break;
         }
      } while (w_county && (!Array.from(reducer1.values()).includes(transfer7)));
         transfer7 <<= Math.min(5, Math.abs(reducer1.size % (Math.max(1, 3))));
         popupo ^= reducer1.size * popupo;
         popupo ^= 2;
      if (!Array.from(reducer1.values()).includes(transfer7)) {
         reducer1 = new Map([[`${reducer1.size}`, reducer1.size]]);
      }
         transfer7 += transfer7 >> (Math.min(Math.abs(3), 3));
      let nextv = 7828354 <= reducer1.size;
      do {
          let save8: Array<any> = [14, 966];
          let logoK = 3.0;
          let componenty = 0.0;
          let materialB: Array<any> = [568, 530, 686];
         reducer1.set(`${componenty}`, 1);
         save8.push(materialB.length ^ save8.length);
         logoK -= parseFloat(`${materialB.length % (Math.max(2, 7))}`);
         componenty -= save8.length - parseInt(`${logoK}`);
         if (nextv) {
            break;
         }
      } while (nextv && ((3 + popupo) >= 4 || (3 + reducer1.size) >= 1));
         popupo >>= Math.min(Math.abs(reducer1.size & popupo), 5);
      settingu.set(settingj, transfer7);
      headerB = [1 >> (Math.min(4, headerB.length))];
   let build1 = streaming7 ? !streaming7 : streaming7;
   do {
      streaming7 = (headerB.length + settingj.length) <= 99;
      if (build1) {
         break;
      }
   } while (build1 && (4 < goala));
   if (becomeR.size < 1 || (1 << (Math.min(5, Math.abs(becomeR.size)))) < 4) {
      streaming7 = settingj.startsWith(`${goala}`);
   }
   let progressb = becomeR.size <= 9554797;
   do {
      becomeR = new Map([[`${settingu.size}`, goala % (Math.max(1, 6))]]);
      if (progressb) {
         break;
      }
   } while (progressb && (!Array.from(becomeR.keys()).includes(`${headerB.length}`)));
       let description_po = String.fromCharCode(97,115,111,108,117,116,101,95,118,95,50,56,0);
       let orientationg = String.fromCharCode(119,101,105,103,104,116,95,100,95,57,56,0);
         orientationg += `${orientationg.length}`;
       let mode5 = String.fromCharCode(112,97,110,101,108,115,95,53,95,54,55,0);
          let statsq = String.fromCharCode(109,95,52,49,95,116,104,114,101,97,100,101,100,0);
          let streaming7t = String.fromCharCode(114,95,49,48,95,117,116,118,105,100,101,111,0);
          let yellowe = String.fromCharCode(115,116,114,117,99,116,95,105,95,51,52,0);
         description_po += `${1 ^ statsq.length}`;
         statsq += `${yellowe.length}`;
         streaming7t = `${yellowe.length | streaming7t.length}`;
       let championq = 2.0;
         description_po = `${description_po.length}`;
          let canvasO = 5.0;
          let photo4 = 0.0;
          let borderlessU = true;
         description_po += "1";
         canvasO /= Math.max(((borderlessU ? 1 : 5) + parseInt(`${canvasO}`)), 5);
         photo4 /= Math.max((parseFloat(`${parseInt(`${photo4}`) >> (Math.min(2, Math.abs((borderlessU ? 2 : 5))))}`)), 4);
      streaming7 = settingj.length > 37;
   if (!streaming7 && 5 < (becomeR.size + 4)) {
      streaming7 = null != settingu.get(`${goala}`);
   }
       let infow = 2.0;
         infow *= parseFloat(`${1 * parseInt(`${infow}`)}`);
      while (3.13 == infow) {
         infow *= parseFloat(`${parseInt(`${infow}`)}`);
         break;
      }
         infow /= Math.max(1, parseFloat(`${parseInt(`${infow}`)}`));
      goala |= settingu.size & parseInt(`${infow}`);
      headerB = [1 ^ settingu.size];

        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
       let favicon9 = 1.0;
    let whiteU: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,102,105,110,116,0),838], [String.fromCharCode(120,120,104,97,115,104,95,115,95,51,53,0),466], [String.fromCharCode(119,97,116,101,114,95,102,95,55,56,0),334]]);
    let catagoryc = 0.0;
    let register_hbP = String.fromCharCode(115,113,108,105,116,101,114,98,117,95,113,95,49,50,0);
    let anythinkv: Array<any> = [836, 726];
    let faviconB = 0.0;
    let pangled = false;
    let halfY = String.fromCharCode(107,95,49,48,95,100,111,119,110,115,99,97,108,101,0);
    let confign = 3.0;
    let tailw = String.fromCharCode(115,116,114,101,110,103,116,104,115,95,118,95,51,54,0);
    let crossV = String.fromCharCode(110,95,56,55,95,115,104,105,102,116,105,110,103,115,0);
    let sheet4: Map<any, any> = new Map([[String.fromCharCode(107,95,53,56,95,100,101,116,101,99,116,0),true ], [String.fromCharCode(107,95,53,57,95,115,116,114,117,99,116,117,114,101,0),false ], [String.fromCharCode(111,95,56,52,95,109,97,120,98,105,116,114,97,116,101,0),false ]]);
    let t_titlet = true;
    let weibog = false;
    let soundF: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,95,121,95,54,52,0),528], [String.fromCharCode(102,95,53,95,116,105,109,101,111,117,116,101,100,0),67], [String.fromCharCode(114,101,103,105,115,116,114,97,114,95,48,95,56,55,0),863]]);
      whiteU.set(halfY, halfY.length);
       let with_b9 = String.fromCharCode(110,95,52,50,95,109,97,116,104,0);
       let const_xv = String.fromCharCode(104,95,53,52,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
       let main_et: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0),true ], [String.fromCharCode(115,101,115,115,111,110,95,55,95,57,48,0),false ], [String.fromCharCode(115,112,97,119,110,95,102,95,50,52,0),false ]]);
         const_xv = `${2 - const_xv.length}`;
      let searchbarv = with_b9.length <= 9073561;
      do {
         with_b9 += `${2 ^ with_b9.length}`;
         if (searchbarv) {
            break;
         }
      } while (searchbarv && (const_xv == String.fromCharCode(121,0)));
         main_et = new Map([[with_b9, 1]]);
         main_et.set(`${const_xv}`, main_et.size);
      let benefitR = String.fromCharCode(106,54,100,118,100,115,0) == const_xv;
      do {
         const_xv += `${const_xv.length}`;
         if (benefitR) {
            break;
         }
      } while (benefitR && (main_et.size > 2));
      for (let g = 0; g < 1; g++) {
         with_b9 += `${2 / (Math.max(9, with_b9.length))}`;
      }
      let mintegralM = const_xv.length <= 9288368;
      do {
          let catalog5 = String.fromCharCode(105,115,110,111,110,122,101,114,111,95,55,95,56,53,0);
          let agreement6 = String.fromCharCode(108,101,97,121,95,108,95,50,50,0);
          let moviesE = String.fromCharCode(97,95,50,49,95,115,97,110,105,116,121,0);
          let questk: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,99,116,120,0),false ], [String.fromCharCode(107,95,49,57,95,109,118,112,114,101,100,0),true ], [String.fromCharCode(116,105,109,105,110,103,115,95,119,95,55,50,0),false ]]);
          let plus2 = 2.0;
         const_xv += `${with_b9.length}`;
         catalog5 = `${moviesE.length | 2}`;
         agreement6 += `${agreement6.length + catalog5.length}`;
         moviesE = `${moviesE.length}`;
         questk = new Map([[agreement6, 1 ^ agreement6.length]]);
         plus2 *= questk.size >> (Math.min(Math.abs(2), 4));
         if (mintegralM) {
            break;
         }
      } while ((2 == const_xv.length && 2 == with_b9.length) && mintegralM);
         with_b9 += `${with_b9.length | const_xv.length}`;
      while (with_b9 != String.fromCharCode(114,0)) {
          let malaysiar = true;
         const_xv = `${2 % (Math.max(3, main_et.size))}`;
         malaysiar = (!malaysiar ? !malaysiar : !malaysiar);
         break;
      }
      tailw += `${parseInt(`${confign}`) ^ 1}`;
   for (let l = 0; l < 1; l++) {
      register_hbP = `${sheet4.size}`;
   }
       let groupf = 0.0;
       let weibof: Array<any> = [990, 19, 612];
       let kuaishoun: Array<any> = [String.fromCharCode(102,95,53,57,95,114,101,103,117,108,97,114,0), String.fromCharCode(112,95,56,50,95,111,116,111,115,0)];
       let yingg: Array<any> = [String.fromCharCode(98,95,57,49,95,116,121,112,101,110,97,109,101,0), String.fromCharCode(109,97,112,115,95,49,95,50,54,0)];
      let chath = 8879160 >= yingg.length;
      do {
         yingg = [3];
         if (chath) {
            break;
         }
      } while (chath && (1 < (yingg.length << (Math.min(Math.abs(3), 4))) || (4.74 * groupf) < 2.30));
      for (let h = 0; h < 1; h++) {
         groupf -= parseFloat(`${parseInt(`${groupf}`) * 2}`);
      }
      let privacyi = 5488384.0 >= groupf;
      do {
         groupf /= Math.max(parseFloat(`${yingg.length}`), 4);
         if (privacyi) {
            break;
         }
      } while (privacyi && (2 < (weibof.length * 1)));
         groupf += parseFloat(`${weibof.length - kuaishoun.length}`);
          let unreadg = String.fromCharCode(105,95,53,49,95,115,99,104,101,109,97,115,0);
          let smallh: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,95,108,95,57,50,0),false ], [String.fromCharCode(105,95,54,48,95,114,111,120,121,0),true ], [String.fromCharCode(112,97,115,112,95,103,95,49,53,0),true ]]);
         weibof = [1];
         unreadg = `${(unreadg == String.fromCharCode(85,0) ? unreadg.length : smallh.size)}`;
         smallh.set(unreadg, smallh.size);
      sheet4.set(`${halfY}`, (String.fromCharCode(95,0) == halfY ? sheet4.size : halfY.length));
   if (5.20 > favicon9) {
      favicon9 /= Math.max(parseFloat(`${register_hbP.length}`), 1);
   }
   let recommendationT = tailw.length <= 7336990;
   do {
      tailw = `${sheet4.size}`;
      if (recommendationT) {
         break;
      }
   } while (recommendationT && ((tailw.length * parseInt(`${favicon9}`)) < 1));
   let holderi = 7670628.0 <= faviconB;
   do {
      faviconB *= parseFloat(`${whiteU.size}`);
      if (holderi) {
         break;
      }
   } while ((faviconB > parseFloat(`${whiteU.size}`)) && holderi);
   if (whiteU.get(`${favicon9}`) == null) {
      favicon9 -= parseFloat(`${halfY.length - 3}`);
   }
   let ocopy_cjj = 6137130 <= whiteU.size;
   do {
       let upgradeB = 4.0;
       let tailm = 5.0;
      for (let p = 0; p < 1; p++) {
         upgradeB += parseInt(`${tailm}`);
      }
      while (2.46 == (5.36 * upgradeB) || (tailm * upgradeB) == 5.36) {
         upgradeB *= parseInt(`${tailm}`);
         break;
      }
         tailm += 1 | parseInt(`${upgradeB}`);
      if (1.69 >= (tailm + upgradeB) || 4.41 >= (1.69 + tailm)) {
          let dplusv = 0.0;
          let downloadingq = false;
          let mbridgeH = String.fromCharCode(106,112,101,103,99,111,109,112,95,111,95,51,55,0);
         tailm /= Math.max(parseInt(`${dplusv}`) % (Math.max(parseInt(`${tailm}`), 7)), 1);
         dplusv *= (parseFloat(`${mbridgeH == String.fromCharCode(97,0) ? (downloadingq ? 5 : 4) : mbridgeH.length}`));
         downloadingq = !downloadingq;
      }
         tailm *= parseInt(`${upgradeB}`);
      let more9 = upgradeB <= 8372937.0;
      do {
          let friendsF = 3.0;
          let mbbid0 = String.fromCharCode(118,95,52,54,95,100,97,118,115,0);
         upgradeB -= mbbid0.length ^ 1;
         friendsF /= Math.max(1, parseFloat(`${3}`));
         mbbid0 = `${parseInt(`${friendsF}`)}`;
         if (more9) {
            break;
         }
      } while (((tailm / 1) >= 1.0) && more9);
      whiteU = new Map([[`${confign}`, parseInt(`${confign}`)]]);
      if (ocopy_cjj) {
         break;
      }
   } while (ocopy_cjj && (!Array.from(whiteU.values()).includes(anythinkv.length)));
   let main_hF = String.fromCharCode(117,104,106,104,98,0) == register_hbP;
   do {
       let philippinesC = String.fromCharCode(99,97,112,116,117,114,101,95,53,95,56,51,0);
       let room3 = 4;
       let mbbannerf = 4;
       let modity8 = false;
          let description_05t = String.fromCharCode(115,97,108,116,95,102,95,53,49,0);
          let dplusw = String.fromCharCode(103,95,54,57,95,115,111,109,101,116,104,105,110,103,0);
         room3 <<= Math.min(Math.abs(room3 + philippinesC.length), 1);
         description_05t += `${2 & dplusw.length}`;
         dplusw += `${2 + dplusw.length}`;
      let mbjscommonK = philippinesC == String.fromCharCode(109,52,116,121,57,0);
      do {
         philippinesC += `${philippinesC.length}`;
         if (mbjscommonK) {
            break;
         }
      } while (mbjscommonK && (3 >= (4 / (Math.max(7, mbbannerf)))));
      if (5 >= mbbannerf) {
         mbbannerf <<= Math.min(4, Math.abs(3 % (Math.max(7, mbbannerf))));
      }
         modity8 = room3 == mbbannerf;
          let utilsF = 1;
          let stepL = String.fromCharCode(116,114,101,97,116,95,121,95,50,56,0);
          let cornerX = 0.0;
         philippinesC += `${parseInt(`${cornerX}`) ^ 3}`;
         utilsF <<= Math.min(Math.abs(utilsF - 2), 1);
         stepL = `${(stepL == String.fromCharCode(120,0) ? utilsF : stepL.length)}`;
         cornerX -= parseFloat(`${utilsF & stepL.length}`);
         room3 /= Math.max(3, mbbannerf);
      for (let l = 0; l < 2; l++) {
         modity8 = room3 > mbbannerf;
      }
          let auto_dR = false;
          let user6 = false;
         room3 <<= Math.min(parseInt(`${Math.abs((3 >> (Math.min(Math.abs((auto_dR ? 2 : 2)), 3))))}`), 3);
         auto_dR = (!user6 ? user6 : user6);
          let redirectY: Array<any> = [508, 392];
          let androidl = String.fromCharCode(97,118,112,107,116,95,112,95,55,57,0);
          let save9 = 1;
         mbbannerf += save9 % (Math.max(philippinesC.length, 5));
         redirectY = [redirectY.length << (Math.min(androidl.length, 5))];
         androidl += `${androidl.length | 3}`;
         save9 -= 1 + redirectY.length;
       let sortX = 4.0;
       let inactiveW = 5.0;
          let pagination7 = 4;
          let windn = 2;
         room3 %= Math.max(2, (String.fromCharCode(95,0) == philippinesC ? parseInt(`${sortX}`) : philippinesC.length));
         pagination7 &= windn;
         windn |= 2;
      while ((philippinesC.length >> (Math.min(Math.abs(5), 4))) == 2 && 5 == (parseInt(`${inactiveW}`) * philippinesC.length)) {
         inactiveW -= (parseFloat(`${mbbannerf | (modity8 ? 4 : 5)}`));
         break;
      }
      register_hbP = `${2 | parseInt(`${confign}`)}`;
      if (main_hF) {
         break;
      }
   } while (main_hF && (!register_hbP.startsWith(`${catagoryc}`)));
      whiteU.set(`${favicon9}`, register_hbP.length);
   while ((halfY.length - parseInt(`${favicon9}`)) < 1 && (favicon9 - 1.71) < 1.34) {
       let actionsP = true;
       let sigmob7: Array<any> = [911, 66, 541];
       let t_lockC: Array<any> = [782, 217, 930];
       let floaterT = 5.0;
       let sellH: Array<any> = [238, 827, 387];
      while (t_lockC.length >= sigmob7.length) {
          let reportw = 3.0;
          let backwardw = String.fromCharCode(103,114,97,116,105,99,117,108,101,95,52,95,49,48,48,0);
          let policyd: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,101,118,101,114,121,98,111,100,121,0),170], [String.fromCharCode(104,101,120,105,110,116,95,98,95,49,57,0),931]]);
         t_lockC.push(((actionsP ? 2 : 2) * 2));
         reportw += parseFloat(`${1}`);
         backwardw += `${parseInt(`${reportw}`)}`;
         policyd.set(`${reportw}`, parseInt(`${reportw}`));
         break;
      }
       let a_titlem = 2.0;
       let signinup2 = 4.0;
      if ((sigmob7.length & t_lockC.length) < 2 || 4 < (sigmob7.length & 2)) {
          let arrowD = String.fromCharCode(97,117,116,111,103,101,110,95,107,95,56,48,0);
          let sheetU = false;
          let renewj: Array<any> = [String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,109,95,49,51,0), String.fromCharCode(112,114,101,115,115,117,114,101,95,119,95,53,0)];
          let mintegral4 = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,48,95,55,50,0);
          let twitterh = false;
         t_lockC.push((parseInt(`${floaterT}`) << (Math.min(4, Math.abs((sheetU ? 5 : 4))))));
         arrowD += `${(String.fromCharCode(115,0) == arrowD ? renewj.length : arrowD.length)}`;
         sheetU = String.fromCharCode(49,0) == mintegral4 || 69 > renewj.length;
         mintegral4 += `${((twitterh ? 4 : 2) << (Math.min(Math.abs(1), 2)))}`;
         twitterh = renewj.includes(twitterh);
      }
      let read_ = 9643460.0 <= signinup2;
      do {
         signinup2 /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${floaterT}`)), 2))}`), 1);
         if (read_) {
            break;
         }
      } while (read_ && (!t_lockC.includes(signinup2)));
         actionsP = 7 >= t_lockC.length;
         a_titlem += (parseFloat(`${3 + (actionsP ? 2 : 1)}`));
          let singaporeK = 3;
          let yellowk = String.fromCharCode(97,95,50,55,95,99,114,111,115,115,112,111,115,116,0);
          let dangerp = 2;
         sigmob7.push(singaporeK);
         singaporeK %= Math.max((String.fromCharCode(99,0) == yellowk ? yellowk.length : dangerp), 2);
         dangerp *= (String.fromCharCode(65,0) == yellowk ? yellowk.length : dangerp);
         sellH = [parseInt(`${signinup2}`) % 2];
          let matchs: Map<any, any> = new Map([[String.fromCharCode(110,95,55,50,95,97,118,97,115,115,101,114,116,0),String.fromCharCode(115,105,103,105,108,108,95,51,95,52,48,0)], [String.fromCharCode(114,95,55,50,95,97,118,102,111,117,110,100,97,116,105,111,110,0),String.fromCharCode(107,95,56,54,95,116,111,98,105,116,0)], [String.fromCharCode(112,114,111,98,95,107,95,57,57,0),String.fromCharCode(112,114,111,118,105,100,101,114,95,119,95,53,56,0)]]);
          let fasti = 1.0;
          let googleJ = 2.0;
         actionsP = sigmob7.includes(t_lockC[0]);
         matchs.set(`${fasti}`, matchs.size);
         fasti *= parseInt(`${googleJ}`) << (Math.min(2, Math.abs(parseInt(`${fasti}`))));
         googleJ -= parseFloat(`${parseInt(`${googleJ}`) << (Math.min(Math.abs(1), 5))}`);
         sigmob7 = [(parseInt(`${floaterT}`) - (actionsP ? 2 : 4))];
      let malaysiaY = actionsP ? !actionsP : actionsP;
      do {
         actionsP = floaterT == t_lockC.length;
         if (malaysiaY) {
            break;
         }
      } while ((1.23 >= floaterT && (1.23 * floaterT) >= 2.17) && malaysiaY);
          let modalM = 0.0;
          let modelC = true;
          let foreground2 = String.fromCharCode(115,111,110,105,99,95,107,95,52,51,0);
         floaterT += t_lockC.length >> (Math.min(sellH.length, 3));
         modalM /= Math.max(3, (parseFloat(`${(modelC ? 1 : 5) + foreground2.length}`)));
         modelC = String.fromCharCode(122,0) == foreground2 || modalM < 96.23;
          let indicator9 = 2;
         sellH.push(indicator9);
         sigmob7.push(sellH.length);
       let arrowP = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,50,95,56,51,0);
      favicon9 *= parseFloat(`${anythinkv.length + parseInt(`${faviconB}`)}`);
      break;
   }
      confign -= parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${catagoryc}`))))}`);
   while (3.94 >= (catagoryc - 1.51)) {
       let scheduleN = 3;
          let splasho = String.fromCharCode(97,108,108,112,97,115,115,95,51,95,54,50,0);
          let tailO = String.fromCharCode(103,95,50,51,95,102,97,105,108,0);
          let yingK = String.fromCharCode(113,95,54,95,101,103,114,101,115,115,0);
         scheduleN *= yingK.length;
         splasho += `${splasho.length / 1}`;
         tailO += `${3 + tailO.length}`;
         yingK += "1";
       let link7 = String.fromCharCode(97,95,57,57,95,109,111,111,102,0);
       let checkboxB = String.fromCharCode(106,95,54,49,95,98,108,117,114,114,97,98,108,101,0);
         link7 += `${checkboxB.length - link7.length}`;
      tailw = "1";
      break;
   }
      halfY += `${(halfY == String.fromCharCode(103,0) ? crossV.length : halfY.length)}`;
   let basketballF = faviconB >= 6313577.0;
   do {
      faviconB *= parseFloat(`${whiteU.size & parseInt(`${favicon9}`)}`);
      if (basketballF) {
         break;
      }
   } while (basketballF && ((faviconB / (Math.max(parseFloat(`${halfY.length}`), 4))) < 4.64));
       let eighteenj = true;
       let default_4V = String.fromCharCode(109,105,108,108,101,114,95,108,95,53,49,0);
       let filedD = 2.0;
      for (let j = 0; j < 3; j++) {
         default_4V += `${default_4V.length}`;
      }
      let historyZ = String.fromCharCode(104,105,55,0) == default_4V;
      do {
         default_4V = "3";
         if (historyZ) {
            break;
         }
      } while (historyZ && (default_4V.endsWith(`${eighteenj}`)));
          let cast1 = 2.0;
          let orientation7 = 1;
         filedD += 3;
         cast1 += 3;
         orientation7 &= orientation7;
         default_4V = `${((eighteenj ? 3 : 2))}`;
      for (let n = 0; n < 1; n++) {
         default_4V += `${2 | parseInt(`${filedD}`)}`;
      }
         filedD *= 1;
         default_4V += `${2 & default_4V.length}`;
         default_4V += `${((eighteenj ? 3 : 4) & parseInt(`${filedD}`))}`;
          let statisticsb = String.fromCharCode(112,95,57,52,95,117,110,97,118,97,105,108,97,98,101,0);
         eighteenj = default_4V.startsWith(`${eighteenj}`);
         statisticsb += `${statisticsb.length | statisticsb.length}`;
      whiteU = new Map([[`${anythinkv.length}`, anythinkv.length - parseInt(`${filedD}`)]]);
      confign *= parseFloat(`${anythinkv.length}`);
   let projecte = 8516109.0 >= confign;
   do {
       let gestureR = String.fromCharCode(120,121,119,104,95,56,95,54,49,0);
      while (gestureR != gestureR) {
         gestureR = `${(gestureR == String.fromCharCode(117,0) ? gestureR.length : gestureR.length)}`;
         break;
      }
      let rewind6 = 6728047 >= gestureR.length;
      do {
          let vietnama = String.fromCharCode(105,100,99,116,99,111,108,95,116,95,56,49,0);
          let brightnessh = 0;
          let bridgeb = false;
          let sheetk: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,97,114,98,105,116,101,114,0),String.fromCharCode(105,95,57,55,95,99,104,114,111,109,97,0)], [String.fromCharCode(102,95,50,50,95,109,117,110,108,111,99,107,0),String.fromCharCode(120,105,110,103,95,51,95,50,50,0)]]);
          let small_: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,100,95,52,57,0),481], [String.fromCharCode(119,95,55,95,109,111,110,111,116,111,110,105,116,121,0),863], [String.fromCharCode(111,95,54,53,95,115,117,98,114,97,110,103,101,115,0),228]]);
         gestureR += `${(String.fromCharCode(72,0) == vietnama ? small_.size : vietnama.length)}`;
         brightnessh |= 2;
         bridgeb = !bridgeb && 45 < brightnessh;
         sheetk = new Map([[`${brightnessh}`, 1 % (Math.max(brightnessh, 1))]]);
         small_.set(`${bridgeb}`, 1 << (Math.min(3, Math.abs(sheetk.size))));
         if (rewind6) {
            break;
         }
      } while ((4 < gestureR.length) && rewind6);
         gestureR += `${gestureR.length}`;
      confign += parseFloat(`${parseInt(`${confign}`) - 2}`);
      if (projecte) {
         break;
      }
   } while (projecte && ((confign + 3.73) == 2.86 || 4 == (1 + parseInt(`${confign}`))));

        setShowBackModel(false);

   while (4.75 >= (faviconB * 3.43) && 4.3 >= (favicon9 * 3.43)) {
       let relatedF = String.fromCharCode(98,95,49,56,95,112,111,119,101,114,102,117,108,0);
       let zhengpianM = String.fromCharCode(105,95,50,49,95,115,117,98,115,116,97,116,101,0);
       let modityy = String.fromCharCode(102,117,110,103,105,98,108,101,95,53,95,52,50,0);
       let winds: Array<any> = [248, 314];
       let dycreatorL = 2.0;
      while (!relatedF.startsWith(`${dycreatorL}`)) {
         relatedF += `${relatedF.length}`;
         break;
      }
          let langkeyj = String.fromCharCode(99,121,117,118,95,54,95,57,57,0);
          let penaltyp = String.fromCharCode(118,95,49,51,95,106,107,101,110,99,0);
         dycreatorL /= Math.max((zhengpianM == String.fromCharCode(56,0) ? relatedF.length : zhengpianM.length), 2);
         langkeyj = "1";
         penaltyp += `${(String.fromCharCode(71,0) == penaltyp ? penaltyp.length : langkeyj.length)}`;
      if (zhengpianM.length < 4) {
          let membershipa = 4.0;
          let reminder_ = 1.0;
          let f_unlockE = String.fromCharCode(115,116,105,99,107,121,95,57,95,49,48,0);
         modityy += `${parseInt(`${dycreatorL}`)}`;
         membershipa *= parseInt(`${reminder_}`) * 3;
         reminder_ *= 3 << (Math.min(Math.abs(parseInt(`${reminder_}`)), 1));
         f_unlockE += `${(String.fromCharCode(88,0) == f_unlockE ? f_unlockE.length : parseInt(`${reminder_}`))}`;
      }
      let time_c3 = zhengpianM == String.fromCharCode(102,114,100,110,121,0);
      do {
          let dangerpC: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,105,110,116,99,104,101,99,107,0),835], [String.fromCharCode(104,105,103,104,112,97,115,115,95,107,95,55,49,0),21], [String.fromCharCode(118,95,50,55,95,99,101,105,108,0),181]]);
          let pathS: Array<any> = [127, 687];
          let other0: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,115,99,114,111,108,108,105,110,103,0),76], [String.fromCharCode(104,111,108,100,105,110,103,95,101,95,49,53,0),897], [String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,54,95,49,57,0),941]]);
         zhengpianM = `${dangerpC.size >> (Math.min(Math.abs(3), 1))}`;
         dangerpC = new Map([[`${other0.size}`, pathS.length]]);
         pathS = [3];
         other0.set(`${pathS.length}`, pathS.length);
         if (time_c3) {
            break;
         }
      } while (((1 >> (Math.min(2, winds.length))) <= 4) && time_c3);
          let with_vL = 0;
         modityy = `${modityy.length}`;
         with_vL >>= Math.min(Math.abs(with_vL), 1);
         relatedF += `${3 * zhengpianM.length}`;
      for (let s = 0; s < 1; s++) {
         winds.push(relatedF.length);
      }
      while (relatedF.includes(`${winds.length}`)) {
         winds.push(parseInt(`${dycreatorL}`) & 1);
         break;
      }
      for (let c = 0; c < 1; c++) {
         modityy += `${3 * relatedF.length}`;
      }
      let submitt = modityy == String.fromCharCode(117,102,107,116,112,115,106,0);
      do {
          let constantsj = String.fromCharCode(98,105,110,97,114,121,95,98,95,53,57,0);
          let custom8 = String.fromCharCode(106,95,57,50,95,103,97,115,0);
          let constantsh = String.fromCharCode(108,101,118,101,108,115,95,106,95,54,52,0);
         modityy = "3";
         constantsj += `${custom8.length ^ constantsh.length}`;
         custom8 += `${constantsj.length}`;
         constantsh += `${custom8.length / (Math.max(8, constantsj.length))}`;
         if (submitt) {
            break;
         }
      } while ((2 >= (winds.length >> (Math.min(modityy.length, 3))) && 2 >= (modityy.length >> (Math.min(5, winds.length)))) && submitt);
      while ((modityy.length ^ winds.length) < 1 && 1 < (modityy.length ^ winds.length)) {
          let floaterk = true;
          let androidk = String.fromCharCode(104,95,53,95,100,105,115,115,111,108,118,101,0);
          let update_crN = String.fromCharCode(99,95,53,55,95,109,97,107,101,116,97,114,98,97,108,108,0);
          let minimizeO: Array<any> = [462, 640, 156];
          let desc8: Map<any, any> = new Map([[String.fromCharCode(101,118,114,99,95,99,95,50,50,0),898], [String.fromCharCode(115,108,105,100,105,110,103,95,110,95,51,50,0),582], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,56,95,57,49,0),807]]);
         modityy = `${relatedF.length}`;
         floaterk = (minimizeO.length ^ desc8.size) > 65;
         androidk += `${2 & desc8.size}`;
         update_crN += `${(String.fromCharCode(120,0) == update_crN ? minimizeO.length : update_crN.length)}`;
         break;
      }
      favicon9 += parseFloat(`${relatedF.length >> (Math.min(4, Math.abs(parseInt(`${favicon9}`))))}`);
      break;
   }
   for (let f = 0; f < 1; f++) {
      catagoryc -= 2 / (Math.max(7, parseInt(`${faviconB}`)));
   }
      confign *= parseFloat(`${whiteU.size / 1}`);
   if (crossV.length < 3 && 3 < tailw.length) {
      tailw += `${parseInt(`${confign}`)}`;
   }
      pangled = (catagoryc + favicon9) <= 88.22;
       let gradlew0 = 0;
       let castj = String.fromCharCode(118,95,54,52,95,103,117,116,116,101,114,0);
       let resultw = String.fromCharCode(108,95,55,57,95,105,115,112,97,99,107,101,100,0);
      for (let c = 0; c < 1; c++) {
         castj += `${2 >> (Math.min(5, castj.length))}`;
      }
         gradlew0 %= Math.max(gradlew0 >> (Math.min(resultw.length, 4)), 3);
         gradlew0 |= castj.length;
          let teamB = String.fromCharCode(106,95,56,50,95,110,111,116,103,101,116,0);
          let bufferQ = String.fromCharCode(119,101,108,115,101,110,99,95,52,95,52,54,0);
         resultw = `${teamB.length / (Math.max(4, resultw.length))}`;
         teamB = `${bufferQ.length * bufferQ.length}`;
         resultw = `${gradlew0 % (Math.max(resultw.length, 10))}`;
      if ((gradlew0 % (Math.max(1, 10))) <= 1 || 4 <= (1 % (Math.max(9, castj.length)))) {
          let bottomK = String.fromCharCode(115,101,97,114,99,104,101,100,95,107,95,57,49,0);
         castj = `${castj.length - bottomK.length}`;
      }
      let eighteenX = 7426390 >= resultw.length;
      do {
         resultw = `${castj.length | resultw.length}`;
         if (eighteenX) {
            break;
         }
      } while ((castj.length == resultw.length) && eighteenX);
         resultw = `${gradlew0 % 1}`;
      if (resultw == castj) {
         castj += `${castj.length}`;
      }
      whiteU = new Map([[`${gradlew0}`, gradlew0]]);
   for (let p = 0; p < 2; p++) {
       let debugB = 1;
      while ((debugB & debugB) <= 2 || 1 <= (debugB & 2)) {
         debugB ^= 1 ^ debugB;
         break;
      }
      while (5 <= (debugB >> (Math.min(Math.abs(5), 1))) || (5 >> (Math.min(2, Math.abs(debugB)))) <= 1) {
          let settingsy = String.fromCharCode(100,101,99,105,109,97,108,115,95,122,95,50,54,0);
         debugB &= settingsy.length % 2;
         break;
      }
         debugB %= Math.max(debugB * debugB, 4);
      register_hbP = `${(crossV == String.fromCharCode(57,0) ? crossV.length : (pangled ? 2 : 3))}`;
   }
   let bannerj = register_hbP == String.fromCharCode(107,51,121,105,113,95,118,0);
   do {
      register_hbP += `${(parseInt(`${catagoryc}`) ^ (pangled ? 5 : 2))}`;
      if (bannerj) {
         break;
      }
   } while ((whiteU.size > register_hbP.length) && bannerj);
   let bottomt = 8652073 >= whiteU.size;
   do {
      whiteU.set(`${halfY}`, 1 & halfY.length);
      if (bottomt) {
         break;
      }
   } while (bottomt && (5.56 > catagoryc));
   while (crossV.length <= 1) {
      crossV += `${1 * crossV.length}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
       let saveW = String.fromCharCode(106,95,49,56,95,102,97,115,116,0);
       let gradle1 = 1.0;
       let nativeexk = false;
       let minivodd = 3.0;
       let pingX = String.fromCharCode(115,95,56,52,95,101,99,108,0);
      for (let p = 0; p < 1; p++) {
          let spinner5 = 3.0;
          let actionsa = 0.0;
          let livei = String.fromCharCode(112,111,115,116,102,105,120,95,114,95,53,53,0);
         saveW += `${parseInt(`${gradle1}`) - 1}`;
         spinner5 -= parseFloat(`${3 & livei.length}`);
         actionsa -= parseFloat(`${2}`);
         livei = "2";
      }
          let settingI = String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,107,95,49,48,0);
         minivodd /= Math.max(pingX.length, 1);
         settingI = `${settingI.length << (Math.min(settingI.length, 2))}`;
      for (let n = 0; n < 2; n++) {
         pingX = `${((nativeexk ? 4 : 1) & parseInt(`${gradle1}`))}`;
      }
      let bodanU = gradle1 >= 7551606.0;
      do {
         gradle1 += (parseFloat(`${(nativeexk ? 2 : 1) - parseInt(`${gradle1}`)}`));
         if (bodanU) {
            break;
         }
      } while (bodanU && (3.16 <= (gradle1 / 3.90)));
         minivodd *= saveW.length;
          let holderm: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,95,49,95,50,49,0),true ], [String.fromCharCode(119,95,57,95,97,98,111,117,116,115,0),true ]]);
          let crownf: Array<any> = [203, 87];
          let episodesl = String.fromCharCode(100,95,53,49,95,112,105,120,101,108,0);
         nativeexk = 41 == episodesl.length;
         holderm.set(`${crownf.length}`, crownf.length & holderm.size);
         episodesl = `${crownf.length}`;
      let topicr = minivodd <= 7495907.0;
      do {
         minivodd *= 1 >> (Math.min(3, saveW.length));
         if (topicr) {
            break;
         }
      } while (topicr && (saveW.includes(`${minivodd}`)));
         pingX = `${saveW.length | 1}`;
         gradle1 *= parseFloat(`${3}`);
          let taiwanr = 5.0;
          let catalog8 = true;
          let goalO = String.fromCharCode(115,95,50,54,95,108,111,110,103,109,117,108,97,119,0);
         saveW += `${parseInt(`${minivodd}`)}`;
         taiwanr += (goalO.length | (catalog8 ? 4 : 2));
         catalog8 = taiwanr >= 94.87 && catalog8;
         goalO += `${3 * parseInt(`${taiwanr}`)}`;
          let thailandC = false;
          let launcherH: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,110,95,119,95,53,57,0),1000], [String.fromCharCode(109,101,110,117,95,57,95,57,48,0),689], [String.fromCharCode(115,101,113,117,101,110,99,101,114,95,51,95,52,51,0),193]]);
         pingX += `${launcherH.size}`;
         thailandC = !thailandC;
         launcherH.set(`${thailandC}`, (1 / (Math.max(8, (thailandC ? 5 : 3)))));
      while (4 > (saveW.length % 4)) {
          let main_g9 = String.fromCharCode(104,102,108,105,112,95,112,95,57,51,0);
          let helperu = String.fromCharCode(105,95,53,51,95,97,114,101,97,0);
          let verticalu = 2.0;
          let aboutB = String.fromCharCode(97,95,54,56,95,111,118,97,108,0);
          let orangeP = 0.0;
         minivodd -= saveW.length;
         main_g9 += `${(String.fromCharCode(104,0) == aboutB ? aboutB.length : parseInt(`${verticalu}`))}`;
         helperu = "2";
         verticalu *= parseInt(`${verticalu}`) * helperu.length;
         orangeP -= aboutB.length - helperu.length;
         break;
      }
       let inactiveL = 2;
         gradle1 *= parseFloat(`${saveW.length | parseInt(`${gradle1}`)}`);
       let starc: Array<any> = [46, 871, 363];
      whiteU = new Map([[pingX, parseInt(`${confign}`) / (Math.max(6, pingX.length))]]);
   }
   if (!halfY.includes(`${sheet4.size}`)) {
      halfY += `${register_hbP.length}`;
   }
       let hooksi = 1;
          let gradleN = String.fromCharCode(97,114,103,95,121,95,56,51,0);
          let regengJ = 1;
         hooksi += gradleN.length;
         gradleN = "3";
         regengJ -= regengJ * 3;
      if (hooksi > 1) {
         hooksi ^= 1 + hooksi;
      }
       let policyi = String.fromCharCode(106,95,55,52,95,99,97,110,100,108,101,0);
      tailw += `${parseInt(`${favicon9}`) | parseInt(`${catagoryc}`)}`;
   for (let a = 0; a < 1; a++) {
       let blacklistu: Map<any, any> = new Map([[String.fromCharCode(102,116,118,100,111,99,95,104,95,53,53,0),false ], [String.fromCharCode(99,95,55,50,95,115,117,99,99,101,101,100,0),false ]]);
       let incidentz = 5.0;
          let pauseu = String.fromCharCode(105,95,49,55,95,116,105,109,101,111,117,116,101,100,0);
          let constantsy = false;
         blacklistu = new Map([[`${constantsy}`, parseInt(`${incidentz}`) + 1]]);
         pauseu += `${pauseu.length}`;
         constantsy = pauseu.length <= pauseu.length;
      let tickedG = 8689461.0 >= incidentz;
      do {
         incidentz += parseFloat(`${1}`);
         if (tickedG) {
            break;
         }
      } while ((Array.from(blacklistu.keys()).includes(`${incidentz}`)) && tickedG);
      faviconB -= parseFloat(`${parseInt(`${confign}`) >> (Math.min(5, Math.abs(1)))}`);
   }
   for (let t = 0; t < 2; t++) {
       let chinaA = String.fromCharCode(122,95,55,48,95,115,112,101,97,107,101,114,115,0);
       let playercommonb = 4.0;
       let stringW = 5.0;
       let station9 = 5.0;
       let taiwand = true;
      for (let c = 0; c < 3; c++) {
          let flyerk: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,97,114,95,52,95,57,53,0),937], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,118,95,48,0),878], [String.fromCharCode(109,95,51,48,95,97,115,100,107,0),478]]);
         station9 /= Math.max(1, parseFloat(`${chinaA.length * parseInt(`${station9}`)}`));
         flyerk = new Map([[`${flyerk.size}`, flyerk.size]]);
      }
      if (taiwand) {
         station9 /= Math.max(parseFloat(`${parseInt(`${playercommonb}`) & parseInt(`${station9}`)}`), 3);
      }
         playercommonb += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${playercommonb}`)), 4))}`);
         playercommonb *= parseFloat(`${parseInt(`${playercommonb}`) << (Math.min(1, Math.abs(3)))}`);
      for (let l = 0; l < 1; l++) {
         stringW -= (String.fromCharCode(84,0) == chinaA ? chinaA.length : parseInt(`${stringW}`));
      }
      while (!taiwand) {
          let subsO: Map<any, any> = new Map([[String.fromCharCode(107,95,55,50,95,98,121,116,101,115,0),388], [String.fromCharCode(120,95,52,55,95,101,110,117,109,101,114,97,116,101,100,0),852], [String.fromCharCode(110,111,110,110,101,103,95,105,95,55,55,0),753]]);
         chinaA = `${parseInt(`${playercommonb}`) / 3}`;
         subsO = new Map([[`${subsO.size}`, 1]]);
         break;
      }
      if (1.0 >= (playercommonb + stringW) || (playercommonb + stringW) >= 1.0) {
         playercommonb *= (parseFloat(`${parseInt(`${stringW}`) ^ (taiwand ? 3 : 2)}`));
      }
         chinaA = `${((taiwand ? 5 : 2) / (Math.max(parseInt(`${station9}`), 1)))}`;
      while (1.15 < (playercommonb + 2.96)) {
         playercommonb += (parseFloat(`${String.fromCharCode(122,0) == chinaA ? (taiwand ? 1 : 1) : chinaA.length}`));
         break;
      }
      let pingl = 8797821.0 <= playercommonb;
      do {
         playercommonb *= parseFloat(`${2 ^ parseInt(`${playercommonb}`)}`);
         if (pingl) {
            break;
         }
      } while (pingl && (1.60 <= (playercommonb * parseFloat(`${chinaA.length}`))));
      for (let e = 0; e < 1; e++) {
         station9 /= Math.max((parseFloat(`${(taiwand ? 3 : 3) + parseInt(`${playercommonb}`)}`)), 2);
      }
       let videojsW = 0.0;
       let thailandt = 2.0;
         taiwand = !taiwand;
      if (2 > (parseInt(`${stringW}`) - chinaA.length)) {
          let logoutM = String.fromCharCode(98,97,116,99,104,101,115,95,113,95,54,55,0);
         stringW -= parseInt(`${station9}`);
         logoutM += `${2 >> (Math.min(2, logoutM.length))}`;
      }
          let humidityL = String.fromCharCode(116,95,55,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
         thailandt -= humidityL.length ^ parseInt(`${thailandt}`);
      crossV = `${3 << (Math.min(Math.abs(parseInt(`${faviconB}`)), 1))}`;
   }
   while ((register_hbP.length >> (Math.min(Math.abs(5), 3))) >= 4 || (2.51 + catagoryc) >= 4.69) {
      catagoryc *= (crossV.length - (weibog ? 3 : 5));
      break;
   }
      favicon9 += (parseFloat(`${parseInt(`${faviconB}`) + (pangled ? 1 : 1)}`));
   while (t_titlet) {
      t_titlet = 20.21 > favicon9 || tailw == String.fromCharCode(95,0);
      break;
   }
      confign += parseFloat(`${parseInt(`${catagoryc}`)}`);
        ttTarget.back();
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