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
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/miniVodActions';
import { MiniVodReducerState } from '@redux/reducers/miniVodReducer';
import { RootState } from '@redux/store';
import {
  CollectionResponseType,
  MiniVideoCollectionItem,
} from '../../types/ajaxTypes';
import { API_DOMAIN } from '../../utility/constants';
import { getMinuteSecond } from '../../utility/helper';
import BottomSheet from '../bottomSheet/bottomSheet';

interface Props {
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

const loadingSpinnerGif = require('@static/images/loading-spinner.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: Props) {
  const scrollRef = useRef<any>();
  const miniVodReducer: MiniVodReducerState = useAppSelector(
    ({miniVodReducer}: RootState) => miniVodReducer,
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
    () =>
      fetch(`${API_DOMAIN}miniVod/v2/collections/${collectionVideoId}?limit=30`)
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
        scrollRef?.current?.scrollTo({y: itemIndex * 130, animated: true});
      }
    }
  }, [collectionData]);

  const {colors, textVariants, spacing} = useTheme();

  const handleSheetChanges = () => {
    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: MiniVideoCollectionItem, index: number) => {
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
              style={{height: 80, width: 80}}
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
              style={{flex: 1, marginRight: 8}}>
              {collectionData?.map((item, index) => (
                <View style={{width: '100%', height: 130}} key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => goToCollection(item, index)}
                    style={[
                      styles.bottomSheetItem,
                      index == selectedIndex
                        ? styles.selectedBottomSheetItem
                        : styles.notSelected,
                    ]}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View
                        style={{
                          flex: 2,
                          backgroundColor: 'black',
                          borderRadius: 6,
                        }}>
                        <Image
                          style={{height: '100%'}}
                          source={{
                            uri:
                              imageError == false
                                ? item.mini_video_origin_cover
                                : 'https://static.wixstatic.com/media/5dca26_0052ca4edcc94049a9115dea94e6616d~mv2.png',
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
                        <View style={{paddingLeft: 12}}>
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
    // alignItems: 'flex-start',
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: '100%',
    marginVertical: 1,
    padding: 7,
    // paddingVertical: 8,
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
  headerContainer: {paddingTop: 12, paddingBottom: 8},
});

export default memo(CollectionBottomSheet);
