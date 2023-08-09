import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import NoWifi from '../../../static/images/no-wifi.svg';
import RefreshIcon from '../../../static/images/refresh.svg';
interface Props {
  onClickRetry?: any;
}
export default function NoConnection({onClickRetry}: Props) {
  const {textVariants, colors, icons} = useTheme();
  return (
    <View style={{...styles.container}}>
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
            backgroundColor: colors.title,
          }}>
          <View style={{position: 'relative', top: 2, paddingRight: 3}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '50%',
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
