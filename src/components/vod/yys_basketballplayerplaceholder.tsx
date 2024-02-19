

class EpisodesSourceWatchnowbgMateri {
    static assetsOverLink = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let iconeditv = 5.0;
    let executorj: Array<any> = [343, 482, 869];
    let plashI = String.fromCharCode(108,95,56,56,95,105,110,100,101,111,0);
    let gpayh = String.fromCharCode(112,116,115,95,99,95,52,54,0);
    let livenodatabgimgS = String.fromCharCode(101,110,106,105,110,95,114,95,56,53,0);
    let resultb = 0.0;
    let libjsinspector6 = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,101,95,57,54,0);
    let nextY: Map<any, any> = new Map([[String.fromCharCode(99,95,53,53,95,100,111,97,108,108,0),713], [String.fromCharCode(115,95,54,55,95,104,111,111,107,115,0),157]]);
    let darkA = 2;
    let whitetick1 = false;
    let sharewhiten = true;
    let logouserB = String.fromCharCode(117,95,53,51,95,115,101,112,105,97,0);
    let largei = String.fromCharCode(102,95,50,55,95,113,117,111,116,97,0);
    let crownN: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,114,95,97,95,49,54,0),157], [String.fromCharCode(109,117,110,109,97,112,95,119,95,52,0),237]]);
    let twitter0: Map<any, any> = new Map([[String.fromCharCode(115,116,114,99,109,112,95,104,95,57,53,0),252], [String.fromCharCode(115,117,99,99,101,115,115,95,113,95,49,50,0),482], [String.fromCharCode(109,111,100,101,99,111,115,116,115,95,114,95,52,55,0),975]]);
    let defaultprofilepic0 = String.fromCharCode(110,95,53,50,95,103,101,116,116,105,109,101,111,102,100,97,121,0);
    let ying2 = String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,97,95,56,57,0);
      plashI += "2";
   while ((libjsinspector6.length + executorj.length) < 2) {
      executorj = [livenodatabgimgS.length + executorj.length];
      break;
   }

    const rows = [];

      nextY.set(gpayh, gpayh.length >> (Math.min(Math.abs(2), 3)));
   let downloadingb = 7754190.0 <= iconeditv;
   do {
       let whitevideoliveX = String.fromCharCode(116,95,55,95,99,104,105,114,112,0);
       let currentw = String.fromCharCode(100,121,110,108,111,97,100,95,49,95,54,55,0);
         currentw += `${currentw.length}`;
      for (let c = 0; c < 3; c++) {
         whitevideoliveX += `${currentw.length % 1}`;
      }
         currentw = `${whitevideoliveX.length << (Math.min(Math.abs(2), 5))}`;
      if (!currentw.endsWith(`${whitevideoliveX.length}`)) {
          let moreW = String.fromCharCode(99,111,108,111,114,109,97,112,95,55,95,49,51,0);
          let spinner6 = false;
          let logom: Array<any> = [137, 801, 738];
         currentw = `${whitevideoliveX.length + logom.length}`;
         moreW += `${((spinner6 ? 1 : 5))}`;
         spinner6 = (((spinner6 ? moreW.length : 95) - moreW.length) > 95);
         logom = [3];
      }
         currentw = `${currentw.length}`;
       let gradlewv = String.fromCharCode(97,100,106,117,115,116,95,121,95,52,57,0);
       let package_c0M = String.fromCharCode(118,95,53,57,95,112,114,122,112,0);
      iconeditv /= Math.max(5, (parseFloat(`${String.fromCharCode(98,0) == whitevideoliveX ? darkA : whitevideoliveX.length}`)));
      if (downloadingb) {
         break;
      }
   } while ((5.70 < resultb) && downloadingb);
    for (let i = 0; i < items.length; i += itemsPerRow) {

       let exampleimageh: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,95,49,95,49,49,0),String.fromCharCode(105,110,110,100,101,114,95,111,95,54,56,0)], [String.fromCharCode(103,95,49,51,95,115,101,97,0),String.fromCharCode(119,95,53,52,95,109,111,122,106,112,101,103,0)]]);
         exampleimageh.set(`${exampleimageh.size}`, 2 ^ exampleimageh.size);
         exampleimageh = new Map([[`${exampleimageh.size}`, exampleimageh.size & exampleimageh.size]]);
       let containerI = String.fromCharCode(119,95,50,56,95,97,108,112,104,97,0);
       let loginsuccessq = String.fromCharCode(114,95,50,57,95,102,114,97,109,101,100,97,116,97,0);
      whitetick1 = libjsinspector6.length <= exampleimageh.size;
       let benefit4: Array<any> = [81, 210];
       let libimagepipelineW: Array<any> = [480, 948, 38];
          let modalc: Array<any> = [467, 34, 811];
          let fullscreenmin2 = String.fromCharCode(118,100,114,97,119,97,98,108,101,95,57,95,49,48,0);
         benefit4.push(benefit4.length);
         modalc = [modalc.length];
         fullscreenmin2 = `${2 | fullscreenmin2.length}`;
      if ((2 & benefit4.length) < 3) {
          let iconclosee = 3.0;
          let iconrightorangew = 5.0;
         benefit4.push(1 & libimagepipelineW.length);
         iconclosee *= parseFloat(`${parseInt(`${iconrightorangew}`)}`);
         iconrightorangew *= parseFloat(`${parseInt(`${iconclosee}`) / 2}`);
      }
         benefit4 = [libimagepipelineW.length & benefit4.length];
      while (benefit4.length > 5) {
         benefit4 = [benefit4.length / (Math.max(libimagepipelineW.length, 2))];
         break;
      }
      if ((3 ^ libimagepipelineW.length) > 4) {
         benefit4 = [libimagepipelineW.length / 2];
      }
       let shareZ = 3.0;
       let yellowvideoliveD = 4.0;
      executorj.push(livenodatabgimgS.length - 3);
      const rowItems = items.slice(i, i + itemsPerRow);

   for (let i = 0; i < 2; i++) {
      libjsinspector6 = "1";
   }
   while (iconeditv >= 1.95 && (iconeditv / 1.95) >= 2.96) {
      whitetick1 = darkA >= parseInt(`${resultb}`);
      break;
   }
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

       let indexD: Array<any> = [461, 470, 311];
       let annero = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,120,95,55,48,0);
      for (let d = 0; d < 1; d++) {
          let subinK: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,111,117,116,95,52,95,53,49,0),false ], [String.fromCharCode(109,97,115,116,101,114,105,110,103,95,56,95,49,50,0),false ], [String.fromCharCode(103,101,116,95,108,95,50,48,0),true ]]);
         annero = "1";
         subinK.set(`${subinK.size}`, 1);
      }
      while (!annero.endsWith(`${indexD.length}`)) {
          let eventH = String.fromCharCode(115,99,104,101,109,97,95,107,95,53,53,0);
          let singapore0 = 1;
          let notificationgrayE = String.fromCharCode(101,95,55,51,95,108,97,121,101,114,115,0);
         annero += `${annero.length ^ singapore0}`;
         eventH = `${notificationgrayE.length ^ 1}`;
         singapore0 ^= eventH.length ^ 2;
         notificationgrayE = "3";
         break;
      }
       let activer = String.fromCharCode(105,95,49,54,95,115,97,118,101,115,116,97,116,101,0);
       let pathf = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,114,95,49,57,0);
       let libfollyp = 5.0;
       let modulesM = 2.0;
         activer += "3";
         activer = `${annero.length | 1}`;
      nextY = new Map([[`${executorj.length}`, (String.fromCharCode(87,0) == gpayh ? gpayh.length : executorj.length)]]);
      plashI += `${(parseInt(`${iconeditv}`) & (whitetick1 ? 5 : 5))}`;
                setIsLoading(true);

       let statisticsinactiveb = false;
       let launchM: Array<any> = [String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,50,95,54,56,0), String.fromCharCode(109,95,50,56,95,111,112,101,114,97,116,105,111,110,115,0), String.fromCharCode(109,97,116,114,111,115,107,97,95,116,95,54,57,0)];
       let reactnativeratingsn: Map<any, any> = new Map([[String.fromCharCode(119,95,49,55,95,99,104,101,99,107,109,97,114,107,0),702], [String.fromCharCode(119,95,50,54,95,103,108,111,119,0),448]]);
      if ((1 - launchM.length) <= 5 || 1 <= launchM.length) {
          let neon6 = String.fromCharCode(97,95,57,95,111,118,101,114,114,105,100,100,101,110,0);
         launchM.push(3 / (Math.max(8, neon6.length)));
      }
      for (let d = 0; d < 3; d++) {
         reactnativeratingsn = new Map([[`${launchM.length}`, 3]]);
      }
          let activez: Array<any> = [597, 915];
          let smallk = 3;
         reactnativeratingsn = new Map([[`${reactnativeratingsn.size}`, reactnativeratingsn.size & 1]]);
         activez.push(activez.length % 1);
         smallk >>= Math.min(Math.abs(activez.length * 3), 5);
         reactnativeratingsn = new Map([[`${reactnativeratingsn.size}`, 1 ^ reactnativeratingsn.size]]);
      while ((launchM.length ^ 5) <= 2) {
         reactnativeratingsn.set(`${launchM.length}`, 3);
         break;
      }
          let modity3 = 4.0;
          let floaterJ = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,109,95,51,56,0);
         reactnativeratingsn = new Map([[`${launchM.length}`, ((statisticsinactiveb ? 1 : 5) % 3)]]);
         modity3 *= parseFloat(`${2 & parseInt(`${modity3}`)}`);
         floaterJ = `${1 + floaterJ.length}`;
          let libswresamplen = String.fromCharCode(109,95,55,51,95,100,101,97,99,116,105,118,97,116,105,110,103,0);
         statisticsinactiveb = (38 == ((statisticsinactiveb ? launchM.length : 38) * launchM.length));
         libswresamplen += `${(String.fromCharCode(108,0) == libswresamplen ? libswresamplen.length : libswresamplen.length)}`;
       let heartr = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,107,95,50,49,0);
       let ccdfbdabcabbbedbm = String.fromCharCode(115,101,109,105,98,111,108,100,95,119,95,50,48,0);
       let successV = String.fromCharCode(100,98,115,116,97,116,95,122,95,57,49,0);
      resultb /= Math.max(3, 1);
      resultb *= libjsinspector6.length * gpayh.length;
                setTimeout(() => setIsLoading(false), 750);

       let sans1 = 3;
       let commona = true;
       let libjsinspectort = String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,111,95,56,48,0);
         commona = !commona;
         sans1 *= sans1;
      let twitterg = String.fromCharCode(95,98,51,0) == libjsinspectort;
      do {
         libjsinspectort = `${((commona ? 3 : 4))}`;
         if (twitterg) {
            break;
         }
      } while (((2 >> (Math.min(1, Math.abs(sans1)))) > 4) && twitterg);
      for (let f = 0; f < 2; f++) {
         commona = libjsinspectort.length > 35;
      }
       let downarrowT = 4.0;
      let iconnotificationnew2 = 6143024.0 <= downarrowT;
      do {
          let defaultroombgX: Array<any> = [508, 442];
          let carouseld: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,108,111,97,100,95,98,95,49,56,0),862], [String.fromCharCode(111,95,51,49,95,115,119,105,112,101,0),631]]);
          let predictionbuttonw = String.fromCharCode(120,95,52,54,95,114,116,112,112,108,97,121,0);
          let vignettek: Array<any> = [312, 298];
         downarrowT += parseFloat(`${3 % (Math.max(6, vignettek.length))}`);
         defaultroombgX.push(defaultroombgX.length);
         carouseld.set(predictionbuttonw, predictionbuttonw.length | 1);
         vignettek = [carouseld.size - 2];
         if (iconnotificationnew2) {
            break;
         }
      } while ((2.17 >= (5.1 / (Math.max(2, downarrowT))) || (downarrowT / (Math.max(5.1, 6))) >= 5.19) && iconnotificationnew2);
         commona = libjsinspectort.startsWith(`${sans1}`);
         libjsinspectort = `${libjsinspectort.length}`;
         commona = libjsinspectort.length == 38;
      nextY.set(`${darkA}`, 2 >> (Math.min(5, Math.abs(darkA))));
   if ((nextY.size - 3) < 4) {
      nextY.set(plashI, (plashI == String.fromCharCode(118,0) ? plashI.length : libjsinspector6.length));
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? EpisodesSourceWatchnowbgMateri.assetsOverLink([64,92,92,88,91,18,7,7,80,65,73,70,79,67,73,70,92,94,6,70,77,92,40],0x28,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

      gpayh += `${darkA << (Math.min(3, Math.abs(1)))}`;
   while (3.50 >= (iconeditv * 4.84) && 5 >= (executorj.length ^ 2)) {
       let tooltipsB: Array<any> = [741, 61, 512];
       let iconclosewhiteo = 1.0;
       let chatbotphoto2: Map<any, any> = new Map([[String.fromCharCode(114,95,49,54,95,115,116,101,112,115,0),733], [String.fromCharCode(113,95,53,54,0),920]]);
       let shootnogoalK = true;
      while (!shootnogoalK) {
         chatbotphoto2 = new Map([[`${chatbotphoto2.size}`, 3 / (Math.max(2, chatbotphoto2.size))]]);
         break;
      }
      let humidityG = shootnogoalK ? !shootnogoalK : shootnogoalK;
      do {
         shootnogoalK = (iconclosewhiteo * parseFloat(`${chatbotphoto2.size}`)) >= 75.3;
         if (humidityG) {
            break;
         }
      } while (humidityG && (shootnogoalK));
      for (let j = 0; j < 3; j++) {
         iconclosewhiteo += (parseFloat(`${parseInt(`${iconclosewhiteo}`) & (shootnogoalK ? 5 : 5)}`));
      }
      while ((iconclosewhiteo / 5.33) >= 1.80) {
          let sideA = String.fromCharCode(116,95,50,48,95,102,105,120,116,117,114,101,115,0);
          let iconarrowrightblacku = String.fromCharCode(112,116,114,95,110,95,52,57,0);
          let star8 = String.fromCharCode(101,109,117,108,97,116,111,114,95,110,95,49,54,0);
          let orangeclockT = String.fromCharCode(104,97,114,100,101,110,101,100,95,107,95,57,51,0);
          let scores = 0;
         iconclosewhiteo += parseFloat(`${parseInt(`${iconclosewhiteo}`)}`);
         sideA = `${star8.length ^ 3}`;
         iconarrowrightblacku += `${iconarrowrightblacku.length}`;
         star8 += `${iconarrowrightblacku.length % (Math.max(10, scores))}`;
         orangeclockT += `${orangeclockT.length / 3}`;
         scores /= Math.max(2, star8.length + scores);
         break;
      }
       let reactnativeratingsu = false;
       let dragcloseS = false;
      let componentregistryQ = iconclosewhiteo <= 7262243.0;
      do {
          let iconu = String.fromCharCode(107,95,57,95,105,100,99,116,108,108,109,0);
          let buildD = String.fromCharCode(105,116,111,97,95,115,95,49,52,0);
          let materialT = 1;
         iconclosewhiteo += parseFloat(`${2 & parseInt(`${iconclosewhiteo}`)}`);
         iconu = `${materialT}`;
         buildD += `${2 % (Math.max(4, iconu.length))}`;
         materialT |= 3 ^ buildD.length;
         if (componentregistryQ) {
            break;
         }
      } while (componentregistryQ && (dragcloseS));
      while (!dragcloseS) {
          let updatesw = String.fromCharCode(103,95,57,51,95,105,115,110,101,103,97,116,105,118,101,0);
          let sharewhiteq = 4.0;
          let sharewhiteJ = 0;
          let reminderk = String.fromCharCode(103,95,51,48,95,104,119,99,111,110,102,105,103,0);
         reactnativeratingsu = dragcloseS;
         updatesw += `${(String.fromCharCode(109,0) == updatesw ? parseInt(`${sharewhiteq}`) : updatesw.length)}`;
         sharewhiteq /= Math.max(2, parseInt(`${sharewhiteq}`) & 1);
         sharewhiteJ *= updatesw.length;
         reminderk += "2";
         break;
      }
       let fullscreenminy = String.fromCharCode(117,95,50,95,99,111,110,112,111,110,101,110,116,115,0);
       let relatedA = String.fromCharCode(114,101,100,105,114,101,99,116,111,114,95,117,95,52,57,0);
      for (let b = 0; b < 2; b++) {
         iconclosewhiteo -= parseFloat(`${2 | parseInt(`${iconclosewhiteo}`)}`);
      }
       let classesp = true;
          let dycreatorR = 5;
          let typingloadingn = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,106,95,55,49,0);
          let libruntimeexecutorB = 3.0;
         reactnativeratingsu = !reactnativeratingsu;
         dycreatorR += parseInt(`${libruntimeexecutorB}`);
         typingloadingn = `${3 >> (Math.min(1, typingloadingn.length))}`;
         libruntimeexecutorB *= typingloadingn.length;
          let nbatrophyX = 3.0;
          let castv = 1;
         chatbotphoto2.set(`${iconclosewhiteo}`, parseInt(`${iconclosewhiteo}`));
         nbatrophyX *= 2 / (Math.max(castv, 2));
         castv -= 3 | parseInt(`${nbatrophyX}`);
      iconeditv -= parseFloat(`${darkA}`);
      tooltipsB = [1 * tooltipsB.length];
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
            source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
