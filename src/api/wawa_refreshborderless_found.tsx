import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { wawaStatisticsEpisodes, wawaIconeye } from "@constants";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/wawa_iconpointscore";
import { wawaReactnavigation } from "@type/wawa_gradlew";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";


export class wawaEvent {
    static guestLogin = async (): Promise<wawaLibglog> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await wawaGreyChange.post(wawaStatisticsEpisodes.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                wawaGreyChange.regetToken();
            }

            return wawaLibglog.fromJson(result.data);

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

            const result = await wawaGreyChange.post(wawaStatisticsEpisodes.userPostSigninup, {
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
                wawaGreyChange.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let cross9 = 5.0;
    let graphU = String.fromCharCode(105,95,49,95,98,111,119,108,105,110,103,0);
    let pushf = 3;
    let subs6 = 2;
    let iconnewchata = 1;
    let iconfeedbackv: Array<any> = [717, 766, 356];
    let baiduo = false;
    let actionse = String.fromCharCode(117,95,53,56,95,99,111,110,99,97,116,0);
    let imageactionliveZ = String.fromCharCode(116,119,111,115,99,97,108,101,95,97,95,52,50,0);
    let overlay9 = String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,103,95,54,52,0);
    let libruntimeexecutor3 = false;
    let placementH = 5;
    let iconnewssharea: Array<any> = [958, 721, 996];
    let materialY = String.fromCharCode(102,95,49,52,95,97,114,114,97,110,103,101,109,101,110,116,0);
    let faviconu = 1.0;
       let info6 = 0.0;
       let login_ = false;
         login_ = info6 >= 70.94;
      if (!login_ || 5.14 <= (info6 / 3.9)) {
         info6 /= Math.max(1, parseFloat(`${1 ^ parseInt(`${info6}`)}`));
      }
       let phonesharex = 3;
      while (!login_) {
          let downloaderq: Map<any, any> = new Map([[String.fromCharCode(111,119,110,115,95,114,95,57,56,0),854], [String.fromCharCode(101,118,105,99,101,95,53,95,51,55,0),847]]);
          let xadsdk3: Map<any, any> = new Map([[String.fromCharCode(98,114,105,110,103,95,101,95,51,50,0),898], [String.fromCharCode(102,95,51,56,95,115,101,114,118,101,114,115,0),137], [String.fromCharCode(112,95,55,49,95,115,117,98,112,101,108,0),23]]);
          let iconarrowrightblackw: Array<any> = [String.fromCharCode(99,111,109,109,105,116,95,109,95,54,52,0), String.fromCharCode(110,111,101,120,112,95,109,95,56,57,0)];
          let viewsh = String.fromCharCode(116,95,50,56,95,106,102,105,101,108,100,115,0);
          let register_25M = true;
         login_ = viewsh.length >= xadsdk3.size;
         downloaderq.set(`${iconarrowrightblackw.length}`, 3);
         xadsdk3 = new Map([[`${iconarrowrightblackw.length}`, 1]]);
         viewsh = `${((register_25M ? 2 : 4) & downloaderq.size)}`;
         break;
      }
       let description_o1j = String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,52,95,52,52,0);
       let fastforwardR = String.fromCharCode(102,111,114,105,95,103,95,54,53,0);
         fastforwardR += "2";
      pushf /= Math.max(2, 1);
       let basketballplayerplaceholderQ = String.fromCharCode(97,112,112,114,111,118,101,95,56,95,53,56,0);
      let classesH = String.fromCharCode(106,114,114,50,97,0) == basketballplayerplaceholderQ;
      do {
         basketballplayerplaceholderQ = `${basketballplayerplaceholderQ.length}`;
         if (classesH) {
            break;
         }
      } while (classesH && (basketballplayerplaceholderQ == String.fromCharCode(87,0)));
       let penaltyw = 5.0;
      let libavcodeck = basketballplayerplaceholderQ.length >= 5460347;
      do {
         basketballplayerplaceholderQ += `${basketballplayerplaceholderQ.length}`;
         if (libavcodeck) {
            break;
         }
      } while (libavcodeck && (3.77 < (penaltyw + 2.45) && (2.45 + penaltyw) < 2.88));
      iconfeedbackv.push(basketballplayerplaceholderQ.length + 1);

        try {

   for (let j = 0; j < 1; j++) {
       let notificationfilled4 = String.fromCharCode(100,101,103,114,101,101,95,48,95,57,50,0);
         notificationfilled4 += `${notificationfilled4.length}`;
          let libavfilterU = false;
          let complete5 = String.fromCharCode(108,115,112,108,112,99,95,97,95,50,57,0);
         notificationfilled4 += `${notificationfilled4.length}`;
         libavfilterU = 18 > complete5.length;
         complete5 = "1";
         notificationfilled4 = "3";
      libruntimeexecutor3 = pushf >= 91;
   }
      subs6 *= (overlay9 == String.fromCharCode(122,0) ? iconnewchata : overlay9.length);
            const result = await wawaGreyChange.get(wawaStatisticsEpisodes.userGetDetails);

       let mbsplashg: Array<any> = [296, 705];
       let iconviewerm = 1.0;
       let othermatchdetailbgK: Map<any, any> = new Map([[String.fromCharCode(117,95,57,55,95,112,105,120,98,108,111,99,107,100,115,112,0),250], [String.fromCharCode(97,100,100,101,114,95,112,95,53,48,0),714], [String.fromCharCode(105,95,55,52,95,101,110,99,111,100,105,110,103,98,0),549]]);
      while (5.69 >= (1.72 - iconviewerm) || (iconviewerm - 1.72) >= 2.97) {
         iconviewerm *= parseInt(`${iconviewerm}`);
         break;
      }
      let securityo = 6380610 <= othermatchdetailbgK.size;
      do {
         othermatchdetailbgK = new Map([[`${mbsplashg.length}`, mbsplashg.length + 1]]);
         if (securityo) {
            break;
         }
      } while (securityo && (5.73 == (1.73 * iconviewerm) && (3 | othermatchdetailbgK.size) == 2));
      for (let i = 0; i < 1; i++) {
         othermatchdetailbgK.set(`${mbsplashg.length}`, mbsplashg.length);
      }
      for (let c = 0; c < 2; c++) {
         mbsplashg = [othermatchdetailbgK.size];
      }
         othermatchdetailbgK.set(`${iconviewerm}`, parseInt(`${iconviewerm}`) >> (Math.min(Math.abs(othermatchdetailbgK.size), 3)));
      let greenarrowupu = iconviewerm >= 7682952.0;
      do {
         iconviewerm += parseInt(`${iconviewerm}`) - othermatchdetailbgK.size;
         if (greenarrowupu) {
            break;
         }
      } while (((iconviewerm / (Math.max(othermatchdetailbgK.size, 7))) <= 1.79 || (iconviewerm / 1.79) <= 5.27) && greenarrowupu);
         iconviewerm -= 1;
      let found9 = othermatchdetailbgK.size <= 6800124;
      do {
          let rewardvideoB = 1.0;
          let areaS = false;
          let vietnamE: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,100,101,99,111,100,101,120,0),319], [String.fromCharCode(116,111,109,98,117,102,95,108,95,57,50,0),304]]);
          let user5 = true;
          let reactnativeultimatelistview7 = 5;
         othermatchdetailbgK = new Map([[`${reactnativeultimatelistview7}`, reactnativeultimatelistview7]]);
         rewardvideoB -= 2;
         areaS = 41.29 >= rewardvideoB;
         vietnamE.set(`${areaS}`, ((areaS ? 4 : 2) >> (Math.min(5, Math.abs(3)))));
         user5 = vietnamE.size == 66 || areaS;
         if (found9) {
            break;
         }
      } while ((5 > (othermatchdetailbgK.size / (Math.max(5, mbsplashg.length))) && 5 > (othermatchdetailbgK.size / (Math.max(7, mbsplashg.length)))) && found9);
      let favicone = 5994279.0 <= iconviewerm;
      do {
         iconviewerm -= mbsplashg.length + parseInt(`${iconviewerm}`);
         if (favicone) {
            break;
         }
      } while (favicone && (Array.from(othermatchdetailbgK.values()).includes(iconviewerm)));
      cross9 /= Math.max(2 & actionse.length, 5);
      subs6 |= parseInt(`${cross9}`) * 2;

            if (result.success === false) {

       let baseQ = 1;
       let greyf = 3.0;
      while (4.1 < (baseQ + greyf)) {
         greyf += baseQ * 3;
         break;
      }
       let shootyesgoali = String.fromCharCode(113,95,56,48,95,108,101,118,101,108,115,0);
         greyf += baseQ % 3;
       let memberx = String.fromCharCode(98,95,51,57,95,99,102,101,110,99,115,116,114,0);
       let topicD = String.fromCharCode(106,95,54,48,95,118,97,114,0);
      while (4 <= (baseQ - topicD.length)) {
         baseQ += 3 ^ parseInt(`${greyf}`);
         break;
      }
      for (let y = 0; y < 2; y++) {
         memberx = "1";
      }
      libruntimeexecutor3 = 68 < baseQ || 68 < graphU.length;
      iconnewchata >>= Math.min(5, Math.abs(overlay9.length / (Math.max(actionse.length, 6))));
                throw result.message;
            }

            if (result.data === undefined) {

      libruntimeexecutor3 = iconnewchata <= imageactionliveZ.length;
   let imagemanagerP = actionse.length >= 8182398;
   do {
       let bggradientb = String.fromCharCode(103,95,49,95,100,101,102,101,114,0);
       let emojig: Map<any, any> = new Map([[String.fromCharCode(111,95,53,53,0),689], [String.fromCharCode(106,95,55,54,0),694], [String.fromCharCode(104,101,118,99,95,54,95,57,50,0),63]]);
       let championA = String.fromCharCode(117,95,55,52,95,100,105,97,108,111,103,0);
      while (1 >= emojig.size) {
         bggradientb = `${emojig.size}`;
         break;
      }
      while (championA.length <= emojig.size) {
         emojig = new Map([[`${emojig.size}`, 1]]);
         break;
      }
          let iconcloseQ = String.fromCharCode(112,108,97,121,95,111,95,52,50,0);
          let main_jI = 0.0;
          let n_countC = 2.0;
         emojig.set(bggradientb, 2);
         iconcloseQ = `${1 & iconcloseQ.length}`;
         main_jI -= parseInt(`${n_countC}`);
         n_countC += parseFloat(`${iconcloseQ.length}`);
      for (let w = 0; w < 1; w++) {
         emojig.set(`${bggradientb}`, emojig.size);
      }
       let subinY = 4.0;
      for (let l = 0; l < 3; l++) {
         subinY /= Math.max(4, (bggradientb == String.fromCharCode(74,0) ? bggradientb.length : championA.length));
      }
      let reviewi = championA.length >= 7800610;
      do {
          let r_playerq = 2;
          let nativemodulet = 0.0;
          let mutedf = String.fromCharCode(112,95,55,56,95,114,101,112,101,97,116,101,100,108,121,0);
         championA = `${championA.length}`;
         r_playerq *= (mutedf == String.fromCharCode(67,0) ? parseInt(`${nativemodulet}`) : mutedf.length);
         nativemodulet += 3;
         if (reviewi) {
            break;
         }
      } while (reviewi && (!championA.includes(`${subinY}`)));
      for (let j = 0; j < 1; j++) {
         bggradientb += "2";
      }
          let headerA = String.fromCharCode(99,95,52,95,112,114,111,106,101,99,116,105,111,110,115,0);
         championA = `${bggradientb.length ^ emojig.size}`;
         headerA = `${headerA.length}`;
      actionse += "3";
      if (imagemanagerP) {
         break;
      }
   } while (imagemanagerP && (imageactionliveZ.endsWith(actionse)));
                throw wawaIconeye.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

   let libswresampleH = 9078627 >= iconnewchata;
   do {
       let hometeamfieldp = false;
      while (hometeamfieldp) {
         hometeamfieldp = (!hometeamfieldp ? hometeamfieldp : !hometeamfieldp);
         break;
      }
      if (hometeamfieldp) {
         hometeamfieldp = hometeamfieldp && !hometeamfieldp;
      }
      let dicelogoQ = hometeamfieldp ? !hometeamfieldp : hometeamfieldp;
      do {
          let largesoundR = 4.0;
          let close5 = String.fromCharCode(116,114,97,99,107,101,114,95,53,95,57,51,0);
          let gradley = 1;
         hometeamfieldp = 31 == close5.length;
         largesoundR *= parseFloat(`${parseInt(`${largesoundR}`)}`);
         close5 += `${1 + gradley}`;
         gradley &= 1 | gradley;
         if (dicelogoQ) {
            break;
         }
      } while ((hometeamfieldp) && dicelogoQ);
      iconnewchata >>= Math.min(Math.abs(((hometeamfieldp ? 2 : 2))), 1);
      if (libswresampleH) {
         break;
      }
   } while ((!libruntimeexecutor3) && libswresampleH);
   for (let b = 0; b < 3; b++) {
      iconnewchata -= 2;
   }
                throw wawaIconeye.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

       let guidea = 0.0;
       let pauseb = 2.0;
         guidea -= 1 * parseInt(`${pauseb}`);
      while (5.31 == (guidea - pauseb)) {
         guidea -= parseInt(`${pauseb}`);
         break;
      }
      while ((2.35 + pauseb) >= 5.29) {
         pauseb *= 3 / (Math.max(5, parseInt(`${guidea}`)));
         break;
      }
          let gifgoalH = String.fromCharCode(119,95,55,57,95,115,116,114,101,97,109,105,110,102,111,0);
          let bodanH = false;
         pauseb /= Math.max(3, 3 ^ gifgoalH.length);
         gifgoalH = `${((bodanH ? 2 : 1) ^ (bodanH ? 1 : 3))}`;
      if (3.20 <= pauseb) {
         pauseb += parseInt(`${guidea}`);
      }
          let basketballawayteamW = true;
         guidea -= parseInt(`${guidea}`) ^ 1;
         basketballawayteamW = !basketballawayteamW;
      placementH *= parseInt(`${guidea}`);
   while (!imageactionliveZ.endsWith(`${cross9}`)) {
      cross9 += 1 * subs6;
      break;
   }
                throw wawaIconeye.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

      placementH /= Math.max(2, imageactionliveZ.length / 1);
       let libfabricjniS = 5.0;
      let soundw = libfabricjniS <= 7614122.0;
      do {
          let giflivestreamingG = 0.0;
          let submit3 = String.fromCharCode(100,101,116,101,99,116,101,100,95,114,95,54,0);
         libfabricjniS += parseFloat(`${2}`);
         giflivestreamingG += (submit3 == String.fromCharCode(109,0) ? submit3.length : parseInt(`${giflivestreamingG}`));
         if (soundw) {
            break;
         }
      } while (((libfabricjniS * 5.33) >= 3.22 || (5.33 / (Math.max(5, libfabricjniS))) >= 5.29) && soundw);
         libfabricjniS -= parseFloat(`${parseInt(`${libfabricjniS}`)}`);
      while ((libfabricjniS + 4.71) == 4.15 || 4.29 == (libfabricjniS + 4.71)) {
         libfabricjniS *= parseFloat(`${parseInt(`${libfabricjniS}`)}`);
         break;
      }
      iconfeedbackv.push(subs6);
            

   while (3 == subs6) {
       let register_qrs = 4.0;
       let lessP = 0;
       let malaysiaw = 2.0;
       let closez = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,105,95,52,51,0);
       let showlessK = String.fromCharCode(102,111,114,119,97,114,100,95,49,95,52,51,0);
         malaysiaw *= closez.length >> (Math.min(Math.abs(2), 2));
          let minivodp = String.fromCharCode(110,101,105,103,104,98,111,117,114,95,101,95,49,53,0);
         malaysiaw += (showlessK == String.fromCharCode(76,0) ? minivodp.length : showlessK.length);
      if ((3.81 - malaysiaw) >= 4.63 && 2 >= (parseInt(`${malaysiaw}`) - 4)) {
         closez += `${parseInt(`${malaysiaw}`) - 2}`;
      }
      for (let c = 0; c < 3; c++) {
         showlessK = `${lessP}`;
      }
      let executorZ = closez.length <= 7064049;
      do {
         closez += `${lessP >> (Math.min(Math.abs(parseInt(`${malaysiaw}`)), 3))}`;
         if (executorZ) {
            break;
         }
      } while (((closez.length % (Math.max(2, 2))) >= 3 && (2 - closez.length) >= 4) && executorZ);
         lessP >>= Math.min(Math.abs((String.fromCharCode(75,0) == showlessK ? showlessK.length : parseInt(`${malaysiaw}`))), 2);
          let sentryB: Array<any> = [517, 131];
          let zoomC = false;
          let logon: Array<any> = [954, 719];
         closez = "3";
         sentryB.push(((zoomC ? 2 : 1) ^ sentryB.length));
         zoomC = !zoomC;
         logon.push(logon.length);
      while (5 == lessP) {
          let defaultfootballbgv: Array<any> = [651, 365, 886];
          let networks = String.fromCharCode(99,104,111,112,95,55,95,56,56,0);
         lessP ^= 2 / (Math.max(9, showlessK.length));
         defaultfootballbgv.push(defaultfootballbgv.length / (Math.max(networks.length, 4)));
         networks += `${2 + defaultfootballbgv.length}`;
         break;
      }
      let libfbjniQ = 9396077.0 <= register_qrs;
      do {
         register_qrs += parseFloat(`${lessP - parseInt(`${malaysiaw}`)}`);
         if (libfbjniQ) {
            break;
         }
      } while ((3.12 <= (malaysiaw - register_qrs)) && libfbjniQ);
      if ((closez.length * 5) <= 4) {
          let ajax1 = String.fromCharCode(116,99,102,105,108,101,95,120,95,51,49,0);
          let wifirouterD: Map<any, any> = new Map([[String.fromCharCode(105,100,120,95,102,95,57,0),true ], [String.fromCharCode(119,101,108,99,111,109,101,95,57,95,57,57,0),true ]]);
          let libjsinspectorH: Array<any> = [25, 497, 546];
          let mnewarchdefaultsX: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,100,111,119,110,108,111,97,100,105,110,103,0),false ], [String.fromCharCode(113,95,50,55,95,97,108,108,111,99,122,0),true ], [String.fromCharCode(101,102,102,101,99,116,115,95,54,95,50,50,0),false ]]);
          let vipsportq = 1.0;
         register_qrs /= Math.max(1, parseFloat(`${mnewarchdefaultsX.size}`));
         ajax1 = `${libjsinspectorH.length >> (Math.min(Math.abs(1), 1))}`;
         wifirouterD.set(`${libjsinspectorH.length}`, libjsinspectorH.length);
         mnewarchdefaultsX = new Map([[`${wifirouterD.size}`, 2]]);
         vipsportq /= Math.max(5, 1);
      }
         lessP >>= Math.min(Math.abs(closez.length >> (Math.min(1, Math.abs(parseInt(`${register_qrs}`))))), 2);
      while (lessP <= register_qrs) {
          let macauz = 4.0;
          let questicon9 = String.fromCharCode(118,95,57,55,95,99,111,110,103,0);
          let libtanH = 2.0;
         register_qrs /= Math.max(parseFloat(`${parseInt(`${register_qrs}`) % (Math.max(1, 3))}`), 3);
         macauz /= Math.max(5, (parseFloat(`${String.fromCharCode(84,0) == questicon9 ? parseInt(`${macauz}`) : questicon9.length}`)));
         libtanH -= questicon9.length;
         break;
      }
          let iconbackwhiteg: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,121,101,115,116,101,114,100,97,121,0),842], [String.fromCharCode(121,95,57,52,95,116,104,101,110,0),78], [String.fromCharCode(115,117,98,98,97,110,100,95,105,95,54,50,0),212]]);
          let alerty = String.fromCharCode(99,97,114,100,97,110,111,95,118,95,57,49,0);
          let friendsg = 2.0;
         register_qrs /= Math.max(parseFloat(`${closez.length / 2}`), 2);
         iconbackwhiteg = new Map([[`${iconbackwhiteg.size}`, 3]]);
         alerty = "3";
         friendsg *= parseInt(`${friendsg}`) * 3;
      for (let u = 0; u < 1; u++) {
         malaysiaw *= closez.length % (Math.max(3, 9));
      }
      let libsgcoren = closez.length >= 8697920;
      do {
         closez = `${parseInt(`${register_qrs}`) / (Math.max(3, 3))}`;
         if (libsgcoren) {
            break;
         }
      } while (libsgcoren && ((3 - parseInt(`${register_qrs}`)) == 2 || (3.66 - register_qrs) == 5.25));
      libruntimeexecutor3 = showlessK == imageactionliveZ;
      break;
   }
   let activeR = materialY == String.fromCharCode(57,114,52,95,113,101,120,100,104,116,0);
   do {
      materialY = `${(overlay9 == String.fromCharCode(77,0) ? overlay9.length : parseInt(`${cross9}`))}`;
      if (activeR) {
         break;
      }
   } while (((materialY.length * iconnewssharea.length) < 1 && 1 < (1 * materialY.length)) && activeR);
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

            const result = await wawaGreyChange.post(wawaStatisticsEpisodes.userPostUsername, {
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
       let carouselL = String.fromCharCode(119,95,50,51,95,114,101,109,111,116,101,108,121,0);
    let loadingw = 2.0;
    let firebaseP = String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,49,95,54,52,0);
    let gesturesQ = String.fromCharCode(101,95,53,50,95,112,97,114,101,110,116,104,101,115,105,115,0);
    let rncore2 = false;
    let membershipz: Map<any, any> = new Map([[String.fromCharCode(104,119,117,112,108,111,97,100,95,53,95,57,53,0),882], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,51,95,51,49,0),814], [String.fromCharCode(100,105,109,101,110,115,95,120,95,49,51,0),366]]);
    let scorey = 4;
    let backwhitet = String.fromCharCode(121,95,55,50,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
    let bottomz: Array<any> = [78, 859];
    let subsD = String.fromCharCode(103,95,53,53,95,114,101,113,117,105,114,101,100,0);
    let mathZ: Map<any, any> = new Map([[String.fromCharCode(110,95,57,54,95,103,101,110,101,114,97,108,105,115,101,100,0),59], [String.fromCharCode(108,111,110,103,101,114,95,54,95,50,55,0),853]]);
   if (5.50 <= (5.8 * loadingw) && rncore2) {
       let borderlessa = 1.0;
       let policyH: Map<any, any> = new Map([[String.fromCharCode(100,111,120,121,103,101,110,95,105,95,52,50,0),true ], [String.fromCharCode(115,104,111,119,95,54,95,50,53,0),true ], [String.fromCharCode(109,95,52,49,95,108,97,121,115,0),false ]]);
      let iconarrowrightwhite_ = borderlessa >= 7019422.0;
      do {
         borderlessa -= 3 + policyH.size;
         if (iconarrowrightwhite_) {
            break;
         }
      } while ((!Array.from(policyH.values()).includes(borderlessa)) && iconarrowrightwhite_);
          let readD = String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,57,95,51,49,0);
          let logoutJ = 1.0;
         borderlessa -= 2 % (Math.max(parseInt(`${logoutJ}`), 2));
         readD += `${readD.length}`;
         logoutJ += parseFloat(`${readD.length % 1}`);
       let gdtadvG = 1.0;
      if (3.1 > (borderlessa - gdtadvG)) {
         gdtadvG /= Math.max(parseFloat(`${parseInt(`${gdtadvG}`)}`), 2);
      }
         policyH.set(`${gdtadvG}`, policyH.size);
          let chinasameE = String.fromCharCode(100,95,53,56,95,114,97,100,98,103,0);
         borderlessa -= policyH.size;
         chinasameE = `${(String.fromCharCode(78,0) == chinasameE ? chinasameE.length : chinasameE.length)}`;
      loadingw += parseFloat(`${3}`);
   }
   let lightj = 8519390 >= scorey;
   do {
      scorey /= Math.max(1, parseInt(`${loadingw}`));
      if (lightj) {
         break;
      }
   } while (((4.46 + loadingw) == 4.52 || 3 == (scorey << (Math.min(Math.abs(2), 2)))) && lightj);
       let privacyO = String.fromCharCode(98,114,97,99,101,95,118,95,53,49,0);
       let predictionbannern = 2.0;
       let iconnewchatW = String.fromCharCode(114,95,54,49,95,108,97,98,101,108,115,0);
      while (privacyO.length == iconnewchatW.length) {
         iconnewchatW += `${parseInt(`${predictionbannern}`)}`;
         break;
      }
       let bridge0: Map<any, any> = new Map([[String.fromCharCode(104,95,53,53,95,102,114,97,109,101,110,117,109,0),199], [String.fromCharCode(99,104,101,99,107,109,97,114,107,95,108,95,56,53,0),373]]);
       let backiconz = String.fromCharCode(98,105,109,97,112,95,105,95,49,56,0);
      if (!privacyO.includes(`${iconnewchatW.length}`)) {
          let notificationgrayK = String.fromCharCode(103,114,97,109,115,95,111,95,48,0);
          let streamingc = String.fromCharCode(109,117,120,101,114,95,109,95,51,53,0);
          let whitesmalltickp = 1;
         iconnewchatW = `${(String.fromCharCode(82,0) == notificationgrayK ? notificationgrayK.length : bridge0.size)}`;
         streamingc += `${3 - streamingc.length}`;
         whitesmalltickp /= Math.max(2, whitesmalltickp);
      }
      while ((2 / (Math.max(9, privacyO.length))) <= 4) {
          let controlD = 0;
          let langkey7 = String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,111,95,55,53,0);
          let redirectt = 5;
         predictionbannern += 1 + langkey7.length;
         controlD ^= controlD - 3;
         langkey7 = `${2 - controlD}`;
         redirectt -= controlD;
         break;
      }
          let codeR = 3.0;
         predictionbannern += parseInt(`${codeR}`) + 3;
      let awayiconN = String.fromCharCode(121,104,99,101,116,108,119,54,51,118,0) == iconnewchatW;
      do {
         iconnewchatW = `${(privacyO == String.fromCharCode(122,0) ? privacyO.length : backiconz.length)}`;
         if (awayiconN) {
            break;
         }
      } while (awayiconN && (predictionbannern >= 1.61));
      if ((parseInt(`${predictionbannern}`) + privacyO.length) <= 5 && (predictionbannern + 1.8) <= 1.11) {
          let iconshareQ = 4.0;
          let airbnbstarselectedY = true;
          let roomw: Array<any> = [974, 430];
         privacyO += `${privacyO.length}`;
         iconshareQ -= 2 / (Math.max(parseInt(`${iconshareQ}`), 10));
         airbnbstarselectedY = airbnbstarselectedY || roomw.length == 46;
         roomw.push((parseInt(`${iconshareQ}`) | (airbnbstarselectedY ? 4 : 5)));
      }
         backiconz += `${backiconz.length}`;
      rncore2 = (privacyO.length >> (Math.min(5, Math.abs(membershipz.size)))) > 56;

        try {

   while (backwhitet.length > membershipz.size) {
      membershipz.set(`${rncore2}`, (2 >> (Math.min(4, Math.abs((rncore2 ? 4 : 5))))));
      break;
   }
       let libyogay = String.fromCharCode(115,117,98,115,116,114,95,49,95,51,48,0);
       let cornershootm = true;
         libyogay = "2";
         cornershootm = !cornershootm;
          let usera = 3.0;
          let imageactionliveO = String.fromCharCode(109,97,112,112,101,100,95,115,95,54,53,0);
         cornershootm = !imageactionliveO.startsWith(`${usera}`);
      let trophyO = cornershootm ? !cornershootm : cornershootm;
      do {
         cornershootm = (90 >= (libyogay.length | (!cornershootm ? libyogay.length : 90)));
         if (trophyO) {
            break;
         }
      } while ((!cornershootm && 4 > libyogay.length) && trophyO);
         libyogay += "2";
         cornershootm = libyogay.length >= 6 && !cornershootm;
      gesturesQ = `${parseInt(`${loadingw}`) % 3}`;
      scorey /= Math.max(3, 3);
            const result = await wawaGreyChange.get(wawaStatisticsEpisodes.userGetCountries);

       let foregroundA = 4;
       let textinput0 = String.fromCharCode(109,111,100,105,102,121,95,113,95,51,49,0);
       let iconwatchnowD = String.fromCharCode(112,95,54,56,95,115,116,114,102,0);
      if (textinput0.length <= iconwatchnowD.length) {
          let confirmationA: Map<any, any> = new Map([[String.fromCharCode(114,95,54,53,95,97,114,99,104,105,118,101,0),240], [String.fromCharCode(114,97,116,105,111,115,95,97,95,49,51,0),304], [String.fromCharCode(114,95,52,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0),308]]);
         iconwatchnowD = `${confirmationA.size / (Math.max(5, foregroundA))}`;
      }
          let gpayi = String.fromCharCode(114,95,51,95,116,111,103,103,108,101,100,0);
         textinput0 = `${textinput0.length | foregroundA}`;
         gpayi += `${gpayi.length | gpayi.length}`;
          let currentQ = false;
          let gpayk = 2;
          let eighteen7 = 4.0;
         textinput0 += `${parseInt(`${eighteen7}`) / 3}`;
         currentQ = !currentQ;
         gpayk %= Math.max(2, gpayk);
         eighteen7 += parseFloat(`${gpayk * 2}`);
       let movieso = 0.0;
       let slider_ = 5.0;
         iconwatchnowD = `${parseInt(`${movieso}`)}`;
         foregroundA |= (textinput0 == String.fromCharCode(116,0) ? iconwatchnowD.length : textinput0.length);
      for (let m = 0; m < 2; m++) {
         foregroundA &= parseInt(`${slider_}`) % (Math.max(iconwatchnowD.length, 5));
      }
         textinput0 = "2";
      if (iconwatchnowD.length <= 3 && textinput0 == String.fromCharCode(54,0)) {
          let settingg: Array<any> = [783, 1000];
          let helperf = String.fromCharCode(115,121,109,111,100,100,95,105,95,57,53,0);
          let moon9 = String.fromCharCode(110,95,52,53,95,112,111,115,105,116,105,111,110,0);
          let fillede = String.fromCharCode(109,95,54,50,95,109,115,118,115,0);
         iconwatchnowD += `${iconwatchnowD.length ^ settingg.length}`;
         settingg = [1];
         helperf += `${moon9.length & helperf.length}`;
         moon9 += `${(String.fromCharCode(68,0) == fillede ? moon9.length : fillede.length)}`;
      }
      backwhitet += `${gesturesQ.length}`;
   let controlsE = 6759973 <= bottomz.length;
   do {
      bottomz = [(String.fromCharCode(97,0) == firebaseP ? (rncore2 ? 4 : 1) : firebaseP.length)];
      if (controlsE) {
         break;
      }
   } while ((Array.from(membershipz.values()).includes(bottomz.length)) && controlsE);
      membershipz.set(backwhitet, 3);

            if (result.success === false) {

      backwhitet += "3";
   while ((bottomz.length + 4) == 3 || !rncore2) {
      bottomz = [(String.fromCharCode(116,0) == firebaseP ? firebaseP.length : scorey)];
      break;
   }
   while (parseInt(`${loadingw}`) > bottomz.length) {
       let iconrefreshy = 4;
       let emojiQ = String.fromCharCode(115,101,118,101,114,105,116,121,95,51,95,53,54,0);
       let largeS = String.fromCharCode(97,116,116,97,99,107,95,106,95,50,0);
       let iconpipshrinky: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,99,111,117,110,116,115,0),963], [String.fromCharCode(112,97,115,115,99,111,100,101,95,54,95,54,49,0),83], [String.fromCharCode(102,95,54,54,95,105,100,105,111,109,0),385]]);
         iconrefreshy *= iconrefreshy / (Math.max(largeS.length, 5));
      let giftbuttonw = iconpipshrinky.size <= 6210063;
      do {
         iconpipshrinky = new Map([[`${iconpipshrinky.size}`, (largeS == String.fromCharCode(112,0) ? iconpipshrinky.size : largeS.length)]]);
         if (giftbuttonw) {
            break;
         }
      } while (giftbuttonw && (iconpipshrinky.size == 3));
      for (let p = 0; p < 3; p++) {
         iconpipshrinky = new Map([[`${iconrefreshy}`, iconrefreshy]]);
      }
         largeS = `${largeS.length & iconrefreshy}`;
      let imagenetworkerrS = iconrefreshy >= 8797531;
      do {
         iconrefreshy %= Math.max(emojiQ.length + iconrefreshy, 3);
         if (imagenetworkerrS) {
            break;
         }
      } while ((2 == (iconrefreshy << (Math.min(largeS.length, 1)))) && imagenetworkerrS);
          let zhubon = String.fromCharCode(111,95,57,52,95,114,101,106,101,99,116,0);
          let videobufferloadingR = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,56,95,52,53,0);
         iconrefreshy += (String.fromCharCode(116,0) == emojiQ ? iconrefreshy : emojiQ.length);
         zhubon += `${zhubon.length}`;
         videobufferloadingR += `${(String.fromCharCode(86,0) == videobufferloadingR ? videobufferloadingR.length : zhubon.length)}`;
          let agreemento = true;
          let klevinI = 4.0;
         emojiQ = `${largeS.length | iconpipshrinky.size}`;
         agreemento = !agreemento;
         klevinI -= parseFloat(`${2 / (Math.max(parseInt(`${klevinI}`), 9))}`);
      while (emojiQ.startsWith(`${iconrefreshy}`)) {
          let defaultroombgK: Array<any> = [796, 593];
          let mbridge5: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,112,110,105,101,108,115,97,100,100,0),327], [String.fromCharCode(101,95,56,52,95,97,98,111,114,116,97,98,108,101,0),661], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,122,95,55,54,0),280]]);
         iconrefreshy >>= Math.min(4, Math.abs(defaultroombgK.length * 1));
         defaultroombgK = [mbridge5.size];
         mbridge5.set(`${mbridge5.size}`, mbridge5.size - 3);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let stringsH = 0.0;
          let castX = String.fromCharCode(100,114,97,110,100,95,106,95,50,56,0);
          let manifeste = String.fromCharCode(113,95,53,51,95,115,121,110,111,110,121,109,0);
          let gifgoalbgp: Array<any> = [66, 697, 712];
         iconpipshrinky.set(castX, largeS.length);
         stringsH -= 1 & manifeste.length;
         castX = `${manifeste.length}`;
         gifgoalbgp.push(gifgoalbgp.length + manifeste.length);
      }
         iconrefreshy &= largeS.length;
         iconrefreshy /= Math.max(largeS.length, 2);
      for (let t = 0; t < 1; t++) {
         emojiQ = `${2 - iconpipshrinky.size}`;
      }
      loadingw -= parseFloat(`${membershipz.size}`);
      break;
   }
                throw result.message;
            }

            return result.data as wawaReactnavigation[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

      rncore2 = rncore2 || 61.15 >= loadingw;
      loadingw -= parseFloat(`${3}`);
   while (4 >= (parseInt(`${loadingw}`) / (Math.max(9, bottomz.length)))) {
      loadingw += parseFloat(`${1 ^ scorey}`);
      break;
   }
            throw e;
        }
    }
}
