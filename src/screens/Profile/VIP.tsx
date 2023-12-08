import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
  Linking,
} from "react-native";
import {
  isIosStorekit2,
  PurchaseError,
  requestPurchase,
  useIAP,
} from "react-native-iap";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "@redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { userModel } from "@type/userType";
import { updateUserAuth } from "@redux/actions/userAction";
import { getUserDetails } from "../../features/user";
import { VipCard } from "../../components/vip/vipCard";
import { TouchableOpacity } from "react-native";
import { membershipModel } from "@type/membershipType";
import NoConnection from "../../components/common/noConnection";
import { Dialog } from "@rneui/themed";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
  API_DOMAIN_TEST,
  API_DOMAIN,
  APP_NAME_CONST,
} from "@utility/constants";
import axios from "axios";
import { showToast } from "../../../src/Sports/utility/toast";
import { showLoginAction } from "@redux/actions/screenAction";
import SpinnerOverlay from "../../components/modal/SpinnerOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/vipDialog";

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
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();
  const pendingTimeoutRef = useRef<NodeJS.Timeout>();

  const successDialogText = ['付款成功', '你已成为VIP用户'];
  const failedDialogText = ['付款失败'];
  const axiosErrorText = ['系统繁忙，请稍后再试']
  const tryAgainDialogText = ['支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查购买记录，检查前请勿重复支付'];
  const [dialogText, setDialogText] = useState([''])

  const headers = {
    Authorization: `Bearer ${userState.userToken}`,
    "Content-Type": "application/json",
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
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
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null
            ? true
            : false)
        );
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
      setIsVisible(true);
      if (paymentSelected === "Apple Pay") {
        console.log("apple pay payment");
        console.log(initConnectionError);
        await getProducts({ skus: [membershipSelected.productSKU] });

        await requestPurchase({ sku: membershipSelected.productSKU });
      } else if (paymentSelected === "Google Pay") {
        console.log("google pay method");
        await getProducts({ skus: [membershipSelected.productSKU] });

        await requestPurchase({ skus: [membershipSelected.productSKU] });
      } else {
        console.log("others payment method");
        handlePaymentGateway();
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
        setDialogText(failedDialogText);
        setIsDialogOpen(true);
      }
    }
  };

  const handlePaymentGateway = async () => {
    const orderJson = {
      product_id: parseInt(membershipSelected.productId),
      payment_type: 'GCASH_NATIVE',
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
    };
    console.log('order json: ', orderJson);

    try {
      const result = await axios.post(`${API_DOMAIN_TEST}finpay/v1/order`, orderJson, { headers: headers });

      console.log("returned order data: ", result.data);
      openLink(result.data.data.paymentData, result.data.data.transaction_id);
    } catch (error) {
      console.log('error catch: ', error);
      setDialogText(axiosErrorText);
      setIsDialogOpen(true);
    };
  };

  const getDeepLink = (path = '') => {
    const scheme = 'yingshiapp';
    const prefix =
      Platform.OS === 'android' ? `${scheme}://yingshi/` : `${scheme}://`;
    return prefix + path;
  };

  const openLink = async (url: string, transID: string) => {
    const redirectUrl = getDeepLink();

    try {
      if (await InAppBrowser.isAvailable()) {
        InAppBrowser.openAuth(url, redirectUrl, {
          // IOS properties
          dismissButtonStyle: 'cancel',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android properties
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: 'slide_in_left',
            startExit: 'slide_out_right',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          hasBackButton: true,
          browserPackage: undefined,
          showInRecents: true,
          includeReferrer: true,
        }).then((response) => {
          console.log('response: ', JSON.stringify(response));
          if (response.type === "success" && response.url) {
            Linking.openURL(response.url);
            pendingTimeoutRef.current = setTimeout(() => {
              setDialogText(tryAgainDialogText);
              setIsDialogOpen(true);
            }, 15000);
            getPaymentStatus(transID);
          } else {
            setIsVisible(false);
            setIsBtnEnable(true);
          }
        })
      } else {
        console.log('in app browser not supported');
        Linking.openURL(url);
      }
    } catch (error) {
      console.log('error when open link: ', error)
    }
  };

  const getPaymentStatus = async (transID: string) => {
    const statusAPI = `${API_DOMAIN_TEST}finpay/v1/transactions?transaction_id=${transID}`;
    const status = await axios.get(statusAPI, {headers: headers});

    console.log('order: ', statusAPI);
    console.log('order status: ', status.data);

    if (status.data.data.transaction_status_string === 'COMPLETED') {
      setIsSuccess(true);
      setDialogText(successDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else if (status.data.data.transaction_status_string === 'FAILED') {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else {
      console.log('order still in progress');
    }
  };

  const saveFinishTrans = async (transStatus: string, error: any) => {
    const trans = {
      user_id: userState.userId,
      product_id: membershipSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      payment_channel: paymentSelected.toUpperCase().replace(/ /g, '_'),
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
    };
    console.log("complete trans: ", trans);

    addLocalTrans(trans);

    const receiptApi = IS_IOS
      ? `${API_DOMAIN}validate/v1/iosreceipt`
      : `${API_DOMAIN}validate/v1/androidreceipt`;
    const result = await axios.post(receiptApi, trans);

    console.log("complete transaction result");
    console.log(result.data);
    return result.data.data.data;
  };

  const getLocalTrans = async () => {
    try {
      const data = await AsyncStorage.getItem("transRecords");
      console.log("trans data stored in local storage");
      console.log(data);

      if (data !== null) {
        return JSON.parse(data);
      }
      return [];
    } catch (error) {
      console.log("error when retrieving local trans records: ", error);
      return [];
    }
  };

  const addLocalTrans = async (trans: any) => {
    try {
      const existingData = await getLocalTrans();
      existingData.push(trans);
      await AsyncStorage.setItem("transRecords", JSON.stringify(existingData));

      const existingData2 = await getLocalTrans();
      console.log("current trans stored in local: ", existingData2);
    } catch (error) {
      console.log("error when storing the trans into local storage: ", error);
    }
  };

  const processLocalTrans = async () => {
    try {
      const existingData = await getLocalTrans();
      console.log("processData");
      let dataLength = existingData.length;

      while (dataLength--) {
        let popItem = existingData.shift();
        console.log("pop item");
        console.log(popItem);

        const receiptApi = IS_IOS
          ? `${API_DOMAIN}validate/v1/iosreceipt`
          : `${API_DOMAIN}validate/v1/androidreceipt`;
        const result = await axios.post(receiptApi, popItem);
        console.log("response get back");
        console.log(result.data);

        if (result.status !== 200) {
          console.log("push back the unsuccess trans: ", popItem);
          existingData.push(popItem);
        }
      }
      console.log("after data");
      console.log(existingData);
      await AsyncStorage.setItem("transRecords", JSON.stringify(existingData));
    } catch (error) {
      console.error("error saving local data to database: ", error);
    }
  };

  useEffect(() => {
    const passData = async () => {
      if (!isOffline) {
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
            const key = currentPurchase.transactionId?.concat("true");

            if (receiptBuffer.has(key)) {
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });
              setIsVisible(false);
              setIsBtnEnable(true);
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
              
              setReceiptBuffer((prev) => {
                const receipt = new Map(prev);
                receipt.set(currentPurchase.transactionId?.concat(success), success);
                return receipt;
              });

              if (success) {
                await finishTransaction({
                  purchase: currentPurchase,
                  isConsumable: true,
                });
                setDialogText(successDialogText)
                setIsDialogOpen(true);
                setIsSuccess(true);
              } else {
                await finishTransaction({
                  purchase: currentPurchase,
                  isConsumable: true,
                });
                setDialogText(failedDialogText)
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
          setIsVisible(false);
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const handleConfirm = () => {
    setIsDialogOpen(false);
    setIsVisible(false);
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
        <VipDialog isDialogOpen={isDialogOpen}
          isOffline={isOffline}
          isSuccess={isSuccess}
          handleConfirm={handleConfirm}
          dialogText={dialogText}
        />

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
                  // padding: 8,
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
          // headerStyle={{ marginBottom: spacing.m }}
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
              source={require("@static/images/home-loading.gif")}
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
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
          >
            <VipCard
              userState={userState}
              membershipProduct={membershipProducts}
              selectedMembership={membershipSelected}
              onMembershipSelect={setSelectedMembership}
              selectedPayment={paymentSelected}
              onPaymentSelect={setSelectedPayment}
            />

            <View
              style={{
                ...styles.tncContainer,
                backgroundColor: "transparent",
                paddingTop: 0,
              }}
            >
              <Text
                style={{
                  ...textVariants.small,
                  textAlign: "center",
                  color: "#a6a6a6",
                  fontStyle: "italic",
                }}
                numberOfLines={2}
              >
                因不同地区税收政策不同/汇率波动，实际支付价格与会员显示价格存在少量偏差
              </Text>
            </View>

            <View style={{ ...styles.footerWithBackgroundContainer }}>
              <Text style={{ ...textVariants.small }}>
                有关购买查询，请联系contactus@yingshi.tv
              </Text>
            </View>
            {IS_IOS ? (
              <View style={{ ...styles.footerContainer }}>
                <Text style={{ ...textVariants.small }}>
                  活动由影视TV公司提供 与苹果公司Apple.Inc 无关
                </Text>
              </View>
            ) : null}
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
  tncContainer: {
    backgroundColor: "#1F2224",
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
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
});
