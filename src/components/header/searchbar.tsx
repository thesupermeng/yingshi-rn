import { SearchBar } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import SearchIcon from '../../../static/images/search.svg';

interface Props {
    defaultValue?: string;
    onPress?: (onPress: any) => any
}

export default function HomeSearchBar({ defaultValue = '子弹列车', onPress = () => { } }: Props) {
    const {colors, icons} = useTheme();
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <SearchBar
                platform="default"
                containerStyle={styles.containerStyle}
                inputContainerStyle={{ color:colors.text, backgroundColor: colors.search, ...styles.inputContainerStyle }}
                placeholder="输入搜索关键词"
                placeholderTextColor={colors.text}
                round
                searchIcon={<SearchIcon color={colors.muted}/>}
                value={defaultValue}
                showCancel={false}
                showLoading={false}
                clearIcon={<></>}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 8,
        marginRight: 8,
        height: '90%',
    },
    containerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
        margin: 0,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flexGrow: 1,
        borderRadius: 100,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        borderRadius: 100,
        pointerEvents: 'none'
    }
});