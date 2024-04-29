

class TumbnailLangkeyHistoryOrientat {
    static gmailGuideUsername = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useCallback, useEffect, useMemo, memo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import ScreenContainer from '../../components/container/tt_backward';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/tt_temperature';
import {
  ttAppsOther,
} from '@type/tt_line_borderless';
import { playVod } from '@redux/actions/tt_activity';
import { useAppDispatch } from '@hooks/tt_spec_download';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import VodTopicFilter from '../../components/vod/tt_china_share';
import VodCard from '../../components/vod/tt_count_stats';
import DownArrow from '@static/images/yingBallTumbnail.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/tt_connection';
import { ttAcceptedCountItem } from '@type/tt_line_borderless';

interface ttSmall {
  itemList: Array<ttAcceptedCountItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: ttAcceptedCountItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: ttSmall) {
  const { textVariants, colors, spacing, icons } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  let items = itemList.slice(0, itemsPerRow * numOfRows);

  if (selectedItem) {
    items = items.filter(i => i.id !== selectedItem.id);
  }

  const renderItems = () => {
       let infor = 4.0;
    let fastforward5: Array<any> = [271, 424, 303];
    let hooksq = 4;
    let predictionQ: Array<any> = [String.fromCharCode(112,95,50,54,95,119,97,116,101,114,0), String.fromCharCode(105,110,116,120,120,95,53,95,53,56,0), String.fromCharCode(98,95,49,48,48,95,109,111,100,0)];
    let memberw = String.fromCharCode(106,95,49,50,95,114,101,115,101,116,98,117,102,0);
    let expandZ = 3.0;
    let mbsplash3 = String.fromCharCode(116,95,56,49,95,115,104,105,112,112,105,110,103,0);
    let update_xH: Map<any, any> = new Map([[String.fromCharCode(99,95,57,52,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0),513], [String.fromCharCode(110,95,56,51,95,112,111,115,116,105,110,103,0),768], [String.fromCharCode(107,95,53,95,112,101,101,108,0),874]]);
   if (predictionQ.length <= hooksq) {
       let dropdown5 = 0.0;
       let utils_ = String.fromCharCode(112,95,57,49,95,121,117,118,116,101,115,116,0);
       let left5 = 4.0;
       let modelsQ = true;
       let heartn = false;
      for (let y = 0; y < 3; y++) {
          let typingf = String.fromCharCode(105,110,101,116,95,108,95,55,54,0);
          let maile = 0.0;
          let ying2 = String.fromCharCode(112,95,55,57,0);
          let actives = 4.0;
          let backwardB = String.fromCharCode(117,95,50,55,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
         modelsQ = backwardB.length == 24 && left5 == 25.46;
         typingf = `${parseInt(`${maile}`)}`;
         maile -= parseFloat(`${2 + typingf.length}`);
         ying2 += `${(ying2 == String.fromCharCode(98,0) ? ying2.length : parseInt(`${actives}`))}`;
         actives += parseFloat(`${2}`);
         backwardB += `${3 % (Math.max(2, typingf.length))}`;
      }
      for (let y = 0; y < 3; y++) {
          let fullR = 0.0;
          let r_playerY = 5.0;
          let fille = String.fromCharCode(112,95,50,49,95,117,110,114,111,108,108,101,100,0);
          let volumeU: Array<any> = [93, 342];
          let nalyticsH = 1.0;
         heartn = (volumeU.length / (Math.max(10, parseInt(`${nalyticsH}`)))) == 40;
         fullR -= parseFloat(`${parseInt(`${r_playerY}`)}`);
         r_playerY *= parseInt(`${r_playerY}`) - 3;
         fille = `${parseInt(`${r_playerY}`)}`;
         volumeU.push(3 ^ parseInt(`${r_playerY}`));
         nalyticsH += fille.length * 3;
      }
      if (!modelsQ) {
          let dicei = String.fromCharCode(115,116,97,116,117,115,101,115,95,109,95,49,56,0);
          let whistleA = 0.0;
         modelsQ = (((modelsQ ? 84 : dicei.length) / (Math.max(dicei.length, 8))) > 84);
         whistleA /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${whistleA}`)), 2)), 4);
      }
         dropdown5 /= Math.max(2, (parseInt(`${left5}`) - (modelsQ ? 3 : 3)));
          let overlayu = String.fromCharCode(115,114,116,99,112,95,54,95,48,0);
          let loading1 = String.fromCharCode(106,95,51,48,95,98,105,114,116,104,100,97,121,0);
          let projectc = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,111,95,53,50,0);
         dropdown5 -= 3;
         overlayu = `${projectc.length << (Math.min(Math.abs(3), 4))}`;
         loading1 = `${3 ^ projectc.length}`;
       let configurev: Array<any> = [String.fromCharCode(111,95,57,55,95,100,101,103,114,97,100,101,100,0), String.fromCharCode(110,111,110,101,95,56,95,51,48,0)];
       let guide5: Array<any> = [68, 244];
      for (let z = 0; z < 3; z++) {
         utils_ += `${(String.fromCharCode(51,0) == utils_ ? utils_.length : configurev.length)}`;
      }
          let stations9: Array<any> = [374, 432, 454];
         heartn = 28 < configurev.length;
         stations9.push(stations9.length);
      if (!utils_.includes(`${modelsQ}`)) {
         utils_ = `${((heartn ? 1 : 4))}`;
      }
         modelsQ = guide5.includes(heartn);
      if (5 >= (3 * guide5.length) && (configurev.length * guide5.length) >= 3) {
         configurev = [2 & guide5.length];
      }
      while ((guide5.length * parseInt(`${dropdown5}`)) > 3) {
         dropdown5 += 3 << (Math.min(Math.abs(parseInt(`${dropdown5}`)), 3));
         break;
      }
          let adultj: Array<any> = [607, 787, 125];
          let videot = String.fromCharCode(114,101,100,117,110,100,97,110,99,121,95,120,95,53,0);
          let list1 = String.fromCharCode(113,95,52,57,95,116,101,108,101,103,114,97,109,0);
         utils_ += `${parseInt(`${dropdown5}`) * utils_.length}`;
         adultj = [adultj.length / 1];
         videot += "3";
         list1 = `${videot.length & 1}`;
          let applicationd = String.fromCharCode(101,95,50,57,95,116,104,101,105,114,0);
         configurev = [((modelsQ ? 3 : 1) - guide5.length)];
         applicationd = `${applicationd.length}`;
      while (guide5.includes(dropdown5)) {
         guide5 = [2];
         break;
      }
      predictionQ.push((String.fromCharCode(67,0) == mbsplash3 ? fastforward5.length : mbsplash3.length));
   }
   if (parseFloat(`${fastforward5.length}`) >= infor) {
      fastforward5 = [parseInt(`${infor}`)];
   }

    const rows = [];

   for (let b = 0; b < 1; b++) {
       let macauq = String.fromCharCode(109,111,100,101,109,95,56,95,50,49,0);
       let championh = false;
      let upgradeo = 6731109 <= macauq.length;
      do {
          let moviesj = String.fromCharCode(97,95,54,48,95,109,97,120,120,0);
          let const_4L = String.fromCharCode(97,108,108,111,99,97,116,101,100,95,107,95,51,49,0);
          let sell9 = String.fromCharCode(106,95,53,48,95,101,120,112,97,110,100,97,98,108,101,0);
          let guidew: Array<any> = [553, 129];
         macauq += `${(macauq == String.fromCharCode(97,0) ? moviesj.length : macauq.length)}`;
         moviesj = `${(sell9 == String.fromCharCode(79,0) ? guidew.length : sell9.length)}`;
         const_4L = "2";
         guidew = [1 | sell9.length];
         if (upgradeo) {
            break;
         }
      } while (upgradeo && (macauq.endsWith(`${championh}`)));
         championh = !macauq.startsWith(`${championh}`);
         championh = !championh;
      for (let u = 0; u < 3; u++) {
         macauq += `${((championh ? 5 : 2))}`;
      }
      for (let j = 0; j < 3; j++) {
          let coret = 4.0;
          let greyG = String.fromCharCode(108,97,117,110,99,104,101,115,95,48,95,51,55,0);
          let flyerO: Array<any> = [String.fromCharCode(114,95,52,48,95,99,111,110,100,105,116,105,111,110,0), String.fromCharCode(114,95,49,55,95,121,111,117,0)];
          let shrinkb = 4.0;
          let resendO = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,113,95,50,52,0);
         championh = 1 >= flyerO.length;
         coret /= Math.max(2, parseFloat(`${2 | resendO.length}`));
         greyG += `${parseInt(`${shrinkb}`) - resendO.length}`;
         flyerO = [parseInt(`${coret}`)];
         shrinkb /= Math.max(3, parseFloat(`${parseInt(`${coret}`) * greyG.length}`));
      }
      let resultW = macauq.length <= 5022901;
      do {
         macauq = "2";
         if (resultW) {
            break;
         }
      } while (resultW && (2 <= macauq.length));
      update_xH.set(`${expandZ}`, ((championh ? 2 : 1) << (Math.min(Math.abs(parseInt(`${expandZ}`)), 2))));
   }
   for (let z = 0; z < 3; z++) {
      fastforward5 = [1 & mbsplash3.length];
   }
    for (let i = 0; i < items.length; i += itemsPerRow) {

      mbsplash3 = `${hooksq}`;
       let mappingY: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,101,114,95,48,95,56,50,0),691], [String.fromCharCode(105,95,49,50,95,100,97,116,97,108,0),192], [String.fromCharCode(106,95,56,55,95,115,117,98,108,101,110,103,116,104,0),857]]);
       let plus9: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,113,117,97,100,114,97,116,105,99,0),905], [String.fromCharCode(104,115,99,114,111,108,108,95,109,95,52,53,0),448]]);
      let pathg = mappingY.size >= 6327958;
      do {
         mappingY.set(`${plus9.size}`, 3);
         if (pathg) {
            break;
         }
      } while ((mappingY.get(`${plus9.size}`) != null) && pathg);
       let androidT: Array<any> = [String.fromCharCode(102,114,97,103,109,101,110,116,95,107,95,55,51,0), String.fromCharCode(122,95,56,56,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0), String.fromCharCode(112,102,105,108,116,101,114,95,109,95,56,49,0)];
      for (let k = 0; k < 1; k++) {
         mappingY = new Map([[`${plus9.size}`, plus9.size & mappingY.size]]);
      }
         mappingY.set(`${androidT.length}`, mappingY.size * 2);
         plus9.set(`${androidT.length}`, androidT.length);
         plus9.set(`${androidT.length}`, mappingY.size >> (Math.min(Math.abs(3), 2)));
      memberw = `${memberw.length - 1}`;
      const rowItems = items.slice(i, i + itemsPerRow);

   while (3 >= (hooksq ^ 3) || 3 >= (hooksq ^ mbsplash3.length)) {
       let stationsD = 1.0;
       let floating4 = 1.0;
       let lessY: Array<any> = [String.fromCharCode(109,97,112,115,105,122,101,95,117,95,54,49,0), String.fromCharCode(122,95,51,54,95,100,101,115,99,114,105,112,116,105,111,110,0)];
       let thailandG = 1.0;
       let activitym = 2.0;
      for (let q = 0; q < 2; q++) {
         thailandG += parseInt(`${activitym}`);
      }
      while (3.73 >= (activitym / 5.3)) {
          let security4 = 3;
          let mapping9 = 5;
          let speck = String.fromCharCode(109,111,122,106,112,101,103,95,100,95,49,50,0);
          let toponf = 3.0;
          let math5 = String.fromCharCode(101,110,103,108,105,115,104,95,99,95,50,50,0);
         activitym -= parseFloat(`${lessY.length}`);
         security4 -= parseInt(`${toponf}`);
         mapping9 *= 3 | parseInt(`${toponf}`);
         speck += `${speck.length % 3}`;
         math5 = `${math5.length}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
         lessY.push(2 << (Math.min(Math.abs(parseInt(`${stationsD}`)), 3)));
      }
       let streamingY = 3.0;
         activitym *= parseFloat(`${parseInt(`${stationsD}`) >> (Math.min(5, Math.abs(parseInt(`${streamingY}`))))}`);
         thailandG += parseInt(`${stationsD}`);
      while ((3.21 * thailandG) < 3.91 && 4.98 < (3.21 - thailandG)) {
         thailandG -= parseInt(`${activitym}`);
         break;
      }
      while (stationsD < floating4) {
          let canvasy = String.fromCharCode(100,105,118,105,100,101,110,100,95,100,95,49,0);
          let headero: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,120,95,97,95,57,54,0),389], [String.fromCharCode(97,99,116,105,118,105,116,105,101,115,95,103,95,55,52,0),939]]);
         stationsD *= parseFloat(`${lessY.length}`);
         canvasy += `${canvasy.length * headero.size}`;
         headero = new Map([[`${headero.size}`, canvasy.length ^ 1]]);
         break;
      }
      for (let e = 0; e < 2; e++) {
          let logint = 4;
          let floater5: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,100,115,95,120,95,57,49,0),59], [String.fromCharCode(120,95,53,57,95,99,111,109,112,97,114,97,116,111,114,0),817], [String.fromCharCode(99,111,109,98,105,110,101,114,95,116,95,53,54,0),679]]);
          let feedbackR = String.fromCharCode(104,95,54,54,95,116,111,109,98,117,102,0);
          let chinasamej: Map<any, any> = new Map([[String.fromCharCode(112,95,55,48,95,104,105,115,116,111,114,121,0),280], [String.fromCharCode(121,101,115,110,111,95,122,95,55,53,0),237]]);
          let hoverx = 3;
         lessY = [floater5.size & parseInt(`${stationsD}`)];
         logint |= chinasamej.size - 2;
         floater5.set(`${logint}`, 1);
         feedbackR += `${hoverx & logint}`;
         chinasamej = new Map([[`${hoverx}`, 1 & hoverx]]);
      }
      while (floating4 > 4.11) {
          let closeM = String.fromCharCode(102,95,55,48,95,117,114,108,99,111,110,116,101,120,116,0);
          let privacyN = 3.0;
          let gemfilem = String.fromCharCode(104,101,97,100,108,105,110,101,95,120,95,53,49,0);
         stationsD *= parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${streamingY}`))))}`);
         closeM = "3";
         privacyN -= parseFloat(`${closeM.length + 1}`);
         gemfilem = `${gemfilem.length}`;
         break;
      }
       let popupL: Array<any> = [String.fromCharCode(100,95,53,51,95,116,111,111,108,99,104,97,105,110,0), String.fromCharCode(111,110,101,99,104,95,52,95,50,48,0)];
       let station0: Array<any> = [778, 737];
      if (thailandG <= 4.87) {
         thailandG /= Math.max(parseInt(`${floating4}`) & parseInt(`${stationsD}`), 5);
      }
      while (thailandG > 4.26) {
          let rankH = 4.0;
          let updates_ = 0.0;
          let chartI = true;
         thailandG /= Math.max(4, 3 | parseInt(`${rankH}`));
         rankH += 2 - parseInt(`${updates_}`);
         updates_ -= (parseFloat(`${parseInt(`${updates_}`) - (chartI ? 3 : 4)}`));
         chartI = 23.85 == updates_;
         break;
      }
      let hooks8 = 6141635.0 <= thailandG;
      do {
         thailandG *= parseInt(`${stationsD}`) + 2;
         if (hooks8) {
            break;
         }
      } while (hooks8 && (thailandG == popupL.length));
      if (activitym >= thailandG) {
          let buttonh = String.fromCharCode(115,95,54,95,102,105,114,101,100,0);
         activitym += parseFloat(`${parseInt(`${activitym}`) << (Math.min(lessY.length, 2))}`);
         buttonh = `${1 * buttonh.length}`;
      }
      mbsplash3 = "1";
      break;
   }
   let themeN = 5180122.0 <= infor;
   do {
      infor -= (parseFloat(`${String.fromCharCode(90,0) == mbsplash3 ? parseInt(`${infor}`) : mbsplash3.length}`));
      if (themeN) {
         break;
      }
   } while ((3 >= hooksq) && themeN);
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

       let connectionQ = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,111,95,55,48,0);
          let unreadV = 1;
          let bottom2 = String.fromCharCode(114,101,115,105,103,110,115,95,52,95,57,54,0);
          let fieldH: Array<any> = [57, 684];
         connectionQ += `${connectionQ.length}`;
         unreadV >>= Math.min(Math.abs(1 * bottom2.length), 4);
         bottom2 += "1";
         fieldH = [1 / (Math.max(5, bottom2.length))];
      if (connectionQ == String.fromCharCode(87,0)) {
         connectionQ += "2";
      }
         connectionQ += `${connectionQ.length}`;
      infor -= parseFloat(`${1}`);
       let tumbnailG = 3;
       let gpayz = String.fromCharCode(105,115,116,97,112,95,55,95,51,53,0);
       let nalytics5: Map<any, any> = new Map([[String.fromCharCode(104,101,97,118,121,95,120,95,54,57,0),107], [String.fromCharCode(97,108,103,95,114,95,53,55,0),455]]);
         gpayz += `${nalytics5.size}`;
      while (3 <= (4 << (Math.min(5, gpayz.length)))) {
          let report2 = String.fromCharCode(102,119,104,116,95,52,95,54,55,0);
          let circle4 = String.fromCharCode(100,95,52,54,95,114,102,112,115,0);
         gpayz = "1";
         report2 += `${(circle4 == String.fromCharCode(116,0) ? circle4.length : report2.length)}`;
         break;
      }
       let disconnectedJ = false;
         disconnectedJ = null != nalytics5.get(`${disconnectedJ}`);
         disconnectedJ = !disconnectedJ;
          let kuaishouW = true;
          let chinac = 3.0;
         gpayz += `${nalytics5.size}`;
         kuaishouW = !kuaishouW;
         chinac *= ((kuaishouW ? 1 : 5) << (Math.min(Math.abs(parseInt(`${chinac}`)), 5)));
      while (5 < nalytics5.size || (nalytics5.size & 5) < 5) {
          let episodesA = 1;
          let coreK: Map<any, any> = new Map([[String.fromCharCode(97,97,117,100,105,111,95,51,95,56,50,0),true ], [String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,52,95,53,49,0),false ], [String.fromCharCode(98,121,116,101,114,117,110,95,48,95,56,52,0),false ]]);
         disconnectedJ = (8 > (gpayz.length + (disconnectedJ ? gpayz.length : 8)));
         episodesA %= Math.max(coreK.size ^ 2, 2);
         coreK = new Map([[`${coreK.size}`, episodesA]]);
         break;
      }
          let turnS: Array<any> = [572, 230, 216];
          let malaysiax = 0;
          let showO = String.fromCharCode(100,101,113,117,111,116,101,95,52,95,55,0);
         gpayz += `${(nalytics5.size % (Math.max(1, (disconnectedJ ? 1 : 2))))}`;
         turnS.push(1);
         malaysiax &= turnS.length - showO.length;
         showO += `${(String.fromCharCode(100,0) == showO ? showO.length : malaysiax)}`;
      for (let x = 0; x < 2; x++) {
          let scoreo = 3;
         nalytics5 = new Map([[gpayz, gpayz.length]]);
         scoreo ^= 3;
      }
      mbsplash3 += `${gpayz.length + fastforward5.length}`;
      tumbnailG <<= Math.min(Math.abs(3), 4);
                setIsLoading(true);

      update_xH.set(`${infor}`, parseInt(`${infor}`) << (Math.min(3, Math.abs(parseInt(`${expandZ}`)))));
   let darkl = 9768189 >= memberw.length;
   do {
      memberw += `${hooksq ^ update_xH.size}`;
      if (darkl) {
         break;
      }
   } while ((3.52 < (infor * parseFloat(`${memberw.length}`))) && darkl);
                setTimeout(() => setIsLoading(false), 750);

      mbsplash3 += `${parseInt(`${infor}`)}`;
   while ((parseInt(`${infor}`) / (Math.max(4, memberw.length))) < 2 || (parseInt(`${infor}`) / (Math.max(memberw.length, 10))) < 2) {
      infor -= parseFloat(`${mbsplash3.length}`);
      break;
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? TumbnailLangkeyHistoryOrientat.gmailGuideUsername([99,127,127,123,120,49,36,36,115,98,106,101,108,96,106,101,127,125,37,101,110,127,11],0xB,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   let fullG = 5388485.0 >= infor;
   do {
       let mbbanner4 = 2;
       let searchbar5 = 5.0;
       let kleviny = String.fromCharCode(100,101,115,105,103,110,95,119,95,51,54,0);
       let invite0 = 2;
       let nextI = 1.0;
         nextI /= Math.max(1, invite0 | kleviny.length);
       let index7 = 5;
      let zhuboG = searchbar5 >= 5207961.0;
      do {
          let roundx = 3.0;
         searchbar5 += parseFloat(`${2}`);
         roundx -= parseInt(`${roundx}`);
         if (zhuboG) {
            break;
         }
      } while (((mbbanner4 * searchbar5) < 2.52) && zhuboG);
      while (mbbanner4 >= 4) {
          let successY = 5;
          let feedbackX: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,111,114,95,109,95,49,49,0),String.fromCharCode(117,95,49,50,95,102,97,105,108,117,114,101,115,0)], [String.fromCharCode(101,95,56,48,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),String.fromCharCode(107,95,57,50,95,104,119,100,101,118,105,99,101,0)], [String.fromCharCode(102,116,101,108,108,95,97,95,56,54,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,95,112,95,56,50,0)]]);
          let modalo = String.fromCharCode(112,95,50,49,95,115,104,97,100,101,115,0);
         mbbanner4 ^= 1 * invite0;
         successY |= 1;
         feedbackX = new Map([[`${feedbackX.size}`, feedbackX.size ^ successY]]);
         modalo = `${3 + successY}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
          let anytimeI = false;
          let catagoryf = false;
          let stationC = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,49,95,55,51,0);
          let fastforwardI: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,100,95,99,95,55,0),true ], [String.fromCharCode(121,95,51,95,99,111,114,114,101,99,116,105,111,110,0),true ], [String.fromCharCode(97,108,101,114,116,95,101,95,50,51,0),true ]]);
         mbbanner4 <<= Math.min(Math.abs(2), 5);
         anytimeI = !catagoryf;
         catagoryf = (22 < ((catagoryf ? 22 : stationC.length) % (Math.max(stationC.length, 3))));
         fastforwardI = new Map([[stationC, 2]]);
      }
      for (let q = 0; q < 2; q++) {
          let modalO = 1;
         searchbar5 -= parseFloat(`${mbbanner4}`);
         modalO ^= modalO;
      }
      while (3.4 == (invite0 * nextI)) {
          let trashi = 5.0;
          let filee = 3;
          let launcherp: Array<any> = [String.fromCharCode(105,110,104,105,98,105,116,95,54,95,53,0), String.fromCharCode(109,111,110,111,115,112,97,99,101,100,95,122,95,50,49,0), String.fromCharCode(119,122,97,101,115,95,107,95,55,0)];
          let bellq = 1.0;
         nextI /= Math.max(4, 2 >> (Math.min(5, Math.abs(parseInt(`${searchbar5}`)))));
         trashi -= parseInt(`${bellq}`);
         filee |= parseInt(`${trashi}`) % (Math.max(9, parseInt(`${bellq}`)));
         launcherp.push(parseInt(`${trashi}`) / (Math.max(parseInt(`${bellq}`), 8)));
         break;
      }
       let launchj = String.fromCharCode(102,95,55,56,95,100,105,115,101,109,118,111,119,101,108,101,100,0);
       let backwardq = String.fromCharCode(112,111,115,116,101,114,95,116,95,50,51,0);
       let adultN = String.fromCharCode(100,95,49,54,95,113,115,99,97,108,101,0);
      if (4 <= (mbbanner4 >> (Math.min(2, Math.abs(index7))))) {
          let module_ = 2;
          let blackG = 0.0;
          let animation8 = String.fromCharCode(102,95,57,50,95,112,108,97,99,101,109,97,114,107,115,0);
          let downloaded6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,95,50,95,51,50,0),556], [String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,120,95,57,56,0),674], [String.fromCharCode(109,95,56,51,95,114,101,103,101,120,0),879]]);
          let bingk: Array<any> = [135, 782];
         mbbanner4 += parseInt(`${searchbar5}`) << (Math.min(Math.abs(parseInt(`${blackG}`)), 5));
         module_ -= downloaded6.size;
         blackG += parseFloat(`${animation8.length}`);
         animation8 = `${(animation8 == String.fromCharCode(104,0) ? animation8.length : downloaded6.size)}`;
         bingk.push(2 | module_);
      }
      while (searchbar5 <= parseFloat(`${kleviny.length}`)) {
          let configureP = String.fromCharCode(105,95,54,49,95,116,101,115,116,105,109,103,105,110,116,0);
          let vignette5: Map<any, any> = new Map([[String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,108,95,55,56,0),true ], [String.fromCharCode(97,114,114,97,121,115,105,122,101,95,119,95,51,49,0),false ], [String.fromCharCode(110,117,109,98,101,114,95,118,95,50,52,0),true ]]);
          let dycreator4 = 1.0;
          let flyerN = 4;
         searchbar5 /= Math.max(parseFloat(`${vignette5.size - 2}`), 3);
         configureP = `${3 ^ configureP.length}`;
         vignette5.set(`${flyerN}`, parseInt(`${dycreator4}`) >> (Math.min(2, Math.abs(flyerN))));
         dycreator4 *= parseFloat(`${configureP.length}`);
         break;
      }
         invite0 <<= Math.min(backwardq.length, 2);
       let description_559 = String.fromCharCode(108,111,97,100,115,95,111,95,51,56,0);
       let projectE = String.fromCharCode(108,95,52,50,95,100,113,117,97,110,116,0);
      if ((searchbar5 * 1.26) >= 1.19 || (parseInt(`${searchbar5}`) * launchj.length) >= 4) {
          let floatingP: Array<any> = [945, 315, 949];
         launchj = "2";
         floatingP = [1];
      }
         projectE = `${launchj.length}`;
      infor += parseFloat(`${mbsplash3.length & 2}`);
      if (fullG) {
         break;
      }
   } while ((infor < parseFloat(`${mbsplash3.length}`)) && fullG);
   while (hooksq < 1) {
      expandZ += (parseFloat(`${mbsplash3 == String.fromCharCode(48,0) ? mbsplash3.length : hooksq}`));
      break;
   }
      rows.push(row);
    }
    return rows;
  };
  return (
    <>
      {!isLoading && (
        <>
          <View style={styles.container}>{renderItems()}</View>
          <View style={{ ...styles.loading }}>
            <Text
              style={{
                ...textVariants.subBody,
                color: colors.muted,
                marginBottom: 20,
              }}>
              已经到底了
            </Text>
          </View>
        </>
      )}

      {isLoading && (
        <View style={{ ...styles.loading, paddingTop: 20 }}>
          <FastImage
            style={{ height: 80, width: 80 }}
            source={require('@static/images/toponTerms.gif')}
            resizeMode={"contain"}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10, 
  },
  cardItem: {
    width: '48%', 
    aspectRatio: 130 / 80,
    borderRadius: 10,
    overflow: 'hidden', 
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
