import React, { useCallback, memo } from 'react';
import { StyleSheet, View, Text, FlatList, TextStyle } from 'react-native';

import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

import VodCard from '../../components/vod/tt_count_stats';
import { useTheme } from '@react-navigation/native';
import { ttAppsOther } from '@type/tt_line_borderless';

interface ttCommentaryProps {
  playlist?: ttCommentaryData;
  titleStyle?: TextStyle;
  onPress?: (item: ttAppsOther) => void,
}

interface ttCommentaryData {
  comm_id: number,
  comm_name: string,
  vod_list: ttAppsOther[],
}

interface ttCommentaryRender {
  item: ttAppsOther;
  index: number;
}

function Commentary({ playlist, titleStyle, onPress }: ttCommentaryProps) {
  
  const { textVariants, spacing } = useTheme();

  const renderItem = useCallback(({ item, index }: ttCommentaryRender) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        if (onPress) {
          onPress(item)
        }
        
        // tt_humidity_guide.playlistClickAnalytics({
        //   topic_id: playlist.comm_id.toString(),
        //   topic_name: playlist.comm_name,
        // });
      }}
      index={index}
    />
  ), []);

  return (
    <View style={{ ...styles.playlist, gap: spacing.m }}>
      <View
        style={{
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          gap: spacing.s,
        }}>
        <View style={styles.header}>
          <Text style={{ ...textVariants.header, ...titleStyle }}>
            {playlist?.comm_name ?? '解说'}
          </Text>
        </View>
      </View>
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
};

export default memo(Commentary);

const styles = StyleSheet.create({
  playlist: {
    marginBottom: 12,
  },
  header: {
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
