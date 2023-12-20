import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { getUserDetails, updateUsername } from "../../features/user";
import { useSelector } from "@hooks/hooks";
import { userModel } from "@type/userType";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/screenAction";
import { updateUserAuth } from "@redux/actions/userAction";


interface Props {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: Props) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<userModel>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
        setReferrer('');
        setReferrerErrMsg(null);
    }

    const onClose = () => {
        if (handleClose) handleClose();

        Keyboard.dismiss();
        resetForm();
    }

    const onSubmitForm = async () => {
        if (referrerErrMsg !== null) return;

        if (isSubmitting) return;
        setSubmitting(true);

        let res;
        try {
            res = await updateUsername({
                username: userState.userName,
                referralCode: referrer,
                bearerToken: userState.userToken,
            });
        } catch (err: any) {
            console.log(err.response);
            if (
                err.response.data.errors &&
                err.response.data.errors.referral_code
            ) {
                setReferrerErrMsg(err.response.data.errors.referral_code);
            }

            setSubmitting(false);
            return;
        }

        const result = await getUserDetails({
            bearerToken: userState.userToken,
        });
        if (result == null) {
            return;
        }

        const resultData = result.data.data;

        await dispatch(updateUserAuth(resultData));
        dispatch(changeScreenAction("修改成功"));

        Keyboard.dismiss();
        navigation.navigate("Home", {
            screen: "Profile",
        });

        setSubmitting(false);
    }

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onClose}
            isLoading={isSubmitting}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity onPress={onSubmitForm}>
                    <Text style={textVariants.body}>
                        保存
                    </Text>
                </TouchableOpacity>
            </View>
            <CTextInput
                value={referrer}
                onChangeText={onReferralChange}
                placeholder="补填邀请码 (只能填写一次)"
                showErrorStyle={referrerErrMsg !== null}
                maxLength={18}
            />

            <View
                style={{
                    ...styles.dangerWrap,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    {referrerErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/danger.png")}
                            />

                            <Text style={styles.danger}>{referrerErrMsg}</Text>
                        </>
                    )}
                </View>
            </View>
        </CBottomSheet>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dangerWrap: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    danger: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "left",
        color: "#FF3434",
    },
});