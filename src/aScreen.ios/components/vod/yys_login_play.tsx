

class SubmitLibimagepipeline {
    static configureEmpty = (contents: [number], key: number, hasEmoji: boolean) => {
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
import {yys_Bing} from '@type/yys_libzeus';
import {yys_StyleItem} from '@type/yys_libzeus';
import VodCard from './yys_singapore';
import {useAppDispatch} from '@hooks/yys_frame';
import {playVod} from '@redux/actions/yys_player_style';
import {yys_CountdownSubmit} from '@redux/reducers/yys_full';
import {FlatList} from 'react-native-gesture-handler';
interface yys_ConfigureUimanager {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<yys_StyleItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type yys_AnimationsBodan = {
  item: yys_StyleItem;
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
  }: yys_ConfigureUimanager,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let libhermes2 = String.fromCharCode(114,101,102,101,114,95,48,95,55,50,0);
    let with_e7 = String.fromCharCode(108,105,98,97,111,109,95,115,95,56,56,0);
    let auto_5N: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,105,101,115,95,50,95,49,57,0),String.fromCharCode(114,95,57,52,95,99,111,108,111,114,101,100,0)], [String.fromCharCode(109,95,56,95,109,97,114,115,104,97,108,108,105,110,103,0),String.fromCharCode(112,95,57,55,95,116,121,112,101,0)]]);
    let memberv: Array<any> = [417, 260];
    let detailN = String.fromCharCode(117,110,97,108,105,103,110,95,109,95,51,50,0);
    let descX = String.fromCharCode(110,95,56,53,95,102,105,108,116,101,114,0);
    let dplusr = 0;
    let configureN = String.fromCharCode(100,111,110,110,97,95,113,95,50,53,0);
    let mutedn = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,55,95,51,51,0);
    let philippinesd = String.fromCharCode(111,95,52,95,114,101,99,111,109,109,101,110,100,0);
    let connectiono = String.fromCharCode(121,95,57,49,95,117,110,119,114,97,112,112,101,100,0);
    let telegramv = 5.0;
    let shootC: Array<any> = [String.fromCharCode(116,101,115,116,99,108,101,97,110,95,48,95,53,52,0), String.fromCharCode(97,95,53,54,95,115,121,109,98,111,108,105,99,97,116,101,100,0)];
    let castY = 5.0;
    let formT = true;
      configureN = `${descX.length}`;
       let orangeQ = String.fromCharCode(100,95,54,55,95,115,122,97,98,111,0);
       let privacy_ = String.fromCharCode(98,95,50,50,95,98,97,110,110,101,100,0);
         orangeQ = `${1 % (Math.max(8, privacy_.length))}`;
         privacy_ += `${orangeQ.length}`;
      if (orangeQ.endsWith(`${privacy_.length}`)) {
         privacy_ = `${2 * privacy_.length}`;
      }
      for (let a = 0; a < 1; a++) {
         privacy_ += `${privacy_.length * 1}`;
      }
      if (orangeQ.length >= 5) {
         privacy_ += `${(String.fromCharCode(50,0) == orangeQ ? privacy_.length : orangeQ.length)}`;
      }
      if (privacy_ == orangeQ) {
         orangeQ += `${orangeQ.length % (Math.max(1, 4))}`;
      }
      mutedn = `${parseInt(`${telegramv}`)}`;
   while (configureN == mutedn) {
      mutedn += `${(configureN == String.fromCharCode(73,0) ? configureN.length : shootC.length)}`;
      break;
   }
   let styles6 = memberv.length <= 9582838;
   do {
       let final_ocA = 4.0;
       let macauD = String.fromCharCode(109,99,108,109,115,95,116,95,52,48,0);
       let mbbidJ = String.fromCharCode(116,102,117,101,108,95,50,95,49,51,0);
       let typesA = 0;
          let logoutH: Array<any> = [876, 151];
          let libswresampleg = 1;
         typesA ^= (String.fromCharCode(87,0) == macauD ? mbbidJ.length : macauD.length);
         logoutH.push(logoutH.length * 3);
         libswresampleg >>= Math.min(2, Math.abs(1));
      if (typesA >= 4) {
         typesA %= Math.max(1, 3);
      }
      for (let z = 0; z < 2; z++) {
         macauD += `${2 + typesA}`;
      }
       let xvodz = 4.0;
       let private_oat = 4.0;
      while (macauD.startsWith(`${typesA}`)) {
         typesA &= typesA - parseInt(`${final_ocA}`);
         break;
      }
      let liveS = 5394470.0 >= private_oat;
      do {
          let referrerR = false;
          let styleso = 3.0;
          let shootZ = true;
          let sina3 = 5.0;
         private_oat += parseFloat(`${1 % (Math.max(parseInt(`${sina3}`), 8))}`);
         referrerR = styleso >= 70.76;
         styleso += ((referrerR ? 2 : 4));
         shootZ = !shootZ;
         sina3 += parseFloat(`${parseInt(`${styleso}`) ^ 2}`);
         if (liveS) {
            break;
         }
      } while (liveS && (3 < (mbbidJ.length >> (Math.min(Math.abs(4), 5))) || 3 < (mbbidJ.length & 4)));
       let scoreK: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,95,121,95,56,55,0),377], [String.fromCharCode(110,117,109,115,95,119,95,53,56,0),838]]);
         mbbidJ = `${1 ^ macauD.length}`;
       let volume9 = 0.0;
      let settingsT = final_ocA >= 8066859.0;
      do {
         final_ocA /= Math.max(2, 2);
         if (settingsT) {
            break;
         }
      } while (settingsT && (scoreK.get(`${final_ocA}`) != null));
      if (typesA <= final_ocA) {
         final_ocA += 2 << (Math.min(5, Math.abs(parseInt(`${final_ocA}`))));
      }
      for (let g = 0; g < 1; g++) {
         macauD = `${typesA}`;
      }
      memberv = [detailN.length];
      if (styles6) {
         break;
      }
   } while (styles6 && (4 >= (memberv.length * detailN.length) && (memberv.length * detailN.length) >= 4));
       let armvaY = 3.0;
       let readj: Map<any, any> = new Map([[String.fromCharCode(98,95,51,49,0),945], [String.fromCharCode(97,95,56,49,95,97,116,111,109,115,0),551]]);
       let codegene: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,117,95,51,57,0),314], [String.fromCharCode(112,95,50,50,95,100,105,115,116,114,97,99,116,97,98,108,101,0),151]]);
         readj = new Map([[`${readj.size}`, parseInt(`${armvaY}`)]]);
      for (let d = 0; d < 1; d++) {
          let codegenu = String.fromCharCode(115,112,104,101,114,105,99,97,108,95,105,95,52,56,0);
          let reacts = String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,55,95,51,55,0);
         readj = new Map([[`${readj.size}`, parseInt(`${armvaY}`) ^ 1]]);
         codegenu = `${3 - reacts.length}`;
         reacts = `${reacts.length}`;
      }
      if (4.9 < (armvaY - 3.79)) {
          let downloaderA = 0;
          let untickh = String.fromCharCode(114,101,100,111,95,98,95,53,56,0);
          let castingB = String.fromCharCode(100,95,57,50,95,105,119,97,108,115,104,0);
          let favoritey: Array<any> = [154, 1000, 502];
         codegene = new Map([[`${readj.size}`, readj.size]]);
         downloaderA -= 1;
         untickh += `${untickh.length}`;
         castingB += `${downloaderA}`;
         favoritey.push(favoritey.length);
      }
          let c_counto = String.fromCharCode(99,111,108,114,97,109,95,99,95,51,51,0);
          let whistle5 = 1.0;
          let indicatorw = true;
         readj = new Map([[`${codegene.size}`, (String.fromCharCode(117,0) == c_counto ? c_counto.length : codegene.size)]]);
         whistle5 /= Math.max((parseInt(`${whistle5}`) << (Math.min(5, Math.abs((indicatorw ? 1 : 1))))), 5);
         indicatorw = !indicatorw;
         codegene.set(`${armvaY}`, readj.size);
      for (let w = 0; w < 3; w++) {
         armvaY *= readj.size;
      }
         armvaY -= readj.size / 2;
         readj.set(`${armvaY}`, readj.size ^ parseInt(`${armvaY}`));
         codegene.set(`${armvaY}`, parseInt(`${armvaY}`));
      dplusr |= connectiono.length;
      with_e7 += `${philippinesd.length}`;
   for (let t = 0; t < 2; t++) {
      descX = `${dplusr % (Math.max(1, configureN.length))}`;
   }
   while (!philippinesd.endsWith(`${with_e7.length}`)) {
      philippinesd = `${parseInt(`${telegramv}`)}`;
      break;
   }
      descX = `${auto_5N.size * mutedn.length}`;
       let binddatasI = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,120,95,57,55,0);
       let carouselr = String.fromCharCode(104,95,52,56,95,99,111,110,110,101,99,116,115,0);
         carouselr = `${carouselr.length}`;
       let merger5 = String.fromCharCode(121,95,54,48,95,105,111,115,0);
         merger5 = `${carouselr.length}`;
      for (let i = 0; i < 3; i++) {
         carouselr += `${merger5.length & 1}`;
      }
       let photoX = String.fromCharCode(99,97,112,95,97,95,57,51,0);
       let fastforwardt = String.fromCharCode(108,95,50,55,0);
          let package_955 = String.fromCharCode(116,95,50,56,95,102,97,108,108,111,102,102,0);
          let libreactF = String.fromCharCode(103,95,50,52,95,112,97,114,97,109,115,0);
          let debug3 = String.fromCharCode(105,102,110,115,95,114,95,51,54,0);
         carouselr = `${binddatasI.length | 1}`;
         package_955 = `${1 % (Math.max(1, debug3.length))}`;
         libreactF += `${1 - libreactF.length}`;
         debug3 += `${libreactF.length}`;
      shootC.push(dplusr);
   if (auto_5N.get(`${shootC.length}`) == null) {
      shootC.push(parseInt(`${telegramv}`));
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

  const renderTvStations = useCallback(({item, index}: yys_AnimationsBodan) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = SubmitLibimagepipeline.configureEmpty([-46,-50,-50,-54,-55,-128,-107,-107,-62,-45,-37,-44,-35,-47,-37,-44,-50,-52,-108,-44,-33,-50,-70],0xBA,false) + item.live_station_img_url;
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
