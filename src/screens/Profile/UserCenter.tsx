import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {InputItem, Button} from '@ant-design/react-native';
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
import {useAppSelector} from '../../hooks/hooks';
export default ({navigation}: RootStackScreenProps<'个人中心'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const userState = useAppSelector(({userReducer}: RootState) => userReducer);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="个人中心" />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View>
          <InputItem
            style={[styles.textInpoutCommonStyle, styles.defaultTextInputStyle]}
            disabled={true}
            value={userState.userName}
            placeholder="输入昵称"
            placeholderTextColor="#B6B6B6"
            maxLength={18}
          />
        </View>
        <Button
          type="primary"
          // disabled={props.email === '' || !props.emailValid}
          style={[styles.confirmButtonStyle, styles.btnInactive]}
          activeStyle={[styles.confirmButtonStyle, styles.btnInactive]}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: 0.2,
            }}>
            修改
          </Text>
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  textInpoutCommonStyle: {
    marginHorizontal: '-5%',
    marginTop: 70,
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
  },
  defaultTextInputStyle: {backgroundColor: '#1d2023'},
  confirmButtonStyle: {
    width: '100%',
    height: 42,
    marginBottom: 30,
    borderWidth: 0,
  },
  btnActive: {
    backgroundColor: '#FAC33D',
    color: '#000',
  },
  btnInactive: {
    backgroundColor: '#1d2023',
  },
});
