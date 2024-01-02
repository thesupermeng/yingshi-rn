import React, { useEffect, ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EighteenPlusIcon from "@static/images/eighteen-plus-icon.svg";
import { screenModel } from "@type/screenType";
import { useAppSelector } from "@hooks/hooks";
import { BlurView } from "../blurView";
import FastImage from "../common/customFastImage";
import VipIcon from "@static/images/vip_icon.svg";
import LinearGradient from "react-native-linear-gradient";
import CloseButton from "@static/images/close.svg";
import { SHOW_ZF_CONST } from "@utility/constants";
import { YSConfig } from "../../../ysConfig";

const adultModels = require("@static/images/vip_adult_models.png");
const adultBg = require("@static/images/vip_adult_background.png");

interface Props {
  coverImage: any;
  coverBackground: any;
  showBlur: boolean;
  benefitsTextsArray: string[];
  titleText: string;
  imageGradientColors: string[];
  contentGradientColors: string[];
  onClose: any;
  onPurchase: any;
  onInvite: any;
  showCondition: boolean;
}

export default function VipPrivilegeModal({
  showBlur = false,
  benefitsTextsArray,
  coverImage,
  coverBackground,
  titleText,
  imageGradientColors = ["#FF9AD000", "#EB59A7"],
  contentGradientColors = ["#EA58A7", "#DE2575"],
  onClose,
  onPurchase,
  onInvite,
  showCondition,
}: Props) {
  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          // backgroundColor: '#ff00ff80',
        }}
      >
        {showBlur && (
          <BlurView
            blurType="dark"
            blurAmount={3}
            style={{
              flex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              // borderRadius: showBlur ? 15 : 0,
            }}
          />
        )}
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            marginBottom: "-20%",
          }}
        >
          <View
            style={{
              position: "relative",
              alignItems: "center",
              gap: 5,
              padding: 15,
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: "-50%",
                right: 15,
                zIndex: 200,
              }}
              onPress={onClose}
            >
              <CloseButton />
            </TouchableOpacity>
            <View>
              <View style={styles.imageContainer}>
                <FastImage
                  source={coverBackground ?? adultBg}
                  style={styles.image}
                  resizeMode="cover"
                />
                <FastImage
                  source={coverImage ?? adultModels}
                  style={styles.image}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={imageGradientColors}
                  angle={180}
                  style={styles.imageGradient}
                />
              </View>
              <View style={styles.contentContainer}>
                <View style={styles.contentGradient}>
                  <LinearGradient
                    colors={contentGradientColors}
                    angle={180}
                    style={{ height: "100%" }}
                  />
                </View>
                <View style={styles.content}>
                  <VipIcon />
                  <View>
                    <Text style={styles.titleText}>{titleText}</Text>
                    {benefitsTextsArray.map((text, index) => (
                      <Text key={text + index} style={styles.benefitsText}>
                        • {text}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.buttonContainer}>
                    {SHOW_ZF_CONST && (
                      <TouchableOpacity
                        style={styles.purchaseButton}
                        onPress={onPurchase}
                      >
                        <Text style={styles.purchaseButtonText}>
                          {YSConfig.instance.showBecomeVip
                            ? "立即成为VIP会员 →"
                            : "付费购买VIP会员 →"}
                        </Text>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.inviteButton}
                      onPress={onInvite}
                    >
                      <Text style={styles.inviteButtonText}>
                        邀请好友免费得VIP会员 →
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  purchaseButton: {
    backgroundColor: "#FAC33D",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 25,
  },
  inviteButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
  },
  inviteButtonText: {
    color: "#FAC33D",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 25,
  },
  benefitsText: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 24,
    fontFamily: "PingFang SC",
  },
  buttonContainer: {
    gap: 10,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 25,
    color: "#FFFFFF",
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "045-SSYiFeiTi",
  },
  content: {
    display: "flex",
    alignItems: "center",
    top: "-20%",
    position: "absolute",
    width: "100%",
  },
  imageContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: 322,
  },
  imageGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 76,
  },
  image: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  contentGradient: {
    overflow: "hidden",
    height: 280,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  contentContainer: {},
});
