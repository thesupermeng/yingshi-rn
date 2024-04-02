import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import NoWifi from '@static/images/no-wifi.svg';
import RefreshIcon from '@static/images/refresh.svg';
import YingshiGreyIcon from '@static/images/yingshi-grey.svg';
import { useOrientation } from '@hooks/useOrientation';
import { IS_OTHER_SKIN } from '@utility/constants';
interface Props {
  onClickRetry?: any;
  isPlay?: boolean;
  isPlayBottom?: boolean;
}
export default function NoConnection({
  onClickRetry,
  isPlay = false,
  isPlayBottom = false,
}: Props) {
  const { textVariants, colors, icons } = useTheme();
  const isPotrait = useOrientation();

  const getMinHeight = () => {
    if ((isPlay || isPlayBottom) && !isPotrait) {
      return '100%';
    } else if (isPlay || isPlayBottom) {
      return 200;
    } else {
      return 0;
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        marginBottom: isPlay ? 0 : '50%',
        backgroundColor: isPlay ? '#000000' : colors.background,
        minHeight: getMinHeight(),
      }}>
      {!isPlay && isPotrait && (
        <>
          <NoWifi />
          <Text
            style={{
              ...textVariants.subBody,
              color: colors.text,
              textAlign: 'center',
              paddingTop: 10,
            }}>
            无网络
          </Text>
          <Text
            style={{
              ...textVariants.subBody,
              color: colors.muted,
              textAlign: 'center',
              paddingTop: 12,
            }}>
            网络连接失败，请刷新重试
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onClickRetry}>
            <View
              style={{
                ...styles.refreshBtn,
                backgroundColor: IS_OTHER_SKIN ? 'white' : colors.title,
              }}>
              <View style={{ position: 'relative', top: 2, paddingRight: 3 }}>
                <RefreshIcon />
              </View>
              <Text
                style={{
                  ...styles.head,
                  color: colors.background,
                }}>
                点击重试
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}
      {isPlay && (
        <>
          {/* <View>
            <LogoIcon />
          </View> */}
          <Text
            style={{
              ...textVariants.subBody,
              color: colors.muted,
              textAlign: 'center',
              paddingTop: 12,
            }}>
            无网络或断网，请刷新视频
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onClickRetry}>
            <View
              style={{
                ...styles.refreshBtn,
                backgroundColor: IS_OTHER_SKIN ? 'white' : colors.title,
              }}>
              <View style={{ position: 'relative', top: 2, paddingRight: 3 }}>
                <RefreshIcon />
              </View>
              <Text
                style={{
                  ...styles.head,
                  color: colors.background,
                }}>
                刷新
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    aspectRatio: 16 / 9,
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
  head: {
    color: 'white',
    textAlign: 'center',
  },
  refreshBtn: {
    marginTop: 20,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
