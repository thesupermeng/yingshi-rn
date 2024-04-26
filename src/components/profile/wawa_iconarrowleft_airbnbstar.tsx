import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TickedIcon from '@static/images/largesoundIconrightorange.svg';
import { useMemo } from "react";
import { IS_OTHER_SKIN } from "@utility/wawa_iconpointscore";

type wawaAwayShow = {
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
}: wawaAwayShow) => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyle({ colors }), []);

    return <View
        style={styles.container}
    >
        <TouchableOpacity onPress={onPress}>
            {isReadChecked && (
                <TickedIcon
                    style={styles.checkImage}
                    color={IS_OTHER_SKIN ? colors.success : colors.primary}
                    width={16}
                    height={16}
                />
            )}

            {!isReadChecked && (
                <Image
                    source={require("@static/images/profile/detailGreyarrowupLeague.png")}
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

const createStyle = ({ colors }: any) => StyleSheet.create({
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