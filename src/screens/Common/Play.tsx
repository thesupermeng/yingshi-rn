import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import FavoriteButton from '../../components/button/favoriteVodButton';
import FavoriteIcon from '../../../static/images/favorite.svg';
import ScreenContainer from '../../components/container/screenContainer';
import { useTheme, useFocusEffect } from '@react-navigation/native';

import { RootStackScreenProps } from '../../types/navigationTypes';
import { SuggestResponseType, VodDetailsResponseType } from '../../types/ajaxTypes';
import { addVodToHistory, playVod } from '../../redux/actions/vodActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '../../redux/reducers/vodReducer';
import SinaIcon from '../../../static/images/sina.svg';
import WeChatIcon from '../../../static/images/wechat.svg';
import QQIcon from '../../../static/images/qq.svg';
import PYQIcon from '../../../static/images/pyq.svg';
import MoreArrow from '../../../static/images/more_arrow.svg';
import VodEpisodeSelectionModal from '../../components/modal/vodEpisodeSelectionModal';
import FastImage from 'react-native-fast-image';
import { API_DOMAIN, UMENG_CHANNEL } from '../../utility/constants';
import { useQuery } from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/showMoreVodButton';
import VodListVertical from '../../components/vod/vodListVertical';
import VodPlayer from '../../components/videoPlayer/vodPlayer';
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { SettingsReducerState } from '../../redux/reducers/settingsReducer';
import BingSearch from '../../components/container/bingSearchContainer';

import NoConnection from '../../components/common/noConnection';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import AdsBanner from '../../ads/adsBanner';
import { handleAppOrientation, lockAppOrientation } from '../../redux/actions/settingsActions';

type VideoRef = {
  setPause: (param: boolean) => void,
  isPaused: boolean,
  setCurrentTime: (time: number) => void
};

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return '';
  }
  return val + ' ';
};

export default ({ navigation, route }: RootStackScreenProps<'播放'>) => {

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
  // const [vod, setVod] = useState(vodReducer.playVod.vod);
  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    x => x.vod_id === vod?.vod_id,
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
  );

  // ATRNSDK.setLogDebug(true);

  const [isVodRestricted, setVodRestricted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);
  const textRef = useRef(null);

  const handleTextLayout = (event: { nativeEvent: { lines: any } }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  const currentTimeRef = useRef<number>(0);
  const sheetRef = useRef<BottomSheet>(null);
  const episodeRef = useRef<FlatList>(null);
  const videoPlayerRef = useRef() as React.MutableRefObject<VideoRef>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [showEpisodeList, setShowEpisodeList] = useState(false);

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        vod?.vod_play_list
          ? vod.vod_play_list.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [currentEpisode, showEpisodeRangeStart, vod],
  );
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `《${vod?.vod_name
        }》高清播放${'\n'}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${'\n'}萤视频-海量高清视频在线观看`,
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

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    setDismountPlayer(true); //dismount player when offline 
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched)
    }
  }, [vod])

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      },
    );
    return () => removeNetInfoSubscription();
  }, []);

  useEffect(() => {
    const eventName = 'watch_video';
    const eventValues = {
      vod_name: vod?.vod_name,
    };

    // appsFlyer.logEvent(
    //   eventName,
    //   eventValues,
    //   res => {
    //     // console.log(res);
    //   },
    //   err => {
    //     console.error(err);
    //   },
    // );
  }, []);

  const fetchVodDetails = () =>
    fetch(`${API_DOMAIN}vod/v1/vod/detail?id=${vod?.vod_id}&appName=萤视频&platform=` + Platform.OS.toUpperCase() + `&channelId=` + UMENG_CHANNEL)
      .then(response => response.json())
      .then((json: VodDetailsResponseType) => {
        return json.data[0];
      });

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ['vodDetails', vod?.vod_id],
    queryFn: () => fetchVodDetails(),
  });

  useEffect(() => {
    if(vod !== undefined && vod !== null && vodDetails !== undefined){
      vod.vod_play_list = vodDetails.vod_play_list
      vod.vod_play_url = vodDetails.vod_play_url
      // setVod(vod);
      dispatch(playVod(vod));
    }
  }, [vodDetails])

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
    currentEpisodeRef.current = vod?.episodeWatched;
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
    );

    setVodRestricted(vod?.vod_restricted === 1);
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
        size += 14;
      }
      size = Math.max(70, size);
      size += spacing.xs;
      offset += size;
    }
    return offset;
  };

  useEffect(() => {
    setIsCollapsed(true);
    // episodeRef?.current?.scrollToOffset({
    //   offset: getOffSet(currentEpisode),
    //   animated: true,
    // });
    episodeRef?.current?.scrollToIndex({
      index: currentEpisode,
      animated: true,
    });
  }, [currentEpisode, episodeRef]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        setDismountPlayer(true);
        if (vod) {
          dispatch(addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current));
          setInitTime(currentTimeRef.current);
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef]),
  );

  const renderEpisodes = useCallback(({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor:
          currentEpisode === item.nid
            ? colors.primary
            : colors.search,
        paddingVertical: 8,
        paddingHorizontal: 10,
        minWidth: 70,
        marginRight: spacing.xs,
        ...styles.episodeBtn,
      }}
      onPress={() => {
        setCurrentEpisode(item.nid);
        currentEpisodeRef.current = item.nid;
        currentTimeRef.current = 0;
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
  ), [currentEpisode]);

  const onContentSizeChange = () => {
    if (episodeRef.current) {
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
    setShowEpisodeList(false)
  }, [])

  const handleOrientation = (orientation: string) => {
    dispatch(handleAppOrientation(orientation));
  }
  
  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  }

  return (
    <>
      <AdsBanner bottomTabHeight={0} />
      <ScreenContainer
        containerStyle={{ paddingRight: 0, paddingLeft: 0 }}>

        {/* if isVodRestricted, show bing search */}
        {isVodRestricted && vod && !isOffline && (
          <BingSearch vod={vod} />
        )}
        
        {!isVodRestricted && vod?.vod_play_list?.urls?.find(url => url.nid === currentEpisode)
          ?.url !== undefined &&
          !dismountPlayer &&
          !isOffline && (
            <VodPlayer
              vod_url={
                vod.vod_play_list.urls.find(url => url.nid === currentEpisode)
                  ?.url
              }
              ref={videoPlayerRef}
              currentTimeRef={currentTimeRef}
              initialStartTime={
                initTime
              }
              vodTitle={vod.vod_name}
              videoType="vod"
              activeEpisode={currentEpisode}
              episodes={vod.type_id !== 2 ? vod?.vod_play_list : undefined}
              onEpisodeChange={(id: number) => {
                setCurrentEpisode(id);
                currentTimeRef.current = 0;
              }}
              showGuide={settingsReducer.showVodPlayerGuide}
              rangeSize={EPISODE_RANGE_SIZE}
              autoPlayNext={vod.type_id !== 2}
              onShare={onShare}
              movieList={vod.type_id === 2 ? suggestedVods : []}
              showMoreType={vod.type_id === 2 ? 'movies' : 'episodes'}
              isFetchingRecommendedMovies={isFetchingSuggestedVod}
              appOrientation={settingsReducer.appOrientation}
              devicesOrientation={settingsReducer.devicesOrientation}
              handleOrientation={handleOrientation}
              lockOrientation={lockOrientation}
            // setNavBarOptions={setNavBarOptions}
            />
          )
        }
        {
          isOffline && dismountPlayer &&
          (
            <View style={{ width: '100%', aspectRatio: 16/9, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('../../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          )
        }
        {!dismountPlayer && isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlay={true} />
        )}

        {!isOffline && (
          <>
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
                              width={18}
                              height={18}
                              style={{
                                color: isFavorite ? colors.primary : colors.muted,
                              }}
                            />
                            {isFavorite ? (
                              <Text
                                style={{
                                  ...textVariants.subBody,
                                  color: colors.primary,
                                  paddingBottom: 3,
                                }}>
                                已收藏
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  ...textVariants.subBody,
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
                        : new Date()
                          .toLocaleDateString('en-GB')
                          .replace(/\//g, '-')
                        }`}
                    </Text>
                    <TouchableOpacity onPress={onShare}>
                      <View style={{ ...styles.share, gap: 10 }}>
                        <Text
                          style={{ ...textVariants.subBody, color: colors.muted }}>
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
                        {`${definedValue(vod?.vod_content)}`}
                      </Text>
                    </View>
                    <View style={{ paddingBottom: 0 }}>
                      {isCollapsed && actualNumberOfLines >= 2 && (
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
                      {!isCollapsed && actualNumberOfLines >= 2 && (
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
                {/* show 选集播放 section when avaiable episode more thn 1 */}
                <>
                  { isFetchingVodDetails ?
                    (
                      <>
                        <View style={{ width: '100%', aspectRatio: 16/9, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                          <FastImage
                            style={{ height: 80, width: 80 }}
                            source={require('../../../static/images/loading-spinner.gif')}
                            resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                      </>
                    )
                    :
                    (
                      <>
                        {vod?.vod_play_list !== undefined &&
                          vod?.vod_play_list.urls?.length > 1 && (
                            <>
                              <View style={{ ...styles.spaceApart, gap: spacing.l }}>
                                <Text style={textVariants.body}>选集播放</Text>
                                <TouchableOpacity
                                  style={styles.share}
                                  onPress={() => {
                                  sheetRef.current?.snapToIndex(1)
                                  setShowEpisodeList(true) // render list only when modal is up
                                  }}>
                                  <Text
                                    style={{
                                      color: colors.muted,
                                      fontSize: 15,
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
                                renderItem={renderEpisodes}
                                onContentSizeChange={onContentSizeChange}
                                ListFooterComponent={
                                  <View style={{paddingHorizontal: 20}}/>
                                }
                              />
                              <View />
                            </>
                          )}
                        {vod &&
                          suggestedVods !== undefined &&
                          suggestedVods?.length > 0 && (
                            <View style={{ gap: spacing.l }}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name}`}
                                onPress={() => {
                                  videoPlayerRef.current.setPause(true);
                                  setTimeout(() => {
                                    navigation.navigate('片库', { type_id: vod.type_id });
                                  }, 150);
                                }}
                              />
                              <VodListVertical
                                vods={suggestedVods}
                                outerRowPadding={2 * (20 - spacing.sideOffset)}
                                onPress={() => {
                                  if(!isCollapsed){
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          )}
                      </>
                    )
                  }
                </>
              </View>
            </ScrollView>
            {
              (settingsReducer.appOrientation === 'PORTRAIT' || settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN') && settingsReducer.isAppOrientationChanged && // only show if portrait
              <VodEpisodeSelectionModal
                showEpisodeList={showEpisodeList}
                handleClose={handleModalClose}
                activeEpisode={currentEpisode}
                episodes={vod?.vod_play_list}
                sheetRef={sheetRef}
                onCancel={() => {
                  sheetRef.current?.close()
                }}
                onConfirm={(id: number) => {
                  setCurrentEpisode(id);
                  handleModalClose()
                }}
                rangeSize={EPISODE_RANGE_SIZE}
              />
            }
          </>
        )}
        {isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
        )}
      </ScreenContainer>
    </>
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
