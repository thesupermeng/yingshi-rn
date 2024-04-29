import { RootStackScreenProps } from "@type/yys_settings"
import React, { useEffect, useRef } from "react"
import WebView from "react-native-webview"
import ScreenContainer from "../../components/container/yys_executor_expand"
import { useTheme } from "@react-navigation/native"
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header"
import { BackHandler, Platform, View } from "react-native"
import { yys_DetailWhistle } from "../../routes/yys_become_bootsplash"
import { yys_FavoriteCustom } from "@constants"

export const CWebview = ({ navigation, route }: RootStackScreenProps<"Webview">) => {
    const { source: htmlSource, isPayment } = route.params;

    const { spacing } = useTheme();
    const isPayProcess = useRef(false);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            navigation.setOptions({ gestureEnabled: false });
        }

        const removeBackPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            yys_DetailWhistle.back(isPayProcess.current ? undefined : null);
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
        // console.log('Webview data')
        // console.log(data)
        if (data.url.includes('https://www.linked-pay.com/payment/pay/pushPayInfo')) {
            isPayProcess.current = true;
        }

        if (data.url.includes(yys_FavoriteCustom.paymentCallbackRedirectDev) || data.url.includes(yys_FavoriteCustom.paymentCallbackRedirectProd)) {
            yys_DetailWhistle.back();
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
            <TitleWithBackButtonHeader title="支付" onBack={() => yys_DetailWhistle.back(isPayProcess.current ? undefined : null)} />
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
            // android 'onShouldStartLoadWithRequest' cannnot use on 'linked-pay', so use onNavigationStateChange
            onShouldStartLoadWithRequest={_getOnNavigationState}
            onNavigationStateChange={_getOnNavigationState}
        />
    </ScreenContainer>
}
