import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { persistor, store } from "@redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  MiniVideo,
  VodCarousellResponseType
} from "@type/ajaxTypes";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  IOS_HOME_PAGE_BANNER_ADS,
  TOPON_ANDROID_APP_ID,
  TOPON_ANDROID_APP_KEY,
  TOPON_IOS_APP_ID,
  TOPON_IOS_APP_KEY,
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
import RNRestart from 'react-native-restart';
// remove when merge
import { TermsAcceptContextProvider } from "./src/contexts/TermsAcceptedContext";
import { TermsAcceptContextProvider as TermsAcceptContextProviderA } from "./src/contexts/TermsAcceptedContext";
import { TermsAcceptContextProvider as TermsAcceptContextProviderIos } from "./src/contexts/TermsAcceptedContext";
import { prefetchAdultMiniVod, prefetchMiniVod } from "./src/api/miniVod";
import { checkExpiredCacheFile, deleteCachedVideos } from "./src/utils/minivodDownloader";
import NetInfo from '@react-native-community/netinfo';
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

let App = () => {
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

  const [showRegengOverlay, setShowRegengOverlay] = useState(false);

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
    const unsubscribe = NetInfo.addEventListener((state:any) => {
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
      if(count == 1)
      {
        RNRestart.Restart();
      }
    }
  }, [isConnected]);




  

  const downloadWatchAnytimeSequence = async () => {
    await deleteCachedVideos(); 
    await checkExpiredCacheFile(3); 

    prefetchMiniVod(queryClient)
    prefetchAdultMiniVod(queryClient)

  }

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["HomePage", 0],
      queryFn: () =>
        fetch(`${API_DOMAIN}page/v2/typepage?id=0`)
          .then((response) => response.json())
          .then((json: VodCarousellResponseType) => {
            setCount(99);
            return json;
          }),
    });

    queryClient.prefetchQuery({
      queryKey: ["HomePage", 1000],
      queryFn: () =>
        fetch(`${API_DOMAIN}page/v2/typepage?id=1000`)
          .then((response) => response.json())
          .then((json: any) => {
            return json.data.yingping_list;
          }),
    });

    // queryClient.prefetchQuery({
    //   queryKey: ["filterOptions"],
    //   queryFn: () =>
    //     fetch(`${API_DOMAIN}type/v1/type`)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((json: FilterOptionsResponseType) => {
    //         return json.data;
    //       }),
    //   staleTime: Infinity,
    // });

    // queryClient.prefetchQuery({
    //   queryKey: ["HomePageNavOptions"],
    //   queryFn: () =>
    //     fetch(`${API_DOMAIN}nav/v1/navItems`, {})
    //       .then((response) => response.json())
    //       .then((json: NavOptionsResponseType) => {
    //         return json.data;
    //       }),
    //   staleTime: Infinity,
    // });

    // const fetchPlaylist = (page: number) =>
    //   fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
    //     .then((response) => response.json())
    //     .then((json: VodPlaylistResponseType) => {
    //       return Object.values(json.data.List);
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
  downloadWatchAnytimeSequence()
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
