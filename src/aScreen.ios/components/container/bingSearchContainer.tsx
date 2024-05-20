import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BingSearchButton from '../button/bingSearchButton';
import BackButton from '../button/backButton';


import BingIcon from '@static/images/bing.svg';
import { Vod } from '@models';
import { useTheme } from '@react-navigation/native';

interface Props {
  vod: Vod;
}

export default function BingSearch({ vod }: Props) {
  const { textVariants } = useTheme();

  return (
    <LinearGradient
      colors={['rgba(10, 189, 193, 0.20)', 'rgba(0, 0, 0, 0.00)']}
      useAngle={true}
      angle={234}
      locations={[0, 0.71]}>
      <LinearGradient
        colors={['rgba(49, 118, 242, 0.20)', 'rgba(0, 0, 0, 0.00)']}
        useAngle={true}
        angle={132}
        locations={[0, 0.74]}>
        <LinearGradient
          colors={['#152651', '#0A101D', '#000']}
          useAngle={true}
          angle={180}
          locations={[-0.32, 0.35, 1]}>
          <View style={styles.container}>
            <View style={styles.backBtnContainer}>
              <BackButton btnStyle={styles.backBtn} />
            </View>
            <View style={styles.bingContainer}>
              <BingIcon style={styles.bingLogo} />
              <Text style={{ ...textVariants.bigHeader, fontWeight: 'bold' }}>Bing</Text>
            </View>
            {/* <BingSearchButton vodTitle={vod.vod_name} /> */}
          </View>
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 428 / 242,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bingLogo: {
    marginBottom: 14,
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    padding: 0
  },

  backBtnContainer: {
    position: 'absolute',
    top: 14,
    left: 10,
    width: 30,
    height: 30,
  },
  bingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  }
});
