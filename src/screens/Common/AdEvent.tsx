import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
} from "react-native";

const AdEvent = ({ navigation, route }: RootStackScreenProps<'活动页'>) => {
  const {bannerAd} = route.params
  
  const handleOnMessage = (message: string) => {
    console.debug(message)
    if (message === 'triggerRnNavigatePurchaseVip'){
      navigation.navigate('付费VIP')
    }
  }

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={bannerAd.ads_name}
      />
      <WebView
          source={{
            uri: bannerAd.ads_url
          }}
          style={{ backgroundColor: 'transparent'}}
          onShouldStartLoadWithRequest={() => true}
          onMessage={m => handleOnMessage(m.nativeEvent.data)}

        />

    </ScreenContainer>
  )


}

export default AdEvent;