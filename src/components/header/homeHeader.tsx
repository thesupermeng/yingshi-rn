import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { HomeStackScreenProps } from '../../types/navigationTypes';

export default function MainHeader({ navigation }: any) {
    const nav = () => {
        if (navigation !== undefined) {
            navigation.navigate('Search')
        }
    }
    return (
        <View style={styles.container}>
            <Logo />
            <SearchBar onPress={nav} />
            <TouchableOpacity style={styles.historyBtn}>
                <History height="35" width='35' />
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