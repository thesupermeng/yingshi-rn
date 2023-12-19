import { useMemo } from "react";
import { KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { CPressable } from "../pressable";
import { useTheme } from "@react-navigation/native";
import { useCBottomSheetHook } from "./hook";


type CProps = {
    children?: React.ReactNode,
    isVisible: boolean;
    onBackdropPress?: () => void,
    height?: string | number,
    maxHeight?: string | number,
    minHeight?: string | number,
    showWhiteLine?: boolean,
    style?: ViewStyle,
    backdropColor?: string,
    supportedOrientations?: ("portrait" | "landscape")[];
    disabledKeyboardAvoiding?: boolean,
}

export const CBottomSheet = ({
    children,
    isVisible = false,
    onBackdropPress,
    height = 'auto',
    maxHeight,
    minHeight,
    showWhiteLine = true,
    style,
    backdropColor = '#000000aa',
    supportedOrientations = ['portrait'],
    disabledKeyboardAvoiding = false,
}: CProps) => {
    const { colors } = useTheme();

    const styles = useMemo(() => styleCBottomSheet({
        backdropColor: backdropColor,
        bottomsheetColor: colors.bottomSheet,
        bottomsheetPaddingTop: showWhiteLine ? 0 : 40,
    }), [backdropColor, colors.bottomSheet, showWhiteLine]);

    const hook = useCBottomSheetHook();

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            supportedOrientations={supportedOrientations}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled={!disabledKeyboardAvoiding}
            >
                <CPressable
                    style={styles.backdrop}
                    onPress={onBackdropPress}
                />

                <View
                    style={{
                        backgroundColor: styles.backdrop.backgroundColor,
                    }}
                >
                    <View
                        style={{
                            ...styles.bottomsheet,
                            height: height,
                            maxHeight: maxHeight,
                            minHeight: minHeight,
                        }}
                    >
                        {showWhiteLine &&
                            <View
                                style={styles.whiteLineContainer}
                            >
                                <View
                                    style={styles.whiteLine}
                                />
                            </View>
                        }

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                ...styles.containerContainer,
                                ...style,
                                paddingBottom: hook.paddingBottom,
                            }}
                        >
                            {children}
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styleCBottomSheet = ({
    backdropColor,
    bottomsheetColor,
    bottomsheetPaddingTop,
}: {
    backdropColor: string,
    bottomsheetColor: string,
    bottomsheetPaddingTop: number,
}) => StyleSheet.create({
    backdrop: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: backdropColor,
    },
    bottomsheet: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: bottomsheetColor,
        paddingTop: bottomsheetPaddingTop,
    },
    whiteLineContainer: {
        width: "100%",
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
    },
    whiteLine: {
        backgroundColor: "white",
        width: 40,
        height: 5,
        borderRadius: 10,
    },
    containerContainer: {
        padding: 20,
    }
});