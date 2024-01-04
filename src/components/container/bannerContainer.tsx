import {useNavigation, useTheme} from '@react-navigation/native';
import {Linking, View} from 'react-native';
import FastImage from '../common/customFastImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { bannerAdType } from '@type/ajaxTypes';

interface Props {
  bannerAd: bannerAdType
}

export const BannerContainer = ({
  bannerAd
}: Props) => {
  const {spacing} = useTheme();
  const navigator = useNavigation()

  const redirectToAd = async () => {
    if (bannerAd.ads_redirect_type === 1) {
      navigator.navigate('活动页', {bannerAd: bannerAd})


    } else {
      const url =
        bannerAd.ads_url.includes('https://') || bannerAd.ads_url.includes('http://')
          ? bannerAd.ads_url
          : 'https://' + bannerAd.ads_url;
      Linking.openURL(url);

      // try {
      //     if (await InAppBrowser.isAvailable()) {
      //         console.log('using iapbrowser')
      //         await InAppBrowser.open('https://' + bannerUrl);
      //     } else {
      //         Linking.openURL(bannerUrl);
      //     }
      // } catch (e) {
      //     Linking.openURL(bannerUrl);
      // }
    }
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
        style={{width: '100%', aspectRatio: 64 / 10, borderRadius: 8}}
        resizeMode={'contain'}
        useFastImage={true}
      />
    </TouchableOpacity>
  );
};
