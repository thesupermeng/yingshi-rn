import { ScrollView, StyleSheet, View } from 'react-native';

interface Props {
    children?: React.ReactNode,
    params?: any[],
    scrollView?: boolean
}
export default function ScreenContainer({ children, scrollView = false, ...params }: Props) {
    return (
        <>
            {
                scrollView
                    ? <ScrollView style={styles.container} {...params} contentContainerStyle={{ paddingBottom: 30 }} >
                        {children}
                    </ScrollView>
                    : <View style={styles.viewContainer} {...params}>{children}</View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        paddingVertical: 200
    },
    viewContainer: {
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    }
});