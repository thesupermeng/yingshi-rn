import React, { useMemo, useState, memo, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  View,
} from "react-native";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";

import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/ATReactNativeSDK";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
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
import DeviceInfo from "react-native-device-info";

interface Props {
  bottomTabHeight: number;
}

function AdsBanner({ bottomTabHeight = 0 }: Props) {
  const route = useRoute();
  const [bannerPlacementId, setBannerPlacementId] = useState("");
  const isFocused = useIsFocused();
  const [navBarHeightInPixel, setNavBarHeightInPixel] = useState(0);

  const pageWithNavbar = ["首页", "播单", "体育"];
  const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];

  try {
    getNavigationBarHeight().then((height) => {
      console.debug(height);
      setNavBarHeightInPixel(height);
    });
  } catch (e) {
    // navBarHeightInPixel = 0;
  }

  let screenWidthInPixel =
    Dimensions.get("screen").width * Dimensions.get("screen").scale;
  let screenHeightInPixel =
    Dimensions.get("screen").height * Dimensions.get("screen").scale;

  let statusBarHeightInPixel =
    (StatusBar.currentHeight ?? 0) * Dimensions.get("screen").scale;

  let bottomTabHeightInPixel =
    (bottomTabHeight != 0 ? bottomTabHeight - 1 : 0) *
    Dimensions.get("screen").scale;

  let adsTopInPixel =
    screenHeightInPixel -
    statusBarHeightInPixel -
    navBarHeightInPixel -
    bottomTabHeightInPixel;

  // console.log('screen height', screenHeightInPixel)
  // console.log('status bar heeight', statusBarHeightInPixel)
  // console.log('bottom tab height', bottomTabHeightInPixel)
  // console.log('ads on top ', adsTopInPixel)

  const deviceBrand = DeviceInfo.getBrand();
  let offSet = 0;
  if (deviceBrand === "HUAWEI") {
    console.log("is huawei device");
    // This is a Huawei device
    let deviceHeight = Dimensions.get("screen").height;
    let windowHeight = Dimensions.get("window").height;
    let sH = StatusBar.currentHeight || 0;
    let bottomNavBarHeight = deviceHeight - windowHeight - sH;
    if (bottomNavBarHeight > 0) {
      console.log(" onscreen navbar");
      offSet = -95;
    } else {
      console.log(" not onscreen navbar");
      offSet = 75;
    }
  }

  const hideBannerExcept = (bannerId: string) => {
    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];
    androidIds
      .filter((id) => bannerId !== id)
      .forEach((element) => {
        ATBannerRNSDK.hideAd(element);
        // console.debug('hide', element)
      });
  };

  const showBanner = (bannerId: string) => {
    const currentRouteName = route.name;
    // console.log('current route', currentRouteName)

    if (
      !pageWithNavbar.includes(currentRouteName) &&
      !pageNoNavbar.includes(currentRouteName)
    ) {
      ATBannerRNSDK.hideAd(bannerPlacementId); //hide ad if not these 4 page
      console.log("no banner");
    } else if (pageWithNavbar.includes(currentRouteName)) {
      //show banner above nav

      ATBannerRNSDK.showAdInRectangle(
        bannerId,
        ATBannerRNSDK.createShowAdRect(
          0,
          adsTopInPixel -
            TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale +
            offSet,
          screenWidthInPixel,
          TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale
        )
      );
    } else if (pageNoNavbar.includes(currentRouteName)) {
      ATBannerRNSDK.showAdInRectangle(
        bannerId,
        ATBannerRNSDK.createShowAdRect(
          0,
          adsTopInPixel -
            TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale +
            offSet,
          screenWidthInPixel,
          TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale
        )
      );
    } else {
      // for future expansion
    }
  };

  useEffect(() => {
    const currentRouteName = route.name;
    // console.log('route changed to ', currentRouteName)
    if (!isFocused) {
      console.log("ignore");
    } else if (currentRouteName == "播放" || currentRouteName == "电视台播放") {
      // video player page
      if (Platform.OS === "android") {
        setBannerPlacementId(ANDROID_PLAY_DETAILS_BANNER_ADS);
      } else if (Platform.OS === "ios") {
        setBannerPlacementId(IOS_PLAY_DETAILS_BANNER_ADS);
      }
    } else if (
      currentRouteName == "PlaylistDetail" ||
      currentRouteName == "体育详情"
    ) {
      // playlist detail
      if (Platform.OS === "android") {
        setBannerPlacementId(ANDROID_TOPIC_DETAILS_BANNER_ADS);
      } else if (Platform.OS === "ios") {
        setBannerPlacementId(IOS_TOPIC_DETAILS_BANNER_ADS);
      }
    } else if (currentRouteName == "Home" || currentRouteName == "首页") {
      //home page
      if (Platform.OS === "android") {
        setBannerPlacementId(ANDROID_HOME_PAGE_BANNER_ADS);
      } else if (Platform.OS === "ios") {
        setBannerPlacementId(IOS_HOME_PAGE_BANNER_ADS);
      }
    }
    //播单
    else if (currentRouteName == "播单" || currentRouteName == "体育") {
      // playlist
      if (Platform.OS === "android") {
        setBannerPlacementId(ANDROID_TOPIC_TAB_BANNER_ADS);
      } else if (Platform.OS === "ios") {
        setBannerPlacementId(IOS_TOPIC_TAB_BANNER_ADS);
      }
    } else if (
      !pageWithNavbar.includes(currentRouteName) &&
      !pageNoNavbar.includes(currentRouteName)
    ) {
      console.log("page not included in requirement");
      // no banner
      setBannerPlacementId("");
      hideBannerExcept("");
    }
  }, [route, isFocused]);

  useEffect(() => {
    if (isFocused) {
      if (bannerPlacementId !== "") {
        // console.log('show banner in ', bannerPlacementId, ' ', route.name)
        hideBannerExcept(bannerPlacementId);
        ATBannerRNSDK.reShowAd(bannerPlacementId);
        showBanner(bannerPlacementId);
      }
    }
  }, [isFocused, bannerPlacementId, navBarHeightInPixel, bottomTabHeight]);

  useEffect(() => {
    const settings = {};
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
  }, []);

  return <></>;
}
export default memo(AdsBanner);
