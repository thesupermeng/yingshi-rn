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
  APP_NAME,
  API_DOMAIN,
} from "../../utility/constants";
import axios from "axios";

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
  const { colors, textVariants } = useTheme();
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleGetPurchaseHistory = async () => {
    try {
      await getProducts({ skus: subscriptionSkus });
      console.log("purchase successfullllll");
    } catch (error) {
      console.error("get purchase history: " + error);
    }
  };

  useEffect(() => {
    handleGetPurchaseHistory();
  }, [connected]);

  useEffect(() => {
    console.log(JSON.stringify(products));
  }, [products]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.yingshi.tv/products/v1/products`
    );
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
    try {
      if (paymentSelected === "Apple Pay") {
        console.log("apple pay payment");
        console.log(initConnectionError);
        await getProducts({ skus: [membershipSelected.productSKU] });
        await requestPurchase({ sku: membershipSelected.productSKU });
      } else {
        console.log("others payment method");
      }
    } catch (e) {
      if (e instanceof PurchaseError) {
        console.error("purchasing error: " + e);
      } else {
        console.error("handle purchase error: " + e);
      }
      setIsDialogOpen(true);
    }
  };

  const saveTransRecord = async () => {
    const json = {
      user_id: userState.userId,
      product_id: membershipSelected.productId,
      product_name: membershipSelected.title,
      product_price: parseFloat(membershipSelected.price),
      subscription_days: membershipSelected.subscriptionDays,
      transaction_type: "SUBSCRIBE_VIP",
      payment_channel: paymentSelected.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase?.transactionReceipt,
      platform: APP_NAME + "-" + Platform.OS.toUpperCase(),
    };
    console.log("passsing to db", json);
    const result = await axios.post(
      "https://testapi.yingshi.tv/payment/v1/transaction",
      json
    );
    console.log("transaction result");
    console.log(result);
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
      console.log("current purchase runnnnnnnn");
      if (currentPurchase) {
        console.log("-------Current Purchase------------");
        console.log(currentPurchase);

        try {
          if (
            (isIosStorekit2() && currentPurchase.transactionId) ||
            currentPurchase.transactionReceipt
          ) {
            saveTransRecord(); //save record to database
            await finishTransaction({
              purchase: currentPurchase,
              isConsumable: false,
            });
            setIsDialogOpen(true);
            setIsSuccess(true);
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
  };

  // useEffect(() => {
  //   console.log('--------------------------')
  //   console.log(availablePurchases);
  //   console.log(purchaseHistory)
  // }, [purchaseHistory, availablePurchases])

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
                    backgroundColor: paymentSelected
                      ? colors.primary
                      : colors.highlight,
                  }}
                  onPress={handlePurchase}
                  disabled={paymentSelected ? false : true}
                >
                  <Text style={{ ...styles.btnText }}>立即开通</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        }
      >
        <Dialog
          isVisible={isDialogOpen}
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

        <TitleWithBackButtonHeader title="付费VIP" />
        {(initConnectionError || isOffline) && (
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
              // membershipProduct={products.sort((item1, item2) =>
              //   +item1.price - +item2.price
              // )}
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
