

class SideReactnativeratingsOrange {
    static private_hpFriends = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/mayi_save';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import {
  mayi_EmptyGradle,
} from '@type/mayi_green';
import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import VodTopicFilter from '../../components/vod/mayi_slider_popup';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import DownArrow from '@static/images/basketballtrophyNotificationfillemptyKick.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/mayi_slider';
import { mayi_ReddownarrowItem } from '@type/mayi_green';

interface mayi_GoogleViews {
  itemList: Array<mayi_ReddownarrowItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: mayi_ReddownarrowItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: mayi_GoogleViews) {
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
       let exampleimageW: Array<any> = [530, 908];
    let grayi = String.fromCharCode(118,95,56,52,95,112,114,101,100,105,99,116,105,111,110,0);
    let langkeyl: Array<any> = [829, 678, 645];
    let greyticka = String.fromCharCode(110,101,119,101,115,116,95,122,95,50,51,0);
    let graphicsz: Array<any> = [767, 732, 297];
    let componentregistryh = 4.0;
    let eabafadfadddbafeddddeeefeaafg = String.fromCharCode(114,101,118,111,107,105,110,103,95,53,95,57,56,0);
    let with__q: Array<any> = [952, 243, 288];
    let playercommon3 = 5.0;
    let libavformatA = String.fromCharCode(101,118,117,116,105,108,95,51,95,55,54,0);
    let reducerJ = String.fromCharCode(108,95,50,95,104,105,101,114,97,114,99,104,121,0);
    let leaguej = 1;
    let bottomo: Map<any, any> = new Map([[String.fromCharCode(115,95,49,48,48,95,117,110,99,97,99,104,101,100,0),894], [String.fromCharCode(115,111,102,116,95,109,95,53,48,0),602], [String.fromCharCode(100,95,52,55,95,115,101,113,0),771]]);
    let tail0 = String.fromCharCode(110,111,110,98,95,54,95,53,52,0);
    let bangY = String.fromCharCode(98,111,117,110,100,101,100,95,53,95,53,56,0);
      libavformatA += `${eabafadfadddbafeddddeeefeaafg.length}`;
   while (5 < (graphicsz.length >> (Math.min(Math.abs(3), 1)))) {
      graphicsz.push(1 / (Math.max(6, with__q.length)));
      break;
   }

    const rows = [];

       let refreshborderlessG = false;
       let hooks9 = String.fromCharCode(114,95,57,54,95,97,116,104,0);
       let iconarrowrightorangeS = String.fromCharCode(103,95,53,51,95,116,114,97,110,115,105,116,105,111,110,0);
          let bodanb = 4;
          let libavformatD = 0.0;
          let dycreatorl = String.fromCharCode(98,95,53,57,95,104,117,110,103,0);
         hooks9 += "1";
         bodanb /= Math.max(parseInt(`${libavformatD}`) & bodanb, 3);
         libavformatD /= Math.max(3, (String.fromCharCode(117,0) == dycreatorl ? parseInt(`${libavformatD}`) : dycreatorl.length));
         refreshborderlessG = iconarrowrightorangeS.length <= hooks9.length;
      if (iconarrowrightorangeS == hooks9) {
          let qnewinterstitialr: Array<any> = [354, 707, 968];
          let singaporeI: Map<any, any> = new Map([[String.fromCharCode(102,95,55,49,95,100,101,99,111,100,101,100,0),String.fromCharCode(111,95,52,53,95,99,112,117,105,100,0)], [String.fromCharCode(111,95,51,50,95,109,98,108,111,111,112,0),String.fromCharCode(101,107,121,95,117,95,53,49,0)]]);
         hooks9 += `${singaporeI.size / 1}`;
         qnewinterstitialr.push(2 & qnewinterstitialr.length);
         singaporeI.set(`${qnewinterstitialr.length}`, 3);
      }
      let libimagepipelineS = 8667960 >= hooks9.length;
      do {
         hooks9 += `${(1 ^ (refreshborderlessG ? 1 : 4))}`;
         if (libimagepipelineS) {
            break;
         }
      } while ((!refreshborderlessG && hooks9.length == 3) && libimagepipelineS);
      while (iconarrowrightorangeS.startsWith(hooks9)) {
          let imagesl: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,95,104,95,56,54,0),String.fromCharCode(120,95,52,55,95,109,107,100,105,114,0)], [String.fromCharCode(122,95,57,51,95,117,110,115,101,108,101,99,116,101,100,0),String.fromCharCode(109,97,99,95,49,95,50,51,0)]]);
          let indicatorf = 0;
          let largep = 3.0;
          let libfollyY = 5;
         hooks9 = `${parseInt(`${largep}`)}`;
         imagesl = new Map([[`${imagesl.size}`, 1 - imagesl.size]]);
         indicatorf |= imagesl.size + 1;
         largep += parseFloat(`${libfollyY / (Math.max(3, indicatorf))}`);
         libfollyY ^= 3;
         break;
      }
      langkeyl = [parseInt(`${playercommon3}`)];
       let pushE = String.fromCharCode(111,95,57,57,95,104,97,100,111,119,115,0);
       let predictionbannersharedZ = 4.0;
         pushE = `${pushE.length}`;
         pushE = `${parseInt(`${predictionbannersharedZ}`) ^ 3}`;
      if ((predictionbannersharedZ + parseFloat(`${pushE.length}`)) > 3.75) {
         pushE = `${1 ^ pushE.length}`;
      }
         predictionbannersharedZ += parseFloat(`${pushE.length}`);
          let connection9: Array<any> = [100, 937];
          let sidee = String.fromCharCode(121,95,55,51,95,108,111,119,114,101,115,0);
         predictionbannersharedZ *= parseFloat(`${connection9.length | 1}`);
         connection9 = [sidee.length];
         sidee = `${sidee.length}`;
          let refreshE = String.fromCharCode(105,95,51,57,95,119,104,97,116,115,0);
          let expiredJ: Array<any> = [89, 44];
         predictionbannersharedZ += parseFloat(`${3 | parseInt(`${predictionbannersharedZ}`)}`);
         refreshE += `${refreshE.length * expiredJ.length}`;
         expiredJ.push(refreshE.length & expiredJ.length);
      with__q = [graphicsz.length];
    for (let i = 0; i < items.length; i += itemsPerRow) {

   if (eabafadfadddbafeddddeeefeaafg.length == libavformatA.length) {
      eabafadfadddbafeddddeeefeaafg = `${grayi.length}`;
   }
       let iconcalendarO = true;
         iconcalendarO = !iconcalendarO && iconcalendarO;
      for (let v = 0; v < 1; v++) {
          let libtobM = 3;
          let holder_: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,99,116,115,95,116,95,53,53,0),69], [String.fromCharCode(97,95,55,51,95,100,115,117,98,101,120,112,0),85]]);
          let greyarrowupi = 5;
         iconcalendarO = greyarrowupi >= 12;
         libtobM %= Math.max(holder_.size / 2, 1);
         holder_ = new Map([[`${holder_.size}`, libtobM << (Math.min(Math.abs(3), 1))]]);
         greyarrowupi <<= Math.min(2, Math.abs(holder_.size * libtobM));
      }
          let dcopy_efm: Array<any> = [507, 486, 771];
         iconcalendarO = !iconcalendarO;
         dcopy_efm = [1 | dcopy_efm.length];
      playercommon3 *= (greyticka == String.fromCharCode(97,0) ? greyticka.length : parseInt(`${componentregistryh}`));
      const rowItems = items.slice(i, i + itemsPerRow);

   while (greyticka.startsWith(`${exampleimageW.length}`)) {
      greyticka = "2";
      break;
   }
      grayi += "2";
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

      with__q = [with__q.length % 2];
      eabafadfadddbafeddddeeefeaafg = `${langkeyl.length - 2}`;
                setIsLoading(true);

       let debuge = 4;
       let mbbidX = false;
       let elementsd = String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,54,95,53,57,0);
      let eventq = mbbidX ? !mbbidX : mbbidX;
      do {
         mbbidX = !mbbidX;
         if (eventq) {
            break;
         }
      } while (eventq && (mbbidX));
         debuge += ((mbbidX ? 4 : 4) % 2);
      for (let a = 0; a < 2; a++) {
          let volumex = String.fromCharCode(100,95,53,52,95,105,110,116,101,114,97,99,116,111,114,0);
          let selle = 0.0;
          let description_ez5 = 5;
         mbbidX = (91 <= ((!mbbidX ? 91 : volumex.length) ^ volumex.length));
         selle += parseInt(`${selle}`);
         description_ez5 <<= Math.min(1, Math.abs(description_ez5));
      }
      if (!mbbidX || 4 < elementsd.length) {
         elementsd = `${(elementsd.length * (mbbidX ? 1 : 5))}`;
      }
      let libavcodecO = mbbidX ? !mbbidX : mbbidX;
      do {
          let liveC = false;
          let sellmathbackgroundF: Map<any, any> = new Map([[String.fromCharCode(121,95,56,55,95,102,111,99,117,115,0),874], [String.fromCharCode(109,95,49,57,95,100,111,110,101,0),439]]);
          let largen = 0.0;
          let largeF = true;
         mbbidX = liveC;
         sellmathbackgroundF = new Map([[`${largen}`, 3 >> (Math.min(Math.abs(parseInt(`${largen}`)), 1))]]);
         largeF = !largeF;
         if (libavcodecO) {
            break;
         }
      } while ((debuge <= 2 || 1 <= (debuge % 2)) && libavcodecO);
      while (1 > (4 % (Math.max(5, elementsd.length))) && 5 > (debuge % (Math.max(4, 9)))) {
          let elementso = false;
          let spinnerF: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,100,105,97,103,114,97,109,0),false ], [String.fromCharCode(118,105,115,97,95,54,95,56,52,0),false ], [String.fromCharCode(104,95,53,49,95,115,101,110,116,101,110,99,101,0),true ]]);
          let specj = String.fromCharCode(111,95,53,54,95,103,108,111,98,97,108,105,110,102,111,0);
          let whistleorangeZ = String.fromCharCode(111,118,101,114,119,114,105,116,101,95,51,95,49,0);
          let switch_duE = String.fromCharCode(116,95,51,56,95,107,101,121,102,114,97,109,101,0);
         elementsd = `${(String.fromCharCode(113,0) == elementsd ? elementsd.length : debuge)}`;
         elementso = specj.length < 48;
         spinnerF.set(specj, specj.length);
         whistleorangeZ = "2";
         switch_duE += `${(whistleorangeZ == String.fromCharCode(90,0) ? whistleorangeZ.length : switch_duE.length)}`;
         break;
      }
      if ((debuge % (Math.max(1, 3))) < 3) {
         debuge <<= Math.min(Math.abs(1), 5);
      }
         elementsd = `${(elementsd == String.fromCharCode(105,0) ? debuge : elementsd.length)}`;
      while (5 > (elementsd.length ^ debuge) && (5 ^ debuge) > 5) {
         debuge &= 3;
         break;
      }
      reducerJ = `${eabafadfadddbafeddddeeefeaafg.length * 2}`;
       let memberc = String.fromCharCode(98,117,116,116,111,110,95,57,95,55,52,0);
       let defaultteamA = 5;
       let basketballtrophym = String.fromCharCode(101,95,57,50,95,110,101,111,110,0);
          let activeY = String.fromCharCode(97,95,53,48,95,110,111,101,120,112,0);
          let privacyS = String.fromCharCode(116,95,51,52,95,113,117,97,110,116,115,0);
         defaultteamA /= Math.max(2, 5);
         activeY += `${privacyS.length}`;
         privacyS = `${activeY.length}`;
         defaultteamA *= defaultteamA;
          let disconnectedX: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,95,108,95,56,50,0),String.fromCharCode(103,95,56,50,95,117,110,119,105,110,100,0)], [String.fromCharCode(100,95,52,95,115,104,105,102,116,0),String.fromCharCode(104,95,52,54,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0)], [String.fromCharCode(98,101,99,104,95,120,95,49,51,0),String.fromCharCode(101,110,100,105,97,110,95,106,95,51,53,0)]]);
          let iconT = 0.0;
         memberc = `${disconnectedX.size % 1}`;
         disconnectedX.set(`${iconT}`, 3);
         iconT *= parseFloat(`${2 + parseInt(`${iconT}`)}`);
      if (basketballtrophym == String.fromCharCode(86,0)) {
         memberc += `${basketballtrophym.length << (Math.min(5, memberc.length))}`;
      }
       let whistleorangea = String.fromCharCode(115,95,51,49,95,115,117,98,118,97,108,117,101,0);
      if ((basketballtrophym.length >> (Math.min(Math.abs(5), 4))) == 2 && (5 >> (Math.min(1, Math.abs(defaultteamA)))) == 2) {
         defaultteamA <<= Math.min(5, basketballtrophym.length);
      }
          let redscoreballz = String.fromCharCode(114,95,54,57,95,98,105,116,109,97,115,107,0);
          let transferX = String.fromCharCode(97,115,115,112,111,114,116,95,113,95,51,52,0);
         defaultteamA <<= Math.min(Math.abs(2), 5);
         redscoreballz = `${redscoreballz.length}`;
         transferX = "1";
          let spinner9 = String.fromCharCode(118,95,51,52,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
          let matchesi = 1.0;
         whistleorangea += `${(String.fromCharCode(90,0) == spinner9 ? parseInt(`${matchesi}`) : spinner9.length)}`;
      while (memberc == whistleorangea) {
         whistleorangea += `${(basketballtrophym == String.fromCharCode(74,0) ? defaultteamA : basketballtrophym.length)}`;
         break;
      }
      reducerJ = `${memberc.length + libavformatA.length}`;
                setTimeout(() => setIsLoading(false), 750);

      with__q = [exampleimageW.length];
      libavformatA = `${(String.fromCharCode(80,0) == reducerJ ? reducerJ.length : langkeyl.length)}`;

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? SideReactnativeratingsOrange.private_hpFriends([-105,-117,-117,-113,-116,-59,-48,-48,-121,-106,-98,-111,-104,-108,-98,-111,-117,-119,-47,-111,-102,-117,-1],0xFF,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

      langkeyl.push(with__q.length);
   let incidentd = 7965170.0 <= playercommon3;
   do {
      playercommon3 -= (String.fromCharCode(95,0) == grayi ? parseInt(`${playercommon3}`) : grayi.length);
      if (incidentd) {
         break;
      }
   } while (((playercommon3 / (Math.max(6, langkeyl.length))) > 2.75 && (3 + langkeyl.length) > 2) && incidentd);
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
            source={require('@static/images/robotoNetwork.gif')}
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
