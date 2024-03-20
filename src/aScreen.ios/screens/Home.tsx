import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/screenContainer";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  VodCarousellType,
} from "@type/ajaxTypes";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/constants";
import CatagoryHome from "../components/container/CatagoryHome";
import RecommendationHome from "../components/container/RecommendationHome";
import HomeHeader from "../components/header/homeHeader";
// import FastImage from "react-native-fast-image";
import FastImage from "../components/common/customFastImage";
// import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/noConnection";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import HomeNav from "../components/tabNavigate/homeNav";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/ATReactNativeSDK";
import { AdsBannerContext } from "../../contexts/AdsBannerContext";

import UmengAnalytics from "../../../Umeng/UmengAnalytics";
import { AppsApi } from "@api";
import DeviceInfo from "react-native-device-info";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models/user";

function Home({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const userState = useSelector<UserStateType>('userReducer');
  const isVip = User.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => AppsApi.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => AppsApi.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    // state.isInternetReachable === null set true is for default value
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);
    if (!offline) {
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
    setShowHomeLoading(false);
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      setShowHomeLoading(true);
      refetch();
      handleRefresh(navId, true);
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  //refresh
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to handle the pull-to-refresh action
  const handleRefresh = async (id: number, showloading: boolean = false) => {
    if (showloading) {
      setIsRefreshing(true);
    }
    try {
      await queryClient.resetQueries(["HomePage", id]);

      setIsRefreshing(false);
      setNavId(id);
      setShowHomeLoading(false);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
      if (isFocused && !isRefreshing) {
        setIsRefreshing((prevIsRefreshing) => {
          if (prevIsRefreshing) {
            return prevIsRefreshing; // No need to update, it's already true
          } else {
            return true; // Update to true
          }
        });
        await handleRefresh(navId, true);
        setIsRefreshing(false);
      }
    };
    // Add an event listener to the navigation object for the tab press event
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    // Clean up the event listener when the component unmounts or when navId changes
    return () => unsubscribe();
  }, [navigation, isFocused, navId, handleRefresh]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<VodCarousellType>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  onRefresh={handleRefresh}
                  refreshProp={isRefreshing}
                />
              </>
            ))}
        </>
      );
    },
    []
  );


  const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext);

  useEffect(() => {
    setNavbarHeight(bottomTabHeight);
  }, [bottomTabHeight]);



  // useEffect(() => {
  //   Dimensions.addEventListener('change', (e) => {
  //     if (DeviceInfo.isTablet()) {
  //       reloadBanner()
  //   }
  //   })
  // }, []);


  // ========== for analytics - start ==========
  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      UmengAnalytics.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      UmengAnalytics.homeTabViewsAnalytics({
        tab_id: navOptions[navId].id.toString(),
        tab_name: navOptions[navId].name,
      });
    }
  }, [navId])
  // ========== for analytics - end ==========

  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));

    if (navOptions !== undefined) {
      const found = navOptions?.findIndex((e) => e.name === targetStr);
      setNavId(found);

      // ========== for analytics - start ==========
      UmengAnalytics.homeTabClicksAnalytics({
        tab_id: navOptions[found].id.toString(),
        tab_name: navOptions[found].name,
      });
      // ========== for analytics - end ==========
    }
  }

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(index);
  }, []);

  // useInterstitialAds();

  return (
    <>
      <ScreenContainer
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        isHome={false} // solve home tab tabsize different issue
      >
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
        >
          <HomeHeader navigator={navigation} />
        </View>
        <>
          {(!data || isRefreshing) && (
            <View
              style={{
                ...styles.loading,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                marginLeft: -40, // Half of the element's width
              }}
            >
              {
                <FastImage
                  style={{ height: 80, width: 80 }}
                  source={require("@static/images/loading-spinner.gif")}
                  resizeMode={"contain"}
                />
              }
            </View>
          )}
          {showHomeLoading && !isOffline && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <FastImage
                source={require("@static/images/home-loading.gif")}
                style={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  bottom: 50,
                  zIndex: -1,
                }}
                resizeMode={"contain"}
                useFastImage={true}
              />
            </View>
          )}
          {data && !isOffline && getContent({ item: data[0], index: 0 })}
        </>
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(Home);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  vodList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomBlur: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: "absolute",
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
});
