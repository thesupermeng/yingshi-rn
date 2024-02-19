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
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/screenContainer";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
// import { API } from './util';
import Api from "../Sports/middleware/api";
import { Url } from "../Sports/middleware/url";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/MatchScheduleNavVip";
import NoConnection from "../components/common/noConnection";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks";
import { RootState } from "@redux";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/becomeVipOverlay";
import { SettingsReducerState } from "@redux";
import UmengAnalytics from "../../Umeng/UmengAnalytics";
import { XvodTabSvg, SportTabSvg } from "@static";
import XVodTab from "./VipPrivilege/XVodTab";
import { screenModel } from "@type";
import {
  disableAdultMode,
  showAdultModeDisclaimer,
} from "@redux";
import { BlurView } from "../components/blurView";
import { YSConfig } from "../../ysConfig";
import {
  VipEntrySvg,
} from "@static";
import { UserStateType } from "@redux";
import { User } from "@models";
interface NavType {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<UserStateType>('userReducer');
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
    setSelectedTab("sport");
  };

  // ========== for analytics - start ==========
  useFocusEffect(useCallback(() => {
    UmengAnalytics.sportViewsAnalytics();
  }, []));
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
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // await queryClient.resetQueries(['watchAnytime']); // Pass the query key as an array of strings
    await refetch();
    setIsRefreshing(false);
    return;
  }, []);
  // bgVipXvod

  const isVip = User.isVip(userState.user);

  useEffect(() => {
    if (selectedTab === 'xvod' && !isVip) {
      setShowBecomeVIPOverlay(true)
    } else {
      setShowBecomeVIPOverlay(false)
    }
  }, [selectedTab])

  return (
    <>
      <ImageBackground
        source={
          selectedTab == "sport"
            ? require("./../../static/images/bgVipSport.png")
            : screenState.showAdultTab
              ? require("./../../static/images/bgVipXvod.png")
              : require("./../../static/images/profile/bg-gradient.png")
        }
        resizeMode="cover"
        style={{ flex: 1, height: 200 }}
      >
        <ScreenContainer
          isBgHide={true}
          containerStyle={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: Platform.OS === "ios" ? 8 : 15,
          }}
        >
          <View
            style={{
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showSport &&
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTab("sport");
                    dispatch(disableAdultMode());
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        paddingRight: 7,
                        position: "relative",
                        bottom: 10,
                      }}
                    >
                      <SportTabSvg width={32} height={32} />
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.bigHeader,
                          color: colors.text,
                          fontSize: selectedTab == "sport" ? 20 : 16,
                          // fontWeight: selectedTab == "sport" ? "bold" : "normal",
                          paddingBottom: 3,
                          marginBottom: 0,
                        }}
                      >
                        体育
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          paddingHorizontal: 12,
                        }}
                      >
                        <View
                          style={{
                            borderTopWidth: selectedTab == "sport" ? 2 : 0, // Border bottom width
                            borderTopColor: "#ffffff", // Border bottom color
                            maxWidth: 20,
                          }}
                        ></View>

                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              }

              {screenState.showAdultTab && (
                <>
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
                        marginLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          paddingRight: 7,
                          position: "relative",
                          bottom: 12,
                        }}
                      >
                        <XvodTabSvg width={32} height={32} />
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <Text
                          style={{
                            ...textVariants.bigHeader,
                            color: colors.text,
                            fontSize: selectedTab == "xvod" ? 20 : 16,
                            // fontWeight: selectedTab == "sport" ? "bold" : "normal",
                            paddingBottom: 3,
                            marginBottom: 0,
                          }}
                        >
                          夜来香
                        </Text>

                        <View
                          style={{
                            justifyContent: "center",
                            paddingHorizontal: 15,
                          }}
                        >
                          <View
                            style={{
                              borderTopWidth: selectedTab == "xvod" ? 2 : 0, // Border bottom width
                              borderTopColor: "#ffffff", // Border bottom color
                              maxWidth: 22,
                            }}
                          ></View>

                          <Text></Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={
                !User.isVip(userState.user) ||
                  User.isGuest(userState.user)
                  ? 0.5
                  : 1
              }
              onPress={() => {
                if (
                  !User.isVip(userState.user)
                ) {
                  setShowBecomeVIPOverlay(true);
                }
              }}
            >


              {!User.isVip(userState.user) ? (
                <>
                  <View style={styles.headerContainerRight2}>
                    <VipEntrySvg height={30} />
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.headerContainerRight}>
                    <Image
                      style={styles.iconStyle}
                      source={require("../../static/images/profile/vipSport.png")}
                    />
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 14,
                      }}
                    >
                      VIP {vipRemainingDay}天
                    </Text>
                  </View>
                </>
              )}

            </TouchableOpacity>
          </View>
          {selectedTab == "sport" &&
            matchTabs &&
            matchTabs.length > 0 &&
            !isOffline && (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  backgroundColor: "transparent",
                  // borderColor:'red',
                  // borderWidth:20
                }}
              >
                <MatchScheduleNavVip
                  setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                  tabList={matchTabs}
                />
                {!isVip &&
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                }
              </View>
              // <Text>sport</Text>
            )}

          {selectedTab == "xvod" && (
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: "transparent",
                marginTop: 5
                // borderColor:'red',
                // borderWidth:20
              }}
            >
              <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
              {!isVip &&
                <>
                  <TouchableWithoutFeedback
                    style={styles.xvodBlur}
                    onPress={() => setShowBecomeVIPOverlay(true)}
                  >
                    <BlurView
                      blurType="dark"
                      blurAmount={2}
                      style={styles.xvodBlur}
                      overlayColor="" //fix android blur outside blur view https://github.com/Kureev/react-native-blur/issues/414#issuecomment-810541248
                    />
                  </TouchableWithoutFeedback>
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                </>

              }
            </View>
          )}
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
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 5,
    position: "relative",
    bottom: 8,
  },
  headerContainerRight2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 7,
    borderRadius: 30,
    paddingVertical: 1,
    position: "relative",
    bottom: 8,
  },
  xvodBlur: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderRadius: 15,
    // borderRadius: showBlur ? 15 : 0,
  }
});
