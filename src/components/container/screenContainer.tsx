import { ScrollView, StyleSheet } from 'react-native';

interface Props {
    children?: React.ReactNode, 
    params?: any[]
}
export default function ScreenContainer({children, ...params}:Props) {
    return (
        <ScrollView style={styles.container} {...params} contentContainerStyle={{paddingBottom: 30}} >
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        paddingVertical: 200
    }
});