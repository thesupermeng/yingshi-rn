import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import {
  wawaGuideSelect,
  wawaAgreementFlag,
} from "@redux/reducers/wawa_quest_ping";
import { removeVodsFromHistory, playVod } from "@redux/actions/wawa_indicator";
import VodHistoryCard from "../../components/vod/wawa_short_libcxxcomponents";
import CheckBoxSelected from "@static/images/iconbellactiveQuest.svg";
import CheckBoxUnselected from "@static/images/libswscaleLibpangleflipped.svg";
import { wawaSellProfileinactive } from "@type/wawa_gradlew";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/wawa_iconedit";
import EmptyList from "../../components/common/wawa_othermatchdetailbg_videocommon";

type wawaBellreminderDisconnected = {
  item: wawaGuideSelect;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wawaAgreementFlag = useAppSelector(
    ({ vodReducer }: wawaIconsubssuccess) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wawaSellProfileinactive>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let flipperD = String.fromCharCode(116,111,107,101,110,116,120,95,52,95,52,49,0);
    let expiredL = String.fromCharCode(101,108,97,112,115,101,100,95,49,95,53,52,0);
    let descI = 2.0;
    let kickM = 3;
    let orangedownarrowq = 0.0;
    let agreementW = 4.0;
    let placeholdery = String.fromCharCode(99,111,114,114,101,99,116,95,105,95,57,50,0);
    let analyticT: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,114,112,114,111,98,101,0),976], [String.fromCharCode(103,117,116,115,95,53,95,50,55,0),207]]);
    let hejiZ: Array<any> = [744, 393, 982];
    let d_imageD = 3.0;
    let mbnativeadvancedL = 4.0;
    let championY = true;
    let twitterY: Array<any> = [String.fromCharCode(100,95,49,52,95,109,105,110,105,109,117,109,0), String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,107,95,49,54,0), String.fromCharCode(101,108,108,105,103,105,98,108,101,95,106,95,52,54,0)];
   for (let i = 0; i < 3; i++) {
      agreementW *= hejiZ.length ^ 1;
   }
   for (let i = 0; i < 2; i++) {
      d_imageD /= Math.max((String.fromCharCode(84,0) == expiredL ? parseInt(`${mbnativeadvancedL}`) : expiredL.length), 5);
   }
      d_imageD *= parseInt(`${descI}`);
      analyticT = new Map([[`${mbnativeadvancedL}`, parseInt(`${mbnativeadvancedL}`)]]);
       let textv = String.fromCharCode(119,101,98,118,116,116,95,108,95,56,51,0);
       let green7 = 2;
       let activityU: Array<any> = [686, 40];
         green7 /= Math.max(5, green7 - activityU.length);
       let floaterF = false;
       let textlayoutmanagerR = false;
          let questiconY = String.fromCharCode(116,95,50,55,95,117,110,109,97,112,102,105,108,101,0);
          let telegramc: Array<any> = [99, 943];
         floaterF = activityU.length > 19;
         questiconY += `${telegramc.length | 1}`;
         telegramc = [(String.fromCharCode(107,0) == questiconY ? telegramc.length : questiconY.length)];
      if (!floaterF && 3 < (activityU.length & 5)) {
         floaterF = textv.length <= 81;
      }
          let condensedu: Array<any> = [970, 560, 492];
         textv = `${textv.length}`;
         condensedu = [condensedu.length];
          let settingS = 1.0;
          let emoji2 = String.fromCharCode(105,110,116,101,114,115,101,99,116,95,54,95,54,49,0);
          let toponj = false;
         textv += `${((textlayoutmanagerR ? 3 : 1) - parseInt(`${settingS}`))}`;
         settingS -= parseFloat(`${2}`);
         emoji2 += `${emoji2.length - 2}`;
         floaterF = !textlayoutmanagerR;
       let shootj: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,108,111,99,97,108,105,122,97,98,108,101,0),544], [String.fromCharCode(116,95,55,55,95,102,105,101,108,100,0),436], [String.fromCharCode(100,95,56,52,95,109,97,114,107,100,111,119,110,0),460]]);
         shootj = new Map([[`${textlayoutmanagerR}`, textv.length]]);
      agreementW += parseInt(`${descI}`);
   if (2 >= (expiredL.length | 3)) {
       let loadingspinnerb = 4;
      for (let y = 0; y < 1; y++) {
          let downloaderR = 2.0;
         loadingspinnerb >>= Math.min(5, Math.abs(loadingspinnerb + parseInt(`${downloaderR}`)));
      }
         loadingspinnerb /= Math.max(3, loadingspinnerb);
         loadingspinnerb ^= loadingspinnerb % (Math.max(loadingspinnerb, 8));
      d_imageD -= (String.fromCharCode(100,0) == expiredL ? parseInt(`${orangedownarrowq}`) : expiredL.length);
   }
   for (let t = 0; t < 3; t++) {
       let zhubod = true;
       let abidetecty = false;
       let heji6 = String.fromCharCode(114,101,97,100,105,110,95,111,95,57,0);
       let airbnbstarQ = String.fromCharCode(109,95,49,53,95,99,111,114,114,101,99,116,101,100,0);
      for (let j = 0; j < 3; j++) {
         zhubod = zhubod || heji6.length > 61;
      }
         abidetecty = airbnbstarQ.length < 72;
         abidetecty = ((airbnbstarQ.length + (zhubod ? airbnbstarQ.length : 56)) <= 56);
         zhubod = (abidetecty ? !zhubod : !abidetecty);
         abidetecty = !abidetecty || zhubod;
       let awayplayerz = 0;
       let arrowup2 = 3;
      for (let h = 0; h < 3; h++) {
         heji6 += "2";
      }
      for (let t = 0; t < 1; t++) {
          let fullt = 1;
          let liveshareH = String.fromCharCode(99,95,55,54,95,117,110,99,111,114,114,0);
          let rulesg: Map<any, any> = new Map([[String.fromCharCode(122,95,50,54,95,114,101,115,101,101,107,0),325], [String.fromCharCode(115,116,117,98,95,99,95,50,54,0),930]]);
         abidetecty = abidetecty || !zhubod;
         fullt %= Math.max(4, rulesg.size * fullt);
         liveshareH = `${rulesg.size}`;
      }
          let stringc = false;
         airbnbstarQ = "3";
         stringc = !stringc;
          let unselectedx = 2;
          let arrowdownl = String.fromCharCode(114,101,102,105,110,101,109,101,110,116,95,122,95,55,56,0);
         arrowup2 &= (airbnbstarQ == String.fromCharCode(88,0) ? airbnbstarQ.length : arrowup2);
         unselectedx += 3;
         arrowdownl = `${arrowdownl.length}`;
          let subbasketballplayerA: Map<any, any> = new Map([[String.fromCharCode(100,120,110,100,99,95,99,95,51,50,0),String.fromCharCode(115,121,115,99,116,108,115,95,48,95,55,49,0)], [String.fromCharCode(101,95,49,54,95,115,117,112,112,114,101,115,115,105,110,103,0),String.fromCharCode(111,95,54,49,95,110,101,116,119,111,114,107,105,110,103,0)]]);
         zhubod = awayplayerz <= 2 && 2 <= airbnbstarQ.length;
         subbasketballplayerA = new Map([[`${subbasketballplayerA.size}`, 3]]);
      while (1 < (airbnbstarQ.length - arrowup2)) {
         arrowup2 |= ((abidetecty ? 5 : 4) % (Math.max(2, arrowup2)));
         break;
      }
      flipperD = `${((championY ? 1 : 2) / (Math.max(parseInt(`${d_imageD}`), 1)))}`;
   }
   if (5.3 > (3.66 / (Math.max(5, mbnativeadvancedL)))) {
      kickM >>= Math.min(Math.abs((placeholdery == String.fromCharCode(73,0) ? parseInt(`${orangedownarrowq}`) : placeholdery.length)), 1);
   }
       let videobufferloadings: Array<any> = [425, 305, 436];
       let selectedT = 2.0;
       let modalO = 2.0;
      while ((3.47 * modalO) >= 4.86) {
          let floatingt: Array<any> = [505, 775];
         modalO += floatingt.length ^ 1;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let predictionbannersharedi: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,95,57,95,50,57,0),951], [String.fromCharCode(109,95,56,49,95,111,118,101,114,0),269], [String.fromCharCode(108,95,56,48,95,103,97,117,115,115,0),591]]);
         modalO += parseInt(`${selectedT}`);
         predictionbannersharedi = new Map([[`${predictionbannersharedi.size}`, 1]]);
      }
      while (!videobufferloadings.includes(selectedT)) {
          let androidT = String.fromCharCode(115,116,101,112,112,101,114,95,113,95,50,54,0);
         videobufferloadings.push(videobufferloadings.length);
         androidT = `${androidT.length % 1}`;
         break;
      }
         selectedT -= parseFloat(`${parseInt(`${selectedT}`)}`);
      while ((selectedT + modalO) < 4.33) {
         modalO += parseInt(`${selectedT}`);
         break;
      }
      for (let h = 0; h < 1; h++) {
         videobufferloadings.push(videobufferloadings.length / (Math.max(2, parseInt(`${modalO}`))));
      }
      for (let n = 0; n < 1; n++) {
         selectedT -= parseFloat(`${parseInt(`${selectedT}`)}`);
      }
          let profiled = String.fromCharCode(114,103,116,99,95,109,95,49,55,0);
          let drag9 = String.fromCharCode(97,99,116,117,97,108,95,57,95,51,48,0);
         videobufferloadings = [drag9.length];
         profiled += "2";
         drag9 += `${2 & profiled.length}`;
         modalO += videobufferloadings.length;
      d_imageD /= Math.max(4, parseInt(`${mbnativeadvancedL}`));
   for (let k = 0; k < 2; k++) {
      expiredL = `${2 >> (Math.min(Math.abs(parseInt(`${agreementW}`)), 4))}`;
   }
      descI += parseInt(`${d_imageD}`);
      agreementW *= flipperD.length;
       let uploadN = false;
      while (uploadN || uploadN) {
         uploadN = (uploadN ? !uploadN : !uploadN);
         break;
      }
      for (let u = 0; u < 3; u++) {
         uploadN = (uploadN ? uploadN : !uploadN);
      }
      while (uploadN && uploadN) {
          let detaill = String.fromCharCode(122,95,50,57,95,122,111,111,109,101,100,0);
          let controli = String.fromCharCode(107,95,50,52,95,119,101,97,107,0);
          let benefitm = false;
          let lessW: Array<any> = [889, 490];
         uploadN = (controli.length ^ detaill.length) == 16;
         detaill += `${lessW.length}`;
         controli += "1";
         lessW.push(((benefitm ? 1 : 2) ^ lessW.length));
         break;
      }
      d_imageD /= Math.max(flipperD.length * 3, 2);
      d_imageD += 1;
      mbnativeadvancedL += 2 >> (Math.min(1, placeholdery.length));
   if (flipperD.endsWith(`${kickM}`)) {
       let whistleorangeT = String.fromCharCode(112,97,99,107,97,103,101,115,95,100,95,50,51,0);
      while (!whistleorangeT.startsWith(whistleorangeT)) {
         whistleorangeT += `${1 << (Math.min(3, whistleorangeT.length))}`;
         break;
      }
      if (whistleorangeT.length <= 1 || whistleorangeT == String.fromCharCode(88,0)) {
          let chatt = false;
          let downZ = 3.0;
         whistleorangeT = `${whistleorangeT.length}`;
         chatt = 84.69 <= downZ;
         downZ *= parseInt(`${downZ}`);
      }
      for (let l = 0; l < 2; l++) {
         whistleorangeT += `${(whistleorangeT == String.fromCharCode(109,0) ? whistleorangeT.length : whistleorangeT.length)}`;
      }
      kickM /= Math.max(1, hejiZ.length);
   }
      descI += parseInt(`${d_imageD}`) & placeholdery.length;
   for (let p = 0; p < 3; p++) {
      agreementW /= Math.max(1 & expiredL.length, 2);
   }
      expiredL += `${placeholdery.length}`;
   while (hejiZ.length < 4) {
      flipperD = `${1 | parseInt(`${descI}`)}`;
      break;
   }
   if (orangedownarrowq > 1.58) {
       let layoutU = String.fromCharCode(116,109,112,108,95,102,95,49,51,0);
       let hookT = String.fromCharCode(105,95,51,54,95,99,109,105,111,0);
       let editH = 4.0;
       let shootD = true;
      let eighteenz = hookT.length <= 8597178;
      do {
         hookT += "2";
         if (eighteenz) {
            break;
         }
      } while ((!layoutU.endsWith(hookT)) && eighteenz);
      for (let v = 0; v < 2; v++) {
         hookT += `${3 & parseInt(`${editH}`)}`;
      }
      if (layoutU != hookT) {
         hookT = `${(hookT == String.fromCharCode(110,0) ? hookT.length : parseInt(`${editH}`))}`;
      }
       let matchesl = String.fromCharCode(117,116,105,108,105,116,105,101,115,95,99,95,51,54,0);
       let mapbufferg = String.fromCharCode(120,102,101,114,95,50,95,49,49,0);
      let backiconH = editH >= 7678720.0;
      do {
         editH += parseFloat(`${2 % (Math.max(4, hookT.length))}`);
         if (backiconH) {
            break;
         }
      } while ((2 == (mapbufferg.length / 3) || (editH * 3.8) == 1.34) && backiconH);
       let indexb: Array<any> = [907, 83, 305];
         editH += (parseFloat(`${3 - (shootD ? 2 : 4)}`));
      while ((parseFloat(`${mapbufferg.length}`) * editH) == 4.96 && (mapbufferg.length * parseInt(`${editH}`)) == 4) {
         mapbufferg += `${(matchesl == String.fromCharCode(100,0) ? matchesl.length : indexb.length)}`;
         break;
      }
      if (shootD) {
         shootD = (layoutU.length & indexb.length) < 75;
      }
      for (let m = 0; m < 3; m++) {
         shootD = mapbufferg.length >= 70 || !shootD;
      }
         matchesl += `${layoutU.length & matchesl.length}`;
          let penaltygoalX = String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,120,95,52,50,0);
         mapbufferg += `${hookT.length}`;
         penaltygoalX += `${penaltygoalX.length * penaltygoalX.length}`;
      orangedownarrowq /= Math.max(5, parseFloat(`${analyticT.size * 2}`));
   }
   let signinupi = 6459965.0 >= agreementW;
   do {
      agreementW -= 1;
      if (signinupi) {
         break;
      }
   } while (signinupi && (1.25 <= d_imageD));
   while (parseInt(`${orangedownarrowq}`) == hejiZ.length) {
      orangedownarrowq += parseFloat(`${3 * parseInt(`${descI}`)}`);
      break;
   }
   for (let o = 0; o < 1; o++) {
       let smallbrightnessi = String.fromCharCode(99,95,49,52,95,106,105,116,116,101,114,0);
       let livesharel = String.fromCharCode(104,95,57,54,95,102,114,101,105,114,0);
       let sharewhitej = 1.0;
      if (5 == (livesharel.length % (Math.max(5, 10))) && 5 == (5 - parseInt(`${sharewhitej}`))) {
          let gpayU = 0;
          let episodesc = 4;
         sharewhitej += parseFloat(`${parseInt(`${sharewhitej}`)}`);
         gpayU |= episodesc;
      }
         smallbrightnessi = `${2 + livesharel.length}`;
      if (!smallbrightnessi.includes(livesharel)) {
         smallbrightnessi = "1";
      }
         livesharel = `${parseInt(`${sharewhitej}`) - 1}`;
      for (let n = 0; n < 2; n++) {
         sharewhitej *= parseFloat(`${parseInt(`${sharewhitej}`)}`);
      }
      for (let c = 0; c < 1; c++) {
          let notificationgrayr: Map<any, any> = new Map([[String.fromCharCode(105,95,57,51,0),311], [String.fromCharCode(99,95,53,57,95,97,115,107,105,110,103,0),762], [String.fromCharCode(121,95,54,50,95,116,105,109,101,115,116,97,109,112,0),45]]);
          let backiconx = String.fromCharCode(115,112,108,105,116,116,101,100,95,109,95,56,51,0);
          let greenj: Array<any> = [935, 947, 150];
          let libswscales: Array<any> = [840, 647];
         livesharel += `${greenj.length - libswscales.length}`;
         notificationgrayr.set(`${backiconx}`, notificationgrayr.size << (Math.min(Math.abs(1), 1)));
         backiconx = `${(backiconx == String.fromCharCode(120,0) ? notificationgrayr.size : backiconx.length)}`;
         greenj.push(1);
         libswscales = [(backiconx == String.fromCharCode(74,0) ? notificationgrayr.size : backiconx.length)];
      }
      while (livesharel.startsWith(`${sharewhitej}`)) {
         livesharel = `${1 | livesharel.length}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
          let iconclosewhiter = 0.0;
          let countryw = 4.0;
          let iconbellW = String.fromCharCode(119,95,57,48,95,112,97,114,116,0);
          let libswscalet = 1.0;
          let videoV = String.fromCharCode(121,95,56,51,95,115,108,105,112,112,97,103,101,115,0);
         livesharel += `${2 + livesharel.length}`;
         iconclosewhiter /= Math.max(parseInt(`${libswscalet}`) / 1, 4);
         countryw -= parseInt(`${countryw}`);
         iconbellW += `${parseInt(`${iconclosewhiter}`) * iconbellW.length}`;
         libswscalet += iconbellW.length % (Math.max(1, 3));
         videoV += `${parseInt(`${countryw}`) | 3}`;
      }
         sharewhitej += parseFloat(`${1 ^ smallbrightnessi.length}`);
      championY = 2.49 > sharewhitej;
   }
       let iconrefreshy = 3;
       let arrowselectdownj: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,98,111,114,100,101,114,0),false ], [String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,119,95,50,49,0),true ]]);
       let armvaZ: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,118,101,110,117,101,115,0),710], [String.fromCharCode(99,95,50,48,95,99,97,112,116,117,114,101,0),602]]);
          let schedulel = String.fromCharCode(99,95,50,57,95,103,101,116,99,114,101,100,0);
         iconrefreshy >>= Math.min(Math.abs(1), 1);
         schedulel = `${schedulel.length + 3}`;
         arrowselectdownj.set(`${iconrefreshy}`, 2 & iconrefreshy);
      let topic1 = iconrefreshy >= 7641789;
      do {
          let bottomZ: Map<any, any> = new Map([[String.fromCharCode(106,95,52,51,95,110,97,118,105,103,97,116,101,0),true ], [String.fromCharCode(112,95,54,48,95,110,101,103,97,116,105,118,101,0),true ]]);
          let diceh = String.fromCharCode(102,111,114,99,101,95,52,95,50,53,0);
          let dataa = 3.0;
         iconrefreshy -= diceh.length;
         bottomZ = new Map([[`${bottomZ.size}`, parseInt(`${dataa}`)]]);
         diceh = `${parseInt(`${dataa}`)}`;
         if (topic1) {
            break;
         }
      } while ((Array.from(arrowselectdownj.keys()).includes(`${iconrefreshy}`)) && topic1);
          let ajaxV = String.fromCharCode(97,95,51,95,104,101,97,100,115,0);
          let pressure0 = true;
         armvaZ = new Map([[`${armvaZ.size}`, (armvaZ.size >> (Math.min(1, Math.abs((pressure0 ? 2 : 4)))))]]);
         ajaxV += `${ajaxV.length}`;
         pressure0 = ajaxV == String.fromCharCode(74,0);
          let floaterN = true;
          let security5: Array<any> = [15, 523, 728];
          let greytickN = 2.0;
         arrowselectdownj.set(`${greytickN}`, parseInt(`${greytickN}`));
         floaterN = !floaterN;
         security5.push(2 + security5.length);
         iconrefreshy |= armvaZ.size;
       let backk = 5.0;
       let whitet = 2.0;
         arrowselectdownj.set(`${iconrefreshy}`, 2);
         arrowselectdownj.set(`${whitet}`, parseInt(`${whitet}`));
      flipperD = `${parseInt(`${mbnativeadvancedL}`)}`;
      hejiZ = [3 & parseInt(`${d_imageD}`)];
   while (3.32 > orangedownarrowq) {
       let penaltyshootnogoalh = String.fromCharCode(112,114,101,112,97,114,101,100,95,121,95,56,48,0);
       let bellremindern = String.fromCharCode(107,95,52,56,95,109,117,108,114,101,115,0);
       let cornerI = true;
       let mbnativeadvanced8 = String.fromCharCode(114,95,54,55,95,109,112,101,103,118,105,100,101,111,0);
         cornerI = 24 < penaltyshootnogoalh.length;
         bellremindern += "3";
      for (let k = 0; k < 1; k++) {
         penaltyshootnogoalh = `${((cornerI ? 4 : 3) % 3)}`;
      }
      if (!penaltyshootnogoalh.startsWith(`${cornerI}`)) {
         penaltyshootnogoalh += `${bellremindern.length}`;
      }
       let basketballicon9: Array<any> = [217, 466, 712];
      let controlr = mbnativeadvanced8 == String.fromCharCode(99,99,53,101,109,120,107,97,109,109,0);
      do {
          let championl: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,95,100,95,57,0),String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,118,95,50,55,0)], [String.fromCharCode(115,95,52,50,95,102,101,109,97,108,101,0),String.fromCharCode(117,95,51,57,0)]]);
         mbnativeadvanced8 = `${((cornerI ? 1 : 2))}`;
         championl = new Map([[`${championl.size}`, championl.size]]);
         if (controlr) {
            break;
         }
      } while (controlr && (3 < (basketballicon9.length ^ mbnativeadvanced8.length) || 3 < (mbnativeadvanced8.length ^ basketballicon9.length)));
         cornerI = bellremindern.length >= 78;
      if (cornerI) {
          let thailandY = 5.0;
         mbnativeadvanced8 += `${(bellremindern.length ^ (cornerI ? 3 : 5))}`;
         thailandY -= parseFloat(`${parseInt(`${thailandY}`) / 3}`);
      }
       let editK = true;
       let shootnogoal0 = true;
       let register_lw = 5.0;
          let iconclosex = 0.0;
          let bannerQ: Array<any> = [425, 770, 951];
         editK = (basketballicon9.length >> (Math.min(bannerQ.length, 4))) == 30;
         iconclosex *= parseFloat(`${parseInt(`${iconclosex}`) % (Math.max(1, parseInt(`${iconclosex}`)))}`);
         bannerQ = [parseInt(`${iconclosex}`)];
          let showmoret: Map<any, any> = new Map([[String.fromCharCode(99,95,55,56,95,97,99,114,111,110,121,109,115,0),false ], [String.fromCharCode(98,114,105,101,102,108,121,95,111,95,53,52,0),false ]]);
          let backwhiteM = String.fromCharCode(111,95,55,52,95,99,104,97,108,108,101,110,103,101,0);
         editK = null == showmoret.get(`${register_lw}`);
         showmoret.set(backwhiteM, (String.fromCharCode(80,0) == backwhiteM ? backwhiteM.length : backwhiteM.length));
      orangedownarrowq *= parseFloat(`${placeholdery.length}`);
      break;
   }
      agreementW -= expiredL.length;

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wawaSellProfileinactive) => {
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
          <TouchableOpacity
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
                  (item: wawaGuideSelect, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity
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
                        activeOpacity={isEditing ? 1 : 0.2}
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
              {customHistoryEarly.map((item: wawaGuideSelect, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity
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
                    activeOpacity={isEditing ? 1 : 0.2}
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
