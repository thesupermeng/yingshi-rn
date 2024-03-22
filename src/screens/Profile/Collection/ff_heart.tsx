import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/ypy_fast';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/kg_index';
import {PSmall} from '@redux/fj_prediction_thailand';
import FavoritePlaylist from '../../../components/playlist/l_weibo';
import TitleWithBackButtonHeader from '../../../components/header/cio_news_types_header';
import {
  NNEBing,
  QQCenterChart,
} from '@redux/reducers/pxk_lang_quest';
import FavoriteVodCard from '../../../components/vod/tw_agreement_description';
import MainCollectionHeader from '../../../components/header/r_rank_single_header';
import {playVod} from '@redux/actions/xif_layout';
import {XVSScoreDark} from '@type/wpk_long';
import {RootStackScreenProps} from '@type/vrm_thailand';
import EmptyList from '../../../components/common/jip_next_bell';

import {RBEmojiEwarded} from '@type/wpk_long';

import PlaylistCollection from './owj_container';
import VodCollection from './vwm_watch_login';

type MEYMode = {
  item: XVSScoreDark;
};

interface XFillButton {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: NNEBing = useAppSelector(
    ({vodFavouritesReducer}: PSmall) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: PSmall) => vodPlaylistReducer,
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
