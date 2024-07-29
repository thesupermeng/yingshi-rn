import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileVipDetailIcon from "../../assets/images/profile_pay_detail.svg";
import { spacing } from "../../const/layout";
import FastImage from "react-native-fast-image";

interface ProfilePayVipProps {
}

export default function ProfilePayVipView({}: ProfilePayVipProps) {
  return <View style={styles.container}>
    <View style={styles.actionBox}>
      <View style={styles.actionTitle}>
        <Text style={styles.actionTitleText}>{"尊享会员特权"}</Text>
        {/* <ProfileVipDetailIcon height={20}/> */}
      </View>
      <View style={styles.actionDetail}>
        <FastImage style={styles.actionDetailButton} 
          resizeMode="contain" 
          source={require("../../assets/images/profile_pay_btn.png")}
        />
        <FastImage style={styles.actionDetailTag} 
          resizeMode="contain" 
          source={require("../../assets/images/profile_pay_tag.png")}
        />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sideOffset,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
    gap: 10,
    position: 'relative'
  },
  actionBox: {
    flex: 1,
    height: 65,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 8,
    borderColor: "#E8E0C7",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#FFFFFF"
  },
  actionTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  actionTitleText: {
    color: "#000", // "#98703D",
    fontSize: 17,
    fontWeight: '800',
  },
  actionDetail: {
    position: "relative",
  },
  actionDetailButton: {
    height: 30,
    aspectRatio: 2.55
  },
  actionDetailTag: {
    position: 'absolute',
    top: -11,
    right: -5,
    height: 16,
    aspectRatio: 3.37
  }
});