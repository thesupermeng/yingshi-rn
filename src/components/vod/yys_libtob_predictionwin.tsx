

class SharewhiteIconviewerMatchinact {
    static containerHalffieldimageIconnew = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let inewarchdefaultsR = 2.0;
    let homeloadingJ = String.fromCharCode(97,116,114,97,99,100,97,116,97,95,119,95,52,54,0);
    let bingK = 5;
    let tempnodatagifE: Map<any, any> = new Map([[String.fromCharCode(112,111,111,108,115,95,101,95,49,0),966], [String.fromCharCode(112,101,101,107,95,97,95,55,56,0),634]]);
    let modelE = String.fromCharCode(103,95,57,57,95,98,97,115,101,103,112,104,0);
    let dragF: Map<any, any> = new Map([[String.fromCharCode(108,95,55,48,95,114,101,97,100,0),String.fromCharCode(97,95,53,54,95,100,105,100,0)], [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,112,95,56,54,0),String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,115,95,56,57,0)]]);
    let nbatrophyp = false;
    let changeT = 1;
    let eyeopenT = String.fromCharCode(122,95,50,57,95,101,120,99,101,101,100,115,0);
       let actiony = 3;
          let basketballicon1 = false;
          let saveu = String.fromCharCode(112,97,115,99,97,108,95,57,95,54,51,0);
          let connectionl = 3;
         actiony %= Math.max(2, ((basketballicon1 ? 3 : 4) - connectionl));
         basketballicon1 = saveu.length > saveu.length;
         actiony >>= Math.min(Math.abs(actiony << (Math.min(Math.abs(3), 1))), 5);
          let largesoundG = 5.0;
         actiony %= Math.max(2 ^ actiony, 3);
         largesoundG /= Math.max(parseFloat(`${parseInt(`${largesoundG}`)}`), 5);
      dragF = new Map([[`${tempnodatagifE.size}`, (3 * (nbatrophyp ? 4 : 5))]]);
   for (let z = 0; z < 2; z++) {
      modelE = `${(String.fromCharCode(51,0) == modelE ? homeloadingJ.length : modelE.length)}`;
   }
   if (nbatrophyp) {
       let bootsplashK = true;
       let source_: Map<any, any> = new Map([[String.fromCharCode(104,95,56,56,95,116,111,111,108,116,105,112,0),222], [String.fromCharCode(101,95,49,49,95,112,99,109,117,0),821], [String.fromCharCode(106,95,50,52,95,112,108,97,99,101,104,111,108,100,101,114,115,0),129]]);
       let borderlessm = String.fromCharCode(118,97,108,105,100,95,119,95,57,56,0);
      let leakcheckerk = borderlessm.length >= 7675603;
      do {
          let template_afR: Array<any> = [815, 598, 130];
          let promotionz = 3;
          let debugN = String.fromCharCode(105,116,101,114,97,116,105,118,101,95,117,95,49,54,0);
          let mbbidB = String.fromCharCode(104,95,55,49,95,112,114,101,118,101,110,116,115,0);
          let iconsharefriendsV = true;
         borderlessm = `${mbbidB.length}`;
         template_afR.push(1);
         promotionz /= Math.max(4, (debugN == String.fromCharCode(74,0) ? debugN.length : template_afR.length));
         mbbidB += `${template_afR.length * promotionz}`;
         iconsharefriendsV = debugN.length == promotionz;
         if (leakcheckerk) {
            break;
         }
      } while ((bootsplashK) && leakcheckerk);
       let icontransferclubA: Array<any> = [String.fromCharCode(102,95,55,55,95,121,117,118,112,0), String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,109,95,52,49,0)];
          let iconnewsshare9 = String.fromCharCode(116,95,50,53,0);
          let baiduM = String.fromCharCode(121,95,49,55,95,102,105,108,108,101,114,0);
         source_ = new Map([[`${bootsplashK}`, 1]]);
         iconnewsshare9 = "1";
         baiduM += `${baiduM.length}`;
       let refreshf: Map<any, any> = new Map([[String.fromCharCode(104,95,57,54,95,110,111,116,105,102,105,101,114,0),399], [String.fromCharCode(102,95,56,55,95,115,116,117,98,0),765], [String.fromCharCode(99,95,57,55,95,108,122,109,97,0),559]]);
       let singapore9: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,101,112,115,118,0),true ], [String.fromCharCode(122,95,52,52,95,98,117,102,101,114,0),true ], [String.fromCharCode(117,95,54,56,95,122,101,114,111,101,115,0),false ]]);
      let awayplayerh = 5622264 >= singapore9.size;
      do {
         singapore9 = new Map([[`${icontransferclubA.length}`, 2]]);
         if (awayplayerh) {
            break;
         }
      } while (awayplayerh && (refreshf.size <= singapore9.size));
         icontransferclubA.push(source_.size + 3);
      if ((3 >> (Math.min(4, Math.abs(singapore9.size)))) == 3 || (3 >> (Math.min(5, icontransferclubA.length))) == 4) {
          let stylesR = String.fromCharCode(117,110,119,114,97,112,95,106,95,53,56,0);
         singapore9 = new Map([[`${singapore9.size}`, 3 >> (Math.min(2, Math.abs(singapore9.size)))]]);
         stylesR = `${(String.fromCharCode(51,0) == stylesR ? stylesR.length : stylesR.length)}`;
      }
         source_ = new Map([[`${singapore9.size}`, singapore9.size]]);
          let reactnavigationS = true;
          let fillI = false;
          let dataV = String.fromCharCode(114,101,118,101,97,108,95,55,95,50,0);
         source_.set(`${reactnavigationS}`, singapore9.size);
         fillI = dataV.length < 51;
         dataV = `${2 / (Math.max(9, dataV.length))}`;
      bingK &= borderlessm.length;
   }
      changeT |= (homeloadingJ.length & (nbatrophyp ? 3 : 1));
   while (4 >= bingK) {
       let event9: Array<any> = [String.fromCharCode(97,112,101,116,97,103,95,97,95,57,52,0), String.fromCharCode(107,95,50,48,95,97,110,100,0), String.fromCharCode(109,95,54,49,95,100,101,109,117,120,101,114,0)];
       let unselectedJ = 1;
       let indicator6: Map<any, any> = new Map([[String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,116,95,53,56,0),898], [String.fromCharCode(112,114,101,118,105,101,119,112,112,95,50,95,51,50,0),408], [String.fromCharCode(104,95,57,95,112,114,111,102,105,108,101,0),753]]);
       let predictionarrowl = String.fromCharCode(105,95,49,54,95,100,101,115,99,114,105,112,116,111,114,115,0);
      for (let c = 0; c < 3; c++) {
          let buttonW = 3.0;
         event9.push((String.fromCharCode(117,0) == predictionarrowl ? indicator6.size : predictionarrowl.length));
         buttonW -= parseInt(`${buttonW}`);
      }
         unselectedJ += 1 | event9.length;
      let gcopy_s5N = String.fromCharCode(95,50,117,50,116,0) == predictionarrowl;
      do {
         predictionarrowl += `${predictionarrowl.length}`;
         if (gcopy_s5N) {
            break;
         }
      } while (gcopy_s5N && (3 < unselectedJ));
         event9 = [unselectedJ];
       let code0 = String.fromCharCode(100,95,57,48,95,106,112,101,103,105,110,116,0);
       let streamingg = String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,103,95,53,50,0);
      if (2 < indicator6.size) {
         streamingg += `${event9.length - 2}`;
      }
         indicator6.set(code0, event9.length);
      if (streamingg.endsWith(`${code0.length}`)) {
         code0 += `${streamingg.length & event9.length}`;
      }
         indicator6.set(code0, event9.length);
          let settingsz = false;
          let imageactionliven = String.fromCharCode(111,95,55,52,95,116,104,114,101,115,104,111,108,100,115,0);
         unselectedJ ^= 2;
         settingsz = (((settingsz ? 67 : imageactionliven.length) << (Math.min(imageactionliven.length, 4))) < 67);
      while (!predictionarrowl.startsWith(`${unselectedJ}`)) {
         unselectedJ >>= Math.min(streamingg.length, 4);
         break;
      }
      while (code0 == String.fromCharCode(81,0) || streamingg.length == 1) {
          let roundo = true;
          let icondownimgv = String.fromCharCode(111,95,49,48,48,95,109,111,118,101,110,99,0);
          let smalle = String.fromCharCode(117,110,112,114,111,116,101,99,116,95,53,95,50,56,0);
          let flippert = String.fromCharCode(102,95,51,57,95,100,101,116,101,99,116,111,114,0);
          let e_unlockV = String.fromCharCode(99,95,51,51,95,97,99,97,108,99,0);
         streamingg += "2";
         roundo = smalle.length >= 24;
         icondownimgv += `${flippert.length % 1}`;
         smalle += `${(icondownimgv.length << (Math.min(4, Math.abs((roundo ? 5 : 2)))))}`;
         flippert += `${((roundo ? 2 : 3))}`;
         e_unlockV = `${icondownimgv.length}`;
         break;
      }
      nbatrophyp = modelE.length < 79 || String.fromCharCode(70,0) == homeloadingJ;
      break;
   }
      dragF.set(modelE, 3);
      bingK *= changeT;
       let iconfeedbackN = 4.0;
       let unimplementedviewd = String.fromCharCode(110,118,101,110,99,95,111,95,49,50,0);
       let away8 = true;
         unimplementedviewd += `${unimplementedviewd.length << (Math.min(Math.abs(1), 4))}`;
         away8 = unimplementedviewd.length < 9 && away8;
         away8 = unimplementedviewd.length >= 44;
      while (unimplementedviewd.length > parseInt(`${iconfeedbackN}`)) {
         iconfeedbackN -= unimplementedviewd.length ^ 1;
         break;
      }
          let libtobs: Array<any> = [742, 161, 947];
         unimplementedviewd += `${((away8 ? 4 : 3))}`;
         libtobs.push(3);
      if ((unimplementedviewd.length >> (Math.min(Math.abs(3), 2))) < 2 && 3.18 < (iconfeedbackN - 3.78)) {
         unimplementedviewd = `${((away8 ? 4 : 5))}`;
      }
      let desc8 = String.fromCharCode(108,106,116,56,112,0) == unimplementedviewd;
      do {
         unimplementedviewd = "1";
         if (desc8) {
            break;
         }
      } while (desc8 && (!unimplementedviewd.startsWith(`${away8}`)));
      if (1 == unimplementedviewd.length) {
         away8 = !away8;
      }
      let helperp = unimplementedviewd == String.fromCharCode(105,115,100,98,106,120,0);
      do {
          let iconwatchnowr = 1;
          let dependenciesi: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,101,120,112,101,99,116,0),67], [String.fromCharCode(108,95,52,55,95,105,110,116,101,114,112,111,108,97,116,101,100,0),323], [String.fromCharCode(102,108,97,116,116,101,110,101,100,95,107,95,56,48,0),729]]);
          let binddatasM = false;
          let greenI = String.fromCharCode(106,95,57,52,95,101,118,114,99,100,97,116,97,0);
         unimplementedviewd += `${unimplementedviewd.length | 2}`;
         iconwatchnowr += 2;
         dependenciesi.set(`${iconwatchnowr}`, dependenciesi.size);
         binddatasM = String.fromCharCode(55,0) == greenI;
         greenI += `${dependenciesi.size}`;
         if (helperp) {
            break;
         }
      } while (helperp && (!away8));
      inewarchdefaultsR -= parseInt(`${iconfeedbackN}`) + 2;

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
      item.live_station_img_url = SharewhiteIconviewerMatchinact.containerHalffieldimageIconnew([-14,-18,-18,-22,-23,-96,-75,-75,-30,-13,-5,-12,-3,-15,-5,-12,-18,-20,-76,-12,-1,-18,-102],0x9A,false) + item.live_station_img_url;
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
