import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {RootState} from '../../redux/store';
// import NetInfo from '@react-native-community/netinfo';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import HotIcn from '../../../static/images/invite/hot.svg';
import AdsIcn from '../../../static/images/invite/ads.svg';
import DownloadIcn from '../../../static/images/invite/download.svg';
import CastIcn from '../../../static/images/invite/cast.svg';

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
import LinearGradient from 'react-native-linear-gradient';

export default ({navigation}: RootStackScreenProps<'邀请'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const locations = [0, 1]; // 10% and 100%
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
        {/* crown card component  */}
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

        {/* benefit  component  */}
        <LinearGradient
          colors={['#323638', '#1a1d20']} // An array of gradient colors
          locations={locations}
          style={{
            paddingHorizontal: 20,
            marginRight: 20,
            marginBottom: 15,
            paddingBottom: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'row', // Set flexDirection to 'row'
            flexWrap: 'wrap', // Allow items to wrap to the next row
          }}>
          <View style={styles.featureItem}>
            <HotIcn style={styles.featureIcn} />
            <Text style={styles.featureTitle}>热播抢先看</Text>
          </View>

          <View style={styles.featureItem}>
            <AdsIcn style={styles.featureIcn} />
            <Text style={styles.featureTitle}>去广告</Text>
          </View>

          <View style={styles.featureItem}>
            <DownloadIcn style={styles.featureIcn} />
            <View>
              <Text style={styles.featureTitle}>视频下载</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <CastIcn style={styles.featureIcn} />
            <View>
              <Text style={styles.featureTitle}>投屏</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>
        </LinearGradient>
        {/* invite button  component  */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.primary,

              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              borderRadius: 8,
            }}>
            <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>
              立即推荐
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  featureItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    width: '50%', // 50% width for 2 items per row
    marginBottom: 15, // Add margin to create spacing between rows
    marginTop: 10,
  },
  featureIcn: {
    width: 32,
    height: 32,
  },
  featureTitle: {fontSize: 14, color: '#ffffff', fontWeight: '400'},
  featureTitle2: {fontSize: 10, color: '#ffffff', fontWeight: '400'},
});
