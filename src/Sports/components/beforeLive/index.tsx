import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './style';
import {
  BackWhite,
  Notification,
  BasketballMatchDetailBG,
  MatchDetailBG,
  NotificationFilled,
  VideoLive,
  AnimationLive,
  OtherMatchDetailBG,
} from '../../assets';
import { TouchableOpacity } from 'react-native';
import {
  dateFormat,
  parseDate,
  parseStringToDate,
  // formatToDateCountdown,
  formatDateTime,
  // useCountdown,
} from '../../utility/date';
import { useNavigation } from '@react-navigation/native';
import { useCountdown } from '../../utility/dateCountDown';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../utility/toast';
import {
  getMatchStatus,
  getMatchScore,
  calculateScore,
} from '../../utility/utils';
import { matchOnTime, matchRunningStatusBasketball } from '../../utility/date';
import DefaultTeamIcon from '../DefaultTeamIcon';
import { MatchDetailWithRankingData } from '../../types/liveMatchTypes';
import { MatchDetailsType, Stream } from '../../types/matchTypes';
import { MatchUpdatesType } from '../../types/matchUpdatesType';

interface Props {
  listLiveDetails?: MatchDetailWithRankingData,
  setVideoSource?: any,
  liveDataState?: MatchDetailsType,
  listLiveMatchDetailsUpdates?: MatchUpdatesType
  dataLive?: Stream[],
  onOpenLive?: () => any
  onOpenAnimation?: any
}

const BeforeLive = ({ liveDataState, listLiveDetails, setVideoSource, listLiveMatchDetailsUpdates, dataLive, onOpenLive, onOpenAnimation }: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleBack = () => {
    setVideoSource({ type: '', url: '' })
    navigation.goBack();
  };

  const matchState = listLiveMatchDetailsUpdates?.state;
  const matchStatus = listLiveMatchDetailsUpdates?.status;
  const matchSportType = listLiveMatchDetailsUpdates?.sports_type;
  
  // const matchSportType = props?.sportType;
  const matchStartTime = listLiveMatchDetailsUpdates?.start_time;

  const matchID = liveDataState?.id;
  const homeIcon = liveDataState?.home?.icon;
  const homeName = liveDataState?.home?.name;
  // console.log('LIVE Match ID', matchID);
  const stream = liveDataState?.streams;

  const awayIcon = liveDataState?.away?.icon;
  const awayName = liveDataState?.away?.name;

  const animationStream2D = listLiveDetails?.mlive_2d_url;
  const animationStream3D = listLiveDetails?.mlive_3d_url;
  // console.log(listLiveDetails?.mlive_2d_url, animationStream3D)

  const homeArrayScore = listLiveMatchDetailsUpdates?.home_score ?? [];
  const awayArrayScore = listLiveMatchDetailsUpdates?.away_score ?? [];

  const competitionNameShort = liveDataState?.competition?.name_short;
  const competitionName = liveDataState?.competition?.name;
  const competitionDate = liveDataState?.match_time;
  // console.log('matchSportType', matchSportType);
  const homeFootballPosition =
    listLiveDetails?.football_home_ranking?.position.toString();
  const awayFootballPosition =
    listLiveDetails?.football_away_ranking?.position.toString();

  const getMatchStatusData = getMatchStatus(
    matchState,
    matchStatus,
    matchSportType,
  );
  // console.log('getMatchStatusData', getMatchStatusData);
  const matchOnTimeGoing = matchOnTime(
    matchStartTime,
    matchSportType,
    matchStatus,
    matchState,
  );

  // console.log('matchOnTime', matchOnTimeGoing);

  const homeScore = calculateScore(homeArrayScore, matchSportType);
  const awayScore = calculateScore(awayArrayScore, matchSportType);
  const homeHalfTimeScore =
    homeArrayScore.length > 0 ? homeArrayScore[1] : null;
  const awayHalfTimeScore =
    awayArrayScore.length > 0 ? awayArrayScore[1] : null;

  const homePenaltyScore = homeArrayScore.length > 0 ? homeArrayScore[6] : null;
  const awayPenaltyScore = awayArrayScore.length > 0 ? awayArrayScore[6] : null;

  const [tempDateTime, setTempDateTime] = useState('');
  const [countDownTime, setCountDownTime] = useState(false);
  const [middleMatchBeforeStart, setMiddleMatchBeforeStart] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState(false);
  const [middleMatchStarted, setMiddleMatchStarted] = useState(false);
  const [panaltyMatchStarted, setPanaltyMatchStarted] = useState(false);
  const [leftTime, setLeftTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState('123');

  const [days, hours, minutes, seconds, countDownStatus] =
    useCountdown(leftTime);

  //special handle for Basketball match
  const basketballCount =
    listLiveMatchDetailsUpdates?.basketball_match?.period_count;
  const matchOnTimeGoingStatus = matchRunningStatusBasketball(
    matchSportType,
    matchStatus,
    matchState,
  );
  const basketballTwoQuoteHalfTime = `半场 ${homeArrayScore[0]}-${awayArrayScore[0]}`;
  const basketballFourQuoteHalfTime = `半场 ${homeArrayScore[0] + homeArrayScore[1]
    }-${awayArrayScore[0] + awayArrayScore[1]}`;
  const homeBasketballPosition =
    listLiveDetails?.basketball_home_ranking?.position.toString();
  const awayBasketballPosition =
    listLiveDetails?.basketball_away_ranking?.position.toString();

  const matchStarted = () => {
    switch (getMatchStatusData) {
      case '比赛开始':
        setCountDownTime(false);
        setMiddleMatchBeforeStart(false);
        setMiddleMatchStarted(true);
        setDefaultStatus(false);
        if (matchState === 7) {
          setCountDownTime(false);
          setMiddleMatchBeforeStart(false);
          setMiddleMatchStarted(true);
          setPanaltyMatchStarted(true);
        }
        break;
      case '已结束':
        setCountDownTime(false);
        setMiddleMatchBeforeStart(false);
        setMiddleMatchStarted(true);
        setDefaultStatus(false);
        if ((homePenaltyScore && awayPenaltyScore) && (homePenaltyScore > 0 || awayPenaltyScore > 0)) {
          setPanaltyMatchStarted(true);
        }
        break;
      case '未开始':
        if (countDownStatus) {
          setCountDownTime(true);
          setMiddleMatchBeforeStart(false);
          setMiddleMatchStarted(false);
          setDefaultStatus(false);
        } else {
          setCountDownTime(false);
          setMiddleMatchBeforeStart(true);
          setMiddleMatchStarted(false);
          setDefaultStatus(false);
        }
        break;
      default:
        setCountDownTime(false);
        setMiddleMatchBeforeStart(false);
        setMiddleMatchStarted(false);
        setDefaultStatus(true);
        break;
    }
  };

  // useEffect(() => {
  //   setHomeHalfTimeScore(homeArrayScore[1] ? homeArrayScore[1] : '');
  //   setAwayHalfTimeScore(awayArrayScore[1] ? awayArrayScore[1] : '');
  // }, []);
  // const [sec, setSec] = useState(0);
  // const [min, setMin] = useState(0);
  // const [hour, setHour] = useState(0);
  // const [day, setDay] = useState(0);

  const liveVideo = () => {
    if (onOpenLive) {
      onOpenLive();
    }
  };

  const liveAnimationVideo = () => {
    // props.setAnimaionStreammSource(animationStream3D); //adding 2d later
    if (onOpenAnimation) {
      if (animationStream3D) {
        onOpenAnimation(animationStream3D);
      } else if (animationStream2D) {
        onOpenAnimation(animationStream2D);
      }
    }
  };

  // useEffect(() => {
  //   const subscription = store.subscribe(() => {
  //     setFollowedMatchId(store.getState().followedMatchId);
  //   });
  //   setFollowedMatchId(store.getState().followedMatchId);

  //   return () => {
  //     subscription.call();
  //   };
  // }, []);

  useEffect(() => {
    matchStarted();
  });

  useEffect(() => {
    const temp = competitionDate;
    if (temp) {
      setLeftTime(parseInt(temp));
    }
    setTempDateTime(formatDateTime(temp));
  }, [competitionDate]);

  // const handleFollow = async () => {
  //   if (!isLogin) {
  //     navigation.navigate('Login');
  //     return;
  //   }
  //   if (!isSub) {
  //     const success = await FollowMatchAction.instance.followMatch(matchID);
  //   } else {
  //     const success = await FollowMatchAction.instance.unfollowMatch(matchID);
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          matchSportType === 1
            ? MatchDetailBG
            : matchSportType === 2
              ? BasketballMatchDetailBG
              : OtherMatchDetailBG
        }
        resizeMode="stretch"
        style={{ flex: 1 }}>
        <View style={styles.topBannerCotainer}>
          <TouchableOpacity
            style={styles.backButtonTouch}
            onPress={() => onHandleBack()}>
            <Image
              resizeMode="contain"
              style={styles.backButtonIcon}
              source={BackWhite}></Image>
          </TouchableOpacity>

          {countDownTime || middleMatchStarted ? (
            <View style={styles.alignCenterTopBannerContainer}>
              <Text style={styles.middleTitleName}>{competitionNameShort}</Text>
              <Text style={styles.middleTitleName}>{` |  `}</Text>
              <Text style={styles.middleTitleName}>{tempDateTime}</Text>
            </View>
          ) : (
            <View style={styles.alignCenterTopBannerContainer}></View>
          )}

          {/* {(countDownTime || middleMatchBeforeStart) && (
            <TouchableOpacity
              style={styles.notificationButtonTouch}
              onPress={handleFollow}>
              <Image
                resizeMode="contain"
                style={styles.backButtonIcon}
                source={isSub ? NotificationFilled : Notification}></Image>
            </TouchableOpacity>
          )} */}
        </View>

        <View style={styles.matchDetailContainer}>
          <View style={styles.middleContainer}>
            <View style={styles.alignCenterContainer}>
              {homeIcon ? (
                <Image
                  resizeMode="contain"
                  style={styles.teamIconImage}
                  source={{ uri: homeIcon }}></Image>
              ) : (
                <DefaultTeamIcon
                  isHome={true}
                  iconSize={34}
                  textSize={16}
                  text={homeName ? homeName : ''}
                />
              )}

              <Text style={styles.smallTitleName}>{homeName}</Text>
              {(homeFootballPosition || homeBasketballPosition) &&
                (matchSportType === 1 ? (
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${homeFootballPosition}]`}</Text>
                ) : (
                  // FIFA match

                  //Basketball match
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${homeBasketballPosition}]`}</Text>
                ))}
            </View>
            {middleMatchBeforeStart && (
              <View style={styles.alignCenterMiddleContainer}>
                <Text style={styles.middleTitleName}>
                  {competitionNameShort}
                </Text>

                <Text style={styles.middleTitleName}>{tempDateTime}</Text>
              </View>
            )}

            {defaultStatus && (
              <View style={styles.alignCenterMiddleContainer}>
                <Text style={styles.middleTitleName}>
                  {competitionNameShort}
                </Text>

                <Text style={styles.middleTitleName}>{getMatchStatusData}</Text>
              </View>
            )}

            {middleMatchStarted &&
              (matchSportType === 1 ? (
                // FIFA match
                <View style={styles.alignCenterMiddleMatchStartContainer}>
                  <Text
                    style={
                      styles.middleTitleName
                    }>{`${matchOnTimeGoing}`}</Text>

                  <Text
                    style={
                      styles.middleTitleScoreName
                    }>{`${homeScore} - ${awayScore}`}</Text>
                  <Text style={styles.middleTitleSubeName}>
                    {`半场 ${homeHalfTimeScore}-${awayHalfTimeScore}`}
                    {panaltyMatchStarted
                      ? ` | 点球 ${homePenaltyScore}-${awayPenaltyScore}`
                      : ''}
                  </Text>
                </View>
              ) : matchSportType === 2 ? (
                // Basketball match
                <View style={styles.alignCenterMiddleMatchStartContainer}>
                  <Text
                    style={
                      styles.middleTitleName
                    }>{`${matchOnTimeGoing}`}</Text>

                  <Text
                    style={
                      styles.middleTitleScoreName
                    }>{`${homeScore} - ${awayScore}`}</Text>

                  <Text style={styles.middleTitleNameStatus}>
                    {matchOnTimeGoingStatus
                      ? matchOnTimeGoingStatus
                      : basketballCount === 4
                        ? basketballFourQuoteHalfTime
                        : basketballTwoQuoteHalfTime}
                  </Text>
                </View>
              ) : (
                ''
              ))}

            {countDownTime && (
              <View style={styles.alignCenterMiddleCountdownContainer}>
                <Text style={styles.middleCountTitleName}>距离开赛时间</Text>
                <Text
                  style={
                    styles.middleTitleName
                  }>{`${hours} : ${minutes} : ${seconds} `}</Text>
              </View>
            )}
            <View style={styles.alignCenterContainer}>
              {awayIcon ? (
                <Image
                  resizeMode="contain"
                  style={styles.teamIconImage}
                  source={{ uri: awayIcon }}></Image>
              ) : (
                <DefaultTeamIcon
                  isHome={false}
                  iconSize={34}
                  textSize={16}
                  text={awayName ? awayName : ''}
                />
              )}

              <Text style={styles.smallTitleName}>{awayName}</Text>
              {(awayFootballPosition || awayBasketballPosition) &&
                (matchSportType === 1 ? (
                  // FIFA match
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${awayFootballPosition}]`}</Text>
                ) : (
                  //Basketball match
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${awayBasketballPosition}]`}</Text>
                ))}
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={isSub ? styles.bookingButtonActive : styles.bookingButton}
          onPress={handleFollow}>
          <View style={styles.bookSmallContainer}>
            <Image
              resizeMode="stretch"
              style={styles.subIcon}
              source={isSub ? WhiteTick : Notification}></Image>
            <Text style={styles.bookingTitleName}>预约</Text>
          </View>
          <View>
            <Text
              style={
                styles.smallTitleName
              }>{`距离开赛时间: ${days}天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`}</Text>
          </View>
        </TouchableOpacity> */}
        <View style={styles.bottomButtonContainer}>
          {dataLive !== undefined && dataLive.length > 0 && (
            <TouchableOpacity onPress={liveVideo} style={styles.liveButton}>
              <Image
                resizeMode="contain"
                style={styles.subIcon}
                source={VideoLive}></Image>
              <Text style={styles.bookingTitleName}>视频直播</Text>
            </TouchableOpacity>
          )}
          {(animationStream2D || animationStream3D) && (
            <TouchableOpacity
              onPress={liveAnimationVideo}
              style={styles.liveButton}>
              <Image
                resizeMode="contain"
                style={styles.subIcon}
                source={AnimationLive}></Image>
              <Text style={styles.bookingTitleName}>动画直播</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default BeforeLive;
