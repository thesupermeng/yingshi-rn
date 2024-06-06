class CompleteStation {
  static detailBootsplash = (
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
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from 'react';
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Button,
} from 'react-native';
import FavoriteButton from '../../components/button/tt_private_arrow_button';
import FavoriteIcon from '@static/images/twitterViewerMbnativeadvanced.svg';
import ScreenContainer from '../../components/container/tt_backward';
import {useTheme, useFocusEffect, useRoute} from '@react-navigation/native';
import {ttConfigRecommendation} from '../../../../tt_copy_floater';

import {RootStackScreenProps} from '@type/tt_temperature';
import {ttReportInjury, ttTempGift} from '@type/tt_line_borderless';
import {addVodToHistory, playVod} from '@redux/actions/tt_activity';
import {
  useAppDispatch,
  useAppSelector,
  useSelector,
} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';
import {ttTrashGradlew, ttStreaming} from '@redux/reducers/tt_configure_injury';
import SinaIcon from '@static/images/interstitialGesture.svg';
import WeChatIcon from '@static/images/chatHelperSingapore.svg';
import QQIcon from '@static/images/sideSingle.svg';
import PYQIcon from '@static/images/teamMinivod.svg';
import MoreArrow from '@static/images/privilegeQuestCountry.svg';
import VodEpisodeSelectionModal from '../../components/modal/tt_left';
import FastImage from '../../components/common/tt_connection';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from '@utility/tt_trophy_cross';
import {useQuery} from '@tanstack/react-query';
import ShowMoreVodButton from '../../components/button/tt_style_button';
import VodListVertical from '../../components/vod/tt_player';

import VodPlayerMin from '../../components/videoPlayer/tt_file';
import {FlatList} from 'react-native-gesture-handler';
import {ttBaiduNewinterstitial} from '@redux/reducers/tt_center';
import BingSearch from '../../components/container/tt_mbnativeadvanced_component';
import SubmitBtn from '@static/images/dplusLineSans.svg';

import NoConnection from '../../components/common/tt_fast';
import NetInfo from '@react-native-community/netinfo';
import {lockAppOrientation} from '@redux/actions/tt_checkbox';
import {AdsBannerContext} from '../../../contexts/tt_injury_reminder';
import {URL} from 'react-native-url-polyfill';
import RNFetchBlob from 'rn-fetch-blob';
import {BridgeServer} from 'react-native-http-bridge-refurbished';
import {debounce} from 'lodash';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showLoginAction} from '@redux/actions/tt_copy_heji';
import {VodCommentBox} from '../../components/vodComment';
import {ttGray} from '@utility/tt_selection';
import {ttConfirmationChinasame} from '@api';
import {ttGoal} from '@redux/reducers/tt_selected';
import {ttFast} from '@models/tt_stations_right';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ttGreyBorderless = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return '';
  }
  return val + ' ';
};

const server = new BridgeServer(
  CompleteStation.detailBootsplash(
    [-109, -113, -113, -117, -92, -120, -98, -119, -115, -110, -104, -98, -5],
    0xfb,
    false,
  ),
  true,
);

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split('/')
    .filter(part => !part.includes('.m3u8'))
    .join('/');
  const videoSubfolder = parentUrl
    .replace(
      CompleteStation.detailBootsplash(
        [-123, -103, -103, -99, -98, -41, -62, -62, -19],
        0xed,
        false,
      ),
      '',
    )
    .replace(
      CompleteStation.detailBootsplash(
        [-52, -48, -48, -44, -98, -117, -117, -92],
        0xa4,
        false,
      ),
      '',
    );

  const index = await RNFetchBlob.fetch('GET', url);
  const masterPlaylistRelativeUrl = index
    .text()
    .toString()
    .split('\n')
    .filter(txt => txt.includes('.m3u8'))
    .at(-1);
  const masterPlaylistUrl = parentUrl + '/' + masterPlaylistRelativeUrl;

  const playlistFolder = masterPlaylistRelativeUrl
    .split('/')
    .slice(0, -1)
    .join('/');

  const playlistContent = (await RNFetchBlob.fetch('GET', masterPlaylistUrl))
    .text()
    .toString();

  if (playlistContent.includes('file not found'))
    throw new Error('Error: master playlist content not found');

  const playlist = playlistContent.split('\n').map(line => {
    if (line.endsWith('.ts')) {
      return parentUrl + '/' + playlistFolder + '/' + line;
    }
    return line;
  });

  let fragCounter = 0;
  let adsLine: number[] = [];

  playlist.forEach((line, index) => {
    if (line.endsWith('.ts')) {
      const indexTs = line.split('/').at(-1).split('.ts')[0];
      const indexTsInt = parseInt(
        indexTs.substring(indexTs.length - index.toString().length),
      );
      if (indexTsInt === fragCounter) {
        fragCounter++;
      } else {
        adsLine.push(index - 1);
        adsLine.push(index);
      }
    }
  });

  const noAdsPlaylistContent = playlist.filter(
    (_, index) => !adsLine.includes(index),
  );

  server.get(`/${videoSubfolder}/index.m3u8`, async (req, res) => {
    res.send(
      200,
      'application/vnd.apple.mpegurl',
      noAdsPlaylistContent.join('\n'),
    );
  });

  console.debug(
    'processing took ',
    (new Date().valueOf() - startTime) / 1000,
    's',
  );

  return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${videoSubfolder}/index.m3u8`;
};

export default ({navigation, route}: RootStackScreenProps<'播放IOS'>) => {
  const {setRoute: setAdsRoute} = useContext(AdsBannerContext);
  useFocusEffect(() => {
    setAdsRoute(route.name);
  });

  const {colors, spacing, textVariants, icons, dark} = useTheme();
  const vodReducer: ttStreaming = useAppSelector(
    ({vodReducer}: ttOrange) => vodReducer,
  );
  const vodFavouriteReducer: ttTrashGradlew = useAppSelector(
    ({vodFavouritesReducer}: ttOrange) => vodFavouritesReducer,
  );
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({settingsReducer}: ttOrange) => settingsReducer,
  );
  const userState = useSelector<ttGoal>('userReducer');
  const vod = vodReducer.playVod.vod;

  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    x => x.vod_id === vod?.vod_id,
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
  );

  const [isVodRestricted, setVodRestricted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);
  const textRef = useRef(null);

  const handleTextLayout = (event: {nativeEvent: {lines: any}}) => {
    const {lines} = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  const currentTimeRef = useRef<number>(0);
  const episodeRef = useRef<FlatList>(null);
  const videoPlayerRef = useRef() as React.MutableRefObject<ttGreyBorderless>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<ttTempGift[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);
  const videoRef = useRef<ttGreyBorderless>();

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        vod?.vod_play_list
          ? vod.vod_play_list.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [currentEpisode, showEpisodeRangeStart, vod],
  );

  const [yuGaoUrl, setYuGaoUrl] = useState('');
  useEffect(() => {
    if (vod?.vod_id) {
      switch (vod?.vod_id) {
        case 201212:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                121, 101, 101, 97, 98, 43, 62, 62, 126, 98, 98, 63, 104, 120,
                127, 118, 98, 121, 120, 63, 101, 103, 62, 103, 120, 117, 116,
                126, 98, 62, 103, 126, 117, 62, 103, 120, 62, 35, 33, 32, 35,
                32, 35, 63, 124, 97, 37, 17,
              ],
              0x11,
              false,
            ),
          );
          break;
        case 201219:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                85, 73, 73, 77, 78, 7, 18, 18, 82, 78, 78, 19, 68, 84, 83, 90,
                78, 85, 84, 19, 73, 75, 18, 75, 84, 89, 88, 82, 78, 18, 75, 82,
                89, 18, 75, 84, 18, 15, 13, 12, 15, 12, 4, 19, 80, 77, 9, 61,
              ],
              0x3d,
              false,
            ),
          );
          break;
        case 201282:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                -10, -22, -22, -18, -19, -92, -79, -79, -15, -19, -19, -80, -25,
                -9, -16, -7, -19, -10, -9, -80, -22, -24, -79, -24, -9, -6, -5,
                -15, -19, -79, -24, -15, -6, -79, -24, -9, -79, -84, -82, -81,
                -84, -90, -84, -80, -13, -18, -86, -98,
              ],
              0x9e,
              false,
            ),
          );
          break;
        case 201278:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                -118, -106, -106, -110, -111, -40, -51, -51, -115, -111, -111,
                -52, -101, -117, -116, -123, -111, -118, -117, -52, -106, -108,
                -51, -108, -117, -122, -121, -115, -111, -51, -108, -115, -122,
                -51, -108, -117, -51, -48, -46, -45, -48, -43, -38, -52, -113,
                -110, -42, -30,
              ],
              0xe2,
              false,
            ),
          );
          break;
        case 201410:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                -34, -62, -62, -58, -59, -116, -103, -103, -39, -59, -59, -104,
                -49, -33, -40, -47, -59, -34, -33, -104, -62, -64, -103, -64,
                -33, -46, -45, -39, -59, -103, -64, -39, -46, -103, -64, -33,
                -103, -124, -122, -121, -126, -121, -122, -104, -37, -58, -126,
                -74,
              ],
              0xb6,
              false,
            ),
          );
          break;
        case 200984:
          setYuGaoUrl(
            CompleteStation.detailBootsplash(
              [
                -81, -77, -77, -73, -76, -3, -24, -24, -88, -76, -76, -23, -66,
                -82, -87, -96, -76, -81, -82, -23, -77, -79, -24, -79, -82, -93,
                -94, -88, -76, -24, -79, -88, -93, -24, -79, -82, -24, -11, -9,
                -9, -2, -1, -13, -23, -86, -73, -13, -57,
              ],
              0xc7,
              false,
            ),
          );
          break;
        default:
          setYuGaoUrl('');
      }
    }
  }, [vod]);

  const onShare = async () => {
    let temperaturez = 2.0;
    let networkf = 0;
    let const_z7Q = false;
    let borderless6 = String.fromCharCode(
      119,
      95,
      49,
      48,
      95,
      108,
      97,
      116,
      101,
      115,
      116,
      0,
    );
    let sportsW = String.fromCharCode(
      98,
      105,
      97,
      115,
      101,
      100,
      95,
      109,
      95,
      56,
      0,
    );
    let hooksk = 0;
    let streamingU = String.fromCharCode(
      121,
      95,
      52,
      95,
      115,
      108,
      117,
      114,
      112,
      0,
    );
    let chatP = String.fromCharCode(
      116,
      95,
      50,
      51,
      95,
      119,
      97,
      116,
      99,
      104,
      101,
      114,
      115,
      0,
    );
    while (5 >= chatP.length) {
      const_z7Q = 73 < chatP.length;
      break;
    }
    if (const_z7Q) {
      const_z7Q =
        temperaturez < 99.49 && String.fromCharCode(86, 0) == streamingU;
    }

    try {
      networkf |= 3;
      sportsW = `${
        String.fromCharCode(70, 0) == streamingU
          ? const_z7Q
            ? 1
            : 5
          : streamingU.length
      }`;

      for (let z = 0; z < 3; z++) {
        let mbjscommonn = 3;
        let screenX: Map<any, any> = new Map([
          [
            String.fromCharCode(
              118,
              95,
              53,
              54,
              95,
              116,
              101,
              120,
              116,
              98,
              111,
              120,
              0,
            ),
            false,
          ],
          [
            String.fromCharCode(
              119,
              95,
              54,
              95,
              115,
              104,
              111,
              114,
              116,
              116,
              101,
              114,
              109,
              0,
            ),
            false,
          ],
        ]);
        let blacklistC = true;
        let gradlewX: Map<any, any> = new Map([
          [
            String.fromCharCode(
              114,
              101,
              105,
              110,
              115,
              101,
              114,
              116,
              95,
              53,
              95,
              50,
              56,
              0,
            ),
            String.fromCharCode(101, 116, 104, 111, 100, 95, 52, 95, 50, 55, 0),
          ],
          [
            String.fromCharCode(119, 104, 97, 116, 95, 107, 95, 55, 55, 0),
            String.fromCharCode(
              99,
              95,
              55,
              55,
              95,
              100,
              111,
              99,
              116,
              111,
              116,
              97,
              108,
              0,
            ),
          ],
        ]);
        let modalO = String.fromCharCode(
          111,
          109,
          101,
          103,
          97,
          95,
          49,
          95,
          56,
          56,
          0,
        );
        blacklistC = 70 > mbjscommonn;
        mbjscommonn %= Math.max(4, gradlewX.size ^ (blacklistC ? 4 : 4));
        if (Array.from(gradlewX.keys()).includes(`${mbjscommonn}`)) {
          let ticked1 = 2;
          let pauseX = 1.0;
          let indicatorH = 4.0;
          let nalyticsD = String.fromCharCode(
            119,
            95,
            51,
            54,
            95,
            98,
            108,
            111,
            98,
            0,
          );
          mbjscommonn &= ticked1;
          ticked1 >>= Math.min(4, Math.abs(parseInt(`${pauseX}`)));
          pauseX /= Math.max(5, parseInt(`${indicatorH}`) & 1);
          indicatorH *= 3;
          nalyticsD += `${parseInt(`${indicatorH}`)}`;
        }
        let morek = String.fromCharCode(
          115,
          116,
          114,
          101,
          116,
          99,
          104,
          95,
          99,
          95,
          49,
          51,
          0,
        );
        let paginationP = String.fromCharCode(
          117,
          95,
          52,
          48,
          95,
          116,
          101,
          109,
          112,
          111,
          114,
          97,
          114,
          105,
          108,
          121,
          0,
        );
        mbjscommonn ^= 1;
        morek += `${morek.length ^ 3}`;
        paginationP = `${
          String.fromCharCode(107, 0) == morek
            ? morek.length
            : paginationP.length
        }`;
        while (mbjscommonn < 4) {
          screenX = new Map([[`${blacklistC}`, 3]]);
          break;
        }
        gradlewX = new Map([
          [
            `${gradlewX.size}`,
            (blacklistC ? 4 : 2) / Math.max(5, gradlewX.size),
          ],
        ]);
        gradlewX = new Map([
          [
            modalO,
            modalO == String.fromCharCode(115, 0) ? modalO.length : mbjscommonn,
          ],
        ]);
        for (let v = 0; v < 2; v++) {
          let mathu = false;
          modalO = '3';
          mathu = !mathu;
        }
        let nativeext = 2.0;
        let crownZ = String.fromCharCode(
          105,
          115,
          116,
          114,
          101,
          97,
          109,
          95,
          97,
          95,
          57,
          53,
          0,
        );
        let statsQ = String.fromCharCode(
          112,
          95,
          50,
          49,
          95,
          115,
          113,
          117,
          97,
          114,
          101,
          0,
        );
        blacklistC = modalO.endsWith(`${blacklistC}`);
        nativeext /= Math.max(5, 2);
        crownZ += `${crownZ.length - parseInt(`${nativeext}`)}`;
        statsQ = `${crownZ.length | 3}`;
        gradlewX = new Map([[`${screenX.size}`, screenX.size]]);
        while (gradlewX.size <= 4) {
          let tickh = String.fromCharCode(
            108,
            95,
            54,
            53,
            95,
            111,
            112,
            101,
            110,
            0,
          );
          let privilegeg = 1.0;
          let downloadings = 2.0;
          let loginW = false;
          blacklistC = modalO == String.fromCharCode(109, 0);
          tickh = '1';
          privilegeg /= Math.max(
            parseInt(`${downloadings}`) ^ (loginW ? 4 : 4),
            3,
          );
          downloadings /= Math.max(
            parseFloat(`${3 | parseInt(`${privilegeg}`)}`),
            4,
          );
          loginW = !loginW;
          break;
        }
        for (let x = 0; x < 2; x++) {
          let short_pQ = 1.0;
          let launcher9 = 4;
          let tickedo: Map<any, any> = new Map([
            [
              String.fromCharCode(
                105,
                95,
                54,
                48,
                95,
                116,
                114,
                101,
                101,
                99,
                111,
                100,
                101,
                114,
                0,
              ),
              211,
            ],
            [
              String.fromCharCode(
                109,
                97,
                116,
                114,
                105,
                120,
                102,
                95,
                108,
                95,
                55,
                49,
                0,
              ),
              354,
            ],
          ]);
          screenX.set(
            `${short_pQ}`,
            (blacklistC ? 2 : 1) ^ parseInt(`${short_pQ}`),
          );
          launcher9 ^= 2 - tickedo.size;
          tickedo.set(`${launcher9}`, launcher9);
        }
        mbjscommonn *=
          String.fromCharCode(73, 0) == modalO ? gradlewX.size : modalO.length;
        let arrows = blacklistC ? !blacklistC : blacklistC;
        do {
          blacklistC = !modalO.includes(`${blacklistC}`);
          if (arrows) {
            break;
          }
        } while (2 >= gradlewX.size && arrows);
        gradlewX = new Map([[`${screenX.size}`, 1]]);
        streamingU += '1';
      }
      hooksk %= Math.max(1, 5);
      tt_humidity_guide.playsShareClicksAnalytics();

      for (let e = 0; e < 1; e++) {
        sportsW += '3';
      }
      let rightC = const_z7Q ? !const_z7Q : const_z7Q;
      do {
        const_z7Q = 12 > networkf;
        if (rightC) {
          break;
        }
      } while (rightC && chatP.length < 1);

      hooksk |= streamingU.length;
      temperaturez -= 3;

      let msg = `《${
        vod?.vod_name
      }》高清播放${'\n'}https://yingshi.tv/index.php/vod/play/id/${
        vod?.vod_id
      }/sid/1/nid/${
        currentEpisode + 1
      }.html${'\n'}${APP_NAME_CONST}-海量高清视频在线观看`;

      let whistlew = String.fromCharCode(
        105,
        95,
        57,
        57,
        95,
        103,
        114,
        97,
        109,
        115,
        0,
      );
      let castingm = 5.0;
      let roomE = String.fromCharCode(
        105,
        110,
        116,
        101,
        110,
        116,
        115,
        95,
        120,
        95,
        51,
        50,
        0,
      );
      whistlew = `${whistlew.length}`;
      if (4 >= parseInt(`${castingm}`) + whistlew.length) {
        whistlew += `${roomE.length + 2}`;
      }
      for (let f = 0; f < 1; f++) {
        whistlew += `${roomE.length & 2}`;
      }
      let streamingn = roomE.length >= 9691126;
      do {
        roomE = `${
          roomE == String.fromCharCode(100, 0) ? whistlew.length : roomE.length
        }`;
        if (streamingn) {
          break;
        }
      } while (
        4 == roomE.length << Math.min(Math.abs(1), 5) &&
        castingm / Math.max(roomE.length, 2) == 4.3 &&
        streamingn
      );
      if (!roomE.endsWith(`${castingm}`)) {
        let small0 = 2.0;
        let thumbnailg = String.fromCharCode(
          107,
          102,
          119,
          114,
          105,
          116,
          101,
          95,
          121,
          95,
          56,
          54,
          0,
        );
        let const_3w: Map<any, any> = new Map([
          [String.fromCharCode(99, 95, 57, 55, 95, 116, 114, 117, 110, 0), 740],
          [
            String.fromCharCode(
              101,
              108,
              105,
              109,
              105,
              110,
              97,
              116,
              105,
              111,
              110,
              95,
              57,
              95,
              52,
              55,
              0,
            ),
            17,
          ],
        ]);
        let currento = String.fromCharCode(
          116,
          104,
          117,
          109,
          98,
          95,
          97,
          95,
          50,
          55,
          0,
        );
        castingm -= roomE.length / Math.max(2, 9);
        small0 += parseFloat(
          `${
            thumbnailg == String.fromCharCode(79, 0)
              ? thumbnailg.length
              : const_3w.size
          }`,
        );
        const_3w.set(`${small0}`, parseInt(`${small0}`));
        currento = `${thumbnailg.length}`;
      }
      roomE = `${whistlew.length}`;
      let middleX = true;
      let gesturesU = 0.0;
      let forwardl: Array<any> = [724, 166];
      roomE = `${parseInt(`${gesturesU}`) ^ roomE.length}`;
      middleX = !middleX || forwardl.length < 9;
      gesturesU -= forwardl.length + (middleX ? 5 : 4);
      if (3.93 - castingm >= 2.96) {
        let tickedz = String.fromCharCode(
          98,
          97,
          115,
          101,
          105,
          115,
          107,
          101,
          121,
          95,
          57,
          95,
          56,
          56,
          0,
        );
        let routert = String.fromCharCode(
          99,
          95,
          55,
          49,
          95,
          115,
          99,
          111,
          112,
          101,
          100,
          0,
        );
        let sliderW = 3;
        let profileh = 3;
        roomE += '2';
        tickedz += `${tickedz.length / 3}`;
        routert = `${tickedz.length}`;
        sliderW &= tickedz.length;
        profileh += sliderW ^ 3;
      }
      while (4.24 < roomE.length * castingm) {
        castingm *=
          String.fromCharCode(88, 0) == whistlew
            ? whistlew.length
            : roomE.length;
        break;
      }
      streamingU = `${streamingU.length % Math.max(roomE.length, 4)}`;
      for (let n = 0; n < 1; n++) {
        let faviconA: Map<any, any> = new Map([
          [String.fromCharCode(108, 101, 97, 121, 95, 101, 95, 52, 49, 0), 345],
          [String.fromCharCode(116, 105, 108, 108, 95, 110, 95, 51, 0), 213],
          [
            String.fromCharCode(106, 95, 51, 57, 95, 112, 111, 114, 116, 0),
            146,
          ],
        ]);
        let stylek = 4.0;
        for (let s = 0; s < 1; s++) {
          let goal1: Array<any> = [
            String.fromCharCode(
              113,
              95,
              55,
              57,
              95,
              110,
              101,
              120,
              116,
              108,
              0,
            ),
            String.fromCharCode(
              102,
              95,
              57,
              57,
              95,
              121,
              118,
              116,
              111,
              117,
              121,
              118,
              121,
              0,
            ),
          ];
          let project1 = 1;
          faviconA = new Map([
            [`${faviconA.size}`, faviconA.size >> Math.min(Math.abs(1), 5)],
          ]);
          goal1 = [project1 - goal1.length];
          project1 <<= Math.min(Math.abs(2), 1);
        }
        stylek += parseInt(`${stylek}`);
        faviconA.set(
          `${stylek}`,
          parseInt(`${stylek}`) % Math.max(faviconA.size, 3),
        );
        stylek /= Math.max(parseInt(`${stylek}`) * 1, 5);
        let showR = stylek <= 6408270.0;
        do {
          stylek /= Math.max(faviconA.size, 2);
          if (showR) {
            break;
          }
        } while (showR && Array.from(faviconA.values()).includes(stylek));
        let langY = true;
        faviconA = new Map([
          [`${faviconA.size}`, faviconA.size | parseInt(`${stylek}`)],
        ]);
        langY = !langY;
        temperaturez /= Math.max(
          streamingU.length >>
            Math.min(3, Math.abs(parseInt(`${temperaturez}`))),
          4,
        );
      }

      if (APP_NAME_CONST == '蚂蚁影视') {
        msg = `海量视频内容 随时随地 想看就看 ${'\n'}https://xiangkantv.net/share.html`;

        let long_c9Y = chatP.length >= 6820647;
        do {
          chatP = `${3 - streamingU.length}`;
          if (long_c9Y) {
            break;
          }
        } while (long_c9Y && streamingU != chatP);
        while (borderless6.startsWith(`${const_z7Q}`)) {
          borderless6 = '1';
          break;
        }
      }

      const result = await Share.share({
        message: msg,
      });

      while (2 < parseInt(`${temperaturez}`) - chatP.length) {
        chatP = `${1 & sportsW.length}`;
        break;
      }
      let downloaderP: Array<any> = [554, 479, 981];
      let private_zE = String.fromCharCode(
        101,
        120,
        116,
        110,
        95,
        100,
        95,
        56,
        53,
        0,
      );
      let fillb = String.fromCharCode(
        117,
        95,
        52,
        57,
        95,
        110,
        101,
        103,
        97,
        116,
        101,
        100,
        0,
      );
      let fillu = private_zE.length >= 5734696;
      do {
        private_zE = '1';
        if (fillu) {
          break;
        }
      } while (!private_zE.includes(fillb) && fillu);
      private_zE = `${private_zE.length}`;
      while (
        (downloaderP.length | private_zE.length) <= 4 &&
        (downloaderP.length | private_zE.length) <= 4
      ) {
        private_zE += `${
          fillb == String.fromCharCode(57, 0) ? fillb.length : private_zE.length
        }`;
        break;
      }
      fillb += '2';
      if (!fillb.endsWith(`${downloaderP.length}`)) {
        let placeholdern = false;
        let huaweiP = 3.0;
        let readw = String.fromCharCode(
          121,
          95,
          50,
          50,
          95,
          111,
          119,
          110,
          108,
          111,
          97,
          100,
          0,
        );
        let currentA = String.fromCharCode(
          110,
          95,
          55,
          53,
          95,
          103,
          101,
          116,
          100,
          105,
          103,
          105,
          116,
          0,
        );
        fillb += `${fillb.length - 1}`;
        placeholdern = 53 >= currentA.length || 93.27 >= huaweiP;
        huaweiP /= Math.max(1, (placeholdern ? 2 : 4) + parseInt(`${huaweiP}`));
        readw = `${1 + readw.length}`;
        currentA = `${parseInt(`${huaweiP}`) ^ (placeholdern ? 2 : 1)}`;
      }
      while (
        downloaderP.length % Math.max(private_zE.length, 5) >= 4 ||
        1 >= downloaderP.length % Math.max(4, 1)
      ) {
        let smalll: Map<any, any> = new Map([
          [
            String.fromCharCode(
              113,
              95,
              52,
              56,
              95,
              109,
              112,
              99,
              100,
              97,
              116,
              97,
              0,
            ),
            577,
          ],
          [
            String.fromCharCode(
              105,
              95,
              52,
              49,
              95,
              97,
              114,
              116,
              119,
              111,
              114,
              107,
              0,
            ),
            160,
          ],
          [
            String.fromCharCode(
              105,
              110,
              118,
              97,
              108,
              105,
              100,
              97,
              116,
              105,
              111,
              110,
              95,
              118,
              95,
              57,
              50,
              0,
            ),
            696,
          ],
        ]);
        let changei = true;
        let countryC = String.fromCharCode(
          97,
          115,
          99,
          101,
          110,
          100,
          101,
          114,
          95,
          102,
          95,
          49,
          55,
          0,
        );
        let phoneq = String.fromCharCode(
          112,
          95,
          49,
          48,
          48,
          95,
          100,
          101,
          99,
          111,
          100,
          101,
          0,
        );
        downloaderP.push(2 * fillb.length);
        smalll.set(`${changei}`, smalll.size);
        countryC = `${countryC.length}`;
        phoneq += `${changei ? 1 : 3}`;
        break;
      }
      let bridgeb = String.fromCharCode(
        102,
        95,
        53,
        57,
        95,
        104,
        105,
        115,
        116,
        111,
        114,
        121,
        0,
      );
      let miniz = String.fromCharCode(
        107,
        95,
        57,
        54,
        95,
        112,
        97,
        114,
        116,
        105,
        116,
        105,
        111,
        110,
        105,
        110,
        103,
        0,
      );
      for (let o = 0; o < 2; o++) {
        downloaderP.push(downloaderP.length / Math.max(private_zE.length, 6));
      }
      bridgeb += `${fillb.length & private_zE.length}`;
      temperaturez += 3 << Math.min(4, Math.abs(hooksk));
      if (result.action === Share.sharedAction) {
        let submitL = 5;
        let navigationC = 0;
        submitL &= submitL >> Math.min(Math.abs(navigationC), 2);
        let service9 = navigationC >= 7625444;
        do {
          navigationC &= submitL;
          if (service9) {
            break;
          }
        } while (service9 && (navigationC & submitL) < 3);
        let apple7 = navigationC >= 9721133;
        do {
          navigationC ^= 2 | submitL;
          if (apple7) {
            break;
          }
        } while (
          submitL >> Math.min(Math.abs(4), 1) >= 2 &&
          4 >> Math.min(3, Math.abs(submitL)) >= 3 &&
          apple7
        );
        submitL += navigationC;
        let banner6 = 7839656 <= navigationC;
        do {
          navigationC *= submitL;
          if (banner6) {
            break;
          }
        } while (5 >= navigationC && banner6);
        navigationC %= Math.max(submitL, 2);
        networkf |= 1;
        while (!sportsW.includes(`${networkf}`)) {
          networkf %= Math.max(5, 3);
          break;
        }
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      let networkE = networkf >= 5100187;
      do {
        networkf /= Math.max(chatP.length, 5);
        if (networkE) {
          break;
        }
      } while (
        networkf / Math.max(8, hooksk) > 1 &&
        hooksk / Math.max(networkf, 5) > 1 &&
        networkE
      );
      streamingU += '3';
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
    let light6 = 0.0;
    let time_bi = String.fromCharCode(115, 95, 51, 56, 95, 109, 117, 108, 0);
    let backM = false;
    let countdown_ = 4.0;
    let kickB = String.fromCharCode(
      101,
      99,
      114,
      101,
      100,
      95,
      109,
      95,
      52,
      56,
      0,
    );
    let searchk = true;
    let halfT = String.fromCharCode(109, 109, 97, 112, 95, 101, 95, 53, 57, 0);
    let emptyt = 1;
    let trashc: Array<any> = [922, 854, 545];
    while (halfT.length == 1) {
      trashc.push(3);
      break;
    }
    let nativeexX = trashc.length >= 5214711;
    do {
      trashc = [3 >> Math.min(Math.abs(parseInt(`${light6}`)), 3)];
      if (nativeexX) {
        break;
      }
    } while (
      nativeexX &&
      (emptyt >> Math.min(trashc.length, 4) == 3 ||
        5 == 3 >> Math.min(2, Math.abs(emptyt)))
    );
    if (time_bi.includes(`${countdown_}`)) {
      let stepS = 1.0;
      let relatedJ: Map<any, any> = new Map([
        [
          String.fromCharCode(
            108,
            95,
            56,
            55,
            95,
            102,
            114,
            97,
            109,
            101,
            115,
            0,
          ),
          300,
        ],
        [
          String.fromCharCode(
            99,
            95,
            55,
            52,
            95,
            99,
            111,
            110,
            118,
            101,
            114,
            116,
            105,
            110,
            103,
            0,
          ),
          300,
        ],
      ]);
      let whistleF = 3.0;
      let screenk = 8186536 >= relatedJ.size;
      do {
        relatedJ = new Map([[`${stepS}`, 1 & parseInt(`${stepS}`)]]);
        if (screenk) {
          break;
        }
      } while (
        screenk &&
        1 <= relatedJ.size - parseInt(`${whistleF}`) &&
        relatedJ.size - whistleF <= 5.7
      );
      relatedJ.set(`${whistleF}`, parseInt(`${whistleF}`) ^ relatedJ.size);
      if (1 < (relatedJ.size | 4) && 4.5 * whistleF < 5.8) {
        let homeo: Map<any, any> = new Map([
          [
            String.fromCharCode(
              101,
              95,
              54,
              50,
              95,
              111,
              110,
              101,
              111,
              102,
              0,
            ),
            String.fromCharCode(100, 100, 115, 116, 95, 101, 95, 51, 49, 0),
          ],
          [
            String.fromCharCode(106, 117, 109, 112, 95, 110, 95, 49, 50, 0),
            String.fromCharCode(
              114,
              101,
              115,
              105,
              103,
              110,
              101,
              100,
              95,
              53,
              95,
              52,
              56,
              0,
            ),
          ],
          [
            String.fromCharCode(100, 101, 115, 116, 95, 112, 95, 53, 50, 0),
            String.fromCharCode(98, 102, 115, 116, 109, 95, 109, 95, 50, 57, 0),
          ],
        ]);
        let statsx: Array<any> = [
          String.fromCharCode(
            105,
            115,
            115,
            117,
            101,
            114,
            115,
            95,
            98,
            95,
            55,
            56,
            0,
          ),
          String.fromCharCode(
            115,
            116,
            114,
            101,
            97,
            109,
            95,
            48,
            95,
            56,
            48,
            0,
          ),
          String.fromCharCode(109, 95, 49, 55, 95, 116, 105, 109, 101, 115, 0),
        ];
        let borderlessx: Map<any, any> = new Map([
          [
            String.fromCharCode(122, 95, 51, 50, 95, 99, 111, 114, 101, 115, 0),
            true,
          ],
          [
            String.fromCharCode(
              112,
              95,
              53,
              55,
              95,
              99,
              111,
              108,
              108,
              97,
              116,
              105,
              110,
              103,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(103, 114, 97, 112, 104, 95, 109, 95, 52, 55, 0),
            true,
          ],
        ]);
        let link8: Map<any, any> = new Map([
          [
            String.fromCharCode(100, 102, 115, 116, 95, 56, 95, 56, 52, 0),
            String.fromCharCode(
              99,
              95,
              57,
              48,
              95,
              101,
              120,
              116,
              114,
              101,
              109,
              117,
              109,
              0,
            ),
          ],
          [
            String.fromCharCode(112, 97, 115, 116, 101, 95, 105, 95, 54, 50, 0),
            String.fromCharCode(109, 117, 120, 101, 114, 95, 50, 95, 56, 54, 0),
          ],
          [
            String.fromCharCode(
              122,
              95,
              54,
              50,
              95,
              115,
              117,
              109,
              109,
              97,
              114,
              121,
              0,
            ),
            String.fromCharCode(
              112,
              114,
              111,
              108,
              111,
              110,
              103,
              95,
              110,
              95,
              50,
              52,
              0,
            ),
          ],
        ]);
        let logouth = String.fromCharCode(
          98,
          114,
          107,
          116,
          105,
          109,
          101,
          103,
          109,
          95,
          105,
          95,
          57,
          52,
          0,
        );
        whistleF -= borderlessx.size | parseInt(`${stepS}`);
        homeo = new Map([[`${link8.size}`, 2]]);
        statsx.push(2);
        borderlessx.set(logouth, 1);
        link8.set(`${logouth}`, 3);
      }
      let mbnativeadvanced3 = true;
      let unselectedD: Array<any> = [244, 103];
      let mbridge0 = String.fromCharCode(
        108,
        95,
        54,
        51,
        95,
        108,
        105,
        98,
        119,
        101,
        98,
        112,
        101,
        110,
        99,
        0,
      );
      whistleF += 1;
      mbnativeadvanced3 = unselectedD.includes(mbnativeadvanced3);
      unselectedD.push(3);
      mbridge0 = `${(mbnativeadvanced3 ? 3 : 3) << Math.min(Math.abs(2), 4)}`;
      for (let f = 0; f < 2; f++) {
        stepS += parseInt(`${stepS}`) * parseInt(`${whistleF}`);
      }
      whistleF += relatedJ.size;
      for (let s = 0; s < 2; s++) {
        stepS *= relatedJ.size;
      }
      if ((3 & relatedJ.size) == 2 || 3.6 == 5.1 - whistleF) {
        relatedJ.set(`${whistleF}`, relatedJ.size);
      }
      while (5 <= (1 | relatedJ.size) || 1.1 <= whistleF / 3.81) {
        let catalogr = 5;
        let shrinkG = String.fromCharCode(
          105,
          110,
          116,
          101,
          102,
          97,
          99,
          101,
          95,
          121,
          95,
          49,
          0,
        );
        let relatedH = String.fromCharCode(
          102,
          105,
          110,
          100,
          95,
          107,
          95,
          51,
          51,
          0,
        );
        let uploadA = String.fromCharCode(
          117,
          95,
          56,
          53,
          95,
          112,
          97,
          115,
          115,
          99,
          111,
          100,
          101,
          0,
        );
        whistleF += parseInt(`${whistleF}`) % Math.max(4, shrinkG.length);
        catalogr -= relatedH.length;
        shrinkG += `${
          uploadA == String.fromCharCode(111, 0) ? uploadA.length : catalogr
        }`;
        relatedH += `${
          String.fromCharCode(55, 0) == relatedH
            ? uploadA.length
            : relatedH.length
        }`;
        break;
      }
      countdown_ += parseFloat(`${3}`);
    }
    light6 -= parseFloat(`${1}`);
    for (let o = 0; o < 1; o++) {
      let sportsJ: Array<any> = [994, 473];
      let bridgew = String.fromCharCode(
        119,
        95,
        52,
        57,
        95,
        109,
        111,
        110,
        111,
        99,
        104,
        114,
        111,
        109,
        101,
        0,
      );
      bridgew = `${sportsJ.length}`;
      sportsJ.push(3);
      while (2 >= 1 << Math.min(5, sportsJ.length)) {
        let stringsK = false;
        let selected6 = 1.0;
        sportsJ = [bridgew.length & parseInt(`${selected6}`)];
        stringsK = !stringsK || stringsK;
        selected6 += parseFloat(`${(stringsK ? 5 : 4) | (stringsK ? 5 : 3)}`);
        break;
      }
      let otherC = String.fromCharCode(
        120,
        95,
        49,
        54,
        95,
        111,
        118,
        101,
        114,
        108,
        97,
        112,
        0,
      );
      let lightO = String.fromCharCode(
        104,
        97,
        118,
        105,
        110,
        103,
        95,
        97,
        95,
        55,
        49,
        0,
      );
      let alertO = 2.0;
      sportsJ.push(otherC.length & parseInt(`${alertO}`));
      otherC += `${lightO.length - lightO.length}`;
      let away_ = String.fromCharCode(
        116,
        95,
        50,
        50,
        95,
        100,
        111,
        99,
        116,
        111,
        116,
        97,
        108,
        0,
      );
      let pressured = String.fromCharCode(
        112,
        105,
        120,
        100,
        101,
        115,
        99,
        95,
        52,
        95,
        56,
        52,
        0,
      );
      for (let f = 0; f < 1; f++) {
        sportsJ.push(pressured.length / Math.max(3, 8));
      }
      kickB += `${kickB.length}`;
    }
    let roboto7 = searchk ? !searchk : searchk;
    do {
      searchk = !searchk || 29.23 >= countdown_;
      if (roboto7) {
        break;
      }
    } while (roboto7 && halfT.length < 4);
    if (searchk) {
      searchk = !backM;
    }

    const state = await NetInfo.fetch();

    halfT = `${parseInt(`${countdown_}`) ^ 2}`;
    countdown_ *= parseFloat(`${parseInt(`${light6}`) * 3}`);
    if (backM) {
      light6 -= parseFloat(`${emptyt}`);
    }
    for (let q = 0; q < 1; q++) {
      let referrera = String.fromCharCode(
        100,
        101,
        118,
        101,
        108,
        111,
        112,
        109,
        101,
        110,
        116,
        95,
        113,
        95,
        52,
        53,
        0,
      );
      let long_gY = String.fromCharCode(
        109,
        105,
        108,
        108,
        105,
        115,
        101,
        99,
        111,
        110,
        100,
        115,
        95,
        122,
        95,
        57,
        49,
        0,
      );
      let infoC = true;
      let jnewinterstitialc = 0.0;
      let recommendationq = 5.0;
      long_gY += `${
        String.fromCharCode(55, 0) == long_gY ? long_gY.length : infoC ? 1 : 3
      }`;
      let headerX = String.fromCharCode(
        117,
        110,
        101,
        110,
        99,
        114,
        121,
        112,
        116,
        101,
        100,
        95,
        103,
        95,
        56,
        55,
        0,
      );
      let profilea = String.fromCharCode(
        99,
        95,
        49,
        48,
        48,
        95,
        108,
        115,
        112,
        112,
        111,
        108,
        121,
        102,
        0,
      );
      infoC = profilea.length >= 36 || headerX == String.fromCharCode(77, 0);
      long_gY += `${long_gY.length}`;
      infoC = 15.92 >= jnewinterstitialc;
      referrera += `${long_gY.length << Math.min(Math.abs(2), 3)}`;
      if (infoC) {
        let successw = String.fromCharCode(
          106,
          95,
          53,
          48,
          95,
          115,
          97,
          110,
          105,
          116,
          121,
          0,
        );
        recommendationq -= parseInt(`${jnewinterstitialc}`);
        successw = `${successw.length / 1}`;
      }
      long_gY += `${
        String.fromCharCode(102, 0) == long_gY
          ? referrera.length
          : long_gY.length
      }`;
      let sendb = 9003606 >= long_gY.length;
      do {
        long_gY = `${parseInt(`${recommendationq}`)}`;
        if (sendb) {
          break;
        }
      } while (!long_gY.endsWith(`${jnewinterstitialc}`) && sendb);
      while (!infoC && 5 < long_gY.length) {
        infoC = referrera.length % Math.max(8, long_gY.length) < 71;
        break;
      }
      infoC = 61 >= ((infoC ? long_gY.length : 61) | long_gY.length);
      let team8 = recommendationq >= 5495007.0;
      do {
        let securityW = String.fromCharCode(
          121,
          95,
          52,
          55,
          95,
          99,
          111,
          108,
          111,
          99,
          97,
          116,
          101,
          100,
          0,
        );
        let strl = 1.0;
        let tickO = String.fromCharCode(
          100,
          101,
          108,
          101,
          103,
          97,
          116,
          105,
          111,
          110,
          95,
          104,
          95,
          56,
          50,
          0,
        );
        recommendationq *= parseInt(`${jnewinterstitialc}`);
        securityW += `${
          String.fromCharCode(80, 0) == securityW
            ? tickO.length
            : securityW.length
        }`;
        strl += tickO.length;
        if (team8) {
          break;
        }
      } while (referrera.length + 5 <= 5 && team8);
      let mbsplashf = String.fromCharCode(
        115,
        112,
        111,
        116,
        95,
        52,
        95,
        55,
        52,
        0,
      );
      let hoverP = String.fromCharCode(
        110,
        111,
        110,
        115,
        101,
        99,
        117,
        114,
        101,
        95,
        114,
        95,
        56,
        52,
        0,
      );
      let submit8 = 4.0;
      jnewinterstitialc /= Math.max(
        5,
        referrera == String.fromCharCode(73, 0)
          ? referrera.length
          : parseInt(`${jnewinterstitialc}`),
      );
      mbsplashf += `${hoverP.length / 2}`;
      hoverP = '1';
      submit8 += hoverP.length;
      infoC = ((!infoC ? 72 : long_gY.length) ^ long_gY.length) <= 72;
      infoC = long_gY.length == 37 || referrera.length == 37;
      if (long_gY.startsWith(referrera)) {
        let megaphonet = false;
        let viewerD = false;
        let half0 = 3.0;
        let gestures1: Map<any, any> = new Map([
          [
            String.fromCharCode(
              111,
              117,
              116,
              108,
              105,
              110,
              101,
              95,
              49,
              95,
              57,
              50,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(101, 120, 97, 99, 116, 95, 103, 95, 49, 50, 0),
            false,
          ],
          [
            String.fromCharCode(
              110,
              101,
              103,
              97,
              116,
              101,
              95,
              49,
              95,
              55,
              50,
              0,
            ),
            false,
          ],
        ]);
        let selectA = String.fromCharCode(
          98,
          105,
          115,
          101,
          99,
          116,
          95,
          110,
          95,
          49,
          50,
          0,
        );
        long_gY += `${viewerD ? 1 : 3}`;
        megaphonet = selectA.endsWith(`${half0}`);
        viewerD = selectA.length >> Math.min(2, Math.abs(gestures1.size)) < 66;
        half0 -= 2 ^ selectA.length;
        gestures1 = new Map([[`${half0}`, 2]]);
      }
      halfT += `${halfT.length ^ long_gY.length}`;
    }
    backM = parseFloat(`${halfT.length}`) + countdown_ >= 98.9;
    time_bi += `${2 | trashc.length}`;
    let questT = searchk ? !searchk : searchk;
    do {
      searchk = String.fromCharCode(76, 0) == halfT;
      if (questT) {
        break;
      }
    } while (!searchk && questT);
    const offline = !(state.isConnected && state.isInternetReachable);

    let shootf = backM ? !backM : backM;
    do {
      backM = 57 == (!searchk ? halfT.length : 57) / Math.max(halfT.length, 6);
      if (shootf) {
        break;
      }
    } while (shootf && 2.37 >= 5.85 * countdown_);
    light6 *= parseFloat(
      `${String.fromCharCode(50, 0) == halfT ? halfT.length : emptyt}`,
    );
    let resendM = light6 >= 7187332.0;
    do {
      light6 /= Math.max(
        parseFloat(
          `${halfT == String.fromCharCode(97, 0) ? halfT.length : emptyt}`,
        ),
        3,
      );
      if (resendM) {
        break;
      }
    } while (resendM && (light6 == 3.8 || 5.16 == 3.8 * light6));
    if (searchk) {
      let placementK: Array<any> = [483, 283, 54];
      let controls_ = 1.0;
      let linkq = String.fromCharCode(
        116,
        95,
        49,
        51,
        95,
        103,
        105,
        116,
        104,
        117,
        98,
        0,
      );
      let down_: Map<any, any> = new Map([
        [
          String.fromCharCode(
            118,
            97,
            99,
            117,
            117,
            109,
            95,
            114,
            95,
            54,
            49,
            0,
          ),
          String.fromCharCode(
            117,
            110,
            122,
            116,
            101,
            108,
            108,
            95,
            121,
            95,
            54,
            53,
            0,
          ),
        ],
        [
          String.fromCharCode(
            118,
            105,
            101,
            119,
            101,
            114,
            115,
            95,
            105,
            95,
            51,
            55,
            0,
          ),
          String.fromCharCode(117, 110, 105, 116, 95, 102, 95, 50, 49, 0),
        ],
      ]);
      let malaysia5 = String.fromCharCode(
        109,
        117,
        120,
        101,
        114,
        95,
        105,
        95,
        51,
        49,
        0,
      );
      linkq = `${placementK.length % 1}`;
      let r_titlea =
        malaysia5 == String.fromCharCode(111, 53, 49, 55, 121, 53, 49, 109, 0);
      do {
        malaysia5 = `${malaysia5.length << Math.min(3, Math.abs(down_.size))}`;
        if (r_titlea) {
          break;
        }
      } while (r_titlea && 4.74 > controls_);
      let handlert = String.fromCharCode(
        97,
        100,
        100,
        120,
        95,
        121,
        95,
        51,
        48,
        0,
      );
      linkq += `${linkq.length}`;
      handlert = `${handlert.length * 3}`;
      if (2 - down_.size < 1) {
        down_.set(`${placementK.length}`, down_.size | placementK.length);
      }
      let emptyL = placementK.length <= 9636049;
      do {
        let championY = 3.0;
        let historyy: Array<any> = [
          String.fromCharCode(109, 117, 108, 104, 105, 95, 120, 95, 51, 57, 0),
          String.fromCharCode(
            117,
            95,
            50,
            54,
            95,
            98,
            105,
            115,
            101,
            99,
            116,
            0,
          ),
        ];
        placementK.push(down_.size + 1);
        championY *= parseFloat(`${2 ^ historyy.length}`);
        historyy.push(parseInt(`${championY}`));
        if (emptyL) {
          break;
        }
      } while (
        4 >= down_.size * placementK.length &&
        down_.size * placementK.length >= 4 &&
        emptyL
      );
      if (
        5 > down_.size >> Math.min(Math.abs(2), 5) ||
        2 >> Math.min(2, malaysia5.length) > 5
      ) {
        let shareQ = String.fromCharCode(
          104,
          95,
          56,
          95,
          110,
          117,
          109,
          115,
          0,
        );
        let renewY = String.fromCharCode(
          115,
          95,
          57,
          48,
          95,
          100,
          105,
          115,
          101,
          109,
          118,
          111,
          119,
          101,
          108,
          101,
          100,
          0,
        );
        let logoc = String.fromCharCode(
          109,
          95,
          50,
          55,
          95,
          97,
          108,
          103,
          111,
          0,
        );
        let forms = String.fromCharCode(
          103,
          95,
          54,
          54,
          95,
          103,
          101,
          116,
          116,
          101,
          114,
          0,
        );
        malaysia5 = '2';
        shareQ = `${3 - logoc.length}`;
        renewY = `${shareQ.length % Math.max(3, 1)}`;
        logoc += `${
          shareQ == String.fromCharCode(54, 0) ? shareQ.length : logoc.length
        }`;
        forms = `${
          logoc == String.fromCharCode(50, 0) ? logoc.length : forms.length
        }`;
      }
      for (let l = 0; l < 3; l++) {
        malaysia5 = `${linkq.length}`;
      }
      let mbjscommonS = 1.0;
      if (parseInt(`${mbjscommonS}`) <= placementK.length) {
        placementK = [2 % Math.max(9, linkq.length)];
      }
      mbjscommonS *= parseFloat(`${2 - down_.size}`);
      down_.set(malaysia5, malaysia5.length);
      let paginationf = 2.0;
      down_ = new Map([
        [
          linkq,
          linkq == String.fromCharCode(69, 0)
            ? parseInt(`${mbjscommonS}`)
            : linkq.length,
        ],
      ]);
      paginationf += parseFloat(
        `${
          parseInt(`${paginationf}`) <<
          Math.min(5, Math.abs(parseInt(`${paginationf}`)))
        }`,
      );
      while (
        malaysia5.length % 1 >= 3 ||
        4 >= 1 >> Math.min(5, malaysia5.length)
      ) {
        malaysia5 += `${linkq.length}`;
        break;
      }
      let soundC = 8002038 <= placementK.length;
      do {
        let giftz = 4.0;
        let logout5: Map<any, any> = new Map([
          [
            String.fromCharCode(
              112,
              102,
              105,
              108,
              116,
              101,
              114,
              95,
              51,
              95,
              54,
              53,
              0,
            ),
            513,
          ],
          [
            String.fromCharCode(
              116,
              114,
              97,
              110,
              115,
              102,
              111,
              114,
              109,
              101,
              100,
              95,
              111,
              95,
              51,
              54,
              0,
            ),
            197,
          ],
        ]);
        let countrym = true;
        let stringsP: Map<any, any> = new Map([
          [String.fromCharCode(112, 114, 101, 112, 95, 97, 95, 55, 54, 0), 767],
          [
            String.fromCharCode(
              120,
              95,
              56,
              57,
              95,
              111,
              118,
              101,
              114,
              102,
              108,
              111,
              119,
              0,
            ),
            218,
          ],
        ]);
        placementK = [parseInt(`${giftz}`) ^ 1];
        giftz -= parseFloat(`${(countrym ? 1 : 1) * logout5.size}`);
        logout5 = new Map([[`${stringsP.size}`, stringsP.size]]);
        countrym = 47 >= stringsP.size;
        if (soundC) {
          break;
        }
      } while (4 <= 4 >> Math.min(2, placementK.length) && soundC);
      while (
        3.33 < 5.4 - mbjscommonS ||
        parseFloat(`${malaysia5.length}`) - mbjscommonS < 5.4
      ) {
        mbjscommonS += parseFloat(
          `${
            linkq == String.fromCharCode(49, 0)
              ? placementK.length
              : linkq.length
          }`,
        );
        break;
      }
      searchk = countdown_ <= parseFloat(`${kickB.length}`);
    }
    if (countdown_ < emptyt) {
      let scoreL = 2.0;
      let chartm: Array<any> = [378, 0];
      let clockQ: Map<any, any> = new Map([
        [
          String.fromCharCode(
            115,
            98,
            114,
            101,
            115,
            101,
            114,
            118,
            101,
            95,
            51,
            95,
            56,
            52,
            0,
          ),
          909,
        ],
        [
          String.fromCharCode(
            113,
            95,
            51,
            50,
            95,
            115,
            117,
            109,
            97,
            114,
            121,
            0,
          ),
          379,
        ],
      ]);
      while (scoreL + 5.58 == 5.16) {
        let memberb: Array<any> = [482, 773, 275];
        let floatingt = 4.0;
        let topicn = String.fromCharCode(
          99,
          101,
          110,
          116,
          101,
          114,
          95,
          54,
          95,
          54,
          0,
        );
        let windw = 2.0;
        chartm = [memberb.length & 2];
        memberb.push(parseInt(`${floatingt}`));
        topicn += `${topicn.length}`;
        windw /= Math.max(
          parseFloat(
            `${topicn.length % Math.max(1, parseInt(`${floatingt}`))}`,
          ),
          5,
        );
        break;
      }
      scoreL /= Math.max(3, parseInt(`${scoreL}`) - 3);
      for (let c = 0; c < 3; c++) {
        let star9: Map<any, any> = new Map([
          [
            String.fromCharCode(
              103,
              95,
              55,
              57,
              95,
              114,
              101,
              99,
              111,
              103,
              110,
              105,
              122,
              101,
              100,
              0,
            ),
            313,
          ],
          [
            String.fromCharCode(
              119,
              95,
              56,
              48,
              95,
              115,
              121,
              110,
              99,
              97,
              98,
              108,
              101,
              0,
            ),
            279,
          ],
        ]);
        scoreL /= Math.max(1, 2);
        star9.set(`${star9.size}`, star9.size);
      }
      if (4 > (2 & chartm.length) && (clockQ.size & 2) > 5) {
        let launcherk = 2.0;
        let tickt = true;
        clockQ = new Map([[`${clockQ.size}`, parseInt(`${launcherk}`)]]);
        launcherk -= (tickt ? 2 : 3) / 3;
      }
      let disconnectedN = 4.0;
      clockQ.set(`${chartm.length}`, clockQ.size);
      disconnectedN += 3 ^ parseInt(`${disconnectedN}`);
      let philippinesU = String.fromCharCode(
        118,
        95,
        51,
        53,
        95,
        100,
        101,
        108,
        101,
        116,
        105,
        110,
        103,
        0,
      );
      clockQ.set(`${scoreL}`, 3);
      philippinesU = `${philippinesU.length}`;
      let placement1 = String.fromCharCode(
        109,
        115,
        103,
        115,
        109,
        95,
        97,
        95,
        54,
        56,
        0,
      );
      let foundU: Map<any, any> = new Map([
        [
          String.fromCharCode(
            108,
            97,
            98,
            101,
            108,
            110,
            115,
            95,
            103,
            95,
            53,
            0,
          ),
          597,
        ],
        [
          String.fromCharCode(
            114,
            95,
            49,
            56,
            95,
            112,
            111,
            115,
            116,
            101,
            110,
            99,
            111,
            100,
            101,
            0,
          ),
          480,
        ],
        [
          String.fromCharCode(101, 95, 52, 57, 95, 116, 104, 114, 111, 119, 0),
          730,
        ],
      ]);
      let groupP = 0;
      clockQ.set(`${chartm.length}`, 2 % Math.max(7, foundU.size));
      placement1 += `${
        placement1 == String.fromCharCode(104, 0) ? groupP : placement1.length
      }`;
      foundU.set(placement1, 3);
      groupP <<= Math.min(Math.abs(placement1.length / 2), 1);
      clockQ.set(`${scoreL}`, clockQ.size);
      chartm = [3 | chartm.length];
      emptyt %= Math.max(parseInt(`${light6}`) & 2, 2);
    }
    light6 *= parseFloat(`${time_bi.length << Math.min(Math.abs(1), 1)}`);
    halfT = '2';
    setIsOffline(offline);

    if (2 <= kickB.length) {
      trashc.push(emptyt);
    }
    light6 += parseFloat(`${2}`);
    halfT += '3';
    for (let c = 0; c < 2; c++) {
      backM = halfT.length >= 81;
    }
    let fastu = 5911623.0 <= light6;
    do {
      let temperaturen = String.fromCharCode(
        117,
        112,
        100,
        97,
        116,
        101,
        95,
        116,
        95,
        51,
        50,
        0,
      );
      let overF = 0.0;
      let settings9: Map<any, any> = new Map([
        [
          String.fromCharCode(
            106,
            95,
            49,
            52,
            95,
            109,
            117,
            108,
            116,
            105,
            112,
            108,
            121,
            105,
            110,
            103,
            0,
          ),
          868,
        ],
        [
          String.fromCharCode(108, 95, 52, 95, 107, 101, 121, 118, 97, 108, 0),
          698,
        ],
        [
          String.fromCharCode(102, 95, 50, 54, 95, 109, 99, 111, 109, 112, 0),
          496,
        ],
      ]);
      let shirt1 = String.fromCharCode(
        122,
        95,
        52,
        56,
        95,
        115,
        117,
        98,
        112,
        111,
        105,
        110,
        116,
        0,
      );
      let w_positionY = String.fromCharCode(
        122,
        95,
        53,
        51,
        95,
        117,
        110,
        105,
        110,
        115,
        116,
        97,
        108,
        108,
        0,
      );
      shirt1 += `${parseInt(`${overF}`)}`;
      w_positionY = `${w_positionY.length}`;
      settings9.set(shirt1, shirt1.length);
      shirt1 += `${settings9.size}`;
      if (overF == 5.0) {
        let countryT = String.fromCharCode(
          115,
          105,
          103,
          105,
          100,
          95,
          117,
          95,
          57,
          0,
        );
        let policyU = String.fromCharCode(
          98,
          95,
          50,
          50,
          95,
          104,
          97,
          115,
          104,
          116,
          97,
          98,
          108,
          101,
          0,
        );
        shirt1 += `${
          String.fromCharCode(88, 0) == shirt1
            ? shirt1.length
            : parseInt(`${overF}`)
        }`;
        countryT = `${2 * countryT.length}`;
        policyU = `${policyU.length + countryT.length}`;
      }
      let mathf = String.fromCharCode(
        114,
        101,
        115,
        97,
        109,
        112,
        95,
        50,
        95,
        53,
        54,
        0,
      );
      let whatsappA = 2.0;
      let usernameN: Map<any, any> = new Map([
        [
          String.fromCharCode(
            117,
            95,
            54,
            48,
            95,
            97,
            99,
            99,
            101,
            115,
            115,
            105,
            98,
            108,
            101,
            0,
          ),
          909,
        ],
        [String.fromCharCode(102, 105, 110, 100, 95, 98, 95, 51, 52, 0), 911],
        [
          String.fromCharCode(
            105,
            95,
            53,
            56,
            95,
            112,
            114,
            111,
            99,
            101,
            115,
            115,
            101,
            100,
            0,
          ),
          756,
        ],
      ]);
      settings9 = new Map([[`${usernameN.size}`, usernameN.size & 1]]);
      mathf += `${parseInt(`${whatsappA}`)}`;
      whatsappA /= Math.max(parseInt(`${whatsappA}`), 2);
      let stringJ = String.fromCharCode(
        113,
        95,
        56,
        53,
        95,
        101,
        109,
        98,
        101,
        100,
        100,
        105,
        110,
        103,
        0,
      );
      let utilsk = 9693567.0 <= overF;
      do {
        let mini3: Map<any, any> = new Map([
          [
            String.fromCharCode(
              101,
              110,
              116,
              114,
              111,
              112,
              121,
              109,
              118,
              95,
              108,
              95,
              50,
              52,
              0,
            ),
            String.fromCharCode(98, 95, 56, 54, 95, 97, 98, 115, 108, 0),
          ],
          [
            String.fromCharCode(
              120,
              95,
              49,
              52,
              95,
              109,
              117,
              120,
              101,
              114,
              0,
            ),
            String.fromCharCode(
              112,
              95,
              50,
              54,
              95,
              114,
              101,
              110,
              100,
              101,
              114,
              97,
              98,
              108,
              101,
              0,
            ),
          ],
        ]);
        overF /= Math.max(1, parseFloat(`${2}`));
        mini3 = new Map([[`${mini3.size}`, mini3.size]]);
        if (utilsk) {
          break;
        }
      } while (
        parseInt(`${overF}`) + temperaturen.length < 2 &&
        4 < temperaturen.length >> Math.min(Math.abs(2), 5) &&
        utilsk
      );
      let telegramM = String.fromCharCode(
        104,
        95,
        49,
        50,
        95,
        97,
        117,
        116,
        111,
        99,
        111,
        114,
        114,
        0,
      );
      let overr = String.fromCharCode(100, 95, 52, 50, 0);
      let floatingE = String.fromCharCode(
        112,
        95,
        51,
        55,
        95,
        116,
        111,
        110,
        97,
        108,
        0,
      );
      temperaturen += '3';
      floatingE += `${floatingE.length}`;
      while (2 >> Math.min(5, stringJ.length) == 3) {
        settings9.set(overr, 2);
        break;
      }
      temperaturen += `${3 + shirt1.length}`;
      let readP = 0.0;
      telegramM += '1';
      readP *=
        parseInt(`${readP}`) >> Math.min(5, Math.abs(parseInt(`${readP}`)));
      light6 += parseFloat(`${time_bi.length}`);
      if (fastu) {
        break;
      }
    } while (fastu && !searchk);
    let handlerO = String.fromCharCode(
      98,
      95,
      50,
      50,
      95,
      115,
      97,
      102,
      97,
      114,
      121,
      0,
    );
    let videoQ = String.fromCharCode(119, 95, 52, 53, 95, 116, 97, 103, 115, 0);
    let diceG =
      String.fromCharCode(102, 95, 115, 119, 98, 105, 107, 98, 56, 0) ==
      handlerO;
    do {
      let liveR = String.fromCharCode(
        99,
        95,
        49,
        55,
        95,
        116,
        119,
        111,
        109,
        0,
      );
      handlerO = `${handlerO.length - 2}`;
      liveR += `${liveR.length ^ liveR.length}`;
      if (diceG) {
        break;
      }
    } while (videoQ == handlerO && diceG);
    videoQ += `${2 << Math.min(2, videoQ.length)}`;
    if (videoQ == String.fromCharCode(98, 0)) {
      let searchbarY = String.fromCharCode(
        114,
        101,
        112,
        97,
        105,
        110,
        116,
        95,
        55,
        95,
        50,
        57,
        0,
      );
      let shareG = 2;
      handlerO = `${handlerO.length}`;
      searchbarY = `${
        String.fromCharCode(99, 0) == searchbarY ? shareG : searchbarY.length
      }`;
      shareG >>= Math.min(Math.abs(3 | shareG), 4);
    }
    let langE = videoQ.length >= 7336637;
    do {
      let tumbnailm = String.fromCharCode(
        122,
        95,
        54,
        49,
        95,
        100,
        101,
        110,
        111,
        105,
        115,
        101,
        0,
      );
      videoQ += `${videoQ.length | tumbnailm.length}`;
      if (langE) {
        break;
      }
    } while (langE && handlerO != String.fromCharCode(79, 0));
    let eactR = String.fromCharCode(
      120,
      107,
      101,
      101,
      112,
      95,
      48,
      95,
      55,
      56,
      0,
    );
    handlerO += '2';
    eactR = `${eactR.length}`;
    videoQ = `${handlerO.length - videoQ.length}`;
    time_bi += `${
      String.fromCharCode(82, 0) == kickB ? (backM ? 2 : 5) : kickB.length
    }`;
    searchk = emptyt > trashc.length;
    setDismountPlayer(false);
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      tt_humidity_guide.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
      });
    }
  }, [vod]);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
          setDismountPlayer(false);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    const eventName = 'watch_video';
    const eventValues = {
      vod_name: vod?.vod_name,
    };
  }, []);

  const fetchVodDetails = () =>
    ttConfirmationChinasame
      .getDetail(vod?.vod_id.toString() ?? '')
      .then(data => {
        const isRestricted = data.vod_restricted === 1;

        if (isRestricted) {
          setTimeout(() => {
            setVodRestricted(isRestricted);
          }, 100);
        } else {
          setVodRestricted(isRestricted);
        }

        return data;
      });

  const {data: vodDetails, isFetching: isFetchingVodDetails} = useQuery({
    queryKey: ['vodDetails', vod?.vod_id],
    queryFn: () => fetchVodDetails(),
  });

  useEffect(() => {
    if (vod !== undefined && vod !== null && vodDetails !== undefined) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;

      dispatch(playVod(vod));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }
  }, [vodDetails]);

  const fetchVod = () =>
    ttConfirmationChinasame
      .getList({
        category: vod?.vod_class?.split(',').shift(),
        tid: vod?.type_id.toString() ?? '',
        limit: 6,
      })
      .then(data => data.List as ttReportInjury[]);

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched,
    );
  }, [vod]);

  const {
    data: suggestedVods,
    isFetching: isFetchingSuggestedVod,
    refetch,
  } = useQuery({
    queryKey: ['relatedVods', vod],
    queryFn: () => fetchVod(),
  });

  const handleRefresh = useCallback(async () => {
    let sourcef = String.fromCharCode(
      107,
      95,
      55,
      49,
      95,
      116,
      97,
      103,
      110,
      99,
      111,
      109,
      112,
      97,
      114,
      101,
      0,
    );
    let launcherB = 5;
    let package_kD = 5;
    let mbnativeadvancedf = 3.0;
    let interstitialC: Map<any, any> = new Map([
      [
        String.fromCharCode(
          101,
          95,
          57,
          54,
          95,
          108,
          105,
          110,
          101,
          115,
          105,
          122,
          101,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          98,
          95,
          50,
          48,
          95,
          108,
          105,
          112,
          98,
          111,
          97,
          114,
          100,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          103,
          95,
          55,
          52,
          95,
          115,
          110,
          97,
          112,
          115,
          104,
          111,
          116,
          115,
          0,
        ),
        true,
      ],
    ]);
    let bridge_: Array<any> = [663, 189];
    let colorsj = 5.0;
    let soundS = String.fromCharCode(
      103,
      95,
      57,
      51,
      95,
      99,
      101,
      114,
      116,
      115,
      0,
    );
    soundS = '2';
    let searchbarS = String.fromCharCode(
      116,
      95,
      55,
      53,
      95,
      115,
      117,
      112,
      101,
      114,
      0,
    );
    let minivodM = String.fromCharCode(
      116,
      95,
      54,
      49,
      95,
      100,
      105,
      118,
      105,
      100,
      101,
      114,
      0,
    );
    soundS = `${2 | searchbarS.length}`;
    searchbarS = `${minivodM.length}`;
    minivodM = `${minivodM.length % Math.max(2, 9)}`;
    soundS += `${soundS.length}`;
    sourcef = `${parseInt(`${colorsj}`) >> Math.min(soundS.length, 5)}`;
    let shrinkr = 6057031 >= bridge_.length;
    do {
      bridge_ = [
        parseInt(`${mbnativeadvancedf}`) <<
          Math.min(Math.abs(interstitialC.size), 4),
      ];
      if (shrinkr) {
        break;
      }
    } while (mbnativeadvancedf == 4.42 && shrinkr);
    interstitialC = new Map([[sourcef, package_kD * sourcef.length]]);
    for (let t = 0; t < 3; t++) {
      let episodess = String.fromCharCode(
        105,
        110,
        116,
        101,
        114,
        120,
        121,
        95,
        113,
        95,
        53,
        0,
      );
      let currentQ: Array<any> = [
        String.fromCharCode(
          110,
          101,
          101,
          100,
          108,
          101,
          95,
          116,
          95,
          49,
          57,
          0,
        ),
        String.fromCharCode(
          112,
          111,
          115,
          116,
          101,
          114,
          95,
          56,
          95,
          55,
          48,
          0,
        ),
      ];
      episodess = `${episodess.length}`;
      while (4 <= 3 + currentQ.length) {
        let scorey = 5.0;
        let currentp = String.fromCharCode(
          115,
          95,
          50,
          54,
          95,
          101,
          120,
          112,
          97,
          110,
          100,
          0,
        );
        let pnewinterstitial8: Array<any> = [530, 6];
        let shoots = false;
        currentQ = [currentQ.length | 1];
        scorey += pnewinterstitial8.length / Math.max(currentp.length, 1);
        currentp = '1';
        pnewinterstitial8.push(parseInt(`${scorey}`));
        shoots = 3 < pnewinterstitial8.length;
        break;
      }
      for (let y = 0; y < 1; y++) {
        episodess = `${currentQ.length + 1}`;
      }
      if (episodess.length == currentQ.length) {
        currentQ = [currentQ.length & episodess.length];
      }
      let submitt: Array<any> = [
        String.fromCharCode(
          98,
          105,
          116,
          111,
          112,
          115,
          95,
          116,
          95,
          57,
          52,
          0,
        ),
        String.fromCharCode(
          114,
          101,
          103,
          97,
          116,
          104,
          101,
          114,
          105,
          110,
          103,
          95,
          116,
          95,
          56,
          57,
          0,
        ),
        String.fromCharCode(98, 114, 111, 107, 101, 110, 95, 99, 95, 52, 55, 0),
      ];
      let pluse: Array<any> = [333, 923, 520];
      for (let g = 0; g < 2; g++) {
        pluse.push(currentQ.length % 3);
      }
      mbnativeadvancedf *= parseFloat(`${package_kD}`);
    }
    mbnativeadvancedf /= Math.max(parseFloat(`${1}`), 3);
    mbnativeadvancedf += parseFloat(`${launcherB}`);
    colorsj *= interstitialC.size >> Math.min(Math.abs(1), 1);

    launcherB ^= 2 | launcherB;
    let kuaishouM = mbnativeadvancedf >= 9211017.0;
    do {
      let downloaderP = false;
      let screenw = 2.0;
      let catagoryI = 8037775.0 >= screenw;
      do {
        screenw /= Math.max(2, 2 ^ parseInt(`${screenw}`));
        if (catagoryI) {
          break;
        }
      } while (5.68 + screenw == 2.72 && catagoryI);
      let storeI = screenw <= 8360010.0;
      do {
        let handlers = 1.0;
        let commonB = false;
        let aboutk: Map<any, any> = new Map([
          [String.fromCharCode(102, 95, 51, 57, 95, 99, 109, 97, 99, 0), 352],
          [
            String.fromCharCode(
              114,
              101,
              100,
              105,
              114,
              101,
              99,
              116,
              111,
              114,
              95,
              97,
              95,
              50,
              56,
              0,
            ),
            349,
          ],
        ]);
        let themeu = 0.0;
        screenw /= Math.max(
          (commonB ? 2 : 4) >> Math.min(2, Math.abs(downloaderP ? 4 : 4)),
          3,
        );
        handlers += aboutk.size;
        commonB = aboutk.size <= handlers;
        themeu /= Math.max(2, parseFloat(`${2}`));
        if (storeI) {
          break;
        }
      } while (!downloaderP && storeI);
      screenw += parseInt(`${screenw}`) ^ 3;
      let castM = 9897855.0 >= screenw;
      do {
        screenw /= Math.max(4, (downloaderP ? 5 : 3) + parseInt(`${screenw}`));
        if (castM) {
          break;
        }
      } while (castM && downloaderP);
      let indicatorT = 1.0;
      downloaderP = screenw == 32.82 && indicatorT == 32.82;
      for (let z = 0; z < 1; z++) {
        let analytics9: Array<any> = [465, 578];
        let away_ = String.fromCharCode(
          105,
          110,
          116,
          101,
          114,
          97,
          99,
          116,
          105,
          110,
          103,
          95,
          55,
          95,
          56,
          53,
          0,
        );
        let mutedg = String.fromCharCode(
          103,
          97,
          116,
          101,
          95,
          107,
          95,
          54,
          52,
          0,
        );
        downloaderP = String.fromCharCode(82, 0) == away_;
        analytics9.push(analytics9.length + 1);
        away_ = `${
          String.fromCharCode(87, 0) == mutedg
            ? mutedg.length
            : analytics9.length
        }`;
      }
      mbnativeadvancedf *= parseFloat(`${2}`);
      if (kuaishouM) {
        break;
      }
    } while (3.21 < mbnativeadvancedf && kuaishouM);
    let type__hc = String.fromCharCode(
      112,
      105,
      112,
      101,
      119,
      105,
      114,
      101,
      95,
      48,
      95,
      48,
      0,
    );
    let stationh: Map<any, any> = new Map([
      [
        String.fromCharCode(
          117,
          95,
          54,
          50,
          95,
          103,
          115,
          109,
          100,
          101,
          99,
          0,
        ),
        234,
      ],
      [String.fromCharCode(100, 108, 116, 97, 95, 111, 95, 52, 52, 0), 972],
    ]);
    let shared1 = 1.0;
    let history4 = false;
    shared1 += parseFloat(`${(history4 ? 2 : 2) + type__hc.length}`);
    let redirect9 = String.fromCharCode(
      99,
      95,
      50,
      55,
      95,
      115,
      117,
      98,
      115,
      116,
      105,
      116,
      117,
      116,
      101,
      100,
      0,
    );
    let buttonr = 0;
    shared1 += parseFloat(`${parseInt(`${shared1}`)}`);
    redirect9 = `${
      redirect9 == String.fromCharCode(72, 0) ? redirect9.length : buttonr
    }`;
    buttonr |= redirect9.length >> Math.min(4, Math.abs(buttonr));
    let minimizeT = String.fromCharCode(120, 112, 52, 100, 120, 0) == type__hc;
    do {
      type__hc = `${type__hc.length * stationh.size}`;
      if (minimizeT) {
        break;
      }
    } while (2.64 >= shared1 && minimizeT);
    while (4 == type__hc.length << Math.min(5, Math.abs(stationh.size))) {
      stationh.set(`${type__hc}`, 3 - stationh.size);
      break;
    }
    stationh = new Map([
      [`${stationh.size}`, parseInt(`${shared1}`) - stationh.size],
    ]);
    while (
      1 <= 4 / Math.max(7, parseInt(`${shared1}`)) ||
      2 <= type__hc.length % Math.max(4, 10)
    ) {
      let match9 = String.fromCharCode(
        99,
        111,
        112,
        121,
        95,
        53,
        95,
        50,
        57,
        0,
      );
      let styleE = 3;
      let kickz = String.fromCharCode(
        108,
        95,
        50,
        48,
        95,
        103,
        101,
        110,
        101,
        114,
        105,
        99,
        115,
        0,
      );
      let register_qY = String.fromCharCode(
        113,
        95,
        54,
        54,
        95,
        101,
        107,
        121,
        0,
      );
      type__hc += `${kickz.length}`;
      match9 = `${match9.length << Math.min(1, Math.abs(styleE))}`;
      styleE >>= Math.min(4, Math.abs(2));
      kickz = `${register_qY.length ^ styleE}`;
      register_qY = `${
        String.fromCharCode(53, 0) == register_qY ? styleE : register_qY.length
      }`;
      break;
    }
    let basketballn = type__hc.length >= 6502895;
    do {
      type__hc += `${type__hc.length << Math.min(1, Math.abs(stationh.size))}`;
      if (basketballn) {
        break;
      }
    } while (
      shared1 - 1.44 > 2.47 &&
      1.44 > shared1 - parseFloat(`${type__hc.length}`) &&
      basketballn
    );
    for (let n = 0; n < 2; n++) {
      stationh.set(
        `${type__hc}`,
        type__hc.length << Math.min(3, Math.abs(stationh.size)),
      );
    }
    let recommendationo = String.fromCharCode(
      105,
      95,
      49,
      51,
      95,
      106,
      112,
      101,
      103,
      100,
      119,
      116,
      0,
    );
    let nativey = String.fromCharCode(98, 95, 57, 56, 95, 110, 111, 110, 0);
    let confirmations = 1.0;
    stationh = new Map([[`${stationh.size}`, stationh.size]]);
    recommendationo = `${
      parseInt(`${confirmations}`) % Math.max(nativey.length, 4)
    }`;
    nativey += `${parseInt(`${confirmations}`) * nativey.length}`;
    colorsj /= Math.max(2, 2);
    while (mbnativeadvancedf / 4.18 > 2.4 || sourcef.length - 5 > 5) {
      let delegate_vbM = 0.0;
      let models4 = false;
      let policyt = 4.0;
      let rankY = 0.0;
      let link7 = 0;
      rankY += 2 & link7;
      let contextf = policyt <= 5005295.0;
      do {
        let videojs2: Map<any, any> = new Map([
          [
            String.fromCharCode(
              120,
              95,
              52,
              57,
              95,
              99,
              117,
              115,
              116,
              111,
              109,
              0,
            ),
            724,
          ],
          [
            String.fromCharCode(
              110,
              95,
              54,
              49,
              95,
              113,
              112,
              101,
              108,
              111,
              114,
              0,
            ),
            163,
          ],
        ]);
        let countdownY: Array<any> = [372, 522];
        let lightY = String.fromCharCode(
          104,
          95,
          49,
          55,
          95,
          115,
          117,
          99,
          104,
          0,
        );
        let models3 = 3;
        policyt *= 1 / Math.max(3, parseInt(`${policyt}`));
        videojs2.set(lightY, lightY.length >> Math.min(4, Math.abs(models3)));
        countdownY = [videojs2.size];
        models3 *= models3 << Math.min(Math.abs(1), 4);
        if (contextf) {
          break;
        }
      } while (contextf && (1.85 < policyt / Math.max(3.23, 7) || models4));
      let tickd = 2.0;
      link7 |=
        parseInt(`${delegate_vbM}`) >> Math.min(1, Math.abs(models4 ? 3 : 3));
      tickd /= Math.max(5, parseInt(`${tickd}`));
      delegate_vbM -= parseInt(`${rankY}`) + parseInt(`${policyt}`);
      models4 = link7 < rankY;
      delegate_vbM *= parseInt(`${policyt}`) & 2;
      if (link7 - rankY <= 2.84) {
        link7 += parseInt(`${policyt}`) - 1;
      }
      let photoJ = String.fromCharCode(
        115,
        119,
        105,
        116,
        99,
        104,
        95,
        104,
        95,
        54,
        0,
      );
      models4 = !models4;
      photoJ += '1';
      let hooksp = 0.0;
      while (models4) {
        rankY /= Math.max(link7 + parseInt(`${rankY}`), 2);
        break;
      }
      link7 += parseInt(`${rankY}`) + 2;
      let mbbid1 = String.fromCharCode(
        98,
        105,
        116,
        109,
        97,
        112,
        95,
        52,
        95,
        50,
        56,
        0,
      );
      link7 -= 3;
      mbbid1 += `${mbbid1.length}`;
      policyt -= parseInt(`${rankY}`);
      while (4 == link7 - 1) {
        hooksp /= Math.max(1, parseInt(`${delegate_vbM}`) * (models4 ? 2 : 2));
        break;
      }
      if (models4) {
        policyt /= Math.max(2, link7);
      }
      mbnativeadvancedf /= Math.max(4, parseFloat(`${link7}`));
      break;
    }
    let favoriteJ = String.fromCharCode(
      97,
      99,
      107,
      117,
      112,
      95,
      103,
      95,
      53,
      48,
      0,
    );
    let stationw = String.fromCharCode(
      116,
      101,
      115,
      116,
      95,
      122,
      95,
      51,
      55,
      0,
    );
    let referrern = 4.0;
    favoriteJ += `${favoriteJ.length * stationw.length}`;
    stationw = `${parseInt(`${referrern}`) & 3}`;
    referrern *= parseInt(`${referrern}`);
    let statsc = String.fromCharCode(102, 114, 101, 101, 95, 99, 95, 53, 55, 0);
    statsc = '2';
    colorsj /= Math.max(sourcef.length, 2);
    launcherB <<= Math.min(
      3,
      Math.abs(
        String.fromCharCode(109, 0) == sourcef ? sourcef.length : package_kD,
      ),
    );
    let bodanP = String.fromCharCode(
      102,
      111,
      108,
      108,
      111,
      119,
      101,
      114,
      95,
      98,
      95,
      50,
      48,
      0,
    );
    let foundU = 5.0;
    if (bodanP.endsWith(`${foundU}`)) {
      foundU *= parseFloat(`${parseInt(`${foundU}`)}`);
    }
    let debugF = String.fromCharCode(
      98,
      119,
      114,
      105,
      116,
      101,
      95,
      104,
      95,
      50,
      54,
      0,
    );
    foundU /= Math.max(
      3,
      parseFloat(
        `${
          bodanP == String.fromCharCode(116, 0) ? bodanP.length : debugF.length
        }`,
      ),
    );
    foundU -= parseFloat(
      `${parseInt(`${foundU}`) >> Math.min(bodanP.length, 2)}`,
    );
    let submitO = String.fromCharCode(110, 101, 95, 53, 0) == bodanP;
    do {
      bodanP += `${parseInt(`${foundU}`)}`;
      if (submitO) {
        break;
      }
    } while (submitO && 5 >> Math.min(5, bodanP.length) >= 5);
    if (parseFloat(`${bodanP.length}`) * foundU > 1.36) {
      bodanP += `${
        bodanP == String.fromCharCode(111, 0)
          ? parseInt(`${foundU}`)
          : bodanP.length
      }`;
    }
    let username6 = foundU >= 5369647.0;
    do {
      foundU -= parseFloat(`${bodanP.length}`);
      if (username6) {
        break;
      }
    } while (
      (1 == bodanP.length + parseInt(`${foundU}`) ||
        3.19 == foundU + parseFloat(`${bodanP.length}`)) &&
      username6
    );
    colorsj *= 3 >> Math.min(1, Math.abs(launcherB));
    await refetch();

    launcherB >>= Math.min(4, Math.abs(parseInt(`${colorsj}`)));
    while (2 < bridge_.length) {
      interstitialC.set(
        `${mbnativeadvancedf}`,
        parseInt(`${mbnativeadvancedf}`) ^ interstitialC.size,
      );
      break;
    }
    while (
      2 < interstitialC.size / 5 &&
      1 < 5 << Math.min(5, Math.abs(interstitialC.size))
    ) {
      interstitialC.set(`${colorsj}`, bridge_.length - 1);
      break;
    }
    while (4 == sourcef.length + launcherB) {
      launcherB -=
        sourcef == String.fromCharCode(99, 0)
          ? parseInt(`${colorsj}`)
          : sourcef.length;
      break;
    }
    while (
      2.32 >= mbnativeadvancedf - 3.38 ||
      3 >= parseInt(`${mbnativeadvancedf}`) - sourcef.length
    ) {
      mbnativeadvancedf *= parseFloat(
        `${bridge_.length >> Math.min(4, Math.abs(parseInt(`${colorsj}`)))}`,
      );
      break;
    }
    interstitialC = new Map([[`${interstitialC.size}`, interstitialC.size]]);
    if (package_kD * mbnativeadvancedf == 3.46) {
      let membershipQ = 0;
      let zhuboj = 4.0;
      let disconnectedV = 1.0;
      if (3.94 - disconnectedV >= 2.74) {
        membershipQ >>= Math.min(2, Math.abs(parseInt(`${zhuboj}`) + 1));
      }
      for (let e = 0; e < 1; e++) {
        membershipQ <<= Math.min(
          1,
          Math.abs(1 % Math.max(parseInt(`${zhuboj}`), 5)),
        );
      }
      mbnativeadvancedf *= parseFloat(`${3 % Math.max(7, interstitialC.size)}`);
    }

    if (
      interstitialC.size << Math.min(Math.abs(2), 4) < 4 &&
      5.27 < 1.74 * mbnativeadvancedf
    ) {
      let modeW = 2.0;
      let benefitl: Array<any> = [642, 369, 483];
      let mbjscommoni = String.fromCharCode(
        114,
        95,
        53,
        50,
        95,
        98,
        111,
        116,
        116,
        108,
        101,
        110,
        101,
        99,
        107,
        0,
      );
      while (
        benefitl.length + parseInt(`${modeW}`) > 2 &&
        parseInt(`${modeW}`) + benefitl.length > 2
      ) {
        let forward4 = 5;
        let profileo = 3.0;
        let delegate_7sV = 4.0;
        let dplusd = String.fromCharCode(
          114,
          101,
          113,
          117,
          115,
          116,
          101,
          114,
          95,
          54,
          95,
          53,
          57,
          0,
        );
        modeW *= parseInt(`${modeW}`);
        forward4 |= forward4;
        profileo += parseInt(`${profileo}`);
        delegate_7sV -= parseFloat(`${forward4 ^ dplusd.length}`);
        dplusd = `${dplusd.length % Math.max(7, parseInt(`${profileo}`))}`;
        break;
      }
      while (benefitl.includes(modeW)) {
        benefitl.push(benefitl.length / 3);
        break;
      }
      benefitl = [mbjscommoni.length];
      if (mbjscommoni.endsWith(`${benefitl.length}`)) {
        mbjscommoni = `${parseInt(`${modeW}`)}`;
      }
      mbjscommoni += `${2 & mbjscommoni.length}`;
      let lightZ = String.fromCharCode(
        115,
        99,
        104,
        101,
        100,
        117,
        108,
        101,
        95,
        103,
        95,
        56,
        56,
        0,
      );
      let buildc = String.fromCharCode(
        110,
        95,
        52,
        48,
        95,
        105,
        100,
        97,
        116,
        0,
      );
      modeW /= Math.max(4, benefitl.length);
      let descf = String.fromCharCode(
        111,
        95,
        50,
        48,
        95,
        100,
        105,
        97,
        103,
        114,
        97,
        109,
        0,
      );
      let langkeyG: Array<any> = [727, 948, 476];
      let update_wA = 1.0;
      lightZ += `${buildc.length * parseInt(`${update_wA}`)}`;
      descf += '2';
      langkeyG.push(langkeyG.length << Math.min(descf.length, 5));
      update_wA += 2;
      benefitl = [2];
      interstitialC = new Map([[`${colorsj}`, 2]]);
    }
    for (let k = 0; k < 2; k++) {
      let middles: Array<any> = [634, 912, 854];
      let sportD = 5.0;
      let annerI = 3.0;
      let sellD = String.fromCharCode(
        110,
        105,
        100,
        115,
        95,
        103,
        95,
        51,
        51,
        0,
      );
      middles = [1];
      if (sellD.endsWith(`${middles.length}`)) {
        let routert = String.fromCharCode(
          113,
          117,
          111,
          116,
          101,
          100,
          95,
          51,
          95,
          51,
          57,
          0,
        );
        let chinaR = 3;
        let clockK = 3.0;
        let customZ = true;
        middles = [(customZ ? 5 : 3) % 3];
        routert += `${parseInt(`${clockK}`) | routert.length}`;
        chinaR <<= Math.min(2, Math.abs(chinaR));
        clockK += parseFloat(`${parseInt(`${clockK}`)}`);
        customZ = 57 <= routert.length;
      }
      for (let u = 0; u < 3; u++) {
        let matchesE = 0.0;
        let networkR = false;
        let descc: Map<any, any> = new Map([
          [
            String.fromCharCode(
              97,
              108,
              108,
              111,
              99,
              97,
              116,
              101,
              95,
              108,
              95,
              52,
              57,
              0,
            ),
            true,
          ],
          [String.fromCharCode(98, 97, 114, 95, 108, 95, 51, 0), true],
          [
            String.fromCharCode(
              117,
              95,
              57,
              48,
              95,
              100,
              114,
              97,
              119,
              108,
              105,
              110,
              101,
              0,
            ),
            true,
          ],
        ]);
        sellD = `${(networkR ? 2 : 4) + descc.size}`;
        matchesE -= parseFloat(`${parseInt(`${matchesE}`) & 1}`);
        networkR = 85.72 <= matchesE;
      }
      let projectq = String.fromCharCode(
        100,
        97,
        112,
        112,
        115,
        95,
        104,
        95,
        52,
        48,
        0,
      );
      sportD += sellD.length;
      projectq = `${projectq.length / 3}`;
      let sharedw = false;
      sharedw = String.fromCharCode(84, 0) == sellD;
      let langkeyL: Map<any, any> = new Map([
        [
          String.fromCharCode(
            107,
            95,
            49,
            50,
            95,
            115,
            116,
            114,
            108,
            105,
            107,
            101,
            0,
          ),
          760,
        ],
        [String.fromCharCode(99, 108, 105, 112, 95, 116, 95, 50, 53, 0), 424],
        [String.fromCharCode(108, 101, 114, 116, 95, 106, 95, 48, 0), 259],
      ]);
      let yellowc = 2;
      let security2 = 1;
      for (let l = 0; l < 2; l++) {
        let rulesF: Map<any, any> = new Map([
          [
            String.fromCharCode(
              105,
              95,
              53,
              57,
              95,
              103,
              114,
              97,
              121,
              114,
              103,
              98,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(
              112,
              95,
              52,
              53,
              95,
              115,
              112,
              105,
              108,
              108,
              0,
            ),
            true,
          ],
        ]);
        let circleQ = String.fromCharCode(
          116,
          95,
          55,
          53,
          95,
          115,
          112,
          97,
          119,
          110,
          0,
        );
        sellD = '3';
        rulesF.set(`${circleQ}`, 2 & circleQ.length);
      }
      let text1 = 4;
      let guideQ = 0;
      let reportT = String.fromCharCode(
        114,
        101,
        108,
        97,
        116,
        101,
        100,
        95,
        56,
        95,
        55,
        56,
        0,
      );
      sportD += (sharedw ? 4 : 3) >> Math.min(Math.abs(langkeyL.size), 2);
      reportT = '2';
      let debug5 = middles.length <= 7700428;
      do {
        middles = [langkeyL.size | 3];
        if (debug5) {
          break;
        }
      } while (debug5 && security2 - 5 >= 1 && security2 - 5 >= 4);
      mbnativeadvancedf -= parseFloat(`${1 ^ sourcef.length}`);
    }
    let appsw = 5646301 >= package_kD;
    do {
      package_kD >>= Math.min(2, Math.abs(interstitialC.size));
      if (appsw) {
        break;
      }
    } while (
      (2 >= 1 << Math.min(2, Math.abs(launcherB)) ||
        package_kD << Math.min(Math.abs(1), 5) >= 4) &&
      appsw
    );
    launcherB &= interstitialC.size;
    if (
      4 < sourcef.length * parseInt(`${colorsj}`) ||
      3 < (sourcef.length & 4)
    ) {
      sourcef = `${parseInt(`${colorsj}`) - parseInt(`${mbnativeadvancedf}`)}`;
    }
    let reactO = 5230364 >= interstitialC.size;
    do {
      interstitialC = new Map([[`${bridge_.length}`, 3]]);
      if (reactO) {
        break;
      }
    } while (
      5.5 == mbnativeadvancedf / 4.58 &&
      4 == parseInt(`${mbnativeadvancedf}`) / Math.max(interstitialC.size, 8) &&
      reactO
    );
    if (5 + sourcef.length >= 2) {
      package_kD <<= Math.min(
        Math.abs(parseInt(`${mbnativeadvancedf}`) - launcherB),
        3,
      );
    }
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    dispatch(
      addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current),
    );
    setInitTime(currentTimeRef.current);
  };

  useEffect(() => {
    setIsCollapsed(true);

    setTimeout(() => {
      episodeRef?.current?.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }, 500);
  }, [currentEpisode, episodeRef, isFetchingVodDetails]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        setDismountPlayer(true);
        if (
          vod &&
          vod?.vod_play_list.urls?.find(url => url.nid === currentEpisode)?.url
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef]),
  );

  const renderEpisodes = useCallback(
    ({item}) => (
      <TouchableOpacity
        activeOpacity={0.85}
        style={{
          backgroundColor:
            currentEpisode === item.nid ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 10,
          minWidth: 70,
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        onPress={() => {
          setCurrentEpisode(item.nid);
          currentEpisodeRef.current = item.nid;
          currentTimeRef.current = 0;
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            textAlign: 'center',
            fontWeight: '500',
            color: currentEpisode === item.nid ? colors.selected : colors.muted,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [currentEpisode],
  );

  const onContentSizeChange = () => {
    let darku: Map<any, any> = new Map([
      [
        String.fromCharCode(
          103,
          95,
          49,
          51,
          95,
          109,
          117,
          108,
          116,
          105,
          100,
          101,
          115,
          99,
          114,
          105,
          112,
          116,
          111,
          114,
          0,
        ),
        886,
      ],
      [
        String.fromCharCode(103, 117, 105, 100, 101, 95, 97, 95, 53, 48, 0),
        510,
      ],
      [
        String.fromCharCode(
          121,
          95,
          54,
          49,
          95,
          106,
          112,
          101,
          103,
          108,
          105,
          98,
          0,
        ),
        36,
      ],
    ]);
    let adult9 = String.fromCharCode(
      101,
      95,
      57,
      51,
      95,
      97,
      117,
      116,
      111,
      114,
      101,
      118,
      101,
      114,
      115,
      101,
      100,
      0,
    );
    let nativeexV = true;
    let chatL = 0;
    let successh = 0.0;
    let actionsg = 0.0;
    let arrow5 = String.fromCharCode(
      117,
      95,
      53,
      53,
      95,
      115,
      117,
      98,
      112,
      97,
      99,
      107,
      101,
      116,
      115,
      0,
    );
    let bottom2: Array<any> = [559, 177, 344];
    let const_rJ = 4;
    let fastA = String.fromCharCode(
      110,
      95,
      56,
      56,
      95,
      116,
      114,
      97,
      99,
      101,
      0,
    );
    let indicatorg = String.fromCharCode(
      121,
      95,
      49,
      49,
      95,
      102,
      116,
      115,
      116,
      111,
      107,
      0,
    );
    let ewardedc = String.fromCharCode(
      97,
      112,
      112,
      115,
      95,
      98,
      95,
      57,
      51,
      0,
    );
    let colorsS = 1.0;
    let countryS = 4.0;
    let streaming_: Array<any> = [584, 869];
    let mutedr = true;
    adult9 = `${parseInt(`${actionsg}`) - 2}`;
    let utilsw = 8363311 <= const_rJ;
    do {
      let orangeW: Array<any> = [237, 177, 908];
      let drag0: Map<any, any> = new Map([
        [
          String.fromCharCode(120, 104, 116, 109, 108, 95, 48, 95, 57, 49, 0),
          String.fromCharCode(115, 95, 49, 48, 48, 95, 116, 114, 97, 110, 0),
        ],
        [
          String.fromCharCode(
            99,
            111,
            110,
            116,
            101,
            120,
            116,
            95,
            109,
            95,
            49,
            48,
            0,
          ),
          String.fromCharCode(
            105,
            95,
            54,
            50,
            95,
            114,
            101,
            97,
            100,
            109,
            101,
            0,
          ),
        ],
        [
          String.fromCharCode(
            106,
            118,
            101,
            114,
            115,
            105,
            111,
            110,
            95,
            120,
            95,
            54,
            52,
            0,
          ),
          String.fromCharCode(114, 101, 112, 108, 121, 95, 120, 95, 50, 49, 0),
        ],
      ]);
      let headert = 3.0;
      let muted0 = String.fromCharCode(
        114,
        101,
        110,
        111,
        114,
        109,
        101,
        95,
        110,
        95,
        56,
        56,
        0,
      );
      let teamQ: Map<any, any> = new Map([
        [
          String.fromCharCode(116, 95, 53, 56, 95, 102, 105, 110, 97, 108, 0),
          263,
        ],
        [
          String.fromCharCode(
            112,
            104,
            111,
            110,
            101,
            115,
            95,
            103,
            95,
            51,
            49,
            0,
          ),
          803,
        ],
        [
          String.fromCharCode(
            98,
            114,
            97,
            99,
            107,
            101,
            116,
            115,
            95,
            119,
            95,
            52,
            54,
            0,
          ),
          473,
        ],
      ]);
      let emptyy = 5.0;
      drag0 = new Map([[`${drag0.size}`, orangeW.length ^ drag0.size]]);
      emptyy += parseFloat(`${parseInt(`${emptyy}`)}`);
      headert *= parseFloat(`${muted0.length}`);
      let topicF = 2.0;
      let minie = 2.0;
      drag0 = new Map([[muted0, parseInt(`${headert}`) + muted0.length]]);
      let activee = String.fromCharCode(
        115,
        95,
        51,
        49,
        95,
        99,
        111,
        110,
        102,
        0,
      );
      let spinner0 = String.fromCharCode(
        98,
        95,
        51,
        50,
        95,
        104,
        112,
        97,
        114,
        97,
        109,
        115,
        0,
      );
      let profiles = spinner0.length <= 8046072;
      do {
        spinner0 += `${parseInt(`${topicF}`)}`;
        if (profiles) {
          break;
        }
      } while (profiles && !spinner0.startsWith(`${topicF}`));
      activee = `${parseInt(`${minie}`)}`;
      drag0.set(activee, parseInt(`${headert}`));
      let roomo: Map<any, any> = new Map([
        [
          String.fromCharCode(
            100,
            101,
            108,
            101,
            116,
            105,
            110,
            103,
            95,
            99,
            95,
            50,
            52,
            0,
          ),
          726,
        ],
        [
          String.fromCharCode(
            101,
            95,
            49,
            95,
            106,
            109,
            111,
            114,
            101,
            99,
            102,
            103,
            0,
          ),
          448,
        ],
      ]);
      roomo.set(`${topicF}`, parseInt(`${topicF}`) * 1);
      drag0.set(`${minie}`, parseInt(`${minie}`));
      let championc = 5.0;
      for (let k = 0; k < 2; k++) {
        championc += muted0.length;
      }
      if (!activee.startsWith(`${minie}`)) {
        let xvodp: Array<any> = [986, 522];
        activee = `${parseInt(`${topicF}`)}`;
        xvodp = [xvodp.length];
      }
      if (muted0.length >= 1) {
        let moviesb = 1.0;
        let configureV: Array<any> = [260, 433];
        teamQ.set(`${spinner0}`, drag0.size | spinner0.length);
        moviesb *= parseFloat(
          `${parseInt(`${moviesb}`) % Math.max(configureV.length, 4)}`,
        );
        configureV.push(parseInt(`${moviesb}`) % 2);
      }
      const_rJ *= 2;
      if (utilsw) {
        break;
      }
    } while (utilsw && (5 > fastA.length + const_rJ || fastA.length + 5 > 5));
    successh *= parseFloat(`${chatL}`);
    let descV = String.fromCharCode(
      101,
      95,
      57,
      48,
      95,
      111,
      115,
      100,
      101,
      112,
      0,
    );
    let scoreC = 0.0;
    let foregroundE = 1;
    let vignettea = String.fromCharCode(
      108,
      95,
      54,
      56,
      95,
      100,
      101,
      113,
      117,
      101,
      117,
      101,
      100,
      0,
    );
    let pageB = String.fromCharCode(
      111,
      95,
      55,
      51,
      95,
      99,
      111,
      112,
      121,
      114,
      105,
      103,
      104,
      116,
      0,
    );
    let fillI = 3.0;
    let topon_ = String.fromCharCode(
      99,
      97,
      118,
      108,
      99,
      95,
      105,
      95,
      54,
      56,
      0,
    );
    let sharedr: Map<any, any> = new Map([
      [
        String.fromCharCode(
          122,
          95,
          54,
          54,
          95,
          102,
          105,
          110,
          100,
          97,
          115,
          111,
          99,
          0,
        ),
        String.fromCharCode(
          122,
          95,
          50,
          51,
          95,
          112,
          111,
          105,
          110,
          116,
          111,
          99,
          116,
          0,
        ),
      ],
      [
        String.fromCharCode(
          114,
          101,
          115,
          105,
          103,
          110,
          95,
          100,
          95,
          53,
          55,
          0,
        ),
        String.fromCharCode(
          112,
          114,
          111,
          98,
          97,
          98,
          108,
          101,
          95,
          115,
          95,
          57,
          56,
          0,
        ),
      ],
      [
        String.fromCharCode(
          105,
          110,
          102,
          108,
          105,
          103,
          104,
          116,
          95,
          118,
          95,
          52,
          49,
          0,
        ),
        String.fromCharCode(
          103,
          101,
          110,
          101,
          114,
          97,
          116,
          105,
          110,
          103,
          95,
          102,
          95,
          50,
          51,
          0,
        ),
      ],
    ]);
    vignettea = `${vignettea.length}`;
    fillI /= Math.max(topon_.length - sharedr.size, 5);
    topon_ = `${
      topon_ == String.fromCharCode(121, 0) ? topon_.length : sharedr.size
    }`;
    let backgroundy = String.fromCharCode(
      115,
      95,
      55,
      50,
      95,
      119,
      97,
      116,
      99,
      104,
      105,
      110,
      103,
      0,
    );
    let screen1: Array<any> = [774, 626];
    let logod = 4.0;
    foregroundE ^= pageB.length >> Math.min(descV.length, 2);
    screen1.push(parseInt(`${logod}`));
    logod *= parseFloat(`${parseInt(`${logod}`) & screen1.length}`);
    if ((3 | foregroundE) == 4) {
      let gcopy_aL = String.fromCharCode(
        99,
        95,
        56,
        53,
        95,
        118,
        97,
        108,
        105,
        100,
        97,
        116,
        97,
        98,
        108,
        101,
        0,
      );
      let debugd = 2.0;
      scoreC +=
        backgroundy == String.fromCharCode(77, 0)
          ? backgroundy.length
          : parseInt(`${scoreC}`);
      gcopy_aL += `${parseInt(`${debugd}`) % Math.max(gcopy_aL.length, 1)}`;
      debugd -= gcopy_aL.length + 1;
    }
    let plasht = vignettea.length >= 8226414;
    do {
      vignettea += `${vignettea.length + 2}`;
      if (plasht) {
        break;
      }
    } while (vignettea.endsWith(`${foregroundE}`) && plasht);
    if (scoreC + descV.length <= 4.68 && (descV.length & 3) <= 3) {
      scoreC -= foregroundE;
    }
    if (
      scoreC / Math.max(descV.length, 10) >= 2.13 &&
      scoreC / Math.max(descV.length, 10) >= 2.13
    ) {
      scoreC += 3;
    }
    while (descV.length <= 1 && backgroundy == String.fromCharCode(108, 0)) {
      descV = `${pageB.length / 3}`;
      break;
    }
    indicatorg += `${bottom2.length * darku.size}`;
    let rulesY = false;
    let blacklistO = 1.0;
    while (blacklistO * 5.95 <= 1.18 || !rulesY) {
      rulesY = rulesY || 97.49 == blacklistO;
      break;
    }
    rulesY = blacklistO > 29.34 && rulesY;
    let bufferO = String.fromCharCode(
      113,
      95,
      51,
      50,
      95,
      102,
      114,
      97,
      109,
      101,
      115,
      105,
      122,
      101,
      0,
    );
    let auto_64 = String.fromCharCode(
      108,
      95,
      49,
      57,
      95,
      98,
      105,
      114,
      116,
      104,
      0,
    );
    auto_64 += `${rulesY ? 2 : 4}`;
    let window_vx3 = bufferO == String.fromCharCode(56, 106, 116, 101, 56, 0);
    do {
      bufferO = `${1 - parseInt(`${blacklistO}`)}`;
      if (window_vx3) {
        break;
      }
    } while (2 < auto_64.length && window_vx3);
    let target5 = blacklistO >= 7529846.0;
    do {
      blacklistO -= parseFloat(`${bufferO.length / 1}`);
      if (target5) {
        break;
      }
    } while (
      (blacklistO / Math.max(4.15, 1) >= 2.1 ||
        parseInt(`${blacklistO}`) / 4 >= 4) &&
      target5
    );
    adult9 = `${arrow5.length}`;
    darku.set(
      `${actionsg}`,
      adult9 == String.fromCharCode(122, 0)
        ? adult9.length
        : parseInt(`${actionsg}`),
    );
    let sortT =
      String.fromCharCode(106, 52, 112, 119, 51, 112, 114, 103, 0) == ewardedc;
    do {
      let twitterY: Map<any, any> = new Map([
        [String.fromCharCode(102, 95, 52, 57, 95, 99, 97, 118, 112, 0), false],
        [
          String.fromCharCode(
            101,
            110,
            99,
            114,
            121,
            112,
            116,
            101,
            100,
            95,
            103,
            95,
            52,
            54,
            0,
          ),
          false,
        ],
        [
          String.fromCharCode(
            122,
            95,
            56,
            54,
            95,
            109,
            106,
            112,
            101,
            103,
            106,
            112,
            101,
            103,
            0,
          ),
          false,
        ],
      ]);
      let countdownG = String.fromCharCode(
        113,
        117,
        97,
        110,
        116,
        105,
        116,
        121,
        95,
        104,
        95,
        51,
        48,
        0,
      );
      twitterY = new Map([[`${twitterY.size}`, twitterY.size]]);
      if (3 >= countdownG.length >> Math.min(Math.abs(4), 1)) {
        let topic2: Array<any> = [
          String.fromCharCode(
            99,
            95,
            56,
            53,
            95,
            112,
            114,
            101,
            115,
            115,
            117,
            114,
            101,
            0,
          ),
          String.fromCharCode(
            116,
            95,
            51,
            55,
            95,
            119,
            97,
            116,
            99,
            104,
            100,
            111,
            103,
            0,
          ),
          String.fromCharCode(97, 108, 97, 119, 95, 105, 95, 50, 55, 0),
        ];
        let pointu = String.fromCharCode(
          115,
          116,
          114,
          111,
          107,
          101,
          100,
          95,
          107,
          95,
          52,
          56,
          0,
        );
        let wcopy_oj = String.fromCharCode(
          99,
          95,
          53,
          57,
          95,
          114,
          101,
          108,
          97,
          121,
          115,
          0,
        );
        let plashQ = 4.0;
        twitterY = new Map([
          [`${twitterY.size}`, twitterY.size ^ pointu.length],
        ]);
        topic2.push(wcopy_oj.length & 2);
        pointu = `${topic2.length}`;
        wcopy_oj += `${2 & parseInt(`${plashQ}`)}`;
        plashQ *= 3 >> Math.min(5, wcopy_oj.length);
      }
      let default_9l6: Array<any> = [65, 313];
      let eactS = true;
      while (!Array.from(twitterY.values()).includes(default_9l6.length)) {
        twitterY.set(
          countdownG,
          String.fromCharCode(57, 0) == countdownG
            ? twitterY.size
            : countdownG.length,
        );
        break;
      }
      let middleK = default_9l6.length <= 5086246;
      do {
        default_9l6.push(countdownG.length);
        if (middleK) {
          break;
        }
      } while (3 >= default_9l6.length * 4 && middleK);
      ewardedc = `${
        String.fromCharCode(102, 0) == ewardedc ? const_rJ : ewardedc.length
      }`;
      if (sortT) {
        break;
      }
    } while (!ewardedc.endsWith(adult9) && sortT);
    if (
      2 == adult9.length << Math.min(Math.abs(5), 2) &&
      successh - 1.1 == 4.57
    ) {
      successh += parseFloat(`${fastA.length}`);
    }

    if (episodeRef.current) {
      if (!indicatorg.startsWith(ewardedc)) {
        indicatorg = '3';
      }
      let activityz = 9095280.0 >= colorsS;
      do {
        colorsS -= 1;
        if (activityz) {
          break;
        }
      } while (activityz && fastA.includes(`${colorsS}`));
      let liveH = colorsS <= 5327852.0;
      do {
        let sortg = false;
        let gestures8 = false;
        sortg = !gestures8;
        let button6 = 1.0;
        let castj: Array<any> = [306, 991];
        gestures8 = button6 < 78.46;
        button6 *= 2;
        castj.push(1 | castj.length);
        let huaweiu = String.fromCharCode(
          105,
          95,
          53,
          56,
          95,
          107,
          105,
          108,
          111,
          98,
          121,
          116,
          101,
          0,
        );
        sortg = gestures8 && !sortg;
        huaweiu += `${huaweiu.length}`;
        let constantsO = gestures8 ? !gestures8 : gestures8;
        do {
          gestures8 = !sortg || !gestures8;
          if (constantsO) {
            break;
          }
        } while ((sortg || gestures8) && constantsO);
        let layoutr = String.fromCharCode(
          121,
          95,
          56,
          51,
          95,
          118,
          101,
          110,
          100,
          111,
          114,
          0,
        );
        layoutr = `${2 * (sortg ? 3 : 4)}`;
        colorsS /= Math.max(indicatorg.length * (gestures8 ? 2 : 1), 3);
        if (liveH) {
          break;
        }
      } while (liveH && !arrow5.includes(`${colorsS}`));
      const_rJ <<= Math.min(Math.abs(3), 5);
      while (3.14 < actionsg) {
        let home9 = String.fromCharCode(
          105,
          110,
          102,
          111,
          108,
          100,
          101,
          114,
          95,
          56,
          95,
          56,
          50,
          0,
        );
        let hookq: Map<any, any> = new Map([
          [
            String.fromCharCode(
              119,
              97,
              116,
              99,
              104,
              101,
              100,
              95,
              118,
              95,
              56,
              54,
              0,
            ),
            String.fromCharCode(100, 98, 108, 112, 95, 114, 95, 49, 0),
          ],
          [
            String.fromCharCode(118, 95, 50, 49, 0),
            String.fromCharCode(
              102,
              111,
              114,
              119,
              97,
              114,
              100,
              101,
              114,
              95,
              108,
              95,
              54,
              0,
            ),
          ],
        ]);
        let private_qb = 7184580 >= hookq.size;
        do {
          let colorsy = 5.0;
          let dangerr: Array<any> = [286, 929];
          let tooltipsu = 3;
          let statistics_ = true;
          let arrowx: Map<any, any> = new Map([
            [
              String.fromCharCode(
                99,
                111,
                108,
                108,
                97,
                116,
                105,
                111,
                110,
                95,
                53,
                95,
                49,
                51,
                0,
              ),
              true,
            ],
            [
              String.fromCharCode(
                104,
                95,
                52,
                53,
                95,
                115,
                101,
                112,
                97,
                114,
                97,
                116,
                111,
                114,
                115,
                0,
              ),
              true,
            ],
            [
              String.fromCharCode(111, 95, 51, 49, 95, 116, 105, 102, 102, 0),
              false,
            ],
          ]);
          hookq = new Map([[`${hookq.size}`, arrowx.size]]);
          colorsy /= Math.max(3, 1);
          dangerr = [parseInt(`${colorsy}`)];
          tooltipsu &= 3;
          statistics_ = 65 >= tooltipsu;
          arrowx.set(
            `${statistics_}`,
            (statistics_ ? 1 : 3) <<
              Math.min(Math.abs(parseInt(`${colorsy}`)), 5),
          );
          if (private_qb) {
            break;
          }
        } while (
          (4 == home9.length / 4 ||
            hookq.size / Math.max(home9.length, 4) == 4) &&
          private_qb
        );
        home9 += `${
          home9 == String.fromCharCode(106, 0) ? hookq.size : home9.length
        }`;
        actionsg /= Math.max(
          1,
          parseFloat(`${indicatorg.length / Math.max(2, 9)}`),
        );
        break;
      }
      fastA += `${bottom2.length << Math.min(Math.abs(1), 4)}`;
      let stary: Array<any> = [153, 669];
      while (2 * stary.length == 5 || 2 == 2 * stary.length) {
        let holder7 = String.fromCharCode(
          112,
          95,
          52,
          51,
          95,
          109,
          97,
          105,
          110,
          102,
          117,
          110,
          99,
          0,
        );
        let thailandA = 3.0;
        stary = [stary.length];
        holder7 += `${parseInt(`${thailandA}`) % Math.max(1, 6)}`;
        thailandA += 3;
        break;
      }
      stary.push(3);
      stary.push(stary.length / Math.max(stary.length, 2));
      darku.set(`${colorsS}`, stary.length);
      let indicator_ =
        String.fromCharCode(115, 55, 115, 114, 119, 55, 0) == ewardedc;
      do {
        ewardedc = `${parseInt(`${successh}`)}`;
        if (indicator_) {
          break;
        }
      } while (indicator_ && 1 > chatL);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
    let guidea = false;
    let stepI: Array<any> = [912, 418, 101];
    let home2 = 5;
    let moder = false;
    let soundc = 5.0;
    let nativek: Map<any, any> = new Map([
      [
        String.fromCharCode(107, 95, 54, 52, 95, 100, 101, 98, 117, 103, 0),
        960,
      ],
      [String.fromCharCode(115, 116, 97, 116, 115, 95, 117, 95, 55, 0), 238],
      [String.fromCharCode(118, 95, 57, 50, 95, 102, 108, 105, 99, 0), 349],
    ]);
    let combinedM = 5;
    let whitex = String.fromCharCode(
      102,
      95,
      56,
      52,
      95,
      112,
      114,
      105,
      118,
      97,
      116,
      101,
      0,
    );
    let singleK = true;
    let bing2 = 8505101 <= combinedM;
    do {
      combinedM <<= Math.min(stepI.length, 2);
      if (bing2) {
        break;
      }
    } while (bing2 && 1 >= (combinedM ^ 2));
    home2 += stepI.length / Math.max(whitex.length, 4);
    if (2 << Math.min(3, Math.abs(combinedM)) < 2 || 5.91 * soundc < 4.56) {
      soundc -= parseFloat(`${stepI.length}`);
    }
    soundc /= Math.max(1, parseFloat(`${singleK ? 1 : 1}`));
    guidea = !whitex.endsWith(`${singleK}`);
    home2 *= nativek.size << Math.min(Math.abs(2), 1);
    let arrowU = String.fromCharCode(
      115,
      101,
      110,
      100,
      101,
      114,
      115,
      95,
      50,
      95,
      50,
      55,
      0,
    );
    let regengp = 2.0;
    regengp += parseFloat(
      `${
        String.fromCharCode(82, 0) == arrowU
          ? arrowU.length
          : parseInt(`${regengp}`)
      }`,
    );
    if (5.44 == regengp) {
      let crownf = String.fromCharCode(
        111,
        110,
        97,
        118,
        99,
        95,
        101,
        95,
        49,
        54,
        0,
      );
      let darkP: Array<any> = [942, 444];
      let megaphones = true;
      let photoN = String.fromCharCode(
        115,
        110,
        97,
        112,
        112,
        121,
        95,
        52,
        95,
        56,
        48,
        0,
      );
      let progressF: Array<any> = [470, 19];
      regengp += parseFloat(`${3}`);
      crownf = `${crownf.length}`;
      darkP = [3];
      megaphones = 65 > progressF.length;
      photoN += `${darkP.length}`;
      progressF.push(crownf.length ^ 1);
    }
    let previewi = 4.0;
    let assistG: Map<any, any> = new Map([
      [
        String.fromCharCode(
          97,
          117,
          103,
          109,
          101,
          110,
          116,
          101,
          100,
          95,
          112,
          95,
          55,
          51,
          0,
        ),
        354,
      ],
      [
        String.fromCharCode(
          107,
          95,
          49,
          56,
          95,
          99,
          117,
          101,
          112,
          111,
          105,
          110,
          116,
          0,
        ),
        100,
      ],
      [
        String.fromCharCode(
          112,
          105,
          99,
          116,
          117,
          114,
          101,
          95,
          51,
          95,
          57,
          57,
          0,
        ),
        986,
      ],
    ]);
    regengp += parseFloat(`${3 * parseInt(`${previewi}`)}`);
    previewi -= parseFloat(`${1}`);
    assistG = new Map([[`${assistG.size}`, 3]]);
    let statse = arrowU.length <= 5642351;
    do {
      arrowU += `${3 - parseInt(`${regengp}`)}`;
      if (statse) {
        break;
      }
    } while (
      statse &&
      (3 <= parseInt(`${regengp}`) + 2 ||
        4.69 <= regengp + parseFloat(`${arrowU.length}`))
    );
    arrowU += `${arrowU.length}`;
    arrowU += `${parseInt(`${regengp}`) << Math.min(Math.abs(2), 2)}`;
    singleK = whitex.length + stepI.length >= 80;
    combinedM /= Math.max(3, 5);
    nativek.set(`${home2}`, 3 ^ home2);
    while (!whitex.endsWith(`${moder}`)) {
      whitex = `${nativek.size}`;
      break;
    }
    let connectionC = String.fromCharCode(
      117,
      95,
      54,
      53,
      95,
      114,
      97,
      100,
      105,
      97,
      108,
      0,
    );
    let statsO = true;
    connectionC += '1';
    connectionC += `${connectionC.length & (statsO ? 4 : 1)}`;
    for (let c = 0; c < 2; c++) {
      connectionC += `${3 | (statsO ? 5 : 3)}`;
    }
    if (statsO) {
      let topon8 = false;
      let tempP = String.fromCharCode(
        115,
        95,
        51,
        49,
        95,
        99,
        111,
        109,
        112,
        97,
        114,
        101,
        0,
      );
      statsO = topon8 && tempP.length < 64;
    }
    let buildH = String.fromCharCode(
      110,
      95,
      56,
      52,
      95,
      122,
      111,
      111,
      109,
      101,
      100,
      0,
    );
    let rankN: Array<any> = [42, 936, 905];
    statsO = rankN.length * (statsO ? rankN.length : 44) == 44;
    buildH += `${1 + buildH.length}`;
    let tail0 = String.fromCharCode(116, 114, 110, 115, 95, 110, 95, 51, 48, 0);
    let pagem: Array<any> = [122, 136];
    let twitterM = 3.0;
    connectionC += `${parseInt(`${twitterM}`) - pagem.length}`;
    tail0 += `${
      String.fromCharCode(104, 0) == tail0 ? tail0.length : tail0.length
    }`;
    pagem.push(tail0.length);
    stepI = [3];
    combinedM &= home2;
    if (nativek.size == 1) {
      nativek = new Map([[`${combinedM}`, 1]]);
    }
    nativek.set(`${home2}`, 1 * stepI.length);
    combinedM -= home2 - 1;
    if (Array.from(nativek.keys()).includes(`${combinedM}`)) {
      let desc_ = 4;
      let tailJ = 4;
      let reactM = String.fromCharCode(
        114,
        101,
        116,
        114,
        105,
        101,
        118,
        105,
        110,
        103,
        95,
        108,
        95,
        50,
        57,
        0,
      );
      let calendar2 = 3.0;
      desc_ <<= Math.min(Math.abs(2 ^ parseInt(`${calendar2}`)), 1);
      reactM += `${
        String.fromCharCode(108, 0) == reactM ? reactM.length : reactM.length
      }`;
      calendar2 *= parseFloat(`${2}`);
      while ((desc_ | 2) < 2 && 2 < (tailJ | 2)) {
        let referrerF = String.fromCharCode(
          122,
          95,
          50,
          51,
          95,
          110,
          105,
          100,
          115,
          0,
        );
        let unreadx: Map<any, any> = new Map([
          [
            String.fromCharCode(
              115,
              108,
              117,
              114,
              112,
              95,
              112,
              95,
              49,
              51,
              0,
            ),
            String.fromCharCode(119, 95, 57, 52, 95, 118, 100, 101, 99, 0),
          ],
          [
            String.fromCharCode(
              97,
              116,
              116,
              97,
              99,
              104,
              109,
              101,
              110,
              116,
              95,
              50,
              95,
              49,
              55,
              0,
            ),
            String.fromCharCode(104, 95, 50, 55, 95, 99, 118, 105, 100, 0),
          ],
        ]);
        let questh = false;
        let infoc = String.fromCharCode(
          104,
          95,
          49,
          54,
          95,
          119,
          101,
          98,
          118,
          116,
          116,
          0,
        );
        let malaysiak = String.fromCharCode(
          104,
          95,
          53,
          49,
          95,
          98,
          117,
          102,
          102,
          101,
          114,
          115,
          0,
        );
        tailJ &= 3;
        referrerF = `${malaysiak.length << Math.min(Math.abs(1), 4)}`;
        unreadx = new Map([[`${unreadx.size}`, unreadx.size]]);
        questh = referrerF.length <= 58;
        infoc += `${infoc.length - 1}`;
        malaysiak += `${malaysiak.length & infoc.length}`;
        break;
      }
      let unreadV = false;
      let eventO = true;
      let crownC = String.fromCharCode(
        114,
        101,
        115,
        105,
        103,
        110,
        101,
        100,
        95,
        51,
        95,
        57,
        50,
        0,
      );
      let controlS = 2;
      eventO = !unreadV;
      crownC += `${crownC.length - 1}`;
      controlS /= Math.max(1, crownC.length);
      if (5 <= (desc_ ^ 1) || 1 <= (tailJ ^ 1)) {
        let streamingA = String.fromCharCode(
          112,
          95,
          51,
          55,
          95,
          110,
          116,
          101,
          114,
          102,
          97,
          99,
          101,
          0,
        );
        let actionN = String.fromCharCode(
          99,
          111,
          108,
          117,
          109,
          110,
          108,
          105,
          115,
          116,
          95,
          49,
          95,
          51,
          56,
          0,
        );
        desc_ ^= 3;
        streamingA += '1';
        actionN += '3';
      }
      if (unreadV) {
        eventO = 98 >= desc_ || unreadV;
      }
      combinedM |= 1 / Math.max(parseInt(`${soundc}`), 8);
    }
    whitex += `${
      whitex == String.fromCharCode(52, 0) ? (guidea ? 5 : 1) : whitex.length
    }`;
    let gpayp = 1.0;
    let viewerB = gpayp <= 9858842.0;
    do {
      gpayp *= parseInt(`${gpayp}`) ^ parseInt(`${gpayp}`);
      if (viewerB) {
        break;
      }
    } while (viewerB && 1.85 - gpayp == 3.68);
    let reducerG = 8467452.0 >= gpayp;
    do {
      gpayp -= 3 / Math.max(3, parseInt(`${gpayp}`));
      if (reducerG) {
        break;
      }
    } while (gpayp <= 5.98 && reducerG);
    while (1.91 >= gpayp / Math.max(4, gpayp)) {
      gpayp += parseInt(`${gpayp}`) ^ parseInt(`${gpayp}`);
      break;
    }
    whitex += `${parseInt(`${soundc}`) & 1}`;
    if (3 >= combinedM || 1 >= combinedM % 3) {
      let miniv = String.fromCharCode(
        100,
        95,
        56,
        55,
        95,
        99,
        111,
        101,
        102,
        102,
        105,
        99,
        105,
        101,
        110,
        116,
        0,
      );
      let pathc: Array<any> = [505, 334];
      while (3 >= 1 - miniv.length) {
        let checkboxJ = String.fromCharCode(
          122,
          95,
          56,
          54,
          95,
          115,
          112,
          108,
          105,
          116,
          116,
          101,
          100,
          0,
        );
        let ajax3 = 5.0;
        pathc = [parseInt(`${ajax3}`) & 2];
        checkboxJ = `${checkboxJ.length - 3}`;
        ajax3 -= parseFloat(`${checkboxJ.length}`);
        break;
      }
      for (let m = 0; m < 1; m++) {
        let balln = String.fromCharCode(
          109,
          95,
          55,
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
        let hooksm = String.fromCharCode(
          121,
          95,
          51,
          95,
          99,
          111,
          101,
          102,
          102,
          115,
          112,
          0,
        );
        let layoutV: Map<any, any> = new Map([
          [
            String.fromCharCode(
              100,
              95,
              54,
              54,
              95,
              99,
              111,
              117,
              110,
              116,
              100,
              111,
              119,
              110,
              0,
            ),
            308,
          ],
          [String.fromCharCode(97, 100, 100, 95, 50, 95, 49, 55, 0), 917],
          [String.fromCharCode(118, 95, 55, 56, 95, 109, 115, 117, 98, 0), 929],
        ]);
        pathc.push(1 + miniv.length);
        balln = `${balln.length}`;
        hooksm += '3';
        layoutV = new Map([[balln, hooksm.length]]);
      }
      for (let k = 0; k < 1; k++) {
        let tooltipsZ = true;
        let libcrashsdkg: Map<any, any> = new Map([
          [
            String.fromCharCode(122, 95, 55, 52, 95, 99, 104, 105, 110, 0),
            false,
          ],
          [
            String.fromCharCode(
              117,
              112,
              108,
              111,
              97,
              100,
              97,
              98,
              108,
              101,
              95,
              97,
              95,
              55,
              48,
              0,
            ),
            false,
          ],
          [
            String.fromCharCode(
              104,
              95,
              55,
              54,
              95,
              116,
              119,
              105,
              116,
              116,
              101,
              114,
              0,
            ),
            false,
          ],
        ]);
        let page5 = String.fromCharCode(
          111,
          95,
          50,
          52,
          95,
          114,
          101,
          102,
          112,
          105,
          99,
          0,
        );
        let modalw: Map<any, any> = new Map([
          [
            String.fromCharCode(112, 95, 55, 52, 95, 101, 113, 117, 97, 108, 0),
            751,
          ],
          [String.fromCharCode(112, 95, 57, 50, 95, 114, 101, 116, 0), 477],
        ]);
        miniv += `${
          String.fromCharCode(68, 0) == page5 ? page5.length : libcrashsdkg.size
        }`;
        tooltipsZ = modalw.size <= 63 || !tooltipsZ;
        libcrashsdkg = new Map([[`${modalw.size}`, modalw.size]]);
      }
      let anythinkF = false;
      miniv = `${(anythinkF ? 2 : 1) & miniv.length}`;
      let redirectu = miniv.length <= 7656264;
      do {
        let modityA = String.fromCharCode(
          109,
          111,
          118,
          101,
          95,
          101,
          95,
          52,
          57,
          0,
        );
        let lineh: Array<any> = [161, 129];
        let fastforwardy = String.fromCharCode(
          115,
          97,
          108,
          116,
          101,
          100,
          95,
          106,
          95,
          52,
          53,
          0,
        );
        miniv = `${3 + fastforwardy.length}`;
        modityA = '1';
        lineh = [lineh.length << Math.min(modityA.length, 4)];
        fastforwardy += `${
          modityA == String.fromCharCode(67, 0) ? modityA.length : lineh.length
        }`;
        if (redirectu) {
          break;
        }
      } while (redirectu && 5 < miniv.length);
      let friendsh = 0;
      let moviesM: Array<any> = [962, 830];
      let selectione = String.fromCharCode(
        105,
        95,
        52,
        55,
        95,
        103,
        100,
        112,
        114,
        0,
      );
      miniv = `${pathc.length}`;
      friendsh *=
        String.fromCharCode(121, 0) == selectione
          ? selectione.length
          : moviesM.length;
      moviesM = [moviesM.length];
      combinedM &= combinedM;
    }

    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0;
    handleModalClose();
  };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  const [vodUri, setVodUri] = useState('');

  const debounceSetVodUri = useCallback(
    debounce(uri => setVodUri(uri), 1000),
    [],
  );

  const vodUrl: string = vod?.vod_play_list.urls?.find(
    url => url.nid === currentEpisode,
  )?.url;

  const handleSearchVideo = useCallback(async () => {
    let skiph = 4;
    let icon_ = 5;
    let tick2 = String.fromCharCode(
      99,
      97,
      108,
      108,
      105,
      115,
      116,
      111,
      95,
      120,
      95,
      57,
      50,
      0,
    );
    let unread6 = String.fromCharCode(
      98,
      95,
      55,
      54,
      95,
      111,
      110,
      116,
      114,
      111,
      108,
      0,
    );
    let predictionv: Map<any, any> = new Map([
      [
        String.fromCharCode(109, 117, 116, 101, 120, 95, 107, 95, 51, 51, 0),
        false,
      ],
      [
        String.fromCharCode(
          105,
          95,
          49,
          48,
          95,
          99,
          111,
          112,
          121,
          116,
          101,
          115,
          116,
          0,
        ),
        false,
      ],
      [
        String.fromCharCode(
          102,
          95,
          50,
          49,
          95,
          112,
          111,
          115,
          116,
          105,
          110,
          103,
          0,
        ),
        false,
      ],
    ]);
    let annerQ = false;
    let bannerE = String.fromCharCode(106, 95, 55, 50, 95, 97, 120, 112, 0);
    let modityf = String.fromCharCode(
      114,
      101,
      109,
      111,
      118,
      105,
      110,
      103,
      95,
      98,
      95,
      56,
      49,
      0,
    );
    let modelN: Map<any, any> = new Map([
      [String.fromCharCode(100, 105, 109, 95, 108, 95, 54, 57, 0), 807],
      [
        String.fromCharCode(111, 110, 115, 101, 116, 95, 49, 95, 56, 55, 0),
        861,
      ],
      [
        String.fromCharCode(
          101,
          120,
          101,
          99,
          117,
          116,
          97,
          98,
          108,
          101,
          95,
          50,
          95,
          52,
          51,
          0,
        ),
        206,
      ],
    ]);
    let viewsB = 3.0;
    modityf += `${skiph}`;
    let z_viewE =
      String.fromCharCode(111, 116, 51, 122, 107, 119, 111, 0) == unread6;
    do {
      let floating1 = 1.0;
      while (floating1 / Math.max(1.2, 7) == 1.12) {
        floating1 += parseInt(`${floating1}`);
        break;
      }
      floating1 /= Math.max(parseInt(`${floating1}`), 5);
      let downloads = String.fromCharCode(
        112,
        108,
        97,
        110,
        101,
        100,
        95,
        48,
        95,
        55,
        49,
        0,
      );
      let footballq = String.fromCharCode(
        99,
        114,
        99,
        99,
        95,
        119,
        95,
        55,
        56,
        0,
      );
      unread6 += `${skiph & parseInt(`${viewsB}`)}`;
      if (z_viewE) {
        break;
      }
    } while (4 == modelN.size && z_viewE);
    let animation8 = String.fromCharCode(53, 117, 115, 114, 105, 0) == modityf;
    do {
      modityf += `${modelN.size}`;
      if (animation8) {
        break;
      }
    } while (animation8 && bannerE == String.fromCharCode(117, 0));

    const searchTerm = vod?.vod_name ? vod?.vod_name : '';
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    while (2 < modityf.length && unread6 != String.fromCharCode(119, 0)) {
      let turni: Array<any> = [704, 739];
      let showQ = String.fromCharCode(
        103,
        95,
        54,
        50,
        95,
        108,
        111,
        99,
        107,
        110,
        101,
        115,
        115,
        0,
      );
      let robotoH: Map<any, any> = new Map([
        [String.fromCharCode(97, 95, 57, 55, 0), 373],
        [String.fromCharCode(97, 100, 100, 101, 114, 95, 48, 95, 52, 0), 779],
      ]);
      let mailW = String.fromCharCode(
        98,
        114,
        97,
        110,
        100,
        115,
        95,
        111,
        95,
        50,
        54,
        0,
      );
      let guidex: Array<any> = [
        String.fromCharCode(
          97,
          95,
          49,
          49,
          95,
          100,
          111,
          99,
          108,
          105,
          115,
          116,
          0,
        ),
        String.fromCharCode(110, 111, 116, 99, 104, 95, 54, 95, 50, 48, 0),
        String.fromCharCode(
          99,
          97,
          112,
          105,
          116,
          97,
          108,
          105,
          122,
          97,
          116,
          105,
          111,
          110,
          95,
          107,
          95,
          56,
          49,
          0,
        ),
      ];
      turni.push(
        mailW == String.fromCharCode(78, 0) ? mailW.length : turni.length,
      );
      guidex = [robotoH.size];
      if (
        4 % Math.max(8, guidex.length) >= 5 &&
        turni.length % Math.max(guidex.length, 8) >= 4
      ) {
        turni.push(showQ.length << Math.min(Math.abs(2), 5));
      }
      let brightnessF = false;
      let types0 = true;
      let applicationp = 5.0;
      let castP = 3;
      showQ = `${castP}`;
      applicationp -= parseInt(`${applicationp}`);
      castP <<= Math.min(2, Math.abs(parseInt(`${applicationp}`) & 1));
      let previewK = String.fromCharCode(
        100,
        95,
        54,
        53,
        95,
        114,
        101,
        100,
        117,
        99,
        101,
        114,
        0,
      );
      let headerf = 5;
      let componentk = true;
      mailW += `${(types0 ? 2 : 4) / 2}`;
      previewK += `${componentk ? 4 : 4}`;
      headerf ^= previewK.length >> Math.min(Math.abs(1), 5);
      guidex.push(mailW.length);
      mailW = '1';
      let customa = 6742744 >= robotoH.size;
      do {
        let baiduL = 4.0;
        robotoH = new Map([[`${types0}`, parseInt(`${baiduL}`) | 3]]);
        if (customa) {
          break;
        }
      } while (customa && robotoH.size + 4 >= 5 && 4 >= 4 + robotoH.size);
      while (showQ.length << Math.min(5, turni.length) > 2) {
        showQ += `${robotoH.size}`;
        break;
      }
      let questF = 0.0;
      types0 = brightnessF ? types0 : !brightnessF;
      questF -= parseFloat(`${parseInt(`${questF}`)}`);
      while (2 < guidex.length) {
        brightnessF = 15 >= mailW.length;
        break;
      }
      turni.push(
        mailW == String.fromCharCode(100, 0) ? guidex.length : mailW.length,
      );
      if (!brightnessF && !types0) {
        brightnessF = 98 < showQ.length;
      }
      let unselectedM = String.fromCharCode(95, 55, 122, 0) == showQ;
      do {
        let buildR = String.fromCharCode(
          98,
          105,
          116,
          114,
          118,
          95,
          110,
          95,
          55,
          49,
          0,
        );
        let nalyticsV: Array<any> = [552, 680, 85];
        let topicx: Array<any> = [
          String.fromCharCode(
            98,
            95,
            56,
            48,
            95,
            112,
            97,
            99,
            107,
            101,
            100,
            0,
          ),
          String.fromCharCode(97, 95, 49, 55, 95, 104, 111, 114, 105, 122, 0),
          String.fromCharCode(
            117,
            114,
            108,
            99,
            111,
            110,
            116,
            101,
            120,
            116,
            95,
            102,
            95,
            53,
            56,
            0,
          ),
        ];
        let package_cd1: Map<any, any> = new Map([
          [
            String.fromCharCode(
              117,
              95,
              49,
              54,
              95,
              111,
              110,
              116,
              97,
              99,
              116,
              0,
            ),
            false,
          ],
          [
            String.fromCharCode(
              114,
              118,
              100,
              97,
              116,
              97,
              95,
              119,
              95,
              55,
              55,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(
              102,
              95,
              55,
              50,
              95,
              105,
              116,
              97,
              108,
              105,
              97,
              110,
              0,
            ),
            false,
          ],
        ]);
        let circlem = 3;
        showQ += `${types0 ? 5 : 2}`;
        buildR = '1';
        nalyticsV.push(circlem);
        topicx = [circlem | 3];
        package_cd1 = new Map([[`${nalyticsV.length}`, 1]]);
        if (unselectedM) {
          break;
        }
      } while (showQ.length <= 4 && unselectedM);
      modityf += `${3 ^ modityf.length}`;
      break;
    }
    if (annerQ && 3 < unread6.length) {
      annerQ = viewsB <= modelN.size;
    }
    bannerE += '2';

    modelN.set(`${annerQ}`, (annerQ ? 3 : 3) & 2);
    predictionv.set(
      `${predictionv.size}`,
      predictionv.size >> Math.min(Math.abs(modelN.size), 5),
    );
    viewsB *=
      String.fromCharCode(68, 0) == bannerE ? bannerE.length : annerQ ? 3 : 5;

    if (unread6 != String.fromCharCode(76, 0)) {
      tick2 = `${predictionv.size & 1}`;
    }
    for (let t = 0; t < 3; t++) {
      modityf = `${parseInt(`${viewsB}`)}`;
    }
    unread6 = `${icon_ % Math.max(modityf.length, 10)}`;
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

    for (let a = 0; a < 1; a++) {
      modelN.set(`${viewsB}`, modelN.size);
    }
    while (1 <= unread6.length) {
      unread6 = `${modelN.size / 1}`;
      break;
    }
    modityf += `${modelN.size + (annerQ ? 4 : 1)}`;
    try {
      if (tick2.length <= bannerE.length) {
        tick2 = `${unread6.length >> Math.min(Math.abs(3), 3)}`;
      }
      while (!annerQ) {
        let pinge: Array<any> = [
          String.fromCharCode(
            120,
            95,
            56,
            50,
            95,
            108,
            111,
            103,
            108,
            101,
            118,
            101,
            108,
            0,
          ),
          String.fromCharCode(107, 95, 53, 53, 95, 102, 101, 110, 99, 0),
          String.fromCharCode(108, 95, 50, 57, 95, 97, 112, 105, 0),
        ];
        let materialo: Array<any> = [156, 736, 755];
        let interstitial3 = String.fromCharCode(
          111,
          110,
          101,
          112,
          97,
          115,
          115,
          95,
          121,
          95,
          50,
          53,
          0,
        );
        pinge.push(3 | interstitial3.length);
        let dicej = interstitial3.length >= 8103058;
        do {
          let minib = 3.0;
          let volumeB = 3.0;
          let hejiE = 3;
          interstitial3 = `${interstitial3.length % Math.max(7, pinge.length)}`;
          minib *= parseFloat(`${hejiE | 2}`);
          volumeB *= 2;
          hejiE ^= parseInt(`${volumeB}`);
          if (dicej) {
            break;
          }
        } while (interstitial3.length - 3 >= 1 && dicej);
        for (let y = 0; y < 2; y++) {
          materialo = [interstitial3.length];
        }
        if (pinge.includes(materialo.length)) {
          let filedP = String.fromCharCode(
            102,
            119,
            114,
            105,
            116,
            101,
            95,
            106,
            95,
            54,
            51,
            0,
          );
          let firebaseF = String.fromCharCode(
            116,
            95,
            57,
            95,
            116,
            111,
            110,
            0,
          );
          let paginationq = 3;
          let s_unlockh = 2;
          materialo = [firebaseF.length];
          filedP = `${filedP.length}`;
          firebaseF += '3';
          paginationq ^= paginationq * 1;
          s_unlockh /= Math.max(1, 1 - paginationq);
        }
        let countdown2 = 4.0;
        countdown2 -= materialo.length + pinge.length;
        if (interstitial3.length < 2) {
          let successi = 1.0;
          let searchZ = 3;
          let descs = String.fromCharCode(
            105,
            102,
            97,
            99,
            101,
            95,
            101,
            95,
            49,
            54,
            0,
          );
          let rewardq = String.fromCharCode(
            111,
            95,
            49,
            54,
            95,
            114,
            102,
            116,
            102,
            115,
            117,
            98,
            0,
          );
          interstitial3 += `${interstitial3.length}`;
          successi *= parseFloat(`${parseInt(`${successi}`)}`);
          searchZ /= Math.max(searchZ, 1);
          descs = `${descs.length ^ 3}`;
          rewardq = `${rewardq.length}`;
        }
        interstitial3 += '2';
        let logout3 = 0.0;
        let selectedG = 3.0;
        predictionv.set(
          `${annerQ}`,
          String.fromCharCode(83, 0) == bannerE
            ? bannerE.length
            : annerQ
            ? 3
            : 2,
        );
        break;
      }
      let fastm = 4.0;
      let sound6 = String.fromCharCode(
        102,
        95,
        50,
        56,
        95,
        100,
        115,
        99,
        112,
        0,
      );
      for (let e = 0; e < 2; e++) {
        let sentry6 = String.fromCharCode(
          114,
          101,
          116,
          114,
          121,
          95,
          48,
          95,
          54,
          51,
          0,
        );
        let mimot = 4.0;
        let minivodc = String.fromCharCode(
          99,
          116,
          105,
          118,
          105,
          116,
          121,
          95,
          56,
          95,
          53,
          53,
          0,
        );
        let playlistp: Map<any, any> = new Map([
          [
            String.fromCharCode(
              102,
              97,
              115,
              116,
              102,
              105,
              114,
              115,
              116,
              112,
              97,
              115,
              115,
              95,
              121,
              95,
              52,
              0,
            ),
            592,
          ],
          [
            String.fromCharCode(
              115,
              95,
              50,
              52,
              95,
              112,
              111,
              108,
              108,
              105,
              110,
              103,
              0,
            ),
            880,
          ],
        ]);
        let lightw = String.fromCharCode(
          110,
          95,
          50,
          95,
          108,
          97,
          121,
          101,
          114,
          99,
          111,
          110,
          116,
          101,
          120,
          116,
          0,
        );
        sound6 = `${parseInt(`${fastm}`) % Math.max(sound6.length, 3)}`;
        sentry6 = `${playlistp.size & minivodc.length}`;
        mimot += parseFloat(
          `${parseInt(`${mimot}`) / Math.max(sentry6.length, 7)}`,
        );
        minivodc = `${sentry6.length}`;
        playlistp = new Map([[lightw, minivodc.length]]);
        lightw = `${playlistp.size / Math.max(minivodc.length, 5)}`;
      }
      let clockX = String.fromCharCode(
        121,
        95,
        52,
        54,
        95,
        105,
        116,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        115,
        0,
      );
      sound6 = `${1 + clockX.length}`;
      let flyerc = 5562729 >= sound6.length;
      do {
        let taiwanO = 4.0;
        sound6 += '2';
        taiwanO /= Math.max(parseFloat(`${1}`), 4);
        if (flyerc) {
          break;
        }
      } while (fastm * parseFloat(`${sound6.length}`) >= 4.31 && flyerc);
      let shootl = String.fromCharCode(
        99,
        95,
        51,
        55,
        95,
        120,
        99,
        108,
        105,
        0,
      );
      let pingQ = String.fromCharCode(99, 95, 48, 95, 120, 112, 117, 98, 0);
      for (let c = 0; c < 2; c++) {
        shootl += `${pingQ.length}`;
      }
      let controlh: Map<any, any> = new Map([
        [
          String.fromCharCode(
            117,
            95,
            50,
            51,
            95,
            100,
            101,
            100,
            117,
            112,
            101,
            0,
          ),
          899,
        ],
        [
          String.fromCharCode(
            109,
            97,
            112,
            112,
            101,
            100,
            95,
            112,
            95,
            52,
            56,
            0,
          ),
          683,
        ],
        [
          String.fromCharCode(
            110,
            97,
            110,
            111,
            98,
            101,
            110,
            99,
            104,
            109,
            97,
            114,
            107,
            95,
            102,
            95,
            55,
            50,
            0,
          ),
          463,
        ],
      ]);
      let chatv = false;
      let constantsz = String.fromCharCode(
        99,
        108,
        97,
        117,
        115,
        101,
        115,
        95,
        54,
        95,
        49,
        48,
        0,
      );
      fastm -= parseFloat(`${3 - controlh.size}`);
      controlh.set(`${chatv}`, 2);
      constantsz += `${1 - (chatv ? 4 : 3)}`;
      tick2 = '2';
      if (await InAppBrowser.isAvailable()) {
        let feedback0 = String.fromCharCode(
          112,
          108,
          97,
          121,
          98,
          97,
          99,
          107,
          95,
          117,
          95,
          50,
          54,
          0,
        );
        let tailf = String.fromCharCode(
          118,
          95,
          51,
          95,
          97,
          116,
          114,
          97,
          99,
          116,
          97,
          98,
          0,
        );
        let queste = 0.0;
        while (tailf.length + parseInt(`${queste}`) >= 1) {
          tailf = `${parseInt(`${queste}`)}`;
          break;
        }
        queste /= Math.max(3, parseInt(`${queste}`));
        while (3 >= tailf.length || feedback0 != String.fromCharCode(80, 0)) {
          let storeu = String.fromCharCode(
            114,
            95,
            49,
            95,
            110,
            114,
            101,
            102,
            0,
          );
          let whistlef = 4.0;
          let customS = String.fromCharCode(
            115,
            95,
            49,
            51,
            95,
            97,
            117,
            120,
            0,
          );
          feedback0 = '1';
          storeu = `${parseInt(`${whistlef}`) / 1}`;
          whistlef /= Math.max(5, 2);
          customS += `${
            customS == String.fromCharCode(101, 0)
              ? customS.length
              : storeu.length
          }`;
          break;
        }
        let apps1 = String.fromCharCode(
          114,
          95,
          56,
          56,
          95,
          118,
          97,
          114,
          105,
          97,
          110,
          99,
          101,
          115,
          0,
        );
        let updatesD: Array<any> = [955, 78, 340];
        tailf = '2';
        apps1 += `${updatesD.length | 3}`;
        updatesD = [2];
        if ((tailf.length & 2) > 3 && queste + 2.98 > 2.6) {
          tailf += '1';
        }
        if (1 == tailf.length) {
          tailf += `${tailf.length}`;
        }
        let actionB: Array<any> = [141, 707];
        let bootsplashQ = String.fromCharCode(
          104,
          95,
          57,
          53,
          95,
          102,
          114,
          97,
          110,
          100,
          0,
        );
        let matchesZ = 2;
        feedback0 += `${1 & parseInt(`${queste}`)}`;
        actionB.push(3 | matchesZ);
        bootsplashQ = `${3 >> Math.min(5, bootsplashQ.length)}`;
        matchesZ >>= Math.min(1, Math.abs(matchesZ));
        if (
          queste + 5.18 == 4.68 ||
          4 == feedback0.length + parseInt(`${queste}`)
        ) {
          queste += 3 << Math.min(2, Math.abs(parseInt(`${queste}`)));
        }
        if (feedback0.length > tailf.length) {
          let dplusF = 1;
          tailf = '1';
          dplusF %= Math.max(4, dplusF);
        }
        tick2 += `${3 / Math.max(6, modityf.length)}`;
        icon_ /= Math.max(
          4,
          String.fromCharCode(79, 0) == bannerE ? bannerE.length : modelN.size,
        );
        let gesturess =
          String.fromCharCode(119, 100, 106, 107, 111, 54, 0) == tick2;
        do {
          tick2 += '1';
          if (gesturess) {
            break;
          }
        } while (
          (2 - tick2.length > 5 || 2 - predictionv.size > 3) &&
          gesturess
        );
        await InAppBrowser.open(url);
      } else {
        viewsB /= Math.max(3, bannerE.length);
        let fully = false;
        let with_i1: Map<any, any> = new Map([
          [
            String.fromCharCode(
              114,
              101,
              102,
              101,
              114,
              95,
              114,
              95,
              50,
              48,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(
              118,
              95,
              49,
              49,
              95,
              97,
              118,
              97,
              105,
              108,
              97,
              98,
              105,
              108,
              105,
              116,
              121,
              0,
            ),
            true,
          ],
          [
            String.fromCharCode(
              105,
              112,
              104,
              111,
              110,
              101,
              95,
              100,
              95,
              56,
              51,
              0,
            ),
            false,
          ],
        ]);
        let bodanq = String.fromCharCode(
          113,
          117,
          101,
          117,
          101,
          95,
          53,
          95,
          49,
          57,
          0,
        );
        fully = bodanq.includes(`${fully}`);
        with_i1.set(`${with_i1.size}`, with_i1.size);
        bodanq = `${with_i1.size ^ 1}`;
        let notification2 = String.fromCharCode(
          108,
          111,
          111,
          112,
          105,
          110,
          103,
          95,
          57,
          95,
          51,
          49,
          0,
        );
        let pausey = String.fromCharCode(
          99,
          112,
          117,
          102,
          108,
          97,
          103,
          115,
          95,
          99,
          95,
          49,
          56,
          0,
        );
        let refresha = 3.0;
        let time_u3 = String.fromCharCode(
          105,
          110,
          118,
          97,
          114,
          105,
          97,
          110,
          116,
          115,
          95,
          119,
          95,
          57,
          49,
          0,
        );
        let short_e55: Array<any> = [99, 770];
        pausey += `${parseInt(`${refresha}`) ^ (fully ? 3 : 3)}`;
        refresha -= short_e55.length;
        time_u3 = '2';
        short_e55 = [
          String.fromCharCode(76, 0) == time_u3
            ? time_u3.length
            : short_e55.length,
        ];
        icon_ /= Math.max(3, 4);
        while (1 % Math.max(3, predictionv.size) > 4) {
          bannerE = `${2 | tick2.length}`;
          break;
        }
        Linking.openURL(url);
      }
    } catch (e) {
      while (!modityf.endsWith(`${predictionv.size}`)) {
        let grayr: Array<any> = [973, 59, 518];
        let gemfileG: Map<any, any> = new Map([
          [
            String.fromCharCode(
              100,
              95,
              54,
              52,
              95,
              114,
              116,
              115,
              112,
              99,
              111,
              100,
              101,
              115,
              0,
            ),
            999,
          ],
          [
            String.fromCharCode(
              115,
              101,
              99,
              111,
              110,
              100,
              112,
              97,
              115,
              115,
              95,
              56,
              95,
              57,
              0,
            ),
            823,
          ],
        ]);
        let gemfileZ = String.fromCharCode(
          97,
          98,
          111,
          117,
          116,
          115,
          95,
          99,
          95,
          50,
          52,
          0,
        );
        let streamingI = 7167577 <= grayr.length;
        do {
          grayr.push(gemfileG.size);
          if (streamingI) {
            break;
          }
        } while (
          (1 < grayr.length >> Math.min(Math.abs(3), 5) ||
            grayr.length >> Math.min(Math.abs(gemfileG.size), 4) < 3) &&
          streamingI
        );
        if (!gemfileZ.includes(`${gemfileG.size}`)) {
          let modelh = 4.0;
          let calendarV = String.fromCharCode(
            102,
            95,
            54,
            56,
            95,
            112,
            97,
            105,
            114,
            119,
            105,
            115,
            101,
            0,
          );
          let catagory8: Map<any, any> = new Map([
            [
              String.fromCharCode(115, 95, 51, 57, 95, 108, 111, 99, 107, 0),
              670,
            ],
            [
              String.fromCharCode(
                118,
                95,
                49,
                48,
                95,
                100,
                105,
                103,
                114,
                97,
                112,
                104,
                0,
              ),
              725,
            ],
          ]);
          let adultz: Map<any, any> = new Map([
            [
              String.fromCharCode(100, 98, 108, 112, 95, 111, 95, 49, 53, 0),
              349,
            ],
            [
              String.fromCharCode(
                122,
                95,
                52,
                95,
                105,
                116,
                101,
                114,
                97,
                116,
                105,
                118,
                101,
                0,
              ),
              770,
            ],
            [
              String.fromCharCode(
                105,
                95,
                56,
                51,
                95,
                97,
                100,
                100,
                101,
                114,
                0,
              ),
              481,
            ],
          ]);
          gemfileG.set(`${calendarV}`, 2);
          modelh += parseInt(`${modelh}`);
          calendarV = '1';
          catagory8 = new Map([[`${adultz.size}`, 1]]);
          adultz = new Map([[`${adultz.size}`, 3]]);
        }
        let ewardede: Array<any> = [296, 372];
        gemfileZ = `${gemfileZ.length ^ gemfileG.size}`;
        ewardede = [ewardede.length];
        while (2 < (gemfileG.size ^ 5)) {
          gemfileG.set(`${grayr.length}`, grayr.length);
          break;
        }
        let eactD = String.fromCharCode(
          100,
          95,
          55,
          55,
          95,
          97,
          119,
          97,
          107,
          101,
          0,
        );
        let singleK = String.fromCharCode(
          111,
          95,
          52,
          50,
          95,
          119,
          111,
          114,
          100,
          0,
        );
        let orientationZ = String.fromCharCode(
          103,
          95,
          51,
          56,
          95,
          116,
          101,
          115,
          116,
          105,
          109,
          103,
          105,
          110,
          116,
          0,
        );
        grayr.push(
          eactD == String.fromCharCode(69, 0) ? eactD.length : gemfileG.size,
        );
        singleK = `${orientationZ.length}`;
        orientationZ = `${
          singleK == String.fromCharCode(52, 0)
            ? orientationZ.length
            : singleK.length
        }`;
        while (gemfileZ.length + grayr.length <= 4) {
          gemfileZ += `${2 | gemfileG.size}`;
          break;
        }
        while (
          4 <= gemfileG.size << Math.min(Math.abs(2), 3) &&
          5 <= 2 << Math.min(3, Math.abs(gemfileG.size))
        ) {
          gemfileG = new Map([
            [`${grayr.length}`, gemfileZ.length % Math.max(1, grayr.length)],
          ]);
          break;
        }
        let updatesM: Map<any, any> = new Map([
          [
            String.fromCharCode(
              99,
              97,
              114,
              101,
              102,
              117,
              108,
              108,
              121,
              95,
              51,
              95,
              57,
              51,
              0,
            ),
            328,
          ],
          [
            String.fromCharCode(
              116,
              95,
              53,
              52,
              95,
              115,
              112,
              114,
              101,
              97,
              100,
              0,
            ),
            182,
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
              115,
              95,
              99,
              95,
              56,
              53,
              0,
            ),
            974,
          ],
        ]);
        gemfileG.set(`${gemfileG.size}`, gemfileG.size / 2);
        updatesM = new Map([[`${updatesM.size}`, 3 & updatesM.size]]);
        for (let g = 0; g < 3; g++) {
          gemfileG = new Map([
            [
              `${gemfileG.size}`,
              gemfileZ == String.fromCharCode(82, 0)
                ? gemfileZ.length
                : gemfileG.size,
            ],
          ]);
        }
        modityf = '1';
        break;
      }
      for (let v = 0; v < 3; v++) {
        viewsB /= Math.max(5, parseInt(`${viewsB}`));
      }
      let configureT = String.fromCharCode(121, 120, 110, 0) == unread6;
      do {
        unread6 = `${predictionv.size / Math.max(6, modelN.size)}`;
        if (configureT) {
          break;
        }
      } while (configureT && modelN.size > unread6.length);
      Linking.openURL(url);
    }
  }, [vod]);

  const fetchComments = () =>
    ttConfirmationChinasame
      .getReviewDetails(vod?.vod_douban_id.toString() ?? '')
      .then(data => {
        return data.douban_reviews;
      });

  const {data: onlineComments, isFetching: isFetchingComments} = useQuery({
    queryKey: ['relatedComments', vod?.vod_id],
    queryFn: () => fetchComments(),
  });

  useEffect(() => {
    const mergeAllComments = async () => {
      let footballg = 4.0;
      let promotion5 = 3.0;
      let recommendationQ = String.fromCharCode(
        116,
        101,
        115,
        116,
        110,
        101,
        116,
        115,
        95,
        57,
        95,
        49,
        50,
        0,
      );
      let left1 = true;
      let l_unlock3 = String.fromCharCode(
        109,
        95,
        51,
        48,
        95,
        105,
        110,
        115,
        101,
        114,
        116,
        105,
        111,
        110,
        0,
      );
      let combinedc = String.fromCharCode(
        99,
        97,
        114,
        101,
        116,
        95,
        119,
        95,
        51,
        0,
      );
      let skipZ = true;
      let pauseJ: Map<any, any> = new Map([
        [
          String.fromCharCode(105, 115, 115, 117, 101, 95, 48, 95, 57, 54, 0),
          true,
        ],
        [
          String.fromCharCode(
            100,
            105,
            114,
            101,
            99,
            116,
            111,
            114,
            105,
            101,
            115,
            95,
            109,
            95,
            56,
            51,
            0,
          ),
          true,
        ],
      ]);
      let w_viewH = 0.0;
      let result6 = 1.0;
      let streaming9 = String.fromCharCode(
        99,
        102,
        101,
        110,
        99,
        115,
        116,
        114,
        95,
        108,
        95,
        49,
        56,
        0,
      );
      let untickP = 3.0;
      let dialogv = 4;
      let flyeru = 1;
      dialogv *= flyeru;
      let manifestT: Array<any> = [578, 737];
      dialogv &= 3;
      manifestT = [manifestT.length];
      flyeru += 1 | dialogv;
      let saveT = String.fromCharCode(
        120,
        95,
        57,
        50,
        95,
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
        0,
      );
      let gestureq = 2.0;
      let minivodM = 0.0;
      for (let h = 0; h < 3; h++) {
        flyeru *= parseInt(`${minivodM}`);
      }
      recommendationQ = `${parseInt(`${promotion5}`)}`;
      recommendationQ = `${
        parseInt(`${w_viewH}`) / Math.max(parseInt(`${footballg}`), 4)
      }`;
      let dialogT = 9450122.0 <= promotion5;
      do {
        let sidei = String.fromCharCode(104, 95, 52, 57, 0);
        let benefitc = true;
        let text6 = 1.0;
        let chatq: Array<any> = [64, 516, 189];
        sidei += `${parseInt(`${text6}`)}`;
        let chinasamep = false;
        text6 -= parseFloat(`${3}`);
        while (!chinasamep && 3 == sidei.length) {
          chinasamep = 8.1 > text6;
          break;
        }
        let roundR: Array<any> = [
          String.fromCharCode(
            102,
            95,
            57,
            95,
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
            115,
            0,
          ),
          String.fromCharCode(
            102,
            114,
            105,
            99,
            116,
            105,
            111,
            110,
            95,
            118,
            95,
            50,
            53,
            0,
          ),
        ];
        let statsR: Map<any, any> = new Map([
          [
            String.fromCharCode(
              103,
              95,
              57,
              57,
              95,
              97,
              108,
              105,
              103,
              110,
              105,
              110,
              103,
              0,
            ),
            721,
          ],
          [
            String.fromCharCode(
              118,
              95,
              52,
              55,
              95,
              109,
              117,
              108,
              116,
              105,
              101,
              110,
              100,
              0,
            ),
            427,
          ],
        ]);
        let ajax1 = false;
        chinasamep = 63.9 <= text6 && !ajax1;
        roundR.push(3);
        statsR.set(`${roundR.length}`, roundR.length);
        ajax1 = statsR.size == 65;
        chatq = [parseInt(`${text6}`) | 1];
        for (let w = 0; w < 2; w++) {
          sidei = `${(benefitc ? 3 : 2) + parseInt(`${text6}`)}`;
        }
        let moduleo = String.fromCharCode(
          112,
          114,
          111,
          99,
          101,
          115,
          115,
          105,
          110,
          103,
          95,
          118,
          95,
          53,
          57,
          0,
        );
        let policyI: Map<any, any> = new Map([
          [String.fromCharCode(112, 97, 116, 104, 95, 56, 95, 56, 0), 143],
          [
            String.fromCharCode(
              121,
              95,
              52,
              57,
              95,
              114,
              101,
              111,
              114,
              100,
              101,
              114,
              0,
            ),
            975,
          ],
          [String.fromCharCode(115, 115, 121, 98, 95, 55, 95, 56, 48, 0), 268],
        ]);
        chinasamep = text6 > 78.0 || 38 > chatq.length;
        policyI = new Map([[`${policyI.size}`, policyI.size & policyI.size]]);
        let downloaderC = String.fromCharCode(
          97,
          100,
          115,
          103,
          97,
          115,
          95,
          114,
          95,
          49,
          52,
          0,
        );
        let singaporeV: Array<any> = [656, 567, 174];
        let dialoge = String.fromCharCode(
          99,
          95,
          53,
          56,
          95,
          106,
          112,
          101,
          103,
          116,
          97,
          98,
          108,
          101,
          115,
          0,
        );
        moduleo += '2';
        downloaderC += `${dialoge.length}`;
        singaporeV.push(1);
        dialoge = `${singaporeV.length >> Math.min(Math.abs(2), 1)}`;
        moduleo += `${chatq.length}`;
        let dangerZ = 8426188 <= sidei.length;
        do {
          sidei += `${
            sidei == String.fromCharCode(77, 0)
              ? benefitc
                ? 1
                : 2
              : sidei.length
          }`;
          if (dangerZ) {
            break;
          }
        } while (sidei.length >= chatq.length && dangerZ);
        promotion5 -= l_unlock3.length | combinedc.length;
        if (dialogT) {
          break;
        }
      } while (
        (recommendationQ.length / Math.max(1, promotion5) >= 1.99 ||
          1.99 / Math.max(10, promotion5) >= 3.81) &&
        dialogT
      );
      while (!combinedc.includes(`${pauseJ.size}`)) {
        combinedc += '1';
        break;
      }

      let mergedArray;

      let fastk: Map<any, any> = new Map([
        [String.fromCharCode(102, 95, 53, 48, 0), 364],
        [
          String.fromCharCode(
            118,
            101,
            114,
            115,
            105,
            111,
            110,
            115,
            95,
            114,
            95,
            57,
            48,
            0,
          ),
          115,
        ],
      ]);
      let disconnectedS = 1.0;
      let homeJ = 1;
      let minivodl = 5;
      fastk.set(`${minivodl}`, 2);
      disconnectedS -= parseFloat(`${homeJ | parseInt(`${disconnectedS}`)}`);
      homeJ += homeJ;
      minivodl %= Math.max(5, 3 | homeJ);
      let helper3 = true;
      let carouselB = true;
      let mapping5 = String.fromCharCode(
        121,
        95,
        50,
        53,
        95,
        97,
        109,
        114,
        110,
        98,
        0,
      );
      fastk.set(`${helper3}`, fastk.size + 3);
      carouselB = mapping5.includes(`${carouselB}`);
      mapping5 += `${(carouselB ? 4 : 2) % 2}`;
      let notification1 = String.fromCharCode(
        115,
        95,
        54,
        55,
        95,
        99,
        99,
        105,
        112,
        0,
      );
      let castingM = 5.0;
      let soundQ = 5.0;
      fastk = new Map([[`${castingM}`, 2]]);
      notification1 = `${notification1.length}`;
      castingM -= parseInt(`${soundQ}`) & 2;
      soundQ -= 2;
      combinedc = `${fastk.size}`;
      let storeb = 0.0;
      let j_position4 = 3.0;
      if (j_position4 * 1 >= 5.96) {
        storeb *= parseInt(`${storeb}`) | parseInt(`${j_position4}`);
      }
      for (let z = 0; z < 1; z++) {
        j_position4 -= parseInt(`${storeb}`);
      }
      let feedback0 = 1.0;
      let analytic_ = String.fromCharCode(
        101,
        95,
        57,
        49,
        95,
        114,
        101,
        109,
        101,
        109,
        98,
        101,
        114,
        101,
        100,
        0,
      );
      storeb *= analytic_.length;
      feedback0 += 2;
      analytic_ = `${parseInt(`${feedback0}`)}`;
      storeb *= parseInt(`${j_position4}`);
      j_position4 *= 1 + parseInt(`${j_position4}`);
      let build4 = String.fromCharCode(
        112,
        97,
        105,
        114,
        95,
        106,
        95,
        53,
        57,
        0,
      );
      let handlers = String.fromCharCode(
        117,
        110,
        108,
        111,
        99,
        107,
        101,
        100,
        95,
        106,
        95,
        51,
        0,
      );
      let watchs: Array<any> = [620, 347, 59];
      storeb /= Math.max(
        2,
        parseInt(`${j_position4}`) <<
          Math.min(Math.abs(parseInt(`${storeb}`)), 2),
      );
      build4 = '3';
      handlers = `${handlers.length << Math.min(Math.abs(1), 3)}`;
      watchs.push(build4.length);
      left1 = 95.21 < storeb || w_viewH < 95.21;
      if (3.57 - w_viewH == 3.2) {
        w_viewH -= parseInt(`${footballg}`) ^ parseInt(`${w_viewH}`);
      }
      promotion5 /= Math.max(l_unlock3.length, 4);
      const locComments = await getLocalComments();

      let connectiono = left1 ? !left1 : left1;
      do {
        let emptyR = String.fromCharCode(119, 95, 49, 53, 95, 109, 117, 108, 0);
        for (let x = 0; x < 2; x++) {
          emptyR = '2';
        }
        let suggestionN = 5;
        let androidF = emptyR.length <= 6910642;
        do {
          emptyR += `${
            String.fromCharCode(53, 0) == emptyR ? suggestionN : emptyR.length
          }`;
          if (androidF) {
            break;
          }
        } while (suggestionN - 3 <= 5 && suggestionN - 3 <= 5 && androidF);
        left1 = recommendationQ.length >= combinedc.length;
        if (connectiono) {
          break;
        }
      } while (connectiono && left1);
      let w_positionN = false;
      let serviceE = 3;
      w_positionN = !w_positionN;
      serviceE ^= serviceE << Math.min(3, Math.abs(3));
      for (let b = 0; b < 3; b++) {
        serviceE %= Math.max(
          3,
          (w_positionN ? 4 : 2) << Math.min(Math.abs(serviceE), 1),
        );
      }
      serviceE ^= serviceE | (w_positionN ? 2 : 2);
      serviceE %= Math.max(serviceE & 1, 4);
      let catalogg: Array<any> = [40, 822];
      serviceE -= catalogg.length;
      combinedc += `${2 - parseInt(`${w_viewH}`)}`;
      combinedc = `${parseInt(`${promotion5}`) ^ parseInt(`${footballg}`)}`;
      for (let m = 0; m < 3; m++) {
        let commentG = String.fromCharCode(
          114,
          95,
          50,
          95,
          101,
          120,
          116,
          114,
          97,
          100,
          97,
          116,
          97,
          99,
          111,
          110,
          102,
          105,
          103,
          0,
        );
        let mbnativex = 0.0;
        let connection0 = String.fromCharCode(
          111,
          95,
          56,
          56,
          95,
          114,
          112,
          99,
          115,
          0,
        );
        let selectr = 5;
        let componentn = String.fromCharCode(
          103,
          95,
          54,
          51,
          95,
          98,
          101,
          103,
          105,
          110,
          110,
          105,
          110,
          103,
          0,
        );
        mbnativex /= Math.max(2, 2 & componentn.length);
        for (let x = 0; x < 2; x++) {
          let umengQ = true;
          mbnativex -= selectr + (umengQ ? 3 : 5);
        }
        commentG = `${connection0.length & 2}`;
        for (let b = 0; b < 3; b++) {
          selectr <<= Math.min(4, Math.abs(parseInt(`${mbnativex}`)));
        }
        connection0 += '3';
        while (selectr <= connection0.length) {
          connection0 += `${selectr << Math.min(Math.abs(2), 4)}`;
          break;
        }
        let windW = true;
        let containerS = String.fromCharCode(
          101,
          115,
          112,
          111,
          110,
          100,
          101,
          114,
          95,
          49,
          95,
          53,
          55,
          0,
        );
        mbnativex /= Math.max(3, selectr << Math.min(5, Math.abs(2)));
        windW = containerS.length == 6;
        containerS += `${containerS.length}`;
        mbnativex -= selectr;
        connection0 += '2';
        let pagination_ = 4;
        let styleO = 5;
        let clockj = 0;
        for (let k = 0; k < 2; k++) {
          clockj += styleO;
        }
        promotion5 -= 3;
      }

      if (onlineComments) {
        while (4.12 >= result6 - parseFloat(`${combinedc.length}`)) {
          combinedc += `${1 * recommendationQ.length}`;
          break;
        }
        let sheetq: Array<any> = [683, 503];
        let dycreatorp = String.fromCharCode(
          104,
          95,
          57,
          50,
          95,
          116,
          101,
          109,
          112,
          108,
          97,
          116,
          101,
          100,
          0,
        );
        let bufferw = String.fromCharCode(
          122,
          95,
          54,
          49,
          95,
          97,
          98,
          111,
          118,
          101,
          0,
        );
        dycreatorp += `${dycreatorp.length ^ 3}`;
        let scoret = String.fromCharCode(
          121,
          95,
          57,
          55,
          95,
          97,
          99,
          116,
          111,
          114,
          0,
        );
        while (dycreatorp == scoret) {
          scoret += `${sheetq.length % Math.max(2, 8)}`;
          break;
        }
        let singapores = String.fromCharCode(
          109,
          117,
          116,
          101,
          95,
          106,
          95,
          53,
          51,
          0,
        );
        let historyh = 5429153 <= singapores.length;
        do {
          singapores = `${1 | singapores.length}`;
          if (historyh) {
            break;
          }
        } while (historyh && (1 <= singapores.length || scoret.length <= 1));
        singapores += `${scoret.length % 3}`;
        let termsQ = 6384694 >= scoret.length;
        do {
          scoret = `${sheetq.length}`;
          if (termsQ) {
            break;
          }
        } while (singapores.length > scoret.length && termsQ);
        let selectedH = scoret.length <= 5186590;
        do {
          let sportf = String.fromCharCode(
            100,
            101,
            98,
            117,
            103,
            95,
            113,
            95,
            53,
            54,
            0,
          );
          let team5: Array<any> = [693, 522, 668];
          let assistH: Array<any> = [719, 706, 113];
          scoret += '3';
          sportf += `${assistH.length ^ 1}`;
          team5.push(team5.length / 2);
          assistH = [team5.length];
          if (selectedH) {
            break;
          }
        } while (selectedH && 5 <= bufferw.length);
        singapores += '1';
        recommendationQ = `${2 ^ parseInt(`${w_viewH}`)}`;
        l_unlock3 = `${skipZ ? 3 : 4}`;
        recommendationQ = `${combinedc.length * parseInt(`${footballg}`)}`;
        mergedArray = locComments.concat(onlineComments);
      } else {
        let submitn = 2.0;
        let read9 = 5.0;
        let stylem = String.fromCharCode(
          115,
          99,
          97,
          110,
          116,
          97,
          98,
          108,
          101,
          95,
          111,
          95,
          50,
          52,
          0,
        );
        read9 *=
          parseInt(`${submitn}`) << Math.min(1, Math.abs(parseInt(`${read9}`)));
        let coreC: Map<any, any> = new Map([
          [
            String.fromCharCode(114, 95, 50, 51, 95, 103, 98, 114, 112, 0),
            false,
          ],
          [
            String.fromCharCode(
              101,
              95,
              49,
              52,
              95,
              108,
              111,
              110,
              103,
              101,
              115,
              116,
              0,
            ),
            true,
          ],
        ]);
        while (4 <= (stylem.length | 4) || 1 <= (stylem.length | 4)) {
          let downloadg = 5;
          let selectedW = 4.0;
          let routerY = true;
          let textW = 5.0;
          stylem += `${parseInt(`${selectedW}`) * (routerY ? 2 : 3)}`;
          downloadg |= 3 ^ parseInt(`${textW}`);
          selectedW -= 2;
          routerY = downloadg >= parseInt(`${textW}`);
          break;
        }
        if (coreC.size >= 4) {
          stylem = `${stylem.length}`;
        }
        for (let l = 0; l < 1; l++) {
          let relatedH: Map<any, any> = new Map([
            [String.fromCharCode(98, 95, 54, 53, 95, 97, 117, 114, 97, 0), 830],
            [
              String.fromCharCode(
                108,
                111,
                97,
                100,
                105,
                110,
                103,
                95,
                57,
                95,
                52,
                53,
                0,
              ),
              750,
            ],
          ]);
          stylem += `${relatedH.size}`;
        }
        for (let m = 0; m < 1; m++) {
          coreC.set(`${submitn}`, 1);
        }
        if (submitn + read9 == 5.81) {
          let actionsF = String.fromCharCode(
            99,
            97,
            112,
            116,
            117,
            114,
            101,
            116,
            101,
            115,
            116,
            118,
            105,
            100,
            101,
            111,
            95,
            101,
            95,
            57,
            53,
            0,
          );
          let tooltipsY = String.fromCharCode(
            97,
            116,
            104,
            95,
            110,
            95,
            50,
            50,
            0,
          );
          let progressX = 0.0;
          let footballD = 1.0;
          let phoneM: Array<any> = [
            String.fromCharCode(
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              95,
              115,
              95,
              49,
              51,
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
              111,
              114,
              95,
              105,
              95,
              56,
              0,
            ),
            String.fromCharCode(115, 101, 113, 95, 106, 95, 53, 53, 0),
          ];
          read9 += parseInt(`${footballD}`) << Math.min(4, Math.abs(1));
          actionsF = `${1 | parseInt(`${progressX}`)}`;
          tooltipsY = `${phoneM.length}`;
          progressX += parseFloat(
            `${actionsF.length >> Math.min(Math.abs(2), 4)}`,
          );
          footballD -= 1;
          phoneM = [phoneM.length ^ tooltipsY.length];
        }
        if (!Array.from(coreC.values()).includes(read9)) {
          read9 *= coreC.size;
        }
        stylem += `${
          stylem.length >> Math.min(4, Math.abs(parseInt(`${submitn}`)))
        }`;
        promotion5 -= l_unlock3.length / 2;
        let volumeT = 9445811 >= l_unlock3.length;
        do {
          l_unlock3 = `${
            (skipZ ? 1 : 5) / Math.max(10, parseInt(`${promotion5}`))
          }`;
          if (volumeT) {
            break;
          }
        } while (1 < l_unlock3.length && !left1 && volumeT);
        let bodanB = skipZ ? !skipZ : skipZ;
        do {
          skipZ = 39.79 == result6 / Math.max(3, w_viewH);
          if (bodanB) {
            break;
          }
        } while ((5.2 == w_viewH || 5.2 * w_viewH == 3.33) && bodanB);
        footballg -= pauseJ.size;
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      let stationc = String.fromCharCode(
        119,
        95,
        48,
        95,
        111,
        117,
        116,
        99,
        111,
        109,
        101,
        0,
      );
      let description_n6C = 0;
      for (let z = 0; z < 2; z++) {
        let skipe = 3;
        let datac = String.fromCharCode(
          114,
          95,
          49,
          48,
          95,
          115,
          116,
          105,
          99,
          107,
          121,
          0,
        );
        let gnewsY = String.fromCharCode(
          117,
          95,
          56,
          54,
          95,
          102,
          97,
          108,
          115,
          101,
          0,
        );
        let greyH = 1;
        let subsr = 5;
        description_n6C -= 3 | greyH;
        skipe %= Math.max(5, gnewsY.length);
        datac += `${1 - subsr}`;
        gnewsY += '1';
        greyH *= 1 * gnewsY.length;
        subsr >>= Math.min(1, Math.abs(3 << Math.min(2, Math.abs(skipe))));
      }
      if ((description_n6C & 2) < 2) {
        description_n6C /= Math.max(2, description_n6C ^ 1);
      }
      if (description_n6C + stationc.length > 1) {
        stationc = `${description_n6C}`;
      }
      for (let k = 0; k < 1; k++) {
        description_n6C *= stationc.length;
      }
      let megaphone9 = 5;
      let activity1 = 0;
      for (let o = 0; o < 1; o++) {
        megaphone9 ^= activity1;
      }
      skipZ = left1 || 95.2 > footballg;
      w_viewH /= Math.max(3, parseInt(`${footballg}`) & 2);
      if (3.11 == w_viewH) {
        left1 = !left1;
      }
      if (combinedc.length - 1 == 2 || 1.63 == 2.41 - promotion5) {
        promotion5 /= Math.max(5, l_unlock3.length);
      }
      setShowLoading(isFetchingComments);

      if (!left1) {
        left1 = parseInt(`${footballg}`) > pauseJ.size;
      }
      for (let r = 0; r < 1; r++) {
        l_unlock3 += `${(left1 ? 2 : 2) << Math.min(1, Math.abs(3))}`;
      }
      skipZ = promotion5 <= 98.78;
      left1 = String.fromCharCode(113, 0) == combinedc;
      console.log('done');
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = 'userComment' + vod?.vod_id;
  const getLocalComments = async () => {
    let analytich = String.fromCharCode(
      103,
      95,
      55,
      56,
      95,
      98,
      97,
      115,
      101,
      117,
      114,
      108,
      0,
    );
    let verticalK = String.fromCharCode(
      112,
      101,
      105,
      114,
      115,
      95,
      102,
      95,
      55,
      57,
      0,
    );
    let promotionE = 4.0;
    let privilegeG = String.fromCharCode(
      97,
      95,
      50,
      52,
      95,
      102,
      105,
      108,
      101,
      114,
      101,
      97,
      100,
      115,
      116,
      114,
      101,
      97,
      109,
      0,
    );
    let list1 = 0;
    let tumbnailI = 5.0;
    let userb = 1.0;
    let handlerp = String.fromCharCode(
      109,
      95,
      53,
      51,
      95,
      115,
      119,
      105,
      116,
      99,
      104,
      97,
      98,
      108,
      101,
      0,
    );
    let leaguey = String.fromCharCode(
      122,
      95,
      55,
      57,
      95,
      114,
      101,
      109,
      111,
      118,
      97,
      108,
      115,
      0,
    );
    let subsE = true;
    let pressureQ = 5;
    let fastforwardp: Map<any, any> = new Map([
      [String.fromCharCode(101, 95, 55, 57, 95, 114, 97, 110, 0), 617],
      [
        String.fromCharCode(
          115,
          116,
          101,
          110,
          99,
          105,
          108,
          95,
          116,
          95,
          55,
          53,
          0,
        ),
        156,
      ],
    ]);
    verticalK = `${handlerp.length}`;
    for (let s = 0; s < 2; s++) {
      handlerp += `${parseInt(`${tumbnailI}`) * 1}`;
    }
    let zhengpianV = String.fromCharCode(
      115,
      117,
      110,
      115,
      101,
      116,
      95,
      111,
      95,
      50,
      56,
      0,
    );
    let mbridgeq = 1;
    let untickZ = true;
    if (untickZ || mbridgeq / Math.max(2, 6) == 5) {
      let emojiR: Array<any> = [407, 368];
      untickZ = (zhengpianV.length ^ emojiR.length) <= 53;
    }
    for (let v = 0; v < 1; v++) {
      mbridgeq -= mbridgeq;
    }
    while (zhengpianV.length < 1) {
      untickZ = mbridgeq < zhengpianV.length;
      break;
    }
    let toponn = 3.0;
    zhengpianV = `${mbridgeq + 2}`;
    toponn -= 1;
    zhengpianV += `${zhengpianV.length}`;
    let placeholderT = String.fromCharCode(
      116,
      114,
      110,
      115,
      95,
      56,
      95,
      53,
      0,
    );
    let sharedj = 5;
    zhengpianV += `${sharedj - 1}`;
    placeholderT += `${3 & placeholderT.length}`;
    sharedj &= placeholderT.length;
    while (!untickZ && zhengpianV.length > 1) {
      untickZ = !untickZ;
      break;
    }
    let gemfilet = mbridgeq >= 7142616;
    do {
      mbridgeq *= (untickZ ? 5 : 5) + mbridgeq;
      if (gemfilet) {
        break;
      }
    } while (4 > mbridgeq && gemfilet);
    untickZ = mbridgeq < zhengpianV.length;
    tumbnailI += parseInt(`${tumbnailI}`) + analytich.length;
    while (handlerp.includes(`${leaguey.length}`)) {
      let trophy5 = String.fromCharCode(
        99,
        104,
        97,
        112,
        116,
        101,
        114,
        115,
        95,
        51,
        95,
        56,
        51,
        0,
      );
      let closex = String.fromCharCode(
        115,
        95,
        52,
        55,
        95,
        99,
        111,
        111,
        114,
        100,
        105,
        110,
        97,
        116,
        101,
        0,
      );
      closex += `${trophy5.length * 3}`;
      while (closex.startsWith(`${trophy5.length}`)) {
        closex += '2';
        break;
      }
      handlerp += `${
        trophy5 == String.fromCharCode(100, 0)
          ? trophy5.length
          : parseInt(`${promotionE}`)
      }`;
      break;
    }

    try {
      for (let g = 0; g < 2; g++) {
        tumbnailI *= list1;
      }
      tumbnailI += verticalK.length;
      if (!privilegeG.includes(`${promotionE}`)) {
        let greenN = String.fromCharCode(
          115,
          117,
          112,
          112,
          111,
          114,
          116,
          105,
          110,
          103,
          95,
          106,
          95,
          50,
          54,
          0,
        );
        let contextE = String.fromCharCode(
          98,
          105,
          110,
          116,
          101,
          120,
          116,
          95,
          114,
          95,
          53,
          50,
          0,
        );
        contextE += '1';
        let android7 =
          String.fromCharCode(97, 97, 48, 121, 108, 114, 0) == greenN;
        do {
          greenN += `${greenN.length}`;
          if (android7) {
            break;
          }
        } while (android7 && greenN.length >= 4);
        while (greenN == String.fromCharCode(72, 0)) {
          contextE += `${greenN.length}`;
          break;
        }
        greenN = `${greenN.length / Math.max(9, contextE.length)}`;
        while (3 >= contextE.length) {
          let guideG = 3.0;
          greenN = `${parseInt(`${guideG}`)}`;
          break;
        }
        let listx = 5.0;
        let liveS = 3.0;
        let reportD = 0.0;
        contextE = `${contextE.length | greenN.length}`;
        listx /= Math.max(1, 1 | parseInt(`${reportD}`));
        liveS *= parseFloat(
          `${
            parseInt(`${liveS}`) >>
            Math.min(Math.abs(parseInt(`${reportD}`)), 4)
          }`,
        );
        promotionE /= Math.max(
          greenN == String.fromCharCode(121, 0)
            ? subsE
              ? 1
              : 3
            : greenN.length,
          4,
        );
      }
      promotionE /= Math.max(
        handlerp == String.fromCharCode(115, 0)
          ? parseInt(`${userb}`)
          : handlerp.length,
        2,
      );
      const comments = await AsyncStorage.getItem(locCommentId);

      userb /= Math.max(5, parseFloat(`${parseInt(`${tumbnailI}`) & 1}`));
      userb /= Math.max(
        parseFloat(`${parseInt(`${promotionE}`) - parseInt(`${userb}`)}`),
        3,
      );
      analytich = `${list1 % 1}`;
      while (2.61 * promotionE == 2.37 || !subsE) {
        promotionE /= Math.max(
          1 >> Math.min(Math.abs(parseInt(`${tumbnailI}`)), 2),
          4,
        );
        break;
      }
      console.log('comments stored in local storage ', locCommentId);

      for (let t = 0; t < 1; t++) {
        list1 -= (subsE ? 5 : 1) % Math.max(1, 9);
      }
      promotionE /= Math.max(1, analytich.length);
      list1 *= 2 & leaguey.length;
      if (5 <= privilegeG.length / Math.max(2, parseInt(`${userb}`))) {
        userb += parseFloat(`${analytich.length | 3}`);
      }
      console.log(comments);

      privilegeG += `${parseInt(`${userb}`)}`;
      verticalK = `${analytich.length / Math.max(handlerp.length, 9)}`;
      if (analytich.length * list1 <= 2 || list1 * analytich.length <= 2) {
        analytich = `${1 - verticalK.length}`;
      }
      let formd = subsE ? !subsE : subsE;
      do {
        subsE = leaguey.includes(`${tumbnailI}`);
        if (formd) {
          break;
        }
      } while (formd && !handlerp.endsWith(`${subsE}`));

      if (comments !== null) {
        for (let e = 0; e < 3; e++) {
          leaguey += `${
            String.fromCharCode(56, 0) == analytich
              ? analytich.length
              : parseInt(`${tumbnailI}`)
          }`;
        }
        for (let n = 0; n < 2; n++) {
          list1 >>= Math.min(Math.abs(2 & leaguey.length), 4);
        }
        userb *= parseFloat(`${2 ^ verticalK.length}`);
        let chinag = String.fromCharCode(
          98,
          101,
          108,
          111,
          110,
          103,
          115,
          95,
          102,
          95,
          52,
          56,
          0,
        );
        let collectionO = 1;
        while (4 <= (2 | collectionO) || (2 | chinag.length) <= 4) {
          chinag = '3';
          break;
        }
        collectionO -= 2;
        let redirectr: Array<any> = [552, 978];
        let serviceG: Array<any> = [
          String.fromCharCode(
            101,
            95,
            50,
            95,
            103,
            101,
            116,
            115,
            103,
            110,
            99,
            116,
            120,
            110,
            111,
            0,
          ),
          String.fromCharCode(
            115,
            116,
            114,
            105,
            100,
            101,
            115,
            95,
            108,
            95,
            55,
            55,
            0,
          ),
        ];
        let fieldc = 2;
        let lineS = String.fromCharCode(
          112,
          95,
          57,
          55,
          95,
          109,
          117,
          108,
          116,
          105,
          112,
          108,
          105,
          101,
          114,
          0,
        );
        let diceI = String.fromCharCode(
          111,
          112,
          101,
          114,
          97,
          116,
          105,
          111,
          110,
          95,
          119,
          95,
          48,
          0,
        );
        serviceG = [diceI.length << Math.min(Math.abs(2), 3)];
        fieldc /= Math.max(fieldc >> Math.min(lineS.length, 2), 2);
        lineS += `${1 | lineS.length}`;
        diceI = `${lineS.length}`;
        redirectr = [serviceG.length + 3];
        while (2 <= serviceG.length - 1) {
          chinag = `${serviceG.length ^ redirectr.length}`;
          break;
        }
        privilegeG += `${(subsE ? 1 : 5) | parseInt(`${promotionE}`)}`;
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {
      while (1 <= privilegeG.length) {
        privilegeG += `${
          verticalK == String.fromCharCode(117, 0)
            ? pressureQ
            : verticalK.length
        }`;
        break;
      }
      list1 *= parseInt(`${tumbnailI}`) + 2;
      let bottomU: Array<any> = [71, 291, 351];
      let screen2: Map<any, any> = new Map([
        [
          String.fromCharCode(98, 115, 105, 122, 101, 95, 112, 95, 51, 48, 0),
          String.fromCharCode(
            114,
            95,
            51,
            95,
            115,
            101,
            114,
            105,
            97,
            108,
            105,
            122,
            97,
            98,
            108,
            101,
            0,
          ),
        ],
        [
          String.fromCharCode(
            122,
            95,
            49,
            52,
            95,
            115,
            117,
            98,
            115,
            101,
            113,
            117,
            101,
            110,
            116,
            0,
          ),
          String.fromCharCode(
            114,
            111,
            119,
            115,
            107,
            105,
            112,
            95,
            113,
            95,
            49,
            53,
            0,
          ),
        ],
        [
          String.fromCharCode(
            119,
            95,
            52,
            54,
            95,
            100,
            101,
            116,
            101,
            114,
            109,
            105,
            110,
            97,
            98,
            108,
            101,
            0,
          ),
          String.fromCharCode(
            118,
            95,
            57,
            48,
            95,
            105,
            110,
            115,
            116,
            101,
            97,
            100,
            0,
          ),
        ],
      ]);
      let gemfileo = 6596653 >= bottomU.length;
      do {
        bottomU.push(screen2.size);
        if (gemfileo) {
          break;
        }
      } while (
        (4 < bottomU.length / Math.max(screen2.size, 2) ||
          screen2.size / Math.max(10, bottomU.length) < 4) &&
        gemfileo
      );
      let dangerH = String.fromCharCode(
        115,
        116,
        114,
        108,
        99,
        97,
        116,
        95,
        119,
        95,
        51,
        52,
        0,
      );
      let moduleE = String.fromCharCode(
        106,
        95,
        52,
        53,
        95,
        119,
        101,
        98,
        118,
        105,
        101,
        119,
        0,
      );
      moduleE = `${1 * bottomU.length}`;
      let chinasameH = true;
      let contextb = 1.0;
      let blackO = true;
      bottomU.push(moduleE.length);
      chinasameH = 35.24 <= contextb;
      contextb /= Math.max(
        parseFloat(
          `${parseInt(`${contextb}`) << Math.min(1, Math.abs(blackO ? 3 : 3))}`,
        ),
        5,
      );
      blackO = !chinasameH;
      let entryM: Array<any> = [535, 70, 750];
      dangerH += `${dangerH.length / Math.max(2, 8)}`;
      entryM.push(entryM.length / Math.max(1, entryM.length));
      dangerH = '2';
      verticalK += `${privilegeG.length - 1}`;
      if (list1 > leaguey.length) {
        leaguey += '2';
      }
      console.log('error when retrieving local comments: ', error);

      list1 &= privilegeG.length;
      promotionE -= handlerp.length % Math.max(2, 3);
      for (let h = 0; h < 2; h++) {
        promotionE -= parseInt(`${promotionE}`);
      }
      let crownw = analytich.length <= 9327306;
      do {
        let policyS = String.fromCharCode(
          115,
          119,
          105,
          116,
          99,
          104,
          97,
          98,
          108,
          101,
          95,
          107,
          95,
          54,
          54,
          0,
        );
        let tailB = 2.0;
        let sansH = false;
        let ying7 = String.fromCharCode(
          116,
          101,
          120,
          116,
          115,
          95,
          51,
          95,
          53,
          56,
          0,
        );
        let xvod4: Map<any, any> = new Map([
          [
            String.fromCharCode(
              98,
              95,
              57,
              52,
              95,
              110,
              112,
              112,
              115,
              99,
              97,
              108,
              101,
              0,
            ),
            258,
          ],
          [
            String.fromCharCode(102, 115, 121, 110, 99, 95, 101, 95, 57, 52, 0),
            864,
          ],
          [
            String.fromCharCode(
              113,
              115,
              99,
              97,
              108,
              101,
              98,
              105,
              116,
              115,
              95,
              99,
              95,
              54,
              56,
              0,
            ),
            93,
          ],
        ]);
        let viewsc = 5.0;
        policyS += '2';
        ying7 += '1';
        xvod4 = new Map([
          [`${xvod4.size}`, xvod4.size % Math.max(10, parseInt(`${viewsc}`))],
        ]);
        viewsc *= parseFloat(`${xvod4.size ^ parseInt(`${viewsc}`)}`);
        sansH = tailB < 86.45;
        let countdown4 = policyS == String.fromCharCode(51, 99, 121, 0);
        do {
          policyS += `${parseInt(`${tailB}`) % Math.max(2, sansH ? 5 : 2)}`;
          if (countdown4) {
            break;
          }
        } while (policyS.length < 5 && countdown4);
        tailB += 2;
        let klevinq = 3.0;
        let package_x_T = String.fromCharCode(
          102,
          95,
          52,
          53,
          95,
          121,
          117,
          118,
          121,
          97,
          0,
        );
        sansH = policyS.length == 81;
        klevinq /= Math.max(2 ^ parseInt(`${klevinq}`), 5);
        package_x_T += `${package_x_T.length}`;
        analytich = `${3 & analytich.length}`;
        if (crownw) {
          break;
        }
      } while (
        parseInt(`${userb}`) / Math.max(10, analytich.length) < 5 &&
        crownw
      );
      return [];
    }
  };

  const storeUserComments = async () => {
    let muted8 = 4.0;
    let popup1 = 5.0;
    let manifest7 = String.fromCharCode(
      117,
      112,
      103,
      114,
      97,
      100,
      101,
      115,
      95,
      54,
      95,
      51,
      52,
      0,
    );
    let shrinku = String.fromCharCode(
      101,
      95,
      50,
      50,
      95,
      102,
      117,
      122,
      122,
      105,
      110,
      103,
      0,
    );
    let sliderD = 1;
    let borderless1 = String.fromCharCode(
      109,
      112,
      116,
      111,
      97,
      110,
      110,
      101,
      120,
      98,
      95,
      108,
      95,
      57,
      0,
    );
    let searchq = 1.0;
    let referrerL = true;
    let descG = String.fromCharCode(
      107,
      95,
      50,
      49,
      95,
      102,
      116,
      118,
      102,
      111,
      108,
      100,
      101,
      114,
      99,
      108,
      111,
      115,
      101,
      100,
      0,
    );
    let detailsz = String.fromCharCode(
      113,
      112,
      101,
      108,
      111,
      114,
      95,
      101,
      95,
      51,
      53,
      0,
    );
    let greenU = 5.0;
    let relatedL: Array<any> = [293, 787, 459];
    let subs7 = String.fromCharCode(
      105,
      110,
      116,
      101,
      114,
      112,
      111,
      108,
      97,
      116,
      105,
      111,
      110,
      95,
      97,
      95,
      52,
      54,
      0,
    );
    let filter6 = true;
    let filledI = String.fromCharCode(
      103,
      95,
      49,
      51,
      95,
      115,
      97,
      109,
      112,
      108,
      101,
      115,
      0,
    );
    let editf: Array<any> = [354, 523, 212];
    let u_playerO = referrerL ? !referrerL : referrerL;
    do {
      let j_titlev: Map<any, any> = new Map([
        [
          String.fromCharCode(
            116,
            121,
            112,
            101,
            99,
            111,
            100,
            101,
            95,
            99,
            95,
            50,
            48,
            0,
          ),
          String.fromCharCode(101, 110, 106, 105, 110, 95, 48, 95, 55, 57, 0),
        ],
        [
          String.fromCharCode(
            117,
            110,
            100,
            101,
            114,
            114,
            117,
            110,
            95,
            48,
            95,
            55,
            0,
          ),
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
            105,
            111,
            110,
            95,
            111,
            95,
            51,
            55,
            0,
          ),
        ],
        [
          String.fromCharCode(
            115,
            116,
            114,
            105,
            110,
            103,
            117,
            116,
            105,
            108,
            115,
            95,
            53,
            95,
            52,
            52,
            0,
          ),
          String.fromCharCode(101, 95, 50, 54, 95, 120, 99, 108, 105, 0),
        ],
      ]);
      let disconnectedv = true;
      let giftU = disconnectedv ? !disconnectedv : disconnectedv;
      do {
        let eighteenG = 0;
        let privilege5 = 2;
        let sanso: Map<any, any> = new Map([
          [
            String.fromCharCode(115, 116, 97, 108, 108, 95, 115, 95, 52, 55, 0),
            156,
          ],
          [
            String.fromCharCode(
              98,
              117,
              116,
              116,
              101,
              114,
              95,
              107,
              95,
              53,
              0,
            ),
            814,
          ],
        ]);
        let termsP = String.fromCharCode(
          100,
          112,
          99,
          109,
          95,
          50,
          95,
          57,
          53,
          0,
        );
        disconnectedv = termsP.startsWith(`${privilege5}`);
        eighteenG *= eighteenG % 1;
        privilege5 %= Math.max(2, 5);
        sanso = new Map([[`${sanso.size}`, 3 % Math.max(10, sanso.size)]]);
        termsP = `${eighteenG | 3}`;
        if (giftU) {
          break;
        }
      } while (disconnectedv && giftU);
      j_titlev.set(`${disconnectedv}`, (disconnectedv ? 3 : 5) * 3);
      if (4 < j_titlev.size) {
        let dragL = String.fromCharCode(
          105,
          110,
          116,
          101,
          114,
          110,
          97,
          108,
          95,
          115,
          95,
          56,
          48,
          0,
        );
        let listj = 4;
        let chinaJ = String.fromCharCode(
          99,
          111,
          110,
          110,
          101,
          99,
          116,
          115,
          95,
          98,
          95,
          54,
          52,
          0,
        );
        let assists = String.fromCharCode(
          112,
          95,
          56,
          55,
          95,
          114,
          101,
          118,
          97,
          108,
          105,
          100,
          97,
          116,
          105,
          111,
          110,
          0,
        );
        disconnectedv = dragL.length > 97;
        dragL += `${
          String.fromCharCode(107, 0) == assists
            ? chinaJ.length
            : assists.length
        }`;
        listj &= assists.length;
        chinaJ += `${assists.length}`;
      }
      if (j_titlev.size < 2 || 2 << Math.min(4, Math.abs(j_titlev.size)) < 1) {
        let with_axL: Map<any, any> = new Map([
          [String.fromCharCode(118, 95, 51, 48, 95, 116, 103, 115, 0), 524],
          [
            String.fromCharCode(105, 95, 54, 57, 95, 115, 116, 97, 99, 104, 0),
            738,
          ],
        ]);
        let guidey: Array<any> = [
          String.fromCharCode(
            102,
            114,
            97,
            109,
            101,
            104,
            97,
            115,
            104,
            95,
            99,
            95,
            56,
            0,
          ),
          String.fromCharCode(
            97,
            114,
            103,
            117,
            109,
            101,
            110,
            116,
            115,
            95,
            99,
            95,
            56,
            0,
          ),
          String.fromCharCode(
            106,
            95,
            57,
            51,
            95,
            98,
            105,
            116,
            109,
            97,
            115,
            107,
            0,
          ),
        ];
        j_titlev.set(`${disconnectedv}`, 2);
        with_axL.set(`${guidey.length}`, 1 << Math.min(3, guidey.length));
      }
      let selectX = 5493294 <= j_titlev.size;
      do {
        let collectionG = 1;
        j_titlev = new Map([[`${disconnectedv}`, 1 - collectionG]]);
        if (selectX) {
          break;
        }
      } while ((j_titlev.size > 5 || 5 * j_titlev.size > 2) && selectX);
      if (!disconnectedv) {
        let favoriteg: Map<any, any> = new Map([
          [
            String.fromCharCode(
              115,
              95,
              53,
              54,
              95,
              109,
              117,
              116,
              97,
              98,
              108,
              101,
              0,
            ),
            582,
          ],
          [
            String.fromCharCode(
              122,
              95,
              54,
              55,
              95,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              115,
              0,
            ),
            107,
          ],
        ]);
        disconnectedv = j_titlev.size <= 32 || 32 <= favoriteg.size;
      }
      referrerL = parseFloat(`${sliderD}`) == popup1;
      if (u_playerO) {
        break;
      }
    } while (u_playerO && referrerL);
    let disconnected2 = 6113131 <= shrinku.length;
    do {
      shrinku = `${borderless1.length / Math.max(1, 5)}`;
      if (disconnected2) {
        break;
      }
    } while (disconnected2 && shrinku.length > 3);
    detailsz = `${
      detailsz == String.fromCharCode(100, 0)
        ? detailsz.length
        : parseInt(`${greenU}`)
    }`;

    if (!comment) {
      while (
        5.85 ==
        popup1 / Math.max(9, parseFloat(`${borderless1.length}`))
      ) {
        borderless1 = `${
          detailsz == String.fromCharCode(109, 0)
            ? parseInt(`${muted8}`)
            : detailsz.length
        }`;
        break;
      }
      for (let n = 0; n < 3; n++) {
        let favoriteh: Array<any> = [988, 754, 131];
        let questR = 0;
        let downloaderD = String.fromCharCode(
          101,
          95,
          56,
          51,
          95,
          100,
          105,
          115,
          116,
          114,
          105,
          98,
          117,
          116,
          101,
          0,
        );
        let humidityu = String.fromCharCode(
          100,
          95,
          53,
          52,
          95,
          105,
          110,
          115,
          116,
          97,
          108,
          108,
          97,
          116,
          105,
          111,
          110,
          115,
          0,
        );
        let buildG = 3.0;
        let gemfileo = 0.0;
        let malaysiah = 5.0;
        let searchbari = String.fromCharCode(
          98,
          99,
          100,
          117,
          105,
          110,
          116,
          95,
          119,
          95,
          49,
          54,
          0,
        );
        let emoji8 = favoriteh.length <= 7774289;
        do {
          favoriteh.push(parseInt(`${buildG}`));
          if (emoji8) {
            break;
          }
        } while (emoji8 && !downloaderD.startsWith(`${favoriteh.length}`));
        let middlewarea = 0.0;
        let toponL: Map<any, any> = new Map([
          [
            String.fromCharCode(109, 95, 57, 52, 95, 116, 108, 111, 103, 0),
            String.fromCharCode(
              106,
              95,
              49,
              53,
              95,
              112,
              114,
              105,
              109,
              97,
              114,
              105,
              101,
              115,
              0,
            ),
          ],
          [
            String.fromCharCode(
              99,
              104,
              101,
              99,
              107,
              109,
              97,
              114,
              107,
              115,
              95,
              98,
              95,
              54,
              53,
              0,
            ),
            String.fromCharCode(
              114,
              101,
              116,
              114,
              105,
              101,
              114,
              95,
              120,
              95,
              54,
              55,
              0,
            ),
          ],
        ]);
        let anythinkn = 1;
        favoriteh = [parseInt(`${buildG}`) & 1];
        middlewarea -= anythinkn << Math.min(3, Math.abs(3));
        toponL = new Map([
          [`${toponL.size}`, toponL.size | parseInt(`${middlewarea}`)],
        ]);
        anythinkn ^= 1;
        let minir = 4;
        let watchA = 2;
        humidityu = '1';
        minir -= minir | 2;
        watchA -= 3 ^ minir;
        if (downloaderD.length - malaysiah > 3.56) {
          malaysiah -= questR >> Math.min(Math.abs(parseInt(`${gemfileo}`)), 5);
        }
        buildG *= parseFloat(
          `${favoriteh.length << Math.min(downloaderD.length, 1)}`,
        );
        if (buildG / 3.62 < 5.33 || (1 | humidityu.length) < 4) {
          buildG += parseFloat(`${humidityu.length}`);
        }
        questR >>= Math.min(Math.abs(parseInt(`${gemfileo}`) & 3), 2);
        let agreementa = 0;
        let buildGV: Array<any> = [
          String.fromCharCode(
            120,
            95,
            56,
            57,
            95,
            117,
            110,
            101,
            100,
            105,
            116,
            97,
            98,
            108,
            101,
            0,
          ),
          String.fromCharCode(
            115,
            105,
            108,
            101,
            110,
            116,
            95,
            111,
            95,
            53,
            49,
            0,
          ),
          String.fromCharCode(
            97,
            95,
            50,
            57,
            95,
            98,
            105,
            97,
            115,
            101,
            100,
            0,
          ),
        ];
        let upgrade_ = String.fromCharCode(
          99,
          95,
          50,
          57,
          95,
          98,
          105,
          110,
          107,
          100,
          97,
          116,
          97,
          0,
        );
        searchbari += `${
          downloaderD == String.fromCharCode(69, 0)
            ? downloaderD.length
            : parseInt(`${buildG}`)
        }`;
        agreementa /= Math.max(2, 1);
        buildGV = [buildGV.length];
        upgrade_ += '1';
        downloaderD = `${3 + favoriteh.length}`;
        humidityu += `${downloaderD.length - parseInt(`${gemfileo}`)}`;
        humidityu += `${humidityu.length * downloaderD.length}`;
        for (let b = 0; b < 3; b++) {
          let backz: Array<any> = [628, 46, 474];
          let register_zX: Array<any> = [29, 801];
          let specP = String.fromCharCode(
            106,
            95,
            52,
            53,
            95,
            103,
            111,
            111,
            100,
            0,
          );
          let rewardl = 3;
          let buffern = String.fromCharCode(
            115,
            95,
            54,
            54,
            95,
            115,
            117,
            98,
            112,
            111,
            105,
            110,
            116,
            101,
            114,
            0,
          );
          downloaderD += `${parseInt(`${malaysiah}`) / 1}`;
          backz = [backz.length];
          register_zX.push(1);
          specP += `${rewardl * register_zX.length}`;
          rewardl |= rewardl * 3;
          buffern += `${buffern.length | specP.length}`;
        }
        let frame_as = true;
        let right3 = String.fromCharCode(
          99,
          111,
          110,
          116,
          114,
          97,
          99,
          116,
          115,
          95,
          121,
          95,
          52,
          50,
          0,
        );
        favoriteh.push(parseInt(`${buildG}`) % Math.max(downloaderD.length, 9));
        frame_as = !right3.includes(`${frame_as}`);
        right3 += `${
          right3 == String.fromCharCode(76, 0)
            ? frame_as
              ? 4
              : 3
            : right3.length
        }`;
        popup1 *= parseFloat(`${2}`);
      }
      descG = `${parseInt(`${muted8}`)}`;
      return;
    }

    console.log('user comment', comment);

    if (parseInt(`${searchq}`) == detailsz.length) {
      searchq /= Math.max(3, 3 << Math.min(5, Math.abs(parseInt(`${popup1}`))));
    }
    let xvodk = String.fromCharCode(
      121,
      95,
      51,
      50,
      95,
      115,
      117,
      98,
      112,
      114,
      111,
      99,
      101,
      115,
      115,
      0,
    );
    let minivod8 = String.fromCharCode(
      113,
      117,
      97,
      110,
      116,
      105,
      108,
      101,
      95,
      54,
      95,
      51,
      48,
      0,
    );
    let downloadc = String.fromCharCode(
      116,
      117,
      110,
      105,
      110,
      103,
      95,
      48,
      95,
      56,
      56,
      0,
    );
    let dropdownV = downloadc.length <= 5509478;
    do {
      downloadc = `${
        xvodk == String.fromCharCode(120, 0) ? xvodk.length : downloadc.length
      }`;
      if (dropdownV) {
        break;
      }
    } while (dropdownV && minivod8.includes(downloadc));
    for (let l = 0; l < 1; l++) {
      minivod8 += `${downloadc.length << Math.min(Math.abs(2), 1)}`;
    }
    let countdownn = String.fromCharCode(
      97,
      116,
      114,
      97,
      99,
      116,
      97,
      98,
      95,
      109,
      95,
      48,
      0,
    );
    downloadc += `${1 & minivod8.length}`;
    countdownn += `${countdownn.length + countdownn.length}`;
    let downloadingJ = true;
    xvodk = `${
      String.fromCharCode(112, 0) == downloadc
        ? minivod8.length
        : downloadc.length
    }`;
    downloadingJ = downloadingJ ? !downloadingJ : downloadingJ;
    let gpayu = String.fromCharCode(
      112,
      114,
      111,
      118,
      105,
      115,
      105,
      111,
      110,
      95,
      54,
      95,
      56,
      50,
      0,
    );
    let l_managert: Map<any, any> = new Map([
      [
        String.fromCharCode(
          99,
          111,
          110,
          116,
          101,
          120,
          116,
          99,
          111,
          110,
          102,
          105,
          103,
          95,
          116,
          95,
          56,
          52,
          0,
        ),
        375,
      ],
      [String.fromCharCode(100, 99, 98, 122, 108, 95, 116, 95, 57, 0), 852],
    ]);
    let default_ei5: Map<any, any> = new Map([
      [
        String.fromCharCode(
          98,
          111,
          120,
          112,
          108,
          111,
          116,
          95,
          117,
          95,
          57,
          48,
          0,
        ),
        String.fromCharCode(
          111,
          112,
          112,
          111,
          115,
          105,
          116,
          101,
          95,
          101,
          95,
          55,
          56,
          0,
        ),
      ],
      [
        String.fromCharCode(
          109,
          97,
          114,
          107,
          105,
          110,
          103,
          95,
          54,
          95,
          49,
          53,
          0,
        ),
        String.fromCharCode(117, 95, 55, 54, 0),
      ],
    ]);
    minivod8 += `${gpayu.length >> Math.min(Math.abs(1), 1)}`;
    gpayu += `${l_managert.size}`;
    l_managert = new Map([[`${l_managert.size}`, default_ei5.size]]);
    default_ei5.set(`${default_ei5.size}`, default_ei5.size);
    if (minivod8.length >= 5) {
      downloadc += `${1 % Math.max(7, minivod8.length)}`;
    }
    minivod8 = `${xvodk.length}`;
    let stringsz = 5.0;
    let darkf = 5.0;
    darkf *= minivod8.length;
    subs7 += `${parseInt(`${muted8}`) * 3}`;
    while (descG.length >= borderless1.length) {
      let awayG = String.fromCharCode(
        114,
        101,
        100,
        105,
        114,
        101,
        99,
        116,
        95,
        114,
        95,
        53,
        55,
        0,
      );
      let watchM = 0;
      if (awayG.startsWith(`${watchM}`)) {
        watchM <<= Math.min(1, Math.abs(2));
      }
      let greenq =
        awayG == String.fromCharCode(109, 101, 100, 106, 52, 52, 119, 0);
      do {
        let bodanH = false;
        awayG += '3';
        bodanH = !bodanH || bodanH;
        if (greenq) {
          break;
        }
      } while (greenq && (5 >= watchM + awayG.length || watchM + 5 >= 5));
      while (2 < 4 + watchM) {
        watchM -= String.fromCharCode(97, 0) == awayG ? watchM : awayG.length;
        break;
      }
      if (2 >= (awayG.length | watchM) || 2 >= (watchM | awayG.length)) {
        watchM *= watchM / Math.max(awayG.length, 1);
      }
      watchM %= Math.max(watchM & awayG.length, 5);
      watchM |= awayG.length;
      descG += `${referrerL ? 5 : 2}`;
      break;
    }
    try {
      let targetg = 7210477.0 >= popup1;
      do {
        popup1 /= Math.max(3, parseFloat(`${shrinku.length}`));
        if (targetg) {
          break;
        }
      } while (targetg && !relatedL.includes(popup1));
      sliderD -= 1;
      if (parseInt(`${popup1}`) + 5 >= 4 && borderless1.length % 5 >= 4) {
        let placeholderQ = String.fromCharCode(
          115,
          95,
          57,
          55,
          95,
          97,
          110,
          97,
          108,
          111,
          103,
          0,
        );
        let lightG = String.fromCharCode(
          115,
          107,
          101,
          119,
          95,
          99,
          95,
          54,
          54,
          0,
        );
        while (5 < placeholderQ.length) {
          let bannerR = String.fromCharCode(
            112,
            97,
            114,
            115,
            101,
            117,
            116,
            105,
            108,
            115,
            95,
            116,
            95,
            56,
            52,
            0,
          );
          let googley = String.fromCharCode(
            118,
            95,
            52,
            49,
            95,
            112,
            114,
            111,
            103,
            114,
            101,
            115,
            115,
            0,
          );
          let terms_: Map<any, any> = new Map([
            [
              String.fromCharCode(
                114,
                95,
                54,
                50,
                95,
                105,
                110,
                100,
                105,
                110,
                103,
                0,
              ),
              String.fromCharCode(
                108,
                105,
                98,
                120,
                109,
                108,
                95,
                57,
                95,
                57,
                48,
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
                102,
                95,
                52,
                95,
                50,
                49,
                0,
              ),
              String.fromCharCode(
                109,
                101,
                97,
                115,
                117,
                114,
                101,
                109,
                101,
                110,
                116,
                95,
                55,
                95,
                57,
                56,
                0,
              ),
            ],
          ]);
          lightG += `${bannerR.length}`;
          bannerR = `${terms_.size}`;
          googley = `${terms_.size * googley.length}`;
          break;
        }
        let traminiD = String.fromCharCode(
          99,
          111,
          112,
          121,
          99,
          111,
          111,
          107,
          101,
          114,
          95,
          99,
          95,
          54,
          50,
          0,
        );
        let liveJ = true;
        placeholderQ += `${placeholderQ.length * (liveJ ? 3 : 2)}`;
        traminiD += `${traminiD.length}`;
        liveJ = traminiD == String.fromCharCode(114, 0);
        let button_ = String.fromCharCode(
          109,
          95,
          52,
          53,
          95,
          112,
          105,
          99,
          107,
          0,
        );
        lightG = `${lightG.length}`;
        button_ += `${button_.length}`;
        placeholderQ += `${
          placeholderQ == String.fromCharCode(84, 0)
            ? lightG.length
            : placeholderQ.length
        }`;
        lightG = `${placeholderQ.length}`;
        while (placeholderQ != String.fromCharCode(81, 0)) {
          lightG = `${
            lightG == String.fromCharCode(57, 0)
              ? lightG.length
              : placeholderQ.length
          }`;
          break;
        }
        borderless1 += `${borderless1.length}`;
      }
      const existingComments = await getLocalComments();

      if (detailsz == descG) {
        descG = '2';
      }
      for (let o = 0; o < 1; o++) {
        let holderX = 2.0;
        let zhubo8 = String.fromCharCode(
          113,
          95,
          55,
          48,
          95,
          101,
          115,
          99,
          97,
          112,
          101,
          0,
        );
        let emojis = true;
        holderX /= Math.max(1, parseFloat(`${3}`));
        if (emojis) {
          holderX /= Math.max(
            5,
            parseFloat(`${zhubo8.length * (emojis ? 3 : 3)}`),
          );
        }
        let pause6 = String.fromCharCode(
          107,
          95,
          56,
          51,
          95,
          101,
          110,
          116,
          105,
          116,
          105,
          116,
          121,
          0,
        );
        emojis = holderX < 69.4;
        pause6 = `${pause6.length}`;
        let gradleG = false;
        let bottomq = true;
        if (!gradleG) {
          zhubo8 = '3';
        }
        if (holderX <= 4.59 && 4.17 <= holderX / Math.max(4.59, 2)) {
          let listT = 4;
          emojis = !emojis;
          listT <<= Math.min(2, Math.abs(3));
        }
        for (let e = 0; e < 1; e++) {
          gradleG = !emojis;
        }
        gradleG = !emojis;
        let malaysiai: Array<any> = [723, 708];
        let catalogC: Map<any, any> = new Map([
          [
            String.fromCharCode(
              106,
              115,
              116,
              121,
              112,
              101,
              95,
              113,
              95,
              52,
              50,
              0,
            ),
            162,
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
              112,
              95,
              55,
              49,
              0,
            ),
            316,
          ],
        ]);
        zhubo8 += `${malaysiai.length}`;
        malaysiai.push(catalogC.size);
        catalogC = new Map([[`${catalogC.size}`, catalogC.size & 3]]);
        borderless1 += '2';
      }
      while (shrinku.length < 3) {
        let pressurej = true;
        for (let w = 0; w < 1; w++) {
          pressurej = !pressurej;
        }
        pressurej = pressurej ? pressurej : pressurej;
        while (pressurej && pressurej) {
          let assistO = 1.0;
          let mbnativeadvancedc = 0;
          pressurej = assistO > 65.3;
          assistO += mbnativeadvancedc & 3;
          mbnativeadvancedc <<= Math.min(
            1,
            Math.abs(mbnativeadvancedc / Math.max(6, mbnativeadvancedc)),
          );
          break;
        }
        subs7 = `${1 / Math.max(1, shrinku.length)}`;
        break;
      }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

      let backA = String.fromCharCode(100, 107, 122, 0) == detailsz;
      do {
        detailsz += '3';
        if (backA) {
          break;
        }
      } while (4 >= detailsz.length / Math.max(4, 5) && backA);
      while (borderless1.startsWith(`${relatedL.length}`)) {
        let logind = String.fromCharCode(
          100,
          101,
          115,
          112,
          105,
          108,
          108,
          95,
          122,
          95,
          50,
          49,
          0,
        );
        let crownb = String.fromCharCode(
          108,
          105,
          109,
          105,
          116,
          115,
          95,
          118,
          95,
          50,
          52,
          0,
        );
        let infoE = 4;
        let spinnere: Array<any> = [283, 268];
        let linkt = 2.0;
        let formS = String.fromCharCode(
          102,
          95,
          56,
          51,
          95,
          115,
          116,
          97,
          116,
          117,
          115,
          101,
          115,
          0,
        );
        logind += `${
          crownb == String.fromCharCode(48, 0) ? formS.length : crownb.length
        }`;
        for (let j = 0; j < 1; j++) {
          crownb += `${crownb.length}`;
        }
        for (let h = 0; h < 2; h++) {
          infoE <<= Math.min(Math.abs(3 & parseInt(`${linkt}`)), 4);
        }
        let submitj = String.fromCharCode(
          111,
          95,
          49,
          52,
          95,
          116,
          105,
          108,
          105,
          110,
          103,
          0,
        );
        spinnere.push(logind.length);
        submitj = `${submitj.length}`;
        let long_tM = String.fromCharCode(
          97,
          112,
          112,
          114,
          111,
          120,
          95,
          48,
          95,
          57,
          0,
        );
        let routerS = 0.0;
        let clubk = String.fromCharCode(
          120,
          95,
          49,
          48,
          48,
          95,
          99,
          111,
          114,
          110,
          101,
          114,
          115,
          0,
        );
        linkt *=
          logind == String.fromCharCode(102, 0)
            ? long_tM.length
            : logind.length;
        long_tM += `${clubk.length}`;
        routerS /= Math.max(4, parseFloat(`${parseInt(`${routerS}`) * 1}`));
        clubk = `${clubk.length * 1}`;
        for (let g = 0; g < 3; g++) {
          let weibos = String.fromCharCode(
            111,
            110,
            108,
            121,
            95,
            110,
            95,
            51,
            0,
          );
          let foregroundg = String.fromCharCode(
            115,
            116,
            100,
            95,
            99,
            95,
            56,
            51,
            0,
          );
          let inactiveW = 1;
          let clearc = String.fromCharCode(
            115,
            115,
            121,
            98,
            95,
            115,
            95,
            50,
            0,
          );
          linkt -= inactiveW / Math.max(3, crownb.length);
          weibos = `${weibos.length / 1}`;
          foregroundg += `${weibos.length - 3}`;
          inactiveW /= Math.max(5, foregroundg.length + clearc.length);
          clearc += `${1 * foregroundg.length}`;
        }
        crownb = `${spinnere.length * 3}`;
        while (5 == spinnere.length) {
          let filledU = String.fromCharCode(
            99,
            95,
            52,
            51,
            95,
            115,
            99,
            104,
            109,
            0,
          );
          let injuryW: Map<any, any> = new Map([
            [
              String.fromCharCode(116, 115, 101, 113, 95, 121, 95, 49, 56, 0),
              265,
            ],
            [String.fromCharCode(112, 95, 50, 51, 95, 97, 98, 99, 115, 0), 239],
            [
              String.fromCharCode(
                108,
                97,
                98,
                101,
                108,
                115,
                95,
                115,
                95,
                56,
                51,
                0,
              ),
              44,
            ],
          ]);
          let statsc: Map<any, any> = new Map([
            [
              String.fromCharCode(
                115,
                99,
                111,
                114,
                101,
                95,
                104,
                95,
                53,
                56,
                0,
              ),
              false,
            ],
            [
              String.fromCharCode(111, 95, 52, 51, 95, 110, 111, 111, 112, 0),
              false,
            ],
          ]);
          let gradlewl = String.fromCharCode(
            112,
            114,
            111,
            112,
            111,
            115,
            101,
            100,
            95,
            49,
            95,
            49,
            49,
            0,
          );
          let episodesC = String.fromCharCode(
            112,
            117,
            115,
            104,
            101,
            100,
            95,
            117,
            95,
            49,
            53,
            0,
          );
          linkt -= statsc.size % Math.max(6, injuryW.size);
          filledU += `${gradlewl.length}`;
          injuryW = new Map([[filledU, gradlewl.length & filledU.length]]);
          statsc.set(episodesC, 3 ^ gradlewl.length);
          episodesC += `${2 - gradlewl.length}`;
          break;
        }
        let whiteG = 1;
        let mail_ = String.fromCharCode(
          116,
          97,
          110,
          115,
          105,
          103,
          95,
          103,
          95,
          50,
          48,
          0,
        );
        let topicm = String.fromCharCode(
          105,
          95,
          51,
          51,
          95,
          102,
          105,
          120,
          116,
          117,
          114,
          101,
          115,
          0,
        );
        infoE ^= 1 << Math.min(1, logind.length);
        whiteG *= 2;
        mail_ = `${mail_.length << Math.min(Math.abs(3), 1)}`;
        topicm = `${topicm.length}`;
        let mathJ = 9328772 <= spinnere.length;
        do {
          spinnere = [infoE >> Math.min(3, Math.abs(2))];
          if (mathJ) {
            break;
          }
        } while (
          5 < 5 << Math.min(3, spinnere.length) &&
          1 < crownb.length << Math.min(Math.abs(5), 5) &&
          mathJ
        );
        linkt *= parseInt(`${linkt}`);
        while (infoE >= 5) {
          crownb = `${crownb.length / Math.max(2, 3)}`;
          break;
        }
        spinnere = [crownb.length - parseInt(`${linkt}`)];
        let tickedH = 9359742 >= logind.length;
        do {
          logind += `${2 + parseInt(`${linkt}`)}`;
          if (tickedH) {
            break;
          }
        } while (
          tickedH &&
          (logind != String.fromCharCode(71, 0) ||
            crownb != String.fromCharCode(114, 0))
        );
        let moviesD = String.fromCharCode(
          99,
          121,
          99,
          108,
          105,
          99,
          114,
          101,
          102,
          114,
          101,
          115,
          104,
          95,
          106,
          95,
          56,
          48,
          0,
        );
        let twitterv: Map<any, any> = new Map([
          [
            String.fromCharCode(116, 95, 50, 57, 95, 102, 109, 116, 112, 0),
            598,
          ],
          [
            String.fromCharCode(
              109,
              95,
              53,
              50,
              95,
              109,
              97,
              107,
              101,
              99,
              116,
              0,
            ),
            949,
          ],
        ]);
        spinnere.push(moviesD.length);
        moviesD += `${twitterv.size}`;
        twitterv = new Map([[`${twitterv.size}`, 2]]);
        borderless1 += '3';
        break;
      }
      let calendara: Map<any, any> = new Map([
        [
          String.fromCharCode(97, 95, 54, 95, 115, 105, 103, 118, 101, 114, 0),
          true,
        ],
        [
          String.fromCharCode(
            106,
            112,
            101,
            103,
            116,
            97,
            98,
            108,
            101,
            115,
            95,
            103,
            95,
            57,
            0,
          ),
          false,
        ],
      ]);
      let layouth = true;
      let dialogd = 3;
      let projectN: Array<any> = [945, 243];
      let collectionV = 3.0;
      let type__xP = String.fromCharCode(
        103,
        112,
        109,
        100,
        95,
        120,
        95,
        57,
        50,
        0,
      );
      dialogd += parseInt(`${collectionV}`) + dialogd;
      projectN = [projectN.length & 2];
      collectionV /= Math.max(
        parseFloat(`${3 % Math.max(5, type__xP.length)}`),
        3,
      );
      type__xP = `${projectN.length | 3}`;
      let modelsb = calendara.size <= 7806141;
      do {
        let j_centere: Map<any, any> = new Map([
          [String.fromCharCode(114, 116, 108, 95, 48, 95, 56, 0), 671],
          [
            String.fromCharCode(
              101,
              95,
              51,
              50,
              95,
              115,
              97,
              108,
              116,
              101,
              100,
              0,
            ),
            306,
          ],
          [
            String.fromCharCode(
              109,
              101,
              116,
              104,
              111,
              100,
              95,
              109,
              95,
              55,
              57,
              0,
            ),
            529,
          ],
        ]);
        let arrowE: Array<any> = [110, 315, 297];
        calendara = new Map([[`${calendara.size}`, calendara.size]]);
        j_centere = new Map([[`${j_centere.size}`, 1 ^ arrowE.length]]);
        arrowE.push(j_centere.size);
        if (modelsb) {
          break;
        }
      } while (modelsb && !Array.from(calendara.keys()).includes(`${dialogd}`));
      let stringW: Array<any> = [
        String.fromCharCode(
          120,
          95,
          52,
          55,
          95,
          97,
          112,
          112,
          101,
          110,
          100,
          97,
          98,
          108,
          101,
          0,
        ),
        String.fromCharCode(97, 118, 100, 99, 116, 95, 50, 95, 50, 54, 0),
        String.fromCharCode(97, 97, 99, 100, 101, 99, 95, 97, 95, 57, 0),
      ];
      let matchesm: Array<any> = [959, 178];
      dialogd <<= Math.min(4, Math.abs(1));
      matchesm = [calendara.size];
      stringW = [matchesm.length | stringW.length];
      layouth = layouth && stringW.length <= 6;
      let description_16A: Array<any> = [77, 582];
      let navigation3 = 5;
      stringW.push(dialogd);
      description_16A.push(description_16A.length | navigation3);
      navigation3 >>= Math.min(Math.abs(2), 2);
      matchesm.push(3);
      referrerL = greenU > 15.15 || filter6;
      existingComments.unshift(commmentObj);

      searchq /= Math.max(
        5,
        String.fromCharCode(82, 0) == manifest7
          ? filter6
            ? 3
            : 1
          : manifest7.length,
      );
      let saveU = referrerL ? !referrerL : referrerL;
      do {
        referrerL = 18 > (subs7.length ^ (filter6 ? subs7.length : 18));
        if (saveU) {
          break;
        }
      } while (saveU && detailsz.length < 3 && referrerL);
      while (1 > manifest7.length % Math.max(4, 6) || 1.56 - popup1 > 2.97) {
        let unselectedk: Map<any, any> = new Map([
          [
            String.fromCharCode(
              115,
              105,
              103,
              115,
              108,
              111,
              116,
              95,
              55,
              95,
              51,
              51,
              0,
            ),
            370,
          ],
          [
            String.fromCharCode(
              108,
              95,
              51,
              57,
              95,
              110,
              101,
              103,
              97,
              116,
              101,
              100,
              0,
            ),
            215,
          ],
          [
            String.fromCharCode(
              118,
              100,
              112,
              97,
              117,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              95,
              121,
              95,
              54,
              48,
              0,
            ),
            355,
          ],
        ]);
        let countdown8 = 1;
        unselectedk = new Map([[`${unselectedk.size}`, countdown8 | 2]]);
        unselectedk = new Map([[`${unselectedk.size}`, unselectedk.size]]);
        if (3 + unselectedk.size < 3) {
          unselectedk.set(`${unselectedk.size}`, unselectedk.size + 2);
        }
        popup1 *= parseFloat(`${2}`);
        break;
      }
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments),
      );

      let plashs = false;
      let leagueu = 1;
      let episodes1 = 3.0;
      let bannerD = String.fromCharCode(
        112,
        95,
        49,
        52,
        95,
        102,
        116,
        118,
        110,
        111,
        100,
        101,
        0,
      );
      let time_ri6: Array<any> = [361, 43];
      leagueu ^= bannerD.length;
      bannerD = `${time_ri6.length | 3}`;
      time_ri6.push(time_ri6.length);
      let googlei = episodes1 >= 6457385.0;
      do {
        let stepN: Array<any> = [380, 143, 419];
        episodes1 -= parseFloat(`${3}`);
        stepN.push(stepN.length);
        if (googlei) {
          break;
        }
      } while ((plashs || 1.8 * episodes1 <= 1.87) && googlei);
      let firebaseO: Array<any> = [433, 409, 395];
      leagueu ^= 1;
      firebaseO.push(firebaseO.length | 1);
      plashs = parseFloat(`${leagueu}`) < episodes1;
      leagueu /= Math.max(parseInt(`${episodes1}`), 1);
      while (plashs) {
        let whitem = String.fromCharCode(
          101,
          120,
          116,
          114,
          97,
          99,
          116,
          105,
          111,
          110,
          95,
          106,
          95,
          55,
          0,
        );
        let tick1: Map<any, any> = new Map([
          [
            String.fromCharCode(
              112,
              95,
              57,
              56,
              95,
              102,
              105,
              114,
              115,
              116,
              108,
              105,
              110,
              101,
              0,
            ),
            86,
          ],
          [
            String.fromCharCode(
              110,
              95,
              57,
              56,
              95,
              100,
              101,
              108,
              105,
              109,
              105,
              116,
              101,
              114,
              115,
              0,
            ),
            455,
          ],
          [
            String.fromCharCode(
              122,
              95,
              52,
              57,
              95,
              105,
              100,
              99,
              116,
              120,
              108,
              108,
              109,
              0,
            ),
            942,
          ],
        ]);
        let awayA = String.fromCharCode(
          115,
          99,
          111,
          112,
          101,
          100,
          95,
          101,
          95,
          49,
          57,
          0,
        );
        let flyerI = String.fromCharCode(
          115,
          95,
          50,
          50,
          95,
          99,
          104,
          97,
          114,
          116,
          0,
        );
        let scorep = 1;
        leagueu -= awayA.length;
        whitem += `${scorep * flyerI.length}`;
        tick1.set(
          `${scorep}`,
          String.fromCharCode(105, 0) == flyerI ? flyerI.length : scorep,
        );
        awayA += `${2 * tick1.size}`;
        break;
      }
      for (let u = 0; u < 3; u++) {
        plashs = !plashs;
      }
      if (episodes1 * 2.23 < 5.49) {
        plashs = !plashs;
      }
      leagueu /= Math.max(4, 2);
      subs7 = `${parseInt(`${searchq}`)}`;
      for (let n = 0; n < 1; n++) {
        relatedL.push(1 + parseInt(`${searchq}`));
      }
      filledI += `${parseInt(`${greenU}`)}`;
      await getLocalComments();

      let m_title3 = String.fromCharCode(
        108,
        111,
        116,
        116,
        105,
        101,
        95,
        99,
        95,
        50,
        57,
        0,
      );
      let searchi = 3;
      let commonL = 4;
      m_title3 += `${3 / Math.max(10, commonL)}`;
      m_title3 = `${
        m_title3 == String.fromCharCode(114, 0) ? m_title3.length : searchi
      }`;
      searchi <<= Math.min(Math.abs(m_title3.length % 2), 5);
      searchi %= Math.max(
        m_title3 == String.fromCharCode(84, 0) ? m_title3.length : searchi,
        5,
      );
      let robotoO = 8043834 <= searchi;
      do {
        searchi /= Math.max(5, m_title3.length);
        if (robotoO) {
          break;
        }
      } while (2 >= (searchi & commonL) && robotoO);
      searchi |= searchi;
      while (m_title3.includes(`${searchi}`)) {
        let resendH = String.fromCharCode(
          115,
          101,
          101,
          100,
          101,
          100,
          95,
          112,
          95,
          57,
          53,
          0,
        );
        let e_imagel = 1.0;
        let wind1 = false;
        let appsL = String.fromCharCode(
          122,
          95,
          49,
          54,
          95,
          115,
          105,
          103,
          109,
          97,
          0,
        );
        let klevinh = 5.0;
        searchi /= Math.max(4, parseInt(`${klevinh}`));
        resendH += `${appsL.length << Math.min(Math.abs(2), 2)}`;
        e_imagel += appsL.length - 3;
        klevinh -= parseFloat(`${3}`);
        break;
      }
      let assistm: Array<any> = [675, 214];
      let vignettet = 2.0;
      let clockr = 3;
      m_title3 += `${parseInt(`${vignettet}`) * clockr}`;
      relatedL = [2 >> Math.min(5, Math.abs(parseInt(`${searchq}`)))];
      while (searchq > 5.62) {
        let traminix = 0.0;
        let showW = String.fromCharCode(
          113,
          95,
          50,
          50,
          95,
          99,
          121,
          99,
          108,
          105,
          99,
          0,
        );
        let roundn = String.fromCharCode(
          115,
          104,
          105,
          102,
          116,
          101,
          100,
          95,
          57,
          95,
          50,
          51,
          0,
        );
        let unselectedV = true;
        showW += `${parseInt(`${traminix}`) + 1}`;
        while (showW.length <= roundn.length) {
          showW = `${parseInt(`${traminix}`) * 2}`;
          break;
        }
        roundn += `${
          String.fromCharCode(71, 0) == showW
            ? parseInt(`${traminix}`)
            : showW.length
        }`;
        let storee = String.fromCharCode(
          111,
          114,
          97,
          110,
          103,
          101,
          95,
          56,
          95,
          54,
          57,
          0,
        );
        let sportP = 3;
        unselectedV = 5 <= roundn.length;
        storee = `${sportP * storee.length}`;
        sportP |= 2;
        while (roundn.length <= showW.length) {
          showW = `${parseInt(`${traminix}`) & 1}`;
          break;
        }
        unselectedV = 22 > roundn.length;
        let catalogb = unselectedV ? !unselectedV : unselectedV;
        do {
          let untickt: Map<any, any> = new Map([
            [
              String.fromCharCode(
                98,
                108,
                111,
                99,
                107,
                101,
                114,
                95,
                102,
                95,
                49,
                57,
                0,
              ),
              377,
            ],
            [
              String.fromCharCode(
                111,
                95,
                57,
                57,
                95,
                112,
                114,
                111,
                112,
                111,
                114,
                116,
                105,
                111,
                110,
                0,
              ),
              637,
            ],
            [
              String.fromCharCode(
                107,
                95,
                51,
                55,
                95,
                101,
                118,
                97,
                115,
                97,
                112,
                112,
                0,
              ),
              951,
            ],
          ]);
          let watchc = 1.0;
          unselectedV = untickt.size >= 77;
          untickt = new Map([[`${watchc}`, 2]]);
          watchc += parseFloat(
            `${parseInt(`${watchc}`) | parseInt(`${watchc}`)}`,
          );
          if (catalogb) {
            break;
          }
        } while (!unselectedV && catalogb);
        let downloadedD =
          showW == String.fromCharCode(54, 107, 97, 121, 99, 48, 110, 0);
        do {
          showW += `${
            showW == String.fromCharCode(89, 0)
              ? showW.length
              : parseInt(`${traminix}`)
          }`;
          if (downloadedD) {
            break;
          }
        } while (downloadedD && 2 < showW.length);
        filter6 =
          String.fromCharCode(71, 0) == manifest7 || detailsz.length == 35;
        break;
      }
      let detailB = String.fromCharCode(
        110,
        95,
        52,
        50,
        95,
        103,
        101,
        116,
        115,
        111,
        99,
        107,
        111,
        112,
        116,
        0,
      );
      let loadingG = 0.0;
      detailB = `${detailB.length}`;
      loadingG += parseFloat(`${parseInt(`${loadingG}`)}`);
      while (!detailB.endsWith(`${detailB.length}`)) {
        detailB += `${detailB.length * detailB.length}`;
        break;
      }
      let notificationa = true;
      detailB = `${2 + (notificationa ? 1 : 3)}`;
      searchq /= Math.max(3, parseInt(`${popup1}`) << Math.min(Math.abs(1), 2));
      setIsUpdated(!isUpdated);

      let macaun = searchq <= 8317600.0;
      do {
        searchq += detailsz.length >> Math.min(descG.length, 1);
        if (macaun) {
          break;
        }
      } while (macaun && 3.17 >= searchq * popup1 && popup1 * searchq >= 3.17);
      for (let c = 0; c < 3; c++) {
        relatedL = [relatedL.length];
      }
      sliderD /= Math.max(3, 1);
      Keyboard.dismiss();

      while (3 << Math.min(3, shrinku.length) < 3) {
        shrinku = `${
          String.fromCharCode(65, 0) == detailsz
            ? shrinku.length
            : detailsz.length
        }`;
        break;
      }
      let navigationZ = referrerL ? !referrerL : referrerL;
      do {
        referrerL = 65 >= sliderD;
        if (navigationZ) {
          break;
        }
      } while (!borderless1.includes(`${referrerL}`) && navigationZ);
      manifest7 = `${parseInt(`${greenU}`) | (filter6 ? 3 : 2)}`;
      ttGray.showToast('提交成功，我们将在24小时内进行审核！');
    } catch (error) {
      while (
        descG != String.fromCharCode(108, 0) &&
        subs7 != String.fromCharCode(76, 0)
      ) {
        let specD = 4.0;
        let privacy_ = 0.0;
        let n_unlockD = String.fromCharCode(
          114,
          101,
          115,
          105,
          103,
          110,
          115,
          95,
          114,
          95,
          49,
          51,
          0,
        );
        let privacyO: Array<any> = [555, 722, 748];
        let nnewinterstitialq = String.fromCharCode(
          101,
          95,
          54,
          48,
          95,
          101,
          97,
          114,
          108,
          105,
          101,
          114,
          0,
        );
        let buildu = 7832269.0 <= specD;
        do {
          specD /= Math.max(5, 1 >> Math.min(4, privacyO.length));
          if (buildu) {
            break;
          }
        } while (
          buildu &&
          (5.82 / Math.max(10, specD) >= 3.8 || 5.82 + specD >= 3.87)
        );
        let episodesO = 0.0;
        privacyO.push(1 << Math.min(4, privacyO.length));
        episodesO /= Math.max(parseFloat(`${parseInt(`${episodesO}`) * 1}`), 2);
        n_unlockD += `${parseInt(`${privacy_}`)}`;
        let nativeexs =
          nnewinterstitialq ==
          String.fromCharCode(56, 57, 106, 51, 52, 48, 105, 117, 119, 112, 0);
        do {
          let mode6 = 3.0;
          let plashG = String.fromCharCode(
            105,
            110,
            118,
            111,
            107,
            101,
            95,
            119,
            95,
            50,
            0,
          );
          let mbjscommonJ: Array<any> = [355, 703];
          let bodanN = false;
          let hooka = String.fromCharCode(
            118,
            95,
            49,
            56,
            95,
            109,
            97,
            112,
            115,
            105,
            122,
            101,
            0,
          );
          nnewinterstitialq = `${mbjscommonJ.length}`;
          mode6 -= (bodanN ? 3 : 4) + parseInt(`${mode6}`);
          plashG = `${parseInt(`${mode6}`) + 1}`;
          mbjscommonJ.push(parseInt(`${mode6}`));
          bodanN = plashG.length > hooka.length;
          hooka += `${2 << Math.min(1, plashG.length)}`;
          if (nativeexs) {
            break;
          }
        } while (nativeexs && nnewinterstitialq.length < specD);
        let groupI = 3.0;
        nnewinterstitialq += `${parseInt(`${privacy_}`)}`;
        privacyO.push(parseInt(`${privacy_}`) - nnewinterstitialq.length);
        let termsm = privacy_ >= 7186063.0;
        do {
          privacy_ +=
            nnewinterstitialq == String.fromCharCode(82, 0)
              ? nnewinterstitialq.length
              : parseInt(`${privacy_}`);
          if (termsm) {
            break;
          }
        } while (1.81 > privacy_ && termsm);
        specD /= Math.max(1, parseInt(`${groupI}`) + n_unlockD.length);
        let short_5xS = String.fromCharCode(
          104,
          101,
          120,
          100,
          117,
          109,
          112,
          95,
          52,
          95,
          56,
          49,
          0,
        );
        groupI -= parseFloat(`${3 + parseInt(`${groupI}`)}`);
        short_5xS += `${short_5xS.length % Math.max(short_5xS.length, 9)}`;
        while (2.35 > groupI) {
          privacyO = [2 ^ privacyO.length];
          break;
        }
        if (privacyO.length <= n_unlockD.length) {
          let link3 = false;
          let detail1 = String.fromCharCode(
            100,
            101,
            102,
            97,
            117,
            108,
            95,
            101,
            95,
            57,
            53,
            0,
          );
          let unselectedVk = String.fromCharCode(
            101,
            118,
            97,
            108,
            95,
            100,
            95,
            53,
            55,
            0,
          );
          privacyO = [
            String.fromCharCode(48, 0) == detail1
              ? privacyO.length
              : detail1.length,
          ];
          link3 = !link3;
          unselectedVk += `${unselectedVk.length << Math.min(Math.abs(3), 3)}`;
        }
        while (nnewinterstitialq.endsWith(`${specD}`)) {
          let gemfileA = 0;
          let grayp = String.fromCharCode(
            110,
            105,
            103,
            104,
            116,
            95,
            98,
            95,
            52,
            48,
            0,
          );
          let launchn = String.fromCharCode(
            104,
            101,
            97,
            100,
            115,
            101,
            116,
            95,
            100,
            95,
            49,
            56,
            0,
          );
          nnewinterstitialq += '3';
          gemfileA *= 2 ^ launchn.length;
          grayp += `${launchn.length}`;
          break;
        }
        let actionst = String.fromCharCode(
          105,
          109,
          112,
          114,
          101,
          115,
          115,
          105,
          111,
          110,
          115,
          95,
          116,
          95,
          53,
          0,
        );
        let activeV = String.fromCharCode(
          115,
          95,
          51,
          50,
          95,
          98,
          101,
          114,
          114,
          105,
          101,
          115,
          0,
        );
        let formi = String.fromCharCode(112, 113, 109, 54, 116, 0) == actionst;
        do {
          actionst = `${
            nnewinterstitialq == String.fromCharCode(79, 0)
              ? nnewinterstitialq.length
              : n_unlockD.length
          }`;
          if (formi) {
            break;
          }
        } while (formi && nnewinterstitialq != actionst);
        descG += `${parseInt(`${popup1}`) & parseInt(`${greenU}`)}`;
        break;
      }
      muted8 /= Math.max(2, parseFloat(`${3}`));
      relatedL.push(3 * manifest7.length);
      console.log('error when storing the comment into local storage: ', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (videoRef !== undefined && videoRef.current?.isPaused) {
        videoRef.current.setPause(false);
      }
      return () => {
        if (videoRef !== undefined && !videoRef.current?.isPaused) {
          videoRef.current?.setPause(true);
        }
      };
    }, []),
  );

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScreenContainer
          containerStyle={{paddingRight: 0, paddingLeft: 0}}
          footer={
            <>
              {!isOffline && (
                <View
                  style={{
                    ...styles.commentContainer,
                    backgroundColor: dark ? '#1d2023' : 'white',
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                  }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: dark ? '#FFFFFF1A' : '#D9D9D9',
                      ...textVariants.body,
                    }}
                    onChangeText={setComment}
                    placeholder={
                      ttFast.isLogin(userState.user)
                        ? '请评论'
                        : '请登录才进行评论'
                    }
                    editable={ttFast.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {ttFast.isLogin(userState.user) ? (
                    <>
                      <Text
                        style={{
                          ...textVariants.body,
                          color:
                            comment.length === 200
                              ? colors.primary
                              : colors.muted,
                        }}>
                        {comment.length}/200
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => {
                          setComment('');
                          storeUserComments();
                        }}>
                        <SubmitBtn
                          fill={comment.length ? '#FAC33D' : '#3A3A3A'}
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() => dispatch(showLoginAction())}>
                      <Text
                        style={{...textVariants.body, color: colors.primary}}>
                        立即登录
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </>
          }>
          <TitleWithBackButtonHeader
            title={vod?.vod_name}
            backBtnStyle={{
              left: 30,
            }}
          />

          {}
          {/* {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />} */}

          {isOffline && dismountPlayer && (
            <View
              style={{
                width: '100%',
                aspectRatio: 16 / 9,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <FastImage
                style={{height: 80, width: 80}}
                source={require('@static/images/toponTerms.gif')}
                resizeMode={'contain'}
              />
            </View>
          )}
          {!dismountPlayer && isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlay={true} />
          )}

          {!isOffline && (
            <>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{marginTop: spacing.m}}
                contentInsetAdjustmentBehavior="automatic">
                <View style={{...styles.descriptionContainer2, gap: spacing.m}}>
                  <View style={styles.videoDescription}>
                    <FastImage
                      source={{uri: vod?.vod_pic}}
                      resizeMode={'cover'}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                    />
                    <View style={styles.descriptionContainer}>
                      {vod && (
                        <FavoriteButton
                          initialState={isFavorite}
                          vod={vod}
                          leftIcon={
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: spacing.xxs,
                              }}>
                              <FavoriteIcon
                                width={18}
                                height={18}
                                style={{
                                  color:
                                    isFavorite == true ? '#FAC33D' : '#9C9C9C',
                                }}
                              />
                              {isFavorite ? (
                                <Text
                                  style={{
                                    ...textVariants.subBody,

                                    color:
                                      isFavorite == true
                                        ? '#FAC33D'
                                        : '#9C9C9C',
                                    paddingBottom: 0,
                                  }}>
                                  已收藏
                                </Text>
                              ) : (
                                <Text
                                  style={{
                                    ...textVariants.subBody,

                                    color:
                                      isFavorite == true
                                        ? '#FAC33D'
                                        : '#9C9C9C',
                                    paddingBottom: 0,
                                  }}>
                                  收藏
                                </Text>
                              )}
                            </View>
                          }
                        />
                      )}
                      <Text
                        style={{...textVariants.subBody, color: colors.muted}}
                        numberOfLines={2}>
                        {`${definedValue(vod?.vod_year)}`}
                        {`${definedValue(vod?.vod_area)}`}
                        {`${definedValue(
                          vod?.vod_class?.split(',').join(' '),
                        )}`}
                      </Text>
                      <Text
                        style={{...textVariants.subBody, color: colors.muted}}>
                        {(() => {
                          try {
                            const dateValue =
                              vod && !!vod?.vod_time_add
                                ? new Date(vod?.vod_time_add * 1000)
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace(/\//g, '-')
                                : new Date()
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace(/\//g, '-');

                            return `更新：${dateValue}`;
                          } catch (error) {
                            console.error(
                              'Error while formatting date:',
                              error,
                            );
                            return '更新：N/A';
                          }
                        })()}
                      </Text>
                      <View
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          gap: 8,
                        }}>
                        {/* <TouchableOpacity activeOpacity={0.85}
                        onPress={handleSearchVideo}
                        style={{
                          backgroundColor: "#FAC33D",
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "500",
                            color: "#000",
                          }}
                        >
                          搜索片源
                        </Text>
                      </TouchableOpacity>
                      <Text style={{...textVariants.small, alignSelf: 'flex-end'}}>
                        *点击跳转bing搜索片源
                      </Text> */}
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.descriptionContainer2Text}>
                      {`导演：${definedValue(vod?.vod_director)}${'\n'}` +
                        `主演：${definedValue(vod?.vod_actor)}${'\n'}`}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() => {
                        setIsCollapsed(!isCollapsed);
                      }}>
                      <View style={{paddingBottom: 18}}>
                        <Text
                          ref={textRef}
                          onTextLayout={handleTextLayout}
                          style={styles.descriptionContainer2Text}
                          numberOfLines={isCollapsed ? 2 : 20}>
                          {`${definedValue(vod?.vod_content)}`}
                        </Text>
                      </View>
                      <View style={{paddingBottom: 0}}>
                        {isCollapsed && actualNumberOfLines >= 2 && (
                          <FastImage
                            style={{
                              flex: 1,
                              height: 12,
                              width: 14,
                              alignSelf: 'center',
                            }}
                            source={require('@static/images/tailRules.png')}
                            resizeMode={'contain'}
                          />
                        )}
                        {!isCollapsed && actualNumberOfLines >= 2 && (
                          <FastImage
                            style={{
                              flex: 1,
                              height: 12,
                              width: 14,
                              alignSelf: 'center',
                            }}
                            source={require('@static/images/resultFastforwardPoint.png')}
                            resizeMode={'contain'}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>

                  {}
                  <>
                    {yuGaoUrl && (
                      <VodPlayerMin
                        ref={videoRef}
                        vod_url={yuGaoUrl}
                        videoType="vod"
                        appOrientation={settingsReducer.appOrientation}
                        devicesOrientation={settingsReducer.devicesOrientation}
                        lockOrientation={lockOrientation}
                      />
                    )}
                  </>
                  {}
                  <>
                    {isFetchingVodDetails ||
                    isFetchingComments ||
                    showLoading ? (
                      <>
                        <View
                          style={{
                            width: '100%',
                            aspectRatio: 16 / 9,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}>
                          <FastImage
                            style={{height: 80, width: 80}}
                            source={require('@static/images/blacklistTumbnail.gif')}
                            resizeMode={'contain'}
                          />
                        </View>
                      </>
                    ) : (
                      <>
                        {vod && allComment && !showLoading && (
                          <VodCommentBox
                            comments={allComment ?? []}
                            onCommentTap={() => {
                              navigation.navigate('全部评论', {
                                vod_id: vod.vod_id,
                                vod_name: vod.vod_name,
                                commentItems: allComment,
                              });
                            }}
                          />
                        )}

                        {vod &&
                          suggestedVods !== undefined &&
                          suggestedVods?.length > 0 && (
                            <View style={{gap: spacing.l, marginBottom: 60}}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name}`}
                                onPress={() => {
                                  setTimeout(() => {
                                    navigation.navigate('片库', {
                                      type_id: vod.type_id,
                                    });
                                  }, 150);
                                }}
                              />
                              <VodListVertical
                                vods={suggestedVods}
                                outerRowPadding={2 * (20 - spacing.sideOffset)}
                                onPress={() => {
                                  if (!isCollapsed) {
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          )}
                      </>
                    )}
                  </>
                </View>
              </ScrollView>
              {settingsReducer.appOrientation === 'PORTRAIT' && (
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={vod?.vod_play_list}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  onConfirm={onConfirmEpisodeSelection}
                  rangeSize={EPISODE_RANGE_SIZE}
                />
              )}
            </>
          )}
          {isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
          )}
        </ScreenContainer>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  videoHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: '100%',
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: '#9C9C9C',
    fontSize: 14,
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceApart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },
});
