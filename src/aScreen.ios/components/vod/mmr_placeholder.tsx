

class CurrentDisconnectedFlyer {
    static leftRedirect = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/ypy_fast';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/vrm_thailand';
import {
  AWXGoogle,
  XVSScoreDark,
} from '@type/wpk_long';
import { playVod } from '@redux/actions/xif_layout';
import { useAppDispatch } from '@hooks/kg_index';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import VodTopicFilter from '../../components/vod/nv_refresh';
import VodCard from '../../components/vod/qee_dice';
import DownArrow from '@static/images/eighteenPlaceholderBlack.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/gwi_with';
import { XPaginationWeiboItem } from '@type/wpk_long';

interface XFillButton {
  itemList: Array<XPaginationWeiboItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: XPaginationWeiboItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: XFillButton) {
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
       let routerm: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,97,103,0),String.fromCharCode(115,101,99,111,110,100,0)], [String.fromCharCode(97,108,97,114,109,0),String.fromCharCode(114,97,99,101,0)]]);
    let searchm = 5;
    let singaporeX: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,98,101,0),503], [String.fromCharCode(107,95,56,54,95,97,108,108,111,119,0),586], [String.fromCharCode(97,95,56,55,0),111]]);
    let whistleC = 0;
    let lango = String.fromCharCode(108,111,99,97,116,101,100,95,55,95,57,0);
    let textw = true;
    let downloaderJ = String.fromCharCode(101,120,101,99,117,116,105,110,103,0);
    let humidityp = String.fromCharCode(103,114,97,118,105,116,121,0);
    let textn: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,105,110,103,0),true ], [String.fromCharCode(116,101,115,116,110,101,116,0),true ], [String.fromCharCode(115,115,114,99,115,0),true ]]);
    let page4 = String.fromCharCode(102,111,115,115,105,108,0);
    let mutedL = String.fromCharCode(104,112,97,114,97,109,115,0);
    let list4 = String.fromCharCode(105,109,112,111,115,115,105,98,108,101,0);
    let whitez = String.fromCharCode(101,95,54,50,95,114,101,115,105,108,105,101,110,99,101,0);
    let bootsplash3 = String.fromCharCode(115,117,98,115,97,109,112,0);
    let downloadingc = String.fromCharCode(112,97,115,115,102,0);
   while (3 > whistleC) {
       let screenc = String.fromCharCode(115,100,107,0);
       let muteds = String.fromCharCode(110,111,110,99,111,110,116,97,99,116,0);
       let promotionB = String.fromCharCode(114,105,110,103,98,97,99,107,0);
         promotionB += `${muteds.length >> (Math.min(Math.abs(1), 5))}`;
         promotionB = `${promotionB.length}`;
      if (1 < promotionB.length) {
         screenc = `${2 | screenc.length}`;
      }
         promotionB += "2";
      for (let k = 0; k < 1; k++) {
         muteds = `${promotionB.length - 2}`;
      }
      while (muteds.length > 1 || promotionB == String.fromCharCode(68,0)) {
         muteds = `${screenc.length ^ 3}`;
         break;
      }
          let unselected6 = 3.0;
          let eventC = 4.0;
          let description__6 = String.fromCharCode(113,95,49,48,95,102,105,110,105,115,101,100,0);
         screenc = `${(String.fromCharCode(113,0) == screenc ? screenc.length : parseInt(`${eventC}`))}`;
         unselected6 *= parseFloat(`${description__6.length + parseInt(`${unselected6}`)}`);
         eventC -= parseFloat(`${description__6.length}`);
      while (promotionB.endsWith(screenc)) {
         screenc += `${muteds.length / 3}`;
         break;
      }
         promotionB = `${1 - muteds.length}`;
      whistleC %= Math.max(2, 4);
      break;
   }
      page4 = `${2 - mutedL.length}`;

    const rows = [];

      page4 = "3";
      mutedL = `${routerm.size}`;
    for (let i = 0; i < items.length; i += itemsPerRow) {

   if (!Array.from(routerm.values()).includes(searchm)) {
      routerm.set(`${whistleC}`, 3 * whistleC);
   }
      routerm = new Map([[`${singaporeX.size}`, searchm + singaporeX.size]]);
      const rowItems = items.slice(i, i + itemsPerRow);

       let controlsx = String.fromCharCode(106,95,49,51,95,115,117,112,101,114,102,114,97,109,101,0);
       let verticalP = 2.0;
      while (verticalP >= controlsx.length) {
          let albumK = 0.0;
          let networky = 3.0;
          let lessn = String.fromCharCode(117,109,111,116,105,111,110,0);
          let chatF = 0.0;
         controlsx += "2";
         albumK += lessn.length;
         networky /= Math.max(parseInt(`${albumK}`) & parseInt(`${networky}`), 4);
         lessn = `${1 + lessn.length}`;
         chatF -= lessn.length;
         break;
      }
       let readR = false;
      if (controlsx.startsWith(`${readR}`)) {
         readR = controlsx.length < 58;
      }
      if (verticalP < 2.91) {
         readR = !controlsx.includes(`${readR}`);
      }
       let clubk = 4;
      for (let y = 0; y < 1; y++) {
         readR = 77 <= clubk;
      }
      routerm = new Map([[humidityp, controlsx.length]]);
       let fastW: Map<any, any> = new Map([[String.fromCharCode(103,95,56,53,95,98,108,111,98,115,0),549], [String.fromCharCode(115,116,114,102,117,110,99,0),617], [String.fromCharCode(98,97,99,107,103,114,117,110,100,95,53,95,50,57,0),190]]);
       let malaysiak = 2.0;
       let auto_0O = String.fromCharCode(115,112,108,105,116,116,105,110,103,0);
          let minivodQ = 0.0;
          let default_cY = 1.0;
          let e_unlockA = String.fromCharCode(99,97,108,101,110,100,97,114,0);
         malaysiak -= parseFloat(`${fastW.size / (Math.max(2, 1))}`);
         minivodQ /= Math.max(4, e_unlockA.length + parseInt(`${minivodQ}`));
         default_cY -= parseFloat(`${1}`);
         e_unlockA += `${parseInt(`${default_cY}`)}`;
       let listt = false;
       let moduleQ = true;
          let speck: Array<any> = [387, 722];
         listt = 33.83 == malaysiak;
         speck.push(speck.length);
       let backgroundm = String.fromCharCode(115,95,56,52,95,97,100,97,112,116,101,114,115,0);
      for (let u = 0; u < 2; u++) {
         fastW = new Map([[backgroundm, (String.fromCharCode(81,0) == auto_0O ? backgroundm.length : auto_0O.length)]]);
      }
         malaysiak *= parseFloat(`${1}`);
         auto_0O = `${1 * fastW.size}`;
      if (4 == (auto_0O.length % (Math.max(5, fastW.size)))) {
          let miniF: Map<any, any> = new Map([[String.fromCharCode(100,118,97,117,100,105,111,95,98,95,52,56,0),935], [String.fromCharCode(98,105,116,109,97,112,95,107,95,51,54,0),622], [String.fromCharCode(116,95,52,51,95,99,111,108,111,114,115,112,97,99,101,0),702]]);
          let unreadN = true;
          let searchS = String.fromCharCode(104,95,57,55,95,115,110,97,112,115,104,111,116,115,0);
         fastW.set(backgroundm, parseInt(`${malaysiak}`) * backgroundm.length);
         miniF = new Map([[`${miniF.size}`, (miniF.size | (unreadN ? 3 : 4))]]);
         unreadN = (miniF.size / (Math.max(searchS.length, 9))) >= 11;
         searchS += `${miniF.size}`;
      }
         fastW.set(`${malaysiak}`, auto_0O.length);
      routerm.set(humidityp, humidityp.length);
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity activeOpacity={0.85}
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   for (let k = 0; k < 1; k++) {
      whistleC *= 1;
   }
   let modelsU = String.fromCharCode(119,109,117,53,0) == humidityp;
   do {
       let minic = String.fromCharCode(114,95,56,56,95,105,110,112,111,115,0);
       let thumbnail5 = 1.0;
      let dialogS = 9857079.0 >= thumbnail5;
      do {
         thumbnail5 *= parseFloat(`${parseInt(`${thumbnail5}`) << (Math.min(Math.abs(1), 2))}`);
         if (dialogS) {
            break;
         }
      } while ((parseFloat(`${minic.length}`) <= thumbnail5) && dialogS);
         thumbnail5 -= parseFloat(`${minic.length - 1}`);
      while (!minic.startsWith(`${thumbnail5}`)) {
         minic = `${parseInt(`${thumbnail5}`) ^ minic.length}`;
         break;
      }
         thumbnail5 -= parseFloat(`${minic.length}`);
      while (minic.includes(`${thumbnail5}`)) {
         thumbnail5 /= Math.max(parseFloat(`${1}`), 1);
         break;
      }
         thumbnail5 -= parseFloat(`${minic.length}`);
      humidityp += `${routerm.size | 2}`;
      if (modelsU) {
         break;
      }
   } while ((5 == humidityp.length) && modelsU);
                setIsLoading(true);

      mutedL += "3";
      lango = `${routerm.size / (Math.max(lango.length, 1))}`;
                setTimeout(() => setIsLoading(false), 750);

      singaporeX = new Map([[page4, page4.length ^ 3]]);
      whistleC ^= page4.length;

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? CurrentDisconnectedFlyer.leftRedirect([11,23,23,19,16,89,76,76,27,10,2,13,4,8,2,13,23,21,77,13,6,23,99],0x63,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

       let agreementy = 1;
       let typesD = 0.0;
       let shoot6 = 4.0;
         typesD /= Math.max(5, parseInt(`${typesD}`) ^ parseInt(`${shoot6}`));
         typesD *= parseInt(`${shoot6}`) >> (Math.min(1, Math.abs(3)));
         shoot6 -= 1;
      for (let m = 0; m < 3; m++) {
         agreementy -= agreementy;
      }
       let editz: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,0),2], [String.fromCharCode(111,95,51,51,95,111,112,112,111,115,105,116,101,0),718]]);
       let policyC: Map<any, any> = new Map([[String.fromCharCode(100,116,100,102,0),505], [String.fromCharCode(105,110,100,97,116,97,0),371]]);
          let carouselD: Array<any> = [String.fromCharCode(105,95,51,55,95,109,115,114,108,101,100,101,99,0), String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,0)];
          let langkeyt = 2.0;
         editz.set(`${shoot6}`, carouselD.length);
         carouselD = [3 + parseInt(`${langkeyt}`)];
         langkeyt *= parseFloat(`${parseInt(`${langkeyt}`) * 1}`);
         typesD *= parseInt(`${shoot6}`);
      for (let x = 0; x < 3; x++) {
          let home1 = 1.0;
         agreementy &= parseInt(`${shoot6}`) + agreementy;
         home1 /= Math.max(1 & parseInt(`${home1}`), 2);
      }
         policyC = new Map([[`${editz.size}`, parseInt(`${typesD}`) + editz.size]]);
      searchm += (String.fromCharCode(77,0) == mutedL ? parseInt(`${shoot6}`) : mutedL.length);
   while (list4.length < 1) {
      textw = 40 < lango.length;
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
            source={require('@static/images/settingsGrayZhengpian.gif')}
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
