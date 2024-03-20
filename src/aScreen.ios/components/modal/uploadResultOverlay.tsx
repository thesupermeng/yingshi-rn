import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import FastImage from '../common/customFastImage';


export const UploadResultOverlay = () => {
    const { colors, textVariants } = useTheme();

    return (
        <View style={{
            position: 'absolute',
            width: '100%',
            height: '80%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: colors.background + 'C8',
                padding: 20,
                borderRadius: 20,
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <FastImage
                    useFastImage={true}
                    style={{
                        height: 80,
                        width: 80,
                        marginRight: 5,
                        position: "relative",
                        top: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/profile/login-success.light.gif")}
                />

                <Text style={{
                    ...textVariants.header,
                    marginBottom: 20,
                }}>
                    上传成功
                </Text>

                <Text style={{
                    ...textVariants.body,
                    textAlign: 'center',
                    marginBottom: 10,
                }}>
                    我们将进行内容审核，24小时内返回审核结果
                </Text>
            </View>
        </View>
    );
}