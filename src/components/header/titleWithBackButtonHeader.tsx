import SearchBar from './searchbar';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Logo from '../../../static/images/logo.svg';
import History from '../../../static/images/history.svg';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../button/backButton';

interface Props {
    title: string
}

export default function TitleWithBackButtonHeader({ title }: Props) {
    const navigation = useNavigation();
    const { textVariants } = useTheme()
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={textVariants.header}>{title}</Text>
            <View style={{width: 44}}></View>
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
    }
});