import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/wawa_related";
import { updateUsernameState } from "@redux/actions/wawa_loginsuccess";
import { wawaEvent } from "@api";


interface wawaAwayShow {
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
}: wawaAwayShow) => {
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
       let analyticO = 2.0;
    let predictionwinI = String.fromCharCode(116,95,51,54,95,98,121,116,101,111,117,116,0);
    let backwhiteB = false;
    let vignetteX = String.fromCharCode(109,117,120,95,50,95,54,54,0);
    let circleY = 2.0;
    let whatsapp8 = false;
    let imagesz = true;
    let bootsplashE = 0.0;
    let update__dX = false;
    let progressO: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,95,108,95,53,57,0),2], [String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,55,95,53,56,0),249]]);
    let imageactionliveJ = 4.0;
    let mountingp: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,101,116,95,121,95,57,54,0),String.fromCharCode(104,95,54,54,95,105,115,100,105,103,105,116,0)], [String.fromCharCode(114,98,115,112,95,102,95,57,50,0),String.fromCharCode(108,95,52,52,95,105,110,105,116,97,99,107,0)], [String.fromCharCode(111,114,100,101,114,105,110,103,95,110,95,56,52,0),String.fromCharCode(99,121,99,108,101,95,118,95,50,53,0)]]);
       let debugi = String.fromCharCode(110,117,109,101,114,105,99,97,108,95,57,95,55,49,0);
       let middlebrightnessx = String.fromCharCode(112,116,114,115,95,48,95,54,51,0);
       let libimagepipelineV = false;
         middlebrightnessx += `${(middlebrightnessx.length >> (Math.min(1, Math.abs((libimagepipelineV ? 4 : 1)))))}`;
      if (debugi.length >= middlebrightnessx.length) {
         middlebrightnessx += `${middlebrightnessx.length - debugi.length}`;
      }
         middlebrightnessx = `${2 >> (Math.min(5, middlebrightnessx.length))}`;
      let shootyesgoal9 = debugi == String.fromCharCode(122,101,105,0);
      do {
         debugi += `${((libimagepipelineV ? 5 : 5))}`;
         if (shootyesgoal9) {
            break;
         }
      } while (shootyesgoal9 && (1 >= debugi.length));
      if (debugi.startsWith(`${middlebrightnessx.length}`)) {
         debugi += `${((libimagepipelineV ? 5 : 4) | 1)}`;
      }
      while (!libimagepipelineV || 2 > middlebrightnessx.length) {
          let homeplayer9 = String.fromCharCode(100,95,54,52,95,115,109,97,108,108,101,114,0);
          let f_count3 = String.fromCharCode(120,95,51,57,95,111,116,104,101,114,115,0);
         libimagepipelineV = !middlebrightnessx.includes(`${libimagepipelineV}`);
         homeplayer9 = "2";
         f_count3 += `${(homeplayer9 == String.fromCharCode(90,0) ? homeplayer9.length : f_count3.length)}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
          let inviteF = 5;
          let shareblack8: Map<any, any> = new Map([[String.fromCharCode(101,95,50,95,99,104,97,105,110,105,100,0),20], [String.fromCharCode(114,101,115,117,108,116,115,95,48,95,52,52,0),258], [String.fromCharCode(107,95,54,52,95,99,111,112,121,99,111,111,107,101,114,0),285]]);
          let sellmathbackgroundD = false;
         middlebrightnessx += `${(middlebrightnessx.length - (libimagepipelineV ? 2 : 5))}`;
         inviteF >>= Math.min(3, Math.abs(shareblack8.size + 2));
         shareblack8 = new Map([[`${shareblack8.size}`, ((sellmathbackgroundD ? 3 : 2) * shareblack8.size)]]);
         sellmathbackgroundD = null != shareblack8.get(`${sellmathbackgroundD}`);
      }
      if (1 <= middlebrightnessx.length && libimagepipelineV) {
         middlebrightnessx += `${(String.fromCharCode(89,0) == middlebrightnessx ? middlebrightnessx.length : (libimagepipelineV ? 3 : 3))}`;
      }
         middlebrightnessx = `${((libimagepipelineV ? 4 : 3))}`;
      imageactionliveJ += parseFloat(`${3 - middlebrightnessx.length}`);
       let listX = String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,113,95,53,50,0);
         listX += `${listX.length}`;
         listX = `${listX.length}`;
      if (listX.includes(listX)) {
         listX = `${listX.length + listX.length}`;
      }
      analyticO *= parseFloat(`${progressO.size}`);
      analyticO /= Math.max(1, parseFloat(`${parseInt(`${bootsplashE}`)}`));
   if (predictionwinI.length > 4) {
       let animationsy = String.fromCharCode(104,95,54,51,95,102,111,99,117,115,101,100,0);
      if (animationsy.length > animationsy.length) {
         animationsy += `${animationsy.length}`;
      }
         animationsy = `${animationsy.length | 2}`;
         animationsy += `${animationsy.length | animationsy.length}`;
      predictionwinI += `${1 << (Math.min(Math.abs(parseInt(`${bootsplashE}`)), 5))}`;
   }
   if (!whatsapp8) {
      circleY -= parseFloat(`${parseInt(`${bootsplashE}`) * 2}`);
   }
   for (let j = 0; j < 3; j++) {
       let armvaT = String.fromCharCode(115,116,121,112,95,116,95,53,0);
       let dependenciesK = String.fromCharCode(105,110,105,116,118,95,118,95,57,52,0);
      while (armvaT != dependenciesK) {
         dependenciesK += `${dependenciesK.length & 2}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
          let fcdaebecbcbafcdfceaaeccfeacdbZ: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,97,99,102,102,0),99], [String.fromCharCode(116,95,53,55,95,116,105,109,101,98,97,115,101,0),499]]);
          let iconmegaphoneh = false;
         armvaT = `${dependenciesK.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbZ.set(`${iconmegaphoneh}`, ((iconmegaphoneh ? 1 : 2) / (Math.max(fcdaebecbcbafcdfceaaeccfeacdbZ.size, 8))));
      }
      for (let q = 0; q < 3; q++) {
         armvaT = `${dependenciesK.length}`;
      }
      if (armvaT.length <= 2) {
         armvaT += "2";
      }
         dependenciesK += `${armvaT.length / 3}`;
      let release_8ni = 8339306 <= armvaT.length;
      do {
          let albumX = 1.0;
          let hejiu: Map<any, any> = new Map([[String.fromCharCode(104,95,49,55,95,109,100,105,97,0),455], [String.fromCharCode(109,111,100,105,102,105,101,100,95,102,95,51,52,0),525]]);
         armvaT = `${2 | armvaT.length}`;
         albumX -= hejiu.size;
         hejiu = new Map([[`${hejiu.size}`, 3]]);
         if (release_8ni) {
            break;
         }
      } while ((4 == dependenciesK.length) && release_8ni);
      progressO = new Map([[`${backwhiteB}`, (parseInt(`${circleY}`) ^ (backwhiteB ? 3 : 4))]]);
   }
      vignetteX = `${progressO.size * 2}`;
       let store8: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,110,101,110,116,115,95,120,95,57,49,0),248], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,53,95,51,53,0),362]]);
       let modulesO = 2.0;
       let xvodx = 4.0;
         store8 = new Map([[`${store8.size}`, 2 % (Math.max(7, parseInt(`${xvodx}`)))]]);
      while (3 < (store8.size | 1) || (modulesO * parseFloat(`${store8.size}`)) < 2.85) {
         modulesO *= parseFloat(`${1 - parseInt(`${xvodx}`)}`);
         break;
      }
      for (let s = 0; s < 2; s++) {
         store8.set(`${xvodx}`, parseInt(`${xvodx}`));
      }
      for (let e = 0; e < 1; e++) {
          let whistleorangep = true;
          let livea = 1.0;
          let sounds = true;
         xvodx /= Math.max(store8.size | 3, 2);
         whistleorangep = !sounds;
         livea /= Math.max(3, ((sounds ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${livea}`)), 2))));
      }
      while (modulesO >= 4.14) {
         store8 = new Map([[`${store8.size}`, store8.size]]);
         break;
      }
      while (5.89 > (4.88 / (Math.max(8, modulesO))) && (modulesO / (Math.max(10, xvodx))) > 4.88) {
         xvodx += parseInt(`${xvodx}`);
         break;
      }
      if ((modulesO * xvodx) < 2.60) {
         modulesO -= parseFloat(`${2 >> (Math.min(4, Math.abs(store8.size)))}`);
      }
       let taiwane = String.fromCharCode(108,105,98,109,95,120,95,54,52,0);
       let auto_rpf = String.fromCharCode(100,111,119,110,108,105,110,107,95,101,95,50,54,0);
      for (let v = 0; v < 2; v++) {
         auto_rpf = `${1 << (Math.min(3, auto_rpf.length))}`;
      }
      bootsplashE *= parseFloat(`${3}`);
      imageactionliveJ *= parseFloat(`${parseInt(`${imageactionliveJ}`) & 3}`);
       let friendsO = String.fromCharCode(99,104,97,110,103,101,114,95,119,95,50,54,0);
      if (2 < friendsO.length) {
          let arean = 3.0;
          let v_unlocke = String.fromCharCode(122,95,51,55,95,110,105,100,108,110,0);
          let photoJ = String.fromCharCode(97,95,50,52,95,99,111,110,116,114,111,108,108,101,114,0);
          let whitetickd = 2.0;
          let baiduz = 5;
         friendsO += `${v_unlocke.length}`;
         arean += parseInt(`${whitetickd}`) % 3;
         v_unlocke += `${(photoJ == String.fromCharCode(75,0) ? photoJ.length : parseInt(`${arean}`))}`;
         whitetickd -= parseFloat(`${baiduz & 1}`);
         baiduz >>= Math.min(2, Math.abs((String.fromCharCode(52,0) == photoJ ? photoJ.length : parseInt(`${whitetickd}`))));
      }
         friendsO = `${3 << (Math.min(2, friendsO.length))}`;
      let downloadingP = friendsO.length >= 5051857;
      do {
         friendsO += "1";
         if (downloadingP) {
            break;
         }
      } while (downloadingP && (1 <= friendsO.length));
      analyticO -= parseFloat(`${parseInt(`${analyticO}`) ^ 3}`);
      whatsapp8 = circleY > 39.79;
   while (predictionwinI.endsWith(`${bootsplashE}`)) {
       let libavdevicef: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,100,95,52,95,53,48,0),String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,121,95,49,51,0)], [String.fromCharCode(105,95,51,50,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0),String.fromCharCode(101,99,114,101,116,95,115,95,49,56,0)], [String.fromCharCode(114,101,97,115,111,110,95,54,95,57,55,0),String.fromCharCode(115,95,49,49,95,97,116,114,105,109,0)]]);
          let sportsN: Array<any> = [622, 205];
         libavdevicef.set(`${sportsN.length}`, 3 << (Math.min(3, Math.abs(libavdevicef.size))));
          let regengs = 4;
          let iconshare4 = true;
         libavdevicef.set(`${iconshare4}`, ((iconshare4 ? 2 : 1) & 1));
         regengs *= 1 * regengs;
      let mintegral7 = libavdevicef.size >= 6068592;
      do {
         libavdevicef = new Map([[`${libavdevicef.size}`, libavdevicef.size | libavdevicef.size]]);
         if (mintegral7) {
            break;
         }
      } while (mintegral7 && (4 > (libavdevicef.size % (Math.max(7, libavdevicef.size))) || 4 > (libavdevicef.size % (Math.max(3, libavdevicef.size)))));
      bootsplashE *= (parseFloat(`${(backwhiteB ? 4 : 1) / 3}`));
      break;
   }
   while ((1.53 / (Math.max(2, bootsplashE))) >= 3.40) {
      imagesz = 56.41 >= imageactionliveJ;
      break;
   }
   while ((analyticO / (Math.max(6, bootsplashE))) == 4.86 && 4.24 == (analyticO / 4.86)) {
       let megaphone8 = String.fromCharCode(105,95,53,50,95,98,119,103,116,0);
       let imagenetworkerrz = String.fromCharCode(99,111,114,114,101,99,116,101,100,95,48,95,54,51,0);
       let adultZ = String.fromCharCode(113,95,55,55,95,97,117,100,105,111,112,114,111,99,0);
       let ewardedh = true;
       let screenH: Map<any, any> = new Map([[String.fromCharCode(108,97,121,101,114,105,110,103,95,112,95,49,56,0),151], [String.fromCharCode(116,97,98,108,101,115,95,107,95,56,51,0),956]]);
          let video7 = String.fromCharCode(102,95,57,57,95,102,114,97,109,101,108,101,115,115,0);
         ewardedh = video7 == String.fromCharCode(69,0);
      while (imagenetworkerrz.startsWith(adultZ)) {
         imagenetworkerrz += `${((ewardedh ? 5 : 1) % 1)}`;
         break;
      }
         adultZ += `${2 * megaphone8.length}`;
      for (let z = 0; z < 3; z++) {
          let yellow8 = String.fromCharCode(107,95,55,54,95,102,97,116,101,0);
          let shootyesgoalN = true;
          let iconuserp: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,115,105,122,101,98,105,116,114,97,116,101,0),true ], [String.fromCharCode(105,110,99,108,117,100,101,100,95,111,95,49,51,0),false ]]);
          let basketballmatchdetailbgF = String.fromCharCode(105,110,116,101,114,110,97,108,95,97,95,49,0);
          let leaguedetailsbgH: Array<any> = [971, 435, 282];
         imagenetworkerrz = `${adultZ.length}`;
         yellow8 += "1";
         shootyesgoalN = String.fromCharCode(118,0) == yellow8;
         iconuserp = new Map([[`${leaguedetailsbgH.length}`, leaguedetailsbgH.length | 1]]);
         basketballmatchdetailbgF += `${(yellow8 == String.fromCharCode(49,0) ? yellow8.length : (shootyesgoalN ? 4 : 3))}`;
      }
         ewardedh = ((adultZ.length | (ewardedh ? adultZ.length : 38)) >= 38);
       let teamx = String.fromCharCode(100,101,99,111,114,95,114,95,49,56,0);
       let gmail6 = String.fromCharCode(97,95,50,54,95,114,111,117,110,100,117,112,0);
      let hnewinterstitialO = 9550524 <= screenH.size;
      do {
          let minivodx = 4.0;
          let small8 = String.fromCharCode(115,95,50,48,95,115,99,104,101,100,0);
          let middlewareb = String.fromCharCode(98,105,115,101,99,116,95,101,95,50,57,0);
          let orientationk: Map<any, any> = new Map([[String.fromCharCode(121,95,51,51,95,99,97,112,97,98,108,101,0),466], [String.fromCharCode(102,95,51,56,95,115,104,111,114,116,108,121,0),571]]);
         screenH.set(`${ewardedh}`, ((ewardedh ? 1 : 2) / (Math.max(1, 9))));
         minivodx /= Math.max(1, (parseFloat(`${String.fromCharCode(89,0) == middlewareb ? middlewareb.length : orientationk.size}`)));
         small8 = `${2 >> (Math.min(2, Math.abs(orientationk.size)))}`;
         if (hnewinterstitialO) {
            break;
         }
      } while (hnewinterstitialO && (1 > (adultZ.length | 3)));
          let internetg: Map<any, any> = new Map([[String.fromCharCode(110,95,51,54,95,110,115,117,105,0),886], [String.fromCharCode(109,111,100,101,99,111,115,116,115,95,55,95,56,0),76]]);
         teamx += `${2 - megaphone8.length}`;
         internetg = new Map([[`${internetg.size}`, 2 | internetg.size]]);
         gmail6 = `${screenH.size}`;
         gmail6 += "1";
          let calendaru: Map<any, any> = new Map([[String.fromCharCode(100,95,51,51,95,105,110,105,116,105,97,108,105,122,101,114,0),216], [String.fromCharCode(100,95,55,48,95,112,117,98,108,105,115,104,97,98,108,101,0),764], [String.fromCharCode(113,115,118,115,99,97,108,101,95,99,95,50,49,0),739]]);
          let leagueY: Array<any> = [589, 427, 252];
          let checkbox1 = 4.0;
         gmail6 = `${1 + teamx.length}`;
         calendaru = new Map([[`${calendaru.size}`, 2 & calendaru.size]]);
         leagueY.push(leagueY.length);
         checkbox1 *= parseFloat(`${parseInt(`${checkbox1}`)}`);
          let f_animationY = String.fromCharCode(104,95,57,51,95,110,101,119,108,105,110,101,0);
          let logouserZ: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,98,105,110,100,105,110,103,115,0),false ], [String.fromCharCode(99,111,109,112,108,101,116,101,100,95,101,95,53,48,0),false ], [String.fromCharCode(105,95,53,49,95,103,101,116,105,110,116,0),true ]]);
         ewardedh = 17 <= screenH.size && 17 <= f_animationY.length;
         f_animationY = `${logouserZ.size | 3}`;
         logouserZ = new Map([[`${logouserZ.size}`, logouserZ.size % (Math.max(8, logouserZ.size))]]);
      if (4 == (screenH.size >> (Math.min(Math.abs(5), 2))) && 3 == (adultZ.length >> (Math.min(Math.abs(5), 3)))) {
         adultZ += `${imagenetworkerrz.length ^ screenH.size}`;
      }
         adultZ = `${((ewardedh ? 1 : 2))}`;
      while ((megaphone8.length ^ screenH.size) == 3 && 4 == (megaphone8.length ^ 3)) {
         screenH.set(`${adultZ}`, (String.fromCharCode(52,0) == adultZ ? adultZ.length : screenH.size));
         break;
      }
      bootsplashE /= Math.max(4, parseFloat(`${3}`));
      break;
   }
   for (let w = 0; w < 2; w++) {
       let calendar1 = String.fromCharCode(100,95,53,50,95,109,115,98,115,0);
       let reminderc: Map<any, any> = new Map([[String.fromCharCode(114,103,116,99,117,95,112,95,54,52,0),464], [String.fromCharCode(108,95,53,55,95,103,101,116,115,111,99,107,97,100,100,114,0),110], [String.fromCharCode(101,95,53,48,95,97,116,116,114,97,99,116,105,111,110,0),918]]);
      while ((reminderc.size / 5) == 1) {
          let clubJ = String.fromCharCode(120,95,50,56,95,100,111,119,110,108,101,102,116,0);
          let node3 = 4.0;
          let liveshares = 1.0;
          let shielddoneY = 2.0;
          let largebrightnessh = true;
         reminderc = new Map([[`${node3}`, (String.fromCharCode(81,0) == clubJ ? clubJ.length : parseInt(`${node3}`))]]);
         liveshares -= parseFloat(`${1 - parseInt(`${liveshares}`)}`);
         shielddoneY += (parseFloat(`${parseInt(`${shielddoneY}`) >> (Math.min(4, Math.abs((largebrightnessh ? 2 : 2))))}`));
         largebrightnessh = shielddoneY >= 94.6;
         break;
      }
      for (let b = 0; b < 2; b++) {
         calendar1 += `${1 ^ calendar1.length}`;
      }
      let predictiondefaultk = reminderc.size <= 8891770;
      do {
          let tooltips1 = String.fromCharCode(112,95,49,54,95,115,117,112,101,114,119,105,110,100,111,119,0);
          let dicelogou = String.fromCharCode(115,105,110,102,95,103,95,55,54,0);
          let subbasketballplayer8 = false;
          let overT = 2.0;
          let grey2 = String.fromCharCode(108,111,97,100,95,51,95,50,51,0);
         reminderc = new Map([[tooltips1, parseInt(`${overT}`) | tooltips1.length]]);
         dicelogou = `${(String.fromCharCode(89,0) == dicelogou ? (subbasketballplayer8 ? 5 : 2) : dicelogou.length)}`;
         subbasketballplayer8 = subbasketballplayer8 && dicelogou.length < 9;
         overT /= Math.max(1, 2);
         grey2 = `${(3 << (Math.min(5, Math.abs((subbasketballplayer8 ? 3 : 1)))))}`;
         if (predictiondefaultk) {
            break;
         }
      } while (predictiondefaultk && (reminderc.size == 1));
      while ((calendar1.length | reminderc.size) >= 4 && (reminderc.size | 4) >= 1) {
         calendar1 += `${3 - calendar1.length}`;
         break;
      }
      let reward0 = String.fromCharCode(107,109,105,106,103,55,113,107,111,116,0) == calendar1;
      do {
         calendar1 += `${1 & calendar1.length}`;
         if (reward0) {
            break;
         }
      } while ((calendar1.endsWith(`${reminderc.size}`)) && reward0);
         calendar1 += "3";
      update__dX = progressO.size == 13;
   }
      progressO.set(`${circleY}`, 2 / (Math.max(parseInt(`${circleY}`), 4)));
      analyticO /= Math.max(1, parseFloat(`${progressO.size / (Math.max(2, parseInt(`${analyticO}`)))}`));
      imageactionliveJ /= Math.max(parseFloat(`${parseInt(`${imageactionliveJ}`) * 2}`), 3);

        setUsername(initialUsername);

   while ((analyticO / (Math.max(4.82, 2))) == 4.58) {
      imagesz = circleY < parseFloat(`${vignetteX.length}`);
      break;
   }
   while ((4.93 * bootsplashE) < 2.50) {
      bootsplashE -= parseFloat(`${parseInt(`${bootsplashE}`) + 1}`);
      break;
   }
       let issubc = String.fromCharCode(110,95,57,50,95,117,110,116,114,117,115,116,101,100,0);
          let langkeyF = String.fromCharCode(110,95,51,56,95,108,111,103,105,99,97,108,0);
          let goallogoH = true;
          let mbbannerN = String.fromCharCode(99,95,52,55,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0);
         issubc = `${mbbannerN.length}`;
         langkeyF += `${((goallogoH ? 2 : 3))}`;
         goallogoH = langkeyF.length == 82;
         mbbannerN = `${((goallogoH ? 2 : 3))}`;
       let expandr = 2.0;
      while (2 >= (issubc.length * parseInt(`${expandr}`))) {
          let libavfilterE = String.fromCharCode(102,105,108,109,95,113,95,57,50,0);
          let liveshare6: Map<any, any> = new Map([[String.fromCharCode(102,95,52,48,95,98,105,110,111,109,105,97,108,0),false ], [String.fromCharCode(119,101,120,112,97,110,100,95,117,95,55,51,0),false ], [String.fromCharCode(112,97,110,101,115,95,109,95,55,54,0),true ]]);
          let vietnamg = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,56,95,50,53,0);
          let imageactionliven = 1.0;
         issubc += `${parseInt(`${imageactionliven}`) >> (Math.min(libavfilterE.length, 4))}`;
         libavfilterE += `${(String.fromCharCode(76,0) == vietnamg ? vietnamg.length : liveshare6.size)}`;
         liveshare6.set(vietnamg, 3 - vietnamg.length);
         imageactionliven /= Math.max(3, parseFloat(`${liveshare6.size - 2}`));
         break;
      }
      backwhiteB = predictionwinI.length > vignetteX.length;
   let middlewares = 9633299 >= predictionwinI.length;
   do {
       let trophyU = 4.0;
       let iconcalendare = false;
          let basketballicon1: Array<any> = [String.fromCharCode(97,95,53,95,105,110,99,108,117,100,101,0), String.fromCharCode(115,97,100,120,120,95,122,95,57,50,0)];
          let stringsW: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,118,95,55,51,0),508], [String.fromCharCode(100,105,115,99,97,114,100,95,119,95,57,57,0),538], [String.fromCharCode(119,115,97,117,100,95,49,95,52,49,0),227]]);
         trophyU /= Math.max(5, ((iconcalendare ? 1 : 4) ^ parseInt(`${trophyU}`)));
         basketballicon1.push(3);
         stringsW.set(`${basketballicon1.length}`, stringsW.size % (Math.max(7, basketballicon1.length)));
      let teamdetailsbgY = iconcalendare ? !iconcalendare : iconcalendare;
      do {
         iconcalendare = !iconcalendare;
         if (teamdetailsbgY) {
            break;
         }
      } while ((iconcalendare) && teamdetailsbgY);
      let schedulerq = iconcalendare ? !iconcalendare : iconcalendare;
      do {
          let placement8 = 0.0;
          let episodeZ = 5.0;
         iconcalendare = iconcalendare && 78.9 < trophyU;
         placement8 -= parseInt(`${episodeZ}`);
         episodeZ += parseInt(`${placement8}`);
         if (schedulerq) {
            break;
         }
      } while (schedulerq && (iconcalendare));
         iconcalendare = !iconcalendare;
         iconcalendare = !iconcalendare && 16.21 > trophyU;
         iconcalendare = !iconcalendare;
      predictionwinI += `${((imagesz ? 5 : 4) | (update__dX ? 5 : 4))}`;
      if (middlewares) {
         break;
      }
   } while (middlewares && (predictionwinI.endsWith(`${bootsplashE}`)));
   if (!backwhiteB || update__dX) {
       let cornerkick8 = 0.0;
       let imagemanager_ = 3.0;
      let module2 = 8410090.0 <= imagemanager_;
      do {
          let castinga = 0.0;
          let awayb = String.fromCharCode(120,95,49,49,95,105,110,116,101,114,97,99,116,111,114,0);
          let shared4 = String.fromCharCode(109,97,116,114,105,120,95,55,95,48,0);
          let whiteanimationlivec = 2.0;
         imagemanager_ += parseFloat(`${parseInt(`${castinga}`) << (Math.min(Math.abs(2), 5))}`);
         castinga *= awayb.length / 1;
         awayb += `${shared4.length}`;
         shared4 += `${2 % (Math.max(8, awayb.length))}`;
         whiteanimationlivec *= 3 & awayb.length;
         if (module2) {
            break;
         }
      } while ((imagemanager_ >= 2.63) && module2);
         imagemanager_ += parseFloat(`${3}`);
      backwhiteB = 81.97 == imageactionliveJ;
      cornerkick8 *= parseInt(`${cornerkick8}`);
   }
   let modelsc = circleY <= 8267464.0;
   do {
      circleY *= parseFloat(`${parseInt(`${imageactionliveJ}`) ^ predictionwinI.length}`);
      if (modelsc) {
         break;
      }
   } while (modelsc && ((progressO.size - 1) > 2 || 3.46 > (circleY / (Math.max(parseFloat(`${progressO.size}`), 3)))));
   while (3.76 >= analyticO) {
       let whistleT = 1.0;
       let turndownu: Map<any, any> = new Map([[String.fromCharCode(111,95,57,50,95,109,97,107,101,114,112,109,0),580], [String.fromCharCode(121,117,118,112,108,95,48,95,54,50,0),708]]);
       let network9 = 5.0;
       let becomen = String.fromCharCode(109,95,51,53,95,99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0);
       let notificationgray2 = true;
         network9 *= 1;
      if (turndownu.size < 3) {
          let smallsoundl = String.fromCharCode(110,95,55,95,109,98,103,114,97,112,104,0);
          let modityv = String.fromCharCode(97,117,114,97,95,119,95,51,48,0);
          let halffieldimageF = String.fromCharCode(106,95,57,54,95,105,103,110,112,111,115,116,0);
          let downloaderA = String.fromCharCode(101,95,52,55,95,100,117,112,108,105,99,97,116,101,115,0);
         notificationgray2 = becomen.length <= 18;
         smallsoundl += `${modityv.length}`;
         modityv = "1";
         halffieldimageF = `${modityv.length << (Math.min(smallsoundl.length, 5))}`;
         downloaderA += `${smallsoundl.length}`;
      }
         whistleT += parseFloat(`${becomen.length}`);
          let penaltygoalf = String.fromCharCode(107,95,51,54,95,104,101,97,100,101,114,0);
          let imageactionlivek = String.fromCharCode(116,104,114,111,116,116,108,101,114,95,122,95,56,55,0);
          let libflipper5 = String.fromCharCode(115,95,54,54,95,102,97,114,109,101,0);
         whistleT /= Math.max(parseFloat(`${penaltygoalf.length << (Math.min(2, Math.abs(parseInt(`${whistleT}`))))}`), 1);
         penaltygoalf += `${libflipper5.length % (Math.max(1, 7))}`;
         imageactionlivek = "3";
         libflipper5 = `${imageactionlivek.length}`;
       let crossq = String.fromCharCode(97,108,108,95,56,95,50,53,0);
      for (let g = 0; g < 2; g++) {
          let networkk = String.fromCharCode(120,95,51,57,95,117,110,104,105,100,101,0);
          let hookH = 5.0;
         network9 *= 1;
         networkk = `${parseInt(`${hookH}`)}`;
         hookH -= 1;
      }
         turndownu.set(`${whistleT}`, parseInt(`${whistleT}`) ^ turndownu.size);
      if ((crossq.length * parseInt(`${whistleT}`)) <= 5) {
         whistleT += parseFloat(`${becomen.length}`);
      }
         notificationgray2 = becomen == String.fromCharCode(106,0);
         whistleT += parseFloat(`${parseInt(`${network9}`) & 1}`);
      if (turndownu.get(`${whistleT}`) == null) {
         turndownu.set(`${notificationgray2}`, crossq.length | 3);
      }
      if (!notificationgray2 && 5 >= crossq.length) {
          let mbjscommonZ = 5.0;
          let collectionU: Array<any> = [91, 177];
          let dplusG: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,101,114,95,99,95,51,48,0),259], [String.fromCharCode(100,105,115,115,105,109,95,111,95,52,48,0),39]]);
         notificationgray2 = dplusG.get(`${notificationgray2}`) != null;
         mbjscommonZ += parseInt(`${mbjscommonZ}`) | 1;
         collectionU = [parseInt(`${mbjscommonZ}`) / (Math.max(collectionU.length, 10))];
         dplusG.set(`${mbjscommonZ}`, 3);
      }
         becomen = `${becomen.length >> (Math.min(3, Math.abs(parseInt(`${whistleT}`))))}`;
      if ((2 % (Math.max(2, becomen.length))) >= 5 || 1.45 >= (whistleT + 2.1)) {
          let changeA = String.fromCharCode(105,95,51,55,95,101,114,114,108,111,103,0);
         whistleT += parseFloat(`${1 << (Math.min(5, changeA.length))}`);
      }
         becomen += `${(parseInt(`${whistleT}`) & (notificationgray2 ? 2 : 3))}`;
      imageactionliveJ += parseFloat(`${vignetteX.length}`);
      break;
   }
   if (2.47 == (analyticO - 4.7) && backwhiteB) {
      backwhiteB = (bootsplashE - circleY) > 83.87;
   }
      bootsplashE *= (parseFloat(`${vignetteX == String.fromCharCode(100,0) ? parseInt(`${circleY}`) : vignetteX.length}`));
   for (let q = 0; q < 2; q++) {
       let shootI = 4.0;
       let tailO = 1.0;
       let modalN = 5.0;
       let stringsm = String.fromCharCode(115,97,109,101,113,95,105,95,53,52,0);
       let flagP: Map<any, any> = new Map([[String.fromCharCode(108,115,104,105,102,116,95,104,95,50,56,0),true ], [String.fromCharCode(112,95,57,57,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0),true ], [String.fromCharCode(115,109,105,108,95,105,95,50,55,0),false ]]);
      while (1 >= (stringsm.length - parseInt(`${modalN}`)) || (stringsm.length + 1) >= 1) {
         stringsm += `${stringsm.length ^ 2}`;
         break;
      }
      let searchbarR = flagP.size <= 9113155;
      do {
         flagP.set(`${modalN}`, parseInt(`${modalN}`) % 3);
         if (searchbarR) {
            break;
         }
      } while ((flagP.size > 3) && searchbarR);
         stringsm = `${1 / (Math.max(10, parseInt(`${shootI}`)))}`;
      while (3 < flagP.size) {
          let colorsL: Map<any, any> = new Map([[String.fromCharCode(108,101,110,118,108,99,95,104,95,50,53,0),165], [String.fromCharCode(105,116,101,114,97,116,105,111,110,115,95,101,95,51,0),157], [String.fromCharCode(106,95,55,51,95,119,101,120,112,97,110,100,0),775]]);
          let scorepopsoundQ = String.fromCharCode(115,111,108,105,100,105,116,121,95,113,95,55,0);
          let libjsiL = 0.0;
          let scrollviewX = 0.0;
          let eventsplashl = String.fromCharCode(115,116,114,115,101,112,95,111,95,57,48,0);
         flagP = new Map([[`${flagP.size}`, flagP.size - parseInt(`${shootI}`)]]);
         colorsL = new Map([[scorepopsoundQ, scorepopsoundQ.length % (Math.max(eventsplashl.length, 6))]]);
         libjsiL -= 1;
         scrollviewX += parseFloat(`${colorsL.size / (Math.max(5, eventsplashl.length))}`);
         break;
      }
          let imagese: Array<any> = [433, 947];
         flagP.set(`${modalN}`, stringsm.length);
         imagese.push(imagese.length);
      while (3.66 <= (modalN * 4.62) || (modalN * 4.62) <= 4.48) {
          let placements = String.fromCharCode(115,95,50,55,95,102,108,97,99,0);
          let libavformatd = String.fromCharCode(100,111,103,115,95,120,95,56,57,0);
          let mathL = 4.0;
         shootI -= parseFloat(`${stringsm.length}`);
         placements += "2";
         libavformatd += `${libavformatd.length}`;
         mathL *= (libavformatd == String.fromCharCode(75,0) ? libavformatd.length : placements.length);
         break;
      }
         tailO += parseInt(`${modalN}`);
      for (let i = 0; i < 3; i++) {
         shootI += parseFloat(`${1 & parseInt(`${tailO}`)}`);
      }
      while (flagP.size <= stringsm.length) {
         stringsm += `${parseInt(`${tailO}`) - stringsm.length}`;
         break;
      }
          let libtanT = 4.0;
          let backd = String.fromCharCode(119,101,101,107,100,97,121,115,95,102,95,53,51,0);
         modalN -= parseFloat(`${flagP.size}`);
         libtanT /= Math.max(parseFloat(`${parseInt(`${libtanT}`)}`), 4);
         backd = "1";
       let giflivestreaming2: Array<any> = [String.fromCharCode(99,111,114,101,115,95,116,95,49,52,0), String.fromCharCode(120,95,56,50,95,103,117,105,100,101,115,0), String.fromCharCode(115,99,97,116,116,101,114,95,102,95,55,55,0)];
       let reactN: Array<any> = [333, 270, 400];
         giflivestreaming2.push(stringsm.length ^ giflivestreaming2.length);
      let watchi = 7699196 >= flagP.size;
      do {
          let moonm = true;
          let guideR = true;
         flagP.set(`${modalN}`, 2);
         moonm = !guideR;
         guideR = moonm;
         if (watchi) {
            break;
         }
      } while (watchi && (flagP.get(`${modalN}`) == null));
       let statistics_ = 2.0;
       let predictionP = 2.0;
      let sheetn = 8926212.0 <= statistics_;
      do {
         statistics_ += parseInt(`${shootI}`);
         if (sheetn) {
            break;
         }
      } while ((5.45 >= (statistics_ - 1.33) || 1 >= (flagP.size & 5)) && sheetn);
      bootsplashE += parseFloat(`${parseInt(`${imageactionliveJ}`) << (Math.min(2, Math.abs(parseInt(`${shootI}`))))}`);
   }
   for (let f = 0; f < 3; f++) {
       let libpangleflippedS = String.fromCharCode(105,110,100,101,120,101,115,95,121,95,49,56,0);
         libpangleflippedS += `${libpangleflippedS.length + 3}`;
      while (libpangleflippedS.length > 2) {
         libpangleflippedS += `${3 & libpangleflippedS.length}`;
         break;
      }
         libpangleflippedS += `${libpangleflippedS.length >> (Math.min(Math.abs(3), 1))}`;
      predictionwinI = "1";
   }
   let iconqqD = 5646875 >= predictionwinI.length;
   do {
       let transferO = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,50,95,56,57,0);
       let catagoryD = String.fromCharCode(97,116,111,109,115,95,48,95,54,57,0);
       let shareblackr: Array<any> = [929, 208, 601];
       let scorepopsoundE = true;
      if ((4 | shareblackr.length) >= 4) {
          let rulesV = String.fromCharCode(115,117,98,100,101,109,117,120,101,114,95,53,95,54,57,0);
          let klevinQ = 1;
         shareblackr.push(1);
         rulesV = `${klevinQ}`;
         klevinQ *= rulesV.length;
      }
      while (!transferO.endsWith(`${catagoryD.length}`)) {
         catagoryD += `${shareblackr.length - 1}`;
         break;
      }
      while (catagoryD == transferO) {
         transferO += `${catagoryD.length}`;
         break;
      }
      let malaysiaS = 6834430 >= shareblackr.length;
      do {
         shareblackr.push(2);
         if (malaysiaS) {
            break;
         }
      } while (((5 >> (Math.min(5, shareblackr.length))) > 4 || 2 > (5 >> (Math.min(3, shareblackr.length)))) && malaysiaS);
      for (let b = 0; b < 3; b++) {
         catagoryD += `${((scorepopsoundE ? 2 : 2))}`;
      }
      let ksadd = catagoryD.length >= 8767923;
      do {
         catagoryD = `${2 + transferO.length}`;
         if (ksadd) {
            break;
         }
      } while ((1 <= (3 % (Math.max(10, shareblackr.length))) && 3 <= (shareblackr.length % 3)) && ksadd);
         transferO += `${shareblackr.length}`;
         catagoryD = "3";
      for (let m = 0; m < 2; m++) {
          let arrowdownT = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,57,95,56,57,0);
          let chatroombackgroundt = String.fromCharCode(97,95,51,49,95,111,98,117,115,0);
          let basketballmatchdetailbgf: Array<any> = [663, 895, 386];
          let bottom5 = 2.0;
          let mergerG = false;
         shareblackr = [catagoryD.length];
         arrowdownT = "3";
         chatroombackgroundt = `${arrowdownT.length}`;
         basketballmatchdetailbgf.push(1 & parseInt(`${bottom5}`));
         bottom5 /= Math.max(2, 5);
         mergerG = arrowdownT == chatroombackgroundt;
      }
          let shootnogoaln: Array<any> = [124, 701];
          let flipperR = true;
         catagoryD = `${transferO.length}`;
         shootnogoaln = [(shootnogoaln.length & (flipperR ? 2 : 5))];
         flipperR = !flipperR;
         shareblackr = [catagoryD.length >> (Math.min(transferO.length, 3))];
       let formC: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,102,111,114,99,105,110,103,0),true ], [String.fromCharCode(105,95,54,53,95,97,118,102,102,116,0),false ]]);
      predictionwinI = `${progressO.size}`;
      if (iconqqD) {
         break;
      }
   } while (iconqqD && (!predictionwinI.startsWith(`${imageactionliveJ}`)));
      update__dX = imageactionliveJ < 40.36;
      progressO.set(predictionwinI, 1);
      imageactionliveJ -= (parseFloat(`${String.fromCharCode(115,0) == predictionwinI ? predictionwinI.length : parseInt(`${analyticO}`)}`));
   if (!imagesz && 3 < predictionwinI.length) {
       let unselectedu: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,101,114,95,120,95,49,52,0),String.fromCharCode(98,105,116,114,101,118,95,50,95,54,53,0)], [String.fromCharCode(115,112,97,99,101,115,95,104,95,49,57,0),String.fromCharCode(114,95,49,54,95,120,118,105,100,105,100,99,116,0)]]);
       let basketballiconq = String.fromCharCode(115,112,101,99,95,107,95,50,54,0);
         unselectedu.set(basketballiconq, basketballiconq.length % (Math.max(7, unselectedu.size)));
         basketballiconq += `${basketballiconq.length | 1}`;
         basketballiconq = `${unselectedu.size | basketballiconq.length}`;
      if (5 < (3 << (Math.min(5, Math.abs(unselectedu.size)))) && 3 < (basketballiconq.length << (Math.min(5, Math.abs(unselectedu.size))))) {
         basketballiconq = `${1 % (Math.max(5, basketballiconq.length))}`;
      }
         basketballiconq = `${unselectedu.size}`;
      while ((unselectedu.size & basketballiconq.length) < 3) {
         basketballiconq = `${unselectedu.size}`;
         break;
      }
      predictionwinI = `${((update__dX ? 2 : 4))}`;
   }
   let backgroundP = String.fromCharCode(53,121,113,103,105,0) == predictionwinI;
   do {
      predictionwinI += "3";
      if (backgroundP) {
         break;
      }
   } while (backgroundP && (3 > predictionwinI.length));
   for (let e = 0; e < 2; e++) {
      vignetteX = `${(parseInt(`${bootsplashE}`) | (whatsapp8 ? 5 : 2))}`;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let commonG = String.fromCharCode(100,95,51,50,95,99,117,109,101,0);
    let configureY = 5.0;
    let stylep = 2.0;
    let whiteanimationliveK = String.fromCharCode(102,95,50,57,95,100,117,109,109,121,0);
    let panglen = String.fromCharCode(100,97,121,95,116,95,49,55,0);
    let shrinkJ = 3.0;
    let pressureN: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,95,99,108,105,112,102,0),83], [String.fromCharCode(107,95,57,52,95,117,115,101,97,103,101,0),424]]);
    let updatess = true;
    let libfbjnii = 4;
    let overlaya = 3.0;
    let photoX = String.fromCharCode(120,95,50,56,0);
    let trophyW = String.fromCharCode(112,111,107,101,114,95,118,95,55,0);
   for (let y = 0; y < 1; y++) {
      panglen = `${commonG.length % 1}`;
   }
       let robotoe = 0.0;
       let sourcek: Array<any> = [698, 824];
       let scrollviewh = false;
      for (let k = 0; k < 1; k++) {
         sourcek.push(1 >> (Math.min(5, sourcek.length)));
      }
      let hookW = 7934047.0 >= robotoe;
      do {
         robotoe -= parseFloat(`${3 ^ parseInt(`${robotoe}`)}`);
         if (hookW) {
            break;
         }
      } while (hookW && ((sourcek.length + parseInt(`${robotoe}`)) < 1));
      let completeV = 6186153.0 <= robotoe;
      do {
         robotoe += parseFloat(`${sourcek.length}`);
         if (completeV) {
            break;
         }
      } while (completeV && (sourcek.includes(robotoe)));
         sourcek.push(parseInt(`${robotoe}`) ^ 2);
         robotoe /= Math.max(3, parseFloat(`${parseInt(`${robotoe}`)}`));
         sourcek = [parseInt(`${robotoe}`)];
      if (scrollviewh || (sourcek.length + 2) <= 3) {
          let runtimeschedulerm = String.fromCharCode(98,108,105,110,100,105,110,103,95,122,95,49,50,0);
          let penaltygoal3 = 0.0;
          let slider_: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,102,105,103,95,53,95,56,56,0),true ], [String.fromCharCode(110,95,48,95,104,105,103,104,101,114,0),false ], [String.fromCharCode(119,95,57,54,95,99,111,110,118,101,114,103,101,110,99,101,0),false ]]);
          let constantsT = String.fromCharCode(104,95,55,53,95,99,111,109,112,108,105,97,110,116,0);
         sourcek = [parseInt(`${penaltygoal3}`) << (Math.min(2, Math.abs(parseInt(`${robotoe}`))))];
         runtimeschedulerm += `${3 + slider_.size}`;
         penaltygoal3 *= slider_.size + 2;
         constantsT += `${constantsT.length}`;
      }
      for (let u = 0; u < 3; u++) {
         sourcek.push(((scrollviewh ? 5 : 1) / 2));
      }
          let libreactperfloggerjnil = String.fromCharCode(98,105,110,104,101,120,95,56,95,53,55,0);
         sourcek = [sourcek.length];
         libreactperfloggerjnil += `${libreactperfloggerjnil.length}`;
      panglen = `${parseInt(`${shrinkJ}`) % 2}`;
      updatess = 76.100 < overlaya;
   for (let i = 0; i < 2; i++) {
      libfbjnii &= 3;
   }
   if (3 == commonG.length) {
      updatess = whiteanimationliveK == String.fromCharCode(118,0);
   }
   let dangery = 9313591.0 <= overlaya;
   do {
       let middlesoundr = String.fromCharCode(116,95,52,52,95,104,97,115,120,0);
       let wifirouterX = 0.0;
       let completeP = true;
       let c_hash4 = 1.0;
         completeP = !completeP;
       let maila = 4.0;
       let libhermesW = 3.0;
      for (let l = 0; l < 2; l++) {
          let disconnectedlogoe = false;
         completeP = !middlesoundr.includes(`${disconnectedlogoe}`);
      }
       let macauQ = true;
       let xvod5 = false;
         middlesoundr += `${((macauQ ? 5 : 2) + parseInt(`${c_hash4}`))}`;
         xvod5 = maila == 6.3;
         wifirouterX *= parseInt(`${c_hash4}`) * 1;
      if (3.48 <= (1.39 + libhermesW) || libhermesW <= 1.39) {
          let n_manager_: Array<any> = [519, 572, 602];
          let redgoal8 = String.fromCharCode(102,95,53,48,95,97,99,101,108,112,0);
          let navigationo = 5.0;
          let largesound4 = String.fromCharCode(103,95,53,49,95,115,104,97,100,111,119,115,0);
          let xvod7: Array<any> = [24, 291, 577];
         libhermesW += parseInt(`${maila}`);
         n_manager_.push(parseInt(`${navigationo}`) & 2);
         redgoal8 = `${xvod7.length & parseInt(`${navigationo}`)}`;
         largesound4 = `${(String.fromCharCode(114,0) == redgoal8 ? n_manager_.length : redgoal8.length)}`;
         xvod7 = [parseInt(`${navigationo}`) | 2];
      }
          let stepQ = 4;
         c_hash4 -= middlesoundr.length;
         stepQ |= stepQ;
      let videol = macauQ ? !macauQ : macauQ;
      do {
          let register_4P = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,95,54,95,55,0);
          let chatroombackgroundj: Array<any> = [158, 72];
         macauQ = c_hash4 <= 51.98;
         register_4P += `${register_4P.length}`;
         chatroombackgroundj = [chatroombackgroundj.length << (Math.min(Math.abs(3), 4))];
         if (videol) {
            break;
         }
      } while (videol && ((3.50 * c_hash4) <= 4.4 || !macauQ));
      while (completeP) {
         completeP = libhermesW <= 29.11;
         break;
      }
      while (2.93 > (c_hash4 / (Math.max(1.11, 5)))) {
         c_hash4 += 2;
         break;
      }
      overlaya -= parseFloat(`${parseInt(`${shrinkJ}`) << (Math.min(1, Math.abs(2)))}`);
      if (dangery) {
         break;
      }
   } while ((2 <= photoX.length) && dangery);
      updatess = photoX == String.fromCharCode(75,0);
      configureY /= Math.max(3, parseFloat(`${panglen.length}`));
   for (let u = 0; u < 2; u++) {
      commonG += `${libfbjnii}`;
   }
   for (let l = 0; l < 2; l++) {
      panglen += `${3 | whiteanimationliveK.length}`;
   }
      overlaya *= parseFloat(`${parseInt(`${overlaya}`) - commonG.length}`);

        if (handleClose) handleClose();

      libfbjnii /= Math.max(4, whiteanimationliveK.length);
      shrinkJ += parseFloat(`${libfbjnii}`);
   if (4 <= (commonG.length * parseInt(`${stylep}`)) && 4.57 <= (1.75 * stylep)) {
      stylep *= 3;
   }
       let logouserZ = String.fromCharCode(107,95,55,54,95,98,101,97,116,0);
       let c_locki = 1;
      let videovarK = String.fromCharCode(112,109,51,105,106,57,48,57,49,0) == logouserZ;
      do {
         logouserZ = `${(logouserZ == String.fromCharCode(90,0) ? c_locki : logouserZ.length)}`;
         if (videovarK) {
            break;
         }
      } while ((c_locki < 2) && videovarK);
      for (let l = 0; l < 1; l++) {
          let floaterK = String.fromCharCode(99,111,112,121,97,100,100,95,101,95,57,0);
          let smallbrightnessr = String.fromCharCode(109,95,53,51,95,114,97,110,100,111,109,105,122,101,0);
         logouserZ += `${floaterK.length % (Math.max(2, 4))}`;
         floaterK += `${smallbrightnessr.length + 1}`;
         smallbrightnessr += `${(String.fromCharCode(117,0) == smallbrightnessr ? smallbrightnessr.length : smallbrightnessr.length)}`;
      }
      for (let v = 0; v < 2; v++) {
          let scheduler0: Map<any, any> = new Map([[String.fromCharCode(114,118,100,115,112,95,118,95,57,53,0),false ], [String.fromCharCode(116,119,101,97,107,115,95,114,95,49,56,0),false ], [String.fromCharCode(119,95,57,51,95,115,109,105,108,101,0),true ]]);
         logouserZ += "2";
         scheduler0 = new Map([[`${scheduler0.size}`, 1]]);
      }
      let notificationfillemptyP = 8372240 <= c_locki;
      do {
         c_locki <<= Math.min(Math.abs(1), 3);
         if (notificationfillemptyP) {
            break;
         }
      } while ((4 > (c_locki << (Math.min(logouserZ.length, 1))) || (c_locki << (Math.min(Math.abs(4), 2))) > 2) && notificationfillemptyP);
      let screenZ = String.fromCharCode(106,103,121,97,97,57,121,0) == logouserZ;
      do {
         logouserZ += `${logouserZ.length}`;
         if (screenZ) {
            break;
         }
      } while (screenZ && (4 >= (logouserZ.length ^ 5) || (c_locki ^ 5) >= 4));
       let defaultteamP: Array<any> = [String.fromCharCode(112,114,101,115,101,100,95,120,95,52,49,0), String.fromCharCode(118,95,57,95,110,111,99,104,97,110,103,101,0), String.fromCharCode(120,109,108,101,115,99,97,112,101,95,109,95,55,55,0)];
       let defaultpredictionprofile1: Array<any> = [982, 546, 255];
      overlaya -= parseFloat(`${c_locki | logouserZ.length}`);
   for (let g = 0; g < 2; g++) {
       let basketballdetailsbgb = String.fromCharCode(104,116,99,112,95,121,95,51,56,0);
       let libloggerT = String.fromCharCode(105,95,54,55,0);
       let tumbnailM: Array<any> = [913, 999, 949];
       let bingQ = String.fromCharCode(101,114,114,111,114,118,95,110,95,57,54,0);
          let match6 = 2.0;
          let greenu = String.fromCharCode(119,95,57,57,95,109,97,103,110,105,116,117,100,101,0);
          let iconuser5 = 2.0;
         bingQ += `${parseInt(`${iconuser5}`) / (Math.max(bingQ.length, 5))}`;
         match6 -= parseFloat(`${2}`);
         greenu += `${parseInt(`${match6}`) << (Math.min(greenu.length, 5))}`;
         iconuser5 /= Math.max(parseInt(`${match6}`) * greenu.length, 1);
      while (basketballdetailsbgb == String.fromCharCode(114,0)) {
         bingQ += `${bingQ.length + tumbnailM.length}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
         tumbnailM = [libloggerT.length];
      }
         libloggerT += `${libloggerT.length - 2}`;
         libloggerT += `${libloggerT.length - tumbnailM.length}`;
      if (basketballdetailsbgb.startsWith(libloggerT)) {
         libloggerT = "3";
      }
      while ((tumbnailM.length ^ 2) == 1) {
         bingQ = `${(basketballdetailsbgb == String.fromCharCode(84,0) ? tumbnailM.length : basketballdetailsbgb.length)}`;
         break;
      }
         tumbnailM = [bingQ.length + 2];
         tumbnailM.push(bingQ.length);
      let faviconP = String.fromCharCode(109,108,120,98,99,108,0) == basketballdetailsbgb;
      do {
          let neon_ = String.fromCharCode(101,100,105,116,101,100,95,54,95,52,50,0);
         basketballdetailsbgb = "3";
         neon_ = "2";
         if (faviconP) {
            break;
         }
      } while ((!basketballdetailsbgb.includes(`${libloggerT.length}`)) && faviconP);
      for (let z = 0; z < 2; z++) {
         libloggerT = `${(String.fromCharCode(107,0) == basketballdetailsbgb ? libloggerT.length : basketballdetailsbgb.length)}`;
      }
      for (let p = 0; p < 3; p++) {
          let livenodatabgimgw = 2;
          let telemetryd: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,95,115,105,108,101,110,99,101,100,0),132], [String.fromCharCode(114,95,51,52,95,115,105,103,110,97,108,0),687], [String.fromCharCode(120,95,49,48,48,95,117,105,110,116,98,101,0),727]]);
          let iconwatchnowP = String.fromCharCode(118,102,105,108,116,101,114,95,119,95,56,56,0);
         tumbnailM.push(tumbnailM.length);
         livenodatabgimgw <<= Math.min(2, Math.abs((iconwatchnowP == String.fromCharCode(55,0) ? telemetryd.size : iconwatchnowP.length)));
         telemetryd.set(`${iconwatchnowP}`, 1);
      }
      overlaya *= parseFloat(`${commonG.length | parseInt(`${stylep}`)}`);
   }
   while (!panglen.endsWith(`${updatess}`)) {
      panglen += `${(String.fromCharCode(95,0) == panglen ? panglen.length : (updatess ? 2 : 1))}`;
      break;
   }
       let containerS = String.fromCharCode(105,115,97,99,102,105,120,95,109,95,54,57,0);
      while (!containerS.endsWith(containerS)) {
          let benefitS = 5;
          let malaysiaF: Array<any> = [57, 463, 32];
          let runtimescheduler5 = 1;
          let eventm = 2;
         containerS = `${runtimescheduler5 / (Math.max(eventm, 5))}`;
         benefitS ^= 3 ^ benefitS;
         malaysiaF.push(benefitS ^ 2);
         runtimescheduler5 /= Math.max(1 + benefitS, 3);
         eventm /= Math.max(3, 5);
         break;
      }
       let preview4 = String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,111,95,54,57,0);
      if (containerS == String.fromCharCode(105,0) && preview4 != String.fromCharCode(52,0)) {
          let yellowf = true;
          let modalH = 2.0;
         containerS = `${((yellowf ? 3 : 5) / 1)}`;
         yellowf = modalH >= 77.29;
         modalH += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${modalH}`)), 1))}`);
      }
      overlaya *= parseFloat(`${libfbjnii}`);
      photoX += `${1 & parseInt(`${overlaya}`)}`;
   while ((commonG.length | 4) < 4 || 4 < (parseInt(`${configureY}`) / (Math.max(commonG.length, 6)))) {
       let filla: Array<any> = [953, 377, 379];
       let defaultroombgP = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,122,95,49,55,0);
       let videojsL: Array<any> = [334, 22];
       let iconchatsendj = String.fromCharCode(99,95,57,56,95,115,116,114,105,112,115,0);
      let confirmationr = defaultroombgP == String.fromCharCode(114,122,110,55,0);
      do {
         defaultroombgP = `${videojsL.length % (Math.max(iconchatsendj.length, 2))}`;
         if (confirmationr) {
            break;
         }
      } while (confirmationr && ((3 / (Math.max(8, defaultroombgP.length))) > 1));
         iconchatsendj += `${defaultroombgP.length}`;
      if ((videojsL.length + filla.length) > 5 || 3 > (5 + filla.length)) {
         videojsL.push(1 >> (Math.min(3, defaultroombgP.length)));
      }
          let l_playerv: Array<any> = [String.fromCharCode(115,95,52,56,95,109,115,103,0), String.fromCharCode(109,95,52,95,98,115,111,110,0), String.fromCharCode(117,115,97,103,101,95,49,95,57,52,0)];
          let imagesv = String.fromCharCode(109,101,97,115,117,114,105,110,103,95,48,95,54,57,0);
          let halfe = 4.0;
         videojsL = [videojsL.length >> (Math.min(Math.abs(1), 1))];
         l_playerv = [imagesv.length];
         imagesv = "3";
         halfe *= (String.fromCharCode(102,0) == imagesv ? l_playerv.length : imagesv.length);
      if (defaultroombgP.includes(`${filla.length}`)) {
          let subtexti = 3.0;
          let launcherc = String.fromCharCode(121,95,50,95,97,116,111,109,105,99,111,112,115,0);
         filla = [iconchatsendj.length];
         subtexti /= Math.max(4, 1);
         launcherc += `${(String.fromCharCode(116,0) == launcherc ? launcherc.length : parseInt(`${subtexti}`))}`;
      }
      while (5 <= (iconchatsendj.length >> (Math.min(4, videojsL.length))) && 1 <= (5 >> (Math.min(1, videojsL.length)))) {
          let bottom_ = String.fromCharCode(110,95,50,52,95,103,101,111,109,0);
          let iconwechatb: Array<any> = [116, 149, 983];
         videojsL.push(filla.length & defaultroombgP.length);
         bottom_ = `${bottom_.length}`;
         iconwechatb.push(iconwechatb.length | 2);
         break;
      }
      while ((iconchatsendj.length << (Math.min(Math.abs(1), 4))) == 3) {
         videojsL.push(videojsL.length >> (Math.min(Math.abs(2), 5)));
         break;
      }
      for (let v = 0; v < 1; v++) {
         videojsL.push(defaultroombgP.length - 1);
      }
          let floatingc = String.fromCharCode(97,115,105,115,95,117,95,52,56,0);
         defaultroombgP += `${1 | iconchatsendj.length}`;
         floatingc = `${floatingc.length & 3}`;
      for (let q = 0; q < 1; q++) {
         defaultroombgP += `${filla.length}`;
      }
          let typingloadingA = 0.0;
          let become6 = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,113,95,52,50,0);
         filla = [iconchatsendj.length | become6.length];
         typingloadingA *= parseFloat(`${parseInt(`${typingloadingA}`) | 1}`);
         become6 += `${parseInt(`${typingloadingA}`) % (Math.max(parseInt(`${typingloadingA}`), 1))}`;
          let matchesZ = 0;
          let encryptw: Map<any, any> = new Map([[String.fromCharCode(110,95,49,52,95,108,111,116,115,0),333], [String.fromCharCode(115,111,99,107,97,100,100,114,95,55,95,56,51,0),533]]);
         defaultroombgP = `${filla.length / (Math.max(defaultroombgP.length, 1))}`;
         matchesZ %= Math.max(2, matchesZ);
         encryptw = new Map([[`${encryptw.size}`, matchesZ]]);
      commonG += `${parseInt(`${stylep}`) % (Math.max(photoX.length, 8))}`;
      break;
   }
       let blackU = true;
       let profileactive3 = String.fromCharCode(102,95,57,52,95,109,97,114,115,104,97,108,0);
      if (!blackU) {
         blackU = (83 > (profileactive3.length | (!blackU ? profileactive3.length : 83)));
      }
      for (let i = 0; i < 3; i++) {
          let mbnativeadvancedr = 2.0;
         blackU = blackU || mbnativeadvancedr > 31.38;
      }
          let klevin9 = String.fromCharCode(114,101,115,117,109,101,100,95,122,95,53,50,0);
          let icontransferclubT: Map<any, any> = new Map([[String.fromCharCode(101,95,52,55,95,105,110,116,114,97,120,98,108,111,99,107,0),392], [String.fromCharCode(101,120,116,101,114,105,111,114,95,55,95,51,52,0),281], [String.fromCharCode(104,101,97,112,95,56,95,54,56,0),972]]);
         blackU = icontransferclubT.size <= 57 && !blackU;
         klevin9 += `${3 - klevin9.length}`;
         icontransferclubT = new Map([[klevin9, klevin9.length]]);
       let codeg = 5.0;
      if (!blackU && (codeg * 3.41) == 5.74) {
         codeg -= parseFloat(`${3}`);
      }
         blackU = profileactive3.length == 40;
      updatess = pressureN.size <= 92 && stylep <= 71.82;
      stylep /= Math.max(panglen.length, 4);

        Keyboard.dismiss();

       let topicx = String.fromCharCode(105,95,54,56,95,109,99,111,109,112,97,110,100,0);
       let plusD = 1.0;
       let telegram6 = 0.0;
         plusD -= parseFloat(`${topicx.length}`);
          let matchactivey = 1;
         telegram6 *= topicx.length;
         matchactivey ^= matchactivey / (Math.max(matchactivey, 3));
          let libavdevicet = String.fromCharCode(106,95,53,51,95,117,114,118,101,115,0);
         topicx += `${1 + topicx.length}`;
         libavdevicet = `${libavdevicet.length}`;
      if ((2.71 + telegram6) < 1.85 || 2.71 < (plusD + telegram6)) {
         plusD *= parseFloat(`${topicx.length}`);
      }
         telegram6 /= Math.max(3, parseInt(`${plusD}`));
      while (2 > topicx.length) {
         topicx = `${2 >> (Math.min(2, Math.abs(parseInt(`${telegram6}`))))}`;
         break;
      }
         topicx += `${parseInt(`${plusD}`)}`;
         telegram6 *= (String.fromCharCode(114,0) == topicx ? parseInt(`${plusD}`) : topicx.length);
         telegram6 /= Math.max(4, parseInt(`${telegram6}`) + 2);
      pressureN = new Map([[panglen, ((updatess ? 1 : 3))]]);
   while (whiteanimationliveK.endsWith(`${pressureN.size}`)) {
      whiteanimationliveK += `${parseInt(`${stylep}`)}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
       let appsk: Array<any> = [753, 138];
       let becomeP = String.fromCharCode(119,101,108,115,101,110,99,95,101,95,49,55,0);
       let hooksD: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,116,104,114,111,116,116,108,101,114,0),994], [String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,109,95,49,54,0),884]]);
         becomeP = "1";
      for (let l = 0; l < 2; l++) {
         becomeP += `${appsk.length & hooksD.size}`;
      }
      let untickm = 5489255 <= hooksD.size;
      do {
         hooksD = new Map([[`${hooksD.size}`, hooksD.size % 3]]);
         if (untickm) {
            break;
         }
      } while (((becomeP.length * 5) < 2 || 5 < (5 * becomeP.length)) && untickm);
      while ((becomeP.length + appsk.length) == 3) {
          let vignetteu = String.fromCharCode(99,114,111,115,115,98,97,114,95,109,95,51,49,0);
         appsk = [becomeP.length + appsk.length];
         vignetteu = `${(String.fromCharCode(55,0) == vignetteu ? vignetteu.length : vignetteu.length)}`;
         break;
      }
         becomeP = `${3 + becomeP.length}`;
          let mbsplashJ = 2.0;
          let iconsaveimageL = String.fromCharCode(99,95,53,54,95,115,101,116,0);
         appsk = [appsk.length + 3];
         mbsplashJ /= Math.max((parseFloat(`${String.fromCharCode(54,0) == iconsaveimageL ? iconsaveimageL.length : parseInt(`${mbsplashJ}`)}`)), 1);
      for (let d = 0; d < 1; d++) {
         appsk.push(hooksD.size % (Math.max(1, 4)));
      }
         hooksD = new Map([[`${hooksD.size}`, hooksD.size - 1]]);
       let libimagepipelineN = 4.0;
       let calendarc = 1.0;
      photoX = `${panglen.length}`;
   }
       let gradle5 = 1;
       let viewer7 = String.fromCharCode(114,95,55,57,95,115,104,117,116,116,101,114,0);
       let collection4 = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,115,95,53,56,0);
      for (let y = 0; y < 3; y++) {
          let grayO = String.fromCharCode(98,97,99,107,116,114,97,99,101,95,120,95,51,0);
          let smallsoundB: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,114,116,101,100,95,113,95,57,52,0),121], [String.fromCharCode(115,95,52,51,95,100,101,115,101,114,105,97,108,105,122,101,100,0),813], [String.fromCharCode(108,97,112,108,97,99,101,95,49,95,57,57,0),320]]);
         collection4 = `${smallsoundB.size}`;
         grayO = `${grayO.length << (Math.min(Math.abs(2), 5))}`;
         smallsoundB.set(grayO, 3);
      }
      if (4 < (viewer7.length % 4)) {
         viewer7 += `${collection4.length + viewer7.length}`;
      }
       let desco = false;
       let backwardC = false;
         gradle5 |= (String.fromCharCode(71,0) == viewer7 ? gradle5 : viewer7.length);
      for (let v = 0; v < 2; v++) {
          let dropdownm = 0.0;
          let searchm = false;
          let iconedit9 = 0;
         desco = 1 < (dropdownm * iconedit9);
         dropdownm -= (parseFloat(`${2 - (searchm ? 5 : 2)}`));
      }
      let libjsinspectork = 7400221 <= gradle5;
      do {
         gradle5 -= 3 ^ gradle5;
         if (libjsinspectork) {
            break;
         }
      } while ((3 < (3 ^ viewer7.length)) && libjsinspectork);
       let greenw = 3;
       let bellH = 0;
         greenw -= 3;
         bellH |= 1;
      photoX += `${gradle5 ^ parseInt(`${stylep}`)}`;
      libfbjnii /= Math.max(5, photoX.length);
      panglen = `${parseInt(`${overlaya}`) - parseInt(`${shrinkJ}`)}`;
      libfbjnii &= commonG.length << (Math.min(Math.abs(3), 1));
       let playercommonE: Array<any> = [283, 619];
       let mbridge4: Map<any, any> = new Map([[String.fromCharCode(117,95,54,51,95,100,101,99,111,100,101,0),689], [String.fromCharCode(111,95,53,95,109,100,97,116,101,0),812], [String.fromCharCode(105,95,53,55,95,114,101,115,112,111,110,100,115,0),831]]);
       let imagenomoredatai = String.fromCharCode(102,111,117,114,105,101,114,95,120,95,49,0);
      for (let b = 0; b < 3; b++) {
          let closeQ = 0;
          let indicatorB = false;
          let baiduC = 2.0;
          let downloader3 = 3.0;
         mbridge4.set(`${playercommonE.length}`, 1 >> (Math.min(1, Math.abs(mbridge4.size))));
         closeQ >>= Math.min(5, Math.abs(3 - parseInt(`${baiduC}`)));
         indicatorB = downloader3 < 40.30;
         baiduC *= parseInt(`${downloader3}`);
      }
         playercommonE = [mbridge4.size >> (Math.min(Math.abs(2), 2))];
         playercommonE.push((String.fromCharCode(72,0) == imagenomoredatai ? imagenomoredatai.length : mbridge4.size));
         mbridge4.set(`${playercommonE.length}`, playercommonE.length << (Math.min(Math.abs(3), 5)));
         playercommonE.push(mbridge4.size | 2);
          let listw = 2;
          let arrowupn: Array<any> = [52, 509];
          let ksadk = String.fromCharCode(109,95,52,57,95,109,101,115,97,103,101,0);
         playercommonE = [ksadk.length];
         listw |= listw;
         arrowupn.push(2);
         ksadk += `${arrowupn.length}`;
          let whitesmalltickr = 1;
          let vignettep: Array<any> = [462, 39, 847];
          let directJ: Map<any, any> = new Map([[String.fromCharCode(97,118,111,105,100,95,110,95,53,55,0),872], [String.fromCharCode(105,95,52,50,95,105,100,97,116,0),657]]);
         mbridge4 = new Map([[`${vignettep.length}`, 2]]);
         whitesmalltickr -= directJ.size % (Math.max(1, 3));
         vignettep.push(1);
         directJ.set(`${whitesmalltickr}`, directJ.size);
         imagenomoredatai += `${1 >> (Math.min(2, playercommonE.length))}`;
       let gradlewx = 0;
       let a_imageV = 0;
      libfbjnii |= pressureN.size;
   while (3 <= (1 / (Math.max(6, pressureN.size))) && 1 <= (libfbjnii / (Math.max(8, pressureN.size)))) {
      libfbjnii -= (parseInt(`${shrinkJ}`) << (Math.min(2, Math.abs((updatess ? 1 : 1)))));
      break;
   }
   if (Array.from(pressureN.keys()).includes(`${stylep}`)) {
      pressureN.set(`${updatess}`, (whiteanimationliveK == String.fromCharCode(110,0) ? whiteanimationliveK.length : (updatess ? 1 : 3)));
   }
   let connectionF = 9361484.0 <= stylep;
   do {
       let darkj = true;
          let reddownarrowJ: Map<any, any> = new Map([[String.fromCharCode(119,95,50,54,95,99,100,99,105,0),String.fromCharCode(109,117,114,109,117,114,95,120,95,51,49,0)], [String.fromCharCode(122,95,52,55,95,119,122,97,101,115,0),String.fromCharCode(109,95,57,55,95,112,105,99,116,111,114,0)]]);
          let bannerv = 0.0;
         darkj = null != reddownarrowJ.get(`${bannerv}`);
         darkj = !darkj;
      let select1 = darkj ? !darkj : darkj;
      do {
          let saveY: Array<any> = [129, 597];
         darkj = (91 >= ((!darkj ? saveY.length : 91) + saveY.length));
         if (select1) {
            break;
         }
      } while ((!darkj && darkj) && select1);
      stylep /= Math.max(photoX.length, 2);
      if (connectionF) {
         break;
      }
   } while ((whiteanimationliveK.length >= parseInt(`${stylep}`)) && connectionF);
        resetForm();
    }

    const onSubmitForm = async () => {
       let positionfield2 = 4.0;
    let iconscheduleK = 1;
    let templateprocessorx = 2.0;
    let bgvipxvod3: Array<any> = [488, 123, 383];
    let stations9 = true;
    let qaagg = String.fromCharCode(105,110,115,116,95,104,95,50,57,0);
    let closeE = true;
    let rewardL = 4.0;
    let hookm = 1;
       let membershipM = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,98,95,52,57,0);
       let greytickn = 3;
       let const_bE = String.fromCharCode(106,95,49,54,95,115,99,114,111,108,108,101,100,0);
      let nodeJ = greytickn <= 5592422;
      do {
         greytickn -= membershipM.length * 1;
         if (nodeJ) {
            break;
         }
      } while (nodeJ && ((const_bE.length | greytickn) < 2));
      let constantsg = greytickn >= 6470835;
      do {
          let graphicsf = 5.0;
          let chatbotphotoB = String.fromCharCode(103,101,116,105,110,116,95,103,95,52,49,0);
          let runtimeschedulerg = 0.0;
         greytickn *= membershipM.length;
         graphicsf += parseFloat(`${1}`);
         chatbotphotoB = `${parseInt(`${runtimeschedulerg}`)}`;
         runtimeschedulerg += parseInt(`${runtimeschedulerg}`) & chatbotphotoB.length;
         if (constantsg) {
            break;
         }
      } while (((2 / (Math.max(3, greytickn))) >= 2) && constantsg);
      let gpayk = 9181064 <= const_bE.length;
      do {
         const_bE = `${1 >> (Math.min(4, membershipM.length))}`;
         if (gpayk) {
            break;
         }
      } while (gpayk && (5 > (greytickn ^ 4) || (4 ^ greytickn) > 4));
          let matchu = String.fromCharCode(99,116,114,95,109,95,56,57,0);
          let eacta = 4;
          let jnewinterstitialp = 2.0;
         membershipM += `${const_bE.length % (Math.max(3, 5))}`;
         matchu += `${(String.fromCharCode(95,0) == matchu ? matchu.length : eacta)}`;
         eacta <<= Math.min(Math.abs(eacta), 1);
         jnewinterstitialp /= Math.max(1, 3);
      while (5 <= greytickn) {
         greytickn >>= Math.min(Math.abs(membershipM.length + 2), 4);
         break;
      }
      for (let g = 0; g < 1; g++) {
         const_bE = `${(const_bE == String.fromCharCode(53,0) ? const_bE.length : greytickn)}`;
      }
       let applicationq = false;
       let downX = String.fromCharCode(109,97,112,102,105,108,101,95,111,95,57,51,0);
      let rewind5 = greytickn <= 8280712;
      do {
         greytickn &= 3 >> (Math.min(1, downX.length));
         if (rewind5) {
            break;
         }
      } while (rewind5 && ((greytickn + downX.length) == 5));
      iconscheduleK *= 3 << (Math.min(1, bgvipxvod3.length));

        if (usernameErrMsg !== null) return;

   let brightnessM = positionfield2 <= 5489682.0;
   do {
       let imagesN = String.fromCharCode(106,95,54,49,95,115,99,97,108,97,114,109,117,108,116,0);
       let iconqqH = String.fromCharCode(104,95,49,52,95,100,105,114,101,99,116,120,0);
       let whatsapp_ = 3.0;
       let acceptedC = String.fromCharCode(115,111,114,116,105,110,103,95,111,95,51,50,0);
       let baiduads3 = 1.0;
      for (let z = 0; z < 3; z++) {
         imagesN = `${parseInt(`${whatsapp_}`) << (Math.min(2, Math.abs(1)))}`;
      }
      while (!iconqqH.startsWith(`${whatsapp_}`)) {
          let windD: Map<any, any> = new Map([[String.fromCharCode(114,105,98,98,111,110,95,102,95,56,56,0),true ], [String.fromCharCode(117,95,55,51,95,116,105,109,101,115,116,97,109,112,0),false ]]);
          let soundJ = String.fromCharCode(122,95,57,56,95,99,111,117,110,116,101,114,115,0);
          let componentt = String.fromCharCode(111,110,116,114,111,108,115,95,115,95,54,49,0);
          let turnx = false;
          let foreground2 = true;
         whatsapp_ /= Math.max(parseFloat(`${1}`), 3);
         windD = new Map([[`${turnx}`, (componentt == String.fromCharCode(85,0) ? (turnx ? 4 : 1) : componentt.length)]]);
         soundJ += "3";
         foreground2 = !turnx;
         break;
      }
         acceptedC = "3";
      let sourceS = whatsapp_ >= 8967218.0;
      do {
          let notificationgrayA = 2.0;
          let catalog0 = String.fromCharCode(115,101,97,100,95,57,95,52,0);
         whatsapp_ += parseFloat(`${3 - parseInt(`${notificationgrayA}`)}`);
         notificationgrayA *= parseFloat(`${1 << (Math.min(4, catalog0.length))}`);
         catalog0 = `${(String.fromCharCode(104,0) == catalog0 ? catalog0.length : catalog0.length)}`;
         if (sourceS) {
            break;
         }
      } while (((2 * baiduads3) >= 3.59) && sourceS);
      while ((2 * imagesN.length) > 5 && 3 > (imagesN.length ^ 2)) {
          let iconsettingE = String.fromCharCode(109,99,100,99,95,113,95,51,54,0);
          let codegenD = String.fromCharCode(112,95,51,95,101,99,107,101,121,0);
         imagesN = `${iconsettingE.length % 3}`;
         iconsettingE = `${codegenD.length % (Math.max(3, 6))}`;
         codegenD += `${codegenD.length}`;
         break;
      }
      for (let q = 0; q < 3; q++) {
         baiduads3 += parseFloat(`${iconqqH.length >> (Math.min(4, Math.abs(parseInt(`${whatsapp_}`))))}`);
      }
      let dplusq = acceptedC.length <= 8813624;
      do {
         acceptedC = `${parseInt(`${whatsapp_}`)}`;
         if (dplusq) {
            break;
         }
      } while ((5.36 == (2.44 + baiduads3)) && dplusq);
          let interstitialG = 0;
          let static_w8t = String.fromCharCode(103,95,50,49,95,115,117,99,99,101,115,115,99,98,0);
         iconqqH += `${interstitialG / 1}`;
         interstitialG >>= Math.min(5, Math.abs(3 >> (Math.min(2, static_w8t.length))));
         static_w8t += `${static_w8t.length}`;
         baiduads3 -= parseFloat(`${2}`);
          let gpay_ = 0.0;
          let whitevideolive3 = String.fromCharCode(102,97,117,108,116,95,48,95,56,0);
          let malaysia_: Array<any> = [471, 539, 682];
         baiduads3 -= parseFloat(`${whitevideolive3.length - 2}`);
         gpay_ *= parseFloat(`${parseInt(`${gpay_}`)}`);
         whitevideolive3 += `${parseInt(`${gpay_}`)}`;
         malaysia_ = [parseInt(`${gpay_}`) << (Math.min(3, Math.abs(1)))];
          let productA = String.fromCharCode(115,109,97,108,108,101,114,95,101,95,57,55,0);
          let defaultroombgW = 4.0;
         acceptedC += `${productA.length}`;
         productA = "1";
         defaultroombgW -= parseFloat(`${parseInt(`${defaultroombgW}`) * parseInt(`${defaultroombgW}`)}`);
         acceptedC = "1";
      if (5 > imagesN.length) {
         whatsapp_ += (parseFloat(`${String.fromCharCode(84,0) == imagesN ? parseInt(`${whatsapp_}`) : imagesN.length}`));
      }
          let iconmegaphoneL = 0.0;
          let theme_: Array<any> = [735, 120];
         imagesN = `${(iconqqH == String.fromCharCode(49,0) ? iconqqH.length : parseInt(`${iconmegaphoneL}`))}`;
         iconmegaphoneL *= parseFloat(`${theme_.length >> (Math.min(Math.abs(1), 1))}`);
         theme_.push(theme_.length);
       let snewarchdefaultsY = String.fromCharCode(97,99,102,105,108,116,101,114,95,108,95,57,49,0);
      positionfield2 += parseFloat(`${2 | iconscheduleK}`);
      if (brightnessM) {
         break;
      }
   } while ((positionfield2 <= 3.40) && brightnessM);

        if (isSubmitting) return;

   if (!qaagg.endsWith(`${iconscheduleK}`)) {
      qaagg = `${bgvipxvod3.length}`;
   }
        setSubmitting(true);

      positionfield2 *= (parseFloat(`${(closeE ? 4 : 2) % (Math.max((stations9 ? 4 : 2), 9))}`));

        try {

       let libswresampleU = false;
         libswresampleU = !libswresampleU;
         libswresampleU = (libswresampleU ? libswresampleU : libswresampleU);
         libswresampleU = (!libswresampleU ? !libswresampleU : libswresampleU);
      iconscheduleK |= bgvipxvod3.length % 2;
            await wawaEvent.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      templateprocessorx += (parseFloat(`${(stations9 ? 3 : 2) % (Math.max(parseInt(`${templateprocessorx}`), 1))}`));
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      bgvipxvod3.push(((stations9 ? 1 : 3) / (Math.max(3, parseInt(`${positionfield2}`)))));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

      iconscheduleK -= 3;
            return;
        }


        dispatch(updateUsernameState(username));

   for (let l = 0; l < 1; l++) {
      stations9 = (43 > (qaagg.length | (closeE ? qaagg.length : 43)));
   }
        dispatch(changeScreenAction("修改成功"));

       let iconarrowrightblack9 = 3;
       let p_lockj: Array<any> = [634, 649, 287];
          let leakcheckerF = String.fromCharCode(98,114,97,110,99,104,95,110,95,52,56,0);
         iconarrowrightblack9 <<= Math.min(Math.abs(iconarrowrightblack9 & 3), 5);
         leakcheckerF += `${(leakcheckerF == String.fromCharCode(112,0) ? leakcheckerF.length : leakcheckerF.length)}`;
         iconarrowrightblack9 &= iconarrowrightblack9;
       let controlH = 1.0;
      while (5 == (2 * p_lockj.length) && (iconarrowrightblack9 * 2) == 2) {
          let iconarrowleftA = 4.0;
         iconarrowrightblack9 %= Math.max(parseInt(`${iconarrowleftA}`), 1);
         break;
      }
          let turndownM = String.fromCharCode(116,105,109,101,118,97,108,95,50,95,57,50,0);
          let notificationgrayQ = 0.0;
         iconarrowrightblack9 /= Math.max(parseInt(`${controlH}`) | turndownM.length, 1);
         turndownM += "1";
         notificationgrayQ += parseInt(`${notificationgrayQ}`) * 1;
         iconarrowrightblack9 *= 2 ^ p_lockj.length;
      bgvipxvod3 = [((stations9 ? 5 : 4) + parseInt(`${positionfield2}`))];

        if (onSubmitSuccess) onSubmitSuccess(username);

   let result7 = qaagg == String.fromCharCode(106,107,122,108,102,122,50,101,116,0);
   do {
      qaagg += `${((closeE ? 2 : 3))}`;
      if (result7) {
         break;
      }
   } while ((!qaagg.startsWith(`${closeE}`)) && result7);

        Keyboard.dismiss();

   for (let i = 0; i < 3; i++) {
      qaagg = `${parseInt(`${positionfield2}`) % 1}`;
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let b_imaget = 2.0;
       let iconlogouts = false;
       let handler0 = 1.0;
         iconlogouts = handler0 == 5.20 || !iconlogouts;
          let loginsuccessA = 4.0;
         handler0 -= parseInt(`${b_imaget}`) ^ 1;
         loginsuccessA += 2;
      if (5.77 > (3.23 / (Math.max(8, handler0))) || iconlogouts) {
         iconlogouts = iconlogouts && 79.92 < b_imaget;
      }
      for (let t = 0; t < 1; t++) {
          let rewardy = String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,114,95,52,56,0);
          let benefitF = 4;
         handler0 += 1 | parseInt(`${handler0}`);
         rewardy += `${benefitF}`;
         benefitF *= 2;
      }
      for (let j = 0; j < 1; j++) {
         iconlogouts = !iconlogouts;
      }
         iconlogouts = !iconlogouts;
         iconlogouts = !iconlogouts;
         iconlogouts = handler0 >= 21.60;
          let mbridgei: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,100,118,98,115,117,98,0),false ], [String.fromCharCode(112,95,50,52,95,105,110,99,114,98,108,111,98,0),true ]]);
          let homeloadingg = 4;
         iconlogouts = homeloadingg == mbridgei.size;
      rewardL /= Math.max(3, 5);

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
                                source={require("@static/images/invite/volumeOrangeclock.png")}
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