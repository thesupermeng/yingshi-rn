import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import FavoritePlaylistButton from "../../components/button/yys_catagory_button";
import { RootStackScreenProps } from "@type/yys_settings";
import VodWithDescriptionList from "../../components/vod/yys_abidetect_libavdevice";
import yys_event_common from "../../../../Umeng/yys_event_common";

export default ({ navigation }: RootStackScreenProps<"PlaylistDetail">) => {
  const { textVariants, colors, spacing } = useTheme();
  const playlistReducer = useAppSelector(
    ({ vodPlaylistReducer }: yys_MintegralLibavdevice) => vodPlaylistReducer
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
       let floaterX = false;
    let fulld = 5.0;
    let moduleG = true;
    let guideY = 1;
    let singleN = String.fromCharCode(101,116,97,100,97,116,97,95,49,95,57,55,0);
    let uimanagerp = String.fromCharCode(118,95,55,57,95,117,115,97,98,108,101,0);
    let backgroundI = 4.0;
    let mountingW = 2.0;
    let targetU: Array<any> = [60, 61, 718];
   for (let p = 0; p < 3; p++) {
      mountingW *= parseInt(`${fulld}`);
   }
   for (let t = 0; t < 2; t++) {
      mountingW -= 3;
   }
   for (let j = 0; j < 2; j++) {
      fulld -= (parseInt(`${mountingW}`) * (moduleG ? 3 : 1));
   }
   if (moduleG && 4 > (4 | guideY)) {
      guideY += singleN.length;
   }
   if (2.52 < (uimanagerp.length + backgroundI) || 4 < (uimanagerp.length ^ 5)) {
       let pcopy_jF = 1;
       let yellow0: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,115,117,103,103,101,115,116,105,111,110,115,0),true ], [String.fromCharCode(103,101,116,115,95,97,95,52,48,0),true ], [String.fromCharCode(108,95,49,51,95,115,101,112,97,114,97,116,111,114,115,0),true ]]);
       let launch6 = String.fromCharCode(122,95,52,52,95,109,97,100,101,98,121,0);
       let savel = String.fromCharCode(122,95,54,49,95,109,111,110,116,0);
       let expiredA = 3;
      let mbbannerc = launch6 == String.fromCharCode(116,122,97,107,116,109,0);
      do {
         launch6 += `${(launch6 == String.fromCharCode(85,0) ? launch6.length : yellow0.size)}`;
         if (mbbannerc) {
            break;
         }
      } while (mbbannerc && (launch6.length > 5));
          let readf = 0.0;
          let danger5 = 2.0;
         savel += `${2 ^ launch6.length}`;
         readf += parseInt(`${danger5}`);
         danger5 -= parseFloat(`${3 | parseInt(`${readf}`)}`);
         yellow0 = new Map([[savel, 1 >> (Math.min(4, Math.abs(pcopy_jF)))]]);
         expiredA /= Math.max(4, yellow0.size * 2);
      for (let e = 0; e < 1; e++) {
         launch6 += `${launch6.length}`;
      }
      if (1 == (pcopy_jF | 2) || (2 | pcopy_jF) == 1) {
         pcopy_jF |= 3;
      }
          let stationQ: Array<any> = [735, 136, 465];
          let closed: Map<any, any> = new Map([[String.fromCharCode(105,95,50,56,95,105,110,116,101,114,114,117,112,116,105,111,110,0),String.fromCharCode(118,101,114,105,102,121,95,109,95,50,56,0)], [String.fromCharCode(108,95,50,95,112,114,101,102,101,114,101,110,99,101,0),String.fromCharCode(111,95,53,95,107,109,115,0)]]);
         pcopy_jF -= savel.length << (Math.min(Math.abs(1), 3));
         stationQ.push(stationQ.length ^ closed.size);
         closed = new Map([[`${closed.size}`, stationQ.length]]);
          let appsA = String.fromCharCode(103,95,49,48,95,104,105,115,116,0);
          let download9 = false;
          let orientationB = true;
         pcopy_jF <<= Math.min(Math.abs((3 - (orientationB ? 5 : 5))), 5);
         appsA = `${appsA.length}`;
         download9 = (appsA.length & appsA.length) == 54;
      for (let u = 0; u < 2; u++) {
         launch6 = `${(String.fromCharCode(102,0) == savel ? pcopy_jF : savel.length)}`;
      }
         launch6 = `${pcopy_jF % (Math.max(yellow0.size, 7))}`;
         yellow0.set(`${expiredA}`, expiredA + 1);
      while ((4 - yellow0.size) == 2 || (launch6.length - 4) == 4) {
         launch6 = `${yellow0.size}`;
         break;
      }
          let greyo = false;
         expiredA &= expiredA;
         greyo = (!greyo ? !greyo : !greyo);
         savel += `${pcopy_jF + 2}`;
      let listj = savel.length >= 6170787;
      do {
         savel += "1";
         if (listj) {
            break;
         }
      } while (listj && (3 < savel.length));
      backgroundI += expiredA;
   }
   for (let b = 0; b < 1; b++) {
      singleN += "1";
   }

    if (playlist !== null) {

   while (guideY < mountingW) {
       let colorsm = String.fromCharCode(102,95,52,48,95,109,101,100,105,97,110,0);
       let unticke = String.fromCharCode(100,95,53,56,95,53,95,51,0);
       let checkboxN = String.fromCharCode(105,110,100,101,110,116,101,100,95,106,95,54,54,0);
       let middlek = 0.0;
       let holder2 = 3.0;
      while ((middlek / 1.73) <= 5.100) {
         middlek -= checkboxN.length << (Math.min(Math.abs(2), 1));
         break;
      }
          let unselectedz = 2;
          let grey1: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,116,105,109,101,95,115,95,55,57,0),495], [String.fromCharCode(115,112,101,99,105,97,108,95,108,95,51,48,0),155]]);
          let policyV = 4.0;
         middlek *= 2 << (Math.min(Math.abs(parseInt(`${policyV}`)), 3));
         unselectedz ^= unselectedz;
         grey1.set(`${unselectedz}`, 1 ^ grey1.size);
         policyV /= Math.max(4, parseFloat(`${2}`));
         unticke = `${checkboxN.length}`;
         holder2 *= colorsm.length;
         middlek -= 3;
      for (let c = 0; c < 1; c++) {
         checkboxN += `${colorsm.length ^ 3}`;
      }
         holder2 += parseInt(`${middlek}`) / (Math.max(parseInt(`${holder2}`), 5));
         checkboxN = `${parseInt(`${middlek}`) ^ checkboxN.length}`;
      if (1.21 == (middlek - unticke.length)) {
          let yingH = 1.0;
          let statisticsi = 3.0;
          let libreanimated6: Map<any, any> = new Map([[String.fromCharCode(105,95,57,95,97,108,108,111,119,115,0),false ], [String.fromCharCode(102,95,56,57,95,97,114,101,97,0),true ]]);
          let libturbomodulejsijni0 = 3.0;
         middlek *= 1;
         yingH += parseInt(`${libturbomodulejsijni0}`);
         statisticsi *= parseInt(`${statisticsi}`) << (Math.min(4, Math.abs(parseInt(`${yingH}`))));
         libreanimated6 = new Map([[`${yingH}`, parseInt(`${yingH}`)]]);
         libturbomodulejsijni0 /= Math.max(1, 4);
      }
      if (colorsm != checkboxN) {
          let configureO = 0.0;
          let shareD = 4;
         checkboxN += `${colorsm.length}`;
         configureO += 1 >> (Math.min(Math.abs(parseInt(`${configureO}`)), 2));
         shareD &= parseInt(`${configureO}`);
      }
      let dragB = holder2 >= 7252740.0;
      do {
         holder2 *= parseInt(`${holder2}`) + colorsm.length;
         if (dragB) {
            break;
         }
      } while (dragB && ((3.54 + holder2) > 1.86));
         unticke += `${unticke.length >> (Math.min(5, Math.abs(parseInt(`${holder2}`))))}`;
      let langkey7 = String.fromCharCode(104,114,111,105,121,114,122,118,0) == checkboxN;
      do {
          let areaA = String.fromCharCode(118,95,49,53,95,120,114,101,115,0);
          let chinasameJ = 0.0;
          let found3 = String.fromCharCode(115,117,109,120,95,52,95,56,55,0);
          let libjsinspector9: Map<any, any> = new Map([[String.fromCharCode(97,120,105,115,95,113,95,50,53,0),319], [String.fromCharCode(105,116,117,110,101,115,95,103,95,51,51,0),976]]);
         checkboxN += `${(checkboxN == String.fromCharCode(86,0) ? colorsm.length : checkboxN.length)}`;
         areaA = `${areaA.length + parseInt(`${chinasameJ}`)}`;
         chinasameJ += parseFloat(`${parseInt(`${chinasameJ}`) ^ found3.length}`);
         found3 = "3";
         libjsinspector9.set(`${chinasameJ}`, 3);
         if (langkey7) {
            break;
         }
      } while ((checkboxN.length >= holder2) && langkey7);
      for (let f = 0; f < 3; f++) {
          let runtimeschedulerN: Array<any> = [753, 956, 773];
          let inactiven = String.fromCharCode(97,95,53,50,95,116,114,97,99,105,110,103,0);
         checkboxN += "2";
         runtimeschedulerN = [1];
         inactiven = `${2 << (Math.min(5, runtimeschedulerN.length))}`;
      }
         middlek /= Math.max(checkboxN.length & colorsm.length, 1);
      guideY /= Math.max(2, guideY / (Math.max(parseInt(`${middlek}`), 10)));
      break;
   }
      floaterX = mountingW >= 82.7 || 82.7 >= backgroundI;
      mountingW -= (singleN.length >> (Math.min(3, Math.abs((moduleG ? 2 : 4)))));
       let window_otD = 5.0;
       let activityO = 0.0;
       let stationK: Array<any> = [String.fromCharCode(112,97,114,97,109,101,116,101,114,95,116,95,55,49,0), String.fromCharCode(102,95,54,53,95,112,108,97,121,108,105,115,116,0), String.fromCharCode(97,95,52,56,95,115,101,116,108,101,99,116,101,100,0)];
       let libcrashsdkJ: Map<any, any> = new Map([[String.fromCharCode(120,95,51,95,114,101,112,108,97,99,101,109,101,110,116,0),true ], [String.fromCharCode(118,95,54,51,95,105,110,100,105,99,101,115,0),false ], [String.fromCharCode(112,117,98,95,119,95,56,50,0),false ]]);
       let historyc = true;
       let anythinkJ = false;
      let statisticsa = historyc ? !historyc : historyc;
      do {
         historyc = (55 >= ((!historyc ? 55 : libcrashsdkJ.size) - libcrashsdkJ.size));
         if (statisticsa) {
            break;
         }
      } while ((!historyc) && statisticsa);
      let sportT = historyc ? !historyc : historyc;
      do {
         historyc = 52.38 < activityO || stationK.length < 23;
         if (sportT) {
            break;
         }
      } while (sportT && (historyc || (5 | libcrashsdkJ.size) == 2));
      while (2 > (libcrashsdkJ.size + parseInt(`${activityO}`)) || 3.95 > (4.54 + activityO)) {
          let debugf = String.fromCharCode(116,114,97,110,115,112,111,114,116,95,55,95,53,49,0);
          let playlistb = 1.0;
         activityO -= (parseFloat(`${parseInt(`${window_otD}`) * (historyc ? 1 : 3)}`));
         debugf = `${debugf.length}`;
         playlistb += debugf.length;
         break;
      }
         libcrashsdkJ = new Map([[`${stationK.length}`, 2]]);
          let hongkongz = false;
          let filedz = 0.0;
         historyc = window_otD < 35.66;
         hongkongz = 21.26 <= filedz;
         filedz += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${filedz}`)), 3))}`);
      while (historyc) {
         window_otD -= parseFloat(`${stationK.length}`);
         break;
      }
          let debuga = String.fromCharCode(115,116,97,116,101,112,95,115,95,56,55,0);
          let activeN = 1;
          let interstitialY = String.fromCharCode(114,101,99,101,110,116,101,114,95,120,95,53,49,0);
         stationK = [activeN / (Math.max(interstitialY.length, 7))];
         debuga = `${1 << (Math.min(3, debuga.length))}`;
         activeN &= debuga.length + debuga.length;
      mountingW *= parseInt(`${backgroundI}`);
       let indicatorl: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,95,105,110,103,101,110,105,101,110,116,0),189], [String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,110,95,52,48,0),358]]);
          let thumbnailk = 5.0;
          let classesz: Array<any> = [String.fromCharCode(101,95,49,48,95,118,111,112,101,110,0), String.fromCharCode(121,95,56,51,95,112,101,114,115,111,110,0), String.fromCharCode(112,95,49,49,95,97,98,117,102,102,101,114,115,105,110,107,0)];
          let splashx: Map<any, any> = new Map([[String.fromCharCode(109,95,54,57,95,99,111,108,111,114,115,112,97,99,101,0),19], [String.fromCharCode(117,95,49,50,95,105,110,110,101,114,0),600], [String.fromCharCode(115,95,55,57,95,97,118,99,105,110,116,114,97,0),164]]);
         indicatorl.set(`${thumbnailk}`, indicatorl.size);
         thumbnailk *= parseFloat(`${classesz.length}`);
         classesz.push(splashx.size + classesz.length);
         splashx.set(`${classesz.length}`, classesz.length % 2);
         indicatorl.set(`${indicatorl.size}`, 1 * indicatorl.size);
      for (let o = 0; o < 3; o++) {
         indicatorl = new Map([[`${indicatorl.size}`, 1]]);
      }
      guideY ^= (singleN == String.fromCharCode(111,0) ? singleN.length : uimanagerp.length);
   for (let k = 0; k < 2; k++) {
       let switch_8E: Map<any, any> = new Map([[String.fromCharCode(116,95,57,56,95,114,101,97,100,121,0),979], [String.fromCharCode(98,108,97,110,107,95,106,95,49,48,0),31], [String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,97,95,55,55,0),566]]);
       let selection_ = String.fromCharCode(107,95,54,57,95,109,100,97,121,0);
      let material_ = selection_ == String.fromCharCode(106,101,109,0);
      do {
          let trophyV = true;
          let sans1: Array<any> = [String.fromCharCode(118,95,49,50,95,114,101,99,111,103,110,105,122,101,0), String.fromCharCode(115,101,97,114,99,104,95,55,95,57,52,0), String.fromCharCode(114,101,108,97,116,105,118,101,108,121,95,108,95,56,51,0)];
          let nalyticsT = 2;
         selection_ = `${(sans1.length ^ (trophyV ? 1 : 2))}`;
         trophyV = nalyticsT >= 28;
         sans1.push(nalyticsT | 2);
         if (material_) {
            break;
         }
      } while (material_ && ((selection_.length >> (Math.min(1, Math.abs(switch_8E.size)))) >= 2));
      let detailsr = String.fromCharCode(119,111,110,104,101,114,0) == selection_;
      do {
          let halfM = 0.0;
          let window_z_G: Map<any, any> = new Map([[String.fromCharCode(118,95,54,57,95,117,98,115,99,114,105,98,101,114,0),546], [String.fromCharCode(102,111,114,99,105,110,103,95,49,95,49,57,0),599], [String.fromCharCode(115,105,110,116,95,97,95,57,51,0),508]]);
          let sentryl = String.fromCharCode(100,95,53,49,95,99,108,111,115,101,115,111,99,107,101,116,0);
          let settingsE: Map<any, any> = new Map([[String.fromCharCode(118,112,109,116,95,107,95,52,57,0),226], [String.fromCharCode(103,111,108,100,101,110,95,49,95,51,50,0),621]]);
          let liveW = 1.0;
         selection_ += `${window_z_G.size ^ switch_8E.size}`;
         halfM -= 1;
         window_z_G = new Map([[`${halfM}`, sentryl.length / 3]]);
         sentryl += "2";
         settingsE = new Map([[sentryl, 3 % (Math.max(7, parseInt(`${liveW}`)))]]);
         liveW -= 3;
         if (detailsr) {
            break;
         }
      } while (((switch_8E.size << (Math.min(Math.abs(4), 2))) > 1 && (switch_8E.size << (Math.min(Math.abs(4), 1))) > 3) && detailsr);
         switch_8E = new Map([[`${switch_8E.size}`, (String.fromCharCode(50,0) == selection_ ? switch_8E.size : selection_.length)]]);
         selection_ = `${switch_8E.size}`;
      if ((4 + switch_8E.size) >= 1 || 3 >= (4 + selection_.length)) {
         switch_8E.set(selection_, switch_8E.size);
      }
       let arrow6: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,95,106,99,115,97,109,112,108,101,0),637], [String.fromCharCode(99,95,55,95,110,97,110,111,115,101,99,111,110,100,115,0),170], [String.fromCharCode(105,97,116,95,110,95,50,0),676]]);
      floaterX = 61 < singleN.length;
   }
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
          headerStyle={{ marginBottom: spacing.s }}
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
                }}
              >
                {playlist?.topic_blurb}
              </Text>
              <FavoritePlaylistButton playlist={playlist} />
            </View>
            <Text
              style={{
                ...textVariants.small,
              }}
            >{`(共${playlist.vod_list.length}部)`}</Text>
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

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
