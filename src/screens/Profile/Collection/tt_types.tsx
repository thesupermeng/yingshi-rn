import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../../components/container/tt_backward';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../../components/header/tt_typing_tail_header';
import {
  ttTrashGradlew,
  ttStreaming,
} from '@redux/reducers/tt_configure_injury';
import FavoriteVodCard from '../../../components/vod/tt_internet';
import CollectionHeader from '../../../components/header/tt_suggestion_header';
import {playVod} from '@redux/actions/tt_activity';
import {ttAppsOther} from '@type/tt_line_borderless';
import {RootStackScreenProps} from '@type/tt_temperature';
import EmptyList from '../../../components/common/tt_logo_desc';
import { disableAdultMode, enableAdultMode } from '@redux/actions/tt_copy_heji';

type ttBing = {
  item: ttAppsOther & {playMode?: 'adult'|'normal'};
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: ttTrashGradlew = useAppSelector(
    ({vodFavouritesReducer}: ttOrange) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  return (
    <>
      {/* <TitleWithBackButtonHeader title="我的收藏" />
      <CollectionHeader route="视频收藏" navigator={navigation} /> */}
      <View>
        {favorites && favorites.length > 0 && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={favorites}
            contentContainerStyle={{paddingBottom: 120}}
            ListFooterComponent={
              <Text
                style={{
                  ...textVariants.body,
                  color: colors.muted,
                  ...styles.noMore,
                }}>
                没有更多了
              </Text>
            }
            renderItem={({item}: ttBing) => (
              <FavoriteVodCard
                vod={item}
                initialFavoriteState={true}
                onPress={() => {
                  dispatch(playVod(item));
                  navigation.navigate('播放', {
                    vod_id: item.vod_id,
                    player_mode: item.playMode
                  });
                  if (item.playMode === 'adult') {dispatch(enableAdultMode())}
                  else {dispatch(disableAdultMode())}
                }}
                imgOrientation='horizontal'
              />
            )}
          />
        )}
      </View>
      {favorites && favorites.length === 0 && (
        <EmptyList description="暂无视频收藏" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noMore: {
    textAlign: 'center',
    marginTop: 30,
  },
});
