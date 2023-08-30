import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
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
export default ({navigation}: RootStackScreenProps<'个人中心'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="个人中心" />
      <ScrollView>
        {/* top component  */}
        <InviteHeader />

        {/* content card component  */}

        <InviteCard />

        {/* event section  */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              textDecorationLine: 'underline',
              color: '#ffffff',
            }}>
            活动规则
          </Text>
        </View>

        {/* invite step  */}
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
