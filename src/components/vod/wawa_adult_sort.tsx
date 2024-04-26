import React, {useRef, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useAppDispatch} from '@hooks/wawa_root';
import {FlatList} from 'react-native-gesture-handler';
import {wawaPhone} from '../../Sports/types/wawa_klevin_iconwechat';
import VodSportCard from './wawa_copy_link';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';

interface wawaAwayShow {
  params?: any[];
  horizontal?: boolean;
  sportList?: Array<wawaPhone>;
  matchTypeID?: number;
  status?: number;
  isRefreshing?: boolean;
}

type wawaWeather = {
  item: wawaPhone;
  index: number;
};

export default function VodSportsList(
  {sportList = [], isRefreshing}: wawaAwayShow,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let countryX = String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,52,95,49,48,48,0);
    let assistI = 5.0;
    let notificationy = 0;
    let fastforwardQ = 1;
    let libffmpegkitU = false;
    let rightM: Array<any> = [888, 373, 976];
    let elements6 = true;
    let views3 = 3.0;
    let hejiG = String.fromCharCode(97,100,114,109,95,121,95,49,48,0);
    let reddownarrowg = true;
    let agreementM = String.fromCharCode(111,95,54,48,95,99,104,114,111,109,105,110,97,110,99,101,0);
      countryX += `${notificationy}`;
   if (!reddownarrowg) {
      reddownarrowg = fastforwardQ >= 77;
   }
   let librrc4 = notificationy >= 6622752;
   do {
      notificationy /= Math.max(4, ((libffmpegkitU ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${views3}`)), 2))));
      if (librrc4) {
         break;
      }
   } while (librrc4 && (notificationy <= assistI));
   while (3 < hejiG.length) {
      reddownarrowg = !reddownarrowg;
      break;
   }
      fastforwardQ ^= parseInt(`${assistI}`);
   if (5 < hejiG.length) {
      reddownarrowg = (((reddownarrowg ? 29 : countryX.length) >> (Math.min(countryX.length, 2))) <= 29);
   }
       let defaultteamE: Array<any> = [516, 359, 656];
      for (let z = 0; z < 1; z++) {
         defaultteamE.push(defaultteamE.length / 1);
      }
      while ((defaultteamE.length * defaultteamE.length) < 4 || 4 < (defaultteamE.length * defaultteamE.length)) {
         defaultteamE = [defaultteamE.length];
         break;
      }
          let defaultlogoZ = 1.0;
          let weatherW = String.fromCharCode(112,95,56,50,95,101,118,98,117,102,102,101,114,0);
          let preview2 = false;
         defaultteamE = [1];
         defaultlogoZ /= Math.max(3, parseInt(`${defaultlogoZ}`) / (Math.max(weatherW.length, 9)));
         weatherW += `${parseInt(`${defaultlogoZ}`) / 2}`;
         preview2 = !weatherW.startsWith(`${defaultlogoZ}`);
      countryX += `${parseInt(`${views3}`)}`;
      libffmpegkitU = rightM.length >= 90;
       let predictionR = String.fromCharCode(107,95,50,52,95,111,98,117,115,0);
       let chatR = String.fromCharCode(100,95,57,50,95,114,101,108,111,99,107,0);
      for (let l = 0; l < 2; l++) {
          let baiduads4: Map<any, any> = new Map([[String.fromCharCode(118,111,99,97,98,95,122,95,50,48,0),String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,95,48,95,50,0)], [String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,51,95,53,0),String.fromCharCode(118,95,55,54,95,117,112,108,111,97,100,105,110,103,0)]]);
         chatR = `${predictionR.length >> (Math.min(Math.abs(1), 5))}`;
         baiduads4.set(`${baiduads4.size}`, baiduads4.size);
      }
         predictionR = `${predictionR.length & 2}`;
      rightM = [rightM.length & 3];
      rightM.push(((reddownarrowg ? 2 : 2)));

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

    
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportClicksAnalytics();
    
  };

  const renderSportCard = useCallback(({item}: wawaWeather) => {
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
