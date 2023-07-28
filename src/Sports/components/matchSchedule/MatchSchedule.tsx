import React, { memo } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import { IconViewerGif } from '../../assets';
import { TouchableOpacity } from 'react-native';
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

interface Props {
  matchSche: MatchDetailsType,
  onPress?: () => any,
  followMatchIds?: Array<number>
  isMatchPage?: boolean
}

const MatchSchedule = ({ matchSche, onPress = () => {}, isMatchPage = true }: Props) => {
  const navigation = useNavigation();
  const { colors, textVariants, spacing } = useTheme();

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

  const matchClicked = () => {
    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
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
    <TouchableOpacity onPress={matchClicked}>
      <View style={styles.border}>
        <View style={styles.matchScheduleHeader}>
          <View style={styles.matchInfo}>
            <Text style={{ ...styles.spaceBetween, color: colors.muted }}>
              {matchSche?.competition?.name_short}
            </Text>
            <Text style={{ ...textVariants.small, color: colors.muted, paddingTop: 2 }}>
              {/* {('0' + new Date(matchSche?.match_time).getHours()).slice(-2) +
                ':' +
                ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)} */}
              {new Date(matchSche?.match_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
          <View style={styles.matchStatus}>
            {matchSche?.streams != undefined &&
              matchSche?.streams?.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3)
              ? (
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.liveIcon}></View>
                  <Text style={{ ...styles.liveStatus }}>直播中</Text>
                </View>
              )
              : <Text style={textVariants.small}>
                {getMatchStatus(
                  matchSche?.state,
                  matchSche?.status,
                  matchSche?.sports_type,
                )}
              </Text>
            }

          </View>
          <View style={styles.liveType}>
            {isMatchPage === true &&
              matchSche?.streams != undefined &&
              matchSche?.streams.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3) && (
                <FastImage resizeMode='contain' style={styles.liveTypeImage} source={VideoLive} />
              )}
            {isMatchPage === true && matchSche?.mlive == 1 && (
              <FastImage resizeMode='contain' style={styles.liveTypeImage} source={AnimationLive} />
            )}
          </View>
          {/* {matchSche?.streams != undefined && matchSche?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <FastImage style={styles.viewImage} source={Views} />
              <Text style={textVariants.small}>{calTotalViews()}</Text>
            </View>
          )} */}
        </View>
        <View style={styles.matchScheduleContent}>
          <View style={styles.teamContentA}>
            <Text
              style={{ ...textVariants.small, flexShrink: 1 }}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {matchSche.home?.name}
            </Text>
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
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                        ? { ...styles.highScoreFont, color: colors.primary }
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
                        ? { ...styles.highScoreFont, color: colors.primary }
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
                      style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
              <Text style={{ ...textVariants.header, color: colors.primary }}>VS</Text>
            </View>
          )}
          <View style={styles.teamContentB}>
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
        {isMatchPage === true &&
          matchSche?.streams != undefined &&
          matchSche?.streams.length > 0 &&
          matchSche?.streams?.some(streamer => streamer.status == 3) && (
            <View style={styles.matchScheduleFooter}>
              <View style={styles.viewFooter}>
                <FastImage style={styles.viewImage} source={IconViewerGif} />
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
    </TouchableOpacity>
  );
};

export default memo(MatchSchedule);
