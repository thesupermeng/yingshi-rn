import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {RootState} from '@redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '@redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import {playVod} from '@redux/actions/vodActions';
import {VodType} from '@type/ajaxTypes';
import {RootStackScreenProps} from '@type/navigationTypes';
import EmptyList from '../../../components/common/emptyList';
import { disableAdultMode, enableAdultMode } from '@redux/actions/screenAction';

type FlatListType = {
  item: VodType & {playMode?: 'adult'|'normal'};
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: FavoriteVodReducerState = useAppSelector(
    ({vodFavouritesReducer}: RootState) => vodFavouritesReducer,
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
            renderItem={({item}: FlatListType) => (
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
