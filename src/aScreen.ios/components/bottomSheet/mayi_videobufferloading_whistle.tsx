import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CBottomSheet } from "../atoms/bottomSheet";
import { useTheme } from "@react-navigation/native";

type mayi_GoogleViews = {
    isVisible: boolean,
    selections?: string[],
    onButtonPress?: (type: string) => void,
    onBackdropPress?: () => void,
    onCancelPress?: () => void,
}

export const ReportBottomSheet = ({
    isVisible = false,
    selections = [],
    onButtonPress,
    onBackdropPress,
    onCancelPress,
}: mayi_GoogleViews) => {
    const { colors, textVariants } = useTheme();

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
        >
            <FlatList
                data={selections}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            if (onButtonPress) onButtonPress(item)
                        }}>
                            <Text style={{ ...textVariants.subBody, ...styles.btnText }}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            <TouchableOpacity onPress={onCancelPress}>
                <Text style={{ ...textVariants.subBody, ...styles.btnText, color: colors.muted }}>
                    取消
                </Text>
            </TouchableOpacity>
        </CBottomSheet >
    );
}


const styles = StyleSheet.create({
    btnText: {
        textAlign: 'center',
        paddingVertical: 10,
    },
});
