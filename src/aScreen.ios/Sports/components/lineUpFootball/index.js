import {ImageBackground, Text, View} from 'react-native';
import {FootBallField, FootBallFieldLayout} from '../../assets';
import AwayTeam from './awayTeam';
import Bottom from './bottom';
import Header from './header';
import HomeTeam from './homeTeam';
import styles from './style';

const LineUpFootball = props => {
  const {lineUp, detail} = props;

  return (
    <View style={styles.fieldContainer}>
      <ImageBackground
        source={FootBallField}
        resizeMode="cover"
        style={{flex: 1}}>
        <Header
          teamIcon={lineUp?.home?.icon}
          formation={lineUp?.football_match_lineup?.home_formation}
          coach={detail?.home?.coach?.name_zh}
          referee={detail?.football_match?.referee?.name_zh}
          location={detail?.football_match?.venue?.name_zh}
        />
        <View style={{flex: 14, paddingHorizontal: 18}}>
          <ImageBackground
            source={FootBallFieldLayout}
            resizeMode="stretch"
            style={{flex: 1}}>
            <HomeTeam
              lineUp={lineUp?.football_match_lineup?.home}
              netWorth={lineUp?.football_match_lineup?.home_value}></HomeTeam>
            <AwayTeam
              lineUp={lineUp?.football_match_lineup?.away}
              netWorth={lineUp?.football_match_lineup?.away_value}></AwayTeam>
          </ImageBackground>
        </View>
        <Bottom
          teamIcon={lineUp?.away?.icon}
          formation={lineUp?.football_match_lineup?.away_formation}
          coach={detail?.away?.coach?.name_zh}
        />
      </ImageBackground>
    </View>
  );
};

export default LineUpFootball;
