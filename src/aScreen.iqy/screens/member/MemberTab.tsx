import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MemberTabBuyIcon from "../../assets/images/member_tab_buy.svg";

interface MemberTabProps {
}

export default function MemberTabView({}: MemberTabProps) {

  return <View style={styles.container}>
    <View style={styles.tabItem}>
      <Text style={styles.tabTextSelect}>推荐</Text>
    </View>
    <View style={styles.tabItem}>
      <Text style={styles.tabText}>看影剧</Text>
    </View>
    <View style={styles.tabItem}>
      <MemberTabBuyIcon height={25}/>
    </View>
    <View style={styles.tabItem}>
      <Text style={styles.tabText}>换会员</Text>
    </View>
    <View style={styles.tabItem}>
      <Text style={styles.tabText}>赚小钱</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "105%",
    height: 48,
    paddingLeft: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  tabItem: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  tabText: {
    color: "#ffffffaa",
    fontSize: 17,
    fontWeight: '400',
  },
  tabTextSelect: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: '600',
  },
  searchBar: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  searchInput: {
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    // textAlign: 'left',
    // borderRadius: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // // flex: 1,
    // // paddingTop: 4,
    // // paddingBottom: 4,
    // backgroundColor: 'transparent',
  },
  searchText: {
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    textAlign: 'left',
    borderRadius: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // flex: 1,
    // paddingTop: 4,
    // paddingBottom: 4,
    backgroundColor: 'transparent',
  }
});