import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { YSConfig } from "../../../ysConfig";

export const VipBenefit = () => {
  const { textVariants } = useTheme();
  const locations = [0, 1];
  return (
    <LinearGradient
      colors={['#323638', '#1a1d20']} // An array of gradient colors
      locations={locations}
      style={{
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginTop: -20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      <View style={styles.featureItem}>
        <View style={styles.imgContainer}>
          <FastImage
            source={require('../../../static/images/vip/vip_logo.png')}
            style={styles.featureIcn}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={{...textVariants.small}}>VIP尊贵标识</Text>
        </View>
      </View>
      {YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5 ? (
        <View style={styles.featureItem}>
          <View style={styles.imgContainer}>
            <FastImage
              source={require('../../../static/images/vip/vip_sport.png')}
              style={styles.featureIcn}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={{...textVariants.small}}>体育频道</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.featureItem}>
        <View style={styles.imgContainer}>
          <FastImage
            source={require('../../../static/images/invite/vip_adult_video.png')}
            style={styles.featureIcn}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={{...textVariants.small}}>夜来香</Text>
        </View>
      </View>
      <View style={styles.featureItem}>
        <View style={styles.imgContainer}>
          <FastImage
            source={require('../../../static/images/vip/vip_no_ad.png')}
            style={styles.featureIcn}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={{...textVariants.small}}>去广告</Text>
        </View>
      </View>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  featureItem: {
    alignItems: 'center',
    gap: 5,
    width: '50%',
    marginBottom: 10,
    marginTop: 10,
  },
  imgContainer: {
    backgroundColor: '#3b3e40',
    width: 45,
    height: 45,
    borderRadius: 23,
    alignItems: 'center',
  },
  featureIcn: {
    flex: 1,
    width: 28,
  },
});
