import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/ww_basketball";
import DeviceInfo from "react-native-device-info";
import {
  Dimensions,
  LogBox,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  ANDROID_PLAY_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_TAB_BANNER_ADS,
  IOS_HOME_PAGE_BANNER_ADS,
  IOS_PLAY_DETAILS_BANNER_ADS,
  IOS_TOPIC_DETAILS_BANNER_ADS,
  IOS_TOPIC_TAB_BANNER_ADS,
  TOPON_BANNER_HEIGHT,
} from "@utility/ww_icon";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { wwEighteenShirt } from "@redux/ww_small";
import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
interface wwIndexDice {
  children: ReactNode;
}

export const AdsBannerContext = createContext<{
  setRoute: any;
  setNavbarHeight: any;
  reloadBanner: any;
  currentRoute: string | null;
}>({
  setRoute: () => {},
  setNavbarHeight: () => {},
  reloadBanner: () => {},
  currentRoute: "",
});

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const scale = Dimensions.get("screen").scale;

export const AdsBannerContextProvider = ({ children }: wwIndexDice) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<wwVertical>("userReducer");
  const settingState: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wwEighteenShirt) => screenReducer
  );
  

  const reloadBanner = () => {
       let libzeusg = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,54,95,55,50,0);
    let relateds = String.fromCharCode(109,95,55,56,95,98,117,110,100,108,101,0);
    let navigationD: Array<any> = [666, 106, 863];
    let libjsijniprofilerJ = false;
    let ksade = String.fromCharCode(105,95,56,51,95,121,117,118,121,117,118,0);
    let bggradientZ = String.fromCharCode(122,105,112,95,100,95,55,52,0);
    let changeX = true;
    let progress3 = String.fromCharCode(102,108,116,117,105,110,116,95,50,95,54,53,0);
    let dragW = 3;
    let yellowredcard8 = true;
    let clubj = 1;
      changeX = ((libzeusg.length << (Math.min(4, Math.abs((!changeX ? libzeusg.length : 95))))) <= 95);
   while (4 <= libzeusg.length) {
       let switch_x9 = String.fromCharCode(119,95,52,51,95,100,101,114,105,118,97,116,105,111,110,0);
       let plash5 = String.fromCharCode(104,95,55,57,95,116,114,97,99,107,101,114,0);
       let mbnativeW: Array<any> = [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,117,95,55,51,0), String.fromCharCode(117,95,56,52,95,105,110,99,108,117,115,105,111,110,115,0), String.fromCharCode(103,95,49,50,95,117,116,105,108,0)];
       let acceptedn = String.fromCharCode(114,101,112,111,114,116,101,100,95,97,95,52,56,0);
       let clearu = String.fromCharCode(105,110,99,114,101,97,115,101,95,48,95,53,52,0);
      if ((acceptedn.length >> (Math.min(Math.abs(5), 2))) < 3 && 5 < (acceptedn.length >> (Math.min(4, mbnativeW.length)))) {
          let pressureS: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,101,115,116,105,109,97,116,105,111,110,0),true ], [String.fromCharCode(100,95,56,54,95,115,104,97,107,101,0),false ]]);
          let sort6: Map<any, any> = new Map([[String.fromCharCode(113,95,53,56,95,99,111,110,115,111,110,97,110,116,0),384], [String.fromCharCode(122,95,49,54,95,105,115,99,111,118,101,114,0),732]]);
          let handlera = 0.0;
         acceptedn = `${switch_x9.length}`;
         pressureS.set(`${pressureS.size}`, sort6.size / 1);
         sort6.set(`${handlera}`, parseInt(`${handlera}`));
      }
          let albumX = 1.0;
          let loginL = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,103,95,56,54,0);
         acceptedn = "2";
         albumX /= Math.max(5, (parseFloat(`${String.fromCharCode(48,0) == loginL ? loginL.length : parseInt(`${albumX}`)}`)));
      let rankt = mbnativeW.length >= 6032885;
      do {
         mbnativeW = [clearu.length & acceptedn.length];
         if (rankt) {
            break;
         }
      } while (rankt && (4 == mbnativeW.length));
      let resendx = plash5 == String.fromCharCode(109,120,113,57,0);
      do {
          let promotiong = String.fromCharCode(99,95,51,53,95,112,101,101,114,115,0);
          let xadsdks: Array<any> = [String.fromCharCode(115,101,108,95,100,95,54,52,0), String.fromCharCode(119,101,101,107,100,97,121,95,101,95,57,54,0), String.fromCharCode(113,95,56,53,95,112,98,108,111,99,107,115,0)];
          let umengs = 4;
          let securitys = true;
          let greenW = false;
         plash5 = `${(String.fromCharCode(112,0) == acceptedn ? acceptedn.length : (securitys ? 4 : 2))}`;
         promotiong = "2";
         xadsdks.push(promotiong.length);
         umengs |= ((greenW ? 1 : 1) - umengs);
         securitys = 77 > umengs;
         greenW = !greenW;
         if (resendx) {
            break;
         }
      } while ((switch_x9 == plash5) && resendx);
         plash5 += `${switch_x9.length}`;
      for (let o = 0; o < 2; o++) {
          let baidu8 = 5.0;
          let libavfilterc = String.fromCharCode(104,95,57,52,95,116,104,114,101,97,100,0);
          let profileframeU = 4;
          let macauu = 1.0;
         switch_x9 += `${1 * parseInt(`${macauu}`)}`;
         baidu8 += parseFloat(`${3 ^ profileframeU}`);
         libavfilterc = `${libavfilterc.length & parseInt(`${baidu8}`)}`;
         profileframeU += profileframeU - libavfilterc.length;
         macauu /= Math.max(4, profileframeU + libavfilterc.length);
      }
         clearu = `${mbnativeW.length}`;
      for (let a = 0; a < 2; a++) {
         plash5 = `${switch_x9.length}`;
      }
          let unselecteds = 4.0;
         acceptedn = "2";
         unselecteds /= Math.max(3, parseInt(`${unselecteds}`) / (Math.max(8, parseInt(`${unselecteds}`))));
         clearu += `${plash5.length % 1}`;
      let closeH = switch_x9.length <= 6907723;
      do {
         switch_x9 += "3";
         if (closeH) {
            break;
         }
      } while ((clearu == String.fromCharCode(103,0) || switch_x9.length == 1) && closeH);
       let imagenetworkerr0 = false;
       let sharey = true;
         mbnativeW = [3];
         acceptedn += `${1 / (Math.max(4, clearu.length))}`;
      let listX = String.fromCharCode(103,54,97,100,117,0) == plash5;
      do {
         plash5 = "1";
         if (listX) {
            break;
         }
      } while (listX && (plash5 != String.fromCharCode(114,0) && clearu.length > 3));
      libjsijniprofilerJ = dragW > 87 && 87 > plash5.length;
      break;
   }
       let dragcloseV = String.fromCharCode(99,95,51,95,111,110,101,111,102,0);
       let movieso = String.fromCharCode(104,95,52,52,95,101,120,112,97,110,100,101,114,0);
       let giflivestreamingy = 1.0;
         movieso += `${dragcloseV.length ^ 3}`;
      let wnewsshareq = giflivestreamingy >= 6987874.0;
      do {
          let watchi = String.fromCharCode(110,95,54,51,95,100,105,102,102,101,114,101,110,99,101,115,0);
          let rightp = 4.0;
          let rncoreR = false;
         giflivestreamingy -= 2;
         watchi += `${watchi.length >> (Math.min(2, Math.abs(parseInt(`${rightp}`))))}`;
         rightp /= Math.max(1, (watchi == String.fromCharCode(113,0) ? watchi.length : parseInt(`${rightp}`)));
         rncoreR = parseInt(`${rightp}`) <= watchi.length;
         if (wnewsshareq) {
            break;
         }
      } while (wnewsshareq && ((dragcloseV.length / 4) <= 1 || 1 <= (dragcloseV.length | 4)));
      while (movieso.length >= 5) {
         movieso += `${parseInt(`${giflivestreamingy}`) / 3}`;
         break;
      }
         dragcloseV += `${movieso.length}`;
      for (let c = 0; c < 2; c++) {
          let condensedy = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,98,95,56,57,0);
          let dragclose2: Array<any> = [306, 247];
          let knewssharey = 5.0;
         movieso = `${2 & parseInt(`${knewssharey}`)}`;
         condensedy += `${condensedy.length}`;
         dragclose2.push(1 | condensedy.length);
         knewssharey -= (String.fromCharCode(86,0) == condensedy ? condensedy.length : dragclose2.length);
      }
       let philippinesd = 0.0;
       let traminij = 2.0;
       let untickI = 1.0;
      for (let v = 0; v < 2; v++) {
          let moduleh = true;
          let redirectQ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,104,117,102,95,104,95,53,48,0),196], [String.fromCharCode(102,95,49,54,95,116,104,117,109,98,0),933]]);
          let libreactnativejnii = 1;
         philippinesd /= Math.max(parseFloat(`${movieso.length}`), 3);
         moduleh = (97 < ((moduleh ? 97 : redirectQ.size) * redirectQ.size));
         libreactnativejnii |= ((moduleh ? 2 : 4) ^ libreactnativejnii);
      }
         giflivestreamingy *= dragcloseV.length / (Math.max(movieso.length, 4));
      progress3 += `${3 % (Math.max(7, parseInt(`${giflivestreamingy}`)))}`;
   while (!changeX) {
       let pingB: Map<any, any> = new Map([[String.fromCharCode(111,95,54,56,95,106,115,111,110,0),108], [String.fromCharCode(117,110,105,116,116,101,115,116,95,103,95,50,56,0),81]]);
       let predictionbannersharedY = String.fromCharCode(118,95,57,54,95,117,110,115,99,97,108,101,100,0);
       let libcrashsdkw = String.fromCharCode(104,95,52,56,95,101,100,105,116,0);
       let mapbufferm = String.fromCharCode(117,95,55,53,0);
       let cancelW = String.fromCharCode(111,110,108,105,110,101,115,95,113,95,49,0);
      let libsgcoret = cancelW == String.fromCharCode(57,116,113,108,109,56,49,49,119,53,0);
      do {
          let greyc: Map<any, any> = new Map([[String.fromCharCode(117,110,99,114,111,112,112,101,100,95,111,95,56,48,0),false ], [String.fromCharCode(109,101,115,115,115,97,103,101,95,103,95,54,51,0),false ], [String.fromCharCode(112,97,112,101,114,115,95,54,95,51,53,0),false ]]);
          let greenG = 5.0;
          let debugg: Array<any> = [47, 533, 50];
          let tramini5 = false;
         cancelW = "3";
         greyc = new Map([[`${greenG}`, 1 & parseInt(`${greenG}`)]]);
         debugg.push(parseInt(`${greenG}`) >> (Math.min(5, Math.abs(1))));
         tramini5 = (parseInt(`${greenG}`) - debugg.length) > 46;
         if (libsgcoret) {
            break;
         }
      } while (libsgcoret && (!cancelW.startsWith(`${pingB.size}`)));
      let libavdevicec = String.fromCharCode(104,107,121,50,52,105,49,0) == cancelW;
      do {
          let reactnavigationj = 1;
         cancelW = `${cancelW.length - 3}`;
         reactnavigationj >>= Math.min(Math.abs(3), 3);
         if (libavdevicec) {
            break;
         }
      } while (libavdevicec && (cancelW.includes(`${pingB.size}`)));
      let sigmobH = libcrashsdkw.length <= 5421114;
      do {
         libcrashsdkw += "1";
         if (sigmobH) {
            break;
         }
      } while (sigmobH && (!mapbufferm.includes(`${libcrashsdkw.length}`)));
          let forward3 = String.fromCharCode(116,95,54,49,95,102,108,105,112,112,101,100,0);
         mapbufferm += `${forward3.length}`;
       let predictionbannersharedYd: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,121,95,119,95,55,50,0),25], [String.fromCharCode(117,95,57,51,95,116,119,111,102,105,115,104,0),803]]);
         cancelW += `${2 + predictionbannersharedY.length}`;
         predictionbannersharedYd = new Map([[`${predictionbannersharedYd.size}`, 2]]);
         predictionbannersharedY += `${predictionbannersharedY.length >> (Math.min(Math.abs(3), 1))}`;
          let albumXN: Map<any, any> = new Map([[String.fromCharCode(107,95,51,55,95,99,97,110,111,112,117,115,0),904], [String.fromCharCode(115,95,57,54,95,102,105,114,101,0),485]]);
          let libavformatk = true;
         libcrashsdkw += `${cancelW.length % (Math.max(7, predictionbannersharedYd.size))}`;
         albumXN.set(`${libavformatk}`, albumXN.size);
         mapbufferm = `${mapbufferm.length + 3}`;
      let taiwanx = predictionbannersharedYd.size <= 9580644;
      do {
          let yingX = String.fromCharCode(99,95,49,48,95,97,110,110,111,117,110,99,101,0);
         predictionbannersharedYd.set(mapbufferm, 2);
         yingX += `${yingX.length + 2}`;
         if (taiwanx) {
            break;
         }
      } while (((cancelW.length % 4) < 5 || (cancelW.length % (Math.max(2, predictionbannersharedYd.size))) < 4) && taiwanx);
       let tickc = String.fromCharCode(103,101,116,109,95,116,95,49,49,0);
         predictionbannersharedY = `${pingB.size >> (Math.min(Math.abs(2), 1))}`;
         pingB.set(mapbufferm, (mapbufferm == String.fromCharCode(55,0) ? mapbufferm.length : cancelW.length));
      while (pingB.size == 4) {
         pingB = new Map([[cancelW, tickc.length]]);
         break;
      }
      changeX = pingB.size == predictionbannersharedY.length;
      break;
   }
      navigationD = [2 % (Math.max(7, navigationD.length))];
      libjsijniprofilerJ = progress3.length < libzeusg.length;
   while ((progress3.length << (Math.min(Math.abs(5), 4))) > 2 && (5 << (Math.min(3, progress3.length))) > 4) {
       let collectiona = false;
       let clearX = true;
         clearX = (!clearX ? !collectiona : clearX);
         collectiona = !clearX;
          let middlewarew: Map<any, any> = new Map([[String.fromCharCode(107,95,53,52,95,114,101,110,116,97,108,0),String.fromCharCode(112,111,115,116,101,110,99,111,100,101,0)], [String.fromCharCode(100,95,55,54,95,97,117,100,105,111,103,101,110,0),String.fromCharCode(111,95,50,57,95,109,97,99,114,111,115,0)], [String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,113,95,49,52,0),String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,55,95,49,56,0)]]);
          let product_ = String.fromCharCode(99,111,109,109,105,116,95,104,95,51,0);
          let eactO: Array<any> = [939, 363, 146];
         clearX = collectiona;
         middlewarew = new Map([[`${middlewarew.size}`, eactO.length * middlewarew.size]]);
         product_ = `${2 + product_.length}`;
         eactO = [3];
          let nalytics4 = String.fromCharCode(116,95,55,54,95,114,101,115,112,111,110,100,101,114,0);
          let bootP = true;
          let away5: Array<any> = [String.fromCharCode(112,95,50,56,95,109,105,115,115,101,100,0), String.fromCharCode(98,95,51,52,95,114,101,119,105,110,100,0)];
         collectiona = !bootP;
         nalytics4 = `${nalytics4.length}`;
         away5.push(away5.length % (Math.max(nalytics4.length, 6)));
         clearX = (collectiona ? clearX : !collectiona);
      if (clearX) {
         clearX = (!collectiona ? !clearX : collectiona);
      }
      progress3 += `${(2 ^ (libjsijniprofilerJ ? 2 : 3))}`;
      break;
   }
       let imagesW = 5.0;
          let libswscaleh = 5.0;
         imagesW /= Math.max(1, parseFloat(`${parseInt(`${libswscaleh}`) * parseInt(`${imagesW}`)}`));
         imagesW -= parseFloat(`${parseInt(`${imagesW}`)}`);
      for (let h = 0; h < 2; h++) {
         imagesW *= parseFloat(`${parseInt(`${imagesW}`)}`);
      }
      libzeusg = `${1 - progress3.length}`;
       let giflivestreamingm = 3.0;
       let libreactnativejni7 = 1.0;
       let turnK = String.fromCharCode(108,95,49,50,95,99,97,110,99,101,108,97,98,108,101,0);
         libreactnativejni7 += parseFloat(`${parseInt(`${giflivestreamingm}`) | 1}`);
      if (3.93 <= (parseFloat(`${turnK.length}`) * libreactnativejni7)) {
         turnK += `${parseInt(`${libreactnativejni7}`)}`;
      }
       let imagesf = false;
      for (let z = 0; z < 2; z++) {
         libreactnativejni7 += (parseFloat(`${parseInt(`${giflivestreamingm}`) * (imagesf ? 1 : 1)}`));
      }
       let kickh = 0.0;
       let borderlessE = 5.0;
      for (let f = 0; f < 2; f++) {
          let viewerN = true;
          let mbsplashi: Array<any> = [280, 755];
          let halffieldimagev = true;
         turnK += `${parseInt(`${borderlessE}`) % (Math.max(3, parseInt(`${libreactnativejni7}`)))}`;
         viewerN = mbsplashi.length == 57 && !halffieldimagev;
         mbsplashi = [mbsplashi.length];
         halffieldimagev = !viewerN;
      }
         imagesf = 52.81 < (borderlessE / (Math.max(kickh, 9)));
         turnK += `${parseInt(`${libreactnativejni7}`) + 3}`;
      while (2.59 < (kickh / 2.46) && (2.46 - kickh) < 5.35) {
          let modelsF = 3.0;
          let update_qvW = String.fromCharCode(97,95,51,54,95,122,108,105,98,0);
         kickh *= parseFloat(`${parseInt(`${modelsF}`)}`);
         modelsF *= (update_qvW == String.fromCharCode(100,0) ? update_qvW.length : update_qvW.length);
         break;
      }
      dragW += 3 ^ navigationD.length;

    console.log("reloadBanner");

       let reactnativeratingsr = false;
       let smallq = String.fromCharCode(99,95,50,48,95,106,115,111,110,114,112,99,0);
       let basketballhometeamR = String.fromCharCode(105,95,51,95,117,110,119,114,97,112,0);
      while (!reactnativeratingsr) {
         reactnativeratingsr = !reactnativeratingsr;
         break;
      }
      if (smallq.includes(`${reactnativeratingsr}`)) {
          let weiboj = String.fromCharCode(117,95,56,95,111,102,102,115,0);
         smallq = `${3 - weiboj.length}`;
      }
         reactnativeratingsr = !reactnativeratingsr;
         smallq = "1";
      for (let m = 0; m < 2; m++) {
          let libhermes2 = String.fromCharCode(99,95,51,49,95,103,117,116,116,101,114,0);
         basketballhometeamR = `${(3 << (Math.min(3, Math.abs((reactnativeratingsr ? 3 : 4)))))}`;
         libhermes2 = `${libhermes2.length << (Math.min(Math.abs(3), 4))}`;
      }
      if (basketballhometeamR.length == 4) {
          let stringsQ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,56,95,51,0),true ], [String.fromCharCode(103,97,109,101,115,95,54,95,49,48,48,0),true ], [String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,0),false ]]);
          let libpangleflippedv = String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,100,95,56,56,0);
          let langkeyK = 0.0;
         reactnativeratingsr = (libpangleflippedv.length * langkeyK) == 55.16;
         stringsQ.set(`${stringsQ.size}`, stringsQ.size * 3);
         libpangleflippedv = `${stringsQ.size}`;
      }
         smallq = `${(3 * (reactnativeratingsr ? 2 : 1))}`;
         smallq += `${1 ^ basketballhometeamR.length}`;
         smallq += `${((reactnativeratingsr ? 1 : 4) - smallq.length)}`;
      libzeusg = `${bggradientZ.length}`;
       let liveendmodallogoN = true;
       let nterstitialC = 1.0;
       let toponY = 3.0;
         toponY += ((liveendmodallogoN ? 5 : 3) / (Math.max(3, parseInt(`${nterstitialC}`))));
      if (nterstitialC >= toponY) {
         nterstitialC *= parseFloat(`${parseInt(`${nterstitialC}`) + 2}`);
      }
      if (!liveendmodallogoN) {
         liveendmodallogoN = liveendmodallogoN || 82.29 < toponY;
      }
         nterstitialC *= parseFloat(`${3}`);
      while (4.70 == (4.41 + nterstitialC) && 4.41 == nterstitialC) {
         nterstitialC /= Math.max(parseFloat(`${parseInt(`${toponY}`)}`), 4);
         break;
      }
      libzeusg = `${3 - parseInt(`${nterstitialC}`)}`;
   if (libjsijniprofilerJ) {
      libjsijniprofilerJ = ksade.length <= 4;
   }
       let historyN: Array<any> = [String.fromCharCode(97,95,57,48,95,115,116,114,105,110,103,117,116,105,108,115,0), String.fromCharCode(112,95,51,55,95,98,121,116,101,115,116,114,101,97,109,0), String.fromCharCode(119,95,57,57,95,99,111,110,116,97,105,110,97,98,108,101,0)];
       let guideM = false;
       let changea: Map<any, any> = new Map([[String.fromCharCode(99,104,111,109,112,95,114,95,53,51,0),332], [String.fromCharCode(104,95,55,95,100,105,110,101,114,115,0),226]]);
          let twitterY = 4.0;
         changea = new Map([[`${changea.size}`, parseInt(`${twitterY}`)]]);
          let placeholderN = 3.0;
          let g_centeru = String.fromCharCode(106,95,56,52,95,97,109,111,117,110,116,0);
          let historyj = 4.0;
         guideM = historyN.length <= 28 || 86.33 <= historyj;
         placeholderN /= Math.max(parseFloat(`${parseInt(`${placeholderN}`) & 3}`), 5);
         g_centeru = `${2 << (Math.min(5, g_centeru.length))}`;
         historyj += parseFloat(`${g_centeru.length}`);
         historyN.push(2 * historyN.length);
      let hiadC = 9388746 >= historyN.length;
      do {
         historyN.push(changea.size % 2);
         if (hiadC) {
            break;
         }
      } while (hiadC && (guideM));
      while (guideM) {
         historyN.push(changea.size);
         break;
      }
      dragW += (1 & (libjsijniprofilerJ ? 3 : 3));
      libjsijniprofilerJ = libzeusg == relateds;
      yellowredcard8 = libjsijniprofilerJ;
   for (let n = 0; n < 1; n++) {
      changeX = progress3.endsWith(`${changeX}`);
   }
   if (yellowredcard8) {
       let filterS: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,55,95,53,51,0),String.fromCharCode(97,112,115,95,105,95,53,0)], [String.fromCharCode(122,95,50,95,98,105,110,111,109,105,97,108,0),String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,97,95,49,49,0)]]);
       let collectionp = 4.0;
       let miniN = String.fromCharCode(105,110,112,117,116,121,95,114,95,56,55,0);
       let shrinkU: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,95,110,95,49,52,0),true ], [String.fromCharCode(98,117,116,116,111,110,115,95,55,95,49,48,48,0),true ], [String.fromCharCode(122,95,52,57,95,115,108,111,116,0),true ]]);
          let gradlewd: Array<any> = [715, 274, 47];
          let cancelR = String.fromCharCode(98,108,111,99,107,100,99,95,48,95,50,57,0);
          let dropdown7 = String.fromCharCode(106,95,50,50,95,99,111,109,98,101,100,0);
         shrinkU = new Map([[dropdown7, 3]]);
         gradlewd = [gradlewd.length];
         cancelR = `${gradlewd.length}`;
         dropdown7 = "1";
         collectionp -= filterS.size + 2;
      let componentregistryc = miniN.length >= 6079465;
      do {
          let modulee = 3.0;
          let internet7 = String.fromCharCode(117,95,57,48,95,115,116,111,114,101,120,0);
          let iconpipexpandC = String.fromCharCode(115,95,56,51,95,108,105,102,116,0);
          let smallh = 1;
         miniN = "1";
         modulee *= parseFloat(`${2}`);
         internet7 = `${(iconpipexpandC == String.fromCharCode(71,0) ? iconpipexpandC.length : parseInt(`${modulee}`))}`;
         smallh -= 1;
         if (componentregistryc) {
            break;
         }
      } while ((miniN.length >= 4) && componentregistryc);
      let proxyt = miniN == String.fromCharCode(113,98,95,99,97,121,57,0);
      do {
          let p_unlock_: Array<any> = [272, 265];
          let animationb = String.fromCharCode(116,105,109,105,110,103,115,95,122,95,56,48,0);
          let modulesa: Map<any, any> = new Map([[String.fromCharCode(121,111,110,108,121,95,115,95,52,56,0),264], [String.fromCharCode(101,120,114,100,115,112,95,103,95,52,51,0),742]]);
          let orientationT = String.fromCharCode(101,95,51,52,95,108,111,99,97,108,0);
         miniN += `${miniN.length}`;
         p_unlock_ = [orientationT.length * modulesa.size];
         animationb += `${p_unlock_.length}`;
         modulesa.set(`${animationb}`, animationb.length);
         orientationT += "2";
         if (proxyt) {
            break;
         }
      } while (proxyt && (1 <= (miniN.length | 5) || 1 <= (miniN.length % 5)));
         miniN = `${3 ^ filterS.size}`;
         miniN = `${miniN.length}`;
         miniN = "1";
         shrinkU = new Map([[`${filterS.size}`, 1 + parseInt(`${collectionp}`)]]);
       let delegate_hU = false;
       let eighteenM = true;
      while ((shrinkU.size | filterS.size) >= 4) {
         filterS.set(`${eighteenM}`, ((eighteenM ? 2 : 4) + 1));
         break;
      }
          let predictionbannershared4 = String.fromCharCode(100,101,110,105,97,108,95,104,95,53,49,0);
          let valuesB = true;
         shrinkU = new Map([[miniN, 3 & miniN.length]]);
         predictionbannershared4 = `${((valuesB ? 4 : 3) / (Math.max(1, 5)))}`;
         valuesB = (((valuesB ? predictionbannershared4.length : 86) % (Math.max(predictionbannershared4.length, 3))) > 86);
          let completed: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,112,114,111,112,97,103,97,116,105,111,110,0),512], [String.fromCharCode(115,101,101,100,95,99,95,54,55,0),715], [String.fromCharCode(101,99,116,97,110,103,108,101,95,109,95,50,57,0),855]]);
         delegate_hU = !delegate_hU;
         completed = new Map([[`${completed.size}`, 2 << (Math.min(1, Math.abs(completed.size)))]]);
      yellowredcard8 = libzeusg == String.fromCharCode(99,0);
   }
   for (let t = 0; t < 1; t++) {
      bggradientZ += `${((yellowredcard8 ? 2 : 1) + libzeusg.length)}`;
   }
    setTimeout(() => {

      yellowredcard8 = dragW > 21;
       let iconarrowrightu = 0.0;
       let vipsportH = String.fromCharCode(112,105,120,100,101,115,99,95,120,95,55,53,0);
      while (4.40 <= (4.31 - iconarrowrightu) && (vipsportH.length ^ 3) <= 3) {
         iconarrowrightu -= vipsportH.length;
         break;
      }
       let heji0 = false;
      let terms9 = 7257116 >= vipsportH.length;
      do {
         vipsportH += `${(parseInt(`${iconarrowrightu}`) ^ (heji0 ? 4 : 5))}`;
         if (terms9) {
            break;
         }
      } while (terms9 && (!heji0));
          let giftbuttonG = 3.0;
         iconarrowrightu += (vipsportH == String.fromCharCode(69,0) ? parseInt(`${iconarrowrightu}`) : vipsportH.length);
         giftbuttonG -= parseFloat(`${1}`);
         iconarrowrightu /= Math.max(((heji0 ? 2 : 4) / (Math.max(vipsportH.length, 4))), 5);
      while ((4.24 - iconarrowrightu) <= 2.99) {
         heji0 = !heji0;
         break;
      }
      ksade += "2";
      changeX = dragW == 7;
       let window_sG = 3.0;
         window_sG *= parseFloat(`${parseInt(`${window_sG}`)}`);
         window_sG *= parseFloat(`${parseInt(`${window_sG}`) ^ parseInt(`${window_sG}`)}`);
      while (1.71 >= (window_sG * window_sG) && 1.71 >= (window_sG * window_sG)) {
         window_sG -= parseFloat(`${1}`);
         break;
      }
      libjsijniprofilerJ = String.fromCharCode(50,0) == relateds;
       let lineQ: Array<any> = [560, 636, 481];
       let megaphonei = 1.0;
       let eyeopenY: Array<any> = [711, 842];
         megaphonei += lineQ.length;
          let teamu = 2;
          let uimanageru = String.fromCharCode(114,101,119,114,105,116,101,114,95,55,95,51,57,0);
          let cornerh = 0;
         megaphonei += 1;
         teamu -= 1 % (Math.max(1, cornerh));
         uimanageru = `${teamu}`;
         cornerh <<= Math.min(Math.abs(teamu), 4);
      for (let c = 0; c < 3; c++) {
          let cancel6 = 4.0;
         lineQ = [parseInt(`${megaphonei}`) & eyeopenY.length];
         cancel6 += parseFloat(`${1 | parseInt(`${cancel6}`)}`);
      }
         eyeopenY = [parseInt(`${megaphonei}`)];
          let checkboxF = String.fromCharCode(105,110,112,99,98,95,53,95,49,54,0);
          let xadsdkZ = String.fromCharCode(97,112,112,115,102,108,121,101,114,95,101,95,48,0);
          let mergerM = true;
         megaphonei -= checkboxF.length << (Math.min(Math.abs(1), 2));
         checkboxF += `${((mergerM ? 1 : 5))}`;
         xadsdkZ += `${2 - xadsdkZ.length}`;
       let mcopy_rR: Map<any, any> = new Map([[String.fromCharCode(109,95,57,50,95,109,111,110,116,0),174], [String.fromCharCode(105,110,110,100,101,114,95,120,95,55,54,0),549], [String.fromCharCode(115,95,53,53,95,115,105,122,101,98,105,116,114,97,116,101,0),841]]);
       let libreactperfloggerjni0: Map<any, any> = new Map([[String.fromCharCode(120,95,51,54,95,115,116,114,108,0),364], [String.fromCharCode(109,95,50,48,95,115,104,97,112,101,0),574]]);
          let questiconK: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,98,117,114,115,116,0),704], [String.fromCharCode(122,95,53,56,95,97,118,100,99,116,0),201]]);
          let shareT = String.fromCharCode(99,117,114,115,111,114,115,95,112,95,51,55,0);
         mcopy_rR = new Map([[`${mcopy_rR.size}`, lineQ.length >> (Math.min(3, Math.abs(mcopy_rR.size)))]]);
         questiconK = new Map([[`${questiconK.size}`, 2]]);
         shareT += `${questiconK.size << (Math.min(Math.abs(3), 3))}`;
         eyeopenY = [3 << (Math.min(1, Math.abs(parseInt(`${megaphonei}`))))];
       let binddatasJ = 2.0;
      bggradientZ = "1";
      libzeusg += `${relateds.length % (Math.max(libzeusg.length, 5))}`;
   for (let b = 0; b < 3; b++) {
      progress3 = `${navigationD.length}`;
   }
   for (let w = 0; w < 1; w++) {
       let iconscheduleE: Array<any> = [String.fromCharCode(112,101,114,115,105,115,116,101,100,95,107,95,51,53,0), String.fromCharCode(112,95,56,55,95,101,121,101,100,114,111,112,112,101,114,0), String.fromCharCode(104,95,54,51,95,99,115,115,0)];
       let telegramA = String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,95,120,95,54,55,0);
       let assistL = 3;
       let livenodatabgimgC = 2;
      while (telegramA.length >= iconscheduleE.length) {
         iconscheduleE = [iconscheduleE.length];
         break;
      }
       let signinupn = String.fromCharCode(113,95,55,51,95,105,115,112,111,115,97,98,108,101,0);
      let temperatureH = 6175741 >= telegramA.length;
      do {
          let livev = 0;
          let type_02w = false;
          let playU = 2.0;
         telegramA = `${livev | 3}`;
         livev >>= Math.min(Math.abs(((type_02w ? 5 : 1) * parseInt(`${playU}`))), 2);
         type_02w = 96.97 <= playU;
         if (temperatureH) {
            break;
         }
      } while (temperatureH && (3 < (telegramA.length + 5) || (telegramA.length + livenodatabgimgC) < 5));
         telegramA = `${signinupn.length}`;
         telegramA += `${(String.fromCharCode(83,0) == signinupn ? livenodatabgimgC : signinupn.length)}`;
      for (let g = 0; g < 3; g++) {
         assistL /= Math.max(3, 3 >> (Math.min(2, iconscheduleE.length)));
      }
       let whistleorangek = String.fromCharCode(112,108,111,116,116,101,114,95,56,95,51,50,0);
       let predictionbannersharedo = String.fromCharCode(102,95,49,55,0);
      if (whistleorangek.length == signinupn.length) {
          let predictionwink = 4.0;
         signinupn += `${whistleorangek.length << (Math.min(Math.abs(2), 4))}`;
         predictionwink *= parseInt(`${predictionwink}`);
      }
         telegramA = `${signinupn.length}`;
      let hiadn = telegramA.length <= 8723090;
      do {
         telegramA += "2";
         if (hiadn) {
            break;
         }
      } while (hiadn && (telegramA.length > iconscheduleE.length));
          let package_rc = String.fromCharCode(104,111,110,101,121,95,114,95,51,52,0);
          let stringsI = 5.0;
         signinupn += `${signinupn.length ^ 2}`;
         package_rc = `${1 & parseInt(`${stringsI}`)}`;
         stringsI -= parseInt(`${stringsI}`) ^ 3;
         telegramA += `${predictionbannersharedo.length}`;
      navigationD.push(clubj / 2);
   }
   while (!progress3.startsWith(`${changeX}`)) {
      changeX = String.fromCharCode(105,0) == ksade;
      break;
   }
      showBannerInPosition().then();
    }, 100);
  };

  const initBannerAdListener = () => {
       let rulesf = true;
    let cornern = false;
    let configuren = 1;
    let xvodX = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,103,95,57,54,0);
    let mailo = String.fromCharCode(114,95,49,49,95,109,97,103,110,105,116,117,100,101,0);
    let shielddoneH = 2.0;
    let albumG = 3.0;
    let thailandg = 5.0;
    let thailandf = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,95,98,95,54,56,0);
    let assistl = true;
    let kuaishouD = String.fromCharCode(120,95,49,48,95,97,97,117,100,105,111,0);
    let armvao = true;
   if (4.67 == (thailandg + parseFloat(`${xvodX.length}`))) {
      xvodX = "3";
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

       let renewD = String.fromCharCode(107,95,57,52,95,115,99,114,101,101,110,115,104,97,114,101,0);
       let middlee = String.fromCharCode(102,95,48,95,99,108,97,110,103,0);
       let rnewst = 0;
         middlee += `${middlee.length}`;
         middlee += `${rnewst % (Math.max(middlee.length, 4))}`;
         renewD += `${rnewst}`;
      for (let s = 0; s < 2; s++) {
         renewD += `${rnewst % 3}`;
      }
          let defaultlogom = String.fromCharCode(105,95,56,57,95,105,110,102,111,114,109,0);
         rnewst += (renewD == String.fromCharCode(74,0) ? middlee.length : renewD.length);
         defaultlogom = `${defaultlogom.length}`;
      while (1 == (rnewst ^ 5) || (rnewst ^ middlee.length) == 5) {
         rnewst ^= (middlee == String.fromCharCode(69,0) ? middlee.length : rnewst);
         break;
      }
      if (rnewst > 5) {
         middlee = "3";
      }
          let stringsZ = 1.0;
         middlee = `${parseInt(`${stringsZ}`)}`;
      let eventa = 9234035 <= rnewst;
      do {
          let macau9 = 3.0;
          let less2 = 0;
          let refreshi = 3;
          let indicatorm: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,109,97,114,107,101,114,115,0),String.fromCharCode(108,105,110,101,115,95,54,95,54,56,0)], [String.fromCharCode(98,95,55,48,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),String.fromCharCode(119,95,55,95,99,104,101,99,107,112,111,105,110,116,0)]]);
         rnewst <<= Math.min(Math.abs(refreshi / 1), 3);
         macau9 -= parseFloat(`${less2 & parseInt(`${macau9}`)}`);
         less2 *= less2 | 1;
         refreshi ^= 1;
         indicatorm.set(`${less2}`, less2);
         if (eventa) {
            break;
         }
      } while ((renewD.length == 3) && eventa);
      mailo += "2";
      console.log("ATBannerLoaded: " + event.placementId);
    });

      cornern = 78.3 == (thailandg / (Math.max(3, albumG)));

    let latestMsg = "";

   for (let r = 0; r < 3; r++) {
      shielddoneH *= parseFloat(`${xvodX.length}`);
   }
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

   if (!cornern) {
      cornern = (thailandf.length / (Math.max(4, parseInt(`${shielddoneH}`)))) < 99;
   }
      if (latestMsg != event.errorMsg) {

   while (!assistl) {
       let appsq = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,56,95,50,56,0);
       let orientationi = String.fromCharCode(104,95,49,48,48,95,105,110,102,101,114,101,100,0);
      if (orientationi.length == 5) {
         appsq = `${orientationi.length}`;
      }
          let gifgoalbgX = String.fromCharCode(103,101,116,109,97,120,114,115,115,95,55,95,52,54,0);
          let largek: Array<any> = [231, 123, 123];
          let catalogU = String.fromCharCode(109,105,110,109,97,120,95,49,95,57,49,0);
         appsq += `${gifgoalbgX.length << (Math.min(Math.abs(3), 4))}`;
         gifgoalbgX += `${largek.length}`;
         largek = [largek.length];
         catalogU += `${catalogU.length / (Math.max(3, 3))}`;
      for (let d = 0; d < 1; d++) {
         orientationi = "3";
      }
       let libffmpegkitb = String.fromCharCode(105,95,51,55,95,115,117,105,116,97,98,108,101,0);
       let stationu = String.fromCharCode(111,112,116,105,109,97,108,95,49,95,55,57,0);
       let promotionL = String.fromCharCode(118,95,57,95,112,114,105,109,101,0);
       let fastk = String.fromCharCode(113,95,57,54,95,102,101,116,99,104,101,114,0);
       let fastP = 2.0;
       let pointF = 5.0;
      albumG += parseInt(`${shielddoneH}`);
      break;
   }
        latestMsg = event.errorMsg;

   let ballz = rulesf ? !rulesf : rulesf;
   do {
       let predictionactiveE = String.fromCharCode(115,95,53,57,95,115,101,103,105,116,101,114,0);
       let eighteenM = 3;
       let footballD = 5.0;
         eighteenM |= predictionactiveE.length & eighteenM;
      for (let r = 0; r < 1; r++) {
          let downloaderL = String.fromCharCode(117,110,108,111,99,107,95,48,95,49,53,0);
          let logind = String.fromCharCode(97,95,50,52,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
          let bingN: Array<any> = [899, 999];
          let modalR = false;
          let tumbnail8 = true;
         predictionactiveE += `${((tumbnail8 ? 2 : 1) - bingN.length)}`;
         downloaderL += `${(logind == String.fromCharCode(80,0) ? logind.length : (modalR ? 1 : 3))}`;
         bingN = [((modalR ? 2 : 5))];
         tumbnail8 = logind.length >= 39;
      }
      for (let h = 0; h < 3; h++) {
         footballD *= parseFloat(`${parseInt(`${footballD}`) | eighteenM}`);
      }
      if (1 > (predictionactiveE.length % (Math.max(1, 6)))) {
         predictionactiveE += `${parseInt(`${footballD}`)}`;
      }
         eighteenM &= eighteenM >> (Math.min(predictionactiveE.length, 1));
      if ((1 | eighteenM) > 1 || 3 > (predictionactiveE.length | 1)) {
          let sourceT: Array<any> = [27, 505];
          let libswscales = String.fromCharCode(115,98,112,114,111,95,56,95,56,49,0);
          let anythinki = String.fromCharCode(116,101,115,116,105,110,103,95,118,95,50,56,0);
          let entryP = String.fromCharCode(120,95,57,53,95,117,110,115,101,116,0);
          let matchesS: Array<any> = [766, 211, 129];
         predictionactiveE += `${predictionactiveE.length}`;
         sourceT = [sourceT.length % 1];
         libswscales = "3";
         anythinki = `${sourceT.length + anythinki.length}`;
         entryP = "2";
         matchesS = [2];
      }
          let codeH: Array<any> = [702, 918, 195];
          let armvaQ = 1;
          let zoomZ = String.fromCharCode(102,115,101,101,107,95,113,95,51,55,0);
         eighteenM %= Math.max((String.fromCharCode(100,0) == predictionactiveE ? predictionactiveE.length : codeH.length), 3);
         codeH.push((String.fromCharCode(49,0) == zoomZ ? armvaQ : zoomZ.length));
         armvaQ -= 1 % (Math.max(2, armvaQ));
      while (predictionactiveE.endsWith(`${eighteenM}`)) {
          let proxyU = 4.0;
          let albumw = 0;
          let saveM: Array<any> = [312, 935, 343];
         eighteenM %= Math.max(2, eighteenM);
         proxyU -= albumw / 3;
         albumw -= saveM.length << (Math.min(4, Math.abs(parseInt(`${proxyU}`))));
         saveM = [albumw + 2];
         break;
      }
         eighteenM &= 3 & predictionactiveE.length;
      rulesf = 99 == eighteenM && 99 == configuren;
      if (ballz) {
         break;
      }
   } while (ballz && (xvodX.startsWith(`${rulesf}`)));
        console.warn(
          "ATBannerLoadFail: " +
            event.placementId +
            ", errorMsg: " +
            event.errorMsg
        );
      }
    });

      shielddoneH *= (parseFloat(`${(assistl ? 4 : 1) / (Math.max(8, parseInt(`${albumG}`)))}`));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

   for (let o = 0; o < 2; o++) {
       let dependenciesS = 0.0;
       let eactq = String.fromCharCode(105,116,113,117,101,117,101,95,101,95,49,51,0);
       let alert7 = String.fromCharCode(121,95,56,48,95,115,99,97,108,97,98,108,101,0);
       let libavcodec5 = String.fromCharCode(110,111,109,105,110,97,116,101,95,110,95,49,0);
         dependenciesS /= Math.max(5, eactq.length);
      for (let n = 0; n < 3; n++) {
         libavcodec5 += `${libavcodec5.length & 3}`;
      }
       let handler1 = 0.0;
      while (!alert7.startsWith(eactq)) {
         eactq += `${1 / (Math.max(5, parseInt(`${dependenciesS}`)))}`;
         break;
      }
       let sheetd: Array<any> = [String.fromCharCode(120,95,53,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0), String.fromCharCode(109,95,53,51,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0), String.fromCharCode(105,102,97,99,101,95,55,95,56,49,0)];
         handler1 /= Math.max(1, eactq.length << (Math.min(2, alert7.length)));
          let g_playerb = 5.0;
          let stats5 = 1.0;
         sheetd.push(2);
         g_playerb /= Math.max(3, parseFloat(`${3}`));
         stats5 += parseFloat(`${2 / (Math.max(parseInt(`${g_playerb}`), 4))}`);
          let specj: Array<any> = [543, 762];
          let basketbally = String.fromCharCode(97,99,116,97,98,95,118,95,51,51,0);
          let lessh = 5;
         libavcodec5 += `${specj.length % (Math.max(sheetd.length, 6))}`;
         specj = [lessh / (Math.max(basketbally.length, 2))];
         basketbally = `${1 & lessh}`;
      thailandg *= parseFloat(`${1 * parseInt(`${shielddoneH}`)}`);
   }
      

      configuren |= ((assistl ? 3 : 1));
      

      assistl = (xvodX.length >> (Math.min(3, thailandf.length))) < 64;
      

   for (let j = 0; j < 1; j++) {
      assistl = thailandg < 45.44 && assistl;
   }
      

   while (albumG == 2.32) {
      albumG *= (xvodX.length / (Math.max(4, (assistl ? 4 : 2))));
      break;
   }
      

   while ((4.5 * thailandg) <= 1.66 || 1.1 <= (4.5 * albumG)) {
      thailandg += parseFloat(`${mailo.length ^ 1}`);
      break;
   }
      

   while (3 >= (1 << (Math.min(3, Math.abs(configuren))))) {
       let productY: Array<any> = [String.fromCharCode(120,95,56,48,95,100,111,103,115,0), String.fromCharCode(104,95,51,49,95,115,117,112,112,114,101,115,115,111,114,0), String.fromCharCode(120,95,54,51,95,118,111,98,115,117,98,0)];
       let twitterv = true;
       let greytickO = 4.0;
      let disconnectedlogo4 = 6709366.0 >= greytickO;
      do {
         greytickO -= parseFloat(`${1}`);
         if (disconnectedlogo4) {
            break;
         }
      } while ((twitterv) && disconnectedlogo4);
      let iconbellactivez = greytickO <= 9754353.0;
      do {
         greytickO *= parseFloat(`${3 * parseInt(`${greytickO}`)}`);
         if (iconbellactivez) {
            break;
         }
      } while (iconbellactivez && ((greytickO + 3.21) == 1.58));
          let gestureF: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,115,95,114,95,56,57,0),865], [String.fromCharCode(100,105,115,112,97,116,99,104,95,52,95,57,57,0),191]]);
         twitterv = null != gestureF.get(`${twitterv}`);
       let penaltys: Array<any> = [String.fromCharCode(103,95,49,51,95,119,104,105,116,101,115,112,97,99,101,0), String.fromCharCode(120,95,54,57,95,118,109,112,114,105,110,116,102,0), String.fromCharCode(99,102,102,116,105,95,103,95,57,54,0)];
      while (!penaltys.includes(greytickO)) {
         greytickO *= parseFloat(`${3}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
         greytickO -= parseFloat(`${penaltys.length}`);
      }
      while (productY.length > penaltys.length) {
         penaltys = [penaltys.length];
         break;
      }
       let reactnavigationd = 3.0;
       let iconsaveimageB = 5.0;
         productY.push(1);
      cornern = mailo.startsWith(`${assistl}`);
      break;
   }
      console.log("ATBannerShow: " + event.placementId);
    });

      thailandg -= parseFloat(`${parseInt(`${shielddoneH}`)}`);

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

       let clearJ = String.fromCharCode(112,114,105,109,97,114,105,108,121,95,118,95,50,57,0);
       let libjsinspector7 = 0.0;
      for (let n = 0; n < 2; n++) {
          let libjsiU: Map<any, any> = new Map([[String.fromCharCode(114,95,53,57,95,99,97,116,101,103,111,114,121,0),313], [String.fromCharCode(116,97,115,107,95,106,95,52,48,0),656]]);
          let configureU = false;
          let back7 = 0.0;
          let filterg = 5;
          let zhengpian5: Array<any> = [592, 135, 94];
         clearJ = `${filterg / 1}`;
         libjsiU.set(`${configureU}`, 3);
         back7 -= parseFloat(`${libjsiU.size}`);
         filterg &= (zhengpian5.length >> (Math.min(5, Math.abs((configureU ? 1 : 3)))));
         zhengpian5 = [1];
      }
         clearJ += `${clearJ.length}`;
      let untickc = clearJ == String.fromCharCode(118,106,112,55,49,54,107,49,56,107,0);
      do {
          let profileinactivej = String.fromCharCode(116,119,111,115,99,97,108,101,95,115,95,49,57,0);
          let castD = false;
         clearJ = `${((castD ? 4 : 1) * parseInt(`${libjsinspector7}`))}`;
         profileinactivej += `${profileinactivej.length - profileinactivej.length}`;
         castD = profileinactivej.length == profileinactivej.length;
         if (untickc) {
            break;
         }
      } while ((1 == (parseInt(`${libjsinspector7}`) - clearJ.length)) && untickc);
      while (!clearJ.endsWith(`${libjsinspector7}`)) {
         libjsinspector7 -= clearJ.length % 3;
         break;
      }
       let tempG = false;
      while ((libjsinspector7 - clearJ.length) > 3.14) {
         libjsinspector7 += ((tempG ? 4 : 5) >> (Math.min(Math.abs(3), 3)));
         break;
      }
      configuren <<= Math.min(Math.abs(mailo.length - 3), 5);
        console.log(
          "ATBannerCloseButtonTapped: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
        );
      }
    );

   while (!cornern) {
      cornern = 74.44 < albumG;
      break;
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

   let buttonL = 9759534.0 >= shielddoneH;
   do {
      shielddoneH += (parseFloat(`${3 ^ (rulesf ? 3 : 5)}`));
      if (buttonL) {
         break;
      }
   } while (buttonL && (5.95 < shielddoneH));
      console.log(
        "ATBannerClick: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });

       let backD = 4;
       let iconwatchnowc = String.fromCharCode(120,95,49,56,95,101,103,119,105,116,0);
       let foregroundR = false;
      while (iconwatchnowc.startsWith(`${backD}`)) {
         iconwatchnowc += `${(String.fromCharCode(112,0) == iconwatchnowc ? iconwatchnowc.length : (foregroundR ? 3 : 1))}`;
         break;
      }
      if (foregroundR && 4 < iconwatchnowc.length) {
         iconwatchnowc += `${backD}`;
      }
         iconwatchnowc = `${(backD | (foregroundR ? 1 : 4))}`;
      while (3 >= (4 / (Math.max(5, backD))) && 3 >= (4 / (Math.max(7, iconwatchnowc.length)))) {
         iconwatchnowc = `${(iconwatchnowc == String.fromCharCode(110,0) ? iconwatchnowc.length : (foregroundR ? 3 : 1))}`;
         break;
      }
      if (!foregroundR && iconwatchnowc.length < 2) {
         iconwatchnowc += `${backD - 1}`;
      }
         foregroundR = !foregroundR;
         backD /= Math.max(backD, 4);
      while (!foregroundR) {
         foregroundR = iconwatchnowc.length == 88 || !foregroundR;
         break;
      }
      for (let i = 0; i < 1; i++) {
          let championn: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,95,115,95,51,52,0),true ], [String.fromCharCode(98,95,56,57,95,106,100,109,97,115,116,101,114,0),true ], [String.fromCharCode(119,95,50,53,95,111,117,116,108,105,110,107,0),false ]]);
          let iconshare6 = 2;
         backD >>= Math.min(Math.abs(2 * championn.size), 4);
         championn.set(`${iconshare6}`, iconshare6);
      }
      mailo += `${iconwatchnowc.length}`;

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

      rulesf = xvodX.length < 97;
      

       let mbnative3 = String.fromCharCode(102,97,115,116,95,52,95,54,49,0);
      let bell3 = mbnative3.length >= 5586475;
      do {
         mbnative3 = `${mbnative3.length}`;
         if (bell3) {
            break;
         }
      } while (bell3 && (mbnative3 == String.fromCharCode(109,0)));
         mbnative3 = "3";
       let qaagZ = String.fromCharCode(103,95,51,49,95,103,114,101,101,110,0);
      cornern = mbnative3 == xvodX;
      

   let humidityq = mailo.length <= 5094061;
   do {
      mailo += `${mailo.length % 2}`;
      if (humidityq) {
         break;
      }
   } while (humidityq && (mailo.length > 2 && xvodX == String.fromCharCode(118,0)));
      

       let iconmoreX = false;
       let hejie = 2.0;
      let latnK = hejie <= 6163836.0;
      do {
         hejie -= (parseFloat(`${(iconmoreX ? 1 : 1) / (Math.max(parseInt(`${hejie}`), 9))}`));
         if (latnK) {
            break;
         }
      } while (((hejie / 3.53) <= 4.98) && latnK);
      if (5.47 < (5.54 / (Math.max(1, hejie))) && !iconmoreX) {
         hejie *= parseFloat(`${1 + parseInt(`${hejie}`)}`);
      }
         hejie /= Math.max(parseFloat(`${3 % (Math.max(6, parseInt(`${hejie}`)))}`), 4);
          let traminiY: Array<any> = [String.fromCharCode(114,101,101,108,95,121,95,51,49,0), String.fromCharCode(120,95,51,56,95,118,105,115,105,116,111,114,0)];
          let catagoryP = String.fromCharCode(118,95,53,95,105,115,111,112,101,110,113,117,111,116,101,0);
          let sendy: Map<any, any> = new Map([[String.fromCharCode(104,95,55,51,95,116,101,120,101,108,0),true ], [String.fromCharCode(99,111,108,108,97,112,115,101,100,95,117,95,52,53,0),true ], [String.fromCharCode(119,95,53,56,95,115,121,109,109,101,116,114,105,99,0),false ]]);
         iconmoreX = (sendy.size >> (Math.min(catagoryP.length, 2))) == 4;
         traminiY = [2 / (Math.max(7, traminiY.length))];
         catagoryP = `${traminiY.length * traminiY.length}`;
      if (iconmoreX) {
          let libfbjniE = 0.0;
          let halfG = String.fromCharCode(107,95,56,52,95,111,114,100,101,114,105,110,103,0);
          let cluby = true;
         hejie *= parseFloat(`${3 / (Math.max(6, parseInt(`${hejie}`)))}`);
         libfbjniE += parseFloat(`${halfG.length % 1}`);
         halfG += `${3 * parseInt(`${libfbjniE}`)}`;
         cluby = !cluby || libfbjniE < 47.89;
      }
         iconmoreX = !iconmoreX || hejie <= 30.41;
      thailandg += parseFloat(`${kuaishouD.length << (Math.min(1, xvodX.length))}`);
      

      shielddoneH -= parseFloat(`${2}`);
      

      configuren >>= Math.min(Math.abs((String.fromCharCode(99,0) == kuaishouD ? configuren : kuaishouD.length)), 5);
      

   let sports2 = kuaishouD == String.fromCharCode(100,117,115,99,110,55,55,50,97,0);
   do {
      kuaishouD = `${((rulesf ? 4 : 3))}`;
      if (sports2) {
         break;
      }
   } while (sports2 && (mailo.length >= 5));
      

       let previewN = String.fromCharCode(106,95,54,50,95,115,97,116,100,0);
       let hiadq = 4.0;
         previewN = `${(String.fromCharCode(87,0) == previewN ? previewN.length : parseInt(`${hiadq}`))}`;
      for (let i = 0; i < 2; i++) {
         previewN += `${previewN.length & 1}`;
      }
      for (let v = 0; v < 1; v++) {
         previewN += `${parseInt(`${hiadq}`)}`;
      }
         previewN += `${3 - previewN.length}`;
         previewN += "1";
         previewN += "2";
      kuaishouD = `${parseInt(`${hiadq}`) >> (Math.min(3, Math.abs(parseInt(`${shielddoneH}`))))}`;
      

      rulesf = (25 <= (kuaishouD.length + (rulesf ? 25 : kuaishouD.length)));
      console.log("ATBannerRefresh: " + event.placementId);
    });

   let shrink5 = rulesf ? !rulesf : rulesf;
   do {
       let mbnativez = String.fromCharCode(101,108,105,115,116,95,100,95,52,50,0);
       let roundN = String.fromCharCode(99,108,97,110,103,95,107,95,50,57,0);
       let codeT: Array<any> = [String.fromCharCode(99,111,108,108,101,99,116,95,103,95,56,56,0), String.fromCharCode(117,95,50,57,95,113,100,114,97,119,0)];
       let iconuserE = 0.0;
       let membership5 = String.fromCharCode(98,115,119,97,112,95,111,95,55,50,0);
         mbnativez = "1";
          let customC = 3;
          let googleF = String.fromCharCode(112,111,108,108,101,114,95,56,95,49,48,48,0);
         codeT = [customC - parseInt(`${iconuserE}`)];
         customC |= googleF.length;
         googleF += `${googleF.length}`;
         codeT.push(2 << (Math.min(5, codeT.length)));
       let iconplayl = 3.0;
          let backiconm = String.fromCharCode(105,110,100,97,116,97,95,107,95,53,49,0);
          let bingR = 0.0;
         codeT.push(roundN.length ^ 1);
         backiconm = `${backiconm.length / (Math.max(1, 7))}`;
         bingR += parseInt(`${bingR}`) % (Math.max(backiconm.length, 4));
      for (let v = 0; v < 1; v++) {
          let areaX: Array<any> = [47, 637];
          let indicatorl: Map<any, any> = new Map([[String.fromCharCode(117,95,55,53,95,99,111,109,109,101,110,116,0),String.fromCharCode(114,101,115,101,101,107,0)], [String.fromCharCode(119,95,49,50,95,97,100,97,112,116,111,114,0),String.fromCharCode(108,111,119,99,111,109,112,95,115,95,50,49,0)], [String.fromCharCode(97,95,48,95,99,108,97,115,115,105,102,121,0),String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,110,95,57,49,0)]]);
          let attributedstringB: Array<any> = [36, 215];
          let encryptm: Map<any, any> = new Map([[String.fromCharCode(112,111,119,116,97,98,108,101,95,122,95,53,53,0),706], [String.fromCharCode(102,95,50,54,95,116,101,109,112,108,97,116,101,0),199]]);
         iconuserE /= Math.max(3, 5);
         areaX.push(indicatorl.size);
         indicatorl = new Map([[`${indicatorl.size}`, indicatorl.size >> (Math.min(areaX.length, 3))]]);
         attributedstringB = [attributedstringB.length >> (Math.min(2, areaX.length))];
         encryptm = new Map([[`${attributedstringB.length}`, 1 ^ attributedstringB.length]]);
      }
          let largebrightnessb = String.fromCharCode(105,95,56,95,114,101,97,99,104,0);
          let bnewsQ = String.fromCharCode(98,108,111,99,107,120,95,48,95,57,48,0);
          let alertD: Array<any> = [26, 606];
         iconplayl -= 1;
         largebrightnessb = `${(String.fromCharCode(70,0) == largebrightnessb ? alertD.length : largebrightnessb.length)}`;
         bnewsQ += "3";
         alertD = [1 << (Math.min(4, largebrightnessb.length))];
         roundN += `${membership5.length << (Math.min(Math.abs(3), 1))}`;
          let darkf: Map<any, any> = new Map([[String.fromCharCode(101,118,114,112,99,95,53,95,54,54,0),680], [String.fromCharCode(104,95,57,95,104,101,97,114,98,101,97,116,0),521]]);
          let megaphone3: Array<any> = [String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,122,95,52,55,0), String.fromCharCode(109,95,55,95,115,112,97,99,101,0), String.fromCharCode(101,110,97,98,108,101,100,95,55,95,57,53,0)];
          let reactnativeultimatelistviewc = true;
         membership5 = `${darkf.size}`;
         darkf.set(`${reactnativeultimatelistviewc}`, (2 ^ (reactnativeultimatelistviewc ? 3 : 1)));
         megaphone3 = [((reactnativeultimatelistviewc ? 5 : 1) % (Math.max(megaphone3.length, 9)))];
         codeT = [parseInt(`${iconplayl}`)];
       let navigationI = String.fromCharCode(106,109,101,109,115,121,115,95,103,95,49,52,0);
      if (roundN != String.fromCharCode(110,0)) {
          let baseO = 3.0;
         navigationI = `${(String.fromCharCode(112,0) == roundN ? parseInt(`${iconplayl}`) : roundN.length)}`;
         baseO -= parseInt(`${baseO}`) / 3;
      }
      while (navigationI.length <= 1) {
         roundN = `${2 >> (Math.min(1, Math.abs(parseInt(`${iconplayl}`))))}`;
         break;
      }
       let emoji8 = String.fromCharCode(100,95,57,48,95,105,110,97,99,116,105,118,101,0);
       let optionsz = String.fromCharCode(115,119,97,112,112,101,100,95,50,95,55,54,0);
      if (!navigationI.endsWith(`${emoji8.length}`)) {
          let eighteen8 = String.fromCharCode(119,95,52,51,95,99,111,100,101,115,116,114,101,97,109,0);
          let iconwatchnowi = 5;
          let shielddoneD: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,101,102,102,101,99,116,0),698], [String.fromCharCode(113,95,54,53,95,97,117,103,109,101,110,116,101,100,0),486], [String.fromCharCode(109,97,108,108,111,99,122,95,122,95,56,48,0),42]]);
          let subtextj: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,95,116,95,52,0),652], [String.fromCharCode(116,95,54,53,95,97,117,116,111,114,101,118,101,114,115,101,100,0),327], [String.fromCharCode(106,95,53,52,95,100,105,114,101,99,116,100,0),341]]);
          let xadsdk4 = 2;
         navigationI = `${roundN.length}`;
         eighteen8 = `${2 ^ shielddoneD.size}`;
         iconwatchnowi |= eighteen8.length;
         shielddoneD.set(`${iconwatchnowi}`, 1);
         subtextj.set(eighteen8, 1 & eighteen8.length);
         xadsdk4 %= Math.max(shielddoneD.size - 1, 4);
      }
      rulesf = 19 > configuren || mbnativez == String.fromCharCode(67,0);
      if (shrink5) {
         break;
      }
   } while (shrink5 && (!rulesf));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

      shielddoneH -= parseFloat(`${mailo.length << (Math.min(Math.abs(2), 2))}`);
      console.log(
        "ATBannerRefreshFail: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let chinasame8 = String.fromCharCode(106,95,51,54,95,115,105,103,104,97,110,100,108,101,114,0);
    let libavutilG = String.fromCharCode(105,95,51,53,95,100,105,115,109,105,115,115,101,115,0);
    let buffer_ = true;
    let pushv = String.fromCharCode(111,112,117,115,101,110,99,95,98,95,54,48,0);
    let homeQ: Map<any, any> = new Map([[String.fromCharCode(112,95,49,55,95,115,112,114,101,97,100,0),true ], [String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,110,95,56,49,0),false ]]);
    let alertj = String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,112,95,57,57,0);
    let mbridgep = String.fromCharCode(116,95,51,53,95,99,97,105,112,0);
    let desc8 = 0.0;
    let blackc: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,101,114,95,52,95,55,55,0),String.fromCharCode(97,95,57,50,95,110,97,109,101,115,112,97,99,101,115,0)], [String.fromCharCode(103,95,55,50,95,114,97,112,112,101,114,0),String.fromCharCode(121,95,57,52,0)]]);
    let a_centerq = 0;
    let iconarrowrightx = 5;
    let t_viewX = 0.0;
   for (let v = 0; v < 2; v++) {
      blackc.set(pushv, (String.fromCharCode(110,0) == pushv ? blackc.size : pushv.length));
   }
   let expandL = mbridgep == String.fromCharCode(120,48,98,118,104,115,0);
   do {
       let libturbomodulejsijniK = String.fromCharCode(117,95,56,52,95,108,111,119,114,101,115,0);
       let skipT = 1.0;
       let penalty3 = String.fromCharCode(111,95,52,48,95,104,111,115,116,110,97,109,101,0);
       let pcopy_s1: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,95,105,100,101,110,116,105,102,105,101,114,0),668], [String.fromCharCode(120,95,52,55,95,98,117,98,98,108,101,0),762]]);
         pcopy_s1 = new Map([[penalty3, 1 & parseInt(`${skipT}`)]]);
      if (penalty3.endsWith(`${skipT}`)) {
          let robotoW = 5.0;
          let castingo = false;
          let zhuboQ = 3.0;
          let yingy = String.fromCharCode(99,97,115,101,100,95,121,95,54,53,0);
          let filed1 = 3.0;
         penalty3 += `${parseInt(`${filed1}`)}`;
         robotoW *= parseFloat(`${parseInt(`${zhuboQ}`) >> (Math.min(1, Math.abs(2)))}`);
         castingo = castingo && yingy.length <= 4;
         zhuboQ -= (parseFloat(`${(castingo ? 1 : 4) - 3}`));
         yingy += `${((castingo ? 5 : 1))}`;
      }
          let windP = String.fromCharCode(109,95,57,53,95,99,97,110,118,97,115,0);
         libturbomodulejsijniK += "1";
         windP = `${windP.length - windP.length}`;
       let gemfile0 = true;
      if (!gemfile0 || (pcopy_s1.size << (Math.min(Math.abs(1), 3))) <= 4) {
          let langkeyH = 2.0;
          let context7 = 2.0;
          let regeng4 = String.fromCharCode(114,95,54,49,95,105,110,116,102,114,0);
         pcopy_s1 = new Map([[penalty3, regeng4.length / (Math.max(5, penalty3.length))]]);
         langkeyH -= parseInt(`${context7}`);
         regeng4 = `${parseInt(`${langkeyH}`)}`;
      }
         skipT /= Math.max(pcopy_s1.size, 1);
         pcopy_s1.set(libturbomodulejsijniK, libturbomodulejsijniK.length);
         skipT /= Math.max(3, (libturbomodulejsijniK == String.fromCharCode(89,0) ? libturbomodulejsijniK.length : (gemfile0 ? 3 : 3)));
      let defaultroombgn = pcopy_s1.size <= 7720368;
      do {
         pcopy_s1 = new Map([[`${gemfile0}`, penalty3.length]]);
         if (defaultroombgn) {
            break;
         }
      } while (defaultroombgn && (1 <= (libturbomodulejsijniK.length + pcopy_s1.size) || 2 <= (1 + pcopy_s1.size)));
      if (4 >= (1 >> (Math.min(1, Math.abs(pcopy_s1.size))))) {
         gemfile0 = 55 <= pcopy_s1.size;
      }
      for (let e = 0; e < 1; e++) {
         gemfile0 = 5 <= libturbomodulejsijniK.length;
      }
      let vignettef = gemfile0 ? !gemfile0 : gemfile0;
      do {
          let bangI = 5.0;
          let knewsp = String.fromCharCode(103,97,116,101,95,105,95,51,52,0);
         gemfile0 = (((!gemfile0 ? pcopy_s1.size : 97) % (Math.max(1, pcopy_s1.size))) == 56);
         bangI -= parseInt(`${bangI}`) ^ knewsp.length;
         knewsp += `${parseInt(`${bangI}`) | knewsp.length}`;
         if (vignettef) {
            break;
         }
      } while ((1 < pcopy_s1.size) && vignettef);
      mbridgep += `${blackc.size}`;
      if (expandL) {
         break;
      }
   } while ((mbridgep.includes(`${desc8}`)) && expandL);

    

       let refreshm = String.fromCharCode(101,98,109,108,110,117,109,95,106,95,55,55,0);
      if (4 == refreshm.length) {
         refreshm = `${refreshm.length / 1}`;
      }
         refreshm = `${refreshm.length}`;
      if (refreshm != String.fromCharCode(116,0)) {
         refreshm += `${refreshm.length + refreshm.length}`;
      }
      libavutilG = `${2 << (Math.min(Math.abs(parseInt(`${desc8}`)), 2))}`;
   for (let r = 0; r < 3; r++) {
       let whistle4 = String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,113,95,56,56,0);
       let textlayoutmanager4 = String.fromCharCode(102,105,110,101,95,112,95,51,55,0);
         whistle4 = `${1 - whistle4.length}`;
      if (whistle4 == textlayoutmanager4) {
         textlayoutmanager4 += `${textlayoutmanager4.length ^ 1}`;
      }
      if (whistle4 == String.fromCharCode(101,0)) {
         textlayoutmanager4 += "2";
      }
      if (textlayoutmanager4.length == 1) {
         whistle4 += `${textlayoutmanager4.length}`;
      }
      while (whistle4.length > 3) {
          let downg: Array<any> = [959, 80, 576];
          let borderlessg: Array<any> = [635, 820];
          let unselected_ = true;
          let viewsB = 1.0;
          let logouserx = String.fromCharCode(119,95,52,53,95,116,114,97,110,115,102,111,114,109,101,114,0);
         whistle4 = `${((unselected_ ? 3 : 2) % 1)}`;
         downg.push(2);
         borderlessg = [borderlessg.length / 2];
         unselected_ = 30.9 >= viewsB;
         viewsB /= Math.max(4, parseFloat(`${2 + borderlessg.length}`));
         logouserx += `${2 + parseInt(`${viewsB}`)}`;
         break;
      }
         textlayoutmanager4 = `${1 >> (Math.min(1, textlayoutmanager4.length))}`;
      homeQ = new Map([[`${blackc.size}`, blackc.size]]);
   }
    const settings = {};

   while (chinasame8.length >= 2 && buffer_) {
      chinasame8 += `${chinasame8.length - 2}`;
      break;
   }
   let pointM = 9419280 >= blackc.size;
   do {
      blackc.set(`${buffer_}`, 1 & homeQ.size);
      if (pointM) {
         break;
      }
   } while (pointM && (blackc.get(`${homeQ.size}`) == null));
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

   if (homeQ.get(`${desc8}`) != null) {
      desc8 *= alertj.length;
   }
      mbridgep += `${1 - mbridgep.length}`;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

   while ((a_centerq & 3) >= 2 && 3 >= (a_centerq & libavutilG.length)) {
      libavutilG = `${(chinasame8 == String.fromCharCode(116,0) ? homeQ.size : chinasame8.length)}`;
      break;
   }
   for (let h = 0; h < 1; h++) {
       let storeR = true;
       let nterstitialH = 5.0;
       let googles = true;
       let arrowy = 2.0;
      let sharedW = storeR ? !storeR : storeR;
      do {
         storeR = 31.93 <= (arrowy + nterstitialH);
         if (sharedW) {
            break;
         }
      } while ((2.20 <= (2.43 * arrowy)) && sharedW);
          let libcxxcomponentsh = 5.0;
         googles = 93.17 == libcxxcomponentsh;
         googles = (googles ? !storeR : !googles);
         nterstitialH /= Math.max((parseFloat(`${(storeR ? 1 : 3) & parseInt(`${nterstitialH}`)}`)), 5);
       let windh = String.fromCharCode(99,95,50,49,95,97,117,116,104,111,114,105,122,101,0);
       let policyJ = String.fromCharCode(101,95,55,55,95,115,116,114,105,107,101,0);
          let middlewarez = String.fromCharCode(110,95,56,56,95,118,97,108,105,100,97,116,101,0);
          let ynewarchdefaultsZ = 5;
         arrowy += (parseFloat(`${String.fromCharCode(113,0) == policyJ ? policyJ.length : ynewarchdefaultsZ}`));
         middlewarez = `${middlewarez.length | middlewarez.length}`;
         ynewarchdefaultsZ &= (String.fromCharCode(67,0) == middlewarez ? middlewarez.length : middlewarez.length);
          let ajaxd = String.fromCharCode(104,105,110,116,95,99,95,57,0);
          let libflipper8 = String.fromCharCode(119,115,118,113,97,95,109,95,48,0);
          let iconbackwhitei = String.fromCharCode(116,95,52,95,109,111,110,111,116,111,110,105,99,0);
         arrowy += parseFloat(`${2 % (Math.max(3, parseInt(`${arrowy}`)))}`);
         ajaxd = "3";
         libflipper8 += `${iconbackwhitei.length + ajaxd.length}`;
         iconbackwhitei = `${ajaxd.length << (Math.min(4, libflipper8.length))}`;
         arrowy *= (parseFloat(`${String.fromCharCode(98,0) == windh ? (googles ? 4 : 1) : windh.length}`));
      let reviewj = googles ? !googles : googles;
      do {
         googles = (windh.length * policyJ.length) > 82;
         if (reviewj) {
            break;
         }
      } while ((googles) && reviewj);
          let libjsi3 = String.fromCharCode(103,95,51,95,100,117,114,105,110,103,0);
          let chart0: Array<any> = [158, 693];
          let revieww = String.fromCharCode(109,95,49,55,95,97,108,114,101,97,100,121,0);
         windh += `${policyJ.length}`;
         libjsi3 += `${(libjsi3 == String.fromCharCode(87,0) ? libjsi3.length : revieww.length)}`;
         chart0 = [revieww.length * chart0.length];
      if (!googles) {
          let mapbufferm = 3;
          let hooki = String.fromCharCode(100,95,54,55,95,104,101,97,100,0);
          let baiduK = false;
         googles = !baiduK;
         mapbufferm &= hooki.length * 3;
         hooki = "1";
      }
      let untickx = policyJ == String.fromCharCode(55,106,120,115,48,110,113,0);
      do {
         policyJ = `${windh.length}`;
         if (untickx) {
            break;
         }
      } while ((policyJ.includes(`${windh.length}`)) && untickx);
      desc8 /= Math.max(4, 1);
   }
      

   if (5 < alertj.length) {
      buffer_ = alertj.endsWith(`${buffer_}`);
   }
      desc8 += (String.fromCharCode(109,0) == pushv ? pushv.length : blackc.size);
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

   for (let v = 0; v < 1; v++) {
      desc8 -= 1 ^ pushv.length;
   }
   if (2 == (chinasame8.length * 4) || 2 == (4 * blackc.size)) {
       let regengB = 0.0;
       let configM = String.fromCharCode(104,101,97,100,95,53,95,50,56,0);
       let turndownK = String.fromCharCode(121,95,52,52,95,97,118,117,116,105,108,114,101,115,0);
      while (configM.endsWith(`${regengB}`)) {
          let modalv = 4.0;
          let containerG = String.fromCharCode(117,95,57,52,95,97,99,116,111,114,0);
          let splashU = String.fromCharCode(122,95,52,56,95,100,105,115,99,111,114,100,0);
          let trophyA = 5;
         regengB *= 2;
         modalv /= Math.max(2, parseFloat(`${splashU.length}`));
         containerG = `${trophyA}`;
         splashU = `${splashU.length}`;
         trophyA &= 1;
         break;
      }
      if (turndownK != configM) {
         configM += `${parseInt(`${regengB}`)}`;
      }
      while (configM.length >= 1) {
          let renew2 = 2;
          let megaphone4 = String.fromCharCode(115,111,117,114,99,101,95,103,95,51,50,0);
          let awayteamfieldM = String.fromCharCode(106,99,104,117,102,102,95,48,95,56,56,0);
          let greenB: Array<any> = [String.fromCharCode(101,110,99,111,100,97,98,108,101,95,115,95,51,56,0), String.fromCharCode(120,95,49,52,95,97,112,112,101,110,100,105,110,103,0), String.fromCharCode(98,121,116,101,114,117,110,95,106,95,53,48,0)];
         regengB -= turndownK.length;
         renew2 |= greenB.length;
         megaphone4 += `${renew2 % (Math.max(megaphone4.length, 9))}`;
         awayteamfieldM = `${(megaphone4 == String.fromCharCode(88,0) ? renew2 : megaphone4.length)}`;
         greenB = [2];
         break;
      }
       let subsY = String.fromCharCode(105,95,48,95,108,105,103,104,116,101,110,105,110,103,0);
       let libsentryo = String.fromCharCode(112,95,49,54,95,115,116,97,99,104,0);
          let penaltygoalm = String.fromCharCode(105,109,97,103,101,115,95,114,95,56,0);
          let whiteV = true;
          let hongkongp = String.fromCharCode(115,97,108,116,101,100,95,117,95,56,52,0);
         libsentryo += "1";
         penaltygoalm += `${(penaltygoalm.length & (whiteV ? 4 : 5))}`;
         whiteV = (30 < ((whiteV ? 30 : hongkongp.length) << (Math.min(hongkongp.length, 2))));
      if (!subsY.includes(libsentryo)) {
         libsentryo = `${parseInt(`${regengB}`) % (Math.max(turndownK.length, 7))}`;
      }
      while (subsY.includes(libsentryo)) {
         libsentryo += "3";
         break;
      }
      while (turndownK.includes(`${regengB}`)) {
         regengB += 2 - libsentryo.length;
         break;
      }
       let country1: Map<any, any> = new Map([[String.fromCharCode(118,115,116,97,116,115,95,104,95,55,51,0),true ], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,48,95,57,52,0),true ]]);
      blackc = new Map([[pushv, (mbridgep == String.fromCharCode(76,0) ? mbridgep.length : pushv.length)]]);
   }
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

   for (let m = 0; m < 2; m++) {
      desc8 += homeQ.size;
   }
   if ((homeQ.size / 5) >= 5) {
       let dycreatoro: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,99,111,110,118,111,108,117,116,105,111,110,0),false ], [String.fromCharCode(109,95,51,57,95,112,97,114,97,98,111,108,108,105,99,0),false ]]);
       let lightX: Map<any, any> = new Map([[String.fromCharCode(109,118,99,111,110,116,101,120,116,115,95,101,95,54,57,0),69], [String.fromCharCode(109,101,109,111,106,105,95,115,95,48,0),523]]);
       let leftS = String.fromCharCode(97,112,112,101,110,100,95,105,95,51,49,0);
          let areaj = String.fromCharCode(117,116,109,111,115,116,95,111,95,52,55,0);
          let mergerZ = false;
          let imagenetworkerrr = true;
         dycreatoro = new Map([[`${lightX.size}`, ((imagenetworkerrr ? 5 : 4) << (Math.min(Math.abs(lightX.size), 1)))]]);
         areaj += "2";
         mergerZ = (9 <= (areaj.length + (mergerZ ? areaj.length : 9)));
         imagenetworkerrr = !mergerZ && areaj.length < 56;
      for (let g = 0; g < 3; g++) {
         leftS = `${dycreatoro.size}`;
      }
         lightX.set(`${leftS}`, leftS.length);
      if (leftS.endsWith(`${lightX.size}`)) {
         lightX = new Map([[`${dycreatoro.size}`, lightX.size]]);
      }
         dycreatoro.set(`${dycreatoro.size}`, lightX.size * 2);
      if (leftS.length >= lightX.size) {
          let eactW = 5;
          let sharedO = String.fromCharCode(110,97,112,115,104,111,116,95,104,95,53,54,0);
          let s_title8 = String.fromCharCode(118,105,101,119,95,119,95,55,57,0);
          let memberV = 3.0;
         leftS += `${s_title8.length}`;
         eactW |= sharedO.length;
         sharedO += `${(sharedO == String.fromCharCode(106,0) ? eactW : sharedO.length)}`;
         s_title8 = `${parseInt(`${memberV}`) - sharedO.length}`;
         memberV -= eactW >> (Math.min(Math.abs(1), 4));
      }
      let loginsuccessd = leftS == String.fromCharCode(121,98,108,51,103,0);
      do {
          let circley = 2;
          let feedbackm = 0;
         leftS += `${leftS.length << (Math.min(2, Math.abs(circley)))}`;
         circley &= feedbackm;
         if (loginsuccessd) {
            break;
         }
      } while (loginsuccessd && ((1 * leftS.length) < 1));
       let valuesP = 4;
       let g_countD = 0;
      for (let i = 0; i < 2; i++) {
          let dacccfaabfbcbadeebddcabacdffdbG: Array<any> = [729, 373];
         g_countD %= Math.max(dycreatoro.size, 2);
         dacccfaabfbcbadeebddcabacdffdbG.push(3);
      }
      mbridgep = `${(libavutilG == String.fromCharCode(85,0) ? libavutilG.length : (buffer_ ? 1 : 3))}`;
   }
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

      buffer_ = homeQ.size == 71;
      a_centerq += 2;
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

   for (let i = 0; i < 2; i++) {
      pushv += "2";
   }
      homeQ = new Map([[pushv, ((buffer_ ? 3 : 2) % 1)]]);

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

      a_centerq |= blackc.size;
      desc8 -= pushv.length;
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

   let cornerf = 5733308.0 >= t_viewX;
   do {
      t_viewX += parseFloat(`${pushv.length << (Math.min(Math.abs(2), 4))}`);
      if (cornerf) {
         break;
      }
   } while (cornerf && ((3.88 * t_viewX) == 3.27));
   let trophyO = 8794449.0 >= desc8;
   do {
       let hongkongH = 3.0;
         hongkongH *= parseFloat(`${3}`);
          let pausef = true;
          let whistleorangeI: Array<any> = [781, 564, 455];
          let yingJ = false;
         hongkongH -= (parseFloat(`${(pausef ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${hongkongH}`)), 3))}`));
         pausef = yingJ && whistleorangeI.length <= 19;
         whistleorangeI.push((2 ^ (yingJ ? 5 : 4)));
      if (hongkongH > 1.93) {
         hongkongH /= Math.max(parseFloat(`${2}`), 5);
      }
      desc8 *= (String.fromCharCode(122,0) == alertj ? alertj.length : a_centerq);
      if (trophyO) {
         break;
      }
   } while (trophyO && (iconarrowrightx <= 3));
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

   let ajaxS = 8577780 >= libavutilG.length;
   do {
       let i_lockM = String.fromCharCode(115,95,52,57,95,117,110,105,109,112,108,101,109,101,110,116,101,100,0);
       let sport8 = 2.0;
       let pangle9 = false;
       let react3 = 0.0;
         pangle9 = i_lockM.length <= 97;
      for (let v = 0; v < 1; v++) {
          let disconnectedh = 2;
          let blackW = true;
          let mbridgeU = 3;
          let libavformatB = true;
         sport8 /= Math.max((parseFloat(`${(libavformatB ? 3 : 4) % (Math.max(parseInt(`${sport8}`), 4))}`)), 5);
         disconnectedh <<= Math.min(Math.abs(2), 3);
         blackW = !blackW && 43 == mbridgeU;
         mbridgeU |= 1;
         libavformatB = 10 > disconnectedh;
      }
      let libswresampleJ = pangle9 ? !pangle9 : pangle9;
      do {
          let streamingn: Array<any> = [String.fromCharCode(100,95,52,50,95,115,99,101,110,101,99,117,116,0), String.fromCharCode(109,101,115,115,115,97,103,101,95,98,95,50,55,0), String.fromCharCode(117,95,55,48,95,114,101,99,116,97,110,103,117,108,97,114,0)];
          let typingN = String.fromCharCode(114,101,115,101,114,118,101,95,121,95,55,56,0);
          let unreadP = String.fromCharCode(119,95,50,57,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0);
          let iconshareU = 5.0;
         pangle9 = typingN.length <= 5;
         streamingn = [parseInt(`${iconshareU}`)];
         typingN += "2";
         unreadP = `${(unreadP == String.fromCharCode(115,0) ? unreadP.length : streamingn.length)}`;
         iconshareU -= parseFloat(`${unreadP.length ^ streamingn.length}`);
         if (libswresampleJ) {
            break;
         }
      } while (libswresampleJ && (i_lockM.length < 1));
         react3 /= Math.max(parseInt(`${sport8}`), 1);
         i_lockM = "2";
         react3 *= ((pangle9 ? 3 : 1) % (Math.max(8, parseInt(`${sport8}`))));
          let bufferY = 4.0;
         pangle9 = parseInt(`${sport8}`) > i_lockM.length;
         bufferY /= Math.max(parseInt(`${bufferY}`) | parseInt(`${bufferY}`), 5);
         sport8 *= (parseFloat(`${(pangle9 ? 5 : 2) * parseInt(`${react3}`)}`));
      while (5.62 > (react3 * sport8) || (react3 * 5.62) > 2.61) {
          let topic0 = 0;
          let nterstitial7: Array<any> = [961, 209];
         sport8 -= parseFloat(`${parseInt(`${sport8}`) | topic0}`);
         topic0 <<= Math.min(4, Math.abs(1 - nterstitial7.length));
         nterstitial7 = [nterstitial7.length << (Math.min(Math.abs(3), 2))];
         break;
      }
       let yellowvideoliver = String.fromCharCode(109,95,53,57,95,114,111,112,115,116,101,110,0);
          let bgvipxvode = String.fromCharCode(104,95,55,52,95,112,97,114,116,105,116,105,111,110,101,100,0);
          let pageT = String.fromCharCode(106,95,51,95,115,111,117,110,100,0);
         sport8 += parseFloat(`${parseInt(`${sport8}`) >> (Math.min(Math.abs(2), 3))}`);
         bgvipxvode += `${2 >> (Math.min(5, bgvipxvode.length))}`;
         pageT += "3";
          let commentW: Array<any> = [172, 550, 205];
          let stylex = String.fromCharCode(117,95,53,56,95,105,110,105,116,97,108,0);
          let traminic = String.fromCharCode(104,119,97,101,115,95,106,95,54,49,0);
         sport8 -= (parseFloat(`${stylex == String.fromCharCode(77,0) ? yellowvideoliver.length : stylex.length}`));
         commentW = [commentW.length >> (Math.min(Math.abs(2), 3))];
         traminic += `${3 * commentW.length}`;
      libavutilG += `${a_centerq}`;
      if (ajaxS) {
         break;
      }
   } while ((4.91 <= (libavutilG.length / (Math.max(1, desc8)))) && ajaxS);
      iconarrowrightx <<= Math.min(3, parseInt(`${Math.abs(((buffer_ ? 2 : 2) % (Math.max(alertj.length, 7))))}`));
      ATBannerRNSDK.loadAd(IOS_TOPIC_TAB_BANNER_ADS, settings);
    }
  };

  const getBannerPlacementId = (routeName: string | null) => {
    if (
      routeName == "播放" ||
      routeName == "电视台播放"
      
    ) {
      
      if (Platform.OS === "android") {
        return ANDROID_PLAY_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_PLAY_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "PlaylistDetail") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "Home" || routeName == "首页") {
      
      if (Platform.OS === "android") {
        return ANDROID_HOME_PAGE_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_HOME_PAGE_BANNER_ADS;
      }
    }
    
    else if (routeName == "播单" || routeName == "体育") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_TAB_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_TAB_BANNER_ADS;
      }
    } else if (
      routeName === null ||
      (!pageWithNavbar.includes(routeName) && !pageNoNavbar.includes(routeName))
    ) {
      
      
      return null;
    }
  };

  const hideAllBanner = () => {
       let exampleimageo = 0.0;
    let proxyU = String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,95,114,95,53,49,0);
    let fullb = String.fromCharCode(113,95,52,52,95,99,114,101,100,101,110,116,105,97,108,0);
    let connectionM: Array<any> = [239, 346];
    let nativeex7 = String.fromCharCode(97,110,105,109,97,116,101,95,122,95,51,0);
    let lang6 = false;
    let iconplayU = 4.0;
    let disconnectedlogoi = String.fromCharCode(118,95,51,48,95,103,114,97,98,98,101,114,0);
    let fillk = 0;
    let baiduC = true;
   let eighteenX = iconplayU >= 6949220.0;
   do {
      iconplayU /= Math.max(connectionM.length - 1, 5);
      if (eighteenX) {
         break;
      }
   } while (eighteenX && ((fullb.length | 1) <= 2 || 2 <= (1 + parseInt(`${iconplayU}`))));
      proxyU = `${(disconnectedlogoi == String.fromCharCode(121,0) ? disconnectedlogoi.length : fullb.length)}`;

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

      iconplayU *= parseInt(`${exampleimageo}`) | fullb.length;
   if (1 == nativeex7.length && lang6) {
       let loginsuccessj: Array<any> = [String.fromCharCode(100,105,115,116,105,110,99,116,95,54,95,49,57,0), String.fromCharCode(114,101,115,101,114,118,101,100,95,122,95,54,57,0)];
       let clubq = true;
       let reactnativejsT = 5;
       let arrowupx = true;
       let tick8 = String.fromCharCode(98,110,99,98,98,95,112,95,56,51,0);
       let edity = String.fromCharCode(98,95,57,95,109,97,108,108,111,99,122,0);
      if (!clubq || 3 < edity.length) {
         clubq = !clubq && loginsuccessj.length == 96;
      }
         reactnativejsT %= Math.max(2, reactnativejsT - edity.length);
         loginsuccessj = [reactnativejsT / 2];
      if (3 >= (reactnativejsT % (Math.max(1, 8)))) {
          let downloadingB = String.fromCharCode(119,95,54,52,95,109,111,118,101,0);
          let typingt: Array<any> = [String.fromCharCode(109,95,54,52,95,98,101,110,101,102,105,99,105,97,114,121,0), String.fromCharCode(116,95,51,55,95,112,114,101,118,105,111,117,115,0)];
          let qaagC: Array<any> = [838, 461];
         reactnativejsT /= Math.max(1, reactnativejsT * 2);
         downloadingB = `${typingt.length % 1}`;
         typingt = [typingt.length];
         qaagC.push(qaagC.length);
      }
         clubq = tick8 == String.fromCharCode(115,0);
         reactnativejsT -= ((clubq ? 5 : 1) & 1);
          let logoR = 1.0;
          let twittery = String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,49,95,51,0);
          let commentX: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,105,110,112,117,116,116,101,109,0),675], [String.fromCharCode(105,95,50,54,95,98,117,102,115,112,97,99,101,0),567]]);
         clubq = commentX.size == 20 && !clubq;
         logoR *= twittery.length;
         twittery = `${(twittery == String.fromCharCode(118,0) ? parseInt(`${logoR}`) : twittery.length)}`;
         commentX.set(twittery, twittery.length - parseInt(`${logoR}`));
       let tooltipsv = String.fromCharCode(113,109,105,110,109,97,120,95,115,95,52,49,0);
       let searchbard = String.fromCharCode(103,95,52,49,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
      let vignetteT = tick8.length <= 9794154;
      do {
         tick8 = `${1 | edity.length}`;
         if (vignetteT) {
            break;
         }
      } while (vignetteT && (!clubq && 1 >= tick8.length));
         tooltipsv += `${((clubq ? 2 : 2) << (Math.min(loginsuccessj.length, 1)))}`;
         loginsuccessj.push(loginsuccessj.length ^ searchbard.length);
      nativeex7 = `${connectionM.length ^ 1}`;
   }
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

       let roomP = String.fromCharCode(122,95,57,50,95,114,101,115,117,108,116,115,0);
       let defaultplayerimgn = 5.0;
       let favicon3 = String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,110,95,57,53,0);
      if ((defaultplayerimgn * favicon3.length) > 5.19 && 4 > (3 + favicon3.length)) {
         defaultplayerimgn += roomP.length;
      }
          let roomC: Array<any> = [994, 784];
          let tickA = String.fromCharCode(100,95,49,55,95,102,114,101,101,100,111,109,0);
          let watchJ = String.fromCharCode(117,118,114,100,95,101,95,50,51,0);
         favicon3 = `${tickA.length}`;
         roomC.push(roomC.length);
         tickA = `${(watchJ == String.fromCharCode(117,0) ? watchJ.length : roomC.length)}`;
         roomP += `${1 << (Math.min(5, Math.abs(parseInt(`${defaultplayerimgn}`))))}`;
       let iconplayG = 5;
      let project7 = 5293168.0 <= defaultplayerimgn;
      do {
         defaultplayerimgn *= parseInt(`${defaultplayerimgn}`) >> (Math.min(favicon3.length, 5));
         if (project7) {
            break;
         }
      } while (project7 && ((parseInt(`${defaultplayerimgn}`) - roomP.length) > 2 && (parseInt(`${defaultplayerimgn}`) - 2) > 5));
         roomP += `${(favicon3 == String.fromCharCode(54,0) ? favicon3.length : parseInt(`${defaultplayerimgn}`))}`;
          let tempv = false;
         iconplayG <<= Math.min(Math.abs(3), 5);
         tempv = !tempv;
      if (iconplayG == defaultplayerimgn) {
         iconplayG |= favicon3.length;
      }
      while (2.0 <= (defaultplayerimgn / (Math.max(8, favicon3.length)))) {
          let long_ulP = String.fromCharCode(99,108,97,105,109,115,95,102,95,51,49,0);
          let libswscaleb = String.fromCharCode(103,95,49,48,48,95,116,105,108,101,0);
          let controlr = 1;
          let custom7 = false;
         favicon3 = `${(roomP == String.fromCharCode(75,0) ? favicon3.length : roomP.length)}`;
         long_ulP = `${libswscaleb.length - 2}`;
         libswscaleb += "1";
         controlr *= (String.fromCharCode(88,0) == long_ulP ? controlr : long_ulP.length);
         custom7 = String.fromCharCode(86,0) == libswscaleb;
         break;
      }
      nativeex7 += `${fullb.length}`;
       let singleb: Array<any> = [731, 437];
       let liblogger8 = String.fromCharCode(106,95,51,54,95,111,98,106,101,99,116,0);
         singleb = [1 / (Math.max(4, singleb.length))];
         liblogger8 = `${singleb.length}`;
      if ((singleb.length % (Math.max(liblogger8.length, 10))) <= 3) {
          let iconarrowrightl = false;
          let volumeY = String.fromCharCode(104,95,53,51,95,112,111,119,101,114,102,117,108,0);
          let twitteri: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,101,114,115,95,119,95,54,51,0),String.fromCharCode(117,95,54,57,95,110,111,110,98,108,111,99,107,0)], [String.fromCharCode(97,112,109,116,101,115,116,95,119,95,55,52,0),String.fromCharCode(111,95,57,53,95,101,115,99,97,112,105,110,103,0)]]);
         liblogger8 = `${(String.fromCharCode(55,0) == liblogger8 ? liblogger8.length : singleb.length)}`;
         iconarrowrightl = String.fromCharCode(79,0) == volumeY;
         volumeY = `${twitteri.size | volumeY.length}`;
         twitteri = new Map([[`${twitteri.size}`, 1]]);
      }
         singleb.push(singleb.length);
         singleb = [(liblogger8 == String.fromCharCode(85,0) ? liblogger8.length : singleb.length)];
      let giftN = String.fromCharCode(105,97,108,0) == liblogger8;
      do {
         liblogger8 += "1";
         if (giftN) {
            break;
         }
      } while (((singleb.length | 5) >= 2 && 5 >= (liblogger8.length | singleb.length)) && giftN);
      proxyU += `${fillk}`;

    if (Platform.OS === "ios") {

   while (3 == nativeex7.length) {
       let ainit_9ym = false;
      while (ainit_9ym || !ainit_9ym) {
         ainit_9ym = !ainit_9ym;
         break;
      }
          let layoutU = false;
         ainit_9ym = !layoutU;
         ainit_9ym = !ainit_9ym;
      nativeex7 += "1";
      break;
   }
   for (let k = 0; k < 1; k++) {
       let roboto7 = String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,95,48,95,50,49,0);
       let middlebrightnessv: Map<any, any> = new Map([[String.fromCharCode(103,95,57,95,99,108,111,115,101,0),467], [String.fromCharCode(104,108,115,101,110,99,95,113,95,50,56,0),945], [String.fromCharCode(115,99,104,101,109,97,95,121,95,55,0),529]]);
       let nativeexp = String.fromCharCode(108,105,110,117,120,95,49,95,50,54,0);
       let libpangleflipped2 = String.fromCharCode(114,95,56,95,105,115,116,114,101,97,109,0);
      while (!roboto7.includes(`${middlebrightnessv.size}`)) {
          let minivodi = String.fromCharCode(112,101,114,115,111,110,97,108,95,113,95,54,51,0);
          let expand9 = String.fromCharCode(108,105,115,116,101,110,101,114,95,121,95,56,57,0);
          let pathz = String.fromCharCode(115,121,115,116,101,109,95,113,95,54,49,0);
          let foregroundj = String.fromCharCode(100,105,100,95,111,95,55,52,0);
         middlebrightnessv.set(libpangleflipped2, pathz.length);
         minivodi = `${foregroundj.length | expand9.length}`;
         expand9 += `${1 * foregroundj.length}`;
         pathz += `${minivodi.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
         middlebrightnessv = new Map([[`${middlebrightnessv.size}`, roboto7.length + 2]]);
      let gesturesK = middlebrightnessv.size <= 6454029;
      do {
          let vignetteR = 1;
         middlebrightnessv.set(`${vignetteR}`, 2 - roboto7.length);
         if (gesturesK) {
            break;
         }
      } while ((nativeexp.startsWith(`${middlebrightnessv.size}`)) && gesturesK);
      let baiduw = 7322239 <= libpangleflipped2.length;
      do {
         libpangleflipped2 = `${1 - libpangleflipped2.length}`;
         if (baiduw) {
            break;
         }
      } while ((libpangleflipped2.length > 3) && baiduw);
         middlebrightnessv.set(libpangleflipped2, (libpangleflipped2 == String.fromCharCode(71,0) ? libpangleflipped2.length : middlebrightnessv.size));
      if (roboto7 == String.fromCharCode(79,0)) {
         nativeexp += `${roboto7.length & 3}`;
      }
      if (nativeexp.length < libpangleflipped2.length) {
         libpangleflipped2 = `${nativeexp.length % 1}`;
      }
      for (let h = 0; h < 2; h++) {
         middlebrightnessv.set(roboto7, 3);
      }
       let traminiP: Array<any> = [433, 908, 436];
       let sendf = String.fromCharCode(99,111,100,105,110,103,95,99,95,51,52,0);
         traminiP = [roboto7.length * 1];
         middlebrightnessv.set(roboto7, libpangleflipped2.length & roboto7.length);
      connectionM = [fillk << (Math.min(Math.abs(1), 1))];
   }
      iosIds.forEach((element) => {

      fullb = `${(proxyU == String.fromCharCode(73,0) ? connectionM.length : proxyU.length)}`;
      disconnectedlogoi = `${parseInt(`${iconplayU}`) + proxyU.length}`;
        ATBannerRNSDK.hideAd(element);
      });
    } else {

   if ((1.7 + exampleimageo) > 1.47 && (parseInt(`${exampleimageo}`) + 2) > 1) {
       let bdxadsdkz = 3.0;
       let settingsK = 0;
       let unimplementedviewz = 2;
      while (unimplementedviewz <= settingsK) {
         unimplementedviewz ^= 1 - settingsK;
         break;
      }
          let type_5w = false;
          let calendarC = String.fromCharCode(110,95,56,95,99,97,115,101,100,0);
          let heartB: Array<any> = [745, 244, 367];
         unimplementedviewz <<= Math.min(Math.abs(settingsK << (Math.min(Math.abs(parseInt(`${bdxadsdkz}`)), 5))), 5);
         type_5w = (100 == ((type_5w ? 100 : calendarC.length) << (Math.min(calendarC.length, 5))));
         heartB.push(heartB.length | calendarC.length);
      let greyarrowupb = settingsK >= 5728458;
      do {
         settingsK &= unimplementedviewz;
         if (greyarrowupb) {
            break;
         }
      } while (greyarrowupb && (settingsK <= bdxadsdkz));
      if (2 < (settingsK >> (Math.min(4, Math.abs(unimplementedviewz)))) || 5 < (unimplementedviewz >> (Math.min(Math.abs(2), 4)))) {
         settingsK *= unimplementedviewz;
      }
      let securityt = 6841510.0 >= bdxadsdkz;
      do {
         bdxadsdkz += parseFloat(`${2 - settingsK}`);
         if (securityt) {
            break;
         }
      } while ((unimplementedviewz < 3) && securityt);
      for (let i = 0; i < 2; i++) {
          let binddatasL = String.fromCharCode(116,95,52,56,95,101,120,105,115,116,101,100,0);
          let bggradientL = String.fromCharCode(122,95,57,49,95,116,100,108,115,0);
          let e_unlockh = 4.0;
         settingsK += 1;
         binddatasL += `${bggradientL.length ^ 3}`;
         bggradientL = `${binddatasL.length}`;
         e_unlockh *= bggradientL.length;
      }
      for (let p = 0; p < 2; p++) {
         settingsK += unimplementedviewz;
      }
          let filter3 = 1.0;
          let templateprocessorC = 0.0;
         settingsK %= Math.max(parseInt(`${bdxadsdkz}`) - unimplementedviewz, 2);
         filter3 += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${filter3}`)), 4))}`);
         templateprocessorC /= Math.max(1, parseInt(`${filter3}`));
      for (let o = 0; o < 2; o++) {
          let reactnativeratings6 = String.fromCharCode(115,101,110,100,95,110,95,51,52,0);
          let templateprocessori = 2.0;
          let statisticsB: Map<any, any> = new Map([[String.fromCharCode(98,95,50,55,95,99,97,108,105,110,103,0),440], [String.fromCharCode(112,95,49,57,95,109,97,110,97,103,101,114,0),80], [String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,48,95,49,48,0),727]]);
         unimplementedviewz *= statisticsB.size;
         reactnativeratings6 += `${1 + parseInt(`${templateprocessori}`)}`;
         templateprocessori /= Math.max(reactnativeratings6.length % (Math.max(2, 5)), 5);
         statisticsB = new Map([[reactnativeratings6, (String.fromCharCode(89,0) == reactnativeratings6 ? parseInt(`${templateprocessori}`) : reactnativeratings6.length)]]);
      }
      nativeex7 += `${(fullb == String.fromCharCode(69,0) ? fullb.length : settingsK)}`;
   }
      iconplayU *= parseInt(`${exampleimageo}`) / (Math.max(5, parseInt(`${iconplayU}`)));
      androidIds.forEach((element) => {

   if ((disconnectedlogoi.length / 2) < 2 || 2.47 < (iconplayU / (Math.max(2, disconnectedlogoi.length)))) {
       let splashH: Array<any> = [416, 768, 585];
       let giftbutton3 = 1.0;
       let largebrightnessE: Array<any> = [870, 109, 78];
          let guidea = true;
          let short_89T: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,95,109,95,57,56,0),String.fromCharCode(108,95,57,53,95,97,100,97,112,116,101,114,0)], [String.fromCharCode(107,95,50,51,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0),String.fromCharCode(100,95,56,50,95,115,113,108,108,111,103,0)]]);
          let unimplementedviewG = String.fromCharCode(102,95,54,49,95,99,111,110,115,116,114,97,105,110,116,115,0);
         giftbutton3 -= parseFloat(`${2 >> (Math.min(4, unimplementedviewG.length))}`);
         guidea = short_89T.size > 75 || !guidea;
         short_89T = new Map([[`${short_89T.size}`, 3]]);
         unimplementedviewG = `${(short_89T.size * (guidea ? 1 : 3))}`;
         splashH = [1 << (Math.min(Math.abs(parseInt(`${giftbutton3}`)), 4))];
         splashH = [2];
      for (let x = 0; x < 2; x++) {
         giftbutton3 *= parseFloat(`${2}`);
      }
         giftbutton3 += parseFloat(`${splashH.length / 3}`);
      while (4 < (largebrightnessE.length + splashH.length) || (largebrightnessE.length + 4) < 5) {
          let whiteanimationliveq = false;
          let math9 = true;
          let contextU = 3;
          let whistlee = String.fromCharCode(115,109,105,108,95,52,95,53,53,0);
         largebrightnessE = [splashH.length & contextU];
         whiteanimationliveq = !math9;
         contextU += (whistlee == String.fromCharCode(76,0) ? (whiteanimationliveq ? 2 : 3) : whistlee.length);
         break;
      }
      for (let m = 0; m < 3; m++) {
         largebrightnessE = [1];
      }
      for (let q = 0; q < 1; q++) {
         largebrightnessE.push(1 << (Math.min(1, largebrightnessE.length)));
      }
       let yingG = 2.0;
       let iconnointernetB = 3.0;
      iconplayU /= Math.max(5, (String.fromCharCode(113,0) == proxyU ? fullb.length : proxyU.length));
   }
       let weiboD = 2;
       let malaysia4 = false;
       let valuesX = String.fromCharCode(108,97,121,111,121,116,95,114,95,51,53,0);
      let basketballp = weiboD <= 8130613;
      do {
          let iconbellactiveG = String.fromCharCode(106,95,49,49,95,116,104,114,101,97,100,110,97,109,101,0);
          let logoX = 5.0;
          let proxyL = 0.0;
         weiboD >>= Math.min(Math.abs(1), 2);
         iconbellactiveG = "1";
         logoX += parseInt(`${logoX}`);
         proxyL *= parseFloat(`${3 ^ parseInt(`${logoX}`)}`);
         if (basketballp) {
            break;
         }
      } while (basketballp && (weiboD == 2));
      for (let a = 0; a < 3; a++) {
         valuesX = `${valuesX.length | 1}`;
      }
      let anytimeM = 8365443 >= valuesX.length;
      do {
         valuesX = `${((malaysia4 ? 3 : 5) | weiboD)}`;
         if (anytimeM) {
            break;
         }
      } while ((5 == (valuesX.length & 5) || (valuesX.length & weiboD) == 5) && anytimeM);
      for (let l = 0; l < 1; l++) {
         weiboD >>= Math.min(4, Math.abs(weiboD << (Math.min(3, Math.abs(3)))));
      }
       let progressy = String.fromCharCode(105,95,49,50,95,117,110,98,111,110,100,101,100,0);
         valuesX = "1";
         weiboD >>= Math.min(Math.abs(2 % (Math.max(3, weiboD))), 1);
      for (let v = 0; v < 3; v++) {
         malaysia4 = malaysia4 && valuesX.length < 40;
      }
      for (let w = 0; w < 1; w++) {
         progressy = `${weiboD - 1}`;
      }
      exampleimageo -= valuesX.length & connectionM.length;
        ATBannerRNSDK.hideAd(element);
      });
    }
  };

  const showBanner = (
    routeName: string | null,
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    
    hideAllBanner();
    if (screenState.isHomeGuideShown != true) {
      return;
    }
    const bannerId = getBannerPlacementId(routeName);

    if (!routeName) return;
    
    
    
    
    
    if (bannerId == null) {
      setTimeout(() => {
        hideAllBanner();
      }, 50);
      return;
    }
    const settings = {};
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady) => {
        
        
        if (!isAdReady) {
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            if (screenState.isPlayerFullScreen) {
              return;
            }
            
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 50);
        } else {
          setTimeout(() => {
            if (screenState.isPlayerFullScreen) {
              return;
            }
            

            
            

            
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 10);
        }
      });
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady: boolean) => {
        
        
        if (isAdReady == false) {
          
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );
            ATBannerRNSDK.reShowAd(bannerId);
          }, 500);
        } else {
          
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 200);
        }
      });
    }
  };
  

  const showBannerInPosition = async () => {
       let iconfeedbacky = 5.0;
    let playx = 0;
    let gesturesf: Map<any, any> = new Map([[String.fromCharCode(108,115,119,115,117,116,105,108,115,95,120,95,51,56,0),String.fromCharCode(97,109,112,108,105,102,121,95,102,95,55,51,0)], [String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,48,95,55,55,0),String.fromCharCode(97,95,50,53,95,99,97,114,100,105,110,97,108,105,116,121,0)]]);
    let libfolly4 = String.fromCharCode(100,114,111,112,95,51,95,50,53,0);
    let emptyi = 0.0;
    let iconnewssharex: Array<any> = [441, 594, 137];
    let videojsZ = String.fromCharCode(111,95,56,49,95,105,110,99,114,101,109,101,110,116,0);
    let launcherV = String.fromCharCode(117,95,49,54,95,117,110,117,115,101,100,0);
    let configurem = String.fromCharCode(115,105,103,110,97,108,95,105,95,51,57,0);
    let backiconl = true;
    let ajaxm = 1;
    let backward5 = 3.0;
    let button5 = 3;
    let incidentv = String.fromCharCode(97,95,49,54,95,117,110,99,108,97,109,112,101,100,0);
   while (!videojsZ.endsWith(`${emptyi}`)) {
       let spect = 5.0;
       let score5 = 3;
      while (5 >= (2 ^ score5) || (spect / 5.29) >= 4.36) {
         score5 /= Math.max(1, 3 - score5);
         break;
      }
       let iconsharew = 3.0;
      let foundf = 9355605.0 <= spect;
      do {
         spect /= Math.max(4, parseFloat(`${score5 << (Math.min(1, Math.abs(3)))}`));
         if (foundf) {
            break;
         }
      } while ((iconsharew == spect) && foundf);
      if (4 < (score5 / 1) && 4 < (1 ^ score5)) {
         score5 &= score5 / 1;
      }
      for (let n = 0; n < 1; n++) {
         score5 *= parseInt(`${iconsharew}`) % 1;
      }
      while ((score5 * 2) == 5) {
         score5 -= 1 % (Math.max(2, score5));
         break;
      }
      videojsZ += `${launcherV.length}`;
      break;
   }

    if (!route) return;

       let shirtI = String.fromCharCode(100,95,52,50,95,110,97,109,101,115,112,97,99,101,0);
       let m_managerm = 5;
       let iconmoreP: Array<any> = [508, 58, 204];
         iconmoreP = [shirtI.length];
      while ((m_managerm - 2) <= 5) {
          let roundP = String.fromCharCode(108,95,56,51,95,116,117,114,110,0);
          let bellJ = 2.0;
          let chartE = 2.0;
         iconmoreP.push(shirtI.length);
         roundP = `${2 - roundP.length}`;
         bellJ -= (roundP == String.fromCharCode(89,0) ? parseInt(`${bellJ}`) : roundP.length);
         chartE += parseFloat(`${roundP.length}`);
         break;
      }
         shirtI = `${iconmoreP.length}`;
         iconmoreP.push(1);
      if ((m_managerm % (Math.max(10, shirtI.length))) > 1 || 1 > (m_managerm % 1)) {
         m_managerm -= m_managerm | 1;
      }
      let mbnativeadvancedl = shirtI.length <= 7372587;
      do {
         shirtI += `${shirtI.length / 2}`;
         if (mbnativeadvancedl) {
            break;
         }
      } while (mbnativeadvancedl && ((shirtI.length >> (Math.min(1, iconmoreP.length))) > 5 && (iconmoreP.length >> (Math.min(Math.abs(5), 2))) > 1));
         iconmoreP.push(m_managerm * 3);
      if (!shirtI.startsWith(`${m_managerm}`)) {
         shirtI += `${1 + iconmoreP.length}`;
      }
          let changeS = 0.0;
         m_managerm *= shirtI.length;
         changeS -= parseFloat(`${parseInt(`${changeS}`)}`);
      iconnewssharex.push((shirtI == String.fromCharCode(109,0) ? shirtI.length : (backiconl ? 5 : 4)));
    if (Platform.OS === "android") {

       let upgradeb = 2.0;
       let photoA = false;
       let membership1 = false;
      while (upgradeb > 4.84 || (4.84 / (Math.max(9, upgradeb))) > 1.40) {
          let hejiL = 0.0;
          let floaterx: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,95,55,95,54,51,0),695], [String.fromCharCode(117,95,51,53,95,115,114,116,112,0),262]]);
         upgradeb -= parseFloat(`${parseInt(`${hejiL}`)}`);
         hejiL -= parseFloat(`${3}`);
         floaterx = new Map([[`${floaterx.size}`, 1 + floaterx.size]]);
         break;
      }
      for (let m = 0; m < 2; m++) {
         photoA = photoA && 100.9 == upgradeb;
      }
      iconfeedbacky /= Math.max(3, 1);
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

      videojsZ += `${2 / (Math.max(6, configurem.length))}`;
      

      iconfeedbacky += parseInt(`${emptyi}`) | 1;
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

   let bottomT = 6247243.0 <= iconfeedbacky;
   do {
      iconfeedbacky -= 1;
      if (bottomT) {
         break;
      }
   } while (bottomT && (backiconl));
      

   if ((2 + videojsZ.length) < 5) {
       let middlef = 3;
       let unimplementedviewV = 2;
       let iconnewsshare2 = String.fromCharCode(108,95,56,56,95,98,101,103,105,110,115,0);
       let componentsq = String.fromCharCode(113,95,56,56,95,101,100,116,115,0);
       let iconwechatQ = String.fromCharCode(111,95,49,56,95,108,101,116,116,101,114,115,0);
      for (let d = 0; d < 3; d++) {
         unimplementedviewV *= unimplementedviewV;
      }
         middlef |= iconwechatQ.length;
      if (!componentsq.startsWith(`${middlef}`)) {
          let libjsijniprofilere = String.fromCharCode(120,106,112,101,103,95,53,95,51,50,0);
          let nexts = 1.0;
          let notificationp: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,111,98,115,101,114,118,105,110,103,0),121], [String.fromCharCode(112,95,52,51,95,109,97,120,98,105,116,114,97,116,101,0),981]]);
         componentsq = `${libjsijniprofilere.length + iconnewsshare2.length}`;
         libjsijniprofilere += `${notificationp.size & parseInt(`${nexts}`)}`;
         nexts *= parseInt(`${nexts}`) | 2;
         notificationp = new Map([[`${notificationp.size}`, parseInt(`${nexts}`)]]);
      }
          let filled2 = String.fromCharCode(97,114,101,118,101,114,115,101,95,48,95,54,55,0);
          let philippinesk = String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,95,57,95,54,0);
         unimplementedviewV *= 3;
         filled2 = `${3 * filled2.length}`;
         philippinesk += `${philippinesk.length}`;
      if (2 >= (middlef ^ 2)) {
          let disconnectede = String.fromCharCode(116,101,108,101,103,114,97,95,106,95,51,48,0);
         componentsq = "1";
         disconnectede = `${disconnectede.length + disconnectede.length}`;
      }
       let questicon2 = false;
       let e_titlew = true;
       let carouseln = 1.0;
       let ping2 = 5.0;
      let bottomd = iconnewsshare2 == String.fromCharCode(113,105,114,52,48,111,118,56,101,0);
      do {
          let predictionwin7 = String.fromCharCode(118,95,53,54,95,97,112,112,118,101,121,111,114,0);
          let iconuserb: Array<any> = [389, 608, 994];
          let jnewsshareu = 0.0;
         iconnewsshare2 = `${iconnewsshare2.length - 2}`;
         predictionwin7 += `${parseInt(`${jnewsshareu}`)}`;
         iconuserb.push(iconuserb.length);
         jnewsshareu += parseInt(`${jnewsshareu}`);
         if (bottomd) {
            break;
         }
      } while (bottomd && (componentsq.endsWith(`${iconnewsshare2.length}`)));
      for (let p = 0; p < 1; p++) {
         middlef ^= unimplementedviewV % 1;
      }
         carouseln *= iconnewsshare2.length << (Math.min(Math.abs(1), 5));
         middlef -= parseInt(`${carouseln}`) - 3;
       let weather0 = 1.0;
       let leftq = 1.0;
         iconwechatQ += `${1 + parseInt(`${carouseln}`)}`;
         weather0 *= 3 >> (Math.min(Math.abs(parseInt(`${ping2}`)), 1));
         ping2 *= ((e_titlew ? 3 : 3) % (Math.max(parseInt(`${carouseln}`), 3)));
      playx <<= Math.min(4, Math.abs((launcherV == String.fromCharCode(56,0) ? parseInt(`${iconfeedbacky}`) : launcherV.length)));
   }
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

   let singapore3 = String.fromCharCode(119,56,113,0) == videojsZ;
   do {
       let profileactiveW = 1.0;
       let controlx = true;
          let screenP = 1.0;
          let liveendmodallogo1 = String.fromCharCode(98,95,49,54,95,99,97,110,99,101,108,0);
          let smallA = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,120,95,52,0);
         controlx = 34 == smallA.length;
         screenP /= Math.max((parseFloat(`${liveendmodallogo1 == String.fromCharCode(99,0) ? liveendmodallogo1.length : parseInt(`${screenP}`)}`)), 2);
         smallA += `${(liveendmodallogo1 == String.fromCharCode(111,0) ? parseInt(`${screenP}`) : liveendmodallogo1.length)}`;
      let morec = controlx ? !controlx : controlx;
      do {
         controlx = profileactiveW > 21.59;
         if (morec) {
            break;
         }
      } while ((5.21 == profileactiveW) && morec);
      for (let r = 0; r < 1; r++) {
         profileactiveW -= parseInt(`${profileactiveW}`) - 2;
      }
      while (1.42 <= (5.38 * profileactiveW)) {
          let androidg: Array<any> = [830, 101];
         profileactiveW += 1 / (Math.max(5, parseInt(`${profileactiveW}`)));
         androidg.push(3);
         break;
      }
         controlx = 19.30 < profileactiveW || controlx;
      let profileJ = profileactiveW >= 5391621.0;
      do {
          let sourceW = 0.0;
          let unimplementedviewy = 4;
         profileactiveW -= unimplementedviewy;
         sourceW /= Math.max(3, parseFloat(`${1}`));
         unimplementedviewy -= parseInt(`${sourceW}`);
         if (profileJ) {
            break;
         }
      } while (profileJ && (2.56 > (3.3 / (Math.max(3, profileactiveW)))));
      videojsZ += `${((controlx ? 4 : 3) << (Math.min(Math.abs(parseInt(`${iconfeedbacky}`)), 2)))}`;
      if (singapore3) {
         break;
      }
   } while (singapore3 && (videojsZ.endsWith(`${gesturesf.size}`)));
      

       let grey0 = 5.0;
       let boot3: Array<any> = [553, 78];
      for (let b = 0; b < 2; b++) {
         grey0 /= Math.max(2, parseInt(`${grey0}`));
      }
      if ((boot3.length + grey0) < 5.11) {
         grey0 += 1 & parseInt(`${grey0}`);
      }
         boot3.push(parseInt(`${grey0}`));
      for (let z = 0; z < 2; z++) {
          let fastforwardN = true;
          let stringsT = 1;
          let defaultlogoB = String.fromCharCode(119,95,50,51,95,112,114,101,115,117,109,101,0);
          let libavfilterC = 0.0;
         boot3 = [parseInt(`${libavfilterC}`) ^ 1];
         fastforwardN = !fastforwardN && stringsT > 51;
         stringsT *= 2 << (Math.min(4, defaultlogoB.length));
         defaultlogoB += "1";
         libavfilterC += 1 | stringsT;
      }
      for (let i = 0; i < 3; i++) {
          let native4 = String.fromCharCode(122,95,51,95,102,105,108,101,112,97,116,104,0);
          let topicK: Map<any, any> = new Map([[String.fromCharCode(118,114,101,112,95,115,95,55,51,0),38], [String.fromCharCode(100,95,56,54,95,99,111,114,100,122,0),325]]);
          let logoutQ: Array<any> = [161, 347];
          let libreanimated5: Map<any, any> = new Map([[String.fromCharCode(100,117,109,109,121,95,121,95,49,0),false ], [String.fromCharCode(116,111,97,115,116,115,95,102,95,51,56,0),true ]]);
          let dragcloseo = 5.0;
         boot3 = [parseInt(`${grey0}`) << (Math.min(logoutQ.length, 2))];
         native4 = `${3 % (Math.max(9, native4.length))}`;
         topicK.set(native4, (String.fromCharCode(51,0) == native4 ? parseInt(`${dragcloseo}`) : native4.length));
         logoutQ.push(2 << (Math.min(5, Math.abs(libreanimated5.size))));
         libreanimated5.set(native4, native4.length);
         dragcloseo /= Math.max(parseInt(`${dragcloseo}`) % 3, 3);
      }
      let videovark = grey0 <= 7354378.0;
      do {
         grey0 *= 3;
         if (videovark) {
            break;
         }
      } while (videovark && ((grey0 - 2.56) <= 1.54));
      iconnewssharex = [2 % (Math.max(parseInt(`${emptyi}`), 7))];
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

   while (!backiconl && (playx << (Math.min(Math.abs(3), 4))) > 2) {
      playx ^= playx;
      break;
   }

      setSystemNavHeight(await getNavigationBarHeight());

   if (3 >= launcherV.length) {
       let condensedA = String.fromCharCode(119,105,107,105,95,106,95,53,51,0);
       let x_centerB = String.fromCharCode(115,117,98,106,95,104,95,56,53,0);
       let attributedstringq: Array<any> = [815, 661];
          let googleJ = true;
          let policyP = 5.0;
          let holderw = String.fromCharCode(119,95,51,49,95,116,114,107,110,0);
         condensedA += `${condensedA.length | 2}`;
         googleJ = holderw.startsWith(`${googleJ}`);
         policyP *= ((googleJ ? 1 : 4) & parseInt(`${policyP}`));
         holderw = `${parseInt(`${policyP}`)}`;
      if (x_centerB.startsWith(condensedA)) {
         x_centerB = `${attributedstringq.length}`;
      }
      let materialN = condensedA.length >= 8285212;
      do {
         condensedA = `${1 ^ condensedA.length}`;
         if (materialN) {
            break;
         }
      } while (materialN && (!condensedA.startsWith(x_centerB)));
      for (let k = 0; k < 2; k++) {
         x_centerB += `${attributedstringq.length}`;
      }
         condensedA += `${(x_centerB == String.fromCharCode(115,0) ? attributedstringq.length : x_centerB.length)}`;
       let stations8 = String.fromCharCode(118,95,57,50,95,97,97,99,100,101,99,116,97,98,0);
      let downm = attributedstringq.length <= 9109658;
      do {
         attributedstringq = [stations8.length & x_centerB.length];
         if (downm) {
            break;
         }
      } while ((2 == (attributedstringq.length + 3) || 3 == (x_centerB.length + attributedstringq.length)) && downm);
      while (4 >= (1 ^ condensedA.length)) {
          let hooks0 = 4;
         attributedstringq.push(condensedA.length);
         hooks0 += hooks0;
         break;
      }
      if (x_centerB != String.fromCharCode(110,0)) {
          let containerH = String.fromCharCode(114,95,49,49,95,99,111,110,110,101,99,116,120,0);
          let bggradient0 = 1.0;
          let questicon_ = String.fromCharCode(99,95,51,52,95,114,100,101,108,116,97,0);
          let windp: Array<any> = [626, 506];
          let canvasv = String.fromCharCode(117,95,56,49,95,115,104,97,100,111,119,0);
         condensedA += `${canvasv.length}`;
         containerH = `${2 / (Math.max(5, questicon_.length))}`;
         bggradient0 -= parseFloat(`${containerH.length - 1}`);
         questicon_ += `${parseInt(`${bggradient0}`) + 2}`;
         windp = [windp.length + 3];
         canvasv += `${containerH.length & windp.length}`;
      }
      videojsZ = `${attributedstringq.length - 2}`;
   }
      

      libfolly4 = `${iconnewssharex.length + 1}`;

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

       let roomz = String.fromCharCode(117,95,51,95,114,108,112,0);
       let classesA = 0.0;
       let sigmobB: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,101,110,115,117,114,101,0),516], [String.fromCharCode(98,95,52,53,95,112,114,111,99,101,115,115,0),37], [String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,110,95,52,54,0),550]]);
      let liveendmodallogoP = 5714031.0 >= classesA;
      do {
         classesA += parseFloat(`${sigmobB.size}`);
         if (liveendmodallogoP) {
            break;
         }
      } while (((roomz.length + parseInt(`${classesA}`)) > 5 || 1 > (5 >> (Math.min(1, roomz.length)))) && liveendmodallogoP);
         roomz = "1";
          let iconbackwhitev = String.fromCharCode(112,95,54,48,95,114,101,102,108,101,99,116,111,114,0);
          let armvas = 5.0;
          let edith: Array<any> = [34, 28, 132];
         classesA += (parseFloat(`${iconbackwhitev == String.fromCharCode(109,0) ? iconbackwhitev.length : parseInt(`${classesA}`)}`));
         armvas *= parseFloat(`${edith.length}`);
         edith = [edith.length * parseInt(`${armvas}`)];
         classesA /= Math.max(parseFloat(`${2}`), 2);
         classesA *= parseFloat(`${sigmobB.size}`);
          let huaweiB = String.fromCharCode(105,116,101,109,95,97,95,50,56,0);
         roomz = `${parseInt(`${classesA}`) | huaweiB.length}`;
       let hooks_ = String.fromCharCode(110,95,52,55,95,120,99,111,100,101,0);
      if (sigmobB.size >= roomz.length) {
         sigmobB.set(roomz, roomz.length & 2);
      }
         classesA -= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${classesA}`))))}`);
      emptyi -= parseFloat(`${videojsZ.length - 3}`);
      

       let stringsI = 5.0;
       let flagw = String.fromCharCode(115,112,108,105,99,101,95,99,95,57,50,0);
       let ksadQ = false;
         stringsI *= (String.fromCharCode(121,0) == flagw ? flagw.length : (ksadQ ? 1 : 3));
      while ((stringsI + 2.41) > 1.34) {
         ksadQ = 76.10 > stringsI && !ksadQ;
         break;
      }
       let profilem = 4.0;
       let datau = 4.0;
          let countdownJ: Array<any> = [803, 68, 333];
          let indexi = true;
         flagw += "1";
         countdownJ = [countdownJ.length + 1];
         indexi = 14 >= countdownJ.length;
      while ((profilem + flagw.length) >= 5.85) {
         profilem -= parseInt(`${datau}`);
         break;
      }
      emptyi /= Math.max(parseFloat(`${parseInt(`${stringsI}`) << (Math.min(flagw.length, 1))}`), 1);

      let huaweiOffset = 0;

       let resultR = String.fromCharCode(106,95,56,53,95,117,110,115,112,105,108,108,0);
       let p_center_ = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,110,95,54,57,0);
       let auto_vm4 = 5.0;
      while (p_center_ != resultR) {
          let sheet2 = String.fromCharCode(99,95,51,50,95,97,99,99,101,115,115,101,100,0);
          let clubZ = String.fromCharCode(107,101,121,98,117,102,95,98,95,56,48,0);
         resultR += `${clubZ.length}`;
         sheet2 = `${sheet2.length << (Math.min(3, sheet2.length))}`;
         clubZ += `${sheet2.length >> (Math.min(sheet2.length, 5))}`;
         break;
      }
         auto_vm4 -= parseFloat(`${resultR.length >> (Math.min(3, Math.abs(parseInt(`${auto_vm4}`))))}`);
         auto_vm4 /= Math.max(5, parseFloat(`${p_center_.length}`));
      while (4.50 <= (5.48 / (Math.max(7, auto_vm4)))) {
         auto_vm4 += parseFloat(`${2 >> (Math.min(3, p_center_.length))}`);
         break;
      }
      let filterI = resultR.length <= 9145223;
      do {
          let step4 = String.fromCharCode(112,111,108,121,95,55,95,52,50,0);
         resultR = `${parseInt(`${auto_vm4}`) * 2}`;
         step4 = `${step4.length}`;
         if (filterI) {
            break;
         }
      } while ((resultR.length > 3) && filterI);
         resultR = `${parseInt(`${auto_vm4}`)}`;
      let photov = 7826056.0 <= auto_vm4;
      do {
         auto_vm4 += parseFloat(`${p_center_.length ^ parseInt(`${auto_vm4}`)}`);
         if (photov) {
            break;
         }
      } while ((3 <= (1 * p_center_.length)) && photov);
       let iconnointernetU = 2.0;
       let iconuser8 = 4.0;
      for (let g = 0; g < 2; g++) {
         auto_vm4 += parseFloat(`${3}`);
      }
      videojsZ += `${parseInt(`${emptyi}`) ^ 2}`;

      

   let iconmoreG = backiconl ? !backiconl : backiconl;
   do {
      backiconl = ajaxm <= videojsZ.length;
      if (iconmoreG) {
         break;
      }
   } while (iconmoreG && (!backiconl));
      

       let projectH = 1.0;
       let whiteticke = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,48,95,50,52,0);
       let notificationfillemptyj = String.fromCharCode(98,111,120,98,108,117,114,95,52,95,49,51,0);
         whiteticke = `${notificationfillemptyj.length}`;
          let subtextb = String.fromCharCode(112,114,111,114,101,115,100,101,99,95,107,95,55,48,0);
         whiteticke = "3";
         subtextb = `${3 >> (Math.min(4, subtextb.length))}`;
      while (whiteticke.includes(notificationfillemptyj)) {
         notificationfillemptyj = `${whiteticke.length}`;
         break;
      }
      while (3 > (2 ^ notificationfillemptyj.length) && 1 > (notificationfillemptyj.length ^ 2)) {
         projectH -= parseFloat(`${whiteticke.length}`);
         break;
      }
      while (notificationfillemptyj.length <= whiteticke.length) {
         whiteticke = `${notificationfillemptyj.length + whiteticke.length}`;
         break;
      }
      launcherV = `${launcherV.length}`;
      

   let images0 = 5405127 <= playx;
   do {
      playx ^= (parseInt(`${backward5}`) - (backiconl ? 1 : 4));
      if (images0) {
         break;
      }
   } while ((backward5 <= 2.2) && images0);
      

   if (!iconnewssharex.includes(ajaxm)) {
       let xadsdkT = true;
       let iconnewsshareR = 5.0;
       let libavutilO = String.fromCharCode(114,95,52,52,95,114,97,100,105,120,0);
       let bellw = String.fromCharCode(107,95,56,51,95,105,119,104,116,120,0);
          let anytimes = String.fromCharCode(99,111,109,112,111,110,101,110,116,95,118,95,57,51,0);
          let iconP = 0;
          let debugO = String.fromCharCode(114,101,116,114,121,95,105,95,53,48,0);
         libavutilO = `${libavutilO.length}`;
         anytimes += `${debugO.length}`;
         iconP ^= debugO.length & 3;
          let rewardm = 1;
          let tempj = String.fromCharCode(107,95,50,53,95,102,105,108,116,101,114,105,110,103,0);
         iconnewsshareR /= Math.max(libavutilO.length, 1);
         rewardm &= 3;
         tempj += `${(String.fromCharCode(77,0) == tempj ? tempj.length : rewardm)}`;
         libavutilO += `${parseInt(`${iconnewsshareR}`) / 2}`;
      let index3 = libavutilO == String.fromCharCode(107,108,118,119,51,56,100,105,51,0);
      do {
          let librrcB = String.fromCharCode(99,95,54,54,95,119,97,115,0);
          let short_pi = false;
          let defaultpredictionprofileQ = 1.0;
          let componentsp = 0.0;
         libavutilO = `${(String.fromCharCode(106,0) == bellw ? (short_pi ? 4 : 3) : bellw.length)}`;
         librrcB += `${parseInt(`${componentsp}`) % 1}`;
         short_pi = librrcB.startsWith(`${defaultpredictionprofileQ}`);
         defaultpredictionprofileQ *= (parseFloat(`${String.fromCharCode(77,0) == librrcB ? librrcB.length : parseInt(`${defaultpredictionprofileQ}`)}`));
         componentsp -= parseInt(`${defaultpredictionprofileQ}`);
         if (index3) {
            break;
         }
      } while (index3 && ((iconnewsshareR - libavutilO.length) < 4.44 || (4.44 - iconnewsshareR) < 3.90));
       let i_countH = true;
      while (5 >= (2 * libavutilO.length) && (libavutilO.length % 2) >= 2) {
          let iconI = false;
          let bggradientG = 1.0;
         libavutilO = `${((xadsdkT ? 2 : 2) / (Math.max(9, parseInt(`${iconnewsshareR}`))))}`;
         iconI = bggradientG == 18.98;
         bggradientG += (parseInt(`${bggradientG}`) - (iconI ? 4 : 3));
         break;
      }
      if (5.46 <= iconnewsshareR) {
          let middleo = 0;
          let collectionN: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,95,114,95,57,52,0),String.fromCharCode(110,101,119,115,95,52,95,54,57,0)], [String.fromCharCode(98,95,51,49,95,115,112,97,99,101,0),String.fromCharCode(109,111,100,117,108,101,95,116,95,56,55,0)]]);
          let internetw = 2;
          let dialogo = 5.0;
         bellw += `${bellw.length}`;
         middleo /= Math.max(4, 1);
         collectionN = new Map([[`${dialogo}`, parseInt(`${dialogo}`) | 3]]);
         internetw -= internetw;
      }
       let gifgoalbgd = String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,95,49,95,54,53,0);
       let contextB = String.fromCharCode(109,97,112,115,116,114,105,110,103,95,52,95,55,0);
          let videoY: Array<any> = [758, 347];
         xadsdkT = (36 == (videoY.length % (Math.max(7, (!i_countH ? 36 : videoY.length)))));
         contextB = `${(3 & (i_countH ? 3 : 4))}`;
         xadsdkT = iconnewsshareR >= 49.64;
      if ((iconnewsshareR - 4.89) < 1.93) {
          let mathm = 2.0;
          let benefitC = true;
          let successX = 1.0;
          let championF: Map<any, any> = new Map([[String.fromCharCode(113,95,56,53,95,105,110,116,101,114,97,116,105,111,110,0),603], [String.fromCharCode(116,95,55,55,95,112,111,121,116,109,0),930]]);
          let mbsplashe = String.fromCharCode(118,109,115,108,95,53,95,52,51,0);
         iconnewsshareR /= Math.max((parseInt(`${successX}`) | (xadsdkT ? 3 : 1)), 4);
         mathm -= championF.size % (Math.max(3, 4));
         benefitC = mbsplashe == String.fromCharCode(102,0);
         successX += mbsplashe.length % (Math.max(2, 10));
         championF = new Map([[`${championF.size}`, 2 + championF.size]]);
      }
      iconnewssharex = [launcherV.length];
   }

      

      videojsZ += `${iconnewssharex.length}`;
      

   while ((emptyi * parseFloat(`${launcherV.length}`)) >= 4.9 && 4.9 >= (parseFloat(`${launcherV.length}`) * emptyi)) {
      launcherV = `${(String.fromCharCode(78,0) == libfolly4 ? libfolly4.length : ajaxm)}`;
      break;
   }

      let deviceName = await DeviceInfo.getDeviceName();

   if (5 < (videojsZ.length + 5) && 5 < (videojsZ.length + iconnewssharex.length)) {
       let iconschedulex = 4;
       let stationsO = String.fromCharCode(98,95,49,52,95,98,97,99,107,119,97,114,100,115,0);
         iconschedulex >>= Math.min(Math.abs(iconschedulex), 3);
      let gesturei = iconschedulex <= 9784403;
      do {
         iconschedulex /= Math.max(1 / (Math.max(3, stationsO.length)), 2);
         if (gesturei) {
            break;
         }
      } while (gesturei && (iconschedulex < 5));
          let mutedf = false;
          let iconpipexpandC: Array<any> = [683, 156];
          let editJ: Array<any> = [303, 399];
         iconschedulex ^= editJ.length - 2;
         mutedf = (51 > ((!mutedf ? 51 : iconpipexpandC.length) - iconpipexpandC.length));
         editJ = [((mutedf ? 5 : 5) - iconpipexpandC.length)];
       let moonY = 1;
          let loginsuccessN = String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,110,95,55,53,0);
          let libpangleflippedu: Array<any> = [984, 609];
          let less7 = true;
         moonY *= stationsO.length >> (Math.min(Math.abs(2), 2));
         loginsuccessN += `${2 - libpangleflippedu.length}`;
         libpangleflippedu = [loginsuccessN.length ^ libpangleflippedu.length];
         less7 = loginsuccessN.length > 12;
         stationsO = `${3 - iconschedulex}`;
      videojsZ += "2";
   }
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

       let final_7D = 4.0;
      while ((final_7D * 2.2) <= 2.6 && 2.2 <= (final_7D * final_7D)) {
         final_7D -= parseFloat(`${parseInt(`${final_7D}`)}`);
         break;
      }
      let a_positionH = final_7D >= 7300457.0;
      do {
         final_7D += parseFloat(`${parseInt(`${final_7D}`)}`);
         if (a_positionH) {
            break;
         }
      } while (((final_7D / (Math.max(10, final_7D))) == 3.64 || 5.79 == (final_7D / 3.64)) && a_positionH);
          let componentsC = false;
          let episodes6: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,102,111,114,103,111,116,0),false ], [String.fromCharCode(103,95,57,55,95,115,98,117,118,0),false ], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,105,95,52,57,0),false ]]);
         final_7D /= Math.max(parseFloat(`${episodes6.size}`), 5);
         componentsC = (componentsC ? componentsC : !componentsC);
         episodes6 = new Map([[`${componentsC}`, ((componentsC ? 5 : 4) & (componentsC ? 2 : 3))]]);
      iconfeedbacky += videojsZ.length + 2;
        

   while (configurem.length == 4) {
       let largebrightnessM = String.fromCharCode(113,95,57,49,95,99,111,110,97,110,102,105,108,101,0);
         largebrightnessM += `${largebrightnessM.length}`;
      for (let i = 0; i < 1; i++) {
         largebrightnessM = `${largebrightnessM.length | 3}`;
      }
          let pagew = 0;
          let release_oji = false;
         largebrightnessM = "3";
         pagew <<= Math.min(1, Math.abs(3));
         release_oji = pagew < pagew;
      configurem += `${parseInt(`${backward5}`) | 2}`;
      break;
   }
        let deviceHeight = Dimensions.get("screen").height;

       let trashX: Array<any> = [String.fromCharCode(103,101,111,98,116,97,103,95,54,95,49,0), String.fromCharCode(116,97,112,101,95,104,95,54,48,0), String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,101,95,51,54,0)];
       let telegramY = false;
       let circlec = String.fromCharCode(103,114,111,117,112,95,106,95,57,52,0);
         telegramY = trashX.length <= 21;
         telegramY = String.fromCharCode(119,0) == circlec;
      if (5 >= (3 | circlec.length) || 2 >= (trashX.length | 3)) {
          let minivodz: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,110,95,53,54,0),606], [String.fromCharCode(111,112,115,95,48,95,50,49,0),754]]);
          let info9: Map<any, any> = new Map([[String.fromCharCode(122,95,55,53,95,112,111,112,117,108,97,116,101,0),false ], [String.fromCharCode(98,101,115,115,101,108,95,100,95,53,49,0),false ], [String.fromCharCode(115,117,98,118,105,100,101,111,95,97,95,49,57,0),true ]]);
          let checkboxi = String.fromCharCode(104,95,57,95,107,109,115,103,114,97,98,0);
          let mbbidN = true;
          let contextk = 2;
         circlec = `${(contextk & (telegramY ? 3 : 5))}`;
         minivodz.set(`${mbbidN}`, 1);
         info9.set(`${minivodz.size}`, 2 >> (Math.min(5, Math.abs(info9.size))));
         checkboxi = "3";
         contextk %= Math.max(info9.size, 1);
      }
      let internetf = circlec.length <= 8586077;
      do {
         circlec += `${trashX.length}`;
         if (internetf) {
            break;
         }
      } while ((trashX.length == circlec.length) && internetf);
         telegramY = circlec.length >= 53;
      if (telegramY) {
          let temperatureD: Map<any, any> = new Map([[String.fromCharCode(116,97,114,103,101,116,95,107,95,54,50,0),630], [String.fromCharCode(102,105,120,115,116,114,105,100,101,95,100,95,53,57,0),252]]);
          let default_5T = 1.0;
          let invitea = true;
          let contextn = true;
         telegramY = 89.77 > default_5T;
         temperatureD.set(`${contextn}`, (temperatureD.size >> (Math.min(3, Math.abs((contextn ? 3 : 2))))));
         default_5T *= (parseFloat(`${(invitea ? 1 : 4) * 3}`));
         invitea = (invitea ? !contextn : invitea);
      }
         circlec = "2";
      let reminderQ = telegramY ? !telegramY : telegramY;
      do {
          let clockn = String.fromCharCode(108,95,52,54,95,111,110,116,101,120,116,0);
          let libcrashsdk2 = String.fromCharCode(113,95,55,95,100,97,116,101,0);
          let viewsx = String.fromCharCode(97,115,99,95,103,95,55,56,0);
          let dangerm = 3.0;
          let volumel = 0.0;
         telegramY = (parseInt(`${volumel}`) * trashX.length) == 52;
         clockn = `${libcrashsdk2.length}`;
         libcrashsdk2 += `${(libcrashsdk2 == String.fromCharCode(87,0) ? viewsx.length : libcrashsdk2.length)}`;
         viewsx = "2";
         dangerm -= (parseFloat(`${String.fromCharCode(86,0) == viewsx ? viewsx.length : parseInt(`${dangerm}`)}`));
         volumel *= parseFloat(`${clockn.length | parseInt(`${dangerm}`)}`);
         if (reminderQ) {
            break;
         }
      } while (reminderQ && (circlec.includes(`${telegramY}`)));
       let navigationL: Array<any> = [982, 364, 842];
      emptyi += (parseFloat(`${String.fromCharCode(108,0) == launcherV ? trashX.length : launcherV.length}`));
        let windowHeight = Dimensions.get("window").height;

       let leaguen = 3.0;
       let star6 = String.fromCharCode(120,95,50,53,95,111,112,116,105,111,110,97,108,115,0);
       let disconnectedD = String.fromCharCode(102,115,112,112,95,112,95,50,52,0);
          let grayU = String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,101,95,50,50,0);
          let libzeusT = 5.0;
         star6 += `${star6.length}`;
         grayU = `${(grayU == String.fromCharCode(97,0) ? parseInt(`${libzeusT}`) : grayU.length)}`;
         libzeusT += (grayU == String.fromCharCode(86,0) ? parseInt(`${libzeusT}`) : grayU.length);
         disconnectedD = "3";
         leaguen *= (String.fromCharCode(89,0) == disconnectedD ? disconnectedD.length : star6.length);
      for (let c = 0; c < 1; c++) {
         leaguen += 1;
      }
         leaguen += star6.length << (Math.min(disconnectedD.length, 2));
       let mbjscommonZ = 4.0;
         disconnectedD = `${disconnectedD.length}`;
      while ((disconnectedD.length * parseInt(`${leaguen}`)) >= 1) {
          let binddatasu = 0.0;
          let singlez: Array<any> = [245, 815, 201];
          let smallj = 5.0;
          let settingd = 0.0;
         disconnectedD += "2";
         binddatasu -= 3 ^ parseInt(`${settingd}`);
         singlez = [parseInt(`${smallj}`)];
         settingd += parseInt(`${smallj}`) * singlez.length;
         break;
      }
      while ((star6.length | 2) <= 1 || 2.26 <= (mbjscommonZ - parseFloat(`${star6.length}`))) {
         mbjscommonZ *= parseFloat(`${parseInt(`${leaguen}`)}`);
         break;
      }
      backward5 -= 3;
        let sH = StatusBar.currentHeight || 0;

   if (parseFloat(`${libfolly4.length}`) <= emptyi) {
      emptyi -= parseFloat(`${ajaxm >> (Math.min(5, Math.abs(3)))}`);
   }
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

   while (4 <= launcherV.length) {
      launcherV += `${videojsZ.length}`;
      break;
   }
        if (bottomNavBarHeight > 0) {

      playx /= Math.max(5, configurem.length ^ 2);
          huaweiOffset = -95;
        } else {

      button5 /= Math.max(ajaxm * 1, 2);
          huaweiOffset = 75;

   while (playx == ajaxm) {
      ajaxm ^= videojsZ.length;
      break;
   }
        }
      }

      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

   while ((emptyi / 5.16) >= 4.70 && emptyi >= 5.16) {
       let hejiW = 3;
       let splashc: Array<any> = [91, 283];
       let specx = String.fromCharCode(97,95,51,51,95,109,98,99,110,116,0);
         splashc.push(hejiW);
          let zhengpianS = false;
          let greeng = String.fromCharCode(111,116,104,101,114,115,95,111,95,57,48,0);
         splashc = [hejiW & greeng.length];
         zhengpianS = !zhengpianS;
         greeng += `${((zhengpianS ? 2 : 4))}`;
      let delegate_86 = 8075146 >= splashc.length;
      do {
         splashc = [(specx == String.fromCharCode(50,0) ? specx.length : splashc.length)];
         if (delegate_86) {
            break;
         }
      } while (delegate_86 && ((2 * splashc.length) > 2 || 2 > (specx.length * splashc.length)));
      for (let i = 0; i < 2; i++) {
         specx = `${hejiW - 2}`;
      }
         splashc = [splashc.length >> (Math.min(Math.abs(2), 3))];
         splashc = [specx.length];
      for (let f = 0; f < 1; f++) {
          let mbjscommonj = String.fromCharCode(102,95,52,51,95,112,111,115,116,0);
          let default_mM = true;
         specx += `${(specx == String.fromCharCode(53,0) ? (default_mM ? 5 : 2) : specx.length)}`;
         mbjscommonj += `${mbjscommonj.length}`;
         default_mM = mbjscommonj == mbjscommonj;
      }
       let turndown3 = 0.0;
       let mutedC = 1.0;
      if (turndown3 == mutedC) {
         turndown3 *= parseFloat(`${specx.length}`);
      }
      emptyi /= Math.max(1, parseFloat(`${splashc.length / 2}`));
      break;
   }

      let tabletOffset = 0;

   while (button5 > incidentv.length) {
      incidentv = `${playx}`;
      break;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   if (1.7 > (emptyi - parseFloat(`${gesturesf.size}`)) || (3 | gesturesf.size) > 1) {
       let dycreatorp = false;
       let video9 = String.fromCharCode(118,112,108,97,121,101,114,95,116,95,54,55,0);
      if (!dycreatorp) {
         dycreatorp = !video9.includes(`${dycreatorp}`);
      }
          let c_player_ = false;
          let baselineI: Map<any, any> = new Map([[String.fromCharCode(100,95,56,95,112,105,116,99,104,102,105,108,116,101,114,0),579], [String.fromCharCode(119,95,51,48,95,112,114,111,100,0),648], [String.fromCharCode(104,95,51,48,95,115,101,108,101,99,116,101,100,0),427]]);
         video9 = `${(String.fromCharCode(111,0) == video9 ? video9.length : (c_player_ ? 1 : 5))}`;
         c_player_ = baselineI.size <= baselineI.size;
         dycreatorp = !video9.endsWith(`${dycreatorp}`);
          let controlsZ = String.fromCharCode(116,119,111,95,98,95,57,56,0);
         dycreatorp = 47 <= controlsZ.length && String.fromCharCode(72,0) == video9;
       let transferG: Array<any> = [String.fromCharCode(106,95,57,51,95,105,116,117,110,101,115,0), String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,104,95,51,50,0)];
          let yellowredcardv = 0.0;
         transferG = [parseInt(`${yellowredcardv}`) % (Math.max(video9.length, 3))];
      gesturesf = new Map([[configurem, (String.fromCharCode(68,0) == incidentv ? configurem.length : incidentv.length)]]);
   }
        let sH = StatusBar.currentHeight || 0;

      ajaxm += parseInt(`${iconfeedbacky}`) * button5;
        tabletOffset = 60;

      iconfeedbacky *= playx;
      }

      let x, y, width, height;

   for (let v = 0; v < 3; v++) {
       let libswscaleP = String.fromCharCode(113,95,49,48,95,105,110,110,100,101,114,0);
       let executorL: Array<any> = [382, 744, 508];
       let weiboX = String.fromCharCode(99,95,49,55,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
       let rulesD = String.fromCharCode(100,95,50,51,95,114,101,111,114,100,101,114,101,100,0);
       let connectionR: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,105,110,103,95,115,95,51,0),711], [String.fromCharCode(100,101,99,111,100,105,110,103,95,99,95,55,53,0),745], [String.fromCharCode(112,97,114,115,101,95,111,95,57,53,0),860]]);
      if (weiboX.length >= 3 || rulesD != String.fromCharCode(112,0)) {
          let p_playerc = 5.0;
          let backwardd = String.fromCharCode(120,95,50,55,95,104,100,99,100,0);
          let awayteamfield0: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,109,100,104,100,0),true ], [String.fromCharCode(116,95,51,52,95,116,119,111,109,0),true ]]);
          let libpangleflippedC = String.fromCharCode(122,95,53,54,95,97,116,117,114,97,116,105,111,110,0);
         weiboX = `${libpangleflippedC.length}`;
         p_playerc -= (backwardd == String.fromCharCode(73,0) ? parseInt(`${p_playerc}`) : backwardd.length);
         awayteamfield0 = new Map([[`${p_playerc}`, 3 * backwardd.length]]);
         libpangleflippedC += `${parseInt(`${p_playerc}`)}`;
      }
      while (3 == (rulesD.length + connectionR.size) && (connectionR.size + 3) == 1) {
         rulesD = `${weiboX.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
          let modules3: Map<any, any> = new Map([[String.fromCharCode(109,115,103,115,95,114,95,49,56,0),838], [String.fromCharCode(102,99,112,117,98,108,105,115,104,95,54,95,51,48,0),512]]);
          let infoV = 5;
          let traminiY = String.fromCharCode(115,110,97,112,112,101,100,95,56,95,55,48,0);
         libswscaleP += `${2 | weiboX.length}`;
         modules3 = new Map([[`${modules3.size}`, 3 << (Math.min(1, Math.abs(infoV)))]]);
         infoV ^= traminiY.length;
         traminiY += `${traminiY.length}`;
          let vignetted = 5;
         weiboX += `${vignetted}`;
      for (let w = 0; w < 1; w++) {
          let selectL = String.fromCharCode(101,95,57,95,98,97,115,101,105,115,107,101,121,0);
          let flag7 = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,102,95,52,57,0);
         executorL.push(executorL.length ^ 3);
         selectL = "1";
         flag7 = "3";
      }
      while (!rulesD.endsWith(`${executorL.length}`)) {
         executorL.push(connectionR.size - 1);
         break;
      }
      while (weiboX.length == executorL.length) {
         executorL = [libswscaleP.length];
         break;
      }
      let minik = String.fromCharCode(111,49,98,97,52,50,116,50,106,0) == libswscaleP;
      do {
          let styleT: Array<any> = [366, 867];
          let iconstarI: Map<any, any> = new Map([[String.fromCharCode(102,95,56,56,95,114,97,110,100,111,109,110,101,115,115,0),String.fromCharCode(122,95,57,49,95,97,99,116,111,114,0)], [String.fromCharCode(100,111,116,115,95,119,95,53,0),String.fromCharCode(104,111,117,114,95,57,95,53,53,0)], [String.fromCharCode(122,95,55,50,95,108,97,114,103,101,0),String.fromCharCode(115,95,51,50,95,108,97,116,105,116,117,100,101,0)]]);
          let libcxxcomponentsz = 5;
         libswscaleP = `${weiboX.length & 1}`;
         styleT.push(styleT.length);
         iconstarI.set(`${libcxxcomponentsz}`, iconstarI.size + libcxxcomponentsz);
         if (minik) {
            break;
         }
      } while (minik && (rulesD.length > libswscaleP.length));
      for (let t = 0; t < 3; t++) {
         connectionR.set(rulesD, executorL.length);
      }
      for (let b = 0; b < 3; b++) {
         libswscaleP = `${(libswscaleP == String.fromCharCode(116,0) ? connectionR.size : libswscaleP.length)}`;
      }
      if ((connectionR.size % (Math.max(1, 6))) < 4 && 4 < (rulesD.length % 1)) {
          let orangeclockH = 0;
          let nbatrophyb: Map<any, any> = new Map([[String.fromCharCode(100,101,109,117,120,95,111,95,53,51,0),45], [String.fromCharCode(98,95,57,49,95,115,117,98,102,105,101,108,100,115,0),450], [String.fromCharCode(120,109,97,115,109,95,103,95,57,50,0),640]]);
          let fastforward1 = String.fromCharCode(105,110,116,101,114,105,116,101,109,95,55,95,50,56,0);
          let bellN = String.fromCharCode(117,95,56,56,95,106,97,99,99,97,114,100,100,105,115,116,0);
         rulesD = `${rulesD.length >> (Math.min(Math.abs(1), 4))}`;
         orangeclockH >>= Math.min(4, Math.abs(orangeclockH));
         nbatrophyb.set(fastforward1, orangeclockH);
         fastforward1 = `${orangeclockH | fastforward1.length}`;
         bellN += `${(String.fromCharCode(103,0) == fastforward1 ? nbatrophyb.size : fastforward1.length)}`;
      }
         weiboX += `${connectionR.size / (Math.max(executorL.length, 5))}`;
         rulesD = `${libswscaleP.length * executorL.length}`;
         connectionR.set(`${executorL.length}`, 3 + connectionR.size);
         libswscaleP += `${(String.fromCharCode(108,0) == rulesD ? executorL.length : rulesD.length)}`;
      playx %= Math.max(3, 1 % (Math.max(parseInt(`${backward5}`), 4)));
   }
      x = 0;

   let weatherb = launcherV == String.fromCharCode(106,122,118,111,118,122,107,55,0);
   do {
       let profileframe_ = String.fromCharCode(108,97,115,116,109,98,117,102,95,107,95,49,56,0);
       let scrollview0: Array<any> = [556, 157, 533];
       let routerm = 4.0;
       let h_unlockY = 3.0;
       let twitterm = String.fromCharCode(98,117,114,115,116,121,95,109,95,49,48,48,0);
      if (4 == (5 - twitterm.length) && 3 == (twitterm.length - 5)) {
          let iconmore2 = 3;
          let predictionbannersharedX = true;
          let ticks: Map<any, any> = new Map([[String.fromCharCode(114,95,57,56,95,114,105,110,102,0),String.fromCharCode(104,111,108,108,111,119,95,99,95,54,0)], [String.fromCharCode(99,117,101,112,111,105,110,116,95,119,95,53,49,0),String.fromCharCode(113,95,49,56,95,115,105,120,0)]]);
          let feedbacki = 5.0;
         twitterm = `${parseInt(`${h_unlockY}`)}`;
         iconmore2 &= 1 - ticks.size;
         predictionbannersharedX = ticks.get(`${feedbacki}`) != null;
         feedbacki /= Math.max(1, ticks.size);
      }
      if (scrollview0.includes(h_unlockY)) {
          let iconarrowright7 = 3.0;
          let updatest = 5;
          let greens = 5;
         h_unlockY -= parseFloat(`${parseInt(`${routerm}`)}`);
         iconarrowright7 -= parseInt(`${iconarrowright7}`) - 1;
         updatest ^= 3;
         greens |= 3;
      }
         routerm += parseFloat(`${parseInt(`${routerm}`)}`);
      let greytickH = 8280127 >= scrollview0.length;
      do {
         scrollview0.push(1 / (Math.max(10, parseInt(`${h_unlockY}`))));
         if (greytickH) {
            break;
         }
      } while ((5.20 >= (2.49 + h_unlockY) || (scrollview0.length + parseInt(`${h_unlockY}`)) >= 5) && greytickH);
      for (let k = 0; k < 3; k++) {
          let nativeexS = 0.0;
          let sinaB: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,114,101,115,101,97,114,99,104,0),959], [String.fromCharCode(112,114,101,115,101,100,95,102,95,49,48,0),78], [String.fromCharCode(97,115,115,111,99,105,97,116,101,95,109,95,50,55,0),434]]);
         profileframe_ += `${(String.fromCharCode(116,0) == profileframe_ ? sinaB.size : profileframe_.length)}`;
         nativeexS /= Math.max(3, parseFloat(`${parseInt(`${nativeexS}`)}`));
         sinaB.set(`${nativeexS}`, parseInt(`${nativeexS}`) * parseInt(`${nativeexS}`));
      }
          let componentsb = String.fromCharCode(108,95,51,49,95,97,118,112,105,99,116,117,114,101,0);
          let hiade = 1;
          let eventj: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,116,97,103,115,95,108,95,52,55,0),365], [String.fromCharCode(100,97,116,97,98,97,115,101,95,121,95,53,0),472]]);
         profileframe_ = `${(profileframe_ == String.fromCharCode(53,0) ? scrollview0.length : profileframe_.length)}`;
         componentsb = `${componentsb.length | eventj.size}`;
         hiade |= hiade + 3;
         eventj = new Map([[`${hiade}`, hiade]]);
       let unread5: Array<any> = [255, 20, 315];
       let diceX: Array<any> = [181, 623];
          let faviconC = false;
          let full2 = 0.0;
          let ksad2 = true;
         scrollview0.push(scrollview0.length);
         faviconC = full2 > 93.87;
         full2 += parseFloat(`${1 & parseInt(`${full2}`)}`);
         ksad2 = full2 < 28.83 && !faviconC;
      for (let v = 0; v < 2; v++) {
         scrollview0 = [2 >> (Math.min(3, twitterm.length))];
      }
       let logoutp = 5.0;
      let bootC = String.fromCharCode(111,98,100,105,101,115,97,122,0) == profileframe_;
      do {
          let defaultroombgc = false;
          let heartg: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,109,105,110,105,109,97,108,0),924], [String.fromCharCode(99,108,108,99,95,101,95,50,57,0),16], [String.fromCharCode(97,116,114,97,99,95,50,95,54,57,0),606]]);
          let flipperY = String.fromCharCode(105,95,52,95,104,97,98,108,101,0);
         profileframe_ = `${(String.fromCharCode(54,0) == profileframe_ ? profileframe_.length : unread5.length)}`;
         defaultroombgc = heartg.get(`${defaultroombgc}`) == null;
         heartg = new Map([[`${heartg.size}`, heartg.size ^ 2]]);
         flipperY = `${flipperY.length / 1}`;
         if (bootC) {
            break;
         }
      } while (bootC && (logoutp > 2.3));
          let commentQ = true;
          let light9 = 0.0;
          let penaltyQ = String.fromCharCode(113,95,55,55,95,101,118,97,108,102,117,110,99,0);
         unread5 = [1];
         commentQ = !commentQ;
         light9 += parseInt(`${light9}`) & 1;
         penaltyQ = `${penaltyQ.length * parseInt(`${light9}`)}`;
         twitterm += `${parseInt(`${logoutp}`) % (Math.max(scrollview0.length, 9))}`;
         diceX.push(unread5.length);
      if ((3 ^ scrollview0.length) > 4) {
          let photoG: Array<any> = [String.fromCharCode(107,95,54,49,95,104,117,101,115,0), String.fromCharCode(110,95,52,50,95,119,104,111,108,101,0), String.fromCharCode(105,95,57,95,114,101,100,111,0)];
          let controls_: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,111,105,110,116,95,110,95,49,54,0),String.fromCharCode(115,101,116,100,97,114,95,107,95,52,50,0)], [String.fromCharCode(100,101,105,110,118,101,114,116,95,113,95,54,0),String.fromCharCode(100,95,52,54,95,108,105,115,116,101,100,0)], [String.fromCharCode(109,95,56,49,95,115,104,97,100,101,114,0),String.fromCharCode(110,97,112,115,104,111,116,95,52,95,50,0)]]);
          let mathF = 0;
          let backwardS: Map<any, any> = new Map([[String.fromCharCode(116,95,53,52,95,99,121,99,108,101,0),false ], [String.fromCharCode(99,95,56,48,95,105,110,112,117,116,116,101,109,0),true ]]);
         scrollview0 = [2];
         photoG.push(photoG.length >> (Math.min(1, Math.abs(mathF))));
         controls_.set(`${mathF}`, mathF);
         backwardS = new Map([[`${photoG.length}`, photoG.length]]);
      }
      launcherV += `${iconnewssharex.length}`;
      if (weatherb) {
         break;
      }
   } while (weatherb && ((2 - launcherV.length) > 4 && 5 > (launcherV.length - 2)));
      let bannerHeightOnScreen =
        adsTopInPixel -
        TOPON_BANNER_HEIGHT * scale +
        huaweiOffset +
        tabletOffset;

      backiconl = launcherV == String.fromCharCode(82,0) || iconnewssharex.length == 90;
      if (pageNoNavbar.includes(route)) {

      iconfeedbacky *= iconnewssharex.length / 1;
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;

   let executorE = videojsZ == String.fromCharCode(113,116,118,118,121,118,120,100,106,0);
   do {
      videojsZ += `${libfolly4.length - 3}`;
      if (executorE) {
         break;
      }
   } while ((launcherV == videojsZ) && executorE);
      width = screenWidthInPixel;

   for (let b = 0; b < 1; b++) {
       let googlec = false;
          let roundR = 4;
          let countdownC: Map<any, any> = new Map([[String.fromCharCode(98,95,55,52,95,115,105,120,0),177], [String.fromCharCode(108,97,110,103,95,105,95,57,52,0),311]]);
         googlec = countdownC.get(`${roundR}`) == null;
          let inouttargetredC = 3.0;
          let questR = 3.0;
          let storeC = String.fromCharCode(115,107,105,112,95,103,95,51,0);
         googlec = !storeC.includes(`${questR}`);
         inouttargetredC += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${inouttargetredC}`)), 4))}`);
         questR -= parseInt(`${inouttargetredC}`) << (Math.min(Math.abs(parseInt(`${inouttargetredC}`)), 4));
         googlec = !googlec;
      backiconl = 17.68 < backward5;
   }
      height = TOPON_BANNER_HEIGHT * scale;

      iconfeedbacky *= 2;
      

      videojsZ = `${configurem.length << (Math.min(Math.abs(2), 5))}`;

      

      ajaxm /= Math.max(gesturesf.size * 3, 5);
      
      

      showBanner(route, x, y, width, height);
    } else if (Platform.OS === "ios") {
      const screenWidth = Dimensions.get("screen").width;
      
      const screenHeight = Dimensions.get("screen").height;
      
      const statusBarHeight = StatusBar.currentHeight ?? 0;
      
      const navHeight = navbarHeight != 0 ? navbarHeight - 1 : 0;
      

      const adsTopInPixel = screenHeight - statusBarHeight - navbarHeight;
      

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen = adsTopInPixel - TOPON_BANNER_HEIGHT;
      if (pageNoNavbar.includes(route)) bannerHeightOnScreen += navHeight;
      y = bannerHeightOnScreen;
      width = screenWidth;
      height = TOPON_BANNER_HEIGHT;
      

      showBanner(route, x, y, width, height);
    }
  };

  useEffect(() => {
    

    initBannerAdListener();
    initBanner();

    return () => ATBannerRNSDK.removeAllListeners();
  }, []);

  
  
  
  

  

  useEffect(() => {
    
    
    hideAllBanner();
    
    if (settingState.appOrientation === "PORTRAIT") {
      if (!wwBodan.isVip(userState.user)) {
        
        
        setTimeout(() => {
          showBannerInPosition().then();
        }, 300);
      }
    } else {
      console.log("hide banner");
      hideAllBanner();
    }
  }, [
    route,
    navbarHeight,
    systemNavHeight,
    settingState.appOrientation,
    screenState.isPlayerFullScreen,
    windowWidth2,
  ]);

  return (
    <AdsBannerContext.Provider
      value={{ setRoute, setNavbarHeight, currentRoute: route, reloadBanner }}
    >
      {children}
    </AdsBannerContext.Provider>
  );
};
