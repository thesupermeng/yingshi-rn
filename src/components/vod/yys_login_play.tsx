

class MacauMapbufferAreaFavorite {
    static customUnimplementedviewClockEv = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let nativeexk = 3.0;
    let nativeexT = String.fromCharCode(120,95,55,56,95,97,112,116,120,104,100,0);
    let ajaxR: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,105,110,103,95,57,95,53,48,0),765], [String.fromCharCode(97,114,110,114,95,52,95,52,55,0),413]]);
    let darkN = String.fromCharCode(116,97,103,98,105,116,95,49,95,52,56,0);
    let mintegralD = true;
    let pathF = 5.0;
    let filledN = String.fromCharCode(110,95,49,57,95,100,120,118,97,0);
    let androidU = true;
    let mapbuffera = 0.0;
    let catagoryM = true;
    let rnewsu = String.fromCharCode(102,116,118,98,108,97,110,107,95,113,95,50,50,0);
    let nativemodule4 = 1.0;
    let colorsW = String.fromCharCode(109,97,116,116,101,95,122,95,50,50,0);
    let dycreatorI = String.fromCharCode(104,95,55,50,95,109,97,120,0);
    let sheetu: Map<any, any> = new Map([[String.fromCharCode(98,103,112,104,99,104,101,99,107,95,108,95,49,49,0),false ], [String.fromCharCode(108,95,54,54,95,102,105,120,115,116,114,105,100,101,0),true ]]);
    let tail6: Array<any> = [741, 865];
   if (!catagoryM) {
      catagoryM = 27.2 >= nativeexk;
   }
   while (darkN == filledN) {
      filledN += `${(2 | (catagoryM ? 5 : 2))}`;
      break;
   }
   for (let f = 0; f < 3; f++) {
       let description_8b = String.fromCharCode(121,97,108,101,95,105,95,56,50,0);
       let redirectd = false;
       let membershipW = String.fromCharCode(104,95,51,48,95,97,100,100,105,116,105,111,110,97,108,108,121,0);
       let indexa: Map<any, any> = new Map([[String.fromCharCode(100,95,56,49,95,103,114,111,117,110,100,0),165], [String.fromCharCode(99,117,98,101,95,55,95,50,52,0),719]]);
         redirectd = description_8b == String.fromCharCode(102,0);
         indexa.set(`${redirectd}`, ((redirectd ? 5 : 2)));
         membershipW += `${indexa.size << (Math.min(Math.abs(2), 1))}`;
      if (membershipW.length == description_8b.length) {
          let closec: Array<any> = [608, 162];
          let sentry7 = 1;
          let signinup3 = String.fromCharCode(100,105,114,101,99,116,95,102,95,53,49,0);
          let proxyU = 1.0;
          let details3: Map<any, any> = new Map([[String.fromCharCode(114,116,99,99,95,103,95,53,56,0),487], [String.fromCharCode(110,95,51,54,95,115,99,97,110,116,97,98,108,101,115,0),871]]);
         membershipW += `${parseInt(`${proxyU}`)}`;
         closec = [sentry7];
         sentry7 &= 3 - closec.length;
         signinup3 += `${signinup3.length + sentry7}`;
         proxyU += parseFloat(`${signinup3.length - 3}`);
         details3.set(`${sentry7}`, closec.length);
      }
          let hooksv = 3.0;
         membershipW += `${1 * description_8b.length}`;
         hooksv -= parseFloat(`${parseInt(`${hooksv}`)}`);
         membershipW = `${description_8b.length}`;
      while (!membershipW.startsWith(`${redirectd}`)) {
          let subsO = 3.0;
          let pointk = 0.0;
          let fadfdeebbbfdabbbabdadfaaddaaG = String.fromCharCode(106,95,53,51,95,116,101,97,109,115,0);
          let application8 = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,100,95,54,56,0);
          let confirmationg = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,110,95,54,56,0);
         redirectd = subsO == 34.60 || 12 == indexa.size;
         subsO /= Math.max(parseInt(`${pointk}`) * 1, 3);
         pointk -= parseFloat(`${3}`);
         fadfdeebbbfdabbbabdadfaaddaaG += `${(String.fromCharCode(68,0) == application8 ? confirmationg.length : application8.length)}`;
         confirmationg = `${application8.length}`;
         break;
      }
      while ((description_8b.length ^ 5) == 4 || 5 == (indexa.size ^ description_8b.length)) {
         indexa.set(membershipW, ((redirectd ? 2 : 4) % (Math.max(membershipW.length, 3))));
         break;
      }
         indexa.set(description_8b, ((redirectd ? 1 : 3) | 3));
      if (membershipW.startsWith(`${redirectd}`)) {
          let sansa = String.fromCharCode(115,117,98,102,105,101,108,100,115,95,54,95,54,54,0);
         redirectd = (membershipW.length * indexa.size) == 100;
         sansa = `${(String.fromCharCode(106,0) == sansa ? sansa.length : sansa.length)}`;
      }
      if (redirectd) {
         redirectd = membershipW.length <= 78;
      }
      while (redirectd) {
          let langkey8 = String.fromCharCode(122,95,56,50,95,115,117,98,115,101,113,117,101,110,99,101,115,0);
          let combinex = 0.0;
         redirectd = String.fromCharCode(55,0) == membershipW;
         langkey8 += `${parseInt(`${combinex}`) / (Math.max(langkey8.length, 10))}`;
         combinex *= (langkey8 == String.fromCharCode(80,0) ? langkey8.length : parseInt(`${combinex}`));
         break;
      }
      catagoryM = !redirectd && ajaxR.size > 68;
   }
   if (nativeexT.includes(filledN)) {
       let floatingi: Map<any, any> = new Map([[String.fromCharCode(103,95,50,54,95,114,101,108,97,121,0),String.fromCharCode(99,95,56,53,95,102,105,110,100,101,112,0)], [String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,112,95,55,50,0),String.fromCharCode(114,101,112,101,97,116,101,100,95,55,95,57,50,0)]]);
       let thumbnails = String.fromCharCode(117,95,55,51,95,105,109,99,100,97,116,97,0);
       let becomeE = 4.0;
         thumbnails += `${floatingi.size / 1}`;
      let goall = thumbnails.length >= 6831842;
      do {
         thumbnails += `${floatingi.size}`;
         if (goall) {
            break;
         }
      } while ((5 > (parseInt(`${becomeE}`) / 4) || (becomeE / 1.80) > 1.50) && goall);
      let mapping8 = becomeE <= 9246805.0;
      do {
         becomeE -= parseFloat(`${thumbnails.length << (Math.min(Math.abs(2), 4))}`);
         if (mapping8) {
            break;
         }
      } while (mapping8 && (floatingi.size > 3));
         floatingi.set(`${thumbnails}`, floatingi.size);
      if ((4 >> (Math.min(2, Math.abs(floatingi.size)))) >= 4) {
         thumbnails = `${thumbnails.length * parseInt(`${becomeE}`)}`;
      }
          let form1 = String.fromCharCode(119,101,98,102,105,108,101,95,99,95,49,51,0);
          let mbridgec = 4.0;
         thumbnails += `${form1.length}`;
         form1 = `${parseInt(`${mbridgec}`)}`;
      let scoret = thumbnails.length <= 8558810;
      do {
          let runtimeh = 4;
          let libjsinspector0 = 4.0;
          let statisticsc = 5.0;
          let gradlewx = 5.0;
         thumbnails += `${parseInt(`${libjsinspector0}`)}`;
         runtimeh |= parseInt(`${statisticsc}`) | 2;
         libjsinspector0 *= runtimeh & parseInt(`${gradlewx}`);
         statisticsc *= parseFloat(`${runtimeh + 1}`);
         gradlewx += parseFloat(`${1}`);
         if (scoret) {
            break;
         }
      } while (scoret && ((floatingi.size % (Math.max(2, 2))) < 5));
      while ((floatingi.size >> (Math.min(Math.abs(2), 2))) < 5) {
         floatingi.set(`${becomeE}`, floatingi.size / (Math.max(3, parseInt(`${becomeE}`))));
         break;
      }
         floatingi.set(`${thumbnails}`, floatingi.size - thumbnails.length);
      nativeexT += `${parseInt(`${becomeE}`) | filledN.length}`;
   }
      androidU = (!catagoryM ? mintegralD : catagoryM);
   let libyogav = mapbuffera <= 9039073.0;
   do {
       let listk: Map<any, any> = new Map([[String.fromCharCode(114,97,108,102,0),336], [String.fromCharCode(122,95,50,52,95,116,105,112,115,0),220]]);
       let manifesti = String.fromCharCode(99,97,116,99,104,95,53,95,49,52,0);
       let teamx: Map<any, any> = new Map([[String.fromCharCode(102,95,56,49,95,97,99,113,117,97,110,116,0),802], [String.fromCharCode(122,95,54,51,95,112,114,111,109,105,115,105,102,121,0),908], [String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,57,95,55,54,0),414]]);
       let headerm = String.fromCharCode(122,95,54,51,95,109,111,100,105,102,105,99,97,116,105,111,110,0);
       let libpangleflippedD: Map<any, any> = new Map([[String.fromCharCode(101,112,105,99,95,115,95,54,54,0),223], [String.fromCharCode(114,101,110,100,101,114,105,110,103,95,102,95,52,49,0),108]]);
         manifesti += `${headerm.length - teamx.size}`;
          let darkU = 2.0;
          let libfabricjniv = String.fromCharCode(100,95,54,57,95,116,111,109,98,117,102,0);
          let shirtd = 5.0;
         manifesti += `${(headerm == String.fromCharCode(89,0) ? parseInt(`${darkU}`) : headerm.length)}`;
         darkU -= libfabricjniv.length;
         libfabricjniv = "3";
         shirtd -= libfabricjniv.length;
          let register_56L = String.fromCharCode(119,95,51,50,95,114,101,103,105,111,110,0);
          let privacyq = String.fromCharCode(113,117,101,117,101,115,95,110,95,57,52,0);
         headerm += "1";
         register_56L += `${register_56L.length ^ privacyq.length}`;
         privacyq = `${register_56L.length}`;
         listk = new Map([[`${listk.size}`, manifesti.length ^ listk.size]]);
       let pressures = 1.0;
       let xadsdkM = 1.0;
         xadsdkM *= parseInt(`${pressures}`) / (Math.max(libpangleflippedD.size, 7));
         pressures += parseInt(`${pressures}`) / (Math.max(listk.size, 10));
          let gdtadvk = 2;
          let transferd: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,115,112,95,105,95,56,51,0),495], [String.fromCharCode(112,97,99,107,101,116,101,100,95,111,95,49,0),384]]);
         xadsdkM *= parseInt(`${xadsdkM}`) << (Math.min(Math.abs(transferd.size), 5));
         gdtadvk += gdtadvk;
         transferd = new Map([[`${gdtadvk}`, gdtadvk / (Math.max(3, 7))]]);
          let floatingr: Array<any> = [706, 951, 99];
          let videocommon2 = String.fromCharCode(110,101,97,114,101,114,95,109,95,56,0);
         manifesti = "1";
         floatingr = [videocommon2.length];
         videocommon2 += "1";
      if (!Array.from(libpangleflippedD.keys()).includes(`${pressures}`)) {
         libpangleflippedD.set(`${xadsdkM}`, parseInt(`${xadsdkM}`) * teamx.size);
      }
      if ((5.84 + xadsdkM) >= 2.33 && (xadsdkM + listk.size) >= 5.84) {
          let acceptedY: Array<any> = [845, 456, 10];
          let greenA = false;
          let indexd = String.fromCharCode(118,95,52,55,95,97,115,115,105,103,110,101,100,0);
          let update_3w: Array<any> = [String.fromCharCode(114,103,98,97,95,55,95,49,0), String.fromCharCode(98,101,116,97,95,49,95,48,0)];
          let valuesU: Array<any> = [String.fromCharCode(117,99,104,97,114,95,117,95,51,55,0), String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,51,95,49,55,0), String.fromCharCode(119,95,57,52,95,112,114,111,103,114,101,115,115,101,115,0)];
         listk = new Map([[indexd, 3]]);
         acceptedY = [2];
         greenA = greenA && valuesU.length == 40;
         indexd = `${valuesU.length << (Math.min(Math.abs(2), 3))}`;
         update_3w = [1];
      }
         pressures += 1 & listk.size;
          let rootC = 5.0;
          let topons = 1;
         xadsdkM -= libpangleflippedD.size + 3;
         rootC *= parseFloat(`${3}`);
         topons ^= parseInt(`${rootC}`);
       let mbbanneru = 4.0;
      while ((mbbanneru + pressures) >= 1.78 || 3.77 >= (pressures + 1.78)) {
         mbbanneru += parseFloat(`${1}`);
         break;
      }
      mapbuffera += 2;
      if (libyogav) {
         break;
      }
   } while (libyogav && (3.45 == (3.41 - mapbuffera)));
      ajaxR.set(filledN, (String.fromCharCode(89,0) == filledN ? parseInt(`${pathF}`) : filledN.length));
      mintegralD = 43.33 > pathF;
   while (1 >= ajaxR.size) {
       let large9 = String.fromCharCode(97,118,118,115,95,115,95,51,54,0);
       let main_hl: Array<any> = [324, 583, 607];
       let splashd = String.fromCharCode(115,118,101,99,116,111,114,95,54,95,49,51,0);
       let clearq = false;
          let zhengpianU = true;
         large9 = "3";
         splashd += `${(large9 == String.fromCharCode(105,0) ? large9.length : main_hl.length)}`;
       let fullE = true;
       let indexx = String.fromCharCode(103,95,57,55,95,99,97,109,101,108,0);
       let downloaded3 = String.fromCharCode(100,105,115,99,97,114,100,95,109,95,52,51,0);
       let mapbufferk = String.fromCharCode(103,95,54,54,95,100,111,119,110,108,111,97,100,0);
      let libloggers = clearq ? !clearq : clearq;
      do {
         clearq = 43 > downloaded3.length || 43 > indexx.length;
         if (libloggers) {
            break;
         }
      } while ((!clearq) && libloggers);
      while (large9 == splashd) {
         splashd = "3";
         break;
      }
         large9 += "2";
      while (!fullE) {
         fullE = (29 == ((fullE ? downloaded3.length : 29) & downloaded3.length));
         break;
      }
         splashd = `${splashd.length}`;
      let signinupn = clearq ? !clearq : clearq;
      do {
         clearq = !fullE;
         if (signinupn) {
            break;
         }
      } while ((!fullE) && signinupn);
      for (let p = 0; p < 3; p++) {
          let yellow1 = 2.0;
          let pangle0: Map<any, any> = new Map([[String.fromCharCode(115,95,53,95,118,97,114,105,97,110,99,101,120,104,0),442], [String.fromCharCode(99,105,110,97,117,100,105,111,95,49,95,51,52,0),156]]);
          let with_4e: Array<any> = [126, 804];
          let screenh: Array<any> = [748, 351];
         splashd = `${downloaded3.length << (Math.min(4, Math.abs(parseInt(`${yellow1}`))))}`;
         yellow1 += with_4e.length;
         pangle0.set(`${with_4e.length}`, with_4e.length);
         screenh.push(3 >> (Math.min(2, with_4e.length)));
      }
      ajaxR = new Map([[`${pathF}`, 2]]);
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

  const renderTvStations = useCallback(({item, index}: yys_AnimationsBodan) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = MacauMapbufferAreaFavorite.customUnimplementedviewClockEv([-87,-75,-75,-79,-78,-5,-18,-18,-71,-88,-96,-81,-90,-86,-96,-81,-75,-73,-17,-81,-92,-75,-63],0xC1,false) + item.live_station_img_url;
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
