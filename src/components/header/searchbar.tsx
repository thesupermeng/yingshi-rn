import Logo from '../../../static/images/logo.svg';
import { useTheme } from '@react-navigation/native';
import { TextInput, StyleSheet, View } from 'react-native';

interface Props {
    placeholder?: string;
}

export default function SearchBar({ placeholder = '子弹列车' }: Props) {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <TextInput  defaultValue={placeholder} style={{color: theme.colors.text, ...styles.input}} />
        </View>
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
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        textAlign: 'left',
        borderRadius: 20
    },
});