
import React, { useEffect, useRef, useState } from "react";

import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabIcon from "../assets/images/tab_home.svg";
import HomeTabIconH from "../assets/images/tab_home_h.svg";
import SVodTabIcon from "../assets/images/tab_svod.svg";
import SVodTabIconH from "../assets/images/tab_svod_h.svg";
import MemberTabIcon from "../assets/images/tab_member.svg";
import MemberTabIconH from "../assets/images/tab_member_h.svg";
import DiscoveryTabIcon from "../assets/images/tab_discovery.svg";
import DiscoveryTabIconH from "../assets/images/tab_discovery_h.svg";
import ProfileTabIcon from "../assets/images/tab_profile.svg";
import ProfileTabIconH from "../assets/images/tab_profile_h.svg";

import { RootState } from "@redux/store";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch } from "@hooks/hooks";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/theme";

import { CLangKey } from "@constants";

import HomeScreen from "../screens/home/HomeScreen";
import SVodScreen from "../screens/svod/SVodScreen";
import MemberScreen from "../screens/member/MemberScreen";
import DiscoveryScreen from "../screens/discovery/DiscoveryScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { toggleTheme } from "@redux/actions/themeAction";
import FastImage from "react-native-fast-image";
import { Dialog } from "@rneui/themed";
import RNRestart from "react-native-restart";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type IQYTabParamList = {
  首页: {data: any};
  随刻视频: {data: any};
  会员中心: undefined;
  发现: undefined;
  我的: undefined;
};

export default function IQYTabScreen({ navigation, route }: BottomTabScreenProps<any>) {
  const IQYTab = createBottomTabNavigator<IQYTabParamList>();
  const themeReducer = useAppSelector(
    ({ themeReducer }: RootState) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;
  const {homeData, svodData} = route.params as any;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const isDark = useRef(theme.dark);
  const focusDarkColor = "#FFFFFF";
  const focusLightColor = "#00CF55";
  const defocusDarkColor = "#A5A3A4";
  const defocusLightColor = "#1A1A1A";

  const dispatch = useAppDispatch();

  const [timerSeconds, setTimerSeconds] = useState(180);
  const timerReminder = useRef(180);
  const timerInterval = useRef<NodeJS.Timeout>();

  const [openCountDown, setOpenCountDown] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const countDown = () => {
    console.debug("==> count down", timerReminder.current);
    timerReminder.current -= 1
    setTimerSeconds(timerReminder.current);
  }

  const startTimer = () => {
    if (!timerInterval.current) {
      timerInterval.current = setInterval(() => {
        if (timerReminder.current <= 0) {
          clearTimer();
          setOpenCountDown(false);
          setOpenDialog(true);
        } else {
          countDown();
        }
      }, 1000);
    }
  };
 
  const clearTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = undefined;
    }
  };
 
  useEffect(() => {
    isDark.current = false
    dispatch(toggleTheme(false))
    startTimer();

    return () => {
      clearTimer();
    }
  }, [])

  return  (
    <View style={{width: '100%', height: '100%', position: "relative"}}>
      <IQYTab.Navigator
        screenListeners={{
          tabPress: (e) => {
            if (e.target?.includes('随刻视频')) {
              isDark.current = true
              dispatch(toggleTheme(true))
            } else {
              isDark.current = false
              dispatch(toggleTheme(false))
            }
            if (e.target?.includes('随刻视频') || e.target?.includes('会员中心')) {
              StatusBar.setBarStyle('light-content');
            } else {
              StatusBar.setBarStyle('dark-content');
            }
          },
        }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: [
            hasNotch || Platform.OS === "android"
            ? styles.navStyleWithNotch
            : styles.navStyle,
            {
              backgroundColor: isDark.current ? "#000" : "#fff",
              borderTopWidth: 1
            }
          ],  
          tabBarLabelStyle: {
            paddingBottom: 6,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let icon: React.ReactNode;
            let activeColor = isDark.current ? focusDarkColor : focusLightColor
            let deactiveColor = isDark.current ? defocusDarkColor : defocusLightColor
            if (route.name === "首页") {
              icon = focused ? <HomeTabIconH
                width={iconWidth}
              /> : <HomeTabIcon
                width={iconWidth}
                color={focused ? activeColor : deactiveColor}
              />
            } else if (route.name === "随刻视频") {
              icon = focused ? <SVodTabIconH
                width={iconWidth}
              /> : <SVodTabIcon
                width={iconWidth}
                color={focused ? activeColor : deactiveColor}
              />
            } else if (route.name === "会员中心") {
              icon = focused ? <MemberTabIconH
                width={iconWidth}
              /> : <MemberTabIcon
                width={iconWidth}
                color={focused ? activeColor : deactiveColor}
              />
            } else if (route.name === "发现") {
              icon = focused ? <DiscoveryTabIconH
                width={iconWidth}
              /> : <DiscoveryTabIcon
                width={iconWidth}
                color={focused ? activeColor : deactiveColor}
              />
            } else if (route.name === "我的") {
              icon = focused ? <ProfileTabIconH
                width={iconWidth}
              /> : <ProfileTabIcon
                width={iconWidth}
                color={focused ? activeColor : deactiveColor}
              />
            } 
            return icon;
          },
          tabBarLabel: ({ focused, color, children }) => {
            let label = children;
            let activeColor = isDark.current ? focusDarkColor : focusLightColor
            let deactiveColor = isDark.current ? defocusDarkColor : defocusLightColor
            if (label === '首页') {
              label = CLangKey.homeTab.tr();
            } else if (label === '随刻视频') {
              label = CLangKey.svodTab.tr();
            } else if (label === '会员中心') {
              label = CLangKey.vipCenterTab.tr();
              activeColor = theme.dark ? "#663C00" : "#663C00"
            } else if (label === '发现') {
              label = CLangKey.discoveryTab.tr();
            } else if (label === '我的') {
              label = CLangKey.profileTab.tr();
            }
            return <Text style={{ 
              fontSize: 12, 
              fontWeight: '500',
              color: focused ? activeColor : deactiveColor, 
              paddingBottom: 5 
            }}>
              {label}
            </Text>
          }
        })}
      >
        <IQYTab.Screen name="首页" component={HomeScreen} initialParams={homeData}/>
        <IQYTab.Screen name="随刻视频" component={SVodScreen} initialParams={svodData}/>
        <IQYTab.Screen name="会员中心" component={MemberScreen} />
        <IQYTab.Screen name="发现" component={DiscoveryScreen} />
        <IQYTab.Screen name="我的" component={ProfileScreen} />
      </IQYTab.Navigator>


      {openCountDown && <View style={{
        position: "absolute", 
        left: 20, right: 20, bottom: 80, 
        aspectRatio: 5.9, 
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <FastImage 
          style={{width: "100%", height: "100%"}}
          source={require("../assets/images/couterdown.png")}
          resizeMode="contain"
        />
        <Text style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#fff',
          shadowOffset: { width: 10, height: 10 },
          shadowRadius: 2,
          shadowColor: 'black',//'#161f71',
          shadowOpacity: 1,
        }}>恭喜，您被平台选中，距离升级Pro版还剩{timerSeconds}秒</Text>
      </View>}

      <Dialog
        isVisible={openDialog}
        overlayStyle={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 16, overflow: 'hidden'}}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        onBackdropPress={() => {}}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: '800' }}>重启应用程序</Text>
          <Text style={{ color: "#000", fontSize: 13, fontWeight: '400' }} >已完成更新，体验最新版本</Text>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity style={{flex:1}} onPress={() => {
              setOpenDialog(false);
            }}>
              <Text style={{ color: "#007aff", fontSize: 16, fontWeight: '800', textAlign: 'center'}}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}} onPress={() => {
              AsyncStorage.setItem("access", "11111111").then(() => {
                RNRestart.Restart();
              })
            }}>
              <Text style={{ color: "#007aff", fontSize: 16, fontWeight: '800', textAlign: 'center'}}>重启</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog>
    </View>
  );
}

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
  expiredButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    backgroundColor: '#D1AC7D',
    paddingHorizontal: 30,
    marginTop: 16
  },
  expiredButtonText: {
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
