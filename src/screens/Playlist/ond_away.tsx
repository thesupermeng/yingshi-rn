import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/container/ypy_fast';
import { useTheme } from '@react-navigation/native';
import { useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import FavoritePlaylistButton from '../../components/button/ep_video_thailand_button';
import { RootStackScreenProps } from '@type/vrm_thailand';
import VodWithDescriptionList from '../../components/vod/of_main_sheet';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';

function PlaylistDetail({ navigation }: RootStackScreenProps<'PlaylistDetail'>) {
  const { textVariants, colors, spacing } = useTheme();
  const playlistReducer = useAppSelector(
    ({ vodPlaylistReducer }: PSmall) => vodPlaylistReducer,
  );
  const playlist = playlistReducer?.playlistDetails?.playlist;

  
  useEffect(() => {
    if (playlist !== null) {
      umb_center_carousel.playlistTopicsViewsAnalytics({
        topic_id: playlist.topic_id.toString(),
        topic_name: playlist.topic_name,
      });
    }
  }, []);

  const onClickCatalogVideo = useCallback(() => {
       let helperB = 3;
    let entryR = String.fromCharCode(109,105,110,105,109,97,108,108,121,95,118,95,54,54,0);
    let alertA = String.fromCharCode(108,95,52,54,95,115,117,98,120,0);
    let about9 = 4.0;
    let ewardedU = String.fromCharCode(101,95,51,52,0);
    let assistG = 3.0;
    let handlerZ = 0.0;
    let navigationx = String.fromCharCode(98,95,51,51,95,104,97,110,100,108,101,0);
    let default_kX = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,53,95,53,53,0);
    let showc: Array<any> = [141, 996, 960];
    let playE = String.fromCharCode(101,95,49,52,95,102,108,116,117,105,110,116,0);
    let configO = String.fromCharCode(117,95,52,55,95,115,101,108,101,99,116,111,112,0);
    let servicey = 5.0;
   if (alertA.length == 5) {
       let circles: Array<any> = [296, 811, 15];
       let pageb = 5.0;
          let short_cK = String.fromCharCode(105,95,49,57,95,115,101,114,105,97,108,105,122,101,100,0);
          let navigationo = String.fromCharCode(114,95,51,50,95,109,97,105,110,115,116,97,103,101,0);
         circles = [parseInt(`${pageb}`)];
         short_cK += `${navigationo.length % (Math.max(4, short_cK.length))}`;
         navigationo = `${(short_cK == String.fromCharCode(67,0) ? navigationo.length : short_cK.length)}`;
         pageb *= parseFloat(`${1}`);
      let playliste = 8151135.0 <= pageb;
      do {
         pageb *= parseFloat(`${circles.length}`);
         if (playliste) {
            break;
         }
      } while ((5 >= circles.length) && playliste);
         circles.push(circles.length);
      if ((circles.length % 1) <= 3 || (pageb - 4.74) <= 5.27) {
          let streaming_ = false;
          let statisticsh = 0;
          let emptyd = true;
          let hookm: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,115,121,110,99,109,97,114,107,101,114,0),31], [String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,121,95,54,54,0),242]]);
         pageb -= parseFloat(`${2}`);
         streaming_ = hookm.get(`${statisticsh}`) != null;
         statisticsh ^= 3;
         emptyd = 27 == statisticsh || 27 == hookm.size;
      }
      if (!circles.includes(pageb)) {
         circles.push(1);
      }
      alertA += "2";
   }
   let reducerc = 7389339.0 >= assistG;
   do {
      assistG += entryR.length & parseInt(`${handlerZ}`);
      if (reducerc) {
         break;
      }
   } while (((4.65 - assistG) < 2.18 && 2 < (4 >> (Math.min(5, default_kX.length)))) && reducerc);
      handlerZ -= 3;
      ewardedU += `${alertA.length}`;
      entryR = `${configO.length}`;
       let productp = 4.0;
       let lineC = String.fromCharCode(120,95,50,57,95,114,116,112,0);
       let room0 = String.fromCharCode(109,111,122,106,112,101,103,95,111,95,53,53,0);
       let checkboxi = 3.0;
       let predictionu = 4.0;
      for (let b = 0; b < 3; b++) {
          let string9: Map<any, any> = new Map([[String.fromCharCode(114,108,118,108,99,95,117,95,49,50,0),858], [String.fromCharCode(106,95,54,56,95,99,111,109,109,105,116,0),313]]);
         lineC = `${parseInt(`${predictionu}`)}`;
         string9 = new Map([[`${string9.size}`, string9.size - string9.size]]);
      }
      let znews3 = productp >= 8531245.0;
      do {
         productp -= parseFloat(`${1 + parseInt(`${predictionu}`)}`);
         if (znews3) {
            break;
         }
      } while ((2 < (lineC.length << (Math.min(Math.abs(5), 2)))) && znews3);
      while ((5.62 - checkboxi) == 1.15 || (checkboxi - predictionu) == 5.62) {
         predictionu -= parseFloat(`${parseInt(`${productp}`)}`);
         break;
      }
      for (let o = 0; o < 3; o++) {
         lineC += `${parseInt(`${productp}`) & 3}`;
      }
          let fullt = String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,95,112,95,51,49,0);
         productp /= Math.max(2, parseFloat(`${3 << (Math.min(3, fullt.length))}`));
      let configurey = productp >= 9661512.0;
      do {
         productp /= Math.max(4, parseFloat(`${parseInt(`${checkboxi}`) * 3}`));
         if (configurey) {
            break;
         }
      } while (configurey && ((productp + 1.39) >= 4.50));
      let usernameV = 6045968.0 <= checkboxi;
      do {
          let faviconc = String.fromCharCode(116,118,100,99,95,98,95,54,0);
          let blacklist1 = 0.0;
          let greenU = String.fromCharCode(97,115,115,101,114,116,95,50,95,49,53,0);
          let light3 = false;
          let layouto: Map<any, any> = new Map([[String.fromCharCode(97,95,57,55,95,105,110,116,120,120,0),198], [String.fromCharCode(99,111,108,111,114,115,95,122,95,53,0),541], [String.fromCharCode(100,95,51,56,95,109,97,107,101,109,97,99,112,107,103,0),414]]);
         checkboxi /= Math.max(3, parseFloat(`${layouto.size % 2}`));
         faviconc = `${parseInt(`${blacklist1}`) | 1}`;
         blacklist1 /= Math.max(5, ((light3 ? 2 : 4)));
         greenU = `${((light3 ? 2 : 4))}`;
         layouto = new Map([[faviconc, parseInt(`${blacklist1}`)]]);
         if (usernameV) {
            break;
         }
      } while ((2.77 > checkboxi) && usernameV);
         room0 = `${(String.fromCharCode(112,0) == lineC ? parseInt(`${predictionu}`) : lineC.length)}`;
      servicey *= (parseFloat(`${String.fromCharCode(105,0) == entryR ? entryR.length : parseInt(`${assistG}`)}`));
   let moviesS = ewardedU == String.fromCharCode(118,117,57,99,112,112,118,0);
   do {
       let leftb = false;
       let sharedf: Map<any, any> = new Map([[String.fromCharCode(99,95,54,50,95,108,97,117,110,99,104,101,115,0),false ], [String.fromCharCode(112,95,54,50,95,101,116,104,114,101,97,100,0),false ]]);
       let componentz: Array<any> = [250, 977];
       let overlayo = String.fromCharCode(114,116,99,95,50,95,52,51,0);
          let upgradeh = String.fromCharCode(115,105,122,101,109,109,95,113,95,53,55,0);
          let nterstitial6 = 5.0;
          let sliderg = 5.0;
         sharedf = new Map([[`${sliderg}`, parseInt(`${sliderg}`) * upgradeh.length]]);
         upgradeh += "3";
         nterstitial6 *= 1;
      while (!leftb) {
         leftb = !leftb && sharedf.size > 67;
         break;
      }
         sharedf.set(overlayo, overlayo.length);
          let areaJ = 4.0;
          let hookX = String.fromCharCode(108,95,49,48,95,110,101,103,97,116,105,118,101,0);
          let floatere = 1.0;
         sharedf = new Map([[`${sharedf.size}`, sharedf.size]]);
         areaJ *= parseInt(`${floatere}`) / (Math.max(7, parseInt(`${areaJ}`)));
         hookX = `${hookX.length << (Math.min(3, Math.abs(parseInt(`${areaJ}`))))}`;
         floatere /= Math.max(parseFloat(`${hookX.length}`), 2);
       let pointP = 1;
      for (let i = 0; i < 1; i++) {
         componentz.push((overlayo == String.fromCharCode(71,0) ? overlayo.length : componentz.length));
      }
      let yellowW = overlayo.length <= 6855482;
      do {
         overlayo += "1";
         if (yellowW) {
            break;
         }
      } while ((overlayo.startsWith(`${leftb}`)) && yellowW);
      if (overlayo.length == 1 && leftb) {
         leftb = !leftb || sharedf.size > 24;
      }
      let alertZ = 9724002 >= pointP;
      do {
         pointP ^= (overlayo == String.fromCharCode(101,0) ? overlayo.length : componentz.length);
         if (alertZ) {
            break;
         }
      } while ((4 <= (pointP + 5)) && alertZ);
      for (let k = 0; k < 1; k++) {
         overlayo += `${overlayo.length}`;
      }
      if ((componentz.length >> (Math.min(overlayo.length, 4))) > 2 || (componentz.length >> (Math.min(Math.abs(2), 2))) > 1) {
         componentz = [overlayo.length];
      }
          let reminderb: Map<any, any> = new Map([[String.fromCharCode(117,95,56,52,95,103,114,97,118,105,116,121,0),833], [String.fromCharCode(97,95,55,57,95,105,116,117,110,101,115,0),967]]);
         sharedf.set(`${pointP}`, 2);
         reminderb.set(`${reminderb.size}`, reminderb.size);
      ewardedU += `${componentz.length}`;
      if (moviesS) {
         break;
      }
   } while (moviesS && (ewardedU.length < 1));
      entryR += `${2 * parseInt(`${assistG}`)}`;
       let muted8: Array<any> = [String.fromCharCode(117,95,51,95,105,116,101,114,97,116,105,118,101,0), String.fromCharCode(98,97,114,114,101,116,116,95,113,95,51,50,0)];
       let downloadY: Map<any, any> = new Map([[String.fromCharCode(116,95,51,57,95,98,97,99,107,117,112,0),476], [String.fromCharCode(112,114,110,103,95,112,95,52,53,0),334]]);
      let readZ = muted8.length <= 8525099;
      do {
         muted8 = [downloadY.size << (Math.min(muted8.length, 4))];
         if (readZ) {
            break;
         }
      } while (readZ && ((3 + muted8.length) >= 3 && 3 >= (3 + muted8.length)));
       let sheet5 = 5.0;
       let windI = 1.0;
      for (let b = 0; b < 3; b++) {
         downloadY = new Map([[`${downloadY.size}`, downloadY.size + 1]]);
      }
         muted8 = [3 - downloadY.size];
         muted8.push(3 + downloadY.size);
      if ((sheet5 * windI) > 2.74 || 2.74 > (windI * sheet5)) {
         sheet5 += 1 & parseInt(`${sheet5}`);
      }
      showc = [1];

    if (playlist !== null) {

   for (let g = 0; g < 3; g++) {
      showc = [alertA.length];
   }
   while (playE.endsWith(`${default_kX.length}`)) {
      playE += `${parseInt(`${about9}`)}`;
      break;
   }
       let changeN = true;
       let long_2tr = false;
      while (long_2tr) {
         long_2tr = !changeN;
         break;
      }
      let projectU = long_2tr ? !long_2tr : long_2tr;
      do {
         long_2tr = changeN;
         if (projectU) {
            break;
         }
      } while (projectU && (long_2tr || changeN));
          let lineh: Array<any> = [String.fromCharCode(101,95,57,54,95,115,119,105,112,101,100,0), String.fromCharCode(97,112,101,116,97,103,95,119,95,50,52,0)];
         long_2tr = (changeN ? long_2tr : changeN);
         lineh = [lineh.length];
      let verticalk = long_2tr ? !long_2tr : long_2tr;
      do {
          let single7: Array<any> = [38, 137];
         long_2tr = !long_2tr;
         single7.push(1);
         if (verticalk) {
            break;
         }
      } while ((changeN) && verticalk);
      for (let d = 0; d < 3; d++) {
          let dialogi = String.fromCharCode(98,95,56,51,95,100,110,120,104,100,101,110,99,0);
          let topicW = false;
          let icon0 = true;
          let membershipc = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,110,95,54,56,0);
          let detail2 = true;
         long_2tr = !membershipc.includes(`${detail2}`);
         dialogi = `${((topicW ? 5 : 5) + (icon0 ? 3 : 3))}`;
         topicW = (!topicW ? !icon0 : !topicW);
         membershipc += `${((icon0 ? 4 : 1) ^ (topicW ? 5 : 4))}`;
         detail2 = icon0;
      }
         changeN = !changeN || long_2tr;
      helperB += alertA.length - parseInt(`${about9}`);
   for (let u = 0; u < 3; u++) {
      handlerZ -= (String.fromCharCode(89,0) == default_kX ? default_kX.length : helperB);
   }
      handlerZ -= parseInt(`${about9}`) << (Math.min(playE.length, 2));
       let sportD = 1;
       let diceg: Array<any> = [791, 306];
       let otherX = 1.0;
         otherX -= 3;
      let disconnectedd = sportD <= 8525921;
      do {
         sportD |= diceg.length;
         if (disconnectedd) {
            break;
         }
      } while (disconnectedd && (1 <= (sportD / 3) || 1 <= (diceg.length / (Math.max(3, 9)))));
         diceg.push(diceg.length);
      if ((diceg.length % 2) < 1 && 2 < (sportD % (Math.max(diceg.length, 10)))) {
         diceg.push(sportD % (Math.max(2, diceg.length)));
      }
       let termsi = true;
         otherX += 2 + sportD;
      let whatsappw = termsi ? !termsi : termsi;
      do {
          let leftp = String.fromCharCode(122,101,114,111,98,108,111,98,95,52,95,54,51,0);
          let spinnerx = 3.0;
         termsi = otherX > 58.39 && 58.39 > spinnerx;
         leftp += "3";
         spinnerx -= leftp.length & leftp.length;
         if (whatsappw) {
            break;
         }
      } while (whatsappw && ((sportD << (Math.min(Math.abs(5), 1))) == 3 || termsi));
       let nterstitialX = 5.0;
      if (sportD >= diceg.length) {
          let bottomr = String.fromCharCode(118,95,52,51,95,102,97,100,101,111,117,116,0);
          let uploadR = 1.0;
         diceg = [parseInt(`${uploadR}`) + 2];
         bottomr = `${bottomr.length & 3}`;
         uploadR *= 2;
      }
      showc = [(String.fromCharCode(72,0) == alertA ? parseInt(`${handlerZ}`) : alertA.length)];
      about9 -= ewardedU.length % (Math.max(1, parseInt(`${about9}`)));
   for (let i = 0; i < 3; i++) {
      assistG /= Math.max(helperB, 3);
   }
   if (default_kX.includes(`${assistG}`)) {
       let list0 = 0;
       let acceptedl = 1.0;
       let verticalU = String.fromCharCode(117,95,49,53,95,107,117,107,105,0);
       let moviesM = String.fromCharCode(106,115,116,121,112,101,95,120,95,56,55,0);
       let sinaA = String.fromCharCode(98,111,100,105,101,115,95,97,95,53,48,0);
         list0 %= Math.max(4, list0);
         acceptedl -= parseFloat(`${moviesM.length - 2}`);
         acceptedl -= parseFloat(`${3 / (Math.max(2, verticalU.length))}`);
       let singaporey = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,111,95,52,54,0);
       let privacyf = String.fromCharCode(108,95,55,57,95,115,104,111,114,116,99,117,116,115,0);
       let targetg: Array<any> = [258, 266];
      for (let q = 0; q < 1; q++) {
         verticalU += `${1 ^ privacyf.length}`;
      }
         sinaA = `${verticalU.length}`;
          let yingl = String.fromCharCode(120,95,49,51,95,100,105,118,105,100,101,110,100,0);
          let analyticL = true;
          let inactiveD = 4.0;
         acceptedl *= parseFloat(`${2}`);
         yingl = `${((analyticL ? 3 : 1) & parseInt(`${inactiveD}`))}`;
         analyticL = yingl.length >= 60 || 30.65 >= inactiveD;
      if (sinaA != String.fromCharCode(48,0)) {
         verticalU += `${parseInt(`${acceptedl}`) >> (Math.min(sinaA.length, 1))}`;
      }
      if (3 <= verticalU.length) {
         verticalU += `${list0 % (Math.max(targetg.length, 9))}`;
      }
       let loginv = 0.0;
          let flyerr: Array<any> = [787, 971];
          let modalD = true;
          let awayu = String.fromCharCode(99,111,99,103,95,108,95,55,50,0);
         moviesM += `${3 + verticalU.length}`;
         flyerr = [(String.fromCharCode(113,0) == awayu ? (modalD ? 3 : 2) : awayu.length)];
         modalD = !modalD || awayu.length >= 20;
      for (let c = 0; c < 3; c++) {
          let profileK = false;
          let backe = true;
          let turnk = String.fromCharCode(111,117,116,112,117,116,113,95,53,95,54,54,0);
         privacyf += "1";
         profileK = !profileK;
         backe = (((!profileK ? 11 : turnk.length) ^ turnk.length) < 11);
      }
      let rulesm = String.fromCharCode(51,103,99,0) == verticalU;
      do {
         verticalU += `${2 | singaporey.length}`;
         if (rulesm) {
            break;
         }
      } while ((verticalU.length < list0) && rulesm);
      for (let d = 0; d < 3; d++) {
         list0 >>= Math.min(Math.abs(singaporey.length + sinaA.length), 2);
      }
      default_kX += `${navigationx.length}`;
   }
      umb_center_carousel.playlistTopicsClickAnalytics({
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
