import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
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
import { updateUserAuth } from "../../redux/actions/userAction";
import { getUserDetails } from "../../features/user";
import AdsBanner from "../../ads/adsBanner";
import { VipCard } from "../../components/vip/vipCard";
import { TouchableOpacity } from "react-native";
import { membershipModel } from "../../types/membershipType";

const subscriptionSkus = Platform.select({
    ios: ['yingshi_vip_month'],
  });

export default ({ navigation }: RootStackScreenProps<'付费VIP'>) => {
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

  // for testing purpose, will change to product get from iap
  const membershipProduct: membershipModel[] = [
    {productId: '1month', title: '1个月', localizedPrice: '$ 3.88', description: 'VIP会员30天'},
    {productId: '6month', title: '6个月', localizedPrice: '$ 18.88', description: 'VIP会员180天，节省$4.40'},
    {productId: '12month', title: '12个月', localizedPrice: '$ 36.88', description: 'VIP会员360天，节省$9.68'}
    ]

  const membershipProductEmpty: membershipModel[] = []
  const [membershipSelected, setSelectedMembership] = useState<membershipModel>(membershipProductEmpty[0]);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <AdsBanner bottomTabHeight={0} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        <TitleWithBackButtonHeader title="付费VIP" />
        <VipCard 
          userState={userState}
          membershipProduct={membershipProduct} 
          selectedMembership={membershipSelected}
          onMembershipSelect={setSelectedMembership} />
        <View
          style={{...styles.footerWithBackgroundContainer}}>
          <Text style={{...textVariants.small}}>
            有关购买查询，请联系contactus@yingshi.tv
          </Text>
        </View>
        <View
          style={{...styles.footerContainer}}>
          <Text style={{...textVariants.small}}>
            活动由影视TV公司提供 与苹果公司Apple.Inc 无关
          </Text>
        </View>
      </ScrollView>

      {membershipSelected && 
        <View
          style={{...styles.summaryContainer}}>
          <View
            style={{...styles.summaryLabel}}>
            <Text style={{...textVariants.small}}>
              {membershipSelected.title}
            </Text>
            <Text style={{...textVariants.body, color: colors.title}}>
              {membershipSelected.localizedPrice}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: '60%',
              padding: 10,
              margin: 10,
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: colors.primary,
            }}>
              <Text style={{...styles.btnText}}>
                立即开通
              </Text>
          </TouchableOpacity>
        </View>
      }
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '700',
    color: 'black'
  },
  summaryLabel: {
    flex: 1,
    alignItems: 'center'
  },
  summaryContainer: {
    width: '100%',
    padding: 15,
    position: "relative",
    flexDirection: 'row',
    backgroundColor: '#1D2023',
    alignItems: 'center'
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: '#1F2224',
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  }
});
