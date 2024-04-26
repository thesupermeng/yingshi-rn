 

import { useEffect } from "react";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter } from "react-native";

enum GTurndown {
    GPreviewKsad = 'then',
    GConfig = 'catch',
}

const eventKeyGenerator = (key: string, type: GTurndown) => {
    return key + (type === GTurndown.GConfig ? '-catch' : '-then')
}

export type wawaLibjsijniprofilerCombined = {
    key: string,
    name: string,
    params?: any,
    backParams?: any,
}

export class wawaLayout {
    static #middlewares: { [key: string]: [] | [(page: string) => string | undefined] } = {};
    static #navigator: NavigationProp<{ [key: string]: any }> | null = null;
    static #historiesPages: wawaLibjsijniprofilerCombined[] = [];

    static pendingEvent: { pageName: string, thenEvent: any }[] = [];
    
    static #lastActoinPageName = '';

    static init = (navigation: NavigationProp<any>, {
        middlewares = {}
    }: {
        middlewares: { [key: string]: [] | [(page: string) => string | undefined] },
    }) => {
        if (this.#navigator !== null) return;

        this.#navigator = navigation;
        this.#navigator.addListener('state', this.#matchHistory);

        if (middlewares !== undefined && middlewares !== null) {
            this.#middlewares = middlewares;
        }
    }

    static closeRouter = () => {
       let basem = String.fromCharCode(100,111,119,110,108,111,97,100,115,95,119,95,50,0);
    let darks = 3;
    let iconclose_ = String.fromCharCode(103,105,118,101,110,95,121,95,57,0);
    let membershipY = String.fromCharCode(100,115,117,98,101,120,112,95,48,95,54,48,0);
    let libmapbufferjnir = true;
    let distU: Array<any> = [String.fromCharCode(115,105,110,101,95,111,95,55,53,0), String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,53,95,52,49,0)];
    let arrowq = 1;
    let notificationgray2: Array<any> = [71, 200, 733];
    let libjsijniprofilerl = String.fromCharCode(110,95,52,54,95,97,100,100,102,0);
    let streaming8 = false;
    let combinea = 3.0;
    let countdownv: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,108,105,110,101,95,105,95,50,53,0),886], [String.fromCharCode(120,95,55,55,95,109,115,101,112,115,110,114,0),147], [String.fromCharCode(114,101,99,121,99,108,101,95,116,95,49,51,0),19]]);
    let iconnointernetM = String.fromCharCode(116,108,101,110,95,108,95,53,48,0);
    let blackZ: Array<any> = [140, 929];
   for (let i = 0; i < 2; i++) {
      distU = [2 * basem.length];
   }
   if (libjsijniprofilerl.length <= 3) {
      membershipY = `${distU.length}`;
   }
   let termse = combinea >= 9728358.0;
   do {
       let nativemodule0 = 2.0;
       let middlek = 0.0;
       let vipsport6: Array<any> = [String.fromCharCode(106,95,57,55,95,101,110,116,114,111,112,121,0), String.fromCharCode(115,110,112,114,105,110,116,102,95,115,95,53,55,0), String.fromCharCode(110,95,53,57,95,100,111,97,108,108,0)];
          let signinupi: Map<any, any> = new Map([[String.fromCharCode(98,95,53,51,95,116,105,102,102,0),String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,103,95,49,56,0)], [String.fromCharCode(109,95,49,48,95,109,117,108,116,105,112,108,101,120,0),String.fromCharCode(105,110,100,101,120,95,56,95,57,53,0)], [String.fromCharCode(112,116,104,114,101,97,100,95,102,95,55,54,0),String.fromCharCode(110,95,54,51,0)]]);
          let hoverw = String.fromCharCode(105,112,97,100,100,95,108,95,55,49,0);
          let libffmpegkit1 = String.fromCharCode(114,97,100,98,103,95,48,95,57,56,0);
         middlek += 3 - parseInt(`${nativemodule0}`);
         signinupi = new Map([[hoverw, hoverw.length]]);
         libffmpegkit1 += `${libffmpegkit1.length}`;
          let iconadslinkO = false;
          let rewardvideon = 4;
         vipsport6.push(3 / (Math.max(parseInt(`${middlek}`), 1)));
         iconadslinkO = rewardvideon == 79;
         rewardvideon += 2;
      let matchJ = 6005841.0 <= middlek;
      do {
         middlek += parseInt(`${nativemodule0}`);
         if (matchJ) {
            break;
         }
      } while ((vipsport6.length == 3) && matchJ);
      let iconarrowrightL = middlek >= 5032390.0;
      do {
         middlek -= parseInt(`${middlek}`) << (Math.min(1, Math.abs(1)));
         if (iconarrowrightL) {
            break;
         }
      } while (((4.82 - middlek) == 2.28 && 4.85 == (middlek - 4.82)) && iconarrowrightL);
      for (let x = 0; x < 2; x++) {
         vipsport6 = [parseInt(`${middlek}`) << (Math.min(vipsport6.length, 5))];
      }
      while ((nativemodule0 / (Math.max(5, middlek))) <= 3.90) {
         middlek /= Math.max(vipsport6.length, 2);
         break;
      }
      let backC = nativemodule0 <= 9581787.0;
      do {
         nativemodule0 /= Math.max(1, parseInt(`${nativemodule0}`) | parseInt(`${middlek}`));
         if (backC) {
            break;
         }
      } while (backC && (nativemodule0 == vipsport6.length));
         vipsport6.push(vipsport6.length);
      while ((middlek - 3.60) >= 5.87 || 3.35 >= (middlek + 3.60)) {
         middlek -= vipsport6.length;
         break;
      }
      combinea -= parseFloat(`${parseInt(`${nativemodule0}`) | parseInt(`${middlek}`)}`);
      if (termse) {
         break;
      }
   } while ((combinea < darks) && termse);
      arrowq >>= Math.min(3, Math.abs(3));
   for (let j = 0; j < 3; j++) {
      membershipY += `${((libmapbufferjnir ? 1 : 1) + distU.length)}`;
   }
   let yellowX = membershipY.length >= 5739370;
   do {
       let progressf = 4.0;
       let private_btQ = String.fromCharCode(118,95,50,49,95,104,117,110,103,0);
         private_btQ = `${parseInt(`${progressf}`) - private_btQ.length}`;
      for (let z = 0; z < 2; z++) {
         private_btQ = `${parseInt(`${progressf}`)}`;
      }
       let libfabricjniW = 1.0;
         private_btQ += `${private_btQ.length}`;
      let hometeamfieldQ = 8977187 <= private_btQ.length;
      do {
         private_btQ = `${parseInt(`${libfabricjniW}`)}`;
         if (hometeamfieldQ) {
            break;
         }
      } while (hometeamfieldQ && (4.78 == (progressf + 4.81) && 2 == (4 * private_btQ.length)));
      while (parseFloat(`${private_btQ.length}`) <= progressf) {
         private_btQ = `${parseInt(`${libfabricjniW}`)}`;
         break;
      }
      membershipY = `${basem.length >> (Math.min(2, private_btQ.length))}`;
      if (yellowX) {
         break;
      }
   } while (yellowX && (membershipY.endsWith(`${libmapbufferjnir}`)));
   if (4 == (membershipY.length & 4) || 1 == (4 & notificationgray2.length)) {
       let homeicon4 = String.fromCharCode(109,111,100,101,120,112,95,101,95,51,0);
       let statisticsn: Array<any> = [21, 758];
       let shootyesgoalM = 4;
       let emptyY = 4.0;
       let textlayoutmanagere = 3.0;
      let philippinesp = homeicon4 == String.fromCharCode(104,118,115,105,119,120,97,0);
      do {
         homeicon4 = `${parseInt(`${textlayoutmanagere}`)}`;
         if (philippinesp) {
            break;
         }
      } while (((textlayoutmanagere + 5.6) < 5.40 || (parseInt(`${textlayoutmanagere}`) + 5) < 2) && philippinesp);
         textlayoutmanagere -= parseFloat(`${statisticsn.length / (Math.max(homeicon4.length, 10))}`);
         statisticsn = [(homeicon4 == String.fromCharCode(119,0) ? statisticsn.length : homeicon4.length)];
         shootyesgoalM |= (String.fromCharCode(73,0) == homeicon4 ? homeicon4.length : parseInt(`${emptyY}`));
         textlayoutmanagere *= parseFloat(`${3}`);
          let mintegralA = String.fromCharCode(108,111,103,111,95,49,95,56,54,0);
          let albumo = String.fromCharCode(102,95,56,53,95,115,101,110,115,111,114,0);
          let clearF = String.fromCharCode(115,104,97,95,109,95,50,51,0);
         textlayoutmanagere /= Math.max(2, parseFloat(`${albumo.length + 1}`));
         mintegralA = "2";
         albumo += `${clearF.length ^ mintegralA.length}`;
         clearF = `${1 << (Math.min(2, clearF.length))}`;
      while (!statisticsn.includes(shootyesgoalM)) {
         statisticsn.push(shootyesgoalM);
         break;
      }
      for (let i = 0; i < 2; i++) {
         homeicon4 = `${1 ^ parseInt(`${emptyY}`)}`;
      }
         textlayoutmanagere *= parseFloat(`${parseInt(`${emptyY}`)}`);
      let mintegralc = emptyY <= 9176979.0;
      do {
          let common1 = 3;
          let backgroundr = 2.0;
          let iconsharefriendsX = 1.0;
          let downloadN = 2;
          let eventl = 2.0;
         emptyY += common1;
         common1 <<= Math.min(2, Math.abs(parseInt(`${backgroundr}`) ^ parseInt(`${iconsharefriendsX}`)));
         backgroundr -= parseInt(`${backgroundr}`) + 1;
         iconsharefriendsX *= parseFloat(`${parseInt(`${backgroundr}`) / (Math.max(parseInt(`${iconsharefriendsX}`), 10))}`);
         downloadN |= downloadN / (Math.max(parseInt(`${backgroundr}`), 2));
         eventl *= downloadN >> (Math.min(3, Math.abs(2)));
         if (mintegralc) {
            break;
         }
      } while (mintegralc && ((statisticsn.length / 3) <= 4 || (statisticsn.length * 3) <= 2));
      for (let v = 0; v < 3; v++) {
         textlayoutmanagere /= Math.max(5, parseFloat(`${3 ^ parseInt(`${textlayoutmanagere}`)}`));
      }
      let searchbars = 8322301 <= shootyesgoalM;
      do {
         shootyesgoalM -= 1 + shootyesgoalM;
         if (searchbars) {
            break;
         }
      } while (searchbars && (5 >= statisticsn.length));
       let gifgoalbg6 = String.fromCharCode(114,101,112,108,97,99,101,100,95,117,95,52,56,0);
      if (homeicon4.length <= emptyY) {
         emptyY -= 2;
      }
         homeicon4 = "3";
      notificationgray2.push(notificationgray2.length);
   }
   if (iconclose_.endsWith(`${notificationgray2.length}`)) {
      notificationgray2.push(distU.length % 3);
   }
   if (4.75 >= combinea) {
      streaming8 = libjsijniprofilerl.includes(`${combinea}`);
   }
      arrowq ^= notificationgray2.length;
      notificationgray2 = [libjsijniprofilerl.length];
       let libhermesa = String.fromCharCode(120,95,53,95,99,111,101,102,102,105,99,105,101,110,116,115,0);
          let closeg = 4.0;
         libhermesa = `${libhermesa.length}`;
         closeg *= parseFloat(`${parseInt(`${closeg}`) * 3}`);
         libhermesa = "3";
         libhermesa += `${(String.fromCharCode(115,0) == libhermesa ? libhermesa.length : libhermesa.length)}`;
      darks %= Math.max(5, 3);
   for (let i = 0; i < 2; i++) {
      streaming8 = libjsijniprofilerl.length <= 78;
   }
   while (libjsijniprofilerl.length < 5 && !streaming8) {
      libjsijniprofilerl += `${darks >> (Math.min(2, Math.abs(1)))}`;
      break;
   }
   if (iconclose_ != String.fromCharCode(122,0) && membershipY != String.fromCharCode(109,0)) {
      iconclose_ += "2";
   }
   let windl = 7610141.0 <= combinea;
   do {
      combinea *= parseFloat(`${libjsijniprofilerl.length}`);
      if (windl) {
         break;
      }
   } while ((!basem.includes(`${combinea}`)) && windl);
      libmapbufferjnir = notificationgray2.length < 21;
      arrowq %= Math.max(1, notificationgray2.length + libjsijniprofilerl.length);
   while (!membershipY.includes(iconclose_)) {
      iconclose_ += "2";
      break;
   }
      blackZ = [1];
   if ((combinea * parseFloat(`${iconnointernetM.length}`)) == 2.28 || 1.82 == (2.28 * combinea)) {
       let proxyB: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,114,97,110,99,101,95,101,95,51,52,0),true ], [String.fromCharCode(106,95,51,56,95,115,117,98,118,105,101,119,0),false ], [String.fromCharCode(107,95,53,55,95,111,112,115,0),true ]]);
       let promotionQ: Map<any, any> = new Map([[String.fromCharCode(104,109,109,116,95,118,95,55,54,0),String.fromCharCode(99,95,56,51,95,99,112,111,115,0)], [String.fromCharCode(115,95,56,51,95,97,100,111,98,101,0),String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,99,95,53,54,0)]]);
       let transferm = 3.0;
      while (transferm <= 5.10) {
          let baselinef = String.fromCharCode(109,115,110,119,99,95,102,95,50,51,0);
          let logoutJ = String.fromCharCode(100,95,49,49,0);
         transferm /= Math.max(2, (parseFloat(`${String.fromCharCode(57,0) == logoutJ ? baselinef.length : logoutJ.length}`)));
         break;
      }
      let baseline3 = 9320301.0 >= transferm;
      do {
         transferm -= parseFloat(`${3}`);
         if (baseline3) {
            break;
         }
      } while (baseline3 && (transferm > 1.66));
      if (transferm >= 1.22) {
         transferm += parseFloat(`${parseInt(`${transferm}`) ^ 1}`);
      }
      for (let p = 0; p < 3; p++) {
          let teamdetailsbgM = false;
         proxyB.set(`${teamdetailsbgM}`, (promotionQ.size + (teamdetailsbgM ? 2 : 2)));
      }
          let hejil = String.fromCharCode(109,95,52,49,95,111,108,100,108,105,115,116,0);
          let middlesoundk = String.fromCharCode(99,97,110,118,97,115,95,106,95,53,48,0);
         transferm /= Math.max(2, parseFloat(`${hejil.length}`));
         hejil = `${(middlesoundk == String.fromCharCode(84,0) ? middlesoundk.length : middlesoundk.length)}`;
         promotionQ.set(`${proxyB.size}`, 2 | proxyB.size);
      if (promotionQ.size == 5) {
          let cancelX = 0.0;
          let gmailv = String.fromCharCode(100,114,111,112,112,101,100,95,115,95,48,0);
          let videobufferloadingT = 0;
          let basketballdetailsbgh = 1.0;
         promotionQ.set(gmailv, 3 / (Math.max(8, proxyB.size)));
         cancelX -= parseInt(`${basketballdetailsbgh}`) << (Math.min(5, Math.abs(1)));
         gmailv = "3";
         videobufferloadingT |= videobufferloadingT / (Math.max(6, parseInt(`${basketballdetailsbgh}`)));
      }
          let fullscreenmaxy = true;
         proxyB = new Map([[`${transferm}`, 1 + parseInt(`${transferm}`)]]);
         fullscreenmaxy = !fullscreenmaxy || fullscreenmaxy;
      while (Array.from(promotionQ.values()).includes(transferm)) {
         transferm += parseFloat(`${proxyB.size}`);
         break;
      }
      iconnointernetM += `${(notificationgray2.length | (libmapbufferjnir ? 4 : 1))}`;
   }

        this.#navigator?.removeListener('state', this.#matchHistory);
    }

    static updateNavigator = (navigation: NavigationProp<any>) => {
        this.#navigator = navigation;
    }

    static updateMiddlewares = (middlewares: { [key: string]: [] | [(page: string) => string | undefined] }) => {
        this.#middlewares = middlewares;
    }

    static toName = (page: string, { params }: { params?: any } = {}) => {
        if (page in this.#middlewares) {
            const pageMiddleware = this.#middlewares[page];

            for (const middleware of pageMiddleware) {
                const result = middleware(page);

                if (result === undefined) return;
                else page = result;
            }
        }

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
        if (page in this.#middlewares) {
            const pageMiddleware = this.#middlewares[page];

            for (const middleware of pageMiddleware) {
                const result = middleware(page);

                if (result === undefined) return;
                else page = result;
            }
        }

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
       let gifgoalbg_ = String.fromCharCode(100,95,54,49,95,101,118,97,115,97,112,112,0);
    let analyticq: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,99,95,110,95,52,48,0),String.fromCharCode(97,114,105,98,95,97,95,52,55,0)], [String.fromCharCode(115,116,97,103,105,110,103,95,116,95,56,0),String.fromCharCode(111,95,57,48,95,101,110,99,111,100,101,109,118,0)]]);
    let predictionV = String.fromCharCode(98,97,115,101,112,111,105,110,116,95,114,95,53,57,0);
    let whistleorange2: Map<any, any> = new Map([[String.fromCharCode(119,100,101,99,95,117,95,52,48,0),String.fromCharCode(115,97,100,120,120,95,111,95,49,48,0)], [String.fromCharCode(121,95,54,54,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(118,101,114,116,105,99,101,115,95,99,95,54,52,0)], [String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,109,95,55,56,0),String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,115,95,49,53,0)]]);
    let jingdongl = 2.0;
    let combineG = true;
    let type__r_ = 5.0;
    let customB = String.fromCharCode(118,95,54,49,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
    let airbnbstarx: Array<any> = [219, 624, 708];
    let templateprocessor7: Map<any, any> = new Map([[String.fromCharCode(107,101,101,112,97,108,105,118,101,95,110,95,52,55,0),false ], [String.fromCharCode(116,95,54,53,95,115,101,101,107,116,97,98,108,101,0),true ], [String.fromCharCode(114,101,99,101,110,116,108,121,95,99,95,57,54,0),true ]]);
    let modulesb = String.fromCharCode(109,98,98,121,95,115,95,51,54,0);
   if (4 >= (predictionV.length >> (Math.min(3, Math.abs(templateprocessor7.size))))) {
      predictionV += `${1 << (Math.min(3, Math.abs(whistleorange2.size)))}`;
   }
      customB += `${gifgoalbg_.length}`;
       let whistlet = 3;
       let privilegeD: Array<any> = [111, 724, 151];
      if (2 >= (whistlet >> (Math.min(privilegeD.length, 2))) && (whistlet >> (Math.min(Math.abs(2), 2))) >= 3) {
         privilegeD.push(whistlet * privilegeD.length);
      }
      while ((privilegeD.length | whistlet) < 5) {
         whistlet <<= Math.min(5, Math.abs(whistlet));
         break;
      }
      while (3 >= (privilegeD.length >> (Math.min(1, Math.abs(whistlet)))) || (privilegeD.length >> (Math.min(Math.abs(3), 5))) >= 1) {
         privilegeD.push(2 << (Math.min(Math.abs(whistlet), 3)));
         break;
      }
         whistlet *= whistlet;
      let cornerkickf = whistlet <= 8557391;
      do {
         whistlet %= Math.max(3, whistlet);
         if (cornerkickf) {
            break;
         }
      } while (cornerkickf && (whistlet == privilegeD.length));
      let rncorex = whistlet <= 5768415;
      do {
          let renders = true;
          let predictionbuttonN = String.fromCharCode(115,116,111,114,101,100,95,57,95,53,48,0);
          let searchbarJ: Array<any> = [17, 451];
         whistlet -= whistlet;
         renders = searchbarJ.length <= 39 && String.fromCharCode(78,0) == predictionbuttonN;
         predictionbuttonN = "2";
         searchbarJ.push(1);
         if (rncorex) {
            break;
         }
      } while (((whistlet / 4) <= 5 && 3 <= (4 / (Math.max(6, whistlet)))) && rncorex);
      airbnbstarx.push(templateprocessor7.size * parseInt(`${jingdongl}`));
   for (let d = 0; d < 3; d++) {
      combineG = (predictionV.length | customB.length) > 50;
   }
      gifgoalbg_ = `${modulesb.length}`;
       let eventsplasht = false;
       let executorp: Array<any> = [655, 797];
       let sourcei: Map<any, any> = new Map([[String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,109,95,57,49,0),String.fromCharCode(105,122,101,114,111,95,107,95,53,51,0)], [String.fromCharCode(108,95,50,51,95,97,98,103,114,0),String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,116,95,49,49,0)], [String.fromCharCode(102,105,110,97,108,108,121,95,103,95,50,55,0),String.fromCharCode(115,116,100,111,117,116,95,51,95,52,54,0)]]);
      let renewp = 9481315 <= executorp.length;
      do {
         executorp.push(executorp.length);
         if (renewp) {
            break;
         }
      } while (renewp && (4 >= (sourcei.size ^ executorp.length) || (executorp.length ^ sourcei.size) >= 4));
         sourcei = new Map([[`${executorp.length}`, ((eventsplasht ? 4 : 1) | executorp.length)]]);
          let tickedr = String.fromCharCode(114,95,57,56,95,110,117,109,0);
          let type_01 = 2.0;
          let fullV = String.fromCharCode(97,116,99,104,95,98,95,57,52,0);
         sourcei.set(`${type_01}`, ((eventsplasht ? 3 : 1) * parseInt(`${type_01}`)));
         tickedr = `${fullV.length << (Math.min(Math.abs(2), 1))}`;
         fullV += `${tickedr.length * 2}`;
      let notificationL = eventsplasht ? !eventsplasht : eventsplasht;
      do {
         eventsplasht = !eventsplasht;
         if (notificationL) {
            break;
         }
      } while (notificationL && (executorp.length == 2));
      while (!eventsplasht || (sourcei.size >> (Math.min(Math.abs(1), 5))) >= 4) {
          let predictionlossH = 2.0;
         eventsplasht = (predictionlossH / (Math.max(sourcei.size, 2))) == 11.79;
         break;
      }
         executorp = [sourcei.size & executorp.length];
      let whatsapp8 = sourcei.size <= 6075890;
      do {
         sourcei = new Map([[`${sourcei.size}`, 2 - sourcei.size]]);
         if (whatsapp8) {
            break;
         }
      } while ((eventsplasht) && whatsapp8);
         eventsplasht = sourcei.size >= 29 && eventsplasht;
         eventsplasht = sourcei.size <= 15 && 15 <= executorp.length;
      modulesb += `${customB.length}`;
   if (2.64 >= (jingdongl * 1.95)) {
      jingdongl += gifgoalbg_.length;
   }
   while ((predictionV.length + whistleorange2.size) <= 2 || (predictionV.length + whistleorange2.size) <= 2) {
       let modelv: Array<any> = [429, 204, 38];
       let kick2: Array<any> = [973, 306];
       let pushe = String.fromCharCode(112,95,55,51,95,111,114,100,101,114,105,110,103,0);
          let playlistn = 2.0;
          let libaneF = 3.0;
         kick2 = [(String.fromCharCode(110,0) == pushe ? kick2.length : pushe.length)];
         playlistn += 1;
         libaneF -= parseInt(`${libaneF}`) << (Math.min(Math.abs(parseInt(`${playlistn}`)), 4));
         pushe += `${modelv.length}`;
         kick2 = [3];
         kick2.push(pushe.length);
         kick2.push(modelv.length);
      predictionV += "3";
      break;
   }
       let xadsdkb = String.fromCharCode(100,95,56,56,95,115,101,110,100,0);
       let qaagT = String.fromCharCode(108,111,99,111,95,105,95,51,48,0);
      for (let w = 0; w < 2; w++) {
         xadsdkb += `${xadsdkb.length | 3}`;
      }
         qaagT = `${qaagT.length % (Math.max(2, xadsdkb.length))}`;
          let dialogX = String.fromCharCode(100,105,115,116,97,110,99,101,115,95,114,95,55,57,0);
          let largebrightnessV = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,113,95,50,49,0);
         xadsdkb = `${qaagT.length}`;
         dialogX += `${largebrightnessV.length}`;
         largebrightnessV += `${dialogX.length & largebrightnessV.length}`;
         qaagT += `${1 + qaagT.length}`;
       let typesX = String.fromCharCode(119,105,100,101,102,101,108,101,109,95,101,95,52,54,0);
      if (qaagT.length > 2) {
         qaagT = `${qaagT.length * 1}`;
      }
      analyticq.set(`${jingdongl}`, parseInt(`${jingdongl}`) + whistleorange2.size);
   while ((type__r_ + 3.63) > 5.21 || 5 > (5 | predictionV.length)) {
       let showlessc = false;
          let reddownarrowp = String.fromCharCode(111,112,97,113,117,101,95,115,95,50,52,0);
          let static_ek: Array<any> = [562, 729];
         showlessc = static_ek.length == 73;
         reddownarrowp = `${reddownarrowp.length ^ reddownarrowp.length}`;
         static_ek = [(String.fromCharCode(72,0) == reddownarrowp ? reddownarrowp.length : reddownarrowp.length)];
         showlessc = !showlessc;
      let controls = showlessc ? !showlessc : showlessc;
      do {
         showlessc = (showlessc ? showlessc : showlessc);
         if (controls) {
            break;
         }
      } while ((!showlessc) && controls);
      type__r_ *= parseFloat(`${analyticq.size % 3}`);
      break;
   }
   while (combineG) {
      combineG = customB.endsWith(`${type__r_}`);
      break;
   }
   if (4 < gifgoalbg_.length && 4 < customB.length) {
      gifgoalbg_ += `${airbnbstarx.length % (Math.max(1, 3))}`;
   }
      jingdongl /= Math.max(3, (String.fromCharCode(49,0) == modulesb ? modulesb.length : parseInt(`${type__r_}`)));
   for (let k = 0; k < 3; k++) {
       let countryv = String.fromCharCode(97,108,105,97,115,101,115,95,53,95,50,48,0);
       let alert9 = 3.0;
       let sportv = String.fromCharCode(115,117,112,112,111,114,116,101,100,95,107,95,53,52,0);
         sportv += `${3 * sportv.length}`;
         alert9 *= parseFloat(`${parseInt(`${alert9}`)}`);
          let contextN = false;
          let libreactnativejniy: Array<any> = [215, 859, 316];
          let redcirclebgu: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,118,101,99,116,111,114,100,0),793], [String.fromCharCode(100,121,110,97,109,105,99,115,95,57,95,53,48,0),767], [String.fromCharCode(100,95,52,55,95,100,105,115,116,97,110,99,101,115,0),804]]);
         sportv += `${1 % (Math.max(9, sportv.length))}`;
         contextN = redcirclebgu.get(`${contextN}`) != null;
         libreactnativejniy.push(redcirclebgu.size);
       let orangeclock6 = 3.0;
       let goallogon = 4.0;
       let cornerD: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,108,105,98,99,111,100,101,99,0),613], [String.fromCharCode(113,115,118,101,110,99,95,50,95,57,50,0),198]]);
       let phoneY: Map<any, any> = new Map([[String.fromCharCode(100,95,57,52,95,105,115,119,114,105,116,101,97,98,108,101,0),true ], [String.fromCharCode(104,101,120,116,105,108,101,95,102,95,53,56,0),false ], [String.fromCharCode(97,118,103,120,95,121,95,51,50,0),false ]]);
      let reminderR = 7282978 >= cornerD.size;
      do {
         cornerD = new Map([[sportv, parseInt(`${goallogon}`)]]);
         if (reminderR) {
            break;
         }
      } while (((cornerD.size + orangeclock6) <= 3.67) && reminderR);
         sportv = `${countryv.length}`;
       let rocketd = 3;
      while (4.76 <= orangeclock6) {
          let gifgoalo = String.fromCharCode(104,95,51,53,95,98,108,117,114,114,101,100,0);
          let bellremindera = String.fromCharCode(98,97,114,114,105,101,114,95,57,95,57,54,0);
          let expiredn = String.fromCharCode(115,116,114,108,95,121,95,50,49,0);
          let libcxxcomponentsY = 1.0;
         alert9 /= Math.max(parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${libcxxcomponentsY}`))))}`), 4);
         gifgoalo += `${3 & expiredn.length}`;
         bellremindera = `${2 << (Math.min(5, bellremindera.length))}`;
         expiredn += "2";
         libcxxcomponentsY -= (expiredn == String.fromCharCode(120,0) ? expiredn.length : bellremindera.length);
         break;
      }
      gifgoalbg_ += `${gifgoalbg_.length >> (Math.min(4, Math.abs(whistleorange2.size)))}`;
   }
   if (!gifgoalbg_.includes(predictionV)) {
       let private__nR: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,95,115,108,111,119,0),371], [String.fromCharCode(108,95,57,50,95,100,97,114,119,105,110,0),998]]);
       let countdownf = false;
       let iconsaveimageQ: Array<any> = [977, 390, 589];
       let ewardedi = 3.0;
      let actionx = 7034373 <= iconsaveimageQ.length;
      do {
         iconsaveimageQ = [parseInt(`${ewardedi}`) / (Math.max(private__nR.size, 1))];
         if (actionx) {
            break;
         }
      } while ((iconsaveimageQ.includes(ewardedi)) && actionx);
      for (let w = 0; w < 1; w++) {
         private__nR = new Map([[`${private__nR.size}`, private__nR.size]]);
      }
          let homeiconk = 5.0;
          let selectionS: Map<any, any> = new Map([[String.fromCharCode(115,104,105,101,108,100,95,50,95,55,57,0),542], [String.fromCharCode(109,95,55,54,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0),440]]);
          let floatingt = 3.0;
         ewardedi += parseFloat(`${2}`);
         homeiconk /= Math.max(4, 3);
         selectionS.set(`${floatingt}`, parseInt(`${homeiconk}`) - parseInt(`${floatingt}`));
          let orangeuparrowW = 4.0;
          let q_playern = 0;
          let bridgeJ = String.fromCharCode(98,95,56,52,95,97,117,116,111,100,101,116,101,99,116,105,111,110,0);
         iconsaveimageQ = [1 - parseInt(`${ewardedi}`)];
         orangeuparrowW += parseFloat(`${q_playern}`);
         q_playern *= q_playern;
         bridgeJ = `${q_playern}`;
          let liveA = String.fromCharCode(113,117,97,114,116,122,95,108,95,54,49,0);
          let backwhited = String.fromCharCode(121,95,51,95,108,97,121,111,121,116,0);
         iconsaveimageQ = [2 ^ backwhited.length];
         liveA += "2";
         backwhited += `${liveA.length + 1}`;
         countdownf = 14.14 < ewardedi && 76 < iconsaveimageQ.length;
      let classes1 = ewardedi <= 6625407.0;
      do {
         ewardedi /= Math.max(4, parseFloat(`${private__nR.size}`));
         if (classes1) {
            break;
         }
      } while ((ewardedi < 4.66) && classes1);
      for (let c = 0; c < 2; c++) {
         iconsaveimageQ.push(1);
      }
      while (countdownf) {
         countdownf = null == private__nR.get(`${ewardedi}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
          let iconsetting2 = false;
          let giftP = String.fromCharCode(107,95,49,95,116,105,101,114,115,0);
          let libjsinspectord = String.fromCharCode(98,105,116,114,97,116,101,95,110,95,51,56,0);
          let basketballhometeam7 = String.fromCharCode(110,105,100,115,95,54,95,54,48,0);
          let libcrashsdkF = String.fromCharCode(119,104,101,114,101,95,111,95,51,53,0);
         countdownf = !iconsetting2;
         iconsetting2 = giftP == libjsinspectord;
         giftP = `${1 >> (Math.min(3, libcrashsdkF.length))}`;
         libjsinspectord += `${libjsinspectord.length}`;
         basketballhometeam7 = `${libcrashsdkF.length / 3}`;
      }
         countdownf = parseInt(`${ewardedi}`) < private__nR.size;
         ewardedi /= Math.max(3, (parseFloat(`${(countdownf ? 2 : 1) / (Math.max(iconsaveimageQ.length, 9))}`)));
      predictionV = `${(templateprocessor7.size % (Math.max(8, (countdownf ? 3 : 1))))}`;
   }
   if (!combineG) {
      combineG = analyticq.size == 52;
   }
       let hoverX: Array<any> = [String.fromCharCode(108,95,51,49,95,98,108,111,98,115,105,122,101,0), String.fromCharCode(100,95,50,53,95,101,110,100,105,97,110,110,101,115,115,0), String.fromCharCode(105,109,112,111,115,116,101,114,95,54,95,53,51,0)];
       let defaultplayerimgw: Array<any> = [18, 688, 82];
       let dataH = String.fromCharCode(109,97,116,101,114,105,97,108,95,120,95,54,51,0);
          let soundF = String.fromCharCode(102,101,116,99,104,101,115,95,109,95,55,49,0);
          let filledV = true;
         hoverX = [(dataH == String.fromCharCode(53,0) ? defaultplayerimgw.length : dataH.length)];
         soundF = "2";
         filledV = (21 >= ((!filledV ? soundF.length : 21) & soundF.length));
      for (let w = 0; w < 1; w++) {
         defaultplayerimgw.push(hoverX.length);
      }
      for (let n = 0; n < 2; n++) {
         dataH += `${dataH.length + 2}`;
      }
         hoverX = [defaultplayerimgw.length % 1];
      let libsgcoref = dataH == String.fromCharCode(109,112,103,55,121,50,122,109,0);
      do {
         dataH += "2";
         if (libsgcoref) {
            break;
         }
      } while (libsgcoref && (defaultplayerimgw.length <= 4));
          let eyeopenU: Array<any> = [675, 851];
         defaultplayerimgw.push(dataH.length & eyeopenU.length);
       let goalw = 3.0;
         defaultplayerimgw.push(dataH.length);
         goalw -= parseFloat(`${parseInt(`${goalw}`) + 2}`);
      airbnbstarx.push(dataH.length);
       let default_sI = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,105,95,52,54,0);
       let statsnomoredataw = true;
      while (statsnomoredataw && 5 > default_sI.length) {
          let photow = 2;
          let megaphone_: Array<any> = [936, 229];
          let backgroundO = 0;
          let paths = String.fromCharCode(108,97,121,101,114,115,95,108,95,55,51,0);
          let moreA = 3.0;
         default_sI += `${default_sI.length}`;
         photow += backgroundO / (Math.max(megaphone_.length, 3));
         megaphone_ = [photow / (Math.max(10, paths.length))];
         backgroundO &= 1 + backgroundO;
         paths += `${paths.length / 3}`;
         moreA *= parseInt(`${moreA}`);
         break;
      }
       let large5: Map<any, any> = new Map([[String.fromCharCode(97,101,118,97,108,95,113,95,56,49,0),219], [String.fromCharCode(102,95,53,51,95,114,101,106,101,99,116,105,111,110,115,0),471]]);
       let owngoal8: Map<any, any> = new Map([[String.fromCharCode(107,95,56,53,95,99,97,114,101,102,117,108,108,121,0),499], [String.fromCharCode(109,95,52,55,0),0], [String.fromCharCode(121,95,53,50,95,106,119,116,0),791]]);
      for (let s = 0; s < 1; s++) {
         default_sI = `${default_sI.length | large5.size}`;
      }
      let redirect6 = owngoal8.size <= 5101388;
      do {
         owngoal8 = new Map([[`${owngoal8.size}`, large5.size - owngoal8.size]]);
         if (redirect6) {
            break;
         }
      } while ((5 < owngoal8.size) && redirect6);
         large5 = new Map([[`${owngoal8.size}`, owngoal8.size]]);
      while (!statsnomoredataw) {
         statsnomoredataw = !statsnomoredataw;
         break;
      }
      templateprocessor7.set(gifgoalbg_, gifgoalbg_.length);
      combineG = customB.length < parseInt(`${type__r_}`);
       let iconchatsendy = 1;
       let complete1: Array<any> = [String.fromCharCode(110,95,51,54,95,110,101,111,110,116,101,115,116,0), String.fromCharCode(102,105,120,116,117,114,101,115,95,102,95,55,49,0)];
       let plashs: Array<any> = [679, 775];
         complete1 = [plashs.length * complete1.length];
         plashs = [3 ^ complete1.length];
         plashs = [complete1.length];
         complete1 = [plashs.length];
      let libruntimeexecutorO = 5798986 <= iconchatsendy;
      do {
         iconchatsendy <<= Math.min(Math.abs(2 | iconchatsendy), 2);
         if (libruntimeexecutorO) {
            break;
         }
      } while (libruntimeexecutorO && (!complete1.includes(iconchatsendy)));
      if ((complete1.length % (Math.max(1, iconchatsendy))) >= 4) {
          let textR = 0;
         complete1 = [1];
         textR &= textR;
      }
         plashs = [plashs.length];
          let sellw = String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,106,95,52,56,0);
          let libswscaleT = String.fromCharCode(111,95,49,53,95,111,112,101,114,97,116,111,114,115,0);
         complete1.push(iconchatsendy);
         sellw += `${libswscaleT.length}`;
         libswscaleT = `${(String.fromCharCode(84,0) == sellw ? libswscaleT.length : sellw.length)}`;
         iconchatsendy %= Math.max(plashs.length | 1, 3);
      analyticq = new Map([[`${templateprocessor7.size}`, 1]]);
   for (let p = 0; p < 2; p++) {
      analyticq.set(`${whistleorange2.size}`, whistleorange2.size);
   }
      gifgoalbg_ = `${predictionV.length ^ whistleorange2.size}`;
      modulesb = `${2 & parseInt(`${jingdongl}`)}`;
      analyticq.set(`${gifgoalbg_}`, whistleorange2.size);
       let iconwechatT = String.fromCharCode(100,111,109,105,110,97,110,116,95,104,95,49,51,0);
       let pathJ: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,116,97,98,95,113,95,53,56,0),453], [String.fromCharCode(118,115,99,97,108,101,95,120,95,53,54,0),497]]);
       let fillA: Array<any> = [73, 874, 670];
      if (pathJ.size == 1) {
         iconwechatT = `${fillA.length}`;
      }
      for (let h = 0; h < 1; h++) {
         fillA.push(1);
      }
         pathJ.set(`${fillA.length}`, fillA.length);
         fillA = [pathJ.size & 1];
         fillA.push(iconwechatT.length | 2);
         fillA = [1];
      for (let w = 0; w < 3; w++) {
         fillA = [fillA.length % (Math.max(1, 2))];
      }
      for (let u = 0; u < 2; u++) {
         fillA.push(pathJ.size * fillA.length);
      }
         fillA.push(pathJ.size ^ 3);
      airbnbstarx = [(String.fromCharCode(72,0) == iconwechatT ? (combineG ? 1 : 1) : iconwechatT.length)];

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

    static current = (): wawaLibjsijniprofilerCombined | undefined => {
        if (this.#historiesPages.length <= 0) return;
        return this.#historiesPages[this.#historiesPages.length - 1];
    }

    static previous = (): wawaLibjsijniprofilerCombined | undefined => {
        if (this.#historiesPages.length <= 1) return;
        return this.#historiesPages[this.#historiesPages.length - 2];
    }

    static history = (): wawaLibjsijniprofilerCombined[] => {
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
            this.#addEventByKey(route.key, GTurndown.GPreviewKsad, this.pendingEvent[pendingEventFound].thenEvent);
            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    /**
     * params => use for navigate pop action
     */
    static #handlePop = (
        page?: wawaLibjsijniprofilerCombined,
        route?: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        }
    ) => {
        if (!page) return;

        this.#runEventByKey(page.key, GTurndown.GPreviewKsad, page.backParams);
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

    static #addEventByKey = (key: string, type: GTurndown, callback: () => void) => {
        DeviceEventEmitter.addListener(eventKeyGenerator(key, type), callback);
    }

    static #runEventByKey = (key: string, type: GTurndown, params?: any) => {
        DeviceEventEmitter.emit(eventKeyGenerator(key, type), params);
        this.#removeListenerByKey(key);
    }

    static #removeListenerByKey = (key: string) => {
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, GTurndown.GPreviewKsad));
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, GTurndown.GConfig));
    }
}

export const CRouteInitializer = ({
    middlewares = {},
}: {
    middlewares?: { [key: string]: [] | [(page: string) => string | undefined] },
}) => {
    const navigator = useNavigation<NavigationProp<{ [key: string]: any }>>();

    useEffect(() => {
        wawaLayout.init(navigator, { middlewares });

        return wawaLayout.closeRouter;
    }, []);

    useEffect(() => {
        wawaLayout.updateNavigator(navigator);
        wawaLayout.updateMiddlewares(middlewares);
    }, [navigator, middlewares]);

    return <></>
}
