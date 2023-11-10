import { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/ATReactNativeSDK";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "../utility/constants";
import { userModel } from "../types/userType";
import { RootState } from "../redux/store";
import { useAppSelector } from "./hooks";
import { AdsBannerContext } from "../contexts/AdsBannerContext";
import { screenModel } from "../types/screenType";

type PlacementId =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
const useInterstitialAds = () => {
  const [adsReadyFlag, setAdsReadyFlag] = useState(false);
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const { currentRoute } = useContext(AdsBannerContext);
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

  const loadInterstitial = (interstitialPlacementId: PlacementId) => {
    var settings = {};
    //@ts-ignore
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;
    //    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = true;

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);
  };

  const isInterstitialReady = async (interstitialPlacementId: PlacementId) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);
    setAdsReadyFlag(ready);
    if (ready) {
      let adsID: PlacementId;
      adsID = null;
      if (currentRoute == "首页") {
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放"
      ) {
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {
        homePageShown = true;
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {
          // asd
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {
          homePageShown = true;
          ATInterstitialRNSDK.showAd(adsID);
        }
        //
      }
    } else {
      console.log("====== not ready =======");
      setTimeout(() => {
        showInterstitial(interstitialPlacementId);
      }, 500);
    }
  };

  const showInterstitial = async (interstitialPlacementId: PlacementId) => {
    // not vip
    if (
      Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
      userState.userToken === ""
    ) {
      console.log("=======  not vip ======");
      loadInterstitial(interstitialPlacementId);
      setTimeout(() => {
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {
      console.log("VIP no ads");
    }
  };

  useEffect(() => {
    let adsID: PlacementId;
    adsID = null;

    if (currentRoute == "首页" && homePageShown == false) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_HOME_PAGE_POP_UP_ADS
          : IOS_HOME_PAGE_POP_UP_ADS;
    } else if (
      currentRoute == "播放" ||
      currentRoute == "体育详情" ||
      currentRoute == "电视台播放"
    ) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_PLAY_DETAILS_POP_UP_ADS
          : IOS_PLAY_DETAILS_POP_UP_ADS;
    }

    if (adsID != null) {
      setTimeout(() => {
        showInterstitial(adsID);
      }, 100);
    }
  }, [currentRoute]);

  useEffect(() => {
    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_HOME_PAGE_POP_UP_ADS
        : IOS_HOME_PAGE_POP_UP_ADS
    );

    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_PLAY_DETAILS_POP_UP_ADS
        : IOS_PLAY_DETAILS_POP_UP_ADS
    );

    if (Platform.OS === "ios") {
      setTimeout(() => {
        showInterstitial(
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS
        );
      }, 100);
    }
  }, []);

  return;
};

export default useInterstitialAds;
