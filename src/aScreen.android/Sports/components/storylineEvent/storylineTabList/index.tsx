import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { ColorSpace } from 'react-native-reanimated';
import { GoalLogo } from '../../../assets';

//components
import StorylineTap from '../storylineTab';
import StorylineTabListItem from '../storylineTabListItem';

//style
import styles from './style';
import { MatchUpdatesType } from '../../../types/matchUpdatesType';

interface Props {
  liveRoomUpdate?: MatchUpdatesType
  isEnabled?: boolean
}

const StorylineTapList = ({ liveRoomUpdate, isEnabled=true }: Props) => {
  const arrayValue = liveRoomUpdate?.football_match_live?.incidents ?? [];

  const dataTesting = { imageName: GoalLogo, textName: '123' };

  // const isHome = true;
  const arrayExcluded = [10, 2, 0];
  const arrayOnlyWatchGoal = [1, 8, 11, 12, 26, 27, 29, 30, 17];

  // console.log('DATAAAA', arrayValue);
  return (
    // <ScrollView>
    <View style={{ flex: 1, marginBottom: 50 }}>
      {arrayValue.map((value, index) => {
        if (isEnabled) {
          return (
            arrayOnlyWatchGoal.includes(value?.type) && (
              <View style={styles.mainContainer} key={`incident-${index}`}>
                <StorylineTabListItem data={value}></StorylineTabListItem>
              </View>
            )
          );
        } else {
          return (
            !arrayExcluded.includes(value?.type) && (
              <View style={styles.mainContainer} key={`incident-${index}`}>
                <StorylineTabListItem data={value}></StorylineTabListItem>
              </View>
            )
          );
        }
      })}
    </View>
    // </ScrollView>
  );
};

export default StorylineTapList;
