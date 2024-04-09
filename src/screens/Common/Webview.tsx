import { RootStackScreenProps } from "@type/navigationTypes"
import React from "react"
import WebView from "react-native-webview"
import ScreenContainer from "../../components/container/screenContainer"
import { useTheme } from "@react-navigation/native"
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader"
import { View } from "react-native"
import { CRouter } from "../../routes/router"

export const CWebview = ({ navigation, route }: RootStackScreenProps<"Webview">) => {
    const { source: htmlSource, onShouldStartLoadWithRequest } = route.params;

    const { spacing } = useTheme();

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
            onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        />
    </ScreenContainer>
}
