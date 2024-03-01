import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks/yys_frame";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/yys_runtimescheduler";
import { updateUsernameState } from "@redux/actions/yys_gesture";
import SpinnerOverlay from "./yys_home";
import { yys_GesturesConst } from "@api";


interface yys_ConfigureUimanager {
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
}: yys_ConfigureUimanager) => {
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
       let androidf = String.fromCharCode(106,95,55,53,95,112,97,108,109,0);
    let tooltips2 = 4;
    let networkD = false;
    let redirecte = String.fromCharCode(102,102,112,108,97,121,95,120,95,57,57,0);
    let a_manager4 = 0.0;
    let phoneZ = String.fromCharCode(111,95,49,95,104,117,110,103,0);
    let debugN = String.fromCharCode(120,99,98,103,114,97,98,95,104,95,50,54,0);
    let tickU: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,111,107,95,97,95,53,52,0),true ], [String.fromCharCode(104,95,57,48,95,104,97,114,100,0),false ]]);
    let contextx = 1.0;
    let turnA = false;
    let runtimeQ: Array<any> = [299, 11, 357];
   let paginationo = tooltips2 <= 7975698;
   do {
      tooltips2 <<= Math.min(Math.abs(2), 3);
      if (paginationo) {
         break;
      }
   } while ((tooltips2 <= 4) && paginationo);
       let containers: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,116,95,56,55,0),String.fromCharCode(104,105,103,104,101,115,116,95,51,95,55,55,0)], [String.fromCharCode(104,95,51,95,98,97,110,100,105,110,103,0),String.fromCharCode(100,95,56,56,95,115,105,112,104,97,115,104,0)]]);
       let yellowx = 4;
      let productn = yellowx >= 5873190;
      do {
          let main_nl = String.fromCharCode(105,110,112,99,98,95,120,95,54,57,0);
          let libswresample5: Array<any> = [699, 524];
          let libavfilterD: Array<any> = [611, 874];
          let full0 = 0.0;
          let corner1 = false;
         yellowx %= Math.max(main_nl.length * yellowx, 1);
         main_nl = `${libswresample5.length & 1}`;
         libswresample5 = [3 / (Math.max(4, parseInt(`${full0}`)))];
         libavfilterD.push(((corner1 ? 1 : 5) & libavfilterD.length));
         full0 += libswresample5.length * 3;
         corner1 = full0 >= 19.85;
         if (productn) {
            break;
         }
      } while (productn && (!Array.from(containers.values()).includes(yellowx)));
      while ((containers.size | 5) == 3 || (5 | yellowx) == 3) {
         containers = new Map([[`${containers.size}`, containers.size + 1]]);
         break;
      }
          let darkx = String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,107,95,51,49,0);
          let imagemanagerU = String.fromCharCode(102,95,55,52,95,99,104,97,112,0);
          let libtanF = String.fromCharCode(115,99,101,110,101,99,117,116,95,49,95,49,55,0);
         yellowx %= Math.max(containers.size ^ darkx.length, 3);
         darkx = `${libtanF.length & 3}`;
         imagemanagerU += `${libtanF.length & imagemanagerU.length}`;
          let plash9 = false;
         containers = new Map([[`${containers.size}`, containers.size]]);
         plash9 = plash9 && plash9;
      let whistler = 6112880 >= yellowx;
      do {
         yellowx <<= Math.min(1, Math.abs(yellowx ^ 1));
         if (whistler) {
            break;
         }
      } while (whistler && (containers.size == yellowx));
      while (2 <= (yellowx & containers.size) && (2 & containers.size) <= 3) {
          let dropdown1: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,97,108,95,53,95,57,48,0),348], [String.fromCharCode(102,95,56,56,95,109,100,116,97,0),892], [String.fromCharCode(121,95,51,55,95,117,110,100,101,114,114,117,110,0),323]]);
          let searchbarK = 4;
          let dialogv = String.fromCharCode(101,110,99,111,100,101,114,115,95,115,95,51,57,0);
         containers = new Map([[`${searchbarK}`, yellowx]]);
         dropdown1 = new Map([[`${dropdown1.size}`, 2]]);
         searchbarK &= 1;
         dialogv = `${(String.fromCharCode(50,0) == dialogv ? dropdown1.size : dialogv.length)}`;
         break;
      }
      networkD = tooltips2 > 1 && phoneZ.length > 1;
   while (phoneZ.endsWith(`${a_manager4}`)) {
      a_manager4 += 3 << (Math.min(Math.abs(tooltips2), 5));
      break;
   }
       let tumbnailf = String.fromCharCode(100,101,109,117,120,95,111,95,56,53,0);
       let refreshd = String.fromCharCode(113,95,53,49,95,100,101,109,117,120,101,114,115,0);
       let bridge7 = 1.0;
         refreshd = `${parseInt(`${bridge7}`) << (Math.min(refreshd.length, 5))}`;
      while (!tumbnailf.endsWith(`${refreshd.length}`)) {
         tumbnailf = `${(String.fromCharCode(50,0) == refreshd ? refreshd.length : parseInt(`${bridge7}`))}`;
         break;
      }
          let matchesi = false;
          let rewindm = String.fromCharCode(111,95,50,52,95,99,111,110,110,101,99,116,105,111,110,0);
         refreshd += `${1 + parseInt(`${bridge7}`)}`;
         matchesi = rewindm.length > 12 || !matchesi;
         rewindm += `${rewindm.length}`;
      let whatsappx = String.fromCharCode(55,50,118,103,99,54,122,51,101,111,0) == tumbnailf;
      do {
          let next2 = true;
          let formb = 5.0;
         tumbnailf += `${parseInt(`${formb}`) - 2}`;
         next2 = (next2 ? next2 : !next2);
         formb += ((next2 ? 2 : 2));
         if (whatsappx) {
            break;
         }
      } while (whatsappx && (3.59 <= (4.96 - bridge7) || (tumbnailf.length - 4) <= 1));
      while (tumbnailf.includes(`${refreshd.length}`)) {
         refreshd = `${tumbnailf.length}`;
         break;
      }
       let signinupY: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),503], [String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,105,95,52,57,0),710], [String.fromCharCode(118,95,53,56,95,101,100,103,101,0),813]]);
          let templateprocessorP = String.fromCharCode(110,95,52,49,95,115,116,97,114,116,101,100,0);
          let listL = 0;
          let libhermesS = String.fromCharCode(108,111,103,103,97,98,108,101,95,98,95,51,48,0);
         signinupY = new Map([[`${signinupY.size}`, signinupY.size]]);
         templateprocessorP += `${listL}`;
         listL >>= Math.min(4, Math.abs(3 % (Math.max(10, listL))));
         libhermesS = `${(String.fromCharCode(116,0) == libhermesS ? libhermesS.length : listL)}`;
         bridge7 += parseFloat(`${1}`);
         bridge7 *= parseFloat(`${tumbnailf.length}`);
      a_manager4 *= 3;
       let klevinl = String.fromCharCode(103,95,53,50,95,99,111,118,101,114,115,0);
       let androidp = 0;
       let videocommonH: Array<any> = [230, 218, 722];
         androidp >>= Math.min(2, Math.abs(videocommonH.length % 1));
       let logoz: Array<any> = [311, 216];
       let librrcn: Array<any> = [573, 915];
      if ((logoz.length ^ 4) == 1) {
          let lessv = 2.0;
          let footballA = String.fromCharCode(114,101,115,111,108,118,101,114,95,104,95,51,54,0);
          let anner5 = 3.0;
         logoz.push(androidp);
         lessv /= Math.max(4, parseFloat(`${footballA.length}`));
         footballA += `${1 & parseInt(`${anner5}`)}`;
         anner5 += parseInt(`${lessv}`);
      }
      if ((5 & librrcn.length) > 3) {
          let submitr: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,115,101,116,95,119,95,50,51,0),String.fromCharCode(106,95,50,53,95,115,101,103,117,101,0)], [String.fromCharCode(107,95,56,48,95,109,101,114,103,105,110,103,0),String.fromCharCode(111,95,51,54,95,110,97,99,107,0)]]);
          let downloadedQ = String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,52,95,51,53,0);
          let referrer3: Array<any> = [140, 169, 493];
         logoz.push(3 << (Math.min(2, Math.abs(submitr.size))));
         submitr = new Map([[`${referrer3.length}`, downloadedQ.length]]);
         downloadedQ = `${downloadedQ.length * referrer3.length}`;
      }
      if (androidp >= 5) {
         androidp |= klevinl.length << (Math.min(Math.abs(1), 4));
      }
         librrcn = [androidp];
      while (!klevinl.startsWith(`${logoz.length}`)) {
         klevinl = `${logoz.length % (Math.max(3, 5))}`;
         break;
      }
      if (!videocommonH.includes(librrcn.length)) {
          let libreactnativeblobc: Array<any> = [221, 82, 243];
          let completea = true;
         librrcn = [(androidp & (completea ? 3 : 5))];
         libreactnativeblobc = [libreactnativeblobc.length | libreactnativeblobc.length];
         completea = 70 < libreactnativeblobc.length && 70 < libreactnativeblobc.length;
      }
          let libsentryw = 4.0;
         videocommonH.push(parseInt(`${libsentryw}`) - 3);
      redirecte += `${(String.fromCharCode(57,0) == redirecte ? redirecte.length : (networkD ? 3 : 2))}`;
   let targett = 6430188 <= tickU.size;
   do {
      tickU = new Map([[`${networkD}`, ((networkD ? 3 : 4))]]);
      if (targett) {
         break;
      }
   } while (targett && (3 < (2 * tickU.size) || !networkD));
   while (a_manager4 >= 4.27) {
      a_manager4 *= (tooltips2 >> (Math.min(1, Math.abs((networkD ? 2 : 5)))));
      break;
   }
   let shrinkM = 6255766 >= tickU.size;
   do {
      tickU = new Map([[debugN, debugN.length | 2]]);
      if (shrinkM) {
         break;
      }
   } while (shrinkM && (4 < (tickU.size << (Math.min(Math.abs(1), 4))) && (redirecte.length << (Math.min(Math.abs(1), 5))) < 1));
   if ((5 - debugN.length) >= 3) {
      debugN = `${redirecte.length + debugN.length}`;
   }
      a_manager4 += (parseInt(`${contextx}`) >> (Math.min(1, Math.abs((networkD ? 5 : 3)))));

        setUsername(initialUsername);

   while ((debugN.length - contextx) == 2.45 || (5 - parseInt(`${contextx}`)) == 3) {
      debugN += `${(redirecte == String.fromCharCode(73,0) ? redirecte.length : parseInt(`${a_manager4}`))}`;
      break;
   }
       let rules9 = String.fromCharCode(115,117,98,108,97,121,111,117,116,115,95,116,95,56,49,0);
       let ballP = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,103,95,55,54,0);
      let cross2 = rules9 == String.fromCharCode(49,118,53,0);
      do {
          let crossw = 4.0;
          let libcxxcomponentsF = String.fromCharCode(105,110,102,101,114,101,100,95,98,95,57,0);
         rules9 = `${rules9.length}`;
         crossw /= Math.max((parseFloat(`${libcxxcomponentsF == String.fromCharCode(80,0) ? parseInt(`${crossw}`) : libcxxcomponentsF.length}`)), 1);
         if (cross2) {
            break;
         }
      } while (cross2 && (rules9.length >= 1));
      while (rules9 == ballP) {
         ballP += "2";
         break;
      }
         ballP += `${3 | ballP.length}`;
      if (1 > rules9.length) {
          let frame_k7A = 3.0;
          let rewardv = String.fromCharCode(115,95,49,49,95,115,104,105,102,116,115,0);
          let calendar1 = 3.0;
          let goals = String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,98,95,53,50,0);
          let shrinkh = String.fromCharCode(116,105,114,101,100,95,56,95,52,55,0);
         ballP = `${rules9.length}`;
         frame_k7A -= (goals == String.fromCharCode(121,0) ? goals.length : parseInt(`${calendar1}`));
         rewardv += `${goals.length}`;
         calendar1 -= parseFloat(`${parseInt(`${calendar1}`) * parseInt(`${frame_k7A}`)}`);
         shrinkh += "3";
      }
      for (let p = 0; p < 1; p++) {
         rules9 += `${ballP.length % (Math.max(1, 10))}`;
      }
         rules9 = `${(String.fromCharCode(48,0) == rules9 ? ballP.length : rules9.length)}`;
      redirecte = `${(String.fromCharCode(101,0) == rules9 ? rules9.length : (networkD ? 2 : 1))}`;
   let animation4 = tickU.size <= 5806310;
   do {
      tickU = new Map([[`${contextx}`, (String.fromCharCode(76,0) == debugN ? parseInt(`${contextx}`) : debugN.length)]]);
      if (animation4) {
         break;
      }
   } while (animation4 && (debugN.startsWith(`${tickU.size}`)));
      contextx -= tooltips2;
      androidf += `${tickU.size ^ 1}`;
       let libmapbufferjniB: Map<any, any> = new Map([[String.fromCharCode(108,95,56,51,95,100,105,114,101,99,116,111,114,121,0),198], [String.fromCharCode(100,115,116,115,117,98,95,99,95,52,55,0),228]]);
       let bellq = String.fromCharCode(114,101,112,101,97,116,101,114,95,99,95,53,54,0);
       let o_unlock4 = 1;
          let viewsf = 2.0;
         bellq += `${libmapbufferjniB.size}`;
         viewsf += parseInt(`${viewsf}`);
         bellq = `${o_unlock4 - bellq.length}`;
      if (1 < o_unlock4) {
         libmapbufferjniB = new Map([[`${libmapbufferjniB.size}`, bellq.length - libmapbufferjniB.size]]);
      }
         libmapbufferjniB = new Map([[`${libmapbufferjniB.size}`, 2]]);
         bellq = `${bellq.length}`;
      for (let p = 0; p < 1; p++) {
         o_unlock4 |= bellq.length | 3;
      }
          let delegate_dbv = 2.0;
          let bottomL = String.fromCharCode(110,95,51,51,95,115,116,97,114,0);
          let e_titlep = false;
         libmapbufferjniB = new Map([[`${delegate_dbv}`, bottomL.length]]);
         delegate_dbv *= ((e_titlep ? 3 : 1) >> (Math.min(2, Math.abs((e_titlep ? 1 : 5)))));
         bottomL = "1";
          let leftu: Array<any> = [189, 958, 957];
          let runtimeschedulerg = 1.0;
         libmapbufferjniB.set(`${o_unlock4}`, 2);
         leftu.push(1 % (Math.max(parseInt(`${runtimeschedulerg}`), 3)));
         runtimeschedulerg /= Math.max(leftu.length % 2, 4);
          let crickety = String.fromCharCode(114,95,49,49,95,97,108,108,111,99,97,116,101,0);
         bellq += "2";
         crickety = `${3 ^ crickety.length}`;
      debugN = `${(bellq == String.fromCharCode(70,0) ? bellq.length : parseInt(`${contextx}`))}`;
      debugN = `${((networkD ? 1 : 4) % 2)}`;
   if (debugN.length >= phoneZ.length) {
      phoneZ += `${tooltips2}`;
   }
   let libtanD = String.fromCharCode(108,111,112,110,114,0) == redirecte;
   do {
      redirecte = "3";
      if (libtanD) {
         break;
      }
   } while ((2 <= (5 + redirecte.length) || 1 <= (tickU.size + 5)) && libtanD);
   while (!networkD) {
      debugN += `${debugN.length << (Math.min(Math.abs(3), 5))}`;
      break;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let libfabricjni0: Array<any> = [78, 914, 885];
    let typesd = false;
    let hejiF = 4.0;
    let gradleO = 4;
    let delegate_8o = false;
    let reactnativejsb = String.fromCharCode(109,95,53,49,95,110,101,117,116,114,97,108,0);
    let gemfile_: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,95,51,95,56,50,0),true ], [String.fromCharCode(116,114,105,97,110,103,108,101,115,95,114,95,57,50,0),false ]]);
    let register_zu: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,112,95,55,57,0),338], [String.fromCharCode(101,120,112,108,111,114,101,114,95,99,95,56,50,0),519]]);
    let xvodX = String.fromCharCode(115,101,97,114,99,104,95,98,95,54,55,0);
    let const_e2 = String.fromCharCode(110,117,109,98,105,116,115,95,122,95,55,51,0);
    let corep: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,98,111,117,110,99,105,110,101,115,115,0),536], [String.fromCharCode(101,116,119,111,114,107,95,119,95,50,55,0),816], [String.fromCharCode(109,95,53,56,95,102,97,99,101,115,0),659]]);
    let modityO = String.fromCharCode(99,111,100,101,99,115,95,109,95,49,49,0);
    let desc9 = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,49,95,54,55,0);
    let fillX = String.fromCharCode(100,101,115,116,114,117,99,116,95,119,95,54,49,0);
      const_e2 = `${const_e2.length}`;
      delegate_8o = !typesd;
      desc9 += `${((typesd ? 4 : 5) >> (Math.min(Math.abs(gemfile_.size), 3)))}`;
      typesd = modityO == String.fromCharCode(86,0);
   for (let d = 0; d < 3; d++) {
      gradleO ^= 1;
   }
      corep.set(`${delegate_8o}`, ((delegate_8o ? 4 : 5)));
   let filled4 = typesd ? !typesd : typesd;
   do {
       let list8 = String.fromCharCode(117,95,51,49,95,108,111,110,103,110,111,105,115,101,0);
       let sendE: Array<any> = [992, 328];
       let hookT = String.fromCharCode(113,95,51,52,95,112,101,101,114,105,100,0);
          let ksad7 = false;
         sendE = [1];
         ksad7 = (!ksad7 ? !ksad7 : !ksad7);
      if (5 == (list8.length % (Math.max(6, sendE.length)))) {
         sendE = [list8.length + 1];
      }
       let appsE: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,115,117,114,114,111,117,110,100,0),254], [String.fromCharCode(98,95,49,54,95,114,101,97,115,111,110,115,0),704], [String.fromCharCode(99,95,55,55,95,100,101,115,99,112,114,105,112,116,105,111,110,0),38]]);
       let animationsd: Map<any, any> = new Map([[String.fromCharCode(109,105,110,116,95,100,95,52,50,0),String.fromCharCode(116,111,107,101,110,115,95,119,95,50,50,0)], [String.fromCharCode(100,95,51,48,95,100,117,109,112,105,110,103,0),String.fromCharCode(112,114,111,102,105,108,101,95,115,95,54,57,0)], [String.fromCharCode(109,95,55,49,95,98,101,103,97,110,0),String.fromCharCode(121,95,52,55,95,98,105,103,100,105,97,0)]]);
      while ((4 - appsE.size) > 2 && 4 > (list8.length - appsE.size)) {
         list8 = "1";
         break;
      }
         sendE.push(1 - sendE.length);
          let plashL = 1;
         hookT = `${(hookT == String.fromCharCode(71,0) ? hookT.length : plashL)}`;
      while (hookT.length > 5) {
         hookT = `${3 + hookT.length}`;
         break;
      }
       let castingk = true;
       let librrcf = true;
       let topong = String.fromCharCode(115,116,114,111,110,103,95,101,95,51,57,0);
      typesd = !typesd && desc9.length >= 22;
      if (filled4) {
         break;
      }
   } while ((!typesd && const_e2.length > 2) && filled4);
      gradleO *= (String.fromCharCode(105,0) == const_e2 ? const_e2.length : gemfile_.size);
      libfabricjni0 = [modityO.length % (Math.max(1, 10))];
   while (3 <= (xvodX.length / (Math.max(4, 7))) || (xvodX.length / (Math.max(10, gemfile_.size))) <= 4) {
      xvodX = `${(xvodX == String.fromCharCode(113,0) ? register_zu.size : xvodX.length)}`;
      break;
   }
   while (2 <= (modityO.length - gradleO)) {
       let storeb = 5.0;
       let promotionz = 4;
       let chartU = String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,54,95,56,52,0);
       let tail5 = 4.0;
         chartU = `${parseInt(`${tail5}`)}`;
       let humidityu: Array<any> = [String.fromCharCode(100,95,50,95,114,101,109,97,105,110,100,101,114,0), String.fromCharCode(119,95,53,48,95,114,101,115,111,108,118,0)];
          let libjsijniprofilert = true;
         chartU += `${humidityu.length + 3}`;
      let rounde = 9583103 >= promotionz;
      do {
         promotionz >>= Math.min(chartU.length, 5);
         if (rounde) {
            break;
         }
      } while ((!humidityu.includes(promotionz)) && rounde);
         humidityu = [1 >> (Math.min(Math.abs(parseInt(`${tail5}`)), 4))];
         promotionz >>= Math.min(1, Math.abs(2));
       let nativeexg = String.fromCharCode(110,95,50,53,95,98,111,117,110,99,105,110,101,115,115,0);
       let short_ftv = String.fromCharCode(103,95,50,53,95,105,118,97,114,115,0);
      while (3 <= (5 << (Math.min(2, Math.abs(promotionz))))) {
         short_ftv = `${chartU.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
      if ((2 << (Math.min(3, Math.abs(promotionz)))) > 4 || 1 > (promotionz ^ 2)) {
          let streamingf = String.fromCharCode(112,95,52,55,95,115,121,110,116,104,101,115,105,122,101,114,0);
          let matchesW = String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,56,95,52,51,0);
         promotionz <<= Math.min(3, Math.abs(parseInt(`${storeb}`) ^ 2));
         streamingf += `${matchesW.length / (Math.max(streamingf.length, 3))}`;
         matchesW += "1";
      }
         promotionz >>= Math.min(2, Math.abs(chartU.length * short_ftv.length));
         nativeexg = `${chartU.length}`;
      let tooltipsN = nativeexg == String.fromCharCode(56,101,97,54,98,49,0);
      do {
          let penaltya = String.fromCharCode(120,95,57,55,95,115,117,98,99,111,101,102,115,0);
          let relatedx = 4;
          let foregrounda: Map<any, any> = new Map([[String.fromCharCode(118,101,114,108,97,121,95,110,95,49,55,0),String.fromCharCode(103,95,53,95,116,101,120,116,109,111,118,115,117,98,0)], [String.fromCharCode(110,105,99,101,95,110,95,53,57,0),String.fromCharCode(108,105,98,111,112,101,110,104,95,98,95,57,52,0)]]);
         nativeexg = `${(String.fromCharCode(73,0) == chartU ? humidityu.length : chartU.length)}`;
         penaltya = "1";
         relatedx -= 2 * penaltya.length;
         foregrounda = new Map([[`${foregrounda.size}`, 1 >> (Math.min(1, Math.abs(relatedx)))]]);
         if (tooltipsN) {
            break;
         }
      } while (tooltipsN && (!nativeexg.startsWith(short_ftv)));
      modityO = `${(String.fromCharCode(53,0) == xvodX ? xvodX.length : gemfile_.size)}`;
      break;
   }
      libfabricjni0 = [desc9.length];

        if (handleClose) handleClose();

   while (const_e2.includes(`${corep.size}`)) {
      const_e2 = `${const_e2.length & 1}`;
      break;
   }
      reactnativejsb = `${modityO.length / (Math.max(2, 5))}`;
   if (!desc9.startsWith(`${xvodX.length}`)) {
       let indicatorm = 0.0;
       let friendsn = 4;
       let const_f9p = String.fromCharCode(121,95,50,50,95,100,120,116,121,115,0);
       let bing4 = String.fromCharCode(116,95,53,48,95,112,97,114,116,105,99,108,101,115,0);
         const_f9p += "3";
      let updatesS = indicatorm >= 5840049.0;
      do {
         indicatorm *= parseFloat(`${parseInt(`${indicatorm}`) & friendsn}`);
         if (updatesS) {
            break;
         }
      } while (updatesS && ((friendsn / (Math.max(parseInt(`${indicatorm}`), 6))) == 3 && 3.19 == (indicatorm / (Math.max(8, parseFloat(`${friendsn}`))))));
      if (bing4.length >= 2) {
         bing4 += `${parseInt(`${indicatorm}`) & friendsn}`;
      }
      while (friendsn <= indicatorm) {
          let usernameX = 2;
          let specA = String.fromCharCode(120,95,56,57,95,100,117,114,97,116,105,111,110,0);
         friendsn <<= Math.min(4, Math.abs(3 << (Math.min(2, Math.abs(usernameX)))));
         usernameX |= specA.length * 2;
         specA += `${2 - specA.length}`;
         break;
      }
      while ((const_f9p.length >> (Math.min(1, Math.abs(friendsn)))) < 1 && 5 < (const_f9p.length >> (Math.min(Math.abs(1), 3)))) {
         friendsn *= const_f9p.length & 3;
         break;
      }
          let splashA = 4.0;
         const_f9p += "3";
         splashA += parseInt(`${splashA}`) ^ parseInt(`${splashA}`);
       let libreactE = true;
       let areat = false;
      let skipj = const_f9p == String.fromCharCode(112,113,95,0);
      do {
         const_f9p = `${(1 >> (Math.min(Math.abs((areat ? 1 : 4)), 2)))}`;
         if (skipj) {
            break;
         }
      } while (skipj && (const_f9p != String.fromCharCode(101,0) && bing4 != String.fromCharCode(116,0)));
      desc9 += "2";
   }
   if (hejiF <= 2.44 || 5.75 <= (2.44 - hejiF)) {
       let kuaishouM: Array<any> = [513, 553, 211];
      let encryptO = 5532570 >= kuaishouM.length;
      do {
         kuaishouM.push(2);
         if (encryptO) {
            break;
         }
      } while ((3 > (kuaishouM.length & 4) || (kuaishouM.length & 4) > 5) && encryptO);
         kuaishouM = [2];
      while (kuaishouM.length >= 1) {
         kuaishouM = [kuaishouM.length | kuaishouM.length];
         break;
      }
      typesd = (93 <= ((!typesd ? 93 : libfabricjni0.length) * libfabricjni0.length));
   }
   if ((xvodX.length / 1) < 2 && (xvodX.length << (Math.min(Math.abs(1), 5))) < 2) {
       let langf = 4;
       let network_ = 0.0;
       let homeQ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,108,111,99,97,116,101,0),false ], [String.fromCharCode(107,101,121,115,116,111,114,101,95,111,95,57,0),false ], [String.fromCharCode(109,95,54,52,95,122,111,110,101,105,110,102,111,0),true ]]);
       let lang7 = false;
          let soundN = 2.0;
          let matchE: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,98,97,99,107,95,56,95,53,51,0),359], [String.fromCharCode(107,95,52,48,95,114,100,118,111,0),676], [String.fromCharCode(101,95,50,54,95,100,101,110,111,109,0),207]]);
          let aboutc = 5.0;
         network_ += (homeQ.size | (lang7 ? 1 : 3));
         soundN += parseInt(`${aboutc}`) + matchE.size;
         matchE = new Map([[`${matchE.size}`, 2]]);
         aboutc /= Math.max(parseInt(`${soundN}`), 4);
       let configureZ: Array<any> = [18, 66];
          let abidetect9: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,112,114,101,118,105,101,119,0),String.fromCharCode(106,95,54,56,95,109,105,100,0)], [String.fromCharCode(100,105,114,101,99,116,120,95,119,95,51,51,0),String.fromCharCode(112,97,105,110,116,115,95,49,95,56,53,0)]]);
         network_ -= parseInt(`${network_}`) + 2;
         abidetect9 = new Map([[`${abidetect9.size}`, abidetect9.size * 3]]);
      if (homeQ.size == 5 || 4 == (homeQ.size % 5)) {
         homeQ = new Map([[`${network_}`, parseInt(`${network_}`)]]);
      }
         langf += 1 ^ parseInt(`${network_}`);
      while (1 > (1 << (Math.min(4, Math.abs(homeQ.size))))) {
          let singlem = 3.0;
          let shared5 = String.fromCharCode(114,95,51,52,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
         lang7 = shared5 == String.fromCharCode(65,0);
         singlem += parseInt(`${singlem}`);
         shared5 = `${parseInt(`${singlem}`)}`;
         break;
      }
         configureZ.push(homeQ.size);
      if ((network_ - langf) <= 5.23) {
         langf <<= Math.min(Math.abs(3 ^ parseInt(`${network_}`)), 1);
      }
         langf ^= configureZ.length;
      for (let r = 0; r < 2; r++) {
         network_ += langf;
      }
      let notificationr = network_ <= 8539919.0;
      do {
         network_ += homeQ.size & configureZ.length;
         if (notificationr) {
            break;
         }
      } while ((2.86 >= network_) && notificationr);
          let libtanT = 5.0;
          let gradlewh = String.fromCharCode(109,97,120,98,117,114,115,116,95,53,95,49,48,48,0);
         network_ /= Math.max(4, (parseInt(`${network_}`) >> (Math.min(1, Math.abs((lang7 ? 5 : 3))))));
         libtanT /= Math.max(parseFloat(`${parseInt(`${libtanT}`) << (Math.min(Math.abs(2), 2))}`), 4);
         gradlewh = `${parseInt(`${libtanT}`)}`;
      xvodX = `${corep.size * 1}`;
   }
       let upgradej = 1.0;
         upgradej /= Math.max(parseFloat(`${2 + parseInt(`${upgradej}`)}`), 4);
         upgradej += parseFloat(`${3 | parseInt(`${upgradej}`)}`);
         upgradej /= Math.max(3, parseFloat(`${parseInt(`${upgradej}`)}`));
      const_e2 = `${gradleO}`;
   while ((gradleO / (Math.max(fillX.length, 8))) < 2) {
      gradleO -= gradleO;
      break;
   }
      delegate_8o = 93 >= modityO.length;
       let cancel8 = 5;
       let combineX = String.fromCharCode(100,95,54,55,95,98,114,101,97,107,105,110,103,0);
       let tail7 = String.fromCharCode(97,110,103,114,121,95,111,95,54,0);
         combineX += `${tail7.length}`;
          let mountingP: Map<any, any> = new Map([[String.fromCharCode(115,112,97,110,95,98,95,56,54,0),false ], [String.fromCharCode(115,117,98,115,101,116,95,54,95,49,53,0),true ]]);
         combineX = "3";
         mountingP = new Map([[`${mountingP.size}`, 2 & mountingP.size]]);
      if (!tail7.endsWith(`${combineX.length}`)) {
          let activee: Array<any> = [772, 269];
          let libjsiO: Array<any> = [859, 389];
          let libreactnativejnig = 1.0;
          let assisty = String.fromCharCode(121,95,53,50,95,115,104,97,114,101,115,0);
          let v_centerg = 1.0;
         tail7 = `${parseInt(`${v_centerg}`) / (Math.max(7, cancel8))}`;
         activee = [assisty.length];
         libjsiO = [assisty.length | parseInt(`${libreactnativejnig}`)];
         libreactnativejnig *= parseFloat(`${2}`);
         v_centerg += (assisty == String.fromCharCode(121,0) ? parseInt(`${libreactnativejnig}`) : assisty.length);
      }
         cancel8 |= 1 % (Math.max(5, combineX.length));
      if (combineX.endsWith(`${cancel8}`)) {
         cancel8 /= Math.max(cancel8, 3);
      }
       let zhubo5 = String.fromCharCode(110,95,57,57,95,97,99,107,101,100,0);
      while (combineX.length <= 1 && tail7 == String.fromCharCode(52,0)) {
          let relatedU = 4.0;
          let philippinesZ = true;
          let catalogE = 5.0;
         tail7 = `${(tail7 == String.fromCharCode(67,0) ? parseInt(`${relatedU}`) : tail7.length)}`;
         relatedU *= (parseFloat(`${(philippinesZ ? 5 : 5) * parseInt(`${catalogE}`)}`));
         philippinesZ = 7.87 > catalogE || philippinesZ;
         break;
      }
         zhubo5 = `${tail7.length}`;
         combineX = "1";
      delegate_8o = combineX == String.fromCharCode(84,0);
   while (delegate_8o || (gradleO / 1) <= 3) {
      gradleO += (1 - (delegate_8o ? 5 : 4));
      break;
   }
   for (let c = 0; c < 2; c++) {
      fillX += `${modityO.length + gradleO}`;
   }
      hejiF += parseFloat(`${1 >> (Math.min(5, Math.abs(gemfile_.size)))}`);

        Keyboard.dismiss();

      corep = new Map([[reactnativejsb, reactnativejsb.length - xvodX.length]]);
      desc9 += `${1 - reactnativejsb.length}`;
       let collectionb = 4.0;
       let constantsM = String.fromCharCode(113,117,101,117,101,95,106,95,54,53,0);
          let friendsh = false;
         constantsM += "3";
         friendsh = !friendsh || !friendsh;
      while (constantsM.endsWith(`${collectionb}`)) {
         collectionb /= Math.max(1, constantsM.length);
         break;
      }
       let canvas1 = String.fromCharCode(99,97,110,118,97,115,95,102,95,55,56,0);
      for (let l = 0; l < 2; l++) {
         canvas1 += `${parseInt(`${collectionb}`)}`;
      }
          let mintegralE = 0;
          let footballL = String.fromCharCode(110,95,54,52,95,102,108,97,99,0);
          let x_playerK = String.fromCharCode(112,95,51,53,95,109,117,108,116,105,112,97,114,116,0);
         constantsM = "3";
         mintegralE += footballL.length ^ mintegralE;
         footballL = `${mintegralE / 3}`;
         x_playerK += `${(footballL == String.fromCharCode(54,0) ? footballL.length : mintegralE)}`;
      if (5 == constantsM.length) {
         collectionb *= 3 * constantsM.length;
      }
      xvodX = "3";
   for (let u = 0; u < 2; u++) {
      modityO += `${gemfile_.size & 1}`;
   }
   let libtanw = 8852297 <= register_zu.size;
   do {
      register_zu = new Map([[`${register_zu.size}`, 3 + register_zu.size]]);
      if (libtanw) {
         break;
      }
   } while ((2 == (4 * xvodX.length) && (4 * register_zu.size) == 2) && libtanw);
   while (!delegate_8o) {
      delegate_8o = (libfabricjni0.length ^ gemfile_.size) <= 19;
      break;
   }
   while (gemfile_.size < 3) {
       let mbnative4 = String.fromCharCode(119,95,50,55,95,115,111,117,114,99,101,105,100,0);
       let mode0 = String.fromCharCode(97,97,114,99,104,95,97,95,55,0);
       let matchu = 0.0;
       let splashS = true;
       let backwardM = String.fromCharCode(99,97,115,101,115,95,108,95,49,49,0);
      while (backwardM.length == 2) {
          let schedulex = 0;
          let xvod1 = 2.0;
          let videoi = String.fromCharCode(115,95,53,55,95,110,101,103,111,116,105,97,116,101,0);
         mode0 += `${schedulex}`;
         schedulex /= Math.max(videoi.length + 1, 4);
         xvod1 /= Math.max(5, parseFloat(`${3 + videoi.length}`));
         break;
      }
         splashS = mode0.length <= 65;
      while ((mode0.length + parseInt(`${matchu}`)) >= 4) {
         matchu += parseFloat(`${mode0.length ^ 3}`);
         break;
      }
      if (5 > backwardM.length) {
         backwardM += `${mbnative4.length}`;
      }
      for (let k = 0; k < 1; k++) {
          let readz = String.fromCharCode(115,116,114,110,108,101,110,95,118,95,54,53,0);
         mode0 = `${backwardM.length}`;
         readz = `${readz.length - 2}`;
      }
         mode0 += `${parseInt(`${matchu}`) >> (Math.min(3, Math.abs(3)))}`;
         splashS = 60 < mbnative4.length;
      for (let r = 0; r < 2; r++) {
         matchu -= parseFloat(`${parseInt(`${matchu}`) >> (Math.min(backwardM.length, 4))}`);
      }
      while (matchu >= 5.71) {
         splashS = !splashS;
         break;
      }
         matchu /= Math.max(5, (parseFloat(`${(splashS ? 1 : 2)}`)));
      let memberu = mode0 == String.fromCharCode(105,112,109,0);
      do {
         mode0 = `${(mbnative4 == String.fromCharCode(103,0) ? parseInt(`${matchu}`) : mbnative4.length)}`;
         if (memberu) {
            break;
         }
      } while (memberu && (4.87 < matchu));
         matchu /= Math.max(3, parseFloat(`${1}`));
      let crossl = backwardM.length <= 6041688;
      do {
         backwardM += `${mbnative4.length ^ 2}`;
         if (crossl) {
            break;
         }
      } while ((4 < backwardM.length || splashS) && crossl);
       let agreementw: Map<any, any> = new Map([[String.fromCharCode(121,95,49,55,95,112,101,114,105,111,100,105,99,0),189], [String.fromCharCode(116,95,49,95,105,109,97,103,101,0),34], [String.fromCharCode(99,117,114,118,101,95,48,95,51,52,0),875]]);
          let libimagepipelineb: Map<any, any> = new Map([[String.fromCharCode(121,95,54,49,95,100,105,114,101,99,116,0),272], [String.fromCharCode(117,95,51,50,95,109,97,120,0),177], [String.fromCharCode(107,95,49,52,95,100,111,117,98,108,101,0),599]]);
         mbnative4 = `${(String.fromCharCode(54,0) == mode0 ? mode0.length : agreementw.size)}`;
         libimagepipelineb.set(`${libimagepipelineb.size}`, libimagepipelineb.size);
      typesd = desc9.length > 13;
      break;
   }
   for (let t = 0; t < 2; t++) {
       let inactive3 = 4.0;
         inactive3 *= parseFloat(`${parseInt(`${inactive3}`) ^ parseInt(`${inactive3}`)}`);
       let z_titleM: Array<any> = [933, 152];
          let reminderE = String.fromCharCode(115,117,98,112,97,116,104,115,95,118,95,55,51,0);
         inactive3 *= parseFloat(`${2}`);
         reminderE = `${(String.fromCharCode(50,0) == reminderE ? reminderE.length : reminderE.length)}`;
      fillX += `${register_zu.size / 1}`;
   }
      const_e2 = "1";
   let videojsk = String.fromCharCode(97,56,115,0) == reactnativejsb;
   do {
       let refreshR: Array<any> = [318, 315, 373];
       let point2 = String.fromCharCode(100,120,116,111,114,121,95,108,95,50,52,0);
      let usernameU = refreshR.length <= 7536946;
      do {
         refreshR = [point2.length];
         if (usernameU) {
            break;
         }
      } while (usernameU && (2 == (refreshR.length | 2) && (2 | refreshR.length) == 4));
      for (let q = 0; q < 1; q++) {
         refreshR.push(refreshR.length);
      }
      if (3 < refreshR.length) {
         point2 = `${refreshR.length + point2.length}`;
      }
       let codegen2: Array<any> = [625, 883, 414];
      while (5 >= (refreshR.length - 3)) {
         refreshR = [(point2 == String.fromCharCode(99,0) ? refreshR.length : point2.length)];
         break;
      }
       let dinit_ynz: Map<any, any> = new Map([[String.fromCharCode(102,105,114,115,116,108,121,95,53,95,53,49,0),String.fromCharCode(117,95,54,53,95,101,110,99,111,100,101,114,115,0)], [String.fromCharCode(97,95,55,53,95,99,111,109,109,105,116,0),String.fromCharCode(119,95,53,48,95,108,111,103,115,0)]]);
      reactnativejsb += `${point2.length % 2}`;
      if (videojsk) {
         break;
      }
   } while (videojsk && (!reactnativejsb.endsWith(modityO)));
   let soundJ = 8034194 <= register_zu.size;
   do {
       let mapbufferV: Array<any> = [542, 746, 647];
       let diceB = String.fromCharCode(108,111,103,103,101,100,95,119,95,56,0);
          let sinal = 0;
          let telemetryQ = 1.0;
          let main_q4 = 3;
         mapbufferV.push(2);
         sinal |= sinal;
         telemetryQ /= Math.max(1, parseFloat(`${main_q4 * 1}`));
         main_q4 &= parseInt(`${telemetryQ}`);
      for (let w = 0; w < 3; w++) {
         mapbufferV = [1];
      }
         mapbufferV.push(mapbufferV.length & 2);
       let signinupU = 4;
       let libreactW = String.fromCharCode(119,95,50,54,0);
          let gdtadvZ: Array<any> = [String.fromCharCode(110,97,116,105,111,110,97,108,95,106,95,51,55,0), String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,105,95,53,51,0)];
          let flyerX = String.fromCharCode(119,95,56,52,95,97,112,112,114,101,99,105,97,116,101,100,104,0);
         mapbufferV = [mapbufferV.length];
         gdtadvZ = [1];
         flyerX = `${(String.fromCharCode(67,0) == flyerX ? flyerX.length : gdtadvZ.length)}`;
      register_zu = new Map([[modityO, modityO.length + 1]]);
      diceB = `${diceB.length}`;
      if (soundJ) {
         break;
      }
   } while (soundJ && (1 == register_zu.size));
   if ((gradleO & 5) >= 4 && (const_e2.length & gradleO) >= 5) {
       let dataF = String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,55,95,55,54,0);
       let searchbarW: Array<any> = [String.fromCharCode(113,95,55,49,95,112,101,114,115,112,0), String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,95,105,95,56,55,0), String.fromCharCode(109,95,50,51,95,109,117,108,116,105,112,108,101,120,101,100,0)];
       let mergerh: Array<any> = [String.fromCharCode(118,101,114,115,105,111,110,95,97,95,54,50,0), String.fromCharCode(111,95,56,52,95,104,105,103,104,0)];
       let grayS: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,106,95,57,0),220], [String.fromCharCode(116,95,49,48,48,95,116,101,115,116,0),607]]);
       let cancelB = 2;
      for (let c = 0; c < 1; c++) {
         mergerh.push(cancelB);
      }
      for (let q = 0; q < 1; q++) {
         searchbarW.push((dataF == String.fromCharCode(120,0) ? searchbarW.length : dataF.length));
      }
         mergerh.push(mergerh.length);
         grayS.set(dataF, dataF.length / (Math.max(1, 5)));
         mergerh = [grayS.size ^ mergerh.length];
         mergerh = [grayS.size];
         searchbarW.push(cancelB);
      while (1 >= (cancelB * searchbarW.length) && (cancelB * searchbarW.length) >= 1) {
         cancelB *= searchbarW.length << (Math.min(dataF.length, 4));
         break;
      }
      while ((1 & searchbarW.length) < 2) {
          let details3 = 3.0;
          let condensed9: Map<any, any> = new Map([[String.fromCharCode(122,101,116,97,95,104,95,52,52,0),440], [String.fromCharCode(98,116,111,98,105,110,95,55,95,49,51,0),664], [String.fromCharCode(109,95,56,51,95,100,97,116,97,115,0),295]]);
          let usernameA = String.fromCharCode(116,114,101,110,100,105,110,103,95,55,95,50,0);
          let runtimeschedulerm = String.fromCharCode(112,95,53,54,95,114,101,117,115,97,98,108,101,0);
          let teams = 3.0;
         searchbarW.push(1);
         details3 -= parseInt(`${teams}`) | 3;
         condensed9.set(usernameA, (usernameA == String.fromCharCode(57,0) ? parseInt(`${details3}`) : usernameA.length));
         runtimeschedulerm += `${usernameA.length - 1}`;
         teams *= parseFloat(`${1 * parseInt(`${details3}`)}`);
         break;
      }
         grayS.set(dataF, mergerh.length << (Math.min(Math.abs(1), 5)));
      for (let s = 0; s < 1; s++) {
          let libhermes5 = String.fromCharCode(100,117,112,115,95,121,95,57,51,0);
         dataF += `${libhermes5.length ^ mergerh.length}`;
      }
         cancelB ^= (dataF == String.fromCharCode(110,0) ? dataF.length : searchbarW.length);
          let play1 = true;
          let guideB = false;
         mergerh.push(((guideB ? 2 : 1) << (Math.min(4, Math.abs((play1 ? 5 : 3))))));
      while (2 > (3 & searchbarW.length) && (cancelB & searchbarW.length) > 3) {
         searchbarW = [mergerh.length];
         break;
      }
          let backJ = String.fromCharCode(99,97,118,108,99,95,120,95,56,48,0);
          let awayU = 5;
         grayS.set(`${cancelB}`, 1);
         backJ = `${3 & backJ.length}`;
         awayU >>= Math.min(Math.abs(awayU), 5);
      const_e2 = `${(String.fromCharCode(69,0) == xvodX ? xvodX.length : grayS.size)}`;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let viewerI: Array<any> = [405, 217, 984];
    let desc6 = String.fromCharCode(99,95,51,49,95,99,97,114,114,105,97,103,101,0);
    let holderF: Array<any> = [883, 819, 602];
    let sourcet = String.fromCharCode(119,101,108,99,104,95,48,95,56,55,0);
    let submitl = 0;
    let baiduV = String.fromCharCode(116,95,49,95,114,101,115,105,103,110,101,100,0);
    let animationsg = 3.0;
    let sellw: Array<any> = [String.fromCharCode(101,95,56,49,95,115,116,117,102,102,105,110,103,0), String.fromCharCode(106,95,49,95,108,105,103,104,116,101,110,105,110,103,0), String.fromCharCode(103,95,53,55,95,115,116,97,116,105,111,110,97,114,121,0)];
    let anythinka = String.fromCharCode(120,95,49,48,95,112,97,114,101,110,0);
      sourcet = `${baiduV.length}`;

        if (usernameErrMsg !== null) return;

      desc6 += `${desc6.length ^ sourcet.length}`;

        if (isSubmitting) return;

   let fullO = 4994357.0 <= animationsg;
   do {
      animationsg += 2 * holderF.length;
      if (fullO) {
         break;
      }
   } while (((baiduV.length - parseInt(`${animationsg}`)) == 5 && 4 == (parseInt(`${animationsg}`) - 5)) && fullO);
        setSubmitting(true);

       let entry8: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,112,108,97,99,101,0),String.fromCharCode(98,95,50,49,95,101,99,111,109,112,114,101,115,115,111,114,0)], [String.fromCharCode(101,95,51,95,97,112,111,115,0),String.fromCharCode(115,119,105,102,116,99,95,108,95,49,51,0)], [String.fromCharCode(120,95,53,50,95,99,108,105,99,107,115,0),String.fromCharCode(97,95,57,57,95,103,101,110,101,114,97,116,105,111,110,0)]]);
       let downloadedh = 2;
       let sportsE: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,95,102,116,118,112,110,111,100,101,0),102], [String.fromCharCode(121,95,53,56,95,102,105,116,116,101,100,0),281], [String.fromCharCode(103,95,49,57,95,115,116,97,116,117,115,101,115,0),873]]);
         entry8 = new Map([[`${entry8.size}`, 1]]);
          let qaagS = String.fromCharCode(117,110,98,111,110,100,101,100,95,53,95,54,55,0);
          let expiredi = 1;
         entry8.set(`${qaagS}`, entry8.size);
         qaagS = "2";
         expiredi += expiredi % 1;
         sportsE.set(`${downloadedh}`, sportsE.size);
         sportsE.set(`${downloadedh}`, 2 >> (Math.min(5, Math.abs(entry8.size))));
         downloadedh ^= sportsE.size << (Math.min(4, Math.abs(downloadedh)));
      while (downloadedh >= 4) {
         entry8 = new Map([[`${entry8.size}`, entry8.size + 2]]);
         break;
      }
         downloadedh ^= 3 >> (Math.min(4, Math.abs(downloadedh)));
       let traminiQ = String.fromCharCode(99,104,101,99,107,95,52,95,51,53,0);
       let libfabricjniv = String.fromCharCode(119,95,54,51,95,116,97,103,115,0);
      for (let w = 0; w < 3; w++) {
         entry8 = new Map([[`${sportsE.size}`, sportsE.size]]);
      }
      holderF.push(holderF.length % 1);

        try {

   while ((viewerI.length / 1) == 2) {
       let adulth = String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,54,95,52,55,0);
       let controlM = String.fromCharCode(117,95,52,56,95,118,105,111,108,101,116,0);
       let down2 = 5;
         adulth = `${controlM.length % 2}`;
      let shooto = String.fromCharCode(52,102,121,0) == controlM;
      do {
         controlM = `${2 >> (Math.min(4, Math.abs(down2)))}`;
         if (shooto) {
            break;
         }
      } while ((down2 >= controlM.length) && shooto);
       let backwardZ = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,95,97,95,52,56,0);
       let mbbidi = String.fromCharCode(119,95,52,55,95,110,111,114,109,0);
      if ((2 >> (Math.min(3, adulth.length))) >= 4 || (2 >> (Math.min(2, adulth.length))) >= 3) {
         adulth += `${backwardZ.length + 1}`;
      }
      if (adulth != controlM) {
         controlM = `${down2}`;
      }
      let editl = controlM.length <= 9602554;
      do {
         controlM = `${(String.fromCharCode(57,0) == controlM ? mbbidi.length : controlM.length)}`;
         if (editl) {
            break;
         }
      } while ((4 <= mbbidi.length) && editl);
      for (let w = 0; w < 3; w++) {
         down2 %= Math.max(2, backwardZ.length * 3);
      }
       let screenX: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,115,95,51,95,52,56,0),533], [String.fromCharCode(115,116,97,108,101,95,114,95,55,51,0),591]]);
      for (let k = 0; k < 2; k++) {
         adulth = `${(backwardZ == String.fromCharCode(74,0) ? backwardZ.length : down2)}`;
      }
      viewerI.push(parseInt(`${animationsg}`));
      break;
   }
            await yys_GesturesConst.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

   if ((viewerI.length * 5) < 2 && (viewerI.length * 5) < 4) {
      holderF = [1];
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      animationsg *= 1;
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   while ((3 * sourcet.length) < 1) {
      holderF.push(2 % (Math.max(submitl, 9)));
      break;
   }
            return;
        }


        dispatch(updateUsernameState(username));

   let footballK = 5479681 <= desc6.length;
   do {
      desc6 = `${parseInt(`${animationsg}`)}`;
      if (footballK) {
         break;
      }
   } while ((sourcet.length == desc6.length) && footballK);
        dispatch(changeScreenAction("修改成功"));

      desc6 = `${1 & sourcet.length}`;

        if (onSubmitSuccess) onSubmitSuccess(username);

      sourcet += `${baiduV.length * 2}`;

        Keyboard.dismiss();

   for (let c = 0; c < 3; c++) {
      holderF.push((sourcet == String.fromCharCode(79,0) ? parseInt(`${animationsg}`) : sourcet.length));
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let annerJ = String.fromCharCode(101,97,99,115,95,49,95,50,48,0);
       let unselectedn: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,116,115,95,107,95,53,54,0),218], [String.fromCharCode(103,95,50,48,95,98,106,101,99,116,0),754]]);
      if (3 >= (annerJ.length % (Math.max(4, unselectedn.size)))) {
         annerJ += `${1 - annerJ.length}`;
      }
      let eventi = annerJ.length <= 9654622;
      do {
         annerJ = `${1 ^ annerJ.length}`;
         if (eventi) {
            break;
         }
      } while (((annerJ.length % 2) < 4) && eventi);
          let ewardedb = 4;
          let privacyF = String.fromCharCode(112,95,55,54,95,100,117,109,112,0);
         unselectedn = new Map([[`${unselectedn.size}`, 1]]);
         ewardedb ^= privacyF.length;
         privacyF += `${(String.fromCharCode(48,0) == privacyF ? ewardedb : privacyF.length)}`;
      let libcxxcomponentsH = 9170941 >= unselectedn.size;
      do {
          let annera = false;
          let diceP = String.fromCharCode(111,95,51,55,95,99,104,105,108,100,0);
          let internetl: Map<any, any> = new Map([[String.fromCharCode(102,105,120,115,116,114,105,100,101,95,51,95,52,50,0),false ], [String.fromCharCode(115,95,54,56,95,108,105,98,115,109,98,99,0),true ]]);
          let mbnativeM: Map<any, any> = new Map([[String.fromCharCode(112,97,114,105,116,121,95,112,95,50,50,0),540], [String.fromCharCode(99,111,100,101,102,95,108,95,51,54,0),896], [String.fromCharCode(116,104,101,109,101,100,95,115,95,52,55,0),907]]);
         unselectedn = new Map([[`${mbnativeM.size}`, ((annera ? 3 : 4) ^ 2)]]);
         annera = diceP.length <= 41 || internetl.size <= 41;
         diceP = `${3 ^ internetl.size}`;
         mbnativeM = new Map([[`${internetl.size}`, 1 | internetl.size]]);
         if (libcxxcomponentsH) {
            break;
         }
      } while ((unselectedn.size == 5) && libcxxcomponentsH);
      while (4 <= unselectedn.size) {
          let incident1 = true;
          let mbnativer: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,109,111,118,101,110,99,0),false ], [String.fromCharCode(107,95,50,50,95,98,101,120,116,0),false ], [String.fromCharCode(115,111,110,111,95,49,95,54,50,0),true ]]);
         annerJ = "3";
         incident1 = 61 <= mbnativer.size;
         mbnativer.set(`${mbnativer.size}`, mbnativer.size);
         break;
      }
          let canvasW = String.fromCharCode(121,95,55,48,95,99,111,110,102,105,103,117,114,101,0);
         unselectedn = new Map([[`${unselectedn.size}`, annerJ.length]]);
         canvasW += `${canvasW.length % (Math.max(canvasW.length, 6))}`;
      animationsg *= submitl;

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
                                source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
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
                    {username.replace(/\s+/g, "").length}/18
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