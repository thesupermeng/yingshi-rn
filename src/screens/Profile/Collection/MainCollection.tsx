import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {RootState} from '@redux/store';
import FavoritePlaylist from '../../../components/playlist/favoritePlaylist';
import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '@redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import MainCollectionHeader from '../../../components/header/mainCollectionHeader';
import {playVod} from '@redux/actions/vodActions';
import {VodType} from '@type/ajaxTypes';
import {RootStackScreenProps} from '@type/navigationTypes';
import EmptyList from '../../../components/common/emptyList';

import {VodTopicType} from '@type/ajaxTypes';

import PlaylistCollection from './PlaylistCollection';
import VodCollection from './VodCollection';

type FlatListType = {
  item: VodType;
};

interface Props {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: FavoriteVodReducerState = useAppSelector(
    ({vodFavouritesReducer}: RootState) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: RootState) => vodPlaylistReducer,
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
