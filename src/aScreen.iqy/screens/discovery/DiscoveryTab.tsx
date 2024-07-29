import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Menu from "../../assets/images/menu.svg";
import { spacing } from "../../const/layout";

interface DiscoveryTabProps {
}

export default function DiscoveryTabView({}: DiscoveryTabProps) {
  const items = ["优选", "藏品", "发现", "风云榜", "新片预告"]
  return <View style={styles.container}>
    <View style={styles.tab}>
      {
        items.map((tab: string, idx: number) => (
          <View key={`home-tab-${idx}`} style={styles.tabItem}>
            <Text style={idx == 2 ? styles.tabTextSelect : styles.tabText}>{tab}</Text>
          </View>
        ))
      }
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: spacing.sideOffset,
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
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
    overflow: "hidden"
  },
  tabItem: {
    
  },
  tabText: {
    color: "#000000AA",
    fontSize: 17,
    fontWeight: '400',
  },
  tabTextSelect: {
    color: "#000000",
    fontSize: 20,
    fontWeight: '800',
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