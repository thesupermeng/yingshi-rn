import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import EmptyIcon from '@static/images/empty.svg';

interface Props {
    style?: TextStyle,
    description?: string, 
    additionalElement?: any
}
export default function EmptyList({ style, description, additionalElement }: Props) {
    const { textVariants, colors } = useTheme();
    return (
        <View style={{ ...styles.container, ...style }}>
            <EmptyIcon />
            <Text style={{ ...textVariants.subBody, color: colors.muted, textAlign:'center', paddingLeft: '20%', paddingRight: '20%', paddingVertical: 11 }}>{description}</Text>
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