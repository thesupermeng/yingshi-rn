import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { yysPangleCommon, yysResultSport } from "@constants";
import { yysConfig } from "@utility";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility";
import { yysPlayPenaltygoal } from "@type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yysIconstar } from "@models";


export class yysHomeloading {
    static guestLogin = async (): Promise<yysIconstar> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await yysConfig.post(yysPangleCommon.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                yysConfig.regetToken();
            }

            return yysIconstar.fromJson(result.data);

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

            const result = await yysConfig.post(yysPangleCommon.userPostSigninup, {
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
                yysConfig.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
       let pressureH = 1.0;
    let sliderj: Map<any, any> = new Map([[String.fromCharCode(111,117,116,95,49,95,52,54,0),false ], [String.fromCharCode(112,108,97,121,95,56,95,49,49,0),false ]]);
    let iconnointernet0 = String.fromCharCode(121,95,54,56,95,117,110,115,117,112,112,111,114,116,101,100,0);
    let showmoreA = 0.0;
    let logind = 2.0;
    let showlessn: Array<any> = [240, 279, 861];
    let catalogf = true;
    let canvasa: Map<any, any> = new Map([[String.fromCharCode(120,95,56,56,95,108,111,111,112,102,105,108,116,101,114,0),211], [String.fromCharCode(114,101,102,105,108,108,95,101,95,55,54,0),909], [String.fromCharCode(114,95,53,51,95,101,120,105,115,116,105,110,103,0),545]]);
    let libreactnativeblob5 = String.fromCharCode(114,101,102,100,117,112,101,95,57,95,57,49,0);
    let baselineD = 3.0;
      showlessn = [parseInt(`${logind}`) << (Math.min(5, Math.abs(2)))];
   if (1 == (4 ^ showlessn.length)) {
       let watchnowbg7 = 0.0;
       let layoutR = String.fromCharCode(119,114,97,112,112,101,114,95,99,95,53,53,0);
       let updatesq = String.fromCharCode(100,105,115,112,108,97,99,101,95,122,95,54,50,0);
          let videojsH = false;
          let refreshborderlessl = 5.0;
          let playlistz = String.fromCharCode(116,114,101,120,95,105,95,53,54,0);
         updatesq += "1";
         videojsH = playlistz == String.fromCharCode(113,0) || refreshborderlessl < 79.72;
         refreshborderlessl -= parseFloat(`${parseInt(`${refreshborderlessl}`) | playlistz.length}`);
      for (let q = 0; q < 3; q++) {
          let circleB: Map<any, any> = new Map([[String.fromCharCode(108,95,55,55,95,100,105,115,109,105,115,115,101,115,0),972], [String.fromCharCode(110,95,52,55,95,118,105,115,105,98,108,105,116,121,0),433], [String.fromCharCode(116,97,99,107,95,51,95,51,54,0),41]]);
         layoutR += `${updatesq.length}`;
         circleB = new Map([[`${circleB.size}`, circleB.size]]);
      }
      if (updatesq.startsWith(`${watchnowbg7}`)) {
          let helperg: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,102,101,109,97,108,101,0),String.fromCharCode(103,95,57,49,95,100,101,99,111,109,112,114,101,115,115,105,111,110,0)], [String.fromCharCode(117,117,105,100,95,54,95,55,51,0),String.fromCharCode(108,95,54,55,95,111,108,100,101,115,116,0)], [String.fromCharCode(118,95,53,95,107,110,111,99,107,111,117,116,0),String.fromCharCode(106,95,53,48,95,115,117,98,116,105,116,108,101,115,0)]]);
          let stringsf = String.fromCharCode(101,118,115,105,103,110,97,108,95,51,95,51,51,0);
         watchnowbg7 *= helperg.size;
         helperg = new Map([[stringsf, 3 << (Math.min(5, stringsf.length))]]);
      }
       let list8: Array<any> = [391, 947];
       let greytickV: Array<any> = [String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,57,95,49,0), String.fromCharCode(112,95,54,48,95,110,117,108,108,115,114,99,0), String.fromCharCode(106,95,53,48,95,100,114,97,102,116,115,0)];
         list8 = [(layoutR == String.fromCharCode(51,0) ? updatesq.length : layoutR.length)];
         greytickV.push(layoutR.length % (Math.max(2, parseInt(`${watchnowbg7}`))));
          let pressure3 = 2;
         list8 = [2];
         pressure3 -= 3;
      for (let z = 0; z < 1; z++) {
         layoutR = `${(layoutR == String.fromCharCode(102,0) ? list8.length : layoutR.length)}`;
      }
       let iconnewchatv = 0;
      showlessn.push(sliderj.size);
   }

        try {

       let singleY = String.fromCharCode(114,117,115,115,105,97,110,95,121,95,57,57,0);
       let libhermess = 3.0;
       let mbbannerC: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,118,101,114,95,100,95,55,54,0),736], [String.fromCharCode(116,104,114,101,97,100,101,100,95,106,95,55,0),626], [String.fromCharCode(106,95,52,55,95,98,97,99,107,108,105,103,104,116,0),756]]);
          let analyticC = String.fromCharCode(105,95,50,95,116,114,97,105,108,101,114,0);
          let ballg = String.fromCharCode(122,95,55,52,95,105,110,99,111,109,112,97,116,105,98,108,101,0);
          let tempV: Array<any> = [338, 979];
         libhermess /= Math.max(mbbannerC.size << (Math.min(Math.abs(2), 1)), 5);
         analyticC += `${ballg.length / 2}`;
         ballg = `${analyticC.length - 2}`;
         tempV = [3 + tempV.length];
      while (mbbannerC.size == libhermess) {
         libhermess -= mbbannerC.size;
         break;
      }
         singleY += `${(singleY == String.fromCharCode(104,0) ? parseInt(`${libhermess}`) : singleY.length)}`;
      for (let e = 0; e < 1; e++) {
         singleY += `${singleY.length}`;
      }
      for (let b = 0; b < 3; b++) {
          let typingK = 4.0;
          let shrunki = 1;
          let sentryr = false;
          let matchesr = String.fromCharCode(106,95,57,48,95,112,101,114,115,111,110,115,0);
          let analytics0 = 2.0;
         singleY += `${mbbannerC.size % 3}`;
         typingK /= Math.max(3 << (Math.min(2, matchesr.length)), 3);
         shrunki /= Math.max(4, matchesr.length);
         sentryr = typingK == 74.89;
         analytics0 -= parseFloat(`${parseInt(`${typingK}`) - shrunki}`);
      }
       let whiteanimationlivef = false;
       let iconnewssharec = false;
      while (3 < mbbannerC.size) {
          let othermatchdetailbgy = String.fromCharCode(117,95,54,57,95,100,101,115,101,108,101,99,116,105,111,110,0);
         whiteanimationlivef = String.fromCharCode(115,0) == othermatchdetailbgy;
         break;
      }
         singleY = `${((iconnewssharec ? 1 : 4))}`;
      let footballfiledlayout4 = whiteanimationlivef ? !whiteanimationlivef : whiteanimationlivef;
      do {
         whiteanimationlivef = null != mbbannerC.get(`${iconnewssharec}`);
         if (footballfiledlayout4) {
            break;
         }
      } while (footballfiledlayout4 && (singleY.length <= 2 || !whiteanimationlivef));
      sliderj = new Map([[singleY, 1 ^ parseInt(`${pressureH}`)]]);
   for (let w = 0; w < 1; w++) {
      showmoreA += parseFloat(`${3 << (Math.min(2, showlessn.length))}`);
   }
            const result = await yysConfig.get(yysPangleCommon.userGetDetails);

       let defaultteamy = 2.0;
       let statsS = 3.0;
       let short_jN = String.fromCharCode(116,95,53,54,95,112,114,101,100,101,99,111,100,101,0);
       let catagoryq: Map<any, any> = new Map([[String.fromCharCode(109,111,100,97,108,95,115,95,56,49,0),true ], [String.fromCharCode(115,112,108,105,116,116,105,110,103,95,101,95,57,50,0),true ], [String.fromCharCode(99,111,108,100,95,120,95,49,57,0),false ]]);
       let iconarrowrightblackW: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0),335], [String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,108,95,49,48,48,0),635]]);
      if (!Array.from(iconarrowrightblackW.keys()).includes(`${statsS}`)) {
          let backH = 2.0;
          let feedbackb = String.fromCharCode(116,95,50,55,95,100,101,99,114,101,97,115,105,110,103,0);
         iconarrowrightblackW.set(feedbackb, feedbackb.length);
         backH /= Math.max(parseInt(`${backH}`) / (Math.max(8, parseInt(`${backH}`))), 3);
      }
      while (3 > (1 << (Math.min(2, short_jN.length)))) {
         catagoryq.set(short_jN, parseInt(`${statsS}`) + 1);
         break;
      }
      for (let m = 0; m < 1; m++) {
         iconarrowrightblackW.set(short_jN, catagoryq.size % 1);
      }
      if (defaultteamy >= 4.99) {
         defaultteamy -= parseFloat(`${parseInt(`${defaultteamy}`) & catagoryq.size}`);
      }
      while (1 == (4 + iconarrowrightblackW.size) || (defaultteamy / (Math.max(4, parseFloat(`${iconarrowrightblackW.size}`)))) == 4.52) {
          let form_ = 5.0;
          let club5 = String.fromCharCode(122,95,52,52,95,111,108,111,114,0);
          let nende: Array<any> = [399, 81];
          let baiduh = String.fromCharCode(101,120,104,97,117,115,116,95,111,95,50,53,0);
          let predictionlossK = String.fromCharCode(102,105,110,100,95,56,95,56,55,0);
         defaultteamy += parseFloat(`${baiduh.length}`);
         form_ -= parseFloat(`${nende.length / 2}`);
         club5 = `${parseInt(`${form_}`)}`;
         nende.push(nende.length - 1);
         baiduh += `${1 >> (Math.min(Math.abs(parseInt(`${form_}`)), 4))}`;
         predictionlossK = `${3 >> (Math.min(2, predictionlossK.length))}`;
         break;
      }
       let iconcloseE = String.fromCharCode(111,95,57,52,95,109,101,114,103,101,0);
      for (let p = 0; p < 1; p++) {
         iconarrowrightblackW.set(iconcloseE, iconcloseE.length);
      }
       let textinputS: Map<any, any> = new Map([[String.fromCharCode(108,97,121,101,114,95,54,95,57,55,0),925], [String.fromCharCode(105,102,114,97,109,101,95,115,95,52,56,0),50]]);
       let halffieldimagey: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,114,101,112,111,114,116,0),String.fromCharCode(115,119,105,99,104,95,103,95,54,48,0)], [String.fromCharCode(100,95,53,49,95,116,97,110,103,101,110,116,0),String.fromCharCode(112,95,55,51,95,105,110,116,101,114,115,101,99,116,0)]]);
      showmoreA /= Math.max(1, parseFloat(`${libreactnativeblob5.length}`));
   if (libreactnativeblob5.includes(`${logind}`)) {
       let mbridget = String.fromCharCode(118,95,55,55,95,105,110,100,101,112,101,110,100,101,100,0);
       let owngoal_ = String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,101,95,52,54,0);
       let iconuserr = false;
       let gmail2 = 4.0;
         iconuserr = String.fromCharCode(71,0) == mbridget && gmail2 >= 27.7;
          let dialogA = 1.0;
          let i_playerP = String.fromCharCode(114,95,51,57,95,112,105,112,101,108,105,110,105,110,103,0);
         gmail2 /= Math.max(5, 3);
         dialogA *= (parseFloat(`${i_playerP == String.fromCharCode(122,0) ? i_playerP.length : parseInt(`${dialogA}`)}`));
         owngoal_ += `${mbridget.length + 1}`;
          let libfilec: Map<any, any> = new Map([[String.fromCharCode(111,95,50,48,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),927], [String.fromCharCode(105,115,111,108,97,116,101,95,110,95,49,48,0),38], [String.fromCharCode(109,97,114,107,101,116,95,111,95,51,55,0),425]]);
          let activityX: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,0),957], [String.fromCharCode(98,97,116,99,104,105,110,103,95,54,95,57,56,0),819], [String.fromCharCode(106,115,111,110,115,95,105,95,57,57,0),358]]);
          let moreM = String.fromCharCode(97,114,101,115,95,121,95,52,55,0);
         iconuserr = mbridget.length < activityX.size;
         libfilec = new Map([[`${libfilec.size}`, 3 >> (Math.min(5, Math.abs(libfilec.size)))]]);
         activityX = new Map([[`${libfilec.size}`, (String.fromCharCode(102,0) == moreM ? moreM.length : libfilec.size)]]);
      if (iconuserr) {
          let leaguedetailsbgA = String.fromCharCode(106,95,55,55,95,97,114,99,104,105,116,101,99,116,117,114,101,0);
          let anythinkU = String.fromCharCode(112,117,108,115,101,95,104,95,55,53,0);
          let shootnogoalp = String.fromCharCode(112,95,51,56,95,115,99,114,111,108,108,101,100,0);
         iconuserr = leaguedetailsbgA == owngoal_;
         leaguedetailsbgA += "1";
         anythinkU = `${anythinkU.length}`;
         shootnogoalp = `${(anythinkU == String.fromCharCode(86,0) ? anythinkU.length : shootnogoalp.length)}`;
      }
      let goalT = iconuserr ? !iconuserr : iconuserr;
      do {
         iconuserr = mbridget.length == parseInt(`${gmail2}`);
         if (goalT) {
            break;
         }
      } while ((3 >= mbridget.length) && goalT);
       let soundM = String.fromCharCode(120,118,97,103,95,54,95,54,56,0);
       let homeN = String.fromCharCode(101,95,56,50,95,112,108,97,121,98,97,99,107,0);
         homeN += `${(soundM == String.fromCharCode(66,0) ? parseInt(`${gmail2}`) : soundM.length)}`;
          let detailL = String.fromCharCode(104,95,52,54,95,114,101,112,111,114,116,115,0);
          let subtextw = String.fromCharCode(117,95,56,54,95,100,105,115,112,97,116,99,104,105,110,103,0);
         soundM += `${homeN.length}`;
         detailL += `${detailL.length % 2}`;
         subtextw += `${subtextw.length % 2}`;
          let cricketP = String.fromCharCode(108,111,110,103,109,117,108,97,119,95,117,95,52,49,0);
         homeN += `${((iconuserr ? 3 : 5))}`;
         cricketP += `${cricketP.length}`;
      if (!soundM.startsWith(mbridget)) {
          let tick1 = 1.0;
          let penaltygoalX = String.fromCharCode(111,95,57,52,95,108,104,115,0);
         mbridget += `${(String.fromCharCode(54,0) == penaltygoalX ? penaltygoalX.length : homeN.length)}`;
         tick1 += parseFloat(`${1}`);
      }
         owngoal_ += `${3 + parseInt(`${gmail2}`)}`;
      libreactnativeblob5 = `${(owngoal_ == String.fromCharCode(80,0) ? owngoal_.length : canvasa.size)}`;
   }

            if (result.success === false) {

   let whiteanimationliveT = logind >= 6382000.0;
   do {
      logind *= parseFloat(`${parseInt(`${pressureH}`)}`);
      if (whiteanimationliveT) {
         break;
      }
   } while ((logind == 4.37) && whiteanimationliveT);
   let anythinkr = 6452406 >= showlessn.length;
   do {
      showlessn.push(libreactnativeblob5.length | parseInt(`${baselineD}`));
      if (anythinkr) {
         break;
      }
   } while (anythinkr && ((showlessn.length % (Math.max(5, 3))) < 4));
                throw result.message;
            }

            if (result.data === undefined) {

   while (!libreactnativeblob5.startsWith(`${catalogf}`)) {
       let editA = String.fromCharCode(97,99,102,102,95,57,95,50,56,0);
       let reminderz = 2.0;
       let libswscaleH = true;
       let profileH = 1.0;
          let whitevideoliveT = String.fromCharCode(105,115,108,111,119,95,98,95,56,51,0);
          let middlebrightnessb = true;
         libswscaleH = editA.length >= 12;
         whitevideoliveT = `${((middlebrightnessb ? 3 : 2) & 1)}`;
         middlebrightnessb = whitevideoliveT.length >= 18;
      let bggradient0 = 8140231.0 >= profileH;
      do {
         profileH *= 1 & parseInt(`${reminderz}`);
         if (bggradient0) {
            break;
         }
      } while ((1.56 > profileH) && bggradient0);
       let sharedh = 0.0;
         sharedh /= Math.max(parseInt(`${profileH}`), 3);
         reminderz /= Math.max(parseInt(`${sharedh}`) >> (Math.min(Math.abs(1), 2)), 3);
       let baiduadsa = 2.0;
       let libfileJ = 2.0;
         profileH /= Math.max(5, parseInt(`${sharedh}`));
          let videocommon2 = 0;
          let detailsP: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,97,98,108,101,95,54,95,53,48,0),507], [String.fromCharCode(120,95,50,95,99,111,100,101,99,112,114,105,118,0),761]]);
         editA = `${1 | parseInt(`${sharedh}`)}`;
         videocommon2 >>= Math.min(Math.abs(detailsP.size), 2);
         detailsP.set(`${videocommon2}`, detailsP.size);
      for (let z = 0; z < 1; z++) {
         profileH += parseInt(`${baiduadsa}`);
      }
      if (!editA.includes(`${profileH}`)) {
          let team_ = 5.0;
          let sharewhiteN: Array<any> = [String.fromCharCode(109,95,56,51,95,104,105,103,104,98,105,116,100,101,112,116,104,0), String.fromCharCode(102,95,57,51,95,97,110,103,108,101,0)];
         profileH -= 1;
         team_ *= parseFloat(`${sharewhiteN.length >> (Math.min(Math.abs(2), 1))}`);
         sharewhiteN = [parseInt(`${team_}`)];
      }
         baiduadsa -= parseFloat(`${parseInt(`${libfileJ}`)}`);
      while (4.16 > (3 * reminderz)) {
         sharedh += ((libswscaleH ? 2 : 2) >> (Math.min(Math.abs(2), 3)));
         break;
      }
      catalogf = editA == String.fromCharCode(119,0);
      break;
   }
   let redirect3 = showlessn.length <= 7792637;
   do {
       let appsf: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,100,101,97,99,116,105,118,97,116,105,111,110,0),807], [String.fromCharCode(116,114,105,95,53,95,51,49,0),617]]);
       let r_unlocky: Array<any> = [590, 997, 354];
      for (let o = 0; o < 3; o++) {
         r_unlocky.push(1);
      }
         appsf.set(`${r_unlocky.length}`, 1);
          let predictionwinZ: Map<any, any> = new Map([[String.fromCharCode(109,95,50,56,95,115,99,111,114,101,115,0),false ], [String.fromCharCode(97,108,114,101,97,100,121,95,97,95,49,48,48,0),true ]]);
          let playershirtK = 1;
          let sigmobi = String.fromCharCode(99,102,115,116,114,101,97,109,95,97,95,50,48,0);
         r_unlocky = [sigmobi.length];
         predictionwinZ = new Map([[`${predictionwinZ.size}`, 1]]);
         playershirtK /= Math.max(5, 2 ^ playershirtK);
         sigmobi += "2";
          let spinnert = String.fromCharCode(107,95,49,95,101,99,100,115,97,0);
          let attributedstringH: Array<any> = [916, 159, 639];
         r_unlocky = [attributedstringH.length];
         spinnert += "2";
         attributedstringH.push((String.fromCharCode(106,0) == spinnert ? spinnert.length : spinnert.length));
         r_unlocky.push(2);
         r_unlocky = [r_unlocky.length];
      showlessn = [2];
      if (redirect3) {
         break;
      }
   } while (redirect3 && (showlessn.length <= parseInt(`${showmoreA}`)));
                throw yysResultSport.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {

      logind /= Math.max(parseFloat(`${2}`), 3);
      logind -= parseFloat(`${iconnointernet0.length}`);
                throw yysResultSport.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {

       let plash_ = String.fromCharCode(98,111,116,104,95,118,95,52,55,0);
         plash_ = `${plash_.length}`;
      while (plash_.includes(`${plash_.length}`)) {
         plash_ += `${plash_.length / (Math.max(6, plash_.length))}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         plash_ = `${(plash_ == String.fromCharCode(113,0) ? plash_.length : plash_.length)}`;
      }
      showlessn.push(parseInt(`${showmoreA}`) % (Math.max(3, 5)));
       let hongkonge = String.fromCharCode(115,101,110,99,95,56,95,54,55,0);
       let basketballG = 5.0;
       let goallogo5 = true;
      if (5 == hongkonge.length && !goallogo5) {
          let dycreator4: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,95,103,95,49,49,0),false ], [String.fromCharCode(100,121,110,97,114,114,97,121,95,54,95,49,48,48,0),true ], [String.fromCharCode(102,95,50,95,115,116,97,116,0),true ]]);
          let yellowscoreballv = String.fromCharCode(101,114,97,95,114,95,53,56,0);
          let moond = String.fromCharCode(110,95,53,53,95,100,105,115,116,112,111,105,110,116,0);
          let phonet: Array<any> = [118, 412];
          let dangert: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,53,95,50,54,0),835], [String.fromCharCode(100,95,50,51,95,112,114,111,114,101,115,100,101,99,0),237]]);
         goallogo5 = yellowscoreballv.length < 74;
         dycreator4 = new Map([[`${dangert.size}`, dangert.size]]);
         yellowscoreballv += "3";
         moond += `${moond.length | dycreator4.size}`;
         phonet = [phonet.length + 3];
      }
       let grayd = true;
         grayd = basketballG > 75.83;
      if (!grayd || 1.37 > (5.39 - basketballG)) {
         basketballG -= (hongkonge == String.fromCharCode(71,0) ? hongkonge.length : (grayd ? 3 : 3));
      }
      for (let q = 0; q < 1; q++) {
          let basketballdetailsbge = 5;
          let time_wca = String.fromCharCode(121,95,50,53,95,114,118,118,108,99,0);
          let episodeZ = 3.0;
         goallogo5 = time_wca.length < 47;
         basketballdetailsbge >>= Math.min(Math.abs(3), 3);
         time_wca += `${basketballdetailsbge}`;
         episodeZ *= 1 - basketballdetailsbge;
      }
         basketballG /= Math.max(hongkonge.length, 3);
       let subbasketballplayerN = 2;
         subbasketballplayerN ^= 2 + subbasketballplayerN;
         grayd = 49 > subbasketballplayerN;
      libreactnativeblob5 += `${hongkonge.length}`;
                throw yysResultSport.apiEmptyResponse;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);

      logind -= parseFloat(`${parseInt(`${logind}`) & 2}`);
      logind /= Math.max(parseFloat(`${showlessn.length}`), 4);
            

      showmoreA += parseFloat(`${sliderj.size << (Math.min(showlessn.length, 4))}`);
       let defaultroombgC = false;
       let loginM = 3.0;
      let tailr = defaultroombgC ? !defaultroombgC : defaultroombgC;
      do {
          let videojsF: Array<any> = [278, 592, 17];
          let arrowdownE = 4;
         defaultroombgC = arrowdownE > 34 && 26.8 > loginM;
         videojsF = [videojsF.length + 1];
         arrowdownE *= 3;
         if (tailr) {
            break;
         }
      } while ((4.84 <= (loginM * 3.51) || defaultroombgC) && tailr);
      if (!defaultroombgC && 4.45 > (loginM - 2.100)) {
         loginM *= (parseFloat(`${(defaultroombgC ? 2 : 5) * parseInt(`${loginM}`)}`));
      }
      if (loginM == 5.12 && 3.51 == (loginM * 5.12)) {
         loginM -= parseFloat(`${parseInt(`${loginM}`) + 3}`);
      }
      while (loginM <= 1.83) {
         loginM /= Math.max(1, (parseFloat(`${(defaultroombgC ? 2 : 2) ^ parseInt(`${loginM}`)}`)));
         break;
      }
      let iconshareA = loginM <= 6797792.0;
      do {
         loginM -= parseFloat(`${2 * parseInt(`${loginM}`)}`);
         if (iconshareA) {
            break;
         }
      } while (iconshareA && (4.57 >= (4.18 - loginM) && defaultroombgC));
      while (5.23 < loginM || (loginM / (Math.max(5.23, 2))) < 1.92) {
          let iconcalendard = String.fromCharCode(106,95,51,55,95,115,119,101,101,112,0);
          let productJ = false;
         loginM /= Math.max(2, parseFloat(`${1 ^ iconcalendard.length}`));
         iconcalendard += "1";
         break;
      }
      logind /= Math.max(5, (parseFloat(`${1 << (Math.min(5, Math.abs((catalogf ? 2 : 3))))}`)));
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

            const result = await yysConfig.post(yysPangleCommon.userPostUsername, {
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
       let subbasketballplayer3: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,115,95,54,50,0),true ], [String.fromCharCode(108,101,115,115,95,116,95,53,50,0),false ], [String.fromCharCode(115,95,55,53,95,116,119,111,115,116,97,103,101,0),true ]]);
    let shrinkc: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,98,111,120,95,102,95,54,0),String.fromCharCode(108,95,49,54,0)], [String.fromCharCode(100,97,97,108,97,95,102,95,55,56,0),String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,53,95,52,57,0)], [String.fromCharCode(106,95,55,55,95,115,111,102,116,102,108,111,97,116,0),String.fromCharCode(102,95,54,54,95,97,116,111,98,111,111,108,0)]]);
    let resendy = 4;
    let floatings = String.fromCharCode(97,98,115,120,95,117,95,54,50,0);
    let register_1o = 0.0;
    let static_mB = String.fromCharCode(114,95,51,51,95,116,114,97,110,115,113,117,97,110,116,0);
    let other9 = String.fromCharCode(99,111,110,102,101,116,116,105,95,117,95,55,57,0);
    let floaterm = String.fromCharCode(116,111,110,97,108,95,115,95,51,51,0);
    let wifirouteru: Array<any> = [836, 492, 799];
    let cricketf = String.fromCharCode(102,101,109,97,108,101,95,110,95,57,57,0);
    let disconnectedlogoF: Map<any, any> = new Map([[String.fromCharCode(104,95,53,57,95,98,114,105,103,104,116,110,101,115,115,0),796], [String.fromCharCode(109,97,114,107,101,100,95,54,95,50,54,0),187]]);
    let downloadedk = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,95,97,95,50,51,0);
    let confirmationb: Map<any, any> = new Map([[String.fromCharCode(101,99,116,97,110,103,108,101,95,97,95,50,51,0),String.fromCharCode(107,95,51,48,95,118,101,108,111,99,105,116,121,0)], [String.fromCharCode(114,95,57,53,95,105,110,105,118,105,116,101,100,0),String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,99,95,56,55,0)]]);
    let orientationC = false;
      disconnectedlogoF.set(floatings, floatings.length);
      other9 = `${(cricketf == String.fromCharCode(54,0) ? parseInt(`${register_1o}`) : cricketf.length)}`;
   let dragclose0 = 9312059 >= subbasketballplayer3.size;
   do {
      subbasketballplayer3.set(downloadedk, (String.fromCharCode(49,0) == downloadedk ? floatings.length : downloadedk.length));
      if (dragclose0) {
         break;
      }
   } while (((disconnectedlogoF.size << (Math.min(Math.abs(subbasketballplayer3.size), 3))) == 3 && (subbasketballplayer3.size << (Math.min(5, Math.abs(disconnectedlogoF.size)))) == 3) && dragclose0);
       let moonS = String.fromCharCode(114,95,51,52,95,100,105,114,101,99,116,105,111,110,0);
       let reducers: Map<any, any> = new Map([[String.fromCharCode(99,102,102,116,102,95,122,95,56,54,0),false ], [String.fromCharCode(109,95,56,55,95,102,116,118,100,111,99,0),false ], [String.fromCharCode(120,95,51,95,104,101,120,0),true ]]);
          let iconchatsendI = String.fromCharCode(103,97,116,104,101,114,95,102,95,53,49,0);
         reducers = new Map([[iconchatsendI, 2 << (Math.min(5, moonS.length))]]);
      let basketballicono = String.fromCharCode(115,110,120,113,0) == moonS;
      do {
         moonS = `${(moonS == String.fromCharCode(85,0) ? moonS.length : reducers.size)}`;
         if (basketballicono) {
            break;
         }
      } while (basketballicono && (!moonS.endsWith(`${reducers.size}`)));
         moonS += `${moonS.length}`;
      for (let g = 0; g < 3; g++) {
         reducers.set(moonS, (String.fromCharCode(84,0) == moonS ? moonS.length : reducers.size));
      }
         moonS += `${(String.fromCharCode(100,0) == moonS ? moonS.length : reducers.size)}`;
      while (4 > (4 * moonS.length) && (4 * moonS.length) > 3) {
         moonS += `${moonS.length & reducers.size}`;
         break;
      }
      resendy += 3 & downloadedk.length;

        try {

   if ((downloadedk.length * 4) > 1 || (4 * shrinkc.size) > 4) {
       let telegramk = 0;
       let modelsA = 4.0;
       let vignetteS: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,97,99,99,101,115,115,111,114,121,0),604], [String.fromCharCode(115,101,116,114,97,110,103,101,95,52,95,54,48,0),611]]);
       let giftJ = String.fromCharCode(99,102,116,102,115,117,98,95,114,95,50,49,0);
      for (let x = 0; x < 2; x++) {
          let shrunkZ: Array<any> = [354, 614];
          let libfabricjni4 = String.fromCharCode(99,97,118,115,118,105,100,101,111,95,101,95,54,48,0);
          let smallG = 1;
         telegramk += giftJ.length & 3;
         shrunkZ = [libfabricjni4.length - shrunkZ.length];
         libfabricjni4 = `${smallG * libfabricjni4.length}`;
         smallG *= 1 >> (Math.min(4, Math.abs(smallG)));
      }
      if (4 == telegramk) {
          let javaW = String.fromCharCode(115,104,111,114,116,99,117,116,95,120,95,52,50,0);
          let libfile9 = 4;
         modelsA /= Math.max(1, parseFloat(`${telegramk}`));
         javaW += `${javaW.length}`;
         libfile9 <<= Math.min(2, Math.abs(2));
      }
      let selectedw = vignetteS.size <= 7647801;
      do {
         vignetteS.set(giftJ, telegramk);
         if (selectedw) {
            break;
         }
      } while ((vignetteS.size == 3) && selectedw);
      while (5 == giftJ.length) {
         vignetteS.set(`${modelsA}`, parseInt(`${modelsA}`));
         break;
      }
      if ((5 ^ giftJ.length) > 3) {
          let actionsG = 0.0;
          let bannerw = 4.0;
          let scorepopsoundG = String.fromCharCode(99,111,118,97,108,101,110,116,95,114,95,54,54,0);
          let libswresampleK: Array<any> = [168, 953];
         telegramk /= Math.max(4, 1);
         actionsG *= parseFloat(`${libswresampleK.length}`);
         bannerw -= 1 / (Math.max(8, parseInt(`${bannerw}`)));
         scorepopsoundG += `${parseInt(`${bannerw}`)}`;
         libswresampleK.push(1 - parseInt(`${bannerw}`));
      }
       let iconnotificationnewi = String.fromCharCode(99,108,101,97,114,101,100,95,111,95,56,0);
       let tempO = String.fromCharCode(120,95,53,53,95,115,101,114,105,97,108,105,122,101,0);
       let playercommone = 3;
       let leaguedetailsbgU = 2;
      while (giftJ.startsWith(`${vignetteS.size}`)) {
         vignetteS.set(`${modelsA}`, 1);
         break;
      }
          let humidityj: Array<any> = [767, 880, 344];
         tempO += `${3 - giftJ.length}`;
         humidityj = [humidityj.length];
      if (leaguedetailsbgU < modelsA) {
         leaguedetailsbgU >>= Math.min(3, Math.abs(leaguedetailsbgU));
      }
      while (giftJ == String.fromCharCode(73,0)) {
         iconnotificationnewi = `${iconnotificationnewi.length}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
          let pagex: Array<any> = [695, 67, 346];
          let entryF: Array<any> = [262, 662, 409];
          let matchdetailbgf: Array<any> = [943, 815, 584];
         playercommone /= Math.max(3, 2 + entryF.length);
         pagex.push(matchdetailbgf.length);
         entryF.push(matchdetailbgf.length | 2);
      }
      downloadedk = `${other9.length}`;
   }
      floatings = `${3 & other9.length}`;
   while (Array.from(subbasketballplayer3.keys()).includes(`${wifirouteru.length}`)) {
      wifirouteru.push(other9.length % (Math.max(2, 5)));
      break;
   }
      floaterm += `${cricketf.length + 3}`;
            const result = await yysConfig.get(yysPangleCommon.userGetCountries);

   if (4 > (static_mB.length >> (Math.min(Math.abs(1), 2))) || 1 > (1 | static_mB.length)) {
       let bings = 5.0;
       let moviesi = String.fromCharCode(101,110,104,97,110,99,101,95,97,95,56,54,0);
       let adultP = false;
       let shareblackw: Map<any, any> = new Map([[String.fromCharCode(109,101,109,120,95,115,95,54,51,0),38], [String.fromCharCode(119,95,53,56,95,116,101,108,101,103,114,97,109,0),86], [String.fromCharCode(115,105,122,101,95,50,95,51,57,0),563]]);
          let dplusC: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,95,51,95,49,48,0),651], [String.fromCharCode(101,95,54,56,95,109,97,108,108,111,99,122,0),972]]);
          let twitteru = String.fromCharCode(108,95,57,50,95,112,114,101,102,101,114,101,110,99,101,115,0);
          let imageactionlivek = String.fromCharCode(108,95,52,95,98,101,104,97,118,105,111,114,0);
         bings *= (parseFloat(`${parseInt(`${bings}`) + (adultP ? 2 : 5)}`));
         dplusC = new Map([[`${dplusC.size}`, twitteru.length / (Math.max(2, 9))]]);
         twitteru += "2";
         imageactionlivek += `${twitteru.length - dplusC.size}`;
         adultP = moviesi.endsWith(`${bings}`);
         adultP = moviesi.length <= 99;
          let predictiondefaultN = String.fromCharCode(115,95,57,51,95,111,117,116,103,111,105,110,103,0);
          let searchy = String.fromCharCode(101,120,116,114,101,109,117,109,95,53,95,55,51,0);
          let modelsX: Array<any> = [760, 647];
         adultP = String.fromCharCode(77,0) == predictiondefaultN;
         predictiondefaultN = "2";
         searchy = `${(searchy == String.fromCharCode(89,0) ? searchy.length : modelsX.length)}`;
         modelsX.push(3 + searchy.length);
      while (moviesi.startsWith(`${shareblackw.size}`)) {
          let favoriteO = 5;
          let reactnativeratingsy: Array<any> = [480, 854];
          let reactnativeultimatelistview4 = String.fromCharCode(105,95,55,54,95,116,111,107,101,0);
          let weibok = false;
         moviesi = `${reactnativeultimatelistview4.length}`;
         favoriteO %= Math.max(((weibok ? 2 : 3) / 1), 2);
         reactnativeratingsy.push(1 & favoriteO);
         reactnativeultimatelistview4 += `${reactnativeratingsy.length >> (Math.min(3, Math.abs(favoriteO)))}`;
         weibok = favoriteO <= 14;
         break;
      }
      if (!Array.from(shareblackw.keys()).includes(`${bings}`)) {
         shareblackw.set(moviesi, (moviesi == String.fromCharCode(78,0) ? moviesi.length : (adultP ? 3 : 2)));
      }
      for (let h = 0; h < 2; h++) {
         bings /= Math.max(parseFloat(`${moviesi.length}`), 4);
      }
      while (2.75 >= (4.49 - bings)) {
          let whatsapp_ = true;
          let scoreK = String.fromCharCode(103,97,108,108,101,114,121,95,55,95,53,48,0);
          let filec: Array<any> = [969, 268];
          let countdownF = 2.0;
          let tempnodatav = 0;
         bings *= (parseFloat(`${parseInt(`${countdownF}`) * (adultP ? 1 : 2)}`));
         whatsapp_ = scoreK.length >= tempnodatav;
         scoreK += `${(tempnodatav & (whatsapp_ ? 5 : 3))}`;
         filec = [filec.length];
         countdownF -= (parseFloat(`${(whatsapp_ ? 5 : 2) - 1}`));
         break;
      }
      if ((shareblackw.size % 5) <= 3) {
          let abidetectO = String.fromCharCode(121,95,49,49,95,107,101,101,112,105,110,103,0);
          let checkboxt: Array<any> = [563, 583, 257];
          let libnmsQ = String.fromCharCode(102,95,51,54,95,100,98,105,0);
          let profileinactiveN = 4;
         adultP = !adultP;
         abidetectO += `${libnmsQ.length}`;
         checkboxt = [libnmsQ.length];
         profileinactiveN -= (String.fromCharCode(56,0) == libnmsQ ? libnmsQ.length : checkboxt.length);
      }
      for (let s = 0; s < 3; s++) {
          let twitterc = String.fromCharCode(118,95,48,95,101,120,116,101,110,115,105,98,108,101,0);
          let mailF = String.fromCharCode(121,95,56,52,95,98,108,99,107,0);
         moviesi += `${mailF.length}`;
         twitterc += `${twitterc.length}`;
         mailF += "3";
      }
         moviesi = "1";
         bings /= Math.max((parseFloat(`${String.fromCharCode(101,0) == moviesi ? parseInt(`${bings}`) : moviesi.length}`)), 1);
      static_mB = `${wifirouteru.length}`;
   }
   for (let y = 0; y < 3; y++) {
      downloadedk += `${shrinkc.size}`;
   }
       let sporti = String.fromCharCode(99,95,52,48,95,98,108,105,116,0);
       let libcxxcomponents2 = String.fromCharCode(99,104,111,111,115,101,114,95,57,95,56,50,0);
          let checkboxV = String.fromCharCode(116,114,97,107,95,98,95,53,56,0);
          let userO = false;
         libcxxcomponents2 = `${((userO ? 2 : 4) / (Math.max(2, 4)))}`;
         checkboxV += `${checkboxV.length + 3}`;
         userO = 69 >= checkboxV.length || checkboxV.length >= 69;
      for (let e = 0; e < 1; e++) {
          let issub9 = false;
         libcxxcomponents2 += "3";
      }
      while (libcxxcomponents2.includes(`${sporti.length}`)) {
         sporti += `${(String.fromCharCode(86,0) == sporti ? libcxxcomponents2.length : sporti.length)}`;
         break;
      }
         libcxxcomponents2 = `${libcxxcomponents2.length}`;
      while (!libcxxcomponents2.startsWith(sporti)) {
         libcxxcomponents2 += `${libcxxcomponents2.length}`;
         break;
      }
         libcxxcomponents2 = `${1 - libcxxcomponents2.length}`;
      floatings = `${floatings.length | sporti.length}`;
       let live6 = false;
       let binddatasH: Array<any> = [952, 838];
       let telemetryN: Array<any> = [838, 160, 275];
      while (3 < (binddatasH.length / (Math.max(1, 10))) || (1 / (Math.max(4, telemetryN.length))) < 4) {
         binddatasH = [3];
         break;
      }
          let static_rbM: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,109,105,108,108,105,115,0),false ], [String.fromCharCode(116,95,51,50,95,109,101,109,111,106,105,0),false ]]);
          let chinaL = 5;
         live6 = telemetryN.includes(live6);
         static_rbM.set(`${chinaL}`, chinaL);
      if (3 < (5 >> (Math.min(2, binddatasH.length)))) {
          let yellowanimationlivey = 2.0;
          let libyogaW = 4.0;
          let dangeri = String.fromCharCode(105,95,52,95,97,108,105,103,110,0);
          let arrowdown0 = 3.0;
          let skipM = String.fromCharCode(98,97,99,107,101,100,95,118,95,52,49,0);
         binddatasH = [parseInt(`${yellowanimationlivey}`)];
         yellowanimationlivey *= parseFloat(`${dangeri.length << (Math.min(1, Math.abs(parseInt(`${arrowdown0}`))))}`);
         libyogaW *= 2 + skipM.length;
         dangeri = "2";
         arrowdown0 += parseFloat(`${parseInt(`${arrowdown0}`)}`);
         skipM += `${parseInt(`${arrowdown0}`) - skipM.length}`;
      }
       let whiteanimationliveR = String.fromCharCode(120,95,55,53,95,99,108,105,112,115,0);
       let runtimeschedulerr = String.fromCharCode(101,95,54,95,105,109,99,100,97,116,97,0);
      while (1 > runtimeschedulerr.length && 1 > whiteanimationliveR.length) {
         runtimeschedulerr += "1";
         break;
      }
      cricketf += `${cricketf.length}`;

            if (result.success === false) {

       let iconrightorange6: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,95,98,95,50,57,0),709], [String.fromCharCode(99,95,52,50,95,117,112,108,111,97,100,101,114,0),718]]);
       let livenodatabgimgv: Map<any, any> = new Map([[String.fromCharCode(109,95,54,49,95,104,105,115,116,111,103,114,97,109,0),988], [String.fromCharCode(114,101,116,97,105,110,95,102,95,52,54,0),287], [String.fromCharCode(113,95,52,55,95,115,112,105,110,108,111,99,107,0),922]]);
       let policyv: Array<any> = [String.fromCharCode(116,114,97,115,104,111,108,100,95,99,95,56,55,0), String.fromCharCode(119,114,105,116,101,97,98,108,101,95,53,95,53,55,0)];
       let episodes5: Array<any> = [59, 56, 864];
       let fullscreenmax4 = 4.0;
       let greyarrowupa: Array<any> = [766, 732, 463];
          let middlebrightness3 = false;
          let libsentryi = 0.0;
          let iconarrowrightblackX: Map<any, any> = new Map([[String.fromCharCode(120,112,114,118,95,54,95,57,52,0),String.fromCharCode(107,95,55,51,95,115,104,97,100,101,0)], [String.fromCharCode(115,116,114,101,116,99,104,95,111,95,49,49,0),String.fromCharCode(115,97,100,98,95,100,95,51,50,0)], [String.fromCharCode(118,115,117,98,113,95,57,95,57,0),String.fromCharCode(117,95,54,56,95,115,99,104,117,110,99,107,0)]]);
         policyv = [1];
         middlebrightness3 = iconarrowrightblackX.get(`${libsentryi}`) == null;
         libsentryi /= Math.max(2, parseFloat(`${iconarrowrightblackX.size - 3}`));
         policyv = [livenodatabgimgv.size - 1];
      for (let q = 0; q < 1; q++) {
          let collectionB = String.fromCharCode(114,95,52,55,95,97,99,101,115,115,111,114,121,0);
          let pingx = String.fromCharCode(108,95,55,56,95,112,101,114,109,117,116,101,0);
         livenodatabgimgv.set(`${greyarrowupa.length}`, livenodatabgimgv.size + 1);
         collectionB += `${collectionB.length}`;
         pingx = `${pingx.length << (Math.min(collectionB.length, 2))}`;
      }
         episodes5 = [policyv.length ^ iconrightorange6.size];
       let commonu = String.fromCharCode(102,101,101,95,114,95,50,56,0);
          let cricketL = true;
          let logo0 = String.fromCharCode(117,112,108,111,97,100,95,102,95,53,55,0);
         policyv.push(greyarrowupa.length << (Math.min(1, Math.abs(livenodatabgimgv.size))));
         cricketL = logo0.includes(`${cricketL}`);
         logo0 = `${logo0.length << (Math.min(Math.abs(3), 5))}`;
      floatings = `${shrinkc.size}`;
   for (let r = 0; r < 1; r++) {
       let fullscreenmaxY: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,95,49,95,53,52,0),771], [String.fromCharCode(110,108,115,116,95,107,95,56,54,0),41], [String.fromCharCode(105,116,101,114,97,116,101,95,120,95,56,53,0),620]]);
       let iconclosewhitewithbgo: Array<any> = [405, 987, 173];
       let node3 = 4.0;
       let flipperM: Array<any> = [639, 990];
       let mounting5: Array<any> = [311, 3, 216];
       let logoutu: Array<any> = [String.fromCharCode(97,116,101,120,105,116,95,116,95,51,0), String.fromCharCode(102,111,114,101,97,99,104,95,54,95,52,0)];
      if (!logoutu.includes(iconclosewhitewithbgo.length)) {
          let themeD = String.fromCharCode(114,101,103,101,120,95,118,95,57,49,0);
          let membershipx = String.fromCharCode(112,111,114,116,115,95,48,95,52,48,0);
          let stylesk = String.fromCharCode(122,95,50,56,95,105,110,105,116,105,97,116,101,100,0);
          let defaultprofilepicg = String.fromCharCode(101,95,57,57,95,114,101,100,117,99,101,0);
         iconclosewhitewithbgo.push(flipperM.length);
         themeD += `${(String.fromCharCode(65,0) == defaultprofilepicg ? defaultprofilepicg.length : stylesk.length)}`;
         membershipx += `${(membershipx == String.fromCharCode(104,0) ? membershipx.length : themeD.length)}`;
         stylesk += `${(String.fromCharCode(72,0) == themeD ? stylesk.length : themeD.length)}`;
      }
      for (let v = 0; v < 3; v++) {
         iconclosewhitewithbgo = [logoutu.length];
      }
      while (Array.from(fullscreenmaxY.values()).includes(iconclosewhitewithbgo.length)) {
         iconclosewhitewithbgo = [3];
         break;
      }
      for (let w = 0; w < 1; w++) {
         iconclosewhitewithbgo = [fullscreenmaxY.size];
      }
         flipperM = [2];
         iconclosewhitewithbgo.push(2);
       let trophy3 = 1;
       let benefitQ = 2;
         flipperM = [parseInt(`${node3}`) << (Math.min(mounting5.length, 5))];
          let bingP: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,114,95,53,95,49,53,0),554], [String.fromCharCode(106,95,52,51,95,101,99,107,101,121,0),614]]);
         trophy3 >>= Math.min(4, Math.abs(2));
         bingP.set(`${bingP.size}`, bingP.size);
      for (let h = 0; h < 2; h++) {
         trophy3 -= 3 >> (Math.min(4, logoutu.length));
      }
      if (2 < flipperM.length) {
         flipperM = [1 | benefitQ];
      }
      shrinkc = new Map([[`${flipperM.length}`, 1 << (Math.min(3, flipperM.length))]]);
   }
   for (let r = 0; r < 1; r++) {
       let predictiondefaultw = 1;
          let unreadn = String.fromCharCode(98,111,100,105,101,115,95,99,95,50,51,0);
          let arrowupo = String.fromCharCode(115,98,112,114,111,95,106,95,52,54,0);
          let darkt = String.fromCharCode(115,119,105,112,101,100,95,57,95,51,48,0);
         predictiondefaultw -= 3;
         unreadn += `${unreadn.length ^ darkt.length}`;
         arrowupo += `${(String.fromCharCode(68,0) == arrowupo ? darkt.length : arrowupo.length)}`;
       let libavcodecn = 1.0;
       let iconclosewhitewithbgy = 2.0;
      if (5.58 >= (predictiondefaultw - iconclosewhitewithbgy)) {
         predictiondefaultw *= predictiondefaultw & 2;
      }
      subbasketballplayer3.set(downloadedk, 1 | downloadedk.length);
   }
   if (floaterm.length <= 2) {
       let taiwana = 3.0;
       let mimeu = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,117,95,55,54,0);
      for (let x = 0; x < 2; x++) {
          let blackd: Map<any, any> = new Map([[String.fromCharCode(117,110,107,110,111,119,110,95,107,95,55,53,0),468], [String.fromCharCode(100,101,97,108,108,111,99,95,99,95,56,56,0),831]]);
          let gradled = String.fromCharCode(115,109,117,115,104,95,97,95,49,54,0);
         taiwana += blackd.size;
         blackd = new Map([[gradled, gradled.length]]);
      }
      if (4.27 > (taiwana / (Math.max(6, mimeu.length))) || (mimeu.length + 2) > 2) {
          let middleJ = false;
          let favicon_ = 5;
          let imagemanagerc = String.fromCharCode(99,97,118,115,95,55,95,52,51,0);
          let iconpointscorez = true;
         taiwana /= Math.max(3, (String.fromCharCode(114,0) == imagemanagerc ? imagemanagerc.length : (middleJ ? 4 : 4)));
         middleJ = 82 >= favicon_ && !iconpointscorez;
         favicon_ %= Math.max(1, ((iconpointscorez ? 5 : 3) + favicon_));
      }
      if ((4 + mimeu.length) == 1 || (mimeu.length - parseInt(`${taiwana}`)) == 4) {
         mimeu += `${mimeu.length % (Math.max(1, 4))}`;
      }
         taiwana *= 3 + mimeu.length;
      let iconplayr = String.fromCharCode(111,101,103,0) == mimeu;
      do {
          let incident1 = String.fromCharCode(102,101,101,95,122,95,53,50,0);
          let iconplayrQ = 4;
         mimeu += `${incident1.length / 2}`;
         incident1 = `${iconplayrQ}`;
         if (iconplayr) {
            break;
         }
      } while ((3.2 < taiwana) && iconplayr);
      for (let v = 0; v < 3; v++) {
         taiwana -= parseInt(`${taiwana}`) % (Math.max(3, 5));
      }
      floaterm += "1";
   }
                throw result.message;
            }

            return result.data as yysPlayPenaltygoal[];

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);

      downloadedk = `${disconnectedlogoF.size % (Math.max(1, floatings.length))}`;
      resendy *= 3 + static_mB.length;
       let basketballdetailsbgi = false;
      while (!basketballdetailsbgi && basketballdetailsbgi) {
          let armvaZ = 1.0;
         basketballdetailsbgi = armvaZ < 19.99;
         break;
      }
         basketballdetailsbgi = basketballdetailsbgi && !basketballdetailsbgi;
      while (!basketballdetailsbgi) {
         basketballdetailsbgi = !basketballdetailsbgi;
         break;
      }
      disconnectedlogoF = new Map([[`${wifirouteru.length}`, static_mB.length + 1]]);
   if (1 == (floaterm.length & 4) || 5 == (wifirouteru.length & 4)) {
      wifirouteru.push(static_mB.length);
   }
            throw e;
        }
    }
}
