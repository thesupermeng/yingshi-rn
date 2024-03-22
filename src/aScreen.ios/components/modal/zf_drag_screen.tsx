import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/a_switch";
import { updateUsernameState } from "@redux/actions/rk_filed_watch";
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
       let productO = String.fromCharCode(112,95,49,49,95,101,110,99,114,121,112,116,105,110,103,0);
    let anythinkL: Array<any> = [145, 584];
    let skipF = 0.0;
    let searchU = 5.0;
    let typingo = String.fromCharCode(117,95,55,55,95,99,111,112,121,0);
    let lessb = 4.0;
    let filed_: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,55,95,56,52,0),908], [String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,119,95,52,56,0),927], [String.fromCharCode(115,105,103,110,97,116,117,114,101,95,122,95,51,48,0),282]]);
    let combineY = String.fromCharCode(106,95,54,50,95,100,101,116,97,99,104,0);
    let loginS: Map<any, any> = new Map([[String.fromCharCode(108,101,97,115,116,95,56,95,55,54,0),String.fromCharCode(100,105,102,102,95,120,95,52,49,0)], [String.fromCharCode(115,95,53,57,95,117,110,105,102,111,114,109,115,0),String.fromCharCode(97,117,103,109,101,110,116,101,100,95,56,95,53,50,0)]]);
    let gifts = true;
    let description_9O = 4;
    let progressq = String.fromCharCode(99,104,97,114,95,102,95,49,55,0);
    let i_imagex = String.fromCharCode(100,110,115,95,102,95,54,53,0);
    let successn = true;
    let otherS = 0;
    let userE = 0.0;
    let fastforwardS = 1.0;
    let weiboF = false;
      lessb += ((gifts ? 5 : 1));
       let catalogj = 5.0;
       let pressureX = 3;
         pressureX -= parseInt(`${catalogj}`) ^ pressureX;
         pressureX *= pressureX / (Math.max(parseInt(`${catalogj}`), 10));
         catalogj += parseInt(`${catalogj}`);
       let viewerw = String.fromCharCode(103,95,50,55,95,109,105,115,109,97,116,99,104,101,115,0);
          let disconnected2 = true;
         catalogj += ((disconnected2 ? 4 : 5) % (Math.max(parseInt(`${catalogj}`), 7)));
      for (let t = 0; t < 2; t++) {
         pressureX >>= Math.min(Math.abs(2), 1);
      }
      loginS.set(`${lessb}`, parseInt(`${lessb}`));
   let episodesC = 8154643 >= filed_.size;
   do {
      filed_.set(typingo, 1 ^ typingo.length);
      if (episodesC) {
         break;
      }
   } while (((typingo.length >> (Math.min(Math.abs(1), 3))) <= 4 && 3 <= (1 >> (Math.min(4, typingo.length)))) && episodesC);
   for (let s = 0; s < 2; s++) {
       let teamM: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,102,95,52,55,0),String.fromCharCode(104,95,50,49,95,114,101,109,98,0)], [String.fromCharCode(105,109,112,95,97,95,49,57,0),String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,105,95,54,52,0)], [String.fromCharCode(97,98,115,111,108,117,116,101,95,106,95,54,51,0),String.fromCharCode(98,108,117,114,95,52,95,57,49,0)]]);
       let logo0 = String.fromCharCode(97,102,116,101,114,95,122,95,53,0);
       let description_mg = 1.0;
         logo0 = `${logo0.length | parseInt(`${description_mg}`)}`;
      let phoneV = description_mg >= 6777447.0;
      do {
         description_mg /= Math.max(parseFloat(`${logo0.length - 2}`), 3);
         if (phoneV) {
            break;
         }
      } while (phoneV && (1.62 == (description_mg - 4.77) || (2 - parseInt(`${description_mg}`)) == 1));
          let historya = String.fromCharCode(97,95,57,52,95,102,105,102,111,0);
          let buttone: Array<any> = [856, 247, 456];
          let dataB = 1.0;
         logo0 = `${teamM.size}`;
         historya += `${2 / (Math.max(2, buttone.length))}`;
         buttone.push(historya.length & parseInt(`${dataB}`));
         dataB /= Math.max(parseFloat(`${parseInt(`${dataB}`)}`), 2);
       let rank0 = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,52,95,49,53,0);
      let vignettef = rank0.length >= 7876082;
      do {
         rank0 += `${parseInt(`${description_mg}`)}`;
         if (vignettef) {
            break;
         }
      } while ((logo0.length > rank0.length) && vignettef);
         teamM.set(logo0, logo0.length);
       let type_red: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,101,114,95,110,95,54,51,0),String.fromCharCode(109,105,109,101,95,116,95,52,53,0)], [String.fromCharCode(103,95,55,49,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),String.fromCharCode(109,95,53,48,95,109,111,100,101,109,118,99,111,115,116,0)]]);
       let connection2: Map<any, any> = new Map([[String.fromCharCode(102,95,56,54,95,115,116,97,110,100,97,108,111,110,101,0),String.fromCharCode(115,116,97,108,101,95,98,95,57,50,0)], [String.fromCharCode(119,95,56,51,95,102,97,99,101,0),String.fromCharCode(118,95,57,54,95,98,97,116,99,104,101,100,0)], [String.fromCharCode(98,117,105,108,100,95,104,95,50,57,0),String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,105,95,54,56,0)]]);
      while (!Array.from(teamM.values()).includes(type_red.size)) {
          let gemfileN = String.fromCharCode(117,115,97,98,108,101,95,51,95,50,55,0);
         teamM = new Map([[`${connection2.size}`, connection2.size / (Math.max(rank0.length, 9))]]);
         gemfileN = `${gemfileN.length}`;
         break;
      }
       let signinupE: Array<any> = [797, 101, 19];
      typingo = "1";
   }
       let profileP: Array<any> = [343, 628];
       let modaly = 1;
      let actived = profileP.length >= 5278443;
      do {
          let blackU = String.fromCharCode(121,95,56,95,105,110,100,101,102,105,110,105,116,101,0);
          let r_locke = 3.0;
          let feedbackx: Map<any, any> = new Map([[String.fromCharCode(104,95,55,57,95,107,105,110,103,102,105,115,104,101,114,0),968], [String.fromCharCode(117,95,56,57,95,101,109,111,106,105,115,0),290], [String.fromCharCode(100,101,101,112,95,118,95,56,52,0),318]]);
         profileP = [feedbackx.size];
         blackU = `${blackU.length / 1}`;
         r_locke *= parseInt(`${r_locke}`);
         feedbackx.set(`${r_locke}`, blackU.length / (Math.max(3, 5)));
         if (actived) {
            break;
         }
      } while ((!profileP.includes(modaly)) && actived);
         profileP.push(profileP.length & modaly);
      if (4 < (2 - modaly)) {
         modaly += profileP.length;
      }
         profileP = [2 ^ modaly];
       let descF = String.fromCharCode(109,111,110,111,98,108,97,99,107,95,107,95,52,50,0);
       let activeF = String.fromCharCode(115,117,98,112,101,108,95,104,95,54,52,0);
      searchU *= (parseFloat(`${(gifts ? 1 : 4)}`));
   if (!gifts) {
       let minimize_ = 2.0;
          let type_gl = String.fromCharCode(110,119,105,115,101,95,102,95,50,56,0);
          let storeu = 1.0;
         minimize_ -= 3;
         type_gl += `${type_gl.length * parseInt(`${storeu}`)}`;
         storeu /= Math.max(1, 3 - type_gl.length);
          let projectB: Array<any> = [651, 386, 701];
          let save5 = String.fromCharCode(117,95,56,95,103,114,97,121,97,0);
         minimize_ += parseInt(`${minimize_}`);
         projectB = [projectB.length];
         save5 = "3";
          let expired7: Array<any> = [String.fromCharCode(115,109,105,109,101,95,103,95,53,56,0), String.fromCharCode(119,95,53,54,95,117,110,104,97,110,100,108,101,100,0)];
         minimize_ *= expired7.length;
      productO += `${(1 % (Math.max(7, (gifts ? 5 : 2))))}`;
   }
   for (let m = 0; m < 2; m++) {
      combineY = `${typingo.length >> (Math.min(Math.abs(3), 5))}`;
   }
       let service3 = true;
      while (service3) {
          let indicatorD = String.fromCharCode(118,105,115,98,108,101,95,112,95,56,48,0);
          let brightnessj: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,100,101,108,97,121,101,100,0),677], [String.fromCharCode(112,95,52,56,95,114,101,109,97,105,110,100,101,114,0),345], [String.fromCharCode(99,95,51,95,98,102,115,116,109,0),331]]);
          let rankJ = 2.0;
          let profileo = String.fromCharCode(109,95,51,57,95,100,113,117,97,110,116,0);
          let mutedP = String.fromCharCode(97,95,52,52,0);
         service3 = !indicatorD.endsWith(`${service3}`);
         indicatorD += `${mutedP.length & 1}`;
         brightnessj.set(`${rankJ}`, 3 >> (Math.min(1, profileo.length)));
         rankJ += profileo.length << (Math.min(Math.abs(1), 1));
         mutedP = `${profileo.length & mutedP.length}`;
         break;
      }
         service3 = !service3;
         service3 = !service3;
      anythinkL = [3 & typingo.length];
   if (1 < (4 >> (Math.min(1, anythinkL.length)))) {
      combineY = `${combineY.length ^ anythinkL.length}`;
   }
      filed_ = new Map([[`${anythinkL.length}`, description_9O]]);
   let referrer0 = i_imagex == String.fromCharCode(107,120,112,117,106,49,100,95,103,0);
   do {
      i_imagex = `${parseInt(`${lessb}`) + parseInt(`${searchU}`)}`;
      if (referrer0) {
         break;
      }
   } while ((i_imagex.endsWith(`${loginS.size}`)) && referrer0);
      searchU /= Math.max((parseFloat(`${String.fromCharCode(69,0) == productO ? productO.length : description_9O}`)), 2);
      filed_ = new Map([[`${loginS.size}`, parseInt(`${skipF}`) | 2]]);
   if (combineY.endsWith(`${lessb}`)) {
      combineY += `${progressq.length}`;
   }
      i_imagex += `${3 & parseInt(`${skipF}`)}`;
      typingo += `${filed_.size << (Math.min(Math.abs(1), 4))}`;

        setUsername(initialUsername);

   for (let l = 0; l < 3; l++) {
       let linkw = String.fromCharCode(114,102,102,116,102,95,115,95,53,55,0);
       let downloadingT = 3;
       let playD = String.fromCharCode(99,95,53,56,95,116,105,109,101,117,116,105,108,115,0);
         playD = `${downloadingT}`;
      let weibo6 = downloadingT <= 4917301;
      do {
          let modulet = String.fromCharCode(114,101,113,117,105,114,101,95,57,95,55,53,0);
          let changeL = String.fromCharCode(98,97,99,107,119,97,114,100,115,95,97,95,54,50,0);
          let layoutz = String.fromCharCode(117,95,49,48,48,95,116,114,105,103,103,101,114,0);
          let other0 = 3.0;
         downloadingT -= parseInt(`${other0}`) % 2;
         modulet += `${layoutz.length}`;
         changeL += `${layoutz.length}`;
         other0 += changeL.length ^ 3;
         if (weibo6) {
            break;
         }
      } while (((playD.length % 2) > 2) && weibo6);
         playD += "3";
      while (!playD.startsWith(`${downloadingT}`)) {
         downloadingT %= Math.max(4, linkw.length * downloadingT);
         break;
      }
          let appsL = String.fromCharCode(116,95,52,53,95,112,103,110,111,0);
          let logout0: Array<any> = [348, 353, 130];
         linkw += `${(appsL == String.fromCharCode(49,0) ? appsL.length : logout0.length)}`;
       let reducerb = 5;
       let h_lockH = 3.0;
       let whistleE = 5.0;
      if (!playD.startsWith(`${h_lockH}`)) {
         h_lockH /= Math.max(parseFloat(`${linkw.length << (Math.min(2, Math.abs(parseInt(`${whistleE}`))))}`), 2);
      }
         playD += `${parseInt(`${h_lockH}`)}`;
      successn = ((playD.length * (!successn ? 3 : playD.length)) > 3);
   }
   let middleD = i_imagex.length >= 9902784;
   do {
      i_imagex += "2";
      if (middleD) {
         break;
      }
   } while (middleD && (i_imagex.endsWith(`${searchU}`)));
      loginS.set(combineY, (combineY == String.fromCharCode(85,0) ? combineY.length : anythinkL.length));
   let episodesS = 7310208 <= i_imagex.length;
   do {
       let y_playerM: Map<any, any> = new Map([[String.fromCharCode(112,95,56,54,95,102,97,99,116,0),true ], [String.fromCharCode(114,95,53,48,95,117,110,100,101,114,114,117,110,0),true ], [String.fromCharCode(98,95,56,57,95,115,109,106,112,101,103,0),true ]]);
         y_playerM.set(`${y_playerM.size}`, y_playerM.size);
         y_playerM = new Map([[`${y_playerM.size}`, 2 | y_playerM.size]]);
      while (2 < (1 & y_playerM.size) || (y_playerM.size & y_playerM.size) < 1) {
         y_playerM.set(`${y_playerM.size}`, y_playerM.size & y_playerM.size);
         break;
      }
      i_imagex = `${parseInt(`${searchU}`) / 2}`;
      if (episodesS) {
         break;
      }
   } while ((2 == i_imagex.length) && episodesS);
       let reducerd = false;
       let commonJ: Array<any> = [658, 412, 381];
       let areal = 3;
         reducerd = !reducerd;
      if ((areal << (Math.min(commonJ.length, 1))) > 4) {
         commonJ = [2 % (Math.max(areal, 10))];
      }
         areal -= areal >> (Math.min(2, Math.abs(3)));
      let verticali = 8896983 >= commonJ.length;
      do {
          let videoK = true;
          let upgradeI = String.fromCharCode(99,104,97,114,115,101,116,95,57,95,48,0);
          let gemfilei: Array<any> = [790, 976];
          let backwardD: Map<any, any> = new Map([[String.fromCharCode(99,95,51,50,95,97,116,97,98,97,115,101,0),656], [String.fromCharCode(98,108,111,99,107,105,101,115,95,115,95,50,53,0),464], [String.fromCharCode(104,105,98,105,116,95,114,95,52,50,0),980]]);
         commonJ = [2 % (Math.max(9, upgradeI.length))];
         videoK = (69 >= ((videoK ? gemfilei.length : 69) << (Math.min(gemfilei.length, 5))));
         upgradeI = `${backwardD.size | 1}`;
         backwardD = new Map([[`${gemfilei.length}`, gemfilei.length >> (Math.min(Math.abs(2), 3))]]);
         if (verticali) {
            break;
         }
      } while (verticali && (commonJ.length < 4));
          let moduleM: Array<any> = [479, 843, 176];
          let zhengpianc = String.fromCharCode(120,95,56,53,95,109,115,114,108,101,100,101,99,0);
          let assistA = 1.0;
         areal <<= Math.min(2, Math.abs((areal ^ (reducerd ? 4 : 2))));
         moduleM = [parseInt(`${assistA}`)];
         zhengpianc = `${zhengpianc.length | 2}`;
         assistA -= (zhengpianc == String.fromCharCode(99,0) ? zhengpianc.length : moduleM.length);
      for (let t = 0; t < 1; t++) {
         commonJ = [commonJ.length];
      }
         commonJ = [(commonJ.length | (reducerd ? 3 : 5))];
      if (2 == (commonJ.length + 3)) {
          let smallQ = String.fromCharCode(111,118,101,114,117,115,101,95,54,95,57,57,0);
          let mathr = 3.0;
         areal ^= 3;
         smallQ = `${(smallQ == String.fromCharCode(108,0) ? smallQ.length : parseInt(`${mathr}`))}`;
         mathr *= smallQ.length >> (Math.min(Math.abs(3), 2));
      }
         commonJ.push(areal);
      filed_.set(`${successn}`, ((successn ? 1 : 2) / (Math.max(1, 9))));
      anythinkL.push((loginS.size << (Math.min(1, Math.abs((gifts ? 1 : 1))))));
   if (4 < description_9O) {
      productO += "2";
   }
   if (2 == (4 ^ anythinkL.length) || 3.52 == (skipF + 2.88)) {
       let launchV = String.fromCharCode(117,95,52,56,95,104,105,103,104,101,114,0);
       let unreadj = String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,100,95,49,55,0);
         unreadj += `${3 - launchV.length}`;
      while (launchV.length > unreadj.length) {
          let headerz = String.fromCharCode(115,117,98,98,108,111,99,107,95,99,95,49,57,0);
          let friendsu = String.fromCharCode(103,95,57,48,95,117,110,112,97,99,107,101,100,0);
          let thumbnail9: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,114,114,116,114,0),true ], [String.fromCharCode(108,95,55,50,95,114,101,100,105,114,101,99,116,111,114,0),true ], [String.fromCharCode(98,95,49,49,95,114,101,115,104,117,102,102,108,101,0),true ]]);
         unreadj += `${headerz.length}`;
         headerz = `${2 >> (Math.min(4, Math.abs(thumbnail9.size)))}`;
         friendsu = `${(String.fromCharCode(86,0) == friendsu ? thumbnail9.size : friendsu.length)}`;
         break;
      }
         unreadj = `${unreadj.length % 3}`;
          let aboutW: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,101,120,112,111,110,101,110,116,0),336], [String.fromCharCode(109,97,103,110,105,116,117,100,101,95,113,95,50,50,0),517], [String.fromCharCode(102,114,97,109,101,99,114,99,95,112,95,54,57,0),291]]);
         launchV = "3";
         aboutW.set(`${aboutW.size}`, aboutW.size);
      for (let g = 0; g < 2; g++) {
         launchV = `${unreadj.length}`;
      }
       let photor = false;
       let mathN = true;
      skipF += combineY.length % 1;
   }
   while (!Array.from(loginS.values()).includes(description_9O)) {
       let teamx = String.fromCharCode(99,104,97,110,103,101,115,95,102,95,57,50,0);
       let loadingr = String.fromCharCode(109,95,51,52,95,111,118,101,114,114,105,100,101,0);
       let castb = true;
          let helperX = String.fromCharCode(121,95,49,52,95,116,97,107,101,0);
         castb = loadingr.includes(`${castb}`);
         helperX += `${(helperX == String.fromCharCode(104,0) ? helperX.length : helperX.length)}`;
      if (!teamx.endsWith(`${castb}`)) {
         castb = loadingr.length > 72;
      }
         loadingr = `${teamx.length << (Math.min(Math.abs(3), 2))}`;
      while (teamx != String.fromCharCode(99,0)) {
         loadingr += `${loadingr.length}`;
         break;
      }
         teamx += `${teamx.length << (Math.min(5, loadingr.length))}`;
         loadingr += `${((castb ? 5 : 1) / (Math.max(2, 2)))}`;
      let dicer = String.fromCharCode(102,108,119,106,100,57,105,107,122,0) == teamx;
      do {
         teamx = "1";
         if (dicer) {
            break;
         }
      } while ((!loadingr.startsWith(teamx)) && dicer);
       let downloadero = String.fromCharCode(119,95,54,56,95,114,101,113,115,116,97,116,101,0);
       let sentryd = String.fromCharCode(116,119,105,99,101,95,114,95,49,48,48,0);
      for (let v = 0; v < 2; v++) {
         castb = loadingr == downloadero;
      }
      description_9O += progressq.length / 2;
      break;
   }
      description_9O += filed_.size;
      progressq = `${(productO == String.fromCharCode(102,0) ? productO.length : combineY.length)}`;
      i_imagex = `${((successn ? 5 : 3) / 2)}`;
   if ((typingo.length * parseInt(`${skipF}`)) < 2) {
      typingo = `${(i_imagex.length % (Math.max(4, (gifts ? 2 : 2))))}`;
   }
   let controlsf = successn ? !successn : successn;
   do {
      successn = combineY.length >= progressq.length;
      if (controlsf) {
         break;
      }
   } while (controlsf && (3 <= description_9O || (description_9O ^ 3) <= 1));
       let moono = String.fromCharCode(107,95,51,53,95,102,114,97,99,116,105,111,110,97,108,0);
       let iconw = String.fromCharCode(114,97,100,97,114,95,53,95,56,50,0);
      if (iconw.length > moono.length) {
          let starX: Array<any> = [830, 807, 898];
          let stationx = String.fromCharCode(103,111,108,100,95,49,95,54,57,0);
          let largey = 0;
          let subsC = String.fromCharCode(112,114,111,103,114,97,109,95,49,95,53,50,0);
          let controlY = String.fromCharCode(101,116,119,111,114,107,95,118,95,57,0);
         moono = `${2 / (Math.max(6, moono.length))}`;
         starX = [3];
         stationx += `${largey}`;
         largey %= Math.max(4, stationx.length % (Math.max(6, subsC.length)));
         subsC = `${controlY.length >> (Math.min(Math.abs(1), 5))}`;
         controlY = `${3 * starX.length}`;
      }
      let componentN = 5111174 <= moono.length;
      do {
         moono = "2";
         if (componentN) {
            break;
         }
      } while ((iconw.endsWith(`${moono.length}`)) && componentN);
         moono += `${iconw.length >> (Math.min(Math.abs(1), 2))}`;
         moono = `${(moono == String.fromCharCode(79,0) ? iconw.length : moono.length)}`;
      let o_titleP = iconw == String.fromCharCode(51,56,114,50,110,109,106,100,0);
      do {
          let leagueD = String.fromCharCode(109,95,50,53,95,98,116,110,0);
          let brightnessg = 1.0;
          let thailandw = String.fromCharCode(97,119,97,114,101,95,119,95,49,0);
          let placeholderJ: Array<any> = [239, 588, 352];
         iconw = `${(iconw == String.fromCharCode(113,0) ? iconw.length : placeholderJ.length)}`;
         leagueD += `${2 - leagueD.length}`;
         brightnessg -= parseFloat(`${leagueD.length - 1}`);
         thailandw = `${2 + thailandw.length}`;
         placeholderJ.push((leagueD == String.fromCharCode(122,0) ? leagueD.length : parseInt(`${brightnessg}`)));
         if (o_titleP) {
            break;
         }
      } while ((iconw.endsWith(`${moono.length}`)) && o_titleP);
         iconw += `${iconw.length}`;
      i_imagex += "1";
      loginS.set(`${skipF}`, 1);
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let combiner = String.fromCharCode(121,117,118,112,116,111,121,117,121,95,108,95,57,49,0);
    let downloadedw = 1.0;
    let video5 = 0.0;
    let store1 = String.fromCharCode(112,95,56,50,95,118,101,114,115,105,111,110,101,100,0);
    let download2: Array<any> = [String.fromCharCode(104,111,110,101,95,103,95,53,50,0), String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,108,95,49,48,0), String.fromCharCode(101,120,116,101,114,110,95,111,95,49,0)];
    let greenu: Array<any> = [String.fromCharCode(112,95,51,50,95,98,117,110,100,108,101,115,0), String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,106,95,50,0), String.fromCharCode(102,97,100,101,95,57,95,55,53,0)];
    let unselectedC: Map<any, any> = new Map([[String.fromCharCode(122,95,57,56,95,102,97,105,108,117,114,101,115,0),560], [String.fromCharCode(111,95,57,54,95,116,114,97,105,116,0),129], [String.fromCharCode(104,95,52,51,95,97,118,97,108,97,110,99,104,101,0),219]]);
    let headerZ = true;
    let routerQ: Map<any, any> = new Map([[String.fromCharCode(103,95,56,49,95,120,99,98,103,114,97,98,0),293], [String.fromCharCode(97,108,98,117,109,95,120,95,55,48,0),164]]);
    let renewD: Array<any> = [539, 468];
    let expandA = String.fromCharCode(98,105,116,115,113,112,95,119,95,53,56,0);
    let policyX = true;
    let chatS = 3.0;
    let placement5 = 4.0;
    let sliderh = String.fromCharCode(110,95,50,56,95,100,99,116,114,101,102,0);
   while ((5 + combiner.length) >= 3 && (video5 * 4.45) >= 3.2) {
       let dialogK = 2.0;
       let spinnerI = false;
       let custom_ = String.fromCharCode(98,95,50,55,95,97,108,112,104,97,110,117,109,0);
         custom_ = `${(custom_.length ^ (spinnerI ? 4 : 5))}`;
      if ((5.28 * dialogK) < 5.88 && (1 * parseInt(`${dialogK}`)) < 4) {
          let changee = String.fromCharCode(118,95,52,56,95,115,108,105,100,101,0);
          let controlsL = 0.0;
          let quest4 = 2;
          let fullE = 0;
          let vignetteg = String.fromCharCode(115,97,117,99,101,95,103,95,54,53,0);
         custom_ += `${custom_.length / 3}`;
         changee += "2";
         controlsL += changee.length;
         quest4 += 3 + vignetteg.length;
         fullE %= Math.max(2, 1);
         vignetteg += `${vignetteg.length}`;
      }
      if (1 == custom_.length) {
         spinnerI = spinnerI && custom_.length == 95;
      }
          let fullEc = 5.0;
          let commentf: Map<any, any> = new Map([[String.fromCharCode(118,95,55,54,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),false ], [String.fromCharCode(110,95,48,95,100,101,102,101,97,116,0),true ], [String.fromCharCode(109,97,99,95,112,95,55,53,0),true ]]);
         dialogK += parseFloat(`${parseInt(`${fullEc}`)}`);
         commentf.set(`${commentf.size}`, commentf.size);
         dialogK += parseFloat(`${1 ^ parseInt(`${dialogK}`)}`);
      if (!spinnerI) {
         spinnerI = !spinnerI;
      }
         dialogK *= (parseFloat(`${(spinnerI ? 1 : 5) / (Math.max(parseInt(`${dialogK}`), 7))}`));
      for (let y = 0; y < 2; y++) {
         spinnerI = !spinnerI;
      }
       let sheetK = 4.0;
       let containerX = 5.0;
      combiner += `${expandA.length}`;
      break;
   }
       let mappingO = false;
      for (let p = 0; p < 1; p++) {
         mappingO = mappingO && !mappingO;
      }
          let shirtH = true;
          let serviceZ = String.fromCharCode(116,95,57,52,95,109,106,112,101,103,97,0);
          let megaphonel = String.fromCharCode(97,116,111,109,105,99,111,112,115,95,111,95,52,0);
         mappingO = serviceZ.length > 30 && !shirtH;
         shirtH = megaphonel.length <= megaphonel.length;
         serviceZ = "3";
         mappingO = !mappingO;
      expandA += `${((headerZ ? 4 : 2))}`;
   let overlayT = 5255162 >= greenu.length;
   do {
       let w_lock2 = String.fromCharCode(118,95,55,56,95,98,105,111,0);
       let dataV = 3;
       let modeg = String.fromCharCode(121,95,57,55,95,112,101,114,109,117,116,101,115,0);
       let analytic1 = true;
       let friends1 = String.fromCharCode(105,110,111,100,101,115,95,108,95,51,54,0);
       let showS = String.fromCharCode(113,95,51,50,95,115,105,109,117,108,97,116,111,114,0);
      for (let h = 0; h < 3; h++) {
         dataV &= friends1.length;
      }
         modeg += `${((analytic1 ? 5 : 1))}`;
      for (let s = 0; s < 1; s++) {
          let homeo: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,100,95,104,95,55,0),String.fromCharCode(100,105,114,110,97,109,101,95,106,95,55,55,0)], [String.fromCharCode(120,95,51,55,95,109,98,97,102,102,0),String.fromCharCode(99,95,53,51,95,100,99,98,122,0)]]);
          let invitea: Array<any> = [16, 714];
          let arrowz = 3.0;
         friends1 = `${invitea.length % 3}`;
         homeo.set(`${arrowz}`, parseInt(`${arrowz}`) + homeo.size);
         invitea = [homeo.size << (Math.min(Math.abs(2), 2))];
      }
          let playZ = String.fromCharCode(108,95,52,54,95,105,110,116,101,103,101,114,105,102,121,0);
          let switch_fQ: Map<any, any> = new Map([[String.fromCharCode(120,95,55,57,0),true ], [String.fromCharCode(114,105,110,100,101,120,95,103,95,55,56,0),true ], [String.fromCharCode(105,110,102,108,105,103,104,116,95,114,95,50,0),true ]]);
          let fnewsZ = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,56,95,54,52,0);
         modeg = `${friends1.length % 2}`;
         playZ += `${switch_fQ.size}`;
         switch_fQ.set(fnewsZ, fnewsZ.length);
       let ranku = 4.0;
       let condensedB = 1.0;
         analytic1 = w_lock2.startsWith(`${dataV}`);
      for (let r = 0; r < 2; r++) {
         condensedB -= w_lock2.length;
      }
         friends1 += `${((analytic1 ? 1 : 3))}`;
      let routerQE = ranku >= 5700329.0;
      do {
         ranku += showS.length;
         if (routerQE) {
            break;
         }
      } while (routerQE && (ranku >= 1.85));
         w_lock2 = `${showS.length / (Math.max(3, 4))}`;
         showS += `${parseInt(`${ranku}`) % 3}`;
      greenu.push((combiner == String.fromCharCode(85,0) ? combiner.length : greenu.length));
      if (overlayT) {
         break;
      }
   } while ((!renewD.includes(greenu.length)) && overlayT);
   let backwardW = headerZ ? !headerZ : headerZ;
   do {
      headerZ = (((policyX ? renewD.length : 66) & renewD.length) < 66);
      if (backwardW) {
         break;
      }
   } while (backwardW && (1 < unselectedC.size || (unselectedC.size / 1) < 1));
   while (!policyX && 4 > expandA.length) {
      expandA += `${parseInt(`${downloadedw}`) % 2}`;
      break;
   }
      renewD.push((combiner == String.fromCharCode(56,0) ? combiner.length : renewD.length));
      headerZ = !store1.endsWith(`${policyX}`);
   let upgradeo = policyX ? !policyX : policyX;
   do {
      policyX = 58 >= combiner.length;
      if (upgradeo) {
         break;
      }
   } while ((!policyX) && upgradeo);
      combiner = `${greenu.length % 2}`;
   while (store1.length > 3) {
       let backgroundG = String.fromCharCode(122,95,52,48,95,99,101,110,116,101,114,0);
       let readj = String.fromCharCode(109,95,55,55,95,104,115,116,114,105,110,103,0);
       let googleU: Array<any> = [569, 925, 115];
       let disconnectedf = String.fromCharCode(103,111,112,104,101,114,95,105,95,55,53,0);
      let humidityq = 5820561 <= disconnectedf.length;
      do {
         disconnectedf += `${disconnectedf.length * backgroundG.length}`;
         if (humidityq) {
            break;
         }
      } while (humidityq && (4 >= readj.length));
      for (let c = 0; c < 3; c++) {
         googleU.push(1 << (Math.min(2, disconnectedf.length)));
      }
         disconnectedf = `${readj.length / (Math.max(1, 5))}`;
       let tooltips6 = 2.0;
       let streamingA = 1.0;
      for (let s = 0; s < 2; s++) {
         tooltips6 *= parseFloat(`${backgroundG.length}`);
      }
          let hongkong7 = 0;
         backgroundG += `${3 + parseInt(`${streamingA}`)}`;
         hongkong7 *= hongkong7 & 2;
         disconnectedf += `${disconnectedf.length + 1}`;
          let string7 = String.fromCharCode(101,95,49,55,95,98,97,99,107,108,105,103,104,116,0);
          let resendN = String.fromCharCode(108,95,50,54,95,99,111,100,101,99,114,97,119,0);
          let stringf: Array<any> = [420, 794];
         tooltips6 -= parseFloat(`${parseInt(`${tooltips6}`) & 1}`);
         string7 = `${string7.length}`;
         resendN += `${resendN.length}`;
         stringf = [stringf.length];
      if (1 > (disconnectedf.length << (Math.min(Math.abs(4), 3))) || (parseFloat(`${disconnectedf.length}`) + streamingA) > 5.63) {
         disconnectedf += `${readj.length | parseInt(`${tooltips6}`)}`;
      }
      let pingE = backgroundG.length <= 6740904;
      do {
          let twitterF = 0.0;
          let hooksc = false;
          let result2 = String.fromCharCode(97,110,115,119,101,114,95,57,95,49,0);
          let switch_w7P = String.fromCharCode(100,95,52,52,95,97,102,116,101,114,108,105,102,101,0);
         backgroundG += `${parseInt(`${streamingA}`) + parseInt(`${tooltips6}`)}`;
         twitterF *= parseInt(`${twitterF}`) % 1;
         hooksc = twitterF < 95.21 || result2.length < 14;
         result2 = `${(switch_w7P == String.fromCharCode(86,0) ? parseInt(`${twitterF}`) : switch_w7P.length)}`;
         if (pingE) {
            break;
         }
      } while (pingE && (5.38 >= (tooltips6 / (Math.max(parseFloat(`${backgroundG.length}`), 10))) && 3.23 >= (tooltips6 / (Math.max(5.38, 8)))));
      for (let q = 0; q < 2; q++) {
          let connectionN = 4.0;
          let typingi: Array<any> = [233, 908, 481];
          let leagueU: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,110,116,115,95,102,95,55,55,0),false ], [String.fromCharCode(120,95,57,57,95,99,108,101,97,114,115,0),false ]]);
          let homeW = 1.0;
         googleU.push(1 % (Math.max(9, parseInt(`${streamingA}`))));
         connectionN /= Math.max(1 ^ typingi.length, 4);
         typingi.push(2 | parseInt(`${homeW}`));
         leagueU = new Map([[`${leagueU.size}`, 3 | parseInt(`${homeW}`)]]);
      }
         tooltips6 /= Math.max(2, parseFloat(`${2 + disconnectedf.length}`));
      policyX = download2.length > readj.length;
      break;
   }
      greenu.push(1 << (Math.min(4, Math.abs(unselectedC.size))));

        if (handleClose) handleClose();

   while (video5 >= 3.25 && 4.63 >= (3.25 * video5)) {
       let modalu: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,111,95,50,54,0),String.fromCharCode(100,95,54,53,95,116,104,105,99,107,110,101,115,115,0)], [String.fromCharCode(111,118,101,114,118,105,101,119,95,109,95,50,48,0),String.fromCharCode(103,95,57,51,95,119,97,118,101,102,111,114,109,97,116,101,120,0)], [String.fromCharCode(121,118,99,111,110,102,105,103,95,120,95,55,52,0),String.fromCharCode(105,95,50,55,95,99,97,108,108,101,114,0)]]);
       let leftb = String.fromCharCode(122,95,50,50,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
       let moduleY = 0.0;
       let foundW = 4.0;
      while (1.40 >= moduleY) {
          let overG: Array<any> = [261, 808, 733];
         foundW /= Math.max(1, (parseFloat(`${leftb == String.fromCharCode(66,0) ? leftb.length : parseInt(`${foundW}`)}`)));
         overG = [overG.length | overG.length];
         break;
      }
         modalu.set(leftb, leftb.length);
          let hongkonge: Array<any> = [134, 532];
          let collection7 = 5;
          let forward2: Map<any, any> = new Map([[String.fromCharCode(102,95,49,95,112,117,114,101,0),725], [String.fromCharCode(122,95,49,48,95,101,109,98,101,100,100,101,100,0),586]]);
         moduleY /= Math.max(2 * hongkonge.length, 2);
         hongkonge = [1];
         collection7 /= Math.max(1 | forward2.size, 5);
         forward2.set(`${collection7}`, 2);
       let floaterd = true;
          let background4 = 4.0;
          let countdownS = String.fromCharCode(109,101,109,115,121,115,95,101,95,54,50,0);
          let thumbnailX = String.fromCharCode(102,95,49,51,95,102,105,108,108,0);
         foundW /= Math.max(3, parseFloat(`${parseInt(`${background4}`)}`));
         background4 /= Math.max(1, countdownS.length << (Math.min(1, thumbnailX.length)));
         countdownS = "1";
         thumbnailX += `${countdownS.length}`;
         foundW *= (parseFloat(`${parseInt(`${foundW}`) + (floaterd ? 5 : 2)}`));
      let zhuboe = floaterd ? !floaterd : floaterd;
      do {
          let downu = String.fromCharCode(102,95,51,54,95,99,111,109,112,111,115,101,0);
          let clubI = String.fromCharCode(114,95,57,53,95,114,101,97,108,108,111,99,0);
          let membershipm = String.fromCharCode(98,111,100,101,114,95,57,95,51,54,0);
          let fillG: Array<any> = [514, 647, 809];
         floaterd = String.fromCharCode(68,0) == clubI;
         downu += `${fillG.length * 2}`;
         clubI += `${membershipm.length}`;
         membershipm += `${membershipm.length}`;
         fillG.push(membershipm.length << (Math.min(1, fillG.length)));
         if (zhuboe) {
            break;
         }
      } while (zhuboe && (floaterd));
          let searchj: Array<any> = [String.fromCharCode(100,95,52,55,95,117,108,108,115,99,114,101,101,110,0), String.fromCharCode(102,95,53,49,0)];
          let changeJ: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,95,56,95,54,55,0),true ], [String.fromCharCode(110,95,52,57,95,97,99,116,105,111,110,0),true ]]);
         foundW *= (parseFloat(`${leftb.length | (floaterd ? 5 : 2)}`));
         searchj.push(2 * changeJ.size);
         changeJ = new Map([[`${changeJ.size}`, 1]]);
         foundW += parseFloat(`${modalu.size}`);
      if (5.43 == (foundW - parseFloat(`${modalu.size}`))) {
          let policyt = 3.0;
          let assistu = String.fromCharCode(105,95,57,48,95,114,101,99,111,110,0);
          let unselectedt = String.fromCharCode(118,99,100,97,116,97,95,55,95,50,56,0);
          let profileU = 3.0;
         modalu.set(`${moduleY}`, (parseInt(`${moduleY}`) & (floaterd ? 4 : 4)));
         policyt /= Math.max(unselectedt.length + parseInt(`${policyt}`), 4);
         assistu = `${1 | parseInt(`${policyt}`)}`;
         unselectedt = `${parseInt(`${profileU}`) % (Math.max(unselectedt.length, 8))}`;
         profileU /= Math.max(parseInt(`${policyt}`) | assistu.length, 3);
      }
      while (5.65 >= (2.10 / (Math.max(1, moduleY)))) {
         moduleY /= Math.max(1, parseInt(`${moduleY}`) % (Math.max(3, 4)));
         break;
      }
         floaterd = 45.86 > moduleY;
      video5 -= 1 >> (Math.min(Math.abs(parseInt(`${moduleY}`)), 5));
      break;
   }
      headerZ = 100.41 == downloadedw && !headerZ;
      headerZ = greenu.includes(downloadedw);
       let animationB: Map<any, any> = new Map([[String.fromCharCode(107,102,109,111,100,101,115,95,97,95,49,0),String.fromCharCode(99,95,54,48,95,114,101,116,114,97,110,115,109,105,116,115,0)], [String.fromCharCode(110,95,54,52,95,115,104,111,119,110,0),String.fromCharCode(109,97,114,107,101,116,95,118,95,52,48,0)]]);
         animationB.set(`${animationB.size}`, animationB.size / (Math.max(1, 1)));
          let anythink6 = true;
         animationB = new Map([[`${animationB.size}`, animationB.size]]);
      let gesturem = animationB.size >= 4938886;
      do {
          let routerv = String.fromCharCode(104,95,50,54,95,115,121,110,99,115,97,102,101,0);
          let incidentC: Array<any> = [String.fromCharCode(119,95,55,49,95,109,105,120,0), String.fromCharCode(107,95,51,50,95,115,116,97,116,105,111,110,97,114,105,116,121,0), String.fromCharCode(122,95,49,95,97,117,116,111,108,111,99,107,0)];
          let carouseln = 0.0;
         animationB.set(`${routerv}`, animationB.size);
         routerv = `${parseInt(`${carouseln}`)}`;
         incidentC = [incidentC.length];
         carouseln -= incidentC.length;
         if (gesturem) {
            break;
         }
      } while ((!Array.from(animationB.keys()).includes(`${animationB.size}`)) && gesturem);
      headerZ = 85 >= renewD.length;
   let basketballU = headerZ ? !headerZ : headerZ;
   do {
      headerZ = (expandA.length ^ greenu.length) > 100;
      if (basketballU) {
         break;
      }
   } while (basketballU && (2.99 > video5));
       let line0: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,101,109,101,114,103,101,110,99,121,0),String.fromCharCode(116,95,55,51,95,102,97,99,116,111,114,97,98,108,101,0)], [String.fromCharCode(119,95,51,56,95,108,97,114,103,101,0),String.fromCharCode(115,116,97,114,116,95,109,95,54,0)], [String.fromCharCode(121,95,50,50,95,114,116,115,112,0),String.fromCharCode(105,110,100,101,111,100,97,116,97,95,97,95,53,54,0)]]);
       let injuryO = 2.0;
       let controlsT = 1.0;
         injuryO /= Math.max(4, parseFloat(`${parseInt(`${controlsT}`)}`));
         injuryO += parseFloat(`${parseInt(`${controlsT}`)}`);
      let transferF = line0.size <= 7123019;
      do {
         line0.set(`${injuryO}`, parseInt(`${injuryO}`) * 2);
         if (transferF) {
            break;
         }
      } while (((4 % (Math.max(4, line0.size))) <= 1 || (parseInt(`${injuryO}`) + line0.size) <= 4) && transferF);
         injuryO += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${injuryO}`)), 4))}`);
      let whatsappL = controlsT >= 7353038.0;
      do {
         controlsT *= 2 ^ line0.size;
         if (whatsappL) {
            break;
         }
      } while (whatsappL && ((injuryO / 2) == 4.84));
         injuryO += parseFloat(`${2 * parseInt(`${controlsT}`)}`);
         line0 = new Map([[`${line0.size}`, line0.size >> (Math.min(1, Math.abs(parseInt(`${controlsT}`))))]]);
          let clearB: Array<any> = [900, 29, 451];
          let calendar6 = String.fromCharCode(115,95,51,53,95,97,99,99,117,109,117,108,97,116,101,100,0);
          let closee = 1.0;
         controlsT += parseInt(`${injuryO}`) | calendar6.length;
         clearB = [clearB.length];
         calendar6 = `${clearB.length | parseInt(`${closee}`)}`;
         closee -= parseInt(`${closee}`);
         injuryO -= parseFloat(`${parseInt(`${controlsT}`)}`);
      headerZ = 93 > routerQ.size;
      downloadedw -= parseFloat(`${1}`);
   while ((download2.length & 5) == 2) {
      download2 = [3];
      break;
   }
      headerZ = 88 >= expandA.length;
   let short_71c = headerZ ? !headerZ : headerZ;
   do {
       let unreadf = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,49,95,51,52,0);
       let playZk = String.fromCharCode(103,114,111,117,112,110,97,109,101,115,95,121,95,55,48,0);
       let successr = String.fromCharCode(111,95,54,52,95,101,112,101,108,0);
       let teamw = 2;
       let long_iuh: Array<any> = [978, 354];
         playZk += `${teamw}`;
         playZk += `${long_iuh.length / (Math.max(9, unreadf.length))}`;
         successr = `${unreadf.length << (Math.min(Math.abs(3), 2))}`;
         playZk += `${long_iuh.length >> (Math.min(Math.abs(3), 4))}`;
         teamw *= long_iuh.length << (Math.min(Math.abs(1), 3));
      while (!playZk.endsWith(unreadf)) {
          let checkboxc: Array<any> = [735, 878];
          let drag6 = String.fromCharCode(97,114,114,105,118,97,108,95,116,95,49,52,0);
          let clearn = String.fromCharCode(100,95,53,95,116,109,109,98,114,0);
          let detaily = String.fromCharCode(100,99,109,112,95,115,95,51,54,0);
          let hooks8 = false;
         unreadf = "2";
         checkboxc.push((drag6 == String.fromCharCode(78,0) ? drag6.length : (hooks8 ? 4 : 3)));
         clearn += `${checkboxc.length}`;
         detaily += `${3 + checkboxc.length}`;
         break;
      }
         long_iuh.push(teamw ^ unreadf.length);
          let searchbarf = 5;
         unreadf = "1";
         searchbarf ^= searchbarf << (Math.min(Math.abs(1), 4));
       let philippinesi = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,48,95,57,52,0);
         unreadf += `${(playZk == String.fromCharCode(89,0) ? playZk.length : successr.length)}`;
       let room0 = String.fromCharCode(117,95,55,51,95,103,101,116,112,0);
         long_iuh = [long_iuh.length << (Math.min(Math.abs(3), 4))];
       let upgrade1 = true;
       let clubs = false;
      let moviesZ = teamw >= 9244597;
      do {
         teamw >>= Math.min(Math.abs(2 >> (Math.min(3, long_iuh.length))), 2);
         if (moviesZ) {
            break;
         }
      } while ((clubs) && moviesZ);
         room0 += `${(long_iuh.length | (clubs ? 1 : 3))}`;
      headerZ = String.fromCharCode(118,0) == playZk;
      if (short_71c) {
         break;
      }
   } while ((!headerZ) && short_71c);
      download2.push((parseInt(`${video5}`) + (policyX ? 3 : 2)));

        Keyboard.dismiss();

       let blacklist3 = String.fromCharCode(116,105,99,107,95,106,95,50,52,0);
       let downloadedG = true;
       let specj = 1.0;
       let alertx = String.fromCharCode(101,111,109,101,116,114,121,95,97,95,53,51,0);
         alertx = "3";
         alertx += `${alertx.length >> (Math.min(blacklist3.length, 5))}`;
       let footballG = true;
      for (let t = 0; t < 3; t++) {
         alertx = "3";
      }
      let actiony = 5283695.0 <= specj;
      do {
         specj /= Math.max(3 - parseInt(`${specj}`), 5);
         if (actiony) {
            break;
         }
      } while (((alertx.length << (Math.min(Math.abs(4), 2))) >= 3 || (alertx.length - parseInt(`${specj}`)) >= 4) && actiony);
         blacklist3 = `${parseInt(`${specj}`)}`;
      if (downloadedG) {
         downloadedG = blacklist3.length >= 60;
      }
         footballG = !downloadedG || blacklist3.length < 55;
      greenu.push(store1.length);
      download2.push(2);
      video5 += 3;
   let alert7 = renewD.length <= 9851696;
   do {
       let favicont = String.fromCharCode(117,116,120,111,115,95,56,95,49,52,0);
       let stationh: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,114,101,110,100,101,114,101,114,0),227], [String.fromCharCode(112,101,110,97,108,116,121,95,51,95,52,49,0),367]]);
       let checkboxO = 2.0;
      let checkboxk = 5470653 >= stationh.size;
      do {
          let networkj: Array<any> = [String.fromCharCode(111,95,57,53,95,116,111,117,116,0), String.fromCharCode(104,109,97,99,95,105,95,54,48,0), String.fromCharCode(118,95,53,52,95,100,117,109,0)];
         stationh = new Map([[`${stationh.size}`, stationh.size]]);
         networkj.push(networkj.length >> (Math.min(Math.abs(2), 4)));
         if (checkboxk) {
            break;
         }
      } while (checkboxk && (1 <= (favicont.length >> (Math.min(Math.abs(2), 4))) || 1 <= (favicont.length >> (Math.min(Math.abs(2), 1)))));
         favicont = `${parseInt(`${checkboxO}`) * 1}`;
      while ((favicont.length << (Math.min(1, Math.abs(stationh.size)))) >= 3 && (3 << (Math.min(3, Math.abs(stationh.size)))) >= 4) {
          let teami: Array<any> = [225, 970, 923];
          let zhuboM = 4.0;
          let streamingY = String.fromCharCode(122,95,51,50,95,109,117,120,101,114,115,0);
         stationh = new Map([[`${checkboxO}`, 1 % (Math.max(1, parseInt(`${checkboxO}`)))]]);
         teami.push(streamingY.length & parseInt(`${zhuboM}`));
         zhuboM /= Math.max((String.fromCharCode(65,0) == streamingY ? parseInt(`${zhuboM}`) : streamingY.length), 2);
         break;
      }
          let singleq = 0;
         checkboxO /= Math.max(parseFloat(`${stationh.size}`), 1);
         singleq %= Math.max(3, singleq);
      for (let f = 0; f < 2; f++) {
          let linkd = true;
          let configz = String.fromCharCode(114,95,54,50,95,101,110,99,97,112,0);
          let catagoryM: Map<any, any> = new Map([[String.fromCharCode(115,95,56,53,95,102,115,101,101,107,0),592], [String.fromCharCode(119,95,53,49,95,117,116,109,111,115,116,0),831]]);
         stationh = new Map([[`${linkd}`, parseInt(`${checkboxO}`) | 2]]);
         linkd = (catagoryM.size - configz.length) == 9;
         configz = `${catagoryM.size}`;
      }
      renewD = [stationh.size & 1];
      if (alert7) {
         break;
      }
   } while ((renewD.length >= 3) && alert7);
      renewD = [2];
   let userS = video5 <= 6694187.0;
   do {
      video5 -= parseInt(`${downloadedw}`) + parseInt(`${video5}`);
      if (userS) {
         break;
      }
   } while (((5 >> (Math.min(5, greenu.length))) < 3) && userS);
   for (let g = 0; g < 3; g++) {
       let trashb = String.fromCharCode(116,95,50,50,95,102,105,108,116,101,114,102,110,0);
      for (let w = 0; w < 1; w++) {
         trashb = `${3 + trashb.length}`;
      }
      if (!trashb.includes(`${trashb.length}`)) {
         trashb = `${1 - trashb.length}`;
      }
         trashb += `${(trashb == String.fromCharCode(109,0) ? trashb.length : trashb.length)}`;
      store1 = `${unselectedC.size >> (Math.min(Math.abs(2), 5))}`;
   }
   if ((unselectedC.size - 2) == 4 && 2 == unselectedC.size) {
       let chatY = false;
       let assistK = String.fromCharCode(118,95,51,49,95,99,111,110,118,101,114,103,101,110,99,101,0);
       let updatesL = 0.0;
       let overlayb = String.fromCharCode(105,95,52,52,95,120,109,97,115,109,0);
      while (4 >= (assistK.length / (Math.max(8, parseInt(`${updatesL}`))))) {
          let transfers = String.fromCharCode(113,95,52,57,95,98,97,110,100,105,110,103,0);
          let download3 = 3.0;
          let unreada = 4.0;
          let nterstitiala = String.fromCharCode(118,95,54,57,95,115,117,109,109,97,114,121,0);
          let circleK = 4.0;
         updatesL /= Math.max(3, (parseFloat(`${String.fromCharCode(121,0) == assistK ? parseInt(`${download3}`) : assistK.length}`)));
         transfers = "1";
         download3 /= Math.max(parseFloat(`${3}`), 5);
         unreada /= Math.max(parseFloat(`${nterstitiala.length + parseInt(`${unreada}`)}`), 3);
         nterstitiala += `${1 ^ transfers.length}`;
         circleK /= Math.max(parseFloat(`${parseInt(`${unreada}`) - 1}`), 3);
         break;
      }
          let loginy: Map<any, any> = new Map([[String.fromCharCode(98,95,49,57,95,97,105,109,105,110,103,0),285], [String.fromCharCode(101,120,97,109,112,108,101,115,95,119,95,54,49,0),108], [String.fromCharCode(115,112,105,110,110,105,110,103,95,112,95,54,48,0),481]]);
          let favicono = 1;
          let configureL = String.fromCharCode(118,95,54,50,95,112,114,101,118,105,101,119,115,0);
         updatesL *= parseFloat(`${parseInt(`${updatesL}`) + 3}`);
         loginy = new Map([[`${loginy.size}`, favicono ^ 3]]);
         favicono |= configureL.length ^ 1;
         configureL = `${loginy.size}`;
         assistK = `${(assistK.length << (Math.min(1, Math.abs((chatY ? 5 : 2)))))}`;
         assistK += "2";
      while (1.74 >= (parseFloat(`${assistK.length}`) - updatesL) && (2 / (Math.max(4, assistK.length))) >= 3) {
         assistK += "1";
         break;
      }
         updatesL += parseFloat(`${overlayb.length + assistK.length}`);
      while (1 > overlayb.length) {
         chatY = overlayb == String.fromCharCode(115,0);
         break;
      }
      let analyticF = updatesL <= 4972475.0;
      do {
         updatesL *= parseFloat(`${parseInt(`${updatesL}`) * 2}`);
         if (analyticF) {
            break;
         }
      } while (analyticF && ((updatesL - parseFloat(`${assistK.length}`)) == 2.25 || (assistK.length - parseInt(`${updatesL}`)) == 5));
      while ((3 + parseInt(`${updatesL}`)) == 5 || 1.59 == (updatesL + 3.77)) {
          let contextf = true;
         overlayb += `${3 - parseInt(`${updatesL}`)}`;
         contextf = !contextf;
         break;
      }
      if (updatesL == 1.16) {
         updatesL += parseFloat(`${parseInt(`${updatesL}`) >> (Math.min(Math.abs(2), 1))}`);
      }
       let viewerD: Array<any> = [225, 833];
         chatY = (43 >= ((chatY ? 43 : viewerD.length) ^ viewerD.length));
      unselectedC.set(`${updatesL}`, parseInt(`${downloadedw}`) ^ parseInt(`${updatesL}`));
   }
       let resends = 2.0;
       let tickD = 3;
       let gesturej: Array<any> = [String.fromCharCode(112,114,111,109,112,116,95,112,95,49,51,0), String.fromCharCode(108,105,115,116,101,110,101,114,115,95,113,95,57,52,0)];
      let phone9 = resends <= 8931274.0;
      do {
         resends *= gesturej.length / 1;
         if (phone9) {
            break;
         }
      } while ((5 < (parseInt(`${resends}`) - gesturej.length)) && phone9);
         tickD <<= Math.min(3, Math.abs(tickD));
          let checkboxcq = 4.0;
          let gemfileC = 4.0;
         gesturej = [parseInt(`${resends}`)];
         checkboxcq += parseFloat(`${3}`);
         gemfileC -= parseFloat(`${parseInt(`${checkboxcq}`)}`);
         tickD >>= Math.min(3, Math.abs(gesturej.length / (Math.max(9, parseInt(`${resends}`)))));
          let sharede = 2.0;
         resends -= parseInt(`${resends}`);
         sharede += parseFloat(`${parseInt(`${sharede}`) >> (Math.min(Math.abs(parseInt(`${sharede}`)), 5))}`);
      downloadedw *= parseFloat(`${2}`);
   for (let t = 0; t < 2; t++) {
      headerZ = routerQ.size < 52 && unselectedC.size < 52;
   }
      policyX = routerQ.size >= 61;
        resetForm();
    }

    const onSubmitForm = async () => {
       let circle_ = 4.0;
    let sharei = 0.0;
    let lineJ = 3.0;
    let downloaderT = String.fromCharCode(99,117,115,116,111,109,95,97,95,52,54,0);
    let linkM: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,105,110,118,101,114,116,101,100,0),String.fromCharCode(99,95,50,48,95,103,114,97,100,105,101,110,116,115,0)], [String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,57,95,53,56,0),String.fromCharCode(103,115,117,98,95,119,95,49,49,0)]]);
    let next1 = 3.0;
    let subsm = false;
    let animation4 = String.fromCharCode(108,111,103,105,99,95,116,95,49,48,0);
    let auto_mc: Map<any, any> = new Map([[String.fromCharCode(103,114,111,119,95,98,95,52,51,0),457], [String.fromCharCode(112,95,53,56,95,114,101,102,100,117,112,101,0),784]]);
    let kickX: Array<any> = [320, 480, 746];
    let topicO = 3.0;
    let humidityE: Array<any> = [String.fromCharCode(98,105,97,115,101,100,95,122,95,54,48,0), String.fromCharCode(121,95,49,53,95,99,121,99,108,101,99,108,111,99,107,0), String.fromCharCode(102,95,49,57,95,115,109,105,108,0)];
    let mailA = String.fromCharCode(114,95,55,54,95,115,105,103,97,108,103,0);
    let bannerP = String.fromCharCode(101,95,52,56,95,114,101,109,117,120,0);
    let group9: Map<any, any> = new Map([[String.fromCharCode(97,108,101,114,116,95,57,95,49,53,0),983], [String.fromCharCode(114,95,55,53,95,105,110,116,101,114,0),294]]);
    let userX = 0.0;
      lineJ *= 1;
   for (let y = 0; y < 3; y++) {
       let buttonw = false;
       let tooltipsE = 1.0;
      if (4.14 == tooltipsE) {
         buttonw = !buttonw;
      }
      if (3.17 == (1.9 / (Math.max(5, tooltipsE)))) {
         buttonw = !buttonw;
      }
          let invite2 = 5;
          let clockg = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,101,95,52,49,0);
         tooltipsE -= invite2;
         invite2 <<= Math.min(3, Math.abs((clockg == String.fromCharCode(101,0) ? clockg.length : clockg.length)));
      if (3.13 == (3.68 + tooltipsE)) {
         buttonw = !buttonw;
      }
         tooltipsE *= 3 % (Math.max(parseInt(`${tooltipsE}`), 3));
      while (buttonw) {
          let singaporeQ = 4;
         tooltipsE += 2;
         singaporeQ &= singaporeQ << (Math.min(Math.abs(3), 2));
         break;
      }
      lineJ += 1;
   }

        if (usernameErrMsg !== null) return;

   if ((kickX.length | linkM.size) > 3 && (linkM.size | 3) > 4) {
      linkM = new Map([[`${sharei}`, parseInt(`${sharei}`) / (Math.max(animation4.length, 8))]]);
   }
      linkM.set(`${lineJ}`, auto_mc.size);

        if (isSubmitting) return;

       let loginM = String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,51,95,56,51,0);
       let streamingx: Array<any> = [335, 76, 74];
       let unselectedE = true;
      while (4 < (5 << (Math.min(1, streamingx.length)))) {
          let long_8E = String.fromCharCode(115,95,49,48,95,119,109,118,100,97,116,97,0);
          let whiter = String.fromCharCode(98,111,120,95,56,95,51,50,0);
          let adults = String.fromCharCode(115,95,51,50,95,118,111,105,112,0);
          let fastforwardn = 0.0;
         unselectedE = String.fromCharCode(80,0) == long_8E;
         long_8E = `${parseInt(`${fastforwardn}`) ^ 1}`;
         whiter = `${2 - adults.length}`;
         adults = `${parseInt(`${fastforwardn}`)}`;
         break;
      }
          let switch_qf: Array<any> = [616, 69, 308];
          let photoX = String.fromCharCode(118,95,57,54,95,100,105,115,99,117,115,115,0);
         unselectedE = 55 <= streamingx.length;
         switch_qf.push(switch_qf.length / 3);
         photoX = `${1 % (Math.max(8, switch_qf.length))}`;
      while (unselectedE) {
         streamingx.push(streamingx.length & 3);
         break;
      }
         loginM = `${1 & streamingx.length}`;
         loginM += `${((unselectedE ? 3 : 5) | streamingx.length)}`;
      let statsP = 6950770 >= loginM.length;
      do {
          let userb = 2;
         loginM = `${1 * streamingx.length}`;
         userb %= Math.max(3, userb ^ userb);
         if (statsP) {
            break;
         }
      } while ((2 > (loginM.length - 3) && 3 > (streamingx.length - loginM.length)) && statsP);
      if (loginM.length >= 1) {
         loginM += `${streamingx.length}`;
      }
          let middlewareB = String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,108,95,54,0);
          let twitterC = String.fromCharCode(106,95,55,49,95,99,108,101,97,114,0);
         streamingx = [loginM.length];
         middlewareB = `${middlewareB.length * 3}`;
         twitterC += `${middlewareB.length + twitterC.length}`;
      let middleI = unselectedE ? !unselectedE : unselectedE;
      do {
         unselectedE = loginM.length <= 51 || !unselectedE;
         if (middleI) {
            break;
         }
      } while ((5 == (5 << (Math.min(3, streamingx.length)))) && middleI);
      sharei *= 2 - parseInt(`${sharei}`);
       let muted_ = String.fromCharCode(100,101,99,111,100,101,95,121,95,50,57,0);
         muted_ = `${muted_.length / 3}`;
      if (muted_.length >= muted_.length) {
          let expiredM = String.fromCharCode(97,95,56,54,95,97,100,114,109,0);
          let diceD = false;
          let predictionC = String.fromCharCode(119,95,52,48,95,109,101,103,97,103,114,111,117,112,0);
         muted_ = `${((diceD ? 4 : 2))}`;
         expiredM = `${predictionC.length}`;
         diceD = predictionC.length <= 85;
      }
          let pingH = 1.0;
         muted_ += `${(String.fromCharCode(70,0) == muted_ ? parseInt(`${pingH}`) : muted_.length)}`;
      topicO += parseFloat(`${animation4.length}`);
        setSubmitting(true);

      circle_ += ((subsm ? 5 : 5) * parseInt(`${topicO}`));
       let soundh = 1;
       let logoX = 0.0;
       let videok = true;
      let selectionY = 8349085.0 <= logoX;
      do {
          let hover0 = 1.0;
          let stationsJ = 5.0;
          let readi: Map<any, any> = new Map([[String.fromCharCode(109,105,100,100,108,101,95,109,95,53,54,0),302], [String.fromCharCode(98,95,55,55,95,98,101,115,115,101,108,0),763], [String.fromCharCode(100,105,115,99,97,114,100,95,120,95,56,50,0),576]]);
          let control3 = 2.0;
          let suggestionD = 1.0;
         logoX *= parseInt(`${stationsJ}`);
         hover0 -= parseFloat(`${parseInt(`${hover0}`)}`);
         readi.set(`${suggestionD}`, parseInt(`${control3}`));
         suggestionD /= Math.max(1, parseFloat(`${1 ^ parseInt(`${hover0}`)}`));
         if (selectionY) {
            break;
         }
      } while (selectionY && (2.76 == (logoX / (Math.max(3.67, 5)))));
      if (soundh >= 2) {
          let emojis = String.fromCharCode(102,116,118,112,110,111,100,101,95,108,95,53,53,0);
         soundh ^= 3 + parseInt(`${logoX}`);
         emojis += `${(emojis == String.fromCharCode(100,0) ? emojis.length : emojis.length)}`;
      }
          let soundE = 4.0;
          let historyE: Array<any> = [914, 462, 156];
         logoX -= ((videok ? 1 : 2) << (Math.min(historyE.length, 1)));
         soundE *= 2 * parseInt(`${soundE}`);
         historyE.push(parseInt(`${soundE}`));
         logoX -= parseInt(`${logoX}`);
      for (let a = 0; a < 2; a++) {
         videok = 89 == soundh;
      }
      if (logoX < 3.73) {
          let ticko = false;
          let auto_zrs = true;
          let injuryr: Array<any> = [698, 911, 148];
         logoX *= injuryr.length / 3;
         ticko = (!ticko ? ticko : !ticko);
         auto_zrs = ticko;
      }
         logoX -= parseInt(`${logoX}`);
      let eactG = 7095122.0 >= logoX;
      do {
         logoX += 2 * parseInt(`${logoX}`);
         if (eactG) {
            break;
         }
      } while (eactG && (!videok));
         logoX *= 1 % (Math.max(soundh, 3));
      auto_mc.set(animation4, animation4.length);

        try {

   for (let f = 0; f < 2; f++) {
      topicO *= parseFloat(`${parseInt(`${sharei}`) ^ parseInt(`${lineJ}`)}`);
   }
   while (!Array.from(linkM.keys()).includes(`${sharei}`)) {
       let termsQ = 2.0;
       let rulesg = 1.0;
       let delegate_rw = true;
       let guideT = true;
          let sourceT = String.fromCharCode(115,116,114,102,95,105,95,55,52,0);
          let hooksa = String.fromCharCode(114,102,116,102,115,117,98,95,108,95,55,57,0);
         delegate_rw = 87.30 >= termsQ && 87.30 >= rulesg;
         sourceT = `${sourceT.length ^ hooksa.length}`;
         hooksa = `${hooksa.length % 3}`;
       let reportq: Array<any> = [895, 988, 527];
       let group6: Array<any> = [150, 581, 279];
         termsQ /= Math.max(3, 3);
      let tickedr = 5262895 <= group6.length;
      do {
          let r_centerv = String.fromCharCode(98,105,116,114,97,116,101,115,95,122,95,56,52,0);
          let eventq = 0.0;
          let maila = 4;
          let overN: Array<any> = [478, 242, 499];
         group6.push(((guideT ? 3 : 4)));
         r_centerv = `${r_centerv.length / 3}`;
         eventq /= Math.max(1, r_centerv.length);
         maila -= maila ^ parseInt(`${eventq}`);
         overN.push(maila - overN.length);
         if (tickedr) {
            break;
         }
      } while (tickedr && (4 < reportq.length));
         reportq = [1];
      for (let q = 0; q < 2; q++) {
         reportq.push(((delegate_rw ? 4 : 1) % (Math.max(parseInt(`${termsQ}`), 10))));
      }
         delegate_rw = parseInt(`${termsQ}`) <= group6.length;
      for (let x = 0; x < 1; x++) {
         rulesg += 3;
      }
      for (let g = 0; g < 2; g++) {
         delegate_rw = 4.46 > termsQ || 27 > group6.length;
      }
      let gestures = rulesg <= 4918119.0;
      do {
          let constants1 = true;
         rulesg += parseInt(`${termsQ}`) + 1;
         constants1 = !constants1;
         if (gestures) {
            break;
         }
      } while ((rulesg == 5.33) && gestures);
         rulesg /= Math.max(5, (parseInt(`${termsQ}`) - (delegate_rw ? 3 : 2)));
      for (let n = 0; n < 1; n++) {
         guideT = !guideT;
      }
      sharei -= parseInt(`${topicO}`);
      break;
   }
            await THFirebase.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      lineJ /= Math.max(parseInt(`${circle_}`), 1);
      auto_mc = new Map([[`${linkM.size}`, humidityE.length % 2]]);
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   for (let o = 0; o < 3; o++) {
      topicO /= Math.max(5, parseFloat(`${linkM.size % 2}`));
   }
   let logoutP = 9835104.0 <= lineJ;
   do {
      lineJ *= ((subsm ? 4 : 4) ^ 3);
      if (logoutP) {
         break;
      }
   } while (logoutP && (!Array.from(linkM.values()).includes(lineJ)));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   for (let m = 0; m < 2; m++) {
      topicO /= Math.max(4, parseFloat(`${parseInt(`${lineJ}`)}`));
   }
   while (4.74 < (4.34 * topicO)) {
       let hooki = String.fromCharCode(99,95,54,57,95,115,101,101,107,0);
       let hover9 = String.fromCharCode(103,95,52,50,95,116,97,107,101,110,0);
       let resendv = 2.0;
       let ying9 = String.fromCharCode(107,95,49,55,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0);
       let datab = String.fromCharCode(97,95,55,57,95,101,115,99,97,112,101,0);
      let register_1H = hover9 == String.fromCharCode(55,52,118,99,0);
      do {
          let spinnerz: Array<any> = [388, 687, 6];
          let refresh7 = 4;
          let sportT = String.fromCharCode(98,95,49,51,95,114,101,102,99,111,117,110,116,101,114,0);
         hover9 += "1";
         spinnerz = [sportT.length | refresh7];
         refresh7 *= spinnerz.length >> (Math.min(Math.abs(3), 1));
         sportT += `${refresh7 | spinnerz.length}`;
         if (register_1H) {
            break;
         }
      } while (register_1H && (datab != String.fromCharCode(98,0) || hover9 != String.fromCharCode(54,0)));
      while (!datab.startsWith(`${resendv}`)) {
         resendv /= Math.max(hooki.length + 1, 5);
         break;
      }
         datab = `${ying9.length}`;
      if (1 < datab.length) {
          let footballr: Map<any, any> = new Map([[String.fromCharCode(97,114,114,95,116,95,55,52,0),563], [String.fromCharCode(109,97,120,120,95,111,95,53,53,0),478]]);
          let stationsO: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,114,115,95,113,95,54,51,0),String.fromCharCode(97,95,50,50,95,110,100,101,102,0)], [String.fromCharCode(98,95,51,49,95,114,101,116,114,105,101,118,101,0),String.fromCharCode(105,110,102,111,95,48,95,49,56,0)]]);
          let modityR = 4;
          let mutedW = String.fromCharCode(117,95,55,56,95,109,116,97,102,0);
          let login_ = true;
         datab += `${footballr.size << (Math.min(hooki.length, 3))}`;
         footballr = new Map([[`${stationsO.size}`, (stationsO.size | (login_ ? 3 : 3))]]);
         modityR /= Math.max(2, ((login_ ? 1 : 3) - 1));
         mutedW = `${((login_ ? 5 : 1))}`;
      }
      for (let g = 0; g < 3; g++) {
         hooki = `${(datab == String.fromCharCode(86,0) ? ying9.length : datab.length)}`;
      }
      if (!hooki.endsWith(`${resendv}`)) {
         hooki = `${hooki.length | datab.length}`;
      }
      if (hover9.endsWith(`${resendv}`)) {
         hover9 += `${hooki.length / 2}`;
      }
      for (let i = 0; i < 3; i++) {
         hooki = `${ying9.length >> (Math.min(4, Math.abs(parseInt(`${resendv}`))))}`;
      }
      topicO += parseFloat(`${parseInt(`${circle_}`) & 2}`);
      break;
   }
            return;
        }


        dispatch(updateUsernameState(username));

       let pauseV = 5.0;
       let progressk = String.fromCharCode(112,103,109,121,117,118,95,106,95,50,55,0);
       let reminderG: Map<any, any> = new Map([[String.fromCharCode(104,97,112,116,105,99,95,53,95,49,48,48,0),768], [String.fromCharCode(110,95,53,49,95,112,108,97,110,101,100,0),414]]);
       let styleX = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,111,95,52,51,0);
      while ((reminderG.size & styleX.length) < 5 && 4 < (5 & reminderG.size)) {
         styleX = "1";
         break;
      }
       let entryu = String.fromCharCode(106,95,55,51,95,116,97,98,115,0);
      if (styleX != String.fromCharCode(85,0)) {
         entryu = `${entryu.length}`;
      }
      while (4.0 <= pauseV) {
         reminderG.set(`${progressk}`, 2 % (Math.max(1, progressk.length)));
         break;
      }
      for (let a = 0; a < 1; a++) {
         progressk += "3";
      }
          let albumF = 5.0;
          let close1 = 1;
          let rewindi = String.fromCharCode(109,111,109,101,110,116,115,95,115,95,53,56,0);
         entryu += `${styleX.length}`;
         albumF -= parseInt(`${albumF}`) & close1;
         close1 <<= Math.min(Math.abs((rewindi == String.fromCharCode(114,0) ? rewindi.length : close1)), 1);
      let stepF = 9216715 >= progressk.length;
      do {
         progressk += `${2 * progressk.length}`;
         if (stepF) {
            break;
         }
      } while ((3 <= styleX.length) && stepF);
      let agreement4 = 5421050 >= reminderG.size;
      do {
         reminderG.set(`${pauseV}`, (styleX == String.fromCharCode(85,0) ? styleX.length : parseInt(`${pauseV}`)));
         if (agreement4) {
            break;
         }
      } while (agreement4 && ((5 ^ reminderG.size) == 2 || (reminderG.size + 5) == 5));
      downloaderT += `${1 / (Math.max(parseInt(`${lineJ}`), 6))}`;
       let databl = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,115,95,53,55,0);
       let uploadL: Map<any, any> = new Map([[String.fromCharCode(110,95,52,55,95,99,111,109,102,111,114,116,0),false ], [String.fromCharCode(101,95,57,54,95,99,116,114,0),true ], [String.fromCharCode(99,95,52,49,95,105,102,111,114,109,97,116,0),false ]]);
      if (5 <= (databl.length - uploadL.size)) {
         uploadL = new Map([[`${uploadL.size}`, uploadL.size]]);
      }
         uploadL.set(`${databl}`, uploadL.size - 1);
          let u_unlockJ = 0.0;
          let malaysiag = String.fromCharCode(99,116,120,112,95,101,95,57,57,0);
         databl += `${parseInt(`${u_unlockJ}`)}`;
         u_unlockJ /= Math.max(5, parseFloat(`${3 - malaysiag.length}`));
         malaysiag += `${(malaysiag == String.fromCharCode(73,0) ? malaysiag.length : malaysiag.length)}`;
      while (databl.length > 5) {
         uploadL.set(`${databl}`, (databl == String.fromCharCode(82,0) ? uploadL.size : databl.length));
         break;
      }
          let buffer8 = 2.0;
          let rulesd = 1.0;
          let actionk: Array<any> = [295, 197, 97];
         uploadL = new Map([[`${actionk.length}`, parseInt(`${buffer8}`)]]);
         buffer8 += parseInt(`${rulesd}`);
      if ((uploadL.size - 5) == 3) {
         uploadL.set(databl, uploadL.size / 1);
      }
      animation4 = `${(downloaderT.length & (subsm ? 2 : 3))}`;
        dispatch(changeScreenAction("修改成功"));

      humidityE.push(animation4.length - 2);
      subsm = 34.20 == topicO;

        if (onSubmitSuccess) onSubmitSuccess(username);

      kickX.push(3 << (Math.min(1, Math.abs(parseInt(`${sharei}`)))));
   while ((2.61 - circle_) > 4.74) {
      circle_ *= humidityE.length;
      break;
   }

        Keyboard.dismiss();

   if ((kickX.length >> (Math.min(Math.abs(1), 1))) >= 5) {
      kickX.push(3 & auto_mc.size);
   }
      topicO -= (parseFloat(`${(subsm ? 1 : 2) % 1}`));
        navigation.navigate("Home", {
            screen: "Profile",
        });

      animation4 += `${humidityE.length}`;
   if (subsm) {
      subsm = animation4.length > 95;
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
                <TouchableOpacity activeOpacity={0.85} onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity activeOpacity={0.85} onPress={onSubmitForm}>
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