import React, {useRef, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch} from '@hooks/yys_frame';
import {FlatList} from 'react-native-gesture-handler';
import {yys_List} from '../../Sports/types/yys_league_mounting';
import VodSportCard from './yys_more';
import yys_event_common from '../../../Umeng/yys_event_common';

interface yys_ConfigureUimanager {
  params?: any[];
  horizontal?: boolean;
  sportList?: Array<yys_List>;
  matchTypeID?: number;
  status?: number;
  isRefreshing?: boolean;
}

type yys_Orientation = {
  item: yys_List;
  index: number;
};

export default function VodSportsList(
  {sportList = [], isRefreshing}: yys_ConfigureUimanager,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let androidQ = 4;
    let inactive8 = String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,120,95,53,49,0);
    let configh = false;
    let libjsinspectorS = 2.0;
    let libavdevice5 = String.fromCharCode(106,95,54,52,95,109,97,112,112,105,110,103,0);
    let transferz: Array<any> = [643, 952, 506];
    let whitej = 4.0;
    let libzeus5 = false;
    let placementM = 3.0;
    let umengO = String.fromCharCode(111,112,116,105,109,117,109,95,49,95,53,49,0);
      androidQ /= Math.max(1 << (Math.min(5, transferz.length)), 2);
       let interstitiali: Array<any> = [406, 863, 552];
         interstitiali = [interstitiali.length ^ interstitiali.length];
      if (interstitiali.length >= interstitiali.length) {
          let becomeL = 2;
          let auto_r4 = String.fromCharCode(112,95,53,51,95,99,104,97,110,103,101,100,104,0);
          let long_amW = String.fromCharCode(99,114,111,110,111,115,95,98,95,49,55,0);
          let areaw: Map<any, any> = new Map([[String.fromCharCode(111,109,112,111,115,101,95,117,95,49,56,0),137], [String.fromCharCode(103,95,51,53,95,118,99,104,113,0),700]]);
          let grayd = 4.0;
         interstitiali = [(auto_r4 == String.fromCharCode(66,0) ? areaw.size : auto_r4.length)];
         becomeL -= 3 ^ parseInt(`${grayd}`);
         long_amW += `${long_amW.length}`;
         areaw = new Map([[`${grayd}`, (long_amW == String.fromCharCode(99,0) ? parseInt(`${grayd}`) : long_amW.length)]]);
      }
       let matches6 = String.fromCharCode(105,95,55,53,95,105,108,98,99,102,105,120,0);
       let statsX = String.fromCharCode(109,95,50,53,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0);
      libavdevice5 += `${parseInt(`${libjsinspectorS}`)}`;
   if (inactive8.startsWith(`${androidQ}`)) {
      inactive8 = `${(parseInt(`${whitej}`) * (configh ? 5 : 3))}`;
   }
   while (inactive8.length <= 1) {
      inactive8 = `${3 << (Math.min(Math.abs(parseInt(`${whitej}`)), 5))}`;
      break;
   }
   let libfolly6 = 5119061.0 <= whitej;
   do {
      whitej /= Math.max(3, parseFloat(`${parseInt(`${whitej}`) << (Math.min(Math.abs(1), 4))}`));
      if (libfolly6) {
         break;
      }
   } while ((3.7 > (libjsinspectorS - 4)) && libfolly6);
   if (!inactive8.endsWith(`${androidQ}`)) {
      inactive8 = `${parseInt(`${libjsinspectorS}`) + 1}`;
   }
      configh = inactive8.length <= 90;
   if (inactive8.endsWith(`${libzeus5}`)) {
      inactive8 += `${3 % (Math.max(2, parseInt(`${whitej}`)))}`;
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

  const matchClicked = (matchID: number) => {
    navigation.navigate('体育详情', {
      matchId: matchID === null ? undefined : matchID,
    });

    
    yys_event_common.sportClicksAnalytics();
    
  };

  const renderSportCard = useCallback(({item}: yys_Orientation) => {
    return (
      <VodSportCard
        match_details={item}
        onPress={() => matchClicked(item?.id)}
      />
    );
  }, []);

  return (
    <FlatList
      ref={liveRef}
      data={sportList}
      initialScrollIndex={0}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderSportCard}
      overScrollMode="never"
    />
  );
}

const styles = StyleSheet.create({});
