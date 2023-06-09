import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
interface Props {
    children?: React.ReactNode,
    onPress?: any,
    params?: any[],
    btnStyle?: typeof StyleSheet
}
export default function submitButton({ children, onPress, btnStyle, ...params }: Props) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <Button></Button>
    );
}

const styles = StyleSheet.create({
    btn: {
        padding: 10
    }
});