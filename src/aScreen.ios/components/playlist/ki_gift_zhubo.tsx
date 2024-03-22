import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { RBEmojiEwarded, XVSScoreDark } from '@type/wpk_long';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Linking } from 'react-native';
import RightIcon from '@static/images/readBingMode.svg';
import VodCard from '../vod/qee_dice';
import { useAppDispatch } from '@hooks/kg_index';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';

interface XFillButton {
  playlist: RBEmojiEwarded;
  titleStyle?: TextStyle;
}

type MEYMode = {
  item: XVSScoreDark;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: XFillButton) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
       let sportd = String.fromCharCode(97,108,115,101,0);
    let thumbnailx = String.fromCharCode(105,100,99,116,120,0);
    let previewO = String.fromCharCode(111,116,104,101,114,0);
    let string_: Array<any> = [String.fromCharCode(116,114,101,110,100,105,110,103,0), String.fromCharCode(101,110,100,115,0), String.fromCharCode(102,105,108,108,101,100,0)];
    let carouselv = 5.0;
    let skipK = false;
    let orange9 = String.fromCharCode(99,97,112,116,117,114,101,0);
    let selectiont = 3.0;
    let whiteP = 1;
    let modelsn: Array<any> = [185, 830, 393];
    let gpayj: Array<any> = [982, 938, 921];
   for (let n = 0; n < 2; n++) {
      carouselv += parseFloat(`${3 | previewO.length}`);
   }
      sportd = `${1 * orange9.length}`;
   while (2.70 == (selectiont + carouselv) && 2.70 == (selectiont + carouselv)) {
      selectiont += (parseFloat(`${orange9 == String.fromCharCode(82,0) ? orange9.length : string_.length}`));
      break;
   }
      skipK = !sportd.includes(`${skipK}`);
      string_.push(2);

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

   let actionP = 5204717 >= thumbnailx.length;
   do {
      thumbnailx += `${((skipK ? 3 : 2) * 2)}`;
      if (actionP) {
         break;
      }
   } while (actionP && ((thumbnailx.length * 2) < 3 || (2 * string_.length) < 2));
       let nativeL = true;
       let weibo5 = String.fromCharCode(105,115,111,109,0);
       let handlerg: Map<any, any> = new Map([[String.fromCharCode(101,99,116,97,110,103,108,101,0),315], [String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,0),251]]);
       let redirectu = String.fromCharCode(118,97,108,117,108,101,0);
       let assist0 = String.fromCharCode(110,105,100,115,0);
      while ((handlerg.size | weibo5.length) <= 4) {
         handlerg = new Map([[`${handlerg.size}`, handlerg.size]]);
         break;
      }
      let flyerS = 6206175 <= handlerg.size;
      do {
         handlerg = new Map([[`${handlerg.size}`, 2]]);
         if (flyerS) {
            break;
         }
      } while (flyerS && (weibo5.endsWith(`${handlerg.size}`)));
         handlerg = new Map([[assist0, redirectu.length + 3]]);
         weibo5 = `${handlerg.size}`;
      while (redirectu.includes(`${handlerg.size}`)) {
         handlerg = new Map([[`${handlerg.size}`, ((nativeL ? 2 : 1) - handlerg.size)]]);
         break;
      }
      let delegate__J = String.fromCharCode(115,109,98,52,0) == redirectu;
      do {
         redirectu += `${(weibo5 == String.fromCharCode(73,0) ? handlerg.size : weibo5.length)}`;
         if (delegate__J) {
            break;
         }
      } while ((assist0 == String.fromCharCode(99,0)) && delegate__J);
         redirectu += "2";
      if (!nativeL) {
         nativeL = String.fromCharCode(87,0) == assist0;
      }
      selectiont += parseFloat(`${orange9.length}`);
       let stationsb = String.fromCharCode(116,101,115,116,110,101,116,115,0);
         stationsb += "2";
      if (stationsb.length >= 3 || stationsb != String.fromCharCode(57,0)) {
         stationsb += `${stationsb.length}`;
      }
       let countdown3 = 1;
      string_ = [modelsn.length];
   if (skipK) {
      skipK = whiteP < 71;
   }
      selectiont -= parseFloat(`${parseInt(`${carouselv}`) - 2}`);
    umb_center_carousel.playlistClickAnalytics({
      topic_id: playlist.topic_id.toString(),
      topic_name: playlist.topic_name,
    });
    
  };

  useEffect(() => {
    const eventName = 'topic';
    const eventValues = {
      topic_name: playlist.topic_name,
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const renderItem = useCallback(({ item, index }: MEYMode) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放IOS', {
          vod_id: item.vod_id,
        });

        
        umb_center_carousel.playlistClickAnalytics({
          topic_id: playlist.topic_id.toString(),
          topic_name: playlist.topic_name,
        });
        
      }}
      index={index}
    />
  ), []);

  return (
    <View style={{ ...styles.playlist, gap: spacing.m }}>
      <TouchableOpacity activeOpacity={0.85} onPress={viewMore}>
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
