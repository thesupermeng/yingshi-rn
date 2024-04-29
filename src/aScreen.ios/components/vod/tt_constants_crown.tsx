

class PlayerActionsGpay {
    static shootSheet = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let settingsi: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,119,95,55,0),40], [String.fromCharCode(98,95,53,57,95,112,101,114,109,97,110,101,110,116,0),120], [String.fromCharCode(120,95,50,51,95,97,116,114,105,109,0),931]]);
    let splashK: Map<any, any> = new Map([[String.fromCharCode(98,105,110,107,95,109,95,52,56,0),true ], [String.fromCharCode(97,115,107,105,110,103,95,108,95,53,0),true ]]);
    let reada = false;
    let largeE = String.fromCharCode(107,95,53,50,95,116,112,101,108,0);
    let taiwanm = 1.0;
    let mappingX = String.fromCharCode(115,95,56,50,95,115,108,117,103,0);
    let projectA: Array<any> = [645, 14, 248];
    let handlerh = String.fromCharCode(97,115,101,108,101,99,116,95,103,95,50,57,0);
    let plash_ = 2.0;
    let configureq = String.fromCharCode(101,105,112,95,114,95,49,49,0);
    let scoreW = false;
    let zhuboS = String.fromCharCode(114,101,99,116,95,116,95,51,0);
    let plashc: Map<any, any> = new Map([[String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,118,95,49,56,0),true ], [String.fromCharCode(104,95,48,95,121,117,118,103,98,114,112,0),false ], [String.fromCharCode(105,95,50,54,95,99,121,99,108,101,99,108,111,99,107,0),false ]]);
   let ewardedU = 9121591 <= projectA.length;
   do {
      projectA = [1];
      if (ewardedU) {
         break;
      }
   } while (ewardedU && (5 <= (configureq.length >> (Math.min(Math.abs(2), 2))) && 2 <= (projectA.length >> (Math.min(configureq.length, 2)))));
   let calendarj = 7875569 <= settingsi.size;
   do {
      settingsi.set(handlerh, projectA.length);
      if (calendarj) {
         break;
      }
   } while (calendarj && (scoreW && (5 ^ settingsi.size) == 5));
   if (mappingX == zhuboS) {
      zhuboS += "2";
   }
   if (1 == (3 >> (Math.min(2, Math.abs(splashK.size)))) || 3 == (splashK.size >> (Math.min(zhuboS.length, 4)))) {
      zhuboS = "1";
   }
   if (handlerh.length == largeE.length) {
      largeE += "3";
   }
   let roomp = String.fromCharCode(110,120,111,104,106,54,122,0) == mappingX;
   do {
       let tumbnailZ = 3.0;
       let watchQ = 4.0;
       let incident6 = String.fromCharCode(115,97,102,101,95,56,95,52,50,0);
       let borderlessz: Map<any, any> = new Map([[String.fromCharCode(119,104,101,110,95,121,95,57,56,0),String.fromCharCode(115,105,120,95,111,95,56,51,0)], [String.fromCharCode(101,95,51,48,95,110,111,116,0),String.fromCharCode(104,97,110,100,108,101,95,104,95,55,56,0)], [String.fromCharCode(102,111,114,105,95,56,95,54,49,0),String.fromCharCode(114,101,110,100,101,114,101,114,115,95,57,95,57,53,0)]]);
       let tumbnailC = String.fromCharCode(108,105,98,115,97,109,112,108,101,95,113,95,56,48,0);
          let acceptedU: Array<any> = [String.fromCharCode(110,95,57,50,95,101,99,109,117,108,116,0), String.fromCharCode(107,95,55,51,95,99,98,115,110,105,100,0)];
          let completeW = 4.0;
         incident6 += `${incident6.length}`;
         acceptedU.push(acceptedU.length);
         completeW *= 2 ^ acceptedU.length;
         incident6 = "1";
          let u_playerN: Array<any> = [79, 180];
          let greenL = 0.0;
         tumbnailZ -= parseFloat(`${u_playerN.length}`);
         u_playerN.push(2);
         greenL -= 2 & parseInt(`${greenL}`);
      let vignettey = tumbnailC.length >= 9222972;
      do {
         tumbnailC += `${1 & parseInt(`${tumbnailZ}`)}`;
         if (vignettey) {
            break;
         }
      } while (vignettey && (parseInt(`${tumbnailZ}`) == tumbnailC.length));
      while (4 > (parseInt(`${tumbnailZ}`) + tumbnailC.length)) {
         tumbnailZ -= parseFloat(`${3}`);
         break;
      }
         tumbnailC += `${(tumbnailC == String.fromCharCode(108,0) ? parseInt(`${tumbnailZ}`) : tumbnailC.length)}`;
         tumbnailZ /= Math.max(4, parseFloat(`${2}`));
      mappingX += `${projectA.length}`;
      watchQ /= Math.max(parseFloat(`${parseInt(`${watchQ}`) & parseInt(`${watchQ}`)}`), 3);
      if (roomp) {
         break;
      }
   } while (roomp && (mappingX.length < settingsi.size));
       let arrowE: Array<any> = [348, 531];
       let leftm = 2;
      while ((arrowE.length & 5) <= 1 && (leftm & arrowE.length) <= 5) {
         leftm |= arrowE.length;
         break;
      }
         leftm |= arrowE.length / (Math.max(3, 4));
          let chatX = String.fromCharCode(99,97,108,99,117,97,108,116,101,95,48,95,53,0);
          let regengm = false;
          let settings1: Map<any, any> = new Map([[String.fromCharCode(121,95,55,53,95,114,101,97,108,105,102,121,0),259], [String.fromCharCode(114,101,102,114,101,115,104,95,105,95,52,49,0),46]]);
         arrowE = [3 - leftm];
         chatX = `${chatX.length}`;
         regengm = chatX == String.fromCharCode(111,0);
         settings1 = new Map([[`${settings1.size}`, 2]]);
      let full2 = leftm >= 9015661;
      do {
         leftm ^= 2 * leftm;
         if (full2) {
            break;
         }
      } while (full2 && ((arrowE.length % 3) > 3));
          let smallK = String.fromCharCode(110,95,55,95,109,101,109,99,112,121,0);
          let aboutL = String.fromCharCode(100,95,55,53,95,115,101,108,101,99,116,101,100,0);
         arrowE.push(aboutL.length);
         smallK = `${(smallK == String.fromCharCode(53,0) ? smallK.length : smallK.length)}`;
         aboutL = `${3 / (Math.max(10, smallK.length))}`;
         leftm %= Math.max(1, arrowE.length);
      splashK.set(largeE, splashK.size);
      splashK = new Map([[mappingX, zhuboS.length]]);
      scoreW = (splashK.size * largeE.length) >= 41;
   let langkeya = handlerh.length >= 8723383;
   do {
       let adultU = String.fromCharCode(99,111,99,103,95,115,95,57,53,0);
       let controlT = 1.0;
       let detailsF = false;
      let skip1 = 8129139.0 >= controlT;
      do {
          let umengf = true;
          let updatesh = String.fromCharCode(106,100,109,97,115,116,101,114,95,118,95,56,51,0);
          let black6 = 4.0;
          let sentryJ = true;
         controlT -= (updatesh == String.fromCharCode(114,0) ? (detailsF ? 5 : 4) : updatesh.length);
         umengf = 47.21 < black6;
         black6 += ((umengf ? 5 : 3) | parseInt(`${black6}`));
         sentryJ = (!umengf ? sentryJ : umengf);
         if (skip1) {
            break;
         }
      } while (skip1 && (4.29 <= (controlT + 5.39) && 5.39 <= (controlT + adultU.length)));
         controlT /= Math.max(adultU.length, 1);
      for (let i = 0; i < 2; i++) {
         detailsF = !detailsF;
      }
          let mimoC = true;
          let submitS = String.fromCharCode(115,116,97,116,117,115,101,115,95,110,95,55,55,0);
         adultU = `${adultU.length % 1}`;
         mimoC = mimoC || submitS.length <= 46;
         submitS += `${((mimoC ? 3 : 5))}`;
      if (controlT > 3.16) {
         adultU += `${1 | parseInt(`${controlT}`)}`;
      }
          let interstitiali = 5;
         adultU = `${(adultU.length - (detailsF ? 5 : 1))}`;
         interstitiali |= interstitiali % (Math.max(8, interstitiali));
      if (adultU.startsWith(`${controlT}`)) {
          let gemfileK = String.fromCharCode(102,105,120,95,56,95,50,50,0);
          let sourcer = String.fromCharCode(104,95,54,50,95,99,111,110,115,116,114,117,99,116,105,118,101,0);
         adultU += "2";
         gemfileK += `${sourcer.length << (Math.min(Math.abs(1), 1))}`;
         sourcer += `${sourcer.length | 1}`;
      }
      if (!adultU.endsWith(`${controlT}`)) {
          let orientationJ = String.fromCharCode(99,104,97,110,103,101,95,54,95,51,57,0);
          let chinasameZ = 0;
          let backwardF = String.fromCharCode(110,97,110,111,115,118,103,95,55,95,53,52,0);
         controlT *= orientationJ.length;
         orientationJ += `${chinasameZ | backwardF.length}`;
         chinasameZ %= Math.max(backwardF.length & chinasameZ, 4);
      }
      for (let y = 0; y < 2; y++) {
          let settingl: Map<any, any> = new Map([[String.fromCharCode(99,104,111,105,99,101,115,95,120,95,49,55,0),false ], [String.fromCharCode(112,101,114,115,105,115,116,101,100,95,118,95,57,57,0),false ]]);
          let androidK = false;
          let heartO = 5;
          let bottomq = 2.0;
          let clear8 = 3.0;
         detailsF = (2 >= (settingl.size % (Math.max(8, (androidK ? settingl.size : 80)))));
         androidK = 8.38 > (clear8 - bottomq);
         heartO ^= parseInt(`${bottomq}`) & 3;
         clear8 += parseInt(`${bottomq}`);
      }
      handlerh += `${parseInt(`${plash_}`) & zhuboS.length}`;
      if (langkeya) {
         break;
      }
   } while (langkeya && (2 >= handlerh.length));
      mappingX += `${parseInt(`${plash_}`) % 1}`;
      projectA = [((scoreW ? 2 : 4))];

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
      item.live_station_img_url = PlayerActionsGpay.shootSheet([99,127,127,123,120,49,36,36,115,98,106,101,108,96,106,101,127,125,37,101,110,127,11],0xB,false) + item.live_station_img_url;
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
