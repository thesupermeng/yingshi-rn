import React, { memo } from 'react';
import { StyleSheet, View, Text, TextStyle } from 'react-native';
import { ttDoubanMeta } from '@type/tt_line_borderless';
import { useTheme } from '@react-navigation/native';
import CommunityReview from './tt_comm_review';
interface ttCommunityData {
  comm_id: number;
  comm_name: string;
  meta_list: ttDoubanMeta[]
}

interface ttCommunityProps {
  playlist?: ttCommunityData;
  titleStyle?: TextStyle;
  onPress?: (item: ttDoubanMeta) => void,
  onPressComment?: (meta: ttDoubanMeta) => void,
}

function Community({playlist, titleStyle, onPress, onPressComment }: ttCommunityProps) {
  
  const { textVariants, spacing } = useTheme();
  
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
            { playlist?.comm_name ?? '社区' }
          </Text>
        </View>
      </View>
      {
        playlist && playlist.meta_list.length > 0 && playlist.meta_list.map((item, index) => (
          <CommunityReview 
            key={item.vod_id} 
            meta={item} 
            display={index % 2  == 0 ? 'sample' : 'large'} 
            onPress={() => {
              if (onPress) {
                onPress(item)
              }
            }}
            onPressComment={(meta: ttDoubanMeta) => {
              if (onPressComment) {
                onPressComment(meta)
              }
            }}
          />
        ))
      }
    </View>
  );
};

export default memo(Community);

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