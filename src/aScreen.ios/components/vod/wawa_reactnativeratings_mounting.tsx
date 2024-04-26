

class HalfBackiconInjuryPredictionac {
    static unimplementedviewModelUsername = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import {
  wawaLayoutEvent,
  wawaSellProfileinactive,
} from '@type/wawa_gradlew';
import { playVod } from '@redux/actions/wawa_indicator';
import { useAppDispatch } from '@hooks/wawa_root';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import VodTopicFilter from '../../components/vod/wawa_fastforward';
import VodCard from '../../components/vod/wawa_mimo_footballtrophy';
import DownArrow from '@static/images/becomeStatisticsinactiveLibavdevice.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/wawa_iconarrowrightblack';
import { wawaIconeyeMoonItem } from '@type/wawa_gradlew';

interface wawaAwayShow {
  itemList: Array<wawaIconeyeMoonItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: wawaIconeyeMoonItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: wawaAwayShow) {
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
       let abidetectD = 0;
    let countdownz = String.fromCharCode(101,121,99,104,97,105,110,95,97,95,53,56,0);
    let typesA: Array<any> = [685, 68, 150];
    let selected4 = 1.0;
    let tempnodatagif9 = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,98,95,48,0);
    let iconchatsendo = String.fromCharCode(121,95,49,56,95,108,111,119,101,115,116,0);
    let liveendmodallogo0 = 2;
    let stats2: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,105,100,115,117,98,116,121,112,101,0),false ], [String.fromCharCode(115,105,103,110,95,115,95,50,0),false ]]);
    let detailC = false;
    let condensedM = 1;
    let iconarrowrightwhiteY = String.fromCharCode(111,95,57,53,95,111,102,102,115,101,116,115,0);
    let iconnotificationnewX = false;
    let iconadslinka = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,112,95,56,54,0);
   let iconcalendarL = detailC ? !detailC : detailC;
   do {
      detailC = (liveendmodallogo0 + typesA.length) < 10;
      if (iconcalendarL) {
         break;
      }
   } while (iconcalendarL && (5 > (5 % (Math.max(9, condensedM))) || 5 > condensedM));
      selected4 += parseFloat(`${1}`);

    const rows = [];

       let mathz = 5.0;
      if ((mathz / 3) < 5.54) {
         mathz *= parseInt(`${mathz}`) << (Math.min(3, Math.abs(3)));
      }
      for (let y = 0; y < 2; y++) {
         mathz *= parseInt(`${mathz}`) ^ 3;
      }
      let iconnotificationnewY = 7412300.0 >= mathz;
      do {
          let launcherZ = String.fromCharCode(112,101,101,114,110,97,109,101,95,109,95,50,52,0);
          let subbasketballplayer8: Map<any, any> = new Map([[String.fromCharCode(111,108,111,114,95,52,95,51,57,0),true ], [String.fromCharCode(115,99,97,108,101,109,111,100,101,95,49,95,56,50,0),true ]]);
          let baiduadsk = String.fromCharCode(121,95,50,53,95,100,101,108,97,0);
         mathz *= 3;
         launcherZ = `${subbasketballplayer8.size}`;
         subbasketballplayer8 = new Map([[`${subbasketballplayer8.size}`, subbasketballplayer8.size & baiduadsk.length]]);
         baiduadsk = `${baiduadsk.length << (Math.min(1, launcherZ.length))}`;
         if (iconnotificationnewY) {
            break;
         }
      } while (iconnotificationnewY && (mathz >= mathz));
      detailC = (tempnodatagif9.length >> (Math.min(3, iconchatsendo.length))) <= 79;
       let twitterG = 3.0;
       let gift7: Array<any> = [String.fromCharCode(99,95,52,54,95,97,115,110,116,0), String.fromCharCode(106,95,51,53,95,112,116,111,110,0)];
       let arrowdownQ = String.fromCharCode(107,95,57,54,95,99,108,105,112,112,105,110,103,0);
       let awayV = 3.0;
      for (let w = 0; w < 3; w++) {
         twitterG /= Math.max(3, 3);
      }
      let livenodatabgimgP = awayV >= 9024052.0;
      do {
         awayV *= parseFloat(`${parseInt(`${twitterG}`)}`);
         if (livenodatabgimgP) {
            break;
         }
      } while ((4.34 == (4.9 - awayV)) && livenodatabgimgP);
       let score5 = 3.0;
       let back3 = 5.0;
      while ((3.40 * twitterG) >= 2.32 || (score5 * twitterG) >= 3.40) {
         score5 += (arrowdownQ == String.fromCharCode(119,0) ? arrowdownQ.length : parseInt(`${score5}`));
         break;
      }
      if (arrowdownQ.startsWith(`${gift7.length}`)) {
          let privatechatbgl = String.fromCharCode(115,116,114,101,97,109,115,95,109,95,57,56,0);
         gift7.push(1);
         privatechatbgl = `${privatechatbgl.length * privatechatbgl.length}`;
      }
       let backward1: Array<any> = [230, 200, 932];
       let countryX: Array<any> = [289, 48];
      while ((1.62 - score5) >= 4.90 || (score5 - 1.62) >= 3.65) {
          let q_animation2 = String.fromCharCode(121,95,55,48,95,112,112,107,104,0);
          let specN = String.fromCharCode(103,95,50,53,95,105,110,103,101,110,105,101,110,116,0);
          let with_7jW = 5.0;
          let iconrefreshI = String.fromCharCode(108,111,103,111,117,114,108,95,54,95,53,53,0);
          let giftbuttonc = String.fromCharCode(112,111,112,112,101,100,0);
         score5 *= (specN == String.fromCharCode(109,0) ? parseInt(`${with_7jW}`) : specN.length);
         q_animation2 = "3";
         with_7jW *= parseFloat(`${iconrefreshI.length >> (Math.min(1, giftbuttonc.length))}`);
         iconrefreshI += `${3 * iconrefreshI.length}`;
         giftbuttonc = `${giftbuttonc.length}`;
         break;
      }
      let long_toK = 5229549.0 >= score5;
      do {
         score5 /= Math.max((String.fromCharCode(89,0) == arrowdownQ ? arrowdownQ.length : backward1.length), 3);
         if (long_toK) {
            break;
         }
      } while (long_toK && (5.4 > (back3 * score5) || 4.42 > (score5 * 5.4)));
      countdownz += `${(tempnodatagif9 == String.fromCharCode(84,0) ? parseInt(`${twitterG}`) : tempnodatagif9.length)}`;
    for (let i = 0; i < items.length; i += itemsPerRow) {

       let predictionactive9 = 5.0;
       let smallorangemanL: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,0),534], [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,49,95,54,49,0),183]]);
       let arrowP = 5.0;
      if (4 <= (1 >> (Math.min(4, Math.abs(smallorangemanL.size))))) {
         smallorangemanL = new Map([[`${predictionactive9}`, parseInt(`${predictionactive9}`)]]);
      }
          let whatsappf = String.fromCharCode(108,105,98,111,112,101,110,104,95,48,95,52,57,0);
          let libfabricjnie = false;
         predictionactive9 += parseFloat(`${whatsappf.length}`);
         whatsappf += `${((libfabricjnie ? 1 : 5))}`;
      while (Array.from(smallorangemanL.keys()).includes(`${arrowP}`)) {
         arrowP -= parseInt(`${predictionactive9}`);
         break;
      }
      if (Array.from(smallorangemanL.keys()).includes(`${predictionactive9}`)) {
         smallorangemanL = new Map([[`${smallorangemanL.size}`, smallorangemanL.size]]);
      }
          let xvodF = 1.0;
         smallorangemanL.set(`${predictionactive9}`, parseInt(`${predictionactive9}`));
         xvodF -= parseInt(`${xvodF}`) >> (Math.min(4, Math.abs(3)));
      selected4 += parseFloat(`${2 >> (Math.min(2, Math.abs(abidetectD)))}`);
      selected4 /= Math.max(1, (parseFloat(`${String.fromCharCode(50,0) == tempnodatagif9 ? parseInt(`${selected4}`) : tempnodatagif9.length}`)));
      const rowItems = items.slice(i, i + itemsPerRow);

      typesA = [(iconchatsendo.length % (Math.max(1, (detailC ? 2 : 5))))];
   while ((countdownz.length + abidetectD) == 5) {
      countdownz += `${(countdownz == String.fromCharCode(53,0) ? countdownz.length : liveendmodallogo0)}`;
      break;
   }
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   while (abidetectD > selected4) {
       let stats1 = String.fromCharCode(102,95,53,56,95,104,100,108,114,0);
      let layouto = 9264832 >= stats1.length;
      do {
         stats1 += `${stats1.length >> (Math.min(2, stats1.length))}`;
         if (layouto) {
            break;
         }
      } while ((stats1 == stats1) && layouto);
          let jcopy_z7d = 4.0;
         stats1 += "1";
         jcopy_z7d /= Math.max(2 << (Math.min(Math.abs(parseInt(`${jcopy_z7d}`)), 5)), 4);
          let common6 = String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,103,95,52,57,0);
         stats1 = `${stats1.length / 3}`;
         common6 += `${common6.length}`;
      abidetectD %= Math.max(((detailC ? 1 : 5) % (Math.max(9, liveendmodallogo0))), 5);
      break;
   }
   while ((4 * abidetectD) == 3 && (abidetectD * 4) == 1) {
      condensedM += 2 >> (Math.min(5, iconchatsendo.length));
      break;
   }
                setIsLoading(true);

      iconchatsendo = `${stats2.size}`;
       let eyeclosei: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0),424], [String.fromCharCode(98,95,49,54,95,104,101,97,114,98,101,97,116,0),945], [String.fromCharCode(116,95,56,50,95,105,99,111,110,0),428]]);
      for (let n = 0; n < 3; n++) {
          let livenodatabgimg_ = String.fromCharCode(118,95,50,56,95,110,111,110,122,101,114,111,0);
          let whistleorangeX = true;
          let googleh: Array<any> = [String.fromCharCode(104,97,100,97,109,97,114,100,95,106,95,57,50,0), String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,121,95,49,54,0), String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,117,95,56,53,0)];
         eyeclosei = new Map([[`${eyeclosei.size}`, 1 << (Math.min(2, Math.abs(eyeclosei.size)))]]);
         livenodatabgimg_ += "1";
         whistleorangeX = (34 <= ((whistleorangeX ? 34 : googleh.length) & googleh.length));
      }
          let imageactionliveb = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,0);
          let profileinactivel = 1.0;
         eyeclosei = new Map([[`${eyeclosei.size}`, imageactionliveb.length * eyeclosei.size]]);
         imageactionliveb = "1";
         profileinactivel /= Math.max(parseInt(`${profileinactivel}`), 4);
       let targetN = String.fromCharCode(120,95,49,55,95,97,110,105,109,97,116,111,114,115,0);
       let hongkongD = String.fromCharCode(114,95,49,57,95,101,110,99,111,100,101,114,0);
      selected4 += parseFloat(`${3 * liveendmodallogo0}`);
                setTimeout(() => setIsLoading(false), 750);

      typesA = [abidetectD];
      abidetectD *= (String.fromCharCode(119,0) == tempnodatagif9 ? tempnodatagif9.length : iconchatsendo.length);

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? HalfBackiconInjuryPredictionac.unimplementedviewModelUsername([11,23,23,19,16,89,76,76,26,10,13,4,16,11,10,77,23,21,99],0x63,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   while (Array.from(stats2.keys()).includes(`${selected4}`)) {
       let defaultplayerimg4: Array<any> = [461, 825];
       let castingN = 3.0;
       let show9: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,97,114,121,0),String.fromCharCode(108,111,103,95,112,95,53,0)], [String.fromCharCode(101,95,49,48,95,108,111,116,116,105,101,0),String.fromCharCode(98,117,105,108,100,95,111,95,54,49,0)], [String.fromCharCode(97,95,52,56,95,116,104,114,101,97,100,112,111,111,108,0),String.fromCharCode(119,95,52,56,95,112,114,101,99,111,109,112,111,115,101,100,0)]]);
       let iconarrowrightblack7 = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,102,95,54,52,0);
       let nexti = 2.0;
          let fillB: Array<any> = [685, 184, 159];
          let subss = false;
          let anytimeP: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,115,99,97,108,101,95,122,95,50,57,0),888], [String.fromCharCode(98,114,97,110,100,115,95,110,95,50,48,0),76]]);
         defaultplayerimg4.push(anytimeP.size & 2);
         fillB = [((subss ? 4 : 4) / (Math.max(fillB.length, 2)))];
         subss = subss || fillB.length == 36;
         anytimeP.set(`${subss}`, (3 - (subss ? 4 : 3)));
      let tickj = 6617915 <= show9.size;
      do {
          let runtimescheduler3 = 1.0;
          let backicon0 = String.fromCharCode(104,95,52,57,95,114,101,108,97,121,111,117,116,0);
          let filedL: Array<any> = [986, 456];
         show9.set(`${runtimescheduler3}`, parseInt(`${runtimescheduler3}`));
         backicon0 += "3";
         filedL = [(String.fromCharCode(67,0) == backicon0 ? backicon0.length : filedL.length)];
         if (tickj) {
            break;
         }
      } while (tickj && (show9.size >= 3));
       let close5 = true;
      for (let j = 0; j < 1; j++) {
          let iconplaym: Array<any> = [453, 803];
          let bgvipxvodS = 3;
          let libhermesV = 2;
         nexti /= Math.max(parseFloat(`${defaultplayerimg4.length}`), 3);
         iconplaym = [2];
         bgvipxvodS <<= Math.min(4, Math.abs(3 + iconplaym.length));
         libhermesV >>= Math.min(Math.abs(libhermesV / (Math.max(2, 6))), 1);
      }
         nexti += (parseFloat(`${(close5 ? 4 : 5) % (Math.max(parseInt(`${nexti}`), 5))}`));
          let moonz = String.fromCharCode(108,101,118,101,108,0);
          let fullV = String.fromCharCode(115,95,57,56,95,97,112,110,115,0);
          let phoneo = String.fromCharCode(104,101,99,107,95,111,95,54,54,0);
         defaultplayerimg4 = [(phoneo == String.fromCharCode(119,0) ? phoneo.length : (close5 ? 1 : 2))];
         moonz = `${fullV.length}`;
         fullV = `${moonz.length - 1}`;
      for (let d = 0; d < 1; d++) {
          let updatesa: Array<any> = [525, 380, 680];
          let twitter1 = false;
          let baidup = 4;
         nexti -= parseFloat(`${baidup}`);
         updatesa = [2];
         twitter1 = (80 == ((!twitter1 ? updatesa.length : 80) | updatesa.length));
         baidup += ((twitter1 ? 5 : 5) * 3);
      }
          let iconpipexpandX = 4.0;
         iconarrowrightblack7 += "1";
         iconpipexpandX *= parseFloat(`${parseInt(`${iconpipexpandX}`)}`);
       let unticks: Map<any, any> = new Map([[String.fromCharCode(118,95,50,53,0),544], [String.fromCharCode(101,120,99,108,0),837], [String.fromCharCode(122,95,55,57,95,118,111,116,101,115,0),597]]);
       let productA: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,95,112,111,114,116,115,0),571], [String.fromCharCode(107,95,51,56,95,97,110,105,109,97,116,101,115,0),894]]);
         show9 = new Map([[`${show9.size}`, ((close5 ? 2 : 5) >> (Math.min(Math.abs(show9.size), 2)))]]);
      if ((4 / (Math.max(4, productA.size))) == 5) {
          let dicelogoe = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,0);
          let hover3 = String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,106,95,56,56,0);
          let iconeditu = false;
         iconarrowrightblack7 = `${parseInt(`${nexti}`) * 2}`;
         dicelogoe = `${((iconeditu ? 3 : 3) % (Math.max(hover3.length, 5)))}`;
         hover3 = `${hover3.length}`;
         iconeditu = 71 == hover3.length;
      }
          let arrowrightwithtailV: Map<any, any> = new Map([[String.fromCharCode(108,95,56,53,95,117,110,99,104,97,110,103,101,100,0),876], [String.fromCharCode(108,101,97,115,101,95,103,95,51,52,0),388], [String.fromCharCode(112,101,114,109,95,122,95,52,0),916]]);
          let r_managerN: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,104,97,115,104,101,114,0),929], [String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,0),198]]);
         show9 = new Map([[`${show9.size}`, 1]]);
         arrowrightwithtailV = new Map([[`${arrowrightwithtailV.size}`, 2]]);
         r_managerN = new Map([[`${arrowrightwithtailV.size}`, 2 | r_managerN.size]]);
      for (let f = 0; f < 2; f++) {
          let anythink5: Array<any> = [String.fromCharCode(99,97,112,95,117,95,53,50,0), String.fromCharCode(115,107,101,121,108,105,115,116,95,111,95,55,48,0), String.fromCharCode(122,101,114,111,99,111,100,101,99,95,51,95,57,51,0)];
         show9 = new Map([[`${castingN}`, iconarrowrightblack7.length]]);
         anythink5.push(1);
      }
      if (4 <= (unticks.size ^ defaultplayerimg4.length) && 4 <= (4 ^ defaultplayerimg4.length)) {
         unticks.set(`${castingN}`, productA.size & parseInt(`${castingN}`));
      }
      if (!Array.from(productA.values()).includes(unticks.size)) {
         productA.set(iconarrowrightblack7, ((close5 ? 3 : 4)));
      }
      selected4 /= Math.max(parseFloat(`${iconchatsendo.length & condensedM}`), 5);
      break;
   }
       let livenodatabgimg3 = 3;
       let circleB: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,100,111,110,97,116,101,0),593], [String.fromCharCode(116,114,97,105,108,105,110,103,95,52,95,55,53,0),291]]);
       let utilsL = true;
      while (Array.from(circleB.values()).includes(livenodatabgimg3)) {
          let loading5 = String.fromCharCode(102,97,105,108,115,95,54,95,49,55,0);
          let libswscalet = 4.0;
          let detailsp = String.fromCharCode(115,95,50,49,95,117,112,118,112,0);
          let c_locku = String.fromCharCode(106,95,55,57,95,109,115,122,104,0);
          let modulev = 0.0;
         circleB = new Map([[loading5, ((utilsL ? 5 : 1) % (Math.max(9, loading5.length)))]]);
         libswscalet *= (String.fromCharCode(69,0) == c_locku ? c_locku.length : parseInt(`${modulev}`));
         detailsp += `${c_locku.length / 3}`;
         modulev -= 2 / (Math.max(2, detailsp.length));
         break;
      }
         circleB.set(`${livenodatabgimg3}`, 3);
       let resultS = 3;
       let imagenetworkerrO = 2;
         utilsL = imagenetworkerrO <= 83;
       let detailsR = String.fromCharCode(115,95,49,52,95,115,105,109,117,108,97,116,111,114,0);
      while (4 <= imagenetworkerrO) {
          let iconnewsshareJ = String.fromCharCode(104,95,56,53,95,105,110,115,101,114,116,105,110,103,0);
          let modity0 = String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0);
          let countdown4 = 3;
          let libjsinspectorK = 1.0;
         resultS *= (String.fromCharCode(99,0) == modity0 ? modity0.length : (utilsL ? 4 : 5));
         iconnewsshareJ = `${countdown4}`;
         countdown4 ^= 2;
         libjsinspectorK *= (String.fromCharCode(98,0) == iconnewsshareJ ? countdown4 : iconnewsshareJ.length);
         break;
      }
       let bangP = 2;
       let libjsinspector2 = 4;
          let redgoalH: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,95,101,97,99,104,0),549], [String.fromCharCode(109,97,112,115,116,114,105,110,103,95,56,95,56,54,0),915]]);
         circleB = new Map([[`${redgoalH.size}`, redgoalH.size]]);
          let backiconf = 2.0;
         imagenetworkerrO ^= 3;
         backiconf -= parseInt(`${backiconf}`);
      selected4 += parseFloat(`${tempnodatagif9.length}`);
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
            source={require('@static/images/iconnewsshareDist.gif')}
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
