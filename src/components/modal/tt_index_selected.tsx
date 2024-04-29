import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/tt_spec_download";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/tt_copy_heji";
import { updateUserAuth } from "@redux/actions/tt_topon";
import { ttTramini } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";


interface ttSmall {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: ttSmall) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<ttGoal>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let shrinkg: Map<any, any> = new Map([[String.fromCharCode(117,95,56,48,95,101,120,112,114,101,115,115,105,111,110,0),422], [String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,121,95,56,52,0),619], [String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,95,109,95,55,51,0),528]]);
    let temph: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,101,100,95,51,95,49,48,48,0),String.fromCharCode(98,95,55,56,95,102,114,97,103,109,101,110,116,115,0)], [String.fromCharCode(104,95,54,54,95,109,117,108,97,100,100,0),String.fromCharCode(102,105,108,116,101,114,101,100,95,122,95,55,53,0)]]);
    let statisticsE = true;
    let gnewinterstitialb = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,101,95,57,49,0);
    let nativeexb = String.fromCharCode(111,95,49,50,95,97,97,99,101,110,99,116,97,98,0);
    let typesC: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,115,100,97,108,108,111,99,120,0),951], [String.fromCharCode(116,97,100,100,95,104,95,56,52,0),247]]);
    let search2 = String.fromCharCode(111,95,51,49,95,104,97,114,101,0);
    let sellY = 2.0;
    let ewardede = String.fromCharCode(101,109,111,106,105,115,95,116,95,57,51,0);
    let dangerm = true;
    let h_centerH: Map<any, any> = new Map([[String.fromCharCode(108,95,51,53,95,113,95,57,49,0),839], [String.fromCharCode(97,95,54,53,95,101,120,105,115,116,101,110,99,101,0),881]]);
    let uploadH: Array<any> = [3, 294];
    let white9 = 5;
    let reactR: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,100,95,120,95,53,53,0),String.fromCharCode(106,95,56,49,95,102,108,97,103,115,0)], [String.fromCharCode(100,101,99,114,101,109,101,110,116,95,55,95,53,50,0),String.fromCharCode(100,95,50,52,95,119,105,100,101,115,99,114,101,101,110,0)], [String.fromCharCode(99,111,112,121,104,95,114,95,52,0),String.fromCharCode(100,95,56,54,95,110,97,116,105,118,101,0)]]);
    let feedbackc: Map<any, any> = new Map([[String.fromCharCode(119,105,114,101,102,114,97,109,101,95,50,95,50,49,0),216], [String.fromCharCode(118,95,57,53,95,100,101,99,108,97,114,101,0),990], [String.fromCharCode(98,97,99,107,117,112,95,99,95,50,49,0),983]]);
    let configy = String.fromCharCode(99,111,109,98,105,95,115,95,51,56,0);
      ewardede = `${search2.length / (Math.max(nativeexb.length, 9))}`;
   while (!Array.from(typesC.keys()).includes(`${uploadH.length}`)) {
      typesC.set(`${search2}`, 3);
      break;
   }
      typesC = new Map([[`${sellY}`, 1]]);
      ewardede += `${(search2 == String.fromCharCode(79,0) ? (statisticsE ? 4 : 5) : search2.length)}`;
   for (let n = 0; n < 2; n++) {
      ewardede = `${parseInt(`${sellY}`)}`;
   }
   let singleM = h_centerH.size <= 9751172;
   do {
       let colorsY = String.fromCharCode(111,114,100,101,114,116,121,112,101,95,49,95,51,56,0);
       let rightj = String.fromCharCode(119,95,50,54,95,115,112,108,105,116,116,101,114,0);
      for (let i = 0; i < 3; i++) {
         colorsY += `${colorsY.length | rightj.length}`;
      }
      let usernameW = colorsY == String.fromCharCode(119,115,51,106,107,100,48,56,54,0);
      do {
         colorsY = `${rightj.length / (Math.max(1, colorsY.length))}`;
         if (usernameW) {
            break;
         }
      } while (usernameW && (!colorsY.startsWith(rightj)));
      for (let j = 0; j < 2; j++) {
         colorsY += "2";
      }
      for (let f = 0; f < 3; f++) {
         rightj = `${rightj.length ^ colorsY.length}`;
      }
      let p_unlockZ = rightj.length <= 5028218;
      do {
          let membership_ = 5.0;
          let c_lockh = 3.0;
          let indexG = String.fromCharCode(115,101,108,102,105,101,95,121,95,52,55,0);
         rightj = `${parseInt(`${membership_}`) >> (Math.min(rightj.length, 4))}`;
         membership_ += parseFloat(`${2 & indexG.length}`);
         c_lockh -= parseFloat(`${indexG.length << (Math.min(5, Math.abs(parseInt(`${c_lockh}`))))}`);
         if (p_unlockZ) {
            break;
         }
      } while (p_unlockZ && (rightj.length < 5 && colorsY == String.fromCharCode(110,0)));
      for (let k = 0; k < 3; k++) {
         rightj = "3";
      }
      h_centerH = new Map([[search2, nativeexb.length % (Math.max(10, search2.length))]]);
      if (singleM) {
         break;
      }
   } while (singleM && ((3 * h_centerH.size) == 4 && 3 == (h_centerH.size * nativeexb.length)));
      temph.set(`${dangerm}`, 2);
       let androidk = String.fromCharCode(105,110,118,111,107,101,114,95,54,95,54,56,0);
       let suggestionl = String.fromCharCode(108,95,57,55,95,115,97,108,116,0);
       let selectedw = false;
      while (!selectedw) {
         androidk = `${(String.fromCharCode(95,0) == androidk ? androidk.length : suggestionl.length)}`;
         break;
      }
      while (androidk.length < 4) {
         androidk += `${(String.fromCharCode(112,0) == androidk ? suggestionl.length : androidk.length)}`;
         break;
      }
         suggestionl += `${suggestionl.length}`;
          let oranges: Map<any, any> = new Map([[String.fromCharCode(116,95,49,49,95,116,105,108,105,110,103,0),true ], [String.fromCharCode(121,95,51,49,95,114,101,109,101,109,98,101,114,0),true ], [String.fromCharCode(119,95,56,95,105,110,99,114,98,108,111,98,0),true ]]);
          let pausei = String.fromCharCode(97,95,54,55,95,112,111,115,105,116,105,111,110,105,110,103,0);
         suggestionl = `${pausei.length}`;
         oranges.set(`${oranges.size}`, 3 + oranges.size);
         pausei += `${oranges.size & oranges.size}`;
         suggestionl = `${(androidk.length >> (Math.min(2, Math.abs((selectedw ? 1 : 1)))))}`;
      for (let v = 0; v < 1; v++) {
         suggestionl += `${(suggestionl == String.fromCharCode(85,0) ? suggestionl.length : (selectedw ? 5 : 4))}`;
      }
      if (androidk != String.fromCharCode(88,0)) {
         suggestionl += `${suggestionl.length}`;
      }
      let commond = androidk == String.fromCharCode(54,112,113,0);
      do {
          let light8 = 2.0;
          let condensedG = 0.0;
          let matchw: Array<any> = [644, 634];
         androidk += `${parseInt(`${light8}`) % (Math.max(androidk.length, 6))}`;
         light8 += parseFloat(`${3}`);
         condensedG *= parseFloat(`${parseInt(`${condensedG}`) | matchw.length}`);
         matchw.push(matchw.length | parseInt(`${condensedG}`));
         if (commond) {
            break;
         }
      } while ((androidk.length == 4 || suggestionl.length == 4) && commond);
      let sanss = selectedw ? !selectedw : selectedw;
      do {
         selectedw = androidk == suggestionl;
         if (sanss) {
            break;
         }
      } while (sanss && (!selectedw || 3 == androidk.length));
      h_centerH = new Map([[`${selectedw}`, (androidk.length << (Math.min(5, Math.abs((selectedw ? 4 : 1)))))]]);
      statisticsE = 100 > gnewinterstitialb.length;
      gnewinterstitialb += `${2 >> (Math.min(4, uploadH.length))}`;
   while (1 < gnewinterstitialb.length) {
      typesC = new Map([[`${shrinkg.size}`, shrinkg.size & white9]]);
      break;
   }
      white9 |= search2.length;
      nativeexb = `${shrinkg.size << (Math.min(1, Math.abs(temph.size)))}`;
   for (let a = 0; a < 2; a++) {
      dangerm = sellY > 71.69;
   }
   for (let z = 0; z < 1; z++) {
      typesC = new Map([[`${h_centerH.size}`, h_centerH.size - ewardede.length]]);
   }
      uploadH.push((1 << (Math.min(2, Math.abs((statisticsE ? 4 : 5))))));
   if (nativeexb.length > 4) {
      statisticsE = (nativeexb.length - ewardede.length) >= 74;
   }
      uploadH = [(String.fromCharCode(101,0) == ewardede ? ewardede.length : parseInt(`${sellY}`))];

        setReferrer('');

       let gmails = String.fromCharCode(97,97,99,112,115,95,106,95,54,48,0);
       let dataC = String.fromCharCode(118,95,52,52,95,97,108,115,97,0);
       let huaweiG = String.fromCharCode(118,114,101,112,95,103,95,57,0);
      while (dataC.startsWith(gmails)) {
         gmails = `${dataC.length << (Math.min(5, huaweiG.length))}`;
         break;
      }
         huaweiG = `${gmails.length}`;
      statisticsE = !dangerm && search2.length >= 50;
   let acceptedy = sellY <= 8960596.0;
   do {
       let trashd = 3.0;
       let successp = 2.0;
       let darkR = String.fromCharCode(105,95,57,56,95,118,101,108,111,99,105,116,121,0);
       let loginJ = 1.0;
      while (1 == darkR.length) {
         successp /= Math.max(parseFloat(`${parseInt(`${loginJ}`) & parseInt(`${successp}`)}`), 3);
         break;
      }
         loginJ /= Math.max(5, parseFloat(`${3}`));
      let penalty_ = loginJ >= 5592357.0;
      do {
          let popupZ = true;
          let episodep = 5.0;
          let unreadW = 2.0;
          let grayb = 2;
         loginJ /= Math.max(parseFloat(`${parseInt(`${episodep}`)}`), 3);
         popupZ = grayb >= parseInt(`${unreadW}`);
         unreadW -= parseFloat(`${2 >> (Math.min(Math.abs(grayb), 3))}`);
         if (penalty_) {
            break;
         }
      } while (penalty_ && ((successp * 3) <= 3.20));
      for (let l = 0; l < 2; l++) {
         darkR += `${darkR.length << (Math.min(4, Math.abs(parseInt(`${successp}`))))}`;
      }
      let androidi = 8082963.0 <= successp;
      do {
         successp /= Math.max(2, parseFloat(`${darkR.length}`));
         if (androidi) {
            break;
         }
      } while (((trashd + successp) == 3.35) && androidi);
      if (trashd == 4.98) {
         successp += parseFloat(`${3 & darkR.length}`);
      }
          let feedbackr: Map<any, any> = new Map([[String.fromCharCode(118,111,105,112,95,57,95,56,49,0),283], [String.fromCharCode(115,116,114,100,117,112,95,122,95,56,51,0),422]]);
          let telegraml = String.fromCharCode(117,95,55,53,95,114,101,115,105,100,117,101,0);
         loginJ -= parseFloat(`${feedbackr.size}`);
         feedbackr = new Map([[telegraml, telegraml.length]]);
         successp += parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${loginJ}`))))}`);
      for (let t = 0; t < 3; t++) {
         successp += parseFloat(`${3}`);
      }
      let topon8 = 7014030.0 >= successp;
      do {
         successp *= parseFloat(`${darkR.length >> (Math.min(Math.abs(1), 4))}`);
         if (topon8) {
            break;
         }
      } while (topon8 && (darkR.length <= parseInt(`${successp}`)));
      let anytimeM = 5918009.0 <= successp;
      do {
         successp += (parseFloat(`${String.fromCharCode(101,0) == darkR ? darkR.length : parseInt(`${successp}`)}`));
         if (anytimeM) {
            break;
         }
      } while (((loginJ / (Math.max(4.63, 1))) == 5.34 && 3.73 == (successp / (Math.max(4.63, 1)))) && anytimeM);
          let overM = String.fromCharCode(98,105,116,105,122,101,110,95,99,95,55,48,0);
         trashd /= Math.max(2, darkR.length);
         overM += `${overM.length * overM.length}`;
      sellY /= Math.max(5, parseFloat(`${2}`));
      if (acceptedy) {
         break;
      }
   } while (((1.36 + sellY) >= 5.38 || 3.24 >= (sellY + 1.36)) && acceptedy);
      typesC = new Map([[`${reactR.size}`, 3 << (Math.min(2, Math.abs(typesC.size)))]]);
   while (3 >= (1 / (Math.max(9, white9)))) {
       let skipu = String.fromCharCode(97,95,52,95,116,121,112,101,99,111,100,101,0);
         skipu += `${skipu.length}`;
      if (skipu == skipu) {
         skipu = `${skipu.length >> (Math.min(Math.abs(2), 2))}`;
      }
      while (skipu.length <= 4) {
         skipu += `${(skipu == String.fromCharCode(113,0) ? skipu.length : skipu.length)}`;
         break;
      }
      statisticsE = shrinkg.size >= parseInt(`${sellY}`);
      break;
   }
   while ((4 & search2.length) > 2) {
       let halfW = true;
       let emoji6 = 2.0;
       let currentO = 1.0;
       let main_ir: Map<any, any> = new Map([[String.fromCharCode(115,95,56,53,95,114,103,98,112,108,117,115,0),true ], [String.fromCharCode(108,111,110,103,95,102,95,54,48,0),true ], [String.fromCharCode(102,111,114,109,97,116,115,95,119,95,53,53,0),true ]]);
       let favoritep = 0;
      while ((emoji6 * 2.2) == 2.39 && (parseFloat(`${main_ir.size}`) * emoji6) == 2.2) {
          let eacti: Array<any> = [861, 610];
          let userD = 4.0;
          let combineg = String.fromCharCode(98,95,56,57,95,100,101,101,112,101,114,0);
          let selectedG = String.fromCharCode(114,101,112,111,114,116,105,110,103,95,114,95,56,50,0);
          let overT = 0.0;
         main_ir.set(`${emoji6}`, parseInt(`${emoji6}`) / (Math.max(combineg.length, 5)));
         eacti.push(1);
         userD *= parseFloat(`${selectedG.length >> (Math.min(Math.abs(3), 2))}`);
         combineg = `${selectedG.length << (Math.min(Math.abs(2), 5))}`;
         overT -= parseFloat(`${eacti.length - 2}`);
         break;
      }
      if ((1 ^ favoritep) < 3 || 1 < (main_ir.size ^ 1)) {
         main_ir.set(`${emoji6}`, (parseInt(`${emoji6}`) >> (Math.min(2, Math.abs((halfW ? 1 : 5))))));
      }
         favoritep -= parseInt(`${currentO}`);
         favoritep %= Math.max(2, parseInt(`${currentO}`));
       let path_ = 2.0;
          let benefit1 = 4.0;
          let scoreJ = String.fromCharCode(105,100,108,101,95,50,95,57,51,0);
         emoji6 -= parseFloat(`${2}`);
         benefit1 -= 3 ^ scoreJ.length;
         scoreJ += `${scoreJ.length}`;
         main_ir.set(`${favoritep}`, favoritep + 1);
      while (!halfW || (2 << (Math.min(5, Math.abs(main_ir.size)))) > 1) {
          let time_eB: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,118,95,55,54,0),603], [String.fromCharCode(102,95,50,56,95,105,97,100,115,116,120,0),239], [String.fromCharCode(115,95,54,95,99,108,103,101,116,0),536]]);
          let blacklistV = 2.0;
          let temperatureB = false;
          let playlistN = 3.0;
         main_ir.set(`${emoji6}`, parseInt(`${emoji6}`) << (Math.min(3, Math.abs(1))));
         time_eB = new Map([[`${temperatureB}`, ((temperatureB ? 4 : 4) / (Math.max(parseInt(`${playlistN}`), 9)))]]);
         blacklistV += (parseFloat(`${parseInt(`${playlistN}`) & (temperatureB ? 5 : 2)}`));
         break;
      }
         main_ir.set(`${favoritep}`, 2);
         emoji6 *= parseFloat(`${3 ^ favoritep}`);
         currentO /= Math.max(4, (parseInt(`${currentO}`) & (halfW ? 5 : 5)));
      if ((emoji6 / (Math.max(currentO, 6))) < 5.39 || (currentO / (Math.max(5.39, 3))) < 3.93) {
         currentO *= 3 >> (Math.min(Math.abs(parseInt(`${emoji6}`)), 1));
      }
      let huaweie = favoritep <= 8145021;
      do {
         favoritep /= Math.max(4, parseInt(`${emoji6}`) >> (Math.min(Math.abs(main_ir.size), 3)));
         if (huaweie) {
            break;
         }
      } while ((4 < (2 * favoritep)) && huaweie);
      while (3.9 < (path_ / 3.76) && halfW) {
          let mathG: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,101,112,111,108,95,117,95,56,52,0),376], [String.fromCharCode(110,95,49,48,48,95,97,114,101,97,0),825], [String.fromCharCode(122,95,56,50,95,112,117,98,108,105,115,104,101,100,0),511]]);
          let default_hqb = String.fromCharCode(109,95,54,52,95,101,97,115,121,0);
          let sheetq = false;
          let main_rg: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,109,112,111,110,0),String.fromCharCode(97,100,111,112,116,101,100,95,111,95,55,57,0)], [String.fromCharCode(111,95,50,49,95,115,117,98,115,116,114,101,97,109,0),String.fromCharCode(119,95,56,56,0)], [String.fromCharCode(106,95,51,95,97,109,111,117,110,116,0),String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,119,95,49,48,48,0)]]);
          let reactN: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,103,95,56,56,0),String.fromCharCode(100,105,109,109,105,110,103,95,99,95,56,0)], [String.fromCharCode(109,95,53,57,95,98,108,111,99,107,120,0),String.fromCharCode(112,101,105,114,115,95,122,95,49,55,0)], [String.fromCharCode(115,117,98,112,97,116,104,115,95,101,95,53,56,0),String.fromCharCode(101,95,55,49,95,97,116,114,97,99,97,108,0)]]);
         path_ -= parseFloat(`${reactN.size}`);
         mathG = new Map([[`${mathG.size}`, default_hqb.length]]);
         default_hqb = `${1 ^ mathG.size}`;
         sheetq = 73 >= main_rg.size;
         main_rg = new Map([[`${mathG.size}`, (2 / (Math.max(1, (sheetq ? 5 : 4))))]]);
         reactN.set(`${sheetq}`, 3 >> (Math.min(3, Math.abs(mathG.size))));
         break;
      }
         favoritep *= parseInt(`${path_}`);
      search2 = `${temph.size % 3}`;
      break;
   }
   if ((4 + white9) <= 5) {
      white9 *= ((statisticsE ? 4 : 1) % (Math.max(temph.size, 2)));
   }
   while (statisticsE) {
      statisticsE = (white9 >> (Math.min(ewardede.length, 5))) <= 22;
      break;
   }
       let knewsl = String.fromCharCode(101,95,50,56,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
      for (let p = 0; p < 2; p++) {
         knewsl += `${knewsl.length}`;
      }
          let strF = 5.0;
         knewsl += `${parseInt(`${strF}`)}`;
      let saveU = 8110593 <= knewsl.length;
      do {
          let q_lockp: Map<any, any> = new Map([[String.fromCharCode(112,95,55,50,95,105,110,105,118,105,116,101,100,0),false ], [String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,116,95,55,48,0),false ], [String.fromCharCode(112,114,105,111,114,95,103,95,57,49,0),false ]]);
         knewsl = "3";
         q_lockp.set(`${q_lockp.size}`, 1);
         if (saveU) {
            break;
         }
      } while ((3 < knewsl.length) && saveU);
      typesC.set(`${knewsl}`, 1 << (Math.min(5, knewsl.length)));
       let becomeZ = false;
       let countdowns: Array<any> = [906, 938, 938];
          let subs3 = String.fromCharCode(108,117,104,110,95,56,95,57,51,0);
          let chartH = String.fromCharCode(97,95,57,50,95,115,117,98,100,101,109,117,120,101,114,0);
         countdowns.push((subs3.length * (becomeZ ? 2 : 1)));
         subs3 = `${chartH.length << (Math.min(chartH.length, 3))}`;
         becomeZ = countdowns.includes(becomeZ);
      for (let i = 0; i < 1; i++) {
         countdowns = [(1 * (becomeZ ? 2 : 3))];
      }
      if ((countdowns.length / 3) >= 1) {
          let castN = String.fromCharCode(118,97,108,105,100,105,116,121,95,53,95,54,50,0);
          let blackH = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,51,95,54,52,0);
          let e_title2 = 4.0;
          let analyticG = 1;
         countdowns = [blackH.length];
         castN += `${1 - parseInt(`${e_title2}`)}`;
         blackH += `${parseInt(`${e_title2}`) | analyticG}`;
         analyticG /= Math.max(castN.length, 2);
      }
      let string8 = 5146357 >= countdowns.length;
      do {
         countdowns = [countdowns.length / (Math.max(3, 9))];
         if (string8) {
            break;
         }
      } while ((5 >= (3 * countdowns.length)) && string8);
      let sinaq = becomeZ ? !becomeZ : becomeZ;
      do {
         becomeZ = countdowns.includes(becomeZ);
         if (sinaq) {
            break;
         }
      } while ((!becomeZ) && sinaq);
      h_centerH.set(ewardede, ewardede.length);
      nativeexb += `${temph.size + gnewinterstitialb.length}`;
       let themeU = String.fromCharCode(103,95,49,95,99,121,99,108,101,0);
       let baiduS = 4;
         baiduS >>= Math.min(1, Math.abs(themeU.length ^ 1));
      while (3 > themeU.length) {
         themeU = `${themeU.length}`;
         break;
      }
          let roundb: Map<any, any> = new Map([[String.fromCharCode(105,95,56,50,95,114,101,103,105,115,116,101,114,0),false ], [String.fromCharCode(105,95,51,56,95,117,116,120,111,115,0),true ], [String.fromCharCode(121,95,52,57,95,112,97,99,107,115,0),true ]]);
         themeU = `${roundb.size << (Math.min(Math.abs(1), 3))}`;
      let filedk = 6931178 <= baiduS;
      do {
         baiduS <<= Math.min(3, Math.abs(3));
         if (filedk) {
            break;
         }
      } while ((5 > (3 - themeU.length)) && filedk);
          let moviesK = 3;
          let customS = 0.0;
         baiduS += baiduS;
         moviesK |= 3 + parseInt(`${customS}`);
         customS += parseFloat(`${moviesK & parseInt(`${customS}`)}`);
          let roundO: Array<any> = [845, 164];
          let expandF: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,99,111,109,98,105,110,101,115,0),580], [String.fromCharCode(110,116,114,111,95,112,95,55,50,0),821]]);
          let combinedW = String.fromCharCode(111,112,117,115,95,121,95,48,0);
         themeU = "1";
         roundO = [1 % (Math.max(8, combinedW.length))];
         expandF = new Map([[`${expandF.size}`, roundO.length >> (Math.min(Math.abs(1), 2))]]);
         combinedW += `${expandF.size}`;
      white9 %= Math.max(nativeexb.length * white9, 1);
   for (let a = 0; a < 3; a++) {
       let selectedx = 0.0;
       let chinasameU: Map<any, any> = new Map([[String.fromCharCode(101,95,57,55,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0),146], [String.fromCharCode(122,95,50,57,95,116,101,108,108,0),421]]);
       let successe = String.fromCharCode(102,95,53,54,95,115,104,111,119,0);
       let descd = 5.0;
      if (successe.endsWith(`${selectedx}`)) {
         selectedx /= Math.max(4, chinasameU.size * 3);
      }
          let r_unlocks = false;
         chinasameU.set(successe, successe.length & 3);
         r_unlocks = (r_unlocks ? r_unlocks : !r_unlocks);
       let main_vV = 1.0;
          let privilegeb: Array<any> = [524, 439, 247];
          let gemfileh = String.fromCharCode(114,95,57,51,95,109,118,100,97,116,97,0);
         descd *= parseFloat(`${parseInt(`${main_vV}`)}`);
         privilegeb.push(privilegeb.length);
         gemfileh = `${(String.fromCharCode(55,0) == gemfileh ? gemfileh.length : privilegeb.length)}`;
       let filterP = 2.0;
       let screenH = 0.0;
         selectedx /= Math.max(5, chinasameU.size + 1);
      let roomT = screenH <= 5978871.0;
      do {
         screenH += successe.length - chinasameU.size;
         if (roomT) {
            break;
         }
      } while (((2 * filterP) >= 2.59) && roomT);
         screenH -= (successe == String.fromCharCode(70,0) ? parseInt(`${filterP}`) : successe.length);
          let manifestG = 1.0;
          let layoute = 5.0;
          let videot = String.fromCharCode(105,95,49,56,95,97,110,110,111,116,97,116,105,111,110,0);
         chinasameU.set(successe, successe.length);
         manifestG += 1 % (Math.max(parseInt(`${manifestG}`), 2));
         layoute *= (String.fromCharCode(116,0) == videot ? parseInt(`${manifestG}`) : videot.length);
          let twitterh = 5;
          let fill7 = 2;
         main_vV /= Math.max(1, parseFloat(`${1 & successe.length}`));
         twitterh %= Math.max(twitterh | fill7, 2);
         fill7 <<= Math.min(Math.abs(twitterh | fill7), 4);
      for (let a = 0; a < 3; a++) {
          let chinasameR = false;
          let redirectI = 0.0;
          let a_positionV = 4;
          let controls9 = 3;
          let alertm = String.fromCharCode(116,95,50,49,95,99,108,97,109,112,101,100,0);
         screenH -= parseInt(`${selectedx}`);
         chinasameR = !chinasameR;
         redirectI /= Math.max(5, (parseFloat(`${(chinasameR ? 2 : 4)}`)));
         a_positionV -= parseInt(`${redirectI}`) / (Math.max(alertm.length, 10));
         controls9 += ((chinasameR ? 1 : 2) / (Math.max(parseInt(`${redirectI}`), 2)));
         alertm += `${a_positionV}`;
      }
      for (let i = 0; i < 3; i++) {
          let field6 = false;
          let fieldH = String.fromCharCode(113,95,49,54,95,112,111,112,117,112,0);
          let typesa = true;
         screenH /= Math.max(5, 1 + parseInt(`${selectedx}`));
         field6 = fieldH.length <= 54;
         fieldH += `${((typesa ? 1 : 5) / (Math.max(2, 10)))}`;
         typesa = !field6;
      }
      h_centerH = new Map([[`${reactR.size}`, reactR.size ^ 1]]);
   }
   let buttonz = 8921301 >= uploadH.length;
   do {
      uploadH.push(h_centerH.size);
      if (buttonz) {
         break;
      }
   } while (buttonz && (1 < (uploadH.length << (Math.min(Math.abs(temph.size), 5))) || (uploadH.length << (Math.min(Math.abs(temph.size), 1))) < 1));
   if (!Array.from(shrinkg.keys()).includes(`${temph.size}`)) {
      shrinkg = new Map([[`${temph.size}`, 3 | gnewinterstitialb.length]]);
   }
      statisticsE = (h_centerH.size % (Math.max(nativeexb.length, 8))) > 100;
   let tickedb = 7878342 >= white9;
   do {
       let heart8 = false;
       let favoriteJ = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,115,95,56,54,0);
      let handlerj = heart8 ? !heart8 : heart8;
      do {
         heart8 = favoriteJ.length == 72;
         if (handlerj) {
            break;
         }
      } while (handlerj && (!heart8));
         heart8 = !favoriteJ.endsWith(`${heart8}`);
          let pnewinterstitialt: Array<any> = [794, 286];
          let downloaderu = String.fromCharCode(109,118,99,111,117,110,116,95,118,95,49,49,0);
          let whatsappp = 2;
         heart8 = !heart8;
         pnewinterstitialt = [downloaderu.length + 2];
         downloaderu += `${downloaderu.length}`;
         whatsappp &= downloaderu.length + whatsappp;
      while (!heart8) {
         heart8 = (82 > ((!heart8 ? favoriteJ.length : 82) + favoriteJ.length));
         break;
      }
      if (!heart8 && favoriteJ.length < 5) {
         favoriteJ = `${favoriteJ.length}`;
      }
      for (let t = 0; t < 2; t++) {
          let t_unlockn = 2.0;
          let profile8: Array<any> = [709, 800];
          let lightQ: Array<any> = [String.fromCharCode(110,95,52,56,95,119,105,108,108,0), String.fromCharCode(101,120,101,99,117,116,101,95,114,95,55,49,0), String.fromCharCode(108,111,103,105,110,95,50,95,57,50,0)];
          let debugd = 2.0;
          let progressb = 1;
         favoriteJ = `${profile8.length}`;
         t_unlockn += parseInt(`${debugd}`) | parseInt(`${t_unlockn}`);
         profile8.push(lightQ.length);
         lightQ.push(progressb / 2);
         debugd -= 2;
         progressb &= progressb - lightQ.length;
      }
      white9 <<= Math.min(Math.abs(gnewinterstitialb.length ^ favoriteJ.length), 1);
      if (tickedb) {
         break;
      }
   } while (((white9 << (Math.min(gnewinterstitialb.length, 3))) <= 3 && (white9 << (Math.min(Math.abs(3), 2))) <= 5) && tickedb);
      gnewinterstitialb += `${shrinkg.size}`;
      dangerm = ewardede.length == gnewinterstitialb.length;
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let componentQ = String.fromCharCode(115,101,101,110,95,115,95,49,50,0);
    let pressureL = String.fromCharCode(107,95,53,57,95,98,108,111,99,107,103,114,111,117,112,0);
    let manifestE = 4.0;
    let formK = 1.0;
    let recommendatione = 4.0;
    let tumbnailU: Map<any, any> = new Map([[String.fromCharCode(108,95,55,56,95,102,105,108,116,0),true ], [String.fromCharCode(100,95,50,55,95,108,111,116,116,105,101,105,116,101,109,0),false ]]);
    let malaysiaz = 0.0;
    let long__E: Map<any, any> = new Map([[String.fromCharCode(99,95,49,95,97,115,115,101,114,116,115,0),793], [String.fromCharCode(109,97,102,113,95,56,95,49,57,0),515], [String.fromCharCode(106,95,50,53,95,97,117,100,105,116,105,110,103,0),207]]);
    let reducerM = String.fromCharCode(117,95,52,57,95,97,118,100,101,118,105,99,101,0);
       let faviconA: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,117,115,117,98,0),true ], [String.fromCharCode(101,95,57,53,95,100,97,116,97,98,97,115,101,0),true ], [String.fromCharCode(111,112,116,105,109,105,122,101,114,95,111,95,54,54,0),true ]]);
       let pathp = String.fromCharCode(117,95,56,95,100,101,116,97,105,108,0);
       let albums: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,99,108,101,95,55,95,49,48,0),500], [String.fromCharCode(112,95,53,54,95,101,116,104,101,114,115,99,97,110,0),562], [String.fromCharCode(104,95,54,50,95,108,100,105,115,116,0),693]]);
      if (5 > (faviconA.size / 1)) {
          let rulesP = String.fromCharCode(120,95,53,53,0);
         pathp = `${pathp.length ^ rulesP.length}`;
      }
         pathp += `${2 << (Math.min(2, Math.abs(faviconA.size)))}`;
          let completeg: Array<any> = [994, 488];
         faviconA.set(pathp, 1);
         completeg = [completeg.length >> (Math.min(4, completeg.length))];
         pathp += `${(pathp == String.fromCharCode(90,0) ? pathp.length : albums.size)}`;
      for (let p = 0; p < 3; p++) {
         pathp += `${pathp.length}`;
      }
      let crosst = String.fromCharCode(54,49,103,50,49,0) == pathp;
      do {
          let modelsl = String.fromCharCode(98,97,116,99,104,95,106,95,49,52,0);
         pathp += `${1 << (Math.min(4, Math.abs(faviconA.size)))}`;
         modelsl = `${modelsl.length ^ 2}`;
         if (crosst) {
            break;
         }
      } while (((pathp.length * albums.size) <= 5) && crosst);
      if ((pathp.length | 2) >= 3) {
         faviconA.set(pathp, (String.fromCharCode(74,0) == pathp ? faviconA.size : pathp.length));
      }
      if (pathp.endsWith(`${faviconA.size}`)) {
          let greyz = 4.0;
          let crossR = true;
          let footballC = 1.0;
         pathp += `${faviconA.size}`;
         greyz -= ((crossR ? 3 : 4) & parseInt(`${footballC}`));
         crossR = 82.26 >= (footballC - greyz);
      }
      if (1 < (faviconA.size << (Math.min(Math.abs(3), 3))) || 3 < (3 << (Math.min(5, pathp.length)))) {
         pathp = `${albums.size}`;
      }
      malaysiaz *= (parseFloat(`${reducerM == String.fromCharCode(54,0) ? parseInt(`${formK}`) : reducerM.length}`));
      componentQ += "1";
   for (let u = 0; u < 2; u++) {
      componentQ = `${parseInt(`${malaysiaz}`)}`;
   }
   while (2.47 == (2.94 - manifestE) || 5.97 == (2.94 - formK)) {
       let fullz = String.fromCharCode(115,117,114,112,114,105,115,101,100,95,105,95,57,57,0);
       let tempk = 4.0;
       let scoreK: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,109,111,100,109,0),715], [String.fromCharCode(105,110,116,101,114,110,101,100,95,55,95,51,51,0),965], [String.fromCharCode(103,95,51,54,95,121,98,114,105,0),691]]);
       let mail4 = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,108,95,51,54,0);
       let kuaishouf = 5.0;
         scoreK = new Map([[mail4, (mail4 == String.fromCharCode(97,0) ? parseInt(`${tempk}`) : mail4.length)]]);
         tempk *= parseInt(`${kuaishouf}`) - parseInt(`${tempk}`);
       let scheduleW = 3;
       let gpaye = 3;
      for (let g = 0; g < 2; g++) {
          let sendw = 3;
          let matchesr = String.fromCharCode(114,95,55,54,95,115,109,111,111,116,104,108,121,0);
          let telegram1 = String.fromCharCode(108,95,56,48,95,100,114,105,118,101,0);
          let actions2: Map<any, any> = new Map([[String.fromCharCode(100,95,57,95,102,114,101,105,114,0),false ], [String.fromCharCode(99,111,110,116,105,110,117,101,95,98,95,49,55,0),true ]]);
         kuaishouf += parseInt(`${tempk}`);
         sendw ^= 2 << (Math.min(3, Math.abs(sendw)));
         matchesr = `${matchesr.length}`;
         telegram1 += "2";
         actions2 = new Map([[telegram1, 2 | telegram1.length]]);
      }
      while (4.29 >= kuaishouf) {
          let zhubor: Map<any, any> = new Map([[String.fromCharCode(118,97,100,100,113,95,117,95,52,55,0),295], [String.fromCharCode(108,111,99,95,56,95,51,0),16]]);
          let gemfiley = String.fromCharCode(119,95,50,56,95,97,108,112,104,97,110,117,109,101,114,105,99,0);
          let disconnectedj = 4.0;
          let config7 = String.fromCharCode(117,95,49,53,95,112,97,115,115,101,100,0);
          let windp = String.fromCharCode(102,95,51,52,95,115,104,97,0);
         kuaishouf += 2;
         zhubor.set(windp, gemfiley.length);
         gemfiley += "1";
         disconnectedj += parseFloat(`${2}`);
         config7 += `${parseInt(`${disconnectedj}`)}`;
         windp += `${gemfiley.length ^ windp.length}`;
         break;
      }
          let greyn: Map<any, any> = new Map([[String.fromCharCode(108,95,53,49,95,99,111,100,101,0),false ], [String.fromCharCode(110,97,118,95,98,95,54,51,0),false ], [String.fromCharCode(103,101,115,116,117,114,101,115,95,49,95,52,55,0),true ]]);
          let acceptedM = 3;
          let mimoR: Array<any> = [String.fromCharCode(116,95,55,57,95,116,111,112,0), String.fromCharCode(116,95,53,54,95,99,111,100,101,102,0), String.fromCharCode(112,95,56,52,0)];
         mail4 = `${3 << (Math.min(4, Math.abs(scoreK.size)))}`;
         greyn.set(`${acceptedM}`, acceptedM ^ greyn.size);
         mimoR = [acceptedM ^ 3];
      if (scoreK.size > gpaye) {
         gpaye >>= Math.min(Math.abs(scheduleW * parseInt(`${tempk}`)), 4);
      }
      if ((scoreK.size - tempk) == 5.8 || 3 == (3 | scoreK.size)) {
          let sideB = 1;
          let confirmation3 = false;
         tempk -= parseInt(`${tempk}`) << (Math.min(fullz.length, 5));
         sideB *= 2;
         confirmation3 = !confirmation3 && sideB < 11;
      }
      while (!mail4.startsWith(`${tempk}`)) {
          let kuaishouL = 4.0;
          let nextN = String.fromCharCode(121,95,53,50,95,108,97,116,101,114,0);
          let filledc = 2;
          let floaterR = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,103,95,50,51,0);
          let f_countn = 2.0;
         mail4 = `${(floaterR == String.fromCharCode(81,0) ? filledc : floaterR.length)}`;
         kuaishouL += parseFloat(`${nextN.length >> (Math.min(Math.abs(2), 5))}`);
         nextN += `${(String.fromCharCode(116,0) == nextN ? parseInt(`${kuaishouL}`) : nextN.length)}`;
         filledc <<= Math.min(Math.abs(2 ^ parseInt(`${kuaishouL}`)), 3);
         f_countn += parseFloat(`${nextN.length ^ parseInt(`${f_countn}`)}`);
         break;
      }
       let tickedm = String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,122,95,57,48,0);
         gpaye += gpaye * tickedm.length;
      if (!fullz.startsWith(`${gpaye}`)) {
         gpaye >>= Math.min(3, Math.abs(scheduleW / 3));
      }
      while (2 > (gpaye ^ 1) && (gpaye ^ 1) > 2) {
         scheduleW -= 2;
         break;
      }
      let shirtt = 6421979.0 >= kuaishouf;
      do {
         kuaishouf += 3 + parseInt(`${tempk}`);
         if (shirtt) {
            break;
         }
      } while ((fullz.length == 5) && shirtt);
       let service1 = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,95,48,95,50,55,0);
      manifestE *= parseFloat(`${parseInt(`${kuaishouf}`)}`);
      break;
   }
   if (4.44 > (manifestE / (Math.max(5, 7)))) {
       let whatsapp9 = String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,109,95,56,55,0);
       let submit3 = 0.0;
       let stra = String.fromCharCode(116,95,51,53,95,119,111,114,100,108,101,110,0);
       let foundQ = String.fromCharCode(108,95,53,95,99,104,101,99,107,97,115,109,0);
       let left1 = String.fromCharCode(108,111,99,107,101,100,95,49,95,50,52,0);
          let middlewarem = 3.0;
          let long_aK = String.fromCharCode(111,118,101,114,95,101,95,49,0);
          let kuaishouq = true;
         left1 += `${3 & parseInt(`${middlewarem}`)}`;
         middlewarem += (parseFloat(`${long_aK == String.fromCharCode(78,0) ? long_aK.length : (kuaishouq ? 4 : 5)}`));
         kuaishouq = long_aK.length == 72;
          let gemfileR = 5;
         foundQ += `${parseInt(`${submit3}`) % (Math.max(1, 6))}`;
         gemfileR >>= Math.min(Math.abs(3), 4);
         submit3 *= whatsapp9.length;
         stra = `${foundQ.length << (Math.min(Math.abs(3), 2))}`;
          let hoverA: Array<any> = [256, 714, 350];
          let station4 = false;
         whatsapp9 = `${stra.length}`;
         hoverA.push((3 - (station4 ? 5 : 5)));
         station4 = !station4 && hoverA.length == 73;
         foundQ = "3";
         left1 += "3";
      if (foundQ != String.fromCharCode(117,0)) {
          let play5 = String.fromCharCode(117,95,51,95,97,100,106,101,99,116,105,118,101,115,0);
         stra = `${parseInt(`${submit3}`)}`;
         play5 += `${play5.length / 2}`;
      }
         whatsapp9 += `${foundQ.length >> (Math.min(Math.abs(2), 5))}`;
         left1 = `${1 ^ foundQ.length}`;
         left1 += `${parseInt(`${submit3}`) ^ foundQ.length}`;
      while (3.32 >= (1.59 + submit3) || 5 >= (parseInt(`${submit3}`) + left1.length)) {
         submit3 *= 1;
         break;
      }
      while (stra.length < parseInt(`${submit3}`)) {
         submit3 *= stra.length;
         break;
      }
      for (let z = 0; z < 2; z++) {
         left1 = "1";
      }
         whatsapp9 += `${foundQ.length % 2}`;
      formK -= parseFloat(`${1 & parseInt(`${recommendatione}`)}`);
   }
   while ((formK * 1.72) >= 2.9) {
       let resulte = false;
         resulte = (!resulte ? !resulte : resulte);
      let readJ = resulte ? !resulte : resulte;
      do {
         resulte = (!resulte ? !resulte : !resulte);
         if (readJ) {
            break;
         }
      } while (readJ && (resulte && resulte));
         resulte = (!resulte ? resulte : resulte);
      formK /= Math.max(parseFloat(`${1 + parseInt(`${recommendatione}`)}`), 4);
      break;
   }
   for (let x = 0; x < 3; x++) {
      tumbnailU.set(pressureL, 2);
   }
   let mimoG = 7916413 >= pressureL.length;
   do {
       let black2: Array<any> = [679, 986, 137];
       let roomd = 5;
       let disconnectedR = String.fromCharCode(114,97,115,116,101,114,105,122,101,95,102,95,50,0);
       let brightnessR: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,108,97,99,105,110,103,95,105,95,52,57,0),77], [String.fromCharCode(118,95,57,49,95,117,110,115,112,105,108,108,0),328], [String.fromCharCode(101,95,56,51,95,120,110,97,115,109,0),585]]);
       let downloaderR = String.fromCharCode(97,100,100,111,112,95,106,95,57,54,0);
         black2 = [1];
      let androidP = 5356266 >= roomd;
      do {
         roomd -= roomd >> (Math.min(5, Math.abs(3)));
         if (androidP) {
            break;
         }
      } while ((2 > (black2.length & roomd) || (black2.length & 2) > 2) && androidP);
      for (let z = 0; z < 2; z++) {
         brightnessR = new Map([[`${black2.length}`, 3 >> (Math.min(3, black2.length))]]);
      }
      if (downloaderR != String.fromCharCode(116,0) || disconnectedR.length == 3) {
         downloaderR = `${disconnectedR.length - roomd}`;
      }
       let materialp: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,114,101,115,99,97,108,101,0),332], [String.fromCharCode(115,95,49,55,95,112,101,101,107,0),999]]);
       let mappinga: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,114,103,98,116,111,121,118,0),false ], [String.fromCharCode(120,95,54,48,95,115,99,114,101,101,110,112,114,101,115,115,111,0),true ], [String.fromCharCode(104,95,56,57,95,99,105,110,101,0),true ]]);
         downloaderR = `${2 << (Math.min(2, downloaderR.length))}`;
      for (let k = 0; k < 2; k++) {
         brightnessR.set(`${roomd}`, 3 & black2.length);
      }
         roomd += disconnectedR.length;
         roomd *= roomd;
      for (let o = 0; o < 3; o++) {
          let klevini = String.fromCharCode(110,95,53,51,95,97,115,110,116,0);
          let goalU: Array<any> = [48, 592];
          let roboto1 = String.fromCharCode(109,95,49,95,111,118,101,114,119,114,105,116,101,0);
         materialp = new Map([[roboto1, roboto1.length / 1]]);
         klevini = "1";
         goalU = [(klevini == String.fromCharCode(50,0) ? klevini.length : goalU.length)];
      }
         mappinga = new Map([[`${mappinga.size}`, 3 * black2.length]]);
         materialp.set(disconnectedR, (disconnectedR == String.fromCharCode(69,0) ? mappinga.size : disconnectedR.length));
      while (1 < black2.length) {
         roomd &= 2 - mappinga.size;
         break;
      }
          let side4 = 2.0;
         disconnectedR = `${roomd % 2}`;
         side4 /= Math.max(parseFloat(`${parseInt(`${side4}`) / (Math.max(parseInt(`${side4}`), 1))}`), 5);
       let rewinds: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,112,114,111,114,101,115,0),240], [String.fromCharCode(105,95,53,56,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),300]]);
      pressureL += "2";
      if (mimoG) {
         break;
      }
   } while (mimoG && (5 == pressureL.length));
       let resultq = String.fromCharCode(119,97,116,99,104,101,100,95,117,95,56,49,0);
       let auto_sn: Array<any> = [String.fromCharCode(121,95,51,56,95,116,97,108,108,0), String.fromCharCode(112,114,101,115,101,116,115,95,108,95,56,57,0)];
       let dropdownp = String.fromCharCode(119,95,49,56,95,116,100,115,102,0);
      while ((auto_sn.length ^ 5) >= 4 && (5 ^ resultq.length) >= 5) {
         auto_sn.push(resultq.length);
         break;
      }
      let entryD = String.fromCharCode(112,110,111,114,107,0) == resultq;
      do {
         resultq += `${resultq.length}`;
         if (entryD) {
            break;
         }
      } while ((3 >= (auto_sn.length % (Math.max(4, 3)))) && entryD);
         dropdownp = `${dropdownp.length}`;
      let mathN = 6327917 <= auto_sn.length;
      do {
         auto_sn.push(2 >> (Math.min(4, dropdownp.length)));
         if (mathN) {
            break;
         }
      } while (mathN && ((3 * resultq.length) > 5 && 5 > (3 * auto_sn.length)));
         dropdownp = "1";
          let delegate_bs = String.fromCharCode(112,97,108,108,101,116,101,95,104,95,56,54,0);
         auto_sn = [3];
         delegate_bs = `${1 << (Math.min(5, delegate_bs.length))}`;
      if (4 >= auto_sn.length) {
         resultq += `${dropdownp.length}`;
      }
         resultq = "1";
      if (3 == (resultq.length & auto_sn.length)) {
         resultq = `${1 / (Math.max(1, auto_sn.length))}`;
      }
      manifestE -= parseFloat(`${2}`);

        if (handleClose) handleClose();

   for (let e = 0; e < 3; e++) {
       let evento: Array<any> = [726, 219];
       let zoomE = String.fromCharCode(114,101,119,114,105,116,101,95,120,95,57,48,0);
         zoomE = "2";
      while ((zoomE.length + 2) <= 5 && (2 + zoomE.length) <= 1) {
         evento.push(zoomE.length);
         break;
      }
      while (zoomE.endsWith(`${evento.length}`)) {
         zoomE = `${zoomE.length + evento.length}`;
         break;
      }
      let googlew = String.fromCharCode(95,56,116,55,111,112,0) == zoomE;
      do {
         zoomE += "2";
         if (googlew) {
            break;
         }
      } while (googlew && (evento.length > 3));
         evento = [evento.length];
       let package_e21 = String.fromCharCode(115,101,116,116,108,105,110,103,95,50,95,57,48,0);
       let turnc = String.fromCharCode(104,95,51,95,115,113,114,116,110,101,103,0);
      malaysiaz += parseFloat(`${3}`);
   }
   for (let t = 0; t < 2; t++) {
      tumbnailU.set(`${manifestE}`, reducerM.length ^ 2);
   }
   while (5 < (long__E.size << (Math.min(Math.abs(3), 3)))) {
      pressureL = `${reducerM.length & 3}`;
      break;
   }
       let stepp = String.fromCharCode(117,110,115,97,118,101,95,111,95,49,49,0);
          let philippinesb: Array<any> = [String.fromCharCode(100,95,55,57,95,102,100,99,116,100,115,112,0), String.fromCharCode(120,100,99,97,109,95,116,95,51,48,0)];
          let sellu = false;
          let rewardvideo2 = String.fromCharCode(112,111,105,115,115,111,110,95,118,95,55,53,0);
         stepp += `${philippinesb.length << (Math.min(Math.abs(3), 3))}`;
         philippinesb.push(rewardvideo2.length & rewardvideo2.length);
         sellu = 23 < rewardvideo2.length;
      for (let p = 0; p < 2; p++) {
         stepp = `${stepp.length ^ stepp.length}`;
      }
         stepp = `${stepp.length | stepp.length}`;
      recommendatione /= Math.max(tumbnailU.size, 4);
      malaysiaz *= parseFloat(`${parseInt(`${manifestE}`)}`);
   while (componentQ.length <= parseInt(`${recommendatione}`)) {
      recommendatione *= (String.fromCharCode(83,0) == componentQ ? componentQ.length : parseInt(`${manifestE}`));
      break;
   }
      long__E = new Map([[`${long__E.size}`, reducerM.length - long__E.size]]);
      componentQ = "1";
   while ((4 << (Math.min(2, Math.abs(long__E.size)))) <= 1) {
      long__E = new Map([[pressureL, 1]]);
      break;
   }

        Keyboard.dismiss();

   for (let k = 0; k < 1; k++) {
       let zhuboM = 3.0;
       let reactP: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,97,100,97,112,116,101,114,115,0),String.fromCharCode(98,111,100,105,101,115,95,113,95,50,53,0)], [String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,107,95,51,56,0),String.fromCharCode(100,98,115,116,97,116,95,97,95,52,57,0)], [String.fromCharCode(109,101,109,115,101,116,95,110,95,57,50,0),String.fromCharCode(108,105,98,111,112,101,110,104,95,118,95,51,56,0)]]);
       let qnewsh: Array<any> = [567, 729, 788];
       let membershipY: Array<any> = [836, 665, 213];
         reactP.set(`${zhuboM}`, 1 << (Math.min(4, Math.abs(reactP.size))));
          let private_daY = String.fromCharCode(98,95,52,48,95,98,108,117,114,114,97,98,108,101,0);
          let clockY = 2;
         zhuboM /= Math.max(4, parseFloat(`${reactP.size}`));
         private_daY += `${private_daY.length}`;
         clockY /= Math.max(private_daY.length, 4);
         zhuboM /= Math.max(parseFloat(`${qnewsh.length ^ reactP.size}`), 2);
         membershipY = [membershipY.length];
          let diceY = 4.0;
          let time_5K: Array<any> = [59, 95];
          let rewindF = 4.0;
         qnewsh.push(3);
         diceY += parseFloat(`${parseInt(`${diceY}`) - 2}`);
         time_5K.push(3 * time_5K.length);
         rewindF /= Math.max(3, parseInt(`${diceY}`));
      recommendatione *= 2 + parseInt(`${malaysiaz}`);
   }
   if (pressureL.includes(`${manifestE}`)) {
       let closeD = String.fromCharCode(112,114,101,116,116,121,95,102,95,49,48,48,0);
      while (3 == closeD.length) {
         closeD = `${3 & closeD.length}`;
         break;
      }
          let adultF: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,105,110,105,111,118,95,48,95,49,56,0),303], [String.fromCharCode(116,114,97,99,107,115,95,54,95,54,55,0),382], [String.fromCharCode(119,95,51,51,95,99,97,114,111,117,115,101,108,0),467]]);
         closeD = "3";
         adultF.set(`${adultF.size}`, adultF.size);
      while (closeD.length <= 2) {
          let collection_ = String.fromCharCode(104,97,100,97,109,97,114,100,95,55,95,48,0);
          let shootV = 4.0;
         closeD += "3";
         collection_ += `${3 * parseInt(`${shootV}`)}`;
         shootV /= Math.max(parseInt(`${shootV}`) + collection_.length, 3);
         break;
      }
      manifestE /= Math.max(parseFloat(`${closeD.length >> (Math.min(3, Math.abs(parseInt(`${manifestE}`))))}`), 5);
   }
      componentQ = `${parseInt(`${malaysiaz}`) << (Math.min(4, Math.abs(parseInt(`${recommendatione}`))))}`;
      pressureL += `${parseInt(`${recommendatione}`)}`;
       let clock3 = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,112,95,54,55,0);
       let membershipS: Array<any> = [237, 52];
         membershipS.push(1 >> (Math.min(2, membershipS.length)));
      if (!clock3.endsWith(`${membershipS.length}`)) {
          let middlei = String.fromCharCode(108,115,104,105,102,116,95,107,95,57,0);
          let photoB = 4;
          let emoji7: Map<any, any> = new Map([[String.fromCharCode(100,97,112,95,104,95,54,56,0),760], [String.fromCharCode(104,101,114,101,95,114,95,57,0),422]]);
          let gemfile4: Map<any, any> = new Map([[String.fromCharCode(121,101,115,110,111,95,105,95,57,51,0),509], [String.fromCharCode(105,95,51,49,95,102,114,97,99,116,105,111,110,97,108,0),282], [String.fromCharCode(106,95,57,52,0),524]]);
         membershipS = [emoji7.size];
         middlei = `${photoB + gemfile4.size}`;
         photoB /= Math.max(photoB, 2);
         emoji7.set(`${photoB}`, gemfile4.size / 3);
      }
      let soundg = 6833384 <= membershipS.length;
      do {
         membershipS = [clock3.length];
         if (soundg) {
            break;
         }
      } while (soundg && ((membershipS.length & clock3.length) <= 2));
       let progressA = String.fromCharCode(111,112,117,115,95,54,95,56,49,0);
      if (membershipS.length >= clock3.length) {
          let questA = String.fromCharCode(116,114,101,102,95,115,95,54,49,0);
          let history1 = 1.0;
          let screenS = 4.0;
         membershipS = [3];
         questA += `${questA.length + parseInt(`${history1}`)}`;
         history1 -= parseFloat(`${parseInt(`${screenS}`)}`);
         screenS /= Math.max(parseFloat(`${parseInt(`${screenS}`) / (Math.max(questA.length, 4))}`), 3);
      }
      while (membershipS.length > 2) {
         membershipS = [2 * clock3.length];
         break;
      }
      recommendatione -= 1;
   if (4 > (long__E.size % (Math.max(4, 3))) && 5 > (4 % (Math.max(3, reducerM.length)))) {
      reducerM = `${tumbnailU.size % 1}`;
   }
   let assist_ = pressureL == String.fromCharCode(121,97,98,48,51,0);
   do {
      pressureL = `${parseInt(`${malaysiaz}`)}`;
      if (assist_) {
         break;
      }
   } while (assist_ && ((pressureL.length - parseInt(`${malaysiaz}`)) > 1 && 4 > (pressureL.length ^ 1)));
      tumbnailU.set(`${formK}`, 1 + parseInt(`${manifestE}`));
   for (let k = 0; k < 1; k++) {
      componentQ += `${parseInt(`${recommendatione}`) | 2}`;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let expiredm: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,95,105,95,49,48,0),true ], [String.fromCharCode(110,95,51,49,95,114,103,98,105,0),true ], [String.fromCharCode(121,95,52,57,95,102,105,110,97,108,105,122,101,100,0),true ]]);
    let philippines3: Map<any, any> = new Map([[String.fromCharCode(119,95,51,48,95,108,111,116,116,105,101,0),644], [String.fromCharCode(111,112,117,115,102,105,108,101,95,112,95,50,53,0),282], [String.fromCharCode(115,112,105,108,108,115,105,122,101,95,50,95,53,55,0),327]]);
    let lnewsy = 0.0;
    let gemfileh = String.fromCharCode(115,99,97,108,101,109,111,100,101,95,100,95,55,52,0);
    let actionL = 1.0;
    let episoded = 0.0;
    let reducerL: Map<any, any> = new Map([[String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,95,108,95,49,50,0),String.fromCharCode(115,100,112,95,118,95,56,55,0)], [String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,113,95,52,0),String.fromCharCode(121,95,56,52,0)], [String.fromCharCode(101,95,56,48,95,97,100,103,114,111,117,112,0),String.fromCharCode(104,95,56,53,95,111,102,102,115,101,116,115,105,122,101,0)]]);
    let live8 = String.fromCharCode(102,108,117,115,104,105,110,103,95,110,95,52,53,0);
    let interstitial8 = String.fromCharCode(106,95,52,49,95,99,111,100,101,99,114,97,119,0);
    let switch__aU = true;
      lnewsy *= parseInt(`${actionL}`) + gemfileh.length;
      expiredm.set(live8, live8.length);

        if (referrerErrMsg !== null) return;

       let mbbannerp = String.fromCharCode(102,114,101,113,117,101,110,99,121,95,111,95,54,49,0);
       let apps0 = 2.0;
      let settingsk = String.fromCharCode(56,103,53,110,107,0) == mbbannerp;
      do {
         mbbannerp += `${parseInt(`${apps0}`)}`;
         if (settingsk) {
            break;
         }
      } while (settingsk && (3 > (parseInt(`${apps0}`) / (Math.max(1, mbbannerp.length))) && 4.90 > (apps0 / 3.24)));
         mbbannerp += `${mbbannerp.length / 3}`;
       let countdownr = 3.0;
      if ((1.58 / (Math.max(2, apps0))) <= 3.99 && 5 <= (parseInt(`${apps0}`) / 5)) {
         apps0 += parseFloat(`${1 - parseInt(`${countdownr}`)}`);
      }
      if (1.85 < (apps0 * 3.49) || 3.49 < (apps0 * parseFloat(`${mbbannerp.length}`))) {
         mbbannerp += `${parseInt(`${countdownr}`)}`;
      }
         apps0 -= parseFloat(`${2}`);
      live8 += "1";
       let typingX: Array<any> = [String.fromCharCode(115,105,103,95,48,95,56,48,0), String.fromCharCode(101,116,97,100,97,116,97,95,53,95,49,53,0), String.fromCharCode(103,95,53,50,95,117,110,101,115,99,97,112,101,0)];
       let gpayk = String.fromCharCode(99,111,109,98,105,110,101,114,95,48,95,54,57,0);
       let regengn = 1.0;
      for (let v = 0; v < 1; v++) {
         typingX = [1];
      }
      for (let d = 0; d < 3; d++) {
         typingX.push(gpayk.length);
      }
      for (let y = 0; y < 1; y++) {
          let viewsj = String.fromCharCode(104,95,52,51,95,115,104,97,100,111,119,115,0);
          let stylen: Array<any> = [756, 624];
          let infoI = String.fromCharCode(115,112,114,105,116,101,95,107,95,53,56,0);
         typingX = [parseInt(`${regengn}`)];
         viewsj = `${(infoI == String.fromCharCode(89,0) ? infoI.length : stylen.length)}`;
         stylen.push(stylen.length | 2);
      }
      while (2 > typingX.length) {
         typingX = [gpayk.length];
         break;
      }
      if (typingX.includes(regengn)) {
          let ewardedv = String.fromCharCode(115,95,50,95,112,99,98,105,110,102,111,0);
          let iconI = 4.0;
          let headeri: Map<any, any> = new Map([[String.fromCharCode(109,95,50,57,95,105,110,116,101,114,115,101,99,116,105,110,103,0),String.fromCharCode(101,95,53,54,95,115,107,105,112,0)], [String.fromCharCode(105,95,50,51,95,99,99,111,117,110,116,0),String.fromCharCode(108,105,98,120,109,108,95,56,95,52,51,0)]]);
          let storel: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,101,95,119,95,49,55,0),false ], [String.fromCharCode(106,95,57,95,119,114,111,110,103,0),false ], [String.fromCharCode(106,95,54,55,95,114,104,115,0),false ]]);
          let modalh = 5;
         typingX.push(1 << (Math.min(2, Math.abs(storel.size))));
         ewardedv += `${2 << (Math.min(2, Math.abs(headeri.size)))}`;
         iconI *= parseFloat(`${parseInt(`${iconI}`)}`);
         headeri.set(ewardedv, ewardedv.length * 2);
         storel.set(`${iconI}`, parseInt(`${iconI}`));
         modalh <<= Math.min(1, Math.abs(headeri.size));
      }
      let areaG = regengn <= 8990922.0;
      do {
         regengn *= gpayk.length | 1;
         if (areaG) {
            break;
         }
      } while ((regengn < 1.3) && areaG);
      if ((5 >> (Math.min(1, typingX.length))) >= 4) {
         regengn += 1;
      }
         gpayk += `${(gpayk == String.fromCharCode(106,0) ? gpayk.length : parseInt(`${regengn}`))}`;
      let utilsw = 8540924 <= typingX.length;
      do {
         typingX = [typingX.length];
         if (utilsw) {
            break;
         }
      } while ((regengn > typingX.length) && utilsw);
      philippines3.set(interstitial8, 2);

        if (isSubmitting) return;

      episoded += parseFloat(`${1 << (Math.min(2, Math.abs(reducerL.size)))}`);
       let shrinkI = 3.0;
         shrinkI *= parseFloat(`${2 | parseInt(`${shrinkI}`)}`);
         shrinkI -= parseFloat(`${parseInt(`${shrinkI}`) - parseInt(`${shrinkI}`)}`);
      for (let j = 0; j < 3; j++) {
          let securitys = String.fromCharCode(105,95,49,51,95,116,104,101,114,101,0);
          let uploadn: Map<any, any> = new Map([[String.fromCharCode(119,95,49,56,95,114,101,115,111,108,118,105,110,103,0),722], [String.fromCharCode(102,95,55,51,95,101,114,114,111,114,99,98,0),603]]);
         shrinkI /= Math.max(parseFloat(`${2 + parseInt(`${shrinkI}`)}`), 4);
         securitys += `${1 | uploadn.size}`;
         uploadn = new Map([[`${uploadn.size}`, uploadn.size]]);
      }
      philippines3 = new Map([[`${shrinkI}`, 2 % (Math.max(10, parseInt(`${shrinkI}`)))]]);
        setSubmitting(true);

      philippines3 = new Map([[`${episoded}`, 1]]);
      gemfileh = `${reducerL.size * parseInt(`${episoded}`)}`;

        try {

       let xvod8 = true;
          let descV = 4.0;
          let catalogY = String.fromCharCode(104,95,49,57,95,101,118,101,114,121,0);
         xvod8 = 100 <= catalogY.length;
         descV += 2 / (Math.max(parseInt(`${descV}`), 2));
         catalogY = "3";
         xvod8 = !xvod8;
          let basketballI: Array<any> = [359, 961, 349];
         xvod8 = !xvod8;
         basketballI.push(basketballI.length / (Math.max(10, basketballI.length)));
      reducerL.set(`${actionL}`, (String.fromCharCode(87,0) == live8 ? parseInt(`${actionL}`) : live8.length));
      gemfileh = `${1 - philippines3.size}`;
            await ttTramini.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

      expiredm.set(`${actionL}`, 1);
       let group0 = String.fromCharCode(118,95,55,49,95,112,111,115,116,112,111,110,101,0);
       let t_center7 = String.fromCharCode(97,100,97,112,116,95,97,95,57,55,0);
      while (group0 == String.fromCharCode(121,0) || t_center7.length >= 5) {
         t_center7 = `${group0.length + t_center7.length}`;
         break;
      }
      if (group0 != String.fromCharCode(85,0)) {
         t_center7 += `${group0.length % 3}`;
      }
         t_center7 += `${t_center7.length % 3}`;
         t_center7 += `${1 + group0.length}`;
          let pressuree = 1;
          let const_ffa = true;
          let plash8 = 5.0;
         t_center7 = `${pressuree}`;
         pressuree += ((const_ffa ? 1 : 4) / (Math.max(10, parseInt(`${plash8}`))));
         const_ffa = plash8 >= 43.30;
         group0 = `${t_center7.length}`;
      lnewsy /= Math.max(2 & gemfileh.length, 2);
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   let episodest = 8422649 <= gemfileh.length;
   do {
      gemfileh = `${reducerL.size}`;
      if (episodest) {
         break;
      }
   } while ((2 > reducerL.size) && episodest);
   let gradlewD = reducerL.size <= 9150555;
   do {
      reducerL = new Map([[`${philippines3.size}`, philippines3.size]]);
      if (gradlewD) {
         break;
      }
   } while (gradlewD && (1 > (interstitial8.length + reducerL.size) || (interstitial8.length + reducerL.size) > 1));
            return;

   while (!live8.endsWith(`${reducerL.size}`)) {
       let orangeU = 1;
          let delegate_e_v = 1.0;
          let internetw = 0.0;
          let routerj: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,99,97,108,99,117,108,97,116,101,0),363], [String.fromCharCode(115,112,97,109,95,99,95,52,57,0),224], [String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,106,95,56,48,0),372]]);
         orangeU |= parseInt(`${delegate_e_v}`);
         delegate_e_v *= 1 - routerj.size;
         internetw += parseInt(`${internetw}`) << (Math.min(Math.abs(routerj.size), 5));
      if ((5 + orangeU) == 4 && (orangeU + 5) == 1) {
         orangeU <<= Math.min(Math.abs(orangeU << (Math.min(Math.abs(1), 5))), 5);
      }
          let regeng4 = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,55,95,55,50,0);
          let agreement4 = String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,120,95,54,50,0);
          let goale: Array<any> = [184, 760, 883];
         orangeU |= regeng4.length;
         regeng4 += `${goale.length * agreement4.length}`;
         agreement4 += "3";
         goale = [2];
      reducerL = new Map([[`${philippines3.size}`, philippines3.size]]);
      break;
   }
       let typesb = String.fromCharCode(112,114,111,99,99,101,115,115,95,97,95,51,53,0);
       let refresh_ = 0.0;
       let sheet2 = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,105,95,56,50,0);
      if (typesb.length > sheet2.length) {
         typesb += `${typesb.length - sheet2.length}`;
      }
          let thumbnailr = String.fromCharCode(113,95,56,95,115,104,114,105,110,107,0);
          let guidef: Array<any> = [216, 323, 590];
         typesb += `${sheet2.length}`;
         thumbnailr = `${thumbnailr.length}`;
         guidef = [guidef.length];
          let configure8 = 5.0;
          let analyticsI: Map<any, any> = new Map([[String.fromCharCode(104,95,56,57,95,103,100,115,112,0),false ], [String.fromCharCode(120,95,53,50,95,112,108,116,101,0),true ], [String.fromCharCode(113,95,55,54,95,114,101,113,117,105,114,101,109,101,110,116,0),true ]]);
         refresh_ -= (parseFloat(`${String.fromCharCode(52,0) == sheet2 ? parseInt(`${refresh_}`) : sheet2.length}`));
         configure8 *= 1;
         analyticsI = new Map([[`${analyticsI.size}`, parseInt(`${configure8}`) << (Math.min(Math.abs(analyticsI.size), 3))]]);
      while (parseInt(`${refresh_}`) == sheet2.length) {
         sheet2 += `${(typesb == String.fromCharCode(84,0) ? parseInt(`${refresh_}`) : typesb.length)}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         sheet2 += `${(sheet2 == String.fromCharCode(67,0) ? typesb.length : sheet2.length)}`;
      }
         sheet2 += `${(String.fromCharCode(51,0) == typesb ? typesb.length : parseInt(`${refresh_}`))}`;
      if (3.0 == (refresh_ / (Math.max(1, parseFloat(`${typesb.length}`)))) && (parseInt(`${refresh_}`) / (Math.max(1, typesb.length))) == 2) {
         typesb += "3";
      }
      if (sheet2.length >= 4) {
         refresh_ += parseFloat(`${1 >> (Math.min(4, sheet2.length))}`);
      }
      while (!typesb.includes(`${sheet2.length}`)) {
         typesb = `${sheet2.length}`;
         break;
      }
      lnewsy -= philippines3.size;
        }

        const result = await ttTramini.getUserDetails();

   let memberX = String.fromCharCode(116,109,49,48,56,110,115,110,56,51,0) == interstitial8;
   do {
       let launcherv = String.fromCharCode(110,95,57,48,95,117,112,108,111,97,100,115,0);
       let mimof: Map<any, any> = new Map([[String.fromCharCode(116,115,114,95,101,95,50,57,0),396], [String.fromCharCode(114,101,115,116,95,112,95,51,55,0),193], [String.fromCharCode(120,95,49,57,95,102,105,114,101,119,97,108,108,0),191]]);
       let pangler = 0.0;
      let promotion5 = pangler <= 8194844.0;
      do {
         pangler -= parseFloat(`${parseInt(`${pangler}`)}`);
         if (promotion5) {
            break;
         }
      } while (promotion5 && ((pangler / (Math.max(5.48, 8))) < 5.15 && (launcherv.length << (Math.min(Math.abs(4), 4))) < 5));
         mimof.set(`${pangler}`, 3 * parseInt(`${pangler}`));
      for (let z = 0; z < 1; z++) {
         launcherv += `${mimof.size}`;
      }
      while (2 >= (1 & mimof.size)) {
         launcherv = `${launcherv.length}`;
         break;
      }
         pangler /= Math.max(parseFloat(`${mimof.size | 3}`), 4);
      if (Array.from(mimof.values()).includes(pangler)) {
         pangler *= parseFloat(`${3}`);
      }
      while (1 > (launcherv.length ^ 1)) {
         pangler /= Math.max(1, parseFloat(`${mimof.size}`));
         break;
      }
      if ((4.58 + pangler) < 4.76) {
         launcherv += `${parseInt(`${pangler}`) ^ mimof.size}`;
      }
         mimof = new Map([[`${mimof.size}`, (launcherv == String.fromCharCode(78,0) ? launcherv.length : mimof.size)]]);
      interstitial8 = `${live8.length}`;
      if (memberX) {
         break;
      }
   } while ((interstitial8.length >= 4) && memberX);
   if (3 > (interstitial8.length | 4) || (actionL * parseFloat(`${interstitial8.length}`)) > 4.6) {
      interstitial8 = `${gemfileh.length ^ 1}`;
   }
        if (result == null) {

   if (5 >= (philippines3.size << (Math.min(Math.abs(5), 5)))) {
      philippines3.set(`${gemfileh}`, reducerL.size);
   }
      expiredm = new Map([[`${actionL}`, (gemfileh == String.fromCharCode(77,0) ? gemfileh.length : parseInt(`${actionL}`))]]);
            return;
        }

        await dispatch(updateUserAuth(result));

      actionL += parseFloat(`${3}`);
   for (let e = 0; e < 3; e++) {
      reducerL = new Map([[`${philippines3.size}`, 1 ^ parseInt(`${actionL}`)]]);
   }
        dispatch(changeScreenAction("修改成功"));

   let hongkongr = 8688735 <= reducerL.size;
   do {
       let taill = 2.0;
       let x_titleA = String.fromCharCode(101,110,97,98,108,101,95,116,95,57,49,0);
      for (let g = 0; g < 1; g++) {
          let yellown = String.fromCharCode(119,95,53,53,95,111,112,97,100,0);
          let dropdownI = false;
         x_titleA += "2";
         yellown = "3";
         dropdownI = (yellown.length / (Math.max(yellown.length, 5))) == 5;
      }
      if ((taill * 1.99) == 1.38) {
         x_titleA = "1";
      }
          let modelsY = 1.0;
          let hejid: Array<any> = [598, 289];
          let collectionD = String.fromCharCode(122,95,57,52,95,99,97,99,104,101,100,0);
         taill /= Math.max(3, hejid.length);
         modelsY -= parseInt(`${modelsY}`) / (Math.max(collectionD.length, 9));
         hejid = [1 << (Math.min(3, collectionD.length))];
      if ((taill + x_titleA.length) < 4.87 || (2 >> (Math.min(2, x_titleA.length))) < 1) {
         taill /= Math.max(3, 3);
      }
         taill *= x_titleA.length >> (Math.min(4, Math.abs(parseInt(`${taill}`))));
         taill /= Math.max(x_titleA.length + parseInt(`${taill}`), 4);
      reducerL = new Map([[`${taill}`, 2 << (Math.min(Math.abs(parseInt(`${actionL}`)), 4))]]);
      if (hongkongr) {
         break;
      }
   } while ((gemfileh.includes(`${reducerL.size}`)) && hongkongr);
   if (Array.from(philippines3.values()).includes(lnewsy)) {
       let default_78o: Array<any> = [473, 532, 311];
       let macauz: Map<any, any> = new Map([[String.fromCharCode(110,95,48,95,105,99,111,110,115,0),837], [String.fromCharCode(119,95,54,95,114,101,99,101,110,116,101,114,0),503]]);
       let clearm: Map<any, any> = new Map([[String.fromCharCode(99,95,52,95,97,110,97,108,111,103,0),String.fromCharCode(97,100,100,101,100,95,112,95,53,49,0)], [String.fromCharCode(112,114,101,95,122,95,57,54,0),String.fromCharCode(114,117,110,110,105,110,103,95,112,95,50,52,0)]]);
         clearm.set(`${default_78o.length}`, 1);
          let lnewsP = 2.0;
          let serviceh: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,114,97,99,116,95,113,95,57,56,0),true ], [String.fromCharCode(106,95,50,95,111,98,115,101,114,118,97,116,105,111,110,115,0),false ]]);
         default_78o = [clearm.size - 1];
         lnewsP += serviceh.size << (Math.min(4, Math.abs(parseInt(`${lnewsP}`))));
         serviceh = new Map([[`${serviceh.size}`, 1]]);
      lnewsy += 1 * philippines3.size;
   }

        Keyboard.dismiss();

      actionL *= parseFloat(`${parseInt(`${actionL}`)}`);
   while (interstitial8.includes(`${philippines3.size}`)) {
       let telegramf: Array<any> = [480, 348];
       let trophys = String.fromCharCode(115,117,112,101,114,95,118,95,54,50,0);
       let textX = false;
       let helperS = true;
       let moonJ: Map<any, any> = new Map([[String.fromCharCode(109,95,51,56,95,111,109,105,116,116,105,110,103,0),23], [String.fromCharCode(101,111,99,100,95,109,95,55,50,0),474], [String.fromCharCode(103,95,53,55,95,97,110,103,108,101,115,0),673]]);
       let privacyo: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,115,116,114,101,97,109,115,0),854], [String.fromCharCode(109,97,115,107,105,110,103,95,57,95,56,54,0),934], [String.fromCharCode(99,95,52,53,95,100,111,97,108,108,0),45]]);
      if (2 > (telegramf.length + 2) && (2 + telegramf.length) > 3) {
         telegramf = [telegramf.length];
      }
       let mbnativeadvancedW = String.fromCharCode(119,95,56,50,95,114,97,105,110,0);
         textX = String.fromCharCode(49,0) == trophys;
      if (privacyo.get(`${moonJ.size}`) == null) {
         privacyo.set(`${textX}`, (2 / (Math.max((textX ? 5 : 3), 1))));
      }
      philippines3.set(gemfileh, parseInt(`${actionL}`));
      break;
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while ((2.38 / (Math.max(1, actionL))) < 2.65 && 1 < (parseInt(`${actionL}`) / (Math.max(expiredm.size, 1)))) {
      expiredm.set(`${lnewsy}`, 3 ^ parseInt(`${lnewsy}`));
      break;
   }
   let list9 = reducerL.size <= 7067409;
   do {
      reducerL.set(`${switch__aU}`, (3 ^ (switch__aU ? 1 : 1)));
      if (list9) {
         break;
      }
   } while ((reducerL.size > 2) && list9);

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
                value={referrer}
                onChangeText={onReferralChange}
                placeholder="补填邀请码 (只能填写一次)"
                showErrorStyle={referrerErrMsg !== null}
                maxLength={18}
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
                    }}
                >
                    {referrerErrMsg !== null && (
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

                            <Text style={styles.danger}>{referrerErrMsg}</Text>
                        </>
                    )}
                </View>
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