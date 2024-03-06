import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./yys_component_attributedstring"
import { useCallback } from "react";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { screenModel } from "@type/yys_service_setting";
import { UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";

const commonModels = require('@static/images/backwardViewer.png');
const sportBg = require('@static/images/pangleHandlerMbjscommon.png');

interface yys_ConfigureUimanager {
  showCondition: boolean;
  onClose: any;
  showBlur?: boolean;
}

export const CommonVipPrivilegeOverlay = ({ showCondition, onClose, showBlur }: yys_ConfigureUimanager) => {

  const navigator = useNavigation()

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);


  const handleOnPurchase = useCallback(() => {
       let libcrashsdkR = String.fromCharCode(121,95,56,54,95,115,97,109,112,108,101,102,109,116,0);
    let package_i_1 = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,104,95,56,55,0);
    let logoi = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,110,95,57,53,0);
    let cricket4 = true;
    let dropdownt = String.fromCharCode(116,114,97,107,95,106,95,56,53,0);
    let auto_5lx = true;
    let othere = String.fromCharCode(117,95,57,53,95,115,112,108,97,116,0);
    let private_l0 = String.fromCharCode(101,110,99,111,100,101,114,95,49,95,57,51,0);
    let teamb = 3;
    let whistleg = String.fromCharCode(114,95,53,57,95,117,115,101,114,115,0);
    let nterstitialL = String.fromCharCode(100,101,116,101,99,116,95,110,95,57,50,0);
   let layoutC = 8956071 >= private_l0.length;
   do {
      private_l0 += `${((auto_5lx ? 1 : 2))}`;
      if (layoutC) {
         break;
      }
   } while ((private_l0 == String.fromCharCode(69,0) && dropdownt != String.fromCharCode(48,0)) && layoutC);
   let mbbidG = cricket4 ? !cricket4 : cricket4;
   do {
      cricket4 = dropdownt == String.fromCharCode(107,0);
      if (mbbidG) {
         break;
      }
   } while (mbbidG && (1 >= logoi.length));
   if (logoi.startsWith(libcrashsdkR)) {
      logoi += `${dropdownt.length >> (Math.min(package_i_1.length, 5))}`;
   }
   if (1 > libcrashsdkR.length || 1 > othere.length) {
       let libfabricjniG = String.fromCharCode(104,95,57,57,95,115,101,103,102,101,97,116,117,114,101,115,0);
       let fillz = 1.0;
       let holderk = String.fromCharCode(97,99,101,115,115,111,114,121,95,119,95,53,56,0);
      if (parseFloat(`${holderk.length}`) == fillz) {
         fillz -= parseFloat(`${holderk.length}`);
      }
         holderk = `${(holderk == String.fromCharCode(89,0) ? holderk.length : parseInt(`${fillz}`))}`;
      while ((holderk.length - parseInt(`${fillz}`)) > 1) {
          let main_ga: Map<any, any> = new Map([[String.fromCharCode(115,95,52,55,95,98,114,117,115,104,0),952], [String.fromCharCode(115,95,52,53,0),172], [String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,101,95,52,0),636]]);
          let referrer7 = String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,53,95,49,50,0);
          let full_ = String.fromCharCode(116,95,52,56,95,97,119,97,105,116,105,110,103,0);
         holderk += `${libfabricjniG.length & parseInt(`${fillz}`)}`;
         main_ga.set(full_, 2 | full_.length);
         referrer7 = `${main_ga.size}`;
         break;
      }
         holderk += `${holderk.length / (Math.max(2, parseInt(`${fillz}`)))}`;
         holderk += `${libfabricjniG.length}`;
         libfabricjniG += `${(holderk == String.fromCharCode(109,0) ? parseInt(`${fillz}`) : holderk.length)}`;
          let libsentryN = false;
          let telemetryh = String.fromCharCode(112,114,111,112,111,115,97,108,115,95,48,95,52,0);
         libfabricjniG = `${telemetryh.length}`;
         libsentryN = (!libsentryN ? !libsentryN : libsentryN);
         telemetryh += `${((libsentryN ? 2 : 4))}`;
         fillz -= parseFloat(`${holderk.length - parseInt(`${fillz}`)}`);
       let volumeX = true;
      libcrashsdkR += `${(package_i_1.length * (cricket4 ? 4 : 2))}`;
   }

    onClose()

      logoi = `${(1 | (auto_5lx ? 1 : 3))}`;
       let valuesU = String.fromCharCode(100,101,98,117,103,98,111,120,95,114,95,51,57,0);
      for (let t = 0; t < 3; t++) {
         valuesU += `${(String.fromCharCode(78,0) == valuesU ? valuesU.length : valuesU.length)}`;
      }
       let castR = String.fromCharCode(108,105,116,101,114,97,108,95,118,95,50,48,0);
      while (castR.length > 3 || valuesU.length > 3) {
          let macau9 = String.fromCharCode(98,95,57,53,95,115,101,110,116,0);
          let klevinR = 0;
         castR = `${macau9.length}`;
         macau9 = `${klevinR - klevinR}`;
         break;
      }
      package_i_1 += `${(othere == String.fromCharCode(77,0) ? othere.length : (cricket4 ? 5 : 5))}`;
      auto_5lx = (dropdownt.length % (Math.max(4, othere.length))) < 4;
   if (package_i_1.length == 5) {
      private_l0 = `${othere.length + logoi.length}`;
   }
    navigator.navigate("付费VIP");
    
    
    
    
    
    
    
    
  }, [])

  const handleOnInvite = useCallback(() => {
       let libavformatU: Map<any, any> = new Map([[String.fromCharCode(120,112,111,115,117,114,101,95,119,95,57,49,0),String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,56,95,55,57,0)], [String.fromCharCode(99,109,112,97,100,100,114,95,97,95,53,0),String.fromCharCode(105,110,116,101,108,95,113,95,55,56,0)]]);
    let videoE: Map<any, any> = new Map([[String.fromCharCode(99,108,99,112,95,115,95,50,57,0),373], [String.fromCharCode(106,95,52,54,95,100,111,117,98,108,105,110,103,0),83], [String.fromCharCode(115,95,57,56,95,98,111,111,108,0),844]]);
    let update_e1h = 5;
    let klevinQ: Array<any> = [18, 502];
    let rewindq: Map<any, any> = new Map([[String.fromCharCode(102,97,117,108,116,121,95,49,95,54,56,0),339], [String.fromCharCode(108,95,51,49,95,103,111,108,111,109,98,0),4]]);
    let screenC: Array<any> = [818, 648];
    let libruntimeexecutor7 = String.fromCharCode(112,95,49,95,100,105,115,112,108,97,121,115,0);
    let checkboxZ = String.fromCharCode(122,95,52,52,95,114,101,118,101,114,115,101,0);
    let viewsQ = String.fromCharCode(108,105,115,116,105,110,103,95,110,95,54,51,0);
   let zoomi = libavformatU.size >= 7763142;
   do {
      libavformatU = new Map([[`${videoE.size}`, videoE.size * libavformatU.size]]);
      if (zoomi) {
         break;
      }
   } while (zoomi && (libruntimeexecutor7.includes(`${libavformatU.size}`)));
       let logoj: Array<any> = [959, 46];
       let countryP = String.fromCharCode(108,95,49,48,95,115,99,114,97,112,101,0);
          let modalv: Array<any> = [969, 400, 773];
          let splash_: Array<any> = [String.fromCharCode(100,114,105,118,101,114,115,95,57,95,50,56,0), String.fromCharCode(115,116,97,114,116,95,53,95,50,48,0)];
          let network_: Array<any> = [String.fromCharCode(106,95,54,53,95,115,97,109,112,108,105,110,103,0), String.fromCharCode(119,95,52,55,95,100,101,99,114,121,112,116,105,111,110,0), String.fromCharCode(119,100,101,99,95,113,95,54,48,0)];
         logoj.push(logoj.length | countryP.length);
         modalv.push(network_.length - splash_.length);
         splash_.push(2 & modalv.length);
         network_ = [modalv.length >> (Math.min(Math.abs(2), 1))];
          let logoq = String.fromCharCode(110,95,55,55,95,105,110,115,116,97,108,108,105,110,103,0);
         logoj.push(countryP.length + 1);
         logoq += `${logoq.length}`;
         countryP += `${countryP.length >> (Math.min(Math.abs(3), 5))}`;
      while ((logoj.length % (Math.max(1, 7))) < 4) {
         logoj = [logoj.length << (Math.min(countryP.length, 2))];
         break;
      }
      let activityZ = 8116191 <= countryP.length;
      do {
         countryP += `${logoj.length ^ 3}`;
         if (activityZ) {
            break;
         }
      } while ((3 > (logoj.length - 2)) && activityZ);
          let smallV = false;
          let mbsplash_ = true;
          let sorto = false;
         logoj = [(String.fromCharCode(84,0) == countryP ? (mbsplash_ ? 4 : 2) : countryP.length)];
         smallV = !sorto;
         mbsplash_ = (smallV ? sorto : !smallV);
      libruntimeexecutor7 += `${countryP.length / 1}`;
      checkboxZ += `${klevinQ.length >> (Math.min(2, Math.abs(update_e1h)))}`;
       let securityB = String.fromCharCode(108,101,110,103,116,104,115,95,119,95,55,55,0);
       let y_title3 = 4.0;
       let nextM = String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,99,95,50,0);
         securityB = "2";
      for (let s = 0; s < 3; s++) {
         securityB = `${parseInt(`${y_title3}`)}`;
      }
       let libfollyT = String.fromCharCode(100,101,116,97,99,104,101,100,95,111,95,50,54,0);
       let shareW = String.fromCharCode(103,95,52,54,95,103,101,116,100,105,103,105,116,0);
          let whiteF: Array<any> = [994, 832, 856];
          let libflipperi = 2;
         securityB = `${libfollyT.length}`;
         whiteF = [whiteF.length];
         libflipperi %= Math.max(5, 3 * libflipperi);
         securityB += "2";
      update_e1h ^= (securityB == String.fromCharCode(107,0) ? update_e1h : securityB.length);
   let greenI = 7609418 >= videoE.size;
   do {
      videoE.set(`${update_e1h}`, libavformatU.size);
      if (greenI) {
         break;
      }
   } while ((checkboxZ.length == 3) && greenI);
      klevinQ.push(klevinQ.length ^ update_e1h);
      update_e1h ^= 2;
   let photoX = update_e1h <= 8827830;
   do {
      update_e1h <<= Math.min(1, Math.abs(libavformatU.size + 2));
      if (photoX) {
         break;
      }
   } while (((update_e1h | rewindq.size) == 5) && photoX);
      update_e1h |= screenC.length;
   let desck = 9045523 <= screenC.length;
   do {
      screenC = [screenC.length | 2];
      if (desck) {
         break;
      }
   } while ((klevinQ.length <= screenC.length) && desck);
      libruntimeexecutor7 = `${screenC.length % 2}`;
   while (checkboxZ.length >= klevinQ.length) {
      checkboxZ += `${libavformatU.size ^ 2}`;
      break;
   }
   let castingt = 6832576 <= update_e1h;
   do {
      update_e1h <<= Math.min(Math.abs(libavformatU.size % 2), 2);
      if (castingt) {
         break;
      }
   } while (((rewindq.size / 2) > 5 && (update_e1h / (Math.max(2, 6))) > 4) && castingt);

    onClose()

   while (libavformatU.size < 1) {
      libavformatU.set(`${update_e1h}`, update_e1h);
      break;
   }
   let shareL = update_e1h >= 9238723;
   do {
      update_e1h |= update_e1h;
      if (shareL) {
         break;
      }
   } while ((!Array.from(libavformatU.keys()).includes(`${update_e1h}`)) && shareL);
   let entryA = libruntimeexecutor7 == String.fromCharCode(118,120,114,121,116,50,102,104,116,0);
   do {
       let episodesC = String.fromCharCode(101,95,55,52,95,101,110,115,117,114,101,100,0);
       let downloadingG = 5;
       let collectionS = 1;
       let sella = String.fromCharCode(117,105,100,115,95,108,95,52,53,0);
      for (let g = 0; g < 1; g++) {
         sella = `${collectionS}`;
      }
      if (2 < downloadingG) {
         downloadingG |= (sella == String.fromCharCode(118,0) ? sella.length : collectionS);
      }
      let halfI = downloadingG <= 5454604;
      do {
          let modeI = String.fromCharCode(105,110,116,101,108,95,120,95,49,51,0);
         downloadingG += sella.length;
         modeI += `${modeI.length % (Math.max(6, modeI.length))}`;
         if (halfI) {
            break;
         }
      } while ((episodesC.length >= downloadingG) && halfI);
         downloadingG &= episodesC.length;
      while (!episodesC.startsWith(sella)) {
         episodesC += "3";
         break;
      }
       let launchF = String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,95,112,95,56,50,0);
         sella += `${episodesC.length}`;
      if (2 < downloadingG) {
          let orientationh = String.fromCharCode(114,95,55,55,95,117,118,108,99,0);
          let filledy = String.fromCharCode(121,95,50,52,95,115,121,110,116,104,101,115,105,115,0);
          let confirmationo: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,97,110,110,117,108,97,114,0),474], [String.fromCharCode(100,95,53,51,95,112,97,99,105,110,103,0),355]]);
          let y_imagex = 5.0;
          let private_g20 = String.fromCharCode(99,111,100,101,119,111,114,100,95,119,95,51,54,0);
         downloadingG <<= Math.min(1, episodesC.length);
         orientationh = `${private_g20.length % (Math.max(2, 2))}`;
         filledy += `${confirmationo.size}`;
         confirmationo.set(private_g20, (private_g20 == String.fromCharCode(73,0) ? orientationh.length : private_g20.length));
         y_imagex *= 2 & filledy.length;
      }
      while ((4 << (Math.min(2, episodesC.length))) >= 5 && (episodesC.length << (Math.min(Math.abs(4), 5))) >= 5) {
         episodesC = `${(episodesC == String.fromCharCode(115,0) ? episodesC.length : collectionS)}`;
         break;
      }
         downloadingG ^= episodesC.length;
         downloadingG -= (String.fromCharCode(68,0) == launchF ? episodesC.length : launchF.length);
          let libfollyn = 2.0;
         episodesC = `${2 % (Math.max(collectionS, 5))}`;
         libfollyn /= Math.max(parseFloat(`${1}`), 1);
      libruntimeexecutor7 += `${downloadingG | 2}`;
      if (entryA) {
         break;
      }
   } while (entryA && ((libruntimeexecutor7.length << (Math.min(Math.abs(3), 4))) <= 4));
      screenC.push(checkboxZ.length + screenC.length);
   if (Array.from(rewindq.values()).includes(libavformatU.size)) {
      rewindq.set(libruntimeexecutor7, (String.fromCharCode(84,0) == libruntimeexecutor7 ? klevinQ.length : libruntimeexecutor7.length));
   }
   for (let a = 0; a < 1; a++) {
       let mapbufferk = String.fromCharCode(112,95,52,95,116,102,117,101,108,0);
      for (let p = 0; p < 3; p++) {
          let routerp: Map<any, any> = new Map([[String.fromCharCode(115,101,103,102,101,97,116,117,114,101,95,114,95,52,48,0),777], [String.fromCharCode(108,95,57,54,95,99,111,112,121,104,0),350]]);
          let gpayt = String.fromCharCode(98,95,55,56,95,118,105,101,119,101,114,115,0);
          let google6 = 3.0;
          let indexB = String.fromCharCode(99,95,49,50,95,100,101,109,111,0);
         mapbufferk += `${indexB.length}`;
         routerp = new Map([[`${routerp.size}`, routerp.size % 1]]);
         gpayt += `${gpayt.length}`;
         google6 += (String.fromCharCode(84,0) == gpayt ? gpayt.length : routerp.size);
         indexB += `${gpayt.length + parseInt(`${google6}`)}`;
      }
         mapbufferk += `${mapbufferk.length - mapbufferk.length}`;
         mapbufferk = `${mapbufferk.length}`;
      klevinQ = [(viewsQ == String.fromCharCode(121,0) ? viewsQ.length : klevinQ.length)];
   }
      rewindq = new Map([[`${screenC.length}`, 1 % (Math.max(update_e1h, 3))]]);
       let verticalQ = String.fromCharCode(112,114,111,116,111,95,117,95,57,51,0);
          let backwardg = 3.0;
         verticalQ = `${parseInt(`${backwardg}`)}`;
      while (verticalQ.length >= verticalQ.length) {
          let indicatork = 4.0;
          let kickB = 2.0;
          let flipperU = 0;
          let infoH = 5;
         verticalQ = `${parseInt(`${indicatork}`) / 3}`;
         indicatork *= 3;
         kickB += infoH >> (Math.min(Math.abs(flipperU), 3));
         flipperU /= Math.max(2 & infoH, 5);
         break;
      }
      let activityz = String.fromCharCode(116,51,54,51,57,122,0) == verticalQ;
      do {
         verticalQ = `${(verticalQ == String.fromCharCode(106,0) ? verticalQ.length : verticalQ.length)}`;
         if (activityz) {
            break;
         }
      } while ((verticalQ.length > verticalQ.length) && activityz);
      videoE = new Map([[`${screenC.length}`, screenC.length]]);
   while ((5 | rewindq.size) < 3 || (viewsQ.length | rewindq.size) < 5) {
       let macauV = 1.0;
       let infoX = 2;
       let overa = String.fromCharCode(97,100,97,112,116,115,95,108,95,49,57,0);
       let selectd = 1;
       let bodanG = 5;
      while ((macauV - 4.60) == 1.61 && (macauV - parseFloat(`${infoX}`)) == 4.60) {
         infoX %= Math.max(selectd, 4);
         break;
      }
          let servicet = String.fromCharCode(98,114,107,116,105,109,101,103,109,95,50,95,53,51,0);
          let heartK = String.fromCharCode(100,95,52,51,95,99,111,109,112,97,110,100,0);
          let gemfile8: Array<any> = [550, 219, 782];
         infoX *= parseInt(`${macauV}`) - infoX;
         servicet += `${heartK.length}`;
         heartK += `${heartK.length << (Math.min(Math.abs(3), 5))}`;
         gemfile8.push(heartK.length);
       let rulesv = false;
          let upgradef = 0.0;
          let sharedh: Map<any, any> = new Map([[String.fromCharCode(97,108,108,95,112,95,50,52,0),String.fromCharCode(97,95,51,53,95,100,105,97,108,108,101,100,0)], [String.fromCharCode(110,105,108,95,102,95,51,53,0),String.fromCharCode(102,95,54,51,95,112,114,101,100,105,99,116,105,111,110,115,0)]]);
         infoX ^= 1;
         upgradef *= 1;
         sharedh.set(`${upgradef}`, parseInt(`${upgradef}`) ^ 3);
         bodanG -= 3 >> (Math.min(Math.abs(parseInt(`${macauV}`)), 3));
          let stationP: Array<any> = [447, 837, 717];
         infoX *= parseInt(`${macauV}`);
         stationP = [stationP.length];
          let logout0 = 4;
          let libjsinspector2 = 3;
         bodanG *= libjsinspector2;
         logout0 >>= Math.min(Math.abs(logout0 - logout0), 3);
      let episodesF = 6878883 >= selectd;
      do {
          let qcopy_njk = false;
          let main_pC = 2.0;
         selectd *= bodanG;
         qcopy_njk = qcopy_njk || main_pC < 3.71;
         main_pC *= (parseInt(`${main_pC}`) + (qcopy_njk ? 1 : 1));
         if (episodesF) {
            break;
         }
      } while (episodesF && (rulesv && 1 == (selectd % (Math.max(1, 9)))));
      let e_imageZ = 6898814 >= infoX;
      do {
         infoX >>= Math.min(Math.abs(infoX ^ 3), 2);
         if (e_imageZ) {
            break;
         }
      } while (e_imageZ && ((infoX * macauV) == 5.75));
         bodanG >>= Math.min(overa.length, 4);
      if (!overa.includes(`${selectd}`)) {
          let configW = String.fromCharCode(112,97,115,119,111,114,100,95,100,95,54,52,0);
          let textinputU = String.fromCharCode(109,105,120,101,100,95,51,95,54,56,0);
         overa = `${infoX - 1}`;
         configW = `${2 % (Math.max(10, textinputU.length))}`;
         textinputU += `${configW.length}`;
      }
         bodanG /= Math.max(selectd % 2, 5);
      if (rulesv) {
         rulesv = infoX == 100;
      }
      while ((2 >> (Math.min(3, Math.abs(selectd)))) < 3) {
         rulesv = String.fromCharCode(104,0) == overa;
         break;
      }
       let chartq = 3.0;
       let suggestionz = 2.0;
      rewindq = new Map([[`${screenC.length}`, 3]]);
      break;
   }
   let floateru = 5471114 <= checkboxZ.length;
   do {
      checkboxZ += `${screenC.length}`;
      if (floateru) {
         break;
      }
   } while (floateru && ((checkboxZ.length * 5) > 1));
      libavformatU.set(`${update_e1h}`, update_e1h);
   for (let d = 0; d < 2; d++) {
       let volumeq = String.fromCharCode(117,95,55,48,95,112,97,99,107,101,116,0);
       let completed = 5;
       let qaagu = 3.0;
         volumeq += `${volumeq.length}`;
      for (let i = 0; i < 3; i++) {
         volumeq = `${3 >> (Math.min(3, Math.abs(parseInt(`${qaagu}`))))}`;
      }
      let overZ = 4916969 >= volumeq.length;
      do {
          let emptyP = true;
          let proxyq: Array<any> = [String.fromCharCode(112,95,49,95,114,101,108,97,116,101,100,0), String.fromCharCode(107,95,56,52,95,118,97,114,105,97,98,108,101,115,0)];
          let fadfdeebbbfdabbbabdadfaaddaag: Array<any> = [142, 839];
          let malaysiap = 2.0;
          let middleD = 4.0;
         volumeq += `${fadfdeebbbfdabbbabdadfaaddaag.length}`;
         emptyP = emptyP || malaysiap >= 88.84;
         proxyq.push((3 >> (Math.min(5, Math.abs((emptyP ? 5 : 5))))));
         fadfdeebbbfdabbbabdadfaaddaag = [((emptyP ? 5 : 1) % 1)];
         malaysiap /= Math.max(parseFloat(`${parseInt(`${middleD}`)}`), 4);
         middleD += parseFloat(`${proxyq.length + 2}`);
         if (overZ) {
            break;
         }
      } while (overZ && ((completed ^ volumeq.length) > 5));
          let crownB = String.fromCharCode(115,116,100,95,120,95,50,48,0);
         volumeq += `${crownB.length}`;
          let runtimescheduler_: Map<any, any> = new Map([[String.fromCharCode(99,95,57,95,112,114,101,97,109,98,117,108,97,0),true ], [String.fromCharCode(120,95,50,95,99,108,111,115,101,112,0),true ], [String.fromCharCode(98,95,53,56,95,112,114,101,101,109,112,116,105,118,101,0),false ]]);
          let renderM = String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,119,95,55,54,0);
          let tempi = String.fromCharCode(106,100,109,97,115,116,101,114,95,99,95,55,49,0);
         qaagu /= Math.max(3 ^ completed, 2);
         runtimescheduler_.set(tempi, 2 ^ runtimescheduler_.size);
         renderM = `${3 ^ renderM.length}`;
         tempi = `${(tempi == String.fromCharCode(107,0) ? tempi.length : renderM.length)}`;
          let navigationW = 5.0;
         completed |= completed;
         navigationW -= parseInt(`${navigationW}`);
         volumeq = `${completed + 1}`;
      while (!volumeq.startsWith(`${completed}`)) {
         completed &= 1;
         break;
      }
          let scrollviewa = String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,112,95,52,55,0);
          let telegramU: Array<any> = [179, 666, 198];
          let productE: Map<any, any> = new Map([[String.fromCharCode(99,104,101,98,121,115,104,101,118,95,100,95,57,53,0),338], [String.fromCharCode(113,117,97,110,116,120,95,54,95,57,51,0),320]]);
         volumeq += `${(scrollviewa == String.fromCharCode(54,0) ? scrollviewa.length : telegramU.length)}`;
         telegramU.push(3);
      klevinQ = [libavformatU.size + 2];
   }
   while (5 <= (checkboxZ.length << (Math.min(Math.abs(3), 2))) || (videoE.size << (Math.min(Math.abs(3), 3))) <= 5) {
      videoE.set(libruntimeexecutor7, libavformatU.size ^ 2);
      break;
   }
   if(yys_RelatedTooltips.isGuest(userState.user))
   {
      onClose()
      dispatch(showLoginAction());
   }
   else
   {
      navigator.navigate('邀请');
   }




  }, [])


  return (

    <VipPrivilegeModal
      titleText={"VIP升级权益"}
      benefitsTextsArray={['高清体育赛事  零时差感受赛场激情', '海量福利视频 你想要的这里都有', '高清画质 无广告观影体验']}
      imageGradientColors={['#D80E0E00', '#E80B0B']}
      contentGradientColors={['#E80B0B', '#740000']}
      coverBackground={sportBg}
      coverImage={commonModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
      onClose={onClose}
      showBlur={showBlur}
      showCondition={showCondition}
      showDarkBackdrop={true}
    />

  )
}

function dispatch(arg0: any) {
   throw new Error("Function not implemented.");
}
