import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/yys_executor_expand';
import { useTheme } from '@react-navigation/native';
import { useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import FavoritePlaylistButton from '../../components/button/yys_catagory_button';
import { RootStackScreenProps } from '@type/yys_settings';
import VodWithDescriptionList from '../../components/vod/yys_abidetect_libavdevice';
import yys_event_common from '../../../Umeng/yys_event_common';

function PlaylistDetail({ navigation }: RootStackScreenProps<'PlaylistDetail'>) {
  const { textVariants, colors, spacing } = useTheme();
  const playlistReducer = useAppSelector(
    ({ vodPlaylistReducer }: yys_MintegralLibavdevice) => vodPlaylistReducer,
  );
  const playlist = playlistReducer?.playlistDetails?.playlist;

  
  useEffect(() => {
    if (playlist !== null) {
      yys_event_common.playlistTopicsViewsAnalytics({
        topic_id: playlist.topic_id.toString(),
        topic_name: playlist.topic_name,
      });
    }
  }, []);

  const onClickCatalogVideo = useCallback(() => {
       let searchbarY = 4.0;
    let renderz = String.fromCharCode(120,95,53,57,95,114,101,115,97,109,112,0);
    let plusQ = 3.0;
    let default_ul = true;
    let customz: Map<any, any> = new Map([[String.fromCharCode(111,95,54,52,95,121,99,111,99,103,114,103,98,97,0),476], [String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,110,95,55,54,0),76]]);
    let areaV = false;
    let libsentry9 = 4.0;
    let downloader7 = String.fromCharCode(99,108,99,112,95,103,95,48,0);
    let typesW: Array<any> = [502, 163];
    let current_ = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,108,95,51,55,0);
    let sentrym = false;
      default_ul = plusQ < searchbarY;
   if (5 == renderz.length && default_ul) {
      default_ul = !default_ul;
   }
      current_ = `${(String.fromCharCode(99,0) == current_ ? parseInt(`${searchbarY}`) : current_.length)}`;
       let minii = true;
       let stylea = String.fromCharCode(115,101,110,100,116,111,95,98,95,56,52,0);
         stylea = `${((minii ? 4 : 3))}`;
          let nativemodulem: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,116,101,115,116,114,101,115,117,108,116,0),628], [String.fromCharCode(100,101,108,97,121,95,103,95,49,56,0),613], [String.fromCharCode(102,95,55,49,95,119,97,116,99,104,101,100,0),451]]);
          let expandY = 1.0;
         minii = nativemodulem.size <= 48;
         nativemodulem = new Map([[`${expandY}`, 2]]);
         expandY *= 3;
       let invitep = true;
         invitep = !invitep;
          let fieldp: Map<any, any> = new Map([[String.fromCharCode(115,95,51,55,95,99,111,108,108,101,99,116,105,111,110,115,0),587], [String.fromCharCode(114,95,53,95,116,111,112,109,111,115,116,0),346]]);
          let leagueG = 1;
         stylea += `${stylea.length & leagueG}`;
         fieldp = new Map([[`${fieldp.size}`, 2 + fieldp.size]]);
         leagueG /= Math.max(fieldp.size, 4);
         stylea += `${1 - stylea.length}`;
      customz = new Map([[stylea, (stylea.length << (Math.min(4, Math.abs((areaV ? 5 : 4)))))]]);
   if (typesW.length == searchbarY) {
      typesW = [(1 << (Math.min(5, Math.abs((default_ul ? 2 : 5)))))];
   }
       let actionsL = String.fromCharCode(114,103,98,116,111,121,118,95,121,95,55,57,0);
       let questh: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,95,52,95,49,48,48,0),false ], [String.fromCharCode(107,95,56,49,95,110,101,109,111,110,105,99,0),false ], [String.fromCharCode(115,104,97,100,111,119,115,95,103,95,51,51,0),true ]]);
      let rnewinterstitialp = String.fromCharCode(100,50,95,0) == actionsL;
      do {
         actionsL = "2";
         if (rnewinterstitialp) {
            break;
         }
      } while (((questh.size / (Math.max(1, actionsL.length))) == 4 || 1 == (4 / (Math.max(6, actionsL.length)))) && rnewinterstitialp);
         actionsL += `${questh.size}`;
      for (let t = 0; t < 3; t++) {
          let buffer6 = 0.0;
         questh.set(actionsL, actionsL.length - 3);
         buffer6 -= parseInt(`${buffer6}`);
      }
          let dragK = String.fromCharCode(98,97,108,97,110,99,101,115,95,101,95,52,49,0);
         actionsL = "2";
         dragK = "2";
         actionsL += `${1 - questh.size}`;
      let videocommono = questh.size <= 5497538;
      do {
          let whistleX = 3;
          let forwardN = 3.0;
          let dataS = String.fromCharCode(105,95,51,52,0);
          let foreground4 = 3;
         questh = new Map([[actionsL, dataS.length + actionsL.length]]);
         whistleX ^= foreground4;
         forwardN /= Math.max(parseFloat(`${3 ^ whistleX}`), 4);
         dataS += `${parseInt(`${forwardN}`) << (Math.min(4, Math.abs(2)))}`;
         foreground4 /= Math.max(3, foreground4 ^ parseInt(`${forwardN}`));
         if (videocommono) {
            break;
         }
      } while (videocommono && (5 < (5 ^ questh.size) && 3 < (questh.size ^ 5)));
      downloader7 = `${questh.size}`;
   for (let c = 0; c < 3; c++) {
      current_ += `${1 ^ customz.size}`;
   }

    if (playlist !== null) {

   let gradler = 6456887 <= typesW.length;
   do {
      typesW = [current_.length];
      if (gradler) {
         break;
      }
   } while ((5.52 <= (libsentry9 * 3.63) && 4.5 <= (libsentry9 * 3.63)) && gradler);
   while ((3 / (Math.max(1, renderz.length))) > 5 || 3 > (parseInt(`${plusQ}`) + renderz.length)) {
      renderz = `${(renderz.length % (Math.max(3, (default_ul ? 4 : 2))))}`;
      break;
   }
      current_ = "1";
      customz = new Map([[`${customz.size}`, (customz.size >> (Math.min(2, Math.abs((areaV ? 2 : 4)))))]]);
   let currentb = areaV ? !areaV : areaV;
   do {
      areaV = plusQ > 5.3;
      if (currentb) {
         break;
      }
   } while ((!default_ul) && currentb);
   let mountingu = current_ == String.fromCharCode(118,111,106,101,107,0);
   do {
      current_ = `${(typesW.length >> (Math.min(3, Math.abs((default_ul ? 3 : 4)))))}`;
      if (mountingu) {
         break;
      }
   } while ((!sentrym) && mountingu);
      plusQ += (parseFloat(`${typesW.length | (default_ul ? 3 : 5)}`));
      yys_event_common.playlistTopicsClickAnalytics({
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
