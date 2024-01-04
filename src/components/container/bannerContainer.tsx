import { useNavigation, useTheme } from '@react-navigation/native';
import { Linking, View } from 'react-native';
import FastImage from '../common/customFastImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { bannerAdType } from '@type/ajaxTypes';
import { useEffect } from 'react';

interface Props {
    bannerAd: bannerAdType,
    onMount?: () => void,
    onPress?: () => void,
}

export const BannerContainer = ({
    bannerAd,
    onMount,
    onPress,
}: Props) => {
    const { spacing } = useTheme();
    const navigator = useNavigation()

    useEffect(() => {
        if (onMount) onMount();
    }, []);

    const redirectToAd = async () => {
        const url =
            bannerAd.ads_url.includes('https://') || bannerAd.ads_url.includes('http://')
                ? bannerAd.ads_url
                : 'https://' + bannerAd.ads_url;

        if (bannerAd.ads_redirect_type === 1) { // use web veiw
            navigator.navigate('活动页', { bannerAd: bannerAd })


        } else if (bannerAd.ads_redirect_type === 2) { // use in app browser
            try {
                if (await InAppBrowser.isAvailable()) {
                    await InAppBrowser.open(url);
                } else {
                    Linking.openURL(url);
                }
            } catch (e) {
                Linking.openURL(url);
            }

        } else { // use external browser
            Linking.openURL(url);
        }

        if (onPress) onPress();
    };

    return (
        <TouchableOpacity
            style={{
                paddingVertical: 5,
            }}
            onPress={redirectToAd}>
            <FastImage
                source={{
                    uri: bannerAd?.ads_pic,
                }}
                style={{ width: '100%', aspectRatio: 64 / 10, borderRadius: 8 }}
                resizeMode={'contain'}
                useFastImage={true}
            />
        </TouchableOpacity>
    );
};
