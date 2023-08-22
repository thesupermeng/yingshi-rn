import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {RootState} from '../../redux/store';
// import NetInfo from '@react-native-community/netinfo';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
// import CrownImg from '../../../static/images/crown.png';

import CrownIcon from '../../../static/images/crown.svg';
import {Button, Dialog} from '@rneui/themed';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import FeedbackSuccessIcon from '../../../static/images/feedback_success.svg';
import axios from 'axios';
import {SubmitFeedbackRequest} from '../../../src/types/ajaxTypes';
import {Keyboard} from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../../../src/utility/constants';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import FastImage from 'react-native-fast-image';

export default ({navigation}: RootStackScreenProps<'邀请'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const highlightText = (
    text: string,
    keyword1: string,
    keyword2: string = '',
  ) => {
    const parts = text.split(new RegExp(`(${keyword1}|${keyword2})`, 'gi'));
    return parts.map((part, index) => {
      if (
        part.toLowerCase() === keyword1.toLowerCase() ||
        (keyword2 && part.toLowerCase() === keyword2.toLowerCase())
      ) {
        return (
          <Text
            key={index}
            style={{
              ...textVariants.body,
              color: colors.primary,
              fontStyle: 'italic',
              fontWeight: '700',
              fontSize: 22,
            }}>
            {part}
          </Text>
        );
      } else {
        return (
          <Text
            key={index}
            style={{...textVariants.body, color: '#FFFFFF', fontSize: 20}}>
            {part}
          </Text>
        );
      }
    });
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      {/* top component  */}
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
        }}>
        <Text style={{fontSize: 22, color: colors.primary, fontWeight: '700'}}>
          双赢奖励
        </Text>

        <Text>{highlightText('每邀请1位好友 增加30天VIP', '1', '30')}</Text>

        <Text>{highlightText('好友获得15天VIP', '15')}</Text>
      </View>
      {/* content card component  */}
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#1a1d20',
          margin: 10,
          paddingLeft: 20,
          borderRadius: 15,
          overflow: 'hidden', // Add this line to clip the FastImage
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              paddingTop: 45,
              gap: 10,
            }}>
            <Text style={{color: '#ffffff', fontSize: 28, fontWeight: '700'}}>
              VIP 0天
            </Text>
            <Text>当前累计奖励</Text>
          </View>

          <FastImage
            source={require('../../../static/images/crown.png')}
            style={{
              height: 180,
              width: 240,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />

          {/* <CrownIcon /> */}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
