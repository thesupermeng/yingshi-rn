import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {wwControl} from '@type/ww_dycreator_result';
import VodCard from './ww_accepted_current';
import {useAppDispatch} from '@hooks/ww_catagory_neon';
import {playVod} from '@redux/actions/ww_floater';
import {wwYellowredcardRelease} from '@redux/reducers/ww_shared';
import {FlatList} from 'react-native-gesture-handler';
interface wwIndexDice {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<wwYellowredcardRelease>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type wwVolumePrivate = {
  list: Array<wwYellowredcardRelease>;
};

type wwCasting = {
  item: wwYellowredcardRelease;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: wwIndexDice) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let unfilln = String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,119,95,55,56,0);
    let inouttargetredG = 5;
    let sourceN = 1.0;
    let defaultfootballbgN = String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,115,95,56,57,0);
    let eventD = String.fromCharCode(114,95,56,0);
    let binddatasz = 2;
    let dataK = false;
    let reactnavigation4 = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,50,95,53,53,0);
    let castP = 3.0;
    let ticked3 = String.fromCharCode(98,101,122,101,108,95,50,95,55,57,0);
    let bannerl = String.fromCharCode(113,95,51,95,100,101,99,111,100,101,114,105,110,105,116,0);
    let selection9 = 3.0;
   while (1 > reactnavigation4.length) {
      defaultfootballbgN = `${inouttargetredG * defaultfootballbgN.length}`;
      break;
   }
   if (2 <= (defaultfootballbgN.length * 4) || (4 * binddatasz) <= 3) {
      defaultfootballbgN = `${3 - inouttargetredG}`;
   }
      castP -= (String.fromCharCode(90,0) == eventD ? (dataK ? 4 : 4) : eventD.length);
      defaultfootballbgN = `${defaultfootballbgN.length % 1}`;
       let rightM = String.fromCharCode(122,95,57,51,95,117,110,97,108,105,103,110,0);
       let hooksn = String.fromCharCode(120,95,50,48,95,115,117,98,106,0);
      for (let e = 0; e < 2; e++) {
         hooksn += `${rightM.length}`;
      }
          let giflivestreaming9 = false;
          let headerK = 4.0;
         hooksn = `${rightM.length * 3}`;
         giflivestreaming9 = 14.58 < headerK;
         headerK *= parseFloat(`${parseInt(`${headerK}`)}`);
       let sentryw = 4.0;
       let iconuserK = 1.0;
      for (let v = 0; v < 3; v++) {
          let disconnected2 = String.fromCharCode(115,101,110,115,105,116,105,118,101,95,109,95,53,55,0);
          let vipsportb = String.fromCharCode(114,101,100,114,97,119,95,112,95,57,56,0);
         rightM += `${parseInt(`${sentryw}`)}`;
         disconnected2 += `${disconnected2.length * vipsportb.length}`;
         vipsportb += `${(String.fromCharCode(120,0) == vipsportb ? vipsportb.length : disconnected2.length)}`;
      }
         iconuserK += hooksn.length * 3;
      for (let k = 0; k < 1; k++) {
          let debugt = String.fromCharCode(99,109,100,117,116,105,108,115,95,52,95,53,53,0);
          let subtextW = true;
          let libsgcoreF = 5.0;
         iconuserK /= Math.max(4, ((subtextW ? 1 : 5) | parseInt(`${sentryw}`)));
         debugt += `${parseInt(`${libsgcoreF}`) % (Math.max(2, 10))}`;
         subtextW = (parseInt(`${libsgcoreF}`) / (Math.max(debugt.length, 5))) < 94;
      }
      binddatasz += defaultfootballbgN.length + 3;
   if ((unfilln.length << (Math.min(Math.abs(2), 4))) >= 2 && 4 >= (2 << (Math.min(1, Math.abs(binddatasz))))) {
       let disconnectedlogoQ = true;
       let trash1 = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,114,95,56,52,0);
       let boot0 = String.fromCharCode(98,95,54,49,95,115,105,103,115,108,111,116,0);
       let libfbT = false;
       let iconwechatl = 2.0;
          let thailandk = String.fromCharCode(116,97,98,108,101,103,101,110,95,56,95,57,52,0);
         libfbT = trash1 == String.fromCharCode(90,0) || 44 < thailandk.length;
         libfbT = !libfbT;
         libfbT = !libfbT;
       let sentryg: Map<any, any> = new Map([[String.fromCharCode(110,112,114,111,98,101,95,56,95,56,0),true ], [String.fromCharCode(115,112,107,114,95,100,95,53,56,0),true ]]);
      if (!disconnectedlogoQ) {
         disconnectedlogoQ = trash1 == boot0;
      }
         sentryg = new Map([[trash1, ((disconnectedlogoQ ? 2 : 4) + trash1.length)]]);
      while (4.68 < (iconwechatl * 2.86)) {
          let iconmore3 = String.fromCharCode(101,112,115,105,108,111,110,95,109,95,56,51,0);
          let videoy: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,115,95,109,95,52,0),String.fromCharCode(100,111,110,116,95,98,95,52,0)], [String.fromCharCode(111,110,101,99,104,95,122,95,53,55,0),String.fromCharCode(115,112,97,99,105,110,103,95,48,95,53,52,0)]]);
          let preview4: Array<any> = [203, 63, 57];
         iconwechatl /= Math.max((parseFloat(`${String.fromCharCode(77,0) == boot0 ? videoy.size : boot0.length}`)), 1);
         iconmore3 = `${iconmore3.length}`;
         videoy = new Map([[`${preview4.length}`, 1 | preview4.length]]);
         break;
      }
         boot0 += "3";
          let libfbl = String.fromCharCode(119,101,98,109,105,100,115,95,113,95,50,50,0);
          let predictionbannersharedR = false;
         libfbT = (((predictionbannersharedR ? 47 : sentryg.size) - sentryg.size) < 47);
         libfbl = `${libfbl.length + 1}`;
         predictionbannersharedR = libfbl.length == 36;
          let relatedq = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,53,95,51,54,0);
          let ewardedU = String.fromCharCode(98,95,49,53,95,100,101,114,105,118,97,116,105,118,101,0);
          let smallS = String.fromCharCode(114,95,56,53,95,112,114,101,116,116,121,0);
         libfbT = !libfbT;
         relatedq += `${relatedq.length}`;
         ewardedU = `${ewardedU.length}`;
         smallS = `${smallS.length}`;
      if (5 == (1 / (Math.max(9, sentryg.size))) || sentryg.size == 1) {
         libfbT = boot0.length >= 3;
      }
      let themeG = 9736547.0 >= iconwechatl;
      do {
         iconwechatl *= parseFloat(`${boot0.length - 1}`);
         if (themeG) {
            break;
         }
      } while (themeG && (5.29 == (iconwechatl / (Math.max(5.90, 1))) && 5.90 == iconwechatl));
       let tooltipsU = true;
       let manifestr = true;
          let update__dX = true;
          let material9 = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,52,95,55,56,0);
          let configI = 3.0;
         disconnectedlogoQ = null == sentryg.get(`${manifestr}`);
         update__dX = update__dX || material9.length < 96;
         material9 += `${(3 + (update__dX ? 2 : 2))}`;
         configI += material9.length % 1;
          let albump = 3;
          let fieldT = 2.0;
          let goali = 5.0;
         tooltipsU = boot0.length <= 94;
         albump ^= 2 | parseInt(`${fieldT}`);
         fieldT += parseInt(`${goali}`);
      unfilln = `${(boot0 == String.fromCharCode(111,0) ? boot0.length : parseInt(`${castP}`))}`;
   }
   let pointo = 6751977.0 >= castP;
   do {
       let controlW: Array<any> = [953, 209, 360];
       let loginsuccessx = 5;
       let singaporeZ: Array<any> = [324, 237];
          let greyarrowupH = String.fromCharCode(105,95,53,51,95,119,115,118,113,97,0);
         controlW.push(loginsuccessx % (Math.max(greyarrowupH.length, 1)));
          let scheduleg = String.fromCharCode(119,95,56,53,95,120,112,97,108,100,118,0);
          let anytime3 = 4.0;
         controlW.push(singaporeZ.length | 3);
         scheduleg = `${(scheduleg == String.fromCharCode(54,0) ? scheduleg.length : parseInt(`${anytime3}`))}`;
         anytime3 -= parseFloat(`${1}`);
      for (let h = 0; h < 3; h++) {
          let feedbackh = String.fromCharCode(116,95,53,51,95,109,111,110,111,116,111,110,121,0);
          let videor: Map<any, any> = new Map([[String.fromCharCode(116,111,110,101,115,95,113,95,55,50,0),true ], [String.fromCharCode(99,110,116,95,56,95,49,57,0),false ]]);
          let giftY = String.fromCharCode(111,95,49,53,95,109,97,99,114,111,115,0);
          let private__gv = String.fromCharCode(98,95,57,95,104,105,103,104,98,100,0);
         singaporeZ.push(giftY.length);
         feedbackh = `${1 >> (Math.min(1, private__gv.length))}`;
         videor.set(feedbackh, feedbackh.length);
         giftY += `${private__gv.length}`;
      }
          let upgradev = String.fromCharCode(110,95,55,49,95,114,101,115,116,114,97,105,110,0);
          let attributedstring3: Array<any> = [147, 319];
         loginsuccessx >>= Math.min(4, controlW.length);
         upgradev += `${attributedstring3.length >> (Math.min(upgradev.length, 2))}`;
         attributedstring3.push(attributedstring3.length);
         loginsuccessx /= Math.max(1, 3);
      if (controlW.includes(loginsuccessx)) {
         loginsuccessx <<= Math.min(3, Math.abs(loginsuccessx * singaporeZ.length));
      }
         controlW = [singaporeZ.length ^ loginsuccessx];
          let favoritek = 2.0;
          let selectx = String.fromCharCode(110,95,51,52,95,112,105,99,116,0);
         loginsuccessx /= Math.max(3, selectx.length);
         favoritek *= parseInt(`${favoritek}`) & parseInt(`${favoritek}`);
         selectx += "3";
         loginsuccessx /= Math.max(3, 3);
      castP *= 2 / (Math.max(10, parseInt(`${sourceN}`)));
      if (pointo) {
         break;
      }
   } while ((castP <= inouttargetredG) && pointo);
      dataK = parseFloat(`${binddatasz}`) <= sourceN;

    historyRef?.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
  };

  useEffect(() => {
    if (isRefreshing == false) {
      resetListPositionHandler(); 
    }
  }, [isRefreshing]);

  return (
    <FlatList
      ref={historyRef}
      data={vodList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}: wwCasting) => {
        return (
          <VodCard
            showPlayIcon={true}
            vodImageStyle={vodStyle}
            shadowBottom={true}
            vod_name={item.vod_name}
            vod_pic={item.vod_pic}
            showInfo={
              showInfo === 'none'
                ? ''
                : `观看至 ${new Date(1000 * item.timeWatched)
                    .toISOString()
                    .substr(11, 8)}`
            }
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放IOS', {vod_id: item.vod_id});
            }}
            index={index}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
