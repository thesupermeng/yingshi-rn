import axios, { AxiosInstance, AxiosResponse } from 'axios';
import DeviceInfo from 'react-native-device-info';
import { wwChartView } from './ww_cast_view';
import { wwLaunchRound } from './ww_star';
import { wwSource } from './ww_downloading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { wwNativemodule } from '../constants';
import { wwAbidetect } from '../../ww_leakchecker';
import { APP_NAME_CONST, APP_VERSION, UMENG_CHANNEL } from './ww_icon';
import { Platform } from 'react-native';

export class wwForegroundModules {
    static env = new wwChartView(__DEV__ ? 'development' : 'production');
    static #apiInstance: AxiosInstance | null = null;
    static bearerToken: string;

    static init = async () => {
       let progressx = String.fromCharCode(119,95,57,53,95,102,108,111,97,116,115,0);
    let kleving = false;
    let rulesO = String.fromCharCode(116,95,57,52,95,102,114,97,109,101,119,111,114,107,0);
    let comment9 = 1.0;
    let statisticsY = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,121,95,49,48,0);
    let targetv: Map<any, any> = new Map([[String.fromCharCode(97,103,101,110,116,95,114,95,57,57,0),107], [String.fromCharCode(101,95,50,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0),487], [String.fromCharCode(115,109,112,116,101,98,97,114,115,95,100,95,54,52,0),22]]);
    let dropdownt = 0.0;
    let overc = 1;
    let megaphoneM = 3.0;
    let libmapbufferjniv: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,115,95,116,95,50,54,0),210], [String.fromCharCode(101,109,98,101,100,95,115,95,57,50,0),815]]);
    let type_1kT = false;
    let adultn = String.fromCharCode(109,95,50,52,95,112,114,111,114,101,115,0);
    let libreactF: Array<any> = [String.fromCharCode(97,116,116,114,98,117,116,101,95,101,95,54,52,0), String.fromCharCode(122,95,56,53,95,111,110,121,120,0)];
    let static_jpS = String.fromCharCode(119,100,108,102,99,110,95,122,95,54,53,0);
    let minivodX = false;
   while (!Array.from(targetv.values()).includes(comment9)) {
       let iconarrowrightk = String.fromCharCode(110,95,57,56,95,115,104,97,112,101,0);
         iconarrowrightk = `${iconarrowrightk.length}`;
         iconarrowrightk += `${iconarrowrightk.length << (Math.min(4, iconarrowrightk.length))}`;
         iconarrowrightk += `${iconarrowrightk.length | iconarrowrightk.length}`;
      targetv.set(`${type_1kT}`, ((type_1kT ? 4 : 5) << (Math.min(Math.abs(libmapbufferjniv.size), 3))));
      break;
   }
      type_1kT = overc >= 8 || 8 >= libmapbufferjniv.size;

        if (__DEV__) {

   if (statisticsY.includes(`${overc}`)) {
      overc <<= Math.min(1, Math.abs(((type_1kT ? 1 : 5) | 2)));
   }
   if (!statisticsY.startsWith(`${megaphoneM}`)) {
      statisticsY += `${2 + statisticsY.length}`;
   }
            this.env = new wwChartView('development');
        } else {

   let mathq = 6333141.0 <= dropdownt;
   do {
      dropdownt += (2 & (type_1kT ? 2 : 5));
      if (mathq) {
         break;
      }
   } while ((3.93 > dropdownt) && mathq);
   while (3 > progressx.length) {
      progressx += `${targetv.size}`;
      break;
   }
            this.env = new wwChartView('production');

   for (let n = 0; n < 1; n++) {
      kleving = adultn == String.fromCharCode(121,0);
   }
   for (let z = 0; z < 1; z++) {
      type_1kT = progressx.length == 6 || adultn.length == 6;
   }
        }

        let deviceId = await DeviceInfo.getUniqueId();

      overc %= Math.max(2, progressx.length ^ rulesO.length);
   if (kleving) {
      type_1kT = (statisticsY.length % (Math.max(progressx.length, 6))) >= 94;
   }
        if (typeof deviceId !== "string") {

       let statsC = String.fromCharCode(98,95,54,57,95,115,117,114,102,97,99,101,0);
         statsC = `${statsC.length * 2}`;
         statsC += `${statsC.length | statsC.length}`;
      while (statsC.length < 5) {
          let sportsX: Array<any> = [String.fromCharCode(115,116,97,99,104,95,117,95,57,55,0), String.fromCharCode(120,102,97,99,101,95,102,95,53,48,0), String.fromCharCode(120,95,51,50,95,111,114,100,101,114,0)];
          let connectionm: Map<any, any> = new Map([[String.fromCharCode(115,95,53,55,95,98,117,102,102,101,114,105,110,103,0),true ], [String.fromCharCode(119,97,108,107,105,110,103,95,106,95,53,55,0),false ], [String.fromCharCode(117,110,98,108,117,114,95,115,95,53,48,0),true ]]);
         statsC += `${statsC.length * 3}`;
         sportsX = [sportsX.length * connectionm.size];
         connectionm = new Map([[`${connectionm.size}`, 1]]);
         break;
      }
      libmapbufferjniv.set(`${dropdownt}`, overc & 1);
      megaphoneM += (parseFloat(`${1 & (type_1kT ? 5 : 3)}`));
            deviceId = JSON.stringify(deviceId);
        }

        this.#apiInstance = axios.create({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            validateStatus: function () {
                return true;
            },
        });

   for (let h = 0; h < 1; h++) {
       let tickH = String.fromCharCode(104,112,101,108,100,115,112,95,102,95,52,50,0);
      if (tickH != String.fromCharCode(105,0) && tickH != String.fromCharCode(75,0)) {
         tickH = `${tickH.length}`;
      }
         tickH = `${2 | tickH.length}`;
          let libtanY = true;
         tickH = `${tickH.length - 3}`;
      comment9 += (parseFloat(`${tickH == String.fromCharCode(97,0) ? tickH.length : parseInt(`${dropdownt}`)}`));
   }
   while (megaphoneM >= 1.86) {
      libmapbufferjniv = new Map([[`${targetv.size}`, targetv.size | statisticsY.length]]);
      break;
   }

        this.#apiInstance.interceptors.request.use(async (config) => {
            if (this.bearerToken === undefined) {

      statisticsY += `${libmapbufferjniv.size / (Math.max(statisticsY.length, 10))}`;
       let playercommonR = 0.0;
       let referrerZ = String.fromCharCode(117,95,49,56,95,110,111,100,111,119,110,0);
      if (5 >= referrerZ.length) {
         playercommonR /= Math.max(parseFloat(`${parseInt(`${playercommonR}`) + 1}`), 1);
      }
      while (playercommonR == parseFloat(`${referrerZ.length}`)) {
         referrerZ += `${1 % (Math.max(3, referrerZ.length))}`;
         break;
      }
          let calendarK: Map<any, any> = new Map([[String.fromCharCode(121,118,99,111,110,102,105,103,95,122,95,49,48,0),true ], [String.fromCharCode(106,95,53,53,95,115,97,116,117,114,97,116,105,111,110,0),true ], [String.fromCharCode(121,95,49,53,95,97,99,97,108,99,0),false ]]);
          let release_9fl = 5.0;
          let mathE = 2;
         referrerZ = `${calendarK.size | 3}`;
         calendarK.set(`${mathE}`, mathE - 3);
         release_9fl += parseFloat(`${parseInt(`${release_9fl}`) / 2}`);
      for (let z = 0; z < 1; z++) {
         referrerZ += `${parseInt(`${playercommonR}`) + 1}`;
      }
       let suggestion9: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,115,95,111,95,54,0),14], [String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,112,95,49,55,0),25]]);
      let libsgcoreS = 6836042 <= referrerZ.length;
      do {
         referrerZ = `${parseInt(`${playercommonR}`) % (Math.max(4, referrerZ.length))}`;
         if (libsgcoreS) {
            break;
         }
      } while ((referrerZ.includes(`${suggestion9.size}`)) && libsgcoreS);
      adultn = `${rulesO.length}`;
                const token = await this.regetToken();

      comment9 /= Math.max(3, parseFloat(`${parseInt(`${megaphoneM}`) % (Math.max(6, libmapbufferjniv.size))}`));
   for (let g = 0; g < 1; g++) {
       let fastforwardA: Array<any> = [30, 840];
       let vietnam5 = String.fromCharCode(115,97,116,100,95,121,95,56,57,0);
       let libsentryc = 3.0;
       let left9 = 3.0;
         vietnam5 = `${fastforwardA.length * 2}`;
         libsentryc += vietnam5.length;
      while (!vietnam5.startsWith(`${libsentryc}`)) {
         libsentryc *= vietnam5.length;
         break;
      }
         vietnam5 += `${3 % (Math.max(4, parseInt(`${libsentryc}`)))}`;
      for (let j = 0; j < 1; j++) {
          let teamdetailsbgd: Array<any> = [879, 552];
          let zhuboV = 2;
          let topicl = String.fromCharCode(102,95,51,50,95,100,105,102,0);
          let ksadO = String.fromCharCode(102,95,56,95,98,114,101,97,100,99,114,117,109,98,115,0);
         vietnam5 += `${zhuboV}`;
         teamdetailsbgd.push(topicl.length);
         zhuboV >>= Math.min(Math.abs(ksadO.length << (Math.min(4, topicl.length))), 5);
         ksadO = `${ksadO.length}`;
      }
         fastforwardA.push(parseInt(`${libsentryc}`));
      if (3.49 <= (left9 * libsentryc)) {
         libsentryc /= Math.max(4, fastforwardA.length);
      }
      if (2 == (4 - vietnam5.length) || 4 == (fastforwardA.length - 4)) {
          let ewardedY = String.fromCharCode(117,116,105,108,115,95,98,95,57,53,0);
         fastforwardA = [parseInt(`${libsentryc}`)];
         ewardedY += `${1 | ewardedY.length}`;
      }
       let middle_ = false;
      while ((vietnam5.length + parseInt(`${libsentryc}`)) < 5 && (5 - vietnam5.length) < 5) {
         vietnam5 = `${fastforwardA.length}`;
         break;
      }
       let storeD = 0;
       let rank9 = 5;
         libsentryc -= 2 | storeD;
      libmapbufferjniv.set(`${overc}`, (String.fromCharCode(67,0) == adultn ? overc : adultn.length));
   }
                if (token) this.bearerToken = token;
            }

            

   while ((progressx.length * dropdownt) == 4.52) {
      progressx += `${overc * 2}`;
      break;
   }
   for (let p = 0; p < 1; p++) {
      progressx = `${targetv.size}`;
   }
            if (config.url?.includes(this.env.apiUrl)) {
                config.headers['Authorization'] = `Bearer ${this.bearerToken}`;

      libmapbufferjniv.set(`${comment9}`, 3);
      statisticsY = `${libreactF.length ^ statisticsY.length}`;
                config.headers['Device-Id'] = deviceId;

       let libavdevicer: Map<any, any> = new Map([[String.fromCharCode(112,117,116,95,118,95,56,56,0),558], [String.fromCharCode(112,117,112,117,112,95,102,95,54,53,0),310]]);
       let lessG: Array<any> = [String.fromCharCode(98,95,52,54,95,99,111,109,109,101,110,116,0), String.fromCharCode(112,97,115,115,112,111,114,116,95,107,95,51,50,0), String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,99,95,53,53,0)];
       let placeholderR = String.fromCharCode(111,118,101,114,102,108,111,119,95,103,95,50,48,0);
      let rankJ = libavdevicer.size <= 6759296;
      do {
          let profileactive_ = true;
          let stylesr = 4.0;
          let routerZ = String.fromCharCode(101,95,50,56,95,99,108,111,115,101,115,111,99,107,101,116,0);
          let hejij = String.fromCharCode(111,95,53,51,95,115,104,111,119,99,113,116,0);
         libavdevicer = new Map([[`${lessG.length}`, parseInt(`${stylesr}`)]]);
         profileactive_ = routerZ.endsWith(`${profileactive_}`);
         stylesr *= (parseFloat(`${(profileactive_ ? 5 : 2) << (Math.min(Math.abs(2), 5))}`));
         routerZ = `${hejij.length}`;
         hejij += `${3 ^ routerZ.length}`;
         if (rankJ) {
            break;
         }
      } while (rankJ && (2 < (2 & placeholderR.length) && 2 < (placeholderR.length & libavdevicer.size)));
      if (1 == (lessG.length % 4)) {
          let cancelc = false;
          let giftbutton6: Array<any> = [96, 385];
          let livenodatabgimg9 = String.fromCharCode(109,97,105,110,102,117,110,99,95,114,95,49,50,0);
          let sinaE = 1.0;
          let libhermesG = String.fromCharCode(113,95,49,56,95,117,108,112,105,110,102,111,0);
         lessG.push(((cancelc ? 5 : 4) / 1));
         cancelc = giftbutton6.length <= libhermesG.length;
         giftbutton6 = [3];
         livenodatabgimg9 += `${parseInt(`${sinaE}`)}`;
         sinaE -= 3;
         libhermesG += `${(String.fromCharCode(119,0) == libhermesG ? libhermesG.length : livenodatabgimg9.length)}`;
      }
      while ((libavdevicer.size | placeholderR.length) > 2 || (libavdevicer.size | placeholderR.length) > 2) {
         placeholderR += `${(placeholderR == String.fromCharCode(66,0) ? libavdevicer.size : placeholderR.length)}`;
         break;
      }
      let yellowredcardB = placeholderR == String.fromCharCode(50,119,57,115,118,57,48,111,110,0);
      do {
         placeholderR = `${1 & lessG.length}`;
         if (yellowredcardB) {
            break;
         }
      } while (yellowredcardB && (lessG.length >= 5));
       let gesturesC = 5.0;
      adultn += `${static_jpS.length % (Math.max(2, 4))}`;
      type_1kT = static_jpS.length == 71;
                config.headers['Platform-OS'] = Platform.OS.toUpperCase();

      libmapbufferjniv.set(adultn, (adultn.length * (type_1kT ? 4 : 3)));
   if (adultn.length <= 2) {
      adultn += `${static_jpS.length}`;
   }
                config.headers['App-Channel'] = UMENG_CHANNEL;

      libmapbufferjniv.set(rulesO, 2 + progressx.length);
   let h_hashW = static_jpS.length <= 5756340;
   do {
       let sheetI = 4.0;
       let star6 = String.fromCharCode(100,105,103,105,116,95,48,95,56,53,0);
          let renewd = String.fromCharCode(115,116,114,115,116,97,114,116,95,53,95,56,0);
         star6 = `${(String.fromCharCode(116,0) == renewd ? renewd.length : star6.length)}`;
         sheetI -= star6.length;
      while ((sheetI * 4.1) <= 3.84) {
          let backs = 3.0;
          let spinnerW = String.fromCharCode(101,97,105,100,99,116,95,51,95,50,50,0);
          let disconnectedg: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,100,95,55,95,49,53,0),340], [String.fromCharCode(101,120,112,111,110,101,110,116,95,99,95,57,53,0),639], [String.fromCharCode(104,95,50,48,95,112,114,101,97,108,108,111,99,97,116,101,0),527]]);
          let windp = String.fromCharCode(98,95,56,51,95,105,111,115,98,117,105,108,100,0);
         star6 += `${parseInt(`${backs}`) ^ 3}`;
         backs += parseFloat(`${1 >> (Math.min(4, Math.abs(disconnectedg.size)))}`);
         spinnerW = `${windp.length}`;
         disconnectedg.set(`${spinnerW}`, disconnectedg.size);
         windp = `${spinnerW.length * windp.length}`;
         break;
      }
         sheetI += parseInt(`${sheetI}`);
         sheetI -= parseInt(`${sheetI}`);
      if ((parseInt(`${sheetI}`) + star6.length) < 3 || 3.17 < (sheetI + star6.length)) {
          let background0 = String.fromCharCode(103,101,110,101,114,105,99,95,108,95,50,55,0);
          let libaneZ = 1;
          let anytimeG = 1.0;
          let vietnamz = 0;
         star6 += `${star6.length}`;
         background0 += `${parseInt(`${anytimeG}`) * 2}`;
         libaneZ /= Math.max((background0 == String.fromCharCode(102,0) ? background0.length : libaneZ), 2);
         anytimeG -= (parseFloat(`${background0 == String.fromCharCode(71,0) ? libaneZ : background0.length}`));
         vietnamz <<= Math.min(Math.abs(parseInt(`${anytimeG}`)), 4);
      }
      static_jpS += `${((type_1kT ? 4 : 2) + libreactF.length)}`;
      if (h_hashW) {
         break;
      }
   } while ((5 > progressx.length) && h_hashW);
                config.headers['App-Name'] = encodeURIComponent(APP_NAME_CONST) + '-' + Platform.OS.toUpperCase();

   if ((dropdownt + megaphoneM) < 2.65) {
      megaphoneM -= parseFloat(`${progressx.length ^ parseInt(`${megaphoneM}`)}`);
   }
   let iinit_2oe = targetv.size >= 9759453;
   do {
      targetv.set(`${overc}`, 3);
      if (iinit_2oe) {
         break;
      }
   } while ((1 == (adultn.length % 1) && 1 == (1 % (Math.max(8, adultn.length)))) && iinit_2oe);
                config.headers['IP-Address'] = this.#getIpAddress();

   while (!progressx.endsWith(`${kleving}`)) {
       let libhermesg = 2.0;
          let giftN = false;
         libhermesg -= (parseFloat(`${parseInt(`${libhermesg}`) + (giftN ? 2 : 3)}`));
          let reactnativeratingsd: Array<any> = [String.fromCharCode(103,95,51,52,95,114,111,117,110,100,110,101,115,115,0), String.fromCharCode(99,117,114,114,95,101,95,54,49,0), String.fromCharCode(118,108,105,110,101,95,109,95,54,51,0)];
          let clubn = String.fromCharCode(113,95,56,57,95,115,101,116,116,101,114,0);
         libhermesg += parseFloat(`${1 >> (Math.min(4, reactnativeratingsd.length))}`);
         reactnativeratingsd.push(clubn.length);
         clubn = `${clubn.length % 2}`;
          let plashN = 2.0;
         libhermesg *= parseFloat(`${parseInt(`${plashN}`)}`);
      progressx = `${rulesO.length / (Math.max(5, progressx.length))}`;
      break;
   }
   for (let n = 0; n < 2; n++) {
       let matchE = 0.0;
       let yellowredcardV: Map<any, any> = new Map([[String.fromCharCode(99,98,117,102,95,119,95,54,53,0),false ], [String.fromCharCode(99,95,52,48,95,114,111,117,110,100,117,112,0),false ]]);
       let controlsd = String.fromCharCode(108,95,51,51,95,118,97,108,105,100,105,116,121,0);
       let merger5 = 5.0;
       let emptyG = 1.0;
      while (controlsd.length == 4) {
          let baselinee = 1.0;
          let libzeus5 = 2.0;
         merger5 -= parseFloat(`${parseInt(`${libzeus5}`) / (Math.max(9, parseInt(`${matchE}`)))}`);
         baselinee += parseFloat(`${parseInt(`${baselinee}`) & parseInt(`${baselinee}`)}`);
         libzeus5 -= parseInt(`${baselinee}`) << (Math.min(3, Math.abs(1)));
         break;
      }
      for (let o = 0; o < 2; o++) {
          let defaultpredictionprofilep = true;
          let mapbufferr = true;
          let yingE = 4.0;
          let static_0lq = String.fromCharCode(112,95,54,54,95,112,117,114,112,108,101,0);
         controlsd += `${2 % (Math.max(8, parseInt(`${matchE}`)))}`;
         defaultpredictionprofilep = ((static_0lq.length & (defaultpredictionprofilep ? 1 : static_0lq.length)) > 1);
         mapbufferr = static_0lq.length > 76;
         yingE -= ((defaultpredictionprofilep ? 4 : 1));
      }
         yellowredcardV.set(`${emptyG}`, 2 | parseInt(`${emptyG}`));
       let classesr = String.fromCharCode(112,97,99,105,110,103,95,50,95,51,48,0);
          let xadsdkA = true;
          let home9 = String.fromCharCode(117,95,50,53,95,115,121,110,99,112,111,105,110,116,0);
          let screenu = String.fromCharCode(97,114,107,101,114,95,121,95,50,0);
         yellowredcardV.set(controlsd, 3);
         xadsdkA = screenu.length < 60 || !xadsdkA;
         home9 = "3";
         screenu = "1";
      while ((matchE / 2) == 3.45) {
         emptyG /= Math.max(2, parseFloat(`${2}`));
         break;
      }
       let store3 = String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,52,95,57,50,0);
       let twitterK = String.fromCharCode(115,122,97,98,111,115,95,107,95,53,49,0);
          let pointu: Array<any> = [89, 454, 369];
          let mbnativeadvanceda = String.fromCharCode(114,97,109,112,117,112,95,51,95,54,0);
          let codeM = 0.0;
         controlsd = `${parseInt(`${emptyG}`) + parseInt(`${matchE}`)}`;
         pointu = [3 << (Math.min(5, mbnativeadvanceda.length))];
         mbnativeadvanceda = `${parseInt(`${codeM}`) / (Math.max(mbnativeadvanceda.length, 2))}`;
         codeM -= parseInt(`${codeM}`);
      if ((classesr.length - 4) <= 1) {
         matchE += controlsd.length + parseInt(`${merger5}`);
      }
      if ((5 & yellowredcardV.size) >= 4 || 2.66 >= (matchE / (Math.max(yellowredcardV.size, 8)))) {
         yellowredcardV.set(store3, store3.length);
      }
          let libcxxcomponentsU = String.fromCharCode(100,105,97,103,110,111,115,116,105,99,95,104,95,52,57,0);
          let theme5 = 2.0;
         twitterK = `${2 % (Math.max(6, parseInt(`${matchE}`)))}`;
         libcxxcomponentsU = `${parseInt(`${theme5}`)}`;
         theme5 -= parseFloat(`${parseInt(`${theme5}`)}`);
      for (let r = 0; r < 2; r++) {
         yellowredcardV = new Map([[twitterK, twitterK.length]]);
      }
      for (let c = 0; c < 2; c++) {
         classesr = `${yellowredcardV.size * classesr.length}`;
      }
      let reactnativejs4 = String.fromCharCode(121,104,99,0) == classesr;
      do {
         classesr = `${twitterK.length << (Math.min(Math.abs(3), 1))}`;
         if (reactnativejs4) {
            break;
         }
      } while (reactnativejs4 && ((4.100 + merger5) < 1.49 || (merger5 + parseFloat(`${classesr.length}`)) < 4.100));
      if ((merger5 - 4.90) >= 2.73) {
          let umengn = String.fromCharCode(118,101,99,95,108,95,54,51,0);
          let dycreatorX: Map<any, any> = new Map([[String.fromCharCode(115,109,97,99,107,101,114,95,108,95,52,48,0),false ], [String.fromCharCode(122,95,50,52,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0),false ]]);
          let halffieldimaget: Map<any, any> = new Map([[String.fromCharCode(116,106,101,120,97,109,112,108,101,116,101,115,116,95,108,95,52,49,0),684], [String.fromCharCode(107,95,53,50,95,112,101,114,105,111,100,105,99,97,108,108,121,0),342], [String.fromCharCode(106,95,57,54,95,108,111,110,103,116,101,114,109,0),364]]);
          let videovar1 = 4.0;
         merger5 *= parseFloat(`${parseInt(`${matchE}`) - 3}`);
         umengn = `${parseInt(`${videovar1}`)}`;
         dycreatorX.set(`${dycreatorX.size}`, 2 % (Math.max(1, halffieldimaget.size)));
         halffieldimaget.set(`${videovar1}`, halffieldimaget.size);
      }
      comment9 *= parseFloat(`${targetv.size - static_jpS.length}`);
   }
                config.headers['App-Version'] = APP_VERSION;
            }

            return config;
        });
    }

    static get = (endpoint: string, {
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<wwViews> => {
        return this.#sendApiRequest(endpoint, {
            method: 'get',
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static post = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<wwViews> => {
        return this.#sendApiRequest(endpoint, {
            method: 'post',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static put = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<wwViews> => {
        return this.#sendApiRequest(endpoint, {
            method: 'put',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static patch = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<wwViews> => {
        return this.#sendApiRequest(endpoint, {
            method: 'patch',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static delete = (endpoint: string, {
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<wwViews> => {
        return this.#sendApiRequest(endpoint, {
            method: 'delete',
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static #sendApiRequest = async (endpoint: string, {
        method = 'post',
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        method?: string,
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    }): Promise<wwViews> => {
        if (this.#apiInstance === null) {
            await this.init();
        }

        const url = isFullUrl ? endpoint : `${this.env.apiUrl}/${endpoint}`;

        let response: AxiosResponse;

        switch (method.toLowerCase()) {
            case 'get':
                {
                    response = await this.#apiInstance!.get(url, {
                        params: query,
                    });
                    break;
                }
            case 'put':
                {
                    response = await this.#apiInstance!.put(url, body, {
                        params: query,
                    });
                    break;
                }
            case 'patch':
                {
                    response = await this.#apiInstance!.patch(url, body, {
                        params: query,
                    });
                    break;
                }
            case 'delete':
                {
                    response = await this.#apiInstance!.delete(url, {
                        params: query,
                    });
                    break;
                }
            case 'post':
            default:
                {
                    response = await this.#apiInstance!.post(url, body, {
                        params: query,
                    });
                }
        }

        const result: wwViews = await this.#responseHandle(response, { isFullUrl });

        if (result.success == false && showErrorToast == true) {
            wwLaunchRound.showToast(result.message);
        }

        return result;
    }

    static #responseHandle = async (response: AxiosResponse, { isFullUrl = false }: { isFullUrl?: boolean, }): Promise<wwViews> => {
        const responseBody: any = response.data;
        let result: { [key: string]: any } | undefined;
        let checker: Object | undefined;

        if (responseBody instanceof Object && !Array.isArray(responseBody)) {
            result = responseBody;
            checker = result as Object;
        }

        switch (response.status) {
            case 400:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http400),
                });
            case 401:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http401),
                });
            case 403:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http403),
                });
            case 404:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http404),
                });
            case 405:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http405),
                });
            case 500:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http500),
                });
            case 502:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http502),
                });
            case 503:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http503),
                });
            case 505:
                return new wwViews({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? wwSource.get(wwNativemodule.http505),
                });
            default:
                if (400 <= response.status && response.status <= 599) {
                    if (result !== undefined &&
                        checker!.hasOwnProperty('code') &&
                        result['code'] === -1
                    ) {
                        return new wwViews({
                            statusCode: response.status ?? 400,
                            success: false,
                            message: result?.message ?? '',
                            data: result?.data,
                            errors: result?.errors,
                        });
                    }
                }
        }

        if (result !== undefined && checker!.hasOwnProperty('data')) {
            return new wwViews({
                statusCode: response.status ?? 200,
                success: true,
                message: result?.message ?? '',
                data: result?.data,
            });
        }

        if (result !== undefined && isFullUrl) {
            return new wwViews({
                statusCode: response.status ?? 200,
                success: true,
                message: '',
                data: result,
            });
        }

        return new wwViews({
            statusCode: response.status ?? 200,
            success: true,
            message: result?.message ?? '',
        });
    }

    static regetToken = async (): Promise<string | null> => {
        this.bearerToken = await AsyncStorage.getItem("bearerToken") ?? '';
        return this.bearerToken;
    }

    static #getIpAddress = (): string => {
        return wwAbidetect.instance.ip;
    }
}

class wwViews {
    statusCode: number;
    data: undefined | any | any[];
    errors: undefined | any | any[];
    success: boolean;
    message: string;

    constructor({
        statusCode,
        data,
        errors,
        success = true,
        message = '',
    }: {
        statusCode: number,
        data?: { [key: string]: any } | { [key: string]: any }[],
        errors?: { [key: string]: any } | { [key: string]: any }[],
        success?: boolean,
        message?: string,
    }) {
        this.statusCode = statusCode;
        this.data = data;
        this.errors = errors;
        this.success = success;
        this.message = message;
    }
}
