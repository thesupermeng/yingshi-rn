import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
interface Props {
    children?: React.ReactNode,
    scrollView?: boolean,
    footer?: React.ReactNode,
    containerStyle?: typeof StyleSheet,
    header?: React.ReactNode,
}
export default function ScreenContainer({ children, scrollView = false, footer, containerStyle, header }: Props) {
    const insets = useSafeAreaInsets();
    const { spacing } = useTheme();
    return (
        <>
            {
                scrollView
                    ? <ScrollView style={{
                        ...styles.container,
                        paddingTop: insets.top + 10,
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
                        ...styles.viewContainer,
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
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
        paddingTop: 4,
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    }
});