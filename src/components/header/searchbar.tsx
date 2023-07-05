import { SearchBar } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import SearchIcon from '../../../static/images/search.svg';

interface Props {
    defaultValue?: string;
    onPress?: (onPress: any) => any
}

export default function HomeSearchBar({ defaultValue = '子弹列车', onPress = () => { } }: Props) {
    const { colors, icons, textVariants } = useTheme();
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <SearchBar
                platform="default"
                containerStyle={styles.containerStyle}
                inputContainerStyle={{backgroundColor: colors.search, ...styles.inputContainerStyle }}
                inputStyle={{ ...textVariants.subBody }}
                placeholder="输入搜索关键词"
                placeholderTextColor={colors.text}
                round
                searchIcon={<SearchIcon color={colors.text} height={23} width={23} />}
                value={defaultValue}
                // showCancel={false}
                showLoading={false}
                clearIcon={<></>}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        marginLeft: 8,
        marginRight: 8,
    },
    containerStyle: {
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'left',
        borderRadius: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        // flex: 1,
        // paddingTop: 4,
        // paddingBottom: 4,
        backgroundColor: 'transparent'
    },
    inputContainerStyle: {
        borderRadius: 20,
        pointerEvents: 'none',
        height: 32,
        opacity: 0.6
    }
});