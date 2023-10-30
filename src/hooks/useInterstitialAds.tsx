import { useEffect, useState } from "react";
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

type PlacementId = typeof ANDROID_HOME_PAGE_POP_UP_ADS | typeof IOS_HOME_PAGE_POP_UP_ADS;

const useInterstitialAds = (interstitialPlacementId: PlacementId) =>{
  const [adsReadyFlag, setAdsReadyFlag]= useState(false)
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );


  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event:any) => {
      setAdsReadyFlag(true)
    }
  );

  const loadInterstitial = () => {
    var settings = {};
    //@ts-ignore
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;
    //    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = true;

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

  };

  const isInterstitialReady = async () => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId)
    setAdsReadyFlag(ready)
  };

  const showInterstitial = async () => {
    if (adsReadyFlag){
      ATInterstitialRNSDK.showAd(interstitialPlacementId);
    } else {
      console.log('interstitial not ready bruh')
    }
  };

  const prepareInterstitial = async () => {
    for (let i=0; i<5; i++){
      await isInterstitialReady()
      console.log('try count', i)
      if (i > 5 || adsReadyFlag){
        break;
      }
      await loadInterstitial()
    }
  }

  useEffect(() => {
    if (Number(userState.userMemberExpired) <= Number(userState.userCurrentTimestamp) || userState.userToken === ""){
      // not member, load and show interstitial. 
      prepareInterstitial()
    }
  }, [])

  useEffect(() => {
    
    if (adsReadyFlag){
      showInterstitial()
    }
  }, [adsReadyFlag])

  return; 

}

export default useInterstitialAds;