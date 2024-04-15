import { RootStackScreenProps } from "@type/navigationTypes"
import React, { useEffect } from "react"
import WebView from "react-native-webview"
import ScreenContainer from "../../components/container/screenContainer"
import { useTheme } from "@react-navigation/native"
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader"
import { BackHandler, Platform, View } from "react-native"
import { CRouter } from "../../routes/router"
import { CEndpoint } from "@constants"

export const CWebview = ({ navigation, route }: RootStackScreenProps<"Webview">) => {
    const { source: htmlSource, isPayment } = route.params;

    const { spacing } = useTheme();

    useEffect(() => {
        if (Platform.OS === 'ios') {
            navigation.setOptions({ gestureEnabled: false });
        }

        const removeBackPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            CRouter.back(null)
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
        console.log('Webview data')
        console.log(data)
        if (data.url.includes(CEndpoint.paymentCallbackRedirect)) {
            CRouter.back();
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
            <TitleWithBackButtonHeader title="支付" onBack={() => CRouter.back(null)} />
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
