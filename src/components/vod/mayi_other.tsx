

class DropdownIconarrowrightAudience {
    static topicBackwardEpisodes = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let iconT = 1.0;
    let downY = String.fromCharCode(113,95,49,57,95,115,99,114,101,101,110,115,104,97,114,101,0);
    let iconedit3 = 2.0;
    let upgradeM = 3;
    let profileb: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,109,98,102,105,108,116,101,114,0),918], [String.fromCharCode(102,105,108,108,101,114,95,113,95,56,53,0),991]]);
    let stationo: Map<any, any> = new Map([[String.fromCharCode(107,95,49,55,95,116,114,97,110,115,102,111,114,109,0),955], [String.fromCharCode(110,95,51,49,95,104,97,110,100,111,102,102,0),569], [String.fromCharCode(110,111,104,119,95,118,95,49,0),859]]);
    let storea = String.fromCharCode(115,101,108,101,99,116,105,118,101,95,119,95,51,54,0);
    let bridgem = 5.0;
    let detailn: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,112,101,114,109,105,116,116,101,100,0),886], [String.fromCharCode(116,114,101,110,100,108,105,110,101,95,115,95,51,48,0),555], [String.fromCharCode(99,108,111,99,107,95,56,95,54,50,0),465]]);
   for (let c = 0; c < 2; c++) {
      stationo = new Map([[`${stationo.size}`, parseInt(`${iconedit3}`)]]);
   }
       let anythinka = true;
       let tcopy_hF = String.fromCharCode(106,95,52,51,95,118,101,114,105,102,105,101,114,0);
       let componentregistryj = String.fromCharCode(109,111,100,101,110,97,109,101,95,97,95,56,51,0);
      let auto_pcF = tcopy_hF == String.fromCharCode(52,110,118,57,50,0);
      do {
         tcopy_hF = `${(tcopy_hF == String.fromCharCode(55,0) ? (anythinka ? 5 : 4) : tcopy_hF.length)}`;
         if (auto_pcF) {
            break;
         }
      } while (auto_pcF && (componentregistryj.length == tcopy_hF.length));
         componentregistryj += `${(String.fromCharCode(97,0) == componentregistryj ? tcopy_hF.length : componentregistryj.length)}`;
      if (componentregistryj.length > 4) {
         componentregistryj += "3";
      }
          let gifgoalk = String.fromCharCode(108,95,52,56,95,101,118,98,117,102,102,101,114,0);
          let armvaQ = 0.0;
         tcopy_hF += `${(String.fromCharCode(90,0) == componentregistryj ? gifgoalk.length : componentregistryj.length)}`;
         gifgoalk = `${parseInt(`${armvaQ}`)}`;
      for (let h = 0; h < 2; h++) {
         tcopy_hF = `${1 | componentregistryj.length}`;
      }
       let androidy = String.fromCharCode(108,105,98,101,114,116,121,95,50,95,56,55,0);
       let username6 = String.fromCharCode(115,95,54,52,95,98,108,97,107,101,115,0);
      if (username6.includes(`${componentregistryj.length}`)) {
         username6 += `${((anythinka ? 5 : 4))}`;
      }
       let shootyesgoalQ = String.fromCharCode(109,101,109,99,112,121,95,112,95,54,53,0);
       let predictionwinn = String.fromCharCode(105,95,56,55,95,112,101,114,115,105,115,116,101,100,0);
         username6 += `${componentregistryj.length ^ 1}`;
      profileb = new Map([[storea, tcopy_hF.length]]);
   while (5 < (stationo.size % (Math.max(profileb.size, 6))) && (stationo.size % 5) < 2) {
      profileb = new Map([[`${profileb.size}`, 3]]);
      break;
   }
   let iconstar7 = 9192113.0 >= iconedit3;
   do {
       let relatedn = 3.0;
       let backP: Array<any> = [538, 674];
       let libreactnativeblob6 = true;
       let clockY: Array<any> = [String.fromCharCode(113,95,55,95,100,117,112,99,108,0), String.fromCharCode(101,95,55,49,95,116,111,112,115,0), String.fromCharCode(103,95,50,54,95,98,97,115,101,110,97,109,101,0)];
         libreactnativeblob6 = parseInt(`${relatedn}`) == backP.length;
         libreactnativeblob6 = clockY.length <= 10;
      if (!libreactnativeblob6 || 2 > (1 & backP.length)) {
          let sansX = 3.0;
         libreactnativeblob6 = backP.includes(relatedn);
         sansX += parseFloat(`${parseInt(`${sansX}`)}`);
      }
       let smallm = 3.0;
      while (!libreactnativeblob6) {
         libreactnativeblob6 = 40 > clockY.length;
         break;
      }
         smallm /= Math.max(2, ((libreactnativeblob6 ? 2 : 1) | 1));
      let audiencer = smallm <= 7520460.0;
      do {
         smallm += backP.length / (Math.max(3, 2));
         if (audiencer) {
            break;
         }
      } while ((4.75 <= (relatedn + 1)) && audiencer);
       let template_6c: Array<any> = [150, 743];
       let projecte: Array<any> = [888, 540, 481];
      if (3.50 <= (smallm / 2.35) && 2 <= (4 * template_6c.length)) {
         template_6c.push(template_6c.length);
      }
         relatedn += parseFloat(`${3}`);
       let mbnativex = 1.0;
       let telegramf = 1.0;
      let basketballtrophyv = backP.length <= 5538994;
      do {
         backP.push(backP.length);
         if (basketballtrophyv) {
            break;
         }
      } while (basketballtrophyv && (!libreactnativeblob6));
      iconedit3 /= Math.max(parseFloat(`${2}`), 5);
      if (iconstar7) {
         break;
      }
   } while (iconstar7 && (Array.from(profileb.keys()).includes(`${iconedit3}`)));
   let gifgoalbgD = downY.length >= 6208228;
   do {
      downY += `${upgradeM}`;
      if (gifgoalbgD) {
         break;
      }
   } while (gifgoalbgD && (upgradeM >= 1));
       let launcherK: Map<any, any> = new Map([[String.fromCharCode(116,95,53,53,95,98,101,120,116,0),781], [String.fromCharCode(116,97,103,115,95,55,95,50,56,0),459]]);
       let iconTU = String.fromCharCode(117,105,100,95,51,95,55,50,0);
      for (let p = 0; p < 3; p++) {
         launcherK = new Map([[`${launcherK.size}`, (iconTU == String.fromCharCode(103,0) ? iconTU.length : launcherK.size)]]);
      }
         iconTU += `${2 + iconTU.length}`;
      let auto_r4b = iconTU == String.fromCharCode(101,52,109,104,48,113,52,106,116,119,0);
      do {
         iconTU = `${(String.fromCharCode(118,0) == iconTU ? launcherK.size : iconTU.length)}`;
         if (auto_r4b) {
            break;
         }
      } while (auto_r4b && (iconTU.length < launcherK.size));
      while (3 <= iconTU.length) {
          let videoT = 4.0;
          let downarrow2 = false;
          let helperS = 3.0;
         iconTU += `${(iconTU == String.fromCharCode(95,0) ? iconTU.length : (downarrow2 ? 3 : 3))}`;
         videoT *= parseFloat(`${parseInt(`${videoT}`) & 1}`);
         downarrow2 = helperS > 46.72;
         helperS /= Math.max(parseInt(`${videoT}`), 4);
         break;
      }
      for (let x = 0; x < 3; x++) {
         launcherK.set(iconTU, iconTU.length / 2);
      }
      if (iconTU.includes(`${launcherK.size}`)) {
          let iconorientation7 = 1.0;
          let logos = String.fromCharCode(117,117,105,100,112,114,111,102,95,120,95,49,56,0);
          let notificationL = String.fromCharCode(111,95,54,54,95,105,115,101,109,112,116,121,0);
         iconTU += `${3 ^ notificationL.length}`;
         iconorientation7 *= 1;
         logos = `${3 | parseInt(`${iconorientation7}`)}`;
         notificationL = `${logos.length - parseInt(`${iconorientation7}`)}`;
      }
      upgradeM <<= Math.min(3, Math.abs(parseInt(`${iconT}`) + storea.length));
      iconedit3 += parseFloat(`${storea.length * upgradeM}`);

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
      item.live_station_img_url = DropdownIconarrowrightAudience.topicBackwardEpisodes([95,67,67,71,68,13,24,24,79,94,86,89,80,92,86,89,67,65,25,89,82,67,55],0x37,false) + item.live_station_img_url;
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
