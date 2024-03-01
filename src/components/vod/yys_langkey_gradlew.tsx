

class IconLayout {
    static interstitialPromotion = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/yys_settings';
import {
  yys_Bing,
} from '@type/yys_libzeus';
import { playVod } from '@redux/actions/yys_player_style';
import { useAppDispatch } from '@hooks/yys_frame';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import VodTopicFilter from '../../components/vod/yys_singapore_anner';
import VodCard from '../../components/vod/yys_singapore';
import DownArrow from '@static/images/centerLaunchDycreator.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/yys_vertical_collection';
import { yys_StyleItem } from '@type/yys_libzeus';

interface yys_ConfigureUimanager {
  itemList: Array<yys_StyleItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: yys_StyleItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: yys_ConfigureUimanager) {
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
       let backL = String.fromCharCode(114,95,53,48,95,117,110,101,100,105,116,97,98,108,101,0);
    let securityN = 1.0;
    let actionl: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,95,110,95,53,49,0),550], [String.fromCharCode(102,108,97,99,100,97,116,97,95,50,95,51,56,0),41], [String.fromCharCode(100,101,102,101,114,95,122,95,57,49,0),467]]);
    let configuref = String.fromCharCode(116,114,97,99,107,101,114,95,113,95,55,49,0);
    let cricketQ = String.fromCharCode(97,97,99,116,97,98,95,121,95,53,55,0);
    let clockk = 0;
    let videocommonH: Array<any> = [599, 919];
    let latnV: Array<any> = [151, 32];
    let modelss: Array<any> = [183, 728];
    let libhermesx = String.fromCharCode(99,111,109,112,97,110,100,95,116,95,56,55,0);
    let unreadF = 4.0;
   while (2 <= libhermesx.length) {
      libhermesx += `${configuref.length}`;
      break;
   }
      configuref = `${2 << (Math.min(3, cricketQ.length))}`;

    const rows = [];

   if (!Array.from(actionl.values()).includes(clockk)) {
      actionl = new Map([[configuref, configuref.length]]);
   }
      cricketQ += `${backL.length}`;
    for (let i = 0; i < items.length; i += itemsPerRow) {

   for (let y = 0; y < 1; y++) {
      actionl = new Map([[`${modelss.length}`, 1 * libhermesx.length]]);
   }
      clockk %= Math.max(videocommonH.length + 1, 1);
      const rowItems = items.slice(i, i + itemsPerRow);

      latnV = [libhermesx.length % 1];
       let mailJ: Map<any, any> = new Map([[String.fromCharCode(115,108,111,119,109,111,100,101,95,119,95,57,48,0),false ], [String.fromCharCode(116,95,50,49,95,99,102,102,116,98,0),true ]]);
       let hiadj: Map<any, any> = new Map([[String.fromCharCode(115,104,111,117,108,100,95,107,95,56,0),false ], [String.fromCharCode(116,95,55,53,95,109,101,109,110,0),true ], [String.fromCharCode(118,95,49,52,95,114,101,115,112,101,99,116,105,110,103,0),false ]]);
       let fnewsj = 1.0;
      if (2 == (mailJ.size << (Math.min(Math.abs(2), 1))) || 3 == (mailJ.size / (Math.max(2, 2)))) {
         fnewsj /= Math.max(4, mailJ.size >> (Math.min(Math.abs(hiadj.size), 1)));
      }
         hiadj = new Map([[`${hiadj.size}`, 1]]);
          let fasta = String.fromCharCode(118,95,55,57,95,101,120,116,101,110,100,105,110,103,0);
          let libsgcoreP = String.fromCharCode(113,95,51,56,95,105,110,116,114,97,112,114,101,100,0);
         mailJ.set(`${libsgcoreP}`, 3 >> (Math.min(2, Math.abs(mailJ.size))));
         fasta += `${3 ^ fasta.length}`;
         libsgcoreP = `${fasta.length}`;
          let successd = 1;
         hiadj = new Map([[`${hiadj.size}`, parseInt(`${fnewsj}`) << (Math.min(Math.abs(2), 5))]]);
         successd >>= Math.min(Math.abs(successd - successd), 5);
         mailJ = new Map([[`${mailJ.size}`, 2 ^ mailJ.size]]);
         hiadj = new Map([[`${mailJ.size}`, parseInt(`${fnewsj}`)]]);
      while (!Array.from(hiadj.keys()).includes(`${fnewsj}`)) {
          let placeholderc = 4.0;
          let dplusG = false;
          let dplus8: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,111,95,48,95,54,50,0),String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,120,95,55,54,0)], [String.fromCharCode(100,101,108,101,103,97,116,101,115,95,116,95,56,52,0),String.fromCharCode(114,111,117,110,100,100,115,95,118,95,53,51,0)], [String.fromCharCode(112,111,108,121,108,105,110,101,95,109,95,51,52,0),String.fromCharCode(97,95,54,50,95,112,114,111,99,101,115,115,0)]]);
          let projectT: Array<any> = [609, 257, 136];
          let pnewarchdefaultsR = 0;
         fnewsj -= mailJ.size << (Math.min(Math.abs(1), 1));
         placeholderc -= parseFloat(`${projectT.length}`);
         dplusG = placeholderc <= 93.47;
         dplus8 = new Map([[`${dplus8.size}`, 3]]);
         projectT = [2 % (Math.max(8, projectT.length))];
         pnewarchdefaultsR &= 2;
         break;
      }
       let privacys = 4;
      while ((3 * mailJ.size) > 5 || (3 << (Math.min(5, Math.abs(mailJ.size)))) > 4) {
         fnewsj *= hiadj.size;
         break;
      }
      libhermesx += `${cricketQ.length}`;
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

       let navigationU: Map<any, any> = new Map([[String.fromCharCode(117,116,112,117,116,95,56,95,53,53,0),793], [String.fromCharCode(98,95,57,53,95,109,111,100,101,109,118,99,111,115,116,0),308], [String.fromCharCode(121,95,52,95,101,118,115,105,103,110,97,108,0),182]]);
      while (navigationU.size >= navigationU.size) {
         navigationU.set(`${navigationU.size}`, 2);
         break;
      }
      while (2 > navigationU.size) {
         navigationU.set(`${navigationU.size}`, 3);
         break;
      }
         navigationU = new Map([[`${navigationU.size}`, navigationU.size]]);
      clockk &= 3 % (Math.max(9, parseInt(`${securityN}`)));
      videocommonH = [actionl.size + modelss.length];
                setIsLoading(true);

       let bellG: Map<any, any> = new Map([[String.fromCharCode(97,97,110,100,99,116,116,97,98,95,57,95,53,48,0),638], [String.fromCharCode(112,114,105,109,105,116,105,118,101,95,110,95,52,54,0),857], [String.fromCharCode(97,95,51,52,95,101,120,116,101,116,110,100,101,100,0),578]]);
          let bottomX: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,101,103,114,101,115,115,0),743], [String.fromCharCode(110,95,56,48,95,114,116,114,101,101,110,111,100,101,0),724], [String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,109,95,56,54,0),846]]);
         bellG = new Map([[`${bottomX.size}`, bellG.size]]);
         bellG.set(`${bellG.size}`, bellG.size ^ bellG.size);
         bellG = new Map([[`${bellG.size}`, bellG.size - bellG.size]]);
      clockk <<= Math.min(3, Math.abs((backL == String.fromCharCode(83,0) ? actionl.size : backL.length)));
      configuref = `${libhermesx.length | 1}`;
                setTimeout(() => setIsLoading(false), 750);

      videocommonH = [parseInt(`${securityN}`)];
   while (5 == (2 % (Math.max(8, configuref.length)))) {
      configuref += `${backL.length >> (Math.min(Math.abs(1), 5))}`;
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
                  uri: item.live_station_img_url.charAt(0) == '/' ? IconLayout.interstitialPromotion([49,45,45,41,42,99,118,118,33,48,56,55,62,50,56,55,45,47,119,55,60,45,89],0x59,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   let inactiveI = String.fromCharCode(110,95,97,101,49,57,0) == backL;
   do {
      backL = `${latnV.length | 3}`;
      if (inactiveI) {
         break;
      }
   } while (((backL.length | latnV.length) == 4 && (latnV.length | 4) == 3) && inactiveI);
   while (5 == videocommonH.length) {
      cricketQ += `${backL.length - 2}`;
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
            source={require('@static/images/cancelSigmobLibzeus.gif')}
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
