import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/wawa_nterstitial_iconpipexpand';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/wawa_root';
import {wawaIconsubssuccess} from '@redux/wawa_bgvipsport_spinner';
import FavoritePlaylist from '../../../components/playlist/wawa_vipsport_turn';
import TitleWithBackButtonHeader from '../../../components/header/wawa_matchinactive_header';
import {
  wawaDistHook,
  wawaAgreementFlag,
} from '@redux/reducers/wawa_quest_ping';
import FavoriteVodCard from '../../../components/vod/wawa_share_libreactperfloggerjni';
import MainCollectionHeader from '../../../components/header/wawa_dplus_header';
import {playVod} from '@redux/actions/wawa_indicator';
import {wawaSellProfileinactive} from '@type/wawa_gradlew';
import {RootStackScreenProps} from '@type/wawa_iconnewchat';
import EmptyList from '../../../components/common/wawa_othermatchdetailbg_videocommon';

import {wawaWithCrown} from '@type/wawa_gradlew';

import PlaylistCollection from './wawa_configure';
import VodCollection from './wawa_target';

type wawaBellreminderDisconnected = {
  item: wawaSellProfileinactive;
};

interface wawaAwayShow {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: wawaDistHook = useAppSelector(
    ({vodFavouritesReducer}: wawaIconsubssuccess) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: wawaIconsubssuccess) => vodPlaylistReducer,
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
