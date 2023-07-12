import React, {memo, useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Link} from '@react-navigation/native';
import styles from './style';
import {IsSub, Sub, Views, IconViewerGif} from '../../assets';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import vars from '../../../utility/vars';
import {HomeIcon, AwayIcon, AnimationLive, VideoLive} from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../../utility/utils';
import store from '../../../redux/store';
// import FollowMatchAction from '../../redux/actions/followMatchAction';
import {useNavigation} from '@react-navigation/native';
// import {showToast} from '../../utility/toast';
// import FixedTouchableHighlight from '../fixedTouchableHighlight';

const MatchSchedule = ({matchSche, onPressBtn, followMatchIds = [], isMatchPage = false}) => {
  const isSub = followMatchIds?.includes(matchSche.id);

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    setSubscribe(isSub);
  }, [isSub]);

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

  // const checkIsLogin = () => {
  //   let isLogin = store.getState().accessToken;
  //   if (isLogin) {
  //     return true;
  //   }
  //   return false;
  // };

  // const subscribeMatch = async () => {
  //   if (subscribe) {
  //     const res = await FollowMatchAction.instance.unfollowMatch(matchSche?.id);
  //     res ? setSubscribe(false) : showToast('失败');
  //   } else {
  //     const res = await FollowMatchAction.instance.followMatch(matchSche?.id);
  //     res ? setSubscribe(true) : showToast('失败');
  //   }
  // };

  // const matchClicked = async () => {
  //   const route = await liveRoomName(matchSche?.id);
  //   navigation.navigate(route, {
  //     matchId: matchSche?.id,
  //     streamerId:
  //       matchSche?.streams?.length > 0
  //         ? matchSche?.streams[0]?.streamer_id
  //         : null,
  //   });
    // navigation.navigate(redirectPage(), {
    //   matchId: matchSche?.id,
    //   streamerId: getOnlineStreamer(),
    // });
  };

  // const streamerClicked = (streamerId, streamerStatus) => {
  //   return () => {
  //     navigation.navigate(redirectPage(streamerId, streamerStatus), {
  //       matchId: matchSche?.id,
  //       streamerId: streamerId,
  //     });
  //   };
  // };

  const redirectPage = (streamerId = null, streamerStatus = null) => {
    if (streamerId != null && streamerStatus == 3) {
      return 'LivePage';
    } else if (streamerId != null && streamerStatus != null) {
      if (matchSche?.status == 0 || matchSche?.status == 1) {
        return 'BeforeLivePage';
      } else {
        return 'AfterLivePage';
      }
    } else {
      const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
      if (onlineStreamer != undefined && onlineStreamer != -1) {
        return 'LivePage';
      } else if (matchSche?.status == 1) {
        return 'AfterLivePage';
      } else if (matchSche?.status == 0) {
        return 'BeforeLivePage';
      } else {
        return 'AfterLivePage';
      }
    }
  };

  const getOnlineStreamer = () => {
    const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
    if (onlineStreamer != undefined && onlineStreamer != -1) {
      return matchSche?.streams[onlineStreamer].streamer_id;
    } else {
      return null;
    }
  };

  return (
    <FixedTouchableHighlight onPress={matchClicked}>
      <View style={styles.border}>
        <View style={styles.matchScheduleHeader}>
          <View style={styles.matchInfo}>
            <Text style={styles.spaceBetween}>
              {matchSche?.competition?.name_short}
            </Text>
            <Text style={styles.headerFont}>
              {('0' + new Date(matchSche?.match_time).getHours()).slice(-2) +
                ':' +
                ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)}
            </Text>
          </View>
          <View style={styles.matchStatus}>
            {matchSche?.streams != undefined &&
              matchSche?.streams?.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3) && (
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.liveIcon}></View>
                  <Text style={styles.liveStatus}>直播中</Text>
                </View>
              )}
            <Text style={styles.headerFont}>
              {getMatchStatus(
                matchSche?.state,
                matchSche?.status,
                matchSche?.sports_type,
              )}
            </Text>
          </View>
          <View style={styles.liveType}>
            {isMatchPage === true &&
              matchSche?.streams != undefined &&
              matchSche?.streams.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3) && (
                <Image style={styles.liveTypeImage} source={VideoLive} />
              )}
            {isMatchPage === true && matchSche?.mlive == 1 && (
              <Image style={styles.liveTypeImage} source={AnimationLive} />
            )}
          </View>
          {/* {matchSche?.streams != undefined && matchSche?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <Image style={styles.viewImage} source={Views} />
              <Text style={styles.headerFont}>{calTotalViews()}</Text>
            </View>
          )} */}
        </View>
        <View style={styles.matchScheduleContent}>
          <View style={styles.teamContentA}>
            <Text
              style={styles.scheduleFont}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {matchSche.home?.name}
            </Text>
            {matchSche?.home?.icon != undefined &&
            matchSche?.home?.icon.length > 0 ? (
              <Image
                style={styles.teamImage}
                source={{uri: matchSche?.home?.icon}}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={HomeIcon}>
                <Text style={styles.teamLogoText}>
                  {matchSche?.home?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
          </View>
          {matchSche?.status == -2 ? (
            <View style={styles.liveScore}>
              <Text style={styles.scoreFont}></Text>
              <Text style={styles.scoreFont}>-</Text>
              <Text style={styles.scoreFont}></Text>
            </View>
          ) : matchSche?.status == 1 || matchSche?.status == -1 ? (
            <View
              style={styles.liveScore}>
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
                        ? styles.highScoreFont
                        : styles.scoreFont
                    }>
                    {calculateScore(
                      matchSche?.home_score,
                      matchSche?.sports_type,
                    )}
                  </Text>
                  <Text style={styles.scoreFont}>-</Text>
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
                        ? styles.highScoreFont
                        : styles.scoreFont
                    }>
                    {calculateScore(
                      matchSche?.away_score,
                      matchSche?.sports_type,
                    )}
                  </Text>
                </View>
                {matchSche?.sports_type == 1 &&
                  (matchSche?.away_score[6] > 0 ||
                    matchSche?.home_score[6] > 0) && (
                    <View
                      style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <Text style={styles.penaltyScore}>点球 </Text>
                      <Text
                        style={
                          matchSche?.home_score[6] > matchSche?.away_score[6]
                            ? styles.penaltyWinScore
                            : styles.penaltyScore
                        }>
                        {matchSche?.home_score[6]}
                      </Text>
                      <Text style={styles.penaltyScore}> - </Text>
                      <Text
                        style={
                          matchSche?.away_score[6] > matchSche?.home_score[6]
                            ? styles.penaltyWinScore
                            : styles.penaltyScore
                        }>
                        {matchSche?.away_score[6]}
                      </Text>
                    </View>
                  )}
              </View>
            </View>
          ) : (
            <View style={styles.subscribeBtn}>
              <FixedTouchableHighlight
                onPress={checkIsLogin() ? subscribeMatch : onPressBtn}>
                <View style={styles.subscribeTouchable}>
                  {subscribe ? (
                    <Image style={styles.subImage} source={IsSub} />
                  ) : (
                    <Image style={styles.subImage} source={Sub} />
                  )}
                </View>
              </FixedTouchableHighlight>
            </View>
          )}
          <View style={styles.teamContentB}>
            {matchSche?.away?.icon != undefined &&
            matchSche?.away?.icon.length > 0 ? (
              <Image
                style={styles.teamImage}
                source={{uri: matchSche?.away?.icon}}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={AwayIcon}>
                <Text style={styles.teamLogoText}>
                  {matchSche?.away?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
            <Text style={styles.scheduleFont} numberOfLines={1}>
              {matchSche?.away?.name}
            </Text>
          </View>
        </View>
        {isMatchPage === true &&
          matchSche?.streams != undefined &&
          matchSche?.streams.length > 0 &&
          matchSche?.streams?.some(streamer => streamer.status == 3) && (
            <View style={styles.matchScheduleFooter}>
              <View style={styles.viewFooter}>
                <Image style={styles.viewImage} source={IconViewerGif} />
                <Text style={styles.footerFont}>{calTotalViews()}</Text>
              </View>
            </View>
          )}
        {/* <View style={styles.streamerList}>
          {matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams.map(e => (
              <TouchableWithoutFeedback
                onPress={streamerClicked(e.streamer.id, e.status)}>
                <Text
                  style={e.status == 3 ? styles.liveStreamer : styles.streamer}>
                  {e.streamer.nickname}
                </Text>
              </TouchableWithoutFeedback>
            ))}
        </View> */}
      </View>
    </FixedTouchableHighlight>
  );
};

export default memo(MatchSchedule);
