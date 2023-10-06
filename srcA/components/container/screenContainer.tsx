import { ScrollView, StyleSheet, View, ViewStyle, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { useEffect, useState } from 'react';
interface Props {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isHome?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isHome = false,
}: Props) {
  const windowHeight = Dimensions.get('window').height;
  let bottomTabHeight = 0;
  const [isLandscape, setIsLandscape] = useState(false);

  try {
    useBottomTabBarHeight();
    bottomTabHeight = useBottomTabBarHeight();
  } catch (e) {
    bottomTabHeight = 0;
  }

  const displayHeight = windowHeight - bottomTabHeight;

  const insets = useSafeAreaInsets();
  const { spacing, colors } = useTheme();

  const handleOrientation = (orientation: any) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, [handleOrientation, Orientation]);

  return (
    <>
      {scrollView ? (
        <ScrollView
          style={{
            backgroundColor: colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingBottom: 30 }}>
          <StatusBar
            backgroundColor='black'
            barStyle="light-content"
          />
          {header}
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}>
            {children}
          </View>
          {footer}
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: colors.background,
            ...styles.viewContainer,
            paddingTop: insets.top,
            paddingBottom: !isHome ? 0 : insets.bottom,
            // // video fullscreen here
            paddingLeft: insets.left,
            paddingRight: insets.right,
            // height: displayHeight,
          }}>
          <StatusBar
            backgroundColor='black'
            barStyle="light-content"
          />
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}>
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