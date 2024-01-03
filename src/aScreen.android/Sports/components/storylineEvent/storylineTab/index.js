import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  YellowCard,
  RedCard,
  YellowToRedCard,
  GreenArrowUp,
  RedDownArrow,
  RedGoal,
  AssistGoal,
  ShootNoGoal,
  ShootYesGoal,
  PenaltyShoot,
  PenaltyShootNoGoal,
  YellowRedCard,
  VideoVAR,
  CornerShoot,
  Goal,
} from '../../../assets';

import vars from '../../../utility/vars';

//style
import styles from './style';

const StorylineTap = props => {
  const listData = props?.listData;
  const textValue = listData.player_name;
  const imageValue = listData.imageName;
  const isHome = props?.isHome;
  const textReason = '';
  const assistPlayer = listData?.assist1_name;
  const inPlayerName = listData?.in_player_name;
  const outPlayerName = listData?.out_player_name;
  const typeNumber = listData?.type;
  const homeScore = listData?.home_score;
  const awayScore = listData?.away_score;
  const varResult = listData?.var_result;
  const reasonType = listData?.reason_type;
  var resultText;
  var reasonText;
  if (varResult) {
    resultText = vars?.eventResultType[varResult];
    // console.log('resultText', resultText);
  }
  if (reasonType) {
    reasonText = vars?.eventReasonType[reasonType];
    // console.log('resultText', resultText);
  }

  const Type = () => {
    const scoreMark = ` (${homeScore}-${awayScore})`;
    switch (typeNumber) {
      case 1:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={Goal}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
                {scoreMark}
              </Text>
            </View>
            {assistPlayer && (
              <View
                style={[
                  styles.mainContainer,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                <Image
                  source={AssistGoal}
                  resizeMode={'contain'}
                  style={styles.imageStyle}></Image>
                <Text
                  style={[
                    styles.titleStyle,
                    isHome
                      ? {flexDirection: 'row-reverse', textAlign: 'right'}
                      : {flexDirection: 'row'},
                  ]}>
                  {assistPlayer}
                </Text>
              </View>
            )}
          </View>
        );
      case 2:
        return (
          <View
            style={[
              styles.mainContainer,
              isHome
                ? {flexDirection: 'row-reverse', textAlign: 'right'}
                : {flexDirection: 'row'},
            ]}>
            <Image
              source={CornerShoot}
              resizeMode={'contain'}
              style={styles.imageStyle}></Image>
            <Text
              style={[
                styles.titleStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {textValue}
            </Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={YellowCard}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
              </Text>
            </View>
            <Text
              style={[
                styles.titleReasonStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {reasonText}
            </Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={RedCard}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
              </Text>
            </View>
            <Text
              style={[
                styles.titleReasonStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {reasonText}
            </Text>
          </View>
        );
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        return (
          <View
            style={[
              styles.mainContainer,
              isHome
                ? {flexDirection: 'row-reverse', textAlign: 'right'}
                : {flexDirection: 'row'},
            ]}>
            <Image
              source={PenaltyShoot}
              resizeMode={'contain'}
              style={styles.imageStyle}></Image>
            <Text
              style={[
                styles.titleStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {textValue}
              {scoreMark}
            </Text>
          </View>
        );
      case 9:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={GreenArrowUp}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {inPlayerName}
              </Text>
            </View>
            {outPlayerName && (
              <View
                style={[
                  styles.mainContainer,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                <Image
                  source={RedDownArrow}
                  resizeMode={'contain'}
                  style={styles.imageStyle}></Image>
                <Text
                  style={[
                    styles.titleStyle,
                    isHome
                      ? {flexDirection: 'row-reverse', textAlign: 'right'}
                      : {flexDirection: 'row'},
                  ]}>
                  {outPlayerName}
                </Text>
              </View>
            )}
          </View>
        );
      case 10:
        break;
      case 11:
        return <Text style={styles.titleStyle}>HT</Text>;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={YellowRedCard}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
              </Text>
            </View>
            <Text style={styles.titleStyle}>{textReason}</Text>
          </View>
        );
      case 16:
        return (
          <View
            style={[
              styles.mainContainer,
              isHome
                ? {flexDirection: 'row-reverse', textAlign: 'right'}
                : {flexDirection: 'row'},
            ]}>
            <Image
              source={PenaltyShootNoGoal}
              resizeMode={'contain'}
              style={styles.imageStyle}></Image>
            <Text
              style={[
                styles.titleStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {textValue}
            </Text>
          </View>
        );
      case 17:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={RedGoal}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
                {scoreMark}
              </Text>
            </View>
            <Text style={styles.titleStyle}>{textReason}</Text>
          </View>
        );
      case 18:
        break;
      case 19:
        break;
      case 20:
        break;
      case 21:
        break;
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      case 27:
        break;
      case 28:
        return (
          <View style={styles.verticalContainer}>
            <View
              style={[
                styles.mainContainer,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              <Image
                source={VideoVAR}
                resizeMode={'contain'}
                style={styles.imageStyle}></Image>
              <Text
                style={[
                  styles.titleStyle,
                  isHome
                    ? {flexDirection: 'row-reverse', textAlign: 'right'}
                    : {flexDirection: 'row'},
                ]}>
                {textValue}
              </Text>
            </View>
            <Text
              style={[
                styles.titleReasonStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {resultText}
            </Text>
          </View>
        );
      case 29:
        return (
          <View
            style={[
              styles.mainContainer,
              isHome
                ? {flexDirection: 'row-reverse', textAlign: 'right'}
                : {flexDirection: 'row'},
            ]}>
            <Image
              source={PenaltyShoot}
              resizeMode={'contain'}
              style={styles.imageStyle}></Image>
            <Text
              style={[
                styles.titleStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {textValue}
              {/* {scoreMark} */}
            </Text>
          </View>
        );
      case 30:
        return (
          <View
            style={[
              styles.mainContainer,
              isHome
                ? {flexDirection: 'row-reverse', textAlign: 'right'}
                : {flexDirection: 'row'},
            ]}>
            <Image
              source={PenaltyShootNoGoal}
              resizeMode={'contain'}
              style={styles.imageStyle}></Image>
            <Text
              style={[
                styles.titleStyle,
                isHome
                  ? {flexDirection: 'row-reverse', textAlign: 'right'}
                  : {flexDirection: 'row'},
              ]}>
              {textValue}
              {/* {scoreMark} */}
            </Text>
          </View>
        );
      default:
        break;
    }
  };

  return (
    // <View
    //     style={[
    //       styles.mainContainer,
    //       isHome ?  {flexDirection: 'row-reverse', textAlign: 'right'} : {flexDirection: 'row'},
    //     ]}>
    //     <Image
    //       source={imageValue}
    //       resizeMode={'contain'}
    //       style={styles.imageStyle}></Image>
    //     <Text style={styles.titleStyle}>{textValue}</Text>
    //   </View>
    <View style={{height: '100%'}}>
      <Type />
    </View>
  );
};

export default StorylineTap;
