import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';

interface DiscoveryHeaderProps {
}

export default function DiscoveryHeaderView({
}: DiscoveryHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={{width: 21, height:21, marginLeft: 10, marginRight: 10}}></View>
        <Text style={{color:"#868686", fontSize: 14, fontWeight: '400'}}>赵显坤同意林小民建议</Text>
        <View style={{width: 21, height:21, marginLeft: 10, marginRight: 10}}>
          <SearchIcon height={21} color="#00DC5A"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
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