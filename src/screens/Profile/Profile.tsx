import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import ShowMoreButton from "../../components/button/showMoreButton";

import CollectionIcon from "@static/images/collection.svg";
import HistoryIcon from "@static/images/history.svg";
import FeedbackIcon from "@static/images/feedback.svg";
import SettingsIcon from "@static/images/settings.svg";
import InfoIcon from "@static/images/info.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/profile.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/more_arrow.svg";
import EditIcn from "@static/images/profile/edit.svg";

import VipIcon from "@static/images/vip-icon.svg";
import VipArrow from "@static/images/vip-arrow.svg";
import AddIcon from "@static/images/vip/add.svg";
import { YSConfig } from "../../../ysConfig";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/screenAction";
import { userModel } from "@type/userType";
import NotificationModal from "../../components/modal/notificationModal";
import { updateUserAuth, updateUserReferral } from "@redux/actions/userAction";
import ExpiredOverlay from "../../components/modal/expiredOverlay";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SHOW_ZF_CONST } from "@utility/constants";
import FastImage from "../../components/common/customFastImage";
import { UserApi } from "@api";
import { AppConfig } from "../../Sports/global/appConfig";
import { BannerContainer } from "../../components/container/bannerContainer";
import { bannerAdType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { CEndpoint } from "../../constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  // console.log("Profile")
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<bannerAdType[]>()

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
    const result = await UserApi.getUserDetails();
    if (result == null) {
      return;
    }

    await dispatch(updateUserAuth(result));
    return;
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      // when the user leaves the screen, close bottom sheet
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        // Orientation.unlockAllOrientations();
      };
    }, [])
  );

  // useEffect(() => {
  //   console.log('asd');
  //   refreshUserState();
  // }, []);
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    // Escape the keyword for use in the regular expression
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.primary, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  const fetchBannerAd = async () => {
    console.debug('fetching banner ad')
    const response = await CApi.get(CEndpoint.bannerEventAds, {
      query: {
        slot_id: 100,
        ip: YSConfig.instance.ip,
      },
    });
    const banner = await response.data;

    if (banner) {
      setBannerAd(banner);
    } else {
      setBannerAd(undefined);
    }
  }

  const shouldShowAds = async () => {
    const shouldShow = await AsyncStorage.getItem('showAds');
    
    if ((shouldShow && shouldShow === 'true') || !shouldShow) {
      fetchBannerAd();
    } else {
      setBannerAd(undefined);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  useEffect(() => {
    let date = new Date(Number(userState.userMemberExpired) * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    //Extract year, month, and day
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Months are 0-based, so add 1
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.userMemberExpired]);

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
            {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
          </View>
          {/* 游客登录  component*/}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (userState.userToken == "") {
                dispatch(showLoginAction());
                // console.log('props{');
                // setActionType('login');
                // setSignUpOrLogin(true);
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 10,
                flexDirection: "row",
              }}
            >
              {userState.userToken == "" || Platform.OS === "android" ? (
                <ProfileIcon
                  style={{ color: colors.button, width: 18, height: 18 }}
                />
              ) : (
                <FastImage
                  style={{
                    height: 60,
                    width: 60,
                    marginVertical: 2,
                  }}
                  resizeMode={"contain"}
                  source={require("@static/images/profilePic.png")}
                />
              )}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  gap: 5,
                  justifyContent: "center",
                  paddingLeft: 12,
                }}
              >
                {userState.userToken == "" && (
                  <>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      游客您好！
                    </Text>
                    <Text style={{ color: "#ffffff", fontSize: 14 }}>
                      登录可享更多服务
                    </Text>
                  </>
                )}
                {userState.userToken != "" && (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingRight: 30,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: 20,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {userState.userName}
                      </Text>
                      {userState.userMemberExpired >=
                        userState.userCurrentTimestamp && (
                        <Image
                          style={styles.iconStyle}
                          source={require("@static/images/profile/vip.png")}
                        />
                      )}
                    </View>

                    {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                    {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                      <Text style={{ color: colors.primary, fontSize: 14 }}>
                        VIP会员有效日期至{displayedDate}
                      </Text>
                    )}
                  </>
                )}
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {userState.userToken == "" && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {userState.userToken != "" && (
                  <EditIcn width={29} height={29} color={colors.muted} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          {bannerAd && bannerAd.map((ad => {
            return <BannerContainer
              bannerAd={ad}
              />
          }))
          }

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {Platform.OS === "ios" && SHOW_ZF_CONST && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("付费VIP");
                    // dispatch(showLoginAction());
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          YSConfig.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {YSConfig.instance.tabConfig != null &&
                      YSConfig.instance.len == 5 ? (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告 看体育直播
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("邀请");
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText("邀请好友", "")}
                      </Text>
                      <Text
                        style={{
                          ...textVariants.small,
                          color: colors.button,
                        }}
                      >
                        VIP奖励 享更多权益
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            {Platform.OS === "ios" && !SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}

            {Platform.OS === "android" && !SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}

            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#1A1E21",
    flex: 1,
  },
  highlightColor: {
    color: "#FAC33D", // Change this color to your desired highlight color
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
