import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { BackHandler, Platform } from 'react-native';
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg';
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { SuggestResponseType } from '../../types/ajaxTypes';
import { addVodToHistory } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '../../redux/reducers/vodReducer';
import BackButton from '../../components/button/backButton';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg';
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';
import MoreArrow from '../../../static/images/more_arrow.svg';
import Animated, {
  useSharedValue,
} from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import { getMaxWidth } from '../../utility/helper';

import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VodEpisodeSelectionModal from '../../components/modal/vodEpisodeSelectionModal';
import FastImage from 'react-native-fast-image';
import { API_DOMAIN } from '../../utility/constants';
import { useQuery } from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/showMoreVodButton';
import VodListVertical from '../../components/vod/vodListVertical';
import VodPlayer from '../../components/videoPlayer/vodPlayer';
import BottomSheet from '@gorhom/bottom-sheet';
import appsFlyer from 'react-native-appsflyer';
import { FlatList } from 'react-native-gesture-handler';
import { SettingsReducerState } from '../../redux/reducers/settingsReducer';
// import UpIcon from './../../../static/images/up_arrow.png';
// import DownIcon from './../../../static/images/down_arrow.png';

type PlayContextValue = {
  value: string;
  updateValue: (newValue: string) => void;
};

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return '';
  }
  return val + ' ';
};

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {
  const insets = useSafeAreaInsets();

  const { colors, spacing, textVariants, icons } = useTheme();
  const vodReducer: VodReducerState = useAppSelector(
    ({ vodReducer }: RootState) => vodReducer,
  );
  const vodFavouriteReducer: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer,
  );
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer,
  );
  const vod = vodReducer.playVod.vod;
  const isFavorite = vodFavouriteReducer.favorites.some(
    x => x.vod_id === vod?.vod_id,
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
  );

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);
  const textRef = useRef(null);

  const handleTextLayout = (event: { nativeEvent: { lines: any; }; }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  const currentTimeRef = useRef<number>(0);
  const sheetRef = useRef<BottomSheet>(null);
  const episodeRef = useRef<FlatList>(null);

  const isExpandEpisodes = useSharedValue(false);
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [orientation, setOrientation] = useState('PORTRAIT');
  const EPISODE_RANGE_SIZE = 50;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        vod?.vod_play_list
          ? vod.vod_play_list.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [currentEpisode, showEpisodeRangeStart],
  );
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `《${vod?.vod_name
          }》高清播放${'\n'}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
          }/sid/1/nid/${currentEpisode + 1
          }.html${'\n'}影视TV-海量高清视频在线观看`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    const eventName = 'watch_video';
    const eventValues = {
      vod_name: vod?.vod_name,
    };

    appsFlyer.logEvent(
      eventName,
      eventValues,
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      },
    );
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (vod) {
        dispatch(addVodToHistory(vod, currentTimeRef.current, currentEpisode));
      }
    };
  }, [currentEpisode, vod, currentTimeRef.current]);

  const fetchVod = () =>
    fetch(
      `${API_DOMAIN}vod/v1/vod?class=${vod?.vod_class
        ?.split(',')
        .shift()}&tid=${vod?.type_id}&limit=6`,
    )
      .then(response => response.json())
      .then((json: SuggestResponseType) => {
        return json.data.List;
      });

  useEffect(() => {
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
    );
  }, [vod]);

  const { data: suggestedVods, isFetching: isFetchingSuggestedVod } = useQuery({
    queryKey: ['relatedVods', vod],
    queryFn: () => fetchVod(),
  });

  const getOffSet = (id: number) => {
    if (vod?.vod_play_list.urls === undefined) {
      return 0;
    }
    let offset = 0;
    for (const item of vod?.vod_play_list?.urls.slice(
      showEpisodeRangeStart,
      id,
    )) {
      let size = 20;
      const name = item.name;
      for (var i = 0; i < name.length; i++) {
        size += 13;
      }
      size = Math.max(70, size);
      size += spacing.s;
      offset += size;
    }
    return offset;
  };

  useEffect(() => {
    setIsCollapsed(true);
    episodeRef?.current?.scrollToOffset({
      offset: getOffSet(currentEpisode),
      animated: true,
    });
  }, [currentEpisode, episodeRef]);
  // useEffect(() => {
  //     const backAction = () => {
  //         setDismountPlayer(false);
  //         return true;
  //     };
  // }, []);

  // useFocusEffect(
  //     React.useCallback(() => {
  //         // Triggered when the user navigates back to the page
  //         setDismountPlayer(false);
  //     }, [navigation]),
  // );

  useFocusEffect(
    useCallback(() => {
      console.log('mount')
      setDismountPlayer(false);
      return () => {
        // Triggered when the user navigates away to the page
        setDismountPlayer(true);
      };
    }, []),
  );

  return (
    <ScreenContainer
      isVideoLandscape={orientation == 'LANDSCAPE'}
      containerStyle={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
      {vod?.vod_play_list?.urls?.find(url => url.nid === currentEpisode)
        ?.url !== undefined && !dismountPlayer && (
          <VodPlayer
            vod_url={
              vod.vod_play_list.urls.find(url => url.nid === currentEpisode)
                ?.url
            }
            currentTimeRef={currentTimeRef}
            initialStartTime={
              vod.episodeWatched === currentEpisode ? vod.timeWatched : 0
            }
            vodTitle={vod.vod_name}
            videoType="vod"
            activeEpisode={currentEpisode}
            episodes={vod.type_id !== 2 ? vod?.vod_play_list : undefined}
            onEpisodeChange={(id: number) => {
              setCurrentEpisode(id);
            }}
            showGuide={settingsReducer.showVodPlayerGuide}
            rangeSize={EPISODE_RANGE_SIZE}
            autoPlayNext={vod.type_id !== 2}
            onShare={onShare}
            movieList={vod.type_id === 2 ? suggestedVods : []}
            showMoreType={vod.type_id === 2 ? 'movies' : 'episodes'}
            isFetchingRecommendedMovies={isFetchingSuggestedVod}
          />
        )}
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ marginTop: spacing.m }}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
          <View style={styles.videoDescription}>
            <FastImage
              source={{ uri: vod?.vod_pic }}
              resizeMode={'cover'}
              style={{ ...styles.descriptionImage, ...styles.imageContainer }}
            />
            <View style={styles.descriptionContainer}>
              {vod && (
                <FavoriteButton
                  initialState={isFavorite}
                  vod={vod}
                  leftIcon={
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: spacing.xxs,
                      }}>
                      <FavoriteIcon
                        width={16}
                        height={16}
                        style={{
                          color: isFavorite ? colors.primary : colors.muted,
                        }}
                      />
                      {isFavorite ? (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.primary,
                            paddingBottom: 3,
                          }}>
                          已收藏
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.muted,
                            paddingBottom: 3,
                          }}>
                          收藏
                        </Text>
                      )}
                    </View>
                  }
                />
              )}
              <Text
                style={{ ...textVariants.subBody, color: colors.muted }}
                numberOfLines={2}>
                {`${definedValue(vod?.vod_year)}`}
                {`${definedValue(vod?.vod_area)}`}
                {`${definedValue(vod?.vod_class?.split(',').join(' '))}`}
              </Text>
              <Text style={{ ...textVariants.subBody, color: colors.muted }}>
                {`更新：${vod
                  ? new Date(vod?.vod_time_add * 1000)
                    .toLocaleDateString('en-GB')
                    .replace(/\//g, '-')
                  : new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
                  }`}
              </Text>
              <TouchableOpacity onPress={onShare}>
                <View style={{ ...styles.share, gap: 10 }}>
                  <Text style={{ ...textVariants.subBody, color: colors.muted }}>
                    分享：
                  </Text>
                  <WeChatIcon />
                  <PYQIcon />
                  <SinaIcon />
                  <QQIcon />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.descriptionContainer2Text}>
              {`导演：${definedValue(vod?.vod_director)}${'\n'}` +
                `主演：${definedValue(vod?.vod_actor)}${'\n'}`}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsCollapsed(!isCollapsed);
              }}>
              <View style={{ paddingBottom: 18 }}>
                <Text
                  ref={textRef}
                  onTextLayout={handleTextLayout}
                  style={styles.descriptionContainer2Text}
                  numberOfLines={isCollapsed ? 2 : 20}>
                  {`${definedValue(vod?.vod_blurb)}`}
                </Text>
              </View>
              <View style={{ paddingBottom: 0 }}>
                {isCollapsed && actualNumberOfLines >= 3 && (
                  <FastImage
                    style={{
                      flex: 1,
                      height: 12,
                      width: 14,
                      alignSelf: 'center',
                    }}
                    source={require('../../../static/images/down_arrow.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                )}
                {!isCollapsed && actualNumberOfLines >= 3 && (
                  <FastImage
                    style={{
                      flex: 1,
                      height: 12,
                      width: 14,
                      alignSelf: 'center',
                    }}
                    source={require('../../../static/images/up_arrow.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>

          {vod?.vod_play_list !== undefined && (
            <>
              <View style={{ ...styles.spaceApart, gap: spacing.l }}>
                <Text style={textVariants.body}>选集播放</Text>
                <TouchableOpacity
                  style={styles.share}
                  onPress={() => sheetRef.current?.snapToIndex(1)}>
                  <Text
                    style={{
                      color: colors.muted,
                      fontSize: 15,
                      paddingBottom: 3,
                    }}>{`${showEpisodeRangeStart + 1
                      }-${showEpisodeRangeEnd}集`}</Text>
                  <MoreArrow
                    style={{ color: colors.muted }}
                    height={icons.sizes.m}
                    width={icons.sizes.m}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={10}
                onScrollToIndexFailed={() => { }}
                ref={episodeRef}
                data={vod?.vod_play_list.urls.slice(
                  showEpisodeRangeStart,
                  showEpisodeRangeEnd,
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        currentEpisode === item.nid
                          ? colors.primary
                          : colors.search,
                      paddingVertical: 8,
                      paddingHorizontal: 10,
                      minWidth: 70,
                      marginRight: spacing.s,
                      ...styles.episodeBtn,
                    }}
                    onPress={() => {
                      setCurrentEpisode(item.nid);
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 13,
                        textAlign: 'center',
                        fontWeight: '500',
                        color:
                          currentEpisode === item.nid
                            ? colors.selected
                            : colors.muted,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <View />
            </>
          )}
          {vod && suggestedVods !== undefined && suggestedVods?.length > 0 && (
            <View style={{ gap: spacing.l }}>
              <ShowMoreVodButton
                text={`相关${vod?.type_name}`}
                onPress={() => {
                  navigation.navigate('片库', { type_id: vod.type_id });
                }}
              />
              <VodListVertical
                vods={suggestedVods}
                outerRowPadding={2 * (20 - spacing.sideOffset)}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <VodEpisodeSelectionModal
        activeEpisode={currentEpisode}
        episodes={vod?.vod_play_list}
        sheetRef={sheetRef}
        onCancel={() => sheetRef.current?.close()}
        onConfirm={(id: number) => {
          setCurrentEpisode(id);
        }}
        rangeSize={EPISODE_RANGE_SIZE}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  videoHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: '100%',
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: '#9C9C9C',
    fontSize: 14,
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceApart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
