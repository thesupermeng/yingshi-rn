import {
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import Orientation from "react-native-orientation-locker";
import { useEffect, useMemo, useState } from "react";
import { screenModel } from "@type/screenType";
import { RootState } from "@redux/store";
import { useAppSelector } from "@hooks/hooks";
interface Props {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isHome?: boolean;
  isPlay?: boolean;
  isBgHide?: boolean;
  isTranslucent?: boolean;
  isLightContent?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isHome = false,
  isPlay = false,
  isBgHide =false,
  isTranslucent = false,
  isLightContent = true

}: Props) {
  const windowHeight = Dimensions.get("window").height;
  let bottomTabHeight = 0;

  try {
    useBottomTabBarHeight();
    bottomTabHeight = useBottomTabBarHeight();
  } catch (e) {
    bottomTabHeight = 0;
  }

  const displayHeight = windowHeight - bottomTabHeight;

  const insets = useSafeAreaInsets();
  const { spacing, colors } = useTheme();

  // const screenState: screenModel = useAppSelector(
  //   ({ screenReducer }: RootState) => screenReducer
  // );

  // useEffect(() => {
  //   if (isTranslucent) {
  //     if (isLightContent) {
  //       StatusBar.setBackgroundColor('transparent');
  //       StatusBar.setBarStyle('light-content');
  //     } else {
  //       StatusBar.setBackgroundColor('transparent');
  //       StatusBar.setBarStyle('dark-content');
  //     }
  //   } else {
  //     if (isLightContent) {
  //       StatusBar.setBackgroundColor('#000');
  //       StatusBar.setBarStyle('light-content');
  //     } else {
  //       StatusBar.setBackgroundColor('#fff');
  //       StatusBar.setBarStyle('dark-content');
  //     }
  //   }
  // }, [])

  const statusBarBackgroundColor = useMemo(() => {
    if (isTranslucent) {
      return 'transparent'
    }
    if (isBgHide) {
      return 'inherit'
    } else {
      return 'black'
    }
  }, [isTranslucent, isBgHide])


  return (
    <>
      {scrollView ? (
        <ScrollView
          style={{
            backgroundColor: isBgHide ? 'inherit' : colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <StatusBar 
            translucent={isTranslucent}
            backgroundColor={statusBarBackgroundColor}
            barStyle={isLightContent ? "light-content" : "dark-content"}  
          />
          {header}
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: isBgHide ? 'inherit' : colors.background,
            ...styles.viewContainer,
            paddingTop: isPlay ? 0 : insets.top,
            paddingBottom: !isHome || isPlay ? 0 : insets.bottom,
            // // video fullscreen here
            paddingLeft: isPlay ? 0 : insets.left,
            paddingRight: isPlay ? 0 : insets.right,
            // height: displayHeight,
          }}
        >
          <StatusBar 
            translucent={isTranslucent}
            backgroundColor={statusBarBackgroundColor}
            barStyle={isLightContent ? "light-content" : "dark-content"} 
          />
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
