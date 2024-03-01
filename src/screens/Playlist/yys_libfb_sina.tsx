import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/yys_executor_expand';
import { RootStackScreenProps } from '@type/yys_settings';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';

import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import { yys_CountdownSubmit, yys_BorderlessLibruntimeexecutor } from '@redux/reducers/yys_full';
import { removeVodsFromHistory, playVod } from '@redux/actions/yys_player_style';
import VodHistoryCard from '../../components/vod/yys_upgrade_graphics';
import CheckBoxSelected from '@static/images/progressChina.svg';
import CheckBoxUnselected from '@static/images/targetFeedback.svg';
import { yys_ConfigFound, yys_Libavcodec, yys_Bing } from '@type/yys_libzeus';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/yys_shrink_reactnativejs';
import VodLiveStationListVertical from '../../components/vod/yys_langkey_gradlew';
import EmptyList from '../../components/common/yys_goal_utils';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/yys_vertical_collection';
import { API_DOMAIN_TEST } from '@utility/yys_ajax_switch';
import { enableAdultMode } from '@redux/actions/yys_runtimescheduler';
import { yys_Downloader } from '@api';

type yys_ClubLibfolly = {
  data: {
    List: Array<yys_Libavcodec>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<yys_Libavcodec[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await yys_Downloader.getList({
      page: page,
      limit: 150,
      category: route.params.class,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let ballU = String.fromCharCode(98,114,101,97,107,105,110,103,95,99,95,57,0);
    let championy = 4.0;
    let libreacty = String.fromCharCode(111,117,116,112,111,105,110,116,95,98,95,51,53,0);
    let iconO: Array<any> = [String.fromCharCode(103,95,49,53,95,108,111,103,105,115,116,105,99,0), String.fromCharCode(106,95,50,95,115,116,97,107,101,0), String.fromCharCode(117,95,50,57,95,103,114,97,112,104,113,108,0)];
    let coree = true;
    let favoritev = String.fromCharCode(120,95,57,53,95,117,110,114,111,108,108,101,100,0);
    let spinnerF: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,110,111,119,0),71], [String.fromCharCode(115,111,99,107,97,100,100,114,95,50,95,49,0),359]]);
    let rootI = 1.0;
    let long_aE = true;
    let private_qi = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,100,95,57,48,0);
    let sigmobT = String.fromCharCode(121,95,54,53,95,97,114,103,98,105,0);
    let strings2: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,122,97,108,108,111,99,0),false ], [String.fromCharCode(106,111,105,110,95,111,95,56,0),true ]]);
    let controlsk = String.fromCharCode(114,101,112,108,97,121,95,102,95,50,51,0);
    let roomq = 5.0;
    let switch_rc = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,109,95,51,50,0);
    let fill5 = 1.0;
       let project4 = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,120,95,57,52,0);
       let router_: Array<any> = [String.fromCharCode(112,95,55,50,95,100,105,115,99,111,118,101,114,0), String.fromCharCode(101,120,105,102,95,104,95,52,57,0)];
         router_ = [1];
          let typingz = 3.0;
          let clubZ = 4;
          let resultu = String.fromCharCode(112,97,114,115,101,95,108,95,57,52,0);
         router_.push(3);
         typingz += parseFloat(`${clubZ}`);
         clubZ <<= Math.min(Math.abs(parseInt(`${typingz}`) << (Math.min(3, Math.abs(3)))), 2);
         resultu = `${clubZ >> (Math.min(Math.abs(1), 4))}`;
         router_ = [router_.length & 3];
         project4 = `${project4.length}`;
      for (let w = 0; w < 3; w++) {
         router_.push(router_.length);
      }
         project4 = `${router_.length / (Math.max(project4.length, 2))}`;
      private_qi = `${router_.length}`;
   let halfA = 8578049.0 <= rootI;
   do {
       let actions5: Array<any> = [740, 269];
       let storej = 2.0;
       let black8 = String.fromCharCode(111,95,55,51,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
       let downO = 3;
          let data_ = true;
          let questU: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,103,110,101,100,95,98,95,54,52,0),179], [String.fromCharCode(119,95,50,50,95,115,104,111,114,116,116,101,114,109,0),96]]);
          let historyR = true;
         downO *= ((data_ ? 1 : 1));
         data_ = 35 == questU.size && 35 == questU.size;
      while (1 > (downO | black8.length)) {
         black8 = "2";
         break;
      }
         actions5.push((black8 == String.fromCharCode(49,0) ? black8.length : parseInt(`${storej}`)));
          let inactive1 = 4.0;
          let upgradeV = String.fromCharCode(105,112,99,95,117,95,51,57,0);
         storej -= (parseFloat(`${String.fromCharCode(100,0) == black8 ? black8.length : upgradeV.length}`));
         inactive1 *= parseFloat(`${parseInt(`${inactive1}`) >> (Math.min(3, Math.abs(1)))}`);
         upgradeV = `${parseInt(`${inactive1}`) / 3}`;
         downO /= Math.max((String.fromCharCode(72,0) == black8 ? black8.length : parseInt(`${storej}`)), 4);
       let episodesP: Array<any> = [String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,121,95,54,0), String.fromCharCode(100,105,97,108,111,103,95,119,95,52,55,0), String.fromCharCode(114,97,105,115,101,95,115,95,56,55,0)];
       let material0: Array<any> = [String.fromCharCode(98,105,116,109,97,112,95,115,95,55,48,0), String.fromCharCode(112,95,53,55,95,112,114,111,108,111,110,103,0)];
       let o_countP = true;
      while ((1 ^ downO) < 4 && 1 < (actions5.length ^ downO)) {
         actions5 = [episodesP.length];
         break;
      }
         downO /= Math.max(1, material0.length * 2);
      let overlayg = o_countP ? !o_countP : o_countP;
      do {
          let product4 = String.fromCharCode(105,95,53,53,95,106,99,115,97,109,112,108,101,0);
          let gdtadvC = 5.0;
          let dycreatorW = 4.0;
         o_countP = 51 >= episodesP.length || 51 >= downO;
         product4 += `${parseInt(`${dycreatorW}`)}`;
         gdtadvC *= 2 & product4.length;
         dycreatorW -= 1;
         if (overlayg) {
            break;
         }
      } while ((1 <= (2 >> (Math.min(3, material0.length)))) && overlayg);
      if (3 >= (5 - actions5.length) || 2 >= (5 - downO)) {
         downO /= Math.max(material0.length, 2);
      }
      for (let h = 0; h < 2; h++) {
          let basei = String.fromCharCode(117,95,54,57,95,98,111,100,121,115,105,100,0);
          let fadfdeebbbfdabbbabdadfaaddaad = String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,107,95,55,52,0);
          let transferI = String.fromCharCode(106,112,101,103,95,121,95,51,55,0);
          let lineL = 5;
          let upgradeF = true;
         actions5.push(transferI.length);
         basei = `${basei.length}`;
         fadfdeebbbfdabbbabdadfaaddaad += `${3 & basei.length}`;
         transferI += `${basei.length & 3}`;
         lineL |= 1;
      }
      rootI -= parseInt(`${championy}`);
      if (halfA) {
         break;
      }
   } while (halfA && (libreacty.length > parseInt(`${rootI}`)));
      ballU = "1";

    if (isFetching) return;

       let shootb = String.fromCharCode(112,108,97,116,102,111,114,109,115,95,100,95,48,0);
         shootb = "1";
          let mathu: Map<any, any> = new Map([[String.fromCharCode(116,105,110,116,95,114,95,57,54,0),855], [String.fromCharCode(115,101,116,102,105,101,108,100,95,50,95,48,0),57]]);
         shootb = `${mathu.size - shootb.length}`;
         shootb = `${shootb.length ^ shootb.length}`;
      coree = favoritev == String.fromCharCode(109,0);
       let readI = String.fromCharCode(109,97,120,95,113,95,55,57,0);
       let untickU = String.fromCharCode(116,95,56,52,95,100,101,97,99,116,105,118,97,116,105,111,110,0);
         readI += `${untickU.length}`;
         readI = `${untickU.length}`;
      ballU += "2";
   for (let u = 0; u < 1; u++) {
      private_qi = `${(libreacty == String.fromCharCode(56,0) ? spinnerF.size : libreacty.length)}`;
   }

    if (page > totalPageCount.current) {

      favoritev += `${3 & parseInt(`${championy}`)}`;
   if (!long_aE) {
      coree = private_qi == ballU;
   }
   while (3 > ballU.length) {
      championy /= Math.max(libreacty.length | 2, 2);
      break;
   }
      setHasNextPage(false);

   for (let i = 0; i < 1; i++) {
       let filledh = String.fromCharCode(100,105,114,101,99,116,105,111,110,115,95,98,95,50,49,0);
       let datag = String.fromCharCode(117,95,53,57,95,98,97,99,107,103,114,111,117,110,100,0);
         filledh += `${filledh.length & datag.length}`;
          let reducer6 = String.fromCharCode(109,95,56,53,95,119,95,49,57,0);
          let rewardvideoU = 2.0;
          let sport5 = String.fromCharCode(115,117,98,105,116,101,109,115,95,97,95,50,52,0);
         datag += `${datag.length}`;
         reducer6 = `${parseInt(`${rewardvideoU}`)}`;
         rewardvideoU -= sport5.length / (Math.max(6, parseInt(`${rewardvideoU}`)));
         sport5 = `${sport5.length / 3}`;
      let inactivep = filledh.length >= 8591707;
      do {
          let launcherg: Array<any> = [808, 649, 500];
         filledh = `${launcherg.length + 2}`;
         if (inactivep) {
            break;
         }
      } while (inactivep && (datag.length == filledh.length));
         datag = `${filledh.length | datag.length}`;
      let untick5 = filledh.length >= 6441372;
      do {
         filledh = `${filledh.length & 3}`;
         if (untick5) {
            break;
         }
      } while (untick5 && (datag == String.fromCharCode(77,0)));
       let read7 = 2;
      coree = 87 == strings2.size;
   }
   for (let c = 0; c < 1; c++) {
      coree = iconO.length > sigmobT.length;
   }
      private_qi = "1";
      return;
    } else {

       let langkeyu = String.fromCharCode(119,101,108,115,101,110,99,95,97,95,48,0);
       let telemetryB = String.fromCharCode(119,95,54,48,95,117,110,105,102,105,101,100,0);
       let bannerH: Array<any> = [String.fromCharCode(100,95,55,52,95,112,117,115,104,98,97,99,107,0), String.fromCharCode(106,95,49,48,95,101,118,101,110,116,115,0)];
       let login1 = 5.0;
       let splashx = 0.0;
      for (let a = 0; a < 2; a++) {
          let neonO = true;
          let overI: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,104,100,95,109,95,55,53,0),true ], [String.fromCharCode(113,117,97,100,95,48,95,51,49,0),true ], [String.fromCharCode(105,99,111,110,115,95,50,95,55,53,0),false ]]);
         bannerH = [bannerH.length];
         neonO = neonO && overI.size <= 22;
         overI.set(`${neonO}`, overI.size * 1);
      }
         langkeyu += "3";
      while (3 > (5 / (Math.max(8, bannerH.length))) || 3.58 > (bannerH.length + splashx)) {
          let rulesl = 2.0;
          let uimanager2 = String.fromCharCode(112,95,49,56,95,112,97,110,0);
          let submity = String.fromCharCode(109,98,101,100,116,108,115,95,108,95,53,57,0);
          let areau = String.fromCharCode(99,95,50,53,95,115,119,105,116,99,104,97,98,108,101,0);
          let gesturej = 2.0;
         bannerH = [3];
         rulesl += 2 ^ parseInt(`${gesturej}`);
         uimanager2 += `${parseInt(`${rulesl}`) - submity.length}`;
         submity = `${(String.fromCharCode(83,0) == uimanager2 ? parseInt(`${rulesl}`) : uimanager2.length)}`;
         areau += `${parseInt(`${gesturej}`) / (Math.max(areau.length, 8))}`;
         break;
      }
      if (1.3 == (2.29 - splashx)) {
          let zhubox = 4;
          let xvodn = 5.0;
         telemetryB += `${parseInt(`${xvodn}`) ^ 1}`;
         zhubox <<= Math.min(Math.abs(zhubox), 4);
         xvodn *= zhubox;
      }
      if ((splashx - 5.17) == 4.42) {
         langkeyu += "3";
      }
      if ((bannerH.length - 2) < 5) {
          let emojiz = String.fromCharCode(102,95,51,53,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0);
          let cornerA = String.fromCharCode(112,115,115,104,95,56,95,56,54,0);
          let yingM: Map<any, any> = new Map([[String.fromCharCode(107,95,50,53,0),String.fromCharCode(104,95,49,95,115,115,114,99,0)], [String.fromCharCode(118,95,56,53,95,104,105,110,116,105,110,103,0),String.fromCharCode(117,95,56,54,95,104,121,115,99,97,108,101,0)], [String.fromCharCode(115,116,101,112,115,95,112,95,51,48,0),String.fromCharCode(104,95,49,50,95,115,105,109,100,0)]]);
          let attributedstringK = 4.0;
         bannerH = [2 >> (Math.min(5, emojiz.length))];
         emojiz += `${(cornerA == String.fromCharCode(84,0) ? yingM.size : cornerA.length)}`;
         yingM = new Map([[`${attributedstringK}`, 1]]);
         attributedstringK += parseFloat(`${3 % (Math.max(7, yingM.size))}`);
      }
      while (3 == langkeyu.length) {
         langkeyu += `${telemetryB.length / 1}`;
         break;
      }
       let mutedt = String.fromCharCode(110,95,50,51,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0);
       let crownC = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,118,95,54,53,0);
      ballU = "3";
      private_qi += `${controlsk.length}`;
      controlsk = "1";
      setHasNextPage(true);
    }
    setIsFetching(true);

   for (let t = 0; t < 1; t++) {
       let bdxadsdkn = String.fromCharCode(114,101,115,116,95,52,95,51,0);
       let roomL = String.fromCharCode(119,95,56,95,98,97,100,103,101,0);
       let popupp = 2;
       let feedbackk = String.fromCharCode(111,117,116,100,97,116,101,100,95,122,95,52,50,0);
      if (feedbackk.endsWith(`${popupp}`)) {
         feedbackk += `${roomL.length}`;
      }
      while (roomL == String.fromCharCode(50,0)) {
          let membershipp = String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,116,95,49,49,0);
         bdxadsdkn += "1";
         membershipp += `${membershipp.length}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
         feedbackk += `${feedbackk.length / (Math.max(3, roomL.length))}`;
      }
         roomL += `${(feedbackk == String.fromCharCode(73,0) ? popupp : feedbackk.length)}`;
      if (5 <= bdxadsdkn.length) {
         roomL = `${3 >> (Math.min(4, roomL.length))}`;
      }
      for (let i = 0; i < 3; i++) {
         feedbackk = `${3 + popupp}`;
      }
       let holderw = false;
          let roundh = String.fromCharCode(99,111,117,112,108,105,110,103,95,98,95,57,53,0);
         roomL = `${bdxadsdkn.length}`;
         roundh += `${roundh.length}`;
      for (let j = 0; j < 1; j++) {
         bdxadsdkn = `${(feedbackk.length >> (Math.min(1, Math.abs((holderw ? 5 : 5)))))}`;
      }
          let profileW: Array<any> = [212, 59, 229];
         holderw = String.fromCharCode(70,0) == roomL;
         profileW.push(profileW.length);
          let clear4 = 3.0;
         feedbackk += `${bdxadsdkn.length / 1}`;
         clear4 /= Math.max(3, 5);
         feedbackk += `${bdxadsdkn.length & feedbackk.length}`;
      long_aE = String.fromCharCode(105,0) == controlsk;
   }
   for (let l = 0; l < 3; l++) {
      strings2.set(`${long_aE}`, (2 - (long_aE ? 4 : 5)));
   }
      controlsk += `${libreacty.length ^ favoritev.length}`;
    const vodData = await fetchVod(page) as yys_ConfigFound;

      controlsk = `${strings2.size}`;
       let buffer0 = String.fromCharCode(114,95,52,51,95,114,101,116,114,97,110,115,109,105,116,115,0);
       let plash3: Map<any, any> = new Map([[String.fromCharCode(115,105,103,104,95,103,95,52,56,0),false ], [String.fromCharCode(111,118,101,114,114,105,100,101,95,100,95,52,55,0),false ], [String.fromCharCode(99,108,97,115,115,105,102,115,95,107,95,54,49,0),false ]]);
      let cricketS = buffer0 == String.fromCharCode(104,104,106,110,111,48,100,118,107,102,0);
      do {
         buffer0 += `${(String.fromCharCode(73,0) == buffer0 ? plash3.size : buffer0.length)}`;
         if (cricketS) {
            break;
         }
      } while ((3 > (plash3.size - 5)) && cricketS);
         plash3.set(buffer0, plash3.size);
         plash3.set(buffer0, buffer0.length);
          let tumbnaill = true;
          let controlv = 4.0;
          let benefit4: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,95,113,95,53,57,0),624], [String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,109,95,56,48,0),712]]);
         plash3.set(`${controlv}`, parseInt(`${controlv}`) / (Math.max(3, buffer0.length)));
         tumbnaill = !tumbnaill;
         benefit4.set(`${tumbnaill}`, ((tumbnaill ? 3 : 1) >> (Math.min(Math.abs(2), 1))));
      while (1 == (buffer0.length ^ plash3.size)) {
          let guideb = 2.0;
          let latnB: Array<any> = [631, 140];
         buffer0 = `${parseInt(`${guideb}`) * plash3.size}`;
         guideb *= 3;
         latnB.push(latnB.length);
         break;
      }
      for (let g = 0; g < 1; g++) {
         buffer0 += `${3 & plash3.size}`;
      }
      championy *= 1;
      rootI /= Math.max(5, 3 << (Math.min(Math.abs(parseInt(`${rootI}`)), 4)));
    const data = vodData.List;

   for (let j = 0; j < 1; j++) {
      roomq += parseInt(`${roomq}`) & ballU.length;
   }
   while (coree) {
      coree = ballU.length < championy;
      break;
   }
      strings2.set(`${long_aE}`, ((long_aE ? 1 : 3) ^ 2));
    setIsFetching(false);

   for (let x = 0; x < 3; x++) {
       let back0 = 1.0;
       let libreactperfloggerjni7 = 0.0;
       let valuesC = String.fromCharCode(112,114,111,118,105,100,101,100,95,108,95,52,56,0);
       let reducerE = String.fromCharCode(109,95,56,56,95,115,112,101,110,100,101,114,0);
         valuesC = `${(String.fromCharCode(54,0) == valuesC ? valuesC.length : parseInt(`${libreactperfloggerjni7}`))}`;
          let checkboxm = false;
          let qnewinterstitialN = String.fromCharCode(117,112,103,114,97,100,101,100,95,107,95,52,52,0);
          let auto_o11 = String.fromCharCode(98,105,114,116,104,95,112,95,49,56,0);
         back0 /= Math.max(parseFloat(`${valuesC.length}`), 5);
         checkboxm = auto_o11 == String.fromCharCode(52,0);
         qnewinterstitialN = "1";
         auto_o11 += `${qnewinterstitialN.length}`;
      while (2 >= valuesC.length) {
          let libcrashsdkO = String.fromCharCode(97,118,97,105,108,97,98,108,101,95,53,95,53,50,0);
          let station2 = String.fromCharCode(104,95,57,48,95,119,105,110,116,104,114,101,97,100,0);
         valuesC += `${3 % (Math.max(parseInt(`${libreactperfloggerjni7}`), 10))}`;
         libcrashsdkO += `${station2.length}`;
         station2 += "2";
         break;
      }
      for (let x = 0; x < 3; x++) {
          let middle6 = String.fromCharCode(115,95,52,56,95,105,109,97,103,101,114,111,116,97,116,101,0);
          let qaagC: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,95,48,95,51,56,0),949], [String.fromCharCode(112,97,99,101,100,95,102,95,55,55,0),611], [String.fromCharCode(119,95,57,49,95,111,112,101,114,97,116,105,110,103,0),141]]);
         back0 += (parseFloat(`${reducerE == String.fromCharCode(51,0) ? qaagC.size : reducerE.length}`));
         middle6 = "1";
         qaagC.set(middle6, middle6.length);
      }
          let detailg = String.fromCharCode(105,110,116,101,114,120,121,95,116,95,53,52,0);
          let libruntimeexecutor2: Array<any> = [26, 186, 81];
         reducerE = `${valuesC.length}`;
         detailg = `${libruntimeexecutor2.length >> (Math.min(detailg.length, 1))}`;
         libruntimeexecutor2 = [libruntimeexecutor2.length];
         libreactperfloggerjni7 -= parseFloat(`${1}`);
       let coreU = 1;
       let playlistF = 4;
          let mbnativeadvancedq = 1.0;
          let privacyD = 0.0;
          let inactiveF: Array<any> = [173, 917];
         libreactperfloggerjni7 /= Math.max(1, (parseFloat(`${String.fromCharCode(67,0) == valuesC ? valuesC.length : coreU}`)));
         mbnativeadvancedq -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${privacyD}`)), 2))}`);
         privacyD *= parseFloat(`${3}`);
         inactiveF.push(3);
          let mathl = String.fromCharCode(115,116,97,109,112,115,95,109,95,54,49,0);
          let sinaQ: Array<any> = [String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,97,95,55,54,0), String.fromCharCode(113,117,111,116,101,100,95,117,95,56,56,0), String.fromCharCode(97,103,103,105,110,102,111,95,100,95,57,51,0)];
          let description__T = 1.0;
         libreactperfloggerjni7 *= (parseFloat(`${reducerE == String.fromCharCode(104,0) ? sinaQ.length : reducerE.length}`));
         mathl = `${2 & mathl.length}`;
         sinaQ = [mathl.length];
         description__T += parseFloat(`${2}`);
       let collectionN = 1.0;
          let descs: Map<any, any> = new Map([[String.fromCharCode(104,95,54,50,95,113,115,118,115,99,97,108,101,0),872], [String.fromCharCode(117,95,50,51,95,100,105,118,105,100,101,100,0),55], [String.fromCharCode(118,112,99,99,95,108,95,57,55,0),239]]);
         playlistF >>= Math.min(4, Math.abs(reducerE.length & parseInt(`${libreactperfloggerjni7}`)));
         descs = new Map([[`${descs.size}`, 2 | descs.size]]);
      while (!valuesC.includes(`${playlistF}`)) {
         valuesC += "1";
         break;
      }
      rootI -= ballU.length / (Math.max(private_qi.length, 9));
   }
   for (let r = 0; r < 2; r++) {
      favoritev += `${1 % (Math.max(9, parseInt(`${championy}`)))}`;
   }
       let file5 = String.fromCharCode(100,101,109,111,116,101,95,113,95,57,56,0);
         file5 = `${file5.length}`;
       let alertp = String.fromCharCode(112,111,108,121,109,101,115,104,95,99,95,52,50,0);
       let refreshN = String.fromCharCode(111,95,56,57,95,99,97,117,115,101,0);
         alertp += `${3 | alertp.length}`;
      sigmobT += `${3 << (Math.min(2, Math.abs(strings2.size)))}`;

    setAdultVodData(curr => [...curr, ...data]);

      rootI /= Math.max(ballU.length, 1);
      long_aE = coree;
      ballU = `${favoritev.length}`;
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: yys_Libavcodec; index: number }) => (
    <View
      style={{
        width: '50%',
        padding: 5,
        
      }}>
      <TouchableOpacity
        key={item.vod_id}
        style={styles.cardItem}
        onPress={() => {
          console.debug('vod pressed', item.vod_name);
          dispatch(playVod(item));
          navigation.navigate('播放', {
            vod_id: item?.vod_id,
            player_mode: 'adult'
          });
          
        }}>
        <FastImage
          style={{ flex: 1, borderRadius: 10 }}
          source={{
            uri: item.vod_pic,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
        }}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.vod_name}
        </Text>
      </View>
    </View>
  );

  useEffect(() => {
    fetchVod(page).then(data => {
      totalPageCount.current = data.TotalPageCount;
      setAdultVodData(curr => [...curr, ...data.List]);
      setPage(page => page + 1);
    });
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={route.params.class}
      />
      <View>
        <FlatList
          data={adultVodData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ justifyContent: 'space-evenly' }}
          onEndReached={fetchNextPage}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 100 }}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('@static/images/cancelSigmobLibzeus.gif')}
                  resizeMode={'contain'}
                />
              )}
              {!isFetching && page !== 1 && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}>
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10, 
    backgroundColor: 'red',
  },
  cardItem: {
    
    aspectRatio: 130 / 80,
    borderRadius: 10,
    
    
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    textAlign: 'center',
  },
});
