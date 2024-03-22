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
import BrightnessVolumeSlider from "./mayi_rewardvideo";
import { debounce } from "lodash";
type mayi_GoogleViews = {
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

type mayi_Backward = {
  name: "progress" | "brightness" | "selectLibavcodecGifgoalbg" | "none";
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
}: mayi_GoogleViews) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<mayi_Backward>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let launchz = String.fromCharCode(112,114,101,104,101,97,116,95,97,95,51,0);
    let debugd = 2.0;
    let pushu: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,100,105,115,101,109,118,111,119,101,108,101,100,0),String.fromCharCode(106,111,105,110,101,100,95,108,95,50,56,0)], [String.fromCharCode(108,115,112,100,108,112,99,95,97,95,53,50,0),String.fromCharCode(106,95,53,56,95,115,99,97,108,101,109,111,100,101,0)], [String.fromCharCode(101,95,57,51,95,100,111,99,115,105,122,101,0),String.fromCharCode(98,97,115,101,108,105,110,101,95,117,95,54,54,0)]]);
    let areaI = String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,49,95,50,56,0);
    let rncoref = String.fromCharCode(115,95,49,56,95,112,114,111,98,108,101,109,115,0);
    let bootQ = 2.0;
    let policyl = 1.0;
    let i_image6: Map<any, any> = new Map([[String.fromCharCode(119,95,52,50,95,99,108,97,122,122,0),String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,106,95,49,57,0)], [String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,100,95,50,56,0),String.fromCharCode(112,95,54,53,95,109,106,112,101,103,97,0)]]);
    let profileY = 2.0;
    let templateprocessorT = String.fromCharCode(101,99,114,101,116,95,112,95,56,57,0);
    let register_g1 = String.fromCharCode(121,95,54,49,95,103,97,116,104,101,114,0);
      rncoref = `${(String.fromCharCode(49,0) == rncoref ? rncoref.length : parseInt(`${bootQ}`))}`;
   let dice8 = 8785023.0 >= debugd;
   do {
       let iconclosewhitewithbga: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,115,115,101,100,105,102,102,0),true ], [String.fromCharCode(104,95,52,95,109,101,109,122,101,114,111,0),false ]]);
       let iconstarj = 3.0;
       let basketballawayteaml = true;
      if (1.79 <= (iconstarj / 4.23)) {
         basketballawayteaml = iconstarj > iconclosewhitewithbga.size;
      }
         iconclosewhitewithbga = new Map([[`${iconclosewhitewithbga.size}`, ((basketballawayteaml ? 1 : 1) & iconclosewhitewithbga.size)]]);
      let scheduleK = basketballawayteaml ? !basketballawayteaml : basketballawayteaml;
      do {
          let filter1 = 1;
         basketballawayteaml = 7.56 > iconstarj && filter1 > 63;
         if (scheduleK) {
            break;
         }
      } while (((iconclosewhitewithbga.size % 5) == 2 || 5 == iconclosewhitewithbga.size) && scheduleK);
      let greytickf = 9636313 >= iconclosewhitewithbga.size;
      do {
         iconclosewhitewithbga = new Map([[`${basketballawayteaml}`, 2 ^ parseInt(`${iconstarj}`)]]);
         if (greytickf) {
            break;
         }
      } while (((iconstarj * 4.46) > 2.80 && 1 > (2 / (Math.max(4, iconclosewhitewithbga.size)))) && greytickf);
         iconclosewhitewithbga = new Map([[`${iconclosewhitewithbga.size}`, 1]]);
         iconstarj *= parseInt(`${iconstarj}`) * iconclosewhitewithbga.size;
      while (5 >= (iconclosewhitewithbga.size ^ 1)) {
          let topicP = 2.0;
          let mailS = 5;
          let iconwatchnow1 = true;
          let hookQ: Map<any, any> = new Map([[String.fromCharCode(115,116,97,103,105,110,103,95,119,95,49,51,0),true ], [String.fromCharCode(112,114,105,110,116,97,98,108,101,95,49,95,53,56,0),true ], [String.fromCharCode(98,101,99,111,109,101,95,51,95,49,55,0),true ]]);
          let updatesf = true;
         basketballawayteaml = 43.23 > iconstarj;
         topicP -= parseFloat(`${1 * mailS}`);
         mailS &= (hookQ.size - (iconwatchnow1 ? 1 : 5));
         iconwatchnow1 = (hookQ.size ^ mailS) > 55;
         updatesf = (!iconwatchnow1 ? updatesf : !iconwatchnow1);
         break;
      }
      while ((5.77 * iconstarj) > 1.71) {
          let weiboy = 0.0;
          let libavutilR = 3.0;
          let frame_hc: Array<any> = [391, 634];
          let popupx = String.fromCharCode(109,118,115,101,116,95,51,95,55,0);
          let qaagR = String.fromCharCode(100,117,109,112,101,114,95,97,95,57,57,0);
         basketballawayteaml = weiboy > 7.100;
         weiboy -= parseFloat(`${parseInt(`${libavutilR}`)}`);
         libavutilR *= parseFloat(`${1}`);
         frame_hc = [parseInt(`${libavutilR}`)];
         popupx += `${popupx.length - 2}`;
         qaagR = `${qaagR.length}`;
         break;
      }
       let basketballtrophya: Map<any, any> = new Map([[String.fromCharCode(107,95,51,48,95,112,114,111,112,111,114,116,105,111,110,115,0),String.fromCharCode(113,95,49,53,95,114,101,99,116,97,110,103,108,101,115,0)], [String.fromCharCode(100,111,108,108,97,114,95,97,95,49,55,0),String.fromCharCode(99,95,53,57,95,106,112,101,103,108,115,100,101,99,0)], [String.fromCharCode(100,95,54,95,114,116,112,0),String.fromCharCode(110,117,108,108,105,102,95,110,95,49,53,0)]]);
      debugd /= Math.max(1, 3);
      if (dice8) {
         break;
      }
   } while ((rncoref.startsWith(`${debugd}`)) && dice8);
   while (areaI.length > launchz.length) {
       let wnewsG: Array<any> = [186, 131, 694];
       let libfbh = String.fromCharCode(117,95,49,51,95,102,108,97,99,101,110,99,0);
       let libruntimeexecutore = String.fromCharCode(112,97,103,101,115,105,122,101,95,116,95,57,51,0);
       let select1 = String.fromCharCode(100,95,56,53,95,109,97,106,0);
       let traminie = String.fromCharCode(119,95,55,50,95,114,101,119,114,105,116,101,114,0);
      let moduleso = wnewsG.length >= 5981408;
      do {
         wnewsG = [select1.length / 3];
         if (moduleso) {
            break;
         }
      } while (moduleso && ((wnewsG.length % (Math.max(libfbh.length, 6))) < 4));
       let rewardvideo_ = String.fromCharCode(99,95,57,56,95,114,108,105,110,101,0);
       let analyticg = String.fromCharCode(104,95,57,95,111,112,101,114,97,116,111,114,0);
      while (libfbh != String.fromCharCode(55,0)) {
         traminie += `${wnewsG.length >> (Math.min(Math.abs(1), 2))}`;
         break;
      }
      if (rewardvideo_.startsWith(`${wnewsG.length}`)) {
         wnewsG = [1 * wnewsG.length];
      }
          let closeF = String.fromCharCode(106,95,55,53,95,113,117,101,117,101,0);
          let awayteamfieldP = String.fromCharCode(100,105,114,97,99,95,99,95,55,56,0);
         rewardvideo_ += `${libruntimeexecutore.length & libfbh.length}`;
         closeF += `${awayteamfieldP.length >> (Math.min(Math.abs(3), 4))}`;
         awayteamfieldP = `${awayteamfieldP.length}`;
      let libfby = analyticg.length >= 6938405;
      do {
          let mbbanner4 = true;
          let point4 = 4.0;
         analyticg += `${select1.length}`;
         mbbanner4 = 36.61 < point4;
         point4 /= Math.max(parseFloat(`${parseInt(`${point4}`) / 3}`), 1);
         if (libfby) {
            break;
         }
      } while ((select1.length < analyticg.length) && libfby);
         select1 += `${2 ^ rewardvideo_.length}`;
         select1 = "3";
      launchz += "1";
      break;
   }
      launchz += `${2 << (Math.min(4, Math.abs(parseInt(`${debugd}`))))}`;
      bootQ -= parseInt(`${policyl}`);

    setShowSlider(true);

       let resend0 = true;
       let submitB = String.fromCharCode(119,95,53,57,95,97,109,114,119,98,0);
       let i_centerI = String.fromCharCode(112,111,108,105,99,121,95,110,95,55,57,0);
       let predictionactivev = String.fromCharCode(104,95,51,49,95,111,117,116,100,101,118,115,0);
      while (i_centerI.length < predictionactivev.length) {
          let turnG = String.fromCharCode(105,115,102,105,110,105,116,101,95,110,95,50,48,0);
          let commentQ = 2.0;
          let shootyesgoalW = 4.0;
          let expiredM = 4;
         i_centerI += `${parseInt(`${shootyesgoalW}`)}`;
         turnG += `${parseInt(`${commentQ}`) << (Math.min(1, Math.abs(3)))}`;
         commentQ -= parseFloat(`${turnG.length}`);
         expiredM &= parseInt(`${commentQ}`);
         break;
      }
      let robotoh = 5897913 <= submitB.length;
      do {
         submitB += `${3 ^ submitB.length}`;
         if (robotoh) {
            break;
         }
      } while ((submitB.length > 2 && resend0) && robotoh);
      let short_ybv = 6875386 <= i_centerI.length;
      do {
         i_centerI += `${predictionactivev.length}`;
         if (short_ybv) {
            break;
         }
      } while ((predictionactivev != String.fromCharCode(99,0)) && short_ybv);
       let downloadf: Array<any> = [613, 772];
       let cornerkickY: Array<any> = [234, 238];
         cornerkickY = [(String.fromCharCode(101,0) == submitB ? submitB.length : i_centerI.length)];
      policyl /= Math.max(4, parseFloat(`${parseInt(`${bootQ}`)}`));
       let libswresamplen = String.fromCharCode(111,112,117,115,95,115,95,55,49,0);
       let iconlogout7 = String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,95,103,95,55,56,0);
      let otherP = iconlogout7 == String.fromCharCode(113,106,49,108,0);
      do {
         iconlogout7 += "1";
         if (otherP) {
            break;
         }
      } while ((libswresamplen.endsWith(`${iconlogout7.length}`)) && otherP);
      for (let i = 0; i < 2; i++) {
          let executor3 = 0.0;
          let manifest7 = String.fromCharCode(110,95,57,55,95,109,117,108,104,105,0);
          let schedule2 = true;
          let verticalL = 4.0;
          let phoneA = String.fromCharCode(101,95,51,50,95,103,114,97,121,97,0);
         libswresamplen += `${parseInt(`${executor3}`)}`;
         manifest7 = `${phoneA.length}`;
         schedule2 = String.fromCharCode(99,0) == phoneA;
         verticalL -= parseFloat(`${phoneA.length}`);
      }
          let minimizeY = String.fromCharCode(100,95,54,48,95,108,105,98,115,115,104,0);
         iconlogout7 += "2";
         minimizeY = `${2 & minimizeY.length}`;
      for (let z = 0; z < 3; z++) {
          let modeq: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,101,110,104,97,110,99,101,0),417], [String.fromCharCode(109,115,110,119,99,95,102,95,53,50,0),532]]);
          let liveshareV = 1.0;
          let fileR = false;
          let saveC = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,102,95,52,48,0);
          let libsentryX = String.fromCharCode(102,95,53,51,95,100,101,99,114,101,109,101,110,116,0);
         iconlogout7 = `${2 << (Math.min(2, libswresamplen.length))}`;
         modeq = new Map([[saveC, (String.fromCharCode(112,0) == saveC ? saveC.length : (fileR ? 4 : 4))]]);
         liveshareV -= ((fileR ? 4 : 1));
         libsentryX += `${(saveC == String.fromCharCode(84,0) ? saveC.length : modeq.size)}`;
      }
      let profilepice = iconlogout7.length <= 5050192;
      do {
         iconlogout7 += `${iconlogout7.length}`;
         if (profilepice) {
            break;
         }
      } while (profilepice && (libswresamplen != String.fromCharCode(99,0)));
         libswresamplen = `${libswresamplen.length * 1}`;
      debugd += 3;
      pushu = new Map([[launchz, launchz.length]]);
      pushu.set(`${bootQ}`, parseInt(`${bootQ}`));
   if (areaI.length > launchz.length) {
      areaI = `${parseInt(`${debugd}`)}`;
   }
    clearTimeout(sliderTimeout.current);

      bootQ /= Math.max(5, 3 & parseInt(`${bootQ}`));
   for (let v = 0; v < 1; v++) {
       let canvasp = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,52,95,52,54,0);
         canvasp += `${1 | canvasp.length}`;
      let downloadingV = canvasp.length >= 9585135;
      do {
         canvasp = `${canvasp.length}`;
         if (downloadingV) {
            break;
         }
      } while (downloadingV && (canvasp.length == canvasp.length));
          let xvodd = String.fromCharCode(122,95,55,54,95,112,105,120,101,108,102,111,114,109,97,116,0);
          let zhengpian4: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,117,95,55,95,52,48,0),364], [String.fromCharCode(108,95,53,52,95,102,97,110,111,117,116,0),433]]);
         canvasp = `${(String.fromCharCode(82,0) == canvasp ? canvasp.length : xvodd.length)}`;
         xvodd += `${3 + zhengpian4.size}`;
         zhengpian4.set(`${zhengpian4.size}`, zhengpian4.size);
      debugd += 1;
   }
   let infoM = rncoref == String.fromCharCode(100,99,103,120,48,95,56,0);
   do {
      rncoref += `${parseInt(`${debugd}`)}`;
      if (infoM) {
         break;
      }
   } while ((1.61 <= (debugd + 2.13) || (debugd + rncoref.length) <= 2.13) && infoM);
      rncoref += `${parseInt(`${profileY}`) | i_image6.size}`;
      profileY *= parseFloat(`${parseInt(`${policyl}`) % (Math.max(pushu.size, 6))}`);
    sliderTimeout.current = setTimeout(() => {

   while ((profileY + parseFloat(`${launchz.length}`)) == 2.11 || (profileY + 2.11) == 4.18) {
      launchz = `${parseInt(`${debugd}`)}`;
      break;
   }
      policyl *= parseFloat(`${parseInt(`${bootQ}`)}`);
   if (areaI.length < rncoref.length) {
      areaI = "1";
   }
      debugd += rncoref.length;
   while (rncoref.includes(`${policyl}`)) {
      policyl -= parseFloat(`${pushu.size}`);
      break;
   }
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let successJ = String.fromCharCode(114,105,103,104,116,109,111,115,116,95,122,95,53,50,0);
    let overlayl = 4.0;
    let graphp = String.fromCharCode(109,95,53,55,95,112,97,103,101,115,105,122,101,0);
    let codegen1: Map<any, any> = new Map([[String.fromCharCode(114,97,110,100,111,109,110,101,115,115,95,115,95,57,53,0),40], [String.fromCharCode(105,110,102,111,108,100,101,114,95,51,95,51,53,0),646], [String.fromCharCode(99,95,57,53,95,103,101,116,108,97,121,111,117,116,0),308]]);
    let rootZ: Map<any, any> = new Map([[String.fromCharCode(111,114,105,103,95,109,95,49,0),329], [String.fromCharCode(122,95,50,52,95,112,97,103,105,110,103,0),522]]);
    let iconsubssuccessX: Array<any> = [485, 717];
    let crownd = String.fromCharCode(114,105,103,104,116,115,95,56,95,56,48,0);
    let spinnerl = 5.0;
    let libimagepipelinew = String.fromCharCode(99,104,114,111,109,97,95,106,95,49,55,0);
   while (crownd.length >= 1) {
      crownd += `${2 ^ codegen1.size}`;
      break;
   }
   for (let q = 0; q < 2; q++) {
      iconsubssuccessX = [iconsubssuccessX.length];
   }
       let buttonZ = String.fromCharCode(116,95,51,95,114,116,112,114,101,99,101,105,118,101,114,0);
       let short_4dd = String.fromCharCode(112,97,117,115,101,95,120,95,54,53,0);
          let downloadD = 0.0;
          let binddatasf = 5.0;
          let iconqqW = 3;
         short_4dd = `${parseInt(`${downloadD}`)}`;
         downloadD *= parseFloat(`${parseInt(`${binddatasf}`) >> (Math.min(4, Math.abs(iconqqW)))}`);
         binddatasf -= iconqqW * parseInt(`${binddatasf}`);
         short_4dd = `${(buttonZ == String.fromCharCode(122,0) ? short_4dd.length : buttonZ.length)}`;
         buttonZ += `${short_4dd.length % 2}`;
          let rewardh = String.fromCharCode(118,95,50,95,102,105,110,116,0);
         buttonZ = `${rewardh.length ^ buttonZ.length}`;
       let e_count5 = 2.0;
       let moduleF = String.fromCharCode(119,102,101,120,95,109,95,50,52,0);
      overlayl += codegen1.size;
   for (let c = 0; c < 3; c++) {
       let stylesy = String.fromCharCode(97,115,99,105,105,95,57,95,52,51,0);
       let exampleimagek = String.fromCharCode(110,117,109,115,95,53,95,51,53,0);
       let delegate_xJ = String.fromCharCode(119,95,49,57,0);
       let entrya = String.fromCharCode(101,95,56,95,99,111,117,110,116,115,0);
       let static_5kC = String.fromCharCode(114,95,56,48,95,107,109,115,0);
          let turny = false;
         exampleimagek = `${((turny ? 5 : 5) >> (Math.min(entrya.length, 4)))}`;
         entrya = `${(entrya == String.fromCharCode(101,0) ? entrya.length : stylesy.length)}`;
      let securityZ = 9398986 <= entrya.length;
      do {
          let basketballawayteamc = 3.0;
          let settings9 = 1;
          let promotionk = String.fromCharCode(109,97,108,108,111,99,122,95,116,95,53,52,0);
         entrya = `${static_5kC.length - exampleimagek.length}`;
         basketballawayteamc *= promotionk.length;
         settings9 /= Math.max(2, 2);
         promotionk = `${parseInt(`${basketballawayteamc}`)}`;
         if (securityZ) {
            break;
         }
      } while (securityZ && (1 > entrya.length || delegate_xJ.length > 1));
      if (!static_5kC.endsWith(`${delegate_xJ.length}`)) {
         delegate_xJ += `${stylesy.length}`;
      }
       let mbjscommonM = String.fromCharCode(98,95,50,55,95,97,108,101,114,116,0);
       let foregroundB = String.fromCharCode(120,95,52,49,95,100,97,115,104,0);
      let libfabricjni7 = static_5kC == String.fromCharCode(110,95,105,106,57,100,111,54,121,50,0);
      do {
         static_5kC += `${2 ^ delegate_xJ.length}`;
         if (libfabricjni7) {
            break;
         }
      } while ((delegate_xJ.length <= 3) && libfabricjni7);
      for (let p = 0; p < 1; p++) {
         entrya += `${delegate_xJ.length}`;
      }
      if (foregroundB != String.fromCharCode(79,0)) {
         mbjscommonM += `${1 % (Math.max(6, entrya.length))}`;
      }
      if (mbjscommonM.startsWith(static_5kC)) {
          let videobufferloadingh = false;
          let navigationd: Array<any> = [455, 93, 240];
          let blacklistJ: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,99,95,51,57,0),690], [String.fromCharCode(115,101,103,116,114,101,101,95,109,95,52,53,0),511]]);
          let bootsplashG = String.fromCharCode(97,114,103,115,95,119,95,56,53,0);
         mbjscommonM = `${navigationd.length}`;
         videobufferloadingh = 56 == bootsplashG.length || 56 == blacklistJ.size;
         navigationd = [blacklistJ.size];
         bootsplashG += `${bootsplashG.length * blacklistJ.size}`;
      }
          let modity9 = String.fromCharCode(97,95,51,54,95,115,116,114,110,108,101,110,0);
          let zoomP: Array<any> = [String.fromCharCode(108,101,110,103,116,104,95,49,95,57,48,0), String.fromCharCode(121,95,50,51,95,109,97,112,112,101,114,0)];
         entrya += `${exampleimagek.length}`;
         modity9 = `${modity9.length}`;
         zoomP = [(modity9 == String.fromCharCode(117,0) ? modity9.length : zoomP.length)];
      for (let q = 0; q < 3; q++) {
         static_5kC = "3";
      }
      while (exampleimagek.length < entrya.length) {
         entrya += `${delegate_xJ.length}`;
         break;
      }
      if (exampleimagek.endsWith(stylesy)) {
         exampleimagek = `${static_5kC.length}`;
      }
          let icone: Array<any> = [881, 603];
          let manifestX = String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,102,95,55,52,0);
          let owngoalv = 1.0;
         delegate_xJ += `${foregroundB.length >> (Math.min(Math.abs(1), 1))}`;
         icone = [3 / (Math.max(7, parseInt(`${owngoalv}`)))];
         manifestX += `${icone.length}`;
         owngoalv *= (parseFloat(`${manifestX == String.fromCharCode(54,0) ? manifestX.length : icone.length}`));
          let editg: Map<any, any> = new Map([[String.fromCharCode(102,95,56,57,95,113,112,101,103,0),false ], [String.fromCharCode(109,105,110,116,95,102,95,55,51,0),false ], [String.fromCharCode(99,108,97,122,122,95,113,95,54,48,0),false ]]);
         foregroundB += `${editg.size}`;
      iconsubssuccessX = [rootZ.size | codegen1.size];
   }
      overlayl *= crownd.length & 3;
      crownd += "1";
   let time_lW = rootZ.size >= 5440703;
   do {
      rootZ = new Map([[`${overlayl}`, 3]]);
      if (time_lW) {
         break;
      }
   } while (time_lW && (5 >= codegen1.size));
   let search4 = overlayl <= 4971155.0;
   do {
       let gpayH = String.fromCharCode(116,95,55,56,95,114,111,102,105,108,101,0);
       let cedbadcebfbfbfbcfecbc5: Array<any> = [631, 235, 462];
       let popupy = String.fromCharCode(102,95,53,49,95,105,110,100,105,110,103,0);
      while ((cedbadcebfbfbfbcfecbc5.length + gpayH.length) <= 5) {
          let libavdeviceO = false;
          let issubh = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,115,95,54,56,0);
          let defaultroombg_ = String.fromCharCode(121,95,49,56,95,114,101,112,108,97,121,101,100,0);
          let termsT = 5.0;
         cedbadcebfbfbfbcfecbc5 = [cedbadcebfbfbfbcfecbc5.length + 2];
         libavdeviceO = defaultroombg_.length >= issubh.length;
         issubh += `${3 + parseInt(`${termsT}`)}`;
         defaultroombg_ += `${defaultroombg_.length + issubh.length}`;
         termsT *= 2;
         break;
      }
         cedbadcebfbfbfbcfecbc5.push(2);
      if ((popupy.length & cedbadcebfbfbfbcfecbc5.length) == 3 && 4 == (popupy.length & 3)) {
         popupy = `${cedbadcebfbfbfbcfecbc5.length * gpayH.length}`;
      }
         cedbadcebfbfbfbcfecbc5.push(3);
      for (let b = 0; b < 2; b++) {
          let liveD = String.fromCharCode(112,95,49,51,95,114,100,118,111,0);
         gpayH += `${liveD.length << (Math.min(4, popupy.length))}`;
      }
          let successq = 5;
          let iconrightorange5: Map<any, any> = new Map([[String.fromCharCode(112,97,117,115,101,95,110,95,57,52,0),String.fromCharCode(102,116,118,112,110,111,100,101,95,56,95,57,53,0)], [String.fromCharCode(97,95,55,57,95,104,101,97,100,101,114,0),String.fromCharCode(115,101,118,101,110,95,53,95,50,48,0)]]);
          let buildc = 0.0;
         cedbadcebfbfbfbcfecbc5 = [(String.fromCharCode(67,0) == gpayH ? gpayH.length : parseInt(`${buildc}`))];
         successq *= successq % (Math.max(iconrightorange5.size, 10));
         iconrightorange5.set(`${successq}`, successq);
         buildc *= successq << (Math.min(Math.abs(iconrightorange5.size), 3));
         gpayH = `${popupy.length}`;
      let shrinkD = 5251388 >= popupy.length;
      do {
         popupy += `${(popupy == String.fromCharCode(103,0) ? popupy.length : cedbadcebfbfbfbcfecbc5.length)}`;
         if (shrinkD) {
            break;
         }
      } while (shrinkD && (gpayH == String.fromCharCode(109,0)));
      let edit1 = 5045274 <= popupy.length;
      do {
         popupy = `${(gpayH == String.fromCharCode(66,0) ? gpayH.length : cedbadcebfbfbfbcfecbc5.length)}`;
         if (edit1) {
            break;
         }
      } while ((3 >= gpayH.length) && edit1);
      overlayl += rootZ.size ^ 2;
      if (search4) {
         break;
      }
   } while (search4 && ((iconsubssuccessX.length % 2) > 1 && 4.64 > (overlayl * 3.16)));
      codegen1.set(`${overlayl}`, 1 | codegen1.size);
   while (successJ.includes(`${codegen1.size}`)) {
      successJ += `${crownd.length}`;
      break;
   }

    brightShare.value = await SystemSetting.getAppBrightness();

   let utilsD = 9491383.0 >= overlayl;
   do {
      overlayl /= Math.max(crownd.length, 5);
      if (utilsD) {
         break;
      }
   } while (utilsD && (rootZ.get(`${overlayl}`) != null));
       let carousely = String.fromCharCode(99,111,112,121,116,111,95,55,95,50,54,0);
       let materialj = 5.0;
      if (1 >= (2 + carousely.length)) {
         materialj += 3;
      }
      let videocommonE = carousely.length <= 7290742;
      do {
         carousely = `${parseInt(`${materialj}`) << (Math.min(carousely.length, 4))}`;
         if (videocommonE) {
            break;
         }
      } while (videocommonE && (2 == (carousely.length * parseInt(`${materialj}`)) || (2 << (Math.min(2, carousely.length))) == 5));
      if (5 >= (carousely.length / (Math.max(2, 8)))) {
          let livea = String.fromCharCode(100,101,102,101,114,114,101,114,95,53,95,49,49,0);
          let statsu = String.fromCharCode(99,97,118,115,105,100,99,116,95,54,95,57,51,0);
          let redscoreballA = 3;
          let foregroundC: Array<any> = [993, 415];
          let listk: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,112,114,101,115,101,110,99,101,115,0),String.fromCharCode(110,105,108,95,112,95,49,56,0)], [String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,122,95,50,55,0),String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,105,95,53,0)], [String.fromCharCode(116,95,49,56,95,97,116,116,114,105,98,117,116,101,100,0),String.fromCharCode(98,95,51,55,95,100,105,114,112,0)]]);
         materialj *= (carousely == String.fromCharCode(117,0) ? redscoreballA : carousely.length);
         livea = `${(String.fromCharCode(66,0) == statsu ? statsu.length : livea.length)}`;
         redscoreballA /= Math.max(2, statsu.length);
         foregroundC = [(statsu == String.fromCharCode(83,0) ? foregroundC.length : statsu.length)];
         listk.set(statsu, foregroundC.length % 1);
      }
      for (let s = 0; s < 1; s++) {
          let stationa = String.fromCharCode(99,97,109,101,108,95,102,95,49,55,0);
          let volumeD = 0.0;
          let libfile4: Array<any> = [55, 945, 522];
         carousely = `${stationa.length}`;
         stationa += `${libfile4.length ^ 3}`;
         volumeD *= parseInt(`${volumeD}`) ^ 3;
         libfile4.push(libfile4.length);
      }
       let matchdetailbgi = false;
       let template_nW = true;
          let dialogq: Map<any, any> = new Map([[String.fromCharCode(98,101,99,97,117,115,101,95,116,95,52,55,0),false ], [String.fromCharCode(115,105,110,99,101,95,53,95,57,48,0),false ]]);
         matchdetailbgi = template_nW && !matchdetailbgi;
         dialogq.set(`${dialogq.size}`, dialogq.size);
      successJ = `${(graphp == String.fromCharCode(110,0) ? graphp.length : iconsubssuccessX.length)}`;
   while (!successJ.endsWith(crownd)) {
      successJ += `${3 << (Math.min(3, crownd.length))}`;
      break;
   }
      rootZ = new Map([[`${iconsubssuccessX.length}`, 2 + parseInt(`${overlayl}`)]]);
   if (3.56 > (5.18 * overlayl)) {
      overlayl -= rootZ.size | 1;
   }
       let graphics0 = String.fromCharCode(101,100,116,115,95,57,95,52,55,0);
       let launchQ = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,48,95,52,48,0);
       let album5 = false;
      if (1 > launchQ.length) {
         launchQ = `${1 >> (Math.min(2, launchQ.length))}`;
      }
         graphics0 += `${launchQ.length & 1}`;
         album5 = 48 > launchQ.length;
         launchQ = `${graphics0.length}`;
          let defaultroombg9: Map<any, any> = new Map([[String.fromCharCode(101,95,50,95,109,99,100,101,99,0),false ], [String.fromCharCode(112,101,114,109,101,97,116,101,95,108,95,53,0),true ]]);
          let bellh = String.fromCharCode(104,95,53,57,95,116,114,97,115,104,111,108,100,0);
          let backwhiteM = String.fromCharCode(113,117,97,110,116,105,108,101,95,120,95,49,56,0);
         launchQ += `${defaultroombg9.size ^ graphics0.length}`;
         defaultroombg9.set(backwhiteM, 1 * bellh.length);
         bellh += `${2 & backwhiteM.length}`;
         graphics0 = `${launchQ.length}`;
       let tooltips2: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,0),String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,102,95,55,49,0)], [String.fromCharCode(110,105,98,95,116,95,56,0),String.fromCharCode(110,95,51,53,95,112,114,111,116,101,99,116,101,100,0)]]);
         tooltips2.set(`${album5}`, ((album5 ? 5 : 4) << (Math.min(Math.abs(tooltips2.size), 4))));
      let libglogl = launchQ == String.fromCharCode(112,119,50,102,107,121,52,97,110,104,0);
      do {
         launchQ = `${tooltips2.size}`;
         if (libglogl) {
            break;
         }
      } while ((tooltips2.size < 5) && libglogl);
      rootZ = new Map([[`${overlayl}`, crownd.length]]);
   let libfabricjnic = 5584711 >= iconsubssuccessX.length;
   do {
      iconsubssuccessX.push(iconsubssuccessX.length - 3);
      if (libfabricjnic) {
         break;
      }
   } while (((iconsubssuccessX.length % (Math.max(1, rootZ.size))) < 2) && libfabricjnic);
      crownd = `${3 & successJ.length}`;
      rootZ.set(`${codegen1.size}`, 3);
   let kuaishour = 8364697 >= crownd.length;
   do {
      crownd += `${iconsubssuccessX.length}`;
      if (kuaishour) {
         break;
      }
   } while (((overlayl * 1.76) < 1.76 && 1 < (crownd.length * 1)) && kuaishour);
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
    setSettings({ name: "selectLibavcodecGifgoalbg", value: newVol });
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
       let showlessF = String.fromCharCode(97,109,102,101,110,99,95,116,95,54,54,0);
    let type_ie2 = 0;
    let relatedo = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,98,95,48,0);
    let vignetteD: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,95,53,95,52,50,0),false ], [String.fromCharCode(103,117,101,115,115,101,100,95,122,95,51,57,0),true ], [String.fromCharCode(114,95,56,95,106,112,101,103,100,115,112,0),false ]]);
    let main_r4: Array<any> = [String.fromCharCode(121,95,50,56,95,112,101,110,99,105,108,0), String.fromCharCode(118,95,53,53,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0), String.fromCharCode(116,95,50,52,95,99,97,112,112,101,100,0)];
    let nbatrophyo: Map<any, any> = new Map([[String.fromCharCode(119,122,97,101,115,95,117,95,52,48,0),368], [String.fromCharCode(120,95,51,54,95,99,111,110,116,97,99,116,115,0),462], [String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,114,95,52,53,0),389]]);
    let f_titlev = 1;
    let libmapbufferjnit = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,104,95,53,50,0);
    let downarrowC = 4.0;
    let previewb = 2.0;
    let pointv = String.fromCharCode(114,101,102,114,101,115,104,95,98,95,48,0);
   if (2 == (nbatrophyo.size % (Math.max(8, showlessF.length))) && 2 == (2 % (Math.max(10, nbatrophyo.size)))) {
      nbatrophyo.set(`${type_ie2}`, 1 >> (Math.min(4, Math.abs(type_ie2))));
   }
   for (let p = 0; p < 1; p++) {
       let sellmathbackgroundT = false;
       let topicI = String.fromCharCode(116,95,53,50,95,109,101,110,117,0);
       let awayiconU = 1;
         awayiconU %= Math.max(2, 2);
          let nalytics5: Array<any> = [926, 547];
          let iconnotificationnew0 = String.fromCharCode(101,112,111,99,104,95,100,95,54,49,0);
          let bgvipsportE = 0;
         awayiconU &= (iconnotificationnew0 == String.fromCharCode(100,0) ? iconnotificationnew0.length : (sellmathbackgroundT ? 4 : 4));
         nalytics5 = [1];
         bgvipsportE >>= Math.min(Math.abs(2), 2);
         awayiconU *= topicI.length;
      while (sellmathbackgroundT || 4 <= topicI.length) {
         topicI += `${topicI.length}`;
         break;
      }
      while (topicI.startsWith(`${sellmathbackgroundT}`)) {
         topicI = `${((sellmathbackgroundT ? 3 : 4))}`;
         break;
      }
          let firebaseQ = String.fromCharCode(115,95,49,49,95,115,121,109,98,111,108,105,122,101,0);
          let watchM = String.fromCharCode(117,95,49,56,95,112,97,114,116,105,99,108,101,0);
         topicI += `${((sellmathbackgroundT ? 2 : 5) - 2)}`;
         firebaseQ = `${watchM.length & 3}`;
         watchM += `${firebaseQ.length % (Math.max(watchM.length, 6))}`;
      if (topicI.includes(`${sellmathbackgroundT}`)) {
         topicI += `${awayiconU}`;
      }
          let expired0 = 2.0;
         topicI = `${((sellmathbackgroundT ? 5 : 2) * topicI.length)}`;
         expired0 /= Math.max(1, parseInt(`${expired0}`) + parseInt(`${expired0}`));
          let navigationi = 4.0;
          let auto_q9: Map<any, any> = new Map([[String.fromCharCode(100,95,57,95,102,105,97,116,0),394], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,106,95,51,0),751]]);
         topicI = `${3 >> (Math.min(5, Math.abs(auto_q9.size)))}`;
         navigationi *= parseFloat(`${3 / (Math.max(6, parseInt(`${navigationi}`)))}`);
         auto_q9 = new Map([[`${navigationi}`, 3 << (Math.min(Math.abs(parseInt(`${navigationi}`)), 1))]]);
      f_titlev |= f_titlev / 1;
   }
   for (let d = 0; d < 1; d++) {
      vignetteD = new Map([[`${type_ie2}`, 3 + relatedo.length]]);
   }
       let iconeditY = 0;
       let canvasb = String.fromCharCode(112,95,56,54,95,119,97,108,107,0);
       let gestures6: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,97,99,116,105,118,101,109,97,112,0),432], [String.fromCharCode(109,109,99,111,115,95,97,95,56,51,0),352]]);
      for (let o = 0; o < 2; o++) {
         iconeditY -= iconeditY;
      }
      while (4 >= canvasb.length) {
         canvasb = "1";
         break;
      }
      for (let w = 0; w < 3; w++) {
         canvasb = `${canvasb.length}`;
      }
      let paginationh = 5195874 <= gestures6.size;
      do {
          let libavcodec7 = String.fromCharCode(116,105,109,101,115,95,98,95,49,51,0);
          let libreanimatedS = 3.0;
          let completet: Array<any> = [String.fromCharCode(115,101,97,108,101,100,95,53,95,49,0), String.fromCharCode(120,95,49,48,95,98,111,117,110,100,105,110,103,0), String.fromCharCode(99,111,108,114,97,109,95,109,95,53,55,0)];
          let z_titleV = true;
          let resultJ = String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,101,95,57,48,0);
         gestures6 = new Map([[resultJ, resultJ.length | iconeditY]]);
         libavcodec7 += `${libavcodec7.length * parseInt(`${libreanimatedS}`)}`;
         libreanimatedS *= parseFloat(`${parseInt(`${libreanimatedS}`) | 3}`);
         completet = [1 & parseInt(`${libreanimatedS}`)];
         z_titleV = !z_titleV || completet.length < 22;
         if (paginationh) {
            break;
         }
      } while (paginationh && (gestures6.size < 2));
      if ((1 ^ iconeditY) > 5 || (canvasb.length ^ 1) > 2) {
          let backwhiteG = false;
         iconeditY <<= Math.min(Math.abs(gestures6.size), 5);
         backwhiteG = backwhiteG || backwhiteG;
      }
      libmapbufferjnit += `${1 / (Math.max(7, f_titlev))}`;
       let reactnativejsN = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,103,95,53,57,0);
       let shrinkA = String.fromCharCode(104,95,53,52,95,120,116,101,97,0);
       let bangF = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,109,95,56,53,0);
      let showlessr = reactnativejsN == String.fromCharCode(57,109,51,105,117,101,55,118,48,110,0);
      do {
          let ajax8 = String.fromCharCode(100,95,54,56,95,99,111,110,116,97,105,110,101,100,0);
          let termse = 4;
         reactnativejsN += `${shrinkA.length}`;
         ajax8 = `${(String.fromCharCode(74,0) == ajax8 ? ajax8.length : termse)}`;
         termse -= 2;
         if (showlessr) {
            break;
         }
      } while (showlessr && (bangF.startsWith(reactnativejsN)));
      let storek = 6494371 >= reactnativejsN.length;
      do {
          let issubl = true;
          let mbbidv = 5.0;
          let minivodh = 3.0;
          let bingS = 0.0;
          let expandM = false;
         reactnativejsN += `${(parseInt(`${minivodh}`) ^ (issubl ? 4 : 3))}`;
         issubl = !expandM || bingS <= 22.37;
         mbbidv += (parseInt(`${bingS}`) >> (Math.min(3, Math.abs((expandM ? 5 : 4)))));
         minivodh += parseFloat(`${parseInt(`${mbbidv}`) ^ 1}`);
         if (storek) {
            break;
         }
      } while ((shrinkA != String.fromCharCode(120,0)) && storek);
      showlessF += `${(String.fromCharCode(57,0) == libmapbufferjnit ? showlessF.length : libmapbufferjnit.length)}`;
      f_titlev ^= 3;
   if (nbatrophyo.size == 1) {
      nbatrophyo = new Map([[`${downarrowC}`, parseInt(`${downarrowC}`)]]);
   }
   for (let a = 0; a < 1; a++) {
      main_r4.push(2 << (Math.min(2, Math.abs(vignetteD.size))));
   }
   if (2 == type_ie2) {
      relatedo += "1";
   }
   for (let m = 0; m < 3; m++) {
      relatedo = `${type_ie2 << (Math.min(Math.abs(3), 2))}`;
   }
   while (4 == (parseInt(`${downarrowC}`) * libmapbufferjnit.length)) {
      libmapbufferjnit += "2";
      break;
   }
   while (2 == (1 | showlessF.length) || (f_titlev | showlessF.length) == 1) {
       let orangedownarrowV = false;
       let actionP: Map<any, any> = new Map([[String.fromCharCode(118,112,100,97,116,97,95,49,95,49,55,0),297], [String.fromCharCode(98,95,54,53,95,114,101,112,114,101,112,97,114,101,0),243]]);
       let routerl = 4.0;
       let videocommonX = 5.0;
       let iconpipexpandM = 0.0;
         routerl -= parseFloat(`${actionP.size}`);
      if ((5.53 + iconpipexpandM) < 4.6 || 2.31 < (iconpipexpandM + 5.53)) {
          let reporta = String.fromCharCode(115,111,117,114,99,101,95,98,95,50,49,0);
          let cornerkickU = String.fromCharCode(121,95,52,52,0);
          let playlistr = 3.0;
         routerl += parseFloat(`${cornerkickU.length * 1}`);
         reporta += `${(String.fromCharCode(85,0) == reporta ? reporta.length : parseInt(`${playlistr}`))}`;
         cornerkickU = `${(String.fromCharCode(114,0) == reporta ? reporta.length : parseInt(`${playlistr}`))}`;
      }
      let fillw = 5648846 >= actionP.size;
      do {
          let iconarrowrightorangep = 1;
          let homeiconS: Map<any, any> = new Map([[String.fromCharCode(98,105,119,101,105,103,104,116,95,117,95,49,53,0),74], [String.fromCharCode(99,115,119,97,112,95,49,95,54,54,0),225]]);
         actionP.set(`${videocommonX}`, homeiconS.size);
         iconarrowrightorangep &= 1;
         homeiconS.set(`${iconarrowrightorangep}`, iconarrowrightorangep);
         if (fillw) {
            break;
         }
      } while ((orangedownarrowV) && fillw);
      for (let p = 0; p < 1; p++) {
          let rules9: Array<any> = [356, 175];
          let heartu = false;
          let quest9 = String.fromCharCode(105,110,115,116,97,108,108,101,100,95,49,95,55,57,0);
         iconpipexpandM += parseInt(`${videocommonX}`);
         rules9.push((quest9.length << (Math.min(2, Math.abs((heartu ? 4 : 2))))));
         heartu = !heartu;
         quest9 += `${(quest9 == String.fromCharCode(89,0) ? quest9.length : rules9.length)}`;
      }
         routerl /= Math.max(parseFloat(`${parseInt(`${videocommonX}`)}`), 5);
         actionP.set(`${orangedownarrowV}`, actionP.size);
         actionP.set(`${orangedownarrowV}`, (actionP.size + (orangedownarrowV ? 5 : 3)));
         videocommonX *= (2 | (orangedownarrowV ? 2 : 5));
       let expandR = String.fromCharCode(112,114,111,98,101,114,95,98,95,51,52,0);
         routerl -= parseFloat(`${parseInt(`${iconpipexpandM}`)}`);
      let iconbackwhiteG = String.fromCharCode(53,55,121,0) == expandR;
      do {
         expandR += `${(String.fromCharCode(54,0) == expandR ? expandR.length : parseInt(`${iconpipexpandM}`))}`;
         if (iconbackwhiteG) {
            break;
         }
      } while (iconbackwhiteG && (5 == (expandR.length >> (Math.min(Math.abs(2), 3)))));
          let gradlewY = 4.0;
         videocommonX -= parseInt(`${gradlewY}`) | 2;
      while (3.53 <= (expandR.length * videocommonX) || 1 <= (expandR.length * 3)) {
         videocommonX /= Math.max(3, 1);
         break;
      }
      for (let k = 0; k < 3; k++) {
         expandR += `${(parseInt(`${iconpipexpandM}`) - (orangedownarrowV ? 3 : 5))}`;
      }
      if ((routerl - 4.43) >= 4.79) {
          let basketballtrophya = String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,122,95,56,52,0);
          let imagemanager4 = 2.0;
          let playercommonU = 5.0;
          let libswscaleX: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,115,116,95,116,95,54,48,0),true ], [String.fromCharCode(114,112,99,95,117,95,56,53,0),false ], [String.fromCharCode(114,97,110,103,101,95,56,95,52,57,0),false ]]);
          let libreactnativeblobm = String.fromCharCode(98,95,49,57,95,105,110,102,111,0);
         routerl -= parseFloat(`${parseInt(`${playercommonU}`)}`);
         basketballtrophya += "1";
         imagemanager4 /= Math.max(3, 1 + libreactnativeblobm.length);
         playercommonU /= Math.max(3, parseFloat(`${1 * basketballtrophya.length}`));
         libswscaleX.set(basketballtrophya, 1);
         libreactnativeblobm = `${libswscaleX.size | 2}`;
      }
      showlessF = `${parseInt(`${iconpipexpandM}`) / (Math.max(vignetteD.size, 7))}`;
      break;
   }
      showlessF = "3";
       let switch_faA = 0.0;
       let forward1: Array<any> = [395, 414];
      while (1 < (forward1.length / (Math.max(9, parseInt(`${switch_faA}`)))) || 5 < (forward1.length % 1)) {
         switch_faA -= 3 | parseInt(`${switch_faA}`);
         break;
      }
         switch_faA /= Math.max(3, 3 * forward1.length);
         forward1 = [3];
      while (!forward1.includes(switch_faA)) {
          let bootsplashH: Array<any> = [String.fromCharCode(119,95,53,95,111,118,101,114,118,105,101,119,0), String.fromCharCode(106,95,49,51,95,104,97,110,100,115,0), String.fromCharCode(119,95,52,49,95,117,110,115,101,110,100,0)];
          let libswscaleU: Array<any> = [49, 768, 197];
          let shrinkw = String.fromCharCode(121,95,50,49,95,99,111,110,118,111,108,118,101,0);
          let indexZ: Array<any> = [String.fromCharCode(110,95,51,52,95,114,101,97,100,0), String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,51,95,51,50,0), String.fromCharCode(107,95,54,54,95,99,117,109,101,0)];
         switch_faA *= bootsplashH.length;
         bootsplashH.push(3 & indexZ.length);
         libswscaleU.push((shrinkw == String.fromCharCode(52,0) ? shrinkw.length : libswscaleU.length));
         indexZ = [2];
         break;
      }
      for (let s = 0; s < 2; s++) {
          let sendW: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,117,109,98,101,114,0),String.fromCharCode(98,95,52,55,95,100,97,116,97,99,101,110,116,101,114,115,0)], [String.fromCharCode(118,95,53,95,98,97,111,98,97,98,0),String.fromCharCode(99,95,51,48,95,118,105,100,101,111,99,111,100,101,99,0)]]);
          let favicona = 5.0;
          let analyticsR = 0;
          let scheduler3 = String.fromCharCode(106,95,49,49,95,109,105,99,114,111,112,104,111,110,101,0);
         forward1 = [analyticsR | scheduler3.length];
         sendW = new Map([[`${sendW.size}`, sendW.size / (Math.max(9, parseInt(`${favicona}`)))]]);
         favicona -= parseFloat(`${parseInt(`${favicona}`)}`);
         analyticsR <<= Math.min(1, Math.abs(parseInt(`${favicona}`) | sendW.size));
         scheduler3 += "1";
      }
      for (let w = 0; w < 1; w++) {
          let phoneshareB = 2.0;
          let cancelU: Map<any, any> = new Map([[String.fromCharCode(99,108,108,105,95,55,95,54,54,0),720], [String.fromCharCode(103,101,111,109,101,116,114,121,95,56,95,53,53,0),870], [String.fromCharCode(99,111,114,101,105,109,97,103,101,95,107,95,55,53,0),552]]);
          let playM = 5;
         forward1.push(playM + cancelU.size);
         phoneshareB -= parseFloat(`${1}`);
         cancelU = new Map([[`${phoneshareB}`, parseInt(`${phoneshareB}`) >> (Math.min(Math.abs(parseInt(`${phoneshareB}`)), 5))]]);
      }
      libmapbufferjnit = `${3 & relatedo.length}`;
   if (2.27 <= (downarrowC * parseFloat(`${f_titlev}`)) || 3.48 <= (downarrowC * 2.27)) {
      downarrowC -= parseFloat(`${type_ie2}`);
   }
   if (relatedo.length <= 3) {
      relatedo = `${main_r4.length}`;
   }
      f_titlev /= Math.max(5, 2);
      nbatrophyo.set(`${type_ie2}`, type_ie2 & vignetteD.size);
       let single_: Map<any, any> = new Map([[String.fromCharCode(101,112,97,102,95,121,95,51,0),57], [String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,50,95,50,52,0),390]]);
       let flyerr: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,95,102,117,108,102,105,108,108,0),true ], [String.fromCharCode(120,95,52,48,95,107,105,110,100,0),false ], [String.fromCharCode(117,95,50,49,0),true ]]);
       let matchinactive1 = 3;
      if (4 <= (2 * single_.size) || 1 <= (2 * matchinactive1)) {
         single_.set(`${matchinactive1}`, 2 % (Math.max(7, matchinactive1)));
      }
      for (let u = 0; u < 2; u++) {
          let greytickg: Array<any> = [768, 76, 568];
          let dependencyd = 1.0;
          let textinputI = 5.0;
          let libtobL: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,97,100,100,105,116,105,111,110,97,108,0),123], [String.fromCharCode(115,105,100,101,95,101,95,57,55,0),135], [String.fromCharCode(115,117,112,101,114,110,111,100,101,95,108,95,49,57,0),339]]);
         matchinactive1 <<= Math.min(Math.abs(libtobL.size), 2);
         greytickg.push(greytickg.length >> (Math.min(Math.abs(1), 5)));
         dependencyd -= parseInt(`${textinputI}`) % (Math.max(7, parseInt(`${dependencyd}`)));
         textinputI += parseInt(`${textinputI}`) | parseInt(`${dependencyd}`);
         libtobL.set(`${dependencyd}`, parseInt(`${dependencyd}`));
      }
      if (Array.from(flyerr.keys()).includes(`${single_.size}`)) {
         flyerr = new Map([[`${flyerr.size}`, matchinactive1]]);
      }
         single_.set(`${flyerr.size}`, 3);
      if (5 < flyerr.size) {
         flyerr = new Map([[`${single_.size}`, single_.size + 1]]);
      }
      type_ie2 /= Math.max(5, 1 & relatedo.length);
   for (let z = 0; z < 2; z++) {
       let kuaishouK = true;
         kuaishouK = !kuaishouK;
      for (let c = 0; c < 1; c++) {
         kuaishouK = !kuaishouK;
      }
         kuaishouK = (!kuaishouK ? kuaishouK : kuaishouK);
      type_ie2 &= ((kuaishouK ? 4 : 5));
   }
   while (2 <= (3 >> (Math.min(4, libmapbufferjnit.length)))) {
      downarrowC *= parseFloat(`${vignetteD.size - 3}`);
      break;
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
              (settings.name === "none" || settings.name === "selectLibavcodecGifgoalbg")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "iconwechatLibhermesImagemanager" &&
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
       let liblogger2 = String.fromCharCode(114,97,114,105,116,121,95,101,95,56,57,0);
    let libswscaleB = String.fromCharCode(105,110,116,114,97,95,118,95,57,54,0);
    let sina4 = 3.0;
    let renderk = String.fromCharCode(99,111,110,115,117,109,101,114,95,56,95,52,50,0);
    let subsn: Map<any, any> = new Map([[String.fromCharCode(114,117,101,95,53,95,53,52,0),314], [String.fromCharCode(105,95,52,56,95,118,112,99,120,0),960], [String.fromCharCode(99,105,110,101,112,97,107,95,49,95,56,52,0),181]]);
    let shootyesgoalA = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,109,95,49,49,0);
    let predictionarrowt = String.fromCharCode(116,95,49,55,95,118,105,100,101,111,104,100,114,0);
    let constantsY = 3.0;
    let kcopy_ygo: Array<any> = [915, 408, 622];
    let logouser6 = String.fromCharCode(98,95,57,57,95,100,101,108,97,121,115,0);
    let rewardvideo6 = 4;
    let libfbjni6 = String.fromCharCode(99,104,97,114,115,101,116,95,112,95,56,48,0);
    let homeM = String.fromCharCode(105,116,101,114,95,103,95,52,53,0);
    let libjsijniprofiler6 = String.fromCharCode(120,95,56,54,95,100,113,99,111,101,102,102,0);
       let chinan = 5.0;
       let mooni: Map<any, any> = new Map([[String.fromCharCode(114,101,112,117,98,108,105,115,104,95,55,95,53,51,0),397], [String.fromCharCode(113,95,55,50,95,115,97,108,116,108,101,110,0),18]]);
       let downarrowS = 2.0;
         chinan /= Math.max(parseFloat(`${2 >> (Math.min(5, Math.abs(mooni.size)))}`), 1);
          let greytickq = String.fromCharCode(112,95,50,55,95,117,110,107,110,111,119,110,115,0);
          let libfile9 = 1.0;
         downarrowS -= mooni.size;
         greytickq += `${greytickq.length ^ 2}`;
         libfile9 *= (parseFloat(`${greytickq == String.fromCharCode(117,0) ? parseInt(`${libfile9}`) : greytickq.length}`));
          let libloggerZ = String.fromCharCode(115,95,57,54,95,101,120,116,114,99,0);
          let debugM = 2;
         downarrowS -= mooni.size;
         libloggerZ = `${libloggerZ.length * debugM}`;
         debugM |= 2;
          let predictionbutton3 = true;
          let fullscreenminY: Array<any> = [String.fromCharCode(116,105,109,101,108,105,110,101,95,53,95,54,49,0), String.fromCharCode(101,95,56,51,95,108,111,117,100,110,111,114,109,0), String.fromCharCode(107,95,53,55,95,98,116,114,101,101,0)];
         mooni.set(`${downarrowS}`, ((predictionbutton3 ? 4 : 1) - parseInt(`${downarrowS}`)));
         predictionbutton3 = fullscreenminY.length > 37;
         fullscreenminY.push(2);
      while ((downarrowS - 5.88) == 3.91 || (downarrowS - 5.88) == 3.17) {
         downarrowS *= 3 | mooni.size;
         break;
      }
         chinan /= Math.max(parseFloat(`${parseInt(`${downarrowS}`)}`), 1);
          let homeloadingH: Array<any> = [141, 940];
         downarrowS += parseInt(`${downarrowS}`) % (Math.max(homeloadingH.length, 1));
         downarrowS -= mooni.size;
         mooni = new Map([[`${mooni.size}`, mooni.size]]);
      liblogger2 += `${rewardvideo6}`;
   let unselectedX = libswscaleB.length >= 6578837;
   do {
       let animationn: Array<any> = [String.fromCharCode(101,118,97,115,97,112,112,95,119,95,51,48,0), String.fromCharCode(108,95,49,51,95,114,101,118,111,99,97,116,105,111,110,0)];
      if (5 >= (animationn.length % (Math.max(animationn.length, 9))) || (animationn.length % (Math.max(5, 9))) >= 2) {
          let o_titlex = String.fromCharCode(114,95,49,95,104,111,116,105,122,111,110,116,108,0);
          let scorepopsoundw = 2;
         animationn = [o_titlex.length | 3];
         o_titlex += `${scorepopsoundw | 1}`;
         scorepopsoundw &= scorepopsoundw;
      }
      if (!animationn.includes(animationn.length)) {
         animationn = [animationn.length >> (Math.min(animationn.length, 1))];
      }
         animationn.push(3 + animationn.length);
      libswscaleB += "3";
      if (unselectedX) {
         break;
      }
   } while (unselectedX && (logouser6 == String.fromCharCode(119,0)));
      shootyesgoalA += "3";
      liblogger2 = `${(liblogger2 == String.fromCharCode(50,0) ? parseInt(`${sina4}`) : liblogger2.length)}`;
   while (!libfbjni6.includes(shootyesgoalA)) {
      libfbjni6 = `${kcopy_ygo.length}`;
      break;
   }
      kcopy_ygo.push(subsn.size);
       let vignette4 = true;
       let m_positionu: Map<any, any> = new Map([[String.fromCharCode(117,95,54,54,95,104,101,120,99,104,97,114,105,110,116,0),201], [String.fromCharCode(99,108,97,112,95,53,95,54,49,0),358]]);
       let detailsB = String.fromCharCode(112,101,114,115,111,110,97,108,95,118,95,57,55,0);
         vignette4 = m_positionu.size < 83 || !vignette4;
         detailsB = `${detailsB.length}`;
      if (1 <= (m_positionu.size & 2) || 2 <= m_positionu.size) {
         vignette4 = String.fromCharCode(70,0) == detailsB;
      }
         detailsB += `${(detailsB == String.fromCharCode(89,0) ? detailsB.length : m_positionu.size)}`;
      while (detailsB.endsWith(`${m_positionu.size}`)) {
          let baiduG = 3;
          let kuaishoul = String.fromCharCode(116,111,110,95,111,95,49,50,0);
          let gpayz = String.fromCharCode(121,95,49,53,95,97,110,115,119,101,114,0);
          let iconshareJ = 0;
          let plusz: Map<any, any> = new Map([[String.fromCharCode(111,95,52,56,95,119,115,118,113,97,0),998], [String.fromCharCode(107,95,56,57,95,102,111,99,117,115,97,98,108,101,0),261], [String.fromCharCode(98,95,57,48,95,99,111,109,98,105,110,101,115,0),895]]);
         detailsB += `${m_positionu.size}`;
         baiduG *= plusz.size | iconshareJ;
         kuaishoul = `${baiduG}`;
         gpayz += `${plusz.size}`;
         iconshareJ <<= Math.min(Math.abs(3 ^ baiduG), 1);
         break;
      }
          let yellowcirclebgR = true;
          let code6: Map<any, any> = new Map([[String.fromCharCode(100,101,103,114,101,101,115,95,105,95,55,54,0),140], [String.fromCharCode(115,112,108,105,116,116,101,114,95,105,95,51,52,0),720], [String.fromCharCode(116,117,112,108,101,95,97,95,56,52,0),185]]);
          let uimanagerA: Array<any> = [777, 1, 921];
         m_positionu = new Map([[detailsB, detailsB.length]]);
         yellowcirclebgR = code6.size <= 52;
         code6.set(`${uimanagerA.length}`, uimanagerA.length ^ code6.size);
      while ((detailsB.length - m_positionu.size) >= 5 || 5 >= (detailsB.length - m_positionu.size)) {
          let photo4 = 4.0;
         detailsB = `${m_positionu.size}`;
         photo4 /= Math.max(3, parseFloat(`${parseInt(`${photo4}`)}`));
         break;
      }
      if (!detailsB.startsWith(`${m_positionu.size}`)) {
          let iconclosewhiteo: Map<any, any> = new Map([[String.fromCharCode(113,95,54,52,95,119,105,114,101,102,114,97,109,101,0),953], [String.fromCharCode(99,95,57,95,115,101,110,100,0),647]]);
         m_positionu.set(`${vignette4}`, (1 | (vignette4 ? 4 : 5)));
         iconclosewhiteo = new Map([[`${iconclosewhiteo.size}`, 1 | iconclosewhiteo.size]]);
      }
      while (m_positionu.size > 2) {
         m_positionu.set(detailsB, 2 + detailsB.length);
         break;
      }
      constantsY += parseFloat(`${libfbjni6.length + renderk.length}`);
   let apps2 = kcopy_ygo.length <= 9010516;
   do {
      kcopy_ygo = [(shootyesgoalA == String.fromCharCode(102,0) ? shootyesgoalA.length : logouser6.length)];
      if (apps2) {
         break;
      }
   } while (apps2 && (!renderk.startsWith(`${kcopy_ygo.length}`)));
   while (1 > (1 ^ logouser6.length) || (5.11 * sina4) > 3.18) {
       let backwardq = true;
         backwardq = !backwardq;
          let groupL = 1.0;
          let relatedd = String.fromCharCode(98,95,50,49,95,115,111,97,108,108,111,99,0);
         backwardq = relatedd.length == 75;
         groupL -= parseFloat(`${2}`);
         relatedd += "3";
      for (let m = 0; m < 3; m++) {
         backwardq = !backwardq;
      }
      sina4 /= Math.max(4, subsn.size ^ 1);
      break;
   }

      if (!isDoubleTap.value) {

   for (let d = 0; d < 3; d++) {
      predictionarrowt += `${1 << (Math.min(Math.abs(rewardvideo6), 3))}`;
   }
       let libavdevicec = String.fromCharCode(114,101,102,108,101,99,116,95,122,95,55,48,0);
       let filterO = 0.0;
       let defaultlogoe = false;
      let utilsg = 6539840.0 <= filterO;
      do {
          let miniw = String.fromCharCode(98,95,55,95,105,112,108,105,109,97,103,101,0);
         filterO /= Math.max(libavdevicec.length ^ 3, 1);
         miniw += `${1 / (Math.max(8, miniw.length))}`;
         if (utilsg) {
            break;
         }
      } while (utilsg && (!defaultlogoe));
       let vignetteI = String.fromCharCode(100,101,108,116,97,95,53,95,53,50,0);
       let background1 = String.fromCharCode(122,95,55,95,116,97,110,0);
         defaultlogoe = libavdevicec == String.fromCharCode(72,0);
         defaultlogoe = 42.73 >= filterO;
      while (vignetteI == background1) {
         background1 += `${1 ^ vignetteI.length}`;
         break;
      }
       let minimizeM = 3.0;
       let routerX = 5.0;
      for (let d = 0; d < 2; d++) {
         filterO /= Math.max(4, background1.length);
      }
      let toponJ = minimizeM >= 8812183.0;
      do {
          let ajaxJ = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,117,95,53,50,0);
          let yellowanimationliveg = String.fromCharCode(119,95,56,48,95,99,97,115,116,101,100,0);
          let bodan2 = 0;
         minimizeM -= parseFloat(`${1}`);
         ajaxJ = `${bodan2 << (Math.min(Math.abs(3), 5))}`;
         yellowanimationliveg += `${(String.fromCharCode(97,0) == ajaxJ ? ajaxJ.length : bodan2)}`;
         if (toponJ) {
            break;
         }
      } while ((4.55 > (routerX / (Math.max(4, 4)))) && toponJ);
         vignetteI += `${vignetteI.length}`;
      liblogger2 += `${(parseInt(`${filterO}`) / (Math.max(10, (defaultlogoe ? 1 : 4))))}`;
      rewardvideo6 ^= (String.fromCharCode(57,0) == liblogger2 ? liblogger2.length : shootyesgoalA.length);
   while (1 >= (3 | liblogger2.length)) {
      liblogger2 += "3";
      break;
   }
      liblogger2 += `${liblogger2.length ^ 3}`;
       let rewardvideo0 = String.fromCharCode(99,95,54,52,95,107,101,121,115,0);
       let executorJ = 2.0;
      for (let n = 0; n < 2; n++) {
         rewardvideo0 += `${1 | parseInt(`${executorJ}`)}`;
      }
         rewardvideo0 = `${rewardvideo0.length}`;
      let upgrade_ = 5648783.0 <= executorJ;
      do {
          let eventt = 2;
          let contextf = 3;
          let plashl = 3.0;
         executorJ -= 2 << (Math.min(2, Math.abs(parseInt(`${executorJ}`))));
         eventt %= Math.max(2, contextf);
         plashl /= Math.max(4, parseFloat(`${eventt}`));
         if (upgrade_) {
            break;
         }
      } while (upgrade_ && (4 > (rewardvideo0.length >> (Math.min(Math.abs(5), 5)))));
      while (executorJ == rewardvideo0.length) {
         rewardvideo0 = "3";
         break;
      }
          let phonef: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,98,114,111,97,100,99,97,115,116,0),651], [String.fromCharCode(119,95,57,52,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0),602], [String.fromCharCode(101,95,49,48,95,121,109,111,100,101,0),608]]);
         rewardvideo0 += `${2 * parseInt(`${executorJ}`)}`;
         phonef = new Map([[`${phonef.size}`, 1]]);
          let chatroombackgroundw = false;
          let watchJ = 2.0;
          let homeloading5 = 1.0;
         executorJ += (rewardvideo0 == String.fromCharCode(88,0) ? parseInt(`${executorJ}`) : rewardvideo0.length);
         chatroombackgroundw = !chatroombackgroundw;
         watchJ /= Math.max(5, parseInt(`${homeloading5}`));
         homeloading5 += parseFloat(`${2 & parseInt(`${watchJ}`)}`);
      predictionarrowt += "1";
   while (shootyesgoalA.includes(`${sina4}`)) {
       let dpluse = 0;
       let halfc = 3.0;
       let constantsj = String.fromCharCode(119,95,52,52,95,98,105,103,105,110,116,101,103,101,114,0);
       let whistleorange8 = false;
         halfc /= Math.max(constantsj.length, 2);
         whistleorange8 = dpluse > 91;
       let paginationX = String.fromCharCode(102,95,57,50,95,108,97,116,101,110,99,121,0);
       let transfer5 = String.fromCharCode(112,97,99,107,101,116,115,95,48,95,53,52,0);
         transfer5 += `${dpluse}`;
      for (let p = 0; p < 2; p++) {
          let videocommon1 = 4.0;
          let textr = String.fromCharCode(115,101,113,95,51,95,49,57,0);
         transfer5 += `${textr.length}`;
         videocommon1 *= parseInt(`${videocommon1}`);
         textr = `${parseInt(`${videocommon1}`) % 3}`;
      }
         paginationX = "3";
         constantsj += `${transfer5.length << (Math.min(Math.abs(3), 4))}`;
         transfer5 = `${(3 ^ (whistleorange8 ? 4 : 1))}`;
      if ((halfc * 4.74) <= 4.12 || (constantsj.length / 4) <= 5) {
         halfc += (String.fromCharCode(107,0) == paginationX ? paginationX.length : parseInt(`${halfc}`));
      }
      if (2 == (constantsj.length | 3)) {
         halfc /= Math.max((String.fromCharCode(88,0) == constantsj ? (whistleorange8 ? 4 : 2) : constantsj.length), 2);
      }
          let graye = String.fromCharCode(99,105,110,101,95,52,95,56,0);
          let rewardf = String.fromCharCode(113,95,54,54,95,119,111,114,107,108,111,97,100,0);
          let plash6 = String.fromCharCode(98,117,102,102,101,114,115,95,53,95,52,54,0);
         paginationX = `${transfer5.length}`;
         graye += `${2 >> (Math.min(4, rewardf.length))}`;
         rewardf += `${plash6.length}`;
         plash6 = `${plash6.length}`;
      let baseP = halfc <= 8330418.0;
      do {
          let gradlee = 0.0;
          let predictionwiny = String.fromCharCode(111,95,50,54,95,97,115,115,101,109,98,108,101,114,0);
         halfc /= Math.max(1, 2);
         gradlee /= Math.max(parseFloat(`${predictionwiny.length >> (Math.min(Math.abs(2), 3))}`), 3);
         predictionwiny += `${2 - predictionwiny.length}`;
         if (baseP) {
            break;
         }
      } while ((halfc == transfer5.length) && baseP);
      shootyesgoalA = `${(String.fromCharCode(107,0) == constantsj ? parseInt(`${halfc}`) : constantsj.length)}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      predictionarrowt += `${(predictionarrowt == String.fromCharCode(87,0) ? libfbjni6.length : predictionarrowt.length)}`;
   }
      logouser6 = `${1 + kcopy_ygo.length}`;
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
                  icon={settings.value === 0 ? "iconstarCatagory" : "phoneInviteLibhermes"}
                />
              )}
              {showSlider && settings.name === "selectLibavcodecGifgoalbg" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "taiwanScore" : "iconarrowrightorangeReminderPosition"}
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
                icon={settings.value === 0 ? "iconstarCatagory" : "phoneInviteLibhermes"}
              />
            )}
            {showSlider && settings.name === "selectLibavcodecGifgoalbg" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "taiwanScore" : "iconarrowrightorangeReminderPosition"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
