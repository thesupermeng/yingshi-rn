import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/ATReactNativeSDK";
import DeviceInfo from "react-native-device-info";
import {
  Dimensions,
  LogBox,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  ANDROID_PLAY_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_TAB_BANNER_ADS,
  IOS_HOME_PAGE_BANNER_ADS,
  IOS_PLAY_DETAILS_BANNER_ADS,
  IOS_TOPIC_DETAILS_BANNER_ADS,
  IOS_TOPIC_TAB_BANNER_ADS,
  TOPON_BANNER_HEIGHT,
} from "../utility/constants";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { userModel } from "../types/userType";
import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks/hooks";
import { SettingsReducerState } from "../redux/reducers/settingsReducer";
import { screenModel } from "../types/screenType";
// LogBox.ignoreAllLogs();
interface Props {
  children: ReactNode;
}

export const AdsBannerContext = createContext<{
  setRoute: any;
  setNavbarHeight: any;
  currentRoute: string | null;
}>({
  setRoute: () => {},
  setNavbarHeight: () => {},
  currentRoute: "",
});

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const scale = Dimensions.get("screen").scale;

export const AdsBannerContextProvider = ({ children }: Props) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  // const windowHeight2 = useWindowDimensions().height;
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const settingState: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );
  // const [orientation, _] =

  const initBannerAdListener = () => {
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {
      console.log("ATBannerLoaded: " + event.placementId);
    });

    let latestMsg = "";
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {
      if (latestMsg != event.errorMsg) {
        latestMsg = event.errorMsg;
        console.warn(
          "ATBannerLoadFail: " +
            event.placementId +
            ", errorMsg: " +
            event.errorMsg
        );
      }
    });

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {
      // console.log(
      //   "ATBannerShow: " +
      //     event.placementId +
      //     ", adCallbackInfo: " +
      //     event.adCallbackInfo
      // );
      console.log("ATBannerShow: " + event.placementId);
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
      // console.log(
      //   "ATBannerRefresh: " +
      //     event.placementId +
      //     ", errorMsg: " +
      //     event.errorMsg +
      //     ", adCallbackInfo: " +
      //     event.adCallbackInfo
      // );
      console.log("ATBannerRefresh: " + event.placementId);
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

  const initBanner = () => {
    // init banner
    const settings = {};
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;
    if (Platform.OS === "android") {
      // @ts-ignore
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );
      // load all ad first
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      // @ts-ignore
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);
      ATBannerRNSDK.loadAd(IOS_TOPIC_TAB_BANNER_ADS, settings);
    }
  };

  const getBannerPlacementId = (routeName: string | null) => {
    if (
      routeName == "播放" ||
      routeName == "电视台播放" ||
      routeName == "体育详情"
    ) {
      // video player page
      if (Platform.OS === "android") {
        return ANDROID_PLAY_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_PLAY_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "PlaylistDetail") {
      // playlist detail
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "Home" || routeName == "首页") {
      //home page
      if (Platform.OS === "android") {
        return ANDROID_HOME_PAGE_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_HOME_PAGE_BANNER_ADS;
      }
    }
    //播单
    else if (routeName == "播单" || routeName == "体育") {
      // playlist
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_TAB_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_TAB_BANNER_ADS;
      }
    } else if (
      routeName === null ||
      (!pageWithNavbar.includes(routeName) && !pageNoNavbar.includes(routeName))
    ) {
      // console.log("page not included in requirement");
      // no banner
      return null;
    }
  };

  const hideAllBanner = () => {
    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

    if (Platform.OS === "ios") {
      iosIds.forEach((element) => {
        ATBannerRNSDK.hideAd(element);
      });
    } else {
      androidIds.forEach((element) => {
        ATBannerRNSDK.hideAd(element);
      });
    }
  };

  const showBanner = (
    routeName: string | null,
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    // console.debug('SHOW BANNER IN ', routeName)
    hideAllBanner();

    const bannerId = getBannerPlacementId(routeName);

    if (!routeName) return;
    // console.log("showBanner");
    // console.log("routeName");
    // console.log(routeName);
    //console.log("======== banner init ======");
    // console.debug(x, y, width, height)
    if (bannerId == null) {
      setTimeout(() => {
        hideAllBanner();
      }, 50);
      return;
    }
    const settings = {};
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;
    if (Platform.OS === "android") {
      // @ts-ignore
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );
      // load all ad first (android)
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady) => {
        // console.log("isAdReady for " + routeName + " (android)");
        // console.log(isAdReady);
        if (!isAdReady) {
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            if (screenState.isPlayerFullScreen) {
              return;
            }
            // console.log("show banner here");
            //show banner
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 50);
        } else {
          setTimeout(() => {
            if (screenState.isPlayerFullScreen) {
              return;
            }
            //console.log("show");

            // if (settingState.appOrientation !== "PORTRAIT") {
            // return;

            // }
            hideAllBanner();
            //show banner
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 10);
        }
      });
    }
    if (Platform.OS === "ios") {
      // @ts-ignore
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );
      //  (IOS)
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady: boolean) => {
        // console.log("isAdReady for " + routeName + " (IOS)");
        // console.log(isAdReady);
        if (isAdReady == false) {
          //   console.log(1111);
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            //show banner
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );
            ATBannerRNSDK.reShowAd(bannerId);
          }, 100);
        } else {
          //  console.log(2222);
          setTimeout(() => {
            hideAllBanner();
            //show banner
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 10);
        }
      });
    }
  };
  //the rest

  const showBannerInPosition = async () => {
    if (!route) return;
    if (Platform.OS === "android") {
      const screenWidthInPixel = Dimensions.get("screen").width * scale;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:148 ~ useEffect ~ screenWidthInPixel:", screenWidthInPixel)
      const screenHeightInPixel = Dimensions.get("screen").height * scale;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:150 ~ useEffect ~ screenHeightInPixel:", screenHeightInPixel)
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:152 ~ useEffect ~ statusBarHeightInPixel:", statusBarHeightInPixel)
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:154 ~ useEffect ~ navbarHeightInPixel:", navbarHeightInPixel)

      setSystemNavHeight(await getNavigationBarHeight());
      // console.log("🚀 ~ file: AdsBannerContext.tsx:143 ~ AdsBannerContextProvider ~ systemNavHeight:", systemNavHeight)

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:166 ~ useEffect ~ adsTopInPixel:", adsTopInPixel)

      let huaweiOffset = 0;

      // console.log("deviceBrand");
      // console.log(deviceBrand);
      // console.log("deviceName");
      // console.log(deviceName);

      // console.log("isHuaweiNova");
      // console.log(isHuaweiNova);

      let deviceName = await DeviceInfo.getDeviceName();
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {
        // This is a Huawei device
        let deviceHeight = Dimensions.get("screen").height;
        let windowHeight = Dimensions.get("window").height;
        let sH = StatusBar.currentHeight || 0;
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;
        if (bottomNavBarHeight > 0) {
          huaweiOffset = -95;
        } else {
          huaweiOffset = 75;
        }
      }

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen =
        adsTopInPixel - TOPON_BANNER_HEIGHT * scale + huaweiOffset;
      if (pageNoNavbar.includes(route)) {
        bannerHeightOnScreen += navbarHeightInPixel;
        // if (isHuaweiNova) {
        //   bannerHeightOnScreen -= 5;
        // }
      }

      y = bannerHeightOnScreen;
      width = screenWidthInPixel;
      height = TOPON_BANNER_HEIGHT * scale;
      // console.debug(x, y, width, height)

      // if (isHuaweiNova) {
      //   height += 20;
      // }

      showBanner(route, x, y, width, height);
    } else if (Platform.OS === "ios") {
      const screenWidth = Dimensions.get("screen").width;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:192 ~ useEffect ~ screenWidth:", screenWidth)
      const screenHeight = Dimensions.get("screen").height;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:194 ~ useEffect ~ screenHeight:", screenHeight)
      const statusBarHeight = StatusBar.currentHeight ?? 0;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:196 ~ useEffect ~ statusBarHeight:", statusBarHeight)
      const navHeight = navbarHeight != 0 ? navbarHeight - 1 : 0;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:198 ~ useEffect ~ navHeight:", navHeight)

      const adsTopInPixel = screenHeight - statusBarHeight - navbarHeight;
      // console.log("🚀 ~ file: AdsBannerContext.tsx:201 ~ useEffect ~ adsTopInPixel:", adsTopInPixel)

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen = adsTopInPixel - TOPON_BANNER_HEIGHT;
      if (pageNoNavbar.includes(route)) bannerHeightOnScreen += navHeight;
      y = bannerHeightOnScreen;
      width = screenWidth;
      height = TOPON_BANNER_HEIGHT;
      // console.debug(x, y, width, height)

      showBanner(route, x, y, width, height);
    }
  };

  useEffect(() => {
    //console.log("======== banner init ======");

    initBannerAdListener();
    initBanner();

    return () => ATBannerRNSDK.removeAllListeners();
  }, []);

  // useEffect(() => {
  //   console.log("##################################");
  //   console.log("screenState.isPlayerFullScreen]");
  //   console.log(screenState.isPlayerFullScreen);

  // }, [screenState.isPlayerFullScreen]);

  useEffect(() => {
    // console.log("settingState.appOrientation");
    // console.log(settingState.appOrientation);
    hideAllBanner();
    // show banner logic
    if (settingState.appOrientation === "PORTRAIT") {
      if (
        Number(userState.userMemberExpired) <=
          Number(userState.userCurrentTimestamp) ||
        userState.userToken === ""
      ) {
        // not member, then show banner
        // console.debug('not member')
        setTimeout(() => {
          showBannerInPosition().then();
        }, 100);
      }
    } else {
      console.log("hide banner");
      hideAllBanner();
    }
  }, [
    route,
    navbarHeight,
    systemNavHeight,
    settingState.appOrientation,
    screenState.isPlayerFullScreen,
    windowWidth2,
  ]);

  return (
    <AdsBannerContext.Provider
      value={{ setRoute, setNavbarHeight, currentRoute: route }}
    >
      {children}
    </AdsBannerContext.Provider>
  );
};
