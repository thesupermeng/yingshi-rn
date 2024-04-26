import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../components/container/ww_collection';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/ww_catagory_neon';
import {wwEighteenShirt} from '@redux/ww_small';
import FavoritePlaylist from '../../../components/playlist/ww_xadsdk_middleware';
import TitleWithBackButtonHeader from '../../../components/header/ww_react_predictionwin_header';
import {
  wwBang,
  wwMbjscommon,
} from '@redux/reducers/ww_shared';
import FavoriteVodCard from '../../../components/vod/ww_gifgoal';
import MainCollectionHeader from '../../../components/header/ww_arrowup_arrow_header';
import {playVod} from '@redux/actions/ww_floater';
import {wwControl} from '@type/ww_dycreator_result';
import {RootStackScreenProps} from '@type/ww_tempnodatagif_description';
import EmptyList from '../../../components/common/ww_reducer_libreact';

import {wwFirebase} from '@type/ww_dycreator_result';

import PlaylistCollection from './ww_expired';
import VodCollection from './ww_abidetect';

type wwCasting = {
  item: wwControl;
};

interface wwIndexDice {
  initialTab?: string;
}

export default ({navigation}: RootStackScreenProps<'我的收藏'>) => {
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: wwBang = useAppSelector(
    ({vodFavouritesReducer}: wwEighteenShirt) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  const [selectedTab, setSelectedTab] = useState('视频收藏');

  const vodPlaylistReducer = useAppSelector(
    ({vodPlaylistReducer}: wwEighteenShirt) => vodPlaylistReducer,
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
