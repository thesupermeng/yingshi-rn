import React, {memo, useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {VodCarousellResponseType, VodData} from '../../types/ajaxTypes';
import FastImage from 'react-native-fast-image';
import {VodReducerState} from '../../redux/reducers/vodReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import VodListVertical from '../vod/vodListVertical';
import LinearGradient from 'react-native-linear-gradient';
import {playVod} from '../../redux/actions/vodActions';
import HomeHeader from '../header/homeHeader';
import {FlatList} from 'react-native-gesture-handler';

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
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({vodCarouselRes, navId = 0, setScrollEnabled}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const data = vodCarouselRes.data;

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
    <FlatList
      ListHeaderComponent={
        <>
          {data?.carousel[0] && (
            <View
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
          )}
          <View>
            {data && data.class_list && data.class_list.length > 0 && (
              <FlatList
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
                renderItem={({item, index}: {item: string; index: number}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        marginRight: spacing.m,
                        justifyContent: 'center',
                        display: 'flex',
                        backgroundColor: BTN_COLORS[index % BTN_COLORS.length],
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
                        {item}111
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
            {data?.yunying && data.yunying.length > 0 && (
              <View
                style={{
                  paddingLeft: spacing.sideOffset,
                  paddingRight: spacing.sideOffset,
                  gap: spacing.m,
                }}>
                <View>
                  <ShowMoreVodButton
                    text="精选热播"
                    onPress={() => {
                      navigation.navigate('片库', {
                        type_id: data.yunying[0].type_id,
                      });
                    }}
                  />
                </View>
                <VodListVertical
                  vods={data?.yunying[navId]?.vod_list?.slice(0, 6)}
                />
              </View>
            )}
          </View>
        </>
      }
      data={data?.categories ? data?.categories : []}
      initialNumToRender={1}
      windowSize={3}
      maxToRenderPerBatch={3}
      renderItem={listItem}
    />
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
    height: 160,
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
