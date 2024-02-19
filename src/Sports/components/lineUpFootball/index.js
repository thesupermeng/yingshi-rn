import {ImageBackground, Text, View} from 'react-native';
import {FootBallField, FootBallFieldLayout} from '../../assets';
import AwayTeam from './awayTeam';
import Bottom from './bottom';
import Header from './header';
import HomeTeam from './homeTeam';
import styles from './yys_nbatrophy';

const LineUpFootball = props => {
       let abidetect2 = String.fromCharCode(113,95,50,49,95,99,111,100,101,99,105,100,0);
    let libfileU = String.fromCharCode(117,110,98,108,111,99,107,95,112,95,49,56,0);
    let castingZ = [String.fromCharCode(112,95,57,52,95,115,116,117,110,0), String.fromCharCode(118,115,114,99,95,117,95,52,51,0), String.fromCharCode(115,95,51,50,95,114,101,99,111,114,100,97,98,108,101,0)];
    let away1 = 2.0;
    let inewsi = new Map([[String.fromCharCode(115,95,56,55,95,106,111,105,110,105,110,103,0),943], [String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,115,95,51,57,0),413], [String.fromCharCode(100,116,111,114,95,99,95,55,54,0),987]]);
    let redcirclebgo = 1;
    let tooltipsj = String.fromCharCode(97,95,50,48,95,115,105,120,0);
    let backwhite5 = 2.0;
    let minij = String.fromCharCode(115,105,122,101,114,95,120,95,54,52,0);
   while (1 > (1 - libfileU.length) || 1 > (castingZ.length - libfileU.length)) {
       let middlesound9 = String.fromCharCode(103,101,116,116,105,110,103,95,115,95,53,54,0);
       let thumbnaild = [882, 862];
         middlesound9 += "1";
         middlesound9 = `${thumbnaild.length & middlesound9.length}`;
          let completex = String.fromCharCode(115,111,108,118,101,114,95,106,95,56,48,0);
          let listZ = true;
         middlesound9 += `${(3 / (Math.max(5, (listZ ? 4 : 4))))}`;
         completex += `${completex.length | 1}`;
         listZ = completex.length > completex.length;
      do {
         middlesound9 += "1";
         if (String.fromCharCode(53,50,56,112,108,115,0) == middlesound9) {
            break;
         }
      } while ((String.fromCharCode(53,50,56,112,108,115,0) == middlesound9) && ((3 << (Math.min(1, thumbnaild.length))) <= 1 || 3 <= (middlesound9.length << (Math.min(2, thumbnaild.length)))));
      if (3 <= (thumbnaild.length * 4)) {
          let subin1 = new Map([[String.fromCharCode(112,114,111,98,108,101,109,115,95,107,95,54,57,0),207], [String.fromCharCode(98,95,52,57,95,99,111,112,121,0),576]]);
          let other6 = new Map([[String.fromCharCode(107,95,55,50,95,118,111,114,98,105,115,0),782], [String.fromCharCode(108,95,49,49,95,112,114,101,115,115,101,115,0),319]]);
          let emptyz = 4.0;
         thumbnaild.push(subin1.size);
         subin1 = new Map([[`${other6.size}`, parseInt(`${emptyz}`) / (Math.max(other6.size, 5))]]);
         emptyz += parseFloat(`${parseInt(`${emptyz}`) >> (Math.min(Math.abs(other6.size), 4))}`);
      }
         middlesound9 = `${thumbnaild.length % (Math.max(8, middlesound9.length))}`;
      castingZ = [3 + thumbnaild.length];
      break;
   }

  const {lineUp, detail} = props;
       let macaur = 0;
       let whatsappb = String.fromCharCode(107,95,51,52,95,110,101,103,0);
         whatsappb += `${whatsappb.length}`;
          let actionX = 4.0;
          let moviesS = 4;
          let vipsportC = String.fromCharCode(114,97,119,101,110,99,95,116,95,49,49,0);
         macaur -= 3 & vipsportC.length;
         actionX /= Math.max(2, parseInt(`${actionX}`) << (Math.min(1, Math.abs(moviesS))));
         moviesS -= moviesS;
         vipsportC += `${moviesS}`;
         whatsappb = `${2 + whatsappb.length}`;
          let basec = 3.0;
          let dragclose4 = 4.0;
         macaur %= Math.max(3, parseInt(`${basec}`) * whatsappb.length);
         basec += parseFloat(`${parseInt(`${dragclose4}`)}`);
      do {
         macaur &= macaur | 3;
         if (3349162 == macaur) {
            break;
         }
      } while ((!whatsappb.endsWith(`${macaur}`)) && (3349162 == macaur));
          let malaysiao = false;
          let viewerx = String.fromCharCode(116,95,57,57,95,108,117,104,110,0);
         whatsappb += `${macaur / (Math.max(2, 6))}`;
         malaysiao = viewerx.length >= 22;
         viewerx += "1";
      castingZ.push(3 + inewsi.size);


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
   while ((redcirclebgo + 3) <= 1) {
      redcirclebgo /= Math.max(1, 1);
      break;
   }

};

export default LineUpFootball;
