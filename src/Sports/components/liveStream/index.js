import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {liveRoomName} from '../../utility/utils';
import styles from './style';
import LiveThumbnail from '../liveThumbnail';

const LiveStream = props => {
  const {item} = props;
  const match = item?.match;
  const home = match?.home;
  const away = match?.away;
  const showTitle = home && away;

  var roomBg;

  switch (item?.room_image_type) {
    case 1:
      roomBg = item?.room_image_url;
      break;
    case 2:
      roomBg = item?.streamer?.cover_image;
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
        const routeName = await liveRoomName(item?.match_id);
        navigation.navigate(routeName, {
          matchId: item?.match_id,
          streamerId: item?.streamer_id,
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
            viewer={item?.view_num}
            sportType={match?.sports_type}
            matchName={match?.competition?.name_short}
            isMatchName={true}
          />
        </View>
        {showTitle && (
          <View style={styles.liveStreamBottomDiv}>
            <Text
              style={styles.liveStreamBottomDesc}
              numberOfLines={1}
              ellipsizeMode={'tail'}>{`${home?.name} VS ${away?.name}`}</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default LiveStream;
