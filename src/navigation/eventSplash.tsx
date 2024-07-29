import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import SplashCard from "./../../src/components/common/splashCard";
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../components/container/CarouselPagination";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/customFastImage";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/membershipType";
import { ProductApi } from "../api/product";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/SpinnerOverlay";
import { RootState } from "@redux/store";
import { useAppSelector, useSelector } from "@hooks/hooks";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/constants";
import { showToast } from "../Sports/utility/toast";
import { UserStateType } from "@redux/reducers/userReducer";

interface Props {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: Props) => {
  const {
    connected,
    products,
    currentPurchase,
    finishTransaction,
    getProducts,
    getSubscriptions,
    subscriptions,
  } = useIAP();
  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);

  const [oneTimeProducts, setOneTimeProducts] = useState<promoMembershipModel[]>([]);
  const [subscriptionProducts, setSubcriptionProducts] = useState<promoMembershipModel[]>([]);
  const [productSelected, setSelectedProduct] = useState<promoMembershipModel>(
    subscriptionProducts[0]
  );
  const [isFetching, setIsFetching] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());
  const userState = useSelector<UserStateType>('userReducer');

  const fetchData = async () => {
    const data = await ProductApi.getNativeList();
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
          promoPriceStr: product.currency.currency_symbol + " " + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "google.png"
          },
          productType: IAP_TYPE,
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
            product.currency.currency_symbol + (product.product_name === '1个月' ? product.product_price : product.fake_price),
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "google.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

      setOneTimeProducts(oneTime);
      setSubcriptionProducts(subscription);
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
    setIsBtnEnable(false);
    try {
      setIsVisible(true);
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

        if (subs) {
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {
      setIsVisible(false);
      if (err instanceof PurchaseError) {
        console.error("purchasing error: " + err);
      } else {
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {
        console.log("user cancel purchase");
        setIsBtnEnable(true);
      } else {
        // setDialogText(failedDialogText);
        // setIsDialogOpen(true);
        showToast('fail to pay: ' + err);
      }
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? '',
      product_id: productSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      zf_channel: 'GOOGLE_PAY',
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
    };
    console.log("iap json posted: ", iapTrans);

    // addLocalTrans(trans);

    const result = await ProductApi.postValidateReceipt(iapTrans);

    console.log("validate iap result");
    console.log(result);
    return result.data.data;
  };

  const saveFinishSubs = async (sub: Purchase) => {
    const subsTrans = {
      product_id: productSelected?.productId,
      payment_channel: 'GOOGLE_PAY',
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

    try {
      const result = await ProductApi.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
      console.log('post android subscription error: ', err);
      return false;
    }
  }

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));
    setHeight(Number(Dimensions.get("window").height));
    fetchData();
  }, []);

  useEffect(() => {
    if (connected) {
      handleGetGoogleProduct();
    }
  }, [connected]);

  useEffect(() => {
    if (subscriptionProducts) {
      const defaultProduct = subscriptionProducts.find(
        (subscription) => subscription.title === '1个月'
      );

      defaultProduct && setSelectedProduct(defaultProduct);
    }
  }, [subscriptionProducts]);

  useEffect(() => {
    const checkCurrentPurchase = async () => {
      if (currentPurchase) {
        console.log("-------Current Purchase------------");
        console.log(currentPurchase);
        console.log(products.some(product => product.productId === currentPurchase.productId))

        try {
          if (currentPurchase.transactionReceipt) {
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
            }

            setTimeout(() => setIsVisible(false), 10000);

            const isIAP = products.some(product => product.productId === currentPurchase.productId)
            const success = isIAP ?
              await saveFinishIAP("1", "") :
              await saveFinishSubs(currentPurchase); //validate receipt with server

            setReceiptBuffer((prev) => {
              const receipt = new Map(prev);
              receipt.set(currentPurchase.transactionId?.concat(success), success);
              return receipt;
            });

            if (success) {
              console.log('success ', success)
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

              showToast('successfully validate and finish the transaction');
              // setDialogText(successDialogText)
              // setIsDialogOpen(true);
              // setIsSuccess(true);
            } else {
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

              showToast('FAILED to validate and finish the transaction');
              // setDialogText(failedDialogText)
              // setIsDialogOpen(true);
              // setIsSuccess(false);
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

  const renderCarousel = ({ item, index }) => {
    return (
      <>
        {index === splashList.length - 1 ? (
          <>
            {/* <ImageBackground
              source={require("./../../static/images/splash/splashbg.png")}
              resizeMode="cover"
              style={{ flex: 1, height: 400 }}
            > */}
            <View style={styles.container}>
              <SpinnerOverlay visible={isVisible} />
              <Video
                source={{
                  // uri: 'https://oss.yingshi.tv/videos/vod/vi/splashbg.mp4',
                  uri:
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                }}
                onError={(e) => {
                  console.log("jhidhhaj");
                  console.log(e);
                }}
                style={styles.video}
                resizeMode="cover"
                repeat={true}
              />
              <LinearGradient
                colors={["rgba(20, 22, 26, 0)", "#14161A"]} // Transparent to #14161A
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.4 }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingTop: 60,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: -40,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 200,
                      paddingHorizontal: 40,
                      zIndex: 20,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/splashText.png")}
                      style={{
                        flex: 1,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      height: 200,
                      zIndex: 1,
                      position: "relative",
                      bottom: 65,
                      paddingHorizontal: 30,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/card.png")}
                      style={{
                        flex: 1,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      position: "relative",
                      bottom: 70,
                      justifyContent: "flex-start",
                      paddingLeft: 35,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/subText.png")}
                      style={{
                        width: 80,
                        height: 80,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  {oneTimeProducts && (
                    <View
                      style={{
                        position: "relative",
                        bottom: 70,
                        paddingHorizontal: 35,
                        flexDirection: "row",
                        width: "100%",
                        maxWidth: "100%",
                        gap: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      {oneTimeProducts.map((product, i) => (
                        <TouchableOpacity
                          key={product.productId}
                          onPress={() => {
                            setSelectedProduct(product);
                          }}
                        >
                          <ImageBackground
                            source={i === 0 ?
                              require("./../../static/images/splash/singleBg.png") :
                              require("./../../static/images/splash/singleBg2.png")
                            }
                            resizeMode="contain"
                            style={{
                              height: 100,
                              width: 160,
                              paddingTop: 25,
                              paddingHorizontal: 10,
                            }}
                          >
                            <View style={{ justifyContent: "space-between", gap: 5 }}>
                              <View>
                                <Text
                                  style={{
                                    color: i === 0 ? "#351B04" : '#fff',
                                    fontSize: 12
                                  }}>
                                  {product.title === '1个月' ? '月度套餐' : '年度套餐'}
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
                                    color: i === 0 ? "#351B04" : '#fff',
                                    fontSize: 14,
                                    fontWeight: "700",
                                  }}
                                >
                                  {product.title}
                                </Text>
                                <Text
                                  style={{
                                    color: i === 0 ? "#AE845B" : '#fff',
                                    fontSize: 19,
                                    fontWeight: "900",
                                  }}
                                >
                                  {product.localizedPrice}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}

                  {/* time  countdown */}
                  <View
                    style={{
                      position: "relative",
                      bottom: 20,
                      width: "100%",
                      paddingLeft: 40,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ width: 120, marginRight: 5 }}>
                      <FastImage
                        source={require("./../../static/images/splash/subText2.png")}
                        style={{
                          flex: 1,
                          position: "relative",
                          top: 3,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                    </View>

                    <View style={styles.badgeContainer}>
                      <View style={{ ...styles.badge }}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>

                      <View style={styles.badge2}>
                        <Text style={styles.badgeText2}>:</Text>
                      </View>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>

                      <View style={styles.badge2}>
                        <Text style={styles.badgeText2}>:</Text>
                      </View>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>0</Text>
                      </View>
                    </View>
                  </View>
                  {/* product card  */}
                  {subscriptionProducts && (
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                      {subscriptionProducts.map((subscription, i) => (
                        <TouchableOpacity
                          key={subscription.productId}
                          style={
                            productSelected == subscription
                              ? styles.cardContainerActive
                              : styles.cardContainer
                          }
                          onPress={() => {
                            setSelectedProduct(subscription);
                          }}
                        >
                          <View>
                            <View
                              style={{
                                ...styles.redIndicator,
                                opacity: productSelected == subscription ? 1 : 0, // change to index 0
                              }}
                            >
                              <Text style={styles.hotText}>最多人选择</Text>
                            </View>

                            <View style={styles.textContainer}>
                              <Text style={styles.promo}>{subscription.title}</Text>
                              <Text style={styles.promo2}>{subscription.promoPriceStr}</Text>
                              <Text style={styles.promo3}>{subscription.localizedPrice}</Text>
                            </View>
                          </View>
                          <View
                            style={
                              productSelected == subscription
                                ? styles.buttonActive
                                : styles.button
                            }
                          >
                            <Text
                              style={
                                productSelected == subscription
                                  ? styles.buttonTextActive
                                  : styles.buttonText
                              }
                            >
                              {subscription.description}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  {/* purchase button  */}
                  <View style={{ paddingHorizontal: 30, width: "100%" }}>
                    <TouchableOpacity
                      onPress={onPurchase}
                    >
                      <LinearGradient
                        colors={['#D1AC7D', '#B1885F']}
                        locations={[0.0, 0.99]}
                        style={{
                          height: 40,
                          marginBottom: 25,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingVertical: 8,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={styles.purchaseText}>
                          立即解锁 {productSelected && `- 总额${productSelected.promoPriceStr}`}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    {/* <View
                      style={{
                        backgroundColor: "#FAC33D",
                        height: 40,
                        marginBottom: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 8,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={styles.purchaseText}>立即解锁</Text>
                    </View> */}
                  </View>


                </View>
              </LinearGradient>
            </View>
            {/* </ImageBackground> */}
          </>
        ) : (
          <>
            <SplashCard
              index={index}
              source={require(`@static/images/eventSplash${index + 1}.png`)}
              isLast={index === splashList.length - 1}
            />
          </>
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        autoPlay={false}
        ref={carouselRef}
        loop
        width={width}
        height={height}
        data={splashList}
        scrollAnimationDuration={100}
        onScrollBegin={() => { }}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        onScrollEnd={(index) => {
          setActiveIndex(index);
        }}
        renderItem={renderCarousel}
      />

      {activeIndex !== splashList.length - 1 && (
        <CarouselPagination
          data={splashList}
          dashStyle={true}
          activeIndex={activeIndex}
        />
      )}

      {/* <FlatList
          data={splashList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}: any) => {
            return (
              <SplashCard
              index={index}
                img={item.url}
                isLast={index === (splashList.length-1)}
              />
            );
          }}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
  },
  timeText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontWeight: "900",
    fontSize: 18,
    position: "relative",
    bottom: 3,
  },
  badge: {
    backgroundColor: "#F4DBBA", // Background color of the badge
    borderRadius: 6, // Adjust the value to change the border radius
    paddingHorizontal: 8, // Adjust the padding as needed
    paddingVertical: 2, // Adjust the padding as needed
    marginRight: 3, // Adjust the margin to create a gap between badges
  },
  badgeText: {
    color: "#000", // Text color of the badge
    fontWeight: "bold", // Adjust font weight as needed
    fontSize: 14,
  },
  badgeText2: {
    color: "#F4DBBA", // Text color of the badge
    fontWeight: "bold", // Adjust font weight as needed
    fontSize: 14,
  },
  badge2: {
    backgroundColor: "transparent", // Background color of the badge
    paddingHorizontal: 4, // Adjust the padding as needed
    paddingVertical: 4, // Adjust the padding as needed
    marginRight: 3, // Adjust the margin to create a gap between badges
  },
  //bottom card part
  scrollViewContent: {
    paddingHorizontal: 30,
    flexDirection: "row",
    gap: 15,
    position: "relative",
    paddingTop: 35,
  },
  cardContainerActive: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F4DBBA",
    backgroundColor: "#333333",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: 120,
    height: 180,
  },
  redIndicator: {
    width: 100,
    height: 20,
    backgroundColor: "#FA3E3E",
    paddingLeft: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    // position: "relative",
    // bottom: 1,
    // right: 1,
  },
  textContainer: {
    padding: 16,
  },
  promo: {
    textAlign: "center",
    marginBottom: 4,
    color: "#fff",
    fontSize: 16,
  },
  promo2: {
    textAlign: "center",
    marginBottom: 4,
    fontWeight: "900",
    fontSize: 17,
    color: "#F4DBBA",
    paddingTop: 10,
  },
  promo3: {
    textAlign: "center",
    marginBottom: 4,
    color: "#9C9C9C",
    textDecorationLine: "line-through",
    fontSize: 16,
  },
  buttonActive: {
    backgroundColor: "#F4DBBA",
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonTextActive: {
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
  },
  hotText: {
    color: "#fff",
    fontWeight: "900",
  },
  purchaseText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
  },
  cardContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#242529",
    backgroundColor: "#242529",
    flexDirection: "column",
    alignItems: "stretch",
    width: 120,
    height: 180,
  },
  button: {
    backgroundColor: "#393939", //change to grey , follow figma
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingTop: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 10,
  },
});
