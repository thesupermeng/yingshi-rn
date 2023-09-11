import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

import {useTheme} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default ({navigation}: RootStackScreenProps<'活动规则'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <View>
      <View style={{gap: spacing.m}}>
        <TitleWithBackButtonHeader title="活动规则" />

        <ScrollView
          style={{marginBottom: 100, paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
          <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
            每推荐成功1位好友，即可增加VIP会员30天，好友获得15天VIP会员
          </Text>

          {/* step 1 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',

              marginTop: 10,
            }}>
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              1. 推荐成功条件
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              推荐好友
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              好友下载影视TV APP
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              好友注册影视TV APP（需填写邀请码）
            </Text>
          </View>

          <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
            您好好友通过您的分享链接，下载并打开app后，注册成功（需填写邀请码）成为新用户即视为推荐成功，双方均可获得奖励
          </Text>

          {/* step 2 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',

              marginTop: 10,
            }}>
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              2. 受邀者奖励内容
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              受邀者通过好友分享链接下载并注册（需填写邀请码）成为新用户后，即可获得15日VIP会员，需注意如使用同一台设备或同一个账号无法重复获得奖励
            </Text>
          </View>

          {/* step 3 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',

              marginTop: 10,
            }}>
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              3. 附加规则
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              用户达成奖励条件后，奖励会立即生效
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              同一设备、同一账号视为同一用户
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.bullet} />
            <Text style={{...textVariants.small, fontSize: 14, lineHeight: 22}}>
              如果有发现用户存在恶意使用虚假账号领取奖励多情况，平台有权利取消奖励或保留终止活动的权利
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {},
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#fff', // Change the color of the bullet as needed
    marginLeft: 5, // Adjust spacing between the bullet and text
    marginRight: 8, // Adjust spacing between the bullet and text
    marginTop: 8,
  },
});
