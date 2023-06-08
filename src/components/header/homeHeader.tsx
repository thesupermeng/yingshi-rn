import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
export default function MainHeader() {
    const navigation = useNavigation();
    const { icons } = useTheme()
    return (
        <View style={styles.container}>
            <Logo />
            <SearchBar onPress={() => navigation.navigate('首页', { screen: '搜索' })} />
            <TouchableOpacity style={styles.historyBtn}>
                <History height="35" width='35' color={icons.iconColor} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    }
});