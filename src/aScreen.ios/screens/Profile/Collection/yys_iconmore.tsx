import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../../components/container/yys_matches';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';

import TitleWithBackButtonHeader from '../../../components/header/yys_away_predictionloss_header';
import CollectionHeader from '../../../components/header/yys_score_tempnodata_header';
import FavoritePlaylist from '../../../components/playlist/yys_with_tempnodatagif';
import { yysArrowup } from '@type';
import { RootStackScreenProps } from '@type';
import EmptyList from '../../../components/common/yys_benefit';

type yysInternetAirbnbstarselected = {
  item: yysArrowup;
};

export default () => {
  const navigation = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodPlaylistReducer = useAppSelector(
    ({ vodPlaylistReducer }: yysIconclosewhiteBaiduads) => vodPlaylistReducer,
  );
  const favorites = vodPlaylistReducer.playlistFavorites;
  return (
    <>
      {/* <TitleWithBackButtonHeader title='我的收藏' />
            <CollectionHeader route='播单收藏' navigator={navigation} /> */}
      {favorites && favorites.length > 0 && (
        <FlatList
          data={favorites}
          contentContainerStyle={{ paddingBottom: 30 }}
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
          renderItem={({ item }: yysInternetAirbnbstarselected) => (
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
