import React, {useCallback, useEffect, useState, memo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import ScreenContainer from '../../components/container/tt_backward';
import MainHeader from '../../components/header/tt_inactive_strings_header';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ttProject, ttSport} from '@type/tt_line_borderless';
import VodPlaylist from '../../components/playlist/tt_button';
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {API_DOMAIN} from '@utility/tt_trophy_cross';
import FastImage from '../../components/common/tt_connection';
import {useIsFocused} from '@react-navigation/native';
import NoConnection from './../../components/common/tt_fast';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {ttBaiduNewinterstitial} from '@redux/reducers/tt_center';
import {ttOrange} from '@redux/tt_updates_bottom';
import {useAppSelector} from '@hooks/tt_spec_download';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import {ttMbbannerMore} from '@api';
import VodWithDescriptionListRank from '../../../components/vod/tt_models_eact';

type ttBing = {
  item: any;
  index: number;
};

function Rank() {
  let hejiQ = String.fromCharCode(
    114,
    95,
    50,
    95,
    111,
    98,
    115,
    101,
    114,
    118,
    101,
    114,
    0,
  );
  let nterstitialW = 1;
  let assistY: Map<any, any> = new Map([
    [
      String.fromCharCode(109, 98, 117, 118, 95, 114, 95, 50, 55, 0),
      String.fromCharCode(106, 115, 105, 109, 100, 95, 50, 95, 49, 49, 0),
    ],
    [
      String.fromCharCode(
        119,
        95,
        56,
        95,
        102,
        116,
        118,
        115,
        112,
        108,
        105,
        116,
        98,
        97,
        114,
        0,
      ),
      String.fromCharCode(
        117,
        95,
        57,
        50,
        95,
        117,
        110,
        105,
        110,
        105,
        116,
        105,
        97,
        108,
        105,
        122,
        101,
        100,
        0,
      ),
    ],
  ]);
  let roomx = 4;
  let config3 = 1.0;
  let mbsplashW = String.fromCharCode(119, 95, 56, 57, 95, 101, 114, 114, 0);
  let actions9: Array<any> = [231, 884];
  config3 -= parseFloat(`${1 - hejiQ.length}`);

  const navigation = useNavigation();

  let pressureZ = String.fromCharCode(99, 95, 52, 48, 95, 101, 108, 115, 0);
  let googleH = 3.0;
  let reactF = String.fromCharCode(
    101,
    95,
    50,
    54,
    95,
    99,
    116,
    105,
    109,
    101,
    115,
    116,
    97,
    109,
    112,
    0,
  );
  let manifeste = 2.0;
  let l_unlockp = 3.0;
  let buildc = 0;
  let bootsplashb: Map<any, any> = new Map([
    [String.fromCharCode(119, 95, 52, 95, 119, 122, 97, 101, 115, 0), true],
    [
      String.fromCharCode(106, 95, 50, 56, 95, 116, 111, 114, 99, 104, 0),
      false,
    ],
    [
      String.fromCharCode(
        103,
        101,
        110,
        101,
        114,
        97,
        116,
        101,
        95,
        105,
        95,
        50,
        52,
        0,
      ),
      false,
    ],
  ]);
  let pathC: Map<any, any> = new Map([
    [String.fromCharCode(105, 110, 116, 101, 108, 95, 49, 95, 50, 51, 0), 881],
    [
      String.fromCharCode(
        109,
        95,
        55,
        57,
        95,
        114,
        101,
        108,
        97,
        121,
        101,
        100,
        0,
      ),
      457,
    ],
    [
      String.fromCharCode(
        115,
        101,
        114,
        105,
        97,
        108,
        105,
        122,
        101,
        95,
        57,
        95,
        55,
        52,
        0,
      ),
      890,
    ],
  ]);
  manifeste /= Math.max(parseFloat(`${buildc + bootsplashb.size}`), 4);
  buildc /= Math.max(pathC.size, 1);
  bootsplashb.set(`${pathC.size}`, 3);
  let editc = 3;
  manifeste /= Math.max(1, parseFloat(`${editc}`));
  for (let j = 0; j < 3; j++) {
    let favicon8 = false;
    let redirectO = String.fromCharCode(
      97,
      114,
      102,
      113,
      95,
      107,
      95,
      55,
      57,
      0,
    );
    let checkboxD: Array<any> = [266, 951, 122];
    let flyerW: Array<any> = [617, 696];
    manifeste /= Math.max(2, parseFloat(`${checkboxD.length * flyerW.length}`));
    favicon8 = redirectO.startsWith(`${favicon8}`);
    redirectO = `${redirectO.length >> Math.min(Math.abs(1), 1)}`;
    checkboxD.push(1);
    flyerW.push(favicon8 ? 5 : 1);
  }
  if (4 <= 5 * reactF.length || (5 ^ reactF.length) <= 3) {
    reactF = `${parseInt(`${manifeste}`) | parseInt(`${l_unlockp}`)}`;
  }
  let sheetl = 2.0;
  sheetl += 1;
  let unreadv = String.fromCharCode(100, 95, 51, 57, 95, 102, 114, 111, 109, 0);
  let orientationh = String.fromCharCode(103, 95, 54, 54, 95, 112, 105, 110, 0);
  let searchj = 4.0;
  l_unlockp *= parseFloat(`${parseInt(`${sheetl}`)}`);
  unreadv += `${orientationh.length & 3}`;
  orientationh += `${orientationh.length}`;
  searchj /= Math.max(5, parseFloat(`${1}`));
  l_unlockp /= Math.max(4, parseFloat(`${reactF.length}`));
  hejiQ += `${3 * parseInt(`${config3}`)}`;
  pressureZ += `${pressureZ.length}`;
  googleH += parseFloat(`${parseInt(`${googleH}`) & pressureZ.length}`);
  const {textVariants, colors, spacing} = useTheme();

  if (roomx >= 1) {
    roomx += actions9.length;
  }
  const LIMIT_PER_PAGE = 10;

  actions9.push(2 + roomx);

  const [totalPage, setTotalPage] = useState(0);

  let paginationG = 1.0;
  let helperR = 5.0;
  let text3 = true;
  let y_view3 = 0.0;
  while (text3 || 5.5 <= 4.86 + helperR) {
    text3 = paginationG > 59.53;
    break;
  }
  paginationG -= parseFloat(`${parseInt(`${y_view3}`) ^ 2}`);
  while (paginationG - helperR <= 3.43) {
    paginationG -= parseFloat(`${parseInt(`${helperR}`) - (text3 ? 3 : 2)}`);
    break;
  }
  text3 = 87.25 < paginationG;
  for (let t = 0; t < 2; t++) {
    text3 = 80.2 <= paginationG || 80.2 <= y_view3;
  }
  if (3 + helperR <= 5.16) {
    let dataJ = 2.0;
    let notificationJ: Map<any, any> = new Map([
      [String.fromCharCode(97, 100, 100, 115, 95, 54, 95, 51, 0), true],
      [
        String.fromCharCode(
          122,
          95,
          50,
          51,
          95,
          109,
          117,
          108,
          116,
          105,
          116,
          97,
          98,
          108,
          101,
          0,
        ),
        false,
      ],
    ]);
    paginationG -= parseFloat(`${parseInt(`${y_view3}`)}`);
    dataJ += parseFloat(`${notificationJ.size}`);
    notificationJ = new Map([
      [`${notificationJ.size}`, notificationJ.size | parseInt(`${dataJ}`)],
    ]);
  }
  helperR += parseInt(`${paginationG}`) | 2;
  let favoritek = String.fromCharCode(
    97,
    112,
    97,
    99,
    107,
    101,
    116,
    95,
    120,
    95,
    49,
    49,
    0,
  );
  let successg = String.fromCharCode(
    116,
    95,
    56,
    53,
    95,
    97,
    108,
    112,
    104,
    97,
    110,
    117,
    109,
    0,
  );
  y_view3 -= parseFloat(`${parseInt(`${paginationG}`) + 3}`);
  favoritek = `${favoritek.length}`;
  successg = `${successg.length - favoritek.length}`;
  actions9 = [(text3 ? 4 : 5) + 2];

  const isFocused = useIsFocused();

  assistY = new Map([[`${nterstitialW}`, nterstitialW | 2]]);
  const [isOffline, setIsOffline] = useState(false);

  if (mbsplashW.length <= roomx) {
    mbsplashW += `${hejiQ.length}`;
  }

  const [isLoading, setIsLoading] = useState(false);

  for (let v = 0; v < 2; v++) {
    hejiQ += `${1 + parseInt(`${config3}`)}`;
  }

  const [selectedRankIndex, setSelectedRankIndex] = useState(0);

  nterstitialW |= hejiQ.length / Math.max(2, 1);
  const [rankVodList, setRankVodList] = useState([]);

  let textd = roomx <= 9631134;
  do {
    let sentryx: Map<any, any> = new Map([
      [
        String.fromCharCode(
          119,
          95,
          53,
          52,
          95,
          117,
          110,
          105,
          113,
          117,
          101,
          0,
        ),
        405,
      ],
      [
        String.fromCharCode(
          111,
          118,
          101,
          114,
          108,
          97,
          112,
          95,
          100,
          95,
          54,
          49,
          0,
        ),
        942,
      ],
      [
        String.fromCharCode(
          101,
          120,
          116,
          101,
          110,
          115,
          105,
          111,
          110,
          115,
          95,
          110,
          95,
          54,
          55,
          0,
        ),
        410,
      ],
    ]);
    let orientationt = String.fromCharCode(
      122,
      95,
      53,
      53,
      95,
      99,
      121,
      112,
      114,
      101,
      115,
      115,
      0,
    );
    let completeU = String.fromCharCode(
      112,
      101,
      114,
      115,
      105,
      115,
      116,
      101,
      100,
      95,
      100,
      95,
      51,
      57,
      0,
    );
    sentryx.set(
      orientationt,
      orientationt == String.fromCharCode(97, 0)
        ? orientationt.length
        : sentryx.size,
    );
    completeU += '1';
    let gemfile0 = 3;
    let reactT = 0.0;
    let subsU = 5.0;
    sentryx.set(`${gemfile0}`, 3);
    gemfile0 &= parseInt(`${reactT}`) * 3;
    reactT *= parseFloat(`${1 + parseInt(`${reactT}`)}`);
    subsU -= parseInt(`${reactT}`);
    sentryx.set(`${sentryx.size}`, sentryx.size & sentryx.size);
    roomx &= hejiQ.length - nterstitialW;
    if (textd) {
      break;
    }
  } while (!actions9.includes(roomx) && textd);

  const [tabList, setTabList] = useState([]);

  while (hejiQ.length <= mbsplashW.length) {
    hejiQ = '2';
    break;
  }
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({settingsReducer}: ttOrange) => settingsReducer,
  );

  for (let h = 0; h < 2; h++) {
    roomx *= 3 * nterstitialW;
  }

  if (
    4 > parseInt(`${config3}`) / Math.max(actions9.length, 4) &&
    config3 / Math.max(1.5, 5) > 2.45
  ) {
    config3 *= parseFloat(`${2}`);
  }
  useFocusEffect(
    useCallback(() => {
      while (hejiQ.endsWith(`${nterstitialW}`)) {
        nterstitialW ^= nterstitialW / Math.max(4, actions9.length);
        break;
      }
      console.log('rank');

      assistY = new Map([[`${assistY.size}`, assistY.size]]);
      tt_humidity_guide.playlistViewsAnalytics();

      while (hejiQ.length == roomx) {
        hejiQ += `${
          hejiQ == String.fromCharCode(75, 0) ? nterstitialW : hejiQ.length
        }`;
        break;
      }
    }, []),
  );

  roomx &= 3 / Math.max(9, actions9.length);

  actions9 = [nterstitialW / Math.max(assistY.size, 9)];

  if (2 < 4 - nterstitialW) {
    let profileq = String.fromCharCode(
      98,
      95,
      49,
      48,
      95,
      99,
      111,
      110,
      102,
      111,
      114,
      109,
      97,
      110,
      99,
      101,
      0,
    );
    profileq += `${profileq.length}`;
    let eactH = profileq.length <= 5153983;
    do {
      profileq = `${profileq.length}`;
      if (eactH) {
        break;
      }
    } while (
      eactH &&
      (profileq == String.fromCharCode(117, 0) ||
        profileq == String.fromCharCode(57, 0))
    );
    let placeholderQ = String.fromCharCode(
      97,
      117,
      116,
      111,
      100,
      111,
      119,
      110,
      108,
      111,
      97,
      100,
      95,
      54,
      95,
      51,
      57,
      0,
    );
    let dycreatorv = false;
    profileq = `${placeholderQ.length}`;
    config3 *= parseFloat(`${profileq.length}`);
  }
  const handleTabPress = () => {
    let tailu = String.fromCharCode(
      103,
      95,
      51,
      49,
      95,
      102,
      116,
      118,
      118,
      101,
      114,
      116,
      108,
      105,
      110,
      101,
      0,
    );
    let settingst = String.fromCharCode(97, 95, 56, 53, 95, 108, 111, 119, 0);
    let nativeexP = String.fromCharCode(
      102,
      95,
      54,
      51,
      95,
      112,
      114,
      101,
      115,
      101,
      110,
      99,
      101,
      0,
    );
    nativeexP = '3';
    settingst += `${1 - tailu.length}`;
    let scoreV = 5.0;
    let policyM: Array<any> = [
      String.fromCharCode(
        104,
        95,
        52,
        55,
        95,
        97,
        116,
        116,
        114,
        105,
        98,
        117,
        116,
        101,
        100,
        0,
      ),
      String.fromCharCode(98, 105, 110, 115, 95, 116, 95, 54, 55, 0),
      String.fromCharCode(
        120,
        95,
        51,
        51,
        95,
        112,
        114,
        111,
        100,
        117,
        99,
        116,
        102,
        0,
      ),
    ];
    let shareW: Map<any, any> = new Map([
      [
        String.fromCharCode(
          115,
          95,
          50,
          51,
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
        805,
      ],
      [String.fromCharCode(112, 111, 115, 116, 95, 107, 95, 51, 49, 0), 59],
    ]);
    let areaH: Map<any, any> = new Map([
      [String.fromCharCode(110, 95, 55, 54, 0), 188],
      [String.fromCharCode(116, 95, 53, 56, 95, 112, 97, 114, 97, 0), 811],
    ]);
    nativeexP += `${settingst.length + 1}`;
    areaH = new Map([[`${areaH.size}`, areaH.size + 1]]);
    for (let g = 0; g < 2; g++) {
      policyM = [tailu.length];
    }
    for (let x = 0; x < 1; x++) {
      tailu += `${parseInt(`${scoreV}`) ^ nativeexP.length}`;
    }
    for (let r = 0; r < 1; r++) {
      settingst = `${shareW.size * 3}`;
    }
    actions9.push(tailu.length);
    if (isFocused) {
      assistY = new Map([[`${assistY.size}`, 1]]);
      handleRefresh();

      while ((roomx ^ assistY.size) >= 2) {
        roomx /= Math.max(
          4,
          hejiQ == String.fromCharCode(107, 0) ? hejiQ.length : nterstitialW,
        );
        break;
      }
    }
  };

  let crowng = 2.0;
  let vietnamW = 5;
  crowng -= parseInt(`${crowng}`) % Math.max(6, vietnamW);
  if (crowng / Math.max(9, vietnamW) > 3.45) {
    let termsL: Map<any, any> = new Map([
      [
        String.fromCharCode(
          115,
          101,
          114,
          105,
          97,
          108,
          108,
          121,
          95,
          48,
          95,
          53,
          56,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          115,
          116,
          114,
          115,
          116,
          97,
          114,
          116,
          95,
          51,
          95,
          51,
          0,
        ),
        false,
      ],
    ]);
    let black5 = 5;
    let crossr = 4;
    let datat = 0;
    crowng += 2;
    termsL = new Map([[`${black5}`, crossr ^ black5]]);
    crossr *= 2;
    datat -= crossr % Math.max(termsL.size, 1);
  }
  while (1 <= 1 >> Math.min(2, Math.abs(vietnamW))) {
    crowng -= 3;
    break;
  }
  vietnamW <<= Math.min(5, Math.abs(vietnamW));
  if (5 < vietnamW) {
    vietnamW |= 2 ^ parseInt(`${crowng}`);
  }
  let selectedK = vietnamW <= 8293378;
  do {
    vietnamW -= parseInt(`${crowng}`) % Math.max(6, vietnamW);
    if (selectedK) {
      break;
    }
  } while (
    selectedK &&
    4 == vietnamW * parseInt(`${crowng}`) &&
    2 == vietnamW / 4
  );
  actions9.push(1);

  const checkConnection = useCallback(async () => {
    let plusB = assistY.size <= 5259154;
    do {
      assistY.set(mbsplashW, 2 & mbsplashW.length);
      if (plusB) {
        break;
      }
    } while (plusB && !Array.from(assistY.keys()).includes(`${roomx}`));
    const state = await NetInfo.fetch();

    actions9 = [nterstitialW];
    const offline = !(state.isConnected && state.isInternetReachable);

    for (let s = 0; s < 3; s++) {
      let unreadI = String.fromCharCode(
        99,
        111,
        108,
        108,
        105,
        100,
        101,
        114,
        95,
        117,
        95,
        51,
        51,
        0,
      );
      while (3 >= unreadI.length) {
        unreadI = `${
          String.fromCharCode(83, 0) == unreadI
            ? unreadI.length
            : unreadI.length
        }`;
        break;
      }
      let huawei0 = 2.0;
      let indexc = 1.0;
      let expandU: Array<any> = [943, 879, 442];
      hejiQ = `${assistY.size}`;
    }
    setIsOffline(offline);

    while (roomx >= nterstitialW) {
      roomx |= assistY.size;
      break;
    }
    if (!offline) {
      let gradleA = 4.0;
      let alertU = String.fromCharCode(
        121,
        95,
        53,
        56,
        95,
        109,
        111,
        99,
        107,
        101,
        100,
        0,
      );
      if (1.62 < 1.82 * gradleA && 1.82 * gradleA < 2.21) {
        let bellL = 3.0;
        let themeP = String.fromCharCode(
          105,
          110,
          116,
          101,
          114,
          114,
          97,
          99,
          116,
          105,
          118,
          101,
          95,
          119,
          95,
          49,
          0,
        );
        let scorej = String.fromCharCode(
          112,
          95,
          55,
          51,
          95,
          116,
          101,
          120,
          101,
          108,
          0,
        );
        let collectionB: Array<any> = [194, 218, 946];
        let userU = 2.0;
        gradleA += parseFloat(`${3 >> Math.min(5, collectionB.length)}`);
        bellL *= parseFloat(`${2}`);
        themeP = `${themeP.length + scorej.length}`;
        scorej = `${parseInt(`${userU}`)}`;
        collectionB.push(parseInt(`${bellL}`) * 2);
        userU *= 3;
      }
      for (let o = 0; o < 3; o++) {
        let shrinkA: Map<any, any> = new Map([
          [
            String.fromCharCode(119, 101, 97, 118, 101, 95, 117, 95, 55, 53, 0),
            854,
          ],
          [
            String.fromCharCode(
              99,
              111,
              110,
              116,
              114,
              111,
              108,
              101,
              114,
              115,
              95,
              48,
              95,
              49,
              56,
              0,
            ),
            785,
          ],
        ]);
        alertU = `${parseInt(`${gradleA}`)}`;
        shrinkA.set(`${shrinkA.size}`, 3 & shrinkA.size);
      }
      gradleA += parseFloat(
        `${1 >> Math.min(2, Math.abs(parseInt(`${gradleA}`)))}`,
      );
      for (let w = 0; w < 3; w++) {
        gradleA /= Math.max(2, parseFloat(`${parseInt(`${gradleA}`)}`));
      }
      while (5 >= alertU.length << Math.min(Math.abs(3), 5)) {
        let window_ag = true;
        let assistf = 1.0;
        let lineE = 1;
        alertU = `${parseInt(`${gradleA}`) / Math.max(2, 10)}`;
        window_ag = !window_ag || lineE > 27;
        assistf -= parseFloat(`${parseInt(`${assistf}`) + lineE}`);
        break;
      }
      alertU += '1';
      nterstitialW %= Math.max(
        String.fromCharCode(85, 0) == hejiQ
          ? hejiQ.length
          : parseInt(`${gradleA}`),
        4,
      );
      handleRefresh();
    }
  }, []);

  while (nterstitialW < mbsplashW.length) {
    let mbbannero = String.fromCharCode(
      116,
      114,
      97,
      110,
      115,
      108,
      105,
      116,
      101,
      114,
      97,
      116,
      101,
      100,
      95,
      52,
      95,
      52,
      49,
      0,
    );
    let statsx = String.fromCharCode(
      117,
      110,
      99,
      108,
      101,
      115,
      95,
      53,
      95,
      57,
      54,
      0,
    );
    let volumev = String.fromCharCode(
      97,
      110,
      105,
      109,
      97,
      116,
      105,
      111,
      110,
      95,
      100,
      95,
      51,
      48,
      0,
    );
    let internetd = 4.0;
    let stylesw = String.fromCharCode(
      99,
      111,
      109,
      98,
      105,
      110,
      97,
      116,
      105,
      111,
      110,
      115,
      95,
      57,
      95,
      52,
      51,
      0,
    );
    while (4 >= mbbannero.length) {
      let loadings = 1.0;
      let mail5 = String.fromCharCode(
        103,
        114,
        97,
        110,
        117,
        108,
        101,
        112,
        111,
        115,
        95,
        104,
        95,
        56,
        53,
        0,
      );
      let inactivet = true;
      let bridgev = 2;
      let rewardvideoc = String.fromCharCode(
        109,
        111,
        98,
        105,
        117,
        115,
        95,
        48,
        95,
        49,
        53,
        0,
      );
      mbbannero += `${
        mail5 == String.fromCharCode(112, 0)
          ? parseInt(`${loadings}`)
          : mail5.length
      }`;
      loadings -= bridgev;
      inactivet = 81 < bridgev && String.fromCharCode(79, 0) == rewardvideoc;
      rewardvideoc += `${rewardvideoc.length}`;
      break;
    }
    while (statsx != mbbannero) {
      mbbannero += '3';
      break;
    }
    statsx += `${3 & stylesw.length}`;
    if (statsx.length == mbbannero.length) {
      statsx += `${
        statsx == String.fromCharCode(118, 0)
          ? statsx.length
          : parseInt(`${internetd}`)
      }`;
    }
    if (5 <= 2 << Math.min(5, stylesw.length) || 5.44 <= 2.35 * internetd) {
      internetd += parseFloat(`${3}`);
    }
    let commentX: Array<any> = [111, 190, 407];
    let tumbnailW = String.fromCharCode(
      108,
      95,
      51,
      50,
      95,
      115,
      121,
      110,
      99,
      0,
    );
    stylesw += `${stylesw.length}`;
    commentX.push(tumbnailW.length);
    tumbnailW += `${
      tumbnailW == String.fromCharCode(113, 0)
        ? commentX.length
        : tumbnailW.length
    }`;
    stylesw = '1';
    let vignette8 = String.fromCharCode(
      112,
      95,
      52,
      95,
      99,
      111,
      117,
      110,
      116,
      101,
      114,
      115,
      0,
    );
    let editV = String.fromCharCode(
      109,
      111,
      100,
      105,
      102,
      121,
      95,
      120,
      95,
      53,
      56,
      0,
    );
    let phoneZ: Map<any, any> = new Map([
      [
        String.fromCharCode(
          101,
          120,
          101,
          99,
          117,
          116,
          101,
          95,
          100,
          95,
          56,
          49,
          0,
        ),
        543,
      ],
      [
        String.fromCharCode(
          119,
          95,
          49,
          54,
          95,
          115,
          112,
          101,
          97,
          107,
          101,
          114,
          115,
          0,
        ),
        181,
      ],
    ]);
    statsx = `${
      statsx == String.fromCharCode(54, 0) ? statsx.length : mbbannero.length
    }`;
    vignette8 = `${editV.length}`;
    editV += `${3 % Math.max(8, editV.length)}`;
    phoneZ = new Map([[editV, editV.length + vignette8.length]]);
    let tickt = true;
    internetd -= parseFloat(`${3 >> Math.min(1, mbbannero.length)}`);
    tickt = !tickt ? tickt : tickt;
    if (stylesw.endsWith(`${internetd}`)) {
      internetd -= parseFloat(`${3}`);
    }
    let crossh = mbbannero.length <= 9459416;
    do {
      mbbannero += `${volumev.length ^ stylesw.length}`;
      if (crossh) {
        break;
      }
    } while (stylesw == mbbannero && crossh);
    if (3 >= (4 & mbbannero.length) && internetd + 1.45 >= 3.52) {
      internetd *= parseFloat(`${2}`);
    }
    let mappingQ: Array<any> = [
      String.fromCharCode(
        112,
        114,
        101,
        115,
        101,
        110,
        99,
        101,
        115,
        95,
        117,
        95,
        57,
        51,
        0,
      ),
      String.fromCharCode(
        97,
        95,
        54,
        48,
        95,
        119,
        104,
        105,
        116,
        101,
        98,
        108,
        97,
        99,
        107,
        108,
        105,
        115,
        116,
        115,
        0,
      ),
      String.fromCharCode(117, 95, 51, 55, 95, 107, 109, 118, 99, 0),
    ];
    let rewindN: Array<any> = [94, 280, 646];
    let optionsA = 7929547 <= mappingQ.length;
    do {
      let aboutp = true;
      let skipX = String.fromCharCode(
        116,
        102,
        114,
        97,
        95,
        120,
        95,
        55,
        53,
        0,
      );
      let chinasameu: Array<any> = [13, 750];
      let tickedx = String.fromCharCode(
        117,
        110,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        95,
        110,
        95,
        55,
        50,
        0,
      );
      mappingQ = [mappingQ.length];
      aboutp = chinasameu.length > 35;
      skipX = `${2 % Math.max(3, aboutp ? 5 : 2)}`;
      chinasameu = [chinasameu.length + 2];
      tickedx += `${aboutp ? 4 : 1}`;
      if (optionsA) {
        break;
      }
    } while (mappingQ.length / 4 > 5 && optionsA);
    rewindN.push(
      String.fromCharCode(118, 0) == mbbannero
        ? mbbannero.length
        : volumev.length,
    );
    mbsplashW = `${roomx | mbsplashW.length}`;
    break;
  }

  useEffect(() => {
    if (3 < (actions9.length ^ 1) && 1 < (actions9.length ^ 1)) {
      actions9.push(nterstitialW);
    }
    setIsOffline(settingsReducer.isOffline);

    assistY.set(`${config3}`, 3);
    console.log('rank ');

    let serviced = true;
    let turnm: Map<any, any> = new Map([
      [
        String.fromCharCode(113, 95, 55, 56, 95, 99, 109, 97, 107, 101, 0),
        true,
      ],
      [
        String.fromCharCode(
          104,
          97,
          115,
          104,
          102,
          114,
          101,
          101,
          100,
          101,
          115,
          116,
          114,
          111,
          121,
          95,
          50,
          95,
          56,
          52,
          0,
        ),
        false,
      ],
      [String.fromCharCode(97, 114, 102, 113, 95, 102, 95, 53, 51, 0), true],
    ]);
    for (let c = 0; c < 3; c++) {
      let anytime4 = String.fromCharCode(
        97,
        95,
        55,
        49,
        95,
        109,
        111,
        100,
        101,
        115,
        0,
      );
      let huaweiY = String.fromCharCode(
        115,
        105,
        110,
        113,
        98,
        95,
        49,
        95,
        51,
        52,
        0,
      );
      let notificationQ = String.fromCharCode(
        115,
        95,
        50,
        50,
        95,
        112,
        105,
        120,
        98,
        108,
        111,
        99,
        107,
        100,
        115,
        112,
        0,
      );
      let ycopy_qc = false;
      let statsw = 0.0;
      serviced =
        parseInt(`${statsw}`) / Math.max(notificationQ.length, 10) >= 52;
      anytime4 = '2';
      huaweiY = `${huaweiY.length & anytime4.length}`;
      notificationQ = `${huaweiY.length}`;
      statsw += 1 ^ anytime4.length;
    }
    for (let b = 0; b < 2; b++) {
      serviced = !serviced;
    }
    let largeD = 6145306 <= turnm.size;
    do {
      let panglei: Array<any> = [942, 311, 522];
      let reportN: Array<any> = [471, 157, 20];
      turnm = new Map([[`${turnm.size}`, turnm.size + reportN.length]]);
      panglei = [panglei.length ^ 1];
      reportN.push(2);
      if (largeD) {
        break;
      }
    } while (serviced && largeD);
    let topicD = 0;
    let sentry3: Map<any, any> = new Map([
      [
        String.fromCharCode(
          106,
          95,
          50,
          49,
          95,
          109,
          97,
          115,
          107,
          101,
          100,
          109,
          101,
          114,
          103,
          101,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          102,
          105,
          108,
          116,
          101,
          114,
          102,
          95,
          108,
          95,
          54,
          54,
          0,
        ),
        false,
      ],
      [String.fromCharCode(122, 95, 52, 55, 95, 115, 97, 116, 100, 0), true],
    ]);
    let plashP = 2.0;
    serviced = !serviced || 75 > topicD;
    topicD /= Math.max(2, 2);
    sentry3.set(`${plashP}`, parseInt(`${plashP}`));
    let flipperL = 9078785 >= turnm.size;
    do {
      turnm = new Map([[`${turnm.size}`, turnm.size % Math.max(3, 2)]]);
      if (flipperL) {
        break;
      }
    } while (flipperL && 2 >> Math.min(1, Math.abs(turnm.size)) == 4);
    if (2 < (turnm.size & 2)) {
      turnm.set(`${serviced}`, (serviced ? 1 : 5) * turnm.size);
    }
    assistY.set(`${roomx}`, assistY.size);
    handleRefresh();
  }, []);

  let w_image4 = 2.0;
  let philippinesW = String.fromCharCode(
    99,
    95,
    53,
    49,
    95,
    100,
    101,
    99,
    108,
    105,
    110,
    101,
    100,
    0,
  );
  let overw: Array<any> = [528, 283];
  for (let k = 0; k < 1; k++) {
    let shrinkU = String.fromCharCode(
      100,
      105,
      105,
      110,
      95,
      51,
      95,
      53,
      52,
      0,
    );
    let borderlessP = 4;
    let chinasamet = String.fromCharCode(109, 95, 51, 54, 0);
    let penaltyz = String.fromCharCode(
      105,
      110,
      116,
      101,
      114,
      108,
      101,
      97,
      118,
      101,
      95,
      116,
      95,
      53,
      56,
      0,
    );
    let klevinR = String.fromCharCode(
      111,
      95,
      54,
      49,
      95,
      109,
      97,
      110,
      97,
      103,
      101,
      0,
    );
    overw = [2 + borderlessP];
    shrinkU = `${
      klevinR == String.fromCharCode(52, 0) ? shrinkU.length : klevinR.length
    }`;
    borderlessP %= Math.max(3 / Math.max(6, penaltyz.length), 5);
    chinasamet += `${
      String.fromCharCode(83, 0) == klevinR ? penaltyz.length : klevinR.length
    }`;
  }
  let reminderA = 4.0;
  w_image4 *= parseFloat(
    `${
      String.fromCharCode(68, 0) == philippinesW
        ? philippinesW.length
        : overw.length
    }`,
  );
  reminderA -= parseInt(`${reminderA}`);
  for (let z = 0; z < 2; z++) {
    w_image4 *= parseFloat(
      `${parseInt(`${w_image4}`) >> Math.min(1, Math.abs(2))}`,
    );
  }
  let profileA = philippinesW.length >= 5408925;
  do {
    philippinesW += `${
      philippinesW == String.fromCharCode(89, 0)
        ? philippinesW.length
        : overw.length
    }`;
    if (profileA) {
      break;
    }
  } while (profileA && overw.length / Math.max(philippinesW.length, 1) <= 1);
  w_image4 -= parseFloat(`${overw.length}`);
  overw = [
    String.fromCharCode(51, 0) == philippinesW
      ? overw.length
      : philippinesW.length,
  ];
  let transferg = 6228262 <= overw.length;
  do {
    let history4 = 1.0;
    let file5 = 0;
    overw.push(2);
    history4 += parseInt(`${history4}`) * 2;
    file5 -= 2;
    if (transferg) {
      break;
    }
  } while (
    (3 < overw.length % Math.max(9, philippinesW.length) ||
      philippinesW.length % 3 < 1) &&
    transferg
  );
  for (let g = 0; g < 3; g++) {
    overw = [parseInt(`${w_image4}`)];
  }
  let mbnativeadvancedp =
    String.fromCharCode(112, 108, 48, 113, 51, 50, 51, 48, 56, 0) ==
    philippinesW;
  do {
    philippinesW = `${
      String.fromCharCode(71, 0) == philippinesW
        ? philippinesW.length
        : overw.length
    }`;
    if (mbnativeadvancedp) {
      break;
    }
  } while (philippinesW.includes(`${overw.length}`) && mbnativeadvancedp);
  hejiQ += `${2 * philippinesW.length}`;

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback(
    (page: number) =>
      ttMbbannerMore.getTopicIosRank().then((json: ttProject) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
      }),
    [],
  );

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({pageParam = 1}) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;

        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
          console.log('got data');
          console.log(data);

          setTabList(data?.pages?.flat());
          setSelectedRankIndex(0);

          setRankVodList(data?.pages[0][selectedRankIndex]?.list);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
    },
  );

  const renderItem = ({item}: ttBing) => (
    <VodPlaylist playlist={item} titleStyle={{color: colors.text}} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
    }

    await queryClient.resetQueries(['vodPlaylist']);
  }, []);

  useEffect(() => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      {isRefreshing && !isOffline && (
        <View
          style={{
            ...styles.loading,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {
            <FastImage
              style={{height: 80, width: 80}}
              source={require('@static/images/toponTerms.gif')}
              resizeMode={'contain'}
            />
          }
        </View>
      )}
      {!isOffline && (
        <>
          {}
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingLeft: 20,
              alignItems: 'center',
            }}>
            {tabList.map((tab, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelectedRankIndex(i);
                  console.log('click');
                  setRankVodList(playlists?.pages[0][i]?.list);
                }}
                style={{
                  // backgroundColor: selectedRankIndex == i ? "#000000" : 'transparent',
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 5,
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    color: selectedRankIndex == i ? '#ffffff' : '#9c9c9c',
                    paddingBottom: 5,
                    fontSize: selectedRankIndex == i ? 18 : 15,
                  }}>
                  {tab?.type}
                </Text>
                {selectedRankIndex == i && (
                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      height: 4,
                      width: 15,
                      alignSelf: 'center',
                      borderRadius: 5,
                    }}></View>
                )}
              </TouchableOpacity>
            ))}
          </View>
          {}

          {rankVodList?.length > 0 && (
            <VodWithDescriptionListRank
              vodList={rankVodList}
              onClickCatalogVideo={() => {}}
            />
          )}

          {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages[selectedRankIndex]?.list}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/toponTerms.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" // Customize the color of the loading spinner
                />
              }
            /> */}
        </>
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(Rank);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
