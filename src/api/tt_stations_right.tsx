import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { ttGemfile, ttIncidentPhilippines } from "@constants";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/tt_trophy_cross";
import { ttGradleTrash } from "@type/tt_line_borderless";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ttFast } from "@models/tt_stations_right";


export class ttTramini {
    static guestLogin = async (): Promise<ttFast> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await ttReactnativejsMalaysia.post(ttGemfile.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                ttReactnativejsMalaysia.regetToken();
            }

            return ttFast.fromJson(result.data);

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

            const result = await ttReactnativejsMalaysia.post(ttGemfile.userPostSigninup, {
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
                ttReactnativejsMalaysia.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let inactive7 = false;
    let backgroundS = false;
    let successK = String.fromCharCode(103,101,110,101,114,97,116,111,114,0);
    let interstitial7 = 1.0;
    let submitq: Array<any> = [309, 551];
    let description_e22 = 5.0;
    let tooltips7 = String.fromCharCode(116,101,109,112,111,0);
    let moduleU = String.fromCharCode(102,117,108,108,115,99,114,101,101,110,0);
    let overlay8 = String.fromCharCode(102,117,110,99,116,105,111,110,0);
    let ying6 = String.fromCharCode(115,95,55,54,95,115,111,102,114,101,101,0);
       let loadingI = 5;
       let strings9 = 3.0;
      if (2 >= (loadingI >> (Math.min(Math.abs(2), 4)))) {
          let v_lock9 = String.fromCharCode(101,110,116,105,116,121,0);
          let configx = false;
          let mbnativeadvanceda: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,0),564], [String.fromCharCode(114,101,115,112,0),880], [String.fromCharCode(97,110,110,111,117,110,99,101,0),24]]);
         strings9 *= parseFloat(`${mbnativeadvanceda.size | 3}`);
         v_lock9 = `${((configx ? 2 : 2))}`;
         configx = v_lock9.length >= 38;
         mbnativeadvanceda = new Map([[`${configx}`, v_lock9.length]]);
      }
         loadingI -= loadingI;
         loadingI %= Math.max(parseInt(`${strings9}`), 4);
      if ((3.69 - strings9) < 1.17 || 3.69 < (parseFloat(`${loadingI}`) - strings9)) {
         loadingI /= Math.max(parseInt(`${strings9}`) >> (Math.min(3, Math.abs(2))), 4);
      }
      while ((loadingI / (Math.max(parseInt(`${strings9}`), 7))) < 1 || (loadingI / (Math.max(parseInt(`${strings9}`), 10))) < 1) {
         strings9 -= parseFloat(`${parseInt(`${strings9}`) << (Math.min(4, Math.abs(loadingI)))}`);
         break;
      }
         loadingI -= 3;
      successK = `${successK.length}`;
      moduleU += `${overlay8.length}`;

        try {

       let mintegralC = true;
       let paginationN = String.fromCharCode(100,105,115,99,117,115,115,105,111,110,0);
       let modity2 = String.fromCharCode(107,109,115,0);
         paginationN = `${((mintegralC ? 1 : 2) / (Math.max(modity2.length, 2)))}`;
         modity2 += `${3 >> (Math.min(3, paginationN.length))}`;
         paginationN = "3";
         mintegralC = (((mintegralC ? 21 : paginationN.length) + paginationN.length) < 21);
          let floaterp = 4;
         paginationN += `${floaterp >> (Math.min(4, Math.abs(2)))}`;
         paginationN = `${((mintegralC ? 1 : 3))}`;
          let fullj: Array<any> = [327, 927, 123];
         paginationN = `${modity2.length}`;
         fullj = [3 * fullj.length];
      while (2 >= paginationN.length) {
         mintegralC = paginationN.length <= 100;
         break;
      }
         mintegralC = (paginationN.length & modity2.length) > 100;
      submitq.push(1 ^ parseInt(`${description_e22}`));
      interstitial7 /= Math.max(1, parseFloat(`${overlay8.length | moduleU.length}`));
            const result = await ttReactnativejsMalaysia.get(ttGemfile.userGetDetails);

   for (let c = 0; c < 1; c++) {
      successK = `${submitq.length + 1}`;
   }
      inactive7 = tooltips7 == overlay8;

            if (result.success === false) {

   let hearts = 8708608 <= submitq.length;
   do {
       let logoL = String.fromCharCode(113,115,99,97,108,101,113,112,0);
       let volume5 = 5.0;
       let dplusi = 4.0;
       let zhengpianx = false;
      let rulesE = 8363774.0 >= dplusi;
      do {
          let crowni = String.fromCharCode(105,110,116,102,114,0);
          let activityM: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,99,104,97,110,103,101,0),false ], [String.fromCharCode(98,95,55,54,95,116,114,97,99,101,114,0),true ]]);
          let dangerw = 1.0;
         dplusi += parseFloat(`${parseInt(`${dangerw}`) / 2}`);
         crowni = "2";
         activityM.set(`${crowni}`, (String.fromCharCode(122,0) == crowni ? activityM.size : crowni.length));
         dangerw -= crowni.length;
         if (rulesE) {
            break;
         }
      } while (rulesE && (zhengpianx));
      submitq.push(successK.length ^ 2);
      logoL += `${3 << (Math.min(5, logoL.length))}`;
      if (hearts) {
         break;
      }
   } while (hearts && (submitq.length < tooltips7.length));
      submitq.push(((inactive7 ? 2 : 2) & (backgroundS ? 4 : 3)));
                throw result.message;
            }

            if (result.data === undefined) {

   let searchbars = 7042868 >= successK.length;
   do {
      successK = `${(String.fromCharCode(87,0) == overlay8 ? overlay8.length : parseInt(`${description_e22}`))}`;
      if (searchbars) {
         break;
      }
   } while (searchbars && ((2 - successK.length) < 2 || 1 < (successK.length - 2)));
   while (overlay8.length == 5 || !backgroundS) {
      overlay8 += `${submitq.length & 1}`;
      break;
   }
                throw ttIncidentPhilippines.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

      interstitial7 += parseFloat(`${1}`);
      interstitial7 -= parseFloat(`${3}`);
                throw ttIncidentPhilippines.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

       let slideri: Array<any> = [37, 966];
       let securityD = String.fromCharCode(99,111,110,115,101,110,116,0);
       let shirta: Array<any> = [255, 100];
      for (let z = 0; z < 3; z++) {
          let calendarw = 1.0;
         slideri.push(slideri.length - parseInt(`${calendarw}`));
      }
      let xvodj = 9173884 <= shirta.length;
      do {
          let updatesE = false;
          let casting_ = false;
          let shrinkt = 3.0;
         shirta.push(3 % (Math.max(9, shirta.length)));
         updatesE = !casting_ || shrinkt < 29.14;
         casting_ = !updatesE;
         shrinkt += ((casting_ ? 2 : 4));
         if (xvodj) {
            break;
         }
      } while (xvodj && (5 <= (4 - slideri.length) && (4 - slideri.length) <= 1));
       let plusO = true;
       let actions0 = true;
      if (!actions0) {
         actions0 = slideri.length >= 3;
      }
      while (slideri.length == securityD.length) {
         securityD = "3";
         break;
      }
         securityD += `${(String.fromCharCode(89,0) == securityD ? securityD.length : (plusO ? 2 : 4))}`;
      while (plusO) {
         plusO = (securityD.length - shirta.length) >= 12;
         break;
      }
       let topon9 = 5.0;
      if (!actions0) {
         actions0 = plusO;
      }
      submitq.push((tooltips7 == String.fromCharCode(121,0) ? (backgroundS ? 1 : 1) : tooltips7.length));
      moduleU = `${((inactive7 ? 2 : 5) & parseInt(`${interstitial7}`))}`;
                throw ttIncidentPhilippines.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

      tooltips7 += `${parseInt(`${interstitial7}`)}`;
   if ((3 + submitq.length) >= 2 && (submitq.length << (Math.min(Math.abs(3), 1))) >= 1) {
      interstitial7 -= (parseFloat(`${overlay8 == String.fromCharCode(76,0) ? parseInt(`${interstitial7}`) : overlay8.length}`));
   }
            

      tooltips7 += `${submitq.length}`;
   let styles2 = tooltips7.length >= 6121369;
   do {
       let actionO = String.fromCharCode(115,116,101,112,115,95,115,95,54,53,0);
       let langO = String.fromCharCode(106,97,99,111,98,105,0);
       let dropdownl = String.fromCharCode(115,95,50,95,105,110,116,101,103,101,114,0);
          let fileF = String.fromCharCode(103,95,53,52,0);
          let chinasameZ = 1.0;
         actionO = "2";
         fileF = `${fileF.length}`;
         chinasameZ *= parseFloat(`${fileF.length}`);
         dropdownl = `${3 ^ dropdownl.length}`;
      if (langO == actionO) {
         actionO += `${langO.length}`;
      }
         langO = `${actionO.length}`;
         dropdownl = `${langO.length}`;
         actionO += `${dropdownl.length}`;
      for (let q = 0; q < 1; q++) {
         langO += `${actionO.length ^ langO.length}`;
      }
          let videot = String.fromCharCode(114,101,102,101,114,101,110,99,101,0);
         langO = `${langO.length << (Math.min(4, videot.length))}`;
          let home0: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,105,110,103,0),false ], [String.fromCharCode(99,114,99,116,97,98,108,101,0),false ]]);
          let modalJ = false;
          let statsZ = String.fromCharCode(114,101,103,100,101,102,0);
         dropdownl = "2";
         home0.set(`${modalJ}`, home0.size);
         statsZ += `${statsZ.length}`;
      tooltips7 += `${(successK == String.fromCharCode(72,0) ? langO.length : successK.length)}`;
      if (styles2) {
         break;
      }
   } while ((3 < tooltips7.length) && styles2);
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

            const result = await ttReactnativejsMalaysia.post(ttGemfile.userPostUsername, {
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
       let close5 = 2.0;
    let foregroundi: Array<any> = [String.fromCharCode(113,110,111,115,0), String.fromCharCode(102,95,56,53,95,105,115,112,111,114,116,0), String.fromCharCode(100,97,98,97,115,101,0)];
    let storeo = String.fromCharCode(100,99,116,120,95,109,95,49,52,0);
    let loadingP = true;
    let casting6 = 4.0;
    let appsm: Array<any> = [899, 79, 455];
    let resendS = String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,0);
    let blacklistB = 1.0;
    let modity7 = String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,0);
    let adult6 = 5.0;
   for (let h = 0; h < 2; h++) {
      foregroundi = [(storeo == String.fromCharCode(79,0) ? parseInt(`${close5}`) : storeo.length)];
   }
   if (resendS.length <= 4) {
       let rank9 = String.fromCharCode(97,114,103,98,105,95,48,95,54,57,0);
       let middleo: Map<any, any> = new Map([[String.fromCharCode(100,98,115,105,122,101,0),true ], [String.fromCharCode(98,117,102,102,0),true ], [String.fromCharCode(100,101,115,99,95,50,95,50,0),false ]]);
         middleo.set(rank9, rank9.length / (Math.max(6, middleo.size)));
      for (let g = 0; g < 3; g++) {
          let subs_ = String.fromCharCode(97,98,105,0);
          let catalogd = 3;
         middleo = new Map([[`${middleo.size}`, middleo.size]]);
         subs_ = `${1 * subs_.length}`;
         catalogd |= subs_.length;
      }
      while (middleo.size > rank9.length) {
          let videojsT = String.fromCharCode(112,101,110,100,105,110,103,0);
         rank9 = `${middleo.size}`;
         videojsT = "2";
         break;
      }
         middleo.set(`${rank9}`, rank9.length * middleo.size);
          let lang4 = false;
          let reactnativejsM = String.fromCharCode(104,111,108,100,115,0);
          let goal2 = 1.0;
         middleo.set(`${lang4}`, (reactnativejsM == String.fromCharCode(95,0) ? reactnativejsM.length : (lang4 ? 2 : 2)));
       let lineL = false;
       let annerB = false;
      resendS += `${((loadingP ? 1 : 2) % (Math.max(6, resendS.length)))}`;
   }
   if ((3 - appsm.length) == 1) {
       let routert = 2.0;
       let macauo = false;
       let loginQ = false;
       let main_go = 3;
       let windh = String.fromCharCode(99,116,114,120,0);
         routert /= Math.max(4, (parseFloat(`${(loginQ ? 5 : 3) + parseInt(`${routert}`)}`)));
       let lessd = String.fromCharCode(114,101,102,105,110,101,0);
       let specg = String.fromCharCode(97,95,50,54,95,101,120,101,99,117,116,105,111,110,0);
       let round_ = true;
      let mbnatived = 8159617 >= main_go;
      do {
         main_go >>= Math.min(3, Math.abs(main_go));
         if (mbnatived) {
            break;
         }
      } while ((3.10 <= (routert + main_go)) && mbnatived);
      let rewardvideog = loginQ ? !loginQ : loginQ;
      do {
         loginQ = (40 == ((!loginQ ? lessd.length : 40) >> (Math.min(lessd.length, 1))));
         if (rewardvideog) {
            break;
         }
      } while (rewardvideog && (lessd.includes(`${loginQ}`)));
      while (lessd.length >= 3 && round_) {
         round_ = !macauo;
         break;
      }
      for (let x = 0; x < 3; x++) {
         windh = `${specg.length}`;
      }
      resendS += `${((macauo ? 3 : 1) & (loadingP ? 1 : 3))}`;
   }

        try {

       let logoutP = 5;
       let modulen = 1.0;
       let launcher3: Array<any> = [189, 447, 990];
      for (let i = 0; i < 3; i++) {
          let down9 = String.fromCharCode(109,97,114,107,105,110,103,115,0);
          let langa: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,115,0),String.fromCharCode(118,105,100,101,111,104,100,114,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,0),String.fromCharCode(102,95,55,50,95,109,117,108,116,105,99,97,115,116,0)], [String.fromCharCode(97,109,101,114,97,0),String.fromCharCode(112,111,110,103,0)]]);
          let blacklistm = false;
          let canvas0 = String.fromCharCode(99,111,110,116,105,110,101,110,116,0);
         logoutP /= Math.max(2, (launcher3.length | (blacklistm ? 1 : 1)));
         down9 += "1";
         langa.set(down9, down9.length);
         blacklistm = 32 >= down9.length;
         canvas0 += `${canvas0.length >> (Math.min(3, down9.length))}`;
      }
      for (let y = 0; y < 3; y++) {
         modulen /= Math.max(1 & parseInt(`${modulen}`), 4);
      }
       let becomee = String.fromCharCode(101,118,117,116,105,108,0);
         logoutP <<= Math.min(Math.abs(3), 3);
      if ((parseInt(`${modulen}`) + becomee.length) == 5) {
         modulen *= 3 << (Math.min(Math.abs(parseInt(`${modulen}`)), 2));
      }
      if (becomee.length == launcher3.length) {
          let kuaishouL = true;
          let regengE = 5;
         becomee += `${becomee.length >> (Math.min(Math.abs(1), 3))}`;
         kuaishouL = 74 == regengE || kuaishouL;
         regengE -= regengE;
      }
      if ((becomee.length + 1) >= 1) {
          let dangerZ: Array<any> = [862, 609];
          let bcopy_gN = 5.0;
          let eactx = String.fromCharCode(118,95,57,56,95,97,117,116,111,99,108,101,97,114,0);
         becomee = `${eactx.length & becomee.length}`;
         dangerZ = [dangerZ.length / (Math.max(2, 9))];
         bcopy_gN -= 1 << (Math.min(3, dangerZ.length));
         eactx += `${2 + parseInt(`${bcopy_gN}`)}`;
      }
      let transferL = logoutP <= 7797818;
      do {
         logoutP *= logoutP;
         if (transferL) {
            break;
         }
      } while (transferL && (1.86 <= modulen));
      while (3.30 < (modulen + 3.26)) {
         modulen += launcher3.length;
         break;
      }
      resendS = "3";
   let greenz = resendS.length >= 9234374;
   do {
      resendS += `${storeo.length}`;
      if (greenz) {
         break;
      }
   } while ((resendS.length <= 1 && loadingP) && greenz);
      foregroundi = [parseInt(`${close5}`)];
            const result = await ttReactnativejsMalaysia.get(ttGemfile.userGetCountries);

   let crown2 = loadingP ? !loadingP : loadingP;
   do {
      loadingP = 95.48 <= close5;
      if (crown2) {
         break;
      }
   } while (crown2 && (casting6 >= 4.36));
   while (!loadingP) {
      close5 /= Math.max(1 ^ resendS.length, 5);
      break;
   }
   for (let a = 0; a < 1; a++) {
      loadingP = storeo == String.fromCharCode(78,0);
   }

            if (result.success === false) {

      casting6 -= parseFloat(`${2 ^ appsm.length}`);
      loadingP = appsm.length >= resendS.length;
      resendS = `${foregroundi.length >> (Math.min(1, Math.abs(parseInt(`${close5}`))))}`;
                throw result.message;
            }

            return result.data as ttGradleTrash[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

      storeo = `${parseInt(`${close5}`) * 3}`;
   for (let l = 0; l < 2; l++) {
       let description_7x = 5;
       let penaltyo = 4;
       let time_6nh = 4.0;
      for (let j = 0; j < 2; j++) {
         penaltyo %= Math.max(1, 4);
      }
      if (description_7x > penaltyo) {
         description_7x &= description_7x - penaltyo;
      }
         time_6nh *= parseFloat(`${1}`);
      for (let u = 0; u < 1; u++) {
         penaltyo |= 1 ^ penaltyo;
      }
         penaltyo >>= Math.min(3, Math.abs(parseInt(`${time_6nh}`) & 1));
         penaltyo |= penaltyo * 3;
      let yingD = description_7x <= 6186567;
      do {
          let updatesp = 2.0;
          let usera: Array<any> = [524, 2];
          let club6 = 2.0;
          let qnewinterstitiale = String.fromCharCode(109,95,53,50,95,105,109,112,111,114,116,0);
         description_7x <<= Math.min(2, Math.abs(1 >> (Math.min(1, usera.length))));
         updatesp -= qnewinterstitiale.length;
         usera.push(qnewinterstitiale.length);
         club6 -= qnewinterstitiale.length;
         if (yingD) {
            break;
         }
      } while ((penaltyo >= description_7x) && yingD);
      while ((1 + description_7x) < 2 && 1 < (1 + penaltyo)) {
         penaltyo |= parseInt(`${time_6nh}`) % 2;
         break;
      }
      for (let i = 0; i < 2; i++) {
          let private_o6 = 0.0;
          let yellowf = 0.0;
          let formZ = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,0);
          let dplusJ = String.fromCharCode(99,106,112,101,103,0);
         penaltyo &= formZ.length;
         private_o6 *= parseInt(`${private_o6}`) | parseInt(`${yellowf}`);
         yellowf /= Math.max(parseFloat(`${parseInt(`${yellowf}`)}`), 3);
         formZ = `${parseInt(`${private_o6}`)}`;
         dplusJ += "1";
      }
      foregroundi = [3];
   }
      close5 /= Math.max(1, ((loadingP ? 1 : 1) * parseInt(`${close5}`)));
            throw e;
        }
    }
}
