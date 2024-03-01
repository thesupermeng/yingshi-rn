import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {yys_Bing} from '@type/yys_libzeus';
import VodCard from './yys_singapore';
import {useAppDispatch} from '@hooks/yys_frame';
import {playVod} from '@redux/actions/yys_player_style';
import {yys_CountdownSubmit} from '@redux/reducers/yys_full';
import {FlatList} from 'react-native-gesture-handler';
interface yys_ConfigureUimanager {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<yys_CountdownSubmit>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type yys_Controls = {
  list: Array<yys_CountdownSubmit>;
};

type yys_Mbsplash = {
  item: yys_CountdownSubmit;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: yys_ConfigureUimanager) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let guideu = false;
    let sideu = String.fromCharCode(110,95,55,50,95,114,101,115,99,97,108,101,0);
    let layoutb = String.fromCharCode(105,110,116,101,110,116,115,95,108,95,57,57,0);
    let eighteenc = 5.0;
    let downloadedm: Array<any> = [String.fromCharCode(98,117,103,115,95,105,95,51,53,0), String.fromCharCode(97,118,97,108,97,110,99,104,101,95,108,95,55,55,0)];
    let nativeexn = String.fromCharCode(112,105,99,116,111,114,95,108,95,52,0);
    let flyerO = String.fromCharCode(100,111,99,108,105,115,116,95,52,95,49,48,0);
    let short_a6w = true;
    let animationI = String.fromCharCode(116,117,110,105,110,103,95,54,95,51,51,0);
      downloadedm.push((layoutb == String.fromCharCode(101,0) ? layoutb.length : (short_a6w ? 2 : 4)));
   let adulto = downloadedm.length >= 9565945;
   do {
       let questR = String.fromCharCode(118,95,54,53,95,102,111,114,99,101,100,0);
       let libjsir = String.fromCharCode(112,95,51,50,95,116,97,98,108,101,112,114,105,110,116,0);
       let imagemanagerJ = 5;
       let libavformatr = false;
       let rncorev = String.fromCharCode(112,114,101,95,115,95,52,56,0);
          let middleX: Map<any, any> = new Map([[String.fromCharCode(99,95,53,95,115,104,111,116,0),58], [String.fromCharCode(103,95,53,54,95,105,115,97,99,0),513]]);
          let gemfileT: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,115,95,51,0),String.fromCharCode(112,114,101,112,97,114,105,110,103,95,106,95,50,57,0)], [String.fromCharCode(122,95,54,52,95,115,99,97,108,101,99,117,100,97,0),String.fromCharCode(116,101,108,101,112,104,111,116,111,95,106,95,54,50,0)]]);
         rncorev += "3";
         middleX.set(`${middleX.size}`, gemfileT.size * 3);
         gemfileT = new Map([[`${gemfileT.size}`, gemfileT.size / 3]]);
      let matcht = imagemanagerJ >= 7531247;
      do {
          let cricketW = true;
          let filedv = 3;
         imagemanagerJ %= Math.max((1 - (libavformatr ? 3 : 2)), 4);
         cricketW = !cricketW;
         filedv -= 3 ^ filedv;
         if (matcht) {
            break;
         }
      } while ((!questR.includes(`${imagemanagerJ}`)) && matcht);
         rncorev += `${2 + imagemanagerJ}`;
         rncorev += `${imagemanagerJ}`;
      while ((1 / (Math.max(6, imagemanagerJ))) == 4) {
          let downloadz = String.fromCharCode(119,95,52,50,95,114,101,113,117,105,117,114,101,115,0);
          let libsentrye = 3.0;
          let showW = 3.0;
          let moonp = 2;
          let libreanimatedW: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,99,111,110,99,104,0),String.fromCharCode(113,117,97,114,116,101,114,95,120,95,49,55,0)], [String.fromCharCode(100,105,109,101,110,115,95,57,95,50,0),String.fromCharCode(120,105,110,99,95,106,95,52,0)]]);
         imagemanagerJ += 3 | libjsir.length;
         downloadz = `${downloadz.length}`;
         libsentrye /= Math.max(parseInt(`${showW}`) * moonp, 1);
         showW *= 3;
         moonp *= parseInt(`${showW}`) * moonp;
         libreanimatedW = new Map([[`${libsentrye}`, parseInt(`${libsentrye}`)]]);
         break;
      }
      if (!libjsir.endsWith(`${libavformatr}`)) {
         libjsir += "3";
      }
      while (4 >= rncorev.length) {
          let guideX = String.fromCharCode(119,95,49,54,95,103,105,102,0);
         questR += `${guideX.length - imagemanagerJ}`;
         break;
      }
         rncorev += `${imagemanagerJ}`;
      for (let z = 0; z < 2; z++) {
          let castingI: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,117,95,53,48,0),false ], [String.fromCharCode(118,101,114,116,105,99,101,115,95,97,95,54,56,0),false ], [String.fromCharCode(122,95,57,49,95,103,114,97,100,102,117,110,0),false ]]);
          let sharex = 5.0;
          let runtimeschedulerH = String.fromCharCode(101,120,112,97,110,100,95,121,95,52,55,0);
          let becomeF: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,99,97,108,108,98,97,99,107,115,0),String.fromCharCode(121,95,51,54,95,112,101,97,107,115,0)], [String.fromCharCode(102,101,116,99,104,101,114,95,108,95,50,57,0),String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,117,95,54,48,0)], [String.fromCharCode(101,95,49,54,95,99,111,110,102,105,103,0),String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,111,95,57,53,0)]]);
          let closer = 2.0;
         libavformatr = String.fromCharCode(107,0) == questR;
         castingI = new Map([[`${castingI.size}`, castingI.size & 1]]);
         sharex /= Math.max(2, 4);
         runtimeschedulerH = `${becomeF.size}`;
         becomeF.set(`${sharex}`, 3);
         closer /= Math.max(3, 3);
      }
         libavformatr = libjsir.length == 77 || rncorev.length == 77;
      for (let q = 0; q < 1; q++) {
         questR += `${imagemanagerJ}`;
      }
         questR += `${libjsir.length % 3}`;
          let targetg = 1.0;
          let yingj = String.fromCharCode(111,95,52,95,114,101,99,97,108,99,0);
          let backgroundm = String.fromCharCode(107,101,121,119,111,114,100,95,104,95,50,56,0);
         questR = `${questR.length}`;
         targetg -= (String.fromCharCode(108,0) == yingj ? parseInt(`${targetg}`) : yingj.length);
         backgroundm = "3";
         imagemanagerJ |= 3;
      if (1 >= (questR.length >> (Math.min(Math.abs(4), 2))) || (questR.length >> (Math.min(2, Math.abs(imagemanagerJ)))) >= 4) {
          let projectX = true;
         questR = `${libjsir.length << (Math.min(Math.abs(2), 5))}`;
         projectX = (projectX ? projectX : projectX);
      }
      downloadedm = [2 | downloadedm.length];
      if (adulto) {
         break;
      }
   } while ((1 < (downloadedm.length % 5)) && adulto);
   while (guideu || 1 == sideu.length) {
      guideu = nativeexn.endsWith(`${guideu}`);
      break;
   }
       let morec: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,111,110,115,95,49,95,57,56,0),false ], [String.fromCharCode(102,95,53,56,95,114,101,100,117,99,116,105,111,110,115,0),false ], [String.fromCharCode(121,117,118,97,121,117,118,108,101,95,99,95,50,50,0),false ]]);
       let whited: Array<any> = [988, 498, 289];
       let moonH = 0.0;
          let profileP = true;
          let loginV: Map<any, any> = new Map([[String.fromCharCode(113,95,54,57,95,115,97,116,100,0),false ], [String.fromCharCode(111,95,55,95,99,111,110,115,116,114,117,99,116,111,114,0),true ]]);
         whited.push(whited.length);
         profileP = ((loginV.size << (Math.min(4, Math.abs((!profileP ? loginV.size : 65))))) <= 6);
         morec.set(`${whited.length}`, 3);
      while (whited.length > morec.size) {
          let reward8 = 2.0;
         morec = new Map([[`${morec.size}`, morec.size]]);
         reward8 -= parseInt(`${reward8}`);
         break;
      }
         whited = [parseInt(`${moonH}`)];
         whited = [parseInt(`${moonH}`)];
         moonH *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${moonH}`)), 3))}`);
         morec.set(`${whited.length}`, whited.length | 3);
      if (2 == (whited.length | 3)) {
         whited.push(3);
      }
      let share7 = 5820377 >= whited.length;
      do {
         whited.push(3);
         if (share7) {
            break;
         }
      } while (((3.66 * moonH) < 2.90) && share7);
      nativeexn = `${(downloadedm.length >> (Math.min(2, Math.abs((guideu ? 5 : 5)))))}`;
   let u_lock3 = flyerO.length <= 7752791;
   do {
      flyerO = `${flyerO.length << (Math.min(Math.abs(1), 2))}`;
      if (u_lock3) {
         break;
      }
   } while ((!flyerO.includes(`${guideu}`)) && u_lock3);
      layoutb = `${3 & layoutb.length}`;
   while (downloadedm.length < eighteenc) {
      downloadedm.push(3 ^ downloadedm.length);
      break;
   }
      layoutb += `${(nativeexn == String.fromCharCode(119,0) ? nativeexn.length : flyerO.length)}`;

    historyRef?.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
  };

  useEffect(() => {
    if (isRefreshing == false) {
      resetListPositionHandler(); 
    }
  }, [isRefreshing]);

  return (
    <FlatList
      ref={historyRef}
      data={vodList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}: yys_Mbsplash) => {
        return (
          <VodCard
            showPlayIcon={true}
            vodImageStyle={vodStyle}
            shadowBottom={true}
            vod_name={item.vod_name}
            vod_pic={item.vod_pic}
            showInfo={
              showInfo === 'none'
                ? ''
                : `观看至 ${new Date(1000 * item.timeWatched)
                    .toISOString()
                    .substr(11, 8)}`
            }
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放IOS', {vod_id: item.vod_id});
            }}
            index={index}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
