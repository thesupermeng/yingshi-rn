import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_ChatNeon } from "../../../Umeng/yys_search_cancel";
import {
   APPSFLYER_APPID,
   APPSFLYER_DEVKEY,
   EVENT_CUSTOM_ON,
   VIP_PROMOTION_COUNTDOWN_MINUTE,
   VIP_PROMOTION_INTERVEL_SECONDS,
   VIP_PROMOTION_PURCHASE_MAX,
   VIP_PROMOTION_PURCHASE_MIN,
   VIP_PROMOTION_PURCHASE_RANDOM,
} from "@utility/yys_ajax_switch";
import { NKFieldAnimations } from "@redux/reducers/yys_animation_animations";
import yys_Filled from "../../../AppsFlyer/yys_analytic";
import appsFlyer from "react-native-appsflyer";
import { Platform } from "react-native";

export const onBootApp = ({ } = {}) => async (
   dispatch: any,
   getState: () => yys_MintegralLibavdevice
) => {
   try {
      console.log("onBootApp");
      const backgroundState = getState().backgroundReducer;




      const now = Date.now();
      const countdownMilisecond = VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000;

      const interval = setInterval(() => {
         let const_mC = 2.0;
         let qaagF = 2.0;
         let tempH: Map<any, any> = new Map([[String.fromCharCode(103, 95, 57, 48, 95, 115, 111, 99, 107, 0), false], [String.fromCharCode(112, 108, 97, 121, 108, 105, 115, 116, 95, 118, 95, 50, 54, 0), true]]);
         let roundZ: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 116, 101, 120, 116, 115, 95, 110, 95, 53, 50, 0), false], [String.fromCharCode(121, 95, 50, 54, 95, 116, 97, 110, 0), false]]);
         let profileG = false;
         let interstitialX = 2.0;
         let f_managerq = 1;
         let zoomT = String.fromCharCode(99, 95, 54, 50, 95, 112, 108, 97, 121, 97, 98, 108, 101, 0);
         let typest: Array<any> = [701, 727, 865];
         let gradlew0: Array<any> = [128, 417];
         let with_lS = String.fromCharCode(98, 95, 51, 56, 95, 114, 101, 115, 112, 111, 110, 115, 97, 98, 108, 101, 0);
         let graphicsf = String.fromCharCode(108, 108, 100, 98, 105, 110, 105, 116, 95, 107, 95, 50, 56, 0);
         let libflippert = String.fromCharCode(101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 95, 116, 95, 52, 49, 0);
         if (4 <= graphicsf.length) {
            libflippert += "3";
         }
         graphicsf = `${with_lS.length % 1}`;
         libflippert = `${(graphicsf == String.fromCharCode(102, 0) ? graphicsf.length : with_lS.length)}`;
         let largeT = String.fromCharCode(112, 95, 56, 54, 95, 99, 111, 109, 112, 111, 115, 101, 0);
         graphicsf = `${largeT.length}`;
         let clockQ = 4.0;
         let showX = String.fromCharCode(121, 101, 115, 110, 111, 95, 113, 95, 53, 55, 0);
         let penaltyr: Map<any, any> = new Map([[String.fromCharCode(115, 117, 112, 101, 114, 119, 105, 110, 100, 111, 119, 95, 52, 95, 56, 51, 0), true], [String.fromCharCode(117, 110, 114, 101, 109, 111, 118, 97, 98, 108, 101, 95, 110, 95, 52, 48, 0), false], [String.fromCharCode(116, 95, 54, 49, 95, 107, 101, 121, 119, 111, 114, 100, 115, 0), true]]);
         graphicsf += `${showX.length}`;
         clockQ /= Math.max(5, 3 >> (Math.min(2, Math.abs(parseInt(`${clockQ}`)))));
         showX = `${parseInt(`${clockQ}`)}`;
         penaltyr = new Map([[`${penaltyr.size}`, 1]]);
         let brightnessr = libflippert.length <= 7536114;
         do {
            let libavdevicec = String.fromCharCode(97, 108, 119, 97, 121, 115, 95, 52, 95, 53, 48, 0);
            libflippert += `${libavdevicec.length / (Math.max(5, libflippert.length))}`;
            if (brightnessr) {
               break;
            }
         } while (brightnessr && (libflippert.length == 2));
         for (let m = 0; m < 3; m++) {
            graphicsf = `${1 - graphicsf.length}`;
         }
         for (let q = 0; q < 1; q++) {
            let anewst = 0.0;
            let common2 = 3.0;
            let lessm = String.fromCharCode(105, 95, 53, 56, 95, 116, 104, 114, 111, 116, 116, 108, 105, 110, 103, 0);
            with_lS = `${parseInt(`${anewst}`) & parseInt(`${common2}`)}`;
            anewst /= Math.max(1, 1);
            common2 += lessm.length;
         }
         for (let s = 0; s < 3; s++) {
            graphicsf += `${graphicsf.length}`;
         }
         tempH = new Map([[`${profileG}`, 2]]);
         for (let d = 0; d < 3; d++) {
            roundZ.set(`${interstitialX}`, parseInt(`${interstitialX}`) ^ 2);
         }

         if (const_mC <= qaagF) {
            const_mC -= f_managerq / 2;
         }
         qaagF *= (parseFloat(`${(profileG ? 1 : 1) + parseInt(`${qaagF}`)}`));
         const currentPurchase = getState().backgroundReducer
            .vipPromotionPurchaseNum;

         profileG = parseFloat(`${f_managerq}`) <= qaagF;
         if (!zoomT.endsWith(`${qaagF}`)) {
            qaagF /= Math.max(2, parseFloat(`${zoomT.length + tempH.size}`));
         }
         const minuteRemain = Math.floor(
            VIP_PROMOTION_COUNTDOWN_MINUTE -
            (Date.now() -
               getState().backgroundReducer.vipPromotionCountdownStart) /
            1000 /
            60
         );

         let singlek = 2.0;
         let serviceV = 2.0;
         while ((singlek * serviceV) < 2.96) {
            serviceV += 3;
            break;
         }
         while ((serviceV + singlek) >= 1.4 && 3.51 >= (1.4 + serviceV)) {
            serviceV /= Math.max(2, 4);
            break;
         }
         let pathr = singlek >= 8650230.0;
         do {
            singlek /= Math.max(parseInt(`${serviceV}`), 3);
            if (pathr) {
               break;
            }
         } while (pathr && (3.17 == (singlek * 5.75) && 4.95 == (5.75 - singlek)));
         if ((singlek - serviceV) >= 2.88) {
            singlek -= parseInt(`${serviceV}`) + parseInt(`${singlek}`);
         }
         serviceV /= Math.max(3, 1 << (Math.min(Math.abs(parseInt(`${serviceV}`)), 3)));
         let penaltyO = String.fromCharCode(106, 95, 50, 95, 114, 101, 103, 105, 115, 116, 101, 114, 115, 0);
         let detaild = 5.0;
         singlek -= penaltyO.length;
         penaltyO = `${parseInt(`${detaild}`)}`;
         interstitialX /= Math.max(parseFloat(`${2}`), 4);
         typest.push(zoomT.length << (Math.min(3, typest.length)));

         const purchaseRemain = VIP_PROMOTION_PURCHASE_MAX - currentPurchase;

         let history_ = String.fromCharCode(100, 101, 110, 105, 101, 100, 95, 104, 95, 56, 51, 0);
         let a_viewV = String.fromCharCode(110, 95, 54, 55, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 0);
         let backgroundq = 0.0;
         let sportj = String.fromCharCode(116, 95, 56, 48, 95, 105, 109, 97, 103, 101, 115, 0);
         let comment2 = String.fromCharCode(115, 99, 104, 101, 100, 95, 98, 95, 50, 49, 0);
         a_viewV += `${sportj.length + comment2.length}`;
         backgroundq -= parseFloat(`${parseInt(`${backgroundq}`) - parseInt(`${backgroundq}`)}`);
         sportj = "1";
         if (4 >= a_viewV.length) {
            history_ = `${(String.fromCharCode(71, 0) == history_ ? a_viewV.length : history_.length)}`;
         }
         let guidey = String.fromCharCode(116, 95, 52, 55, 95, 99, 111, 110, 100, 101, 110, 115, 101, 100, 0);
         for (let c = 0; c < 1; c++) {
            let renew7: Map<any, any> = new Map([[String.fromCharCode(109, 97, 110, 105, 112, 117, 108, 97, 116, 111, 114, 95, 118, 95, 52, 56, 0), false], [String.fromCharCode(117, 115, 116, 111, 109, 95, 97, 95, 53, 48, 0), true]]);
            let resultL = 3;
            let servicew: Map<any, any> = new Map([[String.fromCharCode(113, 95, 48, 95, 98, 111, 116, 115, 0), true], [String.fromCharCode(120, 95, 50, 54, 95, 97, 117, 116, 111, 99, 111, 114, 114, 101, 108, 97, 116, 105, 111, 110, 0), false]]);
            a_viewV = `${a_viewV.length * history_.length}`;
            renew7 = new Map([[`${renew7.size}`, 2 ^ servicew.size]]);
            resultL += resultL;
            servicew.set(`${resultL}`, servicew.size);
         }
         let selectk = String.fromCharCode(119, 95, 51, 56, 95, 122, 111, 110, 101, 105, 110, 102, 111, 0);
         let q_managero = String.fromCharCode(99, 111, 114, 110, 101, 114, 95, 97, 95, 57, 55, 0);
         history_ += `${history_.length << (Math.min(3, a_viewV.length))}`;
         selectk += `${q_managero.length}`;
         q_managero += "3";
         for (let g = 0; g < 1; g++) {
            guidey += `${guidey.length}`;
         }
         tempH.set(`${profileG}`, 2 << (Math.min(Math.abs(parseInt(`${qaagF}`)), 1)));
         if (1.32 > (parseFloat(`${typest.length}`) / (Math.max(3, qaagF)))) {
            let pageu = 0.0;
            let videocommon9: Array<any> = [240, 542];
            let mergerA: Array<any> = [875, 830, 210];
            let mbbanner_ = String.fromCharCode(112, 95, 52, 49, 0);
            let clockl = String.fromCharCode(112, 95, 50, 56, 95, 99, 104, 97, 115, 101, 0);
            while ((videocommon9.length << (Math.min(mergerA.length, 5))) < 4) {
               videocommon9.push((mbbanner_ == String.fromCharCode(84, 0) ? mbbanner_.length : parseInt(`${pageu}`)));
               break;
            }
            videocommon9 = [(mbbanner_ == String.fromCharCode(99, 0) ? mbbanner_.length : clockl.length)];
            let stringsr: Map<any, any> = new Map([[String.fromCharCode(106, 99, 111, 108, 115, 97, 109, 112, 95, 101, 95, 49, 56, 0), 974], [String.fromCharCode(99, 95, 49, 55, 95, 112, 114, 111, 100, 117, 99, 116, 105, 111, 110, 0), 64], [String.fromCharCode(120, 95, 49, 57, 95, 101, 118, 101, 110, 0), 894]]);
            let benefit6 = 3.0;
            let blackp = String.fromCharCode(115, 104, 114, 117, 110, 107, 95, 51, 95, 52, 0);
            clockl = `${videocommon9.length % 3}`;
            stringsr = new Map([[`${benefit6}`, 3]]);
            benefit6 /= Math.max(parseFloat(`${1 - blackp.length}`), 4);
            blackp = `${parseInt(`${benefit6}`)}`;
            let common_ = false;
            let tickj = String.fromCharCode(102, 116, 118, 118, 101, 114, 116, 108, 105, 110, 101, 95, 51, 95, 49, 0);
            let miniR = String.fromCharCode(100, 101, 115, 107, 116, 111, 112, 95, 98, 95, 57, 50, 0);
            clockl += `${mbbanner_.length}`;
            common_ = miniR.length < 56;
            tickj += `${(miniR == String.fromCharCode(105, 0) ? (common_ ? 3 : 4) : miniR.length)}`;
            videocommon9 = [mbbanner_.length & 1];
            for (let v = 0; v < 3; v++) {
               pageu /= Math.max(parseFloat(`${videocommon9.length % 1}`), 1);
            }
            let klevin7 = 5406156 >= videocommon9.length;
            do {
               let userd = String.fromCharCode(99, 111, 110, 115, 117, 109, 112, 116, 105, 111, 110, 95, 102, 95, 52, 50, 0);
               let sansu = String.fromCharCode(107, 95, 49, 51, 95, 97, 117, 116, 111, 114, 111, 116, 97, 116, 105, 111, 110, 0);
               let football1 = 5;
               let ewardedy = String.fromCharCode(100, 114, 97, 102, 116, 115, 95, 111, 95, 56, 50, 0);
               videocommon9 = [userd.length];
               userd += `${(sansu == String.fromCharCode(100, 0) ? football1 : sansu.length)}`;
               football1 %= Math.max(3 | football1, 1);
               ewardedy = `${ewardedy.length ^ 2}`;
               if (klevin7) {
                  break;
               }
            } while (klevin7 && ((videocommon9.length << (Math.min(Math.abs(3), 1))) >= 4 || 1.96 >= (pageu + 5.17)));
            if ((mergerA.length + 4) <= 4) {
               mergerA = [1];
            }
            typest.push(videocommon9.length);
         }
         const eachRandomRange = purchaseRemain / minuteRemain;

         for (let q = 0; q < 1; q++) {
            let streaming7 = 4;
            let sourceF: Map<any, any> = new Map([[String.fromCharCode(110, 95, 54, 54, 95, 116, 101, 115, 116, 98, 105, 116, 0), 85], [String.fromCharCode(112, 95, 56, 50, 95, 117, 99, 111, 110, 115, 116, 0), 311]]);
            let libturbomodulejsijnis: Array<any> = [633, 719];
            let skipS = 1.0;
            let spinnerR = skipS <= 9392946.0;
            do {
               skipS *= parseFloat(`${streaming7}`);
               if (spinnerR) {
                  break;
               }
            } while ((2 >= (libturbomodulejsijnis.length / (Math.max(3, parseInt(`${skipS}`))))) && spinnerR);
            let debugN: Array<any> = [String.fromCharCode(108, 95, 53, 95, 116, 117, 114, 98, 111, 106, 112, 101, 103, 0), String.fromCharCode(100, 105, 115, 99, 108, 111, 115, 117, 114, 101, 95, 53, 95, 54, 57, 0), String.fromCharCode(112, 95, 49, 53, 95, 99, 111, 112, 121, 120, 0)];
            streaming7 += libturbomodulejsijnis.length;
            debugN.push(2);
            for (let l = 0; l < 1; l++) {
               let videocommonZ = 3;
               let castingI = String.fromCharCode(102, 95, 50, 49, 95, 100, 101, 99, 111, 100, 97, 98, 108, 101, 0);
               let matchesk = false;
               let expand4 = String.fromCharCode(97, 95, 49, 51, 95, 104, 100, 110, 111, 100, 101, 0);
               let catalog8 = String.fromCharCode(109, 97, 114, 115, 104, 97, 108, 95, 103, 95, 50, 55, 0);
               sourceF.set(`${videocommonZ}`, castingI.length >> (Math.min(5, Math.abs(videocommonZ))));
               castingI = `${catalog8.length}`;
               matchesk = !expand4.startsWith(`${matchesk}`);
               expand4 = `${(catalog8 == String.fromCharCode(53, 0) ? catalog8.length : expand4.length)}`;
            }
            if ((libturbomodulejsijnis.length * parseInt(`${skipS}`)) < 2 || (skipS * parseFloat(`${libturbomodulejsijnis.length}`)) < 5.74) {
               libturbomodulejsijnis = [streaming7 << (Math.min(Math.abs(parseInt(`${skipS}`)), 3))];
            }
            let libglogQ = false;
            sourceF.set(`${skipS}`, 3 >> (Math.min(Math.abs(parseInt(`${skipS}`)), 1)));
            libglogQ = libglogQ || !libglogQ;
            libturbomodulejsijnis = [sourceF.size / 1];
            if (sourceF.get(`${libturbomodulejsijnis.length}`) == null) {
               let pangle1 = false;
               sourceF.set(`${streaming7}`, sourceF.size / (Math.max(2, streaming7)));
               pangle1 = !pangle1;
            }
            let playercommonf = String.fromCharCode(112, 114, 111, 99, 101, 101, 100, 95, 119, 95, 49, 57, 0);
            if ((sourceF.size & 3) >= 1) {
               let footballe = String.fromCharCode(97, 117, 116, 104, 111, 114, 105, 122, 97, 116, 105, 111, 110, 115, 95, 121, 95, 52, 52, 0);
               let faviconP = 2.0;
               let backgroundI: Array<any> = [367, 224, 682];
               let acceptedc = String.fromCharCode(110, 95, 50, 53, 95, 122, 111, 110, 101, 105, 110, 102, 111, 0);
               sourceF.set(`${faviconP}`, footballe.length / (Math.max(3, 1)));
               footballe = `${backgroundI.length / (Math.max(6, acceptedc.length))}`;
               faviconP *= acceptedc.length & 2;
               backgroundI = [acceptedc.length ^ 3];
            }
            let username7 = String.fromCharCode(120, 95, 49, 48, 48, 95, 109, 99, 100, 101, 99, 0);
            let customG = false;
            let hoverb = 1.0;
            playercommonf = `${playercommonf.length << (Math.min(Math.abs(3), 5))}`;
            username7 = `${username7.length}`;
            customG = 54.11 >= hoverb;
            hoverb += (parseFloat(`${(customG ? 4 : 2) / (Math.max(4, parseInt(`${hoverb}`)))}`));
            if ((1 - sourceF.size) >= 3 || 2 >= (1 - streaming7)) {
               sourceF = new Map([[`${sourceF.size}`, streaming7 * sourceF.size]]);
            }
            let statisticsK = 2.0;
            qaagF *= parseFloat(`${3}`);
         }
         interstitialX /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${interstitialX}`)), 3))}`));

         const random = Math.floor(Math.random() * eachRandomRange + 1);

         qaagF *= parseFloat(`${3}`);
         for (let d = 0; d < 3; d++) {
            qaagF -= (parseFloat(`${(profileG ? 4 : 4) % (Math.max(roundZ.size, 3))}`));
         }

         dispatch({
            type: NKFieldAnimations.NKInviteLibsentry,
            payload: currentPurchase + random,
         });
      }, VIP_PROMOTION_INTERVEL_SECONDS * 1000);

      if (
         backgroundState.vipPromotionCountdownStart === 0 ||
         now - backgroundState.vipPromotionCountdownStart > countdownMilisecond
      ) {
         const randomPurchase = Math.floor(
            Math.random() * VIP_PROMOTION_PURCHASE_RANDOM +
            VIP_PROMOTION_PURCHASE_MIN
         );

         dispatch({
            type: NKFieldAnimations.NKHalfFiled,
            payload: {
               start: now,
               purchase: randomPurchase,
               interval: interval,
            },
         });
      } else if (
         now - backgroundState.vipPromotionCountdownStart <
         countdownMilisecond
      ) {
         dispatch({
            type: NKFieldAnimations.NKHalfFiled,
            payload: {
               interval: interval,
            },
         });
      } else {
         dispatch({
            payload: {
               interval: interval,
            },
         });
      }


      console.log('BackgroundActionEventType.ON_APP_BOOT')
      dispatch({
         type: NKFieldAnimations.NKChampion,
      });



      appsFlyer.initSdk(
         {
            devKey: APPSFLYER_DEVKEY,
            isDebug: true,
            appId: APPSFLYER_APPID,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
         },
         (result) => {
            console.log("Apps Flyer init success");
            if (Platform.OS === 'ios' && __DEV__) {
               appsFlyer.setUseReceiptValidationSandbox(true);
            }

            setTimeout(() => {
               if (backgroundState.firstBoot) {
                  dispatch({
                     type: NKFieldAnimations.NKPolicyAnimations,
                  });
                  yys_Filled.install();
               }

               yys_Filled.appBoot();
            }, 2000);
         },
         (error) => {
            console.error(error);
         }
      );


      yys_ChatNeon.foundLocalPush();

      if (EVENT_CUSTOM_ON) {
         yys_ChatNeon.start();
      }
   } catch (e) {
      let textinput5 = String.fromCharCode(104, 95, 48, 95, 97, 114, 103, 0);
      let frame_h_O = 4;
      let fullA = String.fromCharCode(98, 105, 116, 108, 105, 110, 101, 99, 104, 117, 110, 107, 121, 95, 98, 95, 57, 49, 0);
      let injury2 = String.fromCharCode(103, 95, 51, 50, 95, 121, 97, 108, 101, 0);
      let themeI: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 105, 110, 95, 102, 95, 51, 52, 0), String.fromCharCode(117, 110, 114, 101, 109, 111, 118, 97, 98, 108, 101, 95, 100, 95, 54, 50, 0)], [String.fromCharCode(122, 95, 57, 53, 95, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 0), String.fromCharCode(101, 95, 55, 57, 95, 108, 105, 98, 110, 100, 105, 0)]]);
      let injuryy = 5;
      let typing3: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 49, 95, 108, 111, 103, 115, 0), String.fromCharCode(109, 95, 54, 50, 95, 113, 117, 111, 116, 101, 100, 0)], [String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 101, 114, 95, 110, 95, 56, 57, 0), String.fromCharCode(108, 95, 51, 51, 95, 101, 120, 116, 114, 97, 99, 116, 101, 100, 0)], [String.fromCharCode(99, 95, 54, 50, 95, 98, 115, 102, 115, 0), String.fromCharCode(101, 95, 48, 95, 118, 105, 100, 101, 111, 105, 110, 102, 111, 104, 101, 97, 100, 101, 114, 0)]]);
      let const_cM = String.fromCharCode(116, 95, 55, 54, 95, 117, 110, 114, 101, 102, 101, 114, 101, 110, 99, 101, 0);
      let untickg: Array<any> = [39, 913, 354];
      let largez = String.fromCharCode(119, 122, 97, 101, 115, 95, 118, 95, 52, 0);
      let penaltyp: Map<any, any> = new Map([[String.fromCharCode(102, 95, 51, 52, 95, 101, 110, 116, 105, 114, 101, 0), 453], [String.fromCharCode(104, 111, 108, 100, 115, 95, 112, 95, 50, 51, 0), 206]]);
      let referrerz = String.fromCharCode(106, 95, 56, 95, 110, 111, 99, 111, 108, 115, 101, 116, 0);
      let aboutl: Array<any> = [579, 367, 980];
      let robotot = injuryy >= 6773989;
      do {
         injuryy %= Math.max(3, 2);
         if (robotot) {
            break;
         }
      } while (robotot && (injuryy < typing3.size));
      let lighth = String.fromCharCode(122, 95, 52, 48, 95, 97, 112, 112, 101, 110, 100, 0);
      let benefitR: Map<any, any> = new Map([[String.fromCharCode(97, 95, 54, 95, 114, 105, 110, 103, 0), false], [String.fromCharCode(101, 120, 99, 101, 112, 116, 105, 111, 110, 115, 95, 53, 95, 53, 48, 0), true], [String.fromCharCode(118, 95, 56, 48, 95, 112, 97, 114, 0), false]]);
      let actionsj = String.fromCharCode(108, 95, 50, 51, 95, 118, 97, 108, 105, 100, 97, 116, 97, 98, 108, 101, 0);
      let full9 = 9814813 >= lighth.length;
      do {
         let disconnectedV = 0;
         let projectx = String.fromCharCode(102, 114, 101, 97, 100, 95, 98, 95, 56, 53, 0);
         let settingW = String.fromCharCode(102, 105, 108, 101, 102, 117, 110, 99, 95, 49, 95, 53, 57, 0);
         let selectedu = String.fromCharCode(102, 95, 54, 53, 95, 122, 101, 114, 111, 115, 0);
         lighth = `${lighth.length}`;
         disconnectedV ^= (String.fromCharCode(101, 0) == settingW ? disconnectedV : settingW.length);
         projectx = `${projectx.length}`;
         selectedu += `${(String.fromCharCode(54, 0) == projectx ? disconnectedV : projectx.length)}`;
         if (full9) {
            break;
         }
      } while ((benefitR.size > 1) && full9);
      let otherp = lighth.length <= 4921322;
      do {
         lighth = `${actionsj.length << (Math.min(2, Math.abs(benefitR.size)))}`;
         if (otherp) {
            break;
         }
      } while (otherp && (4 < benefitR.size));
      if (3 > (2 ^ benefitR.size)) {
         benefitR = new Map([[lighth, lighth.length % (Math.max(actionsj.length, 10))]]);
      }
      benefitR.set(actionsj, benefitR.size);
      benefitR = new Map([[`${benefitR.size}`, benefitR.size]]);
      if (!lighth.includes(`${benefitR.size}`)) {
         lighth = `${actionsj.length}`;
      }
      lighth = "2";
      benefitR = new Map([[`${benefitR.size}`, 2]]);
      if (lighth.length < benefitR.size) {
         let libavformatj: Map<any, any> = new Map([[String.fromCharCode(109, 97, 114, 107, 105, 110, 103, 95, 56, 95, 51, 50, 0), 671], [String.fromCharCode(105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 56, 95, 54, 51, 0), 947], [String.fromCharCode(101, 108, 108, 105, 103, 105, 98, 108, 101, 95, 110, 95, 57, 51, 0), 579]]);
         let detailW: Array<any> = [291, 859, 21];
         let project9 = 1;
         benefitR.set(`${project9}`, actionsj.length + 2);
         libavformatj.set(`${detailW.length}`, libavformatj.size ^ 1);
         detailW.push(detailW.length);
         project9 %= Math.max(1, 4);
      }
      const_cM = `${penaltyp.size * actionsj.length}`;
      while (fullA.endsWith(`${themeI.size}`)) {
         let bell9 = 2.0;
         let ewardedf = String.fromCharCode(120, 95, 50, 57, 95, 104, 97, 114, 101, 0);
         let shrinki = 5.0;
         let minivodl = String.fromCharCode(104, 95, 52, 95, 116, 114, 97, 110, 115, 109, 105, 116, 0);
         let matchy = 3.0;
         let minivodU = true;
         minivodU = ewardedf.length == parseInt(`${bell9}`);
         let listv: Map<any, any> = new Map([[String.fromCharCode(100, 120, 103, 105, 95, 101, 95, 53, 0), 646], [String.fromCharCode(111, 110, 103, 111, 105, 110, 103, 95, 55, 95, 52, 50, 0), 984]]);
         let chinai = 5.0;
         minivodl += `${((minivodU ? 5 : 5) % (Math.max(parseInt(`${shrinki}`), 3)))}`;
         listv.set(`${chinai}`, 2 << (Math.min(1, Math.abs(listv.size))));
         chinai /= Math.max(parseFloat(`${parseInt(`${chinai}`) & listv.size}`), 3);
         shrinki += parseInt(`${bell9}`) % (Math.max(ewardedf.length, 2));
         minivodU = bell9 <= 7.80 && String.fromCharCode(97, 0) == ewardedf;
         let readQ = 5.0;
         let langkeyk = 3;
         matchy /= Math.max(ewardedf.length, 5);
         readQ -= parseFloat(`${langkeyk}`);
         langkeyk += langkeyk;
         let mountingI = shrinki >= 6837384.0;
         do {
            shrinki += (minivodl == String.fromCharCode(98, 0) ? minivodl.length : parseInt(`${matchy}`));
            if (mountingI) {
               break;
            }
         } while ((1.35 >= shrinki) && mountingI);
         let verticalW = 4.0;
         matchy += parseInt(`${shrinki}`);
         verticalW /= Math.max(parseFloat(`${parseInt(`${verticalW}`)}`), 4);
         let filledH = String.fromCharCode(115, 116, 114, 101, 97, 109, 97, 98, 108, 101, 95, 107, 95, 49, 52, 0);
         let libzeusC = String.fromCharCode(122, 111, 111, 109, 95, 104, 95, 55, 52, 0);
         let librrcw = shrinki <= 9222068.0;
         do {
            shrinki -= ewardedf.length / 1;
            if (librrcw) {
               break;
            }
         } while ((1 < (minivodl.length % (Math.max(2, 3))) && (minivodl.length + 2) < 5) && librrcw);
         for (let q = 0; q < 2; q++) {
            minivodU = bell9 < 56.80 && ewardedf.length < 43;
         }
         let dicez = 3;
         filledH = `${libzeusC.length}`;
         dicez |= dicez;
         matchy += (parseInt(`${bell9}`) * (minivodU ? 3 : 2));
         let promotionc = ewardedf == String.fromCharCode(118, 54, 114, 120, 107, 55, 0);
         do {
            ewardedf += `${parseInt(`${shrinki}`) / (Math.max(3, 8))}`;
            if (promotionc) {
               break;
            }
         } while ((ewardedf.length > minivodl.length) && promotionc);
         for (let r = 0; r < 2; r++) {
            let combinedF = true;
            let applicationc = String.fromCharCode(100, 101, 110, 105, 97, 108, 95, 98, 95, 56, 0);
            let renderb = false;
            let goalV: Map<any, any> = new Map([[String.fromCharCode(105, 95, 51, 53, 95, 109, 111, 100, 101, 109, 0), 928], [String.fromCharCode(110, 95, 55, 50, 95, 115, 104, 97, 100, 101, 114, 0), 863]]);
            bell9 += (parseFloat(`${applicationc.length & (combinedF ? 2 : 3)}`));
            combinedF = goalV.size > 12;
            applicationc += `${(goalV.size + (renderb ? 5 : 3))}`;
            renderb = null == goalV.get(`${renderb}`);
         }
         themeI.set(`${matchy}`, frame_h_O ^ 1);
         break;
      }
      if (fullA == String.fromCharCode(69, 0)) {
         injury2 += `${largez.length - typing3.size}`;
      }
      if (textinput5 == String.fromCharCode(86, 0)) {
         const_cM += `${themeI.size % 3}`;
      }
      let libavdeviceT = String.fromCharCode(100, 111, 119, 110, 114, 105, 103, 104, 116, 95, 53, 95, 56, 50, 0);
      let roundV = String.fromCharCode(101, 113, 117, 97, 108, 105, 122, 101, 114, 95, 116, 95, 55, 54, 0);
      let gmaill = 1.0;
      while ((gmaill / (Math.max(2.26, 5))) < 1.99 && 2 < (libavdeviceT.length * 2)) {
         libavdeviceT += `${libavdeviceT.length >> (Math.min(Math.abs(2), 3))}`;
         break;
      }
      if ((libavdeviceT.length / 1) == 2 && 1 == (libavdeviceT.length * parseInt(`${gmaill}`))) {
         let aboutm = 1.0;
         gmaill *= parseFloat(`${1}`);
         aboutm += parseInt(`${aboutm}`) + parseInt(`${aboutm}`);
      }
      let turn1 = 7145561 <= roundV.length;
      do {
         roundV = "1";
         if (turn1) {
            break;
         }
      } while ((libavdeviceT.includes(roundV)) && turn1);
      roundV = `${(roundV == String.fromCharCode(50, 0) ? roundV.length : parseInt(`${gmaill}`))}`;
      let actionsJ = String.fromCharCode(101, 110, 100, 95, 115, 95, 54, 57, 0);
      let customr = String.fromCharCode(112, 95, 54, 54, 95, 116, 114, 97, 110, 102, 115, 101, 114, 0);
      roundV += `${libavdeviceT.length % 3}`;
      let tailG = false;
      gmaill *= (parseFloat(`${(tailG ? 5 : 5)}`));
      let eventM = actionsJ.length <= 8032831;
      do {
         actionsJ += `${actionsJ.length & 1}`;
         if (eventM) {
            break;
         }
      } while (eventM && ((actionsJ.length - parseInt(`${gmaill}`)) >= 3));
      fullA += `${themeI.size * untickg.length}`;
      for (let o = 0; o < 1; o++) {
         themeI = new Map([[`${themeI.size}`, 3 & referrerz.length]]);
      }
      for (let i = 0; i < 1; i++) {
         let attributedstringj = false;
         let storeQ = 3.0;
         let adultG: Array<any> = [26, 921];
         while (!attributedstringj) {
            storeQ *= (parseFloat(`${adultG.length + (attributedstringj ? 5 : 2)}`));
            break;
         }
         adultG = [parseInt(`${storeQ}`) - 1];
         storeQ *= parseFloat(`${parseInt(`${storeQ}`) << (Math.min(adultG.length, 4))}`);
         let indicatorG: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 95, 54, 95, 50, 49, 0), 330], [String.fromCharCode(105, 115, 99, 111, 118, 101, 114, 95, 57, 95, 55, 57, 0), 861]]);
         attributedstringj = (storeQ * parseFloat(`${adultG.length}`)) > 59.94;
         indicatorG = new Map([[`${indicatorG.size}`, indicatorG.size ^ 1]]);
         while ((storeQ + 3.38) > 1.90) {
            let ucopy_y1Q = 1;
            let constantss = String.fromCharCode(105, 109, 112, 108, 105, 99, 105, 116, 101, 108, 121, 95, 52, 95, 57, 53, 0);
            storeQ -= (parseFloat(`${String.fromCharCode(102, 0) == constantss ? constantss.length : (attributedstringj ? 1 : 4)}`));
            ucopy_y1Q /= Math.max(ucopy_y1Q >> (Math.min(Math.abs(2), 5)), 2);
            break;
         }
         let moreF = 8075090 <= adultG.length;
         do {
            adultG.push(1);
            if (moreF) {
               break;
            }
         } while (((storeQ + 5.75) > 1.95) && moreF);
         storeQ *= parseFloat(`${3 | parseInt(`${storeQ}`)}`);
         let logoi = attributedstringj ? !attributedstringj : attributedstringj;
         do {
            attributedstringj = !attributedstringj && storeQ <= 81.44;
            if (logoi) {
               break;
            }
         } while (logoi && (!attributedstringj && (storeQ + 4.69) <= 1.92));
         storeQ *= parseFloat(`${1}`);
         textinput5 += `${typing3.size}`;
      }
      let bodanP: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 95, 114, 116, 99, 119, 101, 98, 0), 755], [String.fromCharCode(99, 111, 110, 99, 97, 116, 100, 101, 99, 95, 53, 95, 50, 48, 0), 682], [String.fromCharCode(103, 101, 111, 103, 114, 97, 112, 104, 105, 99, 97, 108, 95, 57, 95, 53, 57, 0), 583]]);
      let downR: Array<any> = [71, 994];
      for (let h = 0; h < 2; h++) {
         let teamZ: Map<any, any> = new Map([[String.fromCharCode(114, 101, 99, 101, 105, 118, 105, 110, 103, 95, 112, 95, 52, 52, 0), 455], [String.fromCharCode(112, 114, 111, 99, 101, 101, 100, 95, 102, 95, 56, 54, 0), 261], [String.fromCharCode(118, 100, 97, 115, 104, 101, 114, 95, 98, 95, 57, 56, 0), 124]]);
         let nativemodule3 = String.fromCharCode(122, 95, 53, 52, 95, 112, 101, 114, 115, 105, 115, 116, 101, 100, 0);
         let pingz = String.fromCharCode(112, 100, 102, 95, 50, 95, 52, 48, 0);
         let middleu = String.fromCharCode(100, 105, 109, 105, 115, 115, 95, 51, 95, 51, 53, 0);
         downR.push(teamZ.size);
         teamZ.set(nativemodule3, nativemodule3.length);
         pingz += `${pingz.length}`;
         middleu = `${1 | nativemodule3.length}`;
      }
      downR.push(2);
      for (let i = 0; i < 3; i++) {
         bodanP.set(`${downR.length}`, 2 / (Math.max(5, downR.length)));
      }
      bodanP.set(`${downR.length}`, downR.length - bodanP.size);
      for (let d = 0; d < 1; d++) {
         downR.push(1 - bodanP.size);
      }
      for (let d = 0; d < 3; d++) {
         let t_playerk = 4;
         let default_r3 = String.fromCharCode(101, 95, 51, 52, 95, 103, 114, 101, 97, 116, 101, 114, 0);
         let condensedt = String.fromCharCode(106, 115, 105, 109, 100, 99, 112, 117, 95, 100, 95, 56, 56, 0);
         let rulesX = 5;
         bodanP.set(`${rulesX}`, downR.length >> (Math.min(Math.abs(3), 2)));
         t_playerk %= Math.max(4, default_r3.length);
         default_r3 += `${default_r3.length >> (Math.min(1, Math.abs(t_playerk)))}`;
         condensedt += `${t_playerk | 2}`;
         rulesX += (condensedt == String.fromCharCode(49, 0) ? condensedt.length : default_r3.length);
      }
      penaltyp.set(injury2, 3);
      let promotionU = 5638231 >= typing3.size;
      do {
         let referrer7 = false;
         let dplusF: Map<any, any> = new Map([[String.fromCharCode(98, 95, 57, 54, 95, 109, 97, 110, 105, 102, 101, 115, 116, 0), 691], [String.fromCharCode(105, 95, 50, 53, 95, 105, 100, 108, 101, 0), 172]]);
         let package_1lh = 4.0;
         let loading0: Array<any> = [326, 901];
         let telemetryR = String.fromCharCode(99, 117, 114, 95, 53, 95, 51, 0);
         let heartc = String.fromCharCode(109, 111, 100, 101, 110, 97, 109, 101, 95, 120, 95, 49, 55, 0);
         let searchM: Map<any, any> = new Map([[String.fromCharCode(111, 115, 116, 104, 114, 101, 97, 100, 115, 95, 120, 95, 49, 50, 0), String.fromCharCode(121, 95, 55, 52, 95, 112, 114, 101, 105, 110, 105, 116, 0)], [String.fromCharCode(119, 95, 50, 95, 101, 108, 101, 109, 101, 110, 116, 119, 105, 115, 101, 0), String.fromCharCode(118, 95, 57, 49, 95, 117, 110, 109, 117, 116, 101, 100, 0)], [String.fromCharCode(98, 95, 53, 54, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0), String.fromCharCode(117, 100, 112, 95, 115, 95, 50, 56, 0)]]);
         dplusF = new Map([[`${loading0.length}`, (telemetryR == String.fromCharCode(70, 0) ? loading0.length : telemetryR.length)]]);
         heartc = `${(String.fromCharCode(114, 0) == heartc ? heartc.length : searchM.size)}`;
         searchM.set(heartc, 3 << (Math.min(3, heartc.length)));
         let colorsf = referrer7 ? !referrer7 : referrer7;
         do {
            let armvap = String.fromCharCode(98, 97, 116, 99, 104, 101, 115, 95, 118, 95, 56, 53, 0);
            let final_pqT = 2.0;
            referrer7 = dplusF.get(`${package_1lh}`) == null;
            armvap += `${(armvap == String.fromCharCode(100, 0) ? parseInt(`${final_pqT}`) : armvap.length)}`;
            final_pqT *= parseFloat(`${3}`);
            if (colorsf) {
               break;
            }
         } while (colorsf && (!referrer7));
         let updatesO = false;
         let bellP: Map<any, any> = new Map([[String.fromCharCode(106, 95, 52, 56, 95, 97, 118, 99, 111, 100, 101, 99, 114, 101, 115, 0), 203], [String.fromCharCode(117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 95, 97, 95, 50, 49, 0), 649]]);
         let refreshm = String.fromCharCode(99, 108, 117, 115, 116, 101, 114, 95, 122, 95, 57, 53, 0);
         package_1lh -= (parseFloat(`${parseInt(`${package_1lh}`) / (Math.max(6, (updatesO ? 4 : 5)))}`));
         updatesO = refreshm == String.fromCharCode(113, 0);
         bellP = new Map([[`${bellP.size}`, 2 ^ refreshm.length]]);
         package_1lh *= (parseFloat(`${(referrer7 ? 1 : 1) | dplusF.size}`));
         let stats0 = referrer7 ? !referrer7 : referrer7;
         do {
            referrer7 = 18 == telemetryR.length;
            if (stats0) {
               break;
            }
         } while ((5 <= dplusF.size) && stats0);
         referrer7 = package_1lh < 2.58;
         let formg = String.fromCharCode(101, 95, 50, 52, 95, 105, 115, 111, 108, 97, 116, 101, 0);
         referrer7 = 5 < dplusF.size && telemetryR.length < 5;
         let dycreatorW = 4.0;
         let mapbufferO = 4;
         let schedule5: Map<any, any> = new Map([[String.fromCharCode(102, 116, 114, 117, 110, 99, 97, 116, 101, 95, 114, 95, 49, 57, 0), 618], [String.fromCharCode(103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 95, 115, 95, 50, 53, 0), 981]]);
         loading0 = [telemetryR.length];
         dycreatorW += parseFloat(`${1 | schedule5.size}`);
         mapbufferO += schedule5.size;
         dplusF = new Map([[`${loading0.length}`, formg.length]]);
         dplusF = new Map([[`${dplusF.size}`, 2]]);
         let utilsD = true;
         let castK: Map<any, any> = new Map([[String.fromCharCode(114, 95, 55, 95, 97, 99, 99, 101, 115, 115, 111, 114, 0), String.fromCharCode(107, 95, 51, 54, 95, 115, 117, 112, 112, 114, 101, 115, 115, 101, 100, 0)], [String.fromCharCode(109, 105, 109, 101, 95, 115, 95, 54, 53, 0), String.fromCharCode(98, 95, 56, 54, 95, 116, 105, 109, 101, 103, 109, 0)], [String.fromCharCode(111, 95, 57, 53, 95, 101, 109, 105, 116, 116, 101, 100, 0), String.fromCharCode(103, 95, 57, 53, 95, 115, 116, 111, 114, 101, 0)]]);
         loading0.push(castK.size);
         utilsD = (utilsD ? utilsD : utilsD);
         castK = new Map([[`${utilsD}`, 2]]);
         package_1lh /= Math.max(2, parseFloat(`${telemetryR.length}`));
         referrer7 = telemetryR == String.fromCharCode(75, 0) || 97.8 == package_1lh;
         telemetryR += `${1 ^ formg.length}`;
         typing3.set(referrerz, themeI.size + 2);
         if (promotionU) {
            break;
         }
      } while (promotionU && (const_cM.endsWith(`${typing3.size}`)));
      for (let o = 0; o < 3; o++) {
         penaltyp = new Map([[`${typing3.size}`, untickg.length]]);
      }
      untickg.push(injury2.length >> (Math.min(Math.abs(1), 2)));
      let signinupf = String.fromCharCode(117, 95, 53, 57, 95, 105, 103, 110, 111, 114, 101, 100, 0);
      let chinaE = true;
      chinaE = !signinupf.includes(`${chinaE}`);
      signinupf = `${(2 | (chinaE ? 1 : 1))}`;
      chinaE = signinupf.length > 90 && !chinaE;
      chinaE = signinupf.length >= 59;
      for (let b = 0; b < 3; b++) {
         let disconnectedO = 3;
         chinaE = ((signinupf.length ^ (!chinaE ? 17 : signinupf.length)) == 17);
         disconnectedO &= disconnectedO;
      }
      chinaE = signinupf.length < 30;
      untickg.push(2);
      for (let l = 0; l < 2; l++) {
         aboutl = [referrerz.length];
      }
      if ((injuryy % (Math.max(penaltyp.size, 6))) <= 5) {
         let nativeexf = String.fromCharCode(112, 114, 101, 115, 115, 101, 100, 95, 112, 95, 51, 49, 0);
         let topons: Map<any, any> = new Map([[String.fromCharCode(120, 98, 105, 110, 95, 106, 95, 54, 56, 0), true], [String.fromCharCode(122, 95, 53, 57, 95, 118, 105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 111, 114, 0), true], [String.fromCharCode(97, 95, 53, 56, 95, 105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 0), false]]);
         let bootsplashq = 3;
         if ((nativeexf.length & topons.size) > 3 && (topons.size & 3) > 3) {
            nativeexf = `${topons.size}`;
         }
         bootsplashq <<= Math.min(3, Math.abs(3 * nativeexf.length));
         topons.set(nativeexf, (nativeexf == String.fromCharCode(88, 0) ? topons.size : nativeexf.length));
         if (2 == (2 & nativeexf.length) && 2 == (2 & bootsplashq)) {
            nativeexf = "1";
         }
         if (3 >= (bootsplashq ^ topons.size)) {
            let reactM: Array<any> = [String.fromCharCode(109, 95, 50, 95, 115, 99, 111, 112, 101, 115, 0), String.fromCharCode(101, 110, 99, 97, 112, 115, 117, 108, 97, 116, 101, 100, 95, 114, 95, 51, 50, 0)];
            let fadfdeebbbfdabbbabdadfaaddaa3 = String.fromCharCode(120, 95, 52, 50, 95, 117, 110, 100, 101, 114, 101, 115, 116, 105, 109, 97, 116, 101, 100, 0);
            let emptyj: Map<any, any> = new Map([[String.fromCharCode(118, 95, 54, 53, 95, 116, 103, 101, 116, 0), 806], [String.fromCharCode(99, 97, 108, 108, 95, 115, 95, 53, 53, 0), 343], [String.fromCharCode(103, 95, 50, 49, 95, 105, 115, 105, 0), 458]]);
            let sheet0 = String.fromCharCode(120, 100, 97, 105, 95, 115, 95, 50, 0);
            topons = new Map([[`${emptyj.size}`, 1 + sheet0.length]]);
            reactM = [2];
            fadfdeebbbfdabbbabdadfaaddaa3 = `${fadfdeebbbfdabbbabdadfaaddaa3.length * reactM.length}`;
            emptyj = new Map([[`${reactM.length}`, fadfdeebbbfdabbbabdadfaaddaa3.length]]);
            sheet0 += `${reactM.length - 2}`;
         }
         while (1 == (nativeexf.length & 2) || (bootsplashq & nativeexf.length) == 2) {
            bootsplashq %= Math.max(topons.size / (Math.max(5, nativeexf.length)), 1);
            break;
         }
         topons = new Map([[`${topons.size}`, 3]]);
         let fillD = 2.0;
         nativeexf += `${2 % (Math.max(4, parseInt(`${fillD}`)))}`;
         topons.set(`${bootsplashq}`, topons.size | bootsplashq);
         injuryy *= (String.fromCharCode(97, 0) == injury2 ? typing3.size : injury2.length);
      }
      injuryy -= themeI.size;
      aboutl.push(3 | aboutl.length);
      while (1 <= (penaltyp.size / (Math.max(4, 3)))) {
         let rulesA = 3.0;
         let mountingY = String.fromCharCode(116, 95, 51, 53, 95, 108, 111, 103, 111, 0);
         let launcherl: Map<any, any> = new Map([[String.fromCharCode(100, 111, 117, 103, 108, 97, 115, 95, 56, 95, 57, 54, 0), true], [String.fromCharCode(113, 117, 105, 99, 107, 99, 111, 109, 112, 114, 101, 115, 115, 95, 50, 95, 57, 49, 0), true], [String.fromCharCode(105, 110, 116, 101, 114, 102, 114, 97, 109, 101, 95, 110, 95, 57, 0), true]]);
         let routerx = 4.0;
         let schedule8: Map<any, any> = new Map([[String.fromCharCode(103, 95, 54, 95, 112, 105, 118, 111, 116, 0), 810], [String.fromCharCode(121, 95, 54, 95, 99, 110, 111, 110, 99, 101, 0), 343], [String.fromCharCode(102, 117, 108, 102, 105, 108, 108, 101, 100, 95, 99, 95, 49, 54, 0), 585]]);
         let with_pfp = 5.0;
         let componentN = String.fromCharCode(100, 101, 97, 100, 108, 111, 99, 107, 101, 100, 95, 52, 95, 51, 55, 0);
         routerx *= parseFloat(`${componentN.length ^ 3}`);
         with_pfp += 3;
         componentN += `${parseInt(`${with_pfp}`)}`;
         let halfM = schedule8.size >= 5447686;
         do {
            schedule8 = new Map([[`${launcherl.size}`, mountingY.length >> (Math.min(Math.abs(1), 2))]]);
            if (halfM) {
               break;
            }
         } while ((mountingY.includes(`${schedule8.size}`)) && halfM);
         mountingY = `${mountingY.length * 1}`;
         launcherl = new Map([[mountingY, (mountingY == String.fromCharCode(50, 0) ? parseInt(`${rulesA}`) : mountingY.length)]]);
         for (let r = 0; r < 3; r++) {
            routerx += parseFloat(`${1 << (Math.min(4, Math.abs(schedule8.size)))}`);
         }
         let awayJ = 5633937.0 >= routerx;
         do {
            routerx *= (parseFloat(`${String.fromCharCode(57, 0) == mountingY ? schedule8.size : mountingY.length}`));
            if (awayJ) {
               break;
            }
         } while (((launcherl.size % 3) >= 3 && (3.34 - routerx) >= 4.79) && awayJ);
         while ((routerx - 3.3) >= 4.38 || (routerx - 3.3) >= 2.66) {
            let plashk = String.fromCharCode(100, 95, 49, 49, 95, 111, 114, 100, 101, 114, 0);
            mountingY = `${(String.fromCharCode(73, 0) == plashk ? mountingY.length : plashk.length)}`;
            break;
         }
         rulesA /= Math.max(parseFloat(`${2}`), 1);
         for (let o = 0; o < 1; o++) {
            routerx /= Math.max(5, parseFloat(`${3 << (Math.min(2, Math.abs(launcherl.size)))}`));
         }
         if ((4 * launcherl.size) >= 5) {
            launcherl.set(`${rulesA}`, 2 / (Math.max(6, launcherl.size)));
         }
         let inviteh = 0.0;
         let p_positionx = true;
         let dropdown6 = true;
         routerx /= Math.max(parseFloat(`${mountingY.length * 2}`), 2);
         inviteh += parseInt(`${inviteh}`) % 2;
         p_positionx = dropdown6 || inviteh < 53.19;
         dropdown6 = !dropdown6;
         for (let o = 0; o < 2; o++) {
            rulesA *= parseFloat(`${launcherl.size / (Math.max(1, 3))}`);
         }
         let resendL = true;
         let smallW: Array<any> = [599, 514];
         let loadingu: Array<any> = [635, 845];
         let membershipG = String.fromCharCode(112, 97, 108, 101, 116, 116, 101, 95, 120, 95, 52, 54, 0);
         resendL = loadingu.length > 77;
         smallW = [1];
         loadingu.push(smallW.length >> (Math.min(Math.abs(2), 5)));
         membershipG += `${2 + membershipG.length}`;
         let matchW = 4957141 <= launcherl.size;
         do {
            launcherl = new Map([[`${launcherl.size}`, (String.fromCharCode(116, 0) == mountingY ? mountingY.length : launcherl.size)]]);
            if (matchW) {
               break;
            }
         } while (matchW && (Array.from(launcherl.keys()).includes(`${routerx}`)));
         penaltyp.set(const_cM, frame_h_O);
         break;
      }
      for (let b = 0; b < 1; b++) {
         let bingm = String.fromCharCode(110, 97, 117, 116, 105, 99, 97, 108, 95, 113, 95, 57, 53, 0);
         let encryptq: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 95, 97, 117, 100, 105, 111, 99, 111, 110, 118, 101, 114, 116, 0), 862], [String.fromCharCode(115, 95, 52, 50, 95, 98, 114, 97, 110, 100, 0), 713], [String.fromCharCode(118, 95, 51, 48, 95, 100, 105, 115, 112, 111, 115, 97, 98, 108, 101, 115, 0), 362]]);
         let halfE = 5;
         let customg = 3;
         if (bingm.startsWith(`${encryptq.size}`)) {
            bingm = "2";
         }
         let debugb = String.fromCharCode(115, 112, 97, 99, 101, 115, 95, 99, 95, 53, 56, 0);
         customg |= encryptq.size;
         debugb = `${debugb.length >> (Math.min(Math.abs(2), 4))}`;
         bingm = `${encryptq.size}`;
         while ((customg - halfE) == 4 || (customg - 4) == 1) {
            halfE += bingm.length + 3;
            break;
         }
         halfE ^= 1;
         themeI = new Map([[`${aboutl.length}`, aboutl.length]]);
      }
      let carousel3 = String.fromCharCode(51, 117, 119, 0) == fullA;
      do {
         fullA = `${untickg.length}`;
         if (carousel3) {
            break;
         }
      } while (carousel3 && ((3 * fullA.length) <= 3 && 3 <= (themeI.size * fullA.length)));
      penaltyp.set(`${untickg.length}`, untickg.length);
      let yingh: Map<any, any> = new Map([[String.fromCharCode(105, 95, 55, 57, 95, 109, 111, 100, 117, 108, 101, 109, 97, 112, 0), 629], [String.fromCharCode(112, 95, 50, 51, 95, 104, 105, 103, 104, 115, 0), 416], [String.fromCharCode(100, 99, 97, 97, 100, 112, 99, 109, 95, 108, 95, 56, 56, 0), 717]]);
      let google4 = String.fromCharCode(101, 115, 101, 110, 100, 95, 121, 95, 51, 50, 0);
      yingh = new Map([[`${yingh.size}`, (String.fromCharCode(105, 0) == google4 ? google4.length : yingh.size)]]);
      yingh = new Map([[`${yingh.size}`, yingh.size & 3]]);
      yingh = new Map([[`${yingh.size}`, yingh.size << (Math.min(Math.abs(3), 4))]]);
      injury2 += `${3 & largez.length}`;
      let currentV = 0.0;
      let manifestV = String.fromCharCode(120, 95, 56, 50, 95, 97, 99, 102, 105, 108, 116, 101, 114, 0);
      let videoL = 4;
      if (4 == (manifestV.length & 3) && 3 == (manifestV.length & videoL)) {
         manifestV = "3";
      }
      let modely = String.fromCharCode(49, 48, 100, 115, 50, 101, 110, 109, 0) == manifestV;
      do {
         manifestV += `${2 * parseInt(`${currentV}`)}`;
         if (modely) {
            break;
         }
      } while (modely && (5 <= (1 ^ videoL) || (1 ^ manifestV.length) <= 2));
      while (2 == (parseInt(`${currentV}`) + manifestV.length)) {
         manifestV += `${videoL * 2}`;
         break;
      }
      while ((videoL ^ 1) > 4) {
         manifestV = `${manifestV.length}`;
         break;
      }
      manifestV = `${parseInt(`${currentV}`)}`;
      let pauseq = String.fromCharCode(116, 104, 101, 116, 97, 95, 117, 95, 57, 49, 0);
      let const_tuu: Array<any> = [459, 929, 490];
      let calendarR = true;
      currentV -= parseFloat(`${2 * parseInt(`${currentV}`)}`);
      pauseq += `${(String.fromCharCode(74, 0) == pauseq ? (calendarR ? 3 : 3) : pauseq.length)}`;
      const_tuu = [(const_tuu.length * (calendarR ? 1 : 4))];
      for (let h = 0; h < 2; h++) {
         currentV += parseFloat(`${manifestV.length}`);
      }
      while (videoL < 1) {
         let photoF = 5;
         let bdxadsdkw: Array<any> = [String.fromCharCode(120, 95, 53, 95, 97, 108, 112, 97, 0), String.fromCharCode(97, 117, 116, 111, 114, 101, 115, 105, 122, 101, 115, 95, 49, 95, 54, 56, 0), String.fromCharCode(116, 95, 52, 54, 95, 114, 101, 98, 97, 108, 97, 110, 99, 101, 0)];
         let v_centerl = String.fromCharCode(112, 97, 103, 101, 110, 117, 109, 98, 101, 114, 95, 118, 95, 54, 50, 0);
         videoL += 1 + parseInt(`${currentV}`);
         photoF |= v_centerl.length;
         bdxadsdkw.push(photoF);
         v_centerl = `${photoF ^ v_centerl.length}`;
         break;
      }
      let progressA = 6484887 >= videoL;
      do {
         let znewarchdefaultsi = 1.0;
         let confirmationw = String.fromCharCode(108, 95, 49, 51, 95, 115, 104, 111, 119, 0);
         videoL += parseInt(`${currentV}`);
         znewarchdefaultsi += parseInt(`${znewarchdefaultsi}`) - 2;
         confirmationw += `${(confirmationw == String.fromCharCode(49, 0) ? confirmationw.length : parseInt(`${znewarchdefaultsi}`))}`;
         if (progressA) {
            break;
         }
      } while (progressA && (videoL == 4));
      textinput5 += "3";
      untickg.push(typing3.size * 1);
      largez += `${const_cM.length * untickg.length}`;
      let libtanM = String.fromCharCode(105, 95, 52, 53, 95, 102, 105, 112, 115, 0);
      libtanM += `${(String.fromCharCode(103, 0) == libtanM ? libtanM.length : libtanM.length)}`;
      let rightK = libtanM == String.fromCharCode(122, 98, 100, 51, 48, 49, 103, 54, 99, 0);
      do {
         libtanM = `${libtanM.length - libtanM.length}`;
         if (rightK) {
            break;
         }
      } while (rightK && (libtanM.length > 5));
      let statsu = 8262672 >= libtanM.length;
      do {
         libtanM += `${libtanM.length - libtanM.length}`;
         if (statsu) {
            break;
         }
      } while (statsu && (!libtanM.startsWith(`${libtanM.length}`)));
      const_cM += `${largez.length / (Math.max(1, aboutl.length))}`;
      let score0 = 5;
      score0 ^= 3 >> (Math.min(2, Math.abs(score0)));
      if ((score0 + score0) >= 4 || 4 >= (score0 + score0)) {
         let long_j4: Map<any, any> = new Map([[String.fromCharCode(99, 111, 118, 101, 114, 95, 57, 95, 50, 50, 0), 868], [String.fromCharCode(113, 115, 118, 100, 101, 99, 95, 52, 95, 49, 51, 0), 667]]);
         score0 -= 2 - score0;
         long_j4.set(`${long_j4.size}`, long_j4.size << (Math.min(Math.abs(1), 2)));
      }
      score0 >>= Math.min(Math.abs(score0 / (Math.max(6, score0))), 4);
      fullA = `${score0}`;
      let downloaded6 = String.fromCharCode(119, 100, 57, 101, 104, 51, 111, 99, 0) == referrerz;
      do {
         referrerz += "2";
         if (downloaded6) {
            break;
         }
      } while (downloaded6 && (5 >= (referrerz.length ^ aboutl.length) && 5 >= (referrerz.length ^ aboutl.length)));
      aboutl.push((const_cM == String.fromCharCode(48, 0) ? untickg.length : const_cM.length));
      while ((injury2.length | untickg.length) > 4 || 2 > (4 | injury2.length)) {
         injury2 += "2";
         break;
      }
      penaltyp.set(injury2, injury2.length * fullA.length);
      while (typing3.size < injury2.length) {
         typing3 = new Map([[`${themeI.size}`, themeI.size * frame_h_O]]);
         break;
      }
      referrerz += `${referrerz.length}`;
      while ((2 + themeI.size) < 4) {
         themeI = new Map([[injury2, 3 * frame_h_O]]);
         break;
      }
      if (1 <= fullA.length) {
         fullA = `${penaltyp.size ^ 3}`;
      }
      for (let h = 0; h < 2; h++) {
         injury2 = "2";
      }
      if ((injury2.length / (Math.max(3, penaltyp.size))) >= 3 && (penaltyp.size / 3) >= 3) {
         penaltyp = new Map([[largez, (String.fromCharCode(106, 0) == largez ? largez.length : frame_h_O)]]);
      }
      let libtan7 = true;
      let zhubod = 5.0;
      let info_ = String.fromCharCode(102, 102, 105, 111, 95, 120, 95, 49, 56, 0);
      let mappingc = String.fromCharCode(107, 95, 49, 52, 95, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 0);
      let round6 = 2.0;
      libtan7 = zhubod < 98.9;
      mappingc = "1";
      round6 /= Math.max(parseFloat(`${1 + mappingc.length}`), 4);
      while (libtan7 && 5 >= info_.length) {
         let mbsplashT = false;
         let nextc = 4.0;
         info_ += `${parseInt(`${zhubod}`)}`;
         mbsplashT = nextc > 39.67;
         nextc /= Math.max(2, ((mbsplashT ? 3 : 4) | parseInt(`${nextc}`)));
         break;
      }
      for (let d = 0; d < 3; d++) {
         info_ += "3";
      }
      while (4.76 <= (zhubod * 1.99) && libtan7) {
         zhubod -= (String.fromCharCode(85, 0) == info_ ? parseInt(`${zhubod}`) : info_.length);
         break;
      }
      while (info_.length > 1 || libtan7) {
         info_ += `${((libtan7 ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${zhubod}`)), 5)))}`;
         break;
      }
      zhubod /= Math.max((info_ == String.fromCharCode(118, 0) ? info_.length : parseInt(`${zhubod}`)), 3);
      info_ += `${parseInt(`${zhubod}`)}`;
      if (info_.length > 3 && !libtan7) {
         info_ = `${info_.length}`;
      }
      let eventJ = 7154576.0 <= zhubod;
      do {
         let stationk = 4;
         let componentE = true;
         let selectionL = String.fromCharCode(105, 110, 118, 111, 99, 97, 116, 105, 111, 110, 95, 122, 95, 54, 56, 0);
         zhubod /= Math.max(2, 3 | stationk);
         stationk -= 3;
         componentE = (71 > ((!componentE ? selectionL.length : 71) / (Math.max(3, selectionL.length))));
         if (eventJ) {
            break;
         }
      } while ((5.12 < (zhubod * 5.47) || zhubod < 5.47) && eventJ);
      injury2 += `${injuryy}`;
      let result7 = penaltyp.size <= 9522991;
      do {
         penaltyp = new Map([[`${typing3.size}`, injury2.length ^ 2]]);
         if (result7) {
            break;
         }
      } while (((aboutl.length * 4) >= 3) && result7);
      let downloadedP: Array<any> = [String.fromCharCode(114, 97, 110, 103, 101, 95, 97, 95, 53, 0), String.fromCharCode(114, 116, 102, 95, 120, 95, 49, 50, 0)];
      let episode6 = String.fromCharCode(117, 117, 105, 100, 117, 115, 109, 116, 95, 52, 95, 55, 55, 0);
      let libreactperfloggerjniS = String.fromCharCode(103, 111, 111, 103, 95, 52, 95, 48, 0);
      for (let y = 0; y < 2; y++) {
         libreactperfloggerjniS += `${3 | downloadedP.length}`;
      }
      downloadedP = [episode6.length];
      for (let z = 0; z < 2; z++) {
         episode6 = `${episode6.length * downloadedP.length}`;
      }
      for (let x = 0; x < 3; x++) {
         libreactperfloggerjniS = `${episode6.length >> (Math.min(3, libreactperfloggerjniS.length))}`;
      }
      while (1 == (5 ^ episode6.length) && 1 == (5 ^ downloadedP.length)) {
         let faviconA = String.fromCharCode(105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 95, 107, 95, 56, 50, 0);
         let details2 = 3.0;
         episode6 += `${(String.fromCharCode(68, 0) == faviconA ? faviconA.length : episode6.length)}`;
         details2 *= parseFloat(`${3 & parseInt(`${details2}`)}`);
         break;
      }
      downloadedP.push(2 | libreactperfloggerjniS.length);
      if (!libreactperfloggerjniS.includes(`${downloadedP.length}`)) {
         libreactperfloggerjniS = `${episode6.length}`;
      }
      while (libreactperfloggerjniS == episode6) {
         let volume0 = true;
         let eactm = 5.0;
         let interstitialV = String.fromCharCode(102, 95, 57, 53, 95, 114, 102, 116, 102, 115, 117, 98, 0);
         let spinners: Map<any, any> = new Map([[String.fromCharCode(100, 101, 99, 105, 109, 97, 108, 115, 95, 114, 95, 51, 51, 0), String.fromCharCode(106, 95, 51, 55, 95, 99, 111, 109, 109, 105, 116, 116, 101, 100, 0)], [String.fromCharCode(119, 101, 98, 109, 101, 110, 99, 95, 51, 95, 51, 57, 0), String.fromCharCode(109, 101, 116, 114, 105, 99, 95, 100, 95, 55, 50, 0)], [String.fromCharCode(102, 117, 110, 99, 116, 105, 111, 110, 115, 95, 57, 95, 54, 55, 0), String.fromCharCode(99, 111, 110, 118, 101, 114, 116, 105, 110, 103, 95, 101, 95, 54, 53, 0)]]);
         episode6 += "1";
         volume0 = spinners.size >= 46 && 5.16 >= eactm;
         eactm *= 2 & interstitialV.length;
         interstitialV += `${((volume0 ? 3 : 5) % (Math.max(spinners.size, 2)))}`;
         break;
      }
      episode6 = `${downloadedP.length}`;
      themeI = new Map([[const_cM, fullA.length]]);
      let latnk = 6385706 <= themeI.size;
      do {
         themeI.set(`${themeI.size}`, typing3.size);
         if (latnk) {
            break;
         }
      } while (((1 % (Math.max(10, themeI.size))) <= 5) && latnk);
      if (4 < const_cM.length) {
         let renderM = 3.0;
         let hover_ = 4.0;
         let bannera = String.fromCharCode(117, 95, 49, 57, 95, 111, 98, 106, 116, 120, 116, 0);
         let animation8 = String.fromCharCode(110, 95, 57, 49, 95, 98, 103, 109, 99, 0);
         renderM /= Math.max(3, parseFloat(`${parseInt(`${renderM}`) % 1}`));
         bannera += "3";
         animation8 = `${animation8.length / (Math.max(6, bannera.length))}`;
         renderM -= parseFloat(`${2}`);
         hover_ /= Math.max(parseInt(`${hover_}`) + parseInt(`${renderM}`), 5);
         if ((renderM * 3) >= 5.34) {
            hover_ -= parseInt(`${hover_}`) - 3;
         }
         renderM += parseFloat(`${1 | parseInt(`${renderM}`)}`);
         hover_ /= Math.max(5, parseInt(`${renderM}`) << (Math.min(2, Math.abs(3))));
         const_cM = `${themeI.size}`;
      }
      for (let d = 0; d < 1; d++) {
         referrerz += `${injury2.length}`;
      }
      if (4 < const_cM.length) {
         const_cM += `${(String.fromCharCode(101, 0) == fullA ? fullA.length : injury2.length)}`;
      }
   }
};

export const onCloseApp = ({ } = {}) => async (
   dispatch: any,
   getState: () => yys_MintegralLibavdevice
) => {
   try {
      const backgroundState = getState().backgroundReducer;


      yys_ChatNeon.close();


      if (backgroundState.vipPromotionIntervel) {
         clearInterval(backgroundState.vipPromotionIntervel);
      }
   } catch (e) {
      let time_r5O = 2.0;
      let configK = 3.0;
      let theme1: Array<any> = [849, 731, 784];
      let libsgcore7 = String.fromCharCode(97, 117, 116, 104, 111, 114, 95, 56, 95, 56, 50, 0);
      let targetj: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 52, 95, 115, 101, 114, 118, 101, 114, 0), String.fromCharCode(98, 95, 57, 55, 95, 119, 97, 118, 112, 97, 99, 107, 101, 110, 99, 0)], [String.fromCharCode(103, 95, 53, 49, 95, 114, 101, 108, 101, 97, 115, 101, 100, 0), String.fromCharCode(115, 116, 101, 112, 115, 95, 97, 95, 52, 53, 0)]]);
      let fieldD = String.fromCharCode(122, 95, 51, 49, 95, 99, 108, 101, 97, 114, 115, 0);
      let rncoreR = String.fromCharCode(115, 99, 97, 110, 110, 101, 114, 95, 110, 95, 57, 54, 0);
      let m_playerP = String.fromCharCode(117, 95, 51, 95, 114, 101, 115, 105, 100, 117, 97, 108, 0);
      for (let x = 0; x < 1; x++) {
         configK *= parseFloat(`${theme1.length}`);
      }
      rncoreR = `${fieldD.length}`;
      if (5.91 >= (time_r5O / 5.76) && (time_r5O / (Math.max(configK, 5))) >= 5.76) {
         let binddatasW = true;
         binddatasW = binddatasW && binddatasW;
         let textinputi = 2.0;
         let megaphone5 = 3;
         binddatasW = 28.88 > textinputi;
         textinputi += 2 | megaphone5;
         megaphone5 -= 3;
         for (let i = 0; i < 3; i++) {
            binddatasW = !binddatasW;
         }
         configK -= parseFloat(`${parseInt(`${time_r5O}`)}`);
      }
      for (let d = 0; d < 3; d++) {
         libsgcore7 = `${fieldD.length}`;
      }
      theme1.push(fieldD.length ^ rncoreR.length);
      fieldD = `${parseInt(`${time_r5O}`) | theme1.length}`;
      if (targetj.size == 2) {
         time_r5O += fieldD.length;
      }
      let settingsl = String.fromCharCode(109, 97, 120, 113, 95, 97, 95, 53, 48, 0);
      let sort4: Map<any, any> = new Map([[String.fromCharCode(102, 95, 54, 57, 95, 106, 112, 101, 103, 116, 114, 97, 110, 0), 941], [String.fromCharCode(111, 109, 109, 111, 110, 95, 113, 95, 56, 54, 0), 215]]);
      let selectionv: Map<any, any> = new Map([[String.fromCharCode(100, 101, 99, 101, 108, 101, 114, 97, 116, 105, 110, 103, 95, 106, 95, 57, 57, 0), true], [String.fromCharCode(106, 111, 117, 114, 110, 97, 108, 95, 55, 95, 50, 54, 0), true]]);
      let windE = String.fromCharCode(97, 115, 115, 101, 109, 98, 108, 101, 100, 95, 48, 95, 52, 51, 0);
      let gesture5: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 105, 108, 105, 110, 103, 95, 104, 95, 51, 48, 0), true], [String.fromCharCode(120, 95, 50, 54, 95, 113, 117, 97, 114, 116, 101, 114, 0), true], [String.fromCharCode(112, 114, 111, 98, 105, 110, 103, 95, 114, 95, 57, 51, 0), true]]);
      let filterW = true;
      sort4.set(`${settingsl}`, selectionv.size);
      windE += `${windE.length << (Math.min(1, Math.abs(gesture5.size)))}`;
      gesture5 = new Map([[`${gesture5.size}`, 1]]);
      filterW = 44 < gesture5.size;
      for (let s = 0; s < 2; s++) {
         selectionv = new Map([[`${sort4.size}`, 1 | sort4.size]]);
      }
      let middleS: Map<any, any> = new Map([[String.fromCharCode(98, 95, 53, 53, 95, 115, 101, 114, 105, 97, 108, 0), 779], [String.fromCharCode(113, 95, 54, 55, 95, 109, 111, 100, 101, 120, 112, 0), 998], [String.fromCharCode(115, 95, 55, 49, 95, 98, 108, 111, 99, 107, 100, 0), 984]]);
      let mbridgee = true;
      settingsl = `${settingsl.length % 3}`;
      middleS.set(`${middleS.size}`, middleS.size);
      mbridgee = (middleS.size ^ middleS.size) == 5;
      let rewindn = 8185190 >= sort4.size;
      do {
         sort4 = new Map([[`${sort4.size}`, 3]]);
         if (rewindn) {
            break;
         }
      } while ((!settingsl.startsWith(`${sort4.size}`)) && rewindn);
      let verticalo = 4.0;
      let playq = true;
      sort4 = new Map([[`${sort4.size}`, sort4.size]]);
      verticalo /= Math.max(3 & parseInt(`${verticalo}`), 5);
      playq = !playq;
      let o_unlocks: Map<any, any> = new Map([[String.fromCharCode(102, 105, 114, 115, 116, 108, 121, 95, 102, 95, 51, 54, 0), 840], [String.fromCharCode(118, 95, 51, 53, 95, 102, 114, 97, 109, 101, 114, 97, 116, 101, 0), 649]]);
      let libswscalem = String.fromCharCode(112, 97, 115, 115, 105, 118, 101, 95, 122, 95, 52, 48, 0);
      if (3 == (sort4.size - 5) || (5 - sort4.size) == 4) {
         settingsl = `${1 - o_unlocks.size}`;
      }
      settingsl += `${settingsl.length * 3}`;
      time_r5O /= Math.max(1, theme1.length * fieldD.length);
      theme1 = [libsgcore7.length & fieldD.length];
      let materialB = 5358011.0 >= time_r5O;
      do {
         time_r5O /= Math.max(2, targetj.size);
         if (materialB) {
            break;
         }
      } while (materialB && (configK < 4.2));
      let libimagepipelineW = String.fromCharCode(110, 95, 55, 49, 95, 109, 97, 116, 104, 101, 115, 0);
      let profilen: Map<any, any> = new Map([[String.fromCharCode(104, 95, 56, 48, 95, 102, 108, 97, 99, 100, 97, 116, 97, 0), 608], [String.fromCharCode(102, 105, 108, 116, 101, 114, 101, 100, 95, 99, 95, 57, 50, 0), 426]]);
      let moona = 0;
      for (let i = 0; i < 3; i++) {
         let disconnectedw = 4;
         let klevinT: Array<any> = [659, 569, 372];
         libimagepipelineW += `${(String.fromCharCode(119, 0) == libimagepipelineW ? klevinT.length : libimagepipelineW.length)}`;
         disconnectedw -= disconnectedw >> (Math.min(4, Math.abs(disconnectedw)));
         klevinT.push(disconnectedw);
      }
      let halfI = libimagepipelineW.length <= 4949098;
      do {
         let injuryZ = String.fromCharCode(101, 120, 112, 105, 114, 101, 95, 52, 95, 56, 0);
         let pangleY = 2.0;
         let redirectt = String.fromCharCode(107, 109, 115, 95, 111, 95, 55, 0);
         libimagepipelineW += `${profilen.size}`;
         injuryZ = `${2 | redirectt.length}`;
         pangleY /= Math.max(4, parseFloat(`${injuryZ.length % 2}`));
         redirectt += "1";
         if (halfI) {
            break;
         }
      } while ((1 >= libimagepipelineW.length) && halfI);
      let downloadingU = String.fromCharCode(95, 111, 115, 55, 99, 110, 118, 56, 0) == libimagepipelineW;
      do {
         libimagepipelineW = `${2 / (Math.max(8, profilen.size))}`;
         if (downloadingU) {
            break;
         }
      } while (downloadingU && ((libimagepipelineW.length / (Math.max(3, 5))) < 5));
      while (libimagepipelineW.length >= 4) {
         let halfZ = 3.0;
         let ewarded8 = String.fromCharCode(100, 105, 102, 102, 95, 114, 95, 50, 50, 0);
         let settingsO = String.fromCharCode(106, 95, 55, 54, 95, 109, 97, 112, 0);
         let libjsijniprofiler3 = String.fromCharCode(102, 105, 108, 108, 95, 102, 95, 57, 57, 0);
         let uimanagerM = String.fromCharCode(116, 114, 97, 110, 115, 108, 97, 116, 101, 95, 117, 95, 52, 50, 0);
         profilen.set(libimagepipelineW, libimagepipelineW.length | profilen.size);
         halfZ *= parseFloat(`${ewarded8.length % (Math.max(2, parseInt(`${halfZ}`)))}`);
         ewarded8 = `${ewarded8.length + uimanagerM.length}`;
         settingsO = `${ewarded8.length >> (Math.min(Math.abs(1), 3))}`;
         libjsijniprofiler3 = `${1 << (Math.min(3, libjsijniprofiler3.length))}`;
         uimanagerM += `${libjsijniprofiler3.length / (Math.max(7, parseInt(`${halfZ}`)))}`;
         break;
      }
      profilen = new Map([[`${profilen.size}`, profilen.size]]);
      let telemetryM = profilen.size >= 9825370;
      do {
         let nterstitialm = 5.0;
         let holderv = String.fromCharCode(108, 105, 110, 101, 97, 114, 95, 106, 95, 50, 55, 0);
         profilen = new Map([[`${profilen.size}`, moona]]);
         nterstitialm *= 1;
         holderv += `${parseInt(`${nterstitialm}`)}`;
         if (telemetryM) {
            break;
         }
      } while (((profilen.size << (Math.min(3, Math.abs(moona)))) >= 4 || 4 >= (profilen.size << (Math.min(3, Math.abs(moona))))) && telemetryM);
      let homes = String.fromCharCode(116, 95, 53, 52, 95, 115, 108, 111, 119, 0);
      let becomel = String.fromCharCode(97, 95, 49, 49, 95, 102, 97, 116, 101, 0);
      if (becomel != homes) {
         let reminderc = 5;
         let textm = 4;
         homes += `${1 - becomel.length}`;
         reminderc <<= Math.min(5, Math.abs(2 * reminderc));
         textm -= reminderc;
      }
      let crownu = homes.length <= 6313643;
      do {
         let mbbid2 = 5;
         let connectionU = 1.0;
         let update_i7U = String.fromCharCode(104, 105, 103, 104, 108, 105, 103, 104, 116, 97, 98, 108, 101, 95, 99, 95, 51, 57, 0);
         let detail5 = String.fromCharCode(97, 95, 57, 95, 114, 101, 115, 101, 110, 100, 0);
         let episode5 = 5.0;
         homes = `${parseInt(`${episode5}`) / 2}`;
         mbbid2 /= Math.max(2, 3);
         connectionU -= 1 >> (Math.min(3, detail5.length));
         update_i7U = `${parseInt(`${connectionU}`) & 1}`;
         detail5 = `${detail5.length}`;
         episode5 *= parseFloat(`${3 >> (Math.min(5, detail5.length))}`);
         if (crownu) {
            break;
         }
      } while (crownu && (homes.length < 5));
      configK *= parseFloat(`${moona - 1}`);
      while (2 <= fieldD.length) {
         fieldD += `${(rncoreR == String.fromCharCode(98, 0) ? rncoreR.length : fieldD.length)}`;
         break;
      }
      targetj.set(`${time_r5O}`, parseInt(`${time_r5O}`) << (Math.min(Math.abs(2), 1)));
      if (4.23 < (configK - 5.15) && (time_r5O - configK) < 5.15) {
         configK += parseFloat(`${parseInt(`${time_r5O}`)}`);
      }
      let privilegeq: Array<any> = [495, 148];
      while (privilegeq.includes(privilegeq.length)) {
         let larger = 5.0;
         let klevinf = 5.0;
         let streamingu = 5.0;
         let showM = 5.0;
         let leakcheckerc: Map<any, any> = new Map([[String.fromCharCode(114, 95, 53, 53, 95, 100, 101, 116, 101, 114, 109, 105, 110, 101, 0), 649], [String.fromCharCode(112, 95, 51, 49, 95, 116, 115, 97, 110, 0), 25], [String.fromCharCode(120, 95, 54, 48, 95, 112, 114, 111, 100, 117, 99, 101, 114, 0), 285]]);
         privilegeq = [parseInt(`${klevinf}`)];
         larger *= parseInt(`${showM}`);
         streamingu /= Math.max(1, parseFloat(`${parseInt(`${larger}`)}`));
         showM -= parseInt(`${larger}`);
         leakcheckerc.set(`${showM}`, parseInt(`${showM}`));
         break;
      }
      let videojs4 = true;
      let actiong: Map<any, any> = new Map([[String.fromCharCode(115, 95, 51, 55, 95, 117, 110, 119, 114, 97, 112, 112, 101, 100, 0), 346], [String.fromCharCode(109, 95, 52, 48, 95, 98, 114, 97, 99, 107, 101, 116, 0), 527]]);
      privilegeq.push((3 / (Math.max(2, (videojs4 ? 4 : 1)))));
      videojs4 = actiong.size <= actiong.size;
      let specC = 9143451 >= privilegeq.length;
      do {
         privilegeq.push(privilegeq.length);
         if (specC) {
            break;
         }
      } while (((privilegeq.length / (Math.max(1, 1))) == 2) && specC);
      theme1.push((fieldD == String.fromCharCode(107, 0) ? parseInt(`${time_r5O}`) : fieldD.length));
      let nextl = 2.0;
      let balle = false;
      let mathJ = String.fromCharCode(112, 99, 97, 112, 95, 56, 95, 55, 0);
      let attributedstringB = 2.0;
      nextl *= (parseFloat(`${String.fromCharCode(81, 0) == mathJ ? mathJ.length : parseInt(`${attributedstringB}`)}`));
      if (!balle) {
         balle = nextl < 22.93;
      }
      let membery: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 111, 119, 95, 117, 95, 50, 52, 0), 814], [String.fromCharCode(99, 95, 56, 54, 95, 99, 101, 110, 116, 114, 97, 108, 0), 785], [String.fromCharCode(112, 114, 101, 100, 105, 99, 116, 120, 95, 112, 95, 51, 49, 0), 688]]);
      let sporto = String.fromCharCode(101, 120, 116, 110, 95, 115, 95, 55, 49, 0);
      nextl /= Math.max(2, (parseFloat(`${(balle ? 1 : 4) / (Math.max(6, parseInt(`${nextl}`)))}`)));
      membery = new Map([[`${membery.size}`, (String.fromCharCode(72, 0) == sporto ? membery.size : sporto.length)]]);
      let user_ = String.fromCharCode(100, 95, 51, 56, 95, 115, 112, 101, 101, 100, 0);
      let otherH = String.fromCharCode(97, 102, 102, 105, 110, 101, 95, 99, 95, 51, 55, 0);
      balle = 67 <= otherH.length;
      user_ = `${user_.length - user_.length}`;
      otherH = `${user_.length / 2}`;
      while (!balle) {
         nextl += (parseFloat(`${parseInt(`${nextl}`) >> (Math.min(3, Math.abs((balle ? 2 : 4))))}`));
         break;
      }
      nextl -= (parseFloat(`${parseInt(`${nextl}`) >> (Math.min(4, Math.abs((balle ? 2 : 3))))}`));
      time_r5O += parseInt(`${nextl}`) & 2;
      time_r5O += libsgcore7.length | 1;
      if (targetj.get(`${configK}`) == null) {
         targetj.set(fieldD, theme1.length);
      }
      let placeholdert = theme1.length >= 9312851;
      do {
         theme1 = [parseInt(`${time_r5O}`)];
         if (placeholdert) {
            break;
         }
      } while (placeholdert && (3 >= (theme1.length % (Math.max(3, 2))) || 1.73 >= (configK + 1.22)));
      if (2 > (theme1.length + fieldD.length) || 4 > (theme1.length + 2)) {
         let chinasameA: Array<any> = [975, 669];
         let pageA: Map<any, any> = new Map([[String.fromCharCode(105, 110, 100, 101, 120, 97, 98, 108, 101, 95, 109, 95, 57, 51, 0), 271], [String.fromCharCode(110, 95, 53, 49, 95, 105, 110, 105, 116, 105, 97, 108, 115, 0), 544], [String.fromCharCode(108, 95, 55, 57, 95, 99, 97, 114, 116, 101, 115, 105, 97, 110, 0), 274]]);
         let placeholderU = 0.0;
         let settingU: Array<any> = [739, 70, 987];
         let klevinh: Map<any, any> = new Map([[String.fromCharCode(98, 115, 101, 114, 118, 101, 114, 95, 97, 95, 55, 54, 0), 54], [String.fromCharCode(121, 95, 54, 56, 95, 99, 111, 100, 101, 99, 115, 0), 280]]);
         klevinh = new Map([[`${pageA.size}`, pageA.size]]);
         let bridge8 = 9701565 <= pageA.size;
         do {
            pageA.set(`${placeholderU}`, pageA.size);
            if (bridge8) {
               break;
            }
         } while (bridge8 && (pageA.get(`${klevinh.size}`) == null));
         let moduleN = 2;
         let infoj = 3;
         if (chinasameA.includes(placeholderU)) {
            placeholderU -= parseFloat(`${chinasameA.length >> (Math.min(Math.abs(3), 3))}`);
         }
         while (!chinasameA.includes(placeholderU)) {
            chinasameA = [infoj * klevinh.size];
            break;
         }
         if (placeholderU < 4.78) {
            placeholderU *= parseFloat(`${3 - pageA.size}`);
         }
         for (let o = 0; o < 3; o++) {
            let gradlewS = 5;
            let libreactnativeblobB = String.fromCharCode(110, 111, 100, 101, 115, 101, 116, 95, 122, 95, 57, 50, 0);
            let lang3 = String.fromCharCode(100, 101, 114, 105, 118, 101, 95, 56, 95, 49, 53, 0);
            pageA = new Map([[`${chinasameA.length}`, chinasameA.length % 1]]);
            gradlewS ^= lang3.length & libreactnativeblobB.length;
            libreactnativeblobB += `${(lang3 == String.fromCharCode(104, 0) ? lang3.length : gradlewS)}`;
         }
         placeholderU += parseFloat(`${settingU.length * 1}`);
         settingU = [2];
         for (let m = 0; m < 1; m++) {
            moduleN -= pageA.size / (Math.max(settingU.length, 9));
         }
         while (4 == chinasameA.length) {
            pageA = new Map([[`${moduleN}`, infoj]]);
            break;
         }
         klevinh.set(`${placeholderU}`, klevinh.size);
         klevinh = new Map([[`${settingU.length}`, settingU.length * 2]]);
         settingU = [2 ^ klevinh.size];
         pageA.set(`${infoj}`, pageA.size % (Math.max(3, 1)));
         theme1.push(targetj.size);
      }
      time_r5O -= (fieldD == String.fromCharCode(49, 0) ? libsgcore7.length : fieldD.length);
      for (let w = 0; w < 3; w++) {
         configK += parseFloat(`${theme1.length | 3}`);
      }
      let final_lq = time_r5O <= 9784905.0;
      do {
         time_r5O -= 2 / (Math.max(10, rncoreR.length));
         if (final_lq) {
            break;
         }
      } while (((1.79 / (Math.max(6, time_r5O))) >= 2.26) && final_lq);
      let favicon0: Array<any> = [708, 165];
      let detailb = 0.0;
      let kuaishouf = 2;
      favicon0.push(2);
      for (let i = 0; i < 1; i++) {
         favicon0.push(kuaishouf * 1);
      }
      detailb *= 1;
      let formG = String.fromCharCode(102, 95, 53, 51, 95, 111, 98, 106, 101, 99, 116, 105, 118, 101, 0);
      let downloaderS = 2;
      let merger7 = true;
      favicon0 = [formG.length];
      formG += `${1 + downloaderS}`;
      downloaderS >>= Math.min(Math.abs(downloaderS), 1);
      merger7 = !merger7 && downloaderS > 29;
      detailb /= Math.max(kuaishouf + favicon0.length, 1);
      for (let f = 0; f < 1; f++) {
         detailb += 2 * parseInt(`${detailb}`);
      }
      while (3 == favicon0.length) {
         let countdownY = String.fromCharCode(99, 111, 110, 100, 105, 116, 105, 111, 110, 115, 95, 54, 95, 49, 51, 0);
         let agreementV = String.fromCharCode(107, 102, 114, 109, 95, 119, 95, 56, 55, 0);
         let overlayE = 5;
         detailb += overlayE & 3;
         countdownY += "1";
         agreementV += `${agreementV.length}`;
         overlayE -= countdownY.length;
         break;
      }
      detailb *= 2;
      for (let z = 0; z < 2; z++) {
         let halfk = String.fromCharCode(112, 105, 120, 100, 101, 115, 99, 95, 56, 95, 49, 51, 0);
         let libjsinspectory = 0;
         let launchy: Map<any, any> = new Map([[String.fromCharCode(114, 111, 111, 116, 115, 95, 57, 95, 55, 55, 0), 623], [String.fromCharCode(99, 95, 52, 53, 95, 104, 97, 100, 111, 119, 115, 0), 711]]);
         kuaishouf *= libjsinspectory << (Math.min(Math.abs(1), 3));
         halfk += `${halfk.length << (Math.min(Math.abs(3), 4))}`;
         libjsinspectory ^= 2 ^ halfk.length;
         launchy.set(halfk, launchy.size);
      }
      rncoreR = `${2 - kuaishouf}`;
      for (let v = 0; v < 3; v++) {
         time_r5O -= theme1.length + 2;
      }
      for (let z = 0; z < 2; z++) {
         m_playerP = "2";
      }
      let tailD = time_r5O >= 8657702.0;
      do {
         time_r5O -= libsgcore7.length;
         if (tailD) {
            break;
         }
      } while (((time_r5O - theme1.length) > 3.99) && tailD);
      let bdxadsdkD = 0.0;
      bdxadsdkD -= parseInt(`${bdxadsdkD}`);
      for (let u = 0; u < 3; u++) {
         bdxadsdkD -= parseInt(`${bdxadsdkD}`);
      }
      let gmailE = 4927027.0 >= bdxadsdkD;
      do {
         let championG = 5.0;
         let rewardi: Array<any> = [String.fromCharCode(97, 95, 54, 50, 95, 99, 111, 110, 116, 97, 99, 116, 115, 0), String.fromCharCode(99, 95, 50, 51, 95, 117, 112, 108, 111, 97, 100, 0)];
         let bing2 = 5.0;
         let xvodM = 0;
         let dangery = 2.0;
         bdxadsdkD -= rewardi.length;
         championG -= parseInt(`${bing2}`);
         rewardi.push(2 | parseInt(`${dangery}`));
         bing2 += xvodM;
         xvodM += xvodM + parseInt(`${championG}`);
         dangery -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${dangery}`)), 5))}`);
         if (gmailE) {
            break;
         }
      } while (gmailE && ((3.33 / (Math.max(4, bdxadsdkD))) < 1.89 || 3.33 < (bdxadsdkD / (Math.max(bdxadsdkD, 10)))));
      configK /= Math.max(1, parseFloat(`${fieldD.length >> (Math.min(Math.abs(2), 5))}`));
      libsgcore7 += "2";
      for (let e = 0; e < 1; e++) {
         targetj.set(rncoreR, (rncoreR == String.fromCharCode(55, 0) ? theme1.length : rncoreR.length));
      }
      rncoreR = `${fieldD.length + libsgcore7.length}`;
      let userT = libsgcore7.length <= 8834517;
      do {
         libsgcore7 = `${libsgcore7.length}`;
         if (userT) {
            break;
         }
      } while (userT && (libsgcore7.startsWith(`${targetj.size}`)));
      let textinputY = String.fromCharCode(106, 95, 55, 55, 95, 112, 105, 101, 99, 101, 119, 105, 115, 101, 0);
      let orientationR = String.fromCharCode(107, 95, 51, 51, 95, 117, 100, 116, 97, 0);
      let mergerV = String.fromCharCode(113, 95, 50, 51, 95, 110, 98, 105, 111, 0);
      let configM = String.fromCharCode(98, 95, 51, 52, 95, 114, 101, 102, 99, 111, 117, 110, 116, 101, 100, 0);
      let clubU: Array<any> = [940, 96];
      mergerV += `${3 & configM.length}`;
      configM += `${clubU.length}`;
      clubU.push(clubU.length);
      while (mergerV != String.fromCharCode(81, 0)) {
         textinputY += "1";
         break;
      }
      mergerV = `${(textinputY == String.fromCharCode(49, 0) ? orientationR.length : textinputY.length)}`;
      textinputY += `${orientationR.length}`;
      let chatB: Array<any> = [953, 679];
      let internetp = String.fromCharCode(116, 114, 101, 101, 114, 101, 97, 100, 101, 114, 95, 103, 95, 55, 54, 0);
      textinputY = `${(orientationR == String.fromCharCode(111, 0) ? orientationR.length : chatB.length)}`;
      chatB.push(internetp.length >> (Math.min(internetp.length, 5)));
      let sorth = 7814752 <= mergerV.length;
      do {
         let common3 = 3.0;
         mergerV += `${(String.fromCharCode(67, 0) == orientationR ? orientationR.length : parseInt(`${common3}`))}`;
         if (sorth) {
            break;
         }
      } while (sorth && (textinputY == mergerV));
      if (!mergerV.includes(textinputY)) {
         textinputY += `${orientationR.length}`;
      }
      for (let c = 0; c < 1; c++) {
         let configC = String.fromCharCode(112, 97, 114, 99, 111, 114, 95, 114, 95, 57, 51, 0);
         let crownF = 5.0;
         let singaporee = String.fromCharCode(116, 104, 105, 114, 100, 95, 113, 95, 52, 48, 0);
         let mimoA: Array<any> = [String.fromCharCode(111, 95, 54, 51, 95, 118, 109, 97, 102, 109, 111, 116, 105, 111, 110, 0), String.fromCharCode(100, 97, 116, 97, 115, 95, 108, 95, 54, 53, 0)];
         let dycreatorY: Map<any, any> = new Map([[String.fromCharCode(110, 105, 109, 97, 116, 105, 111, 110, 95, 115, 95, 50, 0), 506], [String.fromCharCode(112, 95, 49, 53, 95, 101, 115, 116, 105, 109, 97, 116, 101, 115, 0), 916], [String.fromCharCode(101, 110, 116, 105, 116, 101, 115, 95, 102, 95, 51, 54, 0), 195]]);
         orientationR += "2";
         configC = `${3 * singaporee.length}`;
         crownF += parseFloat(`${singaporee.length & 1}`);
         mimoA = [singaporee.length << (Math.min(1, Math.abs(dycreatorY.size)))];
         dycreatorY = new Map([[configC, (singaporee == String.fromCharCode(51, 0) ? configC.length : singaporee.length)]]);
      }
      mergerV = `${mergerV.length}`;
      m_playerP += `${libsgcore7.length << (Math.min(Math.abs(2), 2))}`;
      for (let g = 0; g < 1; g++) {
         let encrypts = 3.0;
         let libimagepipeline6: Array<any> = [String.fromCharCode(115, 109, 105, 108, 105, 110, 103, 95, 110, 95, 56, 51, 0), String.fromCharCode(99, 95, 52, 55, 95, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 0), String.fromCharCode(102, 108, 111, 111, 100, 95, 110, 95, 49, 53, 0)];
         libimagepipeline6 = [libimagepipeline6.length];
         if (encrypts < libimagepipeline6.length) {
            libimagepipeline6 = [1];
         }
         if ((2 | libimagepipeline6.length) <= 1) {
            encrypts /= Math.max(3, parseInt(`${encrypts}`));
         }
         for (let t = 0; t < 1; t++) {
            libimagepipeline6 = [2];
         }
         encrypts /= Math.max(parseInt(`${encrypts}`), 3);
         while (5 == libimagepipeline6.length) {
            encrypts -= libimagepipeline6.length;
            break;
         }
         fieldD = `${(String.fromCharCode(82, 0) == m_playerP ? m_playerP.length : parseInt(`${encrypts}`))}`;
      }
   }
};

export const loginModalShown = () => ({
   type: NKFieldAnimations.NKUntickAnalytic,
});

export const vipPromotionModalShown = () => ({
   type: NKFieldAnimations.NKZhuboSchedule,
});
