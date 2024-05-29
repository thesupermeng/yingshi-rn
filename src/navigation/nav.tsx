import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  NavigationState,
  useTheme,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import PlaylistScreen from "../screens/Playlist/Playlist";
import MoviesScreen from "../screens/Movies";
import TvShowScreen from "../screens/TvShow";
import ProfileScreen from "../screens/Profile/Profile";
import WatchAnytime from "../screens/WatchAnytime";
import SearchScreen from "../screens/Common/Search";
import PlayScreen from "../screens/Common/Play";
import LiveStationPlayScreen from "../screens/Common/LiveStationPlay";
// import VodCollectionScreen from '../screens/Profile/Collection/VodCollection';
// import PlaylistCollectionScreen from '../screens/Profile/Collection/PlaylistCollection';
import FeedbackScreen from "../screens/Profile/Feedback";
import Invite from "../screens/Profile/Invite";
import InviteDetails from "../screens/Profile/InviteDetails";
import UserCenter from "../screens/Profile/UserCenter";
import MainCollectionScreen from "../screens/Profile/Collection/MainCollection";
import PlaylistDetailsScreen from "../screens/Playlist/PlaylistDetails";
import HistoryScreen from "../screens/Profile/History";
import LiveStationsScreen from "../screens/Common/LiveStations";
import AboutUsScreen from "../screens/Profile/AboutUs";
import PrivacyScreen from "../screens/Profile/Privacy";
import UserAgreementScreen from "../screens/Profile/UserAgreement";
import ConfigureScreen from "../screens/Profile/Configure";
import OtpScreen from "../screens/Auth/Otp";
import SetUsername from "../screens/Auth/setUsername";
import HomeTabIcon from "@static/images/home.svg";
import PlaylistTabIcon from "@static/images/playlist_tab.svg";
import ProfileTabIcon from "@static/images/profile_tab.svg";
import WatchAnytimeTabIcon from "@static/images/shorts.svg";
import CatalogScreen from "../screens/Common/Catalog";
import ShortVodCollectionScreen from "../screens/Profile/Collection/shortVodCollection";
import SportsIcon from "@static/images/sports.svg";
import MovieIcon from "@static/images/movies.svg";
import TvShowIcon from "@static/images/tvshows.svg";

import VipActionIcon from "@static/images/vip-icon.svg";
import VipIcon from "@static/images/vip-icon-inactive.svg";

import SportAndX from "./../../src/screens/SportAndX";

import MatchDetailsScreen from "../Sports/screens/Sports/MatchDetails";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/signinupBottomSheet";
import {
  HomeTabParamList,
  PlaylistTabParamList,
  ProfileTabParamList,
  RootStackParamList,
  WatchAnytimeTabParamList,
} from "@type/navigationTypes";
import RNBootSplash from "react-native-bootsplash";
import { RootState } from "@redux/store";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/hooks";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/constants";
import { YSConfig } from "../../ysConfig";
import {
  disableAdultMode,
  disableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetAdultVideoWatchTime,
  resetBottomSheetAction,
  resetOverEighteen,
  resetSportWatchTime,
  setHomeHeaderAds,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/screenAction";
import { Dialog } from "@rneui/themed";
// import FastImage from "react-native-fast-image";
import FastImage from "../components/common/customFastImage";
import { screenModel } from "@type/screenType";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/theme";
import { updateUserAuth, updateUserReferral } from "@redux/actions/userAction";
import ExpiredOverlay from "../components/modal/expiredOverlay";
import EventRules from "../screens/Profile/EventRules";
import PrivacyPolicyOverlay from "../components/modal/privacyPolicyOverlay";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/settingsActions";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import { AdsBannerContext } from "../contexts/AdsBannerContext";
import VIP from "../screens/Profile/VIP";
import VIP2 from "../screens/Profile/VIP2";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/vipDetails";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/ATReactNativeSDK";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/AdultVideoList";
import { AppsApi, UserApi } from "@api";
import AdEvent from "../screens/Common/AdEvent";
import { CRouteInitializer } from "../routes/router";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/videoDownloadAction";
import DownloadCatalog from "../screens/Profile/Download/DownloadCatalog";
import DownloadDetails from "../screens/Profile/Download/DownloadDetails";

import AutoRenewService from "../screens/Profile/AutoRenewService";
import { VipPromotionOverlay } from "../components/modal/vipPromotionOverlay";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { BackgroundType } from "@redux/reducers/backgroundReducer";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models";
import { PaymentWebview } from "../screens/Common/PaymentWebview";
import { CLangKey } from "@constants";
import { Webview } from "../screens/Common/Webview";
import Trending from "../screens/Trending";
import XVodCatalog from "../screens/Common/XVodCatalog";

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const HomeTab = createBottomTabNavigator<HomeTabParamList>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: RootState) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<UserStateType>('userReducer');
  const screenState = useSelector<screenModel>('screenReducer');
  const appState = useSelector<BackgroundType>('backgroundReducer');

  const HomeTabScreen = useCallback(() => {
    const tabConfig: any[] = YSConfig.instance.tabConfig as any;
    const showShort = tabConfig?.find((tab) => tab.id === 2) ?? false;

    return (
      <HomeTab.Navigator
        screenListeners={{
          tabPress: (e) => {
            if (e.target?.includes("随心看")) {
              dispatch(hideAdultModeDisclaimer());
            }
            // if (e.target?.includes('首页')){
            //   dispatch(showAdultModeDisclaimer())
            // }
          },
        }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:
            hasNotch || Platform.OS === "android"
              ? styles.navStyleWithNotch
              : styles.navStyle,
          tabBarLabelStyle: {
            paddingBottom: 6,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let icon: React.ReactNode;

            if (route.name === "首页") {
              icon = <HomeTabIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "播单") {
              icon = <PlaylistTabIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "我的") {
              icon = <ProfileTabIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "随心看") {
              icon = <WatchAnytimeTabIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "会员中心") {
              icon = <VipIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "电影") {
              icon = <MovieIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            } else if (route.name === "电视节目") {
              icon = <TvShowIcon
                width={iconWidth}
                color={focused
                  ? theme.icons.activeNavIconColor
                  : theme.icons.inactiveNavIconColor
                }
              />
            }

            return icon;
          },
          tabBarLabel: ({ focused, color, children }) => {
            let label = children;

            if (label === '首页') {
              label = CLangKey.homeTab.tr();
            } else if (label === '随心看') {
              label = CLangKey.watchanytimeTab.tr();
            } else if (label === '会员中心') {
              label = CLangKey.vipCenterTab.tr();
            } else if (label === '播单') {
              label = CLangKey.playlistTab.tr();
            } else if (label === '我的') {
              label = CLangKey.profileTab.tr();
            } else if (label === '电影') {
              label = CLangKey.moviesTab.tr();
            } else if (label === '电视节目') {
              label = CLangKey.tvShowsTab.tr();
            }

            return <Text style={{ fontSize: 11, color: color, paddingBottom: 5 }}>
              {label}
            </Text>
          }
        })}
      >
        <HomeTab.Screen name="首页" component={HomeScreen} />
        {/* {showShort && <HomeTab.Screen name="随心看" component={WatchAnytime} />} */}
        {/* {(YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5) &&
          <HomeTab.Screen name="会员中心" component={SportAndX} />
        }
        <HomeTab.Screen name="播单" component={PlaylistScreen} /> */}
        <HomeTab.Screen name="电影" component={MoviesScreen} />
        <HomeTab.Screen name="电视节目" component={TvShowScreen} />
        <HomeTab.Screen name="我的" component={ProfileScreen} />
      </HomeTab.Navigator>
    );
  }, [screenState.showAdultTab]);

  const refreshUserState = async () => {
    const result = await UserApi.getUserDetails();

    if (result == null) {
      // await AsyncStorage.removeItem("showAds");
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {
      await AsyncStorage.setItem("showAds", "false");
    } else {
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));
    return;
  };
  // privacy & policy overlay
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  // vip remaining day dialog
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {
        setShowBecomeVIPOverlay(false);
      }}
    />
  };

  // const renderOverlay2 = () => {
  //   return <GuestPurchaseSuccessOverlay
  //     showCondition={showGuestPurchaseSuccessOverlay}
  //     onClose={() => {
  //       setShowGuestPurchaseSuccessOverlay(false);
  //     }}
  //   />
  // };

  const [vipRemainingDay, setVipRemainingDay] = useState(0);

  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    // Round up the time difference to the nearest whole number
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
    if (
      result <= 3 &&
      roundedTimeDifferenceDays >= 0 &&
      date2Timestamp > date1Timestamp &&
      User.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  //screen state
  //screen state
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    if (screenState.screenShow != false) {
      dispatch(removeScreenAction());
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 50);
      setGifKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 3000);
    }

    if (screenState.resetBottomSheet == true) {
      dispatch(resetBottomSheetAction());
      dispatch(hideLoginAction());
    }


    // console.log('screenState.showPromotionDialog')
    // console.log(screenState.showPromotionDialog)
    if (screenState.showPromotionDialog == true) {
      dispatch(setShowPromotionDialog(false));
      setShowBecomeVIPOverlay(true)
    }


    if (screenState.showGuestPurchaseSuccess == true) {
      dispatch(setShowGuestPurchaseSuccess(false));
      setShowGuestPurchaseSuccessOverlay(true)
    }

    if (screenState.showPurchasePending == true) {
      dispatch(setShowPurchasePending(false));
      setShowPurchasePendingOverlay(true)
    }

  }, [screenState]);

  //test modal 
  // useEffect(() => {
  //   setShowGuestPurchaseSuccessOverlay(true)
  // }, []);

  useEffect(() => {
    refreshUserState();

    // init orientation by current
    Orientation.getOrientation((orientation) => {
      dispatch(handleAppOrientation(orientation));
    });
    Orientation.getDeviceOrientation((orientation) => {
      dispatch(handleDevicesOrientation(orientation));
      // defalut set portrait
      dispatch(lockAppOrientation("PORTRAIT"));
    });

    const appOrientationListener = (orientation: string) => {
      dispatch(handleAppOrientation(orientation));
    };
    const deviceOrientationListener = (orientation: string) => {
      dispatch(handleDevicesOrientation(orientation));
    };

    Orientation.addOrientationListener(appOrientationListener);
    Orientation.addDeviceOrientationListener(deviceOrientationListener);

    NetInfo.configure({
      // this is huawei url
      reachabilityUrl:
        "http://connectivitycheck.platform.hicloud.com/generate_204",
    });

    const removeNetInfoListener = NetInfo.addEventListener(
      (state: NetInfoState) => dispatch(updateNetworkInfo(state))
    );

    AppsApi.getHomeHeaderAds().then((ads) => {
      dispatch(setHomeHeaderAds(ads));
    });

    return () => {
      Orientation.removeOrientationListener(appOrientationListener);
      Orientation.removeDeviceOrientationListener(deviceOrientationListener);
      removeNetInfoListener();
    };
  }, []);

  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);

  const handleStateChange = (state: Readonly<NavigationState> | undefined) => {
    // for banner ads
    if (!state) return;
    const currentRoute = state.routes[state.routes.length - 1]; // last item in stack

    if (currentRoute.name !== "Home") {
      setAdsRoute(currentRoute.name);
    } else {
      const homeState = currentRoute.state;
      if (
        !homeState ||
        homeState.routeNames == undefined ||
        homeState.index == undefined
      )
        return;
      const currentTabName = homeState.routeNames[homeState.index];
      setAdsRoute(currentTabName);
    }
    // ============= end for banner ads
  };

  const initInterstitialAdListener = () => {
    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialFail,
      (event: any) => {
        console.warn(
          "ATInterstitialLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());
        // console.log(
        //   "ATInterstitialAdShow: " +
        //     event.placementId +
        //     ", adCallbackInfo: " +
        //     event.adCallbackInfo
        // );
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayStart,
      (event: any) => {
        console.log(
          "ATInterstitialPlayStart: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        // console.log(
        //   "ATInterstitialPlayEnd: " +
        //     event.placementId +
        //     ", adCallbackInfo: " +
        //     event.adCallbackInfo
        // );
        console.log("ATInterstitialPlayEnd");
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayFail,
      (event: any) => {
        console.log(
          "ATInterstitialPlayFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClick,
      (event: any) => {
        console.log(
          "ATInterstitialClick: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());
        // console.log(
        //   "ATInterstitialClose: " +
        //     event.placementId +
        //     ", adCallbackInfo: " +
        //     event.adCallbackInfo
        // );
        console.log("ATInterstitialClose: " + event.placementId);
      }
    );
  };

  useEffect(() => {
    dispatch(resetSportWatchTime());
    initInterstitialAdListener();
    dispatch(resetAdultVideoWatchTime());
    dispatch(disableAdultMode());
    dispatch(hideAdultModeVip());
    dispatch(disableWatchAnytimeAdultMode());
    // dispatch(resetOverEighteen())
    dispatch(clearQueueOnAppStart());
    dispatch(updateAllVodDetailsThunk());
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        onReady={() => RNBootSplash.hide()}
        onStateChange={handleStateChange}
      >

        {/* {!appState.isVipPromotionModalShown && showBecomeVIPOverlay && ( */}
        {/* todo  remove isVipPromotionModalShown in app state  */}
        {showBecomeVIPOverlay && (
          <View
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: 10000,
            }}>
            {renderOverlay()}
          </View>
        )}

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            autoHideHomeIndicator: true,
            animation: "slide_from_right",
            orientation: "portrait",
          })}
        >
          <Stack.Screen name="Home" component={HomeTabScreen} />

          <Stack.Screen name="我的收藏" component={MainCollectionScreen} />
          <Stack.Screen name="反馈" component={FeedbackScreen} />
          <Stack.Screen
            name="邀请"
            component={Invite}
            options={{ orientation: "portrait" }}
          />
          {/* <Stack.Screen
            name="邀请详情"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          /> */}
          <Stack.Screen
            name="活动规则"
            component={EventRules}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="个人中心"
            component={UserCenter}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="播放"
            component={PlayScreen}
            initialParams={{ vod_id: 1, player_mode: "normal" }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen name="播放历史" component={HistoryScreen} />
          <Stack.Screen name="关于我们" component={AboutUsScreen} />
          <Stack.Screen
            name="搜索"
            component={SearchScreen}
            initialParams={{ initial: "" }}
          />
          <Stack.Screen
            name="PlaylistDetail"
            component={PlaylistDetailsScreen}
          />
          <Stack.Screen name="隐私政策" component={PrivacyScreen} />
          <Stack.Screen name="用户协议" component={UserAgreementScreen} />
          <Stack.Screen
            name="片库"
            component={CatalogScreen}
            initialParams={{ type_id: 1 }}
          />
          <Stack.Screen name="设置" component={ConfigureScreen} />
          <Stack.Screen name="合集收藏" component={ShortVodCollectionScreen} />
          <Stack.Screen
            name="体育详情"
            component={MatchDetailsScreen}
            initialParams={{
              streamerId: undefined,
              matchId: undefined,
            }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen
            name="电视台列表"
            component={LiveStationsScreen}
            initialParams={{ liveStationItemList: undefined }}
          />
          <Stack.Screen
            name="电视台播放"
            component={LiveStationPlayScreen}
            initialParams={{
              liveStationItemList: undefined,
              liveStationItem: undefined,
            }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen
            name="OTP"
            component={OtpScreen}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="SetUsername"
            component={SetUsername}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="付费VIP"
            component={useCallback(withIAPContext(VIP), [])}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="付费Google"
            component={useCallback(withIAPContext(VIP2), [])}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="VIP明细"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="午夜场剧情"
            component={AdultVideoList}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen name="活动页" component={AdEvent} />
          <Stack.Screen
            name="我的下载"
            component={DownloadCatalog}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="下载详情"
            component={DownloadDetails}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen name="续费服务" component={AutoRenewService} />
          <Stack.Screen
            name="PaymentWebview"
            component={PaymentWebview}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="Webview"
            component={Webview}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="Trending"
            component={Trending}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="XVodCatalog"
            component={XVodCatalog}
            options={{ orientation: "portrait" }}
          />
        </Stack.Navigator>
        {settingsReducer.appOrientation === "PORTRAIT" && ( // only show if portrait
          <>
            <SigninupBottomSheet
              isVisible={screenState.loginShow}
              handleClose={() => {
                dispatch(hideLoginAction());
              }}
            />
          </>
        )}
        <PrivacyPolicyOverlay
          isVisible={showPrivacyOverlay}
          setIsVisible={setShowPrivacyOverlay}
        />


        <ExpiredOverlay
          remainingDay={vipRemainingDay}
          showVIPOverlay={showVIPOverlay}
          setShowVIPOverlay={setShowVIPOverlay}
        />

        <CRouteInitializer />
      </NavigationContainer>
      <Dialog
        isVisible={isDialogOpen}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setIsDialogOpen(false)}
      >
        <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/login-success.gif")}
        />

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          {screenState.screenAction}
        </Text>
      </Dialog>


      <Dialog
        isVisible={showGuestPurchaseSuccessOverlay}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setShowGuestPurchaseSuccessOverlay(false)}
      >
        <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/login-success.gif")}
        />

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 18,
            fontWeight: "600",
            paddingTop: 10
          }}
        >
          购买成功
        </Text>

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 14,
            fontWeight: "600",
            paddingTop: 14,
            textAlign: 'center',
            lineHeight: 24
          }}
        >
          恭喜您成为尊贵的影视TV会员，立即登录账号合并您的VIP会员，可以多设备使用VIP会员账号
        </Text>

        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            setShowGuestPurchaseSuccessOverlay(false)
            dispatch(showLoginAction());
          }}
        >
          <View
            style={styles.purchaseButton}
          >
            <Text style={styles.purchaseButtonText}>
              去登录
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => { setShowGuestPurchaseSuccessOverlay(false) }}
        >
          <Text style={styles.cancelButtonText}>
            取消
          </Text>
        </TouchableOpacity>

      </Dialog>


      <Dialog
        isVisible={showPurchasePendingOverlay}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setShowPurchasePendingOverlay(false)}
      >
        {/* <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/login-success.gif")}
        /> */}

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 18,
            fontWeight: "600",
            paddingTop: 10
          }}
        >
          VIP会员
        </Text>

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 14,
            fontWeight: "600",
            paddingTop: 14,
            textAlign: 'center',
            lineHeight: 24
          }}
        >
          请耐心等待VIP生效，或尝试刷新个人中心/重启应用
        </Text>

        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            setShowPurchasePendingOverlay(false)
            //  dispatch(showLoginAction());
          }}
        >
          <View
            style={styles.purchaseButton}
          >
            <Text style={styles.purchaseButtonText}>
              确定
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => { setShowGuestPurchaseSuccessOverlay(false) }}
        >
          <Text style={styles.cancelButtonText}>
            取消
          </Text>
        </TouchableOpacity> */}

      </Dialog>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  navStyleWithNotch: {
    paddingTop: 0,
    paddingBottom: 12,
    height: 65,
    position: "relative",
    // bottom: 25,
  },
  navStyle: {
    // flex: 0,
    // flexGrow: 0
    flex: 0,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    backgroundColor: '#D1AC7D',
    paddingHorizontal: 30,
    marginTop: 16
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    // backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
});
