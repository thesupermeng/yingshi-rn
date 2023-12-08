import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {RootState} from '@redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import FavoritePlaylist from '../../../components/playlist/favoritePlaylist';
import {VodTopicType} from '../../../types/ajaxTypes';
import {RootStackScreenProps} from '../../../types/navigationTypes';
import EmptyList from '../../../components/common/emptyList';

type FlatListType = {
  item: VodTopicType;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: RootState) => vodPlaylistReducer,
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
          renderItem={({item}: FlatListType) => (
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
