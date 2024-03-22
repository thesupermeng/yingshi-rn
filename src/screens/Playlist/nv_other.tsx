import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/ypy_fast';
import { RootStackScreenProps } from '@type/vrm_thailand';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import { VFMode, QQCenterChart } from '@redux/reducers/pxk_lang_quest';
import { removeVodsFromHistory, playVod } from '@redux/actions/xif_layout';
import VodHistoryCard from '../../components/vod/sps_layout';
import CheckBoxSelected from '@static/images/foundPauseCircle.svg';
import CheckBoxUnselected from '@static/images/middlewareGoalStation.svg';
import { POPrivateOverlay, PKSave, XVSScoreDark } from '@type/wpk_long';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/nw_topic';
import VodLiveStationListVertical from '../../components/vod/mmr_placeholder';
import EmptyList from '../../components/common/jip_next_bell';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/gwi_with';
import { API_DOMAIN_TEST } from '@utility/n_subs_interstitial';
import { enableAdultMode } from '@redux/actions/a_switch';
import { RCanvas } from '@api';

type BContainer = {
  data: {
    List: Array<PKSave>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<PKSave[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await RCanvas.getList({
      page: page,
      limit: 10,
      category: route.params.class,
      vod_source_name: route.params.vod_source_name,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let sendz = String.fromCharCode(100,114,97,119,103,114,105,100,95,115,95,51,56,0);
    let pingc = 2.0;
    let networkB: Map<any, any> = new Map([[String.fromCharCode(104,95,50,53,95,112,108,111,116,116,101,114,0),false ], [String.fromCharCode(110,95,57,50,95,117,116,103,111,105,110,103,0),true ]]);
    let rewindB: Array<any> = [910, 957];
    let customM = String.fromCharCode(99,95,50,54,95,101,109,105,116,116,101,100,0);
    let paginationX = 0;
    let episodes4 = String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,99,95,52,48,0);
   if (sendz.includes(`${pingc}`)) {
      pingc *= parseFloat(`${sendz.length}`);
   }
   while (networkB.size < 1) {
      customM += `${customM.length}`;
      break;
   }
   let malaysia_ = 7408395 >= customM.length;
   do {
       let lesse = String.fromCharCode(115,117,105,116,97,98,108,101,95,116,95,56,53,0);
       let pressured = String.fromCharCode(99,95,52,52,95,99,104,97,114,97,99,116,101,100,0);
       let animationK = String.fromCharCode(120,95,57,54,95,102,119,104,116,0);
       let singleW = true;
       let alertl = String.fromCharCode(103,101,116,98,105,116,95,53,95,49,49,0);
         singleW = (lesse.length | animationK.length) == 48;
         alertl += `${((singleW ? 1 : 3))}`;
      let analyticsH = String.fromCharCode(112,97,95,104,118,105,122,57,101,0) == lesse;
      do {
         lesse += `${lesse.length}`;
         if (analyticsH) {
            break;
         }
      } while ((alertl != String.fromCharCode(66,0)) && analyticsH);
         singleW = !singleW;
         animationK = `${((singleW ? 3 : 1) / (Math.max(animationK.length, 10)))}`;
         lesse += "2";
         pressured += "1";
         singleW = pressured.length >= 86;
      let singleh = String.fromCharCode(98,118,121,98,101,107,48,0) == alertl;
      do {
          let dropdown8 = 3.0;
          let report8 = 5.0;
          let bootsplashJ: Array<any> = [285, 704];
         alertl += "3";
         dropdown8 /= Math.max(bootsplashJ.length & parseInt(`${report8}`), 1);
         report8 -= parseFloat(`${1 ^ parseInt(`${report8}`)}`);
         bootsplashJ = [2];
         if (singleh) {
            break;
         }
      } while ((alertl.includes(`${lesse.length}`)) && singleh);
      for (let w = 0; w < 3; w++) {
         singleW = lesse == pressured;
      }
      for (let n = 0; n < 1; n++) {
         alertl = `${alertl.length}`;
      }
          let submitK = String.fromCharCode(115,119,97,112,112,97,98,108,101,95,50,95,50,55,0);
          let club3 = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,117,95,49,55,0);
          let areaL = 4.0;
         animationK = "1";
         submitK += `${parseInt(`${areaL}`) ^ submitK.length}`;
         club3 = `${(submitK == String.fromCharCode(73,0) ? club3.length : submitK.length)}`;
         areaL *= (club3 == String.fromCharCode(78,0) ? parseInt(`${areaL}`) : club3.length);
      let clubW = singleW ? !singleW : singleW;
      do {
         singleW = animationK.length >= 77 || pressured == String.fromCharCode(100,0);
         if (clubW) {
            break;
         }
      } while (clubW && (singleW && lesse.length < 5));
      let stationO = singleW ? !singleW : singleW;
      do {
         singleW = lesse.length >= alertl.length;
         if (stationO) {
            break;
         }
      } while ((alertl.endsWith(`${singleW}`)) && stationO);
          let roomc = String.fromCharCode(105,109,103,95,116,95,50,57,0);
          let entryd = String.fromCharCode(103,95,56,57,95,115,116,114,117,99,116,0);
         alertl += `${pressured.length / (Math.max(roomc.length, 7))}`;
         roomc += `${2 ^ entryd.length}`;
         entryd += `${entryd.length << (Math.min(Math.abs(1), 5))}`;
      customM = `${networkB.size % 1}`;
      if (malaysia_) {
         break;
      }
   } while ((1 < (rewindB.length >> (Math.min(Math.abs(3), 2)))) && malaysia_);

    if (isFetching) return;

   if (4.41 > (2.23 * pingc)) {
      pingc += parseFloat(`${parseInt(`${pingc}`) & 3}`);
   }
   for (let v = 0; v < 1; v++) {
       let sliderH = String.fromCharCode(114,95,52,50,95,112,117,116,0);
       let unreadr = 4;
       let loadingI = 3;
       let editj = String.fromCharCode(119,95,54,57,95,99,111,114,110,101,114,115,0);
       let blacka = String.fromCharCode(114,100,102,116,95,55,95,55,49,0);
         unreadr |= (blacka == String.fromCharCode(71,0) ? sliderH.length : blacka.length);
      if (editj.includes(blacka)) {
         editj = "2";
      }
      while ((1 >> (Math.min(2, Math.abs(unreadr)))) >= 5) {
          let hookL = String.fromCharCode(118,95,57,54,95,99,104,97,110,110,101,108,115,0);
          let show7 = String.fromCharCode(109,95,54,57,95,101,97,115,121,0);
          let const_t1x: Array<any> = [779, 931, 771];
          let moviesy: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,113,95,56,49,0),565], [String.fromCharCode(115,95,57,48,95,116,101,115,116,115,0),190], [String.fromCharCode(108,111,119,100,101,108,97,121,95,105,95,53,57,0),461]]);
         unreadr *= show7.length % 1;
         hookL += `${3 + const_t1x.length}`;
         show7 += `${hookL.length}`;
         const_t1x.push(1);
         moviesy.set(hookL, hookL.length + 3);
         break;
      }
       let small5 = true;
       let episodesa = true;
         sliderH += "3";
         editj += `${unreadr + 2}`;
      while (1 <= sliderH.length || !episodesa) {
          let themeI = String.fromCharCode(115,115,115,101,95,97,95,51,0);
          let renewF = String.fromCharCode(98,95,57,95,117,110,100,101,114,0);
          let update_gE = 1;
         episodesa = renewF.includes(`${loadingI}`);
         themeI += `${themeI.length}`;
         renewF += `${update_gE >> (Math.min(Math.abs(1), 5))}`;
         update_gE <<= Math.min(1, Math.abs(update_gE));
         break;
      }
         episodesa = 5 > loadingI || small5;
          let temperature2 = String.fromCharCode(112,95,53,49,95,112,97,99,107,97,103,101,100,0);
         small5 = String.fromCharCode(117,0) == editj;
         temperature2 += `${temperature2.length}`;
      for (let v = 0; v < 3; v++) {
          let changeX: Array<any> = [529, 772, 236];
         editj += `${sliderH.length}`;
         changeX = [changeX.length];
      }
      while ((editj.length << (Math.min(2, Math.abs(unreadr)))) < 4 && 2 < (4 << (Math.min(1, Math.abs(unreadr))))) {
         editj += "2";
         break;
      }
         sliderH = `${unreadr ^ loadingI}`;
      for (let f = 0; f < 3; f++) {
         unreadr += blacka.length >> (Math.min(Math.abs(3), 1));
      }
      for (let j = 0; j < 1; j++) {
         sliderH += `${unreadr}`;
      }
          let componentw = false;
          let paused = String.fromCharCode(101,118,101,114,121,98,111,100,121,95,53,95,57,53,0);
         editj = `${loadingI >> (Math.min(5, Math.abs(3)))}`;
         componentw = !paused.includes(`${componentw}`);
         paused += `${paused.length & 3}`;
      customM += `${2 - editj.length}`;
   }
      episodes4 = `${rewindB.length + 1}`;

    if (page > totalPageCount.current) {

      rewindB.push(3);
      episodes4 += `${customM.length * rewindB.length}`;
   let filledA = customM == String.fromCharCode(101,118,99,98,117,106,98,104,52,51,0);
   do {
       let s_viewe: Array<any> = [String.fromCharCode(119,104,105,116,101,108,105,115,116,95,103,95,52,57,0), String.fromCharCode(97,95,49,53,95,99,111,110,116,97,105,110,97,98,108,101,0)];
       let popupk = String.fromCharCode(100,95,53,51,95,100,101,99,107,108,105,110,107,0);
      for (let x = 0; x < 2; x++) {
          let favicon_ = String.fromCharCode(115,108,117,114,112,95,118,95,56,53,0);
          let filli = 3.0;
          let videou = String.fromCharCode(115,107,105,112,112,97,98,108,101,95,116,95,52,57,0);
          let langkeyj = String.fromCharCode(120,95,49,55,95,100,105,118,105,100,101,114,115,0);
          let trophyn = String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,114,95,51,57,0);
         popupk += `${s_viewe.length & parseInt(`${filli}`)}`;
         favicon_ += `${langkeyj.length ^ 2}`;
         filli += parseFloat(`${trophyn.length / (Math.max(favicon_.length, 4))}`);
         videou = "2";
         langkeyj += `${(trophyn == String.fromCharCode(74,0) ? favicon_.length : trophyn.length)}`;
      }
          let moviese = 2.0;
          let assist3 = 4.0;
          let upgradek = 5.0;
         s_viewe.push(parseInt(`${moviese}`));
         assist3 *= parseFloat(`${2}`);
         upgradek -= parseFloat(`${parseInt(`${assist3}`) ^ parseInt(`${upgradek}`)}`);
      while (popupk.length >= s_viewe.length) {
         popupk = `${s_viewe.length}`;
         break;
      }
         s_viewe = [1];
          let mathN = 1;
         popupk = `${mathN << (Math.min(Math.abs(1), 2))}`;
      for (let x = 0; x < 2; x++) {
         s_viewe.push(2 & popupk.length);
      }
      customM = `${3 + networkB.size}`;
      if (filledA) {
         break;
      }
   } while (filledA && (2 == (rewindB.length - customM.length)));
      setHasNextPage(false);

   while (!customM.includes(`${paginationX}`)) {
      customM += `${sendz.length & 2}`;
      break;
   }
   if (!customM.includes(episodes4)) {
       let targetz = String.fromCharCode(105,115,112,108,97,121,95,55,95,49,51,0);
       let langkeyI = 1.0;
       let containerZ = false;
      if (langkeyI >= 2.75) {
         targetz += `${(targetz.length | (containerZ ? 3 : 2))}`;
      }
      let kickx = containerZ ? !containerZ : containerZ;
      do {
          let read8 = 3;
         containerZ = 73 > read8;
         if (kickx) {
            break;
         }
      } while (kickx && (!containerZ || 3.66 > (langkeyI / (Math.max(5.83, 1)))));
      for (let b = 0; b < 3; b++) {
         containerZ = langkeyI >= 43.41;
      }
         targetz += `${targetz.length}`;
      if ((4.38 - langkeyI) > 5.9) {
          let selectX = 3.0;
         langkeyI *= ((containerZ ? 1 : 1) + parseInt(`${selectX}`));
      }
         langkeyI += 1 & parseInt(`${langkeyI}`);
      for (let w = 0; w < 1; w++) {
         langkeyI *= ((containerZ ? 3 : 5));
      }
         containerZ = String.fromCharCode(121,0) == targetz;
      for (let o = 0; o < 3; o++) {
         targetz += `${targetz.length | parseInt(`${langkeyI}`)}`;
      }
      episodes4 = `${targetz.length << (Math.min(Math.abs(2), 1))}`;
   }
      customM = `${networkB.size}`;
      return;
    } else {

   for (let t = 0; t < 2; t++) {
      pingc += parseFloat(`${customM.length}`);
   }
      episodes4 = `${episodes4.length}`;
      networkB = new Map([[`${pingc}`, customM.length]]);
      setHasNextPage(true);
    }
    setIsFetching(true);

   if (parseInt(`${pingc}`) < sendz.length) {
       let emojia = false;
       let controlz = String.fromCharCode(107,95,56,49,95,104,121,98,114,105,100,0);
       let robotoT = 4.0;
       let login3: Array<any> = [288, 254];
          let moonF: Map<any, any> = new Map([[String.fromCharCode(116,105,110,121,95,119,95,54,48,0),461], [String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,56,95,50,50,0),389]]);
          let dataU = String.fromCharCode(113,95,55,55,95,115,116,97,107,101,0);
         login3 = [(login3.length ^ (emojia ? 3 : 5))];
         moonF.set(dataU, (dataU == String.fromCharCode(49,0) ? dataU.length : moonF.size));
      if (login3.includes(robotoT)) {
          let connectionq = String.fromCharCode(118,97,114,108,101,110,95,106,95,49,50,0);
          let redirectD = String.fromCharCode(109,101,103,97,103,114,111,117,112,95,55,95,50,51,0);
          let headerb = String.fromCharCode(115,113,108,105,116,101,95,102,95,51,52,0);
          let eighteenL = 5;
          let greyh = String.fromCharCode(112,111,112,117,108,97,116,101,100,95,56,95,54,49,0);
         robotoT *= ((emojia ? 4 : 5) ^ parseInt(`${robotoT}`));
         connectionq = `${redirectD.length % (Math.max(headerb.length, 5))}`;
         redirectD += `${(String.fromCharCode(114,0) == connectionq ? connectionq.length : greyh.length)}`;
         headerb = `${(connectionq == String.fromCharCode(80,0) ? redirectD.length : connectionq.length)}`;
         eighteenL /= Math.max(2, greyh.length);
      }
       let textI: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,105,101,100,95,113,95,57,50,0),747], [String.fromCharCode(103,114,97,99,101,95,111,95,52,0),156], [String.fromCharCode(101,95,56,53,95,100,98,115,116,97,116,0),398]]);
       let downloadingX: Map<any, any> = new Map([[String.fromCharCode(103,95,57,49,95,103,101,116,97,115,115,111,99,105,100,0),false ], [String.fromCharCode(114,95,51,52,95,112,114,111,114,101,115,100,115,112,0),true ]]);
         downloadingX = new Map([[`${downloadingX.size}`, downloadingX.size]]);
      sendz += `${episodes4.length}`;
      controlz += `${controlz.length - 1}`;
   }
   if (3 < (paginationX & episodes4.length) || (episodes4.length & paginationX) < 3) {
       let const_qrg = 4.0;
       let relatedA = 0;
      while (const_qrg >= 2.49) {
         relatedA += relatedA * 3;
         break;
      }
      let hongkongh = relatedA >= 9750729;
      do {
          let appsb = String.fromCharCode(102,105,110,110,101,121,95,109,95,56,56,0);
          let pauseb = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,105,95,57,51,0);
         relatedA ^= parseInt(`${const_qrg}`);
         appsb = `${pauseb.length}`;
         pauseb = `${appsb.length << (Math.min(pauseb.length, 3))}`;
         if (hongkongh) {
            break;
         }
      } while ((4 < relatedA) && hongkongh);
      while (const_qrg >= 4.1) {
         const_qrg /= Math.max(1, relatedA & 3);
         break;
      }
      if (1.2 <= (relatedA + const_qrg) || 2 <= (relatedA >> (Math.min(Math.abs(3), 4)))) {
         relatedA *= relatedA;
      }
          let streamingM: Array<any> = [313, 150];
          let edit8 = 3.0;
         const_qrg += 1 << (Math.min(Math.abs(parseInt(`${const_qrg}`)), 2));
         streamingM = [3];
         edit8 *= streamingM.length;
         const_qrg /= Math.max(3, relatedA ^ 2);
      episodes4 += `${rewindB.length}`;
   }
      paginationX >>= Math.min(4, Math.abs(paginationX));
    const vodData = await fetchVod(page) as POPrivateOverlay;

      episodes4 += "3";
      sendz = `${episodes4.length / (Math.max(sendz.length, 9))}`;
      episodes4 = `${episodes4.length}`;
    const data = vodData.List;

      pingc -= parseFloat(`${3}`);
   for (let p = 0; p < 2; p++) {
      networkB = new Map([[`${rewindB.length}`, 3]]);
   }
      pingc /= Math.max(parseFloat(`${paginationX}`), 1);
    setIsFetching(false);

      networkB.set(`${paginationX}`, 1);
      networkB = new Map([[`${networkB.size}`, 2 & rewindB.length]]);
       let sortp = 2.0;
       let weibo6 = 0;
       let pressureo: Map<any, any> = new Map([[String.fromCharCode(114,95,53,54,95,100,105,115,109,105,115,115,101,100,0),15], [String.fromCharCode(114,95,57,53,95,98,121,116,101,105,110,0),623]]);
         sortp -= pressureo.size % 1;
          let fillo = false;
          let tail9: Map<any, any> = new Map([[String.fromCharCode(112,111,119,116,97,98,108,101,95,114,95,52,57,0),String.fromCharCode(109,95,53,54,95,109,112,97,100,115,112,0)], [String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,99,95,55,53,0),String.fromCharCode(103,95,55,52,95,115,117,98,115,97,109,112,108,105,110,103,0)]]);
          let assistU = String.fromCharCode(116,95,55,51,95,97,117,103,109,101,110,116,97,116,105,111,110,0);
         pressureo = new Map([[`${pressureo.size}`, 2 - pressureo.size]]);
         fillo = tail9.get(`${fillo}`) != null;
         tail9.set(assistU, (String.fromCharCode(106,0) == assistU ? (fillo ? 3 : 2) : assistU.length));
         weibo6 += 3 / (Math.max(4, weibo6));
      let comment4 = 5108366 >= weibo6;
      do {
         weibo6 ^= 2;
         if (comment4) {
            break;
         }
      } while ((3 == (weibo6 / 4) && (4 << (Math.min(4, Math.abs(weibo6)))) == 2) && comment4);
      let renewi = weibo6 <= 8797705;
      do {
         weibo6 -= pressureo.size + weibo6;
         if (renewi) {
            break;
         }
      } while ((5 >= (weibo6 ^ 2)) && renewi);
         weibo6 /= Math.max(2, 1 + weibo6);
       let whatsappY = false;
       let relatedj = false;
      for (let i = 0; i < 3; i++) {
         sortp /= Math.max(parseInt(`${sortp}`) & 2, 4);
      }
      if (!relatedj) {
          let xvod0: Array<any> = [79, 929, 506];
          let predictiona = String.fromCharCode(116,95,51,50,95,106,112,101,103,108,105,98,0);
          let actionsS = false;
         whatsappY = 12.82 <= sortp && relatedj;
         xvod0.push(((actionsS ? 4 : 1) - 3));
         predictiona = `${(predictiona.length * (actionsS ? 3 : 2))}`;
      }
      pingc += parseFloat(`${1}`);

    setAdultVodData(curr => [...curr, ...data]);

      pingc += parseFloat(`${rewindB.length}`);
       let delegate_y8t = 2.0;
          let alertB = 0.0;
         delegate_y8t -= parseFloat(`${parseInt(`${alertB}`)}`);
      while ((1.92 - delegate_y8t) == 1.56 || 4.20 == (1.92 - delegate_y8t)) {
         delegate_y8t += parseFloat(`${parseInt(`${delegate_y8t}`) / (Math.max(parseInt(`${delegate_y8t}`), 6))}`);
         break;
      }
         delegate_y8t -= parseFloat(`${parseInt(`${delegate_y8t}`)}`);
      paginationX |= customM.length;
      paginationX %= Math.max(customM.length % 2, 4);
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: PKSave; index: number }) => {
    return (
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
            useFastImage={true}
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
    )
  };

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
        {adultVodData.length < 1 ?
          (
            <FastImage
              style={{
                height: 80,
                width: 80,

                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('@static/images/settingsGrayZhengpian.gif')}
              resizeMode={'contain'}
            />
          )

          :

          (
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
                      source={require('@static/images/settingsGrayZhengpian.gif')}
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
          )
        }
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
