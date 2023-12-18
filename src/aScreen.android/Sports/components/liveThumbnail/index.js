import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {IconPlay, IconViewerGif} from '../../assets';
import {formatViewerCount} from '../../utility/utils';
import DefaultRoomImage from '../defaultRoomImage';
import DefaultThumbnail from '../defaultThumbnail';
import styles from './style';

const LiveThumbnail = props => {
  const {
    roomBg,
    homeIcon,
    awayIcon,
    homeName,
    awayName,
    viewer,
    sportType,
    matchName,
    isMatchName = false,
  } = props;

  return (
    <View style={styles.container}>
      <DefaultThumbnail height={'100%'} width={'100%'} iconSize={42}>
        {roomBg ? (
          <Image
            style={styles.liveStreamerImage}
            source={{uri: roomBg}}></Image>
        ) : (
          <DefaultRoomImage
            width={'100%'}
            height={'100%'}
            teamAIcon={homeIcon}
            teamBIcon={awayIcon}
            teamA={homeName}
            teamB={awayName}
            sportType={sportType}
          />
        )}
      </DefaultThumbnail>
      {matchName && (
        <View style={styles.liveStreamerMatchDiv(isMatchName)}>
          <Text style={styles.liveStreamerMatchText}>{matchName}</Text>
        </View>
      )}
      <View style={styles.liveStreamerViewerDiv}>
        <Image
          style={styles.liveStreamerViewerIcon}
          source={IconViewerGif}></Image>
        <Text style={styles.liveStreamerViewerText}>
          {formatViewerCount(viewer)}
        </Text>
      </View>
      {/* <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <View style={styles.streamerInfoDiv}>
          {item?.streamer?.avatar && (
            <Image
              style={styles.streamerInfoAvatar}
              source={{uri: item?.streamer?.avatar}}></Image>
          )}
          <Text style={styles.streamerInfoText}>
            {item?.streamer?.nickname}
          </Text>
        </View>
      </LinearGradient> */}
      <View style={styles.centerPlayDiv}>
        <Image style={styles.centerPlayIcon} source={IconPlay}></Image>
      </View>
    </View>
  );
};

export default LiveThumbnail;
