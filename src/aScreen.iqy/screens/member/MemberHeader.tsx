import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';
import MemberChooseIcon from "../../assets/images/member_choose.svg";
import MemberVipIcon from "../../assets/images/member_vip.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const memberBg1 = require("../../assets/images/member_bg1.png");
const memberBg2 = require("../../assets/images/member_bg2.png");

interface MemberHeaderProps {
}

export default function MemberHeaderView({
}: MemberHeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{padding: 5}}>
        <MemberChooseIcon height={24} />
      </TouchableOpacity>
      <View style={styles.space}>
      </View>
      <TouchableOpacity style={{padding: 5}}>
        <MemberVipIcon height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 5}}>
        <SearchIcon width={24} height={24} color="#fff"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  space: {
    flex: 1,
  },
});