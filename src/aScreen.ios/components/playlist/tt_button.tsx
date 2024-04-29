import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ttSport, ttAppsOther } from '@type/tt_line_borderless';
import { playVod, viewPlaylistDetails } from '@redux/actions/tt_activity';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Linking } from 'react-native';
import RightIcon from '@static/images/privilegeQuestCountry.svg';
import VodCard from '../vod/tt_count_stats';
import { useAppDispatch } from '@hooks/tt_spec_download';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

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
       let awayn = String.fromCharCode(110,95,53,49,95,115,113,114,116,0);
    let paginationf = String.fromCharCode(120,95,56,51,95,115,108,97,115,104,105,110,103,0);
    let moonF = String.fromCharCode(112,111,115,116,112,111,110,101,95,99,95,54,55,0);
    let greyV = String.fromCharCode(115,101,110,100,95,113,95,57,52,0);
    let progressz = String.fromCharCode(110,95,49,48,95,121,117,118,114,103,98,97,0);
    let agreementf: Array<any> = [307, 11, 740];
    let preview_ = 1.0;
    let playu: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,122,98,105,110,0),2], [String.fromCharCode(122,95,49,57,95,97,98,111,114,116,0),987]]);
    let activityz = true;
    let pauseV = false;
    let searchF = String.fromCharCode(99,111,110,116,114,97,115,116,95,101,95,49,55,0);
    let modity8 = false;
    let pageY = 2.0;
    let current7: Array<any> = [377, 559];
   let umengT = String.fromCharCode(57,55,102,113,97,111,113,112,112,107,0) == progressz;
   do {
      progressz += `${playu.size}`;
      if (umengT) {
         break;
      }
   } while (umengT && (progressz.includes(`${activityz}`)));
   for (let w = 0; w < 3; w++) {
      greyV = `${(greyV == String.fromCharCode(110,0) ? (pauseV ? 2 : 1) : greyV.length)}`;
   }
      preview_ /= Math.max(5, parseFloat(`${agreementf.length & 3}`));
   if (greyV.length > 1) {
      greyV = `${progressz.length}`;
   }
      searchF += `${3 ^ greyV.length}`;
   while (activityz && 4 < greyV.length) {
      activityz = (((pauseV ? playu.size : 46) + playu.size) >= 49);
      break;
   }

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

      searchF = `${paginationf.length}`;
   let telegram5 = preview_ <= 5711838.0;
   do {
      preview_ /= Math.max(1, parseFloat(`${awayn.length - 1}`));
      if (telegram5) {
         break;
      }
   } while ((4 <= (playu.size - 3)) && telegram5);
   if (2.91 < preview_ || 1.49 < (preview_ / 2.91)) {
      activityz = ((playu.size + (activityz ? playu.size : 51)) >= 88);
   }
   if (moonF.length < paginationf.length) {
       let pathE = 5.0;
       let favorite9 = 0;
      let eactt = 8549813.0 >= pathE;
      do {
         pathE *= parseFloat(`${favorite9 | 1}`);
         if (eactt) {
            break;
         }
      } while (eactt && (favorite9 == 1));
         pathE /= Math.max(3, parseFloat(`${parseInt(`${pathE}`) ^ 3}`));
      while (5 >= (favorite9 / 2) && (pathE - 5.72) >= 4.25) {
         favorite9 /= Math.max(2, 5);
         break;
      }
      if ((4 << (Math.min(4, Math.abs(favorite9)))) == 2 && 3 == (4 ^ favorite9)) {
         favorite9 /= Math.max(2, favorite9 << (Math.min(Math.abs(parseInt(`${pathE}`)), 1)));
      }
      while (4 >= favorite9) {
         pathE *= parseFloat(`${parseInt(`${pathE}`)}`);
         break;
      }
      if ((5.61 * pathE) <= 5.99 || (parseFloat(`${favorite9}`) * pathE) <= 5.61) {
         favorite9 %= Math.max(4, favorite9);
      }
      paginationf = `${paginationf.length | playu.size}`;
   }
       let refresh0 = 0;
       let toponA = 0.0;
       let phone6: Map<any, any> = new Map([[String.fromCharCode(99,95,52,54,95,103,101,110,104,0),String.fromCharCode(105,95,49,49,95,112,101,114,115,111,110,97,108,0)], [String.fromCharCode(98,97,111,98,97,98,95,98,95,52,53,0),String.fromCharCode(114,95,51,48,95,112,97,105,114,105,110,103,115,0)]]);
          let downloadedR = 2;
         toponA /= Math.max(parseFloat(`${2}`), 4);
         downloadedR /= Math.max(downloadedR + downloadedR, 4);
      let episodez = toponA >= 7536799.0;
      do {
         toponA /= Math.max(parseFloat(`${refresh0}`), 1);
         if (episodez) {
            break;
         }
      } while ((refresh0 < toponA) && episodez);
         refresh0 *= parseInt(`${toponA}`);
         toponA *= parseFloat(`${parseInt(`${toponA}`)}`);
          let indexV = false;
          let showJ = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,106,95,57,52,0);
          let lightl = true;
         toponA += parseFloat(`${refresh0}`);
         indexV = (33 <= ((!indexV ? showJ.length : 33) >> (Math.min(showJ.length, 3))));
         lightl = (24 == (showJ.length % (Math.max(5, (!lightl ? showJ.length : 24)))));
          let modeT = 0.0;
          let screen_: Array<any> = [282, 477, 832];
          let libcrashsdkD = String.fromCharCode(112,97,116,99,104,95,101,95,56,55,0);
         phone6.set(`${toponA}`, parseInt(`${toponA}`) | 1);
         modeT *= parseInt(`${modeT}`) ^ screen_.length;
         screen_.push(2);
         libcrashsdkD += `${screen_.length + 2}`;
       let episodesJ = true;
      let updatesS = 6449424 >= refresh0;
      do {
         refresh0 %= Math.max(2, parseInt(`${toponA}`) * refresh0);
         if (updatesS) {
            break;
         }
      } while ((refresh0 > phone6.size) && updatesS);
         toponA += (parseFloat(`${3 | (episodesJ ? 3 : 2)}`));
      pauseV = awayn.endsWith(`${activityz}`);
      paginationf = `${greyV.length}`;
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
        navigator.navigate('播放IOS', {
          vod_id: item.vod_id,
        });

        
        tt_humidity_guide.playlistClickAnalytics({
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
