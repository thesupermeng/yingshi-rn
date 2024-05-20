import React from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { RootState } from '@redux/store';

import TitleWithBackButtonHeader from '../../../components/header/titleWithBackButtonHeader';
import {
  FavoriteVodReducerState,
  VodReducerState,
} from '@redux/reducers/vodReducer';
import FavoriteVodCard from '../../../components/vod/favoriteVodCard';
import CollectionHeader from '../../../components/header/myCollectionHeader';
import { playVod } from '@redux/actions/vodActions';
import { RootStackScreenProps } from '@type/navigationTypes';
import EmptyList from '../../../components/common/emptyList';
import { Vod } from '@models';
import { CLangKey } from '@constants';

type FlatListType = {
  item: Vod & { playMode?: 'adult' | 'normal' };
};

export default () => {
  const navigation = useNavigation();
  const { colors, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();
  const favs: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer,
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
            contentContainerStyle={{ paddingBottom: 120 }}
            ListFooterComponent={
              <Text
                style={{
                  ...textVariants.body,
                  color: colors.muted,
                  ...styles.noMore,
                }}>
                {CLangKey.noAnyMore.tr()}
              </Text>
            }
            renderItem={({ item }: FlatListType) => (
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
        <EmptyList description={CLangKey.noXFavouriteTr({ x: CLangKey.video.tr() })} />
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
