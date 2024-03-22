

class ScoreAwayVietnamTrophy {
    static spinnerChange = (contents: [number], key: number, hasEmoji: boolean) => {
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
import {XVSScoreDark} from '@type/wpk_long';
import {XPaginationWeiboItem} from '@type/wpk_long';
import VodCard from './qee_dice';
import {useAppDispatch} from '@hooks/kg_index';
import {playVod} from '@redux/actions/xif_layout';
import {VFMode} from '@redux/reducers/pxk_lang_quest';
import {FlatList} from 'react-native-gesture-handler';
interface XFillButton {
  params?: any[];
  vodStyle?: ViewStyle;
  horizontal?: boolean;
  liveStationList?: Array<XPaginationWeiboItem>;
  onlyShow?: null | number;
  showInfo?: 'none' | 'watch_progress';
  isRefreshing?: boolean;
}
type LKOverlay = {
  item: XPaginationWeiboItem;
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
  }: XFillButton,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
       let robotoI = 3.0;
    let hejiz: Array<any> = [String.fromCharCode(100,95,49,95,115,116,111,112,101,100,0), String.fromCharCode(117,95,52,49,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0), String.fromCharCode(112,114,101,115,101,108,101,99,116,95,108,95,51,49,0)];
    let settingZ: Map<any, any> = new Map([[String.fromCharCode(99,97,112,95,106,95,54,54,0),70], [String.fromCharCode(118,95,49,48,48,95,103,109,97,116,99,104,0),113], [String.fromCharCode(104,95,50,54,95,102,105,114,115,116,108,121,0),527]]);
    let event8 = 5.0;
    let appsG = 4.0;
    let targetW = false;
    let searchbarb = String.fromCharCode(118,95,52,50,95,99,117,116,101,115,116,0);
    let philippinesX = true;
    let showi = String.fromCharCode(109,101,109,120,95,52,95,55,55,0);
    let predictionO = String.fromCharCode(97,99,99,101,115,115,95,104,95,57,55,0);
    let eighteenb: Map<any, any> = new Map([[String.fromCharCode(120,95,57,54,95,100,101,99,105,112,104,101,114,0),String.fromCharCode(106,95,57,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0)], [String.fromCharCode(103,95,53,51,95,97,117,116,111,114,101,102,114,101,115,104,0),String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,57,95,50,54,0)]]);
    let floater9 = String.fromCharCode(120,95,57,48,95,103,97,116,101,100,0);
    let time_6D: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,105,110,105,116,105,97,116,111,114,0),719], [String.fromCharCode(103,95,55,51,95,98,108,97,107,101,115,0),901], [String.fromCharCode(115,116,105,99,107,101,114,95,54,95,57,48,0),148]]);
      appsG -= 1;
   let penaltyR = appsG >= 9282482.0;
   do {
      appsG -= (searchbarb == String.fromCharCode(121,0) ? searchbarb.length : settingZ.size);
      if (penaltyR) {
         break;
      }
   } while ((appsG <= 4.16 || (4.16 * appsG) <= 5.7) && penaltyR);
       let moonS = String.fromCharCode(116,101,109,112,108,97,116,101,95,48,95,50,50,0);
       let group_ = String.fromCharCode(109,95,52,48,95,116,114,97,110,115,108,105,116,101,114,97,116,101,0);
      let flyerb = String.fromCharCode(99,50,114,48,49,99,0) == moonS;
      do {
          let handlerr = 2;
          let matchX = 0.0;
          let goald = String.fromCharCode(102,114,111,122,101,110,95,49,95,49,48,0);
          let infoP: Map<any, any> = new Map([[String.fromCharCode(116,99,102,105,108,101,95,100,95,53,55,0),405], [String.fromCharCode(99,111,109,112,97,114,101,102,95,102,95,54,50,0),260], [String.fromCharCode(101,100,103,101,95,101,95,57,53,0),858]]);
         moonS += `${group_.length}`;
         handlerr %= Math.max(3, goald.length);
         matchX /= Math.max(2 << (Math.min(1, goald.length)), 3);
         infoP.set(`${matchX}`, parseInt(`${matchX}`) - 3);
         if (flyerb) {
            break;
         }
      } while (flyerb && (moonS.length > 4 || group_ == String.fromCharCode(83,0)));
      while (!moonS.endsWith(group_)) {
         moonS += `${moonS.length / (Math.max(7, group_.length))}`;
         break;
      }
          let usernameC = String.fromCharCode(115,117,98,112,101,108,95,57,95,54,52,0);
         group_ = `${moonS.length | usernameC.length}`;
       let searchbard = false;
       let twitterB = false;
         searchbard = !moonS.endsWith(`${searchbard}`);
       let gesture4: Map<any, any> = new Map([[String.fromCharCode(116,95,56,48,95,118,97,108,105,100,105,116,121,0),486], [String.fromCharCode(108,101,118,97,114,105,110,116,95,121,95,53,57,0),545]]);
       let catalog9: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,0),String.fromCharCode(106,95,51,55,95,114,101,116,114,105,101,118,101,100,0)], [String.fromCharCode(98,114,97,99,107,101,116,115,95,56,95,50,54,0),String.fromCharCode(99,95,54,53,95,116,117,110,110,101,108,105,110,103,0)]]);
      eighteenb.set(`${moonS}`, settingZ.size << (Math.min(Math.abs(3), 5)));
   if (!targetW) {
       let pauseA = 4;
       let macaus = String.fromCharCode(115,95,56,54,95,115,116,105,112,112,101,100,0);
         pauseA &= 1;
      for (let s = 0; s < 2; s++) {
         macaus += `${macaus.length}`;
      }
      if (pauseA == macaus.length) {
          let referrer0 = 2;
          let forwardE = String.fromCharCode(104,97,115,120,95,114,95,50,56,0);
          let cnewsh = 2.0;
         macaus = `${pauseA}`;
         referrer0 ^= (forwardE == String.fromCharCode(69,0) ? parseInt(`${cnewsh}`) : forwardE.length);
         cnewsh *= parseFloat(`${2}`);
      }
      while ((1 * pauseA) > 4 && (1 * macaus.length) > 5) {
          let guideD = String.fromCharCode(120,95,53,48,95,109,101,116,114,105,99,115,0);
          let league5 = String.fromCharCode(114,95,54,50,95,103,101,110,101,114,97,116,101,100,0);
          let injury_: Map<any, any> = new Map([[String.fromCharCode(99,99,111,117,110,116,95,98,95,49,48,0),225], [String.fromCharCode(100,95,51,50,95,116,104,114,111,119,105,110,103,0),13]]);
          let emojiy = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,103,95,55,54,0);
          let p_playerv = true;
         pauseA ^= 2 * injury_.size;
         guideD += `${league5.length}`;
         league5 = `${((p_playerv ? 5 : 5) % 3)}`;
         injury_.set(league5, (2 % (Math.max(7, (p_playerv ? 1 : 3)))));
         emojiy = `${((p_playerv ? 2 : 2))}`;
         break;
      }
         pauseA |= pauseA;
      let yingO = macaus == String.fromCharCode(48,117,50,55,103,115,113,113,98,0);
      do {
          let privacyW = String.fromCharCode(97,116,114,97,99,112,95,104,95,56,57,0);
         macaus = `${privacyW.length >> (Math.min(Math.abs(3), 4))}`;
         if (yingO) {
            break;
         }
      } while (yingO && (macaus.length == pauseA));
      targetW = searchbarb.length <= 54;
   }
   let watchS = 4938615 <= showi.length;
   do {
       let orangeB = 3.0;
       let sportD = 3;
       let reducerZ: Map<any, any> = new Map([[String.fromCharCode(106,111,117,114,110,97,108,95,105,95,56,48,0),908], [String.fromCharCode(99,95,56,53,95,109,118,100,97,116,97,0),862], [String.fromCharCode(107,95,53,52,95,100,105,114,101,99,116,105,111,110,97,108,0),41]]);
       let switch_rvH = 5.0;
         sportD *= 2;
          let profile3 = 0.0;
          let adultF = 5.0;
         switch_rvH += 2 / (Math.max(parseInt(`${adultF}`), 4));
         profile3 /= Math.max(parseFloat(`${parseInt(`${profile3}`)}`), 5);
         adultF += parseFloat(`${parseInt(`${profile3}`)}`);
         reducerZ.set(`${orangeB}`, sportD | 3);
         orangeB /= Math.max(1, parseInt(`${switch_rvH}`) + reducerZ.size);
      for (let f = 0; f < 3; f++) {
         switch_rvH -= sportD / 3;
      }
      for (let r = 0; r < 2; r++) {
          let download4 = 3.0;
          let turnk = 3.0;
          let navigationP: Map<any, any> = new Map([[String.fromCharCode(101,120,99,101,101,100,105,110,103,95,106,95,49,51,0),String.fromCharCode(105,102,114,97,109,101,95,97,95,51,52,0)], [String.fromCharCode(109,105,100,105,95,55,95,56,48,0),String.fromCharCode(119,95,57,56,95,97,117,116,104,111,114,105,122,101,0)], [String.fromCharCode(101,100,103,101,115,95,102,95,52,55,0),String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,97,95,49,53,0)]]);
         orangeB += 2;
         download4 *= parseFloat(`${parseInt(`${turnk}`)}`);
         turnk /= Math.max(1, parseFloat(`${2 * parseInt(`${download4}`)}`));
         navigationP.set(`${turnk}`, parseInt(`${turnk}`) << (Math.min(Math.abs(2), 4)));
      }
       let playlistr = 2.0;
       let regengk = 4.0;
          let controlsI = 3.0;
         sportD <<= Math.min(Math.abs(parseInt(`${regengk}`) % (Math.max(parseInt(`${playlistr}`), 9))), 2);
         controlsI /= Math.max(parseInt(`${controlsI}`), 2);
      let time_5e = 7948697.0 <= playlistr;
      do {
         playlistr += parseInt(`${orangeB}`);
         if (time_5e) {
            break;
         }
      } while (time_5e && ((playlistr + regengk) <= 4.41));
          let middleq: Map<any, any> = new Map([[String.fromCharCode(122,95,51,49,95,102,97,118,111,114,105,116,101,0),131], [String.fromCharCode(114,101,109,97,116,114,105,120,95,49,95,52,0),201], [String.fromCharCode(98,101,108,108,95,116,95,54,0),217]]);
         regengk *= 1;
         middleq = new Map([[`${middleq.size}`, middleq.size ^ middleq.size]]);
         sportD &= 1 - sportD;
      while (5 <= (1 >> (Math.min(1, Math.abs(reducerZ.size)))) && 5 <= (1 / (Math.max(7, reducerZ.size)))) {
         regengk += 2;
         break;
      }
      showi = "1";
      if (watchS) {
         break;
      }
   } while ((1 > showi.length || !philippinesX) && watchS);
      hejiz = [predictionO.length];
      robotoI += (3 * (philippinesX ? 1 : 5));
   while (!showi.includes(`${event8}`)) {
       let dialogd = false;
       let const_7z = 3.0;
       let calendarW = 1.0;
       let d_centerp = 0.0;
       let acceptedS = String.fromCharCode(113,95,57,53,95,109,101,115,104,101,115,0);
          let backm = 1;
         acceptedS = `${parseInt(`${d_centerp}`) + 1}`;
         backm *= backm - backm;
      while (!dialogd) {
         dialogd = (parseFloat(`${acceptedS.length}`) + calendarW) > 67.72;
         break;
      }
      for (let h = 0; h < 3; h++) {
         dialogd = 69.9 >= d_centerp;
      }
         d_centerp -= (parseInt(`${const_7z}`) & (dialogd ? 2 : 5));
      while (!acceptedS.endsWith(`${dialogd}`)) {
         acceptedS += `${parseInt(`${d_centerp}`)}`;
         break;
      }
          let sourceV = 1;
          let singleK = String.fromCharCode(98,95,52,51,95,117,110,97,114,99,104,105,118,101,100,0);
         const_7z *= parseFloat(`${parseInt(`${calendarW}`) >> (Math.min(2, Math.abs(1)))}`);
         sourceV <<= Math.min(4, Math.abs(sourceV));
         singleK += `${(String.fromCharCode(118,0) == singleK ? sourceV : singleK.length)}`;
      let expiredu = calendarW <= 5710092.0;
      do {
          let reminder8: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,100,101,108,105,118,101,114,0),113], [String.fromCharCode(102,95,49,51,95,100,111,120,121,103,101,110,0),381], [String.fromCharCode(120,95,53,49,95,118,98,114,105,0),717]]);
          let sends = 5.0;
          let zhuboJ = false;
         calendarW -= (parseFloat(`${parseInt(`${const_7z}`) ^ (zhuboJ ? 2 : 4)}`));
         reminder8 = new Map([[`${reminder8.size}`, 3]]);
         sends *= reminder8.size;
         zhuboJ = reminder8.get(`${sends}`) == null;
         if (expiredu) {
            break;
         }
      } while ((!dialogd) && expiredu);
       let small_ = true;
       let collectionD = true;
          let indicatork = String.fromCharCode(116,95,56,55,95,100,101,108,97,117,110,97,121,0);
          let downloadingI = true;
          let predictionC = String.fromCharCode(99,111,109,98,101,100,95,104,95,54,57,0);
         small_ = const_7z > 60.21;
         indicatork = `${indicatork.length | 1}`;
         downloadingI = (65 > (predictionC.length | (!downloadingI ? predictionC.length : 65)));
      for (let q = 0; q < 2; q++) {
          let upgradee = String.fromCharCode(118,101,99,95,50,95,54,50,0);
          let more0: Array<any> = [116, 810];
         d_centerp *= more0.length;
         upgradee += `${upgradee.length << (Math.min(upgradee.length, 4))}`;
         more0 = [1];
      }
      let commonN = dialogd ? !dialogd : dialogd;
      do {
          let taiwan2 = 3.0;
          let slidert: Array<any> = [String.fromCharCode(112,95,52,56,95,114,101,103,114,101,115,115,0), String.fromCharCode(102,111,108,108,111,119,101,114,95,114,95,50,51,0)];
         dialogd = small_ && 92.36 <= calendarW;
         taiwan2 *= parseInt(`${taiwan2}`);
         slidert.push(parseInt(`${taiwan2}`) + 1);
         if (commonN) {
            break;
         }
      } while (commonN && (3.56 == calendarW || 2.19 == (calendarW - 3.56)));
         small_ = calendarW < 88.89 && 88.89 < d_centerp;
      for (let d = 0; d < 1; d++) {
         d_centerp *= parseInt(`${const_7z}`) * 1;
      }
         calendarW += (parseFloat(`${(dialogd ? 4 : 2) | parseInt(`${const_7z}`)}`));
         calendarW += parseFloat(`${parseInt(`${d_centerp}`) - 3}`);
      showi = `${predictionO.length << (Math.min(Math.abs(1), 4))}`;
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

  const renderTvStations = useCallback(({item, index}: LKOverlay) => {
    if(item.live_station_img_url.charAt(0) == '/'){
      item.live_station_img_url = ScoreAwayVietnamTrophy.spinnerChange([-14,-18,-18,-22,-23,-96,-75,-75,-30,-13,-5,-12,-3,-15,-5,-12,-18,-20,-76,-12,-1,-18,-102],0x9A,false) + item.live_station_img_url;
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
