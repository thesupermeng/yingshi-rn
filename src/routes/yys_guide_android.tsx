/**
 * user guide
 * init:
 *   put CRouteInitializer inside NavigationContainer
 * 
 * method: 
 *   toNamed => navigate by push (if exits in previoud will pop)
 *   offNamed => navigate by replace
 *   canBack => check can back to previous page or not
 *   back => back to previous page
 *   getParams => get current page parameters
 *   current => get current page details
 *   previous => get previous page details
 *   history => get all page details in stack
 *   
 *   method inside: toNamed, offNamed
 *      then => listen and callback if next screen close (callback params are receive from back method)
 */

import { useEffect } from "react";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter } from "react-native";

enum VXHongkong {
    VXActionsVideojs = 'then',
    VXContext = 'catch',
}

const eventKeyGenerator = (key: string, type: VXHongkong) => {
    return key + (type === VXHongkong.VXContext ? '-catch' : '-then')
}

export type yysReactnavigation = {
    key: string,
    name: string,
    params?: any,
    backParams?: any,
}

export class yysLibturbomodulejsijni {
    static #navigator: NavigationProp<{ [key: string]: any }> | null = null;
    static #historiesPages: yysReactnavigation[] = [];

    static pendingEvent: { pageName: string, thenEvent: any }[] = [];
    
    static #lastActoinPageName = '';

    static init = (navigation: NavigationProp<any>) => {
        if (this.#navigator !== null) return;

        this.#navigator = navigation;
        this.#navigator.addListener('state', this.#matchHistory);
    }

    static closeRouter = () => {
       let chatroombackgroundq = 4.0;
    let trashE = 0;
    let defaultprofilepict = String.fromCharCode(116,95,49,50,95,118,116,97,103,0);
    let libcxxcomponentsi = String.fromCharCode(97,95,55,53,95,98,108,97,107,101,115,0);
    let mounting7 = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,55,95,56,50,0);
    let klevin4: Array<any> = [String.fromCharCode(101,95,57,56,95,106,117,103,103,108,101,0), String.fromCharCode(108,101,97,102,110,111,100,101,95,117,95,50,57,0)];
    let videoo = String.fromCharCode(110,111,118,101,99,95,122,95,51,57,0);
    let iconlogoutK = 2.0;
    let assetsJ = String.fromCharCode(105,95,56,50,95,109,105,109,101,0);
    let with_qh2 = 3;
    let dependencyq = 3.0;
    let singapore5 = 2.0;
   let vignettec = libcxxcomponentsi.length <= 7070941;
   do {
       let reactnativeultimatelistviewc = 5.0;
       let binddatasz = String.fromCharCode(113,95,55,53,95,102,105,114,115,116,108,121,0);
       let rnewssharej: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,113,95,52,0),936], [String.fromCharCode(104,97,110,100,101,114,95,107,95,57,48,0),428]]);
       let math3 = 0;
         rnewssharej.set(`${math3}`, math3 ^ rnewssharej.size);
         binddatasz += `${parseInt(`${reactnativeultimatelistviewc}`) | 2}`;
      while ((1 - math3) > 5) {
         math3 &= math3 ^ rnewssharej.size;
         break;
      }
      for (let i = 0; i < 3; i++) {
         rnewssharej.set(`${math3}`, math3 / (Math.max(rnewssharej.size, 2)));
      }
      let iconnotificationnewt = reactnativeultimatelistviewc <= 6081306.0;
      do {
          let temperatureq = String.fromCharCode(112,114,105,109,97,114,105,108,121,95,113,95,49,53,0);
         reactnativeultimatelistviewc += 3 | rnewssharej.size;
         temperatureq = `${temperatureq.length + temperatureq.length}`;
         if (iconnotificationnewt) {
            break;
         }
      } while (iconnotificationnewt && (!Array.from(rnewssharej.values()).includes(reactnativeultimatelistviewc)));
      if (reactnativeultimatelistviewc < binddatasz.length) {
          let filledH = 5.0;
          let gradlewM = false;
          let largebrightnessN = String.fromCharCode(118,101,99,95,112,95,49,48,0);
         binddatasz = `${1 % (Math.max(5, math3))}`;
         filledH -= (parseInt(`${filledH}`) / (Math.max(6, (gradlewM ? 5 : 1))));
         gradlewM = largebrightnessN.length <= parseInt(`${filledH}`);
         largebrightnessN = `${parseInt(`${filledH}`)}`;
      }
      if (5.34 >= (reactnativeultimatelistviewc * 2.36)) {
          let pageP = String.fromCharCode(97,112,112,101,110,100,95,108,95,53,49,0);
          let smalll = String.fromCharCode(103,108,111,115,115,95,121,95,50,52,0);
          let imagesi = String.fromCharCode(109,95,56,52,95,112,114,105,110,116,111,117,116,0);
         reactnativeultimatelistviewc /= Math.max((smalll == String.fromCharCode(113,0) ? smalll.length : rnewssharej.size), 3);
         pageP = `${(String.fromCharCode(117,0) == pageP ? pageP.length : imagesi.length)}`;
         imagesi += `${imagesi.length}`;
      }
      let libffmpegkitf = 5885018.0 >= reactnativeultimatelistviewc;
      do {
         reactnativeultimatelistviewc -= 3;
         if (libffmpegkitf) {
            break;
         }
      } while (libffmpegkitf && (parseInt(`${reactnativeultimatelistviewc}`) > binddatasz.length));
         math3 ^= (String.fromCharCode(108,0) == binddatasz ? parseInt(`${reactnativeultimatelistviewc}`) : binddatasz.length);
       let downloaded1 = 0.0;
       let dependencyL = 1.0;
      let diceT = 8254349 <= math3;
      do {
         math3 &= parseInt(`${downloaded1}`);
         if (diceT) {
            break;
         }
      } while (diceT && (math3 == dependencyL));
          let usernamea: Array<any> = [String.fromCharCode(104,95,55,55,95,112,97,116,104,115,0), String.fromCharCode(113,95,55,53,0)];
         dependencyL *= usernamea.length ^ math3;
      libcxxcomponentsi += `${3 | libcxxcomponentsi.length}`;
      if (vignettec) {
         break;
      }
   } while ((videoo != libcxxcomponentsi) && vignettec);
   for (let w = 0; w < 1; w++) {
      chatroombackgroundq += parseFloat(`${parseInt(`${chatroombackgroundq}`)}`);
   }
      libcxxcomponentsi = `${2 - trashE}`;
      defaultprofilepict += `${klevin4.length / 3}`;
      mounting7 = `${klevin4.length % (Math.max(1, 3))}`;
      defaultprofilepict += `${assetsJ.length & 2}`;
      klevin4.push((mounting7 == String.fromCharCode(106,0) ? mounting7.length : assetsJ.length));
      defaultprofilepict += `${parseInt(`${iconlogoutK}`)}`;
   if (!assetsJ.endsWith(`${libcxxcomponentsi.length}`)) {
      assetsJ += "1";
   }
   while (trashE < chatroombackgroundq) {
      trashE >>= Math.min(Math.abs(trashE / (Math.max(libcxxcomponentsi.length, 10))), 2);
      break;
   }
   let turndownP = String.fromCharCode(101,50,100,48,97,103,108,107,0) == videoo;
   do {
       let iconwatchnowh = false;
       let typingloadingY = String.fromCharCode(121,95,53,49,95,100,114,105,118,105,110,103,0);
          let layouty = String.fromCharCode(122,95,50,52,95,111,118,101,114,117,115,101,0);
          let predictionlossp = 2.0;
         iconwatchnowh = (((iconwatchnowh ? layouty.length : 85) + layouty.length) >= 85);
         predictionlossp += 2;
      if (!typingloadingY.includes(`${iconwatchnowh}`)) {
          let signinupS = 2;
          let referrers = 1.0;
          let penaltymatchicony = 4;
          let greyticke = String.fromCharCode(114,95,50,54,95,99,111,109,112,111,115,101,100,0);
          let borderless9 = String.fromCharCode(97,109,114,119,98,95,102,95,52,53,0);
         typingloadingY += `${penaltymatchicony * 2}`;
         signinupS /= Math.max(signinupS & 3, 1);
         referrers /= Math.max(2, greyticke.length - 1);
         penaltymatchicony -= signinupS;
         greyticke = `${borderless9.length}`;
         borderless9 += `${greyticke.length}`;
      }
      let defaultbasketballbgG = iconwatchnowh ? !iconwatchnowh : iconwatchnowh;
      do {
          let mimoM = String.fromCharCode(119,95,52,49,95,115,117,112,112,111,114,116,115,0);
          let smallorangeman4 = 0;
         iconwatchnowh = 14 > typingloadingY.length;
         mimoM = `${(mimoM == String.fromCharCode(75,0) ? smallorangeman4 : mimoM.length)}`;
         smallorangeman4 |= smallorangeman4;
         if (defaultbasketballbgG) {
            break;
         }
      } while ((!typingloadingY.startsWith(`${iconwatchnowh}`)) && defaultbasketballbgG);
      for (let y = 0; y < 1; y++) {
          let gradlewW = String.fromCharCode(116,95,53,51,95,99,108,111,115,101,99,98,0);
         iconwatchnowh = !gradlewW.includes(`${iconwatchnowh}`);
      }
      if (typingloadingY.includes(`${iconwatchnowh}`)) {
         iconwatchnowh = typingloadingY.length < 77;
      }
      if (1 == typingloadingY.length || !iconwatchnowh) {
         iconwatchnowh = !iconwatchnowh;
      }
      videoo = `${parseInt(`${iconlogoutK}`) % 1}`;
      if (turndownP) {
         break;
      }
   } while ((5.28 == (chatroombackgroundq + parseFloat(`${videoo.length}`)) || (chatroombackgroundq + 5.28) == 1.13) && turndownP);
       let loadingspinnerP = String.fromCharCode(117,110,98,111,110,100,95,122,95,52,53,0);
       let controls = String.fromCharCode(97,114,103,118,95,99,95,53,0);
      while (controls != String.fromCharCode(85,0)) {
         loadingspinnerP = `${loadingspinnerP.length}`;
         break;
      }
      while (loadingspinnerP.length <= controls.length) {
         loadingspinnerP += `${loadingspinnerP.length}`;
         break;
      }
          let frame_7jG = 0.0;
          let philippinesF = String.fromCharCode(102,108,105,99,95,99,95,52,56,0);
          let nativeexl = String.fromCharCode(101,95,49,48,95,114,97,110,107,105,110,103,115,0);
         controls += `${loadingspinnerP.length}`;
         frame_7jG -= parseFloat(`${philippinesF.length}`);
         philippinesF = `${parseInt(`${frame_7jG}`)}`;
         nativeexl += `${parseInt(`${frame_7jG}`) << (Math.min(philippinesF.length, 4))}`;
       let unreadD: Array<any> = [String.fromCharCode(105,116,97,108,105,99,95,98,95,53,52,0), String.fromCharCode(97,120,105,120,95,101,95,53,54,0)];
       let sliderC: Array<any> = [551, 516];
          let awayplayerB = 4;
          let awayplayerP = false;
         loadingspinnerP = "3";
         awayplayerB += awayplayerB % 3;
         awayplayerP = awayplayerP || awayplayerB > 81;
       let reactnativejsk: Array<any> = [String.fromCharCode(112,95,55,50,95,109,112,105,98,110,0), String.fromCharCode(120,95,53,50,95,102,111,108,100,0)];
      trashE <<= Math.min(Math.abs(parseInt(`${chatroombackgroundq}`)), 1);
       let embedZ: Map<any, any> = new Map([[String.fromCharCode(100,118,98,116,120,116,95,108,95,51,56,0),String.fromCharCode(109,95,54,54,95,115,116,114,104,97,115,104,0)], [String.fromCharCode(109,105,110,109,97,120,95,49,95,53,51,0),String.fromCharCode(121,95,50,51,95,110,111,116,97,116,105,111,110,0)]]);
       let orangeuparrowv = String.fromCharCode(106,111,105,110,101,100,95,111,95,51,48,0);
       let navigation2 = 5.0;
      while ((orangeuparrowv.length + embedZ.size) > 1 || 5 > (orangeuparrowv.length + 1)) {
         orangeuparrowv += `${(orangeuparrowv == String.fromCharCode(122,0) ? parseInt(`${navigation2}`) : orangeuparrowv.length)}`;
         break;
      }
         orangeuparrowv = `${orangeuparrowv.length}`;
         navigation2 += 1 * orangeuparrowv.length;
      for (let z = 0; z < 3; z++) {
          let productd: Array<any> = [356, 494];
         orangeuparrowv = `${(orangeuparrowv == String.fromCharCode(65,0) ? orangeuparrowv.length : parseInt(`${navigation2}`))}`;
         productd = [productd.length];
      }
       let basketballawayteam6 = true;
       let otherc = false;
      for (let c = 0; c < 3; c++) {
         orangeuparrowv = `${parseInt(`${navigation2}`)}`;
      }
         navigation2 *= 3;
          let projecto = 0.0;
          let schedule3 = 3.0;
          let halfR = String.fromCharCode(116,95,51,57,95,110,111,105,115,101,115,0);
         embedZ = new Map([[`${projecto}`, parseInt(`${projecto}`)]]);
         schedule3 /= Math.max(1, 2);
         halfR += `${halfR.length}`;
      for (let f = 0; f < 1; f++) {
         navigation2 -= orangeuparrowv.length;
      }
      chatroombackgroundq /= Math.max(parseFloat(`${parseInt(`${iconlogoutK}`)}`), 1);
   if (assetsJ.startsWith(`${klevin4.length}`)) {
      klevin4 = [defaultprofilepict.length / (Math.max(2, parseInt(`${iconlogoutK}`)))];
   }
   let reactnavigationJ = videoo == String.fromCharCode(108,51,98,98,121,99,51,103,0);
   do {
      videoo += `${libcxxcomponentsi.length * klevin4.length}`;
      if (reactnavigationJ) {
         break;
      }
   } while (reactnavigationJ && (defaultprofilepict == String.fromCharCode(121,0)));
      libcxxcomponentsi += `${parseInt(`${chatroombackgroundq}`) & assetsJ.length}`;
      libcxxcomponentsi = `${(String.fromCharCode(54,0) == mounting7 ? mounting7.length : with_qh2)}`;
      with_qh2 >>= Math.min(5, Math.abs(1 & assetsJ.length));
   for (let k = 0; k < 3; k++) {
       let episodem = 1.0;
       let whistleC = String.fromCharCode(97,100,109,105,110,95,115,95,55,48,0);
       let securityc = String.fromCharCode(116,95,53,54,95,114,101,100,105,114,101,99,116,111,114,0);
       let grayD = 0.0;
       let gpayO = 4;
      let gifgoalK = 5932607.0 <= episodem;
      do {
          let libreactnativeblobf = String.fromCharCode(115,95,55,48,95,101,120,97,109,112,108,101,0);
         episodem -= 3 | whistleC.length;
         libreactnativeblobf = "3";
         if (gifgoalK) {
            break;
         }
      } while (gifgoalK && (5.10 <= episodem));
       let selectionY = String.fromCharCode(102,95,51,55,95,104,111,117,114,108,121,0);
         whistleC = "2";
         grayD *= parseInt(`${grayD}`);
          let material4 = 0.0;
          let readP = 4;
          let mimoV = false;
         whistleC = `${selectionY.length >> (Math.min(3, Math.abs(parseInt(`${episodem}`))))}`;
         material4 += readP;
         readP |= ((mimoV ? 2 : 1) | parseInt(`${material4}`));
         mimoV = (material4 - readP) > 79;
         whistleC = `${2 & securityc.length}`;
         securityc += `${selectionY.length >> (Math.min(Math.abs(1), 4))}`;
          let moviesE = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,103,95,51,51,0);
          let usernamen = String.fromCharCode(104,105,115,116,111,114,121,95,48,95,51,56,0);
          let loginsuccessy: Array<any> = [359, 557];
         whistleC = `${loginsuccessy.length}`;
         moviesE = `${moviesE.length % 1}`;
         usernamen = `${1 + usernamen.length}`;
         loginsuccessy.push(usernamen.length - 2);
          let distO: Map<any, any> = new Map([[String.fromCharCode(99,97,114,95,54,95,57,56,0),578], [String.fromCharCode(120,95,50,57,95,103,101,116,112,116,114,0),321], [String.fromCharCode(121,95,54,48,95,115,97,116,117,114,97,116,101,0),896]]);
          let libmapbufferjnil = 5;
          let statisticsactiveG = false;
         episodem /= Math.max(whistleC.length, 2);
         distO.set(`${statisticsactiveG}`, (libmapbufferjnil * (statisticsactiveG ? 2 : 5)));
         libmapbufferjnil /= Math.max(2 + libmapbufferjnil, 2);
      while (gpayO == 1) {
         gpayO -= 2 * parseInt(`${episodem}`);
         break;
      }
      let component7 = 8875350.0 <= episodem;
      do {
          let giflivestreamingL = 2;
          let privacy7: Map<any, any> = new Map([[String.fromCharCode(108,95,53,57,95,97,116,111,109,105,99,0),String.fromCharCode(120,95,51,49,95,99,111,118,101,114,0)], [String.fromCharCode(97,112,112,115,95,120,95,56,52,0),String.fromCharCode(111,95,49,51,95,105,110,116,101,114,108,101,97,118,101,100,0)]]);
         episodem *= selectionY.length;
         giflivestreamingL /= Math.max(1 | giflivestreamingL, 4);
         privacy7.set(`${giflivestreamingL}`, privacy7.size & 3);
         if (component7) {
            break;
         }
      } while ((3.67 < episodem) && component7);
       let otherz = String.fromCharCode(97,112,112,114,111,120,95,119,95,54,55,0);
       let showmoreN = String.fromCharCode(107,95,50,55,95,104,97,108,102,108,116,117,105,110,116,0);
      for (let s = 0; s < 2; s++) {
         selectionY += `${securityc.length & parseInt(`${grayD}`)}`;
      }
       let libreactL = String.fromCharCode(118,95,54,50,95,115,121,110,99,104,114,111,110,105,122,101,0);
       let uimanagerP = String.fromCharCode(99,95,52,56,95,116,101,115,118,101,114,116,0);
      let iconclosewhiteL = grayD >= 7568534.0;
      do {
          let update_heG = 0.0;
         grayD /= Math.max(3, 1 % (Math.max(7, securityc.length)));
         update_heG *= parseInt(`${update_heG}`);
         if (iconclosewhiteL) {
            break;
         }
      } while (iconclosewhiteL && ((securityc.length / (Math.max(5, parseInt(`${grayD}`)))) <= 5 || 3 <= (5 - securityc.length)));
      chatroombackgroundq -= parseFloat(`${parseInt(`${grayD}`)}`);
   }
       let iconnotificationnewF: Array<any> = [String.fromCharCode(102,95,51,49,95,110,111,116,99,104,101,100,0), String.fromCharCode(104,105,110,116,95,105,95,49,56,0)];
         iconnotificationnewF = [1];
      let m_imaged = 7942286 <= iconnotificationnewF.length;
      do {
         iconnotificationnewF.push(iconnotificationnewF.length | 1);
         if (m_imaged) {
            break;
         }
      } while (m_imaged && (iconnotificationnewF.includes(iconnotificationnewF.length)));
      while (iconnotificationnewF.includes(iconnotificationnewF.length)) {
          let awayu = 4;
          let libnmsM = 0.0;
          let iconwatchh = false;
         iconnotificationnewF = [((iconwatchh ? 2 : 1) - parseInt(`${libnmsM}`))];
         awayu |= awayu % (Math.max(awayu, 7));
         libnmsM += 1;
         break;
      }
      chatroombackgroundq *= parseFloat(`${videoo.length}`);

        this.#navigator?.removeListener('state', this.#matchHistory);
    }

    static updateNavigator = (navigation: NavigationProp<any>) => {
        this.#navigator = navigation;
    }

    static toName = (page: string, { params }: { params?: any } = {}) => {
        const then = (callback?: (params: any) => void) => {
            this.pendingEvent.push({
                pageName: page,
                thenEvent: callback,
            });
        }

        this.#lastActoinPageName = page;
        this.#navigator?.navigate(page, params);

        return { then };
    }

    static offName = (page: string, { params }: { params?: any } = {}) => {
        const then = (callback?: (params: any) => void) => {
            this.pendingEvent.push({
                pageName: page,
                thenEvent: callback,
            });
        }

        this.#lastActoinPageName = page;
        this.#navigator?.dispatch(
            StackActions.replace(page, params),
        );

        return { then };
    }

    static canBack = () => {
       let sentryp: Array<any> = [966, 728, 78];
    let orangeV = String.fromCharCode(110,101,105,103,104,98,111,117,114,95,54,95,49,49,0);
    let attributedstringX = true;
    let iconclosep = String.fromCharCode(117,95,49,48,48,95,116,104,114,101,97,100,115,97,102,101,0);
    let ajaxh = 1.0;
    let matchD: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,104,101,105,103,104,116,115,0),872], [String.fromCharCode(121,95,52,52,95,111,117,98,108,101,0),278], [String.fromCharCode(99,108,97,122,122,95,117,95,52,55,0),9]]);
    let logoL = String.fromCharCode(99,116,105,111,110,95,103,95,57,54,0);
    let window_gJ = String.fromCharCode(99,95,50,52,95,104,95,49,48,48,0);
    let base8: Map<any, any> = new Map([[String.fromCharCode(101,118,114,112,99,95,122,95,55,0),true ], [String.fromCharCode(97,118,112,114,111,103,114,97,109,95,112,95,56,52,0),true ]]);
    let livenodatabgimgz = String.fromCharCode(102,99,109,117,108,95,112,95,52,50,0);
    let detailG = false;
    let libswresampleW = 1.0;
    let reducerk = String.fromCharCode(116,101,108,101,112,104,111,110,121,95,98,95,57,49,0);
    let rocketE = true;
    let auto_9v: Array<any> = [String.fromCharCode(116,111,110,103,117,101,95,118,95,49,48,0), String.fromCharCode(99,104,97,116,95,53,95,48,0), String.fromCharCode(115,101,108,102,95,57,95,50,48,0)];
    let positionfieldE = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,52,95,51,0);
    let analyticsz = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,110,95,51,0);
    let homeloadingQ = 1.0;
   if (2 <= orangeV.length) {
      orangeV = `${livenodatabgimgz.length % (Math.max(2, 8))}`;
   }
       let yellowvideolive5 = false;
       let theme0 = String.fromCharCode(111,95,57,51,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
         yellowvideolive5 = theme0.startsWith(`${yellowvideolive5}`);
         yellowvideolive5 = theme0.length < 10 && yellowvideolive5;
      let recommendationo = yellowvideolive5 ? !yellowvideolive5 : yellowvideolive5;
      do {
          let profilen = String.fromCharCode(119,95,54,56,95,114,101,115,117,108,116,105,110,103,0);
          let shrinkD = 1;
          let entryo = String.fromCharCode(97,118,111,112,116,105,111,110,115,95,106,95,55,54,0);
          let floating3 = 0.0;
         yellowvideolive5 = (shrinkD ^ entryo.length) == 87;
         profilen += `${(profilen == String.fromCharCode(111,0) ? parseInt(`${floating3}`) : profilen.length)}`;
         shrinkD += profilen.length >> (Math.min(1, Math.abs(parseInt(`${floating3}`))));
         entryo += `${parseInt(`${floating3}`)}`;
         if (recommendationo) {
            break;
         }
      } while (recommendationo && (!yellowvideolive5));
          let profileactiveO = String.fromCharCode(99,109,115,103,115,95,56,95,56,56,0);
          let mbnativeadvancedh = String.fromCharCode(122,95,53,53,95,108,105,98,103,115,109,0);
          let subbasketballplayerJ = String.fromCharCode(105,115,115,117,105,110,103,95,104,95,54,53,0);
         theme0 = `${mbnativeadvancedh.length | 1}`;
         profileactiveO = `${profileactiveO.length * 1}`;
         mbnativeadvancedh += "1";
         subbasketballplayerJ = `${2 - profileactiveO.length}`;
       let adultc = String.fromCharCode(102,95,50,95,99,101,110,116,114,111,105,100,115,0);
       let white3 = String.fromCharCode(100,95,53,95,112,111,115,116,97,108,0);
      while (adultc != String.fromCharCode(101,0)) {
         white3 = `${3 >> (Math.min(5, adultc.length))}`;
         break;
      }
      sentryp.push(matchD.size - 1);
      attributedstringX = !iconclosep.includes(`${detailG}`);
       let predictionbuttont: Map<any, any> = new Map([[String.fromCharCode(105,95,56,56,95,114,101,103,114,101,115,115,0),937], [String.fromCharCode(99,104,101,99,107,115,117,109,95,122,95,57,50,0),795], [String.fromCharCode(111,95,52,49,95,103,114,101,101,100,121,0),382]]);
         predictionbuttont.set(`${predictionbuttont.size}`, 1);
         predictionbuttont = new Map([[`${predictionbuttont.size}`, predictionbuttont.size]]);
      if (3 <= (predictionbuttont.size >> (Math.min(Math.abs(2), 2))) || 2 <= (predictionbuttont.size >> (Math.min(Math.abs(2), 4)))) {
         predictionbuttont = new Map([[`${predictionbuttont.size}`, predictionbuttont.size % 3]]);
      }
      sentryp.push(parseInt(`${ajaxh}`) * logoL.length);
       let a_playerL = String.fromCharCode(111,95,49,56,95,102,116,115,105,115,115,112,97,99,101,0);
          let episode4: Array<any> = [0, 49, 201];
          let yellowscoreballE = true;
          let related2: Map<any, any> = new Map([[String.fromCharCode(109,95,51,51,95,119,114,105,116,101,114,0),28], [String.fromCharCode(115,101,116,99,116,120,95,107,95,56,50,0),745], [String.fromCharCode(107,95,52,56,95,109,101,109,97,108,105,103,110,0),298]]);
         a_playerL += `${2 ^ a_playerL.length}`;
         episode4.push(3 >> (Math.min(1, episode4.length)));
         yellowscoreballE = 24 > related2.size || 24 > episode4.length;
         related2.set(`${episode4.length}`, related2.size - 3);
      for (let h = 0; h < 1; h++) {
          let shootyesgoall: Map<any, any> = new Map([[String.fromCharCode(106,95,55,52,95,112,114,101,97,108,108,111,99,0),583], [String.fromCharCode(104,101,99,107,95,122,95,50,48,0),464], [String.fromCharCode(108,95,57,53,95,116,111,107,101,110,105,122,101,0),762]]);
          let dependencies0 = 3.0;
          let otherY = String.fromCharCode(118,101,114,108,97,121,95,56,95,51,55,0);
          let defaultbasketballbgz = 5.0;
         a_playerL += `${shootyesgoall.size * parseInt(`${dependencies0}`)}`;
         shootyesgoall.set(`${defaultbasketballbgz}`, 2);
         dependencies0 *= (otherY == String.fromCharCode(85,0) ? otherY.length : parseInt(`${defaultbasketballbgz}`));
      }
         a_playerL += `${a_playerL.length}`;
      logoL += `${sentryp.length}`;
       let leaguedetailsbgd: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,116,114,101,101,115,0),52], [String.fromCharCode(110,111,116,95,113,95,50,57,0),679]]);
       let goallogoJ = 2.0;
       let agreemento = false;
      let sharedT = goallogoJ <= 6132927.0;
      do {
         goallogoJ -= parseFloat(`${leaguedetailsbgd.size}`);
         if (sharedT) {
            break;
         }
      } while (sharedT && (!agreemento));
      while (leaguedetailsbgd.get(`${goallogoJ}`) == null) {
         goallogoJ *= parseFloat(`${parseInt(`${goallogoJ}`)}`);
         break;
      }
          let awayicon8 = true;
         agreemento = 64.7 <= goallogoJ && awayicon8;
          let iconeditA = String.fromCharCode(100,95,51,54,95,102,116,118,109,110,111,100,101,0);
          let dangerm = 5.0;
          let libffmpegkitF: Array<any> = [322, 916, 803];
         leaguedetailsbgd.set(iconeditA, libffmpegkitF.length + 1);
         iconeditA = `${parseInt(`${dangerm}`) + parseInt(`${dangerm}`)}`;
       let imagenomoredata4 = true;
          let base_: Map<any, any> = new Map([[String.fromCharCode(102,95,54,57,95,98,114,105,110,103,0),869], [String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,49,95,49,48,48,0),427], [String.fromCharCode(104,95,55,55,95,105,116,101,114,0),229]]);
         agreemento = !agreemento || base_.size < 86;
      let v_hashd = goallogoJ <= 5865337.0;
      do {
         goallogoJ *= parseFloat(`${1}`);
         if (v_hashd) {
            break;
         }
      } while (v_hashd && (leaguedetailsbgd.get(`${goallogoJ}`) != null));
      for (let t = 0; t < 2; t++) {
         agreemento = !agreemento;
      }
         leaguedetailsbgd.set(`${agreemento}`, ((imagenomoredata4 ? 3 : 2)));
      livenodatabgimgz += "2";
   if (reducerk.length == sentryp.length) {
      sentryp = [3 * orangeV.length];
   }
      ajaxh *= parseInt(`${libswresampleW}`) | 1;
   if (!window_gJ.endsWith(`${detailG}`)) {
      window_gJ += `${window_gJ.length / 3}`;
   }
   if ((livenodatabgimgz.length / 2) > 3 && (sentryp.length / 2) > 2) {
       let submith = 1.0;
       let whistleorangeS = true;
       let pathB: Array<any> = [194, 744];
       let nendB = String.fromCharCode(111,117,112,117,116,95,115,95,51,54,0);
         pathB.push((parseInt(`${submith}`) ^ (whistleorangeS ? 1 : 1)));
      if (1 == (nendB.length - parseInt(`${submith}`)) || 5 == (nendB.length % 1)) {
         submith /= Math.max(3 & pathB.length, 5);
      }
       let mapbufferr = String.fromCharCode(104,95,52,57,95,115,108,105,112,0);
       let chatbotphotot = String.fromCharCode(98,95,50,55,95,97,118,103,98,108,117,114,0);
         chatbotphotot = `${mapbufferr.length + nendB.length}`;
      for (let i = 0; i < 3; i++) {
         mapbufferr += `${mapbufferr.length | chatbotphotot.length}`;
      }
         submith -= parseInt(`${submith}`) >> (Math.min(3, Math.abs(3)));
      let qaage = 7610999.0 >= submith;
      do {
         submith /= Math.max(chatbotphotot.length, 2);
         if (qaage) {
            break;
         }
      } while (((chatbotphotot.length * parseInt(`${submith}`)) < 2) && qaage);
          let inouttargetred3 = String.fromCharCode(110,95,53,50,95,97,116,116,114,98,117,116,101,0);
         mapbufferr = `${1 >> (Math.min(3, chatbotphotot.length))}`;
         inouttargetred3 = `${inouttargetred3.length % (Math.max(inouttargetred3.length, 1))}`;
         mapbufferr = `${mapbufferr.length / 3}`;
      while (whistleorangeS || chatbotphotot.length == 5) {
         whistleorangeS = (((!whistleorangeS ? chatbotphotot.length : 50) << (Math.min(chatbotphotot.length, 4))) == 50);
         break;
      }
         whistleorangeS = (nendB.length + mapbufferr.length) <= 81;
      let imageactionlive7 = whistleorangeS ? !whistleorangeS : whistleorangeS;
      do {
         whistleorangeS = !whistleorangeS;
         if (imageactionlive7) {
            break;
         }
      } while (((submith - 4.49) < 2.95) && imageactionlive7);
      sentryp = [parseInt(`${libswresampleW}`) | 3];
   }
      matchD.set(`${attributedstringX}`, ((attributedstringX ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${ajaxh}`)), 1))));
   if (!Array.from(base8.keys()).includes(`${ajaxh}`)) {
      ajaxh *= (String.fromCharCode(57,0) == window_gJ ? window_gJ.length : parseInt(`${ajaxh}`));
   }
   let flipperZ = 8236238 >= reducerk.length;
   do {
      reducerk += `${parseInt(`${libswresampleW}`) * window_gJ.length}`;
      if (flipperZ) {
         break;
      }
   } while (flipperZ && (reducerk.length >= base8.size));
      ajaxh -= 1 + logoL.length;
       let currentr: Map<any, any> = new Map([[String.fromCharCode(102,95,49,49,95,103,101,110,99,98,0),871], [String.fromCharCode(106,95,56,57,95,121,112,114,101,100,105,99,116,105,111,110,0),422]]);
       let circleV = 4.0;
       let appsc = String.fromCharCode(99,111,115,113,102,95,120,95,57,53,0);
         circleV += parseFloat(`${3}`);
         currentr.set(`${circleV}`, parseInt(`${circleV}`) | currentr.size);
         currentr.set(appsc, currentr.size * appsc.length);
      for (let x = 0; x < 2; x++) {
          let backwhite7: Map<any, any> = new Map([[String.fromCharCode(110,95,52,56,95,104,100,114,115,0),true ], [String.fromCharCode(108,101,97,118,105,110,103,95,108,95,49,56,0),false ], [String.fromCharCode(118,95,56,55,95,101,115,100,115,0),true ]]);
          let awayiconb = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,49,95,49,48,0);
          let libjsijniprofiler7 = String.fromCharCode(117,95,51,57,95,102,111,114,107,0);
          let rewindu: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,114,97,119,95,117,95,50,0),670], [String.fromCharCode(103,95,56,57,95,118,97,105,108,97,98,105,108,105,116,121,0),610], [String.fromCharCode(107,101,112,116,95,116,95,54,55,0),169]]);
          let dragclosey: Array<any> = [322, 565, 195];
         appsc += `${(libjsijniprofiler7 == String.fromCharCode(116,0) ? backwhite7.size : libjsijniprofiler7.length)}`;
         backwhite7.set(`${dragclosey.length}`, 1);
         awayiconb = `${rewindu.size}`;
         rewindu.set(awayiconb, rewindu.size);
         dragclosey.push((String.fromCharCode(83,0) == awayiconb ? awayiconb.length : dragclosey.length));
      }
      let largesoundC = circleV >= 9589213.0;
      do {
          let greyticko = String.fromCharCode(116,104,101,116,97,95,100,95,55,50,0);
         circleV *= parseFloat(`${greyticko.length << (Math.min(appsc.length, 1))}`);
         if (largesoundC) {
            break;
         }
      } while (largesoundC && ((circleV - 3.99) > 3.44));
         appsc = "2";
      for (let w = 0; w < 3; w++) {
          let iconsharefriendsg = String.fromCharCode(98,108,117,101,116,111,111,116,104,95,57,95,49,49,0);
         appsc = `${appsc.length}`;
         iconsharefriendsg += `${iconsharefriendsg.length}`;
      }
      for (let m = 0; m < 3; m++) {
         currentr.set(appsc, 3 ^ appsc.length);
      }
         appsc = `${2 | currentr.size}`;
      ajaxh /= Math.max(((detailG ? 3 : 5) | livenodatabgimgz.length), 5);
      reducerk = `${2 >> (Math.min(2, Math.abs(base8.size)))}`;
   if (1 == (3 >> (Math.min(2, Math.abs(base8.size)))) || (3 >> (Math.min(4, logoL.length))) == 1) {
      logoL += `${window_gJ.length << (Math.min(Math.abs(2), 5))}`;
   }
      rocketE = ((iconclosep.length | (attributedstringX ? iconclosep.length : 54)) > 54);
   let smallk = String.fromCharCode(100,102,122,117,111,56,105,121,114,0) == iconclosep;
   do {
      iconclosep = `${1 * iconclosep.length}`;
      if (smallk) {
         break;
      }
   } while (((iconclosep.length << (Math.min(Math.abs(2), 2))) == 2 || (iconclosep.length >> (Math.min(Math.abs(2), 2))) == 5) && smallk);
      logoL += `${(iconclosep == String.fromCharCode(97,0) ? iconclosep.length : (attributedstringX ? 5 : 2))}`;
   for (let e = 0; e < 2; e++) {
       let basketballmatchdetailbgr = String.fromCharCode(110,112,114,111,98,101,95,112,95,49,53,0);
       let playercommon8: Array<any> = [String.fromCharCode(110,95,54,52,95,100,101,99,111,100,97,98,108,101,0), String.fromCharCode(109,95,57,48,95,115,101,110,100,101,114,0)];
       let episodesc = String.fromCharCode(106,95,50,95,112,114,115,99,116,112,0);
       let long_vE = String.fromCharCode(114,101,97,100,95,54,95,51,56,0);
      if (basketballmatchdetailbgr.length >= 3 || episodesc == String.fromCharCode(107,0)) {
         basketballmatchdetailbgr = `${playercommon8.length}`;
      }
         episodesc = `${episodesc.length * basketballmatchdetailbgr.length}`;
      for (let z = 0; z < 1; z++) {
         basketballmatchdetailbgr = `${episodesc.length >> (Math.min(Math.abs(1), 2))}`;
      }
       let penaltyshootnogoala = 1.0;
       let internets = 4.0;
         long_vE = `${parseInt(`${internets}`) ^ 1}`;
          let playS: Array<any> = [404, 491];
          let yellowH: Array<any> = [8, 713, 936];
         basketballmatchdetailbgr += `${yellowH.length | parseInt(`${internets}`)}`;
         playS.push(playS.length >> (Math.min(4, playS.length)));
         yellowH.push(2);
         internets -= parseFloat(`${basketballmatchdetailbgr.length ^ 3}`);
      while ((playercommon8.length + parseInt(`${internets}`)) <= 2) {
         playercommon8.push(2 / (Math.max(6, basketballmatchdetailbgr.length)));
         break;
      }
      while (4 < (3 ^ playercommon8.length) && (episodesc.length ^ 3) < 4) {
         episodesc = "2";
         break;
      }
      for (let o = 0; o < 1; o++) {
         penaltyshootnogoala -= parseFloat(`${2 ^ parseInt(`${penaltyshootnogoala}`)}`);
      }
          let defaultteamd = 0.0;
          let libswscaleU: Array<any> = [52, 363, 311];
         episodesc = `${(String.fromCharCode(108,0) == basketballmatchdetailbgr ? playercommon8.length : basketballmatchdetailbgr.length)}`;
         defaultteamd *= libswscaleU.length * 3;
         libswscaleU = [3];
          let buffers = 1;
          let icondownimgZ = String.fromCharCode(109,105,110,111,114,95,120,95,52,51,0);
         penaltyshootnogoala /= Math.max(3, parseFloat(`${parseInt(`${internets}`)}`));
         buffers &= buffers;
         icondownimgZ = `${(String.fromCharCode(70,0) == icondownimgZ ? icondownimgZ.length : buffers)}`;
      base8 = new Map([[basketballmatchdetailbgr, 3]]);
   }
   if (!logoL.startsWith(`${ajaxh}`)) {
       let fastforwardW = false;
       let reddownarrowf = String.fromCharCode(118,101,99,116,111,114,115,95,97,95,56,49,0);
       let code_ = String.fromCharCode(97,95,51,50,95,116,105,108,101,0);
       let confirmationB: Map<any, any> = new Map([[String.fromCharCode(105,109,105,113,95,113,95,54,57,0),false ], [String.fromCharCode(103,95,57,57,95,108,97,118,117,0),false ]]);
       let theme5: Array<any> = [681, 382];
         theme5 = [code_.length >> (Math.min(1, theme5.length))];
      if (4 >= (theme5.length % (Math.max(1, code_.length)))) {
         code_ = `${(String.fromCharCode(70,0) == code_ ? reddownarrowf.length : code_.length)}`;
      }
      for (let j = 0; j < 3; j++) {
         confirmationB.set(`${theme5.length}`, confirmationB.size >> (Math.min(Math.abs(2), 2)));
      }
         code_ += `${reddownarrowf.length - 3}`;
         confirmationB.set(`${code_}`, 3);
      if (4 >= (theme5.length * 2) || (theme5.length * 2) >= 4) {
         confirmationB = new Map([[`${theme5.length}`, theme5.length * reddownarrowf.length]]);
      }
          let moon8 = 3;
         code_ = `${(code_ == String.fromCharCode(113,0) ? code_.length : (fastforwardW ? 3 : 1))}`;
         moon8 <<= Math.min(3, Math.abs(moon8 & 1));
         confirmationB = new Map([[`${confirmationB.size}`, theme5.length]]);
          let reactnativejsr = String.fromCharCode(106,95,49,55,95,114,108,111,116,116,105,101,0);
         confirmationB.set(reactnativejsr, theme5.length);
          let libreactnativeblobP = 3.0;
          let android6 = false;
         confirmationB.set(`${code_}`, code_.length);
         libreactnativeblobP += parseFloat(`${parseInt(`${libreactnativeblobP}`) >> (Math.min(3, Math.abs(3)))}`);
         android6 = android6 || libreactnativeblobP <= 19.22;
         confirmationB = new Map([[`${theme5.length}`, theme5.length]]);
      let catagoryD = fastforwardW ? !fastforwardW : fastforwardW;
      do {
          let bottomu = 0;
          let kleving = 2.0;
          let renewX = false;
          let cancelp = String.fromCharCode(122,101,114,111,95,119,95,50,53,0);
         fastforwardW = (29 <= ((!renewX ? 29 : reddownarrowf.length) - reddownarrowf.length));
         bottomu >>= Math.min(2, Math.abs(bottomu));
         kleving /= Math.max(1, 1);
         renewX = kleving <= 72.27;
         cancelp = `${2 << (Math.min(2, Math.abs(bottomu)))}`;
         if (catagoryD) {
            break;
         }
      } while ((fastforwardW && 5 == reddownarrowf.length) && catagoryD);
      for (let g = 0; g < 3; g++) {
         theme5 = [confirmationB.size];
      }
          let predictionbannersharedk: Map<any, any> = new Map([[String.fromCharCode(101,111,109,101,116,114,121,95,117,95,57,49,0),754], [String.fromCharCode(97,95,50,55,95,98,105,110,116,114,101,101,0),54], [String.fromCharCode(109,97,114,107,101,114,95,102,95,51,50,0),863]]);
          let linkc = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,50,95,49,57,0);
          let pausej = String.fromCharCode(112,95,51,55,95,101,99,100,115,97,0);
         confirmationB = new Map([[`${confirmationB.size}`, 2]]);
         predictionbannersharedk.set(linkc, linkc.length % 1);
         pausej = `${1 + pausej.length}`;
       let analytic1 = 0;
      logoL += `${3 | parseInt(`${ajaxh}`)}`;
   }
   if (5 == (1 << (Math.min(1, iconclosep.length))) || 1 == (1 << (Math.min(1, iconclosep.length)))) {
      iconclosep += `${reducerk.length & 3}`;
   }

        return this.#historiesPages.length > 0;
    }

    static back = (params?: any) => {
        if (!this.#navigator?.canGoBack()) return;

        this.#historiesPages[this.#historiesPages.length - 1].backParams = params;
        this.#navigator?.goBack();
    }

    static getParams = (): any => {
        return this.current()?.params;
    };

    static current = (): yysReactnavigation | undefined => {
        if (this.#historiesPages.length <= 0) return;
        return this.#historiesPages[this.#historiesPages.length - 1];
    }

    static previous = (): yysReactnavigation | undefined => {
        if (this.#historiesPages.length <= 1) return;
        return this.#historiesPages[this.#historiesPages.length - 2];
    }

    static history = (): yysReactnavigation[] => {
        return this.#historiesPages ?? [];
    }

    static #matchHistory = (state: any) => {
        const histories = state?.data?.state?.routes;

        if (!histories) return;

        // if local history > lib history => pop
        if (this.#historiesPages.length > histories.length) {
            for (let i = this.#historiesPages.length - 1; i >= histories.length; i--) {
                this.#handlePop(this.#historiesPages.pop(), histories.length > 0 ? histories[histories.length - 1] : undefined);
            }
        }

        histories.forEach((route: any, index: number) => {
            // if local history < lib history => push
            if (this.#historiesPages.length <= index) {
                this.#handlePush(route)
                return;
            }

            // if local history != lib history => replace
            if (this.#historiesPages[index].key !== route.key || this.#historiesPages[index].params !== route.params) {
                this.#handleReplace(index, route);
            }
        });
    }

    static #handlePush = (route: {
        key: string;
        name: string;
        params?: any;
        state?: any;
    }) => {
        this.#historiesPages.push({
            key: route.key,
            name: route.name,
            params: route.params,
        });

        
        const pendingEventFound = this.pendingEvent.findIndex(e => e.pageName === route.name);

        if (pendingEventFound !== -1) {
            this.#addEventByKey(route.key, VXHongkong.VXActionsVideojs, this.pendingEvent[pendingEventFound].thenEvent);
            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    /**
     * params => use for navigate pop action
     */
    static #handlePop = (
        page?: yysReactnavigation,
        route?: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        }
    ) => {
        if (!page) return;

        this.#runEventByKey(page.key, VXHongkong.VXActionsVideojs, page.backParams);
        this.#removeListenerByKey(page.key);

        
        if (this.#lastActoinPageName === this.current()?.name) {
            
            this.#historiesPages[this.#historiesPages.length - 1].params = route?.params;

            
            const pendingEventFound = this.pendingEvent.findIndex(e => e.pageName === this.#lastActoinPageName);

            if (pendingEventFound === -1) return;

            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    static #handleReplace = (
        index: number,
        route: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        },
    ) => {
        
        if (this.#lastActoinPageName === this.current()?.name) {
            this.#historiesPages[index] = {
                key: route.key,
                name: route.name,
                params: route.params,
            };
            return;
        }

        this.#handlePop(this.#historiesPages[index]);

        this.#historiesPages[index] = {
            key: route.key,
            name: route.name,
            params: route.params,
        };
    }

    static #addEventByKey = (key: string, type: VXHongkong, callback: () => void) => {
        DeviceEventEmitter.addListener(eventKeyGenerator(key, type), callback);
    }

    static #runEventByKey = (key: string, type: VXHongkong, params?: any) => {
        DeviceEventEmitter.emit(eventKeyGenerator(key, type), params);
        this.#removeListenerByKey(key);
    }

    static #removeListenerByKey = (key: string) => {
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, VXHongkong.VXActionsVideojs));
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, VXHongkong.VXContext));
    }
}

export const CRouteInitializer = () => {
       let cleara = 5;
    let resultO = String.fromCharCode(97,98,101,108,95,49,95,52,48,0);
    let klevinG = 1;
    let mountingl = String.fromCharCode(115,116,114,112,116,105,109,101,95,104,95,55,0);
    let nativemoduleD = 3;
    let mappingK = 5.0;
    let footballtrophyX: Map<any, any> = new Map([[String.fromCharCode(103,95,53,55,95,109,111,100,101,114,110,0),955], [String.fromCharCode(120,95,49,57,95,114,101,109,111,118,105,110,103,0),204], [String.fromCharCode(113,95,49,53,95,104,97,118,105,110,103,0),227]]);
    let fastI = 4.0;
    let profileframeo = 5.0;
    let mbbidK = 3.0;
    let lessQ = 1.0;
    let assistm = String.fromCharCode(104,95,54,57,95,112,97,114,116,105,99,105,112,97,110,116,0);
    let charto = String.fromCharCode(109,95,52,48,95,109,98,115,116,114,105,110,103,0);
    let indexy = String.fromCharCode(109,95,50,50,95,115,98,119,97,105,116,0);
      nativemoduleD *= parseInt(`${lessQ}`);
   while (4 >= (cleara / (Math.max(klevinG, 6)))) {
      klevinG -= klevinG;
      break;
   }
   let iconrightorangeV = assistm == String.fromCharCode(106,51,118,56,50,105,0);
   do {
       let largebrightnesse = String.fromCharCode(109,95,49,56,95,111,115,116,114,101,97,109,0);
       let statisticsw = String.fromCharCode(105,110,116,114,111,95,52,95,52,54,0);
       let yellowscoreballt = String.fromCharCode(103,95,54,56,95,117,110,113,117,97,110,116,0);
      let gestureF = largebrightnesse == String.fromCharCode(101,101,119,109,50,121,107,107,122,0);
      do {
         largebrightnesse = `${2 << (Math.min(4, largebrightnesse.length))}`;
         if (gestureF) {
            break;
         }
      } while ((largebrightnesse.startsWith(`${statisticsw.length}`)) && gestureF);
      if (statisticsw == String.fromCharCode(104,0) || yellowscoreballt.length < 1) {
         statisticsw += `${yellowscoreballt.length}`;
      }
          let reddownarrowK: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,117,114,101,100,95,100,95,57,48,0),326], [String.fromCharCode(112,95,52,50,95,111,112,117,115,101,110,99,0),795]]);
          let other6 = String.fromCharCode(114,101,99,111,114,100,105,110,103,95,109,95,49,52,0);
          let fastforwardk = String.fromCharCode(102,97,118,111,114,105,116,101,95,57,95,49,51,0);
         statisticsw = `${statisticsw.length % 2}`;
         reddownarrowK.set(fastforwardk, other6.length);
         other6 += `${(other6 == String.fromCharCode(112,0) ? other6.length : reddownarrowK.size)}`;
         fastforwardk += `${other6.length ^ 3}`;
         statisticsw += `${(statisticsw == String.fromCharCode(119,0) ? yellowscoreballt.length : statisticsw.length)}`;
         statisticsw = `${1 * statisticsw.length}`;
      while (largebrightnesse != String.fromCharCode(74,0)) {
         statisticsw += "3";
         break;
      }
      while (largebrightnesse == String.fromCharCode(66,0)) {
         yellowscoreballt = `${yellowscoreballt.length % (Math.max(statisticsw.length, 2))}`;
         break;
      }
      while (statisticsw.length == 3) {
         statisticsw = `${1 >> (Math.min(3, statisticsw.length))}`;
         break;
      }
       let ping7 = false;
      assistm += `${2 << (Math.min(2, Math.abs(footballtrophyX.size)))}`;
      if (iconrightorangeV) {
         break;
      }
   } while (iconrightorangeV && (1 == (assistm.length + 3)));
       let profileactivex = 3.0;
       let liveendmodallogoK = 1.0;
       let shootyesgoalm = String.fromCharCode(122,95,55,52,95,102,97,115,116,101,115,116,0);
         profileactivex /= Math.max(1, parseInt(`${liveendmodallogoK}`));
          let nterstitialv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,115,95,105,95,56,50,0),false ], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,109,95,51,57,0),false ], [String.fromCharCode(97,116,116,114,97,99,116,95,109,95,57,51,0),false ]]);
          let predictionbuttonc = 5.0;
          let nbatrophya = String.fromCharCode(102,95,57,48,95,113,105,110,116,102,108,111,97,116,0);
         liveendmodallogoK += parseFloat(`${3 << (Math.min(4, nbatrophya.length))}`);
         nterstitialv = new Map([[`${nterstitialv.size}`, nterstitialv.size >> (Math.min(Math.abs(2), 4))]]);
         predictionbuttonc -= parseFloat(`${nterstitialv.size}`);
         nbatrophya = `${parseInt(`${predictionbuttonc}`)}`;
         profileactivex -= parseInt(`${profileactivex}`);
      for (let d = 0; d < 1; d++) {
         liveendmodallogoK -= parseFloat(`${parseInt(`${profileactivex}`)}`);
      }
         shootyesgoalm = `${parseInt(`${profileactivex}`) % 2}`;
         liveendmodallogoK += parseFloat(`${3}`);
          let righth: Array<any> = [354, 75, 777];
          let predictionwin3 = 0;
         liveendmodallogoK *= parseFloat(`${3 << (Math.min(4, righth.length))}`);
         righth = [predictionwin3 & 2];
         predictionwin3 *= 3 + predictionwin3;
         liveendmodallogoK *= (parseFloat(`${shootyesgoalm == String.fromCharCode(84,0) ? shootyesgoalm.length : parseInt(`${liveendmodallogoK}`)}`));
      if (5.82 >= (3.72 * liveendmodallogoK) || (profileactivex - 3.72) >= 1.84) {
         profileactivex += parseInt(`${liveendmodallogoK}`) % (Math.max(shootyesgoalm.length, 5));
      }
      mbbidK += parseFloat(`${parseInt(`${lessQ}`) << (Math.min(assistm.length, 1))}`);

    const navigator = useNavigation<NavigationProp<{ [key: string]: any }>>();

    useEffect(() => {

      resultO = `${(resultO == String.fromCharCode(72,0) ? resultO.length : parseInt(`${profileframeo}`))}`;
      mbbidK *= parseFloat(`${cleara}`);
      footballtrophyX.set(resultO, (String.fromCharCode(82,0) == resultO ? klevinG : resultO.length));
   let minimize0 = footballtrophyX.size >= 7924280;
   do {
       let referrerx: Map<any, any> = new Map([[String.fromCharCode(99,108,105,101,110,116,95,112,95,51,57,0),217], [String.fromCharCode(110,95,55,51,95,100,101,110,111,114,109,97,108,0),347]]);
       let iconpipshrinkM = String.fromCharCode(114,116,109,112,95,102,95,56,52,0);
       let template_r3 = false;
      let icontransferclub7 = iconpipshrinkM.length >= 8231306;
      do {
          let launcherK = 0.0;
          let reddownarrowD = String.fromCharCode(107,95,49,55,95,114,100,109,117,108,116,0);
         iconpipshrinkM = `${iconpipshrinkM.length - referrerx.size}`;
         launcherK -= parseFloat(`${parseInt(`${launcherK}`) - reddownarrowD.length}`);
         reddownarrowD += `${parseInt(`${launcherK}`)}`;
         if (icontransferclub7) {
            break;
         }
      } while (icontransferclub7 && (3 == (4 - referrerx.size)));
      if (referrerx.size < 4) {
          let recommendationF = 5;
          let downloadinge: Map<any, any> = new Map([[String.fromCharCode(105,103,110,112,111,115,116,95,117,95,49,57,0),486], [String.fromCharCode(109,97,116,99,104,105,110,102,111,95,98,95,52,54,0),557]]);
          let basketballq = String.fromCharCode(122,95,57,54,95,98,98,111,120,0);
         referrerx = new Map([[`${referrerx.size}`, referrerx.size]]);
         recommendationF -= basketballq.length / (Math.max(1, 6));
         downloadinge = new Map([[`${downloadinge.size}`, downloadinge.size]]);
         basketballq += `${basketballq.length}`;
      }
          let playw = String.fromCharCode(109,95,55,50,95,99,111,110,115,117,109,97,98,108,101,0);
          let dice7 = 2;
          let mail4 = false;
         referrerx = new Map([[`${dice7}`, playw.length ^ 3]]);
         playw = `${((mail4 ? 1 : 3) % (Math.max((mail4 ? 4 : 5), 1)))}`;
         dice7 /= Math.max(2, 3);
       let libswscale8: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,115,95,108,95,49,49,0),true ], [String.fromCharCode(104,101,108,100,95,122,95,49,56,0),false ], [String.fromCharCode(105,115,108,101,97,112,95,49,95,52,51,0),true ]]);
       let wifirouterW: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,99,114,101,100,101,110,116,105,97,108,115,0),249], [String.fromCharCode(114,95,52,50,95,100,101,99,105,109,97,116,111,114,0),505], [String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,56,95,53,53,0),210]]);
          let verticalu = String.fromCharCode(119,114,105,116,101,99,111,112,121,95,54,95,57,48,0);
         template_r3 = libswscale8.size < referrerx.size;
         verticalu += `${(String.fromCharCode(69,0) == verticalu ? verticalu.length : verticalu.length)}`;
      if (4 > (libswscale8.size / 1)) {
         libswscale8.set(iconpipshrinkM, 3);
      }
      for (let s = 0; s < 1; s++) {
         libswscale8 = new Map([[`${libswscale8.size}`, ((template_r3 ? 2 : 1) ^ libswscale8.size)]]);
      }
          let lineN = String.fromCharCode(114,101,109,105,110,100,95,48,95,49,48,48,0);
          let goallogoZ = 2;
         libswscale8.set(`${iconpipshrinkM}`, 1);
         lineN = `${lineN.length}`;
         goallogoZ %= Math.max((String.fromCharCode(68,0) == lineN ? goallogoZ : lineN.length), 1);
      if (3 == referrerx.size && 2 == (3 | referrerx.size)) {
         referrerx.set(iconpipshrinkM, libswscale8.size >> (Math.min(iconpipshrinkM.length, 4)));
      }
      footballtrophyX.set(`${fastI}`, 3 % (Math.max(parseInt(`${lessQ}`), 1)));
      if (minimize0) {
         break;
      }
   } while (minimize0 && ((1.28 + lessQ) > 2.84));
        yysLibturbomodulejsijni.init(navigator);

   if (profileframeo >= cleara) {
       let guidet = String.fromCharCode(113,95,50,49,95,100,105,103,101,115,116,98,121,111,98,106,0);
       let backwhitek = 1;
       let downloadedt: Array<any> = [341, 371, 357];
       let reminderr: Array<any> = [764, 42];
         guidet = `${1 * backwhitek}`;
      while (guidet.endsWith(`${downloadedt.length}`)) {
         downloadedt = [1];
         break;
      }
      for (let s = 0; s < 2; s++) {
         downloadedt = [downloadedt.length];
      }
         downloadedt.push(guidet.length & 3);
         downloadedt = [reminderr.length | guidet.length];
         reminderr.push(reminderr.length + 1);
       let soundc = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,110,95,55,53,0);
       let airbnbstar_ = String.fromCharCode(120,95,52,55,95,97,99,99,117,109,117,108,97,116,111,114,0);
      for (let b = 0; b < 2; b++) {
         backwhitek ^= downloadedt.length & 1;
      }
         soundc = "3";
       let dependencym = 5.0;
       let plusn = 1.0;
      if (3 <= soundc.length) {
         airbnbstar_ += `${reminderr.length}`;
      }
      while (5 < (backwhitek - guidet.length)) {
         backwhitek >>= Math.min(2, downloadedt.length);
         break;
      }
      profileframeo /= Math.max(5, 3);
   }
      nativemoduleD <<= Math.min(1, Math.abs(nativemoduleD));
   for (let r = 0; r < 3; r++) {
       let e_positionn = String.fromCharCode(119,97,114,110,95,112,95,51,57,0);
       let sheet7 = String.fromCharCode(104,100,110,111,100,101,95,48,95,50,49,0);
       let iconsaveimaget = 2;
          let moviesl = String.fromCharCode(108,105,109,105,116,101,100,95,100,95,53,52,0);
          let iconnewsshareZ: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,101,95,110,95,54,54,0),371], [String.fromCharCode(97,95,53,55,95,97,110,97,108,121,115,105,115,0),157], [String.fromCharCode(115,104,111,117,108,100,95,56,95,56,52,0),990]]);
          let colors2 = String.fromCharCode(100,95,52,55,95,121,101,115,116,101,114,100,97,121,0);
         sheet7 = "2";
         moviesl += `${iconnewsshareZ.size % (Math.max(4, moviesl.length))}`;
         iconnewsshareZ.set(moviesl, 3);
         colors2 += `${colors2.length}`;
          let relatedw = String.fromCharCode(105,112,113,102,95,99,95,52,48,0);
          let castingi: Array<any> = [String.fromCharCode(119,101,108,115,101,110,99,95,97,95,56,50,0), String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,113,95,49,48,0)];
         iconsaveimaget |= (String.fromCharCode(116,0) == e_positionn ? e_positionn.length : iconsaveimaget);
         relatedw += `${3 << (Math.min(3, castingi.length))}`;
         castingi = [3 * castingi.length];
       let referrer8 = String.fromCharCode(122,95,51,56,95,97,118,101,114,97,103,101,115,0);
      let vignettec = 6982351 <= iconsaveimaget;
      do {
         iconsaveimaget -= 2 << (Math.min(3, Math.abs(iconsaveimaget)));
         if (vignettec) {
            break;
         }
      } while (vignettec && (referrer8.length >= 4));
      let imagenomoredatam = iconsaveimaget <= 9315520;
      do {
         iconsaveimaget >>= Math.min(2, Math.abs(e_positionn.length & referrer8.length));
         if (imagenomoredatam) {
            break;
         }
      } while ((!sheet7.startsWith(`${iconsaveimaget}`)) && imagenomoredatam);
         iconsaveimaget %= Math.max(iconsaveimaget, 4);
      if (3 >= (4 >> (Math.min(3, referrer8.length))) || 4 >= (iconsaveimaget >> (Math.min(referrer8.length, 4)))) {
         referrer8 = `${(String.fromCharCode(113,0) == sheet7 ? sheet7.length : iconsaveimaget)}`;
      }
      if (4 >= sheet7.length) {
          let rewardW = String.fromCharCode(109,95,56,53,95,98,108,105,110,107,0);
          let closew: Array<any> = [0, 542];
         iconsaveimaget >>= Math.min(1, Math.abs(2));
         rewardW = `${closew.length}`;
         closew = [rewardW.length | closew.length];
      }
       let textinputv = 1.0;
      mappingK -= (parseFloat(`${mountingl == String.fromCharCode(89,0) ? mountingl.length : parseInt(`${profileframeo}`)}`));
   }
       let distB = 4.0;
         distB /= Math.max(2, parseFloat(`${1}`));
      while (4.48 < (distB * 4.87)) {
          let actionD = String.fromCharCode(115,104,111,119,105,110,103,95,98,95,52,50,0);
          let control9 = 1.0;
         distB *= parseFloat(`${3}`);
         actionD += `${parseInt(`${control9}`) + 3}`;
         control9 /= Math.max(1, 2 & actionD.length);
         break;
      }
       let stringJ = 2.0;
      resultO += `${1 / (Math.max(7, klevinG))}`;

        return yysLibturbomodulejsijni.closeRouter;
    }, []);

   if ((mappingK / 4) <= 1.63) {
      fastI += parseFloat(`${parseInt(`${profileframeo}`) - 1}`);
   }
      footballtrophyX.set(assistm, 3);
      mountingl += `${mountingl.length}`;
   while (5 < mountingl.length) {
      klevinG >>= Math.min(2, Math.abs(parseInt(`${profileframeo}`) + parseInt(`${lessQ}`)));
      break;
   }

    useEffect(() => {

      fastI += parseFloat(`${parseInt(`${mbbidK}`)}`);
       let tempnodatagife: Array<any> = [String.fromCharCode(120,95,55,54,95,101,115,115,105,111,110,0), String.fromCharCode(119,95,55,57,95,115,99,104,101,109,97,0), String.fromCharCode(105,110,118,115,98,111,120,95,52,95,49,56,0)];
       let action_ = 4;
       let inouttargetred_ = false;
       let photog = 4.0;
       let notificationI = 1.0;
         inouttargetred_ = photog >= 11.72;
      for (let f = 0; f < 3; f++) {
         notificationI *= (2 & (inouttargetred_ ? 5 : 4));
      }
         tempnodatagife = [1];
         inouttargetred_ = photog <= 91.49;
      while (!tempnodatagife.includes(action_)) {
          let ccdfbdabcabbbedb8: Array<any> = [229, 930];
          let rulesF = String.fromCharCode(117,95,54,54,95,116,100,115,99,0);
          let smallc: Map<any, any> = new Map([[String.fromCharCode(106,95,50,57,95,116,119,111,109,0),true ], [String.fromCharCode(115,116,100,111,117,116,95,103,95,54,56,0),true ], [String.fromCharCode(114,101,97,99,104,97,98,108,101,95,114,95,55,56,0),false ]]);
          let gestureq = 3.0;
          let awayicong = String.fromCharCode(99,108,97,105,109,95,108,95,55,0);
         tempnodatagife.push(1);
         ccdfbdabcabbbedb8.push(parseInt(`${gestureq}`));
         rulesF += "1";
         smallc.set(rulesF, awayicong.length);
         gestureq -= parseFloat(`${awayicong.length}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
          let libtob7 = 3.0;
          let megaphoneE = 5.0;
          let greenK = String.fromCharCode(106,95,51,54,95,114,101,108,97,121,111,117,116,0);
          let video7 = 2.0;
          let ying1 = String.fromCharCode(98,95,51,51,95,115,105,103,115,0);
         inouttargetred_ = (26 == ((inouttargetred_ ? tempnodatagife.length : 26) << (Math.min(tempnodatagife.length, 5))));
         libtob7 /= Math.max(2, parseInt(`${megaphoneE}`));
         greenK = "2";
         video7 *= parseFloat(`${parseInt(`${video7}`) % (Math.max(ying1.length, 5))}`);
         ying1 += `${(ying1 == String.fromCharCode(55,0) ? parseInt(`${libtob7}`) : ying1.length)}`;
      }
      for (let k = 0; k < 1; k++) {
         inouttargetred_ = !inouttargetred_;
      }
      for (let n = 0; n < 3; n++) {
          let styleW = 1.0;
         photog += (parseInt(`${styleW}`) | (inouttargetred_ ? 4 : 1));
      }
      mbbidK -= (parseFloat(`${String.fromCharCode(66,0) == assistm ? assistm.length : parseInt(`${lessQ}`)}`));
      fastI -= parseFloat(`${1}`);
      charto += `${footballtrophyX.size / 1}`;
        yysLibturbomodulejsijni.updateNavigator(navigator);
    }, [navigator]);

    return <></>
}
