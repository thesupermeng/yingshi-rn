import { ScrollView, StyleSheet, View, ViewStyle, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
interface Props {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isVideoLandscape?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isVideoLandscape = false,
}: Props) {
  const windowHeight = Dimensions.get('window').height;
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
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle='light-content' />
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
          <>{header}</>
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
            paddingBottom: isVideoLandscape ? 0 : insets.bottom,
            // video fullscreen here
            paddingLeft: isVideoLandscape ? 0 : insets.left,
            paddingRight: isVideoLandscape ? 0 : insets.right,
            height: displayHeight,
          }}>
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
    paddingTop: 4,
    flexGrow: 1,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
