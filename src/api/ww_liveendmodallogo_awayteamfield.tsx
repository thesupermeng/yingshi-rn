import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { wwCollection, wwNativemodule } from "@constants";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/ww_icon";
import { wwCatalog } from "@type/ww_dycreator_result";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";


export class wwIconscheduleColors {
    static guestLogin = async (): Promise<wwBodan> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await wwForegroundModules.post(wwCollection.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                wwForegroundModules.regetToken();
            }

            return wwBodan.fromJson(result.data);

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

            const result = await wwForegroundModules.post(wwCollection.userPostSigninup, {
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
                wwForegroundModules.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let greytickW: Array<any> = [88, 589, 247];
    let latnY: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,100,115,112,95,113,95,50,51,0),976], [String.fromCharCode(97,103,101,110,116,0),571], [String.fromCharCode(106,111,98,95,97,95,57,0),678]]);
    let turnb = 1.0;
    let iconfeedbackx: Map<any, any> = new Map([[String.fromCharCode(114,95,54,52,95,101,120,97,109,112,108,101,0),700], [String.fromCharCode(97,117,100,105,116,105,110,103,0),401], [String.fromCharCode(104,95,49,54,95,114,101,119,114,105,116,101,114,0),667]]);
    let side9: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,109,118,95,48,95,55,54,0),true ], [String.fromCharCode(100,101,110,111,105,115,101,0),false ], [String.fromCharCode(121,95,56,52,95,100,101,99,101,108,101,114,97,116,101,100,0),true ]]);
    let main_zy: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,99,104,97,110,103,101,100,0),136], [String.fromCharCode(122,95,53,50,95,119,112,116,104,114,101,97,100,115,0),488], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,113,95,54,56,0),490]]);
    let w_lockm = false;
    let signinupg = String.fromCharCode(97,99,100,101,99,95,110,95,50,50,0);
    let iconuser4 = String.fromCharCode(109,101,109,111,106,105,95,48,95,50,56,0);
    let natived = String.fromCharCode(117,110,113,117,97,110,116,95,112,95,56,48,0);
    let expandf: Map<any, any> = new Map([[String.fromCharCode(109,97,112,95,118,95,50,49,0),false ], [String.fromCharCode(116,95,49,56,95,99,111,114,110,101,114,115,0),true ]]);
    let checkboxJ = 4;
    let libfbjnir: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,95,117,110,98,111,117,110,100,0),982], [String.fromCharCode(104,95,49,54,95,115,116,101,109,109,101,114,0),676]]);
    let malaysiay: Map<any, any> = new Map([[String.fromCharCode(117,95,57,57,95,112,114,111,102,105,108,105,110,103,0),true ], [String.fromCharCode(97,115,111,108,117,116,101,95,107,95,49,48,48,0),true ]]);
    let hiadj = 3.0;
    let baselines: Array<any> = [228, 563];
    let playercommono = true;
   while ((side9.size * 1) > 1) {
       let sliderb = false;
         sliderb = !sliderb && sliderb;
         sliderb = !sliderb;
      if (!sliderb) {
         sliderb = !sliderb;
      }
      libfbjnir = new Map([[`${side9.size}`, greytickW.length >> (Math.min(2, Math.abs(side9.size)))]]);
      break;
   }
   if (3.20 > (2.41 * turnb)) {
       let diceN = 0.0;
       let bnewsshareG = String.fromCharCode(118,111,98,115,117,98,95,111,95,50,48,0);
       let router1 = String.fromCharCode(120,95,51,56,95,114,101,97,100,102,114,97,109,101,0);
          let runtimei = String.fromCharCode(98,95,49,54,95,117,118,109,118,0);
          let pingA = 5.0;
          let yelloww = String.fromCharCode(109,95,51,52,95,117,110,98,111,110,100,0);
         diceN /= Math.max(parseFloat(`${1}`), 1);
         runtimei = `${(String.fromCharCode(115,0) == runtimei ? runtimei.length : parseInt(`${pingA}`))}`;
         pingA += parseFloat(`${runtimei.length}`);
         yelloww += `${parseInt(`${pingA}`)}`;
         bnewsshareG += `${(bnewsshareG == String.fromCharCode(77,0) ? bnewsshareG.length : parseInt(`${diceN}`))}`;
       let membershipN = 3;
      let profileinactivef = membershipN <= 4950698;
      do {
          let serviceg = 3.0;
          let tumbnailw = 4;
          let faviconb = String.fromCharCode(121,95,54,53,95,100,101,108,101,103,97,116,101,115,0);
         membershipN &= tumbnailw;
         serviceg /= Math.max(faviconb.length, 1);
         tumbnailw ^= 2 + faviconb.length;
         if (profileinactivef) {
            break;
         }
      } while ((5.90 > (5.55 + diceN)) && profileinactivef);
      if (2 == bnewsshareG.length) {
          let phonen = 1.0;
          let textlayoutmanagera = 1;
          let sortZ: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,98,108,101,95,121,95,51,57,0),98], [String.fromCharCode(98,95,49,51,95,109,101,97,115,117,114,101,0),294]]);
          let uimanagerh = 4;
          let reducerd = String.fromCharCode(116,105,101,114,95,106,95,50,54,0);
         bnewsshareG += `${router1.length / (Math.max(6, reducerd.length))}`;
         phonen += 3;
         textlayoutmanagera <<= Math.min(1, Math.abs(textlayoutmanagera % (Math.max(sortZ.size, 6))));
         sortZ.set(`${uimanagerh}`, 2);
         uimanagerh &= parseInt(`${phonen}`) % (Math.max(sortZ.size, 4));
         reducerd = `${sortZ.size}`;
      }
      if (5 <= (bnewsshareG.length % 3) && 5 <= (membershipN % 3)) {
         membershipN /= Math.max(1 % (Math.max(7, router1.length)), 5);
      }
      if (4 <= (router1.length | 5)) {
          let specZ = 0;
          let filei = String.fromCharCode(122,95,50,51,95,105,110,115,116,97,108,108,0);
         membershipN /= Math.max(specZ, 4);
         specZ *= filei.length;
         filei += `${2 + filei.length}`;
      }
       let sellR = String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,105,95,56,53,0);
      let mbridgeU = router1 == String.fromCharCode(98,109,50,0);
      do {
         router1 = `${sellR.length & 1}`;
         if (mbridgeU) {
            break;
         }
      } while (mbridgeU && (!bnewsshareG.includes(router1)));
      turnb /= Math.max(4, main_zy.size);
   }

        try {

      greytickW.push(expandf.size);
       let crossp = String.fromCharCode(110,97,117,116,105,99,97,108,95,100,95,55,51,0);
       let register__27: Array<any> = [517, 551, 645];
      for (let i = 0; i < 1; i++) {
          let disconnectedlogoO = String.fromCharCode(106,95,49,50,95,100,111,99,107,101,114,0);
          let codek = String.fromCharCode(115,95,53,48,95,114,101,99,121,99,108,101,0);
         crossp = `${(disconnectedlogoO == String.fromCharCode(80,0) ? disconnectedlogoO.length : codek.length)}`;
      }
          let detailsd = String.fromCharCode(110,95,55,53,95,109,109,99,111,0);
         register__27.push(1 ^ register__27.length);
         detailsd += "1";
      latnY = new Map([[`${libfbjnir.size}`, iconfeedbackx.size >> (Math.min(Math.abs(2), 1))]]);
            const result = await wwForegroundModules.get(wwCollection.userGetDetails);

   for (let z = 0; z < 1; z++) {
      latnY.set(`${expandf.size}`, expandf.size);
   }
      libfbjnir = new Map([[`${latnY.size}`, 1 * latnY.size]]);

            if (result.success === false) {

   if (iconfeedbackx.size < expandf.size) {
      expandf.set(natived, libfbjnir.size);
   }
       let becomeu = String.fromCharCode(105,110,116,101,114,105,116,101,109,95,55,95,56,56,0);
          let default_uof = 3.0;
          let bootc = 4.0;
          let sharedi = 2;
         becomeu = `${2 - sharedi}`;
         default_uof -= parseFloat(`${parseInt(`${default_uof}`) - parseInt(`${bootc}`)}`);
         bootc /= Math.max(1 / (Math.max(4, parseInt(`${default_uof}`))), 4);
         sharedi &= parseInt(`${default_uof}`) + parseInt(`${bootc}`);
      let defaultfootballbgg = becomeu == String.fromCharCode(105,50,122,122,111,115,0);
      do {
         becomeu += `${becomeu.length}`;
         if (defaultfootballbgg) {
            break;
         }
      } while ((1 == becomeu.length && becomeu == String.fromCharCode(65,0)) && defaultfootballbgg);
      for (let o = 0; o < 2; o++) {
         becomeu += `${becomeu.length}`;
      }
      checkboxJ /= Math.max(side9.size / 3, 3);
                throw result.message;
            }

            if (result.data === undefined) {

       let bangM = String.fromCharCode(104,95,49,48,95,115,116,97,116,0);
       let about6 = false;
      for (let b = 0; b < 1; b++) {
         bangM = `${(1 / (Math.max(6, (about6 ? 2 : 3))))}`;
      }
         about6 = bangM.length > 93;
          let imagemanagerQ = 5.0;
         about6 = !bangM.endsWith(`${imagemanagerQ}`);
         about6 = (34 == (bangM.length | (about6 ? bangM.length : 34)));
         about6 = bangM.length > 94 || !about6;
      for (let z = 0; z < 3; z++) {
          let disconnectedl = 4.0;
          let expandv = 3;
          let iconuserl: Array<any> = [822, 615];
         bangM += `${((about6 ? 5 : 2) - expandv)}`;
         disconnectedl *= parseInt(`${disconnectedl}`);
         expandv <<= Math.min(2, Math.abs(parseInt(`${disconnectedl}`) / 3));
         iconuserl = [parseInt(`${disconnectedl}`)];
      }
      signinupg = `${signinupg.length}`;
      signinupg = `${main_zy.size % (Math.max(5, natived.length))}`;
                throw wwNativemodule.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

      latnY.set(natived, libfbjnir.size);
      malaysiay.set(iconuser4, iconuser4.length % 2);
                throw wwNativemodule.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

   for (let f = 0; f < 2; f++) {
       let sliderW = 2.0;
       let shootyesgoalV = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,115,95,49,54,0);
         sliderW *= parseFloat(`${shootyesgoalV.length}`);
          let iconschedule9 = 0.0;
          let statsT = String.fromCharCode(103,95,53,52,95,114,101,97,108,108,121,0);
         shootyesgoalV = `${2 * shootyesgoalV.length}`;
         iconschedule9 *= 1;
         statsT = `${parseInt(`${iconschedule9}`) | 1}`;
      let qaagr = 8641635 <= shootyesgoalV.length;
      do {
         shootyesgoalV = `${shootyesgoalV.length}`;
         if (qaagr) {
            break;
         }
      } while (qaagr && (shootyesgoalV.startsWith(`${sliderW}`)));
      while (shootyesgoalV.startsWith(`${sliderW}`)) {
          let trophyd: Array<any> = [String.fromCharCode(100,114,105,118,105,110,103,95,53,95,53,51,0), String.fromCharCode(98,95,54,55,95,114,101,99,101,105,118,105,110,103,0)];
         shootyesgoalV += `${3 + trophyd.length}`;
         break;
      }
       let green_ = true;
      while (1 == (1 - parseInt(`${sliderW}`)) && 5.26 == (sliderW - 4.64)) {
          let applicationp = String.fromCharCode(109,97,105,108,95,110,95,54,51,0);
          let hookg = String.fromCharCode(111,95,51,57,95,108,97,122,105,108,121,0);
          let expiredy = String.fromCharCode(115,116,99,111,95,116,95,53,54,0);
          let left_ = 4;
          let searchbary: Map<any, any> = new Map([[String.fromCharCode(108,97,110,99,122,111,115,95,52,95,49,54,0),29], [String.fromCharCode(106,95,50,50,95,115,116,117,98,0),155], [String.fromCharCode(119,95,56,50,95,97,110,110,111,117,110,99,101,109,101,110,116,0),147]]);
         sliderW *= parseFloat(`${1}`);
         applicationp += `${expiredy.length / 2}`;
         hookg = `${(String.fromCharCode(73,0) == applicationp ? applicationp.length : left_)}`;
         expiredy += `${left_ | searchbary.size}`;
         searchbary = new Map([[expiredy, (String.fromCharCode(72,0) == applicationp ? applicationp.length : expiredy.length)]]);
         break;
      }
      iconuser4 = `${(iconfeedbackx.size << (Math.min(2, Math.abs((w_lockm ? 5 : 5)))))}`;
   }
   for (let n = 0; n < 1; n++) {
      latnY = new Map([[`${expandf.size}`, 1]]);
   }
                throw wwNativemodule.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

   let more8 = libfbjnir.size <= 9043806;
   do {
      libfbjnir.set(signinupg, main_zy.size - signinupg.length);
      if (more8) {
         break;
      }
   } while (more8 && ((libfbjnir.size * 2) < 1));
      expandf = new Map([[`${latnY.size}`, natived.length >> (Math.min(3, Math.abs(latnY.size)))]]);
            

   while (latnY.get(`${greytickW.length}`) == null) {
      greytickW.push(((w_lockm ? 4 : 3) - natived.length));
      break;
   }
       let libglogl = 2.0;
       let rewardi = 0;
       let downloadingE: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),true ], [String.fromCharCode(104,95,49,95,116,97,112,101,0),true ], [String.fromCharCode(115,116,97,114,114,101,100,95,110,95,57,55,0),false ]]);
      let sendF = 8790172 >= rewardi;
      do {
          let flyers = 1.0;
          let libcxxcomponentsa = true;
          let incidentl: Map<any, any> = new Map([[String.fromCharCode(98,95,56,95,100,101,116,97,105,108,115,0),3], [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,95,121,95,56,57,0),464], [String.fromCharCode(108,105,109,105,116,95,108,95,54,56,0),205]]);
          let classes2: Array<any> = [309, 868];
         rewardi /= Math.max(classes2.length, 3);
         flyers /= Math.max(parseFloat(`${incidentl.size / (Math.max(2, 7))}`), 1);
         libcxxcomponentsa = !libcxxcomponentsa;
         incidentl.set(`${libcxxcomponentsa}`, 2 >> (Math.min(Math.abs(parseInt(`${flyers}`)), 3)));
         classes2 = [((libcxxcomponentsa ? 1 : 2) - parseInt(`${flyers}`))];
         if (sendF) {
            break;
         }
      } while (sendF && (5 < (rewardi + 1)));
          let react2: Array<any> = [806, 140];
          let iconpipexpandC: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,98,97,100,114,101,113,0),798], [String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,53,95,57,55,0),210]]);
         libglogl /= Math.max(rewardi | downloadingE.size, 2);
         react2 = [3 & react2.length];
         iconpipexpandC.set(`${react2.length}`, 2);
      if ((downloadingE.size * parseInt(`${libglogl}`)) <= 4 || (libglogl * downloadingE.size) <= 4.13) {
          let stringsI: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,115,95,121,95,54,53,0),125], [String.fromCharCode(112,108,97,121,105,110,103,95,115,95,51,56,0),475], [String.fromCharCode(99,108,97,117,115,101,115,95,56,95,50,55,0),699]]);
         downloadingE = new Map([[`${downloadingE.size}`, 3]]);
         stringsI = new Map([[`${stringsI.size}`, stringsI.size]]);
      }
          let tickeds: Array<any> = [997, 611, 230];
          let imagemanageri = String.fromCharCode(100,95,51,95,108,97,99,105,110,103,0);
          let guideO: Array<any> = [String.fromCharCode(104,95,49,50,95,99,97,112,105,116,97,108,115,0), String.fromCharCode(111,95,49,49,95,99,111,100,101,98,111,111,107,115,0)];
         libglogl *= rewardi ^ guideO.length;
         tickeds = [(imagemanageri == String.fromCharCode(53,0) ? imagemanageri.length : tickeds.length)];
         guideO.push(imagemanageri.length | tickeds.length);
       let m_hashh: Array<any> = [563, 573, 446];
       let darkP: Array<any> = [275, 877];
       let livenodatabgimgF = String.fromCharCode(111,99,97,108,95,120,95,56,56,0);
      if ((m_hashh.length - 2) < 2 || (m_hashh.length - 2) < 3) {
          let private_1G = String.fromCharCode(115,112,97,99,105,110,103,115,95,113,95,51,53,0);
         m_hashh.push(1 << (Math.min(4, Math.abs(rewardi))));
         private_1G = `${(private_1G == String.fromCharCode(78,0) ? private_1G.length : private_1G.length)}`;
      }
         livenodatabgimgF = `${3 * rewardi}`;
       let zoomZ: Array<any> = [562, 486];
       let send3: Array<any> = [681, 312];
      latnY.set(`${checkboxJ}`, checkboxJ | parseInt(`${hiadj}`));
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

            const result = await wwForegroundModules.post(wwCollection.userPostUsername, {
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
       let loginsuccess6 = String.fromCharCode(110,95,57,56,95,108,111,111,107,97,104,101,97,100,0);
    let iconnointernetp: Map<any, any> = new Map([[String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,53,95,50,57,0),true ], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,122,95,57,50,0),true ], [String.fromCharCode(109,95,51,95,114,101,102,101,114,101,110,99,101,0),false ]]);
    let bottomB = String.fromCharCode(100,101,115,101,108,101,99,116,95,119,95,50,56,0);
    let humidity2 = false;
    let libmapbufferjni7 = 4.0;
    let trashS = false;
    let images0 = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,54,95,51,53,0);
    let traminiw = String.fromCharCode(100,101,108,101,116,101,100,95,122,95,53,57,0);
    let injuryy: Array<any> = [208, 515, 647];
    let chinasamel: Array<any> = [841, 107];
    let internetO = 4.0;
    let gradlewH = 3;
    let gifgoalbgc = String.fromCharCode(115,95,53,49,95,119,97,108,107,101,114,0);
    let logouser9 = String.fromCharCode(99,95,52,55,95,115,112,101,99,105,102,105,101,100,0);
    let policyJ = true;
    let textlayoutmanageru = 4.0;
    let chartD = String.fromCharCode(97,115,99,105,105,95,100,95,50,53,0);
      gradlewH ^= 1;
       let launcherD = 4;
       let pingZ: Map<any, any> = new Map([[String.fromCharCode(120,95,51,53,95,100,101,115,101,114,105,97,108,105,122,101,0),335], [String.fromCharCode(100,101,116,101,99,116,95,110,95,52,49,0),537]]);
       let chart2: Array<any> = [443, 867];
      while ((launcherD % (Math.max(3, pingZ.size))) <= 1) {
         launcherD *= chart2.length;
         break;
      }
      if (1 <= (launcherD >> (Math.min(Math.abs(1), 5)))) {
         launcherD |= chart2.length;
      }
         chart2 = [chart2.length >> (Math.min(2, Math.abs(pingZ.size)))];
          let subtext4 = String.fromCharCode(115,117,110,114,105,115,101,95,105,95,51,51,0);
         launcherD <<= Math.min(Math.abs(subtext4.length + 3), 1);
      if (3 >= (pingZ.size + chart2.length)) {
         pingZ = new Map([[`${pingZ.size}`, 3 ^ chart2.length]]);
      }
       let indicator7 = String.fromCharCode(118,95,52,50,95,118,105,98,114,97,116,105,111,110,0);
       let orangeclock8 = String.fromCharCode(112,105,120,100,101,115,99,95,117,95,56,48,0);
      let feedbackn = 7061407 <= pingZ.size;
      do {
         pingZ.set(`${chart2.length}`, 2);
         if (feedbackn) {
            break;
         }
      } while ((orangeclock8.length > pingZ.size) && feedbackn);
       let mbsplashl = String.fromCharCode(115,104,111,114,116,99,117,116,95,98,95,52,48,0);
       let baselineL = String.fromCharCode(115,95,56,52,95,110,97,116,105,118,101,0);
         launcherD /= Math.max(chart2.length, 1);
      internetO *= parseFloat(`${injuryy.length | 3}`);
   if (4.63 <= (1.32 * internetO) && (loginsuccess6.length * parseInt(`${internetO}`)) <= 1) {
      loginsuccess6 += `${3 | parseInt(`${libmapbufferjni7}`)}`;
   }
   for (let j = 0; j < 1; j++) {
      libmapbufferjni7 *= loginsuccess6.length;
   }

        try {

      injuryy.push(gradlewH);
      bottomB += "3";
      loginsuccess6 = "1";
   while ((2 / (Math.max(2, iconnointernetp.size))) < 2 || (bottomB.length / (Math.max(2, 2))) < 4) {
      iconnointernetp.set(images0, images0.length);
      break;
   }
            const result = await wwForegroundModules.get(wwCollection.userGetCountries);

   for (let x = 0; x < 2; x++) {
       let register_nmr = String.fromCharCode(120,109,108,95,109,95,54,53,0);
         register_nmr = `${register_nmr.length}`;
         register_nmr = `${register_nmr.length | 1}`;
      if (register_nmr.length >= 5) {
         register_nmr += `${register_nmr.length >> (Math.min(Math.abs(2), 1))}`;
      }
      gradlewH -= 2;
   }
   let libswresamplem = bottomB.length <= 7832922;
   do {
       let shirtp: Map<any, any> = new Map([[String.fromCharCode(109,109,99,116,120,95,50,95,54,48,0),160], [String.fromCharCode(105,110,118,115,98,111,120,95,55,95,57,48,0),24], [String.fromCharCode(99,104,97,116,0),613]]);
       let huaweiB = String.fromCharCode(97,99,114,111,110,121,109,95,109,95,54,49,0);
       let feedback8 = 2;
         huaweiB += `${1 << (Math.min(3, Math.abs(shirtp.size)))}`;
         shirtp = new Map([[`${shirtp.size}`, 3 / (Math.max(1, shirtp.size))]]);
         feedback8 += feedback8;
       let streamingJ = 2;
      while (huaweiB.endsWith(`${feedback8}`)) {
         huaweiB = `${streamingJ}`;
         break;
      }
         shirtp = new Map([[`${feedback8}`, (huaweiB == String.fromCharCode(102,0) ? huaweiB.length : feedback8)]]);
      for (let x = 0; x < 3; x++) {
          let info4 = 2;
         huaweiB = `${info4 | feedback8}`;
      }
       let shootyesgoalB: Map<any, any> = new Map([[String.fromCharCode(118,99,120,112,114,111,106,95,110,95,52,52,0),772], [String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,111,95,49,56,0),6], [String.fromCharCode(101,95,57,48,95,101,99,114,101,100,0),128]]);
       let subtextO: Map<any, any> = new Map([[String.fromCharCode(109,95,54,57,95,114,101,112,101,97,116,0),true ], [String.fromCharCode(115,111,99,107,95,115,95,48,0),false ], [String.fromCharCode(113,95,50,49,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0),true ]]);
       let whistleorangec = String.fromCharCode(104,109,104,100,0);
       let mappingQ = String.fromCharCode(116,95,53,51,95,100,111,112,115,0);
      bottomB += `${parseInt(`${libmapbufferjni7}`) << (Math.min(Math.abs(iconnointernetp.size), 5))}`;
      if (libswresamplem) {
         break;
      }
   } while (libswresamplem && (loginsuccess6 == String.fromCharCode(86,0) || bottomB == String.fromCharCode(77,0)));
   for (let i = 0; i < 2; i++) {
       let libjsijniprofilerL = 3;
       let giftbuttonG = 3.0;
       let helperr = String.fromCharCode(108,111,97,100,95,48,95,49,52,0);
       let private_akr = String.fromCharCode(117,114,108,115,0);
         helperr = `${2 * parseInt(`${giftbuttonG}`)}`;
       let minimizeO = 1.0;
         giftbuttonG *= parseFloat(`${parseInt(`${minimizeO}`) | libjsijniprofilerL}`);
          let brightnessS = 4.0;
          let listk = String.fromCharCode(112,114,111,98,115,95,52,95,53,50,0);
         giftbuttonG += (parseFloat(`${String.fromCharCode(116,0) == helperr ? helperr.length : listk.length}`));
         brightnessS -= parseFloat(`${2}`);
         listk += `${parseInt(`${brightnessS}`) ^ 2}`;
         giftbuttonG *= parseFloat(`${private_akr.length}`);
         helperr = `${parseInt(`${giftbuttonG}`) | 2}`;
      let crossU = 4980486.0 <= minimizeO;
      do {
         minimizeO += parseFloat(`${1}`);
         if (crossU) {
            break;
         }
      } while ((giftbuttonG < 1.15) && crossU);
      if (helperr.includes(`${minimizeO}`)) {
         minimizeO += parseFloat(`${libjsijniprofilerL}`);
      }
       let mapping0: Array<any> = [String.fromCharCode(111,119,110,101,114,115,104,105,112,95,113,95,55,0), String.fromCharCode(99,97,108,108,101,114,95,102,95,57,52,0), String.fromCharCode(109,95,49,52,95,120,100,97,105,0)];
       let inouttargetredU: Array<any> = [String.fromCharCode(99,97,115,116,101,100,95,110,95,51,55,0), String.fromCharCode(113,95,50,57,95,104,97,110,100,108,101,115,0)];
      while ((mapping0.length | 2) < 2 || (helperr.length | 2) < 3) {
         helperr += `${helperr.length}`;
         break;
      }
      let largeL = 8449790.0 <= minimizeO;
      do {
         minimizeO /= Math.max(3, parseFloat(`${libjsijniprofilerL}`));
         if (largeL) {
            break;
         }
      } while (largeL && (2 <= helperr.length));
         giftbuttonG -= parseFloat(`${parseInt(`${minimizeO}`) - 1}`);
      loginsuccess6 = `${2 | bottomB.length}`;
   }
   if (traminiw.endsWith(`${gradlewH}`)) {
      traminiw = `${(injuryy.length & (humidity2 ? 2 : 2))}`;
   }

            if (result.success === false) {

       let zhubo1 = String.fromCharCode(97,116,116,114,95,115,95,53,51,0);
       let with_w7 = String.fromCharCode(102,97,115,116,0);
          let overlayU = true;
         with_w7 = `${((overlayU ? 1 : 2))}`;
          let reactnativeratingsr: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,105,95,51,55,0),586], [String.fromCharCode(118,95,51,54,95,97,110,115,119,101,114,115,0),153], [String.fromCharCode(110,95,57,50,95,110,115,117,112,112,111,114,116,101,100,0),669]]);
          let rulesm = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,116,95,49,54,0);
         with_w7 = `${zhubo1.length}`;
         reactnativeratingsr = new Map([[`${reactnativeratingsr.size}`, rulesm.length << (Math.min(Math.abs(3), 5))]]);
         rulesm += `${(String.fromCharCode(101,0) == rulesm ? reactnativeratingsr.size : rulesm.length)}`;
      while (!zhubo1.includes(`${with_w7.length}`)) {
         zhubo1 += `${with_w7.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
         with_w7 += `${(String.fromCharCode(82,0) == with_w7 ? zhubo1.length : with_w7.length)}`;
       let mappingF = 5.0;
       let trophyV = 0.0;
      let giftD = 9710017.0 <= trophyV;
      do {
         trophyV -= parseFloat(`${1 | with_w7.length}`);
         if (giftD) {
            break;
         }
      } while (((mappingF / 4) == 5.60) && giftD);
      chinasamel.push(2);
      loginsuccess6 = `${((trashS ? 3 : 4) & gifgoalbgc.length)}`;
      traminiw += `${loginsuccess6.length * parseInt(`${internetO}`)}`;
   let roundF = humidity2 ? !humidity2 : humidity2;
   do {
      humidity2 = gifgoalbgc.length == 83 && humidity2;
      if (roundF) {
         break;
      }
   } while ((!humidity2) && roundF);
                throw result.message;
            }

            return result.data as wwCatalog[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

   for (let p = 0; p < 2; p++) {
      loginsuccess6 += `${chinasamel.length}`;
   }
   while (4 >= (injuryy.length % 3) && (injuryy.length % (Math.max(8, traminiw.length))) >= 3) {
      traminiw += `${((trashS ? 3 : 3) >> (Math.min(Math.abs(1), 1)))}`;
      break;
   }
      injuryy.push(1 >> (Math.min(3, gifgoalbgc.length)));
   if (5 > injuryy.length) {
       let recommendationU = 5.0;
       let nativeexB = 4.0;
       let loginsuccessa = String.fromCharCode(110,97,110,95,106,95,50,55,0);
         recommendationU += parseFloat(`${parseInt(`${recommendationU}`)}`);
         recommendationU += parseFloat(`${parseInt(`${recommendationU}`) + 3}`);
         nativeexB /= Math.max(5, parseInt(`${recommendationU}`) % 1);
          let h_centerA: Array<any> = [202, 82];
          let penaltyz = true;
         loginsuccessa += `${(loginsuccessa == String.fromCharCode(81,0) ? parseInt(`${nativeexB}`) : loginsuccessa.length)}`;
         h_centerA = [((penaltyz ? 1 : 2) & 2)];
         penaltyz = !penaltyz;
      if (3.81 <= (nativeexB / (Math.max(recommendationU, 10)))) {
         recommendationU /= Math.max(parseFloat(`${2}`), 1);
      }
      for (let n = 0; n < 3; n++) {
         nativeexB *= parseInt(`${recommendationU}`);
      }
          let logout7: Map<any, any> = new Map([[String.fromCharCode(110,95,49,51,95,98,101,108,111,110,103,115,0),964], [String.fromCharCode(111,95,55,53,95,100,114,97,103,0),569]]);
         nativeexB *= 1 << (Math.min(Math.abs(parseInt(`${recommendationU}`)), 3));
         logout7.set(`${logout7.size}`, 2);
      let tempnodatagifB = nativeexB >= 5144114.0;
      do {
         nativeexB -= 2;
         if (tempnodatagifB) {
            break;
         }
      } while (tempnodatagifB && (2.74 == (recommendationU - nativeexB)));
      let maild = 9269334 >= loginsuccessa.length;
      do {
         loginsuccessa += `${parseInt(`${recommendationU}`)}`;
         if (maild) {
            break;
         }
      } while ((loginsuccessa.length < nativeexB) && maild);
      injuryy = [(bottomB == String.fromCharCode(55,0) ? bottomB.length : (humidity2 ? 5 : 4))];
   }
            throw e;
        }
    }
}
