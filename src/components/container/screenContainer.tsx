import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
interface Props {
    children?: React.ReactNode,
    scrollView?: boolean,
    footer?: React.ReactNode,
    containerStyle?: typeof StyleSheet,
    header?: React.ReactNode,
}
export default function ScreenContainer({ children, scrollView = false, footer, containerStyle, header }: Props) {
    const windowHeight = Dimensions.get('window').height;
    const bottomTabHeight = useBottomTabBarHeight();
    const displayHeight = windowHeight - bottomTabHeight;
    
    const insets = useSafeAreaInsets();
    const { spacing, colors } = useTheme();
    return (
        <>
            {
                scrollView
                    ? <ScrollView style={{
                        backgroundColor: colors.background,
                        ...styles.container,
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                    }}
                        stickyHeaderIndices={[0]}
                        contentContainerStyle={{ paddingBottom: 30 }} >
                        <>
                            {header}
                        </>
                        <View style={{
                            ...styles.innerContainer,
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                            ...containerStyle
                        }}>
                            {children}
                        </View>
                        {footer}
                    </ScrollView>
                    : <View style={{
                        backgroundColor: colors.background,
                        ...styles.viewContainer,
                        paddingTop: insets.top,
                        // paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        height: displayHeight
                    }}>
                        <View style={{
                            ...styles.innerContainer,
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                            ...containerStyle
                        }}>
                            {children}
                        </View>
                        {footer}
                    </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 4
    },
    innerContainer: {
        flex: 1,
    }
});