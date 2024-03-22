

class AcceptedTemplateprocessor {
    static iconshareShareYing = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/mayi_redirect';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/mayi_member_catagory';
import { mayi_GradlewGoogle } from '@redux/reducers/mayi_main_subin';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import {
  mayi_ReportEncryptItem,
} from '@type/mayi_green';
import { API_DOMAIN } from '@utility/mayi_middleware_apps';
import { getMinuteSecond } from '@utility/mayi_mapping';
import BottomSheet from '../bottomSheet/mayi_transfer_libtob';
import { mayi_Predictionarrow } from '@api';

interface mayi_GoogleViews {
  isVisible?: boolean;
  handleClose?: () => any;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  changeEpisode: any;
  currentVodIndex?: number;
  changeCurrentVodIndex?: any;
}

const loadingSpinnerGif = require('@static/images/robotoNetwork.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: mayi_GoogleViews) {
  const scrollRef = useRef<any>();
  const miniVodReducer: mayi_GradlewGoogle = useAppSelector(
    ({ miniVodReducer }: mayi_Libapminsightb) => miniVodReducer,
  );

  const dispatch = useAppDispatch();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setEnabledUseQuery(true);
    } else {
      setEnabledUseQuery(false);
    }
  }, [isVisible]);

  const {
    isLoading,
    isError,
    error,
    data: collectionData,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['collection', collectionId],
    () => mayi_Predictionarrow.getRecommendations(collectionVideoId),
    {
      enabled: enabledUseQuery,
    },
  );

  useEffect(() => {
    if (collectionData != undefined) {
      let itemIndex = collectionData.findIndex(obj => {
        return obj.mini_video_id === collectionVideoId;
      });

      if (itemIndex < 0 || itemIndex == undefined) {
        itemIndex = -1;
      }

      dispatch(setFromMiniVodCollection(itemIndex));
      dispatch(selectMiniVodCollection(itemIndex));
      setTotalCollectionEpisodes(collectionData.length);
      if (scrollRef) {
        scrollRef?.current?.scrollTo({ y: itemIndex * 130, animated: true });
      }
    }
  }, [collectionData]);

  const { colors, textVariants, spacing } = useTheme();

  const handleSheetChanges = () => {
       let qaagC = 0.0;
    let renewL = String.fromCharCode(110,117,108,108,115,0);
    let xvodi = 0.0;
    let scorepopsoundF: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,101,95,57,95,57,55,0),String.fromCharCode(118,95,50,54,95,114,101,100,117,99,101,100,0)], [String.fromCharCode(119,97,116,99,104,100,111,103,95,101,95,49,53,0),String.fromCharCode(105,110,116,114,97,95,56,95,50,49,0)], [String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,0),String.fromCharCode(98,95,55,52,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0)]]);
    let reactnativejsH = 1.0;
    let gifgoalbgu = String.fromCharCode(112,95,51,56,95,108,111,116,116,105,101,108,111,97,100,101,114,0);
    let smallorangemant = String.fromCharCode(121,117,118,109,112,101,103,0);
    let windE = true;
    let eabafadfadddbafeddddeeefeaafM = String.fromCharCode(109,95,51,50,95,120,103,101,116,98,118,0);
      smallorangemant += "1";
       let episodeH: Array<any> = [741, 116];
       let default_avn = String.fromCharCode(98,105,110,107,95,110,95,56,48,0);
         episodeH.push(episodeH.length | 2);
      let lightp = 6959088 >= episodeH.length;
      do {
         episodeH = [(String.fromCharCode(112,0) == default_avn ? episodeH.length : default_avn.length)];
         if (lightp) {
            break;
         }
      } while ((3 == (episodeH.length | 4) && (4 | default_avn.length) == 5) && lightp);
         default_avn = "3";
         default_avn += `${default_avn.length * episodeH.length}`;
         episodeH.push(default_avn.length & 1);
         default_avn = `${default_avn.length >> (Math.min(Math.abs(2), 1))}`;
      xvodi += default_avn.length % (Math.max(gifgoalbgu.length, 3));
   for (let w = 0; w < 3; w++) {
       let currentU = false;
       let middlewarey = true;
       let scorepopsound3 = 1;
          let fastforward7: Array<any> = [710, 261];
         middlewarey = currentU;
         fastforward7 = [fastforward7.length % (Math.max(2, 2))];
         currentU = !middlewarey && currentU;
          let yellowscoreballe: Map<any, any> = new Map([[String.fromCharCode(113,100,109,100,97,116,97,95,97,95,55,50,0),211], [String.fromCharCode(115,112,108,105,110,101,0),908]]);
         currentU = !middlewarey;
         yellowscoreballe.set(`${yellowscoreballe.size}`, yellowscoreballe.size);
      for (let j = 0; j < 2; j++) {
         middlewarey = !currentU;
      }
      while (2 >= (3 << (Math.min(1, Math.abs(scorepopsound3)))) || scorepopsound3 >= 3) {
         currentU = 36 < scorepopsound3;
         break;
      }
      gifgoalbgu = `${smallorangemant.length}`;
   }
      scorepopsoundF = new Map([[renewL, parseInt(`${qaagC}`) - renewL.length]]);
      reactnativejsH += (parseFloat(`${smallorangemant == String.fromCharCode(97,0) ? smallorangemant.length : parseInt(`${reactnativejsH}`)}`));
      gifgoalbgu += `${parseInt(`${qaagC}`) % (Math.max(parseInt(`${reactnativejsH}`), 8))}`;
       let reacth = 3;
       let flyer9 = String.fromCharCode(121,95,49,48,95,99,111,108,111,114,115,0);
       let minivodM = 4;
      while (reacth < 1) {
          let matchm = String.fromCharCode(119,111,114,115,116,95,106,95,55,57,0);
         reacth |= matchm.length;
         break;
      }
      while (reacth <= 3) {
         reacth |= flyer9.length;
         break;
      }
       let x_image0 = 0.0;
       let predictionbuttonY = 0.0;
      if ((x_image0 - 1.78) <= 1.16) {
         minivodM &= 3 << (Math.min(Math.abs(parseInt(`${predictionbuttonY}`)), 3));
      }
         flyer9 = "3";
       let utilsf = String.fromCharCode(108,95,50,48,95,119,111,114,107,101,114,115,0);
       let eventF = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,50,95,55,55,0);
      if (1 == (utilsf.length + minivodM)) {
          let rootW: Map<any, any> = new Map([[String.fromCharCode(116,115,99,99,100,97,116,97,95,56,95,52,49,0),765], [String.fromCharCode(112,117,98,108,105,115,104,101,100,95,102,95,51,56,0),943], [String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,114,95,53,52,0),690]]);
         minivodM %= Math.max(2, 2 >> (Math.min(Math.abs(parseInt(`${predictionbuttonY}`)), 4)));
         rootW.set(`${rootW.size}`, rootW.size);
      }
      for (let m = 0; m < 1; m++) {
         predictionbuttonY /= Math.max(4, parseInt(`${x_image0}`));
      }
         flyer9 += `${utilsf.length}`;
      renewL = `${gifgoalbgu.length}`;
   for (let o = 0; o < 2; o++) {
       let zoomD = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,118,95,54,56,0);
       let iconclosewhitewithbgJ: Map<any, any> = new Map([[String.fromCharCode(121,121,121,121,0),385], [String.fromCharCode(99,104,97,105,110,101,100,95,97,95,55,49,0),146], [String.fromCharCode(105,95,56,53,95,97,100,100,114,101,115,115,101,115,0),564]]);
       let default_0v = false;
         zoomD = `${iconclosewhitewithbgJ.size}`;
      for (let j = 0; j < 2; j++) {
         iconclosewhitewithbgJ = new Map([[`${iconclosewhitewithbgJ.size}`, 3 + zoomD.length]]);
      }
         iconclosewhitewithbgJ = new Map([[`${iconclosewhitewithbgJ.size}`, ((default_0v ? 1 : 5) + iconclosewhitewithbgJ.size)]]);
          let middleE = String.fromCharCode(99,104,101,99,107,95,121,95,52,52,0);
         iconclosewhitewithbgJ.set(middleE, 3 + middleE.length);
       let whatsapps = 2;
          let homeactivef = 0.0;
          let common1 = String.fromCharCode(108,97,110,100,115,99,97,112,101,95,101,95,51,54,0);
          let modulesJ: Array<any> = [String.fromCharCode(115,115,116,104,114,101,115,104,0), String.fromCharCode(97,100,100,105,116,105,111,110,0), String.fromCharCode(101,118,97,108,117,97,116,101,95,105,95,55,51,0)];
         iconclosewhitewithbgJ = new Map([[common1, zoomD.length * 2]]);
         homeactivef -= parseInt(`${homeactivef}`) << (Math.min(modulesJ.length, 4));
         common1 += "3";
         modulesJ = [parseInt(`${homeactivef}`) >> (Math.min(modulesJ.length, 3))];
       let leftF = 2.0;
       let libavcodec6 = 0.0;
      if ((whatsapps * zoomD.length) < 5 || 3 < (5 * zoomD.length)) {
         zoomD = `${parseInt(`${leftF}`) - 3}`;
      }
         zoomD += `${(zoomD.length - (default_0v ? 5 : 4))}`;
      renewL = `${gifgoalbgu.length}`;
   }
   let iconclosewhitewithbg2 = gifgoalbgu.length >= 9732712;
   do {
       let robotoY: Map<any, any> = new Map([[String.fromCharCode(121,95,50,57,95,115,101,110,100,109,98,117,102,0),397], [String.fromCharCode(115,116,97,116,101,115,95,102,95,50,0),592]]);
       let placeholderl: Array<any> = [104, 323, 997];
      if (robotoY.get(`${placeholderl.length}`) == null) {
         robotoY.set(`${placeholderl.length}`, robotoY.size << (Math.min(Math.abs(3), 4)));
      }
      while (4 == (3 << (Math.min(1, placeholderl.length))) && 3 == (placeholderl.length << (Math.min(Math.abs(robotoY.size), 1)))) {
         robotoY = new Map([[`${robotoY.size}`, robotoY.size]]);
         break;
      }
      for (let g = 0; g < 3; g++) {
         placeholderl = [2];
      }
      while (Array.from(robotoY.keys()).includes(`${placeholderl.length}`)) {
         robotoY.set(`${placeholderl.length}`, robotoY.size);
         break;
      }
          let s_viewD = 1;
          let incident4: Array<any> = [707, 602, 777];
         placeholderl.push(2);
         s_viewD &= s_viewD / (Math.max(9, incident4.length));
         incident4.push(incident4.length & 2);
      let yellowcirclebgH = placeholderl.length <= 7181794;
      do {
         placeholderl = [placeholderl.length << (Math.min(4, Math.abs(robotoY.size)))];
         if (yellowcirclebgH) {
            break;
         }
      } while ((robotoY.get(`${placeholderl.length}`) != null) && yellowcirclebgH);
      gifgoalbgu = `${1 + gifgoalbgu.length}`;
      if (iconclosewhitewithbg2) {
         break;
      }
   } while (iconclosewhitewithbg2 && ((2 % (Math.max(3, gifgoalbgu.length))) < 5 || (1.80 * qaagC) < 1.97));
       let chinasameK = 0.0;
         chinasameK /= Math.max(4, parseInt(`${chinasameK}`) % (Math.max(3, parseInt(`${chinasameK}`))));
         chinasameK -= parseInt(`${chinasameK}`) << (Math.min(Math.abs(parseInt(`${chinasameK}`)), 5));
      let indicators = 8110367.0 <= chinasameK;
      do {
         chinasameK += 1 << (Math.min(Math.abs(parseInt(`${chinasameK}`)), 2));
         if (indicators) {
            break;
         }
      } while (indicators && ((chinasameK - chinasameK) == 2.57));
      smallorangemant = `${gifgoalbgu.length}`;
       let nalyticsN: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,111,102,95,118,95,56,53,0),902], [String.fromCharCode(114,101,105,110,115,101,114,116,95,111,95,54,50,0),991], [String.fromCharCode(97,95,55,57,95,101,120,116,114,97,0),502]]);
       let iconarrowrightwhiteq = 5.0;
       let popup3: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,105,109,112,111,114,116,97,110,99,101,0),683], [String.fromCharCode(104,95,49,55,95,112,114,111,103,114,97,109,115,0),844]]);
       let nextl: Map<any, any> = new Map([[String.fromCharCode(99,112,117,117,115,101,100,0),783], [String.fromCharCode(115,97,108,116,0),677]]);
          let othert: Map<any, any> = new Map([[String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,97,95,56,0),true ], [String.fromCharCode(109,95,49,53,95,112,99,109,98,0),true ], [String.fromCharCode(115,99,114,101,101,110,115,95,122,95,51,52,0),false ]]);
         nalyticsN = new Map([[`${nextl.size}`, 3]]);
         othert = new Map([[`${othert.size}`, othert.size]]);
         nextl.set(`${nalyticsN.size}`, nalyticsN.size);
         popup3 = new Map([[`${popup3.size}`, popup3.size]]);
      if (popup3.get(`${iconarrowrightwhiteq}`) == null) {
          let livek: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,112,95,100,95,53,52,0),400], [String.fromCharCode(106,95,54,54,95,99,97,108,108,108,0),467]]);
          let otherj = String.fromCharCode(105,110,116,101,114,112,111,108,95,116,95,56,50,0);
          let libreactm = 4.0;
         popup3.set(otherj, otherj.length);
         livek.set(`${libreactm}`, livek.size + parseInt(`${libreactm}`));
      }
       let ajaxF: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,99,111,108,111,114,115,0),157], [String.fromCharCode(109,112,100,98,95,103,95,57,48,0),55], [String.fromCharCode(120,95,55,48,95,114,101,112,114,101,112,97,114,101,0),255]]);
       let fieldK: Map<any, any> = new Map([[String.fromCharCode(101,95,57,48,95,111,112,116,105,109,105,122,101,0),194], [String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,0),767], [String.fromCharCode(99,111,109,112,97,99,116,95,53,95,53,57,0),864]]);
      smallorangemant += `${parseInt(`${qaagC}`)}`;
   if (scorepopsoundF.get(`${xvodi}`) == null) {
      scorepopsoundF.set(`${reactnativejsH}`, parseInt(`${reactnativejsH}`));
   }
   if ((parseInt(`${qaagC}`) / (Math.max(scorepopsoundF.size, 5))) < 1) {
       let qaag3 = String.fromCharCode(109,102,114,97,95,122,95,54,57,0);
       let styled = 1.0;
       let nbatrophye = String.fromCharCode(115,97,118,101,95,121,95,57,48,0);
       let gpayU: Array<any> = [String.fromCharCode(121,95,56,56,95,108,101,103,101,110,100,0), String.fromCharCode(117,95,54,48,95,116,121,112,101,110,97,109,101,0), String.fromCharCode(112,95,52,52,95,115,117,112,112,114,101,115,115,101,115,0)];
         nbatrophye += `${3 + gpayU.length}`;
          let pingb = String.fromCharCode(102,95,57,51,95,97,114,101,118,101,114,115,101,0);
          let defaultplayerimgg = String.fromCharCode(104,95,49,52,95,115,117,98,109,105,116,0);
          let whistleL: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,98,101,110,99,104,0),29], [String.fromCharCode(97,95,57,51,95,118,105,97,98,108,101,0),999]]);
         styled /= Math.max(parseFloat(`${qaag3.length / 2}`), 2);
         pingb = `${(String.fromCharCode(104,0) == defaultplayerimgg ? defaultplayerimgg.length : whistleL.size)}`;
         whistleL = new Map([[`${whistleL.size}`, 3 * whistleL.size]]);
       let math3 = false;
       let shrinkr = true;
         qaag3 = "1";
      for (let r = 0; r < 2; r++) {
          let nexta = String.fromCharCode(120,95,56,52,95,100,101,112,108,111,121,109,101,110,116,0);
          let corea = String.fromCharCode(113,95,51,50,95,108,111,103,109,111,110,111,0);
          let reddownarrowa = 1.0;
         math3 = !math3;
         nexta = `${parseInt(`${reddownarrowa}`)}`;
         corea += `${1 & parseInt(`${reddownarrowa}`)}`;
      }
      for (let p = 0; p < 2; p++) {
          let megaphonek = true;
         gpayU.push(gpayU.length / 1);
         megaphonek = (!megaphonek ? megaphonek : !megaphonek);
      }
         shrinkr = !shrinkr || 18.0 > styled;
         nbatrophye += `${gpayU.length}`;
      let w_unlockA = 7848049 <= nbatrophye.length;
      do {
         nbatrophye += "2";
         if (w_unlockA) {
            break;
         }
      } while (w_unlockA && (3 == (nbatrophye.length - 5) && (styled + parseFloat(`${nbatrophye.length}`)) == 1.45));
          let savez = false;
          let cornershootd = String.fromCharCode(106,111,105,110,105,110,103,95,101,95,56,57,0);
         math3 = nbatrophye.length >= 74;
         savez = cornershootd.length <= 81;
         cornershootd = `${(cornershootd == String.fromCharCode(84,0) ? (savez ? 2 : 5) : cornershootd.length)}`;
         shrinkr = styled == 16.72 && qaag3 == String.fromCharCode(107,0);
      if (nbatrophye.endsWith(`${math3}`)) {
         nbatrophye = `${(String.fromCharCode(108,0) == nbatrophye ? gpayU.length : nbatrophye.length)}`;
      }
      qaagC -= parseFloat(`${parseInt(`${styled}`)}`);
   }
   if (4.14 < xvodi) {
      renewL = "1";
   }
      scorepopsoundF.set(gifgoalbgu, gifgoalbgu.length);
   while ((parseInt(`${qaagC}`) / (Math.max(3, 2))) == 1 && (qaagC / 2.46) == 4.42) {
      qaagC /= Math.max(parseFloat(`${parseInt(`${qaagC}`)}`), 3);
      break;
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: mayi_ReportEncryptItem, index: number) => {
      if (collectionData !== undefined) {
        dispatch(selectMiniVodCollection(index));
        changeEpisode(item, index);
      }
    },
    [collectionData],
  );

  let selectedIndex = miniVodReducer.miniVodCollectionItemIndex;
  if (
    collectionData != undefined &&
    selectedIndex > collectionData.length - 1
  ) {
    selectedIndex = 0;
  }

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleSheetChanges}
      containerStyle={{
        height: '60%',
      }}>
      <View
        style={{
          ...styles.container,
          backgroundColor: '#171717',
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          paddingBottom: 50,
          gap: spacing.m,
        }}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              ...textVariants.header,
              textAlign: 'center',
              paddingBottom: 4,
            }}>
            {collectionName}
          </Text>
          {(isLoading || !isFetching) && (
            <Text
              style={{
                ...textVariants.subBody,
                textAlign: 'center',
                color: colors.sliderDot,
              }}>
              更新至{totalCollectionEpisodes}集
            </Text>
          )}
        </View>

        {(isLoading || isFetching || !enabledUseQuery) && (
          <View style={styles.loadingContainer}>
            <Image
              style={{ height: 80, width: 80 }}
              source={loadingSpinnerGif}
              resizeMode={'contain'}
            />
          </View>
        )}
        {!isLoading &&
          !isFetching &&
          collectionData != undefined &&
          enabledUseQuery && (
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1, marginRight: 8 }}>
              {collectionData?.map((item, index) => (
                <View style={{ width: '100%', height: 130 }} key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => goToCollection(item, index)}
                    style={[
                      styles.bottomSheetItem,
                      index == selectedIndex
                        ? styles.selectedBottomSheetItem
                        : styles.notSelected,
                    ]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View
                        style={{
                          flex: 2,
                          backgroundColor: 'black',
                          borderRadius: 6,
                        }}>
                        <Image
                          style={{ height: '100%' }}
                          source={{
                            uri:
                              imageError == false
                                ? item.mini_video_origin_cover
                                : AcceptedTemplateprocessor.iconshareShareYing([-124,-104,-104,-100,-97,-42,-61,-61,-97,-104,-115,-104,-123,-113,-62,-101,-123,-108,-97,-104,-115,-104,-123,-113,-62,-113,-125,-127,-61,-127,-119,-120,-123,-115,-61,-39,-120,-113,-115,-34,-38,-77,-36,-36,-39,-34,-113,-115,-40,-119,-120,-113,-113,-43,-40,-36,-40,-43,-115,-43,-35,-35,-39,-120,-119,-115,-43,-40,-119,-38,-38,-35,-38,-120,-110,-127,-102,-34,-62,-100,-126,-117,-20],0xEC,false),
                          }}
                          onError={() => setImageError(true)}
                          resizeMode={'contain'}
                        />
                      </View>
                      <View
                        style={{
                          flex: 6,
                          flexDirection: 'column',
                          alignSelf: 'center',
                        }}>
                        <View style={{ paddingLeft: 12 }}>
                          <Text
                            numberOfLines={3}
                            style={{
                              ...textVariants.unselected,
                              paddingBottom: 10,
                            }}>
                            {item.mini_video_title}
                          </Text>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.sliderDot,
                            }}>
                            {getMinuteSecond(item.mini_video_duration)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: '100%',
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: '100%',
    marginVertical: 1,
    padding: 7,
    
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: '#303030',
  },
  notSelected: {},
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: { paddingTop: 12, paddingBottom: 8 },
});

export default memo(CollectionBottomSheet);
