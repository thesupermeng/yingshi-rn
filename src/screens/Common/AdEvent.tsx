import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

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
//           html: `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
// </head>
// <body>
//   <script>
//     const handleClick = () => {
//       window.ReactNativeWebView.postMessage('triggerRnNavigatePurchaseVip')
//     }
//   </script>
//   <button
//     onclick="handleClick()"
//   >Click me</button>
// </body>
// </html>
//           `
        }}
        onShouldStartLoadWithRequest={() => true}
        onMessage={m => handleOnMessage(m.nativeEvent.data)}

      />

    </ScreenContainer>
  )


}

export default AdEvent;