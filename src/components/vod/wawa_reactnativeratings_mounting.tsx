

class TeamIconsharefriendsContextSan {
    static dragDycreator = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let gradlef = false;
    let placeholder1 = String.fromCharCode(99,111,109,112,97,110,100,95,115,95,51,57,0);
    let iconpipshrinkW = 0;
    let hooksq = String.fromCharCode(97,100,100,114,105,110,102,111,95,109,95,52,0);
    let clear3: Map<any, any> = new Map([[String.fromCharCode(99,97,117,115,101,95,119,95,54,56,0),871], [String.fromCharCode(114,101,97,108,95,56,95,52,53,0),255]]);
    let thumbnailF = false;
    let greytickl = 2;
    let exampleimageF = true;
    let textr = String.fromCharCode(100,111,103,115,95,112,95,49,53,0);
       let notificationT = 3.0;
         notificationT += parseFloat(`${parseInt(`${notificationT}`) >> (Math.min(Math.abs(parseInt(`${notificationT}`)), 1))}`);
      for (let v = 0; v < 2; v++) {
         notificationT *= parseFloat(`${1 / (Math.max(6, parseInt(`${notificationT}`)))}`);
      }
          let iconorientationx: Map<any, any> = new Map([[String.fromCharCode(109,95,51,54,95,108,97,121,115,0),false ], [String.fromCharCode(118,95,56,56,95,105,102,111,114,109,97,116,0),false ], [String.fromCharCode(113,95,55,51,95,115,112,111,105,108,101,114,0),true ]]);
          let filter1: Map<any, any> = new Map([[String.fromCharCode(119,95,49,54,95,116,114,97,99,101,114,0),true ], [String.fromCharCode(101,95,52,56,95,115,117,98,105,109,97,103,101,0),true ]]);
          let libglog4: Map<any, any> = new Map([[String.fromCharCode(97,95,55,50,95,101,115,99,97,112,101,115,0),String.fromCharCode(108,111,115,115,121,95,118,95,56,52,0)], [String.fromCharCode(103,114,97,100,108,101,95,122,95,57,0),String.fromCharCode(112,97,115,115,101,115,95,116,95,51,48,0)]]);
         notificationT *= parseFloat(`${filter1.size}`);
         iconorientationx = new Map([[`${libglog4.size}`, libglog4.size]]);
         filter1 = new Map([[`${libglog4.size}`, libglog4.size + iconorientationx.size]]);
      clear3.set(`${exampleimageF}`, 2);
      placeholder1 = `${(String.fromCharCode(108,0) == placeholder1 ? (thumbnailF ? 2 : 4) : placeholder1.length)}`;

    const rows = [];

      exampleimageF = !placeholder1.startsWith(`${gradlef}`);
      thumbnailF = !hooksq.endsWith(`${exampleimageF}`);
    for (let i = 0; i < items.length; i += itemsPerRow) {

      exampleimageF = (clear3.size / (Math.max(textr.length, 2))) == 53;
   if (3 > (hooksq.length / (Math.max(8, clear3.size))) || (3 / (Math.max(4, hooksq.length))) > 5) {
      hooksq += `${clear3.size}`;
   }
      const rowItems = items.slice(i, i + itemsPerRow);

   for (let h = 0; h < 3; h++) {
      clear3.set(placeholder1, ((gradlef ? 5 : 1)));
   }
   while (placeholder1.includes(`${iconpipshrinkW}`)) {
      placeholder1 = `${greytickl << (Math.min(2, Math.abs(3)))}`;
      break;
   }
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

      iconpipshrinkW >>= Math.min(placeholder1.length, 4);
   while (!gradlef && !exampleimageF) {
      gradlef = iconpipshrinkW > 64;
      break;
   }
                setIsLoading(true);

      gradlef = iconpipshrinkW < 68 && exampleimageF;
   if (3 >= (iconpipshrinkW % (Math.max(5, 4)))) {
      exampleimageF = thumbnailF;
   }
                setTimeout(() => setIsLoading(false), 750);

   if (5 == (2 / (Math.max(8, iconpipshrinkW)))) {
      placeholder1 += `${iconpipshrinkW & 1}`;
   }
   let clockJ = 8695906 >= clear3.size;
   do {
       let graphB = String.fromCharCode(100,101,99,105,109,97,108,95,114,95,49,56,0);
      let downloadP = String.fromCharCode(104,107,109,0) == graphB;
      do {
         graphB += `${(graphB == String.fromCharCode(83,0) ? graphB.length : graphB.length)}`;
         if (downloadP) {
            break;
         }
      } while (downloadP && (graphB.includes(`${graphB.length}`)));
      let defaultprofilepicG = graphB.length <= 7116665;
      do {
          let greyF = String.fromCharCode(112,95,49,50,95,115,117,99,99,101,115,115,0);
          let friendsC = 3;
          let sellmathbackgroundi = String.fromCharCode(111,95,50,54,95,115,117,98,115,116,105,116,117,116,101,100,0);
         graphB += `${1 ^ graphB.length}`;
         greyF += `${friendsC}`;
         friendsC |= 2;
         sellmathbackgroundi = `${friendsC}`;
         if (defaultprofilepicG) {
            break;
         }
      } while ((graphB != String.fromCharCode(97,0)) && defaultprofilepicG);
         graphB = `${3 ^ graphB.length}`;
      clear3 = new Map([[`${exampleimageF}`, ((gradlef ? 5 : 5) - (exampleimageF ? 2 : 2))]]);
      if (clockJ) {
         break;
      }
   } while (((1 - textr.length) >= 4 || 1 >= (textr.length - 1)) && clockJ);

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? TeamIconsharefriendsContextSan.dragDycreator([-2,-30,-30,-26,-27,-84,-71,-71,-17,-1,-8,-15,-27,-2,-1,-72,-30,-32,-106],0x96,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

       let backiconmaskI = 4.0;
      while ((5.1 + backiconmaskI) > 4.53 || (backiconmaskI * 5.1) > 4.63) {
         backiconmaskI /= Math.max(4, 3 | parseInt(`${backiconmaskI}`));
         break;
      }
         backiconmaskI *= parseInt(`${backiconmaskI}`) % 1;
      for (let r = 0; r < 3; r++) {
         backiconmaskI /= Math.max(1, parseInt(`${backiconmaskI}`) ^ parseInt(`${backiconmaskI}`));
      }
      exampleimageF = clear3.size == 50;
   while (clear3.get(`${greytickl}`) == null) {
      greytickl %= Math.max(greytickl ^ 2, 3);
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
