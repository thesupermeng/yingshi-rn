import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';
import Logo from "../../assets/images/logo.svg";
import History from "../../assets/images/history.svg";
import Addision from "../../assets/images/Add.svg";

interface HomeHeaderProps {
}

export default function HomeHeaderView({
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <Logo height={22}/>
      <View style={styles.searchBar}>
        <View style={{width: 21, height:21, marginLeft: 10, marginRight: 10}}></View>
        <Text style={{color:"#868686", fontSize: 14, fontWeight: '400'}}>恋爱综艺</Text>
        <View style={{width: 21, height:21, marginLeft: 10, marginRight: 10}}>
          <SearchIcon height={21} color="#00DC5A"/>
        </View>
      </View>
      <TouchableOpacity style={{padding: 5}}>
        <History height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 5}}>
        <Addision height={24} />
      </TouchableOpacity>
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