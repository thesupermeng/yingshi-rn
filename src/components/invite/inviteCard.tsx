import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import HotIcn from '../../../static/images/invite/hot.svg';
import AdsIcn from '../../../static/images/invite/ads.svg';
import DownloadIcn from '../../../static/images/invite/download.svg';
import CastIcn from '../../../static/images/invite/cast.svg';

import WhatsappIcn from '../../../static/images/invite/whatsapp.svg';

import TelegramIcn from '../../../static/images/invite/telegram.svg';
import FacebookIcn from '../../../static/images/invite/fb.svg';
import WechatIcn from '../../../static/images/invite/wechat.svg';

// import TwitterIcn from '../../../static/images/invite/twitter.svg';
import WeiboIcn from '../../../static/images/invite/weibo.svg';
import CopyIcn from '../../../static/images/invite/copy.svg';
import ProfileIcn from '../../../static/images/invite/profile-icon.svg';

import {TouchableOpacity} from '@gorhom/bottom-sheet';

import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {userModel} from '../../types/userType';
import {useAppDispatch} from '../../hooks/hooks';
import {showLoginAction} from '../../redux/actions/screenAction';
interface Props {
  userState: userModel;
}
export default function InviteCard({userState = {}}: Props) {
  const {colors, textVariants, icons, spacing} = useTheme();
  const locations = [0, 1]; // 10% and 100%
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#1a1d20',
          margin: 10,
          borderRadius: 15,
          overflow: 'hidden', // Add this line to clip the FastImage
        }}>
        {/* crown card component  */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 20,
          }}>
          <View
            style={{
              paddingTop: 45,
              gap: 10,
            }}>
            <Text style={{color: '#ffffff', fontSize: 28, fontWeight: '700'}}>
              VIP {userState.userAccumulateRewardDay}天
            </Text>
            <Text>当前累计奖励</Text>
          </View>

          <FastImage
            source={require('../../../static/images/crown.png')}
            style={{
              height: 180,
              width: 240,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />

          {/* <CrownIcon /> */}
        </View>

        {/* benefit  component  */}
        <LinearGradient
          colors={['#323638', '#1a1d20']} // An array of gradient colors
          locations={locations}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: -8,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'row', // Set flexDirection to 'row'
            flexWrap: 'wrap', // Allow items to wrap to the next row
          }}>
          <View style={styles.featureItem}>
            <HotIcn style={styles.featureIcn} />
            <Text style={styles.featureTitle}>热播抢先看</Text>
          </View>

          <View style={styles.featureItem}>
            <AdsIcn style={styles.featureIcn} />
            <Text style={styles.featureTitle}>去广告</Text>
          </View>

          <View style={styles.featureItem}>
            <DownloadIcn style={styles.featureIcn} />
            <View>
              <Text style={styles.featureTitle}>视频下载</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <CastIcn style={styles.featureIcn} />
            <View>
              <Text style={styles.featureTitle}>投屏</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>
        </LinearGradient>
        {/* invite button  component  */}
        <TouchableOpacity
          onPress={() => {
            if (userState.userToken == '') {
              dispatch(showLoginAction());
              // console.log('props{');
              // setActionType('login');
              // setSignUpOrLogin(true);
            } else {
              console.log('立即推荐 action');
            }
          }}>
          <View
            style={{
              backgroundColor: colors.primary,
              marginHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              borderRadius: 8,
            }}>
            <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>
              立即推荐
            </Text>
          </View>
        </TouchableOpacity>
        {/* social media share section  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 25,
          }}>
          <TouchableOpacity>
            <WhatsappIcn />
          </TouchableOpacity>

          <TouchableOpacity>
            <TelegramIcn />
          </TouchableOpacity>

          <TouchableOpacity>
            <FacebookIcn />
          </TouchableOpacity>

          <TouchableOpacity>
            <WechatIcn />
          </TouchableOpacity>

          <TouchableOpacity>
            <FastImage
              source={require('../../../static/images/invite/twitter.png')}
              style={{
                height: 40,
                width: 40,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <WeiboIcn />
          </TouchableOpacity>

          <TouchableOpacity>
            <CopyIcn />
          </TouchableOpacity>
        </View>
        {/* stat section  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#222528',
            paddingHorizontal: 15,
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 3,
            }}>
            <ProfileIcn />
            <Text style={{fontSize: 10}}>统计邀请：</Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.primary,
                fontWeight: '700',
              }}>
              {userState.userTotalInvite}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (userState.userToken == '') {
                dispatch(showLoginAction());
                // console.log('props{');
                // setActionType('login');
                // setSignUpOrLogin(true);
              } else {
                navigation.navigate('邀请详情');
              }
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10}}>累计奖励明细</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  featureItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    width: '50%', // 50% width for 2 items per row
    marginBottom: 15, // Add margin to create spacing between rows
    marginTop: 10,
  },
  featureIcn: {
    width: 32,
    height: 32,
  },
  featureTitle: {fontSize: 14, color: '#ffffff', fontWeight: '400'},
  featureTitle2: {fontSize: 10, color: '#ffffff', fontWeight: '400'},
});
