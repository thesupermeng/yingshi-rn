class ConfigDialogContainer {
  static minivodMalaysiaMail = (
    contents: [number],
    key: number,
    hasEmoji: boolean,
  ) => {
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
    let result = '';
    for (let i = 0; i < newList.length; i++) {
      result += '%' + newList[i].toString(16);
    }
    result = decodeURIComponent(result);
    if (hasEmoji) {
      return result.replace(/\\u([0-9A-F]{4})/gi, (_, g) =>
        String.fromCharCode(`0x${g}`),
      );
    }
    return result;
  };
}
import React, {useCallback, useEffect, useState, memo, useContext} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import ScreenContainer from '../components/container/yys_executor_expand';
import {useFocusEffect, useRoute, useTheme} from '@react-navigation/native';
import {useQuery, useQueries, UseQueryResult} from '@tanstack/react-query';
import {useQueryClient} from '@tanstack/react-query';
import {yys_Executor, yys_NotificationGray} from '@type/yys_libzeus';
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  EVENT_SPLASH_SHOW_DURATION,
  IOS_HOME_PAGE_POP_UP_ADS,
  UMENG_CHANNEL,
} from '@utility/yys_ajax_switch';
import CatagoryHome from '../components/container/yys_dycreator_libavformat';
import RecommendationHome from '../components/container/yys_watch_componentregistry';
import HomeHeader from '../components/header/yys_classes_count_header';
import FastImage from '../components/common/yys_vertical_collection';
import {useIsFocused} from '@react-navigation/native';
import NoConnection from './../components/common/yys_armva_classes';
import NetInfo from '@react-native-community/netinfo';
import {useAppSelector, useAppDispatch, useSelector} from '@hooks/yys_frame';
import {yys_MintegralLibavdevice} from '@redux/yys_sport_shrink';
import {yys_Videocommon} from '@redux/reducers/yys_libavdevice';
import HomeNav from '../components/tabNavigate/yys_sheet_view';

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from './../../AnyThinkAds/yys_recommendation';
import {AdsBannerContext} from '../contexts/yys_about';

import useInterstitialAds from '@hooks/yys_china_gmail';
import EighteenPlusOverlay from '../components/modal/yys_checkbox_init';
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setIsHomeGuideShown,
  setShowAdultTab,
  setShowEventSplashData,
} from '@redux/actions/yys_runtimescheduler';
import {screenModel} from '@type/yys_service_setting';
import {yys_Context, yys_CurrentLang, yys_Sans} from '@api';
import yys_event_common from '../../Umeng/yys_event_common';
import DeviceInfo from 'react-native-device-info';
import {EventSpash} from '../navigation/yys_canvas_leakchecker';
import {yys_HejiCricket} from '@redux/reducers/yys_privacy_round';
import {yys_RelatedTooltips} from '@models/yys_project_pagination';

function yys_dycreator({navigation}: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const {colors, spacing} = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({settingsReducer}: yys_MintegralLibavdevice) => settingsReducer,
  );
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === 'ios') {
    channel = 'WEB';
  }
  const {data: navOptions, refetch} = useQuery({
    queryKey: ['HomePageNavOptions'],
    queryFn: () =>
      yys_Context.getHomeNav().then((json: yys_Executor[]) => {
        let gotAdultFlag = json.findIndex(e => e?.id == 99);
        if (gotAdultFlag >= 0) {
          json = json.filter(e => e?.id != 99);
          dispatch(setShowAdultTab(true));
        } else {
          dispatch(setShowAdultTab(false));
        }
        return json;
      }),
  });

  const fetchData = useCallback(
    (id: number) => yys_Context.getHomePages(id, isVip),
    [isVip],
  );

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
          queryKey: ['HomePage', x.id, isVip],
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });

  const checkConnection = async () => {
    let bufferf = String.fromCharCode(
      101,
      95,
      55,
      51,
      95,
      99,
      108,
      101,
      97,
      114,
      98,
      105,
      116,
      0,
    );
    let typingy = false;
    let turnd: Array<any> = [982, 676, 507];
    let transfern = 1.0;
    let thumbnailv: Array<any> = [47, 214, 620];
    let linkN = 2.0;
    let overlayt = String.fromCharCode(
      119,
      105,
      110,
      99,
      101,
      95,
      56,
      95,
      51,
      54,
      0,
    );
    let actionV = String.fromCharCode(
      120,
      95,
      56,
      55,
      95,
      97,
      115,
      105,
      110,
      107,
      0,
    );
    let textV = 0.0;
    let bootsplashS: Map<any, any> = new Map([
      [
        String.fromCharCode(107, 95, 52, 50, 95, 103, 117, 105, 100, 115, 0),
        64,
      ],
      [
        String.fromCharCode(121, 98, 108, 111, 99, 107, 95, 100, 95, 49, 50, 0),
        873,
      ],
      [String.fromCharCode(105, 110, 118, 102, 95, 55, 95, 52, 0), 321],
    ]);
    let sentry7 = 5.0;
    let fastforwardV = String.fromCharCode(
      119,
      95,
      52,
      95,
      112,
      117,
      98,
      108,
      105,
      115,
      104,
      0,
    );
    bufferf += '2';
    let launchert = 3;
    let stepB: Map<any, any> = new Map([
      [
        String.fromCharCode(
          105,
          110,
          103,
          114,
          101,
          115,
          115,
          95,
          118,
          95,
          55,
          56,
          0,
        ),
        174,
      ],
      [
        String.fromCharCode(
          115,
          105,
          122,
          105,
          110,
          103,
          95,
          119,
          95,
          54,
          56,
          0,
        ),
        747,
      ],
    ]);
    let countdownQ = String.fromCharCode(
      108,
      97,
      118,
      117,
      95,
      106,
      95,
      51,
      51,
      0,
    );
    countdownQ = '2';
    launchert <<= Math.min(Math.abs(2 * launchert), 1);
    stepB = new Map([[`${stepB.size}`, 3]]);
    while (stepB.size - launchert < 3 || stepB.size - launchert < 3) {
      stepB = new Map([[countdownQ, launchert * countdownQ.length]]);
      break;
    }
    for (let b = 0; b < 2; b++) {
      countdownQ += `${stepB.size}`;
    }
    stepB.set(`${launchert}`, 3);
    countdownQ = `${countdownQ.length & 2}`;
    for (let s = 0; s < 2; s++) {
      let detailb = false;
      let loadingF = String.fromCharCode(
        107,
        95,
        52,
        51,
        95,
        102,
        114,
        97,
        99,
        116,
        105,
        111,
        110,
        0,
      );
      stepB.set(`${detailb}`, stepB.size | 2);
      loadingF = '3';
    }
    let imagemanagerF = true;
    let castingA = String.fromCharCode(
      97,
      98,
      117,
      102,
      102,
      101,
      114,
      115,
      105,
      110,
      107,
      95,
      101,
      95,
      55,
      55,
      0,
    );
    let libcrashsdk8 = String.fromCharCode(
      108,
      95,
      51,
      50,
      95,
      117,
      110,
      99,
      111,
      110,
      102,
      105,
      114,
      109,
      101,
      100,
      0,
    );
    stepB.set(`${imagemanagerF}`, 3);
    castingA = `${
      castingA == String.fromCharCode(73, 0)
        ? castingA.length
        : libcrashsdk8.length
    }`;
    libcrashsdk8 = `${castingA.length << Math.min(Math.abs(3), 1)}`;
    turnd.push(1);
    bufferf += `${bufferf.length * parseInt(`${textV}`)}`;
    let contextq = 5820185.0 <= linkN;
    do {
      linkN *= parseInt(`${textV}`) << Math.min(2, Math.abs(3));
      if (contextq) {
        break;
      }
    } while (
      contextq &&
      linkN / 5.12 == 3.3 &&
      1 == turnd.length % Math.max(4, 8)
    );

    const state = await NetInfo.fetch();

    transfern += parseInt(`${textV}`) / 2;
    let trophyr = textV <= 8429736.0;
    do {
      let materialx = 0.0;
      let gmailh = true;
      if (gmailh) {
        materialx /= Math.max(2, parseFloat(`${3 * parseInt(`${materialx}`)}`));
      }
      if (2.1 <= materialx) {
        let qaagL = false;
        let logoutS = 3.0;
        gmailh = logoutS >= 79.18 && !qaagL;
      }
      materialx += parseFloat(`${parseInt(`${materialx}`) & (gmailh ? 5 : 4)}`);
      materialx *= parseFloat(`${(gmailh ? 2 : 4) + parseInt(`${materialx}`)}`);
      if (gmailh) {
        let temperature0 = false;
        let nterstitialx = 1.0;
        gmailh = !temperature0;
        nterstitialx += parseFloat(`${parseInt(`${nterstitialx}`)}`);
      }
      for (let i = 0; i < 1; i++) {
        let downloadedv: Array<any> = [63, 602];
        let long_x33 = true;
        materialx -= parseFloat(`${downloadedv.length}`);
        downloadedv.push((long_x33 ? 5 : 2) & (long_x33 ? 1 : 4));
      }
      textV /= Math.max(parseInt(`${transfern}`) & (gmailh ? 3 : 3), 1);
      if (trophyr) {
        break;
      }
    } while (trophyr && turnd.length <= parseInt(`${textV}`));
    if (!overlayt.endsWith(`${textV}`)) {
      overlayt += `${2 % Math.max(8, bufferf.length)}`;
    }
    for (let e = 0; e < 3; e++) {
      actionV += '1';
    }

    for (let u = 0; u < 3; u++) {
      bootsplashS = new Map([[`${thumbnailv.length}`, thumbnailv.length - 3]]);
    }
    let statisticsB = transfern <= 7875392.0;
    do {
      transfern += actionV.length;
      if (statisticsB) {
        break;
      }
    } while (
      statisticsB &&
      !Array.from(bootsplashS.keys()).includes(`${transfern}`)
    );
    if (actionV.length + parseInt(`${transfern}`) >= 5) {
      transfern -= parseInt(`${textV}`);
    }
    for (let j = 0; j < 3; j++) {
      let readN = false;
      let tumbnailm = String.fromCharCode(
        100,
        121,
        110,
        97,
        114,
        114,
        97,
        121,
        95,
        121,
        95,
        50,
        53,
        0,
      );
      let alertm = String.fromCharCode(
        108,
        105,
        98,
        115,
        119,
        105,
        102,
        116,
        111,
        115,
        95,
        113,
        95,
        49,
        51,
        0,
      );
      let expired7 =
        tumbnailm == String.fromCharCode(99, 56, 103, 98, 57, 120, 54, 115, 0);
      do {
        let humidityY = 0;
        let main_lg: Array<any> = [
          String.fromCharCode(
            119,
            95,
            52,
            52,
            95,
            115,
            105,
            108,
            101,
            110,
            99,
            101,
            100,
            0,
          ),
          String.fromCharCode(98, 95, 52, 56, 95, 102, 112, 109, 98, 0),
          String.fromCharCode(
            115,
            95,
            54,
            57,
            95,
            98,
            121,
            116,
            101,
            115,
            116,
            114,
            101,
            97,
            109,
            0,
          ),
        ];
        let singleO = 1;
        tumbnailm += `${singleO & 3}`;
        humidityY ^= main_lg.length;
        main_lg = [3 << Math.min(Math.abs(humidityY), 4)];
        singleO += main_lg.length;
        if (expired7) {
          break;
        }
      } while (expired7 && tumbnailm.length == 2);
      let typesG: Array<any> = [704, 413, 349];
      let area1 = 5.0;
      readN = 83 >= alertm.length;
      typesG.push(1 + parseInt(`${area1}`));
      area1 /= Math.max(4, typesG.length);
      while (readN || tumbnailm.length > 5) {
        tumbnailm += `${2 ^ alertm.length}`;
        break;
      }
      alertm += `${
        tumbnailm == String.fromCharCode(67, 0)
          ? readN
            ? 4
            : 1
          : tumbnailm.length
      }`;
      tumbnailm += `${alertm.length % 3}`;
      let shootE = true;
      tumbnailm = `${(readN ? 2 : 2) * (shootE ? 1 : 4)}`;
      let stringsQ = 4;
      let bellN = 2.0;
      tumbnailm += `${parseInt(`${bellN}`) + 2}`;
      stringsQ <<= Math.min(Math.abs(stringsQ), 1);
      bellN /= Math.max(
        parseFloat(`${stringsQ >> Math.min(Math.abs(3), 1)}`),
        5,
      );
      alertm += `${3 << Math.min(5, tumbnailm.length)}`;
      for (let y = 0; y < 1; y++) {
        tumbnailm += `${alertm.length}`;
      }
      thumbnailv.push(thumbnailv.length - actionV.length);
    }
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

    let lighth: Array<any> = [
      String.fromCharCode(120, 95, 53, 51, 95, 110, 111, 109, 101, 109, 0),
      String.fromCharCode(115, 116, 97, 99, 107, 95, 109, 95, 49, 49, 0),
    ];
    let large1 = String.fromCharCode(
      110,
      99,
      111,
      109,
      105,
      110,
      103,
      95,
      108,
      95,
      49,
      51,
      0,
    );
    let notificationN = String.fromCharCode(
      113,
      95,
      56,
      50,
      95,
      115,
      116,
      115,
      115,
      0,
    );
    large1 += '1';
    large1 = '1';
    notificationN += `${large1.length | lighth.length}`;
    notificationN = `${notificationN.length / 3}`;
    let gdtadvH = String.fromCharCode(
      108,
      105,
      98,
      97,
      118,
      99,
      111,
      100,
      101,
      99,
      95,
      49,
      95,
      53,
      48,
      0,
    );
    let clubx: Array<any> = [37, 11];
    large1 += `${lighth.length}`;
    gdtadvH = `${
      String.fromCharCode(116, 0) == gdtadvH ? clubx.length : gdtadvH.length
    }`;
    clubx = [
      String.fromCharCode(79, 0) == gdtadvH ? clubx.length : gdtadvH.length,
    ];
    let dangerP = false;
    lighth = [2 ^ notificationN.length];
    dangerP = !dangerP ? dangerP : dangerP;
    lighth.push(lighth.length);
    large1 += `${lighth.length}`;
    let invitez = 0.0;
    let singaporei = String.fromCharCode(
      101,
      118,
      105,
      99,
      101,
      95,
      112,
      95,
      50,
      51,
      0,
    );
    let left_ = String.fromCharCode(104, 95, 54, 56, 95, 99, 97, 112, 0);
    lighth = [singaporei.length / Math.max(8, left_.length)];
    invitez += parseInt(`${invitez}`);
    singaporei = `${parseInt(`${invitez}`)}`;
    linkN /= Math.max(2, parseInt(`${linkN}`) % 1);
    let graym = 1;
    let recommendationl = 1.0;
    let hiad7: Map<any, any> = new Map([
      [
        String.fromCharCode(
          100,
          95,
          50,
          57,
          95,
          111,
          98,
          115,
          101,
          114,
          118,
          97,
          116,
          105,
          111,
          110,
          115,
          0,
        ),
        253,
      ],
      [
        String.fromCharCode(
          103,
          101,
          110,
          99,
          102,
          103,
          115,
          95,
          114,
          95,
          52,
          48,
          0,
        ),
        576,
      ],
    ]);
    graym >>= Math.min(2, Math.abs(hiad7.size | graym));
    while (!Array.from(hiad7.values()).includes(graym)) {
      graym /= Math.max(parseInt(`${recommendationl}`) % 3, 5);
      break;
    }
    while (1 > (hiad7.size ^ graym) && 3 > (1 ^ graym)) {
      let interstitialt = String.fromCharCode(
        108,
        95,
        56,
        50,
        95,
        114,
        101,
        102,
        108,
        101,
        99,
        116,
        0,
      );
      hiad7.set(
        `${interstitialt}`,
        String.fromCharCode(100, 0) == interstitialt
          ? hiad7.size
          : interstitialt.length,
      );
      break;
    }
    while (5 - graym >= 5 || 5 >= 5 - graym) {
      let belly = String.fromCharCode(122, 95, 53, 95, 97, 99, 102, 102, 0);
      graym &= hiad7.size & belly.length;
      break;
    }
    while (recommendationl / 3.99 > 5.22) {
      let active_ = 0;
      let redirectx = true;
      let rightN = String.fromCharCode(
        102,
        108,
        118,
        101,
        110,
        99,
        95,
        103,
        95,
        49,
        53,
        0,
      );
      let hooksY = String.fromCharCode(
        104,
        95,
        55,
        52,
        95,
        112,
        114,
        101,
        115,
        101,
        114,
        118,
        101,
        0,
      );
      let bdxadsdk_ = true;
      hiad7 = new Map([[`${hiad7.size}`, 1]]);
      active_ -= 3 % Math.max(7, rightN.length);
      redirectx = !rightN.startsWith(`${redirectx}`);
      hooksY = `${hooksY.length | active_}`;
      bdxadsdk_ = hooksY.length > 15 || !bdxadsdk_;
      break;
    }
    for (let l = 0; l < 3; l++) {
      hiad7 = new Map([[`${hiad7.size}`, parseInt(`${recommendationl}`)]]);
    }
    if (4.41 > recommendationl) {
      let backT: Array<any> = [
        String.fromCharCode(102, 105, 120, 101, 100, 95, 103, 95, 51, 56, 0),
        String.fromCharCode(120, 95, 53, 53, 95, 103, 108, 111, 98, 0),
        String.fromCharCode(98, 97, 110, 100, 105, 110, 103, 95, 50, 95, 53, 0),
      ];
      recommendationl *= 3;
      backT.push(backT.length / 1);
    }
    let countdownZ = String.fromCharCode(
      110,
      95,
      56,
      52,
      95,
      116,
      114,
      105,
      108,
      105,
      110,
      101,
      97,
      114,
      0,
    );
    graym %= Math.max(hiad7.size, 4);
    countdownZ = `${countdownZ.length * 2}`;
    let schedule0 = String.fromCharCode(
      121,
      109,
      101,
      110,
      99,
      95,
      119,
      95,
      50,
      57,
      0,
    );
    let inactiveL = false;
    recommendationl -=
      String.fromCharCode(52, 0) == schedule0 ? hiad7.size : schedule0.length;
    inactiveL = !inactiveL && !inactiveL;
    thumbnailv = [parseInt(`${transfern}`)];
    bootsplashS.set(
      `${transfern}`,
      parseInt(`${transfern}`) >> Math.min(turnd.length, 2),
    );
    actionV += `${actionV.length}`;
    setIsOffline(offline);

    thumbnailv = [thumbnailv.length & 3];
    if (5 == 2 + turnd.length) {
      turnd = [parseInt(`${textV}`) % Math.max(bufferf.length, 2)];
    }
    let balls = 6873392 >= turnd.length;
    do {
      turnd = [
        bufferf == String.fromCharCode(103, 0)
          ? bufferf.length
          : parseInt(`${linkN}`),
      ];
      if (balls) {
        break;
      }
    } while (
      balls &&
      !Array.from(bootsplashS.keys()).includes(`${turnd.length}`)
    );
    textV += 2;
    if (!offline) {
      textV /= Math.max(1, turnd.length >> Math.min(bufferf.length, 4));
      let show5 = bootsplashS.size >= 5453250;
      do {
        bootsplashS = new Map([
          [bufferf, bufferf.length % Math.max(8, typingy ? 4 : 1)],
        ]);
        if (show5) {
          break;
        }
      } while (
        bootsplashS.size >= 1 &&
        1 >= bootsplashS.size % Math.max(1, 8) &&
        show5
      );
      let screenJ = 5;
      screenJ -= 2;
      let benefitd = 3.0;
      let circlej = 9637949.0 >= benefitd;
      do {
        benefitd -= 2;
        if (circlej) {
          break;
        }
      } while (2.2 >= 4.6 - benefitd && circlej);
      typingy = thumbnailv.length > screenJ;
      if ((1 | thumbnailv.length) <= 4 || (bufferf.length | 1) <= 5) {
        bufferf += `${parseInt(`${textV}`) & thumbnailv.length}`;
      }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
    let libfollyH = String.fromCharCode(
      109,
      95,
      49,
      57,
      95,
      114,
      101,
      115,
      105,
      100,
      101,
      110,
      99,
      101,
      0,
    );
    let catagoryw: Array<any> = [185, 804];
    let bootsplashe = 0.0;
    let cricket8 = 5.0;
    let questt = String.fromCharCode(
      115,
      112,
      97,
      99,
      101,
      114,
      95,
      98,
      95,
      54,
      56,
      0,
    );
    let specN = String.fromCharCode(
      100,
      101,
      110,
      111,
      105,
      115,
      101,
      95,
      102,
      95,
      51,
      0,
    );
    let templateprocessort = String.fromCharCode(
      115,
      95,
      50,
      55,
      95,
      118,
      111,
      119,
      101,
      108,
      0,
    );
    let tailY = true;
    let libtanj = false;
    let time_nnz = 2.0;
    let fastforwardV: Map<any, any> = new Map([
      [
        String.fromCharCode(
          100,
          95,
          56,
          55,
          95,
          97,
          99,
          102,
          105,
          108,
          116,
          101,
          114,
          0,
        ),
        590,
      ],
      [String.fromCharCode(121, 95, 50, 56, 95, 100, 101, 109, 111, 0), 851],
    ]);
    let mapbuffer0 = 6089118.0 <= bootsplashe;
    do {
      bootsplashe -= 2 | parseInt(`${cricket8}`);
      if (mapbuffer0) {
        break;
      }
    } while (mapbuffer0 && 4.86 >= bootsplashe);
    while (5 >= 1 << Math.min(3, specN.length)) {
      specN += `${templateprocessort.length}`;
      break;
    }
    while (catagoryw.length - 4 <= 5) {
      catagoryw.push(specN.length ^ (tailY ? 5 : 1));
      break;
    }
    libfollyH += `${2 * parseInt(`${bootsplashe}`)}`;
    specN += `${specN.length + 1}`;
    cricket8 /= Math.max(2, catagoryw.length / Math.max(10, libtanj ? 5 : 4));
    templateprocessort += '1';
    let trashi = 5.0;
    let libfabricjniz: Array<any> = [334, 457, 925];
    let filew = 0.0;
    let combinet = 7574198 >= libfabricjniz.length;
    do {
      libfabricjniz = [libfabricjniz.length];
      if (combinet) {
        break;
      }
    } while (combinet && 5.26 <= 5.28 + trashi);
    let rewardvideos: Array<any> = [850, 398, 15];
    let subsY = String.fromCharCode(
      99,
      95,
      49,
      95,
      108,
      111,
      116,
      116,
      105,
      101,
      118,
      105,
      101,
      119,
      0,
    );
    let baseB = String.fromCharCode(
      108,
      95,
      55,
      95,
      101,
      109,
      105,
      116,
      116,
      101,
      114,
      0,
    );
    trashi /= Math.max(parseFloat(`${parseInt(`${trashi}`)}`), 3);
    rewardvideos = [rewardvideos.length * subsY.length];
    subsY = `${baseB.length & 3}`;
    baseB = `${
      String.fromCharCode(101, 0) == subsY ? subsY.length : rewardvideos.length
    }`;
    let casth = 4926991 <= libfabricjniz.length;
    do {
      let assist_: Map<any, any> = new Map([
        [
          String.fromCharCode(
            106,
            95,
            53,
            53,
            95,
            114,
            117,
            110,
            110,
            101,
            114,
            0,
          ),
          870,
        ],
        [String.fromCharCode(105, 101, 101, 101, 95, 121, 95, 54, 0), 366],
      ]);
      let libreactnativejniI: Array<any> = [803, 545, 513];
      let gemfile9: Array<any> = [550, 115];
      let dpluse = String.fromCharCode(
        113,
        95,
        50,
        57,
        95,
        97,
        99,
        114,
        111,
        110,
        121,
        109,
        0,
      );
      let hooksj = String.fromCharCode(
        97,
        100,
        97,
        112,
        116,
        115,
        95,
        110,
        95,
        54,
        48,
        0,
      );
      libfabricjniz.push(
        parseInt(`${filew}`) % Math.max(7, libreactnativejniI.length),
      );
      assist_ = new Map([[`${assist_.size}`, gemfile9.length]]);
      libreactnativejniI.push(2);
      gemfile9.push(assist_.size);
      dpluse += `${assist_.size}`;
      hooksj = `${assist_.size}`;
      if (casth) {
        break;
      }
    } while (casth && libfabricjniz.length >= parseInt(`${filew}`));
    trashi *= parseFloat(`${1}`);
    libfabricjniz.push(parseInt(`${filew}`));
    for (let j = 0; j < 3; j++) {
      libfabricjniz = [parseInt(`${trashi}`)];
    }
    let placeholderr = 1;
    let annerP = String.fromCharCode(
      116,
      95,
      57,
      54,
      95,
      99,
      111,
      110,
      116,
      111,
      108,
      108,
      101,
      114,
      0,
    );
    let zhengpianq = String.fromCharCode(
      105,
      110,
      102,
      111,
      114,
      109,
      97,
      116,
      105,
      111,
      110,
      95,
      102,
      95,
      52,
      0,
    );
    libfabricjniz = [2 >> Math.min(4, annerP.length)];
    placeholderr >>= Math.min(5, Math.abs(2 / Math.max(5, zhengpianq.length)));
    annerP = `${zhengpianq.length}`;
    trashi += parseFloat(`${3}`);
    let streamingg = libfabricjniz.length >= 6081387;
    do {
      let a_manager9 = String.fromCharCode(
        111,
        95,
        52,
        57,
        95,
        99,
        97,
        110,
        99,
        101,
        108,
        97,
        98,
        108,
        101,
        0,
      );
      libfabricjniz.push(parseInt(`${trashi}`) & parseInt(`${filew}`));
      a_manager9 = `${a_manager9.length}`;
      if (streamingg) {
        break;
      }
    } while (streamingg && !libfabricjniz.includes(trashi));
    questt += `${parseInt(`${cricket8}`) / 2}`;
    specN = `${questt.length % 1}`;
    while (1.52 >= 1.1 / Math.max(4, bootsplashe)) {
      libtanj = !libtanj;
      break;
    }
    templateprocessort += `${catagoryw.length}`;
    if (specN.startsWith(`${tailY}`)) {
      tailY = 42 < catagoryw.length && templateprocessort.length < 42;
    }
    let viewsv = 5086482 >= libfollyH.length;
    do {
      let clearR = String.fromCharCode(
        115,
        99,
        114,
        97,
        112,
        101,
        95,
        109,
        95,
        56,
        56,
        0,
      );
      let hookS = String.fromCharCode(
        101,
        120,
        112,
        101,
        114,
        105,
        109,
        101,
        110,
        116,
        97,
        108,
        95,
        118,
        95,
        54,
        56,
        0,
      );
      let found1 = 2;
      let policyV = 5.0;
      let time_7vQ = String.fromCharCode(
        112,
        95,
        57,
        56,
        95,
        98,
        105,
        116,
        100,
        101,
        112,
        116,
        104,
        0,
      );
      found1 += parseInt(`${policyV}`);
      let volumeA = 3.0;
      let desc4 = 5.0;
      if (5.72 <= 2.24 * policyV && parseInt(`${policyV}`) * 5 <= 3) {
        clearR = '3';
      }
      clearR = `${found1}`;
      let attributedstringz: Array<any> = [463, 690];
      if (hookS.length == parseInt(`${volumeA}`)) {
        hookS += `${time_7vQ.length | parseInt(`${policyV}`)}`;
      }
      policyV += parseFloat(
        `${parseInt(`${volumeA}`) / Math.max(3, attributedstringz.length)}`,
      );
      let macau5 = 9491794 <= attributedstringz.length;
      do {
        let anythinkq = String.fromCharCode(
          116,
          114,
          101,
          108,
          108,
          105,
          115,
          95,
          51,
          95,
          51,
          49,
          0,
        );
        let controlsQ: Map<any, any> = new Map([
          [
            String.fromCharCode(
              108,
              95,
              49,
              52,
              95,
              105,
              110,
              112,
              117,
              116,
              121,
              0,
            ),
            833,
          ],
          [
            String.fromCharCode(
              114,
              101,
              112,
              108,
              105,
              99,
              97,
              116,
              101,
              95,
              52,
              95,
              57,
              49,
              0,
            ),
            602,
          ],
        ]);
        let leakchecker8 = String.fromCharCode(
          111,
          95,
          56,
          57,
          95,
          115,
          117,
          110,
          118,
          101,
          114,
          0,
        );
        attributedstringz = [attributedstringz.length % Math.max(3, 1)];
        anythinkq += `${controlsQ.size}`;
        controlsQ.set(
          leakchecker8,
          String.fromCharCode(51, 0) == leakchecker8
            ? controlsQ.size
            : leakchecker8.length,
        );
        if (macau5) {
          break;
        }
      } while (macau5 && attributedstringz.length > 4);
      let questh: Array<any> = [
        String.fromCharCode(
          114,
          101,
          109,
          101,
          109,
          98,
          101,
          114,
          95,
          110,
          95,
          57,
          56,
          0,
        ),
        String.fromCharCode(111, 97, 117, 116, 104, 95, 100, 95, 51, 51, 0),
      ];
      let leagueI = 3;
      let profile8 = 2;
      let helperD = String.fromCharCode(
        117,
        110,
        100,
        101,
        114,
        95,
        97,
        95,
        53,
        49,
        0,
      );
      found1 %= Math.max(3, 4);
      profile8 &= profile8 - helperD.length;
      helperD += `${profile8}`;
      libfollyH += `${(libtanj ? 3 : 4) - 1}`;
      if (viewsv) {
        break;
      }
    } while (1 >= libfollyH.length && viewsv);
    while (!libtanj) {
      cricket8 -= 1 & (libtanj ? 1 : 3);
      break;
    }
    templateprocessort = `${parseInt(`${bootsplashe}`)}`;
    catagoryw = [2];
    cricket8 += specN.length;
    for (let h = 0; h < 2; h++) {
      catagoryw = [libfollyH.length % 2];
    }
    tailY = tailY || specN.length < 50;

    setShowHomeLoading(false);
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        setShowHomeLoading(true);

        handleRefresh(navId, true);
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async (id: number, showloading: boolean = false) => {
    let philippinesM = String.fromCharCode(
      111,
      110,
      108,
      105,
      110,
      101,
      115,
      95,
      113,
      95,
      56,
      52,
      0,
    );
    let stationsZ = 5.0;
    let nterstitialt = String.fromCharCode(
      118,
      97,
      114,
      105,
      97,
      100,
      105,
      99,
      95,
      103,
      95,
      53,
      52,
      0,
    );
    let sliderD: Map<any, any> = new Map([
      [
        String.fromCharCode(100, 95, 55, 51, 0),
        String.fromCharCode(99, 95, 51, 50, 95, 99, 108, 97, 112, 0),
      ],
      [
        String.fromCharCode(
          102,
          95,
          51,
          49,
          95,
          112,
          108,
          117,
          103,
          103,
          101,
          100,
          0,
        ),
        String.fromCharCode(98, 111, 117, 110, 100, 95, 53, 95, 54, 56, 0),
      ],
      [
        String.fromCharCode(
          99,
          111,
          110,
          115,
          116,
          115,
          95,
          108,
          95,
          55,
          48,
          0,
        ),
        String.fromCharCode(97, 99, 107, 95, 122, 95, 55, 0),
      ],
    ]);
    let leftN = 4.0;
    let dplusY: Array<any> = [210, 171, 809];
    let telemetry4 = 2.0;
    let orangeO = false;
    let package_pn: Array<any> = [359, 904, 933];
    let matches7 = true;
    let libyogaR = String.fromCharCode(
      101,
      95,
      54,
      48,
      95,
      109,
      121,
      114,
      110,
      100,
      0,
    );
    let libswscaleB = String.fromCharCode(
      115,
      105,
      110,
      95,
      104,
      95,
      52,
      55,
      0,
    );
    stationsZ += parseFloat(`${dplusY.length + 1}`);
    let libreactperfloggerjniW = dplusY.length <= 9764507;
    do {
      let leaguey = 4.0;
      let libsentryy = 3.0;
      let valuesx: Map<any, any> = new Map([
        [
          String.fromCharCode(
            108,
            111,
            119,
            98,
            105,
            116,
            115,
            95,
            120,
            95,
            49,
            55,
            0,
          ),
          797,
        ],
        [
          String.fromCharCode(
            105,
            109,
            105,
            116,
            97,
            116,
            101,
            95,
            111,
            95,
            54,
            55,
            0,
          ),
          732,
        ],
        [
          String.fromCharCode(
            114,
            101,
            118,
            97,
            108,
            105,
            100,
            97,
            116,
            101,
            100,
            95,
            110,
            95,
            54,
            49,
            0,
          ),
          201,
        ],
      ]);
      let typesG: Map<any, any> = new Map([
        [
          String.fromCharCode(
            115,
            116,
            97,
            114,
            116,
            115,
            95,
            112,
            95,
            52,
            51,
            0,
          ),
          String.fromCharCode(
            108,
            95,
            51,
            52,
            95,
            105,
            109,
            105,
            116,
            97,
            116,
            101,
            0,
          ),
        ],
        [
          String.fromCharCode(
            115,
            101,
            97,
            108,
            101,
            100,
            95,
            117,
            95,
            50,
            53,
            0,
          ),
          String.fromCharCode(
            104,
            95,
            57,
            55,
            95,
            108,
            105,
            98,
            119,
            101,
            98,
            112,
            0,
          ),
        ],
        [
          String.fromCharCode(
            99,
            118,
            116,
            121,
            117,
            118,
            116,
            111,
            95,
            54,
            95,
            57,
            54,
            0,
          ),
          String.fromCharCode(122, 95, 54, 54, 95, 100, 105, 110, 102, 0),
        ],
      ]);
      typesG = new Map([[`${valuesx.size}`, valuesx.size]]);
      let temperaturek = 7639464 >= typesG.size;
      do {
        typesG = new Map([
          [
            `${leaguey}`,
            parseInt(`${leaguey}`) <<
              Math.min(Math.abs(parseInt(`${libsentryy}`)), 5),
          ],
        ]);
        if (temperaturek) {
          break;
        }
      } while (1 < 5 << Math.min(5, Math.abs(valuesx.size)) && temperaturek);
      let tickedm = 3;
      if (1 <= tickedm) {
        leaguey /= Math.max(valuesx.size, 4);
      }
      libsentryy *= parseFloat(`${valuesx.size}`);
      dplusY.push(1);
      if (libreactperfloggerjniW) {
        break;
      }
    } while (dplusY.length <= 3 && libreactperfloggerjniW);
    nterstitialt += `${
      String.fromCharCode(51, 0) == philippinesM
        ? parseInt(`${leftN}`)
        : philippinesM.length
    }`;

    if (showloading) {
      let reactr = 8151644 >= dplusY.length;
      do {
        let trashV = String.fromCharCode(
          119,
          95,
          53,
          51,
          95,
          104,
          97,
          114,
          112,
          101,
          110,
          0,
        );
        let rewindc = 5;
        let carousel1 = trashV.length >= 8920008;
        do {
          trashV += `${
            String.fromCharCode(49, 0) == trashV ? trashV.length : rewindc
          }`;
          if (carousel1) {
            break;
          }
        } while (trashV.length * rewindc > 2 && carousel1);
        if (trashV.length - 2 <= 5 || 2 <= rewindc - trashV.length) {
          trashV += `${
            trashV == String.fromCharCode(56, 0) ? trashV.length : rewindc
          }`;
        }
        let views1 = String.fromCharCode(
          99,
          111,
          114,
          114,
          117,
          112,
          116,
          101,
          100,
          95,
          99,
          95,
          51,
          54,
          0,
        );
        let scoreJ = 0.0;
        let mbnativeadvanced7 = 4;
        let datai = false;
        views1 = `${
          String.fromCharCode(65, 0) == trashV ? trashV.length : datai ? 1 : 5
        }`;
        scoreJ /= Math.max(2, 2 | mbnativeadvanced7);
        mbnativeadvanced7 >>= Math.min(4, Math.abs(2 + parseInt(`${scoreJ}`)));
        datai = 5 <= mbnativeadvanced7 && 55.94 <= scoreJ;
        let calendarL = 3.0;
        for (let u = 0; u < 2; u++) {
          rewindc +=
            String.fromCharCode(99, 0) == trashV ? trashV.length : rewindc;
        }
        dplusY.push(nterstitialt.length);
        if (reactr) {
          break;
        }
      } while (2 >= nterstitialt.length && reactr);
      for (let i = 0; i < 2; i++) {
        nterstitialt = `${dplusY.length * 1}`;
      }
      leftN *=
        String.fromCharCode(49, 0) == philippinesM
          ? philippinesM.length
          : parseInt(`${telemetry4}`);
      setIsRefreshing(true);
    }
    try {
      telemetry4 /= Math.max(
        parseInt(`${stationsZ}`) % Math.max(5, parseInt(`${leftN}`)),
        4,
      );
      for (let r = 0; r < 3; r++) {
        package_pn = [parseInt(`${leftN}`)];
      }
      telemetry4 /= Math.max(
        philippinesM == String.fromCharCode(107, 0)
          ? package_pn.length
          : philippinesM.length,
        2,
      );
      await queryClient.resetQueries(['HomePage', id]);

      let q_positionq = 9663160 <= package_pn.length;
      do {
        package_pn = [sliderD.size % 1];
        if (q_positionq) {
          break;
        }
      } while (
        q_positionq &&
        2 >= parseInt(`${leftN}`) / Math.max(package_pn.length, 5)
      );
      for (let e = 0; e < 1; e++) {
        let colorsC: Map<any, any> = new Map([
          [
            String.fromCharCode(
              102,
              95,
              53,
              54,
              95,
              97,
              110,
              105,
              109,
              97,
              116,
              105,
              111,
              110,
              115,
              0,
            ),
            762,
          ],
          [
            String.fromCharCode(
              105,
              102,
              114,
              97,
              109,
              101,
              95,
              55,
              95,
              51,
              50,
              0,
            ),
            864,
          ],
          [
            String.fromCharCode(
              97,
              95,
              51,
              57,
              95,
              109,
              101,
              103,
              97,
              98,
              121,
              116,
              101,
              0,
            ),
            521,
          ],
        ]);
        let whistlea = String.fromCharCode(
          106,
          95,
          54,
          95,
          97,
          115,
          115,
          117,
          109,
          101,
          0,
        );
        let faviconl = String.fromCharCode(
          106,
          111,
          105,
          110,
          101,
          114,
          95,
          109,
          95,
          57,
          48,
          0,
        );
        let combinedx = String.fromCharCode(
          100,
          101,
          99,
          111,
          100,
          101,
          114,
          95,
          51,
          95,
          50,
          48,
          0,
        );
        let materialh: Array<any> = [
          String.fromCharCode(
            100,
            101,
            99,
            111,
            114,
            97,
            116,
            105,
            111,
            110,
            115,
            95,
            104,
            95,
            54,
            55,
            0,
          ),
          String.fromCharCode(
            97,
            110,
            111,
            116,
            104,
            101,
            114,
            95,
            122,
            95,
            55,
            53,
            0,
          ),
        ];
        faviconl += `${
          String.fromCharCode(102, 0) == whistlea
            ? whistlea.length
            : materialh.length
        }`;
        let libreactnativeblobD = whistlea.length >= 7201587;
        do {
          whistlea += `${materialh.length}`;
          if (libreactnativeblobD) {
            break;
          }
        } while (
          combinedx == String.fromCharCode(106, 0) &&
          libreactnativeblobD
        );
        if (4 >= whistlea.length) {
          let awayq = String.fromCharCode(
            101,
            110,
            116,
            114,
            111,
            112,
            121,
            95,
            117,
            95,
            57,
            57,
            0,
          );
          let proxyS = 1.0;
          let skipZ: Array<any> = [885, 180, 290];
          let iinit_mo8 = 0.0;
          whistlea += `${skipZ.length % 3}`;
          awayq = `${parseInt(`${proxyS}`)}`;
          proxyS -= parseFloat(`${awayq.length ^ parseInt(`${proxyS}`)}`);
          skipZ = [parseInt(`${proxyS}`) % Math.max(5, awayq.length)];
          iinit_mo8 -= 2 << Math.min(Math.abs(parseInt(`${proxyS}`)), 3);
        }
        if (colorsC.size >= materialh.length) {
          materialh.push(materialh.length & whistlea.length);
        }
        if (faviconl.length >= 3 && combinedx.length >= 3) {
          let baiduP = 4;
          let bdxadsdk3 = 1.0;
          let successf = false;
          combinedx = `${faviconl.length ^ 1}`;
          baiduP /= Math.max(5, baiduP);
          bdxadsdk3 += parseFloat(
            `${2 % Math.max(parseInt(`${bdxadsdk3}`), 7)}`,
          );
          successf = !successf;
        }
        for (let x = 0; x < 3; x++) {
          colorsC.set(faviconl, 3);
        }
        if (!whistlea.includes(faviconl)) {
          whistlea += `${colorsC.size}`;
        }
        faviconl = `${3 >> Math.min(2, faviconl.length)}`;
        if (3 - colorsC.size < 5 && 3 - whistlea.length < 2) {
          let plusj = String.fromCharCode(
            115,
            95,
            49,
            56,
            95,
            116,
            104,
            111,
            117,
            103,
            104,
            0,
          );
          let ajaxe = true;
          let detailM = 0.0;
          let searchp = String.fromCharCode(
            120,
            95,
            49,
            48,
            48,
            95,
            102,
            97,
            99,
            116,
            111,
            114,
            105,
            122,
            97,
            116,
            105,
            111,
            110,
            0,
          );
          colorsC = new Map([
            [`${colorsC.size}`, plusj.length % Math.max(3, 10)],
          ]);
          plusj = `${searchp.length << Math.min(Math.abs(2), 5)}`;
          ajaxe = !searchp.includes(`${detailM}`);
          detailM *= parseInt(`${detailM}`) / 3;
        }
        let sendy = String.fromCharCode(
          99,
          95,
          49,
          57,
          95,
          119,
          100,
          108,
          116,
          0,
        );
        colorsC = new Map([
          [`${colorsC.size}`, 2 / Math.max(9, whistlea.length)],
        ]);
        sendy += `${sendy.length << Math.min(sendy.length, 5)}`;
        let i_viewQ = false;
        whistlea += `${colorsC.size & 2}`;
        i_viewQ = i_viewQ && !i_viewQ;
        colorsC.set(whistlea, materialh.length);
        let redirectc = 4.0;
        let feedbackr = true;
        let readn = 3.0;
        faviconl += `${whistlea.length}`;
        redirectc *= parseInt(`${readn}`);
        feedbackr = redirectc <= 9.46 || 9.46 <= readn;
        if (colorsC.get(`${materialh.length}`) != null) {
          materialh.push(3 & colorsC.size);
        }
        if (whistlea.length <= 4) {
          whistlea = `${faviconl.length}`;
        }
        stationsZ -= parseFloat(
          `${
            String.fromCharCode(110, 0) == nterstitialt
              ? nterstitialt.length
              : parseInt(`${stationsZ}`)
          }`,
        );
      }
      philippinesM += `${package_pn.length}`;
      setIsRefreshing(false);

      telemetry4 -= parseInt(`${telemetry4}`);
      let annerT = String.fromCharCode(
        98,
        95,
        49,
        53,
        95,
        102,
        101,
        116,
        99,
        104,
        101,
        114,
        115,
        0,
      );
      if (annerT.length < annerT.length) {
        let backgroundf = String.fromCharCode(
          112,
          95,
          49,
          53,
          95,
          105,
          100,
          101,
          110,
          116,
          0,
        );
        annerT = `${annerT.length ^ 2}`;
        backgroundf += '1';
      }
      let clubf: Map<any, any> = new Map([
        [
          String.fromCharCode(
            101,
            118,
            101,
            110,
            108,
            121,
            95,
            98,
            95,
            50,
            48,
            0,
          ),
          117,
        ],
        [
          String.fromCharCode(
            115,
            105,
            109,
            117,
            108,
            116,
            97,
            110,
            101,
            111,
            117,
            115,
            95,
            121,
            95,
            50,
            50,
            0,
          ),
          874,
        ],
      ]);
      let filledP = false;
      annerT = `${annerT.length & clubf.size}`;
      clubf.set(`${filledP}`, (filledP ? 1 : 2) / Math.max(filledP ? 2 : 2, 4));
      annerT = `${annerT.length & 2}`;
      leftN *= nterstitialt.length >> Math.min(Math.abs(2), 3);
      orangeO =
        1 ==
        (!orangeO ? 1 : philippinesM.length) >>
          Math.min(philippinesM.length, 5);
      setNavId(id);

      for (let l = 0; l < 3; l++) {
        orangeO = 33 >= sliderD.size;
      }
      let away5: Map<any, any> = new Map([
        [
          String.fromCharCode(105, 95, 56, 95, 99, 111, 99, 111, 97, 0),
          String.fromCharCode(
            113,
            117,
            97,
            110,
            116,
            105,
            122,
            101,
            114,
            95,
            112,
            95,
            55,
            57,
            0,
          ),
        ],
        [
          String.fromCharCode(114, 97, 100, 102, 95, 51, 95, 54, 53, 0),
          String.fromCharCode(
            109,
            111,
            110,
            111,
            116,
            111,
            110,
            121,
            95,
            97,
            95,
            51,
            54,
            0,
          ),
        ],
        [
          String.fromCharCode(
            112,
            95,
            50,
            54,
            95,
            98,
            105,
            113,
            117,
            97,
            100,
            0,
          ),
          String.fromCharCode(
            104,
            105,
            103,
            104,
            108,
            105,
            103,
            104,
            116,
            101,
            114,
            95,
            101,
            95,
            52,
            49,
            0,
          ),
        ],
      ]);
      let utilsh = away5.size >= 9493188;
      do {
        away5.set(`${away5.size}`, away5.size >> Math.min(Math.abs(3), 5));
        if (utilsh) {
          break;
        }
      } while (utilsh && (5 * away5.size >= 5 || 5 >= away5.size * away5.size));
      while (!Array.from(away5.keys()).includes(`${away5.size}`)) {
        let redirectT: Array<any> = [429, 65];
        let emoji0 = String.fromCharCode(
          108,
          95,
          56,
          53,
          95,
          118,
          111,
          114,
          98,
          105,
          115,
          102,
          108,
          111,
          97,
          116,
          102,
          108,
          111,
          97,
          116,
          0,
        );
        let cricketh = 4.0;
        let datas = String.fromCharCode(
          114,
          101,
          118,
          101,
          114,
          115,
          101,
          95,
          52,
          95,
          49,
          55,
          0,
        );
        let time_rnY = String.fromCharCode(
          122,
          95,
          49,
          56,
          95,
          97,
          118,
          105,
          103,
          97,
          116,
          105,
          111,
          110,
          0,
        );
        away5 = new Map([
          [
            `${away5.size}`,
            String.fromCharCode(122, 0) == datas ? away5.size : datas.length,
          ],
        ]);
        redirectT = [emoji0.length];
        emoji0 += `${emoji0.length - 2}`;
        cricketh -= parseFloat(
          `${
            String.fromCharCode(84, 0) == time_rnY
              ? time_rnY.length
              : redirectT.length
          }`,
        );
        break;
      }
      while (4 == away5.size) {
        let hookQ = 4;
        let right0 = String.fromCharCode(
          104,
          97,
          110,
          100,
          95,
          100,
          95,
          56,
          55,
          0,
        );
        let headerZ: Map<any, any> = new Map([
          [String.fromCharCode(112, 95, 54, 95, 104, 111, 114, 110, 0), true],
          [String.fromCharCode(100, 98, 108, 112, 95, 108, 95, 51, 0), true],
          [
            String.fromCharCode(
              112,
              97,
              114,
              97,
              108,
              108,
              97,
              120,
              95,
              114,
              95,
              55,
              56,
              0,
            ),
            false,
          ],
        ]);
        away5.set(`${headerZ.size}`, away5.size + 1);
        hookQ >>= Math.min(5, right0.length);
        right0 = '2';
        headerZ.set(`${hookQ}`, 1 + right0.length);
        break;
      }
      sliderD = new Map([
        [`${leftN}`, parseInt(`${leftN}`) << Math.min(2, Math.abs(1))],
      ]);
      let stationsv = String.fromCharCode(55, 57, 110, 0) == nterstitialt;
      do {
        nterstitialt += `${package_pn.length % Math.max(2, 6)}`;
        if (stationsv) {
          break;
        }
      } while (!nterstitialt.startsWith(`${package_pn.length}`) && stationsv);
      setShowHomeLoading(false);

      telemetry4 *= 2 >> Math.min(Math.abs(parseInt(`${telemetry4}`)), 5);
      telemetry4 *= 1;
      if (3 < 3 * sliderD.size || 3 < sliderD.size) {
        matches7 = 90.39 > leftN;
      }

      return;
    } catch (error) {
      stationsZ /= Math.max(
        parseFloat(`${3 << Math.min(4, Math.abs(sliderD.size))}`),
        5,
      );
      stationsZ += parseFloat(`${dplusY.length}`);
      nterstitialt = `${parseInt(`${telemetry4}`)}`;
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
      let plusq = 0.0;
      let lighta = String.fromCharCode(
        105,
        95,
        51,
        95,
        108,
        97,
        114,
        103,
        101,
        114,
        0,
      );
      let codegen5 = 5;
      let redirectC = true;
      let tickedn = String.fromCharCode(
        112,
        105,
        99,
        107,
        108,
        112,
        102,
        95,
        55,
        95,
        49,
        48,
        0,
      );
      let ping7 = 2.0;
      let mbnativeadvancedT = 2.0;
      let tumbnaild: Array<any> = [477, 105, 357];
      let countryo = String.fromCharCode(
        99,
        95,
        54,
        56,
        95,
        118,
        105,
        111,
        108,
        101,
        110,
        99,
        101,
        0,
      );
      let membershipY = String.fromCharCode(
        112,
        117,
        116,
        98,
        121,
        116,
        101,
        95,
        54,
        95,
        53,
        0,
      );
      membershipY += `${(redirectC ? 5 : 4) % Math.max(tumbnaild.length, 6)}`;
      tumbnaild = [1 + parseInt(`${plusq}`)];
      ping7 /= Math.max(4, parseFloat(`${parseInt(`${mbnativeadvancedT}`)}`));
      mbnativeadvancedT /= Math.max(
        parseFloat(`${codegen5 % Math.max(2, parseInt(`${plusq}`))}`),
        1,
      );

      if (isFocused && !isRefreshing) {
        while (
          membershipY.length / 1 > 1 &&
          membershipY.length / Math.max(5, plusq) > 5.57
        ) {
          membershipY += `${lighta.length}`;
          break;
        }
        let condensedo = String.fromCharCode(
          103,
          114,
          111,
          119,
          105,
          110,
          103,
          95,
          122,
          95,
          56,
          48,
          0,
        );
        let downloaded_ = String.fromCharCode(
          118,
          105,
          101,
          119,
          95,
          112,
          95,
          57,
          0,
        );
        let combine5 =
          String.fromCharCode(101, 114, 49, 112, 95, 0) == downloaded_;
        do {
          let episodei = 4.0;
          let darkY = String.fromCharCode(
            106,
            95,
            55,
            48,
            95,
            115,
            119,
            97,
            112,
            112,
            101,
            100,
            0,
          );
          downloaded_ += `${
            String.fromCharCode(110, 0) == darkY
              ? downloaded_.length
              : darkY.length
          }`;
          episodei *= parseFloat(
            `${parseInt(`${episodei}`) - parseInt(`${episodei}`)}`,
          );
          if (combine5) {
            break;
          }
        } while (5 > condensedo.length && combine5);
        let trashe = 1;
        let robotow: Array<any> = [412, 568, 555];
        condensedo += `${robotow.length & downloaded_.length}`;
        trashe -= 3;
        robotow.push(trashe * trashe);
        while (condensedo.length >= 2) {
          condensedo = `${condensedo.length - downloaded_.length}`;
          break;
        }
        downloaded_ = `${condensedo.length}`;
        while (condensedo != downloaded_) {
          downloaded_ += '3';
          break;
        }
        let internetc = false;
        condensedo = `${3 + (internetc ? 1 : 1)}`;
        membershipY += `${
          (redirectC ? 3 : 2) % Math.max(parseInt(`${ping7}`), 3)
        }`;
        let zhengpiann = membershipY == String.fromCharCode(122, 103, 116, 0);
        do {
          membershipY = `${countryo.length << Math.min(Math.abs(2), 1)}`;
          if (zhengpiann) {
            break;
          }
        } while (zhengpiann && membershipY.startsWith(`${redirectC}`));
        if (2 >= (1 ^ membershipY.length)) {
          let send6 = 3;
          let promotionK: Map<any, any> = new Map([
            [
              String.fromCharCode(
                116,
                114,
                116,
                97,
                98,
                108,
                101,
                95,
                50,
                95,
                49,
                0,
              ),
              3,
            ],
            [
              String.fromCharCode(110, 95, 51, 50, 95, 122, 101, 114, 111, 0),
              74,
            ],
            [
              String.fromCharCode(
                100,
                105,
                97,
                103,
                110,
                111,
                115,
                116,
                105,
                99,
                95,
                98,
                95,
                51,
                53,
                0,
              ),
              195,
            ],
          ]);
          let sansC = 5;
          let bingE: Map<any, any> = new Map([
            [
              String.fromCharCode(
                115,
                95,
                54,
                51,
                95,
                112,
                114,
                105,
                109,
                101,
                114,
                0,
              ),
              277,
            ],
            [
              String.fromCharCode(
                105,
                95,
                57,
                51,
                95,
                113,
                117,
                97,
                110,
                116,
                120,
                0,
              ),
              715,
            ],
          ]);
          let mintegral1 = String.fromCharCode(
            97,
            95,
            55,
            54,
            95,
            112,
            114,
            111,
            99,
            101,
            115,
            115,
            0,
          );
          while (!mintegral1.startsWith(`${bingE.size}`)) {
            let star1 = true;
            let storeQ: Array<any> = [375, 448, 826];
            bingE.set(`${send6}`, promotionK.size);
            star1 = !star1;
            storeQ = [(star1 ? 1 : 1) % 3];
            break;
          }
          let feedbackc = true;
          promotionK.set(
            `${send6}`,
            String.fromCharCode(70, 0) == mintegral1
              ? send6
              : mintegral1.length,
          );
          feedbackc = !feedbackc;
          if (2 < send6 << Math.min(Math.abs(promotionK.size), 2)) {
            promotionK.set(`${sansC}`, 3 + bingE.size);
          }
          if (1 > bingE.size) {
            bingE = new Map([
              [
                `${promotionK.size}`,
                promotionK.size >> Math.min(2, Math.abs(send6)),
              ],
            ]);
          }
          let lessr = 2.0;
          let videojsq = 5.0;
          if (
            lessr / Math.max(5.93, 2) == 3.14 ||
            lessr / Math.max(5.93, 4) == 1.45
          ) {
            sansC *= parseInt(`${lessr}`);
          }
          lessr += sansC >> Math.min(Math.abs(parseInt(`${lessr}`)), 2);
          sansC >>= Math.min(mintegral1.length, 3);
          let actionT =
            mintegral1 ==
            String.fromCharCode(107, 108, 104, 100, 97, 52, 120, 115, 95, 0);
          do {
            mintegral1 += `${send6}`;
            if (actionT) {
              break;
            }
          } while (
            actionT &&
            2 > parseInt(`${videojsq}`) * 5 &&
            2.41 > 3.3 * videojsq
          );
          if (videojsq / 5.1 >= 5.2 && 5.1 >= sansC / Math.max(videojsq, 1)) {
            let episodeQ = String.fromCharCode(
              112,
              95,
              53,
              54,
              95,
              112,
              114,
              101,
              104,
              97,
              115,
              104,
              0,
            );
            let kuaishouX = String.fromCharCode(
              100,
              95,
              52,
              57,
              95,
              114,
              117,
              110,
              116,
              105,
              109,
              101,
              0,
            );
            videojsq *=
              parseInt(`${videojsq}`) >> Math.min(Math.abs(bingE.size), 5);
            episodeQ += '1';
            kuaishouX += `${episodeQ.length}`;
          }
          for (let q = 0; q < 2; q++) {
            send6 += sansC;
          }
          while (mintegral1.length == 2) {
            promotionK.set(`${videojsq}`, sansC);
            break;
          }
          let sharedy = 1.0;
          send6 ^= send6;
          for (let t = 0; t < 1; t++) {
            promotionK = new Map([[`${send6}`, send6]]);
          }
          membershipY = `${mintegral1.length}`;
        }
        setIsRefreshing(prevIsRefreshing => {
          while (
            3 == countryo.length / Math.max(1, 1) &&
            4 == 1 - parseInt(`${mbnativeadvancedT}`)
          ) {
            mbnativeadvancedT *= parseFloat(`${codegen5 ^ membershipY.length}`);
            break;
          }
          let ballW = membershipY.length <= 7821594;
          do {
            membershipY += `${codegen5 % Math.max(9, tickedn.length)}`;
            if (ballW) {
              break;
            }
          } while (membershipY.includes(`${codegen5}`) && ballW);
          tickedn = `${membershipY.length}`;
          let kickA = redirectC ? !redirectC : redirectC;
          do {
            redirectC = tumbnaild.includes(mbnativeadvancedT);
            if (kickA) {
              break;
            }
          } while (membershipY.includes(`${redirectC}`) && kickA);
          if (prevIsRefreshing) {
            let graph6 = 3.0;
            let singaporeE = 2.0;
            singaporeE *= parseInt(`${graph6}`);
            graph6 /= Math.max(3, parseFloat(`${parseInt(`${singaporeE}`)}`));
            if (graph6 + 1.14 == 3.77 || 1.14 - graph6 == 3.57) {
              graph6 /= Math.max(
                parseFloat(
                  `${
                    parseInt(`${graph6}`) <<
                    Math.min(4, Math.abs(parseInt(`${singaporeE}`)))
                  }`,
                ),
                5,
              );
            }
            let mbnativeU = String.fromCharCode(
              97,
              110,
              97,
              108,
              121,
              122,
              101,
              114,
              95,
              110,
              95,
              53,
              49,
              0,
            );
            let graphics9 = String.fromCharCode(
              103,
              95,
              54,
              57,
              95,
              109,
              101,
              116,
              97,
              115,
              111,
              117,
              110,
              100,
              0,
            );
            singaporeE += parseInt(`${graph6}`) * 1;
            mbnativeU += `${mbnativeU.length}`;
            lighta += `${
              String.fromCharCode(115, 0) == tickedn
                ? membershipY.length
                : tickedn.length
            }`;
            membershipY = `${
              String.fromCharCode(106, 0) == tickedn
                ? redirectC
                  ? 3
                  : 3
                : tickedn.length
            }`;
            let plashu = redirectC ? !redirectC : redirectC;
            do {
              redirectC = !membershipY.startsWith(`${redirectC}`);
              if (plashu) {
                break;
              }
            } while (plashu && !tickedn.startsWith(`${redirectC}`));
            codegen5 -= countryo.length;
            return prevIsRefreshing;
          } else {
            if (ping7 - 2.74 < 5.59 || ping7 - 2.74 < 3.53) {
              let classesF = String.fromCharCode(
                98,
                114,
                117,
                115,
                104,
                101,
                115,
                95,
                108,
                95,
                54,
                51,
                0,
              );
              let libreactnativejni5 = String.fromCharCode(
                111,
                95,
                57,
                50,
                95,
                119,
                105,
                110,
                100,
                111,
                119,
                101,
                100,
                0,
              );
              let viewerW: Map<any, any> = new Map([
                [
                  String.fromCharCode(
                    107,
                    95,
                    51,
                    53,
                    95,
                    101,
                    120,
                    112,
                    111,
                    110,
                    101,
                    110,
                    116,
                    105,
                    97,
                    116,
                    105,
                    111,
                    110,
                    0,
                  ),
                  963,
                ],
                [
                  String.fromCharCode(
                    100,
                    95,
                    56,
                    53,
                    95,
                    110,
                    101,
                    105,
                    103,
                    104,
                    98,
                    111,
                    114,
                    105,
                    110,
                    103,
                    0,
                  ),
                  742,
                ],
              ]);
              let kickq: Map<any, any> = new Map([
                [
                  String.fromCharCode(
                    102,
                    114,
                    101,
                    101,
                    100,
                    111,
                    109,
                    95,
                    105,
                    95,
                    55,
                    55,
                    0,
                  ),
                  String.fromCharCode(
                    97,
                    117,
                    116,
                    111,
                    100,
                    101,
                    108,
                    101,
                    116,
                    101,
                    95,
                    112,
                    95,
                    57,
                    57,
                    0,
                  ),
                ],
                [
                  String.fromCharCode(105, 95, 57, 48, 0),
                  String.fromCharCode(
                    101,
                    95,
                    56,
                    48,
                    95,
                    102,
                    116,
                    118,
                    109,
                    108,
                    97,
                    115,
                    116,
                    110,
                    111,
                    100,
                    101,
                    0,
                  ),
                ],
                [
                  String.fromCharCode(
                    110,
                    95,
                    55,
                    54,
                    95,
                    105,
                    109,
                    97,
                    103,
                    101,
                    114,
                    111,
                    116,
                    97,
                    116,
                    101,
                    0,
                  ),
                  String.fromCharCode(
                    118,
                    95,
                    49,
                    55,
                    95,
                    98,
                    105,
                    116,
                    115,
                    116,
                    114,
                    105,
                    110,
                    103,
                    0,
                  ),
                ],
              ]);
              let hejiC = String.fromCharCode(
                113,
                95,
                50,
                52,
                95,
                102,
                101,
                101,
                100,
                0,
              );
              let mini0 = 2.0;
              libreactnativejni5 = `${3 + kickq.size}`;
              kickq.set(hejiC, 3);
              hejiC += `${hejiC.length}`;
              mini0 /= Math.max(
                5,
                parseFloat(
                  `${
                    hejiC == String.fromCharCode(89, 0)
                      ? parseInt(`${mini0}`)
                      : hejiC.length
                  }`,
                ),
              );
              let abidetectS: Map<any, any> = new Map([
                [
                  String.fromCharCode(
                    101,
                    95,
                    51,
                    50,
                    95,
                    115,
                    117,
                    98,
                    118,
                    105,
                    101,
                    119,
                    101,
                    114,
                    0,
                  ),
                  708,
                ],
                [
                  String.fromCharCode(
                    122,
                    95,
                    54,
                    48,
                    95,
                    100,
                    97,
                    116,
                    97,
                    104,
                    97,
                    115,
                    104,
                    0,
                  ),
                  492,
                ],
              ]);
              let fadfdeebbbfdabbbabdadfaaddaa4: Array<any> = [618, 510];
              let gift8 = 4.0;
              libreactnativejni5 += `${abidetectS.size ^ 1}`;
              abidetectS = new Map([
                [
                  `${fadfdeebbbfdabbbabdadfaaddaa4.length}`,
                  parseInt(`${gift8}`),
                ],
              ]);
              fadfdeebbbfdabbbabdadfaaddaa4.push(
                parseInt(`${gift8}`) << Math.min(5, Math.abs(1)),
              );
              viewerW = new Map([
                [classesF, 2 << Math.min(5, classesF.length)],
              ]);
              while (
                viewerW.size << Math.min(Math.abs(5), 3) <= 3 ||
                libreactnativejni5.length << Math.min(Math.abs(5), 3) <= 2
              ) {
                viewerW = new Map([[libreactnativejni5, classesF.length]]);
                break;
              }
              if (5 > viewerW.size / Math.max(libreactnativejni5.length, 8)) {
                viewerW.set(libreactnativejni5, viewerW.size & 3);
              }
              if (
                5 / Math.max(9, libreactnativejni5.length) >= 2 &&
                5 >= viewerW.size / Math.max(libreactnativejni5.length, 1)
              ) {
                viewerW.set(`${libreactnativejni5}`, libreactnativejni5.length);
              }
              let statisticsk = 7513920 <= viewerW.size;
              do {
                viewerW.set(
                  classesF,
                  String.fromCharCode(113, 0) == classesF
                    ? libreactnativejni5.length
                    : classesF.length,
                );
                if (statisticsk) {
                  break;
                }
              } while (
                statisticsk &&
                viewerW.size >> Math.min(Math.abs(2), 4) >= 3 &&
                3 >= 2 >> Math.min(3, libreactnativejni5.length)
              );
              let orange5 = true;
              let listc = 0;
              viewerW = new Map([[classesF, 1]]);
              orange5 = listc / Math.max(listc, 1) > 51;
              while (libreactnativejni5.endsWith(`${viewerW.size}`)) {
                libreactnativejni5 = `${libreactnativejni5.length}`;
                break;
              }
              ping7 *= parseFloat(`${lighta.length | 3}`);
            }
            lighta = `${parseInt(`${plusq}`) >> Math.min(Math.abs(3), 1)}`;
            while (
              parseInt(`${plusq}`) / Math.max(10, tumbnaild.length) == 4 ||
              plusq / Math.max(3.41, 4) == 5.94
            ) {
              plusq -= countryo.length + parseInt(`${mbnativeadvancedT}`);
              break;
            }
            let sellw = 2;
            let i_center3 = 0;
            let hnewinterstitialV = sellw <= 9382204;
            do {
              let libruntimeexecutoro = true;
              let executorz = 4.0;
              let grayl = 2;
              let lightj: Array<any> = [686, 460, 228];
              let orientationk: Array<any> = [302, 473, 284];
              sellw ^= lightj.length ^ orientationk.length;
              libruntimeexecutoro = !libruntimeexecutoro;
              executorz *= grayl;
              grayl ^= parseInt(`${executorz}`) ^ 3;
              lightj = [parseInt(`${executorz}`)];
              orientationk = [
                parseInt(`${executorz}`) & (libruntimeexecutoro ? 2 : 4),
              ];
              if (hnewinterstitialV) {
                break;
              }
            } while (hnewinterstitialV && 5 >= i_center3);
            for (let a = 0; a < 2; a++) {
              let routerE = 4.0;
              let chinasameA = false;
              let libreactnativeblobq: Array<any> = [826, 826, 781];
              i_center3 -= parseInt(`${routerE}`) / Math.max(4, i_center3);
              routerE /= Math.max(
                libreactnativeblobq.length << Math.min(Math.abs(3), 2),
                3,
              );
              chinasameA =
                95 <=
                (chinasameA ? 95 : libreactnativeblobq.length) +
                  libreactnativeblobq.length;
            }
            let langkey6 = sellw <= 8205641;
            do {
              let proxym = String.fromCharCode(
                100,
                105,
                115,
                116,
                111,
                114,
                116,
                105,
                111,
                110,
                95,
                116,
                95,
                53,
                0,
              );
              sellw *=
                proxym == String.fromCharCode(102, 0)
                  ? proxym.length
                  : i_center3;
              if (langkey6) {
                break;
              }
            } while (sellw > 3 && langkey6);
            i_center3 |= sellw;
            for (let u = 0; u < 2; u++) {
              let tailI = 0;
              let codegenk = String.fromCharCode(
                112,
                95,
                53,
                48,
                95,
                114,
                101,
                115,
                101,
                116,
                98,
                117,
                102,
                0,
              );
              i_center3 ^= sellw;
              tailI %= Math.max(
                3,
                String.fromCharCode(110, 0) == codegenk
                  ? tailI
                  : codegenk.length,
              );
            }
            i_center3 /= Math.max(sellw, 4);
            countryo += `${membershipY.length}`;
            return true;
          }
        });

        for (let w = 0; w < 2; w++) {
          let popupX = true;
          let update_5aI = String.fromCharCode(
            115,
            111,
            117,
            114,
            99,
            101,
            95,
            103,
            95,
            51,
            56,
            0,
          );
          let becomeA = false;
          let thumbnaili: Map<any, any> = new Map([
            [
              String.fromCharCode(
                112,
                114,
                111,
                98,
                97,
                98,
                105,
                108,
                105,
                116,
                121,
                95,
                103,
                95,
                57,
                54,
                0,
              ),
              String.fromCharCode(
                110,
                95,
                52,
                48,
                95,
                101,
                109,
                109,
                105,
                110,
                116,
                114,
                105,
                110,
                0,
              ),
            ],
            [
              String.fromCharCode(
                118,
                95,
                49,
                53,
                95,
                102,
                111,
                117,
                114,
                116,
                104,
                0,
              ),
              String.fromCharCode(
                117,
                112,
                100,
                97,
                116,
                101,
                114,
                95,
                51,
                95,
                53,
                57,
                0,
              ),
            ],
            [
              String.fromCharCode(
                102,
                105,
                108,
                116,
                101,
                114,
                95,
                97,
                95,
                55,
                54,
                0,
              ),
              String.fromCharCode(
                101,
                118,
                97,
                108,
                117,
                97,
                116,
                101,
                95,
                120,
                95,
                56,
                48,
                0,
              ),
            ],
          ]);
          let langY = 4.0;
          let applicationd: Array<any> = [
            String.fromCharCode(
              118,
              95,
              52,
              54,
              95,
              97,
              109,
              114,
              119,
              98,
              100,
              101,
              99,
              0,
            ),
            String.fromCharCode(
              117,
              95,
              52,
              56,
              95,
              100,
              114,
              105,
              118,
              105,
              110,
              103,
              0,
            ),
            String.fromCharCode(110, 117, 108, 108, 95, 53, 95, 55, 51, 0),
          ];
          let modelsJ: Array<any> = [353, 286];
          while (modelsJ.length < 4 && (4 | modelsJ.length) < 5) {
            let fieldB = false;
            let sellF: Array<any> = [
              String.fromCharCode(
                115,
                116,
                97,
                98,
                108,
                101,
                95,
                103,
                95,
                50,
                51,
                0,
              ),
              String.fromCharCode(113, 95, 51, 95, 104, 111, 108, 100, 115, 0),
              String.fromCharCode(
                115,
                95,
                48,
                95,
                105,
                110,
                99,
                114,
                101,
                109,
                101,
                110,
                116,
                97,
                108,
                0,
              ),
            ];
            let downloaderG = String.fromCharCode(122, 95, 56, 49, 0);
            let greyh = String.fromCharCode(
              111,
              95,
              57,
              48,
              95,
              112,
              97,
              114,
              97,
              115,
              101,
              116,
              0,
            );
            let style2 = String.fromCharCode(
              98,
              114,
              101,
              97,
              107,
              111,
              117,
              116,
              95,
              114,
              95,
              50,
              49,
              0,
            );
            modelsJ = [parseInt(`${langY}`) - update_5aI.length];
            fieldB = sellF.length % Math.max(style2.length, 9) > 48;
            sellF = [1 ^ sellF.length];
            downloaderG = `${style2.length}`;
            greyh += `${style2.length}`;
            break;
          }
          let injury7 = String.fromCharCode(
            100,
            95,
            54,
            51,
            95,
            101,
            109,
            105,
            116,
            116,
            101,
            100,
            0,
          );
          let send_ = String.fromCharCode(
            109,
            101,
            97,
            115,
            117,
            114,
            101,
            100,
            95,
            49,
            95,
            57,
            57,
            0,
          );
          let modeV = true;
          let chartR = String.fromCharCode(
            109,
            118,
            99,
            111,
            109,
            112,
            111,
            110,
            101,
            110,
            116,
            95,
            113,
            95,
            56,
            48,
            0,
          );
          thumbnaili.set(chartR, chartR.length << Math.min(Math.abs(1), 1));
          send_ = '3';
          modeV = modeV || send_.length == 49;
          let dycreatorZ = 3.0;
          becomeA = langY <= dycreatorZ;
          while (5 > injury7.length) {
            injury7 += `${applicationd.length}`;
            break;
          }
          let hook2: Array<any> = [674, 398, 900];
          while (injury7.includes(`${langY}`)) {
            injury7 += `${1 ^ (popupX ? 5 : 5)}`;
            break;
          }
          let reducerB = 2.0;
          let sharel = String.fromCharCode(
            115,
            95,
            56,
            53,
            95,
            112,
            97,
            114,
            97,
            109,
            115,
            0,
          );
          becomeA = langY / Math.max(10, reducerB) < 4.79;
          reducerB /= Math.max(sharel.length >> Math.min(Math.abs(1), 3), 5);
          sharel += `${sharel.length + sharel.length}`;
          let rewindp =
            update_5aI ==
            String.fromCharCode(110, 121, 107, 117, 104, 113, 100, 0);
          do {
            update_5aI += `${becomeA ? 1 : 2}`;
            if (rewindp) {
              break;
            }
          } while (rewindp && 5 > update_5aI.length);
          let membershipa =
            String.fromCharCode(118, 51, 51, 116, 51, 0) == update_5aI;
          do {
            let fillc = String.fromCharCode(
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              95,
              55,
              95,
              52,
              0,
            );
            let twitterc = 1;
            let mbbanner_ = 3.0;
            let anythinkB = String.fromCharCode(
              105,
              109,
              109,
              101,
              100,
              105,
              97,
              116,
              101,
              95,
              106,
              95,
              53,
              56,
              0,
            );
            let episodesr = String.fromCharCode(
              115,
              108,
              117,
              103,
              95,
              105,
              95,
              49,
              0,
            );
            update_5aI += `${hook2.length}`;
            fillc = `${episodesr.length}`;
            twitterc &= parseInt(`${mbbanner_}`) & episodesr.length;
            mbbanner_ /= Math.max(1, parseFloat(`${1}`));
            anythinkB = `${fillc.length}`;
            if (membershipa) {
              break;
            }
          } while (thumbnaili.size <= update_5aI.length && membershipa);
          lighta += `${
            parseInt(`${mbnativeadvancedT}`) >> Math.min(5, Math.abs(2))
          }`;
        }
        if (!membershipY.endsWith(`${mbnativeadvancedT}`)) {
          membershipY += '1';
        }
        for (let u = 0; u < 2; u++) {
          redirectC = mbnativeadvancedT < 15.11;
        }
        if (2.35 <= plusq) {
          let agreementv = String.fromCharCode(
            100,
            105,
            115,
            112,
            111,
            115,
            97,
            108,
            95,
            51,
            95,
            48,
            0,
          );
          for (let j = 0; j < 3; j++) {
            agreementv += '1';
          }
          if (!agreementv.endsWith(`${agreementv.length}`)) {
            agreementv += `${
              agreementv.length / Math.max(4, agreementv.length)
            }`;
          }
          agreementv = `${agreementv.length % 3}`;
          plusq /= Math.max(agreementv.length, 1);
        }
        await handleRefresh(navId, true);

        codegen5 >>= Math.min(2, Math.abs(2 | parseInt(`${ping7}`)));
        for (let o = 0; o < 2; o++) {
          codegen5 /= Math.max(
            lighta == String.fromCharCode(53, 0)
              ? lighta.length
              : membershipY.length,
            4,
          );
        }
        countryo += `${parseInt(`${mbnativeadvancedT}`)}`;
        redirectC = parseFloat(`${lighta.length}`) + mbnativeadvancedT == 91.3;
        setIsRefreshing(false);
      }
    };

    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
    let more1 = String.fromCharCode(
      109,
      95,
      51,
      53,
      95,
      112,
      114,
      111,
      106,
      101,
      99,
      116,
      105,
      111,
      110,
      115,
      0,
    );
    let blackF = String.fromCharCode(
      112,
      114,
      117,
      110,
      101,
      95,
      121,
      95,
      56,
      56,
      0,
    );
    let rulesp = String.fromCharCode(
      109,
      95,
      55,
      51,
      95,
      104,
      121,
      112,
      111,
      116,
      104,
      101,
      115,
      101,
      115,
      0,
    );
    let controlsB = 2;
    let mappingQ = true;
    let sentry3 = 3.0;
    let drags: Map<any, any> = new Map([
      [
        String.fromCharCode(110, 95, 55, 48, 95, 116, 114, 105, 101, 115, 0),
        467,
      ],
      [
        String.fromCharCode(
          99,
          111,
          110,
          115,
          116,
          114,
          97,
          105,
          110,
          116,
          95,
          103,
          95,
          55,
          49,
          0,
        ),
        711,
      ],
    ]);
    let rewardV: Map<any, any> = new Map([
      [String.fromCharCode(116, 95, 55, 56, 95, 117, 105, 100, 115, 0), false],
      [
        String.fromCharCode(
          110,
          97,
          112,
          115,
          104,
          111,
          116,
          95,
          55,
          95,
          49,
          51,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          100,
          95,
          52,
          53,
          95,
          118,
          101,
          114,
          105,
          102,
          121,
          0,
        ),
        false,
      ],
    ]);
    let logoutl: Map<any, any> = new Map([
      [
        String.fromCharCode(
          109,
          105,
          99,
          114,
          111,
          115,
          111,
          102,
          116,
          95,
          119,
          95,
          56,
          56,
          0,
        ),
        361,
      ],
      [
        String.fromCharCode(
          112,
          95,
          53,
          57,
          95,
          100,
          101,
          99,
          111,
          100,
          101,
          114,
          115,
          0,
        ),
        128,
      ],
      [
        String.fromCharCode(
          99,
          111,
          109,
          98,
          105,
          110,
          101,
          114,
          95,
          100,
          95,
          52,
          56,
          0,
        ),
        13,
      ],
    ]);
    let incidentl = 2;
    let selectedD = String.fromCharCode(
      112,
      114,
      105,
      111,
      114,
      105,
      116,
      105,
      101,
      115,
      95,
      54,
      95,
      57,
      52,
      0,
    );
    let strz = 1.0;
    let libzeusU = String.fromCharCode(
      112,
      117,
      108,
      108,
      113,
      117,
      111,
      116,
      101,
      95,
      99,
      95,
      54,
      51,
      0,
    );
    selectedD = `${parseInt(`${strz}`) % Math.max(1, 2)}`;
    strz *= 2;
    libzeusU = '3';
    for (let a = 0; a < 1; a++) {
      let successr = String.fromCharCode(
        97,
        112,
        112,
        114,
        101,
        99,
        105,
        97,
        116,
        101,
        100,
        104,
        95,
        104,
        95,
        53,
        52,
        0,
      );
      selectedD += '1';
      successr = `${successr.length % 3}`;
    }
    let windz = 0.0;
    let refreshC = 5.0;
    more1 = `${(mappingQ ? 2 : 4) + selectedD.length}`;
    if (more1 == String.fromCharCode(116, 0)) {
      rulesp += `${
        blackF == String.fromCharCode(72, 0) ? blackF.length : rewardV.size
      }`;
    }
    let reducerC = String.fromCharCode(106, 50, 114, 121, 108, 0) == rulesp;
    do {
      rulesp += `${(mappingQ ? 3 : 2) & 1}`;
      if (reducerC) {
        break;
      }
    } while (
      5 <= 3 % Math.max(8, rewardV.size) &&
      5 <= rewardV.size % 3 &&
      reducerC
    );
    mappingQ = more1.endsWith(`${controlsB}`);

    const found = navOptions?.find(e => e.name === screenState.lastSeenNavName);

    let stepU =
      more1 == String.fromCharCode(112, 48, 115, 119, 122, 97, 48, 115, 119, 0);
    do {
      more1 = `${drags.size & parseInt(`${sentry3}`)}`;
      if (stepU) {
        break;
      }
    } while (
      2 / Math.max(5, controlsB) < 3 &&
      1 < 2 / Math.max(9, more1.length) &&
      stepU
    );
    controlsB /= Math.max(
      2,
      parseInt(`${sentry3}`) >> Math.min(Math.abs(1), 2),
    );
    let profileK = 4.0;
    let graphW = String.fromCharCode(
      97,
      118,
      102,
      111,
      114,
      109,
      97,
      116,
      95,
      98,
      95,
      53,
      52,
      0,
    );
    let mintegralb: Map<any, any> = new Map([
      [
        String.fromCharCode(
          98,
          95,
          53,
          50,
          95,
          102,
          111,
          111,
          116,
          98,
          97,
          108,
          108,
          0,
        ),
        539,
      ],
      [
        String.fromCharCode(
          99,
          111,
          100,
          101,
          99,
          117,
          116,
          105,
          108,
          115,
          95,
          109,
          95,
          55,
          56,
          0,
        ),
        745,
      ],
      [
        String.fromCharCode(110, 105, 100, 108, 110, 95, 51, 95, 52, 50, 0),
        528,
      ],
    ]);
    if (
      1 == graphW.length >> Math.min(Math.abs(1), 4) &&
      graphW.length >> Math.min(Math.abs(1), 4) == 5
    ) {
      graphW += `${
        graphW == String.fromCharCode(57, 0)
          ? graphW.length
          : parseInt(`${profileK}`)
      }`;
    }
    profileK += parseFloat(`${mintegralb.size}`);
    profileK *= parseFloat(`${mintegralb.size * 1}`);
    profileK -= parseFloat(`${parseInt(`${profileK}`)}`);
    for (let g = 0; g < 3; g++) {
      let usernameK = String.fromCharCode(
        102,
        119,
        104,
        116,
        120,
        95,
        119,
        95,
        51,
        48,
        0,
      );
      mintegralb = new Map([
        [
          `${mintegralb.size}`,
          3 << Math.min(5, Math.abs(parseInt(`${profileK}`))),
        ],
      ]);
      usernameK += `${usernameK.length / Math.max(7, usernameK.length)}`;
    }
    let matchesP = String.fromCharCode(
      115,
      97,
      109,
      112,
      108,
      101,
      114,
      101,
      100,
      117,
      99,
      116,
      105,
      111,
      110,
      95,
      110,
      95,
      53,
      49,
      0,
    );
    let anythinky = true;
    let corner3: Map<any, any> = new Map([
      [
        String.fromCharCode(100, 119, 111, 114, 100, 95, 98, 95, 54, 53, 0),
        290,
      ],
      [
        String.fromCharCode(
          108,
          97,
          121,
          101,
          114,
          115,
          95,
          101,
          95,
          52,
          57,
          0,
        ),
        931,
      ],
    ]);
    graphW = `${
      String.fromCharCode(79, 0) == matchesP
        ? matchesP.length
        : anythinky
        ? 2
        : 5
    }`;
    anythinky = (corner3.size ^ corner3.size) < 71;
    let typesN = 3.0;
    let libavformat1 = 0.0;
    let thailandP = 1;
    let moviesR = 4.0;
    let temperature_ = String.fromCharCode(
      116,
      95,
      56,
      53,
      95,
      99,
      111,
      109,
      109,
      97,
      110,
      100,
      115,
      0,
    );
    typesN -= parseFloat(`${graphW.length}`);
    thailandP &= thailandP;
    moviesR +=
      temperature_ == String.fromCharCode(86, 0)
        ? parseInt(`${moviesR}`)
        : temperature_.length;
    let sentryZ = true;
    let macaub = true;
    rulesp += `${graphW.length}`;
    drags.set(rulesp, rulesp.length ^ controlsB);

    if (found) {
      let expandV = 0.0;
      let unselected1 = 5.0;
      let floatingT = 4.0;
      unselected1 -=
        parseInt(`${floatingT}`) % Math.max(7, parseInt(`${unselected1}`));
      while (
        5.79 > expandV / Math.max(3, floatingT) ||
        5.79 > expandV / Math.max(5, floatingT)
      ) {
        floatingT /= Math.max(5, parseInt(`${floatingT}`) + 3);
        break;
      }
      expandV *= parseFloat(
        `${2 << Math.min(Math.abs(parseInt(`${floatingT}`)), 5)}`,
      );
      for (let b = 0; b < 2; b++) {
        floatingT += parseInt(`${unselected1}`) << Math.min(4, Math.abs(3));
      }
      let dices = expandV <= 5646077.0;
      do {
        expandV += parseFloat(`${1 + parseInt(`${unselected1}`)}`);
        if (dices) {
          break;
        }
      } while (dices && floatingT + expandV == 1.46);
      unselected1 += 1 - parseInt(`${expandV}`);
      while (1.66 == expandV) {
        let playercommonn = 4.0;
        unselected1 /= Math.max(parseInt(`${expandV}`), 2);
        playercommonn /= Math.max(
          parseFloat(
            `${parseInt(`${playercommonn}`) - parseInt(`${playercommonn}`)}`,
          ),
          4,
        );
        break;
      }
      let libfollyc = floatingT <= 7788945.0;
      do {
        floatingT /= Math.max(3, 3 | parseInt(`${floatingT}`));
        if (libfollyc) {
          break;
        }
      } while (
        unselected1 * 4.84 == 5.0 &&
        floatingT * unselected1 == 4.84 &&
        libfollyc
      );
      while (4.63 <= 5.68 * unselected1 || 5.68 * unselected1 <= 3.36) {
        expandV /= Math.max(5, parseFloat(`${2}`));
        break;
      }
      mappingQ = more1.length >= 47;
      let expiredU = String.fromCharCode(
        114,
        101,
        102,
        111,
        99,
        117,
        115,
        95,
        107,
        95,
        53,
        54,
        0,
      );
      let more9 = 5;
      let filled0: Map<any, any> = new Map([
        [String.fromCharCode(99, 111, 112, 121, 120, 95, 110, 95, 52, 0), 171],
        [
          String.fromCharCode(
            99,
            95,
            54,
            56,
            95,
            98,
            97,
            99,
            107,
            115,
            108,
            97,
            115,
            104,
            0,
          ),
          325,
        ],
        [
          String.fromCharCode(
            97,
            116,
            111,
            98,
            111,
            111,
            108,
            95,
            97,
            95,
            54,
            54,
            0,
          ),
          374,
        ],
      ]);
      let alertI: Map<any, any> = new Map([
        [
          String.fromCharCode(
            116,
            101,
            115,
            115,
            101,
            108,
            97,
            116,
            101,
            95,
            119,
            95,
            50,
            49,
            0,
          ),
          674,
        ],
        [
          String.fromCharCode(
            102,
            108,
            116,
            117,
            105,
            110,
            116,
            95,
            56,
            95,
            49,
            50,
            0,
          ),
          716,
        ],
        [String.fromCharCode(110, 111, 110, 101, 95, 108, 95, 49, 50, 0), 524],
      ]);
      let bootsplashF = 3;
      let muted8 = String.fromCharCode(
        114,
        100,
        98,
        120,
        95,
        99,
        95,
        51,
        51,
        0,
      );
      let sentry4: Map<any, any> = new Map([
        [
          String.fromCharCode(
            103,
            95,
            53,
            50,
            95,
            102,
            105,
            116,
            116,
            105,
            110,
            103,
            0,
          ),
          true,
        ],
        [
          String.fromCharCode(
            97,
            95,
            52,
            50,
            95,
            102,
            114,
            97,
            109,
            101,
            112,
            111,
            111,
            108,
            0,
          ),
          true,
        ],
        [
          String.fromCharCode(
            104,
            95,
            54,
            52,
            95,
            113,
            99,
            101,
            108,
            112,
            100,
            97,
            116,
            97,
            0,
          ),
          false,
        ],
      ]);
      filled0 = new Map([
        [
          `${bootsplashF}`,
          muted8 == String.fromCharCode(99, 0) ? bootsplashF : muted8.length,
        ],
      ]);
      let other0 = 9407188 >= alertI.size;
      do {
        alertI.set(`${expiredU}`, alertI.size);
        if (other0) {
          break;
        }
      } while (other0 && 3 < (expiredU.length & 4));
      let resultY: Map<any, any> = new Map([
        [
          String.fromCharCode(97, 97, 99, 101, 110, 99, 95, 109, 95, 56, 51, 0),
          801,
        ],
        [String.fromCharCode(118, 105, 101, 119, 95, 102, 95, 49, 55, 0), 937],
      ]);
      let graphicsd = String.fromCharCode(
        110,
        95,
        55,
        53,
        95,
        114,
        103,
        98,
        112,
        108,
        117,
        115,
        0,
      );
      more9 -= more9 % Math.max(expiredU.length, 6);
      resultY.set(`${graphicsd}`, resultY.size >> Math.min(Math.abs(1), 1));
      graphicsd = `${resultY.size}`;
      let minivodZ = more9 >= 7422454;
      do {
        more9 <<= Math.min(5, Math.abs(more9 * filled0.size));
        if (minivodZ) {
          break;
        }
      } while (
        minivodZ &&
        expiredU.length + more9 < 3 &&
        2 < expiredU.length + 3
      );
      if (5 >= (more9 | expiredU.length) && (expiredU.length | 5) >= 5) {
        let verticalS: Array<any> = [385, 651];
        let bridge6 = String.fromCharCode(114, 101, 112, 95, 57, 95, 51, 52, 0);
        let whatsappp: Map<any, any> = new Map([
          [
            String.fromCharCode(112, 95, 52, 54, 0),
            String.fromCharCode(
              115,
              117,
              98,
              112,
              97,
              114,
              116,
              95,
              50,
              95,
              52,
              54,
              0,
            ),
          ],
          [
            String.fromCharCode(116, 115, 120, 95, 115, 95, 55, 50, 0),
            String.fromCharCode(
              115,
              121,
              109,
              111,
              100,
              100,
              95,
              114,
              95,
              52,
              49,
              0,
            ),
          ],
          [
            String.fromCharCode(116, 95, 51, 48, 0),
            String.fromCharCode(
              121,
              95,
              53,
              50,
              95,
              111,
              98,
              106,
              101,
              99,
              116,
              0,
            ),
          ],
        ]);
        let tailE = String.fromCharCode(
          115,
          95,
          56,
          53,
          95,
          108,
          101,
          102,
          116,
          0,
        );
        more9 <<= Math.min(1, Math.abs(filled0.size));
        verticalS = [1 / Math.max(8, bridge6.length)];
        bridge6 = `${tailE.length ^ whatsappp.size}`;
        whatsappp = new Map([
          [`${whatsappp.size}`, whatsappp.size ^ verticalS.length],
        ]);
        tailE = '1';
      }
      mappingQ = drags.size / Math.max(5, expiredU.length) == 51;
      for (let z = 0; z < 2; z++) {
        controlsB /= Math.max((mappingQ ? 3 : 1) * rulesp.length, 2);
      }
      rulesp += `${blackF.length}`;
      navigation.navigate('首页', {
        screen: screenState.lastSeenNavName,
      });

      if (mappingQ) {
        let relatedZ = String.fromCharCode(
          120,
          95,
          52,
          55,
          95,
          99,
          111,
          118,
          97,
          114,
          105,
          97,
          110,
          99,
          101,
          0,
        );
        let bannerc = 5.0;
        let kuaishouk = String.fromCharCode(
          105,
          110,
          105,
          116,
          105,
          97,
          116,
          101,
          100,
          95,
          49,
          95,
          54,
          54,
          0,
        );
        bannerc +=
          kuaishouk == String.fromCharCode(117, 0)
            ? parseInt(`${bannerc}`)
            : kuaishouk.length;
        if (relatedZ.includes(`${bannerc}`)) {
          let giftY = String.fromCharCode(
            101,
            95,
            50,
            57,
            95,
            102,
            108,
            111,
            97,
            116,
            115,
            0,
          );
          relatedZ += `${
            String.fromCharCode(118, 0) == kuaishouk
              ? giftY.length
              : kuaishouk.length
          }`;
        }
        kuaishouk += `${relatedZ.length}`;
        while (1.1 == bannerc / 5.6 && (relatedZ.length ^ 4) == 3) {
          relatedZ += `${parseInt(`${bannerc}`) - 2}`;
          break;
        }
        if (
          3 + parseInt(`${bannerc}`) < 1 ||
          3 >> Math.min(2, relatedZ.length) < 5
        ) {
          bannerc += kuaishouk.length | 3;
        }
        let u_managerU: Array<any> = [650, 829, 623];
        let paginationv: Array<any> = [150, 701, 587];
        let morec: Array<any> = [817, 574];
        let malaysiaH: Array<any> = [949, 693];
        let whatsappz: Map<any, any> = new Map([
          [
            String.fromCharCode(
              116,
              95,
              56,
              54,
              95,
              115,
              112,
              105,
              108,
              108,
              115,
              105,
              122,
              101,
              0,
            ),
            true,
          ],
          [String.fromCharCode(100, 105, 115, 99, 95, 50, 95, 52, 56, 0), true],
          [
            String.fromCharCode(
              110,
              95,
              54,
              53,
              95,
              112,
              108,
              117,
              114,
              97,
              108,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              0,
            ),
            true,
          ],
        ]);
        kuaishouk = `${relatedZ.length / Math.max(3, 10)}`;
        morec = [morec.length + malaysiaH.length];
        malaysiaH.push(malaysiaH.length & 2);
        whatsappz = new Map([
          [`${whatsappz.size}`, malaysiaH.length % Math.max(2, 10)],
        ]);
        relatedZ = `${relatedZ.length & 2}`;
        let libcxxcomponentsg = false;
        kuaishouk += '1';
        libcxxcomponentsg = libcxxcomponentsg || !libcxxcomponentsg;
        drags.set(`${controlsB}`, drags.size / 3);
      }
      more1 = `${rulesp.length}`;
      let modec = 3.0;
      let time_vM = String.fromCharCode(
        110,
        111,
        110,
        114,
        100,
        95,
        109,
        95,
        51,
        52,
        0,
      );
      let side5 = 5;
      modec += parseFloat(
        `${parseInt(`${modec}`) % Math.max(time_vM.length, 7)}`,
      );
      modec -= parseFloat(`${3 ^ parseInt(`${modec}`)}`);
      let update_zK = 5997202.0 >= modec;
      do {
        modec -= parseFloat(`${side5 % Math.max(time_vM.length, 10)}`);
        if (update_zK) {
          break;
        }
      } while (
        5.65 / Math.max(10, modec) >= 4.93 &&
        time_vM.length * 1 >= 5 &&
        update_zK
      );
      let helperR = 0.0;
      side5 -= time_vM.length;
      helperR /= Math.max(parseFloat(`${parseInt(`${helperR}`)}`), 3);
      let mbbannerh: Array<any> = [
        String.fromCharCode(
          120,
          95,
          57,
          52,
          95,
          106,
          115,
          116,
          114,
          105,
          110,
          103,
          0,
        ),
        String.fromCharCode(
          114,
          101,
          99,
          111,
          109,
          98,
          105,
          110,
          101,
          95,
          54,
          95,
          51,
          51,
          0,
        ),
      ];
      time_vM += `${mbbannerh.length}`;
      mbbannerh = [side5 / Math.max(1, 10)];
      while (2 < side5) {
        let miniW = 0.0;
        let crowni = false;
        let reminderD = String.fromCharCode(
          102,
          95,
          53,
          48,
          95,
          99,
          116,
          114,
          0,
        );
        side5 ^= side5;
        miniW /= Math.max(3 * parseInt(`${miniW}`), 5);
        crowni = reminderD.length < 18;
        reminderD = `${
          String.fromCharCode(95, 0) == reminderD
            ? crowni
              ? 2
              : 4
            : reminderD.length
        }`;
        break;
      }
      side5 |= mbbannerh.length;
      controlsB *= parseInt(`${sentry3}`);
      let macau3 =
        blackF == String.fromCharCode(99, 50, 117, 97, 108, 104, 103, 120, 0);
      do {
        blackF = '2';
        if (macau3) {
          break;
        }
      } while (4 + blackF.length == 5 && 4 + blackF.length == 5 && macau3);
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<yys_NotificationGray>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                navId={index}
                tabName={navOptions !== undefined ? navOptions[index].name : ''}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
                isTabFocus={navId === index}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  tabName={
                    navOptions !== undefined ? navOptions[index].name : ''
                  }
                  onRefresh={handleRefresh}
                  refreshProp={isRefreshing}
                  handleRejectEighteenPlus={handleRejectEighteenPlus}
                  isTabFocus={navId === index}
                />
              </>
            ))}
        </>
      );
    },
    [navOptions, navId, screenState.lastSeenNavName],
  );

  const {setNavbarHeight, reloadBanner} = useContext(AdsBannerContext);

  const isSamsungDevice = DeviceInfo.getBrand() === 'samsung';
  useEffect(() => {
    setTimeout(
      () => {
        setNavbarHeight(bottomTabHeight);
      },
      isSamsungDevice ? 1000 : 500,
    );
  }, [bottomTabHeight, screenState.interstitialShow]);

  const [deviceName, setDeviceName] = useState('');

  DeviceInfo.getDeviceName().then(d => {
    setDeviceName(d.toLowerCase());
  });

  useEffect(() => {
    Dimensions.addEventListener('change', e => {
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(
        keyword => deviceName.includes(keyword),
      );
      if (DeviceInfo.isTablet() || includesKeywords) {
        reloadBanner();
      }
    });
  }, []);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      yys_event_common.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex(e => e.id === navId);
      yys_event_common.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
    let eighteenJ = String.fromCharCode(
      101,
      110,
      99,
      108,
      97,
      118,
      101,
      95,
      48,
      95,
      49,
      48,
      0,
    );
    let uimanagerT = 2.0;
    let stylesL = true;
    let mimoR = String.fromCharCode(116, 95, 57, 55, 0);
    let gestureK = true;
    let stats2: Map<any, any> = new Map([
      [
        String.fromCharCode(
          97,
          99,
          99,
          101,
          108,
          101,
          114,
          97,
          116,
          101,
          95,
          106,
          95,
          57,
          57,
          0,
        ),
        723,
      ],
      [String.fromCharCode(97, 95, 54, 51, 95, 118, 105, 116, 99, 0), 963],
      [
        String.fromCharCode(
          99,
          104,
          97,
          114,
          97,
          99,
          116,
          101,
          114,
          105,
          115,
          116,
          105,
          99,
          115,
          95,
          99,
          95,
          53,
          50,
          0,
        ),
        327,
      ],
    ]);
    let subss = String.fromCharCode(
      117,
      95,
      49,
      48,
      95,
      99,
      114,
      108,
      100,
      112,
      0,
    );
    let hejiE = String.fromCharCode(
      97,
      95,
      55,
      48,
      95,
      97,
      110,
      110,
      111,
      117,
      110,
      99,
      101,
      0,
    );
    let catalogg: Map<any, any> = new Map([
      [String.fromCharCode(112, 114, 111, 112, 95, 56, 95, 50, 54, 0), 326],
      [String.fromCharCode(112, 108, 97, 121, 95, 112, 95, 53, 54, 0), 138],
      [
        String.fromCharCode(
          102,
          105,
          110,
          97,
          108,
          105,
          122,
          101,
          100,
          95,
          111,
          95,
          49,
          51,
          0,
        ),
        609,
      ],
    ]);
    let rewardvideoq = 0;
    let invitee = String.fromCharCode(117, 101, 102, 97, 95, 98, 95, 50, 52, 0);
    let calendarD = String.fromCharCode(
      103,
      95,
      56,
      52,
      95,
      100,
      112,
      97,
      103,
      101,
      0,
    );
    let pagec: Map<any, any> = new Map([
      [
        String.fromCharCode(
          104,
          97,
          108,
          102,
          102,
          108,
          111,
          97,
          116,
          95,
          57,
          95,
          52,
          55,
          0,
        ),
        147,
      ],
      [
        String.fromCharCode(
          99,
          117,
          101,
          112,
          111,
          105,
          110,
          116,
          95,
          121,
          95,
          51,
          0,
        ),
        448,
      ],
      [String.fromCharCode(106, 95, 51, 56, 95, 112, 101, 97, 99, 104, 0), 68],
    ]);
    let friends8 = 0.0;
    if (4 > mimoR.length - 4 || 2 > 4 - catalogg.size) {
      mimoR = `${hejiE.length >> Math.min(4, Math.abs(rewardvideoq))}`;
    }
    for (let t = 0; t < 1; t++) {
      mimoR += `${stylesL ? 4 : 3}`;
    }

    //if no banner thn show
    let bannerRes;
    try {
      bannerRes = await yys_CurrentLang.getBannerAd(100);
      let banner = bannerRes.ads;
      let bannerList = bannerRes.ads_list;

      if (!banner) {
        dispatch(setIsHomeGuideShown(true));
      }
    } catch (err) {
      dispatch(setIsHomeGuideShown(true));
    }

    let splashListTemp = [];

    let videojsM = stylesL ? !stylesL : stylesL;
    do {
      let mbridge3 = true;
      let reade: Map<any, any> = new Map([
        [
          String.fromCharCode(
            115,
            116,
            114,
            101,
            115,
            115,
            95,
            113,
            95,
            54,
            54,
            0,
          ),
          69,
        ],
        [
          String.fromCharCode(
            100,
            105,
            115,
            109,
            105,
            115,
            115,
            101,
            100,
            95,
            115,
            95,
            49,
            56,
            0,
          ),
          707,
        ],
      ]);
      let maile: Map<any, any> = new Map([
        [
          String.fromCharCode(111, 119, 110, 101, 114, 95, 99, 95, 55, 52, 0),
          String.fromCharCode(105, 95, 54, 56, 95, 120, 116, 101, 97, 0),
        ],
        [
          String.fromCharCode(109, 95, 57, 53, 95, 100, 112, 116, 114, 115, 0),
          String.fromCharCode(
            121,
            95,
            50,
            51,
            95,
            108,
            111,
            103,
            103,
            101,
            114,
            0,
          ),
        ],
      ]);
      let libswresampleh = 0.0;
      let toponP = 1.0;
      toponP += parseInt(`${toponP}`) >> Math.min(Math.abs(1), 3);
      let policy7 = 6969522 <= maile.size;
      do {
        maile.set(`${toponP}`, 1 ^ parseInt(`${toponP}`));
        if (policy7) {
          break;
        }
      } while (!Array.from(maile.values()).includes(libswresampleh) && policy7);
      let time_gxH = maile.size >= 9271486;
      do {
        let klevin1 = 4;
        let gradlen = 0;
        maile.set(`${toponP}`, 1);
        klevin1 *= 1 + klevin1;
        gradlen -= 2 / Math.max(2, klevin1);
        if (time_gxH) {
          break;
        }
      } while (
        time_gxH &&
        (2.2 <= libswresampleh - 1.69 || 5.14 <= 1.69 - libswresampleh)
      );
      let popupI = 3.0;
      toponP *= maile.size;
      popupI *= parseInt(`${popupI}`) ^ 2;
      let bingo = String.fromCharCode(
        107,
        109,
        101,
        97,
        110,
        115,
        95,
        53,
        95,
        52,
        56,
        0,
      );
      maile = new Map([
        [`${libswresampleh}`, 1 % Math.max(6, parseInt(`${libswresampleh}`))],
      ]);
      let binddatasI = maile.size >= 5686238;
      do {
        let type_4B = 4;
        let filledX: Map<any, any> = new Map([
          [
            String.fromCharCode(
              109,
              101,
              116,
              104,
              111,
              100,
              115,
              95,
              111,
              95,
              53,
              0,
            ),
            654,
          ],
          [
            String.fromCharCode(
              99,
              108,
              97,
              115,
              115,
              101,
              115,
              95,
              49,
              95,
              55,
              55,
              0,
            ),
            920,
          ],
        ]);
        maile.set(
          `${mbridge3}`,
          parseInt(`${libswresampleh}`) | (mbridge3 ? 4 : 2),
        );
        type_4B += filledX.size;
        filledX = new Map([[`${filledX.size}`, type_4B * 3]]);
        if (binddatasI) {
          break;
        }
      } while (
        (2 == (4 | reade.size) || (reade.size | maile.size) == 4) &&
        binddatasI
      );
      mbridge3 = !mbridge3;
      stylesL = 80 >= eighteenJ.length;
      if (videojsM) {
        break;
      }
    } while (
      stylesL &&
      catalogg.size >> Math.min(Math.abs(1), 3) <= 3 &&
      videojsM
    );
    if (stats2.size == 2) {
      let privilege_ = 0.0;
      let clockQ: Array<any> = [780, 630];
      let modelx = 1;
      let stringsI = 3.0;
      clockQ = [3];
      stringsI /= Math.max(4, parseFloat(`${3 & parseInt(`${stringsI}`)}`));
      while (2.22 >= 5.67 - privilege_) {
        privilege_ -= 2;
        break;
      }
      modelx >>= Math.min(Math.abs(2), 5);
      clockQ = [1];
      if (1 >= clockQ.length - 4) {
        clockQ = [parseInt(`${privilege_}`) - clockQ.length];
      }
      let bellH = String.fromCharCode(
        116,
        95,
        55,
        57,
        95,
        97,
        100,
        116,
        115,
        116,
        111,
        97,
        115,
        99,
        0,
      );
      if (clockQ.length - 5 >= 1 && 4.16 >= privilege_ / 2.5) {
        let style4: Array<any> = [
          String.fromCharCode(
            98,
            117,
            110,
            100,
            108,
            101,
            115,
            95,
            111,
            95,
            49,
            48,
            48,
            0,
          ),
          String.fromCharCode(
            117,
            95,
            49,
            54,
            95,
            112,
            105,
            110,
            110,
            101,
            100,
            0,
          ),
        ];
        let modityB: Map<any, any> = new Map([
          [
            String.fromCharCode(111, 102, 102, 115, 95, 100, 95, 52, 54, 0),
            147,
          ],
          [
            String.fromCharCode(109, 95, 53, 50, 95, 99, 97, 115, 101, 115, 0),
            124,
          ],
        ]);
        clockQ.push(1);
        style4 = [style4.length | 2];
        modityB.set(
          `${style4.length}`,
          style4.length << Math.min(1, Math.abs(modityB.size)),
        );
      }
      if (5 > bellH.length) {
        let injurys = String.fromCharCode(
          116,
          104,
          117,
          110,
          107,
          95,
          55,
          95,
          53,
          49,
          0,
        );
        let fileb = true;
        let binddatas4 = 1;
        let bridgeo = String.fromCharCode(
          99,
          95,
          52,
          49,
          95,
          105,
          110,
          116,
          101,
          114,
          112,
          0,
        );
        let statisticsP = String.fromCharCode(
          115,
          99,
          104,
          101,
          100,
          117,
          108,
          101,
          114,
          95,
          50,
          95,
          55,
          53,
          0,
        );
        modelx %= Math.max(2, parseInt(`${privilege_}`));
        injurys = `${bridgeo.length}`;
        fileb = bridgeo.length <= 67 || binddatas4 <= 67;
        binddatas4 *= 3 - bridgeo.length;
        statisticsP += `${(fileb ? 5 : 2) - bridgeo.length}`;
      }
      clockQ.push(parseInt(`${privilege_}`) - bellH.length);
      invitee = `${3 ^ modelx}`;
    }
    try {
      if (!mimoR.endsWith(`${uimanagerT}`)) {
        let forwardk = 5;
        let agreement4 = String.fromCharCode(
          107,
          95,
          51,
          54,
          95,
          99,
          111,
          109,
          112,
          108,
          101,
          116,
          105,
          111,
          110,
          0,
        );
        let megaphones: Map<any, any> = new Map([
          [
            String.fromCharCode(
              101,
              95,
              51,
              53,
              95,
              116,
              114,
              97,
              110,
              115,
              102,
              101,
              114,
              0,
            ),
            434,
          ],
          [
            String.fromCharCode(
              105,
              110,
              116,
              101,
              114,
              114,
              117,
              112,
              116,
              101,
              100,
              95,
              117,
              95,
              53,
              57,
              0,
            ),
            38,
          ],
          [
            String.fromCharCode(
              98,
              95,
              50,
              52,
              95,
              112,
              105,
              120,
              102,
              109,
              116,
              0,
            ),
            13,
          ],
        ]);
        let traminiL = String.fromCharCode(
          99,
          111,
          108,
          105,
          110,
          101,
          97,
          114,
          95,
          48,
          95,
          56,
          51,
          0,
        );
        forwardk <<= Math.min(1, Math.abs(agreement4.length + traminiL.length));
        let stepu = 7235872 >= megaphones.size;
        do {
          megaphones = new Map([[agreement4, agreement4.length]]);
          if (stepu) {
            break;
          }
        } while (megaphones.size < traminiL.length && stepu);
        let interstitialP = String.fromCharCode(
          104,
          95,
          50,
          52,
          95,
          103,
          97,
          109,
          109,
          97,
          0,
        );
        agreement4 += `${agreement4.length / Math.max(2, 2)}`;
        interstitialP = `${interstitialP.length / 3}`;
        megaphones = new Map([[`${megaphones.size}`, agreement4.length]]);
        agreement4 += `${3 - traminiL.length}`;
        agreement4 += `${agreement4.length}`;
        forwardk >>= Math.min(Math.abs(agreement4.length | traminiL.length), 5);
        while (
          traminiL == String.fromCharCode(122, 0) &&
          2 > agreement4.length
        ) {
          traminiL += '3';
          break;
        }
        let redirectI = forwardk >= 9232172;
        do {
          forwardk &= forwardk * 2;
          if (redirectI) {
            break;
          }
        } while (!traminiL.startsWith(`${forwardk}`) && redirectI);
        agreement4 = `${traminiL.length}`;
        traminiL += `${forwardk - traminiL.length}`;
        while ((5 ^ megaphones.size) >= 2) {
          let injuryu = 3.0;
          let progressU = String.fromCharCode(
            98,
            109,
            111,
            100,
            101,
            95,
            107,
            95,
            54,
            56,
            0,
          );
          agreement4 = `${megaphones.size}`;
          injuryu -= parseInt(`${injuryu}`);
          progressU = `${
            String.fromCharCode(86, 0) == progressU
              ? parseInt(`${injuryu}`)
              : progressU.length
          }`;
          break;
        }
        uimanagerT *= 3;
      }
      while (subss != String.fromCharCode(65, 0)) {
        hejiE += '1';
        break;
      }
      if (
        screenState.eventSplashLastPageViewTime !== undefined 
      //   &&
      //   Date.now() - screenState.eventSplashLastPageViewTime <
      //     EVENT_SPLASH_SHOW_DURATION
      ) {
        calendarD += `${invitee.length}`;
        while (!eighteenJ.includes(`${rewardvideoq}`)) {
          eighteenJ += `${1 | calendarD.length}`;
          break;
        }
        return;
      }
      splashListTemp = await yys_Sans.getSplash();

      for (let e = 0; e < 1; e++) {
        gestureK = eighteenJ.length > 40 || subss == String.fromCharCode(85, 0);
      }
      if (
        calendarD == String.fromCharCode(119, 0) &&
        mimoR == String.fromCharCode(53, 0)
      ) {
        let valuesh = true;
        let confirmationr = String.fromCharCode(
          111,
          95,
          50,
          50,
          95,
          102,
          114,
          101,
          113,
          115,
          0,
        );
        let p_managerb = 5;
        let libfbo = false;
        for (let u = 0; u < 3; u++) {
          valuesh = p_managerb <= 59;
        }
        libfbo = confirmationr.length >= 63;
        p_managerb &= 3;
        libfbo = confirmationr.length > 75;
        let bingQ: Array<any> = [248, 312];
        confirmationr = '1';
        let libavutil5 = libfbo ? !libfbo : libfbo;
        do {
          let descZ = 0.0;
          let runtimew = 4.0;
          let field4 = String.fromCharCode(
            105,
            95,
            52,
            53,
            95,
            121,
            111,
            117,
            114,
            0,
          );
          let gmailQ = String.fromCharCode(
            114,
            101,
            99,
            111,
            103,
            110,
            105,
            116,
            105,
            111,
            110,
            95,
            105,
            95,
            51,
            55,
            0,
          );
          libfbo = !gmailQ.endsWith(`${valuesh}`);
          descZ /= Math.max(parseFloat(`${parseInt(`${runtimew}`) * 1}`), 5);
          runtimew -= field4.length / 1;
          field4 += '3';
          gmailQ += `${
            parseInt(`${descZ}`) % Math.max(7, parseInt(`${runtimew}`))
          }`;
          if (libavutil5) {
            break;
          }
        } while (libavutil5 && libfbo && (p_managerb ^ 2) <= 5);
        bingQ = [
          String.fromCharCode(102, 0) == confirmationr
            ? confirmationr.length
            : libfbo
            ? 2
            : 1,
        ];
        for (let g = 0; g < 2; g++) {
          let styleQ = 0.0;
          let templateprocessor3 = 1.0;
          let vnewarchdefaultsK = 3.0;
          let data2 = String.fromCharCode(
            111,
            95,
            50,
            49,
            95,
            114,
            101,
            103,
            101,
            120,
            0,
          );
          valuesh = !valuesh;
          styleQ -= parseFloat(`${1}`);
          templateprocessor3 += parseFloat(
            `${3 << Math.min(3, Math.abs(parseInt(`${styleQ}`)))}`,
          );
          vnewarchdefaultsK /= Math.max(parseFloat(`${3 & data2.length}`), 5);
          data2 += '1';
        }
        while (2 <= (1 | bingQ.length) || bingQ.length <= 1) {
          libfbo = valuesh || confirmationr.length > 44;
          break;
        }
        p_managerb += valuesh ? 2 : 5;
        let libreanimatedS = 3.0;
        let mathD = String.fromCharCode(
          103,
          95,
          53,
          57,
          95,
          115,
          101,
          108,
          101,
          99,
          116,
          97,
          98,
          108,
          101,
          0,
        );
        confirmationr = `${1 / Math.max(6, confirmationr.length)}`;
        libreanimatedS += parseFloat(`${parseInt(`${libreanimatedS}`) / 2}`);
        mathD += `${parseInt(`${libreanimatedS}`) + 3}`;
        mimoR = `${3 | catalogg.size}`;
      }

      hejiE += `${rewardvideoq * 3}`;
      let xadsdks = stylesL ? !stylesL : stylesL;
      do {
        stylesL = stats2.size - subss.length >= 86;
        if (xadsdks) {
          break;
        }
      } while (xadsdks && hejiE.startsWith(`${stylesL}`));

      uimanagerT *= (gestureK ? 2 : 5) / Math.max(subss.length, 4);
      mimoR += `${hejiE.length}`;
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

          subss += `${eighteenJ.length | catalogg.size}`;
          if (calendarD.length + uimanagerT > 3.62) {
            let classes9 = 5.0;
            let mergerX = String.fromCharCode(
              107,
              95,
              55,
              50,
              95,
              104,
              101,
              120,
              98,
              105,
              110,
              0,
            );
            let libfbjnic = String.fromCharCode(
              97,
              95,
              56,
              54,
              95,
              99,
              111,
              110,
              118,
              115,
              97,
              109,
              112,
              0,
            );
            for (let h = 0; h < 3; h++) {
              mergerX += `${3 + mergerX.length}`;
            }
            let read7 = String.fromCharCode(
              119,
              95,
              50,
              95,
              109,
              118,
              100,
              97,
              116,
              97,
              0,
            );
            let long_6kS = 1.0;
            let mimoA: Array<any> = [688, 220, 886];
            let overM = String.fromCharCode(
              118,
              100,
              112,
              97,
              117,
              95,
              115,
              95,
              52,
              49,
              0,
            );
            classes9 *= 1 << Math.min(3, read7.length);
            long_6kS *= parseFloat(`${overM.length}`);
            mimoA = [parseInt(`${long_6kS}`) >> Math.min(Math.abs(3), 5)];
            overM = `${overM.length | 3}`;
            let macauu = String.fromCharCode(
              117,
              95,
              54,
              53,
              95,
              98,
              116,
              110,
              0,
            );
            let librrcV = String.fromCharCode(
              121,
              95,
              54,
              56,
              95,
              116,
              105,
              108,
              101,
              120,
              0,
            );
            read7 = `${1 >> Math.min(3, librrcV.length)}`;
            macauu += `${
              macauu == String.fromCharCode(122, 0)
                ? macauu.length
                : macauu.length
            }`;
            librrcV += `${macauu.length}`;
            mergerX += '3';
            let o_imagel = false;
            let eactd = true;
            mergerX = `${parseInt(`${classes9}`) + 2}`;
            if (read7.length > mergerX.length) {
              read7 = '3';
            }
            if (mergerX.length <= 3) {
              eactd = mergerX == String.fromCharCode(107, 0);
            }
            uimanagerT *= mergerX.length << Math.min(Math.abs(2), 2);
          }
          obj.url =
            ConfigDialogContainer.minivodMalaysiaMail(
              [
                -85, -73, -73, -77, -80, -7, -20, -20, -70, -86, -83, -92, -80,
                -85, -86, -19, -73, -75, -61,
              ],
              0xc3,
              false,
            ) + obj.intro_page_image_url;

          while (invitee == eighteenJ) {
            eighteenJ = `${
              eighteenJ == String.fromCharCode(82, 0)
                ? eighteenJ.length
                : gestureK
                ? 5
                : 2
            }`;
            break;
          }
          for (let v = 0; v < 2; v++) {
            let libavdevicex: Array<any> = [244, 959];
            let checkboxM = String.fromCharCode(
              116,
              95,
              49,
              95,
              102,
              97,
              105,
              108,
              117,
              114,
              101,
              0,
            );
            let videojsc = 0.0;
            let history6 = 0.0;
            checkboxM = `${parseInt(`${history6}`)}`;
            libavdevicex = [
              checkboxM == String.fromCharCode(117, 0)
                ? checkboxM.length
                : libavdevicex.length,
            ];
            let mailG = 7293976 <= checkboxM.length;
            do {
              checkboxM = `${libavdevicex.length}`;
              if (mailG) {
                break;
              }
            } while (
              mailG &&
              5 <= checkboxM.length - libavdevicex.length &&
              checkboxM.length - 5 <= 4
            );
            let classes9t = String.fromCharCode(
              106,
              95,
              53,
              50,
              95,
              108,
              101,
              97,
              107,
              0,
            );
            let whistlec = String.fromCharCode(
              98,
              95,
              54,
              55,
              95,
              105,
              102,
              102,
              116,
              0,
            );
            videojsc += parseFloat(`${1 - libavdevicex.length}`);
            let awayB = 4;
            let sheetc = 0;
            for (let j = 0; j < 1; j++) {
              let combinedB = 4.0;
              let overlayv = 1.0;
              let libcxxcomponentsP = false;
              checkboxM += `${
                parseInt(`${combinedB}`) * parseInt(`${videojsc}`)
              }`;
              combinedB +=
                (libcxxcomponentsP ? 1 : 3) | parseInt(`${overlayv}`);
              overlayv /= Math.max(3 - parseInt(`${overlayv}`), 1);
              libcxxcomponentsP = 96.21 <= overlayv;
            }
            while (checkboxM.length == 5) {
              let sportK = 4.0;
              let referrerj = String.fromCharCode(
                99,
                110,
                111,
                110,
                99,
                101,
                95,
                102,
                95,
                54,
                56,
                0,
              );
              let frame_90 = String.fromCharCode(
                115,
                97,
                116,
                105,
                115,
                102,
                105,
                101,
                100,
                95,
                55,
                95,
                51,
                54,
                0,
              );
              sheetc |= parseInt(`${videojsc}`);
              sportK *= frame_90.length;
              referrerj += `${referrerj.length}`;
              frame_90 = `${referrerj.length * frame_90.length}`;
              break;
            }
            if (1 >= checkboxM.length * awayB) {
              let hearti = String.fromCharCode(
                115,
                119,
                114,
                101,
                115,
                97,
                109,
                112,
                108,
                101,
                114,
                101,
                115,
                95,
                48,
                95,
                57,
                48,
                0,
              );
              let zoomM = true;
              let libreacty = 3.0;
              let greym = 0;
              checkboxM += `${awayB ^ greym}`;
              hearti += `${3 & parseInt(`${libreacty}`)}`;
              zoomM = !hearti.includes(`${zoomM}`);
              libreacty *= parseFloat(`${(zoomM ? 4 : 1) + hearti.length}`);
              greym |= hearti.length;
            }
            while (history6 >= awayB) {
              awayB <<= Math.min(Math.abs(1), 2);
              break;
            }
            while (!libavdevicex.includes(sheetc)) {
              sheetc ^= 1 * parseInt(`${videojsc}`);
              break;
            }
            let libruntimeexecutorO = libavdevicex.length >= 7252976;
            do {
              libavdevicex.push(sheetc % 1);
              if (libruntimeexecutorO) {
                break;
              }
            } while (
              libavdevicex.length < checkboxM.length &&
              libruntimeexecutorO
            );
            uimanagerT +=
              String.fromCharCode(90, 0) == invitee
                ? invitee.length
                : eighteenJ.length;
          }
          return obj;
        });
      }
      await dispatch(
        setShowEventSplashData([
          ...splashListTemp,
          {
            created_at: '',
            intro_page_id: 1,
            intro_page_image_url: '/upload/vod/111.jpeg',
            intro_page_name: '首页1',
            url: ConfigDialogContainer.minivodMalaysiaMail(
              [
                104, 116, 116, 112, 115, 58, 47, 47, 121, 105, 110, 103, 115,
                104, 105, 46, 116, 118, 47, 117, 112, 108, 111, 97, 100, 47,
                118, 111, 100, 47, 49, 49, 49, 46, 106, 112, 101, 103, 0,
              ],
              0x0,
              false,
            ),
          },
        ]),
      );
    } catch (e) {
      dispatch(
        setShowEventSplashData([
          {
            created_at: '',
            intro_page_id: 1,
            intro_page_image_url: '/upload/vod/111.jpeg',
            intro_page_name: '首页1',
            url: ConfigDialogContainer.minivodMalaysiaMail(
              [
                104, 116, 116, 112, 115, 58, 47, 47, 121, 105, 110, 103, 115,
                104, 105, 46, 116, 118, 47, 117, 112, 108, 111, 97, 100, 47,
                118, 111, 100, 47, 49, 49, 49, 46, 106, 112, 101, 103, 0,
              ],
              0x0,
              false,
            ),
          },
        ]),
      );
    }

    if (screenState.showEventSplashData) {
      // navigation.navigate("付费Google");
      console.log("======================4");
      navigation.navigate('付费VIP');

      if (screenState.showEventSplash == false) {
        dispatch(setEventSplashLastPageViewTime());
      }
      // dispatch(clearEventSplashLastPageViewTime());
    }
  };

  const onTabFocus = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));
    if (navOptions !== undefined) {
      const found = navOptions?.find(e => e.name === targetStr);

      if (found) {
        setNavId(found.id);

        yys_event_common.homeTabViewsAnalytics({
          tab_id: found.id.toString(),
          tab_name: found.name,
        });
      }
    }
  };

  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));
    if (navOptions !== undefined) {
      const found = navOptions?.find(e => e.name === targetStr);

      if (found) {
        setNavId(found.id);

        yys_event_common.homeTabClicksAnalytics({
          tab_id: found.id.toString(),
          tab_name: found.name,
        });
      }
    }
  };

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(tab.id);
  }, []);

  useInterstitialAds();

  return (
    <>
      <ScreenContainer
        containerStyle={{paddingLeft: 0, paddingRight: 0}}
        isHome={false}>
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}>
          <HomeHeader navigator={navigation} />
        </View>
        <HomeNav
          navId={navId}
          onTabPress={onTabPress}
          onTabFocus={onTabFocus}
          onTabSwipe={onTabSwipe}
          tabList={
            navOptions?.map(e => ({
              id: e.id,
              title: e.name,
              name: e.name,
            })) ?? []
          }
          tabChildren={(tab, i) => (
            <>
              {(!data || isRefreshing) && (
                <View
                  style={{
                    ...styles.loading,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: '50%',
                    marginLeft: -40,
                  }}>
                  {
                    <FastImage
                      style={{height: 80, width: 80}}
                      source={require('@static/images/cancelSigmobLibzeus.gif')}
                      resizeMode={'contain'}
                    />
                  }
                </View>
              )}
              {showHomeLoading && !isOffline && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(20,22,25)',
                  }}>
                  <FastImage
                    source={require('@static/images/indexTyping.gif')}
                    style={{
                      width: 150,
                      height: 150,
                      position: 'relative',
                      bottom: 50,
                      zIndex: -1,
                    }}
                    resizeMode={'contain'}
                    useFastImage={true}
                  />
                </View>
              )}
              {data && !isOffline && getContent({item: data[i], index: tab.id})}
            </>
          )}
        />
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(yys_dycreator);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
});
