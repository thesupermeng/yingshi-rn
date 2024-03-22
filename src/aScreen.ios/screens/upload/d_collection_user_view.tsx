import { RootStackScreenProps } from "@type/vrm_thailand";
import ScreenContainer from "../../components/container/ypy_fast";
import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { IRouterComponent } from "../../../routes/dqb_wind_league";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/hdf_side";
import { UploadProgressOverlay } from "../../components/modal/odj_sports";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/n_subs_interstitial";
import { useAppDispatch } from "@hooks/kg_index";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/nw_topic";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/gwi_with';
import DefaultVideoThumbnail from '@static/images/smallPoint.svg';
import { saveUploadHistory } from "@redux/actions/ss_updates_detail";

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
       let darkC: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,97,115,99,105,105,105,110,100,101,120,0),String.fromCharCode(98,97,100,103,101,95,115,95,57,53,0)], [String.fromCharCode(115,99,114,111,108,108,101,100,95,97,95,57,50,0),String.fromCharCode(100,101,108,116,97,95,110,95,54,53,0)], [String.fromCharCode(102,95,56,51,95,114,105,100,0),String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,107,95,49,48,0)]]);
    let navigationc = String.fromCharCode(122,95,49,53,95,99,102,104,100,0);
    let megaphonen = 5;
    let fastforwardw = 5;
    let promotionJ = true;
    let teamZ = String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,117,95,53,57,0);
    let saveb = 0.0;
    let tickX = String.fromCharCode(99,117,98,101,100,95,102,95,49,52,0);
    let commonc = String.fromCharCode(119,95,49,56,95,101,100,105,116,97,98,108,101,0);
       let privilegey = String.fromCharCode(116,95,51,53,95,99,111,108,111,110,0);
       let rewindk = 4.0;
       let pointt = 2.0;
       let mathl = String.fromCharCode(115,95,53,95,105,99,111,110,105,99,0);
          let friendsw = String.fromCharCode(118,95,51,49,0);
          let collectionS = String.fromCharCode(111,102,102,115,101,116,115,95,106,95,57,56,0);
          let inviteA = String.fromCharCode(117,95,56,48,95,102,108,97,115,104,105,110,103,0);
         privilegey = "1";
         friendsw += `${inviteA.length}`;
         collectionS = `${collectionS.length ^ 2}`;
         inviteA += `${collectionS.length << (Math.min(Math.abs(1), 3))}`;
      if (5 >= (privilegey.length + parseInt(`${pointt}`))) {
         privilegey = "1";
      }
         mathl = `${mathl.length}`;
          let appsk: Map<any, any> = new Map([[String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,55,95,52,52,0),776], [String.fromCharCode(110,101,119,108,121,95,107,95,52,52,0),964], [String.fromCharCode(98,97,110,110,101,100,95,97,95,50,56,0),107]]);
          let hooksm: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,95,53,95,51,57,0),839], [String.fromCharCode(97,95,52,53,95,100,105,115,112,0),65], [String.fromCharCode(105,95,53,56,0),465]]);
         mathl = `${(String.fromCharCode(88,0) == privilegey ? hooksm.size : privilegey.length)}`;
         appsk.set(`${appsk.size}`, 3 ^ appsk.size);
         hooksm = new Map([[`${appsk.size}`, appsk.size]]);
      if (2.89 == rewindk) {
         rewindk += (String.fromCharCode(73,0) == privilegey ? privilegey.length : parseInt(`${rewindk}`));
      }
       let playlist7 = String.fromCharCode(120,95,53,57,95,106,114,110,108,0);
         playlist7 += `${mathl.length}`;
         pointt *= parseFloat(`${2 % (Math.max(9, parseInt(`${rewindk}`)))}`);
      darkC = new Map([[navigationc, megaphonen ^ 1]]);
   while ((megaphonen / (Math.max(saveb, 7))) > 4.10 || (megaphonen - 3) > 1) {
      saveb += darkC.size;
      break;
   }
   if (3 == (fastforwardw % 5)) {
      fastforwardw <<= Math.min(1, Math.abs(2 ^ parseInt(`${saveb}`)));
   }

        try {

      darkC.set(`${megaphonen}`, darkC.size % (Math.max(1, 3)));
   if ((darkC.size >> (Math.min(Math.abs(3), 3))) < 4) {
       let light5 = 4.0;
       let popupl: Array<any> = [754, 411];
       let helperK = 4.0;
       let long_inC: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,106,112,101,103,99,111,109,112,0),753], [String.fromCharCode(118,95,57,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0),216]]);
       let questg = String.fromCharCode(115,117,110,118,101,114,95,53,95,55,57,0);
      let page5 = 5173148.0 <= helperK;
      do {
         helperK *= (parseFloat(`${String.fromCharCode(72,0) == questg ? questg.length : parseInt(`${helperK}`)}`));
         if (page5) {
            break;
         }
      } while (page5 && (!Array.from(long_inC.keys()).includes(`${helperK}`)));
         questg += "3";
      if ((parseInt(`${helperK}`) + popupl.length) >= 2 && (popupl.length << (Math.min(Math.abs(2), 3))) >= 1) {
          let const_hL = 3.0;
          let alert_ = 0.0;
          let hooke = String.fromCharCode(115,105,122,101,115,95,112,95,56,49,0);
          let basketballR = 5;
          let firebaseO = String.fromCharCode(118,95,53,51,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0);
         helperK += parseFloat(`${parseInt(`${light5}`)}`);
         const_hL /= Math.max(parseFloat(`${hooke.length / 2}`), 5);
         alert_ -= firebaseO.length;
         hooke = `${parseInt(`${const_hL}`) / (Math.max(9, parseInt(`${alert_}`)))}`;
         basketballR <<= Math.min(1, Math.abs((String.fromCharCode(98,0) == firebaseO ? basketballR : firebaseO.length)));
      }
         long_inC = new Map([[`${long_inC.size}`, questg.length]]);
       let topicI: Map<any, any> = new Map([[String.fromCharCode(108,105,98,99,95,97,95,51,52,0),965], [String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,119,95,49,50,0),338], [String.fromCharCode(101,95,57,50,95,97,108,105,103,110,105,110,103,0),30]]);
      let formR = 8733199.0 >= helperK;
      do {
         helperK -= parseFloat(`${popupl.length * long_inC.size}`);
         if (formR) {
            break;
         }
      } while ((parseInt(`${helperK}`) > topicI.size) && formR);
          let alertX: Array<any> = [String.fromCharCode(99,95,56,95,112,97,114,105,116,121,0), String.fromCharCode(117,95,49,52,95,99,114,101,97,116,105,118,101,0)];
          let diceR: Array<any> = [71, 861, 56];
          let modityL = 5.0;
         popupl.push(3);
         alertX = [alertX.length];
         diceR.push(1);
         modityL -= diceR.length;
         questg = `${3 + parseInt(`${light5}`)}`;
      while (questg.length == topicI.size) {
         topicI = new Map([[`${popupl.length}`, parseInt(`${light5}`) / 2]]);
         break;
      }
      if (questg.length == long_inC.size) {
         long_inC = new Map([[`${long_inC.size}`, long_inC.size >> (Math.min(5, Math.abs(parseInt(`${helperK}`))))]]);
      }
      for (let p = 0; p < 3; p++) {
         long_inC = new Map([[`${long_inC.size}`, long_inC.size | 3]]);
      }
         popupl = [2];
          let default_9wE = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,117,95,51,52,0);
          let sina0: Array<any> = [836, 618];
          let anythinkm = String.fromCharCode(101,95,50,50,95,108,111,99,107,101,100,0);
         light5 /= Math.max(2, 1);
         default_9wE += "3";
         sina0 = [anythinkm.length];
         anythinkm += `${anythinkm.length}`;
      if ((parseInt(`${light5}`) * questg.length) <= 5) {
          let faviconN: Array<any> = [173, 220];
         light5 *= popupl.length;
         faviconN = [faviconN.length];
      }
         helperK *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${helperK}`)), 4))}`);
      darkC = new Map([[`${long_inC.size}`, parseInt(`${light5}`)]]);
   }
      teamZ = `${(String.fromCharCode(67,0) == tickX ? megaphonen : tickX.length)}`;
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, 
            })

   let lightq = 5499431 <= fastforwardw;
   do {
       let transferJ = 2.0;
       let xvodb: Map<any, any> = new Map([[String.fromCharCode(117,110,97,114,99,104,105,118,101,95,110,95,55,55,0),String.fromCharCode(108,95,54,49,95,106,99,111,110,102,105,103,0)], [String.fromCharCode(108,97,117,110,99,104,95,105,95,56,51,0),String.fromCharCode(119,105,114,101,102,114,97,109,101,95,99,95,53,56,0)]]);
       let zhengpianF = 3.0;
       let p_centerE = true;
         p_centerE = 52.68 == transferJ;
         transferJ *= parseFloat(`${1 >> (Math.min(4, Math.abs(xvodb.size)))}`);
      let rewind1 = p_centerE ? !p_centerE : p_centerE;
      do {
          let short_hl = String.fromCharCode(110,95,57,48,95,114,111,117,110,100,101,100,0);
          let homeK = String.fromCharCode(118,95,49,53,95,101,118,112,111,114,116,111,112,0);
         p_centerE = String.fromCharCode(56,0) == homeK;
         short_hl = `${short_hl.length / (Math.max(1, short_hl.length))}`;
         homeK = `${short_hl.length ^ short_hl.length}`;
         if (rewind1) {
            break;
         }
      } while ((zhengpianF <= 5.23) && rewind1);
         xvodb = new Map([[`${p_centerE}`, (parseInt(`${zhengpianF}`) >> (Math.min(4, Math.abs((p_centerE ? 5 : 5)))))]]);
         xvodb = new Map([[`${transferJ}`, parseInt(`${zhengpianF}`) + parseInt(`${transferJ}`)]]);
         zhengpianF += ((p_centerE ? 1 : 1) - parseInt(`${zhengpianF}`));
       let favoriteN = String.fromCharCode(114,95,52,54,95,113,117,105,99,0);
      let hongkongf = transferJ <= 7014890.0;
      do {
         transferJ += parseFloat(`${xvodb.size / 1}`);
         if (hongkongf) {
            break;
         }
      } while (hongkongf && (!Array.from(xvodb.values()).includes(transferJ)));
         p_centerE = transferJ >= 1.99;
      let bottoma = String.fromCharCode(109,102,100,56,102,56,57,0) == favoriteN;
      do {
          let minivod6 = 0.0;
          let policym = 2.0;
          let backgroundm = String.fromCharCode(97,115,99,105,105,95,109,95,55,51,0);
          let sina6 = false;
          let datau = false;
         favoriteN = `${xvodb.size}`;
         minivod6 -= (parseFloat(`${(sina6 ? 5 : 5) << (Math.min(Math.abs((datau ? 4 : 5)), 2))}`));
         policym *= (parseFloat(`${parseInt(`${minivod6}`) << (Math.min(2, Math.abs((datau ? 3 : 1))))}`));
         backgroundm += `${1 - backgroundm.length}`;
         sina6 = 17.36 == policym || datau;
         if (bottoma) {
            break;
         }
      } while ((!p_centerE) && bottoma);
       let bingd = String.fromCharCode(99,95,49,55,95,109,115,103,115,0);
       let confirmation2 = String.fromCharCode(100,114,98,103,95,113,95,53,52,0);
      while (!p_centerE) {
         p_centerE = zhengpianF <= 22.46;
         break;
      }
      fastforwardw %= Math.max(megaphonen / (Math.max(xvodb.size, 4)), 4);
      if (lightq) {
         break;
      }
   } while (((fastforwardw % 3) >= 3) && lightq);
   while (tickX == navigationc) {
      navigationc += `${tickX.length}`;
      break;
   }
       let shootI = false;
       let gemfilet = String.fromCharCode(115,105,108,101,110,116,108,121,95,48,95,57,51,0);
         shootI = gemfilet.length > 33;
      if (2 < gemfilet.length) {
         gemfilet += `${((shootI ? 2 : 3))}`;
      }
         shootI = gemfilet.length >= 18 && shootI;
      if (shootI || gemfilet.length > 2) {
         shootI = gemfilet.length < 31 || shootI;
      }
         gemfilet += `${gemfilet.length}`;
       let renewu = true;
      tickX = `${((promotionJ ? 5 : 1) / (Math.max((shootI ? 3 : 1), 9)))}`;

            if (response) {

      megaphonen <<= Math.min(Math.abs(darkC.size >> (Math.min(teamZ.length, 2))), 5);
      darkC = new Map([[`${fastforwardw}`, fastforwardw]]);
      tickX = `${teamZ.length / (Math.max(3, 10))}`;
                setVideoThumbnail(response.path);
            } else {

       let layoute = 5.0;
       let downloadingG = String.fromCharCode(105,116,101,114,97,116,111,114,95,52,95,50,53,0);
       let areac = 3;
       let combine0 = 4.0;
      if (areac < layoute) {
         layoute /= Math.max((downloadingG == String.fromCharCode(67,0) ? areac : downloadingG.length), 3);
      }
          let expandM = 4.0;
          let iconW = String.fromCharCode(119,95,50,95,114,101,100,97,0);
         layoute -= parseInt(`${combine0}`) / (Math.max(1, 9));
         expandM *= parseFloat(`${parseInt(`${expandM}`)}`);
         iconW = `${3 ^ iconW.length}`;
         layoute += 1;
       let viewerd = String.fromCharCode(98,95,57,50,95,111,109,112,108,105,99,97,116,105,111,110,0);
       let memberc = String.fromCharCode(114,101,117,112,108,111,97,100,95,49,95,49,52,0);
      let vignetteO = combine0 >= 8226314.0;
      do {
         combine0 += parseInt(`${layoute}`);
         if (vignetteO) {
            break;
         }
      } while ((1 < (viewerd.length * parseInt(`${combine0}`))) && vignetteO);
         combine0 += 3 % (Math.max(10, viewerd.length));
      let google4 = layoute <= 6932531.0;
      do {
         layoute += areac & downloadingG.length;
         if (google4) {
            break;
         }
      } while (google4 && ((2 + downloadingG.length) < 3 || 4 < (parseInt(`${layoute}`) + 2)));
          let long_lxb = true;
         combine0 *= 2;
         long_lxb = !long_lxb && long_lxb;
      megaphonen &= 3;
      fastforwardw &= navigationc.length >> (Math.min(5, Math.abs(megaphonen)));
      teamZ = `${navigationc.length}`;
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
       let reminderO: Array<any> = [46, 763, 851];
    let gestureb = String.fromCharCode(101,95,54,52,95,108,115,102,108,115,112,0);
    let yellowV = 2;
    let cornerf: Map<any, any> = new Map([[String.fromCharCode(117,95,52,56,95,105,110,118,101,114,118,97,108,0),499], [String.fromCharCode(116,111,107,101,110,105,122,101,114,95,121,95,54,52,0),992]]);
    let bootsplashP = String.fromCharCode(117,95,54,52,95,99,111,110,99,101,97,108,101,100,0);
    let closeb = String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,116,95,55,0);
    let sende: Map<any, any> = new Map([[String.fromCharCode(115,109,97,114,116,95,102,95,49,56,0),470], [String.fromCharCode(100,115,116,114,95,51,95,55,51,0),571]]);
    let middleware2 = 2.0;
    let temperaturek: Array<any> = [String.fromCharCode(108,97,118,102,117,116,105,108,115,95,112,95,49,57,0), String.fromCharCode(105,95,50,54,95,114,101,118,105,101,119,0)];
    let nalyticss = String.fromCharCode(111,110,101,115,95,117,95,51,55,0);
    let const_7uW = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,122,95,49,48,48,0);
    let listS = 0.0;
    let description_1F = String.fromCharCode(104,95,56,52,95,109,101,115,115,97,103,101,0);
    let usernameK: Map<any, any> = new Map([[String.fromCharCode(103,95,56,56,95,101,110,99,105,114,99,108,101,100,0),String.fromCharCode(115,108,111,119,101,115,116,95,103,95,55,0)], [String.fromCharCode(112,95,52,51,95,111,112,116,97,98,108,101,0),String.fromCharCode(113,95,51,49,95,112,105,110,110,101,100,0)]]);
    let sportsx = 1;
   let filedz = yellowV <= 6573143;
   do {
       let injurys = String.fromCharCode(114,95,52,48,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
       let plusg = 4.0;
       let gpayb = 3.0;
       let about6 = 5.0;
       let matchesO: Array<any> = [983, 83, 499];
      let settinga = gpayb <= 5161261.0;
      do {
          let playlistD = String.fromCharCode(99,95,49,49,95,102,111,110,116,99,111,110,102,105,103,0);
         gpayb /= Math.max(1, (playlistD == String.fromCharCode(121,0) ? playlistD.length : injurys.length));
         if (settinga) {
            break;
         }
      } while (((about6 / (Math.max(2.79, 2))) == 4.80 || 2.50 == (2.79 / (Math.max(3, about6)))) && settinga);
      for (let s = 0; s < 1; s++) {
         gpayb += injurys.length;
      }
      let long_6e = plusg >= 7323851.0;
      do {
         plusg *= 2;
         if (long_6e) {
            break;
         }
      } while (long_6e && ((matchesO.length / (Math.max(8, plusg))) == 5.55 && 5 == (parseInt(`${plusg}`) / (Math.max(matchesO.length, 10)))));
      let langkeyZ = 9492269.0 >= about6;
      do {
         about6 *= parseFloat(`${1}`);
         if (langkeyZ) {
            break;
         }
      } while (((gpayb - 2) == 4.49) && langkeyZ);
          let edits: Map<any, any> = new Map([[String.fromCharCode(110,95,52,53,95,115,108,105,100,0),322], [String.fromCharCode(98,121,116,101,99,111,100,101,95,104,95,50,50,0),586]]);
          let adultt: Map<any, any> = new Map([[String.fromCharCode(122,95,52,53,95,103,111,98,98,108,101,0),String.fromCharCode(106,105,116,116,101,114,95,55,95,57,54,0)], [String.fromCharCode(100,115,116,114,95,100,95,51,54,0),String.fromCharCode(103,101,116,112,95,109,95,52,50,0)]]);
          let pingQ = String.fromCharCode(102,95,51,54,95,99,111,108,111,110,0);
         matchesO = [injurys.length];
         edits = new Map([[`${adultt.size}`, 2 - pingQ.length]]);
         adultt = new Map([[`${edits.size}`, pingQ.length]]);
      while ((plusg - about6) <= 4.23 || 4.23 <= (about6 - plusg)) {
          let mailU = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,104,95,57,53,0);
          let phoneP = 4.0;
         plusg -= (mailU == String.fromCharCode(73,0) ? parseInt(`${gpayb}`) : mailU.length);
         phoneP /= Math.max(1 * parseInt(`${phoneP}`), 4);
         break;
      }
      for (let b = 0; b < 3; b++) {
         plusg *= injurys.length;
      }
      if ((4.67 / (Math.max(6, gpayb))) == 2.93) {
         matchesO.push(2);
      }
         gpayb += 1 >> (Math.min(Math.abs(parseInt(`${gpayb}`)), 3));
         plusg *= injurys.length >> (Math.min(2, Math.abs(parseInt(`${about6}`))));
      if (parseInt(`${plusg}`) >= injurys.length) {
         plusg += parseInt(`${about6}`) << (Math.min(4, Math.abs(parseInt(`${gpayb}`))));
      }
      for (let l = 0; l < 1; l++) {
         matchesO = [3 - parseInt(`${about6}`)];
      }
      if (injurys.length >= 4) {
         injurys += `${1 / (Math.max(7, matchesO.length))}`;
      }
      let movies2 = plusg >= 5008366.0;
      do {
         plusg += parseInt(`${gpayb}`) - 1;
         if (movies2) {
            break;
         }
      } while ((plusg <= gpayb) && movies2);
      if (2.22 > (about6 * 5.87) || 3 > (matchesO.length * parseInt(`${about6}`))) {
         about6 -= parseFloat(`${parseInt(`${about6}`)}`);
      }
      yellowV /= Math.max(5, 1 ^ gestureb.length);
      if (filedz) {
         break;
      }
   } while (((yellowV + reminderO.length) < 2) && filedz);
      const_7uW += `${reminderO.length}`;

        if (videoTitle === undefined || videoTitle === '') {

   if (const_7uW.endsWith(`${sende.size}`)) {
      sende.set(const_7uW, 1 << (Math.min(3, bootsplashP.length)));
   }
       let long_n3i = String.fromCharCode(100,111,109,97,105,110,115,95,56,95,51,48,0);
       let fillA = String.fromCharCode(108,95,51,95,100,99,97,101,110,99,0);
       let interneto = 0;
       let vignette0 = String.fromCharCode(108,95,55,51,95,98,114,97,110,99,104,0);
      while (1 > (interneto - vignette0.length)) {
         interneto >>= Math.min(2, Math.abs(vignette0.length | 1));
         break;
      }
      if ((3 - interneto) >= 5 && (3 - interneto) >= 1) {
         interneto <<= Math.min(3, Math.abs(1));
      }
          let eact0 = 5.0;
          let temperatureX = false;
          let megaphonef = String.fromCharCode(117,110,105,102,105,101,100,95,57,95,57,49,0);
         vignette0 = `${parseInt(`${eact0}`)}`;
         eact0 += (parseFloat(`${megaphonef == String.fromCharCode(48,0) ? megaphonef.length : (temperatureX ? 3 : 4)}`));
         temperatureX = (15 < ((temperatureX ? megaphonef.length : 15) + megaphonef.length));
          let usernameP = true;
          let shootw = 3.0;
          let roomC = 3;
         vignette0 = "1";
         usernameP = roomC > 66;
         shootw *= parseFloat(`${parseInt(`${shootw}`) << (Math.min(3, Math.abs(1)))}`);
         roomC &= roomC ^ 3;
         vignette0 = `${fillA.length << (Math.min(3, long_n3i.length))}`;
      if (vignette0.length >= 2) {
         long_n3i += `${1 + interneto}`;
      }
       let profileG = String.fromCharCode(114,95,52,56,95,97,102,102,105,110,105,116,105,101,115,0);
         fillA = `${interneto + 2}`;
      yellowV |= bootsplashP.length << (Math.min(Math.abs(2), 4));
            setVideoTitleErrMsg('请填写标题');

       let indexQ = String.fromCharCode(117,95,55,56,95,115,117,110,118,101,114,0);
       let a_lockb = 2;
       let privilege2 = false;
          let megaphoneK = 2.0;
         a_lockb &= 2 + parseInt(`${megaphoneK}`);
      for (let q = 0; q < 2; q++) {
         a_lockb >>= Math.min(3, Math.abs((a_lockb * (privilege2 ? 2 : 2))));
      }
       let turn9 = String.fromCharCode(116,95,50,57,95,115,97,109,112,108,101,115,0);
      while (a_lockb == indexQ.length) {
          let action_: Map<any, any> = new Map([[String.fromCharCode(118,95,49,55,95,98,97,99,107,114,111,117,110,100,0),895], [String.fromCharCode(122,95,52,48,95,100,105,109,109,101,100,0),754], [String.fromCharCode(97,100,106,97,99,101,110,116,95,114,95,51,56,0),462]]);
          let topicC = 0.0;
         indexQ += `${indexQ.length}`;
         action_.set(`${topicC}`, 3);
         topicC -= parseInt(`${topicC}`) % (Math.max(action_.size, 8));
         break;
      }
         privilege2 = 15 == a_lockb && !privilege2;
      if (a_lockb >= turn9.length) {
         turn9 += `${turn9.length}`;
      }
      while (4 <= indexQ.length) {
          let favoritea = String.fromCharCode(110,111,110,109,117,108,116,95,122,95,49,48,0);
         a_lockb ^= a_lockb + 1;
         favoritea = `${1 + favoritea.length}`;
         break;
      }
      while (a_lockb > indexQ.length) {
         a_lockb %= Math.max(4, (a_lockb >> (Math.min(3, Math.abs((privilege2 ? 3 : 5))))));
         break;
      }
      while (indexQ.length >= 1 && privilege2) {
          let reducera = 0;
          let other6: Array<any> = [855, 989, 100];
          let plashj = String.fromCharCode(117,112,97,116,101,100,95,55,95,52,53,0);
         privilege2 = a_lockb == plashj.length;
         reducera /= Math.max(5, other6.length & 2);
         other6 = [2 + reducera];
         plashj = `${3 >> (Math.min(Math.abs(reducera), 4))}`;
         break;
      }
      middleware2 -= 2 * yellowV;
   while (3.61 >= (listS + cornerf.size) || (cornerf.size + parseInt(`${listS}`)) >= 4) {
      cornerf = new Map([[`${sende.size}`, sende.size]]);
      break;
   }
            return;
        } else {

   while (4.46 > (listS * 3.67) || (listS * temperaturek.length) > 3.67) {
       let firebaseH = String.fromCharCode(106,95,55,51,95,117,112,99,111,109,105,110,103,0);
       let backwardx = 2.0;
       let typingU: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,98,108,101,95,53,95,52,0),742], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,56,95,56,55,0),780]]);
       let taiwan4: Array<any> = [688, 827, 270];
      let other2 = backwardx >= 8195821.0;
      do {
          let targetw: Array<any> = [777, 812];
         backwardx *= taiwan4.length;
         targetw = [targetw.length];
         if (other2) {
            break;
         }
      } while (other2 && (taiwan4.includes(backwardx)));
      let philippinesH = typingU.size >= 7001599;
      do {
         typingU = new Map([[`${taiwan4.length}`, 3 - taiwan4.length]]);
         if (philippinesH) {
            break;
         }
      } while (philippinesH && (5 >= firebaseH.length));
       let p_image1 = 0.0;
       let floaterJ = false;
         taiwan4.push(parseInt(`${backwardx}`));
         floaterJ = typingU.size <= 65;
         backwardx -= parseInt(`${p_image1}`);
       let stationB = String.fromCharCode(119,95,51,53,95,102,111,114,109,97,116,116,101,114,0);
      let injury4 = 5788979 >= stationB.length;
      do {
          let flyerl = 5.0;
          let shirtk = 4.0;
          let pointF = false;
          let link5 = String.fromCharCode(102,97,115,116,115,115,105,109,95,108,95,53,49,0);
         stationB += `${(String.fromCharCode(118,0) == stationB ? stationB.length : parseInt(`${shirtk}`))}`;
         flyerl /= Math.max(4, parseInt(`${flyerl}`) * 3);
         shirtk -= parseInt(`${flyerl}`) / 1;
         pointF = link5.length >= 37;
         link5 += `${(parseInt(`${flyerl}`) ^ (pointF ? 2 : 1))}`;
         if (injury4) {
            break;
         }
      } while ((!floaterJ) && injury4);
      while (2 <= stationB.length) {
         floaterJ = typingU.size < 74;
         break;
      }
          let updatesE: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,98,105,115,101,99,116,0),String.fromCharCode(119,95,53,95,115,112,108,97,110,101,0)], [String.fromCharCode(104,95,55,56,95,115,99,99,111,110,102,105,103,0),String.fromCharCode(97,95,55,57,95,109,115,114,108,101,0)], [String.fromCharCode(101,95,49,55,95,101,120,112,108,97,105,110,0),String.fromCharCode(99,95,49,48,95,115,116,114,101,101,116,0)]]);
         floaterJ = stationB.length <= taiwan4.length;
         updatesE.set(`${updatesE.size}`, updatesE.size >> (Math.min(1, Math.abs(updatesE.size))));
      if (!firebaseH.startsWith(`${typingU.size}`)) {
         typingU = new Map([[`${typingU.size}`, typingU.size | 2]]);
      }
      temperaturek = [(String.fromCharCode(67,0) == const_7uW ? cornerf.size : const_7uW.length)];
      break;
   }
      yellowV *= 1 % (Math.max(4, const_7uW.length));
            setVideoTitleErrMsg(undefined);
        }

        try {

   let rewindw = 8617260 <= nalyticss.length;
   do {
       let minivods = 1.0;
       let mathJ: Array<any> = [String.fromCharCode(103,95,56,55,95,97,100,106,97,99,101,110,116,0), String.fromCharCode(115,116,114,115,116,97,114,116,95,115,95,57,48,0)];
       let castingD = 4.0;
       let pingu = 5;
      for (let v = 0; v < 1; v++) {
         castingD += mathJ.length;
      }
      if (3.39 > (5.72 / (Math.max(3, castingD))) && (parseInt(`${castingD}`) / (Math.max(mathJ.length, 2))) > 4) {
          let connection0 = true;
          let streamingI = String.fromCharCode(101,122,105,101,114,95,52,95,56,51,0);
          let plusk = String.fromCharCode(115,95,50,50,95,99,117,116,101,115,116,0);
          let gestures = String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,112,95,54,55,0);
         mathJ.push(plusk.length ^ streamingI.length);
         connection0 = gestures.length == 56;
         streamingI += `${((connection0 ? 2 : 3) << (Math.min(gestures.length, 1)))}`;
         plusk = `${(gestures == String.fromCharCode(116,0) ? gestures.length : (connection0 ? 3 : 5))}`;
      }
          let questO = String.fromCharCode(112,101,114,112,105,120,101,108,95,98,95,54,51,0);
          let uploado = false;
          let container5: Array<any> = [70, 669, 297];
         castingD *= mathJ.length;
         questO = `${((uploado ? 1 : 5) * 2)}`;
         uploado = container5.length > 61 || 61 > questO.length;
         container5 = [container5.length];
      for (let p = 0; p < 3; p++) {
         mathJ.push(parseInt(`${castingD}`));
      }
      for (let i = 0; i < 1; i++) {
         minivods /= Math.max(parseFloat(`${parseInt(`${castingD}`) >> (Math.min(mathJ.length, 1))}`), 1);
      }
      let single0 = mathJ.length >= 6148127;
      do {
          let score8 = String.fromCharCode(100,101,108,116,97,113,95,113,95,56,50,0);
         mathJ = [score8.length];
         if (single0) {
            break;
         }
      } while ((parseFloat(`${mathJ.length}`) < minivods) && single0);
         minivods -= parseFloat(`${1}`);
         castingD += 3 / (Math.max(pingu, 1));
         pingu /= Math.max(5, parseInt(`${castingD}`) & mathJ.length);
          let linee = 1.0;
          let sell_ = String.fromCharCode(101,95,50,56,95,112,105,120,101,108,115,0);
         pingu *= parseInt(`${minivods}`);
         linee *= parseFloat(`${sell_.length}`);
         sell_ = `${(String.fromCharCode(57,0) == sell_ ? parseInt(`${linee}`) : sell_.length)}`;
      for (let s = 0; s < 3; s++) {
         mathJ = [parseInt(`${minivods}`)];
      }
         castingD *= pingu;
      nalyticss = `${const_7uW.length - 2}`;
      if (rewindw) {
         break;
      }
   } while ((1 <= nalyticss.length) && rewindw);
       let downloading3 = 4.0;
      for (let x = 0; x < 1; x++) {
         downloading3 -= 1 | parseInt(`${downloading3}`);
      }
      for (let x = 0; x < 2; x++) {
         downloading3 -= parseInt(`${downloading3}`) * 1;
      }
      while (downloading3 <= 3.34) {
         downloading3 += parseInt(`${downloading3}`);
         break;
      }
      middleware2 += 3;
            

      yellowV >>= Math.min(Math.abs(parseInt(`${listS}`)), 3);
   let controlZ = 6991333 >= gestureb.length;
   do {
      gestureb = `${parseInt(`${middleware2}`)}`;
      if (controlZ) {
         break;
      }
   } while (controlZ && (gestureb.endsWith(`${reminderO.length}`)));

            

   if ((reminderO.length - 3) > 3 || 5 > (reminderO.length - 3)) {
       let splashm: Map<any, any> = new Map([[String.fromCharCode(103,95,49,95,98,117,99,107,101,116,0),551], [String.fromCharCode(114,95,52,48,95,115,99,114,111,108,108,97,98,108,101,0),923]]);
       let entryV: Array<any> = [474, 334, 87];
       let philippinest = String.fromCharCode(101,110,99,111,100,101,109,98,95,52,95,57,52,0);
       let bootsplashu = String.fromCharCode(100,95,57,50,95,97,112,112,114,111,118,97,108,0);
         philippinest = "2";
      let sentryi = bootsplashu.length >= 9117895;
      do {
         bootsplashu = `${2 * splashm.size}`;
         if (sentryi) {
            break;
         }
      } while ((5 >= (entryV.length % 1) && 1 >= (1 % (Math.max(3, entryV.length)))) && sentryi);
      let backwardf = 6524306 >= bootsplashu.length;
      do {
         bootsplashu = `${splashm.size >> (Math.min(Math.abs(2), 2))}`;
         if (backwardf) {
            break;
         }
      } while ((1 > (bootsplashu.length >> (Math.min(2, entryV.length))) && 2 > (1 >> (Math.min(3, bootsplashu.length)))) && backwardf);
      while (3 <= (1 / (Math.max(2, splashm.size))) || 4 <= (philippinest.length / 1)) {
          let episodesn: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,95,100,95,56,54,0),452], [String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,55,95,50,50,0),534], [String.fromCharCode(99,108,111,115,101,100,95,57,95,54,55,0),58]]);
          let shootL = String.fromCharCode(101,95,56,57,95,101,115,100,115,0);
         philippinest += `${splashm.size * bootsplashu.length}`;
         episodesn.set(shootL, (shootL == String.fromCharCode(56,0) ? episodesn.size : shootL.length));
         break;
      }
         entryV.push(philippinest.length - 3);
      if ((1 - bootsplashu.length) == 4) {
         splashm.set(philippinest, 1 - entryV.length);
      }
      for (let s = 0; s < 1; s++) {
          let flyerC = false;
          let philippines3 = 5;
          let description_7yD: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,95,53,95,54,53,0),912], [String.fromCharCode(113,95,53,53,95,111,117,116,111,117,116,0),50]]);
         splashm.set(`${bootsplashu}`, bootsplashu.length);
         flyerC = 87 < philippines3;
         philippines3 <<= Math.min(4, Math.abs(description_7yD.size / (Math.max(1, 5))));
         description_7yD.set(`${philippines3}`, philippines3);
      }
          let sans2 = true;
         philippinest = "2";
         sans2 = !sans2;
      let productq = 5214744 <= bootsplashu.length;
      do {
         bootsplashu += `${bootsplashu.length + splashm.size}`;
         if (productq) {
            break;
         }
      } while ((bootsplashu.length < 3) && productq);
          let volume6: Array<any> = [368, 725];
          let half2 = 3;
         splashm = new Map([[`${entryV.length}`, entryV.length + 1]]);
         volume6.push(1);
         half2 ^= volume6.length;
         entryV = [entryV.length];
      while (Array.from(splashm.keys()).includes(`${entryV.length}`)) {
         splashm = new Map([[philippinest, 1 ^ bootsplashu.length]]);
         break;
      }
      temperaturek = [closeb.length];
   }
   while (1.47 <= (4.68 / (Math.max(9, listS))) || (listS / (Math.max(cornerf.size, 8))) <= 4.68) {
       let benefitz = String.fromCharCode(111,112,101,110,103,108,95,102,95,56,52,0);
       let video7 = 1.0;
       let corner_ = 0;
       let entryW = 5;
      for (let i = 0; i < 3; i++) {
         video7 += 3 - benefitz.length;
      }
         corner_ *= parseInt(`${video7}`) << (Math.min(2, Math.abs(1)));
      if (2 > (1 << (Math.min(1, Math.abs(corner_)))) || 1 > (entryW << (Math.min(1, Math.abs(corner_))))) {
         entryW /= Math.max(1, 3);
      }
          let layoutR = 2;
          let filterY = 1.0;
         video7 -= corner_ * parseInt(`${video7}`);
         layoutR >>= Math.min(2, Math.abs(1 / (Math.max(5, layoutR))));
         filterY /= Math.max(3, parseFloat(`${parseInt(`${filterY}`) % (Math.max(1, layoutR))}`));
         video7 /= Math.max(corner_, 4);
          let rewindd: Array<any> = [150, 221];
         entryW &= rewindd.length << (Math.min(Math.abs(3), 4));
       let userf = 5.0;
       let championb = 0.0;
      while (benefitz.length >= 5) {
         championb -= parseFloat(`${parseInt(`${championb}`)}`);
         break;
      }
      if ((championb / 3.76) < 5.69) {
          let fastD: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,105,110,100,97,116,97,0),String.fromCharCode(101,95,50,57,95,115,99,116,112,99,111,110,110,0)], [String.fromCharCode(118,112,120,115,116,97,116,115,95,112,95,51,57,0),String.fromCharCode(108,95,49,51,95,99,111,110,118,101,114,116,105,110,103,0)], [String.fromCharCode(97,95,55,55,95,109,105,115,109,97,116,99,104,0),String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,122,95,55,53,0)]]);
          let inviteF = String.fromCharCode(116,95,49,95,100,105,115,99,111,110,116,105,103,117,111,117,115,0);
         championb /= Math.max(parseFloat(`${parseInt(`${userf}`)}`), 1);
         fastD = new Map([[`${fastD.size}`, fastD.size]]);
         inviteF += `${(inviteF == String.fromCharCode(116,0) ? fastD.size : inviteF.length)}`;
      }
         video7 *= parseInt(`${userf}`) * corner_;
      let textv = 8162309 >= corner_;
      do {
         corner_ &= 2;
         if (textv) {
            break;
         }
      } while (((corner_ / 4) == 1 || (video7 / 5.46) == 2.8) && textv);
         corner_ |= parseInt(`${championb}`) * 1;
      listS -= closeb.length << (Math.min(Math.abs(2), 5));
      break;
   }

            

       let mathf = String.fromCharCode(98,105,116,101,95,114,95,57,54,0);
       let guidep = String.fromCharCode(118,95,57,52,0);
       let modelsp = false;
      if (mathf == guidep) {
          let condensedy: Array<any> = [169, 453];
          let accepteds = false;
          let membershipr = String.fromCharCode(102,95,52,52,95,116,114,105,112,108,101,116,0);
          let indicatorc = String.fromCharCode(97,95,50,95,109,117,108,116,105,112,108,101,120,0);
          let nalyticsk = String.fromCharCode(110,95,54,52,95,98,97,99,107,100,114,111,112,0);
         guidep = `${(2 | (modelsp ? 3 : 5))}`;
         condensedy.push(indicatorc.length | nalyticsk.length);
         accepteds = 1 >= indicatorc.length;
         membershipr += `${condensedy.length}`;
         nalyticsk = "3";
      }
         guidep += "1";
          let reducerw = String.fromCharCode(99,95,50,57,95,110,111,116,0);
         guidep += `${guidep.length}`;
         reducerw += `${reducerw.length / (Math.max(3, 7))}`;
         guidep = `${((modelsp ? 4 : 5))}`;
      for (let f = 0; f < 1; f++) {
          let filedB = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,115,95,57,0);
          let customy = String.fromCharCode(107,95,52,57,95,115,105,108,101,110,116,108,121,0);
          let downloaderW = true;
          let floatinga = String.fromCharCode(104,101,120,98,121,116,101,95,52,95,54,52,0);
          let fastforwarda = String.fromCharCode(117,95,50,54,95,115,109,111,111,116,104,110,101,115,115,0);
         modelsp = floatinga.length >= 54;
         filedB += `${fastforwarda.length << (Math.min(Math.abs(2), 5))}`;
         customy += `${customy.length}`;
         downloaderW = downloaderW && customy.length == 82;
         floatinga = `${(2 ^ (downloaderW ? 5 : 5))}`;
         fastforwarda = `${((downloaderW ? 5 : 5) & 2)}`;
      }
         modelsp = !modelsp && mathf.length <= 85;
      let overlayq = mathf.length >= 6953506;
      do {
          let dataj: Array<any> = [32, 180];
          let moonT = 3.0;
          let modelsG = 0.0;
          let confige: Array<any> = [69, 976, 711];
         mathf = `${parseInt(`${modelsG}`)}`;
         dataj = [dataj.length << (Math.min(1, Math.abs(parseInt(`${moonT}`))))];
         moonT /= Math.max(3, 3);
         modelsG /= Math.max(1, 5);
         confige.push(confige.length >> (Math.min(2, Math.abs(parseInt(`${moonT}`)))));
         if (overlayq) {
            break;
         }
      } while (overlayq && (guidep == String.fromCharCode(100,0)));
      for (let p = 0; p < 2; p++) {
          let robotoQ: Map<any, any> = new Map([[String.fromCharCode(106,95,49,48,95,103,111,116,0),343], [String.fromCharCode(112,108,117,103,103,101,100,95,49,95,53,57,0),960], [String.fromCharCode(101,95,51,50,95,99,99,105,112,0),810]]);
          let invite0: Array<any> = [332, 575, 617];
          let vietnamf = String.fromCharCode(98,95,50,49,95,105,110,100,105,99,97,116,105,111,110,0);
          let scorep = String.fromCharCode(101,120,115,115,95,110,95,52,54,0);
          let fullK = String.fromCharCode(98,95,55,51,95,104,117,103,103,105,110,103,0);
         mathf += `${vietnamf.length + 1}`;
         robotoQ.set(`${fullK}`, fullK.length >> (Math.min(Math.abs(1), 5)));
         invite0 = [fullK.length - invite0.length];
         vietnamf += `${robotoQ.size & 1}`;
         scorep += `${(String.fromCharCode(111,0) == scorep ? invite0.length : scorep.length)}`;
      }
       let emojiO = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,97,95,52,55,0);
      closeb += `${1 + parseInt(`${middleware2}`)}`;
      sende.set(`${reminderO.length}`, sende.size);
            

   if (1 > temperaturek.length) {
      temperaturek.push(1 << (Math.min(2, Math.abs(parseInt(`${middleware2}`)))));
   }
   let collection8 = yellowV >= 9567832;
   do {
       let submitZ: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,95,100,117,114,98,0),String.fromCharCode(100,111,117,103,108,97,115,95,49,95,52,56,0)], [String.fromCharCode(107,95,49,56,95,114,101,110,97,109,101,0),String.fromCharCode(110,111,116,105,102,105,101,115,95,102,95,50,55,0)], [String.fromCharCode(114,111,111,116,115,95,98,95,56,50,0),String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,119,95,57,54,0)]]);
       let readT = 3;
       let main_ta = String.fromCharCode(114,101,112,108,97,121,101,100,95,115,95,51,53,0);
       let register_4cD = 0;
       let whatsappc = 1.0;
          let ajaxi = String.fromCharCode(118,111,119,101,108,95,119,95,57,48,0);
          let apple2 = 4.0;
         register_4cD -= readT;
         ajaxi = `${parseInt(`${apple2}`) + 1}`;
         apple2 *= parseInt(`${apple2}`) % (Math.max(2, 2));
      let moduleA = 5569454 >= register_4cD;
      do {
          let more7 = 4.0;
          let pingp = true;
          let plus0 = false;
          let floating2: Array<any> = [String.fromCharCode(112,97,114,105,116,121,95,105,95,49,54,0), String.fromCharCode(97,99,111,108,111,114,115,95,119,95,53,50,0)];
          let animation8 = String.fromCharCode(104,95,49,54,95,107,101,101,112,105,110,103,0);
         register_4cD -= floating2.length;
         more7 += animation8.length;
         pingp = animation8.endsWith(`${pingp}`);
         plus0 = 52.7 <= more7;
         floating2.push((String.fromCharCode(105,0) == animation8 ? animation8.length : (pingp ? 2 : 1)));
         if (moduleA) {
            break;
         }
      } while ((register_4cD > main_ta.length) && moduleA);
      let umenga = readT <= 9740850;
      do {
         readT += readT * 3;
         if (umenga) {
            break;
         }
      } while ((1.17 <= (whatsappc * readT)) && umenga);
         submitZ = new Map([[`${readT}`, readT & 3]]);
         main_ta += "3";
         register_4cD &= 3 >> (Math.min(4, Math.abs(register_4cD)));
         main_ta += `${2 ^ parseInt(`${whatsappc}`)}`;
      while ((4 << (Math.min(2, main_ta.length))) <= 2) {
         main_ta += `${register_4cD - main_ta.length}`;
         break;
      }
          let become4 = String.fromCharCode(121,95,57,49,95,101,116,104,0);
          let catagorya = String.fromCharCode(112,108,97,110,101,100,95,122,95,54,49,0);
         whatsappc /= Math.max(parseFloat(`${readT - submitZ.size}`), 2);
         become4 += `${become4.length ^ catagorya.length}`;
         catagorya = `${become4.length | 2}`;
         whatsappc += parseFloat(`${3}`);
      let f_centerP = whatsappc >= 9509982.0;
      do {
          let description_9jp: Array<any> = [708, 477, 302];
          let yellowj = String.fromCharCode(122,95,50,52,95,114,101,102,101,114,114,101,114,0);
         whatsappc *= parseFloat(`${description_9jp.length | yellowj.length}`);
         if (f_centerP) {
            break;
         }
      } while (((parseInt(`${whatsappc}`) + readT) <= 3 && 1.32 <= (4.8 + whatsappc)) && f_centerP);
          let gmailt = 1.0;
          let rightY: Array<any> = [721, 380];
         readT <<= Math.min(Math.abs(1), 1);
         gmailt += parseFloat(`${parseInt(`${gmailt}`) ^ 2}`);
         rightY.push(parseInt(`${gmailt}`));
      while (2.46 > (3.35 - whatsappc)) {
         main_ta += `${readT ^ 2}`;
         break;
      }
       let sourceZ = 1;
       let rightn = 3;
         whatsappc *= parseFloat(`${1}`);
      yellowV += temperaturek.length;
      if (collection8) {
         break;
      }
   } while (((yellowV | closeb.length) < 1) && collection8);
            

      nalyticss = `${2 % (Math.max(9, description_1F.length))}`;
      sende.set(closeb, description_1F.length & 3);
            

       let overlayu: Array<any> = [String.fromCharCode(112,95,51,48,95,117,115,114,99,0), String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,106,95,57,57,0), String.fromCharCode(100,95,54,52,95,97,117,116,111,98,97,110,104,0)];
         overlayu = [overlayu.length];
          let bootsplashA: Map<any, any> = new Map([[String.fromCharCode(97,112,102,115,95,121,95,54,54,0),280], [String.fromCharCode(100,97,116,97,95,108,95,56,49,0),963]]);
          let catagoryo = String.fromCharCode(99,118,99,95,57,95,49,0);
          let bodani = String.fromCharCode(99,104,97,114,109,97,112,95,102,95,51,55,0);
         overlayu = [catagoryo.length >> (Math.min(Math.abs(2), 2))];
         bootsplashA.set(bodani, bodani.length);
         catagoryo += `${bootsplashA.size}`;
         overlayu.push(overlayu.length | overlayu.length);
      const_7uW += `${bootsplashP.length ^ 2}`;
   while (Array.from(cornerf.keys()).includes(`${yellowV}`)) {
      yellowV ^= 2 / (Math.max(9, bootsplashP.length));
      break;
   }
            

   for (let b = 0; b < 2; b++) {
       let modeJ = String.fromCharCode(106,95,55,49,95,97,98,111,117,116,0);
         modeJ += `${modeJ.length}`;
      for (let q = 0; q < 2; q++) {
         modeJ += `${(String.fromCharCode(73,0) == modeJ ? modeJ.length : modeJ.length)}`;
      }
      if (1 < modeJ.length) {
         modeJ = `${(String.fromCharCode(80,0) == modeJ ? modeJ.length : modeJ.length)}`;
      }
      listS *= 2 * yellowV;
   }
      nalyticss = `${temperaturek.length}`;

            

   for (let n = 0; n < 2; n++) {
      temperaturek = [parseInt(`${listS}`)];
   }
   for (let b = 0; b < 3; b++) {
      listS *= (String.fromCharCode(49,0) == nalyticss ? parseInt(`${middleware2}`) : nalyticss.length);
   }

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

   let settingsv = yellowV >= 8454046;
   do {
      yellowV += cornerf.size | 2;
      if (settingsv) {
         break;
      }
   } while (settingsv && (4.11 == (2.67 / (Math.max(10, listS))) || (4 + yellowV) == 2));
   let backh = cornerf.size <= 7155276;
   do {
      cornerf = new Map([[nalyticss, nalyticss.length >> (Math.min(Math.abs(3), 1))]]);
      if (backh) {
         break;
      }
   } while ((Array.from(cornerf.keys()).includes(`${listS}`)) && backh);

            setShowSuccess(true);

   let greyg = String.fromCharCode(57,55,97,118,122,98,104,95,95,0) == nalyticss;
   do {
       let hongkongT = true;
       let nextS = false;
       let vignette5 = 3;
       let bottom0 = 2.0;
          let downloaderE = true;
         hongkongT = !nextS;
         downloaderE = !downloaderE || !downloaderE;
         bottom0 *= (parseFloat(`${parseInt(`${bottom0}`) * (nextS ? 2 : 2)}`));
         vignette5 >>= Math.min(3, Math.abs(1));
         vignette5 <<= Math.min(Math.abs(parseInt(`${bottom0}`) & 1), 5);
      let viewsR = nextS ? !nextS : nextS;
      do {
          let macau9 = 0;
          let ccopy_qa: Array<any> = [252, 933];
          let pagination6 = String.fromCharCode(107,95,56,55,95,112,114,107,0);
          let nextF: Array<any> = [900, 561];
         nextS = 7 < macau9 && 58.89 < bottom0;
         macau9 += ccopy_qa.length;
         ccopy_qa.push(pagination6.length);
         pagination6 += "3";
         nextF.push(ccopy_qa.length >> (Math.min(nextF.length, 4)));
         if (viewsR) {
            break;
         }
      } while (viewsR && (nextS));
       let reducerg = String.fromCharCode(117,95,53,48,95,112,97,114,115,101,0);
       let groupf = String.fromCharCode(112,117,98,108,105,115,104,101,114,95,103,95,54,52,0);
         hongkongT = reducerg.length < vignette5;
         reducerg += `${vignette5}`;
         hongkongT = groupf.length > 12;
       let sheetD = String.fromCharCode(99,116,111,114,95,53,95,56,56,0);
       let shareJ = String.fromCharCode(122,95,54,54,95,117,110,115,101,110,100,0);
          let whites = 5.0;
          let pingd = false;
          let whatsappU = 2;
         bottom0 -= parseFloat(`${vignette5 / (Math.max(3, 9))}`);
         whites /= Math.max(whatsappU & 3, 4);
         pingd = 77 <= whatsappU;
      if (!hongkongT) {
         hongkongT = sheetD == String.fromCharCode(66,0);
      }
      nalyticss += `${3 | const_7uW.length}`;
      if (greyg) {
         break;
      }
   } while (greyg && (bootsplashP.endsWith(nalyticss)));
      temperaturek.push(bootsplashP.length);

            setTimeout(() => {

      closeb = `${const_7uW.length}`;
       let pageE = String.fromCharCode(101,95,56,56,95,109,101,116,114,105,99,0);
       let layoutO = 0.0;
         pageE += `${parseInt(`${layoutO}`)}`;
         layoutO += parseInt(`${layoutO}`) / (Math.max(pageE.length, 8));
      if (pageE.length < parseInt(`${layoutO}`)) {
          let clubN: Map<any, any> = new Map([[String.fromCharCode(115,111,102,116,95,107,95,56,0),true ], [String.fromCharCode(118,115,121,110,99,95,111,95,53,0),false ], [String.fromCharCode(103,95,55,57,95,120,114,101,115,0),true ]]);
          let rulesf = String.fromCharCode(111,112,101,110,105,110,103,95,52,95,56,48,0);
          let policyQ: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,95,117,95,54,0),67], [String.fromCharCode(116,117,112,108,101,115,95,97,95,55,48,0),155]]);
          let greyM: Map<any, any> = new Map([[String.fromCharCode(107,95,52,95,116,104,101,105,114,0),String.fromCharCode(98,105,116,95,104,95,57,51,0)], [String.fromCharCode(107,101,109,112,102,95,104,95,49,52,0),String.fromCharCode(106,95,49,56,95,115,104,97,114,112,101,110,105,110,103,0)], [String.fromCharCode(112,108,97,110,95,110,95,57,55,0),String.fromCharCode(112,95,53,49,95,100,111,99,117,109,101,110,116,0)]]);
         pageE = "3";
         clubN = new Map([[`${greyM.size}`, clubN.size - 3]]);
         rulesf += `${greyM.size * policyQ.size}`;
         policyQ.set(`${rulesf}`, rulesf.length - 1);
      }
       let sentryk = false;
         layoutO /= Math.max(1, (parseInt(`${layoutO}`) >> (Math.min(3, Math.abs((sentryk ? 4 : 5))))));
      let nextd = 5852102.0 <= layoutO;
      do {
         layoutO /= Math.max(1, 3);
         if (nextd) {
            break;
         }
      } while (nextd && (!sentryk));
      sende.set(pageE, 2);
                setShowSuccess(false);

      middleware2 += 2 | parseInt(`${listS}`);
      nalyticss += `${usernameK.size % (Math.max(const_7uW.length, 5))}`;
                IRouterComponent.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
       let assist4: Map<any, any> = new Map([[String.fromCharCode(116,97,112,95,107,95,54,56,0),String.fromCharCode(105,95,55,52,95,100,105,115,116,114,105,98,117,116,105,111,110,0)], [String.fromCharCode(122,95,50,54,95,49,95,52,49,0),String.fromCharCode(102,95,49,54,95,116,115,99,99,100,97,116,97,0)], [String.fromCharCode(103,95,55,48,95,99,104,105,109,112,0),String.fromCharCode(110,95,49,95,98,117,116,116,111,110,115,0)]]);
    let predictiono: Array<any> = [97, 554];
    let bannerX = String.fromCharCode(116,114,97,110,115,112,95,52,95,56,52,0);
    let edits = 2;
    let taiwanx = String.fromCharCode(108,95,56,53,95,109,111,109,101,110,116,97,114,121,0);
    let selectj = String.fromCharCode(118,95,51,53,95,119,114,105,116,101,114,0);
    let statisticsi = String.fromCharCode(112,95,52,95,112,105,99,107,108,112,102,0);
    let pageR = 0.0;
    let humidityP = String.fromCharCode(111,98,106,101,99,116,95,99,95,56,48,0);
    let settings_ = String.fromCharCode(102,95,51,48,95,99,104,97,112,116,101,114,0);
    let pageY = 4;
    let zhengpiany: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,102,111,114,109,95,53,95,53,48,0),453], [String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,121,95,54,49,0),525]]);
    let humidityy = String.fromCharCode(118,95,57,95,108,111,116,116,105,101,109,111,100,101,108,0);
    let componentd: Array<any> = [983, 482];
    let changeD = true;
    let rewindn: Map<any, any> = new Map([[String.fromCharCode(114,101,99,118,109,115,103,95,116,95,57,50,0),653], [String.fromCharCode(120,95,57,56,95,105,110,116,101,114,108,101,97,118,105,110,103,0),87], [String.fromCharCode(109,101,110,117,115,95,100,95,51,52,0),555]]);
    let catalogo = 3.0;
      assist4.set(taiwanx, taiwanx.length);
   let nterstitialz = 5903631 <= selectj.length;
   do {
      selectj += `${humidityP.length * selectj.length}`;
      if (nterstitialz) {
         break;
      }
   } while (nterstitialz && (settings_ == String.fromCharCode(71,0)));
      assist4 = new Map([[`${assist4.size}`, selectj.length / (Math.max(3, 7))]]);
       let incidentC = true;
       let acceptedm = String.fromCharCode(111,95,55,95,116,114,97,110,115,108,105,116,101,114,97,116,101,0);
          let orangeX = String.fromCharCode(118,95,54,48,95,119,105,100,116,104,0);
          let loading1 = String.fromCharCode(112,97,114,115,101,95,51,95,50,48,0);
          let private_wxL = true;
         acceptedm = "3";
         orangeX = `${orangeX.length}`;
         loading1 += `${2 >> (Math.min(4, orangeX.length))}`;
         private_wxL = 14 >= loading1.length;
      while (1 >= acceptedm.length) {
         incidentC = !incidentC || acceptedm.length > 45;
         break;
      }
      let watchA = 9063874 >= acceptedm.length;
      do {
          let appsn = 5.0;
          let scheduleF = 2.0;
         acceptedm += `${(parseInt(`${scheduleF}`) & (incidentC ? 4 : 2))}`;
         appsn += parseFloat(`${parseInt(`${appsn}`) | 3}`);
         scheduleF -= parseInt(`${appsn}`);
         if (watchA) {
            break;
         }
      } while ((!incidentC) && watchA);
         acceptedm = `${(String.fromCharCode(56,0) == acceptedm ? (incidentC ? 3 : 3) : acceptedm.length)}`;
          let acceptedA = String.fromCharCode(113,95,54,50,95,115,108,97,110,116,0);
          let taiwan0: Map<any, any> = new Map([[String.fromCharCode(114,95,54,55,95,101,105,112,0),String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,113,95,55,55,0)], [String.fromCharCode(111,95,52,50,95,109,117,108,116,105,115,116,101,112,0),String.fromCharCode(116,109,109,98,110,95,103,95,53,53,0)], [String.fromCharCode(121,95,54,54,95,115,114,116,112,0),String.fromCharCode(119,95,51,48,95,118,97,114,120,104,0)]]);
         acceptedm = `${taiwan0.size * acceptedA.length}`;
      if (incidentC) {
         acceptedm += `${acceptedm.length | 1}`;
      }
      predictiono = [pageY ^ 1];
   for (let l = 0; l < 3; l++) {
      edits *= 1;
   }
      selectj = `${taiwanx.length ^ edits}`;
   if (taiwanx.startsWith(`${selectj.length}`)) {
      selectj += `${zhengpiany.size & 1}`;
   }
   let pausee = selectj == String.fromCharCode(112,110,57,111,49,117,119,0);
   do {
      selectj += "2";
      if (pausee) {
         break;
      }
   } while (pausee && ((zhengpiany.size >> (Math.min(Math.abs(1), 3))) < 3));
      pageY /= Math.max(settings_.length, 2);
       let filedz = 3;
         filedz += 2 ^ filedz;
         filedz /= Math.max(2, filedz);
      while ((2 >> (Math.min(4, Math.abs(filedz)))) > 5 || 2 > (filedz >> (Math.min(4, Math.abs(filedz))))) {
          let rightX = String.fromCharCode(111,117,116,98,111,117,110,100,95,120,95,51,51,0);
          let d_lockF: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,105,110,103,95,105,95,57,52,0),432], [String.fromCharCode(104,101,120,98,115,95,102,95,52,56,0),690], [String.fromCharCode(112,108,97,121,95,104,95,52,48,0),270]]);
          let borderlessS = 5.0;
          let ewardedy = 0;
         filedz &= 3 * ewardedy;
         rightX = `${d_lockF.size & 2}`;
         d_lockF.set(`${borderlessS}`, parseInt(`${borderlessS}`));
         ewardedy /= Math.max(5, 3 | rightX.length);
         break;
      }
      settings_ = `${assist4.size ^ edits}`;
   if (3 == (edits & 5)) {
      edits += 2;
   }
   for (let h = 0; h < 2; h++) {
       let modelsS = String.fromCharCode(115,95,56,55,95,102,100,111,112,101,110,0);
       let jcopy_hsJ = 4.0;
          let tumbnailE = true;
         jcopy_hsJ += modelsS.length;
      for (let s = 0; s < 1; s++) {
         jcopy_hsJ *= 2;
      }
      for (let z = 0; z < 3; z++) {
          let hoverK = 5;
          let favoritei: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,99,111,108,111,114,115,0),false ], [String.fromCharCode(99,95,48,95,115,112,101,101,100,0),true ], [String.fromCharCode(119,95,56,54,95,105,110,99,111,109,112,108,101,116,101,0),true ]]);
         modelsS += `${hoverK - 3}`;
         hoverK += favoritei.size;
         favoritei = new Map([[`${favoritei.size}`, favoritei.size]]);
      }
          let infor = String.fromCharCode(99,97,114,100,115,95,55,95,48,0);
          let mappingv = 5.0;
          let stationsA = String.fromCharCode(121,95,50,51,95,99,105,110,101,109,97,0);
         jcopy_hsJ /= Math.max(modelsS.length ^ 1, 4);
         infor += `${stationsA.length}`;
         mappingv *= infor.length * parseInt(`${mappingv}`);
         stationsA += `${2 * parseInt(`${mappingv}`)}`;
       let chartT = 3.0;
      if (2 >= (modelsS.length - 4)) {
         modelsS = `${parseInt(`${jcopy_hsJ}`) / (Math.max(1, 8))}`;
      }
      selectj = `${settings_.length / (Math.max(2, 1))}`;
   }
   while (4 <= (zhengpiany.size + settings_.length)) {
      zhengpiany.set(taiwanx, zhengpiany.size >> (Math.min(Math.abs(2), 1)));
      break;
   }
   while (pageR > pageY) {
      pageY *= bannerX.length;
      break;
   }
       let kickv = false;
       let fastO: Map<any, any> = new Map([[String.fromCharCode(101,95,56,55,95,105,110,116,101,103,101,114,0),String.fromCharCode(108,95,50,52,95,99,111,109,112,111,117,110,100,0)], [String.fromCharCode(122,95,54,54,95,103,101,110,101,114,97,116,105,111,110,0),String.fromCharCode(111,95,55,95,105,111,115,116,114,101,97,109,0)]]);
      for (let r = 0; r < 2; r++) {
         kickv = fastO.get(`${kickv}`) == null;
      }
          let customZ = String.fromCharCode(122,95,53,56,95,111,99,97,108,0);
          let balle = 5.0;
          let layoutl = 5;
         kickv = kickv || 99.36 < balle;
         customZ = `${3 - layoutl}`;
         balle /= Math.max(parseFloat(`${1 % (Math.max(7, customZ.length))}`), 1);
         layoutl ^= (customZ == String.fromCharCode(107,0) ? layoutl : customZ.length);
          let robotod = String.fromCharCode(100,101,101,112,101,114,95,113,95,56,53,0);
          let bingk = String.fromCharCode(97,95,54,49,95,122,101,114,111,122,101,114,111,0);
          let dataf = String.fromCharCode(97,114,109,99,97,112,95,105,95,55,50,0);
         fastO = new Map([[`${fastO.size}`, robotod.length]]);
         robotod = `${bingk.length >> (Math.min(Math.abs(2), 5))}`;
         bingk = `${1 * dataf.length}`;
         dataf = `${bingk.length % 2}`;
         kickv = (72 < ((kickv ? fastO.size : 52) >> (Math.min(Math.abs(fastO.size), 4))));
          let robotoD = true;
         kickv = (!kickv ? !robotoD : !kickv);
         kickv = fastO.size == 3 || kickv;
      pageY <<= Math.min(2, Math.abs(parseInt(`${pageR}`)));
   let w_titlej = settings_ == String.fromCharCode(50,49,53,121,48,112,113,102,0);
   do {
      settings_ = `${humidityy.length - 3}`;
      if (w_titlej) {
         break;
      }
   } while (w_titlej && ((settings_.length * pageR) < 5.59 || 5.59 < (settings_.length * pageR)));
       let comment2: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,115,104,105,101,108,100,0),String.fromCharCode(116,101,115,101,100,103,101,95,112,95,56,51,0)], [String.fromCharCode(105,110,118,102,95,110,95,49,52,0),String.fromCharCode(115,109,111,111,116,104,101,110,95,122,95,53,52,0)]]);
       let expand1 = 2;
       let upgradee = String.fromCharCode(104,97,115,95,100,95,56,50,0);
         comment2 = new Map([[`${comment2.size}`, expand1 | 1]]);
      let step7 = comment2.size <= 9705007;
      do {
          let q_center2 = 2.0;
         comment2 = new Map([[`${comment2.size}`, 1 >> (Math.min(5, Math.abs(expand1)))]]);
         q_center2 *= parseFloat(`${parseInt(`${q_center2}`) - 3}`);
         if (step7) {
            break;
         }
      } while ((1 <= (comment2.size >> (Math.min(1, Math.abs(expand1))))) && step7);
         comment2.set(upgradee, upgradee.length);
         upgradee += `${expand1}`;
          let actionsu = true;
          let leagueB = 2.0;
          let spec6 = String.fromCharCode(101,95,52,57,95,111,117,116,108,105,110,101,0);
         comment2.set(upgradee, upgradee.length);
         actionsu = spec6 == String.fromCharCode(105,0);
         leagueB /= Math.max(((actionsu ? 2 : 4) ^ parseInt(`${leagueB}`)), 1);
         spec6 = `${spec6.length}`;
      if (4 < (upgradee.length % (Math.max(3, expand1)))) {
         upgradee += `${upgradee.length}`;
      }
         expand1 += 2;
      if (5 >= upgradee.length) {
          let selectionK = 4.0;
          let placementi = String.fromCharCode(114,95,49,49,95,99,111,108,115,107,105,112,0);
         expand1 -= comment2.size * placementi.length;
         selectionK -= parseFloat(`${parseInt(`${selectionK}`)}`);
         placementi += `${parseInt(`${selectionK}`)}`;
      }
      if (upgradee.includes(`${comment2.size}`)) {
          let championp: Array<any> = [256, 440];
          let typingT = String.fromCharCode(112,105,120,115,99,111,112,101,95,119,95,50,53,0);
         upgradee += `${comment2.size}`;
         championp.push(typingT.length);
         typingT = `${typingT.length - 3}`;
      }
      pageY &= bannerX.length;
   if ((humidityy.length & zhengpiany.size) == 5 || 3 == (humidityy.length & 5)) {
      zhengpiany.set(taiwanx, bannerX.length / (Math.max(3, 5)));
   }
   if (5 == humidityP.length) {
       let sans8: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,95,50,95,50,48,0),String.fromCharCode(113,95,53,50,95,99,111,101,114,99,101,0)], [String.fromCharCode(108,95,52,50,95,112,105,99,107,0),String.fromCharCode(97,114,105,116,104,95,55,95,55,54,0)], [String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,57,95,55,57,0),String.fromCharCode(115,112,97,99,105,110,103,95,112,95,52,51,0)]]);
       let macauy = 0;
       let predictione = String.fromCharCode(98,95,52,50,95,102,116,121,112,0);
       let long_0md = String.fromCharCode(103,95,50,48,95,101,99,114,101,100,0);
      while ((long_0md.length / (Math.max(3, sans8.size))) < 3) {
          let time_m_M: Array<any> = [365, 954, 652];
          let s_unlockl = String.fromCharCode(120,95,56,53,95,114,101,112,101,97,116,101,114,0);
          let dangerU: Array<any> = [576, 350];
          let roomH = 3;
         long_0md = `${long_0md.length & macauy}`;
         time_m_M.push(2 >> (Math.min(3, s_unlockl.length)));
         s_unlockl = `${1 ^ s_unlockl.length}`;
         dangerU = [roomH >> (Math.min(4, Math.abs(2)))];
         roomH += dangerU.length % 1;
         break;
      }
      let predictionl = long_0md == String.fromCharCode(111,121,108,110,113,101,114,105,0);
      do {
         long_0md = `${macauy & 3}`;
         if (predictionl) {
            break;
         }
      } while (predictionl && (long_0md.length >= sans8.size));
      for (let f = 0; f < 1; f++) {
         sans8.set(long_0md, 1);
      }
          let countrys = false;
          let containerl = true;
          let heartJ = String.fromCharCode(98,95,53,51,95,109,117,116,101,0);
         macauy /= Math.max((1 + (countrys ? 3 : 1)), 5);
         countrys = containerl;
         heartJ = `${(String.fromCharCode(89,0) == heartJ ? (containerl ? 1 : 4) : heartJ.length)}`;
          let sortg = true;
         sans8.set(`${sortg}`, 2 - sans8.size);
         predictione = `${predictione.length - long_0md.length}`;
      if (predictione.length > sans8.size) {
         sans8 = new Map([[`${macauy}`, (String.fromCharCode(97,0) == long_0md ? long_0md.length : macauy)]]);
      }
         macauy &= 3 ^ sans8.size;
         long_0md = `${(long_0md == String.fromCharCode(68,0) ? long_0md.length : macauy)}`;
      for (let x = 0; x < 3; x++) {
         predictione += "1";
      }
      if (4 <= long_0md.length) {
         sans8.set(`${macauy}`, macauy);
      }
      if (predictione.length >= 5) {
         predictione = `${sans8.size & 3}`;
      }
      selectj = `${1 >> (Math.min(3, predictione.length))}`;
   }
       let sendk: Map<any, any> = new Map([[String.fromCharCode(103,95,55,52,95,98,105,116,0),String.fromCharCode(98,95,50,50,95,115,101,101,107,0)], [String.fromCharCode(104,95,49,48,95,120,103,97,115,0),String.fromCharCode(121,95,53,48,95,112,108,97,110,97,114,120,0)], [String.fromCharCode(121,95,50,48,95,109,111,100,105,102,105,101,114,115,0),String.fromCharCode(108,95,49,56,95,108,101,97,107,0)]]);
       let delegate_hiI = true;
       let aboutb = 4.0;
          let hongkong4 = 4.0;
          let hooks6 = 4;
         delegate_hiI = hongkong4 > 75.89;
         hongkong4 += parseFloat(`${hooks6 >> (Math.min(Math.abs(1), 5))}`);
         hooks6 |= hooks6;
      for (let g = 0; g < 3; g++) {
         delegate_hiI = 1.79 <= aboutb;
      }
       let controlk = String.fromCharCode(107,95,54,54,0);
       let reportr = String.fromCharCode(103,95,56,49,95,112,114,111,112,111,115,97,108,0);
       let upgradey = String.fromCharCode(115,101,110,116,95,102,95,49,51,0);
      while (4 >= sendk.size) {
         sendk = new Map([[reportr, controlk.length ^ reportr.length]]);
         break;
      }
      let feedback2 = sendk.size >= 9279206;
      do {
          let controlsf = 0;
          let foundQ = String.fromCharCode(103,95,55,52,95,101,100,105,116,0);
          let castz = String.fromCharCode(101,95,52,49,95,112,97,99,107,101,116,111,117,116,0);
         sendk = new Map([[foundQ, (foundQ == String.fromCharCode(114,0) ? controlsf : foundQ.length)]]);
         controlsf *= castz.length - 3;
         if (feedback2) {
            break;
         }
      } while (feedback2 && (1 <= (reportr.length ^ sendk.size) || (reportr.length ^ sendk.size) <= 1));
      while (controlk.length <= 2) {
          let tickedt = String.fromCharCode(114,95,53,51,95,97,116,104,0);
          let resultV = String.fromCharCode(120,95,56,56,95,105,110,100,105,99,105,101,115,0);
         controlk = "1";
         tickedt = "3";
         resultV += "1";
         break;
      }
         controlk = `${((delegate_hiI ? 1 : 3) | 1)}`;
         delegate_hiI = aboutb == 59.45;
      zhengpiany.set(selectj, taiwanx.length & selectj.length);
   for (let f = 0; f < 3; f++) {
       let notificationN: Array<any> = [559, 555];
       let grey1 = 1.0;
       let photo3: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,101,100,95,50,95,53,55,0),792], [String.fromCharCode(100,101,113,117,101,117,101,100,95,56,95,57,52,0),156]]);
       let entryb = true;
         grey1 += parseInt(`${grey1}`) / (Math.max(10, photo3.size));
         grey1 *= ((entryb ? 3 : 1) << (Math.min(Math.abs(photo3.size), 4)));
      while (!entryb) {
          let borderlessR: Map<any, any> = new Map([[String.fromCharCode(116,95,55,48,95,109,97,116,114,105,120,102,0),398], [String.fromCharCode(112,95,55,51,95,100,105,115,112,108,97,99,101,0),934]]);
          let langR = 0.0;
          let incidentD = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,121,95,57,50,0);
          let chinav = 0.0;
          let privacyW = String.fromCharCode(103,95,51,48,95,116,101,114,109,105,110,97,116,105,110,103,0);
         grey1 += notificationN.length;
         borderlessR = new Map([[`${chinav}`, 2]]);
         langR -= parseInt(`${chinav}`) | 3;
         incidentD = `${incidentD.length}`;
         privacyW += `${2 | privacyW.length}`;
         break;
      }
          let helperh = 2.0;
          let langkeyD = String.fromCharCode(102,105,120,116,117,114,101,95,98,95,51,48,0);
          let contextv = String.fromCharCode(101,120,112,105,114,121,95,99,95,50,53,0);
         notificationN = [langkeyD.length ^ parseInt(`${grey1}`)];
         helperh /= Math.max(1, parseFloat(`${1}`));
         langkeyD = `${parseInt(`${helperh}`) * 2}`;
         contextv += "3";
         notificationN = [parseInt(`${grey1}`) ^ 3];
         grey1 /= Math.max((parseInt(`${grey1}`) | (entryb ? 3 : 4)), 1);
      for (let n = 0; n < 3; n++) {
         grey1 *= (photo3.size - (entryb ? 4 : 4));
      }
          let n_positionL = 5.0;
          let animationx = 3.0;
          let chartP = String.fromCharCode(120,95,55,53,95,106,97,99,107,0);
         notificationN.push(notificationN.length ^ 1);
         n_positionL *= (parseFloat(`${String.fromCharCode(119,0) == chartP ? parseInt(`${n_positionL}`) : chartP.length}`));
         animationx *= parseInt(`${animationx}`);
      for (let u = 0; u < 1; u++) {
          let viewsV = 5.0;
          let nexth: Map<any, any> = new Map([[String.fromCharCode(116,114,97,112,95,57,95,50,55,0),false ], [String.fromCharCode(117,95,49,50,95,114,101,115,101,116,98,117,102,0),true ]]);
          let module8: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,116,105,109,101,95,98,95,54,55,0),291], [String.fromCharCode(113,95,50,52,95,101,110,100,97,0),284], [String.fromCharCode(105,100,101,116,95,51,95,56,52,0),308]]);
          let launchr = String.fromCharCode(108,95,53,55,95,116,114,101,97,116,0);
         photo3.set(`${entryb}`, 3);
         viewsV += parseFloat(`${nexth.size / 3}`);
         nexth.set(launchr, module8.size);
         module8.set(`${module8.size}`, 3);
         launchr += "3";
      }
       let kickN = String.fromCharCode(99,108,111,115,101,112,95,57,95,52,52,0);
          let watch2 = 0;
          let condensed8 = String.fromCharCode(117,95,49,53,95,100,115,116,115,117,98,0);
         photo3 = new Map([[`${watch2}`, parseInt(`${grey1}`) >> (Math.min(1, Math.abs(2)))]]);
         watch2 >>= Math.min(1, Math.abs((condensed8 == String.fromCharCode(113,0) ? condensed8.length : condensed8.length)));
      while (Array.from(photo3.keys()).includes(`${grey1}`)) {
         grey1 /= Math.max(((entryb ? 2 : 3)), 3);
         break;
      }
      bannerX = `${3 * zhengpiany.size}`;
   }
   if (4 <= (statisticsi.length ^ 4)) {
      statisticsi = `${2 / (Math.max(4, edits))}`;
   }
      edits += 1 << (Math.min(4, humidityP.length));
      humidityP = `${pageY}`;

        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
       let smalld = String.fromCharCode(98,95,57,55,95,114,101,102,105,110,101,100,0);
    let minimize_ = String.fromCharCode(121,95,51,50,95,115,105,120,0);
    let moviesx = String.fromCharCode(104,95,50,55,95,115,101,99,117,114,101,100,0);
    let catagoryl = 0.0;
    let sporta = String.fromCharCode(115,111,114,116,101,114,95,111,95,52,51,0);
    let prediction5 = 1;
    let crownG = true;
    let incidentK = String.fromCharCode(98,95,55,51,95,109,97,114,107,105,110,103,115,0);
    let nalytics0 = 2;
    let anythinkG: Array<any> = [511, 109];
    let nterstitialc: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,95,114,95,50,54,0),959], [String.fromCharCode(100,111,99,105,100,115,95,51,95,52,50,0),140], [String.fromCharCode(119,101,98,118,105,101,119,95,115,95,50,55,0),135]]);
      incidentK = `${incidentK.length / 3}`;
      catagoryl += nalytics0;
      nterstitialc.set(`${crownG}`, minimize_.length);
      moviesx += `${minimize_.length}`;
       let rulesA: Map<any, any> = new Map([[String.fromCharCode(104,95,52,55,95,104,97,110,100,0),String.fromCharCode(99,114,101,97,116,105,110,103,95,51,95,57,55,0)], [String.fromCharCode(118,105,115,117,97,108,95,49,95,56,53,0),String.fromCharCode(121,95,57,49,95,102,114,97,109,101,115,121,110,99,0)], [String.fromCharCode(115,95,55,95,99,114,101,100,101,110,116,105,97,108,115,0),String.fromCharCode(107,95,53,51,95,97,118,120,115,121,110,116,104,0)]]);
       let verticalG = 5;
       let dangert = 3;
      if (2 >= verticalG) {
          let dangery = String.fromCharCode(102,95,55,48,95,109,111,115,116,0);
         verticalG %= Math.max(5, 2 & dangery.length);
      }
      while (5 == dangert) {
         verticalG ^= dangert;
         break;
      }
      nterstitialc.set(smalld, 3);
      rulesA = new Map([[`${rulesA.size}`, rulesA.size]]);
   if ((incidentK.length & nalytics0) == 2 || 2 == (nalytics0 & incidentK.length)) {
       let othera = String.fromCharCode(97,95,57,54,95,101,110,99,111,100,97,98,108,101,0);
       let flyerf = 4.0;
       let injuryb = String.fromCharCode(102,99,104,111,119,110,95,118,95,50,52,0);
       let s_countq = String.fromCharCode(118,99,101,110,99,95,104,95,50,49,0);
      if (s_countq != injuryb) {
         injuryb += `${1 * othera.length}`;
      }
       let stepO: Array<any> = [873, 963, 754];
       let helpers: Array<any> = [493, 693];
         flyerf -= (parseFloat(`${String.fromCharCode(68,0) == othera ? stepO.length : othera.length}`));
          let blackM = true;
          let watch5 = 1;
          let verticalV = 5;
         s_countq = `${1 * stepO.length}`;
         blackM = 41 > watch5;
         watch5 -= verticalV >> (Math.min(Math.abs(watch5), 3));
         verticalV <<= Math.min(Math.abs(watch5), 4);
      let leaguer = String.fromCharCode(106,121,110,113,0) == s_countq;
      do {
         s_countq += `${helpers.length}`;
         if (leaguer) {
            break;
         }
      } while (leaguer && (5 >= (1 % (Math.max(5, stepO.length))) || 3 >= (1 % (Math.max(9, stepO.length)))));
      if (othera == s_countq) {
         s_countq = `${injuryb.length >> (Math.min(Math.abs(3), 2))}`;
      }
      for (let y = 0; y < 3; y++) {
         injuryb = `${parseInt(`${flyerf}`) ^ helpers.length}`;
      }
         injuryb = "3";
          let clubu = String.fromCharCode(108,95,57,56,95,100,105,97,108,108,105,110,103,0);
          let vietnamR: Array<any> = [552, 172];
          let hoverO: Map<any, any> = new Map([[String.fromCharCode(102,105,120,116,117,114,101,115,95,115,95,57,50,0),941], [String.fromCharCode(100,95,54,48,95,115,111,117,110,100,0),51], [String.fromCharCode(101,110,99,111,100,105,110,103,95,52,95,55,0),670]]);
         injuryb = `${stepO.length >> (Math.min(Math.abs(2), 5))}`;
         clubu = "1";
         vietnamR = [vietnamR.length + hoverO.size];
         hoverO = new Map([[`${hoverO.size}`, vietnamR.length - 1]]);
          let leftI = 2.0;
          let update_fV: Array<any> = [926, 463];
         stepO.push(1 & stepO.length);
         leftI += parseFloat(`${update_fV.length << (Math.min(5, Math.abs(parseInt(`${leftI}`))))}`);
         update_fV.push(update_fV.length | 1);
      for (let z = 0; z < 2; z++) {
         flyerf *= parseFloat(`${s_countq.length / (Math.max(1, 9))}`);
      }
          let modulee = String.fromCharCode(106,95,52,56,95,100,105,116,97,110,99,101,0);
         stepO.push(1 << (Math.min(2, stepO.length)));
         modulee = `${modulee.length ^ 3}`;
      incidentK += `${sporta.length}`;
   }
      smalld += `${(sporta == String.fromCharCode(77,0) ? nterstitialc.size : sporta.length)}`;
      nterstitialc = new Map([[sporta, (String.fromCharCode(57,0) == sporta ? sporta.length : prediction5)]]);
       let actions3 = 3.0;
       let suggestioni = String.fromCharCode(103,97,117,115,115,95,55,95,56,55,0);
       let arear: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,95,113,117,97,110,116,105,122,101,100,0),false ], [String.fromCharCode(106,95,53,57,95,116,114,101,108,108,105,115,0),true ]]);
      for (let u = 0; u < 3; u++) {
          let statsT = 2;
          let analyticl: Map<any, any> = new Map([[String.fromCharCode(114,95,51,54,95,101,100,105,116,105,110,103,0),330], [String.fromCharCode(105,100,101,110,116,95,120,95,56,49,0),235]]);
          let floatingj = String.fromCharCode(109,111,110,103,111,95,118,95,50,50,0);
          let suggestion_: Array<any> = [315, 521, 126];
         arear.set(`${suggestioni}`, (String.fromCharCode(104,0) == suggestioni ? arear.size : suggestioni.length));
         statsT += floatingj.length;
         analyticl = new Map([[`${analyticl.size}`, analyticl.size]]);
         floatingj += `${analyticl.size}`;
         suggestion_.push(statsT);
      }
      if (!suggestioni.endsWith(`${actions3}`)) {
         actions3 += parseFloat(`${suggestioni.length | 3}`);
      }
      while ((suggestioni.length + 3) <= 1) {
         suggestioni += `${(suggestioni == String.fromCharCode(111,0) ? suggestioni.length : arear.size)}`;
         break;
      }
          let injurye = 3.0;
         suggestioni += `${arear.size * 3}`;
         injurye /= Math.max(5, parseFloat(`${parseInt(`${injurye}`)}`));
      for (let t = 0; t < 3; t++) {
         suggestioni += `${suggestioni.length}`;
      }
      for (let d = 0; d < 1; d++) {
         arear.set(suggestioni, 1);
      }
      let settingR = 9058196 >= arear.size;
      do {
          let usery = true;
          let diceA = String.fromCharCode(112,111,115,116,97,108,95,122,95,49,56,0);
          let listu = String.fromCharCode(114,101,99,101,112,116,105,111,110,95,121,95,50,0);
         arear.set(suggestioni, arear.size);
         usery = diceA.length >= 9;
         diceA = `${((usery ? 2 : 4))}`;
         listu += `${2 & diceA.length}`;
         if (settingR) {
            break;
         }
      } while ((Array.from(arear.keys()).includes(`${actions3}`)) && settingR);
      let notificationb = arear.size <= 5126541;
      do {
         arear = new Map([[suggestioni, suggestioni.length << (Math.min(Math.abs(3), 5))]]);
         if (notificationb) {
            break;
         }
      } while (notificationb && (5 < (arear.size + parseInt(`${actions3}`)) && (actions3 + 5.21) < 2.44));
         suggestioni = `${suggestioni.length - 2}`;
      sporta += `${minimize_.length}`;
   for (let m = 0; m < 2; m++) {
      nalytics0 &= 3;
   }
      sporta += `${moviesx.length}`;
   while (5.10 == (catagoryl - incidentK.length) || 1.12 == (5.10 - catagoryl)) {
      catagoryl *= 3;
      break;
   }
   for (let u = 0; u < 1; u++) {
       let controlsU = String.fromCharCode(105,95,53,48,95,121,117,118,110,118,99,0);
       let countryh: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,95,50,95,57,0),String.fromCharCode(111,95,48,0)], [String.fromCharCode(117,115,116,111,109,95,99,95,51,52,0),String.fromCharCode(100,99,97,109,97,116,104,95,105,95,49,48,48,0)]]);
       let selectedA = 4.0;
         selectedA += parseFloat(`${countryh.size}`);
          let sportH = false;
          let recommendationN = String.fromCharCode(99,95,53,49,95,110,105,103,104,116,115,104,111,116,0);
          let catalogN = 1;
         selectedA += parseFloat(`${countryh.size | 1}`);
         sportH = String.fromCharCode(121,0) == recommendationN;
         recommendationN = "1";
         catalogN <<= Math.min(Math.abs(catalogN), 5);
      for (let d = 0; d < 1; d++) {
          let popupf = String.fromCharCode(106,95,55,95,99,114,108,115,0);
          let interstitialZ = String.fromCharCode(109,95,53,56,95,114,111,103,114,101,115,115,0);
          let lango = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,49,95,57,50,0);
          let profileR = true;
         selectedA /= Math.max(3, parseFloat(`${2}`));
         popupf += `${lango.length}`;
         interstitialZ += `${interstitialZ.length}`;
         lango = `${(interstitialZ == String.fromCharCode(68,0) ? popupf.length : interstitialZ.length)}`;
         profileR = !profileR;
      }
         selectedA -= parseFloat(`${parseInt(`${selectedA}`) / (Math.max(3, 8))}`);
       let notificationh = String.fromCharCode(102,95,51,56,95,105,110,116,101,114,99,101,112,116,111,114,115,0);
         selectedA -= (parseFloat(`${notificationh == String.fromCharCode(75,0) ? countryh.size : notificationh.length}`));
      for (let o = 0; o < 3; o++) {
         controlsU += `${(String.fromCharCode(85,0) == controlsU ? parseInt(`${selectedA}`) : controlsU.length)}`;
      }
      if (notificationh.startsWith(`${selectedA}`)) {
          let changeO: Map<any, any> = new Map([[String.fromCharCode(115,108,97,110,116,95,48,95,50,48,0),142], [String.fromCharCode(114,95,49,51,95,112,111,115,116,105,111,110,0),158]]);
          let long_fF = false;
          let o_unlockj = String.fromCharCode(116,111,114,103,98,95,122,95,54,49,0);
          let main_zE = String.fromCharCode(100,98,115,105,122,101,95,99,95,52,49,0);
          let cornerj = String.fromCharCode(116,97,107,101,110,95,53,95,52,52,0);
         selectedA -= parseFloat(`${2}`);
         changeO.set(`${long_fF}`, ((long_fF ? 3 : 2) % 1));
         o_unlockj += "2";
         main_zE += "1";
         cornerj = `${cornerj.length / 2}`;
      }
         notificationh += `${(controlsU == String.fromCharCode(90,0) ? controlsU.length : parseInt(`${selectedA}`))}`;
      moviesx = `${nalytics0}`;
   }
      nterstitialc.set(smalld, (String.fromCharCode(109,0) == smalld ? parseInt(`${catagoryl}`) : smalld.length));
   let langf = catagoryl >= 8746739.0;
   do {
      catagoryl -= 3 >> (Math.min(Math.abs(parseInt(`${catagoryl}`)), 3));
      if (langf) {
         break;
      }
   } while ((smalld.length < catagoryl) && langf);
      incidentK += `${minimize_.length / (Math.max(3, 8))}`;
   let unselectedP = sporta == String.fromCharCode(119,114,53,117,97,0);
   do {
      sporta = "2";
      if (unselectedP) {
         break;
      }
   } while (unselectedP && (5 > (parseInt(`${catagoryl}`) / (Math.max(5, sporta.length)))));
   if (4 > (anythinkG.length / 4)) {
       let upgradeP = false;
       let blacklistA: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,95,114,95,49,48,48,0),false ], [String.fromCharCode(99,111,109,109,101,110,116,95,103,95,54,49,0),true ], [String.fromCharCode(108,95,53,95,99,117,101,112,111,105,110,116,0),false ]]);
       let placeholderw = String.fromCharCode(100,111,119,110,103,114,97,100,101,95,49,95,57,48,0);
       let remindere = String.fromCharCode(101,110,99,95,98,95,54,57,0);
       let services = String.fromCharCode(119,95,49,56,95,105,110,116,101,103,114,97,116,101,100,0);
       let background7: Array<any> = [421, 14, 181];
         services += "2";
      for (let a = 0; a < 3; a++) {
          let preview8 = 2.0;
          let singaporeN = 5.0;
         remindere = `${services.length % 2}`;
         preview8 -= parseFloat(`${parseInt(`${singaporeN}`)}`);
         singaporeN *= parseFloat(`${parseInt(`${singaporeN}`) ^ parseInt(`${preview8}`)}`);
      }
          let profile5: Array<any> = [963, 56];
         blacklistA.set(`${background7.length}`, 2);
         profile5.push(2);
      while (services.startsWith(`${remindere.length}`)) {
         services = `${(remindere == String.fromCharCode(101,0) ? (upgradeP ? 5 : 1) : remindere.length)}`;
         break;
      }
       let gesturesw = String.fromCharCode(97,95,53,50,95,99,111,109,112,114,101,115,115,105,111,110,0);
      let moreK = 6731663 >= background7.length;
      do {
         background7.push(((upgradeP ? 3 : 3) ^ remindere.length));
         if (moreK) {
            break;
         }
      } while (moreK && ((background7.length << (Math.min(Math.abs(5), 1))) >= 4 && upgradeP));
       let searchM: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,48,95,57,52,0),570], [String.fromCharCode(119,95,55,54,95,99,111,110,115,116,116,105,109,101,0),37], [String.fromCharCode(97,95,57,48,95,102,97,115,116,116,101,115,116,0),867]]);
      let turnH = upgradeP ? !upgradeP : upgradeP;
      do {
         upgradeP = remindere == String.fromCharCode(57,0);
         if (turnH) {
            break;
         }
      } while (turnH && (!remindere.includes(`${upgradeP}`)));
      let guides = 7876922 >= searchM.size;
      do {
         searchM = new Map([[`${blacklistA.size}`, 3 ^ blacklistA.size]]);
         if (guides) {
            break;
         }
      } while (((3 & services.length) == 2 && (searchM.size & services.length) == 3) && guides);
      while (placeholderw.endsWith(`${upgradeP}`)) {
         placeholderw = `${(placeholderw.length * (upgradeP ? 5 : 5))}`;
         break;
      }
      if (!Array.from(searchM.keys()).includes(`${background7.length}`)) {
         searchM.set(`${upgradeP}`, (background7.length & (upgradeP ? 5 : 1)));
      }
          let more0 = 0.0;
         searchM.set(`${more0}`, parseInt(`${more0}`));
      if (3 <= (gesturesw.length | 1) || 3 <= (blacklistA.size | 1)) {
         blacklistA.set(`${upgradeP}`, ((upgradeP ? 4 : 4) & remindere.length));
      }
      while (1 == (blacklistA.size % 5) || 2 == (placeholderw.length % 5)) {
         blacklistA.set(placeholderw, placeholderw.length << (Math.min(4, Math.abs(searchM.size))));
         break;
      }
      incidentK = `${smalld.length}`;
   }

        setShowBackModel(false);

   while (4 > (3 >> (Math.min(4, minimize_.length)))) {
      minimize_ += `${prediction5}`;
      break;
   }
   for (let d = 0; d < 2; d++) {
       let cross6 = String.fromCharCode(109,95,57,49,95,118,115,121,110,99,0);
      for (let y = 0; y < 2; y++) {
          let clubN = String.fromCharCode(114,101,118,101,114,116,95,105,95,50,49,0);
         cross6 = `${cross6.length + 2}`;
         clubN += `${clubN.length}`;
      }
         cross6 = `${cross6.length}`;
         cross6 = "1";
      incidentK = `${(String.fromCharCode(48,0) == smalld ? smalld.length : nalytics0)}`;
   }
   let projectL = prediction5 >= 8490126;
   do {
      prediction5 += 3;
      if (projectL) {
         break;
      }
   } while (((anythinkG.length | 5) == 5) && projectL);
       let n_imageF = 2.0;
       let dragq: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,95,115,95,49,54,0),255], [String.fromCharCode(108,95,55,51,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0),943], [String.fromCharCode(98,95,51,49,95,115,116,114,104,97,115,104,0),345]]);
         n_imageF -= parseInt(`${n_imageF}`);
      while (3 < (4 & dragq.size) || 4.9 < (n_imageF - 3.60)) {
         dragq.set(`${n_imageF}`, 2 >> (Math.min(2, Math.abs(dragq.size))));
         break;
      }
      nalytics0 <<= Math.min(4, Math.abs(sporta.length - 1));
      moviesx = `${prediction5}`;
      anythinkG = [prediction5];
   for (let p = 0; p < 1; p++) {
       let detailsl = String.fromCharCode(119,95,51,51,95,105,110,116,99,104,101,99,107,0);
       let checkbox4 = String.fromCharCode(114,95,57,48,95,105,110,105,116,118,0);
       let halfw = String.fromCharCode(99,95,50,52,95,102,97,100,101,100,0);
       let target6 = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,107,95,51,52,0);
      if (checkbox4 != String.fromCharCode(57,0)) {
         detailsl = `${checkbox4.length}`;
      }
      let downloady = checkbox4.length >= 7551180;
      do {
         checkbox4 += `${checkbox4.length + 3}`;
         if (downloady) {
            break;
         }
      } while ((halfw.length >= checkbox4.length) && downloady);
      if (detailsl.includes(`${checkbox4.length}`)) {
         checkbox4 += "2";
      }
         target6 = `${detailsl.length & target6.length}`;
      while (!target6.includes(detailsl)) {
          let whatsappY = 2;
         detailsl = `${whatsappY * 3}`;
         break;
      }
      if (!detailsl.startsWith(checkbox4)) {
         detailsl = `${halfw.length}`;
      }
          let drag6 = String.fromCharCode(120,95,57,51,95,101,110,99,104,0);
          let time_39Q = 4.0;
          let regengI = String.fromCharCode(120,105,110,103,95,98,95,54,53,0);
         halfw += `${target6.length}`;
         drag6 += "2";
         time_39Q *= 2 ^ parseInt(`${time_39Q}`);
         regengI = `${(regengI == String.fromCharCode(113,0) ? regengI.length : parseInt(`${time_39Q}`))}`;
         halfw = "3";
      if (!detailsl.endsWith(checkbox4)) {
         detailsl += `${halfw.length}`;
      }
      if (detailsl.length >= 2) {
         checkbox4 += `${halfw.length}`;
      }
          let pointE = String.fromCharCode(109,117,116,97,116,105,110,103,95,57,95,54,48,0);
          let handlerG: Array<any> = [687, 269];
         detailsl = "2";
         pointE = `${pointE.length}`;
         handlerG.push(pointE.length);
         detailsl += "1";
      smalld += "1";
   }
      crownG = String.fromCharCode(121,0) == incidentK;
      nalytics0 /= Math.max(4, prediction5 + parseInt(`${catagoryl}`));
   for (let h = 0; h < 2; h++) {
      catagoryl -= (moviesx == String.fromCharCode(89,0) ? parseInt(`${catagoryl}`) : moviesx.length);
   }
      sporta += "1";
   for (let u = 0; u < 3; u++) {
      anythinkG.push(((crownG ? 2 : 1) & nterstitialc.size));
   }
   let arrowi = minimize_ == String.fromCharCode(98,100,54,97,113,100,48,106,0);
   do {
      minimize_ = "2";
      if (arrowi) {
         break;
      }
   } while (arrowi && (incidentK != String.fromCharCode(102,0)));
      sporta = `${(String.fromCharCode(99,0) == smalld ? moviesx.length : smalld.length)}`;
   while ((nalytics0 % 4) == 5) {
       let themer = 1.0;
       let temperaturea = String.fromCharCode(109,95,52,51,95,99,118,116,121,117,118,116,111,0);
       let incidentU = true;
       let stylev = String.fromCharCode(106,95,52,55,95,116,97,103,115,0);
       let tempy = 1.0;
      for (let z = 0; z < 3; z++) {
          let entryN = 2.0;
          let annerZ: Array<any> = [105, 199];
          let link8 = false;
         tempy += parseFloat(`${1}`);
         entryN += parseInt(`${entryN}`) / (Math.max(annerZ.length, 3));
         annerZ = [annerZ.length & parseInt(`${entryN}`)];
         link8 = annerZ.length <= entryN;
      }
          let infoO = String.fromCharCode(98,95,52,53,95,117,110,102,105,108,116,101,114,101,100,0);
          let eact7 = true;
         stylev += `${parseInt(`${themer}`)}`;
         infoO += `${((eact7 ? 1 : 3))}`;
         eact7 = !eact7;
       let settingi: Array<any> = [772, 932, 876];
         incidentU = String.fromCharCode(54,0) == stylev && temperaturea.length == 98;
      while (!incidentU) {
         tempy /= Math.max(parseFloat(`${parseInt(`${themer}`) ^ 2}`), 4);
         break;
      }
          let windn = 3;
          let miniu = String.fromCharCode(112,101,114,109,117,116,101,115,95,103,95,53,56,0);
         temperaturea += `${temperaturea.length}`;
         windn *= miniu.length ^ 2;
         miniu = `${miniu.length - windn}`;
      for (let u = 0; u < 2; u++) {
          let rewindh: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,95,115,116,114,105,112,0),551], [String.fromCharCode(103,95,54,52,95,97,108,108,111,99,97,116,111,114,0),173], [String.fromCharCode(99,108,101,97,114,95,48,95,53,53,0),931]]);
          let upgradec = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,121,95,51,48,0);
          let sendj = 2.0;
         settingi = [(stylev == String.fromCharCode(88,0) ? settingi.length : stylev.length)];
         rewindh = new Map([[upgradec, parseInt(`${sendj}`) / 2]]);
         upgradec = `${parseInt(`${sendj}`) + 2}`;
      }
         tempy -= parseFloat(`${stylev.length}`);
      for (let n = 0; n < 1; n++) {
         tempy += parseFloat(`${parseInt(`${tempy}`) >> (Math.min(Math.abs(1), 3))}`);
      }
      for (let m = 0; m < 3; m++) {
         stylev = `${settingi.length}`;
      }
      for (let j = 0; j < 2; j++) {
         themer *= parseFloat(`${stylev.length}`);
      }
          let yellowY = 5;
         tempy *= parseFloat(`${parseInt(`${themer}`) >> (Math.min(3, Math.abs(parseInt(`${tempy}`))))}`);
         yellowY *= yellowY;
      if ((tempy / (Math.max(parseFloat(`${stylev.length}`), 5))) < 5.8 && 3 < (stylev.length - 3)) {
         stylev = `${2 >> (Math.min(4, temperaturea.length))}`;
      }
      for (let t = 0; t < 3; t++) {
         incidentU = parseFloat(`${settingi.length}`) == themer;
      }
          let sansh: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,95,121,95,53,56,0),90], [String.fromCharCode(104,105,103,104,108,105,103,104,116,95,106,95,54,54,0),68], [String.fromCharCode(99,119,114,115,105,95,118,95,54,53,0),117]]);
          let loadingt = String.fromCharCode(110,97,112,115,104,111,116,95,115,95,57,56,0);
          let bootsplash3 = 2;
         settingi.push(2 - temperaturea.length);
         sansh = new Map([[`${bootsplash3}`, loadingt.length]]);
         loadingt = `${(String.fromCharCode(89,0) == loadingt ? sansh.size : loadingt.length)}`;
         bootsplash3 ^= 1;
      sporta += `${((incidentU ? 2 : 1))}`;
      break;
   }
       let feedbackJ = 5.0;
      while (4.87 >= (1.67 + feedbackJ)) {
         feedbackJ -= parseFloat(`${1}`);
         break;
      }
          let internets = true;
          let constantsj = String.fromCharCode(108,95,57,55,95,99,111,108,114,0);
         feedbackJ *= (parseFloat(`${parseInt(`${feedbackJ}`) - (internets ? 1 : 3)}`));
         internets = constantsj == String.fromCharCode(72,0);
         constantsj = `${(String.fromCharCode(84,0) == constantsj ? constantsj.length : constantsj.length)}`;
      let modele = 6474537.0 <= feedbackJ;
      do {
          let ajaxR: Array<any> = [537, 962, 850];
         feedbackJ -= parseFloat(`${ajaxR.length}`);
         if (modele) {
            break;
         }
      } while ((2.49 > (feedbackJ * feedbackJ)) && modele);
      smalld = "1";
   while (2 >= (nalytics0 + prediction5) && (nalytics0 + 2) >= 3) {
       let spinnerW = String.fromCharCode(116,103,99,97,108,108,115,95,103,95,53,55,0);
       let history_ = String.fromCharCode(101,97,103,97,105,110,95,99,95,53,55,0);
       let fastj = String.fromCharCode(101,95,52,55,95,100,116,109,102,0);
         spinnerW += `${1 % (Math.max(2, spinnerW.length))}`;
      while (5 >= history_.length) {
         fastj += `${3 >> (Math.min(4, spinnerW.length))}`;
         break;
      }
      if (history_ == String.fromCharCode(75,0)) {
          let heart_: Array<any> = [String.fromCharCode(115,104,97,95,120,95,57,50,0), String.fromCharCode(108,95,56,48,95,109,111,114,101,0)];
          let gemfileN = 2.0;
         spinnerW = `${fastj.length}`;
         heart_ = [parseInt(`${gemfileN}`)];
         gemfileN *= parseFloat(`${1 + heart_.length}`);
      }
          let style4 = String.fromCharCode(108,95,53,54,95,101,120,99,108,117,100,105,110,103,0);
         spinnerW += "2";
         style4 += `${style4.length / 3}`;
         history_ = `${spinnerW.length}`;
          let faviconY = 0.0;
         spinnerW += `${3 / (Math.max(5, fastj.length))}`;
         faviconY *= parseFloat(`${3}`);
          let w_centers = false;
          let orange2 = String.fromCharCode(119,95,55,48,95,115,117,98,109,111,100,117,108,101,0);
         fastj += `${spinnerW.length}`;
         w_centers = !orange2.startsWith(`${w_centers}`);
         orange2 += `${orange2.length}`;
         history_ = `${(spinnerW == String.fromCharCode(65,0) ? spinnerW.length : fastj.length)}`;
         spinnerW = `${(history_ == String.fromCharCode(98,0) ? fastj.length : history_.length)}`;
      nalytics0 %= Math.max(1 + spinnerW.length, 1);
      break;
   }
      prediction5 ^= 2;
        IRouterComponent.back();
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