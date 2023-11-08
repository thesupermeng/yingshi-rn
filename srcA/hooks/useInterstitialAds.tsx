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

      console.log("====== show banner ======");
      console.log(currentRoute);

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

      if (adsID != null) {
        if (currentRoute == "首页") {
          homePageShown = true;
          console.log("homePageShown");
          console.log(homePageShown);
        }

        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {
          // asd
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {
          ATInterstitialRNSDK.showAd(adsID);
        }

        //
      }
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

    // not vip
    if (
      Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
      userState.userToken === ""
    ) {
      loadInterstitial(interstitialPlacementId);
      setTimeout(() => {
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {
      console.log("VIP no ads");
    }
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
    console.log("====== currentRoute ======");
    console.log(currentRoute);
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

    console.log("homePageShown");
    console.log(homePageShown);

    if (adsID != null) {
      setTimeout(() => {
        showInterstitial(adsID);
      }, 100);
    }

    //   if (
    //     Number(userState.userMemberExpired) <=
    //       Number(userState.userCurrentTimestamp) ||
    //     userState.userToken === ""
    //   ) {
    //     // not member, then render
    //     renderInterstitial(currentRoute ?? "");
    //   }

    //}, [adsReadyFlag, currentRoute]);
  }, [currentRoute]);

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
