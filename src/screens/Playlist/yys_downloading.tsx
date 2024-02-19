import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/yys_matches';
import { useTheme } from '@react-navigation/native';
import { useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import FavoritePlaylistButton from '../../components/button/yys_notificationfillempty_shielddone_button';
import { RootStackScreenProps } from '@type';
import VodWithDescriptionList from '../../components/vod/yys_styles';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';

function PlaylistDetail({ navigation }: RootStackScreenProps<'PlaylistDetail'>) {
  const { textVariants, colors, spacing } = useTheme();
  const playlistReducer = useAppSelector(
    ({ vodPlaylistReducer }: yysIconclosewhiteBaiduads) => vodPlaylistReducer,
  );
  const playlist = playlistReducer?.playlistDetails?.playlist;

  
  useEffect(() => {
    if (playlist !== null) {
      yys_giftbutton_footballtrophy.playlistTopicsViewsAnalytics({
        topic_id: playlist.topic_id.toString(),
        topic_name: playlist.topic_name,
      });
    }
  }, []);

  const onClickCatalogVideo = useCallback(() => {
       let tramini6 = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,114,95,56,55,0);
    let activeZ = 0.0;
    let calendar8 = 5;
    let mbnativec = 0.0;
    let buttonU = 3.0;
    let redirecto = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,113,95,49,0);
    let sidee: Map<any, any> = new Map([[String.fromCharCode(98,95,57,55,95,109,98,112,114,101,100,0),700], [String.fromCharCode(97,95,54,53,95,114,101,109,97,112,0),898]]);
    let libtob4 = 4.0;
    let cricketk = String.fromCharCode(115,111,99,107,101,116,115,95,57,95,54,55,0);
    let sellmathbackgroundp: Array<any> = [902, 125];
    let modal0 = 1;
    let libjsijniprofilerM = true;
    let penaltygoalQ = 3.0;
    let moduleh = String.fromCharCode(100,118,118,105,100,101,111,95,53,95,54,50,0);
      tramini6 += `${3 - redirecto.length}`;
   let watch7 = 9788819.0 <= buttonU;
   do {
      buttonU *= 2 % (Math.max(3, cricketk.length));
      if (watch7) {
         break;
      }
   } while (watch7 && (buttonU <= 5.50));
      buttonU -= parseInt(`${libtob4}`);
      sellmathbackgroundp.push(cricketk.length);
      cricketk += `${parseInt(`${libtob4}`)}`;
   let whistleorange6 = tramini6 == String.fromCharCode(52,111,109,95,98,120,108,100,99,54,0);
   do {
      tramini6 += `${parseInt(`${libtob4}`) >> (Math.min(cricketk.length, 4))}`;
      if (whistleorange6) {
         break;
      }
   } while (whistleorange6 && (cricketk != tramini6));
       let modex = true;
       let stationK = String.fromCharCode(110,95,52,49,95,112,97,114,101,110,0);
      if (stationK.includes(`${modex}`)) {
         stationK = `${(String.fromCharCode(102,0) == stationK ? stationK.length : (modex ? 1 : 2))}`;
      }
          let largesoundi = false;
         modex = !largesoundi;
      if (modex) {
         stationK = "3";
      }
       let dependenciesT = false;
       let informationh = true;
         stationK += `${(stationK == String.fromCharCode(117,0) ? stationK.length : (modex ? 4 : 4))}`;
       let smallorangemanb = String.fromCharCode(119,95,50,49,95,110,116,101,114,110,97,108,0);
      modal0 /= Math.max(2, 1);

    if (playlist !== null) {

      sellmathbackgroundp.push(sellmathbackgroundp.length / 2);
   let line7 = 8954132.0 <= mbnativec;
   do {
      mbnativec /= Math.max(1, parseFloat(`${1 * modal0}`));
      if (line7) {
         break;
      }
   } while ((5 == cricketk.length) && line7);
   if ((3.5 + libtob4) <= 3.32) {
      libtob4 += parseFloat(`${cricketk.length - parseInt(`${mbnativec}`)}`);
   }
      activeZ /= Math.max(1, sidee.size);
      tramini6 += "3";
   let phonen = String.fromCharCode(48,116,111,106,56,119,109,107,0) == redirecto;
   do {
      redirecto += `${modal0}`;
      if (phonen) {
         break;
      }
   } while ((!redirecto.endsWith(`${mbnativec}`)) && phonen);
      buttonU *= calendar8;
      yys_giftbutton_footballtrophy.playlistTopicsClickAnalytics({
        topic_id: playlist.topic_id.toString(),
        topic_name: playlist.topic_name,
      });
    }
  }, [playlist]);
  

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title={playlist?.topic_name}
        
        />
        {playlist && (
          <View style={{ gap: spacing.s, paddingBottom: 230 }}>
            <View style={styles.header}>
              <Text
                numberOfLines={3}
                style={{
                  ...textVariants.small,
                  color: colors.text,
                  flex: 1,
                  marginRight: spacing.l,
                }}>
                {playlist?.topic_blurb}
              </Text>
              <FavoritePlaylistButton playlist={playlist} />
            </View>
            <Text
              style={{
                ...textVariants.small,
              }}>{`(共${playlist.vod_list.length}部)`}</Text>
            <VodWithDescriptionList
              vodList={playlist.vod_list}
              onClickCatalogVideo={onClickCatalogVideo}
            />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};

export default memo(PlaylistDetail);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
