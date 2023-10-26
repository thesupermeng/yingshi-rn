import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
    ATRNSDK,
    ATRewardedVideoRNSDK,
    ATInterstitialRNSDK,
    ATBannerRNSDK,
  } from "../../AnyThinkAds/ATReactNativeSDK";
import DeviceInfo from "react-native-device-info";
import { Dimensions, Platform, StatusBar } from "react-native";
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



interface Props{
    children: ReactNode; 
}

export const AdsBannerContext = createContext<{setRoute: any, setNavbarHeight: any}>({
    setRoute: () => {}, 
    setNavbarHeight: 0

})

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const getBannerPlacementId = (routeName: string|null) => {
    if (routeName == "播放" || routeName == "电视台播放") {
        // video player page
        if (Platform.OS === "android") {
          return (ANDROID_PLAY_DETAILS_BANNER_ADS);
        } else if (Platform.OS === "ios") {
          return (IOS_PLAY_DETAILS_BANNER_ADS);
        }
      } else if (
        routeName == "PlaylistDetail" ||
        routeName == "体育详情"
      ) {
        // playlist detail
        if (Platform.OS === "android") {
          return (ANDROID_TOPIC_DETAILS_BANNER_ADS);
        } else if (Platform.OS === "ios") {
          return (IOS_TOPIC_DETAILS_BANNER_ADS);
        }
      } else if (routeName == "Home" || routeName == "首页") {
        //home page
        if (Platform.OS === "android") {
          return (ANDROID_HOME_PAGE_BANNER_ADS);
        } else if (Platform.OS === "ios") {
          return (IOS_HOME_PAGE_BANNER_ADS);
        }
      }
      //播单
      else if (routeName == "播单" || routeName == "体育") {
        // playlist
        if (Platform.OS === "android") {
          return (ANDROID_TOPIC_TAB_BANNER_ADS);
        } else if (Platform.OS === "ios") {
          return (IOS_TOPIC_TAB_BANNER_ADS);
        }
      } else if (
        routeName === null ||
        !pageWithNavbar.includes(routeName) &&
        !pageNoNavbar.includes(routeName)
      ) {
        // console.log("page not included in requirement");
        // no banner
        return null
      }
    
}

const hideAllBanner = () => {
    const androidIds = [
        ANDROID_HOME_PAGE_BANNER_ADS, 
        ANDROID_PLAY_DETAILS_BANNER_ADS,
        ANDROID_TOPIC_DETAILS_BANNER_ADS,
        ANDROID_TOPIC_TAB_BANNER_ADS,
    ]
    const iosIds = [
        IOS_HOME_PAGE_BANNER_ADS, 
        IOS_PLAY_DETAILS_BANNER_ADS,
        IOS_TOPIC_DETAILS_BANNER_ADS,
        IOS_TOPIC_TAB_BANNER_ADS,
    ]

    if (Platform.OS === 'ios'){
        iosIds
        .forEach((element) => {
            ATBannerRNSDK.hideAd(element);
          });
    } else {
        androidIds
        .forEach((element) => {
            ATBannerRNSDK.hideAd(element);
          });
    }
}

export const AdsBannerContextProvider = ({children}: Props) => {
    const [route, setRoute] = useState<string|null>(null);
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [systemNavHeight, setSystemNavHeight] = useState(0)

    useEffect(()=>{
        const screenWidthInPixel = Dimensions.get('screen').width * Dimensions.get('screen').scale;
        const screenHeightInPixel = Dimensions.get('screen').height * Dimensions.get('screen').scale;
        const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * Dimensions.get('screen').scale;
        const navbarHeightInPixel = (navbarHeight != 0 ? navbarHeight - 1 : 0) * Dimensions.get("screen").scale;

        try {
          getNavigationBarHeight().then((height) => {
            // console.debug(height);
            setSystemNavHeight(height);
          });
        } catch (e) {
          // navBarHeightInPixel = 0;
        }

        console.debug('screenwidth', screenWidthInPixel)
        console.debug('screenheight', screenHeightInPixel)
        console.debug('statusbar', statusBarHeightInPixel)
        console.debug('navbar', navbarHeightInPixel)
        console.debug('systemnav', systemNavHeight)

        const adsTopInPixel =
            screenHeightInPixel -
            statusBarHeightInPixel -
            navbarHeightInPixel - 
            systemNavHeight; 
        
        let huaweiOffset = 0; 
        if (deviceBrand === "HUAWEI") {
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

        const showBanner = (routeName: string | null) => {
          // console.debug('SHOW BANNER IN ', routeName)
          hideAllBanner();

          const bannerId = getBannerPlacementId(routeName);

          if (!routeName) return;

          let x, y, width, height; 
          x=0
          let bannerHeightOnScreen = adsTopInPixel - TOPON_BANNER_HEIGHT * Dimensions.get('screen').scale + huaweiOffset
          if (pageNoNavbar.includes(routeName)) bannerHeightOnScreen += navbarHeightInPixel
          
          if (Platform.OS === 'android'){
            const scale = Dimensions.get('screen').scale
            y = bannerHeightOnScreen
            width = screenWidthInPixel
            height = TOPON_BANNER_HEIGHT * scale
          } else if (Platform.OS === 'ios'){ // for ios divide back the scale coz using pt not px 
            const scale = Dimensions.get('screen').scale
            y = bannerHeightOnScreen / scale
            width = screenWidthInPixel / scale
            height = TOPON_BANNER_HEIGHT
          }
          console.debug(x, y, width, height)
          //show banner
          ATBannerRNSDK.showAdInRectangle(
            bannerId,
            ATBannerRNSDK.createShowAdRect(
              x,
              y,
              width, 
              height
            ),
          );
        

          ATBannerRNSDK.reShowAd(bannerId)
        };

        showBanner(route)

        // console.log('banner in ', route)
        // console.log('bottom tab', navbarHeight)


    },[route, navbarHeight])

    useEffect(() => { // init banner 
      const settings = {};
      const screenWidthInPixel = Dimensions.get('screen').width * Dimensions.get('screen').scale;
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

    return (
        <AdsBannerContext.Provider value={{setRoute, setNavbarHeight}} >
            {children}
        </AdsBannerContext.Provider>
    )
}