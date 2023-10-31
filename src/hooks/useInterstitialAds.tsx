import { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/ATReactNativeSDK";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "../utility/constants";
import { userModel } from "../types/userType";
import { RootState } from "../redux/store";
import { useAppSelector } from "./hooks";
import { AdsBannerContext } from "../contexts/AdsBannerContext";

type PlacementId =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS;

const useInterstitialAds = () => {
  const [adsReadyFlag, setAdsReadyFlag] = useState(false);
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const { currentRoute } = useContext(AdsBannerContext);
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

  let isAdsShown = false;
  let reTryLoad = 0;

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
  };

  const showInterstitial = async (interstitialPlacementId: PlacementId) => {
    if (reTryLoad > 3 || isAdsShown == true) {
      return;
    }

    if (adsReadyFlag) {
      isAdsShown = true;
      ATInterstitialRNSDK.showAd(interstitialPlacementId);
    } else {
      console.log("interstitial not ready bruh");
      reTryLoad += 1;
      loadInterstitial(interstitialPlacementId);
      await new Promise((r) => setTimeout(r, 500));
      isInterstitialReady(interstitialPlacementId);
      await new Promise((r) => setTimeout(r, 200));
      showInterstitial(interstitialPlacementId);
    }
  };

  const prepareInterstitial = async (interstitialPlacementId: PlacementId) => {
    for (let i = 0; i < 1; i++) {
      await isInterstitialReady(interstitialPlacementId);
      console.log("try count", i);
      if (i > 5 || adsReadyFlag) {
        break;
      }
      await loadInterstitial(interstitialPlacementId);
      await new Promise((r) => setTimeout(r, 1000));
    }
  };

  const renderInterstitial = (route: string) => {
    if (route === "首页") {
      if (adsReadyFlag) {
        showInterstitial(
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS
        );
      } else {
        // prepareInterstitial(
        //   Platform.OS === "android"
        //     ? ANDROID_HOME_PAGE_POP_UP_ADS
        //     : IOS_HOME_PAGE_POP_UP_ADS
        // );
      }
    }
  };

  useEffect(() => {
    if (
      Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
      userState.userToken === ""
    ) {
      // not member, then render
      renderInterstitial(currentRoute ?? "");
    }
  }, [adsReadyFlag, currentRoute]);

  // useEffect(() => {
  //   if (currentRoute){
  //     if (!visitCount[currentRoute]){
  //       visitCount[currentRoute] = 0
  //       setVisitCount({...visitCount})
  //     }
  //     visitCount[currentRoute] += 1;
  //     setVisitCount({...visitCount})

  //     // // repeat this line for each page to customize their repeat logic...
  //     // if (currentRoute === '首页'){
  //     //   if (visitCount[currentRoute] > 1){
  //     //     setAdsReadyFlag(false)
  //     //   }
  //     // }

  //   }
  // }, [currentRoute])

  return;
};

export default useInterstitialAds;
