

class DefaultplayerimgFiledMimeAnima {
    static libffmpegkitRoundDycreator = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from '../../components/container/yys_matches';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type';
import {
  yysFullLibcrashsdk,
  yysPenaltyshoot,
} from '@type';
import { playVod } from '@redux';
import { useAppDispatch } from '@hooks';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import VodTopicFilter from '../../components/vod/yys_yellowcirclebg_floater';
import VodCard from '../../components/vod/yys_private';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/yys_alert_backwhite';
import { yysTempnodatagifLeagueItem } from '@type';

interface yysIconarrowrightorangeStation {
  itemList: Array<yysTempnodatagifLeagueItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: yysTempnodatagifLeagueItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: yysIconarrowrightorangeStation) {
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
       let yellowanimationliveP = 4;
    let homeicon0 = String.fromCharCode(97,100,105,100,95,116,95,50,52,0);
    let disconnectedM = 3.0;
    let bggradientt = 4.0;
    let disconnectedT = 0.0;
    let downarrowF = 2.0;
    let inactivem = String.fromCharCode(115,116,121,108,101,95,119,95,52,52,0);
    let submiti = String.fromCharCode(114,110,103,95,112,95,56,49,0);
    let debugG: Array<any> = [40, 442];
    let styleA = 0.0;
      bggradientt += 2;
      homeicon0 = `${parseInt(`${styleA}`) & 2}`;

    const rows = [];

   while (5.95 <= bggradientt) {
      bggradientt += parseInt(`${styleA}`) | inactivem.length;
      break;
   }
   let subtextS = 6067767.0 >= disconnectedM;
   do {
      disconnectedM *= homeicon0.length / 2;
      if (subtextS) {
         break;
      }
   } while ((2.60 >= (downarrowF * disconnectedM)) && subtextS);
    for (let i = 0; i < items.length; i += itemsPerRow) {

      inactivem += `${debugG.length}`;
   if ((1 * homeicon0.length) >= 4) {
       let sheetf = 0.0;
       let sheetg = 3.0;
         sheetf += parseFloat(`${parseInt(`${sheetg}`)}`);
         sheetf *= parseFloat(`${parseInt(`${sheetf}`) << (Math.min(2, Math.abs(parseInt(`${sheetg}`))))}`);
      while ((1.64 - sheetg) == 2.44) {
         sheetg += parseFloat(`${3}`);
         break;
      }
       let reactnativejsD: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,97,114,105,110,103,95,99,95,51,54,0),562], [String.fromCharCode(106,95,56,52,95,98,112,117,116,115,0),481]]);
      let statsnomoredata2 = sheetg >= 7341569.0;
      do {
         sheetg -= parseFloat(`${parseInt(`${sheetg}`) + parseInt(`${sheetf}`)}`);
         if (statsnomoredata2) {
            break;
         }
      } while (((5.52 + sheetg) >= 4.82 && 5.52 >= (sheetf + sheetg)) && statsnomoredata2);
      for (let c = 0; c < 2; c++) {
         reactnativejsD.set(`${sheetg}`, reactnativejsD.size + parseInt(`${sheetg}`));
      }
      downarrowF -= parseFloat(`${submiti.length}`);
   }
      const rowItems = items.slice(i, i + itemsPerRow);

   let currentn = inactivem == String.fromCharCode(105,112,99,113,119,109,0);
   do {
       let iconadslinkk = String.fromCharCode(105,119,97,108,115,104,95,110,95,49,53,0);
       let librrcA = String.fromCharCode(117,110,100,101,114,114,117,110,95,100,95,51,57,0);
      if (iconadslinkk != String.fromCharCode(68,0)) {
          let showmorez: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,114,101,99,117,114,115,105,118,101,108,121,0),670], [String.fromCharCode(112,111,119,95,99,95,53,51,0),665], [String.fromCharCode(107,95,51,57,95,102,111,114,109,97,116,0),700]]);
          let largebrightnesss = 0.0;
          let reactnativeultimatelistviewX = 4.0;
         librrcA = `${(librrcA == String.fromCharCode(97,0) ? librrcA.length : showmorez.size)}`;
         showmorez = new Map([[`${largebrightnesss}`, parseInt(`${largebrightnesss}`)]]);
         reactnativeultimatelistviewX /= Math.max(1, parseInt(`${largebrightnesss}`));
      }
      while (librrcA.endsWith(`${iconadslinkk.length}`)) {
         iconadslinkk += `${librrcA.length % (Math.max(3, 1))}`;
         break;
      }
      if (librrcA != String.fromCharCode(56,0)) {
         iconadslinkk += `${(iconadslinkk == String.fromCharCode(109,0) ? librrcA.length : iconadslinkk.length)}`;
      }
         librrcA = `${librrcA.length}`;
      for (let l = 0; l < 1; l++) {
          let animation7 = String.fromCharCode(100,117,114,98,95,109,95,50,53,0);
          let profileinactivex = 1;
         librrcA += `${iconadslinkk.length & profileinactivex}`;
         animation7 = `${animation7.length - 3}`;
         profileinactivex += 1;
      }
      let libjsiV = 8776815 <= librrcA.length;
      do {
         librrcA += `${librrcA.length + iconadslinkk.length}`;
         if (libjsiV) {
            break;
         }
      } while (libjsiV && (iconadslinkk.endsWith(librrcA)));
      inactivem += `${homeicon0.length}`;
      if (currentn) {
         break;
      }
   } while (currentn && (4.7 == (parseFloat(`${inactivem.length}`) + downarrowF)));
       let slider_ = 2.0;
       let homeloading4 = true;
      if (4.8 > (1.74 + slider_) && homeloading4) {
          let dragcloseW = true;
          let internetn = String.fromCharCode(107,95,53,53,95,107,105,110,103,102,105,115,104,101,114,0);
          let mbbannern = 1.0;
          let iconclosewhitebgs = String.fromCharCode(113,95,50,56,95,115,112,108,105,116,115,0);
          let scheduleQ = false;
         slider_ -= iconclosewhitebgs.length << (Math.min(Math.abs(2), 4));
         dragcloseW = !scheduleQ;
         internetn = `${parseInt(`${mbbannern}`) % (Math.max(internetn.length, 10))}`;
         mbbannern += parseFloat(`${parseInt(`${mbbannern}`) >> (Math.min(2, Math.abs(1)))}`);
         iconclosewhitebgs = `${internetn.length | parseInt(`${mbbannern}`)}`;
      }
      let orangetickc = homeloading4 ? !homeloading4 : homeloading4;
      do {
         homeloading4 = !homeloading4;
         if (orangetickc) {
            break;
         }
      } while ((!homeloading4) && orangetickc);
          let sharex = 4.0;
          let telegramW: Array<any> = [365, 567, 733];
         slider_ += 3 / (Math.max(9, telegramW.length));
         sharex /= Math.max(2, parseFloat(`${2}`));
         telegramW.push(parseInt(`${sharex}`) >> (Math.min(3, Math.abs(parseInt(`${sharex}`)))));
          let philippinesP = 1.0;
         homeloading4 = 60.65 <= philippinesP;
         homeloading4 = 30.72 > slider_;
         slider_ *= ((homeloading4 ? 2 : 5) & parseInt(`${slider_}`));
      debugG.push(parseInt(`${slider_}`));
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   if ((disconnectedT * bggradientt) > 1.55 && (disconnectedT * bggradientt) > 1.55) {
       let chatbotphoto7 = String.fromCharCode(114,115,104,105,102,116,95,122,95,50,57,0);
       let playlistn = String.fromCharCode(97,114,105,116,104,95,98,95,57,50,0);
       let predictionactive7 = 4.0;
       let dicelogob = String.fromCharCode(97,99,99,101,115,115,111,114,95,52,95,53,49,0);
         playlistn = `${(playlistn == String.fromCharCode(79,0) ? parseInt(`${predictionactive7}`) : playlistn.length)}`;
          let schedulery: Array<any> = [237, 969];
          let zoomq = 5.0;
         dicelogob = `${dicelogob.length << (Math.min(4, chatbotphoto7.length))}`;
         schedulery.push(1);
         zoomq *= parseInt(`${zoomq}`);
      while (playlistn.endsWith(`${predictionactive7}`)) {
         playlistn += `${(String.fromCharCode(107,0) == playlistn ? playlistn.length : parseInt(`${predictionactive7}`))}`;
         break;
      }
      if (parseFloat(`${chatbotphoto7.length}`) >= predictionactive7) {
         predictionactive7 += parseFloat(`${1}`);
      }
         chatbotphoto7 += `${chatbotphoto7.length + 3}`;
       let inactiveA = 2;
          let basketballhometeamg = 5;
          let yellowo = false;
          let searchn: Map<any, any> = new Map([[String.fromCharCode(114,95,56,50,95,104,117,102,102,121,117,118,0),true ], [String.fromCharCode(98,108,111,111,109,95,120,95,54,55,0),false ]]);
         predictionactive7 /= Math.max(3, parseFloat(`${parseInt(`${predictionactive7}`) % (Math.max(searchn.size, 1))}`));
         basketballhometeamg &= 1 + basketballhometeamg;
         yellowo = !yellowo || 87 <= basketballhometeamg;
         searchn.set(`${yellowo}`, basketballhometeamg);
      let eyeopenD = 9602315.0 >= predictionactive7;
      do {
          let iconb = 2.0;
          let orientationD: Array<any> = [740, 802, 331];
         predictionactive7 -= (parseFloat(`${String.fromCharCode(104,0) == chatbotphoto7 ? chatbotphoto7.length : dicelogob.length}`));
         iconb /= Math.max(orientationD.length, 2);
         orientationD = [orientationD.length << (Math.min(5, Math.abs(parseInt(`${iconb}`))))];
         if (eyeopenD) {
            break;
         }
      } while (eyeopenD && (predictionactive7 >= 5.47));
      for (let m = 0; m < 2; m++) {
          let actives = 1;
          let whiteticky = String.fromCharCode(98,95,54,55,95,97,115,111,108,117,116,101,0);
         inactiveA %= Math.max(2 ^ whiteticky.length, 3);
         actives &= actives;
         whiteticky = `${actives ^ actives}`;
      }
         dicelogob += `${inactiveA - dicelogob.length}`;
      for (let w = 0; w < 3; w++) {
          let assist4 = String.fromCharCode(121,95,56,51,95,118,97,114,105,97,98,108,101,115,0);
          let recommendationd = 4;
         dicelogob += `${parseInt(`${predictionactive7}`) / (Math.max(chatbotphoto7.length, 8))}`;
         assist4 += "1";
         recommendationd += (assist4 == String.fromCharCode(108,0) ? assist4.length : recommendationd);
      }
      let sigmobb = 8412954 >= dicelogob.length;
      do {
          let vipsportw = String.fromCharCode(97,116,114,97,99,95,50,95,54,56,0);
          let benefitx: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,104,105,102,116,95,116,95,55,51,0),String.fromCharCode(105,100,99,116,120,95,49,95,50,50,0)], [String.fromCharCode(103,95,53,49,95,105,110,115,116,97,108,108,115,0),String.fromCharCode(104,95,56,56,95,114,101,99,111,114,100,97,98,108,101,0)]]);
          let disconnectedB: Map<any, any> = new Map([[String.fromCharCode(114,97,112,105,100,106,115,111,110,95,117,95,55,49,0),false ], [String.fromCharCode(119,95,52,54,95,115,108,111,119,101,115,116,0),true ]]);
          let whiteE = 4.0;
          let libjsinspectorP = 0.0;
         dicelogob += `${chatbotphoto7.length}`;
         vipsportw += "2";
         benefitx.set(`${disconnectedB.size}`, disconnectedB.size % (Math.max(benefitx.size, 10)));
         whiteE *= disconnectedB.size / (Math.max(6, parseInt(`${libjsinspectorP}`)));
         libjsinspectorP += benefitx.size << (Math.min(vipsportw.length, 4));
         if (sigmobb) {
            break;
         }
      } while ((dicelogob.endsWith(`${inactiveA}`)) && sigmobb);
      bggradientt += dicelogob.length - parseInt(`${predictionactive7}`);
   }
   for (let k = 0; k < 2; k++) {
      submiti = `${yellowanimationliveP << (Math.min(Math.abs(parseInt(`${downarrowF}`)), 2))}`;
   }
                setIsLoading(true);

   for (let i = 0; i < 3; i++) {
      bggradientt *= parseInt(`${bggradientt}`) / (Math.max(submiti.length, 1));
   }
      styleA += parseInt(`${disconnectedT}`) << (Math.min(homeicon0.length, 5));
                setTimeout(() => setIsLoading(false), 750);

   let interstitialc = 6384300 >= debugG.length;
   do {
      debugG = [parseInt(`${disconnectedT}`)];
      if (interstitialc) {
         break;
      }
   } while ((1 < (debugG.length % 4)) && interstitialc);
   if ((styleA / 1.30) < 1.58) {
      styleA -= yellowanimationliveP + 3;
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? DefaultplayerimgFiledMimeAnima.libffmpegkitRoundDycreator([-115,-111,-111,-107,-106,-33,-54,-54,-99,-116,-124,-117,-126,-114,-124,-117,-111,-109,-53,-117,-128,-111,-27],0xE5,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   let libapminsightbG = 7167682 >= inactivem.length;
   do {
      inactivem = `${inactivem.length ^ 1}`;
      if (libapminsightbG) {
         break;
      }
   } while ((!inactivem.includes(`${bggradientt}`)) && libapminsightbG);
   let whatsappY = yellowanimationliveP >= 9898057;
   do {
       let referrera = 2.0;
       let footballB = false;
       let whatsappb = String.fromCharCode(112,95,57,95,115,116,114,117,99,116,115,0);
      for (let d = 0; d < 2; d++) {
         whatsappb = "3";
      }
       let moon4 = String.fromCharCode(119,95,54,55,95,112,114,101,97,109,98,108,101,0);
       let homeloading5 = String.fromCharCode(117,95,49,55,95,115,101,97,114,99,104,97,98,108,101,0);
      for (let o = 0; o < 1; o++) {
         whatsappb += `${((footballB ? 4 : 3) & parseInt(`${referrera}`))}`;
      }
         whatsappb += `${homeloading5.length * moon4.length}`;
      let elementsI = footballB ? !footballB : footballB;
      do {
         footballB = whatsappb.length >= 88;
         if (elementsI) {
            break;
         }
      } while (elementsI && (moon4.length >= 1));
         moon4 = `${moon4.length}`;
         moon4 += `${(parseInt(`${referrera}`) * (footballB ? 3 : 4))}`;
      if (5.37 < (3.36 - referrera) || (referrera - 3.36) < 1.4) {
         moon4 = `${((footballB ? 4 : 2) % (Math.max(parseInt(`${referrera}`), 8)))}`;
      }
      for (let o = 0; o < 2; o++) {
         whatsappb = `${(String.fromCharCode(114,0) == whatsappb ? (footballB ? 3 : 5) : whatsappb.length)}`;
      }
      yellowanimationliveP &= parseInt(`${disconnectedT}`);
      if (whatsappY) {
         break;
      }
   } while (whatsappY && (bggradientt > yellowanimationliveP));
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
            source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
