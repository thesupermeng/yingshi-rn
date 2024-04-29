

class LinkRules {
    static bootsplashSmallMiddle = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FastImage from '../common/tt_connection';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {ttAnalytics} from '@type/tt_line_borderless';
import {useEffect} from 'react';

interface ttSmall {
  bannerAd: ttAnalytics;
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

export const BannerContainer = ({bannerAd, onMount, onPress}: ttSmall) => {
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
       let awayE = String.fromCharCode(107,95,49,57,95,120,116,101,110,115,105,111,110,0);
    let flippero = false;
    let time_hF: Array<any> = [497, 172];
    let phoneH = 3.0;
    let filedY: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,95,49,95,55,52,0),true ], [String.fromCharCode(114,97,112,112,101,114,95,114,95,56,50,0),true ]]);
    let playh = String.fromCharCode(102,114,101,113,115,95,105,95,56,49,0);
    let middlewarer: Map<any, any> = new Map([[String.fromCharCode(101,95,54,57,95,119,105,110,100,111,119,105,110,103,0),233], [String.fromCharCode(106,95,50,54,0),177]]);
    let headerx = 4.0;
    let dplusy: Array<any> = [187, 391, 773];
    let unreadA = true;
    let backward2 = 3.0;
    let sansj = 5.0;
    let ballo = true;
    let chatH = 4;
    let e_lockI = String.fromCharCode(112,95,56,95,109,118,115,97,100,0);
       let gradlewX = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,56,95,50,54,0);
       let anythinkH = String.fromCharCode(112,114,111,112,111,115,101,114,95,55,95,52,49,0);
       let faviconv = String.fromCharCode(117,95,57,52,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
       let overK: Array<any> = [788, 591, 511];
       let description_np: Array<any> = [380, 63, 491];
      if (5 == (overK.length - anythinkH.length)) {
          let temperatureU = String.fromCharCode(106,95,55,95,97,116,111,109,105,99,115,0);
          let policye = 0.0;
          let gradlewW = true;
          let dialog1: Array<any> = [String.fromCharCode(117,114,112,111,115,101,95,99,95,49,51,0), String.fromCharCode(113,95,57,95,114,101,110,111,114,109,101,0)];
         anythinkH = `${(faviconv == String.fromCharCode(54,0) ? (gradlewW ? 2 : 3) : faviconv.length)}`;
         temperatureU = "1";
         policye += parseFloat(`${3 | dialog1.length}`);
         gradlewW = (policye / (Math.max(parseFloat(`${dialog1.length}`), 3))) > 5.47;
      }
         description_np.push(1 + faviconv.length);
      for (let v = 0; v < 1; v++) {
         gradlewX = `${anythinkH.length + 1}`;
      }
      let str2 = 8455380 >= overK.length;
      do {
         overK.push(anythinkH.length);
         if (str2) {
            break;
         }
      } while (str2 && (faviconv.includes(`${overK.length}`)));
         faviconv = `${faviconv.length}`;
      if ((description_np.length ^ 1) <= 2) {
         overK.push(overK.length | 3);
      }
      if (3 > overK.length) {
          let alert3 = 5.0;
          let turnY = true;
          let borderlessZ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,110,116,115,95,114,95,55,54,0),264], [String.fromCharCode(117,95,50,49,95,115,101,113,117,101,110,99,101,114,0),360], [String.fromCharCode(116,95,55,55,95,98,101,116,97,0),316]]);
         anythinkH = `${(anythinkH == String.fromCharCode(101,0) ? (turnY ? 2 : 1) : anythinkH.length)}`;
         alert3 -= parseFloat(`${borderlessZ.size - parseInt(`${alert3}`)}`);
         turnY = borderlessZ.get(`${alert3}`) != null;
      }
      if ((faviconv.length % 4) > 5 || 3 > (faviconv.length % 4)) {
          let edit1 = String.fromCharCode(102,95,50,49,95,113,117,97,110,116,0);
          let libcrashsdkq = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,52,95,54,53,0);
         overK.push(3);
         edit1 = `${2 ^ libcrashsdkq.length}`;
         libcrashsdkq += `${edit1.length}`;
      }
      headerx -= filedY.size << (Math.min(4, Math.abs(parseInt(`${phoneH}`))));
       let style6 = 4.0;
       let anythinkHN = String.fromCharCode(104,111,108,100,101,114,95,103,95,50,55,0);
         style6 += parseFloat(`${2}`);
      if (5 > (1 >> (Math.min(5, anythinkHN.length))) || 1 > (anythinkHN.length + parseInt(`${style6}`))) {
         anythinkHN = `${1 - anythinkHN.length}`;
      }
      if (anythinkHN.length > parseInt(`${style6}`)) {
         anythinkHN = "1";
      }
       let dangerD: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,0),584], [String.fromCharCode(105,95,55,51,95,114,101,106,101,99,116,101,100,0),532], [String.fromCharCode(98,108,97,99,107,111,117,116,95,99,95,49,48,0),689]]);
          let chart7 = String.fromCharCode(120,95,49,57,95,99,102,102,116,105,0);
         dangerD = new Map([[`${dangerD.size}`, dangerD.size]]);
         chart7 = `${chart7.length}`;
          let bufferF: Map<any, any> = new Map([[String.fromCharCode(119,95,56,55,95,99,97,108,108,105,115,116,111,0),true ], [String.fromCharCode(119,101,105,103,104,116,120,95,98,95,51,51,0),true ], [String.fromCharCode(98,95,51,51,95,97,117,100,105,101,110,99,101,0),true ]]);
         dangerD = new Map([[`${bufferF.size}`, 1]]);
      middlewarer = new Map([[`${filedY.size}`, (String.fromCharCode(107,0) == anythinkHN ? anythinkHN.length : filedY.size)]]);

    const url =
      bannerAd.ads_url.includes(LinkRules.bootsplashSmallMiddle([-103,-123,-123,-127,-126,-53,-34,-34,-15],0xF1,false)) ||
      bannerAd.ads_url.includes(LinkRules.bootsplashSmallMiddle([-110,-114,-114,-118,-64,-43,-43,-6],0xFA,false))
        ? bannerAd.ads_url
        : LinkRules.bootsplashSmallMiddle([-103,-123,-123,-127,-126,-53,-34,-34,-15],0xF1,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

      unreadA = awayE.length > 86 || !flippero;
   for (let a = 0; a < 1; a++) {
      unreadA = 18 >= dplusy.length;
   }
      

      playh = `${awayE.length >> (Math.min(Math.abs(2), 2))}`;
      unreadA = !unreadA;
      try {

   if (5.91 == headerx) {
      headerx /= Math.max(5, parseInt(`${phoneH}`) - 3);
   }
   if (awayE.includes(`${unreadA}`)) {
      awayE += "1";
   }
        if (await InAppBrowser.isAvailable()) {

   let otherz = flippero ? !flippero : flippero;
   do {
      flippero = 35.11 >= sansj;
      if (otherz) {
         break;
      }
   } while (otherz && (flippero && awayE.length == 5));
      phoneH += (parseFloat(`${String.fromCharCode(66,0) == playh ? dplusy.length : playh.length}`));
          await InAppBrowser.open(url);
        } else {

   for (let e = 0; e < 3; e++) {
       let bridgeB = String.fromCharCode(117,110,112,97,99,107,95,117,95,54,52,0);
       let leagueA = false;
       let unreado = String.fromCharCode(115,95,57,53,0);
         leagueA = bridgeB == unreado;
      for (let e = 0; e < 1; e++) {
         bridgeB = `${(bridgeB.length & (leagueA ? 1 : 4))}`;
      }
      while (unreado.endsWith(`${leagueA}`)) {
         unreado = `${unreado.length + 2}`;
         break;
      }
         unreado = `${(String.fromCharCode(67,0) == bridgeB ? (leagueA ? 4 : 3) : bridgeB.length)}`;
      while (bridgeB.endsWith(`${leagueA}`)) {
         leagueA = unreado == bridgeB;
         break;
      }
         leagueA = !unreado.includes(`${leagueA}`);
      for (let g = 0; g < 1; g++) {
         unreado = `${(String.fromCharCode(106,0) == unreado ? unreado.length : (leagueA ? 1 : 2))}`;
      }
      while (leagueA) {
         leagueA = unreado.length < 68 && !leagueA;
         break;
      }
          let roundX = 1.0;
         unreado += `${(bridgeB.length | (leagueA ? 3 : 4))}`;
         roundX += parseInt(`${roundX}`) & parseInt(`${roundX}`);
      unreadA = dplusy.includes(phoneH);
   }
      time_hF.push(((unreadA ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${phoneH}`)), 5))));
          Linking.openURL(url);
        }
      } catch (e) {

   if (3.21 >= phoneH) {
       let auto_u6T: Array<any> = [307, 247, 592];
       let fillA = String.fromCharCode(102,95,50,95,100,101,103,114,101,101,115,0);
       let tickedl = 1.0;
       let text_ = 1.0;
          let dropdownS = String.fromCharCode(120,95,52,50,95,111,99,115,112,0);
         auto_u6T.push(fillA.length - parseInt(`${tickedl}`));
         dropdownS += `${dropdownS.length | dropdownS.length}`;
          let popupM: Map<any, any> = new Map([[String.fromCharCode(114,95,51,48,95,99,111,110,118,101,114,115,105,111,110,115,0),930], [String.fromCharCode(100,111,116,116,101,100,95,105,95,54,56,0),286], [String.fromCharCode(118,95,52,56,95,109,112,101,103,112,115,0),971]]);
          let eact5 = 4.0;
         tickedl /= Math.max(4, popupM.size);
         popupM = new Map([[`${eact5}`, parseInt(`${eact5}`)]]);
         fillA += `${parseInt(`${tickedl}`) - auto_u6T.length}`;
      while ((fillA.length * text_) == 5.50 && 2 == (parseInt(`${text_}`) * 3)) {
          let emptyI = 0;
         fillA += `${fillA.length}`;
         emptyI |= 1;
         break;
      }
          let videojs0: Array<any> = [747, 577];
          let google9 = 2;
          let securityt = 2;
         fillA += `${2 + auto_u6T.length}`;
         videojs0.push(videojs0.length * 1);
         google9 <<= Math.min(4, Math.abs(securityt | google9));
         securityt /= Math.max(5, videojs0.length + 3);
      for (let j = 0; j < 3; j++) {
         tickedl += parseInt(`${text_}`) & 1;
      }
       let utilsA = String.fromCharCode(99,108,105,112,95,57,95,53,51,0);
       let ewarded_ = String.fromCharCode(108,117,116,100,95,115,95,55,52,0);
         ewarded_ += "2";
         tickedl /= Math.max(3, 3);
      if ((5 >> (Math.min(5, ewarded_.length))) == 5) {
         text_ *= fillA.length;
      }
          let product1: Map<any, any> = new Map([[String.fromCharCode(110,97,103,108,101,95,104,95,49,50,0),928], [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,52,95,49,53,0),280], [String.fromCharCode(105,95,57,49,95,105,110,115,116,101,97,100,0),205]]);
          let desce: Map<any, any> = new Map([[String.fromCharCode(121,95,55,53,95,112,101,97,107,0),125], [String.fromCharCode(105,95,54,50,95,112,114,101,115,101,100,0),171], [String.fromCharCode(99,95,49,52,95,102,114,97,109,101,104,97,115,104,0),771]]);
          let foregroundI = String.fromCharCode(112,95,55,54,95,97,116,111,98,111,111,108,0);
         tickedl -= auto_u6T.length & 2;
         product1.set(`${foregroundI}`, 1 / (Math.max(8, foregroundI.length)));
         desce = new Map([[`${product1.size}`, desce.size]]);
         tickedl /= Math.max(2, parseInt(`${text_}`) / 1);
      phoneH -= parseFloat(`${parseInt(`${sansj}`) * 1}`);
   }
       let formv = 3.0;
       let tumbnailc = false;
       let friendsq = String.fromCharCode(97,98,103,114,95,110,95,54,0);
      if (1.69 <= formv) {
         formv -= parseInt(`${formv}`) - 1;
      }
         friendsq += `${friendsq.length}`;
      for (let s = 0; s < 2; s++) {
         tumbnailc = tumbnailc && friendsq.length < 55;
      }
          let bannerC: Array<any> = [String.fromCharCode(117,110,115,97,118,101,95,101,95,50,51,0), String.fromCharCode(108,105,110,109,97,116,104,95,53,95,51,51,0), String.fromCharCode(100,120,116,111,114,121,95,112,95,54,52,0)];
          let championb = 4;
          let rewind2 = String.fromCharCode(97,95,55,48,95,115,117,98,112,101,101,114,0);
         tumbnailc = championb <= parseInt(`${formv}`);
         bannerC = [3];
         championb <<= Math.min(2, Math.abs(1));
         rewind2 = `${rewind2.length}`;
      for (let k = 0; k < 3; k++) {
          let plashl: Array<any> = [509, 70, 492];
          let entry2 = 5.0;
          let logouto = true;
          let holderv = false;
         formv -= 3;
         plashl = [3];
         entry2 /= Math.max(3, parseFloat(`${2}`));
      }
         friendsq += `${1 / (Math.max(9, parseInt(`${formv}`)))}`;
          let expiredz = 1.0;
         formv *= 3 * parseInt(`${formv}`);
         expiredz += parseFloat(`${parseInt(`${expiredz}`)}`);
         friendsq = "3";
       let policyX: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,117,112,108,101,95,54,95,56,48,0),997], [String.fromCharCode(109,97,120,100,98,115,95,99,95,54,53,0),562], [String.fromCharCode(104,95,50,56,95,103,101,116,108,97,100,100,114,115,0),496]]);
       let texti: Map<any, any> = new Map([[String.fromCharCode(114,105,99,104,95,111,95,56,52,0),679], [String.fromCharCode(115,115,114,99,95,116,95,54,50,0),693], [String.fromCharCode(100,95,53,48,95,100,101,112,101,110,100,115,0),831]]);
      phoneH += (parseFloat(`${1 << (Math.min(2, Math.abs((ballo ? 2 : 1))))}`));
        Linking.openURL(url);
      }
    } else {

      flippero = middlewarer.size <= 74 && phoneH <= 22.53;
   for (let r = 0; r < 3; r++) {
       let yellowM = 1;
       let gmailV: Array<any> = [String.fromCharCode(109,111,100,101,115,95,121,95,49,48,48,0), String.fromCharCode(97,95,51,57,95,115,108,111,119,0)];
       let closeS = 2;
      for (let j = 0; j < 2; j++) {
         yellowM >>= Math.min(Math.abs(closeS << (Math.min(Math.abs(2), 1))), 5);
      }
         gmailV = [gmailV.length >> (Math.min(2, Math.abs(yellowM)))];
          let videocommonA: Map<any, any> = new Map([[String.fromCharCode(115,95,57,52,95,102,116,121,112,0),77], [String.fromCharCode(120,95,57,56,95,97,103,101,110,116,0),933]]);
         gmailV = [closeS];
         videocommonA = new Map([[`${videocommonA.size}`, 3]]);
         yellowM >>= Math.min(2, Math.abs(yellowM));
          let episodesR = String.fromCharCode(118,95,52,50,95,112,111,115,116,102,105,108,116,101,114,0);
         gmailV = [closeS ^ 1];
         episodesR = `${episodesR.length}`;
         gmailV = [2 ^ gmailV.length];
      while (gmailV.includes(yellowM)) {
          let applicationR = 4;
          let unreadR: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,48,95,50,57,0),882], [String.fromCharCode(106,95,49,49,95,102,102,109,97,108,0),716], [String.fromCharCode(119,95,51,52,95,114,101,99,105,112,105,101,110,116,115,0),665]]);
         yellowM *= closeS;
         applicationR |= applicationR;
         unreadR = new Map([[`${unreadR.size}`, 1 & unreadR.size]]);
         break;
      }
         yellowM += closeS * 1;
      for (let o = 0; o < 3; o++) {
         yellowM %= Math.max(2, 1);
      }
      flippero = headerx == phoneH;
   }
      

   while (ballo || (3 << (Math.min(5, dplusy.length))) >= 3) {
      ballo = unreadA;
      break;
   }
   while (4 <= (parseInt(`${phoneH}`) / (Math.max(time_hF.length, 10)))) {
      time_hF.push(time_hF.length);
      break;
   }
      Linking.openURL(url);
    }

    if (onPress)

   while (Array.from(filedY.values()).includes(dplusy.length)) {
       let gesturesP: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,117,110,114,101,109,111,118,97,98,108,101,0),648], [String.fromCharCode(98,95,56,52,95,99,114,111,108,108,0),651]]);
       let sideY = 4;
      let updatesf = 8509495 <= gesturesP.size;
      do {
         gesturesP = new Map([[`${gesturesP.size}`, sideY % (Math.max(gesturesP.size, 7))]]);
         if (updatesf) {
            break;
         }
      } while (updatesf && ((1 * gesturesP.size) > 4 || 1 > (sideY * 1)));
         gesturesP.set(`${sideY}`, 3 | sideY);
      for (let k = 0; k < 1; k++) {
          let mappinge = String.fromCharCode(97,114,114,97,121,115,105,122,101,95,101,95,52,49,0);
          let zooml = String.fromCharCode(100,105,102,102,120,95,53,95,57,50,0);
         sideY -= mappinge.length;
         mappinge = `${zooml.length / 1}`;
         zooml = `${(zooml == String.fromCharCode(75,0) ? zooml.length : zooml.length)}`;
      }
      while (4 == (gesturesP.size & sideY)) {
          let updatesr: Map<any, any> = new Map([[String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,102,95,53,50,0),270], [String.fromCharCode(111,112,101,110,115,115,108,95,120,95,52,55,0),663]]);
          let traminiT: Array<any> = [280, 766, 845];
          let applicationl = String.fromCharCode(112,114,111,109,111,116,101,100,95,111,95,51,55,0);
          let refreshi = false;
         gesturesP = new Map([[`${gesturesP.size}`, 3 * gesturesP.size]]);
         updatesr.set(`${refreshi}`, updatesr.size);
         traminiT.push(traminiT.length - updatesr.size);
         applicationl = `${(2 >> (Math.min(2, Math.abs((refreshi ? 1 : 4)))))}`;
         break;
      }
      while (gesturesP.get(`${sideY}`) == null) {
          let megaphonem = String.fromCharCode(105,102,97,99,116,111,114,95,105,95,57,56,0);
          let notificationZ = 4;
          let libcrashsdku = String.fromCharCode(118,95,55,95,99,104,97,110,103,101,114,0);
          let stringsM = String.fromCharCode(121,95,57,95,100,101,116,101,99,116,99,108,111,115,101,0);
          let clear0 = String.fromCharCode(99,97,110,99,101,108,108,101,100,95,122,95,55,50,0);
         sideY %= Math.max(2, 4);
         megaphonem = "2";
         notificationZ |= 1 | stringsM.length;
         libcrashsdku = `${3 & megaphonem.length}`;
         stringsM = `${1 - megaphonem.length}`;
         clear0 += `${megaphonem.length}`;
         break;
      }
          let blacklistU: Map<any, any> = new Map([[String.fromCharCode(114,97,110,100,111,109,105,122,101,95,118,95,57,52,0),false ], [String.fromCharCode(100,116,100,102,95,115,95,53,53,0),true ]]);
          let blackz = String.fromCharCode(118,95,50,57,95,100,105,115,112,111,115,97,98,108,101,115,0);
          let time_a1: Array<any> = [683, 148, 569];
         sideY -= gesturesP.size;
         blacklistU.set(`${blackz}`, blacklistU.size);
         blackz = `${(blackz == String.fromCharCode(108,0) ? blackz.length : time_a1.length)}`;
         time_a1 = [3];
      dplusy.push(3 - sideY);
      break;
   }
   if (3.66 < phoneH) {
       let teamn: Map<any, any> = new Map([[String.fromCharCode(115,95,53,56,95,114,101,102,105,110,101,109,101,110,116,0),521], [String.fromCharCode(98,95,55,57,95,112,114,101,109,105,117,109,0),872], [String.fromCharCode(101,120,112,110,97,100,101,100,95,48,95,54,51,0),889]]);
       let privilegeB = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,57,95,56,48,0);
       let selectI = 1;
       let castm = String.fromCharCode(122,95,57,53,95,115,105,103,0);
       let injuryn = 5.0;
         castm += `${teamn.size >> (Math.min(Math.abs(3), 2))}`;
         privilegeB = `${selectI | castm.length}`;
       let videoI = 3.0;
         videoI *= parseFloat(`${teamn.size}`);
          let vignetteB = 5;
          let forwardd = 3;
          let pathS = 5;
         teamn = new Map([[`${teamn.size}`, teamn.size]]);
         vignetteB |= forwardd | 1;
         forwardd ^= 2;
         pathS -= vignetteB;
          let benefitc = String.fromCharCode(105,95,56,50,95,105,109,103,117,116,105,108,115,0);
         injuryn /= Math.max(4, parseFloat(`${privilegeB.length & parseInt(`${injuryn}`)}`));
         benefitc = "2";
          let predictionq: Array<any> = [124, 373];
          let layoutf = String.fromCharCode(100,95,52,53,95,108,105,109,105,116,101,114,0);
         teamn.set(`${selectI}`, selectI);
         predictionq.push(layoutf.length * 2);
         layoutf += `${predictionq.length % (Math.max(9, layoutf.length))}`;
      for (let t = 0; t < 3; t++) {
          let policyU: Array<any> = [676, 411];
          let abouti = String.fromCharCode(110,112,112,115,99,97,108,101,95,53,95,56,50,0);
          let videof = String.fromCharCode(109,95,50,50,95,115,116,97,99,107,115,0);
          let championA = true;
         privilegeB = `${2 >> (Math.min(Math.abs(parseInt(`${videoI}`)), 5))}`;
         policyU = [videof.length];
         abouti = `${3 % (Math.max(8, abouti.length))}`;
         videof += "3";
      }
      if (5 == (teamn.size | 1) || 5 == (1 | castm.length)) {
         teamn = new Map([[`${teamn.size}`, teamn.size]]);
      }
         castm += `${castm.length - selectI}`;
          let mbsplashs = String.fromCharCode(99,95,55,56,95,99,111,118,101,114,105,110,103,0);
         castm = `${teamn.size & parseInt(`${videoI}`)}`;
         mbsplashs = `${mbsplashs.length}`;
      for (let o = 0; o < 3; o++) {
          let detailsi = String.fromCharCode(115,101,97,114,99,104,101,100,95,100,95,49,0);
         teamn = new Map([[privilegeB, 2 * parseInt(`${videoI}`)]]);
         detailsi = `${detailsi.length}`;
      }
      while ((injuryn - videoI) > 1.31) {
         injuryn *= parseFloat(`${parseInt(`${injuryn}`)}`);
         break;
      }
         privilegeB = `${parseInt(`${injuryn}`)}`;
         privilegeB = "3";
      flippero = filedY.size == 38;
   }
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
