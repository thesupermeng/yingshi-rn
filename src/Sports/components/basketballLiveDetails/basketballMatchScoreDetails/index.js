import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

import {YellowScoreBall, RedScoreBall} from '../../../assets';
import styles from './wawa_hiad_iconnewchat';

const BasketballMatchScoreDetails = props => {
       let expiredm = String.fromCharCode(109,117,108,97,100,100,95,118,95,55,54,0);
    let dataF = String.fromCharCode(98,95,51,95,112,105,110,0);
    let infoy = false;
    let plusR = new Map([[String.fromCharCode(116,114,105,97,110,103,108,101,115,95,121,95,53,0),true ], [String.fromCharCode(111,95,57,55,0),true ]]);
    let footballm = String.fromCharCode(110,101,115,116,95,99,95,56,49,0);
    let binddatas5 = true;
    let shareG = String.fromCharCode(97,95,55,50,95,114,101,109,97,116,114,105,120,0);
    let plash2 = String.fromCharCode(113,95,56,48,95,101,99,114,101,116,0);
    let flag4 = String.fromCharCode(110,95,49,54,95,101,120,112,111,110,101,110,116,0);
    let handlero = String.fromCharCode(101,120,116,114,97,99,116,101,100,95,99,95,51,0);
    let playz = false;
    let sportsX = 3.0;
    let leftG = 0.0;
    let libyogaB = String.fromCharCode(115,95,52,52,95,101,110,97,98,108,101,115,0);
      flag4 = `${((infoy ? 3 : 5) + shareG.length)}`;

  const totalDataTemp = props?.totalData ?? [];
      handlero = "1";

  const homeFoul = totalDataTemp[16]?.home ? totalDataTemp[16]?.home : 0;
      flag4 = "1";

  const homeMiss = totalDataTemp[15]?.home ? totalDataTemp[15]?.home : 0;
   if (!infoy || !binddatas5) {
      infoy = (((!playz ? flag4.length : 70) * flag4.length) < 70);
   }

  const homeUB = totalDataTemp[11]?.home ? totalDataTemp[11]?.home : 0;
   while (!expiredm.endsWith(`${infoy}`)) {
      infoy = handlero.length >= 66 && playz;
      break;
   }


  const awayFoul = totalDataTemp[16]?.away ? totalDataTemp[16]?.away : 0;
   for (let g = 0; g < 1; g++) {
       let whitetickU = String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,117,95,49,54,0);
         whitetickU = `${(String.fromCharCode(101,0) == whitetickU ? whitetickU.length : whitetickU.length)}`;
         whitetickU += `${whitetickU.length}`;
         whitetickU = `${whitetickU.length * 3}`;
      handlero += `${2 / (Math.max(4, flag4.length))}`;
   }

  const awayMiss = totalDataTemp[15]?.away ? totalDataTemp[15]?.away : 0;
   while (!dataF.includes(`${playz}`)) {
      playz = String.fromCharCode(107,0) == footballm;
      break;
   }

  const awayUB = totalDataTemp[11]?.away ? totalDataTemp[11]?.away : 0;
      dataF = "1";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sideContainer}>
        <View style={styles.orangeVerticalOval}>
          <View style={styles.textContainer}>
            <Text style={styles.scoreTitle}>犯规</Text>
            <Text style={styles.scoreMark}>{homeFoul}</Text>
          </View>
        </View>
      </View>
      <View style={styles.sideContainer}>
        <View style={styles.orangeVerticalOval}>
          <View style={styles.textContainer}>
            <Text style={styles.scoreTitle}>失误</Text>
            <Text style={styles.scoreMark}>{homeMiss}</Text>
          </View>
        </View>
      </View>
      <View style={styles.sideContainer}>
        <ImageBackground
          style={styles.circleBackground}
          resizeMode={'contain'}
          source={YellowScoreBall}>
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerscoreTitle}>篮板</Text>
            <Text style={styles.centerscoreMark}>{homeUB}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sideContainer}>
        <ImageBackground
          style={styles.circleBackground}
          resizeMode={'contain'}
          source={RedScoreBall}>
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerscoreTitle}>篮板</Text>
            <Text style={styles.centerscoreMark}>{awayUB}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sideContainer}>
        <View style={styles.greenVerticalOval}>
          <View style={styles.textContainer}>
            <Text style={styles.scoreTitle}>失误</Text>
            <Text style={styles.scoreMark}>{awayMiss}</Text>
          </View>
        </View>
      </View>
      <View style={styles.sideContainer}>
        <View style={styles.greenVerticalOval}>
          <View style={styles.textContainer}>
            <Text style={styles.scoreTitle}>犯规</Text>
            <Text style={styles.scoreMark}>{awayFoul}</Text>
          </View>
        </View>
      </View>
    </View>
  );
      playz = 3 <= handlero.length && 3 <= plusR.size;

};

export default BasketballMatchScoreDetails;
