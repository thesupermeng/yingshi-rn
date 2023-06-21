import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
    children?: React.ReactNode,
    params?: any[],
    scrollView?: boolean,
    footer?: React.ReactNode,
    style?: typeof StyleSheet
}
export default function ScreenContainer({ children, scrollView = false, footer, style, ...params }: Props) {
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
                        paddingRight: insets.right
                    }}
                        {...params} contentContainerStyle={{ paddingBottom: 30 }} >
                        <View style={{...styles.innerContainer, ...style}}>
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
                    }} {...params}>
                        <View style={{...styles.innerContainer, ...style}}>
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
        paddingLeft: 10,
        paddingRight: 10,
    }
});