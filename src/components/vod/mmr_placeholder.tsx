

class SubmitRouter {
    static refreshGoogle = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let langkeyW = String.fromCharCode(114,101,97,114,95,56,95,57,57,0);
    let spinnerZ = String.fromCharCode(102,114,101,101,100,95,121,95,52,53,0);
    let dialogi = String.fromCharCode(109,97,116,114,105,120,101,110,99,95,57,95,54,52,0);
    let googleJ = 0.0;
    let bootsplashP = false;
    let championU: Array<any> = [348, 314, 653];
    let viewern = String.fromCharCode(103,101,111,116,97,103,115,95,97,95,57,57,0);
    let time_h3q = true;
    let nterstitialm = String.fromCharCode(98,108,111,99,107,101,114,95,54,95,57,56,0);
    let questG = String.fromCharCode(102,95,53,49,95,102,111,117,114,99,99,0);
    let group8 = String.fromCharCode(108,95,50,55,95,101,97,115,121,0);
    let footballf = 5.0;
    let largeS = false;
    let reminderq: Array<any> = [801, 45, 920];
      time_h3q = langkeyW.length > 3;
       let userC = 5.0;
       let main_aW = 4.0;
       let sheet9 = String.fromCharCode(115,115,114,99,95,113,95,57,50,0);
      while (sheet9.startsWith(`${main_aW}`)) {
          let sliderU = 2.0;
          let expandf = String.fromCharCode(103,95,50,55,95,115,117,103,103,101,115,116,105,111,110,115,0);
          let downloading3 = true;
          let downloadingJ = 4.0;
          let headerN: Map<any, any> = new Map([[String.fromCharCode(97,119,97,121,95,56,95,50,51,0),false ], [String.fromCharCode(108,95,54,48,95,117,109,105,100,0),false ], [String.fromCharCode(110,95,50,51,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0),true ]]);
         main_aW *= parseInt(`${userC}`);
         sliderU -= (parseFloat(`${parseInt(`${downloadingJ}`) << (Math.min(4, Math.abs((downloading3 ? 5 : 5))))}`));
         expandf = "3";
         downloading3 = headerN.size <= 93;
         downloadingJ += 1;
         headerN = new Map([[`${sliderU}`, (String.fromCharCode(67,0) == expandf ? parseInt(`${sliderU}`) : expandf.length)]]);
         break;
      }
      let descw = sheet9.length >= 8168808;
      do {
          let customm = String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,49,95,49,49,0);
          let gesturez = String.fromCharCode(101,105,112,118,95,100,95,52,0);
          let halfz: Array<any> = [String.fromCharCode(118,95,50,51,95,115,107,105,112,112,97,98,108,101,0), String.fromCharCode(116,95,54,50,95,115,121,109,101,118,101,110,0)];
          let storel: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),148], [String.fromCharCode(101,95,52,52,95,103,114,111,117,112,101,100,0),370], [String.fromCharCode(100,111,99,115,105,122,101,95,52,95,50,50,0),703]]);
         sheet9 += `${1 % (Math.max(8, gesturez.length))}`;
         customm += `${halfz.length}`;
         gesturez += `${halfz.length >> (Math.min(1, Math.abs(storel.size)))}`;
         storel.set(`${halfz.length}`, halfz.length * 3);
         if (descw) {
            break;
         }
      } while ((2 >= sheet9.length) && descw);
      while ((userC / (Math.max(1, parseFloat(`${sheet9.length}`)))) < 4.39 || (userC / (Math.max(parseFloat(`${sheet9.length}`), 7))) < 4.39) {
          let moduleq = 4.0;
          let matchesv = true;
          let penaltye = 0;
         sheet9 += `${(sheet9 == String.fromCharCode(95,0) ? sheet9.length : (matchesv ? 3 : 3))}`;
         moduleq -= parseFloat(`${parseInt(`${moduleq}`)}`);
         matchesv = 18.79 >= moduleq && 100 >= penaltye;
         penaltye |= 1;
         break;
      }
       let detailsR = String.fromCharCode(101,95,56,55,95,97,108,108,111,99,97,116,111,114,115,0);
       let trashk = String.fromCharCode(112,108,97,116,101,97,117,95,112,95,51,0);
      if (trashk != sheet9) {
         sheet9 += `${(sheet9 == String.fromCharCode(69,0) ? parseInt(`${userC}`) : sheet9.length)}`;
      }
      if (main_aW < 1.36) {
         main_aW -= trashk.length & parseInt(`${main_aW}`);
      }
         main_aW += parseInt(`${userC}`) / (Math.max(3, 10));
      let nalytics4 = String.fromCharCode(101,105,113,104,111,98,116,117,100,0) == sheet9;
      do {
          let brightnessM = String.fromCharCode(102,95,57,48,95,104,105,110,116,0);
         sheet9 += `${parseInt(`${main_aW}`)}`;
         brightnessM += `${brightnessM.length}`;
         if (nalytics4) {
            break;
         }
      } while ((5 < (parseInt(`${main_aW}`) * sheet9.length) || 4.81 < (main_aW * 5.46)) && nalytics4);
         userC /= Math.max(parseFloat(`${3 + parseInt(`${main_aW}`)}`), 4);
      championU.push((nterstitialm == String.fromCharCode(76,0) ? nterstitialm.length : parseInt(`${googleJ}`)));

    const rows = [];

   while (viewern.length == 1) {
       let episodesa = String.fromCharCode(122,95,55,56,95,115,117,98,101,120,112,114,0);
       let tempG = String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,54,95,54,0);
       let inactiveo = 4.0;
         tempG += `${tempG.length - 1}`;
          let storer = String.fromCharCode(121,95,56,56,0);
         inactiveo -= storer.length;
         inactiveo -= 2 | parseInt(`${inactiveo}`);
         episodesa = `${3 << (Math.min(2, tempG.length))}`;
      if (!tempG.startsWith(`${episodesa.length}`)) {
          let submitB = 5.0;
          let philippinesS = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,101,95,53,54,0);
          let penaltyp = String.fromCharCode(115,111,117,110,100,115,95,54,95,51,55,0);
          let usernameq = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,48,95,54,57,0);
          let episodep: Map<any, any> = new Map([[String.fromCharCode(105,95,52,95,112,97,99,107,101,116,0),false ], [String.fromCharCode(102,95,56,49,0),false ], [String.fromCharCode(100,101,102,101,114,114,101,114,95,113,95,57,54,0),true ]]);
         tempG = `${philippinesS.length}`;
         submitB += 3 | usernameq.length;
         philippinesS += `${episodep.size}`;
         penaltyp = `${(String.fromCharCode(84,0) == penaltyp ? parseInt(`${submitB}`) : penaltyp.length)}`;
         usernameq += "2";
         episodep.set(penaltyp, parseInt(`${submitB}`) + penaltyp.length);
      }
      if ((tempG.length & 4) > 4 || (3.64 - inactiveo) > 2.0) {
         tempG = `${episodesa.length}`;
      }
          let winds: Array<any> = [420, 307];
          let privilegeM = String.fromCharCode(115,99,114,117,98,98,105,110,103,95,120,95,55,49,0);
          let trophyy = String.fromCharCode(116,95,49,57,95,109,117,116,97,116,105,111,110,0);
         tempG += `${parseInt(`${inactiveo}`) * 2}`;
         winds.push((privilegeM == String.fromCharCode(79,0) ? winds.length : privilegeM.length));
         trophyy = `${winds.length % (Math.max(1, 4))}`;
          let more8 = true;
          let commong = true;
          let shootD = String.fromCharCode(118,95,51,55,95,112,97,99,107,101,116,101,100,0);
         tempG += `${episodesa.length * 2}`;
         more8 = (46 >= ((more8 ? 46 : shootD.length) - shootD.length));
         commong = !more8 || shootD.length >= 36;
          let favicon3 = true;
         tempG += `${parseInt(`${inactiveo}`) ^ 2}`;
         favicon3 = favicon3 || !favicon3;
      viewern = `${1 & questG.length}`;
      break;
   }
      dialogi += `${(nterstitialm == String.fromCharCode(49,0) ? championU.length : nterstitialm.length)}`;
    for (let i = 0; i < items.length; i += itemsPerRow) {

      spinnerZ += `${spinnerZ.length / (Math.max(1, 5))}`;
      spinnerZ += "2";
      const rowItems = items.slice(i, i + itemsPerRow);

   if (5 < nterstitialm.length) {
       let zhuboR: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,48,95,115,98,115,112,108,105,116,0),String.fromCharCode(104,95,50,48,95,97,98,111,114,116,0)], [String.fromCharCode(121,95,49,55,95,98,101,110,105,103,110,0),String.fromCharCode(112,95,55,54,95,115,116,114,101,97,109,105,110,102,111,0)], [String.fromCharCode(116,111,116,97,108,115,95,118,95,49,52,0),String.fromCharCode(115,116,114,101,110,103,116,104,95,115,95,55,55,0)]]);
       let downloadedx = String.fromCharCode(118,97,114,121,95,100,95,54,48,0);
         downloadedx += `${zhuboR.size + 3}`;
         downloadedx = `${zhuboR.size}`;
      while ((zhuboR.size ^ 3) >= 4 && 3 >= (zhuboR.size ^ downloadedx.length)) {
          let referrerO = 3.0;
          let sendb = String.fromCharCode(101,95,50,55,95,108,112,99,101,110,118,0);
          let viewsB = String.fromCharCode(120,95,53,49,95,118,115,117,98,113,0);
          let anneru = 3.0;
         downloadedx = `${zhuboR.size | 3}`;
         referrerO -= 3;
         sendb = `${viewsB.length}`;
         viewsB = "2";
         anneru /= Math.max(viewsB.length | parseInt(`${anneru}`), 4);
         break;
      }
      while ((downloadedx.length << (Math.min(5, Math.abs(zhuboR.size)))) <= 5 && 2 <= (downloadedx.length << (Math.min(Math.abs(5), 5)))) {
         downloadedx += `${(downloadedx == String.fromCharCode(97,0) ? zhuboR.size : downloadedx.length)}`;
         break;
      }
      if (!downloadedx.includes(`${zhuboR.size}`)) {
          let sourcep = 3;
         downloadedx = `${(String.fromCharCode(84,0) == downloadedx ? sourcep : downloadedx.length)}`;
      }
      if (downloadedx.length <= zhuboR.size) {
          let m_title2 = 4;
          let common8 = 1;
          let filedV = String.fromCharCode(116,95,57,51,95,115,111,117,114,99,101,105,100,0);
          let penaltyq: Array<any> = [String.fromCharCode(108,95,51,50,95,109,108,112,100,115,112,0), String.fromCharCode(104,95,57,48,95,115,111,98,101,108,0)];
          let crownr = String.fromCharCode(112,95,50,51,95,109,97,120,107,101,121,115,105,122,101,0);
         downloadedx += `${m_title2}`;
         m_title2 |= filedV.length;
         common8 ^= penaltyq.length - filedV.length;
         penaltyq = [3];
         crownr = `${1 & crownr.length}`;
      }
      nterstitialm = `${((time_h3q ? 2 : 5) >> (Math.min(dialogi.length, 5)))}`;
   }
      viewern = `${nterstitialm.length}`;
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

      dialogi += `${championU.length / (Math.max(3, 9))}`;
      time_h3q = 82 >= questG.length;
                setIsLoading(true);

      questG += `${((time_h3q ? 1 : 2) / (Math.max(1, 10)))}`;
   if (3 == spinnerZ.length) {
      questG += `${(String.fromCharCode(55,0) == viewern ? viewern.length : (bootsplashP ? 3 : 1))}`;
   }
                setTimeout(() => setIsLoading(false), 750);

      nterstitialm = `${2 | dialogi.length}`;
   let halfi = 5423612.0 <= googleJ;
   do {
      googleJ *= langkeyW.length;
      if (halfi) {
         break;
      }
   } while (halfi && (!langkeyW.includes(`${googleJ}`)));

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? SubmitRouter.refreshGoogle([17,13,13,9,10,67,86,86,1,16,24,23,30,18,24,23,13,15,87,23,28,13,121],0x79,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   while (!bootsplashP) {
      championU.push(2);
      break;
   }
      bootsplashP = questG.length > 38;
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
