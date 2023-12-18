import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {useTheme} from '@react-navigation/native';
import ArrowIcn from '@static/images/invite/double-arrow.svg';
export default function InviteStep() {
  const {colors, textVariants, icons, spacing} = useTheme();

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  const highlightText = (
    text: string,
    keyword1: string,
    keyword2: string = '',
  ) => {
    const escapedKeyword1 = escapeRegExp(keyword1);
    const escapedKeyword2 = escapeRegExp(keyword2);

    const parts = text.split(
      new RegExp(`(${escapedKeyword1}|${escapedKeyword2})`, 'gi'),
    );

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
          gap: 9,
        }}>
        <Text style={{fontSize: 22, color: colors.primary, fontWeight: '700'}}>
          双赢奖励
        </Text>

        <Text>{highlightText('每邀请1位好友 增加30天VIP', '1', '30')}</Text>

        <Text>{highlightText('好友获得30天VIP', '30')}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
