import { useMemo } from "react";
import { KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { CPressable } from "../pressable";
import { useTheme } from "@react-navigation/native";
import { useCBottomSheetHook } from "./hook";
import SpinnerOverlay from "../../modal/SpinnerOverlay";


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
    isLoading?: boolean,
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
    isLoading = false,
}: CProps) => {
    const { colors } = useTheme();

    const styles = useMemo(() => styleCBottomSheet({
        backdropColor: backdropColor,
        bottomsheetColor: colors.bottomSheet,
        bottomsheetPaddingTop: showWhiteLine ? 0 : 40,
        contentContainerHeight: height,
    }), [backdropColor, colors.bottomSheet, showWhiteLine, height]);

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
                        height: height,
                        maxHeight: maxHeight,
                        minHeight: minHeight,
                    }}
                >
                    <SpinnerOverlay visible={isLoading} />

                    <View style={styles.bottomsheet}>
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
                                marginBottom: hook.marginBottom,
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
    contentContainerHeight,
}: {
    backdropColor: string,
    bottomsheetColor: string,
    bottomsheetPaddingTop: number,
    contentContainerHeight: string | number,
}) => StyleSheet.create({
    backdrop: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: backdropColor,
    },
    bottomsheet: {
        height: contentContainerHeight === 'auto' ? 'auto'
            : '100%',
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
        height: contentContainerHeight === 'auto' ? 'auto'
            : '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
        // prevent to use padding top or bottom
    }
});