import React, {
  useEffect,
  useMemo,
} from "react";
import {
  NavigationContainer,
  NavigationState
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IQYTabScreen from "./tab";

import {RootStackParamList } from "@type/navigationTypes";
import RNBootSplash from "react-native-bootsplash";
import { RootState } from "@redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from "react-native";
import { useAppSelector, useAppDispatch } from "@hooks/hooks";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/theme";

import { updateNetworkInfo } from "@redux/actions/settingsActions";

import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { CRouteInitializer } from "../../routes/router";
import LaunchScreen from "./launch";
import { IQiyiApi } from "../api/iqiyi";
import { useQuery } from "@tanstack/react-query";

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const themeReducer = useAppSelector(
    ({ themeReducer }: RootState) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;
  const dispatch = useAppDispatch();

  const handleStateChange = (state: Readonly<NavigationState> | undefined) => {
  
  }

  const fetchHomePages= () =>
    IQiyiApi.getHomeData().then(data => {
      return data;
    });

  const { data: iqiyiHomeData, isFetching: isHomeFetching } = useQuery({
    queryKey: ['iqiyiHomePages'],
    queryFn: () => fetchHomePages(),
  });

  const fetchSVodPages= () =>
    IQiyiApi.getShortVodData().then(data => {
      return data;
    });

  const { data: iqiyiSVodData, isFetching: isSVodFetching } = useQuery({
    queryKey: ['iqiyiSVodPages'],
    queryFn: () => fetchSVodPages(),
  });

  const isLaunching = useMemo(() => {
    // if (!isHomeFetching && !iqiyiHomeData.result) {
    //   return true
    // }
    // if (!isHomeFetching && !iqiyiHomeData.result) {
    //   return true
    // }
    return isHomeFetching || isSVodFetching
  }, [isHomeFetching, isSVodFetching])

 
  useEffect(() => {
    NetInfo.configure({
      // this is huawei url
      reachabilityUrl:
        "http://connectivitycheck.platform.hicloud.com/generate_204",
    });

    const removeNetInfoListener = NetInfo.addEventListener(
      (state: NetInfoState) => dispatch(updateNetworkInfo(state))
    );

    return () => {
      removeNetInfoListener();
    };
  }, []);

  return (
    <>
      {isLaunching && <LaunchScreen/>}
      {!isLaunching && <SafeAreaProvider>
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
            <Stack.Screen 
              name="Home" 
              component={IQYTabScreen} 
              initialParams={{
                homeData: iqiyiHomeData, 
                svodData: iqiyiSVodData
              }}
            />
          </Stack.Navigator>
          <CRouteInitializer />
        </NavigationContainer>
      </SafeAreaProvider>}
    </>
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
