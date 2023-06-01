import SearchBar from './searchbar';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
export default function MainHeader() {
    return (
        <View style={styles.container}>
            <Logo />
            <SearchBar />
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
    },
    historyBtn: {
        // float: 'right',
        // alignSelf: 'center'
    }
});