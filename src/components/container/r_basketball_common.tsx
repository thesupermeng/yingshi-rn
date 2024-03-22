

class NotificationInterstitialAgreem {
    static gpayBingVertical = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FastImage from '../common/gwi_with';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {MAboutEdit} from '@type/wpk_long';
import {useEffect} from 'react';

interface XFillButton {
  bannerAd: MAboutEdit;
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

export const BannerContainer = ({bannerAd, onMount, onPress}: XFillButton) => {
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
       let userF = String.fromCharCode(114,118,100,115,112,0);
    let dark1 = 2;
    let previewK = 0.0;
    let overlayB = String.fromCharCode(109,105,112,115,0);
    let playlistG = 0.0;
    let station8 = String.fromCharCode(100,101,112,101,110,100,115,0);
    let unselectedQ: Array<any> = [String.fromCharCode(108,105,102,101,0), String.fromCharCode(119,97,118,112,97,99,107,101,110,99,0), String.fromCharCode(99,109,111,118,0)];
    let bingE = 4;
    let temperature_: Map<any, any> = new Map([[String.fromCharCode(111,114,97,110,103,101,0),581], [String.fromCharCode(116,97,103,103,101,100,0),218]]);
    let movies4 = String.fromCharCode(117,112,116,105,109,101,0);
    let regengU = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,0);
    let field8: Array<any> = [String.fromCharCode(110,105,101,108,115,97,100,100,0), String.fromCharCode(109,97,116,99,104,101,0)];
    let sourcem = String.fromCharCode(101,114,97,115,101,0);
    let user4 = 4;
    let unread9 = String.fromCharCode(116,114,101,101,115,0);
    let alertJ = String.fromCharCode(115,111,109,101,116,104,105,110,103,0);
       let langkeyi = true;
       let homeE = 2.0;
      let dragK = langkeyi ? !langkeyi : langkeyi;
      do {
         langkeyi = homeE <= 65.18;
         if (dragK) {
            break;
         }
      } while ((2.53 > homeE) && dragK);
      while (4.70 == (1.67 / (Math.max(8, homeE)))) {
         langkeyi = homeE == 10.78 || langkeyi;
         break;
      }
          let sportc = String.fromCharCode(97,112,110,115,0);
         langkeyi = sportc.startsWith(`${langkeyi}`);
          let commentE = true;
          let modals = String.fromCharCode(114,100,101,108,116,97,0);
          let incident9 = String.fromCharCode(97,98,111,117,116,0);
         homeE += parseFloat(`${modals.length % 1}`);
         commentE = incident9.length <= 94;
         modals += `${(incident9 == String.fromCharCode(117,0) ? incident9.length : (commentE ? 5 : 1))}`;
      while ((homeE - 3.0) == 5.88 && langkeyi) {
         langkeyi = !langkeyi;
         break;
      }
      if (langkeyi) {
         langkeyi = !langkeyi;
      }
      userF = `${1 ^ regengU.length}`;
      field8.push(1);

    const url =
      bannerAd.ads_url.includes(NotificationInterstitialAgreem.gpayBingVertical([-113,-109,-109,-105,-108,-35,-56,-56,-25],0xE7,false)) ||
      bannerAd.ads_url.includes(NotificationInterstitialAgreem.gpayBingVertical([-27,-7,-7,-3,-73,-94,-94,-115],0x8D,false))
        ? bannerAd.ads_url
        : NotificationInterstitialAgreem.gpayBingVertical([-113,-109,-109,-105,-108,-35,-56,-56,-25],0xE7,false) + bannerAd.ads_url;

    if (bannerAd.ads_redirect_type === 1) {
      
      navigator.navigate('活动页', {bannerAd: bannerAd});
    } else if (bannerAd.ads_redirect_type === 2) {

       let specQ = String.fromCharCode(99,111,110,110,101,99,116,115,0);
       let collectionY = String.fromCharCode(99,111,114,100,122,0);
          let nativeO = 1.0;
         collectionY = `${parseInt(`${nativeO}`)}`;
         collectionY += `${collectionY.length | specQ.length}`;
      while (1 < collectionY.length && specQ != String.fromCharCode(74,0)) {
         specQ += `${collectionY.length % 3}`;
         break;
      }
      if (!specQ.endsWith(`${collectionY.length}`)) {
         specQ = "2";
      }
      if (collectionY != String.fromCharCode(52,0) && 2 <= specQ.length) {
         collectionY += `${specQ.length - collectionY.length}`;
      }
         specQ += `${(String.fromCharCode(103,0) == collectionY ? specQ.length : collectionY.length)}`;
      previewK += parseFloat(`${movies4.length}`);
       let ranke: Map<any, any> = new Map([[String.fromCharCode(99,97,108,105,110,103,0),349], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,0),201]]);
       let clockB = 1.0;
       let paginationu = 2.0;
      let belld = 8823940.0 <= clockB;
      do {
          let spinnerP = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,0);
          let containerf = true;
          let singaporeT = false;
          let albumm = String.fromCharCode(101,107,121,0);
          let quest2 = String.fromCharCode(115,101,108,101,99,116,111,114,0);
         clockB += parseFloat(`${1}`);
         spinnerP += `${(2 ^ (containerf ? 3 : 1))}`;
         containerf = quest2 == String.fromCharCode(104,0);
         singaporeT = (71 < ((containerf ? 71 : quest2.length) >> (Math.min(quest2.length, 2))));
         albumm += `${((containerf ? 3 : 2))}`;
         if (belld) {
            break;
         }
      } while (belld && (3.77 > (clockB + 2.1)));
      while (1.42 <= (4.78 - clockB) || 3.80 <= (clockB - 4.78)) {
         clockB /= Math.max(2, parseFloat(`${1}`));
         break;
      }
          let scoreH = String.fromCharCode(117,112,108,111,97,100,101,100,0);
         clockB /= Math.max(parseFloat(`${1 - scoreH.length}`), 5);
      while (3.94 <= (clockB / 5.18) && (ranke.size * 4) <= 2) {
         clockB /= Math.max(1, parseFloat(`${2}`));
         break;
      }
       let largeI = String.fromCharCode(100,101,99,105,109,97,108,115,0);
      if (4 >= (largeI.length ^ 4)) {
          let basketballU: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,117,103,104,112,117,116,0),805], [String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,0),173]]);
          let nativeo = 2.0;
          let register_7w = 0;
          let show9 = 4.0;
         largeI += "3";
         basketballU.set(`${nativeo}`, parseInt(`${nativeo}`) & parseInt(`${show9}`));
         register_7w -= 2;
         show9 -= basketballU.size;
      }
      let gpay_ = 6427801.0 >= paginationu;
      do {
         paginationu *= parseInt(`${clockB}`) / (Math.max(2, largeI.length));
         if (gpay_) {
            break;
         }
      } while ((2 >= (ranke.size >> (Math.min(Math.abs(4), 4)))) && gpay_);
      if (4.53 < (clockB - parseFloat(`${ranke.size}`)) && 5 < (parseInt(`${clockB}`) - ranke.size)) {
         clockB -= parseFloat(`${parseInt(`${paginationu}`) ^ 1}`);
      }
       let detailo = String.fromCharCode(122,105,112,112,101,100,0);
      regengU += `${(String.fromCharCode(82,0) == overlayB ? overlayB.length : bingE)}`;
      

      previewK *= (parseFloat(`${movies4 == String.fromCharCode(71,0) ? temperature_.size : movies4.length}`));
   while (station8.length < 2) {
       let rulesj = String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
       let nterstitial8 = 4.0;
      while (rulesj.startsWith(`${nterstitial8}`)) {
         nterstitial8 += parseFloat(`${parseInt(`${nterstitial8}`) >> (Math.min(rulesj.length, 2))}`);
         break;
      }
      if (4.45 < (nterstitial8 / 3.95)) {
         rulesj += `${parseInt(`${nterstitial8}`) << (Math.min(rulesj.length, 3))}`;
      }
      for (let f = 0; f < 3; f++) {
         nterstitial8 -= parseFloat(`${2}`);
      }
      if ((parseFloat(`${rulesj.length}`) - nterstitial8) > 4.80) {
          let trophyq = String.fromCharCode(101,114,111,100,101,0);
         nterstitial8 += parseFloat(`${rulesj.length % (Math.max(3, 1))}`);
         trophyq = `${trophyq.length + trophyq.length}`;
      }
          let header7 = String.fromCharCode(100,97,105,0);
         rulesj = `${rulesj.length}`;
         header7 += `${header7.length}`;
         nterstitial8 /= Math.max((parseFloat(`${rulesj == String.fromCharCode(85,0) ? parseInt(`${nterstitial8}`) : rulesj.length}`)), 2);
      regengU = "3";
      break;
   }
      try {

      movies4 = `${movies4.length ^ 2}`;
   if (4.8 > (3.78 / (Math.max(3, previewK))) && (previewK / (Math.max(4, parseFloat(`${movies4.length}`)))) > 3.78) {
      previewK *= parseFloat(`${station8.length}`);
   }
        if (await InAppBrowser.isAvailable()) {

      station8 = `${3 ^ movies4.length}`;
   while ((playlistG + dark1) == 5.42) {
      dark1 -= parseInt(`${previewK}`);
      break;
   }
          await InAppBrowser.open(url);
        } else {

      temperature_.set(`${bingE}`, 1);
      userF = `${bingE / (Math.max(3, 6))}`;
          Linking.openURL(url);
        }
      } catch (e) {

   if ((5 | bingE) > 5) {
      bingE ^= (String.fromCharCode(83,0) == userF ? userF.length : movies4.length);
   }
       let select8 = 4;
       let time_9vh: Array<any> = [642, 550, 41];
       let reducerL = String.fromCharCode(97,100,106,117,115,116,101,100,0);
          let modalO = String.fromCharCode(114,101,97,100,108,105,110,101,0);
         reducerL += `${(reducerL == String.fromCharCode(49,0) ? reducerL.length : time_9vh.length)}`;
         modalO += `${modalO.length ^ modalO.length}`;
      let linea = String.fromCharCode(54,50,116,98,109,115,0) == reducerL;
      do {
         reducerL = `${(reducerL == String.fromCharCode(50,0) ? time_9vh.length : reducerL.length)}`;
         if (linea) {
            break;
         }
      } while (linea && (5 > (4 ^ reducerL.length)));
      while (2 <= (1 >> (Math.min(2, Math.abs(select8))))) {
         select8 >>= Math.min(1, Math.abs(reducerL.length - time_9vh.length));
         break;
      }
       let filla = String.fromCharCode(111,112,116,105,111,110,97,108,0);
      while ((select8 + filla.length) == 2 && 4 == (2 + filla.length)) {
          let routerw = 1.0;
          let streamingm = 2.0;
          let photoE = String.fromCharCode(99,108,101,97,110,0);
         select8 <<= Math.min(Math.abs(parseInt(`${streamingm}`) << (Math.min(Math.abs(2), 5))), 3);
         routerw -= parseFloat(`${photoE.length << (Math.min(3, Math.abs(parseInt(`${routerw}`))))}`);
         streamingm += photoE.length;
         break;
      }
         reducerL += `${reducerL.length % 3}`;
      if (2 >= (select8 << (Math.min(time_9vh.length, 4))) && 4 >= (2 << (Math.min(4, Math.abs(select8))))) {
         select8 *= filla.length + time_9vh.length;
      }
       let sportsZ = 1;
      if ((time_9vh.length * select8) == 5 || 1 == (time_9vh.length * 5)) {
         time_9vh.push((filla == String.fromCharCode(99,0) ? select8 : filla.length));
      }
      userF = `${select8 / (Math.max(unselectedQ.length, 5))}`;
        Linking.openURL(url);
      }
    } else {

   while (regengU.startsWith(overlayB)) {
      overlayB = `${(String.fromCharCode(76,0) == movies4 ? userF.length : movies4.length)}`;
      break;
   }
      field8 = [3 ^ parseInt(`${playlistG}`)];
      

       let nalyticsH = String.fromCharCode(117,100,112,108,105,116,101,0);
       let line8 = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,0);
       let detailsZ: Array<any> = [877, 420];
      for (let k = 0; k < 3; k++) {
          let actiong: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,112,97,112,101,114,115,0),148], [String.fromCharCode(115,116,114,0),946], [String.fromCharCode(112,114,111,114,101,115,100,115,112,0),179]]);
          let pressureK = 2.0;
         line8 = `${detailsZ.length}`;
         actiong.set(`${pressureK}`, 1);
         pressureK += parseFloat(`${parseInt(`${pressureK}`)}`);
      }
          let downloading0 = String.fromCharCode(114,101,100,105,114,101,99,116,111,114,0);
          let listv = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0);
          let shrink8 = 3;
         nalyticsH = `${nalyticsH.length ^ line8.length}`;
         downloading0 = "2";
         listv = `${downloading0.length}`;
         shrink8 &= (String.fromCharCode(122,0) == downloading0 ? downloading0.length : listv.length);
       let x_centerJ = 3;
       let u_lockr = 1;
         nalyticsH += "3";
      for (let p = 0; p < 3; p++) {
         nalyticsH += `${nalyticsH.length * 2}`;
      }
      let phoneP = 8268635 <= detailsZ.length;
      do {
         detailsZ = [nalyticsH.length ^ line8.length];
         if (phoneP) {
            break;
         }
      } while ((4 < detailsZ.length) && phoneP);
      if (5 == (x_centerJ + u_lockr) || 5 == (u_lockr + x_centerJ)) {
         x_centerJ += nalyticsH.length;
      }
      if (line8.length > nalyticsH.length) {
         line8 += `${nalyticsH.length | 3}`;
      }
      while (1 < (4 << (Math.min(4, Math.abs(u_lockr))))) {
         detailsZ = [x_centerJ];
         break;
      }
      previewK /= Math.max(5, parseFloat(`${1}`));
      overlayB += `${2 >> (Math.min(Math.abs(dark1), 2))}`;
      Linking.openURL(url);
    }

    if (onPress)

   while ((4 * bingE) >= 5 && (4 * bingE) >= 3) {
      bingE >>= Math.min(5, Math.abs(overlayB.length >> (Math.min(Math.abs(1), 3))));
      break;
   }
   let activeW = 7854414 >= station8.length;
   do {
      station8 += `${station8.length / 2}`;
      if (activeW) {
         break;
      }
   } while (((previewK - 2.30) >= 4.40 && 4 >= (station8.length >> (Math.min(Math.abs(5), 4)))) && activeW);
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
