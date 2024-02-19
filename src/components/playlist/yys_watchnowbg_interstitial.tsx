import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { yysArrowup, yysPenaltyshoot } from '@type';
import { playVod, viewPlaylistDetails } from '@redux';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { MoreArrowSvg } from '@static';
import VodCard from '../vod/yys_private';
import { useAppDispatch } from '@hooks';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';

interface yysIconarrowrightorangeStation {
  playlist: yysArrowup;
  titleStyle?: TextStyle;
}

type yysInternetAirbnbstarselected = {
  item: yysPenaltyshoot;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: yysIconarrowrightorangeStation) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
       let yellowcirclebgF = String.fromCharCode(114,115,112,95,108,95,49,53,0);
    let shootY = String.fromCharCode(97,95,50,55,95,112,108,97,110,97,114,0);
    let einit_pl = 0.0;
    let weatherL = 4.0;
    let homeloadingE = String.fromCharCode(101,95,53,95,115,109,105,108,0);
    let auto_60 = String.fromCharCode(119,95,52,54,95,110,117,109,98,101,114,115,0);
    let emptyF = 5.0;
    let umengl = 3.0;
    let register_z87 = false;
    let libcrashsdky = 0;
    let questicon3 = String.fromCharCode(114,95,51,95,103,117,105,100,101,115,0);
    let setting6 = false;
    let textlayoutmanagerE = true;
    let faviconP = 2.0;
    let reactnativeultimatelistviewb = false;
   let routerN = 6943361.0 >= emptyF;
   do {
      emptyF *= parseFloat(`${3}`);
      if (routerN) {
         break;
      }
   } while ((!yellowcirclebgF.startsWith(`${emptyF}`)) && routerN);
   while (yellowcirclebgF.length < 3 && register_z87) {
      register_z87 = 78 == yellowcirclebgF.length;
      break;
   }
   if (parseInt(`${umengl}`) == questicon3.length) {
      questicon3 += `${parseInt(`${umengl}`) << (Math.min(3, Math.abs(2)))}`;
   }
      einit_pl *= 3 & parseInt(`${emptyF}`);
   let questi = homeloadingE == String.fromCharCode(107,97,104,112,0);
   do {
      homeloadingE += `${libcrashsdky}`;
      if (questi) {
         break;
      }
   } while ((2 < homeloadingE.length) && questi);

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

   while (yellowcirclebgF.length == 1) {
      shootY += `${questicon3.length}`;
      break;
   }
   while (1 > auto_60.length) {
      shootY = `${questicon3.length}`;
      break;
   }
   if (questicon3.length > 2 || !setting6) {
       let tempnodata1: Map<any, any> = new Map([[String.fromCharCode(116,99,102,105,108,101,95,108,95,48,0),772], [String.fromCharCode(108,95,55,49,95,100,101,102,97,117,108,116,115,0),483]]);
       let yellowZ = 1;
      let cornerkicks = yellowZ <= 7899344;
      do {
          let matchesX: Map<any, any> = new Map([[String.fromCharCode(98,112,114,105,110,116,95,122,95,55,51,0),String.fromCharCode(108,95,50,53,95,115,117,112,112,114,101,115,115,105,111,110,0)], [String.fromCharCode(110,116,101,114,110,97,108,95,120,95,49,48,0),String.fromCharCode(102,95,49,55,95,97,110,105,109,97,116,105,111,110,0)], [String.fromCharCode(112,97,117,115,101,95,115,95,53,53,0),String.fromCharCode(97,95,55,95,100,105,103,101,115,116,98,121,110,97,109,101,0)]]);
          let librrcN: Map<any, any> = new Map([[String.fromCharCode(104,95,56,53,95,97,118,102,111,114,109,97,116,114,101,115,0),652], [String.fromCharCode(118,95,49,48,95,97,112,112,101,97,114,97,110,99,101,0),141], [String.fromCharCode(116,114,97,99,107,115,95,104,95,53,51,0),915]]);
          let reducerU = false;
          let lnewsE: Array<any> = [379, 703, 423];
         yellowZ += tempnodata1.size;
         matchesX = new Map([[`${lnewsE.length}`, lnewsE.length >> (Math.min(Math.abs(2), 2))]]);
         librrcN.set(`${lnewsE.length}`, matchesX.size);
         reducerU = (matchesX.size / (Math.max(8, lnewsE.length))) <= 79;
         if (cornerkicks) {
            break;
         }
      } while (cornerkicks && (!Array.from(tempnodata1.keys()).includes(`${yellowZ}`)));
         tempnodata1 = new Map([[`${tempnodata1.size}`, tempnodata1.size]]);
         yellowZ |= tempnodata1.size | 3;
         yellowZ ^= 3 - tempnodata1.size;
          let foregroundT = 0;
         tempnodata1 = new Map([[`${tempnodata1.size}`, 3]]);
         foregroundT &= 1 ^ foregroundT;
      let arrowN = yellowZ >= 5662415;
      do {
         yellowZ *= 3;
         if (arrowN) {
            break;
         }
      } while ((yellowZ <= 2) && arrowN);
      questicon3 += "1";
   }
      questicon3 += `${parseInt(`${einit_pl}`)}`;
   while (register_z87 && (weatherL + 4.24) < 3.35) {
      weatherL += parseFloat(`${3}`);
      break;
   }
    yys_giftbutton_footballtrophy.playlistClickAnalytics({
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

  const renderItem = useCallback(({ item, index }: yysInternetAirbnbstarselected) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        
        yys_giftbutton_footballtrophy.playlistClickAnalytics({
          topic_id: playlist.topic_id.toString(),
          topic_name: playlist.topic_name,
        });
        
      }}
      index={index}
      vod_pic_list={item.vod_pic_list}
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

            <MoreArrowSvg
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
