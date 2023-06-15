import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigationTypes';

interface Props {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: typeof StyleSheet,
}
export default function MainHeader({ logo, navigator, headerStyle }: Props) {
    const { icons } = useTheme();
    return (
        <View style={{...styles.container, ...headerStyle}}>
            {
                logo
                    ? logo
                    : <Logo />
            }
            <SearchBar onPress={() => navigator.navigate('搜索')} />
            <TouchableOpacity style={styles.historyBtn} onPress={() => navigator.navigate('我的', {screen: '播放历史'})}>
                <History height={35} width={35} color={icons.iconColor} />
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