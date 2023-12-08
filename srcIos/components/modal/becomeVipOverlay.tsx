import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './vipModal';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/hooks';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux/actions/screenAction';
import FastImage from 'react-native-fast-image';
import useAnalytics from '@hooks/useAnalytics';
import { SHOW_PAYMENT_CONST } from '@utility/constants';

interface Props {
  showBecomeVIPOverlay: boolean;
  setShowBecomeVIPOverlay: any;
}

export default function ExpiredOverlay({
  showBecomeVIPOverlay = false,
  setShowBecomeVIPOverlay,
}: Props) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  // useEffect(() => {
  //   setShowVIPOverlay(true);
  // }, []);

  const { colors, textVariants, spacing, icons } = useTheme();
  const { sportDetailsVipPopupClicksAnalytics } = useAnalytics();

  return (
    <>
      {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            zIndex: 1000,
          }}>
          <VipModal>
            <View
              style={{
                backgroundColor: 'rgba(34, 34, 34, 0.9)',
                marginTop: 40,
                borderRadius: 12,
                paddingTop: 36,
                paddingBottom: 26,
                paddingHorizontal: 28,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShowBecomeVIPOverlay(false);
                  if (route.name === '体育详情') {
                    navigator.goBack();
                  }
                }}>
                <FastImage
                  source={require('../../Sports/assets/images/close.png')}
                  style={styles.closeBtnContainer}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#E2820E',
                    paddingTop: 20,
                    paddingVertical: 12,
                  }}>
                  VIP升级权益
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  立即升级VIP，无广告观影
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  尊享体育频道
                </Text>
                <View style={styles.btnContainer}>
                  { SHOW_PAYMENT_CONST &&
                  <TouchableOpacity
                    onPress={() => {
                      setShowBecomeVIPOverlay(false);
                      navigator.navigate('付费VIP');

                      // ========== for analytics - start ==========
                      sportDetailsVipPopupClicksAnalytics('pay');
                      // ========== for analytics - end ==========
                    }}
                    style={styles.btn}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      购买VIP
                    </Text>
                  </TouchableOpacity>
                }
                  <TouchableOpacity
                    onPress={() => {
                      setShowBecomeVIPOverlay(false);
                      navigator.navigate('邀请');

                      // ========== for analytics - start ==========
                      sportDetailsVipPopupClicksAnalytics('invite');
                      // ========== for analytics - end ==========
                    }}
                    style={styles.btn}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      邀请好友
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </VipModal>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  closeBtnContainer: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginRight: -10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(201, 201, 201, 0.3)',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: '#FAC33D',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  }
})
