import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import ScreenContainer from "../components/container/screenContainer";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/constants";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
// import { API } from './util';
import Api from "../Sports/middleware/api";
import { Url } from "../Sports/middleware/url";

import MatchScheduleNav from "../Sports/components/matchSchedule/MatchScheduleNav";
import NoConnection from "../components/common/noConnection";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { userModel } from "@type/userType";
import { useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/becomeVipOverlay";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import useAnalytics from "@hooks/useAnalytics";
import XvodTabIcon from "@static/images/xvodTab.svg";
import SportTabIcon from "@static/images/sportTab.svg";
interface NavType {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const [selectedTab, setSelectedTab] = useState("sport");
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  // ========== for analytics - start ==========
  const { sportViewsAnalytics } = useAnalytics();

  useEffect(() => {
    sportViewsAnalytics();
  }, []);
  // ========== for analytics - end ==========

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      Api.call(Url.sportTypes, {}, "GET").then((res): NavType[] => {
        return res.data;
      }),
  });

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // await queryClient.resetQueries(['watchAnytime']); // Pass the query key as an array of strings
    await refetch();
    setIsRefreshing(false);
    return;
  }, []);
  // bgVipXvod
  return (
    <>
      <ImageBackground
        source={require("./../../static/images/bgVipSport.png")}
        resizeMode="cover"
        style={{ flex: 1, height: 200 }}
      >
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
          <BecomeVipOverlay
            setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
            showBecomeVIPOverlay={showBecomeVIPOverlay}
          />

          <View
            style={{
              // backgroundColor: colors.background,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab("sport");
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {selectedTab == "sport" && (
                    <View style={{ paddingRight: 5 }}>
                      <SportTabIcon width={18} />
                    </View>
                  )}
                  <Text
                    style={{
                      ...textVariants.bigHeader,
                      color: colors.text,
                      fontSize: selectedTab == "sport" ? 22 : 19,
                    }}
                  >
                    体育
                  </Text>
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  ...textVariants.bigHeader,
                  color: colors.text,
                  fontSize: 20,
                  paddingHorizontal: 10,
                }}
              >
                |
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setSelectedTab("xvod");
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {selectedTab == "xvod" && (
                    <View style={{ paddingRight: 5 }}>
                      <XvodTabIcon width={18} />
                    </View>
                  )}
                  <Text
                    style={{
                      ...textVariants.bigHeader,
                      color: colors.text,

                      fontSize: selectedTab == "xvod" ? 22 : 19,
                    }}
                  >
                    夜来香
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={
                Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                userState.userToken === ""
                  ? 0.5
                  : 1
              }
              onPress={() => {
                if (
                  Number(userState.userMemberExpired) <=
                    Number(userState.userCurrentTimestamp) ||
                  userState.userToken === ""
                ) {
                  setShowBecomeVIPOverlay(true);
                }
              }}
            >
              <View style={styles.headerContainerRight}>
                <Image
                  style={styles.iconStyle}
                  source={require("@static/images/profile/vipSport.png")}
                />

                {Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                userState.userToken === "" ? (
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 14,
                    }}
                  >
                    成为VIP
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 14,
                    }}
                  >
                    VIP {vipRemainingDay}天
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

          {selectedTab == "sport" &&
            matchTabs &&
            matchTabs.length > 0 &&
            !isOffline && (
              <MatchScheduleNav
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                tabList={matchTabs}
              />
              // <Text>sport</Text>
            )}

          {selectedTab == "xvod" && <Text>xvod</Text>}

          {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  headerContainerRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222327",
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 5,
    position: "relative",
    top: 5,
  },
});
