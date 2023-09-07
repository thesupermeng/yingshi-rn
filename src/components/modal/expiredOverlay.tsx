import React, {Suspense, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VipModal from './vipModal';
import {useNavigation, useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../hooks/hooks';
import {showLoginAction} from '../../redux/actions/screenAction';

interface Props {
  remainingDay: number;
  showVIPOverlay: boolean;
  setShowVIPOverlay: any;
}

export default function ExpiredOverlay({
  remainingDay = 0,
  showVIPOverlay = false,
  setShowVIPOverlay = () => {},
}: Props) {
  const navigator = useNavigation();
  const hideVipPrompt = useCallback(async () => {
    setShowVIPOverlay(false);
  }, []);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setShowVIPOverlay(true);
  // }, []);

  const {colors, textVariants, spacing, icons} = useTheme();

  return (
    <>
      {showVIPOverlay && (
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
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#E2820E',
                    paddingTop: 20,
                    paddingVertical: 12,
                  }}>
                  VIP还剩{remainingDay}天
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  只需邀请更多好友
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  即可获得额外天数的VIP服务时长
                </Text>
                <View style={{paddingTop: 22, alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      hideVipPrompt();
                      navigator.navigate('邀请');
                    }}
                    style={{
                      backgroundColor: '#FAC33D',
                      paddingVertical: 12,
                      paddingHorizontal: 38,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      立即邀请
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => hideVipPrompt()}
                    style={{paddingTop: 16}}>
                    <Text style={{color: '#9C9C9C', fontSize: 16}}>取消</Text>
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
