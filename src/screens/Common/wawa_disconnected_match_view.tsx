

class LibavutilFrame_tdHalffieldimag {
    static encryptManifestLangLibmapbuffe = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import { RootStackScreenProps } from "@type/wawa_iconnewchat"
import React, { useEffect, useRef } from "react"
import WebView from "react-native-webview"
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand"
import { useTheme } from "@react-navigation/native"
import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header"
import { BackHandler, Platform, View } from "react-native"
import { wawaLayout } from "../../routes/wawa_playlist_casting"
import { wawaStatisticsEpisodes } from "@constants"

export const CWebview = ({ navigation, route }: RootStackScreenProps<"Webview">) => {
    const { source: htmlSource, isPayment } = route.params;

    const { spacing } = useTheme();
    const isPayProcess = useRef(false);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            navigation.setOptions({ gestureEnabled: false });
        }

        const removeBackPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            wawaLayout.back(isPayProcess.current ? undefined : null);
            return true;
        });

        return () => {
            if (Platform.OS === 'ios') {
                navigation.setOptions({ gestureEnabled: true });
            }

            removeBackPressListener.remove();
        }
    }, []);

    const _getOnNavigationState = (data: any) => {
        if (isPayment) {
            return paymentOnNavigationState(data);
        }

        return true;
    }

    const paymentOnNavigationState = (data: any) => {
        
        
        if (data.url.includes(LibavutilFrame_tdHalffieldimag.encryptManifestLangLibmapbuffe([-36,-64,-64,-60,-57,-114,-101,-101,-61,-61,-61,-102,-40,-35,-38,-33,-47,-48,-103,-60,-43,-51,-102,-41,-37,-39,-101,-60,-43,-51,-39,-47,-38,-64,-101,-60,-43,-51,-101,-60,-63,-57,-36,-28,-43,-51,-3,-38,-46,-37,-76],0xB4,false))) {
            isPayProcess.current = true;
        }

        if (data.url.includes(wawaStatisticsEpisodes.paymentCallbackRedirectDev) || data.url.includes(wawaStatisticsEpisodes.paymentCallbackRedirectProd)) {
            wawaLayout.back();
        }
        return true;
    }

    return <ScreenContainer
        containerStyle={{
            gap: spacing.m,
            paddingLeft: 0,
            paddingRight: 0,
        }}
    >
        <View style={{
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
        }}>
            <TitleWithBackButtonHeader title="支付" onBack={() => wawaLayout.back(isPayProcess.current ? undefined : null)} />
        </View>

        <WebView
            source={{
                html: htmlSource,
            }}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
            }}
            
            onShouldStartLoadWithRequest={_getOnNavigationState}
            onNavigationStateChange={_getOnNavigationState}
        />
    </ScreenContainer>
}
