import React, { memo, useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Link, useTheme } from '@react-navigation/native';
import styles from './style';
import { IsSub, Sub, Views, IconViewerGif } from '../../assets';
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

interface Props {
  match: MatchDetailsType,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
}

const MatchSchedule = ({ match, onPress, followMatchIds = [], isMatchPage = false }: Props) => {
  const isSub = followMatchIds?.includes(match.id);

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  useEffect(() => {
    setSubscribe(isSub);
  }, [isSub]);

  let totalViews = 0;
  // const calTotalViews = () => {
  //   if (match?.streams != undefined && match?.streams.length > 0) {
  //     match?.streams.map(e => (totalViews += e.view_num));
  //   }

  //   let dividedTotalViews = 0;
  //   if (totalViews / 10000 >= 1) {
  //     dividedTotalViews = totalViews / 10000;
  //     return dividedTotalViews.toFixed(1) + '万';
  //   }

  //   return totalViews;
  // };

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

    navigation.navigate('体育详情');

    // const route = await liveRoomName(match?.id);
    // navigation.navigate(route, {
    //   matchId: match?.id,
    //   streamerId:
    //     match?.streams?.length > 0
    //       ? match?.streams[0]?.streamer_id
    //       : null,
    // });
    // navigation.navigate(redirectPage(), {
    //   matchId: match?.id,
    //   streamerId: getOnlineStreamer(),
    // });
  }



  // const streamerClicked = (streamerId, streamerStatus) => {
  //   return () => {
  //     navigation.navigate(redirectPage(streamerId, streamerStatus), {
  //       matchId: match?.id,
  //       streamerId: streamerId,
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
  //   const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  //   if (onlineStreamer != undefined && onlineStreamer != -1) {
  //     return match?.streams[onlineStreamer].streamer_id;
  //   } else {
  //     return null;
  //   }
  // };
  // console.log('WTF', match)
  return (
    <FixedTouchableHighlight onPress={matchClicked} style={{flex: 1, height: 200}}>
      <View style={styles.border}>
        <View style={styles.matchScheduleHeader}>
          <View style={styles.matchInfo}>
            <Text style={styles.spaceBetween}>
              {match?.competition?.name_short}
            </Text>
            <Text style={textVariants.header}>
              {('0' + new Date(match?.match_time_ts).getHours()).slice(-2) +
                ':' +
                ('0' + new Date(match?.match_time).getMinutes()).slice(-2)}
            </Text>
          </View>
          <View style={styles.matchStatus}>
            <Text style={styles.headerFont}>
              {getMatchStatus(
                match?.state,
                match?.status,
                match?.sports_type,
              )}
            </Text>
          </View>
          <View style={styles.liveType}>
            {isMatchPage === true && match?.mlive == 1 && (
              <Image style={styles.liveTypeImage} source={AnimationLive} />
            )}
          </View>
          {/* {match?.streams != undefined && match?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <Image style={styles.viewImage} source={Views} />
              <Text style={styles.headerFont}>{calTotalViews()}</Text>
            </View>
          )} */}
        </View>
        <View style={styles.matchScheduleContent}>
          <View style={styles.teamContentA}>
            <Text
              style={textVariants.body}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {match.home?.name}
            </Text>
            {match?.home?.icon != undefined &&
              match?.home?.icon.length > 0 ? (
              <Image
                style={styles.teamImage}
                source={{ uri: match?.home?.icon }}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={HomeIcon}>
                <Text style={styles.teamLogoText}>
                  {match?.home?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
          </View>
          {match?.status == -2 ? (
            <View style={styles.liveScore}>
              <Text style={styles.scoreFont}></Text>
              <Text style={styles.scoreFont}>-</Text>
              <Text style={styles.scoreFont}></Text>
            </View>
          ) : match?.status == 1 || match?.status == -1 ? (
            <View
              style={styles.liveScore}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text
                    style={
                      calculateScore(
                        match?.home_score,
                        match?.sports_type,
                      ) >
                        calculateScore(
                          match?.away_score,
                          match?.sports_type,
                        )
                        ? styles.highScoreFont
                        : styles.scoreFont
                    }>
                    {calculateScore(
                      match?.home_score,
                      match?.sports_type,
                    )}
                  </Text>
                  <Text style={styles.scoreFont}>-</Text>
                  <Text
                    style={
                      calculateScore(
                        match?.away_score,
                        match?.sports_type,
                      ) >
                        calculateScore(
                          match?.home_score,
                          match?.sports_type,
                        )
                        ? styles.highScoreFont
                        : styles.scoreFont
                    }>
                    {calculateScore(
                      match?.away_score,
                      match?.sports_type,
                    )}
                  </Text>
                </View>
                {match?.sports_type == 1 &&
                  (match?.away_score[6] > 0 ||
                    match?.home_score[6] > 0) && (
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <Text style={styles.penaltyScore}>点球 </Text>
                      <Text
                        style={
                          match?.home_score[6] > match?.away_score[6]
                            ? styles.penaltyWinScore
                            : styles.penaltyScore
                        }>
                        {match?.home_score[6]}
                      </Text>
                      <Text style={styles.penaltyScore}> - </Text>
                      <Text
                        style={
                          match?.away_score[6] > match?.home_score[6]
                            ? styles.penaltyWinScore
                            : styles.penaltyScore
                        }>
                        {match?.away_score[6]}
                      </Text>
                    </View>
                  )}
              </View>
            </View>
          ) : (
            <View style={styles.subscribeBtn}>
              <FixedTouchableHighlight
              // onPress={checkIsLogin() ? subscribeMatch : onPress}
              >
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
            {match?.away?.icon != undefined &&
              match?.away?.icon.length > 0 ? (
              <Image
                style={styles.teamImage}
                source={{ uri: match?.away?.icon }}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={AwayIcon}>
                <Text style={styles.teamLogoText}>
                  {match?.away?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
            <Text style={styles.scheduleFont} numberOfLines={1}>
              {match?.away?.name}
            </Text>
          </View>
        </View>
        {/* <View style={styles.streamerList}>
          {match?.streams != undefined &&
            match?.streams.length > 0 &&
            match?.streams.map(e => (
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
