import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {DefaultBasketballBg, DefaultFootballBg} from '../../assets';
import DefaultTeamIcon from '../DefaultTeamIcon';

const DefaultRoomImage = ({
  width,
  height,
  teamAIcon = '',
  teamBIcon = '',
  teamA = '',
  teamB = '',
  needShowMatch = true,
  paddingHorizontal = 24,
  sportType,
}) => {
  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
      }}
      source={sportType == 2 ? DefaultBasketballBg : DefaultFootballBg}
      resizeMode={'stretch'}>
      <View
        style={{
          height: '100%',
          paddingHorizontal: paddingHorizontal,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {needShowMatch &&
          (teamAIcon ? (
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={{uri: teamAIcon}}
            />
          ) : (
            <DefaultTeamIcon
              isHome={true}
              iconSize={30}
              textSize={19}
              text={teamA}
            />
          ))}
        {needShowMatch &&
          (teamBIcon ? (
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={{uri: teamBIcon}}
            />
          ) : (
            <DefaultTeamIcon
              isHome={false}
              iconSize={30}
              textSize={19}
              text={teamB}
            />
          ))}
      </View>
    </ImageBackground>
  );
};

export default DefaultRoomImage;
