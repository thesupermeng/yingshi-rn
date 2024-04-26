import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { wwFirebase, wwControl } from '@type/ww_dycreator_result';
import { playVod, viewPlaylistDetails } from '@redux/actions/ww_floater';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '@static/images/libcxxcomponentsPrivilege.svg';
import VodCard from '../vod/ww_accepted_current';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import ww_runtime from '../../../Umeng/ww_runtime';

interface wwIndexDice {
  playlist: wwFirebase;
  titleStyle?: TextStyle;
}

type wwCasting = {
  item: wwControl;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: wwIndexDice) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
       let flyer_ = String.fromCharCode(97,112,112,101,110,100,101,100,95,122,95,53,0);
    let windT = true;
    let upgradeG: Array<any> = [65, 571];
    let pingT = String.fromCharCode(114,95,53,55,95,100,105,116,104,101,114,0);
    let z_hashw = 4.0;
    let weiboc: Array<any> = [535, 161];
    let reactnativeultimatelistviewj = 4;
    let combine4 = 4.0;
    let turns = String.fromCharCode(100,101,103,114,101,101,95,119,95,51,55,0);
       let libreanimatedR = String.fromCharCode(108,95,53,57,95,116,101,120,116,108,101,0);
       let settingsQ = String.fromCharCode(97,95,54,48,95,108,101,114,116,0);
      let androidR = settingsQ == String.fromCharCode(95,48,97,111,97,0);
      do {
          let schedulerz: Array<any> = [496, 82];
          let jingdongl = String.fromCharCode(110,95,57,57,95,99,105,114,99,108,101,115,0);
         settingsQ = `${(libreanimatedR == String.fromCharCode(70,0) ? settingsQ.length : libreanimatedR.length)}`;
         schedulerz = [1 >> (Math.min(3, schedulerz.length))];
         jingdongl += `${schedulerz.length / (Math.max(5, jingdongl.length))}`;
         if (androidR) {
            break;
         }
      } while (androidR && (libreanimatedR == String.fromCharCode(97,0)));
      if (settingsQ.includes(`${libreanimatedR.length}`)) {
         libreanimatedR += `${settingsQ.length << (Math.min(Math.abs(3), 3))}`;
      }
      z_hashw /= Math.max(5, (flyer_ == String.fromCharCode(98,0) ? flyer_.length : parseInt(`${z_hashw}`)));
   if (!weiboc.includes(upgradeG.length)) {
       let libavutilw = String.fromCharCode(115,95,50,54,95,115,116,97,116,115,0);
       let nterstitialp = 5;
       let googleu = String.fromCharCode(115,97,110,105,116,121,95,53,95,56,50,0);
         nterstitialp <<= Math.min(Math.abs((libavutilw == String.fromCharCode(90,0) ? nterstitialp : libavutilw.length)), 2);
          let shrinkB: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,115,117,98,106,101,99,116,0),554], [String.fromCharCode(114,101,115,117,108,116,95,115,95,57,56,0),600]]);
         nterstitialp &= googleu.length;
         shrinkB.set(`${shrinkB.size}`, shrinkB.size % 1);
      for (let k = 0; k < 2; k++) {
         googleu += `${(libavutilw == String.fromCharCode(113,0) ? nterstitialp : libavutilw.length)}`;
      }
      let combinedT = 4915159 <= googleu.length;
      do {
          let eyeopenl = String.fromCharCode(112,97,114,97,108,108,101,108,95,108,95,57,49,0);
          let weatherY = 4;
          let libsgcoreG = 4.0;
         googleu += `${parseInt(`${libsgcoreG}`) | 3}`;
         eyeopenl = `${eyeopenl.length}`;
         weatherY %= Math.max(weatherY % (Math.max(8, eyeopenl.length)), 3);
         libsgcoreG /= Math.max(3, weatherY);
         if (combinedT) {
            break;
         }
      } while (combinedT && (3 > googleu.length));
      let codej = 7939553 <= nterstitialp;
      do {
         nterstitialp /= Math.max(5, (String.fromCharCode(65,0) == libavutilw ? nterstitialp : libavutilw.length));
         if (codej) {
            break;
         }
      } while (((3 << (Math.min(4, googleu.length))) < 3) && codej);
         libavutilw += "2";
      let watchnowbgj = nterstitialp >= 8109926;
      do {
         nterstitialp |= nterstitialp;
         if (watchnowbgj) {
            break;
         }
      } while (watchnowbgj && (nterstitialp < libavutilw.length));
      while (!googleu.endsWith(`${nterstitialp}`)) {
          let penaltygoall = 1.0;
          let crossV = String.fromCharCode(119,104,97,116,95,116,95,49,48,48,0);
          let sigmob_ = String.fromCharCode(105,110,99,111,109,105,110,103,95,106,95,52,55,0);
          let reactnativejsF: Array<any> = [89, 257, 442];
          let sheetF = 2;
         nterstitialp ^= sigmob_.length - reactnativejsF.length;
         penaltygoall += (String.fromCharCode(110,0) == crossV ? crossV.length : parseInt(`${penaltygoall}`));
         sigmob_ += `${sheetF}`;
         reactnativejsF.push(1);
         sheetF += crossV.length ^ sheetF;
         break;
      }
      for (let f = 0; f < 2; f++) {
         googleu = `${2 & googleu.length}`;
      }
      upgradeG.push(3 % (Math.max(9, googleu.length)));
   }
   if (5 > (upgradeG.length - weiboc.length)) {
       let targetn = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,57,95,55,48,0);
       let sharemodalr: Map<any, any> = new Map([[String.fromCharCode(116,95,55,54,0),String.fromCharCode(100,97,114,107,95,104,95,57,54,0)], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,122,95,54,53,0),String.fromCharCode(105,95,52,52,95,119,109,97,100,97,116,97,0)]]);
       let librrcU = String.fromCharCode(101,109,105,116,95,52,95,54,55,0);
       let profileframeZ = String.fromCharCode(99,95,57,95,105,97,100,115,116,0);
       let taiwanJ: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,102,97,109,105,108,121,0),114], [String.fromCharCode(111,95,52,48,95,109,117,116,97,116,101,0),719]]);
      for (let h = 0; h < 1; h++) {
          let configurem = 1.0;
          let downarrowk = 1.0;
          let baselinep: Map<any, any> = new Map([[String.fromCharCode(113,101,120,112,95,117,95,57,55,0),String.fromCharCode(116,111,112,105,99,97,108,95,107,95,57,50,0)], [String.fromCharCode(117,95,56,55,95,99,104,97,114,99,111,110,118,0),String.fromCharCode(109,95,50,52,95,108,115,102,108,115,112,0)], [String.fromCharCode(115,95,50,52,95,112,111,115,116,98,111,120,0),String.fromCharCode(98,95,57,48,95,108,97,122,105,108,121,0)]]);
          let libswscaleu = 3.0;
          let penaltyC: Map<any, any> = new Map([[String.fromCharCode(115,95,57,55,95,102,105,110,97,108,105,122,105,110,103,0),384], [String.fromCharCode(99,98,117,102,95,122,95,50,55,0),381], [String.fromCharCode(97,115,115,112,111,114,116,95,110,95,56,50,0),187]]);
         profileframeZ = `${penaltyC.size >> (Math.min(Math.abs(1), 5))}`;
         configurem -= parseFloat(`${baselinep.size % (Math.max(2, parseInt(`${downarrowk}`)))}`);
         downarrowk *= parseFloat(`${parseInt(`${libswscaleu}`)}`);
         baselinep.set(`${libswscaleu}`, parseInt(`${libswscaleu}`));
         penaltyC = new Map([[`${baselinep.size}`, parseInt(`${downarrowk}`) | 3]]);
      }
         targetn = `${3 >> (Math.min(3, librrcU.length))}`;
         profileframeZ = `${3 ^ taiwanJ.size}`;
      while (5 >= (profileframeZ.length * taiwanJ.size) || 5 >= (profileframeZ.length * taiwanJ.size)) {
         profileframeZ = `${librrcU.length}`;
         break;
      }
          let whiteH: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,104,97,108,102,0),731], [String.fromCharCode(108,95,49,54,95,100,105,114,101,99,116,111,114,121,0),786], [String.fromCharCode(116,95,52,49,95,115,104,111,119,105,110,103,0),141]]);
         sharemodalr.set(targetn, whiteH.size * targetn.length);
          let indexs = String.fromCharCode(112,95,57,50,95,98,101,108,111,110,103,0);
         taiwanJ = new Map([[profileframeZ, 3 - profileframeZ.length]]);
         indexs = "1";
      for (let p = 0; p < 1; p++) {
          let graphicsn = String.fromCharCode(114,97,115,116,101,114,105,122,97,116,105,111,110,95,118,95,53,0);
          let suggestionp: Array<any> = [96, 955, 27];
          let defaultlogo6: Map<any, any> = new Map([[String.fromCharCode(112,117,116,98,121,116,101,95,115,95,52,53,0),true ], [String.fromCharCode(117,95,55,53,95,101,120,112,0),true ], [String.fromCharCode(105,95,49,53,95,112,97,103,0),true ]]);
         profileframeZ = `${profileframeZ.length}`;
         graphicsn += `${suggestionp.length}`;
         suggestionp = [suggestionp.length];
         defaultlogo6.set(`${graphicsn}`, 3 - graphicsn.length);
      }
      for (let d = 0; d < 1; d++) {
         targetn = `${targetn.length | 2}`;
      }
         sharemodalr = new Map([[`${taiwanJ.size}`, taiwanJ.size >> (Math.min(profileframeZ.length, 5))]]);
      while (librrcU.startsWith(`${taiwanJ.size}`)) {
          let collectionJ = 2.0;
         librrcU += `${parseInt(`${collectionJ}`)}`;
         break;
      }
      if ((librrcU.length * 3) > 3 && (3 * sharemodalr.size) > 2) {
         librrcU = `${targetn.length ^ profileframeZ.length}`;
      }
      let time_h3S = 7568371 <= profileframeZ.length;
      do {
         profileframeZ = `${3 << (Math.min(3, Math.abs(taiwanJ.size)))}`;
         if (time_h3S) {
            break;
         }
      } while (time_h3S && (taiwanJ.size == 1));
         taiwanJ = new Map([[`${taiwanJ.size}`, librrcU.length]]);
      while (targetn.length < 2) {
         targetn = "1";
         break;
      }
       let r_unlockO = String.fromCharCode(105,102,97,99,101,95,122,95,50,55,0);
      upgradeG.push(taiwanJ.size);
   }
      pingT += `${weiboc.length ^ 1}`;

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

      reactnativeultimatelistviewj %= Math.max(weiboc.length, 3);
      upgradeG = [weiboc.length << (Math.min(4, Math.abs(reactnativeultimatelistviewj)))];
   for (let u = 0; u < 2; u++) {
      upgradeG = [3];
   }
      weiboc.push(reactnativeultimatelistviewj);
    ww_runtime.playlistClickAnalytics({
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

  const renderItem = useCallback(({ item, index }: wwCasting) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        
        ww_runtime.playlistClickAnalytics({
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
