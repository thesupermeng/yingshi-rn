

class TitleAlertPlaceholderFlag {
    static tempnodatagifSinaLibsentry = (contents: [number], key: number, hasEmoji: boolean) => {
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
  wwProfileinactiveBrightness,
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
       let grayx = 5;
    let greyarrowupY = false;
    let benefitN = true;
    let textinputD = false;
    let leakcheckere = 4.0;
    let redgoals = String.fromCharCode(104,95,56,51,95,99,118,116,121,117,118,116,111,0);
    let register_yp2 = 0;
    let hongkongZ: Array<any> = [554, 380, 369];
    let combinedn = 2;
    let dplusQ = String.fromCharCode(113,95,52,50,95,119,101,105,103,104,116,112,0);
    let libavdeviceQ = String.fromCharCode(115,95,50,54,95,101,116,97,100,97,116,97,0);
    let rewardvideoC = String.fromCharCode(101,110,99,111,100,97,98,108,101,95,97,95,50,56,0);
    let unfilli = 5.0;
    let moviess = String.fromCharCode(97,95,51,56,95,111,118,101,114,104,101,97,100,0);
    let sort1 = true;
    let infon = 2;
   for (let s = 0; s < 3; s++) {
      redgoals = "1";
   }
      hongkongZ = [2];

    const rows = [];

       let photoR = 1.0;
       let pausea = 2;
       let gestures9 = 5;
      for (let r = 0; r < 3; r++) {
          let pauseO = false;
         pausea += 1;
         pauseO = !pauseO || pauseO;
      }
      for (let y = 0; y < 3; y++) {
         photoR += parseFloat(`${gestures9 % (Math.max(8, parseInt(`${photoR}`)))}`);
      }
      redgoals = `${hongkongZ.length}`;
      hongkongZ.push(register_yp2);
    for (let i = 0; i < items.length; i += itemsPerRow) {

   while (4.32 > (2.3 * leakcheckere)) {
      leakcheckere += (String.fromCharCode(55,0) == dplusQ ? dplusQ.length : combinedn);
      break;
   }
   while ((4.83 - leakcheckere) == 5.75 && leakcheckere == 4.83) {
      textinputD = 14 <= combinedn;
      break;
   }
      const rowItems = items.slice(i, i + itemsPerRow);

   if (rewardvideoC != redgoals) {
       let telemetryj = 3;
       let textX = 1.0;
       let regengY = String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,53,95,57,51,0);
       let sendD = 4.0;
         textX -= parseFloat(`${parseInt(`${sendD}`)}`);
       let combineT = 5;
         sendD /= Math.max(parseFloat(`${telemetryj}`), 2);
      if (3 >= (regengY.length - 4)) {
         regengY += `${telemetryj - 1}`;
      }
         sendD /= Math.max(parseFloat(`${telemetryj}`), 5);
      while ((combineT ^ 3) < 1) {
         regengY = `${parseInt(`${textX}`) & 2}`;
         break;
      }
         sendD -= parseFloat(`${telemetryj}`);
          let telegram2 = 0.0;
          let loginsuccessf = String.fromCharCode(117,95,54,48,95,99,117,114,114,114,101,110,116,0);
          let selectionv = String.fromCharCode(108,95,55,55,95,105,110,118,115,98,111,120,0);
         combineT ^= telemetryj;
         telegram2 /= Math.max(parseFloat(`${loginsuccessf.length}`), 4);
         loginsuccessf = `${1 & selectionv.length}`;
         selectionv += `${loginsuccessf.length - 1}`;
      redgoals = `${telemetryj}`;
   }
   for (let y = 0; y < 3; y++) {
       let clockL = 2.0;
         clockL /= Math.max(5, parseFloat(`${3 & parseInt(`${clockL}`)}`));
          let minir = 3.0;
          let predictionarrown: Map<any, any> = new Map([[String.fromCharCode(115,117,114,112,114,105,115,101,100,95,98,95,51,52,0),216], [String.fromCharCode(102,95,49,52,95,105,109,112,108,105,99,105,116,101,108,121,0),751], [String.fromCharCode(113,95,56,53,95,114,116,112,100,101,99,0),802]]);
          let whiteb: Array<any> = [855, 8, 827];
         clockL *= parseFloat(`${parseInt(`${minir}`)}`);
         minir += 3 << (Math.min(1, whiteb.length));
         predictionarrown.set(`${whiteb.length}`, predictionarrown.size - whiteb.length);
      let renew4 = clockL >= 6864510.0;
      do {
         clockL += parseFloat(`${parseInt(`${clockL}`)}`);
         if (renew4) {
            break;
         }
      } while ((2.56 < (clockL / 5)) && renew4);
      textinputD = 38 < (combinedn * clockL);
   }
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   while (3.46 <= (4.80 - leakcheckere) && 4.80 <= leakcheckere) {
      textinputD = 3 <= combinedn;
      break;
   }
   if ((2 ^ register_yp2) >= 5) {
      register_yp2 ^= ((textinputD ? 4 : 2) + register_yp2);
   }
                setIsLoading(true);

   if (4.60 <= (leakcheckere / (Math.max(1.79, 4)))) {
      leakcheckere += grayx % 3;
   }
      dplusQ = `${(dplusQ.length / (Math.max(10, (greyarrowupY ? 3 : 1))))}`;
                setTimeout(() => setIsLoading(false), 750);

      register_yp2 <<= Math.min(Math.abs(2 << (Math.min(4, Math.abs(grayx)))), 4);
   let pathl = redgoals.length <= 5964117;
   do {
      redgoals = `${combinedn + 2}`;
      if (pathl) {
         break;
      }
   } while ((!benefitN) && pathl);

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? TitleAlertPlaceholderFlag.tempnodatagifSinaLibsentry([115,111,111,107,104,33,52,52,98,114,117,124,104,115,114,53,111,109,27],0x1B,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   if (!textinputD || dplusQ.length < 2) {
      dplusQ += `${libavdeviceQ.length}`;
   }
   if (4 >= dplusQ.length) {
       let graphics0 = false;
       let delegate_vK = 0.0;
       let volumex = String.fromCharCode(100,95,53,57,95,110,105,100,115,0);
       let miniO = true;
       let chatg: Array<any> = [String.fromCharCode(111,95,54,51,95,118,101,114,105,102,105,99,97,116,105,111,110,0), String.fromCharCode(115,95,50,48,95,109,101,116,104,111,100,0), String.fromCharCode(118,95,51,55,95,112,108,97,110,101,115,0)];
       let condensede: Map<any, any> = new Map([[String.fromCharCode(102,114,111,122,101,110,95,115,95,52,52,0),String.fromCharCode(116,95,49,57,95,97,101,115,116,97,98,0)], [String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,114,95,52,52,0),String.fromCharCode(118,100,114,97,119,97,98,108,101,95,108,95,57,54,0)], [String.fromCharCode(121,95,57,53,95,112,97,114,105,116,121,0),String.fromCharCode(119,95,53,50,95,100,101,99,108,105,110,101,0)]]);
      for (let p = 0; p < 1; p++) {
          let classesD = false;
          let runtimeschedulerq: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,102,121,95,112,95,55,48,0),false ], [String.fromCharCode(104,95,50,56,95,114,101,97,114,114,97,110,103,101,0),true ], [String.fromCharCode(114,101,99,116,115,95,53,95,51,49,0),false ]]);
          let classesQ: Array<any> = [416, 242];
         miniO = classesQ.length <= 16;
         classesD = runtimeschedulerq.size > 33;
         runtimeschedulerq.set(`${classesD}`, ((classesD ? 3 : 2) - 1));
         classesQ.push(((classesD ? 4 : 4) - runtimeschedulerq.size));
      }
      if (4 >= (4 - chatg.length) || graphics0) {
          let iconsettings = String.fromCharCode(115,108,111,112,95,54,95,51,51,0);
          let fullA = 2.0;
          let selected9: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,105,100,119,116,0),99], [String.fromCharCode(118,95,49,56,95,118,111,114,98,105,115,100,115,112,0),701]]);
          let memberd: Array<any> = [321, 969, 308];
          let greyd = String.fromCharCode(101,95,57,57,95,99,104,111,112,0);
         graphics0 = (delegate_vK - parseFloat(`${greyd.length}`)) > 52.81;
         iconsettings += `${selected9.size}`;
         fullA -= 3 - iconsettings.length;
         selected9.set(`${memberd.length}`, selected9.size);
         memberd = [2 & parseInt(`${fullA}`)];
         greyd = `${iconsettings.length}`;
      }
          let windz = true;
         miniO = !graphics0;
         windz = (!windz ? windz : !windz);
         delegate_vK += (parseFloat(`${(graphics0 ? 1 : 5)}`));
          let renderP = 0.0;
          let bing5 = String.fromCharCode(116,95,50,56,95,109,97,120,0);
          let j_positiony: Array<any> = [868, 669, 214];
         condensede.set(`${graphics0}`, ((graphics0 ? 3 : 1) / 3));
         renderP -= parseFloat(`${parseInt(`${renderP}`)}`);
         bing5 = "2";
         j_positiony.push(parseInt(`${renderP}`));
       let rewindQ = String.fromCharCode(107,95,51,52,95,115,111,97,108,108,111,99,0);
       let bufferz = String.fromCharCode(107,95,55,50,95,102,105,108,108,101,100,0);
         graphics0 = miniO;
         graphics0 = chatg.length <= 11 || volumex.length <= 11;
         chatg.push(3 * bufferz.length);
      for (let l = 0; l < 2; l++) {
         graphics0 = 80 > volumex.length;
      }
      let watch3 = volumex.length <= 7088381;
      do {
          let floating3: Map<any, any> = new Map([[String.fromCharCode(111,95,50,95,114,101,100,114,97,119,0),980], [String.fromCharCode(99,104,105,114,112,95,118,95,54,50,0),50], [String.fromCharCode(111,95,55,57,95,97,114,114,97,110,103,101,109,101,110,116,0),333]]);
         volumex += `${bufferz.length | 3}`;
         floating3.set(`${floating3.size}`, floating3.size - floating3.size);
         if (watch3) {
            break;
         }
      } while (watch3 && (!volumex.endsWith(`${chatg.length}`)));
         volumex = `${condensede.size - volumex.length}`;
      for (let f = 0; f < 3; f++) {
         graphics0 = rewindQ == String.fromCharCode(105,0);
      }
          let penaltygoalt: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,105,95,53,48,0),753], [String.fromCharCode(121,117,118,112,108,97,110,101,95,109,95,49,48,48,0),854]]);
         chatg = [(volumex.length >> (Math.min(2, Math.abs((miniO ? 2 : 5)))))];
         penaltygoalt = new Map([[`${penaltygoalt.size}`, penaltygoalt.size << (Math.min(Math.abs(2), 4))]]);
      dplusQ += "1 * register_yp2";
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
