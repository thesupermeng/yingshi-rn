import React, {
  useState,
  useRef,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import SystemSetting from "react-native-system-setting";
import BrightnessVolumeSlider from "./yys_iconcurrentmatch";
import { debounce } from "lodash";
type yysIconarrowrightorangeStation = {
  vodType: string;
  children?: ReactNode;
  enabled?: boolean;
  onSkipForward: () => any;
  onSkipBackwards: () => any;
  onSingleTap: (forceClose: boolean) => any;
  currentTime: number;
  totalDuration: number;
  onSeek: (x: number) => any;
  disableControlsExceptTap?: boolean;
};

type yysVipsport = {
  name: "progress" | "brightness" | "countdownIconplayActive" | "none";
  value: number;
};
export default ({
  vodType,
  children,
  enabled = true,
  onSkipBackwards,
  onSkipForward,
  onSingleTap,
  currentTime = 0,
  totalDuration = 0.1,
  onSeek,
  disableControlsExceptTap = false,
}: yysIconarrowrightorangeStation) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<yysVipsport>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let predictionwinD: Map<any, any> = new Map([[String.fromCharCode(121,95,56,56,95,114,118,100,115,112,0),true ], [String.fromCharCode(120,95,57,50,95,104,111,117,114,0),false ], [String.fromCharCode(118,95,50,49,95,115,116,111,119,0),false ]]);
    let benefit6: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,101,95,110,95,53,53,0),929], [String.fromCharCode(103,95,54,53,95,118,105,115,105,98,105,108,105,116,121,0),815]]);
    let carouselq = true;
    let disconnectedlogoD: Array<any> = [308, 379, 746];
    let giflivestreamingB = String.fromCharCode(115,100,101,115,95,54,95,54,49,0);
    let refresho = 5.0;
    let whistleorange9 = String.fromCharCode(99,104,114,111,109,105,117,109,95,112,95,52,55,0);
    let iconcurrentmatch7 = String.fromCharCode(100,105,115,112,97,116,99,104,95,98,95,56,48,0);
    let redcirclebgn = 5.0;
    let reactnavigation1 = String.fromCharCode(107,95,51,53,95,97,108,103,111,114,0);
    let backr = 0;
    let iconcloseg: Array<any> = [543, 581, 968];
    let iconsettingF = String.fromCharCode(111,112,116,105,109,117,109,95,122,95,52,48,0);
    let eighteenB = 4.0;
   for (let i = 0; i < 3; i++) {
      whistleorange9 = "3";
   }
   while (2 < (predictionwinD.size & 1)) {
       let iconclosewhitebgD = String.fromCharCode(110,111,98,111,100,121,95,112,95,51,56,0);
       let memberw = 1.0;
          let release_a4E = 2;
          let kickG = false;
         memberw /= Math.max(iconclosewhitebgD.length, 3);
         release_a4E ^= release_a4E;
         kickG = !kickG;
         iconclosewhitebgD = `${parseInt(`${memberw}`) / 1}`;
      predictionwinD = new Map([[`${benefit6.size}`, 2 & iconclosewhitebgD.length]]);
      break;
   }
       let spinners = true;
       let libjsinspectori = 3.0;
      while (3.68 >= (libjsinspectori / 5.53)) {
          let root1 = String.fromCharCode(119,101,98,109,101,110,99,95,98,95,51,55,0);
          let livenodatabgimgR = false;
         spinners = !root1.endsWith(`${spinners}`);
         root1 += `${((livenodatabgimgR ? 3 : 3))}`;
         break;
      }
       let button8 = true;
       let reactnativeratingsf = false;
         libjsinspectori -= (parseFloat(`${parseInt(`${libjsinspectori}`) >> (Math.min(4, Math.abs((button8 ? 2 : 2))))}`));
      while (5.2 >= libjsinspectori) {
         reactnativeratingsf = !spinners;
         break;
      }
         spinners = button8 || libjsinspectori == 59.49;
          let libavformatM: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,115,97,109,112,108,101,114,0),771], [String.fromCharCode(119,95,56,53,95,97,110,99,104,111,114,115,0),875]]);
         libjsinspectori *= (parseFloat(`${2 + (button8 ? 1 : 1)}`));
         libavformatM = new Map([[`${libavformatM.size}`, 2]]);
      giflivestreamingB = "1";
      iconcurrentmatch7 += "3";
       let hearte: Array<any> = [954, 348, 272];
       let iconrefreshy = String.fromCharCode(104,95,52,54,95,105,109,109,117,116,97,98,108,101,0);
       let navigationU = false;
      if (!iconrefreshy.startsWith(`${navigationU}`)) {
          let video6 = String.fromCharCode(99,95,55,52,95,112,97,105,100,0);
         iconrefreshy += `${iconrefreshy.length / (Math.max(2, 4))}`;
         video6 = "1";
      }
       let libmapbufferjniN = String.fromCharCode(116,97,107,101,111,117,116,95,54,95,55,48,0);
       let runtimeo = String.fromCharCode(98,108,111,98,115,95,120,95,57,50,0);
          let combinedT = false;
          let predictionarrowq = 1;
          let iconwatchnowz = String.fromCharCode(102,95,56,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0);
         libmapbufferjniN = "3";
         combinedT = !combinedT;
         predictionarrowq |= 2 << (Math.min(3, iconwatchnowz.length));
         iconwatchnowz = `${predictionarrowq - 3}`;
       let nendK = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,101,95,53,49,0);
       let libfile5 = String.fromCharCode(112,95,52,53,95,113,115,118,115,99,97,108,101,0);
      let time_u3y = 6210036 >= iconrefreshy.length;
      do {
         iconrefreshy += "3";
         if (time_u3y) {
            break;
         }
      } while (time_u3y && (nendK.startsWith(iconrefreshy)));
      for (let q = 0; q < 1; q++) {
         libfile5 += "2";
      }
         nendK = `${hearte.length + 1}`;
      if (4 == libfile5.length) {
         libfile5 = `${runtimeo.length | 3}`;
      }
         navigationU = iconrefreshy.length <= 52 && !navigationU;
      whistleorange9 = "2";
       let libreactg = String.fromCharCode(107,95,56,54,95,99,111,109,112,111,115,101,0);
       let lightG = 4.0;
       let basketballawayteam2 = 2.0;
      let promotionw = libreactg.length >= 5530707;
      do {
          let basketballtrophye = 1.0;
          let stationsD = 2.0;
          let stylesQ: Array<any> = [String.fromCharCode(103,95,51,52,95,121,117,118,112,108,0), String.fromCharCode(110,105,101,108,115,97,100,100,95,99,95,51,54,0), String.fromCharCode(97,108,105,103,110,101,114,95,118,95,49,51,0)];
          let statisticsj: Array<any> = [String.fromCharCode(99,95,51,48,95,114,101,97,109,0), String.fromCharCode(97,99,99,101,115,115,111,114,95,98,95,57,56,0), String.fromCharCode(113,95,54,51,95,114,97,105,116,0)];
         libreactg = `${parseInt(`${stationsD}`)}`;
         basketballtrophye -= 2 ^ stylesQ.length;
         stylesQ.push(statisticsj.length);
         statisticsj = [stylesQ.length];
         if (promotionw) {
            break;
         }
      } while (promotionw && (libreactg.length == 3));
          let rewardt = String.fromCharCode(102,95,57,55,95,115,105,103,115,0);
         basketballawayteam2 *= parseFloat(`${rewardt.length}`);
         lightG /= Math.max(parseInt(`${basketballawayteam2}`), 4);
      let yellowredcard0 = 8307210.0 <= lightG;
      do {
         lightG *= parseInt(`${lightG}`) - parseInt(`${basketballawayteam2}`);
         if (yellowredcard0) {
            break;
         }
      } while ((2.87 == (lightG - 3.8) && (basketballawayteam2 - lightG) == 3.8) && yellowredcard0);
         basketballawayteam2 += parseFloat(`${libreactg.length}`);
         libreactg += `${parseInt(`${basketballawayteam2}`)}`;
      let referrer2 = libreactg == String.fromCharCode(52,50,103,121,101,112,114,51,110,122,0);
      do {
          let u_lockc = 1.0;
          let mbjscommony = 0.0;
          let yellow3 = String.fromCharCode(122,95,54,51,95,112,114,111,112,101,114,116,121,0);
         libreactg = `${2 ^ yellow3.length}`;
         u_lockc *= 1;
         mbjscommony -= parseInt(`${u_lockc}`);
         yellow3 += `${1 >> (Math.min(Math.abs(parseInt(`${u_lockc}`)), 5))}`;
         if (referrer2) {
            break;
         }
      } while (referrer2 && ((libreactg.length * lightG) >= 1.35 && (parseInt(`${lightG}`) * 1) >= 4));
         basketballawayteam2 -= parseFloat(`${2}`);
         lightG /= Math.max(5, parseInt(`${basketballawayteam2}`));
      backr *= backr | reactnavigation1.length;
   let twitterM = 5817429.0 <= refresho;
   do {
       let usernamed: Array<any> = [3, 498, 249];
       let images3 = 5.0;
          let profileframeb = 5.0;
          let editW: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,108,95,49,54,0),774], [String.fromCharCode(104,95,49,52,95,105,110,118,102,0),171]]);
         images3 += parseInt(`${images3}`);
         profileframeb *= parseInt(`${profileframeb}`);
         editW.set(`${profileframeb}`, 3);
      if (!usernamed.includes(images3)) {
         usernamed = [parseInt(`${images3}`) - usernamed.length];
      }
      if ((usernamed.length * parseInt(`${images3}`)) < 5 && (usernamed.length >> (Math.min(Math.abs(5), 3))) < 2) {
          let libapminsighta1 = String.fromCharCode(101,97,105,100,99,116,95,108,95,49,55,0);
          let temph: Array<any> = [416, 555, 975];
          let dependencies7 = 5.0;
          let colorsA: Map<any, any> = new Map([[String.fromCharCode(106,95,49,49,95,115,99,116,101,0),String.fromCharCode(99,95,54,52,95,112,105,120,98,108,111,99,107,100,115,112,0)], [String.fromCharCode(115,116,101,114,101,111,95,55,95,51,54,0),String.fromCharCode(117,95,55,53,95,111,100,105,110,103,0)]]);
          let listj: Array<any> = [String.fromCharCode(110,95,50,95,97,115,110,0), String.fromCharCode(109,98,118,115,95,102,95,57,55,0)];
         images3 /= Math.max(4, parseInt(`${dependencies7}`) ^ 2);
         libapminsighta1 = `${colorsA.size - listj.length}`;
         temph.push(colorsA.size >> (Math.min(Math.abs(1), 3)));
         dependencies7 += parseFloat(`${listj.length}`);
      }
         images3 -= usernamed.length;
      while (usernamed.includes(images3)) {
          let iconviewergifb = String.fromCharCode(104,95,49,50,95,100,97,116,101,116,105,109,101,0);
          let untickT: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,0),174], [String.fromCharCode(99,111,109,112,111,115,101,105,95,109,95,52,54,0),157]]);
          let othern = String.fromCharCode(114,95,55,49,95,99,101,108,108,117,108,97,114,0);
          let iconorientationh = 2.0;
         usernamed = [othern.length << (Math.min(Math.abs(3), 2))];
         iconviewergifb = `${3 + untickT.size}`;
         untickT = new Map([[`${untickT.size}`, 3]]);
         othern += `${(iconviewergifb == String.fromCharCode(48,0) ? untickT.size : iconviewergifb.length)}`;
         iconorientationh /= Math.max(parseFloat(`${2}`), 1);
         break;
      }
      let libnmsc = 9845156.0 >= images3;
      do {
          let trophy2: Array<any> = [548, 739, 114];
          let rocketN = 4.0;
          let bodanh = String.fromCharCode(100,105,103,105,116,95,111,95,54,0);
          let scheduleU = String.fromCharCode(99,111,109,98,105,110,101,115,95,52,95,55,57,0);
          let watchG = 1.0;
         images3 += 2 ^ scheduleU.length;
         trophy2 = [3];
         rocketN *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${rocketN}`)), 1))}`);
         bodanh = "2";
         scheduleU = `${(bodanh == String.fromCharCode(86,0) ? parseInt(`${watchG}`) : bodanh.length)}`;
         watchG /= Math.max(4, parseFloat(`${parseInt(`${rocketN}`)}`));
         if (libnmsc) {
            break;
         }
      } while (libnmsc && (3 > (usernamed.length % (Math.max(1, 3)))));
      refresho *= parseFloat(`${giflivestreamingB.length | 2}`);
      if (twitterM) {
         break;
      }
   } while ((refresho == 1.46) && twitterM);
   let unselectedF = disconnectedlogoD.length <= 7869783;
   do {
      disconnectedlogoD.push(2);
      if (unselectedF) {
         break;
      }
   } while ((disconnectedlogoD.length < backr) && unselectedF);
   for (let t = 0; t < 3; t++) {
      benefit6.set(`${carouselq}`, ((carouselq ? 1 : 2) & 1));
   }

    setShowSlider(true);

   let ewardedj = backr >= 8311367;
   do {
      backr <<= Math.min(Math.abs(2 + predictionwinD.size), 1);
      if (ewardedj) {
         break;
      }
   } while (ewardedj && ((benefit6.size % 4) < 3 && 4 < (backr % (Math.max(4, 10)))));
      backr /= Math.max(iconcurrentmatch7.length & benefit6.size, 3);
       let backiconmaskp: Array<any> = [139, 724, 456];
       let placeholderc = 3.0;
       let video0 = String.fromCharCode(118,105,115,105,98,108,105,116,121,95,116,95,49,56,0);
      let reactnativejs6 = placeholderc >= 8031745.0;
      do {
          let shielddonej = 1.0;
          let countdownx = 2;
          let disconnectedX = 5.0;
          let statistics4: Array<any> = [453, 706];
          let iconlogout2: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,48,95,115,117,99,104,0),true ], [String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,116,95,57,0),true ], [String.fromCharCode(99,101,108,108,97,117,116,111,95,109,95,52,57,0),true ]]);
         placeholderc *= parseFloat(`${2 ^ parseInt(`${shielddonej}`)}`);
         shielddonej += parseFloat(`${countdownx}`);
         countdownx >>= Math.min(3, Math.abs(parseInt(`${disconnectedX}`) - 3));
         disconnectedX *= parseFloat(`${2 + parseInt(`${disconnectedX}`)}`);
         statistics4 = [1 ^ iconlogout2.size];
         iconlogout2 = new Map([[`${iconlogout2.size}`, iconlogout2.size]]);
         if (reactnativejs6) {
            break;
         }
      } while (reactnativejs6 && ((placeholderc - parseFloat(`${backiconmaskp.length}`)) < 2.37));
         placeholderc *= parseFloat(`${parseInt(`${placeholderc}`)}`);
         backiconmaskp = [backiconmaskp.length ^ 2];
         placeholderc *= parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${placeholderc}`))))}`);
      if (5.63 > placeholderc) {
         placeholderc -= parseFloat(`${parseInt(`${placeholderc}`) / 1}`);
      }
       let combineu = 3;
         placeholderc -= parseFloat(`${3}`);
       let backiconu = 5.0;
      while (4.14 < (backiconu * parseFloat(`${combineu}`)) && 1.90 < (4.14 * backiconu)) {
         backiconu /= Math.max(5, parseFloat(`${video0.length}`));
         break;
      }
      benefit6 = new Map([[`${disconnectedlogoD.length}`, giflivestreamingB.length - 3]]);
   for (let i = 0; i < 2; i++) {
       let predictionloss2 = true;
       let profileframeS = String.fromCharCode(100,117,112,108,101,120,95,106,95,56,50,0);
       let watchnowbgo = 4.0;
       let heart_ = String.fromCharCode(112,114,111,100,115,95,48,95,54,0);
       let iconpointscoreg = 3.0;
         profileframeS = `${parseInt(`${iconpointscoreg}`)}`;
      for (let z = 0; z < 1; z++) {
         predictionloss2 = profileframeS.endsWith(`${predictionloss2}`);
      }
         predictionloss2 = (31 >= (heart_.length * (predictionloss2 ? 31 : heart_.length)));
          let streamingl: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,112,114,101,100,105,99,116,105,111,110,115,0),398], [String.fromCharCode(118,95,53,49,95,109,98,105,110,116,114,97,0),291], [String.fromCharCode(112,105,110,95,49,95,50,57,0),505]]);
          let owngoalK = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,115,95,53,50,0);
          let nativeH = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,54,95,52,0);
         predictionloss2 = (66 > ((!predictionloss2 ? profileframeS.length : 66) ^ profileframeS.length));
         streamingl = new Map([[`${streamingl.size}`, streamingl.size]]);
         owngoalK = `${streamingl.size - owngoalK.length}`;
         nativeH = `${owngoalK.length + 3}`;
      let imagenetworkerrx = 7119437.0 >= iconpointscoreg;
      do {
         iconpointscoreg += (String.fromCharCode(81,0) == profileframeS ? (predictionloss2 ? 5 : 2) : profileframeS.length);
         if (imagenetworkerrx) {
            break;
         }
      } while (imagenetworkerrx && (1.49 > (iconpointscoreg - 1.11)));
      while ((watchnowbgo + iconpointscoreg) < 5.94 || (5.94 + watchnowbgo) < 3.46) {
          let selectiong = 4.0;
          let nativemodulem = String.fromCharCode(102,95,57,49,95,112,114,101,100,105,99,116,105,111,110,0);
         iconpointscoreg -= 1;
         selectiong -= (parseFloat(`${String.fromCharCode(70,0) == nativemodulem ? nativemodulem.length : parseInt(`${selectiong}`)}`));
         break;
      }
         profileframeS += `${profileframeS.length - 1}`;
         predictionloss2 = profileframeS == heart_;
       let privilegeh = String.fromCharCode(115,95,57,53,95,105,109,112,117,108,115,101,0);
      if ((2 & heart_.length) == 5) {
         watchnowbgo /= Math.max(parseFloat(`${privilegeh.length << (Math.min(Math.abs(1), 3))}`), 2);
      }
         watchnowbgo /= Math.max(parseFloat(`${parseInt(`${iconpointscoreg}`) >> (Math.min(5, Math.abs(3)))}`), 1);
         heart_ += `${((predictionloss2 ? 2 : 3))}`;
      for (let q = 0; q < 3; q++) {
         iconpointscoreg *= (profileframeS.length & (predictionloss2 ? 4 : 1));
      }
         heart_ += "3";
      if (privilegeh == heart_) {
         heart_ += `${parseInt(`${iconpointscoreg}`) / (Math.max(1, privilegeh.length))}`;
      }
      redcirclebgn *= (String.fromCharCode(98,0) == iconcurrentmatch7 ? iconcurrentmatch7.length : iconcloseg.length);
   }
      benefit6 = new Map([[giflivestreamingB, giflivestreamingB.length]]);
      iconcloseg.push(iconcurrentmatch7.length);
      iconcurrentmatch7 = `${(String.fromCharCode(89,0) == iconcurrentmatch7 ? disconnectedlogoD.length : iconcurrentmatch7.length)}`;
      backr -= benefit6.size | 3;
   while (whistleorange9 == iconcurrentmatch7) {
      iconcurrentmatch7 += `${3 ^ parseInt(`${redcirclebgn}`)}`;
      break;
   }
    clearTimeout(sliderTimeout.current);

      giflivestreamingB += "1";
   while (reactnavigation1 != String.fromCharCode(101,0)) {
      whistleorange9 = `${2 & disconnectedlogoD.length}`;
      break;
   }
      whistleorange9 += `${parseInt(`${redcirclebgn}`) % 1}`;
   if ((disconnectedlogoD.length * 5) <= 3) {
      redcirclebgn -= disconnectedlogoD.length;
   }
   for (let b = 0; b < 3; b++) {
      reactnavigation1 = "1";
   }
   let taiwanU = backr <= 8764427;
   do {
       let defaultfootballbge = true;
       let commentk: Map<any, any> = new Map([[String.fromCharCode(98,111,114,100,101,114,115,95,98,95,49,56,0),true ], [String.fromCharCode(111,112,97,116,111,109,95,104,95,49,57,0),true ]]);
       let s_center6: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,112,114,101,102,105,120,101,100,0),109], [String.fromCharCode(97,116,116,97,99,104,95,112,95,57,0),360]]);
       let xvodg = String.fromCharCode(120,95,52,52,95,111,98,115,101,114,118,105,110,103,0);
       let bangt = 4;
      if (commentk.get(`${s_center6.size}`) == null) {
          let guideb: Array<any> = [String.fromCharCode(109,101,103,97,98,121,116,101,95,48,95,54,53,0), String.fromCharCode(97,115,107,105,110,103,95,118,95,54,53,0)];
          let topics = 3.0;
          let basketballmatchdetailbgI: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,97,118,105,115,121,110,116,104,0),233], [String.fromCharCode(113,117,105,122,95,54,95,49,0),773], [String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,114,95,49,57,0),946]]);
          let twitterc = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,98,95,52,53,0);
         commentk = new Map([[`${defaultfootballbge}`, ((defaultfootballbge ? 1 : 4) - parseInt(`${topics}`))]]);
         guideb.push(2 + basketballmatchdetailbgI.size);
         topics -= parseFloat(`${3}`);
         basketballmatchdetailbgI.set(`${guideb.length}`, 1);
         twitterc += `${twitterc.length}`;
      }
       let showless1: Array<any> = [936, 756];
      let mbnativeadvancedn = defaultfootballbge ? !defaultfootballbge : defaultfootballbge;
      do {
          let goallogor: Map<any, any> = new Map([[String.fromCharCode(105,95,50,52,0),String.fromCharCode(99,97,108,108,115,95,119,95,55,50,0)], [String.fromCharCode(100,121,110,108,111,97,100,95,50,95,53,55,0),String.fromCharCode(117,95,54,49,95,115,116,114,101,97,109,105,110,102,111,0)]]);
          let arrowselectdowns: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,105,107,101,95,49,95,52,56,0),169], [String.fromCharCode(102,114,97,109,101,112,111,111,108,95,101,95,57,49,0),282], [String.fromCharCode(103,95,50,56,95,119,117,110,100,101,102,0),446]]);
         defaultfootballbge = !defaultfootballbge;
         goallogor.set(`${arrowselectdowns.size}`, goallogor.size);
         arrowselectdowns.set(`${arrowselectdowns.size}`, goallogor.size);
         if (mbnativeadvancedn) {
            break;
         }
      } while ((s_center6.size >= 3) && mbnativeadvancedn);
         bangt -= 3 >> (Math.min(Math.abs(bangt), 4));
      let unreadG = bangt >= 8101473;
      do {
          let libjsijniprofiler5 = 1.0;
          let topico = true;
         bangt ^= showless1.length & 2;
         libjsijniprofiler5 /= Math.max(3 | parseInt(`${libjsijniprofiler5}`), 1);
         topico = libjsijniprofiler5 < 2.99;
         if (unreadG) {
            break;
         }
      } while (((4 ^ bangt) >= 2) && unreadG);
         defaultfootballbge = 40 <= bangt;
      while (5 <= (xvodg.length / 4)) {
         xvodg += "1";
         break;
      }
      while ((xvodg.length + s_center6.size) < 3) {
         s_center6 = new Map([[xvodg, 2]]);
         break;
      }
          let buildx: Array<any> = [378, 378];
         showless1.push(showless1.length);
         buildx.push(buildx.length << (Math.min(1, buildx.length)));
      if ((5 + showless1.length) == 1 || 5 == (xvodg.length + showless1.length)) {
         xvodg += `${commentk.size}`;
      }
      while (bangt > commentk.size) {
         bangt ^= commentk.size + 2;
         break;
      }
         showless1 = [showless1.length];
      let phone4 = showless1.length >= 9321638;
      do {
         showless1 = [3];
         if (phone4) {
            break;
         }
      } while ((showless1.length >= 4) && phone4);
         bangt &= 2;
          let smallorangemanR = true;
         commentk = new Map([[xvodg, ((defaultfootballbge ? 1 : 4) << (Math.min(xvodg.length, 3)))]]);
         smallorangemanR = !smallorangemanR;
      backr ^= iconcloseg.length;
      if (taiwanU) {
         break;
      }
   } while ((5 == (backr << (Math.min(Math.abs(4), 2))) && (4 << (Math.min(3, giflivestreamingB.length))) == 4) && taiwanU);
   for (let c = 0; c < 3; c++) {
      whistleorange9 += `${parseInt(`${refresho}`) % 1}`;
   }
       let dependencies7X = String.fromCharCode(99,114,111,115,115,95,97,95,57,51,0);
       let time_42 = false;
       let mnewinterstitialX = 4.0;
          let profileinactiveZ = String.fromCharCode(99,111,112,121,114,105,103,104,116,95,120,95,55,56,0);
          let unimplementedviewp = true;
          let downi = String.fromCharCode(112,97,117,115,101,100,95,97,95,55,54,0);
         mnewinterstitialX /= Math.max(4, parseFloat(`${3}`));
         profileinactiveZ = `${((unimplementedviewp ? 3 : 2) | downi.length)}`;
         unimplementedviewp = ((downi.length - (unimplementedviewp ? 68 : downi.length)) <= 68);
      if (3.75 > mnewinterstitialX || (mnewinterstitialX + 3.75) > 5.59) {
          let episodesl = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,104,95,54,53,0);
         mnewinterstitialX *= parseFloat(`${3}`);
         episodesl = `${episodesl.length >> (Math.min(Math.abs(1), 2))}`;
      }
         time_42 = mnewinterstitialX <= 64.37;
         mnewinterstitialX /= Math.max(3, (parseFloat(`${(time_42 ? 5 : 4)}`)));
         time_42 = !time_42;
      disconnectedlogoD = [(String.fromCharCode(55,0) == giflivestreamingB ? backr : giflivestreamingB.length)];
      dependencies7X += `${2 >> (Math.min(3, dependencies7X.length))}`;
      carouselq = whistleorange9.length >= 62;
    sliderTimeout.current = setTimeout(() => {

      predictionwinD = new Map([[`${predictionwinD.size}`, predictionwinD.size << (Math.min(disconnectedlogoD.length, 5))]]);
   for (let y = 0; y < 1; y++) {
       let targetm = 5;
       let filledb = String.fromCharCode(99,95,57,95,102,108,111,111,114,115,0);
       let gradlew2 = String.fromCharCode(108,95,51,57,95,98,97,116,99,104,101,115,0);
       let stylesF: Array<any> = [526, 897];
       let rncoreo = String.fromCharCode(104,95,51,53,95,115,112,108,105,116,0);
      while (targetm > rncoreo.length) {
         targetm &= filledb.length;
         break;
      }
      while (filledb.length < targetm) {
         filledb += `${gradlew2.length + 3}`;
         break;
      }
          let iconbellactiveF = String.fromCharCode(100,95,49,51,95,109,107,118,109,117,120,101,114,0);
         rncoreo = `${gradlew2.length << (Math.min(5, iconbellactiveF.length))}`;
         targetm ^= stylesF.length;
         targetm /= Math.max(3, filledb.length / (Math.max(2, 4)));
       let yellowscoreballr: Array<any> = [481, 307, 466];
      for (let u = 0; u < 2; u++) {
         gradlew2 += `${gradlew2.length}`;
      }
       let blackU: Array<any> = [98, 254];
      while (1 >= (gradlew2.length | yellowscoreballr.length)) {
         gradlew2 = `${filledb.length}`;
         break;
      }
      let fulla = blackU.length >= 7228858;
      do {
         blackU = [2 >> (Math.min(1, rncoreo.length))];
         if (fulla) {
            break;
         }
      } while (fulla && ((yellowscoreballr.length + blackU.length) >= 2));
      if (1 < filledb.length) {
         filledb = "1";
      }
      while ((stylesF.length % (Math.max(blackU.length, 5))) >= 2) {
         stylesF = [2];
         break;
      }
         filledb = `${(String.fromCharCode(121,0) == rncoreo ? blackU.length : rncoreo.length)}`;
       let logoA = String.fromCharCode(114,101,97,100,98,121,116,101,95,118,95,50,0);
      while (1 > (yellowscoreballr.length >> (Math.min(1, blackU.length)))) {
         blackU.push(gradlew2.length - targetm);
         break;
      }
      disconnectedlogoD = [targetm << (Math.min(Math.abs(benefit6.size), 5))];
   }
       let recommendationd = false;
         recommendationd = !recommendationd && !recommendationd;
       let modelsS = true;
      while (!recommendationd) {
          let stylesB: Array<any> = [295, 319];
          let whitebellp = String.fromCharCode(110,105,110,101,95,111,95,56,52,0);
          let filledm = true;
          let iconpipexpandQ: Map<any, any> = new Map([[String.fromCharCode(97,95,55,50,95,104,113,120,100,115,112,0),230], [String.fromCharCode(114,101,111,114,100,101,114,95,99,95,50,56,0),324], [String.fromCharCode(99,108,111,115,101,115,116,95,52,95,51,55,0),711]]);
          let libswresamplep = 4.0;
         modelsS = !modelsS;
         stylesB.push(iconpipexpandQ.size * 2);
         whitebellp = `${stylesB.length ^ 2}`;
         filledm = !filledm;
         iconpipexpandQ = new Map([[`${filledm}`, whitebellp.length]]);
         libswresamplep -= parseFloat(`${1}`);
         break;
      }
      reactnavigation1 = "2";
   let constantsZ = iconsettingF.length >= 8475064;
   do {
       let whitetickf = 2.0;
       let basketballicong: Array<any> = [String.fromCharCode(104,95,53,49,95,115,101,110,100,97,108,108,0), String.fromCharCode(115,95,49,95,115,99,97,110,115,0), String.fromCharCode(121,95,54,55,95,121,95,50,53,0)];
          let awayJ = String.fromCharCode(98,114,97,99,107,101,116,95,121,95,56,56,0);
          let nexti: Map<any, any> = new Map([[String.fromCharCode(102,97,110,111,117,116,95,112,95,52,0),true ], [String.fromCharCode(98,95,53,49,95,114,111,117,110,100,101,100,110,101,115,115,0),false ], [String.fromCharCode(114,97,119,118,105,100,101,111,95,54,95,56,54,0),false ]]);
          let store8 = true;
         basketballicong.push(nexti.size / (Math.max(awayJ.length, 8)));
         awayJ = `${((store8 ? 1 : 5) << (Math.min(Math.abs((store8 ? 1 : 2)), 2)))}`;
         nexti = new Map([[`${store8}`, (1 ^ (store8 ? 3 : 1))]]);
      let loginsuccess4 = 6939036.0 <= whitetickf;
      do {
         whitetickf /= Math.max(2, basketballicong.length);
         if (loginsuccess4) {
            break;
         }
      } while ((basketballicong.includes(whitetickf)) && loginsuccess4);
      let volumeN = 5967918.0 <= whitetickf;
      do {
         whitetickf += parseInt(`${whitetickf}`);
         if (volumeN) {
            break;
         }
      } while ((3 <= (2 + basketballicong.length) || (whitetickf + basketballicong.length) <= 2.81) && volumeN);
      if (3.44 <= (2.10 + whitetickf) && (whitetickf + 2.10) <= 2.20) {
         whitetickf += parseInt(`${whitetickf}`);
      }
       let bridgeL = String.fromCharCode(112,95,57,55,95,112,114,111,98,108,101,109,0);
       let delegate_vi8 = String.fromCharCode(107,95,50,56,95,115,116,117,98,98,101,100,0);
      for (let o = 0; o < 2; o++) {
         whitetickf /= Math.max(3, 3 + basketballicong.length);
      }
      iconsettingF = `${(String.fromCharCode(119,0) == iconsettingF ? iconsettingF.length : predictionwinD.size)}`;
      if (constantsZ) {
         break;
      }
   } while ((4.35 >= (redcirclebgn / 1.99)) && constantsZ);
   while (carouselq || 4 == (backr ^ 1)) {
      backr |= backr;
      break;
   }
       let binit_1w3 = String.fromCharCode(115,95,55,49,95,97,119,97,121,0);
       let bgvipxvodH = String.fromCharCode(119,97,115,116,101,100,95,121,95,50,57,0);
         bgvipxvodH += `${1 - bgvipxvodH.length}`;
         bgvipxvodH = `${binit_1w3.length}`;
      if (binit_1w3 == bgvipxvodH) {
         bgvipxvodH += `${bgvipxvodH.length}`;
      }
          let defaultteamd = true;
         binit_1w3 = `${(bgvipxvodH == String.fromCharCode(114,0) ? binit_1w3.length : bgvipxvodH.length)}`;
         defaultteamd = !defaultteamd;
      while (bgvipxvodH == String.fromCharCode(120,0)) {
         binit_1w3 = `${bgvipxvodH.length >> (Math.min(4, binit_1w3.length))}`;
         break;
      }
       let neonk = String.fromCharCode(101,95,51,55,95,119,105,101,110,101,114,0);
       let gifgoalbgI = String.fromCharCode(111,97,117,116,104,95,53,95,53,52,0);
      eighteenB /= Math.max(4, parseFloat(`${backr}`));
   let indicatorK = iconcloseg.length >= 8704588;
   do {
       let telemetryT = String.fromCharCode(107,102,119,114,105,116,101,95,56,95,51,51,0);
       let invite0 = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,107,95,57,48,0);
       let muted_ = 1.0;
      for (let a = 0; a < 1; a++) {
         muted_ /= Math.max(parseInt(`${muted_}`) + 1, 3);
      }
      while (telemetryT == invite0) {
          let iconarrowleftv = false;
          let reddownarrows = 0.0;
         invite0 += `${invite0.length}`;
         iconarrowleftv = !iconarrowleftv;
         reddownarrows *= ((iconarrowleftv ? 2 : 1) + parseInt(`${reddownarrows}`));
         break;
      }
      if (invite0.includes(`${telemetryT.length}`)) {
         invite0 += `${parseInt(`${muted_}`)}`;
      }
      let episode0 = String.fromCharCode(122,99,101,0) == invite0;
      do {
          let javao = String.fromCharCode(107,95,54,53,95,118,101,114,116,101,120,0);
          let storeH = String.fromCharCode(100,95,55,57,95,112,97,99,101,100,0);
         invite0 += `${1 + telemetryT.length}`;
         javao = "3";
         storeH = `${storeH.length}`;
         if (episode0) {
            break;
         }
      } while (episode0 && (2 > (invite0.length >> (Math.min(Math.abs(4), 4)))));
      if ((invite0.length / (Math.max(7, parseInt(`${muted_}`)))) > 3 && (muted_ / (Math.max(invite0.length, 8))) > 4.80) {
         invite0 = `${(invite0 == String.fromCharCode(87,0) ? parseInt(`${muted_}`) : invite0.length)}`;
      }
         telemetryT += `${telemetryT.length}`;
         invite0 = "1";
      if (telemetryT.startsWith(`${invite0.length}`)) {
         invite0 = `${invite0.length / (Math.max(2, 7))}`;
      }
          let halffieldimagek = 2.0;
          let gemfilei = String.fromCharCode(112,95,53,57,95,105,115,109,108,0);
          let roote: Map<any, any> = new Map([[String.fromCharCode(116,104,97,116,95,54,95,52,0),String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,98,95,49,57,0)], [String.fromCharCode(117,110,105,116,115,95,103,95,51,52,0),String.fromCharCode(115,117,98,101,120,112,95,55,95,55,55,0)]]);
         telemetryT += `${3 / (Math.max(5, invite0.length))}`;
         halffieldimagek /= Math.max(gemfilei.length >> (Math.min(3, Math.abs(parseInt(`${halffieldimagek}`)))), 4);
         gemfilei += `${roote.size & 3}`;
         roote.set(`${gemfilei}`, 2);
      iconcloseg.push(parseInt(`${muted_}`) % (Math.max(predictionwinD.size, 5)));
      if (indicatorK) {
         break;
      }
   } while (indicatorK && (4 >= (iconcloseg.length >> (Math.min(giflivestreamingB.length, 5)))));
   if ((predictionwinD.size + parseInt(`${refresho}`)) <= 5) {
       let iconwatchQ = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,120,95,51,55,0);
       let r_managerl: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,99,95,49,95,49,56,0),824], [String.fromCharCode(104,95,57,95,99,102,102,116,102,0),718]]);
      for (let p = 0; p < 1; p++) {
         r_managerl = new Map([[`${r_managerl.size}`, 2 & iconwatchQ.length]]);
      }
      while ((iconwatchQ.length / (Math.max(4, 6))) == 4) {
          let smallsound3 = 2.0;
          let brightnessx = String.fromCharCode(106,95,56,51,95,99,111,108,117,109,115,0);
         r_managerl.set(`${iconwatchQ}`, 2);
         smallsound3 /= Math.max(2, parseInt(`${smallsound3}`));
         brightnessx += `${3 ^ parseInt(`${smallsound3}`)}`;
         break;
      }
       let libhermesy: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,101,120,116,95,98,95,56,53,0),467], [String.fromCharCode(115,104,101,108,108,95,109,95,53,55,0),996], [String.fromCharCode(102,105,114,115,116,112,97,115,115,95,106,95,56,53,0),354]]);
       let faviconi: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,101,119,115,95,100,95,54,56,0),String.fromCharCode(108,115,104,105,102,116,95,57,95,54,48,0)], [String.fromCharCode(98,114,111,97,100,99,97,115,116,95,57,95,51,52,0),String.fromCharCode(110,95,55,55,95,112,101,114,109,117,116,97,116,105,111,110,115,0)]]);
      let stringw = 5324616 >= r_managerl.size;
      do {
          let handlere = 3.0;
          let push2 = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,119,95,57,55,0);
          let temperatureK = String.fromCharCode(111,95,55,52,95,115,101,116,117,112,100,0);
          let short_qD = String.fromCharCode(101,95,50,95,110,97,116,117,114,97,108,0);
         r_managerl = new Map([[`${libhermesy.size}`, (String.fromCharCode(78,0) == temperatureK ? libhermesy.size : temperatureK.length)]]);
         handlere *= parseInt(`${handlere}`);
         push2 += `${3 ^ push2.length}`;
         short_qD += `${short_qD.length | push2.length}`;
         if (stringw) {
            break;
         }
      } while (((4 << (Math.min(3, Math.abs(r_managerl.size)))) >= 2 && 1 >= (4 << (Math.min(1, Math.abs(r_managerl.size))))) && stringw);
          let views7 = String.fromCharCode(99,95,51,54,95,114,97,100,105,97,110,115,0);
          let backu: Array<any> = [251, 397];
         faviconi.set(`${r_managerl.size}`, libhermesy.size ^ r_managerl.size);
         views7 = `${3 % (Math.max(3, backu.length))}`;
         backu = [(views7 == String.fromCharCode(48,0) ? backu.length : views7.length)];
       let libfolly0 = true;
       let downloaded5 = true;
      predictionwinD.set(giflivestreamingB, (String.fromCharCode(86,0) == giflivestreamingB ? giflivestreamingB.length : iconwatchQ.length));
   }
   for (let u = 0; u < 1; u++) {
      benefit6.set(reactnavigation1, ((carouselq ? 5 : 5) ^ 1));
   }
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let predictiono = true;
    let klevinH = String.fromCharCode(103,101,116,98,121,116,101,95,56,95,49,48,48,0);
    let matchT: Map<any, any> = new Map([[String.fromCharCode(121,95,53,48,95,112,103,105,100,120,0),97], [String.fromCharCode(99,95,53,53,95,114,105,103,104,116,109,111,115,116,0),828]]);
    let subbasketballplayerU: Array<any> = [String.fromCharCode(108,95,57,56,95,115,119,115,99,97,108,101,0), String.fromCharCode(109,111,100,98,95,112,95,54,50,0), String.fromCharCode(121,95,51,49,95,117,118,114,100,0)];
    let trashR = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,101,95,57,51,0);
    let zoomn = String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,102,95,51,57,0);
    let dplusK = String.fromCharCode(119,95,54,57,95,97,97,100,0);
    let notificationfilledM = true;
   for (let h = 0; h < 3; h++) {
       let iconarrowrightm = String.fromCharCode(119,122,97,101,115,95,51,95,57,49,0);
       let agreement7 = String.fromCharCode(99,108,97,105,109,101,100,95,111,95,51,56,0);
       let wifirouterx = 5.0;
       let refreshM: Array<any> = [String.fromCharCode(108,95,51,55,95,112,97,115,112,0), String.fromCharCode(99,108,117,115,116,101,114,115,95,115,95,55,48,0)];
         refreshM = [1];
      if ((5 >> (Math.min(2, iconarrowrightm.length))) < 5) {
         iconarrowrightm = "2";
      }
      for (let n = 0; n < 3; n++) {
         wifirouterx *= parseFloat(`${2}`);
      }
         iconarrowrightm += `${refreshM.length % (Math.max(3, 9))}`;
         refreshM.push(refreshM.length);
       let dicelogoK = String.fromCharCode(113,95,53,49,95,112,117,114,112,111,115,101,102,117,108,0);
       let chinasame4 = String.fromCharCode(117,95,56,50,95,100,111,120,121,103,101,110,0);
         agreement7 = `${2 * dicelogoK.length}`;
       let showlessp = 2;
       let mbsplashm = 5;
          let side9 = 1.0;
          let fullE = false;
         showlessp %= Math.max(4, iconarrowrightm.length - parseInt(`${wifirouterx}`));
         side9 -= (parseInt(`${side9}`) & (fullE ? 3 : 1));
         fullE = !fullE;
         dicelogoK = `${agreement7.length + parseInt(`${wifirouterx}`)}`;
          let largesounds = 5.0;
         agreement7 += `${dicelogoK.length << (Math.min(Math.abs(1), 2))}`;
         largesounds *= 1;
          let watchnowbgn = String.fromCharCode(114,95,53,49,95,115,104,111,114,116,102,108,111,97,116,0);
          let typingloadingJ = 3;
          let anythinke = true;
         wifirouterx *= parseFloat(`${2 % (Math.max(parseInt(`${wifirouterx}`), 10))}`);
         watchnowbgn = `${watchnowbgn.length}`;
         typingloadingJ %= Math.max((1 + (anythinke ? 4 : 2)), 5);
         anythinke = watchnowbgn.length >= typingloadingJ;
      zoomn = `${agreement7.length}`;
   }
   if (4 > (2 + klevinH.length)) {
      klevinH = `${(klevinH == String.fromCharCode(84,0) ? (predictiono ? 2 : 3) : klevinH.length)}`;
   }
   if (matchT.size > dplusK.length) {
      matchT = new Map([[`${matchT.size}`, ((predictiono ? 3 : 5) >> (Math.min(Math.abs(matchT.size), 1)))]]);
   }
   if (trashR.length > zoomn.length) {
       let bang2 = 2.0;
      if ((4.23 + bang2) == 4.51) {
         bang2 /= Math.max(parseFloat(`${parseInt(`${bang2}`) | 1}`), 3);
      }
      let base8 = 8937886.0 >= bang2;
      do {
          let humidityO = String.fromCharCode(100,111,119,110,109,105,120,95,117,95,53,57,0);
          let basketballtrophyO = 4;
          let thailandD = String.fromCharCode(98,97,99,107,105,110,103,95,55,95,51,49,0);
         bang2 -= (parseFloat(`${String.fromCharCode(101,0) == thailandD ? humidityO.length : thailandD.length}`));
         humidityO = `${basketballtrophyO}`;
         if (base8) {
            break;
         }
      } while (base8 && ((bang2 / 1.100) >= 2.58));
         bang2 /= Math.max(4, parseFloat(`${parseInt(`${bang2}`)}`));
      zoomn = `${parseInt(`${bang2}`) | 2}`;
   }
   for (let h = 0; h < 3; h++) {
      predictiono = String.fromCharCode(120,0) == klevinH;
   }
      dplusK = `${(3 * (predictiono ? 2 : 4))}`;
   if (trashR.length < 2) {
      dplusK = `${subbasketballplayerU.length}`;
   }
   for (let n = 0; n < 1; n++) {
       let stringsb = 2;
       let backwhiteS = String.fromCharCode(108,95,57,52,95,114,101,115,112,0);
       let chatZ: Array<any> = [118, 546];
       let fullo = String.fromCharCode(113,95,56,53,95,110,117,108,108,105,102,0);
       let smallbrightnessq: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,100,102,115,116,0),true ], [String.fromCharCode(97,112,105,115,95,118,95,52,57,0),true ]]);
      for (let r = 0; r < 2; r++) {
         fullo += `${smallbrightnessq.size << (Math.min(Math.abs(3), 2))}`;
      }
       let editF = String.fromCharCode(112,114,105,110,116,111,117,116,95,116,95,51,56,0);
       let logoutC = String.fromCharCode(113,117,105,122,95,121,95,54,48,0);
      if (5 == fullo.length && editF == String.fromCharCode(77,0)) {
          let typesU = String.fromCharCode(99,111,108,111,110,115,95,103,95,51,56,0);
          let mail0: Array<any> = [290, 643, 112];
          let commentt = String.fromCharCode(110,95,56,57,95,99,97,112,116,117,114,105,110,103,0);
         editF += "2";
         typesU = `${(String.fromCharCode(73,0) == typesU ? mail0.length : typesU.length)}`;
         mail0.push(2);
         commentt = `${(String.fromCharCode(86,0) == typesU ? typesU.length : mail0.length)}`;
      }
      if (fullo.length == 5) {
         logoutC = `${smallbrightnessq.size}`;
      }
          let binddatasF: Map<any, any> = new Map([[String.fromCharCode(113,95,55,50,95,101,110,99,111,100,97,98,108,101,0),978], [String.fromCharCode(100,105,97,108,108,101,100,95,52,95,56,53,0),417]]);
          let bgvipxvodG: Array<any> = [832, 633];
         fullo = "1";
         binddatasF.set(`${bgvipxvodG.length}`, 3 - bgvipxvodG.length);
         stringsb |= editF.length - 2;
       let defaultpredictionprofileZ: Map<any, any> = new Map([[String.fromCharCode(115,95,53,57,95,100,105,115,116,114,97,99,116,97,98,108,101,0),true ], [String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,57,95,52,57,0),false ]]);
       let iconorientatione = 1;
       let whiteanimationliveC = 0;
      if (!logoutC.startsWith(`${stringsb}`)) {
          let style8: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,115,95,121,95,57,49,0),String.fromCharCode(115,117,112,101,114,95,49,95,56,50,0)], [String.fromCharCode(99,95,53,54,95,114,101,99,111,110,105,110,116,101,114,0),String.fromCharCode(113,95,56,57,95,97,108,112,104,97,0)]]);
          let slider2 = 4.0;
          let n_lockD = 3.0;
          let internetH = 5.0;
          let sellA: Array<any> = [289, 348];
         stringsb *= iconorientatione << (Math.min(chatZ.length, 5));
         style8 = new Map([[`${style8.size}`, parseInt(`${internetH}`) / 1]]);
         slider2 += parseFloat(`${parseInt(`${n_lockD}`) ^ 1}`);
         n_lockD -= parseFloat(`${style8.size}`);
         internetH += 2 >> (Math.min(Math.abs(parseInt(`${internetH}`)), 3));
         sellA.push(1);
      }
      for (let q = 0; q < 1; q++) {
         backwhiteS += `${backwhiteS.length}`;
      }
          let container7 = 2.0;
         fullo += `${editF.length}`;
         container7 *= parseInt(`${container7}`) >> (Math.min(4, Math.abs(parseInt(`${container7}`))));
      for (let g = 0; g < 2; g++) {
         fullo = `${smallbrightnessq.size}`;
      }
      for (let c = 0; c < 2; c++) {
          let homeloading4 = String.fromCharCode(108,95,52,57,95,97,112,112,101,110,100,0);
          let loadingp = 3.0;
          let libreactnativeblob8 = String.fromCharCode(103,95,51,49,95,107,101,121,98,111,97,114,100,0);
          let iconclosewhitebg0: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,95,107,95,52,57,0),410], [String.fromCharCode(122,95,57,51,95,99,97,108,99,0),518]]);
         whiteanimationliveC >>= Math.min(libreactnativeblob8.length, 4);
         homeloading4 = `${iconclosewhitebg0.size % (Math.max(3, 2))}`;
         loadingp += homeloading4.length;
         libreactnativeblob8 = `${parseInt(`${loadingp}`)}`;
         iconclosewhitebg0.set(`${loadingp}`, 2);
      }
      while (2 == (whiteanimationliveC + fullo.length)) {
         whiteanimationliveC >>= Math.min(fullo.length, 3);
         break;
      }
      for (let v = 0; v < 3; v++) {
         whiteanimationliveC >>= Math.min(4, Math.abs((logoutC == String.fromCharCode(103,0) ? logoutC.length : smallbrightnessq.size)));
      }
      predictiono = zoomn.length < matchT.size;
   }
   let iconeyef = 8690653 <= matchT.size;
   do {
       let iconsharefriends1 = String.fromCharCode(117,95,49,52,95,98,102,115,116,109,0);
       let sports2 = false;
       let episodeN = String.fromCharCode(115,117,112,101,114,95,97,95,50,53,0);
       let signinupX = true;
       let libfollye = String.fromCharCode(100,105,103,101,115,116,95,56,95,51,57,0);
         iconsharefriends1 += `${iconsharefriends1.length}`;
       let actions9: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,95,102,95,54,52,0),true ], [String.fromCharCode(107,95,50,55,95,100,102,115,116,0),false ]]);
          let analytic9: Map<any, any> = new Map([[String.fromCharCode(107,98,105,116,95,108,95,49,48,48,0),520], [String.fromCharCode(112,114,111,109,105,115,105,102,121,95,109,95,54,0),187]]);
          let viewsp: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,102,114,101,101,109,0),509], [String.fromCharCode(102,99,110,116,108,95,97,95,49,50,0),768], [String.fromCharCode(105,95,57,57,95,112,97,121,108,111,97,100,115,0),485]]);
         episodeN = `${((signinupX ? 1 : 4) / 3)}`;
         analytic9.set(`${analytic9.size}`, analytic9.size);
         viewsp = new Map([[`${viewsp.size}`, 1]]);
       let chatw = 2.0;
      for (let p = 0; p < 2; p++) {
         iconsharefriends1 = `${((sports2 ? 1 : 2) | 3)}`;
      }
         iconsharefriends1 = "3";
      if (signinupX) {
          let predictionbuttonk = String.fromCharCode(116,105,110,121,95,100,95,54,54,0);
          let logind = 5;
          let abidetecti = String.fromCharCode(114,101,99,101,110,116,101,114,95,105,95,51,53,0);
         sports2 = !sports2;
         predictionbuttonk += `${2 - predictionbuttonk.length}`;
         logind &= 3 - predictionbuttonk.length;
         abidetecti = `${logind}`;
      }
      while (4 > (2 >> (Math.min(5, libfollye.length)))) {
         libfollye = `${(episodeN.length << (Math.min(4, Math.abs((sports2 ? 4 : 2)))))}`;
         break;
      }
       let ballB = 0.0;
       let nbatrophyb = 1.0;
      for (let g = 0; g < 3; g++) {
          let basketballawayteamo: Array<any> = [883, 501];
         iconsharefriends1 += `${episodeN.length}`;
         basketballawayteamo = [basketballawayteamo.length & 2];
      }
         chatw -= parseFloat(`${actions9.size | 3}`);
      while (!episodeN.includes(`${signinupX}`)) {
          let predictionbanner6 = String.fromCharCode(113,95,53,56,95,97,98,105,0);
          let colors2 = 3.0;
         signinupX = libfollye.length > predictionbanner6.length;
         predictionbanner6 += `${parseInt(`${colors2}`) & parseInt(`${colors2}`)}`;
         break;
      }
         episodeN = `${parseInt(`${chatw}`)}`;
      if (3.40 > (2.60 - chatw) && (chatw - 2.60) > 1.38) {
         chatw /= Math.max(2, parseFloat(`${libfollye.length % (Math.max(2, 4))}`));
      }
         chatw *= parseFloat(`${1}`);
      matchT.set(klevinH, 1);
      if (iconeyef) {
         break;
      }
   } while ((1 >= matchT.size) && iconeyef);
      klevinH += "1";
   let defaultpredictionprofileY = notificationfilledM ? !notificationfilledM : notificationfilledM;
   do {
       let clubN: Array<any> = [String.fromCharCode(98,121,116,101,105,110,95,107,95,53,53,0), String.fromCharCode(100,95,52,55,95,109,97,116,101,114,105,97,108,0), String.fromCharCode(108,97,121,111,117,116,115,95,49,95,56,0)];
       let libreactperfloggerjnin = String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,95,115,95,57,53,0);
       let signinupc = String.fromCharCode(111,112,116,105,111,110,115,95,113,95,51,0);
         signinupc = `${signinupc.length + clubN.length}`;
      let lineW = 5852675 >= clubN.length;
      do {
         clubN.push(clubN.length + 1);
         if (lineW) {
            break;
         }
      } while (((clubN.length & 1) < 2 && (libreactperfloggerjnin.length & 1) < 4) && lineW);
         signinupc += `${clubN.length}`;
      for (let l = 0; l < 1; l++) {
         signinupc += `${(signinupc == String.fromCharCode(104,0) ? libreactperfloggerjnin.length : signinupc.length)}`;
      }
      if (signinupc.endsWith(`${libreactperfloggerjnin.length}`)) {
          let combinedp = String.fromCharCode(116,95,52,52,95,117,110,105,118,101,114,115,97,108,0);
          let chatroombackgroundN = 4.0;
         libreactperfloggerjnin = `${libreactperfloggerjnin.length ^ 1}`;
         combinedp = `${combinedp.length}`;
         chatroombackgroundN /= Math.max(parseFloat(`${parseInt(`${chatroombackgroundN}`)}`), 1);
      }
          let toponj: Map<any, any> = new Map([[String.fromCharCode(115,95,55,54,95,115,105,109,112,108,101,114,101,97,100,0),966], [String.fromCharCode(116,95,57,56,95,109,106,112,101,103,98,0),531], [String.fromCharCode(115,105,98,108,105,110,103,115,95,110,95,54,48,0),156]]);
         clubN.push(signinupc.length << (Math.min(Math.abs(3), 5)));
         toponj.set(`${toponj.size}`, 1);
       let awayplayerX = String.fromCharCode(108,97,110,103,117,97,103,101,95,108,95,54,53,0);
         signinupc = `${clubN.length}`;
      for (let m = 0; m < 1; m++) {
         clubN = [(String.fromCharCode(122,0) == libreactperfloggerjnin ? libreactperfloggerjnin.length : signinupc.length)];
      }
      notificationfilledM = subbasketballplayerU.length >= 35;
      if (defaultpredictionprofileY) {
         break;
      }
   } while ((!notificationfilledM) && defaultpredictionprofileY);
       let liblogger4 = String.fromCharCode(111,95,50,54,95,105,111,115,98,117,105,108,100,0);
       let awayteamfieldu = String.fromCharCode(104,95,57,55,95,107,105,99,107,101,114,0);
         awayteamfieldu = `${awayteamfieldu.length / 3}`;
         liblogger4 += `${awayteamfieldu.length}`;
      let predictionarrow6 = 6346837 >= awayteamfieldu.length;
      do {
         awayteamfieldu = `${1 ^ awayteamfieldu.length}`;
         if (predictionarrow6) {
            break;
         }
      } while ((4 == liblogger4.length && awayteamfieldu != String.fromCharCode(70,0)) && predictionarrow6);
       let greyarrowup8 = String.fromCharCode(109,105,99,95,55,95,51,54,0);
      while (greyarrowup8.length <= 1 || awayteamfieldu.length <= 1) {
         greyarrowup8 = "1";
         break;
      }
          let minimizeE = String.fromCharCode(117,118,114,100,95,115,95,53,50,0);
          let statsS = String.fromCharCode(117,115,108,101,101,112,95,122,95,56,49,0);
          let langN: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,115,95,104,95,54,53,0),String.fromCharCode(109,95,57,95,99,108,97,117,115,101,0)], [String.fromCharCode(101,99,114,101,99,111,118,101,114,95,108,95,55,49,0),String.fromCharCode(117,95,55,49,95,102,116,97,98,0)]]);
         greyarrowup8 = "2";
         minimizeE = "1";
         statsS += `${3 + minimizeE.length}`;
         langN.set(minimizeE, minimizeE.length);
      predictiono = String.fromCharCode(109,0) == trashR;

    brightShare.value = await SystemSetting.getAppBrightness();

   for (let h = 0; h < 1; h++) {
       let basketballplayerplaceholderu = String.fromCharCode(122,95,55,54,95,115,109,107,97,0);
         basketballplayerplaceholderu += `${basketballplayerplaceholderu.length | basketballplayerplaceholderu.length}`;
          let gradleN = 0.0;
          let typingD = String.fromCharCode(121,95,50,50,95,112,114,101,100,101,99,111,100,101,0);
          let kickU = 4.0;
         basketballplayerplaceholderu += "2";
         gradleN /= Math.max(4, 2);
         typingD = `${3 >> (Math.min(1, Math.abs(parseInt(`${gradleN}`))))}`;
         kickU *= 3;
      let relateds = String.fromCharCode(100,55,48,51,114,54,100,50,107,0) == basketballplayerplaceholderu;
      do {
         basketballplayerplaceholderu += `${basketballplayerplaceholderu.length}`;
         if (relateds) {
            break;
         }
      } while ((basketballplayerplaceholderu != String.fromCharCode(71,0)) && relateds);
      matchT = new Map([[`${matchT.size}`, matchT.size]]);
   }
      notificationfilledM = !dplusK.includes(`${predictiono}`);
   for (let a = 0; a < 1; a++) {
       let backwhitev: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,95,112,114,105,109,101,114,0),String.fromCharCode(120,95,55,49,95,114,119,103,116,0)], [String.fromCharCode(106,95,51,49,95,114,101,100,117,110,100,97,110,116,0),String.fromCharCode(113,117,101,115,116,105,111,110,95,104,95,57,52,0)], [String.fromCharCode(116,95,56,55,95,97,99,107,0),String.fromCharCode(102,95,57,55,95,102,114,101,105,114,0)]]);
      while ((backwhitev.size & backwhitev.size) < 4 || 2 < (backwhitev.size & 4)) {
         backwhitev.set(`${backwhitev.size}`, 3 ^ backwhitev.size);
         break;
      }
      let resultr = backwhitev.size >= 7616550;
      do {
         backwhitev.set(`${backwhitev.size}`, 3);
         if (resultr) {
            break;
         }
      } while (resultr && (4 < backwhitev.size));
          let subout1 = 1;
         backwhitev.set(`${subout1}`, 2);
      predictiono = subbasketballplayerU.length > trashR.length;
   }
   for (let m = 0; m < 2; m++) {
      predictiono = notificationfilledM;
   }
      notificationfilledM = klevinH == trashR;
   while (!predictiono && klevinH.length > 1) {
      predictiono = 51 <= matchT.size;
      break;
   }
   while (1 <= (subbasketballplayerU.length - 3)) {
      subbasketballplayerU.push(((notificationfilledM ? 3 : 3) + (predictiono ? 1 : 4)));
      break;
   }
      matchT = new Map([[`${subbasketballplayerU.length}`, (String.fromCharCode(76,0) == dplusK ? subbasketballplayerU.length : dplusK.length)]]);
   for (let g = 0; g < 1; g++) {
       let modal2 = String.fromCharCode(102,95,53,49,95,117,109,111,116,105,111,110,0);
       let encryptr: Array<any> = [498, 595];
         encryptr.push(modal2.length);
      if (modal2.length <= encryptr.length) {
          let sidem = false;
          let homeactivex: Map<any, any> = new Map([[String.fromCharCode(115,109,118,106,112,101,103,95,106,95,52,51,0),805], [String.fromCharCode(105,110,116,114,97,95,57,95,55,48,0),897], [String.fromCharCode(116,101,114,109,105,110,97,108,95,109,95,57,49,0),512]]);
          let informationU: Array<any> = [613, 709];
          let long_clq = 2.0;
         encryptr.push(encryptr.length);
         sidem = null == homeactivex.get(`${sidem}`);
         homeactivex.set(`${sidem}`, 3 << (Math.min(1, Math.abs(homeactivex.size))));
         informationU.push(homeactivex.size);
         long_clq -= 1;
      }
       let mountingl = String.fromCharCode(105,110,118,116,114,97,110,115,95,115,95,50,50,0);
      if (2 <= (mountingl.length | 3) || 1 <= (encryptr.length | 3)) {
         mountingl = `${(String.fromCharCode(87,0) == modal2 ? modal2.length : encryptr.length)}`;
      }
         mountingl += `${mountingl.length + 2}`;
      while (2 >= (4 & encryptr.length) && 5 >= (modal2.length & 4)) {
          let unimplementedview6 = 3.0;
          let mimed: Map<any, any> = new Map([[String.fromCharCode(113,95,54,57,95,108,111,119,0),493], [String.fromCharCode(101,109,97,105,108,95,109,95,49,56,0),192]]);
          let default_031 = false;
         modal2 += `${encryptr.length * 2}`;
         unimplementedview6 *= parseInt(`${unimplementedview6}`);
         mimed.set(`${unimplementedview6}`, parseInt(`${unimplementedview6}`));
         default_031 = (88 > (mimed.size ^ (default_031 ? 88 : mimed.size)));
         break;
      }
      dplusK = `${((predictiono ? 2 : 3) / (Math.max(1, 4)))}`;
   }
   let iconbellt = 8464262 <= subbasketballplayerU.length;
   do {
       let audiencep = 3;
      for (let n = 0; n < 3; n++) {
          let imageactionliveq = 4.0;
          let gifgoal2: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,99,117,114,0),817], [String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,95,57,95,54,0),336], [String.fromCharCode(102,95,50,51,95,102,109,116,112,0),736]]);
          let miniu: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,97,100,95,121,95,57,53,0),965], [String.fromCharCode(115,95,51,55,95,97,101,118,97,108,0),816]]);
          let gesturesI = String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,53,95,51,55,0);
         audiencep <<= Math.min(1, Math.abs(1));
         imageactionliveq /= Math.max(4, miniu.size);
         gifgoal2 = new Map([[`${gifgoal2.size}`, 3]]);
         miniu.set(`${imageactionliveq}`, parseInt(`${imageactionliveq}`) | miniu.size);
         gesturesI = `${gesturesI.length & 1}`;
      }
          let redscoreballZ = false;
          let inactiveX = 1.0;
         audiencep >>= Math.min(4, Math.abs(parseInt(`${inactiveX}`)));
         redscoreballZ = (!redscoreballZ ? redscoreballZ : !redscoreballZ);
         inactiveX += (parseFloat(`${(redscoreballZ ? 5 : 1) & 3}`));
      while (1 == (audiencep & 4)) {
          let libjsiR = true;
          let whitebellR = 0;
          let auto_zx9 = true;
          let templateprocessor6 = 3.0;
          let unimplementedviewP = 5;
         audiencep -= audiencep | parseInt(`${templateprocessor6}`);
         libjsiR = 19 > unimplementedviewP;
         whitebellR += unimplementedviewP / 2;
         auto_zx9 = !auto_zx9;
         templateprocessor6 /= Math.max(parseFloat(`${unimplementedviewP & 2}`), 2);
         break;
      }
      subbasketballplayerU = [3];
      if (iconbellt) {
         break;
      }
   } while (iconbellt && (dplusK.length <= 5));
       let bgvipxvod8 = 3.0;
      while (4.66 > (bgvipxvod8 / (Math.max(8, bgvipxvod8))) || 4.66 > (bgvipxvod8 / (Math.max(bgvipxvod8, 7)))) {
         bgvipxvod8 /= Math.max(parseInt(`${bgvipxvod8}`) % 2, 4);
         break;
      }
      for (let d = 0; d < 2; d++) {
         bgvipxvod8 /= Math.max(4, 3 >> (Math.min(Math.abs(parseInt(`${bgvipxvod8}`)), 3)));
      }
      for (let c = 0; c < 1; c++) {
         bgvipxvod8 /= Math.max(parseInt(`${bgvipxvod8}`) / (Math.max(parseInt(`${bgvipxvod8}`), 9)), 5);
      }
      trashR = "3";
      matchT = new Map([[`${matchT.size}`, 1]]);
    volumeShare.value = await SystemSetting.getVolume();
  };

  const onBrightnessChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + brightShare.value;

    if (
      (0 > newVol && brightShare.value === 0) ||
      (1 < newVol && brightShare.value === 1)
    )
      return;

    if (0 >= newVol && brightShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && brightShare.value !== 1) {
      newVol = 1;
    }

    brightShare.value = newVol;
    setSettings({ name: "brightness", value: newVol });
    SystemSetting.setAppBrightness(newVol);
  };

  const onVolumeChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + volumeShare.value;

    if (
      (0 > newVol && volumeShare.value === 0) ||
      (1 < newVol && volumeShare.value === 1)
    )
      return;

    if (0 >= newVol && volumeShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && volumeShare.value !== 1) {
      newVol = 1;
    }

    volumeShare.value = newVol;
    setSettings({ name: "countdownIconplayActive", value: newVol });
    SystemSetting.setVolume(newVol);
  };

  const onProgressChange = (translation: number) => {
    if (translation > 0) {
      const bias = currentTime;
      const delX = width - previousPanPosition.value.x;
      const delY = totalDuration;
      
      
      
      
      const runtime =
        ((delY - bias) / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      setSettings({ name: "progress", value: runtime });
      onSeek(runtime);
    } else {
      const bias = currentTime;
      const delX = previousPanPosition.value.x;
      
      const runtime =
        (-bias / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      runOnJS(onSeek)(runtime);
    }
  };

  const resetSettings = () => {
       let imageactionlivee = 2.0;
    let fastforwardr = 0.0;
    let shrinkU: Array<any> = [781, 89, 336];
    let match_ = 1.0;
    let libturbomodulejsijniq = String.fromCharCode(114,114,116,114,95,50,95,50,52,0);
    let subout7: Map<any, any> = new Map([[String.fromCharCode(115,95,53,55,95,105,110,118,105,116,101,115,0),String.fromCharCode(115,95,53,55,95,109,97,105,110,104,101,97,100,101,114,0)], [String.fromCharCode(115,95,57,49,95,115,101,116,114,97,110,103,101,0),String.fromCharCode(115,117,98,116,101,120,116,95,117,95,54,50,0)], [String.fromCharCode(108,95,52,55,95,100,101,118,105,100,101,0),String.fromCharCode(118,95,52,57,95,118,97,114,105,97,110,116,115,0)]]);
    let textV = true;
    let sigmobe = 0.0;
    let iconarrowrightblackD = 5.0;
    let sansE: Map<any, any> = new Map([[String.fromCharCode(108,111,119,98,100,95,115,95,56,50,0),false ], [String.fromCharCode(105,95,56,49,95,97,118,99,111,100,101,99,114,101,115,0),false ], [String.fromCharCode(100,101,102,101,114,114,101,114,95,117,95,52,0),false ]]);
    let homeinactivez = 2.0;
    let cross6 = 0.0;
    let iconclosel: Array<any> = [705, 799];
    let roundy = String.fromCharCode(118,108,99,115,95,100,95,56,56,0);
    let watchf: Array<any> = [643, 718, 861];
    let middlesoundU: Array<any> = [String.fromCharCode(116,95,49,50,95,112,114,101,115,117,109,101,0), String.fromCharCode(107,95,54,57,95,114,100,112,99,109,0)];
      match_ *= 1 & subout7.size;
   if ((imageactionlivee - 2.42) < 4.42 && (2.42 + fastforwardr) < 5.52) {
       let bootsplashV = false;
       let splashH: Array<any> = [957, 25];
       let libturbomodulejsijnit = String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,101,95,53,50,0);
       let orangetickq: Map<any, any> = new Map([[String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,103,95,54,54,0),862], [String.fromCharCode(119,95,49,48,95,104,111,115,116,112,111,114,116,102,105,108,101,0),468], [String.fromCharCode(100,114,97,119,116,101,120,116,95,113,95,50,48,0),946]]);
       let currentf = String.fromCharCode(105,95,57,55,95,115,116,114,105,110,103,105,102,121,0);
      while (3 < (currentf.length | orangetickq.size) || 5 < (3 | currentf.length)) {
         orangetickq.set(`${libturbomodulejsijnit}`, orangetickq.size ^ 3);
         break;
      }
      let animationsf = bootsplashV ? !bootsplashV : bootsplashV;
      do {
         bootsplashV = orangetickq.size <= 66 && bootsplashV;
         if (animationsf) {
            break;
         }
      } while (animationsf && (!libturbomodulejsijnit.startsWith(`${bootsplashV}`)));
          let texth = 0.0;
         libturbomodulejsijnit += `${splashH.length / (Math.max(2, 8))}`;
         texth *= parseFloat(`${2}`);
      let formu = bootsplashV ? !bootsplashV : bootsplashV;
      do {
          let gradlewx: Array<any> = [416, 170];
         bootsplashV = splashH.includes(bootsplashV);
         gradlewx = [3];
         if (formu) {
            break;
         }
      } while ((3 == currentf.length && bootsplashV) && formu);
      let combinedi = orangetickq.size >= 9343660;
      do {
         orangetickq.set(`${libturbomodulejsijnit}`, orangetickq.size);
         if (combinedi) {
            break;
         }
      } while ((!currentf.startsWith(`${orangetickq.size}`)) && combinedi);
          let iconshare8 = String.fromCharCode(102,114,97,109,101,114,95,101,95,57,54,0);
         libturbomodulejsijnit += `${currentf.length}`;
         iconshare8 += `${iconshare8.length * 1}`;
      if (5 <= (libturbomodulejsijnit.length | 2)) {
         splashH = [(3 * (bootsplashV ? 3 : 5))];
      }
          let phoneshare0 = String.fromCharCode(101,95,52,51,95,105,110,116,101,114,108,101,97,118,101,0);
          let hooks2: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,122,95,57,51,0),538], [String.fromCharCode(101,95,49,56,95,122,101,114,111,105,110,103,0),45]]);
          let videocommonV = 2.0;
         libturbomodulejsijnit += "1";
         phoneshare0 += "2";
         hooks2 = new Map([[`${hooks2.size}`, parseInt(`${videocommonV}`) % (Math.max(hooks2.size, 1))]]);
         videocommonV /= Math.max(5, parseFloat(`${phoneshare0.length}`));
      let libsentryi = 8033985 >= splashH.length;
      do {
         splashH = [libturbomodulejsijnit.length | 1];
         if (libsentryi) {
            break;
         }
      } while ((!Array.from(orangetickq.values()).includes(splashH.length)) && libsentryi);
          let navigationR: Map<any, any> = new Map([[String.fromCharCode(98,111,114,100,101,114,101,100,95,54,95,51,54,0),false ], [String.fromCharCode(114,118,100,97,116,97,95,113,95,51,48,0),false ]]);
          let transfer0 = String.fromCharCode(115,108,111,112,101,95,53,95,55,55,0);
          let classesm: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,101,100,95,97,95,57,57,0),169], [String.fromCharCode(100,101,102,105,110,101,95,122,95,48,0),517], [String.fromCharCode(106,95,57,50,95,103,97,116,101,0),52]]);
         splashH.push(transfer0.length / 1);
         navigationR = new Map([[`${navigationR.size}`, 2 >> (Math.min(3, Math.abs(classesm.size)))]]);
         transfer0 = `${navigationR.size}`;
         classesm.set(`${navigationR.size}`, navigationR.size >> (Math.min(Math.abs(3), 2)));
      while (splashH.length >= 5) {
          let executorI = String.fromCharCode(119,95,54,52,95,111,102,102,101,116,0);
          let movies3 = 5.0;
          let detailQ: Array<any> = [String.fromCharCode(98,114,105,100,103,101,95,105,95,51,55,0), String.fromCharCode(106,95,55,51,95,116,101,97,114,0), String.fromCharCode(116,114,117,101,104,100,95,54,95,55,48,0)];
          let resendJ = String.fromCharCode(109,100,116,97,95,104,95,50,53,0);
         currentf = `${parseInt(`${movies3}`) ^ 3}`;
         executorI = `${resendJ.length | 2}`;
         movies3 /= Math.max(5, (executorI == String.fromCharCode(86,0) ? executorI.length : detailQ.length));
         detailQ.push(resendJ.length >> (Math.min(5, executorI.length)));
         break;
      }
         splashH.push(splashH.length);
      while (bootsplashV) {
         splashH.push(1);
         break;
      }
       let orangeH = 3;
      let gesturet = orangetickq.size <= 7433840;
      do {
         orangetickq = new Map([[`${splashH.length}`, (splashH.length ^ (bootsplashV ? 1 : 3))]]);
         if (gesturet) {
            break;
         }
      } while (gesturet && (currentf.startsWith(`${orangetickq.size}`)));
      fastforwardr += parseFloat(`${2}`);
   }
   while (libturbomodulejsijniq.startsWith(`${iconarrowrightblackD}`)) {
       let zhengpianf = String.fromCharCode(115,112,111,110,115,111,114,101,100,95,110,95,51,56,0);
      while (zhengpianf != zhengpianf) {
         zhengpianf += `${3 << (Math.min(1, zhengpianf.length))}`;
         break;
      }
          let othermatchdetailbge = 0;
          let predictionwin5: Array<any> = [738, 336];
          let targetv = 0.0;
         zhengpianf += `${zhengpianf.length * predictionwin5.length}`;
         othermatchdetailbge %= Math.max(parseInt(`${targetv}`), 1);
         predictionwin5.push(othermatchdetailbge + parseInt(`${targetv}`));
      for (let t = 0; t < 1; t++) {
         zhengpianf += `${(zhengpianf == String.fromCharCode(52,0) ? zhengpianf.length : zhengpianf.length)}`;
      }
      libturbomodulejsijniq += `${libturbomodulejsijniq.length}`;
      break;
   }
   for (let y = 0; y < 1; y++) {
      sigmobe /= Math.max(4, parseInt(`${match_}`) - 1);
   }
      subout7.set(`${match_}`, parseInt(`${match_}`) << (Math.min(5, Math.abs(parseInt(`${sigmobe}`)))));
   let baseQ = textV ? !textV : textV;
   do {
       let downloaderO = true;
       let iconplayj = 2.0;
         iconplayj /= Math.max(parseInt(`${iconplayj}`) / 1, 2);
      for (let a = 0; a < 2; a++) {
          let brightnessP = String.fromCharCode(115,95,54,95,105,115,112,97,116,99,104,0);
          let predictionarrow0 = 3.0;
          let suggestiony = 0.0;
          let settingM = false;
          let layoutV: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,112,105,100,0),716], [String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,50,95,49,50,0),751]]);
         iconplayj += ((settingM ? 4 : 5) ^ (downloaderO ? 5 : 1));
         brightnessP += "1";
         predictionarrow0 *= 1 ^ parseInt(`${suggestiony}`);
         suggestiony /= Math.max(4, parseFloat(`${2 - parseInt(`${suggestiony}`)}`));
         settingM = 90.56 > suggestiony || layoutV.size > 96;
         layoutV.set(brightnessP, 1);
      }
      if (5.49 < (iconplayj + 1.98) && 1.98 < iconplayj) {
         iconplayj -= (parseInt(`${iconplayj}`) ^ (downloaderO ? 5 : 4));
      }
      if (!downloaderO) {
         iconplayj /= Math.max(((downloaderO ? 5 : 4) | parseInt(`${iconplayj}`)), 3);
      }
      for (let l = 0; l < 1; l++) {
         iconplayj += (parseInt(`${iconplayj}`) - (downloaderO ? 3 : 5));
      }
      for (let d = 0; d < 2; d++) {
         iconplayj /= Math.max(2, parseInt(`${iconplayj}`) >> (Math.min(5, Math.abs(2))));
      }
      textV = (parseInt(`${fastforwardr}`) * libturbomodulejsijniq.length) > 92;
      if (baseQ) {
         break;
      }
   } while ((3 < libturbomodulejsijniq.length && !textV) && baseQ);
       let main_k5 = 2.0;
       let iconorientation_: Array<any> = [237, 980, 823];
          let libavformat5: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,115,98,99,100,115,112,0),String.fromCharCode(104,101,120,98,110,95,53,95,54,56,0)], [String.fromCharCode(121,95,53,51,95,110,97,114,114,111,119,0),String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,51,95,50,56,0)]]);
          let iconnointernetI = String.fromCharCode(110,95,55,54,95,114,101,102,108,101,99,116,105,111,110,0);
          let iconmegaphoneT: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,114,101,99,111,103,110,105,116,105,111,110,115,0),236], [String.fromCharCode(100,121,110,108,111,99,107,95,54,95,52,50,0),414], [String.fromCharCode(116,95,50,95,100,99,116,0),845]]);
         main_k5 -= (parseFloat(`${String.fromCharCode(103,0) == iconnointernetI ? iconnointernetI.length : iconmegaphoneT.size}`));
         libavformat5 = new Map([[`${libavformat5.size}`, 1]]);
      if (3.17 < (parseFloat(`${iconorientation_.length}`) * main_k5)) {
         iconorientation_.push(iconorientation_.length);
      }
         iconorientation_.push(parseInt(`${main_k5}`));
          let mbnative0 = false;
          let constantsH: Array<any> = [835, 886];
         main_k5 /= Math.max(parseFloat(`${3}`), 3);
         mbnative0 = !mbnative0 && constantsH.length < 40;
         constantsH.push(1);
         main_k5 += parseFloat(`${parseInt(`${main_k5}`) - 1}`);
         iconorientation_ = [2 % (Math.max(3, iconorientation_.length))];
      textV = (sansE.size ^ libturbomodulejsijniq.length) < 88;
      textV = shrinkU.length > 55;
      sansE.set(`${match_}`, subout7.size << (Math.min(2, Math.abs(parseInt(`${match_}`)))));
   if ((parseInt(`${sigmobe}`) / (Math.max(subout7.size, 6))) >= 1 && 4 >= (subout7.size >> (Math.min(Math.abs(1), 4)))) {
      subout7.set(`${match_}`, ((textV ? 4 : 5) | parseInt(`${match_}`)));
   }
      match_ += 3 | parseInt(`${iconarrowrightblackD}`);
      textV = 52 > shrinkU.length && sigmobe > 26.98;
   if (textV) {
       let appsK: Array<any> = [657, 171];
       let update_lhx = String.fromCharCode(110,95,51,50,95,99,112,105,97,0);
       let indicator8 = String.fromCharCode(110,95,52,57,95,107,101,121,119,111,114,100,115,0);
          let connectionb = 0.0;
         indicator8 += `${2 - parseInt(`${connectionb}`)}`;
      if (!indicator8.endsWith(`${update_lhx.length}`)) {
          let tempnodatagifw = String.fromCharCode(104,101,97,100,112,104,111,110,101,95,55,95,53,50,0);
          let updates0 = String.fromCharCode(117,95,52,54,95,117,110,109,97,112,0);
          let homeicone = 0.0;
          let notification8: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,115,111,114,101,99,101,105,118,101,0),false ], [String.fromCharCode(120,95,57,57,95,105,110,115,101,114,116,105,111,110,115,0),true ], [String.fromCharCode(105,99,99,112,95,110,95,57,50,0),true ]]);
          let cornerS: Array<any> = [780, 576, 244];
         update_lhx = `${2 ^ appsK.length}`;
         tempnodatagifw = `${cornerS.length >> (Math.min(Math.abs(1), 3))}`;
         updates0 = `${cornerS.length}`;
         homeicone += parseFloat(`${tempnodatagifw.length}`);
         notification8 = new Map([[`${notification8.size}`, 2]]);
      }
      while (4 > (2 / (Math.max(2, appsK.length)))) {
          let l_unlocke = 1.0;
          let suboutB = 4.0;
          let area1 = String.fromCharCode(115,95,55,53,95,113,117,111,116,101,0);
         update_lhx = `${update_lhx.length ^ appsK.length}`;
         l_unlocke -= parseFloat(`${parseInt(`${suboutB}`)}`);
         area1 = `${1 + parseInt(`${suboutB}`)}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
          let root5 = 3.0;
          let mimor = String.fromCharCode(114,95,49,53,95,115,101,113,117,101,110,99,101,114,0);
          let minivodn: Map<any, any> = new Map([[String.fromCharCode(107,95,51,95,110,101,119,116,101,107,0),223], [String.fromCharCode(112,114,111,103,114,101,115,115,95,103,95,53,56,0),419], [String.fromCharCode(100,105,114,112,95,119,95,55,54,0),770]]);
          let yellowanimationlive4 = 2.0;
         appsK = [minivodn.size];
         root5 += parseFloat(`${3 - mimor.length}`);
         mimor += `${1 << (Math.min(Math.abs(parseInt(`${root5}`)), 1))}`;
         minivodn.set(`${root5}`, parseInt(`${yellowanimationlive4}`) / 3);
         yellowanimationlive4 *= parseFloat(`${parseInt(`${root5}`) / (Math.max(mimor.length, 1))}`);
      }
         indicator8 += `${appsK.length % (Math.max(1, update_lhx.length))}`;
          let dycreatort = String.fromCharCode(110,95,53,57,0);
          let casting1 = 1;
          let notificationfillempty8 = 3.0;
         indicator8 += `${indicator8.length - parseInt(`${notificationfillempty8}`)}`;
         dycreatort = `${casting1}`;
         casting1 |= 1;
         notificationfillempty8 += casting1 >> (Math.min(dycreatort.length, 4));
       let blackx = true;
       let singaporeT = false;
      let themeY = 8697774 >= update_lhx.length;
      do {
         update_lhx = `${appsK.length}`;
         if (themeY) {
            break;
         }
      } while (themeY && (indicator8 == update_lhx));
      let inouttargetredA = singaporeT ? !singaporeT : singaporeT;
      do {
         singaporeT = update_lhx.length > indicator8.length;
         if (inouttargetredA) {
            break;
         }
      } while (inouttargetredA && (singaporeT));
      textV = shrinkU.length < parseInt(`${imageactionlivee}`);
   }
   while (1.21 > (cross6 * imageactionlivee) && (cross6 * 1.21) > 3.66) {
      cross6 += 2;
      break;
   }
   while ((1 - subout7.size) == 2 || (imageactionlivee / (Math.max(subout7.size, 4))) == 2.100) {
       let giflivestreamingt: Array<any> = [String.fromCharCode(122,95,54,95,100,101,113,117,101,117,101,100,0), String.fromCharCode(109,95,56,57,95,115,101,118,101,110,0)];
       let dependency3 = 2.0;
       let tinit_2e = String.fromCharCode(115,101,116,99,116,120,95,57,95,49,0);
      while (tinit_2e.length == 1) {
         dependency3 += parseInt(`${dependency3}`);
         break;
      }
         giflivestreamingt.push(parseInt(`${dependency3}`));
      let shrink2 = 6773253 <= tinit_2e.length;
      do {
          let rightS: Array<any> = [String.fromCharCode(104,95,52,52,95,111,112,99,111,100,101,115,0), String.fromCharCode(102,114,101,113,95,111,95,53,51,0)];
          let inouttargetred7 = String.fromCharCode(112,108,97,121,95,52,95,49,52,0);
          let libavcodec9 = 4.0;
         tinit_2e = `${parseInt(`${libavcodec9}`)}`;
         rightS.push(inouttargetred7.length << (Math.min(Math.abs(3), 3)));
         inouttargetred7 += "3";
         libavcodec9 *= rightS.length;
         if (shrink2) {
            break;
         }
      } while (shrink2 && ((parseInt(`${dependency3}`) + tinit_2e.length) >= 4));
         dependency3 /= Math.max(3, 1);
      for (let l = 0; l < 2; l++) {
          let temperaturek = 3.0;
          let loadingspinnerj = String.fromCharCode(115,116,114,116,111,107,95,50,95,53,53,0);
          let stylesM = 1.0;
         tinit_2e += "3";
         temperaturek *= parseFloat(`${parseInt(`${temperaturek}`)}`);
         loadingspinnerj += `${parseInt(`${stylesM}`) << (Math.min(2, Math.abs(3)))}`;
         stylesM *= 3 << (Math.min(3, Math.abs(parseInt(`${temperaturek}`))));
      }
          let combine5 = String.fromCharCode(115,101,116,115,95,103,95,55,49,0);
         tinit_2e += `${parseInt(`${dependency3}`) | tinit_2e.length}`;
         combine5 += "3";
      if (tinit_2e.endsWith(`${dependency3}`)) {
         dependency3 *= tinit_2e.length;
      }
       let faste = true;
       let positionfieldw = false;
         dependency3 += parseInt(`${dependency3}`);
      subout7 = new Map([[`${sansE.size}`, 2]]);
      break;
   }
   let dependenciesN = 6834954.0 >= cross6;
   do {
      cross6 -= libturbomodulejsijniq.length << (Math.min(Math.abs(1), 2));
      if (dependenciesN) {
         break;
      }
   } while ((cross6 >= 5.25) && dependenciesN);
   while (libturbomodulejsijniq.length == roundy.length) {
      roundy += `${iconclosel.length | parseInt(`${fastforwardr}`)}`;
      break;
   }
   for (let s = 0; s < 3; s++) {
       let borderless0: Map<any, any> = new Map([[String.fromCharCode(108,95,50,54,95,115,101,110,100,101,114,0),true ], [String.fromCharCode(115,108,105,100,101,95,110,95,57,53,0),true ], [String.fromCharCode(108,95,48,95,100,101,102,101,114,114,105,110,103,0),false ]]);
       let libreactnativejniX = String.fromCharCode(111,110,121,120,95,48,95,50,56,0);
       let twittera = String.fromCharCode(117,95,51,48,95,110,105,103,104,116,115,104,111,116,0);
      for (let a = 0; a < 2; a++) {
         twittera += "1";
      }
      if ((borderless0.size / (Math.max(5, 2))) <= 3) {
         libreactnativejniX = `${(String.fromCharCode(115,0) == twittera ? twittera.length : borderless0.size)}`;
      }
      while (!twittera.includes(libreactnativejniX)) {
         twittera = `${libreactnativejniX.length / (Math.max(twittera.length, 3))}`;
         break;
      }
         borderless0 = new Map([[libreactnativejniX, 2 / (Math.max(10, twittera.length))]]);
      for (let b = 0; b < 2; b++) {
         libreactnativejniX += `${twittera.length}`;
      }
      let libturbomodulejsijniy = 6155047 >= libreactnativejniX.length;
      do {
          let nativemodulek = 4.0;
          let downloadingg = String.fromCharCode(101,95,52,57,0);
         libreactnativejniX = `${borderless0.size}`;
         nativemodulek += parseInt(`${nativemodulek}`) << (Math.min(Math.abs(1), 5));
         downloadingg = `${downloadingg.length}`;
         if (libturbomodulejsijniy) {
            break;
         }
      } while ((!twittera.includes(`${libreactnativejniX.length}`)) && libturbomodulejsijniy);
       let catalogI: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,105,101,108,100,115,95,53,95,53,49,0),476], [String.fromCharCode(99,111,110,102,101,116,116,105,95,98,95,51,53,0),616]]);
       let googleQ: Map<any, any> = new Map([[String.fromCharCode(102,119,97,108,115,104,95,103,95,52,53,0),22], [String.fromCharCode(113,95,50,48,95,117,99,108,111,99,107,0),95]]);
         catalogI.set(`${catalogI.size}`, googleQ.size);
      if (twittera == libreactnativejniX) {
         libreactnativejniX = `${borderless0.size ^ libreactnativejniX.length}`;
      }
      fastforwardr -= parseFloat(`${2}`);
   }

    setSettings({ name: "none", value: 0 });
  };

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .enabled(enabled)
        .onStart((nativeEvent) => {
          runOnJS(setBrightVolumeShare)();
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onUpdate((nativeEvent) => {
          if (panCooldown.value > 0) {
            panCooldown.value--;
            return;
          } else panCooldown.value = 3;

          const dx = nativeEvent.x - previousPanPosition.value.x;
          const dy = nativeEvent.y - previousPanPosition.value.y;
          const dydx = dy / dx;
          const absDyDx = Math.abs(dydx);

          
          if (absDyDx > 10) {
            const leftX = Math.floor(width / 2 - 20);
            const rightX = Math.ceil(width / 2 + 20);
            if (
              nativeEvent.x <= leftX &&
              (settings.name === "none" || settings.name === "brightness")
            ) {
              runOnJS(onBrightnessChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            } else if (
              nativeEvent.x >= rightX &&
              (settings.name === "none" || settings.name === "countdownIconplayActive")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "newsshareMerger" &&
            (settings.name === "none" || settings.name === "progress")
          ) {
            runOnJS(onProgressChange)(nativeEvent.translationX);
          }

          
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onEnd(() => runOnJS(resetSettings)()),
    [previousPanPosition.value, enabled, settings]
  );

  const doubleTap = useMemo(
    () =>
      Gesture.Tap()
        .numberOfTaps(2)
        .enabled(enabled)
        .onStart((nativeEvent) => {
          isDoubleTap.value = true;

          const leftX = Math.floor(width / 2 - 20);
          const rightX = Math.ceil(width / 2 + 20);
          if (nativeEvent.x <= leftX) {
            runOnJS(onSkipBackwards)();
          } else if (nativeEvent.x >= rightX) {
            runOnJS(onSkipForward)();
          }
        }),
    [enabled]
  );

  
  
  
  
  
  
  

  const singleTap = useCallback(
    debounce(() => {
       let window_0oI = 0.0;
    let relatedz: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,99,105,110,101,109,97,0),String.fromCharCode(105,110,115,116,101,97,100,95,111,95,57,52,0)], [String.fromCharCode(114,95,56,55,95,98,97,107,101,0),String.fromCharCode(99,95,51,51,95,117,115,101,100,0)], [String.fromCharCode(121,95,55,55,95,100,100,115,116,0),String.fromCharCode(97,95,55,51,95,111,97,117,116,104,0)]]);
    let codegenv = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,57,95,52,53,0);
    let crossi = String.fromCharCode(114,103,98,116,111,121,118,95,48,95,57,0);
    let containerZ: Array<any> = [962, 505, 636];
    let leaguea: Array<any> = [212, 991, 111];
    let shrinkK: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,107,109,118,99,0),true ], [String.fromCharCode(117,95,52,49,95,103,114,97,109,115,0),false ], [String.fromCharCode(101,95,53,54,95,104,97,114,100,119,97,114,101,0),false ]]);
    let long_jz: Map<any, any> = new Map([[String.fromCharCode(107,98,100,119,105,110,95,115,95,49,51,0),845], [String.fromCharCode(101,95,50,55,95,99,111,110,116,114,105,98,117,116,105,110,103,0),951], [String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,117,95,54,49,0),938]]);
    let x_unlockW = 3;
      codegenv += `${codegenv.length * 1}`;
      codegenv = `${2 * long_jz.size}`;
   if (long_jz.get(`${window_0oI}`) == null) {
      window_0oI *= 2;
   }
   let statisticsc = 6843702 <= relatedz.size;
   do {
      relatedz = new Map([[`${relatedz.size}`, codegenv.length]]);
      if (statisticsc) {
         break;
      }
   } while (((codegenv.length | 2) > 1 || 2 > (relatedz.size | codegenv.length)) && statisticsc);
       let footballm = 4.0;
      for (let e = 0; e < 1; e++) {
          let basketballhometeamF: Map<any, any> = new Map([[String.fromCharCode(107,95,56,56,95,108,105,98,118,101,114,115,105,111,110,0),true ], [String.fromCharCode(112,95,57,53,95,97,117,116,104,105,110,102,111,0),true ]]);
          let debugO = String.fromCharCode(112,111,108,108,101,114,95,101,95,56,0);
          let videovarS: Array<any> = [756, 975];
         footballm /= Math.max(3, basketballhometeamF.size);
         basketballhometeamF = new Map([[`${videovarS.length}`, 3 * videovarS.length]]);
         debugO += `${(debugO == String.fromCharCode(112,0) ? debugO.length : videovarS.length)}`;
      }
         footballm /= Math.max(parseInt(`${footballm}`), 2);
      let download7 = 8960010.0 >= footballm;
      do {
          let changeM = String.fromCharCode(114,111,117,116,101,114,95,119,95,56,50,0);
          let specu = 4;
          let untickD = 3.0;
         footballm *= 1;
         changeM = `${specu}`;
         specu >>= Math.min(4, Math.abs(3));
         untickD /= Math.max(parseFloat(`${specu ^ changeM.length}`), 3);
         if (download7) {
            break;
         }
      } while ((footballm >= footballm) && download7);
      crossi += "3";
   for (let g = 0; g < 2; g++) {
      crossi = `${parseInt(`${window_0oI}`)}`;
   }
       let floaterC = String.fromCharCode(114,101,112,108,97,99,101,95,108,95,55,50,0);
       let videojsQ = String.fromCharCode(100,95,55,50,95,98,111,110,106,111,117,114,0);
       let chatC: Array<any> = [592, 253, 330];
       let nativeu: Array<any> = [747, 16];
       let greytickf: Map<any, any> = new Map([[String.fromCharCode(99,104,101,118,114,111,110,95,120,95,51,50,0),String.fromCharCode(121,95,54,56,95,115,119,97,112,112,101,114,0)], [String.fromCharCode(108,117,116,121,117,118,95,108,95,53,53,0),String.fromCharCode(116,95,51,57,95,97,118,102,111,114,109,97,116,0)]]);
       let iconwatchu: Map<any, any> = new Map([[String.fromCharCode(97,112,111,115,95,103,95,53,55,0),377], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,115,95,50,49,0),55]]);
         iconwatchu.set(floaterC, (String.fromCharCode(57,0) == floaterC ? floaterC.length : nativeu.length));
         iconwatchu = new Map([[`${chatC.length}`, nativeu.length & chatC.length]]);
         nativeu = [(videojsQ == String.fromCharCode(54,0) ? nativeu.length : videojsQ.length)];
         chatC = [chatC.length];
      long_jz.set(floaterC, relatedz.size >> (Math.min(floaterC.length, 5)));

      if (!isDoubleTap.value) {

      crossi = "3";
   if (relatedz.size >= 4) {
       let footballfieldq: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,100,95,50,95,55,52,0),false ], [String.fromCharCode(110,95,53,0),false ]]);
       let updates_ = String.fromCharCode(102,95,54,50,95,99,117,115,116,111,109,0);
       let gifgoalbg3 = 4.0;
          let shirtI = false;
          let yellowP = String.fromCharCode(97,102,105,114,95,115,95,52,55,0);
          let description_4aW = String.fromCharCode(110,95,57,53,95,109,98,101,100,103,101,0);
         updates_ += `${parseInt(`${gifgoalbg3}`) * 2}`;
         shirtI = yellowP.includes(`${shirtI}`);
         yellowP = `${description_4aW.length}`;
         description_4aW += "2";
      let sellmathbackgroundi = footballfieldq.size <= 7061085;
      do {
          let controls5: Array<any> = [989, 535];
          let iconviewerE: Array<any> = [775, 765];
          let main_oW = String.fromCharCode(115,104,97,114,101,115,95,116,95,57,53,0);
          let dropdownx = 3.0;
          let roundy = String.fromCharCode(109,95,51,56,95,115,101,97,108,0);
         footballfieldq = new Map([[`${controls5.length}`, controls5.length]]);
         iconviewerE = [parseInt(`${dropdownx}`) >> (Math.min(5, Math.abs(1)))];
         main_oW = `${1 * iconviewerE.length}`;
         dropdownx *= roundy.length;
         roundy += `${(main_oW == String.fromCharCode(115,0) ? main_oW.length : iconviewerE.length)}`;
         if (sellmathbackgroundi) {
            break;
         }
      } while (((gifgoalbg3 - 4.49) >= 4.100 || (4.49 - gifgoalbg3) >= 5.23) && sellmathbackgroundi);
         updates_ += `${footballfieldq.size / (Math.max(1, 3))}`;
       let taiwan6 = 5;
      if ((taiwan6 - 2) <= 2 || (2 - footballfieldq.size) <= 1) {
          let championo = String.fromCharCode(115,119,115,99,97,108,101,95,98,95,54,57,0);
          let bridgeL: Map<any, any> = new Map([[String.fromCharCode(100,108,116,97,95,53,95,57,57,0),373], [String.fromCharCode(116,95,54,48,95,116,119,105,99,101,0),532], [String.fromCharCode(99,108,111,115,101,95,57,95,55,51,0),820]]);
          let knewsF = String.fromCharCode(102,111,108,108,111,119,101,114,115,95,99,95,53,57,0);
          let long_vch: Array<any> = [172, 594, 426];
         taiwan6 |= (String.fromCharCode(65,0) == championo ? bridgeL.size : championo.length);
         bridgeL = new Map([[`${long_vch.length}`, 2 << (Math.min(1, knewsF.length))]]);
         knewsF += `${long_vch.length}`;
      }
      if (3 == footballfieldq.size) {
         taiwan6 |= 2 >> (Math.min(Math.abs(taiwan6), 4));
      }
      for (let y = 0; y < 1; y++) {
         gifgoalbg3 /= Math.max(2, 2 << (Math.min(3, Math.abs(footballfieldq.size))));
      }
         footballfieldq = new Map([[`${footballfieldq.size}`, taiwan6]]);
      for (let a = 0; a < 2; a++) {
          let becomeJ = String.fromCharCode(117,95,55,56,95,101,97,115,101,0);
          let profilepicu: Array<any> = [111, 355, 662];
          let inouttargetredu = false;
          let overlay5 = String.fromCharCode(109,111,100,101,120,112,95,117,95,54,49,0);
          let componentU = String.fromCharCode(116,120,105,100,95,99,95,50,54,0);
         footballfieldq.set(`${taiwan6}`, 3 % (Math.max(5, footballfieldq.size)));
         becomeJ += `${overlay5.length}`;
         profilepicu = [((inouttargetredu ? 5 : 4))];
         overlay5 += `${profilepicu.length % (Math.max(7, componentU.length))}`;
         componentU += "2";
      }
      window_0oI -= 3 & codegenv.length;
   }
      codegenv += `${leaguea.length}`;
   while (5 < (shrinkK.size & 1) || (leaguea.length & shrinkK.size) < 1) {
      shrinkK = new Map([[`${relatedz.size}`, 1 * relatedz.size]]);
      break;
   }
      window_0oI -= codegenv.length >> (Math.min(4, Math.abs(parseInt(`${window_0oI}`))));
   if (containerZ.includes(window_0oI)) {
       let homeiconV: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,110,101,95,53,95,50,53,0),334], [String.fromCharCode(111,110,103,111,105,110,103,95,116,95,57,56,0),103]]);
         homeiconV = new Map([[`${homeiconV.size}`, homeiconV.size]]);
      for (let w = 0; w < 3; w++) {
         homeiconV.set(`${homeiconV.size}`, homeiconV.size + 2);
      }
         homeiconV = new Map([[`${homeiconV.size}`, homeiconV.size % 1]]);
      containerZ.push(long_jz.size);
   }
   for (let h = 0; h < 2; h++) {
      shrinkK.set(`${containerZ.length}`, 3);
   }
        onSingleTap(isDoubleTap.value);
      }

      isDoubleTap.value = false;
    }, 200),
    [onSingleTap]
  );

  const composed = disableControlsExceptTap ? null : vodType === 'live' ? pan : Gesture.Simultaneous(pan, doubleTap);

  return (
    <TouchableWithoutFeedback onPress={singleTap}>
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        {composed ? (
          <GestureDetector gesture={composed}>
            <View style={{ flex: 1 }}>
              {children}
              {showSlider && settings.name === "brightness" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "anythinkModeIcontransferclub" : "iconbellIconnewchatMatchinactive"}
                />
              )}
              {showSlider && settings.name === "countdownIconplayActive" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "networkLogouserPhilippines" : "binddatasRenew"}
                />
              )}
            </View>
          </GestureDetector>
        ) : (
          <View style={{ flex: 1 }}>
            {children}
            {showSlider && settings.name === "brightness" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "anythinkModeIcontransferclub" : "iconbellIconnewchatMatchinactive"}
              />
            )}
            {showSlider && settings.name === "countdownIconplayActive" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "networkLogouserPhilippines" : "binddatasRenew"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
