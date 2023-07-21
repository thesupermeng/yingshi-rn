import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

//assets
import {YellowScoreBall, RedScoreBall} from '../../../assets';
//style
import styles from './style';

const BasketballMatchScoreDetails = props => {
  const totalDataTemp = props?.totalData ?? [];
  const homeFoul = totalDataTemp[16]?.home ? totalDataTemp[16]?.home : 0;
  const homeMiss = totalDataTemp[15]?.home ? totalDataTemp[15]?.home : 0;
  const homeUB = totalDataTemp[11]?.home ? totalDataTemp[11]?.home : 0;

  const awayFoul = totalDataTemp[16]?.away ? totalDataTemp[16]?.away : 0;
  const awayMiss = totalDataTemp[15]?.away ? totalDataTemp[15]?.away : 0;
  const awayUB = totalDataTemp[11]?.away ? totalDataTemp[11]?.away : 0;
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
};

export default BasketballMatchScoreDetails;
