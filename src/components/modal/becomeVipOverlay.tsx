import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
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
import { SHOW_ZF_CONST } from '@utility/constants';
import { AdultVipPrivilegeOverlay } from './adultVipPrivilegeOverlay';
import { SportVipPrivilegeOverlay } from './sportVipPrivilegeOverlay';
import { CommonVipPrivilegeOverlay } from './commonVipPrivilegeOverlay';

interface Props {
  showBecomeVIPOverlay: boolean;
  setShowBecomeVIPOverlay: any;
  isJustClose: boolean;
  selectedTab: 'sport' | 'xvod' | 'common',
  onClose?: () => void,
}

function ExpiredOverlay({
  showBecomeVIPOverlay = false,
  setShowBecomeVIPOverlay,
  isJustClose,
  selectedTab,
  onClose,
}: Props) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  // useEffect(() => {
  //   setShowVIPOverlay(true);
  // }, []);

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
    if (selectedTab === 'xvod') {
      return (
        <AdultVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={() => {
            if (onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'sport') {
      return (
        <SportVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={() => {
            if (onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
          onPurchase={() => setShowBecomeVIPOverlay(false)}
          onInvite={() => setShowBecomeVIPOverlay(false)}
        />
      );
    } else if (selectedTab === 'common') {
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {
          if (onClose) onClose();
          setShowBecomeVIPOverlay(false);
        }}
      />
    }
  };


  return (
    <>
      {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            zIndex: 1000,
          }}>
          {renderOverlay()}
        </View>
      )}
    </>
  );
}

export default memo(ExpiredOverlay)

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
