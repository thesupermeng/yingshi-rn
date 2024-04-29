import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/tt_backward';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';
import FavoritePlaylist from '../../../components/playlist/tt_helper';
import TitleWithBackButtonHeader from '../../../components/header/tt_typing_tail_header';
import {
  ttTrashGradlew,
  ttStreaming,
} from '@redux/reducers/tt_configure_injury';
import FavoriteVodCard from '../../../components/vod/tt_internet';
import MainCollectionHeader from '../../../components/header/tt_muted_header';
import {playVod} from '@redux/actions/tt_activity';
import {ttAppsOther} from '@type/tt_line_borderless';
import {RootStackScreenProps} from '@type/tt_temperature';
import EmptyList from '../../../components/common/tt_logo_desc';

import {ttSport} from '@type/tt_line_borderless';

import PlaylistCollection from './tt_zoom_catagory';
import VodCollection from './tt_types';

type ttBing = {
  item: ttAppsOther;
};

interface ttSmall {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: ttTrashGradlew = useAppSelector(
    ({vodFavouritesReducer}: ttOrange) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: ttOrange) => vodPlaylistReducer,
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
