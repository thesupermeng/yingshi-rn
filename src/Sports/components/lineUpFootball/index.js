import {ImageBackground, Text, View} from 'react-native';
import {FootBallField, FootBallFieldLayout} from '../../assets';
import AwayTeam from './awayTeam';
import Bottom from './bottom';
import Header from './header';
import HomeTeam from './homeTeam';
import styles from './mayi_iconarrowrightwhite';

const LineUpFootball = props => {
       let sliderD = 5;
    let encryptZ = 3.0;
    let shirt0 = 1.0;
    let shootB = true;
    let container2 = 5;
    let embedV = String.fromCharCode(102,95,55,49,95,109,115,98,115,0);
    let watch6 = new Map([[String.fromCharCode(113,95,55,49,95,105,110,115,116,97,110,116,0),false ], [String.fromCharCode(114,101,113,117,105,114,101,95,118,95,51,54,0),false ], [String.fromCharCode(122,95,50,57,95,113,117,97,100,116,114,101,101,0),false ]]);
    let tooltipsK = 4;
    let armvaz = 4;
    let j_positionc = 4;
    let selectionV = 5;
    let utilsJ = [String.fromCharCode(101,118,114,99,0), String.fromCharCode(115,97,110,101,0), String.fromCharCode(105,110,105,118,105,116,101,100,0)];
    let materialZ = new Map([[String.fromCharCode(120,95,53,54,95,100,101,99,105,112,104,101,114,0),855], [String.fromCharCode(101,95,49,54,95,119,111,114,100,0),62], [String.fromCharCode(117,95,55,56,95,115,111,102,116,119,97,114,101,0),688]]);
    let footballtrophyj = 4;
    let heartE = 0.0;
    let uploadn = 2;
    let textlayoutmanagerz = [317, 901];
   if (j_positionc > 5) {
      j_positionc >>= Math.min(Math.abs(container2), 3);
   }
      encryptZ *= 1 * armvaz;

  const {lineUp, detail} = props;
   if (shootB && (shirt0 / 2.12) > 2.92) {
       let mbnativeE = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,114,0),606], [String.fromCharCode(117,108,116,114,97,0),361], [String.fromCharCode(119,105,115,101,0),832]]);
      while (4 > mbnativeE.size) {
         mbnativeE[`${mbnativeE.size}`] = mbnativeE.size;
         break;
      }
          let q_positionU = String.fromCharCode(115,101,103,116,114,101,101,95,100,95,56,0);
          let iconarrowrightwhite_ = String.fromCharCode(115,105,110,113,98,0);
          let guideB = 3.0;
         mbnativeE[q_positionU] = q_positionU.length >> (Math.min(1, Math.abs(mbnativeE.size)));
         iconarrowrightwhite_ = `${parseInt(`${guideB}`)}`;
         guideB += (parseFloat(`${iconarrowrightwhite_ == String.fromCharCode(76,0) ? iconarrowrightwhite_.length : parseInt(`${guideB}`)}`));
      for (let k = 0; k < 2; k++) {
         mbnativeE = new Map([[`${mbnativeE.size}`, 2]]);
      }
      shootB = embedV.length == 69;
   }
       let zhubox = [8, 944];
       let dangerh = String.fromCharCode(97,112,112,114,111,120,95,109,95,49,50,0);
       let modaly = new Map([[String.fromCharCode(99,95,49,54,95,116,111,107,101,110,116,120,0),272], [String.fromCharCode(107,95,56,52,95,108,111,103,103,105,110,103,0),825]]);
       let footballfieldc = 2.0;
         zhubox = [3 ^ dangerh.length];
      for (let y = 0; y < 1; y++) {
         modaly[`${footballfieldc}`] = modaly.size;
      }
      do {
         modaly[`${footballfieldc}`] = modaly.size - parseInt(`${footballfieldc}`);
         if (modaly.size == 3470140) {
            break;
         }
      } while (((5 ^ modaly.size) < 3 || 5 < (dangerh.length ^ modaly.size)) && (modaly.size == 3470140));
          let downarrowr = String.fromCharCode(102,95,49,52,95,110,101,108,108,121,109,111,115,101,114,0);
          let about5 = String.fromCharCode(111,95,53,55,95,97,115,115,101,109,98,108,101,100,0);
          let libimagepipelinef = 3.0;
         modaly[about5] = about5.length;
         downarrowr = `${downarrowr.length & parseInt(`${libimagepipelinef}`)}`;
         libimagepipelinef /= Math.max(parseFloat(`${parseInt(`${libimagepipelinef}`)}`), 4);
          let yellowk = String.fromCharCode(117,95,48,95,115,118,103,0);
          let animations5 = 4.0;
         modaly[yellowk] = (yellowk == String.fromCharCode(120,0) ? yellowk.length : parseInt(`${animations5}`));
         modaly = new Map([[`${modaly.size}`, 1]]);
         dangerh += `${parseInt(`${footballfieldc}`) & zhubox.length}`;
      do {
          let nende = String.fromCharCode(115,117,98,101,120,112,114,0);
         dangerh += `${(nende == String.fromCharCode(89,0) ? parseInt(`${footballfieldc}`) : nende.length)}`;
         if (String.fromCharCode(111,121,53,106,122,54,0) == dangerh) {
            break;
         }
      } while ((zhubox.length == dangerh.length) && (String.fromCharCode(111,121,53,106,122,54,0) == dangerh));
      container2 |= parseInt(`${encryptZ}`);


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
   do {
      shirt0 += parseInt(`${encryptZ}`) - 3;
      if (shirt0 == 2076864.0) {
         break;
      }
   } while ((3.17 == (shirt0 - 3.10)) && (shirt0 == 2076864.0));
   if (2.1 < (5.19 - encryptZ) && shootB) {
      encryptZ += selectionV;
   }

};

export default LineUpFootball;
