

class ServiceCodegenModeDirect {
    static libreanimatedCorner = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { wwControl } from '@type/ww_dycreator_result';
import { wwRecommendationItem } from '@type/ww_dycreator_result';
import VodCard from './ww_accepted_current';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import { playVod } from '@redux/actions/ww_floater';
import { wwYellowredcardRelease } from '@redux/reducers/ww_shared';
import { FlatList } from 'react-native-gesture-handler';
interface wwIndexDice {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<wwRecommendationItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type wwManager = {
  item: wwRecommendationItem;
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
  }: wwIndexDice,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let fileI = true;
    let gemfileV: Array<any> = [String.fromCharCode(106,95,55,50,95,100,101,99,114,101,97,115,101,0), String.fromCharCode(116,95,53,53,95,119,100,108,116,0), String.fromCharCode(99,102,116,98,115,117,98,95,98,95,52,49,0)];
    let memberc = 0.0;
    let actionW = 1.0;
    let renewv = 5;
    let sourcec = 2.0;
    let basketballhometeamJ = 5.0;
    let currentz = String.fromCharCode(110,95,49,49,95,119,101,105,103,104,116,112,0);
    let textU = String.fromCharCode(99,95,54,50,95,101,108,108,105,112,116,105,99,0);
    let typesx = 4.0;
    let alertC = 2.0;
    let crossy = String.fromCharCode(104,101,118,109,97,115,107,95,100,95,56,52,0);
   while (fileI || 5 <= (3 / (Math.max(5, renewv)))) {
      renewv *= ((fileI ? 1 : 5) / (Math.max(parseInt(`${basketballhometeamJ}`), 4)));
      break;
   }
      renewv += parseInt(`${sourcec}`);
       let shrinkO = String.fromCharCode(98,95,53,51,95,104,97,115,104,100,101,115,116,114,111,121,0);
       let yellowredcardj: Array<any> = [925, 74];
       let closeu: Array<any> = [293, 744];
      for (let i = 0; i < 3; i++) {
         closeu.push(yellowredcardj.length);
      }
         yellowredcardj.push(shrinkO.length | 2);
         yellowredcardj = [yellowredcardj.length];
      for (let t = 0; t < 3; t++) {
          let alertL = 5.0;
          let androidr = String.fromCharCode(106,95,55,52,95,122,114,101,111,114,100,101,114,0);
          let logouserV = false;
          let nterstitialC = String.fromCharCode(104,95,55,51,95,112,108,97,99,101,104,111,108,100,101,114,0);
          let nativemodulew: Array<any> = [932, 122, 445];
         shrinkO = `${nativemodulew.length}`;
         alertL *= (parseFloat(`${(logouserV ? 5 : 5)}`));
         androidr = "2";
         nterstitialC = `${parseInt(`${alertL}`) * 3}`;
         nativemodulew = [parseInt(`${alertL}`) - androidr.length];
      }
         yellowredcardj.push(closeu.length);
      while (yellowredcardj.length > closeu.length) {
         yellowredcardj.push(yellowredcardj.length ^ closeu.length);
         break;
      }
          let defaultlogoS = String.fromCharCode(114,95,55,57,95,112,114,111,109,111,0);
         shrinkO += `${yellowredcardj.length}`;
         defaultlogoS = `${3 << (Math.min(1, defaultlogoS.length))}`;
         closeu.push(1 >> (Math.min(5, closeu.length)));
      let floaterS = 6441964 <= closeu.length;
      do {
         closeu.push(shrinkO.length);
         if (floaterS) {
            break;
         }
      } while (floaterS && ((closeu.length * yellowredcardj.length) >= 3));
      currentz += `${(renewv >> (Math.min(4, Math.abs((fileI ? 3 : 2)))))}`;
   while (sourcec < 4.23) {
      sourcec *= parseFloat(`${parseInt(`${sourcec}`) + gemfileV.length}`);
      break;
   }
      memberc += parseFloat(`${parseInt(`${memberc}`) & textU.length}`);
   while ((2.32 * memberc) < 2.46) {
      renewv ^= parseInt(`${sourcec}`) - 1;
      break;
   }
   while ((1 & textU.length) == 3) {
      textU = `${parseInt(`${alertC}`)}`;
      break;
   }
      sourcec /= Math.max(parseFloat(`${parseInt(`${basketballhometeamJ}`)}`), 2);
      currentz = `${parseInt(`${sourcec}`) >> (Math.min(Math.abs(parseInt(`${basketballhometeamJ}`)), 5))}`;
   if (5.44 == alertC && (5.44 + alertC) == 1.66) {
      fileI = 75 >= (renewv - memberc);
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

  const renderTvStations = useCallback(({ item, index }: wwManager) => {
    if (item.live_station_img_url.charAt(0) == '/') {
      item.live_station_img_url = ServiceCodegenModeDirect.libreanimatedCorner([114,110,110,106,105,32,53,53,99,115,116,125,105,114,115,52,110,108,26],0x1A,false) + item.live_station_img_url;
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
