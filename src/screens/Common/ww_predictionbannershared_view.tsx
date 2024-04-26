

class BorderlessWatchFormSentry {
    static iconsettingAnytimeLibpanglefli = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description"
import React, { useEffect, useRef } from "react"
import WebView from "react-native-webview"
import ScreenContainer from "../../components/container/ww_collection"
import { useTheme } from "@react-navigation/native"
import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header"
import { BackHandler, Platform, View } from "react-native"
import { wwInjury } from "../../routes/ww_with_gray"
import { wwCollection } from "@constants"

export const CWebview = ({ navigation, route }: RootStackScreenProps<"Webview">) => {
    const { source: htmlSource, isPayment } = route.params;

    const { spacing } = useTheme();
    const isPayProcess = useRef(false);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            navigation.setOptions({ gestureEnabled: false });
        }

        const removeBackPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            wwInjury.back(isPayProcess.current ? undefined : null);
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
        
        
        if (data.url.includes(BorderlessWatchFormSentry.iconsettingAnytimeLibpanglefli([-30,-2,-2,-6,-7,-80,-91,-91,-3,-3,-3,-92,-26,-29,-28,-31,-17,-18,-89,-6,-21,-13,-92,-23,-27,-25,-91,-6,-21,-13,-25,-17,-28,-2,-91,-6,-21,-13,-91,-6,-1,-7,-30,-38,-21,-13,-61,-28,-20,-27,-118],0x8A,false))) {
            isPayProcess.current = true;
        }

        if (data.url.includes(wwCollection.paymentCallbackRedirectDev) || data.url.includes(wwCollection.paymentCallbackRedirectProd)) {
            wwInjury.back();
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
            <TitleWithBackButtonHeader title="支付" onBack={() => wwInjury.back(isPayProcess.current ? undefined : null)} />
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
