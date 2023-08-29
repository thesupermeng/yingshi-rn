import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {useTheme} from '@react-navigation/native';
import ArrowIcn from '../../../static/images/invite/double-arrow.svg';
export default function InviteStep() {
  const {colors, textVariants, icons, spacing} = useTheme();
  return (
    <>
      {/* invite section  */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 15,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#ffffff',
          }}>
          如何邀请好友
        </Text>
      </View>
      <View
        style={{
          ...styles.inviteContainer,
        }}>
        {/* step 1  */}
        <View style={styles.inviteStep}>
          <Text
            style={{
              ...styles.inviteTitle,
              color: colors.primary,
            }}>
            步骤 1
          </Text>
          <View style={styles.descContainer}>
            <Text style={styles.textDesc}>点击推荐</Text>
            <Text style={styles.textDesc}>向好友发送邀请</Text>
          </View>
        </View>
        <ArrowIcn />
        {/* step 2 */}
        <View style={styles.inviteStep}>
          <Text
            style={{
              ...styles.inviteTitle,
              color: colors.primary,
            }}>
            步骤 2
          </Text>
          <View style={styles.descContainer}>
            <Text style={styles.textDesc}>好友打开链接</Text>
            <Text style={styles.textDesc}>
              下载
              <Text
                style={{
                  fontSize: 10,
                  color: colors.primary,
                }}>
                影视PRO
              </Text>
            </Text>
            <Text style={styles.textDesc}>且用邀请吗登录</Text>
          </View>
        </View>
        <ArrowIcn />
        {/* step 3  */}
        <View style={styles.inviteStep}>
          <Text
            style={{
              ...styles.inviteTitle,
              color: colors.primary,
            }}>
            步骤 3
          </Text>
          <View style={styles.descContainer}>
            <Text style={styles.textDesc}>您与好友都会</Text>

            <Text style={styles.textDesc}>获得VIP</Text>
          </View>
        </View>
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
