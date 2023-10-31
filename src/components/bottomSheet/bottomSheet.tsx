
import { useTheme } from '@react-navigation/native';
import { BottomSheet as ReactBottomSheet } from '@rneui/base';
import { useEffect, useState } from 'react';
import { Keyboard, Platform, View, ViewStyle } from 'react-native';

interface Props {
    children?: React.ReactNode,
    isVisible: boolean,
    onBackdropPress: () => void,
    containerStyle?: ViewStyle,
    height?: string,
    supportedOrientations?: string[]
}

export default function BottomSheet({
    children,
    isVisible,
    onBackdropPress,
    containerStyle,
    height = 'auto',
    supportedOrientations = ['portrait', 'landscape'],
}: Props) {
    const { colors } = useTheme();
    const [bottomPosition, setBottomPosition] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
            if (Platform.OS === 'ios') setBottomPosition(e.endCoordinates.height);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
            if (Platform.OS === 'ios') setBottomPosition(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <ReactBottomSheet
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            backdropStyle={{
                backgroundColor: '#000000aa'
            }}
            containerStyle={{
                position: 'absolute',
                bottom: bottomPosition,
                width: '100%',
                height: height,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: colors.bottomSheet,
                ...containerStyle,
            }}
            modalProps={{
                supportedOrientations: supportedOrientations,
            }}
        >
            <View style={{ width: '100%', height: 14, alignItems: 'center', marginTop: 10 }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 40,
                    height: 5,
                    borderRadius: 10,
                }} />
            </View>
            {children}
        </ReactBottomSheet>
    );
}
