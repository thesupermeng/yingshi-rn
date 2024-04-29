import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ttSport, ttAppsOther } from '@type/tt_line_borderless';
import { playVod, viewPlaylistDetails } from '@redux/actions/tt_activity';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '@static/images/privilegeQuestCountry.svg';
import VodCard from '../vod/tt_count_stats';
import { useAppDispatch } from '@hooks/tt_spec_download';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';

interface ttSmall {
  playlist: ttSport;
  titleStyle?: TextStyle;
}

type ttBing = {
  item: ttAppsOther;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: ttSmall) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
       let traminiI = false;
    let videoJ = 1.0;
    let x_unlockZ = 1;
    let tramini4 = String.fromCharCode(104,95,51,53,95,108,105,109,105,116,101,100,0);
    let referrerq = String.fromCharCode(108,95,49,95,108,105,112,98,111,97,114,100,0);
    let backB: Array<any> = [String.fromCharCode(103,101,116,109,95,97,95,57,0), String.fromCharCode(104,95,54,54,95,115,117,98,115,97,109,112,108,101,0), String.fromCharCode(108,111,99,105,95,51,95,54,54,0)];
    let small2 = String.fromCharCode(102,95,51,55,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
    let vertical_ = String.fromCharCode(108,101,97,118,105,110,103,95,52,95,57,48,0);
    let mathc = true;
      videoJ -= parseInt(`${videoJ}`) >> (Math.min(Math.abs(3), 4));
   while (referrerq.startsWith(`${backB.length}`)) {
       let injuryX = 4.0;
       let bootsplashJ: Array<any> = [217, 252, 887];
       let pointc = 5;
       let transfera = 2;
       let skip8 = true;
       let sidez = false;
       let scheduleH = 0.0;
       let sansl = 2.0;
      let favoriteB = sidez ? !sidez : sidez;
      do {
         sidez = !skip8;
         if (favoriteB) {
            break;
         }
      } while (favoriteB && (!sidez));
         skip8 = bootsplashJ.includes(sansl);
         transfera <<= Math.min(4, Math.abs(1 % (Math.max(parseInt(`${scheduleH}`), 9))));
      for (let d = 0; d < 3; d++) {
         pointc ^= 1;
      }
      if (2 == (transfera & pointc) || 4 == (2 & pointc)) {
         pointc >>= Math.min(3, parseInt(`${Math.abs((parseInt(`${scheduleH}`) / (Math.max(3, (sidez ? 1 : 1)))))}`));
      }
         sidez = !sidez && scheduleH >= 27.29;
      let fileg = transfera <= 4998771;
      do {
         transfera &= 3 & parseInt(`${sansl}`);
         if (fileg) {
            break;
         }
      } while (fileg && ((transfera >> (Math.min(Math.abs(1), 3))) <= 3 || 5 <= (1 >> (Math.min(3, Math.abs(transfera))))));
      if (!sidez || !skip8) {
         sidez = transfera > 42;
      }
         sidez = (parseInt(`${injuryX}`) / (Math.max(bootsplashJ.length, 9))) == 52;
          let submit_ = false;
          let playa: Map<any, any> = new Map([[String.fromCharCode(105,95,51,49,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0),620], [String.fromCharCode(114,95,55,49,95,103,101,116,99,114,101,100,0),220]]);
         transfera *= parseInt(`${injuryX}`);
         submit_ = playa.size < 8;
         playa = new Map([[`${playa.size}`, playa.size * 2]]);
      referrerq = `${parseInt(`${injuryX}`) / 1}`;
      break;
   }
      small2 += `${(referrerq.length >> (Math.min(4, Math.abs((traminiI ? 2 : 3)))))}`;
      videoJ /= Math.max(small2.length, 4);

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

   let albuml = String.fromCharCode(102,117,98,98,106,102,57,0) == tramini4;
   do {
      tramini4 = `${x_unlockZ % 3}`;
      if (albuml) {
         break;
      }
   } while (((backB.length >> (Math.min(tramini4.length, 5))) <= 1) && albuml);
       let entryV = 1.0;
      for (let j = 0; j < 1; j++) {
         entryV += parseFloat(`${parseInt(`${entryV}`) & parseInt(`${entryV}`)}`);
      }
          let emojiQ = String.fromCharCode(107,95,53,50,95,114,101,102,101,114,101,110,99,101,115,0);
          let rewindS = 0.0;
          let bannerZ = true;
         entryV /= Math.max((parseFloat(`${(bannerZ ? 1 : 2) & 2}`)), 4);
         emojiQ = `${parseInt(`${rewindS}`)}`;
         rewindS *= parseFloat(`${2}`);
         bannerZ = (emojiQ.length - parseInt(`${rewindS}`)) >= 56;
         entryV -= parseFloat(`${parseInt(`${entryV}`) | 1}`);
      small2 = `${tramini4.length & 2}`;
   while (4 >= referrerq.length && !traminiI) {
      traminiI = (((!traminiI ? backB.length : 54) + backB.length) >= 54);
      break;
   }
      tramini4 += `${parseInt(`${videoJ}`)}`;
    tt_humidity_guide.playlistClickAnalytics({
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

  const renderItem = useCallback(({ item, index }: ttBing) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        
        tt_humidity_guide.playlistClickAnalytics({
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
