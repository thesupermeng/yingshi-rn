import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { spacing } from "../../const/layout";

interface MemberRewardProps {
}

export default function MemberRewardView({
}: MemberRewardProps) {
  return (
    <View style={styles.container}>
      <FastImage style={styles.box} resizeMode="cover" source={require("../../assets/images/member_gif.png")}/>
      <View style={styles.box}>
        <FastImage style={styles.boxItem} resizeMode="cover" source={require("../../assets/images/member_shake.png")}/>
        <FastImage style={styles.boxItem} resizeMode="cover" source={require("../../assets/images/member_download.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: "#f2f5fa",
    gap: 10,
    paddingTop: 20,
    paddingLeft: spacing.sideOffset,
    paddingRight: spacing.sideOffset,
  },
  
  box: {
    width: "48%",
    aspectRatio: 1,
    gap: 10
  },

  boxItem: {
    flex: 1,
    width: '100%',
    gap: 16
  },

});