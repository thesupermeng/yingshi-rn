import React from 'react';
import {View, FlatList, Text, StyleSheet, Linking} from 'react-native';
import ScreenContainer from '../../../components/container/yys_executor_expand';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/yys_frame';
import {yys_MintegralLibavdevice} from '@redux/yys_sport_shrink';

import TitleWithBackButtonHeader from '../../../components/header/yys_anner_header';
import {
  yys_Untick,
  yys_BorderlessLibruntimeexecutor,
} from '@redux/reducers/yys_full';
import FavoriteVodCard from '../../../components/vod/yys_binddatas_heart';
import CollectionHeader from '../../../components/header/yys_rncore_searchbar_header';
import {playVod} from '@redux/actions/yys_player_style';
import {yys_Bing} from '@type/yys_libzeus';
import {RootStackScreenProps} from '@type/yys_settings';
import EmptyList from '../../../components/common/yys_goal_utils';

type yys_Mbsplash = {
  item: yys_Bing;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: yys_Untick = useAppSelector(
    ({vodFavouritesReducer}: yys_MintegralLibavdevice) => vodFavouritesReducer,
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
            renderItem={({item}: yys_Mbsplash) => (
              <FavoriteVodCard
                vod={item}
                initialFavoriteState={true}
                onPress={() => {
                  dispatch(playVod(item));
                  navigation.navigate('播放IOS', {
                    vod_id: item.vod_id,
                  });
                }}
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
