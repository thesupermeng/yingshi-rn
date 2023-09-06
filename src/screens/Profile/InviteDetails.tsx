import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {RootState} from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import axios from 'axios';
import {Keyboard} from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../../utility/constants';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

import {ScrollView} from 'react-native-gesture-handler';

import InviteStep from '../../components/invite/inviteStep';
import InviteCard from '../../components/invite/inviteCard';

import InviteHeader from '../../components/invite/inviteHeader';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {userModel} from '../../types/userType';
import {useAppSelector} from '../../hooks/hooks';
export default ({navigation}: RootStackScreenProps<'邀请'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();

  const userState: userModel = useAppSelector(
    ({userReducer}: RootState) => userReducer,
  );

  useEffect(() => {
    console.log(userState);
  }, []);
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="累计奖励明细" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* top card  */}
        <LinearGradient
          colors={['#323638', '#1a1d20']} // An array of gradient colors
          locations={[0.1, 1]}
          start={{x: 1, y: 0}} // Top-right corner
          end={{x: 0, y: 1}} // Bottom-left corner
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: 'row', // Set flexDirection to 'row'
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 120,
          }}>
          <View style={styles.container}>
            {/* Your content goes here */}
            <Text style={styles.title}>{userState.userTotalInvite}</Text>
            <Text style={styles.subTitle}>已邀请人数</Text>
          </View>

          <View style={styles.container}>
            {/* Your content goes here */}
            <Text style={styles.title}>
              {userState.userAccumulateRewardDay}
            </Text>
            <Text style={styles.subTitle}>累计获得天数</Text>
          </View>
        </LinearGradient>

        {/*  invite table   */}
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text
            style={{...textVariants.header, fontSize: 16, fontWeight: '700'}}>
            邀请记录
          </Text>

          {userState.userInvitedUserList.length > 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              {userState.userInvitedUserList.map(item => (
                <View
                  key={item.downline_user_id}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                  }}>
                  <View>
                    <Text style={{fontSize: 16, color: '#fff'}}>
                      {item.user_name} 接受了您的邀请
                    </Text>
                    <Text style={{color: '#9c9c9c'}}>{item.created_at}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text style={{color: colors.primary, fontSize: 16}}>
                      +{item.invited_vip_reward_day}天
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {userState.userInvitedUserList.length == 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={{color: '#fff'}}>暂时无邀请记录</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // This makes the image take up the entire screen
    resizeMode: 'cover', // This scales and crops the image as needed
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9C9C',
  },
});
