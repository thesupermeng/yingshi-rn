import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";


export const UploadProgressOverlay = ({
    value,
    minValue = 0,
    maxValue = 100,
    backgroundColor,
}: {
    value: number,
    minValue?: number,
    maxValue?: number,
    backgroundColor?: string,
}) => {
    const { textVariants, colors, dark } = useTheme();

    return (
        <View style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
        }}>
            <View style={{
                backgroundColor: '#222222C8',
                padding: 20,
                borderRadius: 20,
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    marginBottom: 20,
                    ...textVariants.body,
                    color: 'white',
                }}>
                    正在上传视频...
                </Text>

                <View style={{
                    backgroundColor: 'grey',
                    borderRadius: 999,
                    marginBottom: 10,
                    height: 8,
                    width: '100%',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 999,
                        height: 8,
                        width: `${value.toString()}%`,
                    }} />
                </View>
            </View>
        </View>
    );
}