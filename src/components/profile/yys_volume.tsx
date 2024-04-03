import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TickedIcon from '@static/images/ticked.svg';
import { IS_OTHER_SKIN } from "@utility/yys_ajax_switch";

type yys_ConfigureUimanager = {
    isReadChecked: boolean,
    onPress: () => void,
    onPressUserAgreement: () => void,
    onPressPrivacyPolicy: () => void,
}

export const ReadAgreementPrivacyPolicy = ({
    isReadChecked,
    onPress,
    onPressUserAgreement,
    onPressPrivacyPolicy,
}: yys_ConfigureUimanager) => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyle({ colors }), [colors]);

    return <View
        style={styles.container}
    >
        <TouchableOpacity onPress={onPress}>
            {isReadChecked && (
                <Image
                source={require("@static/images/profile/ticked.png")}
                style={styles.checkImage}
                resizeMode="contain"
            />
            )}

            {!isReadChecked && (
                <Image
                    source={require("@static/images/profile/dangerCurrent.png")}
                    style={styles.checkImage}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>

        <Text style={styles.descriptionText}>我已阅读并同意</Text>

        <TouchableOpacity
            onPress={onPressUserAgreement}
        >
            <Text style={styles.linkText}>用户协议</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>和</Text>
        <TouchableOpacity
            onPress={onPressPrivacyPolicy}
        >
            <Text style={styles.linkText}>隐私协议</Text>
        </TouchableOpacity>
    </View>;
}

const createStyle = ({ colors }: any = {}) => StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        marginBottom: 20,
    },
    checkImage: {
        height: 16,
        width: 16,
        marginRight: 5,
    },
    descriptionText: {
        color: "#9c9c9c",
    },
    linkText: {
        color: colors?.primary,
    }
});