import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { ColorSpace } from 'react-native-reanimated';
import { GoalLogo } from '../../../../../static/sports';

import StorylineTap from '../storylineTab';
import StorylineTabListItem from '../storylineTabListItem';

import styles from './tt_with_success';
import { ttReminderScreen } from '../../../types/tt_handler_prediction';

interface ttSmall {
  liveRoomUpdate?: ttReminderScreen
  isEnabled?: boolean
}

const StorylineTapList = ({ liveRoomUpdate, isEnabled=true }: ttSmall) => {
  const arrayValue = liveRoomUpdate?.football_match_live?.incidents ?? [];

  const dataTesting = { imageName: GoalLogo, textName: '123' };

  
  const arrayExcluded = [10, 2, 0];
  const arrayOnlyWatchGoal = [1, 8, 11, 12, 26, 27, 29, 30, 17];

  
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
