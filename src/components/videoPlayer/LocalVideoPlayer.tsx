import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import ScreenContainer from '../container/screenContainer';
import TitleWithBackButtonHeader from '../header/titleWithBackButtonHeader';

type Props = {
  src: string;
  title: string;
};

export const LocalVideoPlayer = ({src, title}: Props) => {
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title={title} />
      <View style={{flex: 1}}>
        <Video source={{uri: src}} />
      </View>
    </ScreenContainer>
  );
};
