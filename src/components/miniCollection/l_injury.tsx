

class AnnerFill {
    static bufferCountDefault_x4 = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/xbr_humidity_transfer';
import { TLYWhatsapp } from '@redux/reducers/tyk_trophy';
import { PSmall } from '@redux/fj_prediction_thailand';
import {
  KHelperEactItem,
} from '@type/wpk_long';
import { API_DOMAIN } from '@utility/n_subs_interstitial';
import { getMinuteSecond } from '@utility/rfl_schedule';
import BottomSheet from '../bottomSheet/uc_single';
import { GHongkong } from '@api';

interface XFillButton {
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

const loadingSpinnerGif = require('@static/images/settingsGrayZhengpian.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: XFillButton) {
  const scrollRef = useRef<any>();
  const miniVodReducer: TLYWhatsapp = useAppSelector(
    ({ miniVodReducer }: PSmall) => miniVodReducer,
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
    () => GHongkong.getRecommendations(collectionVideoId),
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
       let paginationM = String.fromCharCode(105,108,111,103,95,111,95,51,55,0);
    let promotionR = 3.0;
    let relatedh = String.fromCharCode(115,108,105,99,101,95,121,95,51,55,0);
    let usernameE = 2.0;
    let hongkongF = String.fromCharCode(117,95,54,50,95,102,105,108,108,101,114,0);
    let matchesQ: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,116,101,95,106,95,48,0),939], [String.fromCharCode(107,95,50,53,95,102,108,101,120,105,98,108,101,0),306]]);
    let rulesm = String.fromCharCode(115,99,116,112,117,116,105,108,95,55,95,57,0);
    let shrinkd = 5.0;
    let b_unlockV = 4.0;
      shrinkd /= Math.max(2, parseInt(`${promotionR}`) * hongkongF.length);
   let rewindm = 8194822 >= matchesQ.size;
   do {
      matchesQ.set(`${usernameE}`, parseInt(`${usernameE}`));
      if (rewindm) {
         break;
      }
   } while (rewindm && (relatedh.startsWith(`${matchesQ.size}`)));
   while (1 < relatedh.length) {
       let scorem: Array<any> = [780, 652, 510];
          let disconnectedm = String.fromCharCode(103,95,55,51,95,97,105,114,105,110,103,0);
         scorem.push(scorem.length);
         disconnectedm = `${(disconnectedm == String.fromCharCode(76,0) ? disconnectedm.length : disconnectedm.length)}`;
          let transfer4 = 4.0;
          let shoot7 = 2.0;
          let bufferM: Array<any> = [601, 11, 753];
         scorem = [3 ^ parseInt(`${shoot7}`)];
         transfer4 /= Math.max(2, parseInt(`${transfer4}`) % 2);
         shoot7 *= parseFloat(`${parseInt(`${transfer4}`) / 2}`);
         bufferM = [parseInt(`${transfer4}`) * bufferM.length];
      for (let v = 0; v < 2; v++) {
         scorem = [scorem.length * scorem.length];
      }
      relatedh += `${hongkongF.length}`;
      break;
   }
   for (let j = 0; j < 1; j++) {
       let linen = String.fromCharCode(120,95,52,54,95,107,101,121,100,105,114,0);
         linen = `${linen.length << (Math.min(4, linen.length))}`;
         linen += `${2 | linen.length}`;
         linen += `${linen.length % 3}`;
      hongkongF += `${paginationM.length ^ 1}`;
   }
   if (4 < (hongkongF.length >> (Math.min(Math.abs(4), 1)))) {
      promotionR /= Math.max(relatedh.length % (Math.max(rulesm.length, 1)), 5);
   }
      rulesm = `${1 << (Math.min(1, relatedh.length))}`;
       let cornerV: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,100,111,99,117,109,101,110,116,115,0),false ], [String.fromCharCode(117,110,112,97,99,107,101,100,95,111,95,50,0),false ]]);
      for (let x = 0; x < 2; x++) {
         cornerV = new Map([[`${cornerV.size}`, 1]]);
      }
          let rankq: Array<any> = [630, 212, 107];
          let whistle8 = String.fromCharCode(102,111,114,109,97,116,116,101,114,95,51,95,49,53,0);
         cornerV.set(whistle8, 1);
         rankq = [rankq.length + 1];
         whistle8 = "3";
         cornerV = new Map([[`${cornerV.size}`, 1]]);
      hongkongF += `${parseInt(`${promotionR}`) / (Math.max(relatedh.length, 6))}`;
   let routerp = 6769766 <= rulesm.length;
   do {
      rulesm = `${3 / (Math.max(3, relatedh.length))}`;
      if (routerp) {
         break;
      }
   } while (((rulesm.length / 1) == 4) && routerp);
       let oranger = 4;
       let privilegeX = false;
         oranger += 3;
      while (3 >= oranger) {
         privilegeX = !privilegeX && oranger >= 19;
         break;
      }
      for (let j = 0; j < 2; j++) {
         privilegeX = 93 >= oranger;
      }
      if (1 == (3 | oranger)) {
          let actionsV = 4.0;
          let stepU: Map<any, any> = new Map([[String.fromCharCode(99,95,52,57,95,115,97,109,112,108,101,114,97,116,101,0),false ], [String.fromCharCode(97,95,51,53,95,105,110,99,114,101,109,101,110,116,0),true ], [String.fromCharCode(109,117,108,116,120,109,117,108,116,95,101,95,51,54,0),true ]]);
          let listv = String.fromCharCode(114,95,53,50,95,116,101,97,109,115,0);
          let sportsG: Map<any, any> = new Map([[String.fromCharCode(120,95,49,53,95,109,98,97,102,102,0),843], [String.fromCharCode(97,103,103,105,110,102,111,95,49,95,54,50,0),165]]);
          let assisto: Map<any, any> = new Map([[String.fromCharCode(104,95,57,56,95,99,111,111,107,100,97,116,97,0),412], [String.fromCharCode(98,110,104,101,120,95,98,95,53,57,0),623]]);
         oranger >>= Math.min(Math.abs(3), 2);
         actionsV *= stepU.size << (Math.min(3, Math.abs(parseInt(`${actionsV}`))));
         stepU.set(`${stepU.size}`, sportsG.size);
         listv += `${(listv == String.fromCharCode(117,0) ? sportsG.size : listv.length)}`;
         assisto.set(`${listv}`, listv.length / 2);
      }
         privilegeX = oranger == 52 || privilegeX;
       let calendar_ = String.fromCharCode(99,104,111,111,115,101,95,115,95,49,55,0);
      relatedh = `${rulesm.length}`;
      promotionR *= parseInt(`${usernameE}`);
   if ((matchesQ.size >> (Math.min(Math.abs(3), 2))) < 1 && (3 >> (Math.min(1, Math.abs(matchesQ.size)))) < 4) {
      relatedh += `${rulesm.length & hongkongF.length}`;
   }
       let profile3 = String.fromCharCode(99,117,114,116,97,105,110,95,98,95,50,56,0);
       let time_9Q = String.fromCharCode(115,101,112,97,114,97,116,101,100,95,55,95,52,50,0);
       let showI = 5;
         profile3 += "3";
      let leftT = 7005358 >= profile3.length;
      do {
          let assist9 = String.fromCharCode(116,95,49,56,95,110,111,110,101,0);
          let nalyticsg: Array<any> = [String.fromCharCode(121,95,56,48,95,98,108,117,114,108,101,115,115,0), String.fromCharCode(114,101,99,111,109,112,111,115,101,95,50,95,57,0), String.fromCharCode(105,115,100,105,103,105,116,95,100,95,52,54,0)];
         profile3 += `${assist9.length}`;
         assist9 = `${nalyticsg.length}`;
         nalyticsg = [nalyticsg.length >> (Math.min(4, nalyticsg.length))];
         if (leftT) {
            break;
         }
      } while ((time_9Q.startsWith(profile3)) && leftT);
          let analyticsM = false;
          let combines = String.fromCharCode(98,111,116,95,120,95,55,56,0);
          let calendarZ = String.fromCharCode(102,114,105,99,116,105,111,110,95,51,95,49,54,0);
         time_9Q = `${time_9Q.length ^ 2}`;
         analyticsM = (calendarZ.length >> (Math.min(2, combines.length))) == 56;
         combines = `${combines.length}`;
         calendarZ += `${((analyticsM ? 3 : 3))}`;
      for (let a = 0; a < 3; a++) {
         time_9Q += `${1 - profile3.length}`;
      }
         time_9Q = `${profile3.length}`;
      while (5 == time_9Q.length && profile3 == String.fromCharCode(113,0)) {
         profile3 = `${showI % (Math.max(time_9Q.length, 9))}`;
         break;
      }
          let desci = 1.0;
          let v_playerJ = String.fromCharCode(114,101,97,100,101,114,95,116,95,57,55,0);
          let verticalQ = 2.0;
         time_9Q = `${(String.fromCharCode(53,0) == time_9Q ? time_9Q.length : showI)}`;
         desci -= parseFloat(`${3}`);
         v_playerJ += "3";
         verticalQ /= Math.max(2, parseFloat(`${parseInt(`${desci}`)}`));
         showI ^= showI & 2;
          let score3 = String.fromCharCode(97,99,100,101,99,95,121,95,55,56,0);
          let modulew = false;
         time_9Q = `${profile3.length - 2}`;
         score3 = `${score3.length ^ 3}`;
         modulew = 95 >= score3.length;
      promotionR /= Math.max(matchesQ.size, 1);
   if ((2.98 - shrinkd) >= 4.98) {
      hongkongF = "1";
   }
   for (let m = 0; m < 2; m++) {
      promotionR += 1 * relatedh.length;
   }
   let control5 = promotionR >= 9596551.0;
   do {
      promotionR += parseInt(`${promotionR}`);
      if (control5) {
         break;
      }
   } while (control5 && ((shrinkd + promotionR) <= 3.95 || 5.20 <= (3.95 * promotionR)));
      relatedh += `${(String.fromCharCode(56,0) == rulesm ? parseInt(`${shrinkd}`) : rulesm.length)}`;
       let ajaxa = String.fromCharCode(98,97,116,99,104,105,110,103,95,109,95,51,50,0);
      let eact6 = 9792566 >= ajaxa.length;
      do {
          let twitterq = String.fromCharCode(104,95,55,56,95,97,98,111,118,101,0);
          let faviconj: Array<any> = [String.fromCharCode(105,95,49,51,95,105,110,116,101,110,115,105,116,121,0), String.fromCharCode(105,95,49,54,95,115,101,116,117,112,100,0), String.fromCharCode(114,111,119,115,112,97,110,95,48,95,50,48,0)];
          let injuryh = 4.0;
          let turnE: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,99,111,110,115,117,109,101,114,0),String.fromCharCode(115,117,98,115,116,97,116,101,95,53,95,57,56,0)], [String.fromCharCode(107,95,55,51,95,115,104,97,100,101,0),String.fromCharCode(100,95,54,55,95,114,97,119,101,110,99,0)], [String.fromCharCode(107,95,51,55,95,99,111,109,112,97,114,97,116,111,114,0),String.fromCharCode(122,95,50,51,95,118,108,99,115,0)]]);
          let over4 = 1.0;
         ajaxa = `${1 / (Math.max(6, parseInt(`${injuryh}`)))}`;
         twitterq += `${parseInt(`${over4}`)}`;
         faviconj = [twitterq.length];
         injuryh += parseFloat(`${turnE.size >> (Math.min(4, Math.abs(parseInt(`${over4}`))))}`);
         turnE = new Map([[`${turnE.size}`, 2]]);
         if (eact6) {
            break;
         }
      } while ((ajaxa == ajaxa) && eact6);
       let watchP = 1.0;
      for (let m = 0; m < 1; m++) {
         ajaxa = `${ajaxa.length & parseInt(`${watchP}`)}`;
      }
      usernameE += paginationM.length;
      paginationM = `${matchesQ.size >> (Math.min(Math.abs(2), 1))}`;
      rulesm += `${parseInt(`${usernameE}`) & 1}`;

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: KHelperEactItem, index: number) => {
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
                                : AnnerFill.bufferCountDefault_x4([77,81,81,85,86,31,10,10,86,81,68,81,76,70,11,82,76,93,86,81,68,81,76,70,11,70,74,72,10,72,64,65,76,68,10,16,65,70,68,23,19,122,21,21,16,23,70,68,17,64,65,70,70,28,17,21,17,28,68,28,20,20,16,65,64,68,28,17,64,19,19,20,19,65,91,72,83,23,11,85,75,66,37],0x25,false),
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
