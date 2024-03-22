import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks/kg_index";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/a_switch";
import { updateUsernameState } from "@redux/actions/rk_filed_watch";
import SpinnerOverlay from "./l_member_component";
import { THFirebase } from "@api";


interface XFillButton {
    isVisible?: boolean;
    handleClose?: () => any;
    initialUsername: string,
    onSubmitSuccess?: (username: string) => void,
}

export const ChangeUsernameModal = ({
    isVisible = false,
    handleClose,
    initialUsername,
    onSubmitSuccess,
}: XFillButton) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [username, setUsername] = useState(initialUsername);
    const [usernameErrMsg, setUsernameErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onUsernameChange = (value: any) => {
        setUsername(value);
        validateUsername(value.replace(/\s+/g, ""));
    };

    const validateUsername = (username: string): boolean => {
        if (2 <= username.length && username.length <= 18) {
            setUsernameErrMsg(null);
            return true;
        } else {
            setUsernameErrMsg("昵称必须介于2-18个字");
            return false;
        }
    }

    const resetForm = () => {
       let k_viewj = 5;
    let expandH: Array<any> = [572, 516, 893];
    let component1 = false;
    let clearf = 4.0;
    let unselectedW: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,110,95,56,95,53,51,0),678], [String.fromCharCode(116,95,52,53,95,99,111,109,112,97,99,116,101,100,0),551]]);
    let sansx: Array<any> = [399, 642, 35];
    let nterstitial1 = String.fromCharCode(113,95,54,95,100,111,119,110,115,97,109,112,108,101,0);
    let malaysiaM: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,97,98,115,100,105,102,102,0),573], [String.fromCharCode(115,99,104,101,109,101,115,95,107,95,54,52,0),692], [String.fromCharCode(114,101,97,100,105,110,95,51,95,57,54,0),622]]);
    let megaphoneo: Array<any> = [981, 152];
    let ewardedn: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,98,114,105,110,103,0),true ], [String.fromCharCode(110,95,53,49,95,99,99,111,117,110,116,0),false ]]);
    let crossR: Array<any> = [32, 465];
   if (sansx.length <= k_viewj) {
       let moonB = 5;
       let moduleq: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,116,111,107,101,110,105,122,101,114,0),false ], [String.fromCharCode(97,116,116,105,98,117,116,101,115,95,107,95,53,49,0),true ]]);
       let launch9 = String.fromCharCode(116,114,105,103,103,101,114,101,100,95,111,95,50,53,0);
       let long_rI = String.fromCharCode(100,110,115,95,108,95,50,49,0);
         moduleq = new Map([[`${moduleq.size}`, moduleq.size | moonB]]);
       let otherc = String.fromCharCode(109,105,115,115,101,100,95,121,95,53,56,0);
       let bingg = String.fromCharCode(121,95,55,55,95,102,112,117,116,115,0);
      for (let a = 0; a < 1; a++) {
          let recommendationF: Array<any> = [883, 472];
          let downloaderX = String.fromCharCode(122,99,111,110,118,111,108,118,101,95,53,95,50,0);
         otherc += `${bingg.length}`;
         recommendationF = [downloaderX.length];
         downloaderX = `${(downloaderX == String.fromCharCode(53,0) ? downloaderX.length : recommendationF.length)}`;
      }
          let side4 = String.fromCharCode(108,117,109,97,107,101,121,95,98,95,53,54,0);
         moonB ^= (side4 == String.fromCharCode(100,0) ? side4.length : launch9.length);
       let scoret = String.fromCharCode(105,95,55,95,104,113,120,100,115,112,0);
      let bootsplashO = bingg == String.fromCharCode(56,112,95,0);
      do {
          let inviteh = 0.0;
         bingg += `${bingg.length / (Math.max(scoret.length, 3))}`;
         inviteh -= parseFloat(`${parseInt(`${inviteh}`) % 3}`);
         if (bootsplashO) {
            break;
         }
      } while (bootsplashO && (bingg.length <= long_rI.length));
          let castingI = String.fromCharCode(99,104,97,116,95,110,95,57,53,0);
          let minimizeW = String.fromCharCode(105,110,99,111,109,105,110,103,95,121,95,52,55,0);
         scoret = `${moduleq.size}`;
         castingI += `${minimizeW.length & castingI.length}`;
         minimizeW = `${minimizeW.length}`;
          let goalP = false;
          let tumbnailW = String.fromCharCode(113,95,50,51,95,115,122,97,98,111,115,0);
          let containerN = false;
         launch9 = `${(scoret == String.fromCharCode(116,0) ? scoret.length : (goalP ? 5 : 5))}`;
         goalP = tumbnailW.length <= 92;
         tumbnailW += `${1 << (Math.min(2, tumbnailW.length))}`;
         containerN = tumbnailW.length > 85 || containerN;
      for (let z = 0; z < 1; z++) {
         bingg += `${scoret.length << (Math.min(long_rI.length, 2))}`;
      }
      while (moduleq.size > 3) {
         moduleq.set(bingg, otherc.length / 3);
         break;
      }
      while (launch9.includes(`${bingg.length}`)) {
         bingg += `${(scoret == String.fromCharCode(122,0) ? scoret.length : moduleq.size)}`;
         break;
      }
      let taiwanN = otherc.length <= 8100676;
      do {
         otherc = `${(String.fromCharCode(65,0) == scoret ? moduleq.size : scoret.length)}`;
         if (taiwanN) {
            break;
         }
      } while (((moonB & otherc.length) >= 2 && (otherc.length & moonB) >= 2) && taiwanN);
      sansx.push(nterstitial1.length);
   }
       let photo1 = String.fromCharCode(115,101,116,102,105,101,108,100,95,113,95,57,52,0);
         photo1 = `${photo1.length}`;
         photo1 = `${photo1.length}`;
       let successl = String.fromCharCode(110,101,108,108,121,95,106,95,54,52,0);
       let modity7 = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,114,95,56,52,0);
      clearf += 3;
   while ((expandH.length << (Math.min(nterstitial1.length, 5))) < 3 || (nterstitial1.length << (Math.min(1, expandH.length))) < 3) {
      expandH = [((component1 ? 2 : 5) * 2)];
      break;
   }
      nterstitial1 = `${((component1 ? 4 : 1) ^ nterstitial1.length)}`;
   while ((expandH.length - nterstitial1.length) <= 2) {
       let descX = true;
       let balla = String.fromCharCode(104,95,57,51,95,114,102,112,115,0);
       let aboutm = 3.0;
       let expiredG = true;
       let theme2 = 5.0;
         theme2 -= (parseFloat(`${parseInt(`${aboutm}`) - (expiredG ? 2 : 2)}`));
      let recommendationj = descX ? !descX : descX;
      do {
          let updatesg = 2.0;
          let entry3 = String.fromCharCode(119,97,116,101,114,95,97,95,52,55,0);
          let sportsv = 5;
          let catagory0 = 4.0;
         descX = entry3.includes(`${aboutm}`);
         updatesg -= parseFloat(`${parseInt(`${catagory0}`) - 1}`);
         entry3 += "1";
         sportsv -= 3 - sportsv;
         catagory0 += parseFloat(`${sportsv % 3}`);
         if (recommendationj) {
            break;
         }
      } while ((4 >= balla.length && !descX) && recommendationj);
         expiredG = aboutm < 53.18;
         descX = theme2 == 47.19;
      let photo2 = expiredG ? !expiredG : expiredG;
      do {
         expiredG = (aboutm + parseFloat(`${balla.length}`)) < 61.43;
         if (photo2) {
            break;
         }
      } while ((!expiredG) && photo2);
      while (4.85 > (1.51 * aboutm)) {
          let submitm = String.fromCharCode(122,95,49,49,95,100,101,98,117,103,98,111,120,0);
          let greyD = 4;
          let productP = 2;
         expiredG = greyD < 98;
         submitm += `${productP}`;
         greyD |= productP;
         break;
      }
          let componentK = 5.0;
         theme2 -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${componentK}`)), 4))}`);
          let downloaderp = String.fromCharCode(111,95,51,56,95,106,117,115,116,105,102,121,0);
          let interstitial_ = true;
          let checkbox_ = String.fromCharCode(107,95,51,51,95,112,121,116,104,111,110,0);
         theme2 += parseFloat(`${3}`);
         downloaderp += "3";
         interstitial_ = 38 == checkbox_.length;
         checkbox_ += `${1 + downloaderp.length}`;
      let configure8 = expiredG ? !expiredG : expiredG;
      do {
         expiredG = 36.28 > theme2 && descX;
         if (configure8) {
            break;
         }
      } while ((!descX) && configure8);
      if (!expiredG || !descX) {
          let playlistG = String.fromCharCode(115,95,49,48,95,100,101,97,108,108,111,99,97,116,101,0);
          let acceptedO = 2.0;
          let paginationO = String.fromCharCode(97,114,99,104,101,116,121,112,101,95,52,95,57,57,0);
          let baiduf = 1;
          let filled3 = String.fromCharCode(122,95,53,52,95,115,105,99,107,0);
         expiredG = !expiredG && 89.39 > theme2;
         playlistG += `${(String.fromCharCode(90,0) == playlistG ? playlistG.length : paginationO.length)}`;
         acceptedO *= parseFloat(`${parseInt(`${acceptedO}`) % 1}`);
         paginationO += `${parseInt(`${acceptedO}`)}`;
         baiduf ^= filled3.length;
         filled3 = `${playlistG.length | parseInt(`${acceptedO}`)}`;
      }
      let private_zq_ = 6968659.0 <= theme2;
      do {
         theme2 *= (parseFloat(`${(expiredG ? 2 : 4) & parseInt(`${aboutm}`)}`));
         if (private_zq_) {
            break;
         }
      } while (private_zq_ && (1.68 <= theme2 || (1.68 * theme2) <= 1.76));
      expandH = [(3 % (Math.max(2, (descX ? 4 : 1))))];
      break;
   }
   let nextQ = k_viewj <= 7830180;
   do {
      k_viewj &= unselectedW.size;
      if (nextQ) {
         break;
      }
   } while ((!Array.from(malaysiaM.keys()).includes(`${k_viewj}`)) && nextQ);
      component1 = 60 < nterstitial1.length || clearf < 79.61;
       let adultd = String.fromCharCode(121,95,56,53,95,118,101,114,115,105,111,110,0);
      while (adultd.length == adultd.length) {
          let const_18 = String.fromCharCode(104,95,55,50,95,117,112,118,112,0);
          let main_sv = String.fromCharCode(117,102,102,101,114,95,105,95,50,52,0);
          let confirmationb = String.fromCharCode(113,95,50,53,95,99,111,112,121,100,97,116,97,0);
          let statsw = 2;
         adultd = `${const_18.length}`;
         const_18 += `${main_sv.length % (Math.max(2, statsw))}`;
         main_sv += `${confirmationb.length}`;
         confirmationb += `${confirmationb.length}`;
         statsw ^= (main_sv == String.fromCharCode(66,0) ? main_sv.length : confirmationb.length);
         break;
      }
      if (3 < adultd.length && 3 < adultd.length) {
          let chatG = String.fromCharCode(112,97,108,108,101,116,101,95,50,95,55,0);
          let countryA: Map<any, any> = new Map([[String.fromCharCode(97,95,57,95,109,97,100,101,0),641], [String.fromCharCode(115,95,53,54,95,104,101,120,98,115,0),288], [String.fromCharCode(122,95,52,53,95,112,114,101,115,117,98,109,105,116,0),916]]);
          let successu: Array<any> = [969, 845, 697];
          let shootq = 1;
          let areaR = 3.0;
         adultd = `${successu.length + 1}`;
         chatG = `${parseInt(`${areaR}`)}`;
         countryA.set(`${chatG}`, countryA.size);
         successu.push(1 * shootq);
         shootq %= Math.max(chatG.length, 3);
         areaR -= parseFloat(`${shootq}`);
      }
          let customa: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,111,114,105,101,110,116,97,116,105,111,110,115,0),false ], [String.fromCharCode(98,95,49,48,95,115,111,114,116,101,100,0),false ]]);
          let confirmationM = String.fromCharCode(99,101,108,102,95,109,95,57,54,0);
          let signinupU: Array<any> = [601, 253, 671];
         adultd = `${(confirmationM == String.fromCharCode(84,0) ? confirmationM.length : adultd.length)}`;
         customa = new Map([[`${customa.size}`, 2 ^ customa.size]]);
         signinupU = [signinupU.length >> (Math.min(5, Math.abs(customa.size)))];
      sansx = [2];
   for (let k = 0; k < 2; k++) {
      component1 = 35.43 == clearf;
   }
   if (1.53 == (clearf / 4.88) && 1 == (parseInt(`${clearf}`) / (Math.max(megaphoneo.length, 2)))) {
       let combinedb = String.fromCharCode(112,97,110,101,115,95,109,95,49,52,0);
       let privilegeQ = 3.0;
       let contextm = String.fromCharCode(109,98,97,102,102,95,48,95,49,56,0);
      let closek = combinedb == String.fromCharCode(56,100,109,95,53,114,57,109,0);
      do {
         combinedb = `${combinedb.length}`;
         if (closek) {
            break;
         }
      } while (((privilegeQ - combinedb.length) < 1.47 || (parseInt(`${privilegeQ}`) - combinedb.length) < 2) && closek);
         combinedb += `${1 ^ parseInt(`${privilegeQ}`)}`;
      while (combinedb.includes(`${privilegeQ}`)) {
          let viewerm = 0.0;
         privilegeQ /= Math.max(3, parseInt(`${viewerm}`) | 1);
         break;
      }
          let tooltipss = 1;
          let collectionn = String.fromCharCode(120,95,51,56,95,112,111,112,112,101,100,0);
          let helperI = true;
         combinedb += `${(collectionn == String.fromCharCode(105,0) ? collectionn.length : (helperI ? 2 : 3))}`;
         tooltipss -= 3 ^ tooltipss;
         privilegeQ /= Math.max((contextm == String.fromCharCode(76,0) ? contextm.length : parseInt(`${privilegeQ}`)), 3);
      if (privilegeQ > 4.32) {
          let hooksx = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,119,95,52,52,0);
          let topicA = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,122,95,49,54,0);
          let fastp: Array<any> = [633, 176, 45];
         privilegeQ /= Math.max(3, 3 & combinedb.length);
         hooksx = `${topicA.length | hooksx.length}`;
         topicA += `${(topicA == String.fromCharCode(70,0) ? fastp.length : topicA.length)}`;
         fastp.push((topicA == String.fromCharCode(66,0) ? fastp.length : topicA.length));
      }
         privilegeQ -= parseInt(`${privilegeQ}`);
      while (1.40 == (4.16 / (Math.max(9, privilegeQ))) || 4 == (5 | combinedb.length)) {
         privilegeQ *= combinedb.length >> (Math.min(Math.abs(2), 2));
         break;
      }
      for (let i = 0; i < 1; i++) {
          let singaporeN = String.fromCharCode(98,101,122,101,108,95,108,95,51,54,0);
          let dangerb = false;
          let vignetteb = String.fromCharCode(112,105,112,101,108,111,115,115,95,107,95,54,50,0);
         combinedb = `${contextm.length ^ 3}`;
         singaporeN += `${singaporeN.length}`;
         dangerb = !dangerb;
         vignetteb += `${1 | vignetteb.length}`;
      }
      clearf -= 1 / (Math.max(k_viewj, 2));
   }
       let baidu1 = String.fromCharCode(101,95,57,57,95,109,105,103,114,97,116,101,0);
         baidu1 += `${baidu1.length}`;
      for (let v = 0; v < 3; v++) {
         baidu1 = `${baidu1.length - baidu1.length}`;
      }
         baidu1 = `${baidu1.length}`;
      k_viewj <<= Math.min(Math.abs(expandH.length ^ 3), 1);
   let largex = 9015566 <= megaphoneo.length;
   do {
      megaphoneo = [ewardedn.size / 2];
      if (largex) {
         break;
      }
   } while (((ewardedn.size << (Math.min(Math.abs(5), 2))) > 5) && largex);
   while (!component1) {
      expandH = [expandH.length];
      break;
   }
   let controlz = component1 ? !component1 : component1;
   do {
      component1 = (expandH.length - k_viewj) > 33;
      if (controlz) {
         break;
      }
   } while ((!component1) && controlz);

        setUsername(initialUsername);

       let searchj = String.fromCharCode(100,120,116,111,114,121,95,108,95,51,54,0);
      if (searchj == String.fromCharCode(55,0)) {
         searchj += `${(String.fromCharCode(86,0) == searchj ? searchj.length : searchj.length)}`;
      }
         searchj += `${2 + searchj.length}`;
         searchj = `${searchj.length}`;
      sansx = [1 << (Math.min(1, Math.abs(unselectedW.size)))];
   for (let z = 0; z < 3; z++) {
      clearf += (nterstitial1.length * (component1 ? 2 : 4));
   }
   for (let b = 0; b < 1; b++) {
      sansx.push(2);
   }
      sansx = [sansx.length ^ 2];
   let whatsappA = expandH.length >= 7371752;
   do {
      expandH.push(2 * parseInt(`${clearf}`));
      if (whatsappA) {
         break;
      }
   } while (whatsappA && ((k_viewj % (Math.max(7, expandH.length))) == 3 && 3 == (k_viewj % (Math.max(3, 8)))));
      megaphoneo = [unselectedW.size];
   let loginp = crossR.length <= 7472904;
   do {
      crossR = [expandH.length];
      if (loginp) {
         break;
      }
   } while (((crossR.length % (Math.max(2, 6))) <= 1 && (2 % (Math.max(2, crossR.length))) <= 4) && loginp);
       let combineU = String.fromCharCode(105,95,55,50,95,97,108,112,104,97,110,117,109,101,114,105,99,0);
       let targety = 1.0;
          let topicL = String.fromCharCode(115,95,52,51,95,100,116,100,102,0);
          let overlayo = 2;
         targety += parseFloat(`${2 | overlayo}`);
         topicL = `${topicL.length}`;
         overlayo <<= Math.min(Math.abs(topicL.length % 1), 1);
       let unselectedh = 4;
       let show8 = 3;
         combineU = `${show8 >> (Math.min(combineU.length, 1))}`;
      while ((unselectedh ^ 5) > 1 && 2 > (5 ^ unselectedh)) {
          let tooltipsv: Array<any> = [820, 828];
          let collectionnh: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,110,117,101,95,114,95,53,53,0),true ], [String.fromCharCode(106,105,103,103,108,101,95,121,95,56,55,0),false ]]);
          let clearo: Map<any, any> = new Map([[String.fromCharCode(118,95,53,52,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0),String.fromCharCode(112,105,99,107,105,110,103,95,97,95,54,52,0)], [String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,104,95,49,52,0),String.fromCharCode(101,110,99,114,121,112,116,105,110,103,95,104,95,52,0)], [String.fromCharCode(111,95,49,48,95,107,101,121,102,114,97,109,101,115,0),String.fromCharCode(105,110,118,105,115,105,98,108,101,95,52,95,55,0)]]);
          let sheet5: Map<any, any> = new Map([[String.fromCharCode(100,112,110,97,109,101,95,114,95,56,48,0),String.fromCharCode(121,95,52,49,95,117,112,108,111,97,100,0)], [String.fromCharCode(102,95,49,56,95,114,101,112,111,114,116,101,114,0),String.fromCharCode(109,101,109,111,106,105,95,97,95,52,57,0)]]);
         unselectedh |= parseInt(`${targety}`) * unselectedh;
         tooltipsv.push(tooltipsv.length << (Math.min(5, Math.abs(clearo.size))));
         collectionnh.set(`${clearo.size}`, clearo.size % (Math.max(collectionnh.size, 2)));
         sheet5 = new Map([[`${sheet5.size}`, 1 ^ sheet5.size]]);
         break;
      }
      for (let t = 0; t < 2; t++) {
          let more8 = String.fromCharCode(118,95,51,50,95,97,108,98,117,109,115,0);
          let sentryd = 2;
          let connectionT = 5;
          let macauQ = 2.0;
          let redirect8 = String.fromCharCode(102,105,116,95,53,95,52,54,0);
         combineU = "1 | show8";
         more8 += `${redirect8.length - parseInt(`${macauQ}`)}`;
         sentryd %= Math.max(sentryd, 2);
         connectionT *= (String.fromCharCode(109,0) == redirect8 ? more8.length : redirect8.length);
         macauQ *= parseFloat(`${1}`);
      }
      sansx.push(3 * parseInt(`${clearf}`));
      component1 = (k_viewj >> (Math.min(nterstitial1.length, 3))) <= 11;
   if (3 >= (1 << (Math.min(5, expandH.length))) || expandH.length >= 1) {
      component1 = megaphoneo.includes(component1);
   }
       let long_22y = 1.0;
         long_22y /= Math.max(2, parseFloat(`${parseInt(`${long_22y}`)}`));
         long_22y -= parseFloat(`${parseInt(`${long_22y}`) & parseInt(`${long_22y}`)}`);
          let telegramR = String.fromCharCode(117,110,100,111,95,113,95,51,48,0);
          let diceW: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,115,101,110,115,105,116,105,118,101,0),786], [String.fromCharCode(99,97,112,116,117,114,101,114,95,55,95,57,49,0),669]]);
          let robotoi = 0.0;
         long_22y *= parseFloat(`${diceW.size % (Math.max(1, 5))}`);
         telegramR += `${(telegramR == String.fromCharCode(105,0) ? parseInt(`${robotoi}`) : telegramR.length)}`;
         diceW = new Map([[`${robotoi}`, parseInt(`${robotoi}`) / (Math.max(2, 4))]]);
      expandH.push(ewardedn.size);
   let malaysiad = component1 ? !component1 : component1;
   do {
      component1 = (sansx.length + expandH.length) <= 63;
      if (malaysiad) {
         break;
      }
   } while (malaysiad && (component1));
   while (!nterstitial1.endsWith(`${unselectedW.size}`)) {
      nterstitial1 = `${ewardedn.size ^ 3}`;
      break;
   }
       let actionm = String.fromCharCode(114,95,54,56,95,100,105,115,97,108,108,111,119,0);
       let termsP = String.fromCharCode(103,95,56,54,95,100,101,113,117,101,117,101,0);
       let register_lJ: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,105,110,97,99,116,105,118,101,0),String.fromCharCode(99,95,55,57,95,114,101,118,101,114,116,0)], [String.fromCharCode(114,110,103,95,100,95,54,48,0),String.fromCharCode(112,97,115,115,102,95,50,95,54,51,0)], [String.fromCharCode(121,95,50,52,95,114,105,110,103,105,110,103,0),String.fromCharCode(100,95,55,50,95,109,111,110,116,104,0)]]);
       let largeY = 0.0;
         termsP += `${parseInt(`${largeY}`) * 2}`;
      let ajaxE = actionm == String.fromCharCode(95,102,115,105,121,102,54,48,0);
      do {
         actionm += `${1 | termsP.length}`;
         if (ajaxE) {
            break;
         }
      } while ((termsP == String.fromCharCode(88,0)) && ajaxE);
       let commentI = String.fromCharCode(117,108,116,114,97,119,105,100,101,95,116,95,56,54,0);
      for (let j = 0; j < 2; j++) {
          let searchbarA = String.fromCharCode(100,101,97,100,95,115,95,57,48,0);
          let leftC = 1.0;
          let downloader6 = String.fromCharCode(99,95,56,55,95,102,116,118,118,101,114,116,108,105,110,101,0);
          let private_7qt = String.fromCharCode(97,110,97,108,121,115,105,115,95,54,95,50,0);
          let analyticc = 3.0;
         termsP = `${private_7qt.length / 2}`;
         searchbarA = "2";
         leftC += parseFloat(`${3}`);
         downloader6 = `${searchbarA.length / (Math.max(6, parseInt(`${analyticc}`)))}`;
         private_7qt = `${searchbarA.length}`;
         analyticc += parseFloat(`${downloader6.length}`);
      }
      for (let o = 0; o < 1; o++) {
         largeY += termsP.length;
      }
      for (let n = 0; n < 2; n++) {
         largeY *= termsP.length;
      }
         largeY += actionm.length % 1;
      for (let q = 0; q < 3; q++) {
         actionm += `${termsP.length + parseInt(`${largeY}`)}`;
      }
      k_viewj /= Math.max(parseInt(`${clearf}`) | 3, 3);
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let moret = 5.0;
    let targetZ = 1.0;
    let unselectedL = String.fromCharCode(108,95,51,56,95,102,105,116,122,0);
    let smallg: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,112,111,115,101,95,50,95,49,57,0),29], [String.fromCharCode(116,95,51,53,95,101,98,109,108,110,117,109,0),667], [String.fromCharCode(109,112,101,103,97,117,100,105,111,95,116,95,51,48,0),851]]);
    let notification6: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,115,95,105,95,51,48,0),976], [String.fromCharCode(112,105,99,116,111,114,95,119,95,51,54,0),967], [String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,111,95,55,57,0),390]]);
    let macau8 = String.fromCharCode(116,95,51,56,95,115,116,114,112,116,105,109,101,0);
    let renewL = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,49,95,54,0);
    let googleW: Map<any, any> = new Map([[String.fromCharCode(100,98,105,115,95,103,95,49,48,48,0),551], [String.fromCharCode(116,104,117,109,98,95,116,95,55,53,0),156], [String.fromCharCode(121,99,111,99,103,114,103,98,97,95,101,95,49,51,0),86]]);
    let default_wuo: Array<any> = [String.fromCharCode(98,111,111,108,101,97,110,95,99,95,57,51,0), String.fromCharCode(112,95,52,48,95,100,105,114,101,99,116,100,0)];
    let action9 = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,97,95,49,51,0);
    let indicator0 = 1.0;
    let contextz = 1.0;
    let fillS: Array<any> = [274, 947];
    let sportH = true;
    let countdownR: Array<any> = [896, 606, 570];
    let blacklistT = String.fromCharCode(103,97,109,117,116,95,55,95,55,49,0);
    let scheduleb = 5.0;
    let hoverG: Array<any> = [706, 790, 190];
    let faviconW = false;
      targetZ *= 2;
   for (let w = 0; w < 2; w++) {
      action9 += `${2 ^ unselectedL.length}`;
   }
      targetZ += 3 + parseInt(`${targetZ}`);
   if ((contextz / (Math.max(parseFloat(`${renewL.length}`), 3))) > 5.11 || (contextz / 5.11) > 2.48) {
      contextz -= parseFloat(`${1}`);
   }
   if (1 <= (3 ^ default_wuo.length)) {
      targetZ -= 2 << (Math.min(4, default_wuo.length));
   }
      googleW.set(`${contextz}`, parseInt(`${contextz}`) * 2);
   for (let v = 0; v < 2; v++) {
      indicator0 -= parseFloat(`${macau8.length}`);
   }
      targetZ += (unselectedL == String.fromCharCode(50,0) ? unselectedL.length : googleW.size);
      smallg.set(`${unselectedL}`, 2);

        if (handleClose) handleClose();

   let indexe = renewL == String.fromCharCode(118,49,54,115,114,55,112,104,117,0);
   do {
      renewL += "2";
      if (indexe) {
         break;
      }
   } while (indexe && (1.39 >= indicator0));
      googleW.set(`${moret}`, parseInt(`${moret}`) - parseInt(`${targetZ}`));
      macau8 = "1";
   while ((2 + default_wuo.length) < 3) {
      default_wuo.push(2);
      break;
   }
   while (2.63 == (targetZ * notification6.size)) {
       let containerm = 2;
       let hoverR: Array<any> = [870, 723];
       let filedW = 2;
       let screenw = String.fromCharCode(107,95,49,52,95,114,105,110,103,105,110,103,0);
       let tick9 = 1.0;
          let hejiA = String.fromCharCode(116,111,103,103,108,105,110,103,95,56,95,57,57,0);
         filedW <<= Math.min(2, Math.abs(hoverR.length % 1));
         hejiA += `${hejiA.length}`;
       let showM = String.fromCharCode(115,95,53,54,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0);
       let blacklistf = String.fromCharCode(116,95,50,95,112,97,103,105,110,103,0);
      for (let m = 0; m < 3; m++) {
          let details1: Map<any, any> = new Map([[String.fromCharCode(119,95,52,52,95,112,101,101,107,0),265], [String.fromCharCode(112,111,115,116,112,111,110,101,100,95,109,95,52,54,0),68]]);
          let spinner5 = String.fromCharCode(110,95,49,51,95,106,99,104,117,102,102,0);
         hoverR = [3];
         details1 = new Map([[`${details1.size}`, (String.fromCharCode(120,0) == spinner5 ? spinner5.length : details1.size)]]);
      }
      for (let i = 0; i < 2; i++) {
          let borderlessV: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,50,95,49,48,0),539], [String.fromCharCode(106,95,55,95,109,105,108,108,101,114,0),685], [String.fromCharCode(119,95,48,95,97,112,112,0),668]]);
         blacklistf = `${screenw.length}`;
         borderlessV = new Map([[`${borderlessV.size}`, borderlessV.size]]);
      }
         showM = `${containerm}`;
      while (!screenw.includes(`${hoverR.length}`)) {
         screenw += `${blacklistf.length + containerm}`;
         break;
      }
       let textr = false;
       let resulti = true;
         screenw += `${blacklistf.length + 2}`;
         filedW |= screenw.length;
      let singaporeZ = containerm >= 9154471;
      do {
         containerm ^= parseInt(`${tick9}`) - 2;
         if (singaporeZ) {
            break;
         }
      } while (((hoverR.length * 2) == 2) && singaporeZ);
       let dangerZ: Array<any> = [45, 947];
      notification6.set(`${default_wuo.length}`, smallg.size & default_wuo.length);
      break;
   }
      fillS.push(action9.length);
      moret *= parseFloat(`${1 + countdownR.length}`);
      smallg.set(unselectedL, unselectedL.length * countdownR.length);
   if (3.4 <= indicator0) {
       let penaltyT = String.fromCharCode(101,95,51,54,95,99,105,112,104,101,114,98,121,110,105,100,0);
       let basketballJ = String.fromCharCode(97,99,116,105,118,97,116,101,95,108,95,49,48,48,0);
       let mailK = true;
       let windu = 0.0;
         windu -= parseFloat(`${basketballJ.length}`);
      let shootG = 5153631.0 <= windu;
      do {
          let closej = String.fromCharCode(112,97,115,115,98,95,50,95,56,55,0);
         windu *= (parseFloat(`${String.fromCharCode(80,0) == penaltyT ? penaltyT.length : basketballJ.length}`));
         closej = `${closej.length << (Math.min(closej.length, 4))}`;
         if (shootG) {
            break;
         }
      } while (shootG && ((windu * parseFloat(`${penaltyT.length}`)) > 5.38 || (3 * parseInt(`${windu}`)) > 2));
       let shirtt = 4;
         basketballJ += `${basketballJ.length}`;
         windu -= parseFloat(`${3}`);
         penaltyT += `${1 / (Math.max(3, penaltyT.length))}`;
         mailK = 33 < penaltyT.length;
         windu += parseFloat(`${shirtt}`);
         basketballJ += "2";
          let skipp = 1.0;
         penaltyT = `${parseInt(`${skipp}`)}`;
          let calendard = String.fromCharCode(98,95,54,57,95,115,97,108,116,115,0);
          let viewsy = String.fromCharCode(112,97,99,107,95,119,95,57,55,0);
         shirtt >>= Math.min(5, Math.abs(parseInt(`${windu}`)));
         calendard += `${calendard.length}`;
         viewsy = `${2 ^ calendard.length}`;
      if (!mailK || (3 * shirtt) >= 5) {
          let related7 = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,102,95,49,48,0);
          let xvodf: Array<any> = [728, 197];
         mailK = 63 <= basketballJ.length;
         related7 += `${2 | related7.length}`;
         xvodf = [xvodf.length];
      }
      indicator0 /= Math.max(4, parseFloat(`${2}`));
   }

        Keyboard.dismiss();

       let plusj = 5.0;
       let gpayO = String.fromCharCode(97,114,112,101,100,95,119,95,56,50,0);
       let ballf = String.fromCharCode(121,95,55,51,95,116,97,114,103,101,116,115,0);
         gpayO += `${gpayO.length}`;
          let policye = String.fromCharCode(120,95,54,50,95,97,110,105,109,97,108,115,0);
          let flyer9: Array<any> = [705, 431, 852];
          let productL: Map<any, any> = new Map([[String.fromCharCode(97,108,111,99,95,106,95,54,52,0),false ], [String.fromCharCode(115,101,116,116,101,114,95,99,95,54,50,0),false ], [String.fromCharCode(117,115,117,98,95,120,95,50,0),true ]]);
         gpayO = `${ballf.length + gpayO.length}`;
         policye = `${productL.size ^ policye.length}`;
         flyer9 = [flyer9.length - policye.length];
         productL.set(`${flyer9.length}`, productL.size * 3);
      if (4.9 <= (gpayO.length + plusj) && 5.24 <= (4.9 + plusj)) {
         gpayO += `${(ballf == String.fromCharCode(57,0) ? ballf.length : parseInt(`${plusj}`))}`;
      }
         gpayO = "2";
      for (let x = 0; x < 1; x++) {
         plusj -= gpayO.length % 1;
      }
      for (let y = 0; y < 1; y++) {
          let downloaded0 = 2;
         plusj *= gpayO.length;
         downloaded0 <<= Math.min(3, Math.abs(downloaded0));
      }
         plusj += gpayO.length;
         plusj -= gpayO.length;
      let typesC = plusj >= 6823514.0;
      do {
         plusj /= Math.max(5, parseInt(`${plusj}`) + 2);
         if (typesC) {
            break;
         }
      } while (((plusj / 5.10) > 5.8 || (1 * ballf.length) > 1) && typesC);
      targetZ += 2 & parseInt(`${plusj}`);
   while ((blacklistT.length + parseInt(`${scheduleb}`)) <= 3) {
      blacklistT = `${parseInt(`${contextz}`) * 2}`;
      break;
   }
   for (let f = 0; f < 3; f++) {
      indicator0 += parseFloat(`${3}`);
   }
   if (macau8.endsWith(`${scheduleb}`)) {
       let routerZ = 1;
       let indicatorS = String.fromCharCode(116,119,111,115,99,97,108,101,95,104,95,53,53,0);
      let live6 = routerZ <= 5747081;
      do {
         routerZ &= routerZ + 1;
         if (live6) {
            break;
         }
      } while ((4 >= (1 | indicatorS.length)) && live6);
      if (indicatorS.length <= routerZ) {
          let ballY = 3.0;
          let filedX: Array<any> = [474, 266, 782];
          let moreG = String.fromCharCode(109,105,110,102,95,102,95,53,53,0);
          let awayH: Map<any, any> = new Map([[String.fromCharCode(114,95,56,49,95,114,103,98,110,0),String.fromCharCode(99,97,116,99,104,105,110,103,95,105,95,53,50,0)], [String.fromCharCode(122,95,50,50,95,99,111,108,108,105,100,105,110,103,0),String.fromCharCode(117,110,101,115,99,97,112,101,95,113,95,50,0)]]);
         routerZ += indicatorS.length;
         ballY *= filedX.length / 2;
         filedX.push(parseInt(`${ballY}`) * 3);
         moreG = "3";
         awayH = new Map([[`${filedX.length}`, filedX.length ^ 1]]);
      }
         indicatorS += `${routerZ}`;
         routerZ %= Math.max(routerZ ^ indicatorS.length, 5);
      let injuryG = String.fromCharCode(107,120,100,48,106,117,116,0) == indicatorS;
      do {
          let subsL = 1;
          let sortr = String.fromCharCode(104,97,108,102,102,108,111,97,116,95,110,95,53,50,0);
          let playlistO = 1;
         indicatorS = "2";
         subsL ^= subsL / 3;
         sortr += `${subsL}`;
         playlistO ^= 1;
         if (injuryG) {
            break;
         }
      } while (injuryG && (routerZ == indicatorS.length));
       let assist7 = 5.0;
       let grayk = 1.0;
      scheduleb /= Math.max(countdownR.length, 1);
   }
   for (let s = 0; s < 2; s++) {
      targetZ *= 1;
   }
   while ((smallg.size & default_wuo.length) < 1) {
      smallg.set(`${indicator0}`, countdownR.length);
      break;
   }
   for (let j = 0; j < 2; j++) {
      fillS = [(parseInt(`${targetZ}`) - (sportH ? 3 : 4))];
   }
       let routerR = String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,95,99,95,51,51,0);
       let nterstitial3 = 0;
       let navigation2 = 4.0;
      for (let m = 0; m < 1; m++) {
         nterstitial3 %= Math.max(3, 1);
      }
      if (4 <= (nterstitial3 >> (Math.min(Math.abs(2), 2)))) {
         nterstitial3 >>= Math.min(4, routerR.length);
      }
      let resend3 = 9312245 <= nterstitial3;
      do {
          let rnewsP = String.fromCharCode(116,111,111,108,98,97,114,95,57,95,55,55,0);
          let anytime8 = 0.0;
          let becomey = String.fromCharCode(99,104,101,99,107,115,117,109,115,95,116,95,49,48,0);
          let orangeQ = String.fromCharCode(105,109,105,116,97,116,101,95,121,95,51,0);
          let sportsm = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,56,95,57,52,0);
         nterstitial3 ^= sportsm.length;
         rnewsP = "1";
         anytime8 -= parseFloat(`${parseInt(`${anytime8}`) / 3}`);
         becomey += `${rnewsP.length - parseInt(`${anytime8}`)}`;
         orangeQ = `${(String.fromCharCode(110,0) == orangeQ ? parseInt(`${anytime8}`) : orangeQ.length)}`;
         sportsm = `${orangeQ.length}`;
         if (resend3) {
            break;
         }
      } while (resend3 && (2.41 > (nterstitial3 * navigation2)));
         nterstitial3 &= nterstitial3 << (Math.min(3, Math.abs(2)));
      let currentX = navigation2 <= 8882136.0;
      do {
         navigation2 /= Math.max(parseFloat(`${routerR.length + 2}`), 4);
         if (currentX) {
            break;
         }
      } while (((4 + routerR.length) <= 4 || 4 <= (routerR.length + parseInt(`${navigation2}`))) && currentX);
      for (let h = 0; h < 3; h++) {
         nterstitial3 ^= parseInt(`${navigation2}`) - 3;
      }
      for (let h = 0; h < 1; h++) {
         nterstitial3 &= parseInt(`${navigation2}`);
      }
         navigation2 -= parseFloat(`${routerR.length << (Math.min(2, Math.abs(nterstitial3)))}`);
         routerR = `${parseInt(`${navigation2}`) | routerR.length}`;
      scheduleb -= parseInt(`${navigation2}`);
   for (let y = 0; y < 3; y++) {
      moret -= parseFloat(`${unselectedL.length}`);
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let currenty = 0.0;
    let gpayL = 3;
    let acopy_wwZ = 0;
    let with_2sv: Array<any> = [917, 948];
    let selectedY: Array<any> = [772, 416, 966];
    let container4 = 1.0;
    let matchesv: Map<any, any> = new Map([[String.fromCharCode(102,105,120,95,115,95,53,49,0),284], [String.fromCharCode(108,95,51,53,95,97,116,116,114,0),449], [String.fromCharCode(100,95,49,49,95,109,117,108,116,120,109,117,108,116,0),443]]);
    let entryh = String.fromCharCode(118,95,50,53,95,99,104,101,118,114,111,110,0);
    let componentr = false;
    let anytimeX = String.fromCharCode(99,95,53,49,95,117,110,98,108,117,114,0);
    let schedulen = String.fromCharCode(122,95,49,56,95,108,101,114,116,0);
    let combined3 = 1.0;
   let update_8w0 = String.fromCharCode(114,101,104,0) == schedulen;
   do {
      schedulen += `${entryh.length % 1}`;
      if (update_8w0) {
         break;
      }
   } while ((schedulen.endsWith(`${componentr}`)) && update_8w0);
   while ((matchesv.size | with_2sv.length) == 4) {
       let container7 = 4.0;
       let statsX = true;
         statsX = container7 > 35.68;
         statsX = !statsX && container7 == 66.74;
      matchesv = new Map([[`${selectedY.length}`, ((componentr ? 3 : 2) / (Math.max(selectedY.length, 7)))]]);
      break;
   }

        if (usernameErrMsg !== null) return;

   let main_cR = 7177750 >= entryh.length;
   do {
       let twitteru = 1.0;
       let n_positionY = String.fromCharCode(99,119,110,100,95,118,95,52,49,0);
       let untickZ: Map<any, any> = new Map([[String.fromCharCode(107,95,52,48,95,99,114,111,115,115,102,97,100,105,110,103,0),false ], [String.fromCharCode(119,105,110,116,104,114,101,97,100,95,97,95,53,57,0),true ]]);
       let bingk = String.fromCharCode(114,95,48,95,112,104,97,115,101,0);
       let watchD = 5;
         bingk = `${bingk.length * 1}`;
      let country8 = untickZ.size <= 6448915;
      do {
         untickZ = new Map([[`${watchD}`, 2 - parseInt(`${twitteru}`)]]);
         if (country8) {
            break;
         }
      } while (country8 && (1 > (untickZ.size - 3)));
         n_positionY += `${n_positionY.length}`;
         untickZ = new Map([[n_positionY, n_positionY.length / (Math.max(3, 6))]]);
      for (let k = 0; k < 3; k++) {
         n_positionY += `${n_positionY.length * bingk.length}`;
      }
         bingk += `${bingk.length}`;
          let stylen = String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,49,95,56,55,0);
         watchD |= untickZ.size;
         stylen = `${stylen.length * stylen.length}`;
       let l_imageB = String.fromCharCode(111,95,57,95,116,114,117,101,104,100,0);
       let time_vJ = String.fromCharCode(99,99,105,116,116,95,49,95,54,56,0);
      if (2 >= n_positionY.length) {
         time_vJ += `${parseInt(`${twitteru}`) % (Math.max(3, 4))}`;
      }
          let robotoz = String.fromCharCode(99,111,110,116,111,117,114,115,95,99,95,52,48,0);
         untickZ.set(time_vJ, time_vJ.length);
         robotoz += `${(robotoz == String.fromCharCode(108,0) ? robotoz.length : robotoz.length)}`;
      for (let x = 0; x < 3; x++) {
         bingk += `${watchD / (Math.max(time_vJ.length, 1))}`;
      }
         l_imageB = `${(String.fromCharCode(56,0) == time_vJ ? time_vJ.length : l_imageB.length)}`;
      for (let n = 0; n < 3; n++) {
          let playlistZ = String.fromCharCode(116,100,108,116,95,49,95,56,49,0);
          let tickedd = String.fromCharCode(102,97,117,99,101,116,115,95,102,95,55,0);
          let minivodo = String.fromCharCode(116,101,108,101,112,104,111,110,121,95,50,95,51,56,0);
         bingk += "2";
         playlistZ += `${tickedd.length >> (Math.min(2, minivodo.length))}`;
         tickedd += `${playlistZ.length / 1}`;
         minivodo += "3";
      }
      for (let i = 0; i < 2; i++) {
          let downloaded3 = String.fromCharCode(97,115,115,111,99,105,97,116,101,95,49,95,54,54,0);
          let watchB = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,97,95,55,52,0);
          let sliderA = 0;
         untickZ = new Map([[watchB, watchB.length % (Math.max(2, 6))]]);
         downloaded3 += `${3 << (Math.min(3, downloaded3.length))}`;
         sliderA -= 1 - downloaded3.length;
      }
         time_vJ += `${(String.fromCharCode(86,0) == l_imageB ? untickZ.size : l_imageB.length)}`;
      entryh += "2";
      if (main_cR) {
         break;
      }
   } while (main_cR && (entryh.length >= 3));
       let halfl = 0;
       let anytimee = 3.0;
         halfl += 2 % (Math.max(4, halfl));
          let changeP = String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,112,95,51,51,0);
          let modelO: Array<any> = [241, 962];
         anytimee -= parseFloat(`${1}`);
         changeP = `${changeP.length}`;
         modelO = [2];
      for (let k = 0; k < 3; k++) {
          let renew6: Array<any> = [344, 450, 401];
         halfl += halfl;
         renew6.push(3);
      }
         halfl |= halfl & 1;
      if (halfl < anytimee) {
         anytimee /= Math.max(1, parseFloat(`${halfl}`));
      }
         anytimee += parseFloat(`${parseInt(`${anytimee}`)}`);
      gpayL <<= Math.min(Math.abs(parseInt(`${currenty}`)), 5);

        if (isSubmitting) return;

   let lessd = acopy_wwZ >= 7233338;
   do {
      acopy_wwZ -= matchesv.size;
      if (lessd) {
         break;
      }
   } while (lessd && (!componentr));
      acopy_wwZ /= Math.max(matchesv.size | 3, 4);
        setSubmitting(true);

   let fillc = entryh.length >= 8628715;
   do {
      entryh += `${parseInt(`${currenty}`) / (Math.max(2, 2))}`;
      if (fillc) {
         break;
      }
   } while ((gpayL <= 3) && fillc);
   while (componentr) {
      componentr = String.fromCharCode(86,0) == anytimeX;
      break;
   }

        try {

      componentr = selectedY.includes(componentr);
      currenty *= parseFloat(`${gpayL}`);
            await THFirebase.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      componentr = 78 == (container4 - gpayL);
   if (schedulen.length == 3 && entryh == String.fromCharCode(102,0)) {
      entryh = `${matchesv.size}`;
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   while (!componentr && schedulen.length == 5) {
      componentr = selectedY.length >= 84;
      break;
   }
      container4 += anytimeX.length << (Math.min(1, Math.abs(matchesv.size)));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

      anytimeX += `${(String.fromCharCode(76,0) == entryh ? with_2sv.length : entryh.length)}`;
       let championK = 2.0;
       let shrinkL = String.fromCharCode(107,95,52,53,95,112,111,105,110,116,111,99,116,0);
      while (shrinkL.length > championK) {
         shrinkL = `${parseInt(`${championK}`) ^ shrinkL.length}`;
         break;
      }
         championK /= Math.max((String.fromCharCode(117,0) == shrinkL ? shrinkL.length : parseInt(`${championK}`)), 2);
      for (let t = 0; t < 2; t++) {
         championK *= parseInt(`${championK}`);
      }
      let description_0qS = shrinkL.length <= 6021207;
      do {
          let bottomq = String.fromCharCode(121,95,51,52,95,101,120,112,97,110,115,105,111,110,0);
          let selectede = true;
          let blackliste = String.fromCharCode(113,95,49,57,95,101,110,99,97,112,115,117,108,97,116,101,100,0);
          let fillj: Map<any, any> = new Map([[String.fromCharCode(110,95,52,50,95,109,112,101,103,112,105,99,116,117,114,101,0),576], [String.fromCharCode(115,111,99,111,110,110,101,99,116,95,121,95,56,52,0),3], [String.fromCharCode(109,97,116,105,99,95,48,95,49,52,0),717]]);
          let viewerD = 4.0;
         shrinkL += `${blackliste.length * parseInt(`${championK}`)}`;
         bottomq = `${1 << (Math.min(4, Math.abs(parseInt(`${viewerD}`))))}`;
         selectede = !selectede;
         blackliste += "3";
         fillj = new Map([[`${selectede}`, ((selectede ? 1 : 2) & 1)]]);
         viewerD += (parseFloat(`${(selectede ? 2 : 3) << (Math.min(Math.abs(parseInt(`${viewerD}`)), 4))}`));
         if (description_0qS) {
            break;
         }
      } while ((4.21 == (championK * 4.29)) && description_0qS);
      while (shrinkL.length == 3) {
          let malaysiaO = String.fromCharCode(114,101,99,104,101,99,107,95,101,95,56,55,0);
          let verticalQ = String.fromCharCode(122,95,56,56,95,118,114,101,112,0);
          let logoA = String.fromCharCode(101,95,55,53,95,97,118,105,115,121,110,116,104,0);
          let memberG = String.fromCharCode(105,110,111,117,116,95,108,95,53,57,0);
         championK *= shrinkL.length;
         malaysiaO += `${malaysiaO.length << (Math.min(verticalQ.length, 1))}`;
         verticalQ = `${verticalQ.length}`;
         logoA += `${memberG.length & logoA.length}`;
         memberG += `${malaysiaO.length << (Math.min(Math.abs(3), 1))}`;
         break;
      }
      if (!shrinkL.includes(`${championK}`)) {
         championK += shrinkL.length;
      }
      container4 /= Math.max(4, 1 & acopy_wwZ);
            return;
        }


        dispatch(updateUsernameState(username));

      schedulen += `${matchesv.size / 3}`;
      componentr = 37 < (acopy_wwZ / (Math.max(currenty, 5)));
        dispatch(changeScreenAction("修改成功"));

       let x_centerM = 3.0;
      while (x_centerM <= 4.18) {
          let layout7 = String.fromCharCode(104,95,55,49,95,116,101,110,115,105,111,110,0);
         x_centerM /= Math.max(3, 2);
         layout7 = `${1 | layout7.length}`;
         break;
      }
       let commonm = true;
      if (x_centerM <= 2.36) {
         commonm = 60.77 >= x_centerM;
      }
      entryh = `${selectedY.length}`;
      anytimeX = "1";

        if (onSubmitSuccess) onSubmitSuccess(username);

       let incidenta = true;
      while (incidenta) {
         incidenta = (incidenta ? !incidenta : !incidenta);
         break;
      }
      while (!incidenta || incidenta) {
          let searchV = 0;
          let internetA = 3;
          let thumbnailS: Map<any, any> = new Map([[String.fromCharCode(98,101,122,101,108,95,52,95,50,56,0),String.fromCharCode(102,97,116,97,108,95,102,95,50,56,0)], [String.fromCharCode(109,95,52,53,95,102,111,110,116,99,111,110,102,105,103,0),String.fromCharCode(115,116,97,116,115,95,56,95,52,52,0)]]);
          let livel = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,113,95,52,55,0);
         incidenta = 16 < searchV || !incidenta;
         searchV |= thumbnailS.size ^ internetA;
         internetA ^= internetA + thumbnailS.size;
         livel = `${thumbnailS.size}`;
         break;
      }
      if (!incidenta && incidenta) {
         incidenta = !incidenta && !incidenta;
      }
      container4 *= ((incidenta ? 2 : 1) >> (Math.min(schedulen.length, 1)));
   let modek = 8978449 <= with_2sv.length;
   do {
      with_2sv = [parseInt(`${container4}`) << (Math.min(3, Math.abs(1)))];
      if (modek) {
         break;
      }
   } while (((with_2sv.length + 3) <= 1 && 4.86 <= (3.55 * container4)) && modek);

        Keyboard.dismiss();

   while (1.10 == (container4 * 5.37) && 5.81 == (5.37 * container4)) {
      anytimeX += `${with_2sv.length}`;
      break;
   }
   let list4 = 5001785 <= schedulen.length;
   do {
      schedulen = `${(anytimeX == String.fromCharCode(85,0) ? schedulen.length : anytimeX.length)}`;
      if (list4) {
         break;
      }
   } while (((matchesv.size + schedulen.length) <= 5 && 2 <= (5 + schedulen.length)) && list4);
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (componentr && 4 < (2 << (Math.min(1, selectedY.length)))) {
      componentr = currenty >= 78.74 || 92 >= anytimeX.length;
      break;
   }
   if (4 == (gpayL - acopy_wwZ) || (4 - gpayL) == 2) {
      acopy_wwZ ^= with_2sv.length + 3;
   }

        setSubmitting(false);
    }

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onClose}
            isLoading={isSubmitting}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity onPress={onSubmitForm}>
                    <Text style={textVariants.body}>
                        保存
                    </Text>
                </TouchableOpacity>
            </View>
            <CTextInput
                value={username}
                onChangeText={onUsernameChange}
                placeholder="输入昵称"
                showErrorStyle={usernameErrMsg !== null}
            />

            <View
                style={{
                    ...styles.dangerWrap,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingRight: 40,
                    }}
                >
                    {usernameErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/appleStringTopic.png")}
                            />

                            <Text style={styles.danger}>{usernameErrMsg}</Text>
                        </>
                    )}
                </View>

                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 15,
                        color: "#9C9C9C",
                        paddingRight: 10,
                    }}
                >
                    {username?.replace(/\s+/g, "").length}/18
                </Text>
            </View>
        </CBottomSheet>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dangerWrap: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    danger: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "left",
        color: "#FF3434",
    },
});