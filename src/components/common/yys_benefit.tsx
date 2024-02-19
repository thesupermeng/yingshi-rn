import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { EmptySvg } from '@static';

interface yysIconarrowrightorangeStation {
    style?: TextStyle,
    description?: string,
    additionalElement?: any
}
export default function EmptyList({ style, description, additionalElement }: yysIconarrowrightorangeStation) {
    const { textVariants, colors } = useTheme();
    return (
        <View style={{ ...styles.container, ...style }}>
            <EmptySvg />
            <Text style={{ ...textVariants.subBody, color: colors.muted, textAlign: 'center', paddingLeft: '20%', paddingRight: '20%', paddingVertical: 11 }}>{description}</Text>
            {additionalElement}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '50%'
    },
});