

class IconwatchYellowanimationliveOr {
    static rewardGreyarrowupDesc = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FastImage from '../common/wawa_iconarrowrightblack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {wawaLeaguedetailsbgMbbid} from '@type/wawa_gradlew';
import {useEffect} from 'react';

interface wawaAwayShow {
  bannerAd: wawaLeaguedetailsbgMbbid;
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

export const BannerContainer = ({bannerAd, onMount, onPress}: wawaAwayShow) => {
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
       let baselineH: Array<any> = [345, 621, 723];
    let iconuserF = 5.0;
    let applen: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,110,97,105,108,95,122,95,54,0),88], [String.fromCharCode(115,95,51,95,114,101,115,116,114,105,99,116,105,111,110,115,0),446]]);
    let bellreminderF = String.fromCharCode(98,95,54,52,95,97,114,109,111,110,121,0);
    let telegramp = 0;
    let showmoreo = 4.0;
    let sheetg = 1.0;
    let largesounda = String.fromCharCode(98,95,50,95,106,100,109,97,115,116,101,114,0);
    let mbnativeadvancedZ = 3.0;
    let crossJ: Array<any> = [758, 112, 346];
    let holderH = 4.0;
    let gemfile4 = String.fromCharCode(109,111,117,115,101,95,109,95,57,56,0);
   if (4.16 < (4.22 / (Math.max(7, sheetg)))) {
       let dacccfaabfbcbadeebddcabacdffdbX: Array<any> = [774, 654];
      while (2 <= (dacccfaabfbcbadeebddcabacdffdbX.length << (Math.min(1, dacccfaabfbcbadeebddcabacdffdbX.length)))) {
          let typingloading9: Array<any> = [897, 411, 375];
         dacccfaabfbcbadeebddcabacdffdbX = [typingloading9.length % 1];
         break;
      }
      while (3 >= (dacccfaabfbcbadeebddcabacdffdbX.length ^ 5) && (dacccfaabfbcbadeebddcabacdffdbX.length ^ 5) >= 5) {
         dacccfaabfbcbadeebddcabacdffdbX.push(dacccfaabfbcbadeebddcabacdffdbX.length);
         break;
      }
         dacccfaabfbcbadeebddcabacdffdbX = [2 - dacccfaabfbcbadeebddcabacdffdbX.length];
      sheetg *= 2 << (Math.min(4, dacccfaabfbcbadeebddcabacdffdbX.length));
   }
   let containerb = baselineH.length >= 5140672;
   do {
      baselineH.push(baselineH.length >> (Math.min(3, Math.abs(parseInt(`${holderH}`)))));
      if (containerb) {
         break;
      }
   } while (containerb && (1 == (telegramp << (Math.min(Math.abs(4), 3)))));

    const url =
      bannerAd.ads_url.includes(IconwatchYellowanimationliveOr.rewardGreyarrowupDesc([-90,-70,-70,-66,-67,-12,-31,-31,-50],0xCE,false)) ||
      bannerAd.ads_url.includes(IconwatchYellowanimationliveOr.rewardGreyarrowupDesc([-119,-107,-107,-111,-37,-50,-50,-31],0xE1,false))
        ? bannerAd.ads_url
        : IconwatchYellowanimationliveOr.rewardGreyarrowupDesc([-90,-70,-70,-66,-67,-12,-31,-31,-50],0xCE,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

       let bgvipsportT: Array<any> = [425, 144];
       let xadsdkH = 2.0;
       let rankI: Map<any, any> = new Map([[String.fromCharCode(117,95,53,54,95,115,116,114,114,101,115,101,116,0),917], [String.fromCharCode(104,95,52,54,95,112,114,101,100,105,99,116,105,111,110,0),613], [String.fromCharCode(98,95,57,50,95,115,119,102,112,108,97,121,101,114,0),70]]);
      while (!Array.from(rankI.keys()).includes(`${xadsdkH}`)) {
         xadsdkH /= Math.max(4, parseFloat(`${parseInt(`${xadsdkH}`)}`));
         break;
      }
          let textlayoutmanagerw = String.fromCharCode(118,99,120,112,114,111,106,95,116,95,57,55,0);
          let iconbellactive4: Map<any, any> = new Map([[String.fromCharCode(115,95,55,48,95,100,105,118,105,100,101,100,0),644], [String.fromCharCode(115,95,54,52,95,117,110,112,117,98,108,105,115,104,0),960]]);
          let short_pK = false;
         bgvipsportT = [iconbellactive4.size / (Math.max(7, rankI.size))];
         textlayoutmanagerw += `${((short_pK ? 2 : 4) * textlayoutmanagerw.length)}`;
         iconbellactive4 = new Map([[`${short_pK}`, (textlayoutmanagerw == String.fromCharCode(86,0) ? (short_pK ? 2 : 4) : textlayoutmanagerw.length)]]);
         xadsdkH += parseFloat(`${3 >> (Math.min(2, bgvipsportT.length))}`);
         rankI = new Map([[`${rankI.size}`, bgvipsportT.length >> (Math.min(Math.abs(1), 2))]]);
      for (let h = 0; h < 2; h++) {
         xadsdkH += parseFloat(`${parseInt(`${xadsdkH}`) - 3}`);
      }
      for (let g = 0; g < 3; g++) {
         rankI = new Map([[`${bgvipsportT.length}`, 3 - bgvipsportT.length]]);
      }
      let videovarh = 4912095.0 <= xadsdkH;
      do {
         xadsdkH += parseFloat(`${rankI.size >> (Math.min(Math.abs(3), 5))}`);
         if (videovarh) {
            break;
         }
      } while (((xadsdkH / 3.52) >= 3.24 && 1.26 >= (xadsdkH / 3.52)) && videovarh);
      let bang9 = xadsdkH >= 6126966.0;
      do {
         xadsdkH *= parseFloat(`${parseInt(`${xadsdkH}`)}`);
         if (bang9) {
            break;
         }
      } while ((bgvipsportT.includes(xadsdkH)) && bang9);
      if (3.42 >= xadsdkH) {
          let bellk = String.fromCharCode(114,116,115,112,99,111,100,101,115,95,119,95,50,57,0);
          let a_unlock4 = 0.0;
          let homeinactiveQ = String.fromCharCode(100,111,117,103,108,97,115,95,98,95,53,51,0);
          let cornerkickp = 1;
         rankI = new Map([[`${a_unlock4}`, bellk.length]]);
         bellk = "1";
         a_unlock4 += parseFloat(`${cornerkickp}`);
         homeinactiveQ += `${(String.fromCharCode(76,0) == homeinactiveQ ? homeinactiveQ.length : cornerkickp)}`;
      }
      iconuserF /= Math.max(5, parseFloat(`${parseInt(`${mbnativeadvancedZ}`)}`));
   let mintegralm = 6532688.0 >= sheetg;
   do {
       let caste = 3.0;
          let mbnativeadvancedn: Array<any> = [352, 292];
         caste -= mbnativeadvancedn.length + 3;
      while (3.52 > (3.21 + caste)) {
         caste *= parseInt(`${caste}`) ^ parseInt(`${caste}`);
         break;
      }
       let sendg: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,114,111,117,110,100,105,110,103,0),String.fromCharCode(97,115,99,101,110,116,95,102,95,53,50,0)], [String.fromCharCode(118,95,51,52,95,104,101,114,101,0),String.fromCharCode(101,120,105,115,116,115,95,118,95,56,49,0)], [String.fromCharCode(108,95,56,56,95,102,105,101,108,100,109,97,116,99,104,0),String.fromCharCode(103,95,51,50,95,105,115,111,108,97,116,101,0)]]);
      sheetg -= 3 | parseInt(`${mbnativeadvancedZ}`);
      if (mintegralm) {
         break;
      }
   } while ((4.87 > (iconuserF * sheetg)) && mintegralm);
      

      iconuserF += parseFloat(`${crossJ.length}`);
   for (let u = 0; u < 3; u++) {
      holderH *= parseInt(`${showmoreo}`) | baselineH.length;
   }
      try {

   if ((crossJ.length + largesounda.length) >= 2) {
      crossJ = [parseInt(`${holderH}`)];
   }
   let dialog1 = String.fromCharCode(117,54,54,119,0) == largesounda;
   do {
      largesounda += `${parseInt(`${sheetg}`)}`;
      if (dialog1) {
         break;
      }
   } while (((1.84 * mbnativeadvancedZ) < 5.45 && 4.18 < (1.84 * mbnativeadvancedZ)) && dialog1);
        if (await InAppBrowser.isAvailable()) {

      showmoreo += 1;
   let cornerU = 7191847 >= telegramp;
   do {
       let mbridgel = 0.0;
       let flagj = String.fromCharCode(101,95,52,56,95,99,111,110,118,111,108,117,116,105,111,110,0);
       let googleE: Array<any> = [String.fromCharCode(99,108,99,112,95,100,95,49,55,0), String.fromCharCode(112,95,53,49,95,99,111,110,102,105,114,109,97,116,105,111,110,0)];
       let successw = String.fromCharCode(110,116,101,114,110,97,108,95,114,95,56,50,0);
          let playershirtb = true;
         flagj = `${parseInt(`${mbridgel}`)}`;
         playershirtb = (playershirtb ? playershirtb : !playershirtb);
       let uploadR = 5;
       let adultP = 0;
         successw = `${3 + uploadR}`;
         uploadR <<= Math.min(3, Math.abs(flagj.length ^ parseInt(`${mbridgel}`)));
      let sportZ = 6669327 <= adultP;
      do {
          let expandc = 5.0;
          let bellw = 1.0;
          let logoW = String.fromCharCode(99,95,53,54,95,100,105,115,112,108,97,121,0);
          let basketballiconW = 3;
          let smallsoundH = String.fromCharCode(119,114,105,116,101,99,111,112,121,95,114,95,57,50,0);
         adultP <<= Math.min(3, Math.abs((successw == String.fromCharCode(67,0) ? successw.length : googleE.length)));
         expandc += basketballiconW;
         bellw -= parseFloat(`${parseInt(`${expandc}`)}`);
         logoW += `${parseInt(`${bellw}`) ^ parseInt(`${expandc}`)}`;
         basketballiconW &= 1 ^ parseInt(`${bellw}`);
         smallsoundH = `${smallsoundH.length}`;
         if (sportZ) {
            break;
         }
      } while (sportZ && (1 > (adultP ^ 2)));
      for (let o = 0; o < 2; o++) {
          let traminix = String.fromCharCode(119,95,56,57,95,102,99,116,108,0);
          let graph6 = 0;
         mbridgel *= parseFloat(`${googleE.length >> (Math.min(Math.abs(3), 1))}`);
         traminix = `${traminix.length}`;
         graph6 += graph6;
      }
         googleE = [adultP];
       let penaltyshootf = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,55,95,52,54,0);
       let chatF = String.fromCharCode(100,95,48,95,109,115,103,115,109,0);
      let icontransferclubZ = uploadR >= 8615611;
      do {
          let sansc: Map<any, any> = new Map([[String.fromCharCode(122,95,51,95,110,97,109,101,100,0),String.fromCharCode(115,109,112,116,101,95,118,95,53,50,0)], [String.fromCharCode(97,99,107,95,97,95,55,52,0),String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,49,95,55,50,0)]]);
         uploadR /= Math.max((penaltyshootf == String.fromCharCode(106,0) ? parseInt(`${mbridgel}`) : penaltyshootf.length), 1);
         sansc = new Map([[`${sansc.size}`, sansc.size << (Math.min(Math.abs(1), 1))]]);
         if (icontransferclubZ) {
            break;
         }
      } while (icontransferclubZ && (5 <= adultP));
       let halffieldimagew = String.fromCharCode(117,114,108,95,108,95,55,57,0);
       let bellm = String.fromCharCode(100,95,54,56,95,97,112,105,115,0);
      for (let d = 0; d < 1; d++) {
         uploadR ^= 2 & successw.length;
      }
          let coreR = String.fromCharCode(111,95,51,53,95,99,111,109,112,101,110,115,97,116,101,100,0);
          let libreactr = 4;
         bellm = "3";
         coreR = `${(coreR == String.fromCharCode(108,0) ? libreactr : coreR.length)}`;
         libreactr |= libreactr ^ 3;
      telegramp *= 3;
      if (cornerU) {
         break;
      }
   } while (cornerU && (4 >= bellreminderF.length));
          await InAppBrowser.open(url);
        } else {

   while ((5.98 - mbnativeadvancedZ) >= 3.88 && 2 >= (telegramp | 2)) {
      mbnativeadvancedZ += parseInt(`${sheetg}`) & 2;
      break;
   }
      applen = new Map([[`${crossJ.length}`, parseInt(`${holderH}`)]]);
          Linking.openURL(url);
        }
      } catch (e) {

       let success2 = 0;
       let sportb: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,105,110,103,95,98,95,55,48,0),true ], [String.fromCharCode(114,101,106,101,99,116,105,111,110,95,100,95,49,55,0),false ], [String.fromCharCode(101,120,105,115,116,115,95,55,95,53,50,0),false ]]);
       let iconeyel = 5.0;
         sportb = new Map([[`${success2}`, parseInt(`${iconeyel}`)]]);
         iconeyel *= parseFloat(`${parseInt(`${iconeyel}`) * 1}`);
      if (1 == (3 | success2)) {
          let collectionH: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,50,95,50,56,0),411], [String.fromCharCode(115,117,99,99,101,115,115,111,114,95,57,95,51,49,0),113]]);
          let editv: Map<any, any> = new Map([[String.fromCharCode(98,111,111,116,115,116,114,97,112,95,102,95,51,57,0),71], [String.fromCharCode(101,118,101,114,121,95,53,95,54,50,0),495], [String.fromCharCode(108,95,49,56,95,115,117,98,116,114,101,101,0),311]]);
          let mbbid4 = 4.0;
          let homeactivep = String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,49,95,56,53,0);
         success2 <<= Math.min(4, Math.abs(collectionH.size));
         collectionH = new Map([[`${editv.size}`, editv.size]]);
         mbbid4 += parseFloat(`${homeactivep.length >> (Math.min(2, Math.abs(editv.size)))}`);
         homeactivep = `${parseInt(`${mbbid4}`) % 1}`;
      }
      let linez = 8993509 <= sportb.size;
      do {
         sportb = new Map([[`${sportb.size}`, sportb.size ^ success2]]);
         if (linez) {
            break;
         }
      } while (linez && (5 >= sportb.size));
      for (let t = 0; t < 1; t++) {
          let step3: Array<any> = [311, 128];
         success2 ^= sportb.size << (Math.min(step3.length, 4));
      }
      for (let q = 0; q < 1; q++) {
         sportb = new Map([[`${sportb.size}`, sportb.size & 1]]);
      }
         iconeyel -= parseFloat(`${sportb.size | parseInt(`${iconeyel}`)}`);
      while (Array.from(sportb.values()).includes(success2)) {
         sportb.set(`${success2}`, success2);
         break;
      }
         iconeyel *= parseFloat(`${3 + parseInt(`${iconeyel}`)}`);
      bellreminderF += `${sportb.size}`;
       let scheduleG = String.fromCharCode(110,95,53,52,95,114,101,113,117,101,115,116,101,114,115,0);
         scheduleG += "1";
      let constantsX = 5209197 >= scheduleG.length;
      do {
         scheduleG = `${scheduleG.length >> (Math.min(Math.abs(1), 5))}`;
         if (constantsX) {
            break;
         }
      } while (constantsX && (scheduleG == scheduleG));
          let libfbz = String.fromCharCode(109,95,57,50,95,115,108,111,112,0);
          let baiduI = 5.0;
         scheduleG = `${scheduleG.length}`;
         libfbz += "3";
         baiduI /= Math.max(parseFloat(`${3 | parseInt(`${baiduI}`)}`), 1);
      iconuserF += parseFloat(`${applen.size >> (Math.min(Math.abs(1), 2))}`);
        Linking.openURL(url);
      }
    } else {

   for (let d = 0; d < 1; d++) {
       let goallogoY: Array<any> = [500, 659];
       let libavdevicex = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,105,95,52,54,0);
      for (let f = 0; f < 1; f++) {
         libavdevicex += `${goallogoY.length * libavdevicex.length}`;
      }
       let iconarrowrightorangeL = 4;
       let clubh = 5;
      for (let v = 0; v < 1; v++) {
          let thailandG = String.fromCharCode(114,101,102,108,101,99,116,95,120,95,57,54,0);
         iconarrowrightorangeL -= 1;
         thailandG = `${thailandG.length}`;
      }
         libavdevicex = `${libavdevicex.length * goallogoY.length}`;
       let arrowupA = String.fromCharCode(105,95,49,55,95,105,110,116,112,0);
       let privatechatbgZ = String.fromCharCode(100,105,115,99,95,106,95,56,56,0);
      while ((arrowupA.length / (Math.max(7, iconarrowrightorangeL))) <= 3 && 4 <= (iconarrowrightorangeL / 3)) {
          let redcirclebgx: Array<any> = [553, 433];
          let bottomC = 2;
         arrowupA = `${redcirclebgx.length}`;
         redcirclebgx = [1 | bottomC];
         bottomC &= bottomC % (Math.max(3, 4));
         break;
      }
      crossJ.push(goallogoY.length);
   }
       let googles = String.fromCharCode(114,97,109,112,117,112,95,107,95,57,49,0);
       let inactiveP = String.fromCharCode(116,95,56,53,95,105,100,105,111,109,0);
       let handlerJ = 1;
      if ((1 | googles.length) < 1 && (googles.length | handlerJ) < 1) {
         googles += `${handlerJ >> (Math.min(googles.length, 3))}`;
      }
      let orangeK = 6576201 >= inactiveP.length;
      do {
          let airbnbstarf = 2;
          let whistleC = 0.0;
          let forwardM: Array<any> = [String.fromCharCode(103,114,111,117,112,99,97,108,108,95,113,95,55,51,0), String.fromCharCode(104,108,105,110,101,95,103,95,57,49,0)];
         inactiveP = `${googles.length | 1}`;
         airbnbstarf %= Math.max(2, 4);
         whistleC += parseFloat(`${airbnbstarf}`);
         forwardM = [forwardM.length << (Math.min(2, Math.abs(parseInt(`${whistleC}`))))];
         if (orangeK) {
            break;
         }
      } while (orangeK && (2 > (5 | inactiveP.length) || 5 > (inactiveP.length | 5)));
      let e_countd = 8877475 >= handlerJ;
      do {
         handlerJ <<= Math.min(Math.abs(handlerJ), 1);
         if (e_countd) {
            break;
         }
      } while (e_countd && (handlerJ >= googles.length));
         inactiveP += `${handlerJ / (Math.max(7, inactiveP.length))}`;
      if (2 <= (1 / (Math.max(7, inactiveP.length))) || 3 <= (1 / (Math.max(7, inactiveP.length)))) {
         inactiveP += `${(String.fromCharCode(75,0) == googles ? googles.length : handlerJ)}`;
      }
      for (let r = 0; r < 1; r++) {
         inactiveP += `${3 << (Math.min(4, inactiveP.length))}`;
      }
         inactiveP = `${1 | handlerJ}`;
      if (5 < (inactiveP.length % (Math.max(5, handlerJ))) && 5 < (handlerJ % (Math.max(4, inactiveP.length)))) {
          let predictionwinB = false;
          let binddatasY = 0.0;
         inactiveP = `${((predictionwinB ? 1 : 5) ^ parseInt(`${binddatasY}`))}`;
      }
      let vnewsu = inactiveP == String.fromCharCode(118,95,107,114,104,105,97,0);
      do {
          let short_8ke: Map<any, any> = new Map([[String.fromCharCode(103,95,55,54,95,115,118,97,114,105,110,116,0),true ], [String.fromCharCode(113,117,97,108,105,116,121,95,122,95,55,56,0),false ], [String.fromCharCode(102,95,52,52,95,118,97,114,116,105,109,101,0),true ]]);
          let activityK: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,100,101,113,117,111,116,101,0),706], [String.fromCharCode(105,102,97,115,116,95,101,95,53,0),454]]);
          let h_locku = String.fromCharCode(116,120,104,97,115,104,95,118,95,53,49,0);
          let searchq = 0.0;
          let homeactiveN = 5;
         inactiveP = `${3 | inactiveP.length}`;
         short_8ke.set(h_locku, 1 << (Math.min(4, h_locku.length)));
         activityK = new Map([[`${activityK.size}`, homeactiveN]]);
         searchq *= 1;
         homeactiveN /= Math.max((String.fromCharCode(76,0) == h_locku ? homeactiveN : h_locku.length), 3);
         if (vnewsu) {
            break;
         }
      } while (vnewsu && (!inactiveP.startsWith(`${handlerJ}`)));
      sheetg -= bellreminderF.length >> (Math.min(Math.abs(2), 5));
      

      applen = new Map([[`${crossJ.length}`, parseInt(`${showmoreo}`)]]);
       let refresht: Array<any> = [899, 377];
       let goalU: Map<any, any> = new Map([[String.fromCharCode(113,95,56,56,0),205], [String.fromCharCode(100,101,110,111,105,115,101,95,53,95,54,49,0),643], [String.fromCharCode(99,97,108,99,117,108,97,116,101,95,116,95,54,56,0),158]]);
       let bgvipxvodf = 1.0;
       let predictionloss5 = String.fromCharCode(105,102,114,97,109,101,95,53,95,53,50,0);
       let homeinactivez = String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,113,95,56,54,0);
       let hooksE = String.fromCharCode(104,95,54,55,95,108,105,116,116,108,101,0);
      let component1 = 6745082 >= goalU.size;
      do {
         goalU = new Map([[hooksE, hooksE.length + 2]]);
         if (component1) {
            break;
         }
      } while (component1 && (!predictionloss5.includes(`${goalU.size}`)));
       let expandV = String.fromCharCode(121,95,57,48,95,116,111,110,101,109,97,112,0);
         bgvipxvodf *= parseFloat(`${refresht.length & homeinactivez.length}`);
         goalU.set(`${bgvipxvodf}`, refresht.length / 1);
         refresht.push(expandV.length ^ homeinactivez.length);
      let libreactperfloggerjniR = expandV == String.fromCharCode(57,112,110,122,98,97,48,122,57,0);
      do {
         expandV += `${hooksE.length | 3}`;
         if (libreactperfloggerjniR) {
            break;
         }
      } while (((4 ^ expandV.length) >= 2 || 1 >= (4 ^ goalU.size)) && libreactperfloggerjniR);
      while (!hooksE.includes(expandV)) {
          let views_ = 2.0;
          let episodei = false;
          let backiconmaskv = 1.0;
          let playZ = false;
         expandV += `${(2 - (episodei ? 1 : 4))}`;
         views_ -= parseFloat(`${3 - parseInt(`${backiconmaskv}`)}`);
         episodei = !playZ && 10.40 <= views_;
         backiconmaskv += (parseFloat(`${parseInt(`${views_}`) / (Math.max(5, (playZ ? 4 : 1)))}`));
         break;
      }
      showmoreo /= Math.max(4, parseInt(`${bgvipxvodf}`));
      Linking.openURL(url);
    }

    if (onPress)

   while ((parseInt(`${mbnativeadvancedZ}`) + largesounda.length) <= 3) {
      largesounda = "2";
      break;
   }
      showmoreo /= Math.max(parseInt(`${holderH}`), 1);
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
