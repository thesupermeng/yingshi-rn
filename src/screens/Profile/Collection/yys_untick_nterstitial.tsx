import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../../components/container/yys_executor_expand';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/yys_frame';
import {yys_MintegralLibavdevice} from '@redux/yys_sport_shrink';

import TitleWithBackButtonHeader from '../../../components/header/yys_anner_header';
import CollectionHeader from '../../../components/header/yys_rncore_searchbar_header';
import FavoritePlaylist from '../../../components/playlist/yys_details';
import {yys_BrightnessCopy} from '@type/yys_libzeus';
import {RootStackScreenProps} from '@type/yys_settings';
import EmptyList from '../../../components/common/yys_goal_utils';

type yys_Mbsplash = {
  item: yys_BrightnessCopy;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: yys_MintegralLibavdevice) => vodPlaylistReducer,
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
          renderItem={({item}: yys_Mbsplash) => (
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
