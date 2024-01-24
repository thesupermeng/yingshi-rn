import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { persistor, store } from "@redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckVersionRequest, MiniVideo } from "@type/ajaxTypes";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  APP_VERSION,
  EVENT_CUSTOM_START,
  IOS_HOME_PAGE_BANNER_ADS,
  TOPON_ANDROID_APP_ID,
  TOPON_ANDROID_APP_KEY,
  TOPON_IOS_APP_ID,
  TOPON_IOS_APP_KEY,
  UMENG_CHANNEL,
} from "@utility/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import CodePush from "react-native-code-push";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RegengOverlay from "./src/components/modal/regengOverlay";
import MainNav from "./src/navigation/mainNav";
import { YSConfig } from "./ysConfig";

import { ATRNSDK } from "./AnyThinkAds/ATReactNativeSDK";
import RNRestart from "react-native-restart";
// remove when merge
import { TermsAcceptContextProvider } from "./src/contexts/TermsAcceptedContext";
import { TermsAcceptContextProvider as TermsAcceptContextProviderA } from "./src/contexts/TermsAcceptedContext";
import { TermsAcceptContextProvider as TermsAcceptContextProviderIos } from "./src/contexts/TermsAcceptedContext";
import { prefetchAdultMiniVod, prefetchMiniVod } from "./src/api/miniVod";
import {
  checkExpiredCacheFile,
  deleteCachedVideos,
} from "./src/utils/minivodDownloader";
import NetInfo from "@react-native-community/netinfo";
import { AppsApi, PlaylistApi, VodApi } from "@api";
import { CustomEventAnalytic } from "./Umeng/EventAnalytic";
import { logIgnore, warnIgnore } from "@utility/helper";

const topon_channel = "WEB";

// import * as Sentry from "@sentry/react-native";

// Sentry.init({
//   dsn:
//     "https://2239481cf50fd768a7d45bcd7e537462@o4506222962999296.ingest.sentry.io/4506222964965376",
//   tracesSampleRate: 1.0,
//   _experiments: {
//     // profilesSampleRate is relative to tracesSampleRate.
//     // Here, we'll capture profiles for 100% of transactions.
//     profilesSampleRate: 1.0,
//   },
// });

warnIgnore([
  'Trying to load empty source.',
  '`new NativeEventEmitter()` was called with a non-null argument without the required',
  `ReactImageView: Image source "null" doesn't exist`,
]);

logIgnore([
  /Opening .* for reading/, 
  /\[.*\] pts has no value/, 
  /frame=.*fps=.*q=.*size=.*time=.*bitrate=.*speed=.*/
])

let App = () => {
  CodePush.notifyAppReady();
  // appsFlyer.initSdk(
  //   {
  //     devKey: APPSFLYER_DEVKEY,
  //     isDebug: false,
  //     //appId: '41*****44',
  //     onInstallConversionDataListener: true,
  //     onDeepLinkListener: true,
  //     timeToWaitForATTUserAuthorization: 10,
  //   },
  //   result => {
  //     // console.log(result);
  //     const eventName = 'open_app';
  //     const eventValues = {
  //       ip: '1',
  //     };

  //     appsFlyer.logEvent(
  //       eventName,
  //       eventValues,
  //       res => {
  //         // console.log(res);
  //       },
  //       err => {
  //         console.error(err);
  //       },
  //     );
  //   },
  //   error => {
  //     console.error(error);
  //   },
  // );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

  const [isConnected, setIsConnected] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      // Unsubscribe from the network status listener when the component unmounts
      unsubscribe();
    };
  }, []);

  // Add additional logic to refresh the page when the network becomes available
  useEffect(() => {
    if (isConnected) {
      setCount(count + 1);
      // Perform actions to refresh the page (e.g., reload data, reset state)
      //  console.error('Network is back! Refresh the page.');
      if (count == 1) {
        RNRestart.Restart();
      }
    }
  }, [isConnected]);

  const downloadWatchAnytimeSequence = async () => {
    await deleteCachedVideos();
    await checkExpiredCacheFile(3);

    prefetchMiniVod(queryClient);
    prefetchAdultMiniVod(queryClient);
  };

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["HomePage", 0],
      queryFn: () =>
        AppsApi.getHomePages(0).then((data) => {
          setCount(99);
          return data;
        }),
    });

    queryClient.prefetchQuery({
      queryKey: ["HomePage", 1000],
      queryFn: () =>
        AppsApi.getHomePages(1000).then((data) => {
          return data.yingping_list;
        }),
    });

    // queryClient.prefetchQuery({
    //   queryKey: ["filterOptions"],
    //   queryFn: () => VodApi.getTopicType(),
    //   staleTime: Infinity,
    // });

    // queryClient.prefetchQuery({
    //   queryKey: ["HomePageNavOptions"],
    //   queryFn: () => AppsApi.getHomeNav(),
    //   staleTime: Infinity,
    // });

    // const fetchPlaylist = (page: number) =>
    //   PlaylistApi.getTopic(page)
    //     .then((data) => {
    //       return Object.values(data);
    //     });

    // queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
    //   fetchPlaylist(pageParam)
    // );
    type MiniVideoResponseType = {
      data: {
        List: Array<MiniVideo>;
      };
    };

    // queryClient.prefetchQuery({
    //   queryKey: ["matchesNavOptions"],
    //   queryFn: () =>
    //     Api.call(Url.sportTypes, {}, "GET").then((res): {
    //       has_submenu: boolean;
    //       ids: Array<number>;
    //       type: string;
    //     }[] => {
    //       return res?.data;
    //     }),
    //   staleTime: Infinity,
    // });

    let appId, appKey, bannerPlacementId;

    if (Platform.OS === "android") {
      appId = TOPON_ANDROID_APP_ID;
      appKey = TOPON_ANDROID_APP_KEY;
      bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
    } else if (Platform.OS === "ios") {
      appId = TOPON_IOS_APP_ID;
      appKey = TOPON_IOS_APP_KEY;
      bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
    }

    initTopOnSDK(appId, appKey);
  }, []);

  function initTopOnSDK(appId, appKey) {
    ATRNSDK.setLogDebug(true);

    ATRNSDK.getSDKVersionName().then((versionName) => {
      console.log("TopOn SDK version name: " + versionName);
    });

    var customMap = {
      channel: topon_channel,
      appCustomKey1: "appCustomValue1",
      appCustomKey2: "appCustomValue2",
    };
    ATRNSDK.initCustomMap(customMap);

    var placementCustomMap = {
      placementCustomKey1: "placementCustomValue1",
      placementCustomKey2: "placementCustomValue2",
    };

    ATRNSDK.setGDPRLevel(ATRNSDK.PERSONALIZED);

    ATRNSDK.getUserLocation().then((userLocation) => {
      console.log("userLocation: " + userLocation);
      if (userLocation == ATRNSDK.kATUserLocationInEU) {
        console.log("userLocation: in EU");
        ATRNSDK.getGDPRLevel().then((level) => {
          console.log("gdpr level: " + level);
          if (level == ATRNSDK.UNKNOWN) {
            ATRNSDK.showGDPRAuth();
          }
        });
      } else {
        console.log("userLocation: not in EU");
      }
    });

    console.log("TopOn SDK init ....");
    ATRNSDK.initSDK(appId, appKey);

    initAdListener();
  }

  function initAdListener() {
    // initInterstitialAdListener();
  }

  console.log("YSConfig.instance.areaConfig");

  console.log(YSConfig.instance.areaConfig);

  // re geng
  const [showRegengOverlay, setShowRegengOverlay] = useState(false);
  useEffect(() => {
    checkVersion();
  }, []);

  const checkVersion = async () => {
    await AppsApi.getLocalIpAddress();
    const checkVersionReq: CheckVersionRequest = {
      ip_address: YSConfig.instance.ip,
      channel_id: UMENG_CHANNEL,
      version_number: APP_VERSION,
      product: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      mobile_os: Platform.OS,
      mobile_model: "HUAWEIP20",
    };
    console.log(checkVersionReq);

    const { data: response } = await axios.post(
      `${API_DOMAIN}version/v1/check`,
      checkVersionReq
    );

    const res = response.data.version;
    const v1 = parseInt(APP_VERSION.replace(/\./g, ""), 10);
    const v2 = parseInt(res.replace(/\./g, ""), 10);

    // 0 ignore , 1 focce , 2 optional , 3 in background
    const updateType = response.data.update_res.update_type;

    YSConfig.instance.setUpdateAction(updateType);

    YSConfig.instance.setUpdateUrl(response.data.update_res.update_url);
    YSConfig.instance.setUpdateDesc(response.data.update_res.update_desc);

    console.log("ADAAAGGG");
    console.log(YSConfig.instance.updateAction);
    if (v2 > v1 && updateType != 0) {
      console.log("??");
      CodePush.checkForUpdate().then((update) => {
        // console.log("----+---");
        // console.log(update);
        if (update) {
        //  console.log(update + "AZZZZ?!");
          if (updateType == 1 || updateType == 2) {
            setShowRegengOverlay(true);
          }
          if (updateType == 3) {
            CodePush.sync({
              installMode: CodePush.InstallMode.ON_NEXT_RESTART,
            });
          }
        } else {
          console.log("EHH?");
        }
      });
    }
    return response;
  };

  useEffect(() => {
    downloadWatchAnytimeSequence();

    CustomEventAnalytic.foundLocalPush();
    if (EVENT_CUSTOM_START) {
      CustomEventAnalytic.start();
    }

    return () => {
      CustomEventAnalytic.close();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#161616" }}>
      <TermsAcceptContextProviderIos>
        <TermsAcceptContextProviderA>
          <TermsAcceptContextProvider>
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <GestureHandlerRootView style={{ flex: 1 }}>
                    <BottomSheetModalProvider>
                      <MainNav />
                    </BottomSheetModalProvider>
                  </GestureHandlerRootView>
                </PersistGate>
                {showRegengOverlay && <RegengOverlay />}
              </Provider>
            </QueryClientProvider>
          </TermsAcceptContextProvider>
        </TermsAcceptContextProviderA>
      </TermsAcceptContextProviderIos>
    </View>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
//   installMode: CodePush.InstallMode.IMMEDIATE,  // 安装模式: IMMEDIATE(立即安装) ON_NEXT_RESTART(下次启动时安装) ON_NEXT_RESUME(下次恢复到前台时安装) ON_NEXT_SUSPEND(下次挂起时安装)
//   minimumBackgroundDuration: 60 * 2, // 在后台静默更新的最小时间: 0(立即更新) 60(后台静默更新的最小时间为60秒)
// };

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
  rollbackRetryOptions: {
    delayInHours: 6,
    maxRetryAttempts: 1,
  },
};

// App = CodePush(codePushOptions)(App);
// export default Sentry.wrap(App);
export default App;
