import Logo from '../../../static/images/logo.svg';
import { useTheme } from '@react-navigation/native';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

interface Props {
    placeholder?: string;
    onPress?: (onPress: any) => any
}

export default function SearchBar({ placeholder = '子弹列车', onPress = () => {}}: Props) {
    const theme = useTheme();
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <TextInput defaultValue={placeholder} style={{ color: theme.colors.text, backgroundColor: theme.colors.search, ...styles.input }} editable={false} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        height: '90%',
    },
    input: {
        paddingLeft: 20,
        textAlign: 'left',
        borderRadius: 20
    },
});