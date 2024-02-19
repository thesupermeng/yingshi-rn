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
import { useEffect, useState } from "react";
import { screenModel } from "@type";
import { RootState } from "@redux";
import { useAppSelector } from "@hooks";
interface Props {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isHome?: boolean;
  isPlay?: boolean;
  isBgHide?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isHome = false,
  isPlay = false,
  isBgHide = false
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
          <StatusBar backgroundColor={isBgHide ? 'inherit' : 'black'} barStyle="light-content" />
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
          <StatusBar backgroundColor={isBgHide ? 'inherit' : 'black'} barStyle="light-content" />
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
