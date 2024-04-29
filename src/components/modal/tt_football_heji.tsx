import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks/tt_spec_download";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/tt_copy_heji";
import { updateUsernameState } from "@redux/actions/tt_topon";
import SpinnerOverlay from "./tt_mode_core";
import { ttTramini } from "@api";


interface ttSmall {
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
}: ttSmall) => {
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
       let placementl = false;
    let forwardP: Map<any, any> = new Map([[String.fromCharCode(112,114,101,108,111,97,100,101,100,95,118,95,57,0),720], [String.fromCharCode(115,95,57,57,95,99,104,101,99,107,112,111,105,110,116,0),164], [String.fromCharCode(98,95,52,53,95,115,104,97,108,108,0),444]]);
    let aboutt = 5.0;
    let analyticR = true;
    let holderU = String.fromCharCode(115,97,109,112,95,120,95,54,54,0);
    let zhengpianz = String.fromCharCode(104,95,53,95,114,101,115,117,108,116,105,110,103,0);
    let roomq = false;
    let mbjscommony: Array<any> = [43, 665];
    let mbsplashq = 5.0;
    let country9 = String.fromCharCode(115,116,114,102,116,105,109,101,95,102,95,53,52,0);
    let vietnam1 = 2.0;
    let entryu = 4.0;
    let detailso = false;
    let nalyticst = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,119,95,57,57,0);
      analyticR = !zhengpianz.endsWith(`${placementl}`);
      roomq = 38 >= holderU.length || country9 == String.fromCharCode(107,0);
      analyticR = roomq || 83.72 == aboutt;
      forwardP = new Map([[`${placementl}`, zhengpianz.length]]);
       let sans_: Array<any> = [747, 228];
       let chinae = 3.0;
       let awayr = String.fromCharCode(105,95,52,48,95,108,105,109,105,116,115,0);
      for (let o = 0; o < 1; o++) {
         chinae -= sans_.length;
      }
      for (let c = 0; c < 3; c++) {
         sans_ = [2];
      }
      if (5 < (4 >> (Math.min(2, awayr.length)))) {
          let z_centerW = String.fromCharCode(111,95,49,48,48,95,117,110,102,108,97,116,116,101,110,101,100,0);
         awayr += `${parseInt(`${chinae}`)}`;
         z_centerW += `${z_centerW.length % (Math.max(7, z_centerW.length))}`;
      }
      for (let n = 0; n < 3; n++) {
         chinae += 2 * sans_.length;
      }
         sans_ = [2];
      let sliderV = 8992208.0 >= chinae;
      do {
         chinae += sans_.length;
         if (sliderV) {
            break;
         }
      } while (sliderV && (!sans_.includes(chinae)));
         chinae *= (awayr == String.fromCharCode(118,0) ? awayr.length : sans_.length);
      if (5.20 >= (chinae / 2.69)) {
         chinae /= Math.max(1, sans_.length);
      }
      while (!awayr.startsWith(`${sans_.length}`)) {
         sans_.push((awayr == String.fromCharCode(51,0) ? parseInt(`${chinae}`) : awayr.length));
         break;
      }
      aboutt -= parseFloat(`${2 | mbjscommony.length}`);
      placementl = holderU.length == 21 || forwardP.size == 21;
       let promotion6 = 5.0;
       let typesG: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,102,111,114,98,105,100,100,101,110,0),149], [String.fromCharCode(104,101,120,98,110,95,116,95,50,50,0),213], [String.fromCharCode(114,97,110,115,112,111,114,116,95,107,95,52,56,0),844]]);
      for (let y = 0; y < 3; y++) {
          let g_imager = 5;
          let condensed5 = String.fromCharCode(111,95,54,51,95,105,109,109,101,100,105,97,116,101,108,121,0);
          let chartb = 1.0;
          let fullZ = 2.0;
         promotion6 /= Math.max(2, 4);
         g_imager |= 2 / (Math.max(g_imager, 10));
         condensed5 += `${g_imager / (Math.max(2, condensed5.length))}`;
         chartb += parseFloat(`${parseInt(`${chartb}`) / (Math.max(condensed5.length, 9))}`);
         fullZ += parseFloat(`${condensed5.length * 3}`);
      }
      for (let q = 0; q < 3; q++) {
         typesG.set(`${promotion6}`, 1 | parseInt(`${promotion6}`));
      }
      if ((3.99 * promotion6) == 3.70 && (typesG.size << (Math.min(Math.abs(4), 2))) == 5) {
         promotion6 /= Math.max(typesG.size % 2, 1);
      }
          let klevinJ = String.fromCharCode(114,101,97,114,114,97,110,103,101,95,97,95,55,51,0);
          let renewS: Array<any> = [56, 109, 53];
          let mathp: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,119,114,97,112,100,101,116,101,99,116,0),167], [String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,52,95,51,0),862]]);
         promotion6 -= 2 << (Math.min(2, Math.abs(typesG.size)));
         klevinJ += `${2 - renewS.length}`;
         renewS.push(2);
         mathp.set(klevinJ, klevinJ.length);
       let resendn = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,104,95,51,56,0);
      for (let v = 0; v < 3; v++) {
         typesG.set(`${promotion6}`, typesG.size);
      }
      mbjscommony.push((mbjscommony.length >> (Math.min(4, Math.abs((roomq ? 4 : 4))))));
   while ((aboutt / (Math.max(5.45, 8))) == 2.93) {
       let indicators = 5.0;
       let switch_b7 = false;
       let main_g0: Map<any, any> = new Map([[String.fromCharCode(102,95,53,48,95,101,120,112,108,105,99,105,116,101,108,121,0),true ], [String.fromCharCode(103,105,103,97,103,114,111,117,112,95,106,95,53,50,0),false ]]);
       let reactu = String.fromCharCode(115,101,114,105,97,108,105,122,101,95,48,95,55,56,0);
       let combine9: Array<any> = [717, 868];
      while (!switch_b7) {
          let windd = String.fromCharCode(115,117,98,99,111,101,102,115,95,100,95,52,49,0);
          let stationsH = String.fromCharCode(97,114,116,105,99,108,101,95,113,95,54,48,0);
          let relatedO: Array<any> = [String.fromCharCode(111,105,100,95,110,95,52,51,0), String.fromCharCode(121,95,55,95,100,101,99,111,109,112,111,115,101,105,0), String.fromCharCode(97,97,99,112,115,100,115,112,95,122,95,50,52,0)];
          let suggestionq = String.fromCharCode(110,95,50,51,95,109,97,110,97,103,101,100,0);
         switch_b7 = !switch_b7 || windd.length >= 34;
         windd = "2";
         stationsH += "1";
         relatedO.push(stationsH.length);
         suggestionq += `${stationsH.length ^ relatedO.length}`;
         break;
      }
      while (main_g0.get(`${combine9.length}`) != null) {
         combine9.push(reactu.length & combine9.length);
         break;
      }
          let roomz = String.fromCharCode(114,100,109,117,108,116,95,54,95,56,53,0);
         reactu += `${3 & reactu.length}`;
         roomz = `${roomz.length / (Math.max(2, 5))}`;
      while (combine9.length == indicators) {
         combine9.push(3 * combine9.length);
         break;
      }
          let full3: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,101,95,49,50,0),221], [String.fromCharCode(122,95,55,57,95,118,105,122,105,101,114,0),243]]);
          let statsa = false;
          let single5 = 0.0;
         indicators /= Math.max(1, reactu.length);
         full3.set(`${statsa}`, 2 ^ full3.size);
         single5 *= parseFloat(`${parseInt(`${single5}`) - 3}`);
         combine9 = [reactu.length];
      for (let s = 0; s < 1; s++) {
          let backc = String.fromCharCode(98,117,115,121,95,57,95,54,54,0);
          let styleF = String.fromCharCode(117,95,55,57,95,114,101,102,101,114,101,110,99,101,100,0);
          let hejiZ = String.fromCharCode(103,95,56,95,99,111,110,116,114,97,99,116,0);
          let searchbarU = String.fromCharCode(99,95,51,52,95,114,101,109,105,120,0);
         switch_b7 = !switch_b7;
         backc = "2";
         styleF = `${2 + styleF.length}`;
         hejiZ += `${backc.length | 2}`;
         searchbarU += `${1 >> (Math.min(2, hejiZ.length))}`;
      }
         main_g0 = new Map([[`${main_g0.size}`, main_g0.size]]);
      for (let g = 0; g < 2; g++) {
         reactu += `${2 - parseInt(`${indicators}`)}`;
      }
         indicators += main_g0.size + 2;
      while ((3 << (Math.min(5, Math.abs(main_g0.size)))) <= 3 || 4 <= (3 << (Math.min(2, Math.abs(main_g0.size))))) {
         main_g0.set(`${switch_b7}`, 2 & combine9.length);
         break;
      }
      let basketballN = 9173742 <= combine9.length;
      do {
         combine9.push(3);
         if (basketballN) {
            break;
         }
      } while ((switch_b7) && basketballN);
      if (3 == (1 >> (Math.min(4, combine9.length))) && switch_b7) {
         switch_b7 = reactu.endsWith(`${indicators}`);
      }
         switch_b7 = reactu.length <= 5;
      let updateso = switch_b7 ? !switch_b7 : switch_b7;
      do {
         switch_b7 = reactu.length >= combine9.length;
         if (updateso) {
            break;
         }
      } while (updateso && (!switch_b7));
      aboutt += parseFloat(`${parseInt(`${indicators}`) | holderU.length}`);
      break;
   }
      mbjscommony = [mbjscommony.length | parseInt(`${mbsplashq}`)];
   if (analyticR) {
       let carouselU = 4;
       let arean = String.fromCharCode(118,95,56,49,95,100,101,99,111,109,112,111,115,101,0);
      while ((arean.length + 3) >= 2) {
         arean += `${3 * arean.length}`;
         break;
      }
         carouselU -= 2;
       let assisty: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,97,95,55,49,0),383], [String.fromCharCode(115,95,54,49,95,115,109,105,120,0),785]]);
          let cornerG = 5.0;
          let gesturesW: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,115,117,98,115,97,109,112,108,105,110,103,0),true ], [String.fromCharCode(101,103,119,105,116,95,119,95,53,50,0),false ]]);
         arean += `${parseInt(`${cornerG}`)}`;
         cornerG += gesturesW.size * gesturesW.size;
         assisty.set(`${carouselU}`, arean.length);
      while (arean.includes(`${assisty.size}`)) {
         arean += `${assisty.size % 2}`;
         break;
      }
      analyticR = parseFloat(`${carouselU}`) < mbsplashq;
   }
   let referrerQ = String.fromCharCode(115,112,120,49,51,106,49,110,114,99,0) == zhengpianz;
   do {
       let ping4: Map<any, any> = new Map([[String.fromCharCode(100,116,109,102,95,53,95,56,53,0),388], [String.fromCharCode(122,95,57,53,95,116,114,116,97,98,108,101,0),137], [String.fromCharCode(117,95,49,48,48,95,104,101,105,103,104,116,0),360]]);
       let dragZ = 0.0;
         ping4.set(`${dragZ}`, 2);
      let colorsi = dragZ >= 6421231.0;
      do {
         dragZ /= Math.max(parseFloat(`${1 + parseInt(`${dragZ}`)}`), 4);
         if (colorsi) {
            break;
         }
      } while (colorsi && (ping4.get(`${dragZ}`) == null));
      while (Array.from(ping4.values()).includes(dragZ)) {
          let fastQ = 5;
          let target3 = String.fromCharCode(109,105,120,105,110,115,95,106,95,56,53,0);
          let storeU = 2.0;
          let unselectedi: Map<any, any> = new Map([[String.fromCharCode(108,95,50,56,95,105,100,101,110,116,105,99,97,108,0),true ], [String.fromCharCode(101,95,56,95,117,110,109,97,116,99,104,101,100,0),true ]]);
          let telegramY = String.fromCharCode(108,95,52,51,95,98,105,116,100,101,112,116,104,0);
         ping4.set(`${ping4.size}`, 1 - ping4.size);
         fastQ <<= Math.min(Math.abs(target3.length & 3), 4);
         target3 = `${(telegramY == String.fromCharCode(81,0) ? unselectedi.size : telegramY.length)}`;
         storeU += (parseFloat(`${target3 == String.fromCharCode(82,0) ? target3.length : telegramY.length}`));
         unselectedi.set(`${telegramY}`, unselectedi.size | 3);
         break;
      }
      let flyerK = 9730027 <= ping4.size;
      do {
         ping4.set(`${dragZ}`, parseInt(`${dragZ}`) % (Math.max(2, 8)));
         if (flyerK) {
            break;
         }
      } while (((ping4.size & 1) > 4 && 5.40 > (2.47 + dragZ)) && flyerK);
      for (let a = 0; a < 1; a++) {
         ping4.set(`${dragZ}`, 3);
      }
      for (let c = 0; c < 3; c++) {
          let overG = 1.0;
          let become5 = 0;
          let bottom2 = 5.0;
          let appleJ = 1.0;
          let kicky = String.fromCharCode(119,95,52,52,95,100,105,115,112,0);
         ping4 = new Map([[kicky, 2]]);
         overG += parseFloat(`${parseInt(`${appleJ}`)}`);
         become5 &= 3 % (Math.max(5, parseInt(`${appleJ}`)));
         bottom2 += parseInt(`${bottom2}`);
         kicky = `${become5}`;
      }
      zhengpianz = `${parseInt(`${aboutt}`)}`;
      if (referrerQ) {
         break;
      }
   } while ((zhengpianz.length > 1 && !placementl) && referrerQ);
   let disconnectedW = vietnam1 <= 6909162.0;
   do {
       let loadingm: Map<any, any> = new Map([[String.fromCharCode(118,105,98,114,97,110,99,101,95,112,95,51,48,0),225], [String.fromCharCode(117,95,51,95,111,102,102,108,111,97,100,0),367], [String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,54,95,50,0),829]]);
       let disconnectede: Array<any> = [543, 773];
         loadingm.set(`${disconnectede.length}`, disconnectede.length);
         disconnectede = [3];
          let default_sw = 5.0;
          let progress5 = String.fromCharCode(111,95,57,53,95,103,97,112,115,0);
          let entryn: Array<any> = [951, 562];
         disconnectede = [entryn.length];
         default_sw -= parseFloat(`${parseInt(`${default_sw}`) >> (Math.min(Math.abs(3), 3))}`);
         progress5 = `${parseInt(`${default_sw}`) % 1}`;
         entryn.push((String.fromCharCode(74,0) == progress5 ? progress5.length : parseInt(`${default_sw}`)));
       let unreadQ = 1.0;
       let predictionA = 1;
       let animationZ = 1;
      while (5 < (predictionA % (Math.max(5, 7)))) {
         animationZ /= Math.max(2, animationZ << (Math.min(Math.abs(2), 3)));
         break;
      }
      vietnam1 *= (parseFloat(`${(roomq ? 5 : 3) & 2}`));
      if (disconnectedW) {
         break;
      }
   } while (disconnectedW && (roomq));
   while ((forwardP.size >> (Math.min(Math.abs(3), 1))) <= 3) {
      analyticR = (parseInt(`${aboutt}`) / (Math.max(10, country9.length))) == 83;
      break;
   }
   if (!analyticR) {
      aboutt -= parseFloat(`${country9.length % (Math.max(2, 5))}`);
   }
   if (Array.from(forwardP.values()).includes(aboutt)) {
      aboutt /= Math.max(1, parseFloat(`${holderU.length}`));
   }

        setUsername(initialUsername);

   while (analyticR || (3.29 * aboutt) < 2.80) {
      aboutt += parseFloat(`${mbjscommony.length}`);
      break;
   }
      forwardP.set(`${vietnam1}`, 1 >> (Math.min(4, mbjscommony.length)));
   while (mbjscommony.length < 2) {
      roomq = vietnam1 < 8.73;
      break;
   }
   for (let a = 0; a < 3; a++) {
       let textk: Array<any> = [String.fromCharCode(97,108,119,97,121,115,95,54,95,54,54,0), String.fromCharCode(116,95,56,51,95,97,115,115,111,99,0)];
       let goalZ = String.fromCharCode(119,95,57,49,95,102,97,109,105,108,121,0);
      let trophya = goalZ == String.fromCharCode(122,57,55,95,55,0);
      do {
         goalZ = `${(String.fromCharCode(115,0) == goalZ ? goalZ.length : textk.length)}`;
         if (trophya) {
            break;
         }
      } while ((goalZ.length > 4) && trophya);
          let vietnam5 = String.fromCharCode(116,95,56,53,95,114,101,102,105,108,108,0);
          let expandi = 0.0;
         goalZ += `${goalZ.length / (Math.max(6, textk.length))}`;
         vietnam5 += `${1 * vietnam5.length}`;
         expandi *= parseFloat(`${3}`);
         textk.push(1);
          let middlek = false;
          let c_viewt = 4.0;
         textk = [parseInt(`${c_viewt}`) & 2];
         middlek = (middlek ? !middlek : middlek);
         c_viewt -= ((middlek ? 3 : 2));
      let assistT = 8954157 <= textk.length;
      do {
         textk.push((goalZ == String.fromCharCode(105,0) ? goalZ.length : textk.length));
         if (assistT) {
            break;
         }
      } while ((4 == (2 % (Math.max(1, textk.length)))) && assistT);
      while (3 <= (textk.length | 3) && (textk.length | 3) <= 3) {
         goalZ += `${textk.length}`;
         break;
      }
      mbsplashq /= Math.max(3, parseFloat(`${1}`));
   }
      vietnam1 /= Math.max(2, parseFloat(`${3}`));
   if (holderU.startsWith(`${analyticR}`)) {
      holderU = `${3 | parseInt(`${mbsplashq}`)}`;
   }
   for (let n = 0; n < 2; n++) {
      forwardP = new Map([[`${forwardP.size}`, 1 << (Math.min(1, country9.length))]]);
   }
   for (let m = 0; m < 1; m++) {
      roomq = 83 > mbjscommony.length && forwardP.size > 83;
   }
   while (entryu > mbsplashq) {
       let colorsg = String.fromCharCode(118,95,52,57,95,99,101,110,116,101,114,101,100,0);
      while (colorsg != String.fromCharCode(84,0)) {
         colorsg = `${colorsg.length - colorsg.length}`;
         break;
      }
      if (colorsg == String.fromCharCode(72,0) && colorsg == String.fromCharCode(67,0)) {
         colorsg += `${colorsg.length ^ colorsg.length}`;
      }
      let step4 = colorsg == String.fromCharCode(101,107,114,111,56,101,106,101,0);
      do {
         colorsg += `${colorsg.length}`;
         if (step4) {
            break;
         }
      } while ((colorsg.startsWith(`${colorsg.length}`)) && step4);
      mbsplashq *= parseFloat(`${3 ^ zhengpianz.length}`);
      break;
   }
   while (!analyticR) {
      analyticR = aboutt < 59.22;
      break;
   }
   for (let v = 0; v < 2; v++) {
      aboutt *= (parseFloat(`${String.fromCharCode(51,0) == holderU ? parseInt(`${mbsplashq}`) : holderU.length}`));
   }
   while ((mbjscommony.length << (Math.min(Math.abs(5), 3))) < 5 || 5 < (mbjscommony.length << (Math.min(holderU.length, 5)))) {
      mbjscommony = [((roomq ? 1 : 2))];
      break;
   }
      roomq = holderU.length > 3;
      placementl = (aboutt / (Math.max(7, parseFloat(`${country9.length}`)))) > 45.73;
   for (let v = 0; v < 2; v++) {
       let trashF = String.fromCharCode(117,95,57,50,95,98,105,110,116,101,120,116,0);
       let private_vf: Map<any, any> = new Map([[String.fromCharCode(122,95,56,53,95,101,110,99,111,100,101,100,112,111,105,110,116,0),137], [String.fromCharCode(115,99,114,97,116,99,104,95,101,95,50,48,0),229]]);
       let type_5E = false;
       let videojsp: Array<any> = [846, 752];
          let kuaishoum = String.fromCharCode(114,101,113,117,105,114,105,110,103,95,98,95,50,48,0);
         videojsp.push(videojsp.length);
         kuaishoum += `${kuaishoum.length}`;
         videojsp = [((type_5E ? 3 : 5) ^ videojsp.length)];
      for (let c = 0; c < 3; c++) {
         videojsp.push(2 - private_vf.size);
      }
         private_vf.set(`${type_5E}`, (2 << (Math.min(3, Math.abs((type_5E ? 5 : 3))))));
         trashF += `${1 - trashF.length}`;
      for (let z = 0; z < 3; z++) {
         trashF += `${private_vf.size}`;
      }
       let window_lY = 2.0;
       let tailS = 0.0;
      while (4.4 < (tailS + private_vf.size)) {
         tailS /= Math.max(parseInt(`${window_lY}`) % (Math.max(parseInt(`${tailS}`), 8)), 4);
         break;
      }
          let filex: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,116,95,50,0),String.fromCharCode(97,95,57,53,95,114,101,99,111,118,101,114,101,100,0)], [String.fromCharCode(121,95,57,55,95,112,114,111,118,105,100,101,115,0),String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,122,95,54,48,0)]]);
          let pointa = 3.0;
          let statistics9 = String.fromCharCode(117,95,50,48,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
         videojsp = [(String.fromCharCode(116,0) == statistics9 ? statistics9.length : (type_5E ? 1 : 1))];
         filex = new Map([[`${filex.size}`, parseInt(`${pointa}`) ^ 1]]);
         pointa -= parseInt(`${pointa}`) ^ 1;
          let modeV = String.fromCharCode(121,95,55,51,95,97,112,112,108,121,0);
          let referrerp = String.fromCharCode(109,97,110,116,105,115,115,97,115,95,55,95,51,51,0);
          let rulesz = String.fromCharCode(114,95,49,48,95,105,115,115,117,101,0);
         videojsp = [3];
         modeV += `${referrerp.length - modeV.length}`;
         referrerp += "1";
         rulesz = `${modeV.length}`;
      if (trashF.length >= 3) {
         trashF += `${private_vf.size % 1}`;
      }
      let stationQ = private_vf.size >= 9816297;
      do {
          let logoH = String.fromCharCode(113,95,50,57,95,98,117,115,0);
          let i_lockc: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,95,107,95,56,55,0),779], [String.fromCharCode(117,95,50,52,95,109,97,121,0),521], [String.fromCharCode(109,95,50,50,95,97,115,115,112,111,114,116,0),901]]);
          let giftE = 4;
          let humiditym: Array<any> = [61, 866];
          let register_04 = 4.0;
         private_vf = new Map([[`${tailS}`, parseInt(`${tailS}`)]]);
         logoH += `${parseInt(`${register_04}`)}`;
         i_lockc.set(logoH, 2 % (Math.max(5, logoH.length)));
         giftE &= parseInt(`${register_04}`);
         humiditym.push(humiditym.length % 3);
         if (stationQ) {
            break;
         }
      } while ((1 == (private_vf.size ^ 4) && 1.21 == (window_lY * 2.54)) && stationQ);
      zhengpianz = `${mbjscommony.length}`;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let stepy = String.fromCharCode(114,101,115,117,108,116,105,110,103,95,97,95,57,53,0);
    let sende: Map<any, any> = new Map([[String.fromCharCode(105,95,56,48,95,115,112,100,105,102,0),833], [String.fromCharCode(112,101,114,102,111,114,109,101,100,95,52,95,57,56,0),854], [String.fromCharCode(105,95,49,53,95,99,111,117,110,116,114,105,101,115,0),366]]);
    let recommendationX = 5;
    let stepp = 5.0;
    let temperatureT = String.fromCharCode(115,95,49,95,101,116,97,0);
    let robotog = 2.0;
    let selectedG = String.fromCharCode(111,95,51,57,95,103,114,97,100,105,101,110,116,0);
    let filedd = 0;
    let indicatort = String.fromCharCode(105,115,115,112,97,99,101,95,118,95,52,52,0);
    let zoom7 = 5.0;
    let share7 = 2.0;
    let routerw = String.fromCharCode(112,97,115,119,111,114,100,95,108,95,54,53,0);
    let match8 = 4.0;
    let stringr: Array<any> = [String.fromCharCode(97,95,55,51,95,100,101,110,115,101,0), String.fromCharCode(113,95,57,54,95,104,119,100,111,119,110,108,111,97,100,0)];
    let disconnectedu = 5.0;
   let filledR = filedd >= 8240693;
   do {
       let shrinkd = 5.0;
       let resendk = false;
      let paginationY = 8885524.0 >= shrinkd;
      do {
          let loadingN = true;
          let reportW = false;
         shrinkd /= Math.max(4, ((reportW ? 1 : 1) + (loadingN ? 1 : 4)));
         if (paginationY) {
            break;
         }
      } while (paginationY && (!resendk));
      while ((1.16 - shrinkd) >= 2.59) {
         resendk = !resendk;
         break;
      }
         shrinkd /= Math.max(2, ((resendk ? 2 : 2) * parseInt(`${shrinkd}`)));
         shrinkd -= (parseInt(`${shrinkd}`) * (resendk ? 1 : 5));
       let with_noa = String.fromCharCode(101,105,112,118,95,107,95,55,49,0);
         resendk = with_noa.length > 84;
      filedd ^= selectedG.length;
      if (filledR) {
         break;
      }
   } while (filledR && (3 < (selectedG.length - 2)));
      recommendationX /= Math.max(4, 3 - routerw.length);
       let middlej = String.fromCharCode(104,115,116,114,105,110,103,95,119,95,50,51,0);
       let yellowy = 5;
      let faviconA = String.fromCharCode(103,99,107,95,49,99,113,98,117,48,0) == middlej;
      do {
          let circle_: Array<any> = [320, 89];
          let modelr = String.fromCharCode(111,112,101,110,115,101,97,95,109,95,53,49,0);
          let untick0 = String.fromCharCode(97,114,114,95,116,95,55,55,0);
         middlej += `${untick0.length & yellowy}`;
         circle_ = [circle_.length];
         modelr = `${2 / (Math.max(10, circle_.length))}`;
         untick0 += `${modelr.length}`;
         if (faviconA) {
            break;
         }
      } while (((middlej.length >> (Math.min(3, Math.abs(yellowy)))) >= 4 && 4 >= (middlej.length >> (Math.min(4, Math.abs(yellowy))))) && faviconA);
          let videojs3 = String.fromCharCode(113,95,48,95,105,102,97,115,116,0);
          let carousel4: Array<any> = [25, 739, 746];
          let hongkong_: Array<any> = [String.fromCharCode(118,95,51,48,95,99,104,97,110,110,101,108,115,0), String.fromCharCode(99,111,114,101,95,98,95,49,0)];
         middlej += "3";
         videojs3 += "2";
         carousel4.push(videojs3.length / (Math.max(3, carousel4.length)));
         hongkong_.push(videojs3.length);
         middlej = `${middlej.length | 1}`;
         yellowy -= yellowy % 3;
          let auto_wJ: Array<any> = [String.fromCharCode(116,95,50,52,95,99,108,101,97,114,97,108,108,0), String.fromCharCode(97,115,100,107,95,97,95,52,56,0), String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,103,95,57,56,0)];
         middlej += `${yellowy}`;
         auto_wJ = [1];
      while (middlej.includes(`${yellowy}`)) {
         middlej = `${(String.fromCharCode(79,0) == middlej ? middlej.length : yellowy)}`;
         break;
      }
      temperatureT = "3";
      recommendationX -= recommendationX;
   for (let v = 0; v < 1; v++) {
      temperatureT = `${3 ^ parseInt(`${zoom7}`)}`;
   }
   let footballK = 7323621 <= temperatureT.length;
   do {
       let albumF = String.fromCharCode(98,95,57,50,95,111,99,97,108,0);
       let entry5: Array<any> = [151, 949, 856];
       let materialB = true;
       let searchbar5 = false;
      for (let f = 0; f < 2; f++) {
         entry5.push(3);
      }
          let package_bE = String.fromCharCode(102,95,55,48,95,120,99,101,112,116,105,111,110,0);
          let matchesK = 4;
          let sharedO = String.fromCharCode(102,105,110,116,95,98,95,56,57,0);
         entry5.push(((materialB ? 3 : 5)));
         package_bE += "2";
         matchesK -= package_bE.length - 1;
         sharedO += `${sharedO.length}`;
       let uploadr = String.fromCharCode(108,95,51,49,95,100,117,112,115,111,114,116,0);
       let soundL = String.fromCharCode(105,95,49,55,95,108,111,117,100,110,101,115,115,0);
      for (let u = 0; u < 3; u++) {
          let short_sy = String.fromCharCode(108,111,99,97,108,116,105,109,101,95,117,95,55,56,0);
          let eventX = 2;
          let fileD = 1.0;
          let faviconE = String.fromCharCode(100,95,53,52,95,99,114,111,119,100,105,110,0);
          let entryZ = String.fromCharCode(98,101,116,116,101,114,95,116,95,56,50,0);
         uploadr = `${soundL.length | uploadr.length}`;
         short_sy += `${eventX}`;
         eventX >>= Math.min(4, Math.abs(faviconE.length | eventX));
         fileD *= parseFloat(`${3}`);
         faviconE = `${eventX | 2}`;
         entryZ = "1";
      }
         uploadr = `${entry5.length * 2}`;
      for (let v = 0; v < 3; v++) {
         albumF += `${2 + uploadr.length}`;
      }
       let foregroundp = true;
       let android2 = false;
         foregroundp = searchbar5;
      let banner8 = foregroundp ? !foregroundp : foregroundp;
      do {
         foregroundp = (entry5.length - uploadr.length) < 54;
         if (banner8) {
            break;
         }
      } while (banner8 && (foregroundp));
      let orientationi = materialB ? !materialB : materialB;
      do {
         materialB = !foregroundp;
         if (orientationi) {
            break;
         }
      } while (orientationi && (!foregroundp));
         foregroundp = albumF.length == 36;
      let vietnamw = 7538772 >= entry5.length;
      do {
          let taiwann = false;
          let commenta = 2;
         entry5.push(entry5.length);
         taiwann = 66 == commenta;
         commenta %= Math.max(commenta - 3, 4);
         if (vietnamw) {
            break;
         }
      } while (vietnamw && (entry5.length == 4));
      temperatureT += `${(albumF == String.fromCharCode(84,0) ? parseInt(`${zoom7}`) : albumF.length)}`;
      if (footballK) {
         break;
      }
   } while ((5 == routerw.length && temperatureT != String.fromCharCode(82,0)) && footballK);
      recommendationX &= sende.size;
   for (let n = 0; n < 3; n++) {
      zoom7 += sende.size / 3;
   }
      stepy += `${sende.size ^ 2}`;
   for (let a = 0; a < 2; a++) {
       let videoC = 3.0;
       let mailk = false;
         mailk = !mailk;
      let configE = videoC <= 5955660.0;
      do {
         videoC *= (parseInt(`${videoC}`) & (mailk ? 3 : 3));
         if (configE) {
            break;
         }
      } while ((2.56 >= (videoC + 1.20) || 1.20 >= videoC) && configE);
         videoC *= (parseInt(`${videoC}`) ^ (mailk ? 3 : 3));
         videoC *= parseInt(`${videoC}`) / 3;
         mailk = mailk || 39.97 > videoC;
      for (let q = 0; q < 3; q++) {
          let short_24M = String.fromCharCode(109,95,49,53,95,101,120,101,99,117,116,105,110,103,0);
          let submitF = false;
          let searchbara = true;
         mailk = (!submitF ? searchbara : submitF);
         short_24M += `${short_24M.length}`;
      }
      share7 /= Math.max(1 * sende.size, 1);
   }
   if (!indicatort.startsWith(`${filedd}`)) {
      filedd |= temperatureT.length ^ recommendationX;
   }
       let projects = 5.0;
       let dragJ: Map<any, any> = new Map([[String.fromCharCode(97,95,52,55,95,109,101,109,111,114,121,0),859], [String.fromCharCode(120,95,56,51,95,99,118,105,100,0),811], [String.fromCharCode(120,112,111,114,116,101,100,95,55,95,54,48,0),299]]);
       let nexth = String.fromCharCode(109,101,115,115,97,103,101,115,95,121,95,56,52,0);
       let stations4: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,115,101,103,109,101,110,116,0),String.fromCharCode(104,95,55,49,95,97,115,115,111,99,105,97,116,105,111,110,0)], [String.fromCharCode(112,95,49,95,107,101,99,99,97,107,0),String.fromCharCode(108,95,50,50,95,103,111,116,0)], [String.fromCharCode(114,95,52,49,95,98,105,110,107,100,115,112,0),String.fromCharCode(105,95,57,56,95,99,97,118,115,105,100,99,116,0)]]);
       let expande: Map<any, any> = new Map([[String.fromCharCode(112,95,52,55,95,114,112,99,115,0),817], [String.fromCharCode(114,101,115,101,116,95,107,95,51,54,0),357]]);
      for (let n = 0; n < 3; n++) {
         dragJ = new Map([[`${stations4.size}`, stations4.size]]);
      }
         projects *= (String.fromCharCode(90,0) == nexth ? stations4.size : nexth.length);
      for (let l = 0; l < 3; l++) {
          let action_ = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,120,95,55,48,0);
          let carouselL = 5.0;
          let reducerf = String.fromCharCode(114,115,97,122,95,100,95,52,52,0);
          let sheetT = 2.0;
          let modalo: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,116,114,97,110,115,105,116,105,111,110,115,0),String.fromCharCode(109,95,49,55,95,115,105,103,110,108,101,0)], [String.fromCharCode(105,95,52,54,95,108,105,99,101,110,115,101,0),String.fromCharCode(99,111,109,112,108,105,97,110,116,95,56,95,57,54,0)]]);
         projects -= expande.size;
         action_ += `${reducerf.length % (Math.max(7, parseInt(`${sheetT}`)))}`;
         carouselL *= 2;
         reducerf = `${(String.fromCharCode(81,0) == reducerf ? parseInt(`${carouselL}`) : reducerf.length)}`;
         sheetT -= parseFloat(`${reducerf.length}`);
         modalo.set(action_, 1);
      }
      if ((stations4.size * projects) > 1.35 || 2 > (stations4.size * parseInt(`${projects}`))) {
         stations4.set(`${nexth}`, stations4.size);
      }
         expande.set(nexth, nexth.length);
          let upgradev = String.fromCharCode(111,117,98,108,101,95,49,95,54,57,0);
         dragJ = new Map([[`${stations4.size}`, 1 ^ dragJ.size]]);
         upgradev += "2";
         nexth = `${stations4.size}`;
          let reducer5 = String.fromCharCode(108,111,99,107,109,103,114,95,103,95,57,55,0);
          let commonj = String.fromCharCode(104,95,56,52,95,97,116,116,97,99,104,0);
          let sinap = 2.0;
         dragJ.set(`${reducer5}`, reducer5.length);
         commonj += `${commonj.length + 1}`;
         sinap /= Math.max(4, 3 << (Math.min(5, commonj.length)));
      temperatureT += `${parseInt(`${stepp}`) << (Math.min(5, Math.abs(parseInt(`${robotog}`))))}`;

        if (handleClose) handleClose();

      zoom7 += 1 - parseInt(`${robotog}`);
   if (indicatort.length < 4) {
      match8 /= Math.max(1, parseFloat(`${3 + stepy.length}`));
   }
   if (recommendationX > 5) {
       let aboutR = String.fromCharCode(102,95,48,95,97,108,108,111,99,97,116,101,100,0);
       let condensedr = 0;
       let storee: Array<any> = [String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,53,95,50,0), String.fromCharCode(122,95,54,53,95,99,108,117,115,116,101,114,0), String.fromCharCode(102,95,51,95,118,102,105,108,116,101,114,0)];
       let headerz = 4.0;
       let kuaishouY = 4.0;
      let borderlesse = kuaishouY <= 4904239.0;
      do {
         kuaishouY += (String.fromCharCode(88,0) == aboutR ? condensedr : aboutR.length);
         if (borderlesse) {
            break;
         }
      } while (borderlesse && (1.98 >= (4.98 * kuaishouY) && (headerz / 4.98) >= 5.50));
         headerz += 2;
      let shootN = kuaishouY >= 7166610.0;
      do {
          let black3 = String.fromCharCode(103,95,57,48,95,99,111,110,116,105,110,117,97,108,0);
          let robotoP = 4.0;
          let submitZ = String.fromCharCode(111,95,49,48,48,95,98,105,116,109,97,115,107,0);
          let wcopy_nwN = String.fromCharCode(100,111,99,95,48,95,52,56,0);
          let ewarded5 = String.fromCharCode(99,111,111,114,100,115,95,56,95,54,56,0);
         kuaishouY -= 3;
         black3 += `${submitZ.length}`;
         robotoP /= Math.max(3, parseFloat(`${black3.length << (Math.min(Math.abs(1), 3))}`));
         submitZ = `${ewarded5.length << (Math.min(Math.abs(2), 1))}`;
         wcopy_nwN += `${parseInt(`${robotoP}`)}`;
         ewarded5 += `${wcopy_nwN.length}`;
         if (shootN) {
            break;
         }
      } while ((4 > aboutR.length) && shootN);
         kuaishouY /= Math.max(4, parseInt(`${kuaishouY}`) << (Math.min(5, Math.abs(condensedr))));
      if (3.47 >= (condensedr / (Math.max(kuaishouY, 2)))) {
          let giftX: Array<any> = [String.fromCharCode(98,111,114,100,101,114,101,100,95,109,95,50,49,0), String.fromCharCode(115,104,97,108,108,95,54,95,50,50,0)];
          let yingO: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,95,56,95,57,51,0),465], [String.fromCharCode(115,119,105,112,101,100,95,117,95,51,49,0),619]]);
          let expandH = 2;
          let uploadt = 3;
          let aboutj = 2.0;
         kuaishouY /= Math.max(expandH | parseInt(`${aboutj}`), 1);
         giftX = [yingO.size >> (Math.min(Math.abs(3), 4))];
         yingO = new Map([[`${giftX.length}`, 1]]);
         expandH -= 3 >> (Math.min(4, Math.abs(yingO.size)));
         uploadt <<= Math.min(Math.abs(1 << (Math.min(3, Math.abs(yingO.size)))), 3);
         aboutj /= Math.max(giftX.length | yingO.size, 5);
      }
         storee.push(2 | parseInt(`${kuaishouY}`));
          let slidera = String.fromCharCode(98,95,56,53,95,109,100,105,97,0);
         kuaishouY -= 3 | parseInt(`${kuaishouY}`);
         slidera = `${slidera.length | 3}`;
      let topicp = storee.length <= 9560552;
      do {
          let description_3J = 4.0;
          let buttonp = String.fromCharCode(108,95,57,55,95,104,114,101,97,100,0);
          let uploadq = String.fromCharCode(114,95,52,55,95,112,104,121,115,0);
          let moviesa = true;
          let hooksc = 1.0;
         storee = [uploadq.length];
         description_3J += (buttonp == String.fromCharCode(75,0) ? parseInt(`${hooksc}`) : buttonp.length);
         uploadq += `${parseInt(`${description_3J}`) ^ 1}`;
         moviesa = 70.87 < description_3J;
         hooksc -= parseFloat(`${buttonp.length}`);
         if (topicp) {
            break;
         }
      } while ((storee.length <= 2) && topicp);
         condensedr %= Math.max(4, parseInt(`${headerz}`) & 3);
         headerz += parseInt(`${kuaishouY}`);
         headerz *= condensedr;
      while (1.26 == (condensedr / (Math.max(kuaishouY, 3)))) {
          let invite7 = 5;
         condensedr >>= Math.min(Math.abs(invite7), 2);
         break;
      }
          let unreadm = true;
          let link1 = 1.0;
         storee = [storee.length & 1];
         unreadm = !unreadm;
         link1 -= parseFloat(`${parseInt(`${link1}`) * 1}`);
          let temperatureI = 3;
         kuaishouY += temperatureI;
         storee = [1 >> (Math.min(Math.abs(parseInt(`${headerz}`)), 4))];
      zoom7 *= (String.fromCharCode(102,0) == temperatureT ? sende.size : temperatureT.length);
   }
   while (2.37 > (zoom7 - recommendationX)) {
      zoom7 -= 2 ^ parseInt(`${robotog}`);
      break;
   }
   for (let u = 0; u < 1; u++) {
       let predictionP = true;
       let topicz = String.fromCharCode(119,95,54,54,95,115,117,98,118,105,100,101,111,0);
       let build0 = 5.0;
       let privacyg = String.fromCharCode(99,95,55,51,95,115,99,97,108,97,114,109,117,108,116,0);
       let backT = 4.0;
      if (4.83 < (build0 + 3.51) && (2 + parseInt(`${build0}`)) < 1) {
         build0 -= privacyg.length / 1;
      }
      if (topicz.includes(`${build0}`)) {
          let sendZ = 4;
          let skip_ = true;
         topicz = `${topicz.length << (Math.min(Math.abs(2), 2))}`;
         sendZ &= ((skip_ ? 3 : 1) ^ sendZ);
         skip_ = !skip_;
      }
      for (let c = 0; c < 3; c++) {
         backT /= Math.max(1, 3);
      }
          let typing6 = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,102,95,52,0);
         privacyg = `${(parseInt(`${build0}`) >> (Math.min(4, Math.abs((predictionP ? 2 : 4)))))}`;
         typing6 += `${2 - typing6.length}`;
      let pauseT = 7671455.0 <= backT;
      do {
         backT -= (2 - (predictionP ? 3 : 2));
         if (pauseT) {
            break;
         }
      } while (((backT / 4.64) < 2.3 && 4.64 < backT) && pauseT);
         predictionP = (53 > (topicz.length >> (Math.min(2, Math.abs((predictionP ? topicz.length : 53))))));
         topicz += `${((predictionP ? 2 : 3) ^ parseInt(`${build0}`))}`;
      let viewert = build0 >= 5120967.0;
      do {
          let twitterP = String.fromCharCode(113,95,57,55,95,110,99,104,117,110,107,0);
          let soundX: Array<any> = [String.fromCharCode(102,95,50,54,95,97,100,100,115,0), String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,106,95,51,55,0)];
          let goalB = String.fromCharCode(100,95,50,52,95,98,116,110,99,108,105,99,107,0);
         build0 /= Math.max(1, 3);
         twitterP = "3";
         soundX = [twitterP.length];
         goalB = `${soundX.length << (Math.min(goalB.length, 4))}`;
         if (viewert) {
            break;
         }
      } while (((privacyg.length * 4) <= 4 || (parseInt(`${build0}`) * privacyg.length) <= 4) && viewert);
      let humidityB = 7434001.0 >= backT;
      do {
         backT -= privacyg.length;
         if (humidityB) {
            break;
         }
      } while (humidityB && (4.47 < (backT / (Math.max(9, privacyg.length)))));
          let plashh: Array<any> = [String.fromCharCode(98,97,110,100,119,105,100,116,104,95,102,95,56,53,0), String.fromCharCode(108,105,110,107,115,95,52,95,51,52,0), String.fromCharCode(112,114,111,100,95,102,95,52,0)];
         backT += parseInt(`${build0}`) ^ 2;
         plashh.push(plashh.length >> (Math.min(plashh.length, 3)));
      let readi = predictionP ? !predictionP : predictionP;
      do {
         predictionP = topicz.length == 58;
         if (readi) {
            break;
         }
      } while ((!predictionP || topicz.length >= 2) && readi);
      if (4 < privacyg.length || predictionP) {
         predictionP = topicz.length <= 50;
      }
      if (topicz.length < 5 || predictionP) {
         topicz += `${((predictionP ? 5 : 5) + parseInt(`${backT}`))}`;
      }
       let mailA: Array<any> = [String.fromCharCode(103,95,57,57,95,105,110,116,101,114,112,114,101,116,0), String.fromCharCode(101,95,50,53,95,98,117,98,98,108,101,115,0)];
       let ecopy_dqF: Array<any> = [402, 883, 203];
      if (!predictionP) {
         topicz = `${1 << (Math.min(2, Math.abs(parseInt(`${build0}`))))}`;
      }
      match8 *= parseFloat(`${parseInt(`${share7}`) + 3}`);
   }
   let stats1 = 7838982 >= temperatureT.length;
   do {
      temperatureT += `${3 << (Math.min(Math.abs(parseInt(`${robotog}`)), 4))}`;
      if (stats1) {
         break;
      }
   } while ((2 >= (temperatureT.length + parseInt(`${robotog}`)) || 1 >= (temperatureT.length & 2)) && stats1);
      stepy += `${parseInt(`${zoom7}`) * 1}`;
   for (let r = 0; r < 2; r++) {
      robotog /= Math.max(filedd + 3, 3);
   }
      filedd %= Math.max(1, 1);
      stepp /= Math.max(parseFloat(`${temperatureT.length >> (Math.min(4, Math.abs(parseInt(`${stepp}`))))}`), 4);
      share7 -= parseInt(`${stepp}`);
   if ((zoom7 - share7) >= 5.60 && (share7 - zoom7) >= 5.60) {
      zoom7 /= Math.max(4, 3 - parseInt(`${robotog}`));
   }

        Keyboard.dismiss();

   if (2 <= sende.size) {
      stepy = "2";
   }
      zoom7 *= 1;
   if (!stepy.includes(`${match8}`)) {
       let const_uka = 5.0;
       let cataloge = 5.0;
       let chat_ = 5.0;
      let faviconB = 5920065.0 <= chat_;
      do {
         chat_ += parseFloat(`${parseInt(`${const_uka}`)}`);
         if (faviconB) {
            break;
         }
      } while ((cataloge < chat_) && faviconB);
      for (let k = 0; k < 3; k++) {
         chat_ *= parseFloat(`${2 ^ parseInt(`${const_uka}`)}`);
      }
      for (let x = 0; x < 1; x++) {
         chat_ += parseFloat(`${1 + parseInt(`${const_uka}`)}`);
      }
         chat_ *= parseFloat(`${parseInt(`${cataloge}`) / 3}`);
          let corer: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),false ], [String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,57,95,52,48,0),true ], [String.fromCharCode(109,95,56,57,95,120,95,55,48,0),true ]]);
          let sidei = String.fromCharCode(111,95,54,53,95,104,105,103,104,108,105,103,104,116,115,0);
          let googleh = 0.0;
         cataloge -= corer.size;
         corer = new Map([[`${googleh}`, 3]]);
         sidei += `${parseInt(`${googleh}`) ^ 3}`;
          let countryy = String.fromCharCode(115,95,54,53,95,114,101,97,112,101,114,0);
          let gradlewF: Array<any> = [String.fromCharCode(115,95,54,53,95,99,97,115,116,101,100,0), String.fromCharCode(111,95,54,50,95,115,112,101,101,100,111,109,101,116,101,114,0)];
          let annerp = 0.0;
         chat_ -= parseFloat(`${1}`);
         countryy += `${gradlewF.length ^ 1}`;
         gradlewF.push(countryy.length << (Math.min(Math.abs(1), 2)));
         annerp *= parseInt(`${annerp}`);
      while (4.62 == (chat_ / (Math.max(cataloge, 1))) || (chat_ / 4.62) == 1.14) {
         cataloge -= parseInt(`${cataloge}`) ^ 2;
         break;
      }
          let grayR = String.fromCharCode(121,95,55,57,95,115,121,109,109,101,116,114,105,99,0);
          let promotionx = 2.0;
          let promotionA: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,115,116,114,108,99,97,116,0),512], [String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,105,95,49,53,0),759], [String.fromCharCode(101,95,52,52,95,98,105,97,115,101,100,0),159]]);
         chat_ -= parseFloat(`${grayR.length}`);
         grayR = `${2 - parseInt(`${promotionx}`)}`;
         promotionx += parseFloat(`${parseInt(`${promotionx}`) - promotionA.size}`);
         promotionA = new Map([[`${promotionA.size}`, promotionA.size << (Math.min(5, Math.abs(parseInt(`${promotionx}`))))]]);
         cataloge /= Math.max(5, parseInt(`${chat_}`) - parseInt(`${cataloge}`));
      match8 *= parseFloat(`${2 / (Math.max(parseInt(`${share7}`), 9))}`);
   }
   for (let x = 0; x < 1; x++) {
      zoom7 /= Math.max(sende.size, 2);
   }
       let twitterk = false;
       let sharedV = 0;
          let anythink7 = 0.0;
          let gpay6 = String.fromCharCode(116,115,120,95,101,95,51,53,0);
          let downloadingA = String.fromCharCode(117,110,103,114,111,117,112,95,101,95,54,48,0);
         sharedV -= parseInt(`${anythink7}`) / 1;
         anythink7 *= 2 & downloadingA.length;
         gpay6 = `${1 % (Math.max(7, gpay6.length))}`;
         downloadingA += `${gpay6.length}`;
      for (let d = 0; d < 1; d++) {
          let arrowC: Array<any> = [558, 116, 134];
          let commonL = String.fromCharCode(99,97,114,101,116,95,116,95,50,0);
         sharedV -= commonL.length & 3;
         arrowC.push(3 | arrowC.length);
         commonL = `${arrowC.length}`;
      }
      while ((2 * sharedV) > 5 || twitterk) {
         twitterk = 14 == sharedV;
         break;
      }
          let rank6 = true;
         sharedV >>= Math.min(Math.abs(sharedV), 5);
         rank6 = !rank6;
      if ((sharedV % (Math.max(3, 4))) == 4) {
          let megaphone9 = String.fromCharCode(98,95,53,54,95,97,114,103,117,109,101,110,116,0);
          let logoutB = String.fromCharCode(102,108,97,99,100,115,112,95,114,95,56,56,0);
          let applicationy: Array<any> = [79, 530];
         twitterk = (applicationy.length * megaphone9.length) <= 30;
         megaphone9 = `${(String.fromCharCode(118,0) == logoutB ? logoutB.length : logoutB.length)}`;
      }
      while ((sharedV << (Math.min(Math.abs(4), 3))) > 5 && twitterk) {
         sharedV *= sharedV;
         break;
      }
      zoom7 /= Math.max((String.fromCharCode(79,0) == selectedG ? selectedG.length : filedd), 3);
   while (!stepy.includes(`${recommendationX}`)) {
       let minivodu = 2.0;
       let spinnera = true;
         spinnera = !spinnera;
      for (let s = 0; s < 3; s++) {
         spinnera = !spinnera;
      }
          let securityf = String.fromCharCode(98,95,54,48,95,114,101,115,105,100,117,97,108,0);
         minivodu -= parseInt(`${minivodu}`) / 1;
         securityf = `${securityf.length & securityf.length}`;
         minivodu /= Math.max((parseInt(`${minivodu}`) - (spinnera ? 4 : 1)), 2);
         minivodu *= ((spinnera ? 1 : 1) / (Math.max(parseInt(`${minivodu}`), 3)));
      let rewardvideo3 = spinnera ? !spinnera : spinnera;
      do {
          let forward7 = false;
         spinnera = minivodu > 45.21;
         forward7 = !forward7;
         if (rewardvideo3) {
            break;
         }
      } while ((minivodu == 4.58) && rewardvideo3);
      recommendationX >>= Math.min(3, Math.abs(1));
      break;
   }
      stepp *= (parseFloat(`${String.fromCharCode(76,0) == temperatureT ? temperatureT.length : parseInt(`${share7}`)}`));
   for (let t = 0; t < 2; t++) {
      zoom7 -= temperatureT.length;
   }
   let k_lockQ = String.fromCharCode(101,102,118,99,54,115,101,114,108,0) == indicatort;
   do {
      indicatort += "2";
      if (k_lockQ) {
         break;
      }
   } while ((indicatort.length >= 1) && k_lockQ);
   for (let c = 0; c < 1; c++) {
      match8 -= parseFloat(`${1 >> (Math.min(5, stepy.length))}`);
   }
   let crownU = zoom7 <= 8813664.0;
   do {
      zoom7 *= 3;
      if (crownU) {
         break;
      }
   } while (crownU && (stringr.includes(zoom7)));
       let benefitv: Array<any> = [956, 353];
       let formf = String.fromCharCode(100,95,54,53,95,99,111,112,105,101,100,0);
      if (formf.length < 3) {
         benefitv = [benefitv.length / (Math.max(3, 1))];
      }
      if (formf.endsWith(`${benefitv.length}`)) {
          let shootX = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,48,95,49,54,0);
         formf += `${(String.fromCharCode(50,0) == formf ? shootX.length : formf.length)}`;
      }
      let applez = 8671913 >= benefitv.length;
      do {
          let gestureR = String.fromCharCode(115,95,56,49,95,111,117,116,108,105,110,107,0);
          let huaweid: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,0),true ], [String.fromCharCode(113,95,57,48,95,115,101,110,100,97,108,108,0),false ], [String.fromCharCode(98,105,111,95,114,95,53,50,0),false ]]);
          let away1 = String.fromCharCode(105,111,101,114,114,95,106,95,51,57,0);
          let internett = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,53,95,56,57,0);
          let mappingM = 5.0;
         benefitv.push(huaweid.size);
         gestureR = `${internett.length & parseInt(`${mappingM}`)}`;
         huaweid.set(away1, away1.length);
         internett += `${internett.length >> (Math.min(Math.abs(1), 5))}`;
         mappingM /= Math.max(4, (String.fromCharCode(98,0) == internett ? internett.length : parseInt(`${mappingM}`)));
         if (applez) {
            break;
         }
      } while ((formf.endsWith(`${benefitv.length}`)) && applez);
          let penaltyI: Array<any> = [String.fromCharCode(115,117,114,102,95,115,95,55,52,0), String.fromCharCode(102,105,116,116,101,100,95,115,95,49,50,0)];
         formf = `${2 + formf.length}`;
         penaltyI = [penaltyI.length ^ 1];
         formf = `${benefitv.length}`;
          let sharedW = String.fromCharCode(117,95,53,56,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
          let filei: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,116,111,121,117,118,95,112,95,50,50,0),263], [String.fromCharCode(122,95,53,55,95,115,117,98,118,105,100,101,111,0),174]]);
         benefitv = [benefitv.length];
         sharedW = `${(String.fromCharCode(66,0) == sharedW ? sharedW.length : filei.size)}`;
         filei = new Map([[`${filei.size}`, sharedW.length - filei.size]]);
      routerw = `${1 + benefitv.length}`;
        resetForm();
    }

    const onSubmitForm = async () => {
       let apps9: Map<any, any> = new Map([[String.fromCharCode(108,97,115,114,95,119,95,53,54,0),243], [String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,54,95,54,56,0),508], [String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,49,95,52,54,0),200]]);
    let sendM = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,112,95,49,55,0);
    let icon4 = String.fromCharCode(109,117,114,109,117,114,95,112,95,54,50,0);
    let dangerJ = 0.0;
    let mbjscommons = String.fromCharCode(101,97,105,100,99,116,95,100,95,53,50,0);
    let reado: Array<any> = [409, 549];
    let nativeF = 5.0;
   let singlev = 5569381.0 <= nativeF;
   do {
      nativeF -= parseFloat(`${sendM.length}`);
      if (singlev) {
         break;
      }
   } while (singlev && (sendM.length == parseInt(`${nativeF}`)));

        if (usernameErrMsg !== null) return;

   if ((mbjscommons.length * reado.length) <= 3 && 3 <= (mbjscommons.length * 3)) {
      mbjscommons = `${parseInt(`${dangerJ}`) % (Math.max(1, reado.length))}`;
   }

        if (isSubmitting) return;

      mbjscommons += `${1 | mbjscommons.length}`;
        setSubmitting(true);

      reado.push(apps9.size);

        try {

   while (!sendM.startsWith(`${mbjscommons.length}`)) {
      mbjscommons = `${apps9.size | 1}`;
      break;
   }
            await ttTramini.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      dangerJ *= parseFloat(`${parseInt(`${nativeF}`) % 1}`);
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   while (4 <= (1 << (Math.min(5, sendM.length))) && (dangerJ - parseFloat(`${sendM.length}`)) <= 4.7) {
      sendM = `${icon4.length}`;
      break;
   }
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   for (let p = 0; p < 3; p++) {
      icon4 += `${(String.fromCharCode(122,0) == icon4 ? icon4.length : parseInt(`${nativeF}`))}`;
   }
            return;
        }


        dispatch(updateUsernameState(username));

       let holderO = 5;
       let detailA: Array<any> = [String.fromCharCode(98,95,51,51,95,116,97,103,103,105,110,103,0), String.fromCharCode(114,101,97,108,116,101,120,116,95,49,95,54,50,0)];
       let grayN = 5.0;
      let storeU = 8589364 <= detailA.length;
      do {
         detailA.push(parseInt(`${grayN}`) + 1);
         if (storeU) {
            break;
         }
      } while ((detailA.length > parseInt(`${grayN}`)) && storeU);
      while (holderO < 5) {
         holderO ^= detailA.length * 3;
         break;
      }
       let themeN = 3.0;
      while (!detailA.includes(themeN)) {
         themeN += parseInt(`${themeN}`) | parseInt(`${grayN}`);
         break;
      }
       let adultP = 5;
       let pointh = String.fromCharCode(111,95,56,57,0);
         holderO |= parseInt(`${themeN}`) - parseInt(`${grayN}`);
         pointh = `${1 / (Math.max(parseInt(`${grayN}`), 5))}`;
      if (2 < holderO) {
         holderO /= Math.max(detailA.length, 5);
      }
      mbjscommons = "2";
        dispatch(changeScreenAction("修改成功"));

       let combinem = 3.0;
      let nterstitialr = 9709804.0 <= combinem;
      do {
         combinem /= Math.max(parseInt(`${combinem}`), 1);
         if (nterstitialr) {
            break;
         }
      } while (nterstitialr && (combinem >= combinem));
      let nativej = 9371917.0 >= combinem;
      do {
          let colorsg: Map<any, any> = new Map([[String.fromCharCode(105,95,53,53,95,97,112,112,101,97,114,101,110,99,101,0),240], [String.fromCharCode(120,95,55,55,95,101,103,119,105,116,0),158], [String.fromCharCode(98,108,97,99,107,95,48,95,52,50,0),65]]);
         combinem -= parseInt(`${combinem}`) + colorsg.size;
         if (nativej) {
            break;
         }
      } while ((1.92 >= (combinem / 4.62) && 1.30 >= (4.62 / (Math.max(5, combinem)))) && nativej);
         combinem /= Math.max(1, 1);
      reado = [parseInt(`${combinem}`)];

        if (onSubmitSuccess) onSubmitSuccess(username);

   for (let r = 0; r < 2; r++) {
       let shrinkP = String.fromCharCode(99,95,53,55,95,117,110,102,114,101,101,122,101,0);
       let e_titleT = 3.0;
         e_titleT -= 1 & shrinkP.length;
          let modalB = String.fromCharCode(110,95,50,48,95,102,116,115,105,115,115,112,97,99,101,0);
          let alert9 = 5.0;
          let selectedd = true;
         shrinkP += `${parseInt(`${e_titleT}`) | modalB.length}`;
         modalB += `${parseInt(`${alert9}`) >> (Math.min(1, Math.abs(3)))}`;
         alert9 /= Math.max(5, (parseInt(`${alert9}`) / (Math.max(3, (selectedd ? 5 : 3)))));
         selectedd = alert9 > 91.73 && !selectedd;
         e_titleT /= Math.max(5, shrinkP.length);
      if (2 <= (parseInt(`${e_titleT}`) / (Math.max(shrinkP.length, 2))) || 5 <= (shrinkP.length - 2)) {
         e_titleT += parseInt(`${e_titleT}`);
      }
         e_titleT *= shrinkP.length;
       let borderless0: Array<any> = [607, 471, 554];
      reado = [2];
   }

        Keyboard.dismiss();

       let router7: Map<any, any> = new Map([[String.fromCharCode(101,110,100,112,111,105,110,116,95,117,95,52,0),133], [String.fromCharCode(109,95,50,52,95,109,97,116,99,104,101,115,0),295], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,52,95,57,48,0),864]]);
       let suggestionR = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,111,95,53,0);
       let anytimeI: Map<any, any> = new Map([[String.fromCharCode(102,95,57,50,95,97,109,112,108,105,116,117,100,101,0),373], [String.fromCharCode(115,101,108,101,99,116,105,111,110,95,115,95,53,56,0),11]]);
          let mbnative6 = String.fromCharCode(102,95,50,51,95,109,101,109,115,104,105,112,0);
          let ajaxW: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,105,109,103,0),787], [String.fromCharCode(115,109,106,112,101,103,95,116,95,51,0),977]]);
          let selectedI: Array<any> = [218, 759, 598];
         suggestionR += `${suggestionR.length}`;
         mbnative6 = `${selectedI.length & 1}`;
         ajaxW.set(`${selectedI.length}`, 3 + ajaxW.size);
      while (suggestionR.includes(`${anytimeI.size}`)) {
         suggestionR = `${(String.fromCharCode(86,0) == suggestionR ? router7.size : suggestionR.length)}`;
         break;
      }
      let videojsc = 8102513 <= suggestionR.length;
      do {
         suggestionR = `${router7.size >> (Math.min(Math.abs(1), 2))}`;
         if (videojsc) {
            break;
         }
      } while (((suggestionR.length / 1) == 1 && (suggestionR.length / 1) == 1) && videojsc);
      for (let b = 0; b < 2; b++) {
         anytimeI = new Map([[`${router7.size}`, router7.size]]);
      }
         suggestionR = `${router7.size}`;
      if (3 < (suggestionR.length | 5) || (router7.size | suggestionR.length) < 5) {
         suggestionR = "1";
      }
          let successO: Array<any> = [597, 131, 682];
         suggestionR = `${router7.size | anytimeI.size}`;
         successO.push(successO.length);
         router7.set(`${suggestionR}`, router7.size ^ suggestionR.length);
      for (let h = 0; h < 3; h++) {
          let dicek: Array<any> = [933, 508];
          let source0 = String.fromCharCode(115,116,97,114,116,115,95,102,95,51,50,0);
          let friendsc = true;
          let downloadT: Array<any> = [137, 816, 650];
         suggestionR += `${router7.size}`;
         dicek.push(source0.length & 2);
         source0 = `${downloadT.length}`;
         friendsc = dicek.length > 18;
         downloadT.push(3);
      }
      apps9 = new Map([[`${router7.size}`, mbjscommons.length]]);
        navigation.navigate("Home", {
            screen: "Profile",
        });

      icon4 = `${apps9.size & 2}`;

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
                                source={require("@static/images/invite/newsSendSlider.png")}
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