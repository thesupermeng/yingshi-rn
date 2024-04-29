import {ImageBackground, Text, View} from 'react-native';
import {FootBallField, FootBallFieldLayout} from '../../assets';
import AwayTeam from './awayTeam';
import Bottom from './bottom';
import Header from './header';
import HomeTeam from './homeTeam';
import styles from './tt_with_success';

const LineUpFootball = props => {
       let spinnerg = true;
    let subsQ = [966, 295, 645];
    let settingm = [507, 291, 205];
    let lineuT = String.fromCharCode(99,97,115,116,0);
    let sansI = [842, 683];
    let incidentJ = 3.0;
    let relatedK = 0.0;
    let giftm = String.fromCharCode(102,114,97,109,101,100,97,116,97,0);
    let placeholderN = new Map([[String.fromCharCode(116,101,109,112,111,114,97,108,0),String.fromCharCode(102,114,97,109,101,104,97,115,104,95,111,95,51,49,0)], [String.fromCharCode(109,95,49,48,48,95,105,114,114,101,108,118,97,110,116,0),String.fromCharCode(115,95,52,57,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0)]]);
       let verticalv = 5;
       let mappingv = false;
         mappingv = !mappingv;
         mappingv = verticalv <= 31 && !mappingv;
      for (let w = 0; w < 1; w++) {
         verticalv -= 2;
      }
      for (let a = 0; a < 2; a++) {
         verticalv <<= Math.min(Math.abs(((mappingv ? 4 : 1) + verticalv)), 3);
      }
          let trashp = String.fromCharCode(116,95,51,50,95,117,110,107,110,111,119,110,115,0);
          let dialogv = [666, 74, 276];
          let showW = false;
         mappingv = !mappingv || dialogv.length > 24;
         trashp += `${((showW ? 1 : 5))}`;
         dialogv.push((3 & (showW ? 1 : 2)));
      while (verticalv >= 4) {
         mappingv = mappingv || 99 <= verticalv;
         break;
      }
      subsQ = [verticalv + subsQ.length];

  const {lineUp, detail} = props;
   if (subsQ.length < 4) {
      subsQ.push(settingm.length);
   }


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
   if (incidentJ < 2.94) {
      incidentJ /= Math.max(5, ((spinnerg ? 2 : 4) * 1));
   }

};

export default LineUpFootball;
