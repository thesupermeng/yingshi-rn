import {memo, useState} from 'react';
import VodListVertical from '../../vod/ww_defaultplayerimg';
import ShowMoreVodButton from '../../button/ww_delegate_matchactive_button';
import {View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import { wwProfileinactiveBrightness } from '@type/ww_dycreator_result';

interface wwIndexDice {
  vod: any;
  suggestions: wwProfileinactiveBrightness[];
  adultMode: boolean;
}

const RelatedVodSuggestion = ({vod, suggestions, adultMode}: wwIndexDice) => {
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
                vod_source_name: "",
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
