import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

//components
import SteamingCover from '../../../components/steamingCover';
import {GreyArrowUp} from '../../../assets';

//style
import styles from './style';

const Drawer = props => {
  // useEffect(() => {

  // }, [props.drawerVisible]);
  const onPressClose = () => {
    console.log(props.drawerVisible);
    props.setDrawerVisible(!props.drawerVisible);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>本场比赛直播间</Text>
        <TouchableOpacity
          style={styles.rightSmallContainer}
          onPress={onPressClose}>
          <Text style={styles.smallGreyText}>收起</Text>
          <Image style={styles.smallImageLogo} source={GreyArrowUp}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SteamingCover></SteamingCover>
        <SteamingCover></SteamingCover>
        <SteamingCover></SteamingCover>
        <SteamingCover></SteamingCover>
        <SteamingCover></SteamingCover>
      </ScrollView>
    </View>
  );
};

export default Drawer;
