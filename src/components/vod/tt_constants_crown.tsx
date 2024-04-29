

class LangConst_aVietnam {
    static rulesOtherTraminiSmall = (contents: [number], key: number, hasEmoji: boolean) => {
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
import {ttAppsOther} from '@type/tt_line_borderless';
import {ttAcceptedCountItem} from '@type/tt_line_borderless';
import VodCard from './tt_count_stats';
import {useAppDispatch} from '@hooks/tt_spec_download';
import {playVod} from '@redux/actions/tt_activity';
import {ttExpired} from '@redux/reducers/tt_configure_injury';
import {FlatList} from 'react-native-gesture-handler';
interface ttSmall {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<ttAcceptedCountItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type ttRegengStations = {
  item: ttAcceptedCountItem;
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
  }: ttSmall,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let plashl = 5.0;
    let layoutH: Map<any, any> = new Map([[String.fromCharCode(105,95,49,50,95,112,114,101,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,113,95,50,0)], [String.fromCharCode(108,95,54,49,95,103,112,111,115,116,102,105,108,116,101,114,0),String.fromCharCode(115,101,108,95,119,95,52,50,0)], [String.fromCharCode(108,95,55,95,114,117,110,116,105,109,101,0),String.fromCharCode(121,95,51,52,95,97,99,101,110,99,0)]]);
    let transferK = false;
    let commentS = false;
    let pingJ = 1.0;
    let collectionb: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,115,95,101,95,54,49,0),String.fromCharCode(106,105,110,99,108,117,100,101,95,119,95,52,53,0)], [String.fromCharCode(100,101,99,111,109,112,97,110,100,95,100,95,50,48,0),String.fromCharCode(114,95,56,51,95,104,119,100,111,119,110,108,111,97,100,0)], [String.fromCharCode(104,97,110,103,95,51,95,52,50,0),String.fromCharCode(111,95,54,56,95,100,105,118,105,100,111,114,0)]]);
    let popupU = String.fromCharCode(102,95,56,53,95,101,120,116,101,110,115,105,111,110,0);
    let debugw = true;
    let eighteen5 = String.fromCharCode(109,98,101,100,95,112,95,54,54,0);
    let step1 = String.fromCharCode(104,95,52,56,95,117,110,119,105,110,100,0);
    let logoutq = 1.0;
    let downloaded2 = String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,53,95,51,54,0);
    let downloadz = String.fromCharCode(112,114,101,95,120,95,52,56,0);
    let c_title9 = false;
       let themep = String.fromCharCode(99,95,55,50,95,115,101,101,107,0);
       let searchx = true;
       let whitek: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,119,95,57,49,0),false ], [String.fromCharCode(111,95,54,57,95,109,100,97,116,101,0),true ]]);
         searchx = String.fromCharCode(55,0) == themep;
         themep += `${(themep.length + (searchx ? 3 : 1))}`;
          let profileM = String.fromCharCode(102,95,54,51,95,110,101,116,119,111,114,107,0);
          let actionY = 4.0;
         themep += `${1 + themep.length}`;
         profileM = `${parseInt(`${actionY}`) - 3}`;
         actionY += 3 ^ profileM.length;
         searchx = themep.length >= 9;
      let reducerW = 8113003 <= themep.length;
      do {
          let corew = String.fromCharCode(102,105,110,100,110,101,116,95,104,95,57,55,0);
          let typingk = 0.0;
          let verticalp = false;
         themep = `${whitek.size % (Math.max(2, 1))}`;
         corew = `${(corew == String.fromCharCode(88,0) ? corew.length : (verticalp ? 4 : 1))}`;
         typingk += (parseFloat(`${corew == String.fromCharCode(67,0) ? corew.length : parseInt(`${typingk}`)}`));
         verticalp = typingk < 20.45;
         if (reducerW) {
            break;
         }
      } while (reducerW && (themep.length >= 4));
         searchx = whitek.size <= 30 || searchx;
         searchx = themep.length < 49;
         themep = "1";
         searchx = 54 <= whitek.size;
      logoutq += step1.length;
   for (let u = 0; u < 1; u++) {
      commentS = ((eighteen5.length * (transferK ? eighteen5.length : 94)) >= 94);
   }
   let hongkong_ = plashl <= 8701476.0;
   do {
       let sort8 = false;
         sort8 = !sort8;
         sort8 = !sort8;
         sort8 = (sort8 ? sort8 : !sort8);
      plashl *= (parseFloat(`${(commentS ? 3 : 1) ^ (transferK ? 4 : 2)}`));
      if (hongkong_) {
         break;
      }
   } while ((pingJ < plashl) && hongkong_);
   if (5 > collectionb.size || 2 > (5 & collectionb.size)) {
      debugw = popupU == String.fromCharCode(82,0);
   }
       let historyl = 4;
       let sendY = 5.0;
       let switch_tv = String.fromCharCode(99,108,117,115,116,101,114,95,110,95,50,51,0);
       let debuga = String.fromCharCode(110,95,54,52,95,99,97,116,101,103,111,114,121,0);
      for (let e = 0; e < 1; e++) {
         switch_tv += `${switch_tv.length}`;
      }
      while (debuga.length == 3) {
         sendY /= Math.max(parseInt(`${sendY}`), 2);
         break;
      }
      let castingg = 8747012.0 >= sendY;
      do {
          let layoutg = String.fromCharCode(101,115,116,105,109,97,116,105,111,110,95,103,95,50,48,0);
          let mappingb = true;
         sendY /= Math.max(1, 3 * debuga.length);
         layoutg += `${(layoutg.length - (mappingb ? 4 : 3))}`;
         mappingb = !mappingb || layoutg.length == 46;
         if (castingg) {
            break;
         }
      } while (castingg && ((debuga.length << (Math.min(Math.abs(3), 4))) >= 1 && (debuga.length + sendY) >= 2.76));
      while ((sendY / 4.5) <= 5.96) {
         sendY *= 3;
         break;
      }
         sendY *= debuga.length >> (Math.min(Math.abs(1), 2));
      debugw = 68 <= collectionb.size;
      historyl += historyl ^ 3;
   let chinau = String.fromCharCode(57,54,103,119,52,117,104,114,99,99,0) == downloaded2;
   do {
      downloaded2 += "2";
      if (chinau) {
         break;
      }
   } while (chinau && (5 < (downloaded2.length % 2)));
      debugw = 76.54 < plashl;
   while (!commentS) {
      commentS = transferK;
      break;
   }
   let brightnessS = 7613983 <= step1.length;
   do {
       let untickT = 1.0;
       let specJ: Map<any, any> = new Map([[String.fromCharCode(97,118,100,101,118,105,99,101,95,50,95,54,48,0),703], [String.fromCharCode(98,95,51,54,95,112,114,111,114,101,115,100,115,112,0),909]]);
       let headerU = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,55,95,52,54,0);
       let sourceq = 5;
      if (headerU.length > 1) {
          let memberT = 0.0;
          let headerK: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,107,101,121,119,111,114,100,115,0),String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,121,95,49,54,0)], [String.fromCharCode(98,105,110,107,97,117,100,105,111,95,110,95,49,55,0),String.fromCharCode(108,111,99,97,108,104,111,115,116,95,98,95,53,56,0)]]);
         headerU += "3";
         memberT *= parseFloat(`${3 << (Math.min(1, Math.abs(parseInt(`${memberT}`))))}`);
         headerK.set(`${memberT}`, headerK.size);
      }
      while (sourceq >= untickT) {
          let foundh = String.fromCharCode(103,95,55,53,95,111,103,103,101,114,0);
         sourceq -= sourceq;
         foundh = `${foundh.length ^ foundh.length}`;
         break;
      }
      if ((parseFloat(`${specJ.size}`) + untickT) == 1.58) {
          let buttont = true;
          let fastforwardu = 5.0;
          let sigmobe = 3;
          let downloadingx = false;
          let blacklistZ: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,108,105,98,107,118,97,122,97,97,114,0),String.fromCharCode(105,118,115,101,116,117,112,95,57,95,49,48,0)], [String.fromCharCode(121,111,110,108,121,95,111,95,51,56,0),String.fromCharCode(121,95,52,57,95,108,111,99,97,108,97,100,100,114,0)]]);
         specJ.set(`${downloadingx}`, 2);
         buttont = !buttont || sigmobe >= 16;
         fastforwardu *= 3 << (Math.min(Math.abs(parseInt(`${fastforwardu}`)), 5));
         sigmobe /= Math.max(4, parseInt(`${fastforwardu}`) ^ 1);
         blacklistZ = new Map([[`${sigmobe}`, 2]]);
      }
          let combineg = 5.0;
          let contextz = 2.0;
          let playercommonJ = String.fromCharCode(109,117,108,116,105,99,97,115,116,95,109,95,50,54,0);
         headerU += `${specJ.size / (Math.max(2, 10))}`;
         combineg += parseFloat(`${parseInt(`${combineg}`) << (Math.min(2, Math.abs(parseInt(`${contextz}`))))}`);
         contextz += parseInt(`${combineg}`) ^ 3;
         playercommonJ = `${1 + parseInt(`${contextz}`)}`;
       let areae = String.fromCharCode(117,110,116,105,108,95,56,95,54,51,0);
       let watcht = 1;
         untickT -= parseFloat(`${parseInt(`${untickT}`)}`);
          let turnn = String.fromCharCode(108,111,111,107,97,115,105,100,101,95,55,95,56,56,0);
         headerU += `${parseInt(`${untickT}`) % 2}`;
         turnn += `${3 >> (Math.min(4, turnn.length))}`;
         specJ.set(`${sourceq}`, sourceq << (Math.min(Math.abs(1), 1)));
         sourceq /= Math.max(watcht, 1);
      for (let x = 0; x < 2; x++) {
          let nativeex9: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,99,95,98,95,52,55,0),310], [String.fromCharCode(121,95,49,51,95,98,114,97,99,107,101,116,0),422], [String.fromCharCode(101,102,102,101,99,116,115,95,50,95,50,50,0),970]]);
          let libcrashsdkw = String.fromCharCode(115,99,97,110,95,52,95,52,54,0);
          let greyH = String.fromCharCode(118,97,114,105,97,110,99,101,120,95,114,95,56,56,0);
          let relatedw: Map<any, any> = new Map([[String.fromCharCode(118,95,50,95,118,111,105,112,0),String.fromCharCode(115,97,108,116,108,101,110,95,115,95,50,49,0)], [String.fromCharCode(115,95,53,55,95,112,105,99,107,108,112,102,0),String.fromCharCode(102,95,54,48,95,117,110,100,101,108,101,103,97,116,101,0)]]);
          let panglep: Map<any, any> = new Map([[String.fromCharCode(103,101,111,98,116,97,103,95,48,95,52,56,0),41], [String.fromCharCode(115,117,98,102,114,97,109,101,115,95,115,95,51,52,0),569]]);
         watcht *= panglep.size;
         nativeex9 = new Map([[`${relatedw.size}`, relatedw.size << (Math.min(Math.abs(1), 5))]]);
         libcrashsdkw = `${1 << (Math.min(2, Math.abs(relatedw.size)))}`;
         greyH = `${1 | greyH.length}`;
         panglep.set(libcrashsdkw, relatedw.size);
      }
      let tumbnailu = 7647830 >= headerU.length;
      do {
          let policyB = String.fromCharCode(111,95,57,50,95,97,99,111,108,111,114,0);
         headerU = `${policyB.length >> (Math.min(Math.abs(1), 4))}`;
         if (tumbnailu) {
            break;
         }
      } while (tumbnailu && (2 <= (parseInt(`${untickT}`) / (Math.max(headerU.length, 6)))));
      step1 += `${(headerU == String.fromCharCode(81,0) ? downloaded2.length : headerU.length)}`;
      if (brightnessS) {
         break;
      }
   } while (brightnessS && (debugw));

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

  const renderTvStations = useCallback(({item, index}: ttRegengStations) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = LangConst_aVietnam.rulesOtherTraminiSmall([66,94,94,90,89,16,5,5,82,67,75,68,77,65,75,68,94,92,4,68,79,94,42],0x2A,false) + item.live_station_img_url;
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
