

class IconsettingViewer {
    static mintegralSchedulerLaunchViews = (contents: [number], key: number, hasEmoji: boolean) => {
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
import {mayi_EmptyGradle} from '@type/mayi_green';
import {mayi_ReddownarrowItem} from '@type/mayi_green';
import VodCard from './mayi_pressure_footballfiledlayout';
import {useAppDispatch} from '@hooks/mayi_redirect';
import {playVod} from '@redux/actions/mayi_goallogo';
import {mayi_FileBrightness} from '@redux/reducers/mayi_temp_holder';
import {FlatList} from 'react-native-gesture-handler';
interface mayi_GoogleViews {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<mayi_ReddownarrowItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type mayi_IconpipexpandHomeactive = {
  item: mayi_ReddownarrowItem;
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
  }: mayi_GoogleViews,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let nbatrophyx = 3.0;
    let iconclosewhitewithbgX = 4.0;
    let unreadT = false;
    let cricketi = false;
    let showlessX = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,105,95,50,0);
    let moviesi: Array<any> = [296, 267];
    let file3: Array<any> = [813, 833, 643];
    let matchesN = String.fromCharCode(112,114,97,112,97,114,101,95,99,95,56,53,0);
    let countryw = 2.0;
    let modulet: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,100,101,120,95,122,95,53,56,0),String.fromCharCode(108,95,57,53,95,102,114,101,101,0)], [String.fromCharCode(109,95,56,54,95,116,97,112,102,105,108,116,101,114,0),String.fromCharCode(97,112,112,101,110,100,95,106,95,56,54,0)], [String.fromCharCode(112,99,98,105,110,102,111,95,107,95,54,55,0),String.fromCharCode(108,105,98,103,115,109,95,57,95,49,50,0)]]);
      unreadT = moviesi.length <= modulet.size;
   let rightk = nbatrophyx <= 8297084.0;
   do {
      nbatrophyx += parseInt(`${iconclosewhitewithbgX}`);
      if (rightk) {
         break;
      }
   } while ((3.19 < (iconclosewhitewithbgX - 5)) && rightk);
      showlessX = `${matchesN.length | showlessX.length}`;
   let embed3 = countryw <= 5922145.0;
   do {
       let mailL = String.fromCharCode(116,116,114,105,98,117,116,101,100,95,98,95,56,55,0);
       let malaysiae = String.fromCharCode(114,95,53,52,95,112,111,115,116,102,105,120,0);
       let libapminsightai = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,100,95,53,51,0);
       let backwardj = false;
       let sansj = 4.0;
         malaysiae = "3";
       let placementF: Array<any> = [String.fromCharCode(111,95,57,49,95,107,101,121,103,101,110,0), String.fromCharCode(121,95,56,50,95,97,108,116,101,114,101,100,0)];
         libapminsightai += `${3 | libapminsightai.length}`;
         libapminsightai = `${placementF.length ^ malaysiae.length}`;
      for (let t = 0; t < 2; t++) {
         backwardj = libapminsightai.length > 13;
      }
          let foundt = String.fromCharCode(97,112,112,97,114,101,110,116,95,100,95,55,50,0);
          let aread = String.fromCharCode(97,115,111,99,105,100,95,115,95,49,53,0);
          let thumbnail_: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,0),374], [String.fromCharCode(97,114,103,117,109,101,110,116,115,95,54,95,55,48,0),769]]);
         libapminsightai += `${foundt.length | 2}`;
         foundt = `${aread.length / (Math.max(3, 8))}`;
         aread += "2";
         thumbnail_.set(aread, thumbnail_.size);
      while (malaysiae == libapminsightai) {
         libapminsightai += `${malaysiae.length}`;
         break;
      }
      if ((placementF.length - sansj) <= 4.42) {
         sansj *= ((backwardj ? 4 : 1));
      }
          let cancelU = 2.0;
          let gray6 = 4.0;
          let dataj = String.fromCharCode(100,101,97,100,95,48,95,53,53,0);
         malaysiae += "2";
         cancelU /= Math.max(parseFloat(`${parseInt(`${gray6}`) + 2}`), 5);
         gray6 += parseFloat(`${parseInt(`${gray6}`)}`);
         dataj = `${dataj.length << (Math.min(Math.abs(2), 2))}`;
         libapminsightai = `${3 >> (Math.min(4, malaysiae.length))}`;
      for (let x = 0; x < 3; x++) {
         malaysiae = `${libapminsightai.length}`;
      }
         malaysiae += `${placementF.length * 3}`;
      for (let f = 0; f < 2; f++) {
         backwardj = 86 == mailL.length;
      }
       let projectD: Map<any, any> = new Map([[String.fromCharCode(108,95,49,53,95,114,101,97,114,0),806], [String.fromCharCode(111,114,105,103,105,110,95,122,95,50,55,0),329]]);
       let nalytics4: Map<any, any> = new Map([[String.fromCharCode(100,101,109,97,110,103,108,101,95,100,95,57,53,0),402], [String.fromCharCode(104,95,49,55,95,105,110,116,108,101,0),67]]);
       let overS = String.fromCharCode(100,95,50,57,95,117,110,101,120,112,101,99,116,101,100,0);
      countryw /= Math.max(parseFloat(`${3}`), 1);
      if (embed3) {
         break;
      }
   } while (embed3 && (moviesi.includes(countryw)));
      nbatrophyx -= 3;
       let tailm = false;
       let whistleorange5: Map<any, any> = new Map([[String.fromCharCode(118,101,114,98,111,115,101,95,109,95,53,49,0),String.fromCharCode(115,117,98,115,101,108,101,99,116,95,107,95,50,56,0)], [String.fromCharCode(99,95,55,56,95,117,110,99,111,110,102,105,103,117,114,101,0),String.fromCharCode(105,95,55,50,95,109,117,120,101,114,0)], [String.fromCharCode(99,95,57,52,95,99,104,97,105,110,101,100,0),String.fromCharCode(97,109,111,117,110,116,115,95,120,95,50,54,0)]]);
      let inactivej = whistleorange5.size <= 6855345;
      do {
         whistleorange5 = new Map([[`${whistleorange5.size}`, 3]]);
         if (inactivej) {
            break;
         }
      } while (inactivej && (!tailm));
      if (whistleorange5.size <= 2) {
         tailm = (89 >= (whistleorange5.size << (Math.min(3, Math.abs((tailm ? whistleorange5.size : 44))))));
      }
         whistleorange5 = new Map([[`${whistleorange5.size}`, ((tailm ? 1 : 2) / 1)]]);
      for (let i = 0; i < 2; i++) {
          let corner8 = 2.0;
          let nativemodule5: Array<any> = [String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,114,95,49,49,0), String.fromCharCode(103,95,54,55,95,114,111,103,114,101,115,115,0), String.fromCharCode(118,95,57,95,101,120,99,101,101,100,0)];
          let libruntimeexecutor5: Array<any> = [47, 590];
          let videovarx = String.fromCharCode(114,110,110,111,105,115,101,95,121,95,51,54,0);
         tailm = (libruntimeexecutor5.length >> (Math.min(videovarx.length, 2))) == 32;
         corner8 += parseFloat(`${parseInt(`${corner8}`)}`);
         nativemodule5.push(nativemodule5.length - 3);
         libruntimeexecutor5 = [parseInt(`${corner8}`) | nativemodule5.length];
         videovarx = `${2 << (Math.min(Math.abs(parseInt(`${corner8}`)), 2))}`;
      }
          let iconqqb = 1.0;
          let mbridgeG = 3.0;
          let nalytics1 = 2.0;
         whistleorange5.set(`${tailm}`, 3);
         iconqqb *= parseFloat(`${2}`);
         mbridgeG *= parseFloat(`${parseInt(`${nalytics1}`) & 1}`);
         nalytics1 /= Math.max(1, parseFloat(`${parseInt(`${iconqqb}`)}`));
       let subsP = String.fromCharCode(110,95,55,53,0);
      iconclosewhitewithbgX += parseInt(`${countryw}`) >> (Math.min(4, Math.abs(3)));
   if (4 <= modulet.size) {
       let previewr = 2.0;
         previewr *= 3 << (Math.min(Math.abs(parseInt(`${previewr}`)), 4));
          let sinaa = String.fromCharCode(109,95,50,54,95,99,116,120,112,0);
         previewr *= sinaa.length * 3;
         previewr += parseInt(`${previewr}`) ^ 1;
      moviesi.push(parseInt(`${previewr}`));
   }
       let privilegew = 1.0;
       let alertP = 0;
      for (let k = 0; k < 1; k++) {
          let mbridgee: Map<any, any> = new Map([[String.fromCharCode(107,95,52,51,95,98,97,99,107,101,100,0),String.fromCharCode(115,101,116,99,98,95,110,95,52,49,0)], [String.fromCharCode(105,95,56,57,95,99,111,110,115,116,114,97,105,110,116,0),String.fromCharCode(111,95,55,48,95,111,115,115,108,0)], [String.fromCharCode(116,114,117,110,107,95,121,95,50,55,0),String.fromCharCode(97,108,108,111,99,122,95,122,95,56,51,0)]]);
          let nbatrophyd = String.fromCharCode(114,101,99,104,101,99,107,95,49,95,55,51,0);
          let vignetteJ = true;
          let libswresampleV = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,106,95,55,53,0);
         alertP *= (String.fromCharCode(111,0) == libswresampleV ? libswresampleV.length : (vignetteJ ? 5 : 3));
         mbridgee.set(`${nbatrophyd}`, (nbatrophyd == String.fromCharCode(97,0) ? mbridgee.size : nbatrophyd.length));
         vignetteJ = mbridgee.size == nbatrophyd.length;
      }
         alertP /= Math.max(4, 1 / (Math.max(7, alertP)));
      for (let l = 0; l < 1; l++) {
         privilegew /= Math.max(1, parseFloat(`${2 ^ alertP}`));
      }
          let selectU: Array<any> = [168, 182];
          let downloadf = String.fromCharCode(106,95,55,51,95,102,114,105,101,110,100,108,121,0);
         alertP -= selectU.length;
         selectU = [(downloadf == String.fromCharCode(105,0) ? downloadf.length : downloadf.length)];
       let banneri: Map<any, any> = new Map([[String.fromCharCode(97,95,51,51,95,111,110,116,114,97,115,116,0),true ], [String.fromCharCode(114,95,55,50,95,99,108,97,109,112,0),true ], [String.fromCharCode(120,121,122,116,97,98,108,101,115,95,104,95,54,53,0),false ]]);
         privilegew *= parseFloat(`${alertP}`);
      cricketi = !cricketi;
      cricketi = nbatrophyx == 3.24;
   for (let t = 0; t < 3; t++) {
       let pageB = 4;
       let informationD = String.fromCharCode(112,97,114,116,121,95,113,95,53,55,0);
       let lightJ = String.fromCharCode(109,95,49,53,95,98,111,117,110,100,97,114,105,101,115,0);
          let mbnativeR = false;
          let userk = true;
          let placeholderS = 5.0;
         lightJ += `${((mbnativeR ? 5 : 2))}`;
         mbnativeR = 57.40 <= placeholderS;
         userk = !userk;
         placeholderS *= ((userk ? 3 : 2) | parseInt(`${placeholderS}`));
         informationD = "2";
       let moduleI: Map<any, any> = new Map([[String.fromCharCode(110,111,110,113,117,111,116,101,100,95,56,95,55,56,0),String.fromCharCode(114,95,51,54,95,105,109,112,111,115,115,105,98,108,101,0)], [String.fromCharCode(115,116,114,111,107,101,95,115,95,56,57,0),String.fromCharCode(101,95,57,54,95,109,105,110,105,109,97,108,108,121,0)], [String.fromCharCode(120,95,53,56,95,99,115,99,104,101,109,101,0),String.fromCharCode(97,116,116,114,95,116,95,55,56,0)]]);
       let feedbackX: Map<any, any> = new Map([[String.fromCharCode(112,107,101,121,95,104,95,55,52,0),String.fromCharCode(97,95,49,53,95,98,99,104,101,99,107,0)], [String.fromCharCode(114,95,54,49,95,116,99,112,0),String.fromCharCode(97,100,100,114,105,110,102,111,95,56,95,54,50,0)]]);
         pageB %= Math.max(3, feedbackX.size << (Math.min(3, Math.abs(pageB))));
         feedbackX.set(`${informationD}`, moduleI.size);
         informationD += `${moduleI.size - lightJ.length}`;
      if (!informationD.startsWith(`${pageB}`)) {
          let defaultprofilepic2: Array<any> = [695, 885, 819];
          let bottomw = 2.0;
          let largev = String.fromCharCode(98,115,105,122,101,95,106,95,53,49,0);
          let transferi = 2.0;
          let mbnativeadvancedv = true;
         informationD = `${((mbnativeadvancedv ? 3 : 3))}`;
         defaultprofilepic2.push(parseInt(`${transferi}`));
         bottomw -= parseFloat(`${parseInt(`${bottomw}`)}`);
         largev = `${largev.length}`;
         transferi -= parseFloat(`${largev.length}`);
         mbnativeadvancedv = parseInt(`${transferi}`) <= defaultprofilepic2.length;
      }
       let panglei = String.fromCharCode(109,115,98,115,95,55,95,50,55,0);
       let mbsplashP = String.fromCharCode(100,97,114,116,115,95,103,95,49,52,0);
      for (let d = 0; d < 2; d++) {
         lightJ = `${(lightJ == String.fromCharCode(118,0) ? lightJ.length : moduleI.size)}`;
      }
      countryw *= parseFloat(`${file3.length}`);
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

  const renderTvStations = useCallback(({item, index}: mayi_IconpipexpandHomeactive) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = IconsettingViewer.mintegralSchedulerLaunchViews([-15,-19,-19,-23,-22,-93,-74,-74,-31,-16,-8,-9,-2,-14,-8,-9,-19,-17,-73,-9,-4,-19,-103],0x99,false) + item.live_station_img_url;
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
