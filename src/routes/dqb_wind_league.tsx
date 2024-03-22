 

import { useEffect } from "react";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { DeviceEventEmitter } from "react-native";

enum TCircleConfirmation {
    TAutoLayout = 'then',
    TLogo = 'catch',
}

const eventKeyGenerator = (key: string, type: TCircleConfirmation) => {
    return key + (type === TCircleConfirmation.TLogo ? '-catch' : '-then')
}

export type XRFilterSend = {
    key: string,
    name: string,
    params?: any,
    backParams?: any,
}

export class IRouterComponent {
    static #middlewares: { [key: string]: [] | [(page: string) => string | undefined] } = {};
    static #navigator: NavigationProp<{ [key: string]: any }> | null = null;
    static #historiesPages: XRFilterSend[] = [];

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
       let rules7 = 2.0;
    let carouselM = String.fromCharCode(115,95,49,51,95,97,118,99,105,0);
    let taiwan6 = 1;
    let blackR = 4;
    let hongkongo: Array<any> = [834, 684];
    let optionsq = true;
    let interstitialh = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,0);
    let downloadj = 0.0;
    let humidityd: Array<any> = [884, 403];
    let countdownP = 3.0;
    let middle7 = String.fromCharCode(107,95,53,52,95,99,104,101,99,107,98,111,120,0);
    let linkX = 1.0;
    let customs = 1.0;
    let viewsu = String.fromCharCode(115,105,103,115,108,111,116,0);
   if (downloadj >= 2.78) {
       let memberV: Array<any> = [11, 722, 852];
       let buttonR = false;
       let gesturesH = String.fromCharCode(98,97,107,101,100,0);
       let selectF = String.fromCharCode(104,119,97,99,99,101,108,115,0);
       let types8 = String.fromCharCode(98,115,119,97,112,100,115,112,0);
          let moonZ = 1;
          let other0 = true;
         types8 = `${types8.length / 1}`;
         moonZ *= 3 - moonZ;
         other0 = !other0;
         types8 = "1";
          let statsH: Map<any, any> = new Map([[String.fromCharCode(101,120,105,102,0),String.fromCharCode(118,99,116,101,115,116,0)], [String.fromCharCode(115,101,109,97,110,116,105,99,115,0),String.fromCharCode(101,110,116,114,111,112,121,109,118,0)]]);
         buttonR = gesturesH.length > 39 && selectF == String.fromCharCode(113,0);
         statsH.set(`${statsH.size}`, statsH.size & 3);
      let basketballt = String.fromCharCode(51,117,104,0) == types8;
      do {
         types8 = `${((buttonR ? 4 : 1) ^ types8.length)}`;
         if (basketballt) {
            break;
         }
      } while (basketballt && (!types8.includes(gesturesH)));
      for (let t = 0; t < 2; t++) {
         gesturesH += `${(3 * (buttonR ? 5 : 1))}`;
      }
          let teamr = String.fromCharCode(109,105,108,108,101,114,0);
         memberV.push(selectF.length >> (Math.min(3, memberV.length)));
         teamr = `${teamr.length & teamr.length}`;
      while (selectF.length < 3) {
         buttonR = types8.length > 48;
         break;
      }
      while (5 <= selectF.length) {
         selectF = `${selectF.length}`;
         break;
      }
      taiwan6 <<= Math.min(5, Math.abs(((buttonR ? 1 : 1) | hongkongo.length)));
   }
      hongkongo = [(interstitialh == String.fromCharCode(97,0) ? interstitialh.length : humidityd.length)];
      interstitialh += `${interstitialh.length}`;
   if (4.36 <= (countdownP + downloadj) && (4.36 / (Math.max(3, countdownP))) <= 4.21) {
       let eactI = 1.0;
      if ((4 - eactI) > 4.35) {
          let t_centerG = 5;
          let feedback_ = 2.0;
          let zhubo8 = String.fromCharCode(100,105,115,112,111,115,101,100,0);
         eactI += parseFloat(`${parseInt(`${eactI}`) % 3}`);
         t_centerG >>= Math.min(1, Math.abs(3));
         feedback_ += t_centerG << (Math.min(1, Math.abs(3)));
         zhubo8 += "1";
      }
         eactI -= parseFloat(`${parseInt(`${eactI}`)}`);
         eactI *= parseFloat(`${parseInt(`${eactI}`) & parseInt(`${eactI}`)}`);
      countdownP /= Math.max(2, parseInt(`${countdownP}`) * humidityd.length);
   }
   let privacy5 = taiwan6 >= 9648787;
   do {
       let greenU = 0.0;
       let activek = 1.0;
       let middlewareW = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0);
       let assist1 = String.fromCharCode(99,116,114,0);
         activek *= middlewareW.length ^ parseInt(`${activek}`);
       let catagoryQ = String.fromCharCode(106,95,53,57,95,115,111,99,114,101,97,116,101,0);
       let changeq = String.fromCharCode(98,105,116,114,101,97,100,101,114,0);
      for (let a = 0; a < 3; a++) {
         catagoryQ += `${catagoryQ.length / 3}`;
      }
      for (let q = 0; q < 1; q++) {
         greenU *= parseFloat(`${2}`);
      }
         greenU /= Math.max(5, parseFloat(`${catagoryQ.length}`));
         middlewareW = `${assist1.length | changeq.length}`;
         catagoryQ = `${2 << (Math.min(1, Math.abs(parseInt(`${greenU}`))))}`;
          let twitterg: Map<any, any> = new Map([[String.fromCharCode(103,117,97,114,100,0),String.fromCharCode(100,95,49,56,95,105,110,102,111,114,109,97,116,105,111,110,0)], [String.fromCharCode(115,101,116,98,105,116,115,0),String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,0)]]);
          let whatsappH = 0.0;
          let settingsa = false;
         assist1 = `${changeq.length % 3}`;
         twitterg = new Map([[`${whatsappH}`, (parseInt(`${whatsappH}`) + (settingsa ? 1 : 5))]]);
         settingsa = settingsa && 35.81 < whatsappH;
         catagoryQ += `${1 ^ changeq.length}`;
      for (let i = 0; i < 1; i++) {
          let navigation9 = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,0);
          let circleG = String.fromCharCode(105,110,116,109,97,116,104,0);
          let filledK = String.fromCharCode(101,109,105,116,116,101,114,0);
          let clubE: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,105,103,0),466], [String.fromCharCode(114,100,102,116,0),679]]);
         assist1 += `${3 & changeq.length}`;
         navigation9 += `${circleG.length * 1}`;
         circleG += `${circleG.length}`;
         filledK += `${(circleG == String.fromCharCode(104,0) ? circleG.length : clubE.size)}`;
         clubE = new Map([[`${clubE.size}`, 3 << (Math.min(4, circleG.length))]]);
      }
         middlewareW += `${1 << (Math.min(4, changeq.length))}`;
         assist1 = `${parseInt(`${activek}`) | parseInt(`${greenU}`)}`;
      taiwan6 <<= Math.min(Math.abs(2 / (Math.max(7, interstitialh.length))), 3);
      if (privacy5) {
         break;
      }
   } while (privacy5 && (!interstitialh.endsWith(`${taiwan6}`)));
   while ((taiwan6 ^ 2) == 4 || (2.76 - downloadj) == 2.66) {
      taiwan6 += (parseInt(`${rules7}`) % (Math.max(4, (optionsq ? 3 : 2))));
      break;
   }
      carouselM += `${humidityd.length}`;
      countdownP *= 1;
   for (let g = 0; g < 3; g++) {
      rules7 *= parseInt(`${downloadj}`);
   }
      countdownP /= Math.max(2 << (Math.min(Math.abs(parseInt(`${countdownP}`)), 4)), 2);
      optionsq = taiwan6 > interstitialh.length;
      carouselM += `${parseInt(`${rules7}`)}`;
       let interstitialA = 1.0;
       let bufferh = String.fromCharCode(104,97,115,104,101,100,0);
      let logoC = bufferh.length >= 9545358;
      do {
         bufferh += `${parseInt(`${interstitialA}`) % (Math.max(7, bufferh.length))}`;
         if (logoC) {
            break;
         }
      } while ((interstitialA <= 2.39) && logoC);
      if ((interstitialA / 4.9) == 4.42) {
          let bufferD = 2;
          let gifth = 5;
          let xvodb = String.fromCharCode(117,114,118,101,0);
          let splash6: Array<any> = [442, 761];
          let ajaxG = 2.0;
         interstitialA -= parseFloat(`${bufferD}`);
         bufferD >>= Math.min(3, Math.abs((xvodb == String.fromCharCode(48,0) ? xvodb.length : gifth)));
         gifth ^= parseInt(`${ajaxG}`);
         splash6.push(2 | xvodb.length);
         ajaxG /= Math.max(3, gifth);
      }
      let redirectr = String.fromCharCode(118,48,122,0) == bufferh;
      do {
         bufferh = "1";
         if (redirectr) {
            break;
         }
      } while (((interstitialA / (Math.max(10, parseFloat(`${bufferh.length}`)))) > 2.49) && redirectr);
      if ((interstitialA * parseFloat(`${bufferh.length}`)) < 1.26) {
          let inviteD = String.fromCharCode(110,101,115,116,101,100,0);
         interstitialA += parseFloat(`${2}`);
         inviteD = `${inviteD.length}`;
      }
      while (bufferh.startsWith(`${interstitialA}`)) {
         bufferh = `${(String.fromCharCode(66,0) == bufferh ? bufferh.length : parseInt(`${interstitialA}`))}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         bufferh += `${parseInt(`${interstitialA}`)}`;
      }
      rules7 *= carouselM.length + interstitialh.length;
   for (let g = 0; g < 2; g++) {
       let castinga = false;
       let otherd: Array<any> = [String.fromCharCode(105,110,115,101,114,116,101,100,0), String.fromCharCode(119,95,55,52,95,114,101,115,101,116,117,112,0)];
       let filled3 = true;
      while (2 < (otherd.length | 4)) {
         otherd = [((castinga ? 4 : 4) - otherd.length)];
         break;
      }
      let filledz = 5998831 <= otherd.length;
      do {
         otherd.push(otherd.length);
         if (filledz) {
            break;
         }
      } while ((otherd.length < 1) && filledz);
         castinga = !filled3;
       let string3 = String.fromCharCode(101,116,104,111,100,0);
      for (let y = 0; y < 3; y++) {
         string3 = "2";
      }
         filled3 = (!castinga ? filled3 : !castinga);
         string3 = `${otherd.length}`;
      for (let e = 0; e < 1; e++) {
          let stationg = String.fromCharCode(109,111,100,112,108,117,103,0);
         string3 += `${2 << (Math.min(2, string3.length))}`;
         stationg += `${(String.fromCharCode(88,0) == stationg ? stationg.length : stationg.length)}`;
      }
      for (let i = 0; i < 1; i++) {
          let matchesu = String.fromCharCode(111,115,116,114,101,97,109,0);
          let sina2 = String.fromCharCode(115,105,112,114,107,100,97,116,97,0);
          let layout7: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,0),767], [String.fromCharCode(109,105,110,115,0),865], [String.fromCharCode(99,108,109,117,108,0),739]]);
          let backgroundr = String.fromCharCode(114,101,99,101,105,118,101,114,0);
          let fastforwarde = 4;
         otherd.push((String.fromCharCode(79,0) == string3 ? layout7.size : string3.length));
         matchesu += `${backgroundr.length & 2}`;
         sina2 = `${sina2.length}`;
         layout7 = new Map([[`${fastforwarde}`, backgroundr.length % 3]]);
         fastforwarde |= 2 | backgroundr.length;
      }
      taiwan6 |= (blackR | (filled3 ? 2 : 1));
   }
      optionsq = middle7 == carouselM;
       let becomeF: Array<any> = [989, 709];
       let guideH = 3.0;
       let humidityp = 2.0;
      let bodanH = guideH <= 8678659.0;
      do {
         guideH /= Math.max(4, parseFloat(`${parseInt(`${humidityp}`)}`));
         if (bodanH) {
            break;
         }
      } while (bodanH && (becomeF.length < 5));
         becomeF.push(becomeF.length);
      hongkongo = [((optionsq ? 3 : 5) - parseInt(`${downloadj}`))];
   if (5.67 < (rules7 * customs)) {
      customs -= parseFloat(`${1 % (Math.max(8, parseInt(`${downloadj}`)))}`);
   }
       let humidityo = String.fromCharCode(99,104,101,99,107,0);
      while (humidityo.length < humidityo.length) {
          let frame_dus = String.fromCharCode(114,108,111,116,116,105,101,0);
         humidityo += `${1 >> (Math.min(3, humidityo.length))}`;
         frame_dus = `${(String.fromCharCode(71,0) == frame_dus ? frame_dus.length : frame_dus.length)}`;
         break;
      }
      while (humidityo.length >= 2) {
         humidityo = `${humidityo.length}`;
         break;
      }
       let text9: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,0),48], [String.fromCharCode(112,97,103,101,110,111,0),203], [String.fromCharCode(115,117,109,115,113,0),871]]);
      rules7 -= 1 ^ hongkongo.length;
      customs += parseFloat(`${blackR / (Math.max(1, parseInt(`${linkX}`)))}`);
   let sideI = linkX >= 5988730.0;
   do {
      linkX /= Math.max(humidityd.length, 5);
      if (sideI) {
         break;
      }
   } while (sideI && ((linkX * customs) < 2.46 || (2.46 * linkX) < 1.78));
       let balla = 5;
       let goalH = 2.0;
         balla ^= 3 | balla;
       let becomeG = 2.0;
         becomeG -= 2 % (Math.max(4, parseInt(`${becomeG}`)));
      while ((goalH / (Math.max(2.27, 8))) == 5.79) {
         balla /= Math.max(2, 2);
         break;
      }
       let userM = String.fromCharCode(105,110,116,101,103,114,97,108,0);
          let kcopy__3: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,115,116,114,101,97,109,0),String.fromCharCode(115,116,114,109,97,116,99,104,0)], [String.fromCharCode(118,111,105,100,0),String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0)], [String.fromCharCode(103,101,110,101,114,105,99,115,0),String.fromCharCode(106,109,101,109,115,121,115,0)]]);
          let turno = String.fromCharCode(119,114,105,116,101,99,111,112,121,0);
         balla ^= kcopy__3.size;
         kcopy__3.set(turno, 3 ^ turno.length);
      middle7 += `${blackR % (Math.max(1, 3))}`;
   for (let v = 0; v < 1; v++) {
      taiwan6 >>= Math.min(4, humidityd.length);
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
       let vietnamU = 3;
    let indexH: Map<any, any> = new Map([[String.fromCharCode(115,101,97,108,98,111,120,0),false ], [String.fromCharCode(99,111,110,115,101,110,116,95,97,95,53,0),false ], [String.fromCharCode(115,104,97,100,111,119,115,0),false ]]);
    let orangeR = String.fromCharCode(99,108,117,115,116,101,114,115,0);
    let malaysiaw = String.fromCharCode(98,97,99,107,114,111,117,110,100,0);
    let fieldB = 5.0;
    let weiboG = String.fromCharCode(116,95,57,51,95,103,101,111,103,114,97,112,104,105,99,97,108,0);
    let descS: Array<any> = [509, 43];
    let j_imagee = String.fromCharCode(114,101,115,105,122,97,98,108,101,0);
    let borderlessV = String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,0);
    let tooltipsc = String.fromCharCode(119,101,98,112,97,103,101,115,0);
    let const_03 = 0;
    let analyticp = true;
    let stores = 1.0;
    let submitP = 0.0;
    let style9 = String.fromCharCode(99,105,114,99,117,108,97,114,0);
    let searcho = 0.0;
    let showc = 4;
    let relatedW = String.fromCharCode(115,117,112,101,114,0);
    let confirmationG = 4.0;
    let hooks5 = 4;
    let rulesQ: Map<any, any> = new Map([[String.fromCharCode(117,115,108,101,101,112,0),695], [String.fromCharCode(114,101,115,112,111,110,100,101,114,0),0], [String.fromCharCode(114,101,99,101,105,112,116,115,0),665]]);
       let castN: Array<any> = [487, 18, 647];
       let hookA = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,0);
       let hooksF = false;
      if (3 > hookA.length) {
         hookA += `${1 & hookA.length}`;
      }
         castN.push(((hooksF ? 1 : 1) & 3));
         hookA += `${(3 << (Math.min(3, Math.abs((hooksF ? 2 : 4)))))}`;
         hookA = `${2 & hookA.length}`;
      if (castN.length < 5) {
         castN = [hookA.length | 3];
      }
         hooksF = (castN.length % (Math.max(hookA.length, 8))) <= 10;
       let sansE: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,99,111,109,112,0),798], [String.fromCharCode(99,116,120,0),756], [String.fromCharCode(109,97,112,112,101,100,0),542]]);
       let team5 = 3;
       let xvodE = 3;
          let indexN = true;
          let gemfilee = 4.0;
         hooksF = (sansE.size + parseInt(`${gemfilee}`)) > 30;
         indexN = indexN && !indexN;
         gemfilee *= parseFloat(`${2}`);
      indexH.set(malaysiaw, 3);
   let searche = 5244361 <= tooltipsc.length;
   do {
       let statsu = String.fromCharCode(115,112,114,105,116,101,115,0);
         statsu += `${statsu.length}`;
         statsu += `${statsu.length}`;
          let unread6 = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,0);
          let whistleA = false;
          let j_positionr: Map<any, any> = new Map([[String.fromCharCode(97,115,112,101,99,116,115,0),true ], [String.fromCharCode(111,99,115,112,0),false ], [String.fromCharCode(108,105,98,121,117,118,0),false ]]);
         statsu += "2";
         unread6 = `${j_positionr.size * unread6.length}`;
         whistleA = j_positionr.size == 89 && String.fromCharCode(54,0) == unread6;
      tooltipsc = `${(String.fromCharCode(52,0) == weiboG ? weiboG.length : descS.length)}`;
      if (searche) {
         break;
      }
   } while (searche && (tooltipsc.includes(`${indexH.size}`)));
       let tempE: Map<any, any> = new Map([[String.fromCharCode(110,115,115,101,0),false ], [String.fromCharCode(116,104,114,111,116,116,108,101,0),false ], [String.fromCharCode(113,109,98,108,0),true ]]);
       let resulty = 3;
       let lists = 0;
      if (3 <= (resulty * 4)) {
         lists <<= Math.min(Math.abs(3 | resulty), 1);
      }
         tempE.set(`${resulty}`, 3 << (Math.min(3, Math.abs(resulty))));
      fieldB += parseFloat(`${j_imagee.length}`);
       let bellF = 2.0;
      while ((5.67 - bellF) <= 2.53 && 1.53 <= (5.67 - bellF)) {
         bellF /= Math.max(parseFloat(`${parseInt(`${bellF}`) & parseInt(`${bellF}`)}`), 3);
         break;
      }
      if (4.81 >= (bellF / (Math.max(bellF, 2))) || 2.25 >= (bellF / 4.81)) {
         bellF /= Math.max(parseFloat(`${parseInt(`${bellF}`)}`), 5);
      }
      while (4.32 > (bellF * bellF) || (4.32 * bellF) > 1.75) {
         bellF -= parseFloat(`${3}`);
         break;
      }
      vietnamU -= parseInt(`${fieldB}`);
   while (j_imagee.length >= 3) {
       let circleg: Map<any, any> = new Map([[String.fromCharCode(109,105,110,102,0),962], [String.fromCharCode(98,111,117,110,99,105,110,101,115,115,0),88]]);
       let componentq = 2;
       let link9: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,101,114,115,0),143], [String.fromCharCode(110,118,100,101,99,0),539]]);
      while (4 <= (5 * circleg.size) && (componentq * 5) <= 3) {
         circleg.set(`${circleg.size}`, link9.size);
         break;
      }
      for (let g = 0; g < 1; g++) {
          let sell4 = String.fromCharCode(97,99,99,101,115,115,111,114,115,0);
          let moduleO: Array<any> = [626, 816];
          let baidun = String.fromCharCode(101,120,99,108,0);
          let tempr: Array<any> = [244, 311, 141];
          let modityQ = String.fromCharCode(115,108,97,118,101,115,0);
         link9.set(`${modityQ}`, modityQ.length >> (Math.min(2, Math.abs(circleg.size))));
         sell4 += "3";
         moduleO = [1 + sell4.length];
         baidun = `${tempr.length - moduleO.length}`;
         tempr = [baidun.length / (Math.max(2, 5))];
      }
         componentq *= 2 << (Math.min(5, Math.abs(componentq)));
      for (let l = 0; l < 1; l++) {
          let malaysiak = 4.0;
          let currentr = String.fromCharCode(108,111,99,108,0);
          let vietnamq = String.fromCharCode(111,103,103,108,101,0);
          let guide5 = String.fromCharCode(99,111,118,101,114,97,103,101,0);
         circleg.set(currentr, currentr.length);
         malaysiak /= Math.max((vietnamq == String.fromCharCode(49,0) ? vietnamq.length : parseInt(`${malaysiak}`)), 3);
         guide5 += `${3 - parseInt(`${malaysiak}`)}`;
      }
         componentq <<= Math.min(4, Math.abs(link9.size));
          let inactiveR = 5;
          let launch7 = String.fromCharCode(98,97,99,107,101,100,0);
         link9.set(launch7, componentq + launch7.length);
         inactiveR >>= Math.min(4, Math.abs(inactiveR - 3));
         componentq <<= Math.min(Math.abs(circleg.size), 4);
         link9.set(`${link9.size}`, link9.size / 2);
      let popupM = 9429218 <= circleg.size;
      do {
         circleg.set(`${componentq}`, link9.size);
         if (popupM) {
            break;
         }
      } while (popupM && ((componentq % 5) < 2 || 1 < (componentq % 5)));
      j_imagee += `${orangeR.length & 3}`;
      break;
   }
   if (3 <= (3 << (Math.min(3, j_imagee.length)))) {
      indexH = new Map([[`${analyticp}`, orangeR.length]]);
   }
   let launchQ = 5158855.0 <= submitP;
   do {
       let modeU = String.fromCharCode(99,111,110,115,111,110,97,110,116,0);
       let gpayh = String.fromCharCode(98,111,111,107,109,97,114,107,0);
       let dicer: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,100,0),false ], [String.fromCharCode(115,101,97,114,99,104,101,100,0),true ], [String.fromCharCode(105,110,99,108,117,100,101,100,0),false ]]);
       let start: Map<any, any> = new Map([[String.fromCharCode(115,114,116,99,112,0),744], [String.fromCharCode(102,111,114,109,115,104,101,101,116,0),258]]);
       let hookz: Array<any> = [694, 727];
      for (let r = 0; r < 1; r++) {
          let ajax4: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,116,116,101,114,0),564], [String.fromCharCode(104,101,97,100,112,104,111,110,101,115,0),661]]);
          let questj = String.fromCharCode(117,95,49,50,95,100,112,110,97,109,101,0);
          let taiwane: Array<any> = [356, 97, 186];
          let i_view_ = String.fromCharCode(112,114,102,116,0);
         dicer = new Map([[`${taiwane.length}`, questj.length & 2]]);
         ajax4 = new Map([[`${ajax4.size}`, 3 >> (Math.min(3, Math.abs(ajax4.size)))]]);
         questj += `${i_view_.length}`;
         taiwane = [(i_view_ == String.fromCharCode(113,0) ? ajax4.size : i_view_.length)];
      }
       let telegramx = 4;
       let plash1 = 5;
         modeU += `${1 | hookz.length}`;
      while ((telegramx >> (Math.min(Math.abs(1), 2))) <= 2 && (start.size >> (Math.min(2, Math.abs(telegramx)))) <= 1) {
          let moduleq = 4;
         telegramx -= gpayh.length;
         moduleq %= Math.max(moduleq >> (Math.min(1, Math.abs(moduleq))), 5);
         break;
      }
       let appsW = 4.0;
       let bodanK = 0.0;
      while (bodanK == plash1) {
          let footballj = 2.0;
         bodanK += parseInt(`${appsW}`) & 3;
         footballj *= parseInt(`${footballj}`) * 1;
         break;
      }
         appsW /= Math.max(start.size, 4);
          let iconb = String.fromCharCode(98,114,111,107,101,110,0);
          let football6: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,0),14], [String.fromCharCode(99,101,108,102,0),450], [String.fromCharCode(103,97,109,117,116,115,0),952]]);
          let v_lockK = true;
         telegramx <<= Math.min(Math.abs(parseInt(`${appsW}`)), 4);
         iconb += `${2 - iconb.length}`;
         football6 = new Map([[`${football6.size}`, (iconb == String.fromCharCode(102,0) ? football6.size : iconb.length)]]);
         v_lockK = iconb == String.fromCharCode(52,0);
          let constantss: Array<any> = [738, 518];
          let kickG = 2;
         gpayh += `${plash1 % (Math.max(1, start.size))}`;
         constantss.push(constantss.length | kickG);
         kickG >>= Math.min(2, Math.abs(2 - constantss.length));
      for (let o = 0; o < 1; o++) {
         gpayh += `${parseInt(`${bodanK}`)}`;
      }
      while (2 > (hookz.length << (Math.min(gpayh.length, 2))) || 2 > (hookz.length << (Math.min(gpayh.length, 1)))) {
          let areaT = String.fromCharCode(115,117,115,112,101,110,100,101,100,0);
          let entryc = String.fromCharCode(121,113,117,97,110,116,0);
          let arrowj = 0.0;
          let sort7 = 0.0;
          let reminderc = 2.0;
         hookz = [gpayh.length];
         areaT += `${parseInt(`${arrowj}`) << (Math.min(1, Math.abs(1)))}`;
         entryc += `${parseInt(`${sort7}`) / (Math.max(parseInt(`${arrowj}`), 5))}`;
         sort7 += parseInt(`${reminderc}`);
         break;
      }
          let data_: Array<any> = [String.fromCharCode(106,112,101,103,105,110,116,0), String.fromCharCode(109,112,101,103,97,117,100,105,111,0), String.fromCharCode(100,120,116,111,114,121,0)];
          let renewT = String.fromCharCode(99,111,108,108,97,103,101,0);
         bodanK /= Math.max(2, telegramx % (Math.max(2, 3)));
         data_ = [2 + data_.length];
         renewT += `${renewT.length}`;
      while (Array.from(start.keys()).includes(`${hookz.length}`)) {
         hookz = [start.size ^ 3];
         break;
      }
      if (start.get(`${hookz.length}`) != null) {
         hookz.push(dicer.size | 1);
      }
      while (5 < (parseInt(`${appsW}`) / (Math.max(dicer.size, 6)))) {
         dicer.set(`${bodanK}`, parseInt(`${bodanK}`));
         break;
      }
      submitP *= (String.fromCharCode(122,0) == gpayh ? (analyticp ? 2 : 4) : gpayh.length);
      if (launchQ) {
         break;
      }
   } while (launchQ && (analyticp || (5.18 / (Math.max(1, submitP))) < 2.80));
   if (!analyticp) {
       let update_mq = String.fromCharCode(108,105,98,114,97,114,121,0);
       let register_28 = String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,0);
       let headerD = false;
      if (update_mq != String.fromCharCode(113,0) && register_28 == String.fromCharCode(108,0)) {
          let closeL = 0.0;
         update_mq += `${update_mq.length}`;
         closeL -= parseFloat(`${3}`);
      }
      for (let w = 0; w < 3; w++) {
         update_mq = `${(register_28 == String.fromCharCode(118,0) ? (headerD ? 2 : 2) : register_28.length)}`;
      }
         register_28 += `${(update_mq == String.fromCharCode(78,0) ? (headerD ? 5 : 5) : update_mq.length)}`;
          let flyern = 4;
         register_28 += `${2 >> (Math.min(5, register_28.length))}`;
         flyern >>= Math.min(Math.abs(flyern + flyern), 5);
      for (let q = 0; q < 2; q++) {
         register_28 += `${((headerD ? 4 : 5) / (Math.max(3, 2)))}`;
      }
      for (let h = 0; h < 2; h++) {
         register_28 = `${register_28.length % 2}`;
      }
          let a_playerT = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,0);
          let refreshB = 2;
         headerD = register_28 == update_mq;
         a_playerT = `${a_playerT.length - refreshB}`;
         refreshB += (a_playerT == String.fromCharCode(78,0) ? refreshB : a_playerT.length);
      for (let g = 0; g < 1; g++) {
         update_mq = `${register_28.length}`;
      }
       let full1: Array<any> = [634, 594, 460];
      analyticp = String.fromCharCode(119,0) == malaysiaw && descS.length > 18;
   }
      orangeR = "3";
      analyticp = 32 < style9.length;
       let sellQ = 3.0;
       let goalM: Array<any> = [662, 709, 299];
          let chartA = 4;
          let fillZ = String.fromCharCode(99,111,110,97,110,102,105,108,101,0);
         goalM.push(chartA << (Math.min(goalM.length, 4)));
         chartA &= 3;
         fillZ = `${3 << (Math.min(1, fillZ.length))}`;
         sellQ /= Math.max(parseInt(`${sellQ}`), 4);
         goalM.push(parseInt(`${sellQ}`));
         sellQ /= Math.max(3, 3 ^ goalM.length);
          let canvasM = String.fromCharCode(114,101,115,104,117,102,102,108,101,0);
          let reminderl = 1.0;
          let moono = String.fromCharCode(110,111,116,105,102,105,101,115,0);
         goalM.push(goalM.length);
         canvasM = `${2 + moono.length}`;
         reminderl -= parseFloat(`${canvasM.length}`);
         moono += "3";
      while ((2 + goalM.length) >= 2) {
         goalM = [parseInt(`${sellQ}`)];
         break;
      }
      vietnamU += 1;
   for (let a = 0; a < 2; a++) {
       let event_ = String.fromCharCode(110,101,111,110,116,101,115,116,0);
       let penaltyj = String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,0);
       let combinedA = String.fromCharCode(102,114,97,109,101,115,105,122,101,0);
       let homen = String.fromCharCode(98,102,114,97,99,116,105,111,110,0);
          let g_positionf = String.fromCharCode(97,117,116,104,105,110,102,111,0);
          let acceptedR = 4.0;
         event_ += `${combinedA.length >> (Math.min(g_positionf.length, 2))}`;
         g_positionf = `${parseInt(`${acceptedR}`) % 3}`;
         acceptedR -= parseInt(`${acceptedR}`) ^ 3;
       let soundL = String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,0);
      let incidentk = combinedA == String.fromCharCode(100,118,54,55,52,50,0);
      do {
         combinedA = `${soundL.length + penaltyj.length}`;
         if (incidentk) {
            break;
         }
      } while (incidentk && (combinedA.length <= 2));
         homen += `${penaltyj.length + combinedA.length}`;
      for (let d = 0; d < 1; d++) {
         penaltyj = `${penaltyj.length | combinedA.length}`;
      }
          let bannerE: Array<any> = [String.fromCharCode(116,101,108,101,103,114,97,0), String.fromCharCode(108,111,116,116,105,101,118,105,101,119,0), String.fromCharCode(99,97,99,104,101,100,107,101,121,115,0)];
         penaltyj = `${combinedA.length + 3}`;
         bannerE = [bannerE.length];
          let eventi = 0;
          let subsb = String.fromCharCode(111,117,116,111,117,116,0);
          let matchesc = 5.0;
         event_ = `${combinedA.length}`;
         eventi %= Math.max(subsb.length, 1);
         subsb += `${parseInt(`${matchesc}`) % 3}`;
         matchesc -= 1 | subsb.length;
      let clockN = homen == String.fromCharCode(52,109,121,106,120,103,110,99,117,0);
      do {
         homen += `${homen.length}`;
         if (clockN) {
            break;
         }
      } while (clockN && (homen.endsWith(`${penaltyj.length}`)));
      let stylel = 5812384 <= event_.length;
      do {
         event_ += `${event_.length}`;
         if (stylel) {
            break;
         }
      } while (stylel && (event_.startsWith(`${combinedA.length}`)));
         homen = `${2 | event_.length}`;
          let downloadedd = 5.0;
          let link0 = 4.0;
          let robotob = String.fromCharCode(105,115,109,108,0);
         event_ += `${soundL.length % (Math.max(event_.length, 4))}`;
         downloadedd *= parseFloat(`${robotob.length << (Math.min(5, Math.abs(parseInt(`${downloadedd}`))))}`);
         link0 += (parseFloat(`${robotob == String.fromCharCode(55,0) ? parseInt(`${link0}`) : robotob.length}`));
      if (soundL.endsWith(combinedA)) {
         combinedA = `${1 & combinedA.length}`;
      }
      descS.push(event_.length);
   }
      malaysiaw = `${style9.length}`;
      analyticp = orangeR.length == 54;
   if (!malaysiaw.startsWith(`${searcho}`)) {
      malaysiaw = `${indexH.size << (Math.min(Math.abs(3), 5))}`;
   }
       let sansU = String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,103,95,53,49,0);
          let textU: Map<any, any> = new Map([[String.fromCharCode(106,111,117,114,110,97,108,0),100], [String.fromCharCode(102,97,105,108,115,0),950], [String.fromCharCode(119,122,97,101,115,0),729]]);
          let temperatureF = false;
         sansU = `${2 - textU.size}`;
         sansU += `${sansU.length}`;
      for (let f = 0; f < 3; f++) {
          let connection3: Map<any, any> = new Map([[String.fromCharCode(118,110,101,103,113,0),111], [String.fromCharCode(103,117,97,114,97,110,116,101,101,0),165], [String.fromCharCode(116,119,111,115,116,97,103,101,0),113]]);
          let carouselJ = String.fromCharCode(99,121,99,108,101,100,0);
          let indexi = String.fromCharCode(116,111,107,101,110,105,122,101,100,0);
         sansU = `${sansU.length ^ connection3.size}`;
         connection3.set(indexi, 3 & indexi.length);
         carouselJ += `${(String.fromCharCode(68,0) == indexi ? carouselJ.length : indexi.length)}`;
      }
      orangeR = `${parseInt(`${searcho}`)}`;
   let launchg = 9533316 >= const_03;
   do {
      const_03 -= tooltipsc.length;
      if (launchg) {
         break;
      }
   } while (launchg && ((1 >> (Math.min(1, Math.abs(const_03)))) < 5 || (1 >> (Math.min(5, j_imagee.length))) < 2));
   if (borderlessV == malaysiaw) {
      malaysiaw = `${parseInt(`${searcho}`)}`;
   }
   for (let w = 0; w < 1; w++) {
      searcho += (borderlessV == String.fromCharCode(103,0) ? parseInt(`${submitP}`) : borderlessV.length);
   }
   let sourceI = indexH.size <= 7580801;
   do {
      indexH = new Map([[`${fieldB}`, weiboG.length]]);
      if (sourceI) {
         break;
      }
   } while ((1.20 <= fieldB) && sourceI);
   let untickT = 7378743.0 >= searcho;
   do {
      searcho /= Math.max(relatedW.length | 3, 2);
      if (untickT) {
         break;
      }
   } while ((5.98 == (searcho - 5.39) || (searcho - 5.39) == 2.29) && untickT);
   for (let z = 0; z < 3; z++) {
       let layoutm = true;
       let twittert = String.fromCharCode(109,117,108,116,0);
       let listR = false;
       let modityv = 4;
      if (2 <= twittert.length) {
         layoutm = (86 > ((!listR ? 86 : twittert.length) | twittert.length));
      }
         listR = !listR || modityv > 37;
      for (let b = 0; b < 3; b++) {
          let backgrounda = String.fromCharCode(111,112,116,105,111,110,115,0);
          let downloadeddg: Array<any> = [900, 197];
         twittert = `${downloadeddg.length}`;
         backgrounda += `${backgrounda.length}`;
         downloadeddg.push(backgrounda.length);
      }
      while (listR) {
         listR = twittert.length >= 56;
         break;
      }
         listR = (100 < ((!listR ? 100 : twittert.length) + twittert.length));
       let specJ = String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,0);
      let foundl = layoutm ? !layoutm : layoutm;
      do {
          let placementr = 5.0;
         layoutm = 61 < modityv;
         placementr += parseFloat(`${parseInt(`${placementr}`)}`);
         if (foundl) {
            break;
         }
      } while (foundl && (twittert.startsWith(`${layoutm}`)));
      let turnm = listR ? !listR : listR;
      do {
         listR = 63 == twittert.length;
         if (turnm) {
            break;
         }
      } while ((specJ.length <= 1 && listR) && turnm);
       let assistr = String.fromCharCode(115,113,108,99,105,112,104,101,114,0);
       let gestures3 = String.fromCharCode(98,117,105,108,100,101,114,0);
         gestures3 = `${twittert.length}`;
          let emptyv = 3.0;
          let viewsG = String.fromCharCode(115,105,110,99,0);
          let singleJ: Array<any> = [String.fromCharCode(99,110,116,0), String.fromCharCode(115,112,101,99,116,105,109,101,0), String.fromCharCode(97,118,99,105,110,116,114,97,0)];
         assistr = `${(parseInt(`${emptyv}`) / (Math.max(6, (listR ? 4 : 1))))}`;
         emptyv /= Math.max(parseFloat(`${viewsG.length * 3}`), 5);
         viewsG += `${singleJ.length}`;
         singleJ.push((String.fromCharCode(88,0) == viewsG ? viewsG.length : singleJ.length));
       let sheeti = String.fromCharCode(99,104,97,114,115,0);
      malaysiaw = "2";
   }
   while (5 == malaysiaw.length) {
      malaysiaw = `${descS.length % 1}`;
      break;
   }
      vietnamU &= parseInt(`${searcho}`) ^ 1;

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

    static current = (): XRFilterSend | undefined => {
        if (this.#historiesPages.length <= 0) return;
        return this.#historiesPages[this.#historiesPages.length - 1];
    }

    static previous = (): XRFilterSend | undefined => {
        if (this.#historiesPages.length <= 1) return;
        return this.#historiesPages[this.#historiesPages.length - 2];
    }

    static history = (): XRFilterSend[] => {
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
            this.#addEventByKey(route.key, TCircleConfirmation.TAutoLayout, this.pendingEvent[pendingEventFound].thenEvent);
            this.pendingEvent.splice(pendingEventFound, 1);
        }
    }

    /**
     * params => use for navigate pop action
     */
    static #handlePop = (
        page?: XRFilterSend,
        route?: {
            key: string;
            name: string;
            params?: any;
            state?: any;
        }
    ) => {
        if (!page) return;

        this.#runEventByKey(page.key, TCircleConfirmation.TAutoLayout, page.backParams);
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

    static #addEventByKey = (key: string, type: TCircleConfirmation, callback: () => void) => {
        DeviceEventEmitter.addListener(eventKeyGenerator(key, type), callback);
    }

    static #runEventByKey = (key: string, type: TCircleConfirmation, params?: any) => {
        DeviceEventEmitter.emit(eventKeyGenerator(key, type), params);
        this.#removeListenerByKey(key);
    }

    static #removeListenerByKey = (key: string) => {
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, TCircleConfirmation.TAutoLayout));
        DeviceEventEmitter.removeAllListeners(eventKeyGenerator(key, TCircleConfirmation.TLogo));
    }
}

export const CRouteInitializer = ({
    middlewares = {},
}: {
    middlewares?: { [key: string]: [] | [(page: string) => string | undefined] },
}) => {
    const navigator = useNavigation<NavigationProp<{ [key: string]: any }>>();

    useEffect(() => {
        IRouterComponent.init(navigator, { middlewares });

        return IRouterComponent.closeRouter;
    }, []);

    useEffect(() => {
        IRouterComponent.updateNavigator(navigator);
        IRouterComponent.updateMiddlewares(middlewares);
    }, [navigator, middlewares]);

    return <></>
}
