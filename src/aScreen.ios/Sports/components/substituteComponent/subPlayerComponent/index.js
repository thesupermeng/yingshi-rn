import {View, Image, Text, ImageBackground} from 'react-native';
import styles from './style';
import {
  HomeIcon,
  SubIn,
  SubOut,
  Goal,
  OwnGoal,
  Assist,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
  InjuryIcon,
  HomePlayer,
  AwayPlayer,
} from '../../../assets';
import vars from '../../../utility/vars';

const SubPlayerComponent = ({isInjury = false, data, isHome = true}) => {
  let subInTime = 0;
  let subOutTime = 0;
  let goalCount = 0;
  let penaltyGoalCount = 0;
  let ownGoalCount = 0;
  let assistCount = 0;

  let checkSubIn = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 && x.in_player != undefined && x.in_player?.id == data.id,
      );
      if (item != undefined && item != -1) {
        subInTime = data.incidents[item].time;
        return true;
      } else {
        subInTime = 0;
        return false;
      }
    }
  };

  let checkSubOut = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 &&
          x.out_player != undefined &&
          x.out_player?.id == data.id,
      );
      if (item != undefined && item != -1) {
        subOutTime = data.incidents[item].time;
        return true;
      } else {
        subOutTime = 0;
        return false;
      }
    }
  };

  let checkYellowCard = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.findIndex(
        x => x.type == 3 && x.player != undefined && x.player?.id == data.id,
      );
      if (item != undefined && item != -1) {
        return true;
      } else {
        return false;
      }
    }
  };

  let checkRedCard = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.findIndex(
        x => x.type == 4 && x.player != undefined && x.player?.id == data.id,
      );
      if (item != undefined && item != -1) {
        return true;
      } else {
        return false;
      }
    }
  };

  let checkYellowToRedCard = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.findIndex(
        x => x.type == 15 && x.player != undefined && x.player?.id == data.id,
      );
      if (item != undefined && item != -1) {
        return true;
      } else {
        return false;
      }
    }
  };

  let checkGoal = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.filter(
        x => x.type == 1 && x.player != undefined && x.player?.id == data.id,
      );
      if (item.length > 0) {
        goalCount = item.length;
        return true;
      } else {
        goalCount = 0;
        return false;
      }
    }
  };

  let checkAssist = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.filter(
        x => x.type == 1 && x.assist1 != undefined && x.assist1?.id == data.id,
      );
      if (item.length > 0) {
        assistCount = item.length;
        return true;
      } else {
        assistCount = 0;
        return false;
      }
    }
  };

  let checkPenaltyGoal = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.filter(
        x => x.type == 8 && x.player != undefined && x.player?.id == data.id,
      );
      if (item.length > 0) {
        penaltyGoalCount = item.length;
        return true;
      } else {
        penaltyGoalCount = 0;
        return false;
      }
    }
  };

  let checkOwnGoal = () => {
    if (data.incidents != undefined && data.incidents.length > 0) {
      let item = data.incidents.filter(
        x => x.type == 17 && x.player != undefined && x.player?.id == data.id,
      );
      if (item.length > 0) {
        ownGoalCount = item.length;
        return true;
      } else {
        ownGoalCount = 0;
        return false;
      }
    }
  };

  return (
    <View style={styles.subPlayer}>
      <View style={styles.subPlayerView}>
        <View style={styles.subPlayerImageView}>
          {data.logo != undefined && data.logo?.length > 0 ? (
            <Image source={{uri: data.logo}} style={styles.subPlayerImage} />
          ) : isInjury &&
            data.player?.icon != undefined &&
            data.player?.icon.length > 0 ? (
            <Image
              source={{uri: data.player?.icon}}
              style={styles.subPlayerImage}
            />
          ) : isInjury && data?.player ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : !isInjury ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : (
            <View></View>
          )}
          {checkYellowCard() && (
            <Image
              source={YellowCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkYellowToRedCard() && (
            <Image
              source={YellowToRedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkRedCard() && (
            <Image
              source={RedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {isInjury && data?.player && (
            <Image source={InjuryIcon} style={styles.injuryIconStyle} />
          )}
        </View>
        <View style={styles.subPlayerDetailView}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.playerText}>
            {isInjury ? data.player?.name_zh : data.name}
          </Text>
          <View style={styles.subPlayerLineView}>
            {!isInjury ? (
              <Text style={styles.playerNumText}>
                {data?.shirt_number != undefined
                  ? data?.shirt_number +
                    ' - ' +
                    vars.footballPosition[data?.position]
                  : vars.footballPosition[data?.position]}
              </Text>
            ) : (
              data?.player && (
                <Text style={styles.playerNumText}>
                  {vars.footballPosition[data?.player?.position] +
                    ' ' +
                    data?.reason}
                </Text>
              )
            )}
            {!isInjury && (
              <View style={styles.subInOutView}>
                {checkSubIn() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubIn} />
                    <Text style={styles.subInOutText}>{subInTime + "'"}</Text>
                  </View>
                )}
                {checkSubOut() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubOut} />
                    <Text style={styles.subInOutText}>{subOutTime + "'"}</Text>
                  </View>
                )}
                {checkGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Goal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + goalCount}
                    </Text>
                  </View>
                )}
                {checkAssist() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Assist}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + assistCount}
                    </Text>
                  </View>
                )}
                {checkOwnGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={OwnGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + ownGoalCount}
                    </Text>
                  </View>
                )}
                {checkPenaltyGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={PenaltyGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + penaltyGoalCount}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
      {/* {!isInjury && (
        <View style={styles.subPlayerStatisticView}>
        </View>
      )} */}
    </View>
  );
};

export default SubPlayerComponent;
