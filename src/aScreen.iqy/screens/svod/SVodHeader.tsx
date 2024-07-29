import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';
import CameraIcon from "../../assets/images/camera.svg";
import MenuIcon from "../../assets/images/menu.svg";
import SVodChildIcon from "../../assets/images/svod_child.svg";
import { SafeAreaView } from "react-native-safe-area-context";

interface SVodHeaderProps {
}

export default function SVodHeaderView({
}: SVodHeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{padding: 5}}>
        <CameraIcon height={24} />
      </TouchableOpacity>
      <View style={styles.tabBar}>
        <Text style={{color:"#e1ffffff", fontSize: 16, fontWeight: '400'}}>关注</Text>
        <Text style={{color:"#e1ffffff", fontSize: 20, fontWeight: '600'}}>推荐</Text>
        <Text style={{color:"#e1ffffff", fontSize: 16, fontWeight: '400'}}>欧洲杯</Text>
        <SVodChildIcon height={19} />
      </View>
      <TouchableOpacity style={{padding: 5}}>
        <MenuIcon height={24} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 5}}>
        <SearchIcon width={24} height={24} color="#00DC5A"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 8,
    paddingRight: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: "center",
    zIndex: 100
  },
  tabBar: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 32,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});