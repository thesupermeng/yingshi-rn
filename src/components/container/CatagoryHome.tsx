import React, {memo, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  FlatList,
  Dimensions,
} from 'react-native';
import {FlatList as FlatListSecondary} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
  VodData,
} from '../../types/ajaxTypes';
import FastImage from 'react-native-fast-image';
import {VodReducerState} from '../../redux/reducers/vodReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import VodHistoryList from '../vod/vodHistoryList';
import VodLiveStationList from '../vod/vodLiveStationList';
import {API_DOMAIN, API_DOMAIN_TEST} from '../../utility/constants';
import VodListVertical from '../vod/vodListVertical';
import {playVod, viewPlaylistDetails} from '../../redux/actions/vodActions';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
interface NavType {
  id: number;
  name: string;
}
interface Props {
  vodCarouselRes: VodCarousellResponseType;
  navOptions?: NavType[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes,
  navId = 0,
  setScrollEnabled,
  onRefresh,
}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const data = vodCarouselRes.data;
  const [refreshing, setRefreshing] = useState(false);
  const width = Dimensions.get('window').width;
  const handleRefresh = useCallback(() => {
    onRefresh(navId);
  }, []);

  const listItem = useCallback(
    ({item, index}: {item: VodData; index: number}) => (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: item.type_id,
              class: item.type_name,
            });
          }}
        />
        {item?.vod_list && item?.vod_list?.length >= 6 && (
          <VodListVertical vods={item?.vod_list?.slice(0, 6)} />
        )}
      </View>
    ),
    [],
  );

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            {/* {data?.carousel[0] && (
              <View
                onStartShouldSetResponder={event => true}
                onTouchStart={e => {
                  e.stopPropagation();
                }}
                onTouchMove={e => {
                  e.stopPropagation();
                }}
                onTouchEnd={e => {
                  e.stopPropagation();
                }}
                style={{
                  height: 200,
                  paddingLeft: spacing.sideOffset,
                  paddingRight: spacing.sideOffset,
                }}>
                <Swiper
                  style={styles.wrapper}
                  autoplay
                  loadMinimal={true}
                  dotColor={colors.sliderDot}
                  activeDotColor={colors.text}
                  dotStyle={styles.dotStyle}
                  paginationStyle={styles.paginationStyle}
                  onTouchStart={() => {
                    setScrollEnabled(false);
                  }}
                  onTouchCancel={() => {
                    setScrollEnabled(true);
                  }}
                  activeDotStyle={styles.activeDotStyle}>
                  {data.carousel.map((carouselItem, idx) => {
                    return (
                      <TouchableOpacity
                        key={`slider-${idx}`}
                        onPress={() => {
                          dispatch(playVod(carouselItem.vod));
                          navigation.navigate('播放', {
                            vod_id: carouselItem.carousel_content_id,
                          });
                        }}
                        // onPressIn={() => { setScrollEnabled(false) }}
                        // onPressOut={() => { setScrollEnabled(true) }}
                        // delayPressIn={0}
                        // delayPressOut={0}
                        // delayLongPress={0}
                      >
                        <FastImage
                          style={styles.image}
                          source={{
                            uri: carouselItem.carousel_pic_mobile,
                            priority: FastImage.priority.normal,
                          }}
                          resizeMode={FastImage.resizeMode.cover}
                        />
                        <LinearGradient
                          colors={['transparent', 'black']}
                          start={{x: 0.5, y: 0}}
                          end={{x: 0.5, y: 0.6}}
                          style={styles.bottomBlur}
                        />
                        <Text
                          style={{
                            ...textVariants.bodyBold,
                            ...styles.carouselTag,
                            color: 'white',
                          }}
                          numberOfLines={1}>
                          {carouselItem.carousel_name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </Swiper>
              </View>
            )} */}

            {data?.carousel[0] && (
              <View
                style={{
                  flex: 1,
                  height: 200,
                  paddingLeft: spacing.sideOffset,
                  paddingRight: spacing.sideOffset,
                  paddingTop: 10,
                }}>
                <Carousel
                  loop
                  width={width - spacing.sideOffset - spacing.sideOffset}
                  height={200}
                  autoPlay={true}
                  data={data.carousel}
                  scrollAnimationDuration={1800}
                  // onSnapToItem={index => console.log('current index:', index)}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      key={`slider-${index}`}
                      onPress={() => {
                        dispatch(playVod(item.vod));
                        navigation.navigate('播放', {
                          vod_id: item.carousel_content_id,
                        });
                      }}>
                      <FastImage
                        style={styles.image}
                        source={{
                          uri: item.carousel_pic_mobile,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <LinearGradient
                        colors={['transparent', 'black']}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 0.6}}
                        style={styles.bottomBlur}
                      />
                      <Text
                        style={{
                          ...textVariants.bodyBold,
                          ...styles.carouselTag,
                          color: 'white',
                        }}
                        numberOfLines={1}>
                        {item.carousel_name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
            <View>
              {data && data.class_list && data.class_list.length > 0 && (
                <FlatListSecondary
                  data={['全部剧集', ...data.class_list]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  initialNumToRender={5}
                  contentContainerStyle={{
                    ...styles.catalogNav,
                    marginBottom: spacing.m,
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                  }}
                  renderItem={({
                    item,
                    index,
                  }: {
                    item: string;
                    index: number;
                  }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          marginRight: spacing.m,
                          justifyContent: 'center',
                          display: 'flex',
                          backgroundColor:
                            BTN_COLORS[index % BTN_COLORS.length],
                          paddingLeft: spacing.s,
                          paddingRight: spacing.s,
                          paddingTop: spacing.s - 4,
                          paddingBottom: spacing.s - 1,
                          borderRadius: spacing.xs,
                          opacity: 0.9,
                        }}
                        onPress={() =>
                          navigation.navigate('片库', {
                            type_id: navId,
                            class: item,
                          })
                        }>
                        <Text
                          style={{
                            textAlign: 'center',
                            ...textVariants.body,
                            fontWeight: '700',
                            opacity: 0.9,
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              )}
              {data?.yunying &&
                data.yunying.length > 0 &&
                data.yunying.map((item, index) => (
                  <View
                    key={item.type_name}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.m,
                    }}>
                    <View>
                      <ShowMoreVodButton
                        text={item.type_name}
                        onPress={() => {
                          navigation.navigate('片库', {
                            type_id: item.vod_list[0].type_id,
                          });
                        }}
                      />
                    </View>
                    <VodListVertical vods={item.vod_list?.slice(0, 6)} />
                  </View>
                ))}
            </View>
          </>
        }
        data={data?.categories ? data?.categories : []}
        initialNumToRender={1}
        windowSize={3}
        maxToRenderPerBatch={3}
        renderItem={listItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      <View style={{paddingBottom: 100}} />
    </>
  );
};

export default memo(CatagoryHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
