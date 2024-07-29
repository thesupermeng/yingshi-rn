import React, { useCallback, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import MemberVodMore from "../../assets/images/member_vod_more.svg";
import MemberHotIcon from "../../assets/images/member_hot.svg";

interface MemberVodsProps {
}

export default function MemberVodsView({
}: MemberVodsProps) {

  const [width] = useState(Dimensions.get('window').width);
  const vodWidth = width * 0.75;
  const vodHeight = 250;

  const items = [
    {id: "member-vod-card-1", title: "热播电视剧榜", color: "#08595D", subitems: [
      {id: "vod-1", title: "颜心记", subtitle: "病情相投的相亲相爱", hot: 7141},
      {id: "vod-2", title: "错位", subtitle: "虚拟交错人性难测", hot: 7141},
      {id: "vod-3", title: "孤战迷城", subtitle: "黄景瑜辛芷蕾谍战交锋", hot: 7141},
    ]},
    {id: "member-vod-card-1", title: "热播电影榜", color: "#633619", subitems: [
      {id: "vod-4", title: "制暴", subtitle: "包贝尔在线恶作", hot: 7141},
      {id: "vod-5", title: "我才不要和你...", subtitle: "贾冰自带包袱", hot: 7141},
      {id: "vod-6", title: "前途海量", subtitle: "隧道坍塌慌诞逃生", hot: 7141},
    ]}
  ]

  const images:any = {
    "vod-1": require("../../assets/images/member_vod1.jpeg"),
    "vod-2": require("../../assets/images/member_vod2.jpeg"),
    "vod-3": require("../../assets/images/member_vod3.jpeg"),
    "vod-4": require("../../assets/images/member_vod4.jpeg"),
    "vod-5": require("../../assets/images/member_vod5.jpeg"),
    "vod-6": require("../../assets/images/member_vod6.jpeg"),
  }
  
  const renderListItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <View key={item.id} style={{...styles.box, width: vodWidth, height: vodHeight, backgroundColor: item.color}}> 
          <View style={styles.boxHead}>
            <Text style={styles.boxHeadText}>{item.title}</Text>
            <MemberVodMore height={18}/>
          </View>
          {
            item.subitems.map((e:any, i:number) => (<View style={styles.boxVod}>
              <Text style={styles.boxVodNum}>{i + 1}</Text>
              <FastImage style={styles.boxVodImage} resizeMode="cover" source={images[e.id] as Source}/>
              <View style={styles.boxVodInfo}>
                <Text style={styles.boxVodTitle}>{e.title}</Text>
                <Text style={styles.boxVodSubtitle}>{e.subtitle}</Text>
              </View>
              <MemberHotIcon height={10}/>
              <Text style={styles.boxVodHot}>{e.hot}</Text>
            </View>))
          }
        </View>
      )
    },
    [],
  );


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headTextSelect}>观影排行榜</Text>
        <Text style={styles.headText}>新片预告</Text>
        <Text style={styles.headText}>专属推荐</Text>
        <View style={styles.headTag}/>
      </View>
      <FlatList
        style={{width: "100%", height: vodHeight}}
        horizontal={true}
        data={items}
        initialNumToRender={5}
        windowSize={3}
        maxToRenderPerBatch={10}
        renderItem={renderListItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16, gap: 16}}
        removeClippedSubviews={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: "#f2f5fa",
    gap: 10,
    paddingTop: 10
  },
  head: {
    position: "relative",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10
  },
  headTag: {
    position: "absolute",
    width: 60,
    height: 6,
    left: 12,
    bottom: 0,
    backgroundColor: "#F7D6A0",
    zIndex: -1
  },
  headText: {
    color: "#737373",
    fontSize: 11,
    fontWeight: '400',
  },
  headTextSelect: {
    color: "#000",
    fontSize: 15,
    fontWeight: '600',
  },
  box: {
    justifyContent: "center",
    alignItems: "stretch",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#08595D"
  },
  boxHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  boxHeadText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: '600',
  },
  boxVod: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  boxVodNum: {
    width: 15,
    textAlign: "left",
    color: "#fff",
    fontSize: 15,
    fontWeight: '400',
  },
  boxVodInfo: {
    flex: 1, 
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    gap: 7
  },
  boxVodImage: {
    width: "15%",
    aspectRatio: 0.8,
    borderRadius: 5
  },
  boxVodTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: '500',
  },
  boxVodSubtitle: {
    color: "#ffffff99",
    fontSize: 11,
    fontWeight: '400',
  },
  boxVodHot: {
    color: "#fff",
    fontSize: 13,
    fontWeight: '600',
  },
  products: {
    position: "relative",
    width: '100%',
    aspectRatio: 1.81,
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 20
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  tab: {
    width: "100%",
    aspectRatio: 6.5,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  tabTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: '600',
  },
  tabDesc: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: '400',
  },
  feature: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  featureItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    gap: 5
  },
  featureText: {
    color: "#fff3c7",
    fontSize: 10,
    fontWeight: '400',
  },
  submit: {
    position: "relative",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 14,
    alignItems: "stretch",
  },
  submitButton: {
    aspectRatio: 8.6
  },
  submitButtonTag: {
    position: "absolute",
    right: 16,
    top: -8,
    height: 15,
    aspectRatio: 3.4,
  },
  tail: {
    width: "100%",
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 20,
    backgroundColor: '#f2f5fa'
  }

});