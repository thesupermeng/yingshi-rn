

class PenaltyAbidetectBenefit {
    static hashFieldPush = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FastImage from '../common/mayi_slider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {mayi_Room} from '@type/mayi_green';
import {useEffect} from 'react';

interface mayi_GoogleViews {
  bannerAd: mayi_Room;
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

export const BannerContainer = ({bannerAd, onMount, onPress}: mayi_GoogleViews) => {
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
       let dependency8: Map<any, any> = new Map([[String.fromCharCode(113,95,54,52,95,112,97,103,101,104,97,115,104,0),314], [String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,97,95,49,49,0),377], [String.fromCharCode(104,97,98,108,101,95,113,95,55,57,0),3]]);
    let stats_: Map<any, any> = new Map([[String.fromCharCode(100,95,54,49,95,114,105,112,101,109,100,0),312], [String.fromCharCode(116,114,120,116,95,117,95,56,52,0),892]]);
    let homeM = 1.0;
    let predictionwinF = String.fromCharCode(105,95,50,56,95,108,111,103,105,99,97,108,0);
    let valuesr: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,95,108,95,50,50,0),233], [String.fromCharCode(111,95,50,51,95,100,99,97,100,97,116,97,0),697], [String.fromCharCode(112,114,111,109,105,115,105,102,121,95,121,95,49,53,0),875]]);
    let libffmpegkitx = String.fromCharCode(119,114,105,116,101,114,95,105,95,51,55,0);
    let release_0w = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,116,95,50,53,0);
    let neonP = 5.0;
    let componentregistryI = 2.0;
    let verticall: Array<any> = [String.fromCharCode(105,95,53,48,95,115,104,97,100,105,110,103,0), String.fromCharCode(118,105,115,105,116,95,117,95,55,50,0)];
    let tempnodatau: Array<any> = [739, 870];
    let default_kN = String.fromCharCode(115,108,105,99,101,95,107,95,57,48,0);
    let episodesH = 1.0;
    let reactnavigationR: Array<any> = [580, 162];
    let forwardq: Map<any, any> = new Map([[String.fromCharCode(97,95,53,56,95,112,108,97,121,0),853], [String.fromCharCode(117,115,105,110,103,95,52,95,49,48,48,0),548]]);
    let backwhiteE = 0.0;
    let miniG = String.fromCharCode(118,112,120,100,101,99,95,56,95,52,51,0);
    let basketballtrophy5 = 3.0;
   while (4 <= (parseInt(`${neonP}`) / (Math.max(4, dependency8.size))) && (5.98 / (Math.max(2, neonP))) <= 2.8) {
       let successj: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,105,95,52,48,0),55], [String.fromCharCode(99,95,56,49,95,97,117,116,111,100,101,116,101,99,116,0),899]]);
         successj.set(`${successj.size}`, successj.size + 2);
      for (let b = 0; b < 3; b++) {
         successj = new Map([[`${successj.size}`, successj.size]]);
      }
         successj.set(`${successj.size}`, successj.size);
      neonP += parseFloat(`${1}`);
      break;
   }
   if (neonP >= 2.88) {
      tempnodatau = [3 % (Math.max(8, release_0w.length))];
   }

    const url =
      bannerAd.ads_url.includes(PenaltyAbidetectBenefit.hashFieldPush([-93,-65,-65,-69,-72,-15,-28,-28,-53],0xCB,false)) ||
      bannerAd.ads_url.includes(PenaltyAbidetectBenefit.hashFieldPush([35,63,63,59,113,100,100,75],0x4B,false))
        ? bannerAd.ads_url
        : PenaltyAbidetectBenefit.hashFieldPush([-93,-65,-65,-69,-72,-15,-28,-28,-53],0xCB,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

   for (let t = 0; t < 1; t++) {
      componentregistryI /= Math.max(2, parseFloat(`${libffmpegkitx.length - parseInt(`${homeM}`)}`));
   }
      verticall.push(default_kN.length % 2);
      

       let castingp = 4;
      for (let o = 0; o < 2; o++) {
         castingp ^= 3 * castingp;
      }
       let commonG = 1;
       let update_qpN = 3;
      if (commonG <= 1) {
          let firebasei = String.fromCharCode(97,95,57,49,95,115,111,117,110,100,115,0);
          let controlsb = String.fromCharCode(111,95,55,52,95,118,99,100,115,112,0);
          let spinnerH = String.fromCharCode(115,108,102,95,107,95,53,56,0);
          let windx = 0.0;
          let o_lockZ = String.fromCharCode(99,111,109,112,97,110,121,95,103,95,55,54,0);
         commonG *= o_lockZ.length << (Math.min(2, Math.abs(parseInt(`${windx}`))));
         firebasei += `${2 ^ firebasei.length}`;
         controlsb = `${firebasei.length}`;
         spinnerH = `${firebasei.length}`;
         windx += (String.fromCharCode(80,0) == firebasei ? spinnerH.length : firebasei.length);
         o_lockZ += `${3 + controlsb.length}`;
      }
      tempnodatau = [parseInt(`${homeM}`) & 3];
       let trophyD = String.fromCharCode(115,99,104,101,100,117,108,101,114,95,116,95,55,50,0);
      let phoner = trophyD.length <= 7038381;
      do {
         trophyD = `${trophyD.length + trophyD.length}`;
         if (phoner) {
            break;
         }
      } while ((!trophyD.includes(trophyD)) && phoner);
      if (trophyD.endsWith(trophyD)) {
         trophyD += `${trophyD.length}`;
      }
          let signinupN = String.fromCharCode(104,95,52,49,0);
          let minit_oe = String.fromCharCode(119,95,54,53,95,109,105,103,114,97,116,101,100,0);
         trophyD += `${trophyD.length << (Math.min(signinupN.length, 1))}`;
         signinupN += `${minit_oe.length / (Math.max(2, 7))}`;
         minit_oe += "2";
      valuesr = new Map([[`${tempnodatau.length}`, tempnodatau.length]]);
      try {

       let footballU = String.fromCharCode(101,95,53,49,95,100,101,115,105,103,110,0);
       let inouttargetredn: Array<any> = [245, 312];
       let rewardj = String.fromCharCode(116,95,48,95,99,104,111,115,101,0);
         rewardj = `${1 - inouttargetredn.length}`;
      while (2 == footballU.length) {
          let tnewarchdefaultsO = String.fromCharCode(114,101,99,117,114,115,101,95,122,95,51,49,0);
          let calendarK = String.fromCharCode(113,95,52,48,95,115,98,112,114,111,0);
          let rocketU = false;
          let predictionbannersharedj = true;
         inouttargetredn = [2];
         tnewarchdefaultsO = `${calendarK.length & 3}`;
         calendarK = `${calendarK.length}`;
         rocketU = calendarK == tnewarchdefaultsO;
         predictionbannersharedj = 40 < calendarK.length && tnewarchdefaultsO == String.fromCharCode(77,0);
         break;
      }
      for (let r = 0; r < 2; r++) {
         rewardj += `${footballU.length}`;
      }
       let textlayoutmanager3 = 0.0;
         textlayoutmanager3 += parseFloat(`${rewardj.length}`);
         textlayoutmanager3 *= parseFloat(`${rewardj.length + footballU.length}`);
      for (let v = 0; v < 3; v++) {
          let textlayoutmanager3I: Array<any> = [862, 300];
         rewardj += `${rewardj.length}`;
         textlayoutmanager3I.push(1);
      }
       let component9 = 0;
      let imagesi = component9 <= 7970577;
      do {
          let forwardL = true;
          let foregroundv = true;
          let libsentryx = 2.0;
          let stylesC = String.fromCharCode(116,118,100,99,95,106,95,49,57,0);
          let borderlessr = 3;
         component9 += 2;
         forwardL = stylesC.endsWith(`${borderlessr}`);
         foregroundv = forwardL;
         libsentryx += parseFloat(`${stylesC.length}`);
         borderlessr *= borderlessr;
         if (imagesi) {
            break;
         }
      } while (((rewardj.length - component9) < 3) && imagesi);
      tempnodatau.push(inouttargetredn.length);
      release_0w = `${predictionwinF.length}`;
        if (await InAppBrowser.isAvailable()) {

   for (let p = 0; p < 3; p++) {
      verticall.push(parseInt(`${componentregistryI}`) | 3);
   }
      predictionwinF += `${parseInt(`${neonP}`) + tempnodatau.length}`;
          await InAppBrowser.open(url);
        } else {

      stats_ = new Map([[`${dependency8.size}`, predictionwinF.length & dependency8.size]]);
      predictionwinF = `${stats_.size}`;
          Linking.openURL(url);
        }
      } catch (e) {

      neonP *= parseFloat(`${1 % (Math.max(2, stats_.size))}`);
   while (dependency8.size == 5) {
      release_0w += `${3 * parseInt(`${componentregistryI}`)}`;
      break;
   }
        Linking.openURL(url);
      }
    } else {

   let videocommonl = String.fromCharCode(108,104,56,122,107,120,55,0) == default_kN;
   do {
       let teamdetailsbgk = 4.0;
       let shrinkZ = String.fromCharCode(113,95,49,51,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0);
       let roboto9: Array<any> = [280, 30];
       let station7: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,112,105,99,116,121,112,101,0),false ], [String.fromCharCode(114,101,109,111,118,101,95,108,95,57,51,0),false ]]);
          let tailv = String.fromCharCode(102,95,50,57,95,116,101,97,109,115,0);
          let libjsinspectorh = 2;
          let basketballtrophy2 = 2.0;
         teamdetailsbgk *= parseFloat(`${parseInt(`${teamdetailsbgk}`)}`);
         tailv += `${(tailv == String.fromCharCode(121,0) ? libjsinspectorh : tailv.length)}`;
         libjsinspectorh >>= Math.min(4, Math.abs(parseInt(`${basketballtrophy2}`) << (Math.min(2, Math.abs(libjsinspectorh)))));
         basketballtrophy2 -= parseFloat(`${parseInt(`${basketballtrophy2}`) * 1}`);
         roboto9.push(shrinkZ.length / (Math.max(7, roboto9.length)));
          let vignettej = 0.0;
         teamdetailsbgk += parseFloat(`${parseInt(`${vignettej}`)}`);
      for (let i = 0; i < 1; i++) {
          let encryptorN: Array<any> = [String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,108,95,57,52,0), String.fromCharCode(110,95,54,95,98,97,114,114,105,101,114,0), String.fromCharCode(101,95,57,53,95,103,101,116,116,105,109,101,0)];
          let tempnodataL = 2;
          let panglec: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,99,101,110,116,101,114,0),594], [String.fromCharCode(100,101,99,98,110,95,111,95,51,50,0),69], [String.fromCharCode(108,97,116,109,95,100,95,57,50,0),200]]);
          let pangles = 2;
          let sellmathbackgroundp: Array<any> = [945, 151];
         shrinkZ += `${tempnodataL - 3}`;
         encryptorN = [sellmathbackgroundp.length];
         tempnodataL -= panglec.size << (Math.min(encryptorN.length, 5));
         panglec.set(`${sellmathbackgroundp.length}`, sellmathbackgroundp.length);
         pangles %= Math.max(3, 4);
      }
         shrinkZ += `${roboto9.length << (Math.min(2, Math.abs(station7.size)))}`;
          let iconarrowrightorangeC = 5.0;
          let cornershootl = true;
          let elementsz = String.fromCharCode(110,95,50,95,119,112,116,104,114,101,97,100,115,0);
         teamdetailsbgk += (parseFloat(`${parseInt(`${teamdetailsbgk}`) - (cornershootl ? 5 : 1)}`));
         iconarrowrightorangeC -= elementsz.length / 1;
         cornershootl = !elementsz.endsWith(`${iconarrowrightorangeC}`);
      for (let w = 0; w < 3; w++) {
         shrinkZ += `${station7.size}`;
      }
          let bridge7 = 3.0;
         shrinkZ = "2";
         bridge7 += parseFloat(`${parseInt(`${bridge7}`)}`);
      while (5.58 >= (parseFloat(`${station7.size}`) + teamdetailsbgk) || (teamdetailsbgk + 5.58) >= 1.31) {
          let iconeditK: Array<any> = [217, 528];
         station7 = new Map([[`${iconeditK.length}`, iconeditK.length]]);
         break;
      }
      if (shrinkZ.length > parseInt(`${teamdetailsbgk}`)) {
         teamdetailsbgk += parseFloat(`${roboto9.length % (Math.max(1, 7))}`);
      }
          let predictiondefaultW = 0.0;
          let basketballtrophy2w = 5.0;
         teamdetailsbgk /= Math.max(parseFloat(`${parseInt(`${predictiondefaultW}`)}`), 1);
         basketballtrophy2w /= Math.max(3, 4);
          let whiteanimationliveM = 2;
          let defaultteamN = 0.0;
         shrinkZ += `${shrinkZ.length}`;
         whiteanimationliveM /= Math.max(whiteanimationliveM, 2);
         defaultteamN += parseFloat(`${whiteanimationliveM + 2}`);
      default_kN = `${2 << (Math.min(5, Math.abs(stats_.size)))}`;
      if (videocommonl) {
         break;
      }
   } while (videocommonl && (1 < (4 * default_kN.length) && (stats_.size * 4) < 3));
   if (1 == (stats_.size | 2)) {
      stats_.set(default_kN, default_kN.length - parseInt(`${componentregistryI}`));
   }
      

   for (let t = 0; t < 1; t++) {
      release_0w += "2";
   }
   let stationS = 5290400 >= tempnodatau.length;
   do {
      tempnodatau = [1];
      if (stationS) {
         break;
      }
   } while (((stats_.size ^ 5) >= 5 && 1 >= (5 ^ stats_.size)) && stationS);
      Linking.openURL(url);
    }

    if (onPress)

       let with_hC: Array<any> = [30, 753];
       let iconclosewhiteY = 3.0;
       let shared8 = 0.0;
         shared8 /= Math.max(3, parseFloat(`${with_hC.length | 1}`));
      for (let y = 0; y < 2; y++) {
         with_hC.push(3 >> (Math.min(3, with_hC.length)));
      }
      let y_title8 = 5711938 <= with_hC.length;
      do {
          let fastZ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,103,95,56,53,0),false ], [String.fromCharCode(115,117,112,101,114,115,101,116,95,53,95,53,0),false ]]);
          let cornershootk: Array<any> = [164, 403];
          let anytime2 = false;
         with_hC.push(3 >> (Math.min(3, with_hC.length)));
         fastZ = new Map([[`${fastZ.size}`, fastZ.size]]);
         cornershootk.push(fastZ.size | cornershootk.length);
         anytime2 = cornershootk.length <= 78;
         if (y_title8) {
            break;
         }
      } while (((with_hC.length >> (Math.min(Math.abs(1), 1))) >= 1 || (1 ^ with_hC.length) >= 3) && y_title8);
      while (shared8 >= 2.34) {
         iconclosewhiteY /= Math.max(parseFloat(`${1 ^ parseInt(`${shared8}`)}`), 5);
         break;
      }
      for (let g = 0; g < 1; g++) {
          let mbbanners = String.fromCharCode(120,95,53,50,95,105,110,116,114,111,100,117,99,116,105,111,110,0);
          let topicV = 1;
          let injuryI: Map<any, any> = new Map([[String.fromCharCode(115,95,57,52,95,97,97,115,99,0),String.fromCharCode(108,95,49,48,48,95,115,108,105,99,101,99,111,110,116,101,120,116,0)], [String.fromCharCode(116,95,51,49,95,97,108,108,101,116,0),String.fromCharCode(113,95,52,51,95,102,111,108,108,111,119,0)]]);
         iconclosewhiteY /= Math.max(1, parseFloat(`${1 - with_hC.length}`));
         mbbanners = `${topicV << (Math.min(Math.abs(3), 2))}`;
         topicV &= 3;
         injuryI = new Map([[`${injuryI.size}`, injuryI.size]]);
      }
      for (let i = 0; i < 3; i++) {
          let sigmobl: Array<any> = [70, 837, 116];
          let switch_aw1 = 3;
          let iconcalendarc = 5.0;
          let iconviewergifS = String.fromCharCode(122,95,56,51,95,101,114,97,115,101,100,0);
          let moviesn = 4.0;
         iconclosewhiteY /= Math.max(parseFloat(`${parseInt(`${shared8}`)}`), 3);
         sigmobl.push(2);
         switch_aw1 >>= Math.min(2, Math.abs(2));
         iconcalendarc /= Math.max(parseFloat(`${iconviewergifS.length}`), 3);
         iconviewergifS += `${switch_aw1 / (Math.max(parseInt(`${moviesn}`), 5))}`;
         moviesn *= switch_aw1 - sigmobl.length;
      }
          let become4 = false;
          let service0: Array<any> = [451, 642];
          let selectr = String.fromCharCode(107,95,53,52,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0);
         shared8 *= (parseFloat(`${selectr == String.fromCharCode(85,0) ? parseInt(`${iconclosewhiteY}`) : selectr.length}`));
         become4 = !become4;
         service0.push(service0.length & 1);
      let alertC = iconclosewhiteY <= 6698748.0;
      do {
         iconclosewhiteY += parseFloat(`${parseInt(`${iconclosewhiteY}`)}`);
         if (alertC) {
            break;
         }
      } while ((with_hC.length <= 3) && alertC);
       let graphf = 0.0;
       let searchs = 4.0;
      neonP += parseFloat(`${parseInt(`${neonP}`) % 2}`);
       let vietnamw: Array<any> = [239, 687];
       let iconviewergifL = 1.0;
       let tumbnailr = String.fromCharCode(97,95,57,50,95,105,110,115,101,116,0);
          let mbnativeadvancedX: Array<any> = [194, 316];
          let iconwechatc: Array<any> = [String.fromCharCode(110,95,55,55,95,99,97,108,105,98,114,97,116,101,100,0), String.fromCharCode(99,101,108,101,98,114,97,116,101,95,104,95,57,57,0)];
         vietnamw = [iconwechatc.length];
         mbnativeadvancedX = [mbnativeadvancedX.length];
         iconwechatc = [3 / (Math.max(7, mbnativeadvancedX.length))];
       let megaphoneP = true;
      for (let x = 0; x < 1; x++) {
         iconviewergifL /= Math.max(((megaphoneP ? 1 : 4)), 5);
      }
       let context_ = false;
       let default_6X = true;
      while (!megaphoneP) {
          let mapping6 = String.fromCharCode(116,99,109,105,95,54,95,56,50,0);
          let soundh = String.fromCharCode(100,95,56,55,95,99,116,116,115,0);
          let helper7 = String.fromCharCode(114,111,112,115,116,101,110,95,102,95,51,50,0);
         megaphoneP = context_ && !default_6X;
         mapping6 = `${mapping6.length}`;
         soundh += `${helper7.length % (Math.max(1, 8))}`;
         helper7 += `${soundh.length}`;
         break;
      }
      if (5 < tumbnailr.length) {
         tumbnailr += `${tumbnailr.length | 3}`;
      }
         default_6X = vietnamw.includes(default_6X);
      if (megaphoneP || !default_6X) {
          let runtimeschedulerN: Map<any, any> = new Map([[String.fromCharCode(119,104,97,116,95,118,95,57,49,0),765], [String.fromCharCode(115,109,111,111,116,104,101,110,95,111,95,56,55,0),626], [String.fromCharCode(107,95,53,95,101,115,100,115,0),330]]);
          let securitye = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,113,95,57,54,0);
          let mbsplash_: Map<any, any> = new Map([[String.fromCharCode(115,95,50,55,95,108,111,119,101,114,99,97,115,101,100,0),String.fromCharCode(102,117,108,102,105,108,108,101,100,95,48,95,49,55,0)], [String.fromCharCode(108,109,100,98,95,118,95,54,51,0),String.fromCharCode(117,95,56,50,95,114,101,116,114,105,101,100,0)], [String.fromCharCode(116,102,114,102,95,108,95,57,51,0),String.fromCharCode(99,95,49,55,95,100,99,113,117,97,110,116,0)]]);
          let stringsR: Array<any> = [883, 394, 521];
         megaphoneP = stringsR.length > tumbnailr.length;
         runtimeschedulerN.set(securitye, runtimeschedulerN.size ^ securitye.length);
         mbsplash_.set(securitye, mbsplash_.size);
         stringsR = [mbsplash_.size / (Math.max(1, 4))];
      }
         context_ = vietnamw.length <= 56;
      reactnavigationR = [3];
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
