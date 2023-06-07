import { StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '../../../static/images/back_arrow.svg';
interface Props {
    children?: React.ReactNode,
    onPress?: any,
    params?: any[]
}
export default function BackButton({ children, onPress, ...params }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <BackIcon></BackIcon>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        padding: 10
    }
});