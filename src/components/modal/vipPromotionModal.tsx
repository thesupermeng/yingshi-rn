import React, { useEffect, ReactNode, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import FastImage from "../common/customFastImage";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/hooks";
import { BackgroundType } from "@redux/reducers/backgroundReducer";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/constants";

interface Props {
  coverImage: any;
  coverBackground: any;
  onClose: any;
  onPurchase: any;
  showCondition: boolean;
}

export default function VipPromotionModal({
  coverImage,
  coverBackground,
  onClose,
  onPurchase,
  showCondition,
}: Props) {
  const backgroundState = useSelector<BackgroundType>('backgroundReducer');
  const [countdownSecond, setCountdownSecond] = useState(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor(countdownSecond / 60 % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, '0')[0],
    String(hours).padStart(2, '0')[1],
    String(minute).padStart(2, '0')[0],
    String(minute).padStart(2, '0')[1],
    String(second).padStart(2, '0')[0],
    String(second).padStart(2, '0')[1],
  ];

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownSecond(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: isFullscreen ? [{ scale: 0.75 }] : []
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            colors={['#4A3E2A', '#231D14', '#1A1712', '#191612']}
            locations={[0, 0.29, 0.63, 1]}
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    ...styles.titleText
                  }}>
                  限时订阅优惠
                </Text>
                <View style={styles.countdownContainer}>
                  {remainingTimeAry.map((val, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#FA3E3E',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            paddingTop: 5,
                            paddingBottom: 3,
                          }}
                        >
                          <Text style={styles.countdownText}>
                            {val}
                          </Text>

                        </View>
                        {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#FA3E3E' }}>
                            :
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
              <Text style={styles.contentText1}>
                限时优惠，立即升级会员可享受最低4折优惠，先到先得！已有99.5%用户抢先购买，解锁了更多影视权益。您确定要错过这个升级体验的最好机会吗？
              </Text>
              <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Text style={{ ...styles.contentText2, color: '#FA3E3E' }}>{backgroundState.vipPromotionPurchaseNum}人</Text>购买
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 24,
                gap: 6,
              }}>
              <TouchableOpacity
                onPress={onPurchase}
              >
                <LinearGradient
                  colors={['#D1AC7D', '#B1885F']}
                  locations={[0.0, 0.99]}
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    继续抢购
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  放弃机会
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View >
      </View >
    );

  return <></>;
}

const styles = StyleSheet.create({
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
  titleText: {
    textAlign: 'center',
    color: '#F4DBBA',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    fontWeight: '800',
    lineHeight: 15,
  },
  contentText1: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'white',
  },
  contentText2: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FFEFDA',
  },
  image1: {
    position: "absolute",
    bottom: -30,
    width: 148,
    height: 156,
  },
  image2: {
    position: "absolute",
    top: 0,
    width: '100%',
    aspectRatio: 1208 / 496,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
