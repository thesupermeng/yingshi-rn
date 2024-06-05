import { RootStackScreenProps } from "@type/tt_temperature";
import ScreenContainer from "../../components/container/tt_backward";
import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { UMENG_CHANNEL } from "@utility/tt_trophy_cross";

const AdEvent = ({ navigation, route }: RootStackScreenProps<'活动页'>) => {
  const {bannerAd} = route.params
  const [isNavigated, setIsNavigated] = useState(false);
  
  const handleOnMessage = (message: string) => {
    console.debug(message)
    if (message === 'triggerRnNavigatePurchaseVip'){
      navigation.navigate("付费VIP");
      
      
      
      
      
      
      
      
    }
  }
  const webViewref = useRef<any>();

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={bannerAd.ads_name}
        onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
      />
      <WebView
          source={{
            uri: bannerAd.ads_url
          }}
          ref={webViewref}
          style={{ backgroundColor: 'transparent'}}
          onShouldStartLoadWithRequest={() => true}
          onMessage={m => handleOnMessage(m.nativeEvent.data)}
          onNavigationStateChange={(event) => {
            if (event.url === bannerAd.ads_url) {
              setIsNavigated(false);
            } else {
              setIsNavigated(true);
            }
          }}
        />

    </ScreenContainer>
  )


}

export default AdEvent;