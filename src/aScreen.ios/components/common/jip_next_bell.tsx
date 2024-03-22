import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import EmptyIcon from '@static/images/lineShow.svg';
import { IS_OTHER_SKIN } from '@utility/n_subs_interstitial';

interface XFillButton {
    style?: TextStyle,
    description?: string
}
export default function EmptyList({ style, description }: XFillButton) {
    const { textVariants, colors } = useTheme();
    return (
        <View style={{ ...styles.container, ...style }}>
            <EmptyIcon color={IS_OTHER_SKIN ? 'white' : colors.primary} />
            <Text style={{ ...textVariants.subBody, color: colors.muted, textAlign: 'center', paddingLeft: '20%', paddingRight: '20%' }}>{description}</Text>
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