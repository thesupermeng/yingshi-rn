import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../../components/container/wawa_nterstitial_iconpipexpand';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/wawa_root';
import {wawaIconsubssuccess} from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../../components/header/wawa_matchinactive_header';
import {
  wawaDistHook,
  wawaAgreementFlag,
} from '@redux/reducers/wawa_quest_ping';
import FavoriteVodCard from '../../../components/vod/wawa_share_libreactperfloggerjni';
import CollectionHeader from '../../../components/header/wawa_apps_sina_header';
import {playVod} from '@redux/actions/wawa_indicator';
import {wawaSellProfileinactive} from '@type/wawa_gradlew';
import {RootStackScreenProps} from '@type/wawa_iconnewchat';
import EmptyList from '../../../components/common/wawa_othermatchdetailbg_videocommon';
import { disableAdultMode, enableAdultMode } from '@redux/actions/wawa_related';

type wawaBellreminderDisconnected = {
  item: wawaSellProfileinactive & {playMode?: 'adult'|'normal'};
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: wawaDistHook = useAppSelector(
    ({vodFavouritesReducer}: wawaIconsubssuccess) => vodFavouritesReducer,
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
            renderItem={({item}: wawaBellreminderDisconnected) => (
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
