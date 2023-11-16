import React, {
  useState,
  useEffect,
  useRef,
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
import HomeTabIcon from "../../static/images/home_tab.svg";
import HomeActiveTabIcon from "../../static/images/home_tab_active.svg";
import PlaylistTabIcon from "../../static/images/playlist_tab.svg";
import PlaylistActiveTabIcon from "../../static/images/playlist_tab_active.svg";
import ProfileTabIcon from "../../static/images/profile_tab.svg";
import ProfileActiveTabIcon from "../../static/images/profile_tab_active.svg";
import WatchAnytimeTabIcon from "../../static/images/video_tab.svg";
import WatchAnytimeActiveTabIcon from "../../static/images/video_tab_active.svg";
import CatalogScreen from "../screens/Common/Catalog";
import ShortVodCollectionScreen from "../screens/Profile/Collection/shortVodCollection";
import SportsIcon from "../../static/images/sports.svg";
import MatchesScreen from "../Sports/screens/Sports/Matches";
import MatchDetailsScreen from "../Sports/screens/Sports/MatchDetails";
import WatchCollectionScreen from "../../src/screens/WatchCollection";
import { useDispatch, useSelector } from "react-redux";
import LoginBottomSheet from "../components/auth/loginBottomSheet";
import RegisterBottomSheet from "../components/auth/registerBottomSheet";
import {
  HomeTabParamList,
  PlaylistTabParamList,
  ProfileTabParamList,
  RootStackParamList,
  WatchAnytimeTabParamList,
} from "../types/navigationTypes";
import RNBootSplash from "react-native-bootsplash";
import { RootState } from "../redux/store";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "../../src/utility/constants";
import { BottomNavTabsResponse } from "../../src/types/ajaxTypes";
import { YSConfig } from "../../ysConfig";
import {
  hideLoginAction,
  hideRegisterAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
} from "../redux/actions/screenAction";
import { Dialog } from "@rneui/themed";
// import FastImage from "react-native-fast-image";
import FastImage from "../components/common/customFastImage";
import { screenModel } from "../types/screenType";
import { YingshiDarkTheme, YingshiLightTheme } from "../utility/theme";
import { userModel } from "../types/userType";
import { getUserDetails } from "../features/user";
import {
  updateUserAuth,
  updateUserReferral,
} from "../redux/actions/userAction";
import ExpiredOverlay from "../components/modal/expiredOverlay";
import EventRules from "../screens/Profile/EventRules";
import PrivacyPolicyOverlay from "../components/modal/privacyPolicyOverlay";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "../redux/actions/settingsActions";
import { SettingsReducerState } from "../redux/reducers/settingsReducer";
import { AdsBannerContext } from "../contexts/AdsBannerContext";
import VIP from "../screens/Profile/VIP";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/vipDetails";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/ATReactNativeSDK";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

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

  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const HomeTabScreen = useCallback(() => {
    return (
      <HomeTab.Navigator
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
              icon = focused ? (
                <HomeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <HomeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "播单") {
              icon = focused ? (
                <PlaylistActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <PlaylistTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "我的") {
              icon = focused ? (
                <ProfileActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <ProfileTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "随心看") {
              icon = focused ? (
                <WatchAnytimeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <WatchAnytimeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "体育") {
              icon = focused ? (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            }
            return icon;
          },
        })}
      >
        {/* {YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5 ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="体育" component={MatchesScreen} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )} */}

        {/* {userState.userToken !== '' &&
        userState.userMemberExpired >= userState.userCurrentTimestamp ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="体育" component={MatchesScreen} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )} */}

        <>
          <HomeTab.Screen name="首页" component={HomeScreen} />
          <HomeTab.Screen name="随心看" component={WatchAnytime} />
          <HomeTab.Screen name="体育" component={MatchesScreen} />
          <HomeTab.Screen name="播单" component={PlaylistScreen} />
          <HomeTab.Screen name="我的" component={ProfileScreen} />
        </>
      </HomeTab.Navigator>
    );
  }, []);

  const refreshUserState = async () => {
    let result;
    result = await getUserDetails({
      bearerToken: userState.userToken,
    });
    if (result == null) {
      await AsyncStorage.removeItem("showAds");
      return;
    }

    let resultData = result.data.data;
    if (resultData.user.current_timestamp < resultData.user.vip_end_time) {
      await AsyncStorage.setItem("showAds", "false");
    } else {
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(resultData));
    return;
  };
  // privacy & policy overlay
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  // vip remaining day dialog
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);

  const [vipRemainingDay, setVipRemainingDay] = useState(0);

  useEffect(() => {
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;
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
      userState.userToken != ""
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.userCurrentTimestamp]);

  //screen state
  //screen state
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );
  const [gifKey, setGifKey] = useState(0);

  const [isShowLogin, setShowLogin] = useState(false);
  const [isShowRegister, setShowRegister] = useState(false);

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

    if (screenState.loginShow == true) {
      dispatch(hideLoginAction());
      setShowRegister(false);
      setShowLogin(true);
    }
    if (screenState.registerShow == true) {
      dispatch(hideRegisterAction());
      setShowLogin(false);
      setShowRegister(true);
    }
    if (screenState.resetBottomSheet == true) {
      dispatch(resetBottomSheetAction());
      setShowLogin(false);
      setShowRegister(false);
    }
  }, [screenState]);

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
        console.log(
          "ATInterstitialPlayEnd: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
        );
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
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        onReady={() => RNBootSplash.hide()}
        onStateChange={handleStateChange}
      >
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
            initialParams={{ vod_id: 1 }}
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
          <Stack.Screen name="合集播放" component={WatchCollectionScreen} />
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
            name="VIP明细"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          />
        </Stack.Navigator>
        {settingsReducer.appOrientation === "PORTRAIT" && ( // only show if portrait
          <>
            <LoginBottomSheet
              isVisible={isShowLogin}
              handleClose={() => setShowLogin(false)}
            />
            <RegisterBottomSheet
              isVisible={isShowRegister}
              handleClose={() => setShowRegister(false)}
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
          source={require("../../static/images/profile/login-success.gif")}
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
});
