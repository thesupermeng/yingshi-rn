

class NeonSwitch_rvEntryUmeng {
    static lnewinterstitialHalfMore = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/wawa_build';
import { wawaPrediction } from '@redux/reducers/wawa_iconarrowrightwhite';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import {
  wawaBorderlessCombineItem,
} from '@type/wawa_gradlew';
import { API_DOMAIN } from '@utility/wawa_iconpointscore';
import { getMinuteSecond } from '@utility/wawa_thumbnail';
import BottomSheet from '../bottomSheet/wawa_nativeex_init';
import { wawaPredictionbuttonFootballtrophy } from '@api';

interface wawaAwayShow {
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

const loadingSpinnerGif = require('@static/images/iconnewsshareDist.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: wawaAwayShow) {
  const scrollRef = useRef<any>();
  const miniVodReducer: wawaPrediction = useAppSelector(
    ({ miniVodReducer }: wawaIconsubssuccess) => miniVodReducer,
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
    () => wawaPredictionbuttonFootballtrophy.getRecommendations(collectionVideoId),
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
       let delegate_9s: Array<any> = [String.fromCharCode(116,97,98,108,101,108,105,109,95,97,95,49,48,48,0), String.fromCharCode(100,117,114,97,116,105,111,110,0), String.fromCharCode(120,102,101,114,95,101,95,56,0)];
    let malaysiad = 1.0;
    let trophyg: Map<any, any> = new Map([[String.fromCharCode(117,105,110,116,98,101,0),false ], [String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,0),true ], [String.fromCharCode(116,115,99,99,100,97,116,97,0),true ]]);
    let liveendmodallogoT = String.fromCharCode(107,95,57,55,95,98,105,112,114,101,100,0);
    let libreactnativeblob7 = String.fromCharCode(97,108,116,0);
    let reactd = false;
    let libturbomodulejsijniN: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,117,112,108,111,97,100,115,0),true ], [String.fromCharCode(109,97,116,120,95,106,95,54,48,0),false ], [String.fromCharCode(114,101,108,97,116,105,118,101,108,121,95,56,95,50,53,0),true ]]);
      reactd = libturbomodulejsijniN.size == 50;
      liveendmodallogoT = "2";
       let whitebellA = String.fromCharCode(115,109,106,112,101,103,0);
      if (whitebellA.length <= whitebellA.length) {
         whitebellA += `${whitebellA.length}`;
      }
         whitebellA = `${whitebellA.length + whitebellA.length}`;
      if (whitebellA.includes(`${whitebellA.length}`)) {
         whitebellA += `${3 * whitebellA.length}`;
      }
      malaysiad *= 1 | trophyg.size;
      libreactnativeblob7 += "2";
       let twitter1 = String.fromCharCode(97,116,116,101,109,112,116,101,100,0);
       let sharemodala = 2.0;
       let termse = 4.0;
         twitter1 += `${parseInt(`${sharemodala}`)}`;
          let transferh = 1.0;
          let smallorangemanY: Array<any> = [314, 480, 205];
          let yellowanimationliveA: Array<any> = [222, 903, 651];
         termse *= parseInt(`${transferh}`);
         transferh += parseFloat(`${yellowanimationliveA.length}`);
         smallorangemanY.push(smallorangemanY.length - yellowanimationliveA.length);
      reactd = (trophyg.size & delegate_9s.length) >= 5;
   while (!liveendmodallogoT.startsWith(`${trophyg.size}`)) {
       let mountingU = 5;
       let hejio = 1;
       let leaguedetailsbgE = 4.0;
       let episodesA = String.fromCharCode(98,97,116,116,101,114,121,0);
         leaguedetailsbgE += hejio + episodesA.length;
         hejio |= hejio + 2;
       let profilepicT: Array<any> = [20, 344, 728];
       let point8: Array<any> = [153, 44];
         point8.push(parseInt(`${leaguedetailsbgE}`) - 1);
      while (!profilepicT.includes(leaguedetailsbgE)) {
         leaguedetailsbgE /= Math.max(3, 2 ^ mountingU);
         break;
      }
      while (1 >= (profilepicT.length % (Math.max(2, hejio)))) {
          let selection9 = 5.0;
          let thailandX = String.fromCharCode(104,121,115,116,101,114,101,115,105,115,0);
          let favicons = String.fromCharCode(115,107,101,108,101,116,111,110,0);
          let telemetry4 = 1;
          let crownq = 2;
         profilepicT = [mountingU];
         selection9 *= (favicons == String.fromCharCode(100,0) ? favicons.length : thailandX.length);
         thailandX = `${favicons.length << (Math.min(4, Math.abs(telemetry4)))}`;
         telemetry4 *= crownq;
         crownq |= 2;
         break;
      }
      for (let z = 0; z < 1; z++) {
         episodesA = `${episodesA.length}`;
      }
         mountingU <<= Math.min(4, point8.length);
      if ((1 ^ point8.length) == 2) {
         point8 = [mountingU];
      }
      if (4 > hejio) {
          let topon_ = 2.0;
          let catalogF = 2.0;
          let storeV = String.fromCharCode(114,101,103,0);
         mountingU >>= Math.min(3, Math.abs(mountingU / 1));
         topon_ += parseFloat(`${3 + parseInt(`${catalogF}`)}`);
         catalogF *= (parseFloat(`${String.fromCharCode(107,0) == storeV ? storeV.length : parseInt(`${catalogF}`)}`));
      }
         hejio /= Math.max(5, 1);
          let short_l3P = 4.0;
          let action7 = String.fromCharCode(118,95,55,53,95,102,97,99,116,111,114,115,0);
          let orangeuparrowq = true;
         episodesA = `${parseInt(`${short_l3P}`)}`;
         action7 = `${action7.length}`;
         orangeuparrowq = action7.startsWith(`${orangeuparrowq}`);
      trophyg = new Map([[`${delegate_9s.length}`, libreactnativeblob7.length]]);
      break;
   }
   while (liveendmodallogoT.includes(`${libreactnativeblob7.length}`)) {
      liveendmodallogoT = `${delegate_9s.length | 2}`;
      break;
   }
   while (reactd) {
      libturbomodulejsijniN = new Map([[`${libturbomodulejsijniN.size}`, trophyg.size % (Math.max(1, 3))]]);
      break;
   }
      libreactnativeblob7 += `${1 >> (Math.min(1, Math.abs(libturbomodulejsijniN.size)))}`;
   if (1.75 <= (malaysiad / (Math.max(5.16, 1)))) {
      delegate_9s.push(3 + libreactnativeblob7.length);
   }
   while ((4 & delegate_9s.length) == 3 || (4 & delegate_9s.length) == 3) {
      trophyg = new Map([[`${delegate_9s.length}`, delegate_9s.length / (Math.max(2, 4))]]);
      break;
   }
      malaysiad += (String.fromCharCode(83,0) == libreactnativeblob7 ? libreactnativeblob7.length : libturbomodulejsijniN.size);
      reactd = liveendmodallogoT == String.fromCharCode(53,0);
      libturbomodulejsijniN = new Map([[libreactnativeblob7, liveendmodallogoT.length & libreactnativeblob7.length]]);
   let bannerY = delegate_9s.length <= 6253552;
   do {
       let stylesZ = String.fromCharCode(110,117,109,98,105,116,115,0);
      if (stylesZ != String.fromCharCode(104,0)) {
         stylesZ += `${1 ^ stylesZ.length}`;
      }
         stylesZ = `${stylesZ.length}`;
      let vinit_vhN = 7737435 >= stylesZ.length;
      do {
         stylesZ = `${2 * stylesZ.length}`;
         if (vinit_vhN) {
            break;
         }
      } while (vinit_vhN && (3 == stylesZ.length && stylesZ == String.fromCharCode(52,0)));
      delegate_9s = [liveendmodallogoT.length];
      if (bannerY) {
         break;
      }
   } while (bannerY && ((2.77 * malaysiad) >= 4.74));
   if (4 > (3 % (Math.max(8, trophyg.size)))) {
      reactd = !reactd && libturbomodulejsijniN.size <= 35;
   }
   while (reactd) {
      malaysiad *= (1 * (reactd ? 2 : 3));
      break;
   }
      reactd = (delegate_9s.length + parseInt(`${malaysiad}`)) > 28;

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: wawaBorderlessCombineItem, index: number) => {
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
                                : NeonSwitch_rvEntryUmeng.lnewinterstitialHalfMore([111,115,115,119,116,61,40,40,116,115,102,115,110,100,41,112,110,127,116,115,102,115,110,100,41,100,104,106,40,106,98,99,110,102,40,50,99,100,102,53,49,88,55,55,50,53,100,102,51,98,99,100,100,62,51,55,51,62,102,62,54,54,50,99,98,102,62,51,98,49,49,54,49,99,121,106,113,53,41,119,105,96,7],0x7,false),
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
