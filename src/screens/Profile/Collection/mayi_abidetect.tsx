import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/mayi_save';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';
import FavoritePlaylist from '../../../components/playlist/mayi_libreactperfloggerjni_modal';
import TitleWithBackButtonHeader from '../../../components/header/mayi_predictiondefault_header';
import {
  mayi_Full,
  mayi_Middleware,
} from '@redux/reducers/mayi_temp_holder';
import FavoriteVodCard from '../../../components/vod/mayi_brightness_form';
import MainCollectionHeader from '../../../components/header/mayi_scrollview_header';
import {playVod} from '@redux/actions/mayi_goallogo';
import {mayi_EmptyGradle} from '@type/mayi_green';
import {RootStackScreenProps} from '@type/mayi_video_binddatas';
import EmptyList from '../../../components/common/mayi_unread';

import {mayi_Runtime} from '@type/mayi_green';

import PlaylistCollection from './mayi_libfbjni_libmapbufferjni';
import VodCollection from './mayi_comment_link';

type mayi_EventLibnms = {
  item: mayi_EmptyGradle;
};

interface mayi_GoogleViews {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: mayi_Full = useAppSelector(
    ({vodFavouritesReducer}: mayi_Libapminsightb) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: mayi_Libapminsightb) => vodPlaylistReducer,
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
