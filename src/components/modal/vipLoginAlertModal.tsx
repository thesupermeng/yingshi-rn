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

export default function VipLoginAlertModal({
 
  onClose,
  onPurchase,
  showCondition,
}: Props) {

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;



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
          <View
           
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
              backgroundColor:'#222222'
            }}
       
          >

<FastImage
                    style={{
                      height: 140,
                      width: 140,
                      position:'absolute',
                      left:'30%',
                      bottom: 270,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/splash/alert.png")}
                  />
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
                paddingTop:50
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
                  登录提醒
                </Text>
             
              </View>
              <Text style={styles.contentText1}>
              尊敬的VIP用户，检测到您购买VIP后未登录账户，为享受更佳的视听体验，请马上登录账户合并您的VIP会员信息，登录后您的VIP将继承至最近1次登录的账户内
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
                <View
                
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    立即登录
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  取消
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor:'#FAC33D',
    marginTop:10
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
   // backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop:8,
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
   // color: '#F4DBBA',
    color:'#fff',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#1D2023',
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
    paddingHorizontal:8
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
