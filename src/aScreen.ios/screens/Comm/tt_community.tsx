import React, { useCallback, memo } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextStyle } from 'react-native';

import { ttAppsOther, ttSport } from '@type/tt_line_borderless';

import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

import VodCard from '../../components/vod/tt_count_stats';
import { useTheme } from '@react-navigation/native';

const imgList = {
  '瞒天过海': require('@static/images/vod/瞒天过海.png'),
  '怒潮': require('@static/images/vod/怒潮.png'),
  '热搜': require('@static/images/vod/热搜.png'),
  '照明商店': require('@static/images/vod/zmsd.png'),
  '再见，李可乐': require('@static/images/vod/再见，李可乐.png'),
  '关于我和鬼变成家人的那件事': require('@static/images/vod/关于我和鬼变成家人的那件事.png'),
};

interface ttCommentary {
  titleStyle?: TextStyle;
}

type ttCommentaryVod = {
  vod_id: number,
  vod_name: string,
  vod_pic: string,
  vod_pic_thumb: string,
  vod_pic_slide: string,
  vod_pic_screenshot: string
};

type ttCommentaryData = {
  comm_id: number,
  comm_name: string,
  vod_list: ttCommentaryVod[]
}

type ttCommentaryRender = {
  item: ttCommentaryVod;
  index: number;
}

function Community({ titleStyle }: ttCommentary) {
  
  const { textVariants, colors, spacing } = useTheme();

  const playlist: ttCommentaryData = {
    comm_id: 0,
    comm_name: '社区',
    vod_list: [{
      vod_id: 0,
      vod_name: '瞒天过海',
      vod_pic: `@${imgList['瞒天过海']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }, {
      vod_id: 0,
      vod_name: '怒潮',
      vod_pic: `@${imgList['怒潮']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }, {
      vod_id: 0,
      vod_name: '热搜',
      vod_pic: `@${imgList['热搜']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }, {
      vod_id: 0,
      vod_name: '照明商店',
      vod_pic: `@${imgList['照明商店']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }, {
      vod_id: 0,
      vod_name: '再见，李可乐',
      vod_pic: `@${imgList['再见，李可乐']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }, {
      vod_id: 0,
      vod_name: '关于我和鬼变成家人的那件事',
      vod_pic: `@${imgList['关于我和鬼变成家人的那件事']}`,
      vod_pic_thumb: '',
      vod_pic_slide: '',
      vod_pic_screenshot: '',
    }]
  };

  const renderItem = useCallback(({ item, index }: ttCommentaryRender) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        // dispatch(playVod(item));
        // navigator.navigate('播放IOS', {
        //   vod_id: item.vod_id,
        // });

        tt_humidity_guide.playlistClickAnalytics({
          topic_id: playlist.comm_id.toString(),
          topic_name: playlist.comm_name,
        });
      }}
      index={index}
    />
  ), []);

  return (
    <View style={{ ...styles.playlist, gap: spacing.m }}>
      {
        playlist.vod_list.map((item) => (
          <>
          </>
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
