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
} from "react-native-iap";
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
import { VipCard } from "../../components/vip/vipCard";
import { TouchableOpacity } from "react-native";
import { membershipModel } from "../../types/membershipType";
import NoConnection from "../../components/common/noConnection";
import { Dialog } from "@rneui/themed";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
  API_DOMAIN_TEST,
  API_DOMAIN,
  APP_NAME_CONST,
} from "../../utility/constants";
import axios from "axios";
import { showToast } from "../../Sports/utility/toast";
import { showLoginAction } from "../../redux/actions/screenAction";
import SpinnerOverlay from "../../components/modal/SpinnerOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";

const subscriptionSkus = Platform.select({
  ios: ["yingshi_vip_month", "yingshi_vip_6months", "monthly_subscription"],
});

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
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
  const [membershipProducts, setMembershipProducts] = useState<
    membershipModel[]
  >([]);
  const [membershipSelected, setSelectedMembership] = useState<membershipModel>(
    membershipProducts[0]
  );
  const [paymentSelected, setSelectedPayment] = useState(
    IS_IOS ? "Apple Pay" : "Google Pay"
  );
  const [isOffline, setIsOffline] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [currentTransID, setCurrentTransID] = useState("");
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
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${API_DOMAIN_TEST}products/v1/products`);
    const data = await response.data.data;
    let products: Array<membershipModel>;
    if (response) {
      products = data.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
        };
      });

      setMembershipProducts(products);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (membershipProducts) {
      const defaultMembership = membershipProducts.find(
        (product) => product.title === "6个月"
      );
      if (defaultMembership) {
        setSelectedMembership(defaultMembership);
      }
    }
  }, [membershipProducts]);

  const handlePurchase = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      console.log("show login");
      return; //early return
    }

    setIsBtnEnable(false);
    try {
      if (paymentSelected === "Apple Pay") {
        console.log("apple pay payment");
        console.log(initConnectionError);
        setIsVisible(true);
        await getProducts({ skus: [membershipSelected.productSKU] });

        await requestPurchase({ sku: membershipSelected.productSKU });
        setIsVisible(false);
      } else if (paymentSelected === "Google Pay") {
        console.log("google pay method");
        setIsVisible(true);
        await getProducts({ skus: [membershipSelected.productSKU] });

        await requestPurchase({ skus: [membershipSelected.productSKU] });
        setIsVisible(false);
      } else {
        console.log("others payment method");
      }
    } catch (error) {
      setIsVisible(false);
      if (error instanceof PurchaseError) {
        console.error("purchasing error: " + error);
      } else {
        console.error("handle purchase error: ", error);
      }
      // showToast(
      //   error?.code.toString() +
      //     "  error message : " +
      //     error.message.toString()
      // );
      if (error && error?.code == "E_USER_CANCELLED") {
        console.log("user cancel purchase");
        setIsBtnEnable(true);
      } else {
        setIsDialogOpen(true);
      }
    }
  };

  const saveFinishTrans = async (
    transStatus: string,
    error: any
  ) => {
    const trans = {
      user_id: userState.userId,
      product_id: membershipSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      payment_channel: paymentSelected.toUpperCase(),
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? currentPurchase.transactionReceipt
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: 1
    };
    console.log("complete trans: ", trans);

    addLocalTrans(trans);
    
    const receiptApi = IS_IOS ? `${API_DOMAIN}validate/v1/iosreceipt` : `${API_DOMAIN}validate/v1/androidreceipt`;
    console.log('receipt api: ', receiptApi);
    const result = await axios.post(
      receiptApi,
      trans
    );
    
    console.log("complete transaction result");
    console.log(result.data);
    return result.data.data.data;
  };

  const getLocalTrans = async () => {
    try {
      const data = await AsyncStorage.getItem("transRecords");
      console.log('trans data stored in local storage');
      console.log(data);

      if (data !== null) {
        return JSON.parse(data);
      }
      return [];
    }catch (error) {
      console.log('error when retrieving local trans records: ', error);
      return [];
    }
  };

  const addLocalTrans = async (trans: any) => {
    try {
      const existingData = await getLocalTrans();
      existingData.push(trans);
      await AsyncStorage.setItem("transRecords", JSON.stringify(existingData));

      const existingData2 = await getLocalTrans();
      console.log('current trans stored in local: ', existingData2);
    } catch (error) {
      console.log('error when storing the trans into local storage: ', error);
    }
  };

  const processLocalTrans = async () => {
    try {
      const existingData = await getLocalTrans();
      console.warn('processData');
      let dataLength = existingData.length;

      while(dataLength--){
        let popItem = existingData.shift();
        console.warn('pop item');
        console.log(popItem);

        const receiptApi = IS_IOS ? `${API_DOMAIN}validate/v1/iosreceipt` : `${API_DOMAIN}validate/v1/androidreceipt`;
        const result = await axios.post(
          receiptApi,
          popItem
        );
        console.log("response get back");
        console.log(result.data);

        if(result.status !== 200){
          console.log('push back the unsuccess trans: ', popItem);
          existingData.push(popItem);
        }
      }
      console.warn('after data');
      console.log(existingData);
      await AsyncStorage.setItem("transRecords", JSON.stringify(existingData));
    } catch (error) {
      console.error('error saving local data to database: ', error);
    }
  };

  useEffect(() => {
    const passData = async () => {
      console.log('check if offline')
      if(!isOffline) {
        await processLocalTrans();
        await refreshUserState();
        // if(currentPurchase) {
        //   finishTransaction({
        //     purchase: currentPurchase,
        //     isConsumable: true,
        //   });
        // }
      }
    };

    passData();
  }, [isOffline]);

  const receiptBuffer = new Map();
  useEffect(() => {
    const checkCurrentPurchase = async () => {
      if (currentPurchase) {
        console.log("-------Current Purchase------------");
        console.log(currentPurchase);

        try {
          if (
            (isIosStorekit2() && currentPurchase.transactionId) ||
            currentPurchase.transactionReceipt
          ) {
            setIsVisible(true);
            const key = currentPurchase.transactionId?.concat('true');

            if (receiptBuffer.has(key)) {
              console.log('duplicate transaction id: ', currentPurchase.transactionId);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });
              setIsVisible(false);
              return;
            } else {
              setTimeout(() => setIsVisible(false), 10000);
              
              // await finishTransaction({
              //   purchase: currentPurchase,
              //   isConsumable: true,
              // });
              // setIsVisible(false);
              // setIsDialogOpen(true);
              // setIsSuccess(true);

              const success = await saveFinishTrans("1", ""); //validate receipt with server
              receiptBuffer.set(currentPurchase.transactionId?.concat(success), success);
              
              if(success) {
                await finishTransaction({
                  purchase: currentPurchase,
                  isConsumable: true,
                });
                setIsVisible(false);
                setIsDialogOpen(true);
                setIsSuccess(true);
              } else {
                await finishTransaction({
                  purchase: currentPurchase,
                  isConsumable: true,
                });
                setIsVisible(false);
                setIsDialogOpen(true);
                setIsSuccess(false);
              }
            }
          }
        } catch (error) {
          if (error instanceof PurchaseError) {
            console.error("purchasing error: " + error);
          } else {
            console.error("current purchase error: " + error);
          }
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const handleConfirm = () => {
    setIsDialogOpen(false);
    handleRefresh();
    setIsBtnEnable(true);
    setIsSuccess(false);
  };

  return (
    <>
      <ScreenContainer
        footer={
          <>
            {membershipSelected && (
              <View style={{ ...styles.summaryContainer }}>
                <View style={{ ...styles.summaryLabel }}>
                  <Text style={{ ...textVariants.small }}>
                    {membershipSelected.title}
                  </Text>
                  <Text style={{ ...textVariants.body, color: colors.title }}>
                    {membershipSelected.localizedPrice}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "60%",
                    padding: 10,
                    margin: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: isBtnEnable
                      ? colors.primary
                      : colors.highlight,
                  }}
                  onPress={handlePurchase}
                  disabled={isBtnEnable ? false : true}
                >
                  <Text style={{ ...styles.btnText }}>立即开通</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        }
      >
        <Dialog
          isVisible={isDialogOpen && !isOffline}
          overlayStyle={{
            backgroundColor: "rgba(34, 34, 34, 1)",
            gap: 10,
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
            source={
              isSuccess
                ? require("../../../static/images/profile/login-success.gif")
                : require("../../../static/images/profile/cross.png")
            }
          />
          <View
            style={{
              alignItems: "center",
            }}
          >
            {isSuccess ? (
              <>
                <Text style={{ ...styles.dialogText }}>付款成功</Text>
                <Text style={{ ...styles.dialogText }}>你已成为VIP用户</Text>
              </>
            ) : (
              <Text style={{ ...styles.dialogText }}>付款失败</Text>
            )}
          </View>

          <TouchableOpacity
            style={{
              width: "80%",
              padding: 10,
              margin: 10,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: paymentSelected
                ? colors.primary
                : colors.highlight,
            }}
            onPress={handleConfirm}
          >
            <Text style={{ ...styles.btnText }}>确定</Text>
          </TouchableOpacity>
        </Dialog>

        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VIP明细", { userState: userState });
              }}
              disabled={
                !(
                  userState.userPaidVipList.total_purchased_days > 0 ||
                  userState.userAccumulateRewardDay > 0
                )
              }
            >
              <Text
                style={{
                  ...textVariants.subBody,
                  padding: 8,
                  opacity:
                    userState.userPaidVipList.total_purchased_days > 0 ||
                    userState.userAccumulateRewardDay > 0
                      ? 100
                      : 0,
                }}
              >
                VIP明细
              </Text>
            </TouchableOpacity>
          }
          headerStyle={{ marginBottom: spacing.m }}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {loading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(20,22,25)",
            }}
          >
            <FastImage
              source={require("../../../static/images/home-loading.gif")}
              style={{
                width: 150,
                height: 150,
                position: "relative",
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}

        <SpinnerOverlay visible={isVisible} />

        {!loading && !isOffline && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                tintColor="#FAC33D"
              />
            }
          >
            <VipCard
              userState={userState}
              membershipProduct={membershipProducts}
              selectedMembership={membershipSelected}
              onMembershipSelect={setSelectedMembership}
              selectedPayment={paymentSelected}
              onPaymentSelect={setSelectedPayment}
            />

            <View style={{ ...styles.footerWithBackgroundContainer }}>
              <Text style={{ ...textVariants.small }}>
                有关购买查询，请联系contactus@yingshi.tv
              </Text>
            </View>
            <View style={{ ...styles.footerContainer }}>
              <Text style={{ ...textVariants.small }}>
                活动由影视TV公司提供 与苹果公司Apple.Inc 无关
              </Text>
            </View>
          </ScrollView>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#1D2023",
    alignItems: "center",
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: "#1F2224",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
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
  },
});
