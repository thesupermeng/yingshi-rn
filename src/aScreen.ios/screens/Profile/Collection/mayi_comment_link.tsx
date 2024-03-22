import React from 'react';
import {View, FlatList, Text, StyleSheet, Linking} from 'react-native';
import ScreenContainer from '../../../components/container/mayi_save';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../../components/header/mayi_predictiondefault_header';
import {
  mayi_Full,
  mayi_Middleware,
} from '@redux/reducers/mayi_temp_holder';
import FavoriteVodCard from '../../../components/vod/mayi_brightness_form';
import CollectionHeader from '../../../components/header/mayi_bgvipxvod_shirt_header';
import {playVod} from '@redux/actions/mayi_goallogo';
import {mayi_EmptyGradle} from '@type/mayi_green';
import {RootStackScreenProps} from '@type/mayi_video_binddatas';
import EmptyList from '../../../components/common/mayi_unread';

type mayi_EventLibnms = {
  item: mayi_EmptyGradle;
};

export default () => {
  const navigation = useNavigation();
  const {colors, textVariants, icons} = useTheme();
  const dispatch = useAppDispatch();
  const favs: mayi_Full = useAppSelector(
    ({vodFavouritesReducer}: mayi_Libapminsightb) => vodFavouritesReducer,
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
            renderItem={({item}: mayi_EventLibnms) => (
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
