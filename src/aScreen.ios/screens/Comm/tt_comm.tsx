import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, FlatList, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  ttDoubanMeta,
  ttSide,
} from "@type/tt_line_borderless";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/tt_trophy_cross";
import CatagoryHome from "../../components/container/tt_profile";
import RecommendationHome from "../../components/container/tt_mail_package";
import HomeHeader from "../../components/header/tt_inactive_strings_header";
import FastImage from "../../components/common/tt_connection";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "../../components/common/tt_fast";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";

import { AdsBannerContext } from "../../../contexts/tt_injury_reminder";

import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttSinaPrediction } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import Commentary  from "./tt_commentary";
import Community  from "./tt_community";

import Jieshuo from  './tt_jieshuo.json';
import YingPin from  './tt_yingpin.json';
import { playVod } from "@redux/actions/tt_activity";

function tt_comm({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(false);
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();
  const dispatch = useAppDispatch();

  const [jieshuo] = useState({
    comm_id: 0,
    comm_name: '解说',
    vod_list: Jieshuo.vod_list as any
  })

  const [yingpin, setYingpin] = useState({
    comm_id: 1,
    comm_name: '社区',
    meta_list: YingPin.vod_list as any
  })

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => ttSinaPrediction.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => ttSinaPrediction.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions.map((x: any) => ({
        queryKey: ["HomePage", x.id === 0 ? 1001 : x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
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

  const [isRefreshing, setIsRefreshing] = useState(false);

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
            return prevIsRefreshing;
          } else {
            return true;
          }
        });

        await handleRefresh(navId, true);
        setIsRefreshing(false);
      }
    };

    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

    return () => unsubscribe();
  }, [navigation, isFocused, navId, handleRefresh]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<ttSide>;
      index: number;
    }) => {
      return (
        <>
          <FlatList
            data={[
              {comp: 'commentary', key: '1'},
              {comp: 'community', key: '2'},
            ]}
            renderItem={({item, index, separators}) => (
              <>
                { item.comp === 'commentary' && 
                  <Commentary playlist={jieshuo} onPress={(item) => {
                    console.log('解说 pressed', item)
                    navigation.navigate("解说", {
                      screen: "解说",
                    });
                  }}/> 
                }
                { item.comp === 'community' && 
                  <Community playlist = {yingpin} onPress={(item) => {
                    console.log('社区 pressed', item)
                    dispatch(playVod(item));
                    navigation.navigate('播放IOS', {vod_id: item.vod_id});
                  }}/> 
                }
              </>
            )}
          />
        </>
      );
    },
    []
  );

  const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext);

  useEffect(() => {
    setNavbarHeight(bottomTabHeight);
  }, [bottomTabHeight]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      tt_humidity_guide.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      tt_humidity_guide.homeTabViewsAnalytics({
        tab_id: navOptions[navId].id.toString(),
        tab_name: navOptions[navId].name,
      });
    }
  }, [navId])


  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));

    if (navOptions !== undefined) {
      const found = navOptions?.findIndex((e) => e.name === targetStr);
      setNavId(found);

      tt_humidity_guide.homeTabClicksAnalytics({
        tab_id: navOptions[found].id.toString(),
        tab_name: navOptions[found].name,
      });

    }
  }

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(index);
  }, []);


  return (
    <>
      <ScreenContainer
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        isHome={true}
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
                marginLeft: -40,
              }}
            >
              {
                <FastImage
                  style={{ height: 80, width: 80 }}
                  source={require("@static/images/toponTerms.gif")}
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
                source={require("@static/images/blacklistTumbnail.gif")}
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

export default memo(tt_comm);

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
