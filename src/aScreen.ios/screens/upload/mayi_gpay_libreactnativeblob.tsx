import ScreenContainer from "../../components/container/mayi_save";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/textlayoutmanagerInouttargetred.svg';
import AlbumIcon from '@static/images/videocommonChange.svg';
import { useTheme } from "@react-navigation/native";
import { mayi_TrashBootsplash } from "../../../routes/mayi_topon";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/mayi_champion";
import { UploadProgressOverlay } from "../../components/modal/mayi_launcher";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/mayi_middleware_apps";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { showLoginAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

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
    const userState = useSelector<mayi_Baseline>('userReducer');

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
       let q_centerJ = String.fromCharCode(101,95,57,52,95,101,110,99,114,121,112,116,0);
    let linkh = 2.0;
    let iconadslinkE: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,0),24], [String.fromCharCode(108,111,99,107,95,117,95,57,0),475], [String.fromCharCode(100,95,54,49,95,100,101,108,97,121,0),816]]);
    let routerj: Array<any> = [String.fromCharCode(101,97,115,121,0), String.fromCharCode(117,95,56,48,0), String.fromCharCode(122,95,55,48,95,100,111,110,110,97,0)];
    let storeB = String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,49,95,52,52,0);
    let footballtrophyC = 5.0;
    let whiteq = String.fromCharCode(101,120,108,117,100,101,100,0);
    let qaagH: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,108,101,114,0),322], [String.fromCharCode(119,95,56,48,95,121,98,121,114,0),655], [String.fromCharCode(116,105,116,108,101,115,95,109,95,55,49,0),845]]);
    let watch4 = String.fromCharCode(100,101,116,101,99,116,105,111,110,95,106,95,51,48,0);
    let emojiV = String.fromCharCode(106,95,54,48,95,110,117,109,101,114,97,108,115,0);
    let middleG = String.fromCharCode(117,110,105,116,0);
    let bangM = String.fromCharCode(119,97,114,110,105,110,103,115,0);
    let homeplayerY = true;
    let awayteamfieldK = false;
    let predictionbuttonP: Array<any> = [444, 360, 554];
      watch4 = `${parseInt(`${footballtrophyC}`) | parseInt(`${linkh}`)}`;
      iconadslinkE = new Map([[storeB, storeB.length >> (Math.min(Math.abs(1), 2))]]);
   let backward9 = q_centerJ.length <= 6409712;
   do {
      q_centerJ += "3";
      if (backward9) {
         break;
      }
   } while ((q_centerJ.startsWith(`${qaagH.size}`)) && backward9);
       let footballtrophyu = String.fromCharCode(109,105,100,108,95,110,95,55,48,0);
       let utilsV: Array<any> = [307, 794];
       let window_x0i: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,105,115,101,115,0),598], [String.fromCharCode(115,105,112,104,97,115,104,0),61]]);
       let bnewinterstitialY = String.fromCharCode(115,95,55,51,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
       let icontransferclub_ = String.fromCharCode(110,115,101,103,109,101,110,116,115,0);
      while ((3 & footballtrophyu.length) < 3 && 3 < (utilsV.length & 3)) {
         utilsV = [3 + utilsV.length];
         break;
      }
      while (bnewinterstitialY.endsWith(`${utilsV.length}`)) {
          let colorsp: Array<any> = [364, 819];
          let inouttargetredd = String.fromCharCode(109,97,116,99,104,101,115,0);
         utilsV = [(String.fromCharCode(86,0) == icontransferclub_ ? icontransferclub_.length : colorsp.length)];
         colorsp.push(inouttargetredd.length);
         inouttargetredd = `${inouttargetredd.length}`;
         break;
      }
         bnewinterstitialY += `${window_x0i.size}`;
      if (utilsV.length >= 3) {
         utilsV.push(window_x0i.size);
      }
      q_centerJ += `${emojiV.length | 1}`;
       let bootsplashj = true;
       let home2 = String.fromCharCode(112,97,103,101,115,95,101,95,48,0);
       let annerL = String.fromCharCode(106,115,116,114,105,110,103,95,97,95,51,49,0);
         home2 = "2";
         bootsplashj = !home2.endsWith(`${bootsplashj}`);
      while (annerL.includes(`${bootsplashj}`)) {
          let iconschedulez = String.fromCharCode(102,114,97,109,101,100,97,116,97,0);
          let user5: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,121,115,116,101,109,0),true ], [String.fromCharCode(99,95,53,53,95,115,97,118,101,0),true ]]);
          let release_fu = 3.0;
          let footballA = 3.0;
         bootsplashj = String.fromCharCode(115,0) == home2;
         iconschedulez = `${user5.size}`;
         user5 = new Map([[`${release_fu}`, parseInt(`${release_fu}`) - iconschedulez.length]]);
         footballA += parseFloat(`${iconschedulez.length / (Math.max(1, 9))}`);
         break;
      }
      while (!home2.endsWith(`${annerL.length}`)) {
          let predictionactivei = 5;
          let matchesr = 2.0;
          let shootyesgoal9 = String.fromCharCode(97,102,102,101,99,116,0);
          let detailE: Map<any, any> = new Map([[String.fromCharCode(101,116,104,101,114,0),false ], [String.fromCharCode(105,95,52,57,95,104,112,97,114,97,109,115,0),false ], [String.fromCharCode(115,109,117,115,104,0),false ]]);
         home2 = `${predictionactivei + 1}`;
         predictionactivei <<= Math.min(Math.abs(detailE.size % (Math.max(shootyesgoal9.length, 9))), 2);
         matchesr += parseFloat(`${shootyesgoal9.length}`);
         detailE = new Map([[shootyesgoal9, shootyesgoal9.length]]);
         break;
      }
          let qaagS = 5.0;
          let bannerM: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,100,95,117,95,56,57,0),819], [String.fromCharCode(100,101,109,97,110,100,0),699]]);
         annerL = `${1 >> (Math.min(4, home2.length))}`;
         qaagS /= Math.max(4, parseFloat(`${parseInt(`${qaagS}`) | 3}`));
         bannerM.set(`${qaagS}`, parseInt(`${qaagS}`));
       let iconclosewhiteM = true;
         home2 = `${home2.length * 1}`;
         home2 += `${home2.length}`;
      while (!iconclosewhiteM) {
         bootsplashj = home2.length <= 95;
         break;
      }
      storeB += `${q_centerJ.length - iconadslinkE.size}`;
   let androidw = storeB.length <= 6263629;
   do {
      storeB += `${(storeB == String.fromCharCode(120,0) ? parseInt(`${footballtrophyC}`) : storeB.length)}`;
      if (androidw) {
         break;
      }
   } while (((storeB.length + footballtrophyC) > 4.58 || (5 ^ storeB.length) > 4) && androidw);
      qaagH = new Map([[storeB, storeB.length]]);
   while (!storeB.includes(q_centerJ)) {
       let predictionarrowX = String.fromCharCode(98,117,116,111,110,0);
       let larged = true;
       let inactivel = 3.0;
       let lessB = String.fromCharCode(105,110,118,105,115,105,98,108,101,0);
       let iconnotificationnewO = String.fromCharCode(116,105,99,107,105,110,103,0);
      while ((4 & lessB.length) < 3 && (4 * lessB.length) < 2) {
         lessB += `${1 & parseInt(`${inactivel}`)}`;
         break;
      }
         lessB += `${predictionarrowX.length / 2}`;
      let einit_3gG = 9206621.0 <= inactivel;
      do {
         inactivel -= iconnotificationnewO.length;
         if (einit_3gG) {
            break;
         }
      } while (einit_3gG && (larged));
         lessB += `${iconnotificationnewO.length}`;
          let sinai = String.fromCharCode(116,104,105,114,100,0);
          let airbnbstar4 = String.fromCharCode(100,101,106,117,100,100,101,114,0);
         predictionarrowX = `${(lessB.length % (Math.max(4, (larged ? 4 : 2))))}`;
         sinai = `${airbnbstar4.length}`;
         airbnbstar4 = "2";
       let fieldX = String.fromCharCode(114,101,111,115,0);
       let giftn = String.fromCharCode(108,115,112,115,95,109,95,57,49,0);
         predictionarrowX = "3";
      for (let g = 0; g < 2; g++) {
         predictionarrowX += `${lessB.length}`;
      }
       let dplusM: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,105,110,103,95,98,95,50,49,0),467], [String.fromCharCode(111,100,101,114,110,95,105,95,49,49,0),154]]);
       let cornershootM: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,109,97,112,0),156], [String.fromCharCode(113,95,52,54,95,114,101,97,100,97,98,108,101,0),917]]);
      for (let y = 0; y < 3; y++) {
          let privilege6 = 2.0;
          let iconfeedbackG = String.fromCharCode(111,119,110,101,100,95,119,95,51,55,0);
          let countryb = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,0);
         cornershootM = new Map([[predictionarrowX, predictionarrowX.length]]);
         privilege6 -= countryb.length + 2;
         iconfeedbackG = `${(countryb == String.fromCharCode(69,0) ? countryb.length : iconfeedbackG.length)}`;
      }
         dplusM.set(predictionarrowX, (predictionarrowX == String.fromCharCode(99,0) ? predictionarrowX.length : iconnotificationnewO.length));
          let iconpipexpandu: Array<any> = [327, 342];
          let libavdevicen = 4.0;
         larged = giftn.length > 5;
         iconpipexpandu = [iconpipexpandu.length];
         libavdevicen -= parseFloat(`${parseInt(`${libavdevicen}`)}`);
      while (3 <= giftn.length) {
         larged = lessB.length == 31;
         break;
      }
      while (lessB != iconnotificationnewO) {
         iconnotificationnewO += `${iconnotificationnewO.length + 3}`;
         break;
      }
      if (4.75 > (4.36 / (Math.max(1, inactivel))) || 4.36 > (cornershootM.size / (Math.max(4, inactivel)))) {
          let gradlew7: Array<any> = [432, 548];
          let analyticsC = 2.0;
          let nalyticsX = String.fromCharCode(99,111,110,118,101,114,116,105,110,103,0);
          let basketballawayteam1: Map<any, any> = new Map([[String.fromCharCode(109,101,110,117,0),String.fromCharCode(99,101,110,116,114,101,0)], [String.fromCharCode(98,111,114,100,101,114,101,100,0),String.fromCharCode(98,117,99,107,101,116,0)], [String.fromCharCode(105,110,104,105,98,105,116,115,0),String.fromCharCode(97,114,109,111,110,121,95,52,95,52,55,0)]]);
          let circleC = 2.0;
         inactivel *= ((larged ? 2 : 2) % 2);
         gradlew7.push(gradlew7.length);
         analyticsC -= basketballawayteam1.size;
         nalyticsX = "1";
         basketballawayteam1.set(`${circleC}`, basketballawayteam1.size ^ 3);
         circleC -= parseFloat(`${nalyticsX.length - 3}`);
      }
      q_centerJ = `${(String.fromCharCode(117,0) == whiteq ? whiteq.length : parseInt(`${footballtrophyC}`))}`;
      break;
   }
      watch4 = `${qaagH.size}`;
      footballtrophyC /= Math.max(4, routerj.length);
   let libreactperfloggerjniL = routerj.length <= 8890597;
   do {
      routerj = [parseInt(`${linkh}`) + 3];
      if (libreactperfloggerjniL) {
         break;
      }
   } while (((5 + qaagH.size) >= 1 || (5 + routerj.length) >= 2) && libreactperfloggerjniL);
   while (3 >= (iconadslinkE.size & q_centerJ.length)) {
      q_centerJ = `${1 & middleG.length}`;
      break;
   }
      linkh *= parseFloat(`${parseInt(`${footballtrophyC}`) % (Math.max(middleG.length, 1))}`);
   if (iconadslinkE.size > q_centerJ.length) {
       let iconwechatu: Array<any> = [573, 138, 121];
       let libcxxcomponents4 = String.fromCharCode(100,114,97,119,116,101,120,116,0);
         libcxxcomponents4 += `${libcxxcomponents4.length % 2}`;
      let singaporeV = libcxxcomponents4 == String.fromCharCode(101,99,95,0);
      do {
         libcxxcomponents4 = `${libcxxcomponents4.length}`;
         if (singaporeV) {
            break;
         }
      } while (singaporeV && (2 >= libcxxcomponents4.length));
         iconwechatu.push(libcxxcomponents4.length);
      for (let i = 0; i < 2; i++) {
          let sortw = String.fromCharCode(100,111,108,98,121,0);
          let rulest: Array<any> = [344, 822];
          let trashx = 4;
         libcxxcomponents4 += `${libcxxcomponents4.length * iconwechatu.length}`;
         sortw += "1";
         rulest.push(rulest.length);
         trashx -= sortw.length ^ 2;
      }
       let register_10Z = String.fromCharCode(102,95,50,95,118,105,101,119,0);
       let predictionarroww = String.fromCharCode(112,111,115,116,105,110,103,0);
       let cross0: Array<any> = [814, 120];
       let iconpipexpandY: Array<any> = [String.fromCharCode(114,105,112,101,109,100,0), String.fromCharCode(117,110,108,105,109,105,116,101,100,0)];
      q_centerJ += `${libcxxcomponents4.length % 2}`;
   }
      linkh -= parseFloat(`${1}`);
   for (let t = 0; t < 2; t++) {
      middleG = "3";
   }
   if (3.6 >= (footballtrophyC - linkh) && 3.6 >= (footballtrophyC - linkh)) {
       let neona = 0;
       let abidetect4 = String.fromCharCode(112,117,112,117,112,0);
       let greyQ = String.fromCharCode(97,100,97,112,116,95,55,95,57,51,0);
       let minis: Map<any, any> = new Map([[String.fromCharCode(97,95,57,53,95,108,111,119,112,97,115,115,0),450], [String.fromCharCode(104,95,57,54,95,100,101,99,111,100,101,0),69]]);
       let graphicsk = true;
      for (let s = 0; s < 3; s++) {
         neona %= Math.max(((graphicsk ? 3 : 5)), 2);
      }
      while (!graphicsk) {
         greyQ += `${minis.size}`;
         break;
      }
         graphicsk = 84 >= neona;
          let upgradeV = 5;
         greyQ += `${3 + neona}`;
         upgradeV += upgradeV % 1;
       let profileactiveO = 2;
       let roundp = 5;
          let actionJ = String.fromCharCode(109,97,116,99,104,95,109,95,55,57,0);
          let handler1 = 1.0;
         greyQ = `${1 << (Math.min(4, Math.abs(profileactiveO)))}`;
         actionJ += `${parseInt(`${handler1}`) << (Math.min(Math.abs(3), 5))}`;
         handler1 -= (parseFloat(`${actionJ == String.fromCharCode(116,0) ? actionJ.length : parseInt(`${handler1}`)}`));
      let tooltipse = graphicsk ? !graphicsk : graphicsk;
      do {
         graphicsk = 48 < profileactiveO;
         if (tooltipse) {
            break;
         }
      } while (tooltipse && (neona <= 1 && (neona & 1) <= 1));
      while (3 < (roundp ^ 5)) {
         roundp >>= Math.min(2, abidetect4.length);
         break;
      }
         greyQ += `${neona >> (Math.min(abidetect4.length, 4))}`;
         minis.set(`${profileactiveO}`, minis.size >> (Math.min(Math.abs(1), 2)));
          let baselinet = 4.0;
          let downH = 4.0;
         minis = new Map([[abidetect4, (1 + (graphicsk ? 4 : 3))]]);
         baselinet -= parseInt(`${baselinet}`) % (Math.max(parseInt(`${downH}`), 8));
         downH -= parseInt(`${downH}`) << (Math.min(5, Math.abs(1)));
         neona %= Math.max(2, 1 & roundp);
         neona /= Math.max(abidetect4.length & 3, 2);
       let membershipd = 0;
       let champione = 0;
          let linkZ = String.fromCharCode(107,115,101,116,0);
          let large9 = String.fromCharCode(109,95,53,55,95,99,111,100,101,115,0);
          let iconlogout6 = 4.0;
         champione *= 2;
         linkZ = `${large9.length}`;
         large9 = `${large9.length >> (Math.min(Math.abs(3), 2))}`;
         iconlogout6 += parseFloat(`${linkZ.length & 3}`);
      linkh += parseFloat(`${whiteq.length}`);
   }
       let attributedstringp = 3;
       let logouserX: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,0),String.fromCharCode(114,101,118,101,114,98,0)], [String.fromCharCode(108,97,116,101,115,116,95,99,95,52,50,0),String.fromCharCode(101,95,50,54,95,114,97,116,101,115,0)], [String.fromCharCode(99,114,108,105,115,115,117,101,114,0),String.fromCharCode(99,111,110,118,95,101,95,55,52,0)]]);
       let launchf = String.fromCharCode(99,111,112,121,109,0);
          let codeR: Array<any> = [108, 829];
          let vignettet = String.fromCharCode(100,111,99,108,105,115,116,0);
          let animationsu: Array<any> = [String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,114,95,56,0), String.fromCharCode(110,95,52,95,118,116,97,98,0), String.fromCharCode(116,97,103,103,105,110,103,0)];
         launchf += `${launchf.length & animationsu.length}`;
         codeR.push(vignettet.length);
         vignettet += "2";
         animationsu.push(vignettet.length ^ codeR.length);
          let infow = 4.0;
         attributedstringp %= Math.max(1, 2 / (Math.max(10, attributedstringp)));
         infow /= Math.max(2 << (Math.min(Math.abs(parseInt(`${infow}`)), 4)), 4);
      for (let v = 0; v < 1; v++) {
          let frame_sn = String.fromCharCode(99,111,108,108,105,100,101,114,0);
          let tooltipsn = 3.0;
          let assistl = false;
          let updatesp = 4.0;
         attributedstringp += 2 + parseInt(`${updatesp}`);
         frame_sn += `${frame_sn.length}`;
         tooltipsn += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${tooltipsn}`)), 1))}`);
         assistl = 70.9 < tooltipsn || String.fromCharCode(107,0) == frame_sn;
         updatesp *= ((assistl ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${tooltipsn}`)), 4)));
      }
      let defaultlogoC = 8792484 >= logouserX.size;
      do {
          let thailand8 = String.fromCharCode(99,111,109,112,111,115,101,100,0);
          let canvasD = true;
          let helper2 = 1.0;
         logouserX.set(launchf, launchf.length);
         thailand8 = `${((canvasD ? 1 : 1) / (Math.max(parseInt(`${helper2}`), 6)))}`;
         canvasD = thailand8 == String.fromCharCode(83,0);
         helper2 -= (parseFloat(`${String.fromCharCode(95,0) == thailand8 ? (canvasD ? 4 : 3) : thailand8.length}`));
         if (defaultlogoC) {
            break;
         }
      } while (((launchf.length >> (Math.min(Math.abs(1), 5))) > 1 && 2 > (1 >> (Math.min(5, Math.abs(logouserX.size))))) && defaultlogoC);
          let greenA = 3.0;
         logouserX = new Map([[`${logouserX.size}`, logouserX.size]]);
         greenA += parseFloat(`${parseInt(`${greenA}`)}`);
         attributedstringp -= logouserX.size;
      for (let u = 0; u < 2; u++) {
         attributedstringp /= Math.max(3, 5);
      }
      let libjsinspectorN = String.fromCharCode(118,103,103,98,0) == launchf;
      do {
         launchf = `${attributedstringp}`;
         if (libjsinspectorN) {
            break;
         }
      } while (libjsinspectorN && ((attributedstringp - 5) < 2 || (attributedstringp - 5) < 2));
      let nativev = attributedstringp <= 9449111;
      do {
         attributedstringp &= attributedstringp % (Math.max(launchf.length, 8));
         if (nativev) {
            break;
         }
      } while ((2 <= attributedstringp) && nativev);
      linkh += parseFloat(`${watch4.length << (Math.min(Math.abs(3), 4))}`);
       let linez = 3;
         linez += linez / (Math.max(6, linez));
      while (3 <= (linez << (Math.min(Math.abs(1), 4))) && 1 <= (linez << (Math.min(3, Math.abs(linez))))) {
          let internetD: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,0),298], [String.fromCharCode(112,95,49,95,108,111,99,107,101,100,0),600], [String.fromCharCode(115,117,110,114,105,115,101,95,116,95,52,48,0),987]]);
         linez >>= Math.min(1, Math.abs(3));
         internetD.set(`${internetD.size}`, 1);
         break;
      }
      if (2 < (linez & 5) || (linez & 5) < 2) {
         linez ^= linez - linez;
      }
      emojiV = `${storeB.length % 1}`;
       let basketballH = String.fromCharCode(115,117,98,115,116,114,105,110,103,0);
      let datau = String.fromCharCode(100,49,117,51,116,109,0) == basketballH;
      do {
         basketballH += `${basketballH.length * basketballH.length}`;
         if (datau) {
            break;
         }
      } while (datau && (!basketballH.endsWith(`${basketballH.length}`)));
      for (let p = 0; p < 3; p++) {
         basketballH = `${basketballH.length}`;
      }
      let signinupY = String.fromCharCode(106,54,102,48,113,105,0) == basketballH;
      do {
         basketballH = `${basketballH.length - 3}`;
         if (signinupY) {
            break;
         }
      } while (signinupY && (basketballH == basketballH));
      middleG = `${parseInt(`${linkh}`)}`;
       let nalyticsy: Map<any, any> = new Map([[String.fromCharCode(99,104,97,105,110,105,100,0),197], [String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,56,95,49,48,0),465]]);
       let window_o7f = String.fromCharCode(115,119,105,102,116,0);
         window_o7f = `${1 << (Math.min(3, Math.abs(nalyticsy.size)))}`;
      let modalx = nalyticsy.size <= 8091573;
      do {
         nalyticsy.set(`${window_o7f}`, 1 | nalyticsy.size);
         if (modalx) {
            break;
         }
      } while ((nalyticsy.size >= window_o7f.length) && modalx);
       let filedD = 0.0;
       let hongkongv = 5.0;
          let confirmationR = 0.0;
          let footballfiledlayoutj: Array<any> = [String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,0), String.fromCharCode(97,118,97,105,108,97,98,108,101,0)];
          let notificationfillemptyz = String.fromCharCode(108,111,110,0);
         filedD += parseFloat(`${footballfiledlayoutj.length}`);
         confirmationR -= parseFloat(`${notificationfillemptyz.length}`);
         footballfiledlayoutj.push(parseInt(`${confirmationR}`));
         notificationfillemptyz += `${(notificationfillemptyz == String.fromCharCode(119,0) ? parseInt(`${confirmationR}`) : notificationfillemptyz.length)}`;
         window_o7f = "2";
      for (let g = 0; g < 3; g++) {
         window_o7f = `${parseInt(`${hongkongv}`) / (Math.max(window_o7f.length, 6))}`;
      }
      linkh *= parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${linkh}`))))}`);
   for (let v = 0; v < 3; v++) {
      watch4 = `${2 ^ parseInt(`${linkh}`)}`;
   }
      whiteq = `${routerj.length}`;
      emojiV += `${iconadslinkE.size}`;
      middleG += "1";

        mayi_TrashBootsplash.toName('uploadHistory');
    }

    const onUploadPress = async () => {
       let iconsharefriendsH = false;
    let exampleimagez = String.fromCharCode(97,95,50,52,95,116,104,101,111,114,97,0);
    let penaltymatchiconD = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,0);
    let main_jL = String.fromCharCode(97,110,105,109,0);
    let rewindS = String.fromCharCode(112,95,55,53,95,114,101,99,117,114,115,105,111,110,0);
    let inactiveX: Array<any> = [738, 400];
    let stations6: Array<any> = [376, 274, 406];
    let plash9 = 3.0;
    let found6 = String.fromCharCode(115,104,97,114,112,101,110,0);
    let mbridgeW = String.fromCharCode(101,120,101,99,0);
    let iconpointscoree = false;
    let matchinactiveb = String.fromCharCode(101,110,103,108,105,115,104,95,54,95,54,53,0);
   while (inactiveX.includes(stations6.length)) {
      stations6 = [2];
      break;
   }
      rewindS += "1";

        if (mayi_Gift.isGuest(userState.user)) {

   while ((mbridgeW.length ^ inactiveX.length) >= 5) {
      inactiveX = [3];
      break;
   }
      rewindS = `${found6.length}`;
            dispatch(showLoginAction());

   while (!iconsharefriendsH && exampleimagez.length >= 2) {
       let toponm = String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,0);
         toponm += `${toponm.length}`;
         toponm += `${1 ^ toponm.length}`;
      for (let z = 0; z < 2; z++) {
         toponm += "2";
      }
      exampleimagez += `${(exampleimagez == String.fromCharCode(54,0) ? penaltymatchiconD.length : exampleimagez.length)}`;
      break;
   }
       let dataO = 3.0;
      if (dataO == 2.53) {
         dataO -= parseFloat(`${parseInt(`${dataO}`)}`);
      }
       let libavdeviceJ = false;
         dataO -= parseFloat(`${parseInt(`${dataO}`) & 2}`);
      found6 += `${main_jL.length * 2}`;
            return;
        }

        try {

      found6 = `${parseInt(`${plash9}`)}`;
      mbridgeW += `${mbridgeW.length | 1}`;
            setVideoSelected(undefined);

      exampleimagez += `${3 / (Math.max(5, found6.length))}`;
      stations6 = [(found6 == String.fromCharCode(88,0) ? mbridgeW.length : found6.length)];

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

      plash9 *= (parseFloat(`${mbridgeW == String.fromCharCode(55,0) ? mbridgeW.length : found6.length}`));
      found6 = `${found6.length ^ rewindS.length}`;

            if (result.errorMessage) {

       let stepG = 5;
       let matchdetailbgK = String.fromCharCode(113,95,49,95,101,120,116,114,97,99,116,0);
       let customP = 5;
      for (let t = 0; t < 3; t++) {
          let libavdeviceq: Map<any, any> = new Map([[String.fromCharCode(113,95,54,54,95,114,101,115,101,116,0),906], [String.fromCharCode(100,95,50,95,117,115,114,99,0),868]]);
          let referrerv = 2.0;
         matchdetailbgK += `${customP}`;
         libavdeviceq.set(`${referrerv}`, parseInt(`${referrerv}`));
      }
      for (let m = 0; m < 3; m++) {
         matchdetailbgK = `${1 | matchdetailbgK.length}`;
      }
         matchdetailbgK = `${matchdetailbgK.length}`;
      if (matchdetailbgK.length <= 5) {
         stepG >>= Math.min(3, matchdetailbgK.length);
      }
         stepG /= Math.max(stepG - matchdetailbgK.length, 3);
      for (let i = 0; i < 2; i++) {
         stepG <<= Math.min(matchdetailbgK.length, 3);
      }
          let skipY = 4;
         matchdetailbgK += "2";
         skipY += 1 * skipY;
      while (2 > (5 << (Math.min(2, matchdetailbgK.length))) || (5 << (Math.min(5, Math.abs(stepG)))) > 4) {
         matchdetailbgK += `${matchdetailbgK.length << (Math.min(5, Math.abs(stepG)))}`;
         break;
      }
      let interstitialo = 8846027 <= matchdetailbgK.length;
      do {
         matchdetailbgK = `${matchdetailbgK.length / (Math.max(2, 1))}`;
         if (interstitialo) {
            break;
         }
      } while (interstitialo && (5 < (stepG * matchdetailbgK.length) && 1 < (stepG * 5)));
      plash9 /= Math.max(1, parseFloat(`${rewindS.length}`));
   for (let f = 0; f < 1; f++) {
      found6 = `${main_jL.length * 2}`;
   }
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {

      inactiveX.push((rewindS == String.fromCharCode(69,0) ? mbridgeW.length : rewindS.length));
   while (!penaltymatchiconD.endsWith(exampleimagez)) {
      penaltymatchiconD += `${penaltymatchiconD.length / (Math.max(1, exampleimagez.length))}`;
      break;
   }
                setVideoSelected(result.assets[0]);

       let flipperg = String.fromCharCode(105,110,115,101,114,116,115,0);
       let usernameU = true;
       let goals = 0;
         flipperg = `${((usernameU ? 1 : 1) + flipperg.length)}`;
      exampleimagez += `${parseInt(`${plash9}`) & exampleimagez.length}`;
      mbridgeW = `${mbridgeW.length % (Math.max(1, 3))}`;
                setUploadProgress(0);

      inactiveX.push(2);
   while (!penaltymatchiconD.startsWith(mbridgeW)) {
      penaltymatchiconD = `${inactiveX.length >> (Math.min(found6.length, 2))}`;
      break;
   }

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);

   if (!main_jL.startsWith(penaltymatchiconD)) {
      penaltymatchiconD += `${penaltymatchiconD.length}`;
   }
      inactiveX.push(inactiveX.length);


                const uploadTimer = setInterval(() => {

   let update_kP = String.fromCharCode(56,50,122,113,100,120,116,119,52,115,0) == exampleimagez;
   do {
      exampleimagez += `${penaltymatchiconD.length & 2}`;
      if (update_kP) {
         break;
      }
   } while ((main_jL == exampleimagez) && update_kP);
   for (let p = 0; p < 3; p++) {
       let selectedw = 5.0;
      while ((1.84 * selectedw) == 3.60 && 4.97 == (1.84 * selectedw)) {
         selectedw /= Math.max(5, parseInt(`${selectedw}`));
         break;
      }
      for (let w = 0; w < 1; w++) {
         selectedw += 1 % (Math.max(2, parseInt(`${selectedw}`)));
      }
          let spinner_ = String.fromCharCode(121,95,55,54,95,112,114,101,118,105,111,117,115,108,121,0);
          let tooltips4 = 4.0;
         selectedw *= parseInt(`${selectedw}`) | 1;
         spinner_ = `${spinner_.length}`;
         tooltips4 -= parseFloat(`${1}`);
      plash9 *= parseFloat(`${mbridgeW.length ^ stations6.length}`);
   }
                    setUploadProgress(prev => {

      found6 = "2";
   let predictionbannersharedO = mbridgeW == String.fromCharCode(121,102,100,52,103,97,0);
   do {
      mbridgeW += "1";
      if (predictionbannersharedO) {
         break;
      }
   } while (predictionbannersharedO && (2.61 < (plash9 + 1.94) || (mbridgeW.length + 1) < 2));
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

   while (exampleimagez.startsWith(`${iconsharefriendsH}`)) {
      exampleimagez += `${penaltymatchiconD.length - rewindS.length}`;
      break;
   }
      stations6 = [found6.length];

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
       let gifgoalbgw = String.fromCharCode(109,112,115,117,98,0);
    let checkboxi: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,116,105,111,110,0),731], [String.fromCharCode(118,95,55,57,0),547], [String.fromCharCode(119,95,48,95,100,111,117,98,108,101,115,115,116,114,0),810]]);
    let playo: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,111,97,100,0),String.fromCharCode(102,116,115,97,117,120,95,110,95,53,56,0)], [String.fromCharCode(111,95,57,55,95,111,115,109,111,115,0),String.fromCharCode(101,120,112,114,0)]]);
    let untickt = String.fromCharCode(122,111,111,109,101,100,0);
    let buttonV = String.fromCharCode(99,95,56,95,122,111,110,101,115,0);
    let suggestion_ = 0.0;
    let mimeP = String.fromCharCode(118,111,119,101,108,0);
    let tempnodatagifn = 1.0;
    let vignettee = String.fromCharCode(116,104,105,99,107,110,101,115,115,0);
    let darke: Array<any> = [String.fromCharCode(102,95,57,55,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0), String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,99,95,54,57,0), String.fromCharCode(116,95,49,52,95,109,108,111,99,107,0)];
    let executorr = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,55,95,53,49,0);
    let styleX = String.fromCharCode(116,95,51,55,95,101,98,109,108,0);
    let darkL = 2.0;
    let projectF = false;
    let pointc: Array<any> = [46, 701];
      buttonV = "3";
   while (4.96 > (suggestion_ / 5.68)) {
      buttonV = `${checkboxi.size}`;
      break;
   }
   let libfolly8 = executorr.length >= 9864257;
   do {
      executorr += `${gifgoalbgw.length - 1}`;
      if (libfolly8) {
         break;
      }
   } while (libfolly8 && ((1.19 * suggestion_) <= 4.32 && (suggestion_ * parseFloat(`${executorr.length}`)) <= 1.19));

        if (Platform.OS === 'ios') {

   for (let p = 0; p < 1; p++) {
      tempnodatagifn /= Math.max(2, gifgoalbgw.length - parseInt(`${tempnodatagifn}`));
   }
      tempnodatagifn /= Math.max(parseInt(`${tempnodatagifn}`) ^ vignettee.length, 4);
      buttonV = `${(mimeP == String.fromCharCode(112,0) ? darke.length : mimeP.length)}`;
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {

   while (parseInt(`${tempnodatagifn}`) > untickt.length) {
      tempnodatagifn += parseInt(`${darkL}`);
      break;
   }
   for (let w = 0; w < 1; w++) {
      darke.push(1 * darke.length);
   }
   let unreado = String.fromCharCode(118,52,57,0) == gifgoalbgw;
   do {
       let penaltymatchiconk = 0;
       let langkey5 = 5.0;
      let rightq = 7532105.0 <= langkey5;
      do {
          let utilsI = false;
          let selectionN = 2;
          let areaa: Map<any, any> = new Map([[String.fromCharCode(105,113,109,112,0),121], [String.fromCharCode(119,101,105,103,104,116,101,100,0),864]]);
          let predictionbuttonP = 0;
          let listO: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,100,112,107,103,0),530], [String.fromCharCode(114,105,118,97,116,101,0),463], [String.fromCharCode(110,95,51,55,95,110,111,110,110,101,103,97,116,105,118,101,0),832]]);
         langkey5 /= Math.max(2, parseFloat(`${penaltymatchiconk}`));
         utilsI = !utilsI || 39 == selectionN;
         selectionN -= listO.size % 2;
         areaa = new Map([[`${areaa.size}`, selectionN]]);
         predictionbuttonP ^= areaa.size;
         listO.set(`${predictionbuttonP}`, 2 + predictionbuttonP);
         if (rightq) {
            break;
         }
      } while (rightq && (4.3 < (langkey5 * penaltymatchiconk)));
         penaltymatchiconk <<= Math.min(4, Math.abs(2));
          let stylesh = 4.0;
         langkey5 += parseFloat(`${parseInt(`${stylesh}`)}`);
       let t_centerD: Map<any, any> = new Map([[String.fromCharCode(99,95,52,51,95,100,99,112,114,101,100,0),true ], [String.fromCharCode(97,114,101,97,95,97,95,57,52,0),false ], [String.fromCharCode(98,114,107,116,105,109,101,103,109,0),true ]]);
      if ((langkey5 / 2.56) >= 2.28) {
          let canvasc: Array<any> = [String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,0), String.fromCharCode(99,111,109,112,97,110,121,0)];
          let reactnativeratingsp = String.fromCharCode(116,104,114,111,116,116,108,101,0);
         langkey5 -= parseFloat(`${3}`);
         canvasc = [3 * canvasc.length];
         reactnativeratingsp += `${reactnativeratingsp.length}`;
      }
      while (3.6 == (2.54 - langkey5)) {
          let shooty = 1.0;
          let unselectedZ: Array<any> = [String.fromCharCode(100,114,97,105,110,0), String.fromCharCode(111,119,110,0), String.fromCharCode(117,115,101,0)];
          let mappingQ = String.fromCharCode(120,95,52,54,95,98,115,111,110,0);
         langkey5 -= parseFloat(`${mappingQ.length}`);
         shooty -= parseFloat(`${parseInt(`${shooty}`) * unselectedZ.length}`);
         unselectedZ.push(unselectedZ.length | 2);
         mappingQ = "2";
         break;
      }
      gifgoalbgw += `${(untickt == String.fromCharCode(57,0) ? parseInt(`${langkey5}`) : untickt.length)}`;
      if (unreado) {
         break;
      }
   } while ((3.82 < tempnodatagifn) && unreado);
                if (result == RESULTS.GRANTED) {

      gifgoalbgw += `${vignettee.length}`;
      gifgoalbgw = `${(buttonV == String.fromCharCode(118,0) ? darke.length : buttonV.length)}`;
   for (let z = 0; z < 1; z++) {
      darkL *= buttonV.length;
   }
                    setGrantPhotePermission(true);
                } else {

      darke = [buttonV.length];
   let expiredP = styleX.length >= 4955275;
   do {
      styleX = `${playo.size % 3}`;
      if (expiredP) {
         break;
      }
   } while ((2 == playo.size) && expiredP);
   while ((vignettee.length % 1) > 2) {
       let iconclosewhitebgB = String.fromCharCode(112,114,101,116,116,121,0);
       let libfileF = 4.0;
         libfileF /= Math.max(1, 2 % (Math.max(4, parseInt(`${libfileF}`))));
          let subsz = String.fromCharCode(100,97,112,0);
          let down6: Map<any, any> = new Map([[String.fromCharCode(100,118,118,105,100,101,111,0),true ], [String.fromCharCode(111,118,101,114,108,97,112,0),false ]]);
         libfileF += down6.size;
         subsz += `${(String.fromCharCode(48,0) == subsz ? subsz.length : subsz.length)}`;
         down6.set(subsz, subsz.length);
       let balls = String.fromCharCode(114,101,99,111,114,100,105,110,103,95,115,95,54,53,0);
       let benefitN = String.fromCharCode(102,95,57,95,115,116,114,101,114,114,111,114,0);
         libfileF *= parseInt(`${libfileF}`) | iconclosewhitebgB.length;
       let umeng2 = 0.0;
         iconclosewhitebgB = `${balls.length}`;
      playo.set(styleX, 1);
      break;
   }

                    setGrantPhotePermission(false);

       let volumeS = String.fromCharCode(99,95,50,50,95,108,101,115,115,0);
       let iconrightorangeX = 2;
       let colorsE = 1.0;
         iconrightorangeX *= 1 * parseInt(`${colorsE}`);
          let mountingn = 2;
         iconrightorangeX /= Math.max(5, 2 >> (Math.min(4, volumeS.length)));
         mountingn &= mountingn / (Math.max(2, 5));
       let libjsijniprofilern = 0.0;
       let libjsinspectorq = 0.0;
      let template_4J = iconrightorangeX >= 6369019;
      do {
         iconrightorangeX += 1 + parseInt(`${libjsinspectorq}`);
         if (template_4J) {
            break;
         }
      } while (template_4J && (3 < (iconrightorangeX ^ 3)));
         libjsinspectorq /= Math.max(1 * parseInt(`${libjsinspectorq}`), 3);
      for (let n = 0; n < 1; n++) {
         iconrightorangeX >>= Math.min(3, Math.abs(parseInt(`${libjsinspectorq}`) * 1));
      }
      let infoJ = libjsijniprofilern <= 8941940.0;
      do {
         libjsijniprofilern -= volumeS.length;
         if (infoJ) {
            break;
         }
      } while (((libjsinspectorq / (Math.max(1.62, 2))) == 5.61 && (libjsinspectorq / (Math.max(libjsijniprofilern, 2))) == 1.62) && infoJ);
       let predictionbutton3: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,115,0),true ], [String.fromCharCode(115,116,114,101,110,103,116,104,115,0),true ], [String.fromCharCode(120,95,57,50,95,110,116,104,0),false ]]);
      for (let x = 0; x < 1; x++) {
         libjsinspectorq -= iconrightorangeX - predictionbutton3.size;
      }
      darke.push(1 | parseInt(`${tempnodatagifn}`));
       let otherN = 0.0;
       let ajaxr = String.fromCharCode(117,110,99,111,109,112,97,99,116,0);
       let sigmobk = 0;
      if ((ajaxr.length + 2) > 1 || (ajaxr.length & 2) > 1) {
         otherN += ajaxr.length >> (Math.min(3, Math.abs(parseInt(`${otherN}`))));
      }
      if (otherN >= 2.45) {
         otherN *= 2;
      }
       let temperatureq = true;
      for (let i = 0; i < 3; i++) {
          let iconuser3 = 2.0;
         otherN += 2;
         iconuser3 += parseInt(`${iconuser3}`);
      }
         sigmobk ^= ajaxr.length % (Math.max(2, 3));
         sigmobk *= 1 ^ ajaxr.length;
       let manifestz = String.fromCharCode(101,110,115,117,114,101,100,0);
       let iconadslinkd = String.fromCharCode(107,95,51,50,95,112,114,111,109,112,101,103,0);
      for (let v = 0; v < 2; v++) {
         ajaxr += `${iconadslinkd.length + ajaxr.length}`;
      }
      for (let d = 0; d < 3; d++) {
         temperatureq = ajaxr.length > 37;
      }
      gifgoalbgw += `${playo.size}`;
      styleX += `${mimeP.length}`;
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
       let guidev = String.fromCharCode(115,99,114,111,108,108,101,114,0);
    let helper3: Array<any> = [265, 255];
    let livet = 2.0;
    let stylesl: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,0),902], [String.fromCharCode(118,101,114,115,105,111,110,115,0),24], [String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,0),630]]);
    let icondefaultthumbnaili: Map<any, any> = new Map([[String.fromCharCode(98,105,116,97,108,108,111,99,0),String.fromCharCode(115,116,114,105,112,112,101,100,0)], [String.fromCharCode(117,95,57,57,95,115,116,114,108,99,97,116,0),String.fromCharCode(109,97,103,121,95,104,95,57,56,0)]]);
    let acceptedQ = String.fromCharCode(110,95,49,55,95,100,101,99,111,109,112,114,101,115,115,0);
    let uploadQ = true;
    let active1 = String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,0);
    let giftF = 0.0;
    let commento: Array<any> = [681, 532, 577];
    let update_vdL = String.fromCharCode(119,111,114,100,115,0);
      uploadQ = (((uploadQ ? acceptedQ.length : 31) + acceptedQ.length) == 31);
   for (let t = 0; t < 3; t++) {
      acceptedQ = `${1 * icondefaultthumbnaili.size}`;
   }
      icondefaultthumbnaili = new Map([[`${livet}`, parseInt(`${livet}`) - 1]]);
   for (let c = 0; c < 3; c++) {
       let private_7B = 1.0;
       let privilegeD: Array<any> = [923, 410, 776];
      let iconclosewhitebg9 = 7627535.0 <= private_7B;
      do {
          let update_xd5 = String.fromCharCode(115,116,114,105,100,101,98,95,101,95,53,48,0);
         private_7B *= parseInt(`${private_7B}`) ^ privilegeD.length;
         update_xd5 += `${(String.fromCharCode(119,0) == update_xd5 ? update_xd5.length : update_xd5.length)}`;
         if (iconclosewhitebg9) {
            break;
         }
      } while ((4 >= privilegeD.length) && iconclosewhitebg9);
      while ((privilegeD.length - 5) == 1 || 1 == (privilegeD.length + 5)) {
         private_7B *= parseInt(`${private_7B}`) + 2;
         break;
      }
         privilegeD = [privilegeD.length - 2];
          let eighteenx = 3;
         privilegeD.push(privilegeD.length);
         eighteenx -= 2 << (Math.min(3, Math.abs(eighteenx)));
         private_7B += 1;
      if ((privilegeD.length + private_7B) <= 3.67 || (3.67 + private_7B) <= 3.1) {
         privilegeD.push(parseInt(`${private_7B}`) % (Math.max(privilegeD.length, 1)));
      }
      livet -= parseFloat(`${2}`);
   }
      uploadQ = String.fromCharCode(57,0) == guidev;
       let selectY = false;
       let interstitialy = true;
      if (interstitialy || !selectY) {
         selectY = !interstitialy;
      }
          let club2 = String.fromCharCode(111,118,101,114,117,115,101,95,110,95,54,0);
          let teamL: Array<any> = [831, 841];
          let qaag2: Array<any> = [String.fromCharCode(115,101,113,118,105,100,101,111,0), String.fromCharCode(99,111,110,115,116,97,110,116,0)];
         interstitialy = qaag2.length == teamL.length;
         club2 = `${club2.length + club2.length}`;
         teamL = [club2.length];
      livet *= parseFloat(`${3}`);
      icondefaultthumbnaili = new Map([[`${stylesl.size}`, icondefaultthumbnaili.size]]);
      giftF -= acceptedQ.length & 1;
   let logouserf = uploadQ ? !uploadQ : uploadQ;
   do {
      uploadQ = ((icondefaultthumbnaili.size - (!uploadQ ? icondefaultthumbnaili.size : 75)) == 2);
      if (logouserf) {
         break;
      }
   } while ((4 > helper3.length) && logouserf);
   for (let w = 0; w < 3; w++) {
      uploadQ = icondefaultthumbnaili.size >= 40 || guidev == String.fromCharCode(89,0);
   }
   let scorepopsoundZ = 9502774 <= acceptedQ.length;
   do {
      acceptedQ = `${icondefaultthumbnaili.size}`;
      if (scorepopsoundZ) {
         break;
      }
   } while (scorepopsoundZ && (4 > (3 - acceptedQ.length) || 2 > (3 - icondefaultthumbnaili.size)));
      icondefaultthumbnaili = new Map([[active1, acceptedQ.length]]);
   let nalyticsa = acceptedQ.length >= 6457643;
   do {
      acceptedQ += `${1 * helper3.length}`;
      if (nalyticsa) {
         break;
      }
   } while ((acceptedQ.endsWith(`${stylesl.size}`)) && nalyticsa);
   while (uploadQ) {
       let goala: Array<any> = [128, 302];
       let applicationT = 0.0;
       let coreX = String.fromCharCode(107,95,54,56,95,106,99,109,97,115,116,101,114,0);
          let flipperw = 4.0;
          let unread5 = 1.0;
          let dialogU: Array<any> = [406, 165];
         coreX += `${(coreX == String.fromCharCode(51,0) ? coreX.length : dialogU.length)}`;
         flipperw -= parseFloat(`${parseInt(`${unread5}`) * 1}`);
         unread5 -= parseInt(`${flipperw}`) | parseInt(`${unread5}`);
         dialogU = [2 & parseInt(`${flipperw}`)];
         coreX = `${coreX.length ^ 1}`;
      for (let v = 0; v < 3; v++) {
         applicationT += goala.length;
      }
      for (let t = 0; t < 2; t++) {
         applicationT -= parseInt(`${applicationT}`);
      }
       let dialogv = true;
          let detailsf = String.fromCharCode(115,121,109,109,101,116,114,105,99,0);
          let privacyu = String.fromCharCode(118,101,114,105,102,105,101,100,0);
          let j_manager4: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,105,115,101,120,112,108,97,105,110,0),518], [String.fromCharCode(108,97,116,105,116,117,100,101,0),832]]);
         dialogv = detailsf == String.fromCharCode(69,0);
         detailsf += "2";
         privacyu += "2";
         j_manager4 = new Map([[`${j_manager4.size}`, (privacyu == String.fromCharCode(110,0) ? j_manager4.size : privacyu.length)]]);
          let internetU: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,103,101,100,0),66], [String.fromCharCode(116,111,111,108,99,104,97,105,110,0),929], [String.fromCharCode(99,95,57,48,95,117,116,116,101,114,97,110,99,101,0),497]]);
          let pangley = 4.0;
          let starb = 4.0;
         coreX += `${parseInt(`${applicationT}`)}`;
         internetU = new Map([[`${internetU.size}`, internetU.size + parseInt(`${pangley}`)]]);
         pangley += parseInt(`${starb}`) + 2;
         starb /= Math.max(2, parseFloat(`${internetU.size}`));
          let rewardH = String.fromCharCode(106,99,104,117,102,102,95,121,95,52,49,0);
          let iconclosewhiteA: Map<any, any> = new Map([[String.fromCharCode(99,97,105,112,0),985], [String.fromCharCode(103,108,111,98,97,108,116,101,109,95,114,95,51,52,0),957], [String.fromCharCode(109,95,55,53,95,116,103,101,116,0),356]]);
         coreX = "2";
         rewardH = `${iconclosewhiteA.size ^ rewardH.length}`;
         iconclosewhiteA = new Map([[`${iconclosewhiteA.size}`, iconclosewhiteA.size]]);
      if (dialogv) {
          let resendS = String.fromCharCode(114,101,110,100,101,114,101,114,115,0);
          let sourcex = false;
          let matchinactive7 = String.fromCharCode(108,115,104,105,102,116,0);
         dialogv = sourcex;
         resendS += `${matchinactive7.length}`;
         matchinactive7 += `${2 >> (Math.min(3, matchinactive7.length))}`;
      }
      uploadQ = (icondefaultthumbnaili.size % (Math.max(9, active1.length))) >= 43;
      break;
   }
   while (helper3.includes(commento.length)) {
      commento.push(helper3.length);
      break;
   }
   for (let y = 0; y < 2; y++) {
      icondefaultthumbnaili = new Map([[`${commento.length}`, commento.length + acceptedQ.length]]);
   }

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
       let sellmathbackgroundo = String.fromCharCode(115,111,108,118,101,0);
    let analyticsI = 3.0;
    let relatedE: Array<any> = [799, 309, 590];
    let settingR: Array<any> = [String.fromCharCode(112,97,117,115,101,100,0), String.fromCharCode(99,104,97,114,97,99,116,101,114,0)];
    let cornerkickP = false;
    let miniK = 1;
    let codegenC = String.fromCharCode(105,101,110,116,114,121,0);
    let volumek = 2.0;
    let libjsinspectorI = String.fromCharCode(101,120,112,108,105,99,105,116,0);
    let screenF: Array<any> = [206, 68, 791];
   while ((5 + relatedE.length) > 3 || 4.99 > (analyticsI - relatedE.length)) {
      analyticsI -= codegenC.length;
      break;
   }
   if (relatedE.includes(analyticsI)) {
      relatedE = [codegenC.length / (Math.max(3, 3))];
   }
      codegenC += `${(String.fromCharCode(106,0) == sellmathbackgroundo ? settingR.length : sellmathbackgroundo.length)}`;
      codegenC = `${settingR.length % (Math.max(relatedE.length, 4))}`;
      relatedE.push(settingR.length % 1);
   if ((2.98 / (Math.max(3, analyticsI))) > 2.83 && 2.98 > analyticsI) {
      cornerkickP = relatedE.length > 79;
   }
       let nativeexP: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,110,116,111,108,111,103,121,0),468], [String.fromCharCode(97,116,116,105,98,117,116,101,115,0),594]]);
       let flipper8 = String.fromCharCode(102,95,53,53,95,103,114,101,101,100,121,0);
         nativeexP = new Map([[`${nativeexP.size}`, flipper8.length]]);
          let castingq = 1;
          let cornero: Array<any> = [468, 990, 942];
          let libavcodec_: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,99,111,109,109,105,116,0),926], [String.fromCharCode(109,118,99,111,110,116,101,120,116,115,0),215]]);
         flipper8 = `${flipper8.length / (Math.max(3, 5))}`;
         castingq /= Math.max(1, cornero.length);
         cornero = [2];
         libavcodec_.set(`${cornero.length}`, libavcodec_.size << (Math.min(Math.abs(1), 3)));
      while (1 == (flipper8.length & 5) && 2 == (flipper8.length & 5)) {
          let temp3 = 3.0;
          let chinasameI = String.fromCharCode(115,116,114,99,115,112,110,95,118,95,53,52,0);
          let profileZ = 3.0;
          let usern = String.fromCharCode(117,105,110,116,112,111,119,0);
         flipper8 += "2";
         temp3 /= Math.max(4, (String.fromCharCode(97,0) == usern ? usern.length : chinasameI.length));
         chinasameI = "2";
         profileZ += (parseFloat(`${chinasameI == String.fromCharCode(56,0) ? parseInt(`${temp3}`) : chinasameI.length}`));
         break;
      }
      while (nativeexP.size <= flipper8.length) {
         flipper8 += `${nativeexP.size}`;
         break;
      }
          let event3 = 1.0;
         nativeexP = new Map([[`${event3}`, flipper8.length]]);
         flipper8 += `${flipper8.length * nativeexP.size}`;
      relatedE = [3];
   let basketballplayerplaceholderi = cornerkickP ? !cornerkickP : cornerkickP;
   do {
      cornerkickP = analyticsI >= relatedE.length;
      if (basketballplayerplaceholderi) {
         break;
      }
   } while (basketballplayerplaceholderi && (4 >= (relatedE.length | 5) && 5 >= relatedE.length));
   if (volumek == 4.4) {
      volumek -= parseFloat(`${miniK}`);
   }
   for (let b = 0; b < 1; b++) {
      relatedE = [sellmathbackgroundo.length];
   }
      codegenC = `${relatedE.length}`;
      miniK <<= Math.min(2, settingR.length);
      relatedE.push(((cornerkickP ? 1 : 1) + parseInt(`${analyticsI}`)));
       let libreact4 = String.fromCharCode(115,116,97,116,101,115,0);
         libreact4 = `${(String.fromCharCode(104,0) == libreact4 ? libreact4.length : libreact4.length)}`;
      for (let w = 0; w < 2; w++) {
         libreact4 = `${libreact4.length}`;
      }
      let mbnativeadvancedO = libreact4.length <= 7971790;
      do {
         libreact4 += `${libreact4.length}`;
         if (mbnativeadvancedO) {
            break;
         }
      } while (mbnativeadvancedO && (2 == libreact4.length));
      analyticsI += parseInt(`${volumek}`) / 2;
   for (let s = 0; s < 1; s++) {
      volumek -= parseFloat(`${1 ^ settingR.length}`);
   }
   for (let k = 0; k < 1; k++) {
       let debugN = 3;
       let sourced: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,0),true ], [String.fromCharCode(98,114,105,103,104,116,110,101,115,115,0),true ]]);
       let statsnomoredataC = 0.0;
       let langkey7 = String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,54,95,56,54,0);
         debugN += parseInt(`${statsnomoredataC}`) / (Math.max(3, 3));
      while (5 <= (2 | sourced.size) || (sourced.size / (Math.max(10, statsnomoredataC))) <= 1.4) {
         statsnomoredataC += (String.fromCharCode(108,0) == langkey7 ? langkey7.length : debugN);
         break;
      }
         statsnomoredataC += sourced.size ^ 2;
          let fast_ = String.fromCharCode(106,95,56,56,95,102,116,118,100,111,99,0);
          let assist8 = 3.0;
          let iconfeedbackJ: Array<any> = [194, 412, 594];
         statsnomoredataC += parseInt(`${assist8}`);
         fast_ += `${iconfeedbackJ.length}`;
         assist8 *= parseFloat(`${fast_.length}`);
         iconfeedbackJ.push(fast_.length);
      while (Array.from(sourced.keys()).includes(`${statsnomoredataC}`)) {
         statsnomoredataC *= debugN + 3;
         break;
      }
         statsnomoredataC -= langkey7.length + debugN;
      if (5 >= (2 ^ debugN)) {
         langkey7 += "1";
      }
         langkey7 = `${debugN / (Math.max(langkey7.length, 2))}`;
      analyticsI /= Math.max(relatedE.length, 3);
   }
      analyticsI += parseInt(`${volumek}`) << (Math.min(3, Math.abs(1)));

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

            mayi_TrashBootsplash.toName('uploadVideoPreview', {
                params: {
                    assets: videoSelected,
                },
            });

            

            
            

            
            
            
            
            
            
        }
    }, [uploadProgress]);

    return (
        <ScreenContainer>
            <View style={styles.titleTextContainer}>
                <Text style={{ ...textVariants.bigHeader, ...styles.titleText }}>上传视频</Text>

                <TouchableOpacity onPress={onCheckHistoryPress}>
                    <Text style={{ color: colors.text }}>
                        查看记录
                    </Text>
                </TouchableOpacity>
            </View>

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