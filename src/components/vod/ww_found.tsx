

class IconwatchnowStrMiddlebrightnes {
    static iconeditPredictionarrow = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/ww_collection';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import {
  wwControl,
} from '@type/ww_dycreator_result';
import { playVod } from '@redux/actions/ww_floater';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import VodTopicFilter from '../../components/vod/ww_movies';
import VodCard from '../../components/vod/ww_accepted_current';
import DownArrow from '@static/images/newsshareCustomHuawei.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/ww_result';
import { wwRecommendationItem } from '@type/ww_dycreator_result';

interface wwIndexDice {
  itemList: Array<wwRecommendationItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: wwRecommendationItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: wwIndexDice) {
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
       let resultX = 2;
    let uploadP = false;
    let switch_c4 = 1.0;
    let nativeexz = 2.0;
    let phoney: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,112,97,112,101,114,95,52,95,56,50,0),false ], [String.fromCharCode(111,95,54,50,95,97,108,119,97,121,115,0),true ]]);
    let paginationm = String.fromCharCode(115,116,105,99,107,101,114,101,100,95,55,95,49,48,48,0);
    let s_unlock3: Array<any> = [428, 616, 400];
    let latnf = String.fromCharCode(109,101,97,115,117,114,101,100,95,50,95,56,57,0);
    let long_n2U: Array<any> = [726, 73];
    let descR = String.fromCharCode(113,95,51,53,95,102,116,115,121,121,0);
    let termsB = String.fromCharCode(114,95,53,52,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0);
    let imagemanagerN = 3;
    let livenodatabgimga = 2;
    let faviconi = true;
       let fullI = 1.0;
       let update_ct: Map<any, any> = new Map([[String.fromCharCode(98,121,114,121,105,95,48,95,54,51,0),525], [String.fromCharCode(100,95,50,95,116,102,104,100,0),726]]);
       let gestureO: Map<any, any> = new Map([[String.fromCharCode(112,97,116,104,110,97,109,101,95,122,95,50,0),192], [String.fromCharCode(104,95,52,56,95,100,97,105,108,121,0),106]]);
         update_ct.set(`${fullI}`, 2 << (Math.min(3, Math.abs(parseInt(`${fullI}`)))));
          let v_hashH: Map<any, any> = new Map([[String.fromCharCode(111,95,54,55,95,114,105,100,0),String.fromCharCode(114,97,98,98,105,116,95,103,95,57,0)], [String.fromCharCode(97,95,56,51,95,117,110,117,115,101,100,0),String.fromCharCode(100,95,51,52,95,115,97,118,101,0)], [String.fromCharCode(106,112,101,103,108,115,100,101,99,95,55,95,55,53,0),String.fromCharCode(100,117,112,108,105,99,97,116,111,114,95,55,95,50,54,0)]]);
          let teamdetailsbgh = String.fromCharCode(116,105,109,101,119,97,105,116,95,107,95,55,0);
          let clearw: Map<any, any> = new Map([[String.fromCharCode(98,117,102,101,114,95,117,95,53,50,0),String.fromCharCode(115,110,97,112,112,101,100,95,102,95,50,48,0)], [String.fromCharCode(106,95,56,54,95,110,101,103,111,116,105,97,116,101,0),String.fromCharCode(103,95,55,49,95,102,97,100,101,100,0)], [String.fromCharCode(112,101,114,115,105,115,116,95,110,95,57,51,0),String.fromCharCode(97,114,112,101,100,95,49,95,49,48,0)]]);
         gestureO = new Map([[`${gestureO.size}`, (teamdetailsbgh == String.fromCharCode(112,0) ? gestureO.size : teamdetailsbgh.length)]]);
         v_hashH = new Map([[`${clearw.size}`, clearw.size << (Math.min(Math.abs(3), 5))]]);
      latnf += `${paginationm.length % 2}`;
   let logok = nativeexz >= 7592233.0;
   do {
       let iconnointernetG = String.fromCharCode(112,95,57,52,95,99,99,111,117,110,116,0);
       let shrinkA = 5.0;
       let executor_ = String.fromCharCode(114,95,51,50,95,115,101,110,116,0);
       let windy = String.fromCharCode(105,110,100,101,111,95,55,95,53,50,0);
      for (let x = 0; x < 1; x++) {
         iconnointernetG += `${windy.length | 3}`;
      }
         executor_ += `${executor_.length}`;
         windy = `${iconnointernetG.length}`;
      while (windy != String.fromCharCode(70,0)) {
         iconnointernetG += `${iconnointernetG.length ^ 3}`;
         break;
      }
      if (iconnointernetG.includes(windy)) {
         iconnointernetG = `${parseInt(`${shrinkA}`) / (Math.max(iconnointernetG.length, 2))}`;
      }
          let robotoK: Map<any, any> = new Map([[String.fromCharCode(117,95,57,57,95,104,117,101,115,0),129], [String.fromCharCode(98,108,111,99,107,105,110,101,115,115,95,108,95,51,56,0),49]]);
         shrinkA *= parseInt(`${shrinkA}`);
         robotoK.set(`${robotoK.size}`, robotoK.size / 3);
       let eventz = String.fromCharCode(109,95,50,53,95,99,111,110,116,97,105,110,0);
       let injuryf = String.fromCharCode(116,95,53,54,95,97,100,100,114,101,115,115,101,115,0);
       let about2 = true;
      for (let l = 0; l < 2; l++) {
         about2 = String.fromCharCode(50,0) == eventz;
      }
      while (parseInt(`${shrinkA}`) >= executor_.length) {
         shrinkA *= executor_.length;
         break;
      }
      for (let f = 0; f < 2; f++) {
         eventz += `${executor_.length + 3}`;
      }
         iconnointernetG += "2";
      nativeexz *= parseInt(`${switch_c4}`);
      if (logok) {
         break;
      }
   } while (((3.64 - nativeexz) >= 5.59 || 4.11 >= (3.64 - nativeexz)) && logok);

    const rows = [];

   for (let y = 0; y < 2; y++) {
      descR = `${1 ^ imagemanagerN}`;
   }
      resultX >>= Math.min(1, Math.abs(phoney.size + parseInt(`${switch_c4}`)));
    for (let i = 0; i < items.length; i += itemsPerRow) {

      nativeexz -= termsB.length;
   for (let i = 0; i < 1; i++) {
      latnf = `${phoney.size + paginationm.length}`;
   }
      const rowItems = items.slice(i, i + itemsPerRow);

      termsB += `${s_unlock3.length | 3}`;
      paginationm += `${parseInt(`${nativeexz}`) << (Math.min(paginationm.length, 2))}`;
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

      paginationm = `${parseInt(`${nativeexz}`)}`;
       let jingdongX = true;
      for (let a = 0; a < 2; a++) {
         jingdongX = (jingdongX ? !jingdongX : !jingdongX);
      }
      while (jingdongX) {
          let megaphones: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,109,95,54,48,0),769], [String.fromCharCode(105,95,55,51,95,116,114,97,105,116,0),930], [String.fromCharCode(116,95,49,55,95,100,99,116,0),679]]);
         jingdongX = (11 <= ((!jingdongX ? megaphones.size : 6) | megaphones.size));
         break;
      }
      for (let c = 0; c < 2; c++) {
         jingdongX = !jingdongX;
      }
      switch_c4 /= Math.max(parseFloat(`${1}`), 5);
                setIsLoading(true);

       let basketballM: Array<any> = [String.fromCharCode(109,95,57,53,95,101,118,115,105,103,110,97,108,0), String.fromCharCode(105,110,116,101,114,110,101,116,95,115,95,49,48,48,0), String.fromCharCode(112,111,114,116,97,108,95,110,95,50,53,0)];
       let rewindb = false;
         basketballM.push(basketballM.length % 2);
      while (rewindb) {
         rewindb = !rewindb;
         break;
      }
      if ((4 ^ basketballM.length) <= 3 && rewindb) {
          let xadsdkC = String.fromCharCode(106,95,52,53,95,97,116,114,97,99,97,108,0);
          let recommendationM = 2.0;
          let redgoalP: Array<any> = [630, 312, 553];
          let projectK = String.fromCharCode(106,95,49,57,95,115,117,98,116,114,101,101,0);
         rewindb = ((xadsdkC.length / (Math.max(4, (!rewindb ? xadsdkC.length : 39)))) >= 39);
         recommendationM -= parseFloat(`${3}`);
         redgoalP.push(redgoalP.length);
         projectK += "1";
      }
          let basketballT: Map<any, any> = new Map([[String.fromCharCode(111,117,116,108,105,101,114,95,119,95,53,52,0),614], [String.fromCharCode(112,95,51,55,95,100,101,118,101,108,111,112,109,101,110,116,0),362], [String.fromCharCode(109,95,55,56,95,109,117,120,101,114,115,0),937]]);
          let matchactivef: Map<any, any> = new Map([[String.fromCharCode(100,95,56,55,95,116,101,115,116,114,97,110,115,0),true ], [String.fromCharCode(112,111,115,108,105,115,116,115,95,118,95,51,55,0),true ]]);
          let mailF = 3;
         rewindb = (basketballT.size % (Math.max(2, basketballM.length))) > 77;
         basketballT.set(`${mailF}`, 2 << (Math.min(3, Math.abs(mailF))));
         matchactivef.set(`${mailF}`, 2 / (Math.max(10, mailF)));
         basketballM.push(1);
         rewindb = ((basketballM.length + (rewindb ? basketballM.length : 18)) > 18);
      nativeexz *= (2 * (uploadP ? 1 : 4));
   while (1 > (2 * parseInt(`${switch_c4}`)) || 2.55 > (parseFloat(`${latnf.length}`) * switch_c4)) {
      switch_c4 /= Math.max(parseFloat(`${parseInt(`${switch_c4}`)}`), 4);
      break;
   }
                setTimeout(() => setIsLoading(false), 750);

   for (let a = 0; a < 3; a++) {
      termsB += `${resultX / 1}`;
   }
   if (!long_n2U.includes(nativeexz)) {
       let recommendationO = String.fromCharCode(100,95,57,50,95,99,111,108,111,114,113,117,97,110,116,0);
       let modityT = false;
       let libsentryS = 0.0;
         modityT = recommendationO.length < 2;
         modityT = !recommendationO.startsWith(`${modityT}`);
      for (let u = 0; u < 1; u++) {
         modityT = (recommendationO.length - parseInt(`${libsentryS}`)) > 30;
      }
      for (let t = 0; t < 1; t++) {
         libsentryS -= (parseFloat(`${recommendationO == String.fromCharCode(88,0) ? parseInt(`${libsentryS}`) : recommendationO.length}`));
      }
      if ((libsentryS - 4.4) >= 1.21) {
          let type_p6 = String.fromCharCode(109,95,49,51,95,100,116,115,0);
          let fastd = true;
          let formw = false;
          let ksadK = String.fromCharCode(116,95,52,54,95,109,111,110,111,0);
          let notificationU = String.fromCharCode(104,95,56,56,95,119,97,110,116,0);
         libsentryS *= (parseFloat(`${ksadK.length % (Math.max(8, (modityT ? 4 : 3)))}`));
         type_p6 = `${notificationU.length / 2}`;
         fastd = 29 == type_p6.length && notificationU == String.fromCharCode(105,0);
         formw = (68 <= (notificationU.length ^ (!fastd ? notificationU.length : 68)));
         ksadK += `${2 % (Math.max(4, type_p6.length))}`;
      }
       let dependenciesW = 5.0;
         recommendationO += `${parseInt(`${dependenciesW}`)}`;
       let yingA = 0.0;
       let middlebrightness5 = 2.0;
         recommendationO = `${1 | parseInt(`${yingA}`)}`;
      nativeexz *= resultX / 2;
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? IconwatchnowStrMiddlebrightnes.iconeditPredictionarrow([29,1,1,5,6,79,90,90,12,28,27,18,6,29,28,91,1,3,117],0x75,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   while (5 <= (phoney.size + 5) || 5 <= (paginationm.length + phoney.size)) {
      paginationm = `${parseInt(`${nativeexz}`) << (Math.min(Math.abs(2), 1))}`;
      break;
   }
   while ((parseInt(`${nativeexz}`) - latnf.length) < 4 && (nativeexz - 5.45) < 2.81) {
      latnf = `${1 ^ parseInt(`${switch_c4}`)}`;
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
            source={require('@static/images/runtimeschedulerPromotion.gif')}
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
