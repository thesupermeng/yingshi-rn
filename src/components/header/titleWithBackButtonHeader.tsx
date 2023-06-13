import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../button/backButton';

interface Props {
    title?: string,
    onBack?: any,
    headerStyle?: typeof StyleSheet
}

export default function TitleWithBackButtonHeader({ title, onBack, headerStyle }: Props) {
    const { textVariants } = useTheme()
    return (
        <View style={{...styles.container, ...headerStyle}}>
            <BackButton onPress={onBack} />
            <Text style={textVariants.header} numberOfLines={1}>{title}</Text>
            <View style={{ width: 44 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    header: {
        flex: 1
    }
});