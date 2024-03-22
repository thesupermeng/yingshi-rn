import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {mayi_EmptyGradle} from '@type/mayi_green';
import VodCard from './mayi_pressure_footballfiledlayout';
import {useAppDispatch} from '@hooks/mayi_redirect';
import {playVod} from '@redux/actions/mayi_goallogo';
import {mayi_FileBrightness} from '@redux/reducers/mayi_temp_holder';
import {FlatList} from 'react-native-gesture-handler';
interface mayi_GoogleViews {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  vodList?: Array<mayi_FileBrightness>;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}

type mayi_Away = {
  list: Array<mayi_FileBrightness>;
};

type mayi_EventLibnms = {
  item: mayi_FileBrightness;
};
export default function VodHistoryList({
  vodStyle,
  horizontal = true,
  vodList = [],
  showInfo = 'none',
  isRefreshing = false,
}: mayi_GoogleViews) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const historyRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let profileh = 3;
    let iconclosewhitewithbgs: Array<any> = [String.fromCharCode(97,100,100,105,110,103,95,107,95,57,54,0), String.fromCharCode(109,111,118,101,112,97,103,101,95,102,95,55,50,0), String.fromCharCode(109,111,118,101,95,103,95,54,50,0)];
    let casting8 = 2.0;
    let package_iH: Array<any> = [812, 72];
    let footballtrophy3: Map<any, any> = new Map([[String.fromCharCode(110,111,109,105,110,97,108,95,100,95,53,48,0),832], [String.fromCharCode(120,95,53,53,95,116,117,112,108,101,115,0),884]]);
    let basketballtrophyP = String.fromCharCode(112,114,105,110,116,102,95,101,95,56,49,0);
    let logouserT = false;
    let google1 = String.fromCharCode(111,102,102,115,99,114,101,101,110,95,100,95,48,0);
    let calendara: Map<any, any> = new Map([[String.fromCharCode(104,119,97,99,99,101,108,115,95,48,95,53,54,0),874], [String.fromCharCode(119,95,53,55,95,110,117,109,115,0),952], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,53,95,54,54,0),879]]);
    let analyticsd = String.fromCharCode(110,111,116,104,101,108,100,95,99,95,52,0);
    let rightz = String.fromCharCode(99,95,52,48,95,116,104,114,101,97,100,0);
   for (let k = 0; k < 1; k++) {
      basketballtrophyP += `${profileh + 3}`;
   }
   let videocommony = package_iH.length <= 8379356;
   do {
      package_iH.push(3 & basketballtrophyP.length);
      if (videocommony) {
         break;
      }
   } while (((iconclosewhitewithbgs.length ^ 3) < 1) && videocommony);
       let iconarrowleftX: Array<any> = [951, 848];
       let icontransferclubp = String.fromCharCode(97,108,116,114,101,102,95,98,95,56,53,0);
       let greytick6 = String.fromCharCode(104,95,56,51,95,99,97,110,99,101,108,97,98,108,101,0);
      for (let t = 0; t < 2; t++) {
         iconarrowleftX.push(icontransferclubp.length);
      }
      while (5 > (greytick6.length % 1) && (iconarrowleftX.length % (Math.max(6, greytick6.length))) > 1) {
          let referrerH = 2;
          let modulesZ = 4.0;
         iconarrowleftX = [3];
         referrerH >>= Math.min(3, Math.abs(parseInt(`${modulesZ}`) << (Math.min(4, Math.abs(2)))));
         modulesZ /= Math.max(1, parseFloat(`${3}`));
         break;
      }
       let storek = String.fromCharCode(105,109,105,113,95,48,95,51,57,0);
         icontransferclubp = `${icontransferclubp.length}`;
      if (4 > (1 & icontransferclubp.length)) {
          let libbufferf: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,115,95,119,95,51,54,0),293], [String.fromCharCode(110,101,116,119,111,114,107,95,114,95,52,53,0),140], [String.fromCharCode(120,95,57,49,95,100,105,102,102,0),647]]);
          let settingn = String.fromCharCode(99,108,101,97,114,95,56,95,57,57,0);
         iconarrowleftX = [2];
         libbufferf = new Map([[`${libbufferf.size}`, libbufferf.size - 3]]);
         settingn = `${settingn.length >> (Math.min(5, Math.abs(libbufferf.size)))}`;
      }
         icontransferclubp = `${greytick6.length >> (Math.min(3, icontransferclubp.length))}`;
         iconarrowleftX.push(greytick6.length);
         iconarrowleftX = [1];
      while ((storek.length << (Math.min(5, iconarrowleftX.length))) <= 3 || 3 <= (storek.length << (Math.min(1, iconarrowleftX.length)))) {
         storek += `${icontransferclubp.length}`;
         break;
      }
      package_iH = [3 * parseInt(`${casting8}`)];
      iconclosewhitewithbgs.push(package_iH.length);
   for (let n = 0; n < 2; n++) {
      package_iH = [3 & footballtrophy3.size];
   }
   for (let o = 0; o < 1; o++) {
      logouserT = package_iH.length <= 5 && iconclosewhitewithbgs.length <= 5;
   }
      casting8 /= Math.max(parseFloat(`${package_iH.length}`), 1);

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
      renderItem={({item, index}: mayi_EventLibnms) => {
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
