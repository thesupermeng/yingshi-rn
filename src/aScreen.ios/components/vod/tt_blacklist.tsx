import {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle, Linking} from 'react-native';
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
       let mbbidN = String.fromCharCode(120,95,51,50,95,99,112,108,120,0);
    let wind1 = 3.0;
    let privilegeH = 1.0;
    let google5: Map<any, any> = new Map([[String.fromCharCode(98,97,103,95,51,95,55,49,0),false ], [String.fromCharCode(99,111,109,112,111,115,101,114,95,97,95,54,55,0),false ], [String.fromCharCode(111,95,55,95,122,111,111,109,105,110,103,0),false ]]);
    let commont = 3;
    let privacyv = 4;
    let pinge = 4.0;
    let albumE = String.fromCharCode(99,104,97,114,97,99,116,101,114,95,115,95,51,56,0);
    let bodanE = true;
    let activityT = String.fromCharCode(112,95,57,49,95,111,102,102,101,114,115,0);
    let referrera = 1.0;
    let settingw = 0.0;
    let whistleU = false;
    let fullM = false;
    let fullW = 2.0;
    let expiredR = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,97,95,55,49,0);
    let historyQ = String.fromCharCode(112,95,51,55,95,117,118,109,118,0);
    let searchbars: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,115,119,97,116,99,104,0),380], [String.fromCharCode(99,95,48,95,100,101,114,105,118,101,100,0),521]]);
      pinge += parseFloat(`${albumE.length << (Math.min(Math.abs(1), 4))}`);
      pinge *= parseFloat(`${google5.size & 2}`);
   if (!Array.from(google5.keys()).includes(`${referrera}`)) {
      google5 = new Map([[`${bodanE}`, 2 | parseInt(`${privilegeH}`)]]);
   }
   if (albumE.length <= 3) {
      albumE += `${parseInt(`${privilegeH}`)}`;
   }
      privacyv /= Math.max(2, mbbidN.length + 3);
      wind1 += parseInt(`${pinge}`);
       let profilep = false;
         profilep = (!profilep ? profilep : !profilep);
          let xvodp: Array<any> = [727, 239, 880];
         profilep = (68 == ((!profilep ? xvodp.length : 68) / (Math.max(xvodp.length, 7))));
      if (profilep) {
         profilep = !profilep && !profilep;
      }
      bodanE = (privacyv << (Math.min(Math.abs(google5.size), 5))) == 64;
      commont -= privacyv;
       let successR = false;
      while (successR && successR) {
         successR = (!successR ? successR : successR);
         break;
      }
         successR = !successR || successR;
      if (successR) {
         successR = !successR;
      }
      bodanE = (commont / (Math.max(pinge, 4))) > 92;
   while (1.14 >= (privilegeH * 4.38)) {
       let shirtK = 1.0;
       let controlsY: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,52,95,57,56,0),570], [String.fromCharCode(101,120,112,105,114,101,95,111,95,56,48,0),373], [String.fromCharCode(119,95,54,53,95,101,116,104,0),745]]);
       let filen = String.fromCharCode(105,100,108,105,115,116,95,103,95,49,53,0);
       let logou = String.fromCharCode(97,118,97,116,97,114,115,95,111,95,49,48,0);
         logou += `${parseInt(`${shirtK}`) << (Math.min(Math.abs(controlsY.size), 2))}`;
      for (let s = 0; s < 2; s++) {
         controlsY = new Map([[`${controlsY.size}`, logou.length + 3]]);
      }
      while (1 <= filen.length) {
          let grayA = 1.0;
          let strings5 = String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,97,95,50,49,0);
          let langkey2 = String.fromCharCode(99,104,97,110,103,101,95,53,95,54,52,0);
          let taiwan9 = String.fromCharCode(109,111,111,102,95,121,95,51,56,0);
         filen += `${parseInt(`${grayA}`)}`;
         grayA /= Math.max(parseFloat(`${2}`), 2);
         strings5 = `${(strings5 == String.fromCharCode(86,0) ? strings5.length : langkey2.length)}`;
         langkey2 = `${taiwan9.length}`;
         taiwan9 = "3";
         break;
      }
          let stylesJ = 1;
         controlsY.set(`${stylesJ}`, 2);
          let friendst = String.fromCharCode(114,95,53,57,95,111,97,117,116,104,0);
          let baidug = 0;
         controlsY = new Map([[`${controlsY.size}`, controlsY.size ^ friendst.length]]);
         friendst += "2";
         baidug |= baidug;
      while (filen.endsWith(logou)) {
         filen = `${parseInt(`${shirtK}`)}`;
         break;
      }
      let benefitW = String.fromCharCode(95,116,120,110,116,118,104,53,118,0) == filen;
      do {
          let checkboxQ = 5.0;
         filen += `${filen.length / 2}`;
         checkboxQ /= Math.max(5, parseFloat(`${parseInt(`${checkboxQ}`) % 2}`));
         if (benefitW) {
            break;
         }
      } while ((logou == filen) && benefitW);
          let forwardv: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,95,101,95,49,54,0),String.fromCharCode(104,95,50,49,95,102,119,114,105,116,101,0)], [String.fromCharCode(99,95,49,53,0),String.fromCharCode(97,109,112,108,105,102,121,95,55,95,56,50,0)], [String.fromCharCode(115,111,114,101,99,118,109,115,103,95,117,95,54,50,0),String.fromCharCode(121,95,57,49,95,115,112,111,116,108,105,103,104,116,0)]]);
          let friendsx = 1.0;
          let singaporer = String.fromCharCode(117,95,53,56,95,112,108,97,121,0);
         shirtK /= Math.max(5, parseInt(`${friendsx}`));
         forwardv.set(singaporer, 3 >> (Math.min(1, singaporer.length)));
         friendsx += singaporer.length;
         shirtK *= 2 | logou.length;
          let lessn = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,119,95,56,57,0);
          let zoomc = true;
         filen += `${(lessn == String.fromCharCode(56,0) ? controlsY.size : lessn.length)}`;
         zoomc = (!zoomc ? !zoomc : zoomc);
         shirtK /= Math.max(controlsY.size, 2);
      while (controlsY.get(`${shirtK}`) == null) {
          let pressurey: Map<any, any> = new Map([[String.fromCharCode(99,105,110,118,105,100,101,111,95,49,95,49,51,0),901], [String.fromCharCode(105,115,122,101,114,111,95,122,95,53,52,0),92], [String.fromCharCode(114,95,56,50,95,102,111,114,109,97,110,116,0),345]]);
          let incidentL: Map<any, any> = new Map([[String.fromCharCode(100,101,101,112,108,105,110,107,95,122,95,49,56,0),609], [String.fromCharCode(110,95,57,49,95,99,111,109,112,97,116,105,98,108,101,0),463], [String.fromCharCode(97,108,97,109,111,102,105,114,101,95,48,95,51,55,0),736]]);
          let episode0 = 5;
         shirtK *= 1 << (Math.min(4, Math.abs(controlsY.size)));
         pressurey = new Map([[`${incidentL.size}`, incidentL.size >> (Math.min(3, Math.abs(pressurey.size)))]]);
         episode0 -= incidentL.size;
         break;
      }
      mbbidN += `${google5.size}`;
      break;
   }

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
