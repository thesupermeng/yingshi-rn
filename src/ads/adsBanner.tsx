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

  const isBannerReady = () => {
    let bannerPlacementId;
    if (Platform.OS === "android") {
      bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
    } else if (Platform.OS === "ios") {
      bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
    }
    ATBannerRNSDK.hasAdReady(bannerPlacementId).then((isAdReady) => {
      console.log("isBannerReady: " + isAdReady);
    });
  };

  const showBanner = async () => {
    const currentRouteName = route.name;
    let navBarHeightInPixel = 0;

    try {
      navBarHeightInPixel = await getNavigationBarHeight();
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
    let bannerPlacementId;

    if (currentRouteName == "播放" || currentRouteName == "PlaylistDetail") {
      if (currentRouteName == "播放") {
        if (Platform.OS === "android") {
          bannerPlacementId = ANDROID_PLAY_DETAILS_BANNER_ADS;
        } else if (Platform.OS === "ios") {
          bannerPlacementId = IOS_PLAY_DETAILS_BANNER_ADS;
        }
      } else if (currentRouteName == "PlaylistDetail") {
        if (Platform.OS === "android") {
          bannerPlacementId = ANDROID_TOPIC_DETAILS_BANNER_ADS;
        } else if (Platform.OS === "ios") {
          bannerPlacementId = IOS_TOPIC_DETAILS_BANNER_ADS;
        }
      }

      ATBannerRNSDK.showAdInPosition(
        bannerPlacementId,
        ATBannerRNSDK.kATBannerAdShowingPositionBottom
      );
    } else {
      if (currentRouteName == "Home" || currentRouteName == "首页") {
        if (Platform.OS === "android") {
          bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
        } else if (Platform.OS === "ios") {
          bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
        }
      }

      //播单
      if (currentRouteName == "Playlist") {
        if (Platform.OS === "android") {
          bannerPlacementId = ANDROID_TOPIC_TAB_BANNER_ADS;
        } else if (Platform.OS === "ios") {
          bannerPlacementId = IOS_TOPIC_TAB_BANNER_ADS;
        }
      }

      const deviceBrand = DeviceInfo.getBrand();
      let offSet = 0;
      if (deviceBrand === "HUAWEI") {
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

      ATBannerRNSDK.showAdInRectangle(
        bannerPlacementId,
        ATBannerRNSDK.createShowAdRect(
          0,
          adsTopInPixel -
            TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale +
            offSet,
          screenWidthInPixel,
          TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale
        )
      );
    }
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    // This code will run whenever the screen gains focus
    if (isFocused) {
      showBanner();
      // Your event or logic when the user navigates back
    }
  }, [isFocused]);

  useEffect(() => {
    // Access the current route name

    isBannerReady();

    showBanner();
  }, [bottomTabHeight]); // Listen to changes in navigation and screen focus

  const [navigationMode, setNavigationMode] = useState("");

  // useEffect(() => {

  //   console.log('debug')
  //   let deviceHeight = Dimensions.get('screen').height;
  //   let windowHeight = Dimensions.get('window').height;
  //   let sH = StatusBar.currentHeight || 0;
  //   let bottomNavBarHeight = deviceHeight - windowHeight - sH;

  //   if (bottomNavBarHeight > 0) {
  //       console.log(' onscreen navbar')
  //       console.log(bottomNavBarHeight)
  //       console.log('statusBarHeight: ', StatusBar.currentHeight)
  //   } else {
  //       // not onscreen navbar
  //       console.log('not onscreen navbar')
  //       console.log(bottomNavBarHeight)
  //   }
  // }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     // This function will be called when Screen1 gains focus
  //     // Get the current route name
  //     const currentRouteName = route.name;
  //     console.log(currentRouteName + "ads gained focus");

  //     // You can perform actions when the user leaves the screen here
  //     return () => {
  //       // This function will be called when Screen1 loses focus
  //       console.log(currentRouteName + "ads lost focus");
  //     };
  //   }, [])
  // );

  return <></>;
}

const styles = StyleSheet.create({});

export default memo(AdsBanner);
