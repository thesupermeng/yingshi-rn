import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Nav from './src/navigation/nav';
import NavA from './srcA/navigation/nav';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {NetworkInfo} from 'react-native-network-info';
import {showToast} from './src/Sports/utility/toast';
import axios from 'axios';
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

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK
} from './AnyThinkAds/ATReactNativeSDK';

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

  const getIP = () => {
    NetworkInfo.getIPAddress().then((ipAddress) => {
      if (ipAddress != null) {
        checkVersion(ipAddress);
      }
    });
  };

  const checkVersion = async (ipAddress: string) => {
    const checkVersionReq: CheckVersionRequest = {
      ip_address: ipAddress,
      channel_id: UMENG_CHANNEL,
      version_number: APP_VERSION,
      product: "影视TV-ANDROID",
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

    if (v2 > v1) {
      CodePush.sync(
        {
          installMode: CodePush.InstallMode.IMMEDIATE,
          updateDialog: {
            optionalIgnoreButtonLabel: "取消",
            optionalInstallButtonLabel: "更新",
            optionalUpdateMessage: "发现新版本，要现在更新吗？",
          },
        },
        (syncStatus) => {
          switch (syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
              console.log("CODEPUSH STATUS : Checking for updates");
              break;

            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
              console.log("CODEPUSH STATUS : Downloading package");
              break;

            case CodePush.SyncStatus.INSTALLING_UPDATE:
              console.log("CODEPUSH STATUS : Installing update");
              break;

            case CodePush.SyncStatus.UP_TO_DATE:
              console.log("CODEPUSH STATUS : Up to date");
              break;

            case CodePush.SyncStatus.UPDATE_INSTALLED:
              console.log("CODEPUSH STATUS : Done installing");
              // restart
              break;

            case CodePush.SyncStatus.UNKNOWN_ERROR:
              console.log("CODEPUSH STATUS : Error");
              break;
          }
        }
      );
    }

    return response;
  };

  useEffect(() => {
    getIP();
    queryClient.prefetchQuery({
      queryKey: ["recommendationList"],
      queryFn: () =>
        fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
          .then((response) => response.json())
          .then((json: SuggestResponseType) => {
            return json.data.List;
          }),
    });

    queryClient.prefetchQuery({
      queryKey: ["HomePage", 0],
      queryFn: () =>
        fetch(`${API_DOMAIN}page/v2/typepage?id=0`)
          .then((response) => response.json())
          .then((json: VodCarousellResponseType) => {
            return json;
          }),
    });

    queryClient.prefetchQuery({
      queryKey: ["filterOptions"],
      queryFn: () =>
        fetch(`${API_DOMAIN}type/v1/type`)
          .then((response) => {
            return response.json();
          })
          .then((json: FilterOptionsResponseType) => {
            return json.data;
          }),
      staleTime: Infinity,
    });

    queryClient.prefetchQuery({
      queryKey: ["HomePageNavOptions"],
      queryFn: () =>
        fetch(`${API_DOMAIN}nav/v1/navItems`, {})
          .then((response) => response.json())
          .then((json: NavOptionsResponseType) => {
            return json.data;
          }),
      staleTime: Infinity,
    });

    queryClient.prefetchQuery({
      queryKey: ["LiveTVStations"],
      queryFn: () =>
        fetch(`${API_DOMAIN}live/v1/livestations`, {})
          .then((response) => response.json())
          .then((json: LiveTVStationsResponseType) => {
            return json.data;
          }),
      staleTime: Infinity,
    });

    const fetchPlaylist = (page: number) =>
      fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
        .then((response) => response.json())
        .then((json: VodPlaylistResponseType) => {
          return Object.values(json.data.List);
        });

    queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
      fetchPlaylist(pageParam)
    );

    const fetchVods = (page: number) =>
      fetch(`${API_DOMAIN}miniVod/v2/miniVod?page=${page}&limit=100`)
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

    queryClient.prefetchQuery({
      queryKey: ["matchesNavOptions"],
      queryFn: () =>
        Api.call(Url.sportTypes, {}, "GET").then((res): {
          has_submenu: boolean;
          ids: Array<number>;
          type: string;
        }[] => {
          return res.data;
        }),
      staleTime: Infinity,
    });

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
    initBannerAdListener();
    initInterstitialAdListener();
  }

  const initBannerAdListener = () => {
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {
      console.log("ATBannerLoaded: " + event.placementId);
    });

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {
      console.warn(
        "ATBannerLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
      );
    });

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {
      console.log(
        "ATBannerShow: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {
        console.log(
          "ATBannerCloseButtonTapped: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
        );
      }
    );

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {
      console.log(
        "ATBannerClick: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {
      console.log(
        "ATBannerRefresh: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {
      console.log(
        "ATBannerRefreshFail: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });
  };

  const loadBanner = (bannerPlacementId) => {
    console.log("loadBanner ....");

    var settings = {};
    if (Platform.OS === "android") {
      const deviceWidthInPixel =
        Dimensions.get("window").width * Dimensions.get("window").scale;

      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        deviceWidthInPixel,
        TOPON_BANNER_HEIGHT
      );

      settings[ATBannerRNSDK.kATBannerAdAdaptiveWidth] = deviceWidthInPixel;
      settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] =
        ATBannerRNSDK.kATBannerAdAdaptiveOrientationCurrent;
      //    settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] = ATBannerRNSDK.kATBannerAdAdaptiveOrientationPortrait;
      //    settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] = ATBannerRNSDK.kATBannerAdAdaptiveOrientationLandscape;
    } else if (Platform.OS === "ios") {
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        TOPON_BANNER_WIDTH,
        TOPON_BANNER_HEIGHT
      );

      settings[ATBannerRNSDK.kATBannerAdAdaptiveWidth] = TOPON_BANNER_WIDTH;
      settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] =
        ATBannerRNSDK.kATBannerAdAdaptiveOrientationCurrent;
      //    settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] = ATBannerRNSDK.kATBannerAdAdaptiveOrientationPortrait;
      //    settings[ATBannerRNSDK.kATBannerAdAdaptiveOrientation] = ATBannerRNSDK.kATBannerAdAdaptiveOrientationLandscape;
    }

    ATBannerRNSDK.loadAd(bannerPlacementId, settings);
  };

  const initInterstitialAdListener = () => {
    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialLoaded, (event) => {
      console.log('ATInterstitialLoaded: ' + event.placementId);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialFail, (event) => {
      console.warn('ATInterstitialLoadFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialAdShow, (event) => {
      console.log('ATInterstitialAdShow: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialPlayStart, (event) => {
      console.log('ATInterstitialPlayStart: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialPlayEnd, (event) => {
      console.log('ATInterstitialPlayEnd: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialPlayFail, (event) => {
      console.log('ATInterstitialPlayFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg + ', adCallbackInfo: ' + event.adCallbackInfo);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialClick, (event) => {
      console.log('ATInterstitialClick: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
    });

    ATInterstitialRNSDK.setAdListener(ATInterstitialRNSDK.onInterstitialClose, (event) => {
      console.log('ATInterstitialClose: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
    });
}

const loadInterstitial = (interstitialPlacementId) => {
 console.log('====================================');
 console.log('loadInterstitial');
 console.log('====================================');

 var settings = {};
 settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;
//    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = true;

 ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);
};

const isInterstitialReady = (interstitialPlacementId) => {
ATInterstitialRNSDK.hasAdReady(interstitialPlacementId).then(isAdReady => {
 console.log('====================================');
 console.log("isInterstitialReady: " + isAdReady)
 console.log('====================================');
});

ATInterstitialRNSDK.checkAdStatus(interstitialPlacementId).then(adStatusInfo => {
 console.log('====================================');
 console.log("isInterstitialReady: checkAdStatus: " + adStatusInfo)
 console.log('====================================');
});
};

const showInterstitial = (interstitialPlacementId) => {
 console.log('====================================');
 console.log('showInterstitial ....');
 console.log('====================================');
 ATInterstitialRNSDK.showAd(interstitialPlacementId);
};

if (Platform.OS === 'android') {
 loadBanner(ANDROID_HOME_PAGE_BANNER_ADS);
 loadInterstitial(ANDROID_HOME_PAGE_POP_UP_ADS);
 isInterstitialReady(ANDROID_HOME_PAGE_POP_UP_ADS)
 showInterstitial(ANDROID_HOME_PAGE_POP_UP_ADS)
} 
else if (Platform.OS === 'ios') {
 loadBanner(IOS_HOME_PAGE_BANNER_ADS);
 loadInterstitial(IOS_HOME_PAGE_POP_UP_ADS);
 isInterstitialReady(IOS_HOME_PAGE_POP_UP_ADS)
 showInterstitial(IOS_HOME_PAGE_POP_UP_ADS)
}

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
//   installMode: CodePush.InstallMode.IMMEDIATE,  // 安装模式: IMMEDIATE(立即安装) ON_NEXT_RESTART(下次启动时安装) ON_NEXT_RESUME(下次恢复到前台时安装) ON_NEXT_SUSPEND(下次挂起时安装)
//   minimumBackgroundDuration: 60 * 2, // 在后台静默更新的最小时间: 0(立即更新) 60(后台静默更新的最小时间为60秒)
// };

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
};

App = CodePush(codePushOptions)(App);

export default App;
