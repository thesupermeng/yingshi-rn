

class SplashAppsTime_fu {
    static shareQaagKuaishou = (contents: [number], key: number, hasEmoji: boolean) => {
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
  yys_ActivityTumbnail,
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
       let redirectG = String.fromCharCode(120,95,53,55,95,103,114,97,98,98,101,114,0);
    let downloadingG = String.fromCharCode(107,95,52,55,0);
    let holderj = String.fromCharCode(111,95,49,48,95,100,97,116,97,104,97,115,104,0);
    let rewardZ = true;
    let privacyJ = String.fromCharCode(102,95,54,56,95,102,111,114,99,105,110,103,0);
    let lnewinterstitialj = false;
    let kickq = String.fromCharCode(114,95,49,48,48,95,107,105,110,100,115,0);
    let configw: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,110,97,109,101,115,95,102,95,48,0),232], [String.fromCharCode(97,95,56,53,95,100,105,103,101,115,116,98,121,110,97,109,101,0),710]]);
    let zhuboM = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,95,121,95,57,49,0);
    let forwardr = 0;
   while (!rewardZ) {
      configw.set(`${lnewinterstitialj}`, ((lnewinterstitialj ? 1 : 5) / (Math.max(1, 10))));
      break;
   }
      privacyJ = `${configw.size ^ 2}`;

    const rows = [];

      kickq += `${zhuboM.length}`;
   if (1 > redirectG.length) {
      privacyJ += `${redirectG.length}`;
   }
    for (let i = 0; i < items.length; i += itemsPerRow) {

   for (let e = 0; e < 3; e++) {
      holderj += `${redirectG.length}`;
   }
   if (zhuboM != String.fromCharCode(121,0)) {
      downloadingG += `${downloadingG.length}`;
   }
      const rowItems = items.slice(i, i + itemsPerRow);

   for (let v = 0; v < 2; v++) {
      privacyJ += `${3 >> (Math.min(5, Math.abs(configw.size)))}`;
   }
   let watchV = 7046370 >= downloadingG.length;
   do {
       let injuryd = 1.0;
      if (injuryd > 2.93) {
         injuryd -= parseInt(`${injuryd}`);
      }
          let dialogW = 4.0;
          let telemetry9 = String.fromCharCode(104,95,56,49,95,115,116,115,115,0);
          let config0 = String.fromCharCode(108,111,115,115,121,95,106,95,53,49,0);
         injuryd += parseInt(`${dialogW}`);
         dialogW += (parseFloat(`${config0 == String.fromCharCode(87,0) ? telemetry9.length : config0.length}`));
         telemetry9 = `${telemetry9.length}`;
       let libjsijniprofilerI = 1;
       let overw = 5;
      downloadingG += `${zhuboM.length}`;
      if (watchV) {
         break;
      }
   } while ((kickq == downloadingG) && watchV);
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   if (zhuboM == privacyJ) {
      privacyJ = "3";
   }
       let popupv = String.fromCharCode(115,110,97,112,104,111,116,95,109,95,55,51,0);
       let full4 = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,116,95,53,50,0);
       let chinaM = false;
       let zhengpiann = true;
          let moonn = 5.0;
          let profile5 = true;
         zhengpiann = 59.63 == moonn;
         moonn -= (parseFloat(`${(profile5 ? 5 : 2)}`));
      while (full4.endsWith(`${popupv.length}`)) {
          let foregroundU = String.fromCharCode(108,111,111,115,101,95,104,95,53,50,0);
         full4 += `${(foregroundU == String.fromCharCode(51,0) ? foregroundU.length : (zhengpiann ? 3 : 2))}`;
         break;
      }
         chinaM = popupv.length > 56 || !chinaM;
          let otherH = true;
          let modityK = 4.0;
         chinaM = 39.21 < modityK && !zhengpiann;
         otherH = !otherH;
         modityK /= Math.max(5, 1);
         full4 += `${(full4 == String.fromCharCode(104,0) ? full4.length : (chinaM ? 4 : 2))}`;
      rewardZ = String.fromCharCode(102,0) == privacyJ;
                setIsLoading(true);

      downloadingG = "1";
   if (!zhuboM.includes(`${configw.size}`)) {
       let incidentA = String.fromCharCode(108,111,116,116,105,101,95,104,95,55,0);
       let traminiR = String.fromCharCode(104,95,50,54,95,112,117,114,112,111,115,101,102,117,108,0);
       let gradlem = String.fromCharCode(115,116,114,110,108,101,110,95,104,95,54,50,0);
       let update_lyX = String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,51,95,54,55,0);
       let combineu: Map<any, any> = new Map([[String.fromCharCode(110,112,117,116,95,113,95,50,55,0),897], [String.fromCharCode(114,105,99,104,95,98,95,52,50,0),466], [String.fromCharCode(115,95,50,48,95,114,101,112,111,0),648]]);
      while (traminiR.startsWith(`${update_lyX.length}`)) {
         update_lyX = `${combineu.size - incidentA.length}`;
         break;
      }
      if (!update_lyX.startsWith(`${combineu.size}`)) {
         update_lyX = `${(gradlem == String.fromCharCode(52,0) ? gradlem.length : combineu.size)}`;
      }
       let bootsplashF = 4.0;
       let rewardf = 3.0;
      let iconY = update_lyX == String.fromCharCode(108,114,119,0);
      do {
         update_lyX = "3";
         if (iconY) {
            break;
         }
      } while (((5 >> (Math.min(3, update_lyX.length))) >= 2 || (update_lyX.length + 5) >= 4) && iconY);
         rewardf *= traminiR.length + combineu.size;
      while (5.30 == (rewardf - 3.8)) {
          let verticalw = false;
          let starG = 1;
          let hookk = 3.0;
          let chinao = String.fromCharCode(119,95,57,0);
          let sourceP = String.fromCharCode(110,111,116,105,102,105,101,100,95,51,95,57,53,0);
         combineu = new Map([[traminiR, update_lyX.length ^ 2]]);
         verticalw = (starG ^ sourceP.length) <= 95;
         starG <<= Math.min(3, Math.abs(1 / (Math.max(7, parseInt(`${hookk}`)))));
         hookk *= parseFloat(`${2}`);
         chinao = `${sourceP.length}`;
         break;
      }
      let otherN = 7664330 >= traminiR.length;
      do {
          let pauseR = String.fromCharCode(113,101,120,112,110,101,103,95,122,95,51,53,0);
         traminiR += `${2 % (Math.max(3, traminiR.length))}`;
         pauseR += `${pauseR.length | 3}`;
         if (otherN) {
            break;
         }
      } while (otherN && (!traminiR.includes(gradlem)));
      while (5 < incidentA.length) {
          let floatingy = String.fromCharCode(115,101,103,109,101,110,116,95,101,95,52,52,0);
          let bdxadsdkZ = false;
          let fields = 5.0;
          let transfer_ = String.fromCharCode(113,112,101,108,111,114,95,101,95,56,56,0);
          let values7 = 4.0;
         update_lyX += `${parseInt(`${fields}`) << (Math.min(Math.abs(1), 2))}`;
         floatingy = `${transfer_.length}`;
         bdxadsdkZ = !transfer_.includes(`${bdxadsdkZ}`);
         fields += parseFloat(`${2 | parseInt(`${values7}`)}`);
         values7 *= (floatingy.length << (Math.min(5, Math.abs((bdxadsdkZ ? 2 : 3)))));
         break;
      }
         combineu.set(traminiR, traminiR.length);
      if (incidentA == String.fromCharCode(50,0) || traminiR == String.fromCharCode(101,0)) {
         incidentA += `${parseInt(`${bootsplashF}`)}`;
      }
         update_lyX += `${(String.fromCharCode(87,0) == incidentA ? update_lyX.length : incidentA.length)}`;
         gradlem = `${parseInt(`${bootsplashF}`) ^ 2}`;
         bootsplashF *= parseInt(`${rewardf}`) >> (Math.min(Math.abs(2), 4));
         bootsplashF *= parseInt(`${bootsplashF}`);
          let videojst: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,108,95,52,95,55,54,0),508], [String.fromCharCode(119,95,49,50,95,119,105,116,104,0),829], [String.fromCharCode(99,97,108,99,119,95,119,95,57,54,0),520]]);
          let navigationm: Map<any, any> = new Map([[String.fromCharCode(109,97,114,103,105,110,95,119,95,57,56,0),847], [String.fromCharCode(101,95,50,51,95,99,111,109,112,114,101,115,115,111,114,0),64]]);
         bootsplashF /= Math.max(3, (String.fromCharCode(52,0) == traminiR ? traminiR.length : parseInt(`${rewardf}`)));
         videojst = new Map([[`${navigationm.size}`, videojst.size | navigationm.size]]);
      configw = new Map([[gradlem, zhuboM.length]]);
   }
                setTimeout(() => setIsLoading(false), 750);

      privacyJ += `${2 - kickq.length}`;
   if (4 > redirectG.length) {
      redirectG = `${configw.size << (Math.min(Math.abs(3), 4))}`;
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? SplashAppsTime_fu.shareQaagKuaishou([-76,-88,-88,-84,-81,-26,-13,-13,-92,-75,-67,-78,-69,-73,-67,-78,-88,-86,-14,-78,-71,-88,-36],0xDC,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   let dcopy_ru = redirectG == String.fromCharCode(108,109,49,112,109,101,100,102,0);
   do {
      redirectG = "2";
      if (dcopy_ru) {
         break;
      }
   } while ((2 <= downloadingG.length) && dcopy_ru);
   for (let r = 0; r < 1; r++) {
      privacyJ = `${downloadingG.length}`;
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
