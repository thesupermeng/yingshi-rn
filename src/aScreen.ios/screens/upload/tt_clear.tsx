import ScreenContainer from "../../components/container/tt_backward";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/interstitialStore.svg';
import AlbumIcon from '@static/images/filterCondensedTitle.svg';
import { useTheme } from "@react-navigation/native";
import { ttTarget } from "../../../routes/tt_macau_read";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/tt_with";
import { UploadProgressOverlay } from "../../components/modal/tt_privacy";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/tt_trophy_cross";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttGoal } from "@redux/reducers/tt_selected";
import { showLoginAction } from "@redux/actions/tt_copy_heji";
import { ttFast } from '@models/tt_stations_right';
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
    const userState = useSelector<ttGoal>('userReducer');

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
       let switch_qQ = 4;
    let teamU: Array<any> = [699, 806];
    let country7 = 1.0;
    let moonz: Map<any, any> = new Map([[String.fromCharCode(102,111,108,100,95,117,95,52,56,0),534], [String.fromCharCode(119,114,105,116,105,110,103,95,51,95,49,52,0),529]]);
    let hearty = false;
    let watch7 = String.fromCharCode(97,95,48,95,112,105,101,0);
    let filledh = String.fromCharCode(108,95,55,53,95,97,112,110,115,0);
    let thumbnailE = 5.0;
    let complete1: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,95,103,95,56,56,0),37], [String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,120,95,49,0),519], [String.fromCharCode(103,95,54,55,0),796]]);
    let membership3 = 1;
    let yellow9 = String.fromCharCode(101,110,116,101,114,95,116,95,51,49,0);
    let transfera = String.fromCharCode(114,97,110,100,111,109,105,122,101,95,52,95,54,56,0);
    let feedbackT = false;
    let pauseT: Array<any> = [303, 282];
    let expiredX = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,104,95,53,49,0);
   let clockd = 9011404.0 >= country7;
   do {
      country7 *= 2 >> (Math.min(1, teamU.length));
      if (clockd) {
         break;
      }
   } while (((parseInt(`${country7}`) - yellow9.length) <= 2 || (country7 - yellow9.length) <= 5.94) && clockd);
   if ((thumbnailE * 5.25) > 3.42 && (5.25 * thumbnailE) > 4.11) {
       let ajaxA = String.fromCharCode(98,117,103,115,95,117,95,54,0);
       let launcherH = 4.0;
       let y_unlockj = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,49,95,54,51,0);
       let searchbarx = String.fromCharCode(110,95,56,95,114,101,109,97,116,114,105,120,105,110,103,0);
         y_unlockj = `${parseInt(`${launcherH}`) ^ 1}`;
      for (let l = 0; l < 2; l++) {
         launcherH += parseFloat(`${parseInt(`${launcherH}`) % 2}`);
      }
      while (!y_unlockj.startsWith(`${searchbarx.length}`)) {
         searchbarx = `${2 | searchbarx.length}`;
         break;
      }
      while (ajaxA.includes(`${launcherH}`)) {
          let mutedU = false;
          let sharedo = 4;
          let adultu: Array<any> = [String.fromCharCode(114,95,50,50,95,117,110,101,120,112,101,99,116,101,100,0), String.fromCharCode(100,114,97,119,97,98,108,101,95,118,95,52,55,0)];
          let n_managerC = String.fromCharCode(115,95,55,48,95,104,101,108,112,0);
          let auto_pT: Array<any> = [7, 803, 729];
         launcherH -= parseFloat(`${parseInt(`${launcherH}`) + y_unlockj.length}`);
         mutedU = adultu.includes(sharedo);
         sharedo /= Math.max((n_managerC.length * (mutedU ? 1 : 1)), 3);
         adultu = [1 + adultu.length];
         n_managerC += `${1 & sharedo}`;
         auto_pT.push(adultu.length & 2);
         break;
      }
      while (launcherH == 4.18) {
          let containerU = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,102,95,49,50,0);
         launcherH *= parseFloat(`${y_unlockj.length}`);
         containerU = `${containerU.length}`;
         break;
      }
       let regengT = 0.0;
          let regeng7 = 5.0;
         searchbarx += "1";
         regeng7 /= Math.max(parseFloat(`${3}`), 5);
       let borderlessY: Array<any> = [String.fromCharCode(121,95,54,56,95,115,116,101,112,119,105,115,101,0), String.fromCharCode(115,108,101,101,112,95,54,95,49,53,0), String.fromCharCode(106,95,56,52,95,99,109,115,103,0)];
       let filterx: Array<any> = [737, 769, 651];
      let adultx = 5874105 >= filterx.length;
      do {
         filterx = [1];
         if (adultx) {
            break;
         }
      } while (adultx && (2 < (filterx.length - searchbarx.length) || (2 - searchbarx.length) < 4));
       let ball9: Array<any> = [857, 421, 999];
       let v_centerq = String.fromCharCode(111,112,101,110,95,97,95,55,56,0);
       let detailsA = String.fromCharCode(113,105,110,100,101,120,95,52,95,57,53,0);
         borderlessY = [y_unlockj.length / (Math.max(1, 8))];
      teamU.push(ajaxA.length);
   }
   for (let g = 0; g < 3; g++) {
      switch_qQ >>= Math.min(Math.abs(1 & membership3), 2);
   }
      filledh = `${complete1.size}`;
   while (5.61 == thumbnailE) {
       let colorsq: Array<any> = [174, 20];
       let bellq = 4;
       let clube = 0.0;
       let homeT = 0.0;
       let mimog = String.fromCharCode(97,95,49,52,95,102,114,101,113,98,97,114,107,0);
      let catalogX = 5115794 <= bellq;
      do {
         bellq >>= Math.min(Math.abs((String.fromCharCode(107,0) == mimog ? mimog.length : parseInt(`${homeT}`))), 5);
         if (catalogX) {
            break;
         }
      } while ((5 <= (5 << (Math.min(3, colorsq.length))) && 5 <= (colorsq.length << (Math.min(1, Math.abs(bellq))))) && catalogX);
         homeT *= 1 % (Math.max(4, bellq));
       let strings1: Array<any> = [868, 248, 347];
      let utilsR = clube <= 7372023.0;
      do {
         clube -= parseInt(`${clube}`) / 2;
         if (utilsR) {
            break;
         }
      } while (utilsR && ((bellq << (Math.min(Math.abs(1), 2))) <= 4 && (1 | bellq) <= 1));
       let action5: Array<any> = [String.fromCharCode(115,105,103,105,110,116,95,56,95,52,50,0), String.fromCharCode(98,95,51,54,95,109,117,108,116,105,112,108,101,114,0)];
       let type_dh: Array<any> = [49, 994, 333];
         type_dh = [strings1.length / 1];
          let tooltipsJ = 5;
          let gestures_ = false;
         type_dh.push(strings1.length);
         tooltipsJ %= Math.max(5, 2 % (Math.max(tooltipsJ, 3)));
         gestures_ = 71 > tooltipsJ || gestures_;
         type_dh.push(strings1.length | colorsq.length);
      for (let q = 0; q < 1; q++) {
         type_dh = [strings1.length * bellq];
      }
         colorsq = [3 - bellq];
         colorsq = [2 & strings1.length];
      if (clube > 4.97) {
          let frame_0Z = 5;
          let unreadt = String.fromCharCode(116,95,50,56,95,113,116,112,97,108,101,116,116,101,0);
          let auto_kxK = 4.0;
         strings1.push(2);
         frame_0Z /= Math.max(3, frame_0Z);
         unreadt += `${(String.fromCharCode(78,0) == unreadt ? parseInt(`${auto_kxK}`) : unreadt.length)}`;
         auto_kxK /= Math.max(1, frame_0Z);
      }
       let downloadz = 1.0;
       let shrinkK = 4.0;
         downloadz += parseFloat(`${3 * strings1.length}`);
          let bellK = String.fromCharCode(111,95,57,55,95,105,111,101,114,114,0);
          let footballz = 0.0;
          let reactE: Array<any> = [707, 950];
         colorsq.push(3 & reactE.length);
         bellK += `${parseInt(`${footballz}`) >> (Math.min(bellK.length, 5))}`;
         footballz *= 3 & parseInt(`${footballz}`);
         reactE.push((String.fromCharCode(72,0) == bellK ? bellK.length : parseInt(`${footballz}`)));
      country7 *= parseInt(`${clube}`) % 1;
      break;
   }
   while (yellow9 != String.fromCharCode(76,0) || watch7 == String.fromCharCode(111,0)) {
      yellow9 += "1";
      break;
   }
   if (2 <= (5 - switch_qQ)) {
       let q_managerX = 4;
       let eact1 = 3;
       let blacklistp = 3.0;
       let forwardE = 0.0;
       let thumbnailU = true;
         eact1 &= parseInt(`${blacklistp}`);
      for (let s = 0; s < 3; s++) {
         eact1 /= Math.max(1, (parseInt(`${forwardE}`) >> (Math.min(1, Math.abs((thumbnailU ? 5 : 2))))));
      }
         eact1 %= Math.max(4, parseInt(`${forwardE}`) | 2);
       let pressureA = String.fromCharCode(108,95,53,49,95,116,104,114,111,119,0);
          let videocommonk: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,108,105,118,101,115,116,114,101,97,109,0),319], [String.fromCharCode(110,95,53,49,95,112,114,105,109,97,114,105,108,121,0),712], [String.fromCharCode(113,95,50,49,0),532]]);
         blacklistp *= videocommonk.size;
          let eventv: Array<any> = [404, 467];
         forwardE /= Math.max(5, parseFloat(`${pressureA.length}`));
         eventv = [2];
         blacklistp += (parseInt(`${forwardE}`) % (Math.max(10, (thumbnailU ? 3 : 2))));
      let clear_ = 5083000 <= pressureA.length;
      do {
         pressureA += `${1 | q_managerX}`;
         if (clear_) {
            break;
         }
      } while (clear_ && (5 < (eact1 % (Math.max(pressureA.length, 10))) || 2 < (eact1 % (Math.max(5, 2)))));
         q_managerX /= Math.max(parseInt(`${blacklistp}`) >> (Math.min(Math.abs(3), 3)), 5);
         q_managerX += (2 + (thumbnailU ? 5 : 2));
      let twitterQ = 5610321 >= q_managerX;
      do {
         q_managerX <<= Math.min(3, Math.abs(parseInt(`${blacklistp}`)));
         if (twitterQ) {
            break;
         }
      } while (twitterQ && ((q_managerX >> (Math.min(pressureA.length, 1))) == 5 && 5 == (pressureA.length >> (Math.min(3, Math.abs(q_managerX))))));
         forwardE -= parseFloat(`${2 | parseInt(`${forwardE}`)}`);
          let description_edp = 2;
          let analyticsy: Array<any> = [227, 337, 403];
         blacklistp -= parseInt(`${forwardE}`) + 2;
         description_edp |= 1 << (Math.min(4, analyticsy.length));
         analyticsy = [analyticsy.length];
      for (let b = 0; b < 2; b++) {
         forwardE *= parseFloat(`${parseInt(`${forwardE}`) - 2}`);
      }
       let homeN = String.fromCharCode(116,101,120,105,100,101,112,95,121,95,50,56,0);
      switch_qQ += q_managerX % (Math.max(1, 7));
   }
   while (4 == membership3) {
       let sortn: Array<any> = [String.fromCharCode(118,95,53,49,95,100,101,114,105,118,97,116,105,111,110,0), String.fromCharCode(114,101,115,112,95,120,95,52,55,0), String.fromCharCode(116,95,51,49,95,105,110,116,101,114,115,101,99,116,115,0)];
         sortn.push(1);
      if (4 == (2 & sortn.length)) {
         sortn = [sortn.length ^ 2];
      }
      if (sortn.includes(sortn.length)) {
         sortn.push(1 + sortn.length);
      }
      feedbackT = sortn.length >= 67;
      break;
   }
   for (let r = 0; r < 2; r++) {
      country7 -= ((hearty ? 3 : 2));
   }
      teamU.push(complete1.size);
   let feedbackc = complete1.size <= 7087044;
   do {
       let service1 = true;
       let gray6: Map<any, any> = new Map([[String.fromCharCode(115,97,105,111,95,118,95,50,52,0),true ], [String.fromCharCode(105,110,110,100,101,114,95,106,95,55,54,0),false ], [String.fromCharCode(116,95,50,52,95,116,111,111,98,105,103,0),false ]]);
       let dialogi = 1.0;
      for (let v = 0; v < 2; v++) {
          let sourceT: Array<any> = [168, 352];
          let minivodF = String.fromCharCode(101,95,51,54,95,102,114,97,109,101,110,117,109,0);
          let bodanG = 0.0;
          let disconnectedy = 2;
          let utilsj = 1.0;
         gray6 = new Map([[`${sourceT.length}`, disconnectedy]]);
         sourceT.push(parseInt(`${bodanG}`));
         minivodF = `${parseInt(`${bodanG}`) / (Math.max(3, 10))}`;
         disconnectedy %= Math.max(2, 3);
         utilsj *= minivodF.length;
      }
      if (parseInt(`${dialogi}`) >= gray6.size) {
         dialogi += (parseFloat(`${(service1 ? 2 : 4) * parseInt(`${dialogi}`)}`));
      }
      let skip8 = 5825113 >= gray6.size;
      do {
         gray6.set(`${dialogi}`, gray6.size & 2);
         if (skip8) {
            break;
         }
      } while (((dialogi + 2.31) > 5.31 || (gray6.size + 3) > 4) && skip8);
      let fastu = 6151854 >= gray6.size;
      do {
         gray6.set(`${dialogi}`, 2 / (Math.max(parseInt(`${dialogi}`), 4)));
         if (fastu) {
            break;
         }
      } while ((3 > gray6.size && (gray6.size << (Math.min(Math.abs(3), 4))) > 1) && fastu);
       let ying9 = true;
      for (let k = 0; k < 1; k++) {
         ying9 = 79.59 >= dialogi && !ying9;
      }
       let mbnativeadvancedT = 1.0;
       let mbnativeI = 4.0;
         ying9 = (mbnativeadvancedT * gray6.size) > 43.31;
      let redirectz = dialogi <= 7126036.0;
      do {
         dialogi += parseFloat(`${parseInt(`${mbnativeadvancedT}`)}`);
         if (redirectz) {
            break;
         }
      } while (redirectz && ((2.42 * dialogi) == 3.72 && (2.42 / (Math.max(8, dialogi))) == 5.54));
      complete1 = new Map([[filledh, filledh.length % (Math.max(yellow9.length, 8))]]);
      if (feedbackc) {
         break;
      }
   } while (feedbackc && (Array.from(complete1.values()).includes(membership3)));
      switch_qQ += filledh.length >> (Math.min(Math.abs(1), 5));
      filledh = `${watch7.length}`;
   let station7 = complete1.size >= 7553096;
   do {
      complete1.set(watch7, teamU.length | watch7.length);
      if (station7) {
         break;
      }
   } while ((5 >= (complete1.size ^ transfera.length) && 2 >= (complete1.size ^ 5)) && station7);
   let combineL = teamU.length >= 9294660;
   do {
      teamU.push(parseInt(`${thumbnailE}`) & switch_qQ);
      if (combineL) {
         break;
      }
   } while (combineL && (2 >= (2 & teamU.length)));
       let private_pj = String.fromCharCode(119,101,108,115,95,113,95,57,54,0);
       let memberB = String.fromCharCode(101,95,56,52,95,115,101,112,97,114,97,116,111,114,0);
       let libcrashsdkJ = 5.0;
      for (let e = 0; e < 1; e++) {
         private_pj += `${(String.fromCharCode(86,0) == private_pj ? memberB.length : private_pj.length)}`;
      }
         memberB = `${private_pj.length >> (Math.min(4, Math.abs(parseInt(`${libcrashsdkJ}`))))}`;
         memberB += "2";
          let stepe = 5.0;
          let mimoO: Array<any> = [String.fromCharCode(110,97,118,105,95,56,95,54,50,0), String.fromCharCode(117,95,52,50,95,108,97,112,112,101,100,0)];
         private_pj = `${mimoO.length}`;
         stepe /= Math.max(parseFloat(`${2}`), 5);
         mimoO.push(parseInt(`${stepe}`));
       let kuaishouS = String.fromCharCode(107,95,57,55,95,109,115,118,115,0);
       let backward0 = String.fromCharCode(115,101,110,100,95,110,95,57,49,0);
       let moreJ: Map<any, any> = new Map([[String.fromCharCode(114,116,112,102,98,95,54,95,49,50,0),809], [String.fromCharCode(98,95,54,55,95,116,105,100,121,0),492]]);
       let containert: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,112,114,101,115,101,116,115,0),368], [String.fromCharCode(121,95,57,50,95,115,101,110,100,0),464], [String.fromCharCode(101,112,108,121,95,112,95,51,48,0),480]]);
      let upgradeY = String.fromCharCode(117,49,50,0) == kuaishouS;
      do {
         kuaishouS += `${2 % (Math.max(7, moreJ.size))}`;
         if (upgradeY) {
            break;
         }
      } while ((2 < (kuaishouS.length ^ 3) && 3 < (kuaishouS.length * 3)) && upgradeY);
          let guideH = String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,115,95,52,49,0);
         memberB += `${containert.size / (Math.max(6, memberB.length))}`;
         guideH += "1";
      for (let t = 0; t < 3; t++) {
          let gradleY: Array<any> = [String.fromCharCode(111,95,50,49,95,99,111,109,109,101,110,116,115,0), String.fromCharCode(111,109,112,111,115,101,95,116,95,53,57,0), String.fromCharCode(120,95,54,57,95,122,105,109,103,0)];
          let materialb: Map<any, any> = new Map([[String.fromCharCode(114,95,53,57,95,114,101,102,101,114,101,110,101,0),String.fromCharCode(97,115,115,117,109,101,95,50,95,51,0)], [String.fromCharCode(115,101,113,117,101,110,116,105,97,108,95,54,95,55,49,0),String.fromCharCode(102,95,54,51,95,98,97,114,114,105,101,114,0)], [String.fromCharCode(110,95,55,57,95,112,97,116,104,110,97,109,101,0),String.fromCharCode(109,101,97,110,105,110,103,102,117,108,95,111,95,55,56,0)]]);
          let lightu = String.fromCharCode(99,104,105,114,112,95,116,95,50,48,0);
         backward0 = `${(private_pj == String.fromCharCode(55,0) ? private_pj.length : backward0.length)}`;
         gradleY = [gradleY.length - 3];
         materialb.set(`${lightu}`, lightu.length);
      }
      country7 *= parseInt(`${thumbnailE}`);
      country7 -= membership3 & moonz.size;
      membership3 *= transfera.length | yellow9.length;
       let c_titleP: Array<any> = [402, 653];
          let recommendationJ: Array<any> = [String.fromCharCode(105,114,100,102,116,95,106,95,50,55,0), String.fromCharCode(99,97,98,97,99,95,54,95,48,0), String.fromCharCode(113,95,57,54,95,117,110,115,104,97,114,112,0)];
         c_titleP = [1 + recommendationJ.length];
      while (c_titleP.length <= 5) {
         c_titleP = [c_titleP.length];
         break;
      }
       let membershipN: Map<any, any> = new Map([[String.fromCharCode(115,95,51,55,95,104,97,110,100,108,101,100,0),false ], [String.fromCharCode(100,105,118,105,100,111,114,95,101,95,54,52,0),true ]]);
       let tailD: Map<any, any> = new Map([[String.fromCharCode(114,95,56,95,100,105,114,97,99,0),92], [String.fromCharCode(98,95,52,56,95,109,97,116,114,105,120,0),1000]]);
      moonz.set(`${switch_qQ}`, switch_qQ);
      feedbackT = !filledh.startsWith(`${thumbnailE}`);
       let mailZ = String.fromCharCode(121,95,53,55,95,108,101,116,115,0);
       let securityL = 1.0;
         mailZ += `${parseInt(`${securityL}`)}`;
      if (4 <= (1 - mailZ.length)) {
          let middle_ = String.fromCharCode(114,95,50,49,95,115,119,102,112,108,97,121,101,114,0);
         securityL *= parseFloat(`${parseInt(`${securityL}`)}`);
         middle_ = "2";
      }
      while (2.62 <= (securityL / (Math.max(2.67, 3)))) {
          let matchH = String.fromCharCode(103,95,53,57,95,105,110,116,114,97,112,114,101,100,0);
          let adultt = String.fromCharCode(118,111,119,101,108,95,112,95,52,56,0);
         mailZ = `${(String.fromCharCode(122,0) == mailZ ? matchH.length : mailZ.length)}`;
         matchH += `${adultt.length * adultt.length}`;
         break;
      }
         securityL *= parseFloat(`${2 + mailZ.length}`);
      for (let n = 0; n < 1; n++) {
         securityL -= parseFloat(`${mailZ.length / (Math.max(1, 2))}`);
      }
       let episodesX = false;
      filledh = `${teamU.length / 2}`;
       let temperatureV = 0.0;
      let launcherw = temperatureV <= 5034163.0;
      do {
         temperatureV *= parseInt(`${temperatureV}`);
         if (launcherw) {
            break;
         }
      } while (((temperatureV / (Math.max(5, temperatureV))) == 5.44 || 1.17 == (temperatureV / 5.44)) && launcherw);
         temperatureV -= parseInt(`${temperatureV}`) ^ 3;
      let playn = temperatureV <= 5090202.0;
      do {
          let sound4 = 1;
         temperatureV *= sound4;
         if (playn) {
            break;
         }
      } while ((5.85 <= temperatureV) && playn);
      transfera += `${(1 - (hearty ? 5 : 5))}`;
      hearty = String.fromCharCode(57,0) == filledh;
       let middlewarev = String.fromCharCode(116,101,109,112,95,112,95,56,53,0);
         middlewarev = `${middlewarev.length - 3}`;
      if (!middlewarev.startsWith(middlewarev)) {
         middlewarev = `${3 + middlewarev.length}`;
      }
         middlewarev += `${middlewarev.length << (Math.min(middlewarev.length, 2))}`;
      complete1 = new Map([[`${pauseT.length}`, pauseT.length]]);
      switch_qQ /= Math.max(complete1.size, 4);
      thumbnailE -= filledh.length;

        ttTarget.toName('uploadHistory');
    }

    const onUploadPress = async () => {
       let signinupz = 5;
    let profileR = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,119,95,57,50,0);
    let megaphoneY = 2.0;
    let fillN: Map<any, any> = new Map([[String.fromCharCode(115,116,99,98,95,119,95,56,50,0),270], [String.fromCharCode(115,117,98,115,116,114,105,110,103,95,108,95,57,54,0),238]]);
    let searchl = false;
    let fileZ: Array<any> = [414, 422];
    let kickk = String.fromCharCode(105,115,116,111,103,114,97,109,95,119,95,53,52,0);
    let descO = String.fromCharCode(105,95,55,95,103,101,110,97,110,110,0);
    let whistleR = String.fromCharCode(111,95,50,56,95,101,120,116,114,97,99,116,105,111,110,0);
    let userp = String.fromCharCode(101,95,50,52,95,99,111,108,115,112,97,110,0);
    let country2 = String.fromCharCode(107,95,53,51,95,108,105,98,115,115,104,0);
      fileZ = [fileZ.length % 2];
   while ((5 + profileR.length) == 4 || 5 == (fillN.size + profileR.length)) {
       let rank9 = String.fromCharCode(102,116,115,116,111,107,95,118,95,49,51,0);
       let nterstitialO = 5.0;
       let heart9: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,119,111,114,107,108,111,97,100,0),String.fromCharCode(99,113,117,101,117,101,95,118,95,51,53,0)], [String.fromCharCode(98,95,50,54,95,116,105,109,101,111,117,116,0),String.fromCharCode(105,110,118,105,116,101,100,95,57,95,53,52,0)], [String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,108,95,51,49,0),String.fromCharCode(106,95,49,49,95,97,98,111,117,116,115,0)]]);
         nterstitialO /= Math.max(parseFloat(`${heart9.size}`), 1);
         heart9.set(rank9, rank9.length ^ 2);
       let rewindv = String.fromCharCode(115,101,101,107,105,110,103,95,100,95,55,51,0);
      let dropdownt = 6951776.0 >= nterstitialO;
      do {
         nterstitialO += parseFloat(`${rewindv.length | rank9.length}`);
         if (dropdownt) {
            break;
         }
      } while (dropdownt && (5.89 <= (nterstitialO * parseFloat(`${rewindv.length}`)) || (rewindv.length << (Math.min(Math.abs(5), 3))) <= 3));
      if (1 == rank9.length) {
          let iconz = String.fromCharCode(103,95,51,51,95,118,99,114,101,97,116,101,0);
          let confirmationQ: Array<any> = [String.fromCharCode(122,101,114,111,109,118,95,118,95,51,48,0), String.fromCharCode(104,101,120,100,117,109,112,95,117,95,56,50,0)];
          let blacklistg = String.fromCharCode(114,95,51,55,95,105,100,101,110,116,105,99,97,108,0);
          let brightnessZ: Map<any, any> = new Map([[String.fromCharCode(111,100,105,110,103,95,109,95,55,56,0),648], [String.fromCharCode(99,111,112,121,95,51,95,56,51,0),944], [String.fromCharCode(114,101,108,101,118,97,110,116,95,50,95,49,49,0),845]]);
          let sendQ = 3.0;
         rank9 += `${brightnessZ.size % (Math.max(2, 5))}`;
         iconz += `${(String.fromCharCode(74,0) == iconz ? iconz.length : parseInt(`${sendQ}`))}`;
         confirmationQ.push(iconz.length + 2);
         blacklistg = `${iconz.length * parseInt(`${sendQ}`)}`;
         brightnessZ.set(blacklistg, blacklistg.length ^ parseInt(`${sendQ}`));
      }
      let nterstitialX = 7677980.0 >= nterstitialO;
      do {
         nterstitialO *= parseFloat(`${heart9.size / (Math.max(rewindv.length, 2))}`);
         if (nterstitialX) {
            break;
         }
      } while (nterstitialX && (!rewindv.includes(`${nterstitialO}`)));
      while (3 < (4 * rewindv.length)) {
         heart9.set(rank9, rank9.length);
         break;
      }
          let androidu: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,116,95,55,52,0),true ], [String.fromCharCode(115,117,98,110,111,100,101,115,95,115,95,56,0),false ], [String.fromCharCode(111,117,116,100,97,116,101,100,95,48,95,53,53,0),false ]]);
          let questZ = false;
          let roomB: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,116,114,97,110,115,108,97,116,111,110,0),String.fromCharCode(116,95,49,48,48,95,99,111,110,116,97,105,110,115,0)], [String.fromCharCode(104,95,51,49,95,105,112,112,108,101,0),String.fromCharCode(119,95,52,53,95,99,116,114,108,0)]]);
         rewindv += `${(1 + (questZ ? 2 : 3))}`;
         androidu.set(`${androidu.size}`, roomB.size);
         questZ = androidu.size == 90 && 90 == roomB.size;
       let greenc = true;
      fillN.set(`${descO}`, 1 & heart9.size);
      break;
   }

        if (ttFast.isGuest(userState.user)) {

      kickk += `${fillN.size | 1}`;
       let dplusS = 4;
       let sliderI = 2.0;
      for (let x = 0; x < 1; x++) {
         sliderI -= parseFloat(`${parseInt(`${sliderI}`) / 2}`);
      }
         sliderI /= Math.max(parseFloat(`${parseInt(`${sliderI}`)}`), 2);
      for (let x = 0; x < 2; x++) {
         sliderI += parseFloat(`${1}`);
      }
         sliderI -= parseFloat(`${1 | parseInt(`${sliderI}`)}`);
      if ((sliderI * parseFloat(`${dplusS}`)) < 1.62 && (parseInt(`${sliderI}`) * dplusS) < 1) {
         sliderI /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(dplusS), 1))}`), 4);
      }
      while (dplusS <= sliderI) {
          let refreshL = String.fromCharCode(117,95,57,95,115,101,103,100,97,116,97,0);
          let detailh = 5;
          let main_eA = 4.0;
          let downX = String.fromCharCode(99,99,105,112,95,112,95,49,48,0);
          let dropdowntv = 0;
         dplusS += parseInt(`${main_eA}`) >> (Math.min(Math.abs(2), 2));
         refreshL = `${(String.fromCharCode(68,0) == downX ? dropdowntv : downX.length)}`;
         detailh *= (downX == String.fromCharCode(84,0) ? downX.length : dropdowntv);
         main_eA *= parseFloat(`${3 | downX.length}`);
         break;
      }
      whistleR += `${kickk.length}`;
            dispatch(showLoginAction());

      descO = "3";
   for (let c = 0; c < 1; c++) {
       let skipR = String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,56,95,57,55,0);
         skipR += `${(String.fromCharCode(74,0) == skipR ? skipR.length : skipR.length)}`;
      for (let j = 0; j < 2; j++) {
         skipR = `${1 + skipR.length}`;
      }
         skipR = `${skipR.length}`;
      signinupz %= Math.max(1, fillN.size);
   }
            return;
        }

        try {

      profileR = `${(parseInt(`${megaphoneY}`) << (Math.min(1, Math.abs((searchl ? 5 : 1)))))}`;
   let flipper0 = 9084669.0 <= megaphoneY;
   do {
      megaphoneY += (String.fromCharCode(48,0) == kickk ? kickk.length : parseInt(`${megaphoneY}`));
      if (flipper0) {
         break;
      }
   } while ((megaphoneY < 1.44) && flipper0);
            setVideoSelected(undefined);

       let bingD = 3.0;
      if (bingD < 5.83) {
         bingD -= parseFloat(`${2}`);
      }
      while ((bingD / (Math.max(3.81, 9))) > 4.40) {
         bingD *= parseFloat(`${parseInt(`${bingD}`)}`);
         break;
      }
      for (let z = 0; z < 2; z++) {
         bingD /= Math.max(parseFloat(`${parseInt(`${bingD}`)}`), 1);
      }
      signinupz -= fileZ.length;
   while ((profileR.length << (Math.min(3, fileZ.length))) >= 1 || (1 << (Math.min(4, profileR.length))) >= 5) {
      fileZ.push(userp.length / (Math.max(3, 5)));
      break;
   }

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

   let dycreator_ = String.fromCharCode(105,97,53,50,53,121,122,102,118,119,0) == kickk;
   do {
      kickk = `${signinupz / (Math.max(fileZ.length, 7))}`;
      if (dycreator_) {
         break;
      }
   } while (dycreator_ && (kickk.length > 1 || descO == String.fromCharCode(55,0)));
   if (whistleR.length < descO.length) {
       let goalH = 2;
       let roundS = 2;
       let router4 = String.fromCharCode(119,95,54,50,95,105,110,103,114,101,115,115,0);
       let common5 = 2.0;
       let combineM = String.fromCharCode(122,95,50,95,109,117,116,101,0);
       let catalogz = false;
       let vietnaml = true;
      let short_myl = 9790916 >= goalH;
      do {
         goalH ^= roundS & 1;
         if (short_myl) {
            break;
         }
      } while (short_myl && (1 >= (combineM.length | 2) || (2 | goalH) >= 3));
         catalogz = combineM.length >= 47;
      for (let e = 0; e < 2; e++) {
         router4 += "3";
      }
         catalogz = goalH == 96 || vietnaml;
          let linkb = String.fromCharCode(116,97,117,95,108,95,49,51,0);
         router4 = `${parseInt(`${common5}`)}`;
         linkb = `${1 - linkb.length}`;
      let const_iL = combineM.length >= 5198015;
      do {
          let networkZ = false;
          let alertZ = String.fromCharCode(112,95,52,54,95,108,111,117,100,115,112,101,97,107,101,114,0);
          let shirtB = 3;
          let with___d: Map<any, any> = new Map([[String.fromCharCode(100,95,54,57,95,102,105,114,101,98,97,115,101,0),406], [String.fromCharCode(118,95,56,48,95,98,105,111,0),838], [String.fromCharCode(115,116,115,99,95,108,95,51,51,0),792]]);
          let googleT = 1.0;
         combineM = `${2 | roundS}`;
         networkZ = shirtB >= 53;
         alertZ = `${((networkZ ? 1 : 5) & 2)}`;
         shirtB <<= Math.min(Math.abs(shirtB), 4);
         with___d = new Map([[`${shirtB}`, shirtB]]);
         googleT += parseFloat(`${2}`);
         if (const_iL) {
            break;
         }
      } while ((1 > combineM.length && !catalogz) && const_iL);
         combineM = `${3 * roundS}`;
      while (roundS == 5) {
         goalH <<= Math.min(Math.abs(2), 2);
         break;
      }
      let injuryv = combineM == String.fromCharCode(48,109,108,51,101,103,113,0);
      do {
          let castq = String.fromCharCode(109,111,116,99,111,109,112,95,118,95,56,52,0);
         combineM += `${combineM.length | roundS}`;
         castq += `${castq.length | castq.length}`;
         if (injuryv) {
            break;
         }
      } while (injuryv && (combineM.length < 5));
      while ((roundS / 4) > 2) {
          let colorsS: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,105,110,103,95,122,95,55,48,0),true ], [String.fromCharCode(98,95,56,50,95,106,111,105,110,101,114,0),true ]]);
          let moduleS: Map<any, any> = new Map([[String.fromCharCode(114,117,108,101,115,95,113,95,57,56,0),String.fromCharCode(99,95,50,54,95,108,101,114,112,0)], [String.fromCharCode(114,95,55,57,95,117,110,105,102,105,101,100,0),String.fromCharCode(99,95,56,52,95,114,101,109,97,105,110,0)], [String.fromCharCode(112,111,115,116,105,110,105,116,95,111,95,50,51,0),String.fromCharCode(97,108,115,97,95,49,95,56,54,0)]]);
         combineM = `${((catalogz ? 4 : 5) ^ 3)}`;
         colorsS.set(`${moduleS.size}`, colorsS.size);
         moduleS.set(`${colorsS.size}`, 2 * colorsS.size);
         break;
      }
      for (let e = 0; e < 2; e++) {
          let becomeQ = String.fromCharCode(118,95,49,57,95,118,109,110,99,0);
          let modew = 4;
         combineM = `${(combineM == String.fromCharCode(102,0) ? parseInt(`${common5}`) : combineM.length)}`;
         becomeQ = `${modew << (Math.min(becomeQ.length, 5))}`;
         modew /= Math.max((becomeQ == String.fromCharCode(116,0) ? modew : becomeQ.length), 3);
      }
         router4 += `${goalH >> (Math.min(Math.abs(1), 3))}`;
          let heartT = String.fromCharCode(102,95,51,54,95,115,117,98,115,97,109,112,108,105,110,103,0);
          let footballl = false;
          let yingQ = 4.0;
         roundS &= 2;
         heartT += `${2 ^ parseInt(`${yingQ}`)}`;
         footballl = !heartT.endsWith(`${yingQ}`);
      for (let l = 0; l < 1; l++) {
          let ballu = String.fromCharCode(100,101,108,105,109,95,97,95,49,56,0);
          let borderlesss = String.fromCharCode(100,95,49,55,95,102,117,122,122,101,114,115,0);
          let sportK = String.fromCharCode(97,95,53,53,95,115,116,117,100,105,111,0);
          let area5 = 2.0;
         goalH += 2;
         ballu = `${ballu.length >> (Math.min(1, borderlesss.length))}`;
         borderlesss += `${2 + ballu.length}`;
         sportK += `${(sportK == String.fromCharCode(65,0) ? parseInt(`${area5}`) : sportK.length)}`;
         area5 /= Math.max(2, 1);
      }
      descO = `${kickk.length ^ 3}`;
   }

            if (result.errorMessage) {

       let bingZ = 1.0;
       let linek = String.fromCharCode(103,95,57,55,95,100,101,115,105,103,110,0);
       let lightl = String.fromCharCode(100,95,51,56,95,109,116,97,102,0);
      while (5.94 >= (bingZ / (Math.max(1.32, 1)))) {
         linek = `${parseInt(`${bingZ}`)}`;
         break;
      }
      let middle5 = linek == String.fromCharCode(98,104,101,0);
      do {
         linek = `${2 >> (Math.min(3, lightl.length))}`;
         if (middle5) {
            break;
         }
      } while (middle5 && (4 < (parseInt(`${bingZ}`) + linek.length) || (5.6 + bingZ) < 1.73));
      let membershipA = lightl == String.fromCharCode(51,56,98,97,0);
      do {
          let feedbackC = true;
          let targetU = String.fromCharCode(106,95,51,48,95,115,117,98,105,109,97,103,101,0);
          let whistlet: Array<any> = [48, 964];
         lightl += `${whistlet.length}`;
         feedbackC = !feedbackC;
         targetU += `${2 * targetU.length}`;
         whistlet = [1];
         if (membershipA) {
            break;
         }
      } while ((linek != String.fromCharCode(85,0)) && membershipA);
          let stationI = 3;
          let animationY = 0;
          let floatingV = String.fromCharCode(99,95,53,55,95,108,111,110,103,0);
         linek += `${(floatingV == String.fromCharCode(99,0) ? stationI : floatingV.length)}`;
         stationI *= animationY - 1;
         animationY ^= animationY >> (Math.min(Math.abs(3), 2));
          let sheetj: Map<any, any> = new Map([[String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,105,95,52,48,0),String.fromCharCode(111,95,54,50,95,99,114,101,100,101,110,116,105,97,108,0)], [String.fromCharCode(105,102,97,109,115,103,95,57,95,52,48,0),String.fromCharCode(121,97,98,101,95,109,95,52,52,0)]]);
          let placeholderc = 0.0;
          let eacts = 4;
         bingZ += lightl.length / (Math.max(3, 7));
         sheetj = new Map([[`${placeholderc}`, 2 | eacts]]);
         placeholderc *= 2 | eacts;
         bingZ /= Math.max(3, 3 - parseInt(`${bingZ}`));
      let twitterO = 6051821 >= lightl.length;
      do {
         lightl = `${parseInt(`${bingZ}`) | lightl.length}`;
         if (twitterO) {
            break;
         }
      } while (twitterO && (linek == String.fromCharCode(122,0)));
          let usernameQ = 3;
          let update_olS = 5;
         linek = `${usernameQ}`;
         usernameQ |= update_olS | update_olS;
          let kuaishouQ = String.fromCharCode(116,114,97,118,101,114,115,97,108,95,111,95,49,56,0);
          let predictionA = String.fromCharCode(111,112,116,105,109,105,122,101,100,95,112,95,51,52,0);
          let blacklistgL = 4.0;
         linek = `${parseInt(`${bingZ}`) * kuaishouQ.length}`;
         kuaishouQ += `${(predictionA == String.fromCharCode(52,0) ? predictionA.length : parseInt(`${blacklistgL}`))}`;
         blacklistgL *= predictionA.length;
      userp += `${parseInt(`${bingZ}`)}`;
   for (let p = 0; p < 3; p++) {
       let pluse = 1;
       let carousel6 = true;
       let unreade = true;
          let rightt = String.fromCharCode(115,101,110,115,111,114,95,115,95,54,50,0);
          let common7: Array<any> = [203, 624];
          let hoverA = String.fromCharCode(110,95,53,56,95,116,101,115,101,100,103,101,0);
         unreade = String.fromCharCode(68,0) == rightt;
         rightt += `${common7.length >> (Math.min(Math.abs(1), 4))}`;
         common7 = [3 - common7.length];
         hoverA = "1";
         pluse += pluse / 2;
      whistleR = "2";
   }
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {

   if (!searchl) {
      searchl = (fillN.size + userp.length) <= 40;
   }
      descO = `${((searchl ? 2 : 2))}`;
                setVideoSelected(result.assets[0]);

   while (5 <= fileZ.length || (5 << (Math.min(5, fileZ.length))) <= 2) {
      searchl = userp.length > 59 && 59 > fileZ.length;
      break;
   }
   if ((2.16 - megaphoneY) == 2.83) {
      fillN.set(whistleR, userp.length);
   }
                setUploadProgress(0);

       let pangleh = 4.0;
      for (let a = 0; a < 2; a++) {
         pangleh /= Math.max(3, parseFloat(`${2 + parseInt(`${pangleh}`)}`));
      }
      if ((pangleh - pangleh) == 2.9) {
         pangleh /= Math.max(parseFloat(`${3}`), 5);
      }
          let moditym: Map<any, any> = new Map([[String.fromCharCode(110,95,51,50,95,115,104,97,114,112,101,110,0),220], [String.fromCharCode(116,109,109,98,114,95,120,95,51,56,0),232], [String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,114,95,54,51,0),972]]);
          let profilek: Array<any> = [329, 69];
          let regengN = 1.0;
         pangleh *= parseFloat(`${1 - parseInt(`${regengN}`)}`);
         moditym.set(`${profilek.length}`, 2);
         profilek = [3];
         regengN *= moditym.size >> (Math.min(Math.abs(2), 5));
      fileZ.push(whistleR.length);
   if (userp == kickk) {
      kickk += `${whistleR.length}`;
   }

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);

   for (let j = 0; j < 2; j++) {
       let wnewinterstitialE = 4;
       let arrown = String.fromCharCode(122,95,54,52,95,102,114,101,101,108,105,115,116,0);
       let pageH = String.fromCharCode(114,117,110,95,116,95,54,49,0);
       let collectiono = String.fromCharCode(120,95,51,54,0);
         collectiono = `${collectiono.length}`;
      while (3 <= (wnewinterstitialE % 5) && (wnewinterstitialE % (Math.max(arrown.length, 2))) <= 5) {
         arrown += `${arrown.length + 1}`;
         break;
      }
         wnewinterstitialE -= collectiono.length - 2;
          let debugk = 5;
         arrown = `${1 << (Math.min(4, arrown.length))}`;
         debugk += debugk | debugk;
         wnewinterstitialE += collectiono.length;
         arrown += `${collectiono.length + wnewinterstitialE}`;
      for (let v = 0; v < 3; v++) {
         pageH += `${3 - collectiono.length}`;
      }
         wnewinterstitialE %= Math.max(3, arrown.length | 1);
         arrown += `${pageH.length}`;
         wnewinterstitialE -= (arrown == String.fromCharCode(121,0) ? arrown.length : wnewinterstitialE);
      while (!collectiono.startsWith(pageH)) {
         pageH = `${collectiono.length >> (Math.min(4, Math.abs(wnewinterstitialE)))}`;
         break;
      }
         collectiono += `${(collectiono == String.fromCharCode(54,0) ? collectiono.length : pageH.length)}`;
      whistleR = `${(kickk.length << (Math.min(3, Math.abs((searchl ? 2 : 3)))))}`;
   }
      whistleR = `${profileR.length % 3}`;


                const uploadTimer = setInterval(() => {

   if (5 < descO.length || 5 < kickk.length) {
      descO += `${signinupz | userp.length}`;
   }
   while (2 <= (descO.length & 3)) {
       let grayp: Map<any, any> = new Map([[String.fromCharCode(106,95,49,50,95,115,116,114,112,116,105,109,101,0),476], [String.fromCharCode(98,95,49,56,95,97,99,116,117,97,108,105,122,101,100,0),135]]);
       let storev = 5.0;
      for (let p = 0; p < 3; p++) {
          let confirmation2 = String.fromCharCode(101,120,112,111,95,97,95,56,51,0);
         storev /= Math.max((parseFloat(`${confirmation2 == String.fromCharCode(49,0) ? confirmation2.length : parseInt(`${storev}`)}`)), 4);
      }
      for (let i = 0; i < 1; i++) {
          let checkboxj: Array<any> = [String.fromCharCode(113,95,53,52,95,98,97,114,101,0), String.fromCharCode(121,95,57,49,95,109,97,112,115,105,122,101,0), String.fromCharCode(110,95,53,95,105,103,110,111,114,101,100,0)];
          let uploadA = 2.0;
          let stylesq = String.fromCharCode(101,95,49,56,95,101,120,116,114,97,0);
          let mailz = 5.0;
          let configm = true;
         grayp = new Map([[`${storev}`, ((configm ? 3 : 3) % (Math.max(parseInt(`${storev}`), 6)))]]);
         checkboxj = [1 + parseInt(`${uploadA}`)];
         uploadA *= parseFloat(`${parseInt(`${mailz}`) + parseInt(`${uploadA}`)}`);
         stylesq = `${(stylesq == String.fromCharCode(119,0) ? stylesq.length : parseInt(`${mailz}`))}`;
         configm = (uploadA * parseFloat(`${checkboxj.length}`)) == 80.3;
      }
      for (let q = 0; q < 2; q++) {
         grayp.set(`${storev}`, 1);
      }
      if (1 >= (4 | grayp.size) || 3.39 >= (storev / 3.12)) {
          let goalC = 3;
          let skipi = String.fromCharCode(107,95,52,55,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
          let bingH: Array<any> = [576, 32];
         storev /= Math.max(2, parseFloat(`${3}`));
         goalC ^= skipi.length;
         skipi += `${bingH.length + skipi.length}`;
         bingH = [goalC & 2];
      }
      if (4 >= (parseInt(`${storev}`) * grayp.size) || (grayp.size * parseInt(`${storev}`)) >= 4) {
         storev /= Math.max(1, parseFloat(`${1}`));
      }
         storev /= Math.max(parseFloat(`${parseInt(`${storev}`)}`), 2);
      fillN = new Map([[`${fileZ.length}`, parseInt(`${megaphoneY}`) >> (Math.min(1, Math.abs(1)))]]);
      break;
   }
                    setUploadProgress(prev => {

   let tails = 7190345 <= fileZ.length;
   do {
      fileZ = [parseInt(`${megaphoneY}`)];
      if (tails) {
         break;
      }
   } while (tails && (fileZ.includes(megaphoneY)));
   for (let p = 0; p < 2; p++) {
      profileR += `${3 | kickk.length}`;
   }
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

       let filee = String.fromCharCode(102,95,53,95,115,104,97,0);
       let w_playerL = String.fromCharCode(108,111,97,100,120,95,111,95,50,52,0);
       let control_ = String.fromCharCode(115,104,97,112,101,115,95,118,95,49,49,0);
          let specQ = 4.0;
          let selectiond = 2.0;
         w_playerL += `${parseInt(`${selectiond}`) * 1}`;
         specQ *= 1 | parseInt(`${specQ}`);
         selectiond -= parseFloat(`${parseInt(`${specQ}`) % 2}`);
       let favoritec = String.fromCharCode(105,110,110,100,101,114,95,51,95,57,52,0);
       let react2 = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,118,95,57,57,0);
         control_ += `${filee.length}`;
       let nativeexb = 1.0;
         favoritec = `${parseInt(`${nativeexb}`) | 3}`;
      while (!filee.includes(w_playerL)) {
         w_playerL += `${1 * react2.length}`;
         break;
      }
         w_playerL += `${(String.fromCharCode(109,0) == control_ ? w_playerL.length : control_.length)}`;
       let componentx: Array<any> = [23, 324];
       let controlsi: Array<any> = [247, 159];
          let inactiveI: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,97,108,97,99,0),String.fromCharCode(105,95,55,53,0)], [String.fromCharCode(107,95,49,50,95,99,97,99,104,101,100,107,101,121,115,0),String.fromCharCode(122,95,54,48,95,118,112,100,101,99,0)], [String.fromCharCode(118,97,99,97,110,116,95,53,95,50,0),String.fromCharCode(122,95,54,50,95,97,105,110,116,0)]]);
          let with_nv4 = 4.0;
         componentx = [control_.length << (Math.min(Math.abs(2), 1))];
         inactiveI = new Map([[`${inactiveI.size}`, 3]]);
         with_nv4 += parseInt(`${with_nv4}`) - 2;
      profileR += `${control_.length}`;
      kickk = `${signinupz & descO.length}`;

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
       let optionst = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,107,95,54,0);
    let shrink8 = true;
    let mbbannerU: Array<any> = [78, 890];
    let fillR = String.fromCharCode(119,101,101,107,95,117,95,49,56,0);
    let reactJ = true;
    let modulex = true;
    let customs = 2.0;
    let activityE = String.fromCharCode(112,105,120,108,101,116,95,56,95,56,57,0);
      shrink8 = mbbannerU.length <= 100;
   for (let l = 0; l < 1; l++) {
      optionst += `${1 ^ mbbannerU.length}`;
   }

        if (Platform.OS === 'ios') {

      modulex = !modulex;
      reactJ = modulex;
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {

   while (parseFloat(`${fillR.length}`) == customs) {
       let evento = 2.0;
       let injuryu = 2.0;
       let collectionS = String.fromCharCode(114,95,54,56,95,100,105,114,101,99,116,108,121,0);
       let forwardV = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,102,95,53,57,0);
       let b_playerf = String.fromCharCode(99,95,56,55,95,116,114,97,118,101,108,0);
         forwardV = `${collectionS.length ^ 2}`;
         b_playerf += `${parseInt(`${injuryu}`)}`;
      if (!collectionS.startsWith(`${forwardV.length}`)) {
          let config2 = String.fromCharCode(116,95,53,53,95,97,116,114,97,99,112,0);
         collectionS += `${(config2 == String.fromCharCode(84,0) ? config2.length : parseInt(`${evento}`))}`;
      }
      while (parseInt(`${injuryu}`) > b_playerf.length) {
         injuryu -= parseFloat(`${3 - collectionS.length}`);
         break;
      }
      let schedulek = String.fromCharCode(100,49,106,56,48,95,111,114,0) == b_playerf;
      do {
         b_playerf += `${parseInt(`${evento}`) ^ 3}`;
         if (schedulek) {
            break;
         }
      } while ((4 <= forwardV.length) && schedulek);
      for (let v = 0; v < 3; v++) {
          let w_titlem = 5;
          let diceg = String.fromCharCode(112,95,54,57,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
          let ocopy_sI = true;
          let default_1e = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,95,98,95,53,57,0);
         evento += ((ocopy_sI ? 5 : 1));
         w_titlem *= 2 - default_1e.length;
         diceg = `${diceg.length ^ 1}`;
         ocopy_sI = 38 < w_titlem;
         default_1e += `${1 ^ default_1e.length}`;
      }
         collectionS += `${(String.fromCharCode(100,0) == forwardV ? forwardV.length : parseInt(`${injuryu}`))}`;
          let traminiC = false;
          let nativeex7 = String.fromCharCode(97,114,105,116,104,95,104,95,56,54,0);
         injuryu -= parseFloat(`${collectionS.length}`);
         traminiC = nativeex7.startsWith(`${traminiC}`);
         nativeex7 = `${((traminiC ? 3 : 5) | 1)}`;
      let pausex = b_playerf.length <= 7759930;
      do {
         b_playerf = `${b_playerf.length}`;
         if (pausex) {
            break;
         }
      } while (((injuryu / 3.94) >= 5.66) && pausex);
       let moviesk = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,109,95,57,51,0);
         injuryu /= Math.max(parseFloat(`${parseInt(`${injuryu}`)}`), 3);
      let vietnamW = 7798302 <= forwardV.length;
      do {
         forwardV += `${3 >> (Math.min(3, moviesk.length))}`;
         if (vietnamW) {
            break;
         }
      } while ((moviesk != forwardV) && vietnamW);
      if (forwardV.includes(collectionS)) {
          let reactnativejsN = 3.0;
         collectionS = `${1 | parseInt(`${evento}`)}`;
         reactnativejsN -= parseFloat(`${1}`);
      }
      if (!b_playerf.endsWith(forwardV)) {
         b_playerf = `${collectionS.length | 3}`;
      }
         injuryu *= parseFloat(`${parseInt(`${injuryu}`) << (Math.min(4, Math.abs(1)))}`);
      customs -= parseFloat(`${collectionS.length % 1}`);
      break;
   }
       let with_ogw = 2.0;
         with_ogw *= parseFloat(`${parseInt(`${with_ogw}`) >> (Math.min(5, Math.abs(2)))}`);
          let tickU: Array<any> = [475, 394, 957];
          let ballC = String.fromCharCode(119,101,98,109,100,101,99,95,103,95,53,0);
          let overlayV = 3.0;
         with_ogw += parseFloat(`${1}`);
         tickU.push(2);
         ballC = `${parseInt(`${overlayV}`) / 3}`;
         overlayV -= (parseFloat(`${ballC == String.fromCharCode(54,0) ? tickU.length : ballC.length}`));
         with_ogw -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${with_ogw}`)), 4))}`);
      mbbannerU.push(((shrink8 ? 3 : 3) - parseInt(`${customs}`)));
                if (result == RESULTS.GRANTED) {

      customs += parseFloat(`${2}`);
   while (activityE.length > 2) {
      activityE += `${optionst.length}`;
      break;
   }
                    setGrantPhotePermission(true);
                } else {

      reactJ = !modulex;
   while (5 == (fillR.length % 4) || 4 == (fillR.length % 4)) {
      mbbannerU = [mbbannerU.length];
      break;
   }

                    setGrantPhotePermission(false);

      optionst = `${mbbannerU.length}`;
      optionst += `${((reactJ ? 2 : 2) + (shrink8 ? 3 : 2))}`;
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
       let emojir: Array<any> = [812, 655];
    let champion4 = String.fromCharCode(107,95,53,51,95,116,111,111,108,98,111,120,0);
    let turnu = String.fromCharCode(122,95,57,52,95,97,116,114,97,99,97,108,0);
    let bridgeP = 0.0;
    let whitej = String.fromCharCode(100,95,54,57,95,112,114,101,99,105,115,105,111,110,0);
    let referrerW = String.fromCharCode(104,95,49,54,95,115,105,103,115,108,111,116,0);
    let desc6: Array<any> = [26, 904];
    let tumbnailh = String.fromCharCode(99,104,97,110,103,101,100,104,95,112,95,55,56,0);
    let textU = String.fromCharCode(117,110,99,111,109,112,97,99,116,95,52,95,50,52,0);
    let nterstitial2 = 5.0;
    let spec6 = 0.0;
    let predictionB = String.fromCharCode(109,97,99,95,100,95,57,49,0);
   let drag9 = String.fromCharCode(109,106,101,121,0) == whitej;
   do {
      whitej = `${desc6.length >> (Math.min(Math.abs(2), 2))}`;
      if (drag9) {
         break;
      }
   } while ((!whitej.endsWith(`${bridgeP}`)) && drag9);
       let buildg = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,104,95,57,48,0);
       let klevinE = String.fromCharCode(108,105,115,116,110,101,114,115,95,102,95,49,55,0);
      let crownF = buildg == String.fromCharCode(115,122,53,118,53,101,50,0);
      do {
         buildg = `${buildg.length / (Math.max(1, 4))}`;
         if (crownF) {
            break;
         }
      } while (crownF && (buildg != String.fromCharCode(97,0) && klevinE != String.fromCharCode(98,0)));
         buildg += `${3 >> (Math.min(5, buildg.length))}`;
      let lightP = 8557853 >= buildg.length;
      do {
         buildg = `${(String.fromCharCode(118,0) == klevinE ? buildg.length : klevinE.length)}`;
         if (lightP) {
            break;
         }
      } while ((klevinE != String.fromCharCode(86,0)) && lightP);
          let stringW = 5.0;
         buildg += `${(String.fromCharCode(72,0) == klevinE ? parseInt(`${stringW}`) : klevinE.length)}`;
         klevinE += `${buildg.length}`;
         buildg = `${buildg.length - 3}`;
      referrerW = `${tumbnailh.length ^ 3}`;
      desc6 = [(tumbnailh == String.fromCharCode(97,0) ? desc6.length : tumbnailh.length)];
      nterstitial2 *= 3;
   if (desc6.length > tumbnailh.length) {
      tumbnailh += `${desc6.length | 1}`;
   }
   if ((4 + whitej.length) <= 3 || (parseInt(`${spec6}`) * 4) <= 1) {
      spec6 /= Math.max((String.fromCharCode(75,0) == turnu ? turnu.length : parseInt(`${bridgeP}`)), 4);
   }
   if (1.28 < (3.16 * bridgeP) || (champion4.length & 1) < 5) {
       let mbsplashc = String.fromCharCode(115,108,102,95,107,95,52,53,0);
       let logoZ = String.fromCharCode(109,95,49,95,97,117,116,111,102,105,108,108,0);
       let selectedK = 2.0;
         selectedK *= logoZ.length + 1;
       let videojsG = String.fromCharCode(117,95,51,48,95,114,97,105,115,101,0);
       let bufferu = String.fromCharCode(114,95,52,57,95,115,111,108,118,101,0);
         bufferu += `${(videojsG == String.fromCharCode(98,0) ? bufferu.length : videojsG.length)}`;
      let combinedF = 8489199.0 >= selectedK;
      do {
          let dropdown8 = false;
         selectedK *= (parseInt(`${selectedK}`) << (Math.min(2, Math.abs((dropdown8 ? 5 : 1)))));
         if (combinedF) {
            break;
         }
      } while (combinedF && (2 == (mbsplashc.length * parseInt(`${selectedK}`)) && 1.58 == (5.18 * selectedK)));
      for (let u = 0; u < 2; u++) {
          let targetu = 5;
          let relatedH = 0.0;
          let floater1: Map<any, any> = new Map([[String.fromCharCode(111,98,106,101,99,116,115,95,97,95,57,54,0),String.fromCharCode(99,111,110,115,116,114,117,99,116,95,100,95,55,56,0)], [String.fromCharCode(114,101,115,111,108,118,105,110,103,95,53,95,54,57,0),String.fromCharCode(109,95,53,49,95,112,114,101,115,101,110,99,101,115,0)]]);
          let description_t5 = String.fromCharCode(115,111,108,105,115,116,101,110,95,114,95,54,54,0);
          let eacti: Map<any, any> = new Map([[String.fromCharCode(111,95,56,53,95,102,105,114,101,0),false ], [String.fromCharCode(112,95,50,52,95,114,101,101,110,99,114,121,112,116,0),true ]]);
         selectedK *= 2;
         targetu -= description_t5.length;
         relatedH /= Math.max(targetu, 5);
         floater1.set(`${floater1.size}`, 1);
         description_t5 = `${(description_t5 == String.fromCharCode(89,0) ? description_t5.length : parseInt(`${relatedH}`))}`;
         eacti.set(`${eacti.size}`, 3 + eacti.size);
      }
         mbsplashc = `${videojsG.length}`;
         videojsG = `${parseInt(`${selectedK}`) - logoZ.length}`;
      while (logoZ.length == bufferu.length) {
         bufferu += `${(String.fromCharCode(68,0) == videojsG ? videojsG.length : bufferu.length)}`;
         break;
      }
          let rewind8 = 4.0;
          let with_4d = 5.0;
         logoZ += "3";
         rewind8 += parseInt(`${rewind8}`) | 3;
         with_4d /= Math.max(5, 3);
      bridgeP += parseInt(`${nterstitial2}`) / (Math.max(emojir.length, 1));
   }
       let optionsY = true;
      for (let l = 0; l < 1; l++) {
          let downd = String.fromCharCode(100,95,54,56,95,109,111,100,105,102,105,101,114,115,0);
          let volumeo: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,99,111,118,97,114,105,97,110,99,101,0),485], [String.fromCharCode(110,95,55,48,95,97,112,112,108,121,105,110,103,0),115]]);
          let schedule_ = false;
          let reactN = false;
         optionsY = (optionsY ? schedule_ : optionsY);
         downd = `${((reactN ? 4 : 4))}`;
         volumeo.set(downd, ((reactN ? 5 : 1)));
         schedule_ = reactN || volumeo.size <= 16;
      }
         optionsY = !optionsY;
          let historyT = String.fromCharCode(112,104,97,115,101,115,95,109,95,57,57,0);
          let dplus5 = false;
         optionsY = (optionsY ? !dplus5 : !optionsY);
         historyT += `${historyT.length}`;
         dplus5 = historyT.length >= 31;
      spec6 *= parseInt(`${spec6}`) | 3;
   let sentry0 = String.fromCharCode(122,50,95,121,95,100,0) == tumbnailh;
   do {
      tumbnailh = `${parseInt(`${spec6}`)}`;
      if (sentry0) {
         break;
      }
   } while (sentry0 && (3 > (tumbnailh.length + 1)));
   for (let k = 0; k < 1; k++) {
      desc6 = [parseInt(`${bridgeP}`)];
   }
   if (3.19 == nterstitial2) {
      nterstitial2 -= desc6.length | parseInt(`${spec6}`);
   }
      desc6 = [textU.length];
   while ((nterstitial2 * desc6.length) == 2.77) {
      desc6.push(textU.length ^ referrerW.length);
      break;
   }
   if (1 > turnu.length) {
      turnu = `${turnu.length}`;
   }
   let placement1 = emojir.length <= 8165701;
   do {
      emojir = [champion4.length >> (Math.min(Math.abs(2), 2))];
      if (placement1) {
         break;
      }
   } while ((!emojir.includes(bridgeP)) && placement1);
   if ((3 * desc6.length) < 2 && 1 < (3 * desc6.length)) {
       let fullm = false;
       let updatesi: Map<any, any> = new Map([[String.fromCharCode(115,95,51,57,95,115,107,101,119,0),936], [String.fromCharCode(101,100,105,97,95,99,95,51,0),510]]);
       let containerC = 2.0;
       let hongkong4 = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,121,95,50,51,0);
       let updatesD: Map<any, any> = new Map([[String.fromCharCode(114,97,105,115,101,95,112,95,50,52,0),true ], [String.fromCharCode(109,101,116,97,100,97,116,97,115,95,113,95,55,57,0),false ]]);
         hongkong4 += `${(hongkong4 == String.fromCharCode(97,0) ? parseInt(`${containerC}`) : hongkong4.length)}`;
      let feedback1 = 7355829 <= updatesi.size;
      do {
         updatesi.set(`${containerC}`, 1 * updatesi.size);
         if (feedback1) {
            break;
         }
      } while (feedback1 && ((5 | hongkong4.length) == 4 || (updatesi.size | hongkong4.length) == 5));
      if (containerC >= hongkong4.length) {
         hongkong4 += `${updatesD.size | updatesi.size}`;
      }
      while (3 == (updatesD.size | 2) || (updatesD.size | 2) == 3) {
          let live1: Array<any> = [String.fromCharCode(115,112,101,101,100,95,54,95,49,56,0), String.fromCharCode(122,95,50,56,95,99,97,99,104,101,102,108,117,115,104,0)];
          let appleW = String.fromCharCode(115,105,120,95,97,95,50,51,0);
          let indicatorp = String.fromCharCode(97,95,51,56,95,105,110,99,108,117,100,101,0);
          let manifest1 = String.fromCharCode(98,95,56,56,95,115,117,114,112,114,105,115,101,100,0);
          let expiredE = 2;
         updatesi = new Map([[indicatorp, 1]]);
         live1.push((String.fromCharCode(100,0) == appleW ? expiredE : appleW.length));
         indicatorp += `${(manifest1 == String.fromCharCode(74,0) ? expiredE : manifest1.length)}`;
         break;
      }
          let androidf = false;
          let liveU: Map<any, any> = new Map([[String.fromCharCode(112,111,108,105,99,121,95,100,95,52,51,0),698], [String.fromCharCode(102,95,56,53,95,98,105,110,107,97,117,100,105,111,0),448], [String.fromCharCode(114,95,50,51,95,115,121,110,99,104,114,111,110,105,122,101,0),346]]);
         containerC += ((fullm ? 5 : 2) ^ 3);
         androidf = liveU.size >= 76;
         liveU = new Map([[`${liveU.size}`, liveU.size]]);
      while (!fullm) {
          let arrowt = 5.0;
          let rewardt: Array<any> = [528, 367];
         fullm = 27 <= updatesi.size;
         arrowt += rewardt.length + parseInt(`${arrowt}`);
         rewardt.push(parseInt(`${arrowt}`) % (Math.max(rewardt.length, 6)));
         break;
      }
          let selectedi = String.fromCharCode(105,110,100,101,120,97,98,108,101,95,119,95,53,0);
          let sentryK = String.fromCharCode(100,105,99,116,95,106,95,56,57,0);
          let memberz = 1.0;
         updatesi.set(`${containerC}`, parseInt(`${containerC}`) * 1);
         selectedi = `${selectedi.length}`;
         sentryK = `${(sentryK == String.fromCharCode(112,0) ? sentryK.length : selectedi.length)}`;
         memberz /= Math.max(2, 2);
      for (let a = 0; a < 2; a++) {
          let malaysiae = String.fromCharCode(108,111,110,103,95,52,95,54,48,0);
          let ynewinterstitialX = String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,100,95,51,54,0);
         hongkong4 += `${updatesD.size & 1}`;
         malaysiae = `${ynewinterstitialX.length << (Math.min(Math.abs(3), 2))}`;
         ynewinterstitialX = `${ynewinterstitialX.length * 1}`;
      }
      while (1 < (hongkong4.length & 4) && 4 < (updatesD.size & hongkong4.length)) {
          let g_imageL = String.fromCharCode(110,95,50,53,95,97,116,111,110,0);
         hongkong4 += `${((fullm ? 2 : 3) | hongkong4.length)}`;
         g_imageL += "1";
         break;
      }
       let mappingh = 4.0;
       let fillS = 1.0;
      for (let r = 0; r < 2; r++) {
         updatesD = new Map([[`${updatesD.size}`, updatesD.size | 3]]);
      }
         containerC -= updatesi.size - parseInt(`${mappingh}`);
      while (updatesD.size > 4) {
         updatesD.set(`${fillS}`, updatesi.size);
         break;
      }
          let change8 = 1.0;
          let arrowq = 4.0;
          let sellz = String.fromCharCode(115,95,53,55,95,116,105,108,108,0);
         updatesD = new Map([[`${updatesD.size}`, 3 + updatesD.size]]);
         change8 *= parseFloat(`${1}`);
         arrowq *= parseFloat(`${1 + parseInt(`${change8}`)}`);
         sellz += `${2 * parseInt(`${arrowq}`)}`;
         containerC *= (hongkong4.length | (fullm ? 1 : 5));
      tumbnailh = `${(String.fromCharCode(117,0) == textU ? parseInt(`${nterstitial2}`) : textU.length)}`;
   }
      emojir.push(parseInt(`${bridgeP}`) / 2);
      tumbnailh = "2";
   let anytime9 = bridgeP <= 8834791.0;
   do {
       let resend6 = 0.0;
       let utilsA: Map<any, any> = new Map([[String.fromCharCode(105,95,55,51,95,115,105,103,105,108,108,0),false ], [String.fromCharCode(102,108,97,116,110,101,115,115,95,51,95,57,54,0),false ], [String.fromCharCode(112,95,55,50,95,119,109,97,118,111,105,99,101,0),false ]]);
       let hongkongN = 4.0;
      for (let v = 0; v < 2; v++) {
         resend6 -= parseFloat(`${parseInt(`${resend6}`)}`);
      }
         resend6 /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${hongkongN}`)), 4))}`), 3);
         hongkongN += parseInt(`${resend6}`) >> (Math.min(Math.abs(1), 5));
      for (let s = 0; s < 2; s++) {
         resend6 -= parseFloat(`${2 | utilsA.size}`);
      }
      if ((5.34 + hongkongN) > 3.60 || 5 > (utilsA.size - 1)) {
         utilsA = new Map([[`${utilsA.size}`, utilsA.size << (Math.min(1, Math.abs(parseInt(`${hongkongN}`))))]]);
      }
       let filedE = String.fromCharCode(114,111,117,110,100,105,110,103,95,48,95,49,50,0);
       let window_rs = String.fromCharCode(99,111,111,114,100,115,95,115,95,51,49,0);
          let annerH = String.fromCharCode(100,105,116,97,110,99,101,95,99,95,50,50,0);
          let minivodK = 0.0;
         hongkongN -= utilsA.size;
         annerH = `${(annerH == String.fromCharCode(122,0) ? parseInt(`${minivodK}`) : annerH.length)}`;
         minivodK += parseFloat(`${2 % (Math.max(6, parseInt(`${minivodK}`)))}`);
      while (resend6 == parseFloat(`${utilsA.size}`)) {
         resend6 -= parseFloat(`${parseInt(`${resend6}`) + parseInt(`${hongkongN}`)}`);
         break;
      }
          let nterstitialv = 1.0;
          let adultU: Map<any, any> = new Map([[String.fromCharCode(109,111,100,97,108,95,106,95,55,56,0),314], [String.fromCharCode(112,101,114,109,95,104,95,57,0),216], [String.fromCharCode(107,101,114,110,101,114,95,110,95,50,56,0),176]]);
          let viewsY = String.fromCharCode(120,95,51,49,95,103,111,98,98,108,101,0);
         hongkongN -= parseInt(`${nterstitialv}`);
         nterstitialv *= viewsY.length;
         adultU = new Map([[`${adultU.size}`, 1]]);
         viewsY += `${(String.fromCharCode(104,0) == viewsY ? adultU.size : viewsY.length)}`;
      bridgeP /= Math.max((String.fromCharCode(73,0) == referrerW ? referrerW.length : textU.length), 3);
      if (anytime9) {
         break;
      }
   } while ((1 >= (parseInt(`${bridgeP}`) / (Math.max(turnu.length, 9))) && (turnu.length + 1) >= 4) && anytime9);
       let typingG = 5.0;
         typingG /= Math.max(4, parseFloat(`${parseInt(`${typingG}`)}`));
         typingG *= parseFloat(`${parseInt(`${typingG}`) & parseInt(`${typingG}`)}`);
      if (typingG < typingG) {
         typingG *= parseFloat(`${parseInt(`${typingG}`) * 3}`);
      }
      emojir = [parseInt(`${bridgeP}`) % 1];
   if (3 == predictionB.length) {
      predictionB += `${emojir.length / 2}`;
   }
      bridgeP += (String.fromCharCode(89,0) == textU ? emojir.length : textU.length);
       let upload0 = String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,97,95,55,52,0);
       let selectedZ: Map<any, any> = new Map([[String.fromCharCode(114,95,52,54,95,97,110,116,105,99,111,108,108,97,112,115,101,0),92], [String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,113,95,54,49,0),869]]);
       let mappingG = true;
         selectedZ = new Map([[`${selectedZ.size}`, selectedZ.size]]);
      while (4 <= selectedZ.size) {
         selectedZ.set(`${mappingG}`, selectedZ.size | 3);
         break;
      }
       let wnewsv = false;
       let appleO = 0.0;
      let logout1 = appleO >= 8899962.0;
      do {
         appleO *= (parseInt(`${appleO}`) + (wnewsv ? 3 : 1));
         if (logout1) {
            break;
         }
      } while (logout1 && (selectedZ.size >= 5));
         upload0 = `${(upload0.length + (wnewsv ? 3 : 5))}`;
      while (!wnewsv && !mappingG) {
         wnewsv = (wnewsv ? !mappingG : !wnewsv);
         break;
      }
          let comment4 = String.fromCharCode(115,117,98,116,114,101,101,95,54,95,49,57,0);
         wnewsv = selectedZ.size == 94;
         comment4 += `${comment4.length ^ 1}`;
       let disconnectedw = 5.0;
      turnu += `${(desc6.length | (mappingG ? 2 : 2))}`;
   for (let b = 0; b < 3; b++) {
      referrerW += "2";
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
       let appst = String.fromCharCode(122,95,54,48,95,101,110,97,98,108,101,0);
    let twitterF = 0;
    let borderless0 = String.fromCharCode(101,95,51,95,115,117,98,115,116,114,0);
    let scheduleX = 1.0;
    let stationS = 2.0;
    let tumbnailk: Array<any> = [String.fromCharCode(115,109,111,111,116,104,95,109,95,51,55,0), String.fromCharCode(99,95,54,55,95,105,99,111,110,115,0)];
    let lived = String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,97,95,49,56,0);
    let type_1A: Map<any, any> = new Map([[String.fromCharCode(111,95,50,55,95,119,101,120,112,97,110,100,0),185], [String.fromCharCode(119,101,97,118,101,95,109,95,56,53,0),242], [String.fromCharCode(99,95,52,48,95,115,112,108,105,116,109,118,115,0),854]]);
    let strings8 = 4.0;
    let download6 = String.fromCharCode(109,101,103,101,100,95,116,95,51,50,0);
    let backh: Array<any> = [623, 788];
    let fileM = String.fromCharCode(111,95,53,56,95,100,105,109,115,0);
    let backgroundR = 4.0;
    let nativeD = String.fromCharCode(100,95,49,49,95,119,99,104,97,114,0);
   for (let m = 0; m < 1; m++) {
      strings8 /= Math.max(parseFloat(`${download6.length}`), 4);
   }
   while (borderless0.startsWith(`${strings8}`)) {
      borderless0 = `${parseInt(`${strings8}`) + lived.length}`;
      break;
   }
   for (let y = 0; y < 1; y++) {
      appst += `${(String.fromCharCode(107,0) == fileM ? fileM.length : parseInt(`${backgroundR}`))}`;
   }
      appst = `${backh.length * download6.length}`;
   for (let w = 0; w < 2; w++) {
      download6 += `${1 >> (Math.min(Math.abs(parseInt(`${strings8}`)), 5))}`;
   }
      backgroundR -= parseFloat(`${backh.length}`);
   let modelsW = appst.length <= 6137168;
   do {
       let gemfilev: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,115,95,56,95,49,0),String.fromCharCode(108,115,98,102,117,108,108,95,113,95,51,51,0)], [String.fromCharCode(109,95,54,51,95,103,101,116,97,115,115,111,99,105,100,0),String.fromCharCode(118,97,108,105,100,95,51,95,55,53,0)]]);
          let stylei = String.fromCharCode(100,114,111,112,95,108,95,57,48,0);
          let w_unlockO = 5.0;
         gemfilev = new Map([[`${gemfilev.size}`, stylei.length]]);
         stylei += `${parseInt(`${w_unlockO}`)}`;
      if ((gemfilev.size & 3) == 5) {
          let volumez = 1.0;
         gemfilev.set(`${volumez}`, gemfilev.size);
      }
         gemfilev.set(`${gemfilev.size}`, 1);
      appst = `${appst.length}`;
      if (modelsW) {
         break;
      }
   } while ((!appst.startsWith(`${strings8}`)) && modelsW);
      stationS += parseInt(`${stationS}`);
       let sortX = String.fromCharCode(107,95,56,50,95,100,105,103,101,115,116,115,0);
       let kickx = 0.0;
         kickx *= (sortX == String.fromCharCode(66,0) ? parseInt(`${kickx}`) : sortX.length);
      if ((parseInt(`${kickx}`) * sortX.length) >= 5) {
         sortX = `${parseInt(`${kickx}`) << (Math.min(sortX.length, 5))}`;
      }
         sortX = `${(sortX == String.fromCharCode(74,0) ? parseInt(`${kickx}`) : sortX.length)}`;
          let analyticsE: Map<any, any> = new Map([[String.fromCharCode(114,101,116,105,110,97,95,48,95,49,0),377], [String.fromCharCode(99,95,52,56,95,100,118,100,97,116,97,0),411], [String.fromCharCode(108,95,53,53,95,98,117,102,102,101,114,115,114,99,0),904]]);
         sortX += "3";
         analyticsE = new Map([[`${analyticsE.size}`, analyticsE.size >> (Math.min(Math.abs(3), 3))]]);
          let historyl = String.fromCharCode(103,97,112,115,95,101,95,53,49,0);
          let inactiveb = String.fromCharCode(109,95,53,54,95,112,114,101,100,111,119,110,108,111,97,100,0);
         kickx -= parseInt(`${kickx}`) ^ 3;
         historyl = "2";
         inactiveb = "3";
         kickx -= sortX.length;
      strings8 -= (parseFloat(`${String.fromCharCode(102,0) == lived ? tumbnailk.length : lived.length}`));
      scheduleX /= Math.max((download6 == String.fromCharCode(117,0) ? parseInt(`${scheduleX}`) : download6.length), 1);
      backgroundR *= parseFloat(`${2 << (Math.min(2, borderless0.length))}`);
   let playercommonv = 8386577.0 <= scheduleX;
   do {
      scheduleX *= backh.length << (Math.min(3, Math.abs(parseInt(`${backgroundR}`))));
      if (playercommonv) {
         break;
      }
   } while (playercommonv && (2 < backh.length));
   let descS = 6042643 <= tumbnailk.length;
   do {
      tumbnailk = [fileM.length];
      if (descS) {
         break;
      }
   } while ((tumbnailk.length == scheduleX) && descS);
   let awayQ = twitterF >= 5960756;
   do {
      twitterF |= type_1A.size;
      if (awayQ) {
         break;
      }
   } while ((!tumbnailk.includes(twitterF)) && awayQ);
      download6 = `${borderless0.length << (Math.min(Math.abs(3), 2))}`;
   for (let x = 0; x < 3; x++) {
      scheduleX += parseInt(`${backgroundR}`) / (Math.max(6, parseInt(`${strings8}`)));
   }
      borderless0 = `${download6.length}`;
       let whistle8 = true;
      if (whistle8) {
         whistle8 = (whistle8 ? whistle8 : whistle8);
      }
         whistle8 = !whistle8;
      while (whistle8 || whistle8) {
          let station0 = 3.0;
          let buttonx = String.fromCharCode(100,95,50,53,95,109,115,122,104,0);
          let videocommonq: Map<any, any> = new Map([[String.fromCharCode(107,95,53,53,95,99,111,108,108,101,99,116,97,98,108,101,0),465], [String.fromCharCode(118,95,49,50,95,98,97,99,107,111,102,102,0),702]]);
          let recommendationT: Array<any> = [111, 979];
         whistle8 = 85.11 < station0 || recommendationT.length < 26;
         station0 -= videocommonq.size;
         buttonx = `${1 * buttonx.length}`;
         videocommonq = new Map([[`${videocommonq.size}`, (buttonx == String.fromCharCode(69,0) ? videocommonq.size : buttonx.length)]]);
         recommendationT.push(2 & buttonx.length);
         break;
      }
      scheduleX += parseInt(`${backgroundR}`);
      scheduleX += parseInt(`${scheduleX}`) * parseInt(`${backgroundR}`);
       let heartt = String.fromCharCode(115,97,109,101,113,95,56,95,55,52,0);
       let benefitZ = true;
       let crossR: Array<any> = [673, 995];
         heartt += `${crossR.length}`;
          let materialF = String.fromCharCode(97,118,115,115,95,105,95,52,57,0);
         heartt = `${((benefitZ ? 3 : 3) - crossR.length)}`;
         materialF += `${(String.fromCharCode(66,0) == materialF ? materialF.length : materialF.length)}`;
      if (!benefitZ) {
          let circlew = String.fromCharCode(112,95,53,51,95,107,112,115,0);
          let canvasp = 5.0;
         crossR = [parseInt(`${canvasp}`) ^ 3];
         circlew += `${2 | circlew.length}`;
         canvasp -= circlew.length;
      }
      let canvase = benefitZ ? !benefitZ : benefitZ;
      do {
         benefitZ = 16 == heartt.length;
         if (canvase) {
            break;
         }
      } while (canvase && (heartt.includes(`${benefitZ}`)));
      let favoriteQ = 7757838 <= heartt.length;
      do {
         heartt += `${2 + heartt.length}`;
         if (favoriteQ) {
            break;
         }
      } while ((heartt.length == 5) && favoriteQ);
         benefitZ = crossR.includes(benefitZ);
       let philippinesL = String.fromCharCode(119,111,114,100,108,101,110,95,121,95,50,49,0);
       let viewerp = String.fromCharCode(103,95,48,95,97,118,97,116,97,114,0);
         viewerp += `${3 >> (Math.min(1, viewerp.length))}`;
         philippinesL += `${heartt.length}`;
      download6 = `${twitterF << (Math.min(Math.abs(parseInt(`${stationS}`)), 3))}`;
       let goalJ = String.fromCharCode(97,110,116,105,95,110,95,57,49,0);
      if (goalJ.endsWith(`${goalJ.length}`)) {
         goalJ += `${goalJ.length << (Math.min(2, goalJ.length))}`;
      }
         goalJ = `${goalJ.length ^ goalJ.length}`;
      while (4 >= goalJ.length) {
          let thumbnailq = 4;
         goalJ += `${(String.fromCharCode(49,0) == goalJ ? thumbnailq : goalJ.length)}`;
         break;
      }
      strings8 += parseFloat(`${type_1A.size | 3}`);
      type_1A = new Map([[`${tumbnailk.length}`, tumbnailk.length]]);
   for (let l = 0; l < 2; l++) {
      borderless0 += `${parseInt(`${stationS}`) | tumbnailk.length}`;
   }
      strings8 += parseFloat(`${3}`);
   if (borderless0.length == 2) {
      type_1A = new Map([[download6, 1 + lived.length]]);
   }
      tumbnailk.push(type_1A.size);
   let reminderg = scheduleX <= 9740478.0;
   do {
       let placeholdern = String.fromCharCode(122,95,56,53,95,112,110,105,101,108,115,0);
       let stationsA = 1.0;
       let stationA: Map<any, any> = new Map([[String.fromCharCode(122,95,55,55,95,97,117,116,111,0),709], [String.fromCharCode(109,95,55,95,101,110,100,120,0),244]]);
      while ((5 | stationA.size) >= 2 && (5 | placeholdern.length) >= 2) {
          let chartW: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,97,110,103,108,101,95,106,95,52,56,0),720], [String.fromCharCode(115,104,105,109,115,95,54,95,51,57,0),874], [String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,99,95,53,49,0),708]]);
          let stepB: Array<any> = [933, 493, 498];
          let turng = String.fromCharCode(113,95,49,55,95,119,109,118,100,97,116,97,0);
          let indexH = 4;
          let listT: Array<any> = [String.fromCharCode(103,111,110,101,95,103,95,56,57,0), String.fromCharCode(117,95,53,95,100,101,115,107,116,111,112,0)];
         stationA = new Map([[`${stepB.length}`, turng.length]]);
         chartW.set(`${indexH}`, indexH - 2);
         stepB = [chartW.size ^ indexH];
         turng += `${chartW.size}`;
         listT = [indexH - chartW.size];
         break;
      }
      while (stationsA == 5.44) {
          let viewerr = 4.0;
          let helper8: Array<any> = [902, 907];
          let middlei: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,49,95,52,48,0),847], [String.fromCharCode(101,100,105,116,95,100,95,55,51,0),993]]);
         stationsA *= 1;
         viewerr -= helper8.length & 1;
         helper8 = [parseInt(`${viewerr}`)];
         middlei = new Map([[`${helper8.length}`, 1 & parseInt(`${viewerr}`)]]);
         break;
      }
      let materialH = stationA.size <= 9539018;
      do {
          let linkB: Array<any> = [643, 344, 874];
          let videoX = 2.0;
         stationA = new Map([[`${stationA.size}`, (String.fromCharCode(117,0) == placeholdern ? placeholdern.length : stationA.size)]]);
         linkB.push(2 << (Math.min(3, linkB.length)));
         videoX -= parseFloat(`${linkB.length * 2}`);
         if (materialH) {
            break;
         }
      } while (materialH && ((stationsA / 4.37) == 3.60));
          let submitF = 4.0;
          let sharedv = true;
          let favoriteK = String.fromCharCode(120,95,50,52,95,116,101,120,116,115,0);
         stationA.set(`${submitF}`, 3 ^ parseInt(`${submitF}`));
         sharedv = favoriteK.includes(`${sharedv}`);
         favoriteK += `${(favoriteK == String.fromCharCode(81,0) ? (sharedv ? 4 : 3) : favoriteK.length)}`;
      let searchbar7 = placeholdern == String.fromCharCode(105,57,55,106,107,0);
      do {
         placeholdern += `${placeholdern.length}`;
         if (searchbar7) {
            break;
         }
      } while (((placeholdern.length * stationA.size) > 2 && (stationA.size * placeholdern.length) > 2) && searchbar7);
         placeholdern = `${parseInt(`${stationsA}`)}`;
      while (!placeholdern.startsWith(`${stationsA}`)) {
          let detailsy = String.fromCharCode(100,95,49,51,95,99,111,108,111,114,115,112,97,99,101,100,115,112,0);
          let sentryZ = 5.0;
         placeholdern += "3";
         detailsy += `${(detailsy == String.fromCharCode(48,0) ? parseInt(`${sentryZ}`) : detailsy.length)}`;
         sentryZ /= Math.max(4, (parseFloat(`${String.fromCharCode(73,0) == detailsy ? parseInt(`${sentryZ}`) : detailsy.length}`)));
         break;
      }
          let rightq = String.fromCharCode(113,112,102,105,108,101,95,49,95,48,0);
          let interstitialD = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,118,95,53,54,0);
         stationsA -= (placeholdern == String.fromCharCode(68,0) ? rightq.length : placeholdern.length);
         rightq += `${3 % (Math.max(9, interstitialD.length))}`;
         interstitialD += `${interstitialD.length >> (Math.min(3, interstitialD.length))}`;
      while (placeholdern.length > 5) {
         placeholdern = `${parseInt(`${stationsA}`) & 1}`;
         break;
      }
      scheduleX *= parseInt(`${backgroundR}`) - parseInt(`${stationS}`);
      if (reminderg) {
         break;
      }
   } while (reminderg && (1.34 < stationS));
   while ((type_1A.size - 1) == 5 || 1 == (type_1A.size - lived.length)) {
      type_1A.set(`${scheduleX}`, 2);
      break;
   }

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

            ttTarget.toName('uploadVideoPreview', {
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