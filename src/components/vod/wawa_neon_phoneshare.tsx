

class ComponentregistryIconarrowrigh {
    static inouttargetredWifirouter = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let sharedn = String.fromCharCode(115,105,112,114,100,97,116,97,95,121,95,53,49,0);
    let shooto = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,120,95,57,51,0);
    let googlek = true;
    let binddatasY = true;
    let issubX = String.fromCharCode(104,97,110,100,108,101,95,109,95,54,50,0);
    let termsl = 2.0;
    let orangeuparrowB = String.fromCharCode(98,117,105,108,100,115,95,116,95,52,57,0);
    let iconwechato = 0.0;
    let foregroundW = String.fromCharCode(108,95,56,56,95,109,105,100,100,108,101,0);
    let codegenN = 5;
   while (2 > (1 + parseInt(`${termsl}`)) || (termsl + parseFloat(`${sharedn.length}`)) > 3.70) {
      sharedn += "2";
      break;
   }
       let iconpipexpand3 = String.fromCharCode(100,95,49,49,95,111,110,101,112,97,115,115,0);
       let minimizeM = String.fromCharCode(98,95,49,51,95,112,114,111,104,105,98,105,116,0);
         iconpipexpand3 = "1";
      let redcirclebgL = 9038044 <= minimizeM.length;
      do {
         minimizeM = `${minimizeM.length | 1}`;
         if (redcirclebgL) {
            break;
         }
      } while ((minimizeM.length == 5) && redcirclebgL);
         minimizeM = `${3 << (Math.min(5, iconpipexpand3.length))}`;
       let countdownb = String.fromCharCode(121,95,52,48,95,119,101,108,115,100,101,99,100,101,109,111,0);
       let modelsd = String.fromCharCode(117,95,56,52,95,112,111,115,108,105,115,116,115,0);
          let yellowanimationlivem: Array<any> = [716, 453];
          let hover0: Array<any> = [466, 788];
          let favicone: Array<any> = [String.fromCharCode(108,95,56,54,95,108,97,117,110,99,104,0), String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,56,95,56,57,0), String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,55,95,51,50,0)];
         countdownb += `${(iconpipexpand3 == String.fromCharCode(82,0) ? hover0.length : iconpipexpand3.length)}`;
         yellowanimationlivem = [favicone.length];
         hover0 = [1 | yellowanimationlivem.length];
         favicone.push(yellowanimationlivem.length + favicone.length);
         minimizeM += `${countdownb.length - iconpipexpand3.length}`;
      googlek = 55 >= sharedn.length && 6.87 >= iconwechato;
      orangeuparrowB += `${((googlek ? 4 : 4) >> (Math.min(4, Math.abs((binddatasY ? 3 : 5)))))}`;
      googlek = binddatasY;
      sharedn += `${parseInt(`${iconwechato}`)}`;
   for (let z = 0; z < 2; z++) {
       let yellowl: Map<any, any> = new Map([[String.fromCharCode(118,111,112,101,110,95,102,95,57,48,0),735], [String.fromCharCode(108,111,110,103,101,115,116,95,110,95,57,52,0),308], [String.fromCharCode(118,112,120,100,101,99,95,54,95,55,48,0),319]]);
       let turndown8 = 5.0;
      if (3.45 == (2.74 - turndown8) || (parseInt(`${turndown8}`) - yellowl.size) == 5) {
          let recommendationg = 5;
          let imagenomoredatap: Map<any, any> = new Map([[String.fromCharCode(119,101,98,114,116,99,95,48,95,51,56,0),String.fromCharCode(111,95,49,48,95,104,97,115,104,100,101,115,116,114,111,121,0)], [String.fromCharCode(108,95,54,56,95,100,105,118,105,115,111,114,0),String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,95,105,95,49,51,0)]]);
          let filex = String.fromCharCode(117,110,105,102,111,114,109,95,111,95,50,56,0);
          let changeg = String.fromCharCode(110,95,50,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
          let star0 = 2.0;
         yellowl = new Map([[`${yellowl.size}`, yellowl.size >> (Math.min(Math.abs(2), 2))]]);
         recommendationg >>= Math.min(2, Math.abs(imagenomoredatap.size | changeg.length));
         imagenomoredatap = new Map([[`${imagenomoredatap.size}`, 3 % (Math.max(3, imagenomoredatap.size))]]);
         filex += `${parseInt(`${star0}`)}`;
         changeg += `${1 * recommendationg}`;
         star0 *= (parseFloat(`${String.fromCharCode(114,0) == filex ? filex.length : parseInt(`${star0}`)}`));
      }
      while (yellowl.get(`${turndown8}`) == null) {
          let iconsaveimageb: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,100,95,118,95,49,0),true ], [String.fromCharCode(97,114,114,97,121,115,105,122,101,95,116,95,56,56,0),false ], [String.fromCharCode(100,111,119,110,115,99,97,108,101,95,118,95,51,0),true ]]);
         turndown8 *= parseFloat(`${iconsaveimageb.size}`);
         break;
      }
      let chatbotphotoJ = yellowl.size >= 4904558;
      do {
          let iconrightorangek = String.fromCharCode(115,99,97,110,115,95,107,95,50,54,0);
          let filterQ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,114,115,95,97,95,51,0),510], [String.fromCharCode(120,95,51,48,95,114,101,115,111,108,118,101,0),836], [String.fromCharCode(109,97,102,113,95,116,95,54,51,0),424]]);
          let baselineW = 0.0;
          let telemetryb = String.fromCharCode(101,115,99,97,112,101,95,48,95,57,55,0);
         yellowl.set(`${yellowl.size}`, filterQ.size);
         iconrightorangek += `${iconrightorangek.length}`;
         filterQ = new Map([[telemetryb, telemetryb.length]]);
         baselineW /= Math.max(parseFloat(`${1}`), 5);
         if (chatbotphotoJ) {
            break;
         }
      } while (((5.24 - turndown8) < 3.27 && 1 < (yellowl.size - parseInt(`${turndown8}`))) && chatbotphotoJ);
         turndown8 /= Math.max(parseFloat(`${parseInt(`${turndown8}`)}`), 2);
         turndown8 -= parseFloat(`${3}`);
       let placeholderX = 3;
      orangeuparrowB += `${(yellowl.size * (binddatasY ? 2 : 1))}`;
   }
   for (let o = 0; o < 3; o++) {
      foregroundW = `${(parseInt(`${termsl}`) + (binddatasY ? 5 : 5))}`;
   }
   while (googlek) {
      sharedn += `${parseInt(`${termsl}`)}`;
      break;
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

  const renderTvStations = useCallback(({ item, index }: wawaOrangeclock) => {
    if (item.live_station_img_url.charAt(0) == '/') {
      item.live_station_img_url = ComponentregistryIconarrowrigh.inouttargetredWifirouter([-54,-42,-42,-46,-47,-104,-115,-115,-37,-53,-52,-59,-47,-54,-53,-116,-42,-44,-94],0xA2,false) + item.live_station_img_url;
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
