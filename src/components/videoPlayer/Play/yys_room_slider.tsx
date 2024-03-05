import {memo, useState} from 'react';
import VodListVertical from '../../vod/yys_downloader';
import ShowMoreVodButton from '../../button/yys_native_button';
import {View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import { yys_ActivityTumbnail } from '@type/yys_libzeus';

interface yys_ConfigureUimanager {
  vod: any;
  suggestions: yys_ActivityTumbnail[];
  adultMode: boolean;
}

const RelatedVodSuggestion = ({vod, suggestions, adultMode}: yys_ConfigureUimanager) => {
  const {spacing} = useTheme();
  const navigation = useNavigation();

  if (!(suggestions !== undefined && suggestions?.length > 0)) return <></>;
  else if (adultMode) {
    return (
      <View style={{gap: spacing.l, marginBottom: 60}}>
        <ShowMoreVodButton
          isPlayScreen={true}
          
          text={'相关推荐'}
          onPress={() => {
            
            setTimeout(() => {
              navigation.navigate('午夜场剧情', {
                
                class: vod?.vod_class,
              });
            }, 150);
          }}
        />
        <VodListVertical
          vods={suggestions}
          minNumPerRow={2}
          numOfRows={3}
          outerRowPadding={2 * (20 - spacing.sideOffset)}
          heightToWidthRatio={1 / 1.814}
          playerMode="adult"
        />
      </View>
    );
  } else {
    return (
      <View style={{gap: spacing.l, marginBottom: 60}}>
        <ShowMoreVodButton
          isPlayScreen={true}
          text={`相关${vod?.type_name ?? '相关推荐'}`}
          onPress={() => {
            
            setTimeout(() => {
              navigation.navigate('片库', {
                type_id: vod.type_id,
              });
            }, 150);
          }}
        />
        <VodListVertical
          vods={suggestions}
          outerRowPadding={2 * (20 - spacing.sideOffset)}
        />
      </View>
    );
  }
};

export default memo(RelatedVodSuggestion);