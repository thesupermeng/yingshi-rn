import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../../components/container/yys_matches';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import FavoritePlaylist from '../../../components/playlist/yys_with_tempnodatagif';
import TitleWithBackButtonHeader from '../../../components/header/yys_away_predictionloss_header';
import {
  yysNext,
  yysIconpointscoreCountdown,
} from '@redux';
import FavoriteVodCard from '../../../components/vod/yys_assets';
import MainCollectionHeader from '../../../components/header/yys_station_header';
import { playVod } from '@redux';
import { yysPenaltyshoot } from '@type';
import { RootStackScreenProps } from '@type';
import EmptyList from '../../../components/common/yys_benefit';

import { yysArrowup } from '@type';

import PlaylistCollection from './yys_iconmore';
import VodCollection from './yys_rules_whiteanimationlive';

type yysInternetAirbnbstarselected = {
  item: yysPenaltyshoot;
};

interface yysIconarrowrightorangeStation {
  initialTab?: string;
}

export default ({ navigation }: RootStackScreenProps<'我的收藏'>) => {
  const { colors, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();
  const favs: yysNext = useAppSelector(
    ({ vodFavouritesReducer }: yysIconclosewhiteBaiduads) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({ vodPlaylistReducer }: yysIconclosewhiteBaiduads) => vodPlaylistReducer,
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
