import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DiscoveryActionIcon1 from "../../assets/images/discovery_action_1.svg";
import DiscoveryActionIcon2 from "../../assets/images/discovery_action_2.svg";
import DiscoveryActionIcon3 from "../../assets/images/discovery_action_3.svg";
import DiscoveryActionIcon4 from "../../assets/images/discovery_action_4.svg";
import { spacing } from "../../const/layout";
import FastImage from "react-native-fast-image";
import { Divider } from "@rneui/themed";

interface ProfileSignInUpProps {
}

export default function ProfileSignInUpView({}: ProfileSignInUpProps) {
  return <View style={styles.container}>
    <FastImage 
      style={{width: 45, height: 45, borderRadius: 22.5, overflow: "hidden"}} 
      resizeMode="cover"
      source={require("../../assets/images/profile_avatar.png")}
    />
    <View style={{gap: 10, flexDirection: "row", alignItems: "center"}}>
      <Text style={styles.actionText}>登录</Text>
      <View style={{width:1, height: 15, backgroundColor: '#d9d9d9'}}/>
      <Text style={styles.actionText}>注册</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sideOffset,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "center",
    gap: 20,
  },
  actionText: {
    color: "#000000",
    fontSize: 17,
    fontWeight: '800',
  },
  
});