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

type PlacementId = typeof ANDROID_HOME_PAGE_POP_UP_ADS | typeof IOS_HOME_PAGE_POP_UP_ADS;

const useInterstitialAds = () =>{
  const [adsReadyFlag, setAdsReadyFlag]= useState(false)
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const {currentRoute} = useContext(AdsBannerContext);

  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event:any) => {
      setAdsReadyFlag(true)
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
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId)
    setAdsReadyFlag(ready)
  };

  const showInterstitial = async (interstitialPlacementId: PlacementId) => {
    if (adsReadyFlag){
      ATInterstitialRNSDK.showAd(interstitialPlacementId);
    } else {
      console.log('interstitial not ready bruh')
    }
  };

  const prepareInterstitial = async (interstitialPlacementId: PlacementId) => {
    for (let i=0; i<1; i++){
      await isInterstitialReady(interstitialPlacementId)
      console.log('try count', i)
      if (i > 5 || adsReadyFlag){
        break;
      }
      await loadInterstitial(interstitialPlacementId)
      await new Promise(r => setTimeout(r, 1000));

    }
  }

  const renderInterstitial = () =>{
    if (currentRoute === '首页'){
      if (adsReadyFlag){
        showInterstitial(Platform.OS === 'android' ? ANDROID_HOME_PAGE_POP_UP_ADS : IOS_HOME_PAGE_POP_UP_ADS)
      }
      else {
        prepareInterstitial(Platform.OS === 'android' ? ANDROID_HOME_PAGE_POP_UP_ADS : IOS_HOME_PAGE_POP_UP_ADS)
      } 
    }
  }

  useEffect(() => {
    if (Number(userState.userMemberExpired) <= Number(userState.userCurrentTimestamp) || userState.userToken === ""){
      // not member, then render
      renderInterstitial();
    }
    
  }, [adsReadyFlag, currentRoute])

  useEffect(() => {
    const REPEAT = true// note : if you want the page included in the "repeatRoute" to keep showing interstitial whenever the user re-visits the page, set to true. 
    // current implementation only work for one page can repeat. if multiple page needs to repeat, additional logic need to be implemented. 
    const repeatRoute = '首页'
    if (REPEAT){
      if (currentRoute !== repeatRoute){
        setAdsReadyFlag(false)
      }
    }
  }, [currentRoute])

  return; 

}

export default useInterstitialAds;