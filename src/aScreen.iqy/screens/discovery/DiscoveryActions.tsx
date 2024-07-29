import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DiscoveryActionIcon1 from "../../assets/images/discovery_action_1.svg";
import DiscoveryActionIcon2 from "../../assets/images/discovery_action_2.svg";
import DiscoveryActionIcon3 from "../../assets/images/discovery_action_3.svg";
import DiscoveryActionIcon4 from "../../assets/images/discovery_action_4.svg";
import { spacing } from "../../const/layout";

interface DiscoveryActionsProps {
}

export default function DiscoveryActionsView({}: DiscoveryActionsProps) {
  return <View style={styles.container}>
    
    <View style={styles.actionItem}>
      <View style={styles.bgBox}></View>
      <DiscoveryActionIcon1 height={35}/>
      <Text style={styles.actionText}>空降预约</Text>
    </View>
    <View style={styles.actionItem}>
      <View style={styles.bgBox}></View>
      <DiscoveryActionIcon2 height={35}/>
      <Text style={styles.actionText}>一起聊</Text>
    </View>
    <View style={styles.actionItem}>
      <View style={styles.bgBox}></View>
      <DiscoveryActionIcon3 height={35}/>
      <Text style={styles.actionText}>桃豆</Text>
    </View>
    <View style={styles.actionItem}>
      <View style={styles.bgBox}></View>
      <DiscoveryActionIcon4 height={35}/>
      <Text style={styles.actionText}>泡泡圈</Text>
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
  bgBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: "80%",
    zIndex: -1,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  actionItem: {
    flex: 1,
    aspectRatio: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 8,
  },
  actionText: {
    color: "#000000AA",
    fontSize: 15,
    fontWeight: '600',
  },
  
});