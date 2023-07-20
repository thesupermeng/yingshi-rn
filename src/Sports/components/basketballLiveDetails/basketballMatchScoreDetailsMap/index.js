import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

//assets
import {
  BasketballDetailsBG,
  GreenCircleBG,
  OrangeCircleBG,
} from '../../../assets';
//style
import styles from './style';

const BasketballMatchScoreDetailsMap = props => {
  const totalDataTemp = props?.totalData ?? [];
  const homeShot = totalDataTemp[20]?.home ? totalDataTemp[20]?.home : 0;
  const homeShotAll = totalDataTemp[21]?.home ? totalDataTemp[21]?.home : 0;
  const homeShotPerc = totalDataTemp[22]?.home ? totalDataTemp[22]?.home : 0;
  const homeFoulShot = totalDataTemp[7]?.home ? totalDataTemp[7]?.home : 0;
  const homeFoulShotAll = totalDataTemp[8]?.home ? totalDataTemp[8]?.home : 0;
  const homeFoulShotPerc = totalDataTemp[9]?.home ? totalDataTemp[9]?.home : 0;
  const homeThirdPoint = totalDataTemp[4]?.home ? totalDataTemp[4]?.home : 0;
  const homeThirdPointAll = totalDataTemp[5]?.home ? totalDataTemp[5]?.home : 0;
  const homeThirdPointPerc = totalDataTemp[6]?.home
    ? totalDataTemp[6]?.home
    : 0;

  const awayShot = totalDataTemp[20]?.away ? totalDataTemp[20]?.away : 0;
  const awayShotAll = totalDataTemp[21]?.away ? totalDataTemp[21]?.away : 0;
  const awayShotPerc = totalDataTemp[22]?.away ? totalDataTemp[22]?.away : 0;
  const awayFoulShot = totalDataTemp[7]?.away ? totalDataTemp[7]?.away : 0;
  const awayFoulShotAll = totalDataTemp[8]?.away ? totalDataTemp[8]?.away : 0;
  const awayFoulShotPerc = totalDataTemp[9]?.away ? totalDataTemp[9]?.away : 0;
  const awayThirdPoint = totalDataTemp[4]?.away ? totalDataTemp[4]?.away : 0;
  const awayThirdPointAll = totalDataTemp[5]?.away ? totalDataTemp[5]?.away : 0;
  const awayThirdPointPerc = totalDataTemp[6]?.away
    ? totalDataTemp[6]?.away
    : 0;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundContiner}
        resizeMode={'contain'}
        source={BasketballDetailsBG}>
        <View style={styles.middleContainer}>
          <View style={styles.firstRowContainer}>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={OrangeCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${homeShot}-${homeShotAll}`}</Text>
                <Text style={styles.scoreTitle}>{`${homeShotPerc}%`}</Text>
              </ImageBackground>
            </View>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={GreenCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${awayShot}-${awayShotAll}`}</Text>
                <Text style={styles.scoreTitle}>{`${awayShotPerc}%`}</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.secondRowContainer}>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={OrangeCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${homeFoulShot}-${homeFoulShotAll}`}</Text>
                <Text style={styles.scoreTitle}>{`${homeFoulShotPerc}%`}</Text>
              </ImageBackground>
            </View>
            <View style={styles.centerContainer}></View>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={GreenCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${awayFoulShot}-${awayFoulShotAll}`}</Text>
                <Text style={styles.scoreTitle}>{`${awayFoulShotPerc}%`}</Text>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.thirdRowContainer}>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={OrangeCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${homeThirdPoint}-${homeThirdPointAll}`}</Text>
                <Text
                  style={styles.scoreTitle}>{`${homeThirdPointPerc}%`}</Text>
              </ImageBackground>
            </View>
            <View style={styles.circleContainer}>
              <ImageBackground
                style={styles.circleBackground}
                resizeMode={'contain'}
                source={GreenCircleBG}>
                <Text
                  style={
                    styles.scoreTitle
                  }>{`${awayThirdPoint}-${awayThirdPointAll}`}</Text>
                <Text
                  style={styles.scoreTitle}>{`${awayThirdPointPerc}%`}</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BasketballMatchScoreDetailsMap;
