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
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import { PurchaseError, requestPurchase, useIAP } from "react-native-iap";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useNavigation, useTheme } from "@react-navigation/native";
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
  UMENG_CHANNEL,
} from "@utility/constants";
import { setShowEventSplashData, showLoginAction , setShowEventSplash } from "@redux/actions/screenAction";
import { ProductApi, UserApi } from "@api";
import WebView from "react-native-webview";
import { YSConfig } from "../../../ysConfig";
import { VipCard } from "../../components/vip/vipCard";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/membershipType";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/vipDialog";
import SpinnerOverlay from "../../components/modal/SpinnerOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import UmengAnalytics from "../../../Umeng/UmengAnalytics";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/CarouselPagination";
import { screenModel } from "@type/screenType";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/splashCard";
import Carousel from "react-native-reanimated-carousel";
import LottieView from "lottie-react-native";

export default ({ navigation }: RootStackScreenProps<"付费Google">) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const [oneTimeProducts, setOneTimeProducts] = useState<
    promoMembershipModel[]
  >([]);
  const [subscriptionProducts, setSubcriptionProducts] = useState<
    promoMembershipModel[]
  >([]);
  const [productSelected, setSelectedProduct] = useState<promoMembershipModel>(
    subscriptionProducts[0]
  );
  const [isFetching, setIsFetching] = useState(true);

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
          promoPrice:
            product.currency.currency_symbol +
            " " +
            product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: "GOOGLE_PAY",
        };
      });

      subscription = data.subscription_items.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          promoPrice:
            product.currency.currency_symbol + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol +
            (product.product_name === "1个月"
              ? product.product_price
              : product.fake_price),
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "google.png",
          },
        };
      });

      setOneTimeProducts(oneTime);
      setSubcriptionProducts(subscription);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));
    setHeight(Number(Dimensions.get("window").height));
    fetchData();
  }, []);

  useEffect(() => {
    if (subscriptionProducts) {
      const defaultProduct = subscriptionProducts.find(
        (subscription) => subscription.title === "1个月"
      );

      defaultProduct && setSelectedProduct(defaultProduct);
    }
  }, [subscriptionProducts]);

  const renderCarousel = ({ item, index }) => {
    return (
      <>
        {(index === screenState.showEventSplashData.length - 1  || isLastShown || screenState.showEventSplashData.length ==0  )? (
          <>
            {/* <ImageBackground
              source={require("./../../static/images/splash/splashbg.png")}
              resizeMode="cover"
              style={{ flex: 1, height: 400 }}
            > */}
            <View style={styles.container}>
              {/* <Video
                source={{
               //    uri: 'https://oss.yingshi.tv/videos/vod/vi/splashbg.mp4',
                  // uri:
                   // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                }}
                onError={(e) => {
                  console.log("jhidhhaj");
                  console.log(e);
                }}
                style={styles.video}
                resizeMode="cover"
                repeat={true}
              /> */}
              {/* <LottieView
                style={styles.video}
                source={{
                  uri:
                    "https://lottie.host/c291f0cc-ae75-4f88-b6a8-61fefe455da5/trOs1RgYsK.json",
                }}
                autoPlay
                loop
              /> */}
              <LinearGradient
                colors={["rgba(20, 22, 26, 0)", "#14161A"]} // Transparent to #14161A
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.4 }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingTop: 40,
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
                      source={require("./../../../static/images/splash/splashText.png")}
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
                      bottom: 70,
                      paddingHorizontal: 30,
                    }}
                  >
                    <FastImage
                      source={require("./../../../static/images/splash/card.png")}
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
                      source={require("./../../../static/images/splash/subText.png")}
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
    style={
      productSelected == product
        ? styles.cardContainerActive2
        : styles.cardContainer2
    }
    onPress={() => {
      setSelectedProduct(product);
    }}
  >

{/* style={{
                            height: 100,
                            width: 160,
                            paddingTop: 25,
                            paddingHorizontal: 10, */}
               <LinearGradient
                        colors= {i === 0 ? ["#FCF6F2", "#FCF6F2"] : ["#D1AC7D", "#B1885F"]}
                        locations={[0.0, 0.99]}
                        style={{
                          marginTop:20,
                          height: 70,
                          width: 160,
                          paddingTop: 10,
                          paddingHorizontal: 10,
                        
                        }}
                      >
                          <View
                            style={{ justifyContent: "space-between", gap: 5 }}
                          >
                            <View>
                              <Text
                                style={{
                                  color: i === 0 ? "#351B04" : "#fff",
                                  fontSize: 12,
                                }}
                              >
                                {i === 0 ? "月度套餐" : "年度套餐"}
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
                        source={require("./../../../static/images/splash/subText2.png")}
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
                    <ScrollView
                      contentContainerStyle={styles.scrollViewContent}
                    >
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
                                opacity:
                                  i == 0 ? 1 : 0, // change to index 0
                              }}
                            >
                              <Text style={styles.hotText}>最多人选择</Text>
                            </View>

                            <View style={styles.textContainer}>
                              <Text style={styles.promo}>
                                {subscription.title}
                              </Text>
                              <Text style={styles.promo2}>
                                {subscription.promoPrice}
                              </Text>
                              <Text style={styles.promo3}>
                                {subscription.localizedPrice}
                              </Text>
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

                  {/* Privacy & terms and condition link section   */}
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      position: "relative",
                      bottom: 85,
                      height: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("隐私政策");
                      }}
                    >
                      <Text style={styles.textPrivacy}>隐私协议 </Text>
                      </TouchableOpacity>         
                    <Text style={styles.textPrivacy}>| </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("用户协议");
                      }}
                    >
                    <Text style={styles.textPrivacy}>用户服务协议 </Text>

                    </TouchableOpacity>
                    <Text style={styles.textPrivacy}>| </Text>
                  
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("续费服务");
                      }}
                    >

                    <Text style={styles.textPrivacy}>自动续费协议 </Text>
                          </TouchableOpacity>
                  </View>

                  {/* purchase button  */}
                  <View style={{ paddingHorizontal: 30, width: "100%" }}>
                    <TouchableOpacity
                    // onPress={onPurchase}
                    >
                      <LinearGradient
                        colors={["#D1AC7D", "#B1885F"]}
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
                          立即解锁{" "}
                          {productSelected &&
                            `- 总额${productSelected.promoPrice}`}
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
              img={item.url}
              isLast={index === screenState.showEventSplashData.length - 1}
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
        width={width}
        height={height}
        data={screenState.showEventSplashData}
        scrollAnimationDuration={100}
        onScrollBegin={() => {}}
        enabled={isLastShown == false}
        loop={true}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if(index === screenState.showEventSplashData.length - 1)
          {
            setIsLastShown(true)
            dispatch(setShowEventSplash(false));
          }

        }}
        onScrollEnd={(index) => {
          setActiveIndex(index);
          if(index === screenState.showEventSplashData.length - 1)
          {
            setIsLastShown(true)
            dispatch(setShowEventSplash(false));
          }
        }}
        renderItem={renderCarousel}
      />
      {activeIndex !== screenState.showEventSplashData.length - 1 &&
        screenState.showEventSplashData.length != 0 &&
        screenState.showEventSplashData &&
        isLastShown != true && (
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
  container: {
    flex: 1,
    alignItems: "center", // Center the content vertically
    justifyContent: "flex-start", // Start the content from the top
  },
  video: {
    position: "absolute", // Position the video absolutely within the container
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    right: 0, // Align the video to the right of the container
    bottom: 120, // Align the video to the bottom of the container
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
  textPrivacy: {
    color: "#9C9C9C",
  },
  cardContainer2:{},
  cardContainerActive2:{
    borderRadius: 8,
    borderColor:'red',
    borderWidth:2,
}});
