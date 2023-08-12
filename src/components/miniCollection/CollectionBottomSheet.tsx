import React, {
  useState,
  useMemo,
  RefObject,
  memo,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {VodEpisodeListType, VodEpisodeType} from '../../types/ajaxTypes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import SortAscIcon from '../../../static/images/sortAsc.svg';
import SortDescIcon from '../../../static/images/sortDesc.svg';
import FastImage from 'react-native-fast-image';
import {useQuery} from '@tanstack/react-query';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../../utility/constants';
import {
  CollectionResponseType,
  MiniVideoCollectionItem,
} from '../../types/ajaxTypes';
import {getMinuteSecond} from '../../utility/helper';

interface Props {
  sheetRef?: RefObject<BottomSheetMethods>;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  inCollectionView?: boolean;
  changeEpisode: any;
}

interface TrimResType {
  toPlayPosition: number;
  trimmedItems: MiniVideoCollectionItem[];
}

function CollectionBottomSheet({
  changeEpisode,
  sheetRef,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  inCollectionView = false,
}: Props) {
  const navigation = useNavigation();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: collectionData,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['collection', collectionId],
    () =>
      fetch(
        `${API_DOMAIN_TEST}miniVod/v1/collections/${collectionVideoId}?limit=1000`,
      )
        .then(response => response.json())
        .then((json: CollectionResponseType) => {
          return json.data.List;
        }),
    {
      enabled: enabledUseQuery,
    },
  );

  useEffect(() => {
    if (collectionData != undefined) {
      setTotalCollectionEpisodes(collectionData.length);
    }
  }, [collectionData]);

  const {colors, textVariants, spacing} = useTheme();
  const snapPoints = useMemo(() => ['25%', '80%'], []);
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} />,
    [],
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === 0 && sheetRef?.current) {
        sheetRef?.current.close();
      }

      if (index == 1) {
        setEnabledUseQuery(true);
      } else {
        setEnabledUseQuery(false);
      }
    },
    [sheetRef],
  );

  const trimVideosSize = (items: MiniVideoCollectionItem[], curr: number) => {
    // trim into 3, prev + current + next

    let trimmed = [];
    let toPlayPosition = 0;
    // if(items.length > 1){
    //     trimmed.push(items[curr]);
    //     if(curr + 1 < items.length){
    //         trimmed.push(items[curr + 1]);
    //     }
    // }else{
    //     trimmed.push(items[curr]);
    // }
    trimmed.push(items[curr]);

    let res: TrimResType = {
      trimmedItems: trimmed,
      toPlayPosition: toPlayPosition,
    };

    return res;
  };

  const goToCollection = (item: MiniVideoCollectionItem, index: number) => {
    if (collectionData !== undefined) {
      let trimRes = trimVideosSize(collectionData, index);

      if (inCollectionView == true) {
        changeEpisode(item, index);
      } else {
        let tempTitle = item.mini_video_collection_title;
        if (!item.mini_video_collection_title.includes('合集')) {
          tempTitle + '合集';
        }
        navigation.navigate('合集播放', {
          collection_id: item.mini_video_id,
          collection_title: tempTitle,
          collection_videos:
            collectionData == undefined ? collectionData : trimRes.trimmedItems,
          collection_video_display_position: index + 1,
          collection_video_item_to_play: trimRes.toPlayPosition,
          collection_enter_position: index,
          collection_video_total_items:
            collectionData == undefined ? 0 : collectionData.length,
          collection_ori_all_videos: collectionData,
        });
      }
    }
  };
  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: '#171717',
      }}
      handleIndicatorStyle={{
        backgroundColor: colors.text,
      }}>
      <View
        style={{
          ...styles.container,
          // backgroundColor: colors.card,
          backgroundColor: '#171717',
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          gap: spacing.m,
        }}>
        <View style={{paddingTop: 16}}>
          <Text style={{...textVariants.header, textAlign: 'center'}}>
            {collectionName}
            {!collectionName?.includes('合集') && <Text>合集</Text>}
          </Text>
          {isLoading ||
            (!isFetching && (
              <Text
                style={{
                  ...textVariants.subBody,
                  textAlign: 'center',
                  color: colors.sliderDot,
                }}>
                更新至{totalCollectionEpisodes}集
              </Text>
            ))}
        </View>
        <BottomSheetScrollView contentContainerStyle={styles.episodeList}>
          {!isLoading && !isFetching ? (
            <View style={{flex: 1}}>
              {collectionData?.map(
                (item: MiniVideoCollectionItem, index: number) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => goToCollection(item, index)}
                      style={{width: '100%', marginVertical: 8}}>
                      <View
                        style={{flex: 1, height: 150, flexDirection: 'row'}}>
                        <View
                          style={{
                            flex: 2,
                            backgroundColor: 'black',
                            borderRadius: 6,
                          }}>
                          <FastImage
                            style={{flex: 1, borderRadius: 6}}
                            source={{
                              uri: item.mini_video_origin_cover,
                              cache: FastImage.cacheControl.web,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                        <View
                          style={{
                            flex: 5,
                            flexDirection: 'column',
                            alignSelf: 'center',
                          }}>
                          <View style={{paddingLeft: 12}}>
                            <Text
                              numberOfLines={4}
                              style={{
                                ...textVariants.header,
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
                  );
                },
              )}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          )}
        </BottomSheetScrollView>
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
    // alignItems: 'flex-start',
    paddingLeft: 10,
  },
});

export default memo(CollectionBottomSheet);
