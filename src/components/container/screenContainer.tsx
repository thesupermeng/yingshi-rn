import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
    children?: React.ReactNode,
    params?: any[],
    scrollView?: boolean,
    footer?: React.ReactNode,
}
export default function ScreenContainer({ children, scrollView = false, footer, ...params }: Props) {
    const insets = useSafeAreaInsets();
    return (
        <>
            {
                scrollView
                    ? <ScrollView style={{...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom}} {...params} contentContainerStyle={{ paddingBottom: 30 }} >
                        <View style={styles.innerContainer}>
                            {children}
                        </View>
                        {footer}
                    </ScrollView>
                    : <View style={{...styles.viewContainer, paddingTop: insets.top, paddingBottom: insets.bottom }} {...params}>
                        <View style={styles.innerContainer}>
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
        paddingLeft: 15,
        paddingRight: 15,
    }
});