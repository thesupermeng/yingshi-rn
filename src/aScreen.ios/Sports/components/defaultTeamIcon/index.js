import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {AwayIcon, HomeIcon} from '../../assets';

const DefaultTeamIcon = ({isHome, iconSize = 16, textSize = 10, text = ''}) => {
  const subString = text.length > 1 ? text.substring(0, 1) : text;

  return (
    <ImageBackground
      style={{
        width: iconSize,
        height: iconSize,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={isHome ? HomeIcon : AwayIcon}
      resizeMode={'stretch'}>
      <Text
        style={{
          fontSize: textSize,
          fontWeight: '400',
          color: 'white',
          fontFamily: '045-SSYiFeiTi',
        }}>
        {subString}
      </Text>
    </ImageBackground>
  );
};

export default DefaultTeamIcon;
