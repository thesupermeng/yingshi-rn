import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {XVSScoreDark} from '@type/wpk_long';
import VodCard from './qee_dice';
import {useAppDispatch} from '@hooks/kg_index';
import {playVod} from '@redux/actions/xif_layout';
import {VFMode} from '@redux/reducers/pxk_lang_quest';
import {FlatList} from 'react-native-gesture-handler';
interface XFillButton {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<VFMode>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type XPUMapping = {
  list: Array<VFMode>;
};

type MEYMode = {
  item: VFMode;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: XFillButton) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let volumef = 5.0;
    let feedbackG = String.fromCharCode(112,114,101,115,101,114,118,101,95,117,95,54,50,0);
    let canvasx = 5.0;
    let vignettee = 1;
    let bannerb = 3.0;
    let yellowp = true;
    let flyert = String.fromCharCode(115,112,107,114,95,108,95,56,0);
    let hoverG: Array<any> = [688, 906, 482];
    let description_z0x = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,117,95,50,52,0);
    let orangeN: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,99,108,101,115,95,114,95,56,57,0),135], [String.fromCharCode(120,95,49,53,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),638]]);
    let appleC: Map<any, any> = new Map([[String.fromCharCode(111,95,57,51,95,112,114,111,112,111,114,116,105,111,110,97,108,0),643], [String.fromCharCode(97,120,105,115,95,102,95,55,55,0),750]]);
    let score3: Array<any> = [String.fromCharCode(114,95,55,57,95,122,111,111,109,101,100,0), String.fromCharCode(100,95,49,56,95,109,101,116,114,105,99,115,0)];
    let refresh5: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,95,98,95,54,51,0),178], [String.fromCharCode(111,100,97,116,97,95,112,95,50,53,0),161], [String.fromCharCode(113,95,51,55,95,109,97,112,115,116,114,105,110,103,0),53]]);
    let textG: Map<any, any> = new Map([[String.fromCharCode(115,116,109,116,95,112,95,52,56,0),String.fromCharCode(103,101,116,108,97,100,100,114,115,95,102,95,50,53,0)], [String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,49,95,57,49,0),String.fromCharCode(111,100,109,108,95,105,95,56,48,0)], [String.fromCharCode(119,95,50,50,95,105,115,109,108,0),String.fromCharCode(97,116,116,97,99,107,95,48,95,51,56,0)]]);
    let bottom7 = true;
    let telegramh = String.fromCharCode(106,95,55,51,95,109,117,108,116,105,101,110,100,0);
   for (let q = 0; q < 1; q++) {
       let downloadingz = String.fromCharCode(105,95,55,95,118,97,108,105,100,97,116,111,114,0);
       let nterstitialq: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,101,114,115,95,48,95,52,54,0),970], [String.fromCharCode(114,116,109,112,101,95,101,95,53,54,0),919]]);
       let become4 = String.fromCharCode(102,105,110,100,101,112,95,52,95,49,49,0);
       let borderlessZ = String.fromCharCode(112,114,101,102,101,114,95,122,95,54,53,0);
         nterstitialq.set(become4, become4.length << (Math.min(1, downloadingz.length)));
         nterstitialq = new Map([[`${nterstitialq.size}`, (downloadingz == String.fromCharCode(76,0) ? nterstitialq.size : downloadingz.length)]]);
      for (let r = 0; r < 2; r++) {
          let unselectedZ = String.fromCharCode(109,105,120,105,110,115,95,104,95,53,0);
          let delegate_sI = String.fromCharCode(117,110,99,114,111,112,112,101,100,95,53,95,57,52,0);
          let tooltipst: Map<any, any> = new Map([[String.fromCharCode(98,95,54,48,95,117,110,101,109,98,101,100,0),false ], [String.fromCharCode(114,101,118,105,115,105,111,110,95,97,95,51,55,0),false ]]);
          let stationsP = 2.0;
         downloadingz = `${(String.fromCharCode(115,0) == borderlessZ ? borderlessZ.length : delegate_sI.length)}`;
         unselectedZ += "2";
         delegate_sI = "3";
         tooltipst = new Map([[`${tooltipst.size}`, unselectedZ.length ^ 3]]);
         stationsP += parseFloat(`${parseInt(`${stationsP}`)}`);
      }
       let result5 = false;
      if ((nterstitialq.size | downloadingz.length) > 4) {
         nterstitialq = new Map([[`${nterstitialq.size}`, borderlessZ.length]]);
      }
       let privilegeM = String.fromCharCode(105,95,57,51,95,100,105,112,111,115,97,98,108,101,0);
       let pointX = String.fromCharCode(104,95,53,53,95,101,120,105,115,116,105,110,103,0);
      while (downloadingz == String.fromCharCode(104,0) && pointX.length <= 3) {
         downloadingz = `${((result5 ? 3 : 3))}`;
         break;
      }
         become4 += `${downloadingz.length & 1}`;
          let overv = String.fromCharCode(102,105,108,116,101,114,101,100,95,97,95,55,52,0);
          let hoverN = String.fromCharCode(98,117,102,115,95,120,95,50,48,0);
         result5 = (become4.length | borderlessZ.length) == 32;
         overv += `${2 & overv.length}`;
         hoverN = `${hoverN.length}`;
      let matchesF = privilegeM.length >= 7992719;
      do {
          let animationA: Array<any> = [String.fromCharCode(111,117,116,98,111,120,95,53,95,57,57,0), String.fromCharCode(111,117,114,95,98,95,55,51,0), String.fromCharCode(99,95,52,51,95,114,101,115,105,100,117,101,115,0)];
          let giftb = true;
         privilegeM += `${borderlessZ.length * 2}`;
         animationA.push(3 - animationA.length);
         giftb = animationA.length < 55;
         if (matchesF) {
            break;
         }
      } while ((pointX != privilegeM) && matchesF);
       let uploadi = String.fromCharCode(106,95,53,54,95,100,111,116,0);
      while (borderlessZ == String.fromCharCode(66,0) || pointX != String.fromCharCode(121,0)) {
          let overq: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,95,120,95,49,49,0),false ], [String.fromCharCode(106,95,50,56,95,99,111,110,115,116,114,97,105,110,116,0),false ], [String.fromCharCode(112,114,111,116,111,99,111,108,95,99,95,56,54,0),true ]]);
          let thumbnailb = 4;
          let grayu: Map<any, any> = new Map([[String.fromCharCode(104,108,115,101,110,99,95,112,95,53,53,0),false ], [String.fromCharCode(105,115,115,117,101,115,95,97,95,53,54,0),false ]]);
          let sendC = false;
         pointX += `${borderlessZ.length >> (Math.min(Math.abs(2), 1))}`;
         overq = new Map([[`${overq.size}`, overq.size]]);
         thumbnailb &= 1;
         grayu = new Map([[`${overq.size}`, overq.size / (Math.max(2, 1))]]);
         sendC = thumbnailb == 31;
         break;
      }
      hoverG = [parseInt(`${bannerb}`)];
   }
   while ((2.35 * canvasx) <= 2.56 && 1.5 <= (canvasx * 2.35)) {
      canvasx += 3;
      break;
   }
       let sharedC = String.fromCharCode(102,95,49,53,95,108,105,98,99,0);
       let profileu = 2;
      while ((profileu / (Math.max(sharedC.length, 9))) < 5 && (profileu / 5) < 5) {
          let combinedD = 0;
          let shrink5 = String.fromCharCode(115,101,116,114,97,110,103,101,95,55,95,53,55,0);
          let launchl = 3.0;
          let preview8: Array<any> = [String.fromCharCode(116,95,56,50,95,112,111,115,105,116,105,111,110,115,0), String.fromCharCode(112,95,55,51,95,97,109,101,114,97,0)];
          let castingT: Map<any, any> = new Map([[String.fromCharCode(109,95,54,52,95,114,115,99,99,0),true ], [String.fromCharCode(100,101,108,97,121,101,100,95,113,95,54,56,0),true ], [String.fromCharCode(97,95,55,51,95,115,101,116,99,98,0),false ]]);
         profileu /= Math.max(2, sharedC.length);
         combinedD ^= (String.fromCharCode(74,0) == shrink5 ? shrink5.length : parseInt(`${launchl}`));
         launchl /= Math.max(combinedD ^ preview8.length, 4);
         preview8 = [combinedD << (Math.min(Math.abs(parseInt(`${launchl}`)), 2))];
         castingT = new Map([[shrink5, shrink5.length]]);
         break;
      }
          let sportk = 1.0;
         sharedC += `${profileu * parseInt(`${sportk}`)}`;
      let descB = sharedC.length <= 9005152;
      do {
         sharedC += `${profileu}`;
         if (descB) {
            break;
         }
      } while (descB && (3 > sharedC.length));
      let const_a8 = profileu >= 6853254;
      do {
         profileu ^= (String.fromCharCode(101,0) == sharedC ? sharedC.length : profileu);
         if (const_a8) {
            break;
         }
      } while ((sharedC.startsWith(`${profileu}`)) && const_a8);
      while ((2 & profileu) == 5 && 2 == (profileu & sharedC.length)) {
         profileu >>= Math.min(Math.abs(sharedC.length ^ profileu), 1);
         break;
      }
         sharedC = `${3 | sharedC.length}`;
      flyert += "2";
   if (description_z0x == String.fromCharCode(67,0) || feedbackG != String.fromCharCode(97,0)) {
       let activep = false;
       let catagoryl = String.fromCharCode(119,95,53,55,95,99,111,108,111,114,102,117,108,0);
       let hovers = true;
       let targetp = false;
       let starP = 1.0;
         targetp = !catagoryl.includes(`${hovers}`);
         activep = !targetp;
          let h_centerA = String.fromCharCode(121,95,54,57,95,104,97,114,100,116,104,114,101,115,104,0);
          let y_viewl = 2.0;
          let roomv: Map<any, any> = new Map([[String.fromCharCode(114,97,109,112,117,112,95,101,95,49,53,0),200], [String.fromCharCode(114,95,52,95,97,100,100,105,116,105,111,110,97,108,0),649]]);
         starP -= parseFloat(`${h_centerA.length | 3}`);
         h_centerA += `${roomv.size - 2}`;
         y_viewl /= Math.max(roomv.size | parseInt(`${y_viewl}`), 2);
      while (4 <= (5 << (Math.min(2, catagoryl.length)))) {
         catagoryl += `${((hovers ? 3 : 3) >> (Math.min(Math.abs((targetp ? 3 : 1)), 1)))}`;
         break;
      }
         activep = !targetp || !hovers;
      if ((5.75 + starP) > 1.48) {
          let layout8 = 5.0;
          let time_bng = String.fromCharCode(115,116,114,108,99,97,116,95,122,95,53,51,0);
          let team0 = String.fromCharCode(121,95,56,53,95,99,111,100,101,102,0);
         starP *= (parseFloat(`${catagoryl == String.fromCharCode(74,0) ? catagoryl.length : team0.length}`));
         layout8 *= 1;
         time_bng = `${time_bng.length | 1}`;
         team0 += `${3 & parseInt(`${layout8}`)}`;
      }
         activep = (((!targetp ? 17 : catagoryl.length) >> (Math.min(catagoryl.length, 3))) >= 17);
      for (let p = 0; p < 2; p++) {
         catagoryl = `${(3 % (Math.max((hovers ? 2 : 5), 10)))}`;
      }
      let launchd = activep ? !activep : activep;
      do {
         activep = targetp;
         if (launchd) {
            break;
         }
      } while (launchd && (!activep && targetp));
      if (!targetp) {
         starP += (parseFloat(`${(hovers ? 5 : 5) / (Math.max(2, (activep ? 1 : 4)))}`));
      }
      if (hovers || activep) {
         hovers = 4.99 <= starP || targetp;
      }
      for (let z = 0; z < 1; z++) {
         catagoryl += `${((activep ? 2 : 5) - catagoryl.length)}`;
      }
      for (let p = 0; p < 3; p++) {
         starP *= (parseFloat(`${String.fromCharCode(98,0) == catagoryl ? (activep ? 1 : 2) : catagoryl.length}`));
      }
      while (starP == 1.40 || 3.85 == (starP + 1.40)) {
          let checkbox5 = 5.0;
         starP /= Math.max(parseFloat(`${parseInt(`${starP}`) >> (Math.min(Math.abs(parseInt(`${checkbox5}`)), 3))}`), 1);
         break;
      }
         targetp = !hovers;
      description_z0x = `${parseInt(`${bannerb}`) << (Math.min(3, Math.abs(2)))}`;
   }
   if ((5 - orangeN.size) < 1) {
      vignettee |= 1;
   }
      score3.push(parseInt(`${volumef}`) << (Math.min(Math.abs(2), 5)));
   if (2 >= description_z0x.length) {
      description_z0x = `${orangeN.size / (Math.max(flyert.length, 3))}`;
   }
   for (let r = 0; r < 2; r++) {
      appleC.set(feedbackG, 2);
   }
   if (bannerb > volumef) {
      bannerb -= 1 ^ flyert.length;
   }
   for (let d = 0; d < 1; d++) {
      yellowp = 72.25 == bannerb;
   }
   if (flyert.length > 2) {
      flyert = `${parseInt(`${canvasx}`)}`;
   }

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
      renderItem={({item, index}: MEYMode) => {
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
