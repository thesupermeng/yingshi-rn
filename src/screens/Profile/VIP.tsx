import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
  Linking,
  Dimensions,
} from "react-native";
import {
  Purchase,
  PurchaseError,
  requestPurchase,
  requestSubscription,
  useIAP,
} from "react-native-iap";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useTheme } from "@react-navigation/native";

import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { updateUserAuth } from "@redux/actions/userAction";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/noConnection";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/constants";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/screenAction";
import { ProductApi, UserApi } from "@api";
import WebView from "react-native-webview";
import { YSConfig } from "../../../ysConfig";
import { VipCard } from "../../components/vip/vipCard";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/membershipType";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/vipDialog";
import SpinnerOverlay from "../../components/modal/SpinnerOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UmengAnalytics from "../../../Umeng/UmengAnalytics";
import { UserStateType } from "@redux/reducers/userReducer";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { BackgroundType } from "@redux/reducers/backgroundReducer";
import CloseButton from "@static/images/close_icon.svg";
import Tick1 from "@static/images/splash/tick1.svg";
import Tick2 from "@static/images/splash/tick2.svg";
import { screenModel } from "@type/screenType";
import SplashCard from "../../components/common/splashCard";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/CarouselPagination";
import { User } from "@models/user";
import { CPopup } from "@utility/popup";
import AppsFlyerAnalytics from "../../../AppsFlyer/AppsFlyerAnalytic";

const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const {
    connected,
    products,
    subscriptions,
    currentPurchase,
    finishTransaction,
    getProducts,
    getSubscriptions,
  } = useIAP();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [membershipProducts, setMembershipProducts] = useState<
    promoMembershipModel[]
  >([]);

  const [oneTimeProducts, setOneTimeProducts] = useState<
    promoMembershipModel[]
  >([]);

  const [membershipSelected, setSelectedMembership] = useState<
    promoMembershipModel
  >(membershipProducts[0]);
  const [zfOptions, setZfOptions] = useState<zfModel[]>([]);
  const [zfSelected, setSelectedZf] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<UserStateType>("userReducer");

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const carouselRef = useRef<any>();

  const backgroundState = useSelector<BackgroundType>("backgroundReducer");
  const [countdownSecond, setCountdownSecond] = useState(
    (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
      (Date.now() - backgroundState.vipPromotionCountdownStart)) /
    1000
  );

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor((countdownSecond / 60) % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, "0")[0],
    String(hours).padStart(2, "0")[1],
    String(minute).padStart(2, "0")[0],
    String(minute).padStart(2, "0")[1],
    String(second).padStart(2, "0")[0],
    String(second).padStart(2, "0")[1],
  ];

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  // ========== for analytics - start ==========
  useEffect(() => {
    UmengAnalytics.userCenterVipPayViewsAnalytics();
  }, []);
  // ========== for analytics - end ==========

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
    const data = await ProductApi.getNativeList();

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {
      let oneTime: Array<promoMembershipModel>;
      let subscription: Array<promoMembershipModel>;

      if (data) {
        oneTime = data.one_time_items.map((product: any) => {
          return {
            productId: product.product_id,
            productSKU: product.product_ios_product_id,
            title: product.product_name,
            price: product.product_price,
            promoPrice: product.product_promo_price,
            promoPriceStr:
              product.currency.currency_symbol +
              " " +
              product.product_promo_price,
            localizedPrice:
              product.currency.currency_symbol + " " + product.product_price,
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: [
              {
                payment_type_code: "GOOGLE_PAY",
                payment_type_name: "Google Pay",
                payment_type_icon: "google.png",
              },
            ],
            productType: IAP_TYPE,
            currency: {
              currencyId: product.currency?.currency_id.toString(),
              currencyCode: product.currency?.currency_code,
              currencyName: product.currency?.currency_name,
              currencySymbol: product.currency?.currency_symbol,
            },
          };
        });

        subscription = data.subscription_items.map((product: any) => {
          return {
            productId: product.product_id,
            productSKU: product.product_ios_product_id,
            title: product.product_name,
            price: product.product_price,
            promoPrice: product.product_promo_price,
            promoPriceStr:
              product.currency.currency_symbol + product.product_promo_price,
            localizedPrice:
              product.currency.currency_symbol +
              (product.product_name === "1个月"
                ? product.product_price
                : product.product_fake_price),
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: [
              {
                payment_type_code: "GOOGLE_PAY",
                payment_type_name: "Google Pay",
                payment_type_icon: "google.png",
              },
            ],
            productType: SUBSCRIPTION_TYPE,
            currency: {
              currencyId: product.currency?.currency_id.toString(),
              currencyCode: product.currency?.currency_code,
              currencyName: product.currency?.currency_name,
              currencySymbol: product.currency?.currency_symbol,
            },
          };
        });

        // Find the index of the item with product_name "12个月"
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

        // If found, move it to the first position
        // if (index12Months !== -1) {
        //   const item12Months = subscription.splice(index12Months, 1)[0];
        //   subscription.unshift(item12Months);
        // }

        // If found, move it to the second position
        if (index12Months !== -1) {
          const item12Months = subscription.splice(index12Months, 1)[0];
          subscription.splice(1, 0, item12Months);
        }

        // console.log("subscription");
        // console.log(subscription);
        setOneTimeProducts(oneTime);
        setMembershipProducts(subscription);
        setTimeout(() => {
          setFetching(false);
        }, 1000);
      }
    } else {
      let siFang: Array<promoMembershipModel>;

      if (data) {
        siFang = data["4_fang_items"].map((product: any) => {
          return {
            productId: product.product_id,
            productSKU: product.product_ios_product_id,
            title: product.product_name,
            price: product.product_price,
            promoPrice: product.product_promo_price,
            promoPriceStr:
              product.currency.currency_symbol + " " + product.product_price,
            localizedPrice:
              product.currency.currency_symbol +
              " " +
              product.product_fake_price,
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: product.payment_options,
            productType: SI_FANG,
          };
        });

        // Find the index of the item with product_name "12个月"
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

        // If found, move it to the first position
        if (index12Months !== -1) {
          const item12Months = siFang.splice(index12Months, 1)[0];
          siFang.unshift(item12Months);
        }

        // console.log("sifang");
        // console.log(siFang);
        setMembershipProducts(siFang);
        setTimeout(() => {
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {
      console.log("error when get product from google play: ", err);
    }
  };

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));
    setHeight(Number(Dimensions.get("window").height));
    fetchData();
  }, []);

  useEffect(() => {
    if (connected && UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {
      console.log("get product of google play dbefjndsvb");
      handleGetGoogleProduct();
    }
  }, [connected]);

  useEffect(() => {
    if (membershipProducts) {
      const defaultMembership = membershipProducts.find((product) =>
        UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID
          ? product.title === "1个月"
          : product.title === "12个月"
      );
      if (defaultMembership) {
        setSelectedMembership(defaultMembership);
      }
    }
  }, [membershipProducts]);

  useEffect(() => {
    if (membershipSelected && membershipSelected.zfOptions.length) {
      setZfOptions(membershipSelected.zfOptions);
      setSelectedZf(membershipSelected.zfOptions[0].payment_type_code);
    }
  }, [membershipSelected]);

  const handlePurchase = async () => {
    // dispatch(setShowPurchasePending(true));
    // navigation.goBack()
    // return;
    // if(!isBtnEnable)
    // {

    //   return;
    // }
    setIsBtnEnable(false);
    try {
      setIsVisible(true);

      if (zfSelected === "GOOGLE_PAY") {
        console.log("google method");
        console.log("the data: ", membershipSelected);

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

          if (subs) {
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;
            await requestSubscription({
              sku: membershipSelected.productSKU,
              ...(offerToken && {
                subscriptionOffers: [
                  { sku: membershipSelected.productSKU, offerToken },
                ],
              }),
            });
          } else {
            throw new Error("subscription plan not found");
          }
        }
      } else {
        console.log("4 fang method");
        handleZfGateway();
      }
    } catch (error) {
      setIsVisible(false);
      if (error instanceof PurchaseError) {
        console.error("purchasing error: " + error);
      } else {
        console.error("handle purchase error: ", error);
      }

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

      if (result.paymentData.url) {
        openLink(result.paymentData.url, result.transaction_id);
      } else throw new Error("no url is retuned");
    } catch (error) {
      console.log("error catch: ", error);
      setDialogText(axiosErrorText);
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
    Linking.openURL('mailto:contact.movie9@gmail.com');
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
      handleRefresh();
      if (userState.user?.isLogin()) {
        setDialogText(successDialogText);
        setIsDialogOpen(true);
        setIsSuccess(true);
        navigation.goBack();

        if (currentPurchase && currentPurchase.transactionId) {
          AppsFlyerAnalytics.zfPaymentSuccessTimesAnalytics({
            productIdentifier: result.product_id,
            transactionId: result.transaction_id,
            price: membershipSelected.promoPrice ?? membershipSelected.price,
            currency: membershipSelected.currency.currencyCode,
          });
        }
      } else {
        dispatch(setShowGuestPurchaseSuccess(true));
        setIsVisible(false);
        setIsBtnEnable(true);
        navigation.goBack();
      }
      clearTimeout(pendingTimeoutRef.current);
    } else if (result.transaction_status_string === "FAILED") {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else {
      console.log("order still in progress");
      dispatch(setShowPurchasePending(true));
      navigation.goBack();
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? "",
      product_id: membershipSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      zf_channel: "GOOGLE_PAY",
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
      purchase_token: currentPurchase?.purchaseToken,
      package_name_android: currentPurchase?.packageNameAndroid,
    };
    console.log("iap json posted: ", iapTrans);

    if (currentPurchase && currentPurchase.transactionId) {
      AppsFlyerAnalytics.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await ProductApi.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
      console.log("error when validate iap: ", error);
      return false;
    }
  };

  const saveFinishSubs = async (sub: Purchase) => {
    const subsTrans = {
      product_id: membershipSelected?.productId,
      payment_channel: "GOOGLE_PAY",
      autoRenewingAndroid: sub.autoRenewingAndroid,
      dataAndroid: sub.dataAndroid,
      developerPayloadAndroid: sub.developerPayloadAndroid,
      isAcknowledgedAndroid: sub.isAcknowledgedAndroid,
      obfuscatedAccountIdAndroid: sub.obfuscatedAccountIdAndroid,
      obfuscatedProfileIdAndroid: sub.obfuscatedProfileIdAndroid,
      packageNameAndroid: sub.packageNameAndroid,
      productId: sub.productId,
      productIds: sub.productIds,
      purchaseStateAndroid: sub.purchaseStateAndroid,
      purchaseToken: sub.purchaseToken,
      signatureAndroid: sub.signatureAndroid,
      transactionDate: sub.transactionDate,
      transactionId: sub.transactionId,
      transactionReceipt: sub.transactionReceipt,
    };
    console.log("subs json posted: ", subsTrans);

    if (currentPurchase && currentPurchase.transactionId) {
      AppsFlyerAnalytics.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await ProductApi.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
      console.log("post android subscription error: ", err);
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
      if (currentPurchase) {
        console.log("-------Current Purchase------------");
        console.log(currentPurchase);
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

        try {
          if (currentPurchase.transactionReceipt) {
            const key = currentPurchase.transactionId?.concat("true");
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

            if (receiptBuffer.has(key)) {
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });
              setIsVisible(false);
              setIsBtnEnable(true);
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

            const success = isIAP
              ? await saveFinishIAP("1", "")
              : await saveFinishSubs(currentPurchase); //validate receipt with server

            setReceiptBuffer((prev) => {
              const receipt = new Map(prev);
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );
              return receipt;
            });

            if (success) {
              console.log("success ", success);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

              handleRefresh();

              if (userState.user?.isLogin()) {
                // if( userState.user?.isVip())
                // {    dispatch(changeScreenAction(successDialogText[0]));
                // }
                // else
                // {
                //   dispatch(changeScreenAction(successDialogText[0]+ ',' + successDialogText[1]));
                // }
                dispatch(changeScreenAction(successDialogText[0]));
                setDialogText(successDialogText);
                setIsDialogOpen(true);
                setIsSuccess(true);
                navigation.goBack();
              } else {
                dispatch(setShowGuestPurchaseSuccess(true));
                setIsVisible(false);
                setIsBtnEnable(true);
                navigation.goBack();
              }
            } else {
              console.log("success", success);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

              setDialogText(failedDialogText);
              setIsDialogOpen(true);
              setIsSuccess(false);
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

  // const webViewref = useRef<any>();
  // useEffect(() => {
  //   if (webViewref.current) {
  //     webViewref.current.reload();
  //   }
  // }, [userState.user?.userToken]);

  // const onLoadEnd = () => {
  //   webViewref.current.postMessage(`${userState.user?.userToken}`);
  //   setIsLoading(false);
  // };

  const renderCarousel = ({ item, index }) => {
    function setShowBecomeVIPOverlay(arg0: boolean) {
      throw new Error("Function not implemented.");
    }

    return (
      <>
        {index === screenState.showEventSplashData.length - 1 ||
          screenState.showEventSplash == false ||
          isLastShown ||
          screenState.showEventSplashData.length == 0 ? (
          <ScreenContainer
            footer={
              <>
                {membershipSelected && !fetching && !isOffline && (
                  <View style={{ ...styles.summaryContainer }}>
                    <TouchableOpacity
                      onPress={handlePurchase}
                      disabled={!isBtnEnable}
                    >
                      <LinearGradient
                        colors={["#D1AC7D", "#B1885F"]}
                        locations={[0.0, 0.99]}
                        style={{
                          height: 40,
                          marginHorizontal: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingVertical: 8,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={styles.btnText}>
                          立即解锁{" "}
                          {membershipSelected &&
                            `- 总额${membershipSelected.promoPriceStr}`}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                )}
              </>
            }
            containerStyle={{
              paddingLeft: -spacing.sideOffset,
              paddingRight: -spacing.sideOffset,
            }}
          >
            <VipDialog
              isDialogOpen={isDialogOpen}
              isOffline={isOffline}
              isSuccess={isSuccess}
              handleConfirm={handleConfirm}
              dialogText={dialogText}
            />

            {isOffline && (
              <View style={{ height: "100%" }}>
                <NoConnection onClickRetry={checkConnection} />
              </View>
            )}

            {fetching && !isOffline && (
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

            {/* {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: 'https://www.yingshi.tv/vip' }}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: { nativeEvent: { data?: string } }) => {
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle={{
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
        )} */}

            {!fetching && !isOffline && (
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex:
                      UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID
                        ? 2.2
                        : IS_IOS
                          ? 1.5
                          : 1,
                    overflow: "hidden",
                  }}
                >
                  {/* return button  */}
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      left: 15,
                      top: 20,
                      zIndex: 200,
                    }}
                    onPress={() => {
                      if (
                        !userState.user?.isLogin() &&
                        userState.user?.isVip()
                      ) {
                        navigation.goBack();
                      } else {
                        if (screenState.isHomeGuideShown == true) {
                          dispatch(setShowPromotionDialog(true));
                        }
                        navigation.goBack();
                      }
                    }}
                  >
                    <CloseButton />
                  </TouchableOpacity>
                  <Video
                    source={require("@static/images/splash/bg.mp4")}
                    style={styles.video}
                    resizeMode="cover"
                    repeat={true}
                  />
                  <LinearGradient
                    colors={[
                      "rgba(20, 22, 26, 0)",
                      "rgba(20, 22, 26, 0.27912)",
                      "rgba(20, 22, 26, 0.9)",
                      "#14161A",
                    ]}
                    locations={[0, 0.206, 0.3967, 0.8086]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{
                      flex: 1,
                    }}
                  />

                  <View
                    style={{
                      position: "absolute",
                      paddingHorizontal: 15,
                      paddingBottom: 10,
                      bottom: 0,
                      gap: 15,
                    }}
                  >
                    <FastImage
                      source={require("./../../../static/images/splash/card.png")}
                      style={{
                        width: "100%",
                        aspectRatio: 16 / 9,
                      }}
                      resizeMode="contain"
                    />

                    {/* oneTimeProducts / single purchase  */}
                    {oneTimeProducts && oneTimeProducts.length > 0 && (
                      <View
                        style={{
                          paddingHorizontal: 10,
                          gap: 15,
                        }}
                      >
                        <Text style={styles.countdownLabel}>单次购买</Text>
                        <View
                          style={{
                            gap: 15,
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          {oneTimeProducts.map((product, i) => (
                            <TouchableOpacity
                              key={product.productId}
                              style={{
                                flex: 1,
                                height: 70,
                                overflow: "hidden",
                                borderRadius: 8,
                                borderWidth:
                                  membershipSelected === product ? 2 : 0,
                                borderColor:
                                  membershipSelected === product
                                    ? i === 0
                                      ? "#AE845B"
                                      : "#fff"
                                    : "transparent",
                              }}
                              onPress={() => {
                                setSelectedMembership(product);
                              }}
                            >
                              <LinearGradient
                                colors={
                                  i === 0
                                    ? ["#FCF6F2", "#FCF6F2"]
                                    : ["#D1AC7D", "#B1885F"]
                                }
                                locations={[0.0, 0.99]}
                                style={{
                                  flex: 1,
                                  paddingTop: 10,
                                  paddingHorizontal: 10,
                                }}
                              >
                                {membershipSelected === product && (
                                  <View
                                    style={{
                                      position: "absolute",
                                      right: 5,
                                      top: 5,
                                    }}
                                  >
                                    {i === 0 && (
                                      <Tick1 width={18} height={18} />
                                    )}

                                    {i === 1 && (
                                      <Tick2 width={18} height={18} />
                                    )}
                                  </View>
                                )}
                                <View
                                  style={{
                                    justifyContent: "space-between",
                                    gap: 5,
                                  }}
                                >
                                  <View>
                                    <Text
                                      style={{
                                        color: i === 0 ? "#351B04" : "#fff",
                                        fontSize: 12,
                                      }}
                                    >
                                      {product.title === "1个月"
                                        ? "月度套餐"
                                        : "年度套餐"}
                                    </Text>
                                  </View>

                                  <View
                                    style={{
                                      justifyContent: "space-between",
                                      flexDirection: "row",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        color: i === 0 ? "#351B04" : "#fff",
                                        fontSize: 14,
                                        fontWeight: "700",
                                      }}
                                    >
                                      {product.title}
                                    </Text>
                                    <Text
                                      style={{
                                        color: i === 0 ? "#AE845B" : "#fff",
                                        fontSize: 19,
                                        fontWeight: "900",
                                      }}
                                    >
                                      {product.localizedPrice}
                                    </Text>
                                  </View>
                                </View>
                              </LinearGradient>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    )}

                    {/* countdown container */}
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        paddingHorizontal: 10,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          gap: 12,
                          flexDirection: "row",
                        }}
                      >
                        <Text style={styles.countdownLabel}>限时优惠</Text>
                        <View style={styles.countdownContainer}>
                          {remainingTimeAry.map((val, i) => {
                            return (
                              <View
                                key={i}
                                style={{
                                  flexDirection: "row",
                                  gap: 5,
                                }}
                              >
                                <View
                                  style={{
                                    backgroundColor: "#F4DBBA",
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 20,
                                    height: 20,
                                  }}
                                >
                                  <Text style={styles.countdownText}>
                                    {val}
                                  </Text>
                                </View>
                                {i % 2 === 1 &&
                                  i < remainingTimeAry.length - 1 && (
                                    <Text
                                      style={{
                                        ...styles.countdownText,
                                        padding: 1,
                                        color: "#F4DBBA",
                                      }}
                                    >
                                      :
                                    </Text>
                                  )}
                              </View>
                            );
                          })}
                        </View>
                      </View>

                      {User.isVip(userState.user) && (
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("VIP明细", {
                              userState: userState.user!,
                            });
                          }}
                        >
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: "#9c9c9c",
                            }}
                          >
                            VIP明细
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>

                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleRefresh}
                      tintColor="#FAC33D"
                    />
                  }
                  ref={scrollRef}
                  style={{
                    flex: 1,
                    marginRight: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  <VipCard
                    userState={userState.user!}
                    membershipProduct={membershipProducts}
                    selectedMembership={membershipSelected}
                    onMembershipSelect={setSelectedMembership}
                    zfOptions={zfOptions}
                    selectedZf={zfSelected}
                    onZfSelect={setSelectedZf}
                    isRefreshing={refreshing}
                  />
                </ScrollView>

                <View style={styles.tncContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("隐私政策");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      隐私协议{" "}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    |{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("用户协议");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      用户服务协议{" "}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    |{" "}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("续费服务");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      自动续费协议{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tncContainer}>
                  <TouchableOpacity onPress={openEmailApp}>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    {"如遇支付问题，请联系"}
                    <Text  style={{ textDecorationLine: "underline" }}>
                      contact.movie9@gmail.com
                    </Text>
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* {IS_IOS ? (
          <View style={{ ...styles.footerContainer }}>
            <Text style={{ ...textVariants.small }}>
              活动由此APP公司提供 与苹果公司Apple.Inc 无关
            </Text>
          </View>
        ) : null} */}
          </ScreenContainer>
        ) : (
          <SplashCard
            index={index}
            source={
              index === 0
                ? require(`@static/images/eventSplash1.png`)
                : index === 1
                  ? require(`@static/images/eventSplash2.png`)
                  : require(`@static/images/eventSplash3.png`)
            }
            isLast={index === screenState.showEventSplashData.length - 1}
          />
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Carousel
        autoPlay={false}
        ref={carouselRef}
        width={width}
        height={height}
        data={screenState.showEventSplashData}
        scrollAnimationDuration={100}
        onScrollBegin={() => { }}
        enabled={screenState.showEventSplash !== false}
        loop={false}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === screenState.showEventSplashData.length - 1) {
            setIsLastShown(true);

            dispatch(setShowEventSplash(false));
            dispatch(setEventSplashLastPageViewTime());
            // dispatch(
            //   setShowEventSplashData([
            //     {
            //       created_at: "",
            //       intro_page_id: 1,
            //       intro_page_image_url: "/upload/vod/111.jpeg",
            //       intro_page_name: "首页1",
            //       url: "https://yingshi.tv/upload/vod/111.jpeg",
            //     },
            //   ])
            // );
          }
        }}
        onScrollEnd={(index) => {
          setActiveIndex(index);
          if (index === screenState.showEventSplashData.length - 1) {
            setIsLastShown(true);
            dispatch(setShowEventSplash(false));
            dispatch(setEventSplashLastPageViewTime());
            // dispatch(
            //   setShowEventSplashData([
            //     {
            //       created_at: "",
            //       intro_page_id: 1,
            //       intro_page_image_url: "/upload/vod/111.jpeg",
            //       intro_page_name: "首页1",
            //       url: "https://yingshi.tv/upload/vod/111.jpeg",
            //     },
            //   ])
            // );
          }
        }}
        renderItem={renderCarousel}
      />
      {/* ||
        screenState.showEventSplash == true */}
      {activeIndex !== screenState.showEventSplashData.length - 1 &&
        screenState.showEventSplashData.length != 0 &&
        screenState.showEventSplashData &&
        isLastShown != true &&
        screenState.showEventSplash == true && (
          <CarouselPagination
            data={screenState.showEventSplashData}
            dashStyle={true}
            activeIndex={activeIndex}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "black",
  },
  countdownLabel: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "#D3AC7B",
    textAlignVertical: "center",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    marginBottom: 25,
    position: "relative",
  },
  tncContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 5,
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
  countdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#1D2023",
    fontSize: 14,
    fontFamily: "Archivo-Regular",
    fontWeight: "900",
    lineHeight: 15,
  },
  video: {
    position: "absolute", // Position the video absolutely within the container
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    right: 0, // Align the video to the right of the container
    bottom: 0, // Align the video to the bottom of the container
  },
});
