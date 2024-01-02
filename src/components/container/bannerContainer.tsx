import { useTheme } from "@react-navigation/native";
import { Linking, View } from "react-native";
import FastImage from "../common/customFastImage";
import { TouchableOpacity } from "react-native-gesture-handler";
import InAppBrowser from "react-native-inappbrowser-reborn";

interface Props {
    bannerImg: string;
    bannerUrl: string;
}

export const BannerContainer = ({ bannerImg, bannerUrl }: Props) => {
    const { spacing } = useTheme();

    const redirectToAd = async () => {
        try {
            // if (await InAppBrowser.isAvailable()) {
            //     console.log('using iapbrowser')
            //     await InAppBrowser.open('https://' + bannerUrl);
            // } else {
            Linking.openURL(bannerUrl);
            // }
        } catch (e) {
            Linking.openURL(bannerUrl);
        }
    }

    return (
        <TouchableOpacity
            style={{
                paddingVertical: 5,
            }}
            onPress={redirectToAd}
        >
            <FastImage
                source={{
                    uri: bannerImg,
                }}
                style={{ width: "100%", aspectRatio: 64 / 10, borderRadius: 8, }}
                resizeMode={"contain"}
                useFastImage={true}
            />
        </TouchableOpacity>
    )
}