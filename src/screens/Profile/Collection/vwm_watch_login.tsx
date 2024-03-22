import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../../components/container/ypy_fast';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/kg_index';
import {PSmall} from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../../components/header/cio_news_types_header';
import {
  NNEBing,
  QQCenterChart,
} from '@redux/reducers/pxk_lang_quest';
import FavoriteVodCard from '../../../components/vod/tw_agreement_description';
import CollectionHeader from '../../../components/header/j_native_hover_header';
import {playVod} from '@redux/actions/xif_layout';
import {XVSScoreDark} from '@type/wpk_long';
import {RootStackScreenProps} from '@type/vrm_thailand';
import EmptyList from '../../../components/common/jip_next_bell';
import { disableAdultMode, enableAdultMode } from '@redux/actions/a_switch';

type MEYMode = {
  item: XVSScoreDark & {playMode?: 'adult'|'normal'};
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: NNEBing = useAppSelector(
    ({vodFavouritesReducer}: PSmall) => vodFavouritesReducer,
  );
  const favorites = favs.favorites;

  return (
    <>
      {/* <TitleWithBackButtonHeader title="我的收藏" />
      <CollectionHeader route="视频收藏" navigator={navigation} /> */}
      <View>
        {favorites && favorites.length > 0 && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={favorites}
            contentContainerStyle={{paddingBottom: 120}}
            ListFooterComponent={
              <Text
                style={{
                  ...textVariants.body,
                  color: colors.muted,
                  ...styles.noMore,
                }}>
                没有更多了
              </Text>
            }
            renderItem={({item}: MEYMode) => (
              <FavoriteVodCard
                vod={item}
                initialFavoriteState={true}
                onPress={() => {
                  dispatch(playVod(item));
                  navigation.navigate('播放', {
                    vod_id: item.vod_id,
                    player_mode: item.playMode
                  });
                  if (item.playMode === 'adult') {dispatch(enableAdultMode())}
                  else {dispatch(disableAdultMode())}
                }}
                imgOrientation='horizontal'
              />
            )}
          />
        )}
      </View>
      {favorites && favorites.length === 0 && (
        <EmptyList description="暂无视频收藏" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noMore: {
    textAlign: 'center',
    marginTop: 30,
  },
});
