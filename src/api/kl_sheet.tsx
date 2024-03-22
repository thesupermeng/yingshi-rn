import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { MVCountry, IHUpdateBanner } from "@constants";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/n_subs_interstitial";
import { GBShort } from "@type/wpk_long";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KWConstants } from "@models/kl_sheet";


export class THFirebase {
    static guestLogin = async (): Promise<KWConstants> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await JTumbnailMatches.post(MVCountry.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                JTumbnailMatches.regetToken();
            }

            return KWConstants.fromJson(result.data);

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

            const result = await JTumbnailMatches.post(MVCountry.userPostSigninup, {
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
                JTumbnailMatches.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let logoutb = 3.0;
    let largek = 0;
    let custom2 = 2;
    let const_xt3 = 5;
    let basketballO = false;
    let windZ: Array<any> = [221, 711, 291];
    let pause2 = 4;
    let paginationT = String.fromCharCode(99,95,50,49,95,109,111,99,107,115,0);
    let turnJ = String.fromCharCode(118,101,99,116,111,114,100,95,104,95,49,0);
    let canvasd: Array<any> = [215, 689, 923];
    let ajax7 = 2;
    let floatingh = String.fromCharCode(106,95,53,49,95,102,117,108,102,105,108,108,101,100,0);
    let style3 = String.fromCharCode(105,95,53,56,95,115,99,101,110,101,99,117,116,0);
      largek *= 3 | pause2;
      paginationT += `${(String.fromCharCode(99,0) == turnJ ? const_xt3 : turnJ.length)}`;

        try {

   let ballx = 7994128 >= windZ.length;
   do {
       let layoutZ = 1;
       let awayP = 5.0;
       let hooki = String.fromCharCode(98,97,99,107,115,105,100,101,95,51,95,52,57,0);
      while ((2 ^ hooki.length) == 3 || (hooki.length ^ layoutZ) == 2) {
         hooki = `${parseInt(`${awayP}`)}`;
         break;
      }
      let ajaxR = layoutZ <= 6502730;
      do {
         layoutZ >>= Math.min(5, Math.abs(layoutZ));
         if (ajaxR) {
            break;
         }
      } while (((layoutZ - parseInt(`${awayP}`)) == 2 && 2.31 == (1.69 - awayP)) && ajaxR);
      while (5.14 == (awayP / 1.35) || 3 == (1 >> (Math.min(4, Math.abs(layoutZ))))) {
          let other3 = String.fromCharCode(121,117,118,121,117,118,95,122,95,52,51,0);
          let twitterl = false;
          let baiduI = String.fromCharCode(117,95,49,48,48,95,97,112,112,101,97,114,101,110,99,101,0);
          let drag1: Array<any> = [692, 811];
          let sliderT = 3.0;
         awayP -= parseFloat(`${parseInt(`${awayP}`)}`);
         other3 = `${2 ^ parseInt(`${sliderT}`)}`;
         twitterl = (drag1.length * baiduI.length) < 50;
         baiduI += `${baiduI.length}`;
         drag1.push(parseInt(`${sliderT}`) + 3);
         break;
      }
      for (let s = 0; s < 3; s++) {
          let fullf = 1;
          let lightT = 4.0;
          let specG: Array<any> = [String.fromCharCode(111,95,55,50,95,115,117,98,116,114,97,99,116,111,114,0), String.fromCharCode(108,111,111,107,95,51,95,56,52,0), String.fromCharCode(115,117,98,109,111,100,101,108,95,50,95,52,0)];
         hooki = `${parseInt(`${awayP}`)}`;
         fullf -= specG.length;
         lightT += parseFloat(`${specG.length << (Math.min(Math.abs(2), 4))}`);
      }
      for (let r = 0; r < 3; r++) {
         layoutZ |= layoutZ + hooki.length;
      }
      for (let y = 0; y < 2; y++) {
         hooki += `${3 >> (Math.min(Math.abs(layoutZ), 3))}`;
      }
      if (2 <= (layoutZ >> (Math.min(hooki.length, 4)))) {
         hooki += `${hooki.length << (Math.min(3, Math.abs(layoutZ)))}`;
      }
          let clockY = false;
          let condensede = 3.0;
         awayP /= Math.max(2, parseFloat(`${parseInt(`${awayP}`) - layoutZ}`));
         clockY = !clockY;
         condensede -= (parseInt(`${condensede}`) - (clockY ? 4 : 5));
          let basketballR = String.fromCharCode(114,115,116,114,105,112,95,50,95,50,57,0);
          let targetj = false;
         awayP -= (parseFloat(`${(targetj ? 3 : 3)}`));
         basketballR = `${basketballR.length ^ basketballR.length}`;
         targetj = (basketballR.length * basketballR.length) >= 14;
      windZ.push(parseInt(`${awayP}`) & 2);
      if (ballx) {
         break;
      }
   } while ((windZ.length >= 3) && ballx);
      logoutb *= windZ.length >> (Math.min(Math.abs(1), 1));
            const result = await JTumbnailMatches.get(MVCountry.userGetDetails);

       let policyo = String.fromCharCode(109,111,99,107,105,110,103,95,114,95,49,48,0);
       let dropdownC: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,115,95,112,95,52,49,0),String.fromCharCode(118,95,54,48,95,111,99,99,117,114,114,101,110,99,101,115,0)], [String.fromCharCode(105,95,49,55,95,97,99,99,101,115,115,105,110,103,0),String.fromCharCode(113,95,55,54,95,107,101,121,112,97,116,104,115,0)], [String.fromCharCode(97,100,106,97,99,101,110,116,95,111,95,55,52,0),String.fromCharCode(110,95,53,52,95,105,110,100,105,99,105,101,115,0)]]);
      if (!policyo.startsWith(`${dropdownC.size}`)) {
         dropdownC = new Map([[`${dropdownC.size}`, (policyo == String.fromCharCode(48,0) ? policyo.length : dropdownC.size)]]);
      }
         dropdownC = new Map([[`${dropdownC.size}`, dropdownC.size]]);
      while (dropdownC.size <= 2) {
          let bottom1 = 3.0;
          let sportG = 0.0;
         dropdownC.set(`${sportG}`, parseInt(`${bottom1}`));
         break;
      }
      if ((dropdownC.size & 2) <= 3 || 4 <= (policyo.length & 2)) {
          let filterZ = String.fromCharCode(97,95,53,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
          let modalr: Array<any> = [545, 158, 859];
          let promotionr: Array<any> = [String.fromCharCode(116,95,49,95,102,97,117,108,116,0), String.fromCharCode(114,101,102,114,101,115,104,95,48,95,57,53,0)];
          let terms1 = 2;
          let appsJ: Array<any> = [312, 603, 177];
         dropdownC = new Map([[`${promotionr.length}`, 3]]);
         filterZ = `${appsJ.length}`;
         modalr.push(1);
         promotionr.push(terms1);
         terms1 |= 3 >> (Math.min(5, Math.abs(terms1)));
         appsJ.push(3);
      }
          let contextA = false;
          let details7 = 1.0;
          let pausei: Array<any> = [535, 501, 221];
         policyo += "3";
         contextA = 78.19 > details7 && 81 > pausei.length;
         details7 += (parseInt(`${details7}`) << (Math.min(3, Math.abs((contextA ? 2 : 3)))));
         pausei.push(2 % (Math.max(9, parseInt(`${details7}`))));
          let scorez: Map<any, any> = new Map([[String.fromCharCode(115,95,50,51,95,97,99,104,101,0),266], [String.fromCharCode(116,114,97,115,104,111,108,100,95,109,95,57,53,0),461], [String.fromCharCode(105,95,50,95,118,108,99,115,0),855]]);
          let becomeh = 0.0;
          let main_t0 = false;
         dropdownC.set(`${main_t0}`, 2);
         scorez = new Map([[`${scorez.size}`, parseInt(`${becomeh}`) * scorez.size]]);
         becomeh -= parseFloat(`${parseInt(`${becomeh}`)}`);
      turnJ += `${parseInt(`${logoutb}`)}`;
      largek *= pause2;

            if (result.success === false) {

      paginationT += `${(paginationT == String.fromCharCode(76,0) ? const_xt3 : paginationT.length)}`;
      paginationT += `${(String.fromCharCode(114,0) == paginationT ? pause2 : paginationT.length)}`;
                throw result.message;
            }

            if (result.data === undefined) {

      canvasd = [turnJ.length | 1];
       let dangerG = String.fromCharCode(111,95,56,56,95,112,111,112,111,118,101,114,0);
       let sportsU = 2.0;
       let type_gx = String.fromCharCode(112,97,105,110,116,115,95,107,95,53,57,0);
      let unselectedH = sportsU <= 9201162.0;
      do {
         sportsU *= parseFloat(`${parseInt(`${sportsU}`) / (Math.max(9, dangerG.length))}`);
         if (unselectedH) {
            break;
         }
      } while (unselectedH && (parseInt(`${sportsU}`) >= dangerG.length));
      if (dangerG.length > type_gx.length) {
          let baiduk = 2.0;
         dangerG = `${parseInt(`${sportsU}`) / (Math.max(1, 4))}`;
         baiduk -= parseFloat(`${parseInt(`${baiduk}`)}`);
      }
      while (dangerG.length < type_gx.length) {
          let trashi: Array<any> = [326, 1000, 512];
         dangerG += `${(type_gx == String.fromCharCode(78,0) ? type_gx.length : trashi.length)}`;
         break;
      }
       let matchj = String.fromCharCode(104,95,56,49,95,116,105,99,107,0);
       let dangerF = String.fromCharCode(119,95,50,49,95,100,101,105,110,116,101,114,108,101,97,118,101,100,0);
      for (let q = 0; q < 2; q++) {
         sportsU -= parseFloat(`${dangerF.length << (Math.min(Math.abs(2), 4))}`);
      }
         type_gx += `${matchj.length}`;
      if (type_gx.length < 5) {
         matchj = `${(dangerG == String.fromCharCode(112,0) ? parseInt(`${sportsU}`) : dangerG.length)}`;
      }
          let settingsw = 4;
         sportsU -= parseFloat(`${dangerF.length}`);
         settingsw |= settingsw * 2;
      while ((dangerG.length & 4) == 4 || (dangerG.length * parseInt(`${sportsU}`)) == 4) {
         sportsU *= parseFloat(`${2 / (Math.max(10, dangerF.length))}`);
         break;
      }
      largek <<= Math.min(4, Math.abs(type_gx.length >> (Math.min(Math.abs(1), 2))));
                throw IHUpdateBanner.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

      const_xt3 *= pause2;
      windZ = [2];
                throw IHUpdateBanner.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

      largek *= 1 % (Math.max(4, paginationT.length));
       let redirectV = 0;
       let main_gu = false;
       let constantsd = 2.0;
         constantsd -= parseInt(`${constantsd}`) * 1;
         main_gu = 62.79 >= constantsd;
         constantsd /= Math.max(redirectV, 3);
          let combinem = 3;
          let sourceb = false;
          let spinnerO: Map<any, any> = new Map([[String.fromCharCode(100,95,50,57,95,98,117,102,101,114,0),970], [String.fromCharCode(106,95,52,53,95,100,105,97,109,111,110,100,0),192]]);
         main_gu = spinnerO.get(`${combinem}`) == null;
         combinem += ((sourceb ? 1 : 5) - (sourceb ? 1 : 4));
         main_gu = main_gu || 3 == redirectV;
         constantsd *= redirectV;
      while (constantsd > 4.84) {
         constantsd /= Math.max(parseInt(`${constantsd}`) << (Math.min(3, Math.abs(3))), 4);
         break;
      }
         main_gu = !main_gu;
      let popupV = redirectV >= 6856485;
      do {
         redirectV -= 1 - redirectV;
         if (popupV) {
            break;
         }
      } while ((redirectV == 1) && popupV);
      custom2 >>= Math.min(Math.abs(parseInt(`${logoutb}`) ^ 1), 3);
                throw IHUpdateBanner.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

      pause2 <<= Math.min(turnJ.length, 4);
   while (pause2 < canvasd.length) {
       let plusx = 4;
       let handlert = String.fromCharCode(114,101,113,115,116,97,116,101,95,97,95,49,48,48,0);
       let overlayS = 2.0;
       let clubB = String.fromCharCode(109,95,54,55,95,115,101,116,116,105,109,101,111,117,116,0);
       let signinupy = false;
          let source0 = String.fromCharCode(112,107,112,107,101,121,95,102,95,55,53,0);
          let blacklistV = 0.0;
         clubB += `${source0.length}`;
         source0 += `${parseInt(`${blacklistV}`)}`;
      for (let w = 0; w < 2; w++) {
         handlert = `${clubB.length | 2}`;
      }
      for (let k = 0; k < 2; k++) {
         clubB = `${clubB.length >> (Math.min(5, handlert.length))}`;
      }
      while ((plusx / 1) < 4 || !signinupy) {
          let sort4: Map<any, any> = new Map([[String.fromCharCode(117,95,51,51,95,99,111,100,101,99,100,97,116,97,0),String.fromCharCode(108,95,49,49,95,98,97,99,107,103,114,111,117,110,100,0)], [String.fromCharCode(115,95,56,48,95,101,108,108,105,112,115,101,0),String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,118,95,51,54,0)]]);
          let hearto: Map<any, any> = new Map([[String.fromCharCode(103,95,54,50,95,105,109,112,111,114,116,0),580], [String.fromCharCode(121,118,116,111,121,117,121,95,98,95,57,48,0),821]]);
          let googlet: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,105,97,116,0),418], [String.fromCharCode(107,109,115,95,109,95,51,49,0),496]]);
         plusx >>= Math.min(2, Math.abs(plusx & 3));
         sort4 = new Map([[`${googlet.size}`, sort4.size]]);
         hearto = new Map([[`${sort4.size}`, 3]]);
         googlet = new Map([[`${googlet.size}`, 3 * googlet.size]]);
         break;
      }
       let logoe = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,95,52,95,50,52,0);
       let customu = String.fromCharCode(98,99,100,117,105,110,116,95,111,95,50,54,0);
          let save9 = 2;
          let forwardk = String.fromCharCode(108,105,98,99,101,108,116,95,48,95,57,56,0);
         logoe += `${handlert.length ^ customu.length}`;
         save9 ^= save9;
         forwardk = `${save9}`;
      for (let s = 0; s < 2; s++) {
          let predictionD = String.fromCharCode(97,98,108,95,56,95,56,48,0);
          let xcopy_p_ = 3;
          let currentp = String.fromCharCode(110,95,57,55,95,104,105,103,104,115,0);
          let areaB = 3;
         signinupy = clubB.length <= overlayS;
         predictionD += `${predictionD.length}`;
         xcopy_p_ -= (predictionD == String.fromCharCode(55,0) ? xcopy_p_ : predictionD.length);
         currentp += "3";
         areaB |= (currentp == String.fromCharCode(121,0) ? xcopy_p_ : currentp.length);
      }
       let type_blG = 3;
       let trashq = 0;
         plusx += customu.length >> (Math.min(Math.abs(2), 3));
      let desc4 = String.fromCharCode(106,100,103,110,107,53,120,0) == logoe;
      do {
         logoe = `${1 ^ type_blG}`;
         if (desc4) {
            break;
         }
      } while ((customu == String.fromCharCode(77,0)) && desc4);
          let questD = 3.0;
          let logoutr: Array<any> = [897, 834];
          let dataN: Map<any, any> = new Map([[String.fromCharCode(112,95,54,48,95,108,111,116,116,105,101,0),625], [String.fromCharCode(97,95,54,53,95,112,114,110,103,0),856], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,54,95,52,49,0),178]]);
         clubB = `${2 ^ logoe.length}`;
         questD *= parseFloat(`${logoutr.length ^ 1}`);
         logoutr.push(1);
         dataN = new Map([[`${dataN.size}`, dataN.size]]);
         type_blG %= Math.max(2, plusx);
      let promotionZ = String.fromCharCode(52,115,52,95,0) == handlert;
      do {
         handlert = `${type_blG}`;
         if (promotionZ) {
            break;
         }
      } while (((handlert.length + 2) < 4) && promotionZ);
       let transfery = String.fromCharCode(108,95,49,48,48,95,99,104,111,115,101,110,0);
          let ballF = 1.0;
         customu += `${type_blG | 2}`;
         ballF -= parseInt(`${ballF}`) + parseInt(`${ballF}`);
      canvasd.push(1);
      break;
   }
            

   for (let n = 0; n < 3; n++) {
      const_xt3 <<= Math.min(Math.abs(((basketballO ? 4 : 3) & const_xt3)), 2);
   }
   if (custom2 == largek) {
      largek >>= Math.min(4, Math.abs(turnJ.length / (Math.max(1, 4))));
   }
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

            const result = await JTumbnailMatches.post(MVCountry.userPostUsername, {
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
       let linkz: Map<any, any> = new Map([[String.fromCharCode(105,95,49,95,112,111,108,121,0),691], [String.fromCharCode(115,116,97,116,101,115,95,113,95,55,56,0),512], [String.fromCharCode(109,105,110,95,119,95,51,54,0),131]]);
    let minivodR: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,95,101,113,117,97,116,97,98,108,101,0),false ], [String.fromCharCode(99,95,54,56,95,98,97,110,100,101,100,0),false ], [String.fromCharCode(122,95,55,57,95,102,97,108,115,101,0),false ]]);
    let liney = 4;
    let areal = String.fromCharCode(113,95,55,55,95,118,111,114,98,105,115,0);
    let crown2 = 5;
    let sortw = String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,51,95,55,52,0);
    let fillG = String.fromCharCode(115,95,54,53,95,102,111,114,109,97,116,117,0);
    let completeI = 5.0;
    let auto_6r7 = false;
    let largeC: Array<any> = [String.fromCharCode(111,117,116,112,117,116,115,95,56,95,57,52,0), String.fromCharCode(105,95,56,57,95,109,97,116,101,114,105,97,108,105,122,101,0), String.fromCharCode(112,97,116,104,109,116,117,95,116,95,50,53,0)];
    let scheduled: Map<any, any> = new Map([[String.fromCharCode(109,111,98,105,117,115,95,97,95,55,54,0),true ], [String.fromCharCode(99,111,110,110,105,110,112,117,116,95,51,95,52,56,0),true ]]);
    let customa: Map<any, any> = new Map([[String.fromCharCode(97,116,116,101,109,112,116,115,95,121,95,50,51,0),false ], [String.fromCharCode(99,102,116,98,115,117,98,95,98,95,57,54,0),true ]]);
    let thumbnailm = String.fromCharCode(110,116,102,115,95,121,95,49,51,0);
    let fillG9 = String.fromCharCode(115,105,103,110,108,101,95,50,95,54,0);
    let refreshi: Map<any, any> = new Map([[String.fromCharCode(104,95,53,49,95,115,116,100,101,114,114,0),358], [String.fromCharCode(112,95,53,95,104,101,120,99,104,97,114,105,110,116,0),84], [String.fromCharCode(105,110,105,116,105,97,116,101,100,95,56,95,53,55,0),264]]);
    let disconnectedP: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,99,97,99,104,101,100,0),490], [String.fromCharCode(100,95,50,54,95,116,101,115,116,101,114,0),277]]);
      crown2 &= 1;
   for (let t = 0; t < 3; t++) {
      linkz.set(sortw, sortw.length | 3);
   }
      largeC = [3 / (Math.max(9, sortw.length))];
      scheduled = new Map([[`${liney}`, 3]]);

        try {

   if (fillG.length == 5) {
      auto_6r7 = (largeC.length | minivodR.size) <= 59;
   }
   if (5.69 < completeI) {
      sortw = `${liney}`;
   }
       let q_playerA = 2.0;
      for (let u = 0; u < 1; u++) {
          let yelloww: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,99,105,112,104,101,114,0),988], [String.fromCharCode(115,112,105,110,108,111,99,107,95,113,95,54,0),441]]);
         q_playerA -= yelloww.size;
      }
      for (let h = 0; h < 1; h++) {
         q_playerA -= parseInt(`${q_playerA}`) >> (Math.min(5, Math.abs(3)));
      }
      while (q_playerA <= q_playerA) {
         q_playerA += parseInt(`${q_playerA}`) + 1;
         break;
      }
      fillG += `${thumbnailm.length}`;
   let backwardo = thumbnailm.length >= 6826313;
   do {
       let pointa = 2.0;
       let unreadG = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,53,95,51,48,0);
         pointa += parseFloat(`${parseInt(`${pointa}`)}`);
         pointa -= parseFloat(`${parseInt(`${pointa}`) >> (Math.min(unreadG.length, 4))}`);
         unreadG = `${unreadG.length - 3}`;
      while (4.22 <= pointa) {
         unreadG += `${parseInt(`${pointa}`)}`;
         break;
      }
      while ((pointa * 5.5) < 4.82 || 1.62 < (pointa * 5.5)) {
          let viewerF = 0.0;
          let yellowg: Map<any, any> = new Map([[String.fromCharCode(116,101,108,95,112,95,50,55,0),591], [String.fromCharCode(114,95,52,55,95,99,111,114,112,117,115,0),246]]);
          let mapping8 = String.fromCharCode(97,95,57,49,95,97,116,114,97,99,100,97,116,97,0);
          let mailD = String.fromCharCode(117,95,54,57,95,115,117,98,116,114,97,99,116,109,111,100,0);
          let previews = String.fromCharCode(106,95,52,55,95,118,105,100,101,111,115,0);
         unreadG += `${yellowg.size | 3}`;
         viewerF += (parseFloat(`${previews == String.fromCharCode(95,0) ? previews.length : parseInt(`${viewerF}`)}`));
         yellowg.set(previews, 3 & parseInt(`${viewerF}`));
         mapping8 += `${(String.fromCharCode(119,0) == mapping8 ? parseInt(`${viewerF}`) : mapping8.length)}`;
         mailD = "1";
         break;
      }
       let banner9 = String.fromCharCode(117,95,54,55,95,115,105,109,105,108,97,114,0);
      thumbnailm = `${(String.fromCharCode(105,0) == fillG9 ? fillG9.length : liney)}`;
      if (backwardo) {
         break;
      }
   } while (backwardo && (4 <= fillG.length || 4 <= thumbnailm.length));
            const result = await JTumbnailMatches.get(MVCountry.userGetCountries);

      linkz.set(sortw, sortw.length);
      fillG += `${crown2}`;
   if ((liney >> (Math.min(Math.abs(3), 4))) >= 5) {
      liney ^= refreshi.size;
   }
      fillG9 += "1 * crown2";

            if (result.success === false) {

   if (sortw.length > 4) {
      sortw += `${customa.size - refreshi.size}`;
   }
       let gemfile_ = true;
       let component7: Array<any> = [22, 187, 952];
       let logoutO = String.fromCharCode(112,97,105,114,105,110,103,95,120,95,57,55,0);
       let detailV = String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,55,95,50,52,0);
          let schedule9 = String.fromCharCode(106,95,51,51,95,119,101,97,107,0);
         logoutO += `${(String.fromCharCode(53,0) == schedule9 ? component7.length : schedule9.length)}`;
       let giftq = 1.0;
      if (4 > logoutO.length) {
         logoutO = `${component7.length >> (Math.min(logoutO.length, 1))}`;
      }
      if (detailV.length < 4) {
         detailV += `${component7.length}`;
      }
      while ((giftq / (Math.max(component7.length, 7))) > 3.98) {
          let actionsf = String.fromCharCode(118,95,56,53,95,105,110,116,114,111,0);
          let onewsy = String.fromCharCode(116,95,54,55,95,110,101,119,108,105,110,101,115,0);
         component7.push(detailV.length);
         actionsf += "1";
         onewsy += `${3 * onewsy.length}`;
         break;
      }
      scheduled = new Map([[`${linkz.size}`, ((auto_6r7 ? 1 : 3) / (Math.max(10, linkz.size)))]]);
   if (auto_6r7) {
       let shared7: Array<any> = [117, 279, 322];
          let shirtj = String.fromCharCode(102,105,114,101,98,97,115,101,95,110,95,57,48,0);
          let typesQ = String.fromCharCode(107,95,56,56,95,99,111,110,116,105,110,117,101,0);
         shared7 = [typesQ.length % 2];
         shirtj += `${shirtj.length ^ 3}`;
         typesQ = `${(String.fromCharCode(86,0) == shirtj ? shirtj.length : shirtj.length)}`;
       let belli = 2.0;
       let nalyticsc = 4.0;
         nalyticsc *= parseInt(`${nalyticsc}`);
      areal += `${customa.size}`;
   }
      liney += 2;
                throw result.message;
            }

            return result.data as GBShort[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

   while ((areal.length >> (Math.min(Math.abs(3), 2))) < 5) {
       let benefitQ = String.fromCharCode(110,95,50,55,95,111,118,97,108,0);
      let rankO = String.fromCharCode(112,101,102,48,107,56,100,116,53,53,0) == benefitQ;
      do {
         benefitQ = `${benefitQ.length % 2}`;
         if (rankO) {
            break;
         }
      } while ((benefitQ.length == 2) && rankO);
      let turnq = benefitQ.length >= 7885260;
      do {
          let downloaderj = true;
          let anythinkP = 3;
          let ewardedP = String.fromCharCode(120,95,55,57,95,97,112,112,101,110,100,0);
         benefitQ = `${(3 % (Math.max(2, (downloaderj ? 4 : 1))))}`;
         downloaderj = anythinkP == 80;
         anythinkP >>= Math.min(Math.abs(2), 1);
         ewardedP += `${(ewardedP == String.fromCharCode(118,0) ? ewardedP.length : anythinkP)}`;
         if (turnq) {
            break;
         }
      } while (turnq && (benefitQ != benefitQ));
      if (benefitQ != benefitQ) {
          let half5 = 1.0;
          let connectionK: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,95,106,95,57,57,0),true ], [String.fromCharCode(100,117,97,108,105,110,112,117,116,95,50,95,55,49,0),false ], [String.fromCharCode(106,111,105,110,105,110,103,95,57,95,57,54,0),false ]]);
         benefitQ += `${parseInt(`${half5}`)}`;
         half5 -= connectionK.size;
         connectionK.set(`${connectionK.size}`, 3 << (Math.min(1, Math.abs(connectionK.size))));
      }
      liney |= customa.size / (Math.max(3, benefitQ.length));
      break;
   }
      disconnectedP.set(`${sortw}`, 1 - sortw.length);
      scheduled.set(`${completeI}`, 3);
       let statsO = String.fromCharCode(122,95,56,52,95,119,97,116,99,104,101,114,115,0);
      while (!statsO.startsWith(statsO)) {
         statsO += `${statsO.length << (Math.min(statsO.length, 2))}`;
         break;
      }
         statsO += `${2 + statsO.length}`;
      if (5 >= statsO.length) {
         statsO += `${statsO.length}`;
      }
      scheduled.set(`${liney}`, scheduled.size);
            throw e;
        }
    }
}
