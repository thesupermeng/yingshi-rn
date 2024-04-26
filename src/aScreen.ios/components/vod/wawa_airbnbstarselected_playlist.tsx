import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wawaXvodNeon, wawaMbsplash } from '@type/wawa_gradlew';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/loadingspinnerBorderlessRefresh.svg';
import SortDescIcon from '@static/images/greytickIcon.svg';
interface wawaAwayShow {
    onConfirm: any,
    onCancel: any,
    episodes?: wawaXvodNeon
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: wawaAwayShow) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let build_ = false;
    let libfabricjniL = 4.0;
    let streamingR = String.fromCharCode(99,104,101,99,107,98,111,120,0);
    let zhubo9 = 3.0;
    let vieweri = false;
    let playershirtU = 5.0;
    let checkboxg = 1;
   while (5.55 >= (4.16 - playershirtU) && vieweri) {
      playershirtU *= parseFloat(`${parseInt(`${libfabricjniL}`) % (Math.max(5, checkboxg))}`);
      break;
   }
       let iconchatsendN = 2.0;
       let shirtM: Map<any, any> = new Map([[String.fromCharCode(109,117,110,108,111,99,107,95,116,95,51,54,0),501], [String.fromCharCode(102,95,51,54,95,100,101,102,97,117,108,0),811], [String.fromCharCode(100,101,108,97,121,115,0),232]]);
       let containert: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,97,110,99,101,115,0),359], [String.fromCharCode(102,114,105,101,110,100,115,0),527], [String.fromCharCode(99,104,97,110,103,101,100,104,95,116,95,50,56,0),543]]);
      for (let u = 0; u < 1; u++) {
          let dropdownz = String.fromCharCode(114,117,110,110,105,110,103,0);
          let configl = 1.0;
          let targety = 2;
          let confirmationZ: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,101,100,95,100,95,51,52,0),316], [String.fromCharCode(99,111,102,102,105,110,0),206], [String.fromCharCode(112,115,104,95,104,95,50,51,0),64]]);
          let libavdevices: Array<any> = [951, 169];
         shirtM.set(`${iconchatsendN}`, libavdevices.length - parseInt(`${iconchatsendN}`));
         dropdownz = `${targety ^ parseInt(`${configl}`)}`;
         configl /= Math.max(1, targety % (Math.max(dropdownz.length, 5)));
         confirmationZ = new Map([[`${confirmationZ.size}`, confirmationZ.size]]);
         libavdevices.push(targety % 3);
      }
      if (Array.from(containert.keys()).includes(`${iconchatsendN}`)) {
         containert.set(`${iconchatsendN}`, parseInt(`${iconchatsendN}`) - shirtM.size);
      }
      while (Array.from(shirtM.values()).includes(iconchatsendN)) {
         iconchatsendN -= shirtM.size;
         break;
      }
          let gesturesq = 0.0;
         iconchatsendN -= parseInt(`${iconchatsendN}`);
         gesturesq *= parseFloat(`${parseInt(`${gesturesq}`) % 3}`);
         containert = new Map([[`${containert.size}`, containert.size & 1]]);
      let mbridge8 = 5382901.0 >= iconchatsendN;
      do {
         iconchatsendN -= shirtM.size;
         if (mbridge8) {
            break;
         }
      } while ((shirtM.size < parseInt(`${iconchatsendN}`)) && mbridge8);
         shirtM = new Map([[`${shirtM.size}`, containert.size]]);
      if (!Array.from(containert.values()).includes(iconchatsendN)) {
         containert.set(`${iconchatsendN}`, parseInt(`${iconchatsendN}`));
      }
      let temperaturej = 5047101 <= containert.size;
      do {
          let text3 = true;
          let chinaC = true;
         containert.set(`${text3}`, ((chinaC ? 2 : 2)));
         if (temperaturej) {
            break;
         }
      } while (temperaturej && (containert.get(`${shirtM.size}`) != null));
      checkboxg &= containert.size;
   for (let w = 0; w < 2; w++) {
      checkboxg /= Math.max(5, (parseInt(`${libfabricjniL}`) - (build_ ? 4 : 3)));
   }
      playershirtU -= parseFloat(`${streamingR.length - 1}`);
   if (playershirtU >= 4.90 || (playershirtU * 4.90) >= 2.31) {
      playershirtU *= (parseFloat(`${parseInt(`${playershirtU}`) >> (Math.min(1, Math.abs((vieweri ? 4 : 1))))}`));
   }
      zhubo9 -= parseInt(`${libfabricjniL}`);

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

      playershirtU -= parseFloat(`${1}`);
   while (build_ || vieweri) {
      build_ = streamingR.length <= 47 || !vieweri;
      break;
   }
      checkboxg /= Math.max(checkboxg - 2, 1);
   while ((checkboxg % 5) == 4 && checkboxg == 5) {
       let based = String.fromCharCode(99,95,49,48,95,114,101,113,117,97,110,116,0);
       let referrer6 = 5.0;
       let countryh = String.fromCharCode(101,120,116,114,101,109,101,95,122,95,48,0);
         based += `${parseInt(`${referrer6}`)}`;
         based += `${countryh.length << (Math.min(Math.abs(1), 4))}`;
      while ((referrer6 - parseFloat(`${based.length}`)) >= 1.90) {
         referrer6 += parseFloat(`${based.length}`);
         break;
      }
      if (based != String.fromCharCode(107,0)) {
          let matchactiveH = false;
         countryh += `${countryh.length & 2}`;
      }
         referrer6 /= Math.max(parseFloat(`${3}`), 5);
      let fullf = String.fromCharCode(57,56,121,48,110,48,55,98,114,111,0) == countryh;
      do {
         countryh = `${countryh.length ^ parseInt(`${referrer6}`)}`;
         if (fullf) {
            break;
         }
      } while ((countryh.includes(`${referrer6}`)) && fullf);
         referrer6 -= parseFloat(`${based.length}`);
      let codev = referrer6 >= 9099438.0;
      do {
         referrer6 += parseFloat(`${countryh.length - 2}`);
         if (codev) {
            break;
         }
      } while (((based.length - parseInt(`${referrer6}`)) > 5 && (parseFloat(`${based.length}`) - referrer6) > 2.68) && codev);
         based = `${(based == String.fromCharCode(85,0) ? based.length : parseInt(`${referrer6}`))}`;
      checkboxg %= Math.max(4, countryh.length);
      break;
   }
       let listK: Array<any> = [980, 100, 420];
       let libcrashsdkD: Array<any> = [String.fromCharCode(117,110,119,105,110,100,0), String.fromCharCode(112,95,53,56,95,116,114,97,118,101,108,0)];
       let layout8 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,0);
      let expandf = libcrashsdkD.length >= 5684578;
      do {
         libcrashsdkD = [libcrashsdkD.length % (Math.max(3, 8))];
         if (expandf) {
            break;
         }
      } while (expandf && (!layout8.startsWith(`${libcrashsdkD.length}`)));
       let goallogoZ = 4.0;
       let gdtadvI = 1.0;
      for (let z = 0; z < 1; z++) {
          let dependencyR = 2;
         libcrashsdkD = [dependencyR];
      }
         libcrashsdkD = [2 & parseInt(`${goallogoZ}`)];
      for (let x = 0; x < 1; x++) {
         gdtadvI += parseFloat(`${2}`);
      }
         layout8 += `${listK.length / (Math.max(2, 5))}`;
      let fullD = 5786195.0 <= goallogoZ;
      do {
          let unselectedC: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,115,112,0),String.fromCharCode(100,95,52,57,95,105,103,110,112,111,115,116,0)], [String.fromCharCode(105,110,105,116,101,110,99,0),String.fromCharCode(98,95,50,49,95,119,101,108,108,0)], [String.fromCharCode(104,97,110,100,115,104,97,107,101,0),String.fromCharCode(110,101,105,103,104,98,111,117,114,115,0)]]);
          let target4 = String.fromCharCode(115,95,49,55,95,97,102,102,105,110,105,116,105,101,115,0);
         goallogoZ *= parseFloat(`${2 << (Math.min(3, layout8.length))}`);
         unselectedC.set(target4, target4.length - 1);
         if (fullD) {
            break;
         }
      } while (fullD && ((gdtadvI * goallogoZ) >= 4.48));
      for (let s = 0; s < 3; s++) {
          let filledd = String.fromCharCode(110,111,110,101,109,112,116,121,95,56,95,55,0);
          let stylesw = 2.0;
         listK.push(filledd.length);
         filledd += "1";
         stylesw *= parseFloat(`${2 - parseInt(`${stylesw}`)}`);
      }
         gdtadvI /= Math.max((parseFloat(`${String.fromCharCode(106,0) == layout8 ? layout8.length : parseInt(`${gdtadvI}`)}`)), 4);
      streamingR += `${parseInt(`${zhubo9}`)}`;
   while ((zhubo9 + 1.88) <= 2.16 || !vieweri) {
      zhubo9 *= 1;
      break;
   }
        if (sortBy === 'desc') {

      build_ = !vieweri || streamingR.length == 97;
      checkboxg |= parseInt(`${playershirtU}`) * 2;
   let injuryf = 8806440.0 <= zhubo9;
   do {
      zhubo9 -= parseInt(`${playershirtU}`) / 2;
      if (injuryf) {
         break;
      }
   } while (injuryf && (5 < (checkboxg * parseInt(`${zhubo9}`)) && 5 < (parseInt(`${zhubo9}`) * checkboxg)));
      zhubo9 *= streamingR.length;
      zhubo9 *= checkboxg;
      vieweri = !vieweri;
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let yellowvideoliveX: Array<any> = [784, 576, 852];
    let iconcurrentmatchC = 3.0;
    let phonesharek = 2.0;
    let questiconI = String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,119,95,50,55,0);
    let componentsU = false;
    let switch_5L = 4.0;
    let tickeda = String.fromCharCode(103,114,97,110,116,0);
    let exampleimageE = String.fromCharCode(100,101,114,105,118,101,0);
    let armva4 = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,99,95,54,54,0);
    let configz = String.fromCharCode(110,95,51,49,95,109,101,114,103,101,97,98,108,101,0);
    let lightu = 2;
    let basketballmatchdetailbgt = 3.0;
      switch_5L *= parseFloat(`${3}`);
   for (let d = 0; d < 1; d++) {
      exampleimageE += `${parseInt(`${iconcurrentmatchC}`) + 2}`;
   }
   let iconviewergifF = yellowvideoliveX.length <= 5948185;
   do {
      yellowvideoliveX = [parseInt(`${iconcurrentmatchC}`)];
      if (iconviewergifF) {
         break;
      }
   } while (iconviewergifF && ((1 | yellowvideoliveX.length) >= 2));
      iconcurrentmatchC -= parseInt(`${phonesharek}`) | 3;
   if (3 > (exampleimageE.length - 4)) {
      exampleimageE += "2";
   }
   let hearts = questiconI == String.fromCharCode(111,57,56,50,56,99,117,0);
   do {
      questiconI = `${2 + parseInt(`${iconcurrentmatchC}`)}`;
      if (hearts) {
         break;
      }
   } while ((questiconI.length >= 3) && hearts);

        if (sortBy === 'asc') {

   if (switch_5L >= iconcurrentmatchC) {
      switch_5L *= parseFloat(`${tickeda.length / 2}`);
   }
   let homeactiveR = String.fromCharCode(95,97,48,99,54,115,0) == exampleimageE;
   do {
       let matchq = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,0);
       let sharewhiteP: Array<any> = [489, 378, 350];
      if ((5 - matchq.length) >= 1) {
          let notificationfilled2 = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,0);
          let reactZ = String.fromCharCode(115,117,98,110,111,100,101,95,107,95,50,50,0);
          let imageactionliveF = String.fromCharCode(112,114,111,108,111,110,103,0);
         sharewhiteP.push(1);
         notificationfilled2 = "1";
         reactZ += `${(String.fromCharCode(70,0) == imageactionliveF ? notificationfilled2.length : imageactionliveF.length)}`;
      }
      for (let e = 0; e < 2; e++) {
         matchq = `${sharewhiteP.length & matchq.length}`;
      }
      let chatT = String.fromCharCode(110,103,119,52,105,117,99,48,0) == matchq;
      do {
         matchq = "2";
         if (chatT) {
            break;
         }
      } while (chatT && ((sharewhiteP.length ^ matchq.length) == 5 || 5 == (5 ^ sharewhiteP.length)));
         sharewhiteP.push(matchq.length + 2);
      if (2 > (1 | sharewhiteP.length) || 1 > (matchq.length | sharewhiteP.length)) {
         matchq = `${(matchq == String.fromCharCode(117,0) ? sharewhiteP.length : matchq.length)}`;
      }
          let leaguedetailsbgz: Array<any> = [937, 618];
          let filterE = 0;
          let quest8 = String.fromCharCode(99,95,54,48,95,98,108,97,99,107,115,0);
         matchq += `${filterE ^ 2}`;
         leaguedetailsbgz.push(2);
         filterE >>= Math.min(Math.abs(quest8.length ^ leaguedetailsbgz.length), 5);
         quest8 += `${leaguedetailsbgz.length}`;
      exampleimageE = `${parseInt(`${iconcurrentmatchC}`)}`;
      if (homeactiveR) {
         break;
      }
   } while ((componentsU) && homeactiveR);
   let reducerg = switch_5L >= 8597043.0;
   do {
      switch_5L -= (parseFloat(`${(componentsU ? 2 : 2) - questiconI.length}`));
      if (reducerg) {
         break;
      }
   } while (reducerg && ((5.46 * switch_5L) < 5.56 || (switch_5L * 5.46) < 2.53));
      yellowvideoliveX = [parseInt(`${iconcurrentmatchC}`)];
      tickeda = `${2 + parseInt(`${phonesharek}`)}`;
      iconcurrentmatchC += ((componentsU ? 2 : 3) << (Math.min(Math.abs(parseInt(`${switch_5L}`)), 1)));
            setSortBy('desc');
        } else {

   while (parseFloat(`${tickeda.length}`) < switch_5L) {
      switch_5L *= parseFloat(`${3}`);
      break;
   }
   for (let x = 0; x < 3; x++) {
      exampleimageE = `${questiconI.length - 1}`;
   }
   let controlW = componentsU ? !componentsU : componentsU;
   do {
      componentsU = 95 == tickeda.length;
      if (controlW) {
         break;
      }
   } while (controlW && (questiconI.startsWith(`${componentsU}`)));
       let brightness4 = 1.0;
       let logox = String.fromCharCode(105,116,97,108,105,97,110,95,102,95,55,49,0);
       let playershirt9 = 1;
         playershirt9 <<= Math.min(Math.abs(parseInt(`${brightness4}`) / (Math.max(logox.length, 7))), 3);
      if (!logox.includes(`${playershirt9}`)) {
          let miniD = String.fromCharCode(99,97,109,101,114,97,0);
          let rewardH = false;
          let areaQ = String.fromCharCode(106,95,49,50,95,115,101,99,117,114,101,0);
         playershirt9 %= Math.max(logox.length | 2, 1);
         miniD += `${miniD.length}`;
         rewardH = (areaQ.length ^ miniD.length) < 50;
         areaQ = `${miniD.length}`;
      }
          let clocky = 1;
         playershirt9 -= 2;
         clocky &= clocky;
         playershirt9 |= playershirt9;
      if ((brightness4 - 3.67) <= 5.87 || (3.67 - brightness4) <= 5.97) {
         playershirt9 >>= Math.min(Math.abs(playershirt9 + 1), 4);
      }
       let pressurey = String.fromCharCode(105,100,119,116,95,112,95,56,0);
       let libtanp = String.fromCharCode(112,114,101,100,114,97,119,110,0);
      while ((playershirt9 << (Math.min(Math.abs(3), 1))) > 5) {
          let rewardK = 0.0;
          let directk = String.fromCharCode(107,105,115,115,0);
         brightness4 *= parseFloat(`${libtanp.length / 1}`);
         rewardK += 1;
         directk += `${parseInt(`${rewardK}`)}`;
         break;
      }
          let back4 = String.fromCharCode(110,101,116,115,95,106,95,55,48,0);
          let viewerg = String.fromCharCode(117,110,98,105,97,115,0);
          let historyB = String.fromCharCode(117,95,51,51,95,99,114,108,115,0);
         libtanp = `${(String.fromCharCode(75,0) == pressurey ? historyB.length : pressurey.length)}`;
         back4 = `${viewerg.length}`;
         viewerg = `${back4.length}`;
         historyB += `${back4.length - 2}`;
      if (pressurey.startsWith(`${brightness4}`)) {
          let subtexts = 5;
          let topon_ = String.fromCharCode(112,108,97,99,101,95,117,95,56,52,0);
          let weiboh = true;
          let fileF = 3.0;
          let s_playerS = false;
         pressurey += `${playershirt9 % (Math.max(3, 7))}`;
         subtexts += subtexts | topon_.length;
         topon_ = `${((weiboh ? 4 : 3))}`;
         weiboh = fileF >= 15.30;
         fileF *= (parseFloat(`${(s_playerS ? 4 : 2) << (Math.min(5, Math.abs(2)))}`));
         s_playerS = !weiboh;
      }
      yellowvideoliveX = [configz.length];
      switch_5L -= parseFloat(`${tickeda.length}`);
   let iconschedulej = componentsU ? !componentsU : componentsU;
   do {
      componentsU = parseInt(`${switch_5L}`) < questiconI.length;
      if (iconschedulej) {
         break;
      }
   } while (iconschedulej && ((5.69 / (Math.max(5, switch_5L))) <= 3.61));
            setSortBy('asc');
        }
    }

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
            <Text
                style={{
                    textAlign: 'center', ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15
                }}>
                {`${item}集`}
            </Text>
        </TouchableOpacity>
    }, []);

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={renderItem}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});