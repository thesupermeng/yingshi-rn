import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../../components/container/ypy_fast';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/kg_index';
import {PSmall} from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../../components/header/cio_news_types_header';
import CollectionHeader from '../../../components/header/j_native_hover_header';
import FavoritePlaylist from '../../../components/playlist/l_weibo';
import {RBEmojiEwarded} from '@type/wpk_long';
import {RootStackScreenProps} from '@type/vrm_thailand';
import EmptyList from '../../../components/common/jip_next_bell';

type MEYMode = {
  item: RBEmojiEwarded;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: PSmall) => vodPlaylistReducer,
  );
  const favorites = vodPlaylistReducer.playlistFavorites;
  return (
    <>
      {/* <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='播单收藏' navigator={navigation} /> */}
      {favorites && favorites.length > 0 && (
        <FlatList
          data={favorites}
          contentContainerStyle={{paddingBottom: 30}}
          ListFooterComponent={
            <Text
              style={{
                ...textVariants.subBody,
                color: colors.muted,
                ...styles.noMore,
              }}>
              没有更多了
            </Text>
          }
          renderItem={({item}: MEYMode) => (
            <FavoritePlaylist playlist={item} navigator={navigation} />
          )}
        />
      )}
      {favorites && favorites.length === 0 && (
        <EmptyList description="暂无播单收藏" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noMore: {
    textAlign: 'center',
    marginTop: 30,
  },
});
