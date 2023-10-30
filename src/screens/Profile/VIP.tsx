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
    requestPurchase,
    useIAP,
    validateReceiptIos,
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
import NoConnection from "../../components/common/noConnection";
import { Dialog } from "@rneui/themed";
import FastImage from "react-native-fast-image";
import {YING_SHI_PIN_ANDROID, YING_SHI_PIN_IOS, IS_IOS} from '../../utility/constants';

const subscriptionSkus = Platform.select({
  ios: ['yingshi_vip_month', 'yingshi_vip_6months', 'monthly_subscription'],
});

export default ({ navigation }: RootStackScreenProps<'付费VIP'>) => {
  const {
    connected,
    products,
    purchaseHistory,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    finishTransaction,
    getProducts,
    getPurchaseHistory,
    availablePurchases,
  } = useIAP();
  const [membershipSelected, setSelectedMembership] = useState<membershipModel>(products[0]);
  const [paymentSelected, setSelectedPayment] = useState('');
  const [isOffline, setIsOffline] = useState(false);
  const { colors, textVariants } = useTheme();
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline)
    if (!offline) {
      handleRefresh();
    }
  };

  const handleGetProduct = async () => {
    try {
      await getProducts({ skus: subscriptionSkus });
    } catch (error) {
      console.error('error occured: ' + error)
    }
  };

  useEffect(() => {
    console.log(connected)
    if(connected) {
      handleGetProduct();
    }
  }, [connected]);

  useEffect(() => {
    if(products) {
      let membershipProducts: membershipModel[];
      membershipProducts = products.map((product) => {
        return {
          productId: product.productId,
          title: product.title,
          price: product.price,
          localizedPrice: product.localizedPrice,
          description: product.description
        };
      });

      const defaultMembership = membershipProducts.find((product) => product.title === "6个月");
      if(defaultMembership) {
        setSelectedMembership(defaultMembership);
        setSelectedPayment(IS_IOS ? 'Apple Pay' : 'Google Pay');
      }
    }
  }, [products]);

  const handlePurchase = async () => {
    try {
      await requestPurchase({sku: membershipSelected.productId});
    } catch (e) {
      if (e instanceof PurchaseError) {
        console.error('purchasing error: ' + e);
      } else {
        console.error('handle purchase error: ' + e);
      }
    }
  };

  const getSubscriptionDate = () => {
    if(membershipSelected) {
      return (
        parseInt(membershipSelected.title.substring(0,1))*30);
    }
  };

  const saveTransRecord = () => {
    let platform_id;
    if(IS_IOS){
      platform_id = YING_SHI_PIN_IOS;
    }
    else{
      platform_id = YING_SHI_PIN_ANDROID;
    }

    const json = {
      ...currentPurchase,
      platformId: platform_id,
      productName: membershipSelected.title,
      productDescription: membershipSelected.description,
      productPrice: membershipSelected.price,
      productLocalizedPrice: membershipSelected.localizedPrice,
      subscriptionDays: getSubscriptionDate(),
      paymentChannel: paymentSelected,
      userId: userState.userId
    }
    console.log('passsing to db', json);
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
      if(currentPurchase) {
        console.log('-------------------');
        console.log(currentPurchase);

        try {
          if ((isIosStorekit2() && currentPurchase?.transactionId) ||
            currentPurchase?.transactionReceipt) {
            saveTransRecord(); //save record to database
            await finishTransaction({
              purchase: currentPurchase,
              isConsumable: true,
            });
            setIsDialogOpen(true);
          }
        } catch (error) {
          if (error instanceof PurchaseError) {
            console.error('purchasing error: ' + error);
          } else {
            console.error('current purchase error: ' + error);
          }
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const handleConfirm = () => {
    setIsDialogOpen(false);
    handleRefresh();
  };

  return (
    <>
      <ScreenContainer
        footer={
          <>
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
                  backgroundColor: paymentSelected ? colors.primary : colors.highlight,
                }}
                onPress={handlePurchase}
                disabled={paymentSelected ? false : true}>
                  <Text style={{...styles.btnText}}>
                    立即开通
                  </Text>
              </TouchableOpacity>
            </View>}
          </> 
        }>
        <Dialog
          isVisible={isDialogOpen}
          overlayStyle={{
            backgroundColor: "rgba(34, 34, 34, 1)",
            gap:10,
            ...styles.overlay,
          }}
          backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <FastImage
            style={{
              height: 80,
              width: 80,
              marginRight: 5,
              position: "relative",
              top: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode={FastImage.resizeMode.contain}
            source={require("../../../static/images/profile/login-success.gif")} />
          <View
            style={{
              alignItems:'center'
            }}
          >
            <Text style={{...styles.dialogText}}>
              付款成功
            </Text>
            <Text style={{...styles.dialogText}}>
              你已成为VIP用户
            </Text>
          </View>
          
          <TouchableOpacity
            style={{
              width: '80%',
              padding: 10,
              margin: 10,
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: paymentSelected ? colors.primary : colors.highlight,
            }}
            onPress={handleConfirm}  
            >
              <Text style={{...styles.btnText}}>
                确定
              </Text>
          </TouchableOpacity>
        </Dialog>

        <AdsBanner bottomTabHeight={0} />
        <TitleWithBackButtonHeader title="付费VIP" />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
          }
        >
          {(initConnectionError ) && 
            <View style={{ height: '100%'}}>
              <NoConnection onClickRetry={checkConnection}/>
            </View>
          }
          
          {connected && (
            <>
              <VipCard 
                userState={userState}
                membershipProduct={products.sort((item1, item2) => 
                  +item1.price - +item2.price
                )} 
                selectedMembership={membershipSelected}
                onMembershipSelect={setSelectedMembership}
                selectedPayment={paymentSelected}
                onPaymentSelect={setSelectedPayment} />

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
            </>
          )}
        </ScrollView>
      </ScreenContainer>
    </>
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
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dialogText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontSize: 16,
    fontWeight: "400",
  }
});
