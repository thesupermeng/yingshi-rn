import React, {useState} from 'react';
import {View, Image, ScrollView, Switch, Text} from 'react-native';
import StorylineTap from './storylineTab';
import StorylineTapList from './storylineTabList';
import {WhistleOrange, OrangeClock} from '../../assets';

//style
import styles from './style';
// {arrayValue.map(index => {
//   return (
//     );
// })}

const StorylineEvent = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchTitle}>只看进球</Text>
        <Switch
          trackColor={{false: '#767577', true: '#FF6835'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          style={styles.switchStyle}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.lineContainer}>
        <Image
          resizeMode="contain"
          style={styles.smallIcon}
          source={OrangeClock}></Image>
        <View style={styles.middleline}>
          <View style={styles.smallOrangeCircle}></View>

          <View style={styles.smallOrangeCircle}></View>
        </View>
        <Image
          resizeMode="contain"
          style={styles.smallIcon}
          source={WhistleOrange}></Image>
      </View>
      <View style={styles.scrollViewContainer}>
        <StorylineTapList isEnabled={isEnabled}></StorylineTapList>
      </View>
    </View>
  );
};

export default StorylineEvent;
