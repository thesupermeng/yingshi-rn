import {useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DefaultThumbnail from '../../defaultThumbnail';
import {adsClick, linkClick} from '../../../utility/utils';
import {
  BaiduAds,
  IconCloseBorderLess,
  IconDefaultThumbnail,
} from '../../../assets';
import styles from './style';
import {Back} from '../videoPlayerControls/Controls';
import AppSettingsAction from '../../../redux/actions/appSettingsAction';

const VideoAdsComp = ({item, callBack}) => {
  const [time, setTime] = useState(10);
  const timerRef = useRef(time);

  useEffect(() => {
    AppSettingsAction.instance.adsShown(item?.ad_id);
    const interval = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(interval);
        onEnd();
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onEnd = async () => {
    callBack();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        adsClick(item?.ad_download_url, item?.ad_landing_url, item?.ad_id);
      }}>
      <View style={styles.container}>
        <DefaultThumbnail
          width={'100%'}
          height={'100%'}
          iconSize={65}
          borderRadius={0}
          iconDefault={IconDefaultThumbnail}>
          <ImageBackground
            style={styles.adsContent}
            source={{uri: item?.ad_url ?? ''}}
            resizeMode={'contain'}>
            <ImageBackground
              source={require('./images/top_overlay.png')}
              style={styles.topBar}>
              <Back
                onPress={() => {
                  onEnd();
                }}
              />
              <View style={styles.rightContainer}>
                <View style={styles.timerContainer}>
                  <Text style={styles.adsTagText}>{time}秒</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.adsTagContent}>
              <TouchableWithoutFeedback
                onPress={() => {
                  linkClick(item?.ad_redirect_url);
                }}>
                <View style={[styles.adsTagContainer, {marginRight: 1}]}>
                  <Image
                    resizeMode={'contain'}
                    style={{width: 13, height: 13, marginRight: 2}}
                    source={BaiduAds}></Image>
                  <Text style={styles.adsTagText}>广告</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  onEnd();
                }}>
                <View style={styles.adsTagContainer}>
                  <Image
                    resizeMode={'contain'}
                    style={{
                      width: 13,
                      height: 13,
                      tintColor: '#ffffff',
                    }}
                    source={IconCloseBorderLess}></Image>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </DefaultThumbnail>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoAdsComp;
