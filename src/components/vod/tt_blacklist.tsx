import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {ttAppsOther} from '@type/tt_line_borderless';
import VodCard from './tt_count_stats';
import {useAppDispatch} from '@hooks/tt_spec_download';
import {playVod} from '@redux/actions/tt_activity';
import {ttExpired} from '@redux/reducers/tt_configure_injury';
import {FlatList} from 'react-native-gesture-handler';
interface ttSmall {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<ttExpired>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type ttRewind = {
  list: Array<ttExpired>;
};

type ttBing = {
  item: ttExpired;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: ttSmall) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let checkbox3 = 3.0;
    let configureG: Map<any, any> = new Map([[String.fromCharCode(97,115,104,105,110,103,95,97,95,57,0),855], [String.fromCharCode(100,95,56,55,95,109,112,101,103,97,117,100,105,111,0),882]]);
    let blacklistz: Array<any> = [String.fromCharCode(109,95,51,50,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0), String.fromCharCode(101,95,56,57,95,101,115,99,97,112,105,110,103,0), String.fromCharCode(99,111,100,101,99,112,97,114,95,114,95,49,48,48,0)];
    let incident9 = 2.0;
    let redirect2 = String.fromCharCode(116,114,97,107,95,100,95,54,50,0);
    let tickp = 0;
    let ajaxW = 3.0;
    let i_viewC: Map<any, any> = new Map([[String.fromCharCode(115,110,111,119,100,97,116,97,95,55,95,50,56,0),String.fromCharCode(118,95,52,54,95,109,111,100,110,112,102,0)], [String.fromCharCode(105,95,53,50,95,109,101,103,101,100,0),String.fromCharCode(110,95,50,52,95,97,114,109,118,116,101,0)], [String.fromCharCode(116,97,107,101,111,118,101,114,95,121,95,55,49,0),String.fromCharCode(118,95,50,51,95,104,97,100,97,109,97,114,100,120,0)]]);
    let searchd = String.fromCharCode(99,111,109,98,105,110,101,100,95,48,95,54,48,0);
    let incidentZ = String.fromCharCode(112,111,115,115,105,98,108,121,95,98,95,49,0);
    let humidityO = false;
   while ((4.35 / (Math.max(1, incident9))) == 3.76) {
      incident9 -= parseFloat(`${tickp}`);
      break;
   }
      tickp >>= Math.min(Math.abs(3), 1);
   if (5 >= (i_viewC.size % 1)) {
      i_viewC.set(`${i_viewC.size}`, 2);
   }
   for (let m = 0; m < 3; m++) {
       let reactnativejsg = true;
      for (let t = 0; t < 3; t++) {
         reactnativejsg = (!reactnativejsg ? !reactnativejsg : !reactnativejsg);
      }
       let belld = String.fromCharCode(114,95,49,54,95,101,110,99,105,112,104,101,114,0);
       let roomm = String.fromCharCode(99,95,50,48,95,99,111,110,100,0);
          let turnG = 3.0;
         belld = `${parseInt(`${turnG}`)}`;
      blacklistz.push(3 & blacklistz.length);
   }
   while (3 > (blacklistz.length << (Math.min(redirect2.length, 5)))) {
      blacklistz = [i_viewC.size + 2];
      break;
   }
      tickp /= Math.max(configureG.size, 4);

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
      renderItem={({item, index}: ttBing) => {
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
              navigation.navigate('播放', {vod_id: item.vod_id});
            }}
            index={index}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
