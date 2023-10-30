import React, {
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  useContext,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  RefreshControl,
  Platform,
} from "react-native";
import ScreenContainer from "../components/container/screenContainer";
import { useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  NavOptionsResponseType,
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
} from "../types/ajaxTypes";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "../utility/constants";
import CatagoryHome from "../components/container/CatagoryHome";
import RecommendationHome from "../components/container/RecommendationHome";
import HomeHeader from "../components/header/homeHeader";
import FastImage from "react-native-fast-image";
// import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/noConnection";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import PrivacyPolicyDialog from "../components/modal/privacyPolicyModel";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { RootState } from "../redux/store";
import { SettingsReducerState } from "../redux/reducers/settingsReducer";
import { acceptPrivacyPolicy } from "../redux/actions/settingsActions";
import RNExitApp from "react-native-exit-app";
import AdsBanner from "../ads/adsBanner";
import HomeNav from "../components/tabNavigate/homeNav";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/ATReactNativeSDK";

function Home({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, textVariants, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const BTN_COLORS = ["#30AA55", "#7E9CEE", "#F1377A", "#FFCC12", "#ED7445"];
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const [isOpenDialog, setOpenDialog] = useState(false);
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const dispatch = useAppDispatch();
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then((response) => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data;
        }),
  });

  const fetchData = useCallback((id: number) => {
    return fetch(`${API_DOMAIN}page/v2/typepage?id=${id}`)
      .then((response) => response.json())
      .then((json: VodCarousellResponseType) => {
        return json;
      });
  }, []);

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
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
    setShowHomeLoading(false);
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

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
    if (isFocused && !settingsReducer.isAcceptPrivacyPolicy) {
      openPrivacyDialog();
    }

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
      item: UseQueryResult<VodCarousellResponseType>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                setScrollEnabled={setScrollEnabled}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  setScrollEnabled={setScrollEnabled}
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

  const openPrivacyDialog = () => {
    setOpenDialog(true);
  };

  let tryToLoadCount = 0;
  let adsReadyFlag = false;
  const loadInterstitial = async (interstitialPlacementId) => {
    // console.log("====================================");
    // console.log("loadInterstitial");
    // console.log("====================================");

    var settings = {};
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;
    //    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = true;

    await ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

    if (Platform.OS === "android") {
      isInterstitialReady(ANDROID_HOME_PAGE_POP_UP_ADS);
    } else if (Platform.OS === "ios") {
      isInterstitialReady(IOS_HOME_PAGE_POP_UP_ADS);
    }
  };

  const isInterstitialReady = (interstitialPlacementId) => {
    ATInterstitialRNSDK.hasAdReady(interstitialPlacementId).then(
      (isAdReady) => {
        // console.log("====================================");
        // console.log("isInterstitialReady: " + isAdReady);
        // console.log("====================================");
        if (isAdReady && adsReadyFlag == false) {
          showInterstitial(interstitialPlacementId);
        } else {
          if (tryToLoadCount > 100 || adsReadyFlag == true) {
            return;
          }
          tryToLoadCount += 1;
          setTimeout(() => {
            loadInterstitial(interstitialPlacementId);
          }, 1000);
        }
      }
    );

    ATInterstitialRNSDK.checkAdStatus(interstitialPlacementId).then(
      (adStatusInfo) => {
        // console.log("====================================");
        // console.log("isInterstitialReady: checkAdStatus: " + adStatusInfo);
        // console.log("====================================");
      }
    );
  };

  const showInterstitial = (interstitialPlacementId) => {
    if (adsReadyFlag == false) {
      adsReadyFlag = true;
      console.log("====================================");
      console.log("showInterstitial ....");
      console.log("====================================");

      ATInterstitialRNSDK.showAd(interstitialPlacementId);
    }
  };

  useEffect(() => {
    console.log("======================");
    console.log("show ads here");
    console.log("======================");

    if (Platform.OS === "android") {
      // loadBanner(ANDROID_HOME_PAGE_BANNER_ADS);
      // loadBanner(ANDROID_PLAY_DETAILS_BANNER_ADS);
      // loadBanner(ANDROID_TOPIC_DETAILS_BANNER_ADS);
      // loadBanner(ANDROID_TOPIC_TAB_BANNER_ADS);
      loadInterstitial(ANDROID_HOME_PAGE_POP_UP_ADS);
    } else if (Platform.OS === "ios") {
      // loadBanner(IOS_HOME_PAGE_BANNER_ADS);
      // loadBanner(IOS_PLAY_DETAILS_BANNER_ADS);
      // loadBanner(IOS_TOPIC_DETAILS_BANNER_ADS);
      // loadBanner(IOS_TOPIC_TAB_BANNER_ADS);
      loadInterstitial(IOS_HOME_PAGE_POP_UP_ADS);
    }
  }, []);

  return (
    <>
      <ScreenContainer
        isHome={true}
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <AdsBanner bottomTabHeight={bottomTabHeight} />
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
        >
          <HomeHeader navigator={navigation} />
        </View>
        <HomeNav
          // hideContent={hideContent}
          tabList={
            navOptions?.map((e) => ({
              id: e.id,
              title: e.name,
              name: e.name,
            })) ?? []
          }
          tabChildren={(tab, i) => (
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
                      source={require("../../static/images/loading-spinner.gif")}
                      resizeMode={FastImage.resizeMode.contain}
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
                    backgroundColor: "rgb(20,22,25)",
                  }}
                >
                  <FastImage
                    source={require("../../static/images/home-loading.gif")}
                    style={{
                      width: 150,
                      height: 150,
                      position: "relative",
                      bottom: 50,
                      zIndex: -1,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
              )}
              {data && !isOffline && getContent({ item: data[i], index: i })}
            </>
          )}
        />
      </ScreenContainer>

      <PrivacyPolicyDialog />

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
