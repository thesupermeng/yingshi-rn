import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { spacing } from "../../const/layout";
import DiscoveryShareIcon from "../../assets/images/discovery_share.svg";
import DiscoveryCommentIcon from "../../assets/images/discovery_comment.svg";
import DiscoveryFavIcon from "../../assets/images/discovery_fav.svg";
import FastImage from "react-native-fast-image";
import WebView from "react-native-webview";

interface DiscoveryCardProps {
  data?: any,
  vod?: any,
  index?: number
}

const cardNumbers: any = {}

const vodImages:any = {
  "哈哈哈哈哈 第4季": require("../../assets/images/vod-1.jpeg"),
  "极限挑战第10季": require("../../assets/images/vod-2.jpeg"),
  "九龙城寨之围城": require("../../assets/images/vod-3.jpg"),
  "狂飙": require("../../assets/images/vod-4.jpeg"),
  "莲花楼": require("../../assets/images/vod-5.jpg"),
  "宁安如梦": require("../../assets/images/vod-6.jpeg"),
  "前途海量": require("../../assets/images/vod-7.jpg"),
  "庆余年 第二季": require("../../assets/images/vod-8.webp"),
  "种地吧 第二季": require("../../assets/images/vod-9.jpg"),
  "追风者": require("../../assets/images/vod-10.png"),
}

export default function DiscoveryCardView({data, vod, index}: DiscoveryCardProps) {
  const userName = useMemo(() => {
    return data?.user_name as string ?? "---";
  }, [data])
  const userAvatar = useMemo(() => {
    return data?.profile_image_url as string;
  }, [data])
  const userText = useMemo(() => {
    return data?.text as string ?? "";
  }, [data])
  const images = useMemo(() => {
    return data?.pic_urls as string[] ?? [];
  }, [data])
  const vodImage = useMemo(() => {
    const name = vod?.name as string ?? "";
    return vodImages[name];
  }, [vod])
  
  const num = (name: string, min: number, max: number) => {
    const key = `${index}-${name}`
    let value = cardNumbers[key];
    if (value == undefined) {
      value = min + Math.floor((max-min)*Math.random());
      cardNumbers[key] = value;
    }
    return value;
  }

  return <View style={styles.container}>
    <View style={styles.head}>
      <FastImage style={styles.headIcon} resizeMode="cover" source={{uri: userAvatar}}/>
      <Text style={styles.headText}>{userName}</Text>
    </View>
    {userText && <Text style={styles.cardText}>{userText}</Text>}
    {/* {userText && <WebView
      originWhitelist={['*']}
      source={{ html: userText }}
      style={{ flex: 1 }}
      javaScriptEnabled
    />}   */}
    <View style={{...styles.cardImages, width: (images.length == 2 || images.length == 4) ? "66%" : undefined }}>
      {images.map((item: any, idx: number) => (
        <FastImage 
          source={{uri: item}}
          key={`discovery-card-image-${idx}`} 
          style={{...styles.cardImageItem, width: (images.length == 2 || images.length == 4) ? "48.5%" : "32%" }}
        />
      ))}
    </View>
    <View style={styles.cardVod}>
      <View style={styles.cardVodBox}>
        <FastImage style={styles.cardVodImage} source={vodImage}/>
        <View style={styles.cardVodInfo}>
          <Text style={styles.cardVodTitle}>{vod?.name}</Text>
          <View style={styles.cardVodDetail}>
            <View style={styles.cardVodRemark}>
              <Text style={styles.cardVodRemarkText}>{vod?.remark}</Text>
            </View>
            <Text style={styles.cardVodDetailText} numberOfLines={1} ellipsizeMode="tail">
              {`${vod?.category} / ${vod?.person}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.cardAction}>
      <View style={styles.cardActionItem}>
        <DiscoveryShareIcon height={20}/>
      </View>
      <View style={styles.cardActionItem}>
        <DiscoveryCommentIcon height={20}/>
        <View style={styles.cardActionTag}>
          <Text style={styles.cardActionTagText}>
            {num("comment", 20, 70)}
          </Text>
        </View>
      </View>
      <View style={styles.cardActionItem}>
        <DiscoveryFavIcon height={20}/>
        <View style={styles.cardActionTag}>
          <Text style={styles.cardActionTagText} numberOfLines={1} ellipsizeMode="tail">
            { num("fav", 2000, 10000) }
          </Text>
        </View>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "stretch",
    backgroundColor: '#fff',
    gap: 5
  },
  head: {
    width: "100%",
    paddingHorizontal: spacing.sideOffset,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    gap: 10
  },
  headIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: "hidden"
  },
  headText: {
    color: "#85868a",
    fontSize: 15,
    fontWeight: '600',
  },
  cardText: {
    paddingHorizontal: spacing.sideOffset,
    paddingVertical: 5,
    color: "#000000",
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25
  },
  cardImages: {
    marginHorizontal: spacing.sideOffset,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: 'wrap',
    gap: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardImageItem: {
    width: "32%",
    aspectRatio: 1,
    padding: 3,
    borderRadius: 2,
    backgroundColor: "#E22D66",
  },
  cardVod: {
    width: "100%",
    paddingHorizontal: spacing.sideOffset,
    paddingVertical: 5,
    flexDirection: "row",
  },
  cardVodBox: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#f2f5fa",
    flexDirection: "row",
    alignItems: "center",
    height: 66,
    overflow: "hidden"
  },
  cardVodImage: {
    height: "100%",
    aspectRatio: 0.7,
    backgroundColor: '#ff0'
  },
  cardVodInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    gap: 5
  },
  cardVodTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: '600',
  },
  cardVodDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  cardVodDetailText: {
    flex: 1,
    color: "#666666",
    fontSize: 12,
    fontWeight: '400',
  },
  cardVodRemark: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: "#ffeeec"
  },
  cardVodRemarkText: {
    color: "#DA6E4B",
    fontSize: 11,
    fontWeight: '400',
  },
  cardAction: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardActionItem: {
    width: 50,
    height: 20,
    paddingHorizontal: spacing.sideOffset,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  cardActionTag: {
    position: "absolute",
    right: -10,
    bottom: -3,
    width: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardActionTagText: {
    color: "#9f9f9f",
    fontSize: 9,
    fontWeight: '400',
  },
});