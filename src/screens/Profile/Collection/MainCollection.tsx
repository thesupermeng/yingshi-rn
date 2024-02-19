import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { RootState } from '@redux';
import FavoritePlaylist from '../../../components/playlist/favoritePlaylist';
import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '@redux';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import MainCollectionHeader from '../../../components/header/mainCollectionHeader';
import { playVod } from '@redux';
import { VodType } from '@type';
import { RootStackScreenProps } from '@type';
import EmptyList from '../../../components/common/emptyList';

import { VodTopicType } from '@type';

import PlaylistCollection from './PlaylistCollection';
import VodCollection from './VodCollection';

type FlatListType = {
  item: VodType;
};

interface Props {
  initialTab?: string;
}

export default ({ navigation }: RootStackScreenProps<'我的收藏'>) => {
  const { colors, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();
  const favs: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({ vodPlaylistReducer }: RootState) => vodPlaylistReducer,
  );
  const favoritesList = vodPlaylistReducer.playlistFavorites;

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="我的收藏" />
      <MainCollectionHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {selectedTab === '视频收藏' && (
        <>
          <VodCollection />
        </>
      )}

      {selectedTab === '播单收藏' && <PlaylistCollection />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  noMore: {
    textAlign: 'center',
    marginTop: 30,
  },
});
