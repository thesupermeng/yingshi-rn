import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Menu from "../../assets/images/menu.svg";

interface HomeTabProps {
}

export default function HomeTabView({}: HomeTabProps) {
  const items = ["首页", "热点", "孤战", "颜心记", "电视剧", "电影", "动漫"]
  return <View style={styles.container}>
    <View style={styles.tab}>
      {
        items.map((tab: string, idx: number) => (
          <View key={`home-tab-${idx}`} style={styles.tabItem}>
            <Text style={idx == 0 ? styles.tabTextSelect : styles.tabText}>{tab}</Text>
          </View>
        ))
      }
    </View>
    <TouchableOpacity style={{padding: 5, marginLeft: 20}}>
      <Menu height={24} />
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 3,
    paddingRight: 16,
    height: 48,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  tab: {
    height: 28,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: "200%",
    justifyContent: 'flex-start',
    alignItems: "center",
    overflow: "hidden"
  },
  tabItem: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  tabText: {
    color: "#000000AA",
    fontSize: 16,
    fontWeight: '400',
  },
  tabTextSelect: {
    color: "#000000",
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