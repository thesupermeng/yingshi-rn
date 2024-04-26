import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../../components/container/wawa_nterstitial_iconpipexpand';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/wawa_root';
import {wawaIconsubssuccess} from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../../components/header/wawa_matchinactive_header';
import CollectionHeader from '../../../components/header/wawa_apps_sina_header';
import FavoritePlaylist from '../../../components/playlist/wawa_vipsport_turn';
import {wawaWithCrown} from '@type/wawa_gradlew';
import {RootStackScreenProps} from '@type/wawa_iconnewchat';
import EmptyList from '../../../components/common/wawa_othermatchdetailbg_videocommon';

type wawaBellreminderDisconnected = {
  item: wawaWithCrown;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: wawaIconsubssuccess) => vodPlaylistReducer,
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
          renderItem={({item}: wawaBellreminderDisconnected) => (
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
