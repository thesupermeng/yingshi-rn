import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {useTheme} from '@react-navigation/native';
import ArrowIcn from '../../../static/images/invite/double-arrow.svg';
export default function InviteStep() {
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
    <>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 15,
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
    </>
  );
}

const styles = StyleSheet.create({
  inviteTitle: {
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  inviteStep: {
    backgroundColor: '#1c2023',
    width: '28%',
    borderRadius: 10,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  inviteContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  textDesc: {
    fontSize: 11,
    color: '#ffffff',
  },
  descContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
