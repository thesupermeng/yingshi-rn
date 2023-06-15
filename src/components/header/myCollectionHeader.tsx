import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigationTypes';

interface Props {
    route: '视频收藏' | '播单收藏' | '合辑收藏',
    navigator: NativeStackNavigationProp<RootStackParamList,  '视频收藏' | '播单收藏' | '合辑收藏', any>
}

export default function CollectionHeader({ route, navigator }: Props) {
    const { textVariants, spacing, colors } = useTheme();

    const btnStyle = (currRoute: '视频收藏' | '播单收藏' | '合辑收藏') => {
        if (route === currRoute) {
            return { ...textVariants.header, color: colors.primary, };
        }
        return { ...textVariants.body, color: colors.muted };
    }

    const underlineStyle = (currRoute: '视频收藏' | '播单收藏' | '合辑收藏') => {
        if (route === currRoute) {
            return { backgroundColor: colors.primary, ...styles.underline };
        }
        return {};
    }

    const navigate = (currRoute: '视频收藏' | '播单收藏' | '合辑收藏') => {
        return () => navigator.navigate(currRoute);
    }

    return (
        <View style={styles.container} gap={spacing.l}>
            <TouchableOpacity onPress={navigate('视频收藏')} >
                <Text style={btnStyle('视频收藏')}>视频</Text>
                <View style={underlineStyle('视频收藏')}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigate('播单收藏')}>
                <Text style={btnStyle('播单收藏')}>播单</Text>
                <View style={underlineStyle('播单收藏')}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigate('合辑收藏')}>
                <Text style={btnStyle('合辑收藏')}>合辑</Text>
                <View style={underlineStyle('合辑收藏')}></View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    underline: {
        marginTop: 2,
        height: 4,
        width: '60%',
        borderRadius: 20,
        alignSelf: 'center'
    }
});