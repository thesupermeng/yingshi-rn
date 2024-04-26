import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BingSearchButton from '../button/wawa_baseline_button';
import BackButton from '../button/wawa_awayteamfield_airbnbstarselected_button';

import {wawaSellProfileinactive} from '@type/wawa_gradlew';

import BingIcon from '@static/images/distBuildStrings.svg';

interface wawaAwayShow {
  vod: wawaSellProfileinactive;
}

export default function BingSearch({vod}: wawaAwayShow) {
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
            <BingIcon style={styles.bingLogo} />
            <BingSearchButton vodTitle={vod.vod_name} />
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

  backBtnContainer:{
    position: 'absolute',
    top: 14,
    left: 10,
    width:30, 
    height: 30,
  }
});
