import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/tt_copy_heji";
import { updateUsernameState } from "@redux/actions/tt_topon";
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
       let delegate_gp = 5.0;
    let expired6 = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,122,95,51,55,0);
    let gesturesZ = String.fromCharCode(102,99,102,115,95,100,95,51,52,0);
    let kickR: Array<any> = [132, 486, 411];
    let playlistN = false;
    let eactf = String.fromCharCode(116,95,53,48,95,101,99,109,117,108,116,0);
    let bootsplashB: Array<any> = [53, 606];
    let signinupZ: Map<any, any> = new Map([[String.fromCharCode(105,115,99,111,118,101,114,95,110,95,51,54,0),String.fromCharCode(108,95,56,57,95,112,114,101,115,101,110,116,97,98,108,101,0)], [String.fromCharCode(111,95,50,54,95,100,105,115,116,114,105,98,117,116,101,100,0),String.fromCharCode(102,95,49,48,48,95,105,116,120,102,109,0)], [String.fromCharCode(111,95,56,57,95,108,111,99,105,0),String.fromCharCode(101,95,53,55,95,97,98,108,101,0)]]);
    let whatsappF: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,99,111,100,101,115,95,49,95,54,55,0),315], [String.fromCharCode(99,95,55,53,95,115,117,98,109,111,100,101,108,115,0),962], [String.fromCharCode(112,97,99,107,101,116,105,110,95,97,95,51,57,0),925]]);
    let userr = String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,118,95,50,51,0);
    let layoutD = 2.0;
    let component_ = 4;
    let vietnamc = false;
    let hooka = false;
    let rulesN = String.fromCharCode(122,95,51,55,95,116,109,109,98,114,0);
      component_ |= 3;
      bootsplashB = [whatsappF.size >> (Math.min(userr.length, 5))];
      playlistN = expired6.length < 31;
   for (let o = 0; o < 1; o++) {
      gesturesZ += `${(3 / (Math.max(2, (vietnamc ? 3 : 2))))}`;
   }
   let tickg = 9535224 >= eactf.length;
   do {
      eactf = `${kickR.length}`;
      if (tickg) {
         break;
      }
   } while (tickg && (1 > (3 - eactf.length) && 5 > (eactf.length - 3)));
      bootsplashB = [userr.length];
      bootsplashB.push(bootsplashB.length);
      signinupZ.set(gesturesZ, kickR.length);
       let eighteen3 = String.fromCharCode(121,95,50,57,95,97,95,55,49,0);
       let mbnativek = String.fromCharCode(100,101,108,101,103,97,116,101,95,109,95,55,52,0);
       let utilsx: Array<any> = [20, 465];
       let trashS = 4.0;
      let dragF = utilsx.length <= 5581507;
      do {
         utilsx = [(String.fromCharCode(68,0) == eighteen3 ? mbnativek.length : eighteen3.length)];
         if (dragF) {
            break;
         }
      } while (dragF && (5 >= (parseInt(`${trashS}`) * utilsx.length) && 3.41 >= (trashS * 4.57)));
      while ((utilsx.length % 1) < 4 && 1 < (mbnativek.length % (Math.max(1, 5)))) {
         utilsx = [parseInt(`${trashS}`) << (Math.min(eighteen3.length, 1))];
         break;
      }
      for (let t = 0; t < 3; t++) {
          let unselectedR: Array<any> = [842, 671, 947];
          let entryL = String.fromCharCode(116,101,115,101,100,103,101,95,117,95,57,57,0);
          let gradlewp: Map<any, any> = new Map([[String.fromCharCode(112,95,52,54,95,114,101,115,116,114,105,99,116,105,111,110,0),470], [String.fromCharCode(106,95,53,57,95,99,111,102,102,105,110,0),731], [String.fromCharCode(102,105,102,111,115,95,54,95,56,0),596]]);
          let middleZ: Map<any, any> = new Map([[String.fromCharCode(121,117,118,109,111,110,111,95,54,95,52,49,0),111], [String.fromCharCode(119,114,105,116,101,98,105,116,115,95,105,95,53,53,0),174]]);
         eighteen3 = `${middleZ.size - 3}`;
         unselectedR = [3];
         entryL += `${3 / (Math.max(9, entryL.length))}`;
         gradlewp = new Map([[`${gradlewp.size}`, gradlewp.size / 2]]);
         middleZ.set(entryL, (entryL == String.fromCharCode(112,0) ? entryL.length : unselectedR.length));
      }
          let greye = 2.0;
          let flyern: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,115,117,98,102,114,97,109,101,0),871], [String.fromCharCode(111,95,50,56,95,112,117,112,117,112,0),965], [String.fromCharCode(121,95,56,51,95,112,114,101,99,111,109,112,111,115,101,100,0),361]]);
         utilsx.push((eighteen3 == String.fromCharCode(113,0) ? parseInt(`${trashS}`) : eighteen3.length));
         greye /= Math.max(2, 5);
         flyern.set(`${greye}`, 3);
         trashS /= Math.max(4, 3);
       let actionJ = 5.0;
         trashS /= Math.max(4, 3);
      while (1 == (5 / (Math.max(4, eighteen3.length))) && 5 == (eighteen3.length + parseInt(`${trashS}`))) {
          let animation3 = true;
          let matchesl = false;
         eighteen3 = `${(parseInt(`${actionJ}`) * (animation3 ? 4 : 2))}`;
         animation3 = (matchesl ? matchesl : matchesl);
         break;
      }
      bootsplashB.push(eactf.length / (Math.max(gesturesZ.length, 9)));
      whatsappF = new Map([[eactf, (String.fromCharCode(53,0) == eactf ? eactf.length : (playlistN ? 3 : 5))]]);
   let fastforward8 = playlistN ? !playlistN : playlistN;
   do {
      playlistN = vietnamc;
      if (fastforward8) {
         break;
      }
   } while ((!playlistN) && fastforward8);
      vietnamc = (46 > (eactf.length << (Math.min(1, Math.abs((playlistN ? eactf.length : 46))))));
   for (let z = 0; z < 1; z++) {
      bootsplashB = [parseInt(`${layoutD}`) - 2];
   }
      expired6 = `${(gesturesZ == String.fromCharCode(97,0) ? gesturesZ.length : parseInt(`${layoutD}`))}`;
      hooka = 8 > kickR.length && String.fromCharCode(74,0) == userr;
       let recommendationN: Array<any> = [411, 212, 682];
       let appsD = 3;
      let typing4 = 6097138 <= recommendationN.length;
      do {
          let viewerR: Array<any> = [908, 795];
          let successM = 5.0;
          let splashK: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,51,95,56,0),912], [String.fromCharCode(108,95,53,55,95,109,99,111,109,112,97,110,100,0),468], [String.fromCharCode(122,95,53,53,95,116,114,97,110,115,108,97,116,101,0),420]]);
          let heartq = 2;
          let backgroundl = String.fromCharCode(113,116,114,108,101,95,53,95,52,49,0);
         recommendationN.push(appsD);
         viewerR.push(2);
         successM += (parseFloat(`${backgroundl == String.fromCharCode(81,0) ? backgroundl.length : heartq}`));
         splashK.set(`${successM}`, 3);
         heartq %= Math.max(4, parseInt(`${successM}`) * 2);
         if (typing4) {
            break;
         }
      } while (typing4 && (!recommendationN.includes(appsD)));
      let loading9 = appsD >= 6886515;
      do {
         appsD += 3 ^ recommendationN.length;
         if (loading9) {
            break;
         }
      } while (loading9 && (recommendationN.length >= 3));
         recommendationN.push(recommendationN.length % 3);
      if (2 > (5 << (Math.min(2, recommendationN.length))) || (appsD << (Math.min(Math.abs(5), 2))) > 3) {
          let colors_ = 2;
          let eactV = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,48,95,56,49,0);
          let applicationn = String.fromCharCode(102,95,55,55,95,117,110,109,97,116,99,104,101,100,0);
          let pauseV = 2.0;
          let showx = 4.0;
         appsD *= 2 | applicationn.length;
         colors_ <<= Math.min(Math.abs(colors_), 1);
         eactV = "2";
         applicationn += `${colors_}`;
         pauseV -= parseFloat(`${eactV.length}`);
         showx *= parseFloat(`${colors_ % 2}`);
      }
         appsD /= Math.max(2, 2 ^ recommendationN.length);
         recommendationN.push(3);
      gesturesZ += "1";
   while (4 == eactf.length) {
       let playD = String.fromCharCode(121,95,57,57,95,115,104,105,101,108,100,0);
       let yellowy = String.fromCharCode(101,110,115,117,114,101,100,95,56,95,49,48,48,0);
       let iconi = String.fromCharCode(98,95,53,54,95,114,101,115,101,116,115,0);
       let zhubo6 = 4.0;
       let singaporeh: Array<any> = [String.fromCharCode(100,97,116,97,95,55,95,52,55,0), String.fromCharCode(104,105,103,104,98,105,116,115,95,110,95,56,51,0)];
          let fileM = String.fromCharCode(110,101,111,110,95,100,95,52,51,0);
         yellowy = `${playD.length}`;
         fileM = `${1 + fileM.length}`;
      let detailsO = yellowy == String.fromCharCode(97,98,54,114,110,105,97,104,102,114,0);
      do {
         yellowy = `${singaporeh.length + parseInt(`${zhubo6}`)}`;
         if (detailsO) {
            break;
         }
      } while (detailsO && (playD.length <= 4));
         playD += `${(yellowy == String.fromCharCode(71,0) ? iconi.length : yellowy.length)}`;
         zhubo6 += parseFloat(`${1 << (Math.min(2, yellowy.length))}`);
          let anytimer = String.fromCharCode(109,105,100,100,108,101,95,108,95,48,0);
          let textK = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,57,95,56,49,0);
         zhubo6 -= parseFloat(`${anytimer.length}`);
         anytimer = `${(String.fromCharCode(69,0) == textK ? textK.length : textK.length)}`;
      let info7 = 6608828 <= singaporeh.length;
      do {
          let downT: Array<any> = [String.fromCharCode(107,95,53,51,95,99,111,117,110,116,114,121,0), String.fromCharCode(97,100,97,112,116,101,114,115,95,114,95,53,0)];
          let expiredT = 1;
          let nativeexT = 4.0;
          let sigmobG = false;
         singaporeh = [playD.length];
         downT.push(downT.length / 2);
         expiredT <<= Math.min(4, Math.abs((downT.length + (sigmobG ? 5 : 4))));
         nativeexT /= Math.max(5, parseInt(`${nativeexT}`) * expiredT);
         sigmobG = 77 == expiredT;
         if (info7) {
            break;
         }
      } while ((zhubo6 > parseFloat(`${singaporeh.length}`)) && info7);
         singaporeh = [parseInt(`${zhubo6}`)];
      while ((zhubo6 + 3.84) >= 2.22) {
         iconi = `${2 / (Math.max(7, iconi.length))}`;
         break;
      }
      if ((parseFloat(`${playD.length}`) * zhubo6) < 4.3) {
         playD += `${2 & yellowy.length}`;
      }
      while ((parseInt(`${zhubo6}`) / (Math.max(iconi.length, 5))) <= 1 || (zhubo6 / 3.61) <= 3.57) {
          let successA = String.fromCharCode(105,95,51,49,95,100,100,118,97,0);
         zhubo6 += parseFloat(`${iconi.length}`);
         successA = `${successA.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
         yellowy = `${3 / (Math.max(3, iconi.length))}`;
         zhubo6 /= Math.max(1, parseFloat(`${1 + singaporeh.length}`));
      for (let e = 0; e < 2; e++) {
         iconi = "1";
      }
      if ((zhubo6 + 1.59) < 4.55 || (1.59 + zhubo6) < 3.72) {
          let logou = 4;
          let watchH: Array<any> = [String.fromCharCode(110,111,116,104,105,110,103,95,107,95,56,53,0), String.fromCharCode(108,95,50,48,95,115,105,110,101,119,105,110,0), String.fromCharCode(118,95,49,48,95,114,101,100,117,110,100,97,110,116,0)];
          let tickedC = false;
          let switch_zH = false;
         zhubo6 -= parseFloat(`${2 << (Math.min(3, iconi.length))}`);
         logou &= watchH.length - 3;
         watchH = [2];
         tickedC = 58 <= watchH.length || logou <= 58;
         switch_zH = tickedC;
      }
          let back7 = 4.0;
          let activityY: Array<any> = [199, 545];
          let dialogg = String.fromCharCode(117,95,56,57,95,108,111,97,116,0);
         yellowy = "3";
         back7 /= Math.max(1, parseFloat(`${activityY.length >> (Math.min(Math.abs(3), 5))}`));
         activityY = [dialogg.length];
         dialogg = `${activityY.length ^ dialogg.length}`;
      playlistN = gesturesZ.length < 6;
      break;
   }
   if ((whatsappF.size % 1) > 1 || (whatsappF.size % 1) > 2) {
       let change3 = 1;
       let short_gw = 4.0;
       let expired7 = 2;
       let twitterL = String.fromCharCode(99,95,51,52,95,99,111,110,116,114,111,108,101,114,115,0);
       let filledQ = 4.0;
         expired7 <<= Math.min(5, Math.abs((String.fromCharCode(82,0) == twitterL ? parseInt(`${filledQ}`) : twitterL.length)));
       let champion0 = 0.0;
       let debugo = 3.0;
          let leagued: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,110,103,95,101,95,54,51,0),310], [String.fromCharCode(99,95,51,57,95,115,116,97,98,105,108,105,116,121,0),488], [String.fromCharCode(119,95,56,57,95,112,105,120,101,108,115,0),358]]);
          let fastN = 4.0;
          let nterstitialk = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,95,48,95,53,52,0);
         twitterL = `${twitterL.length - leagued.size}`;
         leagued.set(`${fastN}`, parseInt(`${fastN}`) & nterstitialk.length);
         nterstitialk += `${parseInt(`${fastN}`)}`;
      let shirtN = 7424940 <= expired7;
      do {
         expired7 %= Math.max(2, twitterL.length);
         if (shirtN) {
            break;
         }
      } while (shirtN && (twitterL.length >= 5));
          let storeg = false;
          let bodani = 1;
         filledQ *= parseFloat(`${1}`);
         storeg = 56 > bodani && !storeg;
         bodani <<= Math.min(4, Math.abs(1));
      let chatl = 6460781.0 <= short_gw;
      do {
         short_gw -= expired7 << (Math.min(Math.abs(parseInt(`${debugo}`)), 2));
         if (chatl) {
            break;
         }
      } while ((change3 <= 1) && chatl);
         debugo *= twitterL.length;
       let homel = String.fromCharCode(110,95,49,95,118,105,111,108,101,110,99,101,0);
          let fullN = String.fromCharCode(118,105,97,95,54,95,53,53,0);
         debugo /= Math.max(5, (twitterL == String.fromCharCode(110,0) ? twitterL.length : parseInt(`${short_gw}`)));
         fullN = `${fullN.length}`;
         change3 %= Math.max(1 | parseInt(`${filledQ}`), 1);
      while (champion0 == 3.47) {
          let chinasameE: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,95,103,95,57,52,0),false ], [String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,111,95,50,55,0),false ]]);
          let signinupL = false;
         debugo -= 2 * chinasameE.size;
         chinasameE.set(`${signinupL}`, ((signinupL ? 5 : 1)));
         break;
      }
         homel += `${parseInt(`${short_gw}`)}`;
         homel += `${twitterL.length}`;
      while (twitterL.endsWith(`${expired7}`)) {
         twitterL += `${parseInt(`${champion0}`) << (Math.min(twitterL.length, 1))}`;
         break;
      }
      while ((1 & twitterL.length) == 2) {
         twitterL += `${(homel == String.fromCharCode(65,0) ? expired7 : homel.length)}`;
         break;
      }
      whatsappF.set(`${delegate_gp}`, parseInt(`${delegate_gp}`));
   }
       let progresse = false;
       let logoA = 4.0;
      while (progresse) {
          let filterk = 4.0;
          let tail2 = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,48,95,56,0);
          let package_e9: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,95,109,105,110,0),674], [String.fromCharCode(112,105,116,99,104,95,99,95,56,55,0),326]]);
          let verticale = 4.0;
         progresse = !tail2.endsWith(`${logoA}`);
         filterk *= parseInt(`${verticale}`);
         tail2 += `${2 + parseInt(`${verticale}`)}`;
         package_e9 = new Map([[`${package_e9.size}`, 2]]);
         break;
      }
       let analyticB = true;
       let confirmationi = false;
      if (analyticB) {
          let foundw = 5.0;
         progresse = !confirmationi;
         foundw += parseFloat(`${1 & parseInt(`${foundw}`)}`);
      }
         progresse = !confirmationi && logoA == 10.13;
         logoA -= (parseFloat(`${(confirmationi ? 2 : 2) | (analyticB ? 4 : 1)}`));
       let editA = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,119,95,54,51,0);
      signinupZ = new Map([[`${kickR.length}`, eactf.length & kickR.length]]);

        setUsername(initialUsername);

      playlistN = gesturesZ.length >= 12 && hooka;
   let gemfile1 = hooka ? !hooka : hooka;
   do {
      hooka = !hooka;
      if (gemfile1) {
         break;
      }
   } while ((1 <= signinupZ.size && 5 <= (signinupZ.size ^ 1)) && gemfile1);
   let target4 = whatsappF.size <= 6241953;
   do {
      whatsappF = new Map([[`${whatsappF.size}`, userr.length]]);
      if (target4) {
         break;
      }
   } while ((hooka) && target4);
       let muted6 = 5.0;
       let animationn = 3;
      for (let j = 0; j < 3; j++) {
         animationn >>= Math.min(Math.abs(animationn >> (Math.min(Math.abs(parseInt(`${muted6}`)), 4))), 4);
      }
          let volumeV = 3.0;
         muted6 += parseFloat(`${3 ^ animationn}`);
         volumeV *= parseFloat(`${parseInt(`${volumeV}`) << (Math.min(4, Math.abs(parseInt(`${volumeV}`))))}`);
      let moonn = 6236660.0 <= muted6;
      do {
          let time_gZ = String.fromCharCode(115,95,51,53,0);
          let streamingn = 3;
          let becomeN: Array<any> = [876, 638];
          let themeB = false;
          let sidez = true;
         muted6 += parseFloat(`${parseInt(`${muted6}`) + 3}`);
         time_gZ += `${becomeN.length & 3}`;
         streamingn >>= Math.min(5, Math.abs(1));
         becomeN.push(streamingn / 3);
         themeB = String.fromCharCode(52,0) == time_gZ;
         sidez = !time_gZ.startsWith(`${sidez}`);
         if (moonn) {
            break;
         }
      } while ((5.60 < muted6) && moonn);
      if (muted6 <= 2.20) {
         animationn %= Math.max(1, 1);
      }
          let statisticsM: Map<any, any> = new Map([[String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,112,95,52,51,0),String.fromCharCode(114,95,51,56,95,97,108,105,97,115,101,115,0)], [String.fromCharCode(110,101,116,101,114,114,110,111,95,113,95,49,55,0),String.fromCharCode(116,101,115,101,100,103,101,95,101,95,55,51,0)]]);
          let analyticst = String.fromCharCode(114,101,115,117,108,116,95,54,95,50,48,0);
          let previewT = 3.0;
         animationn -= animationn >> (Math.min(Math.abs(parseInt(`${previewT}`)), 2));
         statisticsM = new Map([[`${statisticsM.size}`, (analyticst == String.fromCharCode(54,0) ? analyticst.length : statisticsM.size)]]);
         previewT /= Math.max(1, parseFloat(`${analyticst.length}`));
       let videoc: Map<any, any> = new Map([[String.fromCharCode(104,119,117,112,108,111,97,100,95,113,95,54,51,0),969], [String.fromCharCode(98,95,56,51,95,116,101,108,101,116,101,120,116,0),655]]);
       let blacklistD: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,102,95,55,51,0),888], [String.fromCharCode(103,95,56,95,99,97,116,101,103,111,114,121,0),844], [String.fromCharCode(115,95,49,52,95,120,112,97,108,100,118,0),615]]);
      layoutD /= Math.max(2, (parseInt(`${delegate_gp}`) >> (Math.min(2, Math.abs((hooka ? 1 : 3))))));
       let mbjscommonT: Array<any> = [32, 644, 47];
         mbjscommonT = [mbjscommonT.length];
      if (4 > (mbjscommonT.length & 2) || (mbjscommonT.length & 2) > 1) {
         mbjscommonT.push(mbjscommonT.length / 3);
      }
         mbjscommonT = [1];
      hooka = 4 >= component_;
      bootsplashB.push(eactf.length - expired6.length);
   let moren = playlistN ? !playlistN : playlistN;
   do {
      playlistN = bootsplashB.length >= 81;
      if (moren) {
         break;
      }
   } while ((playlistN) && moren);
   let photoA = playlistN ? !playlistN : playlistN;
   do {
      playlistN = 2 >= component_;
      if (photoA) {
         break;
      }
   } while (photoA && (playlistN));
   if (parseInt(`${layoutD}`) == bootsplashB.length) {
      layoutD /= Math.max(3, 1);
   }
      userr = `${eactf.length}`;
   if (playlistN || (3 | whatsappF.size) < 1) {
      playlistN = 89.86 <= layoutD;
   }
   if (expired6.length > userr.length) {
       let floaterS = String.fromCharCode(100,101,102,97,117,108,95,51,95,57,56,0);
       let selly = String.fromCharCode(99,95,53,48,95,97,108,115,101,0);
       let filet = 0.0;
          let default_ccR = String.fromCharCode(105,95,52,52,95,115,116,114,0);
          let upgrade7 = String.fromCharCode(110,112,114,111,98,101,95,119,95,56,53,0);
          let starC: Map<any, any> = new Map([[String.fromCharCode(114,97,110,103,101,115,95,102,95,56,52,0),false ], [String.fromCharCode(118,116,101,115,116,95,122,95,56,54,0),false ], [String.fromCharCode(103,95,49,55,95,114,101,99,116,97,110,103,108,101,115,0),false ]]);
         filet *= (parseFloat(`${String.fromCharCode(116,0) == floaterS ? default_ccR.length : floaterS.length}`));
         default_ccR += `${3 << (Math.min(1, Math.abs(starC.size)))}`;
         upgrade7 = `${3 ^ starC.size}`;
          let pagination8 = String.fromCharCode(97,117,116,111,99,108,101,97,114,95,106,95,57,56,0);
          let modelsw = String.fromCharCode(118,99,114,101,97,116,101,95,53,95,51,54,0);
          let dialogq = true;
         selly += `${floaterS.length % 2}`;
         pagination8 = `${2 >> (Math.min(2, modelsw.length))}`;
         modelsw = `${modelsw.length}`;
         dialogq = pagination8 == String.fromCharCode(110,0);
      if ((2 >> (Math.min(4, selly.length))) == 1 || 2 == (parseInt(`${filet}`) * selly.length)) {
         selly = "3";
      }
      while ((selly.length / (Math.max(1, 5))) < 5 && (filet / 4.83) < 2.52) {
          let unreadv = 5.0;
          let mbbanners = true;
          let reactnativejsa = 4;
         selly += `${selly.length}`;
         unreadv += parseFloat(`${parseInt(`${unreadv}`) % 3}`);
         mbbanners = !mbbanners;
         reactnativejsa += parseInt(`${unreadv}`) + 1;
         break;
      }
         selly += "1";
         selly += `${parseInt(`${filet}`) * selly.length}`;
      for (let s = 0; s < 3; s++) {
         filet -= parseFloat(`${selly.length}`);
      }
      if (floaterS != String.fromCharCode(51,0) || selly == String.fromCharCode(101,0)) {
          let layoute = 3;
          let chinasame_ = String.fromCharCode(121,117,118,121,117,118,95,100,95,54,56,0);
          let downloadingO = 5;
         selly = `${3 & parseInt(`${filet}`)}`;
         layoute |= chinasame_.length ^ 1;
         chinasame_ = `${chinasame_.length - 1}`;
         downloadingO /= Math.max(1 << (Math.min(4, Math.abs(downloadingO))), 2);
      }
         filet /= Math.max(3, parseFloat(`${3}`));
      expired6 += `${selly.length + floaterS.length}`;
   }
       let circleS = String.fromCharCode(115,95,52,51,95,100,117,115,116,0);
       let greenV = false;
       let mappingW = String.fromCharCode(116,95,57,57,95,116,111,108,108,0);
         mappingW = `${((greenV ? 1 : 2) * mappingW.length)}`;
      let privacy5 = mappingW.length <= 7140265;
      do {
          let crossB = String.fromCharCode(106,95,55,48,95,109,101,114,103,101,0);
          let unselectedu = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,99,95,56,51,0);
          let flyerk = true;
         mappingW += `${((flyerk ? 2 : 2))}`;
         crossB += `${crossB.length}`;
         unselectedu += `${crossB.length << (Math.min(Math.abs(3), 2))}`;
         flyerk = 3 >= crossB.length;
         if (privacy5) {
            break;
         }
      } while ((!mappingW.startsWith(`${greenV}`)) && privacy5);
         mappingW = "3";
      let g_lock1 = 8465044 >= circleS.length;
      do {
          let gpay4 = 2.0;
          let types8 = true;
         circleS = `${((greenV ? 3 : 3))}`;
         gpay4 /= Math.max(1 - parseInt(`${gpay4}`), 4);
         types8 = !types8;
         if (g_lock1) {
            break;
         }
      } while ((mappingW.endsWith(circleS)) && g_lock1);
       let stylet = true;
      let basketball8 = stylet ? !stylet : stylet;
      do {
          let filters = 4.0;
          let ewardedQ = false;
          let moduleV: Array<any> = [126, 578];
          let floatingV = String.fromCharCode(100,101,115,112,105,108,108,95,49,95,49,52,0);
          let gpayD = 0.0;
         stylet = 6.100 <= (filters - gpayD);
         filters /= Math.max(2, (floatingV.length & (ewardedQ ? 1 : 5)));
         ewardedQ = (20 >= (moduleV.length + (ewardedQ ? 20 : moduleV.length)));
         floatingV = `${1 + floatingV.length}`;
         gpayD += floatingV.length;
         if (basketball8) {
            break;
         }
      } while (basketball8 && (!greenV && stylet));
         greenV = stylet && mappingW.length >= 89;
         circleS = `${(1 | (stylet ? 2 : 5))}`;
      while (mappingW.length >= 3) {
          let commentf = 5;
          let eventa = String.fromCharCode(109,111,116,105,111,110,95,52,95,50,51,0);
          let ball7 = 5.0;
          let report5: Map<any, any> = new Map([[String.fromCharCode(115,95,53,57,95,109,105,110,105,109,105,122,101,97,98,108,101,0),String.fromCharCode(119,95,53,50,95,105,110,116,101,114,109,105,100,105,97,116,101,0)], [String.fromCharCode(112,97,108,109,95,102,95,54,49,0),String.fromCharCode(115,116,114,116,111,107,0)]]);
          let lessR: Array<any> = [175, 90, 920];
         mappingW = `${2 | mappingW.length}`;
         commentf %= Math.max(5, 3 >> (Math.min(1, Math.abs(commentf))));
         eventa = `${(eventa == String.fromCharCode(66,0) ? eventa.length : parseInt(`${ball7}`))}`;
         ball7 -= eventa.length * 1;
         report5 = new Map([[`${lessR.length}`, 3]]);
         lessR.push(1 << (Math.min(Math.abs(parseInt(`${ball7}`)), 4)));
         break;
      }
      userr += `${signinupZ.size}`;
   if ((component_ / 5) < 2 && component_ < 5) {
       let prediction3 = String.fromCharCode(102,95,49,48,48,95,116,101,115,116,110,101,116,0);
       let heartP = 2.0;
      let mode1 = heartP >= 9534826.0;
      do {
          let watche = String.fromCharCode(118,95,56,54,95,105,110,116,101,114,108,101,97,118,101,0);
          let rankz = String.fromCharCode(100,101,115,112,105,108,108,95,52,95,55,54,0);
          let aboutG = String.fromCharCode(107,95,53,50,95,115,101,103,102,101,97,116,117,114,101,115,0);
          let shirtC = true;
         heartP *= 2;
         watche = `${1 ^ rankz.length}`;
         rankz += `${((shirtC ? 4 : 2))}`;
         aboutG += "1";
         if (mode1) {
            break;
         }
      } while (mode1 && (1 == (1 + prediction3.length)));
       let sentryr = String.fromCharCode(120,95,54,57,95,114,101,102,117,110,100,0);
       let screeni = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,106,95,52,53,0);
      for (let r = 0; r < 2; r++) {
         heartP -= prediction3.length;
      }
      if ((heartP - 3.15) > 1.22) {
         prediction3 = `${(String.fromCharCode(75,0) == sentryr ? screeni.length : sentryr.length)}`;
      }
      if (screeni == String.fromCharCode(65,0)) {
          let resultO = 2.0;
          let volumeZ = 5.0;
         sentryr = `${prediction3.length ^ sentryr.length}`;
         resultO += 3;
         volumeZ += parseFloat(`${1 & parseInt(`${volumeZ}`)}`);
      }
      if (2 >= (4 ^ prediction3.length)) {
         heartP -= prediction3.length * sentryr.length;
      }
      component_ %= Math.max((String.fromCharCode(95,0) == eactf ? expired6.length : eactf.length), 5);
   }
      expired6 += `${2 ^ bootsplashB.length}`;
   if (playlistN) {
      signinupZ.set(`${hooka}`, ((hooka ? 3 : 3) % (Math.max(signinupZ.size, 7))));
   }
      component_ /= Math.max(parseInt(`${delegate_gp}`), 5);
   let animationH = 4981242.0 >= layoutD;
   do {
      layoutD -= component_ - 1;
      if (animationH) {
         break;
      }
   } while (animationH && (2.73 >= layoutD));
   while (5 <= component_ || 3 <= (component_ ^ 5)) {
      vietnamc = signinupZ.size < 73;
      break;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let modee = String.fromCharCode(112,95,49,48,48,95,115,110,111,119,100,97,116,97,0);
    let countdownA = 3.0;
    let mbridge9 = 5.0;
    let overlayr = String.fromCharCode(121,95,55,48,95,114,103,98,112,108,117,115,0);
    let singleA = 4.0;
    let events = 0.0;
    let chartN: Map<any, any> = new Map([[String.fromCharCode(115,95,52,49,95,108,111,99,97,108,0),String.fromCharCode(116,95,50,56,95,112,111,105,110,116,111,99,116,0)], [String.fromCharCode(106,95,57,55,95,101,115,99,97,112,101,115,0),String.fromCharCode(104,95,51,49,95,112,101,114,99,101,112,116,117,97,108,0)], [String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,119,95,52,50,0),String.fromCharCode(110,101,111,110,116,101,115,116,95,106,95,49,48,48,0)]]);
    let otherP: Array<any> = [535, 390, 125];
    let bannera = 3;
    let calendarT = String.fromCharCode(111,95,56,48,95,98,97,100,103,101,0);
    let modelE: Array<any> = [991, 317, 464];
    let with_v9 = String.fromCharCode(115,116,97,98,108,101,95,116,95,52,49,0);
    let teamx = 5.0;
    let volumeW: Map<any, any> = new Map([[String.fromCharCode(107,118,111,95,104,95,53,57,0),491], [String.fromCharCode(121,95,52,50,95,119,104,101,116,104,101,114,0),491], [String.fromCharCode(113,95,49,54,95,115,105,103,109,97,0),649]]);
    let progressN = String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,51,95,49,48,48,0);
    let qcopy_bf0 = String.fromCharCode(110,97,118,105,103,97,116,111,114,95,106,95,50,49,0);
       let toponf = 4;
       let dataT = 3;
       let crownk = String.fromCharCode(109,95,53,57,95,99,97,109,101,108,108,105,97,0);
         toponf -= 1 + crownk.length;
      let photor = 9447530 >= crownk.length;
      do {
         crownk += "1";
         if (photor) {
            break;
         }
      } while (((4 << (Math.min(4, Math.abs(dataT)))) < 1 && (4 << (Math.min(3, crownk.length))) < 2) && photor);
      while (2 > (toponf ^ 5) && 1 > (5 ^ dataT)) {
         toponf /= Math.max(3, 1);
         break;
      }
          let station8 = String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,95,48,95,56,52,0);
         dataT += 2;
         station8 = `${station8.length % 3}`;
      if ((dataT % 1) > 5) {
         dataT &= crownk.length;
      }
          let areal: Array<any> = [249, 23];
          let interstitialj = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,97,95,56,0);
          let colors7 = false;
         toponf |= interstitialj.length;
         areal.push(areal.length);
         interstitialj += `${((colors7 ? 2 : 3) | areal.length)}`;
       let searchbar6: Array<any> = [337, 942];
          let combinez = String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,52,95,48,0);
          let launchU = 4.0;
          let commonR = 1.0;
         crownk = `${1 & searchbar6.length}`;
         combinez += `${combinez.length ^ parseInt(`${launchU}`)}`;
         launchU -= parseFloat(`${combinez.length}`);
         commonR -= parseFloat(`${3 << (Math.min(1, Math.abs(parseInt(`${launchU}`))))}`);
      let with_zwA = 5528804 >= searchbar6.length;
      do {
          let sellm = String.fromCharCode(99,95,53,95,120,112,117,98,0);
          let pressurex = String.fromCharCode(98,95,50,95,98,97,99,107,119,97,114,100,0);
          let assist2 = 5.0;
         searchbar6 = [3];
         sellm += `${(pressurex == String.fromCharCode(97,0) ? parseInt(`${assist2}`) : pressurex.length)}`;
         assist2 += parseFloat(`${pressurex.length}`);
         if (with_zwA) {
            break;
         }
      } while (with_zwA && (crownk.length == 4));
      bannera -= calendarT.length;
      singleA /= Math.max(5, parseInt(`${events}`) * parseInt(`${countdownA}`));
   if (calendarT.startsWith(`${singleA}`)) {
      singleA += parseInt(`${events}`);
   }
   let bootsplashy = otherP.length <= 9657431;
   do {
      otherP = [calendarT.length];
      if (bootsplashy) {
         break;
      }
   } while (((otherP.length + calendarT.length) <= 1 || 1 <= (otherP.length + calendarT.length)) && bootsplashy);
       let lightL = 3.0;
       let singaporeq = String.fromCharCode(100,114,97,119,97,98,108,101,95,121,95,57,52,0);
      for (let j = 0; j < 1; j++) {
          let module_ = String.fromCharCode(114,95,52,49,95,97,114,112,101,100,0);
          let commentq: Array<any> = [319, 78];
          let bootsplashz = String.fromCharCode(105,95,53,52,95,97,112,112,0);
          let football_: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,115,95,106,95,50,54,0),519], [String.fromCharCode(117,95,50,54,95,115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0),644]]);
         singaporeq += "1";
         module_ += `${bootsplashz.length}`;
         commentq = [(bootsplashz == String.fromCharCode(66,0) ? bootsplashz.length : commentq.length)];
         football_ = new Map([[`${commentq.length}`, commentq.length % (Math.max(1, 2))]]);
      }
       let redirect6 = 4.0;
         lightL -= 1 & singaporeq.length;
      for (let v = 0; v < 1; v++) {
          let calendarV = 2;
          let chinaD = String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,122,95,52,55,0);
         lightL -= calendarV << (Math.min(Math.abs(parseInt(`${lightL}`)), 2));
         calendarV |= chinaD.length * chinaD.length;
      }
      while (4 <= (singaporeq.length << (Math.min(Math.abs(4), 4)))) {
          let stepC = 1;
          let bottomO = 2.0;
         singaporeq = "1";
         stepC += parseInt(`${bottomO}`);
         bottomO -= parseFloat(`${parseInt(`${bottomO}`) & 1}`);
         break;
      }
       let countryT = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,102,95,54,50,0);
      bannera &= 1 >> (Math.min(Math.abs(parseInt(`${singleA}`)), 5));
   if (overlayr.length <= calendarT.length) {
       let currentT = 3.0;
       let singapore6 = String.fromCharCode(98,111,111,108,101,97,110,95,118,95,50,49,0);
       let awayM: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,99,101,115,95,108,95,51,0),553], [String.fromCharCode(115,95,52,55,95,102,117,110,103,105,98,108,101,115,0),33], [String.fromCharCode(114,101,116,97,105,110,95,120,95,55,48,0),220]]);
          let mbsplashK: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,97,112,112,101,110,100,0),242], [String.fromCharCode(121,95,53,51,95,97,116,114,97,99,112,108,117,115,0),823]]);
          let sportJ = 2.0;
         currentT *= parseFloat(`${2}`);
         mbsplashK.set(`${sportJ}`, parseInt(`${sportJ}`) / (Math.max(mbsplashK.size, 8)));
       let description_iH: Array<any> = [468, 155];
      while (3 == (5 >> (Math.min(5, Math.abs(awayM.size)))) || 5 == (description_iH.length >> (Math.min(Math.abs(awayM.size), 5)))) {
          let memberships: Array<any> = [723, 385];
          let controlM = true;
         awayM = new Map([[`${description_iH.length}`, 2]]);
         memberships = [memberships.length];
         controlM = memberships.length >= 46;
         break;
      }
         singapore6 = `${awayM.size | singapore6.length}`;
      while (3 > (2 % (Math.max(3, singapore6.length))) && 5 > (2 << (Math.min(3, singapore6.length)))) {
         singapore6 = `${awayM.size | 1}`;
         break;
      }
         awayM = new Map([[`${description_iH.length}`, singapore6.length]]);
         description_iH.push(awayM.size << (Math.min(Math.abs(3), 2)));
         singapore6 += `${parseInt(`${currentT}`)}`;
      if (5 == (3 | description_iH.length) || 5 == (3 | description_iH.length)) {
         awayM.set(`${description_iH.length}`, awayM.size);
      }
      calendarT = `${overlayr.length << (Math.min(Math.abs(2), 4))}`;
   }
       let playercommonf = true;
       let icon5 = String.fromCharCode(106,95,50,51,95,101,113,117,97,108,0);
       let toponT = 5.0;
      if (playercommonf) {
         icon5 = `${((playercommonf ? 4 : 4) | parseInt(`${toponT}`))}`;
      }
      for (let a = 0; a < 1; a++) {
          let update_gii = true;
          let theme_ = 4.0;
          let grayu: Array<any> = [315, 640, 123];
         icon5 = `${icon5.length & parseInt(`${toponT}`)}`;
         update_gii = 13.42 <= theme_;
         theme_ /= Math.max(parseFloat(`${grayu.length + parseInt(`${theme_}`)}`), 4);
         grayu.push(grayu.length ^ 1);
      }
         playercommonf = !playercommonf;
      for (let s = 0; s < 2; s++) {
          let handlerN = true;
          let whitew = 4.0;
          let spece: Map<any, any> = new Map([[String.fromCharCode(117,116,99,116,105,109,101,95,54,95,54,55,0),689], [String.fromCharCode(115,105,103,110,112,111,115,116,95,118,95,51,50,0),235], [String.fromCharCode(113,117,101,115,116,105,111,110,115,95,106,95,53,52,0),263]]);
          let default_4v: Map<any, any> = new Map([[String.fromCharCode(114,112,122,97,95,107,95,48,0),false ], [String.fromCharCode(112,95,57,49,95,109,111,100,101,0),false ], [String.fromCharCode(101,108,101,118,97,116,101,95,107,95,49,51,0),false ]]);
         icon5 = "2";
         handlerN = (spece.size & default_4v.size) <= 6;
         whitew += parseFloat(`${default_4v.size}`);
         spece = new Map([[`${spece.size}`, 2]]);
      }
          let minimizeq = 4.0;
         toponT /= Math.max((parseInt(`${minimizeq}`) >> (Math.min(5, Math.abs((playercommonf ? 5 : 1))))), 1);
      if (playercommonf) {
          let klevinf = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,107,95,53,57,0);
          let submitJ = 1.0;
          let customq = String.fromCharCode(98,95,51,51,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
         playercommonf = icon5.startsWith(`${playercommonf}`);
         klevinf += `${customq.length}`;
         submitJ += parseFloat(`${parseInt(`${submitJ}`)}`);
         customq += `${parseInt(`${submitJ}`) & klevinf.length}`;
      }
      while (playercommonf) {
          let team9 = String.fromCharCode(101,95,53,48,95,106,111,105,110,116,0);
         toponT += parseInt(`${toponT}`) << (Math.min(1, Math.abs(3)));
         team9 += `${team9.length}`;
         break;
      }
         icon5 = `${(String.fromCharCode(73,0) == icon5 ? icon5.length : (playercommonf ? 1 : 1))}`;
      if (toponT < icon5.length) {
         toponT /= Math.max(icon5.length << (Math.min(Math.abs(3), 2)), 5);
      }
      chartN = new Map([[`${countdownA}`, 2]]);
      chartN = new Map([[`${chartN.size}`, 2 / (Math.max(3, chartN.size))]]);
   let dataa = 8079838 >= modee.length;
   do {
       let gestureB = String.fromCharCode(108,111,110,95,99,95,53,53,0);
       let detail5 = String.fromCharCode(102,97,105,108,101,100,95,102,95,53,49,0);
       let forwardY: Map<any, any> = new Map([[String.fromCharCode(106,95,51,56,95,114,101,112,111,114,116,105,110,103,0),true ], [String.fromCharCode(98,95,56,56,95,105,110,116,101,114,102,97,99,101,0),true ], [String.fromCharCode(101,120,105,102,95,119,95,54,50,0),false ]]);
       let tooltipsy = String.fromCharCode(112,114,111,109,111,116,105,110,103,95,120,95,52,54,0);
       let updatesB = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,112,95,52,48,0);
          let hooksi: Array<any> = [328, 460, 842];
          let usert: Map<any, any> = new Map([[String.fromCharCode(100,95,52,56,95,102,105,108,101,112,97,116,104,0),45], [String.fromCharCode(109,95,52,49,0),257], [String.fromCharCode(115,111,108,97,110,97,95,106,95,53,52,0),297]]);
          let animationz = 3.0;
         forwardY.set(tooltipsy, tooltipsy.length << (Math.min(Math.abs(3), 2)));
         hooksi.push(usert.size);
         usert.set(`${hooksi.length}`, hooksi.length & usert.size);
         animationz *= usert.size;
         updatesB = `${detail5.length - forwardY.size}`;
         detail5 += `${2 + detail5.length}`;
          let carouseln: Array<any> = [612, 941, 633];
          let cleari = String.fromCharCode(108,111,99,97,108,101,95,53,95,55,49,0);
          let dycreatorZ: Map<any, any> = new Map([[String.fromCharCode(108,105,102,116,95,51,95,49,52,0),352], [String.fromCharCode(100,95,51,48,95,114,97,110,107,105,110,103,115,0),592]]);
         forwardY.set(`${detail5}`, 1 + dycreatorZ.size);
         carouseln.push(cleari.length);
         cleari = `${carouseln.length}`;
         dycreatorZ = new Map([[`${carouseln.length}`, (String.fromCharCode(76,0) == cleari ? carouseln.length : cleari.length)]]);
      if ((detail5.length * 5) <= 3) {
         forwardY.set(gestureB, 2 + gestureB.length);
      }
      while (detail5.length == forwardY.size) {
         forwardY.set(updatesB, tooltipsy.length * updatesB.length);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let orangeE: Map<any, any> = new Map([[String.fromCharCode(106,95,49,50,95,117,110,108,111,97,100,0),786], [String.fromCharCode(103,95,56,51,95,116,114,97,99,107,101,114,0),378], [String.fromCharCode(119,97,116,99,104,101,114,95,48,95,50,55,0),593]]);
          let servicej: Array<any> = [936, 227];
          let splashP = String.fromCharCode(116,95,52,57,95,111,118,101,114,0);
         forwardY = new Map([[`${forwardY.size}`, splashP.length << (Math.min(2, Math.abs(forwardY.size)))]]);
         orangeE = new Map([[`${orangeE.size}`, servicej.length]]);
         servicej = [1 | servicej.length];
         splashP = `${servicej.length << (Math.min(Math.abs(1), 4))}`;
      }
      for (let t = 0; t < 2; t++) {
         detail5 += "3";
      }
      modee += `${chartN.size}`;
      if (dataa) {
         break;
      }
   } while ((modee.endsWith(`${mbridge9}`)) && dataa);
      modee += `${parseInt(`${countdownA}`)}`;

        if (handleClose) handleClose();

   let expand_ = 9753901 <= chartN.size;
   do {
      chartN = new Map([[`${chartN.size}`, 1]]);
      if (expand_) {
         break;
      }
   } while (((chartN.size << (Math.min(Math.abs(5), 5))) < 2) && expand_);
       let nextj = String.fromCharCode(114,97,99,105,110,103,95,122,95,52,0);
       let description_hy6 = String.fromCharCode(98,95,53,48,95,97,110,105,109,97,116,111,114,0);
      if (4 <= nextj.length) {
         nextj = `${(String.fromCharCode(100,0) == nextj ? description_hy6.length : nextj.length)}`;
      }
         description_hy6 = `${description_hy6.length >> (Math.min(Math.abs(3), 2))}`;
          let mbbannerZ = String.fromCharCode(122,95,57,55,95,117,116,105,109,101,0);
          let kick1 = 3.0;
         description_hy6 += `${nextj.length % 1}`;
         mbbannerZ += `${mbbannerZ.length}`;
         kick1 += parseInt(`${kick1}`);
         description_hy6 += `${description_hy6.length}`;
         nextj += `${description_hy6.length >> (Math.min(nextj.length, 4))}`;
         description_hy6 = `${description_hy6.length >> (Math.min(Math.abs(3), 2))}`;
      calendarT += "1";
   let dplusB = 7634323.0 <= countdownA;
   do {
       let completey = 0;
          let shoote = 4.0;
          let modelsi = 1.0;
          let pluso = 4.0;
         completey *= 2;
         shoote += parseFloat(`${parseInt(`${pluso}`)}`);
         modelsi += parseInt(`${modelsi}`) << (Math.min(2, Math.abs(2)));
      let nalyticsG = 8796871 <= completey;
      do {
          let statisticsW: Map<any, any> = new Map([[String.fromCharCode(104,121,115,99,97,108,101,95,116,95,55,51,0),String.fromCharCode(98,106,101,99,116,95,51,95,50,52,0)], [String.fromCharCode(111,95,49,56,95,116,97,117,0),String.fromCharCode(102,95,52,95,100,97,114,119,105,110,0)]]);
          let terms_ = 0.0;
          let skipR = String.fromCharCode(108,105,98,111,112,117,115,95,108,95,50,50,0);
          let bellw = 3.0;
         completey <<= Math.min(2, Math.abs((skipR == String.fromCharCode(56,0) ? skipR.length : parseInt(`${bellw}`))));
         statisticsW = new Map([[`${statisticsW.size}`, statisticsW.size - 1]]);
         terms_ += parseFloat(`${statisticsW.size}`);
         bellw /= Math.max(3 - parseInt(`${terms_}`), 2);
         if (nalyticsG) {
            break;
         }
      } while (nalyticsG && ((completey | completey) < 2 && 2 < (completey | 2)));
         completey += completey;
      countdownA /= Math.max(5, parseFloat(`${parseInt(`${singleA}`) << (Math.min(calendarT.length, 1))}`));
      if (dplusB) {
         break;
      }
   } while (((countdownA + parseFloat(`${bannera}`)) == 1.27 || (4 ^ bannera) == 5) && dplusB);
   while (4.92 == (mbridge9 - singleA) && 4.12 == (singleA / 4.92)) {
       let containerC = 1;
         containerC -= 1;
      for (let v = 0; v < 3; v++) {
         containerC ^= containerC % 2;
      }
      for (let p = 0; p < 3; p++) {
         containerC /= Math.max(containerC, 5);
      }
      singleA /= Math.max(2, calendarT.length + modelE.length);
      break;
   }
   for (let k = 0; k < 2; k++) {
      events += parseFloat(`${2 + chartN.size}`);
   }
   for (let c = 0; c < 2; c++) {
      teamx /= Math.max(3, parseInt(`${countdownA}`) | 3);
   }
   while (1 > (chartN.size - 5) && 5.97 > (chartN.size * mbridge9)) {
      chartN = new Map([[calendarT, (calendarT == String.fromCharCode(111,0) ? calendarT.length : parseInt(`${mbridge9}`))]]);
      break;
   }
       let networkt: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,48,95,57,52,0),960], [String.fromCharCode(104,97,114,100,101,110,101,100,95,48,95,55,50,0),698]]);
       let catagoryC = 1;
       let readW = 2;
      for (let u = 0; u < 1; u++) {
          let videocommong = false;
         networkt.set(`${videocommong}`, networkt.size % 2);
      }
         catagoryC &= networkt.size;
      while (2 == (networkt.size | readW) || (networkt.size | readW) == 2) {
          let room3 = String.fromCharCode(115,101,113,117,101,110,99,101,95,98,95,49,55,0);
         networkt.set(`${catagoryC}`, 3 >> (Math.min(3, Math.abs(networkt.size))));
         room3 = `${room3.length}`;
         break;
      }
          let androidR = String.fromCharCode(105,110,100,101,120,97,98,108,101,95,54,95,57,51,0);
          let i_lockH = String.fromCharCode(111,95,49,54,95,105,112,111,100,0);
         catagoryC += i_lockH.length;
         androidR += `${androidR.length ^ androidR.length}`;
         i_lockH = `${androidR.length}`;
         readW <<= Math.min(2, Math.abs(networkt.size));
          let forward9 = false;
          let blacklist8 = String.fromCharCode(116,95,54,50,95,109,105,103,114,97,116,105,111,110,0);
          let dialogp = String.fromCharCode(118,112,120,101,110,99,95,105,95,50,55,0);
         catagoryC >>= Math.min(Math.abs(networkt.size / 2), 4);
         forward9 = dialogp.length >= blacklist8.length;
         blacklist8 += `${blacklist8.length}`;
         dialogp += `${blacklist8.length}`;
      let macau9 = 5966095 <= catagoryC;
      do {
         catagoryC >>= Math.min(Math.abs(2 | catagoryC), 1);
         if (macau9) {
            break;
         }
      } while (macau9 && (4 <= catagoryC));
         catagoryC ^= 1 * catagoryC;
         catagoryC ^= networkt.size ^ readW;
      mbridge9 += (calendarT == String.fromCharCode(70,0) ? modelE.length : calendarT.length);
      volumeW = new Map([[progressN, 2]]);
   let half3 = String.fromCharCode(103,115,109,56,106,120,120,110,120,0) == calendarT;
   do {
      calendarT = "1";
      if (half3) {
         break;
      }
   } while (half3 && (calendarT.length <= overlayr.length));

        Keyboard.dismiss();

       let rewindY = String.fromCharCode(116,112,101,108,95,98,95,57,48,0);
       let trashS = 3.0;
         rewindY = "3";
          let submitJn: Map<any, any> = new Map([[String.fromCharCode(121,118,116,111,121,117,121,95,105,95,52,55,0),65], [String.fromCharCode(120,95,50,57,95,100,101,99,111,100,101,120,0),800]]);
         trashS += rewindY.length;
         submitJn.set(`${submitJn.size}`, submitJn.size >> (Math.min(Math.abs(submitJn.size), 5)));
          let dialogR: Array<any> = [32, 606, 344];
          let roundf = false;
          let benefitv = String.fromCharCode(97,99,116,105,118,101,95,57,95,51,50,0);
         rewindY += `${dialogR.length}`;
         dialogR.push(((roundf ? 2 : 5)));
         roundf = !benefitv.startsWith(`${roundf}`);
         benefitv = `${(benefitv == String.fromCharCode(50,0) ? (roundf ? 4 : 5) : benefitv.length)}`;
       let hookr: Map<any, any> = new Map([[String.fromCharCode(114,95,56,52,95,103,98,114,112,0),907], [String.fromCharCode(115,95,55,55,95,97,112,112,101,97,114,105,110,103,0),969]]);
      while ((5 | rewindY.length) < 4) {
         hookr.set(rewindY, (String.fromCharCode(90,0) == rewindY ? rewindY.length : parseInt(`${trashS}`)));
         break;
      }
         hookr.set(rewindY, rewindY.length);
      with_v9 = `${3 * otherP.length}`;
      progressN = `${3 << (Math.min(5, with_v9.length))}`;
      progressN += `${otherP.length}`;
      otherP = [parseInt(`${countdownA}`) ^ 1];
      with_v9 += `${progressN.length}`;
   if (otherP.length <= calendarT.length) {
       let yellow6 = 4;
       let modalK = true;
       let playP = false;
       let selectedg = false;
       let skipN = false;
          let filterV = 0.0;
          let frame_d39: Map<any, any> = new Map([[String.fromCharCode(101,108,115,100,101,99,95,112,95,52,0),820], [String.fromCharCode(107,95,54,51,95,111,118,101,114,114,105,100,101,0),464], [String.fromCharCode(113,95,51,50,95,114,111,117,112,0),745]]);
          let zhuboa = String.fromCharCode(120,95,50,57,95,114,101,100,97,0);
         playP = null != frame_d39.get(`${skipN}`);
         filterV -= parseInt(`${filterV}`) | 3;
         frame_d39.set(zhuboa, parseInt(`${filterV}`));
         zhuboa = `${parseInt(`${filterV}`)}`;
         skipN = !modalK && 73 > yellow6;
      if (!skipN) {
         modalK = yellow6 > 63 && !modalK;
      }
         selectedg = 6 >= yellow6;
          let trophy3 = String.fromCharCode(101,95,49,51,0);
          let videojso = 1.0;
          let catagoryO = true;
         yellow6 -= (trophy3 == String.fromCharCode(77,0) ? parseInt(`${videojso}`) : trophy3.length);
         videojso *= 2;
      while (!modalK) {
         modalK = playP;
         break;
      }
      for (let a = 0; a < 1; a++) {
          let megaphone0 = String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,113,95,49,57,0);
          let activeb = String.fromCharCode(121,95,52,48,95,115,111,117,110,100,0);
          let shirtl = true;
          let sourceV = 0;
         selectedg = megaphone0.endsWith(`${shirtl}`);
         megaphone0 = `${(activeb == String.fromCharCode(81,0) ? activeb.length : sourceV)}`;
         shirtl = activeb.length < 68;
         sourceV %= Math.max(activeb.length, 3);
      }
         playP = !selectedg;
      calendarT = `${parseInt(`${events}`)}`;
   }
      with_v9 += "2";
   for (let h = 0; h < 1; h++) {
       let ocopy_gQ = String.fromCharCode(120,102,111,114,109,95,110,95,53,53,0);
       let darkW = 0;
       let resultE = 5;
       let dangerA = 2.0;
         darkW |= parseInt(`${dangerA}`) - 3;
         ocopy_gQ += `${3 & darkW}`;
          let short_dx = String.fromCharCode(101,95,52,54,95,99,97,99,97,0);
          let homeM: Array<any> = [String.fromCharCode(103,101,110,101,114,97,103,101,95,103,95,53,57,0), String.fromCharCode(99,111,110,118,101,114,116,101,100,95,55,95,53,52,0), String.fromCharCode(100,95,49,53,95,117,110,105,102,111,114,109,0)];
         resultE |= 1;
         short_dx += "3";
         homeM.push(homeM.length / (Math.max(short_dx.length, 9)));
         ocopy_gQ += `${darkW}`;
         resultE += darkW;
      let s_countY = 8431688 <= darkW;
      do {
          let zhengpianY = String.fromCharCode(113,95,55,95,101,101,112,0);
          let bridge6 = 3.0;
         darkW ^= resultE & 1;
         zhengpianY = `${zhengpianY.length}`;
         bridge6 *= zhengpianY.length / (Math.max(9, parseInt(`${bridge6}`)));
         if (s_countY) {
            break;
         }
      } while ((5 <= (darkW / 2)) && s_countY);
         resultE <<= Math.min(Math.abs(resultE / 3), 4);
      while ((resultE * darkW) == 3 || 2 == (3 * darkW)) {
         darkW /= Math.max(3 - darkW, 1);
         break;
      }
          let membershipO = 0.0;
          let actionP: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,115,95,106,95,50,49,0),false ], [String.fromCharCode(101,120,116,101,110,115,105,111,110,95,50,95,52,56,0),false ]]);
         ocopy_gQ = `${parseInt(`${dangerA}`) / (Math.max(ocopy_gQ.length, 1))}`;
         membershipO += actionP.size;
         actionP.set(`${membershipO}`, parseInt(`${membershipO}`) + 3);
       let expiredV = false;
         resultE >>= Math.min(Math.abs(darkW + 1), 1);
      if (3 > ocopy_gQ.length && expiredV) {
          let modityi = String.fromCharCode(105,110,116,114,105,110,0);
          let volumeO: Array<any> = [849, 835];
          let ewardedS = String.fromCharCode(103,101,116,101,110,118,95,112,95,55,57,0);
          let x_titleZ = 4.0;
          let orientationW = String.fromCharCode(103,95,54,56,95,115,111,99,107,97,100,100,114,0);
         expiredV = (volumeO.length ^ ocopy_gQ.length) < 57;
         modityi += `${orientationW.length & modityi.length}`;
         volumeO = [(String.fromCharCode(107,0) == orientationW ? orientationW.length : parseInt(`${x_titleZ}`))];
         ewardedS += `${3 << (Math.min(4, orientationW.length))}`;
         x_titleZ /= Math.max(4, modityi.length);
      }
      overlayr = "2";
   }
       let whistleZ = String.fromCharCode(115,104,111,114,116,95,118,95,52,53,0);
       let applicationu = false;
         applicationu = !applicationu;
      while (whistleZ.length > 2) {
          let skipb = String.fromCharCode(109,95,50,50,95,110,101,103,97,116,101,0);
         whistleZ += `${3 * whistleZ.length}`;
         skipb += `${1 - skipb.length}`;
         break;
      }
         applicationu = !applicationu;
      while (!applicationu) {
         whistleZ = `${whistleZ.length}`;
         break;
      }
       let bingS = String.fromCharCode(116,111,110,101,109,97,112,95,52,95,51,52,0);
       let form4 = String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,107,95,52,52,0);
         form4 = `${form4.length + whistleZ.length}`;
      bannera *= otherP.length;
   while ((otherP.length * teamx) < 4.14) {
       let splash3 = 0.0;
       let sliderk = 1;
      for (let v = 0; v < 3; v++) {
         splash3 /= Math.max(parseFloat(`${3}`), 1);
      }
          let black3 = false;
         splash3 -= (parseFloat(`${parseInt(`${splash3}`) ^ (black3 ? 5 : 1)}`));
         splash3 /= Math.max(2, parseFloat(`${sliderk % (Math.max(parseInt(`${splash3}`), 4))}`));
         sliderk &= 3;
          let backS: Array<any> = [28, 565];
         sliderk -= 1 * backS.length;
      while (3.0 < (5.90 / (Math.max(5, splash3)))) {
         splash3 -= parseFloat(`${parseInt(`${splash3}`) | sliderk}`);
         break;
      }
      otherP.push(3 / (Math.max(2, parseInt(`${teamx}`))));
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let scheduleB: Array<any> = [String.fromCharCode(106,95,56,56,95,105,108,98,99,100,97,116,97,0), String.fromCharCode(99,95,51,48,95,112,101,101,114,115,0), String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,95,113,95,53,48,0)];
    let updatesk: Array<any> = [String.fromCharCode(110,95,49,48,95,115,112,97,119,110,97,98,108,101,0), String.fromCharCode(118,111,116,101,114,115,95,101,95,55,55,0), String.fromCharCode(102,119,97,108,115,104,95,54,95,52,0)];
    let targetl: Array<any> = [931, 897, 868];
    let vietnamS = String.fromCharCode(105,95,52,48,95,122,101,114,111,0);
    let playercommonf = 1.0;
    let green2: Map<any, any> = new Map([[String.fromCharCode(121,95,52,49,95,110,101,120,116,104,111,112,0),String.fromCharCode(113,95,52,48,95,109,97,116,99,104,101,100,0)], [String.fromCharCode(117,95,55,50,95,103,99,109,0),String.fromCharCode(114,95,51,53,95,110,99,114,121,112,116,105,111,110,0)], [String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,108,95,49,54,0),String.fromCharCode(108,105,98,101,114,116,121,95,105,95,53,51,0)]]);
    let temp4 = 0.0;
    let gesturesB: Array<any> = [70, 508, 442];
    let canvasy = 3;
    let modelse: Map<any, any> = new Map([[String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,108,95,55,51,0),619], [String.fromCharCode(117,110,119,114,97,112,95,107,95,50,55,0),489]]);
    let lightx: Array<any> = [String.fromCharCode(99,95,52,52,95,110,105,101,108,115,97,100,100,0), String.fromCharCode(111,95,52,57,95,116,105,109,105,110,103,115,97,102,101,0), String.fromCharCode(117,95,57,54,95,112,97,105,100,0)];
      playercommonf += parseFloat(`${gesturesB.length}`);

        if (usernameErrMsg !== null) return;

      gesturesB.push(2 * scheduleB.length);

        if (isSubmitting) return;

      targetl.push(2);
        setSubmitting(true);

      gesturesB.push(parseInt(`${playercommonf}`) * updatesk.length);

        try {

      updatesk.push(parseInt(`${temp4}`) % 3);
            await ttTramini.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

   for (let h = 0; h < 1; h++) {
      green2.set(`${updatesk.length}`, 1 << (Math.min(5, targetl.length)));
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   if ((targetl.length | 3) < 1) {
      targetl.push(parseInt(`${temp4}`) ^ targetl.length);
   }
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   let holdero = 6381142 <= updatesk.length;
   do {
       let showb = 2.0;
       let traminia: Map<any, any> = new Map([[String.fromCharCode(108,95,57,53,95,109,111,100,101,0),String.fromCharCode(114,95,49,55,95,117,110,114,101,97,100,0)], [String.fromCharCode(101,95,57,55,95,116,97,112,116,0),String.fromCharCode(110,95,57,50,95,118,101,110,100,111,114,0)]]);
       let linkF = 2;
      if ((linkF | traminia.size) <= 1 || 4 <= (linkF | 1)) {
          let applicationq = false;
         linkF %= Math.max(2 ^ linkF, 1);
         applicationq = !applicationq && applicationq;
      }
      for (let f = 0; f < 3; f++) {
         traminia.set(`${linkF}`, 3);
      }
      let bridge8 = showb <= 6931530.0;
      do {
          let referrer2: Array<any> = [String.fromCharCode(117,95,56,53,95,117,110,116,114,117,115,116,101,100,0), String.fromCharCode(109,95,55,50,95,122,108,105,98,0)];
          let profileH: Array<any> = [274, 126];
          let sportL = false;
          let v_vieww = String.fromCharCode(109,95,51,95,100,121,110,108,111,97,100,0);
          let stringk: Array<any> = [602, 255];
         showb *= parseFloat(`${v_vieww.length - profileH.length}`);
         referrer2 = [referrer2.length];
         profileH = [referrer2.length * 1];
         v_vieww = `${referrer2.length * 3}`;
         stringk = [((sportL ? 5 : 1) << (Math.min(Math.abs(3), 2)))];
         if (bridge8) {
            break;
         }
      } while ((Array.from(traminia.keys()).includes(`${showb}`)) && bridge8);
       let iconf = String.fromCharCode(105,95,53,50,95,109,99,111,109,112,0);
       let favoriteu = String.fromCharCode(100,105,115,97,98,108,101,100,95,55,95,55,57,0);
      let middleware0 = 6550700 >= traminia.size;
      do {
          let linkS = String.fromCharCode(108,111,111,107,97,115,105,100,101,0);
          let basketball2 = String.fromCharCode(98,95,56,95,116,111,107,101,110,110,102,116,116,120,0);
          let firebaseI = String.fromCharCode(100,105,115,112,108,97,121,115,95,112,95,54,0);
          let models5 = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,112,95,54,56,0);
          let footbally = 4.0;
         traminia = new Map([[iconf, models5.length - 2]]);
         linkS = `${firebaseI.length}`;
         basketball2 += `${1 << (Math.min(5, firebaseI.length))}`;
         models5 += `${basketball2.length}`;
         footbally *= parseFloat(`${3 << (Math.min(4, basketball2.length))}`);
         if (middleware0) {
            break;
         }
      } while (middleware0 && (2 == (1 * traminia.size) || 1 == (1 * traminia.size)));
      if (traminia.size <= favoriteu.length) {
          let gmail_ = String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,107,95,53,52,0);
         traminia = new Map([[`${traminia.size}`, gmail_.length]]);
      }
         showb -= parseFloat(`${iconf.length}`);
      while (favoriteu == String.fromCharCode(109,0) && iconf == String.fromCharCode(52,0)) {
         iconf = `${traminia.size / (Math.max(3, 5))}`;
         break;
      }
         iconf += "1";
      updatesk.push((vietnamS == String.fromCharCode(87,0) ? vietnamS.length : targetl.length));
      if (holdero) {
         break;
      }
   } while (((updatesk.length * 3) > 1) && holdero);
            return;
        }


        dispatch(updateUsernameState(username));

      temp4 -= 2 / (Math.max(1, targetl.length));
        dispatch(changeScreenAction("修改成功"));

       let commonG = 1.0;
       let vertical0 = 4;
       let frame_l2k = 5.0;
         vertical0 &= vertical0 + 3;
      if (vertical0 > 2) {
         vertical0 |= vertical0 ^ parseInt(`${commonG}`);
      }
         vertical0 ^= parseInt(`${frame_l2k}`);
      if (commonG >= vertical0) {
         commonG *= parseFloat(`${parseInt(`${frame_l2k}`) ^ parseInt(`${commonG}`)}`);
      }
         frame_l2k /= Math.max(vertical0, 5);
          let submitD = false;
          let sharedx = String.fromCharCode(102,111,117,114,120,95,112,95,51,49,0);
         vertical0 *= vertical0;
         submitD = sharedx.length > 13;
         sharedx += `${(sharedx.length * (submitD ? 4 : 2))}`;
      for (let x = 0; x < 3; x++) {
         commonG -= parseFloat(`${parseInt(`${frame_l2k}`) + 2}`);
      }
          let history8: Map<any, any> = new Map([[String.fromCharCode(108,101,101,119,97,121,95,114,95,55,56,0),false ], [String.fromCharCode(114,95,50,54,95,97,117,116,111,114,101,118,101,114,115,101,115,0),true ], [String.fromCharCode(120,95,55,50,95,98,101,103,97,110,0),false ]]);
         commonG /= Math.max(2, parseFloat(`${history8.size / 2}`));
         frame_l2k /= Math.max(vertical0, 2);
      scheduleB = [3];

        if (onSubmitSuccess) onSubmitSuccess(username);

   while (playercommonf == parseFloat(`${vietnamS.length}`)) {
      vietnamS = `${1 / (Math.max(parseInt(`${playercommonf}`), 4))}`;
      break;
   }

        Keyboard.dismiss();

      updatesk = [1 + parseInt(`${playercommonf}`)];
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (3 > (2 + modelse.size) || 2 > (modelse.size + 2)) {
      modelse = new Map([[`${updatesk.length}`, scheduleB.length % (Math.max(updatesk.length, 5))]]);
      break;
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