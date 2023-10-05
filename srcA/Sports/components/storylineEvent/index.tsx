import React, { useState } from 'react';
import { View, ScrollView, Switch, Text } from 'react-native';
import StorylineTap from './storylineTab';
import StorylineTapList from './storylineTabList';
import { WhistleOrange, OrangeClock } from '../../assets';

//style
import styles from './style';
import { MatchUpdatesType } from '../../types/matchUpdatesType';
import FastImage from 'react-native-fast-image';


interface Props {
  liveRoomUpdate?: MatchUpdatesType
}

const StorylineEvent = ({ liveRoomUpdate }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchTitle}>只看进球</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#00CC6A' }}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          style={styles.switchStyle}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <View style={styles.lineContainer}>
          <FastImage
            resizeMode="contain"
            style={styles.smallIcon}
            source={OrangeClock} />
          <View style={styles.middleline}>
            <View style={styles.smallOrangeCircle}></View>

            <View style={styles.smallOrangeCircle}></View>
          </View>
          <FastImage
            resizeMode="contain"
            style={styles.smallIcon}
            source={WhistleOrange} />
        </View>
        <View style={styles.scrollViewContainer}>
          <StorylineTapList liveRoomUpdate={liveRoomUpdate} isEnabled={isEnabled}></StorylineTapList>
        </View>
      </View>
    </View>
  );
};

export default StorylineEvent;
