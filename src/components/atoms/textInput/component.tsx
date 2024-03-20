import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { StyleSheet, TextInput, TextStyle } from "react-native";


type CTextInputProps = {
    value?: string,
    placeholder?: string,
    placeholderTextColor?: string,
    maxLength?: number,
    onChangeText?: (value: string) => void,
    onFocus?: () => void,
    onBlur?: () => void,
    showErrorStyle?: boolean,
    disabled?: boolean,
    style?: TextStyle,
}

export const CTextInput = ({
    value,
    placeholder,
    placeholderTextColor = '#B6B6B6',
    maxLength,
    onChangeText,
    onFocus,
    onBlur,
    showErrorStyle = false,
    disabled = false,
    style,
}: CTextInputProps) => {
    const { colors, dark } = useTheme();
    const styles = useMemo(() => createStyles({ colors, dark }), [colors, dark]);


    return (
        <>
            <TextInput
                autoCapitalize="none"
                style={[
                    styles.defaultTextInputStyle,
                    !showErrorStyle
                        ? styles.correctTextInputStyle
                        : styles.invalidTextInputStyle,
                    style,
                ]}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                maxLength={maxLength}
                editable={!disabled}
            />
        </>
    );
}


const createStyles = ({ colors, dark }: any) => StyleSheet.create({
    defaultTextInputStyle: {
        paddingLeft: 10,
        height: 42,
        borderRadius: 8,
        fontSize: 14,
        flex: 1,
        backgroundColor: dark ? "#1d2023" : '#D9D9D9',
        color: colors.text,
    },
    correctTextInputStyle: {
        backgroundColor: dark ? "#1d2023" : '#D9D9D9',
        color: colors.text,
    },
    invalidTextInputStyle: {
        backgroundColor: "#311818",
        borderWidth: 1,
        borderColor: "#FF1010",
        color: "#FF1010",
    },
});