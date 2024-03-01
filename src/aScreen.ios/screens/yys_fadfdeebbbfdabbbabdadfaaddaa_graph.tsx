import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/yys_settings";
import { CommentCard } from "../components/vodComment/yys_qaag";
import { yys_InviteAway } from "@type/yys_libzeus";
import ScreenContainer from "../components/container/yys_executor_expand";
import TitleWithBackButtonHeader from "../components/header/yys_anner_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import SubmitBtn from "@static/images/private_joConfig.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";
import { yys_StatsForm } from "@utility/yys_context_muted";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<yys_InviteAway[] | undefined>([]);
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let animationsU = String.fromCharCode(104,115,99,97,108,101,95,117,95,52,48,0);
    let models3 = 3.0;
    let mbsplasho = String.fromCharCode(119,95,54,53,95,113,117,97,110,116,105,122,101,0);
    let mbbannerp: Array<any> = [949, 32, 273];
    let plust = String.fromCharCode(103,95,50,55,95,100,111,99,116,111,116,97,108,0);
    let backwardc = String.fromCharCode(107,95,49,48,48,95,114,116,99,0);
    let yingj: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,95,121,95,56,0),true ], [String.fromCharCode(117,95,51,49,95,112,97,99,107,101,116,111,117,116,0),false ]]);
    let sansr: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,112,111,105,110,116,95,120,95,52,48,0),true ], [String.fromCharCode(108,105,98,115,112,101,101,120,95,97,95,51,55,0),true ], [String.fromCharCode(119,111,114,107,101,114,95,112,95,52,51,0),false ]]);
    let commentL = 4.0;
    let orange7 = 4.0;
    let aboutC = 1;
    let libreactperfloggerjnif = String.fromCharCode(117,117,105,100,95,99,95,53,49,0);
    let analyticB = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,102,95,49,50,0);
    let chat0 = 3.0;
    let u_unlockr: Map<any, any> = new Map([[String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,117,95,50,55,0),480], [String.fromCharCode(116,104,114,101,101,95,48,95,50,48,0),893], [String.fromCharCode(115,95,49,49,95,115,110,97,112,104,111,116,0),591]]);
    let statsB = false;
   if (3.93 > models3) {
      plust = `${parseInt(`${commentL}`)}`;
   }
      commentL += aboutC;
       let settingsd: Array<any> = [240, 279];
       let dropdowno = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,51,95,53,57,0);
       let componentL: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,95,105,112,114,101,100,0),709], [String.fromCharCode(106,95,56,55,95,107,101,121,102,114,97,109,101,0),487], [String.fromCharCode(103,95,52,95,97,100,100,107,101,121,0),985]]);
       let setting6: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,95,107,95,56,52,0),false ], [String.fromCharCode(116,97,98,115,95,104,95,57,56,0),false ]]);
         dropdowno = `${componentL.size >> (Math.min(Math.abs(3), 4))}`;
       let redirectD = String.fromCharCode(108,115,102,112,111,108,121,95,49,95,57,48,0);
      let untickY = redirectD.length >= 9032271;
      do {
          let types7 = true;
          let middleW = false;
          let viewer4 = 5;
          let typingc = 5.0;
          let other_ = 3.0;
         redirectD = `${settingsd.length + 1}`;
         types7 = !middleW && !types7;
         middleW = !middleW;
         viewer4 ^= 2;
         typingc *= ((middleW ? 1 : 3) % (Math.max(parseInt(`${other_}`), 10)));
         other_ -= ((middleW ? 2 : 5) % (Math.max(parseInt(`${other_}`), 10)));
         if (untickY) {
            break;
         }
      } while (untickY && (redirectD.endsWith(dropdowno)));
      let championW = settingsd.length >= 9684766;
      do {
          let collectionj = String.fromCharCode(112,95,55,95,115,119,102,104,97,115,104,0);
          let downloaderr = String.fromCharCode(102,111,108,100,101,114,115,95,99,95,49,51,0);
          let projectJ = 1.0;
          let mutedx = 0;
         settingsd.push(downloaderr.length);
         collectionj = "3";
         downloaderr += `${collectionj.length}`;
         projectJ /= Math.max(2 % (Math.max(parseInt(`${projectJ}`), 9)), 4);
         mutedx >>= Math.min(Math.abs(mutedx), 1);
         if (championW) {
            break;
         }
      } while ((dropdowno.length <= 4) && championW);
      if (redirectD.includes(`${settingsd.length}`)) {
         redirectD = `${settingsd.length}`;
      }
      plust += `${libreactperfloggerjnif.length & 1}`;
       let bodanG: Array<any> = [945, 77];
      if (bodanG.includes(bodanG.length)) {
          let usernamej: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,120,95,103,95,55,48,0),173], [String.fromCharCode(114,101,112,101,97,116,101,100,95,52,95,50,53,0),667], [String.fromCharCode(100,101,116,95,54,95,50,48,0),827]]);
          let containeru = 4.0;
          let jcopy_gV = String.fromCharCode(121,95,52,55,95,117,110,114,101,102,99,111,117,110,116,0);
         bodanG.push(usernamej.size);
         usernamej = new Map([[jcopy_gV, 3]]);
         containeru += parseFloat(`${parseInt(`${containeru}`)}`);
         jcopy_gV = `${1 | parseInt(`${containeru}`)}`;
      }
      for (let t = 0; t < 3; t++) {
         bodanG = [bodanG.length];
      }
      while (bodanG.length < bodanG.length) {
         bodanG.push(2 + bodanG.length);
         break;
      }
      chat0 -= (parseFloat(`${String.fromCharCode(76,0) == analyticB ? analyticB.length : parseInt(`${orange7}`)}`));

    try {

       let searchbara = 2.0;
       let cancelD: Array<any> = [521, 508];
          let utilsg: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,100,115,95,52,95,54,0),795], [String.fromCharCode(116,95,57,95,97,110,116,105,0),572]]);
          let bdxadsdkr = String.fromCharCode(120,118,97,103,95,52,95,49,57,0);
          let register_854 = true;
         cancelD.push(((register_854 ? 5 : 2) - parseInt(`${searchbara}`)));
         utilsg.set(bdxadsdkr, 2);
         bdxadsdkr = "3";
         register_854 = (utilsg.size & bdxadsdkr.length) < 41;
       let shootN = 4.0;
       let custom5 = 5.0;
      while (2.50 >= (2.45 * shootN) && 2.45 >= (searchbara * shootN)) {
         searchbara /= Math.max(4, parseFloat(`${parseInt(`${custom5}`) - parseInt(`${searchbara}`)}`));
         break;
      }
      let nativeo = cancelD.length >= 8059269;
      do {
         cancelD.push(parseInt(`${searchbara}`) % (Math.max(1, cancelD.length)));
         if (nativeo) {
            break;
         }
      } while (nativeo && ((cancelD.length | 2) > 5));
         searchbara *= parseFloat(`${2}`);
      if ((3 - custom5) == 2.43) {
          let roomt = String.fromCharCode(104,101,116,97,95,97,95,50,56,0);
          let libavformatr = 4.0;
         shootN *= (roomt == String.fromCharCode(65,0) ? roomt.length : parseInt(`${custom5}`));
         libavformatr /= Math.max(5, parseInt(`${libavformatr}`));
      }
      orange7 /= Math.max(parseFloat(`${parseInt(`${models3}`) * 3}`), 5);
   for (let u = 0; u < 2; u++) {
       let dropdown7: Array<any> = [String.fromCharCode(108,111,97,100,95,53,95,57,57,0), String.fromCharCode(101,95,52,50,95,97,116,116,101,109,112,116,115,0), String.fromCharCode(119,95,50,51,95,120,108,97,98,101,108,119,105,100,116,104,0)];
       let classes5 = 1;
       let policyW: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,95,121,95,49,55,0),172], [String.fromCharCode(113,95,55,51,95,109,111,110,116,103,111,109,101,114,121,0),741]]);
       let componentregistryt = 0.0;
       let imagemanagerC = 0.0;
         policyW.set(`${componentregistryt}`, 1 % (Math.max(classes5, 9)));
         policyW = new Map([[`${dropdown7.length}`, dropdown7.length]]);
         dropdown7.push(parseInt(`${componentregistryt}`));
       let mbbidF: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,102,95,49,0),258], [String.fromCharCode(115,112,105,110,110,105,110,103,95,121,95,56,0),664], [String.fromCharCode(104,95,49,49,95,114,101,110,100,101,114,97,98,108,101,0),709]]);
      let libtanP = 7197506.0 <= imagemanagerC;
      do {
         imagemanagerC /= Math.max(dropdown7.length - parseInt(`${componentregistryt}`), 5);
         if (libtanP) {
            break;
         }
      } while (libtanP && ((imagemanagerC - 2.18) < 3.9 || (classes5 - imagemanagerC) < 2.18));
       let activeF = 2;
         classes5 <<= Math.min(3, Math.abs(mbbidF.size));
      let orangeQ = 6278068 >= mbbidF.size;
      do {
          let corner5 = String.fromCharCode(112,97,115,115,98,95,120,95,54,52,0);
          let libreactE = 1;
          let tailM = String.fromCharCode(118,95,49,56,95,102,111,99,117,115,0);
         mbbidF = new Map([[`${imagemanagerC}`, libreactE ^ 1]]);
         corner5 += `${(corner5 == String.fromCharCode(106,0) ? corner5.length : tailM.length)}`;
         libreactE += corner5.length;
         tailM = `${tailM.length + 1}`;
         if (orangeQ) {
            break;
         }
      } while (orangeQ && ((dropdown7.length << (Math.min(Math.abs(3), 1))) >= 3 || (dropdown7.length << (Math.min(Math.abs(mbbidF.size), 5))) >= 3));
          let appleb = String.fromCharCode(120,95,56,52,95,117,108,116,114,97,119,105,100,101,0);
          let right2 = String.fromCharCode(104,95,56,55,95,104,117,102,102,109,97,110,0);
          let questz = String.fromCharCode(118,120,119,111,114,107,115,95,98,95,57,50,0);
         componentregistryt += parseFloat(`${activeF}`);
         appleb = `${right2.length >> (Math.min(4, questz.length))}`;
         right2 = `${appleb.length << (Math.min(Math.abs(2), 3))}`;
         questz = `${appleb.length}`;
         imagemanagerC -= dropdown7.length;
         activeF /= Math.max(2, parseInt(`${imagemanagerC}`));
      while (3 < (dropdown7.length | activeF) && 1 < (dropdown7.length | 3)) {
         activeF &= activeF;
         break;
      }
          let yellowK = String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,112,95,57,55,0);
          let libswresampleL = 5.0;
         componentregistryt /= Math.max(parseFloat(`${2}`), 2);
         yellowK += `${parseInt(`${libswresampleL}`)}`;
         libswresampleL += 3;
      while ((classes5 << (Math.min(Math.abs(5), 4))) < 4 && 2 < (dropdown7.length << (Math.min(Math.abs(5), 2)))) {
         dropdown7.push(activeF % (Math.max(3, 9)));
         break;
      }
         imagemanagerC += classes5 - dropdown7.length;
      backwardc += `${parseInt(`${orange7}`)}`;
   }
      orange7 /= Math.max(parseFloat(`${parseInt(`${chat0}`)}`), 5);
      mbsplasho = "3";
      const comments = await AsyncStorage.getItem(locCommentId);

      yingj = new Map([[`${mbbannerp.length}`, 1 >> (Math.min(5, mbbannerp.length))]]);
      orange7 += parseFloat(`${parseInt(`${models3}`)}`);
   for (let n = 0; n < 3; n++) {
       let customd = 3.0;
       let dialogj = 5;
       let suggestioni = 4.0;
       let settingsu = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,53,95,57,50,0);
       let hinit__m = 1.0;
         suggestioni += settingsu.length;
      let hookT = dialogj <= 5295880;
      do {
         dialogj += (settingsu == String.fromCharCode(55,0) ? settingsu.length : parseInt(`${customd}`));
         if (hookT) {
            break;
         }
      } while (hookT && (4 > (dialogj | 4) || (hinit__m - parseFloat(`${dialogj}`)) > 4.36));
         settingsu = `${3 | parseInt(`${suggestioni}`)}`;
      for (let l = 0; l < 1; l++) {
         suggestioni -= 1;
      }
      let libturbomodulejsijni3 = customd >= 9226134.0;
      do {
          let pangleq = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,122,95,53,51,0);
          let referrerT = 5;
          let minil = 1.0;
          let base2 = String.fromCharCode(116,95,52,54,95,103,111,108,100,101,110,0);
          let rootG: Array<any> = [String.fromCharCode(116,95,52,95,120,99,104,103,0), String.fromCharCode(122,95,51,49,95,100,111,99,115,0)];
         customd += parseFloat(`${parseInt(`${customd}`) >> (Math.min(pangleq.length, 1))}`);
         pangleq = `${referrerT >> (Math.min(Math.abs(parseInt(`${minil}`)), 1))}`;
         referrerT &= parseInt(`${minil}`) & rootG.length;
         base2 += `${parseInt(`${minil}`)}`;
         rootG = [base2.length * 3];
         if (libturbomodulejsijni3) {
            break;
         }
      } while ((2.68 == customd) && libturbomodulejsijni3);
          let feedback8 = 0.0;
          let colorsI = String.fromCharCode(97,95,49,49,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
         dialogj |= (colorsI == String.fromCharCode(113,0) ? colorsI.length : parseInt(`${feedback8}`));
      for (let b = 0; b < 3; b++) {
         settingsu = `${parseInt(`${suggestioni}`) ^ 1}`;
      }
         settingsu = `${parseInt(`${suggestioni}`) / 1}`;
       let otherQ = String.fromCharCode(101,95,53,53,95,112,111,115,116,97,108,0);
         otherQ = `${parseInt(`${suggestioni}`) - dialogj}`;
      let singaporeC = 6866073 <= settingsu.length;
      do {
          let streaming_ = false;
         settingsu += `${((streaming_ ? 3 : 2))}`;
         if (singaporeC) {
            break;
         }
      } while (singaporeC && (4.65 >= customd));
      while (3.15 >= hinit__m) {
         hinit__m += parseFloat(`${parseInt(`${suggestioni}`) + 3}`);
         break;
      }
          let typingr = 4.0;
          let source_ = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,104,95,57,48,0);
         dialogj >>= Math.min(2, Math.abs(parseInt(`${suggestioni}`) ^ 1));
         typingr -= parseInt(`${typingr}`) & source_.length;
         source_ = `${1 - source_.length}`;
          let listp = String.fromCharCode(122,95,53,54,95,116,97,98,108,101,99,0);
         settingsu += `${settingsu.length & dialogj}`;
         listp += "2";
          let mimog = 1;
         customd *= parseFloat(`${1}`);
         mimog <<= Math.min(Math.abs(mimog), 3);
      animationsU = `${libreactperfloggerjnif.length}`;
   }
   for (let d = 0; d < 1; d++) {
      commentL -= mbsplasho.length - mbbannerp.length;
   }
      console.log("comments stored in local storage ", locCommentId);

   while (4.24 <= orange7) {
      commentL -= 1;
      break;
   }
   let settingv = 7060713.0 <= orange7;
   do {
       let teamt = 5.0;
       let u_titleU = String.fromCharCode(118,114,97,115,116,101,114,95,104,95,56,51,0);
       let terms7: Map<any, any> = new Map([[String.fromCharCode(112,95,53,52,95,118,105,97,0),696], [String.fromCharCode(115,117,112,101,114,115,101,116,95,110,95,56,57,0),768], [String.fromCharCode(107,101,121,102,114,97,109,101,95,119,95,49,48,0),47]]);
       let watch_ = String.fromCharCode(114,111,98,117,115,116,95,98,95,56,51,0);
       let data1 = String.fromCharCode(116,114,101,97,100,95,115,95,49,0);
       let libswresampleT: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,111,99,95,101,95,51,51,0),728], [String.fromCharCode(109,99,100,99,95,103,95,52,57,0),618], [String.fromCharCode(112,108,97,121,101,100,95,52,95,52,50,0),994]]);
       let tick8: Map<any, any> = new Map([[String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,110,95,49,49,0),315], [String.fromCharCode(115,117,98,99,111,101,102,115,95,98,95,56,52,0),732]]);
         watch_ += `${3 << (Math.min(3, u_titleU.length))}`;
          let privacyM = 0.0;
          let searchD = 5.0;
         tick8.set(`${libswresampleT.size}`, libswresampleT.size);
         privacyM /= Math.max(1, parseInt(`${privacyM}`) % (Math.max(8, parseInt(`${searchD}`))));
         searchD -= parseInt(`${privacyM}`);
      for (let b = 0; b < 1; b++) {
         tick8.set(`${data1}`, (data1 == String.fromCharCode(48,0) ? data1.length : terms7.size));
      }
      for (let l = 0; l < 1; l++) {
          let dropdownA = false;
         terms7 = new Map([[`${dropdownA}`, parseInt(`${teamt}`) << (Math.min(3, Math.abs(1)))]]);
      }
      for (let v = 0; v < 1; v++) {
          let userV: Array<any> = [813, 147];
          let storeo: Map<any, any> = new Map([[String.fromCharCode(100,119,97,114,102,95,111,95,55,55,0),1000], [String.fromCharCode(114,103,98,116,111,121,118,95,98,95,54,51,0),217]]);
         watch_ = `${watch_.length}`;
         userV.push(storeo.size);
         storeo = new Map([[`${storeo.size}`, userV.length]]);
      }
      while (1.40 == (4.89 - teamt) && 4.89 == (teamt - parseFloat(`${libswresampleT.size}`))) {
         teamt -= parseFloat(`${3}`);
         break;
      }
         tick8 = new Map([[watch_, watch_.length]]);
          let k_managerF = 3;
          let send0: Map<any, any> = new Map([[String.fromCharCode(119,95,56,55,95,114,101,99,118,102,114,111,109,0),256], [String.fromCharCode(109,97,100,100,95,57,95,55,52,0),285], [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,53,95,56,54,0),223]]);
          let runtimeschedulerz = String.fromCharCode(100,105,115,99,111,118,101,114,121,95,55,95,51,49,0);
         u_titleU += "1";
         k_managerF += k_managerF;
         send0.set(`${k_managerF}`, 3);
         runtimeschedulerz += `${runtimeschedulerz.length * k_managerF}`;
      while (1 == watch_.length) {
         watch_ = `${(watch_ == String.fromCharCode(81,0) ? watch_.length : data1.length)}`;
         break;
      }
          let hoveri = String.fromCharCode(104,97,110,110,101,108,95,53,95,50,53,0);
          let thailandy = String.fromCharCode(117,95,49,56,95,102,105,110,103,101,114,0);
         data1 += `${thailandy.length | 2}`;
         hoveri = `${hoveri.length << (Math.min(hoveri.length, 1))}`;
         thailandy += `${hoveri.length | hoveri.length}`;
      for (let i = 0; i < 1; i++) {
         terms7.set(`${u_titleU}`, 2 >> (Math.min(1, Math.abs(tick8.size))));
      }
       let configureA = 4.0;
       let colorsi = 3.0;
      while (1 <= (5 - data1.length)) {
         data1 += `${libswresampleT.size}`;
         break;
      }
       let final_fhC = String.fromCharCode(100,95,56,52,95,116,104,114,101,97,100,115,108,105,99,101,0);
      orange7 /= Math.max(4, parseFloat(`${1 | terms7.size}`));
      if (settingv) {
         break;
      }
   } while (settingv && ((5.83 - orange7) == 1.88 || (yingj.size * 2) == 5));
   if (5 <= (analyticB.length ^ 2)) {
       let membershipb = String.fromCharCode(107,95,52,55,95,100,98,108,105,110,116,0);
       let executorf = String.fromCharCode(104,95,54,48,95,112,114,105,109,97,114,105,101,115,0);
      let corez = String.fromCharCode(121,48,50,100,109,48,51,97,53,0) == executorf;
      do {
          let adultt = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,116,95,53,50,0);
          let libreactnativeblobe = String.fromCharCode(106,109,108,105,115,116,95,100,95,53,54,0);
          let stepK = true;
         executorf = `${((stepK ? 4 : 3) - libreactnativeblobe.length)}`;
         adultt += `${adultt.length}`;
         libreactnativeblobe = `${adultt.length}`;
         if (corez) {
            break;
         }
      } while (corez && (2 <= executorf.length && membershipb == String.fromCharCode(89,0)));
      for (let v = 0; v < 1; v++) {
          let usert = String.fromCharCode(112,112,102,108,97,103,115,95,106,95,57,52,0);
         membershipb = `${usert.length - membershipb.length}`;
      }
          let renew9: Array<any> = [967, 72, 292];
          let securityY = true;
          let giftj = 4;
         membershipb = `${2 % (Math.max(3, giftj))}`;
         renew9 = [(3 - (securityY ? 3 : 4))];
         securityY = renew9.includes(securityY);
         giftj += 3;
          let frame_vu = 3;
         membershipb += "2";
         frame_vu >>= Math.min(Math.abs(frame_vu), 2);
      if (2 > executorf.length) {
          let chartT = String.fromCharCode(119,95,57,50,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
          let inactiveJ = String.fromCharCode(97,115,115,101,109,98,108,121,95,112,95,49,50,0);
          let chinasameC = 0.0;
          let activityn = 2.0;
         membershipb += `${(String.fromCharCode(101,0) == inactiveJ ? chartT.length : inactiveJ.length)}`;
         chartT += `${parseInt(`${chinasameC}`)}`;
         activityn += parseFloat(`${parseInt(`${chinasameC}`)}`);
      }
      let expandz = executorf.length <= 6018906;
      do {
         executorf = `${3 - membershipb.length}`;
         if (expandz) {
            break;
         }
      } while (expandz && (executorf != String.fromCharCode(88,0) || 4 < membershipb.length));
      analyticB = `${(String.fromCharCode(87,0) == animationsU ? yingj.size : animationsU.length)}`;
   }
   if (!Array.from(yingj.values()).includes(commentL)) {
       let alertA = false;
      while (alertA && alertA) {
         alertA = (alertA ? !alertA : alertA);
         break;
      }
      for (let o = 0; o < 3; o++) {
         alertA = (alertA ? !alertA : !alertA);
      }
      if (alertA) {
          let favoritej: Map<any, any> = new Map([[String.fromCharCode(119,95,51,50,95,99,108,111,115,101,0),630], [String.fromCharCode(109,95,56,53,95,98,105,110,107,0),290]]);
         alertA = null == favoritej.get(`${alertA}`);
      }
      yingj.set(analyticB, analyticB.length * 2);
   }
      console.log(comments);

   while (5.15 < commentL) {
      plust += `${parseInt(`${models3}`)}`;
      break;
   }
       let coreq = String.fromCharCode(101,120,99,108,95,102,95,57,49,0);
         coreq += `${coreq.length % (Math.max(coreq.length, 3))}`;
      while (coreq.length >= 3 && 3 >= coreq.length) {
         coreq = `${coreq.length}`;
         break;
      }
         coreq = `${3 << (Math.min(4, coreq.length))}`;
      plust += `${parseInt(`${orange7}`)}`;
   while (4 == (yingj.size << (Math.min(backwardc.length, 3))) && 1 == (4 << (Math.min(5, Math.abs(yingj.size))))) {
      yingj.set(analyticB, 1);
      break;
   }
   if ((aboutC << (Math.min(mbsplasho.length, 1))) > 1) {
       let downloadingK: Map<any, any> = new Map([[String.fromCharCode(97,95,53,57,95,115,101,97,100,0),309], [String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,109,95,54,51,0),849]]);
      if (1 < (downloadingK.size << (Math.min(Math.abs(3), 4)))) {
         downloadingK.set(`${downloadingK.size}`, downloadingK.size);
      }
          let gift0 = false;
          let knewst = 0;
         downloadingK = new Map([[`${downloadingK.size}`, downloadingK.size]]);
         gift0 = 26 == knewst;
         knewst -= knewst / 3;
         downloadingK.set(`${downloadingK.size}`, downloadingK.size);
      mbsplasho = `${sansr.size}`;
   }

      if (comments !== null) {

       let lightY: Array<any> = [13, 372, 195];
       let mapbuffers = String.fromCharCode(112,107,103,99,111,110,102,105,103,95,113,95,49,52,0);
       let componento: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,100,95,104,95,56,49,0),706], [String.fromCharCode(106,95,51,50,95,102,97,107,101,0),129]]);
      for (let c = 0; c < 3; c++) {
         mapbuffers += `${lightY.length}`;
      }
      for (let m = 0; m < 1; m++) {
         mapbuffers += `${componento.size}`;
      }
      for (let e = 0; e < 3; e++) {
         componento = new Map([[`${componento.size}`, componento.size]]);
      }
          let recommendation7 = 2.0;
          let modity1 = String.fromCharCode(108,95,50,52,95,109,111,100,112,108,117,103,0);
         componento.set(modity1, modity1.length - 2);
         recommendation7 /= Math.max(parseFloat(`${3 + parseInt(`${recommendation7}`)}`), 5);
       let bellO: Map<any, any> = new Map([[String.fromCharCode(111,115,100,101,112,95,112,95,52,53,0),String.fromCharCode(111,95,51,49,95,109,106,112,101,103,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,95,116,95,55,53,0),String.fromCharCode(101,95,56,49,95,116,111,111,108,116,105,112,115,0)], [String.fromCharCode(122,105,112,95,97,95,54,49,0),String.fromCharCode(114,95,56,56,95,116,97,108,108,0)]]);
       let librrco: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,100,99,115,116,114,0),331], [String.fromCharCode(118,95,54,55,95,99,104,111,105,99,101,0),221], [String.fromCharCode(112,114,105,111,95,113,95,52,54,0),396]]);
      let libfbx = 8158914 >= mapbuffers.length;
      do {
          let customF = 2;
         mapbuffers += `${componento.size}`;
         customF /= Math.max(5, customF);
         if (libfbx) {
            break;
         }
      } while ((4 > (lightY.length / 1) && (lightY.length / 1) > 3) && libfbx);
      let currentO = lightY.length <= 8697077;
      do {
          let ping4 = 3.0;
          let libavdevicev = 4.0;
          let regengo: Array<any> = [643, 573];
         lightY = [1];
         ping4 /= Math.max(5, parseInt(`${libavdevicev}`));
         regengo = [regengo.length ^ 2];
         if (currentO) {
            break;
         }
      } while (currentO && (bellO.size == 3));
         componento = new Map([[`${componento.size}`, 2]]);
      for (let v = 0; v < 2; v++) {
          let streamingo = true;
          let readm = 1;
          let langkeyU = 4;
          let graphicsg = 1.0;
         lightY = [componento.size];
         streamingo = !streamingo;
         readm >>= Math.min(1, Math.abs(langkeyU));
         langkeyU |= langkeyU;
         graphicsg += parseFloat(`${3 % (Math.max(parseInt(`${graphicsg}`), 10))}`);
      }
      plust += `${mbsplasho.length + plust.length}`;
   let resendH = 8016086 >= aboutC;
   do {
      aboutC &= aboutC * 1;
      if (resendH) {
         break;
      }
   } while (resendH && (models3 < aboutC));
   if ((aboutC | 4) <= 5 && (animationsU.length | aboutC) <= 4) {
      animationsU += `${(String.fromCharCode(48,0) == animationsU ? animationsU.length : libreactperfloggerjnif.length)}`;
   }
   for (let m = 0; m < 1; m++) {
       let downloading0 = false;
       let settingsv = 3;
       let greyg: Array<any> = [460, 225, 376];
          let baiduv = String.fromCharCode(119,95,49,55,95,114,103,98,97,98,101,0);
          let benefitr: Array<any> = [867, 710, 920];
          let mbbanner9 = String.fromCharCode(121,95,50,50,95,112,114,117,110,101,0);
         settingsv <<= Math.min(2, Math.abs(3 << (Math.min(3, greyg.length))));
         baiduv += "1";
         benefitr.push(mbbanner9.length);
         mbbanner9 += `${benefitr.length << (Math.min(baiduv.length, 1))}`;
      for (let q = 0; q < 1; q++) {
         settingsv |= greyg.length;
      }
         settingsv >>= Math.min(Math.abs(2 + greyg.length), 2);
         settingsv |= settingsv + 2;
          let injury3 = String.fromCharCode(115,117,109,115,113,95,101,95,51,48,0);
          let sansj = 0.0;
         downloading0 = injury3.length < 23 || !downloading0;
         injury3 += "2";
         sansj *= parseFloat(`${parseInt(`${sansj}`)}`);
       let remindera = String.fromCharCode(115,95,55,48,95,114,117,108,101,0);
       let progresso = String.fromCharCode(119,95,56,49,95,116,97,98,0);
      let scheduled = 6109147 >= settingsv;
      do {
         settingsv |= greyg.length;
         if (scheduled) {
            break;
         }
      } while ((settingsv > 5) && scheduled);
      for (let s = 0; s < 3; s++) {
         remindera = `${settingsv + 3}`;
      }
         greyg.push((remindera == String.fromCharCode(72,0) ? remindera.length : greyg.length));
      backwardc += `${(animationsU == String.fromCharCode(101,0) ? animationsU.length : parseInt(`${commentL}`))}`;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   if (!mbbannerp.includes(aboutC)) {
      mbbannerp.push(parseInt(`${commentL}`));
   }
       let langy = String.fromCharCode(117,110,109,97,112,95,49,95,49,0);
       let leakcheckeri: Array<any> = [266, 622];
          let link1 = 0.0;
          let resendV = false;
          let subsO = String.fromCharCode(122,95,50,56,95,119,101,98,112,0);
         langy += `${leakcheckeri.length}`;
         link1 *= (parseFloat(`${subsO == String.fromCharCode(115,0) ? (resendV ? 4 : 2) : subsO.length}`));
         resendV = !subsO.endsWith(`${resendV}`);
         leakcheckeri = [2 >> (Math.min(1, langy.length))];
          let launch9 = String.fromCharCode(105,95,52,51,95,98,117,102,114,101,102,0);
          let anners = String.fromCharCode(106,95,49,95,112,114,101,115,101,100,0);
         leakcheckeri.push(3 >> (Math.min(1, langy.length)));
         launch9 += `${anners.length}`;
         anners = `${2 << (Math.min(3, launch9.length))}`;
          let cricketq = String.fromCharCode(115,95,53,53,95,105,110,116,101,114,115,101,99,116,105,110,103,0);
         leakcheckeri = [leakcheckeri.length * langy.length];
         cricketq = `${cricketq.length << (Math.min(4, cricketq.length))}`;
      while (!langy.startsWith(`${leakcheckeri.length}`)) {
         leakcheckeri.push(leakcheckeri.length & langy.length);
         break;
      }
      while ((leakcheckeri.length + langy.length) == 3) {
          let yingd: Map<any, any> = new Map([[String.fromCharCode(97,108,103,111,114,105,116,104,109,95,113,95,54,51,0),120], [String.fromCharCode(122,95,51,50,95,109,97,105,110,98,117,110,100,108,101,0),980], [String.fromCharCode(97,95,53,48,95,114,101,102,101,114,101,110,101,0),91]]);
          let whatsapp9: Array<any> = [434, 247, 422];
          let libglogQ = false;
         leakcheckeri.push(whatsapp9.length | 1);
         yingd = new Map([[`${yingd.size}`, yingd.size]]);
         whatsapp9.push(yingd.size);
         break;
      }
      libreactperfloggerjnif = `${parseInt(`${orange7}`)}`;
   for (let p = 0; p < 3; p++) {
      commentL /= Math.max(3, 3);
   }
      models3 /= Math.max(3, parseFloat(`${mbsplasho.length}`));
      console.log("error when retrieving local comments: ", error);

   let sentryT = 8541255.0 <= models3;
   do {
       let singapore2 = 2;
       let mathp: Array<any> = [934, 59, 106];
       let scrollviewo = false;
         scrollviewo = mathp.includes(scrollviewo);
      for (let c = 0; c < 1; c++) {
         singapore2 -= mathp.length ^ 2;
      }
      let foundU = scrollviewo ? !scrollviewo : scrollviewo;
      do {
         scrollviewo = 63 == mathp.length || singapore2 == 63;
         if (foundU) {
            break;
         }
      } while (foundU && (scrollviewo));
      if (2 <= (mathp.length / 1)) {
          let gdtadvV = true;
          let pingl: Array<any> = [149, 826];
          let tumbnailB = String.fromCharCode(109,95,53,51,95,107,97,110,110,97,0);
          let orangez: Array<any> = [291, 316, 800];
         scrollviewo = 90 < tumbnailB.length;
         gdtadvV = !gdtadvV;
         pingl.push(2);
         tumbnailB += `${((gdtadvV ? 2 : 3) & pingl.length)}`;
         orangez.push(((gdtadvV ? 5 : 3) ^ orangez.length));
      }
      if (!scrollviewo) {
         mathp.push(1);
      }
          let manifestS = String.fromCharCode(119,95,53,49,95,112,97,108,109,0);
          let pathV = false;
         mathp = [(manifestS == String.fromCharCode(100,0) ? manifestS.length : singapore2)];
         pathV = (pathV ? !pathV : pathV);
       let textinputE: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,111,118,101,114,0),742], [String.fromCharCode(117,95,54,52,95,55,95,57,50,0),668]]);
         textinputE = new Map([[`${textinputE.size}`, textinputE.size / (Math.max(6, mathp.length))]]);
      for (let i = 0; i < 3; i++) {
         mathp.push(2 - textinputE.size);
      }
      models3 *= parseFloat(`${1 & mbsplasho.length}`);
      if (sentryT) {
         break;
      }
   } while (sentryT && (5.62 >= (models3 - 1.42) && 3 >= (animationsU.length * 4)));
      chat0 *= parseFloat(`${3}`);
   let thumbnail0 = models3 >= 8469361.0;
   do {
       let circlet = 0.0;
       let libtank: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,112,111,114,116,95,121,95,52,55,0),134], [String.fromCharCode(116,95,50,49,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),528], [String.fromCharCode(111,103,103,95,108,95,52,57,0),85]]);
       let googleT = 2;
          let selectedU = 2.0;
         libtank.set(`${googleT}`, 3 | googleT);
         selectedU *= parseFloat(`${parseInt(`${selectedU}`) << (Math.min(3, Math.abs(3)))}`);
         googleT |= libtank.size;
         circlet /= Math.max(1, 4);
         libtank.set(`${circlet}`, parseInt(`${circlet}`) << (Math.min(4, Math.abs(googleT))));
      while (2 > (googleT % (Math.max(libtank.size, 5)))) {
          let interstitial0: Array<any> = [939, 980, 581];
         libtank = new Map([[`${interstitial0.length}`, interstitial0.length]]);
         break;
      }
         circlet *= 2 << (Math.min(2, Math.abs(parseInt(`${circlet}`))));
         libtank = new Map([[`${googleT}`, googleT]]);
          let aream = true;
          let bootsplashR: Array<any> = [992, 699];
         libtank = new Map([[`${libtank.size}`, 1]]);
         aream = bootsplashR.includes(aream);
         bootsplashR.push((bootsplashR.length / (Math.max(4, (aream ? 3 : 3)))));
      for (let x = 0; x < 2; x++) {
         googleT %= Math.max(3 * googleT, 1);
      }
      models3 /= Math.max(parseFloat(`${libreactperfloggerjnif.length}`), 5);
      if (thumbnail0) {
         break;
      }
   } while (thumbnail0 && ((libreactperfloggerjnif.length & 2) >= 4));
   while (!mbsplasho.startsWith(`${models3}`)) {
       let anythinkj = 0.0;
       let backgroundG = 5;
       let logoB = String.fromCharCode(111,95,51,55,95,115,99,97,110,0);
       let configq: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,115,101,110,100,109,98,117,102,0),5], [String.fromCharCode(109,111,122,106,112,101,103,95,122,95,54,53,0),885]]);
      let valuesX = configq.size >= 9314710;
      do {
          let whistlev: Array<any> = [96, 3, 198];
          let gpayf = 1.0;
         configq = new Map([[`${whistlev.length}`, (String.fromCharCode(107,0) == logoB ? logoB.length : whistlev.length)]]);
         gpayf /= Math.max(3, parseInt(`${gpayf}`));
         if (valuesX) {
            break;
         }
      } while (valuesX && (3 > (configq.size >> (Math.min(4, Math.abs(backgroundG))))));
          let values8 = 0.0;
          let usernameG: Map<any, any> = new Map([[String.fromCharCode(112,108,111,116,95,113,95,49,56,0),420], [String.fromCharCode(98,117,98,98,108,101,95,105,95,57,57,0),81]]);
          let playlist3 = 1.0;
         backgroundG >>= Math.min(Math.abs(2), 5);
         values8 -= parseFloat(`${1 & usernameG.size}`);
         usernameG = new Map([[`${usernameG.size}`, usernameG.size + 2]]);
         playlist3 *= parseInt(`${playlist3}`) / (Math.max(usernameG.size, 4));
         backgroundG += backgroundG / (Math.max(logoB.length, 8));
         logoB += "2";
      while ((logoB.length - backgroundG) < 2) {
          let moduleE = 0.0;
          let memberq = 1.0;
          let zhengpians = String.fromCharCode(100,95,51,51,95,117,115,101,114,110,97,109,101,0);
          let buttond: Map<any, any> = new Map([[String.fromCharCode(111,95,57,95,112,114,111,103,114,97,109,115,0),3], [String.fromCharCode(115,116,114,104,97,115,104,95,116,95,54,54,0),748]]);
          let screens = String.fromCharCode(101,120,112,111,114,116,95,105,95,53,56,0);
         logoB += `${(String.fromCharCode(68,0) == zhengpians ? zhengpians.length : logoB.length)}`;
         moduleE += buttond.size;
         memberq *= parseFloat(`${screens.length & buttond.size}`);
         screens = `${buttond.size}`;
         break;
      }
      while (!logoB.includes(`${backgroundG}`)) {
          let producte = String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,100,95,57,49,0);
          let traminiQ = 5.0;
         backgroundG <<= Math.min(5, Math.abs(backgroundG - parseInt(`${traminiQ}`)));
         producte = `${1 + producte.length}`;
         traminiQ -= producte.length;
         break;
      }
      while (1.89 <= (anythinkj - 4.93)) {
         logoB += "3";
         break;
      }
         logoB = `${3 | parseInt(`${anythinkj}`)}`;
          let codegenp = 5.0;
          let sliderD = true;
          let frame_y5z = 3.0;
         backgroundG += 1 >> (Math.min(5, logoB.length));
         codegenp -= (parseFloat(`${(sliderD ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${frame_y5z}`)), 1))}`));
         sliderD = !sliderD || frame_y5z == 69.75;
         logoB = `${(String.fromCharCode(72,0) == logoB ? logoB.length : parseInt(`${anythinkj}`))}`;
         logoB += `${configq.size / (Math.max(1, 5))}`;
      if (logoB.length < configq.size) {
         logoB = `${parseInt(`${anythinkj}`) & backgroundG}`;
      }
      models3 /= Math.max(parseFloat(`${1 - animationsU.length}`), 3);
      break;
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let favorite2 = String.fromCharCode(105,95,54,56,95,118,97,108,105,100,97,116,101,0);
    let libmapbufferjniQ = 2;
    let reactn = 4;
    let middlef = 1.0;
    let eighteenQ = String.fromCharCode(114,101,98,97,108,97,110,99,101,95,107,95,55,57,0);
    let qaagS = false;
    let assistf = 5.0;
    let componentm: Array<any> = [139, 271];
    let styleD = false;
    let leakchecker1 = String.fromCharCode(118,95,55,48,95,115,116,114,110,100,117,112,0);
    let hongkongu: Array<any> = [String.fromCharCode(105,110,118,111,107,101,95,107,95,56,48,0), String.fromCharCode(109,95,55,51,95,100,105,118,105,100,101,0), String.fromCharCode(97,95,52,52,95,104,111,114,105,122,111,110,116,97,108,108,121,0)];
    let libhermest = false;
    let notificationi = 1.0;
    let libreanimatedS: Array<any> = [595, 109, 337];
    let scheduleb = 1.0;
       let clock7 = String.fromCharCode(116,114,117,115,116,101,100,95,55,95,56,54,0);
       let fadfdeebbbfdabbbabdadfaaddaa1 = 2;
         fadfdeebbbfdabbbabdadfaaddaa1 /= Math.max(fadfdeebbbfdabbbabdadfaaddaa1, 4);
      while (!clock7.endsWith(`${fadfdeebbbfdabbbabdadfaaddaa1}`)) {
         clock7 = `${clock7.length}`;
         break;
      }
      while (2 == (fadfdeebbbfdabbbabdadfaaddaa1 >> (Math.min(Math.abs(5), 2)))) {
         fadfdeebbbfdabbbabdadfaaddaa1 &= fadfdeebbbfdabbbabdadfaaddaa1 % 1;
         break;
      }
         fadfdeebbbfdabbbabdadfaaddaa1 *= fadfdeebbbfdabbbabdadfaaddaa1 / (Math.max(1, 2));
      for (let k = 0; k < 3; k++) {
          let calendarj = 4.0;
          let bufferf = String.fromCharCode(109,95,54,50,0);
         clock7 = `${bufferf.length + fadfdeebbbfdabbbabdadfaaddaa1}`;
         calendarj += parseInt(`${calendarj}`);
         bufferf += `${3 % (Math.max(parseInt(`${calendarj}`), 8))}`;
      }
      while (2 < (fadfdeebbbfdabbbabdadfaaddaa1 | clock7.length)) {
          let questU: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,95,113,95,53,51,0),298], [String.fromCharCode(101,118,114,99,95,113,95,51,54,0),571]]);
          let short_a5: Array<any> = [String.fromCharCode(116,95,57,54,95,115,116,101,112,115,105,122,101,0), String.fromCharCode(114,101,110,101,119,95,104,95,50,0)];
          let progressN = String.fromCharCode(116,105,109,101,103,109,95,55,95,54,48,0);
         clock7 += "1";
         questU = new Map([[`${questU.size}`, short_a5.length / (Math.max(2, 1))]]);
         short_a5 = [1];
         progressN = `${short_a5.length * questU.size}`;
         break;
      }
      leakchecker1 = `${(clock7 == String.fromCharCode(55,0) ? clock7.length : (styleD ? 4 : 3))}`;
      reactn ^= eighteenQ.length;
   if (favorite2.includes(`${middlef}`)) {
      middlef -= parseInt(`${middlef}`) % 3;
   }

    if (!comment) {

       let feedbackK: Array<any> = [845, 283, 912];
         feedbackK.push(2 ^ feedbackK.length);
      let libpangleflippedo = 7062358 <= feedbackK.length;
      do {
          let sheetL = String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,119,95,50,56,0);
          let libhermesE = String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,104,95,57,51,0);
          let libreanimated1 = 4.0;
          let libreanimatedK = 3;
          let x_positionn: Map<any, any> = new Map([[String.fromCharCode(118,95,55,53,95,114,101,97,109,0),700], [String.fromCharCode(104,105,103,104,101,115,116,95,51,95,56,57,0),584]]);
         feedbackK.push(2);
         sheetL = `${sheetL.length}`;
         libhermesE = "3";
         libreanimated1 += (parseFloat(`${String.fromCharCode(103,0) == sheetL ? libhermesE.length : sheetL.length}`));
         libreanimatedK <<= Math.min(Math.abs(2 - parseInt(`${libreanimated1}`)), 2);
         x_positionn = new Map([[`${x_positionn.size}`, 3 - x_positionn.size]]);
         if (libpangleflippedo) {
            break;
         }
      } while (libpangleflippedo && ((feedbackK.length % (Math.max(6, feedbackK.length))) == 5 || (feedbackK.length % 5) == 4));
         feedbackK = [3 >> (Math.min(2, feedbackK.length))];
      favorite2 += `${libmapbufferjniQ + 1}`;
   while (libmapbufferjniQ <= reactn) {
      reactn |= componentm.length;
      break;
   }
   if (!qaagS) {
      eighteenQ += `${(leakchecker1 == String.fromCharCode(69,0) ? leakchecker1.length : eighteenQ.length)}`;
   }
      return;
    }

    console.log('user comment', comment);

      reactn -= componentm.length / (Math.max(2, 9));
      eighteenQ = `${3 % (Math.max(parseInt(`${middlef}`), 1))}`;
   for (let k = 0; k < 3; k++) {
      qaagS = !libhermest;
   }
    try {

   for (let f = 0; f < 3; f++) {
       let roundT = 3;
       let final_93 = 2.0;
       let agreemento = 0;
       let libreanimatedu = 2.0;
       let greenE = 5.0;
         final_93 /= Math.max(4, parseFloat(`${roundT ^ 2}`));
         libreanimatedu /= Math.max(parseInt(`${final_93}`), 2);
      if ((4.61 * libreanimatedu) <= 1.27) {
         agreemento += 3 % (Math.max(roundT, 1));
      }
       let selectionT: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,115,99,114,101,101,110,115,104,97,114,101,0),String.fromCharCode(110,95,57,56,95,112,97,114,105,116,121,0)], [String.fromCharCode(97,118,101,114,114,111,114,95,122,95,52,53,0),String.fromCharCode(99,95,56,55,95,100,105,97,109,101,116,101,114,0)], [String.fromCharCode(102,95,49,53,95,116,101,109,112,0),String.fromCharCode(116,95,52,53,95,116,105,112,0)]]);
      let hongkongO = 5022790 <= roundT;
      do {
         roundT %= Math.max(1, agreemento << (Math.min(3, Math.abs(2))));
         if (hongkongO) {
            break;
         }
      } while ((selectionT.size >= 5) && hongkongO);
         agreemento |= 2 / (Math.max(parseInt(`${greenE}`), 7));
         libreanimatedu += agreemento >> (Math.min(2, Math.abs(3)));
      for (let r = 0; r < 3; r++) {
         final_93 += parseFloat(`${agreemento % (Math.max(parseInt(`${greenE}`), 4))}`);
      }
      leakchecker1 += `${2 + roundT}`;
   }
   for (let k = 0; k < 3; k++) {
       let filed: Map<any, any> = new Map([[String.fromCharCode(103,95,51,49,95,101,114,97,115,101,114,0),588], [String.fromCharCode(100,95,55,50,95,116,98,117,102,0),847], [String.fromCharCode(107,95,51,50,95,116,101,114,109,105,110,97,116,111,114,0),490]]);
       let latn1: Array<any> = [427, 770, 806];
       let ajaxF = 4.0;
       let cnewinterstitialm = 0.0;
       let z_titleu = false;
       let targetc = 2.0;
       let a_titleR = 0.0;
      let mbridgel = z_titleu ? !z_titleu : z_titleu;
      do {
          let buildz = String.fromCharCode(101,95,52,51,95,115,116,97,99,107,116,114,97,99,101,0);
          let episodesY = 5;
         z_titleu = a_titleR < cnewinterstitialm;
         buildz = `${3 >> (Math.min(1, Math.abs(episodesY)))}`;
         episodesY += 2;
         if (mbridgel) {
            break;
         }
      } while ((z_titleu) && mbridgel);
      for (let b = 0; b < 2; b++) {
         z_titleu = 88.70 >= (targetc - cnewinterstitialm);
      }
          let themev = String.fromCharCode(114,95,49,57,95,100,97,114,119,105,110,0);
          let downloadedK = 4.0;
          let brightness8 = 1;
         ajaxF *= parseFloat(`${brightness8}`);
         themev += `${themev.length >> (Math.min(5, Math.abs(parseInt(`${downloadedK}`))))}`;
         downloadedK /= Math.max(parseFloat(`${parseInt(`${downloadedK}`) + themev.length}`), 1);
         brightness8 >>= Math.min(Math.abs(parseInt(`${downloadedK}`) ^ themev.length), 4);
      for (let k = 0; k < 3; k++) {
         ajaxF += parseFloat(`${parseInt(`${ajaxF}`) + 2}`);
      }
      let philippines6 = 6837006.0 <= a_titleR;
      do {
          let brightnessh: Map<any, any> = new Map([[String.fromCharCode(119,95,51,51,95,97,117,116,104,111,114,105,116,121,0),519], [String.fromCharCode(105,110,116,101,114,105,111,114,95,103,95,51,48,0),983]]);
         a_titleR -= parseFloat(`${filed.size % (Math.max(8, parseInt(`${cnewinterstitialm}`)))}`);
         brightnessh = new Map([[`${brightnessh.size}`, 2]]);
         if (philippines6) {
            break;
         }
      } while (philippines6 && (1.8 >= (ajaxF / 2)));
      for (let m = 0; m < 1; m++) {
         z_titleu = filed.size <= 67 || 18.22 <= a_titleR;
      }
      if (2 == latn1.length) {
         filed.set(`${cnewinterstitialm}`, 1 | latn1.length);
      }
      let logoutV = z_titleu ? !z_titleu : z_titleu;
      do {
         z_titleu = (parseFloat(`${filed.size}`) - a_titleR) >= 83.41;
         if (logoutV) {
            break;
         }
      } while ((1.46 < (ajaxF / 5.1) || 5.1 < ajaxF) && logoutV);
       let becomeB: Map<any, any> = new Map([[String.fromCharCode(105,95,52,53,95,108,116,97,98,108,101,0),false ], [String.fromCharCode(105,110,108,105,103,104,116,95,114,95,50,53,0),true ]]);
       let moviesm: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,103,101,116,97,100,100,114,105,110,102,111,0),false ], [String.fromCharCode(118,95,51,50,95,100,101,102,108,97,116,101,0),true ]]);
      for (let d = 0; d < 3; d++) {
         moviesm.set(`${latn1.length}`, 2);
      }
      let buffere = 8759583 >= becomeB.size;
      do {
         becomeB.set(`${ajaxF}`, 3);
         if (buffere) {
            break;
         }
      } while ((5.50 <= a_titleR) && buffere);
      while (ajaxF == 4.98) {
         ajaxF *= parseFloat(`${1}`);
         break;
      }
      if ((ajaxF / 2.66) == 3.3 && (2.66 / (Math.max(10, ajaxF))) == 2.24) {
         ajaxF -= parseFloat(`${filed.size % 3}`);
      }
      for (let d = 0; d < 1; d++) {
          let nativemoduleM = 1.0;
          let videoS = String.fromCharCode(102,95,56,50,0);
          let detailsP = false;
         moviesm = new Map([[`${ajaxF}`, ((z_titleu ? 2 : 3) % (Math.max(9, parseInt(`${ajaxF}`))))]]);
         nativemoduleM /= Math.max(videoS.length, 3);
         videoS = `${parseInt(`${nativemoduleM}`) - 3}`;
         detailsP = !detailsP;
      }
      styleD = String.fromCharCode(83,0) == leakchecker1;
   }
   if (4 < (3 / (Math.max(7, hongkongu.length))) || 1 < (hongkongu.length / 3)) {
      leakchecker1 += `${reactn}`;
   }
      const existingComments = await getLocalComments();

       let reducerh = 3.0;
       let container0 = true;
      for (let p = 0; p < 3; p++) {
         container0 = reducerh <= 80.22 || container0;
      }
      for (let h = 0; h < 2; h++) {
          let constantsa = 3.0;
         container0 = constantsa <= reducerh;
      }
      if (container0) {
         reducerh += (parseFloat(`${parseInt(`${reducerh}`) & (container0 ? 3 : 3)}`));
      }
          let rules9 = 4.0;
          let send8 = String.fromCharCode(121,111,110,108,121,120,95,105,95,55,55,0);
          let emptyu = String.fromCharCode(111,119,110,115,95,97,95,52,51,0);
         container0 = String.fromCharCode(85,0) == send8;
         rules9 /= Math.max(1, 2 / (Math.max(8, emptyu.length)));
         send8 += "3";
         emptyu += `${emptyu.length}`;
          let progressH = 5.0;
         container0 = (reducerh / (Math.max(8, progressH))) < 67.13;
      let schedulerB = container0 ? !container0 : container0;
      do {
         container0 = 59.76 >= reducerh;
         if (schedulerB) {
            break;
         }
      } while ((1.82 > (reducerh / 3.41) && 3.41 > reducerh) && schedulerB);
      leakchecker1 += `${parseInt(`${middlef}`)}`;
       let casting_: Map<any, any> = new Map([[String.fromCharCode(103,95,57,95,112,114,111,116,101,99,116,111,114,0),960], [String.fromCharCode(103,95,51,54,95,99,108,97,122,122,0),553], [String.fromCharCode(100,95,51,57,95,98,119,114,105,116,101,0),821]]);
       let gdtadvJ: Array<any> = [527, 5, 565];
       let headeru = String.fromCharCode(97,100,109,105,110,115,95,106,95,55,53,0);
      for (let i = 0; i < 1; i++) {
          let shareX: Array<any> = [String.fromCharCode(99,111,109,112,97,99,116,95,111,95,54,49,0), String.fromCharCode(117,101,117,101,95,118,95,50,56,0)];
          let with_tto = 2.0;
          let tail6: Array<any> = [806, 41];
          let referrer4 = String.fromCharCode(112,95,56,55,95,115,112,108,105,116,109,118,115,0);
          let grey9 = false;
         gdtadvJ = [headeru.length / 1];
         shareX = [referrer4.length];
         with_tto -= tail6.length;
         tail6 = [(2 ^ (grey9 ? 2 : 1))];
         referrer4 = `${tail6.length | 1}`;
         grey9 = String.fromCharCode(57,0) == referrer4 || 67.64 <= with_tto;
      }
      for (let y = 0; y < 3; y++) {
         gdtadvJ = [2 & casting_.size];
      }
          let nativemodulem = String.fromCharCode(102,95,52,53,95,114,101,99,101,105,112,116,115,0);
          let arrowV = 0.0;
          let anythinkY = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,122,95,53,49,0);
         gdtadvJ.push(2);
         nativemodulem += "1";
         arrowV /= Math.max(5, parseInt(`${arrowV}`) + 1);
         anythinkY += `${parseInt(`${arrowV}`)}`;
         headeru += `${1 << (Math.min(2, Math.abs(casting_.size)))}`;
         casting_.set(`${gdtadvJ.length}`, gdtadvJ.length & 1);
       let temperatureo: Array<any> = [770, 373];
         casting_ = new Map([[`${gdtadvJ.length}`, 2 & headeru.length]]);
      let alertN = String.fromCharCode(97,49,97,105,109,54,0) == headeru;
      do {
          let signinupZ = 1.0;
         headeru += `${gdtadvJ.length & parseInt(`${signinupZ}`)}`;
         if (alertN) {
            break;
         }
      } while ((2 > (headeru.length % 1)) && alertN);
      while (!headeru.startsWith(`${casting_.size}`)) {
          let forwardy = 2.0;
          let transferK: Array<any> = [512, 782, 145];
          let nextK = String.fromCharCode(117,110,105,95,99,95,51,52,0);
         casting_ = new Map([[`${transferK.length}`, nextK.length]]);
         forwardy -= parseFloat(`${3}`);
         transferK.push(parseInt(`${forwardy}`) >> (Math.min(Math.abs(parseInt(`${forwardy}`)), 1)));
         break;
      }
      hongkongu.push((eighteenQ == String.fromCharCode(108,0) ? eighteenQ.length : gdtadvJ.length));
   for (let d = 0; d < 2; d++) {
      leakchecker1 = `${eighteenQ.length}`;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

      assistf /= Math.max(reactn | eighteenQ.length, 2);
   while (eighteenQ.length < parseInt(`${middlef}`)) {
       let mathc = String.fromCharCode(106,95,50,57,95,100,101,97,100,105,110,101,0);
       let annerE: Array<any> = [892, 32];
       let tickedW: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,95,110,95,51,52,0),String.fromCharCode(122,95,54,53,95,113,99,97,110,0)], [String.fromCharCode(111,95,57,95,99,111,112,121,0),String.fromCharCode(118,95,55,54,95,118,100,101,99,0)]]);
       let rewardvideon: Array<any> = [973, 697, 613];
      let downloaderT = tickedW.size >= 6624224;
      do {
         tickedW = new Map([[`${tickedW.size}`, annerE.length]]);
         if (downloaderT) {
            break;
         }
      } while ((4 < (2 + annerE.length) || (tickedW.size + annerE.length) < 2) && downloaderT);
          let zhubo4 = false;
          let videoG = String.fromCharCode(106,114,101,118,100,99,116,95,114,95,54,56,0);
          let match5: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,118,97,114,95,105,95,57,56,0),650], [String.fromCharCode(99,95,57,57,95,109,117,108,116,105,99,97,115,116,0),94], [String.fromCharCode(103,95,57,53,95,103,101,116,97,115,115,111,99,105,100,0),72]]);
         annerE.push(annerE.length);
         zhubo4 = videoG.endsWith(`${zhubo4}`);
         videoG = `${((zhubo4 ? 4 : 1) / 2)}`;
         match5.set(`${videoG}`, 3 + match5.size);
      while (tickedW.get(`${rewardvideon.length}`) != null) {
         tickedW.set(mathc, annerE.length);
         break;
      }
       let tickw: Array<any> = [740, 454, 863];
         rewardvideon.push(tickedW.size ^ 1);
      while (2 <= rewardvideon.length) {
         rewardvideon = [annerE.length ^ 2];
         break;
      }
         annerE.push(rewardvideon.length ^ 2);
         tickedW.set(`${annerE.length}`, annerE.length & 2);
          let imagemanagero = String.fromCharCode(105,115,115,117,101,115,95,50,95,55,50,0);
          let telegramT = true;
          let moviesK: Map<any, any> = new Map([[String.fromCharCode(98,97,110,95,54,95,49,0),292], [String.fromCharCode(100,101,97,108,108,111,99,95,57,95,53,54,0),415], [String.fromCharCode(112,95,50,53,95,105,110,116,101,114,97,99,116,105,111,110,115,0),604]]);
         tickedW.set(`${rewardvideon.length}`, moviesK.size);
         imagemanagero = `${(imagemanagero.length | (telegramT ? 2 : 3))}`;
         telegramT = imagemanagero.length >= 43 && telegramT;
         moviesK.set(imagemanagero, (imagemanagero.length ^ (telegramT ? 5 : 5)));
      if (5 < (tickedW.size % 3) && (rewardvideon.length % (Math.max(tickedW.size, 3))) < 3) {
          let alerti: Array<any> = [462, 55];
          let emptyd: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,49,95,48,0),String.fromCharCode(108,95,49,56,95,116,111,107,101,110,105,122,101,100,0)], [String.fromCharCode(101,100,105,116,111,114,95,121,95,56,52,0),String.fromCharCode(97,100,118,97,110,99,105,110,103,95,101,95,52,49,0)]]);
          let temperature9 = String.fromCharCode(115,108,105,100,101,114,95,109,95,50,53,0);
         rewardvideon.push((String.fromCharCode(76,0) == temperature9 ? rewardvideon.length : temperature9.length));
         alerti.push(2 >> (Math.min(4, Math.abs(emptyd.size))));
         emptyd.set(`${alerti.length}`, emptyd.size);
      }
         mathc += "3";
       let valuesO = String.fromCharCode(122,95,57,54,95,99,111,109,112,108,105,97,110,116,0);
       let xadsdkk = String.fromCharCode(117,95,55,53,95,99,111,110,116,105,110,117,101,115,0);
      eighteenQ = `${(favorite2.length & (qaagS ? 2 : 5))}`;
      break;
   }
   while (2 > hongkongu.length) {
      middlef += 1;
      break;
   }
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

   for (let i = 0; i < 2; i++) {
      eighteenQ += `${((styleD ? 5 : 4) / (Math.max(parseInt(`${middlef}`), 4)))}`;
   }
      middlef *= ((styleD ? 3 : 3) | 1);
   for (let r = 0; r < 1; r++) {
      componentm = [1 * componentm.length];
   }

      commentItems.unshift(commmentObj);

       let sharedL = String.fromCharCode(108,95,55,54,95,114,97,110,107,105,110,103,115,0);
       let componentc = 5.0;
      let libflipperL = sharedL.length <= 7232489;
      do {
         sharedL += `${parseInt(`${componentc}`)}`;
         if (libflipperL) {
            break;
         }
      } while (libflipperL && (!sharedL.endsWith(`${componentc}`)));
      let filtere = 9324667.0 <= componentc;
      do {
         componentc *= parseInt(`${componentc}`);
         if (filtere) {
            break;
         }
      } while (((sharedL.length | 1) <= 1 && (1 & sharedL.length) <= 1) && filtere);
         sharedL += `${3 & parseInt(`${componentc}`)}`;
         sharedL = `${2 & parseInt(`${componentc}`)}`;
      let entryJ = String.fromCharCode(118,107,116,50,48,119,105,0) == sharedL;
      do {
         sharedL += `${parseInt(`${componentc}`)}`;
         if (entryJ) {
            break;
         }
      } while (entryJ && ((3 ^ sharedL.length) < 5 && (sharedL.length + 3) < 4));
       let qaagi = 4;
      styleD = libmapbufferjniQ == eighteenQ.length;
   let configureJ = libmapbufferjniQ <= 9339718;
   do {
      libmapbufferjniQ %= Math.max(((styleD ? 5 : 3)), 5);
      if (configureJ) {
         break;
      }
   } while ((5 < (2 + hongkongu.length)) && configureJ);
   for (let j = 0; j < 1; j++) {
       let sharez: Array<any> = [399, 233, 43];
       let umengT = 5.0;
       let binddatasP = String.fromCharCode(104,95,52,51,95,114,101,100,101,101,109,0);
      for (let b = 0; b < 3; b++) {
         binddatasP += `${(String.fromCharCode(120,0) == binddatasP ? parseInt(`${umengT}`) : binddatasP.length)}`;
      }
      while (2.50 < (binddatasP.length + umengT)) {
          let eactc = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,110,95,57,57,0);
          let fastF: Array<any> = [String.fromCharCode(105,115,101,109,112,116,121,95,56,95,53,50,0), String.fromCharCode(109,105,120,105,110,115,95,107,95,53,48,0)];
          let watchj = 5.0;
         binddatasP += `${fastF.length}`;
         eactc = `${3 << (Math.min(1, Math.abs(parseInt(`${watchj}`))))}`;
         fastF.push(parseInt(`${watchj}`) | eactc.length);
         break;
      }
         umengT *= parseInt(`${umengT}`) >> (Math.min(sharez.length, 5));
      let membershipH = 8327236 <= sharez.length;
      do {
         sharez = [1];
         if (membershipH) {
            break;
         }
      } while ((3.47 == umengT) && membershipH);
      for (let x = 0; x < 3; x++) {
         sharez = [3 & parseInt(`${umengT}`)];
      }
       let libfbjniA: Map<any, any> = new Map([[String.fromCharCode(103,95,57,95,110,111,116,103,101,116,0),String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,109,95,55,49,0)], [String.fromCharCode(112,105,120,109,97,112,95,110,95,57,50,0),String.fromCharCode(122,95,51,51,95,98,101,116,97,0)], [String.fromCharCode(120,95,55,57,95,97,118,117,116,105,108,0),String.fromCharCode(109,101,114,103,101,97,98,108,101,95,49,95,51,51,0)]]);
       let leftR: Map<any, any> = new Map([[String.fromCharCode(104,101,114,109,105,116,101,95,108,95,57,51,0),true ], [String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,50,95,52,56,0),false ]]);
         leftR.set(`${sharez.length}`, 2 >> (Math.min(1, sharez.length)));
      while (!Array.from(leftR.values()).includes(sharez.length)) {
         leftR.set(`${binddatasP}`, binddatasP.length);
         break;
      }
      for (let d = 0; d < 2; d++) {
          let trophyd = String.fromCharCode(98,95,53,50,95,98,105,116,114,118,99,111,110,106,0);
          let leagueD = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,95,119,95,53,55,0);
          let commentO = String.fromCharCode(97,95,53,48,95,113,101,120,112,0);
          let android3 = String.fromCharCode(102,102,109,109,97,108,95,113,95,49,0);
          let default_ap = 3.0;
         umengT -= 1;
         trophyd += `${android3.length + trophyd.length}`;
         leagueD = "3";
         commentO += `${(String.fromCharCode(89,0) == leagueD ? leagueD.length : commentO.length)}`;
         android3 = `${(String.fromCharCode(103,0) == android3 ? android3.length : trophyd.length)}`;
         default_ap -= 3;
      }
      assistf -= componentm.length;
   }
      setIsUpdated(!isUpdated);

   while (componentm.length >= 1) {
      assistf += libmapbufferjniQ;
      break;
   }
       let sliderP = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,98,95,50,49,0);
       let feedbackq: Array<any> = [340, 966];
          let unselectedh: Array<any> = [224, 297];
          let launcherJ = 2;
          let anythinkw = 5.0;
         sliderP = "1";
         unselectedh.push(parseInt(`${anythinkw}`));
         launcherJ ^= unselectedh.length & 2;
         anythinkw /= Math.max(parseFloat(`${unselectedh.length}`), 5);
          let telemetryd = String.fromCharCode(115,95,55,52,95,98,101,99,97,109,101,0);
          let usernameE = String.fromCharCode(113,95,56,53,95,97,112,112,101,110,100,0);
          let gemfile9 = String.fromCharCode(118,95,50,55,95,110,101,116,119,111,114,107,105,110,103,0);
         sliderP += `${telemetryd.length >> (Math.min(Math.abs(3), 5))}`;
         telemetryd += `${gemfile9.length & usernameE.length}`;
         usernameE = `${gemfile9.length << (Math.min(usernameE.length, 5))}`;
          let commonh = false;
          let librrcl = true;
          let favoriteT = 4.0;
         feedbackq.push(2 << (Math.min(Math.abs(parseInt(`${favoriteT}`)), 5)));
         commonh = !librrcl || !commonh;
         librrcl = (!librrcl ? commonh : librrcl);
         favoriteT -= ((commonh ? 3 : 4));
         feedbackq.push(sliderP.length ^ feedbackq.length);
      let libjsijniprofilerF = 6941358 <= feedbackq.length;
      do {
         feedbackq.push(sliderP.length);
         if (libjsijniprofilerF) {
            break;
         }
      } while ((1 >= feedbackq.length) && libjsijniprofilerF);
         feedbackq = [2 - feedbackq.length];
      styleD = 85.20 == middlef || qaagS;
   while (1.86 > (assistf / (Math.max(hongkongu.length, 1)))) {
       let register_gO = 1.0;
       let activeK = true;
      while (activeK) {
         activeK = !activeK;
         break;
      }
       let rewindt = 5;
      if (3 <= rewindt || 4 <= (rewindt - 3)) {
          let baseV = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,107,95,57,48,0);
          let flipper1: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,0),829], [String.fromCharCode(101,95,57,52,95,108,111,103,105,99,0),651]]);
          let package_sr = String.fromCharCode(114,95,51,54,95,112,114,105,110,116,101,114,0);
          let temp_ = 5.0;
         rewindt ^= package_sr.length;
         baseV += `${flipper1.size}`;
         flipper1.set(`${temp_}`, flipper1.size);
         package_sr = "2";
         temp_ *= parseFloat(`${flipper1.size ^ baseV.length}`);
      }
      if (4.47 < (register_gO * 1.87)) {
         register_gO += (parseFloat(`${parseInt(`${register_gO}`) * (activeK ? 4 : 4)}`));
      }
         register_gO *= (parseFloat(`${parseInt(`${register_gO}`) + (activeK ? 1 : 2)}`));
      for (let s = 0; s < 3; s++) {
         register_gO -= parseFloat(`${3}`);
      }
      assistf /= Math.max(3, 5);
      break;
   }
      Keyboard.dismiss();

   while (5 <= (eighteenQ.length - componentm.length) || 4 <= (5 - componentm.length)) {
      eighteenQ = `${(String.fromCharCode(113,0) == leakchecker1 ? parseInt(`${notificationi}`) : leakchecker1.length)}`;
      break;
   }
      favorite2 = `${parseInt(`${middlef}`) * 3}`;
   while (!leakchecker1.endsWith(`${styleD}`)) {
      leakchecker1 += `${eighteenQ.length}`;
      break;
   }
      yys_StatsForm.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

   while (1 > (parseInt(`${assistf}`) * favorite2.length) || (favorite2.length & 1) > 3) {
       let humidityR: Array<any> = [203, 528, 482];
       let gradlewQ = 3.0;
       let calendar0 = String.fromCharCode(99,95,57,49,95,104,111,108,100,101,114,0);
       let scrollview8 = 0.0;
       let sideQ = String.fromCharCode(104,95,50,48,95,97,118,99,111,100,101,99,0);
      for (let d = 0; d < 3; d++) {
          let dycreatorD = 5;
         gradlewQ *= parseFloat(`${dycreatorD}`);
      }
         sideQ = `${sideQ.length}`;
      let inviteB = humidityR.length <= 6061926;
      do {
          let flyer0 = 2;
         humidityR = [sideQ.length & humidityR.length];
         flyer0 &= flyer0 + flyer0;
         if (inviteB) {
            break;
         }
      } while (inviteB && (!humidityR.includes(gradlewQ)));
      for (let u = 0; u < 2; u++) {
         scrollview8 *= parseInt(`${scrollview8}`) * 2;
      }
      let hoverr = humidityR.length >= 6450496;
      do {
         humidityR.push(humidityR.length % (Math.max(calendar0.length, 9)));
         if (hoverr) {
            break;
         }
      } while ((!humidityR.includes(gradlewQ)) && hoverr);
      while (!humidityR.includes(gradlewQ)) {
         gradlewQ -= parseFloat(`${1}`);
         break;
      }
          let tempU = 3.0;
          let collectionW = String.fromCharCode(107,101,112,116,95,114,95,51,48,0);
          let videoD: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,109,97,112,95,57,95,55,48,0),String.fromCharCode(97,108,103,111,95,104,95,57,51,0)], [String.fromCharCode(114,117,108,101,98,111,111,107,95,103,95,52,50,0),String.fromCharCode(97,116,111,109,105,99,115,95,52,95,54,48,0)], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,119,95,54,52,0),String.fromCharCode(115,116,97,114,116,115,95,107,95,53,51,0)]]);
         scrollview8 -= 2 * sideQ.length;
         tempU /= Math.max(3, parseFloat(`${collectionW.length + 1}`));
         collectionW = "1";
         videoD.set(collectionW, parseInt(`${tempU}`));
      let controlq = String.fromCharCode(118,97,50,0) == sideQ;
      do {
         sideQ += `${calendar0.length}`;
         if (controlq) {
            break;
         }
      } while ((sideQ.length > 4 && calendar0 == String.fromCharCode(90,0)) && controlq);
          let leakcheckerS = String.fromCharCode(119,95,54,53,95,111,98,117,115,0);
          let animationsn = 2;
          let livep = 5.0;
         humidityR.push(1);
         leakcheckerS = `${leakcheckerS.length}`;
         animationsn |= animationsn;
         livep *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${livep}`)), 4))}`);
          let areaL = 5.0;
          let benefitF = 1.0;
         gradlewQ -= parseFloat(`${sideQ.length * 1}`);
         areaL -= parseInt(`${benefitF}`);
         scrollview8 += parseInt(`${gradlewQ}`) / (Math.max(humidityR.length, 6));
      for (let l = 0; l < 1; l++) {
         gradlewQ += parseFloat(`${3}`);
      }
      while (1 == (3 - sideQ.length)) {
          let yellowE = 4;
          let scorer = String.fromCharCode(101,109,117,108,97,116,101,100,95,112,95,49,54,0);
          let scoreH = 4.0;
          let indexW: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,115,111,117,114,99,101,0),String.fromCharCode(110,105,100,115,110,95,101,95,51,53,0)], [String.fromCharCode(119,102,101,120,95,51,95,52,56,0),String.fromCharCode(102,114,97,103,95,109,95,53,55,0)], [String.fromCharCode(101,95,56,51,95,108,111,99,97,116,101,100,0),String.fromCharCode(104,100,99,100,95,110,95,55,54,0)]]);
          let small2 = String.fromCharCode(110,95,50,50,95,105,114,97,110,100,0);
         humidityR = [indexW.size & 1];
         yellowE |= 2 * small2.length;
         scorer += "2";
         scoreH -= (parseFloat(`${String.fromCharCode(86,0) == small2 ? parseInt(`${scoreH}`) : small2.length}`));
         indexW = new Map([[small2, small2.length - parseInt(`${scoreH}`)]]);
         break;
      }
         scrollview8 += parseInt(`${gradlewQ}`) / 2;
      let floatinge = 6999620.0 <= gradlewQ;
      do {
         gradlewQ /= Math.max(parseFloat(`${parseInt(`${scrollview8}`) * 2}`), 1);
         if (floatinge) {
            break;
         }
      } while (floatinge && (4.1 < (gradlewQ - 4.40)));
      assistf -= humidityR.length;
      break;
   }
   while (3.57 >= (reactn - middlef) || 3 >= (reactn % 5)) {
      middlef *= parseInt(`${notificationi}`);
      break;
   }
      libmapbufferjniQ >>= Math.min(1, Math.abs(1));
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: yys_InviteAway, index: number }) => {
      return (
        <CommentCard
          key={index}
          commentItem={item}
        />
      );
    },
    [],
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScreenContainer
        footer={
          <View style={{ ...styles.commentContainer, backgroundColor: '#1D2023' }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: '#FFFFFF1A',
                ...textVariants.body,
              }}
              onChangeText={setComment}
              placeholder={yys_RelatedTooltips.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={yys_RelatedTooltips.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {yys_RelatedTooltips.isLogin(userState.user) ? (
              <>
                <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
                  {comment.length}/200
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setComment('');
                    storeUserComments();
                  }}
                >
                  <SubmitBtn fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => dispatch(showLoginAction())}
              >
                <Text style={{ ...textVariants.body, color: colors.primary }}>
                  立即登录
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      >
        <TitleWithBackButtonHeader
          title={vod_name + " - 全部评论 (" + commentItems.length + ")"}
          backBtnStyle={{
            left: 30,
          }}
        />

        <FlatList
          extraData={isUpdated}
          data={commentItems}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={renderItem}
        />
      </ScreenContainer>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },

});