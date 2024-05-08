import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { IS_OTHER_SKIN } from '@utility/constants';
import { CLangKey } from '@constants';

interface Props {
  onConfirm: any;
  isVisible: boolean;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  confirmationText?: string;
}
export default function NotificationModal({
  onConfirm,
  isVisible,
  title = '',
  subtitle1,
  subtitle2,
  subtitle3,
  confirmationText = CLangKey.confirm.tr(),
}: Props) {
  const { colors, textVariants, spacing } = useTheme();

  return (
    <Dialog
      isVisible={isVisible}
      overlayStyle={{ backgroundColor: 'rgba(34, 34, 34, 1)', ...styles.overlay }}
      backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      onBackdropPress={onConfirm}>
      <View style={{ gap: spacing.m }}>
        <Text style={{ ...textVariants.header, ...styles.head }}>{title}</Text>
        <Text
          style={{
            ...textVariants.subBody,
            ...styles.body,
            textAlign: 'center',
          }}>
          {subtitle1 && (
            <Text>
              {subtitle1}
              {'\n'}
            </Text>
          )}
          {subtitle2 && <Text>{subtitle2}</Text>}
          {subtitle3 && (
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
              onPress={() => Linking.openURL(`mailto:${subtitle3}`)}>
              <Text
                style={{
                  ...textVariants.subBody,
                  ...styles.body,
                  textAlign: 'left',
                  position: 'relative',
                  top: 3,
                }}>
                {' '}
                {subtitle3}
              </Text>
            </TouchableOpacity>
          )}
        </Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn} onPress={onConfirm}>
            <Text
              style={{
                ...textVariants.body,
                ...styles.head,
                color: IS_OTHER_SKIN ? colors.confirm : colors.primary,
              }}>
              {confirmationText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
}
const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
  },
  head: {
    color: 'white',
    textAlign: 'center',
  },
  body: {
    color: 'white',
  },
  link: {
    display: 'flex',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
});
