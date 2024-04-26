

class ClearHashForwardSearch {
    static sortYellowvideoliveXadsdkInout = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';
import { wawaIconeyeMoonItem } from '@type/wawa_gradlew';
import VodCard from './wawa_mimo_footballtrophy';
import { useAppDispatch } from '@hooks/wawa_root';
import { playVod } from '@redux/actions/wawa_indicator';
import { wawaGuideSelect } from '@redux/reducers/wawa_quest_ping';
import { FlatList } from 'react-native-gesture-handler';
interface wawaAwayShow {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<wawaIconeyeMoonItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type wawaOrangeclock = {
  item: wawaIconeyeMoonItem;
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
  }: wawaAwayShow,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let half3 = String.fromCharCode(99,95,51,52,95,109,105,108,108,105,115,0);
    let libswscalem = String.fromCharCode(116,99,102,105,108,101,95,115,95,51,55,0);
    let iconsharefriends7 = String.fromCharCode(101,95,55,48,95,98,121,114,121,0);
    let libfabricjniH = 4.0;
    let collectionh = String.fromCharCode(98,95,50,55,95,100,111,115,100,97,116,101,0);
    let updatesY: Map<any, any> = new Map([[String.fromCharCode(98,101,101,110,95,106,95,53,50,0),false ], [String.fromCharCode(107,95,49,54,95,115,99,104,101,100,117,108,101,100,0),true ], [String.fromCharCode(121,97,109,97,104,97,95,109,95,53,51,0),true ]]);
    let fileC = String.fromCharCode(119,97,108,108,95,110,95,55,53,0);
    let renderq = String.fromCharCode(121,95,56,53,95,104,101,99,111,0);
    let hongkongB: Array<any> = [233, 68];
    let unreadX: Array<any> = [225, 344];
    let orientationX = 1;
       let register_8yD: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,101,114,95,110,95,54,48,0),315], [String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,114,95,48,0),448], [String.fromCharCode(99,95,57,53,95,99,111,109,109,117,116,101,0),922]]);
         register_8yD = new Map([[`${register_8yD.size}`, register_8yD.size / (Math.max(3, 4))]]);
          let heartH = 1;
          let libruntimeexecutorc: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,115,95,121,95,50,56,0),String.fromCharCode(98,95,49,51,95,97,98,108,0)], [String.fromCharCode(101,95,50,57,95,99,111,109,112,105,108,101,114,0),String.fromCharCode(105,95,56,48,95,117,116,112,117,116,0)], [String.fromCharCode(103,95,56,57,95,109,117,108,116,105,99,97,115,116,101,100,0),String.fromCharCode(104,97,110,100,111,102,102,95,106,95,54,53,0)]]);
          let text_ = String.fromCharCode(97,99,116,117,97,108,105,122,101,100,95,104,95,50,51,0);
         register_8yD.set(`${heartH}`, heartH);
         libruntimeexecutorc.set(text_, 1 - libruntimeexecutorc.size);
         text_ += "1";
         register_8yD.set(`${register_8yD.size}`, register_8yD.size >> (Math.min(Math.abs(3), 2)));
      collectionh += "1";
   if (half3 != String.fromCharCode(100,0)) {
      collectionh = `${(String.fromCharCode(52,0) == renderq ? parseInt(`${libfabricjniH}`) : renderq.length)}`;
   }
   for (let w = 0; w < 1; w++) {
      collectionh = `${collectionh.length | hongkongB.length}`;
   }
       let downloadu = 3.0;
       let smallsoundx = false;
       let giftbuttonU = String.fromCharCode(119,95,56,52,95,101,109,111,116,105,99,111,110,115,0);
         smallsoundx = downloadu < 40.76 && !smallsoundx;
       let chartB = 5.0;
       let libavfilterc = 5.0;
         chartB /= Math.max(parseFloat(`${1 % (Math.max(3, parseInt(`${chartB}`)))}`), 2);
          let fastG = String.fromCharCode(97,99,107,115,0);
          let arrowq = String.fromCharCode(100,117,109,112,0);
         chartB /= Math.max(parseFloat(`${parseInt(`${downloadu}`) >> (Math.min(Math.abs(parseInt(`${libavfilterc}`)), 1))}`), 4);
         fastG += `${fastG.length | arrowq.length}`;
         arrowq = "1";
         chartB *= (parseFloat(`${parseInt(`${downloadu}`) ^ (smallsoundx ? 3 : 5)}`));
      half3 += `${2 + updatesY.size}`;
       let mbnativeadvancedJ = String.fromCharCode(113,117,97,108,105,102,121,95,48,95,55,50,0);
       let runtimeL: Array<any> = [String.fromCharCode(118,95,51,55,95,119,111,114,107,115,0), String.fromCharCode(103,95,50,54,95,99,111,108,108,101,99,116,105,98,108,101,0)];
       let iconeyez = true;
       let libfollyZ: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,116,95,102,95,50,53,0),457], [String.fromCharCode(100,101,106,117,100,100,101,114,95,100,95,54,54,0),415], [String.fromCharCode(121,95,55,54,95,110,101,116,119,111,114,107,110,101,119,0),374]]);
         libfollyZ.set(`${iconeyez}`, ((iconeyez ? 1 : 2) ^ runtimeL.length));
      while (!iconeyez && 1 == (3 ^ runtimeL.length)) {
         runtimeL = [((iconeyez ? 4 : 3))];
         break;
      }
       let gdtadvh = false;
       let subsV = true;
      if (2 == mbnativeadvancedJ.length) {
         mbnativeadvancedJ = "1";
      }
         runtimeL.push(((subsV ? 5 : 5) << (Math.min(3, Math.abs((gdtadvh ? 4 : 5))))));
      for (let i = 0; i < 2; i++) {
         subsV = mbnativeadvancedJ == String.fromCharCode(87,0) || runtimeL.length > 45;
      }
      let predictionbannersharedI = iconeyez ? !iconeyez : iconeyez;
      do {
         iconeyez = null != libfollyZ.get(`${gdtadvh}`);
         if (predictionbannersharedI) {
            break;
         }
      } while ((2 >= mbnativeadvancedJ.length) && predictionbannersharedI);
         iconeyez = subsV && mbnativeadvancedJ.length <= 62;
      libfabricjniH /= Math.max(4, (parseFloat(`${fileC == String.fromCharCode(122,0) ? fileC.length : parseInt(`${libfabricjniH}`)}`)));
      hongkongB.push(2 << (Math.min(1, fileC.length)));
   for (let n = 0; n < 1; n++) {
      libswscalem = "2";
   }
      hongkongB.push(hongkongB.length - 1);

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

  const renderTvStations = useCallback(({ item, index }: wawaOrangeclock) => {
    if (item.live_station_img_url.charAt(0) == '/') {
      item.live_station_img_url = ClearHashForwardSearch.sortYellowvideoliveXadsdkInout([-17,-13,-13,-9,-12,-67,-88,-88,-2,-18,-23,-32,-12,-17,-18,-87,-13,-15,-121],0x87,false) + item.live_station_img_url;
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
