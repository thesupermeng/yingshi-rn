

class SkipLibflipper {
    static libreactperfloggerjniPrivilege = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import {useNavigation, useTheme} from '@react-navigation/native';
import {Linking, View} from 'react-native';
import FastImage from '../common/yys_vertical_collection';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {yys_Xadsdk} from '@type/yys_libzeus';
import {useEffect} from 'react';

interface yys_ConfigureUimanager {
  bannerAd: yys_Xadsdk;
  onMount?: ({
    slot_id,
    id,
    title,
    name,
  }: {
    slot_id: number;
    id: number;
    title: string;
    name: string;
  }) => void;
  onPress?: ({
    slot_id,
    id,
    title,
    name,
  }: {
    slot_id: number;
    id: number;
    title: string;
    name: string;
  }) => void;
}

export const BannerContainer = ({bannerAd, onMount, onPress}: yys_ConfigureUimanager) => {
  const {spacing} = useTheme();
  const navigator = useNavigation();

  useEffect(() => {
    if (onMount)
      onMount({
        slot_id: bannerAd.ads_slot_id,
        id: bannerAd.ads_id,
        title: bannerAd.ads_event_title,
        name: bannerAd.ads_name,
      });
  }, []);

  const redirectToAd = async () => {
       let minimizeg = String.fromCharCode(98,95,50,51,95,111,112,117,115,0);
    let dialogL = true;
    let libturbomodulejsijnip = String.fromCharCode(99,104,97,110,103,101,100,95,103,95,50,57,0);
    let saveB = 3.0;
    let xadsdk6 = false;
    let humidityx = String.fromCharCode(117,95,54,57,95,116,111,109,111,114,114,111,119,0);
    let scoreL = String.fromCharCode(108,95,50,48,95,112,108,117,115,0);
    let inviteV = 3.0;
    let dycreatorv = String.fromCharCode(102,95,53,54,95,108,97,110,103,115,0);
      humidityx += `${3 % (Math.max(parseInt(`${saveB}`), 6))}`;
       let complete4 = String.fromCharCode(101,110,104,97,110,99,101,100,95,116,95,57,56,0);
       let recommendationk = String.fromCharCode(103,95,51,49,95,97,100,97,112,116,101,114,115,0);
       let shirtd = true;
         shirtd = !shirtd;
      if (shirtd) {
         shirtd = recommendationk.length < complete4.length;
      }
      if (complete4 == recommendationk) {
         recommendationk += `${complete4.length}`;
      }
      while (1 < complete4.length) {
         complete4 = `${((shirtd ? 3 : 4))}`;
         break;
      }
          let configureu = true;
         complete4 += `${((shirtd ? 5 : 3) + 1)}`;
         configureu = !configureu;
         shirtd = recommendationk.length > 75;
         complete4 = `${recommendationk.length}`;
      for (let d = 0; d < 1; d++) {
          let kickX = true;
          let default_m2: Array<any> = [304, 145];
          let dplus2: Map<any, any> = new Map([[String.fromCharCode(116,109,112,108,95,119,95,50,50,0),822], [String.fromCharCode(121,117,118,97,95,101,95,50,52,0),204], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,121,95,48,0),448]]);
          let listt = 2;
         shirtd = default_m2.length == recommendationk.length;
         kickX = !kickX;
         default_m2.push(listt - 1);
         dplus2 = new Map([[`${dplus2.size}`, (dplus2.size - (kickX ? 1 : 3))]]);
         listt *= listt;
      }
         recommendationk += `${(String.fromCharCode(57,0) == recommendationk ? (shirtd ? 3 : 2) : recommendationk.length)}`;
      saveB -= humidityx.length;

    const url =
      bannerAd.ads_url.includes(SkipLibflipper.libreactperfloggerjniPrivilege([38,58,58,62,61,116,97,97,78],0x4E,false)) ||
      bannerAd.ads_url.includes(SkipLibflipper.libreactperfloggerjniPrivilege([121,101,101,97,43,62,62,17],0x11,false))
        ? bannerAd.ads_url
        : SkipLibflipper.libreactperfloggerjniPrivilege([38,58,58,62,61,116,97,97,78],0x4E,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

   let successi = xadsdk6 ? !xadsdk6 : xadsdk6;
   do {
       let helperu = 3.0;
       let latn7 = 2.0;
       let libjsi3 = 4;
       let x_title9 = String.fromCharCode(97,108,105,103,110,105,110,103,95,103,95,56,53,0);
       let eactb = String.fromCharCode(101,95,55,54,95,100,101,99,111,100,101,102,0);
      let headere = String.fromCharCode(97,116,52,54,110,55,0) == eactb;
      do {
         eactb += `${x_title9.length}`;
         if (headere) {
            break;
         }
      } while (((3 & eactb.length) < 3) && headere);
         libjsi3 /= Math.max(3, libjsi3 - eactb.length);
         libjsi3 |= 3;
      if (libjsi3 == eactb.length) {
         eactb = `${x_title9.length}`;
      }
         helperu -= parseInt(`${latn7}`);
      if (3 < (4 % (Math.max(2, eactb.length))) && (parseFloat(`${eactb.length}`) / (Math.max(10, latn7))) < 2.54) {
         latn7 += parseFloat(`${1 | eactb.length}`);
      }
       let tooltipsm = String.fromCharCode(97,112,112,101,114,97,110,99,101,95,51,95,53,50,0);
          let kuaishouW = String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,95,109,95,52,49,0);
         tooltipsm += `${3 >> (Math.min(1, kuaishouW.length))}`;
      xadsdk6 = libjsi3 <= saveB;
      if (successi) {
         break;
      }
   } while (successi && (!xadsdk6 || scoreL.length == 4));
      humidityx += `${(minimizeg == String.fromCharCode(80,0) ? (dialogL ? 2 : 4) : minimizeg.length)}`;
      

      minimizeg = `${1 / (Math.max(parseInt(`${saveB}`), 1))}`;
   let bdxadsdks = xadsdk6 ? !xadsdk6 : xadsdk6;
   do {
      xadsdk6 = (scoreL.length / (Math.max(5, parseInt(`${saveB}`)))) > 18;
      if (bdxadsdks) {
         break;
      }
   } while ((!xadsdk6 && scoreL.length < 2) && bdxadsdks);
      try {

      libturbomodulejsijnip = "2";
      inviteV += 2 + libturbomodulejsijnip.length;
        if (await InAppBrowser.isAvailable()) {

      inviteV += (1 * (dialogL ? 3 : 5));
       let themer = String.fromCharCode(113,95,51,50,95,102,105,120,117,112,0);
       let thailandB: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,95,108,95,51,51,0),String.fromCharCode(109,95,56,52,95,115,101,101,107,116,97,98,108,101,0)], [String.fromCharCode(114,101,115,121,110,99,95,101,95,54,49,0),String.fromCharCode(113,100,109,99,95,107,95,57,56,0)]]);
       let androidK = String.fromCharCode(101,95,51,50,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0);
          let middleb = 4.0;
         themer += "2";
         middleb -= parseInt(`${middleb}`);
      for (let e = 0; e < 1; e++) {
         thailandB = new Map([[`${thailandB.size}`, 2]]);
      }
         androidK = `${themer.length}`;
      if (3 <= (2 << (Math.min(4, Math.abs(thailandB.size))))) {
         thailandB.set(`${themer}`, 3);
      }
      while (androidK.endsWith(themer)) {
          let loadingY: Array<any> = [104, 263, 616];
          let currentr: Map<any, any> = new Map([[String.fromCharCode(110,95,51,49,95,117,108,111,110,103,0),117], [String.fromCharCode(118,95,56,56,95,113,117,111,116,97,0),219]]);
          let q_imager = 0;
         themer = `${3 & themer.length}`;
         loadingY = [loadingY.length];
         currentr.set(`${q_imager}`, loadingY.length);
         q_imager ^= currentr.size;
         break;
      }
       let telemetryW = String.fromCharCode(102,95,54,56,95,111,98,117,115,0);
         telemetryW = `${(themer == String.fromCharCode(65,0) ? thailandB.size : themer.length)}`;
         androidK += `${themer.length & 1}`;
       let basketballx: Map<any, any> = new Map([[String.fromCharCode(108,95,50,48,95,105,110,105,116,105,97,108,105,122,101,0),false ], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,53,95,56,57,0),true ], [String.fromCharCode(105,95,55,51,95,102,108,117,115,104,105,110,103,0),false ]]);
       let usernamew: Map<any, any> = new Map([[String.fromCharCode(117,109,98,114,101,108,108,97,95,105,95,53,53,0),String.fromCharCode(99,100,97,116,101,95,55,95,51,57,0)], [String.fromCharCode(114,101,99,111,100,101,95,117,95,54,49,0),String.fromCharCode(112,114,111,100,117,99,101,95,52,95,49,51,0)]]);
      xadsdk6 = null == thailandB.get(`${xadsdk6}`);
          await InAppBrowser.open(url);
        } else {

   while (dialogL) {
       let merger8: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,105,110,111,117,116,0),734], [String.fromCharCode(116,109,109,98,114,95,122,95,52,51,0),631], [String.fromCharCode(122,95,56,54,95,97,118,103,98,108,117,114,0),464]]);
          let favicono = String.fromCharCode(99,114,101,97,116,105,118,101,95,112,95,57,0);
          let resendK = String.fromCharCode(109,95,54,50,95,118,105,115,105,116,111,114,0);
          let volumeZ = String.fromCharCode(105,109,99,100,97,116,97,95,119,95,53,51,0);
         merger8.set(resendK, merger8.size % (Math.max(8, resendK.length)));
         favicono = `${2 & volumeZ.length}`;
         volumeZ += `${volumeZ.length}`;
      for (let j = 0; j < 3; j++) {
          let hooksm = true;
          let loadingx = String.fromCharCode(114,97,100,105,97,108,95,98,95,54,49,0);
          let policyg = String.fromCharCode(114,101,112,108,97,99,101,95,109,95,49,48,0);
          let interstitialI = 5.0;
          let attributedstringQ = String.fromCharCode(112,97,114,116,105,99,108,101,115,95,55,95,49,57,0);
         merger8.set(attributedstringQ, parseInt(`${interstitialI}`) / (Math.max(6, attributedstringQ.length)));
         hooksm = loadingx.length == policyg.length;
         loadingx += `${((hooksm ? 1 : 4) % 2)}`;
         policyg = `${policyg.length}`;
         interstitialI *= ((hooksm ? 1 : 5));
      }
          let circleJ = true;
          let editV = 5.0;
         merger8 = new Map([[`${editV}`, ((circleJ ? 4 : 3) % (Math.max(2, parseInt(`${editV}`))))]]);
      dialogL = humidityx.endsWith(`${xadsdk6}`);
      break;
   }
   for (let j = 0; j < 2; j++) {
       let textinputj = 0;
       let greenb = String.fromCharCode(105,110,116,105,95,118,95,50,56,0);
      if (2 > greenb.length) {
          let zhubof: Array<any> = [644, 5, 770];
          let helperJ = String.fromCharCode(111,95,57,53,95,114,101,112,114,101,115,101,110,116,115,0);
          let searchbar_ = 5;
         greenb = `${textinputj ^ searchbar_}`;
         zhubof = [zhubof.length | 3];
         helperJ += `${3 << (Math.min(5, helperJ.length))}`;
         searchbar_ /= Math.max(1, 2);
      }
      if (1 <= greenb.length) {
         greenb = `${textinputj}`;
      }
         greenb = `${(String.fromCharCode(84,0) == greenb ? textinputj : greenb.length)}`;
      for (let s = 0; s < 3; s++) {
          let backwardT = String.fromCharCode(97,99,116,105,111,110,95,49,95,52,51,0);
          let heartI = 3.0;
          let libflipperw = String.fromCharCode(118,97,108,117,101,115,95,54,95,49,53,0);
         greenb += `${backwardT.length}`;
         backwardT += `${libflipperw.length / 3}`;
         heartI *= parseFloat(`${parseInt(`${heartI}`) >> (Math.min(libflipperw.length, 3))}`);
      }
      while (!greenb.includes(`${textinputj}`)) {
          let libavfilterw = 5.0;
          let activitym = 0.0;
         textinputj ^= parseInt(`${libavfilterw}`);
         libavfilterw /= Math.max(4, parseFloat(`${2 * parseInt(`${activitym}`)}`));
         activitym -= parseInt(`${activitym}`);
         break;
      }
         textinputj /= Math.max(2, 4);
      dialogL = greenb.length < 58;
   }
          Linking.openURL(url);
        }
      } catch (e) {

      saveB *= ((dialogL ? 3 : 3) % (Math.max(parseInt(`${saveB}`), 4)));
      dialogL = !libturbomodulejsijnip.includes(`${xadsdk6}`);
        Linking.openURL(url);
      }
    } else {

      scoreL += `${(String.fromCharCode(110,0) == scoreL ? humidityx.length : scoreL.length)}`;
      dialogL = humidityx == String.fromCharCode(102,0);
      

   if (1 == minimizeg.length) {
      dialogL = (parseInt(`${saveB}`) * libturbomodulejsijnip.length) > 67;
   }
   if (minimizeg == String.fromCharCode(108,0)) {
       let send6 = String.fromCharCode(101,120,116,101,110,115,105,111,110,95,98,95,56,53,0);
       let plusx = String.fromCharCode(110,95,49,50,95,112,97,108,101,116,116,101,0);
         send6 += "1";
      if (send6.length == 3) {
         send6 += `${(plusx == String.fromCharCode(100,0) ? send6.length : plusx.length)}`;
      }
         plusx += `${send6.length << (Math.min(4, plusx.length))}`;
         plusx = `${(plusx == String.fromCharCode(55,0) ? plusx.length : send6.length)}`;
       let orangeu = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,107,95,52,56,0);
       let starv = String.fromCharCode(112,95,53,55,95,108,105,98,114,115,118,103,0);
      for (let u = 0; u < 1; u++) {
          let libtang: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,97,114,107,101,114,0),264], [String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,51,95,53,56,0),549], [String.fromCharCode(100,101,99,114,101,109,101,110,116,95,121,95,50,50,0),353]]);
          let more0 = String.fromCharCode(106,95,53,49,95,112,97,115,115,112,111,114,116,0);
         orangeu = `${more0.length}`;
         libtang.set(`${libtang.size}`, libtang.size + 3);
         more0 += `${libtang.size}`;
      }
      scoreL += `${parseInt(`${inviteV}`)}`;
   }
      Linking.openURL(url);
    }

    if (onPress)

      dialogL = scoreL.length < 3 && dialogL;
   let memberL = minimizeg.length <= 9033512;
   do {
       let rewindn = false;
       let blackN: Array<any> = [820, 928];
       let condensedC = 4.0;
       let station2: Array<any> = [363, 16];
       let graphicsL = true;
         blackN = [3 - blackN.length];
         blackN = [(parseInt(`${condensedC}`) << (Math.min(1, Math.abs((graphicsL ? 2 : 2)))))];
      let renewQ = station2.length >= 5646552;
      do {
         station2.push(1);
         if (renewQ) {
            break;
         }
      } while (renewQ && (station2.length > 2));
          let mbjscommonz: Array<any> = [221, 929];
          let soundi = 3.0;
         blackN = [station2.length];
         mbjscommonz.push(mbjscommonz.length);
         soundi += parseFloat(`${1}`);
         condensedC /= Math.max((parseFloat(`${station2.length ^ (rewindn ? 1 : 3)}`)), 1);
         blackN = [blackN.length / (Math.max(2, 4))];
       let stringR = 3.0;
       let matches0 = 3.0;
       let clearm: Map<any, any> = new Map([[String.fromCharCode(105,112,111,100,95,52,95,53,53,0),940], [String.fromCharCode(103,95,56,53,95,102,114,101,97,100,0),432], [String.fromCharCode(97,115,102,99,114,121,112,116,95,56,95,53,53,0),930]]);
      let manifestC = 8944240 <= clearm.size;
      do {
         clearm = new Map([[`${clearm.size}`, (clearm.size & (graphicsL ? 5 : 1))]]);
         if (manifestC) {
            break;
         }
      } while (manifestC && (rewindn));
         condensedC -= parseFloat(`${clearm.size ^ 3}`);
       let actions1 = String.fromCharCode(121,95,55,50,95,97,114,101,113,117,101,115,116,0);
      while (rewindn) {
          let relatedL = false;
         rewindn = (17 == (actions1.length >> (Math.min(5, Math.abs((!rewindn ? 17 : actions1.length))))));
         relatedL = !relatedL;
         break;
      }
       let topicI = 5;
         condensedC += parseFloat(`${2 & parseInt(`${stringR}`)}`);
      let floatingG = graphicsL ? !graphicsL : graphicsL;
      do {
          let watchO: Map<any, any> = new Map([[String.fromCharCode(104,95,50,51,95,102,108,105,112,0),202], [String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,103,95,57,57,0),897], [String.fromCharCode(115,105,100,101,95,106,95,55,49,0),300]]);
          let sentryT = 5.0;
          let pangler = 1.0;
         graphicsL = station2.includes(topicI);
         watchO.set(`${sentryT}`, watchO.size * parseInt(`${sentryT}`));
         pangler *= parseFloat(`${2}`);
         if (floatingG) {
            break;
         }
      } while ((!graphicsL && 4.61 == (condensedC + 3.18)) && floatingG);
      minimizeg = `${1 & dycreatorv.length}`;
      if (memberL) {
         break;
      }
   } while (memberL && (humidityx == minimizeg));
      onPress({
        slot_id: bannerAd.ads_slot_id,
        id: bannerAd.ads_id,
        title: bannerAd.ads_event_title,
        name: bannerAd.ads_name,
      });
  };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 5,
      }}
      onPress={redirectToAd}>
      <FastImage
        source={{
          uri: bannerAd?.ads_pic,
        }}
        style={{width: '100%', aspectRatio: 64 / 10, borderRadius: 8}}
        resizeMode={'contain'}
        useFastImage={true}
      />
    </TouchableOpacity>
  );
};
