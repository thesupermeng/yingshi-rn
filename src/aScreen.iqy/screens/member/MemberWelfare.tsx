import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import MemberWelfareMore from "../../assets/images/member_welfare_more.svg"

interface MemberWelFareProps {
}

export default function MemberWelFareView({
}: MemberWelFareProps) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>会员优选福利</Text>
        <MemberWelfareMore height={15}/>
      </View>
      <View style={styles.grid}>
        <FastImage style={styles.gridItem} resizeMode="cover" source={require("../../assets/images/member_welfare_1.png")}/>
        <FastImage style={styles.gridItem} resizeMode="cover" source={require("../../assets/images/member_welfare_2.png")}/>
        <FastImage style={styles.gridItem} resizeMode="cover" source={require("../../assets/images/member_welfare_3.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: "#f2f5fa",
    paddingTop: 16
  },
  head: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 16
  },
  headText: {
    color: "#000",
    fontSize: 15,
    fontWeight: '600',
  },
  grid: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10
  },
  gridItem: {
    flex: 1,
    aspectRatio: 0.67,
    borderRadius: 8,
  },


});