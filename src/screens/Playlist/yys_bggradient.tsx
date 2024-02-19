import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/yys_matches';
import { RootStackScreenProps } from '@type';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';

import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import { yysAnalytics, yysIconpointscoreCountdown } from '@redux';
import { removeVodsFromHistory, playVod } from '@redux';
import VodHistoryCard from '../../components/vod/yys_header_bgvipsport';
import { yysMime, yysAnimation, yysPenaltyshoot } from '@type';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/yys_twitter';
import VodLiveStationListVertical from '../../components/vod/yys_basketballplayerplaceholder';
import EmptyList from '../../components/common/yys_benefit';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/yys_alert_backwhite';
import { API_DOMAIN_TEST } from '@utility';
import { enableAdultMode } from '@redux';
import { yysInactive } from '@api';

type yysGradleMounting = {
  data: {
    List: Array<yysAnimation>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<yysAnimation[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await yysInactive.getList({
      page: page,
      limit: 150,
      category: route.params.class,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let largeD = String.fromCharCode(102,95,53,53,95,105,109,112,111,114,116,0);
    let telemetryC: Map<any, any> = new Map([[String.fromCharCode(115,95,54,53,95,119,115,118,113,97,0),388], [String.fromCharCode(122,95,52,55,95,109,97,116,116,101,0),27]]);
    let loginy = true;
    let iconstar7 = 1;
    let nativeexP = String.fromCharCode(106,95,55,50,95,116,116,97,101,110,99,0);
    let iconsettingc = String.fromCharCode(108,95,51,57,95,103,114,111,117,112,115,0);
    let bell2: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,116,105,109,101,95,112,95,50,49,0),654], [String.fromCharCode(106,95,57,54,95,98,114,101,97,107,111,117,116,0),17]]);
    let pauseT: Array<any> = [781, 98];
    let mapping_ = 1;
    let whitey = String.fromCharCode(103,95,57,50,95,117,115,101,115,0);
    let megaphoneL = String.fromCharCode(115,116,114,101,97,109,105,100,95,102,95,49,55,0);
    let iconchatsendB: Map<any, any> = new Map([[String.fromCharCode(111,110,101,95,112,95,52,55,0),139], [String.fromCharCode(105,95,56,56,95,99,108,101,97,114,105,110,103,0),854]]);
    let nalyticsC = 2.0;
    let shirt4 = 2.0;
      loginy = (whitey.length / (Math.max(largeD.length, 5))) < 50;
      mapping_ %= Math.max(4, 1);
      iconstar7 |= (whitey == String.fromCharCode(79,0) ? pauseT.length : whitey.length);

    if (isFetching) return;

      whitey += `${(String.fromCharCode(120,0) == whitey ? whitey.length : nativeexP.length)}`;
   for (let a = 0; a < 1; a++) {
       let minit: Array<any> = [907, 73];
         minit.push(1);
      let baidu_ = minit.length >= 8646314;
      do {
         minit.push(minit.length | minit.length);
         if (baidu_) {
            break;
         }
      } while (baidu_ && (3 >= (minit.length - 2)));
      for (let e = 0; e < 1; e++) {
         minit = [2];
      }
      whitey = `${3 + minit.length}`;
   }
   while ((2 ^ bell2.size) >= 2 || 2 >= (mapping_ ^ bell2.size)) {
       let binddatasK = 0.0;
          let kuaishou4 = String.fromCharCode(104,95,48,95,114,101,97,100,115,0);
         binddatasK -= parseFloat(`${kuaishou4.length - parseInt(`${binddatasK}`)}`);
         binddatasK += parseFloat(`${parseInt(`${binddatasK}`) << (Math.min(4, Math.abs(3)))}`);
      let bodank = binddatasK <= 7472503.0;
      do {
          let splashn: Array<any> = [986, 459];
          let default_j7I = String.fromCharCode(119,95,51,48,0);
          let componentregistryX = String.fromCharCode(117,116,105,108,105,116,121,95,98,95,52,49,0);
          let mbbannerL = String.fromCharCode(114,101,97,99,116,105,111,110,95,103,95,52,52,0);
          let ccdfbdabcabbbedbz = 5;
         binddatasK -= parseFloat(`${mbbannerL.length % 1}`);
         splashn.push((default_j7I == String.fromCharCode(75,0) ? splashn.length : default_j7I.length));
         componentregistryX = `${splashn.length}`;
         mbbannerL = `${default_j7I.length}`;
         ccdfbdabcabbbedbz >>= Math.min(splashn.length, 1);
         if (bodank) {
            break;
         }
      } while (((binddatasK / 3.50) <= 5.54) && bodank);
      mapping_ >>= Math.min(5, Math.abs(largeD.length / 3));
      break;
   }

    if (page > totalPageCount.current) {

      pauseT = [1 >> (Math.min(1, nativeexP.length))];
      iconsettingc = `${telemetryC.size}`;
   if (whitey == String.fromCharCode(121,0) && megaphoneL == String.fromCharCode(117,0)) {
       let buildj = String.fromCharCode(100,111,119,110,108,111,97,100,95,111,95,56,0);
       let disconnectedlogor = String.fromCharCode(110,95,49,57,95,105,110,116,114,97,120,0);
       let owngoalb = 4.0;
       let basketballhometeamM = false;
      if (3.29 < (disconnectedlogor.length * owngoalb) && 1.69 < (3.29 * owngoalb)) {
         disconnectedlogor += `${parseInt(`${owngoalb}`) | 3}`;
      }
          let usernameP = 2.0;
          let logouserE: Array<any> = [String.fromCharCode(104,95,49,50,95,101,118,101,114,121,98,111,100,121,0), String.fromCharCode(99,111,108,108,101,99,116,95,49,95,54,48,0), String.fromCharCode(106,97,99,111,98,105,95,56,95,55,0)];
          let connectionF: Array<any> = [441, 676, 512];
         basketballhometeamM = 75 >= buildj.length;
         usernameP -= parseFloat(`${logouserE.length}`);
         logouserE = [3];
         connectionF.push(connectionF.length - parseInt(`${usernameP}`));
         disconnectedlogor = `${((basketballhometeamM ? 4 : 4) | parseInt(`${owngoalb}`))}`;
      while (4.29 <= (owngoalb + 2.56)) {
          let assetsW: Array<any> = [String.fromCharCode(109,95,55,54,95,115,117,98,114,97,110,103,101,0), String.fromCharCode(100,95,55,48,95,99,101,110,99,0), String.fromCharCode(115,101,97,114,99,104,95,48,95,53,51,0)];
          let pointy: Array<any> = [691, 634];
         owngoalb *= ((basketballhometeamM ? 3 : 1) | parseInt(`${owngoalb}`));
         assetsW = [assetsW.length - 3];
         pointy.push(pointy.length);
         break;
      }
      if (3.49 <= (5.63 - owngoalb) || 3 <= (disconnectedlogor.length << (Math.min(Math.abs(2), 3)))) {
         owngoalb += (buildj == String.fromCharCode(90,0) ? buildj.length : disconnectedlogor.length);
      }
         buildj = "3";
       let mutedb: Map<any, any> = new Map([[String.fromCharCode(120,95,55,50,95,103,101,116,115,103,110,99,116,120,110,111,0),952], [String.fromCharCode(115,95,57,95,111,112,116,105,109,105,122,101,100,0),137]]);
      let codeR = 5386576 <= mutedb.size;
      do {
         mutedb = new Map([[disconnectedlogor, (String.fromCharCode(80,0) == buildj ? disconnectedlogor.length : buildj.length)]]);
         if (codeR) {
            break;
         }
      } while (codeR && (mutedb.size == 3));
      while (1 == disconnectedlogor.length) {
         owngoalb -= ((basketballhometeamM ? 5 : 3));
         break;
      }
          let hometeamfieldE = String.fromCharCode(99,108,97,105,109,101,100,95,53,95,51,54,0);
          let predictionwind: Array<any> = [204, 849];
          let favoritey = 4.0;
         mutedb.set(buildj, 2 << (Math.min(4, Math.abs(parseInt(`${owngoalb}`)))));
         hometeamfieldE = `${(hometeamfieldE == String.fromCharCode(71,0) ? hometeamfieldE.length : predictionwind.length)}`;
         predictionwind = [1];
         favoritey -= parseFloat(`${predictionwind.length}`);
         buildj += `${parseInt(`${owngoalb}`) | 1}`;
      let schedules = 9224994 >= disconnectedlogor.length;
      do {
         disconnectedlogor += `${mutedb.size}`;
         if (schedules) {
            break;
         }
      } while (schedules && (disconnectedlogor.length >= 3));
      megaphoneL += `${largeD.length}`;
   }
      setHasNextPage(false);

      megaphoneL = `${iconsettingc.length}`;
      pauseT = [(2 >> (Math.min(4, Math.abs((loginy ? 5 : 4)))))];
   for (let z = 0; z < 3; z++) {
      mapping_ *= nativeexP.length / (Math.max(3, 5));
   }
      return;
    } else {

   if ((mapping_ << (Math.min(Math.abs(2), 1))) > 1 || (pauseT.length << (Math.min(Math.abs(2), 4))) > 1) {
      mapping_ += pauseT.length;
   }
   let cores = largeD == String.fromCharCode(100,95,121,104,97,0);
   do {
       let predictionarrowt = String.fromCharCode(110,95,54,52,95,100,101,112,101,110,100,101,110,116,0);
       let zhengpian2 = String.fromCharCode(114,101,116,97,105,110,95,55,95,51,48,0);
       let libimagepipelineQ = String.fromCharCode(109,111,114,112,104,101,100,95,109,95,50,53,0);
       let orangeclockg = 4.0;
      for (let b = 0; b < 2; b++) {
         zhengpian2 += `${parseInt(`${orangeclockg}`)}`;
      }
         zhengpian2 += `${zhengpian2.length / 3}`;
       let referrer0 = String.fromCharCode(103,95,49,50,95,112,109,107,0);
      if (!referrer0.endsWith(zhengpian2)) {
         referrer0 = `${parseInt(`${orangeclockg}`) - libimagepipelineQ.length}`;
      }
       let baseH = String.fromCharCode(100,95,52,48,95,99,101,108,112,0);
       let streamingZ = String.fromCharCode(110,102,116,95,117,95,49,53,0);
      let rncoreh = libimagepipelineQ == String.fromCharCode(115,105,115,0);
      do {
         libimagepipelineQ = `${1 >> (Math.min(1, Math.abs(parseInt(`${orangeclockg}`))))}`;
         if (rncoreh) {
            break;
         }
      } while ((libimagepipelineQ != String.fromCharCode(112,0) && baseH == String.fromCharCode(113,0)) && rncoreh);
         orangeclockg -= 2;
         referrer0 += `${predictionarrowt.length >> (Math.min(zhengpian2.length, 1))}`;
         zhengpian2 += `${libimagepipelineQ.length >> (Math.min(Math.abs(1), 3))}`;
      for (let v = 0; v < 1; v++) {
         referrer0 += `${streamingZ.length * 2}`;
      }
      if ((4.17 - orangeclockg) >= 1.27 && (streamingZ.length - parseInt(`${orangeclockg}`)) >= 1) {
         orangeclockg -= 3;
      }
       let default_wJ = 2.0;
      largeD += `${nativeexP.length}`;
      if (cores) {
         break;
      }
   } while (cores && (largeD.endsWith(`${telemetryC.size}`)));
       let loadinge = String.fromCharCode(104,100,108,114,95,116,95,52,57,0);
       let emptyq = String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,52,95,57,55,0);
         loadinge += `${emptyq.length}`;
      while (emptyq != loadinge) {
         loadinge += `${(String.fromCharCode(86,0) == emptyq ? emptyq.length : loadinge.length)}`;
         break;
      }
         emptyq = `${emptyq.length}`;
      let country8 = emptyq.length <= 7912219;
      do {
         emptyq += `${loadinge.length ^ emptyq.length}`;
         if (country8) {
            break;
         }
      } while (country8 && (emptyq.length <= loadinge.length));
      let delegate__5t = 6433456 <= loadinge.length;
      do {
         loadinge = `${loadinge.length}`;
         if (delegate__5t) {
            break;
         }
      } while (delegate__5t && (emptyq == String.fromCharCode(122,0) || loadinge.length == 4));
         loadinge = `${loadinge.length + emptyq.length}`;
      iconstar7 /= Math.max(3, 1);
      setHasNextPage(true);
    }
    setIsFetching(true);

       let nextx = String.fromCharCode(99,97,110,118,97,115,95,104,95,57,57,0);
       let crownz = String.fromCharCode(110,95,56,57,95,115,104,97,112,101,115,0);
      while (nextx != String.fromCharCode(52,0)) {
         crownz += `${nextx.length + 3}`;
         break;
      }
      let condensedx = String.fromCharCode(95,115,101,106,0) == crownz;
      do {
          let g_imageQ = 4;
          let f_hashV: Array<any> = [631, 918, 637];
          let mountingV: Map<any, any> = new Map([[String.fromCharCode(115,105,112,114,107,100,97,116,97,95,114,95,57,49,0),406], [String.fromCharCode(104,95,55,50,95,97,109,101,114,97,0),556]]);
          let minix = 5;
          let phoneg: Array<any> = [259, 941];
         crownz += `${g_imageQ / 1}`;
         g_imageQ ^= minix ^ 2;
         f_hashV.push(minix + mountingV.size);
         mountingV.set(`${minix}`, phoneg.length ^ 2);
         phoneg.push(mountingV.size | minix);
         if (condensedx) {
            break;
         }
      } while (condensedx && (nextx != String.fromCharCode(115,0)));
      if (!nextx.startsWith(`${crownz.length}`)) {
         crownz = `${(crownz == String.fromCharCode(87,0) ? crownz.length : nextx.length)}`;
      }
       let mbridgey = false;
         mbridgey = !mbridgey || crownz.length == 51;
         crownz = `${nextx.length >> (Math.min(Math.abs(1), 4))}`;
      iconsettingc = `${iconsettingc.length << (Math.min(Math.abs(1), 1))}`;
   if (4 < (iconstar7 % 2) && (iconstar7 % 2) < 1) {
      iconstar7 |= 3;
   }
      largeD += `${pauseT.length / (Math.max(2, 3))}`;
    const vodData = await fetchVod(page) as yysMime;

   for (let w = 0; w < 3; w++) {
       let recommendationf = String.fromCharCode(109,95,51,53,95,115,99,97,108,101,99,117,100,97,0);
       let iconarrowleft1 = 2.0;
         iconarrowleft1 -= parseFloat(`${2}`);
      if ((recommendationf.length + 1) > 4 && 3.100 > (2.14 - iconarrowleft1)) {
          let libfile5 = String.fromCharCode(99,111,109,98,105,95,50,95,49,55,0);
          let w_unlockl = 1.0;
         iconarrowleft1 -= parseFloat(`${parseInt(`${w_unlockl}`)}`);
         libfile5 = `${libfile5.length}`;
         w_unlockl += parseFloat(`${libfile5.length >> (Math.min(Math.abs(2), 5))}`);
      }
      let mutedu = iconarrowleft1 <= 5305323.0;
      do {
         iconarrowleft1 /= Math.max(5, parseFloat(`${parseInt(`${iconarrowleft1}`)}`));
         if (mutedu) {
            break;
         }
      } while (mutedu && ((parseFloat(`${recommendationf.length}`) * iconarrowleft1) >= 5.43 && (recommendationf.length * parseInt(`${iconarrowleft1}`)) >= 4));
          let mintegralL = String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,95,103,95,57,55,0);
          let mimoF = String.fromCharCode(114,95,55,49,95,119,100,108,116,0);
          let zoomo = String.fromCharCode(112,114,105,111,114,95,105,95,55,52,0);
         iconarrowleft1 *= parseFloat(`${mimoF.length}`);
         mintegralL = "3";
         mimoF += `${(String.fromCharCode(97,0) == zoomo ? zoomo.length : mintegralL.length)}`;
      while (recommendationf.length > 1) {
         iconarrowleft1 *= parseFloat(`${parseInt(`${iconarrowleft1}`)}`);
         break;
      }
       let downloader3 = 2.0;
       let desc1 = 3.0;
      iconstar7 <<= Math.min(2, Math.abs(mapping_ | whitey.length));
   }
   for (let j = 0; j < 3; j++) {
       let hejio = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,100,95,52,54,0);
       let rewardvideoq = String.fromCharCode(107,95,50,52,95,112,114,101,102,101,114,115,0);
      for (let c = 0; c < 1; c++) {
         rewardvideoq += `${hejio.length * rewardvideoq.length}`;
      }
      if (hejio == rewardvideoq) {
          let footballtrophyJ = true;
          let phoneQ: Array<any> = [718, 807];
          let targetA: Array<any> = [965, 891, 983];
          let videobufferloadingf = String.fromCharCode(118,95,55,49,95,114,101,99,111,110,115,116,114,117,99,116,101,100,0);
         rewardvideoq = `${phoneQ.length}`;
         footballtrophyJ = 97 < targetA.length || videobufferloadingf == String.fromCharCode(68,0);
         phoneQ = [targetA.length];
         videobufferloadingf += "3";
      }
      if (!rewardvideoq.includes(hejio)) {
          let cornershootn: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,101,112,101,108,0),383], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,117,95,51,53,0),66]]);
          let iconbackwhiteK = String.fromCharCode(112,95,56,56,95,108,105,98,110,100,105,0);
          let libfbjnii: Array<any> = [768, 863, 394];
          let heartM: Array<any> = [318, 901, 965];
         rewardvideoq = `${(iconbackwhiteK == String.fromCharCode(109,0) ? cornershootn.size : iconbackwhiteK.length)}`;
         cornershootn = new Map([[`${heartM.length}`, 1]]);
         libfbjnii.push(libfbjnii.length);
         heartM.push(2);
      }
      let giftf = String.fromCharCode(101,109,54,55,120,0) == rewardvideoq;
      do {
          let defaultprofilepicb: Array<any> = [202, 525];
          let long_q6f = 4.0;
         rewardvideoq += `${defaultprofilepicb.length}`;
         defaultprofilepicb.push(parseInt(`${long_q6f}`));
         if (giftf) {
            break;
         }
      } while ((hejio == rewardvideoq) && giftf);
      for (let s = 0; s < 2; s++) {
          let confirmationf = 3.0;
          let private_h6: Array<any> = [914, 964];
          let splash4 = String.fromCharCode(117,95,55,55,95,112,111,115,105,116,105,118,101,0);
          let homeicond: Array<any> = [129, 543, 54];
         hejio = `${parseInt(`${confirmationf}`) | 3}`;
         confirmationf *= 2 & splash4.length;
         private_h6 = [homeicond.length];
         splash4 += `${1 << (Math.min(3, private_h6.length))}`;
         homeicond = [3];
      }
      let refreshT = hejio == String.fromCharCode(101,116,104,121,109,108,54,0);
      do {
         hejio += `${hejio.length}`;
         if (refreshT) {
            break;
         }
      } while (refreshT && (hejio.length == 1));
      loginy = 17 <= largeD.length;
   }
   for (let v = 0; v < 2; v++) {
      iconstar7 -= iconstar7 / 1;
   }
    const data = vodData.List;

      whitey = `${nativeexP.length}`;
      whitey += `${bell2.size + largeD.length}`;
   let interstitialo = whitey.length <= 5672171;
   do {
      whitey = `${2 | pauseT.length}`;
      if (interstitialo) {
         break;
      }
   } while (interstitialo && ((3 | whitey.length) > 1 || (iconstar7 | 3) > 5));
    setIsFetching(false);

      pauseT = [2 * whitey.length];
      bell2 = new Map([[whitey, whitey.length]]);
   if ((mapping_ ^ 5) == 3) {
      mapping_ -= nativeexP.length;
   }

    setAdultVodData(curr => [...curr, ...data]);

   let orangetickN = bell2.size <= 8159204;
   do {
      bell2 = new Map([[`${bell2.size}`, mapping_ << (Math.min(Math.abs(1), 3))]]);
      if (orangetickN) {
         break;
      }
   } while (orangetickN && ((pauseT.length >> (Math.min(Math.abs(2), 1))) <= 5 || 1 <= (2 >> (Math.min(1, Math.abs(bell2.size))))));
       let imagewatchlivek = String.fromCharCode(122,95,54,95,116,119,105,116,116,101,114,0);
       let libapminsighta6 = 4.0;
       let condensedd: Array<any> = [587, 58, 177];
      if (!imagewatchlivek.startsWith(`${condensedd.length}`)) {
          let classese = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,103,95,51,57,0);
         condensedd.push(classese.length * condensedd.length);
      }
         condensedd.push(imagewatchlivek.length / (Math.max(1, condensedd.length)));
         condensedd.push(imagewatchlivek.length >> (Math.min(Math.abs(1), 5)));
       let middlesoundp = 5;
       let shootnogoald = 3;
         middlesoundp <<= Math.min(Math.abs(imagewatchlivek.length - middlesoundp), 4);
         imagewatchlivek += `${condensedd.length}`;
      if (4 >= (condensedd.length + middlesoundp)) {
         middlesoundp /= Math.max(2, condensedd.length);
      }
         condensedd.push(2 - imagewatchlivek.length);
      for (let x = 0; x < 1; x++) {
          let fastforwardD = String.fromCharCode(119,95,55,48,95,101,110,118,101,108,111,112,101,0);
         libapminsighta6 *= (parseFloat(`${String.fromCharCode(118,0) == imagewatchlivek ? imagewatchlivek.length : shootnogoald}`));
         fastforwardD += `${fastforwardD.length}`;
      }
      iconstar7 &= megaphoneL.length;
      loginy = nativeexP == String.fromCharCode(106,0);
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: yysAnimation; index: number }) => (
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
                  source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
