

class PhoneAgreement {
    static bootsplashMappingLaunch = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {XVSScoreDark} from '@type/wpk_long';
import {XPaginationWeiboItem} from '@type/wpk_long';
import VodCard from './qee_dice';
import {useAppDispatch} from '@hooks/kg_index';
import {playVod} from '@redux/actions/xif_layout';
import {VFMode} from '@redux/reducers/pxk_lang_quest';
import {FlatList} from 'react-native-gesture-handler';
interface XFillButton {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<XPaginationWeiboItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type LKOverlay = {
  item: XPaginationWeiboItem;
  index: number; 
};

export default function VodLiveStationList(
  {
    vodStyle,
    horizontal = true,
    liveStationList = [],
    onlyShow = null,
    showInfo = 'none',
    isRefreshing = false,
  }: XFillButton,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let dangerq = String.fromCharCode(106,115,105,109,100,99,112,117,95,49,95,53,0);
    let singaporeE = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,109,95,54,49,0);
    let downloaderZ = 3.0;
    let otherZ: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,101,114,95,118,95,55,51,0),803], [String.fromCharCode(97,100,109,105,110,115,95,97,95,52,55,0),34], [String.fromCharCode(110,115,116,97,110,116,95,115,95,49,48,0),650]]);
    let sheetZ = String.fromCharCode(118,111,105,99,101,95,107,95,55,55,0);
    let gestures4 = 2;
    let membershipu: Array<any> = [String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,113,95,50,56,0), String.fromCharCode(106,95,57,55,95,100,111,119,110,115,99,97,108,101,0), String.fromCharCode(102,117,108,108,98,97,110,100,95,50,95,57,51,0)];
    let watchg = 0;
    let langG = 1.0;
    let fastM = String.fromCharCode(120,112,116,97,98,108,101,95,118,95,49,55,0);
    let navigationc = String.fromCharCode(98,95,54,54,95,99,112,108,115,99,97,108,101,115,0);
    let fieldC = 3.0;
    let p_lockK = 2;
   while ((4 & membershipu.length) >= 2 || 4 >= (membershipu.length & singaporeE.length)) {
      membershipu = [(singaporeE == String.fromCharCode(69,0) ? dangerq.length : singaporeE.length)];
      break;
   }
       let ajax7 = 1.0;
       let long_an: Array<any> = [881, 339];
      if (parseFloat(`${long_an.length}`) == ajax7) {
         ajax7 *= parseFloat(`${2 >> (Math.min(1, long_an.length))}`);
      }
      let inactiveN = 5850854.0 <= ajax7;
      do {
          let saveq = 2.0;
          let moditya = String.fromCharCode(108,95,56,95,116,111,107,101,110,105,122,101,114,0);
          let predictionD = String.fromCharCode(112,95,55,95,108,101,115,115,0);
          let sortU: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,112,108,97,99,101,0),true ], [String.fromCharCode(114,101,99,111,110,110,101,99,116,95,54,95,57,51,0),false ]]);
          let submitZ = 1;
         ajax7 /= Math.max(parseFloat(`${parseInt(`${saveq}`)}`), 2);
         saveq -= moditya.length | 2;
         moditya = `${1 * sortU.size}`;
         predictionD += `${predictionD.length & 2}`;
         sortU = new Map([[`${submitZ}`, moditya.length]]);
         submitZ *= 2;
         if (inactiveN) {
            break;
         }
      } while (inactiveN && (long_an.includes(ajax7)));
          let philippinesk: Map<any, any> = new Map([[String.fromCharCode(106,95,57,57,95,115,107,105,112,105,110,116,114,97,0),364], [String.fromCharCode(118,95,49,49,95,115,116,116,115,0),633]]);
          let arrowj = true;
         ajax7 /= Math.max((parseFloat(`${(arrowj ? 1 : 4) << (Math.min(Math.abs(1), 5))}`)), 3);
         philippinesk = new Map([[`${philippinesk.size}`, philippinesk.size % (Math.max(3, 4))]]);
         arrowj = 68 < philippinesk.size;
      let tempY = ajax7 >= 5899001.0;
      do {
         ajax7 -= parseFloat(`${2 >> (Math.min(5, long_an.length))}`);
         if (tempY) {
            break;
         }
      } while ((1 > (parseInt(`${ajax7}`) / (Math.max(3, long_an.length)))) && tempY);
      if ((2.100 - ajax7) < 5.47) {
         ajax7 *= parseFloat(`${long_an.length & parseInt(`${ajax7}`)}`);
      }
      let nalyticsl = 6977823.0 >= ajax7;
      do {
          let cornerp = false;
          let favorited = 2;
          let actionsp = 2.0;
         ajax7 += parseFloat(`${long_an.length}`);
         cornerp = cornerp || favorited == 89;
         favorited /= Math.max(2, 2 / (Math.max(parseInt(`${actionsp}`), 8)));
         actionsp += (parseInt(`${actionsp}`) ^ (cornerp ? 3 : 5));
         if (nalyticsl) {
            break;
         }
      } while (((5 | long_an.length) == 1 && 4 == (5 * long_an.length)) && nalyticsl);
      membershipu.push(otherZ.size + 3);
   for (let e = 0; e < 1; e++) {
      downloaderZ *= 3 * fastM.length;
   }
      singaporeE += `${gestures4 << (Math.min(4, Math.abs(3)))}`;
   for (let r = 0; r < 2; r++) {
      membershipu.push(parseInt(`${langG}`) + 2);
   }
   let episodes7 = String.fromCharCode(103,53,115,100,51,53,0) == dangerq;
   do {
      dangerq += `${fastM.length << (Math.min(Math.abs(3), 5))}`;
      if (episodes7) {
         break;
      }
   } while (((dangerq.length * langG) < 3.45 && 3.45 < (dangerq.length * langG)) && episodes7);
      singaporeE += `${gestures4 & 1}`;
       let nalyticsY = true;
      for (let s = 0; s < 2; s++) {
         nalyticsY = !nalyticsY && nalyticsY;
      }
       let crownf: Map<any, any> = new Map([[String.fromCharCode(113,117,97,100,95,103,95,54,0),202], [String.fromCharCode(97,114,101,118,101,114,115,101,95,100,95,49,56,0),300]]);
       let starn = String.fromCharCode(117,95,57,57,95,115,108,105,99,101,115,0);
      fastM += `${parseInt(`${downloaderZ}`)}`;
      gestures4 >>= Math.min(3, Math.abs(gestures4));
       let hongkongH = false;
       let unselectedS = 0.0;
       let darkT = String.fromCharCode(116,95,57,51,95,103,117,97,114,97,110,116,101,101,0);
         unselectedS *= parseFloat(`${darkT.length}`);
         unselectedS -= parseFloat(`${darkT.length}`);
      if (4.54 > (unselectedS + 4.41) || (unselectedS + parseFloat(`${darkT.length}`)) > 4.41) {
          let nterstitialP = 2.0;
          let textS: Array<any> = [String.fromCharCode(113,95,55,53,0), String.fromCharCode(118,95,56,48,95,105,110,101,116,0), String.fromCharCode(117,95,54,49,95,112,114,101,115,101,114,118,101,0)];
          let grayQ = true;
         unselectedS /= Math.max(parseFloat(`${parseInt(`${unselectedS}`) & 3}`), 4);
         nterstitialP *= parseFloat(`${3 ^ parseInt(`${nterstitialP}`)}`);
         textS.push(textS.length);
         grayQ = !grayQ;
      }
      if (darkT.includes(`${unselectedS}`)) {
         darkT += `${(String.fromCharCode(76,0) == darkT ? darkT.length : parseInt(`${unselectedS}`))}`;
      }
          let hoverg = String.fromCharCode(97,112,112,114,111,118,101,95,122,95,49,48,48,0);
         hongkongH = !hongkongH;
         hoverg += "1";
         unselectedS -= (parseFloat(`${darkT == String.fromCharCode(121,0) ? (hongkongH ? 5 : 1) : darkT.length}`));
         hongkongH = !hongkongH;
          let descQ: Map<any, any> = new Map([[String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,121,95,52,48,0),951], [String.fromCharCode(100,95,51,55,95,115,107,101,119,0),915]]);
          let linkT = 0;
         darkT += `${parseInt(`${unselectedS}`)}`;
         descQ.set(`${linkT}`, 1);
         linkT &= descQ.size;
      while (3 == (darkT.length * 2)) {
          let assistx: Map<any, any> = new Map([[String.fromCharCode(121,117,118,110,118,99,95,50,95,55,57,0),68], [String.fromCharCode(114,101,115,97,109,112,95,104,95,52,49,0),453]]);
          let ajax7W = String.fromCharCode(116,97,112,112,101,100,95,102,95,50,52,0);
          let sportM: Array<any> = [815, 786, 409];
         unselectedS += parseFloat(`${assistx.size}`);
         assistx.set(ajax7W, sportM.length);
         ajax7W = `${sportM.length}`;
         break;
      }
      dangerq += `${dangerq.length}`;

    liveRef?.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
  };

  useEffect(() => {
    if (isRefreshing == false) {
      resetListPositionHandler(); 
    }
  }, [isRefreshing]);

  const renderTvStations = useCallback(({item, index}: LKOverlay) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = PhoneAgreement.bootsplashMappingLaunch([41,53,53,49,50,123,110,110,57,40,32,47,38,42,32,47,53,55,111,47,36,53,65],0x41,false) + item.live_station_img_url;
    }
    return (
      <VodCard
        showPlayIcon={false}
        vodImageStyle={vodStyle}
        shadowBottom={true}
        key={item.id}
        vod_name={item.live_station_name}
        vod_pic={item.live_station_img_url}
        showInfo={''}
        onPress={() => {
          
          navigation.navigate('电视台播放', {
            liveStationItemList: liveStationList,
            liveStationItem: item,
          });
        }}
        index={index}
      />
    );
  }, []);

  return (
    <FlatList
      ref={liveRef}
      data={onlyShow ? liveStationList.slice(0, onlyShow) : liveStationList}
      initialScrollIndex={0}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderTvStations}
    />
  );
}

const styles = StyleSheet.create({});
