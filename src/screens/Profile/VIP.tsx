import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
  Platform,
  Dimensions,
  Button
} from "react-native";
import {
    isIosStorekit2,
    PurchaseError,
    requestSubscription,
    useIAP,
    validateReceiptIos
  } from 'react-native-iap'
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "../../types/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "../../redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userModel } from "../../types/userType";
import { SCREEN_HEIGHT, SCREEN_WIDTH, TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "../../redux/actions/userAction";
import { getUserDetails } from "../../features/user";
import AdsBanner from "../../ads/adsBanner";
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import VipCard from "../../components/vip/vipCard";

const subscriptionSkus = Platform.select({
    ios: ['yingshi_vip_month'],
  });

export default ({ navigation }: RootStackScreenProps<'付费VIP'>) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const scale = screenWidth / 393 //responsive based on window screen width
  const {
    connected,
    subscriptions,
    getSubscriptions,
    getProducts,
    initConnectionError,
    currentPurchase,
    finishTransaction,
  } = useIAP();
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1];

  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
  };

  const refreshUserState = async () => {
    let result;
    result = await getUserDetails({
      bearerToken: userState.userToken,
    });
    if (result == null) {
      return;
    }
    let resultData = result.data.data;

    await dispatch(updateUserAuth(resultData));
    return;
  };

  // const handleGetSubscriptions = async () => {
  //   try {
  //       console.log(subscriptionSkus)
  //     await getProducts({ skus: subscriptionSkus });
  //     console.log('get subscriptions success '+ JSON.stringify(subscriptions))
  //   } catch (error) {
  //     console.error('error occured: ' + error)
  //   }
  // };

  // useEffect(() => {
  //   console.log(connected)
  //   if(connected) {
  //       handleGetSubscriptions();
  //   }
  // }, [connected]);

  // useEffect(() => {
  //   console.log(JSON.stringify(subscriptions))
  // }, [getProducts]);

  const [memberSelected, setMemberSelected] = useState('')

  return (
    <ScreenContainer>
      <AdsBanner bottomTabHeight={0} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        <TitleWithBackButtonHeader title="付费VIP" />
        <Text style={{color:'white'}}>{memberSelected}</Text>
        
        <VipCard locations={locations} setMemberSelected={setMemberSelected} memberSelected={memberSelected}/>
        {/* <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#1a1d20',
            margin: 5,
            borderRadius: 15,
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: screenWidth,
              borderWidth: 3,
              borderColor: '#ffffff',
              justifyContent: 'space-evenly'
            }}>
            <View
              style={{
                paddingTop: 45,
                gap: 10,
                paddingLeft: 20,
                paddingBottom: 40,
                flex: 1,
              }}>
              <Text style={{...textVariants.bigHeader}}>
                VIP 0天
              </Text>
              <Text style={{color: '#9C9C9C', letterSpacing: -1}}>您还不是会员,开通VIP享受权益</Text>
            </View>
            <FastImage
                  source={require('../../../static/images/crown_vip.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    flex:1,
                    position: 'absolute', right: 0, bottom: 0,

                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
          </View>  
        </View> */}

        {/* <LinearGradient
          colors={['#323638', '#1a1d20']} // An array of gradient colors
          locations={locations}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'row', // Set flexDirection to 'row'
            flexWrap: 'wrap', // Allow items to wrap to the next row
          }}>
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require('../../../static/images/invite/sport.png')}
                style={styles.featureIcn}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={styles.featureTitle}>体育频道</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require('../../../static/images/invite/ads.png')}
                style={styles.featureIcn}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>去广告</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require('../../../static/images/invite/download.png')}
                style={styles.featureIcn}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>视频下载</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require('../../../static/images/invite/cast.png')}
                style={styles.featureIcn}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>投屏</Text>
              <Text style={styles.featureTitle2}>(敬请期待)</Text>
            </View>
          </View>
        </LinearGradient> */}
      </ScrollView>

    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
    featureItem: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        width: '47%', // 50% width for 2 items per row
        marginBottom: 15, // Add margin to create spacing between rows
        marginTop: 10,
        marginLeft: '3%',
      },
    
      featureTitle: {fontSize: 14, color: '#ffffff', fontWeight: '400'},
      featureTitle2: {fontSize: 10, color: '#ffffff', fontWeight: '400'},
      imgContainer: {
        backgroundColor: '#3b3e40',
        width: 34,
        height: 34,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
      },
      featureIcn: {
        flex: 1,
        width: 18,
      },
});
