import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
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
} from "@utility/constants";
import { useAppDispatch, useAppSelector, useSelector } from "./hooks";
import { AdsBannerContext } from "../contexts/AdsBannerContext";
import { screenModel } from "@type/screenType";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models/user";
import { setManualShowPopAds } from "@redux/actions/screenAction";
// LogBox.ignoreAllLogs();
type PlacementId =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
  const [adsReadyFlag, setAdsReadyFlag] = useState(false);
  const userState = useSelector<UserStateType>("userReducer");

const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const { currentRoute } = useContext(AdsBannerContext);
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});
  const dispatch = useAppDispatch();







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
          if (
            screenState.interstitialShow != true &&
            screenState.isHomeGuideShown == true
          ) {
            ATInterstitialRNSDK.showAd(adsID);
          }
        }
        //
      }
    } else {
      // console.log("====== not ready =======");
      setTimeout(() => {
        showInterstitial(interstitialPlacementId);
      }, 500);
    }
  };

  const showInterstitial = async (interstitialPlacementId: PlacementId) => {
    // not vip
    if (!User.isVip(userState.user) && retryCount < 3) {
      retryCount += 1;
      // console.log("=======  not vip ======");
      loadInterstitial(interstitialPlacementId);
      setTimeout(() => {
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {
      if (retryCount >= 3) {
        //  console.log("exceed retry limit");
      } else {
        console.log("VIP no ads");
      }
    }
  };


  useEffect(() => {
    if (screenState.manualShowPopAds == true) {
      dispatch(setManualShowPopAds(false));
      setTimeout(() => {
        showInterstitial(ANDROID_PLAY_DETAILS_POP_UP_ADS);
      }, 10); //change from 100 to 1000 for 前贴片  haven't load finish will have sound if this show first
    }
  }, [screenState.manualShowPopAds]);


  useEffect(() => {
    retryCount = 0;
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
      }, 100); //change from 100 to 1000 for 前贴片  haven't load finish will have sound if this show first
    }
  }, [currentRoute]);




  useEffect(() => {
    retryCount = 0;
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
