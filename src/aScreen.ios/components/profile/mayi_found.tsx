import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TickedIcon from '@static/images/copy_ugDetailsTwitter.svg';
import { useMemo } from "react";
import { IS_OTHER_SKIN } from "@utility/mayi_middleware_apps";

type mayi_GoogleViews = {
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
}: mayi_GoogleViews) => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyle({ colors }), [colors]);

    return <View
        style={styles.container}
    >
        <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
            {isReadChecked && (
                <TickedIcon
                    style={styles.checkImage}
                    color={colors.primary}
                    width={16}
                    height={16}
                    fill={"white"}
                />
            )}

            {!isReadChecked && (
                <Image
                    source={require("@static/images/profile/iconpipexpandLibturbomodulejsijni.png")}
                    style={styles.checkImage}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>

        <Text style={styles.descriptionText}>我已阅读并同意</Text>

        <TouchableOpacity activeOpacity={0.85}
            onPress={onPressUserAgreement}
        >
            <Text style={styles.linkText}>用户协议</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>和</Text>
        <TouchableOpacity activeOpacity={0.85}
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