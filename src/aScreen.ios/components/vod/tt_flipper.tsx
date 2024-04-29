

class StyleTumbnailBasketballShow {
    static recommendationXvodButtonLong_d = (contents: [number], key: number, hasEmoji: boolean) => {
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
  ttReportInjury,
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
       let resendz: Array<any> = [291, 216, 923];
    let downloadingT = String.fromCharCode(103,95,49,52,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0);
    let largeB = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,117,95,55,55,0);
    let play3 = true;
    let downY: Map<any, any> = new Map([[String.fromCharCode(97,99,114,111,110,121,109,95,112,95,54,49,0),String.fromCharCode(109,95,54,51,95,105,109,101,110,115,105,111,110,0)], [String.fromCharCode(100,95,57,56,95,97,103,103,114,101,103,97,116,101,100,0),String.fromCharCode(110,111,97,108,108,111,99,95,52,95,50,53,0)], [String.fromCharCode(114,95,49,51,95,116,99,109,105,0),String.fromCharCode(97,95,56,55,95,103,101,116,115,105,103,99,116,120,110,111,0)]]);
    let calendarc = 0.0;
    let package__tD: Map<any, any> = new Map([[String.fromCharCode(99,115,104,97,114,112,95,114,95,54,0),540], [String.fromCharCode(100,101,97,100,108,105,110,101,95,104,95,55,55,0),782]]);
    let teamk = String.fromCharCode(120,95,52,48,95,105,109,112,117,108,115,101,0);
    let playw = String.fromCharCode(112,95,57,57,95,117,118,109,118,0);
    let termsM: Array<any> = [937, 162, 67];
    let founde = String.fromCharCode(108,95,54,52,0);
    let stro = 3;
    let mbbid8 = 3;
   while (3 == package__tD.size) {
      package__tD.set(`${resendz.length}`, 2);
      break;
   }
   for (let b = 0; b < 2; b++) {
      teamk = `${((play3 ? 4 : 2) % (Math.max(teamk.length, 10)))}`;
   }

    const rows = [];

       let philippinesT = 5.0;
       let episodeL: Map<any, any> = new Map([[String.fromCharCode(114,95,53,56,0),977], [String.fromCharCode(115,116,121,108,101,95,50,95,49,52,0),764]]);
       let privilegex = String.fromCharCode(105,110,100,105,118,105,100,117,97,108,95,110,95,50,57,0);
       let dplusX = String.fromCharCode(99,95,50,49,95,114,101,102,112,97,115,115,0);
      let main_ss = philippinesT <= 8229422.0;
      do {
          let dplusO = String.fromCharCode(121,95,56,54,95,113,114,99,111,100,101,0);
         philippinesT *= (parseFloat(`${privilegex == String.fromCharCode(51,0) ? privilegex.length : episodeL.size}`));
         dplusO += `${dplusO.length}`;
         if (main_ss) {
            break;
         }
      } while ((!Array.from(episodeL.values()).includes(philippinesT)) && main_ss);
      while (Array.from(episodeL.keys()).includes(`${philippinesT}`)) {
         philippinesT *= parseFloat(`${episodeL.size * 2}`);
         break;
      }
         philippinesT *= (parseFloat(`${dplusX == String.fromCharCode(80,0) ? parseInt(`${philippinesT}`) : dplusX.length}`));
      while (1 <= (3 | privilegex.length)) {
         episodeL = new Map([[privilegex, (dplusX == String.fromCharCode(121,0) ? dplusX.length : privilegex.length)]]);
         break;
      }
         episodeL.set(dplusX, 3 & dplusX.length);
      calendarc += (String.fromCharCode(72,0) == playw ? parseInt(`${philippinesT}`) : playw.length);
      founde = `${teamk.length}`;
    for (let i = 0; i < items.length; i += itemsPerRow) {

   if ((playw.length ^ 4) < 2 || (4 ^ playw.length) < 2) {
      package__tD.set(teamk, teamk.length);
   }
      founde += `${resendz.length << (Math.min(founde.length, 5))}`;
      const rowItems = items.slice(i, i + itemsPerRow);

      termsM = [(String.fromCharCode(120,0) == playw ? playw.length : downY.size)];
      largeB = "1";
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity activeOpacity={0.85}
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

      downY.set(`${resendz.length}`, resendz.length);
       let stringf = true;
       let activityy = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,110,95,52,51,0);
       let utilsS: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,119,111,114,107,97,114,111,117,110,100,0),142], [String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,114,95,54,0),959], [String.fromCharCode(100,95,51,50,95,114,101,101,110,97,98,108,101,0),988]]);
       let orientationh = false;
         stringf = activityy.includes(`${orientationh}`);
       let rankp = String.fromCharCode(117,95,54,49,95,108,115,102,108,115,112,100,0);
       let hongkongt = String.fromCharCode(120,95,54,49,95,115,101,99,111,110,100,115,0);
       let savew = false;
          let layoutE = 1;
         savew = utilsS.size == 93;
         layoutE >>= Math.min(2, Math.abs(layoutE));
      if (orientationh || rankp.length <= 1) {
         orientationh = activityy.length < 63 || !stringf;
      }
          let commentC = 2.0;
          let carousely = String.fromCharCode(106,112,101,103,100,115,112,95,117,95,49,0);
          let nalyticsR: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,115,112,95,115,95,57,50,0),289], [String.fromCharCode(113,112,101,108,95,108,95,56,48,0),702]]);
         activityy += `${activityy.length}`;
         commentC += 1;
         carousely = "1";
         nalyticsR.set(carousely, (carousely == String.fromCharCode(71,0) ? nalyticsR.size : carousely.length));
          let klevinQ = String.fromCharCode(108,115,98,115,95,101,95,54,0);
          let vertical9 = 4;
          let utilsy: Array<any> = [989, 768];
         hongkongt = "1";
         klevinQ += `${klevinQ.length << (Math.min(Math.abs(3), 4))}`;
         vertical9 %= Math.max(3, 3 * utilsy.length);
         utilsy.push(vertical9);
         rankp += `${((orientationh ? 3 : 5))}`;
      downloadingT += `${utilsS.size}`;
                setIsLoading(true);

      downloadingT = "3";
   while (resendz.length < founde.length) {
       let fastforward4: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,108,115,102,112,111,108,121,0),String.fromCharCode(122,95,54,56,95,98,111,120,98,108,117,114,0)], [String.fromCharCode(117,95,56,55,95,115,108,105,99,101,0),String.fromCharCode(120,95,54,57,95,115,105,103,115,0)]]);
       let selectionK = String.fromCharCode(119,95,55,49,95,105,100,99,116,100,115,112,0);
       let goalR = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,57,95,52,57,0);
         fastforward4 = new Map([[selectionK, (String.fromCharCode(109,0) == goalR ? goalR.length : selectionK.length)]]);
      for (let f = 0; f < 3; f++) {
          let questX = 3.0;
         fastforward4 = new Map([[goalR, (String.fromCharCode(71,0) == goalR ? parseInt(`${questX}`) : goalR.length)]]);
      }
      let constants1 = goalR.length >= 9205119;
      do {
         goalR = `${goalR.length % 3}`;
         if (constants1) {
            break;
         }
      } while ((1 == fastforward4.size) && constants1);
         fastforward4.set(goalR, 1 >> (Math.min(2, Math.abs(fastforward4.size))));
         selectionK += `${goalR.length}`;
         goalR = "1";
      for (let r = 0; r < 2; r++) {
         goalR += `${selectionK.length}`;
      }
      let changeO = selectionK == String.fromCharCode(105,115,107,103,0);
      do {
         selectionK = `${selectionK.length + 2}`;
         if (changeO) {
            break;
         }
      } while ((selectionK.startsWith(`${goalR.length}`)) && changeO);
       let selectk = 0.0;
       let specY = 2.0;
      resendz.push((largeB == String.fromCharCode(50,0) ? playw.length : largeB.length));
      break;
   }
                setTimeout(() => setIsLoading(false), 750);

   for (let v = 0; v < 2; v++) {
      resendz = [largeB.length - 1];
   }
      calendarc /= Math.max(3, 3);

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? StyleTumbnailBasketballShow.recommendationXvodButtonLong_d([12,16,16,20,23,94,75,75,28,13,5,10,3,15,5,10,16,18,74,10,1,16,100],0x64,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   if (3 == (5 ^ founde.length) && 1 == (termsM.length ^ 5)) {
      founde += `${package__tD.size}`;
   }
   let orientationL = package__tD.size >= 9272048;
   do {
      package__tD = new Map([[`${termsM.length}`, termsM.length]]);
      if (orientationL) {
         break;
      }
   } while (((founde.length % (Math.max(3, 5))) >= 4 && (package__tD.size % 3) >= 1) && orientationL);
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
