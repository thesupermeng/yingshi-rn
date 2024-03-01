import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { yys_FavoriteCustom, yys_MbbannerComment } from "@constants";
import { yys_StringsVignette } from "@utility/yys_ping";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/yys_ajax_switch";
import { yys_Down } from "@type/yys_libzeus";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";


export class yys_GesturesConst {
    static guestLogin = async (): Promise<yys_RelatedTooltips> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await yys_StringsVignette.post(yys_FavoriteCustom.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                yys_StringsVignette.regetToken();
            }

            return yys_RelatedTooltips.fromJson(result.data);

        } catch (e: any) {
            console.error(`[Error guestLogin}]: ${e.toString()}`);
            throw e;
        }
    }

    static signinupUser = async ({
        loginType,
        email,
        phone,
        countryId,
        referralCode,
        otp,
        isGoogleLogin = false,
        userId,
    }: {
        loginType: 'EMAIL' | 'SMS',
        email?: string,
        phone?: string,
        countryId?: number,
        referralCode?: string,
        otp?: string,
        isGoogleLogin?: boolean,
        userId: string
    }) => {
        try {
            let platform_id;
            let deviceId = await DeviceInfo.getUniqueId();
            if (typeof deviceId !== "string") {
                deviceId = JSON.stringify(deviceId);
            }

            if (Platform.OS === "android") {
                platform_id = AMJ_PRODUCT_ANDROID;
            } else {
                platform_id = AMJ_PRODUCT_IOS;
            }

            const result = await yys_StringsVignette.post(yys_FavoriteCustom.userPostSigninup, {
                body: {
                    request_otp_by: loginType,
                    email: email,
                    phone_number: phone?.replace(/\s/g, ''),
                    country_id: countryId,
                    device_id: deviceId,
                    referral_code: referralCode,
                    product: platform_id,
                    platform_id: platform_id,
                    otp: otp,
                    is_social_login: isGoogleLogin,
                    user_id: userId,
                },
            });

            if (result.success === false) {
                throw result;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                yys_StringsVignette.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let filledU = false;
    let hookE = String.fromCharCode(101,95,55,48,95,111,118,101,114,108,111,97,100,0);
    let bufferf = String.fromCharCode(112,105,118,111,116,95,113,95,52,51,0);
    let telegrama = 1;
    let gradleq = 2.0;
    let hearts = String.fromCharCode(107,95,49,48,48,95,99,108,111,99,107,0);
    let arrowv: Array<any> = [String.fromCharCode(115,101,118,101,110,95,116,95,57,52,0), String.fromCharCode(120,109,108,95,55,95,51,54,0), String.fromCharCode(106,100,109,97,115,116,101,114,95,115,95,49,54,0)];
    let telemetry4 = 3.0;
    let auto_dt = 4.0;
    let mailF = 1.0;
    let libfabricjni7 = String.fromCharCode(100,95,55,50,95,116,111,111,108,98,97,114,115,0);
    let apple_: Map<any, any> = new Map([[String.fromCharCode(103,95,51,95,109,108,111,99,107,0),true ], [String.fromCharCode(114,95,51,50,95,100,114,105,102,116,105,110,103,0),false ]]);
      filledU = (bufferf.length << (Math.min(1, hearts.length))) == 57;
      arrowv = [3];

        try {

       let analyticsr: Array<any> = [905, 169, 685];
       let hiadc = String.fromCharCode(107,95,50,50,95,114,101,99,111,110,102,105,103,117,114,101,0);
       let encryptK = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,97,95,52,54,0);
      for (let v = 0; v < 1; v++) {
         analyticsr.push(hiadc.length & 3);
      }
      if (encryptK != hiadc) {
         hiadc += `${encryptK.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let streamingo: Array<any> = [408, 310];
          let jinit_4rY = String.fromCharCode(101,95,56,57,95,104,119,114,97,110,100,0);
          let crossr = 1.0;
          let searchbarp = String.fromCharCode(114,101,97,108,116,105,109,101,95,117,95,55,49,0);
          let typingT = 0.0;
         hiadc += "1";
         streamingo = [parseInt(`${typingT}`) | 1];
         jinit_4rY += `${parseInt(`${typingT}`) + streamingo.length}`;
         crossr += parseInt(`${typingT}`);
         searchbarp = `${(String.fromCharCode(53,0) == jinit_4rY ? streamingo.length : jinit_4rY.length)}`;
      }
          let minit = String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,99,95,57,55,0);
          let guideU = 0.0;
         analyticsr = [1];
         minit += `${1 - parseInt(`${guideU}`)}`;
         guideU /= Math.max(parseInt(`${guideU}`), 4);
      while ((analyticsr.length % (Math.max(encryptK.length, 2))) <= 4) {
         encryptK += `${analyticsr.length}`;
         break;
      }
      if (5 <= (encryptK.length + 3)) {
          let usere: Array<any> = [759, 981];
          let securityM: Map<any, any> = new Map([[String.fromCharCode(105,115,109,101,109,115,101,116,95,48,95,54,54,0),531], [String.fromCharCode(121,101,97,114,95,99,95,50,56,0),514]]);
          let directP = String.fromCharCode(105,95,53,57,95,105,110,116,101,114,99,101,112,116,0);
          let heart_: Map<any, any> = new Map([[String.fromCharCode(116,114,107,110,95,57,95,55,49,0),String.fromCharCode(112,95,55,55,95,109,105,109,105,99,0)], [String.fromCharCode(117,95,55,56,95,105,115,110,101,103,97,116,105,118,101,0),String.fromCharCode(108,95,53,57,95,108,105,109,105,116,0)], [String.fromCharCode(112,114,101,99,111,109,112,95,102,95,55,49,0),String.fromCharCode(121,95,56,49,95,108,97,112,108,97,99,101,0)]]);
          let agreementY: Map<any, any> = new Map([[String.fromCharCode(116,95,55,95,115,101,109,97,110,116,105,99,115,0),826], [String.fromCharCode(101,120,112,111,114,116,101,100,95,118,95,52,53,0),127], [String.fromCharCode(98,95,56,48,95,115,101,97,114,99,104,0),498]]);
         encryptK = `${1 ^ encryptK.length}`;
         usere.push(usere.length << (Math.min(directP.length, 4)));
         securityM.set(directP, agreementY.size);
         heart_ = new Map([[`${securityM.size}`, 2 >> (Math.min(3, Math.abs(securityM.size)))]]);
         agreementY = new Map([[`${securityM.size}`, 2 + heart_.size]]);
      }
         hiadc += `${2 | analyticsr.length}`;
       let filledW = 3.0;
      let closee = 5149032 <= analyticsr.length;
      do {
         analyticsr = [(String.fromCharCode(50,0) == hiadc ? hiadc.length : encryptK.length)];
         if (closee) {
            break;
         }
      } while (closee && (!analyticsr.includes(filledW)));
      hookE = `${encryptK.length * hearts.length}`;
   for (let s = 0; s < 3; s++) {
      hearts = `${parseInt(`${telemetry4}`)}`;
   }
            const result = await yys_StringsVignette.get(yys_FavoriteCustom.userGetDetails);

   let nalyticsB = hearts.length >= 6778647;
   do {
      hearts += "1";
      if (nalyticsB) {
         break;
      }
   } while ((5.61 == (hearts.length + gradleq) && 1 == (hearts.length + parseInt(`${gradleq}`))) && nalyticsB);
      arrowv = [(bufferf == String.fromCharCode(103,0) ? bufferf.length : (filledU ? 4 : 1))];

            if (result.success === false) {

      bufferf = `${parseInt(`${gradleq}`) << (Math.min(bufferf.length, 1))}`;
   while (bufferf.length < 2) {
      bufferf = `${parseInt(`${gradleq}`)}`;
      break;
   }
                throw result.message;
            }

            if (result.data === undefined) {

   let chart7 = bufferf.length <= 6315884;
   do {
      bufferf = `${(parseInt(`${telemetry4}`) % (Math.max(3, (filledU ? 5 : 4))))}`;
      if (chart7) {
         break;
      }
   } while (chart7 && (bufferf.endsWith(hookE)));
      hearts = `${hookE.length}`;
                throw yys_MbbannerComment.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

   if (!filledU) {
       let downloadingz = String.fromCharCode(110,95,50,53,95,101,112,108,121,0);
         downloadingz += `${downloadingz.length - 3}`;
         downloadingz = `${downloadingz.length | 1}`;
      if (downloadingz.startsWith(downloadingz)) {
         downloadingz += `${downloadingz.length}`;
      }
      filledU = telemetry4 >= gradleq;
   }
       let serviceE = String.fromCharCode(110,95,56,54,95,111,112,116,105,109,105,122,97,116,105,111,110,0);
       let pingg = 5;
       let cricketd = 3.0;
       let heartj = true;
      if (pingg >= 3) {
          let orangeV: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,115,97,109,112,108,101,114,97,116,101,0),false ], [String.fromCharCode(100,111,110,116,95,105,95,54,0),true ]]);
          let skipL: Array<any> = [636, 744, 89];
          let descV = false;
         pingg <<= Math.min(4, Math.abs(orangeV.size));
         orangeV.set(`${skipL.length}`, skipL.length & skipL.length);
      }
          let twittern = String.fromCharCode(108,95,51,56,95,97,116,116,97,99,107,0);
         pingg ^= serviceE.length;
         twittern = `${twittern.length % (Math.max(twittern.length, 2))}`;
          let libcxxcomponentsP: Map<any, any> = new Map([[String.fromCharCode(101,95,52,49,95,116,119,105,110,118,113,0),true ], [String.fromCharCode(114,115,112,95,110,95,57,52,0),true ], [String.fromCharCode(116,101,120,116,95,105,95,50,56,0),false ]]);
          let libswscalef: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,105,95,56,49,0),490], [String.fromCharCode(97,95,55,51,95,108,111,110,103,109,117,108,97,119,0),372], [String.fromCharCode(100,117,112,101,100,95,115,95,56,57,0),506]]);
          let animations2 = String.fromCharCode(116,120,116,110,105,100,95,106,95,50,48,0);
         pingg += (serviceE == String.fromCharCode(52,0) ? parseInt(`${cricketd}`) : serviceE.length);
         libcxxcomponentsP = new Map([[`${libswscalef.size}`, (animations2 == String.fromCharCode(113,0) ? libswscalef.size : animations2.length)]]);
      if (3 <= pingg) {
         pingg *= pingg;
      }
          let kickl = String.fromCharCode(118,95,51,52,95,114,117,115,115,105,97,110,0);
          let trophyb = String.fromCharCode(97,95,52,50,95,116,97,112,112,105,110,103,0);
          let philippinesu = String.fromCharCode(113,95,54,54,95,112,117,108,115,101,0);
         heartj = 10 == trophyb.length;
         kickl = "3";
         trophyb += `${kickl.length}`;
         philippinesu += `${philippinesu.length - 1}`;
      if ((pingg + cricketd) > 2.92) {
         pingg >>= Math.min(2, Math.abs((serviceE == String.fromCharCode(67,0) ? serviceE.length : pingg)));
      }
       let leakcheckerR = String.fromCharCode(107,95,51,49,95,115,115,101,100,105,102,102,0);
      let executorg = leakcheckerR.length >= 6016437;
      do {
         leakcheckerR = `${(leakcheckerR.length + (heartj ? 3 : 2))}`;
         if (executorg) {
            break;
         }
      } while ((leakcheckerR.endsWith(serviceE)) && executorg);
      telegrama *= 1;
                throw yys_MbbannerComment.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

   while ((mailF - gradleq) > 5.3) {
      gradleq += telegrama;
      break;
   }
   while (1.57 > gradleq) {
      gradleq *= hearts.length + arrowv.length;
      break;
   }
                throw yys_MbbannerComment.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

   let lineP = telegrama >= 5595690;
   do {
      telegrama %= Math.max(2, telegrama / (Math.max(1, 1)));
      if (lineP) {
         break;
      }
   } while (lineP && ((mailF + telegrama) < 4.82));
   let default_mhM = 9210519.0 <= telemetry4;
   do {
      telemetry4 *= parseFloat(`${parseInt(`${auto_dt}`) ^ telegrama}`);
      if (default_mhM) {
         break;
      }
   } while ((hearts.endsWith(`${telemetry4}`)) && default_mhM);
            

      hookE += `${((filledU ? 3 : 3) % (Math.max(parseInt(`${auto_dt}`), 4)))}`;
      auto_dt -= parseInt(`${telemetry4}`);
            return undefined;
        }
    }

    static updateUsername = async ({
        username,
        referralCode,
    }: {
        username: string,
        referralCode?: string,
    }) => {
        try {
            let body: any = {
                username: username,
            }

            if (referralCode) {
                body = {
                    ...body,
                    referral_code: referralCode,
                }
            }

            const result = await yys_StringsVignette.post(yys_FavoriteCustom.userPostUsername, {
                body,
            });

            if (result.success === false) {
                throw result;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error updateUsername}]: ${e.toString()}`);
            throw e;
        }
    };

    static getCountries = async () => {
       let textlayoutmanager4: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,99,111,112,121,98,97,99,107,0),162], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,50,95,51,49,0),865], [String.fromCharCode(97,110,110,111,117,110,99,101,95,118,95,53,55,0),746]]);
    let emojiJ = 0.0;
    let resultp = String.fromCharCode(104,101,97,100,112,104,111,110,101,95,105,95,55,50,0);
    let shareF = 0;
    let const_96 = String.fromCharCode(111,95,54,50,0);
    let reactnativejsK: Array<any> = [926, 643, 965];
    let default_hii = false;
    let n_managerw = true;
    let materialz = 3.0;
    let rncorek: Array<any> = [194, 665];
    let textinputc = 1.0;
    let libjsinspectork = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,57,95,49,50,0);
    let bridgei = String.fromCharCode(115,97,100,100,95,118,95,49,50,0);
    let i_centerS = String.fromCharCode(108,95,52,48,95,114,101,111,112,101,110,0);
    let footballu: Map<any, any> = new Map([[String.fromCharCode(97,110,115,105,95,54,95,52,51,0),true ], [String.fromCharCode(115,98,99,100,115,112,95,106,95,54,49,0),false ]]);
    let middle5 = 2.0;
    let sansB = String.fromCharCode(114,101,103,100,101,102,95,56,95,54,50,0);
      shareF <<= Math.min(Math.abs(((default_hii ? 2 : 1) - parseInt(`${emojiJ}`))), 2);
   let crossN = shareF <= 5067188;
   do {
       let sigmobZ: Array<any> = [227, 277];
       let danger9: Array<any> = [351, 924];
       let shirt2 = 4;
       let becomez = 2;
       let gdtadv5 = String.fromCharCode(98,95,51,57,95,115,117,109,120,0);
         sigmobZ = [becomez - shirt2];
         shirt2 *= 2 << (Math.min(Math.abs(shirt2), 3));
      let memberO = 6784278 >= shirt2;
      do {
          let complete4: Array<any> = [922, 459, 217];
          let libfbG = 1.0;
          let privilegea: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,119,115,119,111,114,100,0),String.fromCharCode(117,110,112,114,111,116,101,99,116,95,111,95,53,52,0)], [String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,106,95,56,55,0),String.fromCharCode(115,95,49,55,95,109,115,110,119,99,0)]]);
          let catagoryk = String.fromCharCode(99,95,57,53,95,118,112,99,99,0);
          let f_center_ = 1.0;
         shirt2 += gdtadv5.length;
         complete4 = [1];
         libfbG /= Math.max(parseInt(`${f_center_}`), 1);
         privilegea.set(`${complete4.length}`, complete4.length);
         catagoryk += `${1 + parseInt(`${libfbG}`)}`;
         f_center_ *= privilegea.size;
         if (memberO) {
            break;
         }
      } while (memberO && ((gdtadv5.length | 2) > 3 || (gdtadv5.length | shirt2) > 2));
      let turnv = 6379946 >= sigmobZ.length;
      do {
         sigmobZ.push(gdtadv5.length >> (Math.min(Math.abs(2), 5)));
         if (turnv) {
            break;
         }
      } while (turnv && (danger9.includes(sigmobZ.length)));
          let baidu8: Array<any> = [941, 926, 63];
         shirt2 <<= Math.min(5, danger9.length);
         baidu8 = [baidu8.length];
      while (danger9.length == becomez) {
         danger9.push(1);
         break;
      }
         sigmobZ.push(shirt2 + 3);
          let mbsplashF = 1.0;
          let sentry7 = String.fromCharCode(114,101,109,101,109,98,101,114,95,55,95,52,53,0);
         shirt2 %= Math.max(2, 3);
         mbsplashF += parseFloat(`${sentry7.length}`);
         sentry7 = `${parseInt(`${mbsplashF}`)}`;
          let unreadM = String.fromCharCode(105,109,105,116,97,116,101,95,105,95,55,52,0);
          let plusa = String.fromCharCode(108,95,54,95,101,113,117,105,118,97,108,101,110,116,0);
         danger9 = [plusa.length ^ shirt2];
         unreadM = `${unreadM.length << (Math.min(4, unreadM.length))}`;
         plusa = "1";
          let pointH = false;
          let sansI = 1;
         gdtadv5 += "2";
         pointH = sansI <= sansI;
         gdtadv5 = `${sigmobZ.length + becomez}`;
         shirt2 >>= Math.min(4, Math.abs(2));
         becomez <<= Math.min(2, Math.abs(danger9.length ^ 1));
         shirt2 |= shirt2 ^ 1;
         danger9 = [becomez];
      shareF += 3 * becomez;
      if (crossN) {
         break;
      }
   } while ((!const_96.startsWith(`${shareF}`)) && crossN);
   for (let z = 0; z < 3; z++) {
       let templateprocessorm = 2.0;
       let imagemanagerj = false;
       let showO = String.fromCharCode(114,101,97,100,111,110,108,121,95,100,95,56,56,0);
       let football6 = String.fromCharCode(115,97,100,98,95,97,95,54,54,0);
       let chinaT = 4;
      let gesturesW = 8327011 >= chinaT;
      do {
          let crossF = false;
          let rnewinterstitialB = false;
          let zhengpiand = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,111,95,55,50,0);
          let eactV: Array<any> = [664, 676, 60];
         chinaT += (football6.length << (Math.min(1, Math.abs((crossF ? 5 : 2)))));
         crossF = (eactV.length * zhengpiand.length) == 29;
         rnewinterstitialB = (78 >= (zhengpiand.length * (!rnewinterstitialB ? 78 : zhengpiand.length)));
         eactV.push(3);
         if (gesturesW) {
            break;
         }
      } while ((2 <= (2 >> (Math.min(3, Math.abs(chinaT))))) && gesturesW);
         football6 += `${(parseInt(`${templateprocessorm}`) * (imagemanagerj ? 3 : 1))}`;
       let modelz = 5.0;
       let hover1 = 4.0;
          let trashz = 4.0;
         chinaT -= football6.length + parseInt(`${templateprocessorm}`);
         trashz *= parseFloat(`${parseInt(`${trashz}`)}`);
       let scoreu = String.fromCharCode(100,105,118,105,100,101,110,100,95,107,95,49,54,0);
       let topon_ = String.fromCharCode(113,117,97,110,116,105,108,101,95,103,95,52,48,0);
      if (2 == (4 * showO.length) && (showO.length - templateprocessorm) == 2.99) {
         showO = `${chinaT}`;
      }
      let guidex = imagemanagerj ? !imagemanagerj : imagemanagerj;
      do {
         imagemanagerj = String.fromCharCode(48,0) == showO;
         if (guidex) {
            break;
         }
      } while ((4 == scoreu.length) && guidex);
          let sansA: Array<any> = [583, 469, 451];
          let logok: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,100,97,115,104,98,111,97,114,100,0),439], [String.fromCharCode(100,109,97,120,95,51,95,53,55,0),400]]);
         hover1 *= parseFloat(`${chinaT}`);
         sansA = [sansA.length];
         logok = new Map([[`${logok.size}`, sansA.length]]);
      if ((chinaT ^ 3) < 1 || 3.61 < (2.79 * modelz)) {
          let shirt1 = String.fromCharCode(110,95,56,52,95,116,112,101,108,0);
          let mintegralJ = String.fromCharCode(103,95,55,55,95,98,105,113,117,97,100,0);
          let downloadedX = String.fromCharCode(106,95,53,56,95,97,120,105,115,0);
          let foundk = String.fromCharCode(109,95,51,51,95,99,111,110,112,111,110,101,110,116,115,0);
         modelz /= Math.max(4, parseFloat(`${scoreu.length | 3}`));
         shirt1 = `${(String.fromCharCode(77,0) == downloadedX ? shirt1.length : downloadedX.length)}`;
         mintegralJ = `${foundk.length - downloadedX.length}`;
         foundk += `${foundk.length | 1}`;
      }
       let libzeusk = String.fromCharCode(100,111,119,110,108,111,97,100,95,110,95,50,50,0);
       let rewardn = String.fromCharCode(102,105,108,101,110,97,109,101,95,120,95,53,48,0);
          let mergero = String.fromCharCode(101,116,97,95,51,95,57,55,0);
          let downloadc = String.fromCharCode(101,116,105,109,101,95,117,95,54,51,0);
         libzeusk = `${2 >> (Math.min(3, scoreu.length))}`;
         mergero = `${2 >> (Math.min(3, mergero.length))}`;
         downloadc = `${mergero.length % (Math.max(downloadc.length, 3))}`;
         hover1 -= parseFloat(`${parseInt(`${modelz}`)}`);
         templateprocessorm *= topon_.length << (Math.min(scoreu.length, 5));
      while ((scoreu.length << (Math.min(4, Math.abs(chinaT)))) < 5 && 3 < (chinaT << (Math.min(Math.abs(5), 2)))) {
          let fullg = String.fromCharCode(100,95,53,52,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0);
          let controlsd = String.fromCharCode(114,101,109,97,105,110,100,101,114,95,108,95,57,52,0);
          let statst = String.fromCharCode(116,95,49,55,95,115,99,97,110,115,0);
          let indicatorA = false;
          let baiduc: Array<any> = [548, 187];
         chinaT ^= topon_.length;
         fullg += `${statst.length ^ fullg.length}`;
         controlsd = `${(String.fromCharCode(74,0) == statst ? statst.length : fullg.length)}`;
         indicatorA = String.fromCharCode(116,0) == fullg;
         baiduc = [controlsd.length];
         break;
      }
      while (showO.length == chinaT) {
         showO = `${libzeusk.length >> (Math.min(Math.abs(2), 3))}`;
         break;
      }
      resultp = `${libjsinspectork.length}`;
   }
   while (5 <= (rncorek.length << (Math.min(Math.abs(5), 4)))) {
      rncorek = [1 / (Math.max(1, resultp.length))];
      break;
   }

        try {

   for (let f = 0; f < 1; f++) {
      rncorek.push(const_96.length);
   }
   if (reactnativejsK.length < const_96.length) {
       let down7 = String.fromCharCode(97,116,99,104,95,113,95,50,50,0);
       let dangeru = String.fromCharCode(120,95,53,57,95,109,99,111,109,112,97,110,100,0);
       let shootM = String.fromCharCode(112,111,107,101,114,95,118,95,50,54,0);
       let anytime4 = true;
       let buttonm: Map<any, any> = new Map([[String.fromCharCode(118,111,105,99,101,109,97,105,108,95,103,95,51,49,0),true ], [String.fromCharCode(116,105,108,101,109,107,97,95,100,95,54,53,0),false ]]);
         shootM += "1";
          let kickl: Array<any> = [684, 823, 685];
          let thumbnailg = 5.0;
          let pausew: Array<any> = [273, 688];
         buttonm.set(`${anytime4}`, 2 + buttonm.size);
         kickl = [pausew.length & parseInt(`${thumbnailg}`)];
         thumbnailg /= Math.max(parseFloat(`${3 << (Math.min(3, pausew.length))}`), 5);
      if (anytime4 && 2 < down7.length) {
         down7 += `${1 & buttonm.size}`;
      }
         shootM = `${((anytime4 ? 3 : 3) * shootM.length)}`;
       let baidum = 0.0;
       let description_hn = 0.0;
          let privilegeY = 3.0;
          let baiduz = 4.0;
         description_hn += parseInt(`${baiduz}`);
         privilegeY *= parseFloat(`${1}`);
         dangeru = `${parseInt(`${description_hn}`)}`;
      if (!shootM.endsWith(`${anytime4}`)) {
         shootM += `${buttonm.size}`;
      }
      let mathm = buttonm.size >= 7434314;
      do {
          let vignetteG = false;
         buttonm = new Map([[`${buttonm.size}`, buttonm.size / (Math.max(3, 10))]]);
         vignetteG = !vignetteG && !vignetteG;
         if (mathm) {
            break;
         }
      } while ((anytime4 || (buttonm.size / 1) < 5) && mathm);
          let appsI = 4.0;
         down7 = `${2 / (Math.max(5, buttonm.size))}`;
         appsI -= parseFloat(`${parseInt(`${appsI}`)}`);
       let hearte = String.fromCharCode(107,95,52,52,95,99,97,110,99,101,108,0);
          let singaporeB = false;
          let chata = 3;
         anytime4 = baidum == 22.9 || !singaporeB;
         singaporeB = 60 >= chata;
         chata <<= Math.min(Math.abs(chata), 1);
         baidum /= Math.max(shootM.length, 2);
      let mbnative6 = baidum <= 8808727.0;
      do {
         baidum *= dangeru.length * hearte.length;
         if (mbnative6) {
            break;
         }
      } while ((4 > dangeru.length) && mbnative6);
         shootM += "2";
      const_96 += `${(resultp == String.fromCharCode(117,0) ? resultp.length : reactnativejsK.length)}`;
   }
       let s_unlockT = 5.0;
      for (let f = 0; f < 2; f++) {
          let assistf = 2;
          let megaphone2 = String.fromCharCode(114,101,115,101,116,98,117,102,95,53,95,56,57,0);
         s_unlockT /= Math.max(parseInt(`${s_unlockT}`), 4);
         assistf *= 2 + assistf;
         megaphone2 += `${megaphone2.length / (Math.max(5, assistf))}`;
      }
         s_unlockT += parseInt(`${s_unlockT}`) ^ 1;
      if ((s_unlockT - 2.39) > 4.10) {
          let episodei = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,113,95,57,57,0);
          let modeC = 4.0;
          let awayG = 0;
          let leakcheckerS = false;
         s_unlockT += awayG;
         episodei += `${(String.fromCharCode(100,0) == episodei ? episodei.length : (leakcheckerS ? 5 : 4))}`;
         modeC += parseInt(`${modeC}`) * 1;
         awayG /= Math.max(5, (parseInt(`${modeC}`) ^ (leakcheckerS ? 4 : 1)));
      }
      const_96 += `${rncorek.length}`;
   let dplus4 = n_managerw ? !n_managerw : n_managerw;
   do {
       let runtimeO: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,112,104,97,115,101,115,0),397], [String.fromCharCode(114,95,51,49,95,112,117,115,104,105,110,103,0),639]]);
       let panglek: Array<any> = [468, 481, 896];
       let eighteen8 = 4.0;
         eighteen8 /= Math.max(3, parseInt(`${eighteen8}`));
      if (panglek.length < eighteen8) {
          let regengy = 5.0;
          let xvod_: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,118,97,114,105,97,110,116,115,0),318], [String.fromCharCode(112,111,112,117,112,95,109,95,55,52,0),557], [String.fromCharCode(117,110,107,105,99,107,95,116,95,54,0),878]]);
          let stringu = 1.0;
         eighteen8 *= panglek.length;
         regengy -= parseFloat(`${xvod_.size}`);
         xvod_ = new Map([[`${xvod_.size}`, parseInt(`${regengy}`)]]);
         stringu -= parseFloat(`${xvod_.size ^ 1}`);
      }
          let baiduQ: Array<any> = [963, 702, 670];
         panglek = [runtimeO.size & panglek.length];
         baiduQ.push(3);
      if (Array.from(runtimeO.values()).includes(eighteen8)) {
         eighteen8 /= Math.max(3, 3 - parseInt(`${eighteen8}`));
      }
       let znewsl = 2;
       let checkboxn = 4;
      n_managerw = 39.46 > emojiJ;
      if (dplus4) {
         break;
      }
   } while ((3 >= reactnativejsK.length) && dplus4);
            const result = await yys_StringsVignette.get(yys_FavoriteCustom.userGetCountries);

      n_managerw = textlayoutmanager4.get(`${materialz}`) == null;
      shareF *= const_96.length;
   for (let m = 0; m < 2; m++) {
      emojiJ -= libjsinspectork.length % 2;
   }
   for (let b = 0; b < 3; b++) {
      const_96 += `${resultp.length ^ 2}`;
   }

            if (result.success === false) {

       let themer = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,100,95,55,48,0);
       let reactnativejsKd: Array<any> = [String.fromCharCode(99,97,99,104,101,95,49,95,54,54,0), String.fromCharCode(108,95,55,56,95,115,121,109,98,111,108,105,99,0)];
      if (4 > (themer.length + 4)) {
         reactnativejsKd = [themer.length];
      }
      while (themer.length >= reactnativejsKd.length) {
         themer = `${reactnativejsKd.length}`;
         break;
      }
          let layout_: Array<any> = [String.fromCharCode(103,95,51,95,112,114,101,118,105,101,119,0), String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,120,95,56,55,0), String.fromCharCode(121,95,54,56,95,111,119,110,101,114,0)];
          let mountingO = 2;
         reactnativejsKd = [1 << (Math.min(5, themer.length))];
         layout_.push(1);
         mountingO -= 1;
         themer += `${themer.length % (Math.max(2, reactnativejsKd.length))}`;
         reactnativejsKd = [themer.length];
          let round7 = 4;
         themer += "3";
         round7 <<= Math.min(3, Math.abs(round7 % (Math.max(round7, 7))));
      textlayoutmanager4.set(bridgei, parseInt(`${materialz}`));
       let values7 = 1.0;
       let ballu: Array<any> = [278, 882];
       let shirtd: Array<any> = [422, 26];
       let const_890: Array<any> = [String.fromCharCode(111,112,101,110,99,108,95,111,95,50,53,0), String.fromCharCode(109,112,111,110,95,97,95,51,49,0)];
         ballu = [parseInt(`${values7}`) - const_890.length];
      materialz /= Math.max(1, parseFloat(`${2}`));
   while (3.29 < (textinputc * 1.22) && 1.85 < (textinputc * 1.22)) {
      textinputc /= Math.max(parseInt(`${materialz}`), 3);
      break;
   }
   if (textlayoutmanager4.size < 4) {
      resultp = `${textlayoutmanager4.size}`;
   }
                throw result.message;
            }

            return result.data as yys_Down[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

      emojiJ *= 3 + const_96.length;
      bridgei += `${(bridgei == String.fromCharCode(117,0) ? bridgei.length : rncorek.length)}`;
   for (let i = 0; i < 3; i++) {
       let stationm = String.fromCharCode(115,117,98,116,105,116,108,101,115,95,101,95,55,52,0);
       let down_ = 4;
       let kickZ = String.fromCharCode(103,95,55,55,95,115,116,111,114,101,100,0);
      for (let m = 0; m < 1; m++) {
         down_ += kickZ.length ^ down_;
      }
         stationm = `${3 << (Math.min(3, Math.abs(down_)))}`;
      for (let q = 0; q < 2; q++) {
         down_ >>= Math.min(2, Math.abs((kickZ == String.fromCharCode(121,0) ? stationm.length : kickZ.length)));
      }
       let hiadS = String.fromCharCode(105,95,54,51,95,112,104,114,97,115,101,115,0);
       let encryptR = String.fromCharCode(107,95,51,49,95,116,101,114,109,115,0);
      for (let a = 0; a < 3; a++) {
          let china7 = 1;
          let libreactperfloggerjni2 = true;
         kickZ = `${hiadS.length + stationm.length}`;
         china7 &= 1;
         libreactperfloggerjni2 = 56 > china7;
      }
      while (!encryptR.includes(`${hiadS.length}`)) {
         hiadS = `${down_ % (Math.max(2, 9))}`;
         break;
      }
       let rewindE: Map<any, any> = new Map([[String.fromCharCode(121,95,49,50,95,115,121,110,99,115,97,102,101,0),416], [String.fromCharCode(97,110,105,109,97,116,101,100,95,113,95,49,49,0),194], [String.fromCharCode(112,111,115,116,112,111,110,101,95,50,95,54,57,0),419]]);
       let register_v5B: Map<any, any> = new Map([[String.fromCharCode(104,115,99,114,111,108,108,95,104,95,57,53,0),165], [String.fromCharCode(120,95,55,54,95,114,97,110,100,111,109,0),443], [String.fromCharCode(105,110,102,101,114,95,102,95,54,56,0),120]]);
          let xvodq = 1;
          let detailP: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,95,54,95,50,54,0),String.fromCharCode(119,95,51,51,95,115,104,105,102,116,115,0)], [String.fromCharCode(108,95,53,50,95,116,111,116,97,108,108,121,0),String.fromCharCode(97,95,51,49,95,114,101,117,115,97,98,108,101,0)], [String.fromCharCode(117,110,114,105,115,101,95,113,95,55,48,0),String.fromCharCode(99,116,105,109,101,95,101,95,49,48,0)]]);
         hiadS = `${stationm.length | 3}`;
         xvodq <<= Math.min(2, Math.abs(1 & detailP.size));
         detailP = new Map([[`${detailP.size}`, 2]]);
      if (stationm.includes(`${rewindE.size}`)) {
          let megaphoner = 1;
          let viewsW = String.fromCharCode(120,99,104,97,99,104,97,95,111,95,49,57,0);
          let applel: Array<any> = [243, 963, 372];
         stationm = `${down_ % (Math.max(encryptR.length, 3))}`;
         megaphoner <<= Math.min(applel.length, 1);
         viewsW = `${megaphoner}`;
         applel = [3 << (Math.min(2, applel.length))];
      }
      textinputc /= Math.max(3 >> (Math.min(Math.abs(shareF), 4)), 2);
   }
   if (libjsinspectork.length > 2) {
      libjsinspectork += `${parseInt(`${emojiJ}`) ^ textlayoutmanager4.size}`;
   }
            throw e;
        }
    }
}
