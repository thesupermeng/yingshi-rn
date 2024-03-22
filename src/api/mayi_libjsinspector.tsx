import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { mayi_Iconclosewhitewithbg, mayi_Turndown } from "@constants";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/mayi_middleware_apps";
import { mayi_Core } from "@type/mayi_green";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mayi_Gift } from "@models/mayi_libjsinspector";


export class mayi_Injury {
    static guestLogin = async (): Promise<mayi_Gift> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await mayi_ReactBang.post(mayi_Iconclosewhitewithbg.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                mayi_ReactBang.regetToken();
            }

            return mayi_Gift.fromJson(result.data);

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

            const result = await mayi_ReactBang.post(mayi_Iconclosewhitewithbg.userPostSigninup, {
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
                mayi_ReactBang.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let libswscalem = String.fromCharCode(119,95,54,49,95,114,101,99,118,109,115,103,0);
    let stylee = 4.0;
    let manifestV = 4;
    let eighteent = String.fromCharCode(111,95,55,57,95,105,115,100,105,97,99,114,105,116,105,99,0);
    let basketballplayerplaceholderg = String.fromCharCode(103,114,111,119,105,110,103,95,48,95,50,49,0);
    let subinC = 4;
    let redscoreballb = 2.0;
    let libreactnativeblobi = 5;
    let bgvipxvodc: Array<any> = [87, 920];
    let selectedj = String.fromCharCode(116,95,53,56,95,116,108,111,103,0);
    let iconorientationJ: Map<any, any> = new Map([[String.fromCharCode(109,95,51,51,95,101,122,111,115,0),String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,105,95,57,55,0)], [String.fromCharCode(117,95,53,53,95,105,102,111,114,109,97,116,0),String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,95,99,95,57,48,0)]]);
    let penaltyshootnogoal1 = String.fromCharCode(115,95,54,54,95,114,119,110,100,0);
    let pathr = 1;
    let chatroombackgroundm = String.fromCharCode(115,116,97,98,105,108,105,116,121,95,100,95,56,53,0);
   if (4.57 < redscoreballb) {
      redscoreballb *= (parseFloat(`${String.fromCharCode(98,0) == eighteent ? parseInt(`${redscoreballb}`) : eighteent.length}`));
   }
      basketballplayerplaceholderg += `${manifestV * 1}`;
   while ((5 ^ basketballplayerplaceholderg.length) >= 1) {
      basketballplayerplaceholderg += `${bgvipxvodc.length >> (Math.min(5, Math.abs(iconorientationJ.size)))}`;
      break;
   }

        try {

      iconorientationJ = new Map([[`${iconorientationJ.size}`, parseInt(`${stylee}`)]]);
       let disconnectedT = 1.0;
       let anythinkJ = 4.0;
         anythinkJ += 1 | parseInt(`${disconnectedT}`);
         anythinkJ -= parseInt(`${disconnectedT}`) - 1;
       let fastforwardM = String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,102,95,54,51,0);
       let playY = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,51,95,50,0);
      for (let d = 0; d < 2; d++) {
         disconnectedT += playY.length >> (Math.min(Math.abs(1), 5));
      }
         disconnectedT -= 3;
      let iconarrowrightorangeI = 7132681.0 <= anythinkJ;
      do {
         anythinkJ += 3 | parseInt(`${disconnectedT}`);
         if (iconarrowrightorangeI) {
            break;
         }
      } while (iconarrowrightorangeI && (2 <= fastforwardM.length));
      redscoreballb += (parseFloat(`${String.fromCharCode(55,0) == basketballplayerplaceholderg ? subinC : basketballplayerplaceholderg.length}`));
       let iconclosewhitewithbgI = 3;
      if (2 == (1 << (Math.min(5, Math.abs(iconclosewhitewithbgI)))) && (iconclosewhitewithbgI << (Math.min(2, Math.abs(iconclosewhitewithbgI)))) == 1) {
         iconclosewhitewithbgI *= iconclosewhitewithbgI;
      }
         iconclosewhitewithbgI >>= Math.min(Math.abs(1 ^ iconclosewhitewithbgI), 5);
         iconclosewhitewithbgI &= iconclosewhitewithbgI;
      redscoreballb *= parseFloat(`${iconclosewhitewithbgI ^ 2}`);
            const result = await mayi_ReactBang.get(mayi_Iconclosewhitewithbg.userGetDetails);

      libswscalem += "1";
      redscoreballb -= parseFloat(`${1}`);
   for (let l = 0; l < 2; l++) {
      manifestV ^= (String.fromCharCode(86,0) == basketballplayerplaceholderg ? basketballplayerplaceholderg.length : libswscalem.length);
   }

            if (result.success === false) {

   for (let x = 0; x < 1; x++) {
      redscoreballb -= (parseFloat(`${libswscalem == String.fromCharCode(104,0) ? libswscalem.length : bgvipxvodc.length}`));
   }
   while (stylee >= basketballplayerplaceholderg.length) {
       let iconrightorangeH = String.fromCharCode(102,95,55,54,95,114,101,119,105,110,100,0);
       let inouttargetrede = 0.0;
       let iconfeedbackj = 0.0;
       let viewsu = false;
         inouttargetrede += ((viewsu ? 1 : 1) | iconrightorangeH.length);
       let rocketu = 5.0;
      for (let o = 0; o < 2; o++) {
          let predictionwinK = false;
          let evento: Map<any, any> = new Map([[String.fromCharCode(112,116,105,111,110,115,95,97,95,50,0),String.fromCharCode(115,121,110,116,97,120,95,111,95,50,56,0)], [String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,121,95,56,52,0),String.fromCharCode(115,95,53,54,95,108,105,98,112,111,115,116,112,114,111,99,0)]]);
          let inactiveY = String.fromCharCode(112,95,51,52,95,115,101,97,108,98,111,120,0);
          let styleH = String.fromCharCode(100,95,54,50,95,116,101,109,112,110,97,109,101,0);
          let star6 = 4.0;
         inouttargetrede /= Math.max(((predictionwinK ? 4 : 5) % (Math.max(parseInt(`${iconfeedbackj}`), 9))), 4);
         predictionwinK = styleH.length <= evento.size;
         evento.set(`${star6}`, parseInt(`${star6}`) % (Math.max(8, evento.size)));
         inactiveY += `${(String.fromCharCode(102,0) == styleH ? parseInt(`${star6}`) : styleH.length)}`;
      }
         iconfeedbackj /= Math.max(3, parseFloat(`${parseInt(`${rocketu}`) - iconrightorangeH.length}`));
      let graphics_ = viewsu ? !viewsu : viewsu;
      do {
         viewsu = iconrightorangeH == String.fromCharCode(55,0);
         if (graphics_) {
            break;
         }
      } while ((!viewsu) && graphics_);
      while (!viewsu) {
         inouttargetrede += parseInt(`${rocketu}`);
         break;
      }
          let c_managerU = true;
          let statsb: Map<any, any> = new Map([[String.fromCharCode(117,118,108,99,95,48,95,56,53,0),690], [String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,119,95,54,50,0),589]]);
          let rankd = 0.0;
         iconfeedbackj += parseFloat(`${1 & parseInt(`${rankd}`)}`);
         c_managerU = !c_managerU;
         statsb.set(`${c_managerU}`, 2 << (Math.min(2, Math.abs(statsb.size))));
         rankd *= 1;
       let livef = true;
       let entryy = false;
         inouttargetrede *= ((viewsu ? 3 : 3) + parseInt(`${iconfeedbackj}`));
       let chart6 = String.fromCharCode(109,111,117,115,101,95,53,95,50,49,0);
       let appso = String.fromCharCode(113,117,97,114,116,122,95,119,95,49,55,0);
      let rocketg = viewsu ? !viewsu : viewsu;
      do {
         viewsu = ((appso.length * (viewsu ? appso.length : 79)) <= 79);
         if (rocketg) {
            break;
         }
      } while (rocketg && (viewsu));
         viewsu = rocketu <= 60.93 || iconrightorangeH == String.fromCharCode(122,0);
      stylee += parseInt(`${inouttargetrede}`);
      break;
   }
   let combine0 = stylee >= 6641304.0;
   do {
       let sortg = String.fromCharCode(116,111,112,105,99,115,95,53,95,54,51,0);
      let package_3zD = 8135045 >= sortg.length;
      do {
          let anythinkn: Array<any> = [185, 205];
          let sellmathbackgroundg = 5;
          let userx = 4.0;
          let header0 = String.fromCharCode(109,112,111,115,95,49,95,50,53,0);
         sortg = `${sortg.length}`;
         anythinkn = [anythinkn.length / (Math.max(10, header0.length))];
         sellmathbackgroundg *= 2 >> (Math.min(3, anythinkn.length));
         userx /= Math.max(anythinkn.length & 3, 1);
         header0 += `${(header0 == String.fromCharCode(71,0) ? header0.length : parseInt(`${userx}`))}`;
         if (package_3zD) {
            break;
         }
      } while (package_3zD && (sortg == String.fromCharCode(52,0) && 1 > sortg.length));
      for (let c = 0; c < 1; c++) {
         sortg += `${(sortg == String.fromCharCode(85,0) ? sortg.length : sortg.length)}`;
      }
      for (let d = 0; d < 3; d++) {
         sortg += "2";
      }
      stylee /= Math.max(1, subinC ^ 1);
      if (combine0) {
         break;
      }
   } while (combine0 && (basketballplayerplaceholderg.startsWith(`${stylee}`)));
                throw result.message;
            }

            if (result.data === undefined) {

   for (let r = 0; r < 2; r++) {
      libreactnativeblobi *= selectedj.length;
   }
   let questV = String.fromCharCode(54,102,103,110,98,102,118,0) == basketballplayerplaceholderg;
   do {
       let chinasamej = 2;
       let gemfileg = String.fromCharCode(109,95,53,57,95,114,101,115,101,114,118,101,115,105,122,101,0);
       let friendsd: Map<any, any> = new Map([[String.fromCharCode(106,109,101,109,115,121,115,95,101,95,51,49,0),String.fromCharCode(115,95,57,50,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0)], [String.fromCharCode(111,95,54,49,95,119,114,105,116,101,0),String.fromCharCode(107,95,57,52,95,110,111,99,97,115,101,0)], [String.fromCharCode(119,95,52,57,95,121,117,118,116,101,115,116,0),String.fromCharCode(104,95,54,53,95,112,97,108,108,101,116,101,0)]]);
       let arrowup0 = String.fromCharCode(108,95,51,51,95,112,114,101,99,97,108,99,117,108,97,116,101,0);
       let mailS = String.fromCharCode(116,114,105,112,108,101,116,95,110,95,52,51,0);
       let nalyticsa = String.fromCharCode(112,95,49,50,95,109,101,114,103,101,100,0);
       let orientationU = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,52,95,49,55,0);
      while (orientationU.length > 3) {
         orientationU = "3";
         break;
      }
      if (4 < (4 | chinasamej) || (mailS.length | chinasamej) < 4) {
         chinasamej += (String.fromCharCode(95,0) == orientationU ? friendsd.size : orientationU.length);
      }
         gemfileg = `${(String.fromCharCode(111,0) == gemfileg ? chinasamej : gemfileg.length)}`;
          let modityp = 1.0;
          let reddownarrowN = String.fromCharCode(101,95,49,48,95,120,112,111,114,116,101,100,0);
         gemfileg = `${2 % (Math.max(7, chinasamej))}`;
         modityp -= reddownarrowN.length;
         reddownarrowN = `${parseInt(`${modityp}`)}`;
          let librrca = 0;
          let renewo = 3.0;
         arrowup0 += `${orientationU.length & 3}`;
         librrca %= Math.max(librrca, 4);
         renewo *= parseInt(`${renewo}`) & 1;
      for (let b = 0; b < 3; b++) {
          let iconwatchnowW = String.fromCharCode(99,95,57,57,95,118,97,108,115,0);
          let appsD = 3.0;
          let castE = 0.0;
         arrowup0 = `${parseInt(`${appsD}`)}`;
         iconwatchnowW = "2";
         castE *= parseFloat(`${iconwatchnowW.length}`);
      }
      while (3 <= (mailS.length | friendsd.size) || (3 | mailS.length) <= 4) {
         mailS += `${orientationU.length}`;
         break;
      }
      while (nalyticsa.length >= 2 || gemfileg != String.fromCharCode(66,0)) {
          let informationa: Array<any> = [395, 621];
          let cornershootB: Array<any> = [855, 89];
          let minivodA = String.fromCharCode(119,95,52,56,95,108,111,99,97,108,101,0);
          let predictionbannershared1 = false;
          let termsf = String.fromCharCode(109,105,109,105,99,95,115,95,50,51,0);
         gemfileg += `${3 + mailS.length}`;
         informationa = [minivodA.length / (Math.max(2, 5))];
         cornershootB = [((predictionbannershared1 ? 5 : 3))];
         minivodA = `${termsf.length}`;
         termsf += `${cornershootB.length / (Math.max(informationa.length, 1))}`;
         break;
      }
       let libsentryn = 0;
          let reactnativejsQ: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,108,115,112,108,112,99,0),String.fromCharCode(102,105,108,101,115,121,115,116,101,109,95,49,95,52,49,0)], [String.fromCharCode(97,95,56,53,95,115,116,100,101,114,114,0),String.fromCharCode(115,101,116,95,48,95,54,48,0)], [String.fromCharCode(115,111,98,105,110,100,95,114,95,57,55,0),String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,111,95,57,52,0)]]);
          let floatingb: Map<any, any> = new Map([[String.fromCharCode(116,97,98,95,113,95,51,55,0),834], [String.fromCharCode(112,111,105,110,116,115,95,122,95,49,55,0),923]]);
         arrowup0 = `${orientationU.length}`;
         reactnativejsQ = new Map([[`${floatingb.size}`, reactnativejsQ.size]]);
         floatingb.set(`${floatingb.size}`, reactnativejsQ.size);
       let hejiO = String.fromCharCode(117,95,54,48,95,99,111,108,120,0);
       let umeng8 = 4.0;
       let signinupo = 4.0;
         umeng8 -= nalyticsa.length >> (Math.min(4, Math.abs(friendsd.size)));
      if (mailS.length <= gemfileg.length) {
         gemfileg += `${1 / (Math.max(9, parseInt(`${signinupo}`)))}`;
      }
      basketballplayerplaceholderg = `${parseInt(`${stylee}`)}`;
      if (questV) {
         break;
      }
   } while (questV && (4 >= (basketballplayerplaceholderg.length * parseInt(`${stylee}`))));
      stylee /= Math.max(libreactnativeblobi << (Math.min(Math.abs(subinC), 4)), 5);
                throw mayi_Turndown.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

      bgvipxvodc.push(libswscalem.length >> (Math.min(Math.abs(3), 1)));
      bgvipxvodc.push(iconorientationJ.size);
       let reactnavigationE = true;
       let darkv = 1;
       let disconnectedF = false;
      if (4 >= (4 | darkv)) {
         darkv += darkv;
      }
      let moduleB = reactnavigationE ? !reactnavigationE : reactnavigationE;
      do {
          let progressp: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,114,95,51,95,50,51,0),3], [String.fromCharCode(103,95,52,57,95,97,115,115,101,114,116,105,111,110,0),116], [String.fromCharCode(113,119,111,114,100,95,48,95,53,55,0),968]]);
          let brightnessg: Array<any> = [724, 202, 343];
          let moon0 = false;
          let libreanimatedm = 1.0;
         reactnavigationE = !moon0 || progressp.size < 98;
         progressp.set(`${libreanimatedm}`, brightnessg.length | 1);
         brightnessg.push(3 ^ parseInt(`${libreanimatedm}`));
         moon0 = parseFloat(`${brightnessg.length}`) <= libreanimatedm;
         if (moduleB) {
            break;
         }
      } while (moduleB && (darkv < 2));
      while ((4 - darkv) > 3) {
          let penaltymatchiconQ = 1.0;
          let teamdetailsbg3 = 4.0;
          let vignetteb = 2.0;
          let g_imageP = String.fromCharCode(118,100,101,99,95,50,95,49,48,48,0);
         darkv %= Math.max(1, g_imageP.length | 1);
         penaltymatchiconQ /= Math.max(2 * parseInt(`${teamdetailsbg3}`), 1);
         teamdetailsbg3 /= Math.max(5, parseFloat(`${parseInt(`${vignetteb}`)}`));
         vignetteb -= parseInt(`${teamdetailsbg3}`);
         g_imageP = `${parseInt(`${vignetteb}`)}`;
         break;
      }
      while (reactnavigationE) {
         disconnectedF = 91 < darkv;
         break;
      }
         reactnavigationE = darkv <= 35;
          let gpayQ = 5.0;
          let singaporeQ = String.fromCharCode(104,95,51,54,95,99,99,111,117,110,116,0);
          let profileB = String.fromCharCode(101,95,53,54,95,103,111,112,115,0);
         darkv <<= Math.min(Math.abs(darkv / 2), 2);
         gpayQ *= parseInt(`${gpayQ}`);
         singaporeQ += `${(singaporeQ == String.fromCharCode(111,0) ? singaporeQ.length : parseInt(`${gpayQ}`))}`;
         profileB += "2";
      while (!disconnectedF) {
         reactnavigationE = !reactnavigationE;
         break;
      }
         reactnavigationE = darkv >= 76 && !reactnavigationE;
      for (let u = 0; u < 1; u++) {
         disconnectedF = !reactnavigationE;
      }
      iconorientationJ = new Map([[`${bgvipxvodc.length}`, 2 << (Math.min(5, penaltyshootnogoal1.length))]]);
                throw mayi_Turndown.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

   while (penaltyshootnogoal1.length < eighteent.length) {
       let videobufferloadingm: Array<any> = [String.fromCharCode(99,108,101,97,110,101,100,95,110,95,50,54,0), String.fromCharCode(116,97,103,98,105,116,95,98,95,50,56,0)];
       let robotoU = false;
       let settingQ: Array<any> = [String.fromCharCode(97,117,120,95,105,95,54,57,0), String.fromCharCode(98,105,116,115,116,114,105,110,103,95,107,95,49,52,0)];
       let downarrowo: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,116,100,115,102,0),89], [String.fromCharCode(106,95,55,48,95,108,108,118,105,100,101,110,99,100,115,112,0),951]]);
          let searchE = String.fromCharCode(112,121,116,104,111,110,95,108,95,52,57,0);
         downarrowo = new Map([[`${downarrowo.size}`, settingQ.length]]);
         searchE = "3";
         robotoU = videobufferloadingm.length == 90;
      let selectedY = 5274019 >= settingQ.length;
      do {
         settingQ = [(videobufferloadingm.length << (Math.min(3, Math.abs((robotoU ? 4 : 2)))))];
         if (selectedY) {
            break;
         }
      } while ((3 > (settingQ.length * 3)) && selectedY);
         downarrowo.set(`${robotoU}`, videobufferloadingm.length);
          let contextK = String.fromCharCode(115,116,97,107,105,110,103,95,52,95,56,48,0);
          let inviteV = String.fromCharCode(119,115,119,111,114,100,95,101,95,56,57,0);
          let statsnomoredata1: Map<any, any> = new Map([[String.fromCharCode(105,104,100,114,95,54,95,56,51,0),776], [String.fromCharCode(99,111,110,116,101,120,116,115,95,52,95,49,57,0),436]]);
         settingQ = [downarrowo.size | 2];
         contextK = `${contextK.length}`;
         inviteV += `${contextK.length}`;
         statsnomoredata1.set(inviteV, inviteV.length);
      for (let a = 0; a < 3; a++) {
          let package_9Y = String.fromCharCode(110,97,117,116,105,99,97,108,95,112,95,52,54,0);
          let windu: Array<any> = [709, 280];
          let mintegralJ = String.fromCharCode(114,95,52,54,95,107,115,101,116,0);
          let closem = String.fromCharCode(104,95,55,54,95,121,117,118,112,116,111,121,117,121,0);
         videobufferloadingm = [3];
         package_9Y += `${package_9Y.length}`;
         windu = [2];
         mintegralJ = `${1 << (Math.min(1, closem.length))}`;
         closem = `${mintegralJ.length}`;
      }
      for (let s = 0; s < 3; s++) {
          let plashn = false;
          let chat9 = String.fromCharCode(102,95,56,48,95,105,110,115,101,114,116,0);
          let containerG = String.fromCharCode(120,95,53,51,95,97,100,106,117,115,116,109,101,110,116,0);
         settingQ = [3 >> (Math.min(3, videobufferloadingm.length))];
         plashn = plashn || chat9.length == 80;
         chat9 += `${(3 - (plashn ? 2 : 1))}`;
         containerG = `${containerG.length ^ 1}`;
      }
          let predictionactiveK = String.fromCharCode(110,95,52,55,0);
         downarrowo.set(`${robotoU}`, 2 & settingQ.length);
         predictionactiveK += `${predictionactiveK.length | 3}`;
       let traminiJ = String.fromCharCode(120,95,56,56,95,99,108,97,117,115,101,115,0);
         robotoU = (downarrowo.size % (Math.max(7, videobufferloadingm.length))) < 45;
         settingQ.push(2);
         settingQ.push(((robotoU ? 4 : 1) / (Math.max(7, videobufferloadingm.length))));
      eighteent = `${3 * settingQ.length}`;
      break;
   }
   if (3 > (bgvipxvodc.length << (Math.min(Math.abs(2), 2)))) {
       let typesk = true;
          let predictionwinp = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,119,95,53,49,0);
          let classesN = 3;
         typesk = classesN <= 88;
         predictionwinp += `${predictionwinp.length * 2}`;
         classesN %= Math.max(predictionwinp.length - predictionwinp.length, 5);
          let thailandt = false;
         typesk = typesk && thailandt;
      if (typesk && !typesk) {
          let controlsa = true;
          let boot0 = String.fromCharCode(114,95,56,50,95,115,113,108,105,116,101,114,98,117,0);
          let spec2 = 0;
          let mbnativeadvancedH: Array<any> = [77, 508, 165];
         typesk = mbnativeadvancedH.includes(controlsa);
         controlsa = (boot0.length >> (Math.min(1, Math.abs(spec2)))) == 92;
         boot0 += `${boot0.length % 1}`;
         spec2 <<= Math.min(boot0.length, 5);
         mbnativeadvancedH = [(String.fromCharCode(81,0) == boot0 ? spec2 : boot0.length)];
      }
      libreactnativeblobi &= libreactnativeblobi;
   }
       let userl: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,97,95,49,54,0),81], [String.fromCharCode(104,95,56,49,95,104,109,97,99,0),695], [String.fromCharCode(98,110,108,101,95,49,95,56,54,0),913]]);
       let actionsR = 0.0;
       let minivodL = false;
         actionsR -= 3 / (Math.max(5, parseInt(`${actionsR}`)));
      for (let o = 0; o < 2; o++) {
          let navigationz = String.fromCharCode(104,95,52,49,95,97,108,97,98,97,115,116,101,114,0);
          let dropdownH: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,105,110,103,95,109,95,52,0),664], [String.fromCharCode(100,95,53,48,95,115,116,114,101,97,109,105,110,103,0),148], [String.fromCharCode(109,95,51,57,95,102,111,112,101,110,0),1000]]);
         userl.set(navigationz, (1 | (minivodL ? 5 : 1)));
         navigationz = `${dropdownH.size | 3}`;
         dropdownH = new Map([[`${dropdownH.size}`, dropdownH.size + 1]]);
      }
         minivodL = userl.size >= 2;
      while (4 == userl.size && 1 == (4 - userl.size)) {
         minivodL = 21.47 <= actionsR;
         break;
      }
         minivodL = !minivodL && actionsR == 89.53;
         userl = new Map([[`${userl.size}`, userl.size]]);
          let footballtrophyU = true;
          let forwardW = 1.0;
         actionsR -= parseInt(`${forwardW}`);
         footballtrophyU = (!footballtrophyU ? footballtrophyU : footballtrophyU);
         forwardW /= Math.max(5, (3 + (footballtrophyU ? 2 : 3)));
      if (2 == (userl.size - parseInt(`${actionsR}`)) && (userl.size & 2) == 1) {
         userl.set(`${actionsR}`, userl.size);
      }
         actionsR -= 2 & parseInt(`${actionsR}`);
      selectedj = `${(eighteent == String.fromCharCode(111,0) ? eighteent.length : bgvipxvodc.length)}`;
                throw mayi_Turndown.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

       let register_y9: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,101,100,95,97,95,54,52,0),String.fromCharCode(119,95,53,51,95,107,101,121,118,97,108,0)], [String.fromCharCode(105,95,54,95,114,100,102,116,0),String.fromCharCode(110,116,114,111,95,119,95,55,53,0)]]);
       let sellr: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,97,108,103,111,114,105,116,104,109,0),120], [String.fromCharCode(100,95,51,51,95,119,101,98,112,97,103,101,115,0),948], [String.fromCharCode(108,105,98,99,111,100,101,99,95,119,95,52,56,0),607]]);
      let bootv = register_y9.size >= 7442790;
      do {
          let relatedU = String.fromCharCode(100,95,49,53,95,99,114,111,112,0);
          let desc1 = 2.0;
          let androidM: Map<any, any> = new Map([[String.fromCharCode(111,95,54,95,105,110,116,101,114,112,0),776], [String.fromCharCode(113,95,51,50,95,112,117,116,115,0),602]]);
          let diceN: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,115,95,107,95,53,53,0),true ], [String.fromCharCode(103,97,109,117,116,115,95,51,95,49,53,0),false ], [String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,57,95,51,0),true ]]);
          let selectionF: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,95,52,95,54,52,0),609], [String.fromCharCode(111,95,57,57,95,116,105,109,101,115,116,97,109,112,101,100,0),398]]);
         register_y9.set(`${relatedU}`, selectionF.size % (Math.max(6, relatedU.length)));
         desc1 /= Math.max(parseFloat(`${parseInt(`${desc1}`)}`), 5);
         androidM.set(`${androidM.size}`, diceN.size);
         diceN = new Map([[`${androidM.size}`, androidM.size << (Math.min(Math.abs(3), 5))]]);
         selectionF = new Map([[`${androidM.size}`, androidM.size + parseInt(`${desc1}`)]]);
         if (bootv) {
            break;
         }
      } while (bootv && (register_y9.get(`${sellr.size}`) == null));
      let schedulerW = 9588495 >= register_y9.size;
      do {
         register_y9 = new Map([[`${sellr.size}`, register_y9.size]]);
         if (schedulerW) {
            break;
         }
      } while (schedulerW && ((sellr.size ^ 2) < 3 && (register_y9.size ^ 2) < 3));
          let stringsV = false;
          let pressureI = String.fromCharCode(121,95,56,49,95,104,105,103,104,108,105,103,104,116,0);
          let fastforwardv = String.fromCharCode(115,119,105,122,122,108,101,100,95,116,95,51,0);
         sellr = new Map([[pressureI, fastforwardv.length * 1]]);
         stringsV = (stringsV ? !stringsV : stringsV);
         pressureI += `${(1 * (stringsV ? 5 : 2))}`;
       let combinedS: Array<any> = [87, 945];
       let progressU: Array<any> = [293, 964, 80];
          let thumbnail7: Array<any> = [363, 327, 688];
          let controls4 = String.fromCharCode(118,95,50,53,95,108,111,99,97,108,108,121,0);
         combinedS = [3];
         thumbnail7.push(controls4.length / 2);
         controls4 += `${thumbnail7.length >> (Math.min(Math.abs(1), 4))}`;
          let iconbackwhiteV = String.fromCharCode(120,95,54,53,95,109,105,108,108,105,115,101,99,111,110,100,115,0);
          let soundT = String.fromCharCode(119,95,54,48,95,112,103,115,122,0);
          let searchbar7: Map<any, any> = new Map([[String.fromCharCode(112,111,111,108,115,95,108,95,55,52,0),791], [String.fromCharCode(105,110,115,116,97,108,108,95,55,95,49,51,0),783], [String.fromCharCode(119,97,110,116,95,52,95,56,55,0),783]]);
         sellr = new Map([[`${searchbar7.size}`, 2 << (Math.min(5, Math.abs(searchbar7.size)))]]);
         iconbackwhiteV += `${(soundT == String.fromCharCode(100,0) ? soundT.length : iconbackwhiteV.length)}`;
      libswscalem = `${(penaltyshootnogoal1 == String.fromCharCode(117,0) ? penaltyshootnogoal1.length : libreactnativeblobi)}`;
      subinC >>= Math.min(2, libswscalem.length);
      bgvipxvodc = [(selectedj == String.fromCharCode(73,0) ? selectedj.length : iconorientationJ.size)];
            

   while (4 == libreactnativeblobi) {
      libreactnativeblobi |= 2 | selectedj.length;
      break;
   }
      iconorientationJ.set(`${stylee}`, (libswscalem == String.fromCharCode(99,0) ? parseInt(`${stylee}`) : libswscalem.length));
   if (1 <= (libreactnativeblobi * 5)) {
      libreactnativeblobi &= 1;
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

            const result = await mayi_ReactBang.post(mayi_Iconclosewhitewithbg.userPostUsername, {
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
       let homeloadingV = 2;
    let short_7jQ = 0.0;
    let successF = false;
    let orientationy = 4.0;
    let mathE: Array<any> = [119, 68];
    let headerG: Array<any> = [952, 871];
    let overlayg = true;
    let reminder5: Array<any> = [140, 765];
    let awayteamfieldO = true;
    let reactnativejsN = String.fromCharCode(118,95,51,57,95,114,101,99,105,100,0);
    let navigationl = String.fromCharCode(115,117,98,109,111,100,101,108,95,121,95,57,54,0);
    let connectionw = 2.0;
    let libbufferw = 5.0;
    let catagory0 = String.fromCharCode(103,95,51,55,95,99,97,118,115,100,115,112,0);
    let nativeex_ = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,102,95,52,49,0);
    let champion_: Array<any> = [617, 526, 833];
    let static_wg = String.fromCharCode(108,95,49,54,95,114,116,114,101,101,110,111,100,101,0);
   for (let u = 0; u < 3; u++) {
      successF = ((reactnativejsN.length + (successF ? 74 : reactnativejsN.length)) > 74);
   }
   if (!successF) {
      awayteamfieldO = (navigationl.length * reminder5.length) >= 5;
   }
      successF = headerG.length < 87;
       let lessC = String.fromCharCode(99,111,109,112,111,115,101,100,95,110,95,49,52,0);
      let delegate_cZ = lessC == String.fromCharCode(106,54,110,105,48,106,0);
      do {
         lessC = `${lessC.length | 2}`;
         if (delegate_cZ) {
            break;
         }
      } while (delegate_cZ && (lessC == lessC));
         lessC = `${(lessC == String.fromCharCode(120,0) ? lessC.length : lessC.length)}`;
       let owngoalV = true;
       let suggestions = false;
      navigationl = `${1 - parseInt(`${short_7jQ}`)}`;

        try {

      navigationl += `${headerG.length}`;
      reactnativejsN += `${parseInt(`${short_7jQ}`) % (Math.max(10, homeloadingV))}`;
      connectionw += 1;
      navigationl += "2";
            const result = await mayi_ReactBang.get(mayi_Iconclosewhitewithbg.userGetCountries);

      reminder5 = [3 - navigationl.length];
       let libreactperfloggerjnih = false;
       let switch_oc = false;
       let reactnativejsh: Array<any> = [901, 176];
         libreactperfloggerjnih = (59 < (reactnativejsh.length * (!switch_oc ? reactnativejsh.length : 59)));
      let vipsportl = reactnativejsh.length <= 8317999;
      do {
          let index7 = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,49,95,57,48,0);
          let otherh = String.fromCharCode(100,95,49,57,95,105,110,112,117,116,115,0);
         reactnativejsh = [((libreactperfloggerjnih ? 4 : 5))];
         index7 = `${2 | otherh.length}`;
         otherh += "1";
         if (vipsportl) {
            break;
         }
      } while (vipsportl && ((reactnativejsh.length >> (Math.min(Math.abs(1), 3))) > 1 || reactnativejsh.length > 1));
      while (4 < (reactnativejsh.length ^ 4)) {
          let interstitiale: Array<any> = [608, 867, 969];
          let securityc: Map<any, any> = new Map([[String.fromCharCode(115,109,106,112,101,103,95,106,95,56,52,0),143], [String.fromCharCode(108,95,50,48,95,115,112,101,97,107,105,110,103,0),443]]);
         reactnativejsh.push(((libreactperfloggerjnih ? 3 : 5)));
         interstitiale.push(2 * interstitiale.length);
         securityc = new Map([[`${securityc.size}`, interstitiale.length % 3]]);
         break;
      }
         libreactperfloggerjnih = (58 == ((libreactperfloggerjnih ? reactnativejsh.length : 58) ^ reactnativejsh.length));
      while (!libreactperfloggerjnih) {
          let expandg = 0.0;
          let unreadl = String.fromCharCode(114,95,57,49,95,99,100,120,108,0);
          let ewardedc = 5.0;
          let mbjscommonU = String.fromCharCode(107,95,56,50,95,109,101,97,115,117,114,105,110,103,0);
          let footballfiledlayoutn = String.fromCharCode(98,95,52,52,95,108,117,116,115,0);
         switch_oc = libreactperfloggerjnih;
         expandg -= (unreadl == String.fromCharCode(118,0) ? parseInt(`${ewardedc}`) : unreadl.length);
         ewardedc += (String.fromCharCode(100,0) == unreadl ? footballfiledlayoutn.length : unreadl.length);
         mbjscommonU += `${footballfiledlayoutn.length - parseInt(`${expandg}`)}`;
         break;
      }
         reactnativejsh = [((libreactperfloggerjnih ? 4 : 5))];
       let r_centerZ = 0.0;
      while (1.34 < (r_centerZ * 3.31)) {
         r_centerZ /= Math.max(1, (parseFloat(`${parseInt(`${r_centerZ}`) + (libreactperfloggerjnih ? 4 : 5)}`)));
         break;
      }
      if (!reactnativejsh.includes(r_centerZ)) {
         r_centerZ *= parseFloat(`${reactnativejsh.length}`);
      }
      navigationl = `${navigationl.length << (Math.min(Math.abs(1), 1))}`;
      navigationl += "3";
      homeloadingV ^= 3;

            if (result.success === false) {

   for (let h = 0; h < 1; h++) {
      libbufferw += reminder5.length;
   }
       let historyu = String.fromCharCode(110,95,51,52,95,109,101,116,97,100,97,116,97,115,101,116,0);
       let libhermes4 = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,115,95,52,49,0);
       let stylesl = String.fromCharCode(109,97,120,106,95,108,95,50,56,0);
         libhermes4 = `${historyu.length - libhermes4.length}`;
      if (4 > historyu.length) {
         libhermes4 = `${libhermes4.length | historyu.length}`;
      }
         stylesl += "2";
         stylesl = `${stylesl.length >> (Math.min(Math.abs(2), 3))}`;
         libhermes4 = `${stylesl.length | historyu.length}`;
       let goalB = String.fromCharCode(110,95,52,53,95,100,105,114,101,99,116,111,114,121,0);
      for (let o = 0; o < 2; o++) {
          let dark0 = String.fromCharCode(114,117,108,101,95,110,95,57,49,0);
          let adult2 = 5;
          let eventQ = String.fromCharCode(107,95,56,48,95,109,105,114,114,111,114,105,110,103,0);
          let iconorientationd = String.fromCharCode(114,103,98,114,103,98,95,118,95,57,55,0);
          let commonr = 5.0;
         historyu += `${historyu.length % (Math.max(iconorientationd.length, 3))}`;
         dark0 += `${(eventQ == String.fromCharCode(97,0) ? adult2 : eventQ.length)}`;
         adult2 ^= parseInt(`${commonr}`) >> (Math.min(1, Math.abs(1)));
         iconorientationd += `${dark0.length}`;
         commonr += parseFloat(`${eventQ.length}`);
      }
         libhermes4 += `${3 * libhermes4.length}`;
          let buildl = String.fromCharCode(108,95,51,54,95,109,111,110,107,101,121,0);
          let binddatasd = true;
         goalB = `${libhermes4.length}`;
         buildl = `${buildl.length % 2}`;
         binddatasd = buildl.length >= 85;
      reminder5 = [reminder5.length];
      orientationy /= Math.max(3, 1 * parseInt(`${libbufferw}`));
   while (successF) {
       let matchinactiveq = String.fromCharCode(107,95,49,95,105,110,105,116,105,97,108,105,122,101,114,115,0);
       let action9 = false;
       let mailo: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,95,111,95,52,52,0),620], [String.fromCharCode(103,95,53,51,95,109,101,114,103,105,110,103,0),577], [String.fromCharCode(97,95,53,95,116,114,101,110,100,105,110,103,0),821]]);
       let nend0: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,116,111,110,103,117,101,0),String.fromCharCode(119,95,53,95,105,110,116,101,110,116,0)], [String.fromCharCode(120,95,49,55,95,105,110,116,101,114,97,116,105,111,110,0),String.fromCharCode(100,95,49,50,95,100,117,114,103,101,114,107,105,110,103,0)]]);
          let humidityr = true;
          let cornerkickh: Map<any, any> = new Map([[String.fromCharCode(120,95,50,49,95,119,101,108,108,98,101,104,97,118,101,100,0),String.fromCharCode(113,95,55,48,95,98,105,110,111,109,105,97,108,0)], [String.fromCharCode(100,95,49,95,97,112,112,108,121,0),String.fromCharCode(98,95,56,56,95,114,101,100,97,99,116,101,100,0)], [String.fromCharCode(117,95,53,54,95,115,117,103,103,101,115,116,105,111,110,115,0),String.fromCharCode(119,95,55,51,95,110,101,97,114,101,110,100,0)]]);
         matchinactiveq += "2";
         humidityr = cornerkickh.size < 31;
         cornerkickh = new Map([[`${cornerkickh.size}`, cornerkickh.size]]);
          let awayiconL = String.fromCharCode(116,95,54,48,95,115,116,100,111,117,116,0);
         mailo.set(`${awayiconL}`, awayiconL.length | mailo.size);
       let type_1q = String.fromCharCode(120,95,49,55,95,115,101,103,0);
      let analytic7 = 5396901 <= nend0.size;
      do {
         nend0.set(`${action9}`, 3);
         if (analytic7) {
            break;
         }
      } while ((!Array.from(nend0.keys()).includes(`${mailo.size}`)) && analytic7);
       let iconcalendarB = String.fromCharCode(106,95,55,48,95,104,119,99,111,110,102,105,103,0);
       let umengl = String.fromCharCode(100,114,97,103,95,116,95,49,50,0);
      if (3 > type_1q.length) {
         type_1q += `${((action9 ? 1 : 5) ^ 1)}`;
      }
         nend0.set(iconcalendarB, iconcalendarB.length);
      while (!matchinactiveq.endsWith(`${iconcalendarB.length}`)) {
          let carouselQ = true;
         matchinactiveq = "3";
         carouselQ = !carouselQ;
         break;
      }
      while (!type_1q.includes(matchinactiveq)) {
         type_1q += `${2 - nend0.size}`;
         break;
      }
      while (umengl.includes(`${action9}`)) {
         action9 = 57 >= type_1q.length;
         break;
      }
          let cornershootO = String.fromCharCode(117,110,116,121,112,101,100,95,101,95,57,52,0);
          let routerx = 5.0;
         iconcalendarB += `${cornershootO.length & iconcalendarB.length}`;
         cornershootO += `${parseInt(`${routerx}`)}`;
      for (let f = 0; f < 3; f++) {
         iconcalendarB = `${type_1q.length}`;
      }
      successF = awayteamfieldO;
      break;
   }
                throw result.message;
            }

            return result.data as mayi_Core[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

      connectionw /= Math.max(2, 2);
   let penaltymatchiconM = 9036566 >= navigationl.length;
   do {
       let shrink5 = 0.0;
         shrink5 *= parseFloat(`${parseInt(`${shrink5}`) | 2}`);
         shrink5 += parseFloat(`${parseInt(`${shrink5}`) * 2}`);
      if ((4.15 * shrink5) < 4.32 || 1.89 < (shrink5 + 4.15)) {
         shrink5 *= parseFloat(`${parseInt(`${shrink5}`) % 2}`);
      }
      navigationl = `${parseInt(`${orientationy}`)}`;
      if (penaltymatchiconM) {
         break;
      }
   } while (penaltymatchiconM && ((connectionw - navigationl.length) >= 1.6 || (navigationl.length & 4) >= 1));
   while (3.55 <= (orientationy + libbufferw)) {
      libbufferw += mathE.length / (Math.max(3, 2));
      break;
   }
   for (let u = 0; u < 3; u++) {
       let dropdowno = true;
       let langp = String.fromCharCode(120,95,57,56,95,114,101,102,108,101,99,116,111,114,0);
      let yellowscoreballU = dropdowno ? !dropdowno : dropdowno;
      do {
         dropdowno = langp.length <= 54;
         if (yellowscoreballU) {
            break;
         }
      } while (yellowscoreballU && (langp.length >= 1));
       let favoriteD: Array<any> = [String.fromCharCode(114,95,53,48,95,104,119,97,99,99,101,108,0), String.fromCharCode(120,95,49,95,97,112,111,108,108,111,0), String.fromCharCode(118,112,97,105,110,116,101,114,95,122,95,50,50,0)];
       let fillV: Array<any> = [983, 459, 198];
      let libflipperv = String.fromCharCode(57,120,112,112,53,115,57,0) == langp;
      do {
          let static_hvO: Array<any> = [478, 5];
          let settingsQ: Map<any, any> = new Map([[String.fromCharCode(119,95,49,55,95,119,97,118,101,115,0),836], [String.fromCharCode(108,111,103,103,101,114,95,48,95,52,56,0),13]]);
          let subse = String.fromCharCode(97,115,115,112,111,114,116,95,117,95,55,50,0);
          let hometeamfield2 = 5.0;
          let popupH = String.fromCharCode(115,105,108,101,110,116,108,121,95,121,95,53,49,0);
         langp += `${1 << (Math.min(Math.abs(parseInt(`${hometeamfield2}`)), 2))}`;
         static_hvO = [3];
         settingsQ.set(subse, 2 * popupH.length);
         subse += `${(String.fromCharCode(82,0) == popupH ? static_hvO.length : popupH.length)}`;
         hometeamfield2 *= (parseFloat(`${subse == String.fromCharCode(119,0) ? static_hvO.length : subse.length}`));
         if (libflipperv) {
            break;
         }
      } while (libflipperv && (dropdowno));
      for (let j = 0; j < 2; j++) {
         dropdowno = (67 > (favoriteD.length * (!dropdowno ? favoriteD.length : 67)));
      }
      while ((favoriteD.length | fillV.length) < 5 || 5 < (fillV.length | 5)) {
         favoriteD = [((dropdowno ? 4 : 5) * langp.length)];
         break;
      }
         fillV = [2];
      mathE.push(headerG.length);
   }
            throw e;
        }
    }
}
