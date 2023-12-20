import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Clipboard,
  Linking,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import WhatsappIcn from "@static/images/invite/whatsapp.svg";
import FastImage from "../common/customFastImage";
import TelegramIcn from "@static/images/invite/telegram.svg";
import FacebookIcn from "@static/images/invite/fb.svg";
import WechatIcn from "@static/images/invite/wechat.svg";

// import TwitterIcn from '@static/images/invite/twitter.svg';
import WeiboIcn from "@static/images/invite/weibo.svg";
import CopyIcn from "@static/images/invite/copy.svg";
import ProfileIcn from "@static/images/invite/profile-icon.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";


import LinearGradient from "react-native-linear-gradient";
import { userModel } from "@type/userType";
import { useAppDispatch } from "@hooks/hooks";
import { showLoginAction } from "@redux/actions/screenAction";
import Share from "react-native-share";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/constants";
import { YSConfig } from "../../../../ysConfig";
import NotificationModal from "../modal/notificationModal";
interface Props {
  userState: userModel;
}
export default function InviteCard({ userState = {} }: Props) {
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1]; // 10% and 100%
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [shareOptions, setShareOptions] = useState({
    message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视`,
    url: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    // Assuming you have the two timestamps
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;

    // Convert Unix timestamps to milliseconds (multiply by 1000)
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;

    // Calculate the time difference in milliseconds
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;

    // Calculate the time difference in days
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    // Round the time difference to the nearest whole number
    //const roundedTimeDifferenceDays = Math.round(timeDifferenceDays);
    // Round up the time difference to the nearest whole number
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);

    // If the rounded difference is less than 0, set it to 0; otherwise, keep the rounded difference
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;

    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视`,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, [userState]);

  const shareToWhatsApp = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      return;
    }
    const url =
      "https://wa.me/?text=" + shareOptions.message + " " + shareOptions.url; // Replace with your desired URL
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          console.error(`Cannot open URL: ${url}`);
        } else {
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      return;
    }
    const message = shareOptions.message + " " + shareOptions.url;
    const appURL = `tg://msg?text=${message}`;
    const webURL = `https://t.me/share/url?url=${message}`;

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {
          console.log("supported telegram web");
          // Open the Telegram app
          Linking.openURL(webURL);
        } else {
          console.log("not supported telegram web");
          // Fallback to the web link
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
    if (userState.userToken === "") {
      dispatch(showLoginAction());
      return;
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );
    const appURL = `weixin://send?text=${message}`;
    //https://stackoverflow.com/questions/45005036/is-there-any-method-to-share-text-from-mobile-web-to-wechat-by-sharing-button
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {
          // Open the WeChat app
          Linking.openURL(appURL);
        } else {
          console.log("WeChat app not installed.");
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  const shareToWeibo = async () => {
    if (userState.userToken === "") {
      dispatch(showLoginAction());
      return;
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );
    const appURL = `http://service.weibo.com/share/share.php?url=${message}`;

    Linking.openURL(appURL);
  };

  const shareToFacebook = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      return;
    }
    try {
      await Share.shareSingle({
        ...shareOptions,
        social: Share.Social.FACEBOOK,
      });
      // Linking.openURL(
      //   'https://www.facebook.com/sharer/sharer.php?u=' + '' + shareOptions.url,
      // );
    } catch (error) {
      console.error("Error sharing link", error);
    }
  };

  const shareToTwitter = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      return;
    }
    try {
      await Share.shareSingle({
        ...shareOptions,
        social: Share.Social.TWITTER,
      });
    } catch (error) {
      console.log("Error sharing link", error);
    }
  };

  const toggleShare = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      return;
    }
    try {
      const options = {
        title: "分享",
        message: shareOptions.message,
        url: shareOptions.url,
      };
      console.log("options:", options);
      await Share.open(options);
      // console.log('Link shared successfully ');
    } catch (error) {
      console.log("Error sharing link :", error);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#1a1d20",
          // margin: 10,
          borderRadius: 15,
          overflow: "hidden", // Add this line to clip the FastImage
        }}
      >
        {/* crown card component  */}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              paddingTop: 45,
              gap: 10,
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/crown.png")}
            style={{
              height: 180,
              width: 240,
            }}
            resizeMode={"contain"}
          />

          {/* <CrownIcon /> */}
        </View>

        {/* benefit  component  */}
        <LinearGradient
          colors={["#323638", "#1a1d20"]} // An array of gradient colors
          locations={locations}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: -10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: "row", // Set flexDirection to 'row'
            justifyContent: "space-evenly",
           flexWrap: 'wrap', // Allow items to wrap to the next row
          }}
        >
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/vip/vip_logo.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

            <View style={styles.featureItem}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/sport.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>
              <Text style={styles.featureTitle}>体育频道</Text>
            </View>
        
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/vip_adult_video.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>夜来香</Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/ads.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>去广告</Text>
            </View>
          </View>
          
        </LinearGradient>
        {/* invite button  component  */}
        <TouchableOpacity
          onPress={() => {
            if (userState.userToken == "") {
              console.log("toggle login");
              dispatch(showLoginAction());
              // console.log('props{');
              // setActionType('login');
              // setSignUpOrLogin(true);
            } else {
              toggleShare();
            }
          }}
        >
          <View
            style={{
              backgroundColor: colors.primary,
              marginHorizontal: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>
              立即推荐
            </Text>
          </View>
        </TouchableOpacity>
        {/* social media share section  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 33,
            marginVertical: 25,
            marginTop: 15,
            // position: 'relative',
            // bottom: 5,
          }}
        >
          <TouchableOpacity onPress={shareToWhatsApp}>
            <WhatsappIcn style={{ width: 18, height: 18 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareToTelegram}>
            <TelegramIcn />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareToFacebook}>
            <FacebookIcn />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={shareToWeixin}>
            <WechatIcn />
          </TouchableOpacity> */}

          <TouchableOpacity onPress={shareToTwitter}>
            <FastImage
              source={require("@static/images/invite/twitter.png")}
              style={{
                height: 40,
                width: 40,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={shareToWeibo}>
            <WeiboIcn />
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              if (userState.userToken == "") {
                dispatch(showLoginAction());
                return;
              }
              Clipboard.setString(
                shareOptions.message + " " + shareOptions.url
              );
              setIsDialogOpen(true);
            }}
          >
            <CopyIcn />
          </TouchableOpacity>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="复制成功"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </View>
        {/* stat section  */}
        <TouchableOpacity
          onPress={() => {
            if (userState.userToken == "") {
              console.log("toggle login");
              dispatch(showLoginAction());
              // console.log('props{');
              // setActionType('login');
              // setSignUpOrLogin(true);
            } else {
              navigation.navigate("VIP明细", { userState: userState });
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#222528",
              paddingHorizontal: 15,
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
              }}
            >
              <ProfileIcn />
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>统计邀请：</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontWeight: "700",
                }}
              >
                {userState.userTotalInvite.toLocaleString()}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>
                累计奖励明细
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  featureItem: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    width: "40%", // 50% width for 2 items per row
    marginBottom: 15, // Add margin to create spacing between rows
    marginTop: 10,
    marginLeft: "3%",
  },

  featureTitle: { fontSize: 14, color: "#ffffff", fontWeight: "400" },
  imgContainer: {
    backgroundColor: "#3b3e40",
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  featureIcn: {
    flex: 1,
    width: 22,
  },
});