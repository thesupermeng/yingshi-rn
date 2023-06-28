import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../button/backButton';

interface Props {
    title?: string,
    onBack?: any,
    headerStyle?: typeof StyleSheet,
    right?: React.ReactNode
}

export default function TitleWithBackButtonHeader({ title, onBack, headerStyle, right }: Props) {
    const { textVariants } = useTheme()
    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <View style={{ paddingTop: 4 }}>
                <BackButton onPress={onBack} />
            </View>
            <Text style={{...textVariants.header, fontSize: 16}} numberOfLines={1}>{title}
            </Text>
            {
                right
                    ? right
                    : <View style={{ opacity: 0, pointerEvents: 'none' }}>
                        <BackButton onPress={onBack} />
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
});