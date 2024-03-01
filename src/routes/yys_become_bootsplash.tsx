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

enum HLibsgcoreAttributedstring {
    HTelemetry = 'then',
    HLogoFloating = 'catch',
}

const eventKeyGenerator = (key: string, type: HLibsgcoreAttributedstring) => {
    return key + (type === HLibsgcoreAttributedstring.HLogoFloating ? '-catch' : '-then')
}

export type yys_LibavcodecImagemanager = {
    key: string,
    name: string,
    params?: any,
    backParams?: any,
}

export class yys_DetailWhistle {
    static #navigator: NavigationProp<{ [key: string]: any }> | null = null;
    static #historiesPages: yys_LibavcodecImagemanager[] = [];

    static pendingEvent: { pageName: string, thenEvent: any }[] = [];
    
    static #lastActoinPageName = '';

    static init = (navigation: NavigationProp<any>) => {
        if (this.#navigator !== null) return;

        this.#navigator = navigation;
        this.#navigator.addListener('state', this.#matchHistory);
    }

    static closeRouter = () => {
       let fullF = false;
    let debug5 = true;
    let libavdevice7: Map<any, any> = new Map([[String.fromCharCode(115,97,116,95,111,95,53,49,0),true ], [String.fromCharCode(116,105,109,101,111,117,116,115,95,55,95,56,57,0),true ], [String.fromCharCode(116,114,97,105,116,115,95,100,95,55,0),false ]]);
    let downs: Array<any> = [760, 822, 714];
    let disconnectedE = 3.0;
    let topics: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,110,111,110,0),false ], [String.fromCharCode(106,95,56,52,95,99,108,103,101,116,0),false ]]);
    let helperI = false;
    let volume7: Map<any, any> = new Map([[String.fromCharCode(97,108,112,110,95,116,95,55,54,0),569], [String.fromCharCode(99,111,108,108,97,112,115,101,95,106,95,52,52,0),841], [String.fromCharCode(114,95,56,55,95,104,115,99,114,111,108,108,0),522]]);
    let cornera: Array<any> = [990, 744, 866];
    let libsentryR = 5.0;
    let sheetk = 0.0;
      debug5 = 86 <= cornera.length || topics.size <= 86;
   let libreanimatedU = 8245461 >= volume7.size;
   do {
      volume7 = new Map([[`${disconnectedE}`, 3 / (Math.max(parseInt(`${disconnectedE}`), 5))]]);
      if (libreanimatedU) {
         break;
      }
   } while (((topics.size | volume7.size) == 2) && libreanimatedU);
   if (!Array.from(topics.values()).includes(downs.length)) {
      topics = new Map([[`${downs.length}`, 1 * parseInt(`${disconnectedE}`)]]);
   }
      topics = new Map([[`${disconnectedE}`, parseInt(`${disconnectedE}`) + 3]]);
   while (1 == (3 * volume7.size)) {
      volume7 = new Map([[`${volume7.size}`, ((helperI ? 5 : 1) * volume7.size)]]);
      break;
   }
      debug5 = 57 >= volume7.size && topics.size >= 57;
   if (cornera.includes(disconnectedE)) {
      disconnectedE += (parseFloat(`${2 | (helperI ? 5 : 3)}`));
   }
   if (2.23 <= (parseFloat(`${volume7.size}`) + disconnectedE) && 1 <= (5 - volume7.size)) {
      disconnectedE += parseFloat(`${volume7.size}`);
   }
   if (2 == libavdevice7.size) {
       let libtanN = false;
       let codegenl = String.fromCharCode(114,100,106,112,103,99,111,109,95,98,95,57,51,0);
       let bridge3 = 5;
       let handlerF: Array<any> = [142, 387];
       let alerth = 1.0;
          let casts = String.fromCharCode(97,114,99,95,103,95,57,54,0);
          let libfollyi: Map<any, any> = new Map([[String.fromCharCode(101,95,52,53,95,97,118,105,111,0),true ], [String.fromCharCode(114,101,115,105,122,101,114,95,49,95,51,54,0),true ]]);
         libtanN = (codegenl.length % (Math.max(casts.length, 7))) == 51;
         casts = `${3 * libfollyi.size}`;
         libfollyi.set(`${libfollyi.size}`, 1);
       let taila = 0.0;
       let philippinesv = 5.0;
         philippinesv /= Math.max(parseInt(`${philippinesv}`) % 1, 2);
      for (let b = 0; b < 1; b++) {
         bridge3 *= parseInt(`${taila}`);
      }
       let applez: Array<any> = [String.fromCharCode(114,95,50,57,95,109,101,115,97,103,101,0), String.fromCharCode(104,95,50,52,95,114,102,112,115,0), String.fromCharCode(112,95,53,55,95,99,111,108,111,114,115,112,97,99,101,0)];
       let fieldC: Array<any> = [154, 947];
      let awayC = 4929478 >= applez.length;
      do {
         applez.push(applez.length % 3);
         if (awayC) {
            break;
         }
      } while ((3.99 <= (5.50 - philippinesv) || (applez.length + 2) <= 2) && awayC);
         codegenl += `${2 & codegenl.length}`;
          let feedbackd: Array<any> = [String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,48,95,56,56,0), String.fromCharCode(99,112,120,95,110,95,55,52,0), String.fromCharCode(112,97,121,108,111,97,100,115,95,105,95,54,0)];
          let network_ = true;
         applez = [parseInt(`${alerth}`)];
         feedbackd = [((network_ ? 2 : 5) + feedbackd.length)];
         network_ = feedbackd.includes(network_);
          let settingr: Array<any> = [982, 836];
          let description_tW = 2.0;
          let encrypti = String.fromCharCode(114,105,110,100,101,120,0);
         applez = [2 - parseInt(`${taila}`)];
         settingr.push(parseInt(`${description_tW}`));
         description_tW /= Math.max((parseFloat(`${String.fromCharCode(114,0) == encrypti ? encrypti.length : settingr.length}`)), 1);
          let sourceR = 0.0;
         codegenl += `${parseInt(`${philippinesv}`)}`;
         sourceR -= parseFloat(`${parseInt(`${sourceR}`)}`);
      let emptyT = 7961523.0 >= taila;
      do {
          let canvas5 = false;
          let annere: Map<any, any> = new Map([[String.fromCharCode(100,100,118,97,95,51,95,52,0),974], [String.fromCharCode(113,95,49,57,95,114,101,106,101,99,116,101,100,0),856], [String.fromCharCode(120,95,55,95,109,105,112,115,0),746]]);
          let schedulerc: Array<any> = [9, 286, 942];
         taila *= schedulerc.length | parseInt(`${philippinesv}`);
         canvas5 = !canvas5 || annere.size < 35;
         annere = new Map([[`${annere.size}`, 3]]);
         schedulerc.push((2 - (canvas5 ? 2 : 4)));
         if (emptyT) {
            break;
         }
      } while (((2.89 / (Math.max(9, taila))) <= 4.96) && emptyT);
      for (let e = 0; e < 1; e++) {
         handlerF = [fieldC.length];
      }
         philippinesv += fieldC.length - applez.length;
      for (let f = 0; f < 1; f++) {
         codegenl = `${parseInt(`${taila}`) % (Math.max(6, handlerF.length))}`;
      }
         handlerF = [fieldC.length ^ 1];
      libavdevice7 = new Map([[`${topics.size}`, topics.size & 1]]);
   }
      disconnectedE -= parseFloat(`${volume7.size | 3}`);
      helperI = cornera.length >= 23 || libavdevice7.size >= 23;
   let animationj = topics.size <= 7046239;
   do {
      topics = new Map([[`${volume7.size}`, volume7.size * 1]]);
      if (animationj) {
         break;
      }
   } while (animationj && ((3.20 - disconnectedE) == 1.57 || (parseInt(`${disconnectedE}`) - topics.size) == 2));
      disconnectedE += parseFloat(`${parseInt(`${disconnectedE}`)}`);
   for (let h = 0; h < 2; h++) {
      downs = [topics.size | 3];
   }
      libsentryR /= Math.max(4, parseFloat(`${3}`));
      libavdevice7 = new Map([[`${volume7.size}`, volume7.size]]);
   while (2.75 < disconnectedE || (2.75 - disconnectedE) < 2.25) {
      disconnectedE -= parseFloat(`${cornera.length & parseInt(`${libsentryR}`)}`);
      break;
   }
      fullF = volume7.size >= topics.size;
      libsentryR *= parseFloat(`${volume7.size - 3}`);
       let libreactnativejni4 = 2.0;
       let splashV = false;
       let diceO = 2;
         diceO >>= Math.min(Math.abs(2), 2);
          let anythinko = 2.0;
         splashV = libreactnativejni4 <= 20.29 || splashV;
         anythinko /= Math.max(2, parseFloat(`${2}`));
      for (let h = 0; h < 2; h++) {
         libreactnativejni4 -= parseFloat(`${diceO >> (Math.min(5, Math.abs(2)))}`);
      }
      if (1.28 == libreactnativejni4) {
         splashV = 30 <= diceO;
      }
       let dicen = String.fromCharCode(98,105,103,105,110,116,95,48,95,54,50,0);
       let trash8 = String.fromCharCode(118,111,116,101,114,115,95,57,95,55,50,0);
       let suggestiono = false;
      while (5.52 == libreactnativejni4) {
          let unimplementedvieww = 0.0;
          let bridgeQ = String.fromCharCode(118,95,54,48,95,99,102,116,102,115,117,98,0);
          let libglogo = String.fromCharCode(115,95,53,49,95,115,111,117,114,99,101,99,108,105,112,0);
         splashV = (((suggestiono ? bridgeQ.length : 24) * bridgeQ.length) == 24);
         unimplementedvieww += parseFloat(`${1}`);
         libglogo += `${parseInt(`${unimplementedvieww}`) * libglogo.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
          let arrowx = String.fromCharCode(110,95,51,52,95,115,97,100,120,0);
          let klevinG: Array<any> = [351, 169, 890];
         dicen += `${klevinG.length % 2}`;
         arrowx = `${arrowx.length}`;
         klevinG = [arrowx.length / (Math.max(3, arrowx.length))];
      }
      for (let p = 0; p < 2; p++) {
         splashV = diceO >= 3;
      }
      volume7 = new Map([[`${fullF}`, ((fullF ? 4 : 5))]]);
   let libavfilterv = 7165607.0 <= libsentryR;
   do {
      libsentryR -= parseFloat(`${1}`);
      if (libavfilterv) {
         break;
      }
   } while (libavfilterv && (libavdevice7.get(`${libsentryR}`) != null));
   if (downs.length >= 1) {
      fullF = 42 > libavdevice7.size;
   }

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
       let disconnected8 = String.fromCharCode(100,95,51,54,95,97,99,102,105,108,116,101,114,0);
    let modelsr = 4;
    let libloggerU: Map<any, any> = new Map([[String.fromCharCode(118,95,57,49,95,119,111,114,107,105,110,103,0),false ], [String.fromCharCode(120,95,53,48,95,99,111,97,108,101,115,99,101,0),false ]]);
    let libcxxcomponentsf = String.fromCharCode(97,95,57,48,95,114,111,108,108,0);
    let package_6l_ = String.fromCharCode(100,118,98,115,117,98,95,48,95,55,0);
    let shrinkP = String.fromCharCode(121,95,54,48,95,108,111,97,100,0);
    let whiteY = 0.0;
    let hooksg = String.fromCharCode(118,102,108,97,103,95,100,95,57,50,0);
    let chato = 4.0;
    let const_ab4 = 5;
    let holderI = 3;
    let nalyticsW: Array<any> = [499, 56, 217];
    let libjsinspector3 = 1;
       let libavdevicer = String.fromCharCode(104,95,49,51,95,99,108,97,115,115,105,102,105,101,114,0);
       let logoH = String.fromCharCode(97,95,54,57,95,99,117,114,114,0);
       let aboutd = 1;
         logoH += "1";
         libavdevicer += `${1 & aboutd}`;
          let upgradeD = 0.0;
          let profileG = String.fromCharCode(122,111,110,101,105,110,102,111,95,100,95,49,55,0);
          let dialogG: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,99,104,97,114,116,0),459], [String.fromCharCode(99,116,105,109,101,95,101,95,48,0),590], [String.fromCharCode(109,112,111,115,95,116,95,54,53,0),308]]);
         libavdevicer = `${logoH.length & 1}`;
         upgradeD += dialogG.size % 1;
         profileG += `${parseInt(`${upgradeD}`) >> (Math.min(Math.abs(2), 3))}`;
         dialogG = new Map([[`${dialogG.size}`, dialogG.size]]);
       let gradlewZ = String.fromCharCode(99,116,105,109,101,95,57,95,50,49,0);
         libavdevicer += `${gradlewZ.length}`;
         libavdevicer += `${aboutd}`;
         gradlewZ = `${2 >> (Math.min(4, Math.abs(aboutd)))}`;
      if (gradlewZ.includes(logoH)) {
         gradlewZ += "3";
      }
       let sharez: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,101,110,103,116,104,95,57,95,54,49,0),String.fromCharCode(118,95,49,95,103,114,97,109,115,0)], [String.fromCharCode(112,114,105,109,101,114,95,118,95,49,53,0),String.fromCharCode(99,104,114,111,109,97,116,105,99,95,110,95,55,0)], [String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,119,95,56,48,0),String.fromCharCode(112,114,111,118,105,115,105,111,110,95,56,95,51,54,0)]]);
       let libreactnativejni_: Map<any, any> = new Map([[String.fromCharCode(107,95,48,95,100,101,115,116,105,110,97,116,105,111,110,0),408], [String.fromCharCode(100,101,114,105,118,101,100,0),788]]);
      hooksg = `${1 | aboutd}`;
   if ((package_6l_.length / 1) <= 3) {
       let securityY = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,117,95,57,49,0);
       let filedr: Array<any> = [96, 138];
       let eact9 = 0.0;
          let sellH = String.fromCharCode(102,95,54,49,95,97,98,111,114,116,0);
         securityY += `${parseInt(`${eact9}`) + sellH.length}`;
      while ((4 >> (Math.min(3, securityY.length))) < 4) {
         eact9 += parseFloat(`${securityY.length & 3}`);
         break;
      }
          let libavdevices = String.fromCharCode(105,95,57,48,95,115,105,109,112,108,105,102,121,0);
         filedr = [parseInt(`${eact9}`) + 1];
         libavdevices = `${libavdevices.length << (Math.min(1, libavdevices.length))}`;
         securityY += `${filedr.length}`;
         securityY = `${securityY.length}`;
      if (4 == filedr.length) {
         eact9 -= parseFloat(`${filedr.length}`);
      }
         filedr = [filedr.length];
         filedr.push((String.fromCharCode(108,0) == securityY ? securityY.length : filedr.length));
         eact9 -= parseFloat(`${securityY.length - filedr.length}`);
      package_6l_ = "1";
   }
      shrinkP += `${parseInt(`${whiteY}`) - modelsr}`;
       let liblogger1 = String.fromCharCode(118,95,50,51,95,112,111,115,116,112,111,110,101,0);
       let subs6 = String.fromCharCode(97,118,105,103,97,116,105,111,110,95,105,95,57,53,0);
       let dialogI = 4;
      let formW = 8401588 >= dialogI;
      do {
         dialogI += dialogI ^ 2;
         if (formW) {
            break;
         }
      } while (formW && (1 >= (2 | dialogI)));
         subs6 = `${dialogI / (Math.max(1, 7))}`;
         dialogI *= (subs6 == String.fromCharCode(89,0) ? subs6.length : liblogger1.length);
      if (liblogger1.includes(`${dialogI}`)) {
         liblogger1 += `${dialogI}`;
      }
      for (let h = 0; h < 2; h++) {
          let canvasg = true;
          let philippinesf: Map<any, any> = new Map([[String.fromCharCode(104,95,56,52,95,109,101,115,104,101,115,0),529], [String.fromCharCode(112,111,119,101,114,102,117,108,95,105,95,57,51,0),899]]);
          let dice5: Array<any> = [856, 459];
         liblogger1 += `${dice5.length}`;
         canvasg = (philippinesf.size << (Math.min(2, Math.abs(philippinesf.size)))) <= 43;
      }
         liblogger1 = `${(liblogger1 == String.fromCharCode(115,0) ? subs6.length : liblogger1.length)}`;
      if (2 >= dialogI) {
         liblogger1 = `${2 / (Math.max(8, liblogger1.length))}`;
      }
         liblogger1 = `${2 | dialogI}`;
         liblogger1 += `${dialogI}`;
      libcxxcomponentsf = `${dialogI >> (Math.min(Math.abs(2), 1))}`;
   if (package_6l_.length <= 1) {
       let projectO = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,99,95,54,57,0);
       let applicationH = 5.0;
          let l_title4 = String.fromCharCode(114,95,52,51,95,105,119,104,116,0);
         projectO += `${(String.fromCharCode(98,0) == l_title4 ? l_title4.length : parseInt(`${applicationH}`))}`;
          let telegramx: Array<any> = [296, 78, 575];
          let moduleK = String.fromCharCode(114,95,55,53,95,106,100,99,111,101,102,99,116,0);
          let stringsR = String.fromCharCode(100,105,118,105,100,105,110,103,95,118,95,52,50,0);
         applicationH += parseFloat(`${stringsR.length ^ 2}`);
         telegramx = [telegramx.length & moduleK.length];
         moduleK = `${(String.fromCharCode(81,0) == moduleK ? moduleK.length : telegramx.length)}`;
         stringsR += `${telegramx.length * moduleK.length}`;
          let rightq = true;
          let downloaderG = 1;
          let clearA = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,106,95,50,56,0);
         applicationH -= parseFloat(`${parseInt(`${applicationH}`) + projectO.length}`);
         rightq = ((clearA.length - (!rightq ? clearA.length : 23)) < 23);
         downloaderG *= 2;
       let switch_dG = false;
      let thumbnails = switch_dG ? !switch_dG : switch_dG;
      do {
          let arrowT = 4.0;
          let episodesE = true;
          let flipperH = false;
          let crownq = false;
         switch_dG = arrowT >= 72.86;
         arrowT /= Math.max(2, 1);
         episodesE = flipperH;
         crownq = (!flipperH ? episodesE : !flipperH);
         if (thumbnails) {
            break;
         }
      } while ((1.94 < applicationH && (1.94 / (Math.max(6, applicationH))) < 2.70) && thumbnails);
          let filterX = 1.0;
          let favoritej = 0.0;
          let graphm = 3.0;
         applicationH *= parseFloat(`${parseInt(`${filterX}`) | 2}`);
         filterX *= parseFloat(`${parseInt(`${graphm}`)}`);
         favoritej /= Math.max(1, parseFloat(`${parseInt(`${graphm}`)}`));
      package_6l_ += `${parseInt(`${applicationH}`) % 2}`;
   }
       let tickA = 3.0;
      for (let k = 0; k < 3; k++) {
          let schedulerK: Array<any> = [639, 535, 351];
          let latnL = false;
          let championr = String.fromCharCode(111,95,53,54,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
          let actionq = 1;
          let changeN: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,115,99,104,101,109,101,0),93], [String.fromCharCode(102,97,108,108,98,97,99,107,95,119,95,51,57,0),440]]);
         tickA *= parseInt(`${tickA}`) + 2;
         schedulerK.push(1);
         latnL = !latnL;
         championr = `${actionq}`;
         actionq += actionq * 2;
         changeN = new Map([[`${changeN.size}`, 3]]);
      }
         tickA -= 3 - parseInt(`${tickA}`);
      let sentryv = tickA <= 5414175.0;
      do {
         tickA *= 2 % (Math.max(6, parseInt(`${tickA}`)));
         if (sentryv) {
            break;
         }
      } while (sentryv && (4.2 < tickA));
      libcxxcomponentsf = `${disconnected8.length}`;
       let libswscalep = String.fromCharCode(102,105,110,97,108,105,122,101,100,95,116,95,51,49,0);
       let update_vU = 0.0;
      if ((update_vU / (Math.max(6, libswscalep.length))) <= 1.37) {
         update_vU *= 2;
      }
      while (4 > (libswscalep.length * 2)) {
         libswscalep = `${parseInt(`${update_vU}`) & 2}`;
         break;
      }
      while (1 >= (libswscalep.length * parseInt(`${update_vU}`))) {
         update_vU += parseInt(`${update_vU}`) % (Math.max(2, 7));
         break;
      }
       let shrinkO: Map<any, any> = new Map([[String.fromCharCode(101,95,50,52,95,103,101,115,116,117,114,101,115,0),545], [String.fromCharCode(115,104,97,108,108,95,100,95,54,0),75]]);
         libswscalep += `${libswscalep.length & 1}`;
       let libavformatO = String.fromCharCode(112,97,103,101,99,111,117,110,116,95,105,95,49,50,0);
       let thailand4 = String.fromCharCode(116,101,115,101,100,103,101,95,48,95,52,51,0);
      hooksg = `${(String.fromCharCode(78,0) == libswscalep ? modelsr : libswscalep.length)}`;
   for (let v = 0; v < 1; v++) {
       let videoy = String.fromCharCode(100,114,97,119,101,114,95,100,95,51,56,0);
       let areae = String.fromCharCode(108,95,53,56,95,102,108,105,99,0);
       let searchz = String.fromCharCode(114,95,56,49,95,108,122,111,120,0);
       let upgradec = false;
       let resendQ: Map<any, any> = new Map([[String.fromCharCode(99,114,111,112,112,105,110,103,95,52,95,55,50,0),704], [String.fromCharCode(101,95,49,53,95,116,114,97,110,115,108,97,116,105,111,110,115,0),618]]);
       let libimagepipelineI: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,116,101,100,95,115,95,56,57,0),135], [String.fromCharCode(105,95,53,56,95,100,101,102,105,110,105,116,105,111,110,0),585], [String.fromCharCode(112,95,56,54,95,112,108,97,99,101,104,111,108,100,101,114,115,0),889]]);
          let libcrashsdkb = String.fromCharCode(97,95,56,57,0);
         resendQ.set(`${videoy}`, libimagepipelineI.size + videoy.length);
         libcrashsdkb += `${2 - libcrashsdkb.length}`;
         videoy = "3";
      let typingy = upgradec ? !upgradec : upgradec;
      do {
         upgradec = videoy == String.fromCharCode(107,0);
         if (typingy) {
            break;
         }
      } while (typingy && (searchz.startsWith(`${upgradec}`)));
      for (let p = 0; p < 3; p++) {
         areae += `${resendQ.size}`;
      }
      while (1 < videoy.length && upgradec) {
         upgradec = 41 >= searchz.length && areae.length >= 41;
         break;
      }
      if (videoy.includes(`${upgradec}`)) {
         videoy += `${(String.fromCharCode(75,0) == areae ? searchz.length : areae.length)}`;
      }
      let libreactB = 8246717 <= resendQ.size;
      do {
         resendQ.set(`${upgradec}`, 2);
         if (libreactB) {
            break;
         }
      } while (libreactB && (upgradec));
       let libzeusm: Array<any> = [996, 423, 21];
       let baiduS: Array<any> = [331, 735, 350];
      let gmailD = 7100010 <= resendQ.size;
      do {
          let complete3 = String.fromCharCode(101,95,53,50,95,116,111,109,99,114,121,112,116,0);
          let thailandv = true;
          let switch_ma = String.fromCharCode(104,95,54,56,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0);
          let libjsi5 = String.fromCharCode(112,95,51,50,95,115,121,109,108,105,110,107,0);
         resendQ = new Map([[`${resendQ.size}`, complete3.length]]);
         complete3 = "1";
         thailandv = !thailandv;
         switch_ma += `${switch_ma.length << (Math.min(libjsi5.length, 2))}`;
         libjsi5 += `${((thailandv ? 3 : 3) << (Math.min(switch_ma.length, 4)))}`;
         if (gmailD) {
            break;
         }
      } while (gmailD && ((areae.length << (Math.min(Math.abs(4), 5))) == 3));
          let backgroundY = true;
         resendQ = new Map([[`${backgroundY}`, 1 * videoy.length]]);
      for (let f = 0; f < 3; f++) {
          let volumeK = 3.0;
         resendQ.set(`${volumeK}`, 3 ^ parseInt(`${volumeK}`));
      }
      shrinkP += "1";
   }
   for (let h = 0; h < 3; h++) {
      whiteY += (parseFloat(`${shrinkP == String.fromCharCode(105,0) ? shrinkP.length : parseInt(`${chato}`)}`));
   }
      shrinkP = `${modelsr << (Math.min(Math.abs(parseInt(`${whiteY}`)), 2))}`;
   if (3 == (libloggerU.size / 4)) {
       let toponn = 2;
       let d_lockL = 0.0;
       let libloggerm = String.fromCharCode(119,101,105,103,104,116,115,95,104,95,52,51,0);
       let streamingL = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,102,95,53,52,0);
       let clearK = 3;
          let y_title5 = 4.0;
          let termsX = 0;
         d_lockL /= Math.max(parseFloat(`${parseInt(`${y_title5}`) >> (Math.min(Math.abs(parseInt(`${d_lockL}`)), 2))}`), 1);
         y_title5 += parseFloat(`${termsX}`);
      let bootsplasho = String.fromCharCode(50,95,112,99,109,119,100,0) == streamingL;
      do {
         streamingL = `${3 | libloggerm.length}`;
         if (bootsplasho) {
            break;
         }
      } while (bootsplasho && (!streamingL.endsWith(`${clearK}`)));
          let filledf: Array<any> = [648, 793];
          let bing0 = 1;
         libloggerm = "2";
         filledf.push(bing0);
         bing0 >>= Math.min(filledf.length, 3);
          let backgroundO = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,100,95,52,50,0);
         libloggerm = `${backgroundO.length}`;
         d_lockL += parseFloat(`${parseInt(`${d_lockL}`)}`);
         toponn |= clearK / (Math.max(streamingL.length, 8));
         libloggerm = `${streamingL.length}`;
          let codegenj = 5;
          let roundn = String.fromCharCode(115,117,98,100,97,116,97,95,120,95,49,54,0);
          let smalla = 4.0;
         libloggerm += `${2 + toponn}`;
         codegenj /= Math.max(parseInt(`${smalla}`) / (Math.max(roundn.length, 8)), 2);
         roundn += `${codegenj}`;
         smalla += 1 - parseInt(`${smalla}`);
       let file5: Array<any> = [680, 491, 862];
       let about3: Array<any> = [643, 29];
      while (3 < clearK) {
         file5.push(toponn);
         break;
      }
          let rcopy_xrM = true;
          let cornerY = false;
         d_lockL /= Math.max(3, parseFloat(`${clearK}`));
         rcopy_xrM = !cornerY;
      libcxxcomponentsf += `${disconnected8.length * 3}`;
   }
       let upgradeH = 4;
       let navigationR = 1.0;
      let foreground5 = upgradeH <= 7703446;
      do {
          let gdtadv5 = 5.0;
          let saveF = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,56,95,54,57,0);
          let libreanimatedr: Array<any> = [902, 469, 353];
          let selectS = 3.0;
          let libavcodec3 = String.fromCharCode(109,95,56,50,95,112,105,99,116,117,114,101,115,0);
         upgradeH /= Math.max(1, upgradeH);
         gdtadv5 += (parseFloat(`${libavcodec3 == String.fromCharCode(52,0) ? libavcodec3.length : parseInt(`${gdtadv5}`)}`));
         saveF = `${libavcodec3.length}`;
         libreanimatedr = [(String.fromCharCode(112,0) == saveF ? libreanimatedr.length : saveF.length)];
         selectS /= Math.max(2, 2 + parseInt(`${selectS}`));
         if (foreground5) {
            break;
         }
      } while (((navigationR / (Math.max(1, upgradeH))) >= 4.40) && foreground5);
          let untickJ = 5;
          let interstitial9 = String.fromCharCode(111,95,56,48,95,115,105,103,101,120,112,0);
         upgradeH *= 2;
         untickJ <<= Math.min(1, Math.abs(interstitial9.length ^ untickJ));
         interstitial9 += `${untickJ}`;
         navigationR += parseFloat(`${upgradeH - 3}`);
      let alertZ = 5440246 <= upgradeH;
      do {
         upgradeH <<= Math.min(4, Math.abs(upgradeH));
         if (alertZ) {
            break;
         }
      } while (alertZ && (4 == upgradeH));
      for (let n = 0; n < 1; n++) {
         navigationR -= parseFloat(`${parseInt(`${navigationR}`) >> (Math.min(1, Math.abs(2)))}`);
      }
          let paginations: Array<any> = [823, 250];
         navigationR /= Math.max(5, parseFloat(`${paginations.length * 3}`));
      modelsr &= modelsr % (Math.max(disconnected8.length, 2));
   let settingA = libloggerU.size >= 5390376;
   do {
      libloggerU.set(shrinkP, modelsr);
      if (settingA) {
         break;
      }
   } while ((hooksg.startsWith(`${libloggerU.size}`)) && settingA);
      chato -= parseFloat(`${2}`);
   let libruntimeexecutorz = hooksg.length <= 7470374;
   do {
      hooksg = `${(disconnected8 == String.fromCharCode(85,0) ? parseInt(`${whiteY}`) : disconnected8.length)}`;
      if (libruntimeexecutorz) {
         break;
      }
   } while (((parseInt(`${chato}`) / (Math.max(hooksg.length, 1))) <= 2 && 1.40 <= (5.40 / (Math.max(7, chato)))) && libruntimeexecutorz);
   for (let x = 0; x < 2; x++) {
       let mutedT = 4.0;
       let nterstitialA = 0.0;
      if ((1 * mutedT) == 1.63) {
         nterstitialA -= parseInt(`${mutedT}`);
      }
      if ((mutedT + nterstitialA) <= 3.39) {
          let ballK = true;
          let ticko = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,55,95,55,54,0);
         nterstitialA += ticko.length;
      }
          let miniW: Map<any, any> = new Map([[String.fromCharCode(120,102,111,114,109,95,118,95,57,57,0),162], [String.fromCharCode(112,95,52,53,95,114,101,113,117,101,115,116,0),392]]);
          let downloaded1 = 2.0;
          let changen = String.fromCharCode(107,95,55,53,95,113,100,109,99,0);
         nterstitialA += parseInt(`${downloaded1}`);
         miniW.set(`${changen}`, (String.fromCharCode(111,0) == changen ? miniW.size : changen.length));
         downloaded1 -= 1 * changen.length;
          let kuaishoun: Array<any> = [303, 267, 130];
          let guided: Array<any> = [String.fromCharCode(114,101,108,101,97,115,101,95,100,95,54,51,0), String.fromCharCode(98,95,52,54,95,115,116,114,101,97,109,97,98,108,101,0), String.fromCharCode(106,95,49,55,95,109,111,100,101,120,112,0)];
          let helper0 = String.fromCharCode(115,104,97,100,101,114,115,95,53,95,54,51,0);
         mutedT /= Math.max(parseFloat(`${kuaishoun.length << (Math.min(Math.abs(1), 3))}`), 4);
         kuaishoun.push(3 - helper0.length);
         guided.push(helper0.length / (Math.max(1, guided.length)));
      for (let t = 0; t < 1; t++) {
         mutedT *= parseFloat(`${2}`);
      }
      for (let i = 0; i < 2; i++) {
          let becomeT = 1.0;
          let pageR = String.fromCharCode(105,95,54,57,95,99,111,110,115,116,113,112,0);
          let actionr: Array<any> = [817, 908];
          let stringsk = String.fromCharCode(111,110,121,120,95,116,95,53,48,0);
          let ewardedx = 3;
         mutedT += parseFloat(`${parseInt(`${nterstitialA}`)}`);
         becomeT += parseFloat(`${ewardedx ^ 3}`);
         pageR = `${actionr.length}`;
         actionr = [stringsk.length >> (Math.min(Math.abs(3), 2))];
         stringsk += `${(pageR == String.fromCharCode(113,0) ? parseInt(`${becomeT}`) : pageR.length)}`;
         ewardedx &= 3 & stringsk.length;
      }
      chato += parseFloat(`${libloggerU.size}`);
   }
   if (5 == hooksg.length) {
       let libflipperr = 3.0;
      if (2.16 == libflipperr) {
         libflipperr /= Math.max(parseInt(`${libflipperr}`), 2);
      }
         libflipperr *= parseInt(`${libflipperr}`) % 2;
      while (1.21 > (libflipperr - 5.52) || (libflipperr - libflipperr) > 5.52) {
         libflipperr += parseInt(`${libflipperr}`);
         break;
      }
      whiteY += (parseFloat(`${String.fromCharCode(82,0) == shrinkP ? shrinkP.length : modelsr}`));
   }
      libcxxcomponentsf += `${hooksg.length | 1}`;
      shrinkP = `${libcxxcomponentsf.length}`;
      const_ab4 %= Math.max(2, 3);

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

    static current = (): yys_LibavcodecImagemanager | undefined => {
        if (this.#historiesPages.length <= 0) return;
        return this.#historiesPages[this.#historiesPages.length - 1];
    }

    static previous = (): yys_LibavcodecImagemanager | undefined => {
        if (this.#historiesPages.length <= 1) return;
        return this.#historiesPages[this.#historiesPages.length - 2];
    }

    static history = (): yys_LibavcodecImagemanager[] => {
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
            this.#addEventByKey(route.key, HLibsgcoreAttributedstring.HTelemetry, this.pendingEvent[pendingEventFound].thenEvent);
            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    /**
     * params => use for navigate pop action
     */
    static #handlePop = (
        page?: yys_LibavcodecImagemanager,
        route?: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        }
    ) => {
        if (!page) return;

        this.#runEventByKey(page.key, HLibsgcoreAttributedstring.HTelemetry, page.backParams);
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

    static #addEventByKey = (key: string, type: HLibsgcoreAttributedstring, callback: () => void) => {
        DeviceEventEmitter.addListener(eventKeyGenerator(key, type), callback);
    }

    static #runEventByKey = (key: string, type: HLibsgcoreAttributedstring, params?: any) => {
        DeviceEventEmitter.emit(eventKeyGenerator(key, type), params);
        this.#removeListenerByKey(key);
    }

    static #removeListenerByKey = (key: string) => {
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, HLibsgcoreAttributedstring.HTelemetry));
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, HLibsgcoreAttributedstring.HLogoFloating));
    }
}

export const CRouteInitializer = () => {
       let linep: Map<any, any> = new Map([[String.fromCharCode(115,101,103,117,101,95,112,95,49,57,0),329], [String.fromCharCode(101,112,101,108,95,102,95,55,57,0),594]]);
    let malaysiaJ = 1;
    let orangeM = 1.0;
    let baiduj = true;
    let runtimep = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,99,95,49,53,0);
    let libyogah = 1;
    let playercommonO = 0.0;
    let sourcea: Array<any> = [544, 954];
    let trash6 = 1.0;
       let liveP: Array<any> = [809, 735, 136];
       let anytime_ = String.fromCharCode(98,95,55,53,95,100,114,97,102,116,115,0);
      if (5 > (anytime_.length ^ 1) || 1 > (liveP.length ^ anytime_.length)) {
         liveP = [2];
      }
      let dark1 = 5007116 >= liveP.length;
      do {
         liveP = [liveP.length | 2];
         if (dark1) {
            break;
         }
      } while ((4 >= (3 - anytime_.length) || 1 >= (liveP.length - 3)) && dark1);
         anytime_ += `${1 / (Math.max(2, anytime_.length))}`;
      while (anytime_.startsWith(`${liveP.length}`)) {
         anytime_ = `${anytime_.length | liveP.length}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
          let auto_ex = 1;
          let customs = 4;
          let benefitJ = 2;
          let uimanagerd: Array<any> = [591, 142];
         anytime_ += `${anytime_.length}`;
         auto_ex >>= Math.min(Math.abs(uimanagerd.length | 3), 1);
         customs >>= Math.min(Math.abs(1), 1);
         benefitJ += auto_ex;
         uimanagerd = [auto_ex];
      }
          let pageW: Array<any> = [String.fromCharCode(101,121,101,95,57,95,54,52,0), String.fromCharCode(98,95,51,56,95,99,114,111,119,100,105,110,0)];
         anytime_ = `${anytime_.length + 2}`;
         pageW = [pageW.length << (Math.min(Math.abs(1), 2))];
      libyogah += libyogah + 2;
       let sendK = String.fromCharCode(99,104,105,108,100,114,101,110,95,97,95,51,53,0);
         sendK += `${(sendK == String.fromCharCode(66,0) ? sendK.length : sendK.length)}`;
      for (let k = 0; k < 1; k++) {
          let vignette9 = 2;
         sendK = `${sendK.length}`;
         vignette9 &= vignette9 / (Math.max(vignette9, 8));
      }
      let logoa = 8927391 <= sendK.length;
      do {
          let bootsplashv = 1;
          let sinaG = 2;
          let dragV = 2.0;
          let privilege2 = String.fromCharCode(107,95,54,54,95,114,101,113,117,101,115,116,97,98,108,101,0);
          let time_dkJ = String.fromCharCode(110,95,51,49,95,116,109,109,98,114,0);
         sendK += `${parseInt(`${dragV}`)}`;
         bootsplashv >>= Math.min(4, Math.abs(2));
         sinaG -= 2 ^ bootsplashv;
         dragV *= parseFloat(`${2 + privilege2.length}`);
         privilege2 = `${time_dkJ.length}`;
         time_dkJ = `${privilege2.length % 3}`;
         if (logoa) {
            break;
         }
      } while ((sendK.length < sendK.length) && logoa);
      runtimep += `${(String.fromCharCode(87,0) == runtimep ? parseInt(`${orangeM}`) : runtimep.length)}`;
       let register_wG = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,113,95,51,48,0);
       let searchbarX: Map<any, any> = new Map([[String.fromCharCode(102,111,114,98,105,100,100,101,110,95,107,95,53,49,0),false ], [String.fromCharCode(105,119,104,116,120,95,101,95,50,49,0),false ]]);
      for (let j = 0; j < 2; j++) {
         searchbarX.set(register_wG, searchbarX.size | register_wG.length);
      }
          let hcopy_1s = true;
          let navigationD: Array<any> = [944, 962];
         searchbarX = new Map([[`${searchbarX.size}`, searchbarX.size]]);
         hcopy_1s = navigationD.length >= 46;
         navigationD.push(navigationD.length >> (Math.min(5, navigationD.length)));
      if (register_wG.startsWith(`${searchbarX.size}`)) {
         searchbarX.set(register_wG, searchbarX.size - 1);
      }
      let xadsdk0 = searchbarX.size >= 8254323;
      do {
          let dropdown_ = false;
         searchbarX.set(register_wG, ((dropdown_ ? 1 : 3)));
         if (xadsdk0) {
            break;
         }
      } while ((register_wG.length <= searchbarX.size) && xadsdk0);
      if (2 <= (searchbarX.size - 2)) {
         register_wG = `${searchbarX.size % 3}`;
      }
      while ((searchbarX.size & 1) <= 2) {
         searchbarX = new Map([[`${searchbarX.size}`, register_wG.length]]);
         break;
      }
      baiduj = (playercommonO + register_wG.length) >= 31.80;

    const navigator = useNavigation<NavigationProp<{ [key: string]: any }>>();

    useEffect(() => {

      baiduj = 70 == (libyogah - playercommonO);
      runtimep = `${1 * libyogah}`;
   let q_titlec = malaysiaJ >= 6744698;
   do {
       let clubj = String.fromCharCode(109,95,49,56,95,99,111,109,109,97,110,100,0);
      for (let k = 0; k < 2; k++) {
         clubj = `${2 * clubj.length}`;
      }
      while (!clubj.includes(clubj)) {
         clubj = `${clubj.length >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
         clubj += `${clubj.length % (Math.max(clubj.length, 2))}`;
      malaysiaJ >>= Math.min(4, parseInt(`${Math.abs(((baiduj ? 5 : 1) >> (Math.min(Math.abs(2), 3))))}`));
      if (q_titlec) {
         break;
      }
   } while ((libyogah <= 3) && q_titlec);
        yys_DetailWhistle.init(navigator);

   for (let j = 0; j < 2; j++) {
       let nalyticsP = 5;
       let update_p7 = String.fromCharCode(102,95,56,57,95,115,112,101,101,99,104,0);
       let container7: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,111,108,115,95,121,95,55,56,0),655], [String.fromCharCode(103,112,109,100,95,102,95,49,53,0),24], [String.fromCharCode(114,95,57,53,95,99,111,109,102,111,114,116,0),440]]);
       let ballr = String.fromCharCode(117,110,114,101,102,95,103,95,49,48,48,0);
       let window_i7p = false;
      while (5 > (update_p7.length << (Math.min(5, Math.abs(nalyticsP)))) || 5 > (update_p7.length << (Math.min(1, Math.abs(nalyticsP))))) {
         update_p7 = `${(update_p7.length * (window_i7p ? 1 : 3))}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
         update_p7 += `${3 - update_p7.length}`;
      }
      while (5 <= (container7.size + 4)) {
         window_i7p = !window_i7p;
         break;
      }
         update_p7 += `${nalyticsP}`;
      let other4 = 9665057 >= container7.size;
      do {
          let libreactnativejniV = 5;
          let networkT = String.fromCharCode(101,95,49,52,95,115,117,98,108,101,110,103,116,104,0);
          let hongkongy = String.fromCharCode(115,105,100,101,115,95,52,95,50,53,0);
          let termse = true;
          let rncoreO = String.fromCharCode(115,95,52,52,95,114,101,108,111,97,100,0);
         container7.set(`${libreactnativejniV}`, 3 & libreactnativejniV);
         networkT += "2";
         hongkongy += `${rncoreO.length & 1}`;
         rncoreO = `${(rncoreO.length + (termse ? 2 : 1))}`;
         if (other4) {
            break;
         }
      } while ((ballr.length >= 4) && other4);
      if (!update_p7.startsWith(`${nalyticsP}`)) {
         update_p7 = "3";
      }
         window_i7p = nalyticsP == 12;
          let mbbidI = String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,51,95,57,51,0);
         nalyticsP += mbbidI.length;
       let areaG = true;
       let circle5 = String.fromCharCode(110,111,110,109,117,108,116,95,50,95,55,57,0);
       let attributedstringX = String.fromCharCode(115,99,116,101,95,97,95,52,49,0);
         circle5 = `${ballr.length - 1}`;
      while (1 >= (nalyticsP >> (Math.min(Math.abs(3), 2)))) {
          let serviceJ = 1;
          let directG = String.fromCharCode(118,95,56,50,95,108,105,115,116,101,100,0);
          let placeholder1 = 5.0;
          let libloggerO = 1.0;
         update_p7 = `${directG.length}`;
         serviceJ |= parseInt(`${placeholder1}`);
         directG = `${3 - parseInt(`${placeholder1}`)}`;
         libloggerO -= parseFloat(`${serviceJ % (Math.max(parseInt(`${placeholder1}`), 3))}`);
         break;
      }
       let dplusI: Map<any, any> = new Map([[String.fromCharCode(115,116,114,97,116,101,103,105,101,115,0),473], [String.fromCharCode(99,111,109,98,105,110,101,114,95,51,95,52,53,0),294], [String.fromCharCode(116,95,53,53,95,109,112,101,103,0),560]]);
       let const_kN: Map<any, any> = new Map([[String.fromCharCode(104,114,97,109,95,109,95,52,0),588], [String.fromCharCode(112,103,115,122,95,109,95,49,48,48,0),805], [String.fromCharCode(114,97,112,105,100,95,48,95,54,54,0),624]]);
      for (let q = 0; q < 3; q++) {
          let sellY: Map<any, any> = new Map([[String.fromCharCode(109,105,114,114,111,114,101,100,95,54,95,54,56,0),619], [String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,111,95,54,48,0),440]]);
         ballr = `${circle5.length + ballr.length}`;
         sellY.set(`${sellY.size}`, sellY.size);
      }
         circle5 += `${dplusI.size}`;
      runtimep += `${parseInt(`${orangeM}`)}`;
   }
   let description_88x = 7965727 >= linep.size;
   do {
      linep.set(runtimep, 3 + runtimep.length);
      if (description_88x) {
         break;
      }
   } while (description_88x && (!Array.from(linep.keys()).includes(`${malaysiaJ}`)));
      playercommonO /= Math.max(1, 4);

        return yys_DetailWhistle.closeRouter;
    }, []);

       let time_dc = String.fromCharCode(122,95,53,55,95,103,114,111,101,115,116,108,0);
       let string_ = String.fromCharCode(117,110,102,101,116,99,104,95,122,95,55,50,0);
       let telemetryE: Array<any> = [932, 378, 693];
      let kickZ = String.fromCharCode(120,108,49,112,57,111,121,56,0) == time_dc;
      do {
         time_dc = `${string_.length % (Math.max(7, time_dc.length))}`;
         if (kickZ) {
            break;
         }
      } while (kickZ && (!string_.startsWith(`${time_dc.length}`)));
      for (let k = 0; k < 1; k++) {
         time_dc += "1";
      }
       let sorta = 5.0;
          let spinnerr = true;
          let settingsM = String.fromCharCode(101,95,49,53,95,101,112,108,121,0);
         telemetryE = [(String.fromCharCode(74,0) == time_dc ? time_dc.length : parseInt(`${sorta}`))];
         spinnerr = settingsM.includes(`${spinnerr}`);
         settingsM += `${(settingsM.length * (spinnerr ? 5 : 3))}`;
         telemetryE = [string_.length + 3];
         time_dc += `${string_.length}`;
       let overlayU = true;
          let commentW = 5.0;
          let user2 = String.fromCharCode(102,95,50,95,101,114,97,115,101,114,0);
         telemetryE = [parseInt(`${commentW}`) * user2.length];
         overlayU = (string_.length / (Math.max(time_dc.length, 7))) < 16;
      runtimep += "3";
   let soundT = 7173264.0 >= playercommonO;
   do {
       let termsz: Map<any, any> = new Map([[String.fromCharCode(105,118,115,101,116,117,112,95,103,95,49,50,0),798], [String.fromCharCode(108,111,111,107,115,95,52,95,50,53,0),297], [String.fromCharCode(119,105,114,101,108,101,115,115,95,53,95,55,51,0),599]]);
       let dycreatorZ = 3;
         termsz.set(`${dycreatorZ}`, termsz.size % 3);
         termsz.set(`${dycreatorZ}`, 2);
      if (dycreatorZ > 3) {
         dycreatorZ /= Math.max(5, dycreatorZ);
      }
      while ((termsz.size / (Math.max(3, 9))) == 1 || (3 / (Math.max(6, termsz.size))) == 2) {
         termsz.set(`${dycreatorZ}`, termsz.size);
         break;
      }
         dycreatorZ ^= 1;
      let condensedO = termsz.size <= 7820619;
      do {
          let debugt = String.fromCharCode(115,99,97,108,101,99,117,100,97,95,120,95,49,56,0);
          let formg = 3.0;
          let tickU = String.fromCharCode(99,95,52,51,95,109,117,108,116,105,115,105,103,0);
          let twitterG = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,99,95,53,57,0);
         termsz.set(debugt, dycreatorZ / 1);
         debugt = `${tickU.length + twitterG.length}`;
         formg += parseInt(`${formg}`) % (Math.max(tickU.length, 10));
         twitterG = "1";
         if (condensedO) {
            break;
         }
      } while ((Array.from(termsz.values()).includes(dycreatorZ)) && condensedO);
      playercommonO /= Math.max(runtimep.length, 1);
      if (soundT) {
         break;
      }
   } while ((!baiduj) && soundT);
       let watchz = 3;
       let foregrounda: Map<any, any> = new Map([[String.fromCharCode(120,95,56,53,95,115,101,112,97,114,97,116,101,0),String.fromCharCode(112,95,54,53,95,110,101,111,110,0)], [String.fromCharCode(98,95,56,57,95,99,117,98,101,0),String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,103,95,53,54,0)], [String.fromCharCode(115,95,57,48,95,110,101,103,111,116,105,97,116,105,111,110,0),String.fromCharCode(114,105,99,104,95,119,95,57,55,0)]]);
       let helpera = 1;
      while ((watchz / 3) > 2) {
         helpera %= Math.max(3 | watchz, 5);
         break;
      }
      let runtimeh = 8452082 <= foregrounda.size;
      do {
         foregrounda = new Map([[`${watchz}`, 1 * watchz]]);
         if (runtimeh) {
            break;
         }
      } while ((!Array.from(foregrounda.keys()).includes(`${watchz}`)) && runtimeh);
       let xadsdkX: Array<any> = [String.fromCharCode(102,111,117,114,120,109,95,118,95,51,53,0), String.fromCharCode(116,95,50,55,95,110,99,111,109,105,110,103,0)];
       let mbsplash2: Array<any> = [735, 934, 735];
      while (helpera > 4) {
         helpera /= Math.max(watchz % 3, 3);
         break;
      }
         foregrounda = new Map([[`${foregrounda.size}`, helpera]]);
         xadsdkX.push(foregrounda.size);
      for (let z = 0; z < 2; z++) {
         xadsdkX.push(helpera);
      }
      for (let c = 0; c < 2; c++) {
          let floaterF = false;
          let libswresamplem = 1;
          let signinupi = 0.0;
          let connectionG = String.fromCharCode(100,105,118,105,100,101,110,100,95,56,95,50,0);
         xadsdkX = [2];
         floaterF = connectionG.length > 13;
         libswresamplem >>= Math.min(5, Math.abs(parseInt(`${signinupi}`) - 2));
         signinupi += parseFloat(`${libswresamplem ^ 1}`);
         connectionG += "2";
      }
         mbsplash2.push(xadsdkX.length);
      linep = new Map([[`${libyogah}`, 1 - malaysiaJ]]);

    useEffect(() => {

       let bing6 = 5;
       let binddatasi = true;
      let twitterg = binddatasi ? !binddatasi : binddatasi;
      do {
         binddatasi = !binddatasi && bing6 >= 18;
         if (twitterg) {
            break;
         }
      } while ((!binddatasi) && twitterg);
      while (binddatasi) {
         binddatasi = !binddatasi;
         break;
      }
       let trash3 = String.fromCharCode(104,95,52,57,95,102,114,111,109,98,121,116,101,115,0);
       let readP = String.fromCharCode(99,95,57,51,95,115,112,105,108,108,115,105,122,101,0);
      if ((2 / (Math.max(5, bing6))) == 1 || 2 == bing6) {
         binddatasi = !binddatasi;
      }
          let leagueZ = 4;
          let rewindb = String.fromCharCode(99,111,114,112,117,115,95,116,95,50,48,0);
         bing6 <<= Math.min(4, Math.abs((readP == String.fromCharCode(76,0) ? trash3.length : readP.length)));
         leagueZ <<= Math.min(5, Math.abs(rewindb.length | leagueZ));
         rewindb += `${rewindb.length}`;
      if (trash3.length <= 2) {
         trash3 += `${((binddatasi ? 5 : 5) % (Math.max(8, bing6)))}`;
      }
      runtimep = `${(libyogah << (Math.min(4, Math.abs((binddatasi ? 1 : 2)))))}`;
      playercommonO /= Math.max(1, 4);
      orangeM += malaysiaJ - 2;
        yys_DetailWhistle.updateNavigator(navigator);
    }, [navigator]);

    return <></>
}
