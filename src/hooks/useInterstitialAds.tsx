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
    if (ready) {
      isAdsShown = true;
      ATInterstitialRNSDK.showAd(interstitialPlacementId);
    } else {
      setTimeout(() => {
        showInterstitial(interstitialPlacementId);
      }, 500);
    }
  };

  const showInterstitial = async (interstitialPlacementId: PlacementId) => {
    if (reTryLoad > 5 || isAdsShown == true) {
      return;
    }

    loadInterstitial(interstitialPlacementId);
    setTimeout(() => {
      isInterstitialReady(interstitialPlacementId);
    }, 500);
  };

  // const prepareInterstitial = async (interstitialPlacementId: PlacementId) => {
  //   for (let i = 0; i < 1; i++) {
  //     await isInterstitialReady(interstitialPlacementId);
  //     console.log("try count", i);
  //     if (i > 20 || adsReadyFlag) {
  //       break;
  //     }
  //     loadInterstitial(interstitialPlacementId);
  //     await new Promise((r) => setTimeout(r, 500));
  //   }

  //   if (
  //     Number(userState.userMemberExpired) <=
  //       Number(userState.userCurrentTimestamp) ||
  //     userState.userToken === ""
  //   ) {
  //     // not member, then render
  //     isAdsShown = true;
  //     renderInterstitial(currentRoute ?? "");
  //   } else {
  //     console.log("you are vip");
  //     isAdsShown = true;
  //     renderInterstitial(currentRoute ?? "");
  //   }
  // };

  // const renderInterstitial = (route: string) => {
  //   console.log("renderInterstitial");
  //   if (route === "首页") {
  //     if (adsReadyFlag) {
  //       showInterstitial(
  //         Platform.OS === "android"
  //           ? ANDROID_HOME_PAGE_POP_UP_ADS
  //           : IOS_HOME_PAGE_POP_UP_ADS
  //       );
  //     } else {
  //       console.log("else");

  //       // prepareInterstitial(
  //       //   Platform.OS === "android"
  //       //     ? ANDROID_HOME_PAGE_POP_UP_ADS
  //       //     : IOS_HOME_PAGE_POP_UP_ADS
  //       // );
  //     }
  //   }
  // };

  useEffect(() => {
    reTryLoad += 1;
    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_HOME_PAGE_POP_UP_ADS
        : IOS_HOME_PAGE_POP_UP_ADS
    );

    setTimeout(() => {
      showInterstitial(
        Platform.OS === "android"
          ? ANDROID_HOME_PAGE_POP_UP_ADS
          : IOS_HOME_PAGE_POP_UP_ADS
      );
    }, 400);

    //   if (
    //     Number(userState.userMemberExpired) <=
    //       Number(userState.userCurrentTimestamp) ||
    //     userState.userToken === ""
    //   ) {
    //     // not member, then render
    //     renderInterstitial(currentRoute ?? "");
    //   }

    //}, [adsReadyFlag, currentRoute]);
  }, []);

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
