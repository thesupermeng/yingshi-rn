import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useTheme } from '@react-navigation/native';

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
                    : <Logo width={110}/>
            }
            <SearchBar onPress={() => navigator.navigate('搜索')} />
            <TouchableOpacity onPress={() => navigator.navigate('播放历史')}>
                <History height={26} width={26} color={icons.iconColor} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 8,
    },
});