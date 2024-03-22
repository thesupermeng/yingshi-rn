import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { RBEmojiEwarded, XVSScoreDark } from '@type/wpk_long';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import RightIcon from '@static/images/readBingMode.svg';
import VodCard from '../vod/qee_dice';
import { useAppDispatch } from '@hooks/kg_index';
import { TextStyle } from 'react-native';
import appsFlyer from 'react-native-appsflyer';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';

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
       let downloadern = String.fromCharCode(102,95,49,53,95,115,119,105,112,101,100,0);
    let unselectedT = String.fromCharCode(108,95,50,56,95,109,117,116,117,97,108,0);
    let blackV = 1;
    let connectionW = false;
    let videoz = String.fromCharCode(109,117,114,109,117,114,95,122,95,50,51,0);
    let signinupi = 0;
    let vignettea = 5;
    let placement4: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,119,105,110,100,105,110,103,0),153], [String.fromCharCode(116,95,57,48,95,114,101,115,101,116,0),690], [String.fromCharCode(99,111,114,101,105,109,97,103,101,95,108,95,52,57,0),66]]);
    let danger4 = 3.0;
    let minij: Array<any> = [200, 120];
    let historyg = 1;
    let teamE = String.fromCharCode(100,95,56,52,95,115,111,117,114,99,101,99,108,105,112,0);
    let incidento = true;
    let next8 = String.fromCharCode(110,111,110,109,117,108,116,95,108,95,55,57,0);
    let combinedR = String.fromCharCode(112,95,52,51,95,111,116,104,101,114,110,97,109,101,0);
    let bottomH = String.fromCharCode(105,110,103,101,110,105,101,110,116,95,48,95,55,57,0);
    let verticalh: Array<any> = [String.fromCharCode(101,118,117,116,105,108,95,51,95,51,52,0), String.fromCharCode(97,116,116,114,105,98,117,116,101,95,56,95,50,50,0)];
    let bottom7 = 5.0;
    let kick4 = String.fromCharCode(117,95,53,95,112,111,105,115,115,111,110,0);
   if (downloadern.startsWith(`${vignettea}`)) {
      vignettea ^= videoz.length ^ 1;
   }
   if (1 > (1 >> (Math.min(2, Math.abs(historyg))))) {
      historyg ^= 1 | blackV;
   }
   while ((1 ^ placement4.size) > 1) {
      vignettea >>= Math.min(2, Math.abs(unselectedT.length + 1));
      break;
   }
       let stepN = String.fromCharCode(104,95,51,55,95,119,117,110,100,101,102,0);
       let pressurep = true;
       let membershipb = 3;
          let philippinesc = String.fromCharCode(116,104,117,109,98,115,95,105,95,51,49,0);
         pressurep = membershipb >= 10;
         philippinesc += `${philippinesc.length * philippinesc.length}`;
       let termsz = 0.0;
          let statsB = 4.0;
          let inviteL = 3.0;
         membershipb <<= Math.min(Math.abs(parseInt(`${termsz}`)), 5);
         statsB += parseInt(`${statsB}`) * 2;
         inviteL += 3 % (Math.max(5, parseInt(`${statsB}`)));
      if ((membershipb % (Math.max(1, 3))) >= 3 && (stepN.length % 1) >= 5) {
         membershipb <<= Math.min(5, Math.abs(stepN.length / (Math.max(2, 8))));
      }
         membershipb %= Math.max(2, stepN.length);
      let usernamef = stepN.length >= 8401547;
      do {
         stepN += `${3 * membershipb}`;
         if (usernamef) {
            break;
         }
      } while (usernamef && (5 > stepN.length));
         termsz += parseFloat(`${1}`);
       let bing_ = 5.0;
       let search2 = 1.0;
         stepN = `${2 - parseInt(`${bing_}`)}`;
      blackV &= videoz.length * minij.length;
       let playD: Map<any, any> = new Map([[String.fromCharCode(119,95,50,49,95,120,118,105,100,105,100,99,116,0),true ], [String.fromCharCode(101,118,111,108,118,101,95,54,95,50,0),false ], [String.fromCharCode(99,109,97,112,95,116,95,49,51,0),false ]]);
       let scoreV = String.fromCharCode(108,95,54,52,95,117,105,111,109,111,118,101,0);
       let singaporeL = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,56,95,50,52,0);
         singaporeL = `${(String.fromCharCode(66,0) == scoreV ? scoreV.length : playD.size)}`;
         scoreV = `${singaporeL.length + 2}`;
      let animationz = scoreV == String.fromCharCode(117,51,111,97,48,49,57,51,51,0);
      do {
         scoreV = `${scoreV.length % (Math.max(2, 8))}`;
         if (animationz) {
            break;
         }
      } while (animationz && (scoreV.length > 4));
      while (5 <= scoreV.length) {
          let mathL = String.fromCharCode(98,97,115,105,115,95,51,95,53,54,0);
          let floating8: Array<any> = [String.fromCharCode(115,101,116,116,105,116,108,101,95,119,95,57,52,0), String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,108,95,49,49,0)];
         scoreV += "1";
         mathL = `${mathL.length}`;
         floating8.push(mathL.length << (Math.min(5, floating8.length)));
         break;
      }
         playD = new Map([[singaporeL, singaporeL.length]]);
      for (let y = 0; y < 2; y++) {
         scoreV = "1";
      }
      if (singaporeL == scoreV) {
         scoreV += `${(singaporeL == String.fromCharCode(52,0) ? scoreV.length : singaporeL.length)}`;
      }
      if ((playD.size + 4) > 1 && (playD.size + 4) > 2) {
         playD = new Map([[`${playD.size}`, (String.fromCharCode(102,0) == scoreV ? scoreV.length : playD.size)]]);
      }
      while ((playD.size & 5) == 5 || (playD.size & singaporeL.length) == 5) {
          let changeQ = true;
          let ewardedM: Array<any> = [130, 499, 229];
          let hongkongz: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,114,101,115,112,111,110,115,101,115,0),539], [String.fromCharCode(106,95,56,49,95,109,97,105,108,99,104,105,109,112,0),869], [String.fromCharCode(111,95,52,48,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0),854]]);
          let register_h2 = true;
          let entry7 = String.fromCharCode(100,111,119,110,115,99,97,108,101,95,111,95,52,52,0);
         singaporeL += `${((register_h2 ? 3 : 5) & 2)}`;
         changeQ = !changeQ;
         ewardedM.push(2);
         hongkongz.set(`${changeQ}`, ((changeQ ? 2 : 2) / 1));
         register_h2 = ewardedM.includes(changeQ);
         entry7 += `${(1 ^ (changeQ ? 5 : 5))}`;
         break;
      }
      minij = [historyg * 3];
       let streamingf = String.fromCharCode(98,95,56,95,112,121,116,104,111,110,0);
         streamingf += `${(streamingf == String.fromCharCode(111,0) ? streamingf.length : streamingf.length)}`;
       let shirtj = 4.0;
         streamingf += "3";
      connectionW = incidento || danger4 > 73.72;

    dispatch(viewPlaylistDetails(playlist));
    navigator.navigate('PlaylistDetail', { topic_id: playlist.topic_id });

    

      downloadern = `${2 | vignettea}`;
   for (let m = 0; m < 2; m++) {
      vignettea %= Math.max(1, (unselectedT == String.fromCharCode(106,0) ? blackV : unselectedT.length));
   }
   for (let v = 0; v < 2; v++) {
      placement4 = new Map([[videoz, (next8 == String.fromCharCode(75,0) ? videoz.length : next8.length)]]);
   }
       let sideC = 2.0;
       let mini7 = 3.0;
       let subsm = 0.0;
         mini7 += parseFloat(`${parseInt(`${subsm}`)}`);
         sideC /= Math.max(parseFloat(`${parseInt(`${mini7}`) & 2}`), 3);
      if (subsm == 4.28) {
         mini7 -= parseFloat(`${2}`);
      }
       let unselectedi = 0.0;
       let launcht = 1.0;
      let typingA = 8218713.0 <= sideC;
      do {
         sideC -= parseFloat(`${parseInt(`${sideC}`) | 3}`);
         if (typingA) {
            break;
         }
      } while (typingA && (4.78 <= (5.41 + sideC)));
      while ((subsm / (Math.max(2.41, 7))) >= 1.79 || (subsm / (Math.max(sideC, 5))) >= 2.41) {
         sideC /= Math.max(parseFloat(`${parseInt(`${subsm}`)}`), 1);
         break;
      }
      for (let n = 0; n < 1; n++) {
          let signinupv = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,109,95,57,53,0);
          let appsi = true;
          let tumbnailT = 5.0;
          let downH = String.fromCharCode(115,112,108,105,116,116,101,100,95,100,95,57,54,0);
          let xvodH = 1.0;
         launcht /= Math.max(5, parseFloat(`${parseInt(`${tumbnailT}`) / (Math.max(5, signinupv.length))}`));
         signinupv = `${2 / (Math.max(1, parseInt(`${xvodH}`)))}`;
         appsi = downH.startsWith(`${appsi}`);
         tumbnailT -= downH.length % (Math.max(3, 1));
         xvodH -= parseFloat(`${downH.length / (Math.max(10, parseInt(`${xvodH}`)))}`);
      }
       let const_9lZ: Array<any> = [481, 688, 803];
          let whistleY = 2.0;
         sideC *= parseFloat(`${parseInt(`${whistleY}`)}`);
      incidento = danger4 == 76.37;
   while (!connectionW) {
      connectionW = signinupi >= 3 || connectionW;
      break;
   }
      incidento = historyg < minij.length;
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
        navigator.navigate('播放', {
          vod_id: item.vod_id,
        });

        
        umb_center_carousel.playlistClickAnalytics({
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
