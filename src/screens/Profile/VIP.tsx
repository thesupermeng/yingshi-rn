import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
  Linking,
  TextInput,
  Alert
} from "react-native";
import {
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
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/noConnection";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IS_ANDROID,
  IS_IOS,
} from "@utility/constants";
import { showLoginAction } from "@redux/actions/screenAction";
import { ProductApi, UserApi } from "@api";
import WebView from "react-native-webview";
import { YSConfig } from "../../../ysConfig";
import { VipCard } from "../../components/vip/vipCard";
import { membershipModel, zfModel } from "@type/membershipType";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { VipDialog } from "../../components/vip/vipDialog";
import SpinnerOverlay from "../../components/modal/SpinnerOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";

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
  const [zfOptions, setZfOptions] = useState<zfModel[]>([]);
  const [zfSelected, setSelectedZf] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [loading, setIsLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();
  const pendingTimeoutRef = useRef<NodeJS.Timeout>();

  let successDialogText = ["付款成功", "你已成为VIP用户"];
  let failedDialogText = ["付款失败"];
  let axiosErrorText = ["系统繁忙，请稍后再试"];
  let tryAgainDialogText = [
    "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查购买记录，检查前请勿重复支付",
  ];

  if (YSConfig.instance.showBecomeVip) {
    successDialogText = ["成功", "你已成为VIP用户"];
    failedDialogText = ["失败"];
    axiosErrorText = ["系统繁忙，请稍后再试"];
    tryAgainDialogText = [
      "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查VIP记录，检查前请勿重复支付",
    ];
  }

  const [dialogText, setDialogText] = useState([""]);

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
    const result = await UserApi.getUserDetails();
    if (result == null) {
      return;
    }

    await dispatch(updateUserAuth(result));
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
    const data = await ProductApi.getList({
      productTypeId: "yingshi_4_fang",
    });
    let products: Array<membershipModel>;
    if (data) {
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
          zfOptions: product.payment_options,
        };
      });

      console.log(products);
      setMembershipProducts(products);
      setFetching(false);
    }
  };

  useEffect(() => {
    if (IS_ANDROID) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (membershipProducts) {
      const defaultMembership = membershipProducts.find(
        (product) => product.title === "12个月"
      );
      if (defaultMembership) {
        setSelectedMembership(defaultMembership);
      }
    }
  }, [membershipProducts]);

  useEffect(() => {
    if (membershipSelected) {
      setZfOptions(membershipSelected.zfOptions);
      setSelectedZf(membershipSelected.zfOptions[0].payment_type_code);
    }
  }, [membershipSelected]);

  const handlePurchase = async () => {
    if (userState.userToken == "") {
      dispatch(showLoginAction());
      console.log("show login");
      return; //early return
    }

    setIsBtnEnable(false);
    try {
      setIsVisible(true);
      handleZfGateway();
      // if (zfSelected === "Apple") {
      //   console.log("apple zf");
      //   console.log(initConnectionError);
      //   await getProducts({ skus: [membershipSelected.productSKU] });

      //   await requestPurchase({ sku: membershipSelected.productSKU });
      // } else if (zfSelected === "Google") {
      //   console.log("google method");
      //   await getProducts({ skus: [membershipSelected.productSKU] });

      //   await requestPurchase({ skus: [membershipSelected.productSKU] });
      // } else {
      //   console.log("others zf method");
      //   handleZfGateway();
      // }
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

  const handleZfGateway = async () => {
    try {
      const result = await ProductApi.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

      console.log("returned order data: ", result);

      openLink(result.paymentData, result.transaction_id);
    } catch (error) {
      console.log("error catch: ", error);
      setDialogText(axiosErrorText);
      setIsDialogOpen(true);
    }
  };

  const getDeepLink = (path = "") => {
    const scheme = "yingshiapp";
    const prefix =
      Platform.OS === "android" ? `${scheme}://yingshi/` : `${scheme}://`;
    return prefix + path;
  };

  const openLink = async (url: string, transID: string) => {
    const redirectUrl = getDeepLink();

    try {
      if (await InAppBrowser.isAvailable()) {
        InAppBrowser.openAuth(url, redirectUrl, {
          // IOS properties
          dismissButtonStyle: "cancel",
          readerMode: false,
          animated: true,
          modalPresentationStyle: "fullScreen",
          modalTransitionStyle: "coverVertical",
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android properties
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: "slide_in_left",
            startExit: "slide_out_right",
            endEnter: "slide_in_left",
            endExit: "slide_out_right",
          },
          hasBackButton: true,
          browserPackage: undefined,
          showInRecents: true,
          includeReferrer: true,
        }).then((response) => {
          console.log("response: ", JSON.stringify(response));
          if (response.type === "success" && response.url) {
            Linking.openURL(response.url);
            pendingTimeoutRef.current = setTimeout(() => {
              setDialogText(tryAgainDialogText);
              setIsDialogOpen(true);
            }, 15000);
            getZfStatus(transID);
          } else {
            setIsVisible(false);
            setIsBtnEnable(true);
          }
        });
      } else {
        console.log("in app browser not supported");
        Linking.openURL(url);
      }
    } catch (error) {
      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    const result = await ProductApi.getFinzfTransaction({
      transactionId: transID,
    });
    console.log("order status: ", result);

    if (result.transaction_status_string === "COMPLETED") {
      setIsSuccess(true);
      setDialogText(successDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else if (result.transaction_status_string === "FAILED") {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else {
      console.log("order still in progress");
    }
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    setIsVisible(false);
    handleRefresh();
    setIsBtnEnable(true);
    setIsSuccess(false);
  };

  const webViewref = useRef<any>();
  useEffect(() => {
    if(webViewref.current) {
      webViewref.current.reload();
    }
  },[userState.userToken]);

  const onLoadEnd = () => {
    webViewref.current.postMessage(`${userState.userToken}`);
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer
        footer={
          <>
            {!IS_IOS && membershipSelected && (
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
        <VipDialog
          isDialogOpen={isDialogOpen}
          isOffline={isOffline}
          isSuccess={isSuccess}
          handleConfirm={handleConfirm}
          dialogText={dialogText}
        />

        <TitleWithBackButtonHeader
         title={ YSConfig.instance.showBecomeVip
          ? "成为VIP"
          : "付费VIP"}
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
          onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {(IS_IOS ? loading : fetching) && !isOffline && (
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

        {IS_IOS && !isOffline && (
          <View style={{backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1}}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{uri: 'https://www.yingshi.tv/vip'}}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: {nativeEvent: {data?: string}}) => {
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle = {{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                if (event.url === 'https://www.yingshi.tv/vip') {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )}

        {IS_ANDROID && !fetching && !isOffline && (
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
              zfOptions={zfOptions}
              selectedZf={zfSelected}
              onZfSelect={setSelectedZf}
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
                有关购买查询，请联系contact.movie9@gmail.com
              </Text>
            </View>
            {IS_IOS ? (
              <View style={{ ...styles.footerContainer }}>
                <Text style={{ ...textVariants.small }}>
                  活动由此APP公司提供 与苹果公司Apple.Inc 无关
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
