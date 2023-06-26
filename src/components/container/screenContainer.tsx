import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
    children?: React.ReactNode,
    scrollView?: boolean,
    footer?: React.ReactNode,
    style?: typeof StyleSheet,
    header?: React.ReactNode,
}
export default function ScreenContainer({ children, scrollView = false, footer, style, header }: Props) {
    const insets = useSafeAreaInsets();
    return (
        <>
            {
                scrollView
                    ? <ScrollView style={{
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
                        <View style={{ ...styles.innerContainer, ...style }}>
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
                        <View style={{ ...styles.innerContainer, ...style }}>
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
        paddingLeft: 20,
        paddingRight: 20,
    }
});