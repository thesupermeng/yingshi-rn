import { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { yysPenaltyshoot } from '@type';
import VodCard from './yys_private';
import { useAppDispatch } from '@hooks';
import { playVod } from '@redux';
import { yysAnalytics } from '@redux';
import { FlatList } from 'react-native-gesture-handler';
interface yysIconarrowrightorangeStation {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<yysAnalytics>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type yysRenew = {
  list: Array<yysAnalytics>;
};

type yysInternetAirbnbstarselected = {
  item: yysAnalytics;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: yysIconarrowrightorangeStation) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let morem: Array<any> = [String.fromCharCode(120,99,116,101,115,116,95,115,95,53,52,0), String.fromCharCode(106,95,55,53,95,118,97,114,105,97,116,105,111,110,0), String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,55,95,51,52,0)];
    let modal0 = String.fromCharCode(98,95,54,48,95,103,122,105,112,112,101,100,0);
    let castingE: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,100,98,105,115,0),String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,118,95,50,56,0)], [String.fromCharCode(118,100,98,101,95,106,95,50,54,0),String.fromCharCode(109,95,49,48,48,95,108,97,115,116,110,111,100,101,0)]]);
    let scoreL = 0.0;
    let neone = 1;
    let transfere: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,103,95,51,57,0),true ], [String.fromCharCode(112,95,52,55,95,115,101,112,97,114,97,116,111,114,115,0),false ], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,103,95,54,50,0),false ]]);
    let langkeys = String.fromCharCode(97,95,55,51,95,116,104,101,109,101,100,0);
    let arrowupD = 5.0;
   if (2 <= (parseInt(`${scoreL}`) * neone) || 1 <= (2 - neone)) {
      neone /= Math.max(castingE.size >> (Math.min(2, Math.abs(parseInt(`${scoreL}`)))), 3);
   }
      neone %= Math.max(castingE.size | 1, 4);
      neone >>= Math.min(2, Math.abs(transfere.size));
      castingE.set(`${scoreL}`, transfere.size | 2);
      transfere.set(`${scoreL}`, parseInt(`${scoreL}`));
      scoreL /= Math.max(transfere.size << (Math.min(3, Math.abs(neone))), 2);
   let nativev = 8934294 >= neone;
   do {
      neone /= Math.max(castingE.size, 1);
      if (nativev) {
         break;
      }
   } while ((1 < (transfere.size * 1) || 1 < (transfere.size * neone)) && nativev);

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
      keyExtractor={(item) => item.vod_id.toString()}
      renderItem={({ item, index }: yysInternetAirbnbstarselected) => {
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
              navigation.navigate('播放', { vod_id: item.vod_id });
            }}
            index={index}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
