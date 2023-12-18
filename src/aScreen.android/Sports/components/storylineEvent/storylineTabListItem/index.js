import React from 'react';
import {View, Text, Image} from 'react-native';
import {ColorSpace} from 'react-native-reanimated';
import {GoalLogo, PenaltyMatchIcon} from '../../../assets';

//components
import StorylineTap from '../storylineTab';
import {getMatchStorylineStatus} from '../../../utility/utils';

//style
import styles from './style';

const StorylineTabListItem = props => {
  const arrayValue = props?.data;
  const dataTesting = {imageName: GoalLogo, textName: '123'};
  // const dataTime = arrayValue?.time > 90 ? 90 : arrayValue?.time;
  const dataTime = arrayValue?.time;
  const dataType = arrayValue?.type;
  const matchStorylineStatus = getMatchStorylineStatus(dataType);
  // console.log('apalumau', matchStorylineStatus);
  const isHome = arrayValue?.position == 1 ? true : false;
  const systemExcluded = [11, 12, 19, 26, 27];
  const panaltyBattleType = [29, 30];
  // console.log('123123', arrayValue);
  return (
    <View style={styles.mainContainer}>
      {!isHome && (
        <View
          style={{
            flex: 1,
          }}></View>
      )}
      {!isHome &&
        (systemExcluded.includes(dataType) ? (
          <View style={styles.orangeNumberHT}>
            <Text style={styles.HTtimeTitle}>{matchStorylineStatus}</Text>
          </View>
        ) : (
          <View style={styles.orangeNumber}>
            {panaltyBattleType.includes(dataType) ? (
              <Image
                source={PenaltyMatchIcon}
                resizeMode={'stretch'}
                style={styles.timelineIcon}></Image>
            ) : (
              <Text style={styles.timeTitle}>{dataTime}</Text>
            )}
          </View>
        ))}

      {systemExcluded.includes(dataType) ? (
        <View style={styles.mainTextContainContainer}></View>
      ) : (
        <View style={styles.mainTextContainContainer}>
          {!isHome && <View style={styles.leftArrow}></View>}

          <View style={styles.containContainer}>
            <StorylineTap isHome={isHome} listData={arrayValue}></StorylineTap>
          </View>
          {isHome && <View style={styles.rightArrow}></View>}
        </View>
      )}

      {isHome && (
        <View style={styles.orangeNumber}>
          {panaltyBattleType.includes(dataType) ? (
            <Image
              source={PenaltyMatchIcon}
              resizeMode={'stretch'}
              style={styles.timelineIcon}></Image>
          ) : (
            <Text style={styles.timeTitle}>{dataTime}</Text>
          )}
        </View>
      )}
      {isHome && <View style={{flex: 1}}></View>}
    </View>
  );
};

export default StorylineTabListItem;
