import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { yys_BrightnessCopy, yys_Bing } from '@type/yys_libzeus';
import { playVod, viewPlaylistDetails } from '@redux/actions/yys_player_style';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '@static/images/toponLang.svg';
import VodCard from '../vod/yys_singapore';
import { useAppDispatch } from '@hooks/yys_frame';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import yys_event_common from '../../../Umeng/yys_event_common';

interface yys_ConfigureUimanager {
  playlist: yys_BrightnessCopy;
  titleStyle?: TextStyle;
}

type yys_Mbsplash = {
  item: yys_Bing;
  index: number;
};

function VodPlaylist({ playlist, titleStyle }: yys_ConfigureUimanager) {
  const { textVariants, spacing, colors, icons } = useTheme();
  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const viewMore = () => {
       let mbjscommonP = 4;
    let traminia = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,100,95,52,56,0);
    let teamp = String.fromCharCode(119,95,54,52,95,99,116,114,0);
    let selectionw = String.fromCharCode(113,117,97,110,116,105,122,101,114,95,100,95,56,57,0);
    let chinasamek = 4;
    let pageN = 1.0;
    let active9 = 1.0;
    let taiwan5 = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,50,95,50,56,0);
      pageN += (traminia == String.fromCharCode(86,0) ? traminia.length : parseInt(`${active9}`));
   for (let g = 0; g < 3; g++) {
       let libcxxcomponentsz: Array<any> = [String.fromCharCode(112,114,101,102,101,114,114,101,100,95,121,95,57,50,0), String.fromCharCode(119,95,57,55,95,103,97,116,104,101,114,0)];
       let overi = String.fromCharCode(102,101,109,97,108,101,95,122,95,50,55,0);
       let securityZ = 4.0;
      let libreanimatedr = 8096466 >= overi.length;
      do {
          let canvasN = 1.0;
          let macauR = String.fromCharCode(99,95,57,49,95,115,117,98,112,114,111,99,101,115,115,0);
         overi += `${parseInt(`${canvasN}`) << (Math.min(macauR.length, 5))}`;
         if (libreanimatedr) {
            break;
         }
      } while (libreanimatedr && (1 == (parseInt(`${securityZ}`) - 2) && (securityZ - 1.93) == 3.25));
      for (let b = 0; b < 3; b++) {
         securityZ /= Math.max(3, (overi == String.fromCharCode(68,0) ? parseInt(`${securityZ}`) : overi.length));
      }
         securityZ *= (String.fromCharCode(79,0) == overi ? overi.length : libcxxcomponentsz.length);
      for (let j = 0; j < 3; j++) {
         libcxxcomponentsz = [overi.length / (Math.max(3, libcxxcomponentsz.length))];
      }
      if (3 > overi.length) {
         libcxxcomponentsz = [2 >> (Math.min(2, overi.length))];
      }
          let liveq = String.fromCharCode(99,108,97,115,115,95,104,95,51,49,0);
          let pluss: Map<any, any> = new Map([[String.fromCharCode(99,95,51,51,95,105,110,118,111,107,101,0),true ], [String.fromCharCode(109,118,115,101,116,95,51,95,49,0),true ]]);
          let buildg: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,108,111,99,107,115,0),545], [String.fromCharCode(97,95,54,53,95,114,101,100,101,108,101,103,97,116,101,0),63]]);
         libcxxcomponentsz.push(buildg.size);
         liveq = `${liveq.length | pluss.size}`;
         pluss.set(`${liveq}`, 3 ^ pluss.size);
         buildg.set(liveq, 3);
      while (libcxxcomponentsz.includes(securityZ)) {
         securityZ *= overi.length ^ 1;
         break;
      }
         securityZ /= Math.max(overi.length ^ 1, 3);
      if (!libcxxcomponentsz.includes(securityZ)) {
         libcxxcomponentsz = [(overi == String.fromCharCode(90,0) ? overi.length : parseInt(`${securityZ}`))];
      }
      chinasamek /= Math.max(parseInt(`${securityZ}`) | overi.length, 3);
   }
   while (5 > teamp.length) {
       let neonc: Array<any> = [538, 577, 581];
       let reminderv: Map<any, any> = new Map([[String.fromCharCode(114,101,97,112,95,102,95,50,0),274], [String.fromCharCode(102,95,55,95,109,111,118,101,99,98,0),38], [String.fromCharCode(97,100,118,97,110,99,105,110,103,95,100,95,53,53,0),711]]);
      while (reminderv.get(`${neonc.length}`) == null) {
          let clubC = String.fromCharCode(99,101,108,108,95,110,95,55,55,0);
          let changeq = String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,114,95,56,52,0);
         neonc.push(2);
         clubC = `${1 & clubC.length}`;
         changeq += "2";
         break;
      }
         reminderv.set(`${neonc.length}`, neonc.length | reminderv.size);
          let actionH = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,114,95,56,49,0);
         reminderv.set(`${neonc.length}`, neonc.length + 1);
         actionH += `${(String.fromCharCode(86,0) == actionH ? actionH.length : actionH.length)}`;
      if ((reminderv.size ^ 3) == 5 && (reminderv.size ^ 3) == 5) {
         neonc = [3 << (Math.min(5, Math.abs(reminderv.size)))];
      }
      while (4 <= (4 >> (Math.min(2, neonc.length))) || (4 >> (Math.min(3, neonc.length))) <= 1) {
          let rewardvideok = String.fromCharCode(97,112,115,95,50,95,54,55,0);
          let scrollview4 = String.fromCharCode(102,105,116,116,105,110,103,95,99,95,51,55,0);
         reminderv.set(scrollview4, neonc.length ^ scrollview4.length);
         rewardvideok = `${(String.fromCharCode(66,0) == rewardvideok ? rewardvideok.length : rewardvideok.length)}`;
         break;
      }
         neonc = [neonc.length << (Math.min(2, Math.abs(reminderv.size)))];
      selectionw = `${chinasamek}`;
      break;
   }
   if ((1.72 + active9) > 1.1) {
      mbjscommonP *= mbjscommonP / 2;
   }

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

   while (1.27 > (1.1 / (Math.max(3, pageN))) || 3 > (2 * chinasamek)) {
       let libglogq = true;
       let buildn: Array<any> = [637, 7];
       let selectR = true;
       let buttono = true;
       let splash0: Array<any> = [951, 984];
       let bottom3: Array<any> = [705, 160, 643];
          let floaterP = String.fromCharCode(103,114,97,100,105,101,110,116,95,57,95,51,51,0);
          let leagueA: Array<any> = [55, 938];
         buildn.push((buildn.length ^ (libglogq ? 4 : 5)));
         floaterP = "2";
         leagueA = [2 + floaterP.length];
      let utilsD = splash0.length <= 5419893;
      do {
          let actionsQ = String.fromCharCode(97,114,116,105,99,108,101,95,108,95,51,53,0);
          let fadfdeebbbfdabbbabdadfaaddaaC = 2;
          let championu = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,106,95,54,52,0);
          let libfbR: Array<any> = [841, 434];
          let castingf = true;
         splash0.push((String.fromCharCode(122,0) == championu ? (buttono ? 2 : 5) : championu.length));
         actionsQ += `${fadfdeebbbfdabbbabdadfaaddaaC}`;
         fadfdeebbbfdabbbabdadfaaddaaC ^= 2;
         libfbR.push(libfbR.length);
         castingf = !castingf;
         if (utilsD) {
            break;
         }
      } while ((splash0.length == 3) && utilsD);
      for (let x = 0; x < 2; x++) {
          let pressureM: Array<any> = [816, 746, 841];
          let canvasE = String.fromCharCode(104,95,51,51,95,114,101,116,114,105,101,100,0);
          let unimplementedviewW = 5.0;
          let twitterM = String.fromCharCode(101,95,52,50,95,97,114,110,114,0);
          let stats3 = 1.0;
         buttono = (bottom3.length / (Math.max(splash0.length, 8))) > 15;
         pressureM = [3 << (Math.min(Math.abs(parseInt(`${unimplementedviewW}`)), 2))];
         canvasE = `${canvasE.length / 1}`;
         unimplementedviewW += parseFloat(`${parseInt(`${unimplementedviewW}`) & 1}`);
         twitterM = `${parseInt(`${stats3}`) << (Math.min(twitterM.length, 2))}`;
         stats3 += parseInt(`${unimplementedviewW}`);
      }
         buildn = [(3 ^ (selectR ? 5 : 5))];
       let valuesd = String.fromCharCode(118,95,55,56,95,115,116,117,98,98,101,100,0);
       let videon = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,57,95,51,57,0);
       let sideq: Array<any> = [150, 272, 406];
         buttono = sideq.length > 34 || !buttono;
      while (3 > (bottom3.length << (Math.min(Math.abs(1), 3)))) {
         bottom3.push(((buttono ? 3 : 3) - (selectR ? 2 : 1)));
         break;
      }
      for (let m = 0; m < 1; m++) {
          let librrcj = String.fromCharCode(116,105,110,121,95,57,95,56,51,0);
          let largeR = true;
          let libjsijniprofilere = String.fromCharCode(100,97,116,97,95,113,95,55,57,0);
         buildn = [((largeR ? 3 : 5))];
         librrcj = `${libjsijniprofilere.length}`;
         largeR = librrcj == libjsijniprofilere;
      }
         bottom3 = [((selectR ? 5 : 3) * sideq.length)];
         libglogq = splash0.length > buildn.length;
      chinasamek /= Math.max(mbjscommonP, 5);
      break;
   }
      chinasamek %= Math.max(1, teamp.length);
   while (1 < (parseInt(`${active9}`) * selectionw.length) || 2 < (selectionw.length >> (Math.min(Math.abs(1), 4)))) {
      active9 *= parseFloat(`${selectionw.length}`);
      break;
   }
   for (let s = 0; s < 1; s++) {
      chinasamek *= mbjscommonP;
   }
    yys_event_common.playlistClickAnalytics({
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

  const renderItem = useCallback(({ item, index }: yys_Mbsplash) => (
    <VodCard
      vod_name={item.vod_name}
      vodImageStyle={{ width: 120, height: 180 }}
      vod_pic={item.vod_pic}
      onPress={() => {
        dispatch(playVod(item));
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        
        yys_event_common.playlistClickAnalytics({
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
