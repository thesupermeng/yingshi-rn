import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../../components/container/mayi_save';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../../components/header/mayi_predictiondefault_header';
import CollectionHeader from '../../../components/header/mayi_bgvipxvod_shirt_header';
import FavoritePlaylist from '../../../components/playlist/mayi_libreactperfloggerjni_modal';
import {mayi_Runtime} from '@type/mayi_green';
import {RootStackScreenProps} from '@type/mayi_video_binddatas';
import EmptyList from '../../../components/common/mayi_unread';

type mayi_EventLibnms = {
  item: mayi_Runtime;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: mayi_Libapminsightb) => vodPlaylistReducer,
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
          renderItem={({item}: mayi_EventLibnms) => (
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
