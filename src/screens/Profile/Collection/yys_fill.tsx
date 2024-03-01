import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/yys_executor_expand';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/yys_frame';
import {yys_MintegralLibavdevice} from '@redux/yys_sport_shrink';
import FavoritePlaylist from '../../../components/playlist/yys_details';
import TitleWithBackButtonHeader from '../../../components/header/yys_anner_header';
import {
  yys_Untick,
  yys_BorderlessLibruntimeexecutor,
} from '@redux/reducers/yys_full';
import FavoriteVodCard from '../../../components/vod/yys_binddatas_heart';
import MainCollectionHeader from '../../../components/header/yys_link_list_header';
import {playVod} from '@redux/actions/yys_player_style';
import {yys_Bing} from '@type/yys_libzeus';
import {RootStackScreenProps} from '@type/yys_settings';
import EmptyList from '../../../components/common/yys_goal_utils';

import {yys_BrightnessCopy} from '@type/yys_libzeus';

import PlaylistCollection from './yys_untick_nterstitial';
import VodCollection from './yys_player_recommendation';

type yys_Mbsplash = {
  item: yys_Bing;
};

interface yys_ConfigureUimanager {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: yys_Untick = useAppSelector(
    ({vodFavouritesReducer}: yys_MintegralLibavdevice) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: yys_MintegralLibavdevice) => vodPlaylistReducer,
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
