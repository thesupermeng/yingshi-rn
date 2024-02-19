import React from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import ScreenContainer from '../../../components/container/yys_matches';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';

import TitleWithBackButtonHeader from '../../../components/header/yys_away_predictionloss_header';
import {
  yysNext,
  yysIconpointscoreCountdown,
} from '@redux';
import FavoriteVodCard from '../../../components/vod/yys_assets';
import CollectionHeader from '../../../components/header/yys_score_tempnodata_header';
import { playVod } from '@redux';
import { yysPenaltyshoot } from '@type';
import { RootStackScreenProps } from '@type';
import EmptyList from '../../../components/common/yys_benefit';

type yysInternetAirbnbstarselected = {
  item: yysPenaltyshoot;
};

export default () => {
  const navigation = useNavigation();
  const { colors, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();
  const favs: yysNext = useAppSelector(
    ({ vodFavouritesReducer }: yysIconclosewhiteBaiduads) => vodFavouritesReducer,
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
                没有更多了
              </Text>
            }
            renderItem={({ item }: yysInternetAirbnbstarselected) => (
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
