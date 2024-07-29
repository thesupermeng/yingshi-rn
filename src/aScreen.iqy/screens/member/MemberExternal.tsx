import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import MemberFreshIcon from "../../assets/images/member_fresh.svg";
import MemberExtIcon1 from "../../assets/images/member_ext_1.svg";
import MemberExtIcon2 from "../../assets/images/member_ext_2.svg";
import MemberExtIcon3 from "../../assets/images/member_ext_3.svg";
import MemberExtIcon4 from "../../assets/images/member_ext_4.svg";

interface MemberExternalProps {
}

export default function MemberExternalView({
}: MemberExternalProps) {

  const items = [
    {id: "external-1", title: "移动积分换会员", subtitle: "990积分起>", desc: "积分当钱花", icon: () => <MemberExtIcon1 height={36}/>},
    {id: "external-2", title: "移动卡号送会员", subtitle: "24个月+100话费", desc: "超值优惠", icon: () => <MemberExtIcon2 height={36}/>},
    {id: "external-3", title: "移动积分换会员", subtitle: "24个月+80元话费", desc: "首月0元", icon: () => <MemberExtIcon3 height={36}/>},
    {id: "external-4", title: "移动积分换会员", subtitle: "移动专属特权", desc: "已办用户速领", icon: () => <MemberExtIcon4 height={36}/>},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>更多开通选择</Text>
        <MemberFreshIcon height={15}/>
      </View>
      <View style={styles.grid}>
        {items.map(item => (<View key={item.id} style={styles.gridItem}>
          {item.icon()}
          <View style={styles.gridItemInfo}>
            <Text style={styles.gridItemTitle}>{item.title}</Text>
            <Text style={styles.gridItemSubtitle}>{item.subtitle}</Text>
            <View style={styles.gridItemTag}>
              <Text style={styles.gridItemTagText}>{item.desc}</Text>
            </View>
          </View>
        </View>))}
      </View>
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
    backgroundColor: "#f2f5fa"
  },
  head: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 16
  },
  headText: {
    color: "#000",
    fontSize: 15,
    fontWeight: '600',
  },
  grid: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10
  },
  gridItem: {
    width: "48%",
    aspectRatio: 2.2,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    padding: 10
  },
  gridItemInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "flex-start",
    gap: 1
  },
  gridItemTitle: {
    color: "#000",
    fontSize: 12,
    fontWeight: '600',
  },
  gridItemSubtitle: {
    color: "#000",
    fontSize: 9,
    fontWeight: '400',
  },
  gridItemTag: {
    padding: 3,
    borderRadius: 2,
    backgroundColor: "#fcecef"
  },
  gridItemTagText: {
    color: "#BA4653",
    fontSize: 7,
    fontWeight: '400',
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