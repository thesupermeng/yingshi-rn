import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import {
  VFMode,
  QQCenterChart,
} from "@redux/reducers/pxk_lang_quest";
import { removeVodsFromHistory, playVod } from "@redux/actions/xif_layout";
import VodHistoryCard from "../../components/vod/sps_layout";
import CheckBoxSelected from "@static/images/foundPauseCircle.svg";
import CheckBoxUnselected from "@static/images/middlewareGoalStation.svg";
import { XVSScoreDark } from "@type/wpk_long";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/nw_topic";
import EmptyList from "../../components/common/jip_next_bell";

type MEYMode = {
  item: VFMode;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: QQCenterChart = useAppSelector(
    ({ vodReducer }: PSmall) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<XVSScoreDark>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let forward7 = 4;
    let arrowM: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,114,101,99,111,114,100,97,98,108,101,0),true ], [String.fromCharCode(119,95,49,54,95,108,111,97,115,0),true ]]);
    let membershipa = 4.0;
    let lineF = String.fromCharCode(118,95,57,56,95,109,97,99,101,120,97,109,112,108,101,0);
    let moviesg = String.fromCharCode(115,95,50,56,95,98,105,97,115,0);
    let stationI = String.fromCharCode(119,95,48,95,98,97,122,101,108,0);
    let verticalE = true;
    let pressure1 = 3.0;
    let shirtY = 2;
    let type_fP: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,111,95,55,0),String.fromCharCode(100,105,118,105,100,101,114,115,95,104,95,53,54,0)], [String.fromCharCode(109,101,115,115,97,103,101,115,95,48,95,56,53,0),String.fromCharCode(101,95,57,51,95,116,109,105,120,0)]]);
    let commonJ = true;
    let anythinkE = 3;
    let inviteg = String.fromCharCode(103,101,116,95,99,95,54,51,0);
    let windA: Array<any> = [253, 400];
       let kickY = 4;
       let placementJ = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,48,95,53,55,0);
      for (let z = 0; z < 3; z++) {
          let settingZ = true;
          let gpay7 = 2.0;
         kickY -= (String.fromCharCode(118,0) == placementJ ? placementJ.length : (settingZ ? 3 : 4));
         settingZ = 34.100 >= gpay7;
         gpay7 *= parseFloat(`${parseInt(`${gpay7}`) << (Math.min(4, Math.abs(parseInt(`${gpay7}`))))}`);
      }
         kickY ^= (placementJ == String.fromCharCode(85,0) ? kickY : placementJ.length);
       let updatesp: Array<any> = [694, 594, 810];
       let configZ: Array<any> = [705, 625];
      for (let q = 0; q < 3; q++) {
         placementJ += `${kickY}`;
      }
      while (4 > kickY) {
         kickY /= Math.max(4, configZ.length * 1);
         break;
      }
         kickY >>= Math.min(4, Math.abs(2 | configZ.length));
      forward7 <<= Math.min(Math.abs(1), 1);
   let otherl = 7410638.0 >= pressure1;
   do {
      pressure1 -= parseFloat(`${forward7 % (Math.max(3, 9))}`);
      if (otherl) {
         break;
      }
   } while (otherl && (forward7 > pressure1));
   while ((1 ^ type_fP.size) >= 1 || 3 >= (type_fP.size ^ 1)) {
       let description_0q = 4.0;
       let muted9: Array<any> = [589, 345];
       let modelR: Array<any> = [222, 756, 347];
         muted9.push(parseInt(`${description_0q}`) & 1);
         muted9 = [2 & parseInt(`${description_0q}`)];
          let handlerB = String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,95,103,95,54,53,0);
          let complete9 = 0.0;
          let private_tky = String.fromCharCode(115,116,111,114,101,102,114,97,109,101,95,106,95,52,53,0);
         muted9.push(parseInt(`${description_0q}`) >> (Math.min(1, Math.abs(3))));
         handlerB = `${private_tky.length}`;
         complete9 += parseFloat(`${private_tky.length | 3}`);
         muted9 = [muted9.length];
          let helper7 = 1.0;
          let becomew = false;
         description_0q -= parseFloat(`${3}`);
         helper7 *= 2 % (Math.max(1, parseInt(`${helper7}`)));
         becomew = !becomew;
          let send2 = true;
          let delegate_272 = String.fromCharCode(109,101,115,104,95,98,95,53,48,0);
          let reminderT = String.fromCharCode(110,95,57,53,95,101,120,116,114,97,100,97,116,97,0);
         muted9 = [((send2 ? 3 : 5) * 2)];
         send2 = delegate_272 == String.fromCharCode(82,0) && reminderT.length <= 82;
         delegate_272 = `${delegate_272.length}`;
         reminderT += `${delegate_272.length}`;
          let eighteenq = true;
          let filterj = String.fromCharCode(98,115,101,114,118,101,114,95,106,95,55,51,0);
         muted9 = [2];
         eighteenq = (7 <= ((eighteenq ? filterj.length : 7) >> (Math.min(filterj.length, 4))));
         description_0q -= parseFloat(`${1}`);
      while (4 < modelR.length) {
          let savex = false;
          let megaphoneP = false;
         description_0q -= parseFloat(`${muted9.length}`);
         savex = megaphoneP;
         break;
      }
      type_fP = new Map([[`${arrowM.size}`, arrowM.size]]);
      break;
   }
      pressure1 += parseFloat(`${shirtY * parseInt(`${membershipa}`)}`);
   let langl = 6651598 >= forward7;
   do {
      forward7 /= Math.max(parseInt(`${pressure1}`) + 3, 3);
      if (langl) {
         break;
      }
   } while (((3 - forward7) == 3) && langl);
       let firebaseO = String.fromCharCode(113,95,50,49,95,109,98,108,111,111,112,0);
      let settingsc = firebaseO.length >= 5038763;
      do {
         firebaseO = `${firebaseO.length - firebaseO.length}`;
         if (settingsc) {
            break;
         }
      } while ((firebaseO.length >= firebaseO.length) && settingsc);
       let giftJ: Array<any> = [String.fromCharCode(97,95,49,54,95,112,108,97,110,97,114,116,111,117,121,118,121,0), String.fromCharCode(108,95,51,55,95,116,120,105,100,0), String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,111,95,49,51,0)];
      while (5 == (firebaseO.length | giftJ.length) && 5 == (firebaseO.length | 5)) {
         giftJ.push(3);
         break;
      }
      arrowM = new Map([[`${pressure1}`, 2 - stationI.length]]);
       let episodest = String.fromCharCode(102,95,53,95,100,101,113,117,101,117,101,100,0);
       let privacyB = 3.0;
      for (let y = 0; y < 1; y++) {
         episodest += `${parseInt(`${privacyB}`)}`;
      }
       let chinal = String.fromCharCode(112,95,50,48,95,100,97,121,115,0);
       let desc0 = String.fromCharCode(113,95,53,50,95,98,117,102,0);
      for (let h = 0; h < 2; h++) {
          let trophyW: Array<any> = [391, 1000];
         chinal = `${desc0.length % (Math.max(2, chinal.length))}`;
         trophyW.push(1);
      }
         episodest += "1";
      if (episodest.includes(desc0)) {
         desc0 = `${parseInt(`${privacyB}`)}`;
      }
          let lessN = 0.0;
         privacyB -= parseFloat(`${episodest.length}`);
         lessN -= parseFloat(`${parseInt(`${lessN}`) + parseInt(`${lessN}`)}`);
      moviesg = `${((commonJ ? 3 : 2) ^ (verticalE ? 4 : 2))}`;
   while (3 < moviesg.length) {
      moviesg += `${stationI.length}`;
      break;
   }
   while (type_fP.size < stationI.length) {
       let custom4 = false;
       let scheduleD = true;
      while (scheduleD) {
         custom4 = custom4 || scheduleD;
         break;
      }
          let stepK: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,95,115,101,108,101,99,116,105,110,103,0),175], [String.fromCharCode(113,95,56,49,95,97,102,105,108,116,101,114,0),4], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,53,95,54,54,0),153]]);
         custom4 = stepK.size == 83;
      let subsC = scheduleD ? !scheduleD : scheduleD;
      do {
         scheduleD = (custom4 ? !scheduleD : !custom4);
         if (subsC) {
            break;
         }
      } while ((!custom4) && subsC);
         scheduleD = !custom4;
      if (scheduleD) {
         scheduleD = (!custom4 ? scheduleD : !custom4);
      }
      if (scheduleD || !custom4) {
          let selectionz: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,101,114,115,95,100,95,55,57,0),542], [String.fromCharCode(109,97,121,98,101,95,112,95,53,49,0),890], [String.fromCharCode(103,101,110,101,114,97,116,111,114,95,103,95,51,55,0),34]]);
          let shirtj: Array<any> = [983, 717, 881];
          let brightnessb: Array<any> = [757, 848];
          let anewsh = 2.0;
         scheduleD = 11 >= shirtj.length;
         selectionz = new Map([[`${selectionz.size}`, brightnessb.length & 2]]);
         shirtj = [3 - parseInt(`${anewsh}`)];
         brightnessb = [2 >> (Math.min(1, Math.abs(selectionz.size)))];
         anewsh /= Math.max(brightnessb.length, 1);
      }
      stationI = `${(parseInt(`${membershipa}`) | (scheduleD ? 5 : 4))}`;
      break;
   }
       let castingF: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(99,97,108,105,110,103,95,116,95,53,55,0),true ], [String.fromCharCode(113,95,56,56,95,105,110,116,101,114,115,101,99,116,0),false ]]);
      let tempf = castingF.size >= 8784655;
      do {
         castingF.set(`${castingF.size}`, castingF.size | castingF.size);
         if (tempf) {
            break;
         }
      } while ((!Array.from(castingF.keys()).includes(`${castingF.size}`)) && tempf);
         castingF = new Map([[`${castingF.size}`, castingF.size % (Math.max(castingF.size, 8))]]);
      for (let m = 0; m < 2; m++) {
         castingF = new Map([[`${castingF.size}`, 2]]);
      }
      verticalE = parseFloat(`${forward7}`) < pressure1;
      pressure1 += parseFloat(`${forward7 + arrowM.size}`);
   for (let b = 0; b < 2; b++) {
      forward7 <<= Math.min(1, Math.abs(shirtY ^ 1));
   }
      shirtY %= Math.max(2, 1);
      verticalE = 5 == stationI.length;
   let entryd = moviesg == String.fromCharCode(49,103,102,109,0);
   do {
      moviesg = `${lineF.length}`;
      if (entryd) {
         break;
      }
   } while (entryd && (!moviesg.includes(`${anythinkE}`)));
   for (let w = 0; w < 1; w++) {
      forward7 *= shirtY + 1;
   }
   if (parseFloat(`${moviesg.length}`) >= membershipa) {
       let progressf = String.fromCharCode(112,111,115,116,105,111,110,95,49,95,54,54,0);
       let home0 = String.fromCharCode(117,95,51,57,95,109,97,112,115,105,122,101,0);
       let volumeT = 4.0;
         progressf = `${progressf.length / (Math.max(3, 4))}`;
      for (let m = 0; m < 2; m++) {
         progressf += "2";
      }
      while (!progressf.includes(`${volumeT}`)) {
          let linkI = 2;
          let mutedv = 5;
         progressf += "2";
         linkI += linkI & 2;
         mutedv |= 1 + mutedv;
         break;
      }
         progressf += "3";
      let statsi = 9143013 <= progressf.length;
      do {
          let previewj = 2.0;
          let hongkong9 = String.fromCharCode(104,95,52,49,95,118,101,114,105,102,121,105,110,103,0);
          let analyticR = String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,109,95,49,48,0);
          let taiwanm = 3.0;
         progressf = "1";
         previewj /= Math.max(4, parseFloat(`${parseInt(`${previewj}`) & 2}`));
         hongkong9 = `${parseInt(`${taiwanm}`)}`;
         analyticR += `${parseInt(`${previewj}`) | hongkong9.length}`;
         taiwanm *= parseFloat(`${1 + parseInt(`${previewj}`)}`);
         if (statsi) {
            break;
         }
      } while (statsi && (home0.length > progressf.length));
       let privacyK = 3.0;
       let pagez = 1.0;
       let sansT: Array<any> = [817, 305];
       let styleS: Array<any> = [778, 748];
      let nextU = styleS.length <= 6688286;
      do {
          let philippinesB = false;
          let volume3 = 4;
          let clocko = 2;
         styleS = [volume3 + 2];
         philippinesB = !philippinesB;
         volume3 ^= 1 % (Math.max(clocko, 1));
         clocko %= Math.max(4, 2);
         if (nextU) {
            break;
         }
      } while (nextU && (1.11 >= (parseFloat(`${styleS.length}`) * volumeT)));
          let hooksz: Array<any> = [751, 270, 345];
          let macauh = 2.0;
         progressf = `${styleS.length & 1}`;
         hooksz.push(2 >> (Math.min(Math.abs(parseInt(`${macauh}`)), 2)));
         macauh += hooksz.length;
      moviesg = `${anythinkE}`;
   }
   if (commonJ) {
       let logoW: Array<any> = [431, 409];
          let pressureM = String.fromCharCode(116,105,109,101,108,105,110,101,95,51,95,53,57,0);
          let downloadingu = 4.0;
          let modeH = 2;
         logoW = [3];
         pressureM += `${modeH}`;
         downloadingu += 2 << (Math.min(2, Math.abs(parseInt(`${downloadingu}`))));
         modeH *= parseInt(`${downloadingu}`);
       let league2 = 5.0;
       let topicn = 3.0;
      if (logoW.includes(topicn)) {
         logoW.push(parseInt(`${topicn}`));
      }
      lineF = "3";
   }
       let whiteO = String.fromCharCode(97,99,99,101,112,116,95,100,95,53,53,0);
       let line6 = 1.0;
      if (2 >= (whiteO.length | 2)) {
         line6 /= Math.max(parseInt(`${line6}`) | 2, 5);
      }
      if (2 > (parseInt(`${line6}`) / (Math.max(whiteO.length, 1)))) {
         whiteO = `${(whiteO == String.fromCharCode(72,0) ? parseInt(`${line6}`) : whiteO.length)}`;
      }
      for (let c = 0; c < 1; c++) {
         line6 += (String.fromCharCode(114,0) == whiteO ? parseInt(`${line6}`) : whiteO.length);
      }
         line6 -= (whiteO == String.fromCharCode(119,0) ? whiteO.length : parseInt(`${line6}`));
      while ((whiteO.length / 4) <= 5) {
         whiteO = `${parseInt(`${line6}`) >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         whiteO += `${3 | whiteO.length}`;
      lineF += `${forward7}`;
       let controlsX = String.fromCharCode(112,116,114,95,99,95,50,52,0);
       let gpay72 = 2.0;
      if ((controlsX.length + parseInt(`${gpay72}`)) > 3) {
         controlsX = `${parseInt(`${gpay72}`)}`;
      }
      if (4.55 >= (controlsX.length * gpay72)) {
         gpay72 -= (controlsX == String.fromCharCode(84,0) ? controlsX.length : parseInt(`${gpay72}`));
      }
      for (let u = 0; u < 3; u++) {
          let progressO = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,105,95,56,48,0);
          let promotionB = String.fromCharCode(105,95,56,48,95,98,121,116,101,119,111,114,100,0);
         gpay72 *= 3;
         progressO += `${progressO.length}`;
         promotionB = `${(String.fromCharCode(87,0) == progressO ? progressO.length : promotionB.length)}`;
      }
          let photoh = 4.0;
         controlsX = `${parseInt(`${photoh}`)}`;
         controlsX = `${controlsX.length}`;
      for (let r = 0; r < 2; r++) {
         controlsX += "2";
      }
      anythinkE %= Math.max(arrowM.size, 1);
   let guideR = shirtY <= 7865801;
   do {
      shirtY /= Math.max(1, parseInt(`${membershipa}`));
      if (guideR) {
         break;
      }
   } while ((commonJ) && guideR);
      forward7 |= inviteg.length ^ 1;
   while ((shirtY + arrowM.size) == 2 && (arrowM.size + 2) == 2) {
      arrowM.set(`${pressure1}`, forward7 * parseInt(`${pressure1}`));
      break;
   }
       let combine5: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,113,95,56,48,0),String.fromCharCode(120,106,112,101,103,95,114,95,52,0)], [String.fromCharCode(101,120,112,97,110,100,101,100,95,57,95,56,0),String.fromCharCode(97,98,117,115,101,95,115,95,50,52,0)], [String.fromCharCode(117,95,51,57,95,105,102,97,99,101,0),String.fromCharCode(109,95,50,56,95,105,110,115,116,114,0)]]);
      for (let v = 0; v < 1; v++) {
         combine5 = new Map([[`${combine5.size}`, combine5.size]]);
      }
      while (combine5.get(`${combine5.size}`) != null) {
          let minivodR = String.fromCharCode(116,101,108,101,103,114,97,109,95,48,95,52,54,0);
          let crownG = String.fromCharCode(97,95,49,53,95,99,100,102,116,0);
          let page_ = false;
          let downa = 3.0;
         combine5.set(`${page_}`, (crownG.length >> (Math.min(4, Math.abs((page_ ? 3 : 5))))));
         minivodR += `${minivodR.length}`;
         crownG += `${(minivodR == String.fromCharCode(117,0) ? parseInt(`${downa}`) : minivodR.length)}`;
         downa -= 3 & minivodR.length;
         break;
      }
      let philippinesU = combine5.size >= 5555081;
      do {
         combine5.set(`${combine5.size}`, combine5.size ^ combine5.size);
         if (philippinesU) {
            break;
         }
      } while (philippinesU && (Array.from(combine5.keys()).includes(`${combine5.size}`)));
      stationI += "1";
       let scoreV = 2;
       let fieldZ = 4;
       let success3 = String.fromCharCode(97,108,105,103,110,101,100,95,121,95,49,49,0);
      let floatingj = scoreV <= 7105449;
      do {
          let tempH = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,102,95,55,54,0);
          let membershipaa = false;
         scoreV *= ((membershipaa ? 4 : 5) & fieldZ);
         tempH += `${1 + tempH.length}`;
         membershipaa = tempH == tempH;
         if (floatingj) {
            break;
         }
      } while (((scoreV - success3.length) >= 1 || (scoreV - success3.length) >= 1) && floatingj);
       let filedJ = String.fromCharCode(115,99,101,110,101,99,117,116,95,53,95,49,54,0);
       let reducerZ = String.fromCharCode(121,95,56,56,95,114,101,109,105,120,105,110,103,0);
         filedJ = `${scoreV >> (Math.min(reducerZ.length, 3))}`;
         success3 += `${reducerZ.length - fieldZ}`;
      let fulla = filedJ == String.fromCharCode(122,48,55,100,112,53,54,118,99,122,0);
      do {
         filedJ += `${fieldZ}`;
         if (fulla) {
            break;
         }
      } while (fulla && (filedJ == String.fromCharCode(55,0) || 2 > success3.length));
          let analyticA = 5.0;
          let long_z6 = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,110,95,57,57,0);
         scoreV &= 2 * scoreV;
         analyticA += parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${analyticA}`))))}`);
         long_z6 = `${(long_z6 == String.fromCharCode(52,0) ? long_z6.length : parseInt(`${analyticA}`))}`;
         success3 += `${reducerZ.length + 1}`;
      for (let v = 0; v < 1; v++) {
         fieldZ /= Math.max(reducerZ.length, 1);
      }
          let xvodj = String.fromCharCode(99,95,57,95,100,105,118,105,100,101,114,115,0);
          let long_v9F = 5.0;
          let renewZ: Map<any, any> = new Map([[String.fromCharCode(118,97,108,115,95,98,95,54,0),644], [String.fromCharCode(113,95,50,50,95,99,119,114,115,105,0),514], [String.fromCharCode(108,95,55,95,114,97,98,98,105,116,0),456]]);
         fieldZ /= Math.max(filedJ.length, 1);
         xvodj += `${parseInt(`${long_v9F}`) ^ 1}`;
         long_v9F -= parseFloat(`${1 & parseInt(`${long_v9F}`)}`);
         renewZ.set(xvodj, (xvodj == String.fromCharCode(73,0) ? xvodj.length : renewZ.size));
      type_fP = new Map([[`${arrowM.size}`, 3 | arrowM.size]]);
   let header5 = 6782386 >= anythinkE;
   do {
      anythinkE <<= Math.min(4, parseInt(`${Math.abs((parseInt(`${membershipa}`) / (Math.max(9, (verticalE ? 4 : 4)))))}`));
      if (header5) {
         break;
      }
   } while (((5 ^ inviteg.length) == 3 && (5 ^ anythinkE) == 2) && header5);

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: XVSScoreDark) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  let data = history;

  const today = new Date(); 

  let customHistoryToday: any = [];
  let customHistoryEarly: any = [];

  data.forEach((item) => {
    const recordedAt = new Date(item.recordedAt);
    if (
      recordedAt.toISOString().split("T")[0] ===
      today.toISOString().split("T")[0]
    ) {
      customHistoryToday.push(item);
    } else {
      customHistoryEarly.push(item);
    }
  });

  console.log("customHistoryToday");
  console.log(customHistoryToday);

  console.log("customHistoryEarly");
  console.log(customHistoryEarly);
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="播放历史"
        right={
          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              setIsEditing(!isEditing);
              setRemoveHistory([]);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                padding: 8,
                opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </TouchableOpacity>
        }
        headerStyle={{ marginBottom: spacing.m }}
      />
      {history && history.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {customHistoryToday.length > 0 && (
            <>
              <View style={{ marginBottom: 10 }}>
                <Text style={textStyles}>今日</Text>
                {customHistoryToday.map(
                  (item: VFMode, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity activeOpacity={0.85}
                          style={styles.checkbox}
                          onPress={() => toggleHistory(item)}
                        >
                          {removeHistory.some(
                            (x) => x.vod_id === item.vod_id
                          ) ? (
                            <CheckBoxSelected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          ) : (
                            <CheckBoxUnselected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          )}
                        </TouchableOpacity>
                      )}
                      <VodHistoryCard
                        activeOpacity={isEditing ? 1 : 0.85}
                        vod={item}
                        onPress={() => {
                          if (isEditing) {
                            toggleHistory(item);
                          } else {
                            dispatch(playVod(item));
                            navigation.navigate("播放", {
                              vod_id: item.vod_id,
                            });
                          }
                        }}
                      />
                    </View>
                  )
                )}
              </View>
            </>
          )}

          {customHistoryEarly.length > 0 && (
            <>
              <Text style={textStyles}>更早</Text>
              {customHistoryEarly.map((item: VFMode, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity activeOpacity={0.85}
                      style={styles.checkbox}
                      onPress={() => toggleHistory(item)}
                    >
                      {removeHistory.some((x) => x.vod_id === item.vod_id) ? (
                        <CheckBoxSelected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      ) : (
                        <CheckBoxUnselected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  <VodHistoryCard
                    activeOpacity={isEditing ? 1 : 0.85}
                    vod={item}
                    onPress={() => {
                      if (isEditing) {
                        toggleHistory(item);
                      } else {
                        dispatch(playVod(item));
                            navigation.navigate("播放", {
                              vod_id: item.vod_id,
                            });
                      }
                    }}
                  />
                </View>
              ))}
            </>
          )}
        </ScrollView>
      ) : (
        <EmptyList description="暂无播放历史" />
      )}
      <ConfirmationModal
        onConfirm={() => {
          dispatch(removeVodsFromHistory(removeHistory));
          setIsEditing(false);
          setRemoveHistory([]);
          toggleOverlay();
        }}
        onCancel={toggleOverlay}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除播放历史吗？"
      />
      {isEditing && (
        <View style={styles.deleteConfirmationModal}>
          <Button
            onPress={() => {
              if (
                removeHistory.length === 0 ||
                removeHistory.length !== history.length
              ) {
                setRemoveHistory(vodReducer.history);
              } else {
                setRemoveHistory([]);
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={colors.card2}
            titleStyle={{ ...textVariants.body, color: colors.muted }}
          >
            {removeHistory.length === 0 ||
            removeHistory.length !== history.length
              ? "全选"
              : "取消全选"}
          </Button>
          <Button
            onPress={() => {
              if (removeHistory.length > 0) {
                toggleOverlay();
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={removeHistory.length === 0 ? colors.card2 : colors.primary}
            titleStyle={{
              ...textVariants.body,
              color:
                removeHistory.length === 0 ? colors.muted : colors.background,
            }}
          >
            删除
          </Button>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    padding: 5,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  text: {
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 10,
  },
});
