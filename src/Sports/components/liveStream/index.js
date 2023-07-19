import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { liveRoomName } from '../../utility/utils';
import styles from './style';
import LiveThumbnail from '../liveThumbnail';
import { BackWhite, InOutTargetGreen } from '../../assets';
import FastImage from 'react-native-fast-image';

const LiveStream = props => {
  const { match } = props;
  const home = match?.home;
  const away = match?.away;
  const showTitle = home && away;

  var roomBg;
  console.log(match?.room_image_type)
  switch (match?.room_image_type) {
    case 1:
      roomBg = match?.room_image_url;
      break;
    case 2:
      roomBg = match?.streamer?.cover_image;
      break;
    default:
      roomBg = '';
      break;
  }

  const navigation = useNavigation();

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={styles.container}
      onPress={async () => {
        const routeName = await liveRoomName(match?.match_id);
        navigation.navigate(routeName, {
          matchId: match?.match_id,
          streamerId: match?.streamer_id,
        });
      }}>
      <View style={styles.containerInside}>
        <View style={styles.liveStreamTopDiv}>
          <LiveThumbnail
            roomBg={roomBg}
            homeIcon={match?.home?.icon}
            awayIcon={match?.away?.icon}
            homeName={match?.home?.name}
            awayName={match?.away?.name}
            viewer={match?.view_num}
            sportType={match?.sports_type}
            matchName={match?.competition?.name_short}
            isMatchName={true}
          />
        </View>
        {showTitle && (
          <View style={styles.backButtonTouch}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <FastImage
                resizeMode="contain"
                style={styles.backButtonIcon}
                source={BackWhite} />
            </TouchableOpacity>
            <Text
              style={styles.liveStreamBottomDesc}
              numberOfLines={1}
              ellipsizeMode={'tail'}>{`${home?.name} VS ${away?.name}`}
            </Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default LiveStream;
