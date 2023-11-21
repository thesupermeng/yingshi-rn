import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Nav from "./src/navigation/nav";
import NavA from "./srcA/navigation/nav";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkInfo } from "react-native-network-info";
import { showToast } from "./src/Sports/utility/toast";
import VipOverlay from "./src/components/modal/vipOverlay";
import axios from "axios";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  APPSFLYER_DEVKEY,
  UMENG_CHANNEL,
  APP_VERSION,
  TOPON_ANDROID_APP_KEY,
  TOPON_ANDROID_APP_ID,
  ANDROID_HOME_PAGE_BANNER_ADS,
  TOPON_IOS_APP_ID,
  TOPON_IOS_APP_KEY,
  IOS_HOME_PAGE_BANNER_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  TOPON_BANNER_WIDTH,
  TOPON_BANNER_HEIGHT,
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_TAB_BANNER_ADS,
  IOS_PLAY_DETAILS_BANNER_ADS,
  IOS_TOPIC_DETAILS_BANNER_ADS,
  IOS_TOPIC_TAB_BANNER_ADS,
  APP_NAME_CONST,
} from "./src/utility/constants";
import {
  BottomNavTabs,
  BottomNavTabsResponse,
  FilterOptionsResponseType,
  MiniVideo,
  NavOptionsResponseType,
  SuggestResponseType,
  VodCarousellResponseType,
  VodPlaylistResponseType,
  LiveTVStationsResponseType,
  CheckVersionResponseType,
  CheckVersionRequest,
} from "./src/types/ajaxTypes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import appsFlyer from "react-native-appsflyer";
import Api from "./src/Sports/middleware/api";
import { Url } from "./src/Sports/middleware/url";
import { Dimensions, Platform } from "react-native";
import CodePush from "react-native-code-push";
import { YSConfig } from "./ysConfig";
import RegengOverlay from "./src/components/modal/regengOverlay";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./AnyThinkAds/ATReactNativeSDK";

import { TermsAcceptContextProvider } from "./src/contexts/TermsAcceptedContext";
import { TermsAcceptContextProvider as TermsAcceptContextProviderA } from "./srcA/contexts/TermsAcceptedContext";
import { AdsBannerContextProvider } from "./src/contexts/AdsBannerContext";
import { AdsBannerContextProvider as AdsBannerContextProviderA } from "./srcA/contexts/AdsBannerContext";
import NetInfo from "@react-native-community/netinfo";
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

  const getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    const ipAddress = res.data.IPv4;
    if (ipAddress != null && ipAddress != undefined) {
      YSConfig.instance.setNetworkIp(ipAddress);
      // checkVersion(ipAddress);
    }
  };

  // const checkVersion = async (ipAddress: string) => {
  //   const checkVersionReq: CheckVersionRequest = {
  //     ip_address: ipAddress,
  //     channel_id: UMENG_CHANNEL,
  //     version_number: APP_VERSION,
  //     product: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
  //     mobile_os: Platform.OS,
  //     mobile_model: "HUAWEIP20",
  //   };

  //   const { data: response } = await axios.post(
  //     `${API_DOMAIN}version/v1/check`,
  //     checkVersionReq
  //   );

  //   const res = response.data.version;
  //   const v1 = parseInt(APP_VERSION.replace(/\./g, ""), 10);
  //   const v2 = parseInt(res.replace(/\./g, ""), 10);

  //   console.log("ADAAAGGG");
  //   if (v2 > v1) {
  //     console.log("??");
  //     CodePush.checkForUpdate().then((update) => {
  //       // console.log('----+---')
  //       // console.log(update + "UUUUU")
  //       if (update) {
  //         console.log(update + "AZZZZ?!");
  //         setShowRegengOverlay(true);
  //       } else {
  //         console.log("EHH?");
  //       }
  //     });
  //   }

  //   return response;
  // };

  let tryToLoadCount = 0;
  let adsReadyFlag = false;

  useEffect(() => {
    // console.log("YSConfig.instance.ip");
    // console.log(YSConfig.instance.ip);
    //  getIP();
    // queryClient.prefetchQuery({
    //   queryKey: ["recommendationList"],
    //   queryFn: () =>
    //     fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
    //       .then((response) => response.json())
    //       .then((json: SuggestResponseType) => {
    //         return json.data.List;
    //       }),
    // });

    queryClient.prefetchQuery({
      queryKey: ["HomePage", 0],
      queryFn: () =>
        fetch(`${API_DOMAIN}page/v2/typepage?id=0`)
          .then((response) => response.json())
          .then((json: VodCarousellResponseType) => {
            return json;
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

    const fetchVods = (page: number) =>
      fetch(`${API_DOMAIN}miniVod/v2/miniVod?page=${page}&limit=300`)
        .then((response) => response.json())
        .then((json: MiniVideoResponseType) => {
          return json.data.List;
        });

    type MiniVideoResponseType = {
      data: {
        List: Array<MiniVideo>;
      };
    };
    queryClient.prefetchInfiniteQuery(["watchAnytime"], ({ pageParam = 1 }) =>
      fetchVods(pageParam)
    );

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

  return (
    <View style={{ flex: 1, backgroundColor: '#161616' }}>
      <TermsAcceptContextProviderA>
        <TermsAcceptContextProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AdsBannerContextProviderA>
                  <AdsBannerContextProvider>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                      <BottomSheetModalProvider>
                        {YSConfig.instance.areaConfig != null &&
                        YSConfig.instance.areaConfig == true ? (
                          // B面的B面
                          <Nav />
                        ) : (
                          // B面里的A面
                          <NavA />
                        )}
                      </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                  </AdsBannerContextProvider>
                </AdsBannerContextProviderA>
              </PersistGate>
              {showRegengOverlay && <RegengOverlay />}
            </Provider>
          </QueryClientProvider>
        </TermsAcceptContextProvider>
      </TermsAcceptContextProviderA>
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
