import React from 'react';
import {useTheme} from '@react-navigation/native';
import {yys_BrightnessCopy, yys_Bing} from '@type/yys_libzeus';
import {
  playVod,
  togglePlaylistFavorites,
  viewPlaylistDetails,
} from '@redux/actions/yys_player_style';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import RightIcon from '@static/images/toponLang.svg';
import VodCard from '../vod/yys_singapore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from '@hooks/yys_frame';
import FavoriteIcon from '@static/images/popupReadAnythink.svg';

interface yys_ConfigureUimanager {
  playlist: yys_BrightnessCopy;
  navigator: NativeStackNavigationProp<any, any, undefined>;
}
type yys_Mbsplash = {
  item: yys_Bing;
};
export default function FavoritePlaylist({playlist, navigator}: yys_ConfigureUimanager) {
  const {textVariants, spacing, colors, icons} = useTheme();
  const dispatch = useAppDispatch();
  return (
    <View style={{...styles.playlist, gap: spacing.s}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(viewPlaylistDetails(playlist));
          navigator.navigate('PlaylistDetail', {topic_id: playlist.topic_id});
        }}>
        <View style={styles.header}>
          <Text
            style={{
              ...textVariants.header,
              color: colors.primary,
              paddingBottom: 8,
            }}>
            {playlist.topic_name}
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(togglePlaylistFavorites(playlist))}
            style={{marginLeft: spacing.xs}}>
            <FavoriteIcon
              width={icons.sizes.m}
              height={icons.sizes.m}
              style={{color: colors.primary, marginRight: spacing.m}}
            />
          </TouchableOpacity>
        </View>
        <Text
          numberOfLines={3}
          style={{
            ...textVariants.small,
            color: colors.text,
            flex: 1,
            paddingBottom: 3,
          }}>
          {playlist.topic_blurb}
        </Text>
      </TouchableOpacity>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={playlist.vod_list}
        horizontal
        renderItem={({item}: yys_Mbsplash) => {
          return (
            <VodCard
              vod_name={item.vod_name}
              vod_pic={item.vod_pic}
              vodImageStyle={{width: 120, height: 180}}
              onPress={() => {
                dispatch(playVod(item));
                navigator.navigate('播放', {
                  vod_id: item.vod_id,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playlist: {
    marginTop: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
