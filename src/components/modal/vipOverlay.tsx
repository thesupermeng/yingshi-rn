import React, {Suspense, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VipModal from './vipModal';
import {useNavigation, useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

export default function VipOverlay({}: Props) {
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);

  const hideVipPrompt = useCallback(async () => {
    setShowVIPOverlay(false);
  }, []);

  useEffect(() => {
    const checkFirstLaunchVipPrompted = async () => {
      try {
        const vipPrompted = await AsyncStorage.getItem('firstLaunchVipPrompt');
        if (vipPrompted === null) {
          // prompt VIP
          setShowVIPOverlay(true);
          await AsyncStorage.setItem('firstLaunchVipPrompt', 'true');
        }
      } catch (e) {}
    };

    checkFirstLaunchVipPrompted();
  }, []);

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
                  VIP会员奖励，等你来领取！
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  受邀用户通过邀请码注册即可
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  领取30天VIP会员
                </Text>
                <View style={{paddingTop: 22, alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => hideVipPrompt()}
                    style={{
                      backgroundColor: colors.primary,
                      paddingVertical: 12,
                      paddingHorizontal: 38,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        color: colors.text,
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      立即领取
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
