import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { VodTopicType, VodType } from '@type/ajaxTypes';
import { playVod, viewPlaylistDetails } from '@redux/actions/vodActions';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '@static/images/more_arrow.svg';
import VodCard from '../vod/vodCard';
import { useAppDispatch } from '@hooks/hooks';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';

interface Props {
  playlist: VodTopicType;
  titleStyle?: TextStyle;
}

type FlatListType = {
  item: VodType;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: Props) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    // ========== for analytics - start ==========
    UmengAnalytics.playlistClickAnalytics({
      topic_id: playlist.topic_id.toString(),
      topic_name: playlist.topic_name,
    });
    // ========== for analytics - end ==========
  };

  useEffect(() => {
    const eventName = 'topic';
    const eventValues = {
      topic_name: playlist.topic_name,
    };

    // appsFlyer.logEvent(
    //   eventName,
    //   eventValues,
    //   res => {
    //     // console.log(res);
    //   },
    //   err => {
    //     console.error(err);
    //   },
    // );
  }, []);

  const renderItem = useCallback(({ item, index }: FlatListType) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        // ========== for analytics - start ==========
        UmengAnalytics.playlistClickAnalytics({
          topic_id: playlist.topic_id.toString(),
          topic_name: playlist.topic_name,
        });
        // ========== for analytics - end ==========
      }}
      index={index}
    />
  ), []);

  return (
    <View style={{ ...styles.playlist, gap: spacing.m }}>
      <TouchableOpacity onPress={viewMore}>
        <View
          style={{
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
            gap: spacing.s,
          }}>
          <View style={styles.header}>
            <Text style={{ ...textVariants.bigHeader, ...titleStyle }}>
              {playlist.topic_name}
            </Text>

            <RightIcon
              color={colors.text}
              height={icons.sizes.l}
              width={icons.sizes.l}
            />
          </View>
          <Text
            numberOfLines={3}
            style={{ ...textVariants.small, color: colors.text, flex: 1 }}>
            {playlist.topic_blurb}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingLeft: spacing.sideOffset }}>
        <FlatList
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={5}
          data={playlist?.vod_list}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

export default memo(VodPlaylist);

const styles = StyleSheet.create({
  playlist: {
    marginBottom: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
