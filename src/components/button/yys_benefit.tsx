import {useAppDispatch, useAppSelector, useSelector} from '@hooks/yys_frame';
import {setIsSportGuideShown} from '@redux/actions/yys_runtimescheduler';
import {Divider} from '@rneui/base';
import {screenModel} from '@type/yys_service_setting';
import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Modal,
  Dimensions,
} from 'react-native';
import VipGuideModal from '../modal/yys_libavfilter_dark';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import {yys_RelatedTooltips} from '@models/yys_project_pagination';
interface yys_ConfigureUimanager {
  timer: number; 
  onClickVip: (...args: any) => void;
  vipButtonText: string;
  containerStyle: ViewStyle;
}

const formatTimer = (numOfSeconds: number) => {
  const minutes = Math.floor(numOfSeconds / 60);
  const seconds = numOfSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const CountdownIndicator = ({
  timer,
  onClickVip,
  vipButtonText,
  containerStyle,
}: yys_ConfigureUimanager) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window');
  const [visible, setVisible] = useState(true);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);
  
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (screenState.isSportGuideShown == false && !isVip) {
   getPosition();

      setTimeout(() => {
        setVipGuideModal(true);
        dispatch(setIsSportGuideShown(true));
      }, 1600);
    }
  }, [timer]);



  const getPosition = () => {
       let gmaila = 4.0;
    let agreementw: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,115,95,48,95,52,57,0),305], [String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,103,95,56,50,0),149]]);
    let cancelt: Array<any> = [454, 519];
    let kuaishouL = false;
    let logof = false;
    let gestures4 = 3.0;
    let sheet_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,57,95,57,51,0),String.fromCharCode(102,95,53,51,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0)], [String.fromCharCode(117,112,108,111,97,100,101,114,95,48,95,50,49,0),String.fromCharCode(97,95,54,50,95,116,104,114,101,115,104,111,108,100,105,110,103,0)]]);
    let libfb1 = 3;
    let ajaxS = 5.0;
    let interstitiald: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,100,101,112,108,111,121,109,101,110,116,0),230], [String.fromCharCode(106,95,53,95,97,107,97,114,111,115,0),640]]);
    let diceM = String.fromCharCode(115,105,110,100,101,120,95,115,95,50,52,0);
    let refreshp = 3;
    let transferc = 2;
       let fieldg: Array<any> = [449, 710];
       let frame_szg = String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,53,95,53,0);
         fieldg = [frame_szg.length * fieldg.length];
      for (let j = 0; j < 1; j++) {
          let livek = String.fromCharCode(118,112,100,101,99,95,55,95,52,49,0);
          let progressh = String.fromCharCode(98,95,50,49,95,115,105,110,100,101,120,0);
          let reminderf = false;
          let xadsdkA = 0;
         frame_szg = `${livek.length}`;
         livek = `${(progressh == String.fromCharCode(113,0) ? progressh.length : xadsdkA)}`;
         reminderf = progressh.length <= 2 && reminderf;
         xadsdkA ^= 3 / (Math.max(4, xadsdkA));
      }
         frame_szg = `${frame_szg.length}`;
          let libloggerf = 5;
         fieldg = [frame_szg.length];
         libloggerf >>= Math.min(Math.abs(3), 2);
         frame_szg = "3";
         frame_szg = `${(frame_szg == String.fromCharCode(73,0) ? fieldg.length : frame_szg.length)}`;
      sheet_.set(`${refreshp}`, refreshp & 1);
   for (let a = 0; a < 1; a++) {
      agreementw.set(diceM, diceM.length);
   }
       let foreground1 = 0;
       let latn7 = 5;
          let iconT: Map<any, any> = new Map([[String.fromCharCode(116,95,57,51,95,100,105,115,109,105,115,115,101,115,0),19], [String.fromCharCode(116,101,108,95,107,95,56,55,0),610]]);
         foreground1 |= latn7 | iconT.size;
         latn7 /= Math.max(5, 3);
       let screenQ = String.fromCharCode(112,101,114,115,111,110,95,111,95,54,55,0);
      if ((foreground1 ^ screenQ.length) == 3 && (foreground1 ^ screenQ.length) == 3) {
         screenQ = `${latn7}`;
      }
       let armvav = 1.0;
       let malaysiaY = 4.0;
      while (armvav < 5.10) {
         malaysiaY += latn7;
         break;
      }
      gmaila += parseFloat(`${latn7 | foreground1}`);
       let hooksP = String.fromCharCode(103,95,50,50,95,101,120,105,115,116,105,110,103,0);
       let phonea: Map<any, any> = new Map([[String.fromCharCode(118,115,102,114,97,109,101,95,56,95,56,52,0),false ], [String.fromCharCode(108,95,49,53,95,115,112,97,99,101,0),false ], [String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,115,95,54,50,0),false ]]);
         hooksP += `${hooksP.length}`;
         hooksP += `${phonea.size / 1}`;
      if (2 >= (hooksP.length & 1) && (phonea.size & 1) >= 2) {
         phonea.set(hooksP, 2);
      }
      if (!hooksP.includes(`${phonea.size}`)) {
         phonea.set(`${hooksP}`, 1 ^ phonea.size);
      }
          let termsk = String.fromCharCode(98,95,55,55,95,118,97,108,105,100,97,116,101,0);
          let viewsi = 2;
         hooksP += `${phonea.size}`;
         termsk = `${2 - viewsi}`;
         viewsi %= Math.max(1, (termsk == String.fromCharCode(66,0) ? termsk.length : viewsi));
       let basketballC = String.fromCharCode(117,95,50,51,95,105,99,101,0);
      sheet_.set(`${cancelt.length}`, cancelt.length);
   while (refreshp < 2) {
       let listV = 4.0;
       let statsC = 1.0;
       let modeh = String.fromCharCode(121,95,53,52,95,102,117,116,117,114,101,0);
       let nativeex8 = String.fromCharCode(115,95,49,48,48,95,97,114,116,105,115,116,0);
       let strF = String.fromCharCode(115,95,52,48,95,104,117,109,97,110,0);
      if (!strF.includes(`${modeh.length}`)) {
         modeh = `${modeh.length}`;
      }
      let filterd = 6740894.0 <= listV;
      do {
         listV /= Math.max((parseFloat(`${String.fromCharCode(83,0) == modeh ? modeh.length : strF.length}`)), 5);
         if (filterd) {
            break;
         }
      } while (((nativeex8.length / 1) > 2 && (parseInt(`${listV}`) - 1) > 2) && filterd);
          let screen7 = 3.0;
         statsC *= parseFloat(`${parseInt(`${statsC}`) + 1}`);
         screen7 -= parseFloat(`${2}`);
      let cornerc = modeh == String.fromCharCode(119,118,116,121,113,120,0);
      do {
         modeh = `${parseInt(`${statsC}`) >> (Math.min(2, Math.abs(parseInt(`${listV}`))))}`;
         if (cornerc) {
            break;
         }
      } while (cornerc && (strF.length <= 2));
         nativeex8 += `${strF.length}`;
      for (let o = 0; o < 2; o++) {
          let castingD = true;
         modeh += `${2 & nativeex8.length}`;
         castingD = (!castingD ? castingD : castingD);
      }
       let indicatorC = String.fromCharCode(103,95,53,55,95,115,104,111,119,0);
       let shrinkC = 4.0;
       let expandP = String.fromCharCode(104,95,49,55,95,98,105,119,103,116,0);
         modeh = `${parseInt(`${listV}`) | 1}`;
      while (strF.startsWith(nativeex8)) {
         strF += `${(String.fromCharCode(67,0) == indicatorC ? parseInt(`${shrinkC}`) : indicatorC.length)}`;
         break;
      }
         statsC -= (parseFloat(`${String.fromCharCode(68,0) == nativeex8 ? nativeex8.length : indicatorC.length}`));
         listV /= Math.max(parseFloat(`${indicatorC.length >> (Math.min(3, expandP.length))}`), 2);
         indicatorC = `${1 + parseInt(`${listV}`)}`;
      for (let w = 0; w < 1; w++) {
          let hookst = String.fromCharCode(114,111,102,105,108,101,95,122,95,54,53,0);
         shrinkC /= Math.max(5, (String.fromCharCode(107,0) == indicatorC ? hookst.length : indicatorC.length));
      }
      ajaxS *= 3 | parseInt(`${listV}`);
      break;
   }
      gmaila *= parseFloat(`${parseInt(`${ajaxS}`)}`);
   while (!Array.from(agreementw.values()).includes(cancelt.length)) {
      cancelt.push(parseInt(`${gestures4}`) | 1);
      break;
   }
      refreshp %= Math.max(4, parseInt(`${gmaila}`));
   if ((refreshp >> (Math.min(Math.abs(4), 1))) > 2 || 3 > (cancelt.length >> (Math.min(Math.abs(4), 5)))) {
      cancelt.push(((logof ? 1 : 5) / (Math.max(5, parseInt(`${gestures4}`)))));
   }

    if (componentRef && componentRef.current != null) {

   for (let r = 0; r < 2; r++) {
      gestures4 *= parseFloat(`${agreementw.size / (Math.max(10, diceM.length))}`);
   }
       let recommendationV = String.fromCharCode(113,95,50,95,100,112,99,109,0);
       let checkboxO = 2;
      for (let q = 0; q < 3; q++) {
         checkboxO &= checkboxO;
      }
         recommendationV += "1";
         recommendationV = "3";
       let downloadz = 3;
      for (let u = 0; u < 3; u++) {
          let thailandJ = 2.0;
         downloadz /= Math.max(3, checkboxO);
         thailandJ *= parseFloat(`${parseInt(`${thailandJ}`) >> (Math.min(1, Math.abs(3)))}`);
      }
          let viewero = 1.0;
         downloadz ^= parseInt(`${viewero}`);
      ajaxS -= libfb1;
      kuaishouL = libfb1 <= 60 || ajaxS <= 62.68;
   if (diceM.length <= parseInt(`${ajaxS}`)) {
      diceM += `${cancelt.length / 2}`;
   }
   while (kuaishouL) {
      kuaishouL = agreementw.get(`${transferc}`) != null;
      break;
   }
   let baseJ = logof ? !logof : logof;
   do {
       let recommendation_ = 0.0;
       let show5 = false;
       let actionss = 5.0;
       let mbsplasht = String.fromCharCode(108,104,115,95,107,95,57,52,0);
         mbsplasht = `${parseInt(`${recommendation_}`) ^ 2}`;
       let appst = String.fromCharCode(115,116,114,105,115,116,97,114,116,95,49,95,54,49,0);
       let sliderZ = String.fromCharCode(115,117,98,108,97,121,111,117,116,95,102,95,53,54,0);
         recommendation_ -= parseFloat(`${2}`);
      if (!show5 && (2.7 + actionss) >= 4.61) {
         actionss *= (appst == String.fromCharCode(83,0) ? appst.length : (show5 ? 2 : 5));
      }
          let progressC = String.fromCharCode(109,101,116,97,100,97,116,97,95,114,95,50,48,0);
          let changew = 4;
          let flipperx = 0.0;
         show5 = (parseInt(`${recommendation_}`) + sliderZ.length) >= 8;
         progressC += `${(String.fromCharCode(106,0) == progressC ? progressC.length : parseInt(`${flipperx}`))}`;
         changew ^= 3 / (Math.max(7, changew));
         flipperx /= Math.max(1, 1 * progressC.length);
      let codegenx = show5 ? !show5 : show5;
      do {
          let register_rfA: Array<any> = [String.fromCharCode(115,104,105,102,116,95,115,95,54,52,0), String.fromCharCode(109,111,114,112,104,101,100,95,97,95,49,50,0)];
         show5 = appst == String.fromCharCode(98,0);
         register_rfA = [register_rfA.length ^ 3];
         if (codegenx) {
            break;
         }
      } while (codegenx && (5.41 == (recommendation_ * 3.50) && !show5));
      let otherH = 6480867.0 <= recommendation_;
      do {
         recommendation_ += parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${actionss}`))))}`);
         if (otherH) {
            break;
         }
      } while (otherH && ((parseInt(`${recommendation_}`) - mbsplasht.length) == 1));
         recommendation_ /= Math.max((parseFloat(`${sliderZ == String.fromCharCode(74,0) ? sliderZ.length : parseInt(`${recommendation_}`)}`)), 3);
         show5 = 86.68 <= (recommendation_ - actionss);
      for (let j = 0; j < 3; j++) {
          let loadingk: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,48,95,53,49,0),77], [String.fromCharCode(116,116,97,101,110,99,95,119,95,57,49,0),391]]);
          let carouselz = true;
          let encrypto = String.fromCharCode(115,95,55,57,95,118,97,108,117,108,101,0);
          let sinal = String.fromCharCode(111,114,100,101,114,105,110,103,95,57,95,57,49,0);
         actionss += 2;
         loadingk = new Map([[`${carouselz}`, (encrypto == String.fromCharCode(106,0) ? encrypto.length : (carouselz ? 4 : 3))]]);
         sinal = `${encrypto.length}`;
      }
      for (let c = 0; c < 1; c++) {
         mbsplasht += `${(parseInt(`${actionss}`) ^ (show5 ? 2 : 5))}`;
      }
      let ewardedm = 5384885.0 <= recommendation_;
      do {
         recommendation_ -= parseFloat(`${sliderZ.length ^ mbsplasht.length}`);
         if (ewardedm) {
            break;
         }
      } while (ewardedm && (mbsplasht.endsWith(`${recommendation_}`)));
      logof = cancelt.includes(refreshp);
      if (baseJ) {
         break;
      }
   } while ((sheet_.size >= 2) && baseJ);
      kuaishouL = null == agreementw.get(`${refreshp}`);
       let libsentryE = 2.0;
       let tumbnailj: Map<any, any> = new Map([[String.fromCharCode(108,97,115,114,95,53,95,52,48,0),837], [String.fromCharCode(118,112,108,112,102,95,50,95,53,55,0),143]]);
       let libavformat0 = 4;
         libsentryE /= Math.max(libavformat0, 5);
          let typingH = String.fromCharCode(117,110,108,111,99,107,95,119,95,54,49,0);
          let typesm: Array<any> = [910, 470];
          let dplus3 = 1;
         libavformat0 /= Math.max(5, tumbnailj.size | libavformat0);
         typingH += `${dplus3 * typesm.length}`;
         typesm = [2];
         dplus3 *= typesm.length & 2;
      let arean = libavformat0 <= 8743650;
      do {
         libavformat0 *= 1;
         if (arean) {
            break;
         }
      } while ((libavformat0 == 3) && arean);
      while (!Array.from(tumbnailj.keys()).includes(`${libsentryE}`)) {
         libsentryE += 1;
         break;
      }
         tumbnailj = new Map([[`${tumbnailj.size}`, parseInt(`${libsentryE}`)]]);
      if ((libsentryE / (Math.max(6, libavformat0))) >= 4.22 || 1 >= (libavformat0 / (Math.max(parseInt(`${libsentryE}`), 5)))) {
          let libturbomodulejsijniu = String.fromCharCode(105,95,52,49,95,105,110,102,105,110,105,116,101,0);
          let stationsW = String.fromCharCode(120,95,56,54,95,119,104,105,116,101,115,0);
          let libavformatm: Array<any> = [String.fromCharCode(105,95,53,48,95,108,111,103,0), String.fromCharCode(105,95,57,57,95,105,110,99,114,101,109,101,110,116,0)];
          let zoom_ = 4.0;
          let button5 = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,119,95,49,51,0);
         libavformat0 &= 1;
         libturbomodulejsijniu += "1";
         stationsW = "3";
         libavformatm.push((String.fromCharCode(98,0) == stationsW ? stationsW.length : parseInt(`${zoom_}`)));
         zoom_ /= Math.max(libturbomodulejsijniu.length - 2, 1);
         button5 = `${stationsW.length}`;
      }
         tumbnailj = new Map([[`${tumbnailj.size}`, tumbnailj.size]]);
         libsentryE /= Math.max(1, libavformat0 - tumbnailj.size);
      let libreactnativeblobp = tumbnailj.size <= 9435096;
      do {
         tumbnailj = new Map([[`${tumbnailj.size}`, parseInt(`${libsentryE}`)]]);
         if (libreactnativeblobp) {
            break;
         }
      } while (((tumbnailj.size - libsentryE) <= 2.44 || 2.52 <= (libsentryE - 2.44)) && libreactnativeblobp);
      kuaishouL = !kuaishouL;
      sheet_.set(`${gestures4}`, parseInt(`${gestures4}`) / (Math.max(2, 3)));
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   while (interstitiald.size > cancelt.length) {
       let forwardx = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,119,95,56,0);
       let mountingm = true;
      let videocommonh = mountingm ? !mountingm : mountingm;
      do {
         mountingm = forwardx.includes(`${mountingm}`);
         if (videocommonh) {
            break;
         }
      } while ((forwardx.startsWith(`${mountingm}`)) && videocommonh);
      while (forwardx.endsWith(`${mountingm}`)) {
          let libpangleflippedB = String.fromCharCode(120,95,55,49,95,118,112,99,120,0);
          let libfb0: Array<any> = [112, 359];
         mountingm = (libpangleflippedB.length + libfb0.length) > 88;
         break;
      }
         forwardx += `${(forwardx == String.fromCharCode(108,0) ? (mountingm ? 1 : 5) : forwardx.length)}`;
      for (let q = 0; q < 1; q++) {
         forwardx += `${(forwardx == String.fromCharCode(86,0) ? forwardx.length : (mountingm ? 5 : 5))}`;
      }
      while (!mountingm) {
          let libswscale_ = 5.0;
          let moviesC: Map<any, any> = new Map([[String.fromCharCode(115,95,54,51,95,102,116,118,109,110,111,100,101,0),false ], [String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,95,56,95,52,57,0),true ], [String.fromCharCode(110,95,49,53,95,99,111,112,116,115,0),false ]]);
          let colorsJ: Map<any, any> = new Map([[String.fromCharCode(106,95,54,55,95,105,100,97,116,0),796], [String.fromCharCode(115,104,97,108,108,111,119,95,107,95,56,52,0),922]]);
          let calendarq = 4;
         forwardx = `${((mountingm ? 1 : 4) | parseInt(`${libswscale_}`))}`;
         libswscale_ -= calendarq;
         moviesC = new Map([[`${moviesC.size}`, calendarq]]);
         colorsJ = new Map([[`${colorsJ.size}`, calendarq]]);
         break;
      }
         forwardx = `${forwardx.length}`;
      interstitiald = new Map([[`${gestures4}`, parseInt(`${gestures4}`) * 3]]);
      break;
   }
      libfb1 &= parseInt(`${gestures4}`) / 3;
       let friends6: Map<any, any> = new Map([[String.fromCharCode(105,95,52,50,95,115,112,108,105,116,116,101,100,0),true ], [String.fromCharCode(116,101,115,116,110,101,116,95,112,95,57,55,0),true ], [String.fromCharCode(118,105,111,108,101,116,95,105,95,53,49,0),false ]]);
       let champion_ = false;
         friends6 = new Map([[`${friends6.size}`, friends6.size]]);
      let taiwanf = 5530653 <= friends6.size;
      do {
         friends6.set(`${champion_}`, friends6.size);
         if (taiwanf) {
            break;
         }
      } while (taiwanf && ((friends6.size | 5) < 5 || 5 < friends6.size));
      logof = 7 < interstitiald.size;
   while ((5 - cancelt.length) < 4 && 4.78 < (gestures4 + 2.97)) {
       let injuryH = true;
       let nterstitial_ = String.fromCharCode(99,108,111,115,101,95,55,95,53,48,0);
       let frame_9od: Array<any> = [592, 302];
      if (!injuryH && nterstitial_.length < 1) {
          let sell8 = 0.0;
          let change0 = String.fromCharCode(112,95,51,51,95,114,101,99,118,102,114,111,109,0);
         nterstitial_ += `${3 << (Math.min(Math.abs(parseInt(`${sell8}`)), 2))}`;
         sell8 += change0.length | change0.length;
      }
      while (injuryH && nterstitial_.length < 1) {
          let launchf = 5;
         injuryH = 51 == launchf || nterstitial_ == String.fromCharCode(120,0);
         break;
      }
          let playercommon4 = String.fromCharCode(122,95,55,56,95,115,105,112,114,0);
          let overlayq = String.fromCharCode(115,116,105,99,107,95,50,95,49,0);
          let regengr = 5.0;
         frame_9od = [overlayq.length % (Math.max(4, nterstitial_.length))];
         playercommon4 += `${playercommon4.length << (Math.min(Math.abs(2), 5))}`;
         overlayq += `${parseInt(`${regengr}`)}`;
         regengr /= Math.max(4, playercommon4.length % (Math.max(3, 2)));
      let libffmpegkitO = 7804935 >= nterstitial_.length;
      do {
         nterstitial_ = `${frame_9od.length}`;
         if (libffmpegkitO) {
            break;
         }
      } while (libffmpegkitO && (1 > nterstitial_.length || !injuryH));
       let textlayoutmanagerQ = false;
      while (injuryH) {
         injuryH = nterstitial_ == String.fromCharCode(74,0);
         break;
      }
         frame_9od.push(frame_9od.length & 3);
      while (nterstitial_.length <= 3) {
         nterstitial_ += "2";
         break;
      }
         nterstitial_ = `${(2 ^ (injuryH ? 2 : 3))}`;
      cancelt.push(2 * interstitiald.size);
      break;
   }
      transferc &= parseInt(`${ajaxS}`) ^ 3;
   if (5 < transferc) {
      transferc >>= Math.min(Math.abs(agreementw.size), 1);
   }
   if (agreementw.get(`${gmaila}`) != null) {
       let libflipper3: Map<any, any> = new Map([[String.fromCharCode(99,95,51,55,95,104,97,115,104,116,97,103,115,0),true ], [String.fromCharCode(119,95,49,48,48,95,117,110,99,111,110,102,105,103,117,114,101,0),false ], [String.fromCharCode(109,101,110,116,105,111,110,115,95,110,95,51,56,0),false ]]);
       let away4 = String.fromCharCode(113,117,101,117,101,95,122,95,51,57,0);
       let sigmobz = 5.0;
      if (away4.endsWith(`${sigmobz}`)) {
          let bellD = String.fromCharCode(103,111,98,98,108,101,95,97,95,51,55,0);
          let adult2 = String.fromCharCode(113,95,52,53,0);
          let utilsa = 4.0;
          let pausey: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,115,105,109,105,108,97,114,105,116,121,0),227], [String.fromCharCode(111,95,50,50,95,112,97,103,101,115,0),574]]);
         away4 += `${pausey.size << (Math.min(3, Math.abs(parseInt(`${utilsa}`))))}`;
         bellD = "2";
         adult2 = `${bellD.length / (Math.max(2, 3))}`;
         utilsa /= Math.max(1, parseFloat(`${bellD.length - 1}`));
         pausey.set(bellD, (bellD == String.fromCharCode(80,0) ? bellD.length : adult2.length));
      }
      while (5 > libflipper3.size) {
         away4 = `${parseInt(`${sigmobz}`)}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         away4 += "1";
      }
         libflipper3 = new Map([[away4, away4.length & parseInt(`${sigmobz}`)]]);
         away4 += "3";
          let mbbannerU = 2.0;
          let fastforward3 = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,120,95,55,51,0);
          let downloadS: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,99,111,110,110,101,99,116,0),919], [String.fromCharCode(115,117,98,108,97,121,101,114,115,95,115,95,54,56,0),832]]);
         sigmobz -= parseInt(`${sigmobz}`);
         mbbannerU += (parseFloat(`${String.fromCharCode(98,0) == fastforward3 ? parseInt(`${mbbannerU}`) : fastforward3.length}`));
         downloadS = new Map([[`${downloadS.size}`, 3 << (Math.min(2, fastforward3.length))]]);
         libflipper3.set(`${away4}`, 2);
      while (away4.endsWith(`${libflipper3.size}`)) {
         libflipper3.set(`${sigmobz}`, libflipper3.size);
         break;
      }
      if (4 <= (parseInt(`${sigmobz}`) * libflipper3.size) || 2.57 <= (sigmobz * libflipper3.size)) {
          let hooks7 = String.fromCharCode(115,101,114,118,105,99,101,115,95,111,95,57,49,0);
          let direct6 = 3;
          let libfba: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,95,104,95,55,52,0),990], [String.fromCharCode(118,95,50,50,95,119,111,114,107,115,0),271], [String.fromCharCode(112,114,105,110,116,111,117,116,95,53,95,57,56,0),259]]);
         sigmobz *= away4.length;
         hooks7 = `${1 >> (Math.min(4, hooks7.length))}`;
         direct6 += 1 ^ hooks7.length;
         libfba = new Map([[`${libfba.size}`, direct6 & libfba.size]]);
      }
      gmaila -= (parseFloat(`${parseInt(`${gestures4}`) & (kuaishouL ? 2 : 4)}`));
   }
   let infoH = 6949685.0 >= ajaxS;
   do {
      ajaxS += interstitiald.size & parseInt(`${gestures4}`);
      if (infoH) {
         break;
      }
   } while (((3.86 - ajaxS) > 5.28) && infoH);
       let commonS = false;
       let libflippere: Map<any, any> = new Map([[String.fromCharCode(104,97,108,108,95,116,95,51,57,0),true ], [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,117,95,53,0),true ]]);
         commonS = (76 <= ((!commonS ? 76 : libflippere.size) / (Math.max(libflippere.size, 9))));
       let cancelu = String.fromCharCode(121,95,49,55,95,103,117,97,114,97,110,116,101,101,0);
      while (!commonS) {
         commonS = 63 < cancelu.length;
         break;
      }
      if (libflippere.size > 3) {
         cancelu = `${(libflippere.size ^ (commonS ? 4 : 2))}`;
      }
         commonS = !commonS;
      while (3 < (4 * libflippere.size)) {
          let cricketa: Array<any> = [845, 694];
          let singaporea = String.fromCharCode(116,95,52,95,120,111,102,102,115,101,116,0);
          let pressureL = 4.0;
         libflippere.set(cancelu, cancelu.length - 3);
         cricketa = [parseInt(`${pressureL}`)];
         singaporea += `${singaporea.length % (Math.max(2, 3))}`;
         pressureL += parseInt(`${pressureL}`);
         break;
      }
      diceM += `${interstitiald.size * cancelt.length}`;
        console.log('Position:', {x, y, width, height, pageX, pageY});
        setRefPosition({x: pageX, y: pageY, width: width, height: height});
      });
    }
  };
  return (
    <>
 
      <View
        style={containerStyle}
       // onLayout={() => getPosition()}
        ref={componentRef}>
        <View style={styles.timerIndicatorContainer}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={vipGuideModal} transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <View
        style={{
          position: 'absolute',
          top: refPosition.y ,
          left: refPosition.x ,
        }}>
        <View style={styles.timerIndicatorContainer}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

          <View
            style={{
              position: 'absolute',
              top: refPosition.y + 30,
              left: 55,
            }}>
            <VipGuideModal
            contentTemplate={3}
              width="120%"
              isLeft={true}
              onClose={(value: boolean) => setVipGuideModal(value)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles: Record<string, ViewStyle | TextStyle> = {
  timerIndicatorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    paddingVertical: 4,
    paddingHorizontal: 5,
    flex: 1,
  },
  indicatorText: {
    fontSize: 14,
  },
};

export default CountdownIndicator;
