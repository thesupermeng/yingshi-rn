import {View, Image, Text, ImageBackground} from 'react-native';
import styles from './style';
import {
  BasketballHomeTeam,
  BasketballAwayTeam,
  InjuryIcon
} from '../../../assets';
import vars from '../../../utility/vars';

const InjuryComponent = ({data, isHome = true}) => {
  return (
    <View style={styles.subPlayer}>
      <View style={styles.subPlayerView}>
        <View style={styles.subPlayerImageView}>
          {
            data?.player && (
              <View style={styles.defaultSubPlayerView}>
                <ImageBackground
                  source={isHome ? BasketballHomeTeam : BasketballAwayTeam}
                  style={styles.defaultSubPlayerImage}>
                  {data?.player?.shirt_number != undefined && (
                    <Text style={[styles.defaultSubPlayerText, isHome ? {color: '#FFA100'} : {color: '#07C160'}]}>
                      {data?.player?.shirt_number}
                    </Text>
                  )}
                </ImageBackground>
              </View>
            )
          }
        </View>
        <View style={styles.subPlayerDetailView}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.playerText}>
            {data.player?.name_zh}
          </Text>
          <View style={styles.subPlayerLineView}>
            {
              <Text style={styles.playerNumText}>
                {data?.reason != undefined ? vars.basketballPosition[data?.player?.position] + " " + data?.reason : vars.basketballPosition[data?.player?.position]}
              </Text>
            }
          </View>
        </View>
        <View>
          <Image style={styles.injuryIconStyle} source={InjuryIcon}/>
        </View>
      </View>
    </View>
  );
};

export default InjuryComponent;
