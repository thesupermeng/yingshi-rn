import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../assets/images/search.svg';
import CameraIcon from "../../assets/images/camera.svg";
import MenuIcon from "../../assets/images/menu.svg";
import SVodCommentIcon from "../../assets/images/svod_comment.svg";
import SVodFavIcon from "../../assets/images/svod_fav.svg";
import SVodFollowIcon from "../../assets/images/svod_follow.svg";
import SVodHeartIcon from "../../assets/images/svod_heart.svg";
import SVodRewardIcon from "../../assets/images/svod_reward.svg";
import FastImage, { Source } from "react-native-fast-image";

interface SVodOptionsProps {
  vod: any;
  avatar?: number | Source
}

const vodNumbers:any = {}

export default function SVodOptionsView({
  vod, avatar
}: SVodOptionsProps) {

  const iconSize = 35
  const fontSize = 11

  const num = (name: string, min: number, max: number) => {
    const key = `${vod.mini_video_id}-${name}`
    let value = vodNumbers[key];
    if (value == undefined) {
      value = min + Math.floor((max-min)*Math.random());
      vodNumbers[key] = value;
    }
    return value;
  }

  return (
    <View style={styles.container}>
      <View style={styles.optionAction}>
        <FastImage 
          source={avatar}
          style={{
            width: 45, 
            height: 45,
            paddingBottom: 25,
            borderRadius: 22.5
          }} 
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center"}}>
          <SVodFollowIcon height={18} />
        </View>
      </View>
      <View style={styles.optionAction}>
        <SVodHeartIcon height={iconSize} />
        <Text style={{color:"#e1ffffff", fontSize: fontSize, fontWeight: '600'}}>
          {num("fav", 2000, 10000)}
        </Text>
      </View>
      <View style={styles.optionAction}>
        <SVodCommentIcon height={iconSize} />
        <Text style={{color:"#e1ffffff", fontSize: fontSize, fontWeight: '600'}}>
          {num("comment", 20, 70)}
        </Text>
      </View>
      <View style={styles.optionAction}>
        <SVodFavIcon height={iconSize} />
        <Text style={{color:"#e1ffffff", fontSize: fontSize, fontWeight: '600'}}>收藏</Text>
      </View>
      <View style={styles.optionAction}>
        <SVodRewardIcon height={iconSize} />
        <Text style={{color:"#e1ffffff", fontSize: fontSize, fontWeight: '600'}}>分享</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    right: 5,
    width: 56,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    gap: 20
  },
  optionAction: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3
  },
});