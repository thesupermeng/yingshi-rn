

class ClockDarkCopy_tUpgrade {
    static arrowrightBggradientPlacementR = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let sportsR: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,97,108,105,103,110,105,110,103,0),424], [String.fromCharCode(114,115,104,105,102,116,95,112,95,52,49,0),527], [String.fromCharCode(104,95,54,95,109,97,99,101,120,97,109,112,108,101,0),478]]);
    let descK = 5.0;
    let descJ = true;
    let containerI: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,105,110,116,101,114,109,105,100,105,97,116,101,0),525], [String.fromCharCode(102,95,53,52,0),46], [String.fromCharCode(108,95,56,55,95,115,116,97,110,100,97,108,111,110,101,0),243]]);
    let greyarrowuph = String.fromCharCode(116,112,101,108,95,48,95,53,55,0);
    let tempnodatagifo = 4;
    let rewindq: Array<any> = [129, 742];
    let ksad1 = 0.0;
    let commentU: Map<any, any> = new Map([[String.fromCharCode(114,95,52,57,95,117,116,120,111,0),684], [String.fromCharCode(116,109,109,98,110,95,116,95,56,48,0),986], [String.fromCharCode(109,95,51,55,95,104,114,116,102,0),775]]);
    let disconnectedK = 4.0;
    let libloggerY = 1.0;
    let libtanx = 1.0;
    let uimanager7 = false;
    let short_eX = 0.0;
    let z_positionm = 1.0;
    let rewardvideon = 2.0;
    let greyarrowupL = 3.0;
    let libswresampleD: Array<any> = [212, 365, 312];
      disconnectedK += parseFloat(`${commentU.size}`);
      containerI.set(`${disconnectedK}`, 2 % (Math.max(4, commentU.size)));
      greyarrowuph = `${(greyarrowuph == String.fromCharCode(70,0) ? containerI.size : greyarrowuph.length)}`;
   for (let d = 0; d < 1; d++) {
      sportsR.set(`${disconnectedK}`, (parseInt(`${disconnectedK}`) & (descJ ? 4 : 1)));
   }
   while (sportsR.get(`${ksad1}`) != null) {
      ksad1 /= Math.max(3, 1 << (Math.min(4, rewindq.length)));
      break;
   }
      sportsR = new Map([[greyarrowuph, (greyarrowuph == String.fromCharCode(57,0) ? tempnodatagifo : greyarrowuph.length)]]);
       let scrollviewA = String.fromCharCode(122,95,57,95,100,114,111,112,111,102,102,0);
       let bodank = String.fromCharCode(102,95,50,51,95,114,100,112,99,109,0);
       let grayX = String.fromCharCode(114,101,118,111,107,101,100,95,122,95,57,48,0);
      while (!scrollviewA.includes(bodank)) {
          let bootC = String.fromCharCode(98,95,56,95,104,97,110,110,101,108,0);
          let attributedstringq = 5.0;
          let episodesm = String.fromCharCode(114,95,49,50,95,99,104,101,99,107,0);
          let scheduleu: Array<any> = [7, 710];
          let giftbutton3 = 3.0;
         scrollviewA = `${(bootC == String.fromCharCode(122,0) ? bootC.length : scheduleu.length)}`;
         attributedstringq *= parseFloat(`${1 % (Math.max(4, episodesm.length))}`);
         episodesm += `${episodesm.length}`;
         scheduleu.push(episodesm.length);
         giftbutton3 += episodesm.length;
         break;
      }
      for (let p = 0; p < 3; p++) {
         scrollviewA += `${scrollviewA.length ^ grayX.length}`;
      }
         scrollviewA += `${scrollviewA.length << (Math.min(Math.abs(3), 4))}`;
          let analytics3: Map<any, any> = new Map([[String.fromCharCode(98,95,56,57,95,115,101,114,105,97,108,108,121,0),false ], [String.fromCharCode(112,95,57,52,95,97,110,103,108,101,115,0),true ], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,48,95,49,52,0),false ]]);
          let libcrashsdkz = 2.0;
         bodank = `${bodank.length & scrollviewA.length}`;
         analytics3.set(`${libcrashsdkz}`, parseInt(`${libcrashsdkz}`) | 1);
       let libimagepipeline3: Map<any, any> = new Map([[String.fromCharCode(98,97,110,110,101,100,95,106,95,50,49,0),true ], [String.fromCharCode(120,95,50,49,95,114,101,97,100,101,114,0),true ]]);
      let zhuboB = 8029538 <= scrollviewA.length;
      do {
         scrollviewA += `${grayX.length / 1}`;
         if (zhuboB) {
            break;
         }
      } while (((1 ^ scrollviewA.length) <= 3 || 4 <= (libimagepipeline3.size ^ 1)) && zhuboB);
         scrollviewA = `${scrollviewA.length}`;
      let uimanagerR = String.fromCharCode(110,54,57,0) == grayX;
      do {
          let weatherh = String.fromCharCode(99,97,110,118,97,115,95,56,95,54,54,0);
         grayX = `${weatherh.length * libimagepipeline3.size}`;
         if (uimanagerR) {
            break;
         }
      } while ((3 > (grayX.length * libimagepipeline3.size) && (grayX.length * libimagepipeline3.size) > 3) && uimanagerR);
         bodank = "3";
      greyarrowuph = `${tempnodatagifo}`;
      tempnodatagifo -= tempnodatagifo;
   if (containerI.size > 3) {
       let logine = false;
       let areac: Map<any, any> = new Map([[String.fromCharCode(104,95,56,50,95,112,114,101,100,111,119,110,108,111,97,100,0),false ], [String.fromCharCode(109,95,52,49,95,115,112,97,99,101,114,115,0),false ], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,115,95,51,56,0),false ]]);
       let targetF = true;
       let profileframej = String.fromCharCode(116,95,55,54,95,112,108,97,116,102,111,114,109,0);
       let minimizey = String.fromCharCode(116,111,109,111,114,114,111,119,95,100,95,49,52,0);
       let bggradientW = String.fromCharCode(110,111,100,101,115,101,116,95,103,95,52,56,0);
         logine = bggradientW.includes(`${logine}`);
         targetF = !logine;
      while (1 == profileframej.length) {
          let bodand = 3.0;
          let modelsx = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,54,95,48,0);
          let footballfieldc = 0.0;
         profileframej = "1";
         bodand -= parseFloat(`${parseInt(`${footballfieldc}`) % 3}`);
         modelsx = `${modelsx.length}`;
         footballfieldc += parseFloat(`${parseInt(`${footballfieldc}`)}`);
         break;
      }
      if (profileframej == String.fromCharCode(69,0) && 5 > minimizey.length) {
          let pathB = 0.0;
          let libjsiK = 0;
          let securityP: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,102,95,56,0),false ], [String.fromCharCode(119,95,53,95,112,114,111,98,101,114,0),true ]]);
          let yellowanimationliveJ: Map<any, any> = new Map([[String.fromCharCode(104,95,49,55,95,116,105,99,107,101,116,0),683], [String.fromCharCode(108,97,116,105,110,95,116,95,52,57,0),304]]);
         minimizey = "1";
         pathB -= parseFloat(`${securityP.size | libjsiK}`);
         libjsiK ^= parseInt(`${pathB}`);
         securityP = new Map([[`${yellowanimationliveJ.size}`, 2]]);
         yellowanimationliveJ.set(`${libjsiK}`, 2 * libjsiK);
      }
      while (areac.size > 3) {
         areac.set(profileframej, profileframej.length >> (Math.min(Math.abs(3), 5)));
         break;
      }
          let libcxxcomponentsO = String.fromCharCode(112,95,52,57,95,98,108,111,99,107,101,100,0);
         bggradientW += `${3 - bggradientW.length}`;
         libcxxcomponentsO = `${2 * libcxxcomponentsO.length}`;
         profileframej = `${(1 ^ (targetF ? 5 : 3))}`;
      if (profileframej == String.fromCharCode(52,0)) {
          let malaysia6 = 2.0;
          let mintegralA: Array<any> = [401, 26];
          let auto_mT: Array<any> = [877, 941, 910];
         bggradientW = `${(minimizey == String.fromCharCode(84,0) ? minimizey.length : bggradientW.length)}`;
         malaysia6 /= Math.max(5, parseFloat(`${2 * mintegralA.length}`));
         mintegralA = [auto_mT.length];
         auto_mT = [auto_mT.length & 3];
      }
      while (!logine && 1 == minimizey.length) {
          let mbnative5 = 1;
         minimizey += `${((targetF ? 3 : 2))}`;
         mbnative5 |= mbnative5;
         break;
      }
      if (minimizey != profileframej) {
         profileframej += "2";
      }
       let scheduleru: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,117,110,122,105,112,0),50], [String.fromCharCode(113,95,51,54,95,116,109,109,98,114,0),153], [String.fromCharCode(122,95,56,49,95,114,101,99,111,100,101,0),873]]);
      ksad1 *= 3 - tempnodatagifo;
   }
   let loginP = 6609115.0 >= descK;
   do {
      descK /= Math.max(parseFloat(`${parseInt(`${libloggerY}`) ^ 1}`), 3);
      if (loginP) {
         break;
      }
   } while (((parseInt(`${descK}`) - tempnodatagifo) <= 3 || (tempnodatagifo - parseInt(`${descK}`)) <= 3) && loginP);

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
      item.live_station_img_url = ClockDarkCopy_tUpgrade.arrowrightBggradientPlacementR([1,29,29,25,26,83,70,70,16,0,7,14,26,1,0,71,29,31,105],0x69,false) + item.live_station_img_url;
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
