import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Link, useTheme } from '@react-navigation/native';
import styles from './style';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/vars';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '../../../redux/store';
// import FollowMatchAction from '../../redux/actions/followMatchAction';
import { useNavigation } from '@react-navigation/native';
import { MatchDetailsType } from '../../types/matchTypes';
// import {showToast} from '../../utility/toast';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/date';

interface Props {
  matchSche: MatchDetailsType,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: Props) => {
  // const isSub = followMatchIds?.includes(matchSche.id);

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  // useEffect(() => {
  //   setSubscribe(isSub);
  // }, [isSub]);

  let totalViews = 0;
  const calTotalViews = () => {
    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {
      matchSche?.streams.map(e => (totalViews += e.view_num));
    }

    let dividedTotalViews = 0;
    if (totalViews / 10000 >= 1) {
      dividedTotalViews = totalViews / 10000;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  // const matchSportType = props?.sportType;
  const matchStartTime = matchSche?.start_time;

  // const timePassed = useMemo(() => {
  //   // const diff = MinutesInDates(new Date(matchSche.match_time), new Date())
  //   const a = new Date(matchSche.match_time)
  //   const b = new Date()
  //   return `${b.getMinutes()-a.getMinutes()}'`
  // }, [matchSche])

  // const checkIsLogin = () => {
  //   let isLogin = store.getState().accessToken;
  //   if (isLogin) {
  //     return true;
  //   }
  //   return false;
  // };

  // const subscribeMatch = async () => {
  //   if (subscribe) {
  //     const res = await FollowMatchAction.instance.unfollowMatch(match?.id);
  //     res ? setSubscribe(false) : showToast('失败');
  //   } else {
  //     const res = await FollowMatchAction.instance.followMatch(match?.id);
  //     res ? setSubscribe(true) : showToast('失败');
  //   }
  // };

  const matchClicked = async () => {

    // navigation.navigate('体育详情');

    // const route = await liveRoomName(matchSche?.id);
    let route: '体育详情' | '足球详情' | '篮球详情' = '体育详情';
    if (matchType === 'football') {
      route = '足球详情';
    } else if (matchType === 'basketball') {
      route = '篮球详情'
    }
    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
      streamerId:
        matchSche?.streams?.length > 0
          ? matchSche?.streams[0]?.streamer_id
          : undefined,
      sportType: '足球'
    });
  }



  // const streamerClicked = (streamerId, streamerStatus) => {
  //   return () => {
  //     // navigation.navigate(redirectPage(streamerId, streamerStatus), {
  //     //   matchId: match?.id,
  //     //   streamerId: streamerId,
  //     // });
  //     navigation.navigate('体育详情', {
  //       matchId: matchSche?.id === null ? undefined : matchSche.id,
  //       streamerId:
  //         matchSche?.streams?.length > 0
  //           ? matchSche?.streams[0]?.streamer_id
  //           : undefined,
  //       sportType: '足球'
  //     });
  //   };
  // };

  // const redirectPage = (streamerId = null, streamerStatus = null) => {
  //   if (streamerId != null && streamerStatus == 3) {
  //     return 'LivePage';
  //   } else if (streamerId != null && streamerStatus != null) {
  //     if (match?.status == 0 || match?.status == 1) {
  //       return 'BeforeLivePage';
  //     } else {
  //       return 'AfterLivePage';
  //     }
  //   } else {
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  //     if (onlineStreamer != undefined && onlineStreamer != -1) {
  //       return 'LivePage';
  //     } else if (match?.status == 1) {
  //       return 'AfterLivePage';
  //     } else if (match?.status == 0) {
  //       return 'BeforeLivePage';
  //     } else {
  //       return 'AfterLivePage';
  //     }
  //   }
  // };

  // const getOnlineStreamer = () => {
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  //   if (onlineStreamer != undefined && onlineStreamer != -1) {
  //     return matchSche?.streams[onlineStreamer].streamer_id;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <FixedTouchableHighlight onPress={matchClicked} >
      <View style={styles.live}>
        <View style={styles.verticalBar}></View>
        <View style={{
          height: 90, display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        }}>
          <View style={styles.liveContent}>
            <View>
              {matchSche?.streams != undefined &&
                matchSche?.streams?.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <View>
                    {
                      matchSche?.status === 1
                        ?
                        <View style={styles.pill}>
                          <FastImage style={{
                            width: 20,
                            height: 20,
                          }} source={Live} />
                          <Text style={{ ...textVariants.subBody, color: colors.primary }}>
                            {
                              matchOnTime(
                                matchStartTime,
                                matchSportType,
                                matchStatus,
                                matchState,
                              )
                            }
                          </Text>
                        </View>
                        :
                        <View style={styles.schedule}>
                          <Text style={{ color: colors.muted, textAlign: 'center' }}>
                            {matchSche?.competition?.name_short}
                          </Text>
                          <Text style={{ ...textVariants.small, color: colors.muted, textAlign: 'center' }}>
                            {('0' + new Date(matchSche?.match_time_ts).getHours()).slice(-2) +
                              ':' +
                              ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)}
                          </Text>
                        </View>
                    }
                  </View>
                )}
            </View>
            <View style={{ gap: 8 }}>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.home?.icon != undefined &&
                  matchSche?.home?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.home?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={HomeIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.home?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text
                  style={{ ...textVariants.small, flexShrink: 1 }}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {matchSche.home?.name}
                </Text>
              </View>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.away?.icon != undefined &&
                  matchSche?.away?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.away?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={AwayIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.away?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text style={{ ...textVariants.small, flexShrink: 1 }} numberOfLines={1}>
                  {matchSche?.away?.name}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.liveContent}>
            {
              matchSche.status === 1
                ? <>
                  <View>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.away_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.home_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  <View style={{ gap: 8 }}>
                    {isMatchPage === true &&
                      matchSche?.streams != undefined &&
                      matchSche?.streams.length > 0 &&
                      matchSche?.streams?.some(streamer => streamer.status == 3) && (
                        <FastImage style={{ height: 22, width: 22 }} source={VideoLiveWhite} resizeMode='contain' />
                      )}
                    {isMatchPage === true && matchSche?.mlive == 1 && (
                      <FastImage style={{ height: 22, width: 22 }} resizeMode='contain' source={AnimationLiveWhite} />
                    )}
                  </View>
                </>
                : <Text style={{ ...textVariants.subBody }}>
                  {
                    matchOnTime(
                      matchStartTime,
                      matchSportType,
                      matchStatus,
                      matchState,
                    )
                  }
                </Text>
            }
          </View>
        </View>
      </View>
    </FixedTouchableHighlight>
  )

};

export default memo(MatchScheduleLive);
