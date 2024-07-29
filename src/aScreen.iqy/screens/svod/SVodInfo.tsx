import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';
import CameraIcon from "../../assets/images/camera.svg";
import MenuIcon from "../../assets/images/menu.svg";
import SVodChildIcon from "../../assets/images/svod_child.svg";

interface SVodInfoProps {
  vod: any;
}

export default function SVodInfoView({
  vod
}: SVodInfoProps) {
  return (
    <View style={{...styles.container, gap: 5}}>
      <Text style={{color:"#ffffff", fontSize: 18, fontWeight: '600'}}>@爱笑的豆妹儿</Text>
      <Text style={{color:"#ffffff", fontSize: 14, fontWeight: '400'}}>{vod.mini_video_title ?? ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 15,
    bottom: 15,
    right: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "flex-start",
  },
  
});