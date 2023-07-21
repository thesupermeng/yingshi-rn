import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './style';
import {ProgressChart} from 'react-native-chart-kit';
import {Colors} from '../../global/colors';
import {
  CornerKick,
  InOutTargetRed,
  InOutTargetYellow,
  RedCard,
  YellowCard,
} from '../../assets';

const TopStats = props => {
  const {label, home, away} = props;
  // each value represents a goal ring in Progress chart

  const totalProgress = home + away;
  const awayProgress = away / totalProgress;

  const data = {
    data: [awayProgress ? awayProgress : 0], // prevent NaN and cause ERROR
    colors: [awayProgress ? Colors.colorActiveDot : ''], // show only primary color while data is EMPTY
  };
  // console.log('hello', data);
  return (
    <View style={styles.topStatsContent}>
      <Text style={styles.topStatsLabel}>{label}</Text>
      <View style={styles.topStatsRow}>
        <Text style={styles.topStatsLabel}>{home}</Text>
        <></>
        <ProgressChart
          style={{marginHorizontal: 8}}
          data={data}
          width={36}
          height={36}
          radius={15}
          strokeWidth={4}
          chartConfig={{
            // backgroundGradientFrom: 'white',
            // backgroundGradientTo: 'white',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => Colors.colorPrimary,
          }}
          hideLegend={true}
          withCustomBarColorFromData={true}
        />
        <Text style={styles.topStatsLabel}>{away}</Text>
      </View>
    </View>
  );
};

const LeftRightStats = props => {
  const {statsIcon, statsLabel} = props;

  return (
    <View style={styles.bottomStatsColumnContent}>
      <View style={styles.bottomImageStatsContainer}>
        <Image
          style={{width: 20, height: 20}}
          source={statsIcon}
          resizeMode={'contain'}></Image>
      </View>
      <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
        {statsLabel}
      </Text>
    </View>
  );
};

const CenterStats = props => {
  const {isHome, inTarget, offTarget} = props;

  return (
    <ImageBackground
      style={{width: 60, height: 60, position: 'relative'}}
      source={isHome ? InOutTargetYellow : InOutTargetRed}
      resizeMode={'stretch'}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: 'white',
          position: 'absolute',
          bottom: 12,
          right: isHome ? 15 : null,
          left: isHome ? null : 15,
        }}>
        {inTarget}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: 'white',
          position: 'absolute',
          top: 3,
          left: isHome ? 24 : null,
          right: isHome ? null : 24,
        }}>
        {offTarget}
      </Text>
    </ImageBackground>
  );
};

const StatisticsChart = props => {
  const {stats} = props;

  // Make array become json to achieve 容错问题
  let statsObject = {};
  stats?.forEach(x => {
    statsObject[x.type] = x;
  });

  return (
    <View style={styles.container}>
      <View style={styles.topStatsRowContent}>
        <TopStats
          label={'进攻'}
          home={statsObject[23]?.home ?? 0}
          away={statsObject[23]?.away ?? 0}
        />
        <TopStats
          label={'危险进攻'}
          home={statsObject[24]?.home ?? 0}
          away={statsObject[24]?.away ?? 0}
        />
        <TopStats
          label={'控球率'}
          home={statsObject[25]?.home ?? 0}
          away={statsObject[25]?.away ?? 0}
        />
      </View>
      <View style={styles.bottomStatsContent}>
        <LeftRightStats
          statsIcon={YellowCard}
          statsLabel={statsObject[3]?.home ?? 0}
        />
        <LeftRightStats
          statsIcon={RedCard}
          statsLabel={statsObject[4]?.home ?? 0}
        />
        <LeftRightStats
          statsIcon={CornerKick}
          statsLabel={statsObject[2]?.home ?? 0}
        />
        <CenterStats
          isHome={true}
          inTarget={statsObject[21]?.home ?? 0}
          offTarget={statsObject[22]?.home ?? 0}
        />
        <CenterStats
          isHome={false}
          inTarget={statsObject[21]?.away ?? 0}
          offTarget={statsObject[22]?.away ?? 0}
        />
        <LeftRightStats
          statsIcon={CornerKick}
          statsLabel={statsObject[2]?.away ?? 0}
        />
        <LeftRightStats
          statsIcon={RedCard}
          statsLabel={statsObject[4]?.away ?? 0}
        />
        <LeftRightStats
          statsIcon={YellowCard}
          statsLabel={statsObject[3]?.away ?? 0}
        />
      </View>
    </View>
  );
};

export default StatisticsChart;
