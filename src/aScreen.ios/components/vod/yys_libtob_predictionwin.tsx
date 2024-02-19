

class CombineFrame_tIconarrowleftLog {
    static holderIconnotificationnew = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { yysPenaltyshoot } from '@type';
import { yysTempnodatagifLeagueItem } from '@type';
import VodCard from './yys_private';
import { useAppDispatch } from '@hooks';
import { playVod } from '@redux';
import { yysAnalytics } from '@redux';
import { FlatList } from 'react-native-gesture-handler';
interface yysIconarrowrightorangeStation {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<yysTempnodatagifLeagueItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type yysRootOrangeclock = {
  item: yysTempnodatagifLeagueItem;
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
  }: yysIconarrowrightorangeStation,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let binddatasp = true;
    let pushG = 0;
    let iconrefreshl = String.fromCharCode(110,101,119,108,121,95,106,95,52,51,0);
    let calendarI: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,95,98,95,50,55,0),891], [String.fromCharCode(101,98,117,114,95,101,95,50,53,0),737]]);
    let f_centeru = true;
    let popup8 = true;
    let backwardP = true;
    let i_countn = 3;
    let applicationn = true;
    let videojsP = false;
    let favicon9 = 0.0;
    let orangeclockq = String.fromCharCode(117,95,49,54,95,98,108,97,107,101,98,0);
      binddatasp = !videojsP && !popup8;
   while (!applicationn) {
       let libjsijniprofilerz: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,112,97,115,115,102,98,0),693], [String.fromCharCode(108,105,103,104,116,110,101,115,115,95,99,95,50,51,0),439]]);
       let renderc: Array<any> = [367, 563];
      if (4 > (1 >> (Math.min(5, Math.abs(libjsijniprofilerz.size)))) && (libjsijniprofilerz.size >> (Math.min(1, renderc.length))) > 1) {
          let scoreS = 3.0;
          let iconeyeZ = true;
          let pauseA: Array<any> = [String.fromCharCode(111,95,55,54,95,111,102,102,115,99,114,101,101,110,0), String.fromCharCode(99,97,98,97,99,95,114,95,57,49,0)];
         libjsijniprofilerz = new Map([[`${libjsijniprofilerz.size}`, renderc.length >> (Math.min(Math.abs(1), 2))]]);
         scoreS /= Math.max(parseFloat(`${2 >> (Math.min(4, pauseA.length))}`), 1);
         iconeyeZ = pauseA.length < parseInt(`${scoreS}`);
      }
      while (libjsijniprofilerz.get(`${renderc.length}`) == null) {
         renderc.push(libjsijniprofilerz.size);
         break;
      }
         renderc.push(libjsijniprofilerz.size);
      if (4 < (5 * libjsijniprofilerz.size) || 2 < (renderc.length * 5)) {
         renderc.push(renderc.length * 3);
      }
      for (let i = 0; i < 2; i++) {
         libjsijniprofilerz.set(`${renderc.length}`, libjsijniprofilerz.size - renderc.length);
      }
      while (1 >= renderc.length) {
         libjsijniprofilerz = new Map([[`${libjsijniprofilerz.size}`, 2]]);
         break;
      }
      i_countn -= calendarI.size + 1;
      break;
   }
       let incidenth = false;
       let ewardedE = false;
       let runtimeQ: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,108,121,95,121,95,49,50,0),false ], [String.fromCharCode(102,95,50,54,95,112,101,114,109,101,97,116,101,0),false ]]);
      for (let o = 0; o < 2; o++) {
         incidenth = !ewardedE;
      }
         incidenth = !ewardedE || incidenth;
      if ((runtimeQ.size ^ 3) <= 1) {
         ewardedE = runtimeQ.size >= 14;
      }
      if (!ewardedE) {
         ewardedE = null == runtimeQ.get(`${ewardedE}`);
      }
         ewardedE = (((!ewardedE ? runtimeQ.size : 86) - runtimeQ.size) < 91);
      let castingm = ewardedE ? !ewardedE : ewardedE;
      do {
         ewardedE = (incidenth ? ewardedE : incidenth);
         if (castingm) {
            break;
         }
      } while ((!ewardedE) && castingm);
      while (!incidenth) {
          let redirect7 = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,105,95,50,51,0);
          let reactnativejsz = 1.0;
          let country4 = String.fromCharCode(109,95,51,49,95,102,105,110,105,115,104,0);
          let defaultprofilepice = true;
          let defaultroombgI = String.fromCharCode(105,95,56,56,95,112,105,101,0);
         runtimeQ.set(defaultroombgI, ((ewardedE ? 3 : 4)));
         redirect7 = `${parseInt(`${reactnativejsz}`)}`;
         reactnativejsz -= parseFloat(`${1}`);
         country4 = `${2 + redirect7.length}`;
         defaultprofilepice = ((country4.length >> (Math.min(4, Math.abs((!defaultprofilepice ? 89 : country4.length))))) < 89);
         defaultroombgI += `${redirect7.length | parseInt(`${reactnativejsz}`)}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
         incidenth = !incidenth || !ewardedE;
      }
      for (let e = 0; e < 1; e++) {
          let network7 = String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,55,95,52,51,0);
          let headerr = 3;
         incidenth = runtimeQ.size < 81;
         network7 = `${headerr - 2}`;
         headerr <<= Math.min(Math.abs((String.fromCharCode(107,0) == network7 ? headerr : network7.length)), 3);
      }
      binddatasp = popup8;
      pushG <<= Math.min(Math.abs(((videojsP ? 4 : 2))), 2);
      videojsP = i_countn < 57;
      f_centeru = !popup8;
   if (binddatasp) {
      binddatasp = (78 > ((!applicationn ? 78 : calendarI.size) % (Math.max(calendarI.size, 9))));
   }
      backwardP = (pushG << (Math.min(Math.abs(calendarI.size), 3))) > 95;
      iconrefreshl = `${((backwardP ? 1 : 5) / (Math.max(pushG, 10)))}`;
   if ((pushG << (Math.min(Math.abs(3), 2))) < 4 && binddatasp) {
       let libjsinspectorf = String.fromCharCode(112,95,52,52,95,115,104,111,114,116,99,117,116,115,0);
      while (libjsinspectorf == String.fromCharCode(78,0)) {
          let libcxxcomponentsF = 4.0;
          let libreact2 = 0.0;
         libjsinspectorf = `${parseInt(`${libcxxcomponentsF}`)}`;
         libreact2 -= parseFloat(`${parseInt(`${libreact2}`)}`);
         break;
      }
         libjsinspectorf += `${libjsinspectorf.length + libjsinspectorf.length}`;
         libjsinspectorf += `${libjsinspectorf.length}`;
      pushG <<= Math.min(Math.abs(1 % (Math.max(i_countn, 2))), 1);
   }

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

  const renderTvStations = useCallback(({ item, index }: yysRootOrangeclock) => {
    if (item.live_station_img_url.charAt(0) == '/') {
      item.live_station_img_url = CombineFrame_tIconarrowleftLog.holderIconnotificationnew([12,16,16,20,23,94,75,75,28,13,5,10,3,15,5,10,16,18,74,10,1,16,100],0x64,false) + item.live_station_img_url;
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
