import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { spacing } from "../../const/layout";
import MemberWelfareMore from "../../assets/images/member_welfare_more.svg"

interface DiscoveryHotsProps {
}

export default function DiscoveryHotsView({}: DiscoveryHotsProps) {
  const items = [
    {text: "孤战迷城花絮"}, 
    {text: "执行法官花絮"}, 
    {text: "江心白寻找颜南星的...", tag: "热"}, 
    {text: "郑凯张真源上老挝车..."}, 
    {text: "错位花絮"}, 
    {text: "新说唱2024纯享"}, 
    {text: "欧孝安与黎少堂的对抗"},
    {text: "闫安阳欧阳璐璐处理占..."},
    {text: "赵小童讲价一套又一套"},
    {text: "种地2"}
  ]

  return <View style={styles.container}>
    <View style={styles.box}>
      <View style={styles.head}>
        <Text style={styles.headText}>大家都在搜</Text>
        <MemberWelfareMore height={18}/>
      </View>
      {items.map((item: any, idx: number) => (
        <View key={`home-tab-${idx}`} style={styles.itemBox}>
          <Text style={styles.itemText} numberOfLines={1} ellipsizeMode="tail">{item.text}</Text>
          {item.tag && <View style={styles.itemTagBox}>
            <Text style={styles.itemTagText}>{item.tag}</Text>
          </View>}  
        </View>
      ))}
    </View>
      
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: spacing.sideOffset,
    justifyContent: 'center',
    alignItems: "center",
    gap: 5,
  },
  box: {
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7
  },
  head: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  headText: {
    color: "#000",
    fontSize: 16,
    fontWeight: '800',
  },
  itemBox: {
    width: "48%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    overflow: "hidden"
  },
  itemText: {
    flex: 1,
    color: "#262626",
    fontSize: 15,
    fontWeight: '400',
  },
  itemTagBox: {
    padding: 3,
    borderRadius: 2,
    backgroundColor: "#E22D66",
  },
  itemTagText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: '400',
  },
});