import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yys_Libreact, yys_GdtadvRoboto } from '@type/yys_libzeus';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/mbsplashNterstitial.svg';
import SortDescIcon from '@static/images/expandAnalytics.svg';
interface yys_ConfigureUimanager {
    onConfirm: any,
    onCancel: any,
    episodes?: yys_Libreact
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: yys_ConfigureUimanager) {
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
       let inactiveo = String.fromCharCode(115,112,108,105,116,116,101,114,0);
    let actionso = String.fromCharCode(99,100,106,112,101,103,0);
    let tailo = 3.0;
    let sigmobq = String.fromCharCode(108,97,115,114,0);
    let layoutG = 2;
    let serviceF = String.fromCharCode(104,115,116,114,105,110,103,0);
    let ginit_tR = 0;
    let leftn = String.fromCharCode(100,97,116,97,108,105,115,116,0);
   if (1 == sigmobq.length) {
      sigmobq += `${serviceF.length ^ inactiveo.length}`;
   }
   if (serviceF.length > layoutG) {
       let zhengpian0 = String.fromCharCode(100,105,115,99,111,118,101,114,0);
       let yellows = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,0);
       let signinupc: Map<any, any> = new Map([[String.fromCharCode(99,116,114,0),515], [String.fromCharCode(102,119,104,116,120,0),492], [String.fromCharCode(115,105,103,104,0),10]]);
         signinupc = new Map([[yellows, 3]]);
      if ((zhengpian0.length | signinupc.size) > 2) {
         signinupc.set(zhengpian0, yellows.length);
      }
         yellows = `${3 >> (Math.min(1, Math.abs(signinupc.size)))}`;
          let actionsj = String.fromCharCode(99,116,114,108,0);
          let downloadedv = false;
          let filterI = 0.0;
         yellows = `${parseInt(`${filterI}`) << (Math.min(Math.abs(1), 2))}`;
         actionsj += `${((downloadedv ? 2 : 4) - 2)}`;
         downloadedv = actionsj.length < 42;
         filterI += parseFloat(`${actionsj.length}`);
      let halfi = String.fromCharCode(122,109,55,54,106,115,114,113,95,0) == zhengpian0;
      do {
          let dycreatoru = String.fromCharCode(102,114,101,101,100,111,109,0);
          let darkT = false;
          let bridgeb = 3.0;
          let headerS = String.fromCharCode(109,111,100,105,102,121,0);
          let humidityU = 0.0;
         zhengpian0 = `${zhengpian0.length}`;
         dycreatoru += `${parseInt(`${bridgeb}`) & 1}`;
         darkT = 41.79 <= bridgeb;
         headerS += "1";
         humidityU -= parseFloat(`${3}`);
         if (halfi) {
            break;
         }
      } while ((yellows == String.fromCharCode(100,0)) && halfi);
      let libfbi = 8464460 <= zhengpian0.length;
      do {
         zhengpian0 += `${yellows.length}`;
         if (libfbi) {
            break;
         }
      } while ((yellows == String.fromCharCode(108,0)) && libfbi);
      for (let c = 0; c < 3; c++) {
         zhengpian0 += `${signinupc.size}`;
      }
       let graphicsc = 1.0;
      while (2 > (signinupc.size % (Math.max(yellows.length, 3))) || 2 > (signinupc.size % (Math.max(5, yellows.length)))) {
         yellows = `${yellows.length + parseInt(`${graphicsc}`)}`;
         break;
      }
      layoutG ^= layoutG;
   }
      leftn += `${2 ^ inactiveo.length}`;
      leftn += `${(String.fromCharCode(109,0) == inactiveo ? ginit_tR : inactiveo.length)}`;
      actionso = `${serviceF.length >> (Math.min(5, leftn.length))}`;
      actionso += `${3 & leftn.length}`;
   if (sigmobq.length >= layoutG) {
       let leaguek: Map<any, any> = new Map([[String.fromCharCode(102,114,97,110,100,111,109,0),false ], [String.fromCharCode(101,110,116,101,114,105,110,103,0),true ]]);
         leaguek = new Map([[`${leaguek.size}`, 3 >> (Math.min(5, Math.abs(leaguek.size)))]]);
      let androidY = leaguek.size >= 9260562;
      do {
         leaguek = new Map([[`${leaguek.size}`, 2]]);
         if (androidY) {
            break;
         }
      } while ((4 < (5 * leaguek.size) || 3 < (5 * leaguek.size)) && androidY);
      for (let j = 0; j < 2; j++) {
         leaguek = new Map([[`${leaguek.size}`, leaguek.size | 1]]);
      }
      sigmobq += `${serviceF.length ^ 2}`;
   }

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let history4 = 2.0;
         history4 += parseFloat(`${parseInt(`${history4}`) - 1}`);
      while (3.20 > (history4 - history4) && (3.20 - history4) > 5.65) {
         history4 -= parseFloat(`${parseInt(`${history4}`)}`);
         break;
      }
      let bannerC = 5795248.0 >= history4;
      do {
          let baseJ = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,0);
          let mintegralF = String.fromCharCode(101,110,99,0);
          let zhengpianz = 3.0;
         history4 /= Math.max(3, parseFloat(`${2}`));
         baseJ = `${1 | mintegralF.length}`;
         mintegralF += `${baseJ.length}`;
         zhengpianz *= parseFloat(`${baseJ.length + 2}`);
         if (bannerC) {
            break;
         }
      } while ((5.17 <= history4) && bannerC);
      tailo /= Math.max(2, actionso.length * inactiveo.length);
   for (let q = 0; q < 2; q++) {
       let storev = String.fromCharCode(100,101,116,97,99,104,0);
          let libimagepipelineg = true;
          let cancelh = 3.0;
         storev = `${3 | parseInt(`${cancelh}`)}`;
         libimagepipelineg = (!libimagepipelineg ? !libimagepipelineg : !libimagepipelineg);
         cancelh /= Math.max(5, 2);
         storev += `${1 + storev.length}`;
      let helperP = 6695362 <= storev.length;
      do {
         storev = `${2 * storev.length}`;
         if (helperP) {
            break;
         }
      } while (helperP && (storev.length == storev.length));
      layoutG /= Math.max(storev.length, 2);
   }
   let pathP = serviceF.length <= 6300393;
   do {
      serviceF = "3";
      if (pathP) {
         break;
      }
   } while ((serviceF.length == layoutG) && pathP);
   if (4.16 == (leftn.length + tailo)) {
      leftn = `${parseInt(`${tailo}`)}`;
   }
   while ((tailo / (Math.max(1.31, 3))) > 1.88) {
      ginit_tR %= Math.max(ginit_tR << (Math.min(Math.abs(parseInt(`${tailo}`)), 5)), 3);
      break;
   }
       let baseu: Array<any> = [110, 544];
       let libreactperfloggerjniB = String.fromCharCode(97,108,110,117,109,0);
       let taiwanX: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,0),175], [String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,0),365]]);
         taiwanX = new Map([[`${baseu.length}`, libreactperfloggerjniB.length]]);
      while (Array.from(taiwanX.values()).includes(baseu.length)) {
          let scrollviewk = 2.0;
          let applicationR = String.fromCharCode(100,117,115,116,0);
          let build8 = 4.0;
          let confirmationb = 3.0;
         baseu = [libreactperfloggerjniB.length];
         scrollviewk -= parseFloat(`${2 ^ parseInt(`${confirmationb}`)}`);
         applicationR += "2";
         build8 /= Math.max(parseFloat(`${parseInt(`${scrollviewk}`) + 1}`), 2);
         confirmationb -= parseFloat(`${parseInt(`${build8}`) * 1}`);
         break;
      }
         libreactperfloggerjniB += `${libreactperfloggerjniB.length / (Math.max(3, 9))}`;
         baseu = [baseu.length | 2];
         baseu = [libreactperfloggerjniB.length];
         taiwanX.set(libreactperfloggerjniB, 1 | baseu.length);
         libreactperfloggerjniB += `${baseu.length}`;
         baseu = [libreactperfloggerjniB.length - baseu.length];
         taiwanX.set(libreactperfloggerjniB, libreactperfloggerjniB.length ^ baseu.length);
      actionso += `${baseu.length}`;
   if (ginit_tR <= 4) {
      ginit_tR ^= parseInt(`${tailo}`);
   }
        if (sortBy === 'desc') {

   for (let r = 0; r < 2; r++) {
      ginit_tR <<= Math.min(inactiveo.length, 1);
   }
      inactiveo += "3";
   if ((serviceF.length % (Math.max(2, 7))) <= 5 || (serviceF.length % (Math.max(10, layoutG))) <= 2) {
      serviceF = `${(inactiveo == String.fromCharCode(67,0) ? inactiveo.length : sigmobq.length)}`;
   }
   while (3 >= sigmobq.length && serviceF != String.fromCharCode(82,0)) {
       let guideg: Array<any> = [627, 773, 889];
      for (let q = 0; q < 2; q++) {
         guideg.push(guideg.length);
      }
         guideg.push(1);
      for (let d = 0; d < 1; d++) {
         guideg.push(guideg.length / (Math.max(guideg.length, 10)));
      }
      sigmobq += `${ginit_tR}`;
      break;
   }
      ginit_tR += parseInt(`${tailo}`) >> (Math.min(leftn.length, 1));
   let dialogA = String.fromCharCode(54,112,117,100,51,54,0) == inactiveo;
   do {
      inactiveo += "3";
      if (dialogA) {
         break;
      }
   } while ((actionso != inactiveo) && dialogA);
   while (sigmobq.length == actionso.length) {
      actionso = `${(serviceF == String.fromCharCode(113,0) ? serviceF.length : ginit_tR)}`;
      break;
   }
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let roundh = String.fromCharCode(100,95,49,54,0);
    let leakcheckerI = 3.0;
    let resultt = 0.0;
    let transferh = 3.0;
    let adultF = 5;
    let lessL = String.fromCharCode(115,108,111,116,0);
    let mail9: Array<any> = [104, 820];
    let orientationH = String.fromCharCode(104,97,108,102,108,116,117,105,110,116,0);
    let emojin = 5;
    let heji1: Map<any, any> = new Map([[String.fromCharCode(117,108,97,119,0),String.fromCharCode(109,97,99,114,111,0)], [String.fromCharCode(101,100,103,101,115,0),String.fromCharCode(115,117,98,116,114,97,99,116,111,114,0)]]);
    let mbsplashQ: Map<any, any> = new Map([[String.fromCharCode(115,116,100,101,114,114,0),String.fromCharCode(115,116,114,110,108,101,110,0)], [String.fromCharCode(102,105,116,0),String.fromCharCode(100,101,116,97,105,108,0)]]);
    let binddatask = false;
    let libcxxcomponentsP = 1.0;
   for (let h = 0; h < 2; h++) {
      mail9.push(orientationH.length / (Math.max(2, 3)));
   }
   let entryD = mail9.length <= 5673524;
   do {
      mail9 = [2];
      if (entryD) {
         break;
      }
   } while (entryD && (4 < mail9.length));
      adultF >>= Math.min(1, Math.abs(adultF | lessL.length));
   if ((orientationH.length & 3) < 2) {
      emojin &= parseInt(`${resultt}`);
   }
   let rootm = orientationH.length >= 7062368;
   do {
      orientationH = `${mail9.length}`;
      if (rootm) {
         break;
      }
   } while ((2 <= orientationH.length) && rootm);
   let miniJ = 9190907.0 <= leakcheckerI;
   do {
      leakcheckerI -= parseInt(`${resultt}`);
      if (miniJ) {
         break;
      }
   } while (((1.92 - leakcheckerI) == 5.19 && 2.8 == (leakcheckerI / (Math.max(1.92, 6)))) && miniJ);

        if (sortBy === 'asc') {

      lessL = `${roundh.length | 2}`;
      orientationH = `${orientationH.length}`;
      orientationH = `${orientationH.length}`;
   while (roundh.length >= parseInt(`${leakcheckerI}`)) {
      roundh = `${(roundh == String.fromCharCode(72,0) ? mail9.length : roundh.length)}`;
      break;
   }
       let androidq = 5;
       let friendsR: Array<any> = [String.fromCharCode(98,117,102,102,101,114,105,110,103,0), String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,0)];
       let stationX = false;
      if (!friendsR.includes(androidq)) {
         androidq *= androidq;
      }
      if (!stationX) {
         androidq -= 3;
      }
      if (friendsR.length > 1 || 5 > (1 << (Math.min(5, friendsR.length)))) {
         friendsR = [friendsR.length / (Math.max(9, androidq))];
      }
         androidq += androidq;
       let dark9: Map<any, any> = new Map([[String.fromCharCode(109,105,110,109,97,120,0),String.fromCharCode(100,101,102,105,110,101,100,0)], [String.fromCharCode(100,101,98,117,103,0),String.fromCharCode(97,97,99,101,110,99,116,97,98,0)], [String.fromCharCode(97,119,97,114,101,0),String.fromCharCode(115,101,114,105,102,0)]]);
       let inactiveM: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,122,101,0),String.fromCharCode(117,110,109,97,112,0)], [String.fromCharCode(110,111,116,105,102,105,101,114,0),String.fromCharCode(100,99,116,101,108,101,109,0)], [String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,0),String.fromCharCode(112,107,103,99,111,110,102,105,103,0)]]);
       let bootsplashV = 1;
       let guideH = 4;
         dark9.set(`${bootsplashV}`, friendsR.length << (Math.min(2, Math.abs(bootsplashV))));
      for (let u = 0; u < 2; u++) {
          let thailands: Map<any, any> = new Map([[String.fromCharCode(117,110,117,115,101,100,0),false ], [String.fromCharCode(99,111,112,121,97,100,100,0),false ]]);
          let libfabricjniR = true;
          let package_td = true;
          let path2 = 0.0;
         friendsR.push(1);
         thailands = new Map([[`${package_td}`, parseInt(`${path2}`) << (Math.min(2, Math.abs(1)))]]);
         libfabricjniR = !libfabricjniR;
         package_td = path2 < 86.41 || libfabricjniR;
      }
         androidq >>= Math.min(Math.abs(dark9.size), 5);
      resultt -= parseFloat(`${roundh.length}`);
   let playercommony = transferh >= 7133994.0;
   do {
      transferh /= Math.max(emojin, 5);
      if (playercommony) {
         break;
      }
   } while (playercommony && ((leakcheckerI - 5) > 3.62));
            setSortBy('desc');
        } else {

      resultt -= (parseFloat(`${String.fromCharCode(83,0) == roundh ? roundh.length : mail9.length}`));
   let internete = 9357038 >= roundh.length;
   do {
      roundh = `${orientationH.length}`;
      if (internete) {
         break;
      }
   } while ((2 >= roundh.length) && internete);
   if ((emojin - roundh.length) > 2 || (roundh.length - 2) > 4) {
      emojin /= Math.max(mail9.length, 4);
   }
      leakcheckerI /= Math.max(1, (lessL == String.fromCharCode(81,0) ? parseInt(`${resultt}`) : lessL.length));
       let fadfdeebbbfdabbbabdadfaaddaaE = String.fromCharCode(119,114,105,116,101,108,111,99,107,0);
         fadfdeebbbfdabbbabdadfaaddaaE = `${fadfdeebbbfdabbbabdadfaaddaaE.length}`;
         fadfdeebbbfdabbbabdadfaaddaaE += `${fadfdeebbbfdabbbabdadfaaddaaE.length}`;
      if (fadfdeebbbfdabbbabdadfaaddaaE.length > fadfdeebbbfdabbbabdadfaaddaaE.length) {
         fadfdeebbbfdabbbabdadfaaddaaE += `${(String.fromCharCode(112,0) == fadfdeebbbfdabbbabdadfaaddaaE ? fadfdeebbbfdabbbabdadfaaddaaE.length : fadfdeebbbfdabbbabdadfaaddaaE.length)}`;
      }
      adultF &= roundh.length >> (Math.min(Math.abs(3), 4));
      mail9 = [3];
            setSortBy('asc');
        }
    }

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
                    renderItem={({ item, index }: { item: string, index: number }) => {
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
                    }}
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
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
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